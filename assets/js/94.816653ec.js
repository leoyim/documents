(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{315:function(a,s,t){"use strict";t.r(s);var e=t(19),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"什么是-yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是-yum"}},[a._v("#")]),a._v(" 什么是 yum")]),a._v(" "),t("p",[a._v("YUM 全称（Yellowdog Updater, Modified），基于 "),t("code",[a._v("Yellow Dog Updater")]),a._v(" 修改而来，是一个在 Fedora 和 RedHat 以及 CentOS 中的 Shell 前端软件包管理器。基于 RPM 包管理，能够从指定的服务器自动下载RPM包并且安装，可以自动处理依赖性关系，并且一次安装所有依赖的软件包。")]),a._v(" "),t("blockquote",[t("p",[a._v("RPM 是为了简化安装的复杂度，而 Yum 软件仓库视为了解决软件包之间的依赖关系。")])]),a._v(" "),t("h2",{attrs:{id:"软件包来源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件包来源"}},[a._v("#")]),a._v(" 软件包来源")]),a._v(" "),t("p",[a._v("可供Yum下载的软件包包括 Fedora, Centos 和 RedHat 本身的软件包，其中 Fedora 的软件包是由Linux社区维护的，并且基本是自由软件。所有的包都有一个独立的 GPG 签名。")]),a._v(" "),t("h2",{attrs:{id:"yum-工作机制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum-工作机制"}},[a._v("#")]),a._v(" yum 工作机制")]),a._v(" "),t("ul",[t("li",[a._v("服务器端：在服务器上面存放了所有的 RPM 软件包，然后以相关的功能去分析每个 RPM 文件的依赖性关系，将这些数据记录成文件存放在服务器的某特定目录内。")]),a._v(" "),t("li",[a._v("客户端：如果需要安装某个软件时，先下载服务器上面记录的依赖性关系文件(可通过 WWW 或 FTP 方式)，通过对服务器端下载的纪录数据进行分析，然后取得所有相关的软件，一次全部下载下来进行安装。")])]),a._v(" "),t("h2",{attrs:{id:"指令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[a._v("#")]),a._v(" 指令")]),a._v(" "),t("h3",{attrs:{id:"_1-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-安装"}},[a._v("#")]),a._v(" 1. 安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" xxx\n")])])]),t("h3",{attrs:{id:"_2-删除"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-删除"}},[a._v("#")]),a._v(" 2. 删除")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum remove xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\nyum erase xxx\n")])])]),t("h3",{attrs:{id:"_3-升级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-升级"}},[a._v("#")]),a._v(" 3. 升级")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum upgrade xxx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\nyum update xxx\n")])])]),t("h3",{attrs:{id:"_4-查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-查询"}},[a._v("#")]),a._v(" 4. 查询")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum info xxx\n")])])]),t("h3",{attrs:{id:"_5-搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-搜索"}},[a._v("#")]),a._v(" 5. 搜索")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 包含 xxx")]),a._v("\nyum search xxx\n")])])]),t("h3",{attrs:{id:"_6-依赖关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-依赖关系"}},[a._v("#")]),a._v(" 6. 依赖关系")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum deplist xxx\n")])])]),t("h3",{attrs:{id:"_7-可更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-可更新"}},[a._v("#")]),a._v(" 7. 可更新")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum check-update\n")])])]),t("h3",{attrs:{id:"_8-可安装和可更新"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-可安装和可更新"}},[a._v("#")]),a._v(" 8. 可安装和可更新")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list\n")])])]),t("h3",{attrs:{id:"_9-已安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-已安装"}},[a._v("#")]),a._v(" 9. 已安装")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list installed\n")])])]),t("h4",{attrs:{id:"_10-已安装且不在资源库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10-已安装且不在资源库"}},[a._v("#")]),a._v(" 10. 已安装且不在资源库")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum list extras\n")])])]),t("h3",{attrs:{id:"_11-清除全部"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_11-清除全部"}},[a._v("#")]),a._v(" 11. 清除全部")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum clean all\n")])])]),t("h3",{attrs:{id:"_12-清除临时包文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_12-清除临时包文件"}},[a._v("#")]),a._v(" 12. 清除临时包文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# /var/cache/yum 下文件")]),a._v("\nyum clean packages\n")])])]),t("h3",{attrs:{id:"_13-清除-rpm-头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_13-清除-rpm-头文件"}},[a._v("#")]),a._v(" 13. 清除 rpm 头文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum clean headers\n")])])]),t("h3",{attrs:{id:"_14-清除旧的-rpm-头文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_14-清除旧的-rpm-头文件"}},[a._v("#")]),a._v(" 14. 清除旧的 rpm 头文件")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("yum clean oldheaders\n")])])]),t("h2",{attrs:{id:"指令参数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#指令参数"}},[a._v("#")]),a._v(" 指令参数")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("-e")]),a._v("：静默执行")]),a._v(" "),t("li",[t("code",[a._v("-t")]),a._v("：忽略错误")]),a._v(" "),t("li",[t("code",[a._v("-R")]),a._v("：设置等待命令执行结束的最大时间（分钟）")]),a._v(" "),t("li",[t("code",[a._v("-y")]),a._v("：自动应答，执行时不需要交互确认")]),a._v(" "),t("li",[t("code",[a._v("--skip-broken")]),a._v("：忽略依赖问题")]),a._v(" "),t("li",[t("code",[a._v("--nogpgcheck")]),a._v("：忽略 GPG 校验过程")])]),a._v(" "),t("h2",{attrs:{id:"注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),t("h3",{attrs:{id:"_1-卸载基础包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载基础包"}},[a._v("#")]),a._v(" 1. 卸载基础包")]),a._v(" "),t("p",[a._v("yum 卸载基础包时，会把上层的依赖包也卸载掉。从 yum 的设计理念出发，这样的操作是合理的，可以减少系统中多余的软件。")])])}),[],!1,null,null,null);s.default=r.exports}}]);