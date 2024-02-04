import{_ as s,c as i,o as a,V as n}from"./chunks/framework.EV3G-tmK.js";const o=JSON.parse('{"title":"使用 PLCT 工具链配置 Milkv-Duo 编译环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/ruyi/environments/plct-milkv-duo/index.md","filePath":"zh/ruyi/environments/plct-milkv-duo/index.md","lastUpdated":1707030036000}'),l={name:"zh/ruyi/environments/plct-milkv-duo/index.md"},t=n(`<h1 id="使用-plct-工具链配置-milkv-duo-编译环境" tabindex="-1">使用 PLCT 工具链配置 Milkv-Duo 编译环境 <a class="header-anchor" href="#使用-plct-工具链配置-milkv-duo-编译环境" aria-label="Permalink to &quot;使用 PLCT 工具链配置 Milkv-Duo 编译环境&quot;">​</a></h1><p>PLCT 工具链软件包名为 gnu-plct ， v0.2 最新版本 x86-64 架构二进制为 gnu-plct-20231212 ， riscv64 架构二进制为 gnu-plct-20231118 ：</p><p>在 x86-64 环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi install slug:gnu-plct-20231212</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> downloading https://mirror.iscas.ac.cn/ruyisdk/dist/RuyiSDK-20231212-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz to /home/myon/.cache/ruyi/distfiles/RuyiSDK-20231212-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  %</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Total    % Received % Xferd  Average Speed   Time    Time     Time  Current</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">                                 Dload</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  Upload   Total   Spent    Left  Speed</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  232</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">100</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  232</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M    </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  10.4</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M      </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:22  </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">:00:22 --:--:-- </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">11.0</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">M</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extracting RuyiSDK-20231212-PLCT-Sources-riscv64-plct-linux-gnu.tar.xz for package gnu-plct-0.20231212.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> package gnu-plct-0.20231212.0 installed to /home/myon/.local/share/ruyi/binaries/x86_64/gnu-plct-0.20231212.0</span></span></code></pre></div><p>在 riscv64 环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi install slug:gnu-plct-20231118</span></span></code></pre></div><p>由预置的 milkv-duo 配置在 <code>./milkv-venv</code> 目录建立编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi venv -t slug:gnu-plct-20231212 milkv-duo ./milkv-venv</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Creating a Ruyi virtual environment at milkv-venv...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">info:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> The virtual environment is now created.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">You</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> may activate it by sourcing the appropriate activation script in the</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">bin</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> directory, and deactivate by invoking \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-deactivate</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">A</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fresh sysroot/prefix is also provisioned in the virtual environment.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">It</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is available at the following path:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /home/myon/ruyisdk/ruyi/milkv-venv/sysroot</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">The</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> virtual environment also comes with ready-made CMake toolchain file</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">and</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Meson cross file. Check the virtual environment root for those</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">comments</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in the files contain usage instructions.</span></span></code></pre></div><p>查看可用的工具链二进制：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ls ./venv/bin/</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-addr2line</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  riscv64-plct-linux-gnu-gcc            riscv64-plct-linux-gnu-gfortran  riscv64-plct-linux-gnu-ranlib</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-ar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcc-ar         riscv64-plct-linux-gnu-gprof     riscv64-plct-linux-gnu-readelf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-as</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcc-nm         riscv64-plct-linux-gnu-ld        riscv64-plct-linux-gnu-size</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-c++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gcc-ranlib     riscv64-plct-linux-gnu-ld.bfd    riscv64-plct-linux-gnu-strings</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-cc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">         riscv64-plct-linux-gnu-gcov           riscv64-plct-linux-gnu-ldd       riscv64-plct-linux-gnu-strip</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-c++filt</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plct-linux-gnu-gcov-dump      riscv64-plct-linux-gnu-lto-dump  ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-cpp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gcov-tool      riscv64-plct-linux-gnu-nm</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-elfedit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    riscv64-plct-linux-gnu-gdb            riscv64-plct-linux-gnu-objcopy</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-g++</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        riscv64-plct-linux-gnu-gdb-add-index  riscv64-plct-linux-gnu-objdump</span></span></code></pre></div><p>除了 <code>ruyi-activate</code> 为激活编译环境用的脚本，其他均为工具链二进制。</p><p>激活编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> . milkv-venv/bin/ruyi-activate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv» </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$</span></span></code></pre></div><p>此时应当可以正常调用工具链</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> milkv-venv» </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">riscv64-plct-linux-gnu-gcc --version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">riscv64-plct-linux-gnu-gcc</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (RuyiSDK </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20231212</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PLCT-Sources</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 13.1.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Free Software Foundation, Inc.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> is free software</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">see</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the source for copying conditions.  There is NO</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">warranty</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">not</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.</span></span></code></pre></div><p>退出编译环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">«Ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv» </span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">$ </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ruyi-deactivate</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span></span></code></pre></div>`,17),p=[t];function h(e,k,r,c,F,d){return a(),i("div",null,p)}const u=s(l,[["render",h]]);export{o as __pageData,u as default};