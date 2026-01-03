#![cfg(all(feature = "derive", feature = "std"))]

use bincode::{Decode, Encode};

#[derive(Encode, Decode)]
#[allow(dead_code)]
struct Foo<Bar = ()> {
    x: Bar,
}
