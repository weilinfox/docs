"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[4544],{6924:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>o});var i=n(4848),r=n(8453);const t={title:"Eclipse \u4e0a\u6e38\u521d\u6b65\u652f\u6301 RISC-V\uff0c\u6bcf\u65e5\u6784\u5efa\u955c\u50cf\u5df2\u7ecf\u53ef\u4ee5\u4e0b\u8f7d\u8bd5\u7528"},c="Eclipse \u4e0a\u6e38\u521d\u6b65\u652f\u6301 RISC-V\uff0c\u6bcf\u65e5\u6784\u5efa\u955c\u50cf\u5df2\u7ecf\u53ef\u4ee5\u4e0b\u8f7d\u8bd5\u7528",l={permalink:"/docs/en/blog/2024/09/30/eclipse-riscv64",source:"@site/blog/2024-09-30-eclipse-riscv64.md",title:"Eclipse \u4e0a\u6e38\u521d\u6b65\u652f\u6301 RISC-V\uff0c\u6bcf\u65e5\u6784\u5efa\u955c\u50cf\u5df2\u7ecf\u53ef\u4ee5\u4e0b\u8f7d\u8bd5\u7528",description:"- \u539f\u6587\u94fe\u63a5\uff1ahttps://riscv.org/blog-chinese/2024/09/eclipse-riscv64-support-upstreamed/",date:"2024-09-30T00:00:00.000Z",tags:[],readingTime:2.33,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Eclipse \u4e0a\u6e38\u521d\u6b65\u652f\u6301 RISC-V\uff0c\u6bcf\u65e5\u6784\u5efa\u955c\u50cf\u5df2\u7ecf\u53ef\u4ee5\u4e0b\u8f7d\u8bd5\u7528"},unlisted:!1,prevItem:{title:"Release notes for RuyiSDK 0.20",permalink:"/docs/en/blog/2024/10/22/ruyi-0.20"},nextItem:{title:"Release notes for RuyiSDK 0.19",permalink:"/docs/en/blog/2024/09/30/ruyi-0.19"}},p={authorsImageUrls:[]},o=[];function a(e){const s={a:"a",blockquote:"blockquote",em:"em",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.blockquote,{children:["\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["\u539f\u6587\u94fe\u63a5\uff1a",(0,i.jsx)(s.a,{href:"https://riscv.org/blog-chinese/2024/09/eclipse-riscv64-support-upstreamed/",children:"https://riscv.org/blog-chinese/2024/09/eclipse-riscv64-support-upstreamed/"})]}),"\n",(0,i.jsx)(s.li,{children:"\u65e5\u671f: September 30, 2024"}),"\n",(0,i.jsx)(s.li,{children:"\u4f5c\u8005\uff1a\u9648\u7487"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Eclipse \u662f\u4e00\u6b3e\u5f00\u6e90\u4e14\u529f\u80fd\u5f3a\u5927\u7684\u96c6\u6210\u5f00\u53d1\u73af\u5883\uff08IDE\uff09\uff0c\u5e7f\u6cdb\u652f\u6301\u591a\u79cd\u7f16\u7a0b\u8bed\u8a00\uff0c\u4e3a\u5f00\u53d1\u8005\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7edf\u4e00\u7684\u5e73\u53f0\uff0c\u7528\u4e8e\u7f16\u5199\u3001\u8c03\u8bd5\u548c\u7ba1\u7406\u4ee3\u7801\u3002\u540c\u65f6\uff0cEclipse \u8fd8\u5177\u5907\u5f3a\u5927\u7684\u63d2\u4ef6\u7cfb\u7edf\uff0c\u53ef\u6839\u636e\u9700\u6c42\u7075\u6d3b\u6269\u5c55\u529f\u80fd\u3002"}),"\n",(0,i.jsxs)(s.p,{children:["\u8fd1\u671f\uff0c\u6765\u81ea\u4e2d\u56fd\u79d1\u5b66\u9662\u8f6f\u4ef6\u7814\u7a76\u6240\uff08ISCAS\uff09\u7684 RevyOS \u5c0f\u961f\u7684\u5de5\u7a0b\u5e08\u8054\u5408\u5176\u4ed6\u5f00\u6e90\u793e\u533a\u5f00\u53d1\u8005\uff0c\u6210\u529f\u4e3a Eclipse \u4e0a\u6e38\u4ee3\u7801\u4ed3\u5e93\u5f15\u5165\u4e86\u5bf9 riscv64 \u67b6\u6784\u7684\u521d\u6b65\u652f\u6301\u3002\u671f\u95f4\u521b\u5efa\u4e86",(0,i.jsx)(s.a,{href:"https://github.com/eclipse-platform/eclipse.platform.releng.aggregator/issues/2310",children:"\u4e8c\u5341\u4f59\u4e2a Issue/PR"}),"\uff0c\u6db5\u76d6\u4e86\u5305\u62ec SWT\u3001Equinox \u5728\u5185\u7684\u5173\u952e\u7ec4\u4ef6\u3002\u76ee\u524d\uff0cEclipse \u5df2\u652f\u6301\u5728 riscv64 \u5e73\u53f0\u4e0a\u57fa\u4e8e OpenJDK \u5f00\u53d1 Java \u9879\u76ee\u3002"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"eclipse-pic-1.png",src:n(9651).A+"",width:"1163",height:"1540"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"\u56fe1-Eclipse upstream \u6d89\u53ca\u5230\u51e0\u5341\u4e2a\u4e0d\u540c\u7684\u7ec4\u5efa\u548c\u652f\u6301\u8fc7\u7a0b\uff0c\u8bb8\u591a\u5f00\u53d1\u8005\u90fd\u8fdb\u884c\u4e86\u8d21\u732e"})}),"\n",(0,i.jsx)(s.p,{children:"\u76f8\u5173\u6539\u52a8\u5df2\u88ab\u5408\u5165\u4e0a\u6e38\uff0c\u611f\u5174\u8da3\u7684\u670b\u53cb\u53ef\u901a\u8fc7\u4e0b\u65b9\u94fe\u63a5\uff0c\u5efa\u8bae\u9009\u62e9 Integration Builds \u677f\u5757\u4e2d\u7684\u6700\u65b0\u6784\u5efa\u65e5\u671f\uff0820240929\u4ee5\u540e\u6bcf\u65e5\u6784\u5efa\u652f\u6301riscv\uff09\u8fdb\u5165\u6bcf\u65e5\u6784\u5efa\u8d44\u6e90\u9875\u9762\uff0c\u9009\u62e9\u201cEclipse SDK -> Linux (64 bit version for RISC-V)\u201d\u4e0b\u8f7d\u540e\u8fdb\u884c\u4f53\u9a8c\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://download.eclipse.org/eclipse/downloads/index.html",children:"https://download.eclipse.org/eclipse/downloads/index.html"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"eclipse-pic-2.png",src:n(5160).A+"",width:"832",height:"802"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"\u56fe2-\u5728\u5b89\u88c5\u4e86 Debian \u64cd\u4f5c\u7cfb\u7edf\u7684 SiFive Unmatched \u4e0a\u6d4b\u8bd5\u8fd0\u884c Eclipse SDK IDE"})}),"\n",(0,i.jsx)(s.p,{children:"\u63a5\u4e0b\u6765\uff0cRevyOS \u5c0f\u961f\u5c06\u7ee7\u7eed\u5b8c\u5584 Eclipse riscv64 \u7684\u652f\u6301\uff0c\u656c\u8bf7\u671f\u5f85\u66f4\u591a\u4f18\u5316\u4e0e\u6539\u8fdb\uff01"}),"\n",(0,i.jsx)(s.p,{children:"\u4e2d\u56fd\u79d1\u5b66\u9662\u8f6f\u4ef6\u7814\u7a76\u6240\u8bda\u9080\u5bf9\u5f00\u6e90\u6280\u672f\u5145\u6ee1\u70ed\u60c5\u7684\u5f00\u6e90\u8f6f\u4ef6\u8d21\u732e\u8005\u52a0\u5165\u8fdb\u6765\uff0c\u52a9\u529b Eclipse \u5728 riscv64 \u5e73\u53f0\u4e0a\u7684\u53d1\u5c55\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u5173\u4e8e ISCAS\u3001RevyOS\u5c0f\u961f"})}),"\n",(0,i.jsx)(s.p,{children:"RevyOS\u5c0f\u961f\u96b6\u5c5e\u4e8e PLCT Lab, ISCAS\u3002ISCAS \u662f RISC-V International \u7684 Development Partner\u3001Training Partner\uff0c\u540c\u65f6\u57282024\u5e748\u6708\u83b7\u5f97\u4e86 RISC-V Ecosystem Labs \u8ba4\u8bc1\u3002"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"\u7279\u522b\u81f4\u8c22\u4ee5\u4e0b\u8d21\u732e\u8005"})}),"\n",(0,i.jsx)(s.p,{children:"\u4e8e\u6ce2\u3001\u9648\u7487\u3001Hannes Wellmann\u3001Alexander Kurtakov\u3001Ed Merks\u3001Pawel Stankiewicz\u3001Frederic Gurr"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"\u5982\u6709\u9057\u6f0f\uff0c\u8bf7\u8054\u7cfb\u4f5c\u8005"})})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},9651:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/eclipse-pic-1-51a293b492da56b5101250bd43dcd623.png"},5160:(e,s,n)=>{n.d(s,{A:()=>i});const i=n.p+"assets/images/eclipse-pic-2-6e961c948c3dbda71b1466d65e8a03ce.png"},8453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>l});var i=n(6540);const r={},t=i.createContext(r);function c(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);