set -e

dfx identity use default
DEFAULT=$(dfx --identity default identity get-principal)
USER=$(dfx --identity testing identity get-principal)
MINTER=$(dfx --identity minter identity get-principal)
RECIEVER=$(dfx --identity reciever identity get-principal)
CANISTER=$(dfx canister id daohouse_backend)
BHANU=$(dfx --identity minter identity get-principal)

	# @@ -13,26 +13,26 @@ echo "RECIEVER: $RECIEVER"

function debug_print() {
    echo "State at checkpoint $1"
    # echo "Balance of minter: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$MINTER\"})")"
    echo "Balance of default: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$DEFAULT\"})")"
    echo "Balance of user: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$USER\"})")"
    echo "Balance of reciever: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$RECIEVER\"})")"
    echo "Balance of reciever: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$BHANU\"})")"
}

# # TRANSFER
TRANSFER=$(
dfx --identity default canister call icrc1_ledger_canister icrc1_transfer "(record { to = record { owner = principal \"$USER\" }; amount = 1000000000 })")
echo $TRANSFER


# # # to approve 
APPROVE=$(dfx --identity testing canister call icrc1_ledger_canister icrc2_approve "(record { amount = 9999999999999999; spender = record { owner = principal \"$CANISTER\"} })")
echo $APPROVE


# debug_print 1
# # TRANSFER TO USER
USER_TRANSFER=$(dfx canister call daohouse_backend make_payment "(100000000, principal \"$USER\")")
echo $USER_TRANSFER

# debug_print 2