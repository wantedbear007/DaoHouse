// use std::collections::HashMap;
use crate::types::{PostInfo, UserProfile};
use crate::{memory, Analytics, DaoDetails, Memory, WasmArgs};
use candid::Principal;
use ic_stable_structures::StableBTreeMap;
// use std::collections::BTreeMap;

pub struct State {
    pub user_profile: StableBTreeMap<Principal, UserProfile, Memory>,

    pub post_detail: StableBTreeMap<String, PostInfo, Memory>,

    pub dao_details: StableBTreeMap<String, DaoDetails, Memory>,

    pub analytics_content: StableBTreeMap<u64, Analytics, Memory>,

    pub wasm_module: StableBTreeMap<u64, WasmArgs, Memory>,

    payment_recipient: Option<Principal>,

    pub ledger_wasm: Vec<u8>,
}

impl State {
    pub fn new() -> Self {
        Self {
            user_profile: init_file_contents(),
            post_detail: post_file_contents(),
            dao_details: dao_file_contents(),
            analytics_content: analytics_content(),
            wasm_module: init_wasm_module(),
            payment_recipient: None,
            ledger_wasm: vec![],
        }
    }

    pub fn get_payment_recipient(&self) -> Principal {
        self.payment_recipient.unwrap()
    }

    pub fn set_payment_recipient(&mut self, principal: Principal) {
        self.payment_recipient = Some(principal);
    }
}

fn init_file_contents() -> StableBTreeMap<Principal, UserProfile, Memory> {
    StableBTreeMap::init(crate::memory::get_postdata_memory())
}

fn post_file_contents() -> StableBTreeMap<String, PostInfo, Memory> {
    StableBTreeMap::init(crate::memory::get_user_memory())
}

fn dao_file_contents() -> StableBTreeMap<String, DaoDetails, Memory> {
    StableBTreeMap::init(crate::memory::get_dao_memory())
}
fn analytics_content() -> StableBTreeMap<u64, Analytics, Memory> {
    StableBTreeMap::init(crate::memory::get_analytics_memory())
}

fn init_wasm_module() -> StableBTreeMap<u64, WasmArgs, Memory> {
    StableBTreeMap::init(crate::memory::get_wasm_memory())
}

// fn ledger_wasm_module() ->

impl Default for State {
    fn default() -> Self {
        State::new()
    }
}
