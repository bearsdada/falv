(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"1d32":function(e,t,a){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=f(a("a34a")),n=(a("a368"),a("168b")),r=(a("18f5"),f(a("e7d9")),f(a("8394"))),i=a("8aa5"),c=(a("5ba0"),a("a656")),s=a("816a"),u=a("26cb"),l=f(a("9ad2")),d=f(a("c6e1"));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t,a,o,n,r,i){try{var c=e[r](i),s=c.value}catch(u){return void a(u)}c.done?t(s):Promise.resolve(s).then(o,n)}function b(e){return function(){var t=this,a=arguments;return new Promise((function(o,n){var r=e.apply(t,a);function i(e){p(r,o,n,i,c,"next",e)}function c(e){p(r,o,n,i,c,"throw",e)}i(void 0)}))}}var g="--view-theme: rgba(66,202,77,1);--view-theme-16: #42CA4D;--view-priceColor:#FF7600;--view-minorColor:rgba(108, 198, 94, 0.5);--view-minorColorT:rgba(66, 202, 77, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(66,202,77, 0.1);--view-main-start:#70E038; --view-main-over:#42CA4D;--view-op-point-four: rgba(66,202,77, 0.04);",v="--view-theme: rgba(233,51,35,1);--view-theme-16: #e93323;--view-priceColor:#e93323;--view-minorColor:rgba(233, 51, 35, 0.5);--view-minorColorT:rgba(233, 51, 35, 0.1);--view-bntColor:#FE960F;--view-op-ten: rgba(233,51,35, 0.1);--view-main-start:#FF6151; --view-main-over:#e93323;--view-op-point-four: rgba(233,51,35, 0.04);",w="--view-theme: rgba(29,176,252,1);--view-theme-16:#1db0fc;--view-priceColor:#FD502F;--view-minorColor:rgba(58, 139, 236, 0.5);--view-minorColorT:rgba(9, 139, 243, 0.1);--view-bntColor:#22CAFD;--view-op-ten: rgba(29,176,252, 0.1);--view-main-start:#40D1F4; --view-main-over:#1DB0FC;--view-op-point-four: rgba(29,176,252, 0.04);",m="--view-theme: rgba(255,68,143,1);--view-theme-16:#ff448f;--view-priceColor:#FF448F;--view-minorColor:rgba(255, 68, 143, 0.5);--view-minorColorT:rgba(255, 68, 143, 0.1);--view-bntColor:#282828;--view-op-ten: rgba(255,68,143, 0.1);--view-main-start:#FF67AD; --view-main-over:#FF448F;--view-op-point-four: rgba(255,68,143, 0.04);",h="--view-theme: rgba(254,92,45,1); --view-theme-16:#FE5C2D;--view-priceColor:#FE5C2D;--view-minorColor:rgba(254, 92, 45, 0.5);--view-minorColorT:rgba(254, 92, 45, 0.1);--view-bntColor:#FDB000;--view-op-ten: rgba(254,92,45, 0.1);--view-main-start:#FF9445; --view-main-over:#FE5C2D;--view-op-point-four: rgba(254,92,45, 0.04);",y={globalData:{spid:0,code:0,isLogin:!1,userInfo:{},MyMenus:[],globalData:!1,isIframe:!1,tabbarShow:!0,windowHeight:0,locale:""},mixins:[l.default],computed:(0,u.mapGetters)(["isLogin","cartNum"]),watch:{isLogin:{deep:!0,handler:function(e,t){e||this.$store.commit("indexData/setCartNum","")}},cartNum:function(t,a){this.$store.commit("indexData/setCartNum",t+""),t>0?e.setTabBarBadge({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2,text:t+""}):e.hideTabBarRedDot({index:Number(e.getStorageSync("FOOTER_ADDCART"))||2})}},onShow:function(){var t=e.getEnterOptionsSync();if(t.query.spread&&(this.$Cache.set("spread",t.query.spread),this.globalData.spid=t.query.spread,this.globalData.pid=t.query.spread,(0,i.silenceBindingSpread)(this.globalData)),t.query.spid&&(this.$Cache.set("spread",t.query.spid),this.globalData.spid=t.query.spid,this.globalData.pid=t.query.spid,(0,i.silenceBindingSpread)(this.globalData)),t.query.scene){switch(t.scene){case 1047:this.globalData.code=t.query.scene;break;case 1048:this.globalData.code=t.query.scene;break;case 1049:this.globalData.code=t.query.scene;break;case 1001:this.globalData.spid=t.query.scene;break}(0,i.silenceBindingSpread)(this.globalData)}},onLaunch:function(t){var a=this;return b(o.default.mark((function t(){var i,u,l,f,p;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.hideTabBar(),i=a,(0,c.colorChange)("color_change").then((function(t){switch(e.setStorageSync("is_diy",t.data.is_diy),e.$emit("is_diy",t.data.is_diy),t.data.status){case 1:e.setStorageSync("viewColor",w),e.$emit("ok",w,t.data.status);break;case 2:e.setStorageSync("viewColor",g),e.$emit("ok",g,t.data.status);break;case 3:e.setStorageSync("viewColor",v),e.$emit("ok",v,t.data.status);break;case 4:e.setStorageSync("viewColor",m),e.$emit("ok",m,t.data.status);break;case 5:e.setStorageSync("viewColor",h),e.$emit("ok",h,t.data.status);break;default:e.setStorageSync("viewColor",v),e.$emit("ok",v,t.data.status);break}})),d.default.has("localeSet")||(0,s.getLangJson)().then((function(t){d.default.set("locale",Object.keys(t.data)[0]),e.setStorageSync("localeJson",t.data),d.default.set("localeSet",!0,600)})),""!=n.HTTP_REQUEST_URL){t.next=7;break}return t.abrupt("return",!1);case 7:wx.getUpdateManager(),u=wx.getEnterOptionsSync(),wx.canIUse("getUpdateManager")&&1154!=u.scene&&(l=wx.getUpdateManager(),l.onCheckForUpdate((function(e){e.hasUpdate&&(l.onUpdateFailed((function(){return i.Tips({title:"新版本下载失败"})})),l.onUpdateReady((function(){wx.showModal({title:"更新提示",content:"新版本已经下载好，是否重启当前应用？",success:function(e){e.confirm&&l.applyUpdate()}})})),l.onUpdateFailed((function(){wx.showModal({title:"发现新版本",content:"请删除当前小程序，重启搜索打开..."})})))}))),e.getSystemInfo({success:function(e){i.globalData.navHeight=e.statusBarHeight*(750/e.windowWidth)+91}}),f=e.getMenuButtonBoundingClientRect(),i.globalData.navH=2*f.top+f.height/2,p=e.getSystemInfoSync().SDKVersion,r.default.compareVersion(p,"2.21.3")>=0?i.$Cache.set("MP_VERSION_ISNEW",!0):i.$Cache.set("MP_VERSION_ISNEW",!1),(0,c.getCrmebCopyRight)().then((function(t){e.setStorageSync("copyRight",t.data)}));case 16:case"end":return t.stop()}}),t)})))()},methods:{}};t.default=y}).call(this,a("543d")["default"])},"2a44":function(e,t,a){"use strict";(function(e){a("7b91");var t=l(a("66fd")),o=l(a("35c4")),n=l(a("48c6")),r=l(a("c6e1")),i=l(a("9823")),c=l(a("168b")),s=l(a("bec0")),u=l(a("e9c7"));function l(e){return e&&e.__esModule?e:{default:e}}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function f(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){p(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}wx.__webpack_require_UNI_MP_PLUGIN__=a,t.default.prototype.$util=i.default,t.default.prototype.$config=c.default,t.default.prototype.$Cache=r.default,t.default.prototype.$eventHub=new t.default,t.default.prototype.$socket=new s.default,t.default.config.productionTip=!1;var b=function(){a.e("components/pageLoading").then(function(){return resolve(a("aba5"))}.bind(null,a)).catch(a.oe)},g=function(){a.e("components/skeleton/index").then(function(){return resolve(a("4d33"))}.bind(null,a)).catch(a.oe)};t.default.component("skeleton",g),t.default.component("pageLoading",b),o.default.mpType="app";var v=new t.default(f(f({},o.default),{},{store:n.default,Cache:r.default,i18n:u.default}));e(v).$mount()}).call(this,a("543d")["createApp"])},"35c4":function(e,t,a){"use strict";a.r(t);var o=a("b766");for(var n in o)"default"!==n&&function(e){a.d(t,e,(function(){return o[e]}))}(n);a("e61d");var r,i,c,s,u=a("f0c5"),l=Object(u["a"])(o["default"],r,i,!1,null,null,null,!1,c,s);t["default"]=l.exports},"891d":function(e,t,a){},b766:function(e,t,a){"use strict";a.r(t);var o=a("1d32"),n=a.n(o);for(var r in o)"default"!==r&&function(e){a.d(t,e,(function(){return o[e]}))}(r);t["default"]=n.a},e61d:function(e,t,a){"use strict";var o=a("891d"),n=a.n(o);n.a}},[["2a44","common/runtime","common/vendor"]]]);