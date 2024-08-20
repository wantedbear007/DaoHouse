

# DAO bw4dl-smaaa-aaaaa-qaacq-cai
# LEDGER b77ix-eeaaa-aaaaa-qaada-cai

set -e

dfx identity use default
DEFAULT=$(dfx --identity default identity get-principal)
USER=$(dfx --identity testing identity get-principal) # e5pkf-b3ofv-qpkbt-z4cjk-cwihw-ahe3l-sfzal-xh3k7-kblpk-2qca7-mae
MINTER=$(dfx --identity minter identity get-principal)
RECIEVER=$(dfx --identity reciever identity get-principal) # m2zqz-pr5r2-ozayk-w5trf-mt6mw-7vuys-mitrw-4qdpb-dm5p7-77ey6-fae
CANISTER=$(dfx canister id daohouse_backend)
DAO=bw4dl-smaaa-aaaaa-qaacq-cai
BHANU=$(dfx --identity Bhanu identity get-principal) # rmehg-adw5r-6trpq-epk4r-tyl4c-dd2u4-erbw4-kcjzr-rrjpf-dfvi2-oae

	# @@ -13,26 +13,26 @@ echo "RECIEVER: $RECIEVER"

function debug_print() {
    echo "State at checkpoint $1"
    # echo "Balance of minter: $(dfx canister call icrc1_ledger_canister icrc1_balance_of "(record {owner = principal \"$MINTER\"})")"
    echo "Balance of default: $(dfx canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_balance_of "(record {owner = principal \"$DEFAULT\"})")"
    echo "Balance of testing: $(dfx canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_balance_of "(record {owner = principal \"$USER\"})")"
    echo "Balance of reciever: $(dfx canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_balance_of "(record {owner = principal \"$RECIEVER\"})")"
    echo "Balance of Bhanu identity is: $(dfx canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_balance_of "(record {owner = principal \"$BHANU\"})")"
        echo "Balance of DAO Canister  is: $(dfx canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_balance_of "(record {owner = principal \"$DAO\"})")"
}

# # TRANSFER
# TRANSFER=$(
# dfx --identity default canister call b77ix-eeaaa-aaaaa-qaada-cai icrc1_transfer "(record { to = record { owner = principal \"$BHANU\" }; amount = 1000000000 })"
# echo $TRANSFER


# APPROVAL NEEDS TO BE DONE ON FRONTEND

# # # # # to approve 
APPROVE=$(dfx --identity minter canister call b77ix-eeaaa-aaaaa-qaada-cai icrc2_approve "(record { amount = 100; spender = record { owner = principal \"$DAO\"} })")
echo $APPROVE


# # debug_print 1
# # # TRANSFER TO USER
# USER_TRANSFER=$(dfx canister call daohouse_backend make_payment "(100000000, principal \"$USER\")")
# echo $USER_TRANSFER

debug_print 2