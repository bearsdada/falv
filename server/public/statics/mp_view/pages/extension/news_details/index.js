(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/extension/news_details/index"],{"0d9f":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={jyfParser:function(){return Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(n.bind(null,"7772"))}},o=function(){var t=this,e=t.$createElement,n=(t._self._c,t.store_info.id?t.$t("￥"):null),i=t.store_info.id?t.$t("￥"):null,o=t.store_info.id?t.$t("查看商品"):null,a=t.$t("和好友一起分享");t.$mp.data=Object.assign({},{$root:{m0:n,m1:i,m2:o,m3:a}})},a=[]},"6f2e":function(t,e,n){"use strict";n.r(e);var i=n("0d9f"),o=n("c440");for(var a in o)"default"!==a&&function(t){n.d(e,t,(function(){return o[t]}))}(a);n("9532");var r,s=n("f0c5"),u=Object(s["a"])(o["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],r);e["default"]=u.exports},"72af":function(t,e,n){"use strict";(function(t){n("7b91");i(n("66fd"));var e=i(n("6f2e"));function i(t){return t&&t.__esModule?t:{default:t}}wx.__webpack_require_UNI_MP_PLUGIN__=n,t(e.default)}).call(this,n("543d")["createPage"])},9532:function(t,e,n){"use strict";var i=n("a281"),o=n.n(i);o.a},"9d5d":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("a656"),o=a(n("9ad2"));function a(t){return t&&t.__esModule?t:{default:t}}var r=function(){n.e("pages/extension/components/shareInfo/index").then(function(){return resolve(n("c839"))}.bind(null,n)).catch(n.oe)},s=function(){Promise.all([n.e("common/vendor"),n.e("components/home/index")]).then(function(){return resolve(n("a25b"))}.bind(null,n)).catch(n.oe)},u=function(){Promise.all([n.e("common/vendor"),n.e("components/jyf-parser/jyf-parser")]).then(function(){return resolve(n("7772"))}.bind(null,n)).catch(n.oe)},c={components:{shareInfo:r,home:s,"jyf-parser":u},mixins:[o.default],data:function(){return{id:0,articleInfo:[],store_info:{},content:"",shareInfoStatus:!1,tagStyle:{img:"width:100%;display:block;",table:"width:100%",video:"width:100%"}}},onLoad:function(e){e.hasOwnProperty("id")?this.id=e.id:t.navigateBack({delta:1})},onShow:function(){this.getArticleOne()},methods:{getArticleOne:function(){var e=this;(0,i.getArticleDetails)(e.id).then((function(n){t.setNavigationBarTitle({title:n.data.title.substring(0,7)+"..."}),e.$set(e,"articleInfo",n.data),e.$set(e,"store_info",n.data.store_info?n.data.store_info:{}),e.content=n.data.content}))},listenerActionSheet:function(){this.shareInfoStatus=!0},setShareInfoStatus:function(){this.shareInfoStatus=!1},setShareInfo:function(){var t=location.href+"&spid="+this.$store.state.app.uid,e={title:this.articleInfo.title,desc:this.articleInfo.synopsis,link:t,imgUrl:this.articleInfo.image_input.length?this.articleInfo.image_input[0]:""};this.$wechat.wechatEvevt(["updateAppMessageShareData","updateTimelineShareData","onMenuShareAppMessage","onMenuShareTimeline"],e)}}};e.default=c}).call(this,n("543d")["default"])},a281:function(t,e,n){},c440:function(t,e,n){"use strict";n.r(e);var i=n("9d5d"),o=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=o.a}},[["72af","common/runtime","common/vendor"]]]);