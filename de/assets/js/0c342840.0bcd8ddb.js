"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[8919],{9932:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>t,toc:()=>l});var a=r(4848),s=r(8453);const i={sidebar_position:6},c="Verwendung von QEMU und LLVM",t={id:"Package-Manager/cases/case6",title:"Verwendung von QEMU und LLVM",description:"Dieses Beispiel basiert auf Coremark f\xfcr MilkV Duo erstellen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/Package-Manager/cases/case6.md",sourceDirName:"Package-Manager/cases",slug:"/Package-Manager/cases/case6",permalink:"/docs/de/docs/Package-Manager/cases/case6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Integration mit CMake und Meson",permalink:"/docs/de/docs/Package-Manager/cases/case5"},next:{title:"Weitere Informationen",permalink:"/docs/de/docs/Package-Manager/misc"}},o={},l=[];function u(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"verwendung-von-qemu-und-llvm",children:"Verwendung von QEMU und LLVM"}),"\n",(0,a.jsxs)(n.p,{children:["Dieses Beispiel basiert auf ",(0,a.jsx)(n.a,{href:"/docs/de/docs/Package-Manager/cases/case2",children:"Coremark f\xfcr MilkV Duo erstellen"})]}),"\n",(0,a.jsx)(n.p,{children:"Zun\xe4chst installieren Sie die erforderlichen Abh\xe4ngigkeiten:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ruyi install llvm-upstream gnu-plct qemu-user-riscv-upstream\n"})}),"\n",(0,a.jsx)(n.p,{children:"Erstellen Sie eine virtuelle Umgebung und aktivieren Sie diese:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"ruyi venv -t llvm-upstream --sysroot-from gnu-plct -e qemu-user-riscv-upstream generic venv\n. venv/bin/ruyi-activate\n"})}),"\n",(0,a.jsx)(n.p,{children:"Entpacken Sie Coremark und kompilieren Sie es:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"\xabRuyi milkv-venv\xbb $ mkdir coremark\n\xabRuyi milkv-venv\xbb $ cd coremark\n\xabRuyi milkv-venv\xbb $ ruyi extract coremark\n\n\xabRuyi milkv-venv\xbb $ sed -i 's/\\bgcc\\b/riscv64-unknown-linux-gnu-gcc/g' linux64/core_portme.mak\n\xabRuyi milkv-venv\xbb $ make PORT_DIR=linux64 link\n"})}),"\n",(0,a.jsx)(n.p,{children:"F\xfchren Sie Coremark nun \xfcber QEMU aus:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"$ ruyi-qemu coremark.exe\n2K performance run parameters for coremark.\nCoreMark Size    : 666\nTotal ticks      : 19567\nTotal time (secs): 19.567000\nIterations/Sec   : 10221.290949\nIterations       : 200000\nCompiler version : GCCClang 17.0.5\nCompiler flags   : -O2   -lrt\nMemory location  : Please put data memory location here\n                        (e.g. code in flash, data on heap etc)\nseedcrc          : 0xe9f5\n[0]crclist       : 0xe714\n[0]crcmatrix     : 0x1fd7\n[0]crcstate      : 0x8e3a\n[0]crcfinal      : 0x4983\nCorrect operation validated. See readme.txt for run and reporting rules.\nCoreMark 1.0 : 10221.290949 / GCCClang 17.0.5 -O2   -lrt / Heap\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>c,x:()=>t});var a=r(6540);const s={},i=a.createContext(s);function c(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);