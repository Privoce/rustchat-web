"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[616,143],{43616:(e,a,t)=>{t.r(a),t.d(a,{default:()=>_});var s=t(21600),n=t(75837),r=t(64669),o=t(91438),c=t(40261),i=t(20511),l=t(44487),d=t(24446),m=t(57907),x=t(47437),u=t(35160),h=t(55285),g=t(25654),p=t(38472),f=t(65720),w=t(53975),v=t(10364);function y(){return(0,v.jsxs)("div",{className:"flex flex-col items-center",children:[(0,v.jsx)("div",{className:"font-bold text-3xl text-gray-800 dark:text-white mt-3",children:"Magic link Sent"}),(0,v.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-300 mb-6",children:"Login to your email client, and continue next step"}),(0,v.jsx)("p",{className:"text-center text-gray-400 dark:text-gray-300",children:"You can close this window now."})]})}var k=t(73143);function j({token:e}){var a;const{t:t}=(0,r.Bd)("auth");let[n]=(0,c.ok)(new URLSearchParams(location.search));const o=null!==(a=n.get("ctx"))&&void 0!==a?a:"app";return(0,s.useEffect)((()=>{(0,f.Fr)()&&e&&"app"==o&&(location.href=`https://join.voce.chat/download?link=${encodeURIComponent(`${location.origin}?magic_token=${e}`)}`)}),[e,o]),(0,v.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-slate-500 dark:text-gray-100 justify-center",children:[(0,v.jsx)("span",{children:t("reg.have_account")}),(0,v.jsx)(c.k2,{to:"/login",className:"text-primary-400 cursor-pointer",children:t("sign_in")})]})}function _(){const[e]=(0,c.ok)(new URLSearchParams(location.search)),a=e.get("ctx"),t=(0,u.GV)((e=>e.server.name),o.bN),{t:_}=(0,r.Bd)("auth"),{t:N}=(0,r.Bd)(),[b,{isLoading:S,data:A,isSuccess:L}]=(0,d.G6)(),P=(0,o.wA)(),{token:C}=(0,k.useMagicToken)(),[E,{isLoading:B,data:$,isSuccess:R}]=(0,d.ge)(),[T,{isLoading:q}]=(0,d.un)(),{data:M,isSuccess:U}=(0,m.T7)(),F=(0,i.Zp)(),[I,O]=(0,s.useState)({name:"",email:"",password:"",confirmPassword:""});C&&localStorage.setItem(l.wi,C),(0,s.useEffect)((()=>{"web"!==a&&(0,f.Fr)()&&C&&F(`/invite_mobile/${C}`)}),[a,C]),(0,s.useEffect)((()=>{if(L&&A){const{new_magic_token:e,mail_is_sent:a}=A;!a&&e&&F(`/register/set_name?magic_token=${e}`)}}),[L,A]),(0,s.useEffect)((()=>{R&&$&&(n.Ay.success(N("tip.reg")),P((0,x.vd)($)),location.reload())}),[R,$]);const G=e=>{const{type:a}=e.target.dataset,{value:t}=e.target;O((e=>(e[a]=t,{...e})))};if(!U)return null;const{who_can_sign_up:z}=M;if("EveryOne"!==z&&!C)return(0,v.jsx)("span",{className:"dark:text-white",children:"Sign up method is updated to Invitation Link Only"});const{name:D,email:K,password:Q,confirmPassword:V}=I;if(null!==A&&void 0!==A&&A.mail_is_sent)return(0,v.jsx)(y,{});const Y=B||S||q;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"flex-center flex-col pb-6",children:[(0,v.jsx)("img",{src:`${l.Ay}/resource/organization/logo`,alt:"logo",className:"w-14 h-14 md:mb-7 rounded-full"}),(0,v.jsx)("h2",{className:"font-semibold text-2xl text-gray-800 dark:text-white",children:_("reg.title",{name:t})})]}),(0,v.jsxs)("form",{className:"flex flex-col gap-5 w-80 md:min-w-[360px]",onSubmit:async e=>{e.preventDefault();const{name:a,email:t,password:s,confirmPassword:r}=I;if(s!==r)return void n.Ay.error("Not Same Password!");const{data:o}=await T(t);o?C?b({magic_token:C,email:t,password:s}):E({name:a,email:t,password:s}):n.Ay.error("Email already registered!")},autoSave:"false",autoComplete:"true",children:[!C&&(0,v.jsx)(p.A,{className:"large",name:"name",value:D,required:!0,type:"name",placeholder:_("placeholder_name"),"data-type":"name",onChange:G}),(0,v.jsx)(p.A,{className:"large",name:"email",value:K,required:!0,type:"email",placeholder:_("placeholder_email"),"data-type":"email",onChange:G}),(0,v.jsx)(p.A,{className:"large",type:"password",value:Q,name:"password",required:!0,minLength:6,"data-type":"password",onChange:G,placeholder:_("placeholder_pwd")}),(0,v.jsx)(p.A,{className:"large",required:!0,onBlur:()=>{const{password:e,confirmPassword:a}=I;e!==a&&n.Ay.error("Not Same Password!")},type:"password",minLength:6,name:"confirmPassword",value:V,"data-type":"confirmPassword",onChange:G,placeholder:_("placeholder_confirm_pwd")}),(0,v.jsx)(g.A,{type:"submit",disabled:Y,children:_(Y?"signing_up":"sign_up")})]}),(0,v.jsx)(h.A,{content:"OR"}),(0,v.jsx)("div",{className:"socials flex flex-col gap-3 py-3 empty:hidden",children:(0,v.jsx)(w.A,{type:"register"})}),(0,v.jsx)(j,{token:C})]})}},73143:(e,a,t)=>{t.r(a),t.d(a,{default:()=>d,useMagicToken:()=>m});var s=t(21600),n=t(40261),r=t(20511),o=t(24446),c=t(64669),i=t(10364);function l(){const{t:e}=(0,c.Bd)("auth",{keyPrefix:"magic_link_expire"});return(0,i.jsxs)("div",{className:"flex flex-col items-center",children:[(0,i.jsx)("div",{className:"font-bold text-3xl text-gray-800 dark:text-white mt-3",children:e("title")}),(0,i.jsx)("p",{className:"text-center text-gray-400 mb-6",children:e("desc")}),(0,i.jsx)("p",{className:"text-center text-gray-400",children:e("desc_close")})]})}function d(){var e;const[a,{data:t,isLoading:c}]=(0,o.BQ)(),[d,m]=(0,s.useState)("");let[x]=(0,n.ok)(new URLSearchParams(location.search));const u=null!==(e=x.get("magic_token"))&&void 0!==e?e:"";return(0,s.useEffect)((()=>{u&&a(u)}),[u]),(0,s.useEffect)((()=>{t&&m(u)}),[t,u]),c?(0,i.jsx)("div",{className:"dark:text-gray-100",children:"Checking Magic Link..."}):(0,i.jsx)("div",{className:"flex-center h-screen overflow-x-hidden overflow-y-auto dark:bg-gray-700",children:(0,i.jsx)("div",{className:"py-8 px-10 shadow-md rounded-xl max-h-[95vh] overflow-y-auto overflow-x-hidden",children:u?t?(0,i.jsx)(r.sv,{context:{token:d}}):(0,i.jsx)(l,{}):(0,i.jsx)(r.sv,{context:{token:d}})})})}function m(){return(0,r.KC)()}}}]);