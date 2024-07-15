// use std::collections::BTreeMap;

use std::borrow::{Borrow, BorrowMut};
use std::result;

use crate::routes::upload_image;
use crate::types::{ Comment, PostInfo, PostInput };
use crate::{ with_state, Analytics, DaoDetails, ImageData, Pagination, ReplyCommentData };
use candid::{Nat, Principal};
use ic_cdk::api;
use ic_cdk::api::call::{ call_with_payment, CallResult, RejectionCode };
use ic_cdk::api::management_canister::main::raw_rand;
use ic_cdk::{ query, update };
use icrc_ledger_types::icrc1::account::Account;
use icrc_ledger_types::icrc1::transfer::BlockIndex;
use icrc_ledger_types::icrc2::transfer_from::{TransferFromArgs, TransferFromError};
use sha2::{ Digest, Sha256 };
// use uuid::Uuid;

#[update]
async fn create_new_post(canister_id: String, post_details: PostInput) -> Result<String, String> {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }
    let uuids = raw_rand().await.unwrap().0;
    let post_id = format!("{:x}", Sha256::digest(&uuids));

    // upload image
    let image_id: Result<String, String> = upload_image(canister_id, ImageData {
        content: post_details.image_content,
        name: post_details.image_title,
        content_type: post_details.image_content_type,
    }).await;
    let mut id = String::new();
    let image_create_res: bool = (
        match image_id {
            Ok(value) => {
                id = value;
                Ok(())
            }
            Err(er) => {
                ic_cdk::println!("error {}", er.to_string());
                Err(())
            }
        }
    ).is_err();

    if image_create_res {
        return Err("Image upload failed".to_string());
    }

    // getting user profile picture
    

    let new_post = PostInfo {
        principal_id,
        post_id: post_id.clone(),
        username: post_details.username,
        //  post_title: post_details.post_title,
        post_description: post_details.post_description,
        post_img: id,
        // post_created_at: String::new(),
        post_created_at: ic_cdk::api::time(),
        like_count: 0,
        like_id_list: Vec::new(),
        comment_count: 0,
        comment_list: Vec::new(),
    };

    with_state(|state| {
        // state.analytics_content.borrow_mut().get(&0).unwrap().post_count += 1;
        // state.analytics_content.borrow_mut().get(&0).unwrap().members_count += 1;
        let mut analytics = state.analytics_content.borrow().get(&0).unwrap();
        analytics.post_count += 1;
        // state.analytics_content.borrow_mut().get(&0).unwrap().members_count += 1;
        state.analytics_content.insert(0, analytics);
        state.post_detail.insert(post_id, new_post)
    });

    Ok("Post created successfully".to_string())

    // async closures are not stable in rust (JUNE 24)
    // state.post_detail.insert(post_id, new_post);
    // with_state(|state| routes::create_new_post(state, post_id,postdetail.clone()))
}
#[query]
fn get_all_posts(page_data: Pagination) -> Vec<PostInfo> {
    let mut all_posts = Vec::new();

    with_state(|state| {
        for (_k, v) in state.post_detail.iter() {
            // all_posts.push((k.clone(), v.clone()));
            all_posts.push(v.clone());

        }
    });

    let ending = all_posts.len();

    if ending == 0 {
        return all_posts;
    }

    let start = page_data.start as usize;
    let end = page_data.end as usize;

    if start < ending {
        let end = end.min(ending);
        return all_posts[start..end].to_vec();
    }
    // all_posts
    Vec::new()
}

#[update]
async fn like_post(post_id: String) -> Result<String, String> {
    let getpost = with_state(|state| state.post_detail.get(&post_id).unwrap().clone());

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
        principal_id: getpost.principal_id,
        post_id: getpost.post_id.clone(),
        username: getpost.username,
        //    post_title: getpost.post_title.clone(),
        post_description: getpost.post_description.clone(),
        post_img: getpost.post_img.clone(),
        post_created_at: getpost.post_created_at.clone(),
        like_count: updated_like_count,
        like_id_list: updated_like_id_list,
        comment_count: getpost.comment_count.clone(),
        comment_list: getpost.comment_list.clone(),
    };
    with_state(|state| state.post_detail.insert(new_post.post_id.clone(), new_post));

    return Ok("Post liked successfully".to_string());
}

#[query]
async fn get_post_byid(id: String) -> Result<PostInfo, String> {
    match with_state(|state| state.post_detail.get(&id)) {
        Some(post) => Ok(post),
        None => Err("Post not found".to_string()),
    }
}

#[update]
async fn comment_post(post_id: String, comment: String) -> Result<String, String> {
    let getpost = with_state(|state| state.post_detail.get(&post_id).unwrap().clone());

    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous principal not allowed to make calls.".to_string());
    }

    let updated_comment_count = getpost.comment_count + 1;
    let mut updated_list = getpost.comment_list.clone();

    let uuids = raw_rand().await.unwrap().0;
    let unique_commend_id = format!("{:x}", Sha256::digest(&uuids));

    let new_comment = Comment {
        author_principal: principal_id,
        comment_text: comment,
        replies: Vec::new(),
        comment_id: Some(unique_commend_id), // comment_id: Some(Uuid::new_v4().to_string())
        // comment_id: Some(String::from("value")),
    };

    updated_list.push(new_comment);
    // updated_list.push(comment);

    let new_post = PostInfo {
        principal_id: getpost.principal_id,
        post_id: getpost.post_id.clone(),
        username: getpost.username,
        //   post_title: getpost.post_title.clone(),
        post_description: getpost.post_description.clone(),
        post_img: getpost.post_img.clone(),
        post_created_at: getpost.post_created_at.clone(),
        like_count: getpost.like_count.clone(),
        like_id_list: getpost.like_id_list.clone(),
        comment_count: updated_comment_count,
        comment_list: updated_list,
    };
    with_state(|state| state.post_detail.insert(new_post.post_id.clone(), new_post));

    return Ok("comment successfully".to_string());
}

