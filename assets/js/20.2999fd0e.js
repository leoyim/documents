(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{243:function(t,a,s){"use strict";s.r(a);var n=s(19),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),s("p",[t._v("在初学时注释过"),s("a",{attrs:{href:"/backend/nginx/explain-the-main-configuration-file-of-nginx"}},[t._v("配置文件")]),t._v("，就以为是详解了～")]),t._v(" "),s("p",[t._v("其实每个参数都有比较复杂的用法，详情可见 Nginx 的 "),s("a",{attrs:{href:"https://nginx.org/en/docs/dirindex.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("directives"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"listen"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#listen"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#listen",target:"_blank",rel:"noopener noreferrer"}},[t._v("listen"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("需要监听的端口。")]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("在官网的链接中需要注意的是：")]),t._v(" "),s("ol",[s("li",[s("p",[t._v("Syntax（语法），语法没啥好说的。")])]),t._v(" "),s("li",[s("p",[t._v("Context（上下文），上下文即大括号 "),s("code",[t._v("{}")]),t._v(" 的范围内，如 listen 仅可以写在 server 上下文中，不能写在 http 和 location 的上下文中。")])])])]),t._v(" "),s("h2",{attrs:{id:"server-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-name"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#server_name",target:"_blank",rel:"noopener noreferrer"}},[t._v("server_name"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("此处为是 core module 的介绍，其余模块与之相关的也有很多。")]),t._v(" "),s("p",[t._v("这边比较重要的是 Server 的匹配顺序：")]),t._v(" "),s("ol",[s("li",[t._v("精确匹配；")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v(" 在前的泛域名；")]),t._v(" "),s("li",[s("code",[t._v("*")]),t._v(" 在后的泛域名；")]),t._v(" "),s("li",[t._v("按文件中的顺序匹配正则表达式域名；")]),t._v(" "),s("li",[t._v("default server  "),s("Badge",{attrs:{text:"重点",type:"error"}}),t._v("。未声明时指向文件第一个 server。")],1)]),t._v(" "),s("div",{staticClass:"custom-block danger"},[s("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),s("p",[t._v("在之前有多个项目时，有部分应用限制 IP 访问，结果我在删除原项目地址后，忘记关闭 DNS 解析了，恰好限制访问的应用 server 又排在第一个，时隔好久访问自己的域名才发现裸奔很久了 😭。")])]),t._v(" "),s("h3",{attrs:{id:"_1-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-示例"}},[t._v("#")]),t._v(" 1. 示例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tlisten    "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v(" default_server"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 listen 后追加，而非 server_name")]),t._v("\n\tserver_name  www.shanyuhai.top shanyuhai.top"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-注意"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意"}},[t._v("#")]),t._v(" 2. 注意")]),t._v(" "),s("p",[t._v("在部分文章中注意到，如果你想要提高自己的网站的知名度，那么还需要配合 301 进行跳转，否则该项设置会导致搜索引擎收录他人的站点，而非你的。")]),t._v(" "),s("h2",{attrs:{id:"alias"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#alias"}},[t._v("#")]),t._v(" "),s("a",{attrs:{href:"https://nginx.org/en/docs/http/ngx_http_core_module.html#alias",target:"_blank",rel:"noopener noreferrer"}},[t._v("alias"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("alias 与 root 有相似的用法，主要是介绍他们之间的区别。")]),t._v(" "),s("p",[t._v("其实在了解这个的时候，突然就想起 ”Linux 中一切皆文件“ 的概念（可能有些牵强），alias（root）的作用即将 URL 映射为文件路径，然后返回对应的静态文件。")]),t._v(" "),s("h3",{attrs:{id:"_1-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-context"}},[t._v("#")]),t._v(" 1. Context")]),t._v(" "),s("ul",[s("li",[t._v("alias：location")]),t._v(" "),s("li",[t._v("root：http、server、location、if in location")])]),t._v(" "),s("h3",{attrs:{id:"_2-path"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-path"}},[t._v("#")]),t._v(" 2. path")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("directives")]),t._v(" "),s("th",[t._v("区别")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("将完整的 url 映射到文件路径。")])]),t._v(" "),s("tr",[s("td",[t._v("alias")]),t._v(" "),s("td",[t._v("将 location 后的 url 映射到文件路径。")])])])]),t._v(" "),s("h3",{attrs:{id:"_3-config"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-config"}},[t._v("#")]),t._v(" 3. config")]),t._v(" "),s("p",[t._v("开始前以两台虚拟机作为示例：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("IP")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("role")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("10.0.0.131")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("user（用户端）")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("10.0.0.132")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("web（服务器）")])])])]),t._v(" "),s("p",[t._v("配置：")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("user")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 为了之后方便，在 user(131) 主机下添加 DNS 解析")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"10.0.0.132  nginx.example.com\n"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),t._v(" /etc/hosts\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" root@nginx.example.com "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 验证")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("web")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 确认服务启动")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 关闭防火墙")]),t._v("\nsystemctl stop firewalld.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 创建文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" foo\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hello world!'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo/bar.txt\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123456")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" foo/123456.txt\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编辑默认配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" /etc/nginx/conf.d/default.conf\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 简化得到结果如下")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    access_log  /var/log/nginx/nginx.access.log  main"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    error_log  /var/log/nginx/nginx.error.log warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 以下为增加的内容")]),t._v("\n    location /root "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\troot /usr/share/nginx/html/foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location /alias "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" /usr/share/nginx/html/foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location /root/dir/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\troot /usr/share/nginx/html/foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t\tindex bar.txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location /alias/dir/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" /usr/share/nginx/html/foo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \t\tindex bar.txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location ~* /root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\troot /usr/share/nginx/html/foo/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    location ~* /alias"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("d+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".txt"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \t\t"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("alias")]),t._v(" /usr/share/nginx/html/foo/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nnginx -s reload "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重载配置")]),t._v("\n")])])])])]),t._v(" "),s("h3",{attrs:{id:"_4-test"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-test"}},[t._v("#")]),t._v(" 4. test")]),t._v(" "),s("p",[t._v("访问为 user 发起，log 为服务端 "),s("code",[t._v("nginx.error.log")]),t._v(" 文件（仅在错误时提示）。")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("获取 bar.txt 文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/root/bar.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 404 Not Found")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# open() "/usr/share/nginx/html/foo/root/bar.txt" failed (2: No such file or directory)')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/alias/bar.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# hello world!")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("获取 bar.txt 文件（目录）")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/root/dir/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 404 Not Found")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "/usr/share/nginx/html/foo/root/dir/bar.txt" is not found (2: No such file or directory)')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/alias/dir/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 403 Forbidden")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# directory index of "/usr/share/nginx/html/foo" is forbidden')]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("获取 123456.txt")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/root/123456.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 404 Not Found")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# log：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# open() "/usr/share/nginx/html/foo/root/123456.txt" failed (2: No such file or directory)')]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -i nginx.example.com/alias/123456.txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HTTP/1.1 200 OK")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 123456")]),t._v("\n")])])])])])])}),[],!1,null,null,null);a.default=e.exports}}]);