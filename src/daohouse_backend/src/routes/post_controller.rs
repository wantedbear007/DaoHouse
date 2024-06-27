use candid::Principal;
use ic_cdk::api::call::{CallResult, RejectionCode};

use crate::{ImageData, State};
use crate::types::{PostInfo, PostInput};


// pub async fn create_new_post(state: &mut State, canister_id: String, post_id: String, postdetail: PostInput) -> Result<String, String> {



//     // upload image
//     let image_data: ImageData = ImageData {
//         content: postdetail.image_content,
//         content_type: postdetail.image_content_type,
//         name: postdetail.image_title
//     };

//     let image_id: String = upload_image(canister_id, image_data).await;


//     let new_post = PostInfo {
//         post_id: post_id.clone(),
//         username: postdetail.username,
//       //  post_title: postdetail.post_title,
//         post_description: postdetail.post_description,
//         post_img: postdetail.post_img,
//         // post_created_at: String::new(), 
//         post_created_at: ic_cdk::api::time(),
//         like_count: 0,
//         like_id_list: Vec::new(),
//         comment_count: 0,
//         comment_list: Vec::new(),
//     };




//     state.post_detail.insert(post_id, new_post);

//     Ok("Post created successfully".to_string())
// }

type ReturnResult = Result<u32, String>;

// upload image
pub async  fn upload_image(canister_id: String, image_data: ImageData) -> Result<String, String> {
  let response: CallResult<(ReturnResult,)> = ic_cdk::call(Principal::from_text(canister_id).unwrap(), "create_file", (image_data,)).await;
  // format!("{:?}", result.ok());

  let res0: Result<(Result<u32, String>,), (RejectionCode, String)> = response;


  let formatted_value = match res0 {
      Ok((Ok(value),)) => {
          format!("{}", value);
          Ok(format!("{}", value))
          // value
      },
      Ok((Err(err),)) => {
          Err(err)
      },
      Err((code, message)) => {
        match code {
          RejectionCode::NoError => Err("NoError".to_string()),
          RejectionCode::SysFatal => Err("SysFatal".to_string()),
          RejectionCode::SysTransient => Err("SysTransient".to_string()),
          RejectionCode::DestinationInvalid => Err("DestinationInvalid".to_string()),
          RejectionCode::CanisterReject => Err("CanisterReject".to_string()),
          // Handle other rejection codes here
          _ => Err(format!("Unknown rejection code: {:?}: {}", code, message)),
          // _ => Err(format!("Unknown rejection code: {:?}", code)),
      }
      }
  };

  formatted_value
}




// pub fn get_all_posts(state: &State) -> StableBTreeMap<String,PostInfo,Memory> {
//     return state.post_detail;
// }


