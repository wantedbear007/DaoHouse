DAOHOUSE_CANISTER_ID=$(dfx canister id daohouse_backend)


res=$(dfx canister call bw4dl-smaaa-aaaaa-qaacq-cai ask_to_join_dao '(
  "'$DAOHOUSE_CANISTER_ID'"
)')

echo $res