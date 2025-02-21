"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[2868],{898:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>d,metadata:()=>a,toc:()=>o});var t=i(4848),s=i(8453);const d={},r="Canaan K230D Benutzerhandbuch",a={id:"k230d/intro",title:"Canaan K230D Benutzerhandbuch",description:"Systemabbildinstallation",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/k230d/intro.md",sourceDirName:"k230d",slug:"/k230d/intro",permalink:"/docs/de/docs/k230d/intro",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"K230D",permalink:"/docs/de/docs/category/k230d"},next:{title:"\u6cd5\u5f8b\u4fe1\u606f",permalink:"/docs/de/docs/category/\u6cd5\u5f8b\u4fe1\u606f"}},l={},o=[{value:"Systemabbildinstallation",id:"systemabbildinstallation",level:2},{value:"Direkter Download und Installation",id:"direkter-download-und-installation",level:3},{value:"Quellcode-Kompilierung",id:"quellcode-kompilierung",level:3},{value:"Start",id:"start",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"canaan-k230d-benutzerhandbuch",children:"Canaan K230D Benutzerhandbuch"}),"\n",(0,t.jsx)(n.h2,{id:"systemabbildinstallation",children:"Systemabbildinstallation"}),"\n",(0,t.jsx)(n.h3,{id:"direkter-download-und-installation",children:"Direkter Download und Installation"}),"\n",(0,t.jsx)(n.p,{children:"RuyiSDK bietet derzeit zwei Abbilddateien an: LP64 und ILP32. Diese k\xf6nnen \xfcber RuyiSDK heruntergeladen und installiert werden. Die spezifischen Schritte sind wie folgt:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Stellen Sie sicher, dass Sie ",(0,t.jsx)(n.code,{children:"ruyi"})," heruntergeladen und installiert haben. Bitte lesen Sie die ",(0,t.jsx)(n.a,{href:"https://ruyisdk.org/docs/Package-Manager/installation",children:"RuyiSDK-Paketmanager-Installationsanleitung"})," (es wird empfohlen, die neueste Version herunterzuladen). Nach der Installation k\xf6nnen Sie ",(0,t.jsx)(n.code,{children:"ruyi --version"})," ausf\xfchren, um die Versionsinformationen zu \xfcberpr\xfcfen."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["F\xfchren Sie ",(0,t.jsx)(n.code,{children:"ruyi update"})," aus, um die RuyiSDK-Softwarequelle zu aktualisieren. Dieser Vorgang aktualisiert die neuesten Softwarepakete und Ressourcenindizes der Softwarequelle lokal, um sicherzustellen, dass nachfolgende Abfragen und Installationen die neuesten Informationen erhalten."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["F\xfchren Sie ",(0,t.jsx)(n.code,{children:"ruyi device provision"})," aus, um den Systemabbild-Installationsassistenten zu starten. Folgen Sie den Anweisungen, w\xe4hlen Sie das Entwicklungsboard ",(0,t.jsx)(n.code,{children:"Canaan Kendryte K230D"}),", die Spezifikationen des Entwicklungsboards, den Abbilddateityp usw. Der Assistent f\xfchrt Sie durch den Abbrennprozess des Abbilds."]}),"\n",(0,t.jsx)(n.p,{children:"Derzeit bietet RuyiSDK f\xfcr K230D RV64ILP32 (Xuantie neuer 32-Bit-Kernel + 32-Bit-rootfs) und RV64LP64 (konventionelles 64-Bit-System) an. Es wird empfohlen, das RV64ILP32-System zu installieren, um die Vorteile des neuen 32-Bit-Systems in Bezug auf den dynamischen Speicherverbrauch zu erleben."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"The following system configurations are supported by the device variant you have chosen. \nPlease pick the one you want to put on the device:\n\n  1. Canaan Kendryte K230D CanMV Linux SDK demo, RV64ILP32 ABI\n  2. Canaan Kendryte K230D CanMV Linux SDK demo, RV64LP64 ABI\n\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"quellcode-kompilierung",children:"Quellcode-Kompilierung"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Hinweis: ",(0,t.jsx)(n.code,{children:"k230d_canmv_ilp32_defconfig"})," erfordert Ubuntu 22.04 oder 24.04 und die Installation der rv64ilp32-Toolchain. Daher sollte die Quellcode-Kompilierung in einer Ubuntu 22.04- oder Ubuntu 24.04-Umgebung durchgef\xfchrt werden."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Die RuyiSDK-Adresse f\xfcr K230D lautet: ",(0,t.jsx)(n.a,{href:"https://github.com/ruyisdk/k230_linux_sdk",children:"https://github.com/ruyisdk/k230_linux_sdk"})]}),"\n",(0,t.jsxs)(n.p,{children:["Das K230D SDK bietet eine ",(0,t.jsx)(n.a,{href:"https://github.com/ruyisdk/k230_linux_sdk/blob/dev/README_zh.md",children:"Kompilierungsanleitung"})," f\xfcr das Abbild. Nach der Kompilierung befinden sich die Abbilddateien im Verzeichnis ",(0,t.jsx)(n.code,{children:"output"}),". Je nach ausgef\xfchrtem defconfig werden sie in den folgenden Pfaden gespeichert:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# 64ILP32\noutput/k230d_canmv_ilp32_defconfig/images/sysimage-sdcard.img\n\n# 64LP64\noutput/k230d_canmv_lp64_defconfig/images/sysimage-sdcard.img\n"})}),"\n",(0,t.jsx)(n.p,{children:"Nach der Kompilierung entpacken Sie die Datei und brennen sie auf eine TF-Karte. Stecken Sie die TF-Karte in das Ger\xe4t und schalten Sie das Ger\xe4t ein, um es zu verwenden."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Angenommen, /dev/sdb ist der Ger\xe4teknoten der TF-Karte, f\xfchren Sie den folgenden Befehl aus, um die TF-Karte zu brennen:\n\nsudo dd if=sysimage-sdcard.img of=/dev/sdb bs=1M oflag=sync\n"})}),"\n",(0,t.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,t.jsx)(n.p,{children:"Das System startet automatisch, wenn das Ger\xe4t eingeschaltet wird. Wenn die rote LED auf dem Entwicklungsboard leuchtet, bedeutet dies, dass das Entwicklungsboard ordnungsgem\xe4\xdf eingeschaltet ist. Das root-Konto hat standardm\xe4\xdfig kein Passwort. Zu diesem Zeitpunkt k\xf6nnen Sie die seriellen Port-Informationen \xfcberpr\xfcfen."}),"\n",(0,t.jsx)(n.p,{children:"Wenn das Entwicklungsboard mit einem Bildschirm verbunden ist, wird nach kurzer Zeit automatisch die LVGL-DEMO ausgef\xfchrt, um die Ressourcennutzung anzuzeigen. Die DEMO enth\xe4lt auch Touch-Interaktionen."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>a});var t=i(6540);const s={},d=t.createContext(s);function r(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);