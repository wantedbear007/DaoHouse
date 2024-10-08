use crate::functions::call_inter_canister;
use crate::{with_state, ProposalInstance, ProposalState};

use crate::types::{ProposalInput, Proposals};
use candid::Principal;
use ic_cdk::api;
use ic_cdk::api::management_canister::main::raw_rand;
use sha2::{Digest, Sha256};

// to create new canister
// #[ic_cdk::update(guard=check_members)]
// TODO add guards
#[ic_cdk::update]
pub async fn create_proposal_controller(
    // state: &mut State,
    daohouse_backend_id: candid::Principal,
    proposal: ProposalInput,
    // proposal_id: String,
) -> String {
    // let principal_id = api::caller();

    let uuids = raw_rand().await.unwrap().0;
    let proposal_id = format!("{:x}", Sha256::digest(&uuids));

    let mut proposal_expire_time: u64 = 0;
    let mut required_votes = 0;
    let mut dao_members: Vec<Principal> = Vec::new();

    with_state(|state| {
        proposal_expire_time =
            ic_cdk::api::time() + (state.dao.cool_down_period as u64 * 86_400 * 1_000_000_000);
        required_votes = state.dao.required_votes;
        dao_members = state.dao.members.clone();
    });

    // let proposal_expire_time =
    //     ic_cdk::api::time() + (state.dao.cool_down_period as u64 * 86_400 * 1_000_000_000);

    let new_proposal = Proposals {
        proposal_id: proposal_id.clone(),
        proposal_title: proposal.proposal_title.clone(),
        proposal_description: proposal.proposal_description.clone(),
        proposal_status: ProposalState::Open,
        proposal_submitted_at: ic_cdk::api::time(),
        proposal_expired_at: proposal_expire_time.clone(),
        proposal_approved_votes: 0,
        approved_votes_list: Vec::new(),
        proposal_rejected_votes: 0,
        rejected_votes_list: Vec::new(),
        required_votes: required_votes.clone(),
        created_by: api::caller(),
        comments: 0,
        comments_list: Vec::new(),
        share_count: 0,
        proposal_type: proposal.proposal_type.clone(),
        principal_of_action: proposal.principal_of_action.unwrap_or(api::caller()),
        likes: 0,
        group_to_join: proposal.group_to_join,
    };

    // to record proposals on Parent canister
    let proposal_copy: ProposalInstance = ProposalInstance {
        action_principal: proposal.principal_of_action.unwrap_or(api::caller()),
        associated_dao_canister_id: ic_cdk::api::id(),
        created_by: api::caller(),
        description: proposal.proposal_description,
        expiring_on: proposal_expire_time,
        proposal_id: proposal_id.clone(),
        proposal_type: proposal.proposal_type,
        required_votes: required_votes,
        submitted_at: ic_cdk::api::time(),
        title: proposal.proposal_title,
        dao_members,
    };

    let _ = call_inter_canister::<ProposalInstance, Result<String, String>>(
        "add_proposal",
        proposal_copy,
        daohouse_backend_id,
    )
    .await
    .map_err(|err| return format!("{}{}", crate::utils::WARNING_INTER_CANISTER, err));

    with_state(|state| {
        let mut updated_dao = state.dao.clone();
        updated_dao.proposals_count += 1;
        updated_dao.proposal_ids.push(proposal_id.clone());
        state.dao = updated_dao;
        state.proposals.insert(proposal_id, new_proposal);
    });

    return String::from(crate::utils::REQUEST_ADD_MEMBER);
}

// pub fn get_all_proposals(state:&State)-> HashMap<String, Proposals>{
//     return state.proposals;
// }

pub fn check_proposal_state(expire_date: &u64) -> bool {
    expire_date.to_owned() <= ic_cdk::api::time()
}
