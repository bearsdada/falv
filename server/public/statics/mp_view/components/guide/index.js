(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/guide/index"],{5622:function(t,e,n){},"782e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{autoplay:!1,duration:500,jumpover:this.$t("跳过"),experience:this.$t("立即体验"),timecount:void 0,times:0}},props:{advData:{type:Object,default:function(){}},closeType:{type:Number,default:1}},mounted:function(){this.timer()},methods:{timer:function(){var t=this;this.times=this.advData.time;var e=this.advData.time||5;this.timecount=setInterval((function(){e--,t.times=e,e<=0&&(clearInterval(t.timecount),t.launchFlag())}),1e3)},launchFlag:function(){clearInterval(this.timecount),t.switchTab({url:"/pages/index/index"})},jump:function(e){e&&(-1!=e.indexOf("http")?t.navigateTo({url:"/pages/annex/web_view/index?url=".concat(e)}):t.navigateTo({url:e,fail:function(){t.switchTab({url:e})}}),clearInterval(this.timecount))}}};e.default=n}).call(this,n("543d")["default"])},"84ec":function(t,e,n){"use strict";n.r(e);var a=n("782e"),i=n.n(a);for(var u in a)"default"!==u&&function(t){n.d(e,t,(function(){return a[t]}))}(u);e["default"]=i.a},b675:function(t,e,n){"use strict";n.r(e);var a=n("f645"),i=n("84ec");for(var u in i)"default"!==u&&function(t){n.d(e,t,(function(){return i[t]}))}(u);n("ddb0");var c,r=n("f0c5"),o=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"5d7c1766",null,!1,a["a"],c);e["default"]=o.exports},ddb0:function(t,e,n){"use strict";var a=n("5622"),i=n.n(a);i.a},f645:function(t,e,n){"use strict";var a;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return u})),n.d(e,"a",(function(){return a}));var i=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("跳过"));t.$mp.data=Object.assign({},{$root:{m0:n}})},u=[]}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/guide/index-create-component',
    {
        'components/guide/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("b675"))
        })
    },
    [['components/guide/index-create-component']]
]);
