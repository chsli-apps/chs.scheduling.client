(function(e){function t(t){for(var n,s,r=t[0],o=t[1],c=t[2],u=0,v=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&v.push(i[s][0]),i[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(v.length)v.shift()();return l.push.apply(l,c||[]),a()}function a(){for(var e,t=0;t<l.length;t++){for(var a=l[t],n=!0,r=1;r<a.length;r++){var o=a[r];0!==i[o]&&(n=!1)}n&&(l.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},i={app:0},l=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/chs.scheduling.client/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=o;l.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"554a":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[e.displayTitleField?a("v-app-bar",{staticStyle:{"font-size":"25px"},attrs:{app:"",color:"primary",dark:""}},[e._v("\n    CHSLI PPE Hub Staffing Schedule\n    "),a("v-spacer"),a("v-col",{attrs:{cols:"3"}},[e.displayField?a("v-text-field",{staticStyle:{height:"56px"},attrs:{label:"Password",filled:""},model:{value:e.enteredText,callback:function(t){e.enteredText=t},expression:"enteredText"}}):e._e()],1),a("v-col",{attrs:{cols:"1"}},[e.displayField?a("v-btn",{attrs:{small:"",color:"grey"},on:{click:e.login}},[e._v("Login")]):e._e()],1),a("v-col",{attrs:{cols:"1"}},["LOGOUT"==this.buttonText?a("v-btn",{attrs:{small:"",color:"grey"},on:{click:e.report}},[e._v("Report")]):e._e()],1),a("v-col",{attrs:{cols:"2"}},[a("v-btn",{attrs:{right:"",small:"",color:"error"},on:{click:e.login}},[e._v(e._s(e.buttonText))])],1)],1):e._e(),a("v-content",[a("Scheduling",{ref:"scheduling",on:{backToMain:e.toggleTitleField}})],1)],1)},l=[],s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("div",{attrs:{id:"app"}},[a("v-app",{attrs:{id:"inspire"}},[e.rptView?e._e():a("div",[a("div",{staticStyle:{"font-size":"14px"}},[a("p",[e._v("\n            Please reach out to\n            "),a("a",{attrs:{href:"mailto:Kathleen.Kennedy@chsli.org"}},[e._v("Kathleen.Kennedy@chsli.org")]),e._v(" with questions.\n          ")]),a("p",[e._v("\n            1) Select the Facility\n            "),a("br"),e._v("2) Choose your shift by selecting the appropriate date and shift "),a("br"),e._v("3) Please enter the required information. You may use a CHSLI email or personal email address. "),a("br"),e._v("4) Once\n            you select SUBMIT, you will be unable to edit. You are confirmed for that shift and should receive and email with additional information. "),a("br"),e._v("5) If you need to CHANGE your shift,\n            please email\n            "),a("a",{attrs:{href:"mailto:Kathleen.Kennedy@chsli.org"}},[e._v("Kathleen.Kennedy@chsli.org")])])]),a("v-sheet",{staticStyle:{"background-color":"yellow","text-align":"center",height:"42px",position:"relative","margin-bottom":"1px"}},[a("div",{staticStyle:{"font-weight":"strong","bac\n            kground-color":"yellow",position:"absolute",top:"50%",transform:"translateY(-50%)",left:"50%"}},[e._v("\n            "+e._s(e.selectedMonth.toUpperCase()+" "+e.selectedYear+" - "+e.facility)+"\n          ")]),a("span",{domProps:{innerHTML:e._s(e.selectedLegend)}})]),a("v-sheet",{staticClass:"d-flex",staticStyle:{width:"100%"},attrs:{tile:"",height:"50",color:"grey lighten-3"}},[a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.prev()}}},[a("v-icon",[e._v("mdi-chevron-left")])],1),a("v-select",{staticClass:"ma-2",staticStyle:{width:"20px"},attrs:{items:e.facilities,dense:"",outlined:"","hide-details":"",label:"Facility"},on:{change:e.forceUpdate},model:{value:e.facility,callback:function(t){e.facility=t},expression:"facility"}}),a("v-select",{staticClass:"ma-2",staticStyle:{width:"30px"},attrs:{items:e.types,dense:"",outlined:"","hide-details":"",label:"View"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),a("v-spacer"),a("v-btn",{staticClass:"ma-2",attrs:{icon:""},on:{click:function(t){return e.$refs.calendar.next()}}},[a("v-icon",[e._v("mdi-chevron-right")])],1)],1),a("v-sheet",{attrs:{height:"800"}},[a("v-calendar",{key:e.calendarKey,ref:"calendar",attrs:{weekdays:e.weekday,type:e.type,events:e.events,"event-overlap-mode":e.mode,"event-overlap-threshold":30,"event-color":e.getEventColor,"show-month-on-first":"true"},on:{change:e.getEvents,"click:event":e.showEvent},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}}),a("v-menu",{attrs:{"close-on-content-click":!1,activator:e.selectedElement,"offset-x":""},model:{value:e.selectedOpen,callback:function(t){e.selectedOpen=t},expression:"selectedOpen"}},[a("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[a("v-toolbar",{attrs:{color:e.selectedEvent.color,dark:""}},[a("v-toolbar-title",{domProps:{innerHTML:e._s(e.selectedEvent.name)}})],1),a("v-card-text",[a("v-snackbar",{attrs:{color:e.snackbarColor,timeout:e.snackbarTimeout},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n                  "+e._s(e.snackbarText)+"\n                  "),a("v-btn",{attrs:{color:"black",text:""},on:{click:e.closeSnackbar}},[e._v("Close")])],1),a("v-form",{model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-row",[a("v-col",[a("v-text-field",{attrs:{label:"Start Date/Time",disabled:""},model:{value:e.selectedEvent.startDisplay,callback:function(t){e.$set(e.selectedEvent,"startDisplay",t)},expression:"selectedEvent.startDisplay"}})],1),a("v-col",[a("v-text-field",{attrs:{label:"End Date/Time",disabled:""},model:{value:e.selectedEvent.endDisplay,callback:function(t){e.$set(e.selectedEvent,"endDisplay",t)},expression:"selectedEvent.endDisplay"}})],1)],1),a("v-text-field",{attrs:{label:"First Name",rules:e.nameRules,disabled:-1!=e.selectedEvent.id&&!e.isAdmin},model:{value:e.selectedEvent.firstname,callback:function(t){e.$set(e.selectedEvent,"firstname",t)},expression:"selectedEvent.firstname"}}),a("v-text-field",{attrs:{label:"Last Name",rules:e.nameRules,disabled:-1!=e.selectedEvent.id&&!e.isAdmin},model:{value:e.selectedEvent.lastname,callback:function(t){e.$set(e.selectedEvent,"lastname",t)},expression:"selectedEvent.lastname"}}),-1===e.selectedEvent.id||e.isAdmin?a("v-text-field",{attrs:{label:"Email",rules:e.emailRules,disabled:-1!=e.selectedEvent.id&&!e.isAdmin},model:{value:e.selectedEvent.email,callback:function(t){e.$set(e.selectedEvent,"email",t)},expression:"selectedEvent.email"}}):e._e(),-1===e.selectedEvent.id||e.isAdmin?a("v-text-field",{directives:[{name:"mask",rawName:"v-mask",value:e.mask,expression:"mask"}],attrs:{label:"Cell Phone",disabled:-1!=e.selectedEvent.id&&!e.isAdmin,rules:e.phoneRules},model:{value:e.selectedEvent.cell,callback:function(t){e.$set(e.selectedEvent,"cell",t)},expression:"selectedEvent.cell"}}):e._e()],1)],1),a("v-card-actions",[a("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(t){e.selectedOpen=!1}}},[e._v("Cancel")]),-1===e.selectedEvent.id||e.isAdmin?a("v-btn",{attrs:{text:"",color:"primary"},on:{click:e.saveEvent}},[e._v("Submit")]):e._e(),a("v-spacer"),-1!=e.selectedEvent.id&&e.isAdmin?a("v-btn",{attrs:{right:"",text:"",color:"error"},on:{click:function(t){e.confirmDialog=!0}}},[e._v("Delete")]):e._e()],1)],1)],1)],1),a("v-dialog",{attrs:{persistent:"","max-width":"290"},model:{value:e.confirmDialog,callback:function(t){e.confirmDialog=t},expression:"confirmDialog"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[e._v("Deleting Entry?")]),a("v-card-text",[e._v("\n              "+e._s("Do you want to remove the registration for "+e.selectedEvent.firstname+" "+e.selectedEvent.lastname+" on "+e.selectedEvent.startDisplay+" - "+e.selectedEvent.endDisplay+"?")+"\n            ")]),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"grey",text:""},on:{click:function(t){e.confirmDialog=!1}}},[e._v("Cancel")]),a("v-btn",{attrs:{color:"error",text:""},on:{click:e.deleteEvent}},[e._v("Delete")])],1)],1)],1)],1),e.rptView?a("div",[a("v-btn",{attrs:{color:"grey"},on:{click:e.backToMain}},[e._v("Back")]),a("h2",[e._v("Schedule Report")]),a("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.rptHeaders,items:e.events,"disable-pagination":"","hide-default-footer":"",id:"dataTableId",dense:"true"}})],1):e._e()])],1)])},r=[],o=(a("386d"),a("28a5"),a("ac6a"),a("5df3"),a("4f7f"),a("75fc")),c=a("3a60"),d=a("bc3a"),u=["January","February","March","April","May","June","July","August","September","October","November","December"],v="https://www030.chsli.org:3004/scheduling",f={name:"Scheduling",directives:{mask:c["mask"]},data:function(){return{data:{schedule:[],assigned:[]},isAdmin:!1,type:"month",types:["month","week","day","4day"],mode:"stack",modes:["stack","column"],weekday:[1,2,3,4,5,6,0],weekdays:[{text:"Sun - Sat",value:[0,1,2,3,4,5,6]},{text:"Mon - Sun",value:[1,2,3,4,5,6,0]},{text:"Mon - Fri",value:[1,2,3,4,5]}],value:"",events:[],facility:"MMC",selectedMonth:"",selectedYear:"",selectedEvent:{id:-1,firstName:"",lastName:"",email:"",cell:""},selectedElement:null,selectedOpen:!1,selectedLegend:"",snackbar:!1,snackbarText:"",snackbarColor:"",snackbarMode:"",snackbarTimeout:0,confirmDialog:!1,valid:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)||"E-mail must be valid"}],nameRules:[function(e){return!!e||"Name is required"}],phoneRules:[function(e){return!!e||"Cell Phone is required"},function(e){return e&&14===e.length||"Cell Phone must be valid"}],mask:"(###) ###-####",calendarKey:0,rptView:!1,rptHeaders:[{text:"Date",value:"startDateDisplay"},{text:"Start Time",value:"startTimeDisplay"},{text:"End Time",value:"endTimeDisplay"},{text:"Lastname",value:"lastname"},{text:"Firstname",value:"firstname"},{text:"Email",value:"email"},{text:"Cell #",value:"cell"}]}},computed:{facilities:function(){return Object(o["a"])(new Set(this.data.schedule.map((function(e){return e.facility}))))}},created:function(){this.refreshData()},beforeMount:function(){for(var e=window.location.search.substring(1).split("&"),t=0;t<e.length;t++){var a=e[t].split("=");"facility"===decodeURIComponent(a[0])&&(this.facility=decodeURIComponent(a[1].toUpperCase()))}},methods:{refreshData:function(){var e=this;d.get("".concat(v,"/shifts")).then((function(t){return e.data.schedule=t.data,d.get("".concat(v,"/assignedShifts"))})).then((function(t){e.data.assigned=t.data,e.forceUpdate()})).catch((function(e){console.log("err - ",e)}))},getEvents:function(e){var t=this,a=e.start,n=e.end,i=[],l=new Date("".concat(a.date,"T00:00:00")),s=new Date("".concat(n.date,"T23:59:59")),r=(s.getTime()-l.getTime())/864e5,o=l;this.selectedMonth=u[l.getMonth()],this.selectedYear=l.getFullYear();var c=this.data.schedule.filter((function(e){return e.facility===t.facility})),d=[];this.selectedLegend='<div style="float:right;font-size:14px;margin-right:10px;margin-top:2px;">';for(var v=function(e){if(0===d.filter((function(t){return t==c[e].shift.charAt(0)})).length){var n=new Date("".concat(a.date,"T").concat(c[e].startTime)),i=new Date("".concat(a.date,"T").concat(c[e].endTime));t.selectedLegend+='<div><div class="legend" style="background-color:'.concat(c[e].color,';"></div>').concat(t.formatTimeUS(n)," - ").concat(t.formatTimeUS(i),"</div>"),d.push(c[e].shift.charAt(0))}},f=0;f<c.length;f++)v(f);this.selectedLegend+="</div>";for(var m=function(e){for(var n=o.toISOString().split("T")[0],s=function(l){var s=new Date("".concat(n,"T").concat(c[l].startTime)),r=new Date("".concat(n,"T").concat(c[l].endTime)),o=new Date("".concat(a.date,"T").concat(c[l].startTime)),d=new Date("".concat(a.date,"T").concat(c[l].endTime)),u=e+"-"+l,v=t.data.assigned.filter((function(e){return e.facility===t.facility&&e.shift==c[l].shift&&e.date===n})),f=-1,m=null,h=null,p=null,b=null;v[0]&&v[0].lastname&&(f=v[0].id,m=v[0].firstname,h=v[0].lastname,p=v[0].email,b=v[0].cell),i.push({name:"".concat(m||""," ").concat(h||""),start:t.formatDate(s),end:t.formatDate(r),startDisplay:t.formatDateUS(s),endDisplay:t.formatDateUS(r),startDateDisplay:t.formatDateUS(s).split(" ")[0],startTimeDisplay:t.formatTimeUS(o),endTimeDisplay:t.formatTimeUS(d),color:c[l].color,id:f,firstname:m,lastname:h,email:p,cell:b,shift:c[l].shift,eDate:n,facility:t.facility,dataTableId:u})},r=0;r<c.length;r++)s(r);o.setDate(l.getDate()+1)},h=0;h<r;h++)m(h);this.events=i},getEventColor:function(e){return e.color},formatDate:function(e){var t=e.getHours(),a=e.getMinutes();return a=a<10?"0"+a:a,e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()+" "+t+":"+a},formatDateUS:function(e){var t=this.formatTimeUS(e);return e.getMonth()+1+"-"+e.getDate()+"-"+e.getFullYear()+" "+t},formatTimeUS:function(e){var t=e.getHours(),a=e.getMinutes(),n=t>=12?"pm":"am";return t%=12,t=t||12,a=a<10?"0"+a:a,t+":"+a+" "+n},forceUpdate:function(){this.calendarKey++},showEvent:function(e){var t=this,a=e.nativeEvent,n=e.event,i=function(){t.selectedEvent=n,t.selectedElement=a.target,setTimeout((function(){return t.selectedOpen=!0}),10)};this.selectedOpen?(this.selectedOpen=!1,setTimeout(i,10)):i(),a.stopPropagation()},saveEvent:function(){var e=this;this.valid&&d.post("".concat(v,"/assignedShifts"),this.selectedEvent).then((function(t){e.snackbarText="Thank you for your submission.  It has been saved.",e.snackbarColor="success",e.snackbarMode="success",e.snackbar=!0,e.refreshData()})).catch((function(t){e.snackbarText="There was a problem saving your submission.  Err - ".concat(t),e.snackbarColor="error",e.snackbarMode="error",e.snackbar=!0}))},deleteEvent:function(){var e=this;d.post("".concat(v,"/deleteShifts"),this.selectedEvent).then((function(t){e.confirmDialog=!1,alert("The Entry has been removed."),e.refreshData()})).catch((function(t){e.confirmDialog=!1,alert("There was a problem deleting the entry.  Err - ",t),e.refreshData()}))},closeSnackbar:function(){this.snackbar=!1,"success"===this.snackbarMode&&(this.selectedOpen=!1)},backToMain:function(){this.rptView=!1,this.$emit("backToMain")}}},m=f,h=(a("c44b"),a("2877")),p=a("6544"),b=a.n(p),g=a("7496"),y=a("8336"),T=a("a4f6"),k=a("b0af"),x=a("99d9"),w=a("62ad"),E=a("a523"),D=a("8fea"),S=a("169a"),_=a("4bd4"),C=a("132d"),V=a("e449"),O=a("0fd9"),M=a("b974"),F=a("8dd9"),A=a("2db4"),U=a("2fa4"),P=a("8654"),$=a("71d9"),L=a("2a7f"),I=Object(h["a"])(m,s,r,!1,null,null,null),j=I.exports;b()(I,{VApp:g["a"],VBtn:y["a"],VCalendar:T["a"],VCard:k["a"],VCardActions:x["a"],VCardText:x["b"],VCardTitle:x["c"],VCol:w["a"],VContainer:E["a"],VDataTable:D["a"],VDialog:S["a"],VForm:_["a"],VIcon:C["a"],VMenu:V["a"],VRow:O["a"],VSelect:M["a"],VSheet:F["a"],VSnackbar:A["a"],VSpacer:U["a"],VTextField:P["a"],VToolbar:$["a"],VToolbarTitle:L["a"]});var R="Mercy@2020",K={name:"App",components:{Scheduling:j},data:function(){return{displayTitleField:!0,displayField:!1,buttonText:"Admin Use Only",enteredText:""}},methods:{toggleTitleField:function(){this.displayTitleField=!this.displayTitleField},toggleField:function(){this.displayField=!this.displayField},report:function(){this.toggleTitleField(),this.$refs.scheduling.rptView=!0},login:function(){"Admin Use Only"===this.buttonText?(this.displayField?this.enteredText==R?(alert("Logged In"),this.$refs.scheduling.isAdmin=!0,this.toggleField(),this.buttonText="LOGOUT"):alert("Incorrect Password"):this.toggleField(),this.enteredText=""):(this.$refs.scheduling.isAdmin=!1,this.buttonText="Admin Use Only")}}},H=K,Y=a("40dc"),N=a("a75b"),q=Object(h["a"])(H,i,l,!1,null,null,null),B=q.exports;b()(q,{VApp:g["a"],VAppBar:Y["a"],VBtn:y["a"],VCol:w["a"],VContent:N["a"],VSpacer:U["a"],VTextField:P["a"]});var J=a("f309");n["a"].use(J["a"]);var z=new J["a"]({});n["a"].config.productionTip=!1,new n["a"]({vuetify:z,render:function(e){return e(B)}}).$mount("#app")},c44b:function(e,t,a){"use strict";var n=a("554a"),i=a.n(n);i.a}});
//# sourceMappingURL=app.dd446c49.js.map