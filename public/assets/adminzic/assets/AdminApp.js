import{b as o,j as e,c as Ai,u as tn,L as Oi,r as ri,a as Ri,R as Oe,N as us}from"./index.js";const ns=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],li="admin-locale",Kn="vi-VN",Hi="/assets/adminzic",ci=o.createContext(null);function Ui(){if(typeof window>"u")return Kn;const n=localStorage.getItem(li);return n&&ns.some(t=>t.code===n)?n:Kn}function qi(n,t){return t?Object.entries(t).reduce((s,[r,a])=>s.replaceAll(`{${r}}`,String(a)),n):n}function Bi(n){return new Promise((t,s)=>{var d;if(typeof window>"u"){t({});return}const r=(d=window.AdminNextI18n)==null?void 0:d[n];if(r){t(r);return}const a=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(a){a.addEventListener("load",()=>{var f;t(((f=window.AdminNextI18n)==null?void 0:f[n])??{})}),a.addEventListener("error",s);return}const c=document.createElement("script");c.src=`${Hi}/i18n/${n}.js`,c.async=!0,c.dataset.adminNextLocale=n,c.onload=()=>{var f;return t(((f=window.AdminNextI18n)==null?void 0:f[n])??{})},c.onerror=s,document.head.appendChild(c)})}function Gi({children:n}){const[t,s]=o.useState(Kn),[r,a]=o.useState({}),[c,d]=o.useState(!0);o.useEffect(()=>{s(Ui())},[]);const f=o.useCallback(h=>{s(h),typeof window<"u"&&localStorage.setItem(li,h)},[]);o.useEffect(()=>{let h=!0;return d(!0),Bi(t).then(w=>{h&&a(w)}).finally(()=>{h&&d(!1)}),()=>{h=!1}},[t]);const b=o.useCallback((h,w)=>qi(r[h]??h,w),[r]),C=o.useMemo(()=>({locale:t,loading:c,setLocale:f,t:b}),[t,c,f,b]);return e.jsx(ci.Provider,{value:C,children:n})}function ue(){const n=o.useContext(ci);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),di=(...n)=>n.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ki={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=o.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:a="",children:c,iconNode:d,...f},b)=>o.createElement("svg",{ref:b,...Ki,width:t,height:t,stroke:n,strokeWidth:r?Number(s)*24/Number(t):s,className:di("lucide",a),...f},[...d.map(([C,h])=>o.createElement(C,h)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=(n,t)=>{const s=o.forwardRef(({className:r,...a},c)=>o.createElement(Yi,{ref:c,iconNode:t,className:di(`lucide-${Wi(n)}`,r),...a}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=te("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=te("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=te("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=te("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=te("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=te("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=te("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=te("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=te("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=te("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=te("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=te("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=te("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=te("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=te("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=te("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=te("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=te("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=te("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=te("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=te("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=te("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=te("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=te("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=te("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=te("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=te("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=te("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=te("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=te("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=te("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=te("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=te("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=te("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=te("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=te("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=te("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=te("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=te("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=te("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=te("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=te("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=te("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=te("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=te("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=te("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=te("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=te("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=te("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=te("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=te("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=te("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=te("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=te("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=te("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=te("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=te("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=te("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=te("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=te("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=te("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=te("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=te("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=te("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=te("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=te("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=te("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=te("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=te("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=te("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=te("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=te("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=te("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=te("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=te("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=te("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=te("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ke=te("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=te("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),La=o.createContext(null);function Ia({children:n}){const[t,s]=o.useState([]),[r,a]=o.useState(null),c=o.useCallback((C,h="success")=>{const w=Math.random().toString(36).substring(2,9);s(u=>[...u,{id:w,message:C,type:h}]),setTimeout(()=>{s(u=>u.filter(M=>M.id!==w))},5e3)},[]),d=o.useCallback(C=>{a(C)},[]);o.useEffect(()=>{typeof window<"u"&&(window.showToast=c,window.showConfirm=d)},[c,d]);const f=async()=>{if(r){try{await r.onConfirm()}catch(C){console.error("Error in onConfirm:",C)}a(null)}},b=()=>{r&&(r.onCancel&&r.onCancel(),a(null))};return e.jsxs(La.Provider,{value:{showToast:c,showConfirm:d},children:[n,e.jsx("div",{className:"toast-container",children:t.map(C=>{let h=pa;return C.type==="success"&&(h=pi),C.type==="error"&&(h=Vi),C.type==="warning"&&(h=gn),e.jsxs("div",{className:`toast-card toast-${C.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(h,{size:18})}),e.jsx("div",{className:"toast-message",children:C.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(w=>w.filter(u=>u.id!==C.id)),children:e.jsx(ke,{size:14})})]},C.id)})}),r&&e.jsx("div",{className:"confirm-backdrop",onClick:b,children:e.jsxs("div",{className:"confirm-card",onClick:C=>C.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(gn,{size:22})}),e.jsx("h3",{className:"confirm-title",children:r.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:r.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:r.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:f,children:r.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Da({children:n}){return e.jsx(Gi,{children:e.jsx(Ia,{children:n})})}const Fa="/api/v3";var oi;const J=typeof window<"u"&&((oi=window.settings)==null?void 0:oi.secure_path)||"ZicFree123",hn="authorization";function Aa(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let r=0;r<s.length;r++){let a=s[r];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(t)===0)try{const c=a.substring(t.length,a.length),d=decodeURIComponent(c),f=JSON.parse(d);return f&&typeof f=="object"&&"value"in f?f.value:d}catch{try{return decodeURIComponent(a.substring(t.length,a.length))}catch{return a.substring(t.length,a.length)}}}return null}function Oa(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const a=JSON.stringify({site:"ZicNet",value:t}),c=window.location.protocol==="https:",d=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",f=new Date;f.setTime(f.getTime()+s*24*60*60*1e3);const b=`expires=${f.toUTCString()}`,C=d?"":`domain=${window.location.hostname};`;let h=`${n}=${encodeURIComponent(a)}; ${b}; ${C} path=/`;c&&(h+="; secure"),h+="; SameSite=Lax",document.cookie=h;try{window.localStorage.setItem(`cookie_${n}`,a)}catch{}}function Ra(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],r=["/","/dashboard","/user","/admin"];s.forEach(a=>{r.forEach(c=>{const d=a?` domain=${a};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${d} path=${c};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function xi(){if(typeof window>"u")return null;let n=window.localStorage.getItem(hn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(hn,n)}catch{}if(!n&&(n=Aa("auth_data"),n))try{window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function Ha(n,t){const s=n.startsWith("/")?n:`/${n}`,r=new URL(`${Fa}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([a,c])=>{c!==void 0&&r.searchParams.set(a,String(c))}),r.toString()}function Re(){return!!xi()}function Ua(n){typeof window>"u"||(window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n),Oa("auth_data",n,36500))}function bi(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(a=>{window.localStorage.removeItem(a)}),["token","auth_data","authorization","vuex","user","auth"].forEach(a=>{window.sessionStorage.removeItem(a)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(a=>{s.forEach(c=>{document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${c};`}),document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Ra(a)})}async function Y(n,t={}){const s={},r=t.method??"GET";if(r!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const b=xi();b&&(s.authorization=b)}const a=await fetch(Ha(n,t.params),{method:r,headers:s,body:r==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),d=(a.headers.get("content-type")||"").includes("application/json"),f=d?await a.json():await a.text();if(!a.ok){const b=typeof f=="object"&&f&&"message"in f?String(f.message):`Request failed with status ${a.status}`,C=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(b);throw(a.status===401||a.status===403&&!C)&&t.auth!==!1&&(bi(),window.location.hash="/login"),new Error(b)}if(!d&&typeof f=="string"&&(f.trim().startsWith("<!DOCTYPE html")||f.trim().startsWith("<html")||f.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return f}async function qa(n,t){return Y("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Ba(){const n=`/${J}/stat`,[t,s]=await Promise.all([Y(`${n}/getOverride`),Y(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function Ga(n){return(await Y(`/${J}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function Wa(n){return(await Y(`/${J}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ka(n){return(await Y(`/${J}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Ya(n,t=10){return(await Y(`/${J}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function gi(){return(await Y(`/${J}/config/fetch`)).data}async function fi(n){return Y(`/${J}/config/save`,{method:"POST",body:n})}async function Ja(){return(await Y(`/${J}/config/getEmailTemplate`)).data}async function Za(){return(await Y(`/${J}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Qa(){return Y(`/${J}/config/testSendMail`,{method:"POST",body:{}})}async function Xa(n){return Y(`/${J}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Va(){return(await Y(`/${J}/payment/fetch`)).data}async function eo(){return(await Y(`/${J}/payment/getPaymentMethods`)).data}async function vs(n,t){return(await Y(`/${J}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function to(n){return Y(`/${J}/payment/save`,{method:"POST",body:n})}async function no(n){return Y(`/${J}/payment/show`,{method:"POST",body:{id:n}})}async function so(n){return Y(`/${J}/payment/drop`,{method:"POST",body:{id:n}})}async function io(n){return Y(`/${J}/payment/sort`,{method:"POST",body:{ids:n}})}async function ao(){return(await Y(`/${J}/theme/getThemes`)).data}async function oo(n){return(await Y(`/${J}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function ro(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return Y(`/${J}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Bt(){return(await Y(`/${J}/server/group/fetch`)).data}async function as(n){return Y(`/${J}/server/group/save`,{method:"POST",body:n})}async function lo(n){return Y(`/${J}/server/group/drop`,{method:"POST",body:{id:n}})}const yi=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function vi(){return(await Y(`/${J}/server/route/fetch`)).data}async function co(n){return Y(`/${J}/server/route/save`,{method:"POST",body:n})}async function po(n){return Y(`/${J}/server/route/drop`,{method:"POST",body:{id:n}})}async function Et(){return(await Y(`/${J}/plan/fetch`)).data}async function uo(n){return Y(`/${J}/plan/save`,{method:"POST",body:n})}async function mo(n){return Y(`/${J}/plan/drop`,{method:"POST",body:{id:n}})}async function $n(n,t){return Y(`/${J}/plan/update`,{method:"POST",body:{id:n,...t}})}async function ho(n){return Y(`/${J}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function xo(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((r,a)=>{t.set(`filter[${a}][key]`,r.key),t.set(`filter[${a}][condition]`,r.condition),t.set(`filter[${a}][value]`,r.value)}),await Y(`/${J}/order/fetch?${t.toString()}`)}async function bo(n){return Y(`/${J}/order/paid`,{method:"POST",body:{trade_no:n}})}async function go(n){return Y(`/${J}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function os(n){return Y(`/${J}/order/assign`,{method:"POST",body:n})}async function fo(n,t){return Y(`/${J}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function yo(n){return Y(`/${J}/order/detail`,{method:"POST",body:{id:n}})}async function ji(n=1,t=15){return Y(`/${J}/coupon/fetch?current=${n}&pageSize=${t}`)}async function vo(n){return Y(`/${J}/coupon/generate`,{method:"POST",body:n})}async function jo(n){return Y(`/${J}/coupon/drop`,{method:"POST",body:{id:n}})}async function wo(n){return Y(`/${J}/coupon/show`,{method:"POST",body:{id:n}})}async function No(n=1,t=15){return Y(`/${J}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function ko(n){return Y(`/${J}/giftcard/generate`,{method:"POST",body:n})}async function _o(n){return Y(`/${J}/giftcard/drop`,{method:"POST",body:{id:n}})}async function So(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s&&s.forEach((a,c)=>{r.set(`filter[${c}][key]`,a.key),r.set(`filter[${c}][condition]`,a.condition),r.set(`filter[${c}][value]`,a.value)}),Y(`/${J}/user/fetch?${r.toString()}`)}async function Co(n){return Y(`/${J}/user/update`,{method:"POST",body:n})}async function yn(n){return Y(`/${J}/user/getUserInfoById`,{params:{id:n}})}async function zo(n){return Y(`/${J}/user/delUser`,{method:"POST",body:{id:n}})}async function To(n){return Y(`/${J}/user/generate`,{method:"POST",body:n})}async function Po(n){return Y(`/${J}/user/resetSecret`,{method:"POST",body:{id:n}})}async function $o(n=1,t=15,s,r=!1){const a=new URLSearchParams;return a.set("current",String(n)),a.set("pageSize",String(t)),r&&a.set("include_subscribe_url","1"),s==null||s.forEach((c,d)=>{a.set(`filter[${d}][key]`,c.key),a.set(`filter[${d}][condition]`,c.condition),a.set(`filter[${d}][value]`,c.value)}),Y(`/${J}/subscription/fetch?${a.toString()}`)}async function Eo(n){return Y(`/${J}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function Mo(n){return Y(`/${J}/subscription/update`,{method:"POST",body:n})}async function Lo(n){return Y(`/${J}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function wi(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s==null||s.forEach((a,c)=>{r.set(`filter[${c}][key]`,a.key),r.set(`filter[${c}][condition]`,a.condition),r.set(`filter[${c}][value]`,a.value)}),Y(`/${J}/device/fetch?${r.toString()}`)}async function Ni(n){return Y(`/${J}/device/drop`,{method:"POST",body:{id:n}})}async function ki(n){return Y(`/${J}/device/ban`,{method:"POST",body:{id:n}})}async function Io(n){return Y(`/${J}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function Do(n,t=1,s=10){return Y(`/${J}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Fo(){return(await Y(`/${J}/notice/fetch`)).data}async function Ao(n){return Y(`/${J}/notice/save`,{method:"POST",body:n})}async function Oo(n){return Y(`/${J}/notice/drop`,{method:"POST",body:{id:n}})}async function Ro(n){return Y(`/${J}/notice/show`,{method:"POST",body:{id:n}})}async function Ho(){return(await Y(`/${J}/ticket/fetch`)).data}async function En(n){return(await Y(`/${J}/ticket/fetch`,{params:{id:n}})).data}async function Uo(n,t){return Y(`/${J}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function qo(n){return Y(`/${J}/ticket/close`,{method:"POST",body:{id:n}})}async function Bo(n){return Y(`/${J}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Go(){return(await Y(`/${J}/knowledge/fetch`)).data}async function Wo(n){return(await Y(`/${J}/knowledge/fetch`,{params:{id:n}})).data}async function Ko(n){return Y(`/${J}/knowledge/save`,{method:"POST",body:n})}async function Yo(n){return Y(`/${J}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Jo(n){return Y(`/${J}/knowledge/show`,{method:"POST",body:{id:n}})}async function Zo(){return(await Y(`/${J}/webcon/fetch`)).data}async function Qo(n){return Y(`/${J}/webcon/save`,{method:"POST",body:n})}async function Xo(n){return Y(`/${J}/webcon/drop`,{method:"POST",body:{id:n}})}async function Vo(n){return Y(`/${J}/webcon/show`,{method:"POST",body:{id:n}})}async function er(){return Y(`/${J}/system/getSystemStatus`)}async function tr(){return(await Y(`/${J}/system/getCoreLicenseStatus`)).data}async function nr(){return(await Y(`/${J}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function sr(){return Y(`/${J}/system/getQueueStats`)}async function ir(){return Y(`/${J}/system/getQueueWorkload`)}async function ar(){return Y(`/${J}/system/getSystemLog`)}async function js(){return Y(`/${J}/server/manage/getNodes`)}async function or(n,t){return Y(`/${J}/server/${n}/save`,{method:"POST",body:t})}async function rr(n,t){return Y(`/${J}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function ws(n,t,s){return Y(`/${J}/server/${n}/update`,{method:"POST",body:{id:t,...s}})}async function lr(n,t){return Y(`/${J}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function cr(n){return Y(`/${J}/server/manage/sort`,{method:"POST",body:n})}function Je(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function it(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const Ns=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function _i(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Zt(n){return Number(n??0)}function ks(n){return Zt(n)/100}function _s(n){return`${it(Math.round(n))} VND`}function dr(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),r=0;for(;s>=1024&&r<t.length-1;)s/=1024,r+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||r===0?0:1}).format(s)} ${t[r]}`}function Si(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function pr(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,r)=>{const a=new Date(t);return a.setDate(t.getDate()-(n-r-1)),Si(a)})}function Ss(n,t){const s=n.get(t);if(s)return s;const r=_i(t);return n.set(t,r),r}function ur(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function an({label:n,value:t,helper:s,tone:r="default",onClick:a}){return e.jsxs("article",{className:`stat-card tone-${r}`,onClick:a,style:a?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Zi,{size:19})}),s?e.jsx("small",{children:s}):null]})}function Te({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Ae,{size:18}),e.jsx("span",{children:n})]})}function mr(n,t){const s=new Map,r=new Map;if(n.forEach(a=>{const c=Ss(s,a.date),d=ur(a.type);if(d){c[d]=Number(a.value||0);return}const f=r.get(a.date)??0,b=Ns[f%Ns.length];c[b]=Number(a.value||0),r.set(a.date,f+1)}),t){const a=Ss(s,Si(new Date));a.registrations=Zt(t.day_register_total),t.day_order_total!==void 0&&(a.orderCount=Zt(t.day_order_total)),t.day_paid_order_total!==void 0&&(a.paidCount=Zt(t.day_paid_order_total)),a.paidAmount=ks(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(a.commissionAmount=ks(t.day_commission_payout)),t.day_commission_count!==void 0&&(a.commissionCount=Zt(t.day_commission_count))}return s.size===0?[]:pr(31).map(a=>s.get(a)??_i(a))}function hr({records:n,override:t}){const{t:s}=ue(),[r,a]=o.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[c,d]=o.useState(null),f=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:_s},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:it},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:it},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:_s},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:it},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:it}],b=mr(n,t),C=f.filter(y=>r.includes(y.key)),h=C.filter(y=>y.unit==="money"),w=C.filter(y=>y.unit==="count"),u=Math.max(1,...h.flatMap(y=>b.map(O=>Number(O[y.key]||0)))),M=Math.max(1,...w.flatMap(y=>b.map(O=>Number(O[y.key]||0)))),G=920,$=300,z=8,I=22,k=$-I-28,R=b.length>1?(G-z*2)/(b.length-1):0,U=Math.max(Math.ceil(b.length/7),1),H=c===null?null:b[c]??null,j=y=>({"--metric-color":y.color}),E=(y,O)=>Number(y[O.key]||0),F=y=>y.unit==="money"?u:M,Z=y=>z+y*R,l=c===null?50:Math.min(88,Math.max(12,Z(c)/G*100)),_=(y,O)=>I+k-y/F(O)*k,D=y=>Math.max(0,...b.map(O=>E(O,y))),S=y=>{const O=b.map((L,se)=>({x:Z(se),y:_(E(L,y),y)}));return O.length?O.length===1?`M ${O[0].x} ${O[0].y}`:O.slice(1).reduce((L,se,g)=>{const ee=O[g],B=(ee.x+se.x)/2;return`${L} C ${B} ${ee.y}, ${B} ${se.y}, ${se.x} ${se.y}`},`M ${O[0].x} ${O[0].y}`):""};function q(y){a(O=>O.includes(y)?O.length===1?O:O.filter(L=>L!==y):[...O,y]),d(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:b.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:f.map(y=>{const O=r.includes(y.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${O?"active":""}`,style:j(y),onClick:()=>q(y.key),"aria-pressed":O,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:y.label})]},y.key)})}),b.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>d(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${G} ${$}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:z,y:I,width:G-z*2,height:k,rx:"14"}),[0,.25,.5,.75,1].map(y=>e.jsx("line",{className:"chart-grid",x1:z,x2:G-z,y1:I+y*k,y2:I+y*k},y)),c!==null?e.jsx("line",{className:"chart-hover-line",x1:Z(c),x2:Z(c),y1:I,y2:I+k}):null,C.map(y=>e.jsx("path",{className:"chart-series-line",d:S(y),style:j(y)},y.key)),c!==null?C.map(y=>e.jsx("circle",{className:"chart-series-dot",cx:Z(c),cy:_(E(b[c],y),y),r:"5",style:j(y)},`${y.key}-${c}`)):null,b.map((y,O)=>{const L=b.length>1?R:G-z*2;return e.jsx("rect",{className:"chart-hover-zone",x:Z(O)-L/2,y:I,width:L,height:k,onMouseEnter:()=>d(O),onFocus:()=>d(O),onClick:()=>d(O),tabIndex:0},y.date)})]}),H?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${l}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",H.date]}),e.jsx("div",{className:"tooltip-series-list",children:C.map(y=>e.jsxs("div",{className:"tooltip-series-row",style:j(y),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:y.label}),e.jsx("strong",{children:y.format(E(H,y))})]},y.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:b.filter((y,O)=>O===0||O===b.length-1||O%U===0).map(y=>e.jsx("span",{children:y.date},y.date))}),e.jsx("div",{className:"chart-insights",children:C.map(y=>e.jsxs("div",{className:"chart-insight",style:j(y),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:y.summaryLabel}),e.jsx("strong",{children:y.format(D(y))})]},y.key))})]})]})}function rs({value:n,onChange:t,monthLabel:s}){const{t:r}=ue();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":r("dashboard.range"),children:["today","month"].map(a=>e.jsx("button",{type:"button",className:n===a?"active":"",onClick:()=>t(a),"aria-pressed":n===a,children:a==="today"?r("dashboard.rangeToday"):s??r("dashboard.rangeMonth")},a))})}function xr({points:n,metrics:t,emptyLabel:s}){const{t:r}=ue(),[a,c]=o.useState(t.map(l=>l.key)),[d,f]=o.useState(null),b=t.filter(l=>a.includes(l.key)),C=Math.max(1,...b.flatMap(l=>n.map(_=>Number(_[l.key]||0)))),h=920,w=260,u=8,M=22,$=w-M-28,z=n.length>1?(h-u*2)/(n.length-1):0,I=Math.max(Math.ceil(n.length/7),1),P=d===null?null:n[d]??null,k=l=>({"--metric-color":l.color}),R=l=>u+l*z,U=l=>M+$-l/C*$,H=d===null?50:Math.min(88,Math.max(12,R(d)/h*100)),j=(l,_)=>Number(l[_.key]||0),E=l=>Math.max(0,...n.map(_=>j(_,l))),F=l=>{const _=n.map((D,S)=>({x:R(S),y:U(j(D,l))}));return _.length?_.length===1?`M ${_[0].x} ${_[0].y}`:_.slice(1).reduce((D,S,q)=>{const y=_[q],O=(y.x+S.x)/2;return`${D} C ${O} ${y.y}, ${O} ${S.y}, ${S.x} ${S.y}`},`M ${_[0].x} ${_[0].y}`):""};function Z(l){c(_=>_.includes(l)?_.length===1?_:_.filter(D=>D!==l):[..._,l]),f(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":r("dashboard.chartMetrics"),children:t.map(l=>{const _=a.includes(l.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${_?"active":""}`,style:k(l),onClick:()=>Z(l.key),"aria-pressed":_,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:l.label})]},l.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>f(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${h} ${w}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:u,y:M,width:h-u*2,height:$,rx:"14"}),[0,.25,.5,.75,1].map(l=>e.jsx("line",{className:"chart-grid",x1:u,x2:h-u,y1:M+l*$,y2:M+l*$},l)),d!==null?e.jsx("line",{className:"chart-hover-line",x1:R(d),x2:R(d),y1:M,y2:M+$}):null,b.map(l=>e.jsx("path",{className:"chart-series-line",d:F(l),style:k(l)},l.key)),d!==null?b.map(l=>e.jsx("circle",{className:"chart-series-dot",cx:R(d),cy:U(j(n[d],l)),r:"5",style:k(l)},`${l.key}-${d}`)):null,n.map((l,_)=>{const D=n.length>1?z:h-u*2;return e.jsx("rect",{className:"chart-hover-zone",x:R(_)-D/2,y:M,width:D,height:$,onMouseEnter:()=>f(_),onFocus:()=>f(_),onClick:()=>f(_),tabIndex:0},`${l.label}-${_}`)})]}),P?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${H}%`},children:[e.jsx("div",{className:"tooltip-date",children:P.label}),e.jsxs("div",{className:"tooltip-series-list",children:[b.map(l=>e.jsxs("div",{className:"tooltip-series-row",style:k(l),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:l.label}),e.jsx("strong",{children:l.format(j(P,l))})]},l.key)),P.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:r("dashboard.sampleCount")}),e.jsx("strong",{children:it(P.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((l,_)=>_===0||_===n.length-1||_%I===0).map((l,_)=>e.jsx("span",{children:l.label},`${l.label}-${_}`))}),e.jsx("div",{className:"chart-insights",children:b.map(l=>e.jsxs("div",{className:"chart-insight",style:k(l),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:l.summaryLabel}),e.jsx("strong",{children:l.format(E(l))})]},l.key))})]})}function Cs({title:n,subtitle:t,data:s,range:r,onRangeChange:a,loading:c,error:d,mode:f}){const{t:b}=ue(),C=f==="users"?((s==null?void 0:s.users)??[]).map(h=>({id:`user-${h.user_id}`,label:h.email||`User #${h.user_id}`,total:Number(h.total||0)})):((s==null?void 0:s.servers)??[]).map(h=>({id:`${h.server_type}-${h.server_id}`,label:h.server_name||b("dashboard.unnamedNode"),total:Number(h.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(rs,{value:r,onChange:a,monthLabel:b("dashboard.rangeLast31Days")})]}),d?e.jsx("div",{className:"chart-error",children:d}):null,c?e.jsx(Te,{label:b("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:C.length===0?e.jsx("div",{className:"empty-state",children:b("dashboard.noTraffic")}):C.slice(0,10).map((h,w)=>{var G;const u=Math.max(((G=C[0])==null?void 0:G.total)??1,1),M=Math.max(3,h.total/u*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:w+1}),e.jsx("strong",{title:h.label,children:h.label}),e.jsx("small",{children:dr(h.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${M}%`}})})]},h.id)})})]})}function br({data:n,range:t,onRangeChange:s,loading:r,error:a}){const{t:c}=ue(),d=[{key:"online_user",label:c("dashboard.onlineUsers"),summaryLabel:c(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:it}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c("dashboard.onlineTrend")}),e.jsx("p",{children:c(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(rs,{value:t,onChange:s,monthLabel:c("dashboard.rangeLast31Days")})]}),a?e.jsx("div",{className:"chart-error",children:c("dashboard.chartLoadFailed")}):null,r?e.jsx(Te,{label:c("dashboard.chartLoading")}):e.jsx(xr,{points:(n==null?void 0:n.points)??[],metrics:d,emptyLabel:c("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:c("dashboard.onlineRetentionNote")})]})}function gr({data:n,range:t,onRangeChange:s,loading:r,error:a}){const{t:c}=ue(),d=(n==null?void 0:n.items)??[],f=Math.max(...d.map(b=>Number(b.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c("dashboard.topCtvCommission")}),e.jsx("p",{children:c("dashboard.topCtvCommissionHelp")})]}),e.jsx(rs,{value:t,onChange:s})]}),a?e.jsx("div",{className:"chart-error",children:c("dashboard.chartLoadFailed")}):null,r?e.jsx(Te,{label:c("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:d.length===0?e.jsx("div",{className:"empty-state",children:c("dashboard.noCommissionRank")}):d.map((b,C)=>{const h=Number(b.commission_amount||0)/f*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:C+1}),e.jsx("strong",{children:b.email||`User #${b.user_id}`}),e.jsxs("small",{children:[Je(b.commission_amount)," VND · ",it(b.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(h,3)}%`}})})]},`${b.user_id}-${C}`)})})]})}function Mn({label:n,current:t,previous:s}){const{t:r}=ue();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?it(t):t}),e.jsxs("small",{children:[r("dashboard.previous"),": ",typeof s=="number"?it(s):s]})]})}function He(){const n=Ai();return o.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function fr(){return tn().pathname}function yr({href:n,...t}){return e.jsx(Oi,{to:n,...t})}function vr(){const n=He(),{t,locale:s,setLocale:r}=ue(),[a,c]=o.useState(""),[d,f]=o.useState(""),[b,C]=o.useState(""),[h,w]=o.useState(!1),[u,M]=o.useState(!1),G=o.useRef(null);o.useEffect(()=>{function z(I){G.current&&!G.current.contains(I.target)&&M(!1)}return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),o.useEffect(()=>{Re()&&n.replace("/dashboard")},[n]);async function $(z){var I,P,k,R;z.preventDefault(),C(""),w(!0);try{const U=await qa(a,d),H=((I=U.data)==null?void 0:I.auth_data)??((P=U.data)==null?void 0:P.token),j=((k=U.data)==null?void 0:k.is_admin)===1||((R=U.data)==null?void 0:R.is_admin)===!0;if(!H||!j)throw new Error(t("login.adminRequired"));Ua(H),n.replace("/dashboard")}catch(U){C(U instanceof Error?U.message:t("login.failed"))}finally{w(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:G,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>M(z=>!z),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ns.map(z=>e.jsxs("button",{className:`locale-option ${s===z.code?"active":""}`,type:"button",onClick:()=>{r(z.code),M(!1)},children:[e.jsx("span",{className:"locale-flag",children:z.flag}),e.jsx("span",{children:z.label})]},z.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(Na,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:$,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ui,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:z=>c(z.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:a})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ha,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:z=>f(z.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:d})]})]}),b?e.jsx("div",{className:"form-error",children:b}):null,e.jsx("button",{className:"primary-button",disabled:h,type:"submit",children:t(h?"login.signingIn":"login.submit")})]})]})]})}const jr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:la}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Sa},{href:"/config/payment",label:"nav.paymentConfig",icon:sa},{href:"/config/theme",label:"nav.themeConfig",icon:Pa}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:is},{href:"/server/group",label:"nav.groupManagement",icon:Ea},{href:"/server/route",label:"nav.routeManagement",icon:_a}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:gs},{href:"/order",label:"nav.orders",icon:ma},{href:"/coupon",label:"nav.coupons",icon:ca},{href:"/giftcard",label:"nav.giftcards",icon:za}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Xn},{href:"/subscription",label:"nav.subscriptions",icon:gs},{href:"/device",label:"nav.devices",icon:Ca},{href:"/webcon",label:"nav.webcon",icon:nn},{href:"/notice",label:"nav.notices",icon:Jt},{href:"/ticket",label:"nav.tickets",icon:ua},{href:"/knowledge",label:"nav.knowledge",icon:Qi}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Xi}]}];function wr(){const[n,t]=o.useState("light");o.useEffect(()=>{const c=localStorage.getItem("admin-theme")??"light";t(c),document.documentElement.setAttribute("data-theme",c)},[]);const s=o.useCallback(a=>{t(a),localStorage.setItem("admin-theme",a),document.documentElement.setAttribute("data-theme",a)},[]),r=o.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:r}}function Ci(n){return n?new Date(n*1e3):null}function Nr(n,t){const s=Ci(t);if(!s)return null;try{return new Intl.DateTimeFormat(n,{year:"numeric",month:"2-digit",day:"2-digit"}).format(s)}catch{return s.toLocaleDateString()}}function kr(n){const t=Ci(n);return t?Math.ceil((t.getTime()-Date.now())/864e5):null}function Ge({children:n,title:t,subtitle:s}){const[r,a]=o.useState(!1),c=He(),d=fr(),{t:f,locale:b,setLocale:C}=ue(),{theme:h,toggle:w}=wr(),[u,M]=o.useState(!1),G=o.useRef(null),[$,z]=o.useState(null),[I,P]=o.useState(!1),k=o.useCallback(async(D=!1)=>{if(Re()){P(D);try{z(D?await nr():await tr())}catch{z({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,service_unavailable:!0,requires_renewal:!1,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:f("license.unavailable"),error:null,error_code:null,last_known_good:!1,stale:!1})}finally{P(!1)}}},[f]);o.useEffect(()=>{function D(S){G.current&&!G.current.contains(S.target)&&M(!1)}return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),o.useEffect(()=>{k(!1);const D=window.setInterval(()=>{k(!1)},6e4);return()=>window.clearInterval(D)},[k]);function R(){bi(),c.replace("/login")}const U=($==null?void 0:$.license_expires_at)??($==null?void 0:$.expires_at),H=Nr(b,U),j=typeof($==null?void 0:$.days_until_expiry)=="number"?$.days_until_expiry:kr(U),E=typeof j=="number"?j<=0?f("license.expiresToday"):f("license.daysLeft",{days:j}):null,F=!!$&&$.available&&!$.requires_renewal,Z=!!$&&(!!$.service_unavailable||!!$.stale),l=["license_server_unreachable","license_server_timeout"].includes(($==null?void 0:$.error_code)??""),_=F&&!Z&&!!($!=null&&$.renewal_warning);return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),r&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>a(!1)}),e.jsxs("aside",{className:`sidebar ${r?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:f("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:jr.map(D=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:f(D.label)}),D.items.map(S=>{const q=S.icon,y=d===S.href;return e.jsxs(yr,{className:`nav-item ${y?"active":""}`,href:S.href,onClick:()=>a(!1),children:[e.jsx(q,{size:17}),e.jsx("span",{children:f(S.label)})]},S.href)})]},D.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":f(r?"common.closeMenu":"common.openMenu"),onClick:()=>a(D=>!D),children:r?e.jsx(ke,{size:19}):e.jsx(ba,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[F?e.jsxs("button",{className:`license-chip ${_?"warning":""}`,type:"button",disabled:I,title:f("license.refresh"),onClick:()=>void k(!0),children:[e.jsx(xs,{size:16}),e.jsxs("span",{className:"license-chip-copy",children:[e.jsx("span",{children:f("license.validUntil")}),e.jsx("strong",{children:H??f("license.unknownExpiry")})]}),E?e.jsx("small",{children:E}):null]}):null,e.jsxs("div",{className:"locale-dropdown",ref:G,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":f("common.language"),onClick:()=>M(D=>!D),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ns.map(D=>e.jsxs("button",{className:`locale-option ${b===D.code?"active":""}`,type:"button",onClick:()=>{C(D.code),M(!1)},children:[e.jsx("span",{className:"locale-flag",children:D.flag}),e.jsx("span",{children:D.label})]},D.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":h==="dark"?"Switch to light mode":"Switch to dark mode",onClick:w,children:h==="dark"?e.jsx(Ta,{size:17}):e.jsx(ga,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:R,children:[e.jsx(xa,{size:16}),e.jsx("span",{children:f("common.logout")})]})]})]}),e.jsxs("main",{className:"content",children:[Z?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(gn,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:f(l?"license.serverUnavailableTitle":"license.coreUnavailableTitle")}),e.jsx("p",{children:f($!=null&&$.stale?"license.staleBody":"license.serviceUnavailableBody")}),e.jsxs("small",{children:[f("license.currentStatus"),": ",$==null?void 0:$.status,$!=null&&$.error_code?` - ${$.error_code}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void k(!0),children:[e.jsx(Ae,{size:16}),f(I?"license.refreshing":"license.refresh")]})]}):null,$!=null&&$.requires_renewal?e.jsxs("section",{className:"license-banner",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(gn,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:f("license.renewTitle")}),e.jsx("p",{children:f("license.renewBody")}),e.jsxs("small",{children:[f("license.currentStatus"),": ",$.status,$.error_code?` - ${$.error_code}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void k(!0),children:[e.jsx(Ae,{size:16}),f(I?"license.refreshing":"license.refresh")]})]}):null,_?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(xs,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:f("license.expiryWarningTitle")}),e.jsx("p",{children:f("license.expiryWarningBody",{date:H??f("license.unknownExpiry"),days:j??""})}),e.jsxs("small",{children:[f("license.currentStatus"),": ",$.status]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void k(!0),children:[e.jsx(Ae,{size:16}),f(I?"license.refreshing":"license.refresh")]})]}):null,n]})]})]})}function on(){return{data:null,loading:!0,error:""}}function _r(n,t){const s=new Date;if(n==="today"){const a=s.getHours();return{range:n,points:Array.from({length:24},(c,d)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),d).getTime()/1e3),label:`${String(d).padStart(2,"0")}:00`,online_user:d===a?t:0,sample_count:d===a?1:0}))}}const r=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(a,c)=>{const d=new Date(r);return d.setDate(r.getDate()-(30-c)),{time:Math.floor(d.getTime()/1e3),label:`${String(d.getMonth()+1).padStart(2,"0")}-${String(d.getDate()).padStart(2,"0")}`,online_user:c===30?t:0,online_user_avg:c===30?t:0,sample_count:c===30?1:0}})}}function Sr(){var F,Z,l,_,D,S,q,y,O,L,se,g,ee;const n=He(),{t}=ue(),[s,r]=o.useState(null),[a,c]=o.useState(""),[d,f]=o.useState(!0),[b,C]=o.useState("today"),[h,w]=o.useState("today"),[u,M]=o.useState("today"),[G,$]=o.useState("today"),[z,I]=o.useState(on),[P,k]=o.useState(on),[R,U]=o.useState(on),[H,j]=o.useState(on),E=o.useCallback(async()=>{f(!0),c("");try{r(await Ba())}catch(B){c(B instanceof Error?B.message:t("dashboard.loadFailed"))}finally{f(!1)}},[t]);return o.useEffect(()=>{if(!Re()){n.replace("/login");return}E()},[E,n]),o.useEffect(()=>{let B=!0;return I(Q=>({...Q,loading:!0,error:""})),Ga(b).then(Q=>{B&&I({data:Q,loading:!1,error:""})}).catch(Q=>{B&&I({data:null,loading:!1,error:Q instanceof Error?Q.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[b,t]),o.useEffect(()=>{let B=!0;return k(Q=>({...Q,loading:!0,error:""})),Wa(h).then(Q=>{B&&k({data:Q,loading:!1,error:""})}).catch(Q=>{B&&k({data:null,loading:!1,error:Q instanceof Error?Q.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[h,t]),o.useEffect(()=>{let B=!0;return U(Q=>({...Q,loading:!0,error:""})),Ka(u).then(Q=>{B&&U({data:Q,loading:!1,error:""})}).catch(()=>{var Q;B&&U({data:_r(u,((Q=s==null?void 0:s.override)==null?void 0:Q.online_user)??0),loading:!1,error:""})}),()=>{B=!1}},[u,(F=s==null?void 0:s.override)==null?void 0:F.online_user]),o.useEffect(()=>{let B=!0;return j(Q=>({...Q,loading:!0,error:""})),Ya(G).then(Q=>{B&&j({data:Q,loading:!1,error:""})}).catch(Q=>{B&&j({data:null,loading:!1,error:Q instanceof Error?Q.message:t("dashboard.chartLoadFailed")})}),()=>{B=!1}},[G,t]),e.jsxs(Ge,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[a?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:a}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:E,children:[e.jsx(Ae,{size:16}),t("common.retry")]})]}):null,d&&!s?e.jsx(Te,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((Z=s.override)==null?void 0:Z.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(l=s.override)==null?void 0:l.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:d,children:[e.jsx(Ae,{size:16}),t(d?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(an,{label:t("dashboard.onlineUsers"),value:it(((_=s.override)==null?void 0:_.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.todayIncome"),value:`${Je(((D=s.override)==null?void 0:D.day_paid_income)??((S=s.override)==null?void 0:S.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(an,{label:t("dashboard.todayRegistrations"),value:it(((q=s.override)==null?void 0:q.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.pendingCommission"),value:it(((y=s.override)==null?void 0:y.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(Mn,{label:t("dashboard.monthIncome"),current:`${Je(((O=s.override)==null?void 0:O.month_income)??0)} VND`,previous:`${Je(((L=s.override)==null?void 0:L.last_month_income)??0)} VND`}),e.jsx(Mn,{label:t("dashboard.monthCommission"),current:`${Je(((se=s.override)==null?void 0:se.commission_month_payout)??0)} VND`,previous:`${Je(((g=s.override)==null?void 0:g.commission_last_month_payout)??0)} VND`}),e.jsx(Mn,{label:t("dashboard.monthRegistrations"),current:((ee=s.override)==null?void 0:ee.month_register_total)??0,previous:"-"})]}),e.jsx(hr,{records:s.order,override:s.override}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(br,{data:R.data,range:u,onRangeChange:M,loading:R.loading,error:R.error}),e.jsx(gr,{data:H.data,range:G,onRangeChange:$,loading:H.loading,error:H.error}),e.jsx(Cs,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:z.data,range:b,onRangeChange:C,loading:z.loading,error:z.error,mode:"users"}),e.jsx(Cs,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:P.data,range:h,onRangeChange:w,loading:P.loading,error:P.error,mode:"servers"})]})]}):null]})}const Cr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function zs(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function zr(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function Ln(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function Tr(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Pr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function $r(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Ye(n){return n===!0||n===1||n==="1"}function Er(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function In(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Mr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function Lr({field:n,value:t,onChange:s}){const{t:r}=ue(),a=n.toInput?n.toInput(t):Er(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Ye(t)?"on":""}`,type:"button",onClick:()=>s(Ye(t)?0:1),"aria-pressed":Ye(t),children:[e.jsx("span",{}),Ye(t)?zs(r)[0].label:zs(r)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:a,onChange:c=>s(c.target.value),children:(n.options??[]).map(c=>e.jsx("option",{value:c.value,children:c.label},String(c.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:c=>s(n.fromInput?n.fromInput(c.target.value):c.target.value),placeholder:n.placeholder,rows:4,value:a}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:c=>s(n.fromInput?n.fromInput(c.target.value):c.target.value),placeholder:n.placeholder,type:n.type,value:a}):null]})]})}function Ir({plans:n,emailTemplates:t,t:s}){const r=[{label:s("config.option.disabled"),value:0},...n.map(a=>({label:a.name,value:a.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"billing_info_enable",label:s("config.site.billingInfoEnable"),description:s("config.site.billingInfoEnableHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:r},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:a=>Number(a.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:a=>Ye(a.email_whitelist_enable),fromInput:In},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Pr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:a=>String(a.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:zr(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:Ln(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:Ln(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:Ln(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:Tr(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:a=>Number(a.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:a=>Ye(a.subscribe_url_ua_enable),fromInput:Mr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:In}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:$r(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:In},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:a=>Ye(a.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:a=>Ye(a.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(a=>({label:a,value:a}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Dr(){const n=He(),{t}=ue(),[s,r]=o.useState("site"),[a,c]=o.useState(null),[d,f]=o.useState([]),[b,C]=o.useState([]),[h,w]=o.useState(!0),[u,M]=o.useState(null),[G,$]=o.useState(""),z=o.useCallback(async()=>{w(!0),$("");try{const[E,F,Z]=await Promise.all([gi(),Za(),Ja()]);c(E),f(F),C(Z)}catch(E){$(E instanceof Error?E.message:t("config.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}z()},[z,n]),o.useEffect(()=>{const E=document.querySelector(".config-tabs button.active");E&&E.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const I=o.useMemo(()=>Ir({plans:d,emailTemplates:b,t}),[d,b,t]),P=I.find(E=>E.key===s)??I[0],k=(a==null?void 0:a[P.key])??{};function R(E,F,Z){c(l=>l&&{...l,[E]:{...l[E],[F]:Z}})}async function U(){var Z,l,_;if(!a)return;const E=P.key==="safe"?String(((Z=window.settings)==null?void 0:Z.secure_path)??"").trim():"",F=P.key==="safe"?String(((l=a.safe)==null?void 0:l.secure_path)??"").trim():"";M(P.key),$("");try{await fi(a[P.key]),(_=window.showToast)==null||_.call(window,t("config.saveSuccess"),"success"),P.key==="safe"&&F&&F!==E&&(window.settings={...window.settings??{},secure_path:F},window.location.replace(`${window.location.origin}/${F}`))}catch(D){$(D instanceof Error?D.message:t("config.saveFailed"))}finally{M(null)}}async function H(){var E;M("mail"),$("");try{await Qa(),(E=window.showToast)==null||E.call(window,t("config.email.testSuccess"),"success")}catch(F){$(F instanceof Error?F.message:t("config.email.testFailed"))}finally{M(null)}}async function j(){var F;const E=String((a==null?void 0:a.telegram.telegram_bot_token)??"");M("webhook"),$("");try{await Xa(E),(F=window.showToast)==null||F.call(window,t("config.telegram.webhookSuccess"),"success")}catch(Z){$(Z instanceof Error?Z.message:t("config.telegram.webhookFailed"))}finally{M(null)}}return e.jsxs(Ge,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:h,children:[e.jsx(Ae,{size:16}),t(h?"common.refreshing":"common.refresh")]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,h&&!a?e.jsx(Te,{label:t("config.loading")}):null,a?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:Cr.map(E=>{const F=I.find(Z=>Z.key===E);return F?e.jsxs("button",{className:s===E?"active":"",type:"button",onClick:()=>r(E),children:[e.jsx("span",{children:F.label}),e.jsx("small",{children:F.hint})]},E):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:P.label}),e.jsx("p",{children:P.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:u===P.key,type:"button",onClick:U,children:[e.jsx(ot,{size:16}),u===P.key?t("config.saving"):t("config.saveTab")]})]}),P.warning?e.jsx("div",{className:"config-warning",children:P.warning}):null,e.jsx("div",{className:"config-fields",children:P.fields.map(E=>E.visible&&!E.visible(k)?null:e.jsx(Lr,{field:E,value:k[E.key],onChange:F=>R(P.key,E.key,F)},E.key))}),P.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="mail",onClick:H,children:[e.jsx(ui,{size:16}),t(u==="mail"?"config.email.testing":"config.email.test")]})}):null,P.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="webhook",onClick:j,children:[e.jsx($a,{size:16}),t(u==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(mi,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Pt(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function Dn(n){return n===!0||n===1||n==="1"}function Fr(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Ar(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Or(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState([]),[d,f]=o.useState(null),[b,C]=o.useState({}),[h,w]=o.useState(!0),[u,M]=o.useState(!1),[G,$]=o.useState(!1),[z,I]=o.useState(""),[P,k]=o.useState(""),[R,U]=o.useState({}),H=o.useCallback(async()=>{w(!0),I("");try{const[S,q]=await Promise.all([Va(),eo()]);r(S),c(q),U({})}catch(S){I(S instanceof Error?S.message:t("payment.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}H()},[H,n]);async function j(S){const q=(S==null?void 0:S.payment)??a[0]??"",y=Fr(S,q);if(f(y),C({}),I(""),k(""),!!q){M(!0);try{C(await vs(q,S==null?void 0:S.id))}catch(O){I(O instanceof Error?O.message:t("payment.formLoadFailed"))}finally{M(!1)}}}async function E(S){if(d){f({...d,payment:S,config:{}}),M(!0),I("");try{C(await vs(S,d.id))}catch(q){I(q instanceof Error?q.message:t("payment.formLoadFailed"))}finally{M(!1)}}}async function F(S){var q,y;if(S.preventDefault(),!!d){$(!0),I(""),k("");try{await to(Ar(d)),f(null),(q=window.showToast)==null||q.call(window,t("payment.saveSuccess"),"success"),await H()}catch(O){(y=window.showToast)==null||y.call(window,O instanceof Error?O.message:t("payment.saveFailed"),"error")}finally{$(!1)}}}async function Z(S){var q;I(""),k("");try{await no(S),await H()}catch(y){(q=window.showToast)==null||q.call(window,y instanceof Error?y.message:t("payment.toggleFailed"),"error")}}async function l(S){var q;(q=window.showConfirm)==null||q.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var y,O;I(""),k("");try{await so(S),(y=window.showToast)==null||y.call(window,t("payment.deleteSuccess"),"success"),await H()}catch(L){(O=window.showToast)==null||O.call(window,L instanceof Error?L.message:t("payment.deleteFailed"),"error")}}})}async function _(S,q){var se;const y=S+q;if(y<0||y>=s.length)return;const O=[...s],L=O[S];O.splice(S,1),O.splice(y,0,L),r(O);try{await io(O.map(g=>g.id)),await H()}catch(g){(se=window.showToast)==null||se.call(window,g instanceof Error?g.message:t("payment.sortFailed"),"error"),await H()}}async function D(S){var y;const q=await Pt(S);(y=window.showToast)==null||y.call(window,t(q?"payment.copied":"common.copyFailed"),q?"success":"error")}return e.jsxs(Ge,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:h,children:[e.jsx(Ae,{size:16}),e.jsx("span",{children:t(h?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void j(),children:[e.jsx(at,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),z?e.jsx("div",{className:"form-error",children:z}):null,P?e.jsx("div",{className:"form-success",children:P}):null,h&&s.length===0?e.jsx(Te,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((S,q)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:S.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void _(q,-1),disabled:q===0,"aria-label":t("payment.moveUp"),children:e.jsx(hs,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void _(q,1),disabled:q===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(ms,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Dn(S.enable)?"active":""}`,type:"button",onClick:()=>void Z(S.id),"aria-label":Dn(S.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:S.name}),S.icon?e.jsx("small",{children:S.icon}):null]}),e.jsx("td",{children:S.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void D(S.notify_url),children:[e.jsx("span",{children:S.notify_url}),e.jsx(Vt,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void j(S),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void l(S.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},S.id)),!h&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((S,q)=>{const y=Dn(S.enable),O=S.handling_fee_percent!==null&&S.handling_fee_percent!==""?`${S.handling_fee_percent}%`:"",L=S.handling_fee_fixed!==null?`${Je(S.handling_fee_fixed)} VND`:"",se=[O,L].filter(Boolean).join(" + ")||"No fees",g=R[S.id],ee=S.icon&&!g;return e.jsxs("div",{className:`payment-mobile-card ${y?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",S.id]}),e.jsx("span",{className:"gateway-tag",children:S.payment})]}),e.jsx("button",{className:`admin-switch ${y?"active":""}`,type:"button",onClick:()=>void Z(S.id),"aria-label":t(y?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[ee?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:S.icon,alt:S.name,onError:()=>{U(B=>({...B,[S.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:S.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:S.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:se})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void D(S.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:S.notify_url}),e.jsx(Vt,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void _(q,-1),disabled:q===0,"aria-label":t("payment.moveUp"),children:e.jsx(hs,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void _(q,1),disabled:q===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(ms,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void j(S),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void l(S.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},S.id)}),!h&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),d?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:F,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:d.name,onChange:S=>f({...d,name:S.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:d.icon,onChange:S=>f({...d,icon:S.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:d.notify_domain,onChange:S=>f({...d,notify_domain:S.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:d.handling_fee_percent,onChange:S=>f({...d,handling_fee_percent:S.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:d.handling_fee_fixed,onChange:S=>f({...d,handling_fee_fixed:S.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:d.payment,onChange:S=>void E(S.target.value),children:a.map(S=>e.jsx("option",{value:S,children:S},S))})]}),u?e.jsx(Te,{label:t("payment.formLoading")}):null,u?null:Object.entries(b).map(([S,q])=>e.jsxs("label",{children:[e.jsx("span",{children:q.label}),e.jsx("input",{className:"config-input",placeholder:q.description,value:String(d.config[S]??q.value??""),onChange:y=>f({...d,config:{...d.config,[S]:y.target.value}})})]},S)),d.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(ot,{size:16}),t(G?"payment.saving":"common.save")]})]})]})]})}):null]})}function Rr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Hr(n,t){return t[n.field_name]??n.default_value??""}function Ur(){const n=He(),{t}=ue(),[s,r]=o.useState(null),[a,c]=o.useState(null),[d,f]=o.useState(!0),[b,C]=o.useState(!1),[h,w]=o.useState(!1),[u,M]=o.useState(null),[G,$]=o.useState(""),[z,I]=o.useState(""),P=o.useCallback(async()=>{f(!0),$("");try{r(await ao())}catch(j){$(j instanceof Error?j.message:t("theme.loadFailed"))}finally{f(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}P()},[P,n]);async function k(j,E){c(null),C(!0),$(""),I("");try{const F=await oo(j);c({key:j,theme:E,values:F})}catch(F){$(F instanceof Error?F.message:t("theme.configLoadFailed"))}finally{C(!1)}}async function R(j){M(j),$(""),I("");try{await fi({frontend_theme:j}),I(t("theme.activateSuccess")),await P()}catch(E){$(E instanceof Error?E.message:t("theme.activateFailed"))}finally{M(null)}}async function U(j){if(j.preventDefault(),!!a){w(!0),$(""),I("");try{await ro(a.key,a.values),c(null),I(t("theme.saveSuccess")),await P()}catch(E){$(E instanceof Error?E.message:t("theme.saveFailed"))}finally{w(!1)}}}function H(j,E){c(F=>F&&{...F,values:{...F.values,[j]:E}})}return e.jsxs(Ge,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:d,children:[e.jsx(Ae,{size:16}),t(d?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),G?e.jsx("div",{className:"form-error",children:G}):null,z?e.jsx("div",{className:"form-success",children:z}):null,d&&!s?e.jsx(Te,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([j,E])=>{const F=s.active===j;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Rr(E)})`},children:F?e.jsxs("span",{className:"theme-active",children:[e.jsx(pi,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:E.name||j}),e.jsx("p",{children:E.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",E.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void k(j,E),children:[e.jsx(wa,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:F||u===j,type:"button",onClick:()=>void R(j),children:[e.jsx(fa,{size:15}),t(F?"theme.current":u===j?"theme.activating":"theme.activate")]})]})]},j)})}):null,b?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx(Te,{label:t("theme.configLoading")})})}):null,a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:a.theme.name||a.key})}),e.jsx("p",{children:a.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:U,children:[(a.theme.configs??[]).map(j=>{const E=Hr(j,a.values);return e.jsxs("label",{children:[e.jsx("span",{children:j.label}),j.description?e.jsx("p",{className:"field-description",children:j.description}):null,j.field_type==="select"?e.jsx("select",{className:"config-input",value:E,onChange:F=>H(j.field_name,F.target.value),children:Object.entries(j.select_options??{}).map(([F,Z])=>e.jsx("option",{value:F,children:Z},F))}):null,j.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:j.placeholder,rows:5,value:E,onChange:F=>H(j.field_name,F.target.value)}):null,j.field_type!=="select"&&j.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:j.placeholder,value:E,onChange:F=>H(j.field_name,F.target.value)}):null]},j.field_name)}),(a.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"theme.saving":"common.save")]})]})]})]})}):null]})}const Vn=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],qr=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Br=["tcp","ws","grpc","http","httpupgrade","xhttp"],zi=["tcp","ws","grpc"],Ti=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Gr=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],vn=["anytls","hysteria2","trojan","tuic"],Wr=["tcp","ws","grpc","httpupgrade","xhttp"],Kr=["chrome","firefox","safari","ios","android","edge","360","qq"],Yr=["vmess","vless","trojan","hysteria","tuic","anytls"],Jr=["trojan","hysteria","tuic","anytls"],Pi=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],jn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},wn=[10,20,50,100],$i="admin_server_manage_page_size";function Ei(n){return wn.includes(n)}function Zr(){if(typeof window>"u")return wn[0];try{const n=Number(window.localStorage.getItem($i));if(Ei(n))return n}catch{}return wn[0]}const ls=typeof window<"u"?window.location.origin:"",Qr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Xr(n,t,s=""){return n[t]??s}function ye(n,t,s=""){return String(Xr(n,t,s))}function Vr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function $t(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function es(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function el(n){return n==="vmess"?"networkSettings":"network_settings"}function tl(n,t){const s=n==="vmess",r=n==="vless"||mt(n),a={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return r?{acceptProxyProtocol:!1,...a}:a;case"ws":return r?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function mt(n){return n==="v2node"||n==="zicnode"}function nl(n){return Jr.includes(n)}function sl(n){return mt(n)||Yr.includes(n)}function Ts(n){return n==="vmess"?"tlsSettings":"tls_settings"}function il(n){const t=String((n==null?void 0:n._type)??"");return nl(t)?1:Number((n==null?void 0:n.tls)??0)}function Nn(n){return!!n&&n!=="shadowsocks"}function al(n){return n==="vless"||n==="vmess"}function kn(n){return n==="vless"||n==="anytls"}function ol(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function Ps(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?zi:n==="vless"||n==="vmess"?Wr:[]}function rl(n){var t;return mt(n)?"ZicNode":((t=Vn.find(s=>s.value===n))==null?void 0:t.label)??n}function Fe(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function cs(n){return n===!0||n===1||n==="1"||n==="true"}function $s(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function Mi(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function _n(n){if(Array.isArray(n))return n.map(t=>String(t).trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();if(!t)return[];try{const s=JSON.parse(t);if(Array.isArray(s))return s.map(r=>String(r).trim()).filter(Boolean)}catch{}return t.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean)}return[]}function Li(n){const t=new Set,s=[];return _n(n).forEach(r=>{const a=r.toLowerCase();t.has(a)||(t.add(a),s.push(r))}),s}function ll(n){return Mi(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function Sn(n){const t={...jn,...$t(n)};if(!cs(t.enable))return{enable:!1};const r={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:Pi.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(d=>{const f=Fe(t[d]);f&&(r[d]=f)});const a=Mi(t.addresses);a.length&&(r.addresses=a);const c=ll(t.reserved);return c.length&&(r.reserved=c),r}const cl=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],dl=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function gt(n,t){const s=$t(n);if(t===0)return{};const r={...s};return t===1?cl.forEach(a=>delete r[a]):t===2&&dl.forEach(a=>delete r[a]),Object.keys(r).forEach(a=>{const c=r[a];(c===""||c===null||c===void 0)&&delete r[a]}),r}function pl(n){const t=$t(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),r=!!(Fe(t.public_key_sha256)||Fe(t.sha256_hex)||Fe(t.sha256));return s==="error"?{state:"error",hasPin:r,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:r?{state:"ready",hasPin:r,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:r,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function Es(n,t=ls){return Fe(n).replace(/\/+$/,"")||t}function Ms(n){return`'${n.replace(/'/g,"'\\''")}'`}function ul(n,t){const s=t.apiHost||ls,r=t.apiKey||"TOKEN_MOI";return`wget -N ${Qr} && \\
bash install.sh --api-host ${Ms(s)} --node-id ${n} --api-key ${Ms(r)}`}function Ls(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function Is(n,t){if(t){const r=JSON.parse(JSON.stringify(t));if(r.group_id=Ls(r.group_id),r.route_id=Ls(r.route_id),r.load_ips=Li(r.load_ips),mt(n)){r.warp_settings={...jn,...$t(r.warp_settings)};const a=String(r.protocol??""),c=Number(r.tls??0);c===2&&!kn(a)?r.tls=Nn(a)?1:0:vn.includes(a)&&c!==2&&(r.tls=1)}return{_type:n,...r}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],load_ips:[],rate:"1",show:0,check:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...jn}};default:return s}}function Ii({initialValue:n,placeholder:t,onCancel:s,onSave:r}){const{t:a}=ue(),[c,d]=o.useState(()=>es(n)?JSON.stringify(n,null,2):""),[f,b]=o.useState(""),C=w=>{if(w.preventDefault(),!c.trim()){r({});return}try{const u=JSON.parse(c);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");r(u)}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}},h=w=>{if(d(w),!w.trim()){b("");return}try{const u=JSON.parse(w);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:C,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:a("node.jsonContent")}),f&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",f]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:f?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:c,onChange:w=>h(w.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:a("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!f,children:a("common.confirm")})]})]})}function oe({label:n,required:t,actionText:s,onAction:r}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&r&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:a=>{a.preventDefault(),r()},children:s})]})}function Ds({value:n,onChange:t,label:s,placeholder:r}){const{t:a}=ue(),[c,d]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(oe,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((f,b)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((C,h)=>h!==b)),style:{cursor:"pointer"},children:[f," ×"]},b)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:c,placeholder:r??a("node.tagPlaceholder"),onChange:f=>d(f.target.value),onKeyDown:f=>{f.key==="Enter"&&c.trim()&&(f.preventDefault(),t([...n,c.trim()]),d(""))}})]})]})}function Fs({options:n,value:t,onChange:s,label:r,actionText:a,onAction:c}){const{t:d}=ue(),[f,b]=o.useState(""),C=n.filter(w=>t.includes(w.id)),h=n.filter(w=>w.name.toLowerCase().includes(f.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(oe,{label:r,actionText:a,onAction:c}),C.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:C.map(w=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(u=>u!==w.id)),children:[w.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},w.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${d("common.search")}...`,value:f,onChange:w=>b(w.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[h.map(w=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(w.id),onChange:u=>s(u.target.checked?[...t,w.id]:t.filter(M=>M!==w.id))}),e.jsx("span",{children:w.name})]},w.id)),h.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?d("node.noGroupsAvailable"):d("node.noResultsFound")})]})]})}function ht({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:r=>s(r.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function ml({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:r,onCancel:a,onSave:c}){const{t:d}=ue(),f=t?"server_name":"serverName",b=t?"allow_insecure":"allowInsecure",C=mt(r),h=sl(r),w=s===1&&h,[u,M]=o.useState(String((n==null?void 0:n[f])??"")),[G,$]=o.useState(String((n==null?void 0:n.dest)??"")),[z,I]=o.useState(String((n==null?void 0:n.server_port)??"443")),[P,k]=o.useState(String((n==null?void 0:n.xver)??"0")),[R,U]=o.useState(String((n==null?void 0:n.private_key)??"")),[H,j]=o.useState(String((n==null?void 0:n.public_key)??"")),[E,F]=o.useState(String((n==null?void 0:n.short_id)??"")),[Z,l]=o.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[_,D]=o.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[S,q]=o.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),y=String((n==null?void 0:n.cert_mode)??"").trim(),[O,L]=o.useState(y||"auto"),[se,g]=o.useState(String((n==null?void 0:n.provider)??"")),[ee,B]=o.useState(String((n==null?void 0:n.dns_env)??"")),[Q,de]=o.useState(String((n==null?void 0:n.cert_file)??"")),[$e,Ee]=o.useState(String((n==null?void 0:n.key_file)??"")),[Le,_e]=o.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[Ne,ge]=o.useState(String((n==null?void 0:n.ech)??"")),[Se,ve]=o.useState(String((n==null?void 0:n.ech_server_name)??"")),[We,v]=o.useState(String((n==null?void 0:n.ech_key)??"")),[ie,W]=o.useState(String((n==null?void 0:n.ech_config)??"")),[xe,Ce]=o.useState(()=>{const ae=n==null?void 0:n[b];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),me=$t(n==null?void 0:n.auto_cert),De=pl(n==null?void 0:n.auto_cert),Ue=ae=>{if(ae.preventDefault(),C&&s===0){c({});return}const xt=C?gt(n,s):$t(n),pe=C?{...xt,[f]:u,fingerprint:Z}:{...n??{},[f]:u,fingerprint:Z},tt=_.trim(),nt=S.trim();if(tt?pe.pinnedPeerCertSha256=tt:delete pe.pinnedPeerCertSha256,delete pe.pinned_peer_cert_sha256,nt?pe.verifyPeerCertByName=nt:delete pe.verifyPeerCertByName,delete pe.verify_peer_cert_by_name,C&&s!==1?(delete pe.allow_insecure,delete pe.allowInsecure):pe[b]=t?xe?1:0:xe,s===2&&(pe.dest=G,pe.server_port=z,pe.xver=Number(P)||0,pe.private_key=R,pe.public_key=H,pe.short_id=E,pe.ech=Ne,pe.ech_server_name=Se,pe.ech_key=We,pe.ech_config=ie),w){pe.cert_mode=O;const st=n==null?void 0:n.auto_cert;st&&typeof st=="object"&&(pe.auto_cert=st),O==="none"?(delete pe.provider,delete pe.dns_env,delete pe.cert_file,delete pe.key_file):(se.trim()?pe.provider=se:delete pe.provider,ee.trim()?pe.dns_env=ee:delete pe.dns_env,Q.trim()?pe.cert_file=Q:delete pe.cert_file,$e.trim()?pe.key_file=$e:delete pe.key_file),pe.reject_unknown_sni=Le?"1":"0"}c(C?gt(pe,s):pe)};return e.jsxs("form",{onSubmit:Ue,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:d("node.sni")}),e.jsx("input",{className:"config-input",value:u,onChange:ae=>M(ae.target.value),placeholder:d(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.dest")}),e.jsx("input",{className:"config-input",value:G,onChange:ae=>$(ae.target.value),placeholder:d("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.servicePort")}),e.jsx("input",{className:"config-input",value:z,onChange:ae=>I(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:P,onChange:ae=>k(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.privateKey")}),e.jsx("input",{className:"config-input",value:R,onChange:ae=>U(ae.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.publicKey")}),e.jsx("input",{className:"config-input",value:H,onChange:ae=>j(ae.target.value),placeholder:d("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.shortId")}),e.jsx("input",{className:"config-input",value:E,onChange:ae=>F(ae.target.value),placeholder:d("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.fingerprint")}),e.jsx("select",{className:"config-input",value:Z,onChange:ae=>l(ae.target.value),children:Kr.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:_,onChange:ae=>D(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:S,onChange:ae=>q(ae.target.value),placeholder:"example.com"})]})]}),w?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.certMode")}),e.jsxs("select",{className:"config-input",value:O,onChange:ae=>L(ae.target.value),children:[e.jsx("option",{value:"auto",children:d("node.certModeAuto")}),e.jsx("option",{value:"self",children:d("node.certModeSelf")}),e.jsx("option",{value:"http",children:d("node.certModeHttp")}),e.jsx("option",{value:"dns",children:d("node.certModeDns")}),e.jsx("option",{value:"file",children:d("node.certModeFile")}),e.jsx("option",{value:"none",children:d("node.certModeNone")})]})]}),O!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${De.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:d(De.labelKey)}),Fe(me.updated_at)?e.jsx("span",{className:"mono",children:Fe(me.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:d(De.detailKey)}),Fe(me.target)||Fe(me.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[Fe(me.target)?`${d("node.autoCertTarget")}: ${Fe(me.target)}`:"",Fe(me.target)&&Fe(me.source)?" · ":"",Fe(me.source)?`${d("node.autoCertSource")}: ${Fe(me.source)}`:""]}):null,Fe(me.public_key_sha256)||Fe(me.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:Fe(me.public_key_sha256)?`${d("node.autoCertPublicKeySha")}: ${Fe(me.public_key_sha256)}`:`${d("node.autoCertSha")}: ${Fe(me.sha256_hex)}`}):null,Fe(me.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:Fe(me.error)}):null]}):null,O==="dns"||O==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>g(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:ee,onChange:ae=>B(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,O!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.certFile")}),e.jsx("input",{className:"config-input",value:Q,onChange:ae=>de(ae.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.keyFile")}),e.jsx("input",{className:"config-input",value:$e,onChange:ae=>Ee(ae.target.value),placeholder:d("node.autoGenHelp")})]})]}):null,e.jsx(ht,{label:d("node.rejectUnknownSni"),checked:Le,onChange:_e})]}):null,!C||C&&s===1?e.jsx(ht,{label:d("node.allowInsecure"),checked:xe,onChange:Ce}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.ech")}),e.jsxs("select",{className:"config-input",value:Ne,onChange:ae=>ge(ae.target.value),children:[e.jsx("option",{value:"",children:d("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:d("node.echCustom")})]})]}),Ne==="cloudflare"?e.jsx("div",{className:"config-warning",children:d("node.echCloudflareHelp")}):null,Ne==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.echServerName")}),e.jsx("input",{className:"config-input",value:Se,onChange:ae=>ve(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.echKey")}),e.jsx("input",{className:"config-input",value:We,onChange:ae=>v(ae.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.echConfig")}),e.jsx("input",{className:"config-input",value:ie,onChange:ae=>W(ae.target.value),placeholder:d("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:a,children:d("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:d("common.confirm")})]})]})}function hl({draft:n,set:t,groups:s,routes:r,nodes:a,onOpenJson:c,onAddGroup:d,onOpenTransportConfig:f}){const{t:b}=ue(),C=String(n._type),h=mt(C),w=ye(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"name"),onChange:u=>t("name",u.target.value),placeholder:b("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:ye(n,"rate","1"),onChange:u=>t("rate",u.target.value)})]})]}),e.jsx(Ds,{value:n.tags??[],onChange:u=>t("tags",u),label:b("node.tags")}),e.jsx(Ds,{value:_n(n.load_ips),onChange:u=>t("load_ips",u),label:b("node.loadIps"),placeholder:b("node.loadIpsPlaceholder")}),e.jsx(Fs,{options:s.map(u=>({id:u.id,name:u.name})),value:n.group_id??[],onChange:u=>t("group_id",u),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:d}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"host"),onChange:u=>t("host",u.target.value),placeholder:b("node.addressPlaceholder")})]}),h?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.listenIp")}),e.jsx("input",{className:"config-input",value:ye(n,"listen_ip"),onChange:u=>t("listen_ip",u.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(C)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const u=Ts(C);c(b("node.connectionSecurityConfig"),u)}}),e.jsxs("select",{className:"config-input",value:ye(n,"tls","0"),onChange:u=>{const M=Number(u.target.value);t("tls",M);const G=Ts(C);M!==0&&!n[G]&&t(G,{})},children:[e.jsx("option",{value:"0",children:b("node.none")}),e.jsx("option",{value:"1",children:b("node.useTls")}),C!=="vmess"&&e.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(C)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>c(b("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:ye(n,"server_name"),onChange:u=>t("server_name",u.target.value),placeholder:b("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"port"),onChange:u=>t("port",u.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ye(n,"server_port"),onChange:u=>t("server_port",u.target.value),placeholder:"443"})]})]}),h?e.jsx(wl,{draft:n,set:t,onOpenJson:c,onOpenTransportConfig:f,onOpenSecurityConfig:()=>c(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(C)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:f}),e.jsxs("select",{className:"config-input",value:w,onChange:u=>{t("network",u.target.value);const M=C==="vmess"?"networkSettings":"network_settings";n[M]||t(M,{})},children:[C==="vmess"&&qr.map(u=>e.jsx("option",{value:u,children:u},u)),C==="trojan"&&zi.map(u=>e.jsx("option",{value:u,children:u},u)),C==="vless"&&Br.map(u=>e.jsx("option",{value:u,children:u},u))]})]}):null,C==="trojan"&&e.jsx(bl,{draft:n,set:t}),C==="shadowsocks"&&e.jsx(gl,{draft:n,set:t,onOpenJson:c}),C==="hysteria"&&e.jsx(fl,{draft:n,set:t}),C==="tuic"&&e.jsx(yl,{draft:n,set:t}),C==="vless"&&e.jsx(vl,{draft:n,set:t,onOpenJson:c}),C==="anytls"&&e.jsx(jl,{draft:n,set:t,onOpenJson:c}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:u=>t("parent_id",u.target.value?Number(u.target.value):null),children:[e.jsx("option",{value:"",children:b("node.none")}),a.filter(u=>u.id!==n.id&&!u.parent_id).map(u=>e.jsx("option",{value:u.id,children:u.name},u.id))]})]}),e.jsx(Fs,{options:r.map(u=>({id:u.id,name:u.remarks})),value:n.route_id??[],onChange:u=>t("route_id",u),label:b("node.routingGroups")})]})]})}function xl({draft:n,set:t,onCancel:s,onSave:r}){const a=String(n._type),c=String(n.network??"tcp"),d=el(a),f=n[d],b=es(f)?$t(f):{},C=tl(a,c),h=es(C)?JSON.stringify(C,null,2):void 0;return e.jsx(Ii,{initialValue:b,placeholder:h,onCancel:s,onSave:w=>{t(d,w),r()}})}function bl({draft:n,set:t}){const{t:s}=ue();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:r=>t("allow_insecure",r?1:0)})]})}function gl({draft:n,set:t,onOpenJson:s}){const{t:r}=ue(),a=Vr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:c=>t("cipher",c.target.value),children:Ti.map(c=>e.jsx("option",{value:c,children:c},c))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:r("node.obfs"),actionText:n.obfs==="http"?r("node.editConfig"):void 0,onAction:()=>s(r("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:c=>t("obfs",c.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(a.host??""),onChange:c=>t("obfs_settings",{...a,host:c.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(a.path??""),onChange:c=>t("obfs_settings",{...a,path:c.target.value}),placeholder:"/"})]})]})]})}function fl({draft:n,set:t}){const{t:s}=ue();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:ye(n,"version","2"),onChange:r=>t("version",Number(r.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:r=>t("up_mbps",Number(r.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:r=>t("down_mbps",Number(r.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs"),onChange:r=>t("obfs",r.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:r=>t("obfs_password",r.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)})]})}function yl({draft:n,set:t}){const{t:s}=ue();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:r=>t("udp_relay_mode",r.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:r=>t("congestion_control",r.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)}),e.jsx(ht,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:r=>t("disable_sni",r?1:0)}),e.jsx(ht,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:r=>t("zero_rtt_handshake",r?1:0)})]})}function vl({draft:n,set:t,onOpenJson:s}){const{t:r}=ue();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:a=>t("flow",a.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.encryption"),actionText:ye(n,"encryption")?r("node.editConfig"):void 0,onAction:()=>s(r("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:a=>t("encryption",a.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function jl({draft:n,set:t,onOpenJson:s}){const{t:r}=ue();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.paddingScheme"),actionText:r("node.editConfig"),onAction:()=>s(r("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(ht,{label:r("node.allowInsecure"),checked:n.insecure===1,onChange:a=>t("insecure",a?1:0)})]})}function wl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:r,onOpenSecurityConfig:a}){const{t:c}=ue(),d=ye(n,"protocol"),f=Ps(d),b={...jn,...$t(n.warp_settings)},C=cs(b.enable),h=(u,M)=>{t("warp_settings",Sn({...b,[u]:M}))},w=u=>{if(t("protocol",u),!u){t("tls",0),t("network","tcp");return}vn.includes(u)?(t("tls",1),n.tls_settings||t("tls_settings",{})):u==="shadowsocks"?t("tls",0):u==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const M=Ps(u);(M.length===0||!M.includes(ye(n,"network","tcp")))&&t("network","tcp"),u!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),u!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),u!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:d,onChange:u=>w(u.target.value),children:[e.jsx("option",{value:"",children:c("node.selectNodeProtocol")}),Gr.map(u=>e.jsx("option",{value:u,children:u},u))]})]}),d?e.jsxs(e.Fragment,{children:[Nn(d)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:c("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?c("node.editConfig"):void 0,onAction:a}),e.jsxs("select",{className:"config-input",value:ye(n,"tls",vn.includes(d)?"1":"0"),onChange:u=>{const M=Number(u.target.value);t("tls",M),M!==0&&!n.tls_settings&&t("tls_settings",{})},children:[al(d)?e.jsx("option",{value:"0",children:c("node.none")}):null,e.jsx("option",{value:"1",children:c("node.useTls")}),kn(d)?e.jsx("option",{value:"2",children:c("node.reality")}):null]})]}):null,ol(d)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:c("node.transportProtocol"),required:!0,actionText:c("node.editConfig"),onAction:r}),e.jsx("select",{className:"config-input",value:f.includes(ye(n,"network","tcp"))?ye(n,"network","tcp"):"tcp",onChange:u=>{t("network",u.target.value),n.network_settings||t("network_settings",{})},children:f.map(u=>e.jsx("option",{value:u,children:u},u))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:c("node.warpOutbound")}),e.jsx(ht,{label:c("node.warpEnable"),checked:C,onChange:u=>t("warp_settings",Sn({...b,enable:u}))}),C?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:u=>h("mode",u.target.value),children:[e.jsx("option",{value:"auto",children:c("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:c("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:u=>h("fail_policy",u.target.value),children:[e.jsx("option",{value:"direct",children:c("node.warpFailDirect")}),e.jsx("option",{value:"block",children:c("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:u=>h("mtu",Number(u.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:u=>h("domain_strategy",u.target.value),children:Pi.map(u=>e.jsx("option",{value:u,children:u},u))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:c("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:u=>h("private_key",u.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:u=>h("peer_public_key",u.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:u=>h("endpoint",u.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:$s(b.addresses),onChange:u=>h("addresses",u.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.warpReserved")}),e.jsx("input",{className:"config-input",value:$s(b.reserved),onChange:u=>h("reserved",u.target.value)})]})]})]}):null,d==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.encryption"),actionText:ye(n,"encryption")?c("node.editConfig"):void 0,onAction:()=>s(c("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ye(n,"encryption"),onChange:u=>t("encryption",u.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.flow")}),e.jsxs("select",{className:"config-input",value:ye(n,"flow"),onChange:u=>t("flow",u.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),d==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:c("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:ye(n,"cipher","aes-128-gcm"),onChange:u=>t("cipher",u.target.value),children:Ti.map(u=>e.jsx("option",{value:u,children:u},u))})]}),d==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"up_mbps","0"),onChange:u=>t("up_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ye(n,"down_mbps","0"),onChange:u=>t("down_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:ye(n,"obfs"),onChange:u=>t("obfs",u.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),ye(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ye(n,"obfs_password"),onChange:u=>t("obfs_password",u.target.value),placeholder:c("node.autoGenHelp")})]}):null]})]}),d==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ye(n,"udp_relay_mode","native"),onChange:u=>t("udp_relay_mode",u.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ye(n,"congestion_control","bbr"),onChange:u=>t("congestion_control",u.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:c("node.disableSni"),checked:n.disable_sni===1,onChange:u=>t("disable_sni",u?1:0)}),e.jsx(ht,{label:c("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:u=>t("zero_rtt_handshake",u?1:0)})]}),d==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:c("node.paddingScheme"),actionText:c("node.editConfig"),onAction:()=>s(c("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const As={vmess:ka,vless:Ma,trojan:Jn,shadowsocks:ss,hysteria:va,tuic:na,anytls:nn,v2node:xn,zicnode:xn},Nl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},kl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function St(n){return Nl[n]??kl}function _l({draft:n,config:t,onCopy:s,t:r}){const a=Number(n.id??0),c=a>0?ul(a,t):"",d=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:r("node.quickInstallTitle")}),e.jsx("span",{children:r("node.quickInstallHelp")})]}),a>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:c}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(c),children:[e.jsx(Vt,{size:15}),r("node.copyInstallCommand")]}),d?e.jsx("span",{className:"node-install-warning",children:r("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:r("node.installSaveFirst")})]})}function Sl(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState([]),[d,f]=o.useState([]),[b,C]=o.useState(null),[h,w]=o.useState(null),[u,M]=o.useState(!0),[G,$]=o.useState(!1),[z,I]=o.useState(""),[P,k]=o.useState(""),[R,U]=o.useState(1),[H,j]=o.useState(()=>Zr()),[E,F]=o.useState(!1),[Z,l]=o.useState({}),[_,D]=o.useState({apiHost:ls,apiKey:""}),[S,q]=o.useState(!1),[y,O]=o.useState(""),[L,se]=o.useState(null),[g,ee]=o.useState(null),[B,Q]=o.useState(null),[de,$e]=o.useState(null),[Ee,Le]=o.useState(null),[_e,Ne]=o.useState(null),[ge,Se]=o.useState(null),ve=(x,i)=>{x.dataTransfer.effectAllowed="move",Ne(i)},We=(x,i)=>{if(x.preventDefault(),_e===null||_e===i)return;const m=[...s],N=m[_e];m.splice(_e,1),m.splice(i,0,N),Ne(i),r(m)},v=()=>{Ne(null)},ie=(x,i)=>{E&&Se(i)},W=x=>{if(!E||ge===null)return;x.cancelable&&x.preventDefault();const i=x.touches[0],m=document.elementFromPoint(i.clientX,i.clientY);if(!m)return;const N=m.closest(".mobile-node-card");if(!N)return;const A=N.getAttribute("data-index");if(A===null)return;const X=Number(A);if(X!==ge&&X>=0&&X<s.length){const be=[...s],he=be[ge];be.splice(ge,1),be.splice(X,0,he),Se(X),r(be)}},xe=()=>{Se(null)},Ce=o.useCallback(x=>{const i=Ee===x;Le(i?null:x),$e(m=>i&&m===x?null:m),i||(Q(null),ee(null))},[Ee]),me=o.useCallback(x=>{const i=B===x;Q(i?null:x),ee(m=>i&&m===x?null:m),i||(Le(null),$e(null))},[B]);o.useEffect(()=>{const x=i=>{const m=i.target;if(!m)return;const N=m instanceof Element?m:m.parentElement;N!=null&&N.closest(".load-ip-status-wrap, .load-ip-online-wrap")||(Le(null),Q(null))};return document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x)}},[]),o.useEffect(()=>{U(1)},[y,H]),o.useEffect(()=>{try{window.localStorage.setItem($i,String(H))}catch{}},[H]);const De=s.filter(x=>{const i=y.toLowerCase().trim();return i?x.name.toLowerCase().includes(i)||x.host.toLowerCase().includes(i)||_n(x.load_ips).some(m=>m.toLowerCase().includes(i))||String(x.id).includes(i)||x.type.toLowerCase().includes(i):!0}),Ue=Math.ceil(De.length/H),ae=De.slice((R-1)*H,R*H);function xt(x,i){return i<=7?Array.from({length:i},(m,N)=>N+1):x<=4?[1,2,3,4,5,"...",i]:x>=i-3?[1,"...",i-4,i-3,i-2,i-1,i]:[1,"...",x-1,x,x+1,"...",i]}const pe=xt(R,Ue),tt=async()=>{var x,i;$(!0),I(""),k("");try{const m={};s.forEach((N,A)=>{m[N.type]||(m[N.type]={}),m[N.type][String(N.id)]=A+1}),await cr(m),(x=window.showToast)==null||x.call(window,t("node.saveSortSuccess"),"success"),F(!1),await pt()}catch(m){I(m instanceof Error?m.message:t("node.saveSortFailed")),(i=window.showToast)==null||i.call(window,m instanceof Error?m.message:t("node.saveSortFailed"),"error")}finally{$(!1)}},nt=async()=>{F(!1),await Ve()},st=()=>De.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===1,onClick:()=>U(x=>Math.max(x-1,1)),children:"<"}),pe.map((x,i)=>x==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${i}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${R===x?"active":""}`,onClick:()=>U(Number(x)),children:x},`page-${x}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===Ue||Ue===0,onClick:()=>U(x=>Math.min(x+1,Ue)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:H,onChange:x=>{const i=Number(x.target.value);Ei(i)&&j(i)},children:wn.map(x=>e.jsxs("option",{value:x,children:[x," / ",t("common.perPage")]},x))})})]}),[T,re]=o.useState(null),[le,V]=o.useState(!1),[je,fe]=o.useState(""),[Me,Pe]=o.useState(!1),[dt,Xe]=o.useState(!1);async function qe(x){var m,N;x.preventDefault();const i=je.trim();if(!(!i||!b)){Pe(!0),I(""),k("");try{await as({name:i});const A=await Bt();c(A);const X=A.filter(be=>be.name===i).sort((be,he)=>he.id-be.id)[0];if(X){const be=b.group_id??[];be.includes(X.id)||_t("group_id",[...be,X.id])}fe(""),V(!1),(m=window.showToast)==null||m.call(window,t("node.groupCreateSuccess"),"success")}catch(A){I(A instanceof Error?A.message:t("node.groupCreateFailed")),(N=window.showToast)==null||N.call(window,A instanceof Error?A.message:t("node.groupCreateFailed"),"error")}finally{Pe(!1)}}}const Mt=(x,i)=>{if(!b)return;let m=b[i];if(typeof m=="string"&&m.trim())try{m=JSON.parse(m)}catch{}["tlsSettings","tls_settings"].includes(i)&&mt(String(b._type))&&(m=gt(m,Number(b.tls??0))),re({title:x,key:i,value:m&&typeof m=="object"?m:{}})},Ve=o.useCallback(async()=>{var x,i,m,N,A;M(!0),I("");try{const[X,be,he,Ke]=await Promise.all([js(),Bt(),vi(),gi()]);r(X.data),c(be),f(he);const we=Es((x=Ke.site)==null?void 0:x.app_url);D({apiHost:Es((i=Ke.server)==null?void 0:i.server_api_url,we),apiKey:Fe((m=Ke.server)==null?void 0:m.server_token)}),q(cs(((N=Ke.subscribe)==null?void 0:N.device_hwid_available)??((A=Ke.subscribe)==null?void 0:A.device_hwid_enable)))}catch(X){I(X instanceof Error?X.message:t("knowledge.loadFailed"))}finally{M(!1)}},[]),pt=o.useCallback(async()=>{try{const x=await js();r(x.data)}catch(x){console.error("Refresh nodes failed",x)}},[]);async function Gt(x){var m;const i=await Pt(x);(m=window.showToast)==null||m.call(window,t(i?"node.installCopied":"common.copyFailed"),i?"success":"error")}o.useEffect(()=>{if(!Re()){n.replace("/login");return}Ve()},[Ve,n]);function At(x){C(Is(x)),w(null),I(""),k("")}function Lt(x){C(Is(x.type,x)),I(""),k("")}function It(x,i){if(!S||!i&&Number(x.online??0)<=0)return;const m=new URLSearchParams({node_type:x.type,node_id:String(x.id)}),N=String(i??"").trim();N&&m.set("online_ip",N),n.push(`/device?${m.toString()}`)}function Ot(x){return x.reported?x.online>0?2:1:0}function Nt(x,i){const m=Rt(x);if(!m.length)return null;const N=`${kt(x)}-load-ip-status`,A=Ee===N||de===N;return e.jsxs("span",{className:`load-ip-status-wrap ${i}${A?" active":""}`,onMouseEnter:i==="desktop"?()=>$e(N):void 0,onMouseLeave:i==="desktop"?()=>$e(X=>X===N?null:X):void 0,children:[e.jsx("button",{className:"load-ip-status-button",type:"button","aria-expanded":A,"aria-label":t("node.loadIpStatusTitle"),onClick:()=>Ce(N),children:e.jsx(xn,{size:14})}),A?e.jsxs("div",{className:"load-ip-status-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpStatusTitle")}),e.jsxs("strong",{children:[m.length," IP"]})]}),e.jsx("div",{className:"load-ip-status-list",children:m.map(X=>{const be=Ot(X);return e.jsxs("div",{className:"load-ip-status-row",children:[e.jsx("span",{className:`status-indicator-dot status-${be}`}),e.jsx("span",{className:"mono",children:X.ip})]},X.ip)})})]}):null]})}function kt(x){return`${x.type}-${x.id}`}function Rt(x){const i=_n(x.load_ips),m=Array.isArray(x.load_ip_online)?x.load_ip_online:[],N=new Map;return m.forEach(A=>{if(!A||typeof A!="object")return;const X=A,be=String(X.ip??"").trim();if(!be)return;const he=X.last_push_at;N.set(be,{online:Math.max(0,Number(X.online??0)),lastPushAt:he==null||he===""?null:Number(he)})}),i.map(A=>{const X=N.get(A);return{ip:A,online:Math.max(0,Number((X==null?void 0:X.online)??0)),lastPushAt:(X==null?void 0:X.lastPushAt)??null,reported:(X==null?void 0:X.lastPushAt)!==null&&(X==null?void 0:X.lastPushAt)!==void 0}})}function p(x,i){return i.some(m=>m.reported)?i.reduce((m,N)=>m+N.online,0):Number(x.online??0)}function K(x,i,m){return e.jsxs("div",{className:"load-ip-online-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpOnlineByIp")}),e.jsxs("strong",{children:[t("node.loadIpOnlineTotal"),": ",m]})]}),e.jsx("div",{className:"load-ip-online-list",children:i.map(N=>{const A=S&&N.online>0;return e.jsxs("div",{className:"load-ip-online-row",children:[e.jsx("span",{className:"mono",children:N.ip}),e.jsxs("span",{className:"load-ip-online-actions",children:[e.jsx("span",{className:`load-ip-online-count${N.reported?"":" is-muted"}`,children:N.reported?N.online:t("node.loadIpOnlineNoReport")}),A?e.jsx("button",{className:"load-ip-online-device-button",type:"button","aria-label":`${t("device.title")} ${N.ip}`,onClick:X=>{X.stopPropagation(),It(x,N.ip)},children:e.jsx(Xn,{size:12})}):null]})]},N.ip)})})]})}function ne(x,i){const m=Rt(x),N=m.length>0,A=N?p(x,m):Number(x.online??0),X=!N&&S&&A>0,he=`${i==="mobile"?"mobile-badge-pill":"online-badge"}${X||N?" online-badge-link":""}${N?" load-ip-online-trigger":""}`,Ke=i==="mobile"?12:13,we={...i==="mobile"?{marginRight:4}:{},color:A>0?"#10b981":"var(--muted)",opacity:A>0?1:.6},lt=N?xn:Xn,Tn=e.jsxs(e.Fragment,{children:[e.jsx(lt,{size:Ke,style:we}),A]});if(N){const Wt=kt(x),Pn=B===Wt||g===Wt;return e.jsxs("span",{className:`load-ip-online-wrap${Pn?" active":""}`,onMouseEnter:i==="desktop"?()=>ee(Wt):void 0,onMouseLeave:i==="desktop"?()=>ee(ps=>ps===Wt?null:ps):void 0,children:[e.jsx("button",{className:he,type:"button","aria-expanded":Pn,onClick:()=>me(Wt),children:Tn}),Pn?K(x,m,A):null]})}return X?e.jsx("button",{className:he,type:"button",onClick:()=>It(x),children:Tn}):e.jsx("span",{className:he,children:Tn})}async function ce(x){var X,be,he,Ke;if(x.preventDefault(),!b)return;$(!0),I(""),k("");const i=String(b._type),m={...b};if(mt(i)&&!Fe(m.protocol)){I(t("node.protocolRequired")),(X=window.showToast)==null||X.call(window,t("node.protocolRequired"),"error"),$(!1);return}if(m.load_ips=Li(m.load_ips),m.load_ips.length>100){I(t("node.loadIpsLimit")),(be=window.showToast)==null||be.call(window,t("node.loadIpsLimit"),"error"),$(!1);return}for(const we of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete m[we];if(m.padding_scheme!==void 0&&m.padding_scheme!==null&&typeof m.padding_scheme!="string"&&(m.padding_scheme=JSON.stringify(m.padding_scheme)),m.padding_scheme)try{const we=JSON.parse(String(m.padding_scheme));if(typeof we!="object"||we===null)throw new Error("Invalid JSON array or object")}catch(we){I("Invalid Padding Scheme configuration: "+(we instanceof Error?we.message:"JSON error")),$(!1);return}const N=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const we of N)(m[we]===""||m[we]===null||m[we]===void 0)&&delete m[we];if(mt(i)){const we=String(m.protocol??""),lt=Number(m.tls??0);m.warp_settings=Sn(m.warp_settings),Nn(we)?vn.includes(we)&&lt!==2||!kn(we)&&lt===2?(m.tls=1,m.tls_settings=gt(m.tls_settings,1)):m.tls_settings=gt(m.tls_settings,lt):(m.tls=0,m.tls_settings={})}const A=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const we of A){const lt=m[we];(lt==null||typeof lt=="object"&&Object.keys(lt).length===0)&&delete m[we]}m.port!==void 0&&(m.port=String(m.port).trim()),m.server_port!==void 0&&(m.server_port=Number(m.server_port)),m.tls!==void 0&&(m.tls=Number(m.tls)),m.rate!==void 0&&(m.rate=Number(m.rate)),m.check!==void 0&&(m.check=Number(m.check));try{await or(i,m),C(null),(he=window.showToast)==null||he.call(window,t("node.saveSuccess"),"success"),await pt()}catch(we){I(we instanceof Error?we.message:t("node.saveFailed")),(Ke=window.showToast)==null||Ke.call(window,we instanceof Error?we.message:t("node.saveFailed"),"error")}finally{$(!1)}}async function Ie(x){const i=[...s];r(m=>m.map(N=>N.id===x.id&&N.type===x.type?{...N,show:x.show?0:1}:N));try{await ws(x.type,x.id,{show:x.show?0:1}),await pt()}catch(m){r(i),I(m instanceof Error?m.message:t("node.updateFailed"))}}async function ut(x){const i=[...s],m=Number(x.check??0)?0:1;r(N=>N.map(A=>A.id===x.id&&A.type===x.type?{...A,check:m}:A));try{await ws(x.type,x.id,{check:m}),await pt()}catch(N){r(i),I(N instanceof Error?N.message:t("node.updateFailed"))}}async function ft(x){var i,m;try{await lr(x.type,x.id),(i=window.showToast)==null||i.call(window,t("node.copySuccess"),"success"),await pt()}catch(N){I(N instanceof Error?N.message:t("node.copyFailed")),(m=window.showToast)==null||m.call(window,N instanceof Error?N.message:t("node.copyFailed"),"error")}}async function ze(x){var i;(i=window.showConfirm)==null||i.call(window,{message:t("node.deleteConfirm",{name:x.name}),onConfirm:async()=>{var N,A;const m=[...s];r(X=>X.filter(be=>!(be.id===x.id&&be.type===x.type))),I("");try{await rr(x.type,x.id),(N=window.showToast)==null||N.call(window,t("node.deleteSuccess"),"success"),await pt()}catch(X){r(m),I(X instanceof Error?X.message:t("node.deleteFailed")),(A=window.showToast)==null||A.call(window,X instanceof Error?X.message:t("node.deleteFailed"),"error")}}})}const _t=(x,i)=>C(m=>{if(!m)return null;const N={...m,[x]:i};if(!mt(String(N._type)))return N;if(x==="tls_settings"&&(N.tls_settings=gt(i,Number(N.tls??0))),x==="tls"&&(N.tls_settings=gt(N.tls_settings,Number(i))),x==="warp_settings"&&(N.warp_settings=Sn(i)),x==="protocol"){const A=String(i);Nn(A)?!kn(A)&&Number(N.tls??0)===2?(N.tls=1,N.tls_settings=gt(N.tls_settings,1)):N.tls_settings=gt(N.tls_settings,Number(N.tls??0)):(N.tls=0,N.tls_settings={})}return N}),Ht=b?String(b._type):"",rt=rl(Ht);return e.jsxs(Ge,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>w(h?null:"show"),children:e.jsx(at,{size:18})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Vn.map(x=>{const i=St(x.value),m=As[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{At(x.value),w(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:i==null?void 0:i.bg,backgroundColor:i==null?void 0:i.rowBg},children:e.jsx(m,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(i==null?void 0:i.bg)??"var(--surface-soft)",color:(i==null?void 0:i.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:y,onChange:x=>O(x.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${E?"success-btn":""}`,type:"button",onClick:E?tt:()=>F(!0),disabled:G,children:t(E?G?"node.saving":"node.saveOrder":"node.editSortOrder")}),E&&e.jsx("button",{className:"ghost-button",type:"button",onClick:nt,children:t("common.cancel")})]})]}),z?e.jsx("div",{className:"form-error",children:z}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Te,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:t("node.colCheck")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t(E?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[ae.map(x=>{const i=s.findIndex(m=>m.id===x.id&&m.type===x.type);return e.jsxs("tr",{draggable:E,onDragStart:m=>ve(m,i),onDragOver:m=>We(m,i),onDragEnd:v,className:_e===i?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:St(x.type).bg,color:St(x.type).text,border:`1px solid ${St(x.type).border}`},children:x.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button","aria-label":t("node.toggleShow"),onClick:()=>void Ie(x),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Number(x.check??0)?"active":""}`,type:"button","aria-label":t("node.toggleCheck"),onClick:()=>void ut(x),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"node-name-cell",children:e.jsxs("div",{className:"node-name-line",children:[Nt(x,"desktop")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("strong",{children:x.name})]})})}),e.jsx("td",{className:"mobile-hide",children:e.jsxs("span",{className:"mono",children:[x.host,":",x.port||x.server_port]})}),e.jsx("td",{children:ne(x,"desktop")}),e.jsxs("td",{className:"mobile-hide",children:[x.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const m=x.group_id??[],N=Z[`${x.type}-${x.id}`],A=m.map(he=>{const Ke=a.find(we=>Number(we.id)===Number(he));return e.jsx("span",{className:"tag",children:(Ke==null?void 0:Ke.name)??`#${he}`},he)});if(m.length<=3||N)return e.jsxs(e.Fragment,{children:[A,m.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>l(he=>({...he,[`${x.type}-${x.id}`]:!1})),children:t("node.collapse")})]});const X=A.slice(0,3),be=m.length-3;return e.jsxs(e.Fragment,{children:[X,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>l(he=>({...he,[`${x.type}-${x.id}`]:!0})),children:["+",be,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:m.length})}),A]})]})]})})()})}),e.jsx("td",{children:E?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Lt(x),se(null)},children:[e.jsx(Be,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ft(x),se(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{ze(x),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})})]},`${x.type}-${x.id}`)}),!u&&De.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),st()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>w(h?null:"show"),children:e.jsx(at,{size:20})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Vn.map(x=>{const i=St(x.value),m=As[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{At(x.value),w(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:i==null?void 0:i.bg,backgroundColor:i==null?void 0:i.rowBg},children:e.jsx(m,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(i==null?void 0:i.bg)??"var(--surface-soft)",color:(i==null?void 0:i.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:y,onChange:x=>O(x.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${E?"active":""}`,type:"button",onClick:()=>F(!E),children:e.jsx(Qt,{size:20})})]}),E&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:nt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void tt(),disabled:G,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(G?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[ae.map(x=>{const i=s.findIndex(m=>m.id===x.id&&m.type===x.type);return e.jsxs("div",{className:`mobile-node-card ${_e===i||ge===i?"dragging":""}`,draggable:E,onDragStart:m=>ve(m,i),onDragOver:m=>We(m,i),onDragEnd:v,onTouchStart:m=>ie(m,i),onTouchMove:W,onTouchEnd:xe,"data-index":i,style:E?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("div",{className:"card-header-left",children:e.jsxs("div",{className:"mobile-node-name-line",children:[Nt(x,"mobile")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("span",{className:"mobile-node-name",children:x.name})]})}),e.jsx("div",{className:"card-header-right",children:E?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-node-switch-pair",children:[e.jsxs("span",{className:"mobile-node-switch-item",children:[e.jsx("small",{children:t("node.colShow")}),e.jsx("button",{type:"button",className:`admin-switch ${x.show===1?"active":""}`,"aria-label":t("node.toggleShow"),onClick:()=>void Ie(x),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("span",{className:"mobile-node-switch-item",children:[e.jsx("small",{children:t("node.colCheck")}),e.jsx("button",{type:"button",className:`admin-switch ${Number(x.check??0)?"active":""}`,"aria-label":t("node.toggleCheck"),onClick:()=>void ut(x),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(L==null?void 0:L.id)===x.id&&(L==null?void 0:L.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Lt(x),se(null)},children:[e.jsx(Be,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ft(x),se(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{ze(x),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsx("div",{className:"card-middle-row",children:e.jsxs("span",{className:"mobile-node-address",children:[x.host,":",x.port||x.server_port]})}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:St(x.type).bg,color:St(x.type).text,border:`1px solid ${St(x.type).border}`},children:x.id}),ne(x,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[x.rate," x"]})]})]},`${x.type}-${x.id}`)}),!u&&De.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),st()]}),b!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:b.id?t("node.editNodeTitle",{type:rt}):t("node.createNodeTitle",{type:rt})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:rt})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ce,children:[e.jsx(hl,{draft:b,set:_t,groups:a,routes:d,nodes:s,onOpenJson:Mt,onAddGroup:()=>V(!0),onOpenTransportConfig:()=>Xe(!0)}),mt(Ht)?e.jsx(_l,{draft:b,config:_,onCopy:x=>void Gt(x),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(ot,{size:16}),t(G?"node.saving":"common.save")]})]})]})]})}),T!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:T.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(T.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>re(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(T.key)?e.jsx(ml,{initialValue:T.value,isSnakeCase:T.key==="tls_settings",tlsMode:il(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>re(null),onSave:x=>{_t(T.key,x),re(null)}}):e.jsx(Ii,{initialValue:T.value,onCancel:()=>re(null),onSave:x=>{_t(T.key,x),re(null)}})})]})}),le&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:qe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:je,onChange:x=>fe(x.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>V(!1),disabled:Me,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:Me||!je.trim(),children:t(Me?"node.saving":"common.confirm")})]})]})]})}),dt&&b!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xe(!1),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(xl,{draft:b,set:_t,onCancel:()=>Xe(!1),onSave:()=>Xe(!1)})})]})})]})}function Cl(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(null),[d,f]=o.useState(!0),[b,C]=o.useState(!1),[h,w]=o.useState(""),u=o.useCallback(async()=>{f(!0),w("");try{r(await Bt())}catch(z){w(z instanceof Error?z.message:t("serverGroup.loadFailed"))}finally{f(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}u()},[u,n]);function M(z){c({id:z==null?void 0:z.id,name:(z==null?void 0:z.name)??""}),w("")}async function G(z){var I;if(z.preventDefault(),!!a){C(!0),w("");try{await as(a),c(null),(I=window.showToast)==null||I.call(window,t("serverGroup.saveSuccess"),"success"),await u()}catch(P){w(P instanceof Error?P.message:t("serverGroup.saveFailed"))}finally{C(!1)}}}async function $(z){var I;(I=window.showConfirm)==null||I.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var P,k;w("");try{await lo(z),(P=window.showToast)==null||P.call(window,t("serverGroup.deleteSuccess"),"success"),await u()}catch(R){w(R instanceof Error?R.message:t("serverGroup.deleteFailed")),(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:d,children:[e.jsx(Ae,{size:16}),t(d?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>M(),children:[e.jsx(at,{size:16}),t("serverGroup.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,d&&s.length===0?e.jsx(Te,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(z=>e.jsxs("tr",{children:[e.jsx("td",{children:z.id}),e.jsx("td",{children:e.jsx("strong",{children:z.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(fn,{size:14}),z.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(bn,{size:14}),z.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>M(z),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void $(z.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},z.id)),!d&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:a.name,onChange:z=>c({...a,name:z.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function zl(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function Tl(n){var t;return((t=yi.find(s=>s.value===n))==null?void 0:t.label)??n}function Pl(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(null),[d,f]=o.useState(!0),[b,C]=o.useState(!1),[h,w]=o.useState(""),u=o.useCallback(async()=>{f(!0),w("");try{r(await vi())}catch(z){w(z instanceof Error?z.message:t("serverRoute.loadFailed"))}finally{f(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}u()},[u,n]);function M(z){c(zl(z)),w("")}async function G(z){var P;if(z.preventDefault(),!a)return;C(!0),w("");const I=a.action==="default_out"?[]:a.match.split(`
`).map(k=>k.trim()).filter(Boolean);try{await co({id:a.id,remarks:a.remarks,match:I,action:a.action,action_value:a.action_value||null}),c(null),(P=window.showToast)==null||P.call(window,t("serverRoute.saveSuccess"),"success"),await u()}catch(k){w(k instanceof Error?k.message:t("serverRoute.saveFailed"))}finally{C(!1)}}async function $(z){var I;(I=window.showConfirm)==null||I.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var P,k;w("");try{await po(z),(P=window.showToast)==null||P.call(window,t("serverRoute.deleteSuccess"),"success"),await u()}catch(R){w(R instanceof Error?R.message:t("serverRoute.deleteFailed")),(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:d,children:[e.jsx(Ae,{size:16}),t(d?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>M(),children:[e.jsx(at,{size:16}),t("serverRoute.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,d&&s.length===0?e.jsx(Te,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(z=>e.jsxs("tr",{children:[e.jsx("td",{children:z.id}),e.jsx("td",{children:e.jsx("strong",{children:z.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(z.match)?z.match:[]).slice(0,3).map((I,P)=>e.jsx("span",{className:"tag",children:I},P)),Array.isArray(z.match)&&z.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",z.match.length-3]}):null,!Array.isArray(z.match)||z.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:Tl(z.action)})}),e.jsx("td",{children:z.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>M(z),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void $(z.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},z.id)),!d&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:a.remarks,onChange:z=>c({...a,remarks:z.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:a.action,onChange:z=>c({...a,action:z.target.value}),children:yi.map(z=>e.jsx("option",{value:z.value,children:z.label},z.value))})]}),a.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:a.match,onChange:z=>c({...a,match:z.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:a.action_value,onChange:z=>c({...a,action_value:z.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function $l(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function El(n){const t=r=>r===""?null:Math.round(Number(r)*100),s=r=>r===""?null:Number(r);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function et(n){return n==null?"—":Je(n)}function Ml(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function Ll(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState([]),[d,f]=o.useState(null),[b,C]=o.useState(!0),[h,w]=o.useState(!1),[u,M]=o.useState(""),[G,$]=o.useState(""),[z,I]=o.useState(!1),[P,k]=o.useState(""),[R,U]=o.useState(!1),[H,j]=o.useState(null),[E,F]=o.useState(null),Z=o.useRef(!1),l=o.useRef(null),_=o.useRef(!1),D=v=>v instanceof Element&&!!v.closest(".drag-handle"),S=(v,ie)=>{if(v===ie||v<0||ie<0||v>=s.length||ie>=s.length)return!1;const W=[...s],xe=W[v];return W.splice(v,1),W.splice(ie,0,xe),r(W),l.current=W.map(Ce=>Ce.id),Z.current=!0,!0},q=async()=>{const v=Z.current,ie=l.current??s.map(W=>W.id);if(Z.current=!1,l.current=null,_.current=!1,j(null),F(null),!!v)try{await ho(ie),await B()}catch(W){M(W instanceof Error?W.message:t("plan.sortFailed")),await B()}},y=(v,ie)=>{var W;if(!D(v.target)){v.preventDefault();return}v.dataTransfer.effectAllowed="move",v.dataTransfer.setData("text/plain",String(((W=s[ie])==null?void 0:W.id)??ie)),Z.current=!1,j(ie)},O=(v,ie)=>{H===null||H===ie||(v.preventDefault(),S(H,ie)&&j(ie))},L=async()=>{await q()},se=(v,ie)=>{!D(v.target)||v.touches.length!==1||(Z.current=!1,_.current=!0,F(ie))},g=v=>{if(!_.current||E===null)return;v.cancelable&&v.preventDefault();const ie=v.touches[0],W=document.elementFromPoint(ie.clientX,ie.clientY);if(!W)return;const xe=W.closest("tr, [data-index]");if(!xe)return;const Ce=xe.getAttribute("data-index");if(Ce===null)return;const me=Number(Ce);S(E,me)&&F(me)},ee=async()=>{!_.current&&E===null||await q()},B=o.useCallback(async()=>{C(!0),M("");try{const[v,ie]=await Promise.all([Et(),Bt()]);r(v),c(ie)}catch(v){M(v instanceof Error?v.message:t("plan.loadFailed"))}finally{C(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}B()},[B,n]);function Q(){f(null),I(!1),k("")}function de(v){f($l(v)),I(!1),k(""),M(""),$("")}async function $e(v){var ie,W;if(v.preventDefault(),!!d){w(!0),M(""),$("");try{await uo(El(d)),Q(),(ie=window.showToast)==null||ie.call(window,t("plan.saveSuccess"),"success"),await B()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.saveFailed"),"error")}finally{w(!1)}}}async function Ee(v,ie){var W;try{await $n(v,{show:ie?0:1}),await B()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function Le(v,ie){var W;try{await $n(v,{renew:ie?0:1}),await B()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function _e(v,ie){var W;try{await $n(v,{allow_subscribe_url:ie?0:1}),await B()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function Ne(v){var ie;(ie=window.showConfirm)==null||ie.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var W,xe;M(""),$("");try{await mo(v),(W=window.showToast)==null||W.call(window,t("plan.deleteSuccess"),"success"),await B()}catch(Ce){(xe=window.showToast)==null||xe.call(window,Ce instanceof Error?Ce.message:t("plan.deleteFailed"),"error")}}})}function ge(v){var ie;return((ie=a.find(W=>W.id===v))==null?void 0:ie.name)??`#${v}`}function Se(v){return Number(v.allow_subscribe_url??1)===1}function ve(v,ie){f(W=>W&&{...W,[v]:ie})}async function We(v){var W,xe;v.preventDefault();const ie=P.trim();if(!(!ie||!d)){U(!0),M(""),$("");try{await as({name:ie});const Ce=await Bt();c(Ce);const me=Ce.filter(De=>De.name===ie).sort((De,Ue)=>Ue.id-De.id)[0];me&&ve("group_id",String(me.id)),k(""),I(!1),(W=window.showToast)==null||W.call(window,t("node.groupCreateSuccess"),"success")}catch(Ce){const me=Ce instanceof Error?Ce.message:t("node.groupCreateFailed");M(me),(xe=window.showToast)==null||xe.call(window,me,"error")}finally{U(!1)}}}return e.jsxs(Ge,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:B,disabled:b,children:[e.jsx(Ae,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>de(),children:[e.jsx(at,{size:16}),t("plan.add")]})]})]}),u?e.jsx("div",{className:"form-error",children:u}):null,G?e.jsx("div",{className:"form-success",children:G}):null,b&&s.length===0?e.jsx(Te,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((v,ie)=>e.jsxs("tr",{onDragOver:W=>O(W,ie),"data-index":ie,className:H===ie||E===ie?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>y(W,ie),onDragEnd:L,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:v.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${v.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ee(v.id,v.show)},title:v.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${v.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Le(v.id,v.renew)},title:v.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Se(v)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),_e(v.id,Se(v)?1:0)},title:Se(v)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:v.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(fn,{size:14}),v.count??0]})}),e.jsx("td",{children:ge(v.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[v.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(v.month_price)})]}),v.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(v.quarter_price)})]}),v.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(v.half_year_price)})]}),v.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(v.year_price)})]}),v.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(v.two_year_price)})]}),v.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(v.three_year_price)})]}),v.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(v.onetime_price)})]}),v.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(v.reset_price)})]})]})}),e.jsxs("td",{children:[v.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:W=>{W.stopPropagation(),de(v)},children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:W=>{W.stopPropagation(),Ne(v.id)},children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},v.id)),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((v,ie)=>e.jsxs("div",{className:`mobile-node-card ${H===ie||E===ie?"dragging":""}`,onDragOver:W=>O(W,ie),"data-index":ie,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>y(W,ie),onDragEnd:L,onTouchStart:W=>se(W,ie),onTouchMove:g,onTouchEnd:ee,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:v.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:v.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),de(v)},children:[e.jsx(Be,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),Ne(v.id)},children:[e.jsx(Ze,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${v.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ee(v.id,v.show)},title:v.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${v.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Le(v.id,v.renew)},title:v.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Se(v)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),_e(v.id,Se(v)?1:0)},title:Se(v)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(fn,{size:12,style:{marginRight:4}}),v.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:ge(v.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[v.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[v.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(v.month_price)})]}),v.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(v.quarter_price)})]}),v.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(v.half_year_price)})]}),v.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(v.year_price)})]}),v.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(v.two_year_price)})]}),v.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(v.three_year_price)})]}),v.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(v.onetime_price)})]}),v.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(v.reset_price)})]})]})]},v.id)),!b&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),d?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:Q,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:$e,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:d.name,onChange:v=>ve("name",v.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:d.content,onChange:v=>ve("content",v.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>I(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:d.group_id,onChange:v=>ve("group_id",v.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),a.map(v=>e.jsx("option",{value:v.id,children:v.name},v.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:d.transfer_enable,onChange:v=>ve("transfer_enable",v.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:d.device_limit,onChange:v=>ve("device_limit",v.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:d.speed_limit,onChange:v=>ve("speed_limit",v.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:d.capacity_limit,onChange:v=>ve("capacity_limit",v.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:d.reset_traffic_method,onChange:v=>ve("reset_traffic_method",v.target.value),children:Ml(t).map(v=>e.jsx("option",{value:v.value,children:v.label},v.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:d.allow_subscribe_url==="1",onChange:v=>ve("allow_subscribe_url",v.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.month_price,onChange:v=>ve("month_price",v.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.quarter_price,onChange:v=>ve("quarter_price",v.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.half_year_price,onChange:v=>ve("half_year_price",v.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.year_price,onChange:v=>ve("year_price",v.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.two_year_price,onChange:v=>ve("two_year_price",v.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.three_year_price,onChange:v=>ve("three_year_price",v.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.onetime_price,onChange:v=>ve("onetime_price",v.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:d.reset_price,onChange:v=>ve("reset_price",v.target.value),placeholder:"—"})]})]}),d.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:d.force_update,onChange:v=>ve("force_update",String(v.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:Q,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"plan.saving":"common.save")]})]})]})]})}):null,z&&d?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>I(!1),disabled:R,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:We,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:P,onChange:v=>k(v.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>I(!1),disabled:R,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:R||!P.trim(),children:t(R?"node.saving":"common.confirm")})]})]})]})}):null]})}const Os={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Rs={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Hs(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0");return`${s}/${r}/${a} ${c}:${d}`}function Us(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),d=String(t.getMinutes()).padStart(2,"0"),f=String(t.getSeconds()).padStart(2,"0");return`${s}-${r}-${a} ${c}:${d}:${f}`}function qs(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function ct(n){return`${Je(Number(n??0))} ₫`}const Di="adminzic_user_cache";function Il(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(Di);return n?JSON.parse(n):{}}catch{return{}}}function Dl(n){if(!(typeof window>"u"))try{sessionStorage.setItem(Di,JSON.stringify(n))}catch{}}const Ut=(n,t)=>`${n}:${t}`;function Fl(){var xt,pe,tt,nt,st;const n=He(),t=tn(),{t:s}=ue(),r=o.useCallback(T=>{switch(T){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${T}`,cls:""}}},[s]),a=o.useCallback(T=>{const re=`order.period.${T}`,le=s(re);return le===re?Rs[T]??T:le},[s]),[c,d]=o.useState([]),[f,b]=o.useState([]),[C,h]=o.useState({}),[w,u]=o.useState(0),[M,G]=o.useState(1),[$]=o.useState(15),[z,I]=o.useState(""),[P,k]=o.useState("trade_no"),[R,U]=o.useState(!0),[H,j]=o.useState(null),[E,F]=o.useState(!1),[Z,l]=o.useState(""),[_,D]=o.useState(""),[S,q]=o.useState(null),[y,O]=o.useState(null),[L,se]=o.useState(!1),[g,ee]=o.useState(null),[B,Q]=o.useState(!1),[de,$e]=o.useState(()=>Il()),Ee=o.useCallback((T,re)=>{const le=Ut(re,T);O(null),q(V=>V===le?null:le)},[]),Le=o.useCallback((T,re)=>{const le=Ut(re,T);q(null),O(V=>V===le?null:le)},[]),_e=o.useCallback(T=>{const re=Number(T.coupon_id??0);return re?C[re]??`#${re}`:null},[C]);o.useEffect(()=>{if(!S&&!y)return;const T=()=>{q(null),O(null)},re=V=>{const je=V.target;je!=null&&je.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||T()},le=V=>{V.key==="Escape"&&T()};return document.addEventListener("pointerdown",re),document.addEventListener("keydown",le),()=>{document.removeEventListener("pointerdown",re),document.removeEventListener("keydown",le)}},[S,y]),o.useEffect(()=>{const T=new Set;if(c.forEach(le=>{le.user_id&&!de[le.user_id]&&T.add(le.user_id),le.invite_user_id&&!de[le.invite_user_id]&&T.add(le.invite_user_id)}),g&&(g.user_id&&!de[g.user_id]&&T.add(g.user_id),g.invite_user_id&&!de[g.invite_user_id]&&T.add(g.invite_user_id)),T.size===0)return;const re=Array.from(T);Promise.allSettled(re.map(async le=>{try{const V=await yn(le);if(V&&V.data)return{id:le,email:V.data.email,invite_user:V.data.invite_user}}catch(V){console.error(`Failed to fetch user ${le}:`,V)}return null})).then(le=>{const V={};le.forEach(je=>{var fe;if(je.status==="fulfilled"&&je.value){const Me=je.value;V[Me.id]={email:Me.email,invite_user_email:((fe=Me.invite_user)==null?void 0:fe.email)||null},Me.invite_user&&(V[Me.invite_user.id]={email:Me.invite_user.email})}}),Object.keys(V).length>0&&$e(je=>{const fe={...je,...V};return Dl(fe),fe})})},[c,g,de]);const Ne={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},ge=o.useCallback(async(T=1,re="",le="trade_no")=>{U(!0),l("");try{const V=re.trim(),fe=await xo({current:T,pageSize:$,filter:V?[{key:le,condition:le==="email"||le==="invite_user_email"?"like":"=",value:V}]:void 0});d(fe.data),u(fe.total)}catch(V){l(V instanceof Error?V.message:s("order.loadFailed"))}finally{U(!1)}},[$,s]),Se=o.useCallback(T=>{const re=String(T);k("user_id"),I(re),se(!0),G(1),ge(1,re,"user_id")},[ge]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}const T=new URLSearchParams(t.search),re=T.get("filter_email"),le=T.get("invite_user_email"),V=T.get("user_id")||T.get("filter_user_id");let je="",fe="trade_no";V?(je=V,fe="user_id",k("user_id"),I(V),se(!0)):re?(je=re,fe="email",k("email"),I(re),se(!0)):le&&(je=le,fe="invite_user_email",k("invite_user_email"),I(le),se(!0)),ge(1,je,fe),Et().then(b).catch(()=>{}),ji(1,1e3).then(Me=>{const Pe={};Me.data.forEach(dt=>{Pe[dt.id]=dt.code}),h(Pe)}).catch(()=>{})},[ge,n,t.search]);function ve(){G(1),ge(1,z,P)}function We(){I(""),G(1),ge(1)}function v(T){G(T),ge(T,z,P)}async function ie(T){var re,le;q(null),O(null),l(""),D("");try{await bo(T),(re=window.showToast)==null||re.call(window,s("order.paidSuccess"),"success"),await ge(M,z,P)}catch(V){(le=window.showToast)==null||le.call(window,V instanceof Error?V.message:s("order.paidFailed"),"error")}}async function W(T){var re,le;q(null),O(null),l(""),D("");try{await go(T),(re=window.showToast)==null||re.call(window,s("order.cancelSuccess"),"success"),await ge(M,z,P)}catch(V){(le=window.showToast)==null||le.call(window,V instanceof Error?V.message:s("order.cancelFailed"),"error")}}async function xe(T,re){var le,V;q(null),O(null),l(""),D("");try{await fo(T,re),(le=window.showToast)==null||le.call(window,s("order.commissionSuccess"),"success"),await ge(M,z,P)}catch(je){(V=window.showToast)==null||V.call(window,je instanceof Error?je.message:s("order.commissionFailed"),"error")}}async function Ce(T){ee(T),Q(!0);try{const re=await yo(T.id);re&&re.data&&ee(re.data)}catch(re){console.error("Failed to fetch order detail:",re)}finally{Q(!1)}}function me(){var T;j({email:"",plan_id:(T=f[0])!=null&&T.id?String(f[0].id):"",period:"month_price",total_amount:"0"}),l(""),D("")}async function De(T){var re,le;if(T.preventDefault(),!!H){F(!0),l(""),D("");try{await os({email:H.email,plan_id:Number(H.plan_id),period:H.period,total_amount:Number(H.total_amount)*100}),j(null),(re=window.showToast)==null||re.call(window,s("order.assignSuccess"),"success"),await ge(M,z,P)}catch(V){(le=window.showToast)==null||le.call(window,V instanceof Error?V.message:s("order.assignFailed"),"error")}finally{F(!1)}}}const Ue=Math.ceil(w/$),ae=g?_e(g):null;return e.jsxs(Ge,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${L?"active":""}`,type:"button",onClick:()=>se(!L),children:[e.jsx(en,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:me,children:[e.jsx(at,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ge(M,z,P),disabled:R,children:[e.jsx(Ae,{size:16}),s(R?"common.refreshing":"common.refresh")]})]}),L&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:P,onChange:T=>k(T.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(zn,{size:16}),e.jsx("input",{className:"config-input search-input",value:z,onChange:T=>I(T.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:T=>T.key==="Enter"&&ve()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:ve,children:[e.jsx(en,{size:16}),s("order.filter")]}),z?e.jsxs("button",{className:"ghost-button",type:"button",onClick:We,children:[e.jsx(ke,{size:16}),s("order.clearFilter")]}):null]}),Z?e.jsx("div",{className:"form-error",children:Z}):null,_?e.jsx("div",{className:"form-success",children:_}):null,R&&c.length===0?e.jsx(Te,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${R?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[c.map(T=>{var Me;const re=r(T.status),le=T.invite_user_id!==null,V=Ne[T.commission_status]??{label:`#${T.commission_status}`,dotClass:"pending"},je=_e(T),fe=(Me=de[T.user_id])==null?void 0:Me.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(T),title:s("order.detailsTitle"),children:qs(T.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",T.id]}),e.jsx("span",{className:"order-type-pill",children:Os[T.type]??`#${T.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[fe?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(T.user_id),title:s("order.filterByUser"),children:fe}):e.jsxs("span",{className:"order-subline",children:["ID: ",T.user_id]}),e.jsx("strong",{className:"order-plan-name",children:T.plan_name??`Plan #${T.plan_id}`}),e.jsx("span",{className:"period-capsule",children:a(T.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:ct(T.total_amount)}),je?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",je]}):null,Number(T.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",ct(T.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),e.jsx("span",{children:re.label}),T.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Pe=>{Pe.stopPropagation(),Ee(T.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),S===Ut("desktop",T.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Pe=>Pe.stopPropagation(),onClick:Pe=>Pe.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{q(null),ie(T.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{q(null),W(T.trade_no)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[le?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:ct(T.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${V.dotClass}`}),e.jsx("span",{children:V.label}),T.commission_status===0&&(T.status===3||T.status===4)&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Pe=>{Pe.stopPropagation(),Le(T.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),y===Ut("desktop",T.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Pe=>Pe.stopPropagation(),onClick:Pe=>Pe.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),xe(T.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{O(null),xe(T.trade_no,3)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Hs(T.created_at)})})]},T.trade_no)}),!R&&c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),Ue>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:M<=1,onClick:()=>v(M-1),children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[M," / ",Ue]}),e.jsx("button",{className:"mini-button",disabled:M>=Ue,onClick:()=>v(M+1),children:e.jsx(wt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[c.map(T=>{var Xe;const re=r(T.status),le=T.invite_user_id!==null,V=Ne[T.invite_user_id!==null?T.commission_status:0]??{label:`#${T.commission_status}`,dotClass:"pending"},je=(Xe=de[T.user_id])==null?void 0:Xe.email,fe=_e(T),Me=Ut("mobile",T.trade_no),Pe=Ut("mobile",T.trade_no),dt=S===Me||y===Pe;return e.jsxs("div",{className:`mobile-order-card${dt?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(T),children:qs(T.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",T.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:re.label}),T.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:qe=>{qe.stopPropagation(),Ee(T.trade_no,"mobile")},"aria-expanded":S===Me,children:[s("order.markAs"),e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),S===Me&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:qe=>qe.stopPropagation(),onClick:qe=>qe.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{q(null),ie(T.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{q(null),W(T.trade_no)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:je?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(T.user_id),children:je}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",T.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:Os[T.type]??`#${T.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:T.plan_name??`Plan #${T.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:a(T.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:ct(T.total_amount)})]}),fe?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:fe})})]}):null,Number(T.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:ct(T.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:le?e.jsx("strong",{children:ct(T.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),le&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${V.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:V.label}),T.commission_status===0&&(T.status===3||T.status===4)&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:qe=>{qe.stopPropagation(),Le(T.trade_no,"mobile")},"aria-expanded":y===Pe,children:[s("order.markAs"),e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),y===Pe&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:qe=>qe.stopPropagation(),onClick:qe=>qe.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),xe(T.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{O(null),xe(T.trade_no,3)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Hs(T.created_at)})]})]})]},T.trade_no)}),!R&&c.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,Ue>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:M<=1,onClick:()=>v(M-1),children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[M," / ",Ue]}),e.jsx("button",{className:"mini-button",disabled:M>=Ue,onClick:()=>v(M+1),children:e.jsx(wt,{size:16})})]}):null]})]}),g?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ee(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:B?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx(Te,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(xt=de[g.user_id])!=null&&xt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{ee(null),Se(g.user_id)},title:"Filter by this user",children:de[g.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",g.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:g.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:a(g.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:r(g.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:g.plan_name??`Plan #${g.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:g.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("user.billingInfo")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingName")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_name||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingTaxCode")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_tax_code||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingPhone")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_phone||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingAddress")}),e.jsx("span",{style:{textAlign:"right",maxWidth:"62%",overflowWrap:"anywhere"},children:g.billing_address||"-"})]})]}),g.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(pe=de[g.invite_user_id])!=null&&pe.email||(tt=de[g.user_id])!=null&&tt.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const T=String(g.invite_user_id);k("invite_user_id"),I(T),se(!0),ee(null),ge(1,T,"invite_user_id")},title:"Filter by this inviter",children:((nt=de[g.invite_user_id])==null?void 0:nt.email)||((st=de[g.user_id])==null?void 0:st.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",g.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:ct(g.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(Ne[g.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(Ne[g.commission_status]??{label:`#${g.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:ct(g.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:ct(g.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:ct(g.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:ct(g.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:ct(g.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Us(g.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Us(g.updated_at)})]})]})]})})]})}):null,H?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:De,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:H.email,onChange:T=>j({...H,email:T.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:H.plan_id,onChange:T=>j({...H,plan_id:T.target.value}),children:f.map(T=>e.jsx("option",{value:T.id,children:T.name},T.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:H.period,onChange:T=>j({...H,period:T.target.value}),children:Object.entries(Rs).map(([T,re])=>e.jsx("option",{value:T,children:re},T))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:H.total_amount,onChange:T=>j({...H,total_amount:T.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:E,children:[e.jsx(ot,{size:16}),s(E?"order.assigning":"order.assign")]})]})]})]})}):null]})}function rn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function ln(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function Fn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Al(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(0),[d,f]=o.useState(1),[b,C]=o.useState([]),[h,w]=o.useState(null),[u,M]=o.useState(!0),[G,$]=o.useState(!1),[z,I]=o.useState(""),[P,k]=o.useState(""),[R,U]=o.useState("");o.useEffect(()=>{h||U("")},[h]);const H=o.useCallback(async(l=1)=>{M(!0),I("");try{const _=await ji(l,15);r(_.data),c(_.total)}catch(_){I(_ instanceof Error?_.message:t("coupon.loadFailed"))}finally{M(!1)}},[]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}H(1),Et().then(C).catch(()=>{})},[H,n]);async function j(l){var _,D;if(l.preventDefault(),!!h){$(!0),I(""),k("");try{const S=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await vo({id:h.id,name:h.name,type:Number(h.type),value:S,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,limit_use_with_user:h.limit_use_with_user?Number(h.limit_use_with_user):null,limit_plan_ids:h.limit_plan_ids.length?h.limit_plan_ids:null,limit_period:h.limit_period.length?h.limit_period:null,generate_count:h.generate_count?Number(h.generate_count):void 0}),w(null),(_=window.showToast)==null||_.call(window,t("coupon.saveSuccess"),"success"),await H(d)}catch(S){(D=window.showToast)==null||D.call(window,S instanceof Error?S.message:t("coupon.saveFailed"),"error")}finally{$(!1)}}}async function E(l){var _;try{await wo(l),await H(d)}catch(D){(_=window.showToast)==null||_.call(window,D instanceof Error?D.message:t("coupon.toggleFailed"),"error")}}async function F(l){var _;(_=window.showConfirm)==null||_.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var D,S;try{await jo(l),(D=window.showToast)==null||D.call(window,t("coupon.deleteSuccess"),"success"),await H(d)}catch(q){(S=window.showToast)==null||S.call(window,q instanceof Error?q.message:t("coupon.deleteFailed"),"error")}}})}const Z=Math.ceil(a/15);return e.jsxs(Ge,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[a," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void H(d),disabled:u,children:[e.jsx(Ae,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(Fn()),children:[e.jsx(at,{size:16}),t("coupon.add")]})]})]}),z?e.jsx("div",{className:"form-error",children:z}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Te,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(l=>{var q,y;const _=(q=l.limit_plan_ids)==null?void 0:q.map(O=>{var L;return((L=b.find(se=>se.id===O))==null?void 0:L.name)||`#${O}`}).join(", "),D=ln(t),S=(y=l.limit_period)==null?void 0:y.map(O=>D[O]||O).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:l.id}),e.jsx("td",{children:e.jsx("strong",{children:l.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:l.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:l.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:l.type===1?Je(l.value):`${l.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",l.limit_use??"∞"]}),l.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",l.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[_?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",_]})}):null,S?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",S]})}):null,!_&&!S?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${l.show?"active":""}`,type:"button",onClick:()=>void E(l.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[rn(l.started_at)," — ",rn(l.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(Fn(l)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void F(l.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},l.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(l=>{var _,D,S,q;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",l.id]}),e.jsx("span",{className:`tag type-tag ${l.type===1?"fixed-type":"percent-type"}`,children:l.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:l.name,children:l.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{Pt(l.code).then(y=>{var O;(O=window.showToast)==null||O.call(window,y?`${t("coupon.copiedCode")}: ${l.code}`:t("common.copyFailed"),y?"success":"error")})},children:[e.jsx("code",{className:"mono",children:l.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(_=l.limit_plan_ids)!=null&&_.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:l.limit_plan_ids.map(y=>{const O=b.find(L=>L.id===y);return e.jsx("span",{className:"res-pill plan-pill",children:O?O.name:`#${y}`},y)})})]}):null,(D=l.limit_period)!=null&&D.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:l.limit_period.map(y=>e.jsx("span",{className:"res-pill cycle-pill",children:ln(t)[y]||y},y))})]}):null,!((S=l.limit_plan_ids)!=null&&S.length)&&!((q=l.limit_period)!=null&&q.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[rn(l.started_at)," — ",rn(l.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${l.show?"active":""}`,type:"button",onClick:()=>void E(l.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:l.type===1?Je(l.value).replace(/\s?₫/,""):`${l.value}`}),e.jsx("span",{className:"ticket-value-unit",children:l.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:l.limit_use??"∞"}),l.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",l.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(Fn(l)),"aria-label":t("common.edit"),children:e.jsx(Be,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void F(l.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},l.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:d<=1,onClick:()=>{f(d-1),H(d-1)},children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[d," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:d>=Z,onClick:()=>{f(d+1),H(d+1)},children:e.jsx(wt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:j,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:l=>w({...h,name:l.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:h.type,onChange:l=>w({...h,type:l.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:l=>w({...h,value:l.target.value})})]})]}),h.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:h.code,onChange:l=>w({...h,code:l.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:l=>w({...h,started_at:l.target.value}),onClick:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)},onFocus:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:l=>w({...h,ended_at:l.target.value}),onClick:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)},onFocus:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:l=>w({...h,limit_use:l.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use_with_user,onChange:l=>w({...h,limit_use_with_user:l.target.value}),placeholder:t("coupon.unlimited")})]})]}),h.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:l=>w({...h,generate_count:l.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),h.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_plan_ids.map(l=>{const _=b.find(D=>D.id===l);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const D=h.limit_plan_ids.filter(S=>S!==l);w({...h,limit_plan_ids:D})},children:[_?_.name:`#${l}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},l)})}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:R,onChange:l=>U(l.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(l=>l.name.toLowerCase().includes(R.toLowerCase())).map(l=>{const _=h.limit_plan_ids.includes(l.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:_,onChange:D=>{const S=D.target.checked?[...h.limit_plan_ids,l.id]:h.limit_plan_ids.filter(q=>q!==l.id);w({...h,limit_plan_ids:S})}}),e.jsx("span",{children:l.name})]},l.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),h.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_period.map(l=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const _=h.limit_period.filter(D=>D!==l);w({...h,limit_period:_})},children:[ln(t)[l]||l," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},l))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(ln(t)).map(([l,_])=>{const D=h.limit_period.includes(l);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:D,onChange:S=>{const q=S.target.checked?[...h.limit_period,l]:h.limit_period.filter(y=>y!==l);w({...h,limit_period:q})}}),e.jsx("span",{children:_})]},l)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(ot,{size:16}),t(G?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function cn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Ol(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function An(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Rl(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(0),[d,f]=o.useState(1),[b,C]=o.useState([]),[h,w]=o.useState(null),[u,M]=o.useState(!0),[G,$]=o.useState(!1),[z,I]=o.useState(""),[P,k]=o.useState(""),[R,U]=o.useState("");o.useEffect(()=>{h||U("")},[h]);const H=Ol(t),j=o.useCallback(async(l=1)=>{M(!0),I("");try{const _=await No(l,15);r(_.data),c(_.total)}catch(_){I(_ instanceof Error?_.message:t("giftcard.loadFailed"))}finally{M(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}j(1),Et().then(C).catch(()=>{})},[j,n]);async function E(l){var _,D;if(l.preventDefault(),!!h){$(!0),I(""),k("");try{const S=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await ko({id:h.id,name:h.name,type:Number(h.type),value:S,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,plan_id:h.plan_id?Number(h.plan_id):null,generate_count:h.generate_count?Number(h.generate_count):void 0}),w(null),(_=window.showToast)==null||_.call(window,t("giftcard.saveSuccess"),"success"),await j(d)}catch(S){(D=window.showToast)==null||D.call(window,S instanceof Error?S.message:t("giftcard.saveFailed"),"error")}finally{$(!1)}}}async function F(l){var _;(_=window.showConfirm)==null||_.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var D,S;try{await _o(l),(D=window.showToast)==null||D.call(window,t("giftcard.deleteSuccess"),"success"),await j(d)}catch(q){(S=window.showToast)==null||S.call(window,q instanceof Error?q.message:t("giftcard.deleteFailed"),"error")}}})}const Z=Math.ceil(a/15);return e.jsxs(Ge,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[a," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void j(d),disabled:u,children:[e.jsx(Ae,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(An()),children:[e.jsx(at,{size:16}),t("giftcard.add")]})]})]}),z?e.jsx("div",{className:"form-error",children:z}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Te,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(l=>{var _;return e.jsxs("tr",{children:[e.jsx("td",{children:l.id}),e.jsx("td",{children:e.jsx("strong",{children:l.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:l.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:H[l.type]??l.type})}),e.jsx("td",{children:e.jsx("strong",{children:l.type===1?Je(l.value):l.value})}),e.jsx("td",{children:l.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((_=b.find(D=>D.id===l.plan_id))==null?void 0:_.name)||`#${l.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:l.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[cn(l.started_at)," — ",cn(l.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(An(l)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void F(l.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},l.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(l=>{var _;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",l.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:H[l.type]??l.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:l.name,children:l.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{Pt(l.code).then(D=>{var S;(S=window.showToast)==null||S.call(window,D?t("giftcard.copiedCode").replace("{code}",l.code):t("common.copyFailed"),D?"success":"error")})},children:[e.jsx("code",{className:"mono",children:l.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:l.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((_=b.find(D=>D.id===l.plan_id))==null?void 0:_.name)||`#${l.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[cn(l.started_at)," — ",cn(l.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:l.type===1?Je(l.value).replace(/\s?₫/,""):`${l.value}`}),e.jsx("span",{className:"ticket-value-unit",children:l.type===1?"₫":H[l.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:l.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(An(l)),"aria-label":t("common.edit"),children:e.jsx(Be,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void F(l.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},l.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:d<=1,onClick:()=>{f(d-1),j(d-1)},children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[d," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:d>=Z,onClick:()=>{f(d+1),j(d+1)},children:e.jsx(wt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:E,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:l=>w({...h,name:l.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:h.type,onChange:l=>w({...h,type:l.target.value}),children:Object.entries(H).map(([l,_])=>e.jsx("option",{value:l,children:_},l))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:l=>w({...h,value:l.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:l=>w({...h,started_at:l.target.value}),onClick:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)},onFocus:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:l=>w({...h,ended_at:l.target.value}),onClick:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)},onFocus:l=>{var _,D;return(D=(_=l.currentTarget).showPicker)==null?void 0:D.call(_)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:l=>w({...h,limit_use:l.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),h.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:l=>w({...h,generate_count:l.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),h.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const l=b.find(_=>String(_.id)===h.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{w({...h,plan_id:""})},children:[l?l.name:`#${h.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:R,onChange:l=>U(l.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!h.plan_id,onChange:()=>{w({...h,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),b.filter(l=>l.name.toLowerCase().includes(R.toLowerCase())).map(l=>{const _=String(l.id)===h.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:_,onChange:D=>{D.target.checked&&w({...h,plan_id:String(l.id)})}}),e.jsx("span",{children:l.name})]},l.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(ot,{size:16}),t(G?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Kt="like",bt="=";function dn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Hl(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Bs(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function On(n){return+(n/1073741824).toFixed(2)}function Rn(n){return Math.round(n*1073741824)}function pn(n){return(n/1073741824).toFixed(2)}function Ul(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function qt(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const ts=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Fi="user_visible_columns";function ql(){if(typeof window<"u")try{const n=localStorage.getItem(Fi);if(n)return new Set(JSON.parse(n))}catch{}return new Set(ts.filter(n=>n.defaultVisible).map(n=>n.key))}const Cn=[{value:"email",label:"Email",condition:Kt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:bt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:bt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:bt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:bt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:bt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Kt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:bt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Kt,placeholder:"UUID"},{value:"token",label:"Token",condition:Kt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Kt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:bt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:bt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:bt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:bt,placeholder:"1780366403"}],Bl=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Qe(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Gl(n,t){var a;const s=((a=Cn.find(c=>c.value===n))==null?void 0:a.label)??n,r=c=>{const d=t(c);return d===c?s:d};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return r("user.filterBanned");case"is_admin":return r("user.filterAdmin");case"is_manager":return r("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return r("user.filterUuid");case"token":return r("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return r("user.filterTransferEnable");case"d":return r("user.filterDownloadUsed");case"device_limit":return r("user.filterDeviceLimit");case"expired_at":return r("user.filterExpiredAt");default:return s}}function Hn(n){return Cn.find(t=>t.value===n)??Cn[0]}function Wl(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function Kl(){const n=He(),t=tn(),{t:s}=ue(),[r,a]=o.useState([]),[c,d]=o.useState([]),[f,b]=o.useState([]),[C,h]=o.useState(0),[w,u]=o.useState(1),[M,G]=o.useState(""),[$,z]=o.useState("email"),[I,P]=o.useState(!0),[k,R]=o.useState(""),[U,H]=o.useState(ql),[j,E]=o.useState(!1),F=o.useRef(null),[Z,l]=o.useState(null),[_,D]=o.useState(null),[S,q]=o.useState(null),[y,O]=o.useState({}),[L,se]=o.useState(!1),[g,ee]=o.useState(!1),[B,Q]=o.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[de,$e]=o.useState(!1),[Ee,Le]=o.useState(null),[_e,Ne]=o.useState({plan_id:"",period:"month_price",total_amount:""}),[ge,Se]=o.useState(!1),[ve,We]=o.useState(null),[v,ie]=o.useState(null),[W,xe]=o.useState([]),[Ce,me]=o.useState(0),[De,Ue]=o.useState(1),[ae]=o.useState(10),[xt,pe]=o.useState(!1),[tt,nt]=o.useState("");o.useEffect(()=>{function i(m){const N=m.target instanceof Element?m.target:null;Z!==null&&(!N||!N.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(l(null),D(null)),j&&F.current&&!F.current.contains(m.target)&&E(!1)}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[Z,j]),o.useEffect(()=>{if(Z===null)return;const i=()=>{l(null),D(null)};return window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0)}},[Z]);function st(i,m){if(Z===i){l(null),D(null);return}const N=m.getBoundingClientRect(),A=220,X=392,be=6,he=8,Ke=Math.max(he,Math.min(window.innerWidth-A-he,N.right-A)),lt=N.bottom+be+X<=window.innerHeight-he?N.bottom+be:Math.max(he,N.top-X-be);D({top:lt,left:Ke}),l(i)}function T(){l(null),D(null)}function re(i,m=!1,N=""){const A=X=>{T(),X()};return e.jsxs("div",{className:`action-dropdown-menu ${m?"action-dropdown-menu-fixed":""} ${N}`.trim(),style:m&&_?{top:_.top,left:_.left}:void 0,onMouseDown:X=>X.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>A(()=>ft(i)),children:[e.jsx(Be,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Ie(i)),children:[e.jsx(hi,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>void It(i)),children:[e.jsx(yt,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>kt(i)),children:[e.jsx(Zn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Ot(i)),children:[e.jsx(ss,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>Rt(i)),children:[e.jsx(ra,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>p(i)),children:[e.jsx(Yn,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>K(i)),children:[e.jsx(fn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>A(()=>ce(i)),children:[e.jsx(bs,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>A(()=>Nt(i)),children:[e.jsx(Ze,{size:14}),s("user.actionDelete")]})]})}function le(i){H(m=>{const N=new Set(m);N.has(i)?N.delete(i):N.add(i);try{localStorage.setItem(Fi,JSON.stringify([...N]))}catch{}return N})}const V=i=>U.has(i),je=ts.filter(i=>U.has(i.key)).length,fe=o.useCallback(async(i=1,m,N)=>{P(!0),R("");try{const A=m==null?void 0:m.trim(),X=Hn(N||"email"),be=A?[{key:X.value,condition:X.condition,value:A}]:void 0,he=await So(i,15,be);a(he.data),h(he.total)}catch(A){R(A instanceof Error?A.message:s("user.loadFailed"))}finally{P(!1)}},[]),Me=o.useCallback(async()=>{try{const[i,m]=await Promise.all([Et(),Bt()]);d(i),b(m)}catch{}},[]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}const i=new URLSearchParams(t.search),N=[["email",i.get("email")||i.get("filter_email")],["id",i.get("id")||i.get("user_id")||i.get("filter_user_id")],["plan_id",i.get("plan_id")],["invite_user_id",i.get("invite_user_id")],["invite_by_email",i.get("invite_by_email")],["uuid",i.get("uuid")],["token",i.get("token")],["remarks",i.get("remarks")]].find(([,A])=>A==null?void 0:A.trim());if(N){const[A,X]=N,be=Hn(A),he=(X==null?void 0:X.trim())??"";z(be.value),G(he),u(1),fe(1,he,be.value)}else fe(1);Me()},[fe,Me,n,t.search]);function Pe(){u(1),fe(1,M,$)}function dt(){G(""),u(1),fe(1)}function Xe(i){u(i),fe(i,M,$)}function qe(i){if(i.plan_name)return i.plan_name;if(!i.plan_id)return"—";const m=c.find(N=>N.id===i.plan_id);return m?m.name:`#${i.plan_id}`}function Mt(i){if(!i.group_id)return"—";const m=f.find(N=>N.id===i.group_id);return m?m.name:`#${i.group_id}`}function Ve(i,m){const N=s(i);return N===i?m:N}function pt(i){const m=Number(i.device_limit??0);return m>0?`${Number(i.device_bound_count??0)} / ${m}`:Ve("user.unlimited","Unlimited")}function Gt(i){const m=Number(i.device_bound_count??0),N=Number(i.device_pending_count??0),A=Number(i.device_banned_count??0),X=Number(i.device_online_count??0),be=Number(i.alive_ip??0),he=Number(i.device_limit??0),Ke=he>0?`${m} / ${he}`:`${m} / ${Ve("user.unlimited","Unlimited")}`,we=[`${Ve("user.deviceBound","Bound")}: ${Ke}`,`${Ve("user.devicePending","Pending")}: ${N}`,`${Ve("user.deviceBanned","Banned")}: ${A}`,`${Ve("user.deviceOnline","Online devices")}: ${X}`,`${Ve("user.deviceOnlineIp","Online IP")}: ${be}`];return i.ips&&we.push(i.ips),we.join(`
`)}function At(i){n.push(`/device?user_id=${encodeURIComponent(String(i.id))}`)}function Lt(i,m="left"){const N=`${Ve("user.deviceOnlineShort","Online")}: ${Number(i.device_online_count??0)} | ${Ve("user.deviceIpShort","IP")}: ${Number(i.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${m==="right"?"align-right":""}`,type:"button",title:Gt(i),onClick:()=>At(i),children:[e.jsx("span",{className:"device-cell-primary",children:pt(i)}),e.jsx("span",{className:"device-cell-secondary",children:N})]})}async function It(i){var A,X;const m=i.subscribe_url;if(!m){(A=window.showToast)==null||A.call(window,s("user.toastNoSubscribeUrl"),"error");return}const N=await Pt(m);(X=window.showToast)==null||X.call(window,s(N?"user.toastUrlCopied":"common.copyFailed"),N?"success":"error"),l(null)}function Ot(i){var m;l(null),(m=window.showConfirm)==null||m.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var N,A;try{await Po(i.id),(N=window.showToast)==null||N.call(window,s("user.toastSecretResetSuccess"),"success"),await fe(w,M,$)}catch(X){(A=window.showToast)==null||A.call(window,X instanceof Error?X.message:s("user.toastSecretResetFailed"),"error")}}})}function Nt(i){var m;l(null),(m=window.showConfirm)==null||m.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var N,A;try{await zo(i.id),(N=window.showToast)==null||N.call(window,s("user.toastDeletedSuccess"),"success"),await fe(w,M,$)}catch(X){(A=window.showToast)==null||A.call(window,X instanceof Error?X.message:s("user.toastDeletedFailed"),"error")}}})}function kt(i){var N;l(null);const m=i.subscribe_url;if(!m){(N=window.showToast)==null||N.call(window,s("user.toastNoSubscribeUrl"),"error");return}We({url:m,userId:i.id})}function Rt(i){l(null),n.push(`/order?user_id=${i.id}`)}function p(i){l(null),n.push(`/subscription?user_id=${i.id}`)}function K(i){l(null),z("invite_user_id"),G(String(i.id)),fe(1,String(i.id),"invite_user_id")}async function ne(i,m){pe(!0),nt("");try{const N=await Do(i,m,ae);xe(N.data||[]),me(N.total||0),Ue(m)}catch(N){nt(N instanceof Error?N.message:s("user.historyLoading"))}finally{pe(!1)}}function ce(i){l(null),ie(i),ne(i.id,1)}function Ie(i){l(null),Le(i.email),Ne({plan_id:"",period:"month_price",total_amount:""})}async function ut(i){var m,N;if(i.preventDefault(),!!Ee){Se(!0);try{await os({email:Ee,plan_id:Number(_e.plan_id),period:_e.period,total_amount:(Number(_e.total_amount)||0)*100}),(m=window.showToast)==null||m.call(window,s("user.toastAssignSuccess"),"success"),Le(null)}catch(A){(N=window.showToast)==null||N.call(window,A instanceof Error?A.message:s("user.toastAssignFailed"),"error")}finally{Se(!1)}}}async function ft(i){var m,N;l(null);try{const A=await yn(i.id);q(i),O({id:i.id,email:i.email,invite_user_email:((m=A.data.invite_user)==null?void 0:m.email)??"",password:"",billing_name:i.billing_name??"",billing_tax_code:i.billing_tax_code??"",billing_phone:i.billing_phone??"",billing_address:i.billing_address??"",balance:i.balance,commission_balance:i.commission_balance,u:On(i.u),d:On(i.d),transfer_enable:On(i.transfer_enable),device_limit:i.device_limit,expired_at:Hl(i.expired_at),plan_id:i.plan_id,banned:i.banned,commission_type:i.commission_type??0,commission_rate:i.commission_rate??"",discount:i.discount??"",speed_limit:i.speed_limit,is_admin:i.is_admin,is_staff:i.is_staff,is_manager:i.is_manager,remarks:i.remarks??""})}catch(A){(N=window.showToast)==null||N.call(window,A instanceof Error?A.message:s("user.loadFailed"),"error")}}function ze(i,m){O(N=>({...N,[i]:m}))}async function _t(i){var m,N;if(i.preventDefault(),!!S){se(!0);try{const A={id:S.id,email:y.email,invite_user_email:String(y.invite_user_email??"").trim()||null,billing_name:String(y.billing_name??"").trim()||null,billing_tax_code:String(y.billing_tax_code??"").trim()||null,billing_phone:String(y.billing_phone??"").trim()||null,billing_address:String(y.billing_address??"").trim()||null,plan_id:y.plan_id||null,expired_at:Bs(String(y.expired_at??"")),transfer_enable:Rn(Number(y.transfer_enable??0)),speed_limit:y.speed_limit||null,device_limit:y.device_limit||null,u:Rn(Number(y.u??0)),d:Rn(Number(y.d??0)),balance:Number(y.balance??0),commission_balance:Number(y.commission_balance??0),commission_rate:y.commission_rate!==""&&y.commission_rate!==null?Number(y.commission_rate):null,commission_type:Number(y.commission_type??0),discount:y.discount!==""&&y.discount!==null?Number(y.discount):null,remarks:y.remarks||null,is_admin:Number(y.is_admin??0),is_staff:Number(y.is_staff??0),is_manager:Number(y.is_manager??0),banned:Number(y.banned??0)};y.password&&(A.password=y.password),await Co(A),(m=window.showToast)==null||m.call(window,s("user.toastSaveSuccess"),"success"),q(null),await fe(w,M,$)}catch(A){(N=window.showToast)==null||N.call(window,A instanceof Error?A.message:s("user.toastSaveFailed"),"error")}finally{se(!1)}}}async function Ht(i){var m,N;i.preventDefault(),$e(!0);try{await To({email_prefix:B.email_prefix,email_suffix:B.email_suffix,password:B.password||void 0,plan_id:B.plan_id?Number(B.plan_id):void 0,expired_at:Bs(B.expired_at)}),(m=window.showToast)==null||m.call(window,s("user.toastCreateSuccess"),"success"),ee(!1),Q({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await fe(w,M,$)}catch(A){(N=window.showToast)==null||N.call(window,A instanceof Error?A.message:s("user.toastCreateFailed"),"error")}finally{$e(!1)}}const rt=Math.ceil(C/15),x=Hn($);return e.jsxs(Ge,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[C," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:F,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>E(!j),children:[e.jsx(ta,{size:16}),s("user.columns")]}),j?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>E(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:je})})}),e.jsx("div",{className:"col-picker-list",children:ts.map(i=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:U.has(i.key),onChange:()=>le(i.key)}),e.jsx("span",{children:Qe(i.key,s)})]},i.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void fe(w,M,$),disabled:I,children:[e.jsx(Ae,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ee(!0),children:[e.jsx(at,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:$,onChange:i=>z(i.target.value),children:Cn.map(i=>e.jsx("option",{value:i.value,children:Gl(i.value,s)},i.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(zn,{size:16}),e.jsx("input",{className:"config-input search-input",value:M,onChange:i=>G(i.target.value),placeholder:x.placeholder,onKeyDown:i=>i.key==="Enter"&&Pe()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:Pe,children:[e.jsx(en,{size:16}),s("user.filter")]}),M?e.jsxs("button",{className:"ghost-button",type:"button",onClick:dt,children:[e.jsx(ke,{size:16}),s("user.clearFilter")]}):null]}),k?e.jsx("div",{className:"form-error",children:k}):null,I&&r.length===0?e.jsx(Te,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[r.map(i=>{const m=pn(i.u+i.d),N=pn(i.transfer_enable),A=parseFloat(m);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",i.id]}),e.jsx("span",{className:"user-email",title:i.email,children:i.email})]}),i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[qe(i)," / ",i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Mt(i)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${A>0?A>parseFloat(N)*.9?"high":"ok":""}`,children:[m," GB"]})," / ",N," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("devices",s)}),e.jsx("span",{className:"info-val",children:Lt(i,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("expires",s)}),e.jsx("span",{className:"info-val",children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(i.balance/100).toFixed(2)," ₫ / ",(i.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:dn(i.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>l(Z===i.id?null:i.id),children:[s("user.colActions")," ",e.jsx(vt,{size:14})]}),Z===i.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>l(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:X=>X.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.email}),e.jsxs("small",{children:["#",i.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>l(null),children:e.jsx(ke,{size:16})})]}),re(i,!1,"mobile-action-menu")]})}):null]})})]},i.id)}),!I&&r.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[V("id")&&e.jsx("th",{children:Qe("id",s)}),V("email")&&e.jsx("th",{children:Qe("email",s)}),V("status")&&e.jsx("th",{children:Qe("status",s)}),V("plan")&&e.jsx("th",{children:Qe("plan",s)}),V("group")&&e.jsx("th",{children:Qe("group",s)}),V("used")&&e.jsx("th",{children:Qe("used",s)}),V("traffic")&&e.jsx("th",{children:Qe("traffic",s)}),V("devices")&&e.jsx("th",{children:Qe("devices",s)}),V("expires")&&e.jsx("th",{children:Qe("expires",s)}),V("balance")&&e.jsx("th",{children:Qe("balance",s)}),V("commission")&&e.jsx("th",{children:Qe("commission",s)}),V("joined")&&e.jsx("th",{children:Qe("joined",s)}),V("actions")&&e.jsx("th",{className:"user-actions-col",children:Qe("actions",s)})]})}),e.jsxs("tbody",{children:[r.map(i=>{const m=pn(i.u+i.d),N=pn(i.transfer_enable),A=parseFloat(m);return e.jsxs("tr",{children:[V("id")&&e.jsx("td",{children:i.id}),V("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:i.email})}),V("status")&&e.jsx("td",{children:i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),V("plan")&&e.jsx("td",{children:qe(i)}),V("group")&&e.jsx("td",{children:i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Mt(i)}),V("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${A>0?A>parseFloat(N)*.9?"high":"ok":""}`,children:m})}),V("traffic")&&e.jsx("td",{children:N}),V("devices")&&e.jsx("td",{children:Lt(i)}),V("expires")&&e.jsx("td",{children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),V("balance")&&e.jsx("td",{children:(i.balance/100).toFixed(2)}),V("commission")&&e.jsx("td",{children:(i.commission_balance/100).toFixed(2)}),V("joined")&&e.jsx("td",{children:e.jsx("small",{children:dn(i.created_at)})}),V("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:X=>st(i.id,X.currentTarget),children:[s("user.colActions")," ",e.jsx(vt,{size:14})]}),Z===i.id&&_?ri.createPortal(re(i,!0),document.body):null]})})]},i.id)}),!I&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:je,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),rt>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:w<=1,onClick:()=>Xe(w-1),children:e.jsx(jt,{size:16})}),Array.from({length:Math.min(5,rt)},(i,m)=>{let N;return rt<=5||w<=3?N=m+1:w>=rt-2?N=rt-4+m:N=w-2+m,e.jsx("button",{className:`mini-button ${N===w?"active-page":""}`,onClick:()=>Xe(N),children:N},N)}),rt>5?e.jsxs("span",{className:"page-info",children:["… ",rt]}):null,e.jsx("button",{className:"mini-button",disabled:w>=rt,onClick:()=>Xe(w+1),children:e.jsx(wt,{size:16})})]})}):null]}),S?e.jsx("div",{className:"modal-backdrop",onClick:()=>q(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>q(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:_t,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(y.email??""),onChange:i=>ze("email",i.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(y.invite_user_email??""),onChange:i=>ze("invite_user_email",i.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(y.password??""),onChange:i=>ze("password",i.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsx("div",{className:"form-section-title",children:s("user.billingInfo")}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.billingName"),e.jsx("input",{className:"config-input",type:"text",maxLength:128,autoComplete:"name",value:String(y.billing_name??""),onChange:i=>ze("billing_name",i.target.value),placeholder:s("user.billingNamePlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.billingTaxCode"),e.jsx("input",{className:"config-input",type:"text",inputMode:"numeric",maxLength:32,value:String(y.billing_tax_code??""),onChange:i=>ze("billing_tax_code",i.target.value),placeholder:s("user.billingTaxCodePlaceholder")})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.billingPhone"),e.jsx("input",{className:"config-input",type:"tel",maxLength:32,autoComplete:"tel",value:String(y.billing_phone??""),onChange:i=>ze("billing_phone",i.target.value),placeholder:s("user.billingPhonePlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.billingAddress"),e.jsx("textarea",{className:"config-input",rows:2,maxLength:255,autoComplete:"street-address",value:String(y.billing_address??""),onChange:i=>ze("billing_address",i.target.value),placeholder:s("user.billingAddressPlaceholder")})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(y.balance??0)/100).toFixed(2)),onChange:i=>ze("balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(y.commission_balance??0)/100).toFixed(2)),onChange:i=>ze("commission_balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.u??0),onChange:i=>ze("u",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.d??0),onChange:i=>ze("d",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(y.transfer_enable??0),onChange:i=>ze("transfer_enable",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(y.device_limit??""),onChange:i=>ze("device_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(y.expired_at??""),onChange:i=>ze("expired_at",i.target.value),onClick:i=>{var m,N;return(N=(m=i.currentTarget).showPicker)==null?void 0:N.call(m)},onFocus:i=>{var m,N;return(N=(m=i.currentTarget).showPicker)==null?void 0:N.call(m)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(y.plan_id??""),onChange:i=>ze("plan_id",i.target.value?Number(i.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),c.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(y.banned??0),onChange:i=>ze("banned",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(y.commission_type??0),onChange:i=>ze("commission_type",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(y.commission_rate??""),onChange:i=>ze("commission_rate",i.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(y.discount??""),onChange:i=>ze("discount",i.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(y.speed_limit??""),onChange:i=>ze("speed_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_admin?"active":""}`,onClick:()=>ze("is_admin",y.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_manager?"active":""}`,onClick:()=>ze("is_manager",y.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${y.is_staff?"active":""}`,onClick:()=>ze("is_staff",y.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(y.remarks??""),onChange:i=>ze("remarks",i.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>q(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:L,children:s(L?"common.processing":"common.save")})]})]})]})}):null,g?e.jsx("div",{className:"modal-backdrop",onClick:()=>ee(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ee(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ht,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:B.email_prefix,onChange:i=>Q({...B,email_prefix:i.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:B.email_suffix,onChange:i=>Q({...B,email_suffix:i.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:B.password,onChange:i=>Q({...B,password:i.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:B.plan_id,onChange:i=>Q({...B,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),c.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:B.expired_at,onChange:i=>Q({...B,expired_at:i.target.value}),onClick:i=>{var m,N;return(N=(m=i.currentTarget).showPicker)==null?void 0:N.call(m)},onFocus:i=>{var m,N;return(N=(m=i.currentTarget).showPicker)==null?void 0:N.call(m)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ee(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:de,children:s(de?"user.creating":"user.createUser")})]})]})]})}):null,Ee?e.jsx("div",{className:"modal-backdrop",onClick:()=>Le(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Le(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ut,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ee})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:_e.plan_id,onChange:i=>Ne({..._e,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),c.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:_e.period,onChange:i=>Ne({..._e,period:i.target.value}),children:Bl.map(i=>e.jsx("option",{value:i.value,children:Wl(i.value,s)},i.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:_e.total_amount,onChange:i=>Ne({..._e,total_amount:i.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Le(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ge,children:s(ge?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),ve?e.jsx("div",{className:"modal-backdrop",onClick:()=>We(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>We(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ve.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:ve.userId})})]})]})}):null,v?e.jsx("div",{className:"modal-backdrop",onClick:()=>ie(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:v.email,id:v.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ie(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[tt?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:tt}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:Ce})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(W.reduce((i,m)=>i+m.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(W.reduce((i,m)=>i+m.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(W.reduce((i,m)=>i+m.u+m.d,0))})]})]}),xt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx(Te,{label:s("user.historyLoading")})}):W.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(bs,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:W.map(i=>{const m=qt(i.u),N=qt(i.d),A=qt(i.u+i.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Ul(i.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(i.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:m}),e.jsx("td",{style:{color:"var(--muted)"},children:N}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:A})]},i.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((De-1)*ae+1,Ce),end:Math.min(De*ae,Ce),total:Ce})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:De<=1,onClick:()=>ne(v.id,De-1),children:[e.jsx(jt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:De*ae>=Ce,onClick:()=>ne(v.id,De+1),children:[s("user.historyNext"),e.jsx(wt,{size:16})]})]})]})]})]})]})}):null]})}function Yl(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Xt({value:n,onCopy:t,className:s="",copyClassName:r="",prefixLength:a=8,suffixLength:c=4}){const{t:d}=ue(),[f,b]=o.useState(!1),C=f?n:Yl(n,a,c);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${r}`.trim(),type:"button",title:d("uuid.copy"),onClick:()=>void t(),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:f?n:C,children:C})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:d(f?"uuid.hide":"uuid.showFull"),"aria-label":d(f?"uuid.hide":"uuid.showFull"),onClick:()=>b(h=>!h),children:f?e.jsx(aa,{size:14}):e.jsx(oa,{size:14})})]})}const Gs=15,Ws=20,Jl=["email","id","user_id","plan_id","status"],Zl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function Ct(n,t){return n?new Date(n*1e3).toLocaleString():t}function Ql(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Xl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Dt(n){return+(n/1073741824).toFixed(2)}function Un(n){return Math.round((Number(n)||0)*1073741824)}function Vl(n){return n==="email"?"like":"="}function ec(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function tc(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Ks(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ys(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Js(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Zs(n){return String(n.hwid??"").trim()!==""}function nc(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function sc(){const n=He(),t=tn(),{t:s}=ue(),[r,a]=o.useState([]),[c,d]=o.useState([]),[f,b]=o.useState(0),[C,h]=o.useState(1),[w,u]=o.useState("email"),[M,G]=o.useState(""),[$,z]=o.useState(!0),[I,P]=o.useState(""),[k,R]=o.useState(null),[U,H]=o.useState({}),[j,E]=o.useState(null),[F,Z]=o.useState(null),[l,_]=o.useState([]),[D,S]=o.useState(0),[q,y]=o.useState(1),[O,L]=o.useState(!1),[se,g]=o.useState(""),[ee,B]=o.useState(null),[Q,de]=o.useState(null),[$e,Ee]=o.useState({period:"month_price",total_amount:""}),[Le,_e]=o.useState(!1),[Ne,ge]=o.useState(null),[Se,ve]=o.useState(null),[We,v]=o.useState(null);function ie(p){const K=p==null?void 0:p.trim();K&&n.push(`/user?email=${encodeURIComponent(K)}`)}const W=o.useCallback(async(p=1,K="",ne="email")=>{z(!0),P("");try{const ce=K.trim()?[{key:ne,condition:Vl(ne),value:K.trim()}]:void 0,Ie=await $o(p,Gs,ce);a(Ie.data),b(Ie.total),h(p)}catch(ce){P(ce instanceof Error?ce.message:s("subscription.loadFailed"))}finally{z(!1)}},[s]),xe=o.useCallback(async(p,K=1)=>{L(!0),g("");try{const ne=await wi(K,Ws,[{key:"subscription_id",condition:"=",value:String(p.id)}]);_(ne.data),S(ne.total),y(K)}catch(ne){g(ne instanceof Error?ne.message:s("subscription.slotsLoadFailed"))}finally{L(!1)}},[s]),Ce=o.useCallback(async()=>{var p;try{d(await Et())}catch(K){(p=window.showToast)==null||p.call(window,K instanceof Error?K.message:s("subscription.plansLoadFailed"),"error")}},[s]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}Ce();const p=new URLSearchParams(t.search),ne=[["user_id",p.get("user_id")],["id",p.get("id")],["plan_id",p.get("plan_id")],["email",p.get("email")],["status",p.get("status")]].find(([,ce])=>ce&&ce.trim());if(ne){const[ce,Ie]=ne,ut=Ie??"";u(ce),G(ut),W(1,ut,ce);return}W()},[W,Ce,t.search,n]),o.useEffect(()=>{function p(K){const ne=K.target instanceof Element?K.target:null;Ne!==null&&(!ne||!ne.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&me()}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[Ne]),o.useEffect(()=>{if(Ne===null)return;const p=()=>me();return window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[Ne]);function me(){ge(null),ve(null)}function De(p,K){if(Ne===p&&Se){me();return}const ne=K.getBoundingClientRect(),ce=230,Ie=292,ut=6,ft=8,ze=Math.max(ft,Math.min(window.innerWidth-ce-ft,ne.right-ce)),Ht=ne.bottom+ut+Ie<=window.innerHeight-ft?ne.bottom+ut:Math.max(ft,ne.top-Ie-ut);ve({top:Ht,left:ze}),ge(p)}function Ue(p){ve(null),ge(K=>K===p?null:p)}function ae(p){p.preventDefault(),W(1,M,w)}function xt(){if(G(""),t.search){n.replace("/subscription");return}W(1,"",w)}function pe(p){if(!p)return s("subscription.noPlan");const K=c.find(ne=>Number(ne.id)===Number(p));return K?`#${K.id} - ${K.name}`:`#${p}`}function tt(p){R(p),H({plan_id:p.plan_id?String(p.plan_id):"",transfer_enable:String(Dt(p.transfer_enable)),u:String(Dt(p.u)),d:String(Dt(p.d)),device_limit:p.device_limit===null?"":String(p.device_limit),speed_limit:p.speed_limit===null?"":String(p.speed_limit),expired_at:Ql(p.expired_at),status:p.status,auto_renewal:String(p.auto_renewal||0),name_sni:p.name_sni??"",network_settings:p.network_settings??"",remarks:p.remarks??""})}async function nt(p){var K,ne;if(p.preventDefault(),!!k){E(k.id);try{await Mo({id:k.id,plan_id:U.plan_id===""?null:Number(U.plan_id),transfer_enable:Un(U.transfer_enable),u:Un(U.u),d:Un(U.d),device_limit:U.device_limit===""?null:Number(U.device_limit),speed_limit:U.speed_limit===""?null:Number(U.speed_limit),expired_at:Xl(U.expired_at),status:U.status,auto_renewal:Number(U.auto_renewal),name_sni:U.name_sni||null,network_settings:U.network_settings||null,remarks:U.remarks}),R(null),(K=window.showToast)==null||K.call(window,s("subscription.updateSuccess"),"success"),await W(C,M,w)}catch(ce){(ne=window.showToast)==null||ne.call(window,ce instanceof Error?ce.message:s("subscription.saveFailed"),"error")}finally{E(null)}}}function st(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.resetConfirm",{id:p.id}),onConfirm:async()=>{var ne,ce;E(p.id);try{await Lo(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.resetSuccess"),"success"),await W(C,M,w)}catch(Ie){(ce=window.showToast)==null||ce.call(window,Ie instanceof Error?Ie.message:s("subscription.resetFailed"),"error")}finally{E(null)}}})}function T(p){var K,ne;if(!p.user_email){(K=window.showToast)==null||K.call(window,s("subscription.renewMissingEmail"),"error");return}if(!p.plan_id){(ne=window.showToast)==null||ne.call(window,s("subscription.renewMissingPlan"),"error");return}de(p),Ee({period:"month_price",total_amount:""})}async function re(p){var K,ne;if(p.preventDefault(),!(!(Q!=null&&Q.user_email)||!Q.plan_id)){_e(!0);try{await os({email:Q.user_email,plan_id:Q.plan_id,period:$e.period,total_amount:Math.round((Number($e.total_amount)||0)*100),subscription_id:Q.id}),(K=window.showToast)==null||K.call(window,s("subscription.renewSuccess"),"success"),de(null)}catch(ce){(ne=window.showToast)==null||ne.call(window,ce instanceof Error?ce.message:s("subscription.renewFailed"),"error")}finally{_e(!1)}}}async function le(p){var ne;if(!p)return;const K=await Pt(p);(ne=window.showToast)==null||ne.call(window,s(K?"subscription.copySuccess":"common.copyFailed"),K?"success":"error")}function V(p,K){a(ne=>ne.map(ce=>ce.id===p?{...ce,subscribe_url:K}:ce)),Z(ne=>ne&&ne.id===p?{...ne,subscribe_url:K}:ne)}async function je(p){if(p.subscribe_url)return p.subscribe_url;const ne=(await Eo(p.id)).data||null;return ne&&V(p.id,ne),ne}async function fe(p){var K;if(!p.subscribe_url){B(p.id);try{await je(p)}catch(ne){(K=window.showToast)==null||K.call(window,ne instanceof Error?ne.message:s("common.copyFailed"),"error")}finally{B(null)}}}async function Me(p){var K,ne;B(p.id);try{const ce=await je(p);if(!ce){(K=window.showToast)==null||K.call(window,s("common.copyFailed"),"error");return}await le(ce)}catch(ce){(ne=window.showToast)==null||ne.call(window,ce instanceof Error?ce.message:s("common.copyFailed"),"error")}finally{B(null)}}async function Pe(p){var K,ne;B(p.id);try{const ce=await je(p);if(!ce){(K=window.showToast)==null||K.call(window,s("common.copyFailed"),"error");return}v({url:ce,subscriptionId:p.id})}catch(ce){(ne=window.showToast)==null||ne.call(window,ce instanceof Error?ce.message:s("common.copyFailed"),"error")}finally{B(null)}}function dt(p){Z(p),_([]),S(0),y(1),xe(p,1),fe(p)}function Xe(p=q){return F?xe(F,p):Promise.resolve()}function qe(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var ne,ce;E(p.id);try{await Ni(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([Xe(),W(C,M,w)])}catch(Ie){(ce=window.showToast)==null||ce.call(window,Ie instanceof Error?Ie.message:s("subscription.unbindFailed"),"error")}finally{E(null)}}})}function Mt(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var ne,ce;E(p.id);try{await ki(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.banSuccess"),"success"),await Promise.all([Xe(),W(C,M,w)])}catch(Ie){(ce=window.showToast)==null||ce.call(window,Ie instanceof Error?Ie.message:s("subscription.banFailed"),"error")}finally{E(null)}}})}function Ve(p){const K=p.device_limit&&p.device_limit>0?String(p.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:p.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:K})]}),p.device_limit&&p.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(p.device_count/p.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>dt(p),children:[e.jsx(Yn,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function pt(p){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Dt(p.total_used)," / ",Dt(p.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${nc(p)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Dt(p.u),download:Dt(p.d)})})]})}function Gt(p){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Xt,{value:p.uuid,onCopy:()=>le(p.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function At(p){return e.jsxs("div",{className:"subscription-link-stack",children:[Gt(p),p.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.subscribe_url,onClick:()=>void Me(p),disabled:ee===p.id,children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Me(p),disabled:ee===p.id,children:[e.jsx(yt,{size:14}),e.jsx("span",{children:ee===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function Lt(p){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:ee===p.id,onClick:()=>void Pe(p),children:[e.jsx(Zn,{size:14}),ee===p.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),At(p)]})}function It(p,K=!1,ne=""){const ce=Ie=>{me(),Ie()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${K?"subscription-action-menu-fixed":""} ${ne}`.trim(),style:K&&Se?{top:Se.top,left:Se.left}:void 0,onMouseDown:Ie=>Ie.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>ce(()=>tt(p)),children:[e.jsx(Be,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>ce(()=>T(p)),children:[e.jsx(hi,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>ce(()=>dt(p)),children:[e.jsx(Yn,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ee===p.id,onClick:()=>ce(()=>void Me(p)),children:[e.jsx(yt,{size:14}),ee===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ee===p.id,onClick:()=>ce(()=>void Pe(p)),children:[e.jsx(Zn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:j===p.id,onClick:()=>ce(()=>st(p)),children:[e.jsx(ss,{size:14}),s("subscription.resetSecret")]})]})}function Ot(p,K="desktop"){return K==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id&&!Se?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ue(p.id),children:[s("subscription.action")," ",e.jsx(vt,{size:14})]}),Ne===p.id&&!Se?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:me,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ne=>ne.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:p.user_email??s("subscription.userId",{id:p.user_id})}),e.jsxs("small",{children:["#",p.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:me,children:e.jsx(ke,{size:16})})]}),It(p,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ne=>De(p.id,ne.currentTarget),children:[s("subscription.action")," ",e.jsx(vt,{size:14})]}),Ne===p.id&&Se?ri.createPortal(It(p,!0),document.body):null]})}const Nt=Math.ceil(f/Gs),kt=Math.ceil(D/Ws),Rt=Nt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:C<=1||$,onClick:()=>void W(C-1,M,w),children:[e.jsx(jt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:C,total:Nt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:C>=Nt||$,onClick:()=>void W(C+1,M,w),children:[s("common.next"),e.jsx(wt,{size:14})]})]}):null;return e.jsxs(Ge,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:f})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void W(C,M,w),children:[e.jsx(Ae,{size:16}),s($?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:w,onChange:p=>u(p.target.value),children:Jl.map(p=>e.jsx("option",{value:p,children:ec(p,s)},p))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(zn,{size:16}),e.jsx("input",{className:"config-input",value:M,onChange:p=>G(p.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:xt,children:s("common.clearFilter")})]}),I?e.jsx("div",{className:"form-error",children:I}):null,$&&r.length===0?e.jsx(Te,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[r.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",p.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:p.user_id}),p.plan_id?` - ${s("subscription.planId",{id:p.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ks(p.status,s)})}),e.jsx("td",{children:pt(p)}),e.jsx("td",{children:Ve(p)}),e.jsx("td",{children:Ct(p.expired_at,s("subscription.never"))}),e.jsx("td",{children:Ct(p.updated_at,s("subscription.never"))}),e.jsx("td",{children:Ot(p)})]},p.id)),!$&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[r.map(p=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",p.id]}),e.jsx("strong",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ks(p.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),pt(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),Ve(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:Ct(p.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:Ct(p.updated_at,s("subscription.never"))})]})]}),Ot(p,"mobile")]},p.id)),!$&&r.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),Rt,F?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Z(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:F.id})}),e.jsx("p",{children:F.user_email??s("subscription.userId",{id:F.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>Z(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[se?e.jsx("div",{className:"form-error",children:se}):null,O&&l.length===0?e.jsx(Te,{label:s("subscription.slotsLoading")}):null,Lt(F),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[l.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Xt,{value:p.uuid,onCopy:()=>le(p.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Js(p.status)}`,children:Ys(p.status,s)})}),e.jsx("td",{children:p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>le(p.hwid),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsx("td",{children:Ct(p.first_seen_at,"-")}),e.jsx("td",{children:Ct(p.last_seen_at,"-")}),e.jsx("td",{children:Zs(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:j===p.id,onClick:()=>qe(p),children:[e.jsx(Qn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:j===p.id,onClick:()=>Mt(p),children:[e.jsx(Ft,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},p.id)),!O&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[l.map(p=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Js(p.status)}`,children:Ys(p.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Xt,{value:p.uuid,onCopy:()=>le(p.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>le(p.hwid),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:Ct(p.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:Ct(p.last_seen_at,"-")})]})]}),Zs(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:j===p.id,onClick:()=>qe(p),children:[e.jsx(Qn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:j===p.id,onClick:()=>Mt(p),children:[e.jsx(Ft,{size:14}),s("subscription.ban")]}):null]}):null]},p.id)),!O&&l.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),kt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:q<=1||O,onClick:()=>void Xe(q-1),children:[e.jsx(jt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:q,total:kt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:q>=kt||O,onClick:()=>void Xe(q+1),children:[s("common.next"),e.jsx(wt,{size:14})]})]}):null]})]})}):null,We?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>v(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:We.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>v(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(We.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:We.url})]})]})}):null,k?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:k.id})}),e.jsx("p",{children:k.user_email??s("subscription.userId",{id:k.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>R(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:nt,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:U.plan_id,onChange:p=>H(K=>({...K,plan_id:p.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),c.map(p=>e.jsxs("option",{value:p.id,children:["#",p.id," - ",p.name]},p.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.transfer_enable,onChange:p=>H(K=>({...K,transfer_enable:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.u,onChange:p=>H(K=>({...K,u:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.d,onChange:p=>H(K=>({...K,d:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:U.device_limit,onChange:p=>H(K=>({...K,device_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:U.speed_limit,onChange:p=>H(K=>({...K,speed_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:p=>H(K=>({...K,expired_at:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:U.status,onChange:p=>H(K=>({...K,status:p.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:U.auto_renewal,onChange:p=>H(K=>({...K,auto_renewal:p.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:U.name_sni,onChange:p=>H(K=>({...K,name_sni:p.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:U.network_settings,onChange:p=>H(K=>({...K,network_settings:p.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:U.remarks,onChange:p=>H(K=>({...K,remarks:p.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:j===k.id,children:j===k.id?s("common.processing"):s("common.save")})]})]})]})}):null,Q?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>de(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:Q.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>de(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:re,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:Q.user_email??"",children:Q.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",Q.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:pe(Q.plan_id),children:pe(Q.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:$e.period,onChange:p=>Ee(K=>({...K,period:p.target.value})),children:Zl.map(p=>e.jsx("option",{value:p,children:tc(p,s)},p))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:$e.total_amount,onChange:p=>Ee(K=>({...K,total_amount:p.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>de(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:Le,children:s(Le?"common.processing":"common.save")})]})]})]})}):null]})}const Qs=15,ic=["email","user_id","node","hwid","user_agent","last_ip"];function Yt(n){return n?new Date(n*1e3).toLocaleString():"-"}function zt(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let r=t,a=0;for(;r>=1024&&a<s.length-1;)r/=1024,a+=1;return`${r>=10||a===0?r.toFixed(0):r.toFixed(2)} ${s[a]}`}function ac(n){return["user_id","subscription_id","node","node_type","node_id","online_ip"].includes(n)?"=":"like"}function oc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");case"online_ip":return t("device.filterOnlineIp");default:return""}}function Xs(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function un(n){return(n.online_ips??[]).join(", ")||"-"}function mn(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function rc(n){return String(n.hwid??"").trim()!==""}function lc(n){var f,b,C,h;const t=new URLSearchParams(n),s=[],r=(f=t.get("online_ip"))==null?void 0:f.trim();r&&s.push({key:"online_ip",condition:"=",value:r});const a=(b=t.get("node_type"))==null?void 0:b.trim(),c=(C=t.get("node_id"))==null?void 0:C.trim();if(a&&c)return{visible:{field:"node",value:`${a}:${c}`},hidden:s};if(c)return{visible:{field:"node",value:c},hidden:s};const d=["node","hwid","user_agent","last_ip","email","user_id"];for(const w of d){const u=(h=t.get(w))==null?void 0:h.trim();if(u)return{visible:{field:w,value:u},hidden:s}}return{visible:null,hidden:s}}function cc(){const n=He(),t=tn(),{t:s}=ue(),[r,a]=o.useState([]),[c,d]=o.useState(0),[f,b]=o.useState(1),[C,h]=o.useState("email"),[w,u]=o.useState(""),[M,G]=o.useState([]),[$,z]=o.useState(!0),[I,P]=o.useState(""),[k,R]=o.useState(null),[U,H]=o.useState(null),[j,E]=o.useState(null),F=o.useCallback(async(g=1,ee="",B="email",Q=[])=>{z(!0),P("");try{const de=[];ee.trim()&&de.push({key:B,condition:ac(B),value:ee.trim()}),Q.forEach(Ee=>{String(Ee.value??"").trim()&&de.push(Ee)});const $e=await wi(g,Qs,de.length?de:void 0);a($e.data),d($e.total),b(g)}catch(de){P(de instanceof Error?de.message:s("device.loadFailed"))}finally{z(!1)}},[s]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}const g=lc(t.search);if(G(g.hidden),g.visible){h(g.visible.field),u(g.visible.value),F(1,g.visible.value,g.visible.field,g.hidden);return}F(1,"","email",g.hidden)},[F,n,t.search]),o.useEffect(()=>{if(j===null)return;function g(B){const Q=B.target;Q!=null&&Q.closest(".device-action-wrap")||E(null)}function ee(B){B.key==="Escape"&&E(null)}return document.addEventListener("pointerdown",g),document.addEventListener("keydown",ee),()=>{document.removeEventListener("pointerdown",g),document.removeEventListener("keydown",ee)}},[j]);function Z(g){g.preventDefault(),F(1,w,C,M)}function l(){if(u(""),G([]),t.search){n.replace("/device");return}F(1,"",C,[])}async function _(g){var B;if(!g.hwid)return;const ee=await Pt(g.hwid);(B=window.showToast)==null||B.call(window,s(ee?"device.copySuccess":"common.copyFailed"),ee?"success":"error")}async function D(g){var B;const ee=await Pt(g.uuid);(B=window.showToast)==null||B.call(window,s(ee?"device.copyUuidSuccess":"common.copyFailed"),ee?"success":"error")}function S(g){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var B,Q;R(g.id);try{await Ni(g.id),(B=window.showToast)==null||B.call(window,s("device.unbindSuccess"),"success"),await F(f,w,C,M)}catch(de){(Q=window.showToast)==null||Q.call(window,de instanceof Error?de.message:s("device.unbindFailed"),"error")}finally{R(null)}}})}function q(g){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var B,Q;R(g.id);try{await ki(g.id),(B=window.showToast)==null||B.call(window,s("device.banSuccess"),"success"),await F(f,w,C,M)}catch(de){(Q=window.showToast)==null||Q.call(window,de instanceof Error?de.message:s("device.banFailed"),"error")}finally{R(null)}}})}function y(g){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:s("device.resetConfirm",{user:g.user_email??`#${g.user_id}`}),onConfirm:async()=>{var B,Q;H(g.user_id);try{await Io(g.user_id),(B=window.showToast)==null||B.call(window,s("device.resetSuccess"),"success"),await F(f,w,C,M)}catch(de){(Q=window.showToast)==null||Q.call(window,de instanceof Error?de.message:s("device.resetFailed"),"error")}finally{H(null)}}})}function O(g){E(null),g()}function L(g,ee){const B=ee==="mobile"?-g.id:g.id,Q=j===B,de=rc(g);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${Q?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>E(Q?null:B),children:[s("device.action")," ",e.jsx(vt,{size:14})]}),Q?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[de?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:k===g.id,onClick:()=>O(()=>S(g)),children:[e.jsx(Qn,{size:14}),s("device.unbind")]}),g.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:k===g.id,onClick:()=>O(()=>q(g)),children:[e.jsx(Ft,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===g.user_id,onClick:()=>O(()=>y(g)),children:[e.jsx(ja,{size:14}),s("device.resetUser")]})]}):null]})}const se=Math.ceil(c/Qs);return e.jsxs(Ge,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:c})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void F(f,w,C,M),children:[e.jsx(Ae,{size:16}),s($?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:Z,children:[e.jsx("select",{className:"config-input filter-select",value:C,onChange:g=>h(g.target.value),children:ic.map(g=>e.jsx("option",{value:g,children:oc(g,s)},g))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(zn,{size:16}),e.jsx("input",{className:"config-input",value:w,onChange:g=>u(g.target.value),placeholder:s(C==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:s("device.clear")})]}),I?e.jsx("div",{className:"form-error",children:I}):null,$&&r.length===0?e.jsx(Te,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[r.map(g=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:g.user_email??"-"}),e.jsxs("small",{children:["ID: ",g.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[g.plan_name??"-",g.user_plan_id?` #${g.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Xs(g.status,s)}),e.jsxs("span",{className:`online-badge ${g.is_online?"online":"offline"}`,children:[g.is_online?e.jsx(ys,{size:14}):e.jsx(fs,{size:14}),g.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Xt,{value:g.uuid,onCopy:()=>D(g),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),g.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:g.hwid,onClick:()=>_(g),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:g.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:g.user_agent??"",children:g.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${g.last_ip??"-"} / ${g.first_ip??"-"}`,children:[g.last_ip??"-",g.first_ip?` (${g.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${zt(g.device_upload)} / ${s("device.download")}: ${zt(g.device_download)}`,children:[zt(g.device_used_traffic)," / ",s("device.upload"),": ",zt(g.device_upload)," / ",s("device.download"),": ",zt(g.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${un(g)} / ${mn(g)}`,children:[s("device.onlineIps"),": ",un(g)," / ",s("device.onlineNodes"),": ",mn(g)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Yt(g.first_seen_at)," / ",s("device.lastSeen"),": ",Yt(g.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:L(g,"mobile")})]},g.id)),!$&&r.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[r.map(g=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:g.user_email??"-"}),e.jsxs("small",{children:["ID: ",g.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[g.plan_name??"-",g.user_plan_id?` #${g.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Xs(g.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:zt(g.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",zt(g.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",zt(g.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${g.is_online?"online":"offline"}`,children:[g.is_online?e.jsx(ys,{size:14}):e.jsx(fs,{size:14}),g.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:un(g),children:[s("device.onlineIps"),": ",un(g)]}),e.jsxs("small",{title:mn(g),children:[s("device.onlineNodes"),": ",mn(g)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Yt(g.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Xt,{value:g.uuid,onCopy:()=>D(g),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),g.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:g.hwid,onClick:()=>_(g),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:g.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:g.user_agent??"",children:g.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:g.last_ip??"-"}),e.jsx("small",{children:g.first_ip?`${s("device.firstIp")}: ${g.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Yt(g.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Yt(g.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:L(g,"desktop")})]},g.id)),!$&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),se>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:f<=1||$,onClick:()=>void F(f-1,w,C,M),children:[e.jsx(jt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:f,total:se})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:f>=se||$,onClick:()=>void F(f+1,w,C,M),children:[s("device.next"),e.jsx(wt,{size:14})]})]}):null]})]})}const dc={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ds(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return ds(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Vs(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:ds(n.plan_id)}:{...dc}}function qn(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function pc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function uc(n){return Number(n)===1}function ei(n,t,s){if(!n.length)return s("webcon.allPlans");const r=new Map(t.map(a=>[Number(a.id),a.name]));return n.map(a=>r.get(a)??`#${a}`).join(", ")}function Tt(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function mc(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState([]),[d,f]=o.useState(null),[b,C]=o.useState(!0),[h,w]=o.useState(!1),[u,M]=o.useState(null),[G,$]=o.useState(""),z=o.useCallback(async()=>{C(!0),$("");try{const[j,E]=await Promise.all([Zo(),Et()]);r(j),c(E)}catch(j){$(j instanceof Error?j.message:t("webcon.toastLoadFailed"))}finally{C(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}z()},[z,n]);const I=o.useMemo(()=>a.map(j=>({id:Number(j.id),name:j.name})),[a]);function P(j,E){f(F=>F&&{...F,[j]:E})}function k(j,E){f(F=>{if(!F)return F;const Z=E?Array.from(new Set([...F.plan_ids,j])):F.plan_ids.filter(l=>l!==j);return{...F,plan_ids:Z}})}async function R(j){var F,Z;if(j.preventDefault(),!d)return;const E=qn(d.domain);w(!0),$("");try{await Qo({id:d.id,email:d.email.trim(),domain:E,title:d.title.trim(),description:d.description.trim()||null,logo:d.logo.trim()||null,background_url:d.background_url.trim()||null,custom_html:d.custom_html||null,plan_ids:d.plan_ids,plan_id:d.plan_ids}),f(null),(F=window.showToast)==null||F.call(window,t("webcon.toastSaveSuccess"),"success"),await z()}catch(l){const _=l instanceof Error?l.message:t("webcon.toastSaveFailed");$(_),(Z=window.showToast)==null||Z.call(window,_,"error")}finally{w(!1)}}async function U(j){var E,F;M(j.id);try{await Vo(j.id),(E=window.showToast)==null||E.call(window,t("webcon.toastToggleSuccess"),"success"),await z()}catch(Z){const l=Z instanceof Error?Z.message:t("webcon.toastToggleFailed");$(l),(F=window.showToast)==null||F.call(window,l,"error")}finally{M(null)}}function H(j){var E;(E=window.showConfirm)==null||E.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var F,Z;M(j.id),$("");try{await Xo(j.id),(F=window.showToast)==null||F.call(window,t("webcon.toastDeleteSuccess"),"success"),await z()}catch(l){const _=l instanceof Error?l.message:t("webcon.toastDeleteFailed");$(_),(Z=window.showToast)==null||Z.call(window,_,"error")}finally{M(null)}}})}return e.jsxs(Ge,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void z(),children:[e.jsx(Ae,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(Vs()),children:[e.jsx(at,{size:16}),t("webcon.add")]})]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,b&&s.length===0?e.jsx(Te,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(j=>{var F;const E=ds(j.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",j.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${uc(j.status)?"active":""}`,type:"button",disabled:u===j.id,onClick:()=>void U(j),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:j.email??"-"}),e.jsx("small",{children:Number(j.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:j.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((F=window.settings)==null?void 0:F.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:j.title||"-"}),e.jsx("small",{children:j.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(da,{size:13}),j.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(nn,{size:13}),j.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:ei(E,I,t)}),e.jsx("small",{children:E.length?t("webcon.selectedCount",{count:E.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:pc(j.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>f(Vs(j)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:u===j.id,onClick:()=>H(j),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},j.id)}),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),d?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>f(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:j=>j.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:d.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>f(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:R,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:d.email,onChange:j=>P("email",j.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:d.domain,onChange:j=>P("domain",j.target.value),onBlur:j=>P("domain",qn(j.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:d.title,onChange:j=>P("title",j.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.description")),e.jsx("input",{className:"config-input",value:d.description,onChange:j=>P("description",j.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:d.logo,onChange:j=>P("logo",j.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:d.background_url,onChange:j=>P("background_url",j.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[Tt(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[I.map(j=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:d.plan_ids.includes(j.id),onChange:E=>k(j.id,E.target.checked)}),e.jsx("span",{children:j.name})]},j.id)),I.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[Tt(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:d.custom_html,onChange:j=>P("custom_html",j.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:d.logo?e.jsx("img",{src:d.logo,alt:""}):e.jsx(ya,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:d.title||t("webcon.previewTitle")}),e.jsx("span",{children:qn(d.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(is,{size:12})," ",ei(d.plan_ids,I,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ti(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Bn(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function hc(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(null),[d,f]=o.useState(!0),[b,C]=o.useState(!1),[h,w]=o.useState(""),[u,M]=o.useState(""),G=o.useCallback(async()=>{f(!0),w("");try{r(await Fo())}catch(P){w(P instanceof Error?P.message:t("notice.loadFailed"))}finally{f(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}G()},[G,n]);async function $(P){var k,R;if(P.preventDefault(),!!a){C(!0),w(""),M("");try{const U=a.tags?a.tags.split(",").map(H=>H.trim()).filter(Boolean):[];await Ao({id:a.id,title:a.title,content:a.content,img_url:a.img_url||null,tags:U.length?U:null}),c(null),(k=window.showToast)==null||k.call(window,t("notice.saveSuccess"),"success"),await G()}catch(U){(R=window.showToast)==null||R.call(window,U instanceof Error?U.message:t("notice.saveFailed"),"error")}finally{C(!1)}}}async function z(P){var k;try{await Ro(P),await G()}catch(R){(k=window.showToast)==null||k.call(window,R instanceof Error?R.message:t("notice.toggleFailed"),"error")}}async function I(P){var k;(k=window.showConfirm)==null||k.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var R,U;try{await Oo(P),(R=window.showToast)==null||R.call(window,t("notice.deleteSuccess"),"success"),await G()}catch(H){(U=window.showToast)==null||U.call(window,H instanceof Error?H.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:d,children:[e.jsx(Ae,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>c(Bn()),children:[e.jsx(at,{size:16}),t("notice.addNotice")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,d&&s.length===0?e.jsx(Te,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(P=>{var k;return e.jsxs("tr",{children:[e.jsx("td",{children:P.id}),e.jsx("td",{children:e.jsx("strong",{children:P.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${P.show?"active":""}`,type:"button",onClick:()=>void z(P.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((k=P.tags)==null?void 0:k.map((R,U)=>e.jsx("span",{className:"tag",children:R},U)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:ti(P.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>c(Bn(P)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(P.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},P.id)}),!d&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(P=>e.jsxs("div",{className:`notice-mobile-card ${P.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",P.id]})}),e.jsx("button",{className:`admin-switch ${P.show?"active":""}`,type:"button",onClick:()=>void z(P.id),"aria-label":P.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:P.title}),e.jsx("div",{className:"notice-tags",children:P.tags&&P.tags.length>0?P.tags.map((k,R)=>e.jsx("span",{className:"tag-badge",children:k},R)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",ti(P.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>c(Bn(P)),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void I(P.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},P.id)),!d&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:$,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:P=>c({...a,title:P.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:a.content,onChange:P=>c({...a,content:P.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:a.img_url,onChange:P=>c({...a,img_url:P.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:a.tags,onChange:P=>c({...a,tags:P.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function Gn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function xc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,r,a)=>a.slice(r+t.length,r+t.length+2)==="//"?t:`${s}: `):""}const ni=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Wn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function bc(){var O;const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(null),[d,f]=o.useState(!1),[b,C]=o.useState(null),[h,w]=o.useState(""),[u,M]=o.useState(!0),[G,$]=o.useState(!1),[z,I]=o.useState(!1),[P,k]=o.useState(""),R=o.useRef(null),[U,H]=o.useState([]),[j,E]=o.useState(null),F=o.useCallback(async()=>{M(!0),k("");try{r(await Ho())}catch(L){k(L instanceof Error?L.message:"Load failed")}finally{M(!1)}},[]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}F(),Et().then(L=>{L&&H(L)}).catch(()=>{})},[F,n]),o.useEffect(()=>{var L;(L=R.current)==null||L.scrollIntoView({behavior:"smooth"})},[a]);async function Z(L){var se;C(L),w(""),c(null),E(null),f(!0);try{const g=await En(L);if(c(g),g&&g.user_id)try{const ee=await yn(g.user_id);ee&&ee.data&&E(ee.data)}catch(ee){console.error("Failed to load user info:",ee)}}catch{(se=window.showToast)==null||se.call(window,"Failed to load message thread","error")}finally{f(!1)}}async function l(L){var se,g;if(L.preventDefault(),!(!b||!h.trim())){$(!0),k("");try{await Uo(b,h),w(""),(se=window.showToast)==null||se.call(window,"Reply sent!","success");try{const ee=await En(b);c(ee)}catch{}await F()}catch(ee){(g=window.showToast)==null||g.call(window,ee instanceof Error?ee.message:"Reply failed","error")}finally{$(!1)}}}async function _(L){var se;(se=window.showConfirm)==null||se.call(window,{message:"Close this ticket?",onConfirm:async()=>{var g,ee;k("");try{await qo(L),(g=window.showToast)==null||g.call(window,"Ticket closed!","success"),b===L&&(C(null),c(null)),await F()}catch(B){k(B instanceof Error?B.message:"Close failed"),(ee=window.showToast)==null||ee.call(window,B instanceof Error?B.message:"Close failed","error")}}})}function D(){var ee,B,Q;if(!a||!j)return;const L=Number(a.withdraw_amount??0),se=Number(j.commission_balance??0);if(a.level!==3||L<=0){(ee=window.showToast)==null||ee.call(window,t("ticket.noWithdrawAmount"),"error");return}if(se<L){(B=window.showToast)==null||B.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const g=`${Je(L)} ${t("ticket.currencyUnit")}`;(Q=window.showConfirm)==null||Q.call(window,{message:t("ticket.confirmCommissionMessage",{amount:g}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var de,$e,Ee;I(!0),k("");try{const _e=((de=(await Bo(a.id)).data)==null?void 0:de.amount)??L,Ne=`${Je(_e)} ${t("ticket.currencyUnit")}`,ge=await En(a.id);if(c(ge),ge!=null&&ge.user_id){const Se=await yn(ge.user_id);E(Se.data)}await F(),($e=window.showToast)==null||$e.call(window,t("ticket.commissionConfirmSuccess",{amount:Ne}),"success")}catch(Le){(Ee=window.showToast)==null||Ee.call(window,Le instanceof Error?Le.message:t("ticket.commissionConfirmFailed"),"error")}finally{I(!1)}}})}const S=Number((j==null?void 0:j.commission_balance)??0),q=Number((a==null?void 0:a.withdraw_amount)??0),y=(a==null?void 0:a.level)===3&&q>0&&S>=q;return e.jsxs(Ge,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:F,disabled:u,children:[e.jsx(Ae,{size:16}),t("common.refresh")]})})]}),P?e.jsx("div",{className:"form-error",children:P}):null,u&&s.length===0?e.jsx(Te,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(L=>{const se=ni(L.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:L.id}),e.jsx("td",{children:e.jsx("strong",{children:L.subject})}),e.jsxs("td",{children:["#",L.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Wn(L.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})}),e.jsx("td",{children:L.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:Gn(L.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:L.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(L.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(L.id),children:[e.jsx(Jn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(L.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})})]},L.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(L=>{const se=ni(L.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:L.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Wn(L.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",L.id]})]}),e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",L.user_id]})]}),e.jsx("span",{children:L.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:Gn(L.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:L.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(L.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(L.id),children:[e.jsx(Jn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(L.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})]},L.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),b!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a?`${t("ticket.ticketDetail")}: ${a.subject}`:`${t("ticket.ticketDetail")} #${b}`}),e.jsxs("p",{children:[t("ticket.user"),": #",a==null?void 0:a.user_id," | ",t("ticket.level"),": ",a!=null?Wn(a.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{C(null),c(null)},children:e.jsx(ke,{size:18})})]}),j&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:j.email,children:j.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((O=U.find(L=>L.id===j.plan_id))==null?void 0:O.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Je(j.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Je(j.commission_balance)," ",t("ticket.currencyUnit")]})]}),(a==null?void 0:a.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:q>0?`${Je(q)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:j.expired_at?new Date(j.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(a==null?void 0:a.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:D,disabled:z||!y,children:[e.jsx(ea,{size:14}),t(z?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),d?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Te,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[a!=null&&a.message&&a.message.length>0?a.message.map(L=>{const se=L.is_me,g=se?L.user_email||t("ticket.staff"):`${t("ticket.user")} #${L.user_id}`;return e.jsxs("div",{className:`chat-message ${se?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:xc(L.message)}),e.jsxs("div",{className:"chat-meta",children:[g," • ",Gn(L.created_at)]})]},L.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:R})]}),(a==null?void 0:a.status)===0?e.jsx("form",{className:"modal-form",onSubmit:l,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:h,onChange:L=>w(L.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G||!h.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(mi,{size:14}),G?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function si(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const ii={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ai(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function gc(){const n=He(),{t}=ue(),[s,r]=o.useState([]),[a,c]=o.useState(null),[d,f]=o.useState(!0),[b,C]=o.useState(!1),[h,w]=o.useState(""),[u,M]=o.useState(""),G=o.useCallback(async()=>{f(!0),w("");try{r(await Go())}catch(k){w(k instanceof Error?k.message:t("knowledge.loadFailed"))}finally{f(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}G()},[G,n]);async function $(k){var R;try{const U=await Wo(k.id);c(ai(U))}catch(U){(R=window.showToast)==null||R.call(window,U instanceof Error?U.message:t("knowledge.detailFailed"),"error")}}async function z(k){var R,U;if(k.preventDefault(),!!a){C(!0),w(""),M("");try{await Ko({id:a.id,category:a.category,title:a.title,body:a.body,language:a.language||null,sort:a.sort?Number(a.sort):null}),c(null),(R=window.showToast)==null||R.call(window,t("knowledge.saveSuccess"),"success"),await G()}catch(H){(U=window.showToast)==null||U.call(window,H instanceof Error?H.message:t("knowledge.saveFailed"),"error")}finally{C(!1)}}}async function I(k){var R;try{await Jo(k),await G()}catch(U){(R=window.showToast)==null||R.call(window,U instanceof Error?U.message:t("knowledge.toggleFailed"),"error")}}async function P(k){var R;(R=window.showConfirm)==null||R.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var U,H;try{await Yo(k),(U=window.showToast)==null||U.call(window,t("knowledge.deleteSuccess"),"success"),await G()}catch(j){(H=window.showToast)==null||H.call(window,j instanceof Error?j.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:d,children:[e.jsx(Ae,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>c(ai()),children:[e.jsx(at,{size:16}),t("knowledge.addArticle")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,d&&s.length===0?e.jsx(Te,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(k=>e.jsxs("tr",{children:[e.jsx("td",{children:k.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:k.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:k.title})}),e.jsx("td",{children:k.language&&ii[k.language]||k.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void I(k.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:k.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:si(k.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(k),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void P(k.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},k.id)),!d&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(k=>e.jsxs("div",{className:`knowledge-mobile-card ${k.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",k.id]}),k.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",k.sort]})]}),e.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:()=>void I(k.id),"aria-label":k.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:k.title}),e.jsxs("div",{className:"card-meta",children:[k.category&&e.jsx("span",{className:"category-badge",children:k.category}),k.language&&e.jsx("span",{className:"lang-badge",children:ii[k.language]||k.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",si(k.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void $(k),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void P(k.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},k.id)),!d&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:z,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:a.category,onChange:k=>c({...a,category:k.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:k=>c({...a,title:k.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:a.body,onChange:k=>c({...a,body:k.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:a.language,onChange:k=>c({...a,language:k.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:a.sort,onChange:k=>c({...a,sort:k.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function fc(){const n=He(),{t}=ue(),[s,r]=o.useState(null),[a,c]=o.useState(null),[d,f]=o.useState(null),[b,C]=o.useState(""),[h,w]=o.useState(!0),[u,M]=o.useState(""),G=o.useCallback(async()=>{w(!0),M("");try{const[z,I,P,k]=await Promise.all([er().catch(()=>({data:{}})),sr().catch(()=>({data:{}})),ir().catch(()=>({data:[]})),ar().catch(()=>({data:""}))]);r(z.data),c(I.data),f(P.data),C(typeof k.data=="string"?k.data:"")}catch(z){M(z instanceof Error?z.message:t("queue.toastLoadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!Re()){n.replace("/login");return}G()},[G,n]);function $(z,I,P){return z?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[P," ",I]}),e.jsx("div",{className:"queue-grid",children:Object.entries(z).map(([k,R])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:k}),e.jsx("strong",{children:typeof R=="object"?JSON.stringify(R):String(R??"—")})]},k))})]}):null}return e.jsxs(Ge,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:h,children:[e.jsx(Ae,{size:16}),t("common.refresh")]})})]}),u?e.jsx("div",{className:"form-error",children:u}):null,h?e.jsx(Te,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[$(s,t("queue.systemStatus"),e.jsx(bn,{size:18})),$(a,t("queue.queueStats"),e.jsx(is,{size:18})),d&&d.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Ji,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(d,null,2)})]}):null,b?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(ia,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}function vc(){return e.jsx(Da,{children:e.jsxs(Ri,{children:[e.jsx(Oe,{path:"/login",element:e.jsx(vr,{})}),e.jsx(Oe,{path:"/dashboard",element:e.jsx(Sr,{})}),e.jsx(Oe,{path:"/config/system",element:e.jsx(Dr,{})}),e.jsx(Oe,{path:"/config/payment",element:e.jsx(Or,{})}),e.jsx(Oe,{path:"/config/theme",element:e.jsx(Ur,{})}),e.jsx(Oe,{path:"/server/manage",element:e.jsx(Sl,{})}),e.jsx(Oe,{path:"/server/group",element:e.jsx(Cl,{})}),e.jsx(Oe,{path:"/server/route",element:e.jsx(Pl,{})}),e.jsx(Oe,{path:"/plan",element:e.jsx(Ll,{})}),e.jsx(Oe,{path:"/order",element:e.jsx(Fl,{})}),e.jsx(Oe,{path:"/coupon",element:e.jsx(Al,{})}),e.jsx(Oe,{path:"/giftcard",element:e.jsx(Rl,{})}),e.jsx(Oe,{path:"/user",element:e.jsx(Kl,{})}),e.jsx(Oe,{path:"/subscription",element:e.jsx(sc,{})}),e.jsx(Oe,{path:"/device",element:e.jsx(cc,{})}),e.jsx(Oe,{path:"/webcon",element:e.jsx(mc,{})}),e.jsx(Oe,{path:"/notice",element:e.jsx(hc,{})}),e.jsx(Oe,{path:"/ticket",element:e.jsx(bc,{})}),e.jsx(Oe,{path:"/knowledge",element:e.jsx(gc,{})}),e.jsx(Oe,{path:"/queue",element:e.jsx(fc,{})}),e.jsx(Oe,{path:"/",element:e.jsx(us,{to:"/dashboard",replace:!0})}),e.jsx(Oe,{path:"*",element:e.jsx(us,{to:"/dashboard",replace:!0})})]})})}export{vc as default};
