use crate::State;

use ic_cdk::api;

use crate::types::{Profileinput, UserProfile};

pub fn create_new_profile(state: &mut State, profile: Profileinput) -> String {
    let principal_id = api::caller();

    if state.user_profile.contains_key(&principal_id) {
        return "User already registered".to_string();
    }

    if !profile.email_id.contains("@") || !profile.email_id.contains(".") {
        return "Enter correct Emailid".to_string();
    }
    let new_profile = UserProfile {
        user_id: principal_id,
        email_id: profile.email_id,
        profile_img: profile.profile_img,
        username: profile.username,
        dao_ids: Vec::new(),
        post_count: 0,
        post_id: Vec::new(),
        followers_count: 0,
        followers_list: Vec::new(),
        followings_count: 0,
        followings_list: Vec::new(),
        description: profile.description,
        tag_defines: Vec::new(),
        contact_number: profile.contact_number,
        twitter_id: profile.twitter_id,
        telegram: profile.telegram,
        website: profile.website,
    };

    state.user_profile.insert(principal_id, new_profile);

    return "user registered successfully".to_string();
}

pub fn get_user_profile(state: &State) -> UserProfile {
    let principal_id = api::caller();
    if !state.user_profile.contains_key(&principal_id) {
        return UserProfile {
            user_id: principal_id,
            email_id: String::new(),
            profile_img: Vec::new(),
            username: String::new(),
            dao_ids: Vec::new(),
            post_count: 0,
            post_id: Vec::new(),
            followers_count: 0,
            followers_list: Vec::new(),
            followings_count: 0,
            followings_list: Vec::new(),
            description: String::new(),
            tag_defines: Vec::new(),
            contact_number: String::new(),
            twitter_id: String::new(),
            telegram: String::new(),
            website: String::new(),
        };
    }
    state.user_profile.get(&principal_id).unwrap().clone()
}

pub fn update_profile(state: &mut State, profile: Profileinput) -> String {
    let principal_id = api::caller();
    if !state.user_profile.contains_key(&principal_id) {
        return "User not registered".to_string();
    }
    if !profile.email_id.contains("@") || !profile.email_id.contains(".") {
        return "Enter correct Emailid".to_string();
    }
    let old_profile = state.user_profile.get(&principal_id).unwrap().clone();
    let new_profile = UserProfile {
        user_id: principal_id,
        email_id: profile.email_id,
        profile_img: profile.profile_img,
        username: profile.username,
        dao_ids: old_profile.dao_ids,
        post_count: old_profile.post_count,
        post_id: old_profile.post_id,
        followers_count: old_profile.followers_count,
        followers_list: old_profile.followers_list,
        followings_count: old_profile.followings_count,
        followings_list: old_profile.followings_list,
        description: profile.description,
        tag_defines: Vec::new(),
        contact_number: profile.contact_number,
        twitter_id: profile.twitter_id,
        telegram: profile.telegram,
        website: profile.website, 
    };
    state.user_profile.insert(principal_id, new_profile);
    return "user updated successfully".to_string();
}

pub fn delete_profile(state: &mut State) -> String {
    let principal_id = api::caller();
    if !state.user_profile.contains_key(&principal_id) {
        return "User not registered".to_string();
    }
    state.user_profile.remove(&principal_id);
    return "user deleted successfully".to_string();
}





// pub async fn create_dao(state: &mut State, dao_detail: DaoInput)->String {
//     let principal_id = api::caller();
//     if !state.user_profile.contains_key(&principal_id) {
//         return "User not registered".to_string();
//     }
//     let user_profile = state.user_profile.get(&principal_id).unwrap().clone();

//     // Create a new runtime to run the async function
//     // let rt = tokio::runtime::Runtime::new().unwrap();
//     // Block on the async function
//     let arg=CreateCanisterArgument{
//         settings: None,
//     };
//     // let canister_id = rt.block_on(create_canister(arg));
//     // let canister_id=create_canister(arg).await;
//     // Print the result
//     // println!("Canister ID: {:?}", canister_id);

//     return "DAO created successfully".to_string();
// }

// async fn create_canister(
//     arg: CreateCanisterArgument,
//     // cycles: u128,
// ) -> CallResult<(CanisterIdRecord,)> {
//     let extended_arg = CreateCanisterArgumentExtended {
//         settings: arg.settings,
//         sender_canister_version: Some(canister_version()),
//     };
//     let cycles: u128 = 100_000_000_000;
//     call_with_payment128(
//         Principal::management_canister(),
//         "create_canister",
//         (extended_arg,),
//         cycles,
//     )
//     .await
// }
