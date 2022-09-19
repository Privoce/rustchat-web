"use strict";(globalThis.webpackChunkvocechat_web=globalThis.webpackChunkvocechat_web||[]).push([[777],{1777:(e,s,i)=>{i.r(s),i.d(s,{default:()=>Z});var a=i(7313),t=i(8467),n=i(2135),r=i(3709),c=i(6031),l=i.n(c),o=i(5878),d=i(244),p=i(2963),x=i(562),h=i(5953),u=i(5700),g=i(9265),m=i(6417);const f=d.ZP.div`
  position: relative;
  min-height: 56px;
  padding: 6px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
  .search {
    display: flex;
    align-items: center;
    gap: 5px;
    .input {
      width: 100%;
      border: none;
      outline: none;
      background: none;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    }
  }
  .add {
    cursor: pointer;
  }
`,b=()=>(0,m.jsxs)(f,{children:[(0,m.jsxs)("div",{className:"search",children:[(0,m.jsx)("img",{src:x,alt:"search icon"}),(0,m.jsx)("input",{placeholder:"Search...",className:"input"})]}),(0,m.jsx)(g.Z,{tip:"More",placement:"bottom",children:(0,m.jsx)(p.ZP,{interactive:!0,placement:"bottom-end",trigger:"click",content:(0,m.jsx)(u.Z,{}),children:(0,m.jsx)("img",{src:h,alt:"add icon",className:"add"})})})]});var v=i(1742),j=i(5920);const w=d.ZP.div`
  display: flex;
  height: 100%;
  padding: 8px 48px 10px 0;
  > .left {
    border-radius: 16px 0 0 16px;
    background-color: #fff;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 268px;
    box-shadow: inset -1px 0px 0px rgba(0, 0, 0, 0.1);
    .list {
      padding: 12px 8px;
      overflow: scroll;
      padding-bottom: 50px;
      > .nav {
        display: flex;
        flex-direction: column;
        gap: 4px;
        a {
          border-radius: 6px;
          text-decoration: none;
        }
        .session {
          &:hover,
          &.active {
            background: rgba(116, 127, 141, 0.1);
          }
        }
      }
    }
  }
  .right {
    border-radius: 0 16px 16px 0;
    background-color: #fff;
    /* height: 100vh; */
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    &.placeholder {
      height: 100%;
      align-items: center;
    }
  }
`;var k=i(9667),y=i(4025);function N(){const e=(0,r.I0)(),{pathname:s}=(0,t.TH)(),{user_id:i}=(0,t.UO)(),c=(0,y.CG)((e=>e.users.ids),l().isEqual);return(0,a.useEffect)((()=>(e((0,o.cp)({key:"user"})),()=>{e((0,o.cp)({key:"user",path:s}))})),[s]),c?(0,m.jsxs)(w,{children:[(0,m.jsxs)("div",{className:"left",children:[(0,m.jsx)(b,{}),(0,m.jsx)("div",{className:"list",children:(0,m.jsx)("nav",{className:"nav",children:c.map((e=>(0,m.jsx)(n.OL,{className:"session",to:`/users/${e}`,children:(0,m.jsx)(v.Z,{uid:e,enableContextMenu:!0})},e)))})})]}),(0,m.jsx)("div",{className:"right "+(i?"":"placeholder"),children:i?(0,m.jsx)(j.Z,{uid:+i}):(0,m.jsx)(k.Z,{type:"user"})})]}):null}const Z=(0,a.memo)(N)},562:(e,s,i)=>{e.exports=i.p+"static/media/search.6ee4d07d418f350e5389.svg"}}]);