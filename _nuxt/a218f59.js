(window.webpackJsonp=window.webpackJsonp||[]).push([[58,9,17,34,35,36,37,38,39,40,41,42,43,44],{468:function(e,t,n){var content=n(471);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("534a74d2",content,!0,{sourceMap:!1})},469:function(e,t,n){var content=n(473);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("5996145e",content,!0,{sourceMap:!1})},470:function(e,t,n){"use strict";n(468)},471:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),r.locals={},e.exports=r},472:function(e,t,n){"use strict";n(469)},473:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,"h1[data-v-a99942b0]{padding-top:0.5rem;padding-bottom:0.5rem;font-size:1.25rem;line-height:1.75rem;font-weight:600;line-height:2;margin-bottom:0px}@media (min-width: 768px){h1[data-v-a99942b0]{margin-bottom:2.25rem}h1[data-v-a99942b0]{font-size:1.5rem;line-height:2rem}}h1[data-v-a99942b0]{color:#c386ae}",""]),r.locals={},e.exports=r},474:function(e,t,n){"use strict";n.r(t);var r={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},o=(n(470),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.classObject},[e._t("default")],2)}),[],!1,null,"fb2b20a4",null);t.default=component.exports},475:function(e,t,n){"use strict";n.r(t);var r={name:"CoreH1",props:{title:{type:String,required:!0},center:{type:Boolean,default:!1}},computed:{classObject:function(){return{"tracking-wider":"en-us"===this.$i18n.locale,"tracking-widest":"en-us"!==this.$i18n.locale,"text-center":this.center}}}},o=(n(472),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex justify-center font-serif"},[n("h1",{class:e.classObject},[e._v(e._s(e.title))])])}),[],!1,null,"a99942b0",null);t.default=component.exports},480:function(e,t,n){"use strict";n.r(t);var r=n(16),o={name:"ScheduleBlock",components:{LocaleLink:n(107).default},props:{primary:{type:Boolean,default:!1},secondary:{type:Boolean,default:!1},tertiary:{type:Boolean,default:!1},active:{type:Boolean,default:!1},mini:{type:Boolean,default:!1},textAlignCenter:{type:Boolean,default:!0},paddingX:{type:String,default:"px-2"},paddingY:{type:String,default:"py-3.5"},to:{type:String,default:""}},data:function(){return{isHovering:!1}},computed:{transparent:function(){return!this.primary&&!this.secondary&&!this.tertiary},classObject:function(){var e;return e={scheduleBlock:!0,"-primary":this.primary,"-secondary":this.secondary,"-tertiary":this.tertiary,"-active":this.active,"-mini":this.mini,"-transparent":this.transparent,"text-center":this.textAlignCenter,"cursor-pointer":this.primary,hover:this.isHovering},Object(r.a)(e,this.paddingX,!0),Object(r.a)(e,this.paddingY,!0),e}},methods:{onClick:function(e){this.$emit("click",e)},setHoveringState:function(){this.isHovering=!0},removeHoveringState:function(){this.isHovering=!1}}},l=(n(493),n(6)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.classObject,on:{click:e.onClick}},[e.to?n("locale-link",{attrs:{to:e.to,customized:""},on:{mouseenter:e.setHoveringState,mouseleave:e.removeHoveringState}},[e._t("default")],2):e._t("default")],2)}),[],!1,null,"b6791680",null);t.default=component.exports},485:function(e,t,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("491da9fa",content,!0,{sourceMap:!1})},493:function(e,t,n){"use strict";n(485)},494:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleBlock[data-v-b6791680]{position:relative;font-family:Noto Serif TC, -apple-system, serif;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;min-width:120px;border-radius:10px}.scheduleBlock.-mini[data-v-b6791680],.scheduleBlock.-transparent[data-v-b6791680]{min-width:unset}.scheduleBlock.-primary.-active[data-v-b6791680]{color:#c7c7c7;background-color:#354970}.scheduleBlock.-primary.-active.hover[data-v-b6791680]{color:#000;background-color:#d1ac23}.scheduleBlock.-primary[data-v-b6791680]:not(.-active):hover{color:#7568f6}.scheduleBlock.-secondary[data-v-b6791680]{color:#c386ae;background-color:rgba(6,35,85,.8)}.scheduleBlock.-secondary[data-v-b6791680]:active{color:#d1ac23;background-color:rgba(31,63,92,.8)}.scheduleBlock.-tertiary[data-v-b6791680]{color:#d1ac23;background-color:#243f73}.scheduleBlock.-mini[data-v-b6791680]{font-size:0.75rem;line-height:1rem}",""]),r.locals={},e.exports=r},497:function(e,t,n){e.exports=n.p+"img/ENEN.26dc887.svg"},498:function(e,t,n){e.exports=n.p+"img/ZHEN.61dbcf2.svg"},499:function(e,t,n){e.exports=n.p+"img/ZHZH.35289a5.svg"},500:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bTEuMDg4IDMuNzNsLTEuNjUxLTIuNzNINy4zNDNMNS42OSAxNC4zMWgxMi41MTR6TTEwLjUwMyAzLjI2N2wuMDEzLS4wMmMuNjU5LS45OTcgMi4yMDUtLjk5NyAyLjg3Ny4wMmwzLjc3MyA2LjMzOEg2LjczbDMuNzczLTYuMzM4em0yLjA0My41MzFjLS4yNjItLjM5Ni0uOTIzLS4zOTktMS4xOS0uMDA4TDguNDg4IDguNjA2aDYuOTE4TDEyLjU0NyAzLjh6bTguMjY0IDEyLjkwNmwxLjc2NCAyLjM3YTEgMSAwIDAgMS0uODAyIDEuNTk3SDIuMThhMSAxIDAgMCAxLS44MS0xLjU4NWwxLjcxOC0yLjM4MkgyMC44MXoiIC8+Cjwvc3ZnPg=="},501:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptMS4xOTYuNTUyYy0uMDY0LS4wOTctLjI4MS0uMS0uMzU1LS4wMUw5LjM2OSA4LjEwN2g1LjE1OWwtMi4zOTktNC4wMzF6bTguNjggMTIuNjNsMS43NjUgMi4zN2ExIDEgMCAwIDEtLjgwMiAxLjU5N0gyLjE4YTEgMSAwIDAgMS0uODEtMS41ODVsMS43MTgtMi4zODJIMjAuODF6IiAvPgo8L3N2Zz4="},502:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGwtcnVsZT0ibm9uemVybyIKICAgICAgICBkPSJNMTcuMTE3IDEwLjU4bDIuODYyIDQuNzNIMy45MTdsMi44NjItNC43M2gxMC4zMzh6bS02LjE4NC03LjA1N2MuNDYxLS42OTcgMS41NjktLjY5NyAyLjAzIDBsMy4zMjQgNS41ODNINy42MWwzLjMyMy01LjU4M3ptOS44NzcgMTMuMTgybDEuNzY0IDIuMzdhMSAxIDAgMCAxLS44MDIgMS41OTdIMi4xOGExIDEgMCAwIDEtLjgxLTEuNTg1bDEuNzE4LTIuMzgySDIwLjgxeiIgLz4KPC9zdmc+"},506:function(e,t,n){var content=n(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("f09e78d0",content,!0,{sourceMap:!1})},507:function(e,t,n){var content=n(537);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("65281d55",content,!0,{sourceMap:!1})},508:function(e,t,n){var content=n(539);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("5fead489",content,!0,{sourceMap:!1})},509:function(e,t,n){var content=n(541);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("401c38aa",content,!0,{sourceMap:!1})},510:function(e,t,n){var content=n(543);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("412b4ca8",content,!0,{sourceMap:!1})},511:function(e,t,n){var content=n(545);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("5d9b94a9",content,!0,{sourceMap:!1})},512:function(e,t,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(19).default)("12ad78e6",content,!0,{sourceMap:!1})},534:function(e,t,n){"use strict";n(506)},535:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleEvent__context[data-v-02968c86]{top:132px}.scheduleEvent__icon>img[data-v-02968c86]{display:inline;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;filter:brightness(0) invert(1)}.scheduleEvent__context:hover>.scheduleEvent__icon>img[data-v-02968c86]{filter:brightness(0)}",""]),r.locals={},e.exports=r},536:function(e,t,n){"use strict";n(507)},537:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleList .scheduleTick{position:-webkit-sticky;position:sticky;top:48px;z-index:100;background-color:rgba(18,16,35,.8);padding:12px 0}",""]),r.locals={},e.exports=r},538:function(e,t,n){"use strict";n(508)},539:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleListGroup,.scheduleListGroup .scheduleEvent{margin-bottom:12px}.scheduleListGroup .scheduleEvent.room-2-all{order:1}.scheduleListGroup .scheduleEvent.room-3-r012{order:2}.scheduleListGroup .scheduleEvent.room-4-r0{order:3}.scheduleListGroup .scheduleEvent.room-5-r1{order:4}.scheduleListGroup .scheduleEvent.room-6-r2{order:5}.scheduleListGroup .scheduleEvent.room-1-r3{order:6}",""]),r.locals={},e.exports=r},540:function(e,t,n){"use strict";n(509)},541:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleRoom[data-v-632e864d]{margin-bottom:12px}",""]),r.locals={},e.exports=r},542:function(e,t,n){"use strict";n(510)},543:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleRooms[data-v-a5e9739c]{top:48px;z-index:900;grid-template-columns:1fr 2fr 2fr 2fr 2fr;grid-gap:12px;background-color:rgba(18,16,35,.6)}",""]),r.locals={},e.exports=r},544:function(e,t,n){"use strict";n(511)},545:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleTable{grid-template-columns:[timeline] 1fr [room-4-r0-start] 2fr [room-4-r0-end room-5-r1-start] 2fr [room-5-r1-end room-6-r2-start] 2fr [room-6-r2-end room-1-r3-start] 2fr [room-1-r3-end];grid-gap:12px}.scheduleTable .scheduleTick{grid-column:timeline;justify-self:center}.scheduleTable .scheduleEvent.room-3-r012{grid-column:room-4-r0-start/room-6-r2-end}.scheduleTable .scheduleEvent.room-4-r0{grid-column:room-4-r0-start/room-4-r0-end}.scheduleTable .scheduleEvent.room-5-r1{grid-column:room-5-r1-start/room-5-r1-end}.scheduleTable .scheduleEvent.room-6-r2{grid-column:room-6-r2-start/room-6-r2-end}.scheduleTable .scheduleEvent.room-1-r3{grid-column:room-1-r3-start/room-1-r3-end}.scheduleTable .scheduleEvent.room-2-all{grid-column:room-4-r0-start/room-1-r3-end}",""]),r.locals={},e.exports=r},546:function(e,t,n){"use strict";n(512)},547:function(e,t,n){var r=n(18)((function(i){return i[1]}));r.push([e.i,".scheduleTick[data-v-ea3bdca6]{color:#d1ac23}",""]),r.locals={},e.exports=r},584:function(e,t,n){"use strict";n.r(t);var r={name:"Schedule"},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"schedule font-serif"},[e._t("default")],2)}),[],!1,null,"37f917cf",null);t.default=component.exports},585:function(e,t,n){"use strict";n.r(t);n(265);var r={name:"ScheduleDayTab",components:{ScheduleBlock:n(480).default},props:{date:{type:String,default:""},index:{type:Number,default:-1}},data:function(){return{day:this.$parseDate(this.date,"YYYY-MM-DD").get("date"),active:!1}},methods:{onClick:function(){this.$parent.selectTab(this.index)}}},o=n(6),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"m-0 font-bold whitespace-nowrap lg:m-2",attrs:{active:e.active,"padding-x":"px-4 sm:px-8",primary:""},on:{click:e.onClick}},[e._t("default")],2)}),[],!1,null,"3a312e32",null);t.default=component.exports;installComponents(component,{ScheduleBlock:n(480).default})},586:function(e,t,n){"use strict";n.r(t);n(28);var r=n(102),o=n.n(r),l={name:"ScheduleDayTabs",mounted:function(){this.initTabs()},updated:function(){this.initialized||(this.initTabs(),this.initialized=!0)},methods:{initTabs:function(){var e=this;this.tabs=this.$children,this.tabs.forEach((function(t,i){var n=o()().isSame(t.day,"day")||0===i;t.active=n,n&&e.updateVModel(i)}))},selectTab:function(e){this.tabs.forEach((function(t,i){t.active=e===i})),this.updateVModel(e)},updateVModel:function(e){this.$emit("input",e)}}},c=n(6),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"\n        scheduleDayTabs\n        flex\n        w-full\n        justify-between\n        mb-8\n        lg:justify-center\n    "},[e._t("default")],2)}),[],!1,null,"71d9e3bf",null);t.default=component.exports},587:function(e,t,n){"use strict";n.r(t);var r=n(34),o=(n(45),n(108),n(44),n(35),n(37),n(86),{name:"ScheduleEvent",components:{ScheduleBlock:n(480).default},props:{value:{type:void 0,default:function(){return{room:"",event_id:0,event_type:"Type",title:"Title",speakers:[],is_remote:!1,recording_policy:!1,break_event:!1,language:"",python_level:"",begin_time:"",end_time:""}}},timelineBegin:{type:String,default:"08:30"},inList:{type:Boolean,default:!1}},data:function(){var e="HH:mm";return{format:e,options:{outputFormat:e},startPoint:this.$parseDate(this.$padTimezone(this.timelineBegin)),icon:{lang:{ENEN:n(497),ZHEN:n(498),ZHZH:n(499)},level:{NOVICE:n(500),INTERMEDIATE:n(501),EXPERIENCED:n(502)}}}},computed:{isCustomEvent:function(){return"custom"===this.value.event_type},textAlignCenter:function(){return["custom","keynote"].includes(this.value.event_type)},byLine:function(){var e=this;return this.value.speakers.map((function(t){return e.getValueByLocale(t)})).join(", ")},duration:function(){var e=this.$datetimeToString(this.$padTimezone(this.value.begin_time),this.options),t=this.$datetimeToString(this.$padTimezone(this.value.end_time),this.options);return"".concat(e," ~ ").concat(t)},roomClass:function(){return"room-".concat(this.value.room)},classes:function(){return["scheduleEvent","p-0",this.roomClass]},styles:function(){if(!this.inList)return{gridRowStart:this.getGridRow(this.value.begin_time),gridRowEnd:this.getGridRow(this.value.end_time)}},eventPagePath:function(){var e=this.value,t=e.event_type,n=e.event_id,r=e.speakers;if("keynote"===t){var o=r[0].en_us.split(" ").join("_");return"/conference/keynotes#".concat(o)}return["talk","tutorial","sponsored"].includes(t)?"/conference/".concat(t,"/").concat(n,"/"):""}},methods:{getGridRow:function(e){var time=this.$padTimezone(e),t=this.$parseDate(time).diff(this.startPoint,"minute");return parseInt("".concat(t/5),10)+1},getValueByLocale:function(data){if("object"===Object(r.a)(data)){return data[{"en-us":"en_us","zh-hant":"zh_hant"}[this.$i18n.locale]]}return data}}}),l=(n(534),n(6)),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("schedule-block",{class:e.classes,style:e.styles,attrs:{"text-align-center":e.textAlignCenter,primary:!e.isCustomEvent,secondary:e.isCustomEvent,to:e.eventPagePath,active:""}},[e.$slots.prepend?n("div",{staticClass:"scheduleEvent__prepend flex"},[e._t("prepend")],2):e._e(),e._v(" "),n("div",{staticClass:"scheduleEvent__context sticky"},[n("div",{staticClass:"font-bold"},[e._v(e._s(e.getValueByLocale(e.value.title)))]),e._v(" "),e.isCustomEvent?e._e():n("br"),e._v(" "),e.byLine?n("div",{staticClass:"font-medium text-sm"},[e._v("by "+e._s(e.byLine))]):e._e(),e._v(" "),n("div",{staticClass:"scheduleEvent__icon"},[n("img",{attrs:{src:e.icon.level[e.value.python_level]}}),e._v(" "),n("img",{attrs:{src:e.icon.lang[e.value.language]}})]),e._v(" "),e.duration?n("div",{staticClass:"font-medium text-sm"},[e._v("\n            "+e._s(e.duration)+"\n        ")]):e._e()])])}),[],!1,null,"02968c86",null);t.default=component.exports;installComponents(component,{ScheduleBlock:n(480).default})},588:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleList"},o=(n(536),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleList flex flex-col w-full"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},589:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleListGroup"},o=(n(538),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleListGroup flex flex-col"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},590:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleRoom",components:{ScheduleBlock:n(480).default},props:{value:{type:String,default:"Room"},inline:{type:Boolean,default:!1}},computed:{name:function(){return{"4-r0":"R0","5-r1":"R1","6-r2":"R2","1-r3":"R3","2-all":"All","3-r012":"R0, R1, R2"}[this.value]},paddingX:function(){return this.inline?"px-2":void 0},paddingY:function(){return this.inline?"py-2":void 0}}},o=(n(540),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("schedule-block",{staticClass:"scheduleRoom font-semibold whitespace-nowrap",attrs:{mini:e.inline,"padding-x":e.paddingX,"padding-y":e.paddingY,tertiary:""}},[e._v("\n    "+e._s(e.name)+"\n")])}),[],!1,null,"632e864d",null);t.default=component.exports;installComponents(component,{ScheduleBlock:n(480).default})},591:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleRooms"},o=(n(542),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleRooms sticky hidden w-full justify-center"},[e._t("default")],2)}),[],!1,null,"a5e9739c",null);t.default=component.exports},592:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleTable"},o=(n(544),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTable hidden w-full"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},593:function(e,t,n){"use strict";n.r(t);var r={name:"ScheduleTick"},o=(n(546),n(6)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"scheduleTick font-semibold"},[e._t("default")],2)}),[],!1,null,"ea3bdca6",null);t.default=component.exports},965:function(e,t,n){"use strict";n.r(t);n(30),n(51),n(59),n(60);var r=n(87),o=n(3),l=n(16),c=(n(44),n(26),n(35),n(53),n(38),n(28),n(173),n(31),n(43),n(101)),d=n(64),f=Object(d.a)({"en-us":{Schedule:"Schedule"},"zh-hant":{Schedule:"時間表"}}),m=n(474),h=n(475),v=n(584),y=n(480),_=n(585),M=n(586),x=n(587),k=n(588),S=n(589),j=n(590),I=n(591),D=n(592),E=n(593);function T(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function w(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?T(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):T(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var L={i18n:f,name:"PageConferenceSchedule",components:{CoreH1:h.default,I18nPageWrapper:m.default,Schedule:v.default,ScheduleBlock:y.default,ScheduleDayTab:_.default,ScheduleDayTabs:M.default,ScheduleList:k.default,ScheduleListGroup:S.default,ScheduleRoom:j.default,ScheduleRooms:I.default,ScheduleTable:D.default,ScheduleEvent:x.default,ScheduleTick:E.default},data:function(){return{selectedDayIndex:0,rooms:[],days:[],tables:[],lists:[],defaultTable:{events:[],ticks:[],timeline:{}},defaultList:{groups:[]}}},computed:w(w({},Object(c.b)(["schedulesData"])),{},{table:function(){return this.tables[this.selectedDayIndex]||this.defaultTable},list:function(){return this.lists[this.selectedDayIndex]||this.defaultList}}),created:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("$getSchedulesData");case 2:e.processData();case 3:case"end":return t.stop()}}),t)})))()},methods:{processData:function(){this.makeDays(),this.makeRooms(),this.makeTables(),this.makeLists()},makeDays:function(){var e=this;this.days=this.schedulesData.map((function(t){var n=t.date,r=t.name,o=e.$datetimeToString(n,{inputFormat:"YYYY-MM-DD",outputFormat:"MM/D"});return{label:"".concat(r," (").concat(o,")"),date:n}}))},makeRooms:function(){this.rooms=["4-r0","5-r1","6-r2","1-r3"]},makeTables:function(){var e=this;this.tables=this.schedulesData.map((function(t){return{events:e.getEvents(t),ticks:e.getTicks(t),timeline:t.timeline}}))},makeLists:function(){var e=this;this.lists=this.schedulesData.map((function(t){return{groups:e.getGroups(t)}}))},getEvents:function(e){return e.rooms.reduce((function(t,n){var o=e.slots[n].map((function(slot){return w(w({},slot),{},{room:n})}));return[].concat(Object(r.a)(t),Object(r.a)(o))}),[])},getTicks:function(e){var t=e.timeline,n=this.$parseDate(this.$padTimezone(t.begin)),r=this.$parseDate(this.$padTimezone(t.end)).diff(n,"minute"),o=parseInt("".concat(r/30),10)+1;return Array.from({length:o}).map((function(e,i){var t=6*i+1,r=6*i+6;return{label:n.add(30*i,"minute").format("HH:mm"),style:{gridRowStart:t,gridRowEnd:r}}}))},getGroups:function(e){var t=this,n=e.rooms.reduce((function(t,n){return e.slots[n].forEach((function(slot){var e=w(w({},slot),{},{room:n});t[slot.begin_time]?t[slot.begin_time].push(e):t[slot.begin_time]=[e]})),t}),{});return Object.keys(n).sort((function(e,t){return e>t?1:e<t?-1:0})).map((function(e){return{tick:t.$datetimeToString(t.$padTimezone(e),{outputFormat:"HH:mm"}),events:n[e]}}))}},head:function(){return{title:this.$i18n.t("Schedule"),meta:[{hid:"og:title",property:"og:title",content:this.$i18n.t("Schedule")},{hid:"og:description",property:"og:description",content:this.$i18n.t("Schedule")},{hid:"description",name:"description",content:this.$i18n.t("Schedule")}]}}},N=n(6),component=Object(N.a)(L,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("i18n-page-wrapper",[n("core-h1",{attrs:{title:e.$t("Schedule")}}),e._v(" "),n("schedule",[n("schedule-day-tabs",{model:{value:e.selectedDayIndex,callback:function(t){e.selectedDayIndex=t},expression:"selectedDayIndex"}},e._l(e.days,(function(t,i){return n("schedule-day-tab",{key:e.$makeKey(i,"schedule_day_tab"),attrs:{date:t.date,index:i}},[e._v("\n                "+e._s(t.label)+"\n            ")])})),1),e._v(" "),n("schedule-rooms",{staticClass:"lg:grid"},[n("schedule-block"),e._v(" "),e._l(e.rooms,(function(t,i){return n("schedule-room",{key:e.$makeKey(i,"schedule_room"),attrs:{value:t}})}))],2),e._v(" "),n("schedule-table",{staticClass:"lg:grid"},[e._l(e.table.ticks,(function(t,i){return n("schedule-tick",{key:e.$makeKey(i,"schedule_tick"),style:t.style},[e._v("\n                "+e._s(t.label)+"\n            ")])})),e._v(" "),e._l(e.table.events,(function(t){return n("schedule-event",{key:e.$makeKey(t.event_id,"schedule_table_event"),attrs:{value:t,"timeline-begin":e.table.timeline.begin}})}))],2),e._v(" "),n("schedule-list",{staticClass:"lg:hidden"},e._l(e.list.groups,(function(t,i){return n("schedule-list-group",{key:e.$makeKey(i,"schedule_list_group")},[n("schedule-tick",[e._v(e._s(t.tick))]),e._v(" "),e._l(t.events,(function(t){return n("schedule-event",{key:e.$makeKey(t.event_id,"schedule_list_event"),attrs:{value:t,"in-list":""},scopedSlots:e._u([{key:"prepend",fn:function(){return[n("schedule-room",{attrs:{value:t.room,inline:""}})]},proxy:!0}],null,!0)})}))],2)})),1)],1)],1)}),[],!1,null,"5858c9c4",null);t.default=component.exports;installComponents(component,{ScheduleDayTab:n(585).default,ScheduleDayTabs:n(586).default,ScheduleBlock:n(480).default,ScheduleRoom:n(590).default,ScheduleRooms:n(591).default,ScheduleTick:n(593).default,ScheduleEvent:n(587).default,ScheduleTable:n(592).default,ScheduleListGroup:n(589).default,ScheduleList:n(588).default,Schedule:n(584).default})}}]);