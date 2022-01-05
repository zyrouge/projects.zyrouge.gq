import{d as f,r as b,w as y,c as u,a as s,b as h,v as c,e as l,t as a,f as p,o as m,g}from"./vendor.8688f2a5.js";const v=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}};v();var x=(e,o)=>{const i=e.__vccOpts||e;for(const[r,t]of o)i[r]=t;return i};const _=f({name:"App",data(){return{dob:b({date:"",month:"",year:""}),time:null,err:null}},mounted(){this.configure()},methods:{configure(){y(this.dob,this.validate)},removeOtherChars(e,o,i){const r=new Array(10).fill(null).map((n,d)=>d.toString());let t=e.split("").filter(n=>r.includes(n)).join("");return o!==void 0&&!Number.isNaN(o)&&parseInt(t)<o&&(t=o.toString()),i!==void 0&&!Number.isNaN(i)&&parseInt(t)>i&&(t=i.toString()),t},validate(){this.dob.date=this.removeOtherChars(this.dob.date,0,31),this.dob.month=this.removeOtherChars(this.dob.month,0,12),this.dob.year=this.removeOtherChars(this.dob.year),this.update()},manipCursor(){document.getElementById("date-input");const e=document.getElementById("month-input"),o=document.getElementById("year-input"),i=parseInt(this.dob.date),r=parseInt(this.dob.month),t=i>0&&i<=31&&this.dob.date.length===2,n=r>0&&r<=12&&this.dob.month.length===2;t&&!this.dob.month.length?e==null||e.select():t&&n&&!this.dob.year.length&&(o==null||o.select())},update(){if(!this.dob.year.length||!this.dob.month.length||!this.dob.date.length)return this.manipCursor();const e=new Date(`${this.dob.month}-${this.dob.date}-${this.dob.year}`);if(!this.isValidDate(e)){this.err="Seems like an invalid date!",this.time=null;return}const i=new Date().getTime()-e.getTime();this.time=this.getFormattedTime(i),this.err=""},isValidDate(e){return e instanceof Date&&!isNaN(e)},getFormattedTime(e){let o=e/1e3,i=o/60,r=i/60,t=r/24,n=t/365.2425;return{sec:o,mins:i,hrs:r,days:t,yrs:n}}}}),N={class:"font-sans flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-full w-full px-2 py-2"},w=s("p",{class:"text-5xl text-white my-5"},"Age Calculator",-1),D={class:"mb-5"},F=s("br",null,null,-1),C={key:0,class:"text-xl text-center"},O=s("span",{class:"rounded-full bg-red-500 text-white px-3 mr-2"},"!",-1),I={key:1,class:"text-xl text-center"},V={class:"mb-3 text-3xl"},k=l(" Age: "),A={class:"text-red-500"},S=s("p",{class:"font-bold underline"},"Time spent",-1),T=l(" Years: "),$=l(" Days: "),B=l(" Hours: "),M=l(" Minutes: "),L=l(" Seconds: ");function Y(e,o,i,r,t,n){return m(),u("div",null,[s("div",N,[w,s("div",D,[h(s("input",{class:"mx-2 text-center text-3xl rounded w-20",id:"date-input",type:"text",min:"1",max:"31",placeholder:"DD","onUpdate:modelValue":o[0]||(o[0]=d=>e.dob.date=d)},null,512),[[c,e.dob.date]]),h(s("input",{class:"mx-2 text-center text-3xl rounded w-20",id:"month-input",type:"text",min:"1",max:"12",placeholder:"MM","onUpdate:modelValue":o[1]||(o[1]=d=>e.dob.month=d)},null,512),[[c,e.dob.month]]),h(s("input",{class:"mx-2 text-center text-3xl rounded w-28",id:"year-input",type:"text",placeholder:"YYYY","onUpdate:modelValue":o[2]||(o[2]=d=>e.dob.year=d)},null,512),[[c,e.dob.year]])])]),F,e.err?(m(),u("p",C,[O,l(a(e.err),1)])):p("",!0),e.time?(m(),u("div",I,[s("p",V,[k,s("b",A,a(Math.floor(e.time.yrs)),1)]),S,s("p",null,[T,s("b",null,a(e.time.yrs.toFixed(2)),1)]),s("p",null,[$,s("b",null,a(e.time.days.toFixed(2)),1)]),s("p",null,[B,s("b",null,a(e.time.hrs.toFixed(2)),1)]),s("p",null,[M,s("b",null,a(e.time.mins.toFixed(2)),1)]),s("p",null,[L,s("b",null,a(e.time.sec.toFixed(2)),1)])])):p("",!0)])}var j=x(_,[["render",Y]]);g(j).mount("#app");
