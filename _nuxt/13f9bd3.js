(window.webpackJsonp=window.webpackJsonp||[]).push([[42,8],{359:function(e,n,t){var content=t(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(20).default)("0573e392",content,!0,{sourceMap:!1})},360:function(e,n,t){"use strict";t(359)},361:function(e,n,t){var o=t(19)((function(i){return i[1]}));o.push([e.i,"h1[data-v-fb2b20a4]{margin-top:2rem;margin-bottom:2rem;width:100%;text-align:center;font-size:1.875rem;line-height:2.25rem}h2[data-v-fb2b20a4]{margin-top:5rem;margin-bottom:1.5rem;width:100%;font-size:1.5rem;line-height:2rem}h3[data-v-fb2b20a4]{margin-top:2.5rem;margin-bottom:1rem;width:100%;font-size:1.25rem;line-height:1.75rem}.paragraph[data-v-fb2b20a4], p[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:1rem;width:100%;text-align:justify}span.text-2s[data-v-fb2b20a4]{font-size:.625rem}ul[data-v-fb2b20a4]{margin-bottom:1.5rem}ul.list-disc[data-v-fb2b20a4]{padding-left:3rem}li[data-v-fb2b20a4]{margin-top:0.25rem;margin-bottom:0.25rem}",""]),o.locals={},e.exports=o},362:function(e,n,t){"use strict";t.r(n);var o={name:"I18nPageWrapper",props:{customX:{type:Boolean,default:!1},customY:{type:Boolean,default:!1}},computed:{classObject:function(){return{"w-full":!0,"px-8":!this.customX,"py-24":!this.customY,"sm:px-20":!this.customX,"md:px-32":!this.customX,"lg:px-32":!this.customX}}}},r=(t(360),t(5)),component=Object(r.a)(o,(function(){var e=this,n=e.$createElement;return(e._self._c||n)("div",{class:e.classObject},[e._t("default")],2)}),[],!1,null,"fb2b20a4",null);n.default=component.exports},504:function(e,n,t){"use strict";t.r(n);var o=t(362),r=t(63),l={i18n:Object(r.a)({"en-us":{title:"Staff",contents:[{key:"chairperson",organization:"Chairperson"},{key:"program",organization:"Program"},{key:"development_web",organization:"Development (web)"},{key:"development_data",organization:"Development (data)"},{key:"development_infra",organization:"Development (infra)"},{key:"venue",organization:"Venue"},{key:"marketing",organization:"Marketing"},{key:"registration",organization:"Registration"},{key:"recruitment",organization:"Recruitment"},{key:"design",organization:"Design"},{key:"finance",organization:"Finance"},{key:"photography",organization:"Photography"}]},"zh-hant":{title:"工作人員",contents:[{key:"chairperson",organization:"主席"},{key:"program",organization:"議程"},{key:"development_web",organization:"開發（網站）"},{key:"development_data",organization:"開發（資料）"},{key:"development_infra",organization:"開發（基礎設施）"},{key:"venue",organization:"場務"},{key:"marketing",organization:"行銷"},{key:"registration",organization:"註冊"},{key:"recruitment",organization:"招募"},{key:"design",organization:"設計"},{key:"finance",organization:"財務"},{key:"photography",organization:"攝影"}]}}),name:"PageStaff",components:{I18nPageWrapper:o.default},data:function(){return{member_list:{chairperson:["Wei Lee"],program:["Winnie","Pochun","Petertc","JunWei Song","Annie Bu","Jordan Su","Gina","Kyle","Yider","Tony","黃坤賢","TingYi","Winfred","Shihchi","Huei Lin","Benson","Jason","Kir","Leonard","Lance","Shirley"],development_web:["Matt Wang","Kaka Lin","Ethan Lin","Max","Set Mao","Maliao","Flynn","Alice Chang","SHY","Phil","Benson"],development_data:["泰瑋","Hane","Jacky","Grimmer","Howard","Juihsiang"],development_infra:["Josix","SHY","Mozix","Cloudy","GaryPai","Jacky"],venue:["David Lu","地瓜","Yider","Matthew","真瑜","Ray","Jason","Juihsiang","Kevin","Ben","Macs","阿嘉","Allen","Ching","J魚","Julie","Derek","Luke","陳彥愷","Tim","liyu"],marketing:["Tumi","Gobby Chen","四貓","9ukei","Derek","品淳","寬寬","小玖","Allen","Tony","Ken","Mary","Cynthia Lu","Rain","Tai","yuhow5566","坤賢"],registration:["育承","Tumi","GTB","岱瑾","twtrubiks"],recruitment:["Rex","Josix","四貓","Tai","Leila"],design:["Ben","小玖","王禹翔","安安","Sandy","Carol Cho","Cailin"],finance:["Rock","Leila"],photography:["Andy Chuang"]}}}},m=t(5),component=Object(m.a)(l,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("i18n-page-wrapper",[t("h1",[e._v(e._s(e.$t("title")))]),e._v(" "),t("div",{staticClass:"flex flex-col items-center"},e._l(e.$t("contents"),(function(content,i){return t("div",{key:"staff_content_"+i},[t("h2",{staticClass:"flex flex-col items-center"},[e._v("\n                "+e._s(content.organization)+"\n            ")]),e._v(" "),e._l(e.member_list[content.key],(function(n,o){return t("p",{key:"staff_members_"+o,staticClass:"flex flex-col items-center"},[e._v("\n                "+e._s(n)+"\n            ")])}))],2)})),0)])}),[],!1,null,"4c13d8c6",null);n.default=component.exports}}]);