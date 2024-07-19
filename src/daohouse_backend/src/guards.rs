use ic_cdk::api;
use candid:: Principal;

// middleware guard to prevent anonymous user
pub fn prevent_anonymous() -> Result<(), String> {
  if api::caller() == Principal::anonymous() {
    return Err(String::from("Anonymous principal not allowed !"))
  }
  Ok(())
}