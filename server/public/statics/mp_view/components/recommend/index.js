(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/recommend/index"],{"0275":function(t,n,e){"use strict";var u;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return u}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("热门推荐")),u=t.$t("￥"),i=t.__map(t.hostProduct,(function(n,e){var u=t.__get_orig(n),i=n.activity&&"1"===n.activity.type?t.$t("秒杀"):null,a=n.activity&&"2"===n.activity.type?t.$t("砍价"):null,c=n.activity&&"3"===n.activity.type?t.$t("拼团"):null;return{$orig:u,m1:i,m2:a,m3:c}}));t.$mp.data=Object.assign({},{$root:{m0:e,m4:u,l0:i}})},a=[]},"0665":function(t,n,e){"use strict";e.r(n);var u=e("4512"),i=e.n(u);for(var a in u)"default"!==a&&function(t){e.d(n,t,(function(){return u[t]}))}(a);n["default"]=i.a},"0dc4":function(t,n,e){},4512:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=e("26cb"),i=e("a43a"),a=c(e("9ad2"));function c(t){return t&&t.__esModule?t:{default:t}}var r={computed:(0,u.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[a.default],data:function(){return{}},methods:{goDetail:function(n){(0,i.goShopDetail)(n,this.uid).then((function(e){t.navigateTo({url:"/pages/goods_details/index?id=".concat(n.id)})}))}}};n.default=r}).call(this,e("543d")["default"])},"918e":function(t,n,e){"use strict";var u=e("0dc4"),i=e.n(u);i.a},ef32:function(t,n,e){"use strict";e.r(n);var u=e("0275"),i=e("0665");for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);e("918e");var c,r=e("f0c5"),o=Object(r["a"])(i["default"],u["b"],u["c"],!1,null,"174ced20",null,!1,u["a"],c);n["default"]=o.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/recommend/index-create-component',
    {
        'components/recommend/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("ef32"))
        })
    },
    [['components/recommend/index-create-component']]
]);
