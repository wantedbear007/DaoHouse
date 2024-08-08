use crate::{guards::*, ProposalInput, UpdateDaoSettings};
use crate::{proposal_route, with_state, GroupList};
use candid::Principal;
use ic_cdk::api;
use ic_cdk::{query, update};

use super::create_proposal;

#[query]
async fn get_members_of_group(group: String) -> Result<GroupList, String> {
    with_state(|state| match state.groups.get(&group) {
        Some(group_list) => Ok(group_list.clone()),
        None => Err(format!("Group {} not found", group)),
    })
}

#[update]
async fn add_member_to_group(group: String, principal: Principal) -> String {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return "Anonymous principal not allowed to make calls.".to_string();
    }

    let council_group = "council".to_string();

    let is_allowed = with_state(|state| {
        state
            .groups
            .get(&council_group)
            .map_or(false, |group_list| group_list.users.contains(&principal_id))
    });

    if !is_allowed {
        return format!(
            "Caller with principal {:?} is not allowed to add members to group {}",
            principal_id, group
        );
    }

    let result =
        with_state(|state| proposal_route::add_member_to_group(state, group.clone(), principal));
    result
}

//
#[update]
async fn remove_member_from_group(group: String, principal: Principal) -> String {
    let principal_id = api::caller();
    if principal_id == Principal::anonymous() {
        return "Anonymous principal not allowed to make calls.".to_string();
    }

    let council_group = "council".to_string();

    let is_allowed = with_state(|state| {
        state
            .groups
            .get(&council_group)
            .map_or(false, |group_list| group_list.users.contains(&principal_id))
    });

    if !is_allowed {
        return format!(
            "Caller with principal {:?} is not allowed to remove members from group {}",
            principal_id, group
        );
    }

    let result = with_state(|state| {
        proposal_route::remove_member_from_group(state, group.clone(), principal)
    });
    result
}

// #[update(guard = prevent_anonymous)]
// fn join_dao() -> Result<String, String> {
//     let principal_id = api::caller();

//     with_state(|state| -> Result<String, String> {
//         if state.dao.members.contains(&principal_id) {
//             return Err("You are already member of this Dao".to_string());
//         }

//         let mut members = state.dao.members.clone();

//         members.push(principal_id.clone());

//         state.dao.members = members;
//         Ok("Successfully joined DAO".to_string())
//     })
// }

#[update (guard = prevent_anonymous)]
async fn ask_to_join_dao(daohouse_backend_id: String) -> Result<String, String> {
    let proposal = ProposalInput {
        proposal_description: String::from("Request to join DAO as a member"),
        proposal_title: String::from("Add member to DAO"),
        required_votes: 7,
        proposal_type: crate::ProposalType::AddMemberProposal,
        proposal_expired_at: ic_cdk::api::time() + (20 * 86_400 * 1_000_000_000),
    };

    let res = create_proposal(daohouse_backend_id, proposal).await;

    Ok(res)
}

#[query]
fn get_dao_members() -> Vec<Principal> {
    with_state(|state| state.dao.members.clone())
}

#[query]
fn get_dao_followers() -> Vec<Principal> {
    with_state(|state| state.dao.followers.clone())
}

#[update(guard=prevent_anonymous)]
fn follow_dao() -> Result<String, String> {
    let principal_id = api::caller();

    with_state(|state| {
        let dao = &mut state.dao;
        if dao.followers.contains(&principal_id) {
            return Err(String::from("You are already following the user"));
        }
        dao.followers.push(principal_id);
        dao.followers_count += 1;
        return Ok(String::from("Successfully followed !"));
    })
}

#[update(guard=check_members)]
fn update_dao_settings(update_dao_details: UpdateDaoSettings) -> Result<String, String> {
    member_permission(String::from("ChangeDAOConfig"))?;
    with_state(|state| {
        let mut original_dao = state.dao.clone();
        original_dao.dao_name = update_dao_details.dao_name;
        original_dao.purpose = update_dao_details.purpose;
        original_dao.link_of_document = update_dao_details.link_of_document;
        original_dao.members = update_dao_details.members;
        original_dao.followers = update_dao_details.followers;

        state.dao = original_dao;

        Ok(String::from("DAO settings updated. "))
    })
}

// #[update(guard=)]
#[update(guard = prevent_anonymous)]
fn unfollow_dao() -> Result<String, String> {
    with_state(|state| {
        let dao = &mut state.dao;
        if dao.followers.contains(&api::caller()) {
            dao.followers.retain(|s| s != &api::caller());
            state.dao.followers_count -= 1;

            Ok(String::from("Success"))
        } else {
            Err(String::from("You don't follow this dao."))
        }
    })
}
