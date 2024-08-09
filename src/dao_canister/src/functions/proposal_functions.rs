use std::borrow::{Borrow, BorrowMut};

use crate::proposal_route::check_proposal_state;
use crate::types::{Dao, ProposalInput, Proposals};
use crate::{guards::*, DaoGroup, Pagination};
use crate::{proposal_route, with_state, ProposalState, VoteParam};
use candid::Principal;
use ic_cdk::api;
use ic_cdk::api::call::CallResult;
use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk::{query, update};
use sha2::{Digest, Sha256};

#[update(guard=check_members)]
pub async fn create_proposal(daohouse_backend_id: String, proposal: ProposalInput) -> String {
    let uuids = raw_rand().await.unwrap().0;
    let proposal_id = format!("{:x}", Sha256::digest(&uuids));
    let response = with_state(|state| {
        proposal_route::create_new_proposal(state, proposal.clone(), proposal_id.clone())
    });

    let _res: CallResult<(String,)> = ic_cdk::call(
        Principal::from_text(daohouse_backend_id).unwrap(),
        "update_proposal_count",
        (),
    )
    .await;

    response
}

// get all proposals
#[query]
fn get_all_proposals(page_data: Pagination) -> Vec<Proposals> {
    // let mut proposals: Vec<Proposals> = Vec::new();

    with_state(|state| {
        let mut proposals: Vec<Proposals> = Vec::with_capacity(state.proposals.len() as usize);
        for (_, v) in state.proposals.iter() {
            proposals.push(v.clone());
        }

        let ending = proposals.len();

        if ending == 0 {
            return proposals;
        }

        let start = page_data.start as usize;
        let end = page_data.end as usize;

        if start < ending {
            let end = end.min(ending);
            return proposals[start..end].to_vec();
        }
        Vec::new()
    })
}

// get user specific user
#[update(guard=prevent_anonymous)]
fn get_my_proposal() -> Result<Vec<Proposals>, String> {
    // with_state(|state| state.proposals.)

    with_state(|state| {
        let mut proposals: Vec<Proposals> = Vec::new();

        for v in state.proposals.iter() {
            if v.1.created_by == api::caller() {
                proposals.push(v.1.clone());
            }
        }
        Ok(proposals)
    })
}

#[query]
async fn get_proposal_by_id(proposal_id: String) -> Proposals {
    with_state(|state| state.proposals.get(&proposal_id).unwrap().clone())
}

#[query]
async fn get_dao_detail() -> Dao {
    with_state(|state| state.dao.clone())
}

#[update(guard = check_members)]
fn change_proposal_state(
    proposal_id: String,
    proposal_state: ProposalState,
) -> Result<String, String> {
    with_state(|state| match &mut state.proposals.get(&proposal_id) {
        Some(pro) => {
            pro.proposal_status = proposal_state;
            state.proposals.insert(proposal_id, pro.to_owned());
            Ok(format!("State changed to {:?} ", pro.proposal_status))
        }
        None => Err(String::from("Proposal does not exist.")),
    })
}

#[update(guard = prevent_anonymous)]
fn comment_on_proposal(comment: String, proposal_id: String) -> Result<String, String> {
    with_state(|state| match &mut state.proposals.get(&proposal_id) {
        Some(pro) => {
            pro.comments_list.push(comment);
            pro.comments += 1;
            state.proposals.insert(proposal_id, pro.to_owned());
            Ok(String::from("Comment was sucessfully added"))
        }
        None => Err(String::from("Proposal does not exist.")),
    })
}

fn refresh_proposals(id: &String) {
    with_state(|state| match &mut state.proposals.get(&id) {
        Some(proposal) => {
            if check_proposal_state(&proposal.proposal_expired_at) {
                proposal.proposal_status = ProposalState::Expired;
                state.proposals.insert(id.clone(), proposal.to_owned());

                // Ok(format!("Updated {:?}", proposal))
            }
        }
        None => (),
    })
}

#[update]
fn proposal_refresh() -> Result<String, String> {
    let mut ids: Vec<String> = Vec::new();

    with_state(|state| {
        // ic_cdk::println!("loop ke aandar");

        //    let abc: Vec<String> = state.dao.proposal_ids.iter().collect();
        ids = state.dao.proposal_ids.clone();
    });

    for id in ids.iter() {
        execute_add_proposals(id);
        refresh_proposals(id);
    }

    Ok("Refresh completed".to_string())
}

#[update(guard = prevent_anonymous)]
fn vote(proposal_id: String, voting: VoteParam) -> Result<String, String> {
    check_voting_right(&proposal_id)?;
    let principal_id = api::caller();

    with_state(|state| match &mut state.proposals.get(&proposal_id) {
        Some(pro) => {
            if voting == VoteParam::Yes {
                pro.approved_votes_list.push(principal_id);
                pro.proposal_approved_votes += 1;

                state.proposals.insert(proposal_id, pro.to_owned());
                Ok(String::from("Successfully voted in favour of Proposal."))
            } else {
                pro.rejected_votes_list.push(principal_id);
                pro.proposal_rejected_votes += 1;

                state.proposals.insert(proposal_id, pro.to_owned());
                Ok(String::from("Successfully voted against the proposal."))
            }
        }
        None => Err(String::from("Proposal ID is invalid !")),
    })
}
#[query(guard=prevent_anonymous)]
fn search_proposal(proposal_id: String) -> Vec<Proposals> {
    let mut propo: Vec<Proposals> = Vec::new();

    with_state(|state| {
        for y in state.proposals.iter() {
            if y.1.proposal_id == proposal_id {
                propo.push(y.1)
            }
        }

        propo
    })
}

// #[query]
fn execute_add_proposals(id: &String) {
    with_state(|state| match state.proposals.get(&id) {
        Some(val) => {
            let is_completed = val.proposal_approved_votes + val.proposal_rejected_votes
                >= val.required_votes as u64;

            let is_success = val.proposal_approved_votes >= 5;
            if is_completed && is_success {
                let mut updated_proposal = val.clone();

                let mut updated_dao = state.dao.clone();
                updated_dao.members.push(val.created_by);
                updated_dao.members_count += 1;

                state.dao = updated_dao;
                updated_proposal.proposal_status = ProposalState::Accepted;
                state.proposals.insert(id.to_owned(), updated_proposal);
            } else {
                let mut updated_proposal = val.clone();

                updated_proposal.proposal_status = ProposalState::Rejected;
                state.proposals.insert(id.to_owned(), updated_proposal);
            }
        }
        None => (),
    })

    // with_state(|state| match &mut state.proposals.get(&id) {
    //     Some(proposal) => {

    //         let is_completed = proposal.proposal_approved_votes+ proposal.proposal_rejected_votes >= proposal.required_votes as u64;

    //         if is_completed {
    //             state.dao.members.push(proposal.created_by);
    //             proposal.proposal_status = ProposalState::Expired;
    //             state.proposals.insert(id.clone(), proposal.to_owned());

    //             // Ok(format!("Updated {:?}", proposal))
    //         }
    //     }
    //     None => (),
    // })
}

// get all groups
#[update]
fn get_all_groups() -> Vec<DaoGroup> {
    with_state(|state| {
        let mut groups: Vec<DaoGroup> = Vec::new();

        for x in state.dao_groups.iter() {
            groups.push(x.1);
        }
        groups
    })
}
