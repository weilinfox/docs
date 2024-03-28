import{_ as t,c as e,o as i,a4 as s}from"./chunks/framework.CPs9Ukbn.js";const k=JSON.parse('{"title":"v0.7.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/updates/0.7.0.md","filePath":"zh/ruyi/updates/0.7.0.md","lastUpdated":1711628552000}'),n={name:"zh/ruyi/updates/0.7.0.md"},l=s(`<h1 id="v0-7-0-版本新增特性" tabindex="-1">v0.7.0 版本新增特性 <a class="header-anchor" href="#v0-7-0-版本新增特性" aria-label="Permalink to &quot;v0.7.0 版本新增特性&quot;">​</a></h1><ul><li>板卡镜像刷写支持增加到 13 款</li><li>修复 v0.6.0 版本 riscv64 二进制无法工作的问题</li></ul><h2 id="安装-v0-7-0" tabindex="-1">安装 v0.7.0 <a class="header-anchor" href="#安装-v0-7-0" aria-label="Permalink to &quot;安装 v0.7.0&quot;">​</a></h2><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.7.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.7.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.7.0/ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.7.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span></code></pre></div><h2 id="板卡镜像刷写" tabindex="-1">板卡镜像刷写 <a class="header-anchor" href="#板卡镜像刷写" aria-label="Permalink to &quot;板卡镜像刷写&quot;">​</a></h2><p>在 0.7.0 版本，板卡镜像刷写功能所支持的板卡增加到 13 款。</p><p>注意 Milkv-V Vega 暂时没有提供官方镜像下载，故此处只提供了文档链接而没有刷写支持。</p><p>板卡支持列表：</p><table><thead><tr><th style="text-align:center;">开发板</th><th style="text-align:center;">版本</th><th style="text-align:center;">镜像</th><th style="text-align:center;">刷写方式</th></tr></thead><tbody><tr><td style="text-align:center;">Allwinner Nezha D1</td><td style="text-align:center;">Allwinner Nezha D1 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Canaan Kendryte K230</td><td style="text-align:center;">Canaan Kendryte K230 (generic variant)</td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Debian SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Canaan Kendryte K230 Official CanMV Ubuntu SDK</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo</td><td style="text-align:center;">Milk-V Duo (64M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (64M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo (256M RAM)</td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Duo Official buildroot SDK (256M RAM, with Python)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Duo S</td><td style="text-align:center;">Milk-V Duo S (generic variant)</td><td style="text-align:center;">Milk-V Duo S Official buildroot SDK (FreeRTOS, on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Mars</td><td style="text-align:center;">Milk-V Mars (generic variant)</td><td style="text-align:center;">Milk-V Mars Official Debian Desktop SDK (on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Mars CM</td><td style="text-align:center;">Milk-V Mars CM (generic variant)</td><td style="text-align:center;">Milk-V Mars CM Official Debian Desktop SDK (on SD card)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Milk-V Vega</td><td style="text-align:center;">Milk-V Vega (generic variant)</td><td style="text-align:center;">Milk-V Vega Official Buildroot SDK (documentation-only)</td><td style="text-align:center;"></td></tr><tr><td style="text-align:center;">Milk-V Pioneer Box</td><td style="text-align:center;">Milk-V Pioneer Box (v1.3)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Milk-V Pioneer</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.2)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Milk-V Pioneer Box (v1.1)</td><td style="text-align:center;">openEuler RISC-V (base system) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Milk-V Pioneer (rootfs on NVMe)</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">SiFive HiFive Unmatched</td><td style="text-align:center;">SiFive HiFive Unmatched (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openKylin for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">OpenWrt for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">Ubuntu Server for SiFive HiFive Unmatched</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed Lichee RV</td><td style="text-align:center;">Sipeed Lichee RV (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Allwinner D1</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">Sipeed LicheePi 4A</td><td style="text-align:center;">Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (8G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;">Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">openEuler RISC-V (headless) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">RevyOS for Sipeed LicheePi 4A (16G RAM)</td><td style="text-align:center;">fastboot</td></tr><tr><td style="text-align:center;">StarFive VisionFive</td><td style="text-align:center;">StarFive VisionFive (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;">StarFive VisionFive2</td><td style="text-align:center;">StarFive VisionFive2 (generic variant)</td><td style="text-align:center;">openEuler RISC-V (base system) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr><tr><td style="text-align:center;"></td><td style="text-align:center;"></td><td style="text-align:center;">openEuler RISC-V (XFCE) for StarFive VisionFive2</td><td style="text-align:center;">dd</td></tr></tbody></table><p>刷写工具根据板卡的不同依赖 <code>dd</code> 和 <code>fastboot</code> 命令， RUYI 将自动调用 <code>sudo</code> 提权。</p><p>需要注意的是一些镜像的解包需要占用大量的磁盘空间，使用 RUYI 工具刷写镜像前请务必留足磁盘空间； 一些厂家提供的镜像在刷写后并不会自动扩展分区来充分利用整块磁盘，而需要用户自行扩展磁盘分区大小。</p>`,18),a=[l];function d(r,c,h,y,p,g){return i(),e("div",null,a)}const F=t(n,[["render",d]]);export{k as __pageData,F as default};
