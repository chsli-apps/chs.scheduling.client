(function(e){function t(t){for(var a,r,i=t[0],c=t[1],s=t[2],u=0,f=[];u<i.length;u++)r=i[u],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&f.push(l[r][0]),l[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var c=n[i];0!==l[c]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=n[0]))}return e}var a={},l={app:0},o=[];function r(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=a,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/chs.scheduling.client/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}}),n("v-content",[n("HelloWorld")],1)],1)},o=[],r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("div",{attrs:{id:"app"}},[n("v-app",{attrs:{id:"inspire"}},[n("div",[n("v-sheet",{staticClass:"d-flex",attrs:{tile:"",height:"54",color:"grey lighten-3"}},[n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[n("v-icon",[e._v("mdi-chevron-left")])],1),n("v-select",{staticClass:"ma-2",attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),n("v-select",{staticClass:"ma-2",attrs:{items:e.modes,dense:"",outlined:"","hide-details":"",label:"event-overlap-mode"},model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}}),n("v-select",{staticClass:"ma-2",attrs:{items:e.weekdays,dense:"",outlined:"","hide-details":"",label:"weekdays"},model:{value:e.weekday,callback:function(t){e.weekday=t},expression:"weekday"}}),n("v-select",{staticClass:"ma-2",attrs:{items:e.facilities,dense:"",outlined:"","hide-details":"",label:"Facility"},on:{change:e.forceUpdate},model:{value:e.facility,callback:function(t){e.facility=t},expression:"facility"}}),n("v-spacer"),n("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[n("v-icon",[e._v("mdi-chevron-right")])],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{weekdays:e.weekday,type:e.type,events:e.events,"event-overlap-mode":e.mode,"event-overlap-threshold":30,"event-color":e.getEventColor},on:{change:e.getEvents,"click:event":e.showEvent},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[n("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}})],1),n("v-card-text",[n("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{attrs:{label:"First Name"},model:{value:e.event.firstName,callback:function(t){e.$set(e.event,"firstName",t)},expression:"event.firstName"}}),n("v-text-field",{attrs:{label:"Last Name"},model:{value:e.event.lastName,callback:function(t){e.$set(e.event,"lastName",t)},expression:"event.lastName"}}),n("v-text-field",{attrs:{label:"Email",rules:e.emailRules},model:{value:e.event.email,callback:function(t){e.$set(e.event,"email",t)},expression:"event.email"}}),n("v-text-field",{attrs:{label:"Cell Phone",mask:"###-###-####"},model:{value:e.event.cell,callback:function(t){e.$set(e.event,"cell",t)},expression:"event.cell"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("Cancel")]),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("Submit")])],1)],1)],1)],1)],1)])],1)])},i=[],c=(n("7f7f"),n("7514"),n("28a5"),n("d608")),s={name:"HelloWorld",data:function(){return{type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[0,1,2,3,4,5,6],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]}],value:"",events:[],colors:["blue","orange"],facility:"SFH",facilities:["SFH","SCH"],selectedEvent:{},selectedElement:null,selectedOpen:!1,valid:!1,event:{firstName:"",lastName:"",email:"",cell:""},emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}]}},methods:{getEvents:function(e){for(var t=this,n=e.start,a=e.end,l=!1,o=[],r=new Date("".concat(n.date,"T00:00:00")),i=new Date("".concat(a.date,"T23:59:59")),s=(i.getTime()-r.getTime())/864e5,d=r,u=function(e){for(var n=d.toISOString().split("T")[0],a=function(e){if(c.schedule[e].facility===t.facility){var a=new Date("".concat(n,"T").concat(c.schedule[e].startTime)),r=new Date("".concat(n,"T").concat(c.schedule[e].endTime)),i=c.assigned.find((function(a){return a.facility===t.facility&&a.shift===c.schedule[e].shift&&a.date===n})),s="";i&&i.name&&(s=i.name),o.push({name:s,start:t.formatDate(a,!l),end:t.formatDate(r,!l),color:t.colors[e]})}},i=0;i<c.schedule.length;i++)a(i);d.setDate(r.getDate()+1)},f=0;f<s;f++)u(f);this.events=o},getEventColor:function(e){return e.color},rnd:function(e,t){return Math.floor((t-e+1)*Math.random())+e},formatDate:function(e,t){return t?"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate()," ").concat(e.getHours(),":").concat(e.getMinutes()):"".concat(e.getFullYear(),"-").concat(e.getMonth()+1,"-").concat(e.getDate())},forceUpdate:function(){console.log("forceUpdate"),this.$forceUpdate()},showEvent:function(e){var t=this,n=e.nativeEvent,a=e.event,l=function(){t.selectedEvent=a,t.selectedElement=n.target,setTimeout((function(){return t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(l,10)):l(),n.stopPropagation()}}},d=s,u=n("2877"),f=n("6544"),v=n.n(f),m=n("7496"),p=n("8336"),h=n("a4f6"),b=n("b0af"),g=n("99d9"),y=n("a523"),k=n("4bd4"),w=n("132d"),x=n("e449"),T=n("b974"),O=n("8dd9"),S=n("2fa4"),C=n("8654"),E=n("71d9"),V=n("2a7f"),j=Object(u["a"])(d,r,i,!1,null,null,null),F=j.exports;v()(j,{VApp:m["a"],VBtn:p["a"],VCalendar:h["a"],VCard:b["a"],VCardActions:g["a"],VCardText:g["b"],VContainer:y["a"],VForm:k["a"],VIcon:w["a"],VMenu:x["a"],VSelect:T["a"],VSheet:O["a"],VSpacer:S["a"],VTextField:C["a"],VToolbar:E["a"],VToolbarTitle:V["a"]});var _={name:"App",components:{HelloWorld:F},data:function(){return{}}},H=_,N=n("40dc"),M=n("a75b"),D=Object(u["a"])(H,l,o,!1,null,null,null),$=D.exports;v()(D,{VApp:m["a"],VAppBar:N["a"],VContent:M["a"]});var P=n("9483");Object(P["a"])("".concat("/chs.scheduling.client/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var A=n("f309");a["a"].use(A["a"]);var U=new A["a"]({});a["a"].config.productionTip=!1,new a["a"]({vuetify:U,render:function(e){return e($)}}).$mount("#app")},d608:function(e){e.exports=JSON.parse('{"schedule":[{"facility":"SFH","shift":"1","startTime":"06:00","endTime":"14:00"},{"facility":"SFH","shift":"2","startTime":"14:00","endTime":"22:00"},{"facility":"SCH","shift":"1a","startTime":"16:00","endTime":"22:00"}],"assigned":[{"id":1,"facility":"SFH","shift":"1","date":"2020-04-01","name":"fullname fullnamefullname","email":"fullname@junk.com","cell":"111-111-1111"},{"id":2,"facility":"SCH","shift":"1","date":"2020-04-01","name":"sch fullnamefullname","email":"fullname@junk.com","cell":"111-111-1111"},{"id":3,"facility":"SFH","shift":"2","date":"2020-04-15","name":"sfh fullnamefullname","email":"fullname@junk.com","cell":"111-111-1111"}]}')}});
//# sourceMappingURL=app.cc2760f7.js.map