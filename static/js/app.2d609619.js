(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0f9a":function(e,t,n){"use strict";n.r(t);n("d3b7");var r=n("b775");function a(){return Object(r["a"])({url:"/user/info",method:"get"})}var o={userinfo:null},u={SET_USERINFO:function(e,t){e.userinfo=t}},c={getUserInfo:function(e){var t=e.commit;e.state;return new Promise((function(e,n){a().then((function(n){t("SET_USERINFO",n.data),e()}))}))},resetUserInfo:function(e){var t=e.commit;e.state;return new Promise((function(e,n){t("SET_USERINFO",null),e()}))}};t["default"]={namespaced:!0,state:o,mutations:u,actions:c}},"331a":function(e,t){var n={token:"E5FB5353-CDce-9Ef5-8C93-073BCE5FDfED",uid:"310000197907162505"},r={avatar:"http://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTLYMVgaumib5h42GP4pAlLTQCpzFAmUZTVUg4MmH9eFyb4shrm6Ux2Ocic1ic0ekTWEYVfxibGcMMC3UQ/132",cellphone:"15800066380",username:"chan_",realname:"陈泽辉",github:"https://github.com/zehuichan"};e.exports=[{url:"/user/login",type:"post",response:function(e){return{code:200,data:n,msg:"成功"}}},{url:"/user/info",type:"get",response:function(e){return{code:200,data:r,msg:"成功"}}}]},4360:function(e,t,n){"use strict";n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var r=n("2b0e"),a=n("2f62"),o={language:function(e){return e.app.language},userinfo:function(e){return e.user.userinfo},errorLogs:function(e){return e.errorLog.logs}},u=o,c=n("c653"),i=c.keys().reduce((function(e,t){var n=t.replace(/^\.\/(.*)\.\w+$/,"$1"),r=c(t);return e[n]=r.default,e}),{});r["default"].use(a["a"]);var s=new a["a"].Store({modules:i,getters:u});t["a"]=s},"454c":function(e,t,n){"use strict";n("86e4")},"4b0f":function(e,t,n){var r=n("6374").default,a=n("448a").default;n("99af"),n("4d63"),n("c607"),n("ac1f"),n("2c3e"),n("25f0");var o=n("96eb"),u=n("8a60"),c=u.param2Obj,i=n("331a"),s=n("c3a8"),l=[].concat(a(i),a(s));function f(){function e(e){return function(t){var n=null;if(e instanceof Function){var r=t.body,a=t.type,u=t.url;n=e({method:a,body:JSON.parse(r),query:c(u)})}else n=e;return o.mock(n)}}o.XHR.prototype.proxy_send=o.XHR.prototype.send,o.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send.apply(this,arguments)};var t,n=r(l);try{for(n.s();!(t=n.n()).done;){var a=t.value;o.mock(new RegExp(a.url),a.type||"get",e(a.response))}}catch(u){n.e(u)}finally{n.f()}}e.exports={mocks:l,mockXHR:f}},"4d49":function(e,t,n){"use strict";n.r(t);n("a434");var r={logs:[]},a={ADD_ERROR_LOG:function(e,t){e.logs.push(t)},CLEAR_ERROR_LOG:function(e){e.logs.splice(0)}},o={addErrorLog:function(e,t){var n=e.commit;n("ADD_ERROR_LOG",t)},clearErrorLog:function(e){var t=e.commit;t("CLEAR_ERROR_LOG")}};t["default"]={namespaced:!0,state:r,mutations:a,actions:o}},"56d7":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"parseTime",(function(){return ne})),n.d(r,"formatTime",(function(){return re})),n.d(r,"formatIMTime",(function(){return oe})),n.d(r,"formatDayJs",(function(){return ae})),n.d(r,"timeAgo",(function(){return he})),n.d(r,"nFormatter",(function(){return ve})),n.d(r,"toThousandsFilter",(function(){return ge})),n.d(r,"format",(function(){return ye})),n.d(r,"formatPhone",(function(){return ke})),n.d(r,"formatIdentity",(function(){return we}));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("4160"),n("d3b7"),n("159b"),n("b64b"),n("4de4"),n("2d26"),n("96cf"),n("f0e6");var a=n("2b0e"),o=n("b970"),u=(n("157a"),n("dd7a")),c=n.n(u),i=(n("6562"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),s=[],l={name:"App"},f=l,p=(n("034f"),n("2877")),d=Object(p["a"])(f,i,s,!1,null,null,null),m=d.exports,b=(n("3ca3"),n("ddb0"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"basic-layout app-wrapper"},[e.$route.meta.navbar?n("app-nav-bar"):e._e(),n("app-main"),e.$route.meta.tabbar?n("app-tabbar"):e._e()],1)},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-nav-bar",e._b({class:["v-nav-bar",e.classname],attrs:{fixed:!1},on:{"click-left":e.onClickLeft}},"van-nav-bar",e.attrs,!1))},y=[],k=n("83d6"),w=n.n(k),O={name:"AppNavBar",inheritAttrs:!1,computed:{attrs:function(){return Object.assign({},w.a.navbar,this.$route.meta.navbar.showTitle&&{title:this.$route.meta.title},!this.$route.meta.navbar.showTitle&&{leftText:this.$route.meta.title},this.$route.meta.navbar)},classname:function(){return this.$route.meta.navbar.classname}},methods:{onClickLeft:function(){this.$router.go(-1)}}},_=O,T=(n("be54"),Object(p["a"])(_,g,y,!1,null,null,null)),j=T.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-main"},[n("keep-alive",[e.$route.meta.keepAlive?n("router-view",{key:e.key}):e._e()],1),e.$route.meta.keepAlive?e._e():n("router-view",{key:e.key})],1)},$=[],S={name:"AppMain",computed:{key:function(){return this.$route.path}}},x=S,A=(n("454c"),Object(p["a"])(x,E,$,!1,null,null,null)),R=A.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("van-tabbar",{staticClass:"v-tabbar",attrs:{route:"",fixed:!1,placeholder:"","safe-area-inset-bottom":""}},[n("van-tabbar-item",{attrs:{to:"/home"}},[n("v-svg-icon",{attrs:{slot:"icon",name:"icon-earth"},slot:"icon"}),e._v(" "+e._s(e.$t("tabbar.home"))+" ")],1),n("van-tabbar-item",{attrs:{to:"/tpl"}},[n("v-svg-icon",{attrs:{slot:"icon",name:"icon-lights"},slot:"icon"}),e._v(" "+e._s(e.$t("tabbar.tpl"))+" ")],1),n("van-tabbar-item",{attrs:{to:"/center"}},[n("v-svg-icon",{attrs:{slot:"icon",name:"icon-agriculture"},slot:"icon"}),e._v(" "+e._s(e.$t("tabbar.center"))+" ")],1)],1)},C=[],I={name:"AppTabbar"},D=I,M=Object(p["a"])(D,L,C,!1,null,null,null),N=M.exports,U={name:"basic-layout",components:{AppNavBar:j,AppMain:R,AppTabbar:N}},F=U,H=(n("63e3"),Object(p["a"])(F,h,v,!1,null,null,null)),Y=H.exports,G=[{path:"/403",component:function(){return n.e("chunk-4373ee3e").then(n.bind(null,"5140"))}},{path:"/404",component:function(){return n.e("chunk-4a29065a").then(n.bind(null,"1db4"))}},{path:"/500",component:function(){return n.e("chunk-27e6e819").then(n.bind(null,"721c"))}},{path:"/",redirect:"/home",component:Y,children:[{path:"/home",component:function(){return n.e("chunk-b722b2d0").then(n.bind(null,"7abe"))},name:"Home",meta:{title:"组件",navbar:{showTitle:!1,leftArrow:!1},tabbar:!0}},{path:"/tpl",component:function(){return n.e("chunk-4311e881").then(n.bind(null,"1564"))},name:"Tpl",meta:{title:"Template",navbar:{showTitle:!1,leftArrow:!1},tabbar:!0}},{path:"/center",component:function(){return n.e("chunk-560eb680").then(n.bind(null,"785d"))},name:"Center",meta:{title:"关于我",tabbar:!0}},{path:"/confirm",component:function(){return n.e("chunk-6ee63685").then(n.bind(null,"c26b"))},name:"Confirm",meta:{title:"确认订单",navbar:{showTitle:!1},tabbar:!1}},{path:"/checkout",component:function(){return n.e("chunk-2d0ba5a6").then(n.bind(null,"379e"))},name:"Checkout",meta:{title:"收银台",navbar:{showTitle:!1},tabbar:!1}},{path:"/bag",component:function(){return n.e("chunk-2d0c19d8").then(n.bind(null,"4798"))},name:"Bag",meta:{title:"购物袋",navbar:{showTitle:!1},tabbar:!1}},{path:"/mockjs",component:function(){return n.e("chunk-2d0ba927").then(n.bind(null,"387c"))},name:"Mockjs",meta:{title:"Mockjs",navbar:{showTitle:!1},tabbar:!1}}]},{path:"*",redirect:"/404"}];a["default"].use(b["a"]);var J=function(){return new b["a"]({scrollBehavior:function(e,t,n){return n?Promise.resolve(n):{y:0}},routes:G})},P=J();var B=P,q=n("4360"),z=n("9923"),X=n("1da1"),Q=n("323e"),V=n.n(Q),Z=(n("a5d8"),n("99af"),w.a.title||"vant tpl");function W(e){return e?"".concat(e," - ").concat(Z):"".concat(Z)}V.a.configure({showSpinner:!1}),B.beforeEach(function(){var e=Object(X["a"])(regeneratorRuntime.mark((function e(t,n,r){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(V.a.start(),document.title=W(t.meta.title),!q["a"].getters.userinfo){e.next=6;break}r(),e.next=17;break;case 6:return e.prev=6,e.next=9,q["a"].dispatch("user/getUserInfo");case 9:r(),e.next=17;break;case 12:return e.prev=12,e.t0=e["catch"](6),e.next=16,q["a"].dispatch("user/resetUserInfo");case 16:r("/500");case 17:case"end":return e.stop()}}),e,null,[[6,12]])})));return function(t,n,r){return e.apply(this,arguments)}}()),B.afterEach((function(){V.a.done()}));n("ac1f"),n("5319");a["default"].mixin({methods:{$navigateTo:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"_self";if("_self"===n)this.$router.push({path:e,query:t});else{var r=this.$router.resolve({path:e,query:t}),a=r.href;window.open(a,"_blank")}},$redirectTo:function(e){this.$router.replace(e)},$navigateBack:function(){this.$router.back()}}});n("caad"),n("2532");var K=n("53ca"),ee=(n("00b4"),n("e25e"),n("25f0"),n("4d90"),n("baa5"),n("466d"),n("a15b"),n("d81d"),n("1276"),n("fb6a"),n("c975"),n("45fc"),n("5a0c")),te=n.n(ee);function ne(e,t){if(0===arguments.length)return null;var n,r=t||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(K["a"])(e)?n=e:("string"===typeof e&&/^[0-9]+$/.test(e)&&(e=parseInt(e)),"number"===typeof e&&10===e.toString().length&&(e*=1e3),n=new Date(e));var a={y:n.getFullYear(),m:n.getMonth()+1,d:n.getDate(),h:n.getHours(),i:n.getMinutes(),s:n.getSeconds(),a:n.getDay()},o=r.replace(/{([ymdhisa])+}/g,(function(e,t){var n=a[t];return"a"===t?["周日","周一","周二","周三","周四","周五","周六"][n]:n.toString().padStart(2,"0")}));return o}function re(e,t){e=10===(""+e).length?1e3*parseInt(e):+e;var n=new Date(e),r=Date.now(),a=(r-n)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":t?ne(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function ae(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD HH:mm:ss";return te()(e).format(t)}function oe(e){return ue(e,"second")<30?"刚刚":0===ue(e,"day")?ne(e,"今天 {h}:{i}"):1===ue(e,"day")?ne(e,"昨天 {h}:{i}"):ue(e,"day")>1&&ue(e,"day")<7?ne(e,"{a} {h}:{i}"):ue(e,"year")?ne(e,"{y}年{m}月{d}日"):ne(e,"{m}月{d}日")}function ue(e,t){var n="second"===t?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD",r=te()(e).format(n),a=te()().format(n);return te()(a).diff(te()(r),t)}function ce(e,t){var n=Array.isArray(t)?t:[t],r=Object.prototype.toString.call(e);return n.some((function(e){return"[object ".concat(e,"]")===r}))}var ie=w.a.mockjs,se=w.a.vconsole,le=w.a.errorLog;function fe(e){var t="production";return ce(e,"String")?t===e:!!ce(e,"Array")&&e.includes(t)}if(fe(ie)){var pe=n("4b0f"),de=pe.mockXHR;de()}if(fe(se)){var me=n("3a34");new me}fe(le)&&(a["default"].config.errorHandler=function(e,t,n){q["a"].dispatch("errorLog/addErrorLog",{err:e,info:n,url:location.href})});n("a9e3"),n("b680");function be(e,t){return 1===e?e+t:e+t+"s"}function he(e){var t=Date.now()/1e3-Number(e);return t<3600?be(~~(t/60)," minute"):t<86400?be(~~(t/3600)," hour"):be(~~(t/86400)," day")}function ve(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],r=0;r<n.length;r++)if(e>=n[r].value)return(e/n[r].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[r].symbol;return e.toString()}function ge(e){return(+e||0).toString().replace(/^-?\d+/g,(function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}function ye(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e?n+Number(e/100).toFixed(t)+r:Number(0).toFixed(t)}function ke(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/(\d{3})\d*(\d{4})/g,"$1***$2")}function we(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/(\d{3})\d*(\d{4})/g,"$1***********$2")}a["default"].use(o["a"]),a["default"].use(c.a),Object.keys(r).forEach((function(e){a["default"].filter(e,r[e])})),a["default"].config.productionTip=!1,new a["default"]({router:B,store:q["a"],i18n:z["a"],render:function(e){return e(m)}}).$mount("#app")},"63e3":function(e,t,n){"use strict";n("68c9")},6562:function(e,t,n){},"68c9":function(e,t,n){},"6b43":function(e,t,n){"use strict";var r=n("d4ec"),a=n("bee2"),o=(n("e9c4"),"appid"),u=function(){function e(){Object(r["a"])(this,e)}return Object(a["a"])(e,[{key:"setItem",value:function(e,t){try{localStorage.setItem(o+e,JSON.stringify(t))}catch(n){}}},{key:"getItem",value:function(e){try{return JSON.parse(localStorage.getItem(o+e))}catch(t){return""}}},{key:"removeItem",value:function(e){return localStorage.removeItem(o+e)}},{key:"clearStorage",value:function(){return localStorage.clear()}},{key:"setSession",value:function(e,t){try{sessionStorage.setItem(o+e,JSON.stringify(t))}catch(n){}}},{key:"getSession",value:function(e){try{return JSON.parse(sessionStorage.getItem(o+e))}catch(t){return""}}},{key:"removeSession",value:function(e){return sessionStorage.removeItem(o+e)}},{key:"clearSession",value:function(){return sessionStorage.clear()}}]),e}();t["a"]=new u},"83d6":function(e,t){e.exports={title:"vant tpl",copyright:"2018 - present Zehui Chan_",navbar:{showTitle:!0,leftArrow:!0,border:!1,fixed:!1,placeholder:!1,safeAreaInsetTop:!0},tabbar:{route:!0,fixed:!0,placeholder:!0,items:[]},mockjs:["production","staging","development"],vconsole:["production","staging"],errorLog:["production","staging","development"]}},"85ec":function(e,t,n){},"86e4":function(e,t,n){},"8a60":function(e,t,n){var r=n("7037").default;function a(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}function o(e){if(!e&&"object"!==r(e))throw new Error("error arguments","deepClone");var t=e.constructor===Array?[]:{};return Object.keys(e).forEach((function(n){e[n]&&"object"===r(e[n])?t[n]=o(e[n]):t[n]=e[n]})),t}n("ac1f"),n("1276"),n("5319"),n("4160"),n("d3b7"),n("159b"),n("b64b"),e.exports={param2Obj:a,deepClone:o}},9923:function(e,t,n){"use strict";n.d(t,"b",(function(){return m}));var r=n("2909"),a=(n("b64b"),n("c975"),n("2b0e")),o=n("a925"),u=n("3c69"),c=n("d4b0"),i=n("8c18"),s={tabbar:{home:"Home",tpl:"Template",center:"Center"}},l={tabbar:{home:"首页",tpl:"Template",center:"我的"}},f=n("6b43");a["default"].use(o["a"]);var p={en:s,zh:l},d={zh:["zh-CN",i["a"]],en:["en-US",c["a"]]};function m(){var e=f["a"].getItem("language");if(e)return e;for(var t=(navigator.language||navigator.browserLanguage).toLowerCase(),n=Object.keys(p),r=0,a=n;r<a.length;r++){var o=a[r];if(t.indexOf(o)>-1)return o}return"en"}function b(e){if(e)return u["a"].use.apply(u["a"],Object(r["a"])(d[e]));u["a"].use.apply(u["a"],Object(r["a"])(d[m()]))}b();var h=new o["a"]({locale:m(),messages:p});t["a"]=h},b775:function(e,t,n){"use strict";n("d3b7"),n("99af");var r=n("bc3a"),a=n.n(r),o=(n("4360"),n("d399")),u=" (-。-)!!! 服务器开小差了，请稍后重试。",c=a.a.create({baseURL:"/prod-api",timeout:5e4});c.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),c.interceptors.response.use((function(e){var t=e.data;return 200===t.code?t:(Object(o["a"])("status: ".concat(t.code,", ").concat(u)),Promise.reject({message:u,name:"httpRequestError",response:e}))}),(function(e){return Object(o["a"])("err, ".concat(e)),Promise.reject(e)})),t["a"]=c},be54:function(e,t,n){"use strict";n("c6f6")},c3a8:function(e,t){e.exports=[{url:"/user/mock400",type:"post",response:function(e){return{code:400,data:{},msg:"失败"}}},{url:"/user/mock401",type:"post",response:function(e){return{code:401,data:{},msg:"失败"}}},{url:"/user/mock404",type:"post",response:function(e){return{code:404,data:{},msg:"失败"}}},{url:"/user/mock500",type:"post",response:function(e){return{code:500,data:{},msg:"失败"}}}]},c653:function(e,t,n){var r={"./app.js":"d9cd","./errorLog.js":"4d49","./user.js":"0f9a"};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c653"},c6f6:function(e,t,n){},d9cd:function(e,t,n){"use strict";n.r(t);var r=n("9923"),a=n("6b43"),o={language:Object(r["b"])()},u={SET_LANGUAGE:function(e,t){e.language=t,a["a"].setItem("language",t)}},c={setLanguage:function(e,t){var n=e.commit;e.state;n("SET_LANGUAGE",t)}};t["default"]={namespaced:!0,state:o,mutations:u,actions:c}}},[[0,"runtime","chunk-vantUI","chunk-libs"]]]);