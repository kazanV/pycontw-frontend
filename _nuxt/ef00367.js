(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{101:function(e,t,n){"use strict";n.r(t);var o={name:"CoreLocaleLink",props:{to:{type:String,default:""},customized:{type:Boolean,default:!1},highlight:{type:Boolean,default:!1}},computed:{classObject:function(){return{"core-localeLink":!0,highlight:this.highlight,"--customized":this.customized}}}},r=(n(278),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("nuxt-link",{class:e.classObject,attrs:{to:e.localePath(e.to)}},[e._t("default")],2)}),[],!1,null,"5b0be819",null);t.default=component.exports},120:function(e,t,n){"use strict";n.r(t);var o=n(63);t.default=Object(o.a)({"en-us":{codeOfConduct:"Code of Conduct",staff:"Staff",community:"Community",privacyPolicy:"Privacy Policy",history:"History"},"zh-hant":{codeOfConduct:"行為準則",staff:"工作人員",community:"社群",privacyPolicy:"個人資料保護聲明",history:"歷年網站"}})},121:function(e,t,n){"use strict";n.r(t);var o=n(63);t.default=Object(o.a)({"en-us":{about:"About",pycontw:"PyCon Taiwan",community:"Community",history:"History",sponsor:"Sponsor",jobs:"Job Listing",speaking:"Speaking",cfp:"Call for Proposals",talk:"Propose a Talk",tutorial:"Propose a Tutorial",recording:"Recording Release",conference:"Conference",schedule:"Schedule",keynotes:"Keynotes",talks:"Talks",tutorials:"Tutorials",communityTracks:"Community Tracks",events:"Events",overview:"Overview",warmUpSessions:"Warm-Up Sessions",openSpaces:"Open Spaces",sprints:"Sprints",jobListings:"Job Listings",registration:"Registration",conferenceTickets:"Conference Tickets",financialAid:"Financial Aid",venue:"Venue",covid19Guidelines:"COVID-19 Guidelines",signIn:"Sign In",codeOfConduct:"Code of Conduct"},"zh-hant":{about:"關於",pycontw:"PyCon Taiwan",community:"在地社群",history:"研討會歷史",sponsor:"贊助",jobs:"徵才資訊",speaking:"投稿",cfp:"投稿募集",talk:"如何投稿演講",tutorial:"如何投稿專業課程",recording:"錄影釋出",conference:"議程",schedule:"時間表",keynotes:"基調演講",talks:"一般演講",tutorials:"專業課程",communityTracks:"社群軌",events:"活動",overview:"活動總覽",warmUpSessions:"暖身活動",openSpaces:"開放空間",sprints:"衝刺開發",jobListings:"徵才資訊",registration:"購票",conferenceTickets:"會議門票",financialAid:"財務補助",venue:"會場",covid19Guidelines:"COVID-19 防疫守則",signIn:"登入",codeOfConduct:"行為準則"}})},122:function(e,t,n){"use strict";n.r(t);var o=n(152),r=n(80),c={name:"CoreHeaderNavBarItemDropdown",components:{CoreMenu:o.default,CoreMenuItem:r.default},props:{sm:Boolean,lg:Boolean,label:{type:String,default:""},items:{type:Array,default:function(){return[]}}},data:function(){return{delay:0,isHovering:!1}},methods:{hideMenu:function(){this.isHovering=!1},showMenu:function(){this.isHovering=!0}}},l=(n(288),n(5)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative flex h-full px-8 justify-center items-center text-left"},[n("div",{staticClass:"relative flex h-full flex-col rounded-md items-start cursor-pointer",on:{mouseenter:e.showMenu,mouseleave:e.hideMenu}},[n("div",{staticClass:"options-menu focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500",attrs:{id:"options-menu","aria-haspopup":"true","aria-expanded":"true"}},[e.$slots.label?e._t("label"):e._e(),e._v("\n            "+e._s(e.label)+"\n            "),n("fa",{staticClass:"ml-3",attrs:{icon:["fa","caret-down"],"aria-hidden":"true"}})],2),e._v(" "),n("core-menu",{directives:[{name:"show",rawName:"v-show",value:e.isHovering,expression:"isHovering"}],attrs:{lg:e.lg,sm:e.sm}},[e._t("items",null,{hideMenu:e.hideMenu}),e._v(" "),e._l(e.items,(function(t){return n("core-menu-item",{key:t.value,attrs:{href:t.value},on:{click:e.hideMenu}},[e._v("\n                "+e._s(t.label)+"\n            ")])}))],2)],1)])}),[],!1,null,"5ed8e143",null);t.default=component.exports;installComponents(component,{CoreMenuItem:n(80).default,CoreMenu:n(152).default})},150:function(e,t,n){"use strict";n.r(t);var o=n(120),r=n(222),c=n(223),l=n(28),d={i18n:o.default,name:"CoreFooter",components:{FooterIcon:r.default,LocaleLink:l.LocaleLink,FooterHistory:c.default}},f=(n(280),n(5)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"core-footer w-full flex flex-col justify-between text-golden"},[n("div",{staticClass:"w-full p-10"},[n("div",{staticClass:"h-24 flex justify-center"},[n("div",{staticClass:"flex flex-col items-center"},[n("locale-link",{staticClass:"my-2",attrs:{to:"/about/staff"}},[e._v(e._s(e.$t("staff")))]),e._v(" "),n("locale-link",{staticClass:"my-2",attrs:{to:"/about/privacy-policy"}},[e._v("\n                    "+e._s(e.$t("privacyPolicy"))+"\n                ")])],1)]),e._v(" "),n("footer-history"),e._v(" "),n("footer-icon")],1),e._v(" "),n("div",{staticClass:"core-footer__copyright w-full flex py-4 justify-center cursor-default"},[e._v("\n        © 2021 PyCon Taiwan\n    ")])])}),[],!1,null,"2041547c",null);t.default=component.exports},151:function(e,t,n){"use strict";n.r(t);var o=n(224),r=n(225),c=n(226),l=n(229),d={name:"CoreHeader",components:{HomeIcon:o.default,LocaleSwitch:l.default,NavBar:r.default,NavBarHamburger:c.default},computed:{myPyConUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}}},f=(n(298),n(5)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"w-full h-full"},[n("div",{staticClass:"header-container --desktop hidden md:flex"},[n("home-icon"),e._v(" "),n("nav-bar"),e._v(" "),n("locale-switch")],1),e._v(" "),n("div",{staticClass:"header-container --mobile flex md:hidden"},[n("home-icon"),e._v(" "),n("div",{staticClass:"h-full flex items-center"},[n("locale-switch"),e._v(" "),n("nav-bar-hamburger")],1)],1)])}),[],!1,null,"478a7e84",null);t.default=component.exports},152:function(e,t,n){"use strict";n.r(t);var o=n(75),r=(n(36),{name:"CoreMenu",props:{sm:Boolean,lg:Boolean},data:function(){return{originalClasses:["core-menu"]}},computed:{menuClasses:function(){var e;return e=this.sm?"w-24":this.lg?"w-36":"w-32",[].concat(Object(o.a)(this.originalClasses),[e])}}}),c=(n(284),n(5)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.menuClasses,attrs:{"aria-labelledby":"options-menu","aria-orientation":"vertical",role:"menu"}},[n("div",{staticClass:"relative"},[e._t("default")],2)])}),[],!1,null,"23de25d9",null);t.default=component.exports},159:function(e,t,n){"use strict";n(36),n(117),n(27),n(39);var o={makeKey:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return"".concat(n.join("_"),"_").concat(e)},makeId:n(368).a};t.a=function(e,t){Object.keys(o).forEach((function(e){t(e,o[e])}))}},191:function(e,t,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b0a53818",content,!0,{sourceMap:!1})},192:function(e,t,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("54fe51dc",content,!0,{sourceMap:!1})},193:function(e,t,n){var content=n(279);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("4bd3279e",content,!0,{sourceMap:!1})},194:function(e,t,n){var content=n(281);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("0b88d906",content,!0,{sourceMap:!1})},196:function(e,t,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("6ec93f3a",content,!0,{sourceMap:!1})},197:function(e,t,n){var content=n(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("40078ecc",content,!0,{sourceMap:!1})},198:function(e,t,n){var content=n(289);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("6d94a96a",content,!0,{sourceMap:!1})},199:function(e,t,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("45506c87",content,!0,{sourceMap:!1})},200:function(e,t,n){var content=n(293);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("b4ab894a",content,!0,{sourceMap:!1})},201:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("48b8a544",content,!0,{sourceMap:!1})},202:function(e,t,n){var content=n(297);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("61f22ba6",content,!0,{sourceMap:!1})},203:function(e,t,n){var content=n(299);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("0c9140de",content,!0,{sourceMap:!1})},204:function(e,t,n){var content=n(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("d3825ab2",content,!0,{sourceMap:!1})},205:function(e,t,n){var content=n(304);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(20).default)("1239d49d",content,!0,{sourceMap:!1})},215:function(e,t,n){"use strict";n.r(t);var o=n(63);t.default=Object(o.a)({"en-us":{"en-us":"EN","zh-hant":"ZH"},"zh-hant":{"en-us":"英文","zh-hant":"中文"}})},216:function(e,t,n){"use strict";n.r(t);var o=n(63);t.default=Object(o.a)({"en-us":{announceMsg:"The Call for Proposals is now open!"},"zh-hant":{announceMsg:"目前開放徵稿中，歡迎大家投稿演講與專業課程！"}})},221:function(e,t,n){"use strict";n(36);var o=n(150),r=n(151),c=n(230),l={components:{CoreHeader:r.default,CoreFooter:o.default,AnnounceBar:c.default},head:function(){return{titleTemplate:function(e){var title="PyCon Taiwan 2021";return e&&e!==title?"".concat(e," | ").concat(title):title},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:""},{hid:"og:title",property:"og:title",content:"PyCon Taiwan 2021"},{hid:"og:description",property:"og:description",content:"PyCon Taiwan 2021"},{hid:"og:image",property:"og:image",content:n(302)},{hid:"og:type",property:"og:type",content:"website"}],link:[{rel:"icon",type:"image/x-icon",href:"/2021/favicon.ico"},{rel:"preconnect",href:"https://fonts.googleapis.com"},{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:"anonymous"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@400;500;600;700&family=Source+Sans+Pro:wght@400;600;700&display=swap"},{rel:"canonical",href:"https://tw.pycon.org"+this.$route.path}]}}},d=(n(303),n(5)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"default-layout"},[n("div",{staticClass:"default-layout__header"},[n("core-header"),e._v(" "),n("announce-bar")],1),e._v(" "),n("div",{staticClass:"default-layout__body"},[n("Nuxt"),e._v(" "),n("core-footer")],1)])}),[],!1,null,null,null);t.a=component.exports;installComponents(component,{CoreHeader:n(151).default,CoreFooter:n(150).default})},222:function(e,t,n){"use strict";n.r(t);var o={name:"CoreFooterIcon",components:{ExtLink:n(76).default},data:function(){return{iconArray:[{src:n(269),link:"https://pycontw.blogspot.tw/",altName:"Blog Footer Icon"},{src:n(270),link:"https://www.facebook.com/pycontw",altName:"Facebook Footer Icon"},{src:n(271),link:"https://t.me/pycontw_chat",altName:"Telegram Footer Icon"},{src:n(272),link:"https://twitter.com/pycontw",altName:"Twitter Footer Icon"},{src:n(273),link:"mailto:organizers@pycon.tw",altName:"Email Footer Icon"},{src:n(274),link:"https://www.youtube.com/PyConTaiwan",altName:"Youtube Footer Icon"},{src:n(275),link:"https://discord.com/invite/94hgCQv",altName:"Discord Footer Icon"}]}}},r=(n(276),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"core-footer"},[e._l(e.iconArray,(function(e,t){return n("ext-link",{key:"icon_"+t,staticClass:"core-footerLink",attrs:{href:e.link}},[n("img",{staticClass:"core-footerIcon",attrs:{src:e.src,alt:e.altName}})])})),e._v(" "),n("svg",{staticClass:"svg-filter"},[n("defs",[n("filter",{attrs:{id:"hover-color"}},[n("feColorMatrix",{attrs:{"color-interpolation-filters":"sRGB",type:"matrix",values:"0.46 0   0   0   0\n                            0   0.41  0   0   0\n                            0   0   0.96  0   0\n                            0   0   0   1   0 "}})],1)])])],2)}),[],!1,null,"71de6d3e",null);t.default=component.exports},223:function(e,t,n){"use strict";n.r(t);n(51);var o=n(76),r={i18n:n(120).default,name:"CoreFooterHistory",components:{ExtLink:o.default},data:function(){return{itemsPerRow:3,historiesArray:[{label:"2012",link:"https://tw.pycon.org/2012/"},{label:"2013",link:"https://tw.pycon.org/2013/"},{label:"2014",link:"https://tw.pycon.org/2014apac/"},{label:"2015",link:"https://tw.pycon.org/2015apac/"},{label:"2016",link:"https://tw.pycon.org/2016/"},{label:"2017",link:"https://tw.pycon.org/2017/"},{label:"2018",link:"https://tw.pycon.org/2018/"},{label:"2019",link:"https://tw.pycon.org/2019/"},{label:"2020",link:"https://tw.pycon.org/2020/"}]}},computed:{rowCount:function(){return Math.ceil(this.historiesArray.length/this.itemsPerRow)}},methods:{itemCountInRow:function(e){return this.historiesArray.slice((e-1)*this.itemsPerRow,e*this.itemsPerRow)}}},c=n(5),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-10 mb-3"},[n("div",{staticClass:"flex justify-center cursor-default"},[n("p",{staticClass:"py-3 font-bold"},[e._v(e._s(e.$t("history")))])]),e._v(" "),e._l(e.rowCount,(function(t,o){return n("div",{key:"count_"+o,staticClass:"flex justify-center"},e._l(e.itemCountInRow(t),(function(t,o){return n("ext-link",{key:"history_"+o,staticClass:"my-2 mx-3 font-semibold text-sm",attrs:{href:t.link,highlight:""}},[e._v(e._s(t.label))])})),1)}))],2)}),[],!1,null,"564e1b58",null);t.default=component.exports},224:function(e,t,n){"use strict";n.r(t);var o={name:"HomeIcon",components:{LocaleLink:n(101).default}},r=n(5),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("locale-link",{staticClass:"core-homeIcon md:px-12 py-2 flex justify-center items-center",attrs:{to:"/",customized:""}},[o("img",{staticClass:"w-8",attrs:{src:n(282),alt:""}}),e._v(" "),o("span",{staticClass:"font-bold"},[e._v(" PyConTW ")])])}),[],!1,null,"22f92928",null);t.default=component.exports},225:function(e,t,n){"use strict";n.r(t);n(37),n(95),n(26);var o=n(49),r=n(122),c=n(121),l=n(28),d={i18n:c.default,name:"CoreHeaderNavBar",components:{NavBarItemDropdown:r.default,LocaleLink:l.LocaleLink,ExtLink:l.ExtLink},computed:{conferenceItems:function(){return this.generateI18nItems(o.default.conferenceItems)},speakingItems:function(){return this.generateI18nItems(o.default.speakingItems)},eventsItems:function(){return this.generateI18nItems(o.default.eventsItems)},aboutItems:function(){return this.generateI18nItems(o.default.aboutItems)},registrationItems:function(){return this.generateI18nItems(o.default.registrationItems)},signInUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}},methods:{generateI18nItems:function(e){var t=this;return e.map((function(e){var n=e.i18nKey,o=e.value;return{label:t.$i18n.t(n),value:o}}))},getPageClassesByPath:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.$route.name.startsWith(e);return{"core-navBarItem":!0,flex:t,"h-full":t,"justify-center":t,"items-center":t,"px-8":t,"py-2":t,"bg-transparent":!n,"--active":n}}}},f=(n(290),n(5)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"h-full flex justify-evenly items-center"},[n("nav-bar-item-dropdown",{class:e.getPageClassesByPath("about"),attrs:{label:e.$t("about"),items:e.aboutItems}}),e._v(" "),n("locale-link",{class:e.getPageClassesByPath("sponsor",!0),attrs:{to:"/sponsor",customized:""}},[e._v("\n        "+e._s(e.$t("sponsor"))+"\n    ")]),e._v(" "),n("nav-bar-item-dropdown",{class:e.getPageClassesByPath("speaking"),attrs:{label:e.$t("speaking"),items:e.speakingItems}}),e._v(" "),n("nav-bar-item-dropdown",{class:e.getPageClassesByPath("registration"),attrs:{label:e.$t("registration"),items:e.registrationItems}}),e._v(" "),n("locale-link",{class:e.getPageClassesByPath("covid-19",!0),attrs:{to:"/covid-19/guidelines",customized:""}},[e._v("\n        "+e._s(e.$t("covid19Guidelines"))+"\n    ")]),e._v(" "),n("ext-link",{class:e.getPageClassesByPath("signIn",!0),attrs:{href:e.signInUrl}},[e._v("\n        "+e._s(e.$t("signIn"))+"\n    ")])],1)}),[],!1,null,"07600187",null);t.default=component.exports},226:function(e,t,n){"use strict";n.r(t);n(37);var o=n(227),r=n(228),c=n(28),l=n(49),d={i18n:n(121).default,name:"CoreHeaderNavBarHamburger",components:{IconHamburgerMenuIcon:o.default,NavBarItemAccordion:r.default,ExtLink:c.ExtLink,LocaleLink:c.LocaleLink},data:function(){return{isMenuSlidedIn:!1,expandingItem:void 0}},computed:{speakingItems:function(){return this.generateI18nItems(l.default.speakingItems)},eventsItems:function(){return this.generateI18nItems(l.default.eventsItems)},aboutItems:function(){return this.generateI18nItems(l.default.aboutItems)},registrationItems:function(){return this.generateI18nItems(l.default.registrationItems)},signInUrl:function(){return"https://tw.pycon.org/prs/".concat(this.$i18n.locale,"/dashboard/")}},watch:{$route:function(){this.isMenuSlidedIn&&this.toggleMenu()}},methods:{generateI18nItems:function(e){var t=this;return e.map((function(e){var n=e.i18nKey,o=e.value;return{label:t.$i18n.t(n),value:o}}))},toggleMenu:function(){this.isMenuSlidedIn=!this.isMenuSlidedIn},toggleAccordion:function(e){this.expandingItem===e?this.expandingItem=void 0:this.expandingItem=e}}},f=(n(294),n(5)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"relative"},[n("icon-hamburger-menu-icon",{directives:[{name:"show",rawName:"v-show",value:!e.isMenuSlidedIn,expression:"!isMenuSlidedIn"}],staticClass:"cursor-pointer",nativeOn:{click:function(t){return e.toggleMenu.apply(null,arguments)}}}),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isMenuSlidedIn,expression:"isMenuSlidedIn"}],staticClass:"close-icon-button",on:{click:e.toggleMenu}},[e._v("\n        +\n    ")]),e._v(" "),e.isMenuSlidedIn?n("div",{staticClass:"core-navBarHamburgerSlideInMenu"},[n("nav-bar-item-accordion",{attrs:{label:e.$t("about"),items:e.aboutItems,expanding:"about"===e.expandingItem},nativeOn:{click:function(t){return e.toggleAccordion("about")}}}),e._v(" "),n("locale-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{to:"/sponsor",customized:""}},[e._v(e._s(e.$t("sponsor")))]),e._v(" "),n("nav-bar-item-accordion",{attrs:{label:e.$t("speaking"),items:e.speakingItems,expanding:"speaking"===e.expandingItem},nativeOn:{click:function(t){return e.toggleAccordion("speaking")}}}),e._v(" "),n("nav-bar-item-accordion",{attrs:{label:e.$t("registration"),items:e.registrationItems,expanding:"registration"===e.expandingItem},nativeOn:{click:function(t){return e.toggleAccordion("registration")}}}),e._v(" "),n("locale-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{to:"/covid-19/guidelines",customized:""}},[e._v(e._s(e.$t("covid19Guidelines")))]),e._v(" "),n("ext-link",{staticClass:"core-navBarHamburgerSlideInMenu__item",attrs:{href:e.signInUrl}},[e._v(e._s(e.$t("signIn")))])],1):e._e()],1)}),[],!1,null,"9e6baffc",null);t.default=component.exports},227:function(e,t,n){"use strict";n.r(t);var o={name:"HamburgerMenuIcon"},r=n(5),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{width:"20",height:"17",viewBox:"0 0 20 17",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[n("line",{attrs:{x1:"1.25",y1:"1.75",x2:"18.75",y2:"1.75",stroke:"#c2a53a","stroke-width":"2.5","stroke-linecap":"round"}}),e._v(" "),n("line",{attrs:{x1:"1.25",y1:"8.75",x2:"18.75",y2:"8.75",stroke:"#c2a53a","stroke-width":"2.5","stroke-linecap":"round"}}),e._v(" "),n("line",{attrs:{x1:"1.25",y1:"15.75",x2:"18.75",y2:"15.75",stroke:"#c2a53a","stroke-width":"2.5","stroke-linecap":"round"}})])}),[],!1,null,"689bd3e6",null);t.default=component.exports},228:function(e,t,n){"use strict";n.r(t);var o={name:"NavBarItemAccordion",components:{LocaleLink:n(28).LocaleLink},props:{label:{type:String,default:""},items:{type:Array,default:function(){return[]}},expanding:{type:Boolean,default:!1}},computed:{caretIcon:function(){return this.expanding?["fa","caret-up"]:["fa","caret-down"]}}},r=(n(292),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"core-navBarItemAccordion"},[n("div",{staticClass:"core-navBarItemAccordion__label"},[e._v("\n        "+e._s(e.label)+"\n        "),n("fa",{staticClass:"ml-3",attrs:{icon:e.caretIcon,"aria-hidden":"true"}})],1),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.expanding,expression:"expanding"}],staticClass:"core-navBarItemAccordion__items"},e._l(e.items,(function(t){return n("locale-link",{key:t.value,attrs:{to:t.value,role:"menuitem",customized:""}},[e._v("\n            "+e._s(t.label)+"\n        ")])})),1)])}),[],!1,null,"0807b7a2",null);t.default=component.exports},229:function(e,t,n){"use strict";n.r(t);var o=n(122),r=n(215),c=n(80),l={i18n:r.default,name:"CoreHeaderLocaleSwitch",components:{CoreMenuItem:c.default,NavBarItemDropdown:o.default},data:function(){return{languages:["en-us","zh-hant"]}},methods:{onClickLang:function(e,t){this.$i18n.locale=t,this.$router.push(this.switchLocalePath(t)),e()}}},d=(n(296),n(5)),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"core-localeSwitch h-full"},[n("nav-bar-item-dropdown",{attrs:{sm:""},scopedSlots:e._u([{key:"label",fn:function(){return[e._v("\n            "+e._s(e.$t(e.$i18n.locale))+"\n        ")]},proxy:!0},{key:"items",fn:function(t){var o=t.hideMenu;return e._l(e.languages,(function(t,i){return n("core-menu-item",{key:"language_"+i,on:{click:function(n){return e.onClickLang(o,t)}}},[e._v("\n                "+e._s(e.$t(t))+"\n            ")])}))}}])})],1)}),[],!1,null,"1f3ac1e2",null);t.default=component.exports;installComponents(component,{CoreMenuItem:n(80).default})},230:function(e,t,n){"use strict";n.r(t);var o=n(216),r=n(28),c={i18n:o.default,name:"AnnounceBar",components:{LocaleLink:r.LocaleLink},data:function(){return{completeFlag:!0}},methods:{completeRead:function(){this.completeFlag=!0}}},l=(n(300),n(5)),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"h-12 px-8",class:{hidden:e.completeFlag}},[n("nav",{staticClass:"h-full",on:{click:e.completeRead}},[n("locale-link",{attrs:{to:"/speaking/cfp",customized:""}},[e._v("\n            "+e._s(e.$t("announceMsg"))+"\n        ")])],1),e._v(" "),n("div",{attrs:{id:"closeBarBtn"},on:{click:e.completeRead}},[e._v("X")])])}),[],!1,null,"466daed0",null);t.default=component.exports},233:function(e,t,n){n(234),e.exports=n(235)},267:function(e,t,n){"use strict";n(191)},268:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,"a[data-v-0dd5fa6c]{color:inherit}.highlight[data-v-0dd5fa6c]{color:#c2a53a}.highlight[data-v-0dd5fa6c]:hover{color:#9387ff}.underline[data-v-0dd5fa6c]{text-decoration:underline}",""]),o.locals={},e.exports=o},269:function(e,t,n){e.exports=n.p+"img/Blog.65a8bf5.svg"},270:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8cGF0aCBkPSJNMTYuNTAwMSAwQzcuMzg3NDQgMCAwIDcuNDE4MzIgMCAxNi41NjkxQzAgMjQuNzc2MiA1Ljk0ODYxIDMxLjU3MzEgMTMuNzQ4MiAzMi44ODkzVjIwLjAyNThIOS43Njc5MVYxNS4zOTY4SDEzLjc0ODJWMTEuOTgzNUMxMy43NDgyIDguMDIzMTQgMTYuMTU3IDUuODY0OTcgMTkuNjc1OCA1Ljg2NDk3QzIxLjM2MSA1Ljg2NDk3IDIyLjgwOTMgNS45OTEwNyAyMy4yMjk3IDYuMDQ2NjFWMTAuMTg2M0wyMC43ODkyIDEwLjE4NzRDMTguODc2IDEwLjE4NzQgMTguNTA3MiAxMS4xMDAyIDE4LjUwNzIgMTIuNDQwMVYxNS4zOTQ0SDIzLjA3MjNMMjIuNDc2OSAyMC4wMjM1SDE4LjUwNzJWMzNDMjYuNjcwOSAzMi4wMDIyIDMzIDI1LjAzMjIgMzMgMTYuNTY0M0MzMyA3LjQxODMyIDI1LjYxMjYgMCAxNi41MDAxIDBaIiBmaWxsPSIjQzJBNTNBIi8+Cjwvc3ZnPgo="},271:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE2LjUgMzNDMjUuNjE0OSAzMyAzMyAyNS42MTQ5IDMzIDE2LjVDMzMgNy4zODUxMiAyNS42MTQ5IDAgMTYuNSAwQzcuMzg1MTIgMCAwIDcuMzg1MTIgMCAxNi41QzAgMjUuNjE0OSA3LjM4NTEyIDMzIDE2LjUgMzNaTTcuNTUwMTMgMTYuMTQyNUwyMy40NTg5IDEwLjAwODZDMjQuMTk3MyA5Ljc0MTg3IDI0Ljg0MjEgMTAuMTg4OCAyNC42MDI5IDExLjMwNTNMMjQuNjA0MiAxMS4zMDM5TDIxLjg5NTUgMjQuMDY1M0MyMS42OTQ3IDI0Ljk3IDIxLjE1NzEgMjUuMTkgMjAuNDA1IDI0Ljc2MzhMMTYuMjggMjEuNzIzNkwxNC4yOTA0IDIzLjY0MDRDMTQuMDcwNCAyMy44NjA0IDEzLjg4NDggMjQuMDQ2IDEzLjQ1ODUgMjQuMDQ2TDEzLjc1MTQgMTkuODQ4MUwyMS4zOTY0IDEyLjk0MTVDMjEuNzI5MSAxMi42NDg2IDIxLjMyMjEgMTIuNDgzNiAyMC44ODM1IDEyLjc3NTFMMTEuNDM1OSAxOC43MjM0TDcuMzYzMTIgMTcuNDUyOUM2LjQ3OSAxNy4xNzI0IDYuNDU5NzUgMTYuNTY4OCA3LjU1MDEzIDE2LjE0MjVaIiBmaWxsPSIjQzJBNTNBIi8+Cjwvc3ZnPgo="},272:function(e,t,n){e.exports=n.p+"img/Twitter.993c4dc.svg"},273:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjE1NzEgMTAuNjA2OUg5Ljg0MjlMMTYuNSAxNi4zMTNMMjMuMTU3MSAxMC42MDY5WiIgZmlsbD0iI0MyQTUzQSIvPgo8cGF0aCBkPSJNMTYuNSAwQzcuMzg3MzYgMCAwIDcuMzg3MzYgMCAxNi41QzAgMjUuNjEyNiA3LjM4NzM2IDMzIDE2LjUgMzNDMjUuNjEyNiAzMyAzMyAyNS42MTI2IDMzIDE2LjVDMzIuOTg5NiA3LjM5MTY4IDI1LjYwODMgMC4wMTAzNTg1IDE2LjUgMFpNMjUuMzM5MyAyMi45ODIxQzI1LjMzOTMgMjMuMzA3NiAyNS4wNzU0IDIzLjU3MTQgMjQuNzUgMjMuNTcxNEg4LjI1QzcuOTI0NTcgMjMuNTcxNCA3LjY2MDcxIDIzLjMwNzYgNy42NjA3MSAyMi45ODIxVjEwLjAxNzlDNy42NjA3MSA5LjY5MjQzIDcuOTI0NTcgOS40Mjg1NyA4LjI1IDkuNDI4NTdIMjQuNzVDMjUuMDc1NCA5LjQyODU3IDI1LjMzOTMgOS42OTI0MyAyNS4zMzkzIDEwLjAxNzlWMjIuOTgyMVoiIGZpbGw9IiNDMkE1M0EiLz4KPC9zdmc+Cg=="},274:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAzMyAzMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE0LjQ0NDggMTkuNTkxMkwxOS44MTIxIDE2LjQ5OTlMMTQuNDQ0OCAxMy40MDg3VjE5LjU5MTJaIiBmaWxsPSIjQzJBNTNBIi8+CjxwYXRoIGQ9Ik0xNi41IDBDNy4zODg2OSAwIDAgNy4zODg2OSAwIDE2LjVDMCAyNS42MTEzIDcuMzg4NjkgMzMgMTYuNSAzM0MyNS42MTEzIDMzIDMzIDI1LjYxMTMgMzMgMTYuNUMzMyA3LjM4ODY5IDI1LjYxMTMgMCAxNi41IDBaTTI2LjgxIDE2LjUxNjlDMjYuODEgMTYuNTE2OSAyNi44MSAxOS44NjMxIDI2LjM4NTUgMjEuNDc2N0MyNi4xNDc2IDIyLjM1OTkgMjUuNDUxMiAyMy4wNTYzIDI0LjU2OCAyMy4yOTRDMjIuOTU0NCAyMy43MTg4IDE2LjUgMjMuNzE4OCAxNi41IDIzLjcxODhDMTYuNSAyMy43MTg4IDEwLjA2MjUgMjMuNzE4OCA4LjQzMjAzIDIzLjI3NzFDNy41NDg4MiAyMy4wMzk1IDYuODUyNDIgMjIuMzQyOCA2LjYxNDUgMjEuNDU5NkM2LjE4OTc3IDE5Ljg2MzEgNi4xODk3NyAxNi41IDYuMTg5NzcgMTYuNUM2LjE4OTc3IDE2LjUgNi4xODk3NyAxMy4xNTQgNi42MTQ1IDExLjU0MDRDNi44NTIxNyAxMC42NTcyIDcuNTY1NjkgOS45NDM2NiA4LjQzMjAzIDkuNzA1OTlDMTAuMDQ1NiA5LjI4MTI1IDE2LjUgOS4yODEyNSAxNi41IDkuMjgxMjVDMTYuNSA5LjI4MTI1IDIyLjk1NDQgOS4yODEyNSAyNC41NjggOS43MjI4NUMyNS40NTEyIDkuOTYwNTMgMjYuMTQ3NiAxMC42NTcyIDI2LjM4NTUgMTEuNTQwNEMyNi44MjcxIDEzLjE1NCAyNi44MSAxNi41MTY5IDI2LjgxIDE2LjUxNjlaIiBmaWxsPSIjQzJBNTNBIi8+Cjwvc3ZnPgo="},275:function(e,t,n){e.exports=n.p+"img/Discord.9427088.svg"},276:function(e,t,n){"use strict";n(192)},277:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-footer[data-v-71de6d3e]{display:flex;width:100%;flex-wrap:wrap;align-items:center;justify-content:center}.core-footerLink[data-v-71de6d3e]{margin-left:1rem;margin-right:1rem;margin-top:1rem;margin-bottom:1rem}.core-footerIcon[data-v-71de6d3e]:hover{filter:brightness(0) invert(1) url(#hover-color)}.svg-filter[data-v-71de6d3e]{display:none}@media (min-width:768px){.core-footerIcon[data-v-71de6d3e]{width:33px;height:33px}}",""]),o.locals={},e.exports=o},278:function(e,t,n){"use strict";n(193)},279:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".highlight[data-v-5b0be819]{color:#c2a53a}.highlight[data-v-5b0be819]:hover{color:#9387ff}.core-localeLink[data-v-5b0be819]:not(.highlight):not(.--customized){color:#c2a53a}.core-localeLink[data-v-5b0be819]:not(.highlight):not(.--customized):hover{color:#9387ff}",""]),o.locals={},e.exports=o},28:function(e,t,n){"use strict";n.r(t);var o=n(76);n.d(t,"ExtLink",(function(){return o.default}));var r=n(101);n.d(t,"LocaleLink",(function(){return r.default}))},280:function(e,t,n){"use strict";n(194)},281:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-footer[data-v-2041547c]{background-color:#18152d}.core-footer__copyright[data-v-2041547c]{background-color:#0e0d1c}",""]),o.locals={},e.exports=o},282:function(e,t,n){e.exports=n.p+"img/snake-icon.8021fe2.svg"},284:function(e,t,n){"use strict";n(196)},285:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-menu[data-v-23de25d9]{position:absolute;transform-origin:top right;border-radius:0.25rem;opacity:0.8;top:48px;left:50%;transform:translateX(-50%);background-color:#1b1a2e;border:1px solid #c2a53a}",""]),o.locals={},e.exports=o},286:function(e,t,n){"use strict";n(197)},287:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-menuItem[data-v-74ed5145]{color:#b5b5b5}.core-menuItem[data-v-74ed5145]:hover{color:#7568f6}",""]),o.locals={},e.exports=o},288:function(e,t,n){"use strict";n(198)},289:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".options-menu[data-v-5ed8e143]{display:inline-flex;height:100%;width:100%;align-items:center;justify-content:center;background-color:transparent;z-index:100}",""]),o.locals={},e.exports=o},290:function(e,t,n){"use strict";n(199)},291:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-navBarItem[data-v-07600187]{color:#c7c7c7;font-weight:700}.core-navBarItem.--active[data-v-07600187],.core-navBarItem.--active .options-menu[data-v-07600187],.core-navBarItem[data-v-07600187]:hover{color:#c2a53a}",""]),o.locals={},e.exports=o},292:function(e,t,n){"use strict";n(200)},293:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-navBarItemAccordion[data-v-0807b7a2]{margin-top:1rem;margin-bottom:1rem;display:flex;width:100%;cursor:pointer;flex-direction:column;justify-content:center}.core-navBarItemAccordion__label[data-v-0807b7a2]{display:inline-flex;align-items:center;justify-content:center;color:#c2a53a}.core-navBarItemAccordion__items[data-v-0807b7a2]{margin-top:1rem;display:flex;flex-direction:column;justify-content:center;background-color:#27244c}.core-navBarItemAccordion__items>.core-localeLink[data-v-0807b7a2]{display:inline-flex;justify-content:center;padding-top:1rem;padding-bottom:1rem;color:#c2a53a}.core-navBarItemAccordion__items>.core-localeLink[data-v-0807b7a2]:hover{color:#7568f6}",""]),o.locals={},e.exports=o},294:function(e,t,n){"use strict";n(201)},295:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-navBarHamburgerSlideInMenu[data-v-9e6baffc]{position:fixed;top:0px;right:0px;display:flex;height:100%;width:66.666667%;flex-direction:column;padding-top:2.5rem;font-weight:700;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));background-color:#191731;z-index:1000}.core-navBarHamburgerSlideInMenu__item[data-v-9e6baffc]{display:flex;width:100%;align-items:center;justify-content:center;padding:1rem;color:#c2a53a}.core-navBarHamburgerSlideInMenu__item[data-v-9e6baffc]:hover{color:#7568f6}.close-icon-button[data-v-9e6baffc]{position:relative;--tw-rotate:45deg;transform:var(--tw-transform);transform:var(--tw-transform);cursor:pointer;font-size:2.25rem;line-height:2.5rem;z-index:1001;color:#c2a53a}",""]),o.locals={},e.exports=o},296:function(e,t,n){"use strict";n(202)},297:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".core-localeSwitch[data-v-1f3ac1e2]{color:#c7c7c7;font-weight:700}",""]),o.locals={},e.exports=o},298:function(e,t,n){"use strict";n(203)},299:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,".header-container[data-v-478a7e84]{height:100%;width:100%;align-items:center;justify-content:space-between;padding-left:1rem;padding-right:1rem;font-size:0.875rem;line-height:1.25rem}.header-container.--desktop[data-v-478a7e84]{color:#c2a53a;background-color:#121023}.header-container.--desktop .core-localeSwitch[data-v-478a7e84]:hover{color:#c2a53a}.header-container.--mobile[data-v-478a7e84]{color:#c2a53a;background-color:#1c1a38}.header-container.--mobile .core-localeSwitch[data-v-478a7e84]{color:#c2a53a}.header-container.--mobile .core-localeSwitch[data-v-478a7e84]:hover{background-color:unset}",""]),o.locals={},e.exports=o},300:function(e,t,n){"use strict";n(204)},301:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,"div[data-v-466daed0]{flex-direction:row;color:#fff;background-color:#8278f5}div[data-v-466daed0],nav[data-v-466daed0]{display:flex;justify-content:center;align-items:center}nav[data-v-466daed0]{flex:1}.hidden[data-v-466daed0]{display:none;transition:height .25s ease-out}#closeBarBtn[data-v-466daed0]{height:100%;cursor:pointer}",""]),o.locals={},e.exports=o},302:function(e,t,n){e.exports=n.p+"img/og-img.bb9ef30.jpg"},303:function(e,t,n){"use strict";n(205)},304:function(e,t,n){var o=n(19)((function(i){return i[1]}));o.push([e.i,"html{font-family:Source Sans Pro, -apple-system, Roboto, Helvetica Neue, sans-serif;font-size:20px;color:#c7c7c7;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;background:#121023}*,:after,:before{box-sizing:border-box;margin:0}.default-layout__header{position:fixed;width:100%;z-index:1000;height:48px}.default-layout__body{display:grid;grid-template-columns:100%}",""]),o.locals={},e.exports=o},367:function(e,t,n){"use strict";n.r(t),n.d(t,"state",(function(){return c})),n.d(t,"mutations",(function(){return l})),n.d(t,"actions",(function(){return d}));var o=n(4),r=(n(40),function(e){return function(t,n){return t[e]=n}}),c=function(){return{sponsorsData:[],jobsData:[],keynotesData:[]}},l={setSponsorsData:r("sponsorsData"),setJobsData:r("jobsData"),setKeynotesData:r("keynotesData")},d={$getSponsorsData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,t.$http.$get("/api/sponsors");case 3:r=n.sent,data=r.data,o("setSponsorsData",data);case 6:case"end":return n.stop()}}),n)})))()},$getJobsData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,t.$http.$get("/api/sponsors/jobs");case 3:r=n.sent,data=r.data,o("setJobsData",data);case 6:case"end":return n.stop()}}),n)})))()},$getKeynotesData:function(e){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=e.commit,n.next=3,t.$http.$get("/api/events/keynotes");case 3:r=n.sent,o("setKeynotesData",r);case 5:case"end":return n.stop()}}),n)})))()}}},49:function(e,t,n){"use strict";n.r(t);n(283);t.default=Object.freeze({conferenceItems:[{i18nKey:"schedule",value:"/conference/schedule"},{i18nKey:"keynotes",value:"/conference/keynotes"},{i18nKey:"talks",value:"/conference/talks"},{i18nKey:"tutorials",value:"/conference/tutorials"},{i18nKey:"communityTracks",value:"/conference/community-tracks"}],speakingItems:[{i18nKey:"cfp",value:"/speaking/cfp"},{i18nKey:"talk",value:"/speaking/talk"},{i18nKey:"tutorial",value:"/speaking/tutorial"},{i18nKey:"recording",value:"/speaking/recording"}],eventsItems:[{i18nKey:"jobs",value:"/events/jobs"}],registrationItems:[{i18nKey:"financialAid",value:"/registration/financial-aid"}],aboutItems:[{i18nKey:"pycontw",value:"/about"},{i18nKey:"history",value:"/about/history"},{i18nKey:"community",value:"/about/community"},{i18nKey:"codeOfConduct",value:"/about/code-of-conduct"}]})},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var o=function(e){return{messages:e}}},76:function(e,t,n){"use strict";n.r(t);var o={name:"CoreExtLink",props:{href:{type:String,default:""},highlight:{type:Boolean,default:!1},underline:{type:Boolean,default:!1}},computed:{classObject:function(){return{"core-extLink":!0,"outline-none":!0,"cursor-pointer":!0,highlight:this.highlight,underline:this.underline}}}},r=(n(267),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{class:e.classObject,attrs:{href:e.href,rel:"noopener noreferrer",target:"_blank"}},[e._t("default")],2)}),[],!1,null,"0dd5fa6c",null);t.default=component.exports},80:function(e,t,n){"use strict";n.r(t);var o={name:"MenuItem",components:{LocaleLink:n(28).LocaleLink},props:{href:{type:String,default:""}},computed:{itemClasses:function(){return["core-menuItem","block","px-4","py-2","text-center","text-xs"]},readonly:function(){return!this.href}},methods:{onClick:function(e){this.$emit("click",e)}}},r=(n(286),n(5)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"py-1",on:{click:e.onClick}},[e.readonly?n("div",{class:e.itemClasses},[e._t("default")],2):n("locale-link",{class:e.itemClasses,attrs:{to:e.href,role:"menuitem",customized:""}},[e._t("default")],2)],1)}),[],!1,null,"74ed5145",null);t.default=component.exports}},[[233,70,2,71]]]);