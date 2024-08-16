// check balance
// transfer funds

use candid::{Nat, Principal};
use ic_cdk::update;
use icrc_ledger_types::{
    icrc1::{account::Account, transfer::BlockIndex},
    icrc2::transfer_from::{TransferFromArgs, TransferFromError},
};

use crate::TokenTransferArgs;

use super::call_inter_canister;
// pub async fn transfer_tokens(
//     from: Principal,
//     to: Principal,
//     amount: Nat,
// ) -> Result<String, String> {
//     // call_inter_canister(function, args, canister_id)

//     Ok("()".to_string())
// }

#[update]
async fn transfer_tokens(args: TokenTransferArgs) -> Result<String, String>{

  let _ = transfer(args.tokens, args.from, args.to, args.dao_canister).await.map_err(|err| err.to_string());

  Ok("Sucess ho gya bhai".to_string())
}



// #[update]
async fn transfer(
    tokens: u64,
    from: Principal,
    to: Principal,
    canister_id: Principal,
) -> Result<BlockIndex, String> {
    let transfer_args = TransferFromArgs {
        amount: tokens.into(),
        to: Account {
            owner: to,
            subaccount: None,
        },
        fee: None,
        memo: None,
        created_at_time: None,
        spender_subaccount: None,
        from: Account {
            owner: from,
            subaccount: None,
        },
    };

    ic_cdk::call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
        canister_id,
        "icrc2_transfer_from",
        (transfer_args,),
    )
    .await
    .map_err(|e| format!("failed to call ledger: {:?}", e))?
    .0
    .map_err(|e| format!("ledger transfer error {:?}", e))
}
