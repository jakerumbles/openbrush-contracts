#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod my_psp22_token_timelock {
    use psp22::{
        traits::*,
        utils::token_timelock::*,
    };

    #[ink(storage)]
    #[derive(Default, PSP22TokenTimelockStorage)]
    pub struct MyPSP22TokenTimelock {
        #[PSP22TokenTimelockStorageField]
        timelock: PSP22TokenTimelockData,
    }

    impl PSP22TokenTimelock for MyPSP22TokenTimelock {}

    impl MyPSP22TokenTimelock {
        #[ink(constructor)]
        pub fn new(token_address: AccountId, beneficiary: AccountId, release_time: Timestamp) -> Self {
            let mut instance = Self::default();
            instance.init(token_address, beneficiary, release_time);
            instance
        }
    }
}