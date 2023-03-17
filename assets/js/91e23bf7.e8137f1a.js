"use strict";(self.webpackChunksuperbench_website=self.webpackChunksuperbench_website||[]).push([[9478],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7137:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"intro-sb",title:"Introduce SuperBench",author:"Tingting Qin",author_title:"SuperBench Team",author_url:"https://github.com/TobeyQin",tags:["superbench","announcement"]},c=void 0,s={permalink:"/superbenchmark/blog/intro-sb",editUrl:"https://github.com/microsoft/superbenchmark/edit/main/website/blog/2021-06-24-introduce-superbench.md",source:"@site/blog/2021-06-24-introduce-superbench.md",title:"Introduce SuperBench",description:"This blog is to introduce SuperBench to help you validate AI infrastructure.",date:"2021-06-24T00:00:00.000Z",formattedDate:"June 24, 2021",tags:[{label:"superbench",permalink:"/superbenchmark/blog/tags/superbench"},{label:"announcement",permalink:"/superbenchmark/blog/tags/announcement"}],readingTime:2.53,truncated:!1,prevItem:{title:"Releasing SuperBench v0.2",permalink:"/superbenchmark/blog/release-sb-v0.2"}},u=[{value:"The Advantages of SuperBench",id:"the-advantages-of-superbench",children:[{value:"Easy-to-use CLI",id:"easy-to-use-cli",children:[]},{value:"Modular and Extensible Framework",id:"modular-and-extensible-framework",children:[]},{value:"Conprehensive and Strandardized Benchmarks",id:"conprehensive-and-strandardized-benchmarks",children:[]}]},{value:"What&#39;s next?",id:"whats-next",children:[]},{value:"Call for Contributor",id:"call-for-contributor",children:[]}],p={toc:u};function m(e){var t=e.components,l=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This blog is to introduce ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/superbenchmark"},"SuperBench")," to help you validate AI infrastructure."),(0,o.kt)("h2",{id:"the-advantages-of-superbench"},"The Advantages of SuperBench"),(0,o.kt)("h3",{id:"easy-to-use-cli"},"Easy-to-use CLI"),(0,o.kt)("p",null,"In order to provide good user experience, SuperBench provides a command line interface to help users deploy and run benchmarks.\nEmpowered by SuperBench CLI, user can deploy and run their benchmarks with only one command, which greatly shorten the learning curve of using tools,\nto help user easily evaluate the performance of AI workload."),(0,o.kt)("p",null,"Below is a simple example to show how to deploy and run benchmarks locally. For more information,\nplease view ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/cli"},"CLI Document")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sb deploy -f local.ini\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run Benchmark"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sb run -f local.ini -c config.yaml\n")))),(0,o.kt)("p",null,"Among them, ",(0,o.kt)("inlineCode",{parentName:"p"},"local.ini")," is the configuration file to manage worker nodes that will actually run benchmarks.\nIn below case, the worker node is ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost"),", same as control node."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ini",metastring:'title="local.ini"',title:'"local.ini"'},"[all]\nlocalhost ansible_connection=local\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"config.yaml")," is a config file to configure the details of benchmarkings. You can customize your benchmarks by modified this file."),(0,o.kt)("p",null,"For more information, please view ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/getting-started/configuration"},"configuration")),(0,o.kt)("h3",{id:"modular-and-extensible-framework"},"Modular and Extensible Framework"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Executor Framework"),(0,o.kt)("p",{parentName:"li"},"In order to facilitate the benchmarking and validation on large-scale clusters, we designed and implemented a modular and extensible framework.\nSuperBench framework includes a runner as control node, as well as multiple executors as worker nodes.\nA runner received commands from CLI and distribute to all nodes (worker nodes) in the cluster, collect data, and summarize the results.\nEach worker will run executor to execute the specified benchmark tasks."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"SuperBench Executor Workflow",src:n(7068).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Benchmark Framework"),(0,o.kt)("p",{parentName:"li"},"SuperBench supports micro-benchmark for primitive computation and communication benchmarking,\nand model-benchmark to measure domain-aware end-to-end deep learning workloads.\nSuperBench implemented an abstract BenchmarkBase to provide common function. All kind of benchmarks are built based on this abstract class.\nIt also provides a unified interface and result format for all benchmarks.\nDevelopers can easily add new benchmarks."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"SuperBench Benchmark Package",src:n(2266).Z})))),(0,o.kt)("h3",{id:"conprehensive-and-strandardized-benchmarks"},"Conprehensive and Strandardized Benchmarks"),(0,o.kt)("p",null,"SuperBench supports a set of benchmarks listed as below."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Micro-Benchmarks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Computation benchmarks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"GEMM Flops"),(0,o.kt)("li",{parentName:"ul"},"Kernel Launch Time"),(0,o.kt)("li",{parentName:"ul"},"Operator Performance"))),(0,o.kt)("li",{parentName:"ul"},"Communication benchmarks",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Memory"),(0,o.kt)("li",{parentName:"ul"},"Device P2P"),(0,o.kt)("li",{parentName:"ul"},"RDMA"),(0,o.kt)("li",{parentName:"ul"},"NCCL"))),(0,o.kt)("li",{parentName:"ul"},"Computation-Communication Benchmarks"),(0,o.kt)("li",{parentName:"ul"},"Storage Benchmarks"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Model-Benchmarks"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"CNN models"),(0,o.kt)("li",{parentName:"ul"},"LSTM models"),(0,o.kt)("li",{parentName:"ul"},"BERT models"),(0,o.kt)("li",{parentName:"ul"},"GPT-2 models")))),(0,o.kt)("p",null,"For the details of each benchmark, please view ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/benchmarks/micro-benchmarks.md"},"micro-benchmarks"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://microsoft.github.io/superbenchmark/docs/benchmarks/model-benchmarks.md"},"model-benchmarks"),"."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"We want to extend SuperBench capability to distributed validation and auto-diagnosis, to build a benchmarking eco-system.\nThe following figure shows the whole picture.\n",(0,o.kt)("img",{alt:"SuperBench Capabilities and Extension",src:n(6926).Z})),(0,o.kt)("p",null,"With SuperBench and its extensions, we can support:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Quick and trustable distributed validation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Distributed validation tools to validate hundreds or thousands of servers automatically"),(0,o.kt)("li",{parentName:"ul"},"Provide minute-level fast validation and guarantee high repeatability for each benchmarks"),(0,o.kt)("li",{parentName:"ul"},"Provide baseline for different systems as Performance/Quality Gates for hardware and system release"))),(0,o.kt)("li",{parentName:"ul"},"Detailed auto diagnosis",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Provide comprehensive diagnosis benchmarks to analyze the detailed issued on defective node"),(0,o.kt)("li",{parentName:"ul"},"Provide detailed performance report and advanced analysis tool")))),(0,o.kt)("h2",{id:"call-for-contributor"},"Call for Contributor"),(0,o.kt)("p",null,"This project welcomes contributions and suggestions."))}m.isMDXComponent=!0},6926:function(e,t,n){t.Z=n.p+"assets/images/architecture-31a8f49e1763a52efd81fc0fa4bad05b.svg"},2266:function(e,t,n){t.Z=n.p+"assets/images/benchmark-structure-c15d7b54a939be845963d166083d7b53.png"},7068:function(e,t,n){t.Z=n.p+"assets/images/executor_workflow-3879e2df373302843fefb214fc0c8e06.png"}}]);