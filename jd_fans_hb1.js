/*
红红或者券
一次性
2 2 29 2 * jd_fans_hb1.js
 */

const $ = new Env('领粉丝福利红包1元');
const notify = $.isNode() ? require("./sendNotify") : "";
const jdCookieNode = $.isNode() ? require("./jdCookie.js") : "";
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxf7526=["","\x69\x73\x4E\x6F\x64\x65","\x70\x75\x73\x68","\x66\x6F\x72\x45\x61\x63\x68","\x6B\x65\x79\x73","\x4A\x44\x5F\x44\x45\x42\x55\x47","\x65\x6E\x76","\x66\x61\x6C\x73\x65","\x6C\x6F\x67","\x47\x49\x54\x48\x55\x42","\x69\x6E\x64\x65\x78\x4F\x66","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x65\x78\x69\x74","\x66\x69\x6C\x74\x65\x72","\x43\x6F\x6F\x6B\x69\x65\x4A\x44","\x67\x65\x74\x64\x61\x74\x61","\x43\x6F\x6F\x6B\x69\x65\x4A\x44\x32","\x63\x6F\x6F\x6B\x69\x65","\x6D\x61\x70","\x43\x6F\x6F\x6B\x69\x65\x73\x4A\x44","\x5B\x5D","\x74\x6F\x4F\x62\x6A","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x65\x74\x32\x2F\x6C\x6F\x6F\x6B\x74\x72\x65\x61\x73\x75\x72\x65\x2F\x71\x75\x65\x72\x79\x5F\x61\x63\x74\x69\x76\x65\x74\x65\x6D\x70\x6F\x72\x61\x72\x79\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x62\x61\x63\x6B\x65\x6E\x64\x49\x64\x3D\x78\x77\x76\x67\x6B\x39\x73\x63\x6C\x6C\x73\x61\x35\x64\x6F\x65\x65\x65\x72\x61\x6F\x26\x5F\x3D\x31\x36\x37\x38\x35\x39\x33\x37\x37\x37\x39\x33\x35\x26\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x67\x5F\x6C\x6F\x67\x69\x6E\x5F\x74\x79\x70\x65\x3D\x31\x26\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x71\x75\x65\x72\x79\x5F\x61\x63\x74\x69\x76\x65\x74\x65\x6D\x70\x6F\x72\x61\x72\x79\x26\x67\x5F\x74\x79\x3D\x6C\x73\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x63\x35\x38\x38\x64\x36\x64\x35","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x61\x63\x74\x69\x76\x65\x74\x32\x2F\x6C\x6F\x6F\x6B\x74\x72\x65\x61\x73\x75\x72\x65\x2F\x64\x72\x61\x77\x5F\x61\x63\x74\x69\x76\x65\x74\x65\x6D\x70\x6F\x72\x61\x72\x79\x3F\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x62\x61\x63\x6B\x65\x6E\x64\x49\x64\x3D\x78\x77\x76\x67\x6B\x39\x73\x63\x6C\x6C\x73\x61\x35\x64\x6F\x65\x65\x65\x72\x61\x6F\x26\x5F\x3D\x31\x36\x37\x38\x35\x39\x33\x37\x37\x37\x36\x36\x34\x26\x73\x63\x65\x6E\x65\x76\x61\x6C\x3D\x32\x26\x67\x5F\x6C\x6F\x67\x69\x6E\x5F\x74\x79\x70\x65\x3D\x31\x26\x63\x61\x6C\x6C\x62\x61\x63\x6B\x3D\x64\x72\x61\x77\x5F\x61\x63\x74\x69\x76\x65\x74\x65\x6D\x70\x6F\x72\x61\x72\x79\x26\x67\x5F\x74\x79\x3D\x6C\x73\x26\x61\x70\x70\x43\x6F\x64\x65\x3D\x6D\x73\x63\x35\x38\x38\x64\x36\x64\x35","\x64\x6F\x6E\x65","\x66\x69\x6E\x61\x6C\x6C\x79","\u274C\x20","\x6E\x61\x6D\x65","\x2C\x20\u5931\u8D25\x21\x20\u539F\u56E0\x3A\x20","\x21","\x63\x61\x74\x63\x68","\u3010\u63D0\u793A\u3011\u8BF7\u5148\u83B7\u53D6\u4EAC\u4E1C\u8D26\u53F7\u4E00\x63\x6F\x6F\x6B\x69\x65\x0A\u76F4\u63A5\u4F7F\u7528\x4E\x6F\x62\x79\x44\x61\u7684\u4EAC\u4E1C\u7B7E\u5230\u83B7\u53D6","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x6D\x73\x67","\x6C\x65\x6E\x67\x74\x68","\x55\x73\x65\x72\x4E\x61\x6D\x65","\x6D\x61\x74\x63\x68","\x69\x6E\x64\x65\x78","\x69\x73\x4C\x6F\x67\x69\x6E","\x6E\x69\x63\x6B\x4E\x61\x6D\x65","\x0A\x2A\x2A\x2A\x2A\x2A\x2A\u5F00\u59CB\u3010\u4EAC\u4E1C\u8D26\u53F7","\u3011","\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x2A\x0A","\u3010\u63D0\u793A\u3011\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548","\u4EAC\u4E1C\u8D26\u53F7","\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x0A\x68\x74\x74\x70\x73\x3A\x2F\x2F\x62\x65\x61\x6E\x2E\x6D\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F\x62\x65\x61\x6E\x2F\x73\x69\x67\x6E\x49\x6E\x64\x65\x78\x2E\x61\x63\x74\x69\x6F\x6E","\x63\x6F\x6F\x6B\x69\x65\u5DF2\u5931\u6548\x20\x2D\x20","\x0A\u8BF7\u91CD\u65B0\u767B\u5F55\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x73\x65\x6E\x64\x4E\x6F\x74\x69\x66\x79","\x72\x61\x6E\x64\x6F\x6D","\x77\x61\x69\x74","\x2A\x2F\x2A","\x67\x7A\x69\x70\x2C\x20\x64\x65\x66\x6C\x61\x74\x65\x2C\x20\x62\x72","\x7A\x68\x2D\x63\x6E","\x6B\x65\x65\x70\x2D\x61\x6C\x69\x76\x65","\x77\x71\x2E\x6A\x64\x2E\x63\x6F\x6D","\x68\x74\x74\x70\x73\x3A\x2F\x2F\x77\x71\x73\x2E\x6A\x64\x2E\x63\x6F\x6D\x2F","\x6A\x64\x61\x70\x70\x3B\x61\x6E\x64\x72\x6F\x69\x64\x3B\x31\x31\x2E\x34\x2E\x34\x3B\x3B\x3B\x61\x70\x70\x42\x75\x69\x6C\x64\x2F\x39\x38\x36\x35\x31\x3B\x65\x66\x2F\x31\x3B\x65\x70\x2F\x25\x37\x42\x25\x32\x32\x68\x64\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x4A\x4D\x39\x46\x31\x79\x77\x55\x50\x77\x66\x6C\x76\x4D\x49\x70\x59\x50\x6F\x6B\x30\x74\x74\x35\x6B\x39\x6B\x57\x34\x41\x72\x4A\x45\x55\x33\x6C\x66\x4C\x68\x78\x42\x71\x77\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x74\x73\x25\x32\x32\x25\x33\x41\x31\x36\x37\x36\x37\x32\x32\x33\x39\x34\x34\x38\x32\x25\x32\x43\x25\x32\x32\x72\x69\x64\x78\x25\x32\x32\x25\x33\x41\x2D\x31\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x25\x32\x32\x25\x33\x41\x25\x37\x42\x25\x32\x32\x73\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x45\x47\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4E\x47\x35\x44\x74\x4C\x72\x5A\x57\x47\x33\x59\x77\x47\x35\x44\x4E\x56\x73\x44\x71\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x25\x32\x32\x25\x32\x43\x25\x32\x32\x6F\x76\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x74\x71\x25\x33\x44\x25\x32\x32\x25\x32\x43\x25\x32\x32\x75\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32\x43\x4E\x47\x35\x44\x74\x4C\x72\x5A\x57\x47\x33\x59\x77\x47\x35\x44\x4E\x56\x73\x44\x71\x25\x33\x44\x25\x33\x44\x25\x32\x32\x25\x37\x44\x25\x32\x43\x25\x32\x32\x63\x69\x70\x68\x65\x72\x74\x79\x70\x65\x25\x32\x32\x25\x33\x41\x35\x25\x32\x43\x25\x32\x32\x76\x65\x72\x73\x69\x6F\x6E\x25\x32\x32\x25\x33\x41\x25\x32\x32\x31\x2E\x32\x2E\x30\x25\x32\x32\x25\x32\x43\x25\x32\x32\x61\x70\x70\x6E\x61\x6D\x65\x25\x32\x32\x25\x33\x41\x25\x32\x32\x63\x6F\x6D\x2E\x6A\x69\x6E\x67\x64\x6F\x6E\x67\x2E\x61\x70\x70\x2E\x6D\x61\x6C\x6C\x25\x32\x32\x25\x37\x44\x3B\x6A\x64\x53\x75\x70\x70\x6F\x72\x74\x44\x61\x72\x6B\x4D\x6F\x64\x65\x2F\x30\x3B\x4D\x6F\x7A\x69\x6C\x6C\x61\x2F\x35\x2E\x30\x20\x28\x4C\x69\x6E\x75\x78\x3B\x20\x41\x6E\x64\x72\x6F\x69\x64\x20\x39\x3B\x20\x4F\x4E\x45\x50\x4C\x55\x53\x20\x41\x33\x30\x30\x30\x20\x42\x75\x69\x6C\x64\x2F\x50\x4B\x51\x31\x2E\x31\x38\x31\x32\x30\x33\x2E\x30\x30\x31\x3B\x20\x77\x76\x29\x20\x41\x70\x70\x6C\x65\x57\x65\x62\x4B\x69\x74\x2F\x35\x33\x37\x2E\x33\x36\x20\x28\x4B\x48\x54\x4D\x4C\x2C\x20\x6C\x69\x6B\x65\x20\x47\x65\x63\x6B\x6F\x29\x20\x56\x65\x72\x73\x69\x6F\x6E\x2F\x34\x2E\x30\x20\x43\x68\x72\x6F\x6D\x65\x2F\x38\x39\x2E\x30\x2E\x34\x33\x38\x39\x2E\x37\x32\x20\x4D\x51\x51\x42\x72\x6F\x77\x73\x65\x72\x2F\x36\x2E\x32\x20\x54\x42\x53\x2F\x30\x34\x36\x31\x34\x31\x20\x4D\x6F\x62\x69\x6C\x65\x20\x53\x61\x66\x61\x72\x69\x2F\x35\x33\x37\x2E\x33\x36","\x5C\x5C\x6E","\x3A\x20\x41\x50\x49\u67E5\u8BE2\u8BF7\u6C42\u5931\u8D25\x20\u203C\uFE0F\u203C\uFE0F","\x6C\x6F\x67\x45\x72\x72","\x67\x65\x74","\u6D3B\u52A8\u592A\u706B\u7206\u4E86\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\x7E","\u83B7\u5F97\x3A\x20","\x73\x74\x72\x69\x6E\x67","\x70\x61\x72\x73\x65","\u8BF7\u52FF\u968F\u610F\u5728\x42\x6F\x78\x4A\x73\u8F93\u5165\u6846\u4FEE\u6539\u5185\u5BB9\x0A\u5EFA\u8BAE\u901A\u8FC7\u811A\u672C\u53BB\u83B7\u53D6\x63\x6F\x6F\x6B\x69\x65","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];let cookiesArr=[],cookie=__Oxf7526[0x0];if($[__Oxf7526[0x1]]()){Object[__Oxf7526[0x4]](jdCookieNode)[__Oxf7526[0x3]]((_0xb957x3)=>{cookiesArr[__Oxf7526[0x2]](jdCookieNode[_0xb957x3])});if(process[__Oxf7526[0x6]][__Oxf7526[0x5]]&& process[__Oxf7526[0x6]][__Oxf7526[0x5]]=== __Oxf7526[0x7]){console[__Oxf7526[0x8]]= ()=>{}};if(JSON[__Oxf7526[0xb]](process[__Oxf7526[0x6]])[__Oxf7526[0xa]](__Oxf7526[0x9])>  -1){process[__Oxf7526[0xc]](0)}}else {cookiesArr= [$[__Oxf7526[0xf]](__Oxf7526[0xe]),$[__Oxf7526[0xf]](__Oxf7526[0x10]),...$[__Oxf7526[0x15]]($[__Oxf7526[0xf]](__Oxf7526[0x13])|| __Oxf7526[0x14])[__Oxf7526[0x12]]((_0xb957x3)=>{return _0xb957x3[__Oxf7526[0x11]]})][__Oxf7526[0xd]]((_0xb957x3)=>{return !!_0xb957x3})};let allMessage=__Oxf7526[0x0];let query_url=__Oxf7526[0x16];let draw_url=__Oxf7526[0x17];!(async ()=>{if(!cookiesArr[0x0]){{$[__Oxf7526[0x21]]($[__Oxf7526[0x1b]],__Oxf7526[0x1f],__Oxf7526[0x20],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf7526[0x20]});return}};for(let _0xb957x8=0;_0xb957x8< cookiesArr[__Oxf7526[0x22]];_0xb957x8++){if(cookiesArr[_0xb957x8]){cookie= cookiesArr[_0xb957x8];$[__Oxf7526[0x23]]= decodeURIComponent(cookie[__Oxf7526[0x24]](/pt_pin=([^; ]+)(?=;?)/)&& cookie[__Oxf7526[0x24]](/pt_pin=([^; ]+)(?=;?)/)[0x1]);$[__Oxf7526[0x25]]= _0xb957x8+ 1;$[__Oxf7526[0x26]]= true;$[__Oxf7526[0x27]]= __Oxf7526[0x0];message= __Oxf7526[0x0];console[__Oxf7526[0x8]](__Oxf7526[0x28]+ $[__Oxf7526[0x25]]+ __Oxf7526[0x29]+ ($[__Oxf7526[0x27]]|| $[__Oxf7526[0x23]])+ __Oxf7526[0x2a]);if(!$[__Oxf7526[0x26]]){$[__Oxf7526[0x21]]($[__Oxf7526[0x1b]],__Oxf7526[0x2b],__Oxf7526[0x2c]+ $[__Oxf7526[0x25]]+ __Oxf7526[0x2d]+ ($[__Oxf7526[0x27]]|| $[__Oxf7526[0x23]])+ __Oxf7526[0x2e],{"\x6F\x70\x65\x6E\x2D\x75\x72\x6C":__Oxf7526[0x20]});$[__Oxf7526[0x1]]()&& ( await notify[__Oxf7526[0x31]]($[__Oxf7526[0x1b]]+ __Oxf7526[0x2f]+ $[__Oxf7526[0x23]],__Oxf7526[0x2c]+ $[__Oxf7526[0x25]]+ __Oxf7526[0x2d]+ $[__Oxf7526[0x23]]+ __Oxf7526[0x30]));continue}; await fansapp_query(); await $[__Oxf7526[0x33]](parseInt(Math[__Oxf7526[0x32]]()* 1000+ 500,10)); await fansapp_draw(); await $[__Oxf7526[0x33]](parseInt(Math[__Oxf7526[0x32]]()* 2500+ 2500,10))}};if(allMessage){if($[__Oxf7526[0x1]]()){ await notify[__Oxf7526[0x31]](__Oxf7526[0x0]+ $[__Oxf7526[0x1b]],__Oxf7526[0x0])};$[__Oxf7526[0x21]]($[__Oxf7526[0x1b]],__Oxf7526[0x0],allMessage)}})()[__Oxf7526[0x1e]]((_0xb957x7)=>{$[__Oxf7526[0x8]](__Oxf7526[0x0],__Oxf7526[0x1a]+ $[__Oxf7526[0x1b]]+ __Oxf7526[0x1c]+ _0xb957x7+ __Oxf7526[0x1d],__Oxf7526[0x0])})[__Oxf7526[0x19]](()=>{$[__Oxf7526[0x18]]()});function fansapp_query(){return  new Promise(async (_0xb957xa)=>{const _0xb957xb={"\x75\x72\x6C":query_url,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxf7526[0x34],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxf7526[0x35],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxf7526[0x36],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxf7526[0x37],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x48\x6F\x73\x74":__Oxf7526[0x38],"\x52\x65\x66\x65\x72\x65\x72":__Oxf7526[0x39],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf7526[0x3a]}};$[__Oxf7526[0x3e]](_0xb957xb,(_0xb957xc,_0xb957xd,_0xb957xe)=>{try{if(_0xb957xc){console[__Oxf7526[0x8]](`${__Oxf7526[0x3b]}${$[__Oxf7526[0x1b]]}${__Oxf7526[0x3c]}`);$[__Oxf7526[0x3d]](_0xb957xc)}else {}}catch(e){$[__Oxf7526[0x3d]](e,_0xb957xd)}finally{_0xb957xa(_0xb957xe)}})})}function fansapp_draw(){return  new Promise(async (_0xb957xa)=>{{const _0xb957xb={"\x75\x72\x6C":draw_url,"\x68\x65\x61\x64\x65\x72\x73":{"\x41\x63\x63\x65\x70\x74":__Oxf7526[0x34],"\x41\x63\x63\x65\x70\x74\x2D\x45\x6E\x63\x6F\x64\x69\x6E\x67":__Oxf7526[0x35],"\x41\x63\x63\x65\x70\x74\x2D\x4C\x61\x6E\x67\x75\x61\x67\x65":__Oxf7526[0x36],"\x43\x6F\x6E\x6E\x65\x63\x74\x69\x6F\x6E":__Oxf7526[0x37],"\x43\x6F\x6F\x6B\x69\x65":cookie,"\x48\x6F\x73\x74":__Oxf7526[0x38],"\x52\x65\x66\x65\x72\x65\x72":__Oxf7526[0x39],"\x55\x73\x65\x72\x2D\x41\x67\x65\x6E\x74":__Oxf7526[0x3a]}};$[__Oxf7526[0x3e]](_0xb957xb,(_0xb957xc,_0xb957xd,_0xb957xe)=>{try{if(_0xb957xc){console[__Oxf7526[0x8]](`${__Oxf7526[0x3b]}${$[__Oxf7526[0x1b]]}${__Oxf7526[0x3c]}`);$[__Oxf7526[0x3d]](_0xb957xc)}else {msg= _0xb957xe[__Oxf7526[0x24]](/"sPrizeName":"(.*?)"/)&& _0xb957xe[__Oxf7526[0x24]](/"sPrizeName":"(.*?)"/)[0x1]|| __Oxf7526[0x3f];console[__Oxf7526[0x8]](`${__Oxf7526[0x40]}${msg}${__Oxf7526[0x0]}`)}}catch(e){console[__Oxf7526[0x8]](__Oxf7526[0x3f])}finally{_0xb957xa(_0xb957xe)}})}})}function jsonParse(_0xb957x7){if( typeof _0xb957x7== __Oxf7526[0x41]){try{return JSON[__Oxf7526[0x42]](_0xb957x7)}catch(f){return console[__Oxf7526[0x8]](f),$[__Oxf7526[0x21]]($[__Oxf7526[0x1b]],__Oxf7526[0x0],__Oxf7526[0x43]),[]}}}(function(_0xb957x11,_0xb957x12,_0xb957x13,_0xb957x14,_0xb957x15,_0xb957x16){_0xb957x16= __Oxf7526[0x44];_0xb957x14= function(_0xb957x17){if( typeof alert!== _0xb957x16){alert(_0xb957x17)};if( typeof console!== _0xb957x16){console[__Oxf7526[0x8]](_0xb957x17)}};_0xb957x13= function(_0xb957x18,_0xb957x11){return _0xb957x18+ _0xb957x11};_0xb957x15= _0xb957x13(__Oxf7526[0x45],_0xb957x13(_0xb957x13(__Oxf7526[0x46],__Oxf7526[0x47]),__Oxf7526[0x48]));try{_0xb957x11= __encode;if(!( typeof _0xb957x11!== _0xb957x16&& _0xb957x11=== _0xb957x13(__Oxf7526[0x49],__Oxf7526[0x4a]))){_0xb957x14(_0xb957x15)}}catch(e){_0xb957x14(_0xb957x15)}})({})
// prettier-ignore
function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `🔔${this.name}, 开始!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), n = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(n, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); s && this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t, e = null) { const s = e ? new Date(e) : new Date; let i = { "M+": s.getMonth() + 1, "d+": s.getDate(), "H+": s.getHours(), "m+": s.getMinutes(), "s+": s.getSeconds(), "q+": Math.floor((s.getMonth() + 3) / 3), S: s.getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length))); for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) { let t = ["", "==============📣系统通知📣=============="]; t.push(e), s && t.push(s), i && t.push(i), console.log(t.join("\n")), this.logs = this.logs.concat(t) } } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }