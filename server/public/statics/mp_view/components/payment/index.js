(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/payment/index"],{"0a85":function(t,e,n){"use strict";var i=n("9279"),a=n.n(i);a.a},"2fe8":function(t,e,n){"use strict";var i;n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return i}));var a=function(){var t=this,e=t.$createElement,n=(t._self._c,t.$t("选择付款方式")),i=t.__map(t.payMode,(function(e,n){var i=t.__get_orig(e),a=e.payStatus&&"yue"==e.value?t.$t("￥"):null;return{$orig:i,m1:a}})),a=t.$t("支付"),o=t.$t("￥"),u=t.$t("去付款");t.$mp.data=Object.assign({},{$root:{m0:n,l0:i,m2:a,m3:o,m4:u}})},o=[]},7522:function(t,e,n){"use strict";n.r(e);var i=n("e877"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},"7c54":function(t,e,n){"use strict";n.r(e);var i=n("2fe8"),a=n("7522");for(var o in a)"default"!==o&&function(t){n.d(e,t,(function(){return a[t]}))}(o);n("0a85");var u,r=n("f0c5"),c=Object(r["a"])(a["default"],i["b"],i["c"],!1,null,"9f54293c",null,!1,i["a"],u);e["default"]=c.exports},9279:function(t,e,n){},e877:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n("5ba0"),a=o(n("9ad2"));function o(t){return t&&t.__esModule?t:{default:t}}var u={props:{payMode:{type:Array,default:function(){return[]}},pay_close:{type:Boolean,default:!1},order_id:{type:String,default:""},totalPrice:{type:String,default:"0"},isCall:{type:Boolean,default:!1},friendPay:{type:Boolean,default:!1}},mixins:[a.default],data:function(){return{formContent:"",active:0,paytype:"",number:0}},watch:{payMode:{handler:function(t,e){var n=[];t.forEach((function(t,e){t.payStatus&&(t.index=e,n.push(t))})),this.active=n[0].index,this.paytype=n[0].value,this.number=n[0].number||0},immediate:!0,deep:!0}},methods:{payType:function(t,e,n){this.active=n,this.paytype=e,this.number=t,this.$emit("changePayType",e)},close:function(){this.$emit("onChangeFun",{action:"payClose"})},goPay:function(e,n){if(this.isCall)return this.$emit("onChangeFun",{action:"payCheck",value:n});var a=this;return a.order_id?"yue"==n&&parseFloat(e)<parseFloat(a.totalPrice)?a.$util.Tips({title:a.$t("余额不足")}):(t.showLoading({title:a.$t("支付中")}),"friend"==n&&a.order_id?t.navigateTo({url:"/pages/users/payment_on_behalf/index?order_id="+a.order_id+"&spread="+this.$store.state.app.uid,success:function(t){},fail:function(){},complete:function(){}}):void(0,i.orderPay)({uni:a.order_id,paytype:n,type:a.friendPay?1:0,from:"routine"}).then((function(e){var i=e.data.result.jsConfig;switch(n){case"weixin":if(void 0===e.data.result)return a.$util.Tips({title:a.$t("缺少支付参数")});var o="";o=t.requestOrderPayment?"requestOrderPayment":"requestPayment",t[o]({timeStamp:i.timestamp,nonceStr:i.nonceStr,package:i.package,signType:i.signType,paySign:i.paySign,success:function(e){return t.hideLoading(),a.$util.Tips({title:e.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}))},fail:function(e){return t.hideLoading(),a.$util.Tips({title:a.$t("取消支付")},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))},complete:function(e){if(t.hideLoading(),"requestPayment:cancel"==e.errMsg||"requestOrderPayment:cancel"==e.errMsg)return a.$util.Tips({title:a.$t("取消支付")},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}});break;case"yue":return t.hideLoading(),a.$util.Tips({title:e.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"offline":return t.hideLoading(),a.$util.Tips({title:e.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"friend":return t.hideLoading(),a.$util.Tips({title:e.msg,icon:"success"},(function(){a.$emit("onChangeFun",{action:"pay_complete"})}));case"alipay":t.hideLoading(),t.navigateTo({url:"/pages/users/alipay_invoke/index?id=".concat(e.data.result.order_id,"&link=").concat(e.data.result.jsConfig.qrCode)});break}})).catch((function(e){return t.hideLoading(),a.$util.Tips({title:e},(function(){a.$emit("onChangeFun",{action:"pay_fail"})}))}))):a.$util.Tips({title:a.$t("请选择要支付的订单")})}}};e.default=u}).call(this,n("543d")["default"])}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/payment/index-create-component',
    {
        'components/payment/index-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("7c54"))
        })
    },
    [['components/payment/index-create-component']]
]);
