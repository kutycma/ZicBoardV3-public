import{b as o,j as e,c as Ai,u as tn,L as Oi,r as ri,a as Ri,R as Oe,N as ms}from"./index.js";const ss=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],li="admin-locale",Gn="vi-VN",Hi="/assets/adminzic",ci=o.createContext(null);function Ui(){if(typeof window>"u")return Gn;const n=localStorage.getItem(li);return n&&ss.some(t=>t.code===n)?n:Gn}function qi(n,t){return t?Object.entries(t).reduce((s,[l,a])=>s.replaceAll(`{${l}}`,String(a)),n):n}function Bi(n){return new Promise((t,s)=>{var c;if(typeof window>"u"){t({});return}const l=(c=window.AdminNextI18n)==null?void 0:c[n];if(l){t(l);return}const a=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(a){a.addEventListener("load",()=>{var g;t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})}),a.addEventListener("error",s);return}const d=document.createElement("script");d.src=`${Hi}/i18n/${n}.js`,d.async=!0,d.dataset.adminNextLocale=n,d.onload=()=>{var g;return t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})},d.onerror=s,document.head.appendChild(d)})}function Gi({children:n}){const[t,s]=o.useState(Gn),[l,a]=o.useState({}),[d,c]=o.useState(!0);o.useEffect(()=>{s(Ui())},[]);const g=o.useCallback(m=>{s(m),typeof window<"u"&&localStorage.setItem(li,m)},[]);o.useEffect(()=>{let m=!0;return c(!0),Bi(t).then(v=>{m&&a(v)}).finally(()=>{m&&c(!1)}),()=>{m=!1}},[t]);const x=o.useCallback((m,v)=>qi(l[m]??m,v),[l]),_=o.useMemo(()=>({locale:t,loading:d,setLocale:g,t:x}),[t,d,g,x]);return e.jsx(ci.Provider,{value:_,children:n})}function he(){const n=o.useContext(ci);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),di=(...n)=>n.filter((t,s,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ki={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=o.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:a="",children:d,iconNode:c,...g},x)=>o.createElement("svg",{ref:x,...Ki,width:t,height:t,stroke:n,strokeWidth:l?Number(s)*24/Number(t):s,className:di("lucide",a),...g},[...c.map(([_,m])=>o.createElement(_,m)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(n,t)=>{const s=o.forwardRef(({className:l,...a},d)=>o.createElement(Yi,{ref:d,iconNode:t,className:di(`lucide-${Wi(n)}`,l),...a}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ee("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ee("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ee("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=ee("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=ee("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=ee("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=ee("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=ee("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=ee("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=ee("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=ee("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=ee("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=ee("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=ee("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=ee("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=ee("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=ee("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=ee("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=ee("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=ee("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=ee("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ee("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=ee("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=ee("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ee("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=ee("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=ee("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=ee("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=ee("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=ee("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ee("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=ee("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=ee("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ee("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ee("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=ee("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=ee("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ee("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ee("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=ee("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=ee("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ee("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=ee("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=ee("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ee("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=ee("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=ee("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=ee("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ee("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=ee("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=ee("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=ee("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),La=o.createContext(null);function Da({children:n}){const[t,s]=o.useState([]),[l,a]=o.useState(null),d=o.useCallback((_,m="success")=>{const v=Math.random().toString(36).substring(2,9);s(u=>[...u,{id:v,message:_,type:m}]),setTimeout(()=>{s(u=>u.filter($=>$.id!==v))},5e3)},[]),c=o.useCallback(_=>{a(_)},[]);o.useEffect(()=>{typeof window<"u"&&(window.showToast=d,window.showConfirm=c)},[d,c]);const g=async()=>{if(l){try{await l.onConfirm()}catch(_){console.error("Error in onConfirm:",_)}a(null)}},x=()=>{l&&(l.onCancel&&l.onCancel(),a(null))};return e.jsxs(La.Provider,{value:{showToast:d,showConfirm:c},children:[n,e.jsx("div",{className:"toast-container",children:t.map(_=>{let m=pa;return _.type==="success"&&(m=pi),_.type==="error"&&(m=Vi),_.type==="warning"&&(m=Jn),e.jsxs("div",{className:`toast-card toast-${_.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(m,{size:18})}),e.jsx("div",{className:"toast-message",children:_.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(v=>v.filter(u=>u.id!==_.id)),children:e.jsx(ke,{size:14})})]},_.id)})}),l&&e.jsx("div",{className:"confirm-backdrop",onClick:x,children:e.jsxs("div",{className:"confirm-card",onClick:_=>_.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(Jn,{size:22})}),e.jsx("h3",{className:"confirm-title",children:l.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:l.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:x,children:l.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:g,children:l.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ia({children:n}){return e.jsx(Gi,{children:e.jsx(Da,{children:n})})}const Fa="/api/v3";var oi;const Z=typeof window<"u"&&((oi=window.settings)==null?void 0:oi.secure_path)||"ZicFree123",hn="authorization";function Aa(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let l=0;l<s.length;l++){let a=s[l];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(t)===0)try{const d=a.substring(t.length,a.length),c=decodeURIComponent(d),g=JSON.parse(c);return g&&typeof g=="object"&&"value"in g?g.value:c}catch{try{return decodeURIComponent(a.substring(t.length,a.length))}catch{return a.substring(t.length,a.length)}}}return null}function Oa(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const a=JSON.stringify({site:"ZicNet",value:t}),d=window.location.protocol==="https:",c=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",g=new Date;g.setTime(g.getTime()+s*24*60*60*1e3);const x=`expires=${g.toUTCString()}`,_=c?"":`domain=${window.location.hostname};`;let m=`${n}=${encodeURIComponent(a)}; ${x}; ${_} path=/`;d&&(m+="; secure"),m+="; SameSite=Lax",document.cookie=m;try{window.localStorage.setItem(`cookie_${n}`,a)}catch{}}function Ra(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],l=["/","/dashboard","/user","/admin"];s.forEach(a=>{l.forEach(d=>{const c=a?` domain=${a};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${c} path=${d};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function xi(){if(typeof window>"u")return null;let n=window.localStorage.getItem(hn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(hn,n)}catch{}if(!n&&(n=Aa("auth_data"),n))try{window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function Ha(n,t){const s=n.startsWith("/")?n:`/${n}`,l=new URL(`${Fa}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([a,d])=>{d!==void 0&&l.searchParams.set(a,String(d))}),l.toString()}function He(){return!!xi()}function Ua(n){typeof window>"u"||(window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n),Oa("auth_data",n,36500))}function bi(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(a=>{window.localStorage.removeItem(a)}),["token","auth_data","authorization","vuex","user","auth"].forEach(a=>{window.sessionStorage.removeItem(a)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(a=>{s.forEach(d=>{document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${d};`}),document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Ra(a)})}async function J(n,t={}){const s={},l=t.method??"GET";if(l!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const x=xi();x&&(s.authorization=x)}const a=await fetch(Ha(n,t.params),{method:l,headers:s,body:l==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),c=(a.headers.get("content-type")||"").includes("application/json"),g=c?await a.json():await a.text();if(!a.ok){const x=typeof g=="object"&&g&&"message"in g?String(g.message):`Request failed with status ${a.status}`,_=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(x);throw(a.status===401||a.status===403&&!_)&&t.auth!==!1&&(bi(),window.location.hash="/login"),new Error(x)}if(!c&&typeof g=="string"&&(g.trim().startsWith("<!DOCTYPE html")||g.trim().startsWith("<html")||g.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return g}async function qa(n,t){return J("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Ba(){const n=`/${Z}/stat`,[t,s]=await Promise.all([J(`${n}/getOverride`),J(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function Ga(n){return(await J(`/${Z}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function Wa(n){return(await J(`/${Z}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ka(n){return(await J(`/${Z}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Ya(n,t=10){return(await J(`/${Z}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function gi(){return(await J(`/${Z}/config/fetch`)).data}async function fi(n){return J(`/${Z}/config/save`,{method:"POST",body:n})}async function Ja(){return(await J(`/${Z}/config/getEmailTemplate`)).data}async function Za(){return(await J(`/${Z}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Qa(){return J(`/${Z}/config/testSendMail`,{method:"POST",body:{}})}async function Xa(n){return J(`/${Z}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Va(){return(await J(`/${Z}/payment/fetch`)).data}async function eo(){return(await J(`/${Z}/payment/getPaymentMethods`)).data}async function js(n,t){return(await J(`/${Z}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function to(n){return J(`/${Z}/payment/save`,{method:"POST",body:n})}async function no(n){return J(`/${Z}/payment/show`,{method:"POST",body:{id:n}})}async function so(n){return J(`/${Z}/payment/drop`,{method:"POST",body:{id:n}})}async function io(n){return J(`/${Z}/payment/sort`,{method:"POST",body:{ids:n}})}async function ao(){return(await J(`/${Z}/theme/getThemes`)).data}async function oo(n){return(await J(`/${Z}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function ro(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return J(`/${Z}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Ut(){return(await J(`/${Z}/server/group/fetch`)).data}async function os(n){return J(`/${Z}/server/group/save`,{method:"POST",body:n})}async function lo(n){return J(`/${Z}/server/group/drop`,{method:"POST",body:{id:n}})}const yi=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function vi(){return(await J(`/${Z}/server/route/fetch`)).data}async function co(n){return J(`/${Z}/server/route/save`,{method:"POST",body:n})}async function po(n){return J(`/${Z}/server/route/drop`,{method:"POST",body:{id:n}})}async function Pt(){return(await J(`/${Z}/plan/fetch`)).data}async function uo(n){return J(`/${Z}/plan/save`,{method:"POST",body:n})}async function mo(n){return J(`/${Z}/plan/drop`,{method:"POST",body:{id:n}})}async function zn(n,t){return J(`/${Z}/plan/update`,{method:"POST",body:{id:n,...t}})}async function ho(n){return J(`/${Z}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function xo(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((l,a)=>{t.set(`filter[${a}][key]`,l.key),t.set(`filter[${a}][condition]`,l.condition),t.set(`filter[${a}][value]`,l.value)}),await J(`/${Z}/order/fetch?${t.toString()}`)}async function bo(n){return J(`/${Z}/order/paid`,{method:"POST",body:{trade_no:n}})}async function go(n){return J(`/${Z}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function rs(n){return J(`/${Z}/order/assign`,{method:"POST",body:n})}async function fo(n,t){return J(`/${Z}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function yo(n){return J(`/${Z}/order/detail`,{method:"POST",body:{id:n}})}async function ji(n=1,t=15){return J(`/${Z}/coupon/fetch?current=${n}&pageSize=${t}`)}async function vo(n){return J(`/${Z}/coupon/generate`,{method:"POST",body:n})}async function jo(n){return J(`/${Z}/coupon/drop`,{method:"POST",body:{id:n}})}async function wo(n){return J(`/${Z}/coupon/show`,{method:"POST",body:{id:n}})}async function No(n=1,t=15){return J(`/${Z}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function ko(n){return J(`/${Z}/giftcard/generate`,{method:"POST",body:n})}async function _o(n){return J(`/${Z}/giftcard/drop`,{method:"POST",body:{id:n}})}async function Xn(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s&&s.forEach((a,d)=>{l.set(`filter[${d}][key]`,a.key),l.set(`filter[${d}][condition]`,a.condition),l.set(`filter[${d}][value]`,a.value)}),J(`/${Z}/user/fetch?${l.toString()}`)}async function So(n){return J(`/${Z}/user/update`,{method:"POST",body:n})}async function Vn(n){return J(`/${Z}/user/getUserInfoById`,{params:{id:n}})}async function Co(n){return J(`/${Z}/user/delUser`,{method:"POST",body:{id:n}})}async function zo(n){return J(`/${Z}/user/generate`,{method:"POST",body:n})}async function To(n){return J(`/${Z}/user/resetSecret`,{method:"POST",body:{id:n}})}async function Po(n=1,t=15,s,l=!1){const a=new URLSearchParams;return a.set("current",String(n)),a.set("pageSize",String(t)),l&&a.set("include_subscribe_url","1"),s==null||s.forEach((d,c)=>{a.set(`filter[${c}][key]`,d.key),a.set(`filter[${c}][condition]`,d.condition),a.set(`filter[${c}][value]`,d.value)}),J(`/${Z}/subscription/fetch?${a.toString()}`)}async function $o(n){return J(`/${Z}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function Eo(n){return J(`/${Z}/subscription/update`,{method:"POST",body:n})}async function Mo(n){return J(`/${Z}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function wi(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s==null||s.forEach((a,d)=>{l.set(`filter[${d}][key]`,a.key),l.set(`filter[${d}][condition]`,a.condition),l.set(`filter[${d}][value]`,a.value)}),J(`/${Z}/device/fetch?${l.toString()}`)}async function Ni(n){return J(`/${Z}/device/drop`,{method:"POST",body:{id:n}})}async function ki(n){return J(`/${Z}/device/ban`,{method:"POST",body:{id:n}})}async function Lo(n){return J(`/${Z}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function Do(n,t=1,s=10){return J(`/${Z}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Io(){return(await J(`/${Z}/notice/fetch`)).data}async function Fo(n){return J(`/${Z}/notice/save`,{method:"POST",body:n})}async function Ao(n){return J(`/${Z}/notice/drop`,{method:"POST",body:{id:n}})}async function Oo(n){return J(`/${Z}/notice/show`,{method:"POST",body:{id:n}})}async function Ro(){return(await J(`/${Z}/ticket/fetch`)).data}async function Tn(n){return(await J(`/${Z}/ticket/fetch`,{params:{id:n}})).data}async function Ho(n,t){return J(`/${Z}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function Uo(n){return J(`/${Z}/ticket/close`,{method:"POST",body:{id:n}})}async function qo(n){return J(`/${Z}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Bo(){return(await J(`/${Z}/knowledge/fetch`)).data}async function Go(n){return(await J(`/${Z}/knowledge/fetch`,{params:{id:n}})).data}async function Wo(n){return J(`/${Z}/knowledge/save`,{method:"POST",body:n})}async function Ko(n){return J(`/${Z}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Yo(n){return J(`/${Z}/knowledge/show`,{method:"POST",body:{id:n}})}async function Jo(){return(await J(`/${Z}/webcon/fetch`)).data}async function Zo(n){return J(`/${Z}/webcon/save`,{method:"POST",body:n})}async function Qo(n){return J(`/${Z}/webcon/drop`,{method:"POST",body:{id:n}})}async function Xo(n){return J(`/${Z}/webcon/show`,{method:"POST",body:{id:n}})}async function Vo(){return J(`/${Z}/system/getSystemStatus`)}async function er(){return(await J(`/${Z}/system/getCoreLicenseStatus`)).data}async function tr(){return(await J(`/${Z}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function nr(){return J(`/${Z}/system/getQueueStats`)}async function sr(){return J(`/${Z}/system/getQueueWorkload`)}async function ir(){return J(`/${Z}/system/getSystemLog`)}async function ws(){return J(`/${Z}/server/manage/getNodes`)}async function ar(n,t){return J(`/${Z}/server/${n}/save`,{method:"POST",body:t})}async function or(n,t){return J(`/${Z}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function rr(n,t,s){return J(`/${Z}/server/${n}/update`,{method:"POST",body:{id:t,show:s}})}async function lr(n,t){return J(`/${Z}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function cr(n){return J(`/${Z}/server/manage/sort`,{method:"POST",body:n})}function Je(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function ot(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const Ns=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function _i(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Zt(n){return Number(n??0)}function ks(n){return Zt(n)/100}function _s(n){return`${ot(Math.round(n))} VND`}function dr(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),l=0;for(;s>=1024&&l<t.length-1;)s/=1024,l+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||l===0?0:1}).format(s)} ${t[l]}`}function Si(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function pr(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,l)=>{const a=new Date(t);return a.setDate(t.getDate()-(n-l-1)),Si(a)})}function Ss(n,t){const s=n.get(t);if(s)return s;const l=_i(t);return n.set(t,l),l}function ur(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function an({label:n,value:t,helper:s,tone:l="default",onClick:a}){return e.jsxs("article",{className:`stat-card tone-${l}`,onClick:a,style:a?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Zi,{size:19})}),s?e.jsx("small",{children:s}):null]})}function Ee({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Re,{size:18}),e.jsx("span",{children:n})]})}function mr(n,t){const s=new Map,l=new Map;if(n.forEach(a=>{const d=Ss(s,a.date),c=ur(a.type);if(c){d[c]=Number(a.value||0);return}const g=l.get(a.date)??0,x=Ns[g%Ns.length];d[x]=Number(a.value||0),l.set(a.date,g+1)}),t){const a=Ss(s,Si(new Date));a.registrations=Zt(t.day_register_total),t.day_order_total!==void 0&&(a.orderCount=Zt(t.day_order_total)),t.day_paid_order_total!==void 0&&(a.paidCount=Zt(t.day_paid_order_total)),a.paidAmount=ks(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(a.commissionAmount=ks(t.day_commission_payout)),t.day_commission_count!==void 0&&(a.commissionCount=Zt(t.day_commission_count))}return s.size===0?[]:pr(31).map(a=>s.get(a)??_i(a))}function hr({records:n,override:t}){const{t:s}=he(),[l,a]=o.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[d,c]=o.useState(null),g=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:_s},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:ot},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:ot},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:_s},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:ot},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:ot}],x=mr(n,t),_=g.filter(j=>l.includes(j.key)),m=_.filter(j=>j.unit==="money"),v=_.filter(j=>j.unit==="count"),u=Math.max(1,...m.flatMap(j=>x.map(O=>Number(O[j.key]||0)))),$=Math.max(1,...v.flatMap(j=>x.map(O=>Number(O[j.key]||0)))),G=920,D=300,S=8,I=22,k=D-I-28,R=x.length>1?(G-S*2)/(x.length-1):0,H=Math.max(Math.ceil(x.length/7),1),U=d===null?null:x[d]??null,y=j=>({"--metric-color":j.color}),P=(j,O)=>Number(j[O.key]||0),F=j=>j.unit==="money"?u:$,Q=j=>S+j*R,r=d===null?50:Math.min(88,Math.max(12,Q(d)/G*100)),N=(j,O)=>I+k-j/F(O)*k,q=j=>Math.max(0,...x.map(O=>P(O,j))),C=j=>{const O=x.map((E,se)=>({x:Q(se),y:N(P(E,j),j)}));return O.length?O.length===1?`M ${O[0].x} ${O[0].y}`:O.slice(1).reduce((E,se,b)=>{const V=O[b],B=(V.x+se.x)/2;return`${E} C ${B} ${V.y}, ${B} ${se.y}, ${se.x} ${se.y}`},`M ${O[0].x} ${O[0].y}`):""};function W(j){a(O=>O.includes(j)?O.length===1?O:O.filter(E=>E!==j):[...O,j]),c(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:x.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:g.map(j=>{const O=l.includes(j.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${O?"active":""}`,style:y(j),onClick:()=>W(j.key),"aria-pressed":O,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:j.label})]},j.key)})}),x.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>c(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${G} ${D}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:S,y:I,width:G-S*2,height:k,rx:"14"}),[0,.25,.5,.75,1].map(j=>e.jsx("line",{className:"chart-grid",x1:S,x2:G-S,y1:I+j*k,y2:I+j*k},j)),d!==null?e.jsx("line",{className:"chart-hover-line",x1:Q(d),x2:Q(d),y1:I,y2:I+k}):null,_.map(j=>e.jsx("path",{className:"chart-series-line",d:C(j),style:y(j)},j.key)),d!==null?_.map(j=>e.jsx("circle",{className:"chart-series-dot",cx:Q(d),cy:N(P(x[d],j),j),r:"5",style:y(j)},`${j.key}-${d}`)):null,x.map((j,O)=>{const E=x.length>1?R:G-S*2;return e.jsx("rect",{className:"chart-hover-zone",x:Q(O)-E/2,y:I,width:E,height:k,onMouseEnter:()=>c(O),onFocus:()=>c(O),onClick:()=>c(O),tabIndex:0},j.date)})]}),U?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${r}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",U.date]}),e.jsx("div",{className:"tooltip-series-list",children:_.map(j=>e.jsxs("div",{className:"tooltip-series-row",style:y(j),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:j.label}),e.jsx("strong",{children:j.format(P(U,j))})]},j.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:x.filter((j,O)=>O===0||O===x.length-1||O%H===0).map(j=>e.jsx("span",{children:j.date},j.date))}),e.jsx("div",{className:"chart-insights",children:_.map(j=>e.jsxs("div",{className:"chart-insight",style:y(j),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:j.summaryLabel}),e.jsx("strong",{children:j.format(q(j))})]},j.key))})]})]})}function ls({value:n,onChange:t,monthLabel:s}){const{t:l}=he();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":l("dashboard.range"),children:["today","month"].map(a=>e.jsx("button",{type:"button",className:n===a?"active":"",onClick:()=>t(a),"aria-pressed":n===a,children:a==="today"?l("dashboard.rangeToday"):s??l("dashboard.rangeMonth")},a))})}function xr({points:n,metrics:t,emptyLabel:s}){const{t:l}=he(),[a,d]=o.useState(t.map(r=>r.key)),[c,g]=o.useState(null),x=t.filter(r=>a.includes(r.key)),_=Math.max(1,...x.flatMap(r=>n.map(N=>Number(N[r.key]||0)))),m=920,v=260,u=8,$=22,D=v-$-28,S=n.length>1?(m-u*2)/(n.length-1):0,I=Math.max(Math.ceil(n.length/7),1),T=c===null?null:n[c]??null,k=r=>({"--metric-color":r.color}),R=r=>u+r*S,H=r=>$+D-r/_*D,U=c===null?50:Math.min(88,Math.max(12,R(c)/m*100)),y=(r,N)=>Number(r[N.key]||0),P=r=>Math.max(0,...n.map(N=>y(N,r))),F=r=>{const N=n.map((q,C)=>({x:R(C),y:H(y(q,r))}));return N.length?N.length===1?`M ${N[0].x} ${N[0].y}`:N.slice(1).reduce((q,C,W)=>{const j=N[W],O=(j.x+C.x)/2;return`${q} C ${O} ${j.y}, ${O} ${C.y}, ${C.x} ${C.y}`},`M ${N[0].x} ${N[0].y}`):""};function Q(r){d(N=>N.includes(r)?N.length===1?N:N.filter(q=>q!==r):[...N,r]),g(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":l("dashboard.chartMetrics"),children:t.map(r=>{const N=a.includes(r.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${N?"active":""}`,style:k(r),onClick:()=>Q(r.key),"aria-pressed":N,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:r.label})]},r.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>g(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${m} ${v}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:u,y:$,width:m-u*2,height:D,rx:"14"}),[0,.25,.5,.75,1].map(r=>e.jsx("line",{className:"chart-grid",x1:u,x2:m-u,y1:$+r*D,y2:$+r*D},r)),c!==null?e.jsx("line",{className:"chart-hover-line",x1:R(c),x2:R(c),y1:$,y2:$+D}):null,x.map(r=>e.jsx("path",{className:"chart-series-line",d:F(r),style:k(r)},r.key)),c!==null?x.map(r=>e.jsx("circle",{className:"chart-series-dot",cx:R(c),cy:H(y(n[c],r)),r:"5",style:k(r)},`${r.key}-${c}`)):null,n.map((r,N)=>{const q=n.length>1?S:m-u*2;return e.jsx("rect",{className:"chart-hover-zone",x:R(N)-q/2,y:$,width:q,height:D,onMouseEnter:()=>g(N),onFocus:()=>g(N),onClick:()=>g(N),tabIndex:0},`${r.label}-${N}`)})]}),T?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${U}%`},children:[e.jsx("div",{className:"tooltip-date",children:T.label}),e.jsxs("div",{className:"tooltip-series-list",children:[x.map(r=>e.jsxs("div",{className:"tooltip-series-row",style:k(r),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:r.label}),e.jsx("strong",{children:r.format(y(T,r))})]},r.key)),T.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:l("dashboard.sampleCount")}),e.jsx("strong",{children:ot(T.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((r,N)=>N===0||N===n.length-1||N%I===0).map((r,N)=>e.jsx("span",{children:r.label},`${r.label}-${N}`))}),e.jsx("div",{className:"chart-insights",children:x.map(r=>e.jsxs("div",{className:"chart-insight",style:k(r),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:r.summaryLabel}),e.jsx("strong",{children:r.format(P(r))})]},r.key))})]})}function Cs({title:n,subtitle:t,data:s,range:l,onRangeChange:a,loading:d,error:c,mode:g}){const{t:x}=he(),_=g==="users"?((s==null?void 0:s.users)??[]).map(m=>({id:`user-${m.user_id}`,label:m.email||`User #${m.user_id}`,total:Number(m.total||0)})):((s==null?void 0:s.servers)??[]).map(m=>({id:`${m.server_type}-${m.server_id}`,label:m.server_name||x("dashboard.unnamedNode"),total:Number(m.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(ls,{value:l,onChange:a,monthLabel:x("dashboard.rangeLast31Days")})]}),c?e.jsx("div",{className:"chart-error",children:c}):null,d?e.jsx(Ee,{label:x("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:_.length===0?e.jsx("div",{className:"empty-state",children:x("dashboard.noTraffic")}):_.slice(0,10).map((m,v)=>{var G;const u=Math.max(((G=_[0])==null?void 0:G.total)??1,1),$=Math.max(3,m.total/u*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:v+1}),e.jsx("strong",{title:m.label,children:m.label}),e.jsx("small",{children:dr(m.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${$}%`}})})]},m.id)})})]})}function br({data:n,range:t,onRangeChange:s,loading:l,error:a}){const{t:d}=he(),c=[{key:"online_user",label:d("dashboard.onlineUsers"),summaryLabel:d(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:ot}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.onlineTrend")}),e.jsx("p",{children:d(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(ls,{value:t,onChange:s,monthLabel:d("dashboard.rangeLast31Days")})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx(Ee,{label:d("dashboard.chartLoading")}):e.jsx(xr,{points:(n==null?void 0:n.points)??[],metrics:c,emptyLabel:d("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:d("dashboard.onlineRetentionNote")})]})}function gr({data:n,range:t,onRangeChange:s,loading:l,error:a}){const{t:d}=he(),c=(n==null?void 0:n.items)??[],g=Math.max(...c.map(x=>Number(x.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.topCtvCommission")}),e.jsx("p",{children:d("dashboard.topCtvCommissionHelp")})]}),e.jsx(ls,{value:t,onChange:s})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx(Ee,{label:d("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:c.length===0?e.jsx("div",{className:"empty-state",children:d("dashboard.noCommissionRank")}):c.map((x,_)=>{const m=Number(x.commission_amount||0)/g*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:_+1}),e.jsx("strong",{children:x.email||`User #${x.user_id}`}),e.jsxs("small",{children:[Je(x.commission_amount)," VND · ",ot(x.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(m,3)}%`}})})]},`${x.user_id}-${_}`)})})]})}function Pn({label:n,current:t,previous:s}){const{t:l}=he();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?ot(t):t}),e.jsxs("small",{children:[l("dashboard.previous"),": ",typeof s=="number"?ot(s):s]})]})}function Ue(){const n=Ai();return o.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function fr(){return tn().pathname}function yr({href:n,...t}){return e.jsx(Oi,{to:n,...t})}function vr(){const n=Ue(),{t,locale:s,setLocale:l}=he(),[a,d]=o.useState(""),[c,g]=o.useState(""),[x,_]=o.useState(""),[m,v]=o.useState(!1),[u,$]=o.useState(!1),G=o.useRef(null);o.useEffect(()=>{function S(I){G.current&&!G.current.contains(I.target)&&$(!1)}return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]),o.useEffect(()=>{He()&&n.replace("/dashboard")},[n]);async function D(S){var I,T,k,R;S.preventDefault(),_(""),v(!0);try{const H=await qa(a,c),U=((I=H.data)==null?void 0:I.auth_data)??((T=H.data)==null?void 0:T.token),y=((k=H.data)==null?void 0:k.is_admin)===1||((R=H.data)==null?void 0:R.is_admin)===!0;if(!U||!y)throw new Error(t("login.adminRequired"));Ua(U),n.replace("/dashboard")}catch(H){_(H instanceof Error?H.message:t("login.failed"))}finally{v(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:G,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>$(S=>!S),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ss.map(S=>e.jsxs("button",{className:`locale-option ${s===S.code?"active":""}`,type:"button",onClick:()=>{l(S.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:S.flag}),e.jsx("span",{children:S.label})]},S.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(Na,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ui,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:S=>d(S.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:a})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ha,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:S=>g(S.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:c})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,e.jsx("button",{className:"primary-button",disabled:m,type:"submit",children:t(m?"login.signingIn":"login.submit")})]})]})]})}const jr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:la}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Sa},{href:"/config/payment",label:"nav.paymentConfig",icon:sa},{href:"/config/theme",label:"nav.themeConfig",icon:Pa}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:as},{href:"/server/group",label:"nav.groupManagement",icon:Ea},{href:"/server/route",label:"nav.routeManagement",icon:_a}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:fs},{href:"/order",label:"nav.orders",icon:ma},{href:"/coupon",label:"nav.coupons",icon:ca},{href:"/giftcard",label:"nav.giftcards",icon:za}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Qn},{href:"/subscription",label:"nav.subscriptions",icon:fs},{href:"/device",label:"nav.devices",icon:Ca},{href:"/webcon",label:"nav.webcon",icon:nn},{href:"/notice",label:"nav.notices",icon:Jt},{href:"/ticket",label:"nav.tickets",icon:ua},{href:"/knowledge",label:"nav.knowledge",icon:Qi}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Xi}]}];function wr(){const[n,t]=o.useState("light");o.useEffect(()=>{const d=localStorage.getItem("admin-theme")??"light";t(d),document.documentElement.setAttribute("data-theme",d)},[]);const s=o.useCallback(a=>{t(a),localStorage.setItem("admin-theme",a),document.documentElement.setAttribute("data-theme",a)},[]),l=o.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:l}}function Ci(n){return n?new Date(n*1e3):null}function Nr(n,t){const s=Ci(t);if(!s)return null;try{return new Intl.DateTimeFormat(n,{year:"numeric",month:"2-digit",day:"2-digit"}).format(s)}catch{return s.toLocaleDateString()}}function kr(n){const t=Ci(n);return t?Math.ceil((t.getTime()-Date.now())/864e5):null}function We({children:n,title:t,subtitle:s}){const[l,a]=o.useState(!1),d=Ue(),c=fr(),{t:g,locale:x,setLocale:_}=he(),{theme:m,toggle:v}=wr(),[u,$]=o.useState(!1),G=o.useRef(null),[D,S]=o.useState(null),[I,T]=o.useState(!1),k=o.useCallback(async(r=!1)=>{if(He()){T(r);try{S(r?await tr():await er())}catch(N){S({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:g("license.unavailable"),error:N instanceof Error?N.message:g("license.unavailable")})}finally{T(!1)}}},[g]);o.useEffect(()=>{function r(N){G.current&&!G.current.contains(N.target)&&$(!1)}return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]),o.useEffect(()=>{k(!1);const r=window.setInterval(()=>{k(!1)},6e4);return()=>window.clearInterval(r)},[k]);function R(){bi(),d.replace("/login")}const H=(D==null?void 0:D.license_expires_at)??(D==null?void 0:D.expires_at),U=Nr(x,H),y=typeof(D==null?void 0:D.days_until_expiry)=="number"?D.days_until_expiry:kr(H),P=typeof y=="number"?y<=0?g("license.expiresToday"):g("license.daysLeft",{days:y}):null,F=!!D&&D.available&&!D.requires_renewal,Q=F&&!!(D!=null&&D.renewal_warning);return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),l&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>a(!1)}),e.jsxs("aside",{className:`sidebar ${l?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:g("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:jr.map(r=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:g(r.label)}),r.items.map(N=>{const q=N.icon,C=c===N.href;return e.jsxs(yr,{className:`nav-item ${C?"active":""}`,href:N.href,onClick:()=>a(!1),children:[e.jsx(q,{size:17}),e.jsx("span",{children:g(N.label)})]},N.href)})]},r.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":g(l?"common.closeMenu":"common.openMenu"),onClick:()=>a(r=>!r),children:l?e.jsx(ke,{size:19}):e.jsx(ba,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[F?e.jsxs("button",{className:`license-chip ${Q?"warning":""}`,type:"button",disabled:I,title:g("license.refresh"),onClick:()=>void k(!0),children:[e.jsx(bs,{size:16}),e.jsxs("span",{className:"license-chip-copy",children:[e.jsx("span",{children:g("license.validUntil")}),e.jsx("strong",{children:U??g("license.unknownExpiry")})]}),P?e.jsx("small",{children:P}):null]}):null,e.jsxs("div",{className:"locale-dropdown",ref:G,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":g("common.language"),onClick:()=>$(r=>!r),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ss.map(r=>e.jsxs("button",{className:`locale-option ${x===r.code?"active":""}`,type:"button",onClick:()=>{_(r.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:r.flag}),e.jsx("span",{children:r.label})]},r.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":m==="dark"?"Switch to light mode":"Switch to dark mode",onClick:v,children:m==="dark"?e.jsx(Ta,{size:17}):e.jsx(ga,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:R,children:[e.jsx(xa,{size:16}),e.jsx("span",{children:g("common.logout")})]})]})]}),e.jsxs("main",{className:"content",children:[D!=null&&D.requires_renewal?e.jsxs("section",{className:"license-banner",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(Jn,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.renewTitle")}),e.jsx("p",{children:g("license.renewBody")}),e.jsxs("small",{children:[g("license.currentStatus"),": ",D.status,D.error?` - ${D.error}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void k(!0),children:[e.jsx(Re,{size:16}),g(I?"license.refreshing":"license.refresh")]})]}):null,Q?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(bs,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.expiryWarningTitle")}),e.jsx("p",{children:g("license.expiryWarningBody",{date:U??g("license.unknownExpiry"),days:y??""})}),e.jsxs("small",{children:[g("license.currentStatus"),": ",D.status]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void k(!0),children:[e.jsx(Re,{size:16}),g(I?"license.refreshing":"license.refresh")]})]}):null,n]})]})]})}function on(){return{data:null,loading:!0,error:""}}function _r(n,t){const s=new Date;if(n==="today"){const a=s.getHours();return{range:n,points:Array.from({length:24},(d,c)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),c).getTime()/1e3),label:`${String(c).padStart(2,"0")}:00`,online_user:c===a?t:0,sample_count:c===a?1:0}))}}const l=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(a,d)=>{const c=new Date(l);return c.setDate(l.getDate()-(30-d)),{time:Math.floor(c.getTime()/1e3),label:`${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`,online_user:d===30?t:0,online_user_avg:d===30?t:0,sample_count:d===30?1:0}})}}function Sr(){var F,Q,r,N,q,C,W,j,O,E,se,b,V;const n=Ue(),{t}=he(),[s,l]=o.useState(null),[a,d]=o.useState(""),[c,g]=o.useState(!0),[x,_]=o.useState("today"),[m,v]=o.useState("today"),[u,$]=o.useState("today"),[G,D]=o.useState("today"),[S,I]=o.useState(on),[T,k]=o.useState(on),[R,H]=o.useState(on),[U,y]=o.useState(on),P=o.useCallback(async()=>{g(!0),d("");try{l(await Ba())}catch(B){d(B instanceof Error?B.message:t("dashboard.loadFailed"))}finally{g(!1)}},[t]);return o.useEffect(()=>{if(!He()){n.replace("/login");return}P()},[P,n]),o.useEffect(()=>{let B=!0;return I(X=>({...X,loading:!0,error:""})),Ga(x).then(X=>{B&&I({data:X,loading:!1,error:""})}).catch(X=>{B&&I({data:null,loading:!1,error:X instanceof Error?X.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[x,t]),o.useEffect(()=>{let B=!0;return k(X=>({...X,loading:!0,error:""})),Wa(m).then(X=>{B&&k({data:X,loading:!1,error:""})}).catch(X=>{B&&k({data:null,loading:!1,error:X instanceof Error?X.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[m,t]),o.useEffect(()=>{let B=!0;return H(X=>({...X,loading:!0,error:""})),Ka(u).then(X=>{B&&H({data:X,loading:!1,error:""})}).catch(()=>{var X;B&&H({data:_r(u,((X=s==null?void 0:s.override)==null?void 0:X.online_user)??0),loading:!1,error:""})}),()=>{B=!1}},[u,(F=s==null?void 0:s.override)==null?void 0:F.online_user]),o.useEffect(()=>{let B=!0;return y(X=>({...X,loading:!0,error:""})),Ya(G).then(X=>{B&&y({data:X,loading:!1,error:""})}).catch(X=>{B&&y({data:null,loading:!1,error:X instanceof Error?X.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[G,t]),e.jsxs(We,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[a?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:a}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,children:[e.jsx(Re,{size:16}),t("common.retry")]})]}):null,c&&!s?e.jsx(Ee,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((Q=s.override)==null?void 0:Q.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(r=s.override)==null?void 0:r.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(an,{label:t("dashboard.onlineUsers"),value:ot(((N=s.override)==null?void 0:N.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.todayIncome"),value:`${Je(((q=s.override)==null?void 0:q.day_paid_income)??((C=s.override)==null?void 0:C.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(an,{label:t("dashboard.todayRegistrations"),value:ot(((W=s.override)==null?void 0:W.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.pendingCommission"),value:ot(((j=s.override)==null?void 0:j.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(Pn,{label:t("dashboard.monthIncome"),current:`${Je(((O=s.override)==null?void 0:O.month_income)??0)} VND`,previous:`${Je(((E=s.override)==null?void 0:E.last_month_income)??0)} VND`}),e.jsx(Pn,{label:t("dashboard.monthCommission"),current:`${Je(((se=s.override)==null?void 0:se.commission_month_payout)??0)} VND`,previous:`${Je(((b=s.override)==null?void 0:b.commission_last_month_payout)??0)} VND`}),e.jsx(Pn,{label:t("dashboard.monthRegistrations"),current:((V=s.override)==null?void 0:V.month_register_total)??0,previous:"-"})]}),e.jsx(hr,{records:s.order,override:s.override}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(br,{data:R.data,range:u,onRangeChange:$,loading:R.loading,error:R.error}),e.jsx(gr,{data:U.data,range:G,onRangeChange:D,loading:U.loading,error:U.error}),e.jsx(Cs,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:S.data,range:x,onRangeChange:_,loading:S.loading,error:S.error,mode:"users"}),e.jsx(Cs,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:T.data,range:m,onRangeChange:v,loading:T.loading,error:T.error,mode:"servers"})]})]}):null]})}const Cr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function zs(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function zr(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function $n(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function Tr(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Pr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function $r(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Ye(n){return n===!0||n===1||n==="1"}function Er(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function En(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Mr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function Lr({field:n,value:t,onChange:s}){const{t:l}=he(),a=n.toInput?n.toInput(t):Er(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Ye(t)?"on":""}`,type:"button",onClick:()=>s(Ye(t)?0:1),"aria-pressed":Ye(t),children:[e.jsx("span",{}),Ye(t)?zs(l)[0].label:zs(l)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:a,onChange:d=>s(d.target.value),children:(n.options??[]).map(d=>e.jsx("option",{value:d.value,children:d.label},String(d.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,rows:4,value:a}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,type:n.type,value:a}):null]})]})}function Dr({plans:n,emailTemplates:t,t:s}){const l=[{label:s("config.option.disabled"),value:0},...n.map(a=>({label:a.name,value:a.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:l},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:a=>Number(a.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:a=>Ye(a.email_whitelist_enable),fromInput:En},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Pr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:a=>String(a.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:zr(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:$n(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:$n(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:$n(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:Tr(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:a=>Number(a.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:a=>Ye(a.subscribe_url_ua_enable),fromInput:Mr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:En}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:$r(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:En},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:a=>Ye(a.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:a=>Ye(a.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(a=>({label:a,value:a}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Ir(){const n=Ue(),{t}=he(),[s,l]=o.useState("site"),[a,d]=o.useState(null),[c,g]=o.useState([]),[x,_]=o.useState([]),[m,v]=o.useState(!0),[u,$]=o.useState(null),[G,D]=o.useState(""),S=o.useCallback(async()=>{v(!0),D("");try{const[P,F,Q]=await Promise.all([gi(),Za(),Ja()]);d(P),g(F),_(Q)}catch(P){D(P instanceof Error?P.message:t("config.loadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}S()},[S,n]),o.useEffect(()=>{const P=document.querySelector(".config-tabs button.active");P&&P.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const I=o.useMemo(()=>Dr({plans:c,emailTemplates:x,t}),[c,x,t]),T=I.find(P=>P.key===s)??I[0],k=(a==null?void 0:a[T.key])??{};function R(P,F,Q){d(r=>r&&{...r,[P]:{...r[P],[F]:Q}})}async function H(){var Q,r,N;if(!a)return;const P=T.key==="safe"?String(((Q=window.settings)==null?void 0:Q.secure_path)??"").trim():"",F=T.key==="safe"?String(((r=a.safe)==null?void 0:r.secure_path)??"").trim():"";$(T.key),D("");try{await fi(a[T.key]),(N=window.showToast)==null||N.call(window,t("config.saveSuccess"),"success"),T.key==="safe"&&F&&F!==P&&(window.settings={...window.settings??{},secure_path:F},window.location.replace(`${window.location.origin}/${F}`))}catch(q){D(q instanceof Error?q.message:t("config.saveFailed"))}finally{$(null)}}async function U(){var P;$("mail"),D("");try{await Qa(),(P=window.showToast)==null||P.call(window,t("config.email.testSuccess"),"success")}catch(F){D(F instanceof Error?F.message:t("config.email.testFailed"))}finally{$(null)}}async function y(){var F;const P=String((a==null?void 0:a.telegram.telegram_bot_token)??"");$("webhook"),D("");try{await Xa(P),(F=window.showToast)==null||F.call(window,t("config.telegram.webhookSuccess"),"success")}catch(Q){D(Q instanceof Error?Q.message:t("config.telegram.webhookFailed"))}finally{$(null)}}return e.jsxs(We,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:m,children:[e.jsx(Re,{size:16}),t(m?"common.refreshing":"common.refresh")]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,m&&!a?e.jsx(Ee,{label:t("config.loading")}):null,a?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:Cr.map(P=>{const F=I.find(Q=>Q.key===P);return F?e.jsxs("button",{className:s===P?"active":"",type:"button",onClick:()=>l(P),children:[e.jsx("span",{children:F.label}),e.jsx("small",{children:F.hint})]},P):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:T.label}),e.jsx("p",{children:T.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:u===T.key,type:"button",onClick:H,children:[e.jsx(lt,{size:16}),u===T.key?t("config.saving"):t("config.saveTab")]})]}),T.warning?e.jsx("div",{className:"config-warning",children:T.warning}):null,e.jsx("div",{className:"config-fields",children:T.fields.map(P=>P.visible&&!P.visible(k)?null:e.jsx(Lr,{field:P,value:k[P.key],onChange:F=>R(T.key,P.key,F)},P.key))}),T.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="mail",onClick:U,children:[e.jsx(ui,{size:16}),t(u==="mail"?"config.email.testing":"config.email.test")]})}):null,T.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="webhook",onClick:y,children:[e.jsx($a,{size:16}),t(u==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(mi,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function zt(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function Mn(n){return n===!0||n===1||n==="1"}function Fr(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Ar(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Or(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[x,_]=o.useState({}),[m,v]=o.useState(!0),[u,$]=o.useState(!1),[G,D]=o.useState(!1),[S,I]=o.useState(""),[T,k]=o.useState(""),[R,H]=o.useState({}),U=o.useCallback(async()=>{v(!0),I("");try{const[C,W]=await Promise.all([Va(),eo()]);l(C),d(W),H({})}catch(C){I(C instanceof Error?C.message:t("payment.loadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}U()},[U,n]);async function y(C){const W=(C==null?void 0:C.payment)??a[0]??"",j=Fr(C,W);if(g(j),_({}),I(""),k(""),!!W){$(!0);try{_(await js(W,C==null?void 0:C.id))}catch(O){I(O instanceof Error?O.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function P(C){if(c){g({...c,payment:C,config:{}}),$(!0),I("");try{_(await js(C,c.id))}catch(W){I(W instanceof Error?W.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function F(C){var W,j;if(C.preventDefault(),!!c){D(!0),I(""),k("");try{await to(Ar(c)),g(null),(W=window.showToast)==null||W.call(window,t("payment.saveSuccess"),"success"),await U()}catch(O){(j=window.showToast)==null||j.call(window,O instanceof Error?O.message:t("payment.saveFailed"),"error")}finally{D(!1)}}}async function Q(C){var W;I(""),k("");try{await no(C),await U()}catch(j){(W=window.showToast)==null||W.call(window,j instanceof Error?j.message:t("payment.toggleFailed"),"error")}}async function r(C){var W;(W=window.showConfirm)==null||W.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var j,O;I(""),k("");try{await so(C),(j=window.showToast)==null||j.call(window,t("payment.deleteSuccess"),"success"),await U()}catch(E){(O=window.showToast)==null||O.call(window,E instanceof Error?E.message:t("payment.deleteFailed"),"error")}}})}async function N(C,W){var se;const j=C+W;if(j<0||j>=s.length)return;const O=[...s],E=O[C];O.splice(C,1),O.splice(j,0,E),l(O);try{await io(O.map(b=>b.id)),await U()}catch(b){(se=window.showToast)==null||se.call(window,b instanceof Error?b.message:t("payment.sortFailed"),"error"),await U()}}async function q(C){var j;const W=await zt(C);(j=window.showToast)==null||j.call(window,t(W?"payment.copied":"common.copyFailed"),W?"success":"error")}return e.jsxs(We,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[e.jsx(Re,{size:16}),e.jsx("span",{children:t(m?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void y(),children:[e.jsx(rt,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,m&&s.length===0?e.jsx(Ee,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((C,W)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:C.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void N(W,-1),disabled:W===0,"aria-label":t("payment.moveUp"),children:e.jsx(xs,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void N(W,1),disabled:W===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(hs,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Mn(C.enable)?"active":""}`,type:"button",onClick:()=>void Q(C.id),"aria-label":Mn(C.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:C.name}),C.icon?e.jsx("small",{children:C.icon}):null]}),e.jsx("td",{children:C.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void q(C.notify_url),children:[e.jsx("span",{children:C.notify_url}),e.jsx(Vt,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void y(C),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void r(C.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},C.id)),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((C,W)=>{const j=Mn(C.enable),O=C.handling_fee_percent!==null&&C.handling_fee_percent!==""?`${C.handling_fee_percent}%`:"",E=C.handling_fee_fixed!==null?`${Je(C.handling_fee_fixed)} VND`:"",se=[O,E].filter(Boolean).join(" + ")||"No fees",b=R[C.id],V=C.icon&&!b;return e.jsxs("div",{className:`payment-mobile-card ${j?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",C.id]}),e.jsx("span",{className:"gateway-tag",children:C.payment})]}),e.jsx("button",{className:`admin-switch ${j?"active":""}`,type:"button",onClick:()=>void Q(C.id),"aria-label":t(j?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[V?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:C.icon,alt:C.name,onError:()=>{H(B=>({...B,[C.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:C.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:C.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:se})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void q(C.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:C.notify_url}),e.jsx(Vt,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void N(W,-1),disabled:W===0,"aria-label":t("payment.moveUp"),children:e.jsx(xs,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void N(W,1),disabled:W===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(hs,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void y(C),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void r(C.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},C.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:F,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:c.name,onChange:C=>g({...c,name:C.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:c.icon,onChange:C=>g({...c,icon:C.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:c.notify_domain,onChange:C=>g({...c,notify_domain:C.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:c.handling_fee_percent,onChange:C=>g({...c,handling_fee_percent:C.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:c.handling_fee_fixed,onChange:C=>g({...c,handling_fee_fixed:C.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:c.payment,onChange:C=>void P(C.target.value),children:a.map(C=>e.jsx("option",{value:C,children:C},C))})]}),u?e.jsx(Ee,{label:t("payment.formLoading")}):null,u?null:Object.entries(x).map(([C,W])=>e.jsxs("label",{children:[e.jsx("span",{children:W.label}),e.jsx("input",{className:"config-input",placeholder:W.description,value:String(c.config[C]??W.value??""),onChange:j=>g({...c,config:{...c.config,[C]:j.target.value}})})]},C)),c.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"payment.saving":"common.save")]})]})]})]})}):null]})}function Rr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Hr(n,t){return t[n.field_name]??n.default_value??""}function Ur(){const n=Ue(),{t}=he(),[s,l]=o.useState(null),[a,d]=o.useState(null),[c,g]=o.useState(!0),[x,_]=o.useState(!1),[m,v]=o.useState(!1),[u,$]=o.useState(null),[G,D]=o.useState(""),[S,I]=o.useState(""),T=o.useCallback(async()=>{g(!0),D("");try{l(await ao())}catch(y){D(y instanceof Error?y.message:t("theme.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}T()},[T,n]);async function k(y,P){d(null),_(!0),D(""),I("");try{const F=await oo(y);d({key:y,theme:P,values:F})}catch(F){D(F instanceof Error?F.message:t("theme.configLoadFailed"))}finally{_(!1)}}async function R(y){$(y),D(""),I("");try{await fi({frontend_theme:y}),I(t("theme.activateSuccess")),await T()}catch(P){D(P instanceof Error?P.message:t("theme.activateFailed"))}finally{$(null)}}async function H(y){if(y.preventDefault(),!!a){v(!0),D(""),I("");try{await ro(a.key,a.values),d(null),I(t("theme.saveSuccess")),await T()}catch(P){D(P instanceof Error?P.message:t("theme.saveFailed"))}finally{v(!1)}}}function U(y,P){d(F=>F&&{...F,values:{...F.values,[y]:P}})}return e.jsxs(We,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),G?e.jsx("div",{className:"form-error",children:G}):null,S?e.jsx("div",{className:"form-success",children:S}):null,c&&!s?e.jsx(Ee,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([y,P])=>{const F=s.active===y;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Rr(P)})`},children:F?e.jsxs("span",{className:"theme-active",children:[e.jsx(pi,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:P.name||y}),e.jsx("p",{children:P.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",P.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void k(y,P),children:[e.jsx(wa,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:F||u===y,type:"button",onClick:()=>void R(y),children:[e.jsx(fa,{size:15}),t(F?"theme.current":u===y?"theme.activating":"theme.activate")]})]})]},y)})}):null,x?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx(Ee,{label:t("theme.configLoading")})})}):null,a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:a.theme.name||a.key})}),e.jsx("p",{children:a.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:H,children:[(a.theme.configs??[]).map(y=>{const P=Hr(y,a.values);return e.jsxs("label",{children:[e.jsx("span",{children:y.label}),y.description?e.jsx("p",{className:"field-description",children:y.description}):null,y.field_type==="select"?e.jsx("select",{className:"config-input",value:P,onChange:F=>U(y.field_name,F.target.value),children:Object.entries(y.select_options??{}).map(([F,Q])=>e.jsx("option",{value:F,children:Q},F))}):null,y.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:y.placeholder,rows:5,value:P,onChange:F=>U(y.field_name,F.target.value)}):null,y.field_type!=="select"&&y.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:y.placeholder,value:P,onChange:F=>U(y.field_name,F.target.value)}):null]},y.field_name)}),(a.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:m,children:[e.jsx(lt,{size:16}),t(m?"theme.saving":"common.save")]})]})]})]})}):null]})}const es=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],qr=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Br=["tcp","ws","grpc","http","httpupgrade","xhttp"],zi=["tcp","ws","grpc"],Ti=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Gr=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],fn=["anytls","hysteria2","trojan","tuic"],Wr=["tcp","ws","grpc","httpupgrade","xhttp"],Kr=["chrome","firefox","safari","ios","android","edge","360","qq"],Yr=["vmess","vless","trojan","hysteria","tuic","anytls"],Jr=["trojan","hysteria","tuic","anytls"],Pi=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],yn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},vn=[10,20,50,100],$i="admin_server_manage_page_size";function Ei(n){return vn.includes(n)}function Zr(){if(typeof window>"u")return vn[0];try{const n=Number(window.localStorage.getItem($i));if(Ei(n))return n}catch{}return vn[0]}const cs=typeof window<"u"?window.location.origin:"",Qr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Xr(n,t,s=""){return n[t]??s}function ye(n,t,s=""){return String(Xr(n,t,s))}function Vr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function Tt(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function ts(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function el(n){return n==="vmess"?"networkSettings":"network_settings"}function tl(n,t){const s=n==="vmess",l=n==="vless"||pt(n),a={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return l?{acceptProxyProtocol:!1,...a}:a;case"ws":return l?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function pt(n){return n==="v2node"||n==="zicnode"}function nl(n){return Jr.includes(n)}function sl(n){return pt(n)||Yr.includes(n)}function Ts(n){return n==="vmess"?"tlsSettings":"tls_settings"}function il(n){const t=String((n==null?void 0:n._type)??"");return nl(t)?1:Number((n==null?void 0:n.tls)??0)}function jn(n){return!!n&&n!=="shadowsocks"}function al(n){return n==="vless"||n==="vmess"}function wn(n){return n==="vless"||n==="anytls"}function ol(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function Ps(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?zi:n==="vless"||n==="vmess"?Wr:[]}function rl(n){var t;return pt(n)?"ZicNode":((t=es.find(s=>s.value===n))==null?void 0:t.label)??n}function Ae(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function ds(n){return n===!0||n===1||n==="1"||n==="true"}function $s(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function Mi(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function Nn(n){if(Array.isArray(n))return n.map(t=>String(t).trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();if(!t)return[];try{const s=JSON.parse(t);if(Array.isArray(s))return s.map(l=>String(l).trim()).filter(Boolean)}catch{}return t.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean)}return[]}function Li(n){const t=new Set,s=[];return Nn(n).forEach(l=>{const a=l.toLowerCase();t.has(a)||(t.add(a),s.push(l))}),s}function ll(n){return Mi(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function kn(n){const t={...yn,...Tt(n)};if(!ds(t.enable))return{enable:!1};const l={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:Pi.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(c=>{const g=Ae(t[c]);g&&(l[c]=g)});const a=Mi(t.addresses);a.length&&(l.addresses=a);const d=ll(t.reserved);return d.length&&(l.reserved=d),l}const cl=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],dl=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function bt(n,t){const s=Tt(n);if(t===0)return{};const l={...s};return t===1?cl.forEach(a=>delete l[a]):t===2&&dl.forEach(a=>delete l[a]),Object.keys(l).forEach(a=>{const d=l[a];(d===""||d===null||d===void 0)&&delete l[a]}),l}function pl(n){const t=Tt(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),l=!!(Ae(t.public_key_sha256)||Ae(t.sha256_hex)||Ae(t.sha256));return s==="error"?{state:"error",hasPin:l,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:l?{state:"ready",hasPin:l,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:l,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function Es(n,t=cs){return Ae(n).replace(/\/+$/,"")||t}function Ms(n){return`'${n.replace(/'/g,"'\\''")}'`}function ul(n,t){const s=t.apiHost||cs,l=t.apiKey||"TOKEN_MOI";return`wget -N ${Qr} && \\
bash install.sh --api-host ${Ms(s)} --node-id ${n} --api-key ${Ms(l)}`}function Ls(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function Ds(n,t){if(t){const l=JSON.parse(JSON.stringify(t));if(l.group_id=Ls(l.group_id),l.route_id=Ls(l.route_id),l.load_ips=Li(l.load_ips),pt(n)){l.warp_settings={...yn,...Tt(l.warp_settings)};const a=String(l.protocol??""),d=Number(l.tls??0);d===2&&!wn(a)?l.tls=jn(a)?1:0:fn.includes(a)&&d!==2&&(l.tls=1)}return{_type:n,...l}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],load_ips:[],rate:"1",show:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...yn}};default:return s}}function Di({initialValue:n,placeholder:t,onCancel:s,onSave:l}){const{t:a}=he(),[d,c]=o.useState(()=>ts(n)?JSON.stringify(n,null,2):""),[g,x]=o.useState(""),_=v=>{if(v.preventDefault(),!d.trim()){l({});return}try{const u=JSON.parse(d);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");l(u)}catch(u){x(u instanceof Error?u.message:"Invalid JSON")}},m=v=>{if(c(v),!v.trim()){x("");return}try{const u=JSON.parse(v);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");x("")}catch(u){x(u instanceof Error?u.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:a("node.jsonContent")}),g&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",g]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:g?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:d,onChange:v=>m(v.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:a("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!g,children:a("common.confirm")})]})]})}function oe({label:n,required:t,actionText:s,onAction:l}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&l&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:a=>{a.preventDefault(),l()},children:s})]})}function Is({value:n,onChange:t,label:s,placeholder:l}){const{t:a}=he(),[d,c]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(oe,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((g,x)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((_,m)=>m!==x)),style:{cursor:"pointer"},children:[g," ×"]},x)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:d,placeholder:l??a("node.tagPlaceholder"),onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&d.trim()&&(g.preventDefault(),t([...n,d.trim()]),c(""))}})]})]})}function Fs({options:n,value:t,onChange:s,label:l,actionText:a,onAction:d}){const{t:c}=he(),[g,x]=o.useState(""),_=n.filter(v=>t.includes(v.id)),m=n.filter(v=>v.name.toLowerCase().includes(g.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(oe,{label:l,actionText:a,onAction:d}),_.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:_.map(v=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(u=>u!==v.id)),children:[v.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},v.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${c("common.search")}...`,value:g,onChange:v=>x(v.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[m.map(v=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(v.id),onChange:u=>s(u.target.checked?[...t,v.id]:t.filter($=>$!==v.id))}),e.jsx("span",{children:v.name})]},v.id)),m.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?c("node.noGroupsAvailable"):c("node.noResultsFound")})]})]})}function ut({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:l=>s(l.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function ml({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:l,onCancel:a,onSave:d}){const{t:c}=he(),g=t?"server_name":"serverName",x=t?"allow_insecure":"allowInsecure",_=pt(l),m=sl(l),v=s===1&&m,[u,$]=o.useState(String((n==null?void 0:n[g])??"")),[G,D]=o.useState(String((n==null?void 0:n.dest)??"")),[S,I]=o.useState(String((n==null?void 0:n.server_port)??"443")),[T,k]=o.useState(String((n==null?void 0:n.xver)??"0")),[R,H]=o.useState(String((n==null?void 0:n.private_key)??"")),[U,y]=o.useState(String((n==null?void 0:n.public_key)??"")),[P,F]=o.useState(String((n==null?void 0:n.short_id)??"")),[Q,r]=o.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[N,q]=o.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[C,W]=o.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),j=String((n==null?void 0:n.cert_mode)??"").trim(),[O,E]=o.useState(j||"auto"),[se,b]=o.useState(String((n==null?void 0:n.provider)??"")),[V,B]=o.useState(String((n==null?void 0:n.dns_env)??"")),[X,pe]=o.useState(String((n==null?void 0:n.cert_file)??"")),[Me,Le]=o.useState(String((n==null?void 0:n.key_file)??"")),[De,_e]=o.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[Ne,ge]=o.useState(String((n==null?void 0:n.ech)??"")),[Se,je]=o.useState(String((n==null?void 0:n.ech_server_name)??"")),[Ke,f]=o.useState(String((n==null?void 0:n.ech_key)??"")),[ie,K]=o.useState(String((n==null?void 0:n.ech_config)??"")),[be,Ce]=o.useState(()=>{const ae=n==null?void 0:n[x];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),xe=Tt(n==null?void 0:n.auto_cert),Fe=pl(n==null?void 0:n.auto_cert),qe=ae=>{if(ae.preventDefault(),_&&s===0){d({});return}const mt=_?bt(n,s):Tt(n),ue=_?{...mt,[g]:u,fingerprint:Q}:{...n??{},[g]:u,fingerprint:Q},st=N.trim(),it=C.trim();if(st?ue.pinnedPeerCertSha256=st:delete ue.pinnedPeerCertSha256,delete ue.pinned_peer_cert_sha256,it?ue.verifyPeerCertByName=it:delete ue.verifyPeerCertByName,delete ue.verify_peer_cert_by_name,_&&s!==1?(delete ue.allow_insecure,delete ue.allowInsecure):ue[x]=t?be?1:0:be,s===2&&(ue.dest=G,ue.server_port=S,ue.xver=Number(T)||0,ue.private_key=R,ue.public_key=U,ue.short_id=P,ue.ech=Ne,ue.ech_server_name=Se,ue.ech_key=Ke,ue.ech_config=ie),v){ue.cert_mode=O;const at=n==null?void 0:n.auto_cert;at&&typeof at=="object"&&(ue.auto_cert=at),O==="none"?(delete ue.provider,delete ue.dns_env,delete ue.cert_file,delete ue.key_file):(se.trim()?ue.provider=se:delete ue.provider,V.trim()?ue.dns_env=V:delete ue.dns_env,X.trim()?ue.cert_file=X:delete ue.cert_file,Me.trim()?ue.key_file=Me:delete ue.key_file),ue.reject_unknown_sni=De?"1":"0"}d(_?bt(ue,s):ue)};return e.jsxs("form",{onSubmit:qe,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:c("node.sni")}),e.jsx("input",{className:"config-input",value:u,onChange:ae=>$(ae.target.value),placeholder:c(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dest")}),e.jsx("input",{className:"config-input",value:G,onChange:ae=>D(ae.target.value),placeholder:c("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.servicePort")}),e.jsx("input",{className:"config-input",value:S,onChange:ae=>I(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:T,onChange:ae=>k(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.privateKey")}),e.jsx("input",{className:"config-input",value:R,onChange:ae=>H(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.publicKey")}),e.jsx("input",{className:"config-input",value:U,onChange:ae=>y(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.shortId")}),e.jsx("input",{className:"config-input",value:P,onChange:ae=>F(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.fingerprint")}),e.jsx("select",{className:"config-input",value:Q,onChange:ae=>r(ae.target.value),children:Kr.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:N,onChange:ae=>q(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:C,onChange:ae=>W(ae.target.value),placeholder:"example.com"})]})]}),v?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.certMode")}),e.jsxs("select",{className:"config-input",value:O,onChange:ae=>E(ae.target.value),children:[e.jsx("option",{value:"auto",children:c("node.certModeAuto")}),e.jsx("option",{value:"self",children:c("node.certModeSelf")}),e.jsx("option",{value:"http",children:c("node.certModeHttp")}),e.jsx("option",{value:"dns",children:c("node.certModeDns")}),e.jsx("option",{value:"file",children:c("node.certModeFile")}),e.jsx("option",{value:"none",children:c("node.certModeNone")})]})]}),O!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${Fe.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:c(Fe.labelKey)}),Ae(xe.updated_at)?e.jsx("span",{className:"mono",children:Ae(xe.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:c(Fe.detailKey)}),Ae(xe.target)||Ae(xe.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[Ae(xe.target)?`${c("node.autoCertTarget")}: ${Ae(xe.target)}`:"",Ae(xe.target)&&Ae(xe.source)?" · ":"",Ae(xe.source)?`${c("node.autoCertSource")}: ${Ae(xe.source)}`:""]}):null,Ae(xe.public_key_sha256)||Ae(xe.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:Ae(xe.public_key_sha256)?`${c("node.autoCertPublicKeySha")}: ${Ae(xe.public_key_sha256)}`:`${c("node.autoCertSha")}: ${Ae(xe.sha256_hex)}`}):null,Ae(xe.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:Ae(xe.error)}):null]}):null,O==="dns"||O==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>b(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:V,onChange:ae=>B(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,O!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.certFile")}),e.jsx("input",{className:"config-input",value:X,onChange:ae=>pe(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.keyFile")}),e.jsx("input",{className:"config-input",value:Me,onChange:ae=>Le(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null,e.jsx(ut,{label:c("node.rejectUnknownSni"),checked:De,onChange:_e})]}):null,!_||_&&s===1?e.jsx(ut,{label:c("node.allowInsecure"),checked:be,onChange:Ce}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.ech")}),e.jsxs("select",{className:"config-input",value:Ne,onChange:ae=>ge(ae.target.value),children:[e.jsx("option",{value:"",children:c("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:c("node.echCustom")})]})]}),Ne==="cloudflare"?e.jsx("div",{className:"config-warning",children:c("node.echCloudflareHelp")}):null,Ne==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echServerName")}),e.jsx("input",{className:"config-input",value:Se,onChange:ae=>je(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echKey")}),e.jsx("input",{className:"config-input",value:Ke,onChange:ae=>f(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echConfig")}),e.jsx("input",{className:"config-input",value:ie,onChange:ae=>K(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:a,children:c("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:c("common.confirm")})]})]})}function hl({draft:n,set:t,groups:s,routes:l,nodes:a,onOpenJson:d,onAddGroup:c,onOpenTransportConfig:g}){const{t:x}=he(),_=String(n._type),m=pt(_),v=ye(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:x("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"name"),onChange:u=>t("name",u.target.value),placeholder:x("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:ye(n,"rate","1"),onChange:u=>t("rate",u.target.value)})]})]}),e.jsx(Is,{value:n.tags??[],onChange:u=>t("tags",u),label:x("node.tags")}),e.jsx(Is,{value:Nn(n.load_ips),onChange:u=>t("load_ips",u),label:x("node.loadIps"),placeholder:x("node.loadIpsPlaceholder")}),e.jsx(Fs,{options:s.map(u=>({id:u.id,name:u.name})),value:n.group_id??[],onChange:u=>t("group_id",u),label:x("node.permissionGroups"),actionText:x("node.addGroup"),onAction:c}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"host"),onChange:u=>t("host",u.target.value),placeholder:x("node.addressPlaceholder")})]}),m?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.listenIp")}),e.jsx("input",{className:"config-input",value:ye(n,"listen_ip"),onChange:u=>t("listen_ip",u.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(_)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?x("node.editConfig"):void 0,onAction:()=>{const u=Ts(_);d(x("node.connectionSecurityConfig"),u)}}),e.jsxs("select",{className:"config-input",value:ye(n,"tls","0"),onChange:u=>{const $=Number(u.target.value);t("tls",$);const G=Ts(_);$!==0&&!n[G]&&t(G,{})},children:[e.jsx("option",{value:"0",children:x("node.none")}),e.jsx("option",{value:"1",children:x("node.useTls")}),_!=="vmess"&&e.jsx("option",{value:"2",children:x("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(_)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.sni"),actionText:x("node.editConfig"),onAction:()=>d(x("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:ye(n,"server_name"),onChange:u=>t("server_name",u.target.value),placeholder:x("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"port"),onChange:u=>t("port",u.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"server_port"),onChange:u=>t("server_port",u.target.value),placeholder:"443"})]})]}),m?e.jsx(wl,{draft:n,set:t,onOpenJson:d,onOpenTransportConfig:g,onOpenSecurityConfig:()=>d(x("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(_)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:x("node.transportProtocol"),required:!0,actionText:x("node.editConfig"),onAction:g}),e.jsxs("select",{className:"config-input",value:v,onChange:u=>{t("network",u.target.value);const $=_==="vmess"?"networkSettings":"network_settings";n[$]||t($,{})},children:[_==="vmess"&&qr.map(u=>e.jsx("option",{value:u,children:u},u)),_==="trojan"&&zi.map(u=>e.jsx("option",{value:u,children:u},u)),_==="vless"&&Br.map(u=>e.jsx("option",{value:u,children:u},u))]})]}):null,_==="trojan"&&e.jsx(bl,{draft:n,set:t}),_==="shadowsocks"&&e.jsx(gl,{draft:n,set:t,onOpenJson:d}),_==="hysteria"&&e.jsx(fl,{draft:n,set:t}),_==="tuic"&&e.jsx(yl,{draft:n,set:t}),_==="vless"&&e.jsx(vl,{draft:n,set:t,onOpenJson:d}),_==="anytls"&&e.jsx(jl,{draft:n,set:t,onOpenJson:d}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:x("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:u=>t("parent_id",u.target.value?Number(u.target.value):null),children:[e.jsx("option",{value:"",children:x("node.none")}),a.filter(u=>u.id!==n.id&&!u.parent_id).map(u=>e.jsx("option",{value:u.id,children:u.name},u.id))]})]}),e.jsx(Fs,{options:l.map(u=>({id:u.id,name:u.remarks})),value:n.route_id??[],onChange:u=>t("route_id",u),label:x("node.routingGroups")})]})]})}function xl({draft:n,set:t,onCancel:s,onSave:l}){const a=String(n._type),d=String(n.network??"tcp"),c=el(a),g=n[c],x=ts(g)?Tt(g):{},_=tl(a,d),m=ts(_)?JSON.stringify(_,null,2):void 0;return e.jsx(Di,{initialValue:x,placeholder:m,onCancel:s,onSave:v=>{t(c,v),l()}})}function bl({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:l=>t("allow_insecure",l?1:0)})]})}function gl({draft:n,set:t,onOpenJson:s}){const{t:l}=he(),a=Vr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:d=>t("cipher",d.target.value),children:Ti.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:l("node.obfs"),actionText:n.obfs==="http"?l("node.editConfig"):void 0,onAction:()=>s(l("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:d=>t("obfs",d.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(a.host??""),onChange:d=>t("obfs_settings",{...a,host:d.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(a.path??""),onChange:d=>t("obfs_settings",{...a,path:d.target.value}),placeholder:"/"})]})]})]})}function fl({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:ye(n,"version","2"),onChange:l=>t("version",Number(l.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:l=>t("up_mbps",Number(l.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:l=>t("down_mbps",Number(l.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs"),onChange:l=>t("obfs",l.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:l=>t("obfs_password",l.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)})]})}function yl({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:l=>t("udp_relay_mode",l.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:l=>t("congestion_control",l.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)}),e.jsx(ut,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:l=>t("disable_sni",l?1:0)}),e.jsx(ut,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:l=>t("zero_rtt_handshake",l?1:0)})]})}function vl({draft:n,set:t,onOpenJson:s}){const{t:l}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:a=>t("flow",a.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.encryption"),actionText:ye(n,"encryption")?l("node.editConfig"):void 0,onAction:()=>s(l("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:a=>t("encryption",a.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function jl({draft:n,set:t,onOpenJson:s}){const{t:l}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.paddingScheme"),actionText:l("node.editConfig"),onAction:()=>s(l("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(ut,{label:l("node.allowInsecure"),checked:n.insecure===1,onChange:a=>t("insecure",a?1:0)})]})}function wl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:l,onOpenSecurityConfig:a}){const{t:d}=he(),c=ye(n,"protocol"),g=Ps(c),x={...yn,...Tt(n.warp_settings)},_=ds(x.enable),m=(u,$)=>{t("warp_settings",kn({...x,[u]:$}))},v=u=>{if(t("protocol",u),!u){t("tls",0),t("network","tcp");return}fn.includes(u)?(t("tls",1),n.tls_settings||t("tls_settings",{})):u==="shadowsocks"?t("tls",0):u==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const $=Ps(u);($.length===0||!$.includes(ye(n,"network","tcp")))&&t("network","tcp"),u!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),u!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),u!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:c,onChange:u=>v(u.target.value),children:[e.jsx("option",{value:"",children:d("node.selectNodeProtocol")}),Gr.map(u=>e.jsx("option",{value:u,children:u},u))]})]}),c?e.jsxs(e.Fragment,{children:[jn(c)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?d("node.editConfig"):void 0,onAction:a}),e.jsxs("select",{className:"config-input",value:ye(n,"tls",fn.includes(c)?"1":"0"),onChange:u=>{const $=Number(u.target.value);t("tls",$),$!==0&&!n.tls_settings&&t("tls_settings",{})},children:[al(c)?e.jsx("option",{value:"0",children:d("node.none")}):null,e.jsx("option",{value:"1",children:d("node.useTls")}),wn(c)?e.jsx("option",{value:"2",children:d("node.reality")}):null]})]}):null,ol(c)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.transportProtocol"),required:!0,actionText:d("node.editConfig"),onAction:l}),e.jsx("select",{className:"config-input",value:g.includes(ye(n,"network","tcp"))?ye(n,"network","tcp"):"tcp",onChange:u=>{t("network",u.target.value),n.network_settings||t("network_settings",{})},children:g.map(u=>e.jsx("option",{value:u,children:u},u))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:d("node.warpOutbound")}),e.jsx(ut,{label:d("node.warpEnable"),checked:_,onChange:u=>t("warp_settings",kn({...x,enable:u}))}),_?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(x.mode??"auto"),onChange:u=>m("mode",u.target.value),children:[e.jsx("option",{value:"auto",children:d("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:d("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(x.fail_policy??"direct"),onChange:u=>m("fail_policy",u.target.value),children:[e.jsx("option",{value:"direct",children:d("node.warpFailDirect")}),e.jsx("option",{value:"block",children:d("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(x.mtu??1280),onChange:u=>m("mtu",Number(u.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(x.domain_strategy??"ForceIPv4v6"),onChange:u=>m("domain_strategy",u.target.value),children:Pi.map(u=>e.jsx("option",{value:u,children:u},u))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(x.private_key??""),onChange:u=>m("private_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(x.peer_public_key??""),onChange:u=>m("peer_public_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(x.endpoint??"engage.cloudflareclient.com:2408"),onChange:u=>m("endpoint",u.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:$s(x.addresses),onChange:u=>m("addresses",u.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpReserved")}),e.jsx("input",{className:"config-input",value:$s(x.reserved),onChange:u=>m("reserved",u.target.value)})]})]})]}):null,c==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.encryption"),actionText:ye(n,"encryption")?d("node.editConfig"):void 0,onAction:()=>s(d("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:u=>t("encryption",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:u=>t("flow",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),c==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:u=>t("cipher",u.target.value),children:Ti.map(u=>e.jsx("option",{value:u,children:u},u))})]}),c==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:u=>t("up_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:u=>t("down_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:u=>t("obfs",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),ye(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:u=>t("obfs_password",u.target.value),placeholder:d("node.autoGenHelp")})]}):null]})]}),c==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:u=>t("udp_relay_mode",u.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:u=>t("congestion_control",u.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ut,{label:d("node.disableSni"),checked:n.disable_sni===1,onChange:u=>t("disable_sni",u?1:0)}),e.jsx(ut,{label:d("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:u=>t("zero_rtt_handshake",u?1:0)})]}),c==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>s(d("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const As={vmess:ka,vless:Ma,trojan:Kn,shadowsocks:is,hysteria:va,tuic:na,anytls:nn,v2node:xn,zicnode:xn},Nl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},kl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function kt(n){return Nl[n]??kl}function _l({draft:n,config:t,onCopy:s,t:l}){const a=Number(n.id??0),d=a>0?ul(a,t):"",c=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:l("node.quickInstallTitle")}),e.jsx("span",{children:l("node.quickInstallHelp")})]}),a>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:d}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(d),children:[e.jsx(Vt,{size:15}),l("node.copyInstallCommand")]}),c?e.jsx("span",{className:"node-install-warning",children:l("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:l("node.installSaveFirst")})]})}function Sl(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState([]),[x,_]=o.useState(null),[m,v]=o.useState(null),[u,$]=o.useState(!0),[G,D]=o.useState(!1),[S,I]=o.useState(""),[T,k]=o.useState(""),[R,H]=o.useState(1),[U,y]=o.useState(()=>Zr()),[P,F]=o.useState(!1),[Q,r]=o.useState({}),[N,q]=o.useState({apiHost:cs,apiKey:""}),[C,W]=o.useState(!1),[j,O]=o.useState(""),[E,se]=o.useState(null),[b,V]=o.useState(null),[B,X]=o.useState(null),[pe,Me]=o.useState(null),[Le,De]=o.useState(null),[_e,Ne]=o.useState(null),[ge,Se]=o.useState(null),je=(h,M)=>{h.dataTransfer.effectAllowed="move",Ne(M)},Ke=(h,M)=>{if(h.preventDefault(),_e===null||_e===M)return;const i=[...s],w=i[_e];i.splice(_e,1),i.splice(M,0,w),Ne(M),l(i)},f=()=>{Ne(null)},ie=(h,M)=>{P&&Se(M)},K=h=>{if(!P||ge===null)return;h.cancelable&&h.preventDefault();const M=h.touches[0],i=document.elementFromPoint(M.clientX,M.clientY);if(!i)return;const w=i.closest(".mobile-node-card");if(!w)return;const L=w.getAttribute("data-index");if(L===null)return;const A=Number(L);if(A!==ge&&A>=0&&A<s.length){const ce=[...s],ve=ce[ge];ce.splice(ge,1),ce.splice(A,0,ve),Se(A),l(ce)}},be=()=>{Se(null)},Ce=o.useCallback(h=>{const M=Le===h;De(M?null:h),Me(i=>M&&i===h?null:i),M||(X(null),V(null))},[Le]),xe=o.useCallback(h=>{const M=B===h;X(M?null:h),V(i=>M&&i===h?null:i),M||(De(null),Me(null))},[B]);o.useEffect(()=>{const h=M=>{const i=M.target;if(!i)return;const w=i instanceof Element?i:i.parentElement;w!=null&&w.closest(".load-ip-status-wrap, .load-ip-online-wrap")||(De(null),X(null))};return document.addEventListener("mousedown",h),document.addEventListener("touchstart",h),()=>{document.removeEventListener("mousedown",h),document.removeEventListener("touchstart",h)}},[]),o.useEffect(()=>{H(1)},[j,U]),o.useEffect(()=>{try{window.localStorage.setItem($i,String(U))}catch{}},[U]);const Fe=s.filter(h=>{const M=j.toLowerCase().trim();return M?h.name.toLowerCase().includes(M)||h.host.toLowerCase().includes(M)||Nn(h.load_ips).some(i=>i.toLowerCase().includes(M))||String(h.id).includes(M)||h.type.toLowerCase().includes(M):!0}),qe=Math.ceil(Fe.length/U),ae=Fe.slice((R-1)*U,R*U);function mt(h,M){return M<=7?Array.from({length:M},(i,w)=>w+1):h<=4?[1,2,3,4,5,"...",M]:h>=M-3?[1,"...",M-4,M-3,M-2,M-1,M]:[1,"...",h-1,h,h+1,"...",M]}const ue=mt(R,qe),st=async()=>{var h,M;D(!0),I(""),k("");try{const i={};s.forEach((w,L)=>{i[w.type]||(i[w.type]={}),i[w.type][String(w.id)]=L+1}),await cr(i),(h=window.showToast)==null||h.call(window,t("node.saveSortSuccess"),"success"),F(!1),await ht()}catch(i){I(i instanceof Error?i.message:t("node.saveSortFailed")),(M=window.showToast)==null||M.call(window,i instanceof Error?i.message:t("node.saveSortFailed"),"error")}finally{D(!1)}},it=async()=>{F(!1),await et()},at=()=>Fe.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===1,onClick:()=>H(h=>Math.max(h-1,1)),children:"<"}),ue.map((h,M)=>h==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${M}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${R===h?"active":""}`,onClick:()=>H(Number(h)),children:h},`page-${h}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===qe||qe===0,onClick:()=>H(h=>Math.min(h+1,qe)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:U,onChange:h=>{const M=Number(h.target.value);Ei(M)&&y(M)},children:vn.map(h=>e.jsxs("option",{value:h,children:[h," / ",t("common.perPage")]},h))})})]}),[z,le]=o.useState(null),[re,te]=o.useState(!1),[fe,me]=o.useState(""),[ze,Te]=o.useState(!1),[Qe,Ve]=o.useState(!1);async function Be(h){var i,w;h.preventDefault();const M=fe.trim();if(!(!M||!x)){Te(!0),I(""),k("");try{await os({name:M});const L=await Ut();d(L);const A=L.filter(ce=>ce.name===M).sort((ce,ve)=>ve.id-ce.id)[0];if(A){const ce=x.group_id??[];ce.includes(A.id)||Pe("group_id",[...ce,A.id])}me(""),te(!1),(i=window.showToast)==null||i.call(window,t("node.groupCreateSuccess"),"success")}catch(L){I(L instanceof Error?L.message:t("node.groupCreateFailed")),(w=window.showToast)==null||w.call(window,L instanceof Error?L.message:t("node.groupCreateFailed"),"error")}finally{Te(!1)}}}const $t=(h,M)=>{if(!x)return;let i=x[M];if(typeof i=="string"&&i.trim())try{i=JSON.parse(i)}catch{}["tlsSettings","tls_settings"].includes(M)&&pt(String(x._type))&&(i=bt(i,Number(x.tls??0))),le({title:h,key:M,value:i&&typeof i=="object"?i:{}})},et=o.useCallback(async()=>{var h,M,i,w,L;$(!0),I("");try{const[A,ce,ve,$e]=await Promise.all([ws(),Ut(),vi(),gi()]);l(A.data),d(ce),g(ve);const we=Es((h=$e.site)==null?void 0:h.app_url);q({apiHost:Es((M=$e.server)==null?void 0:M.server_api_url,we),apiKey:Ae((i=$e.server)==null?void 0:i.server_token)}),W(ds(((w=$e.subscribe)==null?void 0:w.device_hwid_available)??((L=$e.subscribe)==null?void 0:L.device_hwid_enable)))}catch(A){I(A instanceof Error?A.message:t("knowledge.loadFailed"))}finally{$(!1)}},[]),ht=o.useCallback(async()=>{try{const h=await ws();l(h.data)}catch(h){console.error("Refresh nodes failed",h)}},[]);async function qt(h){var i;const M=await zt(h);(i=window.showToast)==null||i.call(window,t(M?"node.installCopied":"common.copyFailed"),M?"success":"error")}o.useEffect(()=>{if(!He()){n.replace("/login");return}et()},[et,n]);function Ft(h){_(Ds(h)),v(null),I(""),k("")}function Et(h){_(Ds(h.type,h)),I(""),k("")}function Mt(h,M){if(!C||!M&&Number(h.online??0)<=0)return;const i=new URLSearchParams({node_type:h.type,node_id:String(h.id)}),w=String(M??"").trim();w&&i.set("online_ip",w),n.push(`/device?${i.toString()}`)}function At(h){return h.reported?h.online>0?2:1:0}function wt(h,M){const i=Ot(h);if(!i.length)return null;const w=`${Nt(h)}-load-ip-status`,L=Le===w||pe===w;return e.jsxs("span",{className:`load-ip-status-wrap ${M}${L?" active":""}`,onMouseEnter:M==="desktop"?()=>Me(w):void 0,onMouseLeave:M==="desktop"?()=>Me(A=>A===w?null:A):void 0,children:[e.jsx("button",{className:"load-ip-status-button",type:"button","aria-expanded":L,"aria-label":t("node.loadIpStatusTitle"),onClick:()=>Ce(w),children:e.jsx(xn,{size:14})}),L?e.jsxs("div",{className:"load-ip-status-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpStatusTitle")}),e.jsxs("strong",{children:[i.length," IP"]})]}),e.jsx("div",{className:"load-ip-status-list",children:i.map(A=>{const ce=At(A);return e.jsxs("div",{className:"load-ip-status-row",children:[e.jsx("span",{className:`status-indicator-dot status-${ce}`}),e.jsx("span",{className:"mono",children:A.ip})]},A.ip)})})]}):null]})}function Nt(h){return`${h.type}-${h.id}`}function Ot(h){const M=Nn(h.load_ips),i=Array.isArray(h.load_ip_online)?h.load_ip_online:[],w=new Map;return i.forEach(L=>{if(!L||typeof L!="object")return;const A=L,ce=String(A.ip??"").trim();if(!ce)return;const ve=A.last_push_at;w.set(ce,{online:Math.max(0,Number(A.online??0)),lastPushAt:ve==null||ve===""?null:Number(ve)})}),M.map(L=>{const A=w.get(L);return{ip:L,online:Math.max(0,Number((A==null?void 0:A.online)??0)),lastPushAt:(A==null?void 0:A.lastPushAt)??null,reported:(A==null?void 0:A.lastPushAt)!==null&&(A==null?void 0:A.lastPushAt)!==void 0}})}function p(h,M){return M.some(i=>i.reported)?M.reduce((i,w)=>i+w.online,0):Number(h.online??0)}function Y(h,M,i){return e.jsxs("div",{className:"load-ip-online-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpOnlineByIp")}),e.jsxs("strong",{children:[t("node.loadIpOnlineTotal"),": ",i]})]}),e.jsx("div",{className:"load-ip-online-list",children:M.map(w=>{const L=C&&w.online>0;return e.jsxs("div",{className:"load-ip-online-row",children:[e.jsx("span",{className:"mono",children:w.ip}),e.jsxs("span",{className:"load-ip-online-actions",children:[e.jsx("span",{className:`load-ip-online-count${w.reported?"":" is-muted"}`,children:w.reported?w.online:t("node.loadIpOnlineNoReport")}),L?e.jsx("button",{className:"load-ip-online-device-button",type:"button","aria-label":`${t("device.title")} ${w.ip}`,onClick:A=>{A.stopPropagation(),Mt(h,w.ip)},children:e.jsx(Qn,{size:12})}):null]})]},w.ip)})})]})}function ne(h,M){const i=Ot(h),w=i.length>0,L=w?p(h,i):Number(h.online??0),A=!w&&C&&L>0,ve=`${M==="mobile"?"mobile-badge-pill":"online-badge"}${A||w?" online-badge-link":""}${w?" load-ip-online-trigger":""}`,$e=M==="mobile"?12:13,we={...M==="mobile"?{marginRight:4}:{},color:L>0?"#10b981":"var(--muted)",opacity:L>0?1:.6},nt=w?xn:Qn,Gt=e.jsxs(e.Fragment,{children:[e.jsx(nt,{size:$e,style:we}),L]});if(w){const Wt=Nt(h),Cn=B===Wt||b===Wt;return e.jsxs("span",{className:`load-ip-online-wrap${Cn?" active":""}`,onMouseEnter:M==="desktop"?()=>V(Wt):void 0,onMouseLeave:M==="desktop"?()=>V(us=>us===Wt?null:us):void 0,children:[e.jsx("button",{className:ve,type:"button","aria-expanded":Cn,onClick:()=>xe(Wt),children:Gt}),Cn?Y(h,i,L):null]})}return A?e.jsx("button",{className:ve,type:"button",onClick:()=>Mt(h),children:Gt}):e.jsx("span",{className:ve,children:Gt})}async function de(h){var A,ce,ve,$e;if(h.preventDefault(),!x)return;D(!0),I(""),k("");const M=String(x._type),i={...x};if(pt(M)&&!Ae(i.protocol)){I(t("node.protocolRequired")),(A=window.showToast)==null||A.call(window,t("node.protocolRequired"),"error"),D(!1);return}if(i.load_ips=Li(i.load_ips),i.load_ips.length>100){I(t("node.loadIpsLimit")),(ce=window.showToast)==null||ce.call(window,t("node.loadIpsLimit"),"error"),D(!1);return}for(const we of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete i[we];if(i.padding_scheme!==void 0&&i.padding_scheme!==null&&typeof i.padding_scheme!="string"&&(i.padding_scheme=JSON.stringify(i.padding_scheme)),i.padding_scheme)try{const we=JSON.parse(String(i.padding_scheme));if(typeof we!="object"||we===null)throw new Error("Invalid JSON array or object")}catch(we){I("Invalid Padding Scheme configuration: "+(we instanceof Error?we.message:"JSON error")),D(!1);return}const w=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const we of w)(i[we]===""||i[we]===null||i[we]===void 0)&&delete i[we];if(pt(M)){const we=String(i.protocol??""),nt=Number(i.tls??0);i.warp_settings=kn(i.warp_settings),jn(we)?fn.includes(we)&&nt!==2||!wn(we)&&nt===2?(i.tls=1,i.tls_settings=bt(i.tls_settings,1)):i.tls_settings=bt(i.tls_settings,nt):(i.tls=0,i.tls_settings={})}const L=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const we of L){const nt=i[we];(nt==null||typeof nt=="object"&&Object.keys(nt).length===0)&&delete i[we]}i.port!==void 0&&(i.port=String(i.port).trim()),i.server_port!==void 0&&(i.server_port=Number(i.server_port)),i.tls!==void 0&&(i.tls=Number(i.tls)),i.rate!==void 0&&(i.rate=Number(i.rate));try{await ar(M,i),_(null),(ve=window.showToast)==null||ve.call(window,t("node.saveSuccess"),"success"),await ht()}catch(we){I(we instanceof Error?we.message:t("node.saveFailed")),($e=window.showToast)==null||$e.call(window,we instanceof Error?we.message:t("node.saveFailed"),"error")}finally{D(!1)}}async function Ie(h){const M=[...s];l(i=>i.map(w=>w.id===h.id&&w.type===h.type?{...w,show:h.show?0:1}:w));try{await rr(h.type,h.id,h.show?0:1),await ht()}catch(i){l(M),I(i instanceof Error?i.message:t("node.updateFailed"))}}async function dt(h){var M,i;try{await lr(h.type,h.id),(M=window.showToast)==null||M.call(window,t("node.copySuccess"),"success"),await ht()}catch(w){I(w instanceof Error?w.message:t("node.copyFailed")),(i=window.showToast)==null||i.call(window,w instanceof Error?w.message:t("node.copyFailed"),"error")}}async function gt(h){var M;(M=window.showConfirm)==null||M.call(window,{message:t("node.deleteConfirm",{name:h.name}),onConfirm:async()=>{var w,L;const i=[...s];l(A=>A.filter(ce=>!(ce.id===h.id&&ce.type===h.type))),I("");try{await or(h.type,h.id),(w=window.showToast)==null||w.call(window,t("node.deleteSuccess"),"success"),await ht()}catch(A){l(i),I(A instanceof Error?A.message:t("node.deleteFailed")),(L=window.showToast)==null||L.call(window,A instanceof Error?A.message:t("node.deleteFailed"),"error")}}})}const Pe=(h,M)=>_(i=>{if(!i)return null;const w={...i,[h]:M};if(!pt(String(w._type)))return w;if(h==="tls_settings"&&(w.tls_settings=bt(M,Number(w.tls??0))),h==="tls"&&(w.tls_settings=bt(w.tls_settings,Number(M))),h==="warp_settings"&&(w.warp_settings=kn(M)),h==="protocol"){const L=String(M);jn(L)?!wn(L)&&Number(w.tls??0)===2?(w.tls=1,w.tls_settings=bt(w.tls_settings,1)):w.tls_settings=bt(w.tls_settings,Number(w.tls??0)):(w.tls=0,w.tls_settings={})}return w}),Bt=x?String(x._type):"",Lt=rl(Bt);return e.jsxs(We,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>v(m?null:"show"),children:e.jsx(rt,{size:18})}),m!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>v(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),es.map(h=>{const M=kt(h.value),i=As[h.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ft(h.value),v(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:M==null?void 0:M.bg,backgroundColor:M==null?void 0:M.rowBg},children:e.jsx(i,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(M==null?void 0:M.bg)??"var(--surface-soft)",color:(M==null?void 0:M.text)??"#ffffff"},children:h.label})]},h.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:j,onChange:h=>O(h.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${P?"success-btn":""}`,type:"button",onClick:P?st:()=>F(!0),disabled:G,children:t(P?G?"node.saving":"node.saveOrder":"node.editSortOrder")}),P&&e.jsx("button",{className:"ghost-button",type:"button",onClick:it,children:t("common.cancel")})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t(P?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[ae.map(h=>{const M=s.findIndex(i=>i.id===h.id&&i.type===h.type);return e.jsxs("tr",{draggable:P,onDragStart:i=>je(i,M),onDragOver:i=>Ke(i,M),onDragEnd:f,className:_e===M?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:kt(h.type).bg,color:kt(h.type).text,border:`1px solid ${kt(h.type).border}`},children:h.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${h.show?"active":""}`,type:"button",onClick:()=>void Ie(h),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"node-name-cell",children:e.jsxs("div",{className:"node-name-line",children:[wt(h,"desktop")??e.jsx("span",{className:`status-indicator-dot status-${h.available_status??0}`}),e.jsx("strong",{children:h.name})]})})}),e.jsx("td",{className:"mobile-hide",children:e.jsxs("span",{className:"mono",children:[h.host,":",h.port||h.server_port]})}),e.jsx("td",{children:ne(h,"desktop")}),e.jsxs("td",{className:"mobile-hide",children:[h.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const i=h.group_id??[],w=Q[`${h.type}-${h.id}`],L=i.map(ve=>{const $e=a.find(we=>Number(we.id)===Number(ve));return e.jsx("span",{className:"tag",children:($e==null?void 0:$e.name)??`#${ve}`},ve)});if(i.length<=3||w)return e.jsxs(e.Fragment,{children:[L,i.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>r(ve=>({...ve,[`${h.type}-${h.id}`]:!1})),children:t("node.collapse")})]});const A=L.slice(0,3),ce=i.length-3;return e.jsxs(e.Fragment,{children:[A,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>r(ve=>({...ve,[`${h.type}-${h.id}`]:!0})),children:["+",ce,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:i.length})}),L]})]})]})})()})}),e.jsx("td",{children:P?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type?null:{id:h.id,type:h.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(h),se(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dt(h),se(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{gt(h),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})})]},`${h.type}-${h.id}`)}),!u&&Fe.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),at()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>v(m?null:"show"),children:e.jsx(rt,{size:20})}),m!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>v(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),es.map(h=>{const M=kt(h.value),i=As[h.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ft(h.value),v(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:M==null?void 0:M.bg,backgroundColor:M==null?void 0:M.rowBg},children:e.jsx(i,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(M==null?void 0:M.bg)??"var(--surface-soft)",color:(M==null?void 0:M.text)??"#ffffff"},children:h.label})]},h.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:j,onChange:h=>O(h.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${P?"active":""}`,type:"button",onClick:()=>F(!P),children:e.jsx(Qt,{size:20})})]}),P&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:it,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void st(),disabled:G,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(G?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[ae.map(h=>{const M=s.findIndex(i=>i.id===h.id&&i.type===h.type);return e.jsxs("div",{className:`mobile-node-card ${_e===M||ge===M?"dragging":""}`,draggable:P,onDragStart:i=>je(i,M),onDragOver:i=>Ke(i,M),onDragEnd:f,onTouchStart:i=>ie(i,M),onTouchMove:K,onTouchEnd:be,"data-index":M,style:P?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("div",{className:"card-header-left",children:e.jsxs("div",{className:"mobile-node-name-line",children:[wt(h,"mobile")??e.jsx("span",{className:`status-indicator-dot status-${h.available_status??0}`}),e.jsx("span",{className:"mobile-node-name",children:h.name})]})}),e.jsx("div",{className:"card-header-right",children:P?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`admin-switch ${h.show===1?"active":""}`,onClick:()=>void Ie(h),children:e.jsx("span",{className:"admin-switch-thumb"})}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type?null:{id:h.id,type:h.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(E==null?void 0:E.id)===h.id&&(E==null?void 0:E.type)===h.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(h),se(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dt(h),se(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{gt(h),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsx("div",{className:"card-middle-row",children:e.jsxs("span",{className:"mobile-node-address",children:[h.host,":",h.port||h.server_port]})}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:kt(h.type).bg,color:kt(h.type).text,border:`1px solid ${kt(h.type).border}`},children:h.id}),ne(h,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[h.rate," x"]})]})]},`${h.type}-${h.id}`)}),!u&&Fe.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),at()]}),x!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:x.id?t("node.editNodeTitle",{type:Lt}):t("node.createNodeTitle",{type:Lt})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:Lt})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:de,children:[e.jsx(hl,{draft:x,set:Pe,groups:a,routes:c,nodes:s,onOpenJson:$t,onAddGroup:()=>te(!0),onOpenTransportConfig:()=>Ve(!0)}),pt(Bt)?e.jsx(_l,{draft:x,config:N,onCopy:h=>void qt(h),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"node.saving":"common.save")]})]})]})]})}),z!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:z.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(z.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>le(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(z.key)?e.jsx(ml,{initialValue:z.value,isSnakeCase:z.key==="tls_settings",tlsMode:il(x),nodeType:String((x==null?void 0:x._type)??""),onCancel:()=>le(null),onSave:h=>{Pe(z.key,h),le(null)}}):e.jsx(Di,{initialValue:z.value,onCancel:()=>le(null),onSave:h=>{Pe(z.key,h),le(null)}})})]})}),re&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:Be,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:fe,onChange:h=>me(h.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(!1),disabled:ze,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ze||!fe.trim(),children:t(ze?"node.saving":"common.confirm")})]})]})]})}),Qe&&x!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(x.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ve(!1),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(xl,{draft:x,set:Pe,onCancel:()=>Ve(!1),onSave:()=>Ve(!1)})})]})})]})}function Cl(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[x,_]=o.useState(!1),[m,v]=o.useState(""),u=o.useCallback(async()=>{g(!0),v("");try{l(await Ut())}catch(S){v(S instanceof Error?S.message:t("serverGroup.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function $(S){d({id:S==null?void 0:S.id,name:(S==null?void 0:S.name)??""}),v("")}async function G(S){var I;if(S.preventDefault(),!!a){_(!0),v("");try{await os(a),d(null),(I=window.showToast)==null||I.call(window,t("serverGroup.saveSuccess"),"success"),await u()}catch(T){v(T instanceof Error?T.message:t("serverGroup.saveFailed"))}finally{_(!1)}}}async function D(S){var I;(I=window.showConfirm)==null||I.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var T,k;v("");try{await lo(S),(T=window.showToast)==null||T.call(window,t("serverGroup.deleteSuccess"),"success"),await u()}catch(R){v(R instanceof Error?R.message:t("serverGroup.deleteFailed")),(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(rt,{size:16}),t("serverGroup.add")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,c&&s.length===0?e.jsx(Ee,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(S=>e.jsxs("tr",{children:[e.jsx("td",{children:S.id}),e.jsx("td",{children:e.jsx("strong",{children:S.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),S.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(bn,{size:14}),S.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(S),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(S.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},S.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:a.name,onChange:S=>d({...a,name:S.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function zl(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function Tl(n){var t;return((t=yi.find(s=>s.value===n))==null?void 0:t.label)??n}function Pl(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[x,_]=o.useState(!1),[m,v]=o.useState(""),u=o.useCallback(async()=>{g(!0),v("");try{l(await vi())}catch(S){v(S instanceof Error?S.message:t("serverRoute.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function $(S){d(zl(S)),v("")}async function G(S){var T;if(S.preventDefault(),!a)return;_(!0),v("");const I=a.action==="default_out"?[]:a.match.split(`
`).map(k=>k.trim()).filter(Boolean);try{await co({id:a.id,remarks:a.remarks,match:I,action:a.action,action_value:a.action_value||null}),d(null),(T=window.showToast)==null||T.call(window,t("serverRoute.saveSuccess"),"success"),await u()}catch(k){v(k instanceof Error?k.message:t("serverRoute.saveFailed"))}finally{_(!1)}}async function D(S){var I;(I=window.showConfirm)==null||I.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var T,k;v("");try{await po(S),(T=window.showToast)==null||T.call(window,t("serverRoute.deleteSuccess"),"success"),await u()}catch(R){v(R instanceof Error?R.message:t("serverRoute.deleteFailed")),(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(rt,{size:16}),t("serverRoute.add")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,c&&s.length===0?e.jsx(Ee,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(S=>e.jsxs("tr",{children:[e.jsx("td",{children:S.id}),e.jsx("td",{children:e.jsx("strong",{children:S.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(S.match)?S.match:[]).slice(0,3).map((I,T)=>e.jsx("span",{className:"tag",children:I},T)),Array.isArray(S.match)&&S.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",S.match.length-3]}):null,!Array.isArray(S.match)||S.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:Tl(S.action)})}),e.jsx("td",{children:S.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(S),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(S.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},S.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:a.remarks,onChange:S=>d({...a,remarks:S.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:a.action,onChange:S=>d({...a,action:S.target.value}),children:yi.map(S=>e.jsx("option",{value:S.value,children:S.label},S.value))})]}),a.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:a.match,onChange:S=>d({...a,match:S.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:a.action_value,onChange:S=>d({...a,action_value:S.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function $l(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function El(n){const t=l=>l===""?null:Math.round(Number(l)*100),s=l=>l===""?null:Number(l);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function tt(n){return n==null?"—":Je(n)}function Ml(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function Ll(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[x,_]=o.useState(!0),[m,v]=o.useState(!1),[u,$]=o.useState(""),[G,D]=o.useState(""),[S,I]=o.useState(!1),[T,k]=o.useState(""),[R,H]=o.useState(!1),[U,y]=o.useState(null),[P,F]=o.useState(null),Q=o.useRef(!1),r=o.useRef(null),N=o.useRef(!1),q=f=>f instanceof Element&&!!f.closest(".drag-handle"),C=(f,ie)=>{if(f===ie||f<0||ie<0||f>=s.length||ie>=s.length)return!1;const K=[...s],be=K[f];return K.splice(f,1),K.splice(ie,0,be),l(K),r.current=K.map(Ce=>Ce.id),Q.current=!0,!0},W=async()=>{const f=Q.current,ie=r.current??s.map(K=>K.id);if(Q.current=!1,r.current=null,N.current=!1,y(null),F(null),!!f)try{await ho(ie),await B()}catch(K){$(K instanceof Error?K.message:t("plan.sortFailed")),await B()}},j=(f,ie)=>{var K;if(!q(f.target)){f.preventDefault();return}f.dataTransfer.effectAllowed="move",f.dataTransfer.setData("text/plain",String(((K=s[ie])==null?void 0:K.id)??ie)),Q.current=!1,y(ie)},O=(f,ie)=>{U===null||U===ie||(f.preventDefault(),C(U,ie)&&y(ie))},E=async()=>{await W()},se=(f,ie)=>{!q(f.target)||f.touches.length!==1||(Q.current=!1,N.current=!0,F(ie))},b=f=>{if(!N.current||P===null)return;f.cancelable&&f.preventDefault();const ie=f.touches[0],K=document.elementFromPoint(ie.clientX,ie.clientY);if(!K)return;const be=K.closest("tr, [data-index]");if(!be)return;const Ce=be.getAttribute("data-index");if(Ce===null)return;const xe=Number(Ce);C(P,xe)&&F(xe)},V=async()=>{!N.current&&P===null||await W()},B=o.useCallback(async()=>{_(!0),$("");try{const[f,ie]=await Promise.all([Pt(),Ut()]);l(f),d(ie)}catch(f){$(f instanceof Error?f.message:t("plan.loadFailed"))}finally{_(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}B()},[B,n]);function X(){g(null),I(!1),k("")}function pe(f){g($l(f)),I(!1),k(""),$(""),D("")}async function Me(f){var ie,K;if(f.preventDefault(),!!c){v(!0),$(""),D("");try{await uo(El(c)),X(),(ie=window.showToast)==null||ie.call(window,t("plan.saveSuccess"),"success"),await B()}catch(be){(K=window.showToast)==null||K.call(window,be instanceof Error?be.message:t("plan.saveFailed"),"error")}finally{v(!1)}}}async function Le(f,ie){var K;try{await zn(f,{show:ie?0:1}),await B()}catch(be){(K=window.showToast)==null||K.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function De(f,ie){var K;try{await zn(f,{renew:ie?0:1}),await B()}catch(be){(K=window.showToast)==null||K.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function _e(f,ie){var K;try{await zn(f,{allow_subscribe_url:ie?0:1}),await B()}catch(be){(K=window.showToast)==null||K.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Ne(f){var ie;(ie=window.showConfirm)==null||ie.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var K,be;$(""),D("");try{await mo(f),(K=window.showToast)==null||K.call(window,t("plan.deleteSuccess"),"success"),await B()}catch(Ce){(be=window.showToast)==null||be.call(window,Ce instanceof Error?Ce.message:t("plan.deleteFailed"),"error")}}})}function ge(f){var ie;return((ie=a.find(K=>K.id===f))==null?void 0:ie.name)??`#${f}`}function Se(f){return Number(f.allow_subscribe_url??1)===1}function je(f,ie){g(K=>K&&{...K,[f]:ie})}async function Ke(f){var K,be;f.preventDefault();const ie=T.trim();if(!(!ie||!c)){H(!0),$(""),D("");try{await os({name:ie});const Ce=await Ut();d(Ce);const xe=Ce.filter(Fe=>Fe.name===ie).sort((Fe,qe)=>qe.id-Fe.id)[0];xe&&je("group_id",String(xe.id)),k(""),I(!1),(K=window.showToast)==null||K.call(window,t("node.groupCreateSuccess"),"success")}catch(Ce){const xe=Ce instanceof Error?Ce.message:t("node.groupCreateFailed");$(xe),(be=window.showToast)==null||be.call(window,xe,"error")}finally{H(!1)}}}return e.jsxs(We,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:B,disabled:x,children:[e.jsx(Re,{size:16}),t(x?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>pe(),children:[e.jsx(rt,{size:16}),t("plan.add")]})]})]}),u?e.jsx("div",{className:"form-error",children:u}):null,G?e.jsx("div",{className:"form-success",children:G}):null,x&&s.length===0?e.jsx(Ee,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((f,ie)=>e.jsxs("tr",{onDragOver:K=>O(K,ie),"data-index":ie,className:U===ie||P===ie?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:K=>j(K,ie),onDragEnd:E,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:f.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${f.show?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),Le(f.id,f.show)},title:f.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${f.renew?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),De(f.id,f.renew)},title:f.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Se(f)?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),_e(f.id,Se(f)?1:0)},title:Se(f)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:f.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),f.count??0]})}),e.jsx("td",{children:ge(f.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[f.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:tt(f.month_price)})]}),f.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:tt(f.quarter_price)})]}),f.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:tt(f.half_year_price)})]}),f.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:tt(f.year_price)})]}),f.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:tt(f.two_year_price)})]}),f.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:tt(f.three_year_price)})]}),f.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:tt(f.onetime_price)})]}),f.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:tt(f.reset_price)})]})]})}),e.jsxs("td",{children:[f.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:K=>{K.stopPropagation(),pe(f)},children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:K=>{K.stopPropagation(),Ne(f.id)},children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},f.id)),!x&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((f,ie)=>e.jsxs("div",{className:`mobile-node-card ${U===ie||P===ie?"dragging":""}`,onDragOver:K=>O(K,ie),"data-index":ie,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:K=>j(K,ie),onDragEnd:E,onTouchStart:K=>se(K,ie),onTouchMove:b,onTouchEnd:V,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:f.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:f.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:K=>{K.stopPropagation(),pe(f)},children:[e.jsx(Ge,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:K=>{K.stopPropagation(),Ne(f.id)},children:[e.jsx(Ze,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${f.show?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),Le(f.id,f.show)},title:f.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${f.renew?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),De(f.id,f.renew)},title:f.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Se(f)?"active":""}`,type:"button",onClick:K=>{K.stopPropagation(),_e(f.id,Se(f)?1:0)},title:Se(f)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(gn,{size:12,style:{marginRight:4}}),f.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:ge(f.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[f.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[f.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:tt(f.month_price)})]}),f.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:tt(f.quarter_price)})]}),f.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:tt(f.half_year_price)})]}),f.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:tt(f.year_price)})]}),f.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:tt(f.two_year_price)})]}),f.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:tt(f.three_year_price)})]}),f.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:tt(f.onetime_price)})]}),f.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:tt(f.reset_price)})]})]})]},f.id)),!x&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:X,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Me,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:c.name,onChange:f=>je("name",f.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:c.content,onChange:f=>je("content",f.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>I(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:c.group_id,onChange:f=>je("group_id",f.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),a.map(f=>e.jsx("option",{value:f.id,children:f.name},f.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:c.transfer_enable,onChange:f=>je("transfer_enable",f.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.device_limit,onChange:f=>je("device_limit",f.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.speed_limit,onChange:f=>je("speed_limit",f.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.capacity_limit,onChange:f=>je("capacity_limit",f.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:c.reset_traffic_method,onChange:f=>je("reset_traffic_method",f.target.value),children:Ml(t).map(f=>e.jsx("option",{value:f.value,children:f.label},f.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:c.allow_subscribe_url==="1",onChange:f=>je("allow_subscribe_url",f.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.month_price,onChange:f=>je("month_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.quarter_price,onChange:f=>je("quarter_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.half_year_price,onChange:f=>je("half_year_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.year_price,onChange:f=>je("year_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.two_year_price,onChange:f=>je("two_year_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.three_year_price,onChange:f=>je("three_year_price",f.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.onetime_price,onChange:f=>je("onetime_price",f.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.reset_price,onChange:f=>je("reset_price",f.target.value),placeholder:"—"})]})]}),c.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:c.force_update,onChange:f=>je("force_update",String(f.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:X,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:m,children:[e.jsx(lt,{size:16}),t(m?"plan.saving":"common.save")]})]})]})]})}):null,S&&c?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>I(!1),disabled:R,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:Ke,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:T,onChange:f=>k(f.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>I(!1),disabled:R,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:R||!T.trim(),children:t(R?"node.saving":"common.confirm")})]})]})]})}):null]})}const Ln="模糊",Os={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Rs={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Hs(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");return`${s}/${l}/${a} ${d}:${c}`}function Us(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),g=String(t.getSeconds()).padStart(2,"0");return`${s}-${l}-${a} ${d}:${c}:${g}`}function qs(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function ct(n){return`${Je(Number(n??0))} ₫`}const Ii="adminzic_user_cache";function Dl(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(Ii);return n?JSON.parse(n):{}}catch{return{}}}function Il(n){if(!(typeof window>"u"))try{sessionStorage.setItem(Ii,JSON.stringify(n))}catch{}}const Rt=(n,t)=>`${n}:${t}`;function Fl(){var mt,ue,st,it,at;const n=Ue(),t=tn(),{t:s}=he(),l=o.useCallback(z=>{switch(z){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${z}`,cls:""}}},[s]),a=o.useCallback(z=>{const le=`order.period.${z}`,re=s(le);return re===le?Rs[z]??z:re},[s]),[d,c]=o.useState([]),[g,x]=o.useState([]),[_,m]=o.useState({}),[v,u]=o.useState(0),[$,G]=o.useState(1),[D]=o.useState(15),[S,I]=o.useState(""),[T,k]=o.useState("trade_no"),[R,H]=o.useState(!0),[U,y]=o.useState(null),[P,F]=o.useState(!1),[Q,r]=o.useState(""),[N,q]=o.useState(""),[C,W]=o.useState(null),[j,O]=o.useState(null),[E,se]=o.useState(!1),[b,V]=o.useState(null),[B,X]=o.useState(!1),[pe,Me]=o.useState(()=>Dl()),Le=o.useCallback((z,le)=>{const re=Rt(le,z);O(null),W(te=>te===re?null:re)},[]),De=o.useCallback((z,le)=>{const re=Rt(le,z);W(null),O(te=>te===re?null:re)},[]),_e=o.useCallback(z=>{const le=Number(z.coupon_id??0);return le?_[le]??`#${le}`:null},[_]);o.useEffect(()=>{if(!C&&!j)return;const z=()=>{W(null),O(null)},le=te=>{const fe=te.target;fe!=null&&fe.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||z()},re=te=>{te.key==="Escape"&&z()};return document.addEventListener("pointerdown",le),document.addEventListener("keydown",re),()=>{document.removeEventListener("pointerdown",le),document.removeEventListener("keydown",re)}},[C,j]),o.useEffect(()=>{const z=new Set;if(d.forEach(re=>{re.user_id&&!pe[re.user_id]&&z.add(re.user_id),re.invite_user_id&&!pe[re.invite_user_id]&&z.add(re.invite_user_id)}),b&&(b.user_id&&!pe[b.user_id]&&z.add(b.user_id),b.invite_user_id&&!pe[b.invite_user_id]&&z.add(b.invite_user_id)),z.size===0)return;const le=Array.from(z);Promise.allSettled(le.map(async re=>{try{const te=await Vn(re);if(te&&te.data)return{id:re,email:te.data.email,invite_user:te.data.invite_user}}catch(te){console.error(`Failed to fetch user ${re}:`,te)}return null})).then(re=>{const te={};re.forEach(fe=>{var me;if(fe.status==="fulfilled"&&fe.value){const ze=fe.value;te[ze.id]={email:ze.email,invite_user_email:((me=ze.invite_user)==null?void 0:me.email)||null},ze.invite_user&&(te[ze.invite_user.id]={email:ze.invite_user.email})}}),Object.keys(te).length>0&&Me(fe=>{const me={...fe,...te};return Il(me),me})})},[d,b,pe]);const Ne={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},ge=o.useCallback(async(z=1,le,re)=>{var te,fe;H(!0),r("");try{let me;if(le)if(re==="email"){const Qe=(te=(await Xn(1,1,[{key:"email",condition:Ln,value:le}])).data)==null?void 0:te[0];if(!Qe){c([]),u(0),H(!1);return}me=[{key:"user_id",condition:"=",value:String(Qe.id)}]}else if(re==="invite_user_email"){const Qe=(fe=(await Xn(1,1,[{key:"email",condition:Ln,value:le}])).data)==null?void 0:fe[0];if(!Qe){c([]),u(0),H(!1);return}me=[{key:"invite_user_id",condition:"=",value:String(Qe.id)}]}else me=[{key:re||"trade_no",condition:re==="trade_no"||re==="user_id"||re==="invite_user_id"||re==="plan_id"||re==="status"?"=":Ln,value:le}];const ze=await xo({current:z,pageSize:D,filter:me});c(ze.data),u(ze.total)}catch(me){r(me instanceof Error?me.message:s("order.loadFailed"))}finally{H(!1)}},[D,s]),Se=o.useCallback(z=>{const le=String(z);k("user_id"),I(le),se(!0),G(1),ge(1,le,"user_id")},[ge]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const z=new URLSearchParams(t.search),le=z.get("filter_email"),re=z.get("invite_user_email"),te=z.get("user_id")||z.get("filter_user_id");let fe="",me="trade_no";te?(fe=te,me="user_id",k("user_id"),I(te),se(!0)):le?(fe=le,me="email",k("email"),I(le),se(!0)):re&&(fe=re,me="invite_user_email",k("invite_user_email"),I(re),se(!0)),ge(1,fe,me),Pt().then(x).catch(()=>{}),ji(1,1e3).then(ze=>{const Te={};ze.data.forEach(Qe=>{Te[Qe.id]=Qe.code}),m(Te)}).catch(()=>{})},[ge,n,t.search]);function je(){G(1),ge(1,S,T)}function Ke(){I(""),G(1),ge(1)}function f(z){G(z),ge(z,S,T)}async function ie(z){var le,re;W(null),O(null),r(""),q("");try{await bo(z),(le=window.showToast)==null||le.call(window,s("order.paidSuccess"),"success"),await ge($,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.paidFailed"),"error")}}async function K(z){var le,re;W(null),O(null),r(""),q("");try{await go(z),(le=window.showToast)==null||le.call(window,s("order.cancelSuccess"),"success"),await ge($,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.cancelFailed"),"error")}}async function be(z,le){var re,te;W(null),O(null),r(""),q("");try{await fo(z,le),(re=window.showToast)==null||re.call(window,s("order.commissionSuccess"),"success"),await ge($,S,T)}catch(fe){(te=window.showToast)==null||te.call(window,fe instanceof Error?fe.message:s("order.commissionFailed"),"error")}}async function Ce(z){V(z),X(!0);try{const le=await yo(z.id);le&&le.data&&V(le.data)}catch(le){console.error("Failed to fetch order detail:",le)}finally{X(!1)}}function xe(){var z;y({email:"",plan_id:(z=g[0])!=null&&z.id?String(g[0].id):"",period:"month_price",total_amount:"0"}),r(""),q("")}async function Fe(z){var le,re;if(z.preventDefault(),!!U){F(!0),r(""),q("");try{await rs({email:U.email,plan_id:Number(U.plan_id),period:U.period,total_amount:Number(U.total_amount)*100}),y(null),(le=window.showToast)==null||le.call(window,s("order.assignSuccess"),"success"),await ge($,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.assignFailed"),"error")}finally{F(!1)}}}const qe=Math.ceil(v/D),ae=b?_e(b):null;return e.jsxs(We,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${E?"active":""}`,type:"button",onClick:()=>se(!E),children:[e.jsx(en,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:xe,children:[e.jsx(rt,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ge($,S,T),disabled:R,children:[e.jsx(Re,{size:16}),s(R?"common.refreshing":"common.refresh")]})]}),E&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:T,onChange:z=>k(z.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input search-input",value:S,onChange:z=>I(z.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:z=>z.key==="Enter"&&je()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[e.jsx(en,{size:16}),s("order.filter")]}),S?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[e.jsx(ke,{size:16}),s("order.clearFilter")]}):null]}),Q?e.jsx("div",{className:"form-error",children:Q}):null,N?e.jsx("div",{className:"form-success",children:N}):null,R&&d.length===0?e.jsx(Ee,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${R?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[d.map(z=>{var ze;const le=l(z.status),re=z.invite_user_id!==null,te=Ne[z.commission_status]??{label:`#${z.commission_status}`,dotClass:"pending"},fe=_e(z),me=(ze=pe[z.user_id])==null?void 0:ze.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(z),title:s("order.detailsTitle"),children:qs(z.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",z.id]}),e.jsx("span",{className:"order-type-pill",children:Os[z.type]??`#${z.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[me?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(z.user_id),title:s("order.filterByUser"),children:me}):e.jsxs("span",{className:"order-subline",children:["ID: ",z.user_id]}),e.jsx("strong",{className:"order-plan-name",children:z.plan_name??`Plan #${z.plan_id}`}),e.jsx("span",{className:"period-capsule",children:a(z.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:ct(z.total_amount)}),fe?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",fe]}):null,Number(z.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",ct(z.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${le.cls.replace("status-","")}`}),e.jsx("span",{children:le.label}),z.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),Le(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),C===Rt("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{W(null),ie(z.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{W(null),K(z.trade_no)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[re?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:ct(z.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{children:te.label}),z.commission_status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),De(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),j===Rt("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),be(z.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),be(z.trade_no,3)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Hs(z.created_at)})})]},z.trade_no)}),!R&&d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),qe>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>f($-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",qe]}),e.jsx("button",{className:"mini-button",disabled:$>=qe,onClick:()=>f($+1),children:e.jsx(jt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[d.map(z=>{var Ve;const le=l(z.status),re=z.invite_user_id!==null,te=Ne[z.invite_user_id!==null?z.commission_status:0]??{label:`#${z.commission_status}`,dotClass:"pending"},fe=(Ve=pe[z.user_id])==null?void 0:Ve.email,me=_e(z),ze=Rt("mobile",z.trade_no),Te=Rt("mobile",z.trade_no),Qe=C===ze||j===Te;return e.jsxs("div",{className:`mobile-order-card${Qe?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(z),children:qs(z.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",z.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${le.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:le.label}),z.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),Le(z.trade_no,"mobile")},"aria-expanded":C===ze,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),C===ze&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{W(null),ie(z.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{W(null),K(z.trade_no)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:fe?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(z.user_id),children:fe}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",z.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:Os[z.type]??`#${z.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:z.plan_name??`Plan #${z.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:a(z.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:ct(z.total_amount)})]}),me?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:me})})]}):null,Number(z.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:ct(z.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:re?e.jsx("strong",{children:ct(z.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),re&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:te.label}),z.commission_status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),De(z.trade_no,"mobile")},"aria-expanded":j===Te,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),j===Te&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),be(z.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),be(z.trade_no,3)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Hs(z.created_at)})]})]})]},z.trade_no)}),!R&&d.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,qe>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>f($-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",qe]}),e.jsx("button",{className:"mini-button",disabled:$>=qe,onClick:()=>f($+1),children:e.jsx(jt,{size:16})})]}):null]})]}),b?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:B?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx(Ee,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(mt=pe[b.user_id])!=null&&mt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{V(null),Se(b.user_id)},title:"Filter by this user",children:pe[b.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",b.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:b.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:a(b.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:l(b.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:b.plan_name??`Plan #${b.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:b.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),b.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(ue=pe[b.invite_user_id])!=null&&ue.email||(st=pe[b.user_id])!=null&&st.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const z=String(b.invite_user_id);k("invite_user_id"),I(z),se(!0),V(null),ge(1,z,"invite_user_id")},title:"Filter by this inviter",children:((it=pe[b.invite_user_id])==null?void 0:it.email)||((at=pe[b.user_id])==null?void 0:at.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",b.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:ct(b.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(Ne[b.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(Ne[b.commission_status]??{label:`#${b.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:ct(b.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:ct(b.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:ct(b.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:ct(b.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:ct(b.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Us(b.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Us(b.updated_at)})]})]})]})})]})}):null,U?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Fe,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:U.email,onChange:z=>y({...U,email:z.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:U.plan_id,onChange:z=>y({...U,plan_id:z.target.value}),children:g.map(z=>e.jsx("option",{value:z.id,children:z.name},z.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:U.period,onChange:z=>y({...U,period:z.target.value}),children:Object.entries(Rs).map(([z,le])=>e.jsx("option",{value:z,children:le},z))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:U.total_amount,onChange:z=>y({...U,total_amount:z.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[e.jsx(lt,{size:16}),s(P?"order.assigning":"order.assign")]})]})]})]})}):null]})}function rn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function ln(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function Dn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Al(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(0),[c,g]=o.useState(1),[x,_]=o.useState([]),[m,v]=o.useState(null),[u,$]=o.useState(!0),[G,D]=o.useState(!1),[S,I]=o.useState(""),[T,k]=o.useState(""),[R,H]=o.useState("");o.useEffect(()=>{m||H("")},[m]);const U=o.useCallback(async(r=1)=>{$(!0),I("");try{const N=await ji(r,15);l(N.data),d(N.total)}catch(N){I(N instanceof Error?N.message:t("coupon.loadFailed"))}finally{$(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}U(1),Pt().then(_).catch(()=>{})},[U,n]);async function y(r){var N,q;if(r.preventDefault(),!!m){D(!0),I(""),k("");try{const C=m.type==="1"?Math.round(Number(m.value)*100):Number(m.value);await vo({id:m.id,name:m.name,type:Number(m.type),value:C,code:m.code||void 0,started_at:Math.floor(new Date(m.started_at).getTime()/1e3),ended_at:Math.floor(new Date(m.ended_at).getTime()/1e3),limit_use:m.limit_use?Number(m.limit_use):null,limit_use_with_user:m.limit_use_with_user?Number(m.limit_use_with_user):null,limit_plan_ids:m.limit_plan_ids.length?m.limit_plan_ids:null,limit_period:m.limit_period.length?m.limit_period:null,generate_count:m.generate_count?Number(m.generate_count):void 0}),v(null),(N=window.showToast)==null||N.call(window,t("coupon.saveSuccess"),"success"),await U(c)}catch(C){(q=window.showToast)==null||q.call(window,C instanceof Error?C.message:t("coupon.saveFailed"),"error")}finally{D(!1)}}}async function P(r){var N;try{await wo(r),await U(c)}catch(q){(N=window.showToast)==null||N.call(window,q instanceof Error?q.message:t("coupon.toggleFailed"),"error")}}async function F(r){var N;(N=window.showConfirm)==null||N.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var q,C;try{await jo(r),(q=window.showToast)==null||q.call(window,t("coupon.deleteSuccess"),"success"),await U(c)}catch(W){(C=window.showToast)==null||C.call(window,W instanceof Error?W.message:t("coupon.deleteFailed"),"error")}}})}const Q=Math.ceil(a/15);return e.jsxs(We,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[a," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(c),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>v(Dn()),children:[e.jsx(rt,{size:16}),t("coupon.add")]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(r=>{var W,j;const N=(W=r.limit_plan_ids)==null?void 0:W.map(O=>{var E;return((E=x.find(se=>se.id===O))==null?void 0:E.name)||`#${O}`}).join(", "),q=ln(t),C=(j=r.limit_period)==null?void 0:j.map(O=>q[O]||O).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:r.id}),e.jsx("td",{children:e.jsx("strong",{children:r.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:r.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:r.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:r.type===1?Je(r.value):`${r.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",r.limit_use??"∞"]}),r.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",r.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[N?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",N]})}):null,C?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",C]})}):null,!N&&!C?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${r.show?"active":""}`,type:"button",onClick:()=>void P(r.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[rn(r.started_at)," — ",rn(r.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>v(Dn(r)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void F(r.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},r.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(r=>{var N,q,C,W;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",r.id]}),e.jsx("span",{className:`tag type-tag ${r.type===1?"fixed-type":"percent-type"}`,children:r.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:r.name,children:r.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{zt(r.code).then(j=>{var O;(O=window.showToast)==null||O.call(window,j?`${t("coupon.copiedCode")}: ${r.code}`:t("common.copyFailed"),j?"success":"error")})},children:[e.jsx("code",{className:"mono",children:r.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(N=r.limit_plan_ids)!=null&&N.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:r.limit_plan_ids.map(j=>{const O=x.find(E=>E.id===j);return e.jsx("span",{className:"res-pill plan-pill",children:O?O.name:`#${j}`},j)})})]}):null,(q=r.limit_period)!=null&&q.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:r.limit_period.map(j=>e.jsx("span",{className:"res-pill cycle-pill",children:ln(t)[j]||j},j))})]}):null,!((C=r.limit_plan_ids)!=null&&C.length)&&!((W=r.limit_period)!=null&&W.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[rn(r.started_at)," — ",rn(r.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${r.show?"active":""}`,type:"button",onClick:()=>void P(r.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:r.type===1?Je(r.value).replace(/\s?₫/,""):`${r.value}`}),e.jsx("span",{className:"ticket-value-unit",children:r.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:r.limit_use??"∞"}),r.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",r.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>v(Dn(r)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void F(r.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},r.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),Q>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:c<=1,onClick:()=>{g(c-1),U(c-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[c," / ",Q]}),e.jsx("button",{className:"mini-button",disabled:c>=Q,onClick:()=>{g(c+1),U(c+1)},children:e.jsx(jt,{size:16})})]}):null,m?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:m.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:y,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:r=>v({...m,name:r.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:m.type,onChange:r=>v({...m,type:r.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:m.value,onChange:r=>v({...m,value:r.target.value})})]})]}),m.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:m.code,onChange:r=>v({...m,code:r.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:m.started_at,onChange:r=>v({...m,started_at:r.target.value}),onClick:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)},onFocus:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:m.ended_at,onChange:r=>v({...m,ended_at:r.target.value}),onClick:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)},onFocus:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:m.limit_use,onChange:r=>v({...m,limit_use:r.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:m.limit_use_with_user,onChange:r=>v({...m,limit_use_with_user:r.target.value}),placeholder:t("coupon.unlimited")})]})]}),m.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:m.generate_count,onChange:r=>v({...m,generate_count:r.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),m.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:m.limit_plan_ids.map(r=>{const N=x.find(q=>q.id===r);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const q=m.limit_plan_ids.filter(C=>C!==r);v({...m,limit_plan_ids:q})},children:[N?N.name:`#${r}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},r)})}),x.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:R,onChange:r=>H(r.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[x.filter(r=>r.name.toLowerCase().includes(R.toLowerCase())).map(r=>{const N=m.limit_plan_ids.includes(r.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:N,onChange:q=>{const C=q.target.checked?[...m.limit_plan_ids,r.id]:m.limit_plan_ids.filter(W=>W!==r.id);v({...m,limit_plan_ids:C})}}),e.jsx("span",{children:r.name})]},r.id)}),x.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),m.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:m.limit_period.map(r=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const N=m.limit_period.filter(q=>q!==r);v({...m,limit_period:N})},children:[ln(t)[r]||r," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},r))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(ln(t)).map(([r,N])=>{const q=m.limit_period.includes(r);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:q,onChange:C=>{const W=C.target.checked?[...m.limit_period,r]:m.limit_period.filter(j=>j!==r);v({...m,limit_period:W})}}),e.jsx("span",{children:N})]},r)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function cn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Ol(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function In(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Rl(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(0),[c,g]=o.useState(1),[x,_]=o.useState([]),[m,v]=o.useState(null),[u,$]=o.useState(!0),[G,D]=o.useState(!1),[S,I]=o.useState(""),[T,k]=o.useState(""),[R,H]=o.useState("");o.useEffect(()=>{m||H("")},[m]);const U=Ol(t),y=o.useCallback(async(r=1)=>{$(!0),I("");try{const N=await No(r,15);l(N.data),d(N.total)}catch(N){I(N instanceof Error?N.message:t("giftcard.loadFailed"))}finally{$(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}y(1),Pt().then(_).catch(()=>{})},[y,n]);async function P(r){var N,q;if(r.preventDefault(),!!m){D(!0),I(""),k("");try{const C=m.type==="1"?Math.round(Number(m.value)*100):Number(m.value);await ko({id:m.id,name:m.name,type:Number(m.type),value:C,code:m.code||void 0,started_at:Math.floor(new Date(m.started_at).getTime()/1e3),ended_at:Math.floor(new Date(m.ended_at).getTime()/1e3),limit_use:m.limit_use?Number(m.limit_use):null,plan_id:m.plan_id?Number(m.plan_id):null,generate_count:m.generate_count?Number(m.generate_count):void 0}),v(null),(N=window.showToast)==null||N.call(window,t("giftcard.saveSuccess"),"success"),await y(c)}catch(C){(q=window.showToast)==null||q.call(window,C instanceof Error?C.message:t("giftcard.saveFailed"),"error")}finally{D(!1)}}}async function F(r){var N;(N=window.showConfirm)==null||N.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var q,C;try{await _o(r),(q=window.showToast)==null||q.call(window,t("giftcard.deleteSuccess"),"success"),await y(c)}catch(W){(C=window.showToast)==null||C.call(window,W instanceof Error?W.message:t("giftcard.deleteFailed"),"error")}}})}const Q=Math.ceil(a/15);return e.jsxs(We,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[a," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void y(c),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>v(In()),children:[e.jsx(rt,{size:16}),t("giftcard.add")]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(r=>{var N;return e.jsxs("tr",{children:[e.jsx("td",{children:r.id}),e.jsx("td",{children:e.jsx("strong",{children:r.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:r.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:U[r.type]??r.type})}),e.jsx("td",{children:e.jsx("strong",{children:r.type===1?Je(r.value):r.value})}),e.jsx("td",{children:r.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((N=x.find(q=>q.id===r.plan_id))==null?void 0:N.name)||`#${r.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:r.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[cn(r.started_at)," — ",cn(r.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>v(In(r)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void F(r.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},r.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(r=>{var N;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",r.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:U[r.type]??r.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:r.name,children:r.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{zt(r.code).then(q=>{var C;(C=window.showToast)==null||C.call(window,q?t("giftcard.copiedCode").replace("{code}",r.code):t("common.copyFailed"),q?"success":"error")})},children:[e.jsx("code",{className:"mono",children:r.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:r.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((N=x.find(q=>q.id===r.plan_id))==null?void 0:N.name)||`#${r.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[cn(r.started_at)," — ",cn(r.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:r.type===1?Je(r.value).replace(/\s?₫/,""):`${r.value}`}),e.jsx("span",{className:"ticket-value-unit",children:r.type===1?"₫":U[r.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:r.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>v(In(r)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void F(r.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},r.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),Q>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:c<=1,onClick:()=>{g(c-1),y(c-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[c," / ",Q]}),e.jsx("button",{className:"mini-button",disabled:c>=Q,onClick:()=>{g(c+1),y(c+1)},children:e.jsx(jt,{size:16})})]}):null,m?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:m.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:P,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:r=>v({...m,name:r.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:m.type,onChange:r=>v({...m,type:r.target.value}),children:Object.entries(U).map(([r,N])=>e.jsx("option",{value:r,children:N},r))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:m.value,onChange:r=>v({...m,value:r.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:m.started_at,onChange:r=>v({...m,started_at:r.target.value}),onClick:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)},onFocus:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:m.ended_at,onChange:r=>v({...m,ended_at:r.target.value}),onClick:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)},onFocus:r=>{var N,q;return(q=(N=r.currentTarget).showPicker)==null?void 0:q.call(N)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:m.limit_use,onChange:r=>v({...m,limit_use:r.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),m.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:m.generate_count,onChange:r=>v({...m,generate_count:r.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),m.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const r=x.find(N=>String(N.id)===m.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{v({...m,plan_id:""})},children:[r?r.name:`#${m.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),x.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:R,onChange:r=>H(r.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!m.plan_id,onChange:()=>{v({...m,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),x.filter(r=>r.name.toLowerCase().includes(R.toLowerCase())).map(r=>{const N=String(r.id)===m.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:N,onChange:q=>{q.target.checked&&v({...m,plan_id:String(r.id)})}}),e.jsx("span",{children:r.name})]},r.id)}),x.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Kt="Tương đối",xt="=";function dn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Hl(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Bs(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Fn(n){return+(n/1073741824).toFixed(2)}function An(n){return Math.round(n*1073741824)}function pn(n){return(n/1073741824).toFixed(2)}function Ul(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function Ht(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const ns=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Fi="user_visible_columns";function ql(){if(typeof window<"u")try{const n=localStorage.getItem(Fi);if(n)return new Set(JSON.parse(n))}catch{}return new Set(ns.filter(n=>n.defaultVisible).map(n=>n.key))}const _n=[{value:"email",label:"Email",condition:Kt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:xt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:xt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:xt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:xt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:xt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Kt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:xt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Kt,placeholder:"UUID"},{value:"token",label:"Token",condition:Kt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Kt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:xt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:xt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:xt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:xt,placeholder:"1780366403"}],Bl=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Xe(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Gl(n,t){var a;const s=((a=_n.find(d=>d.value===n))==null?void 0:a.label)??n,l=d=>{const c=t(d);return c===d?s:c};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return l("user.filterBanned");case"is_admin":return l("user.filterAdmin");case"is_manager":return l("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return l("user.filterUuid");case"token":return l("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return l("user.filterTransferEnable");case"d":return l("user.filterDownloadUsed");case"device_limit":return l("user.filterDeviceLimit");case"expired_at":return l("user.filterExpiredAt");default:return s}}function On(n){return _n.find(t=>t.value===n)??_n[0]}function Wl(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function Kl(){const n=Ue(),t=tn(),{t:s}=he(),[l,a]=o.useState([]),[d,c]=o.useState([]),[g,x]=o.useState([]),[_,m]=o.useState(0),[v,u]=o.useState(1),[$,G]=o.useState(""),[D,S]=o.useState("email"),[I,T]=o.useState(!0),[k,R]=o.useState(""),[H,U]=o.useState(ql),[y,P]=o.useState(!1),F=o.useRef(null),[Q,r]=o.useState(null),[N,q]=o.useState(null),[C,W]=o.useState(null),[j,O]=o.useState({}),[E,se]=o.useState(!1),[b,V]=o.useState(!1),[B,X]=o.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[pe,Me]=o.useState(!1),[Le,De]=o.useState(null),[_e,Ne]=o.useState({plan_id:"",period:"month_price",total_amount:""}),[ge,Se]=o.useState(!1),[je,Ke]=o.useState(null),[f,ie]=o.useState(null),[K,be]=o.useState([]),[Ce,xe]=o.useState(0),[Fe,qe]=o.useState(1),[ae]=o.useState(10),[mt,ue]=o.useState(!1),[st,it]=o.useState("");o.useEffect(()=>{function i(w){const L=w.target instanceof Element?w.target:null;Q!==null&&(!L||!L.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(r(null),q(null)),y&&F.current&&!F.current.contains(w.target)&&P(!1)}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[Q,y]),o.useEffect(()=>{if(Q===null)return;const i=()=>{r(null),q(null)};return window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0)}},[Q]);function at(i,w){if(Q===i){r(null),q(null);return}const L=w.getBoundingClientRect(),A=220,ce=392,ve=6,$e=8,we=Math.max($e,Math.min(window.innerWidth-A-$e,L.right-A)),Gt=L.bottom+ve+ce<=window.innerHeight-$e?L.bottom+ve:Math.max($e,L.top-ce-ve);q({top:Gt,left:we}),r(i)}function z(){r(null),q(null)}function le(i,w=!1,L=""){const A=ce=>{z(),ce()};return e.jsxs("div",{className:`action-dropdown-menu ${w?"action-dropdown-menu-fixed":""} ${L}`.trim(),style:w&&N?{top:N.top,left:N.left}:void 0,onMouseDown:ce=>ce.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>A(()=>gt(i)),children:[e.jsx(Ge,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Ie(i)),children:[e.jsx(hi,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>void Mt(i)),children:[e.jsx(ft,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Nt(i)),children:[e.jsx(Yn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>At(i)),children:[e.jsx(is,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Ot(i)),children:[e.jsx(ra,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>p(i)),children:[e.jsx(Wn,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Y(i)),children:[e.jsx(gn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>de(i)),children:[e.jsx(gs,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>A(()=>wt(i)),children:[e.jsx(Ze,{size:14}),s("user.actionDelete")]})]})}function re(i){U(w=>{const L=new Set(w);L.has(i)?L.delete(i):L.add(i);try{localStorage.setItem(Fi,JSON.stringify([...L]))}catch{}return L})}const te=i=>H.has(i),fe=ns.filter(i=>H.has(i.key)).length,me=o.useCallback(async(i=1,w,L)=>{T(!0),R("");try{const A=w==null?void 0:w.trim(),ce=On(L||"email"),ve=A?[{key:ce.value,condition:ce.condition,value:A}]:void 0,$e=await Xn(i,15,ve);a($e.data),m($e.total)}catch(A){R(A instanceof Error?A.message:s("user.loadFailed"))}finally{T(!1)}},[]),ze=o.useCallback(async()=>{try{const[i,w]=await Promise.all([Pt(),Ut()]);c(i),x(w)}catch{}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const i=new URLSearchParams(t.search),L=[["email",i.get("email")||i.get("filter_email")],["id",i.get("id")||i.get("user_id")||i.get("filter_user_id")],["plan_id",i.get("plan_id")],["invite_user_id",i.get("invite_user_id")],["invite_by_email",i.get("invite_by_email")],["uuid",i.get("uuid")],["token",i.get("token")],["remarks",i.get("remarks")]].find(([,A])=>A==null?void 0:A.trim());if(L){const[A,ce]=L,ve=On(A),$e=(ce==null?void 0:ce.trim())??"";S(ve.value),G($e),u(1),me(1,$e,ve.value)}else me(1);ze()},[me,ze,n,t.search]);function Te(){u(1),me(1,$,D)}function Qe(){G(""),u(1),me(1)}function Ve(i){u(i),me(i,$,D)}function Be(i){if(i.plan_name)return i.plan_name;if(!i.plan_id)return"—";const w=d.find(L=>L.id===i.plan_id);return w?w.name:`#${i.plan_id}`}function $t(i){if(!i.group_id)return"—";const w=g.find(L=>L.id===i.group_id);return w?w.name:`#${i.group_id}`}function et(i,w){const L=s(i);return L===i?w:L}function ht(i){const w=Number(i.device_limit??0);return w>0?`${Number(i.device_bound_count??0)} / ${w}`:et("user.unlimited","Unlimited")}function qt(i){const w=Number(i.device_bound_count??0),L=Number(i.device_pending_count??0),A=Number(i.device_banned_count??0),ce=Number(i.device_online_count??0),ve=Number(i.alive_ip??0),$e=Number(i.device_limit??0),we=$e>0?`${w} / ${$e}`:`${w} / ${et("user.unlimited","Unlimited")}`,nt=[`${et("user.deviceBound","Bound")}: ${we}`,`${et("user.devicePending","Pending")}: ${L}`,`${et("user.deviceBanned","Banned")}: ${A}`,`${et("user.deviceOnline","Online devices")}: ${ce}`,`${et("user.deviceOnlineIp","Online IP")}: ${ve}`];return i.ips&&nt.push(i.ips),nt.join(`
`)}function Ft(i){n.push(`/device?user_id=${encodeURIComponent(String(i.id))}`)}function Et(i,w="left"){const L=`${et("user.deviceOnlineShort","Online")}: ${Number(i.device_online_count??0)} | ${et("user.deviceIpShort","IP")}: ${Number(i.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${w==="right"?"align-right":""}`,type:"button",title:qt(i),onClick:()=>Ft(i),children:[e.jsx("span",{className:"device-cell-primary",children:ht(i)}),e.jsx("span",{className:"device-cell-secondary",children:L})]})}async function Mt(i){var A,ce;const w=i.subscribe_url;if(!w){(A=window.showToast)==null||A.call(window,s("user.toastNoSubscribeUrl"),"error");return}const L=await zt(w);(ce=window.showToast)==null||ce.call(window,s(L?"user.toastUrlCopied":"common.copyFailed"),L?"success":"error"),r(null)}function At(i){var w;r(null),(w=window.showConfirm)==null||w.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var L,A;try{await To(i.id),(L=window.showToast)==null||L.call(window,s("user.toastSecretResetSuccess"),"success"),await me(v,$,D)}catch(ce){(A=window.showToast)==null||A.call(window,ce instanceof Error?ce.message:s("user.toastSecretResetFailed"),"error")}}})}function wt(i){var w;r(null),(w=window.showConfirm)==null||w.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var L,A;try{await Co(i.id),(L=window.showToast)==null||L.call(window,s("user.toastDeletedSuccess"),"success"),await me(v,$,D)}catch(ce){(A=window.showToast)==null||A.call(window,ce instanceof Error?ce.message:s("user.toastDeletedFailed"),"error")}}})}function Nt(i){var L;r(null);const w=i.subscribe_url;if(!w){(L=window.showToast)==null||L.call(window,s("user.toastNoSubscribeUrl"),"error");return}Ke({url:w,userId:i.id})}function Ot(i){r(null),n.push(`/order?user_id=${i.id}`)}function p(i){r(null),n.push(`/subscription?user_id=${i.id}`)}function Y(i){r(null),S("invite_user_id"),G(String(i.id)),me(1,String(i.id),"invite_user_id")}async function ne(i,w){ue(!0),it("");try{const L=await Do(i,w,ae);be(L.data||[]),xe(L.total||0),qe(w)}catch(L){it(L instanceof Error?L.message:s("user.historyLoading"))}finally{ue(!1)}}function de(i){r(null),ie(i),ne(i.id,1)}function Ie(i){r(null),De(i.email),Ne({plan_id:"",period:"month_price",total_amount:""})}async function dt(i){var w,L;if(i.preventDefault(),!!Le){Se(!0);try{await rs({email:Le,plan_id:Number(_e.plan_id),period:_e.period,total_amount:(Number(_e.total_amount)||0)*100}),(w=window.showToast)==null||w.call(window,s("user.toastAssignSuccess"),"success"),De(null)}catch(A){(L=window.showToast)==null||L.call(window,A instanceof Error?A.message:s("user.toastAssignFailed"),"error")}finally{Se(!1)}}}function gt(i){r(null),W(i),O({id:i.id,email:i.email,invite_user_email:"",password:"",balance:i.balance,commission_balance:i.commission_balance,u:Fn(i.u),d:Fn(i.d),transfer_enable:Fn(i.transfer_enable),device_limit:i.device_limit,expired_at:Hl(i.expired_at),plan_id:i.plan_id,banned:i.banned,commission_type:i.commission_type??0,commission_rate:i.commission_rate??"",discount:i.discount??"",speed_limit:i.speed_limit,is_admin:i.is_admin,is_staff:i.is_staff,is_manager:i.is_manager,remarks:i.remarks??""})}function Pe(i,w){O(L=>({...L,[i]:w}))}async function Bt(i){var w,L;if(i.preventDefault(),!!C){se(!0);try{const A={id:C.id,email:j.email,plan_id:j.plan_id||null,expired_at:Bs(String(j.expired_at??"")),transfer_enable:An(Number(j.transfer_enable??0)),speed_limit:j.speed_limit||null,device_limit:j.device_limit||null,u:An(Number(j.u??0)),d:An(Number(j.d??0)),balance:Number(j.balance??0),commission_balance:Number(j.commission_balance??0),commission_rate:j.commission_rate!==""&&j.commission_rate!==null?Number(j.commission_rate):null,commission_type:Number(j.commission_type??0),discount:j.discount!==""&&j.discount!==null?Number(j.discount):null,remarks:j.remarks||null,is_admin:Number(j.is_admin??0),is_staff:Number(j.is_staff??0),is_manager:Number(j.is_manager??0),banned:Number(j.banned??0)};j.invite_user_email&&(A.invite_user_email=j.invite_user_email),j.password&&(A.password=j.password),await So(A),(w=window.showToast)==null||w.call(window,s("user.toastSaveSuccess"),"success"),W(null),await me(v,$,D)}catch(A){(L=window.showToast)==null||L.call(window,A instanceof Error?A.message:s("user.toastSaveFailed"),"error")}finally{se(!1)}}}async function Lt(i){var w,L;i.preventDefault(),Me(!0);try{await zo({email_prefix:B.email_prefix,email_suffix:B.email_suffix,password:B.password||void 0,plan_id:B.plan_id?Number(B.plan_id):void 0,expired_at:Bs(B.expired_at)}),(w=window.showToast)==null||w.call(window,s("user.toastCreateSuccess"),"success"),V(!1),X({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await me(v,$,D)}catch(A){(L=window.showToast)==null||L.call(window,A instanceof Error?A.message:s("user.toastCreateFailed"),"error")}finally{Me(!1)}}const h=Math.ceil(_/15),M=On(D);return e.jsxs(We,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[_," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:F,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>P(!y),children:[e.jsx(ta,{size:16}),s("user.columns")]}),y?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>P(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:fe})})}),e.jsx("div",{className:"col-picker-list",children:ns.map(i=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:H.has(i.key),onChange:()=>re(i.key)}),e.jsx("span",{children:Xe(i.key,s)})]},i.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void me(v,$,D),disabled:I,children:[e.jsx(Re,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>V(!0),children:[e.jsx(rt,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:D,onChange:i=>S(i.target.value),children:_n.map(i=>e.jsx("option",{value:i.value,children:Gl(i.value,s)},i.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input search-input",value:$,onChange:i=>G(i.target.value),placeholder:M.placeholder,onKeyDown:i=>i.key==="Enter"&&Te()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:Te,children:[e.jsx(en,{size:16}),s("user.filter")]}),$?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Qe,children:[e.jsx(ke,{size:16}),s("user.clearFilter")]}):null]}),k?e.jsx("div",{className:"form-error",children:k}):null,I&&l.length===0?e.jsx(Ee,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[l.map(i=>{const w=pn(i.u+i.d),L=pn(i.transfer_enable),A=parseFloat(w);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",i.id]}),e.jsx("span",{className:"user-email",title:i.email,children:i.email})]}),i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[Be(i)," / ",i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):$t(i)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${A>0?A>parseFloat(L)*.9?"high":"ok":""}`,children:[w," GB"]})," / ",L," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("devices",s)}),e.jsx("span",{className:"info-val",children:Et(i,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("expires",s)}),e.jsx("span",{className:"info-val",children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(i.balance/100).toFixed(2)," ₫ / ",(i.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:dn(i.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${Q===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>r(Q===i.id?null:i.id),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Q===i.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>r(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:ce=>ce.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.email}),e.jsxs("small",{children:["#",i.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>r(null),children:e.jsx(ke,{size:16})})]}),le(i,!1,"mobile-action-menu")]})}):null]})})]},i.id)}),!I&&l.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[te("id")&&e.jsx("th",{children:Xe("id",s)}),te("email")&&e.jsx("th",{children:Xe("email",s)}),te("status")&&e.jsx("th",{children:Xe("status",s)}),te("plan")&&e.jsx("th",{children:Xe("plan",s)}),te("group")&&e.jsx("th",{children:Xe("group",s)}),te("used")&&e.jsx("th",{children:Xe("used",s)}),te("traffic")&&e.jsx("th",{children:Xe("traffic",s)}),te("devices")&&e.jsx("th",{children:Xe("devices",s)}),te("expires")&&e.jsx("th",{children:Xe("expires",s)}),te("balance")&&e.jsx("th",{children:Xe("balance",s)}),te("commission")&&e.jsx("th",{children:Xe("commission",s)}),te("joined")&&e.jsx("th",{children:Xe("joined",s)}),te("actions")&&e.jsx("th",{className:"user-actions-col",children:Xe("actions",s)})]})}),e.jsxs("tbody",{children:[l.map(i=>{const w=pn(i.u+i.d),L=pn(i.transfer_enable),A=parseFloat(w);return e.jsxs("tr",{children:[te("id")&&e.jsx("td",{children:i.id}),te("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:i.email})}),te("status")&&e.jsx("td",{children:i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),te("plan")&&e.jsx("td",{children:Be(i)}),te("group")&&e.jsx("td",{children:i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):$t(i)}),te("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${A>0?A>parseFloat(L)*.9?"high":"ok":""}`,children:w})}),te("traffic")&&e.jsx("td",{children:L}),te("devices")&&e.jsx("td",{children:Et(i)}),te("expires")&&e.jsx("td",{children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),te("balance")&&e.jsx("td",{children:(i.balance/100).toFixed(2)}),te("commission")&&e.jsx("td",{children:(i.commission_balance/100).toFixed(2)}),te("joined")&&e.jsx("td",{children:e.jsx("small",{children:dn(i.created_at)})}),te("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${Q===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:ce=>at(i.id,ce.currentTarget),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Q===i.id&&N?ri.createPortal(le(i,!0),document.body):null]})})]},i.id)}),!I&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:fe,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),h>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:v<=1,onClick:()=>Ve(v-1),children:e.jsx(vt,{size:16})}),Array.from({length:Math.min(5,h)},(i,w)=>{let L;return h<=5||v<=3?L=w+1:v>=h-2?L=h-4+w:L=v-2+w,e.jsx("button",{className:`mini-button ${L===v?"active-page":""}`,onClick:()=>Ve(L),children:L},L)}),h>5?e.jsxs("span",{className:"page-info",children:["… ",h]}):null,e.jsx("button",{className:"mini-button",disabled:v>=h,onClick:()=>Ve(v+1),children:e.jsx(jt,{size:16})})]})}):null]}),C?e.jsx("div",{className:"modal-backdrop",onClick:()=>W(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>W(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:Bt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(j.email??""),onChange:i=>Pe("email",i.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(j.invite_user_email??""),onChange:i=>Pe("invite_user_email",i.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(j.password??""),onChange:i=>Pe("password",i.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(j.balance??0)/100).toFixed(2)),onChange:i=>Pe("balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(j.commission_balance??0)/100).toFixed(2)),onChange:i=>Pe("commission_balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(j.u??0),onChange:i=>Pe("u",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(j.d??0),onChange:i=>Pe("d",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(j.transfer_enable??0),onChange:i=>Pe("transfer_enable",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(j.device_limit??""),onChange:i=>Pe("device_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(j.expired_at??""),onChange:i=>Pe("expired_at",i.target.value),onClick:i=>{var w,L;return(L=(w=i.currentTarget).showPicker)==null?void 0:L.call(w)},onFocus:i=>{var w,L;return(L=(w=i.currentTarget).showPicker)==null?void 0:L.call(w)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(j.plan_id??""),onChange:i=>Pe("plan_id",i.target.value?Number(i.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(j.banned??0),onChange:i=>Pe("banned",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(j.commission_type??0),onChange:i=>Pe("commission_type",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(j.commission_rate??""),onChange:i=>Pe("commission_rate",i.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(j.discount??""),onChange:i=>Pe("discount",i.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(j.speed_limit??""),onChange:i=>Pe("speed_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${j.is_admin?"active":""}`,onClick:()=>Pe("is_admin",j.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${j.is_manager?"active":""}`,onClick:()=>Pe("is_manager",j.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${j.is_staff?"active":""}`,onClick:()=>Pe("is_staff",j.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(j.remarks??""),onChange:i=>Pe("remarks",i.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>W(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:E,children:s(E?"common.processing":"common.save")})]})]})]})}):null,b?e.jsx("div",{className:"modal-backdrop",onClick:()=>V(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Lt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:B.email_prefix,onChange:i=>X({...B,email_prefix:i.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:B.email_suffix,onChange:i=>X({...B,email_suffix:i.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:B.password,onChange:i=>X({...B,password:i.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:B.plan_id,onChange:i=>X({...B,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:B.expired_at,onChange:i=>X({...B,expired_at:i.target.value}),onClick:i=>{var w,L;return(L=(w=i.currentTarget).showPicker)==null?void 0:L.call(w)},onFocus:i=>{var w,L;return(L=(w=i.currentTarget).showPicker)==null?void 0:L.call(w)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>V(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:pe,children:s(pe?"user.creating":"user.createUser")})]})]})]})}):null,Le?e.jsx("div",{className:"modal-backdrop",onClick:()=>De(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>De(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:dt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Le})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:_e.plan_id,onChange:i=>Ne({..._e,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:_e.period,onChange:i=>Ne({..._e,period:i.target.value}),children:Bl.map(i=>e.jsx("option",{value:i.value,children:Wl(i.value,s)},i.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:_e.total_amount,onChange:i=>Ne({..._e,total_amount:i.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>De(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ge,children:s(ge?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),je?e.jsx("div",{className:"modal-backdrop",onClick:()=>Ke(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ke(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(je.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:je.userId})})]})]})}):null,f?e.jsx("div",{className:"modal-backdrop",onClick:()=>ie(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:f.email,id:f.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ie(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[st?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:st}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:Ce})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(K.reduce((i,w)=>i+w.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(K.reduce((i,w)=>i+w.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(K.reduce((i,w)=>i+w.u+w.d,0))})]})]}),mt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx(Ee,{label:s("user.historyLoading")})}):K.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(gs,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:K.map(i=>{const w=Ht(i.u),L=Ht(i.d),A=Ht(i.u+i.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Ul(i.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(i.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:w}),e.jsx("td",{style:{color:"var(--muted)"},children:L}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:A})]},i.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((Fe-1)*ae+1,Ce),end:Math.min(Fe*ae,Ce),total:Ce})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:Fe<=1,onClick:()=>ne(f.id,Fe-1),children:[e.jsx(vt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:Fe*ae>=Ce,onClick:()=>ne(f.id,Fe+1),children:[s("user.historyNext"),e.jsx(jt,{size:16})]})]})]})]})]})]})}):null]})}function Yl(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Xt({value:n,onCopy:t,className:s="",copyClassName:l="",prefixLength:a=8,suffixLength:d=4}){const{t:c}=he(),[g,x]=o.useState(!1),_=g?n:Yl(n,a,d);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${l}`.trim(),type:"button",title:c("uuid.copy"),onClick:()=>void t(),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:g?n:_,children:_})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:c(g?"uuid.hide":"uuid.showFull"),"aria-label":c(g?"uuid.hide":"uuid.showFull"),onClick:()=>x(m=>!m),children:g?e.jsx(aa,{size:14}):e.jsx(oa,{size:14})})]})}const Gs=15,Ws=20,Jl=["email","id","user_id","plan_id","status"],Zl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function _t(n,t){return n?new Date(n*1e3).toLocaleString():t}function Ql(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Xl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Dt(n){return+(n/1073741824).toFixed(2)}function Rn(n){return Math.round((Number(n)||0)*1073741824)}function Vl(n){return n==="email"?"like":"="}function ec(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function tc(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Ks(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ys(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Js(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Zs(n){return String(n.hwid??"").trim()!==""}function nc(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function sc(){const n=Ue(),t=tn(),{t:s}=he(),[l,a]=o.useState([]),[d,c]=o.useState([]),[g,x]=o.useState(0),[_,m]=o.useState(1),[v,u]=o.useState("email"),[$,G]=o.useState(""),[D,S]=o.useState(!0),[I,T]=o.useState(""),[k,R]=o.useState(null),[H,U]=o.useState({}),[y,P]=o.useState(null),[F,Q]=o.useState(null),[r,N]=o.useState([]),[q,C]=o.useState(0),[W,j]=o.useState(1),[O,E]=o.useState(!1),[se,b]=o.useState(""),[V,B]=o.useState(null),[X,pe]=o.useState(null),[Me,Le]=o.useState({period:"month_price",total_amount:""}),[De,_e]=o.useState(!1),[Ne,ge]=o.useState(null),[Se,je]=o.useState(null),[Ke,f]=o.useState(null);function ie(p){const Y=p==null?void 0:p.trim();Y&&n.push(`/user?email=${encodeURIComponent(Y)}`)}const K=o.useCallback(async(p=1,Y="",ne="email")=>{S(!0),T("");try{const de=Y.trim()?[{key:ne,condition:Vl(ne),value:Y.trim()}]:void 0,Ie=await Po(p,Gs,de);a(Ie.data),x(Ie.total),m(p)}catch(de){T(de instanceof Error?de.message:s("subscription.loadFailed"))}finally{S(!1)}},[s]),be=o.useCallback(async(p,Y=1)=>{E(!0),b("");try{const ne=await wi(Y,Ws,[{key:"subscription_id",condition:"=",value:String(p.id)}]);N(ne.data),C(ne.total),j(Y)}catch(ne){b(ne instanceof Error?ne.message:s("subscription.slotsLoadFailed"))}finally{E(!1)}},[s]),Ce=o.useCallback(async()=>{var p;try{c(await Pt())}catch(Y){(p=window.showToast)==null||p.call(window,Y instanceof Error?Y.message:s("subscription.plansLoadFailed"),"error")}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}Ce();const p=new URLSearchParams(t.search),ne=[["user_id",p.get("user_id")],["id",p.get("id")],["plan_id",p.get("plan_id")],["email",p.get("email")],["status",p.get("status")]].find(([,de])=>de&&de.trim());if(ne){const[de,Ie]=ne,dt=Ie??"";u(de),G(dt),K(1,dt,de);return}K()},[K,Ce,t.search,n]),o.useEffect(()=>{function p(Y){const ne=Y.target instanceof Element?Y.target:null;Ne!==null&&(!ne||!ne.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&xe()}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[Ne]),o.useEffect(()=>{if(Ne===null)return;const p=()=>xe();return window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[Ne]);function xe(){ge(null),je(null)}function Fe(p,Y){if(Ne===p&&Se){xe();return}const ne=Y.getBoundingClientRect(),de=230,Ie=292,dt=6,gt=8,Pe=Math.max(gt,Math.min(window.innerWidth-de-gt,ne.right-de)),Lt=ne.bottom+dt+Ie<=window.innerHeight-gt?ne.bottom+dt:Math.max(gt,ne.top-Ie-dt);je({top:Lt,left:Pe}),ge(p)}function qe(p){je(null),ge(Y=>Y===p?null:p)}function ae(p){p.preventDefault(),K(1,$,v)}function mt(){if(G(""),t.search){n.replace("/subscription");return}K(1,"",v)}function ue(p){if(!p)return s("subscription.noPlan");const Y=d.find(ne=>Number(ne.id)===Number(p));return Y?`#${Y.id} - ${Y.name}`:`#${p}`}function st(p){R(p),U({plan_id:p.plan_id?String(p.plan_id):"",transfer_enable:String(Dt(p.transfer_enable)),u:String(Dt(p.u)),d:String(Dt(p.d)),device_limit:p.device_limit===null?"":String(p.device_limit),speed_limit:p.speed_limit===null?"":String(p.speed_limit),expired_at:Ql(p.expired_at),status:p.status,auto_renewal:String(p.auto_renewal||0),name_sni:p.name_sni??"",network_settings:p.network_settings??"",remarks:p.remarks??""})}async function it(p){var Y,ne;if(p.preventDefault(),!!k){P(k.id);try{await Eo({id:k.id,plan_id:H.plan_id===""?null:Number(H.plan_id),transfer_enable:Rn(H.transfer_enable),u:Rn(H.u),d:Rn(H.d),device_limit:H.device_limit===""?null:Number(H.device_limit),speed_limit:H.speed_limit===""?null:Number(H.speed_limit),expired_at:Xl(H.expired_at),status:H.status,auto_renewal:Number(H.auto_renewal),name_sni:H.name_sni||null,network_settings:H.network_settings||null,remarks:H.remarks}),R(null),(Y=window.showToast)==null||Y.call(window,s("subscription.updateSuccess"),"success"),await K(_,$,v)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("subscription.saveFailed"),"error")}finally{P(null)}}}function at(p){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:s("subscription.resetConfirm",{id:p.id}),onConfirm:async()=>{var ne,de;P(p.id);try{await Mo(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.resetSuccess"),"success"),await K(_,$,v)}catch(Ie){(de=window.showToast)==null||de.call(window,Ie instanceof Error?Ie.message:s("subscription.resetFailed"),"error")}finally{P(null)}}})}function z(p){var Y,ne;if(!p.user_email){(Y=window.showToast)==null||Y.call(window,s("subscription.renewMissingEmail"),"error");return}if(!p.plan_id){(ne=window.showToast)==null||ne.call(window,s("subscription.renewMissingPlan"),"error");return}pe(p),Le({period:"month_price",total_amount:""})}async function le(p){var Y,ne;if(p.preventDefault(),!(!(X!=null&&X.user_email)||!X.plan_id)){_e(!0);try{await rs({email:X.user_email,plan_id:X.plan_id,period:Me.period,total_amount:Math.round((Number(Me.total_amount)||0)*100),subscription_id:X.id}),(Y=window.showToast)==null||Y.call(window,s("subscription.renewSuccess"),"success"),pe(null)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("subscription.renewFailed"),"error")}finally{_e(!1)}}}async function re(p){var ne;if(!p)return;const Y=await zt(p);(ne=window.showToast)==null||ne.call(window,s(Y?"subscription.copySuccess":"common.copyFailed"),Y?"success":"error")}function te(p,Y){a(ne=>ne.map(de=>de.id===p?{...de,subscribe_url:Y}:de)),Q(ne=>ne&&ne.id===p?{...ne,subscribe_url:Y}:ne)}async function fe(p){if(p.subscribe_url)return p.subscribe_url;const ne=(await $o(p.id)).data||null;return ne&&te(p.id,ne),ne}async function me(p){var Y;if(!p.subscribe_url){B(p.id);try{await fe(p)}catch(ne){(Y=window.showToast)==null||Y.call(window,ne instanceof Error?ne.message:s("common.copyFailed"),"error")}finally{B(null)}}}async function ze(p){var Y,ne;B(p.id);try{const de=await fe(p);if(!de){(Y=window.showToast)==null||Y.call(window,s("common.copyFailed"),"error");return}await re(de)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("common.copyFailed"),"error")}finally{B(null)}}async function Te(p){var Y,ne;B(p.id);try{const de=await fe(p);if(!de){(Y=window.showToast)==null||Y.call(window,s("common.copyFailed"),"error");return}f({url:de,subscriptionId:p.id})}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("common.copyFailed"),"error")}finally{B(null)}}function Qe(p){Q(p),N([]),C(0),j(1),be(p,1),me(p)}function Ve(p=W){return F?be(F,p):Promise.resolve()}function Be(p){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var ne,de;P(p.id);try{await Ni(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([Ve(),K(_,$,v)])}catch(Ie){(de=window.showToast)==null||de.call(window,Ie instanceof Error?Ie.message:s("subscription.unbindFailed"),"error")}finally{P(null)}}})}function $t(p){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var ne,de;P(p.id);try{await ki(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.banSuccess"),"success"),await Promise.all([Ve(),K(_,$,v)])}catch(Ie){(de=window.showToast)==null||de.call(window,Ie instanceof Error?Ie.message:s("subscription.banFailed"),"error")}finally{P(null)}}})}function et(p){const Y=p.device_limit&&p.device_limit>0?String(p.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:p.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:Y})]}),p.device_limit&&p.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(p.device_count/p.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Qe(p),children:[e.jsx(Wn,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function ht(p){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Dt(p.total_used)," / ",Dt(p.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${nc(p)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Dt(p.u),download:Dt(p.d)})})]})}function qt(p){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function Ft(p){return e.jsxs("div",{className:"subscription-link-stack",children:[qt(p),p.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.subscribe_url,onClick:()=>void ze(p),disabled:V===p.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void ze(p),disabled:V===p.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{children:V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function Et(p){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:V===p.id,onClick:()=>void Te(p),children:[e.jsx(Yn,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),Ft(p)]})}function Mt(p,Y=!1,ne=""){const de=Ie=>{xe(),Ie()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${Y?"subscription-action-menu-fixed":""} ${ne}`.trim(),style:Y&&Se?{top:Se.top,left:Se.left}:void 0,onMouseDown:Ie=>Ie.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>st(p)),children:[e.jsx(Ge,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>z(p)),children:[e.jsx(hi,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>Qe(p)),children:[e.jsx(Wn,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>de(()=>void ze(p)),children:[e.jsx(ft,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>de(()=>void Te(p)),children:[e.jsx(Yn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:y===p.id,onClick:()=>de(()=>at(p)),children:[e.jsx(is,{size:14}),s("subscription.resetSecret")]})]})}function At(p,Y="desktop"){return Y==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id&&!Se?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>qe(p.id),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Ne===p.id&&!Se?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:xe,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ne=>ne.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:p.user_email??s("subscription.userId",{id:p.user_id})}),e.jsxs("small",{children:["#",p.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:xe,children:e.jsx(ke,{size:16})})]}),Mt(p,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ne=>Fe(p.id,ne.currentTarget),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Ne===p.id&&Se?ri.createPortal(Mt(p,!0),document.body):null]})}const wt=Math.ceil(g/Gs),Nt=Math.ceil(q/Ws),Ot=wt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||D,onClick:()=>void K(_-1,$,v),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:_,total:wt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:_>=wt||D,onClick:()=>void K(_+1,$,v),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null;return e.jsxs(We,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:g})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:D,onClick:()=>void K(_,$,v),children:[e.jsx(Re,{size:16}),s(D?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:v,onChange:p=>u(p.target.value),children:Jl.map(p=>e.jsx("option",{value:p,children:ec(p,s)},p))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input",value:$,onChange:p=>G(p.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:mt,children:s("common.clearFilter")})]}),I?e.jsx("div",{className:"form-error",children:I}):null,D&&l.length===0?e.jsx(Ee,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[l.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",p.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:p.user_id}),p.plan_id?` - ${s("subscription.planId",{id:p.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ks(p.status,s)})}),e.jsx("td",{children:ht(p)}),e.jsx("td",{children:et(p)}),e.jsx("td",{children:_t(p.expired_at,s("subscription.never"))}),e.jsx("td",{children:_t(p.updated_at,s("subscription.never"))}),e.jsx("td",{children:At(p)})]},p.id)),!D&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[l.map(p=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",p.id]}),e.jsx("strong",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ks(p.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),ht(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),et(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:_t(p.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:_t(p.updated_at,s("subscription.never"))})]})]}),At(p,"mobile")]},p.id)),!D&&l.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),Ot,F?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Q(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:F.id})}),e.jsx("p",{children:F.user_email??s("subscription.userId",{id:F.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>Q(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[se?e.jsx("div",{className:"form-error",children:se}):null,O&&r.length===0?e.jsx(Ee,{label:s("subscription.slotsLoading")}):null,Et(F),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[r.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Js(p.status)}`,children:Ys(p.status,s)})}),e.jsx("td",{children:p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>re(p.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsx("td",{children:_t(p.first_seen_at,"-")}),e.jsx("td",{children:_t(p.last_seen_at,"-")}),e.jsx("td",{children:Zs(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===p.id,onClick:()=>Be(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===p.id,onClick:()=>$t(p),children:[e.jsx(It,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},p.id)),!O&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[r.map(p=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Js(p.status)}`,children:Ys(p.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>re(p.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:_t(p.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:_t(p.last_seen_at,"-")})]})]}),Zs(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===p.id,onClick:()=>Be(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===p.id,onClick:()=>$t(p),children:[e.jsx(It,{size:14}),s("subscription.ban")]}):null]}):null]},p.id)),!O&&r.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),Nt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:W<=1||O,onClick:()=>void Ve(W-1),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:W,total:Nt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:W>=Nt||O,onClick:()=>void Ve(W+1),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null]})]})}):null,Ke?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>f(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:Ke.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>f(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Ke.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:Ke.url})]})]})}):null,k?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:k.id})}),e.jsx("p",{children:k.user_email??s("subscription.userId",{id:k.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>R(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:it,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:H.plan_id,onChange:p=>U(Y=>({...Y,plan_id:p.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),d.map(p=>e.jsxs("option",{value:p.id,children:["#",p.id," - ",p.name]},p.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:H.transfer_enable,onChange:p=>U(Y=>({...Y,transfer_enable:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:H.u,onChange:p=>U(Y=>({...Y,u:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:H.d,onChange:p=>U(Y=>({...Y,d:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:H.device_limit,onChange:p=>U(Y=>({...Y,device_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:H.speed_limit,onChange:p=>U(Y=>({...Y,speed_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:H.expired_at,onChange:p=>U(Y=>({...Y,expired_at:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:H.status,onChange:p=>U(Y=>({...Y,status:p.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:H.auto_renewal,onChange:p=>U(Y=>({...Y,auto_renewal:p.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:H.name_sni,onChange:p=>U(Y=>({...Y,name_sni:p.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:H.network_settings,onChange:p=>U(Y=>({...Y,network_settings:p.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:H.remarks,onChange:p=>U(Y=>({...Y,remarks:p.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:y===k.id,children:y===k.id?s("common.processing"):s("common.save")})]})]})]})}):null,X?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>pe(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:X.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>pe(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:le,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:X.user_email??"",children:X.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",X.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:ue(X.plan_id),children:ue(X.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:Me.period,onChange:p=>Le(Y=>({...Y,period:p.target.value})),children:Zl.map(p=>e.jsx("option",{value:p,children:tc(p,s)},p))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Me.total_amount,onChange:p=>Le(Y=>({...Y,total_amount:p.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>pe(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:De,children:s(De?"common.processing":"common.save")})]})]})]})}):null]})}const Qs=15,ic=["email","user_id","node","hwid","user_agent","last_ip"];function Yt(n){return n?new Date(n*1e3).toLocaleString():"-"}function St(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let l=t,a=0;for(;l>=1024&&a<s.length-1;)l/=1024,a+=1;return`${l>=10||a===0?l.toFixed(0):l.toFixed(2)} ${s[a]}`}function ac(n){return["user_id","subscription_id","node","node_type","node_id","online_ip"].includes(n)?"=":"like"}function oc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");case"online_ip":return t("device.filterOnlineIp");default:return""}}function Xs(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function un(n){return(n.online_ips??[]).join(", ")||"-"}function mn(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function rc(n){return String(n.hwid??"").trim()!==""}function lc(n){var g,x,_,m;const t=new URLSearchParams(n),s=[],l=(g=t.get("online_ip"))==null?void 0:g.trim();l&&s.push({key:"online_ip",condition:"=",value:l});const a=(x=t.get("node_type"))==null?void 0:x.trim(),d=(_=t.get("node_id"))==null?void 0:_.trim();if(a&&d)return{visible:{field:"node",value:`${a}:${d}`},hidden:s};if(d)return{visible:{field:"node",value:d},hidden:s};const c=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of c){const u=(m=t.get(v))==null?void 0:m.trim();if(u)return{visible:{field:v,value:u},hidden:s}}return{visible:null,hidden:s}}function cc(){const n=Ue(),t=tn(),{t:s}=he(),[l,a]=o.useState([]),[d,c]=o.useState(0),[g,x]=o.useState(1),[_,m]=o.useState("email"),[v,u]=o.useState(""),[$,G]=o.useState([]),[D,S]=o.useState(!0),[I,T]=o.useState(""),[k,R]=o.useState(null),[H,U]=o.useState(null),[y,P]=o.useState(null),F=o.useCallback(async(b=1,V="",B="email",X=[])=>{S(!0),T("");try{const pe=[];V.trim()&&pe.push({key:B,condition:ac(B),value:V.trim()}),X.forEach(Le=>{String(Le.value??"").trim()&&pe.push(Le)});const Me=await wi(b,Qs,pe.length?pe:void 0);a(Me.data),c(Me.total),x(b)}catch(pe){T(pe instanceof Error?pe.message:s("device.loadFailed"))}finally{S(!1)}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const b=lc(t.search);if(G(b.hidden),b.visible){m(b.visible.field),u(b.visible.value),F(1,b.visible.value,b.visible.field,b.hidden);return}F(1,"","email",b.hidden)},[F,n,t.search]),o.useEffect(()=>{if(y===null)return;function b(B){const X=B.target;X!=null&&X.closest(".device-action-wrap")||P(null)}function V(B){B.key==="Escape"&&P(null)}return document.addEventListener("pointerdown",b),document.addEventListener("keydown",V),()=>{document.removeEventListener("pointerdown",b),document.removeEventListener("keydown",V)}},[y]);function Q(b){b.preventDefault(),F(1,v,_,$)}function r(){if(u(""),G([]),t.search){n.replace("/device");return}F(1,"",_,[])}async function N(b){var B;if(!b.hwid)return;const V=await zt(b.hwid);(B=window.showToast)==null||B.call(window,s(V?"device.copySuccess":"common.copyFailed"),V?"success":"error")}async function q(b){var B;const V=await zt(b.uuid);(B=window.showToast)==null||B.call(window,s(V?"device.copyUuidSuccess":"common.copyFailed"),V?"success":"error")}function C(b){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var B,X;R(b.id);try{await Ni(b.id),(B=window.showToast)==null||B.call(window,s("device.unbindSuccess"),"success"),await F(g,v,_,$)}catch(pe){(X=window.showToast)==null||X.call(window,pe instanceof Error?pe.message:s("device.unbindFailed"),"error")}finally{R(null)}}})}function W(b){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var B,X;R(b.id);try{await ki(b.id),(B=window.showToast)==null||B.call(window,s("device.banSuccess"),"success"),await F(g,v,_,$)}catch(pe){(X=window.showToast)==null||X.call(window,pe instanceof Error?pe.message:s("device.banFailed"),"error")}finally{R(null)}}})}function j(b){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.resetConfirm",{user:b.user_email??`#${b.user_id}`}),onConfirm:async()=>{var B,X;U(b.user_id);try{await Lo(b.user_id),(B=window.showToast)==null||B.call(window,s("device.resetSuccess"),"success"),await F(g,v,_,$)}catch(pe){(X=window.showToast)==null||X.call(window,pe instanceof Error?pe.message:s("device.resetFailed"),"error")}finally{U(null)}}})}function O(b){P(null),b()}function E(b,V){const B=V==="mobile"?-b.id:b.id,X=y===B,pe=rc(b);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${X?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>P(X?null:B),children:[s("device.action")," ",e.jsx(yt,{size:14})]}),X?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[pe?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:k===b.id,onClick:()=>O(()=>C(b)),children:[e.jsx(Zn,{size:14}),s("device.unbind")]}),b.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:k===b.id,onClick:()=>O(()=>W(b)),children:[e.jsx(It,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:H===b.user_id,onClick:()=>O(()=>j(b)),children:[e.jsx(ja,{size:14}),s("device.resetUser")]})]}):null]})}const se=Math.ceil(d/Qs);return e.jsxs(We,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:d})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:D,onClick:()=>void F(g,v,_,$),children:[e.jsx(Re,{size:16}),s(D?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:Q,children:[e.jsx("select",{className:"config-input filter-select",value:_,onChange:b=>m(b.target.value),children:ic.map(b=>e.jsx("option",{value:b,children:oc(b,s)},b))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input",value:v,onChange:b=>u(b.target.value),placeholder:s(_==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:s("device.clear")})]}),I?e.jsx("div",{className:"form-error",children:I}):null,D&&l.length===0?e.jsx(Ee,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[l.map(b=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:b.user_email??"-"}),e.jsxs("small",{children:["ID: ",b.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[b.plan_name??"-",b.user_plan_id?` #${b.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Xs(b.status,s)}),e.jsxs("span",{className:`online-badge ${b.is_online?"online":"offline"}`,children:[b.is_online?e.jsx(vs,{size:14}):e.jsx(ys,{size:14}),b.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Xt,{value:b.uuid,onCopy:()=>q(b),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),b.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:b.hwid,onClick:()=>N(b),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:b.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:b.user_agent??"",children:b.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${b.last_ip??"-"} / ${b.first_ip??"-"}`,children:[b.last_ip??"-",b.first_ip?` (${b.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${St(b.device_upload)} / ${s("device.download")}: ${St(b.device_download)}`,children:[St(b.device_used_traffic)," / ",s("device.upload"),": ",St(b.device_upload)," / ",s("device.download"),": ",St(b.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${un(b)} / ${mn(b)}`,children:[s("device.onlineIps"),": ",un(b)," / ",s("device.onlineNodes"),": ",mn(b)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Yt(b.first_seen_at)," / ",s("device.lastSeen"),": ",Yt(b.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:E(b,"mobile")})]},b.id)),!D&&l.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[l.map(b=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:b.user_email??"-"}),e.jsxs("small",{children:["ID: ",b.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[b.plan_name??"-",b.user_plan_id?` #${b.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Xs(b.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:St(b.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",St(b.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",St(b.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${b.is_online?"online":"offline"}`,children:[b.is_online?e.jsx(vs,{size:14}):e.jsx(ys,{size:14}),b.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:un(b),children:[s("device.onlineIps"),": ",un(b)]}),e.jsxs("small",{title:mn(b),children:[s("device.onlineNodes"),": ",mn(b)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Yt(b.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Xt,{value:b.uuid,onCopy:()=>q(b),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),b.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:b.hwid,onClick:()=>N(b),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:b.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:b.user_agent??"",children:b.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:b.last_ip??"-"}),e.jsx("small",{children:b.first_ip?`${s("device.firstIp")}: ${b.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Yt(b.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Yt(b.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:E(b,"desktop")})]},b.id)),!D&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),se>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:g<=1||D,onClick:()=>void F(g-1,v,_,$),children:[e.jsx(vt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:g,total:se})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:g>=se||D,onClick:()=>void F(g+1,v,_,$),children:[s("device.next"),e.jsx(jt,{size:14})]})]}):null]})]})}const dc={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ps(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return ps(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Vs(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:ps(n.plan_id)}:{...dc}}function Hn(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function pc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function uc(n){return Number(n)===1}function ei(n,t,s){if(!n.length)return s("webcon.allPlans");const l=new Map(t.map(a=>[Number(a.id),a.name]));return n.map(a=>l.get(a)??`#${a}`).join(", ")}function Ct(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function mc(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[x,_]=o.useState(!0),[m,v]=o.useState(!1),[u,$]=o.useState(null),[G,D]=o.useState(""),S=o.useCallback(async()=>{_(!0),D("");try{const[y,P]=await Promise.all([Jo(),Pt()]);l(y),d(P)}catch(y){D(y instanceof Error?y.message:t("webcon.toastLoadFailed"))}finally{_(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}S()},[S,n]);const I=o.useMemo(()=>a.map(y=>({id:Number(y.id),name:y.name})),[a]);function T(y,P){g(F=>F&&{...F,[y]:P})}function k(y,P){g(F=>{if(!F)return F;const Q=P?Array.from(new Set([...F.plan_ids,y])):F.plan_ids.filter(r=>r!==y);return{...F,plan_ids:Q}})}async function R(y){var F,Q;if(y.preventDefault(),!c)return;const P=Hn(c.domain);v(!0),D("");try{await Zo({id:c.id,email:c.email.trim(),domain:P,title:c.title.trim(),description:c.description.trim()||null,logo:c.logo.trim()||null,background_url:c.background_url.trim()||null,custom_html:c.custom_html||null,plan_ids:c.plan_ids,plan_id:c.plan_ids}),g(null),(F=window.showToast)==null||F.call(window,t("webcon.toastSaveSuccess"),"success"),await S()}catch(r){const N=r instanceof Error?r.message:t("webcon.toastSaveFailed");D(N),(Q=window.showToast)==null||Q.call(window,N,"error")}finally{v(!1)}}async function H(y){var P,F;$(y.id);try{await Xo(y.id),(P=window.showToast)==null||P.call(window,t("webcon.toastToggleSuccess"),"success"),await S()}catch(Q){const r=Q instanceof Error?Q.message:t("webcon.toastToggleFailed");D(r),(F=window.showToast)==null||F.call(window,r,"error")}finally{$(null)}}function U(y){var P;(P=window.showConfirm)==null||P.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var F,Q;$(y.id),D("");try{await Qo(y.id),(F=window.showToast)==null||F.call(window,t("webcon.toastDeleteSuccess"),"success"),await S()}catch(r){const N=r instanceof Error?r.message:t("webcon.toastDeleteFailed");D(N),(Q=window.showToast)==null||Q.call(window,N,"error")}finally{$(null)}}})}return e.jsxs(We,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:x,onClick:()=>void S(),children:[e.jsx(Re,{size:16}),t(x?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(Vs()),children:[e.jsx(rt,{size:16}),t("webcon.add")]})]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,x&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(y=>{var F;const P=ps(y.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",y.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${uc(y.status)?"active":""}`,type:"button",disabled:u===y.id,onClick:()=>void H(y),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:y.email??"-"}),e.jsx("small",{children:Number(y.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:y.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((F=window.settings)==null?void 0:F.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:y.title||"-"}),e.jsx("small",{children:y.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(da,{size:13}),y.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(nn,{size:13}),y.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:ei(P,I,t)}),e.jsx("small",{children:P.length?t("webcon.selectedCount",{count:P.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:pc(y.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(Vs(y)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:u===y.id,onClick:()=>U(y),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},y.id)}),!x&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>g(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:c.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>g(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:R,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:c.email,onChange:y=>T("email",y.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:c.domain,onChange:y=>T("domain",y.target.value),onBlur:y=>T("domain",Hn(y.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:c.title,onChange:y=>T("title",y.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.description")),e.jsx("input",{className:"config-input",value:c.description,onChange:y=>T("description",y.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:c.logo,onChange:y=>T("logo",y.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:c.background_url,onChange:y=>T("background_url",y.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[Ct(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[I.map(y=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:c.plan_ids.includes(y.id),onChange:P=>k(y.id,P.target.checked)}),e.jsx("span",{children:y.name})]},y.id)),I.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[Ct(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:c.custom_html,onChange:y=>T("custom_html",y.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:c.logo?e.jsx("img",{src:c.logo,alt:""}):e.jsx(ya,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:c.title||t("webcon.previewTitle")}),e.jsx("span",{children:Hn(c.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(as,{size:12})," ",ei(c.plan_ids,I,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:m,children:[e.jsx(lt,{size:16}),t(m?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ti(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Un(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function hc(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[x,_]=o.useState(!1),[m,v]=o.useState(""),[u,$]=o.useState(""),G=o.useCallback(async()=>{g(!0),v("");try{l(await Io())}catch(T){v(T instanceof Error?T.message:t("notice.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function D(T){var k,R;if(T.preventDefault(),!!a){_(!0),v(""),$("");try{const H=a.tags?a.tags.split(",").map(U=>U.trim()).filter(Boolean):[];await Fo({id:a.id,title:a.title,content:a.content,img_url:a.img_url||null,tags:H.length?H:null}),d(null),(k=window.showToast)==null||k.call(window,t("notice.saveSuccess"),"success"),await G()}catch(H){(R=window.showToast)==null||R.call(window,H instanceof Error?H.message:t("notice.saveFailed"),"error")}finally{_(!1)}}}async function S(T){var k;try{await Oo(T),await G()}catch(R){(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("notice.toggleFailed"),"error")}}async function I(T){var k;(k=window.showConfirm)==null||k.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var R,H;try{await Ao(T),(R=window.showToast)==null||R.call(window,t("notice.deleteSuccess"),"success"),await G()}catch(U){(H=window.showToast)==null||H.call(window,U instanceof Error?U.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:c,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(Un()),children:[e.jsx(rt,{size:16}),t("notice.addNotice")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,u?e.jsx("div",{className:"form-success",children:u}):null,c&&s.length===0?e.jsx(Ee,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(T=>{var k;return e.jsxs("tr",{children:[e.jsx("td",{children:T.id}),e.jsx("td",{children:e.jsx("strong",{children:T.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void S(T.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((k=T.tags)==null?void 0:k.map((R,H)=>e.jsx("span",{className:"tag",children:R},H)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:ti(T.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>d(Un(T)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(T.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},T.id)}),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(T=>e.jsxs("div",{className:`notice-mobile-card ${T.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",T.id]})}),e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void S(T.id),"aria-label":T.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:T.title}),e.jsx("div",{className:"notice-tags",children:T.tags&&T.tags.length>0?T.tags.map((k,R)=>e.jsx("span",{className:"tag-badge",children:k},R)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",ti(T.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>d(Un(T)),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void I(T.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},T.id)),!c&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:T=>d({...a,title:T.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:a.content,onChange:T=>d({...a,content:T.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:a.img_url,onChange:T=>d({...a,img_url:T.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:a.tags,onChange:T=>d({...a,tags:T.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"notice.saving":"common.save")]})]})]})]})}):null]})}function qn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function xc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,l,a)=>a.slice(l+t.length,l+t.length+2)==="//"?t:`${s}: `):""}const ni=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Bn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function bc(){var O;const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!1),[x,_]=o.useState(null),[m,v]=o.useState(""),[u,$]=o.useState(!0),[G,D]=o.useState(!1),[S,I]=o.useState(!1),[T,k]=o.useState(""),R=o.useRef(null),[H,U]=o.useState([]),[y,P]=o.useState(null),F=o.useCallback(async()=>{$(!0),k("");try{l(await Ro())}catch(E){k(E instanceof Error?E.message:"Load failed")}finally{$(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}F(),Pt().then(E=>{E&&U(E)}).catch(()=>{})},[F,n]),o.useEffect(()=>{var E;(E=R.current)==null||E.scrollIntoView({behavior:"smooth"})},[a]);async function Q(E){var se;_(E),v(""),d(null),P(null),g(!0);try{const b=await Tn(E);if(d(b),b&&b.user_id)try{const V=await Vn(b.user_id);V&&V.data&&P(V.data)}catch(V){console.error("Failed to load user info:",V)}}catch{(se=window.showToast)==null||se.call(window,"Failed to load message thread","error")}finally{g(!1)}}async function r(E){var se,b;if(E.preventDefault(),!(!x||!m.trim())){D(!0),k("");try{await Ho(x,m),v(""),(se=window.showToast)==null||se.call(window,"Reply sent!","success");try{const V=await Tn(x);d(V)}catch{}await F()}catch(V){(b=window.showToast)==null||b.call(window,V instanceof Error?V.message:"Reply failed","error")}finally{D(!1)}}}async function N(E){var se;(se=window.showConfirm)==null||se.call(window,{message:"Close this ticket?",onConfirm:async()=>{var b,V;k("");try{await Uo(E),(b=window.showToast)==null||b.call(window,"Ticket closed!","success"),x===E&&(_(null),d(null)),await F()}catch(B){k(B instanceof Error?B.message:"Close failed"),(V=window.showToast)==null||V.call(window,B instanceof Error?B.message:"Close failed","error")}}})}function q(){var V,B,X;if(!a||!y)return;const E=Number(a.withdraw_amount??0),se=Number(y.commission_balance??0);if(a.level!==3||E<=0){(V=window.showToast)==null||V.call(window,t("ticket.noWithdrawAmount"),"error");return}if(se<E){(B=window.showToast)==null||B.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const b=`${Je(E)} ${t("ticket.currencyUnit")}`;(X=window.showConfirm)==null||X.call(window,{message:t("ticket.confirmCommissionMessage",{amount:b}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var pe,Me,Le;I(!0),k("");try{const _e=((pe=(await qo(a.id)).data)==null?void 0:pe.amount)??E,Ne=`${Je(_e)} ${t("ticket.currencyUnit")}`,ge=await Tn(a.id);if(d(ge),ge!=null&&ge.user_id){const Se=await Vn(ge.user_id);P(Se.data)}await F(),(Me=window.showToast)==null||Me.call(window,t("ticket.commissionConfirmSuccess",{amount:Ne}),"success")}catch(De){(Le=window.showToast)==null||Le.call(window,De instanceof Error?De.message:t("ticket.commissionConfirmFailed"),"error")}finally{I(!1)}}})}const C=Number((y==null?void 0:y.commission_balance)??0),W=Number((a==null?void 0:a.withdraw_amount)??0),j=(a==null?void 0:a.level)===3&&W>0&&C>=W;return e.jsxs(We,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:F,disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),T?e.jsx("div",{className:"form-error",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(E=>{const se=ni(E.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:E.id}),e.jsx("td",{children:e.jsx("strong",{children:E.subject})}),e.jsxs("td",{children:["#",E.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Bn(E.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})}),e.jsx("td",{children:E.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:qn(E.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:E.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(E.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void N(E.id),children:[e.jsx(Kn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(E.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})})]},E.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(E=>{const se=ni(E.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:E.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Bn(E.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",E.id]})]}),e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",E.user_id]})]}),e.jsx("span",{children:E.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:qn(E.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:E.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(E.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void N(E.id),children:[e.jsx(Kn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(E.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})]},E.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),x!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a?`${t("ticket.ticketDetail")}: ${a.subject}`:`${t("ticket.ticketDetail")} #${x}`}),e.jsxs("p",{children:[t("ticket.user"),": #",a==null?void 0:a.user_id," | ",t("ticket.level"),": ",a!=null?Bn(a.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{_(null),d(null)},children:e.jsx(ke,{size:18})})]}),y&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:y.email,children:y.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((O=H.find(E=>E.id===y.plan_id))==null?void 0:O.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Je(y.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Je(y.commission_balance)," ",t("ticket.currencyUnit")]})]}),(a==null?void 0:a.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:W>0?`${Je(W)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:y.expired_at?new Date(y.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(a==null?void 0:a.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:q,disabled:S||!j,children:[e.jsx(ea,{size:14}),t(S?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),c?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Ee,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[a!=null&&a.message&&a.message.length>0?a.message.map(E=>{const se=E.is_me,b=se?E.user_email||t("ticket.staff"):`${t("ticket.user")} #${E.user_id}`;return e.jsxs("div",{className:`chat-message ${se?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:xc(E.message)}),e.jsxs("div",{className:"chat-meta",children:[b," • ",qn(E.created_at)]})]},E.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:R})]}),(a==null?void 0:a.status)===0?e.jsx("form",{className:"modal-form",onSubmit:r,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:m,onChange:E=>v(E.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G||!m.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(mi,{size:14}),G?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function si(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const ii={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ai(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function gc(){const n=Ue(),{t}=he(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[x,_]=o.useState(!1),[m,v]=o.useState(""),[u,$]=o.useState(""),G=o.useCallback(async()=>{g(!0),v("");try{l(await Bo())}catch(k){v(k instanceof Error?k.message:t("knowledge.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function D(k){var R;try{const H=await Go(k.id);d(ai(H))}catch(H){(R=window.showToast)==null||R.call(window,H instanceof Error?H.message:t("knowledge.detailFailed"),"error")}}async function S(k){var R,H;if(k.preventDefault(),!!a){_(!0),v(""),$("");try{await Wo({id:a.id,category:a.category,title:a.title,body:a.body,language:a.language||null,sort:a.sort?Number(a.sort):null}),d(null),(R=window.showToast)==null||R.call(window,t("knowledge.saveSuccess"),"success"),await G()}catch(U){(H=window.showToast)==null||H.call(window,U instanceof Error?U.message:t("knowledge.saveFailed"),"error")}finally{_(!1)}}}async function I(k){var R;try{await Yo(k),await G()}catch(H){(R=window.showToast)==null||R.call(window,H instanceof Error?H.message:t("knowledge.toggleFailed"),"error")}}async function T(k){var R;(R=window.showConfirm)==null||R.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var H,U;try{await Ko(k),(H=window.showToast)==null||H.call(window,t("knowledge.deleteSuccess"),"success"),await G()}catch(y){(U=window.showToast)==null||U.call(window,y instanceof Error?y.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:c,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(ai()),children:[e.jsx(rt,{size:16}),t("knowledge.addArticle")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,u?e.jsx("div",{className:"form-success",children:u}):null,c&&s.length===0?e.jsx(Ee,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(k=>e.jsxs("tr",{children:[e.jsx("td",{children:k.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:k.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:k.title})}),e.jsx("td",{children:k.language&&ii[k.language]||k.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void I(k.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:k.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:si(k.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void D(k),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void T(k.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},k.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(k=>e.jsxs("div",{className:`knowledge-mobile-card ${k.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",k.id]}),k.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",k.sort]})]}),e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void I(k.id),"aria-label":k.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:k.title}),e.jsxs("div",{className:"card-meta",children:[k.category&&e.jsx("span",{className:"category-badge",children:k.category}),k.language&&e.jsx("span",{className:"lang-badge",children:ii[k.language]||k.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",si(k.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void D(k),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void T(k.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},k.id)),!c&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:S,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:a.category,onChange:k=>d({...a,category:k.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:k=>d({...a,title:k.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:a.body,onChange:k=>d({...a,body:k.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:a.language,onChange:k=>d({...a,language:k.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:a.sort,onChange:k=>d({...a,sort:k.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(lt,{size:16}),t(x?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function fc(){const n=Ue(),{t}=he(),[s,l]=o.useState(null),[a,d]=o.useState(null),[c,g]=o.useState(null),[x,_]=o.useState(""),[m,v]=o.useState(!0),[u,$]=o.useState(""),G=o.useCallback(async()=>{v(!0),$("");try{const[S,I,T,k]=await Promise.all([Vo().catch(()=>({data:{}})),nr().catch(()=>({data:{}})),sr().catch(()=>({data:[]})),ir().catch(()=>({data:""}))]);l(S.data),d(I.data),g(T.data),_(typeof k.data=="string"?k.data:"")}catch(S){$(S instanceof Error?S.message:t("queue.toastLoadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);function D(S,I,T){return S?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[T," ",I]}),e.jsx("div",{className:"queue-grid",children:Object.entries(S).map(([k,R])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:k}),e.jsx("strong",{children:typeof R=="object"?JSON.stringify(R):String(R??"—")})]},k))})]}):null}return e.jsxs(We,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:m,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),u?e.jsx("div",{className:"form-error",children:u}):null,m?e.jsx(Ee,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[D(s,t("queue.systemStatus"),e.jsx(bn,{size:18})),D(a,t("queue.queueStats"),e.jsx(as,{size:18})),c&&c.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Ji,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(c,null,2)})]}):null,x?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(ia,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:x})]}):null]})]})}function vc(){return e.jsx(Ia,{children:e.jsxs(Ri,{children:[e.jsx(Oe,{path:"/login",element:e.jsx(vr,{})}),e.jsx(Oe,{path:"/dashboard",element:e.jsx(Sr,{})}),e.jsx(Oe,{path:"/config/system",element:e.jsx(Ir,{})}),e.jsx(Oe,{path:"/config/payment",element:e.jsx(Or,{})}),e.jsx(Oe,{path:"/config/theme",element:e.jsx(Ur,{})}),e.jsx(Oe,{path:"/server/manage",element:e.jsx(Sl,{})}),e.jsx(Oe,{path:"/server/group",element:e.jsx(Cl,{})}),e.jsx(Oe,{path:"/server/route",element:e.jsx(Pl,{})}),e.jsx(Oe,{path:"/plan",element:e.jsx(Ll,{})}),e.jsx(Oe,{path:"/order",element:e.jsx(Fl,{})}),e.jsx(Oe,{path:"/coupon",element:e.jsx(Al,{})}),e.jsx(Oe,{path:"/giftcard",element:e.jsx(Rl,{})}),e.jsx(Oe,{path:"/user",element:e.jsx(Kl,{})}),e.jsx(Oe,{path:"/subscription",element:e.jsx(sc,{})}),e.jsx(Oe,{path:"/device",element:e.jsx(cc,{})}),e.jsx(Oe,{path:"/webcon",element:e.jsx(mc,{})}),e.jsx(Oe,{path:"/notice",element:e.jsx(hc,{})}),e.jsx(Oe,{path:"/ticket",element:e.jsx(bc,{})}),e.jsx(Oe,{path:"/knowledge",element:e.jsx(gc,{})}),e.jsx(Oe,{path:"/queue",element:e.jsx(fc,{})}),e.jsx(Oe,{path:"/",element:e.jsx(ms,{to:"/dashboard",replace:!0})}),e.jsx(Oe,{path:"*",element:e.jsx(ms,{to:"/dashboard",replace:!0})})]})})}export{vc as default};
