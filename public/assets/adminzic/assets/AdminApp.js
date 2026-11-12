import{b as o,j as e,c as Di,u as nn,L as Fi,r as oi,a as Ai,R as Ae,N as ps}from"./index.js";const ts=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],ri="admin-locale",Wn="vi-VN",Oi="/assets/adminzic",li=o.createContext(null);function Ri(){if(typeof window>"u")return Wn;const n=localStorage.getItem(ri);return n&&ts.some(t=>t.code===n)?n:Wn}function Hi(n,t){return t?Object.entries(t).reduce((s,[r,a])=>s.replaceAll(`{${r}}`,String(a)),n):n}function Ui(n){return new Promise((t,s)=>{var l;if(typeof window>"u"){t({});return}const r=(l=window.AdminNextI18n)==null?void 0:l[n];if(r){t(r);return}const a=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(a){a.addEventListener("load",()=>{var w;t(((w=window.AdminNextI18n)==null?void 0:w[n])??{})}),a.addEventListener("error",s);return}const d=document.createElement("script");d.src=`${Oi}/i18n/${n}.js`,d.async=!0,d.dataset.adminNextLocale=n,d.onload=()=>{var w;return t(((w=window.AdminNextI18n)==null?void 0:w[n])??{})},d.onerror=s,document.head.appendChild(d)})}function qi({children:n}){const[t,s]=o.useState(Wn),[r,a]=o.useState({}),[d,l]=o.useState(!0);o.useEffect(()=>{s(Ri())},[]);const w=o.useCallback(h=>{s(h),typeof window<"u"&&localStorage.setItem(ri,h)},[]);o.useEffect(()=>{let h=!0;return l(!0),Ui(t).then(v=>{h&&a(v)}).finally(()=>{h&&l(!1)}),()=>{h=!1}},[t]);const b=o.useCallback((h,v)=>Hi(r[h]??h,v),[r]),S=o.useMemo(()=>({locale:t,loading:d,setLocale:w,t:b}),[t,d,w,b]);return e.jsx(li.Provider,{value:S,children:n})}function me(){const n=o.useContext(li);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ci=(...n)=>n.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=o.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:a="",children:d,iconNode:l,...w},b)=>o.createElement("svg",{ref:b,...Gi,width:t,height:t,stroke:n,strokeWidth:r?Number(s)*24/Number(t):s,className:ci("lucide",a),...w},[...l.map(([S,h])=>o.createElement(S,h)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(n,t)=>{const s=o.forwardRef(({className:r,...a},d)=>o.createElement(Wi,{ref:d,iconNode:t,className:ci(`lucide-${Bi(n)}`,r),...a}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ee("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=ee("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ee("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=ee("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=ee("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ee("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=ee("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=ee("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=ee("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=ee("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=ee("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=ee("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=ee("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=ee("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=ee("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=ee("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=ee("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=ee("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=ee("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=ee("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=ee("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=ee("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=ee("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=ee("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=ee("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=ee("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=ee("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=ee("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=ee("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=ee("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=ee("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=ee("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=ee("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=ee("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=ee("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=ee("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=ee("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=ee("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=ee("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=ee("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ee("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=ee("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=ee("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=ee("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=ee("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=ee("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=ee("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ee("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=ee("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=ee("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=ee("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=ee("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ee("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=ee("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=ee("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ee("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=ee("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ee("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=ee("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=ee("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ee("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=ee("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=ee("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=ee("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
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
 */const za=ee("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ee("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=ee("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ee("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=ee("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=ee("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=ee("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Ea=o.createContext(null);function Ma({children:n}){const[t,s]=o.useState([]),[r,a]=o.useState(null),d=o.useCallback((S,h="success")=>{const v=Math.random().toString(36).substring(2,9);s(u=>[...u,{id:v,message:S,type:h}]),setTimeout(()=>{s(u=>u.filter($=>$.id!==v))},5e3)},[]),l=o.useCallback(S=>{a(S)},[]);o.useEffect(()=>{typeof window<"u"&&(window.showToast=d,window.showConfirm=l)},[d,l]);const w=async()=>{if(r){try{await r.onConfirm()}catch(S){console.error("Error in onConfirm:",S)}a(null)}},b=()=>{r&&(r.onCancel&&r.onCancel(),a(null))};return e.jsxs(Ea.Provider,{value:{showToast:d,showConfirm:l},children:[n,e.jsx("div",{className:"toast-container",children:t.map(S=>{let h=ca;return S.type==="success"&&(h=di),S.type==="error"&&(h=Qi),S.type==="warning"&&(h=bs),e.jsxs("div",{className:`toast-card toast-${S.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(h,{size:18})}),e.jsx("div",{className:"toast-message",children:S.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(v=>v.filter(u=>u.id!==S.id)),children:e.jsx(_e,{size:14})})]},S.id)})}),r&&e.jsx("div",{className:"confirm-backdrop",onClick:b,children:e.jsxs("div",{className:"confirm-card",onClick:S=>S.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(bs,{size:22})}),e.jsx("h3",{className:"confirm-title",children:r.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:r.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:r.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:w,children:r.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function La({children:n}){return e.jsx(qi,{children:e.jsx(Ma,{children:n})})}const Ia="/api/v3";var ai;const Y=typeof window<"u"&&((ai=window.settings)==null?void 0:ai.secure_path)||"ZicFree123",hn="authorization";function Da(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let r=0;r<s.length;r++){let a=s[r];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(t)===0)try{const d=a.substring(t.length,a.length),l=decodeURIComponent(d),w=JSON.parse(l);return w&&typeof w=="object"&&"value"in w?w.value:l}catch{try{return decodeURIComponent(a.substring(t.length,a.length))}catch{return a.substring(t.length,a.length)}}}return null}function Fa(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const a=JSON.stringify({site:"ZicNet",value:t}),d=window.location.protocol==="https:",l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",w=new Date;w.setTime(w.getTime()+s*24*60*60*1e3);const b=`expires=${w.toUTCString()}`,S=l?"":`domain=${window.location.hostname};`;let h=`${n}=${encodeURIComponent(a)}; ${b}; ${S} path=/`;d&&(h+="; secure"),h+="; SameSite=Lax",document.cookie=h;try{window.localStorage.setItem(`cookie_${n}`,a)}catch{}}function Aa(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],r=["/","/dashboard","/user","/admin"];s.forEach(a=>{r.forEach(d=>{const l=a?` domain=${a};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${l} path=${d};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function hi(){if(typeof window>"u")return null;let n=window.localStorage.getItem(hn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(hn,n)}catch{}if(!n&&(n=Da("auth_data"),n))try{window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function Oa(n,t){const s=n.startsWith("/")?n:`/${n}`,r=new URL(`${Ia}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([a,d])=>{d!==void 0&&r.searchParams.set(a,String(d))}),r.toString()}function He(){return!!hi()}function Ra(n){typeof window>"u"||(window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n),Fa("auth_data",n,36500))}function xi(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(a=>{window.localStorage.removeItem(a)}),["token","auth_data","authorization","vuex","user","auth"].forEach(a=>{window.sessionStorage.removeItem(a)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(a=>{s.forEach(d=>{document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${d};`}),document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Aa(a)})}async function K(n,t={}){const s={},r=t.method??"GET";if(r!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const b=hi();b&&(s.authorization=b)}const a=await fetch(Oa(n,t.params),{method:r,headers:s,body:r==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),l=(a.headers.get("content-type")||"").includes("application/json"),w=l?await a.json():await a.text();if(!a.ok){const b=typeof w=="object"&&w&&"message"in w?String(w.message):`Request failed with status ${a.status}`;throw(a.status===401||a.status===403)&&t.auth!==!1&&(xi(),window.location.hash="/login"),new Error(b)}if(!l&&typeof w=="string"&&(w.trim().startsWith("<!DOCTYPE html")||w.trim().startsWith("<html")||w.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return w}async function Ha(n,t){return K("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Ua(){const n=`/${Y}/stat`,[t,s]=await Promise.all([K(`${n}/getOverride`),K(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function qa(n){return(await K(`/${Y}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function Ba(n){return(await K(`/${Y}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ga(n){return(await K(`/${Y}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Wa(){return(await K(`/${Y}/stat/getNodeOnlineStats`)).data}async function Ka(n,t=10){return(await K(`/${Y}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function bi(){return(await K(`/${Y}/config/fetch`)).data}async function gi(n){return K(`/${Y}/config/save`,{method:"POST",body:n})}async function Ya(){return(await K(`/${Y}/config/getEmailTemplate`)).data}async function Ja(){return(await K(`/${Y}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Za(){return K(`/${Y}/config/testSendMail`,{method:"POST",body:{}})}async function Qa(n){return K(`/${Y}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Xa(){return(await K(`/${Y}/payment/fetch`)).data}async function Va(){return(await K(`/${Y}/payment/getPaymentMethods`)).data}async function ys(n,t){return(await K(`/${Y}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function eo(n){return K(`/${Y}/payment/save`,{method:"POST",body:n})}async function to(n){return K(`/${Y}/payment/show`,{method:"POST",body:{id:n}})}async function no(n){return K(`/${Y}/payment/drop`,{method:"POST",body:{id:n}})}async function so(n){return K(`/${Y}/payment/sort`,{method:"POST",body:{ids:n}})}async function io(){return(await K(`/${Y}/theme/getThemes`)).data}async function ao(n){return(await K(`/${Y}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function oo(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return K(`/${Y}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Bt(){return(await K(`/${Y}/server/group/fetch`)).data}async function is(n){return K(`/${Y}/server/group/save`,{method:"POST",body:n})}async function ro(n){return K(`/${Y}/server/group/drop`,{method:"POST",body:{id:n}})}const fi=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function yi(){return(await K(`/${Y}/server/route/fetch`)).data}async function lo(n){return K(`/${Y}/server/route/save`,{method:"POST",body:n})}async function co(n){return K(`/${Y}/server/route/drop`,{method:"POST",body:{id:n}})}async function Et(){return(await K(`/${Y}/plan/fetch`)).data}async function po(n){return K(`/${Y}/plan/save`,{method:"POST",body:n})}async function uo(n){return K(`/${Y}/plan/drop`,{method:"POST",body:{id:n}})}async function Pn(n,t){return K(`/${Y}/plan/update`,{method:"POST",body:{id:n,...t}})}async function mo(n){return K(`/${Y}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function ho(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((r,a)=>{t.set(`filter[${a}][key]`,r.key),t.set(`filter[${a}][condition]`,r.condition),t.set(`filter[${a}][value]`,r.value)}),await K(`/${Y}/order/fetch?${t.toString()}`)}async function xo(n){return K(`/${Y}/order/paid`,{method:"POST",body:{trade_no:n}})}async function bo(n){return K(`/${Y}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function as(n){return K(`/${Y}/order/assign`,{method:"POST",body:n})}async function go(n,t){return K(`/${Y}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function fo(n){return K(`/${Y}/order/detail`,{method:"POST",body:{id:n}})}async function vi(n=1,t=15){return K(`/${Y}/coupon/fetch?current=${n}&pageSize=${t}`)}async function yo(n){return K(`/${Y}/coupon/generate`,{method:"POST",body:n})}async function vo(n){return K(`/${Y}/coupon/drop`,{method:"POST",body:{id:n}})}async function jo(n){return K(`/${Y}/coupon/show`,{method:"POST",body:{id:n}})}async function wo(n=1,t=15){return K(`/${Y}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function No(n){return K(`/${Y}/giftcard/generate`,{method:"POST",body:n})}async function ko(n){return K(`/${Y}/giftcard/drop`,{method:"POST",body:{id:n}})}async function _o(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s&&s.forEach((a,d)=>{r.set(`filter[${d}][key]`,a.key),r.set(`filter[${d}][condition]`,a.condition),r.set(`filter[${d}][value]`,a.value)}),K(`/${Y}/user/fetch?${r.toString()}`)}async function So(n){return K(`/${Y}/user/update`,{method:"POST",body:n})}async function fn(n){return K(`/${Y}/user/getUserInfoById`,{params:{id:n}})}async function Co(n){return K(`/${Y}/user/delUser`,{method:"POST",body:{id:n}})}async function zo(n){return K(`/${Y}/user/generate`,{method:"POST",body:n})}async function To(n){return K(`/${Y}/user/resetSecret`,{method:"POST",body:{id:n}})}async function Po(n=1,t=15,s,r=!1){const a=new URLSearchParams;return a.set("current",String(n)),a.set("pageSize",String(t)),r&&a.set("include_subscribe_url","1"),s==null||s.forEach((d,l)=>{a.set(`filter[${l}][key]`,d.key),a.set(`filter[${l}][condition]`,d.condition),a.set(`filter[${l}][value]`,d.value)}),K(`/${Y}/subscription/fetch?${a.toString()}`)}async function $o(n){return K(`/${Y}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function Eo(n){return K(`/${Y}/subscription/update`,{method:"POST",body:n})}async function Mo(n){return K(`/${Y}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function ji(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s==null||s.forEach((a,d)=>{r.set(`filter[${d}][key]`,a.key),r.set(`filter[${d}][condition]`,a.condition),r.set(`filter[${d}][value]`,a.value)}),K(`/${Y}/device/fetch?${r.toString()}`)}async function wi(n){return K(`/${Y}/device/drop`,{method:"POST",body:{id:n}})}async function Ni(n){return K(`/${Y}/device/ban`,{method:"POST",body:{id:n}})}async function Lo(n){return K(`/${Y}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function Io(n,t=1,s=10){return K(`/${Y}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Do(){return(await K(`/${Y}/notice/fetch`)).data}async function Fo(n){return K(`/${Y}/notice/save`,{method:"POST",body:n})}async function Ao(n){return K(`/${Y}/notice/drop`,{method:"POST",body:{id:n}})}async function Oo(n){return K(`/${Y}/notice/show`,{method:"POST",body:{id:n}})}async function Ro(){return(await K(`/${Y}/ticket/fetch`)).data}async function $n(n){return(await K(`/${Y}/ticket/fetch`,{params:{id:n}})).data}async function Ho(n,t){return K(`/${Y}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function Uo(n){return K(`/${Y}/ticket/close`,{method:"POST",body:{id:n}})}async function qo(n){return K(`/${Y}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Bo(){return(await K(`/${Y}/knowledge/fetch`)).data}async function Go(n){return(await K(`/${Y}/knowledge/fetch`,{params:{id:n}})).data}async function Wo(n){return K(`/${Y}/knowledge/save`,{method:"POST",body:n})}async function Ko(n){return K(`/${Y}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Yo(n){return K(`/${Y}/knowledge/show`,{method:"POST",body:{id:n}})}async function Jo(){return(await K(`/${Y}/webcon/fetch`)).data}async function Zo(n){return K(`/${Y}/webcon/save`,{method:"POST",body:n})}async function Qo(n){return K(`/${Y}/webcon/drop`,{method:"POST",body:{id:n}})}async function Xo(n){return K(`/${Y}/webcon/show`,{method:"POST",body:{id:n}})}async function Vo(){return K(`/${Y}/system/getSystemStatus`)}async function er(){return K(`/${Y}/system/getQueueStats`)}async function tr(){return K(`/${Y}/system/getQueueWorkload`)}async function nr(){return K(`/${Y}/system/getSystemLog`)}async function vs(){return K(`/${Y}/server/manage/getNodes`)}async function sr(n,t){return K(`/${Y}/server/${n}/save`,{method:"POST",body:t})}async function ir(n,t){return K(`/${Y}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function js(n,t,s){return K(`/${Y}/server/${n}/update`,{method:"POST",body:{id:t,...s}})}async function ar(n,t){return K(`/${Y}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function or(n){return K(`/${Y}/server/manage/sort`,{method:"POST",body:n})}function Je(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function tt(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const ws=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function ki(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Qt(n){return Number(n??0)}function Ns(n){return Qt(n)/100}function ks(n){return`${tt(Math.round(n))} VND`}function rr(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),r=0;for(;s>=1024&&r<t.length-1;)s/=1024,r+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||r===0?0:1}).format(s)} ${t[r]}`}function _i(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function lr(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,r)=>{const a=new Date(t);return a.setDate(t.getDate()-(n-r-1)),_i(a)})}function _s(n,t){const s=n.get(t);if(s)return s;const r=ki(t);return n.set(t,r),r}function cr(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function on({label:n,value:t,helper:s,tone:r="default",onClick:a}){return e.jsxs("article",{className:`stat-card tone-${r}`,onClick:a,style:a?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Yi,{size:19})}),s?e.jsx("small",{children:s}):null]})}function Pe({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Re,{size:18}),e.jsx("span",{children:n})]})}function dr(n,t){const s=new Map,r=new Map;if(n.forEach(a=>{const d=_s(s,a.date),l=cr(a.type);if(l){d[l]=Number(a.value||0);return}const w=r.get(a.date)??0,b=ws[w%ws.length];d[b]=Number(a.value||0),r.set(a.date,w+1)}),t){const a=_s(s,_i(new Date));a.registrations=Qt(t.day_register_total),t.day_order_total!==void 0&&(a.orderCount=Qt(t.day_order_total)),t.day_paid_order_total!==void 0&&(a.paidCount=Qt(t.day_paid_order_total)),a.paidAmount=Ns(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(a.commissionAmount=Ns(t.day_commission_payout)),t.day_commission_count!==void 0&&(a.commissionCount=Qt(t.day_commission_count))}return s.size===0?[]:lr(31).map(a=>s.get(a)??ki(a))}function pr({records:n,override:t}){const{t:s}=me(),[r,a]=o.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[d,l]=o.useState(null),w=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:ks},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:tt},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:tt},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:ks},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:tt},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:tt}],b=dr(n,t),S=w.filter(f=>r.includes(f.key)),h=S.filter(f=>f.unit==="money"),v=S.filter(f=>f.unit==="count"),u=Math.max(1,...h.flatMap(f=>b.map(F=>Number(F[f.key]||0)))),$=Math.max(1,...v.flatMap(f=>b.map(F=>Number(F[f.key]||0)))),q=920,A=300,k=8,L=22,_=A-L-28,O=b.length>1?(q-k*2)/(b.length-1):0,U=Math.max(Math.ceil(b.length/7),1),H=d===null?null:b[d]??null,N=f=>({"--metric-color":f.color}),E=(f,F)=>Number(f[F.key]||0),I=f=>f.unit==="money"?u:$,J=f=>k+f*O,c=d===null?50:Math.min(88,Math.max(12,J(d)/q*100)),C=(f,F)=>L+_-f/I(F)*_,R=f=>Math.max(0,...b.map(F=>E(F,f))),T=f=>{const F=b.map((M,se)=>({x:J(se),y:C(E(M,f),f)}));return F.length?F.length===1?`M ${F[0].x} ${F[0].y}`:F.slice(1).reduce((M,se,g)=>{const V=F[g],Q=(V.x+se.x)/2;return`${M} C ${Q} ${V.y}, ${Q} ${se.y}, ${se.x} ${se.y}`},`M ${F[0].x} ${F[0].y}`):""};function B(f){a(F=>F.includes(f)?F.length===1?F:F.filter(M=>M!==f):[...F,f]),l(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:b.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:w.map(f=>{const F=r.includes(f.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${F?"active":""}`,style:N(f),onClick:()=>B(f.key),"aria-pressed":F,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:f.label})]},f.key)})}),b.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>l(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${q} ${A}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:k,y:L,width:q-k*2,height:_,rx:"14"}),[0,.25,.5,.75,1].map(f=>e.jsx("line",{className:"chart-grid",x1:k,x2:q-k,y1:L+f*_,y2:L+f*_},f)),d!==null?e.jsx("line",{className:"chart-hover-line",x1:J(d),x2:J(d),y1:L,y2:L+_}):null,S.map(f=>e.jsx("path",{className:"chart-series-line",d:T(f),style:N(f)},f.key)),d!==null?S.map(f=>e.jsx("circle",{className:"chart-series-dot",cx:J(d),cy:C(E(b[d],f),f),r:"5",style:N(f)},`${f.key}-${d}`)):null,b.map((f,F)=>{const M=b.length>1?O:q-k*2;return e.jsx("rect",{className:"chart-hover-zone",x:J(F)-M/2,y:L,width:M,height:_,onMouseEnter:()=>l(F),onFocus:()=>l(F),onClick:()=>l(F),tabIndex:0},f.date)})]}),H?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${c}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",H.date]}),e.jsx("div",{className:"tooltip-series-list",children:S.map(f=>e.jsxs("div",{className:"tooltip-series-row",style:N(f),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:f.label}),e.jsx("strong",{children:f.format(E(H,f))})]},f.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:b.filter((f,F)=>F===0||F===b.length-1||F%U===0).map(f=>e.jsx("span",{children:f.date},f.date))}),e.jsx("div",{className:"chart-insights",children:S.map(f=>e.jsxs("div",{className:"chart-insight",style:N(f),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:f.summaryLabel}),e.jsx("strong",{children:f.format(R(f))})]},f.key))})]})]})}function os({value:n,onChange:t,monthLabel:s}){const{t:r}=me();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":r("dashboard.range"),children:["today","month"].map(a=>e.jsx("button",{type:"button",className:n===a?"active":"",onClick:()=>t(a),"aria-pressed":n===a,children:a==="today"?r("dashboard.rangeToday"):s??r("dashboard.rangeMonth")},a))})}function ur({points:n,metrics:t,emptyLabel:s}){const{t:r}=me(),[a,d]=o.useState(t.map(c=>c.key)),[l,w]=o.useState(null),b=t.filter(c=>a.includes(c.key)),S=Math.max(1,...b.flatMap(c=>n.map(C=>Number(C[c.key]||0)))),h=920,v=260,u=8,$=22,A=v-$-28,k=n.length>1?(h-u*2)/(n.length-1):0,L=Math.max(Math.ceil(n.length/7),1),P=l===null?null:n[l]??null,_=c=>({"--metric-color":c.color}),O=c=>u+c*k,U=c=>$+A-c/S*A,H=l===null?50:Math.min(88,Math.max(12,O(l)/h*100)),N=(c,C)=>Number(c[C.key]||0),E=c=>Math.max(0,...n.map(C=>N(C,c))),I=c=>{const C=n.map((R,T)=>({x:O(T),y:U(N(R,c))}));return C.length?C.length===1?`M ${C[0].x} ${C[0].y}`:C.slice(1).reduce((R,T,B)=>{const f=C[B],F=(f.x+T.x)/2;return`${R} C ${F} ${f.y}, ${F} ${T.y}, ${T.x} ${T.y}`},`M ${C[0].x} ${C[0].y}`):""};function J(c){d(C=>C.includes(c)?C.length===1?C:C.filter(R=>R!==c):[...C,c]),w(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":r("dashboard.chartMetrics"),children:t.map(c=>{const C=a.includes(c.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${C?"active":""}`,style:_(c),onClick:()=>J(c.key),"aria-pressed":C,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:c.label})]},c.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>w(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${h} ${v}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:u,y:$,width:h-u*2,height:A,rx:"14"}),[0,.25,.5,.75,1].map(c=>e.jsx("line",{className:"chart-grid",x1:u,x2:h-u,y1:$+c*A,y2:$+c*A},c)),l!==null?e.jsx("line",{className:"chart-hover-line",x1:O(l),x2:O(l),y1:$,y2:$+A}):null,b.map(c=>e.jsx("path",{className:"chart-series-line",d:I(c),style:_(c)},c.key)),l!==null?b.map(c=>e.jsx("circle",{className:"chart-series-dot",cx:O(l),cy:U(N(n[l],c)),r:"5",style:_(c)},`${c.key}-${l}`)):null,n.map((c,C)=>{const R=n.length>1?k:h-u*2;return e.jsx("rect",{className:"chart-hover-zone",x:O(C)-R/2,y:$,width:R,height:A,onMouseEnter:()=>w(C),onFocus:()=>w(C),onClick:()=>w(C),tabIndex:0},`${c.label}-${C}`)})]}),P?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${H}%`},children:[e.jsx("div",{className:"tooltip-date",children:P.label}),e.jsxs("div",{className:"tooltip-series-list",children:[b.map(c=>e.jsxs("div",{className:"tooltip-series-row",style:_(c),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:c.label}),e.jsx("strong",{children:c.format(N(P,c))})]},c.key)),P.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:r("dashboard.sampleCount")}),e.jsx("strong",{children:tt(P.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((c,C)=>C===0||C===n.length-1||C%L===0).map((c,C)=>e.jsx("span",{children:c.label},`${c.label}-${C}`))}),e.jsx("div",{className:"chart-insights",children:b.map(c=>e.jsxs("div",{className:"chart-insight",style:_(c),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:c.summaryLabel}),e.jsx("strong",{children:c.format(E(c))})]},c.key))})]})}function Ss({title:n,subtitle:t,data:s,range:r,onRangeChange:a,loading:d,error:l,mode:w}){const{t:b}=me(),S=w==="users"?((s==null?void 0:s.users)??[]).map(h=>({id:`user-${h.user_id}`,label:h.email||`User #${h.user_id}`,total:Number(h.total||0)})):((s==null?void 0:s.servers)??[]).map(h=>({id:`${h.server_type}-${h.server_id}`,label:h.server_name||b("dashboard.unnamedNode"),total:Number(h.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(os,{value:r,onChange:a,monthLabel:b("dashboard.rangeLast31Days")})]}),l?e.jsx("div",{className:"chart-error",children:l}):null,d?e.jsx(Pe,{label:b("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:S.length===0?e.jsx("div",{className:"empty-state",children:b("dashboard.noTraffic")}):S.slice(0,10).map((h,v)=>{var q;const u=Math.max(((q=S[0])==null?void 0:q.total)??1,1),$=Math.max(3,h.total/u*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:v+1}),e.jsx("strong",{title:h.label,children:h.label}),e.jsx("small",{children:rr(h.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${$}%`}})})]},h.id)})})]})}function mr({data:n,loading:t,error:s}){const{t:r}=me(),a=[...n??[]].sort((l,w)=>Number(w.online||0)-Number(l.online||0)||l.server_name.localeCompare(w.server_name)||l.server_type.localeCompare(w.server_type)||l.server_id-w.server_id),d=Math.max(...a.map(l=>Number(l.online||0)),1);return e.jsxs("section",{className:"panel node-online-panel",children:[e.jsx("div",{className:"panel-heading",children:e.jsxs("div",{children:[e.jsx("h2",{children:r("dashboard.nodeOnline")}),e.jsx("p",{children:r("dashboard.nodeOnlineHelp")})]})}),s?e.jsx("div",{className:"chart-error",children:r("dashboard.chartLoadFailed")}):null,t?e.jsx(Pe,{label:r("dashboard.chartLoading")}):e.jsx("div",{className:"node-online-list",children:a.length===0?e.jsx("div",{className:"empty-state",children:r("dashboard.noNodeOnlineData")}):a.map((l,w)=>{const b=Math.max(0,Number(l.online||0)),S=b>0?Math.max(2,b/d*100):0,h=l.server_name||r("dashboard.unnamedNode");return e.jsxs("div",{className:"node-online-row",children:[e.jsxs("div",{className:"node-online-meta",children:[e.jsx("span",{children:w+1}),e.jsxs("div",{children:[e.jsx("strong",{title:h,children:h}),e.jsx("small",{children:l.server_type.toUpperCase()})]})]}),e.jsx("div",{className:"node-online-track",role:"img","aria-label":`${h}: ${tt(b)} ${r("dashboard.onlineUsers")}`,children:e.jsx("span",{style:{width:`${S}%`}})}),e.jsx("strong",{className:"node-online-value",children:tt(b)})]},`${l.server_type}-${l.server_id}`)})}),e.jsx("p",{className:"chart-note",children:r("dashboard.nodeOnlineFreshnessNote")})]})}function hr({data:n,range:t,onRangeChange:s,loading:r,error:a}){const{t:d}=me(),l=[{key:"online_user",label:d("dashboard.onlineUsers"),summaryLabel:d(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:tt}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.onlineTrend")}),e.jsx("p",{children:d(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(os,{value:t,onChange:s,monthLabel:d("dashboard.rangeLast31Days")})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,r?e.jsx(Pe,{label:d("dashboard.chartLoading")}):e.jsx(ur,{points:(n==null?void 0:n.points)??[],metrics:l,emptyLabel:d("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:d("dashboard.onlineRetentionNote")})]})}function xr({data:n,range:t,onRangeChange:s,loading:r,error:a}){const{t:d}=me(),l=(n==null?void 0:n.items)??[],w=Math.max(...l.map(b=>Number(b.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.topCtvCommission")}),e.jsx("p",{children:d("dashboard.topCtvCommissionHelp")})]}),e.jsx(os,{value:t,onChange:s})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,r?e.jsx(Pe,{label:d("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:l.length===0?e.jsx("div",{className:"empty-state",children:d("dashboard.noCommissionRank")}):l.map((b,S)=>{const h=Number(b.commission_amount||0)/w*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:S+1}),e.jsx("strong",{children:b.email||`User #${b.user_id}`}),e.jsxs("small",{children:[Je(b.commission_amount)," VND · ",tt(b.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(h,3)}%`}})})]},`${b.user_id}-${S}`)})})]})}function En({label:n,current:t,previous:s}){const{t:r}=me();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?tt(t):t}),e.jsxs("small",{children:[r("dashboard.previous"),": ",typeof s=="number"?tt(s):s]})]})}function Oe(){const n=Di();return o.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function br(){return nn().pathname}function gr({href:n,...t}){return e.jsx(Fi,{to:n,...t})}function fr(){const n=Oe(),{t,locale:s,setLocale:r}=me(),[a,d]=o.useState(""),[l,w]=o.useState(""),[b,S]=o.useState(""),[h,v]=o.useState(!1),[u,$]=o.useState(!1),q=o.useRef(null);o.useEffect(()=>{function k(L){q.current&&!q.current.contains(L.target)&&$(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),o.useEffect(()=>{He()&&n.replace("/dashboard")},[n]);async function A(k){var L,P,_,O;k.preventDefault(),S(""),v(!0);try{const U=await Ha(a,l),H=((L=U.data)==null?void 0:L.auth_data)??((P=U.data)==null?void 0:P.token),N=((_=U.data)==null?void 0:_.is_admin)===1||((O=U.data)==null?void 0:O.is_admin)===!0;if(!H||!N)throw new Error(t("login.adminRequired"));Ra(H),n.replace("/dashboard")}catch(U){S(U instanceof Error?U.message:t("login.failed"))}finally{v(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:q,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>$(k=>!k),children:e.jsx(sn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ts.map(k=>e.jsxs("button",{className:`locale-option ${s===k.code?"active":""}`,type:"button",onClick:()=>{r(k.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:k.flag}),e.jsx("span",{children:k.label})]},k.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(ja,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:A,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(pi,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:k=>d(k.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:a})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ua,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:k=>w(k.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:l})]})]}),b?e.jsx("div",{className:"form-error",children:b}):null,e.jsx("button",{className:"primary-button",disabled:h,type:"submit",children:t(h?"login.signingIn":"login.submit")})]})]})]})}const yr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:oa}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:ka},{href:"/config/payment",label:"nav.paymentConfig",icon:ta},{href:"/config/theme",label:"nav.themeConfig",icon:za}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:ss},{href:"/server/group",label:"nav.groupManagement",icon:Pa},{href:"/server/route",label:"nav.routeManagement",icon:Na}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:xs},{href:"/order",label:"nav.orders",icon:pa},{href:"/coupon",label:"nav.coupons",icon:ra},{href:"/giftcard",label:"nav.giftcards",icon:Sa}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:Qn},{href:"/subscription",label:"nav.subscriptions",icon:xs},{href:"/device",label:"nav.devices",icon:_a},{href:"/webcon",label:"nav.webcon",icon:sn},{href:"/notice",label:"nav.notices",icon:Zt},{href:"/ticket",label:"nav.tickets",icon:da},{href:"/knowledge",label:"nav.knowledge",icon:Ji}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Zi}]}];function vr(){const[n,t]=o.useState("light");o.useEffect(()=>{const d=localStorage.getItem("admin-theme")??"light";t(d),document.documentElement.setAttribute("data-theme",d)},[]);const s=o.useCallback(a=>{t(a),localStorage.setItem("admin-theme",a),document.documentElement.setAttribute("data-theme",a)},[]),r=o.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:r}}function Ge({children:n,title:t,subtitle:s}){const[r,a]=o.useState(!1),d=Oe(),l=br(),{t:w,locale:b,setLocale:S}=me(),{theme:h,toggle:v}=vr(),[u,$]=o.useState(!1),q=o.useRef(null);o.useEffect(()=>{function k(L){q.current&&!q.current.contains(L.target)&&$(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]);function A(){xi(),d.replace("/login")}return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),r&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>a(!1)}),e.jsxs("aside",{className:`sidebar ${r?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:w("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:yr.map(k=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:w(k.label)}),k.items.map(L=>{const P=L.icon,_=l===L.href;return e.jsxs(gr,{className:`nav-item ${_?"active":""}`,href:L.href,onClick:()=>a(!1),children:[e.jsx(P,{size:17}),e.jsx("span",{children:w(L.label)})]},L.href)})]},k.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":w(r?"common.closeMenu":"common.openMenu"),onClick:()=>a(k=>!k),children:r?e.jsx(_e,{size:19}):e.jsx(ha,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[e.jsxs("div",{className:"locale-dropdown",ref:q,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":w("common.language"),onClick:()=>$(k=>!k),children:e.jsx(sn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ts.map(k=>e.jsxs("button",{className:`locale-option ${b===k.code?"active":""}`,type:"button",onClick:()=>{S(k.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:k.flag}),e.jsx("span",{children:k.label})]},k.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":h==="dark"?"Switch to light mode":"Switch to dark mode",onClick:v,children:h==="dark"?e.jsx(Ca,{size:17}):e.jsx(xa,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:A,children:[e.jsx(ma,{size:16}),e.jsx("span",{children:w("common.logout")})]})]})]}),e.jsx("main",{className:"content",children:n})]})]})}function Kt(){return{data:null,loading:!0,error:""}}function jr(n,t){const s=new Date;if(n==="today"){const a=s.getHours();return{range:n,points:Array.from({length:24},(d,l)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),l).getTime()/1e3),label:`${String(l).padStart(2,"0")}:00`,online_user:l===a?t:0,sample_count:l===a?1:0}))}}const r=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(a,d)=>{const l=new Date(r);return l.setDate(r.getDate()-(30-d)),{time:Math.floor(l.getTime()/1e3),label:`${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,online_user:d===30?t:0,online_user_avg:d===30?t:0,sample_count:d===30?1:0}})}}function wr(){var c,C,R,T,B,f,F,M,se,g,V,Q,re;const n=Oe(),{t}=me(),[s,r]=o.useState(null),[a,d]=o.useState(""),[l,w]=o.useState(!0),[b,S]=o.useState("today"),[h,v]=o.useState("today"),[u,$]=o.useState("today"),[q,A]=o.useState("today"),[k,L]=o.useState(Kt),[P,_]=o.useState(Kt),[O,U]=o.useState(Kt),[H,N]=o.useState(Kt),[E,I]=o.useState(Kt),J=o.useCallback(async()=>{w(!0),d("");try{r(await Ua())}catch(te){d(te instanceof Error?te.message:t("dashboard.loadFailed"))}finally{w(!1)}},[t]);return o.useEffect(()=>{if(!He()){n.replace("/login");return}J()},[J,n]),o.useEffect(()=>{let te=!0;return L(le=>({...le,loading:!0,error:""})),qa(b).then(le=>{te&&L({data:le,loading:!1,error:""})}).catch(le=>{te&&L({data:null,loading:!1,error:le instanceof Error?le.message:t("dashboard.chartLoadFailed")})}),()=>{te=!1}},[b,t]),o.useEffect(()=>{let te=!0;return _(le=>({...le,loading:!0,error:""})),Ba(h).then(le=>{te&&_({data:le,loading:!1,error:""})}).catch(le=>{te&&_({data:null,loading:!1,error:le instanceof Error?le.message:t("dashboard.chartLoadFailed")})}),()=>{te=!1}},[h,t]),o.useEffect(()=>{let te=!0;return U(le=>({...le,loading:!0,error:""})),Ga(u).then(le=>{te&&U({data:le,loading:!1,error:""})}).catch(()=>{var le;te&&U({data:jr(u,((le=s==null?void 0:s.override)==null?void 0:le.online_user)??0),loading:!1,error:""})}),()=>{te=!1}},[u,(c=s==null?void 0:s.override)==null?void 0:c.online_user]),o.useEffect(()=>{let te=!0;return N(le=>({...le,loading:!0,error:""})),Wa().then(le=>{te&&N({data:le,loading:!1,error:""})}).catch(le=>{te&&N({data:null,loading:!1,error:le instanceof Error?le.message:t("dashboard.chartLoadFailed")})}),()=>{te=!1}},[t]),o.useEffect(()=>{let te=!0;return I(le=>({...le,loading:!0,error:""})),Ka(q).then(le=>{te&&I({data:le,loading:!1,error:""})}).catch(le=>{te&&I({data:null,loading:!1,error:le instanceof Error?le.message:t("dashboard.chartLoadFailed")})}),()=>{te=!1}},[q,t]),e.jsxs(Ge,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[a?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:a}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:J,children:[e.jsx(Re,{size:16}),t("common.retry")]})]}):null,l&&!s?e.jsx(Pe,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((C=s.override)==null?void 0:C.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(R=s.override)==null?void 0:R.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:J,disabled:l,children:[e.jsx(Re,{size:16}),t(l?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(on,{label:t("dashboard.onlineUsers"),value:tt(((T=s.override)==null?void 0:T.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(on,{label:t("dashboard.todayIncome"),value:`${Je(((B=s.override)==null?void 0:B.day_paid_income)??((f=s.override)==null?void 0:f.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(on,{label:t("dashboard.todayRegistrations"),value:tt(((F=s.override)==null?void 0:F.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(on,{label:t("dashboard.pendingCommission"),value:tt(((M=s.override)==null?void 0:M.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(En,{label:t("dashboard.monthIncome"),current:`${Je(((se=s.override)==null?void 0:se.month_income)??0)} VND`,previous:`${Je(((g=s.override)==null?void 0:g.last_month_income)??0)} VND`}),e.jsx(En,{label:t("dashboard.monthCommission"),current:`${Je(((V=s.override)==null?void 0:V.commission_month_payout)??0)} VND`,previous:`${Je(((Q=s.override)==null?void 0:Q.commission_last_month_payout)??0)} VND`}),e.jsx(En,{label:t("dashboard.monthRegistrations"),current:((re=s.override)==null?void 0:re.month_register_total)??0,previous:"-"})]}),e.jsx(pr,{records:s.order,override:s.override}),e.jsx(mr,{data:H.data,loading:H.loading,error:H.error}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(hr,{data:O.data,range:u,onRangeChange:$,loading:O.loading,error:O.error}),e.jsx(xr,{data:E.data,range:q,onRangeChange:A,loading:E.loading,error:E.error}),e.jsx(Ss,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:k.data,range:b,onRangeChange:S,loading:k.loading,error:k.error,mode:"users"}),e.jsx(Ss,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:P.data,range:h,onRangeChange:v,loading:P.loading,error:P.error,mode:"servers"})]})]}):null]})}const Nr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Cs(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function kr(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function Mn(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function _r(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Sr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function Cr(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Ye(n){return n===!0||n===1||n==="1"}function zr(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function Ln(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Tr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function Pr({field:n,value:t,onChange:s}){const{t:r}=me(),a=n.toInput?n.toInput(t):zr(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Ye(t)?"on":""}`,type:"button",onClick:()=>s(Ye(t)?0:1),"aria-pressed":Ye(t),children:[e.jsx("span",{}),Ye(t)?Cs(r)[0].label:Cs(r)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:a,onChange:d=>s(d.target.value),children:(n.options??[]).map(d=>e.jsx("option",{value:d.value,children:d.label},String(d.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,rows:4,value:a}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,type:n.type,value:a}):null]})]})}function $r({plans:n,emailTemplates:t,t:s}){const r=[{label:s("config.option.disabled"),value:0},...n.map(a=>({label:a.name,value:a.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"billing_info_enable",label:s("config.site.billingInfoEnable"),description:s("config.site.billingInfoEnableHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:r},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:a=>Number(a.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:a=>Ye(a.email_whitelist_enable),fromInput:Ln},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Sr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:a=>String(a.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:kr(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:Mn(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:Mn(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:Mn(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:_r(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:a=>Number(a.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:a=>Ye(a.subscribe_url_ua_enable),fromInput:Tr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:Ln}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:Cr(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:Ln},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:a=>Ye(a.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:a=>Ye(a.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(a=>({label:a,value:a}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Er(){const n=Oe(),{t}=me(),[s,r]=o.useState("site"),[a,d]=o.useState(null),[l,w]=o.useState([]),[b,S]=o.useState([]),[h,v]=o.useState(!0),[u,$]=o.useState(null),[q,A]=o.useState(""),k=o.useCallback(async()=>{v(!0),A("");try{const[E,I,J]=await Promise.all([bi(),Ja(),Ya()]);d(E),w(I),S(J)}catch(E){A(E instanceof Error?E.message:t("config.loadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}k()},[k,n]),o.useEffect(()=>{const E=document.querySelector(".config-tabs button.active");E&&E.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const L=o.useMemo(()=>$r({plans:l,emailTemplates:b,t}),[l,b,t]),P=L.find(E=>E.key===s)??L[0],_=(a==null?void 0:a[P.key])??{};function O(E,I,J){d(c=>c&&{...c,[E]:{...c[E],[I]:J}})}async function U(){var J,c,C;if(!a)return;const E=P.key==="safe"?String(((J=window.settings)==null?void 0:J.secure_path)??"").trim():"",I=P.key==="safe"?String(((c=a.safe)==null?void 0:c.secure_path)??"").trim():"";$(P.key),A("");try{await gi(a[P.key]),(C=window.showToast)==null||C.call(window,t("config.saveSuccess"),"success"),P.key==="safe"&&I&&I!==E&&(window.settings={...window.settings??{},secure_path:I},window.location.replace(`${window.location.origin}/${I}`))}catch(R){A(R instanceof Error?R.message:t("config.saveFailed"))}finally{$(null)}}async function H(){var E;$("mail"),A("");try{await Za(),(E=window.showToast)==null||E.call(window,t("config.email.testSuccess"),"success")}catch(I){A(I instanceof Error?I.message:t("config.email.testFailed"))}finally{$(null)}}async function N(){var I;const E=String((a==null?void 0:a.telegram.telegram_bot_token)??"");$("webhook"),A("");try{await Qa(E),(I=window.showToast)==null||I.call(window,t("config.telegram.webhookSuccess"),"success")}catch(J){A(J instanceof Error?J.message:t("config.telegram.webhookFailed"))}finally{$(null)}}return e.jsxs(Ge,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:k,disabled:h,children:[e.jsx(Re,{size:16}),t(h?"common.refreshing":"common.refresh")]})]}),q?e.jsx("div",{className:"form-error",children:q}):null,h&&!a?e.jsx(Pe,{label:t("config.loading")}):null,a?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:Nr.map(E=>{const I=L.find(J=>J.key===E);return I?e.jsxs("button",{className:s===E?"active":"",type:"button",onClick:()=>r(E),children:[e.jsx("span",{children:I.label}),e.jsx("small",{children:I.hint})]},E):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:P.label}),e.jsx("p",{children:P.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:u===P.key,type:"button",onClick:U,children:[e.jsx(ot,{size:16}),u===P.key?t("config.saving"):t("config.saveTab")]})]}),P.warning?e.jsx("div",{className:"config-warning",children:P.warning}):null,e.jsx("div",{className:"config-fields",children:P.fields.map(E=>E.visible&&!E.visible(_)?null:e.jsx(Pr,{field:E,value:_[E.key],onChange:I=>O(P.key,E.key,I)},E.key))}),P.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="mail",onClick:H,children:[e.jsx(pi,{size:16}),t(u==="mail"?"config.email.testing":"config.email.test")]})}):null,P.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="webhook",onClick:N,children:[e.jsx(Ta,{size:16}),t(u==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(ui,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Pt(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function In(n){return n===!0||n===1||n==="1"}function Mr(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Lr(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Ir(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState([]),[l,w]=o.useState(null),[b,S]=o.useState({}),[h,v]=o.useState(!0),[u,$]=o.useState(!1),[q,A]=o.useState(!1),[k,L]=o.useState(""),[P,_]=o.useState(""),[O,U]=o.useState({}),H=o.useCallback(async()=>{v(!0),L("");try{const[T,B]=await Promise.all([Xa(),Va()]);r(T),d(B),U({})}catch(T){L(T instanceof Error?T.message:t("payment.loadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}H()},[H,n]);async function N(T){const B=(T==null?void 0:T.payment)??a[0]??"",f=Mr(T,B);if(w(f),S({}),L(""),_(""),!!B){$(!0);try{S(await ys(B,T==null?void 0:T.id))}catch(F){L(F instanceof Error?F.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function E(T){if(l){w({...l,payment:T,config:{}}),$(!0),L("");try{S(await ys(T,l.id))}catch(B){L(B instanceof Error?B.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function I(T){var B,f;if(T.preventDefault(),!!l){A(!0),L(""),_("");try{await eo(Lr(l)),w(null),(B=window.showToast)==null||B.call(window,t("payment.saveSuccess"),"success"),await H()}catch(F){(f=window.showToast)==null||f.call(window,F instanceof Error?F.message:t("payment.saveFailed"),"error")}finally{A(!1)}}}async function J(T){var B;L(""),_("");try{await to(T),await H()}catch(f){(B=window.showToast)==null||B.call(window,f instanceof Error?f.message:t("payment.toggleFailed"),"error")}}async function c(T){var B;(B=window.showConfirm)==null||B.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var f,F;L(""),_("");try{await no(T),(f=window.showToast)==null||f.call(window,t("payment.deleteSuccess"),"success"),await H()}catch(M){(F=window.showToast)==null||F.call(window,M instanceof Error?M.message:t("payment.deleteFailed"),"error")}}})}async function C(T,B){var se;const f=T+B;if(f<0||f>=s.length)return;const F=[...s],M=F[T];F.splice(T,1),F.splice(f,0,M),r(F);try{await so(F.map(g=>g.id)),await H()}catch(g){(se=window.showToast)==null||se.call(window,g instanceof Error?g.message:t("payment.sortFailed"),"error"),await H()}}async function R(T){var f;const B=await Pt(T);(f=window.showToast)==null||f.call(window,t(B?"payment.copied":"common.copyFailed"),B?"success":"error")}return e.jsxs(Ge,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:h,children:[e.jsx(Re,{size:16}),e.jsx("span",{children:t(h?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void N(),children:[e.jsx(at,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),k?e.jsx("div",{className:"form-error",children:k}):null,P?e.jsx("div",{className:"form-success",children:P}):null,h&&s.length===0?e.jsx(Pe,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((T,B)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:T.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void C(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(ms,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void C(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(us,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${In(T.enable)?"active":""}`,type:"button",onClick:()=>void J(T.id),"aria-label":In(T.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:T.name}),T.icon?e.jsx("small",{children:T.icon}):null]}),e.jsx("td",{children:T.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void R(T.notify_url),children:[e.jsx("span",{children:T.notify_url}),e.jsx(en,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void N(T),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void c(T.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},T.id)),!h&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((T,B)=>{const f=In(T.enable),F=T.handling_fee_percent!==null&&T.handling_fee_percent!==""?`${T.handling_fee_percent}%`:"",M=T.handling_fee_fixed!==null?`${Je(T.handling_fee_fixed)} VND`:"",se=[F,M].filter(Boolean).join(" + ")||"No fees",g=O[T.id],V=T.icon&&!g;return e.jsxs("div",{className:`payment-mobile-card ${f?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",T.id]}),e.jsx("span",{className:"gateway-tag",children:T.payment})]}),e.jsx("button",{className:`admin-switch ${f?"active":""}`,type:"button",onClick:()=>void J(T.id),"aria-label":t(f?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[V?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:T.icon,alt:T.name,onError:()=>{U(Q=>({...Q,[T.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:T.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:T.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:se})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void R(T.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:T.notify_url}),e.jsx(en,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void C(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(ms,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void C(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(us,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void N(T),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void c(T.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},T.id)}),!h&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:I,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:l.name,onChange:T=>w({...l,name:T.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:l.icon,onChange:T=>w({...l,icon:T.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:l.notify_domain,onChange:T=>w({...l,notify_domain:T.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:l.handling_fee_percent,onChange:T=>w({...l,handling_fee_percent:T.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:l.handling_fee_fixed,onChange:T=>w({...l,handling_fee_fixed:T.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:l.payment,onChange:T=>void E(T.target.value),children:a.map(T=>e.jsx("option",{value:T,children:T},T))})]}),u?e.jsx(Pe,{label:t("payment.formLoading")}):null,u?null:Object.entries(b).map(([T,B])=>e.jsxs("label",{children:[e.jsx("span",{children:B.label}),e.jsx("input",{className:"config-input",placeholder:B.description,value:String(l.config[T]??B.value??""),onChange:f=>w({...l,config:{...l.config,[T]:f.target.value}})})]},T)),l.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ot,{size:16}),t(q?"payment.saving":"common.save")]})]})]})]})}):null]})}function Dr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Fr(n,t){return t[n.field_name]??n.default_value??""}function Ar(){const n=Oe(),{t}=me(),[s,r]=o.useState(null),[a,d]=o.useState(null),[l,w]=o.useState(!0),[b,S]=o.useState(!1),[h,v]=o.useState(!1),[u,$]=o.useState(null),[q,A]=o.useState(""),[k,L]=o.useState(""),P=o.useCallback(async()=>{w(!0),A("");try{r(await io())}catch(N){A(N instanceof Error?N.message:t("theme.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}P()},[P,n]);async function _(N,E){d(null),S(!0),A(""),L("");try{const I=await ao(N);d({key:N,theme:E,values:I})}catch(I){A(I instanceof Error?I.message:t("theme.configLoadFailed"))}finally{S(!1)}}async function O(N){$(N),A(""),L("");try{await gi({frontend_theme:N}),L(t("theme.activateSuccess")),await P()}catch(E){A(E instanceof Error?E.message:t("theme.activateFailed"))}finally{$(null)}}async function U(N){if(N.preventDefault(),!!a){v(!0),A(""),L("");try{await oo(a.key,a.values),d(null),L(t("theme.saveSuccess")),await P()}catch(E){A(E instanceof Error?E.message:t("theme.saveFailed"))}finally{v(!1)}}}function H(N,E){d(I=>I&&{...I,values:{...I.values,[N]:E}})}return e.jsxs(Ge,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:l,children:[e.jsx(Re,{size:16}),t(l?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),q?e.jsx("div",{className:"form-error",children:q}):null,k?e.jsx("div",{className:"form-success",children:k}):null,l&&!s?e.jsx(Pe,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([N,E])=>{const I=s.active===N;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Dr(E)})`},children:I?e.jsxs("span",{className:"theme-active",children:[e.jsx(di,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:E.name||N}),e.jsx("p",{children:E.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",E.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void _(N,E),children:[e.jsx(va,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:I||u===N,type:"button",onClick:()=>void O(N),children:[e.jsx(ba,{size:15}),t(I?"theme.current":u===N?"theme.activating":"theme.activate")]})]})]},N)})}):null,b?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx(Pe,{label:t("theme.configLoading")})})}):null,a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:a.theme.name||a.key})}),e.jsx("p",{children:a.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:U,children:[(a.theme.configs??[]).map(N=>{const E=Fr(N,a.values);return e.jsxs("label",{children:[e.jsx("span",{children:N.label}),N.description?e.jsx("p",{className:"field-description",children:N.description}):null,N.field_type==="select"?e.jsx("select",{className:"config-input",value:E,onChange:I=>H(N.field_name,I.target.value),children:Object.entries(N.select_options??{}).map(([I,J])=>e.jsx("option",{value:I,children:J},I))}):null,N.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:N.placeholder,rows:5,value:E,onChange:I=>H(N.field_name,I.target.value)}):null,N.field_type!=="select"&&N.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:N.placeholder,value:E,onChange:I=>H(N.field_name,I.target.value)}):null]},N.field_name)}),(a.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"theme.saving":"common.save")]})]})]})]})}):null]})}const Xn=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],Or=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Rr=["tcp","ws","grpc","http","httpupgrade","xhttp"],Si=["tcp","ws","grpc"],Ci=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Hr=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],yn=["anytls","hysteria2","trojan","tuic"],Ur=["tcp","ws","grpc","httpupgrade","xhttp"],qr=["chrome","firefox","safari","ios","android","edge","360","qq"],Br=["vmess","vless","trojan","hysteria","tuic","anytls"],Gr=["trojan","hysteria","tuic","anytls"],zi=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],vn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},jn=[10,20,50,100],Ti="admin_server_manage_page_size";function Pi(n){return jn.includes(n)}function Wr(){if(typeof window>"u")return jn[0];try{const n=Number(window.localStorage.getItem(Ti));if(Pi(n))return n}catch{}return jn[0]}const rs=typeof window<"u"?window.location.origin:"",Kr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Yr(n,t,s=""){return n[t]??s}function ve(n,t,s=""){return String(Yr(n,t,s))}function Jr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function $t(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function Vn(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function Zr(n){return n==="vmess"?"networkSettings":"network_settings"}function Qr(n,t){const s=n==="vmess",r=n==="vless"||mt(n),a={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return r?{acceptProxyProtocol:!1,...a}:a;case"ws":return r?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function mt(n){return n==="v2node"||n==="zicnode"}function Xr(n){return Gr.includes(n)}function Vr(n){return mt(n)||Br.includes(n)}function zs(n){return n==="vmess"?"tlsSettings":"tls_settings"}function el(n){const t=String((n==null?void 0:n._type)??"");return Xr(t)?1:Number((n==null?void 0:n.tls)??0)}function wn(n){return!!n&&n!=="shadowsocks"}function tl(n){return n==="vless"||n==="vmess"}function Nn(n){return n==="vless"||n==="anytls"}function nl(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function Ts(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?Si:n==="vless"||n==="vmess"?Ur:[]}function sl(n){var t;return mt(n)?"ZicNode":((t=Xn.find(s=>s.value===n))==null?void 0:t.label)??n}function Fe(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function ls(n){return n===!0||n===1||n==="1"||n==="true"}function Ps(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function $i(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function kn(n){if(Array.isArray(n))return n.map(t=>String(t).trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();if(!t)return[];try{const s=JSON.parse(t);if(Array.isArray(s))return s.map(r=>String(r).trim()).filter(Boolean)}catch{}return t.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean)}return[]}function Ei(n){const t=new Set,s=[];return kn(n).forEach(r=>{const a=r.toLowerCase();t.has(a)||(t.add(a),s.push(r))}),s}function il(n){return $i(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function _n(n){const t={...vn,...$t(n)};if(!ls(t.enable))return{enable:!1};const r={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:zi.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(l=>{const w=Fe(t[l]);w&&(r[l]=w)});const a=$i(t.addresses);a.length&&(r.addresses=a);const d=il(t.reserved);return d.length&&(r.reserved=d),r}const al=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],ol=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function gt(n,t){const s=$t(n);if(t===0)return{};const r={...s};return t===1?al.forEach(a=>delete r[a]):t===2&&ol.forEach(a=>delete r[a]),Object.keys(r).forEach(a=>{const d=r[a];(d===""||d===null||d===void 0)&&delete r[a]}),r}function rl(n){const t=$t(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),r=!!(Fe(t.public_key_sha256)||Fe(t.sha256_hex)||Fe(t.sha256));return s==="error"?{state:"error",hasPin:r,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:r?{state:"ready",hasPin:r,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:r,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function $s(n,t=rs){return Fe(n).replace(/\/+$/,"")||t}function Es(n){return`'${n.replace(/'/g,"'\\''")}'`}function ll(n,t){const s=t.apiHost||rs,r=t.apiKey||"TOKEN_MOI";return`wget -N ${Kr} && \\
bash install.sh --api-host ${Es(s)} --node-id ${n} --api-key ${Es(r)}`}function Ms(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function Ls(n,t){if(t){const r=JSON.parse(JSON.stringify(t));if(r.group_id=Ms(r.group_id),r.route_id=Ms(r.route_id),r.load_ips=Ei(r.load_ips),mt(n)){r.warp_settings={...vn,...$t(r.warp_settings)};const a=String(r.protocol??""),d=Number(r.tls??0);d===2&&!Nn(a)?r.tls=wn(a)?1:0:yn.includes(a)&&d!==2&&(r.tls=1)}return{_type:n,...r}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],load_ips:[],rate:"1",show:0,check:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...vn}};default:return s}}function Mi({initialValue:n,placeholder:t,onCancel:s,onSave:r}){const{t:a}=me(),[d,l]=o.useState(()=>Vn(n)?JSON.stringify(n,null,2):""),[w,b]=o.useState(""),S=v=>{if(v.preventDefault(),!d.trim()){r({});return}try{const u=JSON.parse(d);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");r(u)}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}},h=v=>{if(l(v),!v.trim()){b("");return}try{const u=JSON.parse(v);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:S,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:a("node.jsonContent")}),w&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",w]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:w?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:d,onChange:v=>h(v.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:a("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!w,children:a("common.confirm")})]})]})}function oe({label:n,required:t,actionText:s,onAction:r}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&r&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:a=>{a.preventDefault(),r()},children:s})]})}function Is({value:n,onChange:t,label:s,placeholder:r}){const{t:a}=me(),[d,l]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(oe,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((w,b)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((S,h)=>h!==b)),style:{cursor:"pointer"},children:[w," ×"]},b)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:d,placeholder:r??a("node.tagPlaceholder"),onChange:w=>l(w.target.value),onKeyDown:w=>{w.key==="Enter"&&d.trim()&&(w.preventDefault(),t([...n,d.trim()]),l(""))}})]})]})}function Ds({options:n,value:t,onChange:s,label:r,actionText:a,onAction:d}){const{t:l}=me(),[w,b]=o.useState(""),S=n.filter(v=>t.includes(v.id)),h=n.filter(v=>v.name.toLowerCase().includes(w.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(oe,{label:r,actionText:a,onAction:d}),S.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:S.map(v=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(u=>u!==v.id)),children:[v.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},v.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${l("common.search")}...`,value:w,onChange:v=>b(v.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[h.map(v=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(v.id),onChange:u=>s(u.target.checked?[...t,v.id]:t.filter($=>$!==v.id))}),e.jsx("span",{children:v.name})]},v.id)),h.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?l("node.noGroupsAvailable"):l("node.noResultsFound")})]})]})}function ht({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:r=>s(r.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function cl({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:r,onCancel:a,onSave:d}){const{t:l}=me(),w=t?"server_name":"serverName",b=t?"allow_insecure":"allowInsecure",S=mt(r),h=Vr(r),v=s===1&&h,[u,$]=o.useState(String((n==null?void 0:n[w])??"")),[q,A]=o.useState(String((n==null?void 0:n.dest)??"")),[k,L]=o.useState(String((n==null?void 0:n.server_port)??"443")),[P,_]=o.useState(String((n==null?void 0:n.xver)??"0")),[O,U]=o.useState(String((n==null?void 0:n.private_key)??"")),[H,N]=o.useState(String((n==null?void 0:n.public_key)??"")),[E,I]=o.useState(String((n==null?void 0:n.short_id)??"")),[J,c]=o.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[C,R]=o.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[T,B]=o.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),f=String((n==null?void 0:n.cert_mode)??"").trim(),[F,M]=o.useState(f||"auto"),[se,g]=o.useState(String((n==null?void 0:n.provider)??"")),[V,Q]=o.useState(String((n==null?void 0:n.dns_env)??"")),[re,te]=o.useState(String((n==null?void 0:n.cert_file)??"")),[le,Ee]=o.useState(String((n==null?void 0:n.key_file)??"")),[Le,Se]=o.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[ke,fe]=o.useState(String((n==null?void 0:n.ech)??"")),[Ce,je]=o.useState(String((n==null?void 0:n.ech_server_name)??"")),[We,y]=o.useState(String((n==null?void 0:n.ech_key)??"")),[ie,G]=o.useState(String((n==null?void 0:n.ech_config)??"")),[be,ze]=o.useState(()=>{const ae=n==null?void 0:n[b];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),he=$t(n==null?void 0:n.auto_cert),De=rl(n==null?void 0:n.auto_cert),Ue=ae=>{if(ae.preventDefault(),S&&s===0){d({});return}const xt=S?gt(n,s):$t(n),ue=S?{...xt,[w]:u,fingerprint:J}:{...n??{},[w]:u,fingerprint:J},nt=C.trim(),st=T.trim();if(nt?ue.pinnedPeerCertSha256=nt:delete ue.pinnedPeerCertSha256,delete ue.pinned_peer_cert_sha256,st?ue.verifyPeerCertByName=st:delete ue.verifyPeerCertByName,delete ue.verify_peer_cert_by_name,S&&s!==1?(delete ue.allow_insecure,delete ue.allowInsecure):ue[b]=t?be?1:0:be,s===2&&(ue.dest=q,ue.server_port=k,ue.xver=Number(P)||0,ue.private_key=O,ue.public_key=H,ue.short_id=E,ue.ech=ke,ue.ech_server_name=Ce,ue.ech_key=We,ue.ech_config=ie),v){ue.cert_mode=F;const it=n==null?void 0:n.auto_cert;it&&typeof it=="object"&&(ue.auto_cert=it),F==="none"?(delete ue.provider,delete ue.dns_env,delete ue.cert_file,delete ue.key_file):(se.trim()?ue.provider=se:delete ue.provider,V.trim()?ue.dns_env=V:delete ue.dns_env,re.trim()?ue.cert_file=re:delete ue.cert_file,le.trim()?ue.key_file=le:delete ue.key_file),ue.reject_unknown_sni=Le?"1":"0"}d(S?gt(ue,s):ue)};return e.jsxs("form",{onSubmit:Ue,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.sni")}),e.jsx("input",{className:"config-input",value:u,onChange:ae=>$(ae.target.value),placeholder:l(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.dest")}),e.jsx("input",{className:"config-input",value:q,onChange:ae=>A(ae.target.value),placeholder:l("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.servicePort")}),e.jsx("input",{className:"config-input",value:k,onChange:ae=>L(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:P,onChange:ae=>_(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.privateKey")}),e.jsx("input",{className:"config-input",value:O,onChange:ae=>U(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.publicKey")}),e.jsx("input",{className:"config-input",value:H,onChange:ae=>N(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.shortId")}),e.jsx("input",{className:"config-input",value:E,onChange:ae=>I(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.fingerprint")}),e.jsx("select",{className:"config-input",value:J,onChange:ae=>c(ae.target.value),children:qr.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:C,onChange:ae=>R(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:T,onChange:ae=>B(ae.target.value),placeholder:"example.com"})]})]}),v?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.certMode")}),e.jsxs("select",{className:"config-input",value:F,onChange:ae=>M(ae.target.value),children:[e.jsx("option",{value:"auto",children:l("node.certModeAuto")}),e.jsx("option",{value:"self",children:l("node.certModeSelf")}),e.jsx("option",{value:"http",children:l("node.certModeHttp")}),e.jsx("option",{value:"dns",children:l("node.certModeDns")}),e.jsx("option",{value:"file",children:l("node.certModeFile")}),e.jsx("option",{value:"none",children:l("node.certModeNone")})]})]}),F!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${De.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:l(De.labelKey)}),Fe(he.updated_at)?e.jsx("span",{className:"mono",children:Fe(he.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:l(De.detailKey)}),Fe(he.target)||Fe(he.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[Fe(he.target)?`${l("node.autoCertTarget")}: ${Fe(he.target)}`:"",Fe(he.target)&&Fe(he.source)?" · ":"",Fe(he.source)?`${l("node.autoCertSource")}: ${Fe(he.source)}`:""]}):null,Fe(he.public_key_sha256)||Fe(he.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:Fe(he.public_key_sha256)?`${l("node.autoCertPublicKeySha")}: ${Fe(he.public_key_sha256)}`:`${l("node.autoCertSha")}: ${Fe(he.sha256_hex)}`}):null,Fe(he.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:Fe(he.error)}):null]}):null,F==="dns"||F==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>g(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:V,onChange:ae=>Q(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,F!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.certFile")}),e.jsx("input",{className:"config-input",value:re,onChange:ae=>te(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.keyFile")}),e.jsx("input",{className:"config-input",value:le,onChange:ae=>Ee(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null,e.jsx(ht,{label:l("node.rejectUnknownSni"),checked:Le,onChange:Se})]}):null,!S||S&&s===1?e.jsx(ht,{label:l("node.allowInsecure"),checked:be,onChange:ze}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.ech")}),e.jsxs("select",{className:"config-input",value:ke,onChange:ae=>fe(ae.target.value),children:[e.jsx("option",{value:"",children:l("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:l("node.echCustom")})]})]}),ke==="cloudflare"?e.jsx("div",{className:"config-warning",children:l("node.echCloudflareHelp")}):null,ke==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.echServerName")}),e.jsx("input",{className:"config-input",value:Ce,onChange:ae=>je(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.echKey")}),e.jsx("input",{className:"config-input",value:We,onChange:ae=>y(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.echConfig")}),e.jsx("input",{className:"config-input",value:ie,onChange:ae=>G(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:a,children:l("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:l("common.confirm")})]})]})}function dl({draft:n,set:t,groups:s,routes:r,nodes:a,onOpenJson:d,onAddGroup:l,onOpenTransportConfig:w}){const{t:b}=me(),S=String(n._type),h=mt(S),v=ve(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ve(n,"name"),onChange:u=>t("name",u.target.value),placeholder:b("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:ve(n,"rate","1"),onChange:u=>t("rate",u.target.value)})]})]}),e.jsx(Is,{value:n.tags??[],onChange:u=>t("tags",u),label:b("node.tags")}),e.jsx(Is,{value:kn(n.load_ips),onChange:u=>t("load_ips",u),label:b("node.loadIps"),placeholder:b("node.loadIpsPlaceholder")}),e.jsx(Ds,{options:s.map(u=>({id:u.id,name:u.name})),value:n.group_id??[],onChange:u=>t("group_id",u),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:l}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ve(n,"host"),onChange:u=>t("host",u.target.value),placeholder:b("node.addressPlaceholder")})]}),h?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.listenIp")}),e.jsx("input",{className:"config-input",value:ve(n,"listen_ip"),onChange:u=>t("listen_ip",u.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(S)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const u=zs(S);d(b("node.connectionSecurityConfig"),u)}}),e.jsxs("select",{className:"config-input",value:ve(n,"tls","0"),onChange:u=>{const $=Number(u.target.value);t("tls",$);const q=zs(S);$!==0&&!n[q]&&t(q,{})},children:[e.jsx("option",{value:"0",children:b("node.none")}),e.jsx("option",{value:"1",children:b("node.useTls")}),S!=="vmess"&&e.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(S)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>d(b("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:ve(n,"server_name"),onChange:u=>t("server_name",u.target.value),placeholder:b("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ve(n,"port"),onChange:u=>t("port",u.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:ve(n,"server_port"),onChange:u=>t("server_port",u.target.value),placeholder:"443"})]})]}),h?e.jsx(fl,{draft:n,set:t,onOpenJson:d,onOpenTransportConfig:w,onOpenSecurityConfig:()=>d(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(S)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:w}),e.jsxs("select",{className:"config-input",value:v,onChange:u=>{t("network",u.target.value);const $=S==="vmess"?"networkSettings":"network_settings";n[$]||t($,{})},children:[S==="vmess"&&Or.map(u=>e.jsx("option",{value:u,children:u},u)),S==="trojan"&&Si.map(u=>e.jsx("option",{value:u,children:u},u)),S==="vless"&&Rr.map(u=>e.jsx("option",{value:u,children:u},u))]})]}):null,S==="trojan"&&e.jsx(ul,{draft:n,set:t}),S==="shadowsocks"&&e.jsx(ml,{draft:n,set:t,onOpenJson:d}),S==="hysteria"&&e.jsx(hl,{draft:n,set:t}),S==="tuic"&&e.jsx(xl,{draft:n,set:t}),S==="vless"&&e.jsx(bl,{draft:n,set:t,onOpenJson:d}),S==="anytls"&&e.jsx(gl,{draft:n,set:t,onOpenJson:d}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:u=>t("parent_id",u.target.value?Number(u.target.value):null),children:[e.jsx("option",{value:"",children:b("node.none")}),a.filter(u=>u.id!==n.id&&!u.parent_id).map(u=>e.jsx("option",{value:u.id,children:u.name},u.id))]})]}),e.jsx(Ds,{options:r.map(u=>({id:u.id,name:u.remarks})),value:n.route_id??[],onChange:u=>t("route_id",u),label:b("node.routingGroups")})]})]})}function pl({draft:n,set:t,onCancel:s,onSave:r}){const a=String(n._type),d=String(n.network??"tcp"),l=Zr(a),w=n[l],b=Vn(w)?$t(w):{},S=Qr(a,d),h=Vn(S)?JSON.stringify(S,null,2):void 0;return e.jsx(Mi,{initialValue:b,placeholder:h,onCancel:s,onSave:v=>{t(l,v),r()}})}function ul({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:r=>t("allow_insecure",r?1:0)})]})}function ml({draft:n,set:t,onOpenJson:s}){const{t:r}=me(),a=Jr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:ve(n,"cipher","aes-128-gcm"),onChange:d=>t("cipher",d.target.value),children:Ci.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:r("node.obfs"),actionText:n.obfs==="http"?r("node.editConfig"):void 0,onAction:()=>s(r("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:ve(n,"obfs"),onChange:d=>t("obfs",d.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(a.host??""),onChange:d=>t("obfs_settings",{...a,host:d.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(a.path??""),onChange:d=>t("obfs_settings",{...a,path:d.target.value}),placeholder:"/"})]})]})]})}function hl({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:ve(n,"version","2"),onChange:r=>t("version",Number(r.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ve(n,"up_mbps","0"),onChange:r=>t("up_mbps",Number(r.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ve(n,"down_mbps","0"),onChange:r=>t("down_mbps",Number(r.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:ve(n,"obfs"),onChange:r=>t("obfs",r.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ve(n,"obfs_password"),onChange:r=>t("obfs_password",r.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)})]})}function xl({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ve(n,"udp_relay_mode","native"),onChange:r=>t("udp_relay_mode",r.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ve(n,"congestion_control","bbr"),onChange:r=>t("congestion_control",r.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)}),e.jsx(ht,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:r=>t("disable_sni",r?1:0)}),e.jsx(ht,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:r=>t("zero_rtt_handshake",r?1:0)})]})}function bl({draft:n,set:t,onOpenJson:s}){const{t:r}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.flow")}),e.jsxs("select",{className:"config-input",value:ve(n,"flow"),onChange:a=>t("flow",a.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.encryption"),actionText:ve(n,"encryption")?r("node.editConfig"):void 0,onAction:()=>s(r("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ve(n,"encryption"),onChange:a=>t("encryption",a.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function gl({draft:n,set:t,onOpenJson:s}){const{t:r}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:r("node.paddingScheme"),actionText:r("node.editConfig"),onAction:()=>s(r("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(ht,{label:r("node.allowInsecure"),checked:n.insecure===1,onChange:a=>t("insecure",a?1:0)})]})}function fl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:r,onOpenSecurityConfig:a}){const{t:d}=me(),l=ve(n,"protocol"),w=Ts(l),b={...vn,...$t(n.warp_settings)},S=ls(b.enable),h=(u,$)=>{t("warp_settings",_n({...b,[u]:$}))},v=u=>{if(t("protocol",u),!u){t("tls",0),t("network","tcp");return}yn.includes(u)?(t("tls",1),n.tls_settings||t("tls_settings",{})):u==="shadowsocks"?t("tls",0):u==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const $=Ts(u);($.length===0||!$.includes(ve(n,"network","tcp")))&&t("network","tcp"),u!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),u!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),u!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:l,onChange:u=>v(u.target.value),children:[e.jsx("option",{value:"",children:d("node.selectNodeProtocol")}),Hr.map(u=>e.jsx("option",{value:u,children:u},u))]})]}),l?e.jsxs(e.Fragment,{children:[wn(l)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?d("node.editConfig"):void 0,onAction:a}),e.jsxs("select",{className:"config-input",value:ve(n,"tls",yn.includes(l)?"1":"0"),onChange:u=>{const $=Number(u.target.value);t("tls",$),$!==0&&!n.tls_settings&&t("tls_settings",{})},children:[tl(l)?e.jsx("option",{value:"0",children:d("node.none")}):null,e.jsx("option",{value:"1",children:d("node.useTls")}),Nn(l)?e.jsx("option",{value:"2",children:d("node.reality")}):null]})]}):null,nl(l)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.transportProtocol"),required:!0,actionText:d("node.editConfig"),onAction:r}),e.jsx("select",{className:"config-input",value:w.includes(ve(n,"network","tcp"))?ve(n,"network","tcp"):"tcp",onChange:u=>{t("network",u.target.value),n.network_settings||t("network_settings",{})},children:w.map(u=>e.jsx("option",{value:u,children:u},u))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:d("node.warpOutbound")}),e.jsx(ht,{label:d("node.warpEnable"),checked:S,onChange:u=>t("warp_settings",_n({...b,enable:u}))}),S?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:u=>h("mode",u.target.value),children:[e.jsx("option",{value:"auto",children:d("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:d("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:u=>h("fail_policy",u.target.value),children:[e.jsx("option",{value:"direct",children:d("node.warpFailDirect")}),e.jsx("option",{value:"block",children:d("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:u=>h("mtu",Number(u.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:u=>h("domain_strategy",u.target.value),children:zi.map(u=>e.jsx("option",{value:u,children:u},u))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:u=>h("private_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:u=>h("peer_public_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:u=>h("endpoint",u.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:Ps(b.addresses),onChange:u=>h("addresses",u.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpReserved")}),e.jsx("input",{className:"config-input",value:Ps(b.reserved),onChange:u=>h("reserved",u.target.value)})]})]})]}):null,l==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.encryption"),actionText:ve(n,"encryption")?d("node.editConfig"):void 0,onAction:()=>s(d("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:ve(n,"encryption"),onChange:u=>t("encryption",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.flow")}),e.jsxs("select",{className:"config-input",value:ve(n,"flow"),onChange:u=>t("flow",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),l==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:ve(n,"cipher","aes-128-gcm"),onChange:u=>t("cipher",u.target.value),children:Ci.map(u=>e.jsx("option",{value:u,children:u},u))})]}),l==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ve(n,"up_mbps","0"),onChange:u=>t("up_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:ve(n,"down_mbps","0"),onChange:u=>t("down_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:ve(n,"obfs"),onChange:u=>t("obfs",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),ve(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:ve(n,"obfs_password"),onChange:u=>t("obfs_password",u.target.value),placeholder:d("node.autoGenHelp")})]}):null]})]}),l==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:ve(n,"udp_relay_mode","native"),onChange:u=>t("udp_relay_mode",u.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:ve(n,"congestion_control","bbr"),onChange:u=>t("congestion_control",u.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:d("node.disableSni"),checked:n.disable_sni===1,onChange:u=>t("disable_sni",u?1:0)}),e.jsx(ht,{label:d("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:u=>t("zero_rtt_handshake",u?1:0)})]}),l==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>s(d("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Fs={vmess:wa,vless:$a,trojan:Yn,shadowsocks:ns,hysteria:fa,tuic:ea,anytls:sn,v2node:xn,zicnode:xn},yl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},vl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function St(n){return yl[n]??vl}function jl({draft:n,config:t,onCopy:s,t:r}){const a=Number(n.id??0),d=a>0?ll(a,t):"",l=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:r("node.quickInstallTitle")}),e.jsx("span",{children:r("node.quickInstallHelp")})]}),a>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:d}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(d),children:[e.jsx(en,{size:15}),r("node.copyInstallCommand")]}),l?e.jsx("span",{className:"node-install-warning",children:r("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:r("node.installSaveFirst")})]})}function wl(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState([]),[l,w]=o.useState([]),[b,S]=o.useState(null),[h,v]=o.useState(null),[u,$]=o.useState(!0),[q,A]=o.useState(!1),[k,L]=o.useState(""),[P,_]=o.useState(""),[O,U]=o.useState(1),[H,N]=o.useState(()=>Wr()),[E,I]=o.useState(!1),[J,c]=o.useState({}),[C,R]=o.useState({apiHost:rs,apiKey:""}),[T,B]=o.useState(!1),[f,F]=o.useState(""),[M,se]=o.useState(null),[g,V]=o.useState(null),[Q,re]=o.useState(null),[te,le]=o.useState(null),[Ee,Le]=o.useState(null),[Se,ke]=o.useState(null),[fe,Ce]=o.useState(null),je=(x,i)=>{x.dataTransfer.effectAllowed="move",ke(i)},We=(x,i)=>{if(x.preventDefault(),Se===null||Se===i)return;const m=[...s],j=m[Se];m.splice(Se,1),m.splice(i,0,j),ke(i),r(m)},y=()=>{ke(null)},ie=(x,i)=>{E&&Ce(i)},G=x=>{if(!E||fe===null)return;x.cancelable&&x.preventDefault();const i=x.touches[0],m=document.elementFromPoint(i.clientX,i.clientY);if(!m)return;const j=m.closest(".mobile-node-card");if(!j)return;const D=j.getAttribute("data-index");if(D===null)return;const Z=Number(D);if(Z!==fe&&Z>=0&&Z<s.length){const ge=[...s],xe=ge[fe];ge.splice(fe,1),ge.splice(Z,0,xe),Ce(Z),r(ge)}},be=()=>{Ce(null)},ze=o.useCallback(x=>{const i=Ee===x;Le(i?null:x),le(m=>i&&m===x?null:m),i||(re(null),V(null))},[Ee]),he=o.useCallback(x=>{const i=Q===x;re(i?null:x),V(m=>i&&m===x?null:m),i||(Le(null),le(null))},[Q]);o.useEffect(()=>{const x=i=>{const m=i.target;if(!m)return;const j=m instanceof Element?m:m.parentElement;j!=null&&j.closest(".load-ip-status-wrap, .load-ip-online-wrap")||(Le(null),re(null))};return document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x)}},[]),o.useEffect(()=>{U(1)},[f,H]),o.useEffect(()=>{try{window.localStorage.setItem(Ti,String(H))}catch{}},[H]);const De=s.filter(x=>{const i=f.toLowerCase().trim();return i?x.name.toLowerCase().includes(i)||x.host.toLowerCase().includes(i)||kn(x.load_ips).some(m=>m.toLowerCase().includes(i))||String(x.id).includes(i)||x.type.toLowerCase().includes(i):!0}),Ue=Math.ceil(De.length/H),ae=De.slice((O-1)*H,O*H);function xt(x,i){return i<=7?Array.from({length:i},(m,j)=>j+1):x<=4?[1,2,3,4,5,"...",i]:x>=i-3?[1,"...",i-4,i-3,i-2,i-1,i]:[1,"...",x-1,x,x+1,"...",i]}const ue=xt(O,Ue),nt=async()=>{var x,i;A(!0),L(""),_("");try{const m={};s.forEach((j,D)=>{m[j.type]||(m[j.type]={}),m[j.type][String(j.id)]=D+1}),await or(m),(x=window.showToast)==null||x.call(window,t("node.saveSortSuccess"),"success"),I(!1),await pt()}catch(m){L(m instanceof Error?m.message:t("node.saveSortFailed")),(i=window.showToast)==null||i.call(window,m instanceof Error?m.message:t("node.saveSortFailed"),"error")}finally{A(!1)}},st=async()=>{I(!1),await Ve()},it=()=>De.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:O===1,onClick:()=>U(x=>Math.max(x-1,1)),children:"<"}),ue.map((x,i)=>x==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${i}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${O===x?"active":""}`,onClick:()=>U(Number(x)),children:x},`page-${x}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:O===Ue||Ue===0,onClick:()=>U(x=>Math.min(x+1,Ue)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:H,onChange:x=>{const i=Number(x.target.value);Pi(i)&&N(i)},children:jn.map(x=>e.jsxs("option",{value:x,children:[x," / ",t("common.perPage")]},x))})})]}),[z,ce]=o.useState(null),[de,X]=o.useState(!1),[we,ye]=o.useState(""),[Me,$e]=o.useState(!1),[dt,Xe]=o.useState(!1);async function qe(x){var m,j;x.preventDefault();const i=we.trim();if(!(!i||!b)){$e(!0),L(""),_("");try{await is({name:i});const D=await Bt();d(D);const Z=D.filter(ge=>ge.name===i).sort((ge,xe)=>xe.id-ge.id)[0];if(Z){const ge=b.group_id??[];ge.includes(Z.id)||_t("group_id",[...ge,Z.id])}ye(""),X(!1),(m=window.showToast)==null||m.call(window,t("node.groupCreateSuccess"),"success")}catch(D){L(D instanceof Error?D.message:t("node.groupCreateFailed")),(j=window.showToast)==null||j.call(window,D instanceof Error?D.message:t("node.groupCreateFailed"),"error")}finally{$e(!1)}}}const Mt=(x,i)=>{if(!b)return;let m=b[i];if(typeof m=="string"&&m.trim())try{m=JSON.parse(m)}catch{}["tlsSettings","tls_settings"].includes(i)&&mt(String(b._type))&&(m=gt(m,Number(b.tls??0))),ce({title:x,key:i,value:m&&typeof m=="object"?m:{}})},Ve=o.useCallback(async()=>{var x,i,m,j,D;$(!0),L("");try{const[Z,ge,xe,Ke]=await Promise.all([vs(),Bt(),yi(),bi()]);r(Z.data),d(ge),w(xe);const Ne=$s((x=Ke.site)==null?void 0:x.app_url);R({apiHost:$s((i=Ke.server)==null?void 0:i.server_api_url,Ne),apiKey:Fe((m=Ke.server)==null?void 0:m.server_token)}),B(ls(((j=Ke.subscribe)==null?void 0:j.device_hwid_available)??((D=Ke.subscribe)==null?void 0:D.device_hwid_enable)))}catch(Z){L(Z instanceof Error?Z.message:t("knowledge.loadFailed"))}finally{$(!1)}},[]),pt=o.useCallback(async()=>{try{const x=await vs();r(x.data)}catch(x){console.error("Refresh nodes failed",x)}},[]);async function Gt(x){var m;const i=await Pt(x);(m=window.showToast)==null||m.call(window,t(i?"node.installCopied":"common.copyFailed"),i?"success":"error")}o.useEffect(()=>{if(!He()){n.replace("/login");return}Ve()},[Ve,n]);function At(x){S(Ls(x)),v(null),L(""),_("")}function Lt(x){S(Ls(x.type,x)),L(""),_("")}function It(x,i){if(!T||!i&&Number(x.online??0)<=0)return;const m=new URLSearchParams({node_type:x.type,node_id:String(x.id)}),j=String(i??"").trim();j&&m.set("online_ip",j),n.push(`/device?${m.toString()}`)}function Ot(x){return x.reported?x.online>0?2:1:0}function Nt(x,i){const m=Rt(x);if(!m.length)return null;const j=`${kt(x)}-load-ip-status`,D=Ee===j||te===j;return e.jsxs("span",{className:`load-ip-status-wrap ${i}${D?" active":""}`,onMouseEnter:i==="desktop"?()=>le(j):void 0,onMouseLeave:i==="desktop"?()=>le(Z=>Z===j?null:Z):void 0,children:[e.jsx("button",{className:"load-ip-status-button",type:"button","aria-expanded":D,"aria-label":t("node.loadIpStatusTitle"),onClick:()=>ze(j),children:e.jsx(xn,{size:14})}),D?e.jsxs("div",{className:"load-ip-status-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpStatusTitle")}),e.jsxs("strong",{children:[m.length," IP"]})]}),e.jsx("div",{className:"load-ip-status-list",children:m.map(Z=>{const ge=Ot(Z);return e.jsxs("div",{className:"load-ip-status-row",children:[e.jsx("span",{className:`status-indicator-dot status-${ge}`}),e.jsx("span",{className:"mono",children:Z.ip})]},Z.ip)})})]}):null]})}function kt(x){return`${x.type}-${x.id}`}function Rt(x){const i=kn(x.load_ips),m=Array.isArray(x.load_ip_online)?x.load_ip_online:[],j=new Map;return m.forEach(D=>{if(!D||typeof D!="object")return;const Z=D,ge=String(Z.ip??"").trim();if(!ge)return;const xe=Z.last_push_at;j.set(ge,{online:Math.max(0,Number(Z.online??0)),lastPushAt:xe==null||xe===""?null:Number(xe)})}),i.map(D=>{const Z=j.get(D);return{ip:D,online:Math.max(0,Number((Z==null?void 0:Z.online)??0)),lastPushAt:(Z==null?void 0:Z.lastPushAt)??null,reported:(Z==null?void 0:Z.lastPushAt)!==null&&(Z==null?void 0:Z.lastPushAt)!==void 0}})}function p(x,i){return i.some(m=>m.reported)?i.reduce((m,j)=>m+j.online,0):Number(x.online??0)}function W(x,i,m){return e.jsxs("div",{className:"load-ip-online-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpOnlineByIp")}),e.jsxs("strong",{children:[t("node.loadIpOnlineTotal"),": ",m]})]}),e.jsx("div",{className:"load-ip-online-list",children:i.map(j=>{const D=T&&j.online>0;return e.jsxs("div",{className:"load-ip-online-row",children:[e.jsx("span",{className:"mono",children:j.ip}),e.jsxs("span",{className:"load-ip-online-actions",children:[e.jsx("span",{className:`load-ip-online-count${j.reported?"":" is-muted"}`,children:j.reported?j.online:t("node.loadIpOnlineNoReport")}),D?e.jsx("button",{className:"load-ip-online-device-button",type:"button","aria-label":`${t("device.title")} ${j.ip}`,onClick:Z=>{Z.stopPropagation(),It(x,j.ip)},children:e.jsx(Qn,{size:12})}):null]})]},j.ip)})})]})}function ne(x,i){const m=Rt(x),j=m.length>0,D=j?p(x,m):Number(x.online??0),Z=!j&&T&&D>0,xe=`${i==="mobile"?"mobile-badge-pill":"online-badge"}${Z||j?" online-badge-link":""}${j?" load-ip-online-trigger":""}`,Ke=i==="mobile"?12:13,Ne={...i==="mobile"?{marginRight:4}:{},color:D>0?"#10b981":"var(--muted)",opacity:D>0?1:.6},lt=j?xn:Qn,zn=e.jsxs(e.Fragment,{children:[e.jsx(lt,{size:Ke,style:Ne}),D]});if(j){const Wt=kt(x),Tn=Q===Wt||g===Wt;return e.jsxs("span",{className:`load-ip-online-wrap${Tn?" active":""}`,onMouseEnter:i==="desktop"?()=>V(Wt):void 0,onMouseLeave:i==="desktop"?()=>V(ds=>ds===Wt?null:ds):void 0,children:[e.jsx("button",{className:xe,type:"button","aria-expanded":Tn,onClick:()=>he(Wt),children:zn}),Tn?W(x,m,D):null]})}return Z?e.jsx("button",{className:xe,type:"button",onClick:()=>It(x),children:zn}):e.jsx("span",{className:xe,children:zn})}async function pe(x){var Z,ge,xe,Ke;if(x.preventDefault(),!b)return;A(!0),L(""),_("");const i=String(b._type),m={...b};if(mt(i)&&!Fe(m.protocol)){L(t("node.protocolRequired")),(Z=window.showToast)==null||Z.call(window,t("node.protocolRequired"),"error"),A(!1);return}if(m.load_ips=Ei(m.load_ips),m.load_ips.length>100){L(t("node.loadIpsLimit")),(ge=window.showToast)==null||ge.call(window,t("node.loadIpsLimit"),"error"),A(!1);return}for(const Ne of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete m[Ne];if(m.padding_scheme!==void 0&&m.padding_scheme!==null&&typeof m.padding_scheme!="string"&&(m.padding_scheme=JSON.stringify(m.padding_scheme)),m.padding_scheme)try{const Ne=JSON.parse(String(m.padding_scheme));if(typeof Ne!="object"||Ne===null)throw new Error("Invalid JSON array or object")}catch(Ne){L("Invalid Padding Scheme configuration: "+(Ne instanceof Error?Ne.message:"JSON error")),A(!1);return}const j=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Ne of j)(m[Ne]===""||m[Ne]===null||m[Ne]===void 0)&&delete m[Ne];if(mt(i)){const Ne=String(m.protocol??""),lt=Number(m.tls??0);m.warp_settings=_n(m.warp_settings),wn(Ne)?yn.includes(Ne)&&lt!==2||!Nn(Ne)&&lt===2?(m.tls=1,m.tls_settings=gt(m.tls_settings,1)):m.tls_settings=gt(m.tls_settings,lt):(m.tls=0,m.tls_settings={})}const D=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const Ne of D){const lt=m[Ne];(lt==null||typeof lt=="object"&&Object.keys(lt).length===0)&&delete m[Ne]}m.port!==void 0&&(m.port=String(m.port).trim()),m.server_port!==void 0&&(m.server_port=Number(m.server_port)),m.tls!==void 0&&(m.tls=Number(m.tls)),m.rate!==void 0&&(m.rate=Number(m.rate)),m.check!==void 0&&(m.check=Number(m.check));try{await sr(i,m),S(null),(xe=window.showToast)==null||xe.call(window,t("node.saveSuccess"),"success"),await pt()}catch(Ne){L(Ne instanceof Error?Ne.message:t("node.saveFailed")),(Ke=window.showToast)==null||Ke.call(window,Ne instanceof Error?Ne.message:t("node.saveFailed"),"error")}finally{A(!1)}}async function Ie(x){const i=[...s];r(m=>m.map(j=>j.id===x.id&&j.type===x.type?{...j,show:x.show?0:1}:j));try{await js(x.type,x.id,{show:x.show?0:1}),await pt()}catch(m){r(i),L(m instanceof Error?m.message:t("node.updateFailed"))}}async function ut(x){const i=[...s],m=Number(x.check??0)?0:1;r(j=>j.map(D=>D.id===x.id&&D.type===x.type?{...D,check:m}:D));try{await js(x.type,x.id,{check:m}),await pt()}catch(j){r(i),L(j instanceof Error?j.message:t("node.updateFailed"))}}async function ft(x){var i,m;try{await ar(x.type,x.id),(i=window.showToast)==null||i.call(window,t("node.copySuccess"),"success"),await pt()}catch(j){L(j instanceof Error?j.message:t("node.copyFailed")),(m=window.showToast)==null||m.call(window,j instanceof Error?j.message:t("node.copyFailed"),"error")}}async function Te(x){var i;(i=window.showConfirm)==null||i.call(window,{message:t("node.deleteConfirm",{name:x.name}),onConfirm:async()=>{var j,D;const m=[...s];r(Z=>Z.filter(ge=>!(ge.id===x.id&&ge.type===x.type))),L("");try{await ir(x.type,x.id),(j=window.showToast)==null||j.call(window,t("node.deleteSuccess"),"success"),await pt()}catch(Z){r(m),L(Z instanceof Error?Z.message:t("node.deleteFailed")),(D=window.showToast)==null||D.call(window,Z instanceof Error?Z.message:t("node.deleteFailed"),"error")}}})}const _t=(x,i)=>S(m=>{if(!m)return null;const j={...m,[x]:i};if(!mt(String(j._type)))return j;if(x==="tls_settings"&&(j.tls_settings=gt(i,Number(j.tls??0))),x==="tls"&&(j.tls_settings=gt(j.tls_settings,Number(i))),x==="warp_settings"&&(j.warp_settings=_n(i)),x==="protocol"){const D=String(i);wn(D)?!Nn(D)&&Number(j.tls??0)===2?(j.tls=1,j.tls_settings=gt(j.tls_settings,1)):j.tls_settings=gt(j.tls_settings,Number(j.tls??0)):(j.tls=0,j.tls_settings={})}return j}),Ht=b?String(b._type):"",rt=sl(Ht);return e.jsxs(Ge,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>v(h?null:"show"),children:e.jsx(at,{size:18})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>v(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Xn.map(x=>{const i=St(x.value),m=Fs[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{At(x.value),v(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:i==null?void 0:i.bg,backgroundColor:i==null?void 0:i.rowBg},children:e.jsx(m,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(i==null?void 0:i.bg)??"var(--surface-soft)",color:(i==null?void 0:i.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:f,onChange:x=>F(x.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${E?"success-btn":""}`,type:"button",onClick:E?nt:()=>I(!0),disabled:q,children:t(E?q?"node.saving":"node.saveOrder":"node.editSortOrder")}),E&&e.jsx("button",{className:"ghost-button",type:"button",onClick:st,children:t("common.cancel")})]})]}),k?e.jsx("div",{className:"form-error",children:k}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Pe,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:t("node.colCheck")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t(E?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[ae.map(x=>{const i=s.findIndex(m=>m.id===x.id&&m.type===x.type);return e.jsxs("tr",{draggable:E,onDragStart:m=>je(m,i),onDragOver:m=>We(m,i),onDragEnd:y,className:Se===i?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:St(x.type).bg,color:St(x.type).text,border:`1px solid ${St(x.type).border}`},children:x.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button","aria-label":t("node.toggleShow"),onClick:()=>void Ie(x),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Number(x.check??0)?"active":""}`,type:"button","aria-label":t("node.toggleCheck"),onClick:()=>void ut(x),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"node-name-cell",children:e.jsxs("div",{className:"node-name-line",children:[Nt(x,"desktop")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("strong",{children:x.name})]})})}),e.jsx("td",{className:"mobile-hide",children:e.jsxs("span",{className:"mono",children:[x.host,":",x.port||x.server_port]})}),e.jsx("td",{children:ne(x,"desktop")}),e.jsxs("td",{className:"mobile-hide",children:[x.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const m=x.group_id??[],j=J[`${x.type}-${x.id}`],D=m.map(xe=>{const Ke=a.find(Ne=>Number(Ne.id)===Number(xe));return e.jsx("span",{className:"tag",children:(Ke==null?void 0:Ke.name)??`#${xe}`},xe)});if(m.length<=3||j)return e.jsxs(e.Fragment,{children:[D,m.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>c(xe=>({...xe,[`${x.type}-${x.id}`]:!1})),children:t("node.collapse")})]});const Z=D.slice(0,3),ge=m.length-3;return e.jsxs(e.Fragment,{children:[Z,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>c(xe=>({...xe,[`${x.type}-${x.id}`]:!0})),children:["+",ge,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:m.length})}),D]})]})]})})()})}),e.jsx("td",{children:E?e.jsx("div",{className:"drag-handle",children:e.jsx(Xt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Lt(x),se(null)},children:[e.jsx(Be,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ft(x),se(null)},children:[e.jsx(en,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Te(x),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})})]},`${x.type}-${x.id}`)}),!u&&De.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),it()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>v(h?null:"show"),children:e.jsx(at,{size:20})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>v(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Xn.map(x=>{const i=St(x.value),m=Fs[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{At(x.value),v(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:i==null?void 0:i.bg,backgroundColor:i==null?void 0:i.rowBg},children:e.jsx(m,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(i==null?void 0:i.bg)??"var(--surface-soft)",color:(i==null?void 0:i.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:f,onChange:x=>F(x.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${E?"active":""}`,type:"button",onClick:()=>I(!E),children:e.jsx(Xt,{size:20})})]}),E&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:st,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void nt(),disabled:q,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(q?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[ae.map(x=>{const i=s.findIndex(m=>m.id===x.id&&m.type===x.type);return e.jsxs("div",{className:`mobile-node-card ${Se===i||fe===i?"dragging":""}`,draggable:E,onDragStart:m=>je(m,i),onDragOver:m=>We(m,i),onDragEnd:y,onTouchStart:m=>ie(m,i),onTouchMove:G,onTouchEnd:be,"data-index":i,style:E?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("div",{className:"card-header-left",children:e.jsxs("div",{className:"mobile-node-name-line",children:[Nt(x,"mobile")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("span",{className:"mobile-node-name",children:x.name})]})}),e.jsx("div",{className:"card-header-right",children:E?e.jsx("div",{className:"drag-handle",children:e.jsx(Xt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-node-switch-pair",children:[e.jsxs("span",{className:"mobile-node-switch-item",children:[e.jsx("small",{children:t("node.colShow")}),e.jsx("button",{type:"button",className:`admin-switch ${x.show===1?"active":""}`,"aria-label":t("node.toggleShow"),onClick:()=>void Ie(x),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("span",{className:"mobile-node-switch-item",children:[e.jsx("small",{children:t("node.colCheck")}),e.jsx("button",{type:"button",className:`admin-switch ${Number(x.check??0)?"active":""}`,"aria-label":t("node.toggleCheck"),onClick:()=>void ut(x),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>se((M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(M==null?void 0:M.id)===x.id&&(M==null?void 0:M.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>se(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Lt(x),se(null)},children:[e.jsx(Be,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ft(x),se(null)},children:[e.jsx(en,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Te(x),se(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsx("div",{className:"card-middle-row",children:e.jsxs("span",{className:"mobile-node-address",children:[x.host,":",x.port||x.server_port]})}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:St(x.type).bg,color:St(x.type).text,border:`1px solid ${St(x.type).border}`},children:x.id}),ne(x,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[x.rate," x"]})]})]},`${x.type}-${x.id}`)}),!u&&De.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),it()]}),b!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:b.id?t("node.editNodeTitle",{type:rt}):t("node.createNodeTitle",{type:rt})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:rt})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:pe,children:[e.jsx(dl,{draft:b,set:_t,groups:a,routes:l,nodes:s,onOpenJson:Mt,onAddGroup:()=>X(!0),onOpenTransportConfig:()=>Xe(!0)}),mt(Ht)?e.jsx(jl,{draft:b,config:C,onCopy:x=>void Gt(x),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ot,{size:16}),t(q?"node.saving":"common.save")]})]})]})]})}),z!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:z.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(z.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(null),children:e.jsx(_e,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(z.key)?e.jsx(cl,{initialValue:z.value,isSnakeCase:z.key==="tls_settings",tlsMode:el(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>ce(null),onSave:x=>{_t(z.key,x),ce(null)}}):e.jsx(Mi,{initialValue:z.value,onCancel:()=>ce(null),onSave:x=>{_t(z.key,x),ce(null)}})})]})}),de&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>X(!1),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{onSubmit:qe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:we,onChange:x=>ye(x.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>X(!1),disabled:Me,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:Me||!we.trim(),children:t(Me?"node.saving":"common.confirm")})]})]})]})}),dt&&b!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xe(!1),children:e.jsx(_e,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(pl,{draft:b,set:_t,onCancel:()=>Xe(!1),onSave:()=>Xe(!1)})})]})})]})}function Nl(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(null),[l,w]=o.useState(!0),[b,S]=o.useState(!1),[h,v]=o.useState(""),u=o.useCallback(async()=>{w(!0),v("");try{r(await Bt())}catch(k){v(k instanceof Error?k.message:t("serverGroup.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function $(k){d({id:k==null?void 0:k.id,name:(k==null?void 0:k.name)??""}),v("")}async function q(k){var L;if(k.preventDefault(),!!a){S(!0),v("");try{await is(a),d(null),(L=window.showToast)==null||L.call(window,t("serverGroup.saveSuccess"),"success"),await u()}catch(P){v(P instanceof Error?P.message:t("serverGroup.saveFailed"))}finally{S(!1)}}}async function A(k){var L;(L=window.showConfirm)==null||L.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var P,_;v("");try{await ro(k),(P=window.showToast)==null||P.call(window,t("serverGroup.deleteSuccess"),"success"),await u()}catch(O){v(O instanceof Error?O.message:t("serverGroup.deleteFailed")),(_=window.showToast)==null||_.call(window,O instanceof Error?O.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:l,children:[e.jsx(Re,{size:16}),t(l?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(at,{size:16}),t("serverGroup.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,l&&s.length===0?e.jsx(Pe,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(k=>e.jsxs("tr",{children:[e.jsx("td",{children:k.id}),e.jsx("td",{children:e.jsx("strong",{children:k.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),k.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(bn,{size:14}),k.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(k),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void A(k.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},k.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:q,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:a.name,onChange:k=>d({...a,name:k.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function kl(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function _l(n){var t;return((t=fi.find(s=>s.value===n))==null?void 0:t.label)??n}function Sl(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(null),[l,w]=o.useState(!0),[b,S]=o.useState(!1),[h,v]=o.useState(""),u=o.useCallback(async()=>{w(!0),v("");try{r(await yi())}catch(k){v(k instanceof Error?k.message:t("serverRoute.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function $(k){d(kl(k)),v("")}async function q(k){var P;if(k.preventDefault(),!a)return;S(!0),v("");const L=a.action==="default_out"?[]:a.match.split(`
`).map(_=>_.trim()).filter(Boolean);try{await lo({id:a.id,remarks:a.remarks,match:L,action:a.action,action_value:a.action_value||null}),d(null),(P=window.showToast)==null||P.call(window,t("serverRoute.saveSuccess"),"success"),await u()}catch(_){v(_ instanceof Error?_.message:t("serverRoute.saveFailed"))}finally{S(!1)}}async function A(k){var L;(L=window.showConfirm)==null||L.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var P,_;v("");try{await co(k),(P=window.showToast)==null||P.call(window,t("serverRoute.deleteSuccess"),"success"),await u()}catch(O){v(O instanceof Error?O.message:t("serverRoute.deleteFailed")),(_=window.showToast)==null||_.call(window,O instanceof Error?O.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:l,children:[e.jsx(Re,{size:16}),t(l?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(at,{size:16}),t("serverRoute.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,l&&s.length===0?e.jsx(Pe,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(k=>e.jsxs("tr",{children:[e.jsx("td",{children:k.id}),e.jsx("td",{children:e.jsx("strong",{children:k.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(k.match)?k.match:[]).slice(0,3).map((L,P)=>e.jsx("span",{className:"tag",children:L},P)),Array.isArray(k.match)&&k.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",k.match.length-3]}):null,!Array.isArray(k.match)||k.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:_l(k.action)})}),e.jsx("td",{children:k.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(k),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void A(k.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},k.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:q,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:a.remarks,onChange:k=>d({...a,remarks:k.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:a.action,onChange:k=>d({...a,action:k.target.value}),children:fi.map(k=>e.jsx("option",{value:k.value,children:k.label},k.value))})]}),a.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:a.match,onChange:k=>d({...a,match:k.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:a.action_value,onChange:k=>d({...a,action_value:k.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Cl(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function zl(n){const t=r=>r===""?null:Math.round(Number(r)*100),s=r=>r===""?null:Number(r);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function et(n){return n==null?"—":Je(n)}function Tl(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function Pl(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState([]),[l,w]=o.useState(null),[b,S]=o.useState(!0),[h,v]=o.useState(!1),[u,$]=o.useState(""),[q,A]=o.useState(""),[k,L]=o.useState(!1),[P,_]=o.useState(""),[O,U]=o.useState(!1),[H,N]=o.useState(null),[E,I]=o.useState(null),J=o.useRef(!1),c=o.useRef(null),C=o.useRef(!1),R=y=>y instanceof Element&&!!y.closest(".drag-handle"),T=(y,ie)=>{if(y===ie||y<0||ie<0||y>=s.length||ie>=s.length)return!1;const G=[...s],be=G[y];return G.splice(y,1),G.splice(ie,0,be),r(G),c.current=G.map(ze=>ze.id),J.current=!0,!0},B=async()=>{const y=J.current,ie=c.current??s.map(G=>G.id);if(J.current=!1,c.current=null,C.current=!1,N(null),I(null),!!y)try{await mo(ie),await Q()}catch(G){$(G instanceof Error?G.message:t("plan.sortFailed")),await Q()}},f=(y,ie)=>{var G;if(!R(y.target)){y.preventDefault();return}y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",String(((G=s[ie])==null?void 0:G.id)??ie)),J.current=!1,N(ie)},F=(y,ie)=>{H===null||H===ie||(y.preventDefault(),T(H,ie)&&N(ie))},M=async()=>{await B()},se=(y,ie)=>{!R(y.target)||y.touches.length!==1||(J.current=!1,C.current=!0,I(ie))},g=y=>{if(!C.current||E===null)return;y.cancelable&&y.preventDefault();const ie=y.touches[0],G=document.elementFromPoint(ie.clientX,ie.clientY);if(!G)return;const be=G.closest("tr, [data-index]");if(!be)return;const ze=be.getAttribute("data-index");if(ze===null)return;const he=Number(ze);T(E,he)&&I(he)},V=async()=>{!C.current&&E===null||await B()},Q=o.useCallback(async()=>{S(!0),$("");try{const[y,ie]=await Promise.all([Et(),Bt()]);r(y),d(ie)}catch(y){$(y instanceof Error?y.message:t("plan.loadFailed"))}finally{S(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}Q()},[Q,n]);function re(){w(null),L(!1),_("")}function te(y){w(Cl(y)),L(!1),_(""),$(""),A("")}async function le(y){var ie,G;if(y.preventDefault(),!!l){v(!0),$(""),A("");try{await po(zl(l)),re(),(ie=window.showToast)==null||ie.call(window,t("plan.saveSuccess"),"success"),await Q()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.saveFailed"),"error")}finally{v(!1)}}}async function Ee(y,ie){var G;try{await Pn(y,{show:ie?0:1}),await Q()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Le(y,ie){var G;try{await Pn(y,{renew:ie?0:1}),await Q()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Se(y,ie){var G;try{await Pn(y,{allow_subscribe_url:ie?0:1}),await Q()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function ke(y){var ie;(ie=window.showConfirm)==null||ie.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var G,be;$(""),A("");try{await uo(y),(G=window.showToast)==null||G.call(window,t("plan.deleteSuccess"),"success"),await Q()}catch(ze){(be=window.showToast)==null||be.call(window,ze instanceof Error?ze.message:t("plan.deleteFailed"),"error")}}})}function fe(y){var ie;return((ie=a.find(G=>G.id===y))==null?void 0:ie.name)??`#${y}`}function Ce(y){return Number(y.allow_subscribe_url??1)===1}function je(y,ie){w(G=>G&&{...G,[y]:ie})}async function We(y){var G,be;y.preventDefault();const ie=P.trim();if(!(!ie||!l)){U(!0),$(""),A("");try{await is({name:ie});const ze=await Bt();d(ze);const he=ze.filter(De=>De.name===ie).sort((De,Ue)=>Ue.id-De.id)[0];he&&je("group_id",String(he.id)),_(""),L(!1),(G=window.showToast)==null||G.call(window,t("node.groupCreateSuccess"),"success")}catch(ze){const he=ze instanceof Error?ze.message:t("node.groupCreateFailed");$(he),(be=window.showToast)==null||be.call(window,he,"error")}finally{U(!1)}}}return e.jsxs(Ge,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:Q,disabled:b,children:[e.jsx(Re,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>te(),children:[e.jsx(at,{size:16}),t("plan.add")]})]})]}),u?e.jsx("div",{className:"form-error",children:u}):null,q?e.jsx("div",{className:"form-success",children:q}):null,b&&s.length===0?e.jsx(Pe,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((y,ie)=>e.jsxs("tr",{onDragOver:G=>F(G,ie),"data-index":ie,className:H===ie||E===ie?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:G=>f(G,ie),onDragEnd:M,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Xt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:y.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${y.show?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Ee(y.id,y.show)},title:y.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${y.renew?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Le(y.id,y.renew)},title:y.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Ce(y)?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Se(y.id,Ce(y)?1:0)},title:Ce(y)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:y.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),y.count??0]})}),e.jsx("td",{children:fe(y.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[y.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(y.month_price)})]}),y.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(y.quarter_price)})]}),y.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(y.half_year_price)})]}),y.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(y.year_price)})]}),y.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(y.two_year_price)})]}),y.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(y.three_year_price)})]}),y.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(y.onetime_price)})]}),y.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(y.reset_price)})]})]})}),e.jsxs("td",{children:[y.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:G=>{G.stopPropagation(),te(y)},children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:G=>{G.stopPropagation(),ke(y.id)},children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},y.id)),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((y,ie)=>e.jsxs("div",{className:`mobile-node-card ${H===ie||E===ie?"dragging":""}`,onDragOver:G=>F(G,ie),"data-index":ie,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:G=>f(G,ie),onDragEnd:M,onTouchStart:G=>se(G,ie),onTouchMove:g,onTouchEnd:V,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Xt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:y.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:y.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:G=>{G.stopPropagation(),te(y)},children:[e.jsx(Be,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:G=>{G.stopPropagation(),ke(y.id)},children:[e.jsx(Ze,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${y.show?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Ee(y.id,y.show)},title:y.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${y.renew?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Le(y.id,y.renew)},title:y.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Ce(y)?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Se(y.id,Ce(y)?1:0)},title:Ce(y)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(gn,{size:12,style:{marginRight:4}}),y.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:fe(y.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[y.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[y.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:et(y.month_price)})]}),y.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:et(y.quarter_price)})]}),y.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:et(y.half_year_price)})]}),y.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:et(y.year_price)})]}),y.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:et(y.two_year_price)})]}),y.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:et(y.three_year_price)})]}),y.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:et(y.onetime_price)})]}),y.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:et(y.reset_price)})]})]})]},y.id)),!b&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:re,children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:le,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:l.name,onChange:y=>je("name",y.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:l.content,onChange:y=>je("content",y.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>L(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:l.group_id,onChange:y=>je("group_id",y.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),a.map(y=>e.jsx("option",{value:y.id,children:y.name},y.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:l.transfer_enable,onChange:y=>je("transfer_enable",y.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.device_limit,onChange:y=>je("device_limit",y.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.speed_limit,onChange:y=>je("speed_limit",y.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.capacity_limit,onChange:y=>je("capacity_limit",y.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:l.reset_traffic_method,onChange:y=>je("reset_traffic_method",y.target.value),children:Tl(t).map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:l.allow_subscribe_url==="1",onChange:y=>je("allow_subscribe_url",y.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.month_price,onChange:y=>je("month_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.quarter_price,onChange:y=>je("quarter_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.half_year_price,onChange:y=>je("half_year_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.year_price,onChange:y=>je("year_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.two_year_price,onChange:y=>je("two_year_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.three_year_price,onChange:y=>je("three_year_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.onetime_price,onChange:y=>je("onetime_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.reset_price,onChange:y=>je("reset_price",y.target.value),placeholder:"—"})]})]}),l.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:l.force_update,onChange:y=>je("force_update",String(y.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:re,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"plan.saving":"common.save")]})]})]})]})}):null,k&&l?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>L(!1),disabled:O,children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{onSubmit:We,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:P,onChange:y=>_(y.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>L(!1),disabled:O,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:O||!P.trim(),children:t(O?"node.saving":"common.confirm")})]})]})]})}):null]})}const As={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Os={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Rs(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return`${s}/${r}/${a} ${d}:${l}`}function Hs(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),w=String(t.getSeconds()).padStart(2,"0");return`${s}-${r}-${a} ${d}:${l}:${w}`}function Us(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function ct(n){return`${Je(Number(n??0))} ₫`}const Li="adminzic_user_cache";function $l(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(Li);return n?JSON.parse(n):{}}catch{return{}}}function El(n){if(!(typeof window>"u"))try{sessionStorage.setItem(Li,JSON.stringify(n))}catch{}}const Ut=(n,t)=>`${n}:${t}`;function Ml(){var xt,ue,nt,st,it;const n=Oe(),t=nn(),{t:s}=me(),r=o.useCallback(z=>{switch(z){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${z}`,cls:""}}},[s]),a=o.useCallback(z=>{const ce=`order.period.${z}`,de=s(ce);return de===ce?Os[z]??z:de},[s]),[d,l]=o.useState([]),[w,b]=o.useState([]),[S,h]=o.useState({}),[v,u]=o.useState(0),[$,q]=o.useState(1),[A]=o.useState(15),[k,L]=o.useState(""),[P,_]=o.useState("trade_no"),[O,U]=o.useState(!0),[H,N]=o.useState(null),[E,I]=o.useState(!1),[J,c]=o.useState(""),[C,R]=o.useState(""),[T,B]=o.useState(null),[f,F]=o.useState(null),[M,se]=o.useState(!1),[g,V]=o.useState(null),[Q,re]=o.useState(!1),[te,le]=o.useState(()=>$l()),Ee=o.useCallback((z,ce)=>{const de=Ut(ce,z);F(null),B(X=>X===de?null:de)},[]),Le=o.useCallback((z,ce)=>{const de=Ut(ce,z);B(null),F(X=>X===de?null:de)},[]),Se=o.useCallback(z=>{const ce=Number(z.coupon_id??0);return ce?S[ce]??`#${ce}`:null},[S]);o.useEffect(()=>{if(!T&&!f)return;const z=()=>{B(null),F(null)},ce=X=>{const we=X.target;we!=null&&we.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||z()},de=X=>{X.key==="Escape"&&z()};return document.addEventListener("pointerdown",ce),document.addEventListener("keydown",de),()=>{document.removeEventListener("pointerdown",ce),document.removeEventListener("keydown",de)}},[T,f]),o.useEffect(()=>{const z=new Set;if(d.forEach(de=>{de.user_id&&!te[de.user_id]&&z.add(de.user_id),de.invite_user_id&&!te[de.invite_user_id]&&z.add(de.invite_user_id)}),g&&(g.user_id&&!te[g.user_id]&&z.add(g.user_id),g.invite_user_id&&!te[g.invite_user_id]&&z.add(g.invite_user_id)),z.size===0)return;const ce=Array.from(z);Promise.allSettled(ce.map(async de=>{try{const X=await fn(de);if(X&&X.data)return{id:de,email:X.data.email,invite_user:X.data.invite_user}}catch(X){console.error(`Failed to fetch user ${de}:`,X)}return null})).then(de=>{const X={};de.forEach(we=>{var ye;if(we.status==="fulfilled"&&we.value){const Me=we.value;X[Me.id]={email:Me.email,invite_user_email:((ye=Me.invite_user)==null?void 0:ye.email)||null},Me.invite_user&&(X[Me.invite_user.id]={email:Me.invite_user.email})}}),Object.keys(X).length>0&&le(we=>{const ye={...we,...X};return El(ye),ye})})},[d,g,te]);const ke={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},fe=o.useCallback(async(z=1,ce="",de="trade_no")=>{U(!0),c("");try{const X=ce.trim(),ye=await ho({current:z,pageSize:A,filter:X?[{key:de,condition:de==="email"||de==="invite_user_email"?"like":"=",value:X}]:void 0});l(ye.data),u(ye.total)}catch(X){c(X instanceof Error?X.message:s("order.loadFailed"))}finally{U(!1)}},[A,s]),Ce=o.useCallback(z=>{const ce=String(z);_("user_id"),L(ce),se(!0),q(1),fe(1,ce,"user_id")},[fe]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const z=new URLSearchParams(t.search),ce=z.get("filter_email"),de=z.get("invite_user_email"),X=z.get("user_id")||z.get("filter_user_id");let we="",ye="trade_no";X?(we=X,ye="user_id",_("user_id"),L(X),se(!0)):ce?(we=ce,ye="email",_("email"),L(ce),se(!0)):de&&(we=de,ye="invite_user_email",_("invite_user_email"),L(de),se(!0)),fe(1,we,ye),Et().then(b).catch(()=>{}),vi(1,1e3).then(Me=>{const $e={};Me.data.forEach(dt=>{$e[dt.id]=dt.code}),h($e)}).catch(()=>{})},[fe,n,t.search]);function je(){q(1),fe(1,k,P)}function We(){L(""),q(1),fe(1)}function y(z){q(z),fe(z,k,P)}async function ie(z){var ce,de;B(null),F(null),c(""),R("");try{await xo(z),(ce=window.showToast)==null||ce.call(window,s("order.paidSuccess"),"success"),await fe($,k,P)}catch(X){(de=window.showToast)==null||de.call(window,X instanceof Error?X.message:s("order.paidFailed"),"error")}}async function G(z){var ce,de;B(null),F(null),c(""),R("");try{await bo(z),(ce=window.showToast)==null||ce.call(window,s("order.cancelSuccess"),"success"),await fe($,k,P)}catch(X){(de=window.showToast)==null||de.call(window,X instanceof Error?X.message:s("order.cancelFailed"),"error")}}async function be(z,ce){var de,X;B(null),F(null),c(""),R("");try{await go(z,ce),(de=window.showToast)==null||de.call(window,s("order.commissionSuccess"),"success"),await fe($,k,P)}catch(we){(X=window.showToast)==null||X.call(window,we instanceof Error?we.message:s("order.commissionFailed"),"error")}}async function ze(z){V(z),re(!0);try{const ce=await fo(z.id);ce&&ce.data&&V(ce.data)}catch(ce){console.error("Failed to fetch order detail:",ce)}finally{re(!1)}}function he(){var z;N({email:"",plan_id:(z=w[0])!=null&&z.id?String(w[0].id):"",period:"month_price",total_amount:"0"}),c(""),R("")}async function De(z){var ce,de;if(z.preventDefault(),!!H){I(!0),c(""),R("");try{await as({email:H.email,plan_id:Number(H.plan_id),period:H.period,total_amount:Number(H.total_amount)*100}),N(null),(ce=window.showToast)==null||ce.call(window,s("order.assignSuccess"),"success"),await fe($,k,P)}catch(X){(de=window.showToast)==null||de.call(window,X instanceof Error?X.message:s("order.assignFailed"),"error")}finally{I(!1)}}}const Ue=Math.ceil(v/A),ae=g?Se(g):null;return e.jsxs(Ge,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${M?"active":""}`,type:"button",onClick:()=>se(!M),children:[e.jsx(tn,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:he,children:[e.jsx(at,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void fe($,k,P),disabled:O,children:[e.jsx(Re,{size:16}),s(O?"common.refreshing":"common.refresh")]})]}),M&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:P,onChange:z=>_(z.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Cn,{size:16}),e.jsx("input",{className:"config-input search-input",value:k,onChange:z=>L(z.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:z=>z.key==="Enter"&&je()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[e.jsx(tn,{size:16}),s("order.filter")]}),k?e.jsxs("button",{className:"ghost-button",type:"button",onClick:We,children:[e.jsx(_e,{size:16}),s("order.clearFilter")]}):null]}),J?e.jsx("div",{className:"form-error",children:J}):null,C?e.jsx("div",{className:"form-success",children:C}):null,O&&d.length===0?e.jsx(Pe,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${O?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[d.map(z=>{var Me;const ce=r(z.status),de=z.invite_user_id!==null,X=ke[z.commission_status]??{label:`#${z.commission_status}`,dotClass:"pending"},we=Se(z),ye=(Me=te[z.user_id])==null?void 0:Me.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>ze(z),title:s("order.detailsTitle"),children:Us(z.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",z.id]}),e.jsx("span",{className:"order-type-pill",children:As[z.type]??`#${z.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[ye?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(z.user_id),title:s("order.filterByUser"),children:ye}):e.jsxs("span",{className:"order-subline",children:["ID: ",z.user_id]}),e.jsx("strong",{className:"order-plan-name",children:z.plan_name??`Plan #${z.plan_id}`}),e.jsx("span",{className:"period-capsule",children:a(z.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:ct(z.total_amount)}),we?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",we]}):null,Number(z.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",ct(z.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${ce.cls.replace("status-","")}`}),e.jsx("span",{children:ce.label}),z.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:$e=>{$e.stopPropagation(),Ee(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),T===Ut("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:$e=>$e.stopPropagation(),onClick:$e=>$e.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),ie(z.trade_no)},children:[e.jsx(an,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),G(z.trade_no)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[de?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:ct(z.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${X.dotClass}`}),e.jsx("span",{children:X.label}),z.commission_status===0&&(z.status===3||z.status===4)&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:$e=>{$e.stopPropagation(),Le(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),f===Ut("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:$e=>$e.stopPropagation(),onClick:$e=>$e.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),be(z.trade_no,1)},children:[e.jsx(an,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),be(z.trade_no,3)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Rs(z.created_at)})})]},z.trade_no)}),!O&&d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),Ue>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>y($-1),children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",Ue]}),e.jsx("button",{className:"mini-button",disabled:$>=Ue,onClick:()=>y($+1),children:e.jsx(wt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[d.map(z=>{var Xe;const ce=r(z.status),de=z.invite_user_id!==null,X=ke[z.invite_user_id!==null?z.commission_status:0]??{label:`#${z.commission_status}`,dotClass:"pending"},we=(Xe=te[z.user_id])==null?void 0:Xe.email,ye=Se(z),Me=Ut("mobile",z.trade_no),$e=Ut("mobile",z.trade_no),dt=T===Me||f===$e;return e.jsxs("div",{className:`mobile-order-card${dt?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>ze(z),children:Us(z.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",z.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${ce.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:ce.label}),z.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:qe=>{qe.stopPropagation(),Ee(z.trade_no,"mobile")},"aria-expanded":T===Me,children:[s("order.markAs"),e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),T===Me&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:qe=>qe.stopPropagation(),onClick:qe=>qe.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),ie(z.trade_no)},children:[e.jsx(an,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),G(z.trade_no)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:we?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(z.user_id),children:we}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",z.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:As[z.type]??`#${z.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:z.plan_name??`Plan #${z.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:a(z.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:ct(z.total_amount)})]}),ye?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:ye})})]}):null,Number(z.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:ct(z.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:de?e.jsx("strong",{children:ct(z.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),de&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${X.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:X.label}),z.commission_status===0&&(z.status===3||z.status===4)&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:qe=>{qe.stopPropagation(),Le(z.trade_no,"mobile")},"aria-expanded":f===$e,children:[s("order.markAs"),e.jsx(vt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),f===$e&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:qe=>qe.stopPropagation(),onClick:qe=>qe.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{F(null),be(z.trade_no,1)},children:[e.jsx(an,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{F(null),be(z.trade_no,3)},children:[e.jsx(Ft,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Rs(z.created_at)})]})]})]},z.trade_no)}),!O&&d.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,Ue>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>y($-1),children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",Ue]}),e.jsx("button",{className:"mini-button",disabled:$>=Ue,onClick:()=>y($+1),children:e.jsx(wt,{size:16})})]}):null]})]}),g?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(null),children:e.jsx(_e,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:Q?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx(Pe,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(xt=te[g.user_id])!=null&&xt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{V(null),Ce(g.user_id)},title:"Filter by this user",children:te[g.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",g.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:g.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:a(g.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:r(g.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:g.plan_name??`Plan #${g.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:g.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("user.billingInfo")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingName")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_name||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingTaxCode")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_tax_code||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingPhone")}),e.jsx("span",{style:{textAlign:"right",overflowWrap:"anywhere"},children:g.billing_phone||"-"})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px",alignItems:"flex-start"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("user.billingAddress")}),e.jsx("span",{style:{textAlign:"right",maxWidth:"62%",overflowWrap:"anywhere"},children:g.billing_address||"-"})]})]}),g.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(ue=te[g.invite_user_id])!=null&&ue.email||(nt=te[g.user_id])!=null&&nt.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const z=String(g.invite_user_id);_("invite_user_id"),L(z),se(!0),V(null),fe(1,z,"invite_user_id")},title:"Filter by this inviter",children:((st=te[g.invite_user_id])==null?void 0:st.email)||((it=te[g.user_id])==null?void 0:it.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",g.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:ct(g.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(ke[g.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(ke[g.commission_status]??{label:`#${g.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:ct(g.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:ct(g.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:ct(g.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:ct(g.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:ct(g.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Hs(g.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Hs(g.updated_at)})]})]})]})})]})}):null,H?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:De,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:H.email,onChange:z=>N({...H,email:z.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:H.plan_id,onChange:z=>N({...H,plan_id:z.target.value}),children:w.map(z=>e.jsx("option",{value:z.id,children:z.name},z.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:H.period,onChange:z=>N({...H,period:z.target.value}),children:Object.entries(Os).map(([z,ce])=>e.jsx("option",{value:z,children:ce},z))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:H.total_amount,onChange:z=>N({...H,total_amount:z.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:E,children:[e.jsx(ot,{size:16}),s(E?"order.assigning":"order.assign")]})]})]})]})}):null]})}function rn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function ln(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function Dn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Ll(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(0),[l,w]=o.useState(1),[b,S]=o.useState([]),[h,v]=o.useState(null),[u,$]=o.useState(!0),[q,A]=o.useState(!1),[k,L]=o.useState(""),[P,_]=o.useState(""),[O,U]=o.useState("");o.useEffect(()=>{h||U("")},[h]);const H=o.useCallback(async(c=1)=>{$(!0),L("");try{const C=await vi(c,15);r(C.data),d(C.total)}catch(C){L(C instanceof Error?C.message:t("coupon.loadFailed"))}finally{$(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}H(1),Et().then(S).catch(()=>{})},[H,n]);async function N(c){var C,R;if(c.preventDefault(),!!h){A(!0),L(""),_("");try{const T=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await yo({id:h.id,name:h.name,type:Number(h.type),value:T,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,limit_use_with_user:h.limit_use_with_user?Number(h.limit_use_with_user):null,limit_plan_ids:h.limit_plan_ids.length?h.limit_plan_ids:null,limit_period:h.limit_period.length?h.limit_period:null,generate_count:h.generate_count?Number(h.generate_count):void 0}),v(null),(C=window.showToast)==null||C.call(window,t("coupon.saveSuccess"),"success"),await H(l)}catch(T){(R=window.showToast)==null||R.call(window,T instanceof Error?T.message:t("coupon.saveFailed"),"error")}finally{A(!1)}}}async function E(c){var C;try{await jo(c),await H(l)}catch(R){(C=window.showToast)==null||C.call(window,R instanceof Error?R.message:t("coupon.toggleFailed"),"error")}}async function I(c){var C;(C=window.showConfirm)==null||C.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var R,T;try{await vo(c),(R=window.showToast)==null||R.call(window,t("coupon.deleteSuccess"),"success"),await H(l)}catch(B){(T=window.showToast)==null||T.call(window,B instanceof Error?B.message:t("coupon.deleteFailed"),"error")}}})}const J=Math.ceil(a/15);return e.jsxs(Ge,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[a," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void H(l),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>v(Dn()),children:[e.jsx(at,{size:16}),t("coupon.add")]})]})]}),k?e.jsx("div",{className:"form-error",children:k}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Pe,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(c=>{var B,f;const C=(B=c.limit_plan_ids)==null?void 0:B.map(F=>{var M;return((M=b.find(se=>se.id===F))==null?void 0:M.name)||`#${F}`}).join(", "),R=ln(t),T=(f=c.limit_period)==null?void 0:f.map(F=>R[F]||F).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:c.id}),e.jsx("td",{children:e.jsx("strong",{children:c.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:c.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:c.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:c.type===1?Je(c.value):`${c.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",c.limit_use??"∞"]}),c.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",c.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[C?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",C]})}):null,T?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",T]})}):null,!C&&!T?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${c.show?"active":""}`,type:"button",onClick:()=>void E(c.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[rn(c.started_at)," — ",rn(c.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>v(Dn(c)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(c.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},c.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(c=>{var C,R,T,B;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",c.id]}),e.jsx("span",{className:`tag type-tag ${c.type===1?"fixed-type":"percent-type"}`,children:c.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:c.name,children:c.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{Pt(c.code).then(f=>{var F;(F=window.showToast)==null||F.call(window,f?`${t("coupon.copiedCode")}: ${c.code}`:t("common.copyFailed"),f?"success":"error")})},children:[e.jsx("code",{className:"mono",children:c.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(C=c.limit_plan_ids)!=null&&C.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:c.limit_plan_ids.map(f=>{const F=b.find(M=>M.id===f);return e.jsx("span",{className:"res-pill plan-pill",children:F?F.name:`#${f}`},f)})})]}):null,(R=c.limit_period)!=null&&R.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:c.limit_period.map(f=>e.jsx("span",{className:"res-pill cycle-pill",children:ln(t)[f]||f},f))})]}):null,!((T=c.limit_plan_ids)!=null&&T.length)&&!((B=c.limit_period)!=null&&B.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[rn(c.started_at)," — ",rn(c.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${c.show?"active":""}`,type:"button",onClick:()=>void E(c.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:c.type===1?Je(c.value).replace(/\s?₫/,""):`${c.value}`}),e.jsx("span",{className:"ticket-value-unit",children:c.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:c.limit_use??"∞"}),c.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",c.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>v(Dn(c)),"aria-label":t("common.edit"),children:e.jsx(Be,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void I(c.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},c.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),J>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:l<=1,onClick:()=>{w(l-1),H(l-1)},children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[l," / ",J]}),e.jsx("button",{className:"mini-button",disabled:l>=J,onClick:()=>{w(l+1),H(l+1)},children:e.jsx(wt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:N,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:c=>v({...h,name:c.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:h.type,onChange:c=>v({...h,type:c.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:c=>v({...h,value:c.target.value})})]})]}),h.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:h.code,onChange:c=>v({...h,code:c.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:c=>v({...h,started_at:c.target.value}),onClick:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)},onFocus:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:c=>v({...h,ended_at:c.target.value}),onClick:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)},onFocus:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:c=>v({...h,limit_use:c.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use_with_user,onChange:c=>v({...h,limit_use_with_user:c.target.value}),placeholder:t("coupon.unlimited")})]})]}),h.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:c=>v({...h,generate_count:c.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),h.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_plan_ids.map(c=>{const C=b.find(R=>R.id===c);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const R=h.limit_plan_ids.filter(T=>T!==c);v({...h,limit_plan_ids:R})},children:[C?C.name:`#${c}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},c)})}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:O,onChange:c=>U(c.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(c=>c.name.toLowerCase().includes(O.toLowerCase())).map(c=>{const C=h.limit_plan_ids.includes(c.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:C,onChange:R=>{const T=R.target.checked?[...h.limit_plan_ids,c.id]:h.limit_plan_ids.filter(B=>B!==c.id);v({...h,limit_plan_ids:T})}}),e.jsx("span",{children:c.name})]},c.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),h.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_period.map(c=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const C=h.limit_period.filter(R=>R!==c);v({...h,limit_period:C})},children:[ln(t)[c]||c," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},c))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(ln(t)).map(([c,C])=>{const R=h.limit_period.includes(c);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:R,onChange:T=>{const B=T.target.checked?[...h.limit_period,c]:h.limit_period.filter(f=>f!==c);v({...h,limit_period:B})}}),e.jsx("span",{children:C})]},c)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ot,{size:16}),t(q?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function cn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Il(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function Fn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Dl(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(0),[l,w]=o.useState(1),[b,S]=o.useState([]),[h,v]=o.useState(null),[u,$]=o.useState(!0),[q,A]=o.useState(!1),[k,L]=o.useState(""),[P,_]=o.useState(""),[O,U]=o.useState("");o.useEffect(()=>{h||U("")},[h]);const H=Il(t),N=o.useCallback(async(c=1)=>{$(!0),L("");try{const C=await wo(c,15);r(C.data),d(C.total)}catch(C){L(C instanceof Error?C.message:t("giftcard.loadFailed"))}finally{$(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}N(1),Et().then(S).catch(()=>{})},[N,n]);async function E(c){var C,R;if(c.preventDefault(),!!h){A(!0),L(""),_("");try{const T=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await No({id:h.id,name:h.name,type:Number(h.type),value:T,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,plan_id:h.plan_id?Number(h.plan_id):null,generate_count:h.generate_count?Number(h.generate_count):void 0}),v(null),(C=window.showToast)==null||C.call(window,t("giftcard.saveSuccess"),"success"),await N(l)}catch(T){(R=window.showToast)==null||R.call(window,T instanceof Error?T.message:t("giftcard.saveFailed"),"error")}finally{A(!1)}}}async function I(c){var C;(C=window.showConfirm)==null||C.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var R,T;try{await ko(c),(R=window.showToast)==null||R.call(window,t("giftcard.deleteSuccess"),"success"),await N(l)}catch(B){(T=window.showToast)==null||T.call(window,B instanceof Error?B.message:t("giftcard.deleteFailed"),"error")}}})}const J=Math.ceil(a/15);return e.jsxs(Ge,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[a," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void N(l),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>v(Fn()),children:[e.jsx(at,{size:16}),t("giftcard.add")]})]})]}),k?e.jsx("div",{className:"form-error",children:k}):null,P?e.jsx("div",{className:"form-success",children:P}):null,u&&s.length===0?e.jsx(Pe,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(c=>{var C;return e.jsxs("tr",{children:[e.jsx("td",{children:c.id}),e.jsx("td",{children:e.jsx("strong",{children:c.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:c.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:H[c.type]??c.type})}),e.jsx("td",{children:e.jsx("strong",{children:c.type===1?Je(c.value):c.value})}),e.jsx("td",{children:c.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((C=b.find(R=>R.id===c.plan_id))==null?void 0:C.name)||`#${c.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:c.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[cn(c.started_at)," — ",cn(c.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>v(Fn(c)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(c.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},c.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(c=>{var C;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",c.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:H[c.type]??c.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:c.name,children:c.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{Pt(c.code).then(R=>{var T;(T=window.showToast)==null||T.call(window,R?t("giftcard.copiedCode").replace("{code}",c.code):t("common.copyFailed"),R?"success":"error")})},children:[e.jsx("code",{className:"mono",children:c.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:c.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((C=b.find(R=>R.id===c.plan_id))==null?void 0:C.name)||`#${c.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[cn(c.started_at)," — ",cn(c.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:c.type===1?Je(c.value).replace(/\s?₫/,""):`${c.value}`}),e.jsx("span",{className:"ticket-value-unit",children:c.type===1?"₫":H[c.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:c.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>v(Fn(c)),"aria-label":t("common.edit"),children:e.jsx(Be,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void I(c.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},c.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),J>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:l<=1,onClick:()=>{w(l-1),N(l-1)},children:e.jsx(jt,{size:16})}),e.jsxs("span",{className:"page-info",children:[l," / ",J]}),e.jsx("button",{className:"mini-button",disabled:l>=J,onClick:()=>{w(l+1),N(l+1)},children:e.jsx(wt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>v(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:E,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:c=>v({...h,name:c.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:h.type,onChange:c=>v({...h,type:c.target.value}),children:Object.entries(H).map(([c,C])=>e.jsx("option",{value:c,children:C},c))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:c=>v({...h,value:c.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:c=>v({...h,started_at:c.target.value}),onClick:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)},onFocus:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:c=>v({...h,ended_at:c.target.value}),onClick:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)},onFocus:c=>{var C,R;return(R=(C=c.currentTarget).showPicker)==null?void 0:R.call(C)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:c=>v({...h,limit_use:c.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),h.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:c=>v({...h,generate_count:c.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),h.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const c=b.find(C=>String(C.id)===h.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{v({...h,plan_id:""})},children:[c?c.name:`#${h.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:O,onChange:c=>U(c.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!h.plan_id,onChange:()=>{v({...h,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),b.filter(c=>c.name.toLowerCase().includes(O.toLowerCase())).map(c=>{const C=String(c.id)===h.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:C,onChange:R=>{R.target.checked&&v({...h,plan_id:String(c.id)})}}),e.jsx("span",{children:c.name})]},c.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>v(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ot,{size:16}),t(q?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Yt="like",bt="=";function dn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Fl(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function qs(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function An(n){return+(n/1073741824).toFixed(2)}function On(n){return Math.round(n*1073741824)}function pn(n){return(n/1073741824).toFixed(2)}function Al(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function qt(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const es=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ii="user_visible_columns";function Ol(){if(typeof window<"u")try{const n=localStorage.getItem(Ii);if(n)return new Set(JSON.parse(n))}catch{}return new Set(es.filter(n=>n.defaultVisible).map(n=>n.key))}const Sn=[{value:"email",label:"Email",condition:Yt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:bt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:bt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:bt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:bt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:bt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Yt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:bt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Yt,placeholder:"UUID"},{value:"token",label:"Token",condition:Yt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Yt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:bt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:bt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:bt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:bt,placeholder:"1780366403"}],Rl=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Qe(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Hl(n,t){var a;const s=((a=Sn.find(d=>d.value===n))==null?void 0:a.label)??n,r=d=>{const l=t(d);return l===d?s:l};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return r("user.filterBanned");case"is_admin":return r("user.filterAdmin");case"is_manager":return r("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return r("user.filterUuid");case"token":return r("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return r("user.filterTransferEnable");case"d":return r("user.filterDownloadUsed");case"device_limit":return r("user.filterDeviceLimit");case"expired_at":return r("user.filterExpiredAt");default:return s}}function Rn(n){return Sn.find(t=>t.value===n)??Sn[0]}function Ul(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function ql(){const n=Oe(),t=nn(),{t:s}=me(),[r,a]=o.useState([]),[d,l]=o.useState([]),[w,b]=o.useState([]),[S,h]=o.useState(0),[v,u]=o.useState(1),[$,q]=o.useState(""),[A,k]=o.useState("email"),[L,P]=o.useState(!0),[_,O]=o.useState(""),[U,H]=o.useState(Ol),[N,E]=o.useState(!1),I=o.useRef(null),[J,c]=o.useState(null),[C,R]=o.useState(null),[T,B]=o.useState(null),[f,F]=o.useState({}),[M,se]=o.useState(!1),[g,V]=o.useState(!1),[Q,re]=o.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[te,le]=o.useState(!1),[Ee,Le]=o.useState(null),[Se,ke]=o.useState({plan_id:"",period:"month_price",total_amount:""}),[fe,Ce]=o.useState(!1),[je,We]=o.useState(null),[y,ie]=o.useState(null),[G,be]=o.useState([]),[ze,he]=o.useState(0),[De,Ue]=o.useState(1),[ae]=o.useState(10),[xt,ue]=o.useState(!1),[nt,st]=o.useState("");o.useEffect(()=>{function i(m){const j=m.target instanceof Element?m.target:null;J!==null&&(!j||!j.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(c(null),R(null)),N&&I.current&&!I.current.contains(m.target)&&E(!1)}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[J,N]),o.useEffect(()=>{if(J===null)return;const i=()=>{c(null),R(null)};return window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0)}},[J]);function it(i,m){if(J===i){c(null),R(null);return}const j=m.getBoundingClientRect(),D=220,Z=392,ge=6,xe=8,Ke=Math.max(xe,Math.min(window.innerWidth-D-xe,j.right-D)),lt=j.bottom+ge+Z<=window.innerHeight-xe?j.bottom+ge:Math.max(xe,j.top-Z-ge);R({top:lt,left:Ke}),c(i)}function z(){c(null),R(null)}function ce(i,m=!1,j=""){const D=Z=>{z(),Z()};return e.jsxs("div",{className:`action-dropdown-menu ${m?"action-dropdown-menu-fixed":""} ${j}`.trim(),style:m&&C?{top:C.top,left:C.left}:void 0,onMouseDown:Z=>Z.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>D(()=>ft(i)),children:[e.jsx(Be,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>Ie(i)),children:[e.jsx(mi,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>void It(i)),children:[e.jsx(yt,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>kt(i)),children:[e.jsx(Jn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>Ot(i)),children:[e.jsx(ns,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>Rt(i)),children:[e.jsx(aa,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>p(i)),children:[e.jsx(Kn,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>W(i)),children:[e.jsx(gn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>D(()=>pe(i)),children:[e.jsx(hs,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>D(()=>Nt(i)),children:[e.jsx(Ze,{size:14}),s("user.actionDelete")]})]})}function de(i){H(m=>{const j=new Set(m);j.has(i)?j.delete(i):j.add(i);try{localStorage.setItem(Ii,JSON.stringify([...j]))}catch{}return j})}const X=i=>U.has(i),we=es.filter(i=>U.has(i.key)).length,ye=o.useCallback(async(i=1,m,j)=>{P(!0),O("");try{const D=m==null?void 0:m.trim(),Z=Rn(j||"email"),ge=D?[{key:Z.value,condition:Z.condition,value:D}]:void 0,xe=await _o(i,15,ge);a(xe.data),h(xe.total)}catch(D){O(D instanceof Error?D.message:s("user.loadFailed"))}finally{P(!1)}},[]),Me=o.useCallback(async()=>{try{const[i,m]=await Promise.all([Et(),Bt()]);l(i),b(m)}catch{}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const i=new URLSearchParams(t.search),j=[["email",i.get("email")||i.get("filter_email")],["id",i.get("id")||i.get("user_id")||i.get("filter_user_id")],["plan_id",i.get("plan_id")],["invite_user_id",i.get("invite_user_id")],["invite_by_email",i.get("invite_by_email")],["uuid",i.get("uuid")],["token",i.get("token")],["remarks",i.get("remarks")]].find(([,D])=>D==null?void 0:D.trim());if(j){const[D,Z]=j,ge=Rn(D),xe=(Z==null?void 0:Z.trim())??"";k(ge.value),q(xe),u(1),ye(1,xe,ge.value)}else ye(1);Me()},[ye,Me,n,t.search]);function $e(){u(1),ye(1,$,A)}function dt(){q(""),u(1),ye(1)}function Xe(i){u(i),ye(i,$,A)}function qe(i){if(i.plan_name)return i.plan_name;if(!i.plan_id)return"—";const m=d.find(j=>j.id===i.plan_id);return m?m.name:`#${i.plan_id}`}function Mt(i){if(!i.group_id)return"—";const m=w.find(j=>j.id===i.group_id);return m?m.name:`#${i.group_id}`}function Ve(i,m){const j=s(i);return j===i?m:j}function pt(i){const m=Number(i.device_limit??0);return m>0?`${Number(i.device_bound_count??0)} / ${m}`:Ve("user.unlimited","Unlimited")}function Gt(i){const m=Number(i.device_bound_count??0),j=Number(i.device_pending_count??0),D=Number(i.device_banned_count??0),Z=Number(i.device_online_count??0),ge=Number(i.alive_ip??0),xe=Number(i.device_limit??0),Ke=xe>0?`${m} / ${xe}`:`${m} / ${Ve("user.unlimited","Unlimited")}`,Ne=[`${Ve("user.deviceBound","Bound")}: ${Ke}`,`${Ve("user.devicePending","Pending")}: ${j}`,`${Ve("user.deviceBanned","Banned")}: ${D}`,`${Ve("user.deviceOnline","Online devices")}: ${Z}`,`${Ve("user.deviceOnlineIp","Online IP")}: ${ge}`];return i.ips&&Ne.push(i.ips),Ne.join(`
`)}function At(i){n.push(`/device?user_id=${encodeURIComponent(String(i.id))}`)}function Lt(i,m="left"){const j=`${Ve("user.deviceOnlineShort","Online")}: ${Number(i.device_online_count??0)} | ${Ve("user.deviceIpShort","IP")}: ${Number(i.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${m==="right"?"align-right":""}`,type:"button",title:Gt(i),onClick:()=>At(i),children:[e.jsx("span",{className:"device-cell-primary",children:pt(i)}),e.jsx("span",{className:"device-cell-secondary",children:j})]})}async function It(i){var D,Z;const m=i.subscribe_url;if(!m){(D=window.showToast)==null||D.call(window,s("user.toastNoSubscribeUrl"),"error");return}const j=await Pt(m);(Z=window.showToast)==null||Z.call(window,s(j?"user.toastUrlCopied":"common.copyFailed"),j?"success":"error"),c(null)}function Ot(i){var m;c(null),(m=window.showConfirm)==null||m.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var j,D;try{await To(i.id),(j=window.showToast)==null||j.call(window,s("user.toastSecretResetSuccess"),"success"),await ye(v,$,A)}catch(Z){(D=window.showToast)==null||D.call(window,Z instanceof Error?Z.message:s("user.toastSecretResetFailed"),"error")}}})}function Nt(i){var m;c(null),(m=window.showConfirm)==null||m.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var j,D;try{await Co(i.id),(j=window.showToast)==null||j.call(window,s("user.toastDeletedSuccess"),"success"),await ye(v,$,A)}catch(Z){(D=window.showToast)==null||D.call(window,Z instanceof Error?Z.message:s("user.toastDeletedFailed"),"error")}}})}function kt(i){var j;c(null);const m=i.subscribe_url;if(!m){(j=window.showToast)==null||j.call(window,s("user.toastNoSubscribeUrl"),"error");return}We({url:m,userId:i.id})}function Rt(i){c(null),n.push(`/order?user_id=${i.id}`)}function p(i){c(null),n.push(`/subscription?user_id=${i.id}`)}function W(i){c(null),k("invite_user_id"),q(String(i.id)),ye(1,String(i.id),"invite_user_id")}async function ne(i,m){ue(!0),st("");try{const j=await Io(i,m,ae);be(j.data||[]),he(j.total||0),Ue(m)}catch(j){st(j instanceof Error?j.message:s("user.historyLoading"))}finally{ue(!1)}}function pe(i){c(null),ie(i),ne(i.id,1)}function Ie(i){c(null),Le(i.email),ke({plan_id:"",period:"month_price",total_amount:""})}async function ut(i){var m,j;if(i.preventDefault(),!!Ee){Ce(!0);try{await as({email:Ee,plan_id:Number(Se.plan_id),period:Se.period,total_amount:(Number(Se.total_amount)||0)*100}),(m=window.showToast)==null||m.call(window,s("user.toastAssignSuccess"),"success"),Le(null)}catch(D){(j=window.showToast)==null||j.call(window,D instanceof Error?D.message:s("user.toastAssignFailed"),"error")}finally{Ce(!1)}}}async function ft(i){var m,j;c(null);try{const D=await fn(i.id);B(i),F({id:i.id,email:i.email,invite_user_email:((m=D.data.invite_user)==null?void 0:m.email)??"",password:"",billing_name:i.billing_name??"",billing_tax_code:i.billing_tax_code??"",billing_phone:i.billing_phone??"",billing_address:i.billing_address??"",balance:i.balance,commission_balance:i.commission_balance,u:An(i.u),d:An(i.d),transfer_enable:An(i.transfer_enable),device_limit:i.device_limit,expired_at:Fl(i.expired_at),plan_id:i.plan_id,banned:i.banned,commission_type:i.commission_type??0,commission_rate:i.commission_rate??"",discount:i.discount??"",speed_limit:i.speed_limit,is_admin:i.is_admin,is_staff:i.is_staff,is_manager:i.is_manager,remarks:i.remarks??""})}catch(D){(j=window.showToast)==null||j.call(window,D instanceof Error?D.message:s("user.loadFailed"),"error")}}function Te(i,m){F(j=>({...j,[i]:m}))}async function _t(i){var m,j;if(i.preventDefault(),!!T){se(!0);try{const D={id:T.id,email:f.email,invite_user_email:String(f.invite_user_email??"").trim()||null,billing_name:String(f.billing_name??"").trim()||null,billing_tax_code:String(f.billing_tax_code??"").trim()||null,billing_phone:String(f.billing_phone??"").trim()||null,billing_address:String(f.billing_address??"").trim()||null,plan_id:f.plan_id||null,expired_at:qs(String(f.expired_at??"")),transfer_enable:On(Number(f.transfer_enable??0)),speed_limit:f.speed_limit||null,device_limit:f.device_limit||null,u:On(Number(f.u??0)),d:On(Number(f.d??0)),balance:Number(f.balance??0),commission_balance:Number(f.commission_balance??0),commission_rate:f.commission_rate!==""&&f.commission_rate!==null?Number(f.commission_rate):null,commission_type:Number(f.commission_type??0),discount:f.discount!==""&&f.discount!==null?Number(f.discount):null,remarks:f.remarks||null,is_admin:Number(f.is_admin??0),is_staff:Number(f.is_staff??0),is_manager:Number(f.is_manager??0),banned:Number(f.banned??0)};f.password&&(D.password=f.password),await So(D),(m=window.showToast)==null||m.call(window,s("user.toastSaveSuccess"),"success"),B(null),await ye(v,$,A)}catch(D){(j=window.showToast)==null||j.call(window,D instanceof Error?D.message:s("user.toastSaveFailed"),"error")}finally{se(!1)}}}async function Ht(i){var m,j;i.preventDefault(),le(!0);try{await zo({email_prefix:Q.email_prefix,email_suffix:Q.email_suffix,password:Q.password||void 0,plan_id:Q.plan_id?Number(Q.plan_id):void 0,expired_at:qs(Q.expired_at)}),(m=window.showToast)==null||m.call(window,s("user.toastCreateSuccess"),"success"),V(!1),re({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await ye(v,$,A)}catch(D){(j=window.showToast)==null||j.call(window,D instanceof Error?D.message:s("user.toastCreateFailed"),"error")}finally{le(!1)}}const rt=Math.ceil(S/15),x=Rn(A);return e.jsxs(Ge,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[S," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:I,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>E(!N),children:[e.jsx(Vi,{size:16}),s("user.columns")]}),N?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>E(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:we})})}),e.jsx("div",{className:"col-picker-list",children:es.map(i=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:U.has(i.key),onChange:()=>de(i.key)}),e.jsx("span",{children:Qe(i.key,s)})]},i.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ye(v,$,A),disabled:L,children:[e.jsx(Re,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>V(!0),children:[e.jsx(at,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:A,onChange:i=>k(i.target.value),children:Sn.map(i=>e.jsx("option",{value:i.value,children:Hl(i.value,s)},i.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Cn,{size:16}),e.jsx("input",{className:"config-input search-input",value:$,onChange:i=>q(i.target.value),placeholder:x.placeholder,onKeyDown:i=>i.key==="Enter"&&$e()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:$e,children:[e.jsx(tn,{size:16}),s("user.filter")]}),$?e.jsxs("button",{className:"ghost-button",type:"button",onClick:dt,children:[e.jsx(_e,{size:16}),s("user.clearFilter")]}):null]}),_?e.jsx("div",{className:"form-error",children:_}):null,L&&r.length===0?e.jsx(Pe,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${L?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[r.map(i=>{const m=pn(i.u+i.d),j=pn(i.transfer_enable),D=parseFloat(m);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",i.id]}),e.jsx("span",{className:"user-email",title:i.email,children:i.email})]}),i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[qe(i)," / ",i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Mt(i)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${D>0?D>parseFloat(j)*.9?"high":"ok":""}`,children:[m," GB"]})," / ",j," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("devices",s)}),e.jsx("span",{className:"info-val",children:Lt(i,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("expires",s)}),e.jsx("span",{className:"info-val",children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(i.balance/100).toFixed(2)," ₫ / ",(i.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Qe("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:dn(i.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${J===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>c(J===i.id?null:i.id),children:[s("user.colActions")," ",e.jsx(vt,{size:14})]}),J===i.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>c(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:Z=>Z.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.email}),e.jsxs("small",{children:["#",i.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(_e,{size:16})})]}),ce(i,!1,"mobile-action-menu")]})}):null]})})]},i.id)}),!L&&r.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[X("id")&&e.jsx("th",{children:Qe("id",s)}),X("email")&&e.jsx("th",{children:Qe("email",s)}),X("status")&&e.jsx("th",{children:Qe("status",s)}),X("plan")&&e.jsx("th",{children:Qe("plan",s)}),X("group")&&e.jsx("th",{children:Qe("group",s)}),X("used")&&e.jsx("th",{children:Qe("used",s)}),X("traffic")&&e.jsx("th",{children:Qe("traffic",s)}),X("devices")&&e.jsx("th",{children:Qe("devices",s)}),X("expires")&&e.jsx("th",{children:Qe("expires",s)}),X("balance")&&e.jsx("th",{children:Qe("balance",s)}),X("commission")&&e.jsx("th",{children:Qe("commission",s)}),X("joined")&&e.jsx("th",{children:Qe("joined",s)}),X("actions")&&e.jsx("th",{className:"user-actions-col",children:Qe("actions",s)})]})}),e.jsxs("tbody",{children:[r.map(i=>{const m=pn(i.u+i.d),j=pn(i.transfer_enable),D=parseFloat(m);return e.jsxs("tr",{children:[X("id")&&e.jsx("td",{children:i.id}),X("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:i.email})}),X("status")&&e.jsx("td",{children:i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),X("plan")&&e.jsx("td",{children:qe(i)}),X("group")&&e.jsx("td",{children:i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Mt(i)}),X("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${D>0?D>parseFloat(j)*.9?"high":"ok":""}`,children:m})}),X("traffic")&&e.jsx("td",{children:j}),X("devices")&&e.jsx("td",{children:Lt(i)}),X("expires")&&e.jsx("td",{children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),X("balance")&&e.jsx("td",{children:(i.balance/100).toFixed(2)}),X("commission")&&e.jsx("td",{children:(i.commission_balance/100).toFixed(2)}),X("joined")&&e.jsx("td",{children:e.jsx("small",{children:dn(i.created_at)})}),X("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${J===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:Z=>it(i.id,Z.currentTarget),children:[s("user.colActions")," ",e.jsx(vt,{size:14})]}),J===i.id&&C?oi.createPortal(ce(i,!0),document.body):null]})})]},i.id)}),!L&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:we,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),rt>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:v<=1,onClick:()=>Xe(v-1),children:e.jsx(jt,{size:16})}),Array.from({length:Math.min(5,rt)},(i,m)=>{let j;return rt<=5||v<=3?j=m+1:v>=rt-2?j=rt-4+m:j=v-2+m,e.jsx("button",{className:`mini-button ${j===v?"active-page":""}`,onClick:()=>Xe(j),children:j},j)}),rt>5?e.jsxs("span",{className:"page-info",children:["… ",rt]}):null,e.jsx("button",{className:"mini-button",disabled:v>=rt,onClick:()=>Xe(v+1),children:e.jsx(wt,{size:16})})]})}):null]}),T?e.jsx("div",{className:"modal-backdrop",onClick:()=>B(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>B(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:_t,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(f.email??""),onChange:i=>Te("email",i.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(f.invite_user_email??""),onChange:i=>Te("invite_user_email",i.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(f.password??""),onChange:i=>Te("password",i.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsx("div",{className:"form-section-title",children:s("user.billingInfo")}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.billingName"),e.jsx("input",{className:"config-input",type:"text",maxLength:128,autoComplete:"name",value:String(f.billing_name??""),onChange:i=>Te("billing_name",i.target.value),placeholder:s("user.billingNamePlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.billingTaxCode"),e.jsx("input",{className:"config-input",type:"text",inputMode:"numeric",maxLength:32,value:String(f.billing_tax_code??""),onChange:i=>Te("billing_tax_code",i.target.value),placeholder:s("user.billingTaxCodePlaceholder")})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.billingPhone"),e.jsx("input",{className:"config-input",type:"tel",maxLength:32,autoComplete:"tel",value:String(f.billing_phone??""),onChange:i=>Te("billing_phone",i.target.value),placeholder:s("user.billingPhonePlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.billingAddress"),e.jsx("textarea",{className:"config-input",rows:2,maxLength:255,autoComplete:"street-address",value:String(f.billing_address??""),onChange:i=>Te("billing_address",i.target.value),placeholder:s("user.billingAddressPlaceholder")})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(f.balance??0)/100).toFixed(2)),onChange:i=>Te("balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(f.commission_balance??0)/100).toFixed(2)),onChange:i=>Te("commission_balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(f.u??0),onChange:i=>Te("u",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(f.d??0),onChange:i=>Te("d",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(f.transfer_enable??0),onChange:i=>Te("transfer_enable",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(f.device_limit??""),onChange:i=>Te("device_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(f.expired_at??""),onChange:i=>Te("expired_at",i.target.value),onClick:i=>{var m,j;return(j=(m=i.currentTarget).showPicker)==null?void 0:j.call(m)},onFocus:i=>{var m,j;return(j=(m=i.currentTarget).showPicker)==null?void 0:j.call(m)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(f.plan_id??""),onChange:i=>Te("plan_id",i.target.value?Number(i.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(f.banned??0),onChange:i=>Te("banned",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(f.commission_type??0),onChange:i=>Te("commission_type",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(f.commission_rate??""),onChange:i=>Te("commission_rate",i.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(f.discount??""),onChange:i=>Te("discount",i.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(f.speed_limit??""),onChange:i=>Te("speed_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${f.is_admin?"active":""}`,onClick:()=>Te("is_admin",f.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${f.is_manager?"active":""}`,onClick:()=>Te("is_manager",f.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${f.is_staff?"active":""}`,onClick:()=>Te("is_staff",f.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(f.remarks??""),onChange:i=>Te("remarks",i.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>B(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:M,children:s(M?"common.processing":"common.save")})]})]})]})}):null,g?e.jsx("div",{className:"modal-backdrop",onClick:()=>V(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(!1),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ht,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:Q.email_prefix,onChange:i=>re({...Q,email_prefix:i.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:Q.email_suffix,onChange:i=>re({...Q,email_suffix:i.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:Q.password,onChange:i=>re({...Q,password:i.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:Q.plan_id,onChange:i=>re({...Q,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:Q.expired_at,onChange:i=>re({...Q,expired_at:i.target.value}),onClick:i=>{var m,j;return(j=(m=i.currentTarget).showPicker)==null?void 0:j.call(m)},onFocus:i=>{var m,j;return(j=(m=i.currentTarget).showPicker)==null?void 0:j.call(m)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>V(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:te,children:s(te?"user.creating":"user.createUser")})]})]})]})}):null,Ee?e.jsx("div",{className:"modal-backdrop",onClick:()=>Le(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Le(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ut,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ee})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:Se.plan_id,onChange:i=>ke({...Se,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:Se.period,onChange:i=>ke({...Se,period:i.target.value}),children:Rl.map(i=>e.jsx("option",{value:i.value,children:Ul(i.value,s)},i.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:i=>ke({...Se,total_amount:i.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Le(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:fe,children:s(fe?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),je?e.jsx("div",{className:"modal-backdrop",onClick:()=>We(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>We(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(je.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:je.userId})})]})]})}):null,y?e.jsx("div",{className:"modal-backdrop",onClick:()=>ie(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:y.email,id:y.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ie(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[nt?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:nt}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:ze})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(G.reduce((i,m)=>i+m.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(G.reduce((i,m)=>i+m.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:qt(G.reduce((i,m)=>i+m.u+m.d,0))})]})]}),xt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx(Pe,{label:s("user.historyLoading")})}):G.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(hs,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:G.map(i=>{const m=qt(i.u),j=qt(i.d),D=qt(i.u+i.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Al(i.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(i.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:m}),e.jsx("td",{style:{color:"var(--muted)"},children:j}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:D})]},i.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((De-1)*ae+1,ze),end:Math.min(De*ae,ze),total:ze})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:De<=1,onClick:()=>ne(y.id,De-1),children:[e.jsx(jt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:De*ae>=ze,onClick:()=>ne(y.id,De+1),children:[s("user.historyNext"),e.jsx(wt,{size:16})]})]})]})]})]})]})}):null]})}function Bl(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Vt({value:n,onCopy:t,className:s="",copyClassName:r="",prefixLength:a=8,suffixLength:d=4}){const{t:l}=me(),[w,b]=o.useState(!1),S=w?n:Bl(n,a,d);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${r}`.trim(),type:"button",title:l("uuid.copy"),onClick:()=>void t(),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:w?n:S,children:S})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:l(w?"uuid.hide":"uuid.showFull"),"aria-label":l(w?"uuid.hide":"uuid.showFull"),onClick:()=>b(h=>!h),children:w?e.jsx(sa,{size:14}):e.jsx(ia,{size:14})})]})}const Bs=15,Gs=20,Gl=["email","id","user_id","plan_id","status"],Wl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function Ct(n,t){return n?new Date(n*1e3).toLocaleString():t}function Kl(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Yl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Dt(n){return+(n/1073741824).toFixed(2)}function Hn(n){return Math.round((Number(n)||0)*1073741824)}function Jl(n){return n==="email"?"like":"="}function Zl(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function Ql(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Ws(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ks(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Ys(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Js(n){return String(n.hwid??"").trim()!==""}function Xl(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function Vl(){const n=Oe(),t=nn(),{t:s}=me(),[r,a]=o.useState([]),[d,l]=o.useState([]),[w,b]=o.useState(0),[S,h]=o.useState(1),[v,u]=o.useState("email"),[$,q]=o.useState(""),[A,k]=o.useState(!0),[L,P]=o.useState(""),[_,O]=o.useState(null),[U,H]=o.useState({}),[N,E]=o.useState(null),[I,J]=o.useState(null),[c,C]=o.useState([]),[R,T]=o.useState(0),[B,f]=o.useState(1),[F,M]=o.useState(!1),[se,g]=o.useState(""),[V,Q]=o.useState(null),[re,te]=o.useState(null),[le,Ee]=o.useState({period:"month_price",total_amount:""}),[Le,Se]=o.useState(!1),[ke,fe]=o.useState(null),[Ce,je]=o.useState(null),[We,y]=o.useState(null);function ie(p){const W=p==null?void 0:p.trim();W&&n.push(`/user?email=${encodeURIComponent(W)}`)}const G=o.useCallback(async(p=1,W="",ne="email")=>{k(!0),P("");try{const pe=W.trim()?[{key:ne,condition:Jl(ne),value:W.trim()}]:void 0,Ie=await Po(p,Bs,pe);a(Ie.data),b(Ie.total),h(p)}catch(pe){P(pe instanceof Error?pe.message:s("subscription.loadFailed"))}finally{k(!1)}},[s]),be=o.useCallback(async(p,W=1)=>{M(!0),g("");try{const ne=await ji(W,Gs,[{key:"subscription_id",condition:"=",value:String(p.id)}]);C(ne.data),T(ne.total),f(W)}catch(ne){g(ne instanceof Error?ne.message:s("subscription.slotsLoadFailed"))}finally{M(!1)}},[s]),ze=o.useCallback(async()=>{var p;try{l(await Et())}catch(W){(p=window.showToast)==null||p.call(window,W instanceof Error?W.message:s("subscription.plansLoadFailed"),"error")}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}ze();const p=new URLSearchParams(t.search),ne=[["user_id",p.get("user_id")],["id",p.get("id")],["plan_id",p.get("plan_id")],["email",p.get("email")],["status",p.get("status")]].find(([,pe])=>pe&&pe.trim());if(ne){const[pe,Ie]=ne,ut=Ie??"";u(pe),q(ut),G(1,ut,pe);return}G()},[G,ze,t.search,n]),o.useEffect(()=>{function p(W){const ne=W.target instanceof Element?W.target:null;ke!==null&&(!ne||!ne.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&he()}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[ke]),o.useEffect(()=>{if(ke===null)return;const p=()=>he();return window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[ke]);function he(){fe(null),je(null)}function De(p,W){if(ke===p&&Ce){he();return}const ne=W.getBoundingClientRect(),pe=230,Ie=292,ut=6,ft=8,Te=Math.max(ft,Math.min(window.innerWidth-pe-ft,ne.right-pe)),Ht=ne.bottom+ut+Ie<=window.innerHeight-ft?ne.bottom+ut:Math.max(ft,ne.top-Ie-ut);je({top:Ht,left:Te}),fe(p)}function Ue(p){je(null),fe(W=>W===p?null:p)}function ae(p){p.preventDefault(),G(1,$,v)}function xt(){if(q(""),t.search){n.replace("/subscription");return}G(1,"",v)}function ue(p){if(!p)return s("subscription.noPlan");const W=d.find(ne=>Number(ne.id)===Number(p));return W?`#${W.id} - ${W.name}`:`#${p}`}function nt(p){O(p),H({plan_id:p.plan_id?String(p.plan_id):"",transfer_enable:String(Dt(p.transfer_enable)),u:String(Dt(p.u)),d:String(Dt(p.d)),device_limit:p.device_limit===null?"":String(p.device_limit),speed_limit:p.speed_limit===null?"":String(p.speed_limit),expired_at:Kl(p.expired_at),status:p.status,auto_renewal:String(p.auto_renewal||0),name_sni:p.name_sni??"",network_settings:p.network_settings??"",remarks:p.remarks??""})}async function st(p){var W,ne;if(p.preventDefault(),!!_){E(_.id);try{await Eo({id:_.id,plan_id:U.plan_id===""?null:Number(U.plan_id),transfer_enable:Hn(U.transfer_enable),u:Hn(U.u),d:Hn(U.d),device_limit:U.device_limit===""?null:Number(U.device_limit),speed_limit:U.speed_limit===""?null:Number(U.speed_limit),expired_at:Yl(U.expired_at),status:U.status,auto_renewal:Number(U.auto_renewal),name_sni:U.name_sni||null,network_settings:U.network_settings||null,remarks:U.remarks}),O(null),(W=window.showToast)==null||W.call(window,s("subscription.updateSuccess"),"success"),await G(S,$,v)}catch(pe){(ne=window.showToast)==null||ne.call(window,pe instanceof Error?pe.message:s("subscription.saveFailed"),"error")}finally{E(null)}}}function it(p){var W;(W=window.showConfirm)==null||W.call(window,{message:s("subscription.resetConfirm",{id:p.id}),onConfirm:async()=>{var ne,pe;E(p.id);try{await Mo(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.resetSuccess"),"success"),await G(S,$,v)}catch(Ie){(pe=window.showToast)==null||pe.call(window,Ie instanceof Error?Ie.message:s("subscription.resetFailed"),"error")}finally{E(null)}}})}function z(p){var W,ne;if(!p.user_email){(W=window.showToast)==null||W.call(window,s("subscription.renewMissingEmail"),"error");return}if(!p.plan_id){(ne=window.showToast)==null||ne.call(window,s("subscription.renewMissingPlan"),"error");return}te(p),Ee({period:"month_price",total_amount:""})}async function ce(p){var W,ne;if(p.preventDefault(),!(!(re!=null&&re.user_email)||!re.plan_id)){Se(!0);try{await as({email:re.user_email,plan_id:re.plan_id,period:le.period,total_amount:Math.round((Number(le.total_amount)||0)*100),subscription_id:re.id}),(W=window.showToast)==null||W.call(window,s("subscription.renewSuccess"),"success"),te(null)}catch(pe){(ne=window.showToast)==null||ne.call(window,pe instanceof Error?pe.message:s("subscription.renewFailed"),"error")}finally{Se(!1)}}}async function de(p){var ne;if(!p)return;const W=await Pt(p);(ne=window.showToast)==null||ne.call(window,s(W?"subscription.copySuccess":"common.copyFailed"),W?"success":"error")}function X(p,W){a(ne=>ne.map(pe=>pe.id===p?{...pe,subscribe_url:W}:pe)),J(ne=>ne&&ne.id===p?{...ne,subscribe_url:W}:ne)}async function we(p){if(p.subscribe_url)return p.subscribe_url;const ne=(await $o(p.id)).data||null;return ne&&X(p.id,ne),ne}async function ye(p){var W;if(!p.subscribe_url){Q(p.id);try{await we(p)}catch(ne){(W=window.showToast)==null||W.call(window,ne instanceof Error?ne.message:s("common.copyFailed"),"error")}finally{Q(null)}}}async function Me(p){var W,ne;Q(p.id);try{const pe=await we(p);if(!pe){(W=window.showToast)==null||W.call(window,s("common.copyFailed"),"error");return}await de(pe)}catch(pe){(ne=window.showToast)==null||ne.call(window,pe instanceof Error?pe.message:s("common.copyFailed"),"error")}finally{Q(null)}}async function $e(p){var W,ne;Q(p.id);try{const pe=await we(p);if(!pe){(W=window.showToast)==null||W.call(window,s("common.copyFailed"),"error");return}y({url:pe,subscriptionId:p.id})}catch(pe){(ne=window.showToast)==null||ne.call(window,pe instanceof Error?pe.message:s("common.copyFailed"),"error")}finally{Q(null)}}function dt(p){J(p),C([]),T(0),f(1),be(p,1),ye(p)}function Xe(p=B){return I?be(I,p):Promise.resolve()}function qe(p){var W;(W=window.showConfirm)==null||W.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var ne,pe;E(p.id);try{await wi(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([Xe(),G(S,$,v)])}catch(Ie){(pe=window.showToast)==null||pe.call(window,Ie instanceof Error?Ie.message:s("subscription.unbindFailed"),"error")}finally{E(null)}}})}function Mt(p){var W;(W=window.showConfirm)==null||W.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var ne,pe;E(p.id);try{await Ni(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.banSuccess"),"success"),await Promise.all([Xe(),G(S,$,v)])}catch(Ie){(pe=window.showToast)==null||pe.call(window,Ie instanceof Error?Ie.message:s("subscription.banFailed"),"error")}finally{E(null)}}})}function Ve(p){const W=p.device_limit&&p.device_limit>0?String(p.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:p.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:W})]}),p.device_limit&&p.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(p.device_count/p.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>dt(p),children:[e.jsx(Kn,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function pt(p){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Dt(p.total_used)," / ",Dt(p.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Xl(p)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Dt(p.u),download:Dt(p.d)})})]})}function Gt(p){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Vt,{value:p.uuid,onCopy:()=>de(p.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function At(p){return e.jsxs("div",{className:"subscription-link-stack",children:[Gt(p),p.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.subscribe_url,onClick:()=>void Me(p),disabled:V===p.id,children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Me(p),disabled:V===p.id,children:[e.jsx(yt,{size:14}),e.jsx("span",{children:V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function Lt(p){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:V===p.id,onClick:()=>void $e(p),children:[e.jsx(Jn,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),At(p)]})}function It(p,W=!1,ne=""){const pe=Ie=>{he(),Ie()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${W?"subscription-action-menu-fixed":""} ${ne}`.trim(),style:W&&Ce?{top:Ce.top,left:Ce.left}:void 0,onMouseDown:Ie=>Ie.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>pe(()=>nt(p)),children:[e.jsx(Be,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>pe(()=>z(p)),children:[e.jsx(mi,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>pe(()=>dt(p)),children:[e.jsx(Kn,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>pe(()=>void Me(p)),children:[e.jsx(yt,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>pe(()=>void $e(p)),children:[e.jsx(Jn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===p.id,onClick:()=>pe(()=>it(p)),children:[e.jsx(ns,{size:14}),s("subscription.resetSecret")]})]})}function Ot(p,W="desktop"){return W==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${ke===p.id&&!Ce?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ue(p.id),children:[s("subscription.action")," ",e.jsx(vt,{size:14})]}),ke===p.id&&!Ce?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:he,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ne=>ne.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:p.user_email??s("subscription.userId",{id:p.user_id})}),e.jsxs("small",{children:["#",p.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:he,children:e.jsx(_e,{size:16})})]}),It(p,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${ke===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ne=>De(p.id,ne.currentTarget),children:[s("subscription.action")," ",e.jsx(vt,{size:14})]}),ke===p.id&&Ce?oi.createPortal(It(p,!0),document.body):null]})}const Nt=Math.ceil(w/Bs),kt=Math.ceil(R/Gs),Rt=Nt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||A,onClick:()=>void G(S-1,$,v),children:[e.jsx(jt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:S,total:Nt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:S>=Nt||A,onClick:()=>void G(S+1,$,v),children:[s("common.next"),e.jsx(wt,{size:14})]})]}):null;return e.jsxs(Ge,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:w})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:A,onClick:()=>void G(S,$,v),children:[e.jsx(Re,{size:16}),s(A?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:v,onChange:p=>u(p.target.value),children:Gl.map(p=>e.jsx("option",{value:p,children:Zl(p,s)},p))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Cn,{size:16}),e.jsx("input",{className:"config-input",value:$,onChange:p=>q(p.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(tn,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:xt,children:s("common.clearFilter")})]}),L?e.jsx("div",{className:"form-error",children:L}):null,A&&r.length===0?e.jsx(Pe,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[r.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",p.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:p.user_id}),p.plan_id?` - ${s("subscription.planId",{id:p.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ws(p.status,s)})}),e.jsx("td",{children:pt(p)}),e.jsx("td",{children:Ve(p)}),e.jsx("td",{children:Ct(p.expired_at,s("subscription.never"))}),e.jsx("td",{children:Ct(p.updated_at,s("subscription.never"))}),e.jsx("td",{children:Ot(p)})]},p.id)),!A&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[r.map(p=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",p.id]}),e.jsx("strong",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ie(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ws(p.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),pt(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),Ve(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:Ct(p.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:Ct(p.updated_at,s("subscription.never"))})]})]}),Ot(p,"mobile")]},p.id)),!A&&r.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),Rt,I?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>J(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:I.id})}),e.jsx("p",{children:I.user_email??s("subscription.userId",{id:I.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>J(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[se?e.jsx("div",{className:"form-error",children:se}):null,F&&c.length===0?e.jsx(Pe,{label:s("subscription.slotsLoading")}):null,Lt(I),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[c.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Vt,{value:p.uuid,onCopy:()=>de(p.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Ys(p.status)}`,children:Ks(p.status,s)})}),e.jsx("td",{children:p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>de(p.hwid),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsx("td",{children:Ct(p.first_seen_at,"-")}),e.jsx("td",{children:Ct(p.last_seen_at,"-")}),e.jsx("td",{children:Js(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:N===p.id,onClick:()=>qe(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:N===p.id,onClick:()=>Mt(p),children:[e.jsx(Ft,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},p.id)),!F&&c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[c.map(p=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Ys(p.status)}`,children:Ks(p.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Vt,{value:p.uuid,onCopy:()=>de(p.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>de(p.hwid),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:Ct(p.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:Ct(p.last_seen_at,"-")})]})]}),Js(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:N===p.id,onClick:()=>qe(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:N===p.id,onClick:()=>Mt(p),children:[e.jsx(Ft,{size:14}),s("subscription.ban")]}):null]}):null]},p.id)),!F&&c.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),kt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:B<=1||F,onClick:()=>void Xe(B-1),children:[e.jsx(jt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:B,total:kt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:B>=kt||F,onClick:()=>void Xe(B+1),children:[s("common.next"),e.jsx(wt,{size:14})]})]}):null]})]})}):null,We?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>y(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:We.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>y(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(We.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:We.url})]})]})}):null,_?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>O(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:_.id})}),e.jsx("p",{children:_.user_email??s("subscription.userId",{id:_.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>O(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:st,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:U.plan_id,onChange:p=>H(W=>({...W,plan_id:p.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),d.map(p=>e.jsxs("option",{value:p.id,children:["#",p.id," - ",p.name]},p.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.transfer_enable,onChange:p=>H(W=>({...W,transfer_enable:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.u,onChange:p=>H(W=>({...W,u:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.d,onChange:p=>H(W=>({...W,d:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:U.device_limit,onChange:p=>H(W=>({...W,device_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:U.speed_limit,onChange:p=>H(W=>({...W,speed_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:p=>H(W=>({...W,expired_at:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:U.status,onChange:p=>H(W=>({...W,status:p.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:U.auto_renewal,onChange:p=>H(W=>({...W,auto_renewal:p.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:U.name_sni,onChange:p=>H(W=>({...W,name_sni:p.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:U.network_settings,onChange:p=>H(W=>({...W,network_settings:p.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:U.remarks,onChange:p=>H(W=>({...W,remarks:p.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>O(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:N===_.id,children:N===_.id?s("common.processing"):s("common.save")})]})]})]})}):null,re?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>te(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:re.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>te(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ce,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:re.user_email??"",children:re.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",re.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:ue(re.plan_id),children:ue(re.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:le.period,onChange:p=>Ee(W=>({...W,period:p.target.value})),children:Wl.map(p=>e.jsx("option",{value:p,children:Ql(p,s)},p))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:le.total_amount,onChange:p=>Ee(W=>({...W,total_amount:p.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:Le,children:s(Le?"common.processing":"common.save")})]})]})]})}):null]})}const Zs=15,ec=["email","user_id","node","hwid","user_agent","last_ip"];function Jt(n){return n?new Date(n*1e3).toLocaleString():"-"}function zt(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let r=t,a=0;for(;r>=1024&&a<s.length-1;)r/=1024,a+=1;return`${r>=10||a===0?r.toFixed(0):r.toFixed(2)} ${s[a]}`}function tc(n){return["user_id","subscription_id","node","node_type","node_id","online_ip"].includes(n)?"=":"like"}function nc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");case"online_ip":return t("device.filterOnlineIp");default:return""}}function Qs(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function un(n){return(n.online_ips??[]).join(", ")||"-"}function mn(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function sc(n){return String(n.hwid??"").trim()!==""}function ic(n){var w,b,S,h;const t=new URLSearchParams(n),s=[],r=(w=t.get("online_ip"))==null?void 0:w.trim();r&&s.push({key:"online_ip",condition:"=",value:r});const a=(b=t.get("node_type"))==null?void 0:b.trim(),d=(S=t.get("node_id"))==null?void 0:S.trim();if(a&&d)return{visible:{field:"node",value:`${a}:${d}`},hidden:s};if(d)return{visible:{field:"node",value:d},hidden:s};const l=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of l){const u=(h=t.get(v))==null?void 0:h.trim();if(u)return{visible:{field:v,value:u},hidden:s}}return{visible:null,hidden:s}}function ac(){const n=Oe(),t=nn(),{t:s}=me(),[r,a]=o.useState([]),[d,l]=o.useState(0),[w,b]=o.useState(1),[S,h]=o.useState("email"),[v,u]=o.useState(""),[$,q]=o.useState([]),[A,k]=o.useState(!0),[L,P]=o.useState(""),[_,O]=o.useState(null),[U,H]=o.useState(null),[N,E]=o.useState(null),I=o.useCallback(async(g=1,V="",Q="email",re=[])=>{k(!0),P("");try{const te=[];V.trim()&&te.push({key:Q,condition:tc(Q),value:V.trim()}),re.forEach(Ee=>{String(Ee.value??"").trim()&&te.push(Ee)});const le=await ji(g,Zs,te.length?te:void 0);a(le.data),l(le.total),b(g)}catch(te){P(te instanceof Error?te.message:s("device.loadFailed"))}finally{k(!1)}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const g=ic(t.search);if(q(g.hidden),g.visible){h(g.visible.field),u(g.visible.value),I(1,g.visible.value,g.visible.field,g.hidden);return}I(1,"","email",g.hidden)},[I,n,t.search]),o.useEffect(()=>{if(N===null)return;function g(Q){const re=Q.target;re!=null&&re.closest(".device-action-wrap")||E(null)}function V(Q){Q.key==="Escape"&&E(null)}return document.addEventListener("pointerdown",g),document.addEventListener("keydown",V),()=>{document.removeEventListener("pointerdown",g),document.removeEventListener("keydown",V)}},[N]);function J(g){g.preventDefault(),I(1,v,S,$)}function c(){if(u(""),q([]),t.search){n.replace("/device");return}I(1,"",S,[])}async function C(g){var Q;if(!g.hwid)return;const V=await Pt(g.hwid);(Q=window.showToast)==null||Q.call(window,s(V?"device.copySuccess":"common.copyFailed"),V?"success":"error")}async function R(g){var Q;const V=await Pt(g.uuid);(Q=window.showToast)==null||Q.call(window,s(V?"device.copyUuidSuccess":"common.copyFailed"),V?"success":"error")}function T(g){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var Q,re;O(g.id);try{await wi(g.id),(Q=window.showToast)==null||Q.call(window,s("device.unbindSuccess"),"success"),await I(w,v,S,$)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("device.unbindFailed"),"error")}finally{O(null)}}})}function B(g){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var Q,re;O(g.id);try{await Ni(g.id),(Q=window.showToast)==null||Q.call(window,s("device.banSuccess"),"success"),await I(w,v,S,$)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("device.banFailed"),"error")}finally{O(null)}}})}function f(g){var V;(V=window.showConfirm)==null||V.call(window,{message:s("device.resetConfirm",{user:g.user_email??`#${g.user_id}`}),onConfirm:async()=>{var Q,re;H(g.user_id);try{await Lo(g.user_id),(Q=window.showToast)==null||Q.call(window,s("device.resetSuccess"),"success"),await I(w,v,S,$)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("device.resetFailed"),"error")}finally{H(null)}}})}function F(g){E(null),g()}function M(g,V){const Q=V==="mobile"?-g.id:g.id,re=N===Q,te=sc(g);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${re?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>E(re?null:Q),children:[s("device.action")," ",e.jsx(vt,{size:14})]}),re?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[te?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:_===g.id,onClick:()=>F(()=>T(g)),children:[e.jsx(Zn,{size:14}),s("device.unbind")]}),g.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:_===g.id,onClick:()=>F(()=>B(g)),children:[e.jsx(Ft,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===g.user_id,onClick:()=>F(()=>f(g)),children:[e.jsx(ya,{size:14}),s("device.resetUser")]})]}):null]})}const se=Math.ceil(d/Zs);return e.jsxs(Ge,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:d})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:A,onClick:()=>void I(w,v,S,$),children:[e.jsx(Re,{size:16}),s(A?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:J,children:[e.jsx("select",{className:"config-input filter-select",value:S,onChange:g=>h(g.target.value),children:ec.map(g=>e.jsx("option",{value:g,children:nc(g,s)},g))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Cn,{size:16}),e.jsx("input",{className:"config-input",value:v,onChange:g=>u(g.target.value),placeholder:s(S==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(tn,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:c,children:s("device.clear")})]}),L?e.jsx("div",{className:"form-error",children:L}):null,A&&r.length===0?e.jsx(Pe,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[r.map(g=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:g.user_email??"-"}),e.jsxs("small",{children:["ID: ",g.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[g.plan_name??"-",g.user_plan_id?` #${g.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Qs(g.status,s)}),e.jsxs("span",{className:`online-badge ${g.is_online?"online":"offline"}`,children:[g.is_online?e.jsx(fs,{size:14}):e.jsx(gs,{size:14}),g.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Vt,{value:g.uuid,onCopy:()=>R(g),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),g.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:g.hwid,onClick:()=>C(g),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:g.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:g.user_agent??"",children:g.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${g.last_ip??"-"} / ${g.first_ip??"-"}`,children:[g.last_ip??"-",g.first_ip?` (${g.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${zt(g.device_upload)} / ${s("device.download")}: ${zt(g.device_download)}`,children:[zt(g.device_used_traffic)," / ",s("device.upload"),": ",zt(g.device_upload)," / ",s("device.download"),": ",zt(g.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${un(g)} / ${mn(g)}`,children:[s("device.onlineIps"),": ",un(g)," / ",s("device.onlineNodes"),": ",mn(g)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Jt(g.first_seen_at)," / ",s("device.lastSeen"),": ",Jt(g.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:M(g,"mobile")})]},g.id)),!A&&r.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[r.map(g=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:g.user_email??"-"}),e.jsxs("small",{children:["ID: ",g.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[g.plan_name??"-",g.user_plan_id?` #${g.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Qs(g.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:zt(g.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",zt(g.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",zt(g.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${g.is_online?"online":"offline"}`,children:[g.is_online?e.jsx(fs,{size:14}):e.jsx(gs,{size:14}),g.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:un(g),children:[s("device.onlineIps"),": ",un(g)]}),e.jsxs("small",{title:mn(g),children:[s("device.onlineNodes"),": ",mn(g)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Jt(g.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Vt,{value:g.uuid,onCopy:()=>R(g),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),g.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:g.hwid,onClick:()=>C(g),children:[e.jsx(yt,{size:14}),e.jsx("span",{className:"mono",children:g.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:g.user_agent??"",children:g.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:g.last_ip??"-"}),e.jsx("small",{children:g.first_ip?`${s("device.firstIp")}: ${g.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Jt(g.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Jt(g.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:M(g,"desktop")})]},g.id)),!A&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),se>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:w<=1||A,onClick:()=>void I(w-1,v,S,$),children:[e.jsx(jt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:w,total:se})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:w>=se||A,onClick:()=>void I(w+1,v,S,$),children:[s("device.next"),e.jsx(wt,{size:14})]})]}):null]})]})}const oc={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function cs(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return cs(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Xs(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:cs(n.plan_id)}:{...oc}}function Un(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function rc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function lc(n){return Number(n)===1}function Vs(n,t,s){if(!n.length)return s("webcon.allPlans");const r=new Map(t.map(a=>[Number(a.id),a.name]));return n.map(a=>r.get(a)??`#${a}`).join(", ")}function Tt(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function cc(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState([]),[l,w]=o.useState(null),[b,S]=o.useState(!0),[h,v]=o.useState(!1),[u,$]=o.useState(null),[q,A]=o.useState(""),k=o.useCallback(async()=>{S(!0),A("");try{const[N,E]=await Promise.all([Jo(),Et()]);r(N),d(E)}catch(N){A(N instanceof Error?N.message:t("webcon.toastLoadFailed"))}finally{S(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}k()},[k,n]);const L=o.useMemo(()=>a.map(N=>({id:Number(N.id),name:N.name})),[a]);function P(N,E){w(I=>I&&{...I,[N]:E})}function _(N,E){w(I=>{if(!I)return I;const J=E?Array.from(new Set([...I.plan_ids,N])):I.plan_ids.filter(c=>c!==N);return{...I,plan_ids:J}})}async function O(N){var I,J;if(N.preventDefault(),!l)return;const E=Un(l.domain);v(!0),A("");try{await Zo({id:l.id,email:l.email.trim(),domain:E,title:l.title.trim(),description:l.description.trim()||null,logo:l.logo.trim()||null,background_url:l.background_url.trim()||null,custom_html:l.custom_html||null,plan_ids:l.plan_ids,plan_id:l.plan_ids}),w(null),(I=window.showToast)==null||I.call(window,t("webcon.toastSaveSuccess"),"success"),await k()}catch(c){const C=c instanceof Error?c.message:t("webcon.toastSaveFailed");A(C),(J=window.showToast)==null||J.call(window,C,"error")}finally{v(!1)}}async function U(N){var E,I;$(N.id);try{await Xo(N.id),(E=window.showToast)==null||E.call(window,t("webcon.toastToggleSuccess"),"success"),await k()}catch(J){const c=J instanceof Error?J.message:t("webcon.toastToggleFailed");A(c),(I=window.showToast)==null||I.call(window,c,"error")}finally{$(null)}}function H(N){var E;(E=window.showConfirm)==null||E.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var I,J;$(N.id),A("");try{await Qo(N.id),(I=window.showToast)==null||I.call(window,t("webcon.toastDeleteSuccess"),"success"),await k()}catch(c){const C=c instanceof Error?c.message:t("webcon.toastDeleteFailed");A(C),(J=window.showToast)==null||J.call(window,C,"error")}finally{$(null)}}})}return e.jsxs(Ge,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void k(),children:[e.jsx(Re,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(Xs()),children:[e.jsx(at,{size:16}),t("webcon.add")]})]})]}),q?e.jsx("div",{className:"form-error",children:q}):null,b&&s.length===0?e.jsx(Pe,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(N=>{var I;const E=cs(N.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",N.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${lc(N.status)?"active":""}`,type:"button",disabled:u===N.id,onClick:()=>void U(N),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:N.email??"-"}),e.jsx("small",{children:Number(N.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:N.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((I=window.settings)==null?void 0:I.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:N.title||"-"}),e.jsx("small",{children:N.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(la,{size:13}),N.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(sn,{size:13}),N.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:Vs(E,L,t)}),e.jsx("small",{children:E.length?t("webcon.selectedCount",{count:E.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:rc(N.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(Xs(N)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:u===N.id,onClick:()=>H(N),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},N.id)}),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>w(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:N=>N.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:l.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>w(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:O,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:l.email,onChange:N=>P("email",N.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:l.domain,onChange:N=>P("domain",N.target.value),onBlur:N=>P("domain",Un(N.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:l.title,onChange:N=>P("title",N.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.description")),e.jsx("input",{className:"config-input",value:l.description,onChange:N=>P("description",N.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:l.logo,onChange:N=>P("logo",N.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Tt(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:l.background_url,onChange:N=>P("background_url",N.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[Tt(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[L.map(N=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:l.plan_ids.includes(N.id),onChange:E=>_(N.id,E.target.checked)}),e.jsx("span",{children:N.name})]},N.id)),L.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[Tt(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:l.custom_html,onChange:N=>P("custom_html",N.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:l.logo?e.jsx("img",{src:l.logo,alt:""}):e.jsx(ga,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:l.title||t("webcon.previewTitle")}),e.jsx("span",{children:Un(l.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(ss,{size:12})," ",Vs(l.plan_ids,L,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(ot,{size:16}),t(h?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ei(n){return new Date(n*1e3).toLocaleString("vi-VN")}function qn(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function dc(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(null),[l,w]=o.useState(!0),[b,S]=o.useState(!1),[h,v]=o.useState(""),[u,$]=o.useState(""),q=o.useCallback(async()=>{w(!0),v("");try{r(await Do())}catch(P){v(P instanceof Error?P.message:t("notice.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);async function A(P){var _,O;if(P.preventDefault(),!!a){S(!0),v(""),$("");try{const U=a.tags?a.tags.split(",").map(H=>H.trim()).filter(Boolean):[];await Fo({id:a.id,title:a.title,content:a.content,img_url:a.img_url||null,tags:U.length?U:null}),d(null),(_=window.showToast)==null||_.call(window,t("notice.saveSuccess"),"success"),await q()}catch(U){(O=window.showToast)==null||O.call(window,U instanceof Error?U.message:t("notice.saveFailed"),"error")}finally{S(!1)}}}async function k(P){var _;try{await Oo(P),await q()}catch(O){(_=window.showToast)==null||_.call(window,O instanceof Error?O.message:t("notice.toggleFailed"),"error")}}async function L(P){var _;(_=window.showConfirm)==null||_.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var O,U;try{await Ao(P),(O=window.showToast)==null||O.call(window,t("notice.deleteSuccess"),"success"),await q()}catch(H){(U=window.showToast)==null||U.call(window,H instanceof Error?H.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:l,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(qn()),children:[e.jsx(at,{size:16}),t("notice.addNotice")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,l&&s.length===0?e.jsx(Pe,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(P=>{var _;return e.jsxs("tr",{children:[e.jsx("td",{children:P.id}),e.jsx("td",{children:e.jsx("strong",{children:P.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${P.show?"active":""}`,type:"button",onClick:()=>void k(P.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((_=P.tags)==null?void 0:_.map((O,U)=>e.jsx("span",{className:"tag",children:O},U)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:ei(P.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>d(qn(P)),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(P.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},P.id)}),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(P=>e.jsxs("div",{className:`notice-mobile-card ${P.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",P.id]})}),e.jsx("button",{className:`admin-switch ${P.show?"active":""}`,type:"button",onClick:()=>void k(P.id),"aria-label":P.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:P.title}),e.jsx("div",{className:"notice-tags",children:P.tags&&P.tags.length>0?P.tags.map((_,O)=>e.jsx("span",{className:"tag-badge",children:_},O)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",ei(P.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>d(qn(P)),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void L(P.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},P.id)),!l&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:A,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:P=>d({...a,title:P.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:a.content,onChange:P=>d({...a,content:P.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:a.img_url,onChange:P=>d({...a,img_url:P.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:a.tags,onChange:P=>d({...a,tags:P.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function Bn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function pc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,r,a)=>a.slice(r+t.length,r+t.length+2)==="//"?t:`${s}: `):""}const ti=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Gn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function uc(){var F;const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(null),[l,w]=o.useState(!1),[b,S]=o.useState(null),[h,v]=o.useState(""),[u,$]=o.useState(!0),[q,A]=o.useState(!1),[k,L]=o.useState(!1),[P,_]=o.useState(""),O=o.useRef(null),[U,H]=o.useState([]),[N,E]=o.useState(null),I=o.useCallback(async()=>{$(!0),_("");try{r(await Ro())}catch(M){_(M instanceof Error?M.message:"Load failed")}finally{$(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}I(),Et().then(M=>{M&&H(M)}).catch(()=>{})},[I,n]),o.useEffect(()=>{var M;(M=O.current)==null||M.scrollIntoView({behavior:"smooth"})},[a]);async function J(M){var se;S(M),v(""),d(null),E(null),w(!0);try{const g=await $n(M);if(d(g),g&&g.user_id)try{const V=await fn(g.user_id);V&&V.data&&E(V.data)}catch(V){console.error("Failed to load user info:",V)}}catch{(se=window.showToast)==null||se.call(window,"Failed to load message thread","error")}finally{w(!1)}}async function c(M){var se,g;if(M.preventDefault(),!(!b||!h.trim())){A(!0),_("");try{await Ho(b,h),v(""),(se=window.showToast)==null||se.call(window,"Reply sent!","success");try{const V=await $n(b);d(V)}catch{}await I()}catch(V){(g=window.showToast)==null||g.call(window,V instanceof Error?V.message:"Reply failed","error")}finally{A(!1)}}}async function C(M){var se;(se=window.showConfirm)==null||se.call(window,{message:"Close this ticket?",onConfirm:async()=>{var g,V;_("");try{await Uo(M),(g=window.showToast)==null||g.call(window,"Ticket closed!","success"),b===M&&(S(null),d(null)),await I()}catch(Q){_(Q instanceof Error?Q.message:"Close failed"),(V=window.showToast)==null||V.call(window,Q instanceof Error?Q.message:"Close failed","error")}}})}function R(){var V,Q,re;if(!a||!N)return;const M=Number(a.withdraw_amount??0),se=Number(N.commission_balance??0);if(a.level!==3||M<=0){(V=window.showToast)==null||V.call(window,t("ticket.noWithdrawAmount"),"error");return}if(se<M){(Q=window.showToast)==null||Q.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const g=`${Je(M)} ${t("ticket.currencyUnit")}`;(re=window.showConfirm)==null||re.call(window,{message:t("ticket.confirmCommissionMessage",{amount:g}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var te,le,Ee;L(!0),_("");try{const Se=((te=(await qo(a.id)).data)==null?void 0:te.amount)??M,ke=`${Je(Se)} ${t("ticket.currencyUnit")}`,fe=await $n(a.id);if(d(fe),fe!=null&&fe.user_id){const Ce=await fn(fe.user_id);E(Ce.data)}await I(),(le=window.showToast)==null||le.call(window,t("ticket.commissionConfirmSuccess",{amount:ke}),"success")}catch(Le){(Ee=window.showToast)==null||Ee.call(window,Le instanceof Error?Le.message:t("ticket.commissionConfirmFailed"),"error")}finally{L(!1)}}})}const T=Number((N==null?void 0:N.commission_balance)??0),B=Number((a==null?void 0:a.withdraw_amount)??0),f=(a==null?void 0:a.level)===3&&B>0&&T>=B;return e.jsxs(Ge,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),P?e.jsx("div",{className:"form-error",children:P}):null,u&&s.length===0?e.jsx(Pe,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(M=>{const se=ti(M.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:M.id}),e.jsx("td",{children:e.jsx("strong",{children:M.subject})}),e.jsxs("td",{children:["#",M.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Gn(M.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})}),e.jsx("td",{children:M.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:Bn(M.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:M.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void J(M.id),children:[e.jsx(Zt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void C(M.id),children:[e.jsx(Yn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void J(M.id),children:[e.jsx(Zt,{size:14}),t("ticket.viewHistory")]})})})]},M.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(M=>{const se=ti(M.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:M.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Gn(M.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",M.id]})]}),e.jsx("span",{className:`status-pill ${se.cls}`,children:se.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",M.user_id]})]}),e.jsx("span",{children:M.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:Bn(M.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:M.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void J(M.id),children:[e.jsx(Zt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void C(M.id),children:[e.jsx(Yn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void J(M.id),children:[e.jsx(Zt,{size:14}),t("ticket.viewHistory")]})})]},M.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),b!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a?`${t("ticket.ticketDetail")}: ${a.subject}`:`${t("ticket.ticketDetail")} #${b}`}),e.jsxs("p",{children:[t("ticket.user"),": #",a==null?void 0:a.user_id," | ",t("ticket.level"),": ",a!=null?Gn(a.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{S(null),d(null)},children:e.jsx(_e,{size:18})})]}),N&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:N.email,children:N.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((F=U.find(M=>M.id===N.plan_id))==null?void 0:F.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Je(N.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Je(N.commission_balance)," ",t("ticket.currencyUnit")]})]}),(a==null?void 0:a.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:B>0?`${Je(B)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:N.expired_at?new Date(N.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(a==null?void 0:a.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:R,disabled:k||!f,children:[e.jsx(Xi,{size:14}),t(k?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),l?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Pe,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[a!=null&&a.message&&a.message.length>0?a.message.map(M=>{const se=M.is_me,g=se?M.user_email||t("ticket.staff"):`${t("ticket.user")} #${M.user_id}`;return e.jsxs("div",{className:`chat-message ${se?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:pc(M.message)}),e.jsxs("div",{className:"chat-meta",children:[g," • ",Bn(M.created_at)]})]},M.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:O})]}),(a==null?void 0:a.status)===0?e.jsx("form",{className:"modal-form",onSubmit:c,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:h,onChange:M=>v(M.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q||!h.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(ui,{size:14}),q?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function ni(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const si={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ii(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function mc(){const n=Oe(),{t}=me(),[s,r]=o.useState([]),[a,d]=o.useState(null),[l,w]=o.useState(!0),[b,S]=o.useState(!1),[h,v]=o.useState(""),[u,$]=o.useState(""),q=o.useCallback(async()=>{w(!0),v("");try{r(await Bo())}catch(_){v(_ instanceof Error?_.message:t("knowledge.loadFailed"))}finally{w(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);async function A(_){var O;try{const U=await Go(_.id);d(ii(U))}catch(U){(O=window.showToast)==null||O.call(window,U instanceof Error?U.message:t("knowledge.detailFailed"),"error")}}async function k(_){var O,U;if(_.preventDefault(),!!a){S(!0),v(""),$("");try{await Wo({id:a.id,category:a.category,title:a.title,body:a.body,language:a.language||null,sort:a.sort?Number(a.sort):null}),d(null),(O=window.showToast)==null||O.call(window,t("knowledge.saveSuccess"),"success"),await q()}catch(H){(U=window.showToast)==null||U.call(window,H instanceof Error?H.message:t("knowledge.saveFailed"),"error")}finally{S(!1)}}}async function L(_){var O;try{await Yo(_),await q()}catch(U){(O=window.showToast)==null||O.call(window,U instanceof Error?U.message:t("knowledge.toggleFailed"),"error")}}async function P(_){var O;(O=window.showConfirm)==null||O.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var U,H;try{await Ko(_),(U=window.showToast)==null||U.call(window,t("knowledge.deleteSuccess"),"success"),await q()}catch(N){(H=window.showToast)==null||H.call(window,N instanceof Error?N.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(Ge,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:l,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(ii()),children:[e.jsx(at,{size:16}),t("knowledge.addArticle")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,l&&s.length===0?e.jsx(Pe,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:_.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:_.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:_.title})}),e.jsx("td",{children:_.language&&si[_.language]||_.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void L(_.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:_.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:ni(_.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void A(_),children:[e.jsx(Be,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void P(_.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},_.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(_=>e.jsxs("div",{className:`knowledge-mobile-card ${_.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",_.id]}),_.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",_.sort]})]}),e.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void L(_.id),"aria-label":_.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:_.title}),e.jsxs("div",{className:"card-meta",children:[_.category&&e.jsx("span",{className:"category-badge",children:_.category}),_.language&&e.jsx("span",{className:"lang-badge",children:si[_.language]||_.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",ni(_.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void A(_),children:[e.jsx(Be,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void P(_.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},_.id)),!l&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(_e,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:k,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:a.category,onChange:_=>d({...a,category:_.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:_=>d({...a,title:_.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:a.body,onChange:_=>d({...a,body:_.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:a.language,onChange:_=>d({...a,language:_.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:a.sort,onChange:_=>d({...a,sort:_.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ot,{size:16}),t(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function hc(){const n=Oe(),{t}=me(),[s,r]=o.useState(null),[a,d]=o.useState(null),[l,w]=o.useState(null),[b,S]=o.useState(""),[h,v]=o.useState(!0),[u,$]=o.useState(""),q=o.useCallback(async()=>{v(!0),$("");try{const[k,L,P,_]=await Promise.all([Vo().catch(()=>({data:{}})),er().catch(()=>({data:{}})),tr().catch(()=>({data:[]})),nr().catch(()=>({data:""}))]);r(k.data),d(L.data),w(P.data),S(typeof _.data=="string"?_.data:"")}catch(k){$(k instanceof Error?k.message:t("queue.toastLoadFailed"))}finally{v(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);function A(k,L,P){return k?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[P," ",L]}),e.jsx("div",{className:"queue-grid",children:Object.entries(k).map(([_,O])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:_}),e.jsx("strong",{children:typeof O=="object"?JSON.stringify(O):String(O??"—")})]},_))})]}):null}return e.jsxs(Ge,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:h,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),u?e.jsx("div",{className:"form-error",children:u}):null,h?e.jsx(Pe,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[A(s,t("queue.systemStatus"),e.jsx(bn,{size:18})),A(a,t("queue.queueStats"),e.jsx(ss,{size:18})),l&&l.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Ki,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(l,null,2)})]}):null,b?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(na,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}function bc(){return e.jsx(La,{children:e.jsxs(Ai,{children:[e.jsx(Ae,{path:"/login",element:e.jsx(fr,{})}),e.jsx(Ae,{path:"/dashboard",element:e.jsx(wr,{})}),e.jsx(Ae,{path:"/config/system",element:e.jsx(Er,{})}),e.jsx(Ae,{path:"/config/payment",element:e.jsx(Ir,{})}),e.jsx(Ae,{path:"/config/theme",element:e.jsx(Ar,{})}),e.jsx(Ae,{path:"/server/manage",element:e.jsx(wl,{})}),e.jsx(Ae,{path:"/server/group",element:e.jsx(Nl,{})}),e.jsx(Ae,{path:"/server/route",element:e.jsx(Sl,{})}),e.jsx(Ae,{path:"/plan",element:e.jsx(Pl,{})}),e.jsx(Ae,{path:"/order",element:e.jsx(Ml,{})}),e.jsx(Ae,{path:"/coupon",element:e.jsx(Ll,{})}),e.jsx(Ae,{path:"/giftcard",element:e.jsx(Dl,{})}),e.jsx(Ae,{path:"/user",element:e.jsx(ql,{})}),e.jsx(Ae,{path:"/subscription",element:e.jsx(Vl,{})}),e.jsx(Ae,{path:"/device",element:e.jsx(ac,{})}),e.jsx(Ae,{path:"/webcon",element:e.jsx(cc,{})}),e.jsx(Ae,{path:"/notice",element:e.jsx(dc,{})}),e.jsx(Ae,{path:"/ticket",element:e.jsx(uc,{})}),e.jsx(Ae,{path:"/knowledge",element:e.jsx(mc,{})}),e.jsx(Ae,{path:"/queue",element:e.jsx(hc,{})}),e.jsx(Ae,{path:"/",element:e.jsx(ps,{to:"/dashboard",replace:!0})}),e.jsx(Ae,{path:"*",element:e.jsx(ps,{to:"/dashboard",replace:!0})})]})})}export{bc as default};
