mod types;
use ic_cdk::{api, init, query, update, export_candid};
use std::cell::RefCell;
pub mod routes;
use crate::api::call::CallResult;
mod upgrade;
use ic_cdk::{ post_upgrade, pre_upgrade};
mod state_handler;
use state_handler::State;
mod memory;
use memory::Memory; 
mod user_route;

pub mod testing;

use types::*;

pub async fn with_state<R>(f: impl FnOnce(&mut State) -> R) -> R {
    STATE.with(|cell| f(&mut cell.borrow_mut()))
}
 

thread_local! {
    static STATE: RefCell<State> = RefCell::new(State::new());
}

#[query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}


#[pre_upgrade]
fn pre_upgrade() {
    upgrade::pre_upgrade();
}

#[post_upgrade]
fn post_upgrade() {
    upgrade::post_upgrade();
}

export_candid!();