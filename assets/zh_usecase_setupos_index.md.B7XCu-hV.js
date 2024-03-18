import{_ as s,c as a,o as n,a4 as e}from"./chunks/framework.DkV6eWGR.js";const y=JSON.parse('{"title":"为RISC-V开发板安装操作系统","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usecase/setupos/index.md","filePath":"zh/usecase/setupos/index.md","lastUpdated":1710485296000}'),p={name:"zh/usecase/setupos/index.md"},i=e(`<h1 id="为risc-v开发板安装操作系统" tabindex="-1">为RISC-V开发板安装操作系统 <a class="header-anchor" href="#为risc-v开发板安装操作系统" aria-label="Permalink to &quot;为RISC-V开发板安装操作系统&quot;">​</a></h1><p>通过RuyiSDK操作系统安装器工具，为各种不同厂家、不同型号的RISC-V开发板提供镜像信息的维护与下载、开发板系统的安装引导。</p><h2 id="环境说明" tabindex="-1">环境说明 <a class="header-anchor" href="#环境说明" aria-label="Permalink to &quot;环境说明&quot;">​</a></h2><p>本操作在x86_64 PC &amp; Ubuntu 22.04(linux系统皆可)下执行；RISC-V开发板以USB连接线接入PC或者RISC-V开发板的SD卡通过读卡机接入PC。</p><h2 id="安装操作系统" tabindex="-1">安装操作系统 <a class="header-anchor" href="#安装操作系统" aria-label="Permalink to &quot;安装操作系统&quot;">​</a></h2><p>ruyi 工具提供了为 RISC-V 开发板安装操作系统的功能，为任一型号的 RISC-V 开发板安装镜像都只需要执行：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> device</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provision</span></span></code></pre></div><p>该命令将会返回工具目前所支持的RISC-V开发板，选择开发板后将返回所有支持指定开发板的操作系统：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>RuyiSDK Device Provisioning Wizard</span></span>
<span class="line"><span></span></span>
<span class="line"><span>This is a wizard intended to help you install a system on your device for your</span></span>
<span class="line"><span>development pleasure, all with ease.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>You will be asked some questions that help RuyiSDK understand your device and</span></span>
<span class="line"><span>your intended configuration, then packages will be downloaded and flashed onto</span></span>
<span class="line"><span>the device&#39;s storage, that you should somehow make available on this host</span></span>
<span class="line"><span>system beforehand.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Note that, as Ruyi does not run as root, but raw disk access is most likely</span></span>
<span class="line"><span>required to flash images, you should arrange to allow your user account sudo</span></span>
<span class="line"><span>access to necessary commands such as dd. Flashing will fail if the sudo</span></span>
<span class="line"><span>configuration does not allow so.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Continue? (y/N) y</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The following devices are currently supported by the wizard. Please pick your device:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. Allwinner Nezha D1</span></span>
<span class="line"><span>2. Canaan Kendryte K230</span></span>
<span class="line"><span>3. Milk-V Duo</span></span>
<span class="line"><span>4. Milk-V Pioneer Box</span></span>
<span class="line"><span>5. SiFive HiFive Unmatched</span></span>
<span class="line"><span>6. Sipeed Lichee RV</span></span>
<span class="line"><span>7. Sipeed LicheePi 4A</span></span>
<span class="line"><span>8. StarFive VisionFive</span></span>
<span class="line"><span>9. StarFive VisionFive2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Choice? (1-9)</span></span></code></pre></div><p>以上，以 Sipeed LicheePi 4A 为例，需要为其安装镜像，只需要输入对应的序号：7</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>Choice? (1-9) 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The device has the following variants. Please choose the one corresponding to your hardware at hand:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  1. Sipeed LicheePi 4A (8G RAM)</span></span>
<span class="line"><span>  2. Sipeed LicheePi 4A (16G RAM)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Choice? (1-2) 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>The following system configurations are supported by the device variant you have chosen. Please pick the one you want </span></span>
<span class="line"><span>to put on the device:</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  1. openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)</span></span>
<span class="line"><span>  2. openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)</span></span>
<span class="line"><span>  3. RevyOS for Sipeed LicheePi 4A (16G RAM)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Choice? (1-3) 3</span></span>
<span class="line"><span></span></span>
<span class="line"><span>We are about to download and install the following packages for your device:</span></span>
<span class="line"><span></span></span>
<span class="line"><span> * board-image/revyos-sipeed-lpi4a</span></span>
<span class="line"><span> * board-image/uboot-revyos-sipeed-lpi4a-16g</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Proceed? (y/N)</span></span></code></pre></div><p>您只需要按照引导提示一步步执行即可。</p>`,12),l=[i];function o(c,t,d,r,h,u){return n(),a("div",null,l)}const g=s(p,[["render",o]]);export{y as __pageData,g as default};
