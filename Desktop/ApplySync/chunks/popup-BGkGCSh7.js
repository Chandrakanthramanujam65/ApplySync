import{c,j as e,C as x,M as h,t as u,V as p,E as f,B as l,W as g,Z as j,Q as y,R as k,U as w}from"./globals-BzT2rXmz.js";import{L as N,S as v}from"./switch-DOme6Py3.js";const b=[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],C=c("Settings",b);const z=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],B=c("User",z);function L({currentAmount:s,dailyGoal:a}){const r=251.2-251.2*(s<a?s/a*100:100)/100;return e.jsx("div",{className:"mx-5",children:e.jsxs("svg",{className:"h-full w-full",viewBox:"0 0 100 100",children:[e.jsx("circle",{className:"stroke-current text-accent",strokeWidth:"5",cx:"50",cy:"50",r:"40",fill:"transparent"}),e.jsx("circle",{className:"stroke-current text-primary",style:{transition:"stroke-dashoffset 0.35s",transform:"rotate(-90deg)",transformOrigin:"50% 50%"},strokeWidth:"5",strokeLinecap:"round",cx:"50",cy:"50",r:"40",fill:"transparent",strokeDasharray:"251.2",strokeDashoffset:r}),e.jsx("text",{x:"50",y:"37",textAnchor:"middle",alignmentBaseline:"middle",className:"fill-primary text-2xl font-medium",children:s}),e.jsxs("text",{x:"50",y:"53",textAnchor:"middle",alignmentBaseline:"middle",className:"fill-foreground font-medium tracking-[-0.012em]",style:{fontSize:"0.43rem",lineHeight:"0.57rem"},children:["Application",s!==1?"s ":" ","Today"]}),e.jsxs("text",{x:"50",y:"72",textAnchor:"middle",alignmentBaseline:"middle",className:"fill-muted-foreground font-medium tracking-[-0.012em]",style:{fontSize:"0.45rem",lineHeight:"0.60rem"},children:["Goal: ",a]})]})})}function A(){const{appliedList:s}=x(),{dailyGoal:a}=h(),[o,r]=u("autofillEnabled",t=>{try{return p().parse(t)}catch{return!0}});function i(){r(t=>(t?(chrome.action.setBadgeBackgroundColor({color:"#dc2626"}),chrome.action.setBadgeText({text:"OFF"})):chrome.action.setBadgeText({text:""}),!t))}const d=()=>{chrome.windows.getCurrent({populate:!0},t=>{chrome.sidePanel.open({windowId:t.id}),chrome.windows.getLastFocused(n=>{chrome.extension.getViews({type:"popup",windowId:n.id}).forEach(m=>m.close())})})};return e.jsxs("main",{className:"h-fit w-72",children:[e.jsx("div",{className:"border-b bg-card p-3 drop-shadow-sm",children:e.jsx(N,{className:"mx-auto w-3/4 text-primary"})}),e.jsxs("div",{className:"p-4 pt-0 text-center",children:[e.jsx(L,{currentAmount:f(s),dailyGoal:a}),e.jsxs("div",{className:"flex justify-center gap-5 text-2xl text-primary-foreground",children:[e.jsx(l,{title:"View Analytics",size:"icon",className:"rounded-full p-2",onClick:()=>{const t=chrome.runtime.getURL("/options.html");chrome.tabs.create({url:t}),window.close()},children:e.jsx(g,{className:"size-6"})}),e.jsx(l,{title:"Manage Profile",size:"icon",className:"rounded-full p-2",onClick:()=>{const t=chrome.runtime.getURL("/options.html#/profile");chrome.tabs.create({url:t}),window.close()},children:e.jsx(B,{className:"size-6"})}),e.jsx(l,{title:"Manage Settings",size:"icon",className:"rounded-full p-2",onClick:()=>{const t=chrome.runtime.getURL("/options.html#/settings");chrome.tabs.create({url:t}),window.close()},children:e.jsx(C,{className:"size-6"})})]}),e.jsxs(l,{onClick:d,className:"mx-auto my-2 flex w-fit gap-1.5 place-self-center",variant:"ghost",size:"sm",children:[e.jsx(j,{className:"h-3.5 w-3.5"}),"Quick Access"]}),e.jsxs("label",{className:"relative inline-flex cursor-pointer items-center",children:[e.jsx(v,{checked:o,size:"sm",onCheckedChange:i}),e.jsx("span",{className:"ml-2 select-none text-xs font-medium",onClick:()=>i(),children:o?"Autofill Enabled":"Autofill Disabled"})]}),!1]})]})}y.createRoot(document.getElementById("root")).render(e.jsx(k.StrictMode,{children:e.jsx(w,{children:e.jsx(A,{})})}));
