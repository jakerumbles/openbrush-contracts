#![cfg_attr(not(feature = "std"), no_std)]

#[brush::contract]
pub mod erc1155_receiver {
    use brush::contracts::traits::psp1155::*;
    use ink_prelude::{
        string::String,
        vec::Vec,
    };

    #[ink(storage)]
    pub struct PSP1155ReceiverStruct {
        call_counter: u64,
        revert_next_transfer: bool,
    }

    impl PSP1155ReceiverStruct {
        #[ink(constructor)]
        pub fn new() -> Self {
            Self {
                call_counter: 0,
                revert_next_transfer: false,
            }
        }

        #[ink(message)]
        pub fn get_call_counter(&self) -> u64 {
            self.call_counter
        }

        #[ink(message)]
        pub fn revert_next_transfer(&mut self) {
            self.revert_next_transfer = true
        }
    }

    impl PSP1155Receiver for PSP1155ReceiverStruct {
        #[ink(message)]
        fn before_received(
            &mut self,
            _operator: AccountId,
            _from: AccountId,
            _ids_to_amounts: Vec<(Id, Balance)>,
            _data: Vec<u8>,
        ) -> Result<(), PSP1155ReceiverError> {
            if self.revert_next_transfer {
                self.revert_next_transfer = false;
                return Err(PSP1155ReceiverError::TransferRejected(String::from(
                    "I should reject next transfer",
                )))
            }
            self.call_counter += 1;
            Ok(())
        }
    }
}
