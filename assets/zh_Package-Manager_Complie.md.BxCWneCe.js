import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.XizSYddW.js";const u=JSON.parse('{"title":"编译工具链安装","description":"","frontmatter":{},"headers":[],"relativePath":"zh/Package-Manager/Complie.md","filePath":"zh/Package-Manager/Complie.md","lastUpdated":1719825136000}'),e={name:"zh/Package-Manager/Complie.md"},l=n(`<h1 id="编译工具链安装" tabindex="-1">编译工具链安装 <a class="header-anchor" href="#编译工具链安装" aria-label="Permalink to &quot;编译工具链安装&quot;">​</a></h1><p>通过前置步骤，你已经可以正确使用 ruyi 包管理器，在这个模块中我们更进一步的安装 RISC-V 上相关的编译器。</p><p>目前 ruyi 包管理器提供了不同组织所发布的 GNU 以及 LLVM 编译工具链，你可以通过 <code>ruyi list</code> 轻松的查看。</p><p>若要安装特定的安装包，请使用 <code>ruyi install</code> 或 <code>ruyi i</code> 完成安装。</p><h3 id="其他说明" tabindex="-1">其他说明 <a class="header-anchor" href="#其他说明" aria-label="Permalink to &quot;其他说明&quot;">​</a></h3><p>编译工具链的版本选择参考<a href="./../Other/GNU-type.html">RuyiSDK 编译工具</a>。</p><h2 id="编译" tabindex="-1">编译 <a class="header-anchor" href="#编译" aria-label="Permalink to &quot;编译&quot;">​</a></h2><h3 id="代码准备" tabindex="-1">代码准备 <a class="header-anchor" href="#代码准备" aria-label="Permalink to &quot;代码准备&quot;">​</a></h3><p>当正确获取了编译工具链后，可以通过 <code>git</code> 等任何方式获取源码到本地，同时，RuyiSDK 为新用户提供了一些代码示例，方便用户可以直接从 Ruyi Repo 的软件源中获取源码，可以通过如下指令实现：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 从软件源下载并解压指定的源码包</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> extract</span></span></code></pre></div><p>获取源码后，RuyiSDK 包管理器提供了虚拟环境技术，用户可以在系统中创建独立的环境，以确保对于不同版本编译工具链以及库文件进行环境隔离。 保证了用户在同以开发环境中能够安装使用不同的编译工具链版本，提供更好的环境隔离，保证开发过程的高效性。</p><p>我们建议在虚拟环境中进行编译操作，步骤如下：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 开始编译</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 为隔离化编译创建虚拟环境，使用 ruyi venv -h 查看如何使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 举例：创建一个叫 venv1 的虚拟环境，并指定编译工具链为 gnu-upstream，sysroot 为 generic 类型，使用 qemu-user-riscv-upstream 模拟器</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> venv</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> gnu-upstream</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -e</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> qemu-user-riscv-upstream</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   generic</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  venv1</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 激活虚拟环境</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  venv1/bin/ruyi-activate</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 编译需要编译的程序源代码</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此部分没有统一规范，按照待编译程序自身的编译说明执行，这里以 coremark 为例：</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（1）设置 coremark 源码中的编译配置信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sed</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;s/\\bgcc\\b/riscv64-unknown-linux-gnu-gcc/g&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  linux64/core_portme.mak</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（2）执行交叉编译和构建，得到可执行程序 coremark.exe</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">make</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PORT_DIR=linux64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> link</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#（3）查看 rv64 可执行程序文件属性信息，初步检验可执行程序是否 RISC-V 架构</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">file</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> coremark.exe</span></span></code></pre></div><h3 id="模拟运行" tabindex="-1">模拟运行 <a class="header-anchor" href="#模拟运行" aria-label="Permalink to &quot;模拟运行&quot;">​</a></h3><p>在进入该步骤前，请确保已经安装了编译所需的编译工具链、模拟器，并在虚拟环境中配置了 qemu 模拟器。</p><p>为确保 RISC-V 目标可执行程序的正确性，通过模拟器工具（如 qemu）模拟运行环境：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  qemu user 模式下执行 rv64 coremark 可执行程序</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-qemu</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">   coremark.exe</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在编译和运行结束后，退出虚拟环境</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ruyi-deactivate</span></span></code></pre></div><h3 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h3><blockquote><p>TODO</p></blockquote>`,19),p=[l];function t(h,k,r,c,d,o){return i(),a("div",null,p)}const F=s(e,[["render",t]]);export{u as __pageData,F as default};
