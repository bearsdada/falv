(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-guide-index"],{"32d8":function(t,a,e){"use strict";var n=e("4ea4");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var i=n(e("b675")),u=(n(e("c6e1")),e("a656")),o={components:{guide:i.default},data:function(){return{guidePages:!1,advData:[]}},onShow:function(){this.loadExecution()},methods:{loadExecution:function(){var t=this,a=uni.getStorageSync("guideDate")||"",e=(new Date).toLocaleDateString();a!==e?(0,u.getOpenAdv)().then((function(a){0==a.data.status||0==a.data.value.length?uni.switchTab({url:"/pages/index/index"}):a.data.status&&(a.data.value.length||a.data.video_link)&&(t.advData=a.data,uni.setStorageSync("guideDate",(new Date).toLocaleDateString()),t.guidePages=!0)})).catch((function(t){uni.switchTab({url:"/pages/index/index"})})):uni.switchTab({url:"/pages/index/index"})}},onHide:function(){this.guidePages=!1}};a.default=o},"374a":function(t,a,e){"use strict";e("c975"),e("a9e3"),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={data:function(){return{autoplay:!1,duration:500,jumpover:this.$t("跳过"),experience:this.$t("立即体验"),timecount:void 0,times:0}},props:{advData:{type:Object,default:function(){}},closeType:{type:Number,default:1}},mounted:function(){this.timer()},methods:{timer:function(){var t=this;this.times=this.advData.time;var a=this.advData.time||5;this.timecount=setInterval((function(){a--,t.times=a,a<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),uni.switchTab({url:"/pages/index/index"})},jump:function(t){t&&(-1!=t.indexOf("http")?uni.navigateTo({url:"/pages/annex/web_view/index?url=".concat(t)}):uni.navigateTo({url:t,fail:function(){uni.switchTab({url:t})}}),clearInterval(this.timecount))}}};a.default=n},"42b0":function(t,a,e){"use strict";e.r(a);var n=e("6b42"),i=e("455b");for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);e("d778");var o,d=e("f0c5"),r=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"5e8c8614",null,!1,n["a"],o);a["default"]=r.exports},4446:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */uni-page-body[data-v-105ab622],\n.content[data-v-105ab622]{width:100%;height:100%;background-size:100% auto;padding:0}.swiper[data-v-105ab622]{width:100%;height:100vh;background:#fff}.swiper-item[data-v-105ab622]{width:100%;height:100%;text-align:center;position:relative;display:flex;\n  /* justify-content: center; */align-items:flex-end;flex-direction:column-reverse}.swiper-item-img[data-v-105ab622]{width:100%;height:100vh;margin:0 auto}.swiper-item-img uni-image[data-v-105ab622]{width:100%;height:100%}.jump-over[data-v-105ab622]{position:absolute;height:%?45?%;line-height:%?45?%;padding:0 %?15?%;border-radius:%?30?%;font-size:%?24?%;color:#b09e9a;border:1px solid #b09e9a;z-index:999}.jump-over[data-v-105ab622]{right:%?30?%;top:%?80?%}.video-box[data-v-105ab622]{width:100vw;height:100vh}.video-box .vid[data-v-105ab622]{width:100%;height:100%}body.?%PAGE?%[data-v-105ab622]{background-size:100% auto}',""]),t.exports=a},"455b":function(t,a,e){"use strict";e.r(a);var n=e("32d8"),i=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=i.a},"6b42":function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"main"},[t.guidePages?e("guide",{attrs:{advData:t.advData,time:t.advData.time}}):t._e()],1)},u=[]},"84ec":function(t,a,e){"use strict";e.r(a);var n=e("374a"),i=e.n(n);for(var u in n)"default"!==u&&function(t){e.d(a,t,(function(){return n[t]}))}(u);a["default"]=i.a},"8cd8":function(t,a,e){var n=e("daeb");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("3d441f1a",n,!0,{sourceMap:!1,shadowMode:!1})},b675:function(t,a,e){"use strict";e.r(a);var n=e("ebfc"),i=e("84ec");for(var u in i)"default"!==u&&function(t){e.d(a,t,(function(){return i[t]}))}(u);e("e4a0");var o,d=e("f0c5"),r=Object(d["a"])(i["default"],n["b"],n["c"],!1,null,"105ab622",null,!1,n["a"],o);a["default"]=r.exports},d778:function(t,a,e){"use strict";var n=e("8cd8"),i=e.n(n);i.a},daeb:function(t,a,e){var n=e("24fb");a=n(!1),a.push([t.i,"uni-page-body[data-v-5e8c8614],\n.main[data-v-5e8c8614]{width:100%;height:100%}",""]),t.exports=a},df81:function(t,a,e){var n=e("4446");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=e("4f06").default;i("a8a4aed0",n,!0,{sourceMap:!1,shadowMode:!1})},e4a0:function(t,a,e){"use strict";var n=e("df81"),i=e.n(n);i.a},ebfc:function(t,a,e){"use strict";var n;e.d(a,"b",(function(){return i})),e.d(a,"c",(function(){return u})),e.d(a,"a",(function(){return n}));var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-uni-view",{staticClass:"content"},["pic"==t.advData.type&&t.advData.value.length?e("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:t.autoplay,"indicator-dots":"true","indicator-color":"rgba(255,255,255,0.6)",duration:t.duration}},t._l(t.advData.value,(function(a,n){return e("v-uni-swiper-item",{key:n,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.jump(a.link)}}},[e("v-uni-view",{staticClass:"swiper-item"},[e("v-uni-view",{staticClass:"swiper-item-img"},[e("v-uni-image",{attrs:{src:a.img,mode:"scaleToFill"}})],1)],1)],1)})),1):"video"==t.advData.type&&t.advData.video_link?e("v-uni-view",{staticClass:"video-box"},[e("v-uni-video",{staticClass:"vid",attrs:{src:t.advData.video_link,autoplay:!0,loop:!0,muted:!0,controls:!1}})],1):t._e(),e("v-uni-view",{staticClass:"jump-over",on:{click:function(a){a.stopPropagation(),arguments[0]=a=t.$handleEvent(a),t.launchFlag()}}},[t._v(t._s(t.$t("跳过"))),1==t.closeType?e("v-uni-text",[t._v(t._s(t.times))]):t._e()],1)],1)},u=[]}}]);