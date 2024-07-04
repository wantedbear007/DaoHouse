# ASSET_HANDLER_ID=$(dfx canister id ic_asset_handler )
# echo $ASSET_HANDLER_ID

ENDING=10

# for ((i = 1; i <= $ENDING; i++))
# do
#   IDENTITY=$(dfx identity new "bhanu$i")
#   echo $IDENTITY

#   USE=$(dfx identity use "bhanu$i")
#   echo $USE


#   TEST=$(dfx canister call daohouse_backend create_profile '(
#     "$ASSET_HANDLER_ID",
#     record {
#       email_id = "bhanupradddd@gmail.com";
#         profile_img = "abc";  
#         username = "bhanupra123";
#         description = "This is a sample profile description.";
#         contact_number = "123-456-7890";
#         twitter_id = "@bhanupra_twitter";
#         telegram = "@bhanupra_telegram";
#         website = "https://bhanuprawebsite.com";
#         tag_defines =  vec {"tag1"};
#         image_content = opt vec {200};
#         image_title = "bhanuprofile.png";
#         image_content_type = "image/png";
#     }
#   )')

  

#   echo $TEST

# done


!/bin/bash

# Get the canister ID for ic_asset_handler and store it in ASSET_HANDLER_ID
ASSET_HANDLER_ID=$(dfx canister id ic_asset_handler)
echo "ASSET_HANDLER_ID: $ASSET_HANDLER_ID"

# Set the ending number for the loop
ENDING=1000

# Loop from 1 to ENDING
for ((i = 1; i <= ENDING; i++))
do

  IDENTITY=$(dfx identity new "bhanu$i")
  echo $IDENTITY

  USE=$(dfx identity use "bhanu$i")
  echo $USE


  # Create the profile by calling the canister method
  TEST=$(dfx canister call daohouse_backend create_profile "(
    \"$ASSET_HANDLER_ID\",
    record {
      email_id = \"bhanupradddd@gmail.com\";
      profile_img = \"abc\";
      username = \"bhanupra123\";
      description = \"This is a sample profile description.\";
      contact_number = \"123-456-7890\";
      twitter_id = \"@bhanupra_twitter\";
      telegram = \"@bhanupra_telegram\";
      website = \"https://bhanuprawebsite.com\";
      tag_defines = vec {\"tag1\"};
      image_content = opt vec {200};
      image_title = \"bhanuprofile.png\";
      image_content_type = \"image/png\";
    }
  )")

  echo "Profile creation response for iteration $i: $TEST"
done


# # TO DELETE IDENTITIES
# for ((i = 1; i <= $ENDING; i++))
# do
#   IDENTITY=$(dfx identity remove "bhanu$i")
#   echo $IDENTITY
# done