use crate::{proposal_route, with_state, GroupList};
use candid::{types::principal, Principal};
use ic_cdk::{query, update};
use ic_cdk::api;



#[query]
async fn get_members_of_group(group: String) -> Result<GroupList, String> {
    with_state(|state| {
        match state.groups.get(&group) {
            Some(group_list) => Ok(group_list.clone()),
            None => Err(format!("Group {} not found", group)),
        }
    }).await
}


#[update]
async fn add_member_to_group(group: String, principal: Principal) -> String {

    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return "Anonymous principal not allowed to make calls.".to_string();
    }

    
    let grouplist = with_state(|state| state.groups.get("council").cloned()).await;
    
    
    match grouplist {
        Some(group_list) => {
            
            
            if group_list.users.contains(&principal_id) {
               
                return with_state(|state| proposal_route::add_member_to_group(state, group, principal)).await;
            } else {
                
                return format!("Caller with principal {:?} is not allowed to add members to group {}", principal_id, group);
            }
        }
        None => {
            return format!("Group 'council' not found");
        }
    }
}


