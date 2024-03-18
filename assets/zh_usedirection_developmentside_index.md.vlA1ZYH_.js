import{_ as s,c as i,o as a,a4 as n}from"./chunks/framework.DkV6eWGR.js";const y=JSON.parse('{"title":"准备RISC-V开发环境","description":"","frontmatter":{},"headers":[],"relativePath":"zh/usedirection/developmentside/index.md","filePath":"zh/usedirection/developmentside/index.md","lastUpdated":1710485296000}'),e={name:"zh/usedirection/developmentside/index.md"},l=n(`<h1 id="准备risc-v开发环境" tabindex="-1">准备RISC-V开发环境 <a class="header-anchor" href="#准备risc-v开发环境" aria-label="Permalink to &quot;准备RISC-V开发环境&quot;">​</a></h1><h2 id="安装-ruyi-包管理工具" tabindex="-1">安装 ruyi 包管理工具 <a class="header-anchor" href="#安装-ruyi-包管理工具" aria-label="Permalink to &quot;安装 ruyi 包管理工具&quot;">​</a></h2><p>RuyiSDK包管理工具目前提供了Linux系统 amd64、arm64、riscv64 三种架构平台下的安装程序，可以按需在<a href="https://github.com/RuyiSDK/ruyi/releases/" target="_blank" rel="noreferrer">ruyi GitHub Releases</a> 或 <a href="https://mirror.iscas.ac.cn/RuyiSDK/ruyi/releases/" target="_blank" rel="noreferrer">ISCAS 镜像源</a>下载体验。</p><p>包管理工具的安装非常简单，只需下载ruyi工具预构建的二进制文件，将下载的文件去掉后缀重命名为 <code>ruyi</code>，并使其具有可执行权限，最后放入 <code>$PATH</code> 路径下就可以开始了。具体的使用可参考ruyi仓库<a href="https://github.com/RuyiSDK/ruyi" target="_blank" rel="noreferrer">文档</a>。</p><p>在安装完成后最常用的命令一般需要有：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#查看工具版本（由于ruyi滚动发版，请注意关注版本信息，建议使用最新版本）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -V</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#从配置的软件源更新本地软件包缓存（获取最新缓存才能获取软件仓库最新的软件包资源，保证ruyi list 命令返回的数据最新）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span></code></pre></div><blockquote><p>说明：由于软件包索引信息目前托管的github仓库国内访问的网络不稳定性，因此如果存在ruyi update执行报连接错误，可将仓库切换到<a href="https://mirror.iscas.ac.cn/git/RuyiSDK/packages-index.git" target="_blank" rel="noreferrer">备用仓库</a>，具体操作参考 ruyi 仓库<a href="https://github.com/RuyiSDK/ruyi" target="_blank" rel="noreferrer">文档</a>在 ruyi 包管理工具默认的配置目录 <code>~/.config/ruyi</code> 下通过 config.toml 文件配置(不同linux发行版可能不同，如果无可自己创建)。</p></blockquote><h2 id="安装编译工具链" tabindex="-1">安装编译工具链 <a class="header-anchor" href="#安装编译工具链" aria-label="Permalink to &quot;安装编译工具链&quot;">​</a></h2><p>ruyi 包管理器提供了不同组织发布的不同版本的GNU和LLVM编译工具链；可以使用 ruyi 包管理工具快速查询和安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#从本地软件包缓存中列出可用软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#下载并安装指定的软件包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 或</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span></span></code></pre></div><p>编译工具链的版本选择参考<a href="./typeselection/index.html">“编译工具链的不同扩展指令集实现与选择”</a>章节。</p><h2 id="准备代码" tabindex="-1">准备代码 <a class="header-anchor" href="#准备代码" aria-label="Permalink to &quot;准备代码&quot;">​</a></h2><p>开发者往往都有自己的开发需求，对于有开发经验或者开发目标的开发者而言，可以使用 <code>git</code> 或者任何你习惯的方式将代码下载到本地。RuyiSDK 为新人用户提供了一些代码示例，方便新手直接从Ruyi Repo 软件源下载编译。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#从软件源下载并解压指定的源码包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span></span></code></pre></div><h2 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h2><p>RuyiSDK包管理器提供了虚拟环境技术，允许用户在系统中创建独立的环境，以隔离不同版本的编译工具链及库文件等。这样可以支持同一个开发环境中同时安装不同的编译工具链版本，并且相互不冲突和影响，提供更好的环境隔离。我们建议创建虚拟环境并在虚拟环境中进行编译操作，大致操作步骤如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#前提：已经安装了所需的编译工具链</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#为隔离化编译创建虚拟环境，使用 ruyi venv -h 查看如何使用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#举例：创建一个叫venv1的虚拟环境，并指定编译工具链为gnu-upstream，sysroot为generic类型，使用qemu-user-riscv-upstream模拟器</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  venv1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#激活虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  venv1/bin/ruyi-activate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#编译需要编译的程序源代码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#此部分没有统一规范，按照待编译程序自身的编译说明执行，这里以coremark为例：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（1）设置coremark源码中的编译配置信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\bgcc\\b/riscv64-unknown-linux-gnu-gcc/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  linux64/core_portme.mak</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（2）执行交叉编译和构建，得到可执行程序coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PORT_DIR=linux64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（3）查看rv64可执行程序文件属性信息，初步检验可执行程序是否RISC-V架构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.exe</span></span></code></pre></div><h2 id="模拟运行" tabindex="-1">模拟运行 <a class="header-anchor" href="#模拟运行" aria-label="Permalink to &quot;模拟运行&quot;">​</a></h2><p>为了方便验证RISC-V目标可执行程序的正确性，一般通过模拟器工具来模拟运行环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#前提：已经提前安装了所需的编译工具链、模拟器，并在虚拟环境中配置了qemu模拟器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#qemu user模式下执行rv64 coremark可执行程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-qemu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   coremark.exe</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#在编译和运行结束后，退出虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-deactivate</span></span></code></pre></div><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><blockquote><p>TODO</p></blockquote><p>上述结合使用场景简单的介绍了 RuyiSDK 包管理器和工具的使用，ruyi 的更多命令和命令具体使用方法详见<a href="./../../ruyi/index.html">“RUYI 包管理器”</a>章节介绍。此外，目前也有一些简单的<a href="./../../usecase/index.html">使用案例</a>供参考。</p>`,23),t=[l];function p(h,r,k,c,d,o){return a(),i("div",null,t)}const g=s(e,[["render",p]]);export{y as __pageData,g as default};
