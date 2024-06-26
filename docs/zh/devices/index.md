# RuyiSDK集成的RISC-V设备

RuyiSDK对RISC-V设备的集成和支持主要包括以下几个方面：

1. 提供RISC-V 开发板适用镜像信息维护与下载、开发板系统安装引导程序，方便 RISC-V 开发者获取指定开发板可用的OS并可方便的安装OS的安装。RuyiSDK集成了多种可用的操作系统供用户选择。
2. 提供RISC-V 开发板对应的演示程序、开发资料和相关工具（含适用的编译工具链、模拟器等）的信息维护和下载，方便 RISC-V 开发者快速上手。
3. 在集成开发环境中增加RISC-V设备专有向导页面、实现开发环境和运行环境的文件传输、支持在RISC-V设备上调试应用程序等。

## 支持的RISC-V设备

目前对硬件设备的集成主要体现在包管理器（设备安装器），可以通过 `ruyi device provision`命令查询，已经集成的RISC-V设备有：

1. Allwinner Nezha D1
2. Canaan Kendryte K230
3. Milk-V Duo
4. Milk-V Duo S
5. Milk-V Mars
6. Milk-V Mars CM
7. Milk-V Meles
8. Milk-V Pioneer Box
9. Milk-V Vega
10. SiFive HiFive Unmatched
11. Sipeed Lichee RV
12. Sipeed LicheePi 4A
13. StarFive VisionFive
14. StarFive VisionFive2

## 从RuyiSDK开始使用设备

### 获取并安装OS

可以通过下载安装最新的 ruyi 包管理器工具并执行以下命令为设备安装系统：

```bash
$ ruyi device provision
```

按照引导信息一步步执行即可。
