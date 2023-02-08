"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[437],{18697:(e,t,r)=>{r.d(t,{Z:()=>d});var a,l,s=r(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}const i=(e,t)=>{let{title:r,titleId:i,...d}=e;return s.createElement("svg",n({width:16,height:12,viewBox:"0 0 16 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":i},d),r?s.createElement("title",{id:i},r):null,a||(a=s.createElement("g",{clipPath:"url(#clip0_9046_23916)"},s.createElement("path",{d:"M4.93942 9.69781L1.62578 6.38648C1.25336 6.01431 0.651746 6.01431 0.27932 6.38648C-0.0931066 6.75865 -0.0931066 7.35984 0.27932 7.73201L4.27096 11.7209C4.64339 12.093 5.245 12.093 5.61743 11.7209L15.7207 1.62465C16.0931 1.25248 16.0931 0.651292 15.7207 0.279125C15.3483 -0.0930417 14.7466 -0.0930417 14.3742 0.279125L4.93942 9.69781Z",fill:"#78787C"}))),l||(l=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_9046_23916"},s.createElement("rect",{width:16,height:12,fill:"white"})))))},d=(0,s.forwardRef)(i)},95727:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(70537),l=r(64631);const s=r.p+"static/media/upload.image.9f8c7fc90042d2ff4eb7.svg";var n=r(14566),i=r(57425),d=r(80683);const o=e=>{let{size:t=96,uid:r,className:o="",url:c="",name:m="",type:x="user",uploadImage:h,disabled:u=!1}=e;const{t:g}=(0,n.$G)(),[p,b]=(0,a.useState)(!1);return(0,d.jsxs)("div",{style:{width:`${t}px`,height:`${t}px`},className:(0,i.Z)(o,"relative group"),children:[(0,d.jsxs)("div",{className:"group overflow-hidden relative w-full h-full rounded-full bg-gray-50",children:[(0,d.jsx)(l.Z,{width:t,height:t,type:x,src:c,name:m,className:`${o} object-cover w-full h-full`}),!u&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"flex-center flex-col whitespace-nowrap hidden group-hover:flex p-1 absolute inset-0 bg-black/50 text-white font-bold text-xs",children:g(p?"status.uploading":"action.change_avatar")}),(0,d.jsx)("input",{className:"opacity-0 absolute inset-0 block cursor-pointer",multiple:!1,onChange:async e=>{if(p)return;if(!e.target.files)return;const[t]=Array.from(e.target.files);b(!0),r?await h({uid:r,file:t}):await h(t),b(!1)},type:"file",accept:"image/*",name:"avatar",id:"avatar"})]})]}),!u&&(0,d.jsx)("img",{src:s,alt:"icon",className:"hidden w-7 h-7 absolute top-0 right-0 group-hover:block"})]})}},61895:(e,t,r)=>{r.d(t,{Z:()=>_});var a=r(70537),l=r(7829),s=r(69195),n=r(27418),i=r(52334),d=r(33941),o=r(4884),c=r(68975),m=r(69885),x=r(14566),h=r(43764),u=r(80683);const g=()=>{const{t:e}=(0,x.$G)("chat"),{generating:t,link:r,linkCopied:a,copyLink:l,generateNewLink:s}=(0,o.Z)();return(0,u.jsxs)("div",{className:"flex flex-col items-start pb-8",children:[(0,u.jsx)("span",{className:"font-semibold text-sm mb-2 text-gray-500 dark:text-gray-50",children:e("share_invite_link")}),(0,u.jsxs)("div",{className:"w-[512px] mb-3 relative",children:[(0,u.jsx)(c.Z,{readOnly:!0,className:"large !pr-16",placeholder:"Generating",value:r}),(0,u.jsx)(m.Z,{onClick:l,className:"ghost small border_less absolute right-1 top-1/2 -translate-y-1/2",children:a?"Copied":e("action.copy",{ns:"common"})})]}),(0,u.jsx)("span",{className:"text-xs text-gray-600 dark:text-gray-100",children:e("invite_link_expire")}),(0,u.jsx)("div",{className:"w-44 h-44 my-2",children:(0,u.jsx)(h.Z,{link:r})}),(0,u.jsx)(m.Z,{className:"ghost",disabled:t,onClick:()=>{s()},children:t?"Generating":e("generate_new_link")})]})};var p,b,f=r(80169),v=r(87826);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},y.apply(this,arguments)}const w=(e,t)=>{let{title:r,titleId:l,...s}=e;return a.createElement("svg",y({width:6,height:6,viewBox:"0 0 6 6",fill:"black",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),r?a.createElement("title",{id:l},r):null,p||(p=a.createElement("rect",{opacity:.01,width:6,height:6,fill:"#D8D8D8"})),b||(b=a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M5.62506 1.64911C5.41795 1.4503 5.08216 1.45029 4.87506 1.64911L3.00003 3.44911L1.12506 1.64916C0.917951 1.45034 0.582164 1.45034 0.375057 1.64916C0.16795 1.84798 0.16795 2.17033 0.375057 2.36915L2.62506 4.52912C2.83217 4.72794 3.16795 4.72794 3.37506 4.52912C3.37665 4.5276 3.37822 4.52608 3.37977 4.52454L5.62506 2.36911C5.83216 2.17029 5.83216 1.84793 5.62506 1.64911Z",fillOpacity:.5})))},j=(0,a.forwardRef)(w);var k=r(18697),N=r(50911),C=r(66160);const _=e=>{let{cid:t}=e;const{t:r}=(0,x.$G)("member"),{t:o}=(0,x.$G)(),{users:c,channels:m,loginUser:h}=(0,C.CG)((e=>({users:e.users,channels:e.channels,loginUser:e.authData.user}))),{copyEmail:p,removeFromChannel:b,removeUser:y}=(0,N.Z)({cid:t}),[w,{isSuccess:_}]=(0,i.kD)();(0,a.useEffect)((()=>{_&&n.ZP.success(o("tip.update"))}),[_]);const Z=e=>{let{ignore:t=!1,uid:r,isAdmin:a=!0}=e;(0,s.Bn)(),t||w({id:r,is_admin:a})},E=t?m.byId[t]:null,O=E?E.is_public?c.ids:E.members:c.ids;return(0,u.jsxs)("section",{className:"flex flex-col w-full",children:[(null===h||void 0===h?void 0:h.is_admin)&&(0,u.jsx)(g,{}),(0,u.jsxs)("div",{className:"flex flex-col mb-10",children:[(0,u.jsx)("h4",{className:"font-bold text-gray-600 dark:text-white",children:r("manage_members")}),(0,u.jsx)("p",{className:"text-gray-500 dark:text-gray-100 text-xs",children:r("manage_tip")})]}),(0,u.jsx)("ul",{className:"flex flex-col gap-1 w-[512px] mb-44",children:O.map((e=>{const t=c.byId[e];if(!t)return null;const{name:a,email:s,is_admin:n}=t,i=E&&E.owner==e,m=(null===h||void 0===h?void 0:h.is_admin)&&h.uid!==e&&1!==e,x=s||(null===h||void 0===h?void 0:h.is_admin),g=(null===h||void 0===h?void 0:h.is_admin)&&(null===h||void 0===h?void 0:h.uid)!=e&&1!==e,w=E&&E.owner==(null===h||void 0===h?void 0:h.uid)&&(null===h||void 0===h?void 0:h.uid)!=e;return(0,u.jsxs)("li",{className:"w-full flex items-center justify-between px-3 py-2 rounded-md hover:bg-slate-50 dark:hover:bg-gray-800",children:[(0,u.jsxs)("div",{className:"flex gap-4",children:[(0,u.jsx)(d.Z,{compact:!0,uid:e,interactive:!1}),(0,u.jsxs)("div",{className:"flex flex-col",children:[(0,u.jsxs)("span",{className:"font-bold text-sm text-gray-600 dark:text-white flex items-center gap-1",children:[a," ",i&&(0,u.jsx)(v.Z,{})]}),(0,u.jsx)("span",{className:"text-xs text-gray-500 dark:text-slate-50",children:s})]})]}),(0,u.jsxs)("div",{className:"flex items-center gap-7",children:[(0,u.jsxs)("span",{className:"text-xs text-right text-gray-500 dark:text-slate-100 flex items-center gap-1",children:[r(n?"admin":"user"),m&&(0,u.jsx)(l.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,u.jsxs)("ul",{className:"context-menu",children:[(0,u.jsxs)("li",{className:"item sb",onClick:Z.bind(null,{ignore:n,uid:e,isAdmin:!0}),children:[r("admin"),n&&(0,u.jsx)(k.Z,{className:"icon"})]}),(0,u.jsxs)("li",{className:"item sb",onClick:Z.bind(null,{ignore:!n,uid:e,isAdmin:!1}),children:[r("user"),!n&&(0,u.jsx)(k.Z,{className:"icon"})]})]}),children:(0,u.jsx)(j,{className:"cursor-pointer dark:fill-slate-50"})})]}),x&&(0,u.jsx)(l.ZP,{interactive:!0,placement:"right-start",trigger:"click",content:(0,u.jsxs)("ul",{className:"min-w-30 context-menu",children:[s&&(0,u.jsx)("li",{className:"item",onClick:p.bind(null,s),children:o("action.copy_email")}),w&&(0,u.jsx)("li",{className:"item danger",onClick:b.bind(null,e),children:r("remove_from_channel")}),g&&(0,u.jsx)("li",{className:"item danger",onClick:y.bind(null,e),children:o("action.remove")})]}),children:(0,u.jsx)("div",{className:"relative w-6 h-6",children:(0,u.jsx)("img",{className:"cursor-pointer",src:f,alt:"dots icon"})})})]})]},e)}))})]})}},80874:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(70537),l=r(10336);const s=e=>{let{id:t="root-modal",mask:r=!0,children:s}=e;const[n,i]=(0,a.useState)(null);return(0,a.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;r&&e.classList.add("mask");const a=document.createElement("div");return a.classList.add("wrapper"),e.appendChild(a),i(a),()=>{e.removeChild(a)}}),[t,r]),n?(0,l.createPortal)(s,n):null}},43764:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(36185),l=r(66160),s=r(80683);const n=e=>{let{link:t}=e;const r=(0,l.CG)((e=>e.server.logo));return(0,s.jsx)(a.Qd,{value:t,className:"rounded border border-solid border-gray-200 dark:border-gray-100 p-1 !w-full !h-full",size:512,bgColor:"#fff",fgColor:"#22ccee",level:"L",includeMargin:!1,imageSettings:{src:r,x:void 0,y:void 0,height:80,width:80,excavate:!0}})}},24563:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(14566),l=r(69885),s=r(80683);const n=e=>{let{saveHandler:t,resetHandler:r}=e;const{t:n}=(0,a.$G)("setting");return(0,s.jsxs)("div",{className:"w-full p-2 absolute bottom-16 left-0 flex items-center justify-between font-semibold text-gray-700 border border-solid border-gray-200 dark:border-gray-400 dark:bg-gray-600 shadow-md rounded-full",children:[(0,s.jsx)("span",{className:"p-2 text-sm dark:text-gray-200",children:n("save_tip")}),(0,s.jsxs)("div",{className:"flex items-center gap-3",children:[(0,s.jsx)(l.Z,{className:"small ghost border_less !text-gray-700 !shadow-none dark:!text-gray-100",onClick:r,children:n("reset")}),(0,s.jsx)(l.Z,{className:"small !rounded-full",onClick:t,children:n("save_change")})]})]})}},84182:(e,t,r)=>{r.d(t,{Z:()=>x});var a,l=r(15924),s=r(64084),n=r(70537);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}const d=(e,t)=>{let{title:r,titleId:l,...s}=e;return n.createElement("svg",i({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},s),r?n.createElement("title",{id:l},r):null,a||(a=n.createElement("path",{d:"M10 4L6 8L10 12",stroke:"black",strokeOpacity:.3,strokeLinecap:"round",strokeLinejoin:"round"})))},o=(0,n.forwardRef)(d);var c=r(57425),m=r(80683);const x=e=>{let{closeModal:t,title:r="Settings",navs:a=[],dangers:n=[],nav:i,children:d}=e;const{pathname:x}=(0,l.TH)();return(0,m.jsxs)("div",{className:"w-screen h-screen flex",children:[(0,m.jsxs)("div",{className:"max-h-screen min-w-[212px] overflow-scroll px-4 py-8 bg-[#f5f6f7] dark:bg-[#1F2A37]",children:[(0,m.jsxs)("h2",{onClick:t,className:"flex gap-2 items-center cursor-pointer mb-8 font-bold text-gray-800 dark:text-white",children:[(0,m.jsx)(o,{className:"dark:fill-gray-400"})," ",r]}),a.map((e=>{let{title:t,items:r}=e;return(0,m.jsx)("ul",{"data-title":t,className:"flex flex-col gap-0.5 mb-9 before:pl-3 before:content-[attr(data-title)] before:font-bold before:text-xs before:text-gray-400",children:r.map((e=>{let{name:t,title:r}=e;return(0,m.jsx)("li",{className:(0,c.Z)("text-sm font-semibold text-gray-600 whitespace-nowrap dark:text-gray-200  rounded hover:bg-[#e7e5e4] dark:hover:bg-slate-500/20",t==(null===i||void 0===i?void 0:i.name)&&"bg-[#e7e5e4] dark:bg-slate-500/20"),children:(0,m.jsx)(s.OL,{to:`${x}?nav=${t}`,className:"block px-3 py-1",children:r})},t)}))},t)})),n.length?(0,m.jsx)("ul",{className:"flex flex-col gap-2 mb-9 text-sm font-semibold text-red-500 dark:text-red-400",children:n.map((e=>{if("boolean"===typeof e||!e)return null;const{title:t,handler:r}=e;return(0,m.jsx)("li",{onClick:r,className:"rounded cursor-pointer py-1.5 px-3",children:t},t)}))}):null]}),(0,m.jsxs)("div",{className:"bg-white w-full max-h-full overflow-auto p-8 dark:bg-[#384250]",children:[i&&(0,m.jsx)("h4",{className:"font-bold text-xl text-gray-600 mb-8 dark:text-gray-100",children:i.title}),d]})]})}},68975:(e,t,r)=>{r.d(t,{Z:()=>p});var a,l,s=r(57425),n=r(70537);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},i.apply(this,arguments)}const d=(e,t)=>{let{title:r,titleId:s,...d}=e;return n.createElement("svg",i({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:t,"aria-labelledby":s},d),r?n.createElement("title",{id:s},r):null,a||(a=n.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),l||(l=n.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})))},o=(0,n.forwardRef)(d);var c,m;function x(){return x=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},x.apply(this,arguments)}const h=(e,t)=>{let{title:r,titleId:a,...l}=e;return n.createElement("svg",x({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:t,"aria-labelledby":a},l),r?n.createElement("title",{id:a},r):null,c||(c=n.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),m||(m=n.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})))},u=(0,n.forwardRef)(h);var g=r(80683);const p=e=>{let{type:t="text",prefix:r="",className:a="",...l}=e;const[i,d]=(0,n.useState)(t),c=a.includes("large"),m=a.includes("none"),x="password"==t,h=(0,s.Z)("w-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 p-2 outline-none disabled:text-gray-500 disabled:bg-gray-100 dark:disabled:text-gray-500 dark:disabled:bg-gray-800/50 placeholder:text-gray-400",c&&"py-3",m&&"border-none bg-transparent shadow-none",x&&"pr-[30px]");return"password"==t?(0,g.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-gray-300 dark:border-gray-400 shadow-sm ${a}`,children:[(0,g.jsx)("input",{type:i,autoComplete:"password"==i?"current-password":"on",className:`${h} ${a}`,...l}),(0,g.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{d((e=>"password"==e?"text":"password"))},children:"password"==i?(0,g.jsx)(u,{className:"fill-gray-500"}):(0,g.jsx)(o,{className:"fill-gray-500"})})]}):r?(0,g.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-gray-300 dark:border-gray-400 shadow-sm ${a}`,children:[(0,g.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:r}),(0,g.jsx)("input",{className:`${h} ${a}`,type:i,...l})]}):(0,g.jsx)("input",{type:i,className:`${h} rounded border border-gray-200 dark:border-gray-400 shadow-sm ${a}`,...l})}},48540:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(80683);const l=e=>{let{children:t,className:r="",...l}=e;return(0,a.jsx)("label",{className:`text-gray-500 text-sm ${r}`,...l,children:t})}},40698:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(57425),l=r(80683);const s=e=>{let{compact:t=!1,title:r="",description:s="",buttons:n,children:i,className:d}=e;return(0,l.jsxs)("div",{className:(0,a.Z)("rounded-lg bg-white dark:bg-gray-900 drop-shadow",t?"p-4 min-w-[406px] text-left":"p-8 min-w-[440px] text-center",d),children:[r&&(0,l.jsx)("h3",{className:"text-xl text-gray-600 dark:text-white mb-4 font-semibold",children:r}),s&&(0,l.jsx)("p",{className:"text-sm text-gray-400 dark:text-gray-100 mb-2",children:s}),i,n&&(0,l.jsx)("div",{className:"pt-4 w-full flex justify-end gap-4 items-center",children:n})]})}},15621:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(70537),l=r(80683);const s="",n=[],i=e=>{let{options:t,values:r=n,value:i=s,defaultValue:d="",onChange:o}=e;const c=(0,a.useId)(),[m,x]=(0,a.useState)(d),h=i!==s?i:m;return(0,l.jsx)("form",{className:"w-full flex flex-col gap-2",children:t.map(((e,t)=>(0,l.jsxs)("div",{className:"relative bg-transparent",children:[(0,l.jsx)("input",{className:"absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer peer z-50",type:"radio",checked:(r!==n?r.indexOf(h):h)===t,onChange:()=>{const e=r===n?t:r[t];i===s&&x(e),o&&o(e)},id:`${c}-${t}`}),(0,l.jsx)("div",{className:"drop-shadow-sm px-2 py-3 border border-solid border-gray-300 dark:border-gray-400 rounded-lg w-full h-full bg-white dark:bg-gray-800 peer-checked:bg-primary-400 text-sm text-gray-500 dark:text-gray-300  peer-checked:text-white",children:(0,l.jsx)("label",{className:"ml-6",htmlFor:`${c}-${t}`,children:e})}),(0,l.jsx)("div",{className:"absolute top-1/2 left-3 -translate-y-1/2 w-3.5 h-3.5 rounded-full border border-solid border-gray-300 peer-checked:hidden"}),(0,l.jsx)("div",{className:"absolute top-1/2 left-3 -translate-y-1/2 w-3.5 h-3.5 rounded-full border border-solid border-white invisible peer-checked:visible flex-center",children:(0,l.jsx)("div",{className:"w-1 h-1 bg-white rounded-full"})})]},t)))})}},64884:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(80683);const l=e=>{let{className:t,...r}=e;return(0,a.jsx)("textarea",{className:`rounded text-sm p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 resize-none w-full shadow-sm border border-gray-200 dark:border-gray-400 \n  disabled:bg-gray-100 dark:disabled:bg-gray-800/50 \n  disabled:text-gray-400 dark:disabled:text-gray-500 \n  disabled:pointer-events-none \n  placeholder:text-gray-400 \n  ${t}`,...r})}},4884:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(70537),l=r(26209),s=r(65809),n=r(6144);function i(e){const[t,r]=(0,a.useState)(""),{data:i,isSuccess:d}=(0,s.n8)(),[o,{data:c,isLoading:m}]=(0,n.CU)(),{copied:x,copy:h}=(0,l.Z)({enableToast:!1});(0,a.useEffect)((()=>{o(e)}),[e]),(0,a.useEffect)((()=>{c&&d&&r(c)}),[c,d]);return{enableSMTP:i,generating:m,generateNewLink:e?o.bind(null,e):()=>{o()},link:t,linkCopied:x,copyLink:()=>{h(t)}}}},80169:(e,t,r)=>{e.exports=r.p+"static/media/more.d35b0228affb89f48593.svg"}}]);