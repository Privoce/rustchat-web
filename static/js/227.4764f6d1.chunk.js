"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[227],{94727:(e,r,a)=>{a.d(r,{Z:()=>d});var t,s,l=a(70537);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}const n=(e,r)=>{let{title:a,titleId:n,...d}=e;return l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:r,"aria-labelledby":n},d),a?l.createElement("title",{id:n},a):null,t||(t=l.createElement("path",{fillRule:"evenodd",d:"M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z",clipRule:"evenodd"})),s||(s=l.createElement("path",{d:"M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"})))},d=(0,l.forwardRef)(n)},19747:(e,r,a)=>{a.d(r,{Z:()=>d});var t,s,l=a(70537);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var a=arguments[r];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},o.apply(this,arguments)}const n=(e,r)=>{let{title:a,titleId:n,...d}=e;return l.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:0,viewBox:"0 0 20 20",color:"#78787c",height:"1em",width:"1em",xmlns:"http://www.w3.org/2000/svg",style:{color:"rgb(120, 120, 124)"},ref:r,"aria-labelledby":n},d),a?l.createElement("title",{id:n},a):null,t||(t=l.createElement("path",{d:"M10 12a2 2 0 100-4 2 2 0 000 4z"})),s||(s=l.createElement("path",{fillRule:"evenodd",d:"M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z",clipRule:"evenodd"})))},d=(0,l.forwardRef)(n)},17237:(e,r,a)=>{a.d(r,{Z:()=>d});var t=a(57425),s=a(70537),l=a(19747),o=a(94727),n=a(80683);const d=e=>{let{type:r="text",prefix:a="",className:d="",...i}=e;const[c,p]=(0,s.useState)(r),g=d.includes("large"),u=d.includes("none"),m="password"==r,h=(0,t.Z)("w-full bg-white dark:bg-gray-800 text-sm text-gray-800 dark:text-gray-200 p-2 outline-none disabled:text-gray-500 disabled:bg-gray-100 dark:disabled:text-gray-500 dark:disabled:bg-gray-800/50 placeholder:text-gray-400",g&&"py-3",u&&"border-none bg-transparent shadow-none",m&&"pr-[30px]");return"password"==r?(0,n.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-300 dark:border-gray-400 shadow-sm ${d}`,children:[(0,n.jsx)("input",{type:c,autoComplete:"password"==c?"current-password":"on",className:`${h} ${d}`,...i}),(0,n.jsx)("div",{className:"absolute top-1/2 right-2.5 -translate-y-1/2 cursor-pointer",onClick:()=>{p((e=>"password"==e?"text":"password"))},children:"password"==c?(0,n.jsx)(o.Z,{className:"fill-gray-500"}):(0,n.jsx)(l.Z,{className:"fill-gray-500"})})]}):a?(0,n.jsxs)("div",{className:`w-full relative flex overflow-hidden rounded border border-solid border-gray-300 dark:border-gray-400 shadow-sm ${d}`,children:[(0,n.jsx)("span",{className:"px-4 py-2 text-sm text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 shadow-[rgb(0_0_0_/_10%)_-1px_0px_0px_inset]",children:a}),(0,n.jsx)("input",{className:`${h} ${d}`,type:c,...i})]}):(0,n.jsx)("input",{type:c,className:`${h} rounded border border-solid border-gray-200 dark:border-gray-400 shadow-sm ${d}`,...i})}},18227:(e,r,a)=>{a.r(r),a.d(r,{default:()=>g});var t=a(70537),s=a(15924),l=a(27418),o=a(80308),n=a(15312),d=a(66160),i=a(69885),c=a(17237),p=a(80683);const g=()=>{const{token:e}=(0,d.CG)((e=>e.authData)),[r,a]=(0,t.useState)(""),[g,u]=(0,t.useState)(!0),[m,h]=(0,t.useState)(""),[x,w]=(0,t.useState)(!1),[b,{data:y,isLoading:f,isSuccess:v,isError:k,error:j}]=(0,n.l4)(),[N,{data:Z,isLoading:E,isSuccess:C}]=(0,n.v5)();(0,t.useEffect)((()=>{const e=new URLSearchParams(location.search);h(e.get("token"))}),[]),(0,t.useEffect)((()=>{m&&N(m)}),[m]),(0,t.useEffect)((()=>{w(!!C&&!!Z)}),[C,Z]);const[S,P]=(0,t.useState)({name:"",email:"",password:""}),R=e=>{const{type:r}=e.target.dataset,{value:a}=e.target;P((e=>(e[r]=a,{...e})))};(0,t.useEffect)((()=>{g||l.ZP.error("two passwords not same")}),[g]),(0,t.useEffect)((()=>{if(v&&y)l.ZP.success("register success, login please"),setTimeout((()=>{location.href="/#/login"}),500);else if(k&&j&&"data"in j)switch(j.status){case 400:l.ZP.error("Register Failed: please check inputs");break;case 412:l.ZP.error("Register Failed: invalid token or expired");break;case 409:var e;l.ZP.error(`Register Failed: ${null===(e=j.data)||void 0===e?void 0:e.reason}`);break;default:l.ZP.error("Register Failed")}}),[y,v,k,j]);const{email:_,password:$,name:F}=S;return e?(0,p.jsx)(s.Fg,{replace:!0,to:"/"}):m?E?(0,p.jsx)(p.Fragment,{children:"checking token valid"}):x?(0,p.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,p.jsxs)("div",{className:"py-8 px-10 shadow-md rounded-xl",children:[(0,p.jsxs)("div",{className:"flex-center flex-col pb-6",children:[(0,p.jsx)("img",{src:`${o.ZP}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 mb-7 rounded-full"}),(0,p.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-white mb-2",children:"Sign Up to VoceChat"}),(0,p.jsx)("span",{className:"text-gray-400 dark:text-gray-100",children:"Please enter your details."})]}),(0,p.jsxs)("form",{className:"flex flex-col gap-5 min-w-[360px]",onSubmit:e=>{e.preventDefault(),g?b({...S,magic_token:m,gender:1}):l.ZP.error("two passwords not same")},children:[(0,p.jsx)(c.Z,{className:"large",name:"name",value:F,required:!0,placeholder:"Enter your name","data-type":"name",onChange:R}),(0,p.jsx)(c.Z,{className:"large",name:"email",value:_,required:!0,placeholder:"Enter your email","data-type":"email",onChange:R}),(0,p.jsx)(c.Z,{className:"large",type:"password",value:$,name:"password",required:!0,"data-type":"password",onChange:R,placeholder:"Enter your password"}),(0,p.jsx)(c.Z,{className:"large",type:"password",value:r,name:"password",required:!0,"data-type":"password",onBlur:()=>{r&&u(r==S.password)},onChange:e=>{const{value:r}=e.target;a(r)},placeholder:"Enter your password again"}),(0,p.jsx)(i.Z,{disabled:f||v,className:"flex justify-center",type:"submit",children:"Sign Up"})]})]})}):(0,p.jsx)(p.Fragment,{children:"invite token expires or invalid"}):(0,p.jsx)(p.Fragment,{children:"token not found"})}}}]);