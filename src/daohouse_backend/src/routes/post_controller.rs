use crate::State;
use crate::types::{PostInfo, PostInput};


pub fn create_new_post(state: &mut State, post_id: String, postdetail: PostInput) -> Result<String, String> {
    let new_post = PostInfo {
        post_id: post_id.clone(),
        post_title: postdetail.post_title,
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


// pub fn get_all_posts(state: &State) -> StableBTreeMap<String,PostInfo,Memory> {
//     return state.post_detail;
// }


