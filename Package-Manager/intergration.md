---
sidebar_position: 4
---

# 使用集成功能

Ruyi 包管理器除了作为一个包管理器具有基本的软件包管理功能以外，还为工具链、模拟器、镜像等软件包提供了集成。

您可以：

+ 获取 RuyiSDK 提供的常用源码包
+ 在不需要了解过多细节的情况下方便地将工具链和模拟器组合，以某一 RISC-V CPU 平台为目标建立 Ruyi 虚拟环境
+ 在系统中创建独立的环境，以确保对于不同版本编译工具链以及库文件进行环境隔离，保证开发过程的高效性
+ 为某一具体型号和配置的 RISC-V SOC 开发板刷写您想要使用的系统镜像
+ 为某一 RISC-V 单片机找到经过验证支持良好的实时操作系统

## Ruyi 虚拟环境

Ruyi 包管理器工具的 ``venv`` 命令用于组合工具链、模拟器来建立虚拟环境。编译环境提供了不同开发板所需的配置，自动传入编译所需的参数。

### 虚拟环境配置

Ruyi 软件源中已经提供了一些预置的配置且无需安装，这些配置可以使用 ``ruyi list profiles`` 命令列出：

```bash
$ ruyi list profiles
generic
baremetal-rv64ilp32 (needs flavor(s): {'rv64ilp32'})
xiangshan-nanhu
sipeed-lpi4a (needs flavor(s): {'xthead'})
milkv-duo
```

一些配置需要支持特定 flavor(s) 的 Ruyi 工具链包才能使用，您可以在 ``ruyi list --verbose`` 中查看某个工具链包是否支持这种特性。或者，直接参考“工具链与预制配置组合“中的表格。

### 工具链与预置配置组合

Ruyi 包管理在建立虚拟环境之前会检查该环境是否存在冲突，但是并不保证建立成功的环境一定可用。灵活使用该功能需要您对这些工具链有一定的了解，一般情况下则可以直接参考下面的表格。

这里列出了经过测试确认可用的配置组合：

|   工具链(toolchain)   |   sysroot   |  预置配置(profile)  |  构建目标 |
| :--------------------: | :----------: | :-----------------: | :---: |
|        gnu-plct        |     自带     |       generic       | riscv64 架构的 Linux 操作系统 |
|        gnu-plct        |     自带     |      milkv-duo      | 使用 glibc 的 MilkV Duo 系列开发板镜像 |
|        gnu-plct        |     自带     |   xiangshan-nanhu   | 香山南湖 |
|      gnu-upstream      |     自带     |       generic       | riscv64 架构的 Linux 操作系统 |
|    gnu-plct-xthead    |     自带     |    sipeed-lpi4a    | Thead C910 |
| gnu-plct-rv64ilp32-elf |      无      | baremetal-rv64ilp32 | rv64ilp32 裸机 |
|     llvm-plct         |   gnu-plct   |       generic       | riscv64 架构的 Linux 操作系统 |
|     llvm-upstream     | gnu-upstream |       generic       | riscv64 架构的 Linux 操作系统 |

|   厂商发布的二进制工具链(toolchain)   |   sysroot   |  预置配置(profile)  |  构建目标 |
| :--------------------: | :----------: | :-----------------: | :---: |
| gnu-milkv-milkv-duo-elf-bin  |     无     |   generic   | Milkv Duo 系列开发板裸机（需要额外传参） |
| gnu-milkv-milkv-duo-bin      |     自带   |   generic   | 使用 glibc 的 Milkv Duo 系列开发板镜像（需要额外传参） |
| gnu-milkv-milkv-duo-musl-bin |     自带   |   generic   | 使用 musl 的 Milkv Duo 系列开发板镜像（需要额外传参） |

编译工具链的更多相关信息请参考[RuyiSDK 编译工具](../Other/GNU-type)。

### 创建虚拟环境

使用 ``venv`` 命令的具体方法可通过 ``-h`` 参数获得：

```bash
$ ruyi venv -h
```

这里给出一些实例：

