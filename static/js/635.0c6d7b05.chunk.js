"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[253,635],{12089:(e,r,t)=>{t.d(r,{A:()=>d});var a,s,n=t(38370);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(null,arguments)}const o=({title:e,titleId:r,...t},o)=>n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:o,"aria-labelledby":r},t),e?n.createElement("title",{id:r},e):null,a||(a=n.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),s||(s=n.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}))),d=(0,n.forwardRef)(o)},1611:(e,r,t)=>{t.d(r,{A:()=>d});var a,s,n=t(38370);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)({}).hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},l.apply(null,arguments)}const o=({title:e,titleId:r,...t},o)=>n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:o,"aria-labelledby":r},t),e?n.createElement("title",{id:r},e):null,a||(a=n.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),s||(s=n.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}))),d=(0,n.forwardRef)(o)},23026:(e,r,t)=>{t.d(r,{A:()=>d});var a=t(38370),s=t(96476),n=t(12089),l=t(1611),o=t(13706);const d=({type:e="text",prefix:r="",className:t="",...d})=>{const[i,c]=(0,a.useState)(e),g=t.includes("large"),x=t.includes("none"),u="password"==e,m=(0,s.A)("w-full text-sm text-gray-800 dark:text-gray-200 p-2 outline-none \n    bg-inherit\n  disabled:text-gray-500 disabled:bg-gray-100 \n  dark:disabled:text-gray-500 \n  dark:disabled:bg-gray-800/50\n  dark:disabled:border-gray-600 \n  placeholder:text-gray-400",g&&"py-3",x&&"!border-none bg-transparent shadow-none",u&&"pr-[30px]");return"password"==e?(0,o.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${t}`,children:[(0,o.jsx)("input",{type:i,autoComplete:"password"==i?"current-password":"on",className:`${m} ${t}`,...d}),(0,o.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{c((e=>"password"==e?"text":"password"))},children:"password"==i?(0,o.jsx)(n.A,{className:"fill-gray-500"}):(0,o.jsx)(l.A,{className:"fill-gray-500"})})]}):r?(0,o.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm bg-white dark:bg-gray-800 ${t}`,children:["string"===typeof r?(0,o.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:r}):(0,o.jsx)("span",{className:"flex-center p-2 bg-transparent",children:r}),(0,o.jsx)("input",{className:`${m} ${t}`,type:e,...d})]}):(0,o.jsx)("input",{type:i,className:`${m} rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${t}`,...d})}},67635:(e,r,t)=>{t.r(r),t.d(r,{default:()=>m});var a=t(38370),s=t(26887),n=t(52280),l=t(55433),o=t(43119),d=t(71024),i=t(35079),c=t(13756),g=t(23026),x=t(19253),u=t(13706);const m=()=>{const{t:e}=(0,n.Bd)(),{t:r}=(0,n.Bd)("auth"),{token:t}=(0,x.useMagicToken)(),[m,{isLoading:h,error:p,isSuccess:f,data:b}]=(0,d._L)(),[y,{isLoading:v,isSuccess:w,data:k,error:j}]=(0,d.ge)(),{from:N="reg"}=(0,o.g)(),_=(0,l.wA)(),[C,A]=(0,a.useState)("");(0,a.useEffect)((()=>{if(p&&"status"in p&&401===p.status)s.Ay.error("Invalided Token")}),[p]),(0,a.useEffect)((()=>{if(j&&"status"in j&&409===j.status)s.Ay.error("Something Conflicted!")}),[j]),(0,a.useEffect)((()=>{const r=b||k;(f||w)&&r&&(s.Ay.success(e("tip.login")),_((0,i.vd)(r)),location.href="/#/")}),[f,w,b,k]);if(!t)return(0,u.jsx)("span",{className:"dark:text-white",children:"No Token"});const E=h||v,L=f||w;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:"flex-center flex-col pb-6 max-w-md",children:[(0,u.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-100 mb-2",children:r("reg.input_name")}),(0,u.jsx)("span",{className:"text-gray-400 text-center dark:text-gray-100",children:r("reg.input_name_tip")})]}),(0,u.jsxs)("form",{className:"flex flex-col m-auto gap-5 w-80 md:min-w-[360px]",onSubmit:e=>{e.preventDefault(),"reg"==N?y({magic_token:t,name:C}):m({magic_token:t,extra_name:C,type:"magiclink"})},children:[(0,u.jsx)(g.A,{className:"large",name:"username",value:C,required:!0,placeholder:"Type a name",onChange:e=>{A(e.target.value)}}),(0,u.jsx)(c.A,{type:"submit",disabled:E||!C||L,children:E?"Logging in":"Continue"})]})]})}},19253:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c,useMagicToken:()=>g});var a=t(38370),s=t(64845),n=t(43119),l=t(71024),o=t(52280),d=t(13706);function i(){const{t:e}=(0,o.Bd)("auth",{keyPrefix:"magic_link_expire"});return(0,d.jsxs)("div",{className:"flex flex-col items-center",children:[(0,d.jsx)("div",{className:"font-bold text-3xl text-gray-800 dark:text-white mt-3",children:e("title")}),(0,d.jsx)("p",{className:"text-center text-gray-400 mb-6",children:e("desc")}),(0,d.jsx)("p",{className:"text-center text-gray-400",children:e("desc_close")})]})}function c(){var e;const[r,{data:t,isLoading:o}]=(0,l.BQ)(),[c,g]=(0,a.useState)("");let[x]=(0,s.ok)(new URLSearchParams(location.search));const u=null!==(e=x.get("magic_token"))&&void 0!==e?e:"";return(0,a.useEffect)((()=>{u&&r(u)}),[u]),(0,a.useEffect)((()=>{t&&g(u)}),[t,u]),o?(0,d.jsx)("div",{className:"dark:text-gray-100",children:"Checking Magic Link..."}):(0,d.jsx)("div",{className:"flex-center h-screen overflow-x-hidden overflow-y-auto dark:bg-gray-700",children:(0,d.jsx)("div",{className:"py-8 px-10 shadow-md rounded-xl max-h-[95vh] overflow-y-auto overflow-x-hidden",children:u?t?(0,d.jsx)(n.sv,{context:{token:c}}):(0,d.jsx)(i,{}):(0,d.jsx)(n.sv,{context:{token:c}})})})}function g(){return(0,n.KC)()}}}]);