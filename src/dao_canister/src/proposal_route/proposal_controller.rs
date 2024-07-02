

use crate::State;

use ic_cdk::api;
use crate::types::{ProposalInput,Proposals};


pub fn create_new_proposal(state: &mut State, proposal: ProposalInput,proposal_id:String) -> String {
    let principal_id = api::caller();



    
    let new_proposal = Proposals {
        proposal_id:proposal_id.clone(),
        proposal_title: proposal.proposal_title,
        proposal_description: proposal.proposal_description,
        proposal_status: String::new(), 
        proposal_amount: proposal.proposal_amount,
        proposal_submitted_at: String::new(), 
        proposal_expired_at: String::new(), 
        proposal_receiver_id: proposal.proposal_receiver_id,
        proposal_approved_votes: 0, 
        approved_votes_list: Vec::new(),
        proposal_rejected_votes: 0, 
        rejected_votes_list: Vec::new(), 
        required_votes: 7,
        created_by: principal_id,
        comments: 0, 
        comments_list: Vec::new(), 
        share_count: 0, 
    };

    state.proposals.insert(proposal_id, new_proposal);

    
    return "proposal added successfully".to_string();
}


// pub fn get_all_proposals(state:&State)-> HashMap<String, Proposals>{
//     return state.proposals;
// }