```bash
# 使用 GNU 上游工具链配置 RISC-V 虚拟环境：
$ ruyi venv -t gnu-upstream generic ./generic-venv

# 使用 PLCT 工具链配置 Milkv-Duo 虚拟环境：
$ ruyi venv -t gnu-plct milkv-duo ./milkv-venv

# 使用 PLCT 工具链配置香山南湖虚拟环境：
$ ruyi venv -t gnu-plct xiangshan-nanhu ./nanhu-venv

# llvm 通常需要使用 gcc 的 sysroot：
$ ruyi venv -t llvm-upstream --sysroot-from gnu-plct generic ./llvm-venv

# 使用指定版本的平头哥工具链配置荔枝派 4A 虚拟环境：
$ ruyi venv -t "gnu-plct-xthead(==0.20231212.0)" sipeed-lpi4a ./sipeed-venv

# 使用上游 QEMU 模拟器运行交叉编译的 RISC-V 二进制
$ ruyi venv -t gnu-plct generic -e qemu-user-riscv-upstream ./qemu-venv

# 使用平头哥 QEMU 模拟器运行交叉编译的 RISC-V 二进制
$ ruyi venv -t gnu-plct-xthead sipeed-lpi4a -e qemu-user-riscv-xthead ./xthead-qemu-venv

# 多工具链示例，其中 gnu-upstream 提供了 sysroot
$ ruyi venv -t llvm-upstream -t gnu-upstream generic ./upstream-venv
```

虚拟环境是用于集成工具链、模拟器等工具的，创建编译环境之前请确保对应的 Ruyi 软件包已经安装。

### 虚拟环境集成

下面以 gnu-upstream 为例详细描述虚拟环境集成，路径、 ``PS1`` 等环境相关的信息请根据实际理解和修改。

首先安装本示例所需的软件包：

```bash
$ ruyi install gnu-upstream qemu-user-riscv-upstream
```

建立一个干净的目录用于运行用例：

```bash
$ mkdir hello-ruyi
$ cd hello-ruyi
```

获取 ruyisdk-demo 源码：

```bash
$ ruyi extract ruyisdk-demo
$ ls
README.md  rvv-autovec
```

建立虚拟环境：

```bash
$ ruyi venv -t gnu-upstream -e qemu-user-riscv-upstream generic ./myhone-venv
info: Creating a Ruyi virtual environment at myhone-venv...
info: The virtual environment is now created.

You may activate it by sourcing the appropriate activation script in the
bin directory, and deactivate by invoking `ruyi-deactivate`.

A fresh sysroot/prefix is also provisioned in the virtual environment.
It is available at the following path:

    /home/myhone/hello-ruyi/myhone-venv/sysroot

The virtual environment also comes with ready-made CMake toolchain file
and Meson cross file. Check the virtual environment root for those;
comments in the files contain usage instructions.
```

该虚拟环境集成了 gnu-upstream 工具链和 qemu-user-riscv-upstream 模拟器，使用目标 riscv64 Linux 操作系统的 generic 配置，将编译环境建立在 ``./myhome-venv`` 目录下（亦可用绝对路径）。命令的输出给出了激活编译环境的方法，退出编译环境的命令， sysroot 目录的绝对路径以及一些其他信息。

在虚拟环境目录可以看到编译环境相关的文件：

```bash
$ ls ./myhone-venv/
bin                                        ruyi-venv.toml
binfmt.conf                                sysroot
meson-cross.ini                            sysroot.riscv64-unknown-linux-gnu
meson-cross.riscv64-unknown-linux-gnu.ini  toolchain.cmake
ruyi-cache.v1.toml                         toolchain.riscv64-unknown-linux-gnu.cmake
```

其中 ``binfmt.conf`` 是可用于 systemd-binfmt 的示例配置， ``toolchain.cmake`` 和 ``meson-cross.ini`` 可用于项目的交叉编译， ``sysroot`` 为该虚拟环境使用的 sysroot， ``bin`` 目录包含了该编译环境可用的命令和脚本。

