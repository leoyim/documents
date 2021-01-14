(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{598:function(t,e,a){"use strict";a.r(e);var s=a(29),v=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("Linux 是多用户多任务操作系统，换句话说，Linux 系统支持多个多用户在同一时间内登录，并切每个用户可以执行不同的任务。")]),t._v(" "),a("p",[t._v("在登录 Linux 系统时虽然输入的是用户名和密码，但其实 Linux 并不认识用户名称，它只认识用户名对应的 ID。Linux 将用户名与 ID 的对应关系存放在 "),a("code",[t._v("/etc/passwd")]),t._v(" 文件中；将用户组名与 GID 的对应关系存放在 "),a("code",[t._v("/etc/group")]),t._v(" 文件中。")]),t._v(" "),a("h2",{attrs:{id:"passwd-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passwd-格式"}},[t._v("#")]),t._v(" passwd 格式")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[a("code",[t._v("shanyuhai:x:1000:1000:shanyuhai:/home/shanyuhai:/bin/bash")])]),t._v(" "),a("p",[t._v("对应为 ➡️ 用户名:密码:UID:GID:描述信息:主目录:默认Shell")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("名称")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("解释")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("用户名")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("方便用户记忆的字符串。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("密码")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("x （x 虽然不是真正的密码，被删除则会被认为没有密码）表示该用户设置了密码，但不是真正的密码，真正的密码保存在 "),a("code",[t._v("/etc/shadow")]),t._v(" 文件中。早期 UNIX 中，保存的是真正的加密密码串，后果就是被暴力破解。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("UID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("用来识别用户的 ID。0 为超级用户；1 ～ 1000 为伪用户；1000 ～ 65535 为普通用户。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("GID")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("表示用户初始组的组 ID，创建用户时自动创建，用户可以加入其他的用户组（附加组）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("描述信息")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("即描述信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("主目录")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("主目录又称家目录。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("默认 Shell")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Shell 就是 Linux 的命令解释器。")])])])]),t._v(" "),a("h2",{attrs:{id:"用户相关操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户相关操作"}},[t._v("#")]),t._v(" 用户相关操作")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("命令")]),t._v(" "),a("th",[t._v("含义")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("useradd")]),t._v(" "),a("td",[t._v("新增用户。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("passwd")]),t._v(" "),a("td",[t._v("修改密码。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("usermod")]),t._v(" "),a("td",[t._v("修改用户（visudo 更强）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("chage")]),t._v(" "),a("td",[t._v("修改密码信息，可用于让用户登录后立即修改密码 "),a("code",[t._v("chage -d 0 username")]),t._v(" 。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("userdel")]),t._v(" "),a("td",[t._v("删除用户。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("groupadd")]),t._v(" "),a("td",[t._v("新增用户组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("groupmod")]),t._v(" "),a("td",[t._v("修改用户组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("groupdel")]),t._v(" "),a("td",[t._v("删除用户组，仅适用于不是任何用户初始组的群组，否则删除失败。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("gpasswd")]),t._v(" "),a("td",[t._v("管理用户组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("newgrep")]),t._v(" "),a("td",[t._v("设置初始组。")])])])]),t._v(" "),a("p",[t._v("也可以选择更为简单的 "),a("code",[t._v("adduser")]),t._v("、"),a("code",[t._v("deluser")]),t._v(" 进行交互式操作，可添加 "),a("code",[t._v("-h")]),t._v(" 来查看帮助。")]),t._v(" "),a("h2",{attrs:{id:"useradd-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#useradd-解析"}},[t._v("#")]),t._v(" useradd 解析")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("useradd shanyuhai")])]),t._v(" "),a("p",[t._v("该命令会完成以下几项操作：")]),t._v(" "),a("ol",[a("li",[t._v("在 "),a("code",[t._v("/etc/passwd")]),t._v(" 文件中新增了一行与 "),a("code",[t._v("shanyuhai")]),t._v(" 用户相关的数据；")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("/etc/shadow")]),t._v(" 文件中新增了一行与 "),a("code",[t._v("shanyuhai")]),t._v(" 用户密码相关的数据；")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("/etc/group")]),t._v(" 文件中新增了一行与 "),a("code",[t._v("shanyuhai")]),t._v(" 的群组；")]),t._v(" "),a("li",[t._v("在 "),a("code",[t._v("/etc/gshadow")]),t._v(" 文件中新增一行与 "),a("code",[t._v("shanyuhai")]),t._v(" 群组密码相关的数据；")]),t._v(" "),a("li",[t._v("默认创建用户的主目录和邮箱；")]),t._v(" "),a("li",[t._v("将 "),a("code",[t._v("/etc/skel")]),t._v(" 目录中的配置文件复制到新用户的主目录中。")])]),t._v(" "),a("h2",{attrs:{id:"userdel-解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#userdel-解析"}},[t._v("#")]),t._v(" userdel 解析")]),t._v(" "),a("p",[t._v("在执行 userdel 删除用户前需要先找到用户相关的数据并删除之。")]),t._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("find -user shanyuhai # 找出所有并删除")]),t._v(" "),a("p",[t._v("userdel shanyuhai")])]),t._v(" "),a("p",[t._v("该命令会完成以下几项操作：")]),t._v(" "),a("ol",[a("li",[t._v("删除 "),a("code",[t._v("/etc/passed")]),t._v(" 记录；")]),t._v(" "),a("li",[t._v("删除 "),a("code",[t._v("/etc/shadow")]),t._v(" 记录；")]),t._v(" "),a("li",[t._v("删除 "),a("code",[t._v("/etc/group")]),t._v(" 记录；")]),t._v(" "),a("li",[t._v("删除 "),a("code",[t._v("/etc/gshadow")]),t._v(" 记录；")]),t._v(" "),a("li",[t._v("删除邮箱："),a("code",[t._v("rm -rf /var/spod/mail/username")]),t._v("；")]),t._v(" "),a("li",[t._v("删除家目录："),a("code",[t._v("rm -rf /home/username")]),t._v("；")]),t._v(" "),a("li",[t._v("测试 "),a("code",[t._v("useradd username")]),t._v("，若没有报错则成功。")])]),t._v(" "),a("h2",{attrs:{id:"用户赋权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户赋权"}},[t._v("#")]),t._v(" 用户赋权")]),t._v(" "),a("h3",{attrs:{id:"_1-chown"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-chown"}},[t._v("#")]),t._v(" 1. chown")]),t._v(" "),a("p",[t._v("chown 可以改变某个文件或目录的所有者和所属组，当是目录时记得加 "),a("code",[t._v("-R")]),t._v(" 递归处理。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" shanyuhai:shanyuhai /home/shanyuhai\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 或指定为当前用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chown")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[t._v("$USER")]),t._v(" ~/.ssh/config\n")])])]),a("h3",{attrs:{id:"_2-chmod"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-chmod"}},[t._v("#")]),t._v(" 2. chmod")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("角色")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("u")]),t._v(" "),a("td",[t._v("User，文件或目录的所有者。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("g")]),t._v(" "),a("td",[t._v("Group，文件或目录的所属组。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("o")]),t._v(" "),a("td",[t._v("Other，其余用户。")])])])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("权限")]),t._v(" "),a("th",[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("r")]),t._v(" "),a("td",[t._v("读取权限，数字为 4。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("w")]),t._v(" "),a("td",[t._v("写入权限，数字为 2。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("x")]),t._v(" "),a("td",[t._v("执行（目录切换），数字为 1。")])])])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("u")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rwx,g"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rw,o"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("r /tmp/hello.txt\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 等价于")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("764")]),t._v(" /tmp/hello.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 追加执行权限")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+x /tmp/hello.txt\n")])])]),a("h3",{attrs:{id:"_3-setfacl"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-setfacl"}},[t._v("#")]),t._v(" 3. setfacl")]),t._v(" "),a("p",[t._v("仅使用以上两种方案无法解决更为复杂的权限问题，这时需要引入 ACL（Access Control List） 来解决问题。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 开始前可以先看已知权限")]),t._v("\ngetfacl /tmp/hello.txt\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1. 基于用户")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" acl01 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ACL")]),t._v("\nll hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看")]),t._v("\nsetfacl -m u:acl01:rx hello.txt\nll hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以注意到权限位后面多了一个 `+`，表示该文件拥有 ACL 权限")]),t._v("\n\ngetfacl /tmp/hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2. 基于用户组")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" acl02 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ACL")]),t._v("\nsetfacl -m g:acl02:rx hello.txt\n\ngetfacl hello.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])]),a("p",[t._v("需要注意的是如果给父目录设定了默认 ACL 权限，那么父目录之后新建的子文件都会继承父目录的 ACL 权限（未设置则仅对目录生效）。")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" -p /tmp/hi\nsetfacl -m d:u:acl01:rx /tmp/hi\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"你好"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" /tmp/hi/chinese.txt\n\ngetfacl /tmp/hi/chinese.txt "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])])}),[],!1,null,null,null);e.default=v.exports}}]);