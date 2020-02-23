(window.webpackJsonp=window.webpackJsonp||[]).push([[117],{338:function(t,a,e){"use strict";e.r(a);var s=e(19),_=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"cat"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cat"}},[t._v("#")]),t._v(" cat")]),t._v(" "),e("p",[t._v("cat 命令常用于查看内容较少的文本，还可以用于拼接文件。")]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("cat [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("对输出内容进行编号。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("只对非空进行编号。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-V")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("列出特殊字符。")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("查看内容")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" -n test.txt\n")])])])]),t._v(" "),e("li",[e("p",[t._v("合并文件")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" test1.txt test2.txt "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" test3.txt \n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" test3.txt "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证 ")]),t._v("\n")])])])]),t._v(" "),e("li",[e("p",[t._v("倒叙显示")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("tac")]),t._v(" test.txt\n")])])])])]),t._v(" "),e("h2",{attrs:{id:"more"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#more"}},[t._v("#")]),t._v(" more")]),t._v(" "),e("p",[t._v("如果要查看内容较多的文本，用 cat 就难以阅读了，这时候就可以使用 more 了。")]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-2"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("more [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-2"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("p",[t._v("一般不使用选项，而是要了解交互指令。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("交互指令（部分）")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h 或 ?")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示 more 命令的帮助提示。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("q 或 Q")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出 more。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("v")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("在当前行启动一个编辑器。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("回车键")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向下移动一行。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("空格键")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向下一动一页。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("d")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向下移动半页。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("b")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向上移动一页。")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-示例-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-2"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v(" long-test.txt\n")])])]),e("h2",{attrs:{id:"less"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#less"}},[t._v("#")]),t._v(" less")]),t._v(" "),e("p",[t._v("less 是作为 more 的加强版（看到一水的文章说 more 不可以向前翻看，但是 b 明明可以向上翻滚，不知道是我理解错了还是什么 🐱）：")]),t._v(" "),e("ul",[e("li",[t._v("使用光标键可以在文本文件中前后左右滚屏；")]),t._v(" "),e("li",[t._v("用行号或百分比作为书签浏览文件；")]),t._v(" "),e("li",[t._v("提供更加友好的检索、高亮显示操作；")]),t._v(" "),e("li",[t._v("兼容常用的字处理程序（Vim、Emacs）的键盘操作……")])]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-3"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("less [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-3"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-N")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示行号。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-m")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示百分比。")])])])]),t._v(" "),e("p",[t._v("与 more 一致，重要的是交互指令。")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("交互命令")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("功能")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("h 或 H")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("查看帮助。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("q 或 Q")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出 less。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("zz")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("退出 less 命令。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("回车键")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向下移动一行。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("空格键")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("向下移动一页。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("g / G")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("移动至第一行/最后一行。")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-示例-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-3"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("less")]),t._v(" -N long-test.txt\n")])])]),e("h2",{attrs:{id:"head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#head"}},[t._v("#")]),t._v(" head")]),t._v(" "),e("p",[t._v("head 命令常用于查看文本的前 n 行。")]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-4"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("head [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-4"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-n")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("显示文件前 n 行内容，n 默认为 10。")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-示例-4"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-4"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看文件前 20 行内容")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" package-lock.json\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("head")]),t._v(" -20 package-lock.json "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简写")]),t._v("\n")])])]),e("h2",{attrs:{id:"tail"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tail"}},[t._v("#")]),t._v(" tail")]),t._v(" "),e("p",[t._v("tail 命令常用于查看纯文本文件的后 n 行，与 head 相反。")]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-5"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("tail [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-5"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("p",[t._v("与 head 基本一致。")]),t._v(" "),e("h3",{attrs:{id:"_3-示例-5"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-5"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("p",[t._v("与 head 基本一致。")]),t._v(" "),e("h2",{attrs:{id:"wc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#wc"}},[t._v("#")]),t._v(" wc")]),t._v(" "),e("p",[t._v("wc 命令常用于统计指定文本的行数、字数、字节数。")]),t._v(" "),e("h3",{attrs:{id:"_1-命令格式-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-命令格式-6"}},[t._v("#")]),t._v(" 1. 命令格式")]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),e("p",[t._v("wc [选项] 文件名")])]),t._v(" "),e("h3",{attrs:{id:"_2-常用选项-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-常用选项-6"}},[t._v("#")]),t._v(" 2. 常用选项")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("含义")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-l")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("统计行数。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-w")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("统计单词。")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("-c")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("统计字节数。")])])])]),t._v(" "),e("h3",{attrs:{id:"_3-示例-6"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3-示例-6"}},[t._v("#")]),t._v(" 3. 示例")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("默认显示三项数据")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" package-lock.json\n")])])])]),t._v(" "),e("li",[e("p",[t._v("只统计行数")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("wc")]),t._v(" -l package-lock.json\n")])])])])])])}),[],!1,null,null,null);a.default=_.exports}}]);