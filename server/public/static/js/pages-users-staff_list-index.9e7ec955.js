(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-users-staff_list-index"],{"01be":function(t,e,i){"use strict";var o=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("26cb"),n=o(i("9ad2")),s=i("168b"),r={name:"Home",props:{},mixins:[n.default],data:function(){return{top:"545",imgHost:s.HTTP_REQUEST_URL}},computed:(0,a.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=r},1991:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,".pictrueBox[data-v-7df30af6]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-7df30af6]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-7df30af6]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-7df30af6]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-7df30af6]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-7df30af6]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-7df30af6]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"6b11":function(t,e,i){"use strict";var o=i("9e2d"),a=i.n(o);a.a},"6cc7":function(t,e,i){"use strict";i.r(e);var o=i("f9e8"),a=i("d0f6");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("6b11");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"28a977d2",null,!1,o["a"],s);e["default"]=c.exports},8946:function(t,e,i){var o=i("24fb");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.invoice-mask[data-v-28a977d2]{background-color:#ccc;opacity:.7}.promoter-list .nav[data-v-28a977d2]{background-color:#fff;height:%?86?%;line-height:%?86?%;font-size:%?28?%;color:#282828;border-bottom:%?1?% solid #eee}.promoter-list .nav .item.on[data-v-28a977d2]{border-bottom:%?5?% solid #e93323;color:#e93323}.promoter-list .search[data-v-28a977d2]{width:100%;background-color:#fff;height:%?86?%;padding-left:%?30?%;box-sizing:border-box}.promoter-list .search .input[data-v-28a977d2]{width:%?610?%;height:%?60?%;border-radius:%?50?%;background-color:#f5f5f5;text-align:center;position:relative}.promoter-list .name[data-v-28a977d2]{display:flex}.promoter-list .name .invitation[data-v-28a977d2]{background-color:#fff;border-radius:%?6?%;padding:%?0?% %?10?%;margin-left:%?20?%;color:#d13d25}.promoter-list .search .input uni-input[data-v-28a977d2]{height:100%;font-size:%?26?%;width:%?610?%;text-align:center}.promoter-list .search .input .placeholder[data-v-28a977d2]{color:#bbb}.promoter-list .search .input .iconfont[data-v-28a977d2]{position:absolute;right:%?28?%;color:#999;font-size:%?28?%;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.promoter-list .search .iconfont[data-v-28a977d2]{font-size:%?45?%;color:#515151;width:%?110?%;height:%?60?%;line-height:%?60?%}.promoter-list .list[data-v-28a977d2]{margin-top:%?12?%}.promoter-list .list .sortNav[data-v-28a977d2]{background-color:#fff;height:%?76?%;border-bottom:%?1?% solid #eee;color:#333;font-size:%?28?%}.promoter-list .list .sortNav .sortItem[data-v-28a977d2]{text-align:center;flex:1}.promoter-list .list .sortNav .sortItem uni-image[data-v-28a977d2]{width:%?24?%;height:%?24?%;margin-left:%?6?%;vertical-align:%?-3?%}.promoter-list .list .item[data-v-28a977d2]{background-color:#fff;border-bottom:%?1?% solid #eee;height:%?152?%;padding:0 %?30?% 0 %?20?%;font-size:%?24?%;color:#666}.item-btn[data-v-28a977d2]{display:flex;align-items:center;justify-content:flex-end;background-color:#fff}.clear[data-v-28a977d2],\n.change[data-v-28a977d2]{padding:%?5?% %?15?%;margin:%?10?%;border-radius:%?6?%}.clear[data-v-28a977d2]{background-color:#ccc;color:#fff}.change[data-v-28a977d2]{background-color:#de4d36;color:#fff}.promoter-list .list .item .picTxt[data-v-28a977d2]{width:%?440?%}.promoter-list .list .item .picTxt .pictrue[data-v-28a977d2]{width:%?106?%;height:%?106?%;border-radius:50%}.promoter-list .list .item .picTxt .pictrue uni-image[data-v-28a977d2]{width:100%;height:100%;border-radius:50%;border:%?3?% solid #fff;box-shadow:0 0 %?10?% #aaa;box-sizing:border-box}.promoter-list .list .item .picTxt .text[data-v-28a977d2]{width:%?304?%;font-size:%?24?%;color:#666}.promoter-list .list .item .picTxt .text .name[data-v-28a977d2]{font-size:%?28?%;color:#333;margin-bottom:%?13?%}.promoter-list .list .item .right[data-v-28a977d2]{width:%?240?%;text-align:right;font-size:%?22?%;color:#333}.promoter-list .list .item .right .num[data-v-28a977d2]{margin-right:%?7?%}.refund-input[data-v-28a977d2]{position:fixed;bottom:0;left:0;width:100%;border-radius:%?16?% %?16?% 0 0;background-color:#fff;z-index:99;padding:%?40?% 0 %?70?% 0;transition:all .3s cubic-bezier(.25,.5,.5,.9);-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.refund-input .refund-input-title[data-v-28a977d2]{font-size:%?32?%;margin-bottom:%?60?%;color:#282828}.refund-input .refund-input-sty[data-v-28a977d2]{border:1px solid #ddd;padding:%?20?% %?20?%;border-radius:%?40?%;width:100%;margin:%?20?% %?65?%}.refund-input .input-msg[data-v-28a977d2]{display:flex;flex-direction:column;justify-content:center;align-items:center;position:relative;margin:0 %?65?%}.refund-input .input-msg .iconfont[data-v-28a977d2]{position:absolute;font-size:%?32?%;color:#282828;top:%?8?%;right:%?-30?%}.refund-input .refund-bth[data-v-28a977d2]{display:flex;margin:0 %?65?%;margin-top:%?20?%;justify-content:space-around;width:100%}.refund-input .refund-bth .close-refund[data-v-28a977d2]{padding:%?24?% %?80?%;border-radius:%?80?%;color:#fff;background-color:#ccc}.refund-input .refund-bth .submit-refund[data-v-28a977d2]{width:100%;padding:%?24?% %?0?%;text-align:center;border-radius:%?80?%;color:#fff;background-color:#f62c2c}.refund-input.on[data-v-28a977d2]{-webkit-transform:translateZ(0);transform:translateZ(0)}.poster-pop[data-v-28a977d2]{width:%?450?%;height:%?450?%;position:fixed;padding:%?10?%;background-color:#fff;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:399;top:50%;margin-top:%?-357?%}.poster-pop uni-image[data-v-28a977d2]{width:100%;height:100%;display:block}.poster-pop .close[data-v-28a977d2]{width:%?46?%;height:%?75?%;position:fixed;right:0;top:%?-73?%;display:block}.poster-pop .save-poster[data-v-28a977d2]{background-color:#df2d0a;font-size:：22rpx;color:#fff;text-align:center;height:%?76?%;line-height:%?76?%;width:100%}.poster-pop .keep[data-v-28a977d2]{color:#fff;text-align:center;font-size:%?25?%;margin-top:%?30?%}',""]),t.exports=e},"8ccc":function(t,e,i){"use strict";var o=i("4ea4");i("99af"),i("4e82"),i("a434"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i("816a"),n=i("a368"),s=i("26cb"),r=o(i("a25b")),c=o(i("9ad2")),d=o(i("e7e3")),u={components:{home:r.default,zbCode:d.default},mixins:[c.default],data:function(){return{total:0,totalLevel:0,agent_percent:null,teamCount:0,page:1,limit:20,keyword:"",sort:"",grade:0,uid:0,status:!1,recordList:[],refund_close:!1,isAuto:!1,isShowAuth:!1,codeShow:!1,cid:"1",ifShow:!0,val:"",size:400,unit:"upx",background:"#FFF",foreground:"#000",pdground:"#000",icon:"",iconsize:70,lv:3,onval:!0,loadMake:!0,src:"",codeSrc:"",codeModal:!1}},computed:(0,s.mapGetters)(["isLogin"]),onLoad:function(){this.isLogin?this.userSpreadNewList():(0,n.toLogin)()},onShow:function(){this.is_show&&this.userSpreadNewList()},onHide:function(){this.is_show=!0},methods:{qrR:function(t){this.codeSrc=t},showCode:function(){this.codeModal=!0},posterImageClose:function(){this.codeModal=!1},onLoadFun:function(t){this.userSpreadNewList()},authColse:function(t){this.isShowAuth=t},setSort:function(t){var e=this;e.sort=t,e.page=1,e.limit=20,e.status=!1,e.$set(e,"recordList",[]),e.userSpreadNewList()},submitForm:function(){this.page=1,this.limit=20,this.status=!1,this.$set(this,"recordList",[]),this.userSpreadNewList()},clear:function(t,e){var i=this;uni.showModal({title:i.$t("删除员工"),content:i.$t("确定删除该员工?"),success:function(o){if(o.confirm)(0,a.delClerkPercent)(t.uid).then((function(t){return i.recordList.splice(e,1),i.$set(i,"recordList",i.recordList),i.$util.Tips({title:i.$t("删除成功"),icon:"success"})})).catch((function(t){return i.$util.Tips({title:t})}));else if(o.cancel)return i.$util.Tips({title:i.$t("已取消")})}})},changeData:function(t){this.refund_close=!0,this.uid=t.uid},refundSubmit:function(){var t=this;if(this.agent_percent<0)return this.$util.Tips({title:this.$t("请输入比例")});(0,a.setClerkPercent)({agent_percent:this.agent_percent,uid:this.uid}).then((function(e){t.$util.Tips({title:e.msg,icon:"success"},(function(){t.refund_close=!1,t.page=1,t.limit=20,t.keyword="",t.sort="",t.status=!1,t.$set(t,"recordList",[]),t.userSpreadNewList()}))})).catch((function(e){t.$util.Tips({title:e})}))},setType:function(t){this.grade!=t&&(this.grade=t,this.page=1,this.limit=20,this.keyword="",this.sort="",this.status=!1,this.$set(this,"recordList",[]),this.userSpreadNewList())},userSpreadNewList:function(){var t=this,e=t.page,i=t.limit,o=t.status,n=t.keyword,s=t.sort,r=t.grade,c=t.recordList,d=[];1!=o&&(0,a.clerkPeople)({page:e,limit:i,keyword:n,grade:r,sort:s}).then((function(o){var a=o.data.list.length,n=o.data.list;d=c.concat(n),t.total=o.data.total,t.totalLevel=o.data.totalLevel,t.teamCount=o.data.count,t.codeSrc=o.data.codeUrl,t.status=i>a,t.page=e+1,t.$set(t,"recordList",d)}))}},onReachBottom:function(){this.userSpreadNewList()}};e.default=u},"9e2d":function(t,e,i){var o=i("8946");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("c171026c",o,!0,{sourceMap:!1,shadowMode:!1})},a25b:function(t,e,i){"use strict";i.r(e);var o=i("eb7d"),a=i("b5b4");for(var n in a)"default"!==n&&function(t){i.d(e,t,(function(){return a[t]}))}(n);i("d916");var s,r=i("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"7df30af6",null,!1,o["a"],s);e["default"]=c.exports},b5b4:function(t,e,i){"use strict";i.r(e);var o=i("01be"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},c6cf:function(t,e,i){var o=i("1991");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var a=i("4f06").default;a("cc38ccfc",o,!0,{sourceMap:!1,shadowMode:!1})},d0f6:function(t,e,i){"use strict";i.r(e);var o=i("8ccc"),a=i.n(o);for(var n in o)"default"!==n&&function(t){i.d(e,t,(function(){return o[t]}))}(n);e["default"]=a.a},d916:function(t,e,i){"use strict";var o=i("c6cf"),a=i.n(o);a.a},eb7d:function(t,e,i){"use strict";var o;i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticStyle:{"touch-action":"none"}},[i("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?i("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[i("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),i("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),i("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),i("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?t.imgHost+"/statics/images/close.gif":t.imgHost+"/statics/images/open.gif"}})],1)],1)],1)],1)],1)},n=[]},f9e8:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){return o}));var o={zbCode:i("e7e3").default},a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"promoter-list"},[i("v-uni-view",{staticClass:"promoterHeader bg-color"},[i("v-uni-view",{staticClass:"headerCon acea-row row-between-wrapper"},[i("v-uni-view",[i("v-uni-view",{staticClass:"name"},[t._v(t._s(t.$t("员工人数"))),i("v-uni-view",{staticClass:"invitation",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.showCode.apply(void 0,arguments)}}},[t._v(t._s(t.$t("邀请")))])],1),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(t.teamCount))]),t._v(t._s(t.$t("人")))],1)],1),i("v-uni-view",{staticClass:"iconfont icon-tuandui"})],1)],1),i("v-uni-view",{staticClass:"list"},[t._l(t.recordList,(function(e,o){return[i("v-uni-view",{key:o+"_0",staticClass:"item acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.avatar}})],1),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.nickname))]),i("v-uni-view",[t._v(t._s(t.$t("加入时间"))+": "+t._s(e.division_change_time))]),i("v-uni-view",[t._v(t._s(t.$t("分佣比例"))+": "+t._s(e.division_percent)+"%")])],1)],1),i("v-uni-view",{staticClass:"right"},[i("v-uni-view",[i("v-uni-text",{staticClass:"num font-color"},[t._v(t._s(e.childCount?e.childCount:0))]),t._v(t._s(t.$t("人")))],1),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.orderCount?e.orderCount:0))]),t._v(t._s(t.$t("单")))],1),i("v-uni-view",[i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.numberCount?e.numberCount:0))]),t._v(t._s(t.$t("元")))],1)],1)],1),i("v-uni-view",{key:o+"_1",staticClass:"item-btn"},[i("v-uni-view",{staticClass:"change",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.changeData(e)}}},[t._v(t._s(t.$t("修改分佣比例")))]),i("v-uni-view",{staticClass:"clear",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clear(e,o)}}},[t._v(t._s(t.$t("删除")))])],1)]}))],2)],1),i("home"),i("v-uni-view",{staticClass:"refund-input",class:t.refund_close?"on":""},[i("v-uni-view",{staticClass:"input-msg"},[i("v-uni-text",{staticClass:"iconfont icon-guanbi5",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.refund_close=!1}}}),i("v-uni-view",{staticClass:"refund-input-title"},[t._v(t._s(t.$t("修改分佣比例")))]),i("v-uni-view",{staticClass:"refund-input-sty"},[i("v-uni-input",{attrs:{type:"number",placeholder:t.$t("请输入百分比")},model:{value:t.agent_percent,callback:function(e){t.agent_percent=e},expression:"agent_percent"}})],1),i("v-uni-view",{staticClass:"refund-bth"},[i("v-uni-view",{staticClass:"submit-refund",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.refundSubmit()}}},[t._v(t._s(t.$t("提交")))])],1)],1)],1),t.refund_close?i("v-uni-view",{staticClass:"mask invoice-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.refund_close=!1}}}):t._e(),t.codeModal?i("v-uni-view",{staticClass:"mask invoice-mask",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.codeModal=!1}}}):t._e(),t.codeModal?i("v-uni-view",{staticClass:"poster-pop"},[i("v-uni-image",{staticClass:"close",attrs:{src:"/static/images/poster-close.png"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.posterImageClose.apply(void 0,arguments)}}}),i("v-uni-image",{attrs:{src:t.codeSrc}}),i("v-uni-view",{staticClass:"keep"},[t._v(t._s(t.$t("长按图片可以保存到手机")))])],1):t._e(),i("zb-code",{ref:"qrcode",attrs:{show:t.codeShow,cid:t.cid,val:t.val,size:t.size,unit:t.unit,background:t.background,foreground:t.foreground,pdground:t.pdground,icon:t.icon,iconSize:t.iconsize,onval:t.onval,loadMake:t.loadMake},on:{result:function(e){arguments[0]=e=t.$handleEvent(e),t.qrR.apply(void 0,arguments)}}})],1)},n=[]}}]);