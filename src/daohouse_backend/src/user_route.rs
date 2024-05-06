use crate::types::{DaoInput, Profileinput, UserProfile};
use crate::{routes, with_state};
use ic_cdk::{query, update};
use crate::types::{CreateCanisterArgument,CanisterInstallMode,CanisterIdRecord,CreateCanisterArgumentExtended,InstallCodeArgument,InstallCodeArgumentExtended};
use crate::api::call::{call, call_with_payment128, CallResult};
use crate::api::canister_version;
use ic_cdk::api;
use candid::Principal;
use ic_cdk::println;


#[update]
async fn create_profile(profile: Profileinput) -> String {
    with_state(|state| routes::create_new_profile(state, profile.clone())).await
}

#[query]
async fn get_user_profile() -> UserProfile {
    with_state(|state| routes::get_user_profile(state)).await
}

#[update]
async fn update_profile(profile: Profileinput) -> String {
    with_state(|state| routes::update_profile(state, profile.clone())).await
}

#[update]
async fn delete_profile() -> String {
    with_state(|state| routes::delete_profile(state)).await
}

// #[update]
// async fn create_newdao(dao_detail: DaoInput) -> String {
//     let result = with_state( |state| {
//         routes:: create_dao(state, dao_detail.clone()).await
//     }).await;
//     result
// }
#[update]
pub async fn create_dao( dao_detail: DaoInput) -> Result<String,String> {
    let principal_id = api::caller();

    // if with_state(|state| state.user_profile.contains_key(&principal_id)).await {
    //     return Err("User not registered".to_string());
    // }

    // let user_detail=with_state(|state| state.user_profile.get(&principal_id));

    let mut user_profile_detail =  with_state(|state| routes::get_user_profile(state)).await;
    let arg = CreateCanisterArgument {
        settings: None,
    };
    let (canister_id,) = match create_canister(arg).await {
        Ok(id) => id,
        Err((_, err_string)) => return Err(err_string),
    };
    // let (id,)=canister_id;
    let addcycles = deposit_cycles(canister_id, 100000000).await;

    let canister_id_principal = canister_id.canister_id;

    println!("Canister ID: {}", canister_id_principal.to_string());


    user_profile_detail.dao_ids.push(canister_id_principal.to_string());

    let new_profile = UserProfile {
        user_id: user_profile_detail.user_id,
        email_id: user_profile_detail.email_id,
        profile_img: user_profile_detail.profile_img,
        username: user_profile_detail.username,
        dao_ids: user_profile_detail.dao_ids,
        post_count: user_profile_detail.post_count,
        post_id: user_profile_detail.post_id,
        followers_count: user_profile_detail.followers_count,
        followers_list:user_profile_detail.followers_list,
        followings_count: user_profile_detail.followings_count,
        followings_list: user_profile_detail.followings_list,
        description: user_profile_detail.description,
        tag_defines: user_profile_detail.tag_defines,
        contact_number: user_profile_detail.contact_number,
        twitter_id: user_profile_detail.twitter_id,
        telegram: user_profile_detail.telegram,
        website: user_profile_detail.website,
    };
    with_state(|state| {state.user_profile.insert(principal_id, new_profile)}).await;
    let arg1 = InstallCodeArgument {
        mode: CanisterInstallMode::Install, 
        canister_id: canister_id_principal, 
        wasm_module: vec![],
        arg: vec![], 
    };
    let installcode = install_code(arg1).await;
    println!("Canister ID: {:?}", canister_id);
    Ok("DAO created successfully".to_string())
}

async fn create_canister(
    arg: CreateCanisterArgument,
    // cycles: u128,
) -> CallResult<(CanisterIdRecord,)> {
    let extended_arg = CreateCanisterArgumentExtended {
        settings: arg.settings,
        sender_canister_version: Some(canister_version()),
    };
    let cycles: u128 = 100_000_000_000;
    call_with_payment128(
        Principal::management_canister(),
        "create_canister",
        (extended_arg,),
        cycles,
    )
    .await
}

async fn deposit_cycles(arg: CanisterIdRecord, cycles: u128) -> CallResult<()> {
    call_with_payment128(
        Principal::management_canister(),
        "deposit_cycles",
        (arg,),
        cycles,
    )
    .await
}

async fn install_code(arg: InstallCodeArgument) -> CallResult<()> {
    // let wasm_base64: &str = "3831fb07143cd43c3c51f770342d2b7d0a594311529f5503587bf1544ccd44be";
    // let wasm_module_sample: Vec<u8> = base64::decode(wasm_base64).expect("Decoding failed");

    // let wasm_module_sample: Vec<u8> = include_bytes!("/home/harshit/Desktop/company/experiment/DaoHouse/.dfx/local/canisters/daohouse_backend/daohouse_backend.wasm").to_vec();
    
    
    let cycles: u128 = 10_000_000_000; 
    
    let extended_arg = InstallCodeArgumentExtended {
        mode: arg.mode,
        canister_id: arg.canister_id,
        wasm_module: arg.wasm_module,
        arg: arg.arg,
        sender_canister_version: Some(canister_version()),
    };
    
   
    call_with_payment128(
        Principal::management_canister(),
        "install_code",
        (extended_arg,),
        cycles,
    ).await
}