"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[25],{12089:(e,t,a)=>{a.d(t,{A:()=>o});var r,l,s=a(38370);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(null,arguments)}const i=({title:e,titleId:t,...a},i)=>s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:i,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,r||(r=s.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),l||(l=s.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"}))),o=(0,s.forwardRef)(i)},1611:(e,t,a)=>{a.d(t,{A:()=>o});var r,l,s=a(38370);function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(null,arguments)}const i=({title:e,titleId:t,...a},i)=>s.createElement("svg",n({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:i,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,r||(r=s.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),l||(l=s.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"}))),o=(0,s.forwardRef)(i)},66215:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(96476),l=a(13706);const s=({content:e,className:t=""})=>(0,l.jsx)("div",{className:(0,r.A)("or relative border-none h-[1px] bg-slate-200 dark:bg-gray-500 my-6 overflow-visible",t),children:(0,l.jsx)("span",{className:"p-1 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs text-gray-500 dark:text-gray-300 font-semibold bg-white dark:bg-gray-700",children:e})})},65371:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(38370),l=a(2507);const s=({id:e="root-modal",mask:t=!0,children:a})=>{const[s,n]=(0,r.useState)(null);return(0,r.useEffect)((()=>{const a=document.getElementById(e);if(!a)return;t&&a.classList.add("mask");const r=document.createElement("div");return r.classList.add("wrapper"),a.appendChild(r),n(r),()=>{a.removeChild(r)}}),[e,t]),s?(0,l.createPortal)(a,s):null}},23026:(e,t,a)=>{a.d(t,{A:()=>o});var r=a(38370),l=a(96476),s=a(12089),n=a(1611),i=a(13706);const o=({type:e="text",prefix:t="",className:a="",...o})=>{const[c,d]=(0,r.useState)(e),g=a.includes("large"),u=a.includes("none"),h="password"==e,m=(0,l.A)("w-full text-sm text-gray-800 dark:text-gray-200 p-2 outline-none \n    bg-inherit\n  disabled:text-gray-500 disabled:bg-gray-100 \n  dark:disabled:text-gray-500 \n  dark:disabled:bg-gray-800/50\n  dark:disabled:border-gray-600 \n  placeholder:text-gray-400",g&&"py-3",u&&"!border-none bg-transparent shadow-none",h&&"pr-[30px]");return"password"==e?(0,i.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${a}`,children:[(0,i.jsx)("input",{type:c,autoComplete:"password"==c?"current-password":"on",className:`${m} ${a}`,...o}),(0,i.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{d((e=>"password"==e?"text":"password"))},children:"password"==c?(0,i.jsx)(s.A,{className:"fill-gray-500"}):(0,i.jsx)(n.A,{className:"fill-gray-500"})})]}):t?(0,i.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm bg-white dark:bg-gray-800 ${a}`,children:["string"===typeof t?(0,i.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:t}):(0,i.jsx)("span",{className:"flex-center p-2 bg-transparent",children:t}),(0,i.jsx)("input",{className:`${m} ${a}`,type:e,...o})]}):(0,i.jsx)("input",{type:c,className:`${m} rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${a}`,...o})}},91593:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(96476),l=a(13706);const s=({compact:e=!1,title:t="",description:a="",buttons:s,children:n,className:i})=>(0,l.jsxs)("div",{className:(0,r.A)("rounded-lg bg-white dark:bg-gray-900 drop-shadow",e?"p-4 md:min-w-[406px] text-left":"p-5 md:p-8 md:min-w-[440px] text-center",i),children:[t&&(0,l.jsx)("h3",{className:"text-xl text-gray-600 dark:text-white mb-4 font-semibold",children:t}),a&&(0,l.jsx)("p",{className:"text-sm text-gray-400 dark:text-gray-100 mb-2",children:a}),n,s&&(0,l.jsx)("div",{className:"pt-4 w-full flex justify-end gap-4 items-center",children:s})]})},59248:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(38370),l=a(43477);function s(){const[e,t]=(0,r.useState)(!1),[a,s]=(0,r.useState)(),{data:n}=(0,l.Hx)(void 0,{refetchOnMountOrArgChange:!0}),[i,{isSuccess:o}]=(0,l.Vi)();(0,r.useEffect)((()=>{n&&s(n)}),[n]),(0,r.useEffect)((()=>{t(!o&&JSON.stringify(n)!==JSON.stringify(a))}),[n,a,o]);return{config:a,changed:e,updateGithubAuthConfig:e=>{s((t=>t?{...t,...e}:e))},updateGithubAuthConfigToServer:async()=>{a&&await i(a)},isSuccess:o}}},7488:(e,t,a)=>{a.d(t,{A:()=>s});var r=a(38370),l=a(43477);function s(){const[e,t]=(0,r.useState)(!1),[a,s]=(0,r.useState)(""),{data:n}=(0,l.LX)(void 0,{refetchOnMountOrArgChange:!0}),[i,{isSuccess:o}]=(0,l.pA)();(0,r.useEffect)((()=>{n&&s(n.client_id)}),[n]),(0,r.useEffect)((()=>{t(!o&&(null===n||void 0===n?void 0:n.client_id)!==a)}),[n,a,o]);return{config:n,changed:e,clientId:a,updateClientId:s,updateClientIdToServer:async()=>{a&&await i({client_id:a})},updateGoogleAuthConfig:i,isSuccess:o}}},38705:(e,t,a)=>{a.d(t,{A:()=>G});var r,l,s=a(38370),n=a(26887),i=a(52280),o=a(43477);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},c.apply(null,arguments)}const d=({title:e,titleId:t,...a},n)=>s.createElement("svg",c({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,r||(r=s.createElement("g",{clipPath:"url(#clip0_14990_39524)"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z",fill:"black"}))),l||(l=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_14990_39524"},s.createElement("rect",{width:24,height:24,fill:"white",transform:"translate(0.5)"}))))),g=(0,s.forwardRef)(d);var u=a(13756),h=a(13706);const m=({type:e="login",source:t="webapp",client_id:a})=>{const{t:r}=(0,i.Bd)("auth");(0,s.useEffect)((()=>{const e=e=>{const{key:t,newValue:a}=e;if("widget"==t&&a)if(localStorage.removeItem("widget"),window.location!==window.parent.location){const e=window.parent;e&&e.postMessage("RELOAD_WITH_OPEN","*")}else location.reload()};return"widget"==t&&window.addEventListener("storage",e),()=>{"widget"==t&&window.removeEventListener("storage",e)}}),[t]);return(0,h.jsxs)(u.A,{className:"flex-center gap-3 ghost relative",onClick:()=>{const e=`https://github.com/login/oauth/authorize?client_id=${a}&redirect_uri=${location.origin}/github/cb/${t}.html`;"webapp"==t?location.href=e:window.open(e)},children:[(0,h.jsx)(g,{className:"w-6 h-6 absolute left-4"}),` ${r("login"===e?"login.github":"reg.github")}`]})};var p,f,w,A,b=a(8506),x=a(80577),v=a(71024);function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},y.apply(null,arguments)}const E=({title:e,titleId:t,...a},r)=>s.createElement("svg",y({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:r,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,p||(p=s.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"})),f||(f=s.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"})),w||(w=s.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"})),A||(A=s.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"}))),C=(0,s.forwardRef)(E),j=({type:e="login",loaded:t,loadError:a})=>{const{t:r}=(0,i.Bd)("auth"),{t:l}=(0,i.Bd)(),[o,{isSuccess:c,isLoading:d,error:g}]=(0,v._L)(),m=localStorage.getItem(x.wi);return(0,s.useEffect)((()=>{c&&n.Ay.success(l("tip.login"))}),[c]),(0,s.useEffect)((()=>{if(g&&"status"in g)if(410===g.status)n.Ay.error("No associated account found, please contact user admin for an invitation link to join.");else n.Ay.error("Something Error")}),[g]),(0,h.jsxs)(u.A,{className:" group relative w-full !bg-white dark:!bg-gray-700 !text-gray-600 dark:!text-gray-200 overflow-hidden border border-solid border-gray-300 dark:border-gray-500",disabled:!t||d,children:[(0,h.jsxs)("div",{className:"absolute left-0 top-0 w-full h-full flex-center gap-3 z-[998] bg-inherit",children:[(0,h.jsx)(C,{className:"w-6 h-6 absolute left-4"}),a?"Script Load Error!":t?`${r("login"===e?"login.google":"reg.google")}`:"Initializing"]}),(0,h.jsx)("div",{className:"absolute left-0 top-0 w-full h-full group-hover:opacity-0 group-hover:z-[999]",children:(0,h.jsx)(b.j,{width:"360px",onSuccess:e=>{o({magic_token:m,id_token:e.credential||"",type:"google"})}})})]})},R=({type:e="login",clientId:t})=>{const[a,r]=(0,s.useState)(!1),[l,n]=(0,s.useState)(!1);return t?(0,h.jsx)(s.Suspense,{fallback:(0,h.jsx)("span",{children:"loading..."}),children:(0,h.jsx)(b.G_,{onScriptLoadError:()=>{n(!0)},onScriptLoadSuccess:()=>{r(!0)},clientId:t,children:(0,h.jsx)(j,{type:e,loaded:a,loadError:l})})}):null};var k=a(59248),I=a(7488),M=a(11893);const N=a.p+"static/media/metamask.f04d5fb63394197766d0.svg";function B({login:e,type:t="login"}){const{t:a}=(0,i.Bd)("auth"),[r,l]=(0,s.useState)(!1),[n,o]=(0,s.useState)([]),[c]=(0,v.yZ)(),d=(0,s.useRef)();(0,s.useEffect)((()=>{function e(e){o(e)}return d.current||(d.current=new M.A),M.A.isMetaMaskInstalled()&&window.ethereum.on("accountsChanged",e),()=>{M.A.isMetaMaskInstalled()&&window.ethereum.removeListener("accountsChanged",e)}}),[]),(0,s.useEffect)((()=>{if(M.A.isMetaMaskInstalled())if(n.length>0){var t;const[a]=n;(async t=>{const{data:a,isSuccess:r}=await c(t);if(r){const r=await g(t,a);e({public_address:t,nonce:a,signature:r,type:"metamask"})}})(a),l(!0),null===(t=d.current)||void 0===t||t.stopOnboarding()}else l(!1)}),[n]);const g=async(e,t)=>await window.ethereum.request({method:"personal_sign",params:[t,e,"hello from "]});return(0,h.jsxs)(u.A,{className:"flex ghost flex-center gap-2 relative",disabled:r,onClick:async()=>{if(M.A.isMetaMaskInstalled()){l(!0);try{const e=await window.ethereum.request({method:"eth_requestAccounts"});o(e)}catch(t){window.ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}l(!1)}else{var e;null===(e=d.current)||void 0===e||e.startOnboarding()}},children:[(0,h.jsx)("img",{className:"w-6 h-6 absolute left-4",src:N,alt:"meta mask icon"}),a("login"==t?"login.metamask":"reg.metamask")]})}var L,F,S=a(65371),O=a(91593);function Q(){return Q=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)({}).hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},Q.apply(null,arguments)}const U=({title:e,titleId:t,...a},r)=>s.createElement("svg",Q({width:20,height:20,viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:r,"aria-labelledby":t},a),e?s.createElement("title",{id:t},e):null,L||(L=s.createElement("rect",{width:20,height:20,fill:"url(#pattern0)"})),F||(F=s.createElement("defs",null,s.createElement("pattern",{id:"pattern0",patternContentUnits:"objectBoundingBox",width:1,height:1},s.createElement("use",{xlinkHref:"#image0_18654_73275",transform:"scale(0.0078125)"})),s.createElement("image",{id:"image0_18654_73275",width:128,height:128,xlinkHref:"data:image/png;base64,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"})))),T=(0,s.forwardRef)(U),X=({issuer:e})=>{const[t,{data:a,isLoading:r,isSuccess:l}]=(0,v.yD)();return(0,s.useEffect)((()=>{if(l&&a){const{url:e}=a;location.href=e}}),[a,l]),(0,h.jsxs)(u.A,{className:"flex flex-center gap-3",disabled:r||l,onClick:()=>{t({issuer:e.domain,redirect_uri:`${location.origin}/#/login`})},children:[!!e.favicon&&(0,h.jsx)("img",{src:e.favicon,className:"w-6 h-6",alt:"icon"}),r?"Loading...":`Login with ${e.domain}`]})},z=({issuers:e,type:t="login"})=>{const{t:a}=(0,i.Bd)("auth"),{t:r}=(0,i.Bd)(),[l,n]=(0,s.useState)(!1);return e?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(u.A,{className:"flex ghost flex-center gap-2 relative",onClick:()=>{n(!0)},children:[(0,h.jsx)(T,{className:"w-6 h-6 absolute left-4"}),a("login"==t?"login.oidc":"reg.oidc")]}),l&&(0,h.jsx)(S.A,{id:"modal-modal",children:(0,h.jsxs)(O.A,{className:"text-center ",title:"Login with OIDC",children:[(0,h.jsx)("div",{className:"flex flex-col gap-2",children:e.filter((e=>e.enable)).map(((e,t)=>(0,h.jsx)(X,{issuer:e},t)))}),(0,h.jsx)(u.A,{className:"border_less ghost",onClick:()=>{n(!1)},children:r("action.close")})]})})]}):null},G=({type:e="login"})=>{const{t:t}=(0,i.Bd)(),[a,{isSuccess:r}]=(0,v._L)(),{config:l}=(0,k.A)(),{data:c,isSuccess:d}=(0,o.T7)(),{clientId:g}=(0,I.A)();if((0,s.useEffect)((()=>{r&&n.Ay.success(t("tip.login"))}),[r]),!d)return null;const{github:u,google:p,metamask:f,oidc:w=[]}=c,A=p&&!!g;return(0,h.jsxs)(h.Fragment,{children:[A&&(0,h.jsx)(R,{type:e,clientId:g}),u&&(0,h.jsx)(m,{type:e,client_id:null===l||void 0===l?void 0:l.client_id}),f&&(0,h.jsx)(B,{type:e,login:a}),w.length>0&&(0,h.jsx)(z,{type:e,issuers:w})]})}}}]);