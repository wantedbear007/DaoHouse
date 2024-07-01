# 
# dfx stop
dfx start --clean --background

dfx generate

dfx deploy dao_canister --argument '(record{
    dao_name="Sample DAO";
    purpose="To manage community projects";
    daotype="Non-profit";
    link_of_document="https://example.com/charter.pdf";
    cool_down_period="7 days";
    members=vec{
        principal "aaaaa-aa";
    };
    tokenissuer="sample_token_issuer";
    linksandsocials=vec{
        "https://twitter.com/sampledao";
        "https://discord.gg/sampledao";
    };
    required_votes=100;
})' --network ic



dfx deploy daohouse_backend --network ic
dfx deploy internet_identity --network ic
dfx deploy daohouse_frontend --network ic
dfx deploy ic_asset_handler --network ic
# dfx generate