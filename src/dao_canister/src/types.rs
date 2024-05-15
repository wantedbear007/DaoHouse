use candid::{CandidType, Principal};
use serde::{Deserialize, Serialize};


#[derive(Clone,CandidType,Serialize,Deserialize)]
pub struct Proposals{
    pub proposal_id: String,
    pub proposal_title: String,
    pub proposal_description: String,
    pub proposal_status: String,
    pub proposal_amount:String,
    pub proposal_submitted_at:String,
    pub proposal_expired_at:String,
    pub proposal_receiver_id:String,
    pub proposal_approved_votes:u64,
    pub approved_votes_list:Vec<String>,
    pub proposal_rejected_votes:u64,
    pub rejected_votes_list:Vec<String>,
    pub required_votes:u64,
    pub created_by: Principal,
    pub comments:u64,
    pub comments_list:Vec<String>,
    pub share_count:u64,
}

#[derive(Clone,CandidType,Serialize,Deserialize)]
pub struct ProposalInput{
    pub proposal_title: String,
    pub proposal_description: String,
    pub proposal_amount:String,
    pub proposal_receiver_id:String,
    pub created_by: String,
}


#[derive(Clone,CandidType,Serialize,Deserialize)]
pub struct Dao{
    pub dao_id:Principal,
    pub dao_name:String,
    pub purpose:String,
    pub daotype:String,
    pub link_of_document:String,
    pub cool_down_period:String,
    pub tokenissuer:String,
    pub linksandsocials:Vec<String>,
    pub required_votes:i8,
    pub groups_count:u64,
    pub group_name:Vec<String>,
}

#[derive(Clone,CandidType,Serialize,Deserialize)]
pub struct DaoInput{
    pub dao_name:String,
    pub purpose:String,
    pub daotype:String,
    pub link_of_document:String,
    pub cool_down_period:String,
    pub members:Vec<Principal>,
    pub tokenissuer:String,
    pub linksandsocials:Vec<String>,
    pub required_votes:i8,

}





