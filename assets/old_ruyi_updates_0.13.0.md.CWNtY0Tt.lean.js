import{_ as i,c as a,a2 as n,o as h}from"./chunks/framework.DxHMuem5.js";const c=JSON.parse('{"title":"v0.13.0 版本新增特性","description":"","frontmatter":{},"headers":[],"relativePath":"old/ruyi/updates/0.13.0.md","filePath":"old/ruyi/updates/0.13.0.md","lastUpdated":1735866788000}'),t={name:"old/ruyi/updates/0.13.0.md"};function l(p,s,e,k,F,r){return h(),a("div",null,s[0]||(s[0]=[n(`<h1 id="v0-13-0-版本新增特性" tabindex="-1">v0.13.0 版本新增特性 <a class="header-anchor" href="#v0-13-0-版本新增特性" aria-label="Permalink to &quot;v0.13.0 版本新增特性&quot;">​</a></h1><ul><li>修复 0.12.0 遗留的版本匹配问题。</li><li>修复 prerelease 版本识别。</li></ul><h2 id="安装-v0-13-0" tabindex="-1">安装 v0.13.0 <a class="header-anchor" href="#安装-v0-13-0" aria-label="Permalink to &quot;安装 v0.13.0&quot;">​</a></h2><p>在 amd64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.13.0/ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.amd64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 riscv64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.13.0/ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.riscv64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>在 arm64 架构环境安装：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://mirror.iscas.ac.cn/ruyisdk/ruyi/releases/0.13.0/ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> chmod</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> +x</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cp</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ./ruyi.arm64</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/ruyi</span></span></code></pre></div><p>检查安装版本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Ruyi</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0.13.0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Running</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> on</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> linux/x86_64.</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Copyright</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (C) 2023 Institute of Software, Chinese Academy of Sciences (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ISCAS</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">All</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> rights</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> reserved.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Apache-2.0</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">https://www.apache.org/licenses/LICENSE-2.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">0&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">This</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> version</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ruyi</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> makes</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> of</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> code</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> licensed</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> under</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> the</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Mozilla</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Public</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">License</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (https://mozilla.org/MPL/2.0/). You can get the respective</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">project</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&#39;s sources from the project&#39;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> official</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> website:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> certifi: https://github.com/certifi/python-certifi</span></span></code></pre></div>`,11)]))}const g=i(t,[["render",l]]);export{c as __pageData,g as default};
