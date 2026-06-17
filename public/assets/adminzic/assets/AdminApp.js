import{b as a,j as e,c as Ei,u as Yt,L as Mi,r as Vs,a as Di,R as Ae,N as as}from"./index.js";const Jn=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],ei="admin-locale",An="vi-VN",Li="/assets/adminzic",ti=a.createContext(null);function Ii(){if(typeof window>"u")return An;const n=localStorage.getItem(ei);return n&&Jn.some(t=>t.code===n)?n:An}function Fi(n,t){return t?Object.entries(t).reduce((s,[l,i])=>s.replaceAll(`{${l}}`,String(i)),n):n}function Ai(n){return new Promise((t,s)=>{var r;if(typeof window>"u"){t({});return}const l=(r=window.AdminNextI18n)==null?void 0:r[n];if(l){t(l);return}const i=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(i){i.addEventListener("load",()=>{var g;t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})}),i.addEventListener("error",s);return}const d=document.createElement("script");d.src=`${Li}/i18n/${n}.js`,d.async=!0,d.dataset.adminNextLocale=n,d.onload=()=>{var g;return t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})},d.onerror=s,document.head.appendChild(d)})}function Oi({children:n}){const[t,s]=a.useState(An),[l,i]=a.useState({}),[d,r]=a.useState(!0);a.useEffect(()=>{s(Ii())},[]);const g=a.useCallback(h=>{s(h),typeof window<"u"&&localStorage.setItem(ei,h)},[]);a.useEffect(()=>{let h=!0;return r(!0),Ai(t).then(j=>{h&&i(j)}).finally(()=>{h&&r(!1)}),()=>{h=!1}},[t]);const x=a.useCallback((h,j)=>Fi(l[h]??h,j),[l]),N=a.useMemo(()=>({locale:t,loading:d,setLocale:g,t:x}),[t,d,g,x]);return e.jsx(ti.Provider,{value:N,children:n})}function xe(){const n=a.useContext(ti);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ni=(...n)=>n.filter((t,s,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Hi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=a.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:i="",children:d,iconNode:r,...g},x)=>a.createElement("svg",{ref:x,...Hi,width:t,height:t,stroke:n,strokeWidth:l?Number(s)*24/Number(t):s,className:ni("lucide",i),...g},[...r.map(([N,h])=>a.createElement(N,h)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(n,t)=>{const s=a.forwardRef(({className:l,...i},d)=>a.createElement(Ui,{ref:d,iconNode:t,className:ni(`lucide-${Ri(n)}`,l),...i}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=te("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=te("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=te("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=te("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=te("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=te("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=te("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=te("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=te("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=te("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=te("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=te("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=te("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=te("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=te("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=te("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=te("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=te("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=te("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=te("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=te("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=te("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=te("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=te("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=te("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=te("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=te("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=te("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=te("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=te("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=te("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=te("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=te("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=te("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=te("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=te("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=te("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=te("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=te("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=te("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=te("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=te("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=te("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=te("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=te("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=te("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=te("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=te("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=te("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=te("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=te("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=te("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=te("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=te("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=te("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=te("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=te("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=te("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=te("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=te("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=te("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=te("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),za=a.createContext(null);function Ta({children:n}){const[t,s]=a.useState([]),[l,i]=a.useState(null),d=a.useCallback((N,h="success")=>{const j=Math.random().toString(36).substring(2,9);s(m=>[...m,{id:j,message:N,type:h}]),setTimeout(()=>{s(m=>m.filter(T=>T.id!==j))},5e3)},[]),r=a.useCallback(N=>{i(N)},[]);a.useEffect(()=>{typeof window<"u"&&(window.showToast=d,window.showConfirm=r)},[d,r]);const g=async()=>{if(l){try{await l.onConfirm()}catch(N){console.error("Error in onConfirm:",N)}i(null)}},x=()=>{l&&(l.onCancel&&l.onCancel(),i(null))};return e.jsxs(za.Provider,{value:{showToast:d,showConfirm:r},children:[n,e.jsx("div",{className:"toast-container",children:t.map(N=>{let h=aa;return N.type==="success"&&(h=si),N.type==="error"&&(h=Ki),N.type==="warning"&&(h=Un),e.jsxs("div",{className:`toast-card toast-${N.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(h,{size:18})}),e.jsx("div",{className:"toast-message",children:N.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(j=>j.filter(m=>m.id!==N.id)),children:e.jsx(Ne,{size:14})})]},N.id)})}),l&&e.jsx("div",{className:"confirm-backdrop",onClick:x,children:e.jsxs("div",{className:"confirm-card",onClick:N=>N.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(Un,{size:22})}),e.jsx("h3",{className:"confirm-title",children:l.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:l.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:x,children:l.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:g,children:l.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .toast-container {
          position: fixed;
          top: 24px;
          right: 24px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 400px;
          width: calc(100% - 48px);
          pointer-events: none;
        }

        .toast-card {
          pointer-events: auto;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 12px;
          background: var(--surface);
          border: 1px solid var(--line);
          box-shadow: var(--shadow);
          animation: toast-slide-in 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        /* Ambient glow bar for toasts */
        .toast-card::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 4px;
        }

        .toast-success::before { background: var(--accent, #3fb8aa); }
        .toast-error::before { background: var(--rose, #e06080); }
        .toast-warning::before { background: var(--orange, #e8a045); }
        .toast-info::before { background: #1677ff; }

        .toast-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .toast-success .toast-icon { color: var(--accent, #3fb8aa); }
        .toast-error .toast-icon { color: var(--rose, #e06080); }
        .toast-warning .toast-icon { color: var(--orange, #e8a045); }
        .toast-info .toast-icon { color: #1677ff; }

        .toast-message {
          font-size: 14px;
          font-weight: 500;
          color: var(--text);
          flex-grow: 1;
          line-height: 1.4;
        }

        .toast-close {
          border: none;
          background: transparent;
          color: var(--muted);
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s ease, color 0.15s ease;
        }

        .toast-close:hover {
          background: var(--surface-soft);
          color: var(--text);
        }

        /* Confirm Backdrop */
        .confirm-backdrop {
          position: fixed;
          inset: 0;
          z-index: 9998;
          background: rgba(0, 0, 0, 0.4);
          backdrop-filter: blur(8px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fade-in 0.2s ease-out forwards;
        }

        .confirm-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 16px;
          box-shadow: var(--shadow);
          padding: 24px;
          max-width: 440px;
          width: 100%;
          transform: scale(0.95);
          opacity: 0;
          animation: scale-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .confirm-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 12px;
        }

        .confirm-icon {
          color: var(--orange, #e8a045);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .confirm-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--text);
          margin: 0;
        }

        .confirm-message {
          font-size: 14px;
          line-height: 1.6;
          color: var(--muted);
          margin: 0 0 24px 0;
        }

        .confirm-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
        }

        .confirm-btn-cancel,
        .confirm-btn-ok {
          padding: 10px 18px;
          font-size: 14px;
          font-weight: 600;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.15s ease;
          border: 1px solid transparent;
        }

        .confirm-btn-cancel {
          background: var(--surface-soft);
          border-color: var(--line);
          color: var(--text);
        }

        .confirm-btn-cancel:hover {
          background: var(--bg);
        }

        .confirm-btn-ok {
          background: var(--accent);
          color: #ffffff;
        }

        .confirm-btn-ok:hover {
          background: var(--accent-strong);
        }

        @keyframes toast-slide-in {
          from {
            opacity: 0;
            transform: translateY(-12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes scale-up {
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @media (max-width: 480px) {
          .toast-container {
            top: auto;
            bottom: 24px;
            right: 12px;
            left: 12px;
            width: auto;
            max-width: none;
          }
          .toast-card {
            animation: toast-slide-in-bottom 0.3s ease forwards;
          }
        }

        @keyframes toast-slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(12px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}})]})}function Pa({children:n}){return e.jsx(Oi,{children:e.jsx(Ta,{children:n})})}const $a="/api/v3";var Xs;const Z=typeof window<"u"&&((Xs=window.settings)==null?void 0:Xs.secure_path)||"ZicFree123",rn="authorization";function Ea(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let l=0;l<s.length;l++){let i=s[l];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)try{const d=i.substring(t.length,i.length),r=decodeURIComponent(d),g=JSON.parse(r);return g&&typeof g=="object"&&"value"in g?g.value:r}catch{try{return decodeURIComponent(i.substring(t.length,i.length))}catch{return i.substring(t.length,i.length)}}}return null}function Ma(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const i=JSON.stringify({site:"ZicNet",value:t}),d=window.location.protocol==="https:",r=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",g=new Date;g.setTime(g.getTime()+s*24*60*60*1e3);const x=`expires=${g.toUTCString()}`,N=r?"":`domain=${window.location.hostname};`;let h=`${n}=${encodeURIComponent(i)}; ${x}; ${N} path=/`;d&&(h+="; secure"),h+="; SameSite=Lax",document.cookie=h;try{window.localStorage.setItem(`cookie_${n}`,i)}catch{}}function Da(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],l=["/","/dashboard","/user","/admin"];s.forEach(i=>{l.forEach(d=>{const r=i?` domain=${i};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${r} path=${d};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function li(){if(typeof window>"u")return null;let n=window.localStorage.getItem(rn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(rn,n)}catch{}if(!n&&(n=Ea("auth_data"),n))try{window.localStorage.setItem(rn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function La(n,t){const s=n.startsWith("/")?n:`/${n}`,l=new URL(`${$a}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([i,d])=>{d!==void 0&&l.searchParams.set(i,String(d))}),l.toString()}function He(){return!!li()}function Ia(n){typeof window>"u"||(window.localStorage.setItem(rn,n),window.localStorage.setItem("auth_data",n),Ma("auth_data",n,36500))}function ci(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(i=>{window.localStorage.removeItem(i)}),["token","auth_data","authorization","vuex","user","auth"].forEach(i=>{window.sessionStorage.removeItem(i)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(i=>{s.forEach(d=>{document.cookie=`${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${d};`}),document.cookie=`${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Da(i)})}async function K(n,t={}){const s={},l=t.method??"GET";if(l!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const x=li();x&&(s.authorization=x)}const i=await fetch(La(n,t.params),{method:l,headers:s,body:l==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),r=(i.headers.get("content-type")||"").includes("application/json"),g=r?await i.json():await i.text();if(!i.ok){const x=typeof g=="object"&&g&&"message"in g?String(g.message):`Request failed with status ${i.status}`,N=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(x);throw(i.status===401||i.status===403&&!N)&&t.auth!==!1&&(ci(),window.location.hash="/login"),new Error(x)}if(!r&&typeof g=="string"&&(g.trim().startsWith("<!DOCTYPE html")||g.trim().startsWith("<html")||g.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return g}async function Fa(n,t){return K("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Aa(){const n=`/${Z}/stat`,[t,s]=await Promise.all([K(`${n}/getOverride`),K(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function Oa(n){return(await K(`/${Z}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function Ra(n){return(await K(`/${Z}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ha(n){return(await K(`/${Z}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Ua(n,t=10){return(await K(`/${Z}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function di(){return(await K(`/${Z}/config/fetch`)).data}async function pi(n){return K(`/${Z}/config/save`,{method:"POST",body:n})}async function qa(){return(await K(`/${Z}/config/getEmailTemplate`)).data}async function Ba(){return(await K(`/${Z}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Ga(){return K(`/${Z}/config/testSendMail`,{method:"POST",body:{}})}async function Wa(n){return K(`/${Z}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Ka(){return(await K(`/${Z}/payment/fetch`)).data}async function Ya(){return(await K(`/${Z}/payment/getPaymentMethods`)).data}async function hs(n,t){return(await K(`/${Z}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function Ja(n){return K(`/${Z}/payment/save`,{method:"POST",body:n})}async function Za(n){return K(`/${Z}/payment/show`,{method:"POST",body:{id:n}})}async function Qa(n){return K(`/${Z}/payment/drop`,{method:"POST",body:{id:n}})}async function Xa(n){return K(`/${Z}/payment/sort`,{method:"POST",body:{ids:n}})}async function Va(){return(await K(`/${Z}/theme/getThemes`)).data}async function eo(n){return(await K(`/${Z}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function to(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return K(`/${Z}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Ot(){return(await K(`/${Z}/server/group/fetch`)).data}async function Xn(n){return K(`/${Z}/server/group/save`,{method:"POST",body:n})}async function no(n){return K(`/${Z}/server/group/drop`,{method:"POST",body:{id:n}})}const ui=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function mi(){return(await K(`/${Z}/server/route/fetch`)).data}async function so(n){return K(`/${Z}/server/route/save`,{method:"POST",body:n})}async function io(n){return K(`/${Z}/server/route/drop`,{method:"POST",body:{id:n}})}async function $t(){return(await K(`/${Z}/plan/fetch`)).data}async function ao(n){return K(`/${Z}/plan/save`,{method:"POST",body:n})}async function oo(n){return K(`/${Z}/plan/drop`,{method:"POST",body:{id:n}})}async function jn(n,t){return K(`/${Z}/plan/update`,{method:"POST",body:{id:n,...t}})}async function ro(n){return K(`/${Z}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function lo(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((l,i)=>{t.set(`filter[${i}][key]`,l.key),t.set(`filter[${i}][condition]`,l.condition),t.set(`filter[${i}][value]`,l.value)}),await K(`/${Z}/order/fetch?${t.toString()}`)}async function co(n){return K(`/${Z}/order/paid`,{method:"POST",body:{trade_no:n}})}async function po(n){return K(`/${Z}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function Vn(n){return K(`/${Z}/order/assign`,{method:"POST",body:n})}async function uo(n,t){return K(`/${Z}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function mo(n){return K(`/${Z}/order/detail`,{method:"POST",body:{id:n}})}async function hi(n=1,t=15){return K(`/${Z}/coupon/fetch?current=${n}&pageSize=${t}`)}async function ho(n){return K(`/${Z}/coupon/generate`,{method:"POST",body:n})}async function xo(n){return K(`/${Z}/coupon/drop`,{method:"POST",body:{id:n}})}async function bo(n){return K(`/${Z}/coupon/show`,{method:"POST",body:{id:n}})}async function go(n=1,t=15){return K(`/${Z}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function fo(n){return K(`/${Z}/giftcard/generate`,{method:"POST",body:n})}async function yo(n){return K(`/${Z}/giftcard/drop`,{method:"POST",body:{id:n}})}async function Bn(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s&&s.forEach((i,d)=>{l.set(`filter[${d}][key]`,i.key),l.set(`filter[${d}][condition]`,i.condition),l.set(`filter[${d}][value]`,i.value)}),K(`/${Z}/user/fetch?${l.toString()}`)}async function vo(n){return K(`/${Z}/user/update`,{method:"POST",body:n})}async function Gn(n){return K(`/${Z}/user/getUserInfoById`,{params:{id:n}})}async function jo(n){return K(`/${Z}/user/delUser`,{method:"POST",body:{id:n}})}async function wo(n){return K(`/${Z}/user/generate`,{method:"POST",body:n})}async function ko(n){return K(`/${Z}/user/resetSecret`,{method:"POST",body:{id:n}})}async function No(n=1,t=15,s,l=!1){const i=new URLSearchParams;return i.set("current",String(n)),i.set("pageSize",String(t)),l&&i.set("include_subscribe_url","1"),s==null||s.forEach((d,r)=>{i.set(`filter[${r}][key]`,d.key),i.set(`filter[${r}][condition]`,d.condition),i.set(`filter[${r}][value]`,d.value)}),K(`/${Z}/subscription/fetch?${i.toString()}`)}async function _o(n){return K(`/${Z}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function So(n){return K(`/${Z}/subscription/update`,{method:"POST",body:n})}async function Co(n){return K(`/${Z}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function xi(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s==null||s.forEach((i,d)=>{l.set(`filter[${d}][key]`,i.key),l.set(`filter[${d}][condition]`,i.condition),l.set(`filter[${d}][value]`,i.value)}),K(`/${Z}/device/fetch?${l.toString()}`)}async function bi(n){return K(`/${Z}/device/drop`,{method:"POST",body:{id:n}})}async function gi(n){return K(`/${Z}/device/ban`,{method:"POST",body:{id:n}})}async function zo(n){return K(`/${Z}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function To(n,t=1,s=10){return K(`/${Z}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Po(){return(await K(`/${Z}/notice/fetch`)).data}async function $o(n){return K(`/${Z}/notice/save`,{method:"POST",body:n})}async function Eo(n){return K(`/${Z}/notice/drop`,{method:"POST",body:{id:n}})}async function Mo(n){return K(`/${Z}/notice/show`,{method:"POST",body:{id:n}})}async function Do(){return(await K(`/${Z}/ticket/fetch`)).data}async function wn(n){return(await K(`/${Z}/ticket/fetch`,{params:{id:n}})).data}async function Lo(n,t){return K(`/${Z}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function Io(n){return K(`/${Z}/ticket/close`,{method:"POST",body:{id:n}})}async function Fo(n){return K(`/${Z}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Ao(){return(await K(`/${Z}/knowledge/fetch`)).data}async function Oo(n){return(await K(`/${Z}/knowledge/fetch`,{params:{id:n}})).data}async function Ro(n){return K(`/${Z}/knowledge/save`,{method:"POST",body:n})}async function Ho(n){return K(`/${Z}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Uo(n){return K(`/${Z}/knowledge/show`,{method:"POST",body:{id:n}})}async function qo(){return(await K(`/${Z}/webcon/fetch`)).data}async function Bo(n){return K(`/${Z}/webcon/save`,{method:"POST",body:n})}async function Go(n){return K(`/${Z}/webcon/drop`,{method:"POST",body:{id:n}})}async function Wo(n){return K(`/${Z}/webcon/show`,{method:"POST",body:{id:n}})}async function Ko(){return K(`/${Z}/system/getSystemStatus`)}async function Yo(){return(await K(`/${Z}/system/getCoreLicenseStatus`)).data}async function Jo(){return(await K(`/${Z}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function Zo(){return K(`/${Z}/system/getQueueStats`)}async function Qo(){return K(`/${Z}/system/getQueueWorkload`)}async function Xo(){return K(`/${Z}/system/getSystemLog`)}async function xs(){return K(`/${Z}/server/manage/getNodes`)}async function Vo(n,t){return K(`/${Z}/server/${n}/save`,{method:"POST",body:t})}async function er(n,t){return K(`/${Z}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function tr(n,t,s){return K(`/${Z}/server/${n}/update`,{method:"POST",body:{id:t,show:s}})}async function nr(n,t){return K(`/${Z}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function sr(n){return K(`/${Z}/server/manage/sort`,{method:"POST",body:n})}function Ze(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function ot(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const bs=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function fi(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function qt(n){return Number(n??0)}function gs(n){return qt(n)/100}function fs(n){return`${ot(Math.round(n))} VND`}function ir(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),l=0;for(;s>=1024&&l<t.length-1;)s/=1024,l+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||l===0?0:1}).format(s)} ${t[l]}`}function yi(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function ar(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,l)=>{const i=new Date(t);return i.setDate(t.getDate()-(n-l-1)),yi(i)})}function ys(n,t){const s=n.get(t);if(s)return s;const l=fi(t);return n.set(t,l),l}function or(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function Qt({label:n,value:t,helper:s,tone:l="default",onClick:i}){return e.jsxs("article",{className:`stat-card tone-${l}`,onClick:i,style:i?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Bi,{size:19})}),s?e.jsx("small",{children:s}):null]})}function $e({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Oe,{size:18}),e.jsx("span",{children:n})]})}function rr(n,t){const s=new Map,l=new Map;if(n.forEach(i=>{const d=ys(s,i.date),r=or(i.type);if(r){d[r]=Number(i.value||0);return}const g=l.get(i.date)??0,x=bs[g%bs.length];d[x]=Number(i.value||0),l.set(i.date,g+1)}),t){const i=ys(s,yi(new Date));i.registrations=qt(t.day_register_total),t.day_order_total!==void 0&&(i.orderCount=qt(t.day_order_total)),t.day_paid_order_total!==void 0&&(i.paidCount=qt(t.day_paid_order_total)),i.paidAmount=gs(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(i.commissionAmount=gs(t.day_commission_payout)),t.day_commission_count!==void 0&&(i.commissionCount=qt(t.day_commission_count))}return s.size===0?[]:ar(31).map(i=>s.get(i)??fi(i))}function lr({records:n,override:t}){const{t:s}=xe(),[l,i]=a.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[d,r]=a.useState(null),g=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:fs},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:ot},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:ot},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:fs},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:ot},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:ot}],x=rr(n,t),N=g.filter(y=>l.includes(y.key)),h=N.filter(y=>y.unit==="money"),j=N.filter(y=>y.unit==="count"),m=Math.max(1,...h.flatMap(y=>x.map(O=>Number(O[y.key]||0)))),T=Math.max(1,...j.flatMap(y=>x.map(O=>Number(O[y.key]||0)))),G=920,M=300,_=8,$=22,k=M-$-28,H=x.length>1?(G-_*2)/(x.length-1):0,F=Math.max(Math.ceil(x.length/7),1),A=d===null?null:x[d]??null,b=y=>({"--metric-color":y.color}),P=(y,O)=>Number(y[O.key]||0),D=y=>y.unit==="money"?m:T,Q=y=>_+y*H,o=d===null?50:Math.min(88,Math.max(12,Q(d)/G*100)),w=(y,O)=>$+k-y/D(O)*k,R=y=>Math.max(0,...x.map(O=>P(O,y))),S=y=>{const O=x.map((u,X)=>({x:Q(X),y:w(P(u,y),y)}));return O.length?O.length===1?`M ${O[0].x} ${O[0].y}`:O.slice(1).reduce((u,X,U)=>{const ne=O[U],J=(ne.x+X.x)/2;return`${u} C ${J} ${ne.y}, ${J} ${X.y}, ${X.x} ${X.y}`},`M ${O[0].x} ${O[0].y}`):""};function B(y){i(O=>O.includes(y)?O.length===1?O:O.filter(u=>u!==y):[...O,y]),r(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:x.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:g.map(y=>{const O=l.includes(y.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${O?"active":""}`,style:b(y),onClick:()=>B(y.key),"aria-pressed":O,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:y.label})]},y.key)})}),x.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>r(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${G} ${M}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:_,y:$,width:G-_*2,height:k,rx:"14"}),[0,.25,.5,.75,1].map(y=>e.jsx("line",{className:"chart-grid",x1:_,x2:G-_,y1:$+y*k,y2:$+y*k},y)),d!==null?e.jsx("line",{className:"chart-hover-line",x1:Q(d),x2:Q(d),y1:$,y2:$+k}):null,N.map(y=>e.jsx("path",{className:"chart-series-line",d:S(y),style:b(y)},y.key)),d!==null?N.map(y=>e.jsx("circle",{className:"chart-series-dot",cx:Q(d),cy:w(P(x[d],y),y),r:"5",style:b(y)},`${y.key}-${d}`)):null,x.map((y,O)=>{const u=x.length>1?H:G-_*2;return e.jsx("rect",{className:"chart-hover-zone",x:Q(O)-u/2,y:$,width:u,height:k,onMouseEnter:()=>r(O),onFocus:()=>r(O),onClick:()=>r(O),tabIndex:0},y.date)})]}),A?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${o}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",A.date]}),e.jsx("div",{className:"tooltip-series-list",children:N.map(y=>e.jsxs("div",{className:"tooltip-series-row",style:b(y),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:y.label}),e.jsx("strong",{children:y.format(P(A,y))})]},y.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:x.filter((y,O)=>O===0||O===x.length-1||O%F===0).map(y=>e.jsx("span",{children:y.date},y.date))}),e.jsx("div",{className:"chart-insights",children:N.map(y=>e.jsxs("div",{className:"chart-insight",style:b(y),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:y.summaryLabel}),e.jsx("strong",{children:y.format(R(y))})]},y.key))})]})]})}function es({value:n,onChange:t,monthLabel:s}){const{t:l}=xe();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":l("dashboard.range"),children:["today","month"].map(i=>e.jsx("button",{type:"button",className:n===i?"active":"",onClick:()=>t(i),"aria-pressed":n===i,children:i==="today"?l("dashboard.rangeToday"):s??l("dashboard.rangeMonth")},i))})}function cr({points:n,metrics:t,emptyLabel:s}){const{t:l}=xe(),[i,d]=a.useState(t.map(o=>o.key)),[r,g]=a.useState(null),x=t.filter(o=>i.includes(o.key)),N=Math.max(1,...x.flatMap(o=>n.map(w=>Number(w[o.key]||0)))),h=920,j=260,m=8,T=22,M=j-T-28,_=n.length>1?(h-m*2)/(n.length-1):0,$=Math.max(Math.ceil(n.length/7),1),C=r===null?null:n[r]??null,k=o=>({"--metric-color":o.color}),H=o=>m+o*_,F=o=>T+M-o/N*M,A=r===null?50:Math.min(88,Math.max(12,H(r)/h*100)),b=(o,w)=>Number(o[w.key]||0),P=o=>Math.max(0,...n.map(w=>b(w,o))),D=o=>{const w=n.map((R,S)=>({x:H(S),y:F(b(R,o))}));return w.length?w.length===1?`M ${w[0].x} ${w[0].y}`:w.slice(1).reduce((R,S,B)=>{const y=w[B],O=(y.x+S.x)/2;return`${R} C ${O} ${y.y}, ${O} ${S.y}, ${S.x} ${S.y}`},`M ${w[0].x} ${w[0].y}`):""};function Q(o){d(w=>w.includes(o)?w.length===1?w:w.filter(R=>R!==o):[...w,o]),g(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":l("dashboard.chartMetrics"),children:t.map(o=>{const w=i.includes(o.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${w?"active":""}`,style:k(o),onClick:()=>Q(o.key),"aria-pressed":w,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:o.label})]},o.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>g(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${h} ${j}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:m,y:T,width:h-m*2,height:M,rx:"14"}),[0,.25,.5,.75,1].map(o=>e.jsx("line",{className:"chart-grid",x1:m,x2:h-m,y1:T+o*M,y2:T+o*M},o)),r!==null?e.jsx("line",{className:"chart-hover-line",x1:H(r),x2:H(r),y1:T,y2:T+M}):null,x.map(o=>e.jsx("path",{className:"chart-series-line",d:D(o),style:k(o)},o.key)),r!==null?x.map(o=>e.jsx("circle",{className:"chart-series-dot",cx:H(r),cy:F(b(n[r],o)),r:"5",style:k(o)},`${o.key}-${r}`)):null,n.map((o,w)=>{const R=n.length>1?_:h-m*2;return e.jsx("rect",{className:"chart-hover-zone",x:H(w)-R/2,y:T,width:R,height:M,onMouseEnter:()=>g(w),onFocus:()=>g(w),onClick:()=>g(w),tabIndex:0},`${o.label}-${w}`)})]}),C?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${A}%`},children:[e.jsx("div",{className:"tooltip-date",children:C.label}),e.jsxs("div",{className:"tooltip-series-list",children:[x.map(o=>e.jsxs("div",{className:"tooltip-series-row",style:k(o),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:o.label}),e.jsx("strong",{children:o.format(b(C,o))})]},o.key)),C.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:l("dashboard.sampleCount")}),e.jsx("strong",{children:ot(C.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((o,w)=>w===0||w===n.length-1||w%$===0).map((o,w)=>e.jsx("span",{children:o.label},`${o.label}-${w}`))}),e.jsx("div",{className:"chart-insights",children:x.map(o=>e.jsxs("div",{className:"chart-insight",style:k(o),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:o.summaryLabel}),e.jsx("strong",{children:o.format(P(o))})]},o.key))})]})}function vs({title:n,subtitle:t,data:s,range:l,onRangeChange:i,loading:d,error:r,mode:g}){const{t:x}=xe(),N=g==="users"?((s==null?void 0:s.users)??[]).map(h=>({id:`user-${h.user_id}`,label:h.email||`User #${h.user_id}`,total:Number(h.total||0)})):((s==null?void 0:s.servers)??[]).map(h=>({id:`${h.server_type}-${h.server_id}`,label:h.server_name||x("dashboard.unnamedNode"),total:Number(h.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(es,{value:l,onChange:i,monthLabel:x("dashboard.rangeLast31Days")})]}),r?e.jsx("div",{className:"chart-error",children:r}):null,d?e.jsx($e,{label:x("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:N.length===0?e.jsx("div",{className:"empty-state",children:x("dashboard.noTraffic")}):N.slice(0,10).map((h,j)=>{var G;const m=Math.max(((G=N[0])==null?void 0:G.total)??1,1),T=Math.max(3,h.total/m*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:j+1}),e.jsx("strong",{title:h.label,children:h.label}),e.jsx("small",{children:ir(h.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${T}%`}})})]},h.id)})})]})}function dr({data:n,range:t,onRangeChange:s,loading:l,error:i}){const{t:d}=xe(),r=[{key:"online_user",label:d("dashboard.onlineUsers"),summaryLabel:d(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:ot}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.onlineTrend")}),e.jsx("p",{children:d(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(es,{value:t,onChange:s,monthLabel:d("dashboard.rangeLast31Days")})]}),i?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx($e,{label:d("dashboard.chartLoading")}):e.jsx(cr,{points:(n==null?void 0:n.points)??[],metrics:r,emptyLabel:d("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:d("dashboard.onlineRetentionNote")})]})}function pr({data:n,range:t,onRangeChange:s,loading:l,error:i}){const{t:d}=xe(),r=(n==null?void 0:n.items)??[],g=Math.max(...r.map(x=>Number(x.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.topCtvCommission")}),e.jsx("p",{children:d("dashboard.topCtvCommissionHelp")})]}),e.jsx(es,{value:t,onChange:s})]}),i?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx($e,{label:d("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:r.length===0?e.jsx("div",{className:"empty-state",children:d("dashboard.noCommissionRank")}):r.map((x,N)=>{const h=Number(x.commission_amount||0)/g*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:N+1}),e.jsx("strong",{children:x.email||`User #${x.user_id}`}),e.jsxs("small",{children:[Ze(x.commission_amount)," VND · ",ot(x.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(h,3)}%`}})})]},`${x.user_id}-${N}`)})})]})}function kn({label:n,current:t,previous:s}){const{t:l}=xe();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?ot(t):t}),e.jsxs("small",{children:[l("dashboard.previous"),": ",typeof s=="number"?ot(s):s]})]})}function Ue(){const n=Ei();return a.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function ur(){return Yt().pathname}function mr({href:n,...t}){return e.jsx(Mi,{to:n,...t})}function hr(){const n=Ue(),{t,locale:s,setLocale:l}=xe(),[i,d]=a.useState(""),[r,g]=a.useState(""),[x,N]=a.useState(""),[h,j]=a.useState(!1),[m,T]=a.useState(!1),G=a.useRef(null);a.useEffect(()=>{function _($){G.current&&!G.current.contains($.target)&&T(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),a.useEffect(()=>{He()&&n.replace("/dashboard")},[n]);async function M(_){var $,C,k,H;_.preventDefault(),N(""),j(!0);try{const F=await Fa(i,r),A=(($=F.data)==null?void 0:$.auth_data)??((C=F.data)==null?void 0:C.token),b=((k=F.data)==null?void 0:k.is_admin)===1||((H=F.data)==null?void 0:H.is_admin)===!0;if(!A||!b)throw new Error(t("login.adminRequired"));Ia(A),n.replace("/dashboard")}catch(F){N(F instanceof Error?F.message:t("login.failed"))}finally{j(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:G,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>T(_=>!_),children:e.jsx(Jt,{size:17})}),m?e.jsx("div",{className:"locale-menu",children:Jn.map(_=>e.jsxs("button",{className:`locale-option ${s===_.code?"active":""}`,type:"button",onClick:()=>{l(_.code),T(!1)},children:[e.jsx("span",{className:"locale-flag",children:_.flag}),e.jsx("span",{children:_.label})]},_.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(ga,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:M,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ii,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:_=>d(_.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:i})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(la,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:_=>g(_.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:r})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,e.jsx("button",{className:"primary-button",disabled:h,type:"submit",children:t(h?"login.signingIn":"login.submit")})]})]})]})}const xr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:na}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:va},{href:"/config/payment",label:"nav.paymentConfig",icon:Qi},{href:"/config/theme",label:"nav.themeConfig",icon:Na}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Qn},{href:"/server/group",label:"nav.groupManagement",icon:Sa},{href:"/server/route",label:"nav.routeManagement",icon:ya}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:ps},{href:"/order",label:"nav.orders",icon:ra},{href:"/coupon",label:"nav.coupons",icon:sa},{href:"/giftcard",label:"nav.giftcards",icon:wa}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:ri},{href:"/subscription",label:"nav.subscriptions",icon:ps},{href:"/device",label:"nav.devices",icon:ja},{href:"/webcon",label:"nav.webcon",icon:Jt},{href:"/notice",label:"nav.notices",icon:Ut},{href:"/ticket",label:"nav.tickets",icon:oa},{href:"/knowledge",label:"nav.knowledge",icon:Gi}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Wi}]}];function br(){const[n,t]=a.useState("light");a.useEffect(()=>{const d=localStorage.getItem("admin-theme")??"light";t(d),document.documentElement.setAttribute("data-theme",d)},[]);const s=a.useCallback(i=>{t(i),localStorage.setItem("admin-theme",i),document.documentElement.setAttribute("data-theme",i)},[]),l=a.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:l}}function vi(n){return n?new Date(n*1e3):null}function gr(n,t){const s=vi(t);if(!s)return null;try{return new Intl.DateTimeFormat(n,{year:"numeric",month:"2-digit",day:"2-digit"}).format(s)}catch{return s.toLocaleDateString()}}function fr(n){const t=vi(n);return t?Math.ceil((t.getTime()-Date.now())/864e5):null}function Ke({children:n,title:t,subtitle:s}){const[l,i]=a.useState(!1),d=Ue(),r=ur(),{t:g,locale:x,setLocale:N}=xe(),{theme:h,toggle:j}=br(),[m,T]=a.useState(!1),G=a.useRef(null),[M,_]=a.useState(null),[$,C]=a.useState(!1),k=a.useCallback(async(o=!1)=>{if(He()){C(o);try{_(o?await Jo():await Yo())}catch(w){_({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:g("license.unavailable"),error:w instanceof Error?w.message:g("license.unavailable")})}finally{C(!1)}}},[g]);a.useEffect(()=>{function o(w){G.current&&!G.current.contains(w.target)&&T(!1)}return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),a.useEffect(()=>{k(!1);const o=window.setInterval(()=>{k(!1)},6e4);return()=>window.clearInterval(o)},[k]);function H(){ci(),d.replace("/login")}const F=(M==null?void 0:M.license_expires_at)??(M==null?void 0:M.expires_at),A=gr(x,F),b=typeof(M==null?void 0:M.days_until_expiry)=="number"?M.days_until_expiry:fr(F),P=typeof b=="number"?b<=0?g("license.expiresToday"):g("license.daysLeft",{days:b}):null,D=!!M&&M.available&&!M.requires_renewal,Q=D&&!!(M!=null&&M.renewal_warning);return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),l&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>i(!1)}),e.jsxs("aside",{className:`sidebar ${l?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:g("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:xr.map(o=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:g(o.label)}),o.items.map(w=>{const R=w.icon,S=r===w.href;return e.jsxs(mr,{className:`nav-item ${S?"active":""}`,href:w.href,onClick:()=>i(!1),children:[e.jsx(R,{size:17}),e.jsx("span",{children:g(w.label)})]},w.href)})]},o.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":g(l?"common.closeMenu":"common.openMenu"),onClick:()=>i(o=>!o),children:l?e.jsx(Ne,{size:19}):e.jsx(da,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[D?e.jsxs("button",{className:`license-chip ${Q?"warning":""}`,type:"button",disabled:$,title:g("license.refresh"),onClick:()=>void k(!0),children:[e.jsx(ls,{size:16}),e.jsxs("span",{className:"license-chip-copy",children:[e.jsx("span",{children:g("license.validUntil")}),e.jsx("strong",{children:A??g("license.unknownExpiry")})]}),P?e.jsx("small",{children:P}):null]}):null,e.jsxs("div",{className:"locale-dropdown",ref:G,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":g("common.language"),onClick:()=>T(o=>!o),children:e.jsx(Jt,{size:17})}),m?e.jsx("div",{className:"locale-menu",children:Jn.map(o=>e.jsxs("button",{className:`locale-option ${x===o.code?"active":""}`,type:"button",onClick:()=>{N(o.code),T(!1)},children:[e.jsx("span",{className:"locale-flag",children:o.flag}),e.jsx("span",{children:o.label})]},o.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":h==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:h==="dark"?e.jsx(ka,{size:17}):e.jsx(pa,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:H,children:[e.jsx(ca,{size:16}),e.jsx("span",{children:g("common.logout")})]})]})]}),e.jsxs("main",{className:"content",children:[M!=null&&M.requires_renewal?e.jsxs("section",{className:"license-banner",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(Un,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.renewTitle")}),e.jsx("p",{children:g("license.renewBody")}),e.jsxs("small",{children:[g("license.currentStatus"),": ",M.status,M.error?` - ${M.error}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void k(!0),children:[e.jsx(Oe,{size:16}),g($?"license.refreshing":"license.refresh")]})]}):null,Q?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(ls,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.expiryWarningTitle")}),e.jsx("p",{children:g("license.expiryWarningBody",{date:A??g("license.unknownExpiry"),days:b??""})}),e.jsxs("small",{children:[g("license.currentStatus"),": ",M.status]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void k(!0),children:[e.jsx(Oe,{size:16}),g($?"license.refreshing":"license.refresh")]})]}):null,n]})]})]})}function Xt(){return{data:null,loading:!0,error:""}}function yr(n,t){const s=new Date;if(n==="today"){const i=s.getHours();return{range:n,points:Array.from({length:24},(d,r)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),r).getTime()/1e3),label:`${String(r).padStart(2,"0")}:00`,online_user:r===i?t:0,sample_count:r===i?1:0}))}}const l=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(i,d)=>{const r=new Date(l);return r.setDate(l.getDate()-(30-d)),{time:Math.floor(r.getTime()/1e3),label:`${String(r.getMonth()+1).padStart(2,"0")}-${String(r.getDate()).padStart(2,"0")}`,online_user:d===30?t:0,online_user_avg:d===30?t:0,sample_count:d===30?1:0}})}}function vr(){var D,Q,o,w,R,S,B,y,O,u,X,U,ne;const n=Ue(),{t}=xe(),[s,l]=a.useState(null),[i,d]=a.useState(""),[r,g]=a.useState(!0),[x,N]=a.useState("today"),[h,j]=a.useState("today"),[m,T]=a.useState("today"),[G,M]=a.useState("today"),[_,$]=a.useState(Xt),[C,k]=a.useState(Xt),[H,F]=a.useState(Xt),[A,b]=a.useState(Xt),P=a.useCallback(async()=>{g(!0),d("");try{l(await Aa())}catch(J){d(J instanceof Error?J.message:t("dashboard.loadFailed"))}finally{g(!1)}},[t]);return a.useEffect(()=>{if(!He()){n.replace("/login");return}P()},[P,n]),a.useEffect(()=>{let J=!0;return $(ie=>({...ie,loading:!0,error:""})),Oa(x).then(ie=>{J&&$({data:ie,loading:!1,error:""})}).catch(ie=>{J&&$({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{J=!1}},[x,t]),a.useEffect(()=>{let J=!0;return k(ie=>({...ie,loading:!0,error:""})),Ra(h).then(ie=>{J&&k({data:ie,loading:!1,error:""})}).catch(ie=>{J&&k({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{J=!1}},[h,t]),a.useEffect(()=>{let J=!0;return F(ie=>({...ie,loading:!0,error:""})),Ha(m).then(ie=>{J&&F({data:ie,loading:!1,error:""})}).catch(()=>{var ie;J&&F({data:yr(m,((ie=s==null?void 0:s.override)==null?void 0:ie.online_user)??0),loading:!1,error:""})}),()=>{J=!1}},[m,(D=s==null?void 0:s.override)==null?void 0:D.online_user]),a.useEffect(()=>{let J=!0;return b(ie=>({...ie,loading:!0,error:""})),Ua(G).then(ie=>{J&&b({data:ie,loading:!1,error:""})}).catch(ie=>{J&&b({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{J=!1}},[G,t]),e.jsxs(Ke,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[i?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:i}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,children:[e.jsx(Oe,{size:16}),t("common.retry")]})]}):null,r&&!s?e.jsx($e,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((Q=s.override)==null?void 0:Q.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(o=s.override)==null?void 0:o.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:r,children:[e.jsx(Oe,{size:16}),t(r?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(Qt,{label:t("dashboard.onlineUsers"),value:ot(((w=s.override)==null?void 0:w.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(Qt,{label:t("dashboard.todayIncome"),value:`${Ze(((R=s.override)==null?void 0:R.day_paid_income)??((S=s.override)==null?void 0:S.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(Qt,{label:t("dashboard.todayRegistrations"),value:ot(((B=s.override)==null?void 0:B.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(Qt,{label:t("dashboard.pendingCommission"),value:ot(((y=s.override)==null?void 0:y.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(kn,{label:t("dashboard.monthIncome"),current:`${Ze(((O=s.override)==null?void 0:O.month_income)??0)} VND`,previous:`${Ze(((u=s.override)==null?void 0:u.last_month_income)??0)} VND`}),e.jsx(kn,{label:t("dashboard.monthCommission"),current:`${Ze(((X=s.override)==null?void 0:X.commission_month_payout)??0)} VND`,previous:`${Ze(((U=s.override)==null?void 0:U.commission_last_month_payout)??0)} VND`}),e.jsx(kn,{label:t("dashboard.monthRegistrations"),current:((ne=s.override)==null?void 0:ne.month_register_total)??0,previous:"-"})]}),e.jsx(lr,{records:s.order,override:s.override}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(dr,{data:H.data,range:m,onRangeChange:T,loading:H.loading,error:H.error}),e.jsx(pr,{data:A.data,range:G,onRangeChange:M,loading:A.loading,error:A.error}),e.jsx(vs,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:_.data,range:x,onRangeChange:N,loading:_.loading,error:_.error,mode:"users"}),e.jsx(vs,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:C.data,range:h,onRangeChange:j,loading:C.loading,error:C.error,mode:"servers"})]})]}):null]})}const jr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function js(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function wr(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function Nn(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function kr(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Nr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function _r(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Je(n){return n===!0||n===1||n==="1"}function Sr(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function _n(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Cr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function zr({field:n,value:t,onChange:s}){const{t:l}=xe(),i=n.toInput?n.toInput(t):Sr(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Je(t)?"on":""}`,type:"button",onClick:()=>s(Je(t)?0:1),"aria-pressed":Je(t),children:[e.jsx("span",{}),Je(t)?js(l)[0].label:js(l)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:i,onChange:d=>s(d.target.value),children:(n.options??[]).map(d=>e.jsx("option",{value:d.value,children:d.label},String(d.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,rows:4,value:i}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,type:n.type,value:i}):null]})]})}function Tr({plans:n,emailTemplates:t,t:s}){const l=[{label:s("config.option.disabled"),value:0},...n.map(i=>({label:i.name,value:i.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:l},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:i=>Number(i.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:i=>Je(i.email_whitelist_enable),fromInput:_n},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:i=>Je(i.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:i=>Je(i.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:i=>Je(i.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:i=>Je(i.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:i=>Je(i.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:i=>Je(i.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Nr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:i=>String(i.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:wr(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:Nn(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:Nn(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:Nn(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:kr(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:i=>Number(i.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:i=>Je(i.subscribe_url_ua_enable),fromInput:Cr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:_n}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:_r(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:_n},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:i=>Je(i.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:i=>Je(i.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:i=>Je(i.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:i=>Je(i.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:i=>Je(i.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:i=>Je(i.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(i=>({label:i,value:i}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Pr(){const n=Ue(),{t}=xe(),[s,l]=a.useState("site"),[i,d]=a.useState(null),[r,g]=a.useState([]),[x,N]=a.useState([]),[h,j]=a.useState(!0),[m,T]=a.useState(null),[G,M]=a.useState(""),_=a.useCallback(async()=>{j(!0),M("");try{const[P,D,Q]=await Promise.all([di(),Ba(),qa()]);d(P),g(D),N(Q)}catch(P){M(P instanceof Error?P.message:t("config.loadFailed"))}finally{j(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}_()},[_,n]),a.useEffect(()=>{const P=document.querySelector(".config-tabs button.active");P&&P.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const $=a.useMemo(()=>Tr({plans:r,emailTemplates:x,t}),[r,x,t]),C=$.find(P=>P.key===s)??$[0],k=(i==null?void 0:i[C.key])??{};function H(P,D,Q){d(o=>o&&{...o,[P]:{...o[P],[D]:Q}})}async function F(){var Q,o,w;if(!i)return;const P=C.key==="safe"?String(((Q=window.settings)==null?void 0:Q.secure_path)??"").trim():"",D=C.key==="safe"?String(((o=i.safe)==null?void 0:o.secure_path)??"").trim():"";T(C.key),M("");try{await pi(i[C.key]),(w=window.showToast)==null||w.call(window,t("config.saveSuccess"),"success"),C.key==="safe"&&D&&D!==P&&(window.settings={...window.settings??{},secure_path:D},window.location.replace(`${window.location.origin}/${D}`))}catch(R){M(R instanceof Error?R.message:t("config.saveFailed"))}finally{T(null)}}async function A(){var P;T("mail"),M("");try{await Ga(),(P=window.showToast)==null||P.call(window,t("config.email.testSuccess"),"success")}catch(D){M(D instanceof Error?D.message:t("config.email.testFailed"))}finally{T(null)}}async function b(){var D;const P=String((i==null?void 0:i.telegram.telegram_bot_token)??"");T("webhook"),M("");try{await Wa(P),(D=window.showToast)==null||D.call(window,t("config.telegram.webhookSuccess"),"success")}catch(Q){M(Q instanceof Error?Q.message:t("config.telegram.webhookFailed"))}finally{T(null)}}return e.jsxs(Ke,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        section.config-layout {
          display: flex !important;
          flex-direction: column !important;
          gap: 24px !important;
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          overflow: hidden !important;
        }

        .config-panel {
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
        }

        aside.config-tabs {
          display: flex !important;
          flex-direction: row !important;
          overflow-x: auto !important;
          overflow-y: hidden !important;
          gap: 8px !important;
          padding: 8px 4px !important;
          margin-bottom: 0 !important;
          -webkit-overflow-scrolling: touch !important;
          position: relative !important;
          z-index: 10 !important;
          width: 100% !important;
          min-width: 0 !important;
          max-width: 100% !important;
          grid-template-columns: none !important;
          top: auto !important;
          border-bottom: 2px solid var(--line) !important;
          
          /* Sleek scrollbar for Firefox */
          scrollbar-width: thin !important;
          scrollbar-color: var(--line) transparent !important;
        }

        /* Sleek scrollbar for Safari, Chrome, Opera, Edge */
        aside.config-tabs::-webkit-scrollbar {
          height: 5px !important;
        }

        aside.config-tabs::-webkit-scrollbar-track {
          background: transparent !important;
        }

        aside.config-tabs::-webkit-scrollbar-thumb {
          background: var(--line) !important;
          border-radius: 10px !important;
        }

        aside.config-tabs::-webkit-scrollbar-thumb:hover {
          background: var(--muted) !important;
        }

        aside.config-tabs button {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex: 0 0 auto !important;
          width: auto !important;
          height: 40px !important;
          min-height: 40px !important;
          padding: 0 20px !important;
          border: 1px solid transparent !important;
          border-radius: 20px !important;
          background: transparent !important;
          color: var(--muted) !important;
          font-weight: 600 !important;
          font-size: 13.5px !important;
          cursor: pointer !important;
          transition: all 0.22s cubic-bezier(0.4, 0, 0.2, 1) !important;
          white-space: nowrap !important;
          box-shadow: none !important;
          min-width: 0 !important;
          max-width: none !important;
          text-align: center !important;
        }

        aside.config-tabs button:hover {
          background: rgba(120, 120, 120, 0.08) !important;
          color: var(--accent-strong) !important;
          transform: none !important;
          border-color: transparent !important;
        }

        aside.config-tabs button.active {
          border-color: transparent !important;
          background: var(--accent) !important;
          color: #ffffff !important;
          box-shadow: 0 4px 12px rgba(15, 159, 112, 0.22) !important;
        }

        aside.config-tabs button span {
          font-weight: 600 !important;
          font-size: 13.5px !important;
        }

        aside.config-tabs button small {
          display: none !important;
        }

        /* Mobile specific style touchups */
        @media (max-width: 768px) {
          aside.config-tabs {
            gap: 6px !important;
            padding: 6px 2px !important;
            border-bottom-width: 1px !important;
          }
          
          aside.config-tabs button {
            height: 36px !important;
            min-height: 36px !important;
            padding: 0 14px !important;
            border-radius: 18px !important;
          }
          
          aside.config-tabs button span {
            font-size: 13px !important;
          }

          .config-panel-heading {
            gap: 12px !important;
            padding: 16px !important;
          }

          .config-panel-heading h2 {
            font-size: 18px !important;
          }

          .config-panel-heading p {
            font-size: 12px !important;
          }

          .save-button {
            width: 100% !important;
            justify-content: center !important;
            padding: 10px !important;
            font-size: 14px !important;
          }
        }
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:_,disabled:h,children:[e.jsx(Oe,{size:16}),t(h?"common.refreshing":"common.refresh")]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,h&&!i?e.jsx($e,{label:t("config.loading")}):null,i?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:jr.map(P=>{const D=$.find(Q=>Q.key===P);return D?e.jsxs("button",{className:s===P?"active":"",type:"button",onClick:()=>l(P),children:[e.jsx("span",{children:D.label}),e.jsx("small",{children:D.hint})]},P):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:C.label}),e.jsx("p",{children:C.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:m===C.key,type:"button",onClick:F,children:[e.jsx(lt,{size:16}),m===C.key?t("config.saving"):t("config.saveTab")]})]}),C.warning?e.jsx("div",{className:"config-warning",children:C.warning}):null,e.jsx("div",{className:"config-fields",children:C.fields.map(P=>P.visible&&!P.visible(k)?null:e.jsx(zr,{field:P,value:k[P.key],onChange:D=>H(C.key,P.key,D)},P.key))}),C.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:m==="mail",onClick:A,children:[e.jsx(ii,{size:16}),t(m==="mail"?"config.email.testing":"config.email.test")]})}):null,C.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:m==="webhook",onClick:b,children:[e.jsx(_a,{size:16}),t(m==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(ai,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Tt(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function Sn(n){return n===!0||n===1||n==="1"}function $r(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Er(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Mr(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState([]),[r,g]=a.useState(null),[x,N]=a.useState({}),[h,j]=a.useState(!0),[m,T]=a.useState(!1),[G,M]=a.useState(!1),[_,$]=a.useState(""),[C,k]=a.useState(""),[H,F]=a.useState({}),A=a.useCallback(async()=>{j(!0),$("");try{const[S,B]=await Promise.all([Ka(),Ya()]);l(S),d(B),F({})}catch(S){$(S instanceof Error?S.message:t("payment.loadFailed"))}finally{j(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}A()},[A,n]);async function b(S){const B=(S==null?void 0:S.payment)??i[0]??"",y=$r(S,B);if(g(y),N({}),$(""),k(""),!!B){T(!0);try{N(await hs(B,S==null?void 0:S.id))}catch(O){$(O instanceof Error?O.message:t("payment.formLoadFailed"))}finally{T(!1)}}}async function P(S){if(r){g({...r,payment:S,config:{}}),T(!0),$("");try{N(await hs(S,r.id))}catch(B){$(B instanceof Error?B.message:t("payment.formLoadFailed"))}finally{T(!1)}}}async function D(S){var B,y;if(S.preventDefault(),!!r){M(!0),$(""),k("");try{await Ja(Er(r)),g(null),(B=window.showToast)==null||B.call(window,t("payment.saveSuccess"),"success"),await A()}catch(O){(y=window.showToast)==null||y.call(window,O instanceof Error?O.message:t("payment.saveFailed"),"error")}finally{M(!1)}}}async function Q(S){var B;$(""),k("");try{await Za(S),await A()}catch(y){(B=window.showToast)==null||B.call(window,y instanceof Error?y.message:t("payment.toggleFailed"),"error")}}async function o(S){var B;(B=window.showConfirm)==null||B.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var y,O;$(""),k("");try{await Qa(S),(y=window.showToast)==null||y.call(window,t("payment.deleteSuccess"),"success"),await A()}catch(u){(O=window.showToast)==null||O.call(window,u instanceof Error?u.message:t("payment.deleteFailed"),"error")}}})}async function w(S,B){var X;const y=S+B;if(y<0||y>=s.length)return;const O=[...s],u=O[S];O.splice(S,1),O.splice(y,0,u),l(O);try{await Xa(O.map(U=>U.id)),await A()}catch(U){(X=window.showToast)==null||X.call(window,U instanceof Error?U.message:t("payment.sortFailed"),"error"),await A()}}async function R(S){var y;const B=await Tt(S);(y=window.showToast)==null||y.call(window,t(B?"payment.copied":"common.copyFailed"),B?"success":"error")}return e.jsxs(Ke,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:h,children:[e.jsx(Oe,{size:16}),e.jsx("span",{children:t(h?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void b(),children:[e.jsx(rt,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),_?e.jsx("div",{className:"form-error",children:_}):null,C?e.jsx("div",{className:"form-success",children:C}):null,h&&s.length===0?e.jsx($e,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Mobile Payment List Styles */
        .mobile-payment-list {
          display: none !important;
        }

        @media (max-width: 860px) {
          .mobile-payment-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 8px !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }

          .payment-mobile-card {
            background: var(--surface) !important;
            border: 1px solid var(--line) !important;
            border-radius: 16px !important;
            box-shadow: var(--shadow) !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }

          .payment-mobile-card.enabled {
            border-color: var(--accent) !important;
            box-shadow: 0 4px 20px var(--accent-soft) !important;
          }

          .payment-mobile-card.disabled {
            opacity: 0.8 !important;
          }

          .payment-mobile-card:active {
            transform: scale(0.99) !important;
          }

          .payment-mobile-card .card-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 12px 16px !important;
            background: var(--surface-soft) !important;
            border-bottom: 1px solid var(--line) !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
          }

          .payment-mobile-card .header-left {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .payment-mobile-card .id-tag {
            font-family: monospace !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            color: var(--muted) !important;
            font-weight: 700 !important;
            font-size: 11px !important;
            padding: 2px 6px !important;
            border-radius: 6px !important;
            flex-shrink: 0 !important;
          }

          .payment-mobile-card .gateway-tag {
            background: var(--surface-soft) !important;
            color: var(--text) !important;
            border: 1px solid var(--line) !important;
            font-size: 10px !important;
            font-weight: 700 !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            flex-shrink: 0 !important;
          }

          .payment-mobile-card .status-switch {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            padding: 4px 10px !important;
            border-radius: 999px !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            color: var(--muted) !important;
            cursor: pointer !important;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
            flex-shrink: 0 !important;
          }
          
          .payment-mobile-card .status-switch.enabled {
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
            border-color: rgba(var(--accent-rgb), 0.3) !important;
          }
          
          .payment-mobile-card .status-switch::before {
            content: "" !important;
            display: inline-block !important;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background: var(--muted) !important;
            transition: all 0.2s ease !important;
          }
          
          .payment-mobile-card .status-switch.enabled::before {
            background: var(--accent-strong) !important;
            box-shadow: 0 0 8px var(--accent) !important;
          }

          .payment-mobile-card .card-body {
            padding: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 14px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .payment-mobile-card .payment-info {
            display: flex !important;
            align-items: center !important;
            gap: 12px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .payment-mobile-card .payment-avatar {
            width: 44px !important;
            height: 44px !important;
            border-radius: 12px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
            overflow: hidden !important;
            border: 1px solid var(--line) !important;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
          }

          .payment-mobile-card .payment-avatar.text-avatar {
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
            font-weight: 800 !important;
            font-size: 15px !important;
            letter-spacing: 0.5px !important;
          }

          .payment-mobile-card .payment-avatar img {
            width: 100% !important;
            height: 100% !important;
            object-fit: contain !important;
          }

          .payment-mobile-card .payment-details {
            display: flex !important;
            flex-direction: column !important;
            gap: 4px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            flex: 1 !important;
            overflow: hidden !important;
          }

          .payment-mobile-card .payment-details h3 {
            margin: 0 !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            color: var(--text) !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
          }

          .payment-mobile-card .fee-info {
            margin: 0 !important;
            font-size: 12px !important;
            color: var(--muted) !important;
            display: flex !important;
            align-items: center !important;
            gap: 4px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
            flex-wrap: wrap !important;
          }

          .payment-mobile-card .fee-badge {
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            font-size: 11px !important;
            color: var(--text) !important;
            font-weight: 600 !important;
            white-space: nowrap !important;
          }

          .payment-mobile-card .notify-url-section {
            display: flex !important;
            flex-direction: column !important;
            gap: 6px !important;
            background: var(--surface-soft) !important;
            padding: 10px 12px !important;
            border-radius: 12px !important;
            border: 1px solid var(--line) !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            overflow: hidden !important;
          }

          .payment-mobile-card .section-label {
            font-size: 10px !important;
            text-transform: uppercase !important;
            letter-spacing: 0.5px !important;
            color: var(--muted) !important;
            font-weight: 700 !important;
          }

          .payment-mobile-card .copy-url-pill {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            background: var(--surface) !important;
            border: 1px solid var(--line) !important;
            border-radius: 8px !important;
            padding: 8px 10px !important;
            cursor: pointer !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            text-align: left !important;
            gap: 8px !important;
            transition: all 0.2s ease !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }

          .payment-mobile-card .copy-url-pill:hover,
          .payment-mobile-card .copy-url-pill:active {
            background: var(--line) !important;
            border-color: var(--accent) !important;
          }

          .payment-mobile-card .url-text {
            font-family: monospace !important;
            font-size: 11px !important;
            color: var(--text) !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            white-space: nowrap !important;
            flex: 1 !important;
            min-width: 0 !important;
            max-width: 100% !important;
          }

          .payment-mobile-card .copy-icon {
            color: var(--muted) !important;
            flex-shrink: 0 !important;
            transition: color 0.2s ease !important;
          }

          .payment-mobile-card .copy-url-pill:active .copy-icon {
            color: var(--accent-strong) !important;
          }

          .payment-mobile-card .card-footer {
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            padding: 12px 16px !important;
            border-top: 1px solid var(--line) !important;
            background: var(--surface-soft) !important;
            gap: 12px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .payment-mobile-card .sorting-controls {
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 10px !important;
            width: 100% !important;
            flex-shrink: 0 !important;
          }

          .payment-mobile-card .mini-sort-btn {
            flex: 1 !important;
            max-width: 120px !important;
            height: 34px !important;
            border-radius: 8px !important;
            border: 1px solid var(--line) !important;
            background: var(--surface) !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            color: var(--text) !important;
            cursor: pointer !important;
            padding: 0 !important;
            transition: all 0.2s ease !important;
          }

          .payment-mobile-card .mini-sort-btn:active {
            background: var(--line) !important;
            transform: scale(0.95) !important;
          }

          .payment-mobile-card .mini-sort-btn:disabled {
            opacity: 0.3 !important;
            cursor: not-allowed !important;
            transform: none !important;
          }

          .payment-mobile-card .action-buttons {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            width: 100% !important;
            min-width: 0 !important;
          }

          .payment-mobile-card .action-btn {
            height: 34px !important;
            flex: 1 !important;
            border-radius: 8px !important;
            border: 1px solid var(--line) !important;
            background: var(--surface) !important;
            color: var(--text) !important;
            font-weight: 600 !important;
            font-size: 12px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
          }

          .payment-mobile-card .action-btn:active {
            transform: scale(0.95) !important;
            background: var(--line) !important;
          }

          .payment-mobile-card .action-btn.edit-btn {
            border-color: var(--accent-soft) !important;
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
          }

          .payment-mobile-card .action-btn.delete-btn {
            border-color: rgba(244, 63, 94, 0.1) !important;
            background: rgba(244, 63, 94, 0.1) !important;
            color: rgb(244, 63, 94) !important;
          }

          .payment-mobile-card .action-btn.delete-btn:active {
            background: rgba(244, 63, 94, 0.2) !important;
          }

          /* Drawer Panel specific styles */
          .drawer-handle {
            width: 36px !important;
            height: 4px !important;
            background: var(--line) !important;
            border-radius: 2px !important;
            margin: 8px auto 0 !important;
            flex-shrink: 0 !important;
          }

          .hide-on-desktop {
            display: block !important;
          }

          .hide-on-mobile {
            display: none !important;
          }

          /* Toolbar Stacking */
          .toolbar-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .toolbar-row .button-row {
            width: 100% !important;
            display: flex !important;
            gap: 8px !important;
            justify-content: stretch !important;
          }
          .toolbar-row .button-row button {
            flex: 1 !important;
            min-height: 40px !important;
            padding: 0 10px !important;
          }
        }

        .hide-on-desktop {
          display: none;
        }

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((S,B)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:S.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void w(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(rs,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void w(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(os,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Sn(S.enable)?"active":""}`,type:"button",onClick:()=>void Q(S.id),"aria-label":Sn(S.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:S.name}),S.icon?e.jsx("small",{children:S.icon}):null]}),e.jsx("td",{children:S.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void R(S.notify_url),children:[e.jsx("span",{children:S.notify_url}),e.jsx(Wt,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void b(S),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void o(S.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},S.id)),!h&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((S,B)=>{const y=Sn(S.enable),O=S.handling_fee_percent!==null&&S.handling_fee_percent!==""?`${S.handling_fee_percent}%`:"",u=S.handling_fee_fixed!==null?`${Ze(S.handling_fee_fixed)} VND`:"",X=[O,u].filter(Boolean).join(" + ")||"No fees",U=H[S.id],ne=S.icon&&!U;return e.jsxs("div",{className:`payment-mobile-card ${y?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",S.id]}),e.jsx("span",{className:"gateway-tag",children:S.payment})]}),e.jsx("button",{className:`admin-switch ${y?"active":""}`,type:"button",onClick:()=>void Q(S.id),"aria-label":t(y?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[ne?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:S.icon,alt:S.name,onError:()=>{F(J=>({...J,[S.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:S.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:S.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:X})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void R(S.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:S.notify_url}),e.jsx(Wt,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void w(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(rs,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void w(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(os,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void b(S),children:[e.jsx(We,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void o(S.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},S.id)}),!h&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),r?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:r.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:r.name,onChange:S=>g({...r,name:S.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:r.icon,onChange:S=>g({...r,icon:S.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:r.notify_domain,onChange:S=>g({...r,notify_domain:S.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:r.handling_fee_percent,onChange:S=>g({...r,handling_fee_percent:S.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:r.handling_fee_fixed,onChange:S=>g({...r,handling_fee_fixed:S.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:r.payment,onChange:S=>void P(S.target.value),children:i.map(S=>e.jsx("option",{value:S,children:S},S))})]}),m?e.jsx($e,{label:t("payment.formLoading")}):null,m?null:Object.entries(x).map(([S,B])=>e.jsxs("label",{children:[e.jsx("span",{children:B.label}),e.jsx("input",{className:"config-input",placeholder:B.description,value:String(r.config[S]??B.value??""),onChange:y=>g({...r,config:{...r.config,[S]:y.target.value}})})]},S)),r.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"payment.saving":"common.save")]})]})]})]})}):null]})}function Dr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Lr(n,t){return t[n.field_name]??n.default_value??""}function Ir(){const n=Ue(),{t}=xe(),[s,l]=a.useState(null),[i,d]=a.useState(null),[r,g]=a.useState(!0),[x,N]=a.useState(!1),[h,j]=a.useState(!1),[m,T]=a.useState(null),[G,M]=a.useState(""),[_,$]=a.useState(""),C=a.useCallback(async()=>{g(!0),M("");try{l(await Va())}catch(b){M(b instanceof Error?b.message:t("theme.loadFailed"))}finally{g(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}C()},[C,n]);async function k(b,P){d(null),N(!0),M(""),$("");try{const D=await eo(b);d({key:b,theme:P,values:D})}catch(D){M(D instanceof Error?D.message:t("theme.configLoadFailed"))}finally{N(!1)}}async function H(b){T(b),M(""),$("");try{await pi({frontend_theme:b}),$(t("theme.activateSuccess")),await C()}catch(P){M(P instanceof Error?P.message:t("theme.activateFailed"))}finally{T(null)}}async function F(b){if(b.preventDefault(),!!i){j(!0),M(""),$("");try{await to(i.key,i.values),d(null),$(t("theme.saveSuccess")),await C()}catch(P){M(P instanceof Error?P.message:t("theme.saveFailed"))}finally{j(!1)}}}function A(b,P){d(D=>D&&{...D,values:{...D.values,[b]:P}})}return e.jsxs(Ke,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:C,disabled:r,children:[e.jsx(Oe,{size:16}),t(r?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),G?e.jsx("div",{className:"form-error",children:G}):null,_?e.jsx("div",{className:"form-success",children:_}):null,r&&!s?e.jsx($e,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([b,P])=>{const D=s.active===b;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Dr(P)})`},children:D?e.jsxs("span",{className:"theme-active",children:[e.jsx(si,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:P.name||b}),e.jsx("p",{children:P.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",P.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void k(b,P),children:[e.jsx(ba,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:D||m===b,type:"button",onClick:()=>void H(b),children:[e.jsx(ua,{size:15}),t(D?"theme.current":m===b?"theme.activating":"theme.activate")]})]})]},b)})}):null,x?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx($e,{label:t("theme.configLoading")})})}):null,i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:i.theme.name||i.key})}),e.jsx("p",{children:i.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:F,children:[(i.theme.configs??[]).map(b=>{const P=Lr(b,i.values);return e.jsxs("label",{children:[e.jsx("span",{children:b.label}),b.description?e.jsx("p",{className:"field-description",children:b.description}):null,b.field_type==="select"?e.jsx("select",{className:"config-input",value:P,onChange:D=>A(b.field_name,D.target.value),children:Object.entries(b.select_options??{}).map(([D,Q])=>e.jsx("option",{value:D,children:Q},D))}):null,b.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:b.placeholder,rows:5,value:P,onChange:D=>A(b.field_name,D.target.value)}):null,b.field_type!=="select"&&b.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:b.placeholder,value:P,onChange:D=>A(b.field_name,D.target.value)}):null]},b.field_name)}),(i.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"theme.saving":"common.save")]})]})]})]})}):null]})}const Wn=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],Fr=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Ar=["tcp","ws","grpc","http","httpupgrade","xhttp"],ji=["tcp","ws","grpc"],wi=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Or=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],dn=["anytls","hysteria2","trojan","tuic"],Rr=["tcp","ws","grpc","httpupgrade","xhttp"],Hr=["chrome","firefox","safari","ios","android","edge","360","qq"],Ur=["vmess","vless","trojan","hysteria","tuic","anytls"],qr=["trojan","hysteria","tuic","anytls"],ki=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],pn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},un=[10,20,50,100],Ni="admin_server_manage_page_size";function _i(n){return un.includes(n)}function Br(){if(typeof window>"u")return un[0];try{const n=Number(window.localStorage.getItem(Ni));if(_i(n))return n}catch{}return un[0]}const ts=typeof window<"u"?window.location.origin:"",Gr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Wr(n,t,s=""){return n[t]??s}function ye(n,t,s=""){return String(Wr(n,t,s))}function Kr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function Pt(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function Kn(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function Yr(n){return n==="vmess"?"networkSettings":"network_settings"}function Jr(n,t){const s=n==="vmess",l=n==="vless"||ut(n),i={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return l?{acceptProxyProtocol:!1,...i}:i;case"ws":return l?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function ut(n){return n==="v2node"||n==="zicnode"}function Zr(n){return qr.includes(n)}function Qr(n){return ut(n)||Ur.includes(n)}function ws(n){return n==="vmess"?"tlsSettings":"tls_settings"}function Xr(n){const t=String((n==null?void 0:n._type)??"");return Zr(t)?1:Number((n==null?void 0:n.tls)??0)}function mn(n){return!!n&&n!=="shadowsocks"}function Vr(n){return n==="vless"||n==="vmess"}function hn(n){return n==="vless"||n==="anytls"}function el(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function ks(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?ji:n==="vless"||n==="vmess"?Rr:[]}function tl(n){var t;return ut(n)?"ZicNode":((t=Wn.find(s=>s.value===n))==null?void 0:t.label)??n}function Me(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function ns(n){return n===!0||n===1||n==="1"||n==="true"}function Ns(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function Si(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function nl(n){return Si(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function xn(n){const t={...pn,...Pt(n)};if(!ns(t.enable))return{enable:!1};const l={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:ki.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(r=>{const g=Me(t[r]);g&&(l[r]=g)});const i=Si(t.addresses);i.length&&(l.addresses=i);const d=nl(t.reserved);return d.length&&(l.reserved=d),l}const sl=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],il=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function gt(n,t){const s=Pt(n);if(t===0)return{};const l={...s};return t===1?sl.forEach(i=>delete l[i]):t===2&&il.forEach(i=>delete l[i]),Object.keys(l).forEach(i=>{const d=l[i];(d===""||d===null||d===void 0)&&delete l[i]}),l}function al(n){const t=Pt(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),l=!!(Me(t.public_key_sha256)||Me(t.sha256_hex)||Me(t.sha256));return s==="error"?{state:"error",hasPin:l,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:l?{state:"ready",hasPin:l,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:l,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function _s(n,t=ts){return Me(n).replace(/\/+$/,"")||t}function Ss(n){return`'${n.replace(/'/g,"'\\''")}'`}function ol(n,t){const s=t.apiHost||ts,l=t.apiKey||"TOKEN_MOI";return`wget -N ${Gr} && \\
bash install.sh --api-host ${Ss(s)} --node-id ${n} --api-key ${Ss(l)}`}function Cs(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function zs(n,t){if(t){const l=JSON.parse(JSON.stringify(t));if(l.group_id=Cs(l.group_id),l.route_id=Cs(l.route_id),ut(n)){l.warp_settings={...pn,...Pt(l.warp_settings)};const i=String(l.protocol??""),d=Number(l.tls??0);d===2&&!hn(i)?l.tls=mn(i)?1:0:dn.includes(i)&&d!==2&&(l.tls=1)}return{_type:n,...l}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:"1",show:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...pn}};default:return s}}function Ci({initialValue:n,placeholder:t,onCancel:s,onSave:l}){const{t:i}=xe(),[d,r]=a.useState(()=>Kn(n)?JSON.stringify(n,null,2):""),[g,x]=a.useState(""),N=j=>{if(j.preventDefault(),!d.trim()){l({});return}try{const m=JSON.parse(d);if(typeof m!="object"||m===null)throw new Error("Must be a JSON object {} or array []");l(m)}catch(m){x(m instanceof Error?m.message:"Invalid JSON")}},h=j=>{if(r(j),!j.trim()){x("");return}try{const m=JSON.parse(j);if(typeof m!="object"||m===null)throw new Error("Must be a JSON object {} or array []");x("")}catch(m){x(m instanceof Error?m.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:N,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:i("node.jsonContent")}),g&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",g]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:g?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:d,onChange:j=>h(j.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:i("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!g,children:i("common.confirm")})]})]})}function le({label:n,required:t,actionText:s,onAction:l}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&l&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:i=>{i.preventDefault(),l()},children:s})]})}function rl({value:n,onChange:t,label:s}){const{t:l}=xe(),[i,d]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(le,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((r,g)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((x,N)=>N!==g)),style:{cursor:"pointer"},children:[r," ×"]},g)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:i,placeholder:l("node.tagPlaceholder"),onChange:r=>d(r.target.value),onKeyDown:r=>{r.key==="Enter"&&i.trim()&&(r.preventDefault(),t([...n,i.trim()]),d(""))}})]})]})}function Ts({options:n,value:t,onChange:s,label:l,actionText:i,onAction:d}){const{t:r}=xe(),[g,x]=a.useState(""),N=n.filter(j=>t.includes(j.id)),h=n.filter(j=>j.name.toLowerCase().includes(g.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(le,{label:l,actionText:i,onAction:d}),N.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:N.map(j=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(m=>m!==j.id)),children:[j.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${r("common.search")}...`,value:g,onChange:j=>x(j.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[h.map(j=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(j.id),onChange:m=>s(m.target.checked?[...t,j.id]:t.filter(T=>T!==j.id))}),e.jsx("span",{children:j.name})]},j.id)),h.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?r("node.noGroupsAvailable"):r("node.noResultsFound")})]})]})}function mt({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:l=>s(l.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function ll({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:l,onCancel:i,onSave:d}){const{t:r}=xe(),g=t?"server_name":"serverName",x=t?"allow_insecure":"allowInsecure",N=ut(l),h=Qr(l),j=s===1&&h,[m,T]=a.useState(String((n==null?void 0:n[g])??"")),[G,M]=a.useState(String((n==null?void 0:n.dest)??"")),[_,$]=a.useState(String((n==null?void 0:n.server_port)??"443")),[C,k]=a.useState(String((n==null?void 0:n.xver)??"0")),[H,F]=a.useState(String((n==null?void 0:n.private_key)??"")),[A,b]=a.useState(String((n==null?void 0:n.public_key)??"")),[P,D]=a.useState(String((n==null?void 0:n.short_id)??"")),[Q,o]=a.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[w,R]=a.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[S,B]=a.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),y=String((n==null?void 0:n.cert_mode)??"").trim(),[O,u]=a.useState(y||"auto"),[X,U]=a.useState(String((n==null?void 0:n.provider)??"")),[ne,J]=a.useState(String((n==null?void 0:n.dns_env)??"")),[ie,ke]=a.useState(String((n==null?void 0:n.cert_file)??"")),[Re,Le]=a.useState(String((n==null?void 0:n.key_file)??"")),[De,Ee]=a.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[Se,ge]=a.useState(String((n==null?void 0:n.ech)??"")),[Ce,je]=a.useState(String((n==null?void 0:n.ech_server_name)??"")),[Xe,f]=a.useState(String((n==null?void 0:n.ech_key)??"")),[se,W]=a.useState(String((n==null?void 0:n.ech_config)??"")),[be,fe]=a.useState(()=>{const ae=n==null?void 0:n[x];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),me=Pt(n==null?void 0:n.auto_cert),qe=al(n==null?void 0:n.auto_cert),Ge=ae=>{if(ae.preventDefault(),N&&s===0){d({});return}const pt=N?gt(n,s):Pt(n),ue=N?{...pt,[g]:m,fingerprint:Q}:{...n??{},[g]:m,fingerprint:Q},st=w.trim(),ct=S.trim();if(st?ue.pinnedPeerCertSha256=st:delete ue.pinnedPeerCertSha256,delete ue.pinned_peer_cert_sha256,ct?ue.verifyPeerCertByName=ct:delete ue.verifyPeerCertByName,delete ue.verify_peer_cert_by_name,N&&s!==1?(delete ue.allow_insecure,delete ue.allowInsecure):ue[x]=t?be?1:0:be,s===2&&(ue.dest=G,ue.server_port=_,ue.xver=Number(C)||0,ue.private_key=H,ue.public_key=A,ue.short_id=P,ue.ech=Se,ue.ech_server_name=Ce,ue.ech_key=Xe,ue.ech_config=se),j){ue.cert_mode=O;const tt=n==null?void 0:n.auto_cert;tt&&typeof tt=="object"&&(ue.auto_cert=tt),O==="none"?(delete ue.provider,delete ue.dns_env,delete ue.cert_file,delete ue.key_file):(X.trim()?ue.provider=X:delete ue.provider,ne.trim()?ue.dns_env=ne:delete ue.dns_env,ie.trim()?ue.cert_file=ie:delete ue.cert_file,Re.trim()?ue.key_file=Re:delete ue.key_file),ue.reject_unknown_sni=De?"1":"0"}d(N?gt(ue,s):ue)};return e.jsxs("form",{onSubmit:Ge,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:r("node.sni")}),e.jsx("input",{className:"config-input",value:m,onChange:ae=>T(ae.target.value),placeholder:r(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.dest")}),e.jsx("input",{className:"config-input",value:G,onChange:ae=>M(ae.target.value),placeholder:r("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.servicePort")}),e.jsx("input",{className:"config-input",value:_,onChange:ae=>$(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:C,onChange:ae=>k(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.privateKey")}),e.jsx("input",{className:"config-input",value:H,onChange:ae=>F(ae.target.value),placeholder:r("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.publicKey")}),e.jsx("input",{className:"config-input",value:A,onChange:ae=>b(ae.target.value),placeholder:r("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.shortId")}),e.jsx("input",{className:"config-input",value:P,onChange:ae=>D(ae.target.value),placeholder:r("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.fingerprint")}),e.jsx("select",{className:"config-input",value:Q,onChange:ae=>o(ae.target.value),children:Hr.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:w,onChange:ae=>R(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:S,onChange:ae=>B(ae.target.value),placeholder:"example.com"})]})]}),j?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.certMode")}),e.jsxs("select",{className:"config-input",value:O,onChange:ae=>u(ae.target.value),children:[e.jsx("option",{value:"auto",children:r("node.certModeAuto")}),e.jsx("option",{value:"self",children:r("node.certModeSelf")}),e.jsx("option",{value:"http",children:r("node.certModeHttp")}),e.jsx("option",{value:"dns",children:r("node.certModeDns")}),e.jsx("option",{value:"file",children:r("node.certModeFile")}),e.jsx("option",{value:"none",children:r("node.certModeNone")})]})]}),O!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${qe.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:r(qe.labelKey)}),Me(me.updated_at)?e.jsx("span",{className:"mono",children:Me(me.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:r(qe.detailKey)}),Me(me.target)||Me(me.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[Me(me.target)?`${r("node.autoCertTarget")}: ${Me(me.target)}`:"",Me(me.target)&&Me(me.source)?" · ":"",Me(me.source)?`${r("node.autoCertSource")}: ${Me(me.source)}`:""]}):null,Me(me.public_key_sha256)||Me(me.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:Me(me.public_key_sha256)?`${r("node.autoCertPublicKeySha")}: ${Me(me.public_key_sha256)}`:`${r("node.autoCertSha")}: ${Me(me.sha256_hex)}`}):null,Me(me.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:Me(me.error)}):null]}):null,O==="dns"||O==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:X,onChange:ae=>U(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:ne,onChange:ae=>J(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,O!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.certFile")}),e.jsx("input",{className:"config-input",value:ie,onChange:ae=>ke(ae.target.value),placeholder:r("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.keyFile")}),e.jsx("input",{className:"config-input",value:Re,onChange:ae=>Le(ae.target.value),placeholder:r("node.autoGenHelp")})]})]}):null,e.jsx(mt,{label:r("node.rejectUnknownSni"),checked:De,onChange:Ee})]}):null,!N||N&&s===1?e.jsx(mt,{label:r("node.allowInsecure"),checked:be,onChange:fe}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.ech")}),e.jsxs("select",{className:"config-input",value:Se,onChange:ae=>ge(ae.target.value),children:[e.jsx("option",{value:"",children:r("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:r("node.echCustom")})]})]}),Se==="cloudflare"?e.jsx("div",{className:"config-warning",children:r("node.echCloudflareHelp")}):null,Se==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.echServerName")}),e.jsx("input",{className:"config-input",value:Ce,onChange:ae=>je(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.echKey")}),e.jsx("input",{className:"config-input",value:Xe,onChange:ae=>f(ae.target.value),placeholder:r("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:r("node.echConfig")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>W(ae.target.value),placeholder:r("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:r("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:r("common.confirm")})]})]})}function cl({draft:n,set:t,groups:s,routes:l,nodes:i,onOpenJson:d,onAddGroup:r,onOpenTransportConfig:g}){const{t:x}=xe(),N=String(n._type),h=ut(N),j=ye(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:x("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"name"),onChange:m=>t("name",m.target.value),placeholder:x("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:ye(n,"rate","1"),onChange:m=>t("rate",m.target.value)})]})]}),e.jsx(rl,{value:n.tags??[],onChange:m=>t("tags",m),label:x("node.tags")}),e.jsx(Ts,{options:s.map(m=>({id:m.id,name:m.name})),value:n.group_id??[],onChange:m=>t("group_id",m),label:x("node.permissionGroups"),actionText:x("node.addGroup"),onAction:r}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"host"),onChange:m=>t("host",m.target.value),placeholder:x("node.addressPlaceholder")})]}),h?e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.listenIp")}),e.jsx("input",{className:"config-input",value:ye(n,"listen_ip"),onChange:m=>t("listen_ip",m.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(N)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?x("node.editConfig"):void 0,onAction:()=>{const m=ws(N);d(x("node.connectionSecurityConfig"),m)}}),e.jsxs("select",{className:"config-input",value:ye(n,"tls","0"),onChange:m=>{const T=Number(m.target.value);t("tls",T);const G=ws(N);T!==0&&!n[G]&&t(G,{})},children:[e.jsx("option",{value:"0",children:x("node.none")}),e.jsx("option",{value:"1",children:x("node.useTls")}),N!=="vmess"&&e.jsx("option",{value:"2",children:x("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(N)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.sni"),actionText:x("node.editConfig"),onAction:()=>d(x("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:ye(n,"server_name"),onChange:m=>t("server_name",m.target.value),placeholder:x("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"port"),onChange:m=>t("port",m.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"server_port"),onChange:m=>t("server_port",m.target.value),placeholder:"443"})]})]}),h?e.jsx(gl,{draft:n,set:t,onOpenJson:d,onOpenTransportConfig:g,onOpenSecurityConfig:()=>d(x("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(N)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:x("node.transportProtocol"),required:!0,actionText:x("node.editConfig"),onAction:g}),e.jsxs("select",{className:"config-input",value:j,onChange:m=>{t("network",m.target.value);const T=N==="vmess"?"networkSettings":"network_settings";n[T]||t(T,{})},children:[N==="vmess"&&Fr.map(m=>e.jsx("option",{value:m,children:m},m)),N==="trojan"&&ji.map(m=>e.jsx("option",{value:m,children:m},m)),N==="vless"&&Ar.map(m=>e.jsx("option",{value:m,children:m},m))]})]}):null,N==="trojan"&&e.jsx(pl,{draft:n,set:t}),N==="shadowsocks"&&e.jsx(ul,{draft:n,set:t,onOpenJson:d}),N==="hysteria"&&e.jsx(ml,{draft:n,set:t}),N==="tuic"&&e.jsx(hl,{draft:n,set:t}),N==="vless"&&e.jsx(xl,{draft:n,set:t,onOpenJson:d}),N==="anytls"&&e.jsx(bl,{draft:n,set:t,onOpenJson:d}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:x("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:m=>t("parent_id",m.target.value?Number(m.target.value):null),children:[e.jsx("option",{value:"",children:x("node.none")}),i.filter(m=>m.id!==n.id&&!m.parent_id).map(m=>e.jsx("option",{value:m.id,children:m.name},m.id))]})]}),e.jsx(Ts,{options:l.map(m=>({id:m.id,name:m.remarks})),value:n.route_id??[],onChange:m=>t("route_id",m),label:x("node.routingGroups")})]})]})}function dl({draft:n,set:t,onCancel:s,onSave:l}){const i=String(n._type),d=String(n.network??"tcp"),r=Yr(i),g=n[r],x=Kn(g)?Pt(g):{},N=Jr(i,d),h=Kn(N)?JSON.stringify(N,null,2):void 0;return e.jsx(Ci,{initialValue:x,placeholder:h,onCancel:s,onSave:j=>{t(r,j),l()}})}function pl({draft:n,set:t}){const{t:s}=xe();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(mt,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:l=>t("allow_insecure",l?1:0)})]})}function ul({draft:n,set:t,onOpenJson:s}){const{t:l}=xe(),i=Kr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:d=>t("cipher",d.target.value),children:wi.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:l("node.obfs"),actionText:n.obfs==="http"?l("node.editConfig"):void 0,onAction:()=>s(l("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:d=>t("obfs",d.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(i.host??""),onChange:d=>t("obfs_settings",{...i,host:d.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(i.path??""),onChange:d=>t("obfs_settings",{...i,path:d.target.value}),placeholder:"/"})]})]})]})}function ml({draft:n,set:t}){const{t:s}=xe();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:ye(n,"version","2"),onChange:l=>t("version",Number(l.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:l=>t("up_mbps",Number(l.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:l=>t("down_mbps",Number(l.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs"),onChange:l=>t("obfs",l.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:l=>t("obfs_password",l.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(mt,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)})]})}function hl({draft:n,set:t}){const{t:s}=xe();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:l=>t("udp_relay_mode",l.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:l=>t("congestion_control",l.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(mt,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)}),e.jsx(mt,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:l=>t("disable_sni",l?1:0)}),e.jsx(mt,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:l=>t("zero_rtt_handshake",l?1:0)})]})}function xl({draft:n,set:t,onOpenJson:s}){const{t:l}=xe();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:i=>t("flow",i.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.encryption"),actionText:ye(n,"encryption")?l("node.editConfig"):void 0,onAction:()=>s(l("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:i=>t("encryption",i.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function bl({draft:n,set:t,onOpenJson:s}){const{t:l}=xe();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:l("node.paddingScheme"),actionText:l("node.editConfig"),onAction:()=>s(l("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(mt,{label:l("node.allowInsecure"),checked:n.insecure===1,onChange:i=>t("insecure",i?1:0)})]})}function gl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:l,onOpenSecurityConfig:i}){const{t:d}=xe(),r=ye(n,"protocol"),g=ks(r),x={...pn,...Pt(n.warp_settings)},N=ns(x.enable),h=(m,T)=>{t("warp_settings",xn({...x,[m]:T}))},j=m=>{if(t("protocol",m),!m){t("tls",0),t("network","tcp");return}dn.includes(m)?(t("tls",1),n.tls_settings||t("tls_settings",{})):m==="shadowsocks"?t("tls",0):m==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const T=ks(m);(T.length===0||!T.includes(ye(n,"network","tcp")))&&t("network","tcp"),m!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),m!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),m!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:r,onChange:m=>j(m.target.value),children:[e.jsx("option",{value:"",children:d("node.selectNodeProtocol")}),Or.map(m=>e.jsx("option",{value:m,children:m},m))]})]}),r?e.jsxs(e.Fragment,{children:[mn(r)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:d("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?d("node.editConfig"):void 0,onAction:i}),e.jsxs("select",{className:"config-input",value:ye(n,"tls",dn.includes(r)?"1":"0"),onChange:m=>{const T=Number(m.target.value);t("tls",T),T!==0&&!n.tls_settings&&t("tls_settings",{})},children:[Vr(r)?e.jsx("option",{value:"0",children:d("node.none")}):null,e.jsx("option",{value:"1",children:d("node.useTls")}),hn(r)?e.jsx("option",{value:"2",children:d("node.reality")}):null]})]}):null,el(r)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:d("node.transportProtocol"),required:!0,actionText:d("node.editConfig"),onAction:l}),e.jsx("select",{className:"config-input",value:g.includes(ye(n,"network","tcp"))?ye(n,"network","tcp"):"tcp",onChange:m=>{t("network",m.target.value),n.network_settings||t("network_settings",{})},children:g.map(m=>e.jsx("option",{value:m,children:m},m))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:d("node.warpOutbound")}),e.jsx(mt,{label:d("node.warpEnable"),checked:N,onChange:m=>t("warp_settings",xn({...x,enable:m}))}),N?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(x.mode??"auto"),onChange:m=>h("mode",m.target.value),children:[e.jsx("option",{value:"auto",children:d("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:d("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(x.fail_policy??"direct"),onChange:m=>h("fail_policy",m.target.value),children:[e.jsx("option",{value:"direct",children:d("node.warpFailDirect")}),e.jsx("option",{value:"block",children:d("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(x.mtu??1280),onChange:m=>h("mtu",Number(m.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(x.domain_strategy??"ForceIPv4v6"),onChange:m=>h("domain_strategy",m.target.value),children:ki.map(m=>e.jsx("option",{value:m,children:m},m))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:d("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(x.private_key??""),onChange:m=>h("private_key",m.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(x.peer_public_key??""),onChange:m=>h("peer_public_key",m.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(x.endpoint??"engage.cloudflareclient.com:2408"),onChange:m=>h("endpoint",m.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:Ns(x.addresses),onChange:m=>h("addresses",m.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.warpReserved")}),e.jsx("input",{className:"config-input",value:Ns(x.reserved),onChange:m=>h("reserved",m.target.value)})]})]})]}):null,r==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.encryption"),actionText:ye(n,"encryption")?d("node.editConfig"):void 0,onAction:()=>s(d("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:m=>t("encryption",m.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:m=>t("flow",m.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),r==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:d("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:m=>t("cipher",m.target.value),children:wi.map(m=>e.jsx("option",{value:m,children:m},m))})]}),r==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:m=>t("up_mbps",Number(m.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:m=>t("down_mbps",Number(m.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:m=>t("obfs",m.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),ye(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:m=>t("obfs_password",m.target.value),placeholder:d("node.autoGenHelp")})]}):null]})]}),r==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:m=>t("udp_relay_mode",m.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(le,{label:d("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:m=>t("congestion_control",m.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(mt,{label:d("node.disableSni"),checked:n.disable_sni===1,onChange:m=>t("disable_sni",m?1:0)}),e.jsx(mt,{label:d("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:m=>t("zero_rtt_handshake",m?1:0)})]}),r==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(le,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>s(d("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Ps={vmess:fa,vless:Ca,trojan:Rn,shadowsocks:Zn,hysteria:ha,tuic:Zi,anytls:Jt,v2node:cs,zicnode:cs},fl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},yl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function _t(n){return fl[n]??yl}function vl({draft:n,config:t,onCopy:s,t:l}){const i=Number(n.id??0),d=i>0?ol(i,t):"",r=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:l("node.quickInstallTitle")}),e.jsx("span",{children:l("node.quickInstallHelp")})]}),i>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:d}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(d),children:[e.jsx(Wt,{size:15}),l("node.copyInstallCommand")]}),r?e.jsx("span",{className:"node-install-warning",children:l("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:l("node.installSaveFirst")})]})}function jl(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState([]),[r,g]=a.useState([]),[x,N]=a.useState(null),[h,j]=a.useState(null),[m,T]=a.useState(!0),[G,M]=a.useState(!1),[_,$]=a.useState(""),[C,k]=a.useState(""),[H,F]=a.useState(1),[A,b]=a.useState(()=>Br()),[P,D]=a.useState(!1),[Q,o]=a.useState({}),[w,R]=a.useState({apiHost:ts,apiKey:""}),[S,B]=a.useState(!1),[y,O]=a.useState(""),[u,X]=a.useState(null),[U,ne]=a.useState(null),[J,ie]=a.useState(null),ke=(v,I)=>{v.dataTransfer.effectAllowed="move",ne(I)},Re=(v,I)=>{if(v.preventDefault(),U===null||U===I)return;const E=[...s],ce=E[U];E.splice(U,1),E.splice(I,0,ce),ne(I),l(E)},Le=()=>{ne(null)},De=(v,I)=>{P&&ie(I)},Ee=v=>{if(!P||J===null)return;v.cancelable&&v.preventDefault();const I=v.touches[0],E=document.elementFromPoint(I.clientX,I.clientY);if(!E)return;const ce=E.closest(".mobile-node-card");if(!ce)return;const ve=ce.getAttribute("data-index");if(ve===null)return;const _e=Number(ve);if(_e!==J&&_e>=0&&_e<s.length){const c=[...s],L=c[J];c.splice(J,1),c.splice(_e,0,L),ie(_e),l(c)}},Se=()=>{ie(null)};a.useEffect(()=>{F(1)},[y,A]),a.useEffect(()=>{try{window.localStorage.setItem(Ni,String(A))}catch{}},[A]);const ge=s.filter(v=>{const I=y.toLowerCase().trim();return I?v.name.toLowerCase().includes(I)||v.host.toLowerCase().includes(I)||String(v.id).includes(I)||v.type.toLowerCase().includes(I):!0}),Ce=Math.ceil(ge.length/A),je=ge.slice((H-1)*A,H*A);function Xe(v,I){return I<=7?Array.from({length:I},(E,ce)=>ce+1):v<=4?[1,2,3,4,5,"...",I]:v>=I-3?[1,"...",I-4,I-3,I-2,I-1,I]:[1,"...",v-1,v,v+1,"...",I]}const f=Xe(H,Ce),se=async()=>{var v,I;M(!0),$(""),k("");try{const E={};s.forEach((ce,ve)=>{E[ce.type]||(E[ce.type]={}),E[ce.type][String(ce.id)]=ve+1}),await sr(E),(v=window.showToast)==null||v.call(window,t("node.saveSortSuccess"),"success"),D(!1),await ee()}catch(E){$(E instanceof Error?E.message:t("node.saveSortFailed")),(I=window.showToast)==null||I.call(window,E instanceof Error?E.message:t("node.saveSortFailed"),"error")}finally{M(!1)}},W=async()=>{D(!1),await oe()},be=()=>ge.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:H===1,onClick:()=>F(v=>Math.max(v-1,1)),children:"<"}),f.map((v,I)=>v==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${I}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${H===v?"active":""}`,onClick:()=>F(Number(v)),children:v},`page-${v}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:H===Ce||Ce===0,onClick:()=>F(v=>Math.min(v+1,Ce)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:A,onChange:v=>{const I=Number(v.target.value);_i(I)&&b(I)},children:un.map(v=>e.jsxs("option",{value:v,children:[v," / ",t("common.perPage")]},v))})})]}),[fe,me]=a.useState(null),[qe,Ge]=a.useState(!1),[ae,pt]=a.useState(""),[ue,st]=a.useState(!1),[ct,tt]=a.useState(!1);async function z(v){var E,ce;v.preventDefault();const I=ae.trim();if(!(!I||!x)){st(!0),$(""),k("");try{await Xn({name:I});const ve=await Ot();d(ve);const _e=ve.filter(c=>c.name===I).sort((c,L)=>L.id-c.id)[0];if(_e){const c=x.group_id??[];c.includes(_e.id)||ht("group_id",[...c,_e.id])}pt(""),Ge(!1),(E=window.showToast)==null||E.call(window,t("node.groupCreateSuccess"),"success")}catch(ve){$(ve instanceof Error?ve.message:t("node.groupCreateFailed")),(ce=window.showToast)==null||ce.call(window,ve instanceof Error?ve.message:t("node.groupCreateFailed"),"error")}finally{st(!1)}}}const de=(v,I)=>{if(!x)return;let E=x[I];if(typeof E=="string"&&E.trim())try{E=JSON.parse(E)}catch{}["tlsSettings","tls_settings"].includes(I)&&ut(String(x._type))&&(E=gt(E,Number(x.tls??0))),me({title:v,key:I,value:E&&typeof E=="object"?E:{}})},oe=a.useCallback(async()=>{var v,I,E,ce,ve;T(!0),$("");try{const[_e,c,L,q]=await Promise.all([xs(),Ot(),mi(),di()]);l(_e.data),d(c),g(L);const re=_s((v=q.site)==null?void 0:v.app_url);R({apiHost:_s((I=q.server)==null?void 0:I.server_api_url,re),apiKey:Me((E=q.server)==null?void 0:E.server_token)}),B(ns(((ce=q.subscribe)==null?void 0:ce.device_hwid_available)??((ve=q.subscribe)==null?void 0:ve.device_hwid_enable)))}catch(_e){$(_e instanceof Error?_e.message:t("knowledge.loadFailed"))}finally{T(!1)}},[]),ee=a.useCallback(async()=>{try{const v=await xs();l(v.data)}catch(v){console.error("Refresh nodes failed",v)}},[]);async function we(v){var E;const I=await Tt(v);(E=window.showToast)==null||E.call(window,t(I?"node.installCopied":"common.copyFailed"),I?"success":"error")}a.useEffect(()=>{if(!He()){n.replace("/login");return}oe()},[oe,n]);function he(v){N(zs(v)),j(null),$(""),k("")}function ze(v){N(zs(v.type,v)),$(""),k("")}function Te(v){!S||Number(v.online??0)<=0||n.push(`/device?node_type=${encodeURIComponent(v.type)}&node_id=${encodeURIComponent(String(v.id))}`)}function Ye(v,I){const E=Number(v.online??0),ce=S&&E>0,ve=`${I==="mobile"?"mobile-badge-pill":"online-badge"}${ce?" online-badge-link":""}`,_e=I==="mobile"?12:13,c={...I==="mobile"?{marginRight:4}:{},color:E>0?"#10b981":"var(--muted)",opacity:E>0?1:.6},L=e.jsxs(e.Fragment,{children:[e.jsx(ri,{size:_e,style:c}),E]});return ce?e.jsx("button",{className:ve,type:"button",title:t("node.viewOnlineDevices"),onClick:()=>Te(v),children:L}):e.jsx("span",{className:ve,children:L})}async function it(v){var _e,c,L;if(v.preventDefault(),!x)return;M(!0),$(""),k("");const I=String(x._type),E={...x};if(ut(I)&&!Me(E.protocol)){$(t("node.protocolRequired")),(_e=window.showToast)==null||_e.call(window,t("node.protocolRequired"),"error"),M(!1);return}for(const q of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete E[q];if(E.padding_scheme!==void 0&&E.padding_scheme!==null&&typeof E.padding_scheme!="string"&&(E.padding_scheme=JSON.stringify(E.padding_scheme)),E.padding_scheme)try{const q=JSON.parse(String(E.padding_scheme));if(typeof q!="object"||q===null)throw new Error("Invalid JSON array or object")}catch(q){$("Invalid Padding Scheme configuration: "+(q instanceof Error?q.message:"JSON error")),M(!1);return}const ce=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const q of ce)(E[q]===""||E[q]===null||E[q]===void 0)&&delete E[q];if(ut(I)){const q=String(E.protocol??""),re=Number(E.tls??0);E.warp_settings=xn(E.warp_settings),mn(q)?dn.includes(q)&&re!==2||!hn(q)&&re===2?(E.tls=1,E.tls_settings=gt(E.tls_settings,1)):E.tls_settings=gt(E.tls_settings,re):(E.tls=0,E.tls_settings={})}const ve=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const q of ve){const re=E[q];(re==null||typeof re=="object"&&Object.keys(re).length===0)&&delete E[q]}E.port!==void 0&&(E.port=String(E.port).trim()),E.server_port!==void 0&&(E.server_port=Number(E.server_port)),E.tls!==void 0&&(E.tls=Number(E.tls)),E.rate!==void 0&&(E.rate=Number(E.rate));try{await Vo(I,E),N(null),(c=window.showToast)==null||c.call(window,t("node.saveSuccess"),"success"),await ee()}catch(q){$(q instanceof Error?q.message:t("node.saveFailed")),(L=window.showToast)==null||L.call(window,q instanceof Error?q.message:t("node.saveFailed"),"error")}finally{M(!1)}}async function Be(v){const I=[...s];l(E=>E.map(ce=>ce.id===v.id&&ce.type===v.type?{...ce,show:v.show?0:1}:ce));try{await tr(v.type,v.id,v.show?0:1),await ee()}catch(E){l(I),$(E instanceof Error?E.message:t("node.updateFailed"))}}async function wt(v){var I,E;try{await nr(v.type,v.id),(I=window.showToast)==null||I.call(window,t("node.copySuccess"),"success"),await ee()}catch(ce){$(ce instanceof Error?ce.message:t("node.copyFailed")),(E=window.showToast)==null||E.call(window,ce instanceof Error?ce.message:t("node.copyFailed"),"error")}}async function nt(v){var I;(I=window.showConfirm)==null||I.call(window,{message:t("node.deleteConfirm",{name:v.name}),onConfirm:async()=>{var ce,ve;const E=[...s];l(_e=>_e.filter(c=>!(c.id===v.id&&c.type===v.type))),$("");try{await er(v.type,v.id),(ce=window.showToast)==null||ce.call(window,t("node.deleteSuccess"),"success"),await ee()}catch(_e){l(E),$(_e instanceof Error?_e.message:t("node.deleteFailed")),(ve=window.showToast)==null||ve.call(window,_e instanceof Error?_e.message:t("node.deleteFailed"),"error")}}})}const ht=(v,I)=>N(E=>{if(!E)return null;const ce={...E,[v]:I};if(!ut(String(ce._type)))return ce;if(v==="tls_settings"&&(ce.tls_settings=gt(I,Number(ce.tls??0))),v==="tls"&&(ce.tls_settings=gt(ce.tls_settings,Number(I))),v==="warp_settings"&&(ce.warp_settings=xn(I)),v==="protocol"){const ve=String(I);mn(ve)?!hn(ve)&&Number(ce.tls??0)===2?(ce.tls=1,ce.tls_settings=gt(ce.tls_settings,1)):ce.tls_settings=gt(ce.tls_settings,Number(ce.tls??0)):(ce.tls=0,ce.tls_settings={})}return ce}),Lt=x?String(x._type):"",Et=tl(Lt);return e.jsxs(Ke,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(h?null:"show"),title:t("node.createNode"),children:e.jsx(rt,{size:18})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Wn.map(v=>{const I=_t(v.value),E=Ps[v.value]||ln;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{he(v.value),j(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:I==null?void 0:I.bg,backgroundColor:I==null?void 0:I.rowBg},children:e.jsx(E,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(I==null?void 0:I.bg)??"var(--surface-soft)",color:(I==null?void 0:I.text)??"#ffffff"},children:v.label})]},v.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:y,onChange:v=>O(v.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${P?"success-btn":""}`,type:"button",onClick:P?se:()=>D(!0),disabled:G,children:t(P?G?"node.saving":"node.saveOrder":"node.editSortOrder")}),P&&e.jsx("button",{className:"ghost-button",type:"button",onClick:W,children:t("common.cancel")})]})]}),_?e.jsx("div",{className:"form-error",children:_}):null,C?e.jsx("div",{className:"form-success",children:C}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{className:"mobile-hide",children:t("node.colPort")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t(P?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[je.map(v=>{const I=s.findIndex(E=>E.id===v.id&&E.type===v.type);return e.jsxs("tr",{draggable:P,onDragStart:E=>ke(E,I),onDragOver:E=>Re(E,I),onDragEnd:Le,className:U===I?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:_t(v.type).bg,color:_t(v.type).text,border:`1px solid ${_t(v.type).border}`},children:v.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${v.show?"active":""}`,type:"button",onClick:()=>void Be(v),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{className:`status-indicator-dot status-${v.available_status??0}`,title:v.available_status===2?t("node.statusNormal"):v.available_status===1?t("node.statusError"):t("node.statusInactive")}),e.jsx("strong",{children:v.name})]})}),e.jsx("td",{children:Ye(v,"desktop")}),e.jsx("td",{className:"mobile-hide",children:e.jsx("span",{className:"mono",children:v.host})}),e.jsx("td",{className:"mobile-hide",children:String(v.server_port)}),e.jsxs("td",{className:"mobile-hide",children:[v.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const E=v.group_id??[],ce=Q[`${v.type}-${v.id}`],ve=E.map(L=>{const q=i.find(re=>Number(re.id)===Number(L));return e.jsx("span",{className:"tag",children:(q==null?void 0:q.name)??`#${L}`},L)});if(E.length<=3||ce)return e.jsxs(e.Fragment,{children:[ve,E.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>o(L=>({...L,[`${v.type}-${v.id}`]:!1})),children:t("node.collapse")})]});const _e=ve.slice(0,3),c=E.length-3;return e.jsxs(e.Fragment,{children:[_e,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>o(L=>({...L,[`${v.type}-${v.id}`]:!0})),children:["+",c,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:E.length})}),ve]})]})]})})()})}),e.jsx("td",{children:P?e.jsx("div",{className:"drag-handle",title:t("node.dragDropHelp"),children:e.jsx(Bt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>X((u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type?null:{id:v.id,type:v.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>X(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ze(v),X(null)},children:[e.jsx(We,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{wt(v),X(null)},children:[e.jsx(Wt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{nt(v),X(null)},children:[e.jsx(Qe,{size:14})," ",t("common.delete")]})]})]})]})})]},`${v.type}-${v.id}`)}),!m&&ge.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),be()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(h?null:"show"),title:t("node.createNode"),children:e.jsx(rt,{size:20})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Wn.map(v=>{const I=_t(v.value),E=Ps[v.value]||ln;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{he(v.value),j(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:I==null?void 0:I.bg,backgroundColor:I==null?void 0:I.rowBg},children:e.jsx(E,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(I==null?void 0:I.bg)??"var(--surface-soft)",color:(I==null?void 0:I.text)??"#ffffff"},children:v.label})]},v.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:y,onChange:v=>O(v.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${P?"active":""}`,type:"button",onClick:()=>D(!P),title:t("node.editSortOrder"),children:e.jsx(Bt,{size:20})})]}),P&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void se(),disabled:G,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(G?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[je.map(v=>{const I=s.findIndex(E=>E.id===v.id&&E.type===v.type);return e.jsxs("div",{className:`mobile-node-card ${U===I||J===I?"dragging":""}`,draggable:P,onDragStart:E=>ke(E,I),onDragOver:E=>Re(E,I),onDragEnd:Le,onTouchStart:E=>De(E,I),onTouchMove:Ee,onTouchEnd:Se,"data-index":I,style:P?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",children:[e.jsx("span",{className:`status-indicator-dot status-${v.available_status??0}`,title:v.available_status===2?t("node.statusNormal"):v.available_status===1?t("node.statusError"):t("node.statusInactive")}),e.jsx("span",{className:"mobile-node-name",children:v.name})]}),e.jsx("div",{className:"card-header-right",children:P?e.jsx("div",{className:"drag-handle",title:t("node.dragDropHelp"),children:e.jsx(Bt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`admin-switch ${v.show===1?"active":""}`,onClick:()=>void Be(v),children:e.jsx("span",{className:"admin-switch-thumb"})}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>X((u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type?null:{id:v.id,type:v.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(u==null?void 0:u.id)===v.id&&(u==null?void 0:u.type)===v.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>X(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ze(v),X(null)},children:[e.jsx(We,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{wt(v),X(null)},children:[e.jsx(Wt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{nt(v),X(null)},children:[e.jsx(Qe,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsx("div",{className:"card-middle-row",children:e.jsxs("span",{className:"mobile-node-address",children:[v.host,":",v.port||v.server_port]})}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:_t(v.type).bg,color:_t(v.type).text,border:`1px solid ${_t(v.type).border}`},children:v.id}),Ye(v,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[v.rate," x"]})]})]},`${v.type}-${v.id}`)}),!m&&ge.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),be()]}),x!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:x.id?t("node.editNodeTitle",{type:Et}):t("node.createNodeTitle",{type:Et})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:Et})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:it,children:[e.jsx(cl,{draft:x,set:ht,groups:i,routes:r,nodes:s,onOpenJson:de,onAddGroup:()=>Ge(!0),onOpenTransportConfig:()=>tt(!0)}),ut(Lt)?e.jsx(vl,{draft:x,config:w,onCopy:v=>void we(v),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"node.saving":"common.save")]})]})]})]})}),fe!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:fe.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(fe.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>me(null),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(fe.key)?e.jsx(ll,{initialValue:fe.value,isSnakeCase:fe.key==="tls_settings",tlsMode:Xr(x),nodeType:String((x==null?void 0:x._type)??""),onCancel:()=>me(null),onSave:v=>{ht(fe.key,v),me(null)}}):e.jsx(Ci,{initialValue:fe.value,onCancel:()=>me(null),onSave:v=>{ht(fe.key,v),me(null)}})})]})}),qe&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ge(!1),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{onSubmit:z,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:ae,onChange:v=>pt(v.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ge(!1),disabled:ue,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ue||!ae.trim(),children:t(ue?"node.saving":"common.confirm")})]})]})]})}),ct&&x!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(x.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>tt(!1),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(dl,{draft:x,set:ht,onCancel:()=>tt(!1),onSave:()=>tt(!1)})})]})})]})}function wl(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(null),[r,g]=a.useState(!0),[x,N]=a.useState(!1),[h,j]=a.useState(""),m=a.useCallback(async()=>{g(!0),j("");try{l(await Ot())}catch(_){j(_ instanceof Error?_.message:t("serverGroup.loadFailed"))}finally{g(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}m()},[m,n]);function T(_){d({id:_==null?void 0:_.id,name:(_==null?void 0:_.name)??""}),j("")}async function G(_){var $;if(_.preventDefault(),!!i){N(!0),j("");try{await Xn(i),d(null),($=window.showToast)==null||$.call(window,t("serverGroup.saveSuccess"),"success"),await m()}catch(C){j(C instanceof Error?C.message:t("serverGroup.saveFailed"))}finally{N(!1)}}}async function M(_){var $;($=window.showConfirm)==null||$.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var C,k;j("");try{await no(_),(C=window.showToast)==null||C.call(window,t("serverGroup.deleteSuccess"),"success"),await m()}catch(H){j(H instanceof Error?H.message:t("serverGroup.deleteFailed")),(k=window.showToast)==null||k.call(window,H instanceof Error?H.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(Ke,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:m,disabled:r,children:[e.jsx(Oe,{size:16}),t(r?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>T(),children:[e.jsx(rt,{size:16}),t("serverGroup.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,r&&s.length===0?e.jsx($e,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:_.id}),e.jsx("td",{children:e.jsx("strong",{children:_.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(cn,{size:14}),_.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(ln,{size:14}),_.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>T(_),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void M(_.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},_.id)),!r&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:i.name,onChange:_=>d({...i,name:_.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function kl(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function Nl(n){var t;return((t=ui.find(s=>s.value===n))==null?void 0:t.label)??n}function _l(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(null),[r,g]=a.useState(!0),[x,N]=a.useState(!1),[h,j]=a.useState(""),m=a.useCallback(async()=>{g(!0),j("");try{l(await mi())}catch(_){j(_ instanceof Error?_.message:t("serverRoute.loadFailed"))}finally{g(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}m()},[m,n]);function T(_){d(kl(_)),j("")}async function G(_){var C;if(_.preventDefault(),!i)return;N(!0),j("");const $=i.action==="default_out"?[]:i.match.split(`
`).map(k=>k.trim()).filter(Boolean);try{await so({id:i.id,remarks:i.remarks,match:$,action:i.action,action_value:i.action_value||null}),d(null),(C=window.showToast)==null||C.call(window,t("serverRoute.saveSuccess"),"success"),await m()}catch(k){j(k instanceof Error?k.message:t("serverRoute.saveFailed"))}finally{N(!1)}}async function M(_){var $;($=window.showConfirm)==null||$.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var C,k;j("");try{await io(_),(C=window.showToast)==null||C.call(window,t("serverRoute.deleteSuccess"),"success"),await m()}catch(H){j(H instanceof Error?H.message:t("serverRoute.deleteFailed")),(k=window.showToast)==null||k.call(window,H instanceof Error?H.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(Ke,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:m,disabled:r,children:[e.jsx(Oe,{size:16}),t(r?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>T(),children:[e.jsx(rt,{size:16}),t("serverRoute.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,r&&s.length===0?e.jsx($e,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:_.id}),e.jsx("td",{children:e.jsx("strong",{children:_.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(_.match)?_.match:[]).slice(0,3).map(($,C)=>e.jsx("span",{className:"tag",children:$},C)),Array.isArray(_.match)&&_.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",_.match.length-3]}):null,!Array.isArray(_.match)||_.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:Nl(_.action)})}),e.jsx("td",{children:_.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>T(_),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void M(_.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},_.id)),!r&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:i.remarks,onChange:_=>d({...i,remarks:_.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:i.action,onChange:_=>d({...i,action:_.target.value}),children:ui.map(_=>e.jsx("option",{value:_.value,children:_.label},_.value))})]}),i.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:i.match,onChange:_=>d({...i,match:_.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:i.action_value,onChange:_=>d({...i,action_value:_.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Sl(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Cl(n){const t=l=>l===""?null:Math.round(Number(l)*100),s=l=>l===""?null:Number(l);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function et(n){return n==null?"—":Ze(n)}function zl(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function Tl(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState([]),[r,g]=a.useState(null),[x,N]=a.useState(!0),[h,j]=a.useState(!1),[m,T]=a.useState(""),[G,M]=a.useState(""),[_,$]=a.useState(!1),[C,k]=a.useState(""),[H,F]=a.useState(!1),[A,b]=a.useState(null),[P,D]=a.useState(null),Q=a.useRef(!1),o=a.useRef(null),w=a.useRef(!1),R=f=>f instanceof Element&&!!f.closest(".drag-handle"),S=(f,se)=>{if(f===se||f<0||se<0||f>=s.length||se>=s.length)return!1;const W=[...s],be=W[f];return W.splice(f,1),W.splice(se,0,be),l(W),o.current=W.map(fe=>fe.id),Q.current=!0,!0},B=async()=>{const f=Q.current,se=o.current??s.map(W=>W.id);if(Q.current=!1,o.current=null,w.current=!1,b(null),D(null),!!f)try{await ro(se),await J()}catch(W){T(W instanceof Error?W.message:t("plan.sortFailed")),await J()}},y=(f,se)=>{var W;if(!R(f.target)){f.preventDefault();return}f.dataTransfer.effectAllowed="move",f.dataTransfer.setData("text/plain",String(((W=s[se])==null?void 0:W.id)??se)),Q.current=!1,b(se)},O=(f,se)=>{A===null||A===se||(f.preventDefault(),S(A,se)&&b(se))},u=async()=>{await B()},X=(f,se)=>{!R(f.target)||f.touches.length!==1||(Q.current=!1,w.current=!0,D(se))},U=f=>{if(!w.current||P===null)return;f.cancelable&&f.preventDefault();const se=f.touches[0],W=document.elementFromPoint(se.clientX,se.clientY);if(!W)return;const be=W.closest("tr, [data-index]");if(!be)return;const fe=be.getAttribute("data-index");if(fe===null)return;const me=Number(fe);S(P,me)&&D(me)},ne=async()=>{!w.current&&P===null||await B()},J=a.useCallback(async()=>{N(!0),T("");try{const[f,se]=await Promise.all([$t(),Ot()]);l(f),d(se)}catch(f){T(f instanceof Error?f.message:t("plan.loadFailed"))}finally{N(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}J()},[J,n]);function ie(){g(null),$(!1),k("")}function ke(f){g(Sl(f)),$(!1),k(""),T(""),M("")}async function Re(f){var se,W;if(f.preventDefault(),!!r){j(!0),T(""),M("");try{await ao(Cl(r)),ie(),(se=window.showToast)==null||se.call(window,t("plan.saveSuccess"),"success"),await J()}catch(be){(W=window.showToast)==null||W.call(window,be instanceof Error?be.message:t("plan.saveFailed"),"error")}finally{j(!1)}}}async function Le(f,se){var W;try{await jn(f,{show:se?0:1}),await J()}catch(be){(W=window.showToast)==null||W.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function De(f,se){var W;try{await jn(f,{renew:se?0:1}),await J()}catch(be){(W=window.showToast)==null||W.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Ee(f,se){var W;try{await jn(f,{allow_subscribe_url:se?0:1}),await J()}catch(be){(W=window.showToast)==null||W.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Se(f){var se;(se=window.showConfirm)==null||se.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var W,be;T(""),M("");try{await oo(f),(W=window.showToast)==null||W.call(window,t("plan.deleteSuccess"),"success"),await J()}catch(fe){(be=window.showToast)==null||be.call(window,fe instanceof Error?fe.message:t("plan.deleteFailed"),"error")}}})}function ge(f){var se;return((se=i.find(W=>W.id===f))==null?void 0:se.name)??`#${f}`}function Ce(f){return Number(f.allow_subscribe_url??1)===1}function je(f,se){g(W=>W&&{...W,[f]:se})}async function Xe(f){var W,be;f.preventDefault();const se=C.trim();if(!(!se||!r)){F(!0),T(""),M("");try{await Xn({name:se});const fe=await Ot();d(fe);const me=fe.filter(qe=>qe.name===se).sort((qe,Ge)=>Ge.id-qe.id)[0];me&&je("group_id",String(me.id)),k(""),$(!1),(W=window.showToast)==null||W.call(window,t("node.groupCreateSuccess"),"success")}catch(fe){const me=fe instanceof Error?fe.message:t("node.groupCreateFailed");T(me),(be=window.showToast)==null||be.call(window,me,"error")}finally{F(!1)}}}return e.jsxs(Ke,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:J,disabled:x,children:[e.jsx(Oe,{size:16}),t(x?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ke(),children:[e.jsx(rt,{size:16}),t("plan.add")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,G?e.jsx("div",{className:"form-success",children:G}):null,x&&s.length===0?e.jsx($e,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((f,se)=>e.jsxs("tr",{onDragOver:W=>O(W,se),"data-index":se,className:A===se||P===se?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>y(W,se),onDragEnd:u,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Bt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:f.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${f.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Le(f.id,f.show)},title:f.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${f.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),De(f.id,f.renew)},title:f.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Ce(f)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ee(f.id,Ce(f)?1:0)},title:Ce(f)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:f.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(cn,{size:14}),f.count??0]})}),e.jsx("td",{children:ge(f.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[f.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(f.month_price)})]}),f.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(f.quarter_price)})]}),f.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(f.half_year_price)})]}),f.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(f.year_price)})]}),f.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(f.two_year_price)})]}),f.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(f.three_year_price)})]}),f.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(f.onetime_price)})]}),f.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(f.reset_price)})]})]})}),e.jsxs("td",{children:[f.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:W=>{W.stopPropagation(),ke(f)},children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:W=>{W.stopPropagation(),Se(f.id)},children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},f.id)),!x&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((f,se)=>e.jsxs("div",{className:`mobile-node-card ${A===se||P===se?"dragging":""}`,onDragOver:W=>O(W,se),"data-index":se,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>y(W,se),onDragEnd:u,onTouchStart:W=>X(W,se),onTouchMove:U,onTouchEnd:ne,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Bt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:f.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:f.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),ke(f)},children:[e.jsx(We,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),Se(f.id)},children:[e.jsx(Qe,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${f.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Le(f.id,f.show)},title:f.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${f.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),De(f.id,f.renew)},title:f.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Ce(f)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ee(f.id,Ce(f)?1:0)},title:Ce(f)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(cn,{size:12,style:{marginRight:4}}),f.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:ge(f.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[f.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[f.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(f.month_price)})]}),f.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(f.quarter_price)})]}),f.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(f.half_year_price)})]}),f.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(f.year_price)})]}),f.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(f.two_year_price)})]}),f.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(f.three_year_price)})]}),f.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(f.onetime_price)})]}),f.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(f.reset_price)})]})]})]},f.id)),!x&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),r?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:r.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:ie,children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Re,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:r.name,onChange:f=>je("name",f.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:r.content,onChange:f=>je("content",f.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>$(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:r.group_id,onChange:f=>je("group_id",f.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),i.map(f=>e.jsx("option",{value:f.id,children:f.name},f.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:r.transfer_enable,onChange:f=>je("transfer_enable",f.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:r.device_limit,onChange:f=>je("device_limit",f.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:r.speed_limit,onChange:f=>je("speed_limit",f.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:r.capacity_limit,onChange:f=>je("capacity_limit",f.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:r.reset_traffic_method,onChange:f=>je("reset_traffic_method",f.target.value),children:zl(t).map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:r.allow_subscribe_url==="1",onChange:f=>je("allow_subscribe_url",f.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.month_price,onChange:f=>je("month_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.quarter_price,onChange:f=>je("quarter_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.half_year_price,onChange:f=>je("half_year_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.year_price,onChange:f=>je("year_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.two_year_price,onChange:f=>je("two_year_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.three_year_price,onChange:f=>je("three_year_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.onetime_price,onChange:f=>je("onetime_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:r.reset_price,onChange:f=>je("reset_price",f.target.value),placeholder:"—"})]})]}),r.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:r.force_update,onChange:f=>je("force_update",String(f.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:ie,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"plan.saving":"common.save")]})]})]})]})}):null,_&&r?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>$(!1),disabled:H,children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{onSubmit:Xe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:C,onChange:f=>k(f.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>$(!1),disabled:H,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:H||!C.trim(),children:t(H?"node.saving":"common.confirm")})]})]})]})}):null]})}const Cn="模糊",$s={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Es={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Ms(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0");return`${s}/${l}/${i} ${d}:${r}`}function Ds(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),r=String(t.getMinutes()).padStart(2,"0"),g=String(t.getSeconds()).padStart(2,"0");return`${s}-${l}-${i} ${d}:${r}:${g}`}function Ls(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function dt(n){return`${Ze(Number(n??0))} ₫`}const zi="adminzic_user_cache";function Pl(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(zi);return n?JSON.parse(n):{}}catch{return{}}}function $l(n){if(!(typeof window>"u"))try{sessionStorage.setItem(zi,JSON.stringify(n))}catch{}}const Ft=(n,t)=>`${n}:${t}`;function El(){var pt,ue,st,ct,tt;const n=Ue(),t=Yt(),{t:s}=xe(),l=a.useCallback(z=>{switch(z){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${z}`,cls:""}}},[s]),i=a.useCallback(z=>{const de=`order.period.${z}`,oe=s(de);return oe===de?Es[z]??z:oe},[s]),[d,r]=a.useState([]),[g,x]=a.useState([]),[N,h]=a.useState({}),[j,m]=a.useState(0),[T,G]=a.useState(1),[M]=a.useState(15),[_,$]=a.useState(""),[C,k]=a.useState("trade_no"),[H,F]=a.useState(!0),[A,b]=a.useState(null),[P,D]=a.useState(!1),[Q,o]=a.useState(""),[w,R]=a.useState(""),[S,B]=a.useState(null),[y,O]=a.useState(null),[u,X]=a.useState(!1),[U,ne]=a.useState(null),[J,ie]=a.useState(!1),[ke,Re]=a.useState(()=>Pl()),Le=a.useCallback((z,de)=>{const oe=Ft(de,z);O(null),B(ee=>ee===oe?null:oe)},[]),De=a.useCallback((z,de)=>{const oe=Ft(de,z);B(null),O(ee=>ee===oe?null:oe)},[]),Ee=a.useCallback(z=>{const de=Number(z.coupon_id??0);return de?N[de]??`#${de}`:null},[N]);a.useEffect(()=>{if(!S&&!y)return;const z=()=>{B(null),O(null)},de=ee=>{const we=ee.target;we!=null&&we.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||z()},oe=ee=>{ee.key==="Escape"&&z()};return document.addEventListener("pointerdown",de),document.addEventListener("keydown",oe),()=>{document.removeEventListener("pointerdown",de),document.removeEventListener("keydown",oe)}},[S,y]),a.useEffect(()=>{const z=new Set;if(d.forEach(oe=>{oe.user_id&&!ke[oe.user_id]&&z.add(oe.user_id),oe.invite_user_id&&!ke[oe.invite_user_id]&&z.add(oe.invite_user_id)}),U&&(U.user_id&&!ke[U.user_id]&&z.add(U.user_id),U.invite_user_id&&!ke[U.invite_user_id]&&z.add(U.invite_user_id)),z.size===0)return;const de=Array.from(z);Promise.allSettled(de.map(async oe=>{try{const ee=await Gn(oe);if(ee&&ee.data)return{id:oe,email:ee.data.email,invite_user:ee.data.invite_user}}catch(ee){console.error(`Failed to fetch user ${oe}:`,ee)}return null})).then(oe=>{const ee={};oe.forEach(we=>{var he;if(we.status==="fulfilled"&&we.value){const ze=we.value;ee[ze.id]={email:ze.email,invite_user_email:((he=ze.invite_user)==null?void 0:he.email)||null},ze.invite_user&&(ee[ze.invite_user.id]={email:ze.invite_user.email})}}),Object.keys(ee).length>0&&Re(we=>{const he={...we,...ee};return $l(he),he})})},[d,U,ke]);const Se={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},ge=a.useCallback(async(z=1,de,oe)=>{var ee,we;F(!0),o("");try{let he;if(de)if(oe==="email"){const Ye=(ee=(await Bn(1,1,[{key:"email",condition:Cn,value:de}])).data)==null?void 0:ee[0];if(!Ye){r([]),m(0),F(!1);return}he=[{key:"user_id",condition:"=",value:String(Ye.id)}]}else if(oe==="invite_user_email"){const Ye=(we=(await Bn(1,1,[{key:"email",condition:Cn,value:de}])).data)==null?void 0:we[0];if(!Ye){r([]),m(0),F(!1);return}he=[{key:"invite_user_id",condition:"=",value:String(Ye.id)}]}else he=[{key:oe||"trade_no",condition:oe==="trade_no"||oe==="user_id"||oe==="invite_user_id"||oe==="plan_id"||oe==="status"?"=":Cn,value:de}];const ze=await lo({current:z,pageSize:M,filter:he});r(ze.data),m(ze.total)}catch(he){o(he instanceof Error?he.message:s("order.loadFailed"))}finally{F(!1)}},[M,s]),Ce=a.useCallback(z=>{const de=String(z);k("user_id"),$(de),X(!0),G(1),ge(1,de,"user_id")},[ge]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const z=new URLSearchParams(t.search),de=z.get("filter_email"),oe=z.get("invite_user_email"),ee=z.get("user_id")||z.get("filter_user_id");let we="",he="trade_no";ee?(we=ee,he="user_id",k("user_id"),$(ee),X(!0)):de?(we=de,he="email",k("email"),$(de),X(!0)):oe&&(we=oe,he="invite_user_email",k("invite_user_email"),$(oe),X(!0)),ge(1,we,he),$t().then(x).catch(()=>{}),hi(1,1e3).then(ze=>{const Te={};ze.data.forEach(Ye=>{Te[Ye.id]=Ye.code}),h(Te)}).catch(()=>{})},[ge,n,t.search]);function je(){G(1),ge(1,_,C)}function Xe(){$(""),G(1),ge(1)}function f(z){G(z),ge(z,_,C)}async function se(z){var de,oe;B(null),O(null),o(""),R("");try{await co(z),(de=window.showToast)==null||de.call(window,s("order.paidSuccess"),"success"),await ge(T,_,C)}catch(ee){(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:s("order.paidFailed"),"error")}}async function W(z){var de,oe;B(null),O(null),o(""),R("");try{await po(z),(de=window.showToast)==null||de.call(window,s("order.cancelSuccess"),"success"),await ge(T,_,C)}catch(ee){(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:s("order.cancelFailed"),"error")}}async function be(z,de){var oe,ee;B(null),O(null),o(""),R("");try{await uo(z,de),(oe=window.showToast)==null||oe.call(window,s("order.commissionSuccess"),"success"),await ge(T,_,C)}catch(we){(ee=window.showToast)==null||ee.call(window,we instanceof Error?we.message:s("order.commissionFailed"),"error")}}async function fe(z){ne(z),ie(!0);try{const de=await mo(z.id);de&&de.data&&ne(de.data)}catch(de){console.error("Failed to fetch order detail:",de)}finally{ie(!1)}}function me(){var z;b({email:"",plan_id:(z=g[0])!=null&&z.id?String(g[0].id):"",period:"month_price",total_amount:"0"}),o(""),R("")}async function qe(z){var de,oe;if(z.preventDefault(),!!A){D(!0),o(""),R("");try{await Vn({email:A.email,plan_id:Number(A.plan_id),period:A.period,total_amount:Number(A.total_amount)*100}),b(null),(de=window.showToast)==null||de.call(window,s("order.assignSuccess"),"success"),await ge(T,_,C)}catch(ee){(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:s("order.assignFailed"),"error")}finally{D(!1)}}}const Ge=Math.ceil(j/M),ae=U?Ee(U):null;return e.jsxs(Ke,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
        .content-loading-container {
          position: relative;
          transition: all 0.25s ease;
        }
        .content-loading-container.is-loading {
          opacity: 0.65;
          pointer-events: none;
          filter: grayscale(20%) blur(0.5px);
        }
        .page-loading-bar {
          position: absolute;
          top: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4, #10b981, #6366f1);
          background-size: 200% 100%;
          z-index: 999;
          border-radius: 3px;
          animation: loading-bar-anim 1.4s infinite linear;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        .content-loading-container.is-loading .page-loading-bar {
          opacity: 1;
        }
        @keyframes loading-bar-anim {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        .trade-no-link {
          color: #1677ff;
          font-family: var(--font-mono, SF Mono, monospace);
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.15s ease;
        }
        .trade-no-link:hover {
          text-decoration: underline;
          color: #4096ff;
        }
        .period-capsule {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          justify-self: start;
          width: max-content;
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 13px;
          color: var(--text);
          background: var(--surface-soft);
          white-space: nowrap;
        }
        .order-table {
          width: 100%;
          min-width: 860px;
          table-layout: fixed;
        }
        .order-table th:nth-child(1) { width: 15%; }
        .order-table th:nth-child(2) { width: 24%; }
        .order-table th:nth-child(3) { width: 15%; }
        .order-table th:nth-child(4) { width: 17%; }
        .order-table th:nth-child(5) { width: 17%; }
        .order-table th:nth-child(6) { width: 12%; }
        .order-cell-stack,
        .order-user-plan,
        .order-money-stack,
        .order-commission-cell {
          display: grid;
          gap: 6px;
          min-width: 0;
        }
        .order-cell-row {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .order-subline {
          display: block;
          overflow: hidden;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .order-plan-name,
        .order-email-link {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .order-plan-name {
          color: var(--text);
          font-weight: 850;
        }
        .order-email-link {
          max-width: 100%;
          font-family: inherit;
          font-weight: 650;
        }
        .order-type-pill,
        .order-coupon-badge {
          display: inline-flex;
          align-items: center;
          width: max-content;
          max-width: 100%;
          border: 1px solid var(--line);
          border-radius: 999px;
          background: var(--surface-soft);
          color: var(--muted);
          font-size: 11px;
          font-weight: 800;
          line-height: 1;
          padding: 5px 8px;
        }
        .order-coupon-badge {
          border-color: rgba(47, 143, 131, 0.28);
          background: var(--accent-soft);
          color: var(--accent-strong);
        }
        .order-money-main {
          color: var(--text);
          font-size: 14px;
          font-weight: 900;
        }
        .order-time {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.45;
          white-space: nowrap;
        }
        .status-indicator {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
        }
        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          display: inline-block;
        }
        .status-dot.pending { background-color: #ff4d4f; }
        .status-dot.processing,
        .status-dot.paid { background-color: #1677ff; }
        .status-dot.cancelled { background-color: #bfbfbf; }
        .status-dot.completed { background-color: #52c41a; }
        .status-dot.discounted { background-color: #a855f7; }

        .mark-as-trigger {
          color: #1677ff;
          font-size: 13px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 2px;
          margin-left: 6px;
          user-select: none;
          font-weight: 500;
        }
        .mark-as-trigger:hover {
          text-decoration: underline;
          color: #4096ff;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          margin-top: 4px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 6px;
          box-shadow: var(--shadow);
          padding: 4px 0;
          z-index: 1000;
          min-width: 110px;
        }

        /* Smart Upward-Opening Dropdowns for the last 3 rows in tables with at least 4 rows */
        .admin-table tbody tr:nth-child(n+4):nth-last-child(-n+3) .dropdown-menu {
          top: auto !important;
          bottom: 100% !important;
          margin-top: 0 !important;
          margin-bottom: 4px !important;
          animation: menu-fade-up 0.18s cubic-bezier(0.16, 1, 0.3, 1) !important;
          box-shadow: 0 -8px 24px rgba(0, 0, 0, 0.12) !important;
        }

        @keyframes menu-fade-up {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .dropdown-item {
          padding: 8px 12px;
          font-size: 13px;
          cursor: pointer;
          color: var(--text);
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
          border: 0;
          background: transparent;
          text-align: left;
          font-family: inherit;
          transition: background 0.15s ease;
        }
        .dropdown-item:hover {
          background: var(--surface-soft);
        }
        .help-icon {
          color: var(--muted);
          opacity: 0.8;
          display: inline-flex;
          align-items: center;
          margin-left: 4px;
          vertical-align: middle;
          cursor: help;
        }

        @media (max-width: 768px) {
          .mobile-order-list {
            display: flex !important;
            flex-direction: column;
            gap: 12px;
          }
          .mobile-order-card {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: 12px;
            padding: 16px;
            position: relative;
            z-index: 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow);
            overflow: visible;
          }
          .mobile-order-card.is-menu-open {
            z-index: 40;
          }
          .mobile-order-action-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            min-width: 0;
            max-width: 100%;
            overflow: visible;
          }
          .mobile-order-action-wrap .status-indicator {
            justify-content: flex-end;
            flex-wrap: wrap;
            row-gap: 4px;
          }
          .mobile-action-button {
            border: 1px solid rgba(47, 143, 131, 0.32);
            border-radius: 6px;
            min-height: 32px;
            padding: 0 9px;
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: var(--accent-soft);
            color: var(--accent-strong);
            font-family: inherit;
            font-size: 12px;
            font-weight: 800;
            line-height: 1;
            cursor: pointer;
            white-space: nowrap;
            touch-action: manipulation;
          }
          .mobile-action-button:active {
            transform: translateY(1px);
          }
          .mobile-order-action-wrap .order-dropdown-menu {
            left: auto !important;
            right: 0 !important;
            top: calc(100% + 6px) !important;
            min-width: 176px;
            max-width: calc(100vw - 32px);
            z-index: 2000;
          }
          .mobile-order-action-wrap .dropdown-item {
            min-height: 44px;
            white-space: nowrap;
          }
          .mobile-inline-action-menu {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 8px;
            padding: 8px;
            margin-top: -2px;
            border: 1px solid rgba(47, 143, 131, 0.16);
            border-radius: 10px;
            background: color-mix(in srgb, var(--accent-soft) 36%, var(--surface));
            box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.45);
          }
          .mobile-inline-action-menu .mobile-inline-action-item {
            min-height: 40px;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            justify-content: center;
            border: 1px solid var(--line);
            border-radius: 8px;
            padding: 0 10px;
            background: var(--surface);
            color: var(--text);
            box-shadow: 0 1px 2px rgba(15, 23, 42, 0.05);
            white-space: nowrap;
            font-family: inherit;
            font-size: 12px;
            font-weight: 800;
            cursor: pointer;
          }
          .mobile-inline-action-menu .mobile-inline-action-item:active {
            transform: translateY(1px);
          }
          .mobile-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
            border-bottom: 1px solid var(--line);
            padding-bottom: 10px;
            margin-bottom: 4px;
          }
          .mobile-card-header-left {
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .mobile-card-body {
            display: flex;
            flex-direction: column;
            gap: 8px;
            font-size: 13.5px;
          }
          .mobile-card-body-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 12px;
          }
          .mobile-card-body-row .label {
            color: var(--muted);
            font-weight: 500;
          }
          .mobile-card-body-row .value {
            color: var(--text);
            text-align: right;
            word-break: break-all;
          }
          .mobile-card-body-row .value .order-coupon-badge {
            margin-left: auto;
          }
        }
        @media (min-width: 769px) {
          .mobile-order-list {
            display: none !important;
          }
        }
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${u?"active":""}`,type:"button",onClick:()=>X(!u),children:[e.jsx(Kt,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:me,children:[e.jsx(rt,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ge(T,_,C),disabled:H,children:[e.jsx(Oe,{size:16}),s(H?"common.refreshing":"common.refresh")]})]}),u&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:C,onChange:z=>k(z.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(gn,{size:16}),e.jsx("input",{className:"config-input search-input",value:_,onChange:z=>$(z.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:z=>z.key==="Enter"&&je()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[e.jsx(Kt,{size:16}),s("order.filter")]}),_?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Xe,children:[e.jsx(Ne,{size:16}),s("order.clearFilter")]}):null]}),Q?e.jsx("div",{className:"form-error",children:Q}):null,w?e.jsx("div",{className:"form-success",children:w}):null,H&&d.length===0?e.jsx($e,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${H?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[d.map(z=>{var ze;const de=l(z.status),oe=z.invite_user_id!==null,ee=Se[z.commission_status]??{label:`#${z.commission_status}`,dotClass:"pending"},we=Ee(z),he=(ze=ke[z.user_id])==null?void 0:ze.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>fe(z),title:s("order.detailsTitle"),children:Ls(z.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",z.id]}),e.jsx("span",{className:"order-type-pill",children:$s[z.type]??`#${z.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[he?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(z.user_id),title:s("order.filterByUser"),children:he}):e.jsxs("span",{className:"order-subline",children:["ID: ",z.user_id]}),e.jsx("strong",{className:"order-plan-name",children:z.plan_name??`Plan #${z.plan_id}`}),e.jsx("span",{className:"period-capsule",children:i(z.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:dt(z.total_amount)}),we?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",we]}):null,Number(z.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",dt(z.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${de.cls.replace("status-","")}`}),e.jsx("span",{children:de.label}),z.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),Le(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),S===Ft("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),se(z.trade_no)},children:[e.jsx(Zt,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),W(z.trade_no)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[oe?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:dt(z.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${ee.dotClass}`}),e.jsx("span",{children:ee.label}),z.commission_status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),De(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),y===Ft("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),be(z.trade_no,1)},children:[e.jsx(Zt,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),be(z.trade_no,3)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Ms(z.created_at)})})]},z.trade_no)}),!H&&d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),Ge>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:T<=1,onClick:()=>f(T-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[T," / ",Ge]}),e.jsx("button",{className:"mini-button",disabled:T>=Ge,onClick:()=>f(T+1),children:e.jsx(jt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[d.map(z=>{var it;const de=l(z.status),oe=z.invite_user_id!==null,ee=Se[z.invite_user_id!==null?z.commission_status:0]??{label:`#${z.commission_status}`,dotClass:"pending"},we=(it=ke[z.user_id])==null?void 0:it.email,he=Ee(z),ze=Ft("mobile",z.trade_no),Te=Ft("mobile",z.trade_no),Ye=S===ze||y===Te;return e.jsxs("div",{className:`mobile-order-card${Ye?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>fe(z),children:Ls(z.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",z.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${de.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:de.label}),z.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),Le(z.trade_no,"mobile")},"aria-expanded":S===ze,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),S===ze&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),se(z.trade_no)},children:[e.jsx(Zt,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),W(z.trade_no)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:we?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(z.user_id),children:we}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",z.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:$s[z.type]??`#${z.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:z.plan_name??`Plan #${z.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:i(z.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:dt(z.total_amount)})]}),he?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:he})})]}):null,Number(z.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:dt(z.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:oe?e.jsx("strong",{children:dt(z.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),oe&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${ee.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:ee.label}),z.commission_status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),De(z.trade_no,"mobile")},"aria-expanded":y===Te,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),y===Te&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),be(z.trade_no,1)},children:[e.jsx(Zt,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),be(z.trade_no,3)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Ms(z.created_at)})]})]})]},z.trade_no)}),!H&&d.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,Ge>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:T<=1,onClick:()=>f(T-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[T," / ",Ge]}),e.jsx("button",{className:"mini-button",disabled:T>=Ge,onClick:()=>f(T+1),children:e.jsx(jt,{size:16})})]}):null]})]}),U?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(null),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:J?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx($e,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(pt=ke[U.user_id])!=null&&pt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{ne(null),Ce(U.user_id)},title:"Filter by this user",children:ke[U.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",U.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:U.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:i(U.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:l(U.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:U.plan_name??`Plan #${U.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:U.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),U.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(ue=ke[U.invite_user_id])!=null&&ue.email||(st=ke[U.user_id])!=null&&st.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const z=String(U.invite_user_id);k("invite_user_id"),$(z),X(!0),ne(null),ge(1,z,"invite_user_id")},title:"Filter by this inviter",children:((ct=ke[U.invite_user_id])==null?void 0:ct.email)||((tt=ke[U.user_id])==null?void 0:tt.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",U.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:dt(U.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(Se[U.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(Se[U.commission_status]??{label:`#${U.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:dt(U.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:dt(U.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:dt(U.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:dt(U.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:dt(U.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Ds(U.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Ds(U.updated_at)})]})]})]})})]})}):null,A?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>b(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:qe,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:A.email,onChange:z=>b({...A,email:z.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:A.plan_id,onChange:z=>b({...A,plan_id:z.target.value}),children:g.map(z=>e.jsx("option",{value:z.id,children:z.name},z.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:A.period,onChange:z=>b({...A,period:z.target.value}),children:Object.entries(Es).map(([z,de])=>e.jsx("option",{value:z,children:de},z))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:A.total_amount,onChange:z=>b({...A,total_amount:z.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>b(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[e.jsx(lt,{size:16}),s(P?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Vt(n){return new Date(n*1e3).toLocaleString("vi-VN")}function en(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function zn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Ml(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(0),[r,g]=a.useState(1),[x,N]=a.useState([]),[h,j]=a.useState(null),[m,T]=a.useState(!0),[G,M]=a.useState(!1),[_,$]=a.useState(""),[C,k]=a.useState(""),[H,F]=a.useState("");a.useEffect(()=>{h||F("")},[h]);const A=a.useCallback(async(o=1)=>{T(!0),$("");try{const w=await hi(o,15);l(w.data),d(w.total)}catch(w){$(w instanceof Error?w.message:t("coupon.loadFailed"))}finally{T(!1)}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}A(1),$t().then(N).catch(()=>{})},[A,n]);async function b(o){var w,R;if(o.preventDefault(),!!h){M(!0),$(""),k("");try{const S=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await ho({id:h.id,name:h.name,type:Number(h.type),value:S,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,limit_use_with_user:h.limit_use_with_user?Number(h.limit_use_with_user):null,limit_plan_ids:h.limit_plan_ids.length?h.limit_plan_ids:null,limit_period:h.limit_period.length?h.limit_period:null,generate_count:h.generate_count?Number(h.generate_count):void 0}),j(null),(w=window.showToast)==null||w.call(window,t("coupon.saveSuccess"),"success"),await A(r)}catch(S){(R=window.showToast)==null||R.call(window,S instanceof Error?S.message:t("coupon.saveFailed"),"error")}finally{M(!1)}}}async function P(o){var w;try{await bo(o),await A(r)}catch(R){(w=window.showToast)==null||w.call(window,R instanceof Error?R.message:t("coupon.toggleFailed"),"error")}}async function D(o){var w;(w=window.showConfirm)==null||w.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var R,S;try{await xo(o),(R=window.showToast)==null||R.call(window,t("coupon.deleteSuccess"),"success"),await A(r)}catch(B){(S=window.showToast)==null||S.call(window,B instanceof Error?B.message:t("coupon.deleteFailed"),"error")}}})}const Q=Math.ceil(i/15);return e.jsxs(Ke,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[i," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(r),disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(zn()),children:[e.jsx(rt,{size:16}),t("coupon.add")]})]})]}),_?e.jsx("div",{className:"form-error",children:_}):null,C?e.jsx("div",{className:"form-success",children:C}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(o=>{var B,y;const w=(B=o.limit_plan_ids)==null?void 0:B.map(O=>{var u;return((u=x.find(X=>X.id===O))==null?void 0:u.name)||`#${O}`}).join(", "),R=en(t),S=(y=o.limit_period)==null?void 0:y.map(O=>R[O]||O).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:o.id}),e.jsx("td",{children:e.jsx("strong",{children:o.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:o.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:o.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:o.type===1?Ze(o.value):`${o.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",o.limit_use??"∞"]}),o.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",o.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[w?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",w]})}):null,S?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",S]})}):null,!w&&!S?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${o.show?"active":""}`,type:"button",onClick:()=>void P(o.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[Vt(o.started_at)," — ",Vt(o.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(zn(o)),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(o.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},o.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(o=>{var w,R,S,B;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",o.id]}),e.jsx("span",{className:`tag type-tag ${o.type===1?"fixed-type":"percent-type"}`,children:o.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:o.name,children:o.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{Tt(o.code).then(y=>{var O;(O=window.showToast)==null||O.call(window,y?`${t("coupon.copiedCode")}: ${o.code}`:t("common.copyFailed"),y?"success":"error")})},children:[e.jsx("code",{className:"mono",children:o.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(w=o.limit_plan_ids)!=null&&w.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:o.limit_plan_ids.map(y=>{const O=x.find(u=>u.id===y);return e.jsx("span",{className:"res-pill plan-pill",children:O?O.name:`#${y}`},y)})})]}):null,(R=o.limit_period)!=null&&R.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:o.limit_period.map(y=>e.jsx("span",{className:"res-pill cycle-pill",children:en(t)[y]||y},y))})]}):null,!((S=o.limit_plan_ids)!=null&&S.length)&&!((B=o.limit_period)!=null&&B.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[Vt(o.started_at)," — ",Vt(o.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${o.show?"active":""}`,type:"button",onClick:()=>void P(o.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:o.type===1?Ze(o.value).replace(/\s?₫/,""):`${o.value}`}),e.jsx("span",{className:"ticket-value-unit",children:o.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:o.limit_use??"∞"}),o.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",o.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(zn(o)),"aria-label":t("common.edit"),children:e.jsx(We,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void D(o.id),"aria-label":t("common.delete"),children:e.jsx(Qe,{size:15})})]})]})]},o.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),Q>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:r<=1,onClick:()=>{g(r-1),A(r-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[r," / ",Q]}),e.jsx("button",{className:"mini-button",disabled:r>=Q,onClick:()=>{g(r+1),A(r+1)},children:e.jsx(jt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:b,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:o=>j({...h,name:o.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:h.type,onChange:o=>j({...h,type:o.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:o=>j({...h,value:o.target.value})})]})]}),h.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:h.code,onChange:o=>j({...h,code:o.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:o=>j({...h,started_at:o.target.value}),onClick:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)},onFocus:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:o=>j({...h,ended_at:o.target.value}),onClick:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)},onFocus:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:o=>j({...h,limit_use:o.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use_with_user,onChange:o=>j({...h,limit_use_with_user:o.target.value}),placeholder:t("coupon.unlimited")})]})]}),h.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:o=>j({...h,generate_count:o.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),h.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_plan_ids.map(o=>{const w=x.find(R=>R.id===o);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const R=h.limit_plan_ids.filter(S=>S!==o);j({...h,limit_plan_ids:R})},children:[w?w.name:`#${o}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},o)})}),x.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:H,onChange:o=>F(o.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[x.filter(o=>o.name.toLowerCase().includes(H.toLowerCase())).map(o=>{const w=h.limit_plan_ids.includes(o.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:w,onChange:R=>{const S=R.target.checked?[...h.limit_plan_ids,o.id]:h.limit_plan_ids.filter(B=>B!==o.id);j({...h,limit_plan_ids:S})}}),e.jsx("span",{children:o.name})]},o.id)}),x.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),h.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_period.map(o=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const w=h.limit_period.filter(R=>R!==o);j({...h,limit_period:w})},children:[en(t)[o]||o," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},o))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(en(t)).map(([o,w])=>{const R=h.limit_period.includes(o);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:R,onChange:S=>{const B=S.target.checked?[...h.limit_period,o]:h.limit_period.filter(y=>y!==o);j({...h,limit_period:B})}}),e.jsx("span",{children:w})]},o)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .checkbox-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          gap: 8px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 8px;
          padding: 12px;
          margin-top: 6px;
          max-height: 160px;
          overflow-y: auto;
        }
        .checkbox-label {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          cursor: pointer;
          user-select: none;
          color: rgba(255, 255, 255, 0.8);
        }
        .checkbox-label input {
          cursor: pointer;
          accent-color: #3b82f6;
        }

        @media (max-width: 768px) {
          .mobile-coupon-list {
            display: flex !important;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 20px;
          }
          .mobile-coupon-card.ticket-style {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: 16px;
            display: flex;
            position: relative;
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .mobile-coupon-card.ticket-style:active {
            transform: scale(0.99);
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          }
          .ticket-main {
            flex: 1;
            padding: 16px 12px 16px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
          }
          .ticket-badge-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .ticket-id-tag {
            font-family: monospace;
            background: var(--surface-soft);
            color: var(--text-muted);
            font-size: 11px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--line);
          }
          .tag.type-tag {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 2px 8px;
            border-radius: 6px;
          }
          .tag.type-tag.fixed-type {
            background: rgba(59, 130, 246, 0.1);
            color: #3b82f6;
            border: 1px solid rgba(59, 130, 246, 0.2);
          }
          .tag.type-tag.percent-type {
            background: rgba(16, 185, 129, 0.1);
            color: #10b981;
            border: 1px solid rgba(16, 185, 129, 0.2);
          }
          .ticket-title-row {
            margin-top: 2px;
          }
          .ticket-name {
            font-size: 15px;
            font-weight: 700;
            color: var(--text);
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .ticket-code-row {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 2px;
          }
          .ticket-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: var(--text-muted);
            font-weight: 600;
          }
          .copyable-code-pill {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            background: var(--surface-soft);
            border: 1px dashed var(--accent);
            border-radius: 8px;
            padding: 6px 12px;
            cursor: pointer;
            transition: background-color 0.2s, border-style 0.2s;
            user-select: none;
            max-width: fit-content;
            gap: 8px;
          }
          .copyable-code-pill:active {
            background: var(--line);
          }
          .copyable-code-pill code {
            font-family: var(--font-mono, monospace);
            font-weight: 700;
            font-size: 13px;
            color: var(--accent);
            letter-spacing: 0.5px;
          }
          .copy-icon-label {
            font-size: 12px;
            opacity: 0.8;
          }
          .ticket-restrictions {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 4px;
          }
          .restriction-pills {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .res-icon {
            font-size: 12px;
            flex-shrink: 0;
          }
          .pill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }
          .res-pill {
            font-size: 10.5px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--line);
          }
          .res-pill.plan-pill {
            background: rgba(59, 130, 246, 0.08);
            color: #3b82f6;
            border-color: rgba(59, 130, 246, 0.15);
          }
          .res-pill.cycle-pill {
            background: rgba(16, 185, 129, 0.08);
            color: #10b981;
            border-color: rgba(16, 185, 129, 0.15);
          }
          .all-plans-badge {
            font-size: 11px;
            font-weight: 500;
            color: var(--text-muted);
            background: var(--surface-soft);
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid var(--line);
            display: inline-block;
            align-self: flex-start;
          }
          .ticket-dates {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: var(--text-muted);
            margin-top: 2px;
          }
          .date-icon {
            font-size: 12px;
          }
          .ticket-switch-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-top: 1px solid var(--line);
            padding-top: 8px;
            margin-top: 6px;
          }
          .switch-label {
            font-size: 12px;
            font-weight: 500;
            color: var(--text-muted);
          }
          .ticket-divider {
            width: 16px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .ticket-divider::before {
            content: "";
            position: absolute;
            top: 12px;
            bottom: 12px;
            width: 0;
            border-left: 2px dashed var(--line);
            z-index: 1;
          }
          .ticket-notch {
            position: absolute;
            width: 16px;
            height: 16px;
            background: var(--background, #0f172a);
            border: 1px solid var(--line);
            border-radius: 50%;
            z-index: 2;
          }
          .ticket-notch.notch-top {
            top: -9px;
          }
          .ticket-notch.notch-bottom {
            bottom: -9px;
          }
          .ticket-side {
            width: 95px;
            padding: 16px 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: var(--surface-soft);
            border-left: 1px solid var(--line);
            text-align: center;
            flex-shrink: 0;
          }
          .ticket-value-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
          }
          .ticket-value {
            font-size: 18px;
            font-weight: 800;
            color: var(--text);
            line-height: 1.1;
          }
          .ticket-value-unit {
            font-size: 10px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-top: 2px;
          }
          .ticket-usage-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            margin: 8px 0;
          }
          .usage-label {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted);
            font-weight: 600;
          }
          .usage-val {
            font-size: 12px;
            font-weight: 700;
            color: var(--text);
          }
          .usage-per-user {
            font-size: 9px;
            font-weight: 600;
            color: #ef4444;
            background: rgba(239, 68, 68, 0.08);
            padding: 1px 4px;
            border-radius: 4px;
            white-space: nowrap;
          }
          .ticket-actions {
            display: flex;
            gap: 6px;
            width: 100%;
            margin-top: 4px;
          }
          .icon-action-btn {
            flex: 1;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            border: 1px solid var(--line);
            cursor: pointer;
            transition: all 0.2s;
            color: var(--text);
          }
          .icon-action-btn.edit-btn {
            background: var(--surface);
          }
          .icon-action-btn.edit-btn:active {
            background: var(--line);
            border-color: var(--accent);
            color: var(--accent);
          }
          .icon-action-btn.delete-btn {
            background: rgba(239, 68, 68, 0.05);
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.15);
          }
          .icon-action-btn.delete-btn:active {
            background: #ef4444;
            color: #fff;
          }
        }
        @media (min-width: 769px) {
          .mobile-coupon-list {
            display: none !important;
          }
        }
      `}})]})}function tn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Dl(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function Tn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Ll(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(0),[r,g]=a.useState(1),[x,N]=a.useState([]),[h,j]=a.useState(null),[m,T]=a.useState(!0),[G,M]=a.useState(!1),[_,$]=a.useState(""),[C,k]=a.useState(""),[H,F]=a.useState("");a.useEffect(()=>{h||F("")},[h]);const A=Dl(t),b=a.useCallback(async(o=1)=>{T(!0),$("");try{const w=await go(o,15);l(w.data),d(w.total)}catch(w){$(w instanceof Error?w.message:t("giftcard.loadFailed"))}finally{T(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}b(1),$t().then(N).catch(()=>{})},[b,n]);async function P(o){var w,R;if(o.preventDefault(),!!h){M(!0),$(""),k("");try{const S=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await fo({id:h.id,name:h.name,type:Number(h.type),value:S,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,plan_id:h.plan_id?Number(h.plan_id):null,generate_count:h.generate_count?Number(h.generate_count):void 0}),j(null),(w=window.showToast)==null||w.call(window,t("giftcard.saveSuccess"),"success"),await b(r)}catch(S){(R=window.showToast)==null||R.call(window,S instanceof Error?S.message:t("giftcard.saveFailed"),"error")}finally{M(!1)}}}async function D(o){var w;(w=window.showConfirm)==null||w.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var R,S;try{await yo(o),(R=window.showToast)==null||R.call(window,t("giftcard.deleteSuccess"),"success"),await b(r)}catch(B){(S=window.showToast)==null||S.call(window,B instanceof Error?B.message:t("giftcard.deleteFailed"),"error")}}})}const Q=Math.ceil(i/15);return e.jsxs(Ke,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[i," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void b(r),disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(Tn()),children:[e.jsx(rt,{size:16}),t("giftcard.add")]})]})]}),_?e.jsx("div",{className:"form-error",children:_}):null,C?e.jsx("div",{className:"form-success",children:C}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(o=>{var w;return e.jsxs("tr",{children:[e.jsx("td",{children:o.id}),e.jsx("td",{children:e.jsx("strong",{children:o.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:o.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:A[o.type]??o.type})}),e.jsx("td",{children:e.jsx("strong",{children:o.type===1?Ze(o.value):o.value})}),e.jsx("td",{children:o.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((w=x.find(R=>R.id===o.plan_id))==null?void 0:w.name)||`#${o.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:o.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[tn(o.started_at)," — ",tn(o.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(Tn(o)),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(o.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},o.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(o=>{var w;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",o.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:A[o.type]??o.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:o.name,children:o.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{Tt(o.code).then(R=>{var S;(S=window.showToast)==null||S.call(window,R?t("giftcard.copiedCode").replace("{code}",o.code):t("common.copyFailed"),R?"success":"error")})},children:[e.jsx("code",{className:"mono",children:o.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:o.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((w=x.find(R=>R.id===o.plan_id))==null?void 0:w.name)||`#${o.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[tn(o.started_at)," — ",tn(o.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:o.type===1?Ze(o.value).replace(/\s?₫/,""):`${o.value}`}),e.jsx("span",{className:"ticket-value-unit",children:o.type===1?"₫":A[o.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:o.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(Tn(o)),"aria-label":t("common.edit"),children:e.jsx(We,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void D(o.id),"aria-label":t("common.delete"),children:e.jsx(Qe,{size:15})})]})]})]},o.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),Q>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:r<=1,onClick:()=>{g(r-1),b(r-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[r," / ",Q]}),e.jsx("button",{className:"mini-button",disabled:r>=Q,onClick:()=>{g(r+1),b(r+1)},children:e.jsx(jt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:P,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:o=>j({...h,name:o.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:h.type,onChange:o=>j({...h,type:o.target.value}),children:Object.entries(A).map(([o,w])=>e.jsx("option",{value:o,children:w},o))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:o=>j({...h,value:o.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:o=>j({...h,started_at:o.target.value}),onClick:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)},onFocus:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:o=>j({...h,ended_at:o.target.value}),onClick:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)},onFocus:o=>{var w,R;return(R=(w=o.currentTarget).showPicker)==null?void 0:R.call(w)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:o=>j({...h,limit_use:o.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),h.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:o=>j({...h,generate_count:o.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),h.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const o=x.find(w=>String(w.id)===h.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...h,plan_id:""})},children:[o?o.name:`#${h.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),x.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:H,onChange:o=>F(o.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!h.plan_id,onChange:()=>{j({...h,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),x.filter(o=>o.name.toLowerCase().includes(H.toLowerCase())).map(o=>{const w=String(o.id)===h.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:w,onChange:R=>{R.target.checked&&j({...h,plan_id:String(o.id)})}}),e.jsx("span",{children:o.name})]},o.id)}),x.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        @media (max-width: 768px) {
          .mobile-giftcard-list {
            display: flex !important;
            flex-direction: column;
            gap: 14px;
            margin-bottom: 20px;
          }
          .mobile-giftcard-card.ticket-style {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: 16px;
            display: flex;
            position: relative;
            box-shadow: var(--shadow);
            overflow: hidden;
            transition: transform 0.2s, box-shadow 0.2s;
          }
          .mobile-giftcard-card.ticket-style:active {
            transform: scale(0.99);
            box-shadow: 0 4px 12px rgba(0,0,0,0.06);
          }
          .ticket-main {
            flex: 1;
            padding: 16px 12px 16px 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            min-width: 0;
          }
          .ticket-badge-row {
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .ticket-id-tag {
            font-family: monospace;
            background: var(--surface-soft);
            color: var(--text-muted);
            font-size: 11px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--line);
          }
          .tag.type-tag {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            padding: 2px 8px;
            border-radius: 6px;
            background: rgba(147, 51, 234, 0.1);
            color: #a855f7;
            border: 1px solid rgba(147, 51, 234, 0.2);
          }
          .ticket-title-row {
            margin-top: 2px;
          }
          .ticket-name {
            font-size: 15px;
            font-weight: 700;
            color: var(--text);
            margin: 0;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .ticket-code-row {
            display: flex;
            flex-direction: column;
            gap: 4px;
            margin-top: 2px;
          }
          .ticket-label {
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            color: var(--text-muted);
            font-weight: 600;
          }
          .copyable-code-pill {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            background: var(--surface-soft);
            border: 1px dashed var(--accent);
            border-radius: 8px;
            padding: 6px 12px;
            cursor: pointer;
            transition: background-color 0.2s, border-style 0.2s;
            user-select: none;
            max-width: fit-content;
            gap: 8px;
          }
          .copyable-code-pill:active {
            background: var(--line);
          }
          .copyable-code-pill code {
            font-family: var(--font-mono, monospace);
            font-weight: 700;
            font-size: 13px;
            color: var(--accent);
            letter-spacing: 0.5px;
          }
          .copy-icon-label {
            font-size: 12px;
            opacity: 0.8;
          }
          .ticket-restrictions {
            display: flex;
            flex-direction: column;
            gap: 6px;
            margin-top: 4px;
          }
          .restriction-pills {
            display: flex;
            align-items: center;
            gap: 6px;
          }
          .res-icon {
            font-size: 12px;
            flex-shrink: 0;
          }
          .pill-list {
            display: flex;
            flex-wrap: wrap;
            gap: 4px;
          }
          .res-pill {
            font-size: 10.5px;
            font-weight: 600;
            padding: 2px 6px;
            border-radius: 4px;
            border: 1px solid var(--line);
          }
          .res-pill.plan-pill {
            background: rgba(59, 130, 246, 0.08);
            color: #3b82f6;
            border-color: rgba(59, 130, 246, 0.15);
          }
          .all-plans-badge {
            font-size: 11px;
            font-weight: 500;
            color: var(--text-muted);
            background: var(--surface-soft);
            padding: 4px 8px;
            border-radius: 6px;
            border: 1px solid var(--line);
            display: inline-block;
            align-self: flex-start;
          }
          .ticket-dates {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 11px;
            color: var(--text-muted);
            margin-top: 2px;
          }
          .date-icon {
            font-size: 12px;
          }
          .ticket-divider {
            width: 16px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          .ticket-divider::before {
            content: "";
            position: absolute;
            top: 12px;
            bottom: 12px;
            width: 0;
            border-left: 2px dashed var(--line);
            z-index: 1;
          }
          .ticket-notch {
            position: absolute;
            width: 16px;
            height: 16px;
            background: var(--background, #0f172a);
            border: 1px solid var(--line);
            border-radius: 50%;
            z-index: 2;
          }
          .ticket-notch.notch-top {
            top: -9px;
          }
          .ticket-notch.notch-bottom {
            bottom: -9px;
          }
          .ticket-side {
            width: 95px;
            padding: 16px 8px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            background: var(--surface-soft);
            border-left: 1px solid var(--line);
            text-align: center;
            flex-shrink: 0;
          }
          .ticket-value-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex: 1;
          }
          .ticket-value {
            font-size: 18px;
            font-weight: 800;
            color: var(--text);
            line-height: 1.1;
          }
          .ticket-value-unit {
            font-size: 10px;
            font-weight: 700;
            color: var(--text-muted);
            text-transform: uppercase;
            margin-top: 2px;
          }
          .ticket-usage-wrap {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2px;
            margin: 8px 0;
          }
          .usage-label {
            font-size: 9px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            color: var(--text-muted);
            font-weight: 600;
          }
          .usage-val {
            font-size: 12px;
            font-weight: 700;
            color: var(--text);
          }
          .ticket-actions {
            display: flex;
            gap: 6px;
            width: 100%;
            margin-top: 4px;
          }
          .icon-action-btn {
            flex: 1;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 6px;
            border: 1px solid var(--line);
            cursor: pointer;
            transition: all 0.2s;
            color: var(--text);
          }
          .icon-action-btn.edit-btn {
            background: var(--surface);
          }
          .icon-action-btn.edit-btn:active {
            background: var(--line);
            border-color: var(--accent);
            color: var(--accent);
          }
          .icon-action-btn.delete-btn {
            background: rgba(239, 68, 68, 0.05);
            color: #ef4444;
            border-color: rgba(239, 68, 68, 0.15);
          }
          .icon-action-btn.delete-btn:active {
            background: #ef4444;
            color: #fff;
          }
        }
        @media (min-width: 769px) {
          .mobile-giftcard-list {
            display: none !important;
          }
        }
      `}})]})}const Rt="Tương đối",bt="=";function nn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Il(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Is(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Pn(n){return+(n/1073741824).toFixed(2)}function $n(n){return Math.round(n*1073741824)}function sn(n){return(n/1073741824).toFixed(2)}function Fl(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function At(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const Yn=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ti="user_visible_columns";function Al(){if(typeof window<"u")try{const n=localStorage.getItem(Ti);if(n)return new Set(JSON.parse(n))}catch{}return new Set(Yn.filter(n=>n.defaultVisible).map(n=>n.key))}const bn=[{value:"email",label:"Email",condition:Rt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:bt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:bt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:bt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:bt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:bt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Rt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:bt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Rt,placeholder:"UUID"},{value:"token",label:"Token",condition:Rt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Rt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:bt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:bt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:bt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:bt,placeholder:"1780366403"}],Ol=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Ve(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Rl(n,t){var i;const s=((i=bn.find(d=>d.value===n))==null?void 0:i.label)??n,l=d=>{const r=t(d);return r===d?s:r};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return l("user.filterBanned");case"is_admin":return l("user.filterAdmin");case"is_manager":return l("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return l("user.filterUuid");case"token":return l("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return l("user.filterTransferEnable");case"d":return l("user.filterDownloadUsed");case"device_limit":return l("user.filterDeviceLimit");case"expired_at":return l("user.filterExpiredAt");default:return s}}function En(n){return bn.find(t=>t.value===n)??bn[0]}function Hl(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function Ul(){const n=Ue(),t=Yt(),{t:s}=xe(),[l,i]=a.useState([]),[d,r]=a.useState([]),[g,x]=a.useState([]),[N,h]=a.useState(0),[j,m]=a.useState(1),[T,G]=a.useState(""),[M,_]=a.useState("email"),[$,C]=a.useState(!0),[k,H]=a.useState(""),[F,A]=a.useState(Al),[b,P]=a.useState(!1),D=a.useRef(null),[Q,o]=a.useState(null),[w,R]=a.useState(null),[S,B]=a.useState(null),[y,O]=a.useState({}),[u,X]=a.useState(!1),[U,ne]=a.useState(!1),[J,ie]=a.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[ke,Re]=a.useState(!1),[Le,De]=a.useState(null),[Ee,Se]=a.useState({plan_id:"",period:"month_price",total_amount:""}),[ge,Ce]=a.useState(!1),[je,Xe]=a.useState(null),[f,se]=a.useState(null),[W,be]=a.useState([]),[fe,me]=a.useState(0),[qe,Ge]=a.useState(1),[ae]=a.useState(10),[pt,ue]=a.useState(!1),[st,ct]=a.useState("");a.useEffect(()=>{function p(Y){const V=Y.target instanceof Element?Y.target:null;Q!==null&&(!V||!V.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(o(null),R(null)),b&&D.current&&!D.current.contains(Y.target)&&P(!1)}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[Q,b]),a.useEffect(()=>{if(Q===null)return;const p=()=>{o(null),R(null)};return window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[Q]);function tt(p,Y){if(Q===p){o(null),R(null);return}const V=Y.getBoundingClientRect(),pe=220,Pe=392,xt=6,at=8,yn=Math.max(at,Math.min(window.innerWidth-pe-at,V.right-pe)),$i=V.bottom+xt+Pe<=window.innerHeight-at?V.bottom+xt:Math.max(at,V.top-Pe-xt);R({top:$i,left:yn}),o(p)}function z(){o(null),R(null)}function de(p,Y=!1,V=""){const pe=Pe=>{z(),Pe()};return e.jsxs("div",{className:`action-dropdown-menu ${Y?"action-dropdown-menu-fixed":""} ${V}`.trim(),style:Y&&w?{top:w.top,left:w.left}:void 0,onMouseDown:Pe=>Pe.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>pe(()=>It(p)),children:[e.jsx(We,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>Ie(p)),children:[e.jsx(oi,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>void I(p)),children:[e.jsx(ft,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>ve(p)),children:[e.jsx(Hn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>E(p)),children:[e.jsx(Zn,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>_e(p)),children:[e.jsx(ta,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>c(p)),children:[e.jsx(On,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>L(p)),children:[e.jsx(cn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>pe(()=>re(p)),children:[e.jsx(ds,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>pe(()=>ce(p)),children:[e.jsx(Qe,{size:14}),s("user.actionDelete")]})]})}function oe(p){A(Y=>{const V=new Set(Y);V.has(p)?V.delete(p):V.add(p);try{localStorage.setItem(Ti,JSON.stringify([...V]))}catch{}return V})}const ee=p=>F.has(p),we=Yn.filter(p=>F.has(p.key)).length,he=a.useCallback(async(p=1,Y,V)=>{C(!0),H("");try{const pe=Y==null?void 0:Y.trim(),Pe=En(V||"email"),xt=pe?[{key:Pe.value,condition:Pe.condition,value:pe}]:void 0,at=await Bn(p,15,xt);i(at.data),h(at.total)}catch(pe){H(pe instanceof Error?pe.message:s("user.loadFailed"))}finally{C(!1)}},[]),ze=a.useCallback(async()=>{try{const[p,Y]=await Promise.all([$t(),Ot()]);r(p),x(Y)}catch{}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const p=new URLSearchParams(t.search),V=[["email",p.get("email")||p.get("filter_email")],["id",p.get("id")||p.get("user_id")||p.get("filter_user_id")],["plan_id",p.get("plan_id")],["invite_user_id",p.get("invite_user_id")],["invite_by_email",p.get("invite_by_email")],["uuid",p.get("uuid")],["token",p.get("token")],["remarks",p.get("remarks")]].find(([,pe])=>pe==null?void 0:pe.trim());if(V){const[pe,Pe]=V,xt=En(pe),at=(Pe==null?void 0:Pe.trim())??"";_(xt.value),G(at),m(1),he(1,at,xt.value)}else he(1);ze()},[he,ze,n,t.search]);function Te(){m(1),he(1,T,M)}function Ye(){G(""),m(1),he(1)}function it(p){m(p),he(p,T,M)}function Be(p){if(p.plan_name)return p.plan_name;if(!p.plan_id)return"—";const Y=d.find(V=>V.id===p.plan_id);return Y?Y.name:`#${p.plan_id}`}function wt(p){if(!p.group_id)return"—";const Y=g.find(V=>V.id===p.group_id);return Y?Y.name:`#${p.group_id}`}function nt(p,Y){const V=s(p);return V===p?Y:V}function ht(p){const Y=Number(p.device_limit??0);return Y>0?`${Number(p.device_bound_count??0)} / ${Y}`:nt("user.unlimited","Unlimited")}function Lt(p){const Y=Number(p.device_bound_count??0),V=Number(p.device_pending_count??0),pe=Number(p.device_banned_count??0),Pe=Number(p.device_online_count??0),xt=Number(p.alive_ip??0),at=Number(p.device_limit??0),yn=at>0?`${Y} / ${at}`:`${Y} / ${nt("user.unlimited","Unlimited")}`,vn=[`${nt("user.deviceBound","Bound")}: ${yn}`,`${nt("user.devicePending","Pending")}: ${V}`,`${nt("user.deviceBanned","Banned")}: ${pe}`,`${nt("user.deviceOnline","Online devices")}: ${Pe}`,`${nt("user.deviceOnlineIp","Online IP")}: ${xt}`];return p.ips&&vn.push(p.ips),vn.join(`
`)}function Et(p){n.push(`/device?user_id=${encodeURIComponent(String(p.id))}`)}function v(p,Y="left"){const V=`${nt("user.deviceOnlineShort","Online")}: ${Number(p.device_online_count??0)} | ${nt("user.deviceIpShort","IP")}: ${Number(p.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${Y==="right"?"align-right":""}`,type:"button",title:Lt(p),onClick:()=>Et(p),children:[e.jsx("span",{className:"device-cell-primary",children:ht(p)}),e.jsx("span",{className:"device-cell-secondary",children:V})]})}async function I(p){var pe,Pe;const Y=p.subscribe_url;if(!Y){(pe=window.showToast)==null||pe.call(window,s("user.toastNoSubscribeUrl"),"error");return}const V=await Tt(Y);(Pe=window.showToast)==null||Pe.call(window,s(V?"user.toastUrlCopied":"common.copyFailed"),V?"success":"error"),o(null)}function E(p){var Y;o(null),(Y=window.showConfirm)==null||Y.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var V,pe;try{await ko(p.id),(V=window.showToast)==null||V.call(window,s("user.toastSecretResetSuccess"),"success"),await he(j,T,M)}catch(Pe){(pe=window.showToast)==null||pe.call(window,Pe instanceof Error?Pe.message:s("user.toastSecretResetFailed"),"error")}}})}function ce(p){var Y;o(null),(Y=window.showConfirm)==null||Y.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var V,pe;try{await jo(p.id),(V=window.showToast)==null||V.call(window,s("user.toastDeletedSuccess"),"success"),await he(j,T,M)}catch(Pe){(pe=window.showToast)==null||pe.call(window,Pe instanceof Error?Pe.message:s("user.toastDeletedFailed"),"error")}}})}function ve(p){var V;o(null);const Y=p.subscribe_url;if(!Y){(V=window.showToast)==null||V.call(window,s("user.toastNoSubscribeUrl"),"error");return}Xe({url:Y,userId:p.id})}function _e(p){o(null),n.push(`/order?user_id=${p.id}`)}function c(p){o(null),n.push(`/subscription?user_id=${p.id}`)}function L(p){o(null),_("invite_user_id"),G(String(p.id)),he(1,String(p.id),"invite_user_id")}async function q(p,Y){ue(!0),ct("");try{const V=await To(p,Y,ae);be(V.data||[]),me(V.total||0),Ge(Y)}catch(V){ct(V instanceof Error?V.message:s("user.historyLoading"))}finally{ue(!1)}}function re(p){o(null),se(p),q(p.id,1)}function Ie(p){o(null),De(p.email),Se({plan_id:"",period:"month_price",total_amount:""})}async function kt(p){var Y,V;if(p.preventDefault(),!!Le){Ce(!0);try{await Vn({email:Le,plan_id:Number(Ee.plan_id),period:Ee.period,total_amount:(Number(Ee.total_amount)||0)*100}),(Y=window.showToast)==null||Y.call(window,s("user.toastAssignSuccess"),"success"),De(null)}catch(pe){(V=window.showToast)==null||V.call(window,pe instanceof Error?pe.message:s("user.toastAssignFailed"),"error")}finally{Ce(!1)}}}function It(p){o(null),B(p),O({id:p.id,email:p.email,invite_user_email:"",password:"",balance:p.balance,commission_balance:p.commission_balance,u:Pn(p.u),d:Pn(p.d),transfer_enable:Pn(p.transfer_enable),device_limit:p.device_limit,expired_at:Il(p.expired_at),plan_id:p.plan_id,banned:p.banned,commission_type:p.commission_type??0,commission_rate:p.commission_rate??"",discount:p.discount??"",speed_limit:p.speed_limit,is_admin:p.is_admin,is_staff:p.is_staff,is_manager:p.is_manager,remarks:p.remarks??""})}function Fe(p,Y){O(V=>({...V,[p]:Y}))}async function is(p){var Y,V;if(p.preventDefault(),!!S){X(!0);try{const pe={id:S.id,email:y.email,plan_id:y.plan_id||null,expired_at:Is(String(y.expired_at??"")),transfer_enable:$n(Number(y.transfer_enable??0)),speed_limit:y.speed_limit||null,device_limit:y.device_limit||null,u:$n(Number(y.u??0)),d:$n(Number(y.d??0)),balance:Number(y.balance??0),commission_balance:Number(y.commission_balance??0),commission_rate:y.commission_rate!==""&&y.commission_rate!==null?Number(y.commission_rate):null,commission_type:Number(y.commission_type??0),discount:y.discount!==""&&y.discount!==null?Number(y.discount):null,remarks:y.remarks||null,is_admin:Number(y.is_admin??0),is_staff:Number(y.is_staff??0),is_manager:Number(y.is_manager??0),banned:Number(y.banned??0)};y.invite_user_email&&(pe.invite_user_email=y.invite_user_email),y.password&&(pe.password=y.password),await vo(pe),(Y=window.showToast)==null||Y.call(window,s("user.toastSaveSuccess"),"success"),B(null),await he(j,T,M)}catch(pe){(V=window.showToast)==null||V.call(window,pe instanceof Error?pe.message:s("user.toastSaveFailed"),"error")}finally{X(!1)}}}async function fn(p){var Y,V;p.preventDefault(),Re(!0);try{await wo({email_prefix:J.email_prefix,email_suffix:J.email_suffix,password:J.password||void 0,plan_id:J.plan_id?Number(J.plan_id):void 0,expired_at:Is(J.expired_at)}),(Y=window.showToast)==null||Y.call(window,s("user.toastCreateSuccess"),"success"),ne(!1),ie({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await he(j,T,M)}catch(pe){(V=window.showToast)==null||V.call(window,pe instanceof Error?pe.message:s("user.toastCreateFailed"),"error")}finally{Re(!1)}}const Nt=Math.ceil(N/15),Pi=En(M);return e.jsxs(Ke,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
        .content-loading-container {
          position: relative;
          transition: all 0.25s ease;
        }
        .content-loading-container.is-loading {
          opacity: 0.65;
          pointer-events: none;
          filter: grayscale(20%) blur(0.5px);
        }
        .page-loading-bar {
          position: absolute;
          top: -2px;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(90deg, #6366f1, #3b82f6, #06b6d4, #10b981, #6366f1);
          background-size: 200% 100%;
          z-index: 999;
          border-radius: 3px;
          animation: loading-bar-anim 1.4s infinite linear;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease;
        }
        .content-loading-container.is-loading .page-loading-bar {
          opacity: 1;
        }
        @keyframes loading-bar-anim {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[N," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:D,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>P(!b),children:[e.jsx(Ji,{size:16}),s("user.columns")]}),b?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>P(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:we})})}),e.jsx("div",{className:"col-picker-list",children:Yn.map(p=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:F.has(p.key),onChange:()=>oe(p.key)}),e.jsx("span",{children:Ve(p.key,s)})]},p.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void he(j,T,M),disabled:$,children:[e.jsx(Oe,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ne(!0),children:[e.jsx(rt,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:M,onChange:p=>_(p.target.value),children:bn.map(p=>e.jsx("option",{value:p.value,children:Rl(p.value,s)},p.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(gn,{size:16}),e.jsx("input",{className:"config-input search-input",value:T,onChange:p=>G(p.target.value),placeholder:Pi.placeholder,onKeyDown:p=>p.key==="Enter"&&Te()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:Te,children:[e.jsx(Kt,{size:16}),s("user.filter")]}),T?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Ye,children:[e.jsx(Ne,{size:16}),s("user.clearFilter")]}):null]}),k?e.jsx("div",{className:"form-error",children:k}):null,$&&l.length===0?e.jsx($e,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${$?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[l.map(p=>{const Y=sn(p.u+p.d),V=sn(p.transfer_enable),pe=parseFloat(Y);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",p.id]}),e.jsx("span",{className:"user-email",title:p.email,children:p.email})]}),p.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[Be(p)," / ",p.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):wt(p)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${pe>0?pe>parseFloat(V)*.9?"high":"ok":""}`,children:[Y," GB"]})," / ",V," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Ve("devices",s)}),e.jsx("span",{className:"info-val",children:v(p,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Ve("expires",s)}),e.jsx("span",{className:"info-val",children:p.expired_at?e.jsx("span",{className:`expiry-date ${p.expired_at<Date.now()/1e3?"expired":""}`,children:nn(p.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(p.balance/100).toFixed(2)," ₫ / ",(p.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Ve("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:nn(p.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${Q===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>o(Q===p.id?null:p.id),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Q===p.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>o(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:Pe=>Pe.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:p.email}),e.jsxs("small",{children:["#",p.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>o(null),children:e.jsx(Ne,{size:16})})]}),de(p,!1,"mobile-action-menu")]})}):null]})})]},p.id)}),!$&&l.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[ee("id")&&e.jsx("th",{children:Ve("id",s)}),ee("email")&&e.jsx("th",{children:Ve("email",s)}),ee("status")&&e.jsx("th",{children:Ve("status",s)}),ee("plan")&&e.jsx("th",{children:Ve("plan",s)}),ee("group")&&e.jsx("th",{children:Ve("group",s)}),ee("used")&&e.jsx("th",{children:Ve("used",s)}),ee("traffic")&&e.jsx("th",{children:Ve("traffic",s)}),ee("devices")&&e.jsx("th",{children:Ve("devices",s)}),ee("expires")&&e.jsx("th",{children:Ve("expires",s)}),ee("balance")&&e.jsx("th",{children:Ve("balance",s)}),ee("commission")&&e.jsx("th",{children:Ve("commission",s)}),ee("joined")&&e.jsx("th",{children:Ve("joined",s)}),ee("actions")&&e.jsx("th",{className:"user-actions-col",children:Ve("actions",s)})]})}),e.jsxs("tbody",{children:[l.map(p=>{const Y=sn(p.u+p.d),V=sn(p.transfer_enable),pe=parseFloat(Y);return e.jsxs("tr",{children:[ee("id")&&e.jsx("td",{children:p.id}),ee("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:p.email})}),ee("status")&&e.jsx("td",{children:p.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),ee("plan")&&e.jsx("td",{children:Be(p)}),ee("group")&&e.jsx("td",{children:p.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):wt(p)}),ee("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${pe>0?pe>parseFloat(V)*.9?"high":"ok":""}`,children:Y})}),ee("traffic")&&e.jsx("td",{children:V}),ee("devices")&&e.jsx("td",{children:v(p)}),ee("expires")&&e.jsx("td",{children:p.expired_at?e.jsx("span",{className:`expiry-date ${p.expired_at<Date.now()/1e3?"expired":""}`,children:nn(p.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),ee("balance")&&e.jsx("td",{children:(p.balance/100).toFixed(2)}),ee("commission")&&e.jsx("td",{children:(p.commission_balance/100).toFixed(2)}),ee("joined")&&e.jsx("td",{children:e.jsx("small",{children:nn(p.created_at)})}),ee("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${Q===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:Pe=>tt(p.id,Pe.currentTarget),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Q===p.id&&w?Vs.createPortal(de(p,!0),document.body):null]})})]},p.id)}),!$&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:we,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),Nt>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>it(j-1),children:e.jsx(vt,{size:16})}),Array.from({length:Math.min(5,Nt)},(p,Y)=>{let V;return Nt<=5||j<=3?V=Y+1:j>=Nt-2?V=Nt-4+Y:V=j-2+Y,e.jsx("button",{className:`mini-button ${V===j?"active-page":""}`,onClick:()=>it(V),children:V},V)}),Nt>5?e.jsxs("span",{className:"page-info",children:["… ",Nt]}):null,e.jsx("button",{className:"mini-button",disabled:j>=Nt,onClick:()=>it(j+1),children:e.jsx(jt,{size:16})})]})}):null]}),S?e.jsx("div",{className:"modal-backdrop",onClick:()=>B(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>B(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:is,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(y.email??""),onChange:p=>Fe("email",p.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(y.invite_user_email??""),onChange:p=>Fe("invite_user_email",p.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(y.password??""),onChange:p=>Fe("password",p.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(y.balance??0)/100).toFixed(2)),onChange:p=>Fe("balance",Math.round(Number(p.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(y.commission_balance??0)/100).toFixed(2)),onChange:p=>Fe("commission_balance",Math.round(Number(p.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.u??0),onChange:p=>Fe("u",p.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.d??0),onChange:p=>Fe("d",p.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.transfer_enable??0),onChange:p=>Fe("transfer_enable",p.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(y.device_limit??""),onChange:p=>Fe("device_limit",p.target.value?Number(p.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(y.expired_at??""),onChange:p=>Fe("expired_at",p.target.value),onClick:p=>{var Y,V;return(V=(Y=p.currentTarget).showPicker)==null?void 0:V.call(Y)},onFocus:p=>{var Y,V;return(V=(Y=p.currentTarget).showPicker)==null?void 0:V.call(Y)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(y.plan_id??""),onChange:p=>Fe("plan_id",p.target.value?Number(p.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(p=>e.jsx("option",{value:p.id,children:p.name},p.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(y.banned??0),onChange:p=>Fe("banned",Number(p.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(y.commission_type??0),onChange:p=>Fe("commission_type",Number(p.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(y.commission_rate??""),onChange:p=>Fe("commission_rate",p.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(y.discount??""),onChange:p=>Fe("discount",p.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(y.speed_limit??""),onChange:p=>Fe("speed_limit",p.target.value?Number(p.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_admin?"active":""}`,onClick:()=>Fe("is_admin",y.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_manager?"active":""}`,onClick:()=>Fe("is_manager",y.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_staff?"active":""}`,onClick:()=>Fe("is_staff",y.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(y.remarks??""),onChange:p=>Fe("remarks",p.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>B(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:u,children:s(u?"common.processing":"common.save")})]})]})]})}):null,U?e.jsx("div",{className:"modal-backdrop",onClick:()=>ne(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(!1),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:fn,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:J.email_prefix,onChange:p=>ie({...J,email_prefix:p.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:J.email_suffix,onChange:p=>ie({...J,email_suffix:p.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:J.password,onChange:p=>ie({...J,password:p.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:J.plan_id,onChange:p=>ie({...J,plan_id:p.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(p=>e.jsx("option",{value:p.id,children:p.name},p.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:J.expired_at,onChange:p=>ie({...J,expired_at:p.target.value}),onClick:p=>{var Y,V;return(V=(Y=p.currentTarget).showPicker)==null?void 0:V.call(Y)},onFocus:p=>{var Y,V;return(V=(Y=p.currentTarget).showPicker)==null?void 0:V.call(Y)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ne(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ke,children:s(ke?"user.creating":"user.createUser")})]})]})]})}):null,Le?e.jsx("div",{className:"modal-backdrop",onClick:()=>De(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>De(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:kt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Le})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:Ee.plan_id,onChange:p=>Se({...Ee,plan_id:p.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),d.map(p=>e.jsx("option",{value:p.id,children:p.name},p.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:Ee.period,onChange:p=>Se({...Ee,period:p.target.value}),children:Ol.map(p=>e.jsx("option",{value:p.value,children:Hl(p.value,s)},p.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Ee.total_amount,onChange:p=>Se({...Ee,total_amount:p.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>De(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ge,children:s(ge?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ── column picker ─────────────────────── */
        .col-picker-wrap {
          position: relative;
          display: inline-block;
        }
        .col-picker-backdrop {
          display: none;
          border: 0;
          background: transparent;
          padding: 0;
        }
        .col-picker-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 999;
          width: max-content;
          min-width: 220px;
          max-width: min(320px, calc(100vw - 24px));
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          padding: 6px 0;
          animation: menu-fade 0.15s ease-out;
          overflow: hidden;
        }
        .col-picker-header {
          padding: 10px 16px 8px;
          font-size: 12px;
          font-weight: 700;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-bottom: 1px solid var(--line);
          margin-bottom: 4px;
          background: var(--surface);
        }
        .col-picker-list {
          display: grid;
          gap: 1px;
        }
        .col-picker-item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 36px;
          padding: 8px 16px;
          cursor: pointer;
          font-size: 13px;
          color: var(--text);
          transition: background 0.1s;
        }
        .col-picker-item:hover {
          background: var(--surface-soft);
        }
        .col-picker-item input[type="checkbox"] {
          width: 16px;
          height: 16px;
          accent-color: var(--accent);
          cursor: pointer;
          flex-shrink: 0;
        }
        @media (max-width: 768px) {
          .col-picker-backdrop {
            display: block;
            position: fixed;
            inset: 0;
            z-index: 998;
            background: rgba(0, 0, 0, 0.36);
            backdrop-filter: blur(2px);
          }
          .col-picker-dropdown {
            position: fixed;
            left: max(12px, env(safe-area-inset-left));
            right: max(12px, env(safe-area-inset-right));
            bottom: 0;
            top: auto;
            z-index: 999;
            width: auto;
            min-width: 0;
            max-width: none;
            max-height: calc(100dvh - 96px);
            border-radius: 18px 18px 0 0;
            padding: 0 0 max(12px, env(safe-area-inset-bottom));
            overflow-y: auto;
            box-shadow: 0 -18px 48px rgba(0, 0, 0, 0.28);
            animation: col-picker-slide-up 0.2s ease-out;
          }
          .col-picker-header {
            position: sticky;
            top: 0;
            z-index: 1;
            padding: 16px 18px 12px;
            margin-bottom: 0;
          }
          .col-picker-list {
            padding: 8px 10px 4px;
          }
          .col-picker-item {
            min-height: 46px;
            border-radius: 10px;
            padding: 10px 12px;
            font-size: 14px;
          }
          .col-picker-item input[type="checkbox"] {
            width: 20px;
            height: 20px;
          }
        }
        @keyframes col-picker-slide-up {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── status tags ─────────────────────────── */
        .status-tag {
          display: inline-block;
          padding: 2px 10px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          white-space: nowrap;
        }
        .status-tag.normal {
          background: #e8f5e9;
          color: #2e7d32;
          border: 1px solid #c8e6c9;
        }
        .status-tag.banned {
          background: #ffeef0;
          color: #d32f2f;
          border: 1px solid #ffcdd2;
        }

        /* ── traffic ─────────────────────────────── */
        .traffic-used { font-weight: 500; }
        .traffic-used.ok { color: #2e7d32; }
        .traffic-used.high { color: #d32f2f; }

        /* ── expiry ──────────────────────────────── */
        .expiry-date { font-size: 12px; white-space: nowrap; }
        .expiry-date.expired {
          background: #ffeef0;
          color: #d32f2f;
          padding: 2px 6px;
          border-radius: 4px;
        }
        .expiry-none { color: var(--muted); }
        .email-link { color: var(--accent); font-weight: 500; }

        /* ── action dropdown ─────────────────────── */
        .action-dropdown-wrap { position: relative; display: inline-block; }
        .action-dropdown-wrap.active { z-index: 50; }
        .action-dropdown-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 12px;
          font-size: 13px;
          color: var(--accent);
          background: none;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          font-weight: 500;
        }
        .action-dropdown-btn:hover { opacity: 0.8; }
        .action-dropdown-menu {
          position: absolute;
          right: 0;
          top: 100%;
          z-index: 999;
          min-width: 210px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          padding: 6px 0;
          animation: menu-fade 0.15s ease-out;
        }
        .action-dropdown-menu-fixed {
          position: fixed;
          right: auto;
          top: auto;
          z-index: 10000;
          width: 220px;
          max-height: calc(100vh - 16px);
          overflow-y: auto;
        }
        
        /* Auto open action dropdown upwards for last rows */
        :global(.admin-table tbody tr:nth-child(n+4):nth-last-child(-n+3)) .action-dropdown-menu {
          top: auto !important;
          bottom: 100% !important;
          margin-top: 0 !important;
          margin-bottom: 6px !important;
          animation: menu-fade-up 0.15s ease-out !important;
          box-shadow: 0 -8px 24px rgba(0,0,0,0.12) !important;
        }

        @keyframes menu-fade-up {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .action-dropdown-menu button {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 9px 16px;
          font-size: 13px;
          color: var(--text);
          background: none;
          border: none;
          cursor: pointer;
          text-align: left;
        }
        .action-dropdown-menu button:hover { background: var(--surface-soft); }
        .action-dropdown-menu .danger-item { color: var(--rose); }
        .menu-divider { height: 1px; background: var(--line); margin: 4px 0; }

        @keyframes menu-fade {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── edit modal ──────────────────────────── */
        .edit-user-modal {
          max-width: 520px;
          width: 100%;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }
        .modal-body-scroll {
          flex: 1;
          overflow-y: auto;
          padding: 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .modal-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 1px solid var(--line);
          flex-shrink: 0;
        }
        .modal-heading h2 { font-size: 16px; font-weight: 700; margin: 0; }

        .field-label {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
          font-size: 13px;
          font-weight: 600;
          color: var(--text);
        }
        .input-with-suffix { display: flex; align-items: stretch; }
        .input-with-suffix .config-input {
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          flex: 1;
          min-width: 0;
        }
        .input-suffix {
          display: flex;
          align-items: center;
          padding: 0 12px;
          background: var(--surface-soft);
          border: 1px solid var(--line);
          border-left: none;
          border-radius: 0 8px 8px 0;
          font-size: 13px;
          font-weight: 500;
          color: var(--muted);
          white-space: nowrap;
        }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }

        .toggle-field {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }
        .field-label-text { font-size: 13px; font-weight: 600; color: var(--text); }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding-top: 20px;
          border-top: 1px solid var(--line);
          margin-top: 8px;
        }

        .email-compose { display: flex; align-items: center; gap: 4px; }
        .email-compose .config-input { flex: 1; }
        .email-at { font-weight: 700; color: var(--muted); font-size: 16px; flex-shrink: 0; }

        .mobile-user-list {
          display: none;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
        }

        .user-table {
          width: 100%;
          min-width: 100% !important;
          table-layout: fixed;
        }
        .user-table th,
        .user-table td {
          white-space: nowrap;
          font-size: 13px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .user-table th:not(.user-actions-col),
        .user-table td:not(.user-actions-col) {
          min-width: 0;
        }
        .user-table .user-actions-col {
          width: 128px;
          min-width: 128px;
          max-width: 128px;
          position: sticky;
          right: 0;
          background: var(--surface);
          z-index: 3;
          box-shadow: -12px 0 12px -12px rgba(0, 0, 0, 0.18);
        }
        .user-table thead .user-actions-col {
          background: var(--surface-soft);
          z-index: 4;
        }
        .user-table .user-actions-col .action-dropdown-wrap {
          display: flex;
          justify-content: flex-end;
          width: 100%;
        }
        .user-table .user-actions-col .action-dropdown-btn {
          width: 100%;
          justify-content: center;
          padding-inline: 10px;
        }
        .user-table .email-link,
        .user-table .device-cell-primary,
        .user-table .device-cell-secondary {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          min-width: 0;
          max-width: 100%;
        }
        .user-table .device-cell-button {
          width: 100%;
          min-width: 0;
          max-width: 100%;
        }
        .device-cell-button {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 2px;
          min-width: 76px;
          padding: 2px 0;
          border: 0;
          background: transparent;
          color: inherit;
          font: inherit;
          line-height: 1.2;
          text-align: left;
          cursor: pointer;
        }
        .device-cell-button.align-right {
          align-items: flex-end;
          text-align: right;
        }
        .device-cell-button:hover .device-cell-primary,
        .device-cell-button:focus-visible .device-cell-primary {
          color: var(--accent);
        }
        .device-cell-button:focus-visible {
          outline: 2px solid var(--accent);
          outline-offset: 2px;
          border-radius: 4px;
        }
        .device-cell-primary {
          font-weight: 700;
          color: var(--text);
          white-space: nowrap;
        }
        .device-cell-secondary {
          font-size: 11px;
          font-weight: 500;
          color: var(--muted);
          white-space: nowrap;
        }
        .active-page {
          background: var(--accent) !important;
          color: #fff !important;
          border-color: var(--accent) !important;
        }

        @media (max-width: 768px) {
          .table-panel {
            display: none !important;
          }
          .mobile-user-list {
            display: flex !important;
          }

          /* Toolbar styling on mobile */
          .toolbar-row {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
          }
          .toolbar-row .button-row {
            width: 100%;
            justify-content: flex-start;
            flex-wrap: wrap;
            gap: 8px;
          }
          .toolbar-row .button-row button,
          .toolbar-row .button-row .col-picker-wrap {
            flex: 1;
            min-width: 120px;
          }
          .col-picker-wrap button {
            width: 100%;
          }

          /* Filter bar styling on mobile */
          .filter-bar {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
            gap: 8px;
          }
          .filter-select {
            grid-column: 1 / -1;
            width: 100% !important;
          }
          .search-input-wrap {
            grid-column: 1 / -1;
            width: 100% !important;
          }
          .filter-bar button {
            width: 100%;
          }

          /* Pagination styles */
          .pagination-wrap {
            margin-top: 16px;
            display: flex;
            justify-content: center;
          }
        }

        /* Mobile card styling */
        .mobile-user-card {
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }
        .mobile-user-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid var(--line);
          padding-bottom: 10px;
        }
        .user-id-email {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow: hidden;
          min-width: 0;
          flex: 1;
        }
        .user-id {
          font-family: monospace;
          background: var(--surface-soft);
          padding: 2px 6px;
          border-radius: 4px;
          font-weight: 700;
          font-size: 12px;
          color: var(--muted);
          flex-shrink: 0;
        }
        .user-email {
          font-weight: 600;
          color: var(--accent);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 14px;
          flex: 1;
          min-width: 0;
        }
        .mobile-user-card-body {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .info-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }
        .info-label {
          color: var(--muted);
          font-weight: 500;
        }
        .info-val {
          color: var(--text);
          font-weight: 600;
          text-align: right;
        }
        .mobile-user-card-actions {
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--line);
          padding-top: 10px;
        }
        .mobile-action-sheet-backdrop {
          display: none;
        }

        @media (max-width: 768px) {
          .mobile-user-card-actions {
            justify-content: stretch;
          }
          .mobile-user-card-actions .action-dropdown-wrap {
            position: static;
            width: 100%;
          }
          .mobile-user-card-actions .action-dropdown-btn {
            width: 100%;
            min-height: 38px;
            justify-content: center;
            border: 1px solid var(--line);
            border-radius: 10px;
            background: var(--surface-soft);
          }
          .mobile-action-sheet-backdrop {
            position: fixed;
            inset: 0;
            z-index: 9997;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.38);
            backdrop-filter: blur(8px);
          }
          .mobile-action-sheet {
            width: min(520px, 100%);
            max-height: calc(100vh - 42px);
            overflow: hidden;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: var(--surface);
            box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
            animation: mobile-action-sheet-up 0.18s cubic-bezier(0.16, 1, 0.3, 1);
          }
          .mobile-action-sheet-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 14px;
            border-bottom: 1px solid var(--line);
          }
          .mobile-action-sheet-head div {
            min-width: 0;
          }
          .mobile-action-sheet-head strong,
          .mobile-action-sheet-head small {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .mobile-action-sheet-head small {
            color: var(--muted);
            margin-top: 3px;
          }
          .mobile-action-menu {
            position: static !important;
            width: 100% !important;
            max-height: min(68vh, 520px);
            min-width: 0 !important;
            overflow-y: auto;
            border: 0 !important;
            border-radius: 0 !important;
            box-shadow: none !important;
            animation: none !important;
          }
          .mobile-action-menu button {
            min-height: 44px;
            padding: 10px 16px;
          }
          @keyframes mobile-action-sheet-up {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
        }

        @media (max-width: 640px) {
          .edit-user-modal,
          .compact-modal,
          .history-modal,
          .qr-modal {
            max-width: 100% !important;
            width: 100% !important;
            margin: 0;
            border-radius: 16px 16px 0 0 !important;
            max-height: 90vh !important;
          }
          .modal-backdrop {
            align-items: flex-end !important;
            padding: 0 !important;
          }
          .modal-body-scroll {
            padding: 16px 20px !important;
          }
          .form-row-2 { grid-template-columns: 1fr; }
          .email-compose { flex-direction: column; }
          .email-at { display: none; }

          .history-summary-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
          }
          .summary-card {
            padding: 10px 12px !important;
          }
          .summary-card-value {
            font-size: 1.1rem !important;
          }
        }
        /* ── QR modal ─────────────────────────── */
        .qr-modal {
          max-width: 360px;
          width: 100%;
        }
        .qr-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 24px;
        }
        .qr-body img {
          border-radius: 8px;
          border: 1px solid var(--line);
        }
        .qr-url {
          font-size: 12px;
          color: var(--muted);
          word-break: break-all;
          text-align: center;
          max-width: 100%;
          font-family: monospace;
          background: var(--surface-soft);
          padding: 8px 12px;
          border-radius: 6px;
          border: 1px solid var(--line);
        }
        /* ── History modal ────────────────────── */
        .history-modal {
          max-width: 800px;
          width: 100%;
        }
        .history-summary-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
          gap: 12px;
          margin-bottom: 20px;
        }
        .summary-card {
          background: var(--surface-soft);
          padding: 12px 16px;
          border-radius: 8px;
          border: 1px solid var(--line);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .summary-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }
        .summary-card-title {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          color: var(--muted);
          font-weight: 600;
        }
        .summary-card-value {
          font-size: 1.35rem;
          font-weight: 700;
          margin-top: 4px;
          color: var(--foreground);
        }
        .summary-card-value.highlight {
          color: var(--primary);
        }
      `}}),je?e.jsx("div",{className:"modal-backdrop",onClick:()=>Xe(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xe(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(je.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:je.userId})})]})]})}):null,f?e.jsx("div",{className:"modal-backdrop",onClick:()=>se(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:f.email,id:f.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>se(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[st?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:st}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:fe})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:At(W.reduce((p,Y)=>p+Y.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:At(W.reduce((p,Y)=>p+Y.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:At(W.reduce((p,Y)=>p+Y.u+Y.d,0))})]})]}),pt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx($e,{label:s("user.historyLoading")})}):W.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(ds,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:W.map(p=>{const Y=At(p.u),V=At(p.d),pe=At(p.u+p.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Fl(p.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(p.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:Y}),e.jsx("td",{style:{color:"var(--muted)"},children:V}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:pe})]},p.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((qe-1)*ae+1,fe),end:Math.min(qe*ae,fe),total:fe})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:qe<=1,onClick:()=>q(f.id,qe-1),children:[e.jsx(vt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:qe*ae>=fe,onClick:()=>q(f.id,qe+1),children:[s("user.historyNext"),e.jsx(jt,{size:16})]})]})]})]})]})]})}):null]})}function ql(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Gt({value:n,onCopy:t,className:s="",copyClassName:l="",prefixLength:i=8,suffixLength:d=4}){const{t:r}=xe(),[g,x]=a.useState(!1),N=g?n:ql(n,i,d);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${l}`.trim(),type:"button",title:r("uuid.copy"),onClick:()=>void t(),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:g?n:N,children:N})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:r(g?"uuid.hide":"uuid.showFull"),"aria-label":r(g?"uuid.hide":"uuid.showFull"),onClick:()=>x(h=>!h),children:g?e.jsx(Vi,{size:14}):e.jsx(ea,{size:14})})]})}const Fs=15,As=20,Bl=["email","id","user_id","plan_id","status"],Gl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function St(n,t){return n?new Date(n*1e3).toLocaleString():t}function Wl(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Kl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Mt(n){return+(n/1073741824).toFixed(2)}function Mn(n){return Math.round((Number(n)||0)*1073741824)}function Yl(n){return n==="email"?"like":"="}function Jl(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function Zl(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Os(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Rs(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Hs(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Us(n){return String(n.hwid??"").trim()!==""}function Ql(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function Xl(){const n=Ue(),t=Yt(),{t:s}=xe(),[l,i]=a.useState([]),[d,r]=a.useState([]),[g,x]=a.useState(0),[N,h]=a.useState(1),[j,m]=a.useState("email"),[T,G]=a.useState(""),[M,_]=a.useState(!0),[$,C]=a.useState(""),[k,H]=a.useState(null),[F,A]=a.useState({}),[b,P]=a.useState(null),[D,Q]=a.useState(null),[o,w]=a.useState([]),[R,S]=a.useState(0),[B,y]=a.useState(1),[O,u]=a.useState(!1),[X,U]=a.useState(""),[ne,J]=a.useState(null),[ie,ke]=a.useState(null),[Re,Le]=a.useState({period:"month_price",total_amount:""}),[De,Ee]=a.useState(!1),[Se,ge]=a.useState(null),[Ce,je]=a.useState(null),[Xe,f]=a.useState(null);function se(c){const L=c==null?void 0:c.trim();L&&n.push(`/user?email=${encodeURIComponent(L)}`)}const W=a.useCallback(async(c=1,L="",q="email")=>{_(!0),C("");try{const re=L.trim()?[{key:q,condition:Yl(q),value:L.trim()}]:void 0,Ie=await No(c,Fs,re);i(Ie.data),x(Ie.total),h(c)}catch(re){C(re instanceof Error?re.message:s("subscription.loadFailed"))}finally{_(!1)}},[s]),be=a.useCallback(async(c,L=1)=>{u(!0),U("");try{const q=await xi(L,As,[{key:"subscription_id",condition:"=",value:String(c.id)}]);w(q.data),S(q.total),y(L)}catch(q){U(q instanceof Error?q.message:s("subscription.slotsLoadFailed"))}finally{u(!1)}},[s]),fe=a.useCallback(async()=>{var c;try{r(await $t())}catch(L){(c=window.showToast)==null||c.call(window,L instanceof Error?L.message:s("subscription.plansLoadFailed"),"error")}},[s]);a.useEffect(()=>{if(!He()){n.replace("/login");return}fe();const c=new URLSearchParams(t.search),q=[["user_id",c.get("user_id")],["id",c.get("id")],["plan_id",c.get("plan_id")],["email",c.get("email")],["status",c.get("status")]].find(([,re])=>re&&re.trim());if(q){const[re,Ie]=q,kt=Ie??"";m(re),G(kt),W(1,kt,re);return}W()},[W,fe,t.search,n]),a.useEffect(()=>{function c(L){const q=L.target instanceof Element?L.target:null;Se!==null&&(!q||!q.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&me()}return document.addEventListener("mousedown",c),()=>document.removeEventListener("mousedown",c)},[Se]),a.useEffect(()=>{if(Se===null)return;const c=()=>me();return window.addEventListener("resize",c),window.addEventListener("scroll",c,!0),()=>{window.removeEventListener("resize",c),window.removeEventListener("scroll",c,!0)}},[Se]);function me(){ge(null),je(null)}function qe(c,L){if(Se===c&&Ce){me();return}const q=L.getBoundingClientRect(),re=230,Ie=292,kt=6,It=8,Fe=Math.max(It,Math.min(window.innerWidth-re-It,q.right-re)),fn=q.bottom+kt+Ie<=window.innerHeight-It?q.bottom+kt:Math.max(It,q.top-Ie-kt);je({top:fn,left:Fe}),ge(c)}function Ge(c){je(null),ge(L=>L===c?null:c)}function ae(c){c.preventDefault(),W(1,T,j)}function pt(){if(G(""),t.search){n.replace("/subscription");return}W(1,"",j)}function ue(c){if(!c)return s("subscription.noPlan");const L=d.find(q=>Number(q.id)===Number(c));return L?`#${L.id} - ${L.name}`:`#${c}`}function st(c){H(c),A({plan_id:c.plan_id?String(c.plan_id):"",transfer_enable:String(Mt(c.transfer_enable)),u:String(Mt(c.u)),d:String(Mt(c.d)),device_limit:c.device_limit===null?"":String(c.device_limit),speed_limit:c.speed_limit===null?"":String(c.speed_limit),expired_at:Wl(c.expired_at),status:c.status,auto_renewal:String(c.auto_renewal||0),name_sni:c.name_sni??"",network_settings:c.network_settings??"",remarks:c.remarks??""})}async function ct(c){var L,q;if(c.preventDefault(),!!k){P(k.id);try{await So({id:k.id,plan_id:F.plan_id===""?null:Number(F.plan_id),transfer_enable:Mn(F.transfer_enable),u:Mn(F.u),d:Mn(F.d),device_limit:F.device_limit===""?null:Number(F.device_limit),speed_limit:F.speed_limit===""?null:Number(F.speed_limit),expired_at:Kl(F.expired_at),status:F.status,auto_renewal:Number(F.auto_renewal),name_sni:F.name_sni||null,network_settings:F.network_settings||null,remarks:F.remarks}),H(null),(L=window.showToast)==null||L.call(window,s("subscription.updateSuccess"),"success"),await W(N,T,j)}catch(re){(q=window.showToast)==null||q.call(window,re instanceof Error?re.message:s("subscription.saveFailed"),"error")}finally{P(null)}}}function tt(c){var L;(L=window.showConfirm)==null||L.call(window,{message:s("subscription.resetConfirm",{id:c.id}),onConfirm:async()=>{var q,re;P(c.id);try{await Co(c.id),(q=window.showToast)==null||q.call(window,s("subscription.resetSuccess"),"success"),await W(N,T,j)}catch(Ie){(re=window.showToast)==null||re.call(window,Ie instanceof Error?Ie.message:s("subscription.resetFailed"),"error")}finally{P(null)}}})}function z(c){var L,q;if(!c.user_email){(L=window.showToast)==null||L.call(window,s("subscription.renewMissingEmail"),"error");return}if(!c.plan_id){(q=window.showToast)==null||q.call(window,s("subscription.renewMissingPlan"),"error");return}ke(c),Le({period:"month_price",total_amount:""})}async function de(c){var L,q;if(c.preventDefault(),!(!(ie!=null&&ie.user_email)||!ie.plan_id)){Ee(!0);try{await Vn({email:ie.user_email,plan_id:ie.plan_id,period:Re.period,total_amount:Math.round((Number(Re.total_amount)||0)*100),subscription_id:ie.id}),(L=window.showToast)==null||L.call(window,s("subscription.renewSuccess"),"success"),ke(null)}catch(re){(q=window.showToast)==null||q.call(window,re instanceof Error?re.message:s("subscription.renewFailed"),"error")}finally{Ee(!1)}}}async function oe(c){var q;if(!c)return;const L=await Tt(c);(q=window.showToast)==null||q.call(window,s(L?"subscription.copySuccess":"common.copyFailed"),L?"success":"error")}function ee(c,L){i(q=>q.map(re=>re.id===c?{...re,subscribe_url:L}:re)),Q(q=>q&&q.id===c?{...q,subscribe_url:L}:q)}async function we(c){if(c.subscribe_url)return c.subscribe_url;const q=(await _o(c.id)).data||null;return q&&ee(c.id,q),q}async function he(c){var L;if(!c.subscribe_url){J(c.id);try{await we(c)}catch(q){(L=window.showToast)==null||L.call(window,q instanceof Error?q.message:s("common.copyFailed"),"error")}finally{J(null)}}}async function ze(c){var L,q;J(c.id);try{const re=await we(c);if(!re){(L=window.showToast)==null||L.call(window,s("common.copyFailed"),"error");return}await oe(re)}catch(re){(q=window.showToast)==null||q.call(window,re instanceof Error?re.message:s("common.copyFailed"),"error")}finally{J(null)}}async function Te(c){var L,q;J(c.id);try{const re=await we(c);if(!re){(L=window.showToast)==null||L.call(window,s("common.copyFailed"),"error");return}f({url:re,subscriptionId:c.id})}catch(re){(q=window.showToast)==null||q.call(window,re instanceof Error?re.message:s("common.copyFailed"),"error")}finally{J(null)}}function Ye(c){Q(c),w([]),S(0),y(1),be(c,1),he(c)}function it(c=B){return D?be(D,c):Promise.resolve()}function Be(c){var L;(L=window.showConfirm)==null||L.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var q,re;P(c.id);try{await bi(c.id),(q=window.showToast)==null||q.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([it(),W(N,T,j)])}catch(Ie){(re=window.showToast)==null||re.call(window,Ie instanceof Error?Ie.message:s("subscription.unbindFailed"),"error")}finally{P(null)}}})}function wt(c){var L;(L=window.showConfirm)==null||L.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var q,re;P(c.id);try{await gi(c.id),(q=window.showToast)==null||q.call(window,s("subscription.banSuccess"),"success"),await Promise.all([it(),W(N,T,j)])}catch(Ie){(re=window.showToast)==null||re.call(window,Ie instanceof Error?Ie.message:s("subscription.banFailed"),"error")}finally{P(null)}}})}function nt(c){const L=c.device_limit&&c.device_limit>0?String(c.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:c.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:L})]}),c.device_limit&&c.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(c.device_count/c.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ye(c),children:[e.jsx(On,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function ht(c){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Mt(c.total_used)," / ",Mt(c.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Ql(c)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Mt(c.u),download:Mt(c.d)})})]})}function Lt(c){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Gt,{value:c.uuid,onCopy:()=>oe(c.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function Et(c){return e.jsxs("div",{className:"subscription-link-stack",children:[Lt(c),c.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:c.subscribe_url,onClick:()=>void ze(c),disabled:ne===c.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:c.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void ze(c),disabled:ne===c.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{children:ne===c.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function v(c){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:ne===c.id,onClick:()=>void Te(c),children:[e.jsx(Hn,{size:14}),ne===c.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),Et(c)]})}function I(c,L=!1,q=""){const re=Ie=>{me(),Ie()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${L?"subscription-action-menu-fixed":""} ${q}`.trim(),style:L&&Ce?{top:Ce.top,left:Ce.left}:void 0,onMouseDown:Ie=>Ie.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>re(()=>st(c)),children:[e.jsx(We,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>re(()=>z(c)),children:[e.jsx(oi,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>re(()=>Ye(c)),children:[e.jsx(On,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ne===c.id,onClick:()=>re(()=>void ze(c)),children:[e.jsx(ft,{size:14}),ne===c.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ne===c.id,onClick:()=>re(()=>void Te(c)),children:[e.jsx(Hn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:b===c.id,onClick:()=>re(()=>tt(c)),children:[e.jsx(Zn,{size:14}),s("subscription.resetSecret")]})]})}function E(c,L="desktop"){return L==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Se===c.id&&!Ce?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ge(c.id),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Se===c.id&&!Ce?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:me,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:q=>q.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:c.user_email??s("subscription.userId",{id:c.user_id})}),e.jsxs("small",{children:["#",c.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:me,children:e.jsx(Ne,{size:16})})]}),I(c,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Se===c.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:q=>qe(c.id,q.currentTarget),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Se===c.id&&Ce?Vs.createPortal(I(c,!0),document.body):null]})}const ce=Math.ceil(g/Fs),ve=Math.ceil(R/As),_e=ce>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:N<=1||M,onClick:()=>void W(N-1,T,j),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:N,total:ce})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:N>=ce||M,onClick:()=>void W(N+1,T,j),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null;return e.jsxs(Ke,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .subscription-table {
          min-width: 980px;
          table-layout: fixed;
        }
        .subscription-table th,
        .subscription-table td {
          padding: 13px 14px;
        }
        .subscription-table th:nth-child(1) { width: 250px; }
        .subscription-table th:nth-child(2) { width: 94px; }
        .subscription-table th:nth-child(3) { width: 190px; }
        .subscription-table th:nth-child(4) { width: 145px; }
        .subscription-table th:nth-child(5) { width: 150px; }
        .subscription-table th:nth-child(6) { width: 130px; }
        .subscription-table th:nth-child(7) { width: 116px; }
        .subscription-table tbody tr {
          transition: background 0.15s ease;
        }
        .subscription-table tbody tr:hover {
          background: var(--surface-soft);
        }
        .subscription-filter {
          align-items: center;
        }
        .subscription-desktop-panel {
          overflow: hidden;
        }
        .subscription-package {
          display: grid;
          grid-template-columns: auto minmax(0, 1fr);
          gap: 12px;
          align-items: center;
          min-width: 0;
        }
        .subscription-package-id {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 44px;
          height: 34px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          font-weight: 900;
        }
        .subscription-package-main {
          display: grid;
          gap: 4px;
          min-width: 0;
        }
        .subscription-email-link,
        .subscription-plan-name {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subscription-plan-name {
          color: var(--text);
          font-weight: 900;
        }
        .subscription-email-link {
          width: 100%;
          border: 0;
          background: transparent;
          color: #1677ff;
          cursor: pointer;
          font: inherit;
          font-size: 13px;
          font-weight: 700;
          padding: 0;
          text-align: left;
        }
        .subscription-email-link:hover {
          text-decoration: underline;
        }
        [data-theme="dark"] .subscription-email-link {
          color: #69b1ff;
        }
        .subscription-package-main small,
        .subscription-card-title small {
          display: block;
          overflow: hidden;
          color: var(--muted);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subscription-link {
          width: 100%;
          max-width: 100%;
          min-width: 0;
          justify-content: flex-start;
        }
        .subscription-link span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subscription-traffic {
          display: grid;
          gap: 6px;
          min-width: 0;
        }
        .subscription-traffic strong,
        .subscription-card-metric strong {
          color: var(--text);
          font-size: 13px;
        }
        .subscription-traffic-bar,
        .subscription-slot-meter {
          height: 6px;
          overflow: hidden;
          border-radius: 999px;
          background: var(--surface-soft);
          border: 1px solid var(--line);
        }
        .subscription-traffic-bar span,
        .subscription-slot-meter span {
          display: block;
          height: 100%;
          border-radius: inherit;
          background: var(--accent);
        }
        .subscription-slot-cell,
        .subscription-link-stack,
        .subscription-copy-item {
          display: grid;
          gap: 7px;
          align-items: start;
          min-width: 0;
        }
        .subscription-slot-count {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: var(--text);
          font-size: 13px;
          font-weight: 900;
        }
        .subscription-slot-cell small,
        .subscription-copy-item small {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }
        .subscription-slot-button {
          width: max-content;
          max-width: 100%;
          white-space: nowrap;
        }
        .subscription-slot-button span {
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .subscription-status {
          cursor: default;
          white-space: nowrap;
        }
        .subscription-status-active {
          border-color: #b8d7ce;
          background: var(--accent-soft);
          color: var(--accent-strong);
        }
        .subscription-status-disabled {
          border-color: #f0bec9;
          background: var(--rose-soft);
          color: var(--rose);
        }
        .subscription-action-wrap {
          position: relative;
          display: inline-block;
        }
        .subscription-action-trigger {
          min-width: 94px;
          justify-content: center;
        }
        .subscription-action-menu {
          min-width: 230px;
        }
        .subscription-action-menu-fixed {
          position: fixed;
          right: auto;
          top: auto;
          margin-top: 0;
          z-index: 10000;
          width: 230px;
          max-height: calc(100vh - 16px);
          overflow-y: auto;
        }
        .subscription-action-menu .action-dropdown-item {
          min-height: 38px;
          white-space: nowrap;
        }
        .subscription-action-menu .action-dropdown-item:disabled {
          cursor: not-allowed;
          opacity: 0.58;
        }
        .subscription-action-menu .menu-divider {
          height: 1px;
          background: var(--line);
          margin: 4px 0;
        }
        .subscription-mobile-card-actions {
          display: flex;
          justify-content: flex-end;
          border-top: 1px solid var(--line);
          padding-top: 10px;
        }
        .subscription-mobile-action-sheet-backdrop {
          display: none;
        }
        .subscription-mobile-list {
          display: none;
        }
        .subscription-card {
          display: grid;
          gap: 14px;
          width: 100%;
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          padding: 15px;
          box-shadow: var(--shadow);
        }
        .subscription-card,
        .subscription-card * {
          min-width: 0;
        }
        .subscription-card-head {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          align-items: flex-start;
          border-bottom: 1px solid var(--line);
          padding-bottom: 10px;
        }
        .subscription-card-title {
          display: grid;
          gap: 4px;
        }
        .subscription-card-id {
          color: var(--muted);
          font-size: 12px;
          font-weight: 900;
        }
        .subscription-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .subscription-card-metric {
          display: grid;
          gap: 7px;
          min-height: 86px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-soft);
          padding: 10px;
        }
        .subscription-card-label {
          color: var(--muted);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
        }
        .subscription-identity-summary {
          display: grid;
          gap: 12px;
          margin-bottom: 14px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-soft);
          padding: 12px;
        }
        .subscription-identity-head {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 12px;
        }
        .subscription-identity-head > div {
          display: grid;
          gap: 3px;
          min-width: 0;
        }
        .subscription-identity-head strong {
          color: var(--text);
          font-size: 13px;
          font-weight: 900;
        }
        .subscription-identity-head small {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.35;
        }
        .subscription-qr-modal {
          width: min(380px, 100%);
        }
        .subscription-qr-body {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 22px;
        }
        .subscription-qr-body img {
          border: 1px solid var(--line);
          border-radius: 8px;
          background: #fff;
        }
        .subscription-qr-url {
          width: 100%;
          max-width: 100%;
          overflow-wrap: anywhere;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-soft);
          color: var(--muted);
          font-family: monospace;
          font-size: 12px;
          line-height: 1.45;
          padding: 9px 11px;
          text-align: center;
        }
        .subscription-slots-modal {
          width: min(1080px, 100%);
        }
        .subscription-slots-body {
          padding: 18px;
        }
        .subscription-slot-table {
          min-width: 1080px;
        }
        .subscription-slot-mobile-list {
          display: none;
        }
        .subscription-slot-card {
          display: grid;
          gap: 12px;
          min-width: 0;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface);
          padding: 12px;
        }
        .subscription-slot-card-head {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          align-items: center;
        }
        .subscription-slot-card-grid {
          display: grid;
          gap: 8px;
        }
        .subscription-slot-card-row {
          display: grid;
          gap: 4px;
          min-width: 0;
        }
        .subscription-slot-card-row span:first-child {
          color: var(--muted);
          font-size: 11px;
          font-weight: 900;
          text-transform: uppercase;
        }
        .subscription-slot-card-row span:last-child,
        .subscription-slot-card-row small {
          overflow: hidden;
          color: var(--text);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .subscription-slot-actions {
          flex-wrap: wrap;
        }
        .subscription-modal-grid {
          display: grid;
          gap: 14px;
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }
        .subscription-renew-summary {
          display: grid;
          gap: 8px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-soft);
          padding: 12px;
        }
        .subscription-renew-row {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          min-width: 0;
        }
        .subscription-renew-row span:first-child {
          color: var(--muted);
          font-size: 12px;
          font-weight: 800;
        }
        .subscription-renew-row strong {
          min-width: 0;
          overflow: hidden;
          color: var(--text);
          text-align: right;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        @media (max-width: 768px) {
          .subscription-table {
            min-width: 0;
          }
          .toolbar-row {
            align-items: stretch;
          }
          .subscription-filter {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
          }
          .subscription-filter .filter-select {
            grid-column: 1 / -1;
            width: 100% !important;
          }
          .subscription-desktop-panel {
            display: none !important;
          }
          .subscription-mobile-list {
            display: grid;
            gap: 12px;
          }
          .subscription-card-head {
            align-items: center;
          }
          .subscription-card-grid {
            grid-template-columns: 1fr;
          }
          .subscription-card-metric {
            min-height: auto;
          }
          .subscription-mobile-card-actions {
            justify-content: stretch;
          }
          .subscription-mobile-card-actions .subscription-action-wrap {
            position: static;
            width: 100%;
          }
          .subscription-mobile-card-actions .subscription-action-trigger {
            width: 100%;
            min-height: 40px;
            border: 1px solid var(--line);
            border-radius: 10px;
            background: var(--surface-soft);
          }
          .subscription-mobile-action-sheet-backdrop {
            position: fixed;
            inset: 0;
            z-index: 9997;
            display: flex;
            align-items: flex-end;
            justify-content: center;
            padding: 12px;
            background: rgba(0, 0, 0, 0.38);
            backdrop-filter: blur(8px);
          }
          .subscription-mobile-action-sheet {
            width: min(520px, 100%);
            max-height: calc(100vh - 42px);
            overflow: hidden;
            border: 1px solid var(--line);
            border-radius: 16px;
            background: var(--surface);
            box-shadow: 0 18px 50px rgba(15, 23, 42, 0.28);
            animation: subscription-action-sheet-up 0.18s ease-out;
          }
          .subscription-mobile-action-sheet-head {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            border-bottom: 1px solid var(--line);
            padding: 13px 14px;
          }
          .subscription-mobile-action-sheet-head > div {
            display: grid;
            gap: 3px;
            min-width: 0;
          }
          .subscription-mobile-action-sheet-head strong,
          .subscription-mobile-action-sheet-head small {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .subscription-mobile-action-sheet-head small {
            color: var(--muted);
            font-size: 12px;
          }
          .subscription-mobile-action-menu {
            position: static;
            width: 100%;
            max-height: calc(100vh - 144px);
            overflow-y: auto;
            border: 0;
            box-shadow: none;
            padding: 8px;
          }
          .subscription-mobile-action-menu .action-dropdown-item {
            min-height: 44px;
            padding: 10px 14px;
          }
          @keyframes subscription-action-sheet-up {
            from { opacity: 0; transform: translateY(18px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .subscription-slot-button {
            width: 100%;
          }
          .subscription-slots-modal,
          .modal-panel {
            width: 100% !important;
            max-height: 90vh;
            border-radius: 16px 16px 0 0;
          }
          .modal-backdrop {
            align-items: end;
            display: flex;
            justify-content: center;
            padding: 0;
          }
          .subscription-slots-body {
            padding: 14px;
          }
          .subscription-slot-table-wrap {
            display: none;
          }
          .subscription-slot-mobile-list {
            display: grid;
            gap: 10px;
          }
          .subscription-modal-grid {
            grid-template-columns: 1fr;
          }
          .subscription-identity-head {
            display: grid;
          }
          .subscription-identity-head .mini-button {
            width: 100%;
          }
          .subscription-renew-row {
            display: grid;
            gap: 3px;
          }
          .subscription-renew-row strong {
            text-align: left;
          }
          .pagination {
            flex-wrap: wrap;
          }
        }
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:g})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:M,onClick:()=>void W(N,T,j),children:[e.jsx(Oe,{size:16}),s(M?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:j,onChange:c=>m(c.target.value),children:Bl.map(c=>e.jsx("option",{value:c,children:Jl(c,s)},c))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(gn,{size:16}),e.jsx("input",{className:"config-input",value:T,onChange:c=>G(c.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(Kt,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:pt,children:s("common.clearFilter")})]}),$?e.jsx("div",{className:"form-error",children:$}):null,M&&l.length===0?e.jsx($e,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[l.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",c.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:c.plan_name??"-"}),c.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>se(c.user_email),title:s("subscription.viewUser"),children:c.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:c.user_id}),c.plan_id?` - ${s("subscription.planId",{id:c.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${c.status}`,children:Os(c.status,s)})}),e.jsx("td",{children:ht(c)}),e.jsx("td",{children:nt(c)}),e.jsx("td",{children:St(c.expired_at,s("subscription.never"))}),e.jsx("td",{children:St(c.updated_at,s("subscription.never"))}),e.jsx("td",{children:E(c)})]},c.id)),!M&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[l.map(c=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",c.id]}),e.jsx("strong",{className:"subscription-plan-name",children:c.plan_name??"-"}),c.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>se(c.user_email),title:s("subscription.viewUser"),children:c.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${c.status}`,children:Os(c.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),ht(c)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),nt(c)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:St(c.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:St(c.updated_at,s("subscription.never"))})]})]}),E(c,"mobile")]},c.id)),!M&&l.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),_e,D?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Q(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:D.id})}),e.jsx("p",{children:D.user_email??s("subscription.userId",{id:D.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>Q(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[X?e.jsx("div",{className:"form-error",children:X}):null,O&&o.length===0?e.jsx($e,{label:s("subscription.slotsLoading")}):null,v(D),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[o.map(c=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Gt,{value:c.uuid,onCopy:()=>oe(c.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Hs(c.status)}`,children:Rs(c.status,s)})}),e.jsx("td",{children:c.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:c.hwid,onClick:()=>oe(c.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:c.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:c.user_agent??"",children:c.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:c.last_ip??"-"}),e.jsx("small",{children:c.first_ip?s("subscription.firstIp",{ip:c.first_ip}):"-"})]}),e.jsx("td",{children:St(c.first_seen_at,"-")}),e.jsx("td",{children:St(c.last_seen_at,"-")}),e.jsx("td",{children:Us(c)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:b===c.id,onClick:()=>Be(c),children:[e.jsx(qn,{size:14}),s("subscription.unbind")]}),c.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:b===c.id,onClick:()=>wt(c),children:[e.jsx(Dt,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},c.id)),!O&&o.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[o.map(c=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Hs(c.status)}`,children:Rs(c.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Gt,{value:c.uuid,onCopy:()=>oe(c.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),c.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:c.hwid,onClick:()=>oe(c.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:c.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:c.last_ip??"-"}),e.jsx("small",{children:c.first_ip?s("subscription.firstIp",{ip:c.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:c.user_agent??"",children:c.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:St(c.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:St(c.last_seen_at,"-")})]})]}),Us(c)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:b===c.id,onClick:()=>Be(c),children:[e.jsx(qn,{size:14}),s("subscription.unbind")]}),c.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:b===c.id,onClick:()=>wt(c),children:[e.jsx(Dt,{size:14}),s("subscription.ban")]}):null]}):null]},c.id)),!O&&o.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),ve>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:B<=1||O,onClick:()=>void it(B-1),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:B,total:ve})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:B>=ve||O,onClick:()=>void it(B+1),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null]})]})}):null,Xe?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>f(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:Xe.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>f(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Xe.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:Xe.url})]})]})}):null,k?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>H(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:k.id})}),e.jsx("p",{children:k.user_email??s("subscription.userId",{id:k.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>H(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ct,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:F.plan_id,onChange:c=>A(L=>({...L,plan_id:c.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),d.map(c=>e.jsxs("option",{value:c.id,children:["#",c.id," - ",c.name]},c.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:F.transfer_enable,onChange:c=>A(L=>({...L,transfer_enable:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:F.u,onChange:c=>A(L=>({...L,u:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:F.d,onChange:c=>A(L=>({...L,d:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:F.device_limit,onChange:c=>A(L=>({...L,device_limit:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:F.speed_limit,onChange:c=>A(L=>({...L,speed_limit:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:F.expired_at,onChange:c=>A(L=>({...L,expired_at:c.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:F.status,onChange:c=>A(L=>({...L,status:c.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:F.auto_renewal,onChange:c=>A(L=>({...L,auto_renewal:c.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:F.name_sni,onChange:c=>A(L=>({...L,name_sni:c.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:F.network_settings,onChange:c=>A(L=>({...L,network_settings:c.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:F.remarks,onChange:c=>A(L=>({...L,remarks:c.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>H(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:b===k.id,children:b===k.id?s("common.processing"):s("common.save")})]})]})]})}):null,ie?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ke(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:c=>c.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:ie.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>ke(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:de,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:ie.user_email??"",children:ie.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",ie.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:ue(ie.plan_id),children:ue(ie.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:Re.period,onChange:c=>Le(L=>({...L,period:c.target.value})),children:Gl.map(c=>e.jsx("option",{value:c,children:Zl(c,s)},c))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Re.total_amount,onChange:c=>Le(L=>({...L,total_amount:c.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ke(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:De,children:s(De?"common.processing":"common.save")})]})]})]})}):null]})}const qs=15,Vl=["email","user_id","node","hwid","user_agent","last_ip"];function Ht(n){return n?new Date(n*1e3).toLocaleString():"-"}function Ct(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let l=t,i=0;for(;l>=1024&&i<s.length-1;)l/=1024,i+=1;return`${l>=10||i===0?l.toFixed(0):l.toFixed(2)} ${s[i]}`}function ec(n){return["user_id","subscription_id","node","node_type","node_id"].includes(n)?"=":"like"}function tc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");default:return""}}function Bs(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function an(n){return(n.online_ips??[]).join(", ")||"-"}function on(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function nc(n){return String(n.hwid??"").trim()!==""}function sc(n){var d,r,g;const t=new URLSearchParams(n),s=(d=t.get("node_type"))==null?void 0:d.trim(),l=(r=t.get("node_id"))==null?void 0:r.trim();if(s&&l)return{field:"node",value:`${s}:${l}`};if(l)return{field:"node",value:l};const i=["node","hwid","user_agent","last_ip","email","user_id"];for(const x of i){const N=(g=t.get(x))==null?void 0:g.trim();if(N)return{field:x,value:N}}return null}function ic(){const n=Ue(),t=Yt(),{t:s}=xe(),[l,i]=a.useState([]),[d,r]=a.useState(0),[g,x]=a.useState(1),[N,h]=a.useState("email"),[j,m]=a.useState(""),[T,G]=a.useState(!0),[M,_]=a.useState(""),[$,C]=a.useState(null),[k,H]=a.useState(null),[F,A]=a.useState(null),b=a.useCallback(async(u=1,X="",U="email")=>{G(!0),_("");try{const ne=X.trim()?[{key:U,condition:ec(U),value:X.trim()}]:void 0,J=await xi(u,qs,ne);i(J.data),r(J.total),x(u)}catch(ne){_(ne instanceof Error?ne.message:s("device.loadFailed"))}finally{G(!1)}},[s]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const u=sc(t.search);if(u){h(u.field),m(u.value),b(1,u.value,u.field);return}b()},[b,n,t.search]),a.useEffect(()=>{if(F===null)return;function u(U){const ne=U.target;ne!=null&&ne.closest(".device-action-wrap")||A(null)}function X(U){U.key==="Escape"&&A(null)}return document.addEventListener("pointerdown",u),document.addEventListener("keydown",X),()=>{document.removeEventListener("pointerdown",u),document.removeEventListener("keydown",X)}},[F]);function P(u){u.preventDefault(),b(1,j,N)}function D(){if(m(""),t.search){n.replace("/device");return}b(1,"",N)}async function Q(u){var U;if(!u.hwid)return;const X=await Tt(u.hwid);(U=window.showToast)==null||U.call(window,s(X?"device.copySuccess":"common.copyFailed"),X?"success":"error")}async function o(u){var U;const X=await Tt(u.uuid);(U=window.showToast)==null||U.call(window,s(X?"device.copyUuidSuccess":"common.copyFailed"),X?"success":"error")}function w(u){var X;(X=window.showConfirm)==null||X.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var U,ne;C(u.id);try{await bi(u.id),(U=window.showToast)==null||U.call(window,s("device.unbindSuccess"),"success"),await b(g,j,N)}catch(J){(ne=window.showToast)==null||ne.call(window,J instanceof Error?J.message:s("device.unbindFailed"),"error")}finally{C(null)}}})}function R(u){var X;(X=window.showConfirm)==null||X.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var U,ne;C(u.id);try{await gi(u.id),(U=window.showToast)==null||U.call(window,s("device.banSuccess"),"success"),await b(g,j,N)}catch(J){(ne=window.showToast)==null||ne.call(window,J instanceof Error?J.message:s("device.banFailed"),"error")}finally{C(null)}}})}function S(u){var X;(X=window.showConfirm)==null||X.call(window,{message:s("device.resetConfirm",{user:u.user_email??`#${u.user_id}`}),onConfirm:async()=>{var U,ne;H(u.user_id);try{await zo(u.user_id),(U=window.showToast)==null||U.call(window,s("device.resetSuccess"),"success"),await b(g,j,N)}catch(J){(ne=window.showToast)==null||ne.call(window,J instanceof Error?J.message:s("device.resetFailed"),"error")}finally{H(null)}}})}function B(u){A(null),u()}function y(u,X){const U=X==="mobile"?-u.id:u.id,ne=F===U,J=nc(u);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${ne?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>A(ne?null:U),children:[s("device.action")," ",e.jsx(yt,{size:14})]}),ne?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[J?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:$===u.id,onClick:()=>B(()=>w(u)),children:[e.jsx(qn,{size:14}),s("device.unbind")]}),u.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:$===u.id,onClick:()=>B(()=>R(u)),children:[e.jsx(Dt,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:k===u.user_id,onClick:()=>B(()=>S(u)),children:[e.jsx(xa,{size:14}),s("device.resetUser")]})]}):null]})}const O=Math.ceil(d/qs);return e.jsxs(Ke,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .device-table {
          min-width: 1060px;
        }
        .mobile-device-list {
          display: none;
        }
        .device-user-cell {
          min-width: 190px;
          max-width: 240px;
        }
        .device-user-cell strong,
        .device-user-cell small {
          display: block;
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .device-user-cell small {
          color: var(--muted);
          margin-top: 4px;
        }
        .device-plan-line {
          color: var(--accent-strong) !important;
          font-weight: 800;
        }
        .device-traffic-cell {
          min-width: 132px;
        }
        .device-traffic-stack {
          display: grid;
          gap: 4px;
        }
        .device-traffic-stack strong {
          color: var(--text);
          font-size: 13px;
          white-space: nowrap;
        }
        .device-traffic-stack small {
          color: var(--muted);
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .device-info-cell {
          min-width: 300px;
          max-width: 380px;
        }
        .device-info-stack {
          display: grid;
          gap: 7px;
          min-width: 0;
        }
        .device-info-line {
          display: grid;
          grid-template-columns: 70px minmax(0, 1fr);
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .device-info-label {
          color: var(--muted);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .device-info-value,
        .device-info-value span,
        .device-info-value small {
          min-width: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .device-info-copy {
          width: 100%;
          max-width: 100%;
          justify-content: flex-start;
        }
        .device-connection {
          min-width: 190px;
        }
        .online-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          border-radius: 999px;
          padding: 4px 8px;
          font-size: 12px;
          font-weight: 700;
        }
        .online-badge.online {
          color: #047857;
          background: rgba(16, 185, 129, 0.12);
        }
        .online-badge.offline {
          color: #64748b;
          background: rgba(100, 116, 139, 0.12);
        }
        .device-connection small {
          display: block;
          max-width: 220px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .device-time-cell {
          min-width: 170px;
        }
        .device-time-stack {
          display: grid;
          gap: 6px;
        }
        .device-time-line {
          display: grid;
          gap: 2px;
        }
        .device-time-line small {
          color: var(--muted);
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
        }
        .device-time-line span {
          white-space: nowrap;
        }
        .device-action-cell {
          position: relative;
          width: 112px;
        }
        .device-action-wrap {
          position: relative;
          width: fit-content;
        }
        .device-action-trigger {
          border: 1px solid var(--line);
          background: var(--surface);
          color: var(--text);
          gap: 6px;
          padding: 7px 10px;
        }
        .device-action-trigger:hover {
          border-color: var(--accent);
        }
        .device-action-menu {
          min-width: 160px;
        }
        .device-action-menu button:disabled {
          cursor: not-allowed;
          opacity: 0.55;
        }
        @media (max-width: 768px) {
          .device-desktop-panel {
            display: none !important;
          }
          .mobile-device-list {
            display: grid;
            gap: 12px;
          }
          .mobile-device-card {
            display: grid;
            gap: 12px;
            border: 1px solid var(--line);
            border-radius: 14px;
            background: var(--surface);
            padding: 14px;
            box-shadow: var(--shadow);
          }
          .mobile-device-card-head {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--line);
          }
          .mobile-device-user {
            min-width: 0;
          }
          .mobile-device-user strong,
          .mobile-device-user small {
            display: block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .mobile-device-user small {
            color: var(--muted);
            font-size: 12px;
            margin-top: 3px;
          }
          .mobile-device-user .device-plan-line {
            color: var(--accent-strong) !important;
          }
          .mobile-device-status {
            display: grid;
            justify-items: end;
            gap: 6px;
            flex-shrink: 0;
          }
          .mobile-device-grid {
            display: grid;
            gap: 9px;
          }
          .mobile-device-row {
            display: grid;
            grid-template-columns: minmax(86px, 0.42fr) minmax(0, 1fr);
            align-items: start;
            gap: 10px;
            font-size: 13px;
          }
          .mobile-device-row span:first-child {
            color: var(--muted);
            font-size: 11px;
            font-weight: 900;
            text-transform: uppercase;
          }
          .mobile-device-row span:last-child,
          .mobile-device-row small {
            min-width: 0;
            overflow: hidden;
            color: var(--text);
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .mobile-device-copy {
            max-width: 100%;
          }
          .mobile-device-info {
            display: grid;
            gap: 8px;
            padding: 10px;
            border: 1px solid var(--line);
            border-radius: 10px;
            background: var(--surface-soft);
          }
          .mobile-device-traffic {
            padding: 10px;
            border: 1px solid var(--line);
            border-radius: 10px;
            background: var(--surface-soft);
          }
          .mobile-device-actions {
            display: block;
            padding-top: 10px;
            border-top: 1px solid var(--line);
          }
          .mobile-device-actions .device-action-wrap,
          .mobile-device-actions .device-action-trigger {
            width: 100%;
          }
          .mobile-device-actions .device-action-trigger {
            justify-content: center;
            min-height: 40px;
          }
          .mobile-device-actions .device-action-menu {
            left: 0;
            right: 0;
            min-width: 100%;
          }
          .device-filter-form {
            display: grid !important;
            grid-template-columns: 1fr 1fr;
          }
          .device-filter-form .filter-select {
            grid-column: 1 / -1;
            width: 100% !important;
          }
        }
        @media (max-width: 460px) {
          .device-filter-form {
            grid-template-columns: 1fr;
          }
          .mobile-device-row {
            grid-template-columns: 1fr;
            gap: 3px;
          }
        }
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:d})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:T,onClick:()=>void b(g,j,N),children:[e.jsx(Oe,{size:16}),s(T?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:P,children:[e.jsx("select",{className:"config-input filter-select",value:N,onChange:u=>h(u.target.value),children:Vl.map(u=>e.jsx("option",{value:u,children:tc(u,s)},u))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(gn,{size:16}),e.jsx("input",{className:"config-input",value:j,onChange:u=>m(u.target.value),placeholder:s(N==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(Kt,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:D,children:s("device.clear")})]}),M?e.jsx("div",{className:"form-error",children:M}):null,T&&l.length===0?e.jsx($e,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[l.map(u=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:u.user_email??"-"}),e.jsxs("small",{children:["ID: ",u.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[u.plan_name??"-",u.user_plan_id?` #${u.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Bs(u.status,s)}),e.jsxs("span",{className:`online-badge ${u.is_online?"online":"offline"}`,children:[u.is_online?e.jsx(ms,{size:14}):e.jsx(us,{size:14}),u.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Gt,{value:u.uuid,onCopy:()=>o(u),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),u.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:u.hwid,onClick:()=>Q(u),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:u.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:u.user_agent??"",children:u.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${u.last_ip??"-"} / ${u.first_ip??"-"}`,children:[u.last_ip??"-",u.first_ip?` (${u.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${Ct(u.device_upload)} / ${s("device.download")}: ${Ct(u.device_download)}`,children:[Ct(u.device_used_traffic)," / ",s("device.upload"),": ",Ct(u.device_upload)," / ",s("device.download"),": ",Ct(u.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${an(u)} / ${on(u)}`,children:[s("device.onlineIps"),": ",an(u)," / ",s("device.onlineNodes"),": ",on(u)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Ht(u.first_seen_at)," / ",s("device.lastSeen"),": ",Ht(u.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:y(u,"mobile")})]},u.id)),!T&&l.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[l.map(u=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:u.user_email??"-"}),e.jsxs("small",{children:["ID: ",u.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[u.plan_name??"-",u.user_plan_id?` #${u.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Bs(u.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:Ct(u.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",Ct(u.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",Ct(u.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${u.is_online?"online":"offline"}`,children:[u.is_online?e.jsx(ms,{size:14}):e.jsx(us,{size:14}),u.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:an(u),children:[s("device.onlineIps"),": ",an(u)]}),e.jsxs("small",{title:on(u),children:[s("device.onlineNodes"),": ",on(u)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Ht(u.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Gt,{value:u.uuid,onCopy:()=>o(u),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),u.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:u.hwid,onClick:()=>Q(u),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:u.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:u.user_agent??"",children:u.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:u.last_ip??"-"}),e.jsx("small",{children:u.first_ip?`${s("device.firstIp")}: ${u.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Ht(u.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Ht(u.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:y(u,"desktop")})]},u.id)),!T&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),O>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:g<=1||T,onClick:()=>void b(g-1,j,N),children:[e.jsx(vt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:g,total:O})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:g>=O||T,onClick:()=>void b(g+1,j,N),children:[s("device.next"),e.jsx(jt,{size:14})]})]}):null]})]})}const ac={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ss(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return ss(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Gs(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:ss(n.plan_id)}:{...ac}}function Dn(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function oc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function rc(n){return Number(n)===1}function Ws(n,t,s){if(!n.length)return s("webcon.allPlans");const l=new Map(t.map(i=>[Number(i.id),i.name]));return n.map(i=>l.get(i)??`#${i}`).join(", ")}function zt(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function lc(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState([]),[r,g]=a.useState(null),[x,N]=a.useState(!0),[h,j]=a.useState(!1),[m,T]=a.useState(null),[G,M]=a.useState(""),_=a.useCallback(async()=>{N(!0),M("");try{const[b,P]=await Promise.all([qo(),$t()]);l(b),d(P)}catch(b){M(b instanceof Error?b.message:t("webcon.toastLoadFailed"))}finally{N(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}_()},[_,n]);const $=a.useMemo(()=>i.map(b=>({id:Number(b.id),name:b.name})),[i]);function C(b,P){g(D=>D&&{...D,[b]:P})}function k(b,P){g(D=>{if(!D)return D;const Q=P?Array.from(new Set([...D.plan_ids,b])):D.plan_ids.filter(o=>o!==b);return{...D,plan_ids:Q}})}async function H(b){var D,Q;if(b.preventDefault(),!r)return;const P=Dn(r.domain);j(!0),M("");try{await Bo({id:r.id,email:r.email.trim(),domain:P,title:r.title.trim(),description:r.description.trim()||null,logo:r.logo.trim()||null,background_url:r.background_url.trim()||null,custom_html:r.custom_html||null,plan_ids:r.plan_ids,plan_id:r.plan_ids}),g(null),(D=window.showToast)==null||D.call(window,t("webcon.toastSaveSuccess"),"success"),await _()}catch(o){const w=o instanceof Error?o.message:t("webcon.toastSaveFailed");M(w),(Q=window.showToast)==null||Q.call(window,w,"error")}finally{j(!1)}}async function F(b){var P,D;T(b.id);try{await Wo(b.id),(P=window.showToast)==null||P.call(window,t("webcon.toastToggleSuccess"),"success"),await _()}catch(Q){const o=Q instanceof Error?Q.message:t("webcon.toastToggleFailed");M(o),(D=window.showToast)==null||D.call(window,o,"error")}finally{T(null)}}function A(b){var P;(P=window.showConfirm)==null||P.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var D,Q;T(b.id),M("");try{await Go(b.id),(D=window.showToast)==null||D.call(window,t("webcon.toastDeleteSuccess"),"success"),await _()}catch(o){const w=o instanceof Error?o.message:t("webcon.toastDeleteFailed");M(w),(Q=window.showToast)==null||Q.call(window,w,"error")}finally{T(null)}}})}return e.jsxs(Ke,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .webcon-toolbar {
          align-items: center;
          gap: 12px;
        }
        .webcon-table {
          min-width: 1060px;
          table-layout: fixed;
        }
        .webcon-table th:nth-child(1) { width: 64px; }
        .webcon-table th:nth-child(2) { width: 112px; }
        .webcon-table th:nth-child(3) { width: 230px; }
        .webcon-table th:nth-child(4) { width: 210px; }
        .webcon-table th:nth-child(5) { width: 190px; }
        .webcon-table th:nth-child(6) { width: 210px; }
        .webcon-table th:nth-child(7) { width: 170px; }
        .webcon-table th:nth-child(8) { width: 140px; }
        .webcon-owner,
        .webcon-domain,
        .webcon-title,
        .webcon-plan-list {
          display: grid;
          gap: 4px;
          min-width: 0;
        }
        .webcon-owner strong,
        .webcon-domain strong,
        .webcon-title strong,
        .webcon-plan-list strong {
          overflow: hidden;
          color: var(--text);
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .webcon-owner small,
        .webcon-domain small,
        .webcon-title small,
        .webcon-plan-list small {
          overflow: hidden;
          color: var(--muted);
          font-size: 12px;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .webcon-branding {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: var(--muted);
        }
        .webcon-branding span {
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .webcon-actions {
          justify-content: flex-end;
        }
        .webcon-modal {
          width: min(720px, calc(100vw - 24px));
          max-height: min(90vh, 780px);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .webcon-form {
          display: grid;
          gap: 16px;
          overflow-y: auto;
          padding: 22px;
        }
        .webcon-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 14px;
        }
        .webcon-field {
          display: grid;
          gap: 7px;
        }
        .webcon-field.full {
          grid-column: 1 / -1;
        }
        .webcon-field-label {
          color: var(--text);
          font-size: 13px;
          font-weight: 800;
        }
        .webcon-field-label small {
          margin-left: 4px;
          color: var(--rose);
        }
        .webcon-plan-picker {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
          gap: 8px;
          max-height: 220px;
          overflow: auto;
          padding: 10px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: var(--surface-soft);
        }
        .webcon-plan-option {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 36px;
          padding: 8px 10px;
          border: 1px solid var(--line);
          border-radius: 10px;
          background: var(--surface);
          cursor: pointer;
          font-size: 13px;
        }
        .webcon-plan-option input {
          width: 16px;
          height: 16px;
          accent-color: var(--accent);
        }
        .webcon-help {
          color: var(--muted);
          font-size: 12px;
          line-height: 1.4;
        }
        .webcon-preview {
          display: grid;
          grid-template-columns: 42px minmax(0, 1fr);
          gap: 10px;
          align-items: center;
          padding: 10px;
          border: 1px solid var(--line);
          border-radius: 12px;
          background: var(--surface-soft);
        }
        .webcon-preview-logo {
          display: grid;
          width: 42px;
          height: 42px;
          place-items: center;
          overflow: hidden;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--line);
        }
        .webcon-preview-logo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .webcon-preview strong,
        .webcon-preview span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .webcon-preview span {
          color: var(--muted);
          font-size: 12px;
        }
        .webcon-modal .modal-actions {
          position: sticky;
          bottom: -22px;
          z-index: 2;
          margin: 0 -22px -22px;
          padding: 14px 22px;
          border-top: 1px solid var(--line);
          background: color-mix(in srgb, var(--surface) 94%, transparent);
          backdrop-filter: blur(10px);
        }
        @media (max-width: 768px) {
          .webcon-toolbar,
          .webcon-toolbar .button-row,
          .webcon-actions,
          .webcon-modal .modal-actions {
            align-items: stretch;
            flex-direction: column;
          }
          .webcon-toolbar .ghost-button,
          .webcon-modal .modal-actions button {
            width: 100%;
            justify-content: center;
          }
          .webcon-field-grid {
            grid-template-columns: 1fr;
          }
          .webcon-plan-picker {
            grid-template-columns: 1fr;
          }
        }
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:x,onClick:()=>void _(),children:[e.jsx(Oe,{size:16}),t(x?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(Gs()),children:[e.jsx(rt,{size:16}),t("webcon.add")]})]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,x&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(b=>{var D;const P=ss(b.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",b.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${rc(b.status)?"active":""}`,type:"button",disabled:m===b.id,onClick:()=>void F(b),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:b.email??"-"}),e.jsx("small",{children:Number(b.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:b.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((D=window.settings)==null?void 0:D.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:b.title||"-"}),e.jsx("small",{children:b.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(ia,{size:13}),b.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(Jt,{size:13}),b.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:Ws(P,$,t)}),e.jsx("small",{children:P.length?t("webcon.selectedCount",{count:P.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:oc(b.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(Gs(b)),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:m===b.id,onClick:()=>A(b),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},b.id)}),!x&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),r?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>g(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:b=>b.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:r.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:r.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>g(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:H,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:r.email,onChange:b=>C("email",b.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:r.domain,onChange:b=>C("domain",b.target.value),onBlur:b=>C("domain",Dn(b.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:r.title,onChange:b=>C("title",b.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.description")),e.jsx("input",{className:"config-input",value:r.description,onChange:b=>C("description",b.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:r.logo,onChange:b=>C("logo",b.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[zt(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:r.background_url,onChange:b=>C("background_url",b.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[zt(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[$.map(b=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:r.plan_ids.includes(b.id),onChange:P=>k(b.id,P.target.checked)}),e.jsx("span",{children:b.name})]},b.id)),$.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[zt(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:r.custom_html,onChange:b=>C("custom_html",b.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:r.logo?e.jsx("img",{src:r.logo,alt:""}):e.jsx(ma,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:r.title||t("webcon.previewTitle")}),e.jsx("span",{children:Dn(r.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(Qn,{size:12})," ",Ws(r.plan_ids,$,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Ks(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Ln(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function cc(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(null),[r,g]=a.useState(!0),[x,N]=a.useState(!1),[h,j]=a.useState(""),[m,T]=a.useState(""),G=a.useCallback(async()=>{g(!0),j("");try{l(await Po())}catch(C){j(C instanceof Error?C.message:t("notice.loadFailed"))}finally{g(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function M(C){var k,H;if(C.preventDefault(),!!i){N(!0),j(""),T("");try{const F=i.tags?i.tags.split(",").map(A=>A.trim()).filter(Boolean):[];await $o({id:i.id,title:i.title,content:i.content,img_url:i.img_url||null,tags:F.length?F:null}),d(null),(k=window.showToast)==null||k.call(window,t("notice.saveSuccess"),"success"),await G()}catch(F){(H=window.showToast)==null||H.call(window,F instanceof Error?F.message:t("notice.saveFailed"),"error")}finally{N(!1)}}}async function _(C){var k;try{await Mo(C),await G()}catch(H){(k=window.showToast)==null||k.call(window,H instanceof Error?H.message:t("notice.toggleFailed"),"error")}}async function $(C){var k;(k=window.showConfirm)==null||k.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var H,F;try{await Eo(C),(H=window.showToast)==null||H.call(window,t("notice.deleteSuccess"),"success"),await G()}catch(A){(F=window.showToast)==null||F.call(window,A instanceof Error?A.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(Ke,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Mobile Notice Card Styles */
        .mobile-notice-list {
          display: none !important;
        }

        @media (max-width: 860px) {
          .hide-on-mobile {
            display: none !important;
          }

          /* Toolbar Stacking */
          .toolbar-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .toolbar-row .button-row {
            width: 100% !important;
            display: flex !important;
            gap: 8px !important;
            justify-content: stretch !important;
          }
          .toolbar-row .button-row button {
            flex: 1 !important;
            min-height: 40px !important;
            padding: 0 10px !important;
          }

          .mobile-notice-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 8px !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }

          .notice-mobile-card {
            background: var(--surface) !important;
            border: 1px solid var(--line) !important;
            border-radius: 16px !important;
            box-shadow: var(--shadow) !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }

          .notice-mobile-card.show-active {
            border-color: var(--accent) !important;
            box-shadow: 0 4px 20px var(--accent-soft) !important;
          }

          .notice-mobile-card:active {
            transform: scale(0.99) !important;
          }

          .notice-mobile-card .card-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 12px 16px !important;
            background: var(--surface-soft) !important;
            border-bottom: 1px solid var(--line) !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
          }

          .notice-mobile-card .header-left {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .notice-mobile-card .id-tag {
            font-family: monospace !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            color: var(--muted) !important;
            font-weight: 700 !important;
            font-size: 11px !important;
            padding: 2px 6px !important;
            border-radius: 6px !important;
            flex-shrink: 0 !important;
          }

          .notice-mobile-card .status-switch {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            padding: 4px 10px !important;
            border-radius: 999px !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            color: var(--muted) !important;
            cursor: pointer !important;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
            flex-shrink: 0 !important;
          }
          
          .notice-mobile-card .status-switch.enabled {
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
            border-color: rgba(var(--accent-rgb), 0.3) !important;
          }
          
          .notice-mobile-card .status-switch::before {
            content: "" !important;
            display: inline-block !important;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background: var(--muted) !important;
            transition: all 0.2s ease !important;
          }
          
          .notice-mobile-card .status-switch.enabled::before {
            background: var(--accent-strong) !important;
            box-shadow: 0 0 8px var(--accent) !important;
          }

          .notice-mobile-card .card-body {
            padding: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .notice-mobile-card .card-title {
            margin: 0 !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            color: var(--text) !important;
            line-height: 1.4 !important;
          }

          .notice-mobile-card .notice-tags {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            flex-wrap: wrap !important;
          }

          .notice-mobile-card .tag-badge {
            background: var(--surface-soft) !important;
            color: var(--text) !important;
            border: 1px solid var(--line) !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            font-size: 11px !important;
            font-weight: 600 !important;
          }

          .notice-mobile-card .tag-badge.empty-tag {
            color: var(--muted) !important;
            border-style: dashed !important;
          }

          .notice-mobile-card .created-time {
            font-size: 11px !important;
            color: var(--muted) !important;
            margin: 0 !important;
          }

          .notice-mobile-card .card-footer {
            display: flex !important;
            align-items: center !important;
            justify-content: stretch !important;
            padding: 12px 16px !important;
            border-top: 1px solid var(--line) !important;
            background: var(--surface-soft) !important;
            gap: 8px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .notice-mobile-card .action-btn {
            height: 34px !important;
            flex: 1 !important;
            min-width: 0 !important;
            border-radius: 8px !important;
            border: 1px solid var(--line) !important;
            background: var(--surface) !important;
            color: var(--text) !important;
            font-weight: 600 !important;
            font-size: 12px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
          }

          .notice-mobile-card .action-btn:active {
            transform: scale(0.95) !important;
            background: var(--line) !important;
          }

          .notice-mobile-card .action-btn.edit-btn {
            border-color: var(--accent-soft) !important;
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
          }

          .notice-mobile-card .action-btn.delete-btn {
            border-color: rgba(244, 63, 94, 0.1) !important;
            background: rgba(244, 63, 94, 0.1) !important;
            color: rgb(244, 63, 94) !important;
          }

          .notice-mobile-card .action-btn.delete-btn:active {
            background: rgba(244, 63, 94, 0.2) !important;
          }
        }
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:r,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(Ln()),children:[e.jsx(rt,{size:16}),t("notice.addNotice")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,m?e.jsx("div",{className:"form-success",children:m}):null,r&&s.length===0?e.jsx($e,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(C=>{var k;return e.jsxs("tr",{children:[e.jsx("td",{children:C.id}),e.jsx("td",{children:e.jsx("strong",{children:C.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${C.show?"active":""}`,type:"button",onClick:()=>void _(C.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((k=C.tags)==null?void 0:k.map((H,F)=>e.jsx("span",{className:"tag",children:H},F)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:Ks(C.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>d(Ln(C)),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void $(C.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},C.id)}),!r&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(C=>e.jsxs("div",{className:`notice-mobile-card ${C.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",C.id]})}),e.jsx("button",{className:`admin-switch ${C.show?"active":""}`,type:"button",onClick:()=>void _(C.id),"aria-label":C.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:C.title}),e.jsx("div",{className:"notice-tags",children:C.tags&&C.tags.length>0?C.tags.map((k,H)=>e.jsx("span",{className:"tag-badge",children:k},H)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",Ks(C.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>d(Ln(C)),children:[e.jsx(We,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void $(C.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},C.id)),!r&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:i.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:M,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:i.title,onChange:C=>d({...i,title:C.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:i.content,onChange:C=>d({...i,content:C.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:i.img_url,onChange:C=>d({...i,img_url:C.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:i.tags,onChange:C=>d({...i,tags:C.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"notice.saving":"common.save")]})]})]})]})}):null]})}function In(n){return new Date(n*1e3).toLocaleString("vi-VN")}function dc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,l,i)=>i.slice(l+t.length,l+t.length+2)==="//"?t:`${s}: `):""}const Ys=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Fn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function pc(){var O;const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(null),[r,g]=a.useState(!1),[x,N]=a.useState(null),[h,j]=a.useState(""),[m,T]=a.useState(!0),[G,M]=a.useState(!1),[_,$]=a.useState(!1),[C,k]=a.useState(""),H=a.useRef(null),[F,A]=a.useState([]),[b,P]=a.useState(null),D=a.useCallback(async()=>{T(!0),k("");try{l(await Do())}catch(u){k(u instanceof Error?u.message:"Load failed")}finally{T(!1)}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}D(),$t().then(u=>{u&&A(u)}).catch(()=>{})},[D,n]),a.useEffect(()=>{var u;(u=H.current)==null||u.scrollIntoView({behavior:"smooth"})},[i]);async function Q(u){var X;N(u),j(""),d(null),P(null),g(!0);try{const U=await wn(u);if(d(U),U&&U.user_id)try{const ne=await Gn(U.user_id);ne&&ne.data&&P(ne.data)}catch(ne){console.error("Failed to load user info:",ne)}}catch{(X=window.showToast)==null||X.call(window,"Failed to load message thread","error")}finally{g(!1)}}async function o(u){var X,U;if(u.preventDefault(),!(!x||!h.trim())){M(!0),k("");try{await Lo(x,h),j(""),(X=window.showToast)==null||X.call(window,"Reply sent!","success");try{const ne=await wn(x);d(ne)}catch{}await D()}catch(ne){(U=window.showToast)==null||U.call(window,ne instanceof Error?ne.message:"Reply failed","error")}finally{M(!1)}}}async function w(u){var X;(X=window.showConfirm)==null||X.call(window,{message:"Close this ticket?",onConfirm:async()=>{var U,ne;k("");try{await Io(u),(U=window.showToast)==null||U.call(window,"Ticket closed!","success"),x===u&&(N(null),d(null)),await D()}catch(J){k(J instanceof Error?J.message:"Close failed"),(ne=window.showToast)==null||ne.call(window,J instanceof Error?J.message:"Close failed","error")}}})}function R(){var ne,J,ie;if(!i||!b)return;const u=Number(i.withdraw_amount??0),X=Number(b.commission_balance??0);if(i.level!==3||u<=0){(ne=window.showToast)==null||ne.call(window,t("ticket.noWithdrawAmount"),"error");return}if(X<u){(J=window.showToast)==null||J.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const U=`${Ze(u)} ${t("ticket.currencyUnit")}`;(ie=window.showConfirm)==null||ie.call(window,{message:t("ticket.confirmCommissionMessage",{amount:U}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var ke,Re,Le;$(!0),k("");try{const Ee=((ke=(await Fo(i.id)).data)==null?void 0:ke.amount)??u,Se=`${Ze(Ee)} ${t("ticket.currencyUnit")}`,ge=await wn(i.id);if(d(ge),ge!=null&&ge.user_id){const Ce=await Gn(ge.user_id);P(Ce.data)}await D(),(Re=window.showToast)==null||Re.call(window,t("ticket.commissionConfirmSuccess",{amount:Se}),"success")}catch(De){(Le=window.showToast)==null||Le.call(window,De instanceof Error?De.message:t("ticket.commissionConfirmFailed"),"error")}finally{$(!1)}}})}const S=Number((b==null?void 0:b.commission_balance)??0),B=Number((i==null?void 0:i.withdraw_amount)??0),y=(i==null?void 0:i.level)===3&&B>0&&S>=B;return e.jsxs(Ke,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]})})]}),C?e.jsx("div",{className:"form-error",children:C}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(u=>{const X=Ys(u.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:u.id}),e.jsx("td",{children:e.jsx("strong",{children:u.subject})}),e.jsxs("td",{children:["#",u.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Fn(u.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${X.cls}`,children:X.label})}),e.jsx("td",{children:u.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:In(u.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:u.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(u.id),children:[e.jsx(Ut,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(u.id),children:[e.jsx(Rn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(u.id),children:[e.jsx(Ut,{size:14}),t("ticket.viewHistory")]})})})]},u.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(u=>{const X=Ys(u.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:u.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Fn(u.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",u.id]})]}),e.jsx("span",{className:`status-pill ${X.cls}`,children:X.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",u.user_id]})]}),e.jsx("span",{children:u.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:In(u.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:u.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(u.id),children:[e.jsx(Ut,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(u.id),children:[e.jsx(Rn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(u.id),children:[e.jsx(Ut,{size:14}),t("ticket.viewHistory")]})})]},u.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),x!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i?`${t("ticket.ticketDetail")}: ${i.subject}`:`${t("ticket.ticketDetail")} #${x}`}),e.jsxs("p",{children:[t("ticket.user"),": #",i==null?void 0:i.user_id," | ",t("ticket.level"),": ",i!=null?Fn(i.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{N(null),d(null)},children:e.jsx(Ne,{size:18})})]}),b&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:b.email,children:b.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((O=F.find(u=>u.id===b.plan_id))==null?void 0:O.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Ze(b.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Ze(b.commission_balance)," ",t("ticket.currencyUnit")]})]}),(i==null?void 0:i.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:B>0?`${Ze(B)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:b.expired_at?new Date(b.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(i==null?void 0:i.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:R,disabled:_||!y,children:[e.jsx(Yi,{size:14}),t(_?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),r?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx($e,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[i!=null&&i.message&&i.message.length>0?i.message.map(u=>{const X=u.is_me,U=X?u.user_email||t("ticket.staff"):`${t("ticket.user")} #${u.user_id}`;return e.jsxs("div",{className:`chat-message ${X?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:dc(u.message)}),e.jsxs("div",{className:"chat-meta",children:[U," • ",In(u.created_at)]})]},u.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:H})]}),(i==null?void 0:i.status)===0?e.jsx("form",{className:"modal-form",onSubmit:o,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:h,onChange:u=>j(u.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G||!h.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(ai,{size:14}),G?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .user-details-bar {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
          padding: 14px 16px;
          background: var(--surface-soft);
          border-bottom: 1px solid var(--line);
          font-size: 13px;
        }
        .user-details-item {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .details-label {
          font-size: 11px;
          color: var(--muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }
        .details-value {
          font-weight: 500;
          color: var(--text);
          word-break: break-all;
        }
        .commission-value {
          color: var(--accent-strong);
          font-weight: 800;
        }
        .user-details-actions {
          grid-column: 1 / -1;
          display: flex;
          justify-content: flex-end;
        }
        .commission-confirm-button:disabled {
          cursor: not-allowed;
          opacity: 0.58;
        }
        @media (max-width: 480px) {
          .user-details-bar {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 10px 14px;
          }
          .user-details-actions {
            justify-content: stretch;
          }
          .user-details-actions .mini-button {
            width: 100%;
            justify-content: center;
          }
        }
        .chat-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          background: var(--surface-soft);
          border-radius: 8px;
          border: 1px solid var(--line);
          min-height: 250px;
          margin-bottom: 16px;
        }
        .chat-message {
          display: flex;
          flex-direction: column;
          max-width: 80%;
        }
        .chat-message.me {
          align-self: flex-end;
          align-items: flex-end;
        }
        .chat-message.other {
          align-self: flex-start;
          align-items: flex-start;
        }
        .chat-bubble {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13.5px;
          line-height: 1.45;
          word-break: break-word;
          white-space: pre-wrap;
        }
        .chat-message.me .chat-bubble {
          background: linear-gradient(135deg, var(--accent), var(--accent-strong));
          color: #ffffff;
          border-bottom-right-radius: 2px;
        }
        .chat-message.other .chat-bubble {
          background: var(--surface);
          color: var(--text);
          border-bottom-left-radius: 2px;
          border: 1px solid var(--line);
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
        }
        .chat-meta {
          font-size: 10.5px;
          color: var(--muted);
          margin-top: 4px;
        }

        @media (max-width: 768px) {
          .mobile-ticket-list {
            display: flex !important;
            flex-direction: column;
            gap: 12px;
          }
          .mobile-ticket-card {
            background: var(--surface);
            border: 1px solid var(--line);
            border-radius: 12px;
            padding: 16px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow);
          }
          .mobile-card-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            gap: 8px;
          }
          .mobile-card-title {
            font-size: 14.5px;
            font-weight: 700;
            color: var(--text);
            line-height: 1.35;
          }
          .mobile-card-body {
            display: flex;
            flex-direction: column;
            gap: 6px;
            font-size: 13px;
            color: var(--text-muted);
          }
          .mobile-card-body-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .mobile-card-actions {
            display: flex;
            justify-content: flex-end;
            gap: 8px;
            border-top: 1px solid var(--line);
            padding-top: 10px;
            margin-top: 4px;
          }
        }
        @media (min-width: 769px) {
          .mobile-ticket-list {
            display: none !important;
          }
        }
      `}})]})}function Js(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const Zs={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Qs(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function uc(){const n=Ue(),{t}=xe(),[s,l]=a.useState([]),[i,d]=a.useState(null),[r,g]=a.useState(!0),[x,N]=a.useState(!1),[h,j]=a.useState(""),[m,T]=a.useState(""),G=a.useCallback(async()=>{g(!0),j("");try{l(await Ao())}catch(k){j(k instanceof Error?k.message:t("knowledge.loadFailed"))}finally{g(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function M(k){var H;try{const F=await Oo(k.id);d(Qs(F))}catch(F){(H=window.showToast)==null||H.call(window,F instanceof Error?F.message:t("knowledge.detailFailed"),"error")}}async function _(k){var H,F;if(k.preventDefault(),!!i){N(!0),j(""),T("");try{await Ro({id:i.id,category:i.category,title:i.title,body:i.body,language:i.language||null,sort:i.sort?Number(i.sort):null}),d(null),(H=window.showToast)==null||H.call(window,t("knowledge.saveSuccess"),"success"),await G()}catch(A){(F=window.showToast)==null||F.call(window,A instanceof Error?A.message:t("knowledge.saveFailed"),"error")}finally{N(!1)}}}async function $(k){var H;try{await Uo(k),await G()}catch(F){(H=window.showToast)==null||H.call(window,F instanceof Error?F.message:t("knowledge.toggleFailed"),"error")}}async function C(k){var H;(H=window.showConfirm)==null||H.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var F,A;try{await Ho(k),(F=window.showToast)==null||F.call(window,t("knowledge.deleteSuccess"),"success"),await G()}catch(b){(A=window.showToast)==null||A.call(window,b instanceof Error?b.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(Ke,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Mobile Knowledge Card Styles */
        .mobile-knowledge-list {
          display: none !important;
        }

        @media (max-width: 860px) {
          .mobile-knowledge-list {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
            margin-top: 8px !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            box-sizing: border-box !important;
          }

          .knowledge-mobile-card {
            background: var(--surface) !important;
            border: 1px solid var(--line) !important;
            border-radius: 16px !important;
            box-shadow: var(--shadow) !important;
            overflow: hidden !important;
            display: flex !important;
            flex-direction: column !important;
            transition: transform 0.2s ease, box-shadow 0.2s ease !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            margin: 0 !important;
            box-sizing: border-box !important;
          }

          .knowledge-mobile-card.show-active {
            border-color: var(--accent) !important;
            box-shadow: 0 4px 20px var(--accent-soft) !important;
          }

          .knowledge-mobile-card:active {
            transform: scale(0.99) !important;
          }

          .knowledge-mobile-card .card-header {
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
            padding: 12px 16px !important;
            background: var(--surface-soft) !important;
            border-bottom: 1px solid var(--line) !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
            flex-wrap: wrap !important;
            gap: 8px !important;
          }

          .knowledge-mobile-card .header-left {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            min-width: 0 !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }

          .knowledge-mobile-card .id-tag {
            font-family: monospace !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            color: var(--muted) !important;
            font-weight: 700 !important;
            font-size: 11px !important;
            padding: 2px 6px !important;
            border-radius: 6px !important;
            flex-shrink: 0 !important;
          }

          .knowledge-mobile-card .sort-tag {
            background: var(--surface-soft) !important;
            color: var(--text) !important;
            border: 1px solid var(--line) !important;
            font-size: 10px !important;
            font-weight: 700 !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            flex-shrink: 0 !important;
          }

          .knowledge-mobile-card .status-switch {
            display: flex !important;
            align-items: center !important;
            gap: 6px !important;
            background: var(--surface-soft) !important;
            border: 1px solid var(--line) !important;
            padding: 4px 10px !important;
            border-radius: 999px !important;
            font-size: 11px !important;
            font-weight: 700 !important;
            color: var(--muted) !important;
            cursor: pointer !important;
            transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
            flex-shrink: 0 !important;
          }
          
          .knowledge-mobile-card .status-switch.enabled {
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
            border-color: rgba(var(--accent-rgb), 0.3) !important;
          }
          
          .knowledge-mobile-card .status-switch::before {
            content: "" !important;
            display: inline-block !important;
            width: 8px !important;
            height: 8px !important;
            border-radius: 50% !important;
            background: var(--muted) !important;
            transition: all 0.2s ease !important;
          }
          
          .knowledge-mobile-card .status-switch.enabled::before {
            background: var(--accent-strong) !important;
            box-shadow: 0 0 8px var(--accent) !important;
          }

          .knowledge-mobile-card .card-body {
            padding: 16px !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 12px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .knowledge-mobile-card .card-title {
            margin: 0 !important;
            font-size: 15px !important;
            font-weight: 700 !important;
            color: var(--text) !important;
            line-height: 1.4 !important;
          }

          .knowledge-mobile-card .card-meta {
            display: flex !important;
            align-items: center !important;
            gap: 8px !important;
            flex-wrap: wrap !important;
          }

          .knowledge-mobile-card .category-badge {
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
            border: 1px solid rgba(var(--accent-rgb), 0.15) !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            font-size: 11px !important;
            font-weight: 700 !important;
          }

          .knowledge-mobile-card .lang-badge {
            background: var(--surface-soft) !important;
            color: var(--text) !important;
            border: 1px solid var(--line) !important;
            padding: 2px 8px !important;
            border-radius: 6px !important;
            font-size: 11px !important;
            font-weight: 600 !important;
          }

          .knowledge-mobile-card .created-time {
            font-size: 11px !important;
            color: var(--muted) !important;
            margin: 0 !important;
          }

          .knowledge-mobile-card .card-footer {
            display: flex !important;
            align-items: center !important;
            padding: 12px 16px !important;
            border-top: 1px solid var(--line) !important;
            background: var(--surface-soft) !important;
            gap: 8px !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            min-width: 0 !important;
          }

          .knowledge-mobile-card .action-btn {
            height: 34px !important;
            flex: 1 !important;
            min-width: 0 !important;
            border-radius: 8px !important;
            border: 1px solid var(--line) !important;
            background: var(--surface) !important;
            color: var(--text) !important;
            font-weight: 600 !important;
            font-size: 12px !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 6px !important;
            cursor: pointer !important;
            transition: all 0.2s ease !important;
          }

          .knowledge-mobile-card .action-btn:active {
            transform: scale(0.95) !important;
            background: var(--line) !important;
          }

          .knowledge-mobile-card .action-btn.edit-btn {
            border-color: var(--accent-soft) !important;
            background: var(--accent-soft) !important;
            color: var(--accent-strong) !important;
          }

          .knowledge-mobile-card .action-btn.delete-btn {
            border-color: rgba(244, 63, 94, 0.1) !important;
            background: rgba(244, 63, 94, 0.1) !important;
            color: rgb(244, 63, 94) !important;
          }

          .knowledge-mobile-card .action-btn.delete-btn:active {
            background: rgba(244, 63, 94, 0.2) !important;
          }

          .hide-on-mobile {
            display: none !important;
          }

          /* Toolbar Stacking */
          .toolbar-row {
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 12px !important;
            padding: 14px !important;
            width: 100% !important;
            max-width: 100% !important;
            box-sizing: border-box !important;
          }
          .toolbar-row .button-row {
            width: 100% !important;
            display: flex !important;
            gap: 8px !important;
            justify-content: stretch !important;
          }
          .toolbar-row .button-row button {
            flex: 1 !important;
            min-height: 40px !important;
            padding: 0 10px !important;
          }
        }

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:r,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(Qs()),children:[e.jsx(rt,{size:16}),t("knowledge.addArticle")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,m?e.jsx("div",{className:"form-success",children:m}):null,r&&s.length===0?e.jsx($e,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(k=>e.jsxs("tr",{children:[e.jsx("td",{children:k.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:k.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:k.title})}),e.jsx("td",{children:k.language&&Zs[k.language]||k.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void $(k.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:k.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:Js(k.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void M(k),children:[e.jsx(We,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void C(k.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},k.id)),!r&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(k=>e.jsxs("div",{className:`knowledge-mobile-card ${k.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",k.id]}),k.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",k.sort]})]}),e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void $(k.id),"aria-label":k.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:k.title}),e.jsxs("div",{className:"card-meta",children:[k.category&&e.jsx("span",{className:"category-badge",children:k.category}),k.language&&e.jsx("span",{className:"lang-badge",children:Zs[k.language]||k.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",Js(k.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void M(k),children:[e.jsx(We,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void C(k.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},k.id)),!r&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:i.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:_,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:i.category,onChange:k=>d({...i,category:k.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:i.title,onChange:k=>d({...i,title:k.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:i.body,onChange:k=>d({...i,body:k.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:i.language,onChange:k=>d({...i,language:k.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:i.sort,onChange:k=>d({...i,sort:k.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function mc(){const n=Ue(),{t}=xe(),[s,l]=a.useState(null),[i,d]=a.useState(null),[r,g]=a.useState(null),[x,N]=a.useState(""),[h,j]=a.useState(!0),[m,T]=a.useState(""),G=a.useCallback(async()=>{j(!0),T("");try{const[_,$,C,k]=await Promise.all([Ko().catch(()=>({data:{}})),Zo().catch(()=>({data:{}})),Qo().catch(()=>({data:[]})),Xo().catch(()=>({data:""}))]);l(_.data),d($.data),g(C.data),N(typeof k.data=="string"?k.data:"")}catch(_){T(_ instanceof Error?_.message:t("queue.toastLoadFailed"))}finally{j(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);function M(_,$,C){return _?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[C," ",$]}),e.jsx("div",{className:"queue-grid",children:Object.entries(_).map(([k,H])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:k}),e.jsx("strong",{children:typeof H=="object"?JSON.stringify(H):String(H??"—")})]},k))})]}):null}return e.jsxs(Ke,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:h,children:[e.jsx(Oe,{size:16}),t("common.refresh")]})})]}),m?e.jsx("div",{className:"form-error",children:m}):null,h?e.jsx($e,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[M(s,t("queue.systemStatus"),e.jsx(ln,{size:18})),M(i,t("queue.queueStats"),e.jsx(Qn,{size:18})),r&&r.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(qi,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(r,null,2)})]}):null,x?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Xi,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:x})]}):null]})]})}function xc(){return e.jsx(Pa,{children:e.jsxs(Di,{children:[e.jsx(Ae,{path:"/login",element:e.jsx(hr,{})}),e.jsx(Ae,{path:"/dashboard",element:e.jsx(vr,{})}),e.jsx(Ae,{path:"/config/system",element:e.jsx(Pr,{})}),e.jsx(Ae,{path:"/config/payment",element:e.jsx(Mr,{})}),e.jsx(Ae,{path:"/config/theme",element:e.jsx(Ir,{})}),e.jsx(Ae,{path:"/server/manage",element:e.jsx(jl,{})}),e.jsx(Ae,{path:"/server/group",element:e.jsx(wl,{})}),e.jsx(Ae,{path:"/server/route",element:e.jsx(_l,{})}),e.jsx(Ae,{path:"/plan",element:e.jsx(Tl,{})}),e.jsx(Ae,{path:"/order",element:e.jsx(El,{})}),e.jsx(Ae,{path:"/coupon",element:e.jsx(Ml,{})}),e.jsx(Ae,{path:"/giftcard",element:e.jsx(Ll,{})}),e.jsx(Ae,{path:"/user",element:e.jsx(Ul,{})}),e.jsx(Ae,{path:"/subscription",element:e.jsx(Xl,{})}),e.jsx(Ae,{path:"/device",element:e.jsx(ic,{})}),e.jsx(Ae,{path:"/webcon",element:e.jsx(lc,{})}),e.jsx(Ae,{path:"/notice",element:e.jsx(cc,{})}),e.jsx(Ae,{path:"/ticket",element:e.jsx(pc,{})}),e.jsx(Ae,{path:"/knowledge",element:e.jsx(uc,{})}),e.jsx(Ae,{path:"/queue",element:e.jsx(mc,{})}),e.jsx(Ae,{path:"/",element:e.jsx(as,{to:"/dashboard",replace:!0})}),e.jsx(Ae,{path:"*",element:e.jsx(as,{to:"/dashboard",replace:!0})})]})})}export{xc as default};
