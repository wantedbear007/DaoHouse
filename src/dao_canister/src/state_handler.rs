use std::collections::HashMap;
use candid::Principal;
use serde::{Serialize,Deserialize};
use crate::types::{Proposals,Dao};
// use std::collections::BTreeMap;


#[derive(Serialize,Deserialize)]
pub struct State {

    pub proposals : HashMap<String, Proposals>,
    pub dao_detail : HashMap<Principal, Dao>,
    pub dao:Dao


    // pub users: HashMap<Principal, User>,
}

impl State {
    pub fn new() -> Self {
        Self {

            proposals: HashMap::new(),
            dao_detail: HashMap::new(),
            dao: Dao {
                dao_id: Principal::anonymous(), 
                dao_name: String::from("Example DAO"),
                dao_address: String::from("Example Address"),
                dao_purpose: String::from("Example Purpose"),
                document_name: String::from("Example Document"),
                link_of_legal_document: String::from("Example Link"),
                cool_down_period: 0, 
                social_link: vec![String::from("Example Funds")],
                groups_count: 0,
                required_votes:0, 
            }
            
                
        }
    }
}

impl Default for State {
    fn default() -> Self {
        State::new()
    }
}