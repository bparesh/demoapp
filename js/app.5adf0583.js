(function(t){function e(e){for(var i,r,s=e[0],c=e[1],u=e[2],l=0,v=[];l<s.length;l++)r=s[l],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&v.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);d&&d(e);while(v.length)v.shift()();return a.push.apply(a,u||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],i=!0,r=1;r<o.length;r++){var c=o[r];0!==n[c]&&(i=!1)}i&&(a.splice(e--,1),t=s(s.s=o[0]))}return t}var i={},n={app:0},a=[];function r(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"9ce095f2"}[t]+".js"}function s(e){if(i[e])return i[e].exports;var o=i[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,s),o.l=!0,o.exports}s.e=function(t){var e=[],o=n[t];if(0!==o)if(o)e.push(o[2]);else{var i=new Promise((function(e,i){o=n[t]=[e,i]}));e.push(o[2]=i);var a,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=r(t);var u=new Error;a=function(e){c.onerror=c.onload=null,clearTimeout(l);var o=n[t];if(0!==o){if(o){var i=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}n[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:c})}),12e4);c.onerror=c.onload=a,document.head.appendChild(c)}return Promise.all(e)},s.m=t,s.c=i,s.d=function(t,e,o){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(s.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(o,i,function(e){return t[e]}.bind(null,i));return o},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var d=u;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"0528":function(t,e){t.exports="data:image/png;base64,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"},"16ed":function(t,e,o){},"243e":function(t,e,o){},"32b8":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var i=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",[o("v-main",[o("router-view")],1)],1)},a=[],r={name:"App",data:function(){return{}}},s=r,c=o("2877"),u=o("6544"),l=o.n(u),d=o("7496"),v=o("f6c4"),p=Object(c["a"])(s,n,a,!1,null,null,null),h=p.exports;l()(p,{VApp:d["a"],VMain:v["a"]});o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0");var m=o("8c4f"),f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("Header",{staticClass:"bottom-margin1"}),t.isSelected?o("div",["mentor"==t.option?o("div",[t.isQuestion?t.isRecording?t._e():o("Question",{attrs:{question_data:t.qs[t.counter]},on:{next_question:t.next_question}}):o("Mentor",{attrs:{title:t.user_title},on:{mentor_next:t.mentor_next}}),t.isRecording?o("Recording",{attrs:{recording_input:t.recording_inputs[t.counter]},on:{next_recording:t.next_recording,home:t.goHome}}):t._e()],1):o("div",[t.isSearch||t.isPlayVideo?t.isPlayVideo?t._e():o("Search",{attrs:{questionslist:t.search_list},on:{home:t.goHome,select:t.playVideo}}):o("Question",{attrs:{question_data:t.qs[t.counter]},on:{next_question:t.next_question}}),t.isPlayVideo?o("PlayVideo",{attrs:{video_url:t.video_url},on:{close:t.goHome,search_next:t.search_next}}):t._e()],1)]):o("Selection",{on:{selection:t.select_Option}})],1)},g=[],b=o("5530"),y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-app-bar",{attrs:{flat:""}},[i("v-toolbar-title",[i("v-img",{staticClass:"logo_css",attrs:{src:o("0528")}})],1),i("v-spacer"),i("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}})],1)],1)},C=[],k={name:"Header",data:function(){return{}},methods:{}},_=k,x=(o("5ee7"),o("40dc")),w=o("5bc1"),V=o("adda"),A=o("2fa4"),I=o("2a7f"),q=Object(c["a"])(_,y,C,!1,null,"5766862a",null),H=q.exports;l()(q,{VAppBar:x["a"],VAppBarNavIcon:w["a"],VImg:V["a"],VSpacer:A["a"],VToolbarTitle:I["a"]});var W=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blue-bg"},[o("div",{staticClass:"content"},[o("div",{staticClass:"center txtwhite"},[t._v(t._s(t.title))]),o("div",{staticClass:"center"},[o("video",{attrs:{width:"320",height:"240",controls:""}},[o("source",{attrs:{src:t.video_url,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")])]),o("div",{staticClass:"center mtop"},[o("v-btn",{attrs:{color:"blue",width:"150px",elevation:"2",rounded:""},on:{click:t.nav_next}},[t._v("Next "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-arrow-right-thin ")])],1)],1)])])},S=[],G={name:"Mentor_User",props:["title"],data:function(){return{video_url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}},methods:{nav_next:function(){console.log(this.$emit("mentor_next"))}}},j=G,R=(o("b6d5"),o("8336")),F=o("132d"),Q=Object(c["a"])(j,W,S,!1,null,"3033a0d7",null),O=Q.exports;l()(Q,{VBtn:R["a"],VIcon:F["a"]});var B=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"wrapper"},[o("div",{staticClass:"content"},[o("div",{staticClass:"q-title"},[t._v(t._s(t.question_data.title))]),o("v-radio-group",{staticClass:"options_ui",model:{value:t.answer,callback:function(e){t.answer=e},expression:"answer"}},t._l(t.question_data.options,(function(t){return o("v-radio",{key:t,attrs:{label:""+t,value:t}})})),1),o("div",{staticClass:"center"},[o("v-btn",{attrs:{color:"blue",elevation:"2",width:"150px",rounded:""},on:{click:t.nav_next}},[t._v("Next "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-arrow-right-thin ")])],1)],1)],1)])},L=[],T={props:["question_data"],name:"Question",data:function(){return{answer:""}},created:function(){console.log(this.question_data.title)},methods:{nav_next:function(){console.log(this.$emit("next_question"))}}},E=T,X=(o("5a73"),o("67b6")),Z=o("43a6"),P=Object(c["a"])(E,B,L,!1,null,"68de8151",null),Y=P.exports;l()(P,{VBtn:R["a"],VIcon:F["a"],VRadio:X["a"],VRadioGroup:Z["a"]});var N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"q-title"},[t._v(t._s(t.title))]),o("div",{staticClass:"rtitle"},[t._v(" "+t._s(t.recording_input.title))]),o("div",{staticClass:"center rVideo"},[t.isVideoCaptured?o("video",{attrs:{width:"320",height:"240",controls:""}},[o("source",{attrs:{src:t.video_url,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")]):t._e()]),o("div",{staticClass:"center margin-t-10",attrs:{width:"100%"}},[t.isCapturing?o("v-btn",{staticClass:"bgcolor1",attrs:{elevation:"2"},on:{click:t.stopCapture}},[t._v(" Stop "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-stop ")])],1):o("v-btn",{staticClass:"bgcolor",attrs:{elevation:"2",disabled:t.disableCapture},on:{click:t.captureVideo}},[t._v(" Capture "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-video-outline ")])],1)],1),o("v-row",[o("v-col",[o("v-btn",{attrs:{plain:""}},[t._v("View "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-video-box ")])],1)],1),o("v-col",[o("v-btn",{attrs:{plain:"",disabled:!t.isVideoCaptured},on:{click:function(e){t.dialog=!0}}},[t._v("Submit "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-check ")])],1)],1),o("v-col",[o("v-btn",{attrs:{plain:""},on:{click:t.enableCapture}},[t._v("Retake "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-refresh ")])],1)],1)],1),o("v-row",{staticClass:"margin-10"},[o("v-col",[o("v-btn",{staticClass:"size-x",attrs:{color:"blue",elevation:"2",rounded:""},on:{click:t.gohome}},[t._v("Back to Home "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-home ")])],1)],1),o("v-col",[o("v-btn",{staticClass:"size-x",attrs:{color:"blue",elevation:"2",rounded:""},on:{click:t.nav_next}},[t._v("Next question "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-arrow-right-thin ")])],1)],1)],1),o("v-dialog",{attrs:{"hide-overlay":""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[o("v-card",[o("v-card-title",{staticClass:"text-h5"},[t._v(" Video upload ")]),o("v-card-text",[t._v(" Video Sucessfully Submitted. ")]),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Close ")])],1)],1)],1)],1)},U=[],D={props:["recording_input"],name:"Question",data:function(){return{title:"Start Recording",isCapturing:!1,dialog:!1,disableCapture:!1,isVideoCaptured:!1,video_url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}},created:function(){console.log(this.recording_input.title)},methods:{nav_next:function(){this.$emit("next_recording")},gohome:function(){this.$emit("home")},captureVideo:function(){this.isCapturing=!0,this.isVideoCaptured=!1},stopCapture:function(){this.isCapturing=!1,this.disableCapture=!0,this.isVideoCaptured=!0},enableCapture:function(){this.disableCapture=!1}}},K=D,z=(o("5a01"),o("b0af")),J=o("99d9"),M=o("62ad"),$=o("169a"),tt=o("0fd9"),et=Object(c["a"])(K,N,U,!1,null,"3273453a",null),ot=et.exports;l()(et,{VBtn:R["a"],VCard:z["a"],VCardActions:J["a"],VCardText:J["b"],VCardTitle:J["c"],VCol:M["a"],VDialog:$["a"],VIcon:F["a"],VRow:tt["a"],VSpacer:A["a"]});var it=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blue-bg center"},[o("div",{staticClass:"content",on:{click:function(e){return t.selection("mentor")}}},[o("v-icon",{staticClass:"sel_btn",attrs:{right:"",dark:""}},[t._v(" mdi-video-plus ")]),o("span",{staticClass:"subtitle"},[t._v(" Mentor ")])],1),o("div",{staticClass:"content",on:{click:function(e){return t.selection("user")}}},[o("v-icon",{staticClass:"sel_btn",attrs:{right:"",dark:""}},[t._v(" mdi-movie-search ")]),o("span",{staticClass:"subtitle"},[t._v(" User ")])],1)])},nt=[],at={name:"Selection",data:function(){return{}},methods:{selection:function(t){this.$emit("selection",t)}}},rt=at,st=(o("8b83"),Object(c["a"])(rt,it,nt,!1,null,"c4088e7a",null)),ct=st.exports;l()(st,{VIcon:F["a"]});var ut=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"q-title"},[t._v(t._s(t.title))]),o("v-list",{attrs:{dense:""}},[o("v-list-item-group",{attrs:{color:"primary"},on:{change:t.selection_changed},model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.questionslist,(function(e,i){return o("v-list-item",{key:i},[o("v-list-item-icon",[o("v-icon",{domProps:{textContent:t._s(t.icon)}})],1),o("v-list-item-content",[o("v-list-item-title",{domProps:{textContent:t._s(e.q)}})],1)],1)})),1)],1),o("div",{staticClass:"center"},[o("v-btn",{attrs:{color:"blue",elevation:"2",width:"150px",rounded:""},on:{click:t.gohome}},[t._v("go home "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-home ")])],1)],1)],1)},lt=[],dt={props:["questionslist"],name:"Search",data:function(){return{selectedItem:void 0,icon:"mdi-play-circle-outline",title:"What Problems are you facing?"}},created:function(){console.log(this.questionslist)},methods:{nav_next:function(){this.$emit("next_recording")},gohome:function(){this.$emit("home")},selection_changed:function(){"undefined"!=typeof this.selectedItem&&this.$emit("select",this.questionslist[this.selectedItem].a)}}},vt=dt,pt=(o("8cc1"),o("8860")),ht=o("da13"),mt=o("5d23"),ft=o("1baa"),gt=o("34c3"),bt=Object(c["a"])(vt,ut,lt,!1,null,"2822530c",null),yt=bt.exports;l()(bt,{VBtn:R["a"],VIcon:F["a"],VList:pt["a"],VListItem:ht["a"],VListItemContent:mt["a"],VListItemGroup:ft["a"],VListItemIcon:gt["a"],VListItemTitle:mt["b"]});var Ct=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"blue-bg"},[o("div",{staticClass:"content"},[o("div",{staticClass:"center txtwhite"},[t._v(t._s(t.title))]),o("div",{staticClass:"center"},[o("video",{attrs:{width:"320",height:"240",controls:""}},[o("source",{attrs:{src:t.video_url,type:"video/mp4"}}),t._v(" Your browser does not support the video tag. ")])]),o("v-row",{staticClass:"margin-10"},[o("v-col",[o("v-btn",{staticClass:"size-x",attrs:{color:"blue",elevation:"2",rounded:""},on:{click:t.gohome}},[t._v("Close "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-close-circle ")])],1)],1),o("v-col",[o("v-btn",{staticClass:"size-x",attrs:{color:"blue",elevation:"2",rounded:""},on:{click:t.search_next}},[t._v("Continue Search "),o("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-arrow-right-thin ")])],1)],1)],1)],1)])},kt=[],_t={name:"Play Video",props:["video_url"],data:function(){return{title:"Continue Search"}},methods:{search_next:function(){this.$emit("search_next")},gohome:function(){this.$emit("close")}}},xt=_t,wt=(o("ef7e"),Object(c["a"])(xt,Ct,kt,!1,null,"a8b3855e",null)),Vt=wt.exports;l()(wt,{VBtn:R["a"],VCol:M["a"],VIcon:F["a"],VRow:tt["a"]});var At=o("2f62"),It={name:"Home",components:{Mentor:O,Question:Y,Recording:ot,Header:H,Selection:ct,Search:yt,PlayVideo:Vt},computed:Object(b["a"])({},Object(At["b"])(["isAuthenticated","currentUser"])),data:function(){return{isQuestion:!1,isRecording:!1,isSelected:!1,isSearch:!1,isPlayVideo:!1,video_url:"",option:"",user_title:"",counter:0,qs:[{title:"Today you are going to talk about which machine?",type:"select",options:["Lathe Machine","Wood cutting machine","Drill Machine"]},{title:"Model of the machine",type:"select",options:["GH0987","KL6790","RFR-07"]}],recording_inputs:[{title:"What does a three jaw chuck mean?"},{title:"How does it work?"}],search_list:[{q:"What does three jaw chuck mean?",a:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},{q:"How does it work?",a:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},{q:"What is universal chuck?",a:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},{q:"How is Horizontal feed is controlled?",a:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"},{q:"What is apron mechanism?",a:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"}]}},methods:{select_Option:function(t){this.option=t,this.user_title="mentor"==t?"You have entered as a mentor to provide Support Video":"Welcome to our support video",this.isSelected=!0},mentor_next:function(){this.isQuestion=!0},next_question:function(){this.counter<this.qs.length-1?this.counter++:("mentor"==this.option?this.isRecording=!0:(this.isSearch=!0,this.isQuestion=!1),this.counter=0)},next_recording:function(){this.counter<this.recording_inputs.length-1&&this.counter++},goHome:function(){this.isRecording=!1,this.counter=0,this.isSelected=!1,this.isQuestion=!1,this.isSearch=!1,this.isPlayVideo=!1},playVideo:function(t){this.isSearch=!1,this.isPlayVideo=!0,this.video_url=t},search_next:function(){this.isSearch=!0,this.isPlayVideo=!1}}},qt=It,Ht=(o("d38e"),Object(c["a"])(qt,f,g,!1,null,"20f8c67e",null)),Wt=Ht.exports,St=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-img",{staticClass:"logo",attrs:{src:o("cf05")}}),i("v-form",{ref:"form",staticClass:"bottom_login"},[i("v-text-field",{attrs:{label:"Username",required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}},[i("v-icon",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(" mdi-account ")])],1),i("v-text-field",{attrs:{label:"Password","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}},[i("v-icon",{attrs:{slot:"prepend"},slot:"prepend"},[t._v(" mdi-lock ")])],1),i("div",{staticClass:"button_center"},[i("v-btn",{attrs:{color:"blue",elevation:"2",rounded:""},on:{click:t.doLogin}},[t._v("Login "),i("v-icon",{attrs:{right:"",dark:""}},[t._v(" mdi-login ")])],1)],1)],1)],1)},Gt=[],jt={name:"Login",data:function(){return{show1:!1,username:"",password:""}},computed:Object(b["a"])({},Object(At["b"])(["isAuthenticated"])),methods:{doLogin:function(){this.$store.dispatch("login",{user:this.username,password:this.password}),this.isAuthenticated&&this.$router.push({name:"Home"})}}},Rt=jt,Ft=(o("aab6"),o("4bd4")),Qt=o("8654"),Ot=Object(c["a"])(Rt,St,Gt,!1,null,"8096d37a",null),Bt=Ot.exports;l()(Ot,{VBtn:R["a"],VForm:Ft["a"],VIcon:F["a"],VImg:V["a"],VTextField:Qt["a"]});var Lt={errors:null,user:{},userType:"",isAuthenticated:!1},Tt={isAuthenticated:function(t){return t.isAuthenticated},currentUser:function(t){return t.user}},Et={login:function(t,e){"user"==e.user&&"password"==e.password&&t.commit("set_auth",{user:{name:"user"},type:"user"})},logout:function(t){t.commit("reset_auth")}},Xt={set_auth:function(t,e){t.isAuthenticated=!0,t.user=e.user,t.errors={},t.userType=e.type},reset_auth:function(t){t.isAuthenticated=!1,t.user={},t.errors={},t.userType=""}},Zt={state:Lt,actions:Et,mutations:Xt,getters:Tt};i["a"].use(At["a"]);var Pt=new At["a"].Store({modules:{auth:Zt}});i["a"].use(m["a"]);var Yt=[{path:"/",name:"Home",component:Wt},{path:"/login",name:"Login",component:Bt},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],Nt=new m["a"]({mode:"history",base:"/",routes:Yt});Nt.beforeEach((function(t,e,o){return Pt.state.auth.isAuthenticated||"Login"==t.name||(console.log(t,e),o({path:"/login"})),o(),!0}));var Ut=Nt,Dt=o("f309");i["a"].use(Dt["a"]);var Kt=new Dt["a"]({});i["a"].config.productionTip=!1,new i["a"]({router:Ut,store:Pt,vuetify:Kt,render:function(t){return t(h)}}).$mount("#app")},"5a01":function(t,e,o){"use strict";o("d814")},"5a73":function(t,e,o){"use strict";o("8676")},"5ee7":function(t,e,o){"use strict";o("32b8")},7826:function(t,e,o){},"7d4c":function(t,e,o){},8676:function(t,e,o){},"8b83":function(t,e,o){"use strict";o("7d4c")},"8cc1":function(t,e,o){"use strict";o("243e")},"998c":function(t,e,o){},a6be:function(t,e,o){},aab6:function(t,e,o){"use strict";o("16ed")},b6d5:function(t,e,o){"use strict";o("a6be")},cf05:function(t,e,o){t.exports=o.p+"img/logo.0502f975.png"},d38e:function(t,e,o){"use strict";o("7826")},d814:function(t,e,o){},ef7e:function(t,e,o){"use strict";o("998c")}});
//# sourceMappingURL=app.5adf0583.js.map