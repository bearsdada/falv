(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/users/user_get_coupon/index"],{"0421":function(t,n,e){"use strict";var o=e("d5f1"),i=e.n(o);i.a},2740:function(t,n,e){"use strict";e.r(n);var o=e("dac8"),i=e("7023");for(var u in i)"default"!==u&&function(t){e.d(n,t,(function(){return i[t]}))}(u);e("0421");var s,c=e("f0c5"),a=Object(c["a"])(i["default"],o["b"],o["c"],!1,null,"ffaf7d64",null,!1,o["a"],s);n["default"]=a.exports},7023:function(t,n,e){"use strict";e.r(n);var o=e("93f7"),i=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,(function(){return o[t]}))}(u);n["default"]=i.a},"93f7":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=e("a656"),i=e("a368"),u=e("26cb"),s=a(e("9ad2")),c=e("168b");function a(t){return t&&t.__esModule?t:{default:t}}var l=function(){e.e("components/Authorize").then(function(){return resolve(e("cacf"))}.bind(null,e)).catch(e.oe)},r=function(){Promise.all([e.e("common/vendor"),e.e("components/home/index")]).then(function(){return resolve(e("a25b"))}.bind(null,e)).catch(e.oe)},d={components:{authorize:l,home:r},mixins:[s.default],data:function(){return{imgHost:c.HTTP_REQUEST_URL,couponsList:[],loading:!1,loadend:!1,loadTitle:this.$t("加载更多"),page:1,limit:20,isAuto:!1,isShowAuth:!1,type:0,navList:[{type:0,name:this.$t("通用券"),count:0},{type:1,name:this.$t("品类券"),count:0},{type:2,name:this.$t("商品券"),count:0}],count:0}},computed:(0,u.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,n){t&&this.getUseCoupons()},deep:!0}},onLoad:function(){this.isLogin||(0,i.toLogin)()},onReachBottom:function(){this.getUseCoupons()},methods:{onLoadFun:function(){this.getUseCoupons()},authColse:function(t){this.isShowAuth=t},getCoupon:function(t,n){var e=this,i=e.couponsList;(0,o.setCouponReceive)(t).then((function(t){i[n].is_use=!0,e.$set(e,"couponsList",i),e.$util.Tips({title:e.$t("领取成功")})})).catch((function(t){return e.$util.Tips({title:t})}))},getUseCoupons:function(){var t=this;return!this.loadend&&(!this.loading&&(t.loading=!0,t.loadTitle=t.$t("加载更多"),void(0,o.getCoupons)({type:t.type,page:t.page,limit:t.limit}).then((function(n){var e=n.data.list,o=e.length<t.limit,i=t.$util.SplitArray(e,t.couponsList);n.data.count.forEach((function(n,e){t.navList[e].count=n,n&&t.count++})),t.$set(t,"couponsList",i),t.loadend=o,t.loading=!1,t.loadTitle=o?t.$t("我也是有底线的"):t.$t("加载更多"),t.page=t.page+1})).catch((function(n){t.loading=!1,t.loadTitle=t.$t("加载更多")}))))},setType:function(t){this.type!==t&&(this.type=t,this.couponsList=[],this.page=1,this.loadend=!1,this.getUseCoupons())}}};n.default=d},d5f1:function(t,n,e){},dac8:function(t,n,e){"use strict";var o;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return o}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.$t("￥")),o=t.couponsList.length?t.__map(t.couponsList,(function(n,e){var o=t.__get_orig(n),i=n.use_min_price>0?t.$t("满"):null,u=n.use_min_price>0?t.$t("元可用"):null,s=n.use_min_price>0?null:t.$t("无门槛券"),c=0===n.type?t.$t("通用劵"):null,a=0!==n.type&&1===n.type?t.$t("品类券"):null,l=0!==n.type&&1!==n.type?t.$t("商品券"):null,r=t.$t(n.title),d=n.coupon_time?t.$t("领取后"):null,f=n.coupon_time?t.$t("天内可用"):null,p=1==n.is_use?t.$t("已领取"):null,m=1!=n.is_use&&2==n.is_use?t.$t("已领完"):null,h=1!=n.is_use&&2!=n.is_use?t.$t("立即领取"):null;return{$orig:o,m1:i,m2:u,m3:s,m4:c,m5:a,m6:l,m7:r,m8:d,m9:f,m10:p,m11:m,m12:h}})):null;t.$mp.data=Object.assign({},{$root:{m0:e,l0:o}})},u=[]},e803:function(t,n,e){"use strict";(function(t){e("7b91");o(e("66fd"));var n=o(e("2740"));function o(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=e,t(n.default)}).call(this,e("543d")["createPage"])}},[["e803","common/runtime","common/vendor"]]]);