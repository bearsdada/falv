(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-90836a1c"],{"2c3e":function(t,e,i){var a=i("da84"),n=i("83ab"),s=i("9f7f").MISSED_STICKY,r=i("c6b6"),o=i("edd0"),c=i("69f3").get,l=RegExp.prototype,d=a.TypeError;n&&s&&o(l,"sticky",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).sticky;throw d("Incompatible receiver, RegExp required")}}})},"2f89":function(t,e,i){},"4d63":function(t,e,i){var a=i("83ab"),n=i("da84"),s=i("e330"),r=i("94ca"),o=i("7156"),c=i("9112"),l=i("241c").f,d=i("3a9b"),h=i("44e7"),u=i("577e"),f=i("90d8"),p=i("9f7f"),m=i("aeb0"),g=i("cb2d"),v=i("d039"),y=i("1a2d"),b=i("69f3").enforce,x=i("2626"),w=i("b622"),C=i("fce3"),L=i("107c"),_=w("match"),D=n.RegExp,S=D.prototype,T=n.SyntaxError,E=s(S.exec),O=s("".charAt),R=s("".replace),j=s("".indexOf),k=s("".slice),A=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,F=/a/g,$=/a/g,M=(i=new D(F)!==F,p.MISSED_STICKY),V=p.UNSUPPORTED_Y;w=a&&(!i||M||C||L||v((function(){return $[_]=!1,D(F)!=F||D($)==$||"/a/i"!=D(F,"i")})));if(r("RegExp",w)){function I(t,e){var i,a,n=d(S,this),s=h(t),r=void 0===e,l=[],p=t;if(!n&&s&&r&&t.constructor===I)return t;if((s||d(S,t))&&(t=t.source,r&&(e=f(p))),t=void 0===t?"":u(t),e=void 0===e?"":u(e),p=t,s=e=C&&"dotAll"in F&&(i=!!e&&-1<j(e,"s"))?R(e,/s/g,""):e,M&&"sticky"in F&&(a=!!e&&-1<j(e,"y"))&&V&&(e=R(e,/y/g,"")),L&&(t=(r=function(t){for(var e,i=t.length,a=0,n="",s=[],r={},o=!1,c=!1,l=0,d="";a<=i;a++){if("\\"===(e=O(t,a)))e+=O(t,++a);else if("]"===e)o=!1;else if(!o)switch(!0){case"["===e:o=!0;break;case"("===e:E(A,k(t,a+1))&&(a+=2,c=!0),n+=e,l++;continue;case">"===e&&c:if(""===d||y(r,d))throw new T("Invalid capture group name");r[d]=!0,c=!(s[s.length]=[d,l]),d="";continue}c?d+=e:n+=e}return[n,s]}(t))[0],l=r[1]),r=o(D(t,e),n?this:S,I),(i||a||l.length)&&(e=b(r),i&&(e.dotAll=!0,e.raw=I(function(t){for(var e,i=t.length,a=0,n="",s=!1;a<=i;a++)"\\"===(e=O(t,a))?n+=e+O(t,++a):s||"."!==e?("["===e?s=!0:"]"===e&&(s=!1),n+=e):n+="[\\s\\S]";return n}(t),s)),a&&(e.sticky=!0),l.length&&(e.groups=l)),t!==p)try{c(r,"source",""===p?"(?:)":p)}catch(t){}return r}for(var B=l(D),P=0;B.length>P;)m(I,D,B[P++]);(S.constructor=I).prototype=S,g(n,"RegExp",I,{constructor:!0})}x("RegExp")},"4d92":function(t,e,i){"use strict";i.r(e);var a=i("c964"),n=(i("96cf"),i("d81d"),i("a15b"),i("b0c0"),i("a584")),s=i("c71e"),r=i("b7be"),o=i("61f7"),c=i("9901"),l=i("fd73");n={name:"index",components:{cardsData:n.a,echartsNew:s.a,echartsFrom:c.a,dateRadio:l.a},data:function(){return{timeVal:[],style:{height:"400px"},infoList:{},infoList2:{},echartLeft:!0,echartRight:!1,loading:!1,loading2:!1,fromList:{title:"选择时间",custom:!0,fromTxt:[{text:"全部",val:""},{text:"今天",val:"today"},{text:"本周",val:"week"},{text:"本月",val:"month"},{text:"本季度",val:"quarter"},{text:"本年",val:"year"}]},formValidate:{time:""},cardLists:[{col:6,count:0,name:"当前积分",className:"md-rose"},{col:6,count:0,name:"累计总积分",className:"ios-speedometer-outline"},{col:6,count:0,name:"累计消耗积分",className:"ios-speedometer-outline"}],optionData:{},spinShow:!1,options:this.$timeOptions,columns:[{title:"序号",type:"index",width:60,align:"center"},{title:"来源",key:"name",minWidth:80,align:"center"},{title:"金额",width:180,key:"value",align:"center"},{title:"占比率",slot:"percent",minWidth:100,align:"center"}],tabList:[],tabList2:[]}},created:function(){var t=new Date,e=new Date;e.setTime(e.setTime(new Date((new Date).getFullYear(),(new Date).getMonth(),(new Date).getDate()-29))),this.timeVal=[e,t],this.formValidate.time=Object(o.a)(e,"yyyy/MM/dd")+"-"+Object(o.a)(t,"yyyy/MM/dd"),this.onInit()},methods:{onInit:function(){this.getPointBasic(),this.getPointTrend(),this.getChannel(),this.getType()},onSelectDate:function(t){this.formValidate.time=t,this.onInit()},getPointBasic:function(){var t=this;Object(r.A)(this.formValidate).then((function(e){var i=["now_point","all_point","pay_point"];t.cardLists.map((function(t,a){t.count=e.data[i[a]]}))}))},getChannel:function(){var t=this;this.loading=!0,Object(r.u)(this.formValidate).then((function(e){t.infoList=e.data,t.tabList=e.data.list,t.loading=!1}))},getType:function(){var t=this;this.loading2=!0,Object(r.C)(this.formValidate).then((function(e){t.infoList2=e.data,t.tabList2=e.data.list,t.loading2=!1}))},onchangeTime:function(t){this.timeVal=t,this.formValidate.time=this.timeVal.join("-"),this.name=this.formValidate.time,this.getPointBasic(),this.getPointTrend()},getPointTrend:function(){var t=this;this.spinShow=!0,Object(r.B)(this.formValidate).then(function(){var e=Object(a.a)(regeneratorRuntime.mark((function e(i){var a,n,s,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=i.data.series.map((function(t){return t.name})),n=i.data.xAxis,s=["#5B8FF9","#5AD8A6","#FFAB2B","#5D7092"],r=[],i.data.series.map((function(t,e){r.push({name:t.name,type:"line",data:t.data,itemStyle:{normal:{color:s[e]}},smooth:0})})),t.optionData={tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{x:"center",data:a},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!0,axisLabel:{interval:0,rotate:40,textStyle:{color:"#000000"}},data:n},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}}},series:r},t.spinShow=!1;case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){t.$Message.error(e.msg),t.spinShow=!1}))}}},i("8a69"),s=i("2877"),c=Object(s.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("dateRadio",{on:{selectDate:t.onSelectDate}}),i("DatePicker",{staticClass:"mr20",staticStyle:{width:"200px"},attrs:{editable:!1,clearable:!1,value:t.timeVal,format:"yyyy/MM/dd",type:"daterange",placement:"bottom-start",placeholder:"请选择时间",options:t.options},on:{"on-change":t.onchangeTime}})],1),0<=t.cardLists.length?i("cards-data",{attrs:{cardLists:t.cardLists}}):t._e(),i("Card",{attrs:{bordered:!1,"dis-hover":""}},[i("h3",[t._v("积分使用趋势")]),t.optionData?i("echarts-new",{attrs:{"option-data":t.optionData,styles:t.style,height:"100%",width:"100%"}}):t._e()],1),t.spinShow?i("Spin",{attrs:{size:"large",fix:""}}):t._e(),i("div",{staticClass:"code-row-bg"},[i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("div",{staticClass:"acea-row row-between-wrapper"},[i("h3",{staticClass:"header-title"},[t._v("积分来源分析")]),i("div",{staticClass:"change-style",on:{click:function(e){t.echartLeft=!t.echartLeft}}},[t._v("切换样式")])]),i("div",{staticClass:"ech-box"},[t.echartLeft?i("echarts-from",{ref:"visitChart",attrs:{infoList:t.infoList,echartsTitle:"circle"}}):t._e(),i("Table",{directives:[{name:"show",rawName:"v-show",value:!t.echartLeft,expression:"!echartLeft"}],ref:"selection",attrs:{columns:t.columns,data:t.tabList,loading:t.loading,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"percent",fn:function(e){return e=e.row,[i("div",{staticClass:"percent-box"},[i("div",{staticClass:"line"},[i("div",{staticClass:"bg"}),i("div",{staticClass:"percent",style:"width:"+e.percent+"%;"})]),i("div",{staticClass:"num"},[t._v(t._s(e.percent)+"%")])])]}}])})],1)]),i("Card",{staticClass:"ivu-mt",attrs:{bordered:!1,"dis-hover":""}},[i("div",{staticClass:"acea-row row-between-wrapper"},[i("h3",{staticClass:"header-title"},[t._v("积分消耗")]),i("div",{staticClass:"change-style",on:{click:function(e){t.echartRight=!t.echartRight}}},[t._v("切换样式")])]),i("div",{staticClass:"ech-box"},[t.echartRight?i("echarts-from",{ref:"visitChart",attrs:{infoList:t.infoList2,echartsTitle:"circle"}}):t._e(),i("Table",{directives:[{name:"show",rawName:"v-show",value:!t.echartRight,expression:"!echartRight"}],ref:"selection",attrs:{columns:t.columns,data:t.tabList2,loading:t.loading2,"no-data-text":"暂无数据","highlight-row":"","no-filtered-data-text":"暂无筛选结果"},scopedSlots:t._u([{key:"percent",fn:function(e){return e=e.row,[i("div",{staticClass:"percent-box"},[i("div",{staticClass:"line"},[i("div",{staticClass:"bg"}),i("div",{staticClass:"percent",style:"width:"+e.percent+"%;"})]),i("div",{staticClass:"num"},[t._v(t._s(e.percent)+"%")])])]}}])})],1)])],1)],1)}),[],!1,null,"3b19e474",null);e.default=c.exports},"61f7":function(t,e,i){"use strict";i.d(e,"a",(function(){return s})),i.d(e,"c",(function(){return c})),i.d(e,"b",(function(){return l}));var a=i("fc11"),n=i("f3f3");function s(t,e){/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));var i,a,n={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds()};for(i in n)new RegExp("(".concat(i,")")).test(e)&&(a=n[i]+"",e=e.replace(RegExp.$1,1===RegExp.$1.length?a:("00"+a).substr(a.length)));return e}i("ac1f"),i("00b4"),i("5319"),i("4d63"),i("c607"),i("2c3e"),i("25f0"),i("498a"),i("d3b7"),i("b64b"),i("99af");var r={min:"%s最小长度为:min",max:"%s最大长度为:max",length:"%s长度必须为:length",range:"%s长度为:range",pattern:"$s格式错误"};function o(t,e){t.message=function(t){return e.replace("%s",t||"")}}function c(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Object(n.a)({required:!0,message:t,type:"string"},e)}function l(t){return d.pattern(/(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/,t)}o(c,"请输入%s"),o(l,"%s格式不正确");var d=Object.keys(r).reduce((function(t,e){return t[e]=function(t){var i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",s=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r="range"===e?{min:t[0],max:t[1]}:Object(a.a)({},e,t);return Object(n.a)(Object(n.a)({message:i.replace(":".concat(e),"range"===e?"".concat(t[0],"-").concat(t[1]):t),type:"string"},r),s)},o(t[e],r[e]),t}),{})},7443:function(t,e,i){"use strict";var a=i("b627");i.n(a).a},"8a69":function(t,e,i){"use strict";var a=i("2f89");i.n(a).a},9901:function(t,e,i){"use strict";var a=i("313e"),n=i.n(a);a={name:"index",props:{infoList:{type:Object,default:null},series:Array,echartsTitle:{type:String,default:""},yAxisData:{type:Array,default:function(){return[]}},bingXdata:Array},data:function(){return{infoLists:this.infoList,seriesArray:this.series}},watch:{infoList:{handler:function(t,e){this.infoLists=t,this.handleSetVisitChart()},deep:!0},series:{handler:function(t,e){this.seriesArray=t,this.handleSetVisitChart()},deep:!0}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=n.a.init(document.getElementById(this.echarts));var t=null;t="circle"===this.echartsTitle?{tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{orient:"vertical",left:"right",data:this.infoLists.bing_xdata||[]},series:[{name:"访问来源",type:"pie",radius:"70%",center:["50%","60%"],data:this.infoLists.bing_data||[],emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]}:{tooltip:{trigger:"axis"},toolbox:{},legend:{data:this.infoLists.legend||[]},color:["#1495EB","#00CC66","#F9D249","#ff9900","#9860DF"],grid:{left:16,right:25,bottom:10,top:40,containLabel:!0},xAxis:[{type:"category",axisLine:{lineStyle:{color:"#D7DDE4"}},axisTick:{alignWithLabel:!0,lineStyle:{color:"#D7DDE4"}},splitLine:{show:!1,lineStyle:{color:"#F5F7F9"}},axisLabel:{interval:0,rotate:40,textStyle:{color:"#7F8B9C"}},data:this.infoLists.xAxis}],yAxis:this.yAxisData.length?this.yAxisData:{axisLine:{show:!1},axisTick:{show:!1},axisLabel:{textStyle:{color:"#7F8B9C"}},splitLine:{show:!0,lineStyle:{color:"#F5F7F9"}},type:"value"},series:this.seriesArray};this.myChart.setOption(t,!0)},handleResize:function(){this.myChart.resize()}},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)}},i=i("2877"),i=Object(i.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{staticStyle:{height:"300px"},attrs:{id:this.echarts}})])}),[],!1,null,"00217dc6",null);e.a=i.exports},a15b:function(t,e,i){"use strict";var a=i("23e7"),n=i("e330"),s=i("44ad"),r=i("fc6a"),o=(i=i("a640"),n([].join));n=s!=Object,s=i("join",",");a({target:"Array",proto:!0,forced:n||!s},{join:function(t){return o(r(this),void 0===t?",":t)}})},a584:function(t,e,i){"use strict";var a={name:"cards",data:function(){return{}},props:{cardLists:Array},methods:{},created:function(){}};i("7443"),i=i("2877"),i=Object(i.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("Row",{staticClass:"ivu-mt",attrs:{type:"flex",align:"middle",gutter:10}},t._l(t.cardLists,(function(e,a){return i("Col",{key:a,staticClass:"ivu-mb",attrs:{xl:e.col,lg:6,md:12,sm:24,xs:24}},[i("Card",{staticClass:"card_cent",attrs:{shadow:"",padding:0}},[i("div",{staticClass:"card_box"},[i("div",{staticClass:"card_box_cir",class:{one:a%5==0,two:a%5==1,three:a%5==2,four:a%5==3,five:a%5==4}},[i("div",{staticClass:"card_box_cir1",class:{one1:a%5==0,two1:a%5==1,three1:a%5==2,four1:a%5==3,five1:a%5==4}},[i("Icon",{attrs:{type:e.className}})],1)]),i("div",{staticClass:"card_box_txt"},[i("span",{staticClass:"sp1",domProps:{textContent:t._s(e.count||0)}}),i("span",{staticClass:"sp2",domProps:{textContent:t._s(e.name)}})])])])],1)})),1)],1)}),[],!1,null,"e3e38522",null);e.a=i.exports},b627:function(t,e,i){},c607:function(t,e,i){var a=i("da84"),n=i("83ab"),s=i("fce3"),r=i("c6b6"),o=i("edd0"),c=i("69f3").get,l=RegExp.prototype,d=a.TypeError;n&&s&&o(l,"dotAll",{configurable:!0,get:function(){if(this!==l){if("RegExp"===r(this))return!!c(this).dotAll;throw d("Incompatible receiver, RegExp required")}}})},c71e:function(t,e,i){"use strict";var a=i("313e"),n=i.n(a);a={name:"Index",props:{styles:{type:Object,default:null},optionData:{type:Object,default:null}},data:function(){return{myChart:null}},computed:{echarts:function(){return"echarts"+Math.ceil(100*Math.random())}},watch:{optionData:{handler:function(t,e){this.handleSetVisitChart()},deep:!0}},mounted:function(){var t=this,e=this;e.$nextTick((function(){e.handleSetVisitChart(),window.addEventListener("resize",t.wsFunc)}))},beforeDestroy:function(){window.removeEventListener("resize",this.wsFunc),this.myChart&&(this.myChart.dispose(),this.myChart=null)},methods:{wsFunc:function(){this.myChart.resize()},handleSetVisitChart:function(){this.myChart=n.a.init(document.getElementById(this.echarts));var t=this.optionData;this.myChart.setOption(t,!0)}}},i=i("2877"),i=Object(i.a)(a,(function(){var t=this.$createElement;t=this._self._c||t;return t("div",[t("div",{style:this.styles,attrs:{id:this.echarts}})])}),[],!1,null,"4a0d7a27",null);e.a=i.exports},edd0:function(t,e,i){var a=i("13d2"),n=i("9bf2");t.exports=function(t,e,i){return i.get&&a(i.get,e,{getter:!0}),i.set&&a(i.set,e,{setter:!0}),n.f(t,e,i)}},fd73:function(t,e,i){"use strict";i("a15b");var a=i("61f7"),n={filters:{formatDate:function(t){if(0!==t)return t=new Date(t),Object(a.a)(t,"yyyy/MM/dd")}},data:function(){return{timeVal:[],options:this.$timeOptions,selectIndexTime:""}},methods:{onSelectTime:function(t){var e=[this.$options.filters.formatDate(this.dateToMs(this.$timeOptions.shortcuts[this.selectIndexTime].value()[0])),this.$options.filters.formatDate(this.dateToMs(this.$timeOptions.shortcuts[this.selectIndexTime].value()[1]))];this.$emit("selectDate",e.join("-"))},dateToMs:function(t){return new Date(t).getTime()}}};i=i("2877"),i=Object(i.a)(n,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.onSelectTime},model:{value:t.selectIndexTime,callback:function(e){t.selectIndexTime=e},expression:"selectIndexTime"}},t._l(t.options.shortcuts,(function(e,a){return i("Radio",{key:a,attrs:{label:a}},[t._v(t._s(e.text))])})),1)}),[],!1,null,null,null);e.a=i.exports}}]);