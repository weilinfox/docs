"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[3789],{4640:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=i(4848),r=i(8453);const o={title:"Release notes for RuyiSDK 0.14",authors:["white"]},s="Release notes for RuyiSDK 0.14",a={permalink:"/docs/en/blog/2024/07/09/ruyi-0.14",source:"@site/i18n/en/docusaurus-plugin-content-blog/2024-07-09-ruyi-0.14.md",title:"Release notes for RuyiSDK 0.14",description:"RuyiSDK 0.14 is now released. The corresponding package manager version is also 0.14.",date:"2024-07-09T00:00:00.000Z",tags:[],readingTime:1.635,hasTruncateMarker:!1,authors:[{name:"xen0n",title:"ruyi \u5305\u7ba1\u7406\u5668\u8d1f\u8d23\u4eba",url:"https://github.com/xen0n",imageURL:"https://avatars.githubusercontent.com/u/1175567?v=4",key:"white"}],frontMatter:{title:"Release notes for RuyiSDK 0.14",authors:["white"]},unlisted:!1,prevItem:{title:"Release notes for RuyiSDK 0.15",permalink:"/docs/en/blog/2024/07/23/ruyi-0.15"},nextItem:{title:"Early Access: Using Box64 to Run WPS Office on RISC-V Systems",permalink:"/docs/en/blog/2024/07/08/box64-wps-office-poc"}},l={authorsImageUrls:[void 0]},c=[{value:"RuyiSDK Package Manager",id:"ruyisdk-package-manager",level:2},{value:"RuyiSDK Software Repository",id:"ruyisdk-software-repository",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"RuyiSDK 0.14 is now released. The corresponding package manager version is also 0.14.\nYou can download the RuyiSDK package manager from one of the following locations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/ruyisdk/ruyi/releases/tag/0.14.0",children:"https://github.com/ruyisdk/ruyi/releases/tag/0.14.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.14.0/",children:"https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.14.0/"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"This update mainly consists of the following changes. Happy hacking!"}),"\n",(0,t.jsx)(n.h2,{id:"ruyisdk-package-manager",children:"RuyiSDK Package Manager"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["An plugin architecture is officially introduced into ",(0,t.jsx)(n.code,{children:"ruyi"}),": profile-related\nhandling for ",(0,t.jsx)(n.code,{children:"ruyi"})," virtual environments are now entirely taken care of by\nplugins."]}),"\n",(0,t.jsxs)(n.li,{children:["Unpacking of Debian package archives -- ",(0,t.jsx)(n.code,{children:"*.deb"})," files is now supported."]}),"\n",(0,t.jsxs)(n.li,{children:['Improved handling of "pre-release versions" again: previously ',(0,t.jsx)(n.code,{children:"ruyi"})," will\nmistreat versions that contain non-digit character(s) in their suffixes.\nThe bug has not had a chance to trigger with the current content of RuyiSDK\nrepository though."]}),"\n",(0,t.jsxs)(n.li,{children:["Fixed ",(0,t.jsx)(n.code,{children:"pygit2"})," build failure on riscv64 Python 3.12: previously one would\nhave to manually intervene after ",(0,t.jsx)(n.code,{children:"pygit2"})," started to build, but before it\ntried to invoke ",(0,t.jsx)(n.code,{children:"setup.py"})," inside its virtual environment, by installing\n",(0,t.jsx)(n.code,{children:"setuptools"})," inside the venv -- the package is no longer automatically\ninstalled in venvs from Python 3.12 on."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"ruyisdk-software-repository",children:"RuyiSDK Software Repository"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The architecture simulator Box64 built from upstream sources is added:\n",(0,t.jsx)(n.code,{children:"emulator/box64-upstream"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["The office suite ",(0,t.jsx)(n.code,{children:"extra/wps-office"})," is added.\nAttention: due to its commercial nature, you will have to accept an EULA\non the first use of the software."]}),"\n",(0,t.jsxs)(n.li,{children:["You can now run WPS Office on your RISC-V desktop with the help of Box64.\nPlease follow the guide available via ",(0,t.jsx)(n.code,{children:"ruyi news"})," for trying out."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Please run ",(0,t.jsx)(n.code,{children:"ruyi update"})," to pull in the update after upgrading the RuyiSDK\npackage manager."]}),"\n",(0,t.jsx)(n.p,{children:"To support devices that require manual intervention during provisioning, and\nwhose images have to be downloaded manually, the RuyiSDK Device Provisioner is\nnow being refactored into a plugin-based architecture. However in this\ndevelopment cycle we had to prioritize the Box64 & WPS Office PoC work;\nwe still expect to finish the device provisioner refactoring in a future\nrelease. Older versions of the device provisioner will\nstop working at that time; please upgrade before you test."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>a});var t=i(6540);const r={},o=t.createContext(r);function s(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);