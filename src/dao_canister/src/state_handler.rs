use std::collections::HashMap;
use candid::Principal;
use serde::{Serialize,Deserialize};
use crate::{types::{Dao, GroupList, Proposals}, Votingandpermissions};
// use std::collections::BTreeMap;


#[derive(Serialize,Deserialize)]
pub struct State {

    pub proposals : HashMap<String, Proposals>,
    pub dao:Dao,
    pub permision:Votingandpermissions,
    pub groups:HashMap<String,GroupList>


    // pub users: HashMap<Principal, User>,
}

impl State {
    pub fn new() -> Self {
        Self {
            proposals: HashMap::new(),
            dao: Dao {
                dao_id: Principal::anonymous(), 
                dao_name: String::from("Example DAO"),
                purpose:String::from("Example Purpose"),
                daotype:String::from("Example Type"),
                link_of_document:String::from("Example Document"),
                cool_down_period:String::from("Example Cooldown"),
                tokenissuer:String::from("Example Token Issuer"), 
                linksandsocials:Vec::new(),
                required_votes:0,
                groups_count:0,
                group_name:Vec::new(),
            },

            permision:Votingandpermissions{
                changedao_config: "council".to_string(),
                changedao_policy: "council".to_string(),
                bounty: "council".to_string(),
                bountydone: "council".to_string(),
                transfer: "council".to_string(),
                polls: "council".to_string(),
                removemembers: "council".to_string(),
                addmembers: "council".to_string(),
                functioncall: "council".to_string(),
                upgradeself: "council".to_string(),
                upgraderemote: "council".to_string(),
                setvotetoken: "council".to_string(),
                votingpermision: "council".to_string(),
            },

            groups:HashMap::new(),
        }
    }
}

impl Default for State {
    fn default() -> Self {
        State::new()
    }
}