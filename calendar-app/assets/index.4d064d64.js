import{d as t,c as e,o as s,a as n,b as r,F as o,w as a,p as i,e as l,r as c,f as h,t as d,n as u,g as m,h as p,i as y,j as g,k as f,v as x,l as v,m as b,q as k,s as w,u as C,x as N,y as D,z as $,A as I,B as S,C as E,D as L}from"./vendor.51be39b1.js";var q,M;!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver((t=>{for(const s of t)if("childList"===s.type)for(const t of s.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)})).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),"use-credentials"===t.crossorigin?e.credentials="include":"anonymous"===t.crossorigin?e.credentials="omit":e.credentials="same-origin",e}(t);fetch(t.href,e)}}(),(M=q||(q={})).get=t=>{const e=localStorage.getItem(t);if(!e)return null;try{return JSON.parse(e)}catch(s){throw s}},M.set=(t,e)=>{try{const s=JSON.stringify(e);return localStorage.setItem(t,s)}catch(s){throw s}},M.dm=t=>localStorage.removeItem(t);const j={days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"]};var T=t({name:"Logo"});const Y={class:"text-center md:text-left mb-4 md:mb-0"},A=[n("p",{class:"font-bold text-red-500 text-4xl"},"Calendar",-1),n("p",{class:"text-gray-500 opacity-75 text-base"},[r(" By "),n("strong",null,"ZYROUGE")],-1)];T.render=function(t,n,r,o,a,i){return s(),e("div",Y,A)};var O=t({name:"Calendar",components:{Logo:T,Icon:o},data:()=>({today:{date:0,month:0,year:0},current:{month:0,year:0,data:{events:{}}},prefixes:{days:j.days,months:j.months,iconClassNames:["text-3xl","text-indigo-300","hover:text-indigo-500","transition","duration-400","cursor-pointer","w-10"]},table:{days:0,tabs:[]}}),mounted(){let t,e;if("string"==typeof this.$route.query.month&&"string"==typeof this.$route.query.year){const s=parseInt(this.$route.query.month),n=parseInt(this.$route.query.year);if(s&&n){const r=new Date(n,s);r instanceof Date&&!isNaN(r)&&(t=r.getMonth(),e=r.getFullYear())}}this.prerequisite({month:t,year:e})},methods:{prerequisite(t){const e=new Date;this.current.month=(null==t?void 0:t.month)||e.getMonth()+1,this.current.year=(null==t?void 0:t.year)||e.getFullYear(),this.today={date:e.getDate(),month:e.getMonth()+1,year:e.getFullYear()},this.configure(),this.watch()},configure(){this.table=this.getTable(this.current.year,this.current.month),this.updateEvents(),this.$router.replace({query:{month:this.current.month.toString(),year:this.current.year.toString()}})},watch(){a(this.current,this.configure)},getTable(t,e){const s=new Date(t,e,0),n=new Date(t,e,1),r=s.getDate(),o=n.getDay();return{days:r,tabs:this.getTabs(r,o)}},getTabs(t,e){const s=[],n=Math.ceil((t+e)/7);let r=0;for(let o=0;o<n;o++){s[o]=[];for(let n=0;n<7;n++)0===o&&e>n||r>=t?s[o].push(0):(r+=1,s[o].push(r))}return s},getCurrentID(){return`${this.current.month}_${this.current.year}`},updateEvents(){const t=q.get(this.getCurrentID());t&&(this.current.data=t)},getDateClassNames(t){const e=["relative","border","py-3","md:py-6","rounded-lg","shadow-sm","hover:bg-gray-100","transition","duration-200","cursor-pointer","font-mono"];return this.current.year===this.today.year&&this.current.month===this.today.month&&t===this.today.date&&e.push("bg-indigo-500","text-white","hover:bg-indigo-600"),e},incrementMonth(){this.current.month=this.current.month+1>12?1:this.current.month+1},decrementMonth(){this.current.month=this.current.month-1<1?12:this.current.month-1},incrementYear(){this.current.year+=1},decrementYear(){this.current.year-=1},pushTo(t){this.$router.push({path:`/${this.current.year}/${this.current.month}/${t}`,query:this.$route.query})}}});i("data-v-4a1f965c");const F={class:"flex flex-col md:flex-row justify-between items-center pb-5 text-indigo-600 text-3xl md:mx-24 mt-10"},J={class:"text-center"},U={class:"flex justify-center items-stretch"},_={class:"mx-4 text-6xl"},B={class:"flex items-stretch justify-center mx-5 md:mx-10"},K={class:"border-separate flex-grow table w-full mx-2 md:mx-6 py-2 md:py-5 text-xl",id:"cal-table"},G={class:"bg-indigo-600 text-white"},H={class:"font-bold"},V=["onClick"],z={key:0},P={key:1,class:"opacity-30"},R={key:2,class:"absolute text-sm text-white bottom-1 right-1 bg-yellow-500 rounded-full w-5 h-5",title:"Seems like something has to be done, click me to view"};l(),O.render=function(t,r,o,a,i,l){const g=c("Logo"),f=c("Icon");return s(),e(m,null,[n("div",F,[h(g),n("div",J,[n("p",null,d(t.prefixes.months[t.current.month-1]),1),n("p",U,[n("button",{class:u(t.prefixes.iconClassNames),onClick:r[0]||(r[0]=e=>t.decrementYear())},[h(f,{icon:"chevron-left"})],2),n("span",_,d(t.current.year),1),n("button",{class:u(t.prefixes.iconClassNames),onClick:r[1]||(r[1]=e=>t.incrementYear())},[h(f,{icon:"chevron-right"})],2)])])]),n("div",B,[n("button",{class:u(t.prefixes.iconClassNames),onClick:r[2]||(r[2]=e=>t.decrementMonth())},[h(f,{icon:"chevron-left"})],2),n("table",K,[n("thead",null,[n("tr",G,[(s(!0),e(m,null,p(t.prefixes.days,(t=>(s(),e("th",{class:"py-2 rounded-full shadow",key:t},d(t.slice(0,3).toUpperCase()),1)))),128))])]),n("tbody",H,[(s(!0),e(m,null,p(t.table.tabs,(n=>(s(),e("tr",{class:"border border-gray-300",key:n},[(s(!0),e(m,null,p(n,(n=>(s(),e("th",{class:u(t.getDateClassNames(n)),key:n,onClick:e=>t.pushTo(n)},[n?(s(),e("p",z,d(n),1)):(s(),e("p",P,"-")),n&&t.current.data.events[n.toString()]&&t.current.data.events[n.toString()].length?(s(),e("span",R," ! ")):y("",!0)],10,V)))),128))])))),128))])]),n("button",{class:u(t.prefixes.iconClassNames),onClick:r[3]||(r[3]=e=>t.incrementMonth())},[h(f,{icon:"chevron-right"})],2)])],64)},O.__scopeId="data-v-4a1f965c";var W=t({name:"App",components:{Calendar:O}});const Z=n("br",null,null,-1);W.render=function(t,n,r,o,a,i){const l=c("router-view");return s(),e(m,null,[h(l),Z],64)};var Q=t({name:"Day",components:{Logo:T,Icon:o},data:()=>({date:0,day:0,month:0,year:0,events:[],err:null,prefixes:{days:j.days,months:j.months,listClassNames:["bg-indigo-100","text-gray-600","rounded","px-5","py-3","my-2"]},nList:{title:"",description:""},dispNewEvent:!1}),mounted(){this.configure()},methods:{configure(){if("string"==typeof this.$route.params.date&&"string"==typeof this.$route.params.month&&"string"==typeof this.$route.params.year){const t=parseInt(this.$route.params.date),e=parseInt(this.$route.params.month),s=parseInt(this.$route.params.year);if(t&&e&&s){const n=new Date(s,e,t);if(n instanceof Date&&!isNaN(n)){this.date=n.getDate(),this.day=n.getDay(),this.month=n.getMonth(),this.year=n.getFullYear(),this.$router.push({params:{date:this.date.toString(),month:this.month.toString(),year:this.year.toString()},query:this.$route.query});const t=q.get(this.getCurrentID());t&&(this.events=t.events[this.date.toString()]||[])}return}}this.err="Seems like an invalid date"},getCurrentID(){return`${this.month}_${this.year}`},addNewEvent(){this.nList.title.length&&(this.events.splice(0,0,{title:this.nList.title,description:this.nList.description,addedOn:Date.now(),checked:!1}),this.syncEvents(),this.nList={title:"",description:""})},removeEvent(t){this.events.splice(t,1),this.syncEvents()},toggleCheck(t){this.events[t].checked=!this.events[t].checked,this.syncEvents()},syncEvents(){let t=q.get(this.getCurrentID());t||(t={events:{}}),t.events[this.date]=this.events,q.set(this.getCurrentID(),t)},goHome(){this.$router.push({path:"/",query:this.$route.query})}}});const X={class:"flex flex-col md:flex-row items-center justify-between"},tt=n("span",{class:"mx-2 text-lg"},"Go Back",-1),et={key:0,class:"mx-10 text-xl"},st=n("span",{class:"text-red-500"},"[!]",-1),nt={key:1,class:"mx-10"},rt=n("br",null,null,-1),ot={class:"text-center text-3xl text-indigo-600"},at=n("br",null,null,-1),it={class:"flex justify-between"},lt=n("p",{class:"text-4xl text-indigo-600"},"Events",-1),ct={class:"list-inside text-lg font-serif"},ht={class:"flex justify-between"},dt=["onClick"],ut={class:"font-bold flex-1"},mt=["onClick"],pt={key:0},yt={class:"opacity-40 text-sm"},gt=r(" Added on: ");Q.render=function(t,o,a,i,l,b){const k=c("Logo"),w=c("Icon");return s(),e(m,null,[n("div",X,[h(k,{class:"mx-8 mt-6 md:mb-4"}),n("div",{class:"cursor-pointer transition duration-400 hover:bg-gray-200 mx-8 px-4 py-2 text-gray-600",onClick:o[0]||(o[0]=e=>t.goHome())},[h(w,{icon:"chevron-left"}),tt])]),t.err?(s(),e("p",et,[st,r(" "+d(t.err),1)])):(s(),e("div",nt,[rt,n("p",ot,d(t.prefixes.days[t.day])+", "+d(t.date)+" "+d(t.prefixes.months[t.month-1])+", "+d(t.year),1),at,n("div",it,[lt,n("button",{class:"text-xl cursor-pointer",onClick:o[1]||(o[1]=e=>t.dispNewEvent=!t.dispNewEvent)},[t.dispNewEvent?(s(),g(w,{key:1,icon:"times"})):(s(),g(w,{key:0,icon:"plus"}))])]),n("ul",ct,[!t.events.length||t.dispNewEvent?(s(),e("li",{key:0,class:u(t.prefixes.listClassNames)},[f(n("input",{class:"bg-indigo-100 w-full",type:"text",placeholder:"Add an event or note (Type here)","onUpdate:modelValue":o[2]||(o[2]=e=>t.nList.title=e),onKeyup:o[3]||(o[3]=v((e=>t.addNewEvent()),["enter"]))},null,544),[[x,t.nList.title]]),f(n("textarea",{class:"bg-indigo-100 w-full",type:"text",placeholder:"Add an event description (Optional)","onUpdate:modelValue":o[4]||(o[4]=e=>t.nList.description=e),onKeyup:o[5]||(o[5]=v((e=>t.addNewEvent()),["enter"]))},"\n        ",544),[[x,t.nList.description]])],2)):y("",!0),(s(!0),e(m,null,p(t.events,((r,o)=>(s(),e("li",{class:u(t.prefixes.listClassNames),key:o},[n("div",ht,[n("p",{class:"cursor-pointer mr-2",onClick:e=>t.toggleCheck(o)},[t.events[o].checked?(s(),g(w,{key:0,icon:["far","check-circle"]})):(s(),g(w,{key:1,icon:["far","circle"]}))],8,dt),n("p",ut,d(r.title),1),n("p",{class:"cursor-pointer",onClick:e=>t.removeEvent(o)},[h(w,{icon:"trash"})],8,mt)]),r.description?(s(),e("p",pt,d(r.description),1)):y("",!0),n("p",yt,[gt,n("b",null,d(new Date(r.addedOn).toLocaleString()),1)])],2)))),128))])]))],64)};b.add(k,w,C,N,D,$,I);const ft=E({history:S("/projects/calendar-app/"),routes:[{path:"/",component:O},{path:"/:year/:month/:date",component:Q}]});L(W).use(ft).mount("#app");
