"use strict";(self.webpackChunkruyisdk=self.webpackChunkruyisdk||[]).push([[4865],{1067:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var t=i(4848),r=i(8453);const s={},o="Milkv Duo: Compiling, Running, and Debugging Using the riscv64-unknown-linux-musl-bin Toolchain",l={id:"IDE/cases/milkv-duo-ide",title:"Milkv Duo: Compiling, Running, and Debugging Using the riscv64-unknown-linux-musl-bin Toolchain",description:"Setting Up the Compilation Environment",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/IDE/cases/milkv-duo-ide.md",sourceDirName:"IDE/cases",slug:"/IDE/cases/milkv-duo-ide",permalink:"/docs/en/docs/IDE/cases/milkv-duo-ide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u4f7f\u7528\u6848\u4f8b",permalink:"/docs/en/docs/category/\u4f7f\u7528\u6848\u4f8b-1"},next:{title:"\u5176\u4ed6\u8bf4\u660e",permalink:"/docs/en/docs/category/\u5176\u4ed6\u8bf4\u660e"}},a={},d=[{value:"Setting Up the Compilation Environment",id:"setting-up-the-compilation-environment",level:2},{value:"Developing in the IDE",id:"developing-in-the-ide",level:2},{value:"Preparing the Source Code",id:"preparing-the-source-code",level:3},{value:"Importing and Setting Project Properties",id:"importing-and-setting-project-properties",level:3},{value:"Executing the Build",id:"executing-the-build",level:3},{value:"Transferring the Target Program to the Target Device",id:"transferring-the-target-program-to-the-target-device",level:3},{value:"Running the Target Program and Displaying Execution Results",id:"running-the-target-program-and-displaying-execution-results",level:3},{value:"SSH Terminal",id:"ssh-terminal",level:4},{value:"C/C++ Remote Application",id:"cc-remote-application",level:4},{value:"Debugging",id:"debugging",level:3},{value:"Preparing the Debugging Example",id:"preparing-the-debugging-example",level:4},{value:"Preparing gdbserver",id:"preparing-gdbserver",level:4},{value:"Debugging in Terminal",id:"debugging-in-terminal",level:4},{value:"C/C++ Remote Application",id:"cc-remote-application-1",level:4},{value:"Additional Notes",id:"additional-notes",level:2},{value:"SSH Key Configuration",id:"ssh-key-configuration",level:3}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"milkv-duo-compiling-running-and-debugging-using-the-riscv64-unknown-linux-musl-bin-toolchain",children:"Milkv Duo: Compiling, Running, and Debugging Using the riscv64-unknown-linux-musl-bin Toolchain"}),"\n",(0,t.jsx)(n.h2,{id:"setting-up-the-compilation-environment",children:"Setting Up the Compilation Environment"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Install the RuyiSDK package manager ",(0,t.jsx)(n.a,{href:"/docs/Package-Manager/installation",children:"Reference"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Install the gnu-milkv-milkv-duo-musl compiler"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# View resources in the software repository\nruyi list\n\n# Install the specified toolchain\nruyi install gnu-milkv-milkv-duo-bin\n\n# From the returned information, you can view the installation path, e.g., ~/.local/share/ruyi/binaries/x86_64/gnu-milkv-milkv-duo-bin-0.20240731.0+git.67688c7335e7\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Create and use the Duo compilation environment"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# View ruyi pre-configured environments\n# ruyi list profiles\n\n# Create a virtual environment: toolchain is gnu-milkv-milkv-duo-musl-bin\nruyi venv -t gnu-milkv-milkv-duo-musl-bin milkv-duo ./venv-milkvduo\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"developing-in-the-ide",children:"Developing in the IDE"}),"\n",(0,t.jsx)(n.h3,{id:"preparing-the-source-code",children:"Preparing the Source Code"}),"\n",(0,t.jsx)(n.p,{children:"This article uses the application example duo-examples for the milkv-duo development board. Use either of the following methods to obtain the source code:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Method 1: git clone\ngit clone https://github.com/milkv-duo/duo-examples.git\n\n# Method 2: ruyi extract command\nruyi extract milkv-duo-examples\n"})}),"\n",(0,t.jsx)(n.h3,{id:"importing-and-setting-project-properties",children:"Importing and Setting Project Properties"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"File > New > Project"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735624096763",src:i(608).A+"",width:"845",height:"381"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Select C/C++ > Makefile Project with Existing Code > Next"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735623999135",src:i(5828).A+"",width:"615",height:"621"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Import the prepared source code:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Click Browse > Target source code path"}),"\n",(0,t.jsx)(n.li,{children:"Toolchain for Indexer Settings: Select RISC-V Cross GCC"}),"\n",(0,t.jsx)(n.li,{children:"Finish"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735624436834",src:i(8355).A+"",width:"615",height:"651"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Project hello-world > Right-click > Properties to configure related properties"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Configure the toolchain path for the project"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735624925007",src:i(810).A+"",width:"1285",height:"865"})}),"\n",(0,t.jsx)(n.p,{children:"Select the path where the compiler was installed by ruyi install (default is under ~/.local/share/ruyi/binaries/x86_64/), or the bin directory under the created virtual environment."}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Set compilation properties"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735625245878",src:i(7010).A+"",width:"1301",height:"869"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Edit the Makefile"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The project's built-in Makefile relies on the envsetup.sh script to pre-set environment variables. In the ",(0,t.jsx)(n.a,{href:"https://github.com/milkv-duo/duo-examples/blob/main/README-zh.md",children:"vendor documentation practice"}),", we learned that the compiler prefix, compilation options, and linking parameters were pre-set. For convenience, these are written directly into the Makefile. Note that the TOOLCHAIN_PREFIX path needs to be modified as needed."]}),"\n",(0,t.jsxs)(n.li,{children:["Compilation parameters:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-mcpu=c906fdv"}),": Specifies the target CPU model for cross-compilation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-march=rv64imafdcv0p7xthead"}),": Specifies the target architecture for cross-compilation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"-g"}),": Generates debugging information"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:'To automate copying the target program to the target device, the Makefile also includes an upload target (this assumes SSH authentication between the PC and the target device; refer to the "SSH Key Configuration" section at the end). Additionally, the relevant directory must be pre-created on the target device (the storage path is customizable, but ensure the scp command path matches the actual environment).'}),"\n",(0,t.jsx)(n.li,{children:"You can further modify the Makefile below; this is just a reference."}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-makefile",children:"# Eclipse toolchain settings\n# TOOLCHAIN_PREFIX := ~/milkv/duo/duo-examples/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-\nTOOLCHAIN_PREFIX := ~/.local/share/ruyi/binaries/x86_64/gnu-milkv-milkv-duo-musl-bin-0.20240731.0+git.67688c7335e7/bin/riscv64-unknown-linux-musl-\n\n# Compilation options -O3\n# CFLAGS := -mcpu=c906fdv -march=rv64imafdcv0p7xthead -mcmodel=medany -mabi=lp64d -DNDEBUG -I/home/phebe/milkv/duo/duo-examples/include/system\n# LDFLAGS := -D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64 -L/home/phebe/milkv/duo/duo-examples/libs/system/musl_riscv64\nCFLAGS := -mcpu=c906fdv -march=rv64imafdcv0p7xthead -g  # -mcpu=c906fdv -march=rv64imafdcv0p7xthead: One of the two must be set\nLDFLAGS :=\n\nTARGET=helloworld\n\nifeq (,$(TOOLCHAIN_PREFIX))\n$(error TOOLCHAIN_PREFIX is not set)\nendif\n\nifeq (,$(CFLAGS))\n$(error CFLAGS is not set)\nendif\n\nCC = $(TOOLCHAIN_PREFIX)gcc\n\nSOURCE = $(wildcard *.c)\nOBJS = $(patsubst %.c,%.o,$(SOURCE))\n\n# Default target\nall: $(TARGET)\n\n$(TARGET): $(OBJS)\n\t$(CC) $(CFLAGS) -o $@ $(OBJS) $(LDFLAGS)\n\n%.o: %.c\n\t$(CC) $(CFLAGS) -o $@ -c $<\n\n# Upload target\nupload: $(TARGET)\n\tscp $(TARGET) root@192.168.42.1:/root/target/$(TARGET)\n\n.PHONY: clean upload\nclean:\n\trm -f *.o $(TARGET)\n\n# Make 'all' target depend on 'upload' to automatically upload after building\nall: upload\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Open a Terminal window in the IDE, create an SSH Terminal to log into the target device and perform related operations. If needed, you can also create a Local Terminal window for combined use. This depends on personal preference. Specific steps:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Window > Show View > Terminal"}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Terminal: Open a new Terminal View/Open a Terminal > SSH Terminal > Enter Host, User, Password (milkvduo's root password is: milkv) as shown below:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735626678903",src:i(9578).A+"",width:"545",height:"537"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735626740680",src:i(8334).A+"",width:"937",height:"333"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735626766840",src:i(4976).A+"",width:"355",height:"555"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1735626979037",src:i(3220).A+"",width:"933",height:"295"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Pre-create the target file transfer path to match the scp command path in the Makefile. (After building, the target program will appear in the directory.)"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736776549440",src:i(802).A+"",width:"681",height:"303"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"executing-the-build",children:"Executing the Build"}),"\n",(0,t.jsx)(n.p,{children:'After preparing the above configurations and modifications, right-click the project and click "Build Project". If the build is successful:'}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The Console window shows no errors."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736776684233",src:i(6016).A+"",width:"973",height:"396"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The SSH Terminal window shows the successfully transferred helloworld target program."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736776707622",src:i(3628).A+"",width:"691",height:"298"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"transferring-the-target-program-to-the-target-device",children:"Transferring the Target Program to the Target Device"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:'If the upload target is defined in the Makefile, the target program transfer is already completed during the "Build Project" step.'}),"\n",(0,t.jsxs)(n.li,{children:["If the upload target is not defined in the Makefile, you can manually execute ",(0,t.jsx)(n.code,{children:"scp helloworld root@192.168.42.1:/root/target/"})," to transfer the target program."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"running-the-target-program-and-displaying-execution-results",children:"Running the Target Program and Displaying Execution Results"}),"\n",(0,t.jsx)(n.p,{children:"There are multiple ways to run the target program in the IDE. Choose based on your habits and needs. Here are some methods I have tried; more methods are welcome."}),"\n",(0,t.jsx)(n.h4,{id:"ssh-terminal",children:"SSH Terminal"}),"\n",(0,t.jsx)(n.p,{children:"You can view and run the helloworld target program in the SSH Terminal window:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736777304796",src:i(2840).A+"",width:"641",height:"316"})}),"\n",(0,t.jsx)(n.h4,{id:"cc-remote-application",children:"C/C++ Remote Application"}),"\n",(0,t.jsx)(n.p,{children:"Steps: Right-click the project > Run As > Run Configurations > C/C++ Remote Application"}),"\n",(0,t.jsx)(n.p,{children:"Refer to the image below (the image is a screenshot in Debug mode; since the configuration is the same, it is used to explain the key points). Configure the relevant parameters as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Project: Default, i.e., the target program name"}),"\n",(0,t.jsx)(n.li,{children:"C/C++ Application: Also defaults to the target program name (Search Project to specify)"}),"\n",(0,t.jsx)(n.li,{children:"Connect: New > SSH"}),"\n",(0,t.jsx)(n.li,{children:"Remote Absolute File Path for C/C++ Application: Enter the absolute path of the target program on the RISC-V device (must match the path in the Makefile upload scp command)"}),"\n",(0,t.jsx)(n.li,{children:"Skip download to target path: It is recommended to check this in the current version and use the upload target in the Makefile to transfer the target program from the host to the target board. This is because, without checking, the IDE requires the RSE (Remote System Explorer) plugin, and the target device system must support sftp-server. Currently, milkvduo does not support sftp-server, so this feature is temporarily unavailable."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736321809187",src:i(7495).A+"",width:"1751",height:"877"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736320799175",src:i(1285).A+"",width:"643",height:"518"})}),"\n",(0,t.jsx)(n.p,{children:"Running effect demonstration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(3292).A+"",children:"Successful remote run with Skip download to target path checked"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(3292).A+"",children:"Error when running without Skip download to target path checked"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["milkv duo img currently does not support sftp: ",(0,t.jsx)(n.a,{href:"https://github.com/milkv-duo/duo-buildroot-sdk/issues/167",children:"https://github.com/milkv-duo/duo-buildroot-sdk/issues/167"}),". This issue will be resolved when the milkvduo image supports sftp-server."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,t.jsx)(n.h4,{id:"preparing-the-debugging-example",children:"Preparing the Debugging Example"}),"\n",(0,t.jsx)(n.p,{children:"The helloworld example is not ideal for debugging. To demonstrate debugging, breakpoints, and single-step tracking, another example is used here."}),"\n",(0,t.jsx)(n.p,{children:"sumdemo.c"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n\nint Sum(int s, int e)\n{\n    int result = 0;\n    for(int i = s; i <= e; i++)\n    {\n        result += i;\n    }\n    return result;\n}\n\nint main()\n{\n    int start = 1;\n    int end = 10;\n    printf("I will begin\\n");\n    int n = Sum(start, end);\n    printf("running done, result is: [%d-%d]=%d\\n", start, end, n);\n    return 0;\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:"Makefile:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-makefile",children:"# Eclipse toolchain settings\n# TOOLCHAIN_PREFIX := ~/milkv/duo/duo-examples/host-tools/gcc/riscv64-linux-musl-x86_64/bin/riscv64-unknown-linux-musl-\nTOOLCHAIN_PREFIX := ~/.local/share/ruyi/binaries/x86_64/gnu-milkv-milkv-duo-musl-bin-0.20240731.0+git.67688c7335e7/bin/riscv64-unknown-linux-musl-\n\n# Compilation options -O3 -static\n# CFLAGS := -mcpu=c906fdv -march=rv64imafdcv0p7xthead -mcmodel=medany -mabi=lp64d -DNDEBUG -I~/milkv/duo/duo-examples/include/system\n# LDFLAGS := -D_LARGEFILE_SOURCE -D_LARGEFILE64_SOURCE -D_FILE_OFFSET_BITS=64 -L/home/phebe/milkv/duo/duo-examples/libs/system/musl_riscv64\nCFLAGS := -march=rv64imafdcv0p7xthead -g\nLDFLAGS :=\n\nTARGET=sumdemo\n\nifeq (,$(TOOLCHAIN_PREFIX))\n$(error TOOLCHAIN_PREFIX is not set)\nendif\n\nifeq (,$(CFLAGS))\n$(error CFLAGS is not set)\nendif\n\nCC = $(TOOLCHAIN_PREFIX)gcc\n\nSOURCE = $(wildcard*.c)\nOBJS = $(patsubst%.c,%.o,$(SOURCE))\n\n# Default target\nall: $(TARGET)\n\n$(TARGET): $(OBJS)\n   $(CC)$(CFLAGS) -o $@$(OBJS)$(LDFLAGS)\n\n%.o: %.c\n   $(CC)$(CFLAGS) -o $@ -c $<\n\n# Upload target\nupload: $(TARGET)\n   scp $(TARGET) root@192.168.42.1:/root/target/$(TARGET)\n\n.PHONY: clean upload\nclean:\n   rm -f *.o $(TARGET)\n\n# Make 'all' target depend on 'upload' to automatically upload after building\nall: upload\n"})}),"\n",(0,t.jsx)(n.h4,{id:"preparing-gdbserver",children:"Preparing gdbserver"}),"\n",(0,t.jsx)(n.p,{children:"The original buildroot image does not come with gdbserver. You can copy the original gdbserver executable or use RuyiSDK to add gdbserver and rebuild the image."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download the original gdbserver executable: ",(0,t.jsx)(n.a,{href:"https://github.com/milkv-duo/duo-buildroot-sdk/blob/develop/ramdisk/rootfs/public/gdbserver/riscv_musl/usr/bin/gdbserver",children:"https://github.com/milkv-duo/duo-buildroot-sdk/blob/develop/ramdisk/rootfs/public/gdbserver/riscv_musl/usr/bin/gdbserver"})]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Copy the downloaded gdbserver to the milkv duo device's path:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'scp gdbserver root@192.168.42.1:/usr/bin/\nssh root@192.168.42.1 "chmod +x /usr/bin/gdbserver"\n'})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"debugging-in-terminal",children:"Debugging in Terminal"}),"\n",(0,t.jsx)(n.p,{children:"This operation is no different from debugging using the OS Terminal. Those accustomed to using commands can try this."}),"\n",(0,t.jsx)(n.p,{children:"Terminal supports Local Terminal and SSH Terminal, among others. You can open a Local Terminal and an SSH Terminal connected to milkv duo for operations."}),"\n",(0,t.jsx)(n.p,{children:"Steps for remote debugging using GDBServer + GDB commands:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the milkvduo device (operate in the helloworld directory):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"[root@milkv-duo]~/target# gdbserver :2345 ./sumdemo\nProcess ./sumdemo created; pid = 1802\nListening on port 2345\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"On the PC (operate in the helloworld.c directory):"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"cd ~/ews-milkvduo-t01/sumdemo\n\n# Check gdb version, start debugging\n# Use the ruyi virtual environment for debugging, activate the virtual environment, and compile in the virtual environment\nsource ~/venv-milkvduo/bin/ruyi-activate\nriscv64-unknown-linux-musl-gdb --version\nriscv64-unknown-linux-musl-gdb ./sumdemo\n\ntarget remote 192.168.42.1:2345   # Port number must match the gdbserver side\n\nbreak sumdemo.c:8                 # Set a breakpoint at line 8\n\n# The following are commonly used; use as needed\nc                                 # Continue, resume program execution until the next breakpoint\ndisp result                       # Track a variable, display its value each time it stops\nprint result                      # Print the internal variable result\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736326691511",src:i(5890).A+"",width:"2288",height:"1250"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(7004).A+"",children:"Local Terminal + SSH Terminal | GDBServer + GDB Debugging Demonstration"})}),"\n",(0,t.jsx)(n.h4,{id:"cc-remote-application-1",children:"C/C++ Remote Application"}),"\n",(0,t.jsx)(n.p,{children:"Refer to the image below to configure the relevant parameters. Key points:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Project: Default, i.e., the target program name"}),"\n",(0,t.jsx)(n.li,{children:"C/C++ Application: Also defaults to the target program name (Search Project to specify)"}),"\n",(0,t.jsx)(n.li,{children:"Connect: New > SSH"}),"\n",(0,t.jsx)(n.li,{children:"Remote Absolute File Path for C/C++ Application: Enter the absolute path of the target program on the RISC-V device (must match the path in the Makefile upload scp command)"}),"\n",(0,t.jsx)(n.li,{children:"Skip download to target path: It is recommended to check this in the current version and use the upload target in the Makefile to transfer the target program from the host to the target board. This is because, without checking, the IDE requires the RSE (Remote System Explorer) plugin, and the target device system must support sftp-server. Currently, milkvduo does not support sftp-server, so this feature is temporarily unavailable."}),"\n",(0,t.jsxs)(n.li,{children:["Debugger > Main > GDB Debugger: Specify the GDB path. In this example, use ",(0,t.jsx)(n.code,{children:"~/.local/share/ruyi/binaries/x86_64/gnu-milkv-milkv-duo-musl-bin-0.20240731.0+git.67688c7335e7/bin/riscv64-unknown-linux-musl-gdb"})]}),"\n",(0,t.jsx)(n.li,{children:"Debugger > GDB > GDBserver setting: Specify GDBServer and communication port"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736320771077",src:i(1032).A+"",width:"1453",height:"877"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736320799175",src:i(1285).A+"",width:"643",height:"518"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736320837701",src:i(8371).A+"",width:"1455",height:"877"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736324370390",src:i(9497).A+"",width:"1746",height:"875"})}),"\n",(0,t.jsx)(n.p,{children:"As with running, since milkv duo currently does not support sftp-server, the remote transfer function for the target program is unavailable, and execution will result in the following error."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736320589408",src:i(1239).A+"",width:"571",height:"313"})}),"\n",(0,t.jsx)(n.p,{children:"Checking Skip download to target path skips downloading the target program, bypassing this issue. Use the upload definition in the Makefile to complete the target program transfer from the host to the target device during the build phase."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"1736321809187",src:i(7495).A+"",width:"1751",height:"877"})}),"\n",(0,t.jsx)(n.p,{children:"Running effect demonstration:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(1542).A+"",children:"Error when running without Skip download to target path checked"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{target:"_blank","data-noBrokenLinkCheck":!0,href:i(7026).A+"",children:"Successful run with Skip download to target path checked"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"additional-notes",children:"Additional Notes"}),"\n",(0,t.jsx)(n.h3,{id:"ssh-key-configuration",children:"SSH Key Configuration"}),"\n",(0,t.jsx)(n.p,{children:"Here is a detailed explanation of SSH key configuration:"}),"\n",(0,t.jsx)(n.p,{children:"By configuring SSH keys for the host and Milkv Duo, you can enable password-less login, allowing automatic connection and transfer of binary files to the specified directory on the Milkv Duo after building."}),"\n",(0,t.jsx)(n.p,{children:"Execute ssh-keygen on the host.\nAdd the public key to the Milkv Duo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"\n#cat ~/.ssh/id_rsa.pub | ssh username@milkv_duo_ip_address 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'\n\ncat ~/.ssh/milkvduo.pub | ssh root@192.168.42.1 'mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys'\n"})}),"\n",(0,t.jsx)(n.p,{children:"Verify: ssh root@192.168.42.1"}),"\n",(0,t.jsx)(n.p,{children:"If successful, you will no longer need to enter a password."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},7004:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/gdb-terminal-1-16261d0bad6c2994f0614e94a40bc46c.gif"},1542:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/gdb-withdownload-42ab9ed9dc98bbdfb17db1d37056954b.gif"},7026:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/gdb-withoutdownload-cc4c7c349461da64f9bc5d27eb0ff876.gif"},3292:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/files/run1-20b03660694655ff32bc183948eaac7d.gif"},5828:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735623999135-b9ee8d8e5a8e5dd8d65e1dd126d70cbf.png"},608:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735624096763-6dc6a1c9dba44c24a9a4068646cc8379.png"},8355:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735624436834-91ecc5d885fd62e0d5f54521925da5d9.png"},810:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735624925007-4702f45bb5a5e63309a5e4fe97979de7.png"},7010:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735625245878-4ed00ff12a8f9173d4cea6a5935a239a.png"},9578:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735626678903-c96fe363723450c4a8e1e1e7d6fe4fbf.png"},8334:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735626740680-12ce3f29f2603c912607801a9e7128ce.png"},4976:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735626766840-d38056ea55735d53071b5eb8293ffe43.png"},3220:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1735626979037-2eeda4af40ff487e912a1b66b14fb2be.png"},1239:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736320589408-f58e692d1667d546d2ec1d2a0ecd31a8.png"},1032:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736320771077-b2eba9e5920439bb66683be650cc92b7.png"},1285:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736320799175-287e0e03b0b9c5922b92b9b2961c1c67.png"},8371:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736320837701-601118532bad335c4446308336a7a312.png"},7495:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736321809187-6bc23f44ec61d6c10f9972d1db79214b.png"},9497:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736324370390-53dce551f739f76108dee5230fec28f0.png"},5890:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736326691511-602fefed9971143b123fa9bc87fcc1d6.png"},802:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736776549440-6a9a87ae4ad22e22b9f5f5071768290f.png"},6016:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736776684233-b536fb0e06d0fd5a19b72d63e3307547.png"},3628:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736776707622-698cad9f139e63a66a3392f5193286d7.png"},2840:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/1736777304796-9de9b5cab0b9f6442ac969a29af8bd3f.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>l});var t=i(6540);const r={},s=t.createContext(r);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);