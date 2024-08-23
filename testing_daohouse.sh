# cargo build --release --target wasm32-unknown-unknown --package daohouse_backend

# candid-extractor target/wasm32-unknown-unknown/release/daohouse_backend.wasm >src/daohouse_backend/daohouse_backend.did

# RECIEVER=$(dfx --identity reciever identity get-principal)


cargo build --release --target wasm32-unknown-unknown --package dao_canister

candid-extractor target/wasm32-unknown-unknown/release/dao_canister.wasm >src/dao_canister/dao_canister.did


dfx canister create dao_canister
dfx build dao_canister


# dfx deploy daohouse_backend --argument "(record { payment_recipient = principal \"${RECIEVER}\"; })"


dfx deploy dao_canister --argument '(record {
    dao_name = "Sample DAO";
    purpose = "To manage community projects";
    daotype = "Non-profit";
    link_of_document = "https://example.com/charter.pdf";
    cool_down_period = 7;
    members = vec {
        principal "aaaaa-aa";
    };
    tokenissuer = "sample_token_issuer";
    linksandsocials = vec {
        "https://twitter.com/sampledao";
        "https://discord.gg/sampledao";
    };
    required_votes = 100;
    image_id = "1";
    followers = vec {
        principal "aaaaa-aa";
    };
    members_permissions = vec {
        "mai hi permission hai";
    };
    dao_groups = vec {
        record {
            group_name = "Example Group";
            group_members = vec { principal "aaaaa-aa" };
            group_permissions = vec { "example_permission" };
        };
        record {
            group_name = "Example Group2";
            group_members = vec { principal "aaaaa-aa" };
            group_permissions = vec { "example_permission" };
        };
        record {
            group_name = "Example Group3";
            group_members = vec { principal "aaaaa-aa" };
            group_permissions = vec { "example_permission" };
        }
    };
})'