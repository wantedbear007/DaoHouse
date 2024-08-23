MINTER=$(dfx --identity default identity get-principal)
DEFAULT=$(dfx --identity default identity get-principal)
RECIEVER=$(dfx --identity reciever identity get-principal) # m2zqz-pr5r2-ozayk-w5trf-mt6mw-7vuys-mitrw-4qdpb-dm5p7-77ey6-fae
PRO=$(dfx --identity minter identity get-principal) # rmehg-adw5r-6trpq-epk4r-tyl4c-dd2u4-erbw4-kcjzr-rrjpf-dfvi2-oae
BHANU=$(dfx --identity Bhanu identity get-principal)  # yxtej-lmfuu-rp3yv-xzu2h-6q43c-7iast-yiwff-z552q-6ugas-pyd6b-fae

TOKEN_SYMBOL=TOK
TOKEN_NAME="DAOTOKEN"
TRANSFER_FEE=1000
PRE_MINTED_TOKENS=100000000000
DIFFERENT=20000000
echo $RECIEVER

# dfx canister create --all

# dfx deploy icrc1_ledger_canister --argument "(variant {Init = 
# record {
#      token_symbol = \"${TOKEN_SYMBOL}\";
#      token_name = \"${TOKEN_NAME}\";
#      minting_account = record { owner = principal \"${MINTER}\" };
#      transfer_fee = ${TRANSFER_FEE};
#      metadata = vec {};
#      initial_balances = vec { record { record { owner = principal \"${BHANU}\"; }; ${PRE_MINTED_TOKENS}; record { owner = principal \"${PRO}\"; }; ${PRE_MINTED_TOKENS}; }; };
#      archive_options = record {
#          num_blocks_to_archive = 100;
#          trigger_threshold = 100;
#          controller_id = principal \"${DEFAULT}\";
#      };
#      feature_flags = opt record {icrc2 = true;};
#  }
# })"

dfx deploy icrc1_ledger_canister --argument "(variant {Init = 
record {
    token_symbol = \"${TOKEN_SYMBOL}\";
    token_name = \"${TOKEN_NAME}\";
    minting_account = record { owner = principal \"${MINTER}\" };
    transfer_fee = ${TRANSFER_FEE};
    metadata = vec {}; 
    initial_balances = vec {
        record { record { owner = principal \"${BHANU}\" }; ${PRE_MINTED_TOKENS} };
        record { record { owner = principal \"${PRO}\" }; ${PRE_MINTED_TOKENS} };
        record { record { owner = principal \"${RECIEVER}\" }; ${DIFFERENT} }
    };
    archive_options = record {
        num_blocks_to_archive = 100;
        trigger_threshold = 100;
        controller_id = principal \"${DEFAULT}\";
    };
    feature_flags = opt record { icrc2 = true; };
}
})"