// reply comment
#[update]
fn reply_comment(comment_data: ReplyCommentData) -> Result<String, String> {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous users not allowed".to_string());
    }

    let post = with_state(|state| state.post_detail.get(&comment_data.post_id).clone()).expect(
        "Post not found"
    );

    let mut updated_comment_list = post.comment_list.clone();

    // let mut comment_found = false;
    for com in updated_comment_list.iter_mut() {
        if com.comment_id == Some(comment_data.comment_id.clone()) {
            com.replies.push(comment_data.comment.clone());
            break;
        }
    }

    // if !comment_found {
    //     return Err("Comment not found".to_string());
    // }

    let updated_post = PostInfo {
        comment_count: post.comment_count + 1,
        comment_list: updated_comment_list,
        ..post
    };

    with_state(|state| { state.post_detail.insert(updated_post.post_id.clone(), updated_post) });

    Ok("commented on post".to_string())
}

#[query]
fn get_my_post(page_data: Pagination) -> Result<Vec<(String, PostInfo)>, String> {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return Err("Anonymous user not allowed, register.".to_string());
    }

    let mut posts: Vec<(String, PostInfo)> = Vec::new();

    with_state(|state| {
        for (k, v) in state.post_detail.iter() {
            if v.principal_id == principal_id {
                // posts.push(v)
                posts.push((k.clone(), v.clone()));
            }
        }
    });

    let ending = posts.len();

    if ending == 0 {
        return Ok(posts);
    }

    let start = page_data.start as usize;
    let end = page_data.end as usize;

    if start < ending {
        let end = end.min(ending);
        return Ok(posts[start..end].to_vec());
    }
    Ok(Vec::new())
    // Ok(posts)
}

#[query]
fn get_all_dao(page_data: Pagination) -> Vec<DaoDetails> {
    let mut daos: Vec<DaoDetails> = Vec::new();

    with_state(|state| {
        for y in state.dao_details.iter() {
            daos.push(y.1);
        }
    });

    let ending = daos.len();

    if ending == 0 {
        return daos;
    }

    let start = page_data.start as usize;
    let end = page_data.end as usize;

    if start < ending {
        let end = end.min(ending);
        return daos[start..end].to_vec();
    }
    Vec::new()

    // daos
}

#[query]
fn get_analytics() -> Result<Analytics, String> {
    with_state(|state| {
        let data = state.analytics_content.get(&0);

        match data {
            Some(res) => Ok(res),
            None => Err("data not found !!!!!".to_string()),
        }
    })
}

// get canister cycles
#[query]
fn get_cycles() -> u64 {
    api::canister_balance()
}

// // add canister cycles
// #[update]
// fn recieve_cycles() {
//     let cycles_recieved = api::call::msg_cycles_available();
//     ic_cdk::println!("cycles are {}", cycles_recieved);
//     if cycles_recieved > 0 {
//         api::call::msg_cycles_accept(cycles_recieved);
//     }
// }

// // get caller
#[query]
fn get_caller() -> Principal {
    api::caller()
}

// #[query]
// fn get_canister_id() -> String {
//     api::id().to_string()
// }

// #[update]
// async fn add_cycles() -> String {
//     let response: CallResult<()> = call_with_payment(
//         api::id(),
//         "deposit_cycles",
//         (),
//         10_000_000_000
//     ).await;

//     match response {
//         Ok(call_result) => {
//             ic_cdk::println!("Call succeeded with result: {:?}", call_result);
//             return format!("result success is {:?}", call_result);
//         }
//         Err((rejection_code, error_msg)) => {
//             ic_cdk::println!("Call failed with rejection code {:?}: {}", rejection_code, error_msg);
//             return format!("result failed is {:?}", rejection_code);
//         }
//     }

//     // "hello".to_string()
// }
// #[update]
// fn update_proposals_count() {
//     with_state(|state| state.analytics_content.get(&0))
// }

// ledger handlers 
async fn transfer(tokens: u64, user_principal: Principal) -> Result<BlockIndex, String>  {

    let payment_recipient = with_state(|state| state.borrow_mut().get_payment_recipient());

    ic_cdk::println!("id is {}", payment_recipient.to_string());
    // let payment_recipient = STATE.with(|state| {
    //     let state = state.borrow();
    //     state.get_payment_recipient()
    // });
    
    ic_cdk::println!("Transferring {} tokens to principal {}", tokens, payment_recipient);
    let transfer_args = TransferFromArgs {
        amount: tokens.into(),
        to: Account { owner: payment_recipient, subaccount: None },
        fee: None,
        memo: None,
        created_at_time: None,
        spender_subaccount: None,
        from: Account { owner: user_principal, subaccount: None },
    };


    ic_cdk::call::<(TransferFromArgs,), (Result<BlockIndex, TransferFromError>,)>(
        Principal::from_text("mxzaz-hqaaa-aaaar-qaada-cai")
            .expect("Could not decode the principal."),
        "icrc2_transfer_from",
        (transfer_args,),
    )
    .await 
    .map_err(|e| format!("failed to call ledger: {:?}", e))?
    .0
    .map_err(|e| format!("ledger transfer error {:?}", e))

}


// make payment 
#[update]
async fn make_payment(tokens: u64, user: Principal) -> String {
    // add check for admin
    let response = transfer(tokens, user).await;
    ic_cdk::println!("response is {:?}", response);
    // response

    format!("response is {:?}", response)

}   

