
ASSET_HANDLER_ID=$(dfx canister id ic_asset_handler)
echo "ASSET_HANDLER_ID: $ASSET_HANDLER_ID"

  # for ((j = 1; j <= 40; j++))
  # do

  test3=$(dfx canister call daohouse_backend create_new_post "(
   \"$ASSET_HANDLER_ID\",
  record {
    post_description = \"Bhanu again testing post description.\";
    post_img = \"testing\";
    username = \"prataptechnologies\";
    image_content = vec {10};
    image_title = \"bhanuprofile.png\";
    image_content_type = \"image/png\";
  }
)")

echo $test3
# done