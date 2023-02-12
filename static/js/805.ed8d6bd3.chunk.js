"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[805],{41016:(e,t,s)=>{s.d(t,{Z:()=>i});var r,a=s(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},n.apply(this,arguments)}const l=(e,t)=>{let{title:s,titleId:l,...i}=e;return a.createElement("svg",n({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),s?a.createElement("title",{id:l},s):null,r||(r=a.createElement("path",{d:"M5.99988 6.5C5.99988 5.11929 7.11917 4 8.49988 4H15.4999C16.8806 4 17.9999 5.11929 17.9999 6.5V19.5C17.9999 19.6881 17.8944 19.8602 17.7268 19.9456C17.5592 20.0309 17.3579 20.015 17.2058 19.9044L11.9999 16.1183L6.79396 19.9044C6.64187 20.015 6.44057 20.0309 6.27299 19.9456C6.1054 19.8602 5.99988 19.6881 5.99988 19.5V6.5Z"})))},i=(0,a.forwardRef)(l)},25552:(e,t,s)=>{s.d(t,{Z:()=>i});var r,a=s(70537);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},n.apply(this,arguments)}const l=(e,t)=>{let{title:s,titleId:l,...i}=e;return a.createElement("svg",n({width:14,height:15,viewBox:"0 0 14 15",fill:"black",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":l},i),s?a.createElement("title",{id:l},s):null,r||(r=a.createElement("path",{d:"M7 6.7929L10.5355 3.25736C10.7308 3.0621 11.0474 3.0621 11.2426 3.25736C11.4379 3.45262 11.4379 3.76921 11.2426 3.96447L7.70711 7.5L11.2426 11.0355C11.4379 11.2308 11.4379 11.5474 11.2426 11.7426C11.0474 11.9379 10.7308 11.9379 10.5355 11.7426L7 8.20711L3.46447 11.7426C3.26921 11.9379 2.95262 11.9379 2.75736 11.7426C2.5621 11.5474 2.5621 11.2308 2.75736 11.0355L6.2929 7.5L2.75736 3.96447C2.5621 3.76921 2.5621 3.45262 2.75736 3.25736C2.95262 3.0621 3.26921 3.0621 3.46447 3.25736L7 6.7929Z",fillOpacity:.8})))},i=(0,a.forwardRef)(l)},64631:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(70537),a=s(21812),n=s(80683);function l(e){return e<=16?8:e<=24?12:e<=32?16:e<=40?18:e<=56?22:e<=80?48:64}const i=e=>{let{src:t="",name:s="Deleted User",type:i="user",width:c,height:o,...d}=e;const[u,h]=(0,r.useState)("");(0,r.useEffect)((()=>{t&&h(t)}),[t]);const m=()=>{h("")};return u?(0,n.jsx)("img",{width:c,height:o,src:u,onError:m,...d}):(0,n.jsx)("div",{className:`rounded-full flex-center ${d.className||""}`,style:{width:c,height:o,fontSize:l(c),fontWeight:400,fontFamily:"'Lato', 'Lato-Regular', 'Helvetica Neue'",background:"channel"===i?"#EAECF0":"#4c99e9",color:"channel"===i?"#475467":"#FFFFFF"},children:(0,a.Qm)(s)})}},80874:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(70537),a=s(10336);const n=e=>{let{id:t="root-modal",mask:s=!0,children:n}=e;const[l,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const e=document.getElementById(t);if(!e)return;s&&e.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),e.appendChild(r),i(r),()=>{e.removeChild(r)}}),[t,s]),l?(0,a.createPortal)(n,l):null}},31159:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(7829),a=s(57425),n=s(80683);const l=e=>{let{placement:t}=e;if("left"==t)return null;const s=(0,a.Z)("w-3 h-3 bg-inherit absolute rounded-[1px] origin-center rotate-45","right"==t&&"left-0 top-1/2 -translate-x-1/2 -translate-y-1/2","top"==t&&"left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2","bottom"==t&&"top-0 left-1/2 -translate-x-1/2 -translate-y-1/2");return(0,n.jsx)("i",{className:s})},i=e=>{let{tip:t="",placement:s="right",delay:a=null,children:i,...c}=e;return(0,n.jsx)(r.ZP,{offset:[0,18],duration:a?[300,250]:0,delay:null!==a&&void 0!==a?a:[150,0],placement:s,content:(0,n.jsxs)("div",{className:"relative bg-white dark:bg-gray-800 px-3 py-2 text-xs rounded-lg drop-shadow text-gray-700 dark:text-gray-100",children:[(0,n.jsx)(l,{placement:s}),t]}),...c,children:i})}},1895:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ue});var r=s(70537),a=s(15924),n=s(64084),l=s(14566),i=s(64631),c=s(66160),o=s(80683);const d=e=>{let{uid:t}=e;const{pathname:s}=(0,a.TH)(),r=(0,c.CG)((e=>e.users.byId[t]));return r?(0,o.jsx)("div",{className:"px-3 py-2.5 invisible md:visible",children:(0,o.jsx)(n.OL,{to:`/setting?nav=my_account&f=${s}`,children:(0,o.jsx)("div",{className:"w-8 h-8",children:(0,o.jsx)(i.Z,{className:" object-cover w-full h-full rounded-full",width:32,height:32,src:r.avatar,name:r.name})})})}):null};var u=s(63356),h=s(31159);const m=s.p+"static/media/setting.3775f508cd4166c61556.svg",p=()=>{const{pathname:e}=(0,a.TH)();return(0,o.jsx)("ul",{className:"flex flex-col absolute left-0 bottom-0 w-full px-3 py-2",children:(0,o.jsx)("li",{className:"cursor-pointer flex items-center p-2.5 gap-2.5 link_navs",children:(0,o.jsx)(n.OL,{className:"link",to:`/setting?f=${e}`,children:(0,o.jsx)(h.Z,{placement:"right",tip:"Settings",children:(0,o.jsx)("img",{src:m,alt:"setting icon",className:"w-6 h-6 max-w-[unset]"})})})})})};var f=s(7699),g=s.n(f),v=s(98090),w=s.n(v),x=s(3074),b=s(96157),C=s(2101),j=s(53517),y=s(1823),L=s(88332),N=s(53429),E=s(27197),k=s(81980),Z=s(75265),M=s(12564);const O=()=>{const[e,t]=(0,r.useState)(!1),s=(0,x.I0)();return{rehydrate:async()=>{const e={channels:[],users:[],fileMessage:{},channelMessage:{},userMessage:{},reactionMessage:{},message:{replying:{}},footprint:{},ui:{},server:{}},r=Object.keys(window.CACHE);await Promise.all(r.map((t=>{var s;return null===(s=window.CACHE[t])||void 0===s?void 0:s.iterate(((s,r)=>{switch(t){case"channels":s&&e.channels.push(s);break;case"users":s&&e.users.push(s);break;case"footprint":e.footprint[r]=s;break;case"ui":e.ui[r]=s;break;case"messageChannel":e.channelMessage[r]=s;break;case"messageFile":e.fileMessage[r]=s||[];break;case"messageDM":e.userMessage[r]=s;break;case"messageReaction":e.reactionMessage[r]=s;break;case"message":e.message[r]=s;break;case"server":e.server[r]=s}}))}))),s((0,E.i2)(e.users)),s((0,C.tD)(e.server)),s((0,N.vB)(e.channels)),s((0,Z.Cb)(e.fileMessage.list)),s((0,y.sL)(e.channelMessage)),s((0,L.Cc)(e.userMessage)),s((0,j.KC)(e.message)),s((0,k.ZN)(e.footprint)),s((0,M.HM)(e.ui)),s((0,b.kY)(e.reactionMessage)),t(!0)},rehydrated:e}};var D=s(80308);const I=[{storeName:"channels",description:"store channel list"},{storeName:"users",description:"store user list"},{storeName:"messageDM",description:"store DM message with IDs"},{storeName:"messageChannel",description:"store channel message with IDs"},{storeName:"message",description:"store message with key-val full data"},{storeName:"messageFile",description:"store file message list refs"},{storeName:"messageReaction",description:"store message reaction with key-val full data"},{storeName:"footprint",description:"store user visit data"},{storeName:"server",description:"store server data"},{storeName:"ui",description:"store UI state"}],P=()=>{const e=`local_db_${localStorage.getItem(D.kK)||""}_v_${D.YM.split(".").join("_")}`;window.CACHE={},I.forEach((t=>{let{storeName:s,description:r}=t;window.CACHE[s]=w().createInstance({name:e,storeName:s,description:r})}))};var S=s(24783),$=s(52334),H=s(65809),A=s(51630),F=s(6144);let R=!1;var _=s(69248),B=s(15312);let T=!1,V=!1;const G=()=>{const e=(0,_.Z)(D.um),[t]=(0,B.Vd)();return(0,r.useEffect)((()=>{(async e=>{if(e&&!V&&!T)try{V=!0,await t(e),T=!0}catch{V=!1,T=!0}})(e)}),[e]),null},U=(0,r.memo)(G);var W=s(80874),K=s(25552),Y=s(69885);const z=e=>{let{handleInstall:t,closePrompt:s}=e;const{t:r}=(0,l.$G)();return(0,o.jsx)(W.Z,{mask:!1,children:(0,o.jsxs)("div",{className:"relative pointer-events-auto mt-4 w-[406px] p-4 rounded-md bg-white shadow-md flex flex-col gap-3",children:[(0,o.jsx)(K.Z,{className:"absolute top-4 right-4 cursor-pointer",onClick:s}),(0,o.jsxs)("div",{className:"flex flex-col gap-4 text-gray-600",children:[(0,o.jsx)("h2",{className:"font-semibold",children:r("tip.pwa_install_title")}),(0,o.jsx)("p",{className:"text-sm",children:r("tip.pwa_install_desc")})]}),(0,o.jsxs)("div",{className:"w-full flex justify-end gap-4",children:[(0,o.jsx)(Y.Z,{className:"ghost cancel small",onClick:s,children:r("action.cancel")}),(0,o.jsx)(Y.Z,{className:"main small",onClick:t,children:r("action.install")})]})]})})};const J=()=>{const{setCanceled:e,prompted:t,setDeferredPrompt:s,showPrompt:a}=function(){const e=(0,r.useRef)(null),t=t=>{e.current=t};return(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),t(e)};return window.addEventListener("beforeinstallprompt",e,!0),()=>{window.removeEventListener("beforeinstallprompt",e,!0)}}),[]),{setCanceled:()=>{localStorage.setItem(D.R1,"true")},prompted:!!localStorage.getItem(D.R1),resetPrompt:()=>{localStorage.removeItem(D.R1),e.current=null},deferredPrompt:e.current,setDeferredPrompt:t,showPrompt:async()=>{if(!e.current)return;e.current.prompt();const{outcome:s}=await e.current.userChoice;t(null)}}}(),[n,l]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=e=>{e.preventDefault(),s(e),l(!0)},t=()=>{s(null),l(!1)};return window.addEventListener("beforeinstallprompt",e,!0),window.addEventListener("appinstalled",t),()=>{window.removeEventListener("beforeinstallprompt",e,!0),window.removeEventListener("appinstalled",t)}}),[]);return!n||t?null:(0,o.jsx)(z,{handleInstall:async()=>{l(!1),await a()},closePrompt:async()=>{e(),l(!1)}})};var Q;function q(){return q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},q.apply(this,arguments)}const X=(e,t)=>{let{title:s,titleId:a,...n}=e;return r.createElement("svg",q({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,Q||(Q=r.createElement("path",{d:"M8.79053 19.3376C10.0779 20.3775 11.7161 21.0002 13.4999 21.0002C14.6315 21.0002 15.7064 20.7491 16.6701 20.299L20.1027 20.9856C20.3486 21.0348 20.6029 20.9579 20.7802 20.7806C20.9575 20.6032 21.0345 20.349 20.9853 20.1031L20.2988 16.6702C20.7488 15.7065 20.9999 14.6318 20.9999 13.5002C20.9999 11.7168 20.3774 10.0788 19.338 8.79163C19.4443 9.3448 19.4999 9.91599 19.4999 10.5002C19.4999 11.0652 19.4479 11.618 19.3483 12.1541C19.4475 12.5868 19.4999 13.0374 19.4999 13.5002C19.4999 14.4837 19.2638 15.41 18.8458 16.2274C18.7689 16.3779 18.745 16.5501 18.7782 16.7159L19.2938 19.2941L16.7159 18.7784C16.55 18.7452 16.3778 18.7691 16.2273 18.8461C15.4098 19.2641 14.4835 19.5002 13.4999 19.5002C13.037 19.5002 12.5864 19.4478 12.1537 19.3486C11.6176 19.4481 11.0648 19.5002 10.4999 19.5002C9.91613 19.5002 9.34454 19.4443 8.79053 19.3376ZM10.5 3C6.35788 3 3.00001 6.35786 3.00001 10.5C3.00001 11.6316 3.2511 12.7064 3.70112 13.6701L3.01458 17.103C2.9654 17.3489 3.04237 17.6031 3.2197 17.7804C3.39702 17.9577 3.65123 18.0347 3.89713 17.9855L7.32974 17.2988C8.29349 17.7489 9.36836 18 10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3Z"})))},ee=(0,r.forwardRef)(X);var te;function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},se.apply(this,arguments)}const re=(e,t)=>{let{title:s,titleId:a,...n}=e;return r.createElement("svg",se({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,te||(te=r.createElement("path",{d:"M17.7541 13.9999C18.9961 13.9999 20.0029 15.0068 20.0029 16.2488V17.1673C20.0029 17.7406 19.8237 18.2997 19.4903 18.7662C17.9445 20.9294 15.4202 22.0011 11.9999 22.0011C8.57891 22.0011 6.05595 20.9289 4.51379 18.7646C4.18182 18.2987 4.00342 17.7409 4.00342 17.1688V16.2488C4.00342 15.0068 5.01027 13.9999 6.25229 13.9999H17.7541ZM11.9999 2.00464C14.7613 2.00464 16.9999 4.24321 16.9999 7.00464C16.9999 9.76606 14.7613 12.0046 11.9999 12.0046C9.23845 12.0046 6.99988 9.76606 6.99988 7.00464C6.99988 4.24321 9.23845 2.00464 11.9999 2.00464Z"})))},ae=(0,r.forwardRef)(re);var ne,le=s(41016);function ie(){return ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},ie.apply(this,arguments)}const ce=(e,t)=>{let{title:s,titleId:a,...n}=e;return r.createElement("svg",ie({width:24,height:24,viewBox:"0 0 24 24",fill:"#70707B",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),s?r.createElement("title",{id:a},s):null,ne||(ne=r.createElement("path",{d:"M13.821 6.5H19.75C20.8867 6.5 21.8266 7.34297 21.9785 8.43788L21.9948 8.59595L22 8.75V17.75C22 18.9409 21.0748 19.9156 19.904 19.9948L19.75 20H4.25C3.05914 20 2.08436 19.0748 2.00519 17.904L2 17.75V10.499L8.20693 10.5L8.40335 10.4914C8.79396 10.4572 9.16896 10.3214 9.49094 10.0977L9.64734 9.9785L13.821 6.5ZM8.20693 4C8.66749 4 9.1153 4.14129 9.49094 4.40235L9.64734 4.5215L11.75 6.273L8.68706 8.82617L8.60221 8.88738C8.51363 8.94232 8.41452 8.9782 8.31129 8.9927L8.20693 9L2 8.999V6.25C2 5.05914 2.92516 4.08436 4.09595 4.00519L4.25 4H8.20693Z"})))},oe=(0,r.forwardRef)(ce);function de(){const{t:e}=(0,l.$G)(),t=(0,a.bS)("/"),s=(0,a.bS)("/chat"),{pathname:i}=(0,a.TH)(),{loginUid:m,guest:f,ui:{ready:v,rememberedNavs:{chat:w,user:x}}}=(0,c.CG)((e=>{var t;return{ui:e.ui,loginUid:null===(t=e.authData.user)||void 0===t?void 0:t.uid,guest:e.authData.guest}})),{success:b}=function(){const[e]=(0,F.N2)(),{rehydrate:t,rehydrated:s}=O(),{loginUid:a,token:n,isGuest:l,expireTime:i=+new Date,channelMessageData:o,channelIds:d}=(0,c.CG)((e=>{var t;return{channelIds:e.channels.ids,channelMessageData:e.channelMessage,loginUid:null===(t=e.authData.user)||void 0===t?void 0:t.uid,isGuest:e.authData.guest,token:e.authData.token,expireTime:e.authData.expireTime}})),{setStreamingReady:u}=(0,A.Z)(),[h,{isLoading:m,isSuccess:p,isError:f,data:v}]=(0,S.rF)(),[w,{isLoading:x,isSuccess:b,isError:C,data:j}]=(0,$.CJ)(),[y,{isLoading:L,isSuccess:N,isError:E,data:k}]=(0,H.$M)();(0,r.useEffect)((()=>(P(),t(),()=>{u(!1)})),[]),(0,r.useEffect)((()=>{l&&d.length>0&&!R&&(d.filter((e=>!o[e])).forEach((t=>{e({id:t,limit:50})})),R=!0)}),[d,o,l]),(0,r.useEffect)((()=>{s&&(w(),y(),h())}),[s]);const Z=g()().isAfter(new Date(i-2e4)),M=!!a&&s&&!!n&&!Z;return(0,r.useEffect)((()=>{u(M)}),[M]),{loading:x||L||m||!s,error:C&&E&&f,success:b&&N&&p,data:{users:j,server:k,favorites:v}}}();if(!b||!v)return(0,o.jsx)(u.Z,{reload:!0,fullscreen:!0});const C=i.startsWith("/setting"),j=t||i.startsWith("/chat");if(C)return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.j3,{})});const y=s?"/chat":w||"/chat",L=x||"/users",N="flex items-center gap-2.5 px-3 py-2 font-semibold text-sm text-gray-600 rounded-lg hover:bg-gray-800/10";return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(J,{}),!f&&(0,o.jsx)(U,{}),(0,o.jsxs)("div",{className:"vocechat-container flex w-screen h-screen bg-[#e5e7eb] dark:bg-[#121926]",children:[!f&&(0,o.jsxs)("div",{className:"h-full flex flex-col items-center relative w-16 bg-[#e5e7eb] dark:bg-[#121926] transition-all",children:[m&&(0,o.jsx)(d,{uid:m}),(0,o.jsxs)("nav",{className:"flex flex-col gap-1 px-3 py-6",children:[(0,o.jsx)(n.OL,{className:()=>`${N} ${j?"bg-primary-400 hover:bg-primary-400":""}`,to:y,children:t=>{let{isActive:s}=t;return(0,o.jsx)(h.Z,{tip:e("chat"),children:(0,o.jsx)(ee,{className:s||j?"fill-white":""})})}}),(0,o.jsx)(n.OL,{className:e=>{let{isActive:t}=e;return`${N} ${t?"bg-primary-400 hover:bg-primary-400":""}`},to:L,children:t=>{let{isActive:s}=t;return(0,o.jsx)(h.Z,{tip:e("members"),children:(0,o.jsx)(ae,{className:s?"fill-white":""})})}}),(0,o.jsx)(n.OL,{className:e=>{let{isActive:t}=e;return`${N} ${t?"bg-primary-400 hover:bg-primary-400":""}`},to:"/favs",children:t=>{let{isActive:s}=t;return(0,o.jsx)(h.Z,{tip:e("favs"),children:(0,o.jsx)(le.Z,{className:s?"fill-white":""})})}}),(0,o.jsx)(n.OL,{className:e=>{let{isActive:t}=e;return`${N} ${t?"bg-primary-400 hover:bg-primary-400":""}`},to:"/files",children:t=>{let{isActive:s}=t;return(0,o.jsx)(h.Z,{tip:e("files"),children:(0,o.jsx)(oe,{className:s?"fill-white":""})})}})]}),(0,o.jsx)(p,{})]}),(0,o.jsx)("div",{className:"h-full flex flex-col w-full",children:(0,o.jsx)(a.j3,{})})]})]})}const ue=(0,r.memo)(de)}}]);