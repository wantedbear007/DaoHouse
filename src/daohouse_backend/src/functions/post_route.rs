
// use std::collections::BTreeMap;

use crate::types::{PostInfo,PostInput};
use crate::{routes, with_state};
use ic_cdk::{query, update};
use ic_cdk::api;
use sha2::{Digest, Sha256};
use ic_cdk::api::management_canister::main::raw_rand;
use candid:: Principal;


#[update]
async fn create_new_post(postdetail: PostInput) -> Result<String, String> {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }
    let uuids = raw_rand().await.unwrap().0;
    let post_id = format!("{:x}", Sha256::digest(&uuids));
    with_state(|state| routes::create_new_post(state, post_id,postdetail.clone()))
}
#[query]
fn get_all_posts() -> Vec<(String, PostInfo)> {
    let mut vec = Vec::new();
    with_state(|state| {
        for (k, v) in state.post_detail.iter() {
            vec.push((k.clone(), v.clone()));
        }
    });
    vec
}

#[update]
async fn like_post(post_id:String)->Result<String, String>{
    let getpost=with_state(|state| state.post_detail.get(&post_id).unwrap().clone());

    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    if getpost.like_id_list.contains(&principal_id) {
        return Err("You have already liked this post".to_string());
    }
    
    let updated_like_count = getpost.like_count + 1;
    let mut updated_like_id_list = getpost.like_id_list.clone();
    updated_like_id_list.push(principal_id);

    let new_post = PostInfo {
        post_id: getpost.post_id.clone(),
    //    post_title: getpost.post_title.clone(),
        post_description: getpost.post_description.clone(),
        post_img: getpost.post_img.clone(),
        post_created_at: getpost.post_created_at.clone(),
        like_count: updated_like_count,
        like_id_list: updated_like_id_list,
        comment_count: getpost.comment_count.clone(),
        comment_list: getpost.comment_list.clone(),
    };
    with_state(|state|state.post_detail.insert(new_post.post_id.clone(), new_post));

    return  Ok("Post liked successfully".to_string());
}


#[query]
async fn get_post_byid(id: String) -> Result<PostInfo, String> {
    match with_state(|state| state.post_detail.get(&id)) {
        Some(post) => Ok(post),
        None => Err("Post not found".to_string()),
    }
}



#[update]
async fn comment_post(post_id:String,comment:String)->Result<String, String>{
    let getpost=with_state(|state| state.post_detail.get(&post_id).unwrap().clone());

    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    let updated_comment_count = getpost.comment_count + 1;
    let mut updated_list = getpost.comment_list.clone();
    updated_list.push(comment);


    let new_post = PostInfo {
        post_id: getpost.post_id.clone(),
     //   post_title: getpost.post_title.clone(),
        post_description: getpost.post_description.clone(),
        post_img: getpost.post_img.clone(),
        post_created_at: getpost.post_created_at.clone(),
        like_count: getpost.like_count.clone(),
        like_id_list: getpost.like_id_list.clone(),
        comment_count: updated_comment_count,
        comment_list: updated_list,
    };
    with_state(|state|state.post_detail.insert(new_post.post_id.clone(), new_post));



    return Ok("comment successfully".to_string());


}