在 ``bin`` 目录下可以查看到可用的工具链二进制：

```bash
$ ls ./myhone-venv/bin/
riscv64-unknown-linux-gnu-addr2line  riscv64-unknown-linux-gnu-gcc-ranlib     riscv64-unknown-linux-gnu-nm
riscv64-unknown-linux-gnu-ar         riscv64-unknown-linux-gnu-gcov           riscv64-unknown-linux-gnu-objcopy
riscv64-unknown-linux-gnu-as         riscv64-unknown-linux-gnu-gcov-dump      riscv64-unknown-linux-gnu-objdump
riscv64-unknown-linux-gnu-c++        riscv64-unknown-linux-gnu-gcov-tool      riscv64-unknown-linux-gnu-ranlib
riscv64-unknown-linux-gnu-cc         riscv64-unknown-linux-gnu-gdb            riscv64-unknown-linux-gnu-readelf
riscv64-unknown-linux-gnu-c++filt    riscv64-unknown-linux-gnu-gdb-add-index  riscv64-unknown-linux-gnu-size
riscv64-unknown-linux-gnu-cpp        riscv64-unknown-linux-gnu-gfortran       riscv64-unknown-linux-gnu-strings
riscv64-unknown-linux-gnu-elfedit    riscv64-unknown-linux-gnu-gprof          riscv64-unknown-linux-gnu-strip
riscv64-unknown-linux-gnu-g++        riscv64-unknown-linux-gnu-ld             ruyi-activate
riscv64-unknown-linux-gnu-gcc        riscv64-unknown-linux-gnu-ld.bfd         ruyi-qemu
riscv64-unknown-linux-gnu-gcc-ar     riscv64-unknown-linux-gnu-ldd
riscv64-unknown-linux-gnu-gcc-nm     riscv64-unknown-linux-gnu-lto-dump
```

其中包含了全部的工具链命令，被重命名为 ``ruyi-qemu`` 的 QEMU 用户态模拟器，以及用于进入虚拟环境的 ``ruyi-activate`` 脚本。其中工具链命令实际上是指向 ruyi 的软链接。

``source`` ruyi-activate 脚本即可激活构建环境， ``PS1`` 将被修改：

```bash
$ source ./myhone-venv/bin/ruyi-activate
«Ruyi myhone-venv» $
```

同时 ``PATH`` 也被修改，现在可以直接调用工具链了：

```bash
«Ruyi myhone-venv» $ whereis riscv64-unknown-linux-gnu-gcc
riscv64-unknown-linux-gnu-gcc: /home/myhone/hello-ruyi/myhone-venv/bin/riscv64-unknown-linux-gnu-gcc
«Ruyi myhone-venv» $ riscv64-unknown-linux-gnu-gcc --version
riscv64-unknown-linux-gnu-gcc (RuyiSDK 20231212 Upstream-Sources) 13.2.0
Copyright (C) 2023 Free Software Foundation, Inc.
This is free software; see the source for copying conditions.  There is NO
warranty; not even for MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
```

在 Ruyi 虚拟环境下，除了会自动向工具链传入配置的架构选项外，工具链和模拟器的使用并没有太大的区别。更多内容还可以参考“使用案例”章节。

构建 ruyisdk-demo：

```bash
$ cd rvv-autovec
$ make
```

在完成虚拟环境的使用后，退出编译环境，一切都将被还原到进入以前的状态：

```bash
«Ruyi myhone-venv» $ ruyi-deactivate
$
```

## Ruyi 镜像集成

Ruyi 的镜像集成提供了开发板镜像刷写和单片机设备文档。该功能与 RuyiSDK [RISC-V 开发板与操作系统支持矩阵](https://github.com/ruyisdk/support-matrix/)项目是联动的。

该功能提供了一个向导，支持使用 ``dd`` 和 ``fastboot`` 对 RISC-V 设备进行系统镜像刷写，同时也为 RISC-V 单片机这类不能常规刷写的设备提供了指导文档。

```bash
$ ruyi device provision
```

更详细的示例还可以参考“使用案例”章节。

