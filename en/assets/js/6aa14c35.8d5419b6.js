"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[4433],{5551:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var t=i(4848),o=i(8453);const a={sidebar_position:3},s="Flashing Development Board Using dd Method (Taking MilkV Duo as an Example)",r={id:"Package-Manager/cases/case3",title:"Flashing Development Board Using dd Method (Taking MilkV Duo as an Example)",description:"Currently, the ruyi package manager provides a more convenient method for installing operating systems. The installation can be completed by following the steps and related instructions below.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Package-Manager/cases/case3.md",sourceDirName:"Package-Manager/cases",slug:"/Package-Manager/cases/case3",permalink:"/docs/en/docs/Package-Manager/cases/case3",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Building with Vendor-Provided Binary Toolchain (Using MilkV Duo as an Example)",permalink:"/docs/en/docs/Package-Manager/cases/case2"},next:{title:"Flashing the Development Board via Fastboot (Using Licheepi 4A as an Example)",permalink:"/docs/en/docs/Package-Manager/cases/case4"}},d={},l=[{value:"Environment",id:"environment",level:2},{value:"Additional Notes",id:"additional-notes",level:4},{value:"Installing the Operating System",id:"installing-the-operating-system",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"flashing-development-board-using-dd-method-taking-milkv-duo-as-an-example",children:"Flashing Development Board Using dd Method (Taking MilkV Duo as an Example)"}),"\n",(0,t.jsx)(n.p,{children:"Currently, the ruyi package manager provides a more convenient method for installing operating systems. The installation can be completed by following the steps and related instructions below."}),"\n",(0,t.jsx)(n.h2,{id:"environment",children:"Environment"}),"\n",(0,t.jsx)(n.p,{children:"This document is based on the following environment:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Hardware: x86_64 PC"}),"\n",(0,t.jsx)(n.li,{children:"Software: Ubuntu 22.04"}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,t.jsxs)(n.p,{children:["Most RISC-V development boards support booting from Micro SD cards or NVME SSDs, typically using the ",(0,t.jsx)(n.code,{children:"dd"})," tool to directly write images to the disk. The ",(0,t.jsx)(n.code,{children:"ruyi device provision"})," command supports this writing method."]}),"\n",(0,t.jsxs)(n.p,{children:["Although the Ruyi package manager is designed not to perform operations that require superuser privileges, writing to a disk using ",(0,t.jsx)(n.code,{children:"dd"})," often requires superuser privileges. Therefore, if an attempt to use the ",(0,t.jsx)(n.code,{children:"dd"})," command to flash an image as a regular user fails, the Ruyi package manager will attempt to escalate privileges using ",(0,t.jsx)(n.code,{children:"sudo"}),". At this point, the user may need to enter a password, which is directly read by ",(0,t.jsx)(n.code,{children:"sudo"})," and is transparent to the Ruyi package manager."]}),"\n",(0,t.jsx)(n.p,{children:"Disk images often occupy a large amount of disk space after unpacking. Please ensure sufficient disk space is available before using the Ruyi package manager to flash an image. Some manufacturer-provided images do not automatically expand partitions to fully utilize the entire disk after flashing, and users may need to manually expand the disk partition size."}),"\n",(0,t.jsx)(n.h2,{id:"installing-the-operating-system",children:"Installing the Operating System"}),"\n",(0,t.jsxs)(n.p,{children:["After ensuring that the ruyi package manager is installed and testing that ",(0,t.jsx)(n.code,{children:"ruyi -V"})," outputs the version information correctly, proceed with the following steps."]}),"\n",(0,t.jsx)(n.p,{children:"The ruyi package manager provides the functionality to install operating systems for RISC-V development boards. To install an image for any model of RISC-V development board, simply execute:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ ruyi device provision\n"})}),"\n",(0,t.jsx)(n.p,{children:"This command will return the list of RISC-V development boards currently supported by the tool. After selecting a development board, it will return all operating systems supported by the specified development board:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"RuyiSDK Device Provisioning Wizard\n\nThis is a wizard intended to help you install a system on your device for your\ndevelopment pleasure, all with ease.\n\nYou will be asked some questions that help RuyiSDK understand your device and\nyour intended configuration, then packages will be downloaded and flashed onto\nthe device's storage, that you should somehow make available on this host\nsystem beforehand.\n\nNote that, as Ruyi does not run as root, but raw disk access is most likely\nrequired to flash images, you should arrange to allow your user account sudo\naccess to necessary commands such as dd. Flashing will fail if the sudo\nconfiguration does not allow so.\n\nContinue? (y/N) y\n\nThe following devices are currently supported by the wizard. Please pick your device:\n\n  1. Allwinner Nezha D1\n  2. Canaan Kendryte K230\n  3. Canaan Kendryte K230D\n  4. Canaan Kendryte K510\n  5. Milk-V Duo\n  6. Milk-V Duo S\n  7. Milk-V Mars\n  8. Milk-V Mars CM\n  9. Milk-V Meles\n  10. Milk-V Pioneer Box\n  11. Milk-V Vega\n  12. Pine64 Star64\n  13. SiFive HiFive Unmatched\n  14. Sipeed Lichee Cluster 4A\n  15. Sipeed Lichee Console 4A\n  16. Sipeed LicheePi 4A\n  17. Sipeed Lichee RV\n  18. Sipeed LicheeRV Nano\n  19. Sipeed Maix-I\n  20. Sipeed Tang Mega 138K Pro\n  21. StarFive VisionFive\n  22. StarFive VisionFive2\n  23. WCH CH32V103 EVB\n  24. WCH CH32V203 EVB\n  25. WCH CH32V208 EVB\n  26. WCH CH32V303 EVB\n  27. WCH CH32V305 EVB\n  28. WCH CH32V307 EVB\n  29. WCH CH582F EVB\n  30. WCH CH592X EVB\n\nChoice? (1-30) \n"})}),"\n",(0,t.jsx)(n.p,{children:"The output should be based on the actual situation. In the example, MilkV Duo is listed as option 5."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Choice? (1-30) 5\n\nThe device has the following variants. Please choose the one corresponding to your hardware at hand:\n\n  1. Milk-V Duo (64M RAM)\n  2. Milk-V Duo (256M RAM)\n\nChoice? (1-2)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Note that MilkV Duo has two versions, using CV1800B and SG2002 SOCs respectively. The version with SG2002 is also known as Duo 256M."}),"\n",(0,t.jsx)(n.p,{children:"Here, as an example, we select the 64M RAM version, which is the version with the CV1800B SOC."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Choice? (1-2) 1\n\nThe following system configurations are supported by the device variant you have chosen. Please pick the one you want to put on the device:\n\n  1. Milk-V Duo Official Arduino SDK (64M RAM, SD card)\n  2. Milk-V Duo Official buildroot SDK (64M RAM, SD card)\n  3. Milk-V Duo Official buildroot SDK (64M RAM, Lite, SD card)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Choose according to your needs. Here, as an example, we select ",(0,t.jsx)(n.code,{children:"2"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"Choice? (1-3) 2\n\nWe are about to download and install the following packages for your device:\n\n * board-image/buildroot-sdk-milkv-duo\n\nProceed? (y/N)\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Ruyi will prompt the specific Ruyi packages under the board-image partition that will be downloaded and ask whether to proceed. Enter ",(0,t.jsx)(n.code,{children:"y"})," to continue."]}),"\n",(0,t.jsx)(n.p,{children:"After the download and unpacking are complete, it will prompt for the path to the disk:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"For initializing this target device, you should plug into this host system the\ndevice's storage (e.g. SD card or NVMe SSD), or a removable disk to be\nreformatted as a live medium, and note down the corresponding device file\npath(s), e.g. /dev/sdX, /dev/nvmeXnY for whole disks; /dev/sdXY, /dev/nvmeXnYpZ\nfor partitions. You may consult e.g. sudo blkid output for the\ninformation you will need later.\n\nPlease give the path for the target's whole disk:\n"})}),"\n",(0,t.jsx)(n.p,{children:"At this point, you can connect the disk device you wish to flash, enter the absolute path of the device, and wait for the writing to complete."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var t=i(6540);const o={},a=t.createContext(o);function s(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);