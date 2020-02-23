(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{314:function(s,t,a){"use strict";a.r(t);var n=a(19),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"修改网卡配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改网卡配置"}},[s._v("#")]),s._v(" 修改网卡配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看网卡")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ens33")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改配置文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/sysconfig/network-scripts\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" ifcfg-ens33"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(",.bak"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" ifcfg-ens33 ifcfg-eth0\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" ifcfg-eth0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NAME=eth0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# DEVICE=eth0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ifcfg-eth0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n")])])]),a("h2",{attrs:{id:"修改-grub-配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-grub-配置"}},[s._v("#")]),s._v(" 修改 grub 配置")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改 grub 配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/sysconfig/grub\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改，在其后追加")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# GRUB_CMDLINE_LINUX="crashkernel=auto rd.lvm.lv=centos/root net.ifnames=0 biosdevname=0 rd.lvm.lv=centos/swap rhgb quiet net.ifnames=0 biosdevname=0"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/sysconfig/grub "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新配置")]),s._v("\ngrub2-mkconfig -o /boot/grub2/grub.cfg\n")])])]),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" 验证")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" -r now "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ip")]),s._v(" addr\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# eth0")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);