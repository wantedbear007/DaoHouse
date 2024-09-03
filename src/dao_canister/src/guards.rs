use candid::Principal;
use ic_cdk::api;

use crate::{with_state, ProposalType};

//  prevent anonymous user
pub fn prevent_anonymous() -> Result<(), String> {
    if api::caller() == Principal::anonymous() {
        return Err(String::from("Anonymous principal not allowed !"));
    }
    Ok(())
}

// to check for dao owner / members
pub fn check_members() -> Result<(), String> {
    prevent_anonymous()?;
    with_state(|state| {
        if state.dao.members.contains(&api::caller()) {
            return Ok(());
        } else {
            return Err(String::from("Only members of DAO can perform this action."));
        }
    })
}

// to check members permissions
pub fn member_permission(permission: String) -> Result<(), String> {
    prevent_anonymous()?;
    check_members()?;

    with_state(|state| {
        if state.dao.members_permissions.contains(&permission) {
            return Ok(());
        } else {
            return Err(String::from(
                "You are not authorized to perform thia actions",
            ));
        }
    })
}

// check for user who has already voted
pub fn check_voting_right(proposal_id: &String) -> Result<(), String> {
    prevent_anonymous()?;
    let principal_id = api::caller();

    with_state(|state| match state.proposals.get(&proposal_id) {
        Some(pro) => {
            if !pro.approved_votes_list.contains(&principal_id)
                && !pro.rejected_votes_list.contains(&principal_id)
            {
                Ok(())
            } else {
                Err(String::from("You have already voted."))
            }
        }
        None => Err(String::from("Proposal ID is invalid !")),
    })
}

// check group member permission
pub fn check_group_member_permission(
    group_name: &String,
    permission: String,
) -> Result<(), String> {
    prevent_anonymous()?;
    with_state(|state| match state.dao_groups.get(&group_name) {
        Some(val) => {
            if val.group_permissions.contains(&permission) {
                Ok(())
            } else {
                Err(String::from("You don't have proper permissions"))
            }
        }
        None => Err(format!(
            "No group is available with the name {}",
            group_name
        )),
    })
}

// check user in a group
pub fn check_user_in_group(group_name: &String) -> Result<(), String> {
    prevent_anonymous()?;
    with_state(|state| match state.dao_groups.get(&group_name) {
        Some(val) => {
            if val.group_members.contains(&api::caller()) {
                Ok(())
            } else {
                Err(format!("You are not part of the group {}", group_name))
            }
        }
        None => Err(format!(
            "DAO dosen't have any group named with {}",
            group_name
        )),
    })
}

// check if proposal exists
// pub fn check_if_proposal_exists(action_principal: Principal, proposal_type: ProposalType) -> bool {
//     with_state(|state| {
//         state.proposals.iter().any(|(_key, val)| {
//             val.proposal_type == proposal_type && val.principal_of_action == action_principal
//         })
//     })
// }

pub fn check_if_proposal_exists(
    action_principal: Principal,
    proposal_type: ProposalType,
) -> Result<(), String> {
    with_state(|state| {
        for (_key, val) in state.proposals.iter() {
            if val.proposal_type == proposal_type && val.principal_of_action == action_principal {
                return Err(String::from("Proposal already exists with same request."));
            }
        }
        Ok(())
    })
}
