use candid::Principal;
use ic_cdk::api::call::{CallResult, RejectionCode};

use crate::{ImageData, State};
use crate::types::{PostInfo, PostInput};


pub fn create_new_post(state: &mut State, post_id: String, postdetail: PostInput) -> Result<String, String> {
    let new_post = PostInfo {
        post_id: post_id.clone(),
      //  post_title: postdetail.post_title,
        post_description: postdetail.post_description,
        post_img: postdetail.post_img,
        post_created_at: String::new(), 
        like_count: 0,
        like_id_list: Vec::new(),
        comment_count: 0,
        comment_list: Vec::new(),
    };

    state.post_detail.insert(post_id, new_post);

    Ok("Post created successfully".to_string())
}

type ReturnResult = Result<u32, String>;

// upload image
 pub async  fn upload_image(canister_id: String, image_data: ImageData) -> String {
  let response: CallResult<(ReturnResult,)> = ic_cdk::call(Principal::from_text(canister_id).unwrap(), "create_file", (image_data,)).await;
  // format!("{:?}", result.ok());

  let res0: Result<(Result<u32, String>,), (RejectionCode, String)> = response;


  let formatted_value = match res0 {
      Ok((Ok(value),)) => {
          format!("{}", value)
          // value
      },
      Ok((Err(_),)) => {
          "-1".to_string()
      },
      Err(_) => {
          println!("Result is an error");
          "-1".to_string()
      }
  };

  formatted_value
}



// pub fn get_all_posts(state: &State) -> StableBTreeMap<String,PostInfo,Memory> {
//     return state.post_detail;
// }


