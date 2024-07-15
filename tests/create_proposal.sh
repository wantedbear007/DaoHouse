DAOHOUSE_CANISTER_ID=$(dfx canister id daohouse_backend)

test10=$(dfx canister call dao_canister create_proposal '(
   "'$DAOHOUSE_CANISTER_ID'",
  record {
    proposal_id = "232";
    proposal_title = "New Community Park";
    proposal_description = "Proposal for the construction of a new community park in the downtown area.";
    proposal_status = "Pending";
    proposal_amount = "100000";
    proposal_submitted_at = "2024-01-01T12:00:00Z";
    proposal_expired_at = "2024-12-31T12:00:00Z";
    proposal_receiver_id = "67890";
    proposal_approved_votes = 150;
    approved_votes_list = vec { "user1"; "user2" };
    proposal_rejected_votes = 50;
    rejected_votes_list = vec { "user3"; "user4" };
    required_votes = 200;
    created_by =  "aaaaa-aa";
    comments = 10;
    comments_list = vec { "Great idea!" };
    share_count = 25;
  }
)')

echo $test10
