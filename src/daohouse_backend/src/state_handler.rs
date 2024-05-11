use std::collections::HashMap;
use candid::Principal;
use serde::{Serialize,Deserialize};
use crate::types::{UserProfile,PostInfo};
// use std::collections::BTreeMap;


#[derive(Serialize,Deserialize)]
pub struct State {

    pub user_profile : HashMap<Principal, UserProfile>,

    pub post_detail:HashMap<String,PostInfo>,
    

    // pub users: HashMap<Principal, User>,
}

impl State {
    pub fn new() -> Self {
        Self {

            user_profile: HashMap::new(),
            // users: HashMap::new(),
            post_detail:HashMap::new()
        }
    }
}

impl Default for State {
    fn default() -> Self {
        State::new()
    }
}