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
    
    
    // Check if the user is registered
    if !state.user_profile.contains_key(&principal_id) {
        return Err("User not registered".to_string());
    }

    // Remove the user profile
    state.user_profile.remove(&principal_id);

    Ok(())
}


