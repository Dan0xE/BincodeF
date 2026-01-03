#![cfg(all(feature = "derive", feature = "std"))]

use bincode::{Decode, Encode};

#[derive(Encode, Decode)]
#[allow(dead_code)]
pub enum TypeOfFile {
    Unknown = -1,
}
