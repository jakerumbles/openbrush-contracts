"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[353],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=l(n),h=r,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||o;return n?a.createElement(f,s(s({ref:e},p),{},{components:n})):a.createElement(f,s({ref:e},p))}));function h(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6843:function(t,e,n){n.r(e),n.d(e,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return p}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:1,title:"Overview"},c=void 0,l={unversionedId:"smart-contracts/overview",id:"smart-contracts/overview",isDocsHomePage:!1,title:"Overview",description:"This doc contains description of how the OpenBrush library can be imported and used.",source:"@site/docs/smart-contracts/overview.md",sourceDirName:"smart-contracts",slug:"/smart-contracts/overview",permalink:"/smart-contracts/overview",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/"},next:{title:"Access Control",permalink:"/smart-contracts/access-control"}},p=[],u={toc:p};function m(t){var e=t.components,n=(0,r.Z)(t,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This doc contains description of how the OpenBrush library can be imported and used. "),(0,o.kt)("p",null,"The OpenBrush is using ink! stable release ",(0,o.kt)("inlineCode",{parentName:"p"},"v3.0.0")," branch at the moment.\nSo you should use the same version of the ink! across your project."),(0,o.kt)("h4",{id:"the-default-toml-of-your-project-with-openbrush"},"The default ",(0,o.kt)("inlineCode",{parentName:"h4"},"toml")," of your project with OpenBrush:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml"},'[dependencies]\n# Import of all ink! crates\nink_primitives = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_metadata = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false, features = ["derive"], optional = true }\nink_env = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_storage = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_lang = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\nink_prelude = { tag = "v3.0.0", git = "https://github.com/paritytech/ink", default-features = false }\n\nscale = { package = "parity-scale-codec", version = "3", default-features = false, features = ["derive"] }\nscale-info = { version = "2", default-features = false, features = ["derive"], optional = true }\n\n# Brush dependency\nbrush = { tag = "v1.5.0", git = "https://github.com/Supercolony-net/openbrush-contracts", default-features = false }\n\n[features]\ndefault = ["std"]\nstd = [\n  "ink_primitives/std",\n  "ink_metadata",\n  "ink_metadata/std",\n  "ink_env/std",\n  "ink_storage/std",\n  "ink_lang/std",\n  "scale/std",\n  "scale-info",\n  "scale-info/std",\n\n  # Brush dependency\n  "brush/std",\n]\nink-as-dependency = []\n')),(0,o.kt)("p",null,"To avoid unexpected compilation errors better to always import all ink! crates."),(0,o.kt)("p",null,"By default, the ",(0,o.kt)("inlineCode",{parentName:"p"},"brush")," crate provides ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/utils/brush_lang/proc_macros/lib.rs"},"macros"),"\nfor simplification of the development and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/traits"},"traits")," of\ncontracts(you can implement them by yourself, and you can use them for a cross-contract calls). "),(0,o.kt)("p",null,"The OpenBrush also provides the default implementation of traits that can be enabled via crate features.\nA list of all available features you can find ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/Cargo.toml#L36"},"here"),".\nThe default implementation of traits requires the usage of the unstable feature ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/beta/unstable-book/language-features/min-specialization.html"},"min-specialization"),".\nYou can enable it by adding ",(0,o.kt)("inlineCode",{parentName:"p"},"#![feature(min_specialization)]")," at the top of your root module(for more information check ",(0,o.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustdoc/unstable-features.html"},"rust official documentation"),"). "),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:")),"  ink! requires put ",(0,o.kt)("inlineCode",{parentName:"p"},'#![cfg_attr(not(feature = "std"), no_std)]')," at the top of root crate.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"Note:")),"  Some default implementations for traits provide additional methods that can be overridden.\nThese methods are defined in a separate internal trait. It has the name of the original trait + suffix ",(0,o.kt)("inlineCode",{parentName:"p"},"Internal"),".\nIf you want to override them you need to do that in the impl section of the internal trait.")),(0,o.kt)("p",null,"Also, that doc contains links to the examples of how to reuse and customize the default implementation of traits."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/psp22"},"PSP22")," is an example of how you can reuse the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"psp22"),". You also can find examples of how to reuse extensions.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/metadata"},"PSP22Metadata"),": metadata for PSP22."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/mintable"},"PSP22Mintable"),": creation of new tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/burnable"},"PSP22Burnable"),": destruction of own tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/wrapper"},"PSP22Wrapper"),": wrapper for PSP22 token (useful for governance tokens etc.)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/flashmint"},"PSP22FlashMint"),": extension which allows performing flashloans of the token by minting and burning the token."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/pausable"},"PSP22Pausable"),": example of using pausable extension in the PSP22 contract."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Extensions/capped"},"PSP22Capped"),": extension which adds a cap for total supply of PSP22 tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP22/Utils/token-timelock"},"PSP22TokenTimelock"),": Utility which allows token holders to lock their tokens for a specified amount of time."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/psp34"},"PSP34")," is an example of how you can reuse the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"psp34"),". You also can find examples of how to reuse extensions.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/metadata"},"PSP34Metadata"),": metadata for PSP34."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/mintable"},"PSP34Mintable"),": creation of new tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP34/Extensions/burnable"},"PSP34Burnable"),": destruction of own tokens."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP1155/psp1155"},"PSP1155")," is an example of how you can reuse the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155"),". You also can find examples of how to reuse extensions.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP1155/Extensions/metadata"},"PSP1155Metadata"),": metadata for PSP1155."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP1155/Extensions/mintable"},"PSP1155Mintable"),": creation of new tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/PSP1155/Extensions/burnable"},"PSP1155Burnable"),": destruction of own tokens."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/access-control"},"Access Control")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/access_control"},"access-control")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp34"},"psp34")," together to provide rights to mint and burn NFT tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/ownable"},"Ownable")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/access/ownable"},"ownable")," and\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp1155"},"psp1155")," together to provide rights to mint and burn tokens."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/reentrancy-guard"},"ReentrancyGuard")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/reentrancy_guard"},"non_reentrant"),"\nmodifier to prevent reentrancy during certain functions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/pausable"},"Pausable")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/security/pausable"},"pausable"),"\ncontract and modifiers."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/timelock-controller"},"TimelockController")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/governance/timelock_controller"},"timelock-controller"),"\nto execute a transaction with some delay via governance."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/smart-contracts/payment-splitter"},"PaymentSplitter")," shows how you can use the implementation of\n",(0,o.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/finance/payment_splitter"},"payment-splitter"),"\nto split received native tokens between participants of the contract.")))}m.isMDXComponent=!0}}]);