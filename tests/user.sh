#!/bin/bash


dfx identity new principal3 --storage-mode=plaintext || true



TESTING3=$(dfx --identity principal3 identity get-principal)


echo "TESTING3: $TESTING3"

dfx  identity use principal3


# creare_profile function
test1=$(dfx canister call daohouse_backend create_profile '(record {
    email_id = "harshit@gmail.com";
    profile_img = vec {104};  
    username = "harshit123";
    description = "This is a sample profile description.";
    contact_number = "123-456-7890";
    twitter_id = "@harshit_twitter";
    telegram = "@harshit_telegram";
    website = "https://harshitwebsite.com";
})')


if [[ "$test1" == *'"user registered successfully"'* ]]; then
    echo "Test 1 passed"
else
    echo "Test 1 failed"
fi



# get_user_profile function
test2=$(dfx canister call daohouse_backend get_user_profile)

username=$(echo $test2 | grep -oP '(?<=username = ")[^"]*')

if [ "$username" == "harshit123" ]; then
    echo "Test 2 passed"
else
    echo "Test 2 failed"
fi

# create_new_post function
test3=$(dfx canister call daohouse_backend create_new_post '(record{
    post_title="sample post";
    post_description="This is a sample post description.";
    post_img=vec{104};
})')



if [[ "$test3" == *'"post created successfully"'* ]]; then
    echo "Test 3 passed"
else
    echo "Test 3 failed"
fi



# dfx deploy dao_canister --argument '(record{
#     dao_name='';
#     purpose='';
#     document_name='';
#     link_of_document='';
#     cool_down_period='';
#     social_link='';
#     required_votes='';
# })'

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
})'

# dfx deploy dao_canister --argument '(record{
#     dao_name="Sample DAO";
#     purpose="To manage community projects";
#     document_name="DAO Charter";
#     link_of_document="https://example.com/charter.pdf";
#     cool_down_period=7;
#     social_link=vec{"https://twitter.com/sampledao"; "https://discord.gg/sampledao"};
#     required_votes=100;
# })'






dfx canister call daohouse_backend create_dao '(record {
    dao_name = "Sample DAO";
    purpose = "To manage community projects";
    daotype = "Non-profit";
    link_of_document = "https://example.com/charter.pdf";
    cool_down_period = "7 days";
    members=vec{
        principal "aaaaa-aa";
    };
    tokenissuer="sample";
    linksandsocials=vec{
        "https://twitter.com/sampledao";
    };
    required_votes=100;

})'

