"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[286],{66286:(e,s,a)=>{a.r(s),a.d(s,{default:()=>k});var t=a(70537),i=a(27418),n=a(80308),c=a(64813),r=a(17237),o=a(69885),l=a(57889),d=a(15924),g=a(80683);const m=(0,l.ZP)(o.Z)`
  width: 100%;
  margin-bottom: 16px;
`;function u(){const e=(0,d.s0)();return(0,g.jsx)(m,{onClick:()=>{e("/send_magic_link")},children:"Sign in with Magic Link"})}var h=a(14566);function p(e){let{smtp:s=!1}=e;const{t:a}=(0,h.$G)("auth"),t=(0,d.s0)();return(0,g.jsxs)("div",{className:"flex gap-1 mt-7 text-sm text-[#667085] justify-center",children:[(0,g.jsx)("span",{children:a("login.no_account")}),(0,g.jsx)("a",{className:"text-[#22d3ee] cursor-pointer",onClick:()=>{t(s?"/send_magic_link":"/register")},children:a("sign_up")})]})}var x=a(15312),f=a(65809),j=a(25089),_=a(44917);function k(){const{t:e}=(0,h.$G)("auth"),{t:s}=(0,h.$G)(),{data:a}=(0,f.n8)(),[l,{isSuccess:d,isLoading:m,error:k}]=(0,x.YA)(),{clientId:w}=(0,j.Z)(),{data:b,isSuccess:v}=(0,f.ww)(),[N,Z]=(0,t.useState)({email:"",password:""});(0,t.useEffect)((()=>{const e=new URLSearchParams(location.search),s=e.get("code"),a=e.get("state"),t=e.get("magic_token"),i=e.get("exists");if(s&&a&&l({code:s,state:a,type:"oidc"}),t&&"undefined"!==typeof i){"true"==i?l({magic_token:t,type:"magiclink"}):location.href=`?magic_token=${t}#/register/set_name/login`}}),[]),(0,t.useEffect)((()=>{if(k)switch(k.status){case 401:case 404:i.ZP.error("Username or Password incorrect");break;case 410:i.ZP.error("No associated account found, please contact user admin for an invitation link to join.");break;case"PARSING_ERROR":break;default:i.ZP.error("Something Error")}else;}),[k]),(0,t.useEffect)((()=>{d&&i.ZP.success(s("tip.login"))}),[d]);const y=e=>{const{type:s}=e.target.dataset,{value:a}=e.target;s&&Z((e=>(e[s]=a,{...e})))},{email:P,password:S}=N;if(!v)return null;const{magic_link:C,github:E,google:R,metamask:$,oidc:G=[],who_can_sign_up:L}=b,q=a&&C,A=q||R&&w||$||G.length>0||E;return(0,g.jsx)(c.Z,{children:(0,g.jsxs)("div",{className:"form",children:[(0,g.jsxs)("div",{className:"tips",children:[(0,g.jsx)("img",{src:`${n.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,g.jsx)("h2",{className:"title",children:e("login.title")}),(0,g.jsx)("span",{className:"desc",children:e("login.desc")})]}),(0,g.jsxs)("form",{onSubmit:e=>{e.preventDefault(),l({...N,type:"password"})},children:[(0,g.jsx)(r.Z,{className:"large",name:"email",value:P,type:"email",required:!0,placeholder:e("placeholder_email"),"data-type":"email",onChange:y}),(0,g.jsx)(r.Z,{className:"large",type:"password",value:S,name:"password",required:!0,"data-type":"password",onChange:y,placeholder:e("placeholder_pwd")}),(0,g.jsx)(o.Z,{type:"submit",disabled:m,children:m?"Signing":e("sign_in")})]}),A&&(0,g.jsx)("hr",{className:"or"}),(0,g.jsxs)("div",{className:"btns",children:[q&&(0,g.jsx)(u,{}),(0,g.jsx)(_.Z,{})]}),"EveryOne"===L&&(0,g.jsx)(p,{smtp:a})]})})}}}]);