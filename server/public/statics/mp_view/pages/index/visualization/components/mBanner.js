(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/visualization/components/mBanner"],{7812:function(t,n,e){"use strict";var a;e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return s})),e.d(n,"a",(function(){return a}));var i=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isIframe&&!t.bastBanner.length?t.$t("暂无图片，请上传图片"):null);t.$mp.data=Object.assign({},{$root:{m0:e}})},s=[]},"7a67":function(t,n,e){"use strict";e.r(n);var a=e("7812"),i=e("d4a7");for(var s in i)"default"!==s&&function(t){e.d(n,t,(function(){return i[t]}))}(s);e("e009");var o,r=e("f0c5"),u=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],o);n["default"]=u.exports},"815e":function(t,n,e){},c0d0:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=e("a43a"),i=getApp(),s={name:"swiperBg",props:{dataConfig:{type:Object,default:function(){}},sty:{type:String,default:"on"}},data:function(){return{indicatorDots:!1,circular:!0,autoplay:!0,interval:3e3,duration:500,bastBanner:[],name:this.$options.name,isIframe:!1,isShow:!0,imageH:375}},watch:{dataConfig:{immediate:!0,handler:function(n,e){var a=this;n&&(this.bastBanner=n.imgList.list,this.isShow=n.isShow.val,this.imgUrls=n.imgList?n.imgList.list:[],this.isShow=!n.isShow||n.isShow.val,t.getImageInfo({src:this.imgUrls.length?this.imgUrls[0].img:"",success:function(t){t&&t.height>0?a.$set(a,"imageH",t.height/t.width*690):a.$set(a,"imageH",375)},fail:function(t){a.$set(a,"imageH",375)}}))}}},created:function(){this.isIframe=i.globalData.isIframe},mounted:function(){},methods:{setDomain:function(t){return t=t?t.toString():"",t.indexOf("https://")>-1?t:t.replace("http://","https://")},goDetail:function(n){(0,a.goPage)().then((function(e){var a=n.info[1].value;-1!=a.indexOf("http")||(["/pages/goods_cate/goods_cate","/pages/order_addcart/order_addcart","/pages/user/index"].indexOf(a),t.navigateTo({url:a}))}))}}};n.default=s}).call(this,e("543d")["default"])},d4a7:function(t,n,e){"use strict";e.r(n);var a=e("c0d0"),i=e.n(a);for(var s in a)"default"!==s&&function(t){e.d(n,t,(function(){return a[t]}))}(s);n["default"]=i.a},e009:function(t,n,e){"use strict";var a=e("815e"),i=e.n(a);i.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/index/visualization/components/mBanner-create-component',
    {
        'pages/index/visualization/components/mBanner-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7a67"))
        })
    },
    [['pages/index/visualization/components/mBanner-create-component']]
]);
