#![cfg(all(feature = "derive", feature = "std"))]

extern crate std;

use bincode::{Decode, Encode};
use std::borrow::Cow;

#[derive(Clone, Encode, Decode)]
#[allow(dead_code)]
pub struct Foo<'a>(Cow<'a, str>);
