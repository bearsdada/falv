(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/promoter_rank/index"],{"109c":function(t,n,e){"use strict";e.r(n);var i=e("46fe"),o=e.n(i);for(var a in i)"default"!==a&&function(t){e.d(n,t,(function(){return i[t]}))}(a);n["default"]=o.a},"204f":function(t,n,e){},"25db":function(t,n,e){"use strict";(function(t){e("7b91");i(e("66fd"));var n=i(e("3105"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])},3105:function(t,n,e){"use strict";e.r(n);var i=e("c04b"),o=e("109c");for(var a in o)"default"!==a&&function(t){e.d(n,t,(function(){return o[t]}))}(a);e("7de5");var s,u=e("f0c5"),r=Object(u["a"])(o["default"],i["b"],i["c"],!1,null,"18190072",null,!1,i["a"],s);n["default"]=r.exports},"46fe":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e("816a"),o=e("a368"),a=e("26cb"),s=u(e("9ad2"));function u(t){return t&&t.__esModule?t:{default:t}}var r=function(){e.e("components/Authorize").then(function(){return resolve(e("cacf"))}.bind(null,e)).catch(e.oe)},c=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},l={components:{authorize:r,home:c},mixins:[s.default],data:function(){return{navList:[this.$t("周榜"),this.$t("月榜")],active:0,page:1,limit:10,type:"week",loading:!1,loadend:!1,rankList:[],Two:{},One:{},Three:{},isAuto:!1,isShowAuth:!1}},computed:(0,a.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getRanklist()},deep:!0}},onLoad:function(){this.isLogin?this.getRanklist():(0,o.toLogin)()},methods:{onLoadFun:function(){this.getRanklist()},authColse:function(t){this.isShowAuth=t},getRanklist:function(){var t=this;t.loadend||t.loading||(t.loading=!0,(0,i.getRankList)({page:t.page,limit:t.limit,type:t.type}).then((function(n){var e=n.data;t.rankList.push.apply(t.rankList,e),1==t.page&&(t.One=t.rankList.shift()||{},t.Two=t.rankList.shift()||{},t.Three=t.rankList.shift()||{}),t.loadend=e.length<t.limit,t.loading=!1,t.$set(t,"rankList",t.rankList),t.One=t.One,t.Two=t.Two,t.Three=t.Three,t.page=t.page+1})).catch((function(n){t.loading=!1})))},switchTap:function(t){this.active!==t&&(this.active=t,this.type=t?"month":"week",this.page=1,this.loadend=!1,this.$set(this,"rankList",[]),this.Two={},this.One={},this.Three={},this.getRanklist())}},onReachBottom:function(){this.getRanklist()}};n.default=l},"7de5":function(t,n,e){"use strict";var i=e("204f"),o=e.n(i);o.a},c04b:function(t,n,e){"use strict";var i;e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return a})),e.d(n,"a",(function(){return i}));var o=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.navList,(function(n,e){var i=t.__get_orig(n),o=t.$t(n);return{$orig:i,m0:o}}))),i=t.Two.uid?t.$t("人"):null,o=t.One.uid?t.$t("人"):null,a=t.Three.uid?t.$t("人"):null,s=t.$t("人");t.$mp.data=Object.assign({},{$root:{l0:e,m1:i,m2:o,m3:a,m4:s}})},a=[]}},[["25db","common/runtime","common/vendor"]]]);