use ic_cdk::api::management_canister::main::raw_rand;
use crate::types::{ProposalInput,Proposals,Dao};
use sha2::{Digest, Sha256};
use crate::{proposal_route, with_state};
use ic_cdk::{query, update};
use candid::Principal;
use std::collections::HashMap;



#[update]
async fn create_proposal(proposal: ProposalInput) -> String {
    let uuids = raw_rand().await.unwrap().0;
    let proposal_id = format!("{:x}", Sha256::digest(&uuids)); 
    with_state(|state| proposal_route::create_new_proposal(state, proposal.clone(),proposal_id.clone())).await
}

#[query]
async fn get_all_proposals() -> HashMap<String, Proposals> {
    with_state(|state| proposal_route::get_all_proposals(state)).await
}

#[query]
async fn get_proposal_by_id(proposal_id: String) -> Proposals {
    with_state(|state| state.proposals.get(&proposal_id).unwrap().clone()).await
}


#[query]
async fn get_dao_detail() -> Dao {
    with_state(|state| state.dao.clone()).await
}



