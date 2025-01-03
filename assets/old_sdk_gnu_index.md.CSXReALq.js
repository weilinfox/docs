import{_ as a,c as t,a2 as r,o as c}from"./chunks/framework.DxHMuem5.js";const g=JSON.parse('{"title":"RuyiSDK GCC 工具链介绍","description":"","frontmatter":{},"headers":[],"relativePath":"old/sdk/gnu/index.md","filePath":"old/sdk/gnu/index.md","lastUpdated":1735866788000}'),i={name:"old/sdk/gnu/index.md"};function o(d,e,n,l,s,h){return c(),t("div",null,e[0]||(e[0]=[r('<h1 id="ruyisdk-gcc-工具链介绍" tabindex="-1">RuyiSDK GCC 工具链介绍 <a class="header-anchor" href="#ruyisdk-gcc-工具链介绍" aria-label="Permalink to &quot;RuyiSDK GCC 工具链介绍&quot;">​</a></h1><p>RuyiSDK GCC 工具链是专门用于 RISC-V 架构的 GNU 工具链，它包括一系列工具，如编译器、汇编器、链接器等，用于开发和构建 RISC-V 架构的软件。</p><h2 id="模块介绍" tabindex="-1">模块介绍 <a class="header-anchor" href="#模块介绍" aria-label="Permalink to &quot;模块介绍&quot;">​</a></h2><h3 id="gcc-gnu-compiler-collection" tabindex="-1">GCC（GNU Compiler Collection） <a class="header-anchor" href="#gcc-gnu-compiler-collection" aria-label="Permalink to &quot;GCC（GNU Compiler Collection）&quot;">​</a></h3><p><strong>功能：</strong> RISC-V GNU Toolchain 的核心组件之一，用于将高级编程语言（如 C、C++）的源代码翻译成 RISC-V 架构的目标代码。</p><p><strong>支持：</strong> 提供对不同 RISC-V 位长的支持，包括 RV32（32 位）和 RV64（64 位），以及不同RISC-V 指令集扩展的支持。</p><p><strong>详细使用说明参考：</strong> <a href="https://gcc.gnu.org/onlinedocs/gcc-13.2.0/gcc/" target="_blank" rel="noreferrer">https://gcc.gnu.org/onlinedocs/gcc-13.2.0/gcc/</a></p><h3 id="gnu-binutils" tabindex="-1">GNU Binutils <a class="header-anchor" href="#gnu-binutils" aria-label="Permalink to &quot;GNU Binutils&quot;">​</a></h3><p>包含工具： 汇编器（as）、链接器（ld）、目标文件工具（objdump、objcopy 等），性能分析工具（gprof）。</p><p><strong>功能：</strong> 用于处理生成 RISC-V 架构的目标文件，执行汇编和链接，反汇编等操作。</p><p><strong>详细使用说明参考：</strong> <a href="https://sourceware.org/binutils/docs-2.41/" target="_blank" rel="noreferrer">https://sourceware.org/binutils/docs-2.41/</a></p><h3 id="gdb-gnu-debugger" tabindex="-1">GDB（GNU Debugger） <a class="header-anchor" href="#gdb-gnu-debugger" aria-label="Permalink to &quot;GDB（GNU Debugger）&quot;">​</a></h3><p><strong>功能：</strong> 提供调试功能，允许开发人员在 RISC-V 目标上调试他们的程序。</p><h3 id="glibc-gnu-c-library" tabindex="-1">Glibc（GNU C Library） <a class="header-anchor" href="#glibc-gnu-c-library" aria-label="Permalink to &quot;Glibc（GNU C Library）&quot;">​</a></h3><p><strong>功能：</strong> C 语言运行时库，提供许多标准 C 库函数的实现，以支持在 RISC-V 上运行的程序。</p><h3 id="newlib" tabindex="-1">Newlib <a class="header-anchor" href="#newlib" aria-label="Permalink to &quot;Newlib&quot;">​</a></h3><p><strong>功能：</strong> 一个小型的 C 库，适用于嵌入式系统和其他资源受限的环境。对于一些嵌入式RISC-V 系统，选择使用 Newlib 而不是 Glibc 可以更高效的利用有限的系统资源。</p><h3 id="libgcc" tabindex="-1">Libgcc <a class="header-anchor" href="#libgcc" aria-label="Permalink to &quot;Libgcc&quot;">​</a></h3><p><strong>功能：</strong> 包含一些与编译**功能：**器紧密相关的支持函数，例如用于浮点数乘除法的模拟运算函数。</p><p>目前 RuyiSDK 包含三种工具链版本，分别为 GNU upstream 版本，Xuantie 版本以及RuyiSDK 版本，不同版本支持的 RISC-V 指令集有所不同。</p><p>GNU upstream 工具链适合面向最新 RISC-V 特性的开发者，Xuantie 工具链侧重于使用 Xuantie 系列 CPU 芯片的硬件，RuyiSDK 工具链侧重于提供稳定的工具链环境，尽可能的继承目前 RISC-V 的各个扩展与新特性。</p><h2 id="使用说明" tabindex="-1">使用说明 <a class="header-anchor" href="#使用说明" aria-label="Permalink to &quot;使用说明&quot;">​</a></h2><p>工具链中各个工具的使用方法请参考其使用说明文档，下面重点介绍 RISC-V 架构的一些常见用法：</p><ul><li>-march 选项可以控制工具链开启的 RISC-V 扩展，其默认参数在 64 位工具链中为 <code>rv64gc</code>, 32 位工具链中为 <code>rv32gc</code>, 若要开启其他扩展，则需利用该选项重新向工具链指定想要开启的扩展，例如打开 V 扩展可以使用-march=rv64gcv，打开 b 扩展可以使用 <code>-march=rv64gc_zba_zbb_zbc_zbs，</code> RuyiSDK 中不同扩展的工具链已经在-march 中配置了其对应参数，方便用户直接使用，用户可以根据自身需求调整-march 输入，控制不同扩展的使用。</li><li>-mabi 选项主要控制工具链中所使用的寄存器组，其默认参数在 64 位工具链中为 <code>lp64d</code>，32 位工具链中为 <code>ilp32d</code>，嵌入式设备中为 <code>lp64e</code>, <code>ilp32e</code>, 无浮点硬件中为 <code>lp64</code>, <code>ilp32</code>, 用户可以根据自身硬件和使用场景进行选择。 使用 RVV 向量扩展时，请务必同时使用 <code>-O3</code> 选项，在编译器中开启 RVV 的向量化特性，一些 RVV 使用示例请参考：<a href="https://gcc.gnu.org/git/?p=gcc.git;a=tree;f=gcc/testsuite/gcc.target/riscv/rvv" target="_blank" rel="noreferrer">https://gcc.gnu.org/git/?p=gcc.git;a=tree;f=gcc/testsuite/gcc.target/riscv/rvv</a></li></ul><p>下面我们来介绍 RVV 使用时的两个常用参数：</p><ul><li>--param=riscv-autovec-preference=用于告知编译器输入向量的长度，有已知固定向量长度的 <code>fixed-vlmax</code>输入与可伸缩向量不固定长度的 <code>scalable</code>输入，用户可以更具自己的程序进行调整，以获得更高的程序性能。</li><li>--param=riscv-autovec-lmul=用于指定一个循环迭代中处理的向量元素的数量，其输入参数可以参考 riscv-v-spec 手册，包括”dynamic,m1,m2,m4,m8”等，对于不熟悉参数的用户，建议使用 <code>dynamic</code>选项，由编译器自动配置选取合适的处理数量。</li></ul><h2 id="扩展支持" tabindex="-1">扩展支持 <a class="header-anchor" href="#扩展支持" aria-label="Permalink to &quot;扩展支持&quot;">​</a></h2><table tabindex="0"><thead><tr><th>工具链版本</th><th>扩展名称</th></tr></thead><tbody><tr><td>Upstream</td><td>i, m, a, f, d, c, v, e(注意指定对应的 eABI） <br> zicsr, zifencei, zicond, zawrs, zba, zbb, zbc, zbs <br> zfinx, zdinx, zhinx, zhinxmin(注意指定的 ABI 为 lp64 或 ilp32, 与 f/d 扩展不兼容) <br> zbkb, zbkc, zbkx, zknd, zkne, zknh, zkr, zksed, zksh, zkt <br> zihintntl, zihintpause, zicboz, zicbom, zicbop <br> zfh, zfhmin, zvfh, zvfhmin, zvbb, zvbc, zvkg, zvkned, zvknha, zvknhb, zvksed, zvksh <br> zvknc, zvksc, zvkt, zfa, zmmul, zca, zcb, zce, zcf(仅 RV32) <br> zcd, zcmp(与 zcd 不兼容), zcmt, ztso <br> svinval, svnapot, <br> xcvmac, xcvalu, <br> xtheadba, xtheadbb, xtheadbs, xtheadcmo, xtheadcondmov, xtheadfmv, <br> xtheadint, xtheadmac, xtheadmemidx, xtheadfmemidx, <br> xtheadmempair, xtheadsync, xventanacondops</td></tr><tr><td>Xuantie</td><td>对 xtheadba, xtheadbb, xtheadbs, xtheadcmo, xtheadcondmov, xtheadfmv, <br> xtheadint, xtheadmac, xtheadmemidx, <br> xtheadfmemidx, xtheadmempair, xtheadsync, xtheadvector(RVV 0.7), xventanacondops <br> 有特定优化，不支持 Zfinx, K, RVV1.0, Zc, Xcv 等系列扩展</td></tr><tr><td>RuyiSDK</td><td>额外支持 RV64-ILP32, Profiles(RV20/22), zpn, zpsfoperand, zbpbo</td></tr></tbody></table>',28)]))}const p=a(i,[["render",o]]);export{g as __pageData,p as default};
