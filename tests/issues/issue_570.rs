#![cfg(feature = "derive")]

#[derive(bincode::Encode, bincode::Decode)]
#[allow(dead_code)]
pub struct Eg<D, E> {
    data: (D, E),
}
