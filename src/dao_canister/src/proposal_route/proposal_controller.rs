use crate::{ProposalState, State};

use crate::types::{ProposalInput, Proposals};
use ic_cdk::api;

pub fn create_new_proposal(
    state: &mut State,
    proposal: ProposalInput,
    proposal_id: String,
) -> String {
    // let principal_id = api::caller();

    let new_proposal = Proposals {
        proposal_id: proposal_id.clone(),
        proposal_title: proposal.proposal_title,
        proposal_description: proposal.proposal_description,
        proposal_status: ProposalState::Open,
        proposal_submitted_at: ic_cdk::api::time(),
        proposal_expired_at: ic_cdk::api::time()
            + (state.dao.cool_down_period as u64 * 86_400 * 1_000_000_000),

        // proposal_receiver_id: proposal.proposal_receiver_id,
        proposal_approved_votes: 0,
        approved_votes_list: Vec::new(),
        proposal_rejected_votes: 0,
        rejected_votes_list: Vec::new(),
        required_votes: state.dao.required_votes,
        created_by: api::caller(),
        comments: 0,
        comments_list: Vec::new(),
        share_count: 0,
        proposal_type: proposal.proposal_type,
        principal_of_action: proposal.principal_of_action.unwrap_or(api::caller()),
        likes: 0,
    };
    let mut updated_dao = state.dao.clone();
    updated_dao.proposals_count += 1;
    updated_dao.proposal_ids.push(proposal_id.clone());
    state.dao = updated_dao;

    state.proposals.insert(proposal_id, new_proposal);

    return String::from("proposal created successfully");
}

// pub fn get_all_proposals(state:&State)-> HashMap<String, Proposals>{
//     return state.proposals;
// }

pub fn check_proposal_state(expire_date: &u64) -> bool {
    expire_date.to_owned() <= ic_cdk::api::time()
}
