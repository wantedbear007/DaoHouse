use crate::{ImageData, State};

use ic_cdk::api;
use candid:: Principal;
use crate::types::{Profileinput, UserProfile};


pub fn create_new_profile(state: &mut State, profile: Profileinput) -> Result<(), String> {
    let principal_id = api::caller();
    
    // Check if the caller is anonymous
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    // Check if the user is already registered
    if state.user_profile.contains_key(&principal_id) {
        return Err("User already registered".to_string());
    }

    // Validate email format
    if !profile.email_id.contains('@') || !profile.email_id.contains('.') {
        return Err("Enter correct Email ID".to_string());
    }
    
    // Construct a new UserProfile object
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
        tag_defines: profile.tag_defines,
        contact_number: profile.contact_number,
        twitter_id: profile.twitter_id,
        telegram: profile.telegram,
        website: profile.website,
    };

    // Insert the new profile into the state
    state.user_profile.insert(principal_id, new_profile);

    Ok(())
}


// pub fn get_user_profile(state: &State) -> UserProfile {
//     let principal_id = api::caller();
//     if principal_id == Principal::anonymous() {
//         return "Anonymous principal not allowed to make calls.".to_string();
//     }
//     if !state.user_profile.contains_key(&principal_id) {
//         return UserProfile {
//             user_id: principal_id,
//             email_id: String::new(),
//             profile_img: Vec::new(),
//             username: String::new(),
//             dao_ids: Vec::new(),
//             post_count: 0,
//             post_id: Vec::new(),
//             followers_count: 0,
//             followers_list: Vec::new(),
//             followings_count: 0,
//             followings_list: Vec::new(),
//             description: String::new(),
//             tag_defines: Vec::new(),
//             contact_number: String::new(),
//             twitter_id: String::new(),
//             telegram: String::new(),
//             website: String::new(),
//         };
//     }
//     state.user_profile.get(&principal_id).unwrap().clone()
// }


pub fn get_user_profile(state: &State) -> Result<UserProfile, String> {
    let principal_id = api::caller();

    if principal_id == Principal::anonymous() {
        Err("Anonymous principal not allowed to make calls.".to_string())
    } else if let Some(profile) = state.user_profile.get(&principal_id) {
        Ok(profile.clone()) 
    } else {
        Err("User profile not found".to_string())
    }
}


pub fn update_profile(state: &mut State, profile: Profileinput) -> Result<(), String> {
    let principal_id = api::caller();
    
    // Check if the caller is anonymous
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    // Check if the user is registered
    if !state.user_profile.contains_key(&principal_id) {
        return Err("User not registered".to_string());
    }

   

    // Validate email format
    if !profile.email_id.contains('@') || !profile.email_id.contains('.') {
        return Err("Enter correct Email ID".to_string());
    }

    // Clone the old profile and update the fields with new information
    let mut new_profile = state.user_profile.get(&principal_id).unwrap().clone();
    new_profile.email_id = profile.email_id;
    new_profile.profile_img = profile.profile_img;
    new_profile.username = profile.username;
    new_profile.description = profile.description;
    new_profile.contact_number = profile.contact_number;
    new_profile.twitter_id = profile.twitter_id;
    new_profile.telegram = profile.telegram;
    new_profile.website = profile.website;

    // Replace the old profile with the updated one
    state.user_profile.insert(principal_id, new_profile);

    Ok(())
}


pub fn delete_profile(state: &mut State) -> Result<(), String> {
    let principal_id = api::caller();
    
    // Check if the caller is anonymous
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    // Check if the user is registered
    if !state.user_profile.contains_key(&principal_id) {
        return Err("User not registered".to_string());
    }

    // Remove the user profile
    state.user_profile.remove(&principal_id);

    Ok(())
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
