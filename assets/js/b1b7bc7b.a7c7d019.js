"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[821],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4684:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={sidebar_position:1,title:"PSP22 Metadata"},c=void 0,p={unversionedId:"smart-contracts/PSP22/Extensions/metadata",id:"smart-contracts/PSP22/Extensions/metadata",isDocsHomePage:!1,title:"PSP22 Metadata",description:"This example shows how you can reuse the implementation of PSP22 token with the PSP22Metadata extension.",source:"@site/docs/smart-contracts/PSP22/Extensions/metadata.md",sourceDirName:"smart-contracts/PSP22/Extensions",slug:"/smart-contracts/PSP22/Extensions/metadata",permalink:"/smart-contracts/PSP22/Extensions/metadata",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/PSP22/Extensions/metadata.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"PSP22 Metadata"},sidebar:"tutorialSidebar",previous:{title:"PSP22",permalink:"/smart-contracts/PSP22/psp22"},next:{title:"PSP22 Mintable",permalink:"/smart-contracts/PSP22/Extensions/mintable"}},l=[{value:"Step 1: Add imports and enable unstable feature",id:"step-1-add-imports-and-enable-unstable-feature",children:[]},{value:"Step 2: Define storage",id:"step-2-define-storage",children:[]},{value:"Step 3: Inherit logic",id:"step-3-inherit-logic",children:[]},{value:"Step 4: Define constructor",id:"step-4-define-constructor",children:[]}],u={toc:l};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This example shows how you can reuse the implementation of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22"},"PSP22")," token with the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/contracts/token/psp22/src/extensions/metadata.rs"},"PSP22Metadata")," extension."),(0,o.kt)("h2",{id:"step-1-add-imports-and-enable-unstable-feature"},"Step 1: Add imports and enable unstable feature"),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contract")," macro instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"ink::contract"),". Import ",(0,o.kt)("strong",{parentName:"p"},"everything")," from ",(0,o.kt)("inlineCode",{parentName:"p"},"brush::contracts::psp22::extensions::metadata"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#![cfg_attr(not(feature = "std"), no_std)]\n#![feature(min_specialization)]\n\n#[brush::contract]\npub mod my_psp22 {\n    use brush::contracts::psp22::extensions::metadata::*;\n    use ink_prelude::string::String;\n')),(0,o.kt)("h2",{id:"step-2-define-storage"},"Step 2: Define storage"),(0,o.kt)("p",null,"Declare the storage struct and declare the field related to the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22MetadataStorage")," trait in addition to your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Storage")," field. Then you need to derive the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22MetadataStorage")," trait and mark the corresponding field with the ",(0,o.kt)("inlineCode",{parentName:"p"},"#[PSP22MetadataStorageField]")," attribute. Deriving this trait allows you to reuse the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," extension in your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22")," implementation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[ink(storage)]\n#[derive(Default, PSP22Storage, PSP22MetadataStorage)]\npub struct MyPSP22 {\n    #[PSP22StorageField]\n    psp22: PSP22Data,\n    #[PSP22MetadataStorageField]\n    metadata: PSP22MetadataData,\n}\n")),(0,o.kt)("h2",{id:"step-3-inherit-logic"},"Step 3: Inherit logic"),(0,o.kt)("p",null,"Inherit the implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," trait. You can customize (override) methods in this ",(0,o.kt)("inlineCode",{parentName:"p"},"impl")," block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"impl PSP22Metadata for MyPSP22 {}\n")),(0,o.kt)("h2",{id:"step-4-define-constructor"},"Step 4: Define constructor"),(0,o.kt)("p",null,"Define constructor. Your ",(0,o.kt)("inlineCode",{parentName:"p"},"PSP22Metadata")," contract is ready!"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'impl MyPSP22 {\n    #[ink(constructor)]\n    pub fn new(total_supply: Balance, name: Option<String>, symbol: Option<String>, decimal: u8) -> Self {\n        let mut instance = Self::default();\n        instance.metadata.name = name;\n        instance.metadata.symbol = symbol;\n        instance.metadata.decimals = decimal;\n        instance\n            ._mint(instance.env().caller(), total_supply)\n            .expect("Should mint total_supply");\n        instance\n    }\n}\n')),(0,o.kt)("p",null,"You can check an example of the usage of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/examples/psp22_extensions/metadata"},"PSP22 Metadata"),"."),(0,o.kt)("p",null,"You can also check the documentation for the basic implementation of ",(0,o.kt)("a",{parentName:"p",href:"/smart-contracts/PSP22/psp22"},"PSP22"),"."))}d.isMDXComponent=!0}}]);