"use strict";(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[8349],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},1922:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return u},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={id:"introduction"},u="Introduction",l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Introduction",description:"Features",source:"@site/../docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/superbenchmark/docs/introduction",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/../docs/introduction.md",version:"current",frontMatter:{id:"introduction"},sidebar:"docs",next:{title:"Installation",permalink:"/superbenchmark/docs/getting-started/installation"}},s=[{value:"Features",id:"features",children:[]},{value:"Overview",id:"overview",children:[]}],d={toc:s};function p(e){var t=e.components,c=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("h2",{id:"features"},"Features"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SuperBench")," is a validation and profiling tool for AI infrastructure, which supports:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"AI infrastructure validation and diagnosis",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Distributed validation tools to validate hundreds or thousands of servers automatically"),(0,i.kt)("li",{parentName:"ul"},"Consider both raw hardware and E2E model performance with ML workload patterns"),(0,i.kt)("li",{parentName:"ul"},"Build a contract to identify hardware issues"),(0,i.kt)("li",{parentName:"ul"},"Provide infrastructural-oriented criteria as Performance/Quality Gates for hardware and system release"),(0,i.kt)("li",{parentName:"ul"},"Provide detailed performance report and advanced analysis tool"))),(0,i.kt)("li",{parentName:"ul"},"AI workload benchmarking and profiling",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Provide comprehensive performance comparison between different existing hardware"),(0,i.kt)("li",{parentName:"ul"},"Provide insights for hardware and software co-design")))),(0,i.kt)("p",null,"It provides micro-benchmark for primitive computation and communication benchmarking,\nas well as model-benchmark to measure domain-aware end-to-end deep learning workloads."),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The following figure shows the capabilities provided by SuperBench core framework and its extension."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"SuperBench Structure",src:r(6926).Z})))}p.isMDXComponent=!0},6926:function(e,t,r){t.Z=r.p+"assets/images/architecture-31a8f49e1763a52efd81fc0fa4bad05b.svg"}}]);