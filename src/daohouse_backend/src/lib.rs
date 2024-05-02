use ic_cdk::{api, init, query, update, export_candid};


#[ic_cdk::query]
fn greet(name: String) -> String {
    format!("Hello, {}!", name)
}


export_candid!();