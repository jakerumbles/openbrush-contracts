"use strict";(self.webpackChunkopenbrush=self.webpackChunkopenbrush||[]).push([[11],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),d=o,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6976:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2,title:"Setup the project"},c=void 0,s={unversionedId:"smart-contracts/example/setup_project",id:"smart-contracts/example/setup_project",isDocsHomePage:!1,title:"Setup the project",description:"In the first step, we will define the structure of the project.",source:"@site/docs/smart-contracts/example/setup_project.md",sourceDirName:"smart-contracts/example",slug:"/smart-contracts/example/setup_project",permalink:"/smart-contracts/example/setup_project",editUrl:"https://github.com/Supercolony-net/openbrush-contracts/tree/main/docs/docs/smart-contracts/example/setup_project.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Setup the project"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/smart-contracts/example/overview"},next:{title:"Implement PSP-22 contract",permalink:"/smart-contracts/example/psp22"}},p=[],m={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In the first step, we will define the structure of the project.\nWe suggest using that structure during development for the following reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The interface of the contracts is defined separately from the contracts. That allows others to communicate with these contracts without knowledge about the implementation and these interfaces can easily be imported to another project(that allows others to communicate with these contracts)."),(0,i.kt)("li",{parentName:"ul"},"Resolves the problem with cyclic dependencies across the project. To call the methods of the contract from the project you enough to have an interface."),(0,i.kt)("li",{parentName:"ul"},"The usage of the ",(0,i.kt)("inlineCode",{parentName:"li"},"ink-as-dependency")," feature is minimized. That can resolve a lot of headaches in the future."),(0,i.kt)("li",{parentName:"ul"},"The implementation of big contracts can be split into small parts to simplify the development."),(0,i.kt)("li",{parentName:"ul"},"The body of the contract doesn't contain the whole implementation of the contract. That improves the readability of the contracts.")),(0,i.kt)("p",null,"The project will contain the following directories:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"traits")," - contains all traits(interfaces) of the contracts developed in the project.\nTraits describe the functionality of each contract and allow to do cross-contracts calls\nwithout knowledge about the implementation(no need to import the contract, using a trait is enough)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"impls")," - contains the implementations of traits for the contracts.\nIf the contract contains several simple functions, better to implement\nthem in the body of the contract. But if the contract contains a lot of logic\nand methods, better to move(and maybe split on parts) the implementation to that directory.\nBetter to store the implementation of one contract in its own directory and not mix it with others."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"derive")," - is optional directory. OpenBrush provides the ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Supercolony-net/openbrush-contracts/blob/main/utils/brush_derive/lib.rs#L11"},"macro"),"\nto define a procedure derive macro of the storage trait.\nThat derive can be used to implement the storage trait for the data structure\nin two lines(more details about it later).\nIf the developer prefers to use derive macro for his data structures\nthen he can define them in that directory to import later in the project\n(procedure macros in Rust requires a separate crate)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"contracts")," - contains the bodies of the contracts. Each contract should be defined\nin its own crate(it is a rule of the ink!). Each folder in that directory is a\ncrate(contract). These contracts can have the implementation inside themselves\nor they can import the implementation from ",(0,i.kt)("inlineCode",{parentName:"li"},"impls"),".")),(0,i.kt)("p",null,"In that structure ",(0,i.kt)("inlineCode",{parentName:"p"},"traits"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"impls"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"derive")," directories are the parts of on ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME")," crate.\nEach contract in the ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts")," directory imports the crate ",(0,i.kt)("inlineCode",{parentName:"p"},"PROJECT_NAME")," and use it inside."),(0,i.kt)("p",null,"Based on the rules above the structure will look like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u251c\u2500\u2500 traits\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 loan.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 shares.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 stable_coin.rs\n\u251c\u2500\u2500 impls\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 data.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lending.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 lending_permissioned.rs\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 mod.rs\n\u251c\u2500\u2500 derive\n\u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 contracts\n\u2502\xa0\xa0 \u251c\u2500\u2500 lending\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 loan\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u251c\u2500\u2500 shares\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 lib.rs\n\u2502\xa0\xa0 \u2514\u2500\u2500 stable_coin\n\u2502\xa0\xa0     \u251c\u2500\u2500 Cargo.toml\n\u2502\xa0\xa0     \u2514\u2500\u2500 lib.rs\n\u251c\u2500\u2500 lib.rs\n\u251c\u2500\u2500 Cargo.toml\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"traits")," directory contains 4 traits with logic from the ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/example/overview"},"overview"),".\nIn the example:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LendingContract")," is a big contract and we moved the main logic into ",(0,i.kt)("inlineCode",{parentName:"li"},"impls/lending")," folder. That logic is split into two traits(",(0,i.kt)("inlineCode",{parentName:"li"},"Lending")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"LendingPermissione"),") to show how it can be done. Also, the implementation requires the usage of ",(0,i.kt)("inlineCode",{parentName:"li"},"derive"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LoanContract")," contains few methods, so the implementation is defined directly in the body of the contract."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SharesContract")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"PSP22")," token with public ",(0,i.kt)("inlineCode",{parentName:"li"},"mint")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"burn")," functions that require ownership."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"StableCoinContract")," is a pure ",(0,i.kt)("inlineCode",{parentName:"li"},"PSP22")," token.")))}u.isMDXComponent=!0}}]);