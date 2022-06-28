"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[981],{4968:(e,t,i)=>{i.d(t,{Z:()=>m});var n,o,s=i(7313);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a.apply(this,arguments)}const r=(e,t)=>{let{title:i,titleId:r,...c}=e;return s.createElement("svg",a({width:25,height:24,viewBox:"0 0 25 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":r},c),i?s.createElement("title",{id:r},i):null,n||(n=s.createElement("g",{clipPath:"url(#clip0_14990_39524)"},s.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M12.5 0C5.8724 0 0.5 5.3808 0.5 12.0204C0.5 17.3304 3.938 21.8364 8.7068 23.4252C9.3068 23.5356 9.5252 23.1648 9.5252 22.8456C9.5252 22.5612 9.5156 21.804 9.5096 20.802C6.1712 21.528 5.4668 19.1904 5.4668 19.1904C4.922 17.8008 4.1348 17.4312 4.1348 17.4312C3.0452 16.6872 4.2176 16.7016 4.2176 16.7016C5.4212 16.7856 6.0548 17.94 6.0548 17.94C7.1252 19.776 8.864 19.2456 9.5468 18.9384C9.6572 18.162 9.9668 17.6328 10.31 17.3328C7.646 17.0292 4.844 15.9972 4.844 11.3916C4.844 10.08 5.312 9.006 6.0788 8.166C5.9552 7.8624 5.5436 6.6396 6.1964 4.986C6.1964 4.986 7.2044 4.662 9.4964 6.2172C10.4753 5.95022 11.4853 5.81423 12.5 5.8128C13.52 5.8176 14.546 5.9508 15.5048 6.2172C17.7956 4.662 18.8012 4.9848 18.8012 4.9848C19.4564 6.6396 19.0436 7.8624 18.9212 8.166C19.6892 9.006 20.1548 10.08 20.1548 11.3916C20.1548 16.0092 17.348 17.0256 14.6756 17.3232C15.1064 17.694 15.4892 18.4272 15.4892 19.5492C15.4892 21.1548 15.4748 22.452 15.4748 22.8456C15.4748 23.1672 15.6908 23.5416 16.3004 23.424C18.69 22.6225 20.7672 21.0904 22.2386 19.0441C23.7099 16.9977 24.501 14.5408 24.5 12.0204C24.5 5.3808 19.1264 0 12.5 0Z",fill:"black"}))),o||(o=s.createElement("defs",null,s.createElement("clipPath",{id:"clip0_14990_39524"},s.createElement("rect",{width:24,height:24,fill:"white",transform:"translate(0.5)"})))))},c=(0,s.forwardRef)(r);var l=i(9184),d=i(7935),u=i(1140),g=i(2509),h=i(3657),p=i(6417);const f=(0,l.ZP)(u.Z)`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;

  .icon {
    width: 24px;
    height: 24px;
  }
`,m=e=>{let{type:t="login",client_id:i}=e;const n=localStorage.getItem(d.LJ),[o,{isLoading:a,isSuccess:r,error:l}]=(0,g.YA)();(0,s.useEffect)((()=>{const e=new URLSearchParams(location.search),t="github"===e.get("oauth"),i=e.get("code");t&&i&&o({magic_token:n,code:i,type:"github"})}),[]),(0,s.useEffect)((()=>{r&&h.ZP.success("Login Successfully")}),[r]),(0,s.useEffect)((()=>{if(l)if(410===l.status)h.ZP.error("No associated account found, please contact admin for an invitation link to join.");else h.ZP.error("Something Error");else;}),[l]);return(0,p.jsxs)(f,{onClick:()=>{location.href=`https://github.com/login/oauth/authorize?client_id=${i}`},disabled:a,children:[(0,p.jsx)(c,{className:"icon"}),` ${"login"===t?"Sign in":"Sign up"} with Github`]})}},4837:(e,t,i)=>{i.d(t,{Z:()=>b});var n,o,s,a,r=i(7313),c=i(2338),l=i(3657),d=i(9184),u=i(7935);function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},g.apply(this,arguments)}const h=(e,t)=>{let{title:i,titleId:c,...l}=e;return r.createElement("svg",g({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":c},l),i?r.createElement("title",{id:c},i):null,n||(n=r.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"})),o||(o=r.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"})),s||(s=r.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"})),a||(a=r.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"})))},p=(0,r.forwardRef)(h);var f=i(1140),m=i(2509),x=i(6417);const w=(0,d.ZP)(f.Z)`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,b=e=>{let{type:t="login",clientId:i}=e;const[n,{isSuccess:o,isLoading:s,error:a}]=(0,m.YA)(),d=localStorage.getItem(u.LJ),{signIn:g,loaded:h}=(0,c.useGoogleLogin)({onScriptLoadFailure:e=>{},clientId:i,onSuccess:e=>{let{tokenId:t,...i}=e;n({magic_token:d,id_token:t,type:"google"})},onFailure:e=>{}});(0,r.useEffect)((()=>{o&&l.ZP.success("Login Successfully")}),[o]),(0,r.useEffect)((()=>{if(a)if(410===a.status)l.ZP.error("No associated account found, please contact admin for an invitation link to join.");else l.ZP.error("Something Error");else;}),[a]);return(0,x.jsxs)(w,{disabled:!h||s,onClick:()=>{g()},children:[(0,x.jsx)(p,{className:"icon",alt:"google icon"}),h?("login"===t?"Sign in":"Sign up")+" with Google":"Initializing"]})}},1923:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(7313),o=i(2378);function s(){const[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)({}),{data:a}=(0,o.R)(void 0,{refetchOnMountOrArgChange:!0}),[r,{isSuccess:c}]=(0,o.Ku)();(0,n.useEffect)((()=>{a&&s(a)}),[a]),(0,n.useEffect)((()=>{t(!c&&JSON.stringify(a)!==JSON.stringify(i))}),[a,i,c]);return{config:i,changed:e,updateGithubAuthConfig:e=>{s((t=>({...t,...e})))},updateGithubAuthConfigToServer:async()=>{await r(i)},isSuccess:c}}},9137:(e,t,i)=>{i.d(t,{Z:()=>s});var n=i(7313),o=i(2378);function s(){const[e,t]=(0,n.useState)(!1),[i,s]=(0,n.useState)(""),{data:a}=(0,o.eM)(void 0,{refetchOnMountOrArgChange:!0}),[r,{isSuccess:c}]=(0,o.Qg)();(0,n.useEffect)((()=>{a&&s(a.client_id)}),[a]),(0,n.useEffect)((()=>{t(!c&&(null===a||void 0===a?void 0:a.client_id)!==i)}),[a,i,c]);return{config:a,changed:e,clientId:i,updateClientId:s,updateClientIdToServer:async()=>{i&&await r({client_id:i})},updateGoogleAuthConfig:r,isSuccess:c}}},9047:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});var n=i(7313),o=i(3657),s=i(7935),a=i(9184),r=i(1140);const c=(0,a.ZP)(r.Z)`
  width: 100%;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  color: #344054;
  border: 1px solid #d0d5dd;
  background: none !important;
  .icon {
    width: 24px;
    height: 24px;
  }
`,l=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .form {
    padding: 36px 40px 32px 40px;
    /* border: 1px solid #eee; */
    box-shadow: 0px 4px 8px -2px rgba(16, 24, 40, 0.1), 0px 2px 4px -2px rgba(16, 24, 40, 0.06);
    border-radius: 12px;
    .tips {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-bottom: 24px;
      .logo {
        width: 56px;
        height: 56px;
        margin-bottom: 28px;
        border-radius: 50%;
      }
      .title {
        font-weight: 600;
        font-size: 24px;
        line-height: 32px;
        color: #101828;
        margin-bottom: 8px;
      }
    }
    .desc {
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      color: #667085;
    }
    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 360px;
    }
    .or {
      border: none;
      position: relative;
      height: 1px;
      background-color: #e4e7ec;
      margin: 26px 0;
      &:after {
        padding: 4px;
        background-color: #fff;
        content: "OR";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate3d(-50%, -50%, 0);
        font-size: 14px;
        line-height: 20px;
        color: #667085;
      }
    }
  }
`;var d=i(6499),u=i(2509);const g=i.p+"static/media/metamask.f04d5fb63394197766d0.svg";var h=i(6417);function p(e){let{login:t}=e;const[i,o]=(0,n.useState)(!1),[s,a]=(0,n.useState)([]),[r]=(0,u.sZ)(),l=(0,n.useRef)();(0,n.useEffect)((()=>{function e(e){a(e)}return l.current||(l.current=new d.Z),d.Z.isMetaMaskInstalled()&&ethereum.on("accountsChanged",e),()=>{d.Z.isMetaMaskInstalled()&&ethereum.removeListener("accountsChanged",e)}}),[]),(0,n.useEffect)((()=>{if(d.Z.isMetaMaskInstalled())if(s.length>0){const[e]=s;(async e=>{const{data:i,isSuccess:n}=await r(e);if(n){const n=await p(e,i);t({public_address:e,nonce:i,signature:n,type:"metamask"})}})(e),o(!0),l.current.stopOnboarding()}else o(!1)}),[s]);const p=async(e,t)=>await ethereum.request({method:"personal_sign",params:[t,e,"hello from "]});return(0,h.jsxs)(c,{disabled:i,onClick:async()=>{if(d.Z.isMetaMaskInstalled()){o(!0);try{const e=await ethereum.request({method:"eth_requestAccounts"});a(e)}catch(e){ethereum.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}o(!1)}else l.current.startOnboarding()},children:[(0,h.jsx)("img",{className:"icon",src:g,alt:"meta mask icon"}),"Sign in with MetaMask"]})}var f=i(6571),m=i(666);function x(e){let{issuer:t}=e;const[i,{data:o,isLoading:s,isSuccess:a}]=(0,u.CB)();return(0,n.useEffect)((()=>{if(a){const{url:e}=o;location.href=e}}),[o,a]),(0,h.jsxs)(c,{disabled:s,onClick:()=>{i({issuer:t,redirect_uri:`${location.origin}/#/login`})},children:[Boolean(t.favicon)&&(0,h.jsx)("img",{src:t.favicon,className:"icon",alt:"icon"}),"Login with ",t.domain]})}const w=(0,a.ZP)(f.Z)`
  text-align: center;
  padding: 32px 32px 16px;

  > *:first-child {
    margin-bottom: 32px;
  }

  > .button {
    > .icon {
      width: 24px;
      height: 24px;
    }

    &Cancel {
      color: #8f8f8f;
    }
  }
`;function b(e){let{issuers:t}=e;const[i,o]=(0,n.useState)(!1);return t?(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(c,{onClick:()=>{o(!0)},children:"Sign in with OIDC"}),i&&(0,h.jsx)(m.Z,{id:"modal-modal",children:(0,h.jsxs)(w,{title:"Login with OIDC",children:[t.filter((e=>e.enable)).map(((e,t)=>(0,h.jsx)(x,{issuer:e},t))),(0,h.jsx)(r.Z,{className:"border_less ghost buttonCancel",onClick:()=>{o(!1)},children:"Close"})]})})]}):null}var C=i(4050),v=i(7890);const y=(0,a.ZP)(r.Z)`
  width: 100%;
  margin-bottom: 16px;
`;function j(){const e=(0,v.s0)();return(0,h.jsx)(y,{onClick:()=>{e("/send_magic_link")},children:"Sign in with Magic Link"})}const S=a.ZP.p`
  text-align: center;
  margin: 24px 0 8px;

  > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #667085;
    margin-right: 4px;
  }

  > a {
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #22d3ee;
    cursor: pointer;
  }
`;function k(){const e=(0,v.s0)();return(0,h.jsxs)(S,{children:[(0,h.jsx)("span",{children:"Don\u2019t have an account?"}),(0,h.jsx)("a",{onClick:()=>{e("/register")},children:"Sign up"})]})}var Z=i(2378),E=i(9137),_=i(1923),P=i(4837),M=i(4968);function I(){const{data:e}=(0,Z.n8)(),[t,{isSuccess:i,isLoading:a,error:c}]=(0,u.YA)(),{clientId:d}=(0,E.Z)(),{config:g}=(0,_.Z)(),{data:f,isSuccess:m}=(0,Z.ww)(),[x,w]=(0,n.useState)({email:"",password:""});(0,n.useEffect)((()=>{const e=new URLSearchParams(location.search),i=e.get("oauth"),n=e.get("code"),o=e.get("state"),s=e.get("magic_token"),a=e.get("exists");if(i&&"oidc"===i)n&&o&&t({code:n,state:o,type:"oidc"});if(s&&"undefined"!==typeof a){"true"==a?t({magic_token:s,type:"magiclink"}):location.href=`?magic_token=${s}#/register/set_name/login`}}),[]),(0,n.useEffect)((()=>{if(c)switch(c.status){case 401:o.ZP.error("Username or Password incorrect");break;case 410:o.ZP.error("No associated account found, please contact admin for an invitation link to join.");break;default:o.ZP.error("Something Error")}else;}),[c]),(0,n.useEffect)((()=>{i&&o.ZP.success("Login Successfully")}),[i]);const v=e=>{const{type:t}=e.target.dataset,{value:i}=e.target;w((e=>(e[t]=i,{...e})))},{email:y,password:S}=x;if(!m)return null;const{magic_link:I,github:L,google:N,metamask:O,oidc:A=[],who_can_sign_up:R}=f,z=e&&I,q=N&&d,B=z||q||O||A.length>0||L;return(0,h.jsx)(l,{children:(0,h.jsxs)("div",{className:"form",children:[(0,h.jsxs)("div",{className:"tips",children:[(0,h.jsx)("img",{src:`${s.ZP}/resource/organization/logo`,alt:"logo",className:"logo"}),(0,h.jsx)("h2",{className:"title",children:"Login to VoceChat"}),(0,h.jsx)("span",{className:"desc",children:"Please enter your details."})]}),(0,h.jsxs)("form",{onSubmit:e=>{e.preventDefault(),t({...x,type:"password"})},children:[(0,h.jsx)(C.Z,{className:"large",name:"email",value:y,required:!0,placeholder:"Enter your email","data-type":"email",onChange:v}),(0,h.jsx)(C.Z,{className:"large",type:"password",value:S,name:"password",required:!0,"data-type":"password",onChange:v,placeholder:"Enter your password"}),(0,h.jsx)(r.Z,{type:"submit",disabled:a,children:a?"Signing":"Sign in"})]}),B&&(0,h.jsx)("hr",{className:"or"}),z&&(0,h.jsx)(j,{}),q&&(0,h.jsx)(P.Z,{clientId:d}),L&&(0,h.jsx)(M.Z,{client_id:null===g||void 0===g?void 0:g.client_id}),O&&(0,h.jsx)(p,{login:t}),A.length>0&&(0,h.jsx)(b,{issuers:A}),"EveryOne"===R&&(0,h.jsx)(k,{})]})})}}}]);