---
sidebar_position: 4
---

# RuyiSDK 编译工具

### RuyiSDK 提供的编译工具链

RuyiSDK 提供了多种类型的编译工具链，适用于不同的 RISC-V 开发板和应用场景。

| 编译工具链类型             | 说明                                                          | 相关链接                                                                                                                  |
| -------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| **GNU 工具链**             |                                                               | [仓库](https://github.com/RuyiSDK/riscv-gnu-toolchain)                                                                    |
| gnu-upstream               | 标准 GNU 工具链                                               |                                                                                                                           |
| gnu-plct                   | 支持香山南湖微架构 'gnu-plct(==0.20240324.0)'                 |                                                                                                                           |
| gnu-plct-xthead            | 适用于玄铁                                                    |                                                                                                                           |
| gnu-plct-rv64ilp32-elf     | 非通用工具链，支持 rv64ilp32 的裸机工具链，目标代码格式是 elf | [仓库](https://github.com/RuyiSDK/riscv-gnu-toolchain-rv64ilp32)[文章](https://mp.weixin.qq.com/s/argIGP4_rUKDm9IRIB-YTg) |
| **LLVM 工具链**            |                                                               |                                                                                                                           |
| llvm-upstream              |                                                               |                                                                                                                           |
| **QEMU 模拟器**            |                                                               | [仓库](https://github.com/ruyisdk/qemu)                                                                                   |
| qemu-system-riscv-upstream |                                                               |                                                                                                                           |
| qemu-user-riscv-upstream   |                                                               |                                                                                                                           |
| qemu-user-riscv-xthead     |                                                               |                                                                                                                           |

### 编译工具链的多样性

如上表，目前 RuyiSDK 编译工具链由于能够实现不同扩展指令集，进而有了不同版本的情况，这也就使得编译工具链具有多样性。
原因有以下几点：

1. **处理器架构发展**：处理器架构在不断更新迭代的过程中会引进新的指令集扩展以满足不同的需求，为使得这部分新的指令集扩展能够充分运用，编译工具链也会随之进行更新，出现不同的版本。
2. **厂商定制优化**：不同的厂商会针对同一个指令集进行不同程度的定制化，进而对编译工具链进行定制化。
3. **标准和规范的演进**：扩展指令集虽被规范化，但不同版本的工具链在相同标准下也会体现出不同的性能、稳定性以及兼容性。
4. **特定应用需求**：不同的应用领域对扩展指令集有不同的需求，如嵌入式系统、机器学习、图像处理等，不同版本编译工具链会针对特定领域进行优化。

上述原因使得编译工具链出现了多样化，这样的多样化为开发者提供了更多的选择，满足更加复杂的开发场景。
