(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/pageFooter/index"],{"5d9e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r,a=n("26cb"),o=n("18f5"),i=n("5ba0");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){f(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function f(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=(r={name:"pageFooter",props:{status:{type:Number|String,default:1},countNum:{type:Number|String,default:0}},data:function(){return{newData:void 0}},computed:c({},(0,a.mapState)({configData:function(t){return t.app.pageFooter}}))},f(r,"computed",(0,a.mapGetters)(["isLogin","cartNum"])),f(r,"watch",{configData:{handler:function(e,n){var r=this,a=t.createSelectorQuery().in(this);this.newData=e,this.$nextTick((function(){a.select("#target").boundingClientRect((function(e){t.$emit("footHeight",e.height),e&&(r.footHeight=e.height+50)})).exec()}))},deep:!0}}),f(r,"created",(function(){var t=getCurrentPages(),e=t[t.length-1].route;this.activeRouter="/"+e})),f(r,"onShow",(function(){})),f(r,"mounted",(function(){var e=this;(0,o.getNavigation)().then((function(n){t.setStorageSync("pageFoot",n.data),e.$store.commit("FOOT_UPLOAD",n.data),e.newData=n.data}));t.hideTabBar(),this.newData=this.$store.state.app.pageFooter,this.isLogin&&this.getCartNum()})),f(r,"data",(function(){return{newData:{},activeRouter:"/",footHeight:0}})),f(r,"methods",{goRouter:function(e){var n=getCurrentPages(),r=n[n.length-1].$page.fullPath;e.link!=r&&t.switchTab({url:e.link,fail:function(n){t.redirectTo({url:e.link})}})},getCartNum:function(){var t=this,e=this;(0,i.getCartCounts)().then((function(n){e.cartCount=n.data.count,t.$store.commit("indexData/setCartNum",n.data.count>99?"...":n.data.count)}))}}),r);e.default=s}).call(this,n("543d")["default"])},8247:function(t,e,n){"use strict";n.r(e);var r=n("5d9e"),a=n.n(r);for(var o in r)"default"!==o&&function(t){n.d(e,t,(function(){return r[t]}))}(o);e["default"]=a.a},"886e":function(t,e,n){},9524:function(t,e,n){"use strict";var r=n("886e"),a=n.n(r);a.a},d642:function(t,e,n){"use strict";var r;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return r}));var a=function(){var t=this,e=t.$createElement;t._self._c},o=[]},fa6b:function(t,e,n){"use strict";n.r(e);var r=n("d642"),a=n("8247");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("9524");var i,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"b1e34bb2",null,!1,r["a"],i);e["default"]=c.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/pageFooter/index-create-component',
    {
        'components/pageFooter/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("fa6b"))
        })
    },
    [['components/pageFooter/index-create-component']]
]);