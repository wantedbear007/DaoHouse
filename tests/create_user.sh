#!/bin/bash

ASSET_HANDLER_ID=$(dfx canister id ic_asset_handler)
echo "ASSET_HANDLER_ID: $ASSET_HANDLER_ID"

ENDING=30

for ((i = 1; i <= ENDING; i++))
do

  IDENTITY=$(dfx identity new "bhanu$i")
  echo $IDENTITY

  USE=$(dfx identity use "bhanu$i")
  echo $USE


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
      image_content = vec {200};
      image_title = \"bhanuprofile.png\";
      image_content_type = \"image/png\";
    }
  )")

  for ((j = 1; j <= 40; j++))
  do

  test3=$(dfx canister call daohouse_backend create_new_post "(
   \"$ASSET_HANDLER_ID\",
  record {
    post_description = \"This post description.\";
    post_img = \"testing\";
    username = \"prataptechnologies\";
    image_content = vec {10};
    image_title = \"bhanuprofile.png\";
    image_content_type = \"image/png\";
    user_image_id = \"1\";
  }
)")

echo $test3
done


  echo "Profile creation response for iteration $i: $TEST"
done


# # TO DELETE IDENTITIES
# for ((i = 1; i <= $ENDING; i++))
# do
#   IDENTITY=$(dfx identity remove "bhanu$i")
#   echo $IDENTITY
# done