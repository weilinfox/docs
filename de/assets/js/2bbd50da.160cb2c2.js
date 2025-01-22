"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[1647],{2596:(n,i,e)=>{e.r(i),e.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var s=e(4848),r=e(8453);const l={authors:["jing","arch"]},t="\u7b2c 026 \u671f\xb72024 \u5e74 07 \u6708 23 \u65e5",c={permalink:"/de/biweekly/2024/07/23/ruyisdk-biweekly-26",source:"@site/biweekly/2024-07-23-ruyisdk-biweekly-26.md",title:"\u7b2c 026 \u671f\xb72024 \u5e74 07 \u6708 23 \u65e5",description:"\u5377\u9996\u8bed",date:"2024-07-23T00:00:00.000Z",tags:[],readingTime:5.505,hasTruncateMarker:!1,authors:[{name:"xijing21",title:"RuyiSDK \u9879\u76ee\u7ecf\u7406",url:"https://github.com/xijing21",imageURL:"https://avatars.githubusercontent.com/u/84754181?v=4",key:"jing"},{name:"ArchFeh",title:"RuyiSDK \u793e\u533a\u7ecf\u7406(\u5df2\u79bb\u804c)",url:"https://github.com/ArchFeh",imageURL:"https://avatars.githubusercontent.com/u/16155165?v=4",key:"arch"}],frontMatter:{authors:["jing","arch"]},unlisted:!1,prevItem:{title:"\u7b2c 027 \u671f\xb72024 \u5e74 08 \u6708 13 \u65e5",permalink:"/de/biweekly/2024/08/13/ruyisdk-biweekly-27"},nextItem:{title:"\u7b2c 025 \u671f\xb72024 \u5e74 07 \u6708 09 \u65e5",permalink:"/de/biweekly/2024/07/09/ruyisdk-biweekly-25"}},d={authorsImageUrls:[void 0,void 0]},u=[{value:"\u5377\u9996\u8bed",id:"\u5377\u9996\u8bed",level:2},{value:"\u5305\u7ba1\u7406\u5668",id:"\u5305\u7ba1\u7406\u5668",level:2},{value:"IDE",id:"ide",level:2},{value:"GCC",id:"gcc",level:2},{value:"LLVM",id:"llvm",level:2},{value:"\u5b98\u7f51",id:"\u5b98\u7f51",level:2},{value:"\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u77e9\u9635",id:"\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u77e9\u9635",level:2}];function h(n){const i={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"\u5377\u9996\u8bed",children:"\u5377\u9996\u8bed"}),"\n",(0,s.jsxs)(i.p,{children:["RuyiSDK V0.15 \u7248\u672c\u5df2\u4e8e\u4eca\u65e5\u53d1\u5e03\u3002 \u8fd9\u4e2a\u7248\u672c\uff0c\u5305\u7ba1\u7406\u5668",(0,s.jsx)(i.strong,{children:"\u4e3a\u591a\u8bed\u8a00\u652f\u6301\u8fdb\u884c\u4e86\u51c6\u5907"}),"\uff0c\u5b8c\u6210\u4e86\u7528\u6237\u7cfb\u7edf\u533a\u57df\u3001\u8bed\u8a00\u914d\u7f6e\u4e0e\u5305\u7ba1\u7406\u5668\u8bed\u8a00\u7248\u672c\u7684\u5339\u914d\uff1b\u540c\u65f6",(0,s.jsx)(i.strong,{children:"\u5305\u7ba1\u7406\u5668\u652f\u6301\u4e86\u4e0d\u4f9d\u8d56 Docker \u7684\u6784\u5efa\u65b9\u5f0f"}),"\uff0c\u4e3a Linux \u53d1\u884c\u7248\u6253\u5305 ruyi \u548c\u5c06 ruyi \u96c6\u6210\u5230 Linux \u53d1\u884c\u7248\u63d0\u4f9b\u4e86\u66f4\u591a\u6837\u7684\u6784\u5efa\u65b9\u5f0f\u3002RuyiSDK \u8f6f\u4ef6\u6e90\u968f\u7740 Box64 \u4e0a\u6e38\u7248\u672c\u7684\u66f4\u65b0\uff0c\u5c06",(0,s.jsx)(i.strong,{children:"Box64 \u7248\u672c\u66f4\u65b0\u5230 0.3.0 \u7248\u672c\uff0c\u5e76\u5b8c\u5584\u4e86\u5bf9 WPS \u7684\u652f\u6301\u548c\u6587\u6863"}),"\uff1b"]}),"\n",(0,s.jsxs)(i.p,{children:["\u6b64\u5916\uff0c",(0,s.jsx)(i.strong,{children:"RuyiSDK \u521d\u6b65\u96c6\u6210\u4e86 Canaan Kendryte K230D \u5f00\u53d1\u677f"}),"\uff0c\u7531 RuyiSDK \u53d7\u6743\u6253\u5305\u7684 CanMV Linux SDK \u955c\u50cf\uff0c\u9644\u5e26\u6f14\u793a\u7a0b\u5e8f\uff08\u63d0\u4f9b LP64 \u4e0e RV64ILP32 \u4e24\u79cd ABI\uff09\uff0c\u4e0d\u8fc7\u76f8\u5173\u8d44\u6e90\u4f9d\u7136\u5728\u66f4\u65b0\u548c\u5b8c\u5584\uff0cRuyiSDK \u4e5f\u5c06\u53ca\u65f6\u66f4\u65b0\u96c6\u6210\u7684 SDK \u8d44\u6e90\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"RuyiSDK \u66f4\u591a\u8fdb\u5c55\u7ec6\u8282\u8be6\u89c1\u4e0b\u65b9\u8be6\u60c5\uff0c\u6b22\u8fce\u5927\u5bb6\u8bd5\u7528\u5e76\u63d0\u4f9b\u53cd\u9988\u548c\u5efa\u8bae\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u56e0 8 \u6708\u4e9a\u6d32\u591a\u5730\uff08\u65e5\u672c\u3001\u4e2d\u56fd\uff09RISC-V \u6d3b\u52a8\u6216\u5cf0\u4f1a\u7684\u5f00\u5c55\uff0cRuyiSDK \u7684\u90e8\u5206\u5c0f\u4f19\u4f34\u4e5f\u6709\u79ef\u6781\u53c2\u4e0e\uff0c\u56e0\u6b64\u8fd1\u671f\u7684\u7248\u672c\u53d1\u5e03\u65f6\u95f4\u5c06\u6709\u6240\u8c03\u6574\uff0c\u4e0b\u4e00\u4e2a\u5f00\u53d1\u7248\u672c RuyiSDK V0.16 \u7248\u672c\u5c06\u5728 8 \u6708 13 \u65e5\u53d1\u5e03\uff08RuyiSDK V0.17 \u7248\u672c\u5c06\u5728 9 \u6708 3 \u65e5\u53d1\u5e03\uff09\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u8fd9\u91cc\u9644\u4e0a RISC-V \u8fd1\u671f\u4e00\u4e9b\u4f1a\u8bae\u94fe\u63a5\uff0c\u6b22\u8fce\u5173\u6ce8\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://riscv.org/event/risc-v-day-tokyo-summer-2024/",children:"RISC-V Day Tokyo Summer 2024 (August 1)"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://riscv.org/event/risc-v-china-summit/",title:"RISC-V China Summit",children:"RISC-V China Summit (August 19 - August 25)"})}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u5305\u7ba1\u7406\u5668",children:"\u5305\u7ba1\u7406\u5668"}),"\n",(0,s.jsxs)(i.p,{children:["RuyiSDK 0.15 \u5bf9\u5e94\u7684\u5305\u7ba1\u7406\u5668\u7248\u672c\u4e5f\u4e3a 0.15.0\uff0c\u5df2\u4e8e\u4eca\u65e5\u53d1\u5e03\u3002\u60a8\u53ef\u79fb\u6b65\n",(0,s.jsx)(i.a,{href:"https://github.com/ruyisdk/ruyi/releases/tag/0.15.0",children:"GitHub Releases"})," \u6216 ",(0,s.jsx)(i.a,{href:"https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.15.0/",children:"ISCAS \u955c\u50cf\u6e90"}),"\u4e0b\u8f7d\u4f53\u9a8c\u3002"]}),"\n",(0,s.jsx)(i.p,{children:"\u672c\u6b21 RuyiSDK \u5305\u7ba1\u7406\u5668\u7684\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u4e3a\u591a\u8bed\u8a00\u652f\u6301\u505a\u597d\u51c6\u5907\uff1a\u5728\u9700\u8981\u8f93\u51fa\u672c\u5730\u5316\u5185\u5bb9\uff0c\u5982\u8f6f\u4ef6\u5305\u7684\u624b\u5de5\u4e0b\u8f7d\u6b65\u9aa4\u8bf4\u660e\u7b49\u5185\u5bb9\u65f6\uff0c\u5f53\u7528\u6237\u7cfb\u7edf\u7684\u533a\u57df\u3001\u8bed\u8a00\u914d\u7f6e\u4e0e\u5f53\u524d\u5185\u5bb9\u7684\u53ef\u9009\u533a\u57df\u3001\u8bed\u8a00\u7248\u672c\u4e0d\u5b8c\u5168\u5339\u914d\u65f6\uff0c\u73b0\u5728\u4f1a\u5c3d\u53ef\u80fd\u5730\u5339\u914d\u4e86\u3002"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u4f8b\u5982\uff1a\u5982\u679c\u60a8\u5c06\u7cfb\u7edf\u914d\u7f6e\u4e3a\u65b0\u52a0\u5761\u82f1\u8bed\uff0c\u800c\u67d0\u6761\u5185\u5bb9\u4ec5\u63d0\u4f9b\u7f8e\u56fd\u82f1\u8bed\u4e0e\u4e2d\u56fd\u5927\u9646\u4e2d\u6587\u4e24\u79cd\u7248\u672c\uff0c\u90a3\u4e48\n",(0,s.jsx)(i.code,{children:"ruyi"})," 0.15.0 \u5c06\u4e3a\u60a8\u5c55\u793a\u7f8e\u56fd\u82f1\u8bed\u5185\u5bb9\uff0c\u800c\u975e\u5d29\u6e83\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["\u652f\u6301\u4e86\u4e0d\u4f9d\u8d56 Docker \u7684\u6784\u5efa\u65b9\u5f0f\uff0c\u4ee5\u65b9\u4fbf\u53d1\u884c\u7248\u6253\u5305\u8005\uff0c\u6216\u4e0d\u4f7f\u7528\u5b98\u65b9\u652f\u6301\u67b6\u6784\u3001\u7cfb\u7edf\u7ec4\u5408\u7684\u7528\u6237\u5c1d\u9c9c\n",(0,s.jsx)(i.code,{children:"ruyi"}),"\u3002"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["\u9700\u8981\u6ce8\u610f\u7684\u662f\uff1a\u56e0\u4e3a\u76ee\u524d RuyiSDK \u5b98\u65b9\u8f6f\u4ef6\u6e90\u7684\u5185\u5bb9\u5206\u53d1\u5f62\u5f0f\u4ee5\u4e8c\u8fdb\u5236\u4e3a\u4e3b\uff0c\u6240\u4ee5\u60f3\u5728\u975e\u5b98\u65b9\u652f\u6301\u7cfb\u7edf\u4e0a\u4f7f\u7528\n",(0,s.jsx)(i.code,{children:"ruyi"})," \u7684\u7528\u6237\u5c06\u9700\u8981\u7ec4\u7ec7\u8d77\u6765\uff0c\u81ea\u884c\u642d\u5efa\u53e6\u4e00\u5957\u8f6f\u4ef6\u6e90\u3002RuyiSDK \u56e2\u961f\u65e0\u6cd5\u4fdd\u8bc1\u6b64\u79cd\u60c5\u51b5\u4e0b\u7684\u7528\u6237\u4f53\u9a8c\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u672c\u6b21 RuyiSDK \u8f6f\u4ef6\u6e90\u7684\u66f4\u65b0\u4e3b\u8981\u5305\u542b\u4e86\u4ee5\u4e0b\u5185\u5bb9\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\u8f6f\u4ef6\u6e90\u7684\u7ed3\u6784\u4e0d\u518d\u4e0e ",(0,s.jsx)(i.code,{children:"ruyi"})," 0.7.0 \u6216\u66f4\u4f4e\u7248\u672c\u517c\u5bb9\u3002\u662f\u65f6\u5019\u5347\u7ea7\u5230\u6700\u65b0\u7248\u672c\u4e86\u3002"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"emulator/box64-upstream"})," \u5df2\u66f4\u65b0\u5230 0.3.0\u3002"]}),"\n",(0,s.jsx)(i.li,{children:"\u7528 Box64 \u8fd0\u884c WPS Office \u7684\u64cd\u4f5c\u6587\u6863\u5df2\u66f4\u65b0\u3002"}),"\n",(0,s.jsxs)(i.li,{children:["Ruyi \u8bbe\u5907\u5b89\u88c5\u5668\u73b0\u5df2\u65b0\u589e\u652f\u6301\u4ee5\u4e0b\u8bbe\u5907\u578b\u53f7\u4e0e\u7cfb\u7edf\uff1a","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Canaan Kendryte K230D\uff1a\u7531 RuyiSDK \u53d7\u6743\u6253\u5305\u7684 CanMV Linux SDK \u955c\u50cf\uff0c\u9644\u5e26\u6f14\u793a\u7a0b\u5e8f\u3002\u63d0\u4f9b LP64 \u4e0e RV64ILP32 \u4e24\u79cd ABI\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u6b22\u8fce\u8bd5\u7528\u6216\u6765\u4e0a\u6e38\u56f4\u89c2\uff1b\u60a8\u7684\u9700\u6c42\u662f\u6211\u4eec\u8fed\u4ee3\u5f00\u53d1\u7684\u76ee\u6807\u548c\u52a8\u529b\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"ide",children:"IDE"}),"\n",(0,s.jsx)(i.p,{children:"\u5f00\u53d1\u65b9\u9762\u6682\u65e0\u8fdb\u5c55\uff1b\u57fa\u4e8e Milkv Duo \u5f00\u53d1\u677f\uff0c\u8c03\u7814\u5e76\u8dd1\u901a\u4e86\u4e00\u4e9b Demo\uff0c\u4f5c\u4e3a\u96c6\u6210\u7684 SDK \u7684\u90e8\u5206\u5185\u5bb9\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"gcc",children:"GCC"}),"\n",(0,s.jsx)(i.p,{children:"Gprofng \u7684 RISC-V \u540e\u7aef\u652f\u6301\u5df2\u88ab\u4e0a\u6e38\u5408\u5e76\uff0c\u5c06\u4f5c\u4e3a binutils 2.43 \u7684\u65b0\u7279\u6027\n\u66f4\u65b0\u4e86 P \u6269\u5c55\u7684 binutils \u652f\u6301\uff0c\u6b63\u5728\u5f00\u53d1 P \u6269\u5c55\u7684 draft \u8349\u6848\u652f\u6301\u4e2d"}),"\n",(0,s.jsx)(i.h2,{id:"llvm",children:"LLVM"}),"\n",(0,s.jsx)(i.p,{children:"\u5c1d\u8bd5\u4f7f\u7528\u8be5 LLVM \u7f16\u8bd1\u5668\uff0c\u5bf9 OpenCV \u8fdb\u884c\u4ea4\u53c9\u7f16\u8bd1\uff0c\u53d1\u73b0\u4e86\u5982\u4e0b\u7f3a\u5931\u7684 intrinsic\uff0c\u5df2\u7ecf\u4fee\u590d\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u652f\u6301 Clang \u5185\u5efa\u51fd\u6570 vssra/vssrl"}),"\n",(0,s.jsx)(i.li,{children:"\u652f\u6301 LLVM \u5185\u5efa\u51fd\u6570 vssra/vssrl"}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"\u5b98\u7f51",children:"\u5b98\u7f51"}),"\n",(0,s.jsx)(i.p,{children:"\u622a\u6b62\u4eca\u65e5 7 \u6708 23 \u65e5\uff0c\u8ba2\u9605\u4eba\u6570\u4e00\u5171 38 \u4eba\uff08\u589e\u52a0 1 \u4eba\uff09\u3002RuyiSDK \u7f51\u7ad9\u8bbf\u95ee\u4eba\u6570 568 \u4eba\uff08\u589e\u52a0 62 \u4eba\uff09\uff0c\u8bbf\u95ee\u9875\u9762 2710 \u6b21\uff08\u589e\u52a0 1286 \u6b21\uff09\u3002RuyiSDK \u5fae\u4fe1\u4ea4\u6d41\u7fa4 76 \u4eba\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["Ruyi \u5305\u7ba1\u7406\u5668\u4e0b\u8f7d\u91cf\u8fbe 7009 \u6b21\u3002Youtube \u51fa\u73b0 RuyiSDK \u4fc4\u8bed\u89c6\u9891\uff1a ",(0,s.jsx)(i.a,{href:"https://youtu.be/ufkJaEtEi4A?si=JsCAHYT8i-tF3vdN",children:"\u0427\u0451? \u041f\u0440\u043e\u0448\u0438\u0432\u0430\u0442\u044c Milk-V Duo S \u0437\u0430 2 \u043c\u0438\u043d\u0443\u0442\u044b!\n"})]}),"\n",(0,s.jsx)(i.h2,{id:"\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u77e9\u9635",children:"\u64cd\u4f5c\u7cfb\u7edf\u652f\u6301\u77e9\u9635"}),"\n",(0,s.jsx)(i.p,{children:"\u672c\u671f\u66f4\u65b0\uff1a"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Deepin RISC-V","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"StarFive VisionFive"}),"\n",(0,s.jsx)(i.li,{children:"StarFive VisionFive 2"}),"\n",(0,s.jsx)(i.li,{children:"Sipeed Lichee Pi 4A"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["openKylin RISC-V 2.0 RC","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"StarFive VisionFive 2"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Bianbu","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Milk-V Jupiter (CFT)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Debian","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Milk-V Duo S \u66f4\u65b0\u81f3\u6700\u65b0\u7248 v1.4.0"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.li,{children:"\u4e00\u4e9b\u5c0f\u7684 Typo Fix"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["\u5185\u5bb9\u8bf7\u8be6\u89c1\uff1a",(0,s.jsx)(i.a,{href:"https://github.com/ruyisdk/support-matrix",children:"ruyisdk/support-matrix"})]})]})}function o(n={}){const{wrapper:i}={...(0,r.R)(),...n.components};return i?(0,s.jsx)(i,{...n,children:(0,s.jsx)(h,{...n})}):h(n)}},8453:(n,i,e)=>{e.d(i,{R:()=>t,x:()=>c});var s=e(6540);const r={},l=s.createContext(r);function t(n){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof n?n(i):{...i,...n}}),[i,n])}function c(n){let i;return i=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:t(n.components),s.createElement(l.Provider,{value:i},n.children)}}}]);