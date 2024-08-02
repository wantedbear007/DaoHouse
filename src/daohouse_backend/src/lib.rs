mod types;
use ic_cdk::{api, export_candid, init};
use std::{borrow::BorrowMut, cell::RefCell};
pub mod functions;
pub mod guards;
pub mod routes;
mod state_handler;
use state_handler::State;
mod memory;
use candid::Principal;
use memory::Memory;

// mod user_route;
// mod post_route;

// pub mod testing;

use types::*;

thread_local! {
    static STATE: RefCell<State> = RefCell::new(State::new());
}

pub fn with_state<R>(f: impl FnOnce(&mut State) -> R) -> R {
    STATE.with(|cell| f(&mut cell.borrow_mut()))
}

#[init]
async fn init(args: PaymentRecipientAccount) {
    ic_cdk::println!("values are {:?}", args.payment_recipient.to_string());

    let analytics = Analytics::default();

    with_state(|state| {
        // state.borrow_mut().set_payment_recipient(Principal::from_text("aewmz-wl3z4-dzfeh-7j2ub-ah46w-iltzd-xt77x-v7got-zrvqk-ybk22-xae").expect("")); // adding payment recipient id

        state
            .borrow_mut()
            .set_payment_recipient(args.payment_recipient); // adding payment recipient id
        if let Some(_) = state.analytics_content.get(&0) {
            ic_cdk::println!("Analytics already available.");
        } else {
            state.analytics_content.insert(0, analytics.clone());
        }
        ()
    });

    with_state(|state| {
        let dao_wasm_module: Vec<u8> =
            include_bytes!("../../../.dfx/local/canisters/dao_canister/dao_canister.wasm").to_vec();

        state.borrow_mut().wasm_module.insert(
            0,
            WasmArgs {
                wasm: dao_wasm_module,
            },
        );

        // match state.wasm_module.get(&0) {
        //     Some(val) => ic_cdk::println!("available"),
        //     None => ic_cdk::println!("not ava"),
        // }
    })
}

// #[pre_upgrade]
// fn pre_upgrade() {
//     upgrade::pre_upgrade();
// }

// #[post_upgrade]
// fn post_upgrade() {
//     upgrade::post_upgrade();
// }

export_candid!();
