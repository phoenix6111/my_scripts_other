/*
入会开卡领取礼包(通用)

使用环境变量 VENDER_ID 提供 venderid，多个用&连接

export VENDER_ID="xxx"       入会店铺id
export OPENCARD_BEAN="xxx"   最低多少豆入会

cron "1 1 1 1 1" jd_card_force.js, tag=入会开卡领取礼包(通用), enabled=true
*/

const $ = new Env('入会开卡领取礼包通用');
const jdCookieNode = $.isNode() ? require('./jdCookie.js') : '';
const notify = $.isNode() ? require('./sendNotify') : '';


var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxe5c42=["\x56\x45\x4E\x44\x45\x52\x5F\x49\x44","\x65\x6E\x76","","\x4F\x50\x45\x4E\x43\x41\x52\x44\x5F\x42\x45\x41\x4E","\x31\x30","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\x6C\x6F\x67\x45\x72\x72","\x63\x61\x74\x63\x68","\x0A\x0A\u3010\u7531\u4E8E\u81EA\u52A8\u8FD0\u884C\u4F1A\u81EA\u52A8\u5F00\u5361\uFF0C\u5EFA\u8BAE\u7981\u7528\u3011\x0A\u3010\u5982\u9700\u4F7F\u7528\u8BF7\u81EA\u884C\u67E5\u627E\u5165\u4F1A\x49\x44\u6DFB\u52A0\u3011\x0A\x0A","\x6E\x61\x6D\x65","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x5C\x6E\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x5C\x6E","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x26","\x73\x70\x6C\x69\x74","\x6A\x6F\x69\x6E\x56\x65\x6E\x64\x65\x72\x49\x64","\x65\x72\x72\x6F\x72\x4A\x6F\x69\x6E\x53\x68\x6F\x70","\u6D3B\u52A8\u592A\u706B\u7206\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5","\x69\x6E\x64\x65\x78\x4F\x66","\u7B2C\u4E00\u6B21\u91CD\u8BD5","\u7B2C\u4E8C\u6B21\u91CD\u8BD5","\u5F00\u5361\u5931\u8D25\u274C\x20\uFF0C\u91CD\u65B0\u6267\u884C\u811A\u672C","\u3010\u8D26\u53F7","\u5F00\u5361\u5931\u8D25\u274C\x20\uFF0C\u8BF7\u91CD\u65B0\u6267\u884C\u811A\u672C\x5C\x6E","\x55\x41","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x31\x30\x2E\x31\x2E\x34\x3B\x31\x33\x2E\x31\x2E\x32\x3B","\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x77\x69\x66\x69\x3B\x6D\x6F\x64\x65\x6C\x2F\x69\x50\x68\x6F\x6E\x65\x38\x2C\x31\x3B\x61\x64\x64\x72\x65\x73\x73\x69\x64\x2F\x32\x33\x30\x38\x34\x36\x30\x36\x31\x31\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x31\x36\x37\x38\x31\x34\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x33\x5F\x31\x5F\x32\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x61\x62\x63\x64\x65\x66\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x66\x6C\x6F\x6F\x72","\x63\x68\x61\x72\x41\x74","\x73\x68\x6F\x70\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x6F\x70\x65\x6E\x43\x61\x72\x64\x53\x74\x61\x74\x75\x73","\x6F\x70\x65\x6E\x43\x61\x72\x64\x42\x65\x61\x6E","\x2C\x22\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64\x22\x3A","\u5DF2\u7ECF\u662F\u4F1A\u5458\u4E86\x7E","\u67E5\u8BE2\u8BE5\u5E97\u5165\u4F1A\u6CA1\u6709\u9001\u8C46\uFF0C\u4E0D\u5165\u4F1A","\u5165\u4F1A\u9001\u3010","\u3011\u8C46\u5C11\u4E8E\u3010","\u8C46\u3011\x2C\u4E0D\u5165\x2E\x2E\x2E","\x7B\x22\x76\x65\x6E\x64\x65\x72\x49\x64\x22\x3A\x22","\x22\x2C\x22\x73\x68\x6F\x70\x49\x64\x22\x3A\x22","\x22\x2C\x22\x62\x69\x6E\x64\x42\x79\x56\x65\x72\x69\x66\x79\x43\x6F\x64\x65\x46\x6C\x61\x67\x22\x3A\x31\x2C\x22\x72\x65\x67\x69\x73\x74\x65\x72\x45\x78\x74\x65\x6E\x64\x22\x3A\x7B\x7D\x2C\x22\x77\x72\x69\x74\x65\x43\x68\x69\x6C\x64\x46\x6C\x61\x67\x22\x3A\x30","\x2C\x22\x63\x68\x61\x6E\x6E\x65\x6C\x22\x3A\x34\x30\x31\x7D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x62\x69\x6E\x64\x57\x69\x74\x68\x56\x65\x6E\x64\x65\x72\x26\x62\x6F\x64\x79\x3D","\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38\x26\x68\x35\x73\x74\x3D","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x3B\x20\x43\x68\x61\x72\x73\x65\x74\x3D\x55\x54\x46\x2D\x38","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D","\x2A\x2F\x2A","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x78\x2D\x77\x77\x77\x2D\x66\x6F\x72\x6D\x2D\x75\x72\x6C\x65\x6E\x63\x6F\x64\x65\x64","\x74\x6F\x4F\x62\x6A","\x6F\x62\x6A\x65\x63\x74","\x73\x75\x63\x63\x65\x73\x73","\x6D\x65\x73\x73\x61\x67\x65","\x72\x65\x73\x75\x6C\x74","\x67\x69\x66\x74\x49\x6E\x66\x6F","\x67\x69\x66\x74\x4C\x69\x73\x74","\u5165\u4F1A\u83B7\u5F97\uFF1A","\x64\x69\x73\x63\x6F\x75\x6E\x74\x53\x74\x72\x69\x6E\x67","\x70\x72\x69\x7A\x65\x4E\x61\x6D\x65","\x73\x65\x63\x6F\x6E\x64\x4C\x69\x6E\x65\x44\x65\x73\x63","\x67\x65\x74","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x61\x70\x69\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x63\x6C\x69\x65\x6E\x74\x2E\x61\x63\x74\x69\x6F\x6E\x3F\x61\x70\x70\x69\x64\x3D\x6A\x64\x5F\x73\x68\x6F\x70\x5F\x6D\x65\x6D\x62\x65\x72\x26\x66\x75\x6E\x63\x74\x69\x6F\x6E\x49\x64\x3D\x67\x65\x74\x53\x68\x6F\x70\x4F\x70\x65\x6E\x43\x61\x72\x64\x49\x6E\x66\x6F\x26\x62\x6F\x64\x79\x3D\x25\x37\x42\x25\x32\x32\x76\x65\x6E\x64\x65\x72\x49\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32","\x25\x32\x32\x25\x32\x43\x25\x32\x32\x63\x68\x61\x6E\x6E\x65\x6C\x25\x32\x32\x25\x33\x41\x34\x30\x31\x25\x37\x44\x26\x63\x6C\x69\x65\x6E\x74\x3D\x48\x35\x26\x63\x6C\x69\x65\x6E\x74\x56\x65\x72\x73\x69\x6F\x6E\x3D\x39\x2E\x32\x2E\x30\x26\x75\x75\x69\x64\x3D\x38\x38\x38\x38\x38","\u4F1A\u5458\u5361\u540D\u79F0\uFF1A","\x76\x65\x6E\x64\x65\x72\x43\x61\x72\x64\x4E\x61\x6D\x65","\x73\x68\x6F\x70\x4D\x65\x6D\x62\x65\x72\x43\x61\x72\x64\x49\x6E\x66\x6F","\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x52\x75\x6C\x65\x4C\x69\x73\x74","\x69\x6E\x74\x65\x72\x65\x73\x74\x73\x49\x6E\x66\x6F","\x61\x63\x74\x69\x76\x69\x74\x79\x49\x64","\x75\x73\x65\x72\x49\x6E\x66\x6F","\u4EAC\u8C46","\x69\x6E\x63\x6C\x75\x64\x65\x73","\x73\x74\x72\x69\x6E\x67","\x70\x61\x72\x73\x65","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x30\x31\x32\x33\x34\x35\x36\x37\x38\x39","\x73\x6C\x69\x63\x65","\x6E\x6F\x77","\x79\x79\x79\x79\x4D\x4D\x64\x64\x68\x68\x6D\x6D\x73\x73\x53\x53\x53","\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x39\x62\x63\x31\x62\x39\x38\x31\x38\x6E\x38\x75\x46\x68\x52\x38\x6B\x73\x33\x72\x79\x51\x57\x4D\x4F\x5A\x7A\x6A\x70\x44\x56\x43\x49\x4E\x4A\x4A\x48\x38\x61\x50\x30\x79\x32\x52\x57\x46\x4C\x69\x4A\x42\x6D\x4C\x6B\x33\x5A\x37\x6A\x39\x72\x68\x6D\x35\x63\x6A\x37\x44\x4E\x30\x77\x39\x6D\x49\x48\x65\x73\x71\x6F\x6D\x75\x30\x42\x34\x36\x68\x30\x68\x3B\x35\x61\x62\x35\x65\x66\x64\x35\x64\x63\x37\x63\x33\x64\x35\x32\x64\x64\x31\x39\x61\x38\x65\x61\x61\x62\x63\x37\x62\x63\x39\x39\x63\x31\x62\x39\x64\x62\x38\x30\x30\x61\x34\x32\x30\x38\x62\x61\x31\x31\x34\x32\x63\x38\x61\x37\x63\x37\x62\x66\x38\x35\x32\x65\x3B\x33\x2E\x30\x3B","\x3B\x31\x36\x39\x66\x31\x3B\x74\x6B\x30\x32\x77\x63\x30\x66\x39\x31\x63\x38\x61\x31\x38\x6E\x76\x57\x56\x4D\x47\x72\x51\x4F\x31\x69\x46\x6C\x70\x51\x72\x65\x32\x53\x68\x32\x6D\x47\x74\x4E\x72\x6F\x31\x6C\x30\x55\x70\x5A\x71\x47\x4C\x52\x62\x48\x69\x79\x71\x66\x61\x55\x51\x61\x50\x79\x36\x34\x57\x54\x37\x75\x7A\x37\x45\x2F\x67\x75\x6A\x47\x41\x42\x35\x30\x6B\x79\x4F\x37\x68\x77\x42\x79\x57\x4B\x3B\x37\x37\x63\x38\x61\x30\x35\x65\x36\x61\x36\x36\x66\x61\x65\x65\x64\x30\x30\x65\x34\x65\x32\x38\x30\x61\x64\x38\x63\x34\x30\x66\x61\x62\x36\x30\x37\x32\x33\x62\x35\x62\x35\x36\x31\x32\x33\x30\x33\x38\x30\x65\x62\x34\x30\x37\x65\x31\x39\x33\x35\x34\x66\x37\x3B\x33\x2E\x30\x3B","\x3B\x65\x66\x37\x39\x61\x3B\x74\x6B\x30\x32\x77\x39\x32\x36\x33\x31\x62\x66\x61\x31\x38\x6E\x68\x44\x34\x75\x62\x66\x33\x51\x66\x4E\x69\x55\x38\x45\x44\x32\x50\x49\x32\x37\x30\x79\x67\x73\x6E\x2B\x76\x61\x6D\x75\x42\x51\x68\x30\x6C\x56\x45\x36\x76\x37\x55\x41\x77\x63\x6B\x7A\x33\x73\x32\x4F\x74\x6C\x46\x45\x66\x74\x68\x35\x4C\x62\x51\x64\x57\x4F\x50\x4E\x76\x50\x45\x59\x48\x75\x55\x32\x54\x77\x3B\x30\x66\x33\x36\x64\x64\x64\x65\x66\x66\x33\x66\x38\x37\x38\x36\x36\x36\x33\x62\x35\x30\x62\x62\x33\x34\x36\x36\x35\x63\x34\x65\x39\x64\x36\x30\x38\x35\x39\x66\x38\x66\x62\x65\x38\x32\x32\x66\x62\x35\x35\x66\x64\x30\x32\x65\x64\x32\x65\x38\x34\x66\x64\x32\x3B\x33\x2E\x30\x3B","\x3B","\x46\x6F\x72\x6D\x61\x74","\x70\x72\x6F\x74\x6F\x74\x79\x70\x65","\x67\x65\x74\x4D\x6F\x6E\x74\x68","\x67\x65\x74\x44\x61\x74\x65","\x67\x65\x74\x48\x6F\x75\x72\x73","\x67\x65\x74\x4D\x69\x6E\x75\x74\x65\x73","\x67\x65\x74\x53\x65\x63\x6F\x6E\x64\x73","\x67\x65\x74\x44\x61\x79","\x67\x65\x74\x4D\x69\x6C\x6C\x69\x73\x65\x63\x6F\x6E\x64\x73","\x74\x65\x73\x74","\x24\x31","\x73\x75\x62\x73\x74\x72","\x67\x65\x74\x46\x75\x6C\x6C\x59\x65\x61\x72","\x63\x6F\x6E\x63\x61\x74","\x72\x65\x70\x6C\x61\x63\x65","\x29","\x28","\x53\x2B","\x30\x30\x30","\x30\x30","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x75\x73\x65\x72\x2F\x69\x6E\x66\x6F\x2F\x51\x75\x65\x72\x79\x4A\x44\x55\x73\x65\x72\x49\x6E\x66\x6F\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x61\x70\x70\x6C\x69\x63\x61\x74\x69\x6F\x6E\x2F\x6A\x73\x6F\x6E\x2C\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E\x2C\x20\x2A\x2F\x2A","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x6D\x79\x2F\x6A\x69\x6E\x67\x64\x6F\x75\x2F\x6D\x79\x2E\x73\x68\x74\x6D\x6C\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32","\x6A\x64\x61\x70\x70\x3B\x69\x50\x68\x6F\x6E\x65\x3B\x39\x2E\x34\x2E\x34\x3B\x31\x34\x2E\x33\x3B\x6E\x65\x74\x77\x6F\x72\x6B\x2F\x34\x67\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x69\x50\x68\x6F\x6E\x65\x3B\x20\x43\x50\x55\x20\x69\x50\x68\x6F\x6E\x65\x20\x4F\x53\x20\x31\x34\x5F\x33\x20\x6C\x69\x6B\x65\x20\x4D\x61\x63\x20\x4F\x53\x20\x58\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x36\x30\x35\x2E\x31\x2E\x31\x35\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x4D\x6F\x62\x69\x6C\x65\x2F\x31\x35\x45\x31\x34\x38\x3B\x73\x75\x70\x70\x6F\x72\x74\x4A\x44\x53\x48\x57\x4B\x2F\x31","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x20\x41\x50\x49\u8BF7\u6C42\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u7F51\u8DEF\u91CD\u8BD5","\x72\x65\x74\x63\x6F\x64\x65","\x62\x61\x73\x65","\x6E\x69\x63\x6B\x6E\x61\x6D\x65","\u4EAC\u4E1C\u670D\u52A1\u5668\u8FD4\u56DE\u7A7A\u6570\u636E","\x70\x6F\x73\x74","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];const VENDER_ID=process[__Oxe5c42[0x1]][__Oxe5c42[0x0]]|| __Oxe5c42[0x2];const OPENCARD_BEAN=process[__Oxe5c42[0x1]][__Oxe5c42[0x3]]|| __Oxe5c42[0x4];let cookiesArr=[],cookie=__Oxe5c42[0x2];if($[__Oxe5c42[0x5]]()){Object[__Oxe5c42[0x8]](jdCookieNode)[__Oxe5c42[0x7]]((_0x307cx5)=>{cookiesArr[__Oxe5c42[0x6]](jdCookieNode[_0x307cx5])});if(process[__Oxe5c42[0x1]][__Oxe5c42[0x9]]&& process[__Oxe5c42[0x1]][__Oxe5c42[0x9]]=== __Oxe5c42[0xa]){console[__Oxe5c42[0xb]]= ()=>{}}}else {cookiesArr= [$[__Oxe5c42[0xe]](__Oxe5c42[0xd]),$[__Oxe5c42[0xe]](__Oxe5c42[0xf]),...jsonParse($[__Oxe5c42[0xe]](__Oxe5c42[0x12])|| __Oxe5c42[0x13])[__Oxe5c42[0x11]]((_0x307cx5)=>{return _0x307cx5[__Oxe5c42[0x10]]})][__Oxe5c42[0xc]]((_0x307cx5)=>{return !!_0x307cx5})};allMessage= __Oxe5c42[0x2];message= __Oxe5c42[0x2];!(async ()=>{console[__Oxe5c42[0xb]](__Oxe5c42[0x18]);if(!cookiesArr[0x0]){$[__Oxe5c42[0x1c]]($[__Oxe5c42[0x19]],__Oxe5c42[0x1a],__Oxe5c42[0x1b],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxe5c42[0x1b]});return};for(let _0x307cx7=0;_0x307cx7< cookiesArr[__Oxe5c42[0x1d]];_0x307cx7++){cookie= cookiesArr[_0x307cx7];if(cookie){$[__Oxe5c42[0x1e]]= decodeURIComponent(cookie[__Oxe5c42[0x1f]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxe5c42[0x1f]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxe5c42[0x20]]= _0x307cx7+ 1;message= __Oxe5c42[0x2];$[__Oxe5c42[0x21]]= __Oxe5c42[0x2]; await TotalBean();$[__Oxe5c42[0x1e]]= $[__Oxe5c42[0x21]]|| $[__Oxe5c42[0x1e]];console[__Oxe5c42[0xb]](`${__Oxe5c42[0x22]}${$[__Oxe5c42[0x20]]}${__Oxe5c42[0x23]}${$[__Oxe5c42[0x1e]]}${__Oxe5c42[0x24]}`); await getUA(); await run(); await $[__Oxe5c42[0x26]](parseInt(Math[__Oxe5c42[0x25]]()* 1000+ 1500,10))}};if(allMessage){$[__Oxe5c42[0x1c]]($[__Oxe5c42[0x19]],`${__Oxe5c42[0x2]}`,`${__Oxe5c42[0x2]}${allMessage}${__Oxe5c42[0x2]}`)}})()[__Oxe5c42[0x17]]((_0x307cx6)=>{return $[__Oxe5c42[0x16]](_0x307cx6)})[__Oxe5c42[0x15]](()=>{return $[__Oxe5c42[0x14]]()});async function run(){try{const _0x307cx9=VENDER_ID[__Oxe5c42[0x28]](__Oxe5c42[0x27]);for(let _0x307cx7=0;_0x307cx7< _0x307cx9[__Oxe5c42[0x1d]];_0x307cx7++){$[__Oxe5c42[0x29]]= _0x307cx9[_0x307cx7];$[__Oxe5c42[0x2a]]= __Oxe5c42[0x2]; await joinShop();if($[__Oxe5c42[0x2a]][__Oxe5c42[0x2c]](__Oxe5c42[0x2b])>  -1){console[__Oxe5c42[0xb]](__Oxe5c42[0x2d]); await $[__Oxe5c42[0x26]](parseInt(Math[__Oxe5c42[0x25]]()* 1000+ 1500,10)); await joinShop()};if($[__Oxe5c42[0x2a]][__Oxe5c42[0x2c]](__Oxe5c42[0x2b])>  -1){console[__Oxe5c42[0xb]](__Oxe5c42[0x2e]); await $[__Oxe5c42[0x26]](parseInt(Math[__Oxe5c42[0x25]]()* 1000+ 1500,10)); await joinShop()}; await $[__Oxe5c42[0x26]](parseInt(Math[__Oxe5c42[0x25]]()* 1000+ 1500,10));if($[__Oxe5c42[0x2a]][__Oxe5c42[0x2c]](__Oxe5c42[0x2b])>  -1){console[__Oxe5c42[0xb]](__Oxe5c42[0x2f]);allMessage+= `${__Oxe5c42[0x30]}${$[__Oxe5c42[0x20]]}${__Oxe5c42[0x23]}${$[__Oxe5c42[0x1e]]}${__Oxe5c42[0x31]}`}}}catch(e){console[__Oxe5c42[0xb]](e)}}function getUA(){$[__Oxe5c42[0x32]]= `${__Oxe5c42[0x33]}${randomString(40)}${__Oxe5c42[0x34]}`}function randomString(_0x307cx6){_0x307cx6= _0x307cx6|| 32;let _0x307cxc=__Oxe5c42[0x35],_0x307cxd=_0x307cxc[__Oxe5c42[0x1d]],_0x307cxe=__Oxe5c42[0x2];for(i= 0;i< _0x307cx6;i++){_0x307cxe+= _0x307cxc[__Oxe5c42[0x37]](Math[__Oxe5c42[0x36]](Math[__Oxe5c42[0x25]]()* _0x307cxd))};return _0x307cxe}function joinShop(){if(!$[__Oxe5c42[0x29]]){return};return  new Promise(async (_0x307cx10)=>{$[__Oxe5c42[0x38]]= __Oxe5c42[0x2];$[__Oxe5c42[0x2a]]= __Oxe5c42[0x2];$[__Oxe5c42[0x39]]= false;$[__Oxe5c42[0x3a]]= 0; await getshopactivityId();let _0x307cx11=`${__Oxe5c42[0x2]}`;if($[__Oxe5c42[0x38]]){_0x307cx11= `${__Oxe5c42[0x3b]}${$[__Oxe5c42[0x38]]}${__Oxe5c42[0x2]}`};if($[__Oxe5c42[0x39]]){console[__Oxe5c42[0xb]](`${__Oxe5c42[0x3c]}`);_0x307cx10()}else {if($[__Oxe5c42[0x3a]]=== 0){console[__Oxe5c42[0xb]](__Oxe5c42[0x3d]);_0x307cx10()}else {if($[__Oxe5c42[0x3a]]< OPENCARD_BEAN){console[__Oxe5c42[0xb]](`${__Oxe5c42[0x3e]}${$[__Oxe5c42[0x3a]]}${__Oxe5c42[0x3f]}${OPENCARD_BEAN}${__Oxe5c42[0x40]}`);_0x307cx10()}else {let _0x307cx12=`${__Oxe5c42[0x41]}${$[__Oxe5c42[0x29]]}${__Oxe5c42[0x42]}${$[__Oxe5c42[0x29]]}${__Oxe5c42[0x43]}${_0x307cx11}${__Oxe5c42[0x44]}`;let _0x307cx13=__Oxe5c42[0x2];_0x307cx13=  await geth5st();const _0x307cx14={url:`${__Oxe5c42[0x45]}${_0x307cx12}${__Oxe5c42[0x46]}${_0x307cx13}${__Oxe5c42[0x2]}`,headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe5c42[0x47],'\x4F\x72\x69\x67\x69\x6E':__Oxe5c42[0x48],'\x48\x6F\x73\x74':__Oxe5c42[0x49],'\x61\x63\x63\x65\x70\x74':__Oxe5c42[0x4a],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe5c42[0x32]],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxe5c42[0x4b],'\x43\x6F\x6F\x6B\x69\x65':cookie}};$[__Oxe5c42[0x57]](_0x307cx14,async (_0x307cx15,_0x307cx16,_0x307cx17)=>{try{let _0x307cx18=$[__Oxe5c42[0x4c]](_0x307cx17,_0x307cx17);if( typeof _0x307cx18== __Oxe5c42[0x4d]){if(_0x307cx18[__Oxe5c42[0x4e]]=== true){console[__Oxe5c42[0xb]](_0x307cx18[__Oxe5c42[0x4f]]);$[__Oxe5c42[0x2a]]= _0x307cx18[__Oxe5c42[0x4f]];if(_0x307cx18[__Oxe5c42[0x50]]&& _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x51]]){for(let _0x307cx7 of _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x51]][__Oxe5c42[0x52]]){console[__Oxe5c42[0xb]](`${__Oxe5c42[0x53]}${_0x307cx7[__Oxe5c42[0x54]]}${__Oxe5c42[0x2]}${_0x307cx7[__Oxe5c42[0x55]]}${__Oxe5c42[0x2]}${_0x307cx7[__Oxe5c42[0x56]]}${__Oxe5c42[0x2]}`)}}}else {if( typeof _0x307cx18== __Oxe5c42[0x4d]&& _0x307cx18[__Oxe5c42[0x4f]]){$[__Oxe5c42[0x2a]]= _0x307cx18[__Oxe5c42[0x4f]];console[__Oxe5c42[0xb]](`${__Oxe5c42[0x2]}${_0x307cx18[__Oxe5c42[0x4f]]|| __Oxe5c42[0x2]}${__Oxe5c42[0x2]}`)}else {console[__Oxe5c42[0xb]](_0x307cx17)}}}else {console[__Oxe5c42[0xb]](_0x307cx17)}}catch(e){$[__Oxe5c42[0x16]](e,_0x307cx16)}finally{_0x307cx10()}})}}}})}function getshopactivityId(){return  new Promise((_0x307cx10)=>{const _0x307cx14={url:`${__Oxe5c42[0x58]}${$[__Oxe5c42[0x29]]}${__Oxe5c42[0x59]}`,headers:{'\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65':__Oxe5c42[0x47],'\x4F\x72\x69\x67\x69\x6E':__Oxe5c42[0x48],'\x48\x6F\x73\x74':__Oxe5c42[0x49],'\x61\x63\x63\x65\x70\x74':__Oxe5c42[0x4a],'\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74':$[__Oxe5c42[0x32]],'\x63\x6F\x6E\x74\x65\x6E\x74\x2D\x74\x79\x70\x65':__Oxe5c42[0x4b],'\x43\x6F\x6F\x6B\x69\x65':cookie}};$[__Oxe5c42[0x57]](_0x307cx14,async (_0x307cx15,_0x307cx16,_0x307cx17)=>{try{let _0x307cx18=$[__Oxe5c42[0x4c]](_0x307cx17,_0x307cx17);if( typeof _0x307cx18== __Oxe5c42[0x4d]){if(_0x307cx18[__Oxe5c42[0x4e]]== true){console[__Oxe5c42[0xb]](`${__Oxe5c42[0x5a]}${_0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5c]][__Oxe5c42[0x5b]]|| __Oxe5c42[0x2]}${__Oxe5c42[0x2]}`);$[__Oxe5c42[0x38]]= _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]]&& _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][0x0]&& _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][0x0][__Oxe5c42[0x5e]]&& _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][0x0][__Oxe5c42[0x5e]][__Oxe5c42[0x5f]]|| __Oxe5c42[0x2];$[__Oxe5c42[0x39]]= _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x60]][__Oxe5c42[0x39]];if(_0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]]&& _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][__Oxe5c42[0x1d]]){for(let _0x307cx7=0;_0x307cx7< _0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][__Oxe5c42[0x1d]];_0x307cx7++){const _0x307cx5=_0x307cx18[__Oxe5c42[0x50]][__Oxe5c42[0x5d]][_0x307cx7];if(_0x307cx5[__Oxe5c42[0x55]]&& _0x307cx5[__Oxe5c42[0x55]][__Oxe5c42[0x62]](__Oxe5c42[0x61])){$[__Oxe5c42[0x3a]]= parseInt(_0x307cx5[__Oxe5c42[0x54]]);break}}}}}else {console[__Oxe5c42[0xb]](_0x307cx17)}}catch(e){$[__Oxe5c42[0x16]](e,_0x307cx16)}finally{_0x307cx10()}})})}function jsonParse(_0x307cx1b){if( typeof _0x307cx1b== __Oxe5c42[0x63]){try{return JSON[__Oxe5c42[0x64]](_0x307cx1b)}catch(e){console[__Oxe5c42[0xb]](e);$[__Oxe5c42[0x1c]]($[__Oxe5c42[0x19]],__Oxe5c42[0x2],__Oxe5c42[0x65]);return []}}}function generateFp(){let _0x307cx6=__Oxe5c42[0x66];let _0x307cxd=13;let _0x307cx7=__Oxe5c42[0x2];for(;_0x307cxd--;){_0x307cx7+= _0x307cx6[Math[__Oxe5c42[0x25]]()* _0x307cx6[__Oxe5c42[0x1d]]| 0]};return (_0x307cx7+ Date[__Oxe5c42[0x68]]())[__Oxe5c42[0x67]](0,16)}function geth5st(){let _0x307cx1e=Date[__Oxe5c42[0x68]]();let _0x307cx1f=generateFp();let _0x307cx20= new Date(_0x307cx1e).Format(__Oxe5c42[0x69]);let _0x307cx21=__Oxe5c42[0x2];let _0x307cx22=__Oxe5c42[0x2];let _0x307cx23=[__Oxe5c42[0x6a],__Oxe5c42[0x6b],__Oxe5c42[0x6c]];let _0x307cx24=_0x307cx23[random(0,_0x307cx23[__Oxe5c42[0x1d]])];return encodeURIComponent(_0x307cx20+ __Oxe5c42[0x6d]+ _0x307cx24+ _0x307cx1f+ __Oxe5c42[0x2]+ Date[__Oxe5c42[0x68]]())}function getH5st(){let _0x307cx1e=Date[__Oxe5c42[0x68]]();let _0x307cx1f=generateFp();let _0x307cx20= new Date(_0x307cx1e).Format(__Oxe5c42[0x69]);return encodeURIComponent(_0x307cx20+ __Oxe5c42[0x6d]+ __Oxe5c42[0x2]+ _0x307cx1f+ __Oxe5c42[0x6b]+ Date[__Oxe5c42[0x68]]())}Date[__Oxe5c42[0x6f]][__Oxe5c42[0x6e]]= function(_0x307cx26){var _0x307cx6,_0x307cxe=this,_0x307cx27=_0x307cx26,_0x307cx28={"\x4D\x2B":_0x307cxe[__Oxe5c42[0x70]]()+ 1,"\x64\x2B":_0x307cxe[__Oxe5c42[0x71]](),"\x44\x2B":_0x307cxe[__Oxe5c42[0x71]](),"\x68\x2B":_0x307cxe[__Oxe5c42[0x72]](),"\x48\x2B":_0x307cxe[__Oxe5c42[0x72]](),"\x6D\x2B":_0x307cxe[__Oxe5c42[0x73]](),"\x73\x2B":_0x307cxe[__Oxe5c42[0x74]](),"\x77\x2B":_0x307cxe[__Oxe5c42[0x75]](),"\x71\x2B":Math[__Oxe5c42[0x36]]((_0x307cxe[__Oxe5c42[0x70]]()+ 3)/ 3),"\x53\x2B":_0x307cxe[__Oxe5c42[0x76]]()};/(y+)/i[__Oxe5c42[0x77]](_0x307cx27)&& (_0x307cx27= _0x307cx27[__Oxe5c42[0x7c]](RegExp.$1,__Oxe5c42[0x2][__Oxe5c42[0x7b]](_0x307cxe[__Oxe5c42[0x7a]]())[__Oxe5c42[0x79]](4- RegExp[__Oxe5c42[0x78]][__Oxe5c42[0x1d]])));for(var _0x307cx29 in _0x307cx28){if( new RegExp(__Oxe5c42[0x7e][__Oxe5c42[0x7b]](_0x307cx29,__Oxe5c42[0x7d]))[__Oxe5c42[0x77]](_0x307cx27)){var _0x307cxc,_0x307cxd=__Oxe5c42[0x7f]=== _0x307cx29?__Oxe5c42[0x80]:__Oxe5c42[0x81];_0x307cx27= _0x307cx27[__Oxe5c42[0x7c]](RegExp.$1,1== RegExp[__Oxe5c42[0x78]][__Oxe5c42[0x1d]]?_0x307cx28[_0x307cx29]:(__Oxe5c42[0x2][__Oxe5c42[0x7b]](_0x307cxd)+ _0x307cx28[_0x307cx29])[__Oxe5c42[0x79]](__Oxe5c42[0x2][__Oxe5c42[0x7b]](_0x307cx28[_0x307cx29])[__Oxe5c42[0x1d]]))}};return _0x307cx27};function random(_0x307cx2b,_0x307cx2c){return Math[__Oxe5c42[0x36]](Math[__Oxe5c42[0x25]]()* (_0x307cx2c- _0x307cx2b))+ _0x307cx2b}function TotalBean(){return  new Promise(async (_0x307cx10)=>{const _0x307cx14={"\x75\x72\x6C":`${__Oxe5c42[0x82]}`,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxe5c42[0x83],"\x43\x6F\x6E\x74\x65\x6E\x74\x2D\x54\x79\x70\x65":__Oxe5c42[0x4b],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxe5c42[0x84],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxe5c42[0x85],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxe5c42[0x86],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x52\x65\x66\x65\x72\x65\x72":__Oxe5c42[0x87],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxe5c42[0x88]}};$[__Oxe5c42[0x8f]](_0x307cx14,(_0x307cx15,_0x307cx16,_0x307cx17)=>{try{if(_0x307cx15){console[__Oxe5c42[0xb]](`${__Oxe5c42[0x2]}${JSON[__Oxe5c42[0x89]](_0x307cx15)}${__Oxe5c42[0x2]}`);console[__Oxe5c42[0xb]](`${__Oxe5c42[0x2]}${$[__Oxe5c42[0x19]]}${__Oxe5c42[0x8a]}`)}else {if(_0x307cx17){_0x307cx17= JSON[__Oxe5c42[0x64]](_0x307cx17);if(_0x307cx17[__Oxe5c42[0x8b]]=== 0&& _0x307cx17[__Oxe5c42[0x8c]]&& _0x307cx17[__Oxe5c42[0x8c]][__Oxe5c42[0x8d]]){$[__Oxe5c42[0x21]]= _0x307cx17[__Oxe5c42[0x8c]][__Oxe5c42[0x8d]]}}else {console[__Oxe5c42[0xb]](`${__Oxe5c42[0x8e]}`)}}}catch(e){$[__Oxe5c42[0x16]](e)}finally{_0x307cx10()}})})}(function(_0x307cx2e,_0x307cx2f,_0x307cx30,_0x307cx31,_0x307cx32,_0x307cx29){_0x307cx29= __Oxe5c42[0x90];_0x307cx31= function(_0x307cx33){if( typeof alert!== _0x307cx29){alert(_0x307cx33)};if( typeof console!== _0x307cx29){console[__Oxe5c42[0xb]](_0x307cx33)}};_0x307cx30= function(_0x307cxd,_0x307cx2e){return _0x307cxd+ _0x307cx2e};_0x307cx32= _0x307cx30(__Oxe5c42[0x91],_0x307cx30(_0x307cx30(__Oxe5c42[0x92],__Oxe5c42[0x93]),__Oxe5c42[0x94]));try{_0x307cx2e= __encode;if(!( typeof _0x307cx2e!== _0x307cx29&& _0x307cx2e=== _0x307cx30(__Oxe5c42[0x95],__Oxe5c42[0x96]))){_0x307cx31(_0x307cx32)}}catch(e){_0x307cx31(_0x307cx32)}})({})


// prettier-ignore
function Env(t,e){"undefined"!=typeof process&&JSON.stringify(process.env).indexOf("GITHUB")>-1&&process.exit(0);class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`🔔${this.name}, 开始!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),n={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(n,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();s&&this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t,e=null){const s=e?new Date(e):new Date;let i={"M+":s.getMonth()+1,"d+":s.getDate(),"H+":s.getHours(),"m+":s.getMinutes(),"s+":s.getSeconds(),"q+":Math.floor((s.getMonth()+3)/3),S:s.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(s.getFullYear()+"").substr(4-RegExp.$1.length)));for(let e in i)new RegExp("("+e+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?i[e]:("00"+i[e]).substr((""+i[e]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};if(this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r))),!this.isMuteLog){let t=["","==============📣系统通知📣=============="];t.push(e),s&&t.push(s),i&&t.push(i),console.log(t.join("\n")),this.logs=this.logs.concat(t)}}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`❗️${this.name}, 错误!`,t.stack):this.log("",`❗️${this.name}, 错误!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`🔔${this.name}, 结束! 🕛 ${s} 秒`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}