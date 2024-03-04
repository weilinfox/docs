import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DRfcu8ax.js";const C=JSON.parse('{"title":"使用平头哥工具链配置荔枝派 4A 编译环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/environments/xthead-sipeed-lpi4a/index.md","filePath":"zh/ruyi/environments/xthead-sipeed-lpi4a/index.md","lastUpdated":1709532928000}'),h={name:"zh/ruyi/environments/xthead-sipeed-lpi4a/index.md"},l=n(`<h1 id="使用平头哥工具链配置荔枝派-4a-编译环境" tabindex="-1">使用平头哥工具链配置荔枝派 4A 编译环境 <a class="header-anchor" href="#使用平头哥工具链配置荔枝派-4a-编译环境" aria-label="Permalink to &quot;使用平头哥工具链配置荔枝派 4A 编译环境&quot;">​</a></h1><p>从 <code>list profiles</code> 的输出可以看到，预置的 sipeed-lpi4a 配置需要支持 xthead 特性的工具链包。 若指定不支持该特性的工具链建立虚拟环境将会报错：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fatal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> error:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> does</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> support</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> all</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> necessary</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> features</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profile</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">needed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> profile:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   xthead</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">provided</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (none)</span></span></code></pre></div><p>从 <code>ruyi list -v</code> 中可以看到 gnu-plct-xthead 工具链是支持该特性的：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -v</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">## toolchain/gnu-plct-xthead 0.20231212.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">### Toolchain metadata</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Target: riscv64-plctxthead-linux-gnu</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Flavors: [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xthead&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Components:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> binutils</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.35</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gcc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.2</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gdb</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> glibc</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.33</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    -</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux-headers</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6.4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">...</span></span></code></pre></div><p>平头哥工具链软件包名为 gnu-plct-xthead ， v0.2 最新版本 x86-64 架构二进制为 gnu-plct-xthead-20231212 ， riscv64 架构二进制为 gnu-plct-xthead-20231118 ：</p><p>在 x86-64 环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-xthead-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/dist/RuyiSDK-20231212-T-Head-Sources-riscv64-plctxthead-linux-gnu.tar.xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/myon/.cache/ruyi/distfiles/RuyiSDK-20231212-T-Head-Sources-riscv64-plctxthead-linux-gnu.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Received</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Xferd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Average</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Speed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     Time</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 Dload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Upload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Total</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   Spent</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    Left</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Speed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  273</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  273</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  9864</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">k</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:28</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:28</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --:--:--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10.9</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracting</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RuyiSDK-20231212-T-Head-Sources-riscv64-plctxthead-linux-gnu.tar.xz</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead-0.20231212.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-plct-xthead-0.20231212.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> installed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /home/myon/.local/share/ruyi/binaries/x86_64/gnu-plct-xthead-0.20231212.0</span></span></code></pre></div><p>在 riscv64 环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-xthead-20231118</span></span></code></pre></div><p>由预置的 sipeed-lpi4a 配置在 <code>./sipeed-venv</code> 建立编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> slug:gnu-plct-xthead-20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-lpi4a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./sipeed-venv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> now</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> created.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> may</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> it</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sourcing</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> appropriate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> activation</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> script</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> deactivate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> by</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> invoking</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-deactivate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fresh</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sysroot/prefix</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> also</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> provisioned</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">It</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> available</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> at</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> following</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> path:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /home/myon/ruyisdk/ruyi/sipeed-venv/sysroot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> also</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> comes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ready-made</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CMake</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> toolchain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Meson</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cross</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> file.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> environment</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> for</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> those</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">comments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> files</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> contain</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> usage</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> instructions.</span></span></code></pre></div><p>查看可用的工具链二进制：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./sipeed-venv/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-addr2line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plctxthead-linux-gnu-gcc-nm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-ldd</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gcc-ranlib</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plctxthead-linux-gnu-lto-dump</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gcov</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">           riscv64-plctxthead-linux-gnu-nm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-gcov-dump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plctxthead-linux-gnu-objcopy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-cc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plctxthead-linux-gnu-gcov-tool</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">      riscv64-plctxthead-linux-gnu-objdump</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-c++filt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plctxthead-linux-gnu-gdb</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            riscv64-plctxthead-linux-gnu-ranlib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-cpp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-gdb-add-index</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plctxthead-linux-gnu-readelf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-elfedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plctxthead-linux-gnu-gfortran</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">       riscv64-plctxthead-linux-gnu-size</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-gprof</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">          riscv64-plctxthead-linux-gnu-strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plctxthead-linux-gnu-ld</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">             riscv64-plctxthead-linux-gnu-strip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plctxthead-linux-gnu-gcc-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">     riscv64-plctxthead-linux-gnu-ld.bfd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         ruyi-activate</span></span></code></pre></div><p>进入编译环境并编译一个简单的 C 程序：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">cat</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> EOF</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">int main()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    return 0;</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">EOF</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">riscv64-plctxthead-linux-gnu-gcc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test.c</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> a.out</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">a.out:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ELF</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">-bit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> LSB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executable,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> UCB</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RISC-V,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RVC,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> double-float</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ABI,</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (SYSV), dynamically linked, interpreter /lib/ld-linux-riscv64xthead-lp64d.so.1, BuildID[sha1]=a6c6dcc8a7565fc17427d8ece055874c9bbf6a7a, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> GNU/Linux 4.15.0, with debug_info, not stripped</span></span></code></pre></div><p>成功编译并生成 RISC-V 架构的二进制。</p><p>退出编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sipeed-venv»</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div><p>注意： 该编译环境构建的二进制，当前并不能在 RevyOS 运行，参见 issue <a href="https://github.com/ruyisdk/ruyi/issues/22" target="_blank" rel="noreferrer">xthead 工具链构建产物无法在 RevyOS 运行</a></p>`,20),p=[l];function t(k,F,e,d,r,g){return a(),i("div",null,p)}const c=s(h,[["render",t]]);export{C as __pageData,c as default};