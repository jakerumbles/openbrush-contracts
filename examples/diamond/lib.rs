#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]

#[brush::contract]
pub mod diamond {
    use brush::contracts::diamond::extensions::diamond_loupe::*;
    use ink_storage::traits::SpreadAllocate;

    #[ink(storage)]
    #[derive(Default, SpreadAllocate, DiamondStorage, DiamondLoupeStorage)]
    pub struct DiamondContract {
        #[DiamondStorageField]
        diamond: DiamondData,
        #[DiamondLoupeStorageField]
        diamond_loupe: DiamondLoupeData,
    }

    impl DiamondContract {
        #[ink(constructor)]
        pub fn new(owner: AccountId) -> Self {
            ink_lang::codegen::initialize_contract(|instance: &mut Self| {
                instance._init_with_owner(owner);
            })
        }

        #[ink(message, payable, selector = _)]
        pub fn forward(&self) {
            self._fallback()
        }
    }

    impl Ownable for DiamondContract {}

    impl Diamond for DiamondContract {}

    impl DiamondLoupe for DiamondContract {}
}
