"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[132],{22421:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(70537),r=a(14566),l=a(64084),c=a(21812),n=a(80683);function i(e){var s;let{token:a}=e;const{t:i}=(0,r.$G)("auth");let[o]=(0,l.lr)(new URLSearchParams(location.search));const d=null!==(s=o.get("ctx"))&&void 0!==s?s:"app";return(0,t.useEffect)((()=>{(0,c.tq)()&&a&&"app"==d&&(location.href=`https://join.voce.chat/download?link=${encodeURIComponent(`${location.origin}&magic_token=${a}`)}`)}),[a,d]),(0,n.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,n.jsx)("span",{children:i("reg.have_account")}),(0,n.jsx)(l.OL,{to:"/login",className:"text-primary-400 cursor-pointer",children:i("sign_in")})]})}},62132:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var t=a(70537),r=a(15924),l=a(27418),c=a(80308),n=a(17237),i=a(69885),o=a(15312),d=a(14566),x=a(80683);const m=e=>{let{email:s,reset:a}=e;const{t:t}=(0,d.$G)("auth");return(0,x.jsxs)("div",{className:"flex flex-col items-center",children:[(0,x.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-200 mb-2",children:t("check_email")}),(0,x.jsx)("span",{className:"text-center text-gray-500 mb-6",children:t("check_email_desc",{email:s})}),(0,x.jsx)(i.Z,{onClick:a,className:"main flex",children:t("use_different")})]})};var h=a(44917),u=a(88143),f=a(22421),g=a(66160);function p(){const{t:e}=(0,d.$G)("auth"),s=(0,g.CG)((e=>e.server.name)),[a,p]=(0,t.useState)(!1),[j,{isSuccess:b,isLoading:v,error:k}]=(0,o.wi)(),N=(0,r.s0)(),[y,w]=(0,t.useState)("");(0,t.useEffect)((()=>{b&&(l.ZP.success("Send Email Successfully!"),p(!0))}),[b]),(0,t.useEffect)((()=>{if(k&&"status"in k)switch(k.status){case"PARSING_ERROR":l.ZP.error(k.data);break;case 401:l.ZP.error("Username or Password Incorrect");break;case 404:l.ZP.error("Account not exist");break;default:l.ZP.error("Something Error")}else;}),[k]);return(0,x.jsx)("div",{className:"flex-center h-screen dark:bg-gray-700",children:(0,x.jsx)("div",{className:"py-8 px-10 shadow rounded-xl",children:a?(0,x.jsx)(m,{email:y,reset:()=>{w(""),p(!1)}}):(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)("div",{className:"flex flex-col items-center",children:[(0,x.jsx)("img",{src:`${c.ZP}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 mb-7 rounded-full"}),(0,x.jsxs)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-gray-200 mb-2",children:[e("enter")," ",s," "]}),(0,x.jsx)("span",{className:"text-center text-gray-500 mb-6",children:e("placeholder_email")})]}),(0,x.jsxs)("form",{onSubmit:e=>{e.preventDefault(),j(y)},className:"flex flex-col gap-5 w-[360px]",children:[(0,x.jsx)(n.Z,{type:"email",className:"large",name:"email",autoFocus:!0,value:y,required:!0,placeholder:e("placeholder_email"),onChange:e=>{const{value:s}=e.target;w(s)}}),(0,x.jsx)(i.Z,{type:"submit",disabled:v||!y,children:v?"Sending":e("continue")})]}),(0,x.jsx)(u.Z,{content:"OR"}),(0,x.jsx)(i.Z,{onClick:()=>{N("/login")},className:"w-full",children:e("login.password")}),(0,x.jsx)("div",{className:"flex flex-col gap-3 py-3",children:(0,x.jsx)(h.Z,{})}),(0,x.jsx)(f.Z,{})]})})})}}}]);