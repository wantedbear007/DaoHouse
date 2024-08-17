// check balance
// transfer funds

use candid::{Nat, Principal};
use ic_cdk::update;
use icrc_ledger_types::{
    icrc1::{account::Account, transfer::BlockIndex},
    icrc2::transfer_from::{TransferFromArgs, TransferFromError},
};

use crate::{with_state, TokenTransferArgs};

use super::call_inter_canister;
// pub async fn transfer_tokens(
//     from: Principal,
//     to: Principal,
//     amount: Nat,
// ) -> Result<String, String> {
//     // call_inter_canister(function, args, canister_id)

//     Ok("()".to_string())
// }

// #[update]
// async fn transfer_tokens(args: TokenTransferArgs) -> Result<Nat, String>{

//   transfer(args.tokens, args.from, args.to, args.dao_canister).await.map_err(|err| err.to_string())

// //   Ok("Sucess ho gya bhai".to_string())
// }

#[update]
async fn transfer(args: TokenTransferArgs) -> Result<BlockIndex, String> {
    let ledger_id = with_state(|state| state.dao.token_ledger_id.id);

    let transfer_args = TransferFromArgs {
        amount: args.tokens.into(),
        to: Account {
            owner: args.to,
            subaccount: None,
        },
        fee: None,
        memo: None,
        created_at_time: None,
        spender_subaccount: None,
        from: Account {
            owner: args.from,
            subaccount: None,
        },
    };

    ic_cdk::call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
        ledger_id,
        "icrc2_transfer_from",
        (transfer_args,),
    )
    .await
    .map_err(|e| format!("failed to call ledger: {:?}", e))?
    .0
    .map_err(|e| format!("ledger transfer error {:?}", e))
}
