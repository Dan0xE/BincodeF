#![cfg(feature = "derive")]

use bincode::{Decode, Encode};

#[derive(Encode, Decode, Clone)]
#[allow(dead_code)]
pub struct A;
#[derive(Encode, Decode, Clone)]
#[allow(dead_code)]
pub struct B<T>
where
    T: Clone + Encode + Decode<()>,
{
    pub t: T,
}

#[derive(Encode, Decode)]
#[allow(dead_code)]
pub struct MyStruct<T>
where
    T: Clone + Encode + Decode<()>,
{
    pub a: A,
    pub b: B<T>,
}
