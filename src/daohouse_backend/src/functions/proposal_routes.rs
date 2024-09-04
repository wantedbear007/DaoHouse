// Proposal routes

use crate::{
    routes::{add_proposal_controller, delete_proposal_controller, get_proposal_controller},
    with_state, ProposalValueStore,
};

#[ic_cdk::update]
pub fn add_proposal(args: crate::ProposalValueStore) -> Result<String, String> {
    with_state(|state| add_proposal_controller(state, args))
        .map_err(|err| return format!("Error in proposal: {:?}", err))
}

#[ic_cdk::query]
pub fn get_proposal(args: crate::Pagination) -> Vec<ProposalValueStore> {
    with_state(|state| get_proposal_controller(state, args))
}

#[ic_cdk::update]
pub fn delete_proposal(proposal_id: String) -> Result<String, String> {
    with_state(|state| delete_proposal_controller(state, &proposal_id))
}
