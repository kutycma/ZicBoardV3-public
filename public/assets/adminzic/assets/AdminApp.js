import{b as o,j as e,c as Ai,u as tn,L as Oi,r as oi,a as Ri,R as Oe,N as us}from"./index.js";const ns=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],ri="admin-locale",Gn="vi-VN",Hi="/assets/adminzic",li=o.createContext(null);function Ui(){if(typeof window>"u")return Gn;const n=localStorage.getItem(ri);return n&&ns.some(t=>t.code===n)?n:Gn}function qi(n,t){return t?Object.entries(t).reduce((s,[l,a])=>s.replaceAll(`{${l}}`,String(a)),n):n}function Bi(n){return new Promise((t,s)=>{var c;if(typeof window>"u"){t({});return}const l=(c=window.AdminNextI18n)==null?void 0:c[n];if(l){t(l);return}const a=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(a){a.addEventListener("load",()=>{var g;t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})}),a.addEventListener("error",s);return}const d=document.createElement("script");d.src=`${Hi}/i18n/${n}.js`,d.async=!0,d.dataset.adminNextLocale=n,d.onload=()=>{var g;return t(((g=window.AdminNextI18n)==null?void 0:g[n])??{})},d.onerror=s,document.head.appendChild(d)})}function Gi({children:n}){const[t,s]=o.useState(Gn),[l,a]=o.useState({}),[d,c]=o.useState(!0);o.useEffect(()=>{s(Ui())},[]);const g=o.useCallback(h=>{s(h),typeof window<"u"&&localStorage.setItem(ri,h)},[]);o.useEffect(()=>{let h=!0;return c(!0),Bi(t).then(j=>{h&&a(j)}).finally(()=>{h&&c(!1)}),()=>{h=!1}},[t]);const b=o.useCallback((h,j)=>qi(l[h]??h,j),[l]),_=o.useMemo(()=>({locale:t,loading:d,setLocale:g,t:b}),[t,d,g,b]);return e.jsx(li.Provider,{value:_,children:n})}function me(){const n=o.useContext(li);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ci=(...n)=>n.filter((t,s,l)=>!!t&&t.trim()!==""&&l.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Ki={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=o.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:a="",children:d,iconNode:c,...g},b)=>o.createElement("svg",{ref:b,...Ki,width:t,height:t,stroke:n,strokeWidth:l?Number(s)*24/Number(t):s,className:ci("lucide",a),...g},[...c.map(([_,h])=>o.createElement(_,h)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ee=(n,t)=>{const s=o.forwardRef(({className:l,...a},d)=>o.createElement(Yi,{ref:d,iconNode:t,className:ci(`lucide-${Wi(n)}`,l),...a}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=ee("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ee("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ee("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ee("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
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
 */const di=ee("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
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
 */const xs=ee("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
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
 */const bs=ee("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
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
 */const ss=ee("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=ee("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
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
 */const pi=ee("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
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
 */const gs=ee("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=ee("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
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
 */const hi=ee("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
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
 */const fs=ee("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=ee("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
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
 */const Ma=ee("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),La=o.createContext(null);function Ia({children:n}){const[t,s]=o.useState([]),[l,a]=o.useState(null),d=o.useCallback((_,h="success")=>{const j=Math.random().toString(36).substring(2,9);s(u=>[...u,{id:j,message:_,type:h}]),setTimeout(()=>{s(u=>u.filter(P=>P.id!==j))},5e3)},[]),c=o.useCallback(_=>{a(_)},[]);o.useEffect(()=>{typeof window<"u"&&(window.showToast=d,window.showConfirm=c)},[d,c]);const g=async()=>{if(l){try{await l.onConfirm()}catch(_){console.error("Error in onConfirm:",_)}a(null)}},b=()=>{l&&(l.onCancel&&l.onCancel(),a(null))};return e.jsxs(La.Provider,{value:{showToast:d,showConfirm:c},children:[n,e.jsx("div",{className:"toast-container",children:t.map(_=>{let h=pa;return _.type==="success"&&(h=di),_.type==="error"&&(h=Vi),_.type==="warning"&&(h=Jn),e.jsxs("div",{className:`toast-card toast-${_.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(h,{size:18})}),e.jsx("div",{className:"toast-message",children:_.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(j=>j.filter(u=>u.id!==_.id)),children:e.jsx(ke,{size:14})})]},_.id)})}),l&&e.jsx("div",{className:"confirm-backdrop",onClick:b,children:e.jsxs("div",{className:"confirm-card",onClick:_=>_.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(Jn,{size:22})}),e.jsx("h3",{className:"confirm-title",children:l.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:l.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:l.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:g,children:l.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Da({children:n}){return e.jsx(Gi,{children:e.jsx(Ia,{children:n})})}const Fa="/api/v3";var ai;const J=typeof window<"u"&&((ai=window.settings)==null?void 0:ai.secure_path)||"ZicFree123",hn="authorization";function Aa(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let l=0;l<s.length;l++){let a=s[l];for(;a.charAt(0)===" ";)a=a.substring(1,a.length);if(a.indexOf(t)===0)try{const d=a.substring(t.length,a.length),c=decodeURIComponent(d),g=JSON.parse(c);return g&&typeof g=="object"&&"value"in g?g.value:c}catch{try{return decodeURIComponent(a.substring(t.length,a.length))}catch{return a.substring(t.length,a.length)}}}return null}function Oa(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const a=JSON.stringify({site:"ZicNet",value:t}),d=window.location.protocol==="https:",c=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",g=new Date;g.setTime(g.getTime()+s*24*60*60*1e3);const b=`expires=${g.toUTCString()}`,_=c?"":`domain=${window.location.hostname};`;let h=`${n}=${encodeURIComponent(a)}; ${b}; ${_} path=/`;d&&(h+="; secure"),h+="; SameSite=Lax",document.cookie=h;try{window.localStorage.setItem(`cookie_${n}`,a)}catch{}}function Ra(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],l=["/","/dashboard","/user","/admin"];s.forEach(a=>{l.forEach(d=>{const c=a?` domain=${a};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${c} path=${d};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function xi(){if(typeof window>"u")return null;let n=window.localStorage.getItem(hn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(hn,n)}catch{}if(!n&&(n=Aa("auth_data"),n))try{window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function Ha(n,t){const s=n.startsWith("/")?n:`/${n}`,l=new URL(`${Fa}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([a,d])=>{d!==void 0&&l.searchParams.set(a,String(d))}),l.toString()}function He(){return!!xi()}function Ua(n){typeof window>"u"||(window.localStorage.setItem(hn,n),window.localStorage.setItem("auth_data",n),Oa("auth_data",n,36500))}function bi(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(a=>{window.localStorage.removeItem(a)}),["token","auth_data","authorization","vuex","user","auth"].forEach(a=>{window.sessionStorage.removeItem(a)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(a=>{s.forEach(d=>{document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${d};`}),document.cookie=`${a}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Ra(a)})}async function Y(n,t={}){const s={},l=t.method??"GET";if(l!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const b=xi();b&&(s.authorization=b)}const a=await fetch(Ha(n,t.params),{method:l,headers:s,body:l==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),c=(a.headers.get("content-type")||"").includes("application/json"),g=c?await a.json():await a.text();if(!a.ok){const b=typeof g=="object"&&g&&"message"in g?String(g.message):`Request failed with status ${a.status}`,_=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(b);throw(a.status===401||a.status===403&&!_)&&t.auth!==!1&&(bi(),window.location.hash="/login"),new Error(b)}if(!c&&typeof g=="string"&&(g.trim().startsWith("<!DOCTYPE html")||g.trim().startsWith("<html")||g.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return g}async function qa(n,t){return Y("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Ba(){const n=`/${J}/stat`,[t,s]=await Promise.all([Y(`${n}/getOverride`),Y(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function Ga(n){return(await Y(`/${J}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function Wa(n){return(await Y(`/${J}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ka(n){return(await Y(`/${J}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Ya(n,t=10){return(await Y(`/${J}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function gi(){return(await Y(`/${J}/config/fetch`)).data}async function fi(n){return Y(`/${J}/config/save`,{method:"POST",body:n})}async function Ja(){return(await Y(`/${J}/config/getEmailTemplate`)).data}async function Za(){return(await Y(`/${J}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Qa(){return Y(`/${J}/config/testSendMail`,{method:"POST",body:{}})}async function Xa(n){return Y(`/${J}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Va(){return(await Y(`/${J}/payment/fetch`)).data}async function eo(){return(await Y(`/${J}/payment/getPaymentMethods`)).data}async function vs(n,t){return(await Y(`/${J}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function to(n){return Y(`/${J}/payment/save`,{method:"POST",body:n})}async function no(n){return Y(`/${J}/payment/show`,{method:"POST",body:{id:n}})}async function so(n){return Y(`/${J}/payment/drop`,{method:"POST",body:{id:n}})}async function io(n){return Y(`/${J}/payment/sort`,{method:"POST",body:{ids:n}})}async function ao(){return(await Y(`/${J}/theme/getThemes`)).data}async function oo(n){return(await Y(`/${J}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function ro(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return Y(`/${J}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Ut(){return(await Y(`/${J}/server/group/fetch`)).data}async function as(n){return Y(`/${J}/server/group/save`,{method:"POST",body:n})}async function lo(n){return Y(`/${J}/server/group/drop`,{method:"POST",body:{id:n}})}const yi=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function vi(){return(await Y(`/${J}/server/route/fetch`)).data}async function co(n){return Y(`/${J}/server/route/save`,{method:"POST",body:n})}async function po(n){return Y(`/${J}/server/route/drop`,{method:"POST",body:{id:n}})}async function Pt(){return(await Y(`/${J}/plan/fetch`)).data}async function uo(n){return Y(`/${J}/plan/save`,{method:"POST",body:n})}async function mo(n){return Y(`/${J}/plan/drop`,{method:"POST",body:{id:n}})}async function zn(n,t){return Y(`/${J}/plan/update`,{method:"POST",body:{id:n,...t}})}async function ho(n){return Y(`/${J}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function xo(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((l,a)=>{t.set(`filter[${a}][key]`,l.key),t.set(`filter[${a}][condition]`,l.condition),t.set(`filter[${a}][value]`,l.value)}),await Y(`/${J}/order/fetch?${t.toString()}`)}async function bo(n){return Y(`/${J}/order/paid`,{method:"POST",body:{trade_no:n}})}async function go(n){return Y(`/${J}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function os(n){return Y(`/${J}/order/assign`,{method:"POST",body:n})}async function fo(n,t){return Y(`/${J}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function yo(n){return Y(`/${J}/order/detail`,{method:"POST",body:{id:n}})}async function ji(n=1,t=15){return Y(`/${J}/coupon/fetch?current=${n}&pageSize=${t}`)}async function vo(n){return Y(`/${J}/coupon/generate`,{method:"POST",body:n})}async function jo(n){return Y(`/${J}/coupon/drop`,{method:"POST",body:{id:n}})}async function wo(n){return Y(`/${J}/coupon/show`,{method:"POST",body:{id:n}})}async function No(n=1,t=15){return Y(`/${J}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function ko(n){return Y(`/${J}/giftcard/generate`,{method:"POST",body:n})}async function _o(n){return Y(`/${J}/giftcard/drop`,{method:"POST",body:{id:n}})}async function Qn(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s&&s.forEach((a,d)=>{l.set(`filter[${d}][key]`,a.key),l.set(`filter[${d}][condition]`,a.condition),l.set(`filter[${d}][value]`,a.value)}),Y(`/${J}/user/fetch?${l.toString()}`)}async function So(n){return Y(`/${J}/user/update`,{method:"POST",body:n})}async function Xn(n){return Y(`/${J}/user/getUserInfoById`,{params:{id:n}})}async function Co(n){return Y(`/${J}/user/delUser`,{method:"POST",body:{id:n}})}async function zo(n){return Y(`/${J}/user/generate`,{method:"POST",body:n})}async function To(n){return Y(`/${J}/user/resetSecret`,{method:"POST",body:{id:n}})}async function Po(n=1,t=15,s,l=!1){const a=new URLSearchParams;return a.set("current",String(n)),a.set("pageSize",String(t)),l&&a.set("include_subscribe_url","1"),s==null||s.forEach((d,c)=>{a.set(`filter[${c}][key]`,d.key),a.set(`filter[${c}][condition]`,d.condition),a.set(`filter[${c}][value]`,d.value)}),Y(`/${J}/subscription/fetch?${a.toString()}`)}async function $o(n){return Y(`/${J}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function Eo(n){return Y(`/${J}/subscription/update`,{method:"POST",body:n})}async function Mo(n){return Y(`/${J}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function wi(n=1,t=15,s){const l=new URLSearchParams;return l.set("current",String(n)),l.set("pageSize",String(t)),s==null||s.forEach((a,d)=>{l.set(`filter[${d}][key]`,a.key),l.set(`filter[${d}][condition]`,a.condition),l.set(`filter[${d}][value]`,a.value)}),Y(`/${J}/device/fetch?${l.toString()}`)}async function Ni(n){return Y(`/${J}/device/drop`,{method:"POST",body:{id:n}})}async function ki(n){return Y(`/${J}/device/ban`,{method:"POST",body:{id:n}})}async function Lo(n){return Y(`/${J}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function Io(n,t=1,s=10){return Y(`/${J}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Do(){return(await Y(`/${J}/notice/fetch`)).data}async function Fo(n){return Y(`/${J}/notice/save`,{method:"POST",body:n})}async function Ao(n){return Y(`/${J}/notice/drop`,{method:"POST",body:{id:n}})}async function Oo(n){return Y(`/${J}/notice/show`,{method:"POST",body:{id:n}})}async function Ro(){return(await Y(`/${J}/ticket/fetch`)).data}async function Tn(n){return(await Y(`/${J}/ticket/fetch`,{params:{id:n}})).data}async function Ho(n,t){return Y(`/${J}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function Uo(n){return Y(`/${J}/ticket/close`,{method:"POST",body:{id:n}})}async function qo(n){return Y(`/${J}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Bo(){return(await Y(`/${J}/knowledge/fetch`)).data}async function Go(n){return(await Y(`/${J}/knowledge/fetch`,{params:{id:n}})).data}async function Wo(n){return Y(`/${J}/knowledge/save`,{method:"POST",body:n})}async function Ko(n){return Y(`/${J}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Yo(n){return Y(`/${J}/knowledge/show`,{method:"POST",body:{id:n}})}async function Jo(){return(await Y(`/${J}/webcon/fetch`)).data}async function Zo(n){return Y(`/${J}/webcon/save`,{method:"POST",body:n})}async function Qo(n){return Y(`/${J}/webcon/drop`,{method:"POST",body:{id:n}})}async function Xo(n){return Y(`/${J}/webcon/show`,{method:"POST",body:{id:n}})}async function Vo(){return Y(`/${J}/system/getSystemStatus`)}async function er(){return(await Y(`/${J}/system/getCoreLicenseStatus`)).data}async function tr(){return(await Y(`/${J}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function nr(){return Y(`/${J}/system/getQueueStats`)}async function sr(){return Y(`/${J}/system/getQueueWorkload`)}async function ir(){return Y(`/${J}/system/getSystemLog`)}async function js(){return Y(`/${J}/server/manage/getNodes`)}async function ar(n,t){return Y(`/${J}/server/${n}/save`,{method:"POST",body:t})}async function or(n,t){return Y(`/${J}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function rr(n,t,s){return Y(`/${J}/server/${n}/update`,{method:"POST",body:{id:t,show:s}})}async function lr(n,t){return Y(`/${J}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function cr(n){return Y(`/${J}/server/manage/sort`,{method:"POST",body:n})}function Je(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function ot(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const ws=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function _i(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Zt(n){return Number(n??0)}function Ns(n){return Zt(n)/100}function ks(n){return`${ot(Math.round(n))} VND`}function dr(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),l=0;for(;s>=1024&&l<t.length-1;)s/=1024,l+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||l===0?0:1}).format(s)} ${t[l]}`}function Si(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function pr(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,l)=>{const a=new Date(t);return a.setDate(t.getDate()-(n-l-1)),Si(a)})}function _s(n,t){const s=n.get(t);if(s)return s;const l=_i(t);return n.set(t,l),l}function ur(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function an({label:n,value:t,helper:s,tone:l="default",onClick:a}){return e.jsxs("article",{className:`stat-card tone-${l}`,onClick:a,style:a?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Zi,{size:19})}),s?e.jsx("small",{children:s}):null]})}function Ee({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Re,{size:18}),e.jsx("span",{children:n})]})}function mr(n,t){const s=new Map,l=new Map;if(n.forEach(a=>{const d=_s(s,a.date),c=ur(a.type);if(c){d[c]=Number(a.value||0);return}const g=l.get(a.date)??0,b=ws[g%ws.length];d[b]=Number(a.value||0),l.set(a.date,g+1)}),t){const a=_s(s,Si(new Date));a.registrations=Zt(t.day_register_total),t.day_order_total!==void 0&&(a.orderCount=Zt(t.day_order_total)),t.day_paid_order_total!==void 0&&(a.paidCount=Zt(t.day_paid_order_total)),a.paidAmount=Ns(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(a.commissionAmount=Ns(t.day_commission_payout)),t.day_commission_count!==void 0&&(a.commissionCount=Zt(t.day_commission_count))}return s.size===0?[]:pr(31).map(a=>s.get(a)??_i(a))}function hr({records:n,override:t}){const{t:s}=me(),[l,a]=o.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[d,c]=o.useState(null),g=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:ks},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:ot},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:ot},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:ks},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:ot},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:ot}],b=mr(n,t),_=g.filter(v=>l.includes(v.key)),h=_.filter(v=>v.unit==="money"),j=_.filter(v=>v.unit==="count"),u=Math.max(1,...h.flatMap(v=>b.map(R=>Number(R[v.key]||0)))),P=Math.max(1,...j.flatMap(v=>b.map(R=>Number(R[v.key]||0)))),G=920,I=300,S=8,L=22,N=I-L-28,U=b.length>1?(G-S*2)/(b.length-1):0,A=Math.max(Math.ceil(b.length/7),1),O=d===null?null:b[d]??null,f=v=>({"--metric-color":v.color}),$=(v,R)=>Number(v[R.key]||0),D=v=>v.unit==="money"?u:P,Z=v=>S+v*U,r=d===null?50:Math.min(88,Math.max(12,Z(d)/G*100)),w=(v,R)=>L+N-v/D(R)*N,H=v=>Math.max(0,...b.map(R=>$(R,v))),C=v=>{const R=b.map((m,Q)=>({x:Z(Q),y:w($(m,v),v)}));return R.length?R.length===1?`M ${R[0].x} ${R[0].y}`:R.slice(1).reduce((m,Q,q)=>{const V=R[q],X=(V.x+Q.x)/2;return`${m} C ${X} ${V.y}, ${X} ${Q.y}, ${Q.x} ${Q.y}`},`M ${R[0].x} ${R[0].y}`):""};function B(v){a(R=>R.includes(v)?R.length===1?R:R.filter(m=>m!==v):[...R,v]),c(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:b.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:g.map(v=>{const R=l.includes(v.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${R?"active":""}`,style:f(v),onClick:()=>B(v.key),"aria-pressed":R,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:v.label})]},v.key)})}),b.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>c(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${G} ${I}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:S,y:L,width:G-S*2,height:N,rx:"14"}),[0,.25,.5,.75,1].map(v=>e.jsx("line",{className:"chart-grid",x1:S,x2:G-S,y1:L+v*N,y2:L+v*N},v)),d!==null?e.jsx("line",{className:"chart-hover-line",x1:Z(d),x2:Z(d),y1:L,y2:L+N}):null,_.map(v=>e.jsx("path",{className:"chart-series-line",d:C(v),style:f(v)},v.key)),d!==null?_.map(v=>e.jsx("circle",{className:"chart-series-dot",cx:Z(d),cy:w($(b[d],v),v),r:"5",style:f(v)},`${v.key}-${d}`)):null,b.map((v,R)=>{const m=b.length>1?U:G-S*2;return e.jsx("rect",{className:"chart-hover-zone",x:Z(R)-m/2,y:L,width:m,height:N,onMouseEnter:()=>c(R),onFocus:()=>c(R),onClick:()=>c(R),tabIndex:0},v.date)})]}),O?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${r}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",O.date]}),e.jsx("div",{className:"tooltip-series-list",children:_.map(v=>e.jsxs("div",{className:"tooltip-series-row",style:f(v),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:v.label}),e.jsx("strong",{children:v.format($(O,v))})]},v.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:b.filter((v,R)=>R===0||R===b.length-1||R%A===0).map(v=>e.jsx("span",{children:v.date},v.date))}),e.jsx("div",{className:"chart-insights",children:_.map(v=>e.jsxs("div",{className:"chart-insight",style:f(v),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:v.summaryLabel}),e.jsx("strong",{children:v.format(H(v))})]},v.key))})]})]})}function rs({value:n,onChange:t,monthLabel:s}){const{t:l}=me();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":l("dashboard.range"),children:["today","month"].map(a=>e.jsx("button",{type:"button",className:n===a?"active":"",onClick:()=>t(a),"aria-pressed":n===a,children:a==="today"?l("dashboard.rangeToday"):s??l("dashboard.rangeMonth")},a))})}function xr({points:n,metrics:t,emptyLabel:s}){const{t:l}=me(),[a,d]=o.useState(t.map(r=>r.key)),[c,g]=o.useState(null),b=t.filter(r=>a.includes(r.key)),_=Math.max(1,...b.flatMap(r=>n.map(w=>Number(w[r.key]||0)))),h=920,j=260,u=8,P=22,I=j-P-28,S=n.length>1?(h-u*2)/(n.length-1):0,L=Math.max(Math.ceil(n.length/7),1),T=c===null?null:n[c]??null,N=r=>({"--metric-color":r.color}),U=r=>u+r*S,A=r=>P+I-r/_*I,O=c===null?50:Math.min(88,Math.max(12,U(c)/h*100)),f=(r,w)=>Number(r[w.key]||0),$=r=>Math.max(0,...n.map(w=>f(w,r))),D=r=>{const w=n.map((H,C)=>({x:U(C),y:A(f(H,r))}));return w.length?w.length===1?`M ${w[0].x} ${w[0].y}`:w.slice(1).reduce((H,C,B)=>{const v=w[B],R=(v.x+C.x)/2;return`${H} C ${R} ${v.y}, ${R} ${C.y}, ${C.x} ${C.y}`},`M ${w[0].x} ${w[0].y}`):""};function Z(r){d(w=>w.includes(r)?w.length===1?w:w.filter(H=>H!==r):[...w,r]),g(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":l("dashboard.chartMetrics"),children:t.map(r=>{const w=a.includes(r.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${w?"active":""}`,style:N(r),onClick:()=>Z(r.key),"aria-pressed":w,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:r.label})]},r.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>g(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${h} ${j}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:u,y:P,width:h-u*2,height:I,rx:"14"}),[0,.25,.5,.75,1].map(r=>e.jsx("line",{className:"chart-grid",x1:u,x2:h-u,y1:P+r*I,y2:P+r*I},r)),c!==null?e.jsx("line",{className:"chart-hover-line",x1:U(c),x2:U(c),y1:P,y2:P+I}):null,b.map(r=>e.jsx("path",{className:"chart-series-line",d:D(r),style:N(r)},r.key)),c!==null?b.map(r=>e.jsx("circle",{className:"chart-series-dot",cx:U(c),cy:A(f(n[c],r)),r:"5",style:N(r)},`${r.key}-${c}`)):null,n.map((r,w)=>{const H=n.length>1?S:h-u*2;return e.jsx("rect",{className:"chart-hover-zone",x:U(w)-H/2,y:P,width:H,height:I,onMouseEnter:()=>g(w),onFocus:()=>g(w),onClick:()=>g(w),tabIndex:0},`${r.label}-${w}`)})]}),T?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${O}%`},children:[e.jsx("div",{className:"tooltip-date",children:T.label}),e.jsxs("div",{className:"tooltip-series-list",children:[b.map(r=>e.jsxs("div",{className:"tooltip-series-row",style:N(r),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:r.label}),e.jsx("strong",{children:r.format(f(T,r))})]},r.key)),T.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:l("dashboard.sampleCount")}),e.jsx("strong",{children:ot(T.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((r,w)=>w===0||w===n.length-1||w%L===0).map((r,w)=>e.jsx("span",{children:r.label},`${r.label}-${w}`))}),e.jsx("div",{className:"chart-insights",children:b.map(r=>e.jsxs("div",{className:"chart-insight",style:N(r),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:r.summaryLabel}),e.jsx("strong",{children:r.format($(r))})]},r.key))})]})}function Ss({title:n,subtitle:t,data:s,range:l,onRangeChange:a,loading:d,error:c,mode:g}){const{t:b}=me(),_=g==="users"?((s==null?void 0:s.users)??[]).map(h=>({id:`user-${h.user_id}`,label:h.email||`User #${h.user_id}`,total:Number(h.total||0)})):((s==null?void 0:s.servers)??[]).map(h=>({id:`${h.server_type}-${h.server_id}`,label:h.server_name||b("dashboard.unnamedNode"),total:Number(h.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(rs,{value:l,onChange:a,monthLabel:b("dashboard.rangeLast31Days")})]}),c?e.jsx("div",{className:"chart-error",children:c}):null,d?e.jsx(Ee,{label:b("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:_.length===0?e.jsx("div",{className:"empty-state",children:b("dashboard.noTraffic")}):_.slice(0,10).map((h,j)=>{var G;const u=Math.max(((G=_[0])==null?void 0:G.total)??1,1),P=Math.max(3,h.total/u*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:j+1}),e.jsx("strong",{title:h.label,children:h.label}),e.jsx("small",{children:dr(h.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${P}%`}})})]},h.id)})})]})}function br({data:n,range:t,onRangeChange:s,loading:l,error:a}){const{t:d}=me(),c=[{key:"online_user",label:d("dashboard.onlineUsers"),summaryLabel:d(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:ot}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.onlineTrend")}),e.jsx("p",{children:d(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(rs,{value:t,onChange:s,monthLabel:d("dashboard.rangeLast31Days")})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx(Ee,{label:d("dashboard.chartLoading")}):e.jsx(xr,{points:(n==null?void 0:n.points)??[],metrics:c,emptyLabel:d("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:d("dashboard.onlineRetentionNote")})]})}function gr({data:n,range:t,onRangeChange:s,loading:l,error:a}){const{t:d}=me(),c=(n==null?void 0:n.items)??[],g=Math.max(...c.map(b=>Number(b.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:d("dashboard.topCtvCommission")}),e.jsx("p",{children:d("dashboard.topCtvCommissionHelp")})]}),e.jsx(rs,{value:t,onChange:s})]}),a?e.jsx("div",{className:"chart-error",children:d("dashboard.chartLoadFailed")}):null,l?e.jsx(Ee,{label:d("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:c.length===0?e.jsx("div",{className:"empty-state",children:d("dashboard.noCommissionRank")}):c.map((b,_)=>{const h=Number(b.commission_amount||0)/g*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:_+1}),e.jsx("strong",{children:b.email||`User #${b.user_id}`}),e.jsxs("small",{children:[Je(b.commission_amount)," VND · ",ot(b.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(h,3)}%`}})})]},`${b.user_id}-${_}`)})})]})}function Pn({label:n,current:t,previous:s}){const{t:l}=me();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?ot(t):t}),e.jsxs("small",{children:[l("dashboard.previous"),": ",typeof s=="number"?ot(s):s]})]})}function Ue(){const n=Ai();return o.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function fr(){return tn().pathname}function yr({href:n,...t}){return e.jsx(Oi,{to:n,...t})}function vr(){const n=Ue(),{t,locale:s,setLocale:l}=me(),[a,d]=o.useState(""),[c,g]=o.useState(""),[b,_]=o.useState(""),[h,j]=o.useState(!1),[u,P]=o.useState(!1),G=o.useRef(null);o.useEffect(()=>{function S(L){G.current&&!G.current.contains(L.target)&&P(!1)}return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]),o.useEffect(()=>{He()&&n.replace("/dashboard")},[n]);async function I(S){var L,T,N,U;S.preventDefault(),_(""),j(!0);try{const A=await qa(a,c),O=((L=A.data)==null?void 0:L.auth_data)??((T=A.data)==null?void 0:T.token),f=((N=A.data)==null?void 0:N.is_admin)===1||((U=A.data)==null?void 0:U.is_admin)===!0;if(!O||!f)throw new Error(t("login.adminRequired"));Ua(O),n.replace("/dashboard")}catch(A){_(A instanceof Error?A.message:t("login.failed"))}finally{j(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:G,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>P(S=>!S),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ns.map(S=>e.jsxs("button",{className:`locale-option ${s===S.code?"active":""}`,type:"button",onClick:()=>{l(S.code),P(!1)},children:[e.jsx("span",{className:"locale-flag",children:S.flag}),e.jsx("span",{children:S.label})]},S.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(Na,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:I,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(pi,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:S=>d(S.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:a})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ha,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:S=>g(S.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:c})]})]}),b?e.jsx("div",{className:"form-error",children:b}):null,e.jsx("button",{className:"primary-button",disabled:h,type:"submit",children:t(h?"login.signingIn":"login.submit")})]})]})]})}const jr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:la}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Sa},{href:"/config/payment",label:"nav.paymentConfig",icon:sa},{href:"/config/theme",label:"nav.themeConfig",icon:Pa}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:is},{href:"/server/group",label:"nav.groupManagement",icon:Ea},{href:"/server/route",label:"nav.routeManagement",icon:_a}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:gs},{href:"/order",label:"nav.orders",icon:ma},{href:"/coupon",label:"nav.coupons",icon:ca},{href:"/giftcard",label:"nav.giftcards",icon:za}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:hi},{href:"/subscription",label:"nav.subscriptions",icon:gs},{href:"/device",label:"nav.devices",icon:Ca},{href:"/webcon",label:"nav.webcon",icon:nn},{href:"/notice",label:"nav.notices",icon:Jt},{href:"/ticket",label:"nav.tickets",icon:ua},{href:"/knowledge",label:"nav.knowledge",icon:Qi}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Xi}]}];function wr(){const[n,t]=o.useState("light");o.useEffect(()=>{const d=localStorage.getItem("admin-theme")??"light";t(d),document.documentElement.setAttribute("data-theme",d)},[]);const s=o.useCallback(a=>{t(a),localStorage.setItem("admin-theme",a),document.documentElement.setAttribute("data-theme",a)},[]),l=o.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:l}}function Ci(n){return n?new Date(n*1e3):null}function Nr(n,t){const s=Ci(t);if(!s)return null;try{return new Intl.DateTimeFormat(n,{year:"numeric",month:"2-digit",day:"2-digit"}).format(s)}catch{return s.toLocaleDateString()}}function kr(n){const t=Ci(n);return t?Math.ceil((t.getTime()-Date.now())/864e5):null}function We({children:n,title:t,subtitle:s}){const[l,a]=o.useState(!1),d=Ue(),c=fr(),{t:g,locale:b,setLocale:_}=me(),{theme:h,toggle:j}=wr(),[u,P]=o.useState(!1),G=o.useRef(null),[I,S]=o.useState(null),[L,T]=o.useState(!1),N=o.useCallback(async(r=!1)=>{if(He()){T(r);try{S(r?await tr():await er())}catch(w){S({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:g("license.unavailable"),error:w instanceof Error?w.message:g("license.unavailable")})}finally{T(!1)}}},[g]);o.useEffect(()=>{function r(w){G.current&&!G.current.contains(w.target)&&P(!1)}return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]),o.useEffect(()=>{N(!1);const r=window.setInterval(()=>{N(!1)},6e4);return()=>window.clearInterval(r)},[N]);function U(){bi(),d.replace("/login")}const A=(I==null?void 0:I.license_expires_at)??(I==null?void 0:I.expires_at),O=Nr(b,A),f=typeof(I==null?void 0:I.days_until_expiry)=="number"?I.days_until_expiry:kr(A),$=typeof f=="number"?f<=0?g("license.expiresToday"):g("license.daysLeft",{days:f}):null,D=!!I&&I.available&&!I.requires_renewal,Z=D&&!!(I!=null&&I.renewal_warning);return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),l&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>a(!1)}),e.jsxs("aside",{className:`sidebar ${l?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:g("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:jr.map(r=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:g(r.label)}),r.items.map(w=>{const H=w.icon,C=c===w.href;return e.jsxs(yr,{className:`nav-item ${C?"active":""}`,href:w.href,onClick:()=>a(!1),children:[e.jsx(H,{size:17}),e.jsx("span",{children:g(w.label)})]},w.href)})]},r.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":g(l?"common.closeMenu":"common.openMenu"),onClick:()=>a(r=>!r),children:l?e.jsx(ke,{size:19}):e.jsx(ba,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[D?e.jsxs("button",{className:`license-chip ${Z?"warning":""}`,type:"button",disabled:L,title:g("license.refresh"),onClick:()=>void N(!0),children:[e.jsx(xs,{size:16}),e.jsxs("span",{className:"license-chip-copy",children:[e.jsx("span",{children:g("license.validUntil")}),e.jsx("strong",{children:O??g("license.unknownExpiry")})]}),$?e.jsx("small",{children:$}):null]}):null,e.jsxs("div",{className:"locale-dropdown",ref:G,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":g("common.language"),onClick:()=>P(r=>!r),children:e.jsx(nn,{size:17})}),u?e.jsx("div",{className:"locale-menu",children:ns.map(r=>e.jsxs("button",{className:`locale-option ${b===r.code?"active":""}`,type:"button",onClick:()=>{_(r.code),P(!1)},children:[e.jsx("span",{className:"locale-flag",children:r.flag}),e.jsx("span",{children:r.label})]},r.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":h==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:h==="dark"?e.jsx(Ta,{size:17}):e.jsx(ga,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:U,children:[e.jsx(xa,{size:16}),e.jsx("span",{children:g("common.logout")})]})]})]}),e.jsxs("main",{className:"content",children:[I!=null&&I.requires_renewal?e.jsxs("section",{className:"license-banner",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(Jn,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.renewTitle")}),e.jsx("p",{children:g("license.renewBody")}),e.jsxs("small",{children:[g("license.currentStatus"),": ",I.status,I.error?` - ${I.error}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:L,onClick:()=>void N(!0),children:[e.jsx(Re,{size:16}),g(L?"license.refreshing":"license.refresh")]})]}):null,Z?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(xs,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:g("license.expiryWarningTitle")}),e.jsx("p",{children:g("license.expiryWarningBody",{date:O??g("license.unknownExpiry"),days:f??""})}),e.jsxs("small",{children:[g("license.currentStatus"),": ",I.status]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:L,onClick:()=>void N(!0),children:[e.jsx(Re,{size:16}),g(L?"license.refreshing":"license.refresh")]})]}):null,n]})]})]})}function on(){return{data:null,loading:!0,error:""}}function _r(n,t){const s=new Date;if(n==="today"){const a=s.getHours();return{range:n,points:Array.from({length:24},(d,c)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),c).getTime()/1e3),label:`${String(c).padStart(2,"0")}:00`,online_user:c===a?t:0,sample_count:c===a?1:0}))}}const l=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(a,d)=>{const c=new Date(l);return c.setDate(l.getDate()-(30-d)),{time:Math.floor(c.getTime()/1e3),label:`${String(c.getMonth()+1).padStart(2,"0")}-${String(c.getDate()).padStart(2,"0")}`,online_user:d===30?t:0,online_user_avg:d===30?t:0,sample_count:d===30?1:0}})}}function Sr(){var D,Z,r,w,H,C,B,v,R,m,Q,q,V;const n=Ue(),{t}=me(),[s,l]=o.useState(null),[a,d]=o.useState(""),[c,g]=o.useState(!0),[b,_]=o.useState("today"),[h,j]=o.useState("today"),[u,P]=o.useState("today"),[G,I]=o.useState("today"),[S,L]=o.useState(on),[T,N]=o.useState(on),[U,A]=o.useState(on),[O,f]=o.useState(on),$=o.useCallback(async()=>{g(!0),d("");try{l(await Ba())}catch(X){d(X instanceof Error?X.message:t("dashboard.loadFailed"))}finally{g(!1)}},[t]);return o.useEffect(()=>{if(!He()){n.replace("/login");return}$()},[$,n]),o.useEffect(()=>{let X=!0;return L(ie=>({...ie,loading:!0,error:""})),Ga(b).then(ie=>{X&&L({data:ie,loading:!1,error:""})}).catch(ie=>{X&&L({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{X=!1}},[b,t]),o.useEffect(()=>{let X=!0;return N(ie=>({...ie,loading:!0,error:""})),Wa(h).then(ie=>{X&&N({data:ie,loading:!1,error:""})}).catch(ie=>{X&&N({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{X=!1}},[h,t]),o.useEffect(()=>{let X=!0;return A(ie=>({...ie,loading:!0,error:""})),Ka(u).then(ie=>{X&&A({data:ie,loading:!1,error:""})}).catch(()=>{var ie;X&&A({data:_r(u,((ie=s==null?void 0:s.override)==null?void 0:ie.online_user)??0),loading:!1,error:""})}),()=>{X=!1}},[u,(D=s==null?void 0:s.override)==null?void 0:D.online_user]),o.useEffect(()=>{let X=!0;return f(ie=>({...ie,loading:!0,error:""})),Ya(G).then(ie=>{X&&f({data:ie,loading:!1,error:""})}).catch(ie=>{X&&f({data:null,loading:!1,error:ie instanceof Error?ie.message:t("dashboard.chartLoadFailed")})}),()=>{X=!1}},[G,t]),e.jsxs(We,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[a?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:a}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:$,children:[e.jsx(Re,{size:16}),t("common.retry")]})]}):null,c&&!s?e.jsx(Ee,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((Z=s.override)==null?void 0:Z.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(r=s.override)==null?void 0:r.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:$,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(an,{label:t("dashboard.onlineUsers"),value:ot(((w=s.override)==null?void 0:w.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.todayIncome"),value:`${Je(((H=s.override)==null?void 0:H.day_paid_income)??((C=s.override)==null?void 0:C.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(an,{label:t("dashboard.todayRegistrations"),value:ot(((B=s.override)==null?void 0:B.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(an,{label:t("dashboard.pendingCommission"),value:ot(((v=s.override)==null?void 0:v.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(Pn,{label:t("dashboard.monthIncome"),current:`${Je(((R=s.override)==null?void 0:R.month_income)??0)} VND`,previous:`${Je(((m=s.override)==null?void 0:m.last_month_income)??0)} VND`}),e.jsx(Pn,{label:t("dashboard.monthCommission"),current:`${Je(((Q=s.override)==null?void 0:Q.commission_month_payout)??0)} VND`,previous:`${Je(((q=s.override)==null?void 0:q.commission_last_month_payout)??0)} VND`}),e.jsx(Pn,{label:t("dashboard.monthRegistrations"),current:((V=s.override)==null?void 0:V.month_register_total)??0,previous:"-"})]}),e.jsx(hr,{records:s.order,override:s.override}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(br,{data:U.data,range:u,onRangeChange:P,loading:U.loading,error:U.error}),e.jsx(gr,{data:O.data,range:G,onRangeChange:I,loading:O.loading,error:O.error}),e.jsx(Ss,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:S.data,range:b,onRangeChange:_,loading:S.loading,error:S.error,mode:"users"}),e.jsx(Ss,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:T.data,range:h,onRangeChange:j,loading:T.loading,error:T.error,mode:"servers"})]})]}):null]})}const Cr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Cs(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function zr(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function $n(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function Tr(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Pr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function $r(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Ye(n){return n===!0||n===1||n==="1"}function Er(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function En(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Mr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function Lr({field:n,value:t,onChange:s}){const{t:l}=me(),a=n.toInput?n.toInput(t):Er(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Ye(t)?"on":""}`,type:"button",onClick:()=>s(Ye(t)?0:1),"aria-pressed":Ye(t),children:[e.jsx("span",{}),Ye(t)?Cs(l)[0].label:Cs(l)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:a,onChange:d=>s(d.target.value),children:(n.options??[]).map(d=>e.jsx("option",{value:d.value,children:d.label},String(d.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,rows:4,value:a}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:d=>s(n.fromInput?n.fromInput(d.target.value):d.target.value),placeholder:n.placeholder,type:n.type,value:a}):null]})]})}function Ir({plans:n,emailTemplates:t,t:s}){const l=[{label:s("config.option.disabled"),value:0},...n.map(a=>({label:a.name,value:a.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:l},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:a=>Number(a.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:a=>Ye(a.email_whitelist_enable),fromInput:En},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:a=>Ye(a.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:a=>Ye(a.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:a=>Ye(a.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Pr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:a=>String(a.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:zr(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:$n(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:$n(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:$n(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:Tr(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:a=>Number(a.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:a=>Ye(a.subscribe_url_ua_enable),fromInput:Mr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:En}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:$r(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:En},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:a=>Ye(a.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:a=>Ye(a.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:a=>Ye(a.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:a=>Ye(a.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(a=>({label:a,value:a}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Dr(){const n=Ue(),{t}=me(),[s,l]=o.useState("site"),[a,d]=o.useState(null),[c,g]=o.useState([]),[b,_]=o.useState([]),[h,j]=o.useState(!0),[u,P]=o.useState(null),[G,I]=o.useState(""),S=o.useCallback(async()=>{j(!0),I("");try{const[$,D,Z]=await Promise.all([gi(),Za(),Ja()]);d($),g(D),_(Z)}catch($){I($ instanceof Error?$.message:t("config.loadFailed"))}finally{j(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}S()},[S,n]),o.useEffect(()=>{const $=document.querySelector(".config-tabs button.active");$&&$.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const L=o.useMemo(()=>Ir({plans:c,emailTemplates:b,t}),[c,b,t]),T=L.find($=>$.key===s)??L[0],N=(a==null?void 0:a[T.key])??{};function U($,D,Z){d(r=>r&&{...r,[$]:{...r[$],[D]:Z}})}async function A(){var Z,r,w;if(!a)return;const $=T.key==="safe"?String(((Z=window.settings)==null?void 0:Z.secure_path)??"").trim():"",D=T.key==="safe"?String(((r=a.safe)==null?void 0:r.secure_path)??"").trim():"";P(T.key),I("");try{await fi(a[T.key]),(w=window.showToast)==null||w.call(window,t("config.saveSuccess"),"success"),T.key==="safe"&&D&&D!==$&&(window.settings={...window.settings??{},secure_path:D},window.location.replace(`${window.location.origin}/${D}`))}catch(H){I(H instanceof Error?H.message:t("config.saveFailed"))}finally{P(null)}}async function O(){var $;P("mail"),I("");try{await Qa(),($=window.showToast)==null||$.call(window,t("config.email.testSuccess"),"success")}catch(D){I(D instanceof Error?D.message:t("config.email.testFailed"))}finally{P(null)}}async function f(){var D;const $=String((a==null?void 0:a.telegram.telegram_bot_token)??"");P("webhook"),I("");try{await Xa($),(D=window.showToast)==null||D.call(window,t("config.telegram.webhookSuccess"),"success")}catch(Z){I(Z instanceof Error?Z.message:t("config.telegram.webhookFailed"))}finally{P(null)}}return e.jsxs(We,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:h,children:[e.jsx(Re,{size:16}),t(h?"common.refreshing":"common.refresh")]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,h&&!a?e.jsx(Ee,{label:t("config.loading")}):null,a?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:Cr.map($=>{const D=L.find(Z=>Z.key===$);return D?e.jsxs("button",{className:s===$?"active":"",type:"button",onClick:()=>l($),children:[e.jsx("span",{children:D.label}),e.jsx("small",{children:D.hint})]},$):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:T.label}),e.jsx("p",{children:T.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:u===T.key,type:"button",onClick:A,children:[e.jsx(lt,{size:16}),u===T.key?t("config.saving"):t("config.saveTab")]})]}),T.warning?e.jsx("div",{className:"config-warning",children:T.warning}):null,e.jsx("div",{className:"config-fields",children:T.fields.map($=>$.visible&&!$.visible(N)?null:e.jsx(Lr,{field:$,value:N[$.key],onChange:D=>U(T.key,$.key,D)},$.key))}),T.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="mail",onClick:O,children:[e.jsx(pi,{size:16}),t(u==="mail"?"config.email.testing":"config.email.test")]})}):null,T.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:u==="webhook",onClick:f,children:[e.jsx($a,{size:16}),t(u==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(ui,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function zt(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function Mn(n){return n===!0||n===1||n==="1"}function Fr(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Ar(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Or(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[b,_]=o.useState({}),[h,j]=o.useState(!0),[u,P]=o.useState(!1),[G,I]=o.useState(!1),[S,L]=o.useState(""),[T,N]=o.useState(""),[U,A]=o.useState({}),O=o.useCallback(async()=>{j(!0),L("");try{const[C,B]=await Promise.all([Va(),eo()]);l(C),d(B),A({})}catch(C){L(C instanceof Error?C.message:t("payment.loadFailed"))}finally{j(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}O()},[O,n]);async function f(C){const B=(C==null?void 0:C.payment)??a[0]??"",v=Fr(C,B);if(g(v),_({}),L(""),N(""),!!B){P(!0);try{_(await vs(B,C==null?void 0:C.id))}catch(R){L(R instanceof Error?R.message:t("payment.formLoadFailed"))}finally{P(!1)}}}async function $(C){if(c){g({...c,payment:C,config:{}}),P(!0),L("");try{_(await vs(C,c.id))}catch(B){L(B instanceof Error?B.message:t("payment.formLoadFailed"))}finally{P(!1)}}}async function D(C){var B,v;if(C.preventDefault(),!!c){I(!0),L(""),N("");try{await to(Ar(c)),g(null),(B=window.showToast)==null||B.call(window,t("payment.saveSuccess"),"success"),await O()}catch(R){(v=window.showToast)==null||v.call(window,R instanceof Error?R.message:t("payment.saveFailed"),"error")}finally{I(!1)}}}async function Z(C){var B;L(""),N("");try{await no(C),await O()}catch(v){(B=window.showToast)==null||B.call(window,v instanceof Error?v.message:t("payment.toggleFailed"),"error")}}async function r(C){var B;(B=window.showConfirm)==null||B.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var v,R;L(""),N("");try{await so(C),(v=window.showToast)==null||v.call(window,t("payment.deleteSuccess"),"success"),await O()}catch(m){(R=window.showToast)==null||R.call(window,m instanceof Error?m.message:t("payment.deleteFailed"),"error")}}})}async function w(C,B){var Q;const v=C+B;if(v<0||v>=s.length)return;const R=[...s],m=R[C];R.splice(C,1),R.splice(v,0,m),l(R);try{await io(R.map(q=>q.id)),await O()}catch(q){(Q=window.showToast)==null||Q.call(window,q instanceof Error?q.message:t("payment.sortFailed"),"error"),await O()}}async function H(C){var v;const B=await zt(C);(v=window.showToast)==null||v.call(window,t(B?"payment.copied":"common.copyFailed"),B?"success":"error")}return e.jsxs(We,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:O,disabled:h,children:[e.jsx(Re,{size:16}),e.jsx("span",{children:t(h?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void f(),children:[e.jsx(rt,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,h&&s.length===0?e.jsx(Ee,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((C,B)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:C.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void w(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(hs,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void w(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(ms,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Mn(C.enable)?"active":""}`,type:"button",onClick:()=>void Z(C.id),"aria-label":Mn(C.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:C.name}),C.icon?e.jsx("small",{children:C.icon}):null]}),e.jsx("td",{children:C.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void H(C.notify_url),children:[e.jsx("span",{children:C.notify_url}),e.jsx(Vt,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void f(C),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void r(C.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},C.id)),!h&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((C,B)=>{const v=Mn(C.enable),R=C.handling_fee_percent!==null&&C.handling_fee_percent!==""?`${C.handling_fee_percent}%`:"",m=C.handling_fee_fixed!==null?`${Je(C.handling_fee_fixed)} VND`:"",Q=[R,m].filter(Boolean).join(" + ")||"No fees",q=U[C.id],V=C.icon&&!q;return e.jsxs("div",{className:`payment-mobile-card ${v?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",C.id]}),e.jsx("span",{className:"gateway-tag",children:C.payment})]}),e.jsx("button",{className:`admin-switch ${v?"active":""}`,type:"button",onClick:()=>void Z(C.id),"aria-label":t(v?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[V?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:C.icon,alt:C.name,onError:()=>{A(X=>({...X,[C.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:C.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:C.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:Q})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void H(C.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:C.notify_url}),e.jsx(Vt,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void w(B,-1),disabled:B===0,"aria-label":t("payment.moveUp"),children:e.jsx(hs,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void w(B,1),disabled:B===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(ms,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void f(C),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void r(C.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},C.id)}),!h&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:c.name,onChange:C=>g({...c,name:C.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:c.icon,onChange:C=>g({...c,icon:C.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:c.notify_domain,onChange:C=>g({...c,notify_domain:C.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:c.handling_fee_percent,onChange:C=>g({...c,handling_fee_percent:C.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:c.handling_fee_fixed,onChange:C=>g({...c,handling_fee_fixed:C.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:c.payment,onChange:C=>void $(C.target.value),children:a.map(C=>e.jsx("option",{value:C,children:C},C))})]}),u?e.jsx(Ee,{label:t("payment.formLoading")}):null,u?null:Object.entries(b).map(([C,B])=>e.jsxs("label",{children:[e.jsx("span",{children:B.label}),e.jsx("input",{className:"config-input",placeholder:B.description,value:String(c.config[C]??B.value??""),onChange:v=>g({...c,config:{...c.config,[C]:v.target.value}})})]},C)),c.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"payment.saving":"common.save")]})]})]})]})}):null]})}function Rr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Hr(n,t){return t[n.field_name]??n.default_value??""}function Ur(){const n=Ue(),{t}=me(),[s,l]=o.useState(null),[a,d]=o.useState(null),[c,g]=o.useState(!0),[b,_]=o.useState(!1),[h,j]=o.useState(!1),[u,P]=o.useState(null),[G,I]=o.useState(""),[S,L]=o.useState(""),T=o.useCallback(async()=>{g(!0),I("");try{l(await ao())}catch(f){I(f instanceof Error?f.message:t("theme.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}T()},[T,n]);async function N(f,$){d(null),_(!0),I(""),L("");try{const D=await oo(f);d({key:f,theme:$,values:D})}catch(D){I(D instanceof Error?D.message:t("theme.configLoadFailed"))}finally{_(!1)}}async function U(f){P(f),I(""),L("");try{await fi({frontend_theme:f}),L(t("theme.activateSuccess")),await T()}catch($){I($ instanceof Error?$.message:t("theme.activateFailed"))}finally{P(null)}}async function A(f){if(f.preventDefault(),!!a){j(!0),I(""),L("");try{await ro(a.key,a.values),d(null),L(t("theme.saveSuccess")),await T()}catch($){I($ instanceof Error?$.message:t("theme.saveFailed"))}finally{j(!1)}}}function O(f,$){d(D=>D&&{...D,values:{...D.values,[f]:$}})}return e.jsxs(We,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),G?e.jsx("div",{className:"form-error",children:G}):null,S?e.jsx("div",{className:"form-success",children:S}):null,c&&!s?e.jsx(Ee,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([f,$])=>{const D=s.active===f;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Rr($)})`},children:D?e.jsxs("span",{className:"theme-active",children:[e.jsx(di,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:$.name||f}),e.jsx("p",{children:$.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",$.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void N(f,$),children:[e.jsx(wa,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:D||u===f,type:"button",onClick:()=>void U(f),children:[e.jsx(fa,{size:15}),t(D?"theme.current":u===f?"theme.activating":"theme.activate")]})]})]},f)})}):null,b?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx(Ee,{label:t("theme.configLoading")})})}):null,a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:a.theme.name||a.key})}),e.jsx("p",{children:a.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:A,children:[(a.theme.configs??[]).map(f=>{const $=Hr(f,a.values);return e.jsxs("label",{children:[e.jsx("span",{children:f.label}),f.description?e.jsx("p",{className:"field-description",children:f.description}):null,f.field_type==="select"?e.jsx("select",{className:"config-input",value:$,onChange:D=>O(f.field_name,D.target.value),children:Object.entries(f.select_options??{}).map(([D,Z])=>e.jsx("option",{value:D,children:Z},D))}):null,f.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:f.placeholder,rows:5,value:$,onChange:D=>O(f.field_name,D.target.value)}):null,f.field_type!=="select"&&f.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:f.placeholder,value:$,onChange:D=>O(f.field_name,D.target.value)}):null]},f.field_name)}),(a.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"theme.saving":"common.save")]})]})]})]})}):null]})}const Vn=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],qr=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Br=["tcp","ws","grpc","http","httpupgrade","xhttp"],zi=["tcp","ws","grpc"],Ti=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Gr=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],fn=["anytls","hysteria2","trojan","tuic"],Wr=["tcp","ws","grpc","httpupgrade","xhttp"],Kr=["chrome","firefox","safari","ios","android","edge","360","qq"],Yr=["vmess","vless","trojan","hysteria","tuic","anytls"],Jr=["trojan","hysteria","tuic","anytls"],Pi=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],yn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},vn=[10,20,50,100],$i="admin_server_manage_page_size";function Ei(n){return vn.includes(n)}function Zr(){if(typeof window>"u")return vn[0];try{const n=Number(window.localStorage.getItem($i));if(Ei(n))return n}catch{}return vn[0]}const ls=typeof window<"u"?window.location.origin:"",Qr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Xr(n,t,s=""){return n[t]??s}function fe(n,t,s=""){return String(Xr(n,t,s))}function Vr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function Tt(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function es(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function el(n){return n==="vmess"?"networkSettings":"network_settings"}function tl(n,t){const s=n==="vmess",l=n==="vless"||pt(n),a={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return l?{acceptProxyProtocol:!1,...a}:a;case"ws":return l?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function pt(n){return n==="v2node"||n==="zicnode"}function nl(n){return Jr.includes(n)}function sl(n){return pt(n)||Yr.includes(n)}function zs(n){return n==="vmess"?"tlsSettings":"tls_settings"}function il(n){const t=String((n==null?void 0:n._type)??"");return nl(t)?1:Number((n==null?void 0:n.tls)??0)}function jn(n){return!!n&&n!=="shadowsocks"}function al(n){return n==="vless"||n==="vmess"}function wn(n){return n==="vless"||n==="anytls"}function ol(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function Ts(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?zi:n==="vless"||n==="vmess"?Wr:[]}function rl(n){var t;return pt(n)?"ZicNode":((t=Vn.find(s=>s.value===n))==null?void 0:t.label)??n}function De(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function cs(n){return n===!0||n===1||n==="1"||n==="true"}function Ps(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function Mi(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function Nn(n){if(Array.isArray(n))return n.map(t=>String(t).trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();if(!t)return[];try{const s=JSON.parse(t);if(Array.isArray(s))return s.map(l=>String(l).trim()).filter(Boolean)}catch{}return t.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean)}return[]}function Li(n){const t=new Set,s=[];return Nn(n).forEach(l=>{const a=l.toLowerCase();t.has(a)||(t.add(a),s.push(l))}),s}function ll(n){return Mi(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function kn(n){const t={...yn,...Tt(n)};if(!cs(t.enable))return{enable:!1};const l={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:Pi.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(c=>{const g=De(t[c]);g&&(l[c]=g)});const a=Mi(t.addresses);a.length&&(l.addresses=a);const d=ll(t.reserved);return d.length&&(l.reserved=d),l}const cl=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],dl=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function bt(n,t){const s=Tt(n);if(t===0)return{};const l={...s};return t===1?cl.forEach(a=>delete l[a]):t===2&&dl.forEach(a=>delete l[a]),Object.keys(l).forEach(a=>{const d=l[a];(d===""||d===null||d===void 0)&&delete l[a]}),l}function pl(n){const t=Tt(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),l=!!(De(t.public_key_sha256)||De(t.sha256_hex)||De(t.sha256));return s==="error"?{state:"error",hasPin:l,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:l?{state:"ready",hasPin:l,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:l,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function $s(n,t=ls){return De(n).replace(/\/+$/,"")||t}function Es(n){return`'${n.replace(/'/g,"'\\''")}'`}function ul(n,t){const s=t.apiHost||ls,l=t.apiKey||"TOKEN_MOI";return`wget -N ${Qr} && \\
bash install.sh --api-host ${Es(s)} --node-id ${n} --api-key ${Es(l)}`}function Ms(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function Ls(n,t){if(t){const l=JSON.parse(JSON.stringify(t));if(l.group_id=Ms(l.group_id),l.route_id=Ms(l.route_id),l.load_ips=Li(l.load_ips),pt(n)){l.warp_settings={...yn,...Tt(l.warp_settings)};const a=String(l.protocol??""),d=Number(l.tls??0);d===2&&!wn(a)?l.tls=jn(a)?1:0:fn.includes(a)&&d!==2&&(l.tls=1)}return{_type:n,...l}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],load_ips:[],rate:"1",show:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...yn}};default:return s}}function Ii({initialValue:n,placeholder:t,onCancel:s,onSave:l}){const{t:a}=me(),[d,c]=o.useState(()=>es(n)?JSON.stringify(n,null,2):""),[g,b]=o.useState(""),_=j=>{if(j.preventDefault(),!d.trim()){l({});return}try{const u=JSON.parse(d);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");l(u)}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}},h=j=>{if(c(j),!j.trim()){b("");return}try{const u=JSON.parse(j);if(typeof u!="object"||u===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(u){b(u instanceof Error?u.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:_,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:a("node.jsonContent")}),g&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",g]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:g?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:d,onChange:j=>h(j.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:a("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!g,children:a("common.confirm")})]})]})}function oe({label:n,required:t,actionText:s,onAction:l}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&l&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:a=>{a.preventDefault(),l()},children:s})]})}function Is({value:n,onChange:t,label:s,placeholder:l}){const{t:a}=me(),[d,c]=o.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(oe,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((g,b)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((_,h)=>h!==b)),style:{cursor:"pointer"},children:[g," ×"]},b)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:d,placeholder:l??a("node.tagPlaceholder"),onChange:g=>c(g.target.value),onKeyDown:g=>{g.key==="Enter"&&d.trim()&&(g.preventDefault(),t([...n,d.trim()]),c(""))}})]})]})}function Ds({options:n,value:t,onChange:s,label:l,actionText:a,onAction:d}){const{t:c}=me(),[g,b]=o.useState(""),_=n.filter(j=>t.includes(j.id)),h=n.filter(j=>j.name.toLowerCase().includes(g.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(oe,{label:l,actionText:a,onAction:d}),_.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:_.map(j=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(u=>u!==j.id)),children:[j.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${c("common.search")}...`,value:g,onChange:j=>b(j.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[h.map(j=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(j.id),onChange:u=>s(u.target.checked?[...t,j.id]:t.filter(P=>P!==j.id))}),e.jsx("span",{children:j.name})]},j.id)),h.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?c("node.noGroupsAvailable"):c("node.noResultsFound")})]})]})}function ut({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:l=>s(l.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function ml({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:l,onCancel:a,onSave:d}){const{t:c}=me(),g=t?"server_name":"serverName",b=t?"allow_insecure":"allowInsecure",_=pt(l),h=sl(l),j=s===1&&h,[u,P]=o.useState(String((n==null?void 0:n[g])??"")),[G,I]=o.useState(String((n==null?void 0:n.dest)??"")),[S,L]=o.useState(String((n==null?void 0:n.server_port)??"443")),[T,N]=o.useState(String((n==null?void 0:n.xver)??"0")),[U,A]=o.useState(String((n==null?void 0:n.private_key)??"")),[O,f]=o.useState(String((n==null?void 0:n.public_key)??"")),[$,D]=o.useState(String((n==null?void 0:n.short_id)??"")),[Z,r]=o.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[w,H]=o.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[C,B]=o.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),v=String((n==null?void 0:n.cert_mode)??"").trim(),[R,m]=o.useState(v||"auto"),[Q,q]=o.useState(String((n==null?void 0:n.provider)??"")),[V,X]=o.useState(String((n==null?void 0:n.dns_env)??"")),[ie,we]=o.useState(String((n==null?void 0:n.cert_file)??"")),[Fe,Ae]=o.useState(String((n==null?void 0:n.key_file)??"")),[Me,_e]=o.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[Ne,be]=o.useState(String((n==null?void 0:n.ech)??"")),[Se,ve]=o.useState(String((n==null?void 0:n.ech_server_name)??"")),[Ke,y]=o.useState(String((n==null?void 0:n.ech_key)??"")),[se,W]=o.useState(String((n==null?void 0:n.ech_config)??"")),[xe,Ce]=o.useState(()=>{const ae=n==null?void 0:n[b];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),he=Tt(n==null?void 0:n.auto_cert),Ie=pl(n==null?void 0:n.auto_cert),qe=ae=>{if(ae.preventDefault(),_&&s===0){d({});return}const mt=_?bt(n,s):Tt(n),pe=_?{...mt,[g]:u,fingerprint:Z}:{...n??{},[g]:u,fingerprint:Z},st=w.trim(),it=C.trim();if(st?pe.pinnedPeerCertSha256=st:delete pe.pinnedPeerCertSha256,delete pe.pinned_peer_cert_sha256,it?pe.verifyPeerCertByName=it:delete pe.verifyPeerCertByName,delete pe.verify_peer_cert_by_name,_&&s!==1?(delete pe.allow_insecure,delete pe.allowInsecure):pe[b]=t?xe?1:0:xe,s===2&&(pe.dest=G,pe.server_port=S,pe.xver=Number(T)||0,pe.private_key=U,pe.public_key=O,pe.short_id=$,pe.ech=Ne,pe.ech_server_name=Se,pe.ech_key=Ke,pe.ech_config=se),j){pe.cert_mode=R;const at=n==null?void 0:n.auto_cert;at&&typeof at=="object"&&(pe.auto_cert=at),R==="none"?(delete pe.provider,delete pe.dns_env,delete pe.cert_file,delete pe.key_file):(Q.trim()?pe.provider=Q:delete pe.provider,V.trim()?pe.dns_env=V:delete pe.dns_env,ie.trim()?pe.cert_file=ie:delete pe.cert_file,Fe.trim()?pe.key_file=Fe:delete pe.key_file),pe.reject_unknown_sni=Me?"1":"0"}d(_?bt(pe,s):pe)};return e.jsxs("form",{onSubmit:qe,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:c("node.sni")}),e.jsx("input",{className:"config-input",value:u,onChange:ae=>P(ae.target.value),placeholder:c(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dest")}),e.jsx("input",{className:"config-input",value:G,onChange:ae=>I(ae.target.value),placeholder:c("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.servicePort")}),e.jsx("input",{className:"config-input",value:S,onChange:ae=>L(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:T,onChange:ae=>N(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.privateKey")}),e.jsx("input",{className:"config-input",value:U,onChange:ae=>A(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.publicKey")}),e.jsx("input",{className:"config-input",value:O,onChange:ae=>f(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.shortId")}),e.jsx("input",{className:"config-input",value:$,onChange:ae=>D(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.fingerprint")}),e.jsx("select",{className:"config-input",value:Z,onChange:ae=>r(ae.target.value),children:Kr.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:w,onChange:ae=>H(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:C,onChange:ae=>B(ae.target.value),placeholder:"example.com"})]})]}),j?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.certMode")}),e.jsxs("select",{className:"config-input",value:R,onChange:ae=>m(ae.target.value),children:[e.jsx("option",{value:"auto",children:c("node.certModeAuto")}),e.jsx("option",{value:"self",children:c("node.certModeSelf")}),e.jsx("option",{value:"http",children:c("node.certModeHttp")}),e.jsx("option",{value:"dns",children:c("node.certModeDns")}),e.jsx("option",{value:"file",children:c("node.certModeFile")}),e.jsx("option",{value:"none",children:c("node.certModeNone")})]})]}),R!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${Ie.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:c(Ie.labelKey)}),De(he.updated_at)?e.jsx("span",{className:"mono",children:De(he.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:c(Ie.detailKey)}),De(he.target)||De(he.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[De(he.target)?`${c("node.autoCertTarget")}: ${De(he.target)}`:"",De(he.target)&&De(he.source)?" · ":"",De(he.source)?`${c("node.autoCertSource")}: ${De(he.source)}`:""]}):null,De(he.public_key_sha256)||De(he.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:De(he.public_key_sha256)?`${c("node.autoCertPublicKeySha")}: ${De(he.public_key_sha256)}`:`${c("node.autoCertSha")}: ${De(he.sha256_hex)}`}):null,De(he.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:De(he.error)}):null]}):null,R==="dns"||R==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:Q,onChange:ae=>q(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:V,onChange:ae=>X(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,R!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.certFile")}),e.jsx("input",{className:"config-input",value:ie,onChange:ae=>we(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.keyFile")}),e.jsx("input",{className:"config-input",value:Fe,onChange:ae=>Ae(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null,e.jsx(ut,{label:c("node.rejectUnknownSni"),checked:Me,onChange:_e})]}):null,!_||_&&s===1?e.jsx(ut,{label:c("node.allowInsecure"),checked:xe,onChange:Ce}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.ech")}),e.jsxs("select",{className:"config-input",value:Ne,onChange:ae=>be(ae.target.value),children:[e.jsx("option",{value:"",children:c("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:c("node.echCustom")})]})]}),Ne==="cloudflare"?e.jsx("div",{className:"config-warning",children:c("node.echCloudflareHelp")}):null,Ne==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echServerName")}),e.jsx("input",{className:"config-input",value:Se,onChange:ae=>ve(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echKey")}),e.jsx("input",{className:"config-input",value:Ke,onChange:ae=>y(ae.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:c("node.echConfig")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>W(ae.target.value),placeholder:c("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:a,children:c("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:c("common.confirm")})]})]})}function hl({draft:n,set:t,groups:s,routes:l,nodes:a,onOpenJson:d,onAddGroup:c,onOpenTransportConfig:g}){const{t:b}=me(),_=String(n._type),h=pt(_),j=fe(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:fe(n,"name"),onChange:u=>t("name",u.target.value),placeholder:b("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:fe(n,"rate","1"),onChange:u=>t("rate",u.target.value)})]})]}),e.jsx(Is,{value:n.tags??[],onChange:u=>t("tags",u),label:b("node.tags")}),e.jsx(Is,{value:Nn(n.load_ips),onChange:u=>t("load_ips",u),label:b("node.loadIps"),placeholder:b("node.loadIpsPlaceholder")}),e.jsx(Ds,{options:s.map(u=>({id:u.id,name:u.name})),value:n.group_id??[],onChange:u=>t("group_id",u),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:c}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:fe(n,"host"),onChange:u=>t("host",u.target.value),placeholder:b("node.addressPlaceholder")})]}),h?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.listenIp")}),e.jsx("input",{className:"config-input",value:fe(n,"listen_ip"),onChange:u=>t("listen_ip",u.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(_)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const u=zs(_);d(b("node.connectionSecurityConfig"),u)}}),e.jsxs("select",{className:"config-input",value:fe(n,"tls","0"),onChange:u=>{const P=Number(u.target.value);t("tls",P);const G=zs(_);P!==0&&!n[G]&&t(G,{})},children:[e.jsx("option",{value:"0",children:b("node.none")}),e.jsx("option",{value:"1",children:b("node.useTls")}),_!=="vmess"&&e.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(_)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>d(b("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:fe(n,"server_name"),onChange:u=>t("server_name",u.target.value),placeholder:b("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:fe(n,"port"),onChange:u=>t("port",u.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:fe(n,"server_port"),onChange:u=>t("server_port",u.target.value),placeholder:"443"})]})]}),h?e.jsx(wl,{draft:n,set:t,onOpenJson:d,onOpenTransportConfig:g,onOpenSecurityConfig:()=>d(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(_)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:g}),e.jsxs("select",{className:"config-input",value:j,onChange:u=>{t("network",u.target.value);const P=_==="vmess"?"networkSettings":"network_settings";n[P]||t(P,{})},children:[_==="vmess"&&qr.map(u=>e.jsx("option",{value:u,children:u},u)),_==="trojan"&&zi.map(u=>e.jsx("option",{value:u,children:u},u)),_==="vless"&&Br.map(u=>e.jsx("option",{value:u,children:u},u))]})]}):null,_==="trojan"&&e.jsx(bl,{draft:n,set:t}),_==="shadowsocks"&&e.jsx(gl,{draft:n,set:t,onOpenJson:d}),_==="hysteria"&&e.jsx(fl,{draft:n,set:t}),_==="tuic"&&e.jsx(yl,{draft:n,set:t}),_==="vless"&&e.jsx(vl,{draft:n,set:t,onOpenJson:d}),_==="anytls"&&e.jsx(jl,{draft:n,set:t,onOpenJson:d}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:b("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:u=>t("parent_id",u.target.value?Number(u.target.value):null),children:[e.jsx("option",{value:"",children:b("node.none")}),a.filter(u=>u.id!==n.id&&!u.parent_id).map(u=>e.jsx("option",{value:u.id,children:u.name},u.id))]})]}),e.jsx(Ds,{options:l.map(u=>({id:u.id,name:u.remarks})),value:n.route_id??[],onChange:u=>t("route_id",u),label:b("node.routingGroups")})]})]})}function xl({draft:n,set:t,onCancel:s,onSave:l}){const a=String(n._type),d=String(n.network??"tcp"),c=el(a),g=n[c],b=es(g)?Tt(g):{},_=tl(a,d),h=es(_)?JSON.stringify(_,null,2):void 0;return e.jsx(Ii,{initialValue:b,placeholder:h,onCancel:s,onSave:j=>{t(c,j),l()}})}function bl({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:l=>t("allow_insecure",l?1:0)})]})}function gl({draft:n,set:t,onOpenJson:s}){const{t:l}=me(),a=Vr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:fe(n,"cipher","aes-128-gcm"),onChange:d=>t("cipher",d.target.value),children:Ti.map(d=>e.jsx("option",{value:d,children:d},d))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:l("node.obfs"),actionText:n.obfs==="http"?l("node.editConfig"):void 0,onAction:()=>s(l("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:fe(n,"obfs"),onChange:d=>t("obfs",d.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(a.host??""),onChange:d=>t("obfs_settings",{...a,host:d.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(a.path??""),onChange:d=>t("obfs_settings",{...a,path:d.target.value}),placeholder:"/"})]})]})]})}function fl({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:fe(n,"version","2"),onChange:l=>t("version",Number(l.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:fe(n,"up_mbps","0"),onChange:l=>t("up_mbps",Number(l.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:fe(n,"down_mbps","0"),onChange:l=>t("down_mbps",Number(l.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:fe(n,"obfs"),onChange:l=>t("obfs",l.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:fe(n,"obfs_password"),onChange:l=>t("obfs_password",l.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)})]})}function yl({draft:n,set:t}){const{t:s}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:fe(n,"udp_relay_mode","native"),onChange:l=>t("udp_relay_mode",l.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:fe(n,"congestion_control","bbr"),onChange:l=>t("congestion_control",l.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ut,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:l=>t("insecure",l?1:0)}),e.jsx(ut,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:l=>t("disable_sni",l?1:0)}),e.jsx(ut,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:l=>t("zero_rtt_handshake",l?1:0)})]})}function vl({draft:n,set:t,onOpenJson:s}){const{t:l}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.flow")}),e.jsxs("select",{className:"config-input",value:fe(n,"flow"),onChange:a=>t("flow",a.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.encryption"),actionText:fe(n,"encryption")?l("node.editConfig"):void 0,onAction:()=>s(l("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:fe(n,"encryption"),onChange:a=>t("encryption",a.target.value||null),children:[e.jsx("option",{value:"",children:l("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function jl({draft:n,set:t,onOpenJson:s}){const{t:l}=me();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:l("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:l("node.paddingScheme"),actionText:l("node.editConfig"),onAction:()=>s(l("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(ut,{label:l("node.allowInsecure"),checked:n.insecure===1,onChange:a=>t("insecure",a?1:0)})]})}function wl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:l,onOpenSecurityConfig:a}){const{t:d}=me(),c=fe(n,"protocol"),g=Ts(c),b={...yn,...Tt(n.warp_settings)},_=cs(b.enable),h=(u,P)=>{t("warp_settings",kn({...b,[u]:P}))},j=u=>{if(t("protocol",u),!u){t("tls",0),t("network","tcp");return}fn.includes(u)?(t("tls",1),n.tls_settings||t("tls_settings",{})):u==="shadowsocks"?t("tls",0):u==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const P=Ts(u);(P.length===0||!P.includes(fe(n,"network","tcp")))&&t("network","tcp"),u!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),u!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),u!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:c,onChange:u=>j(u.target.value),children:[e.jsx("option",{value:"",children:d("node.selectNodeProtocol")}),Gr.map(u=>e.jsx("option",{value:u,children:u},u))]})]}),c?e.jsxs(e.Fragment,{children:[jn(c)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?d("node.editConfig"):void 0,onAction:a}),e.jsxs("select",{className:"config-input",value:fe(n,"tls",fn.includes(c)?"1":"0"),onChange:u=>{const P=Number(u.target.value);t("tls",P),P!==0&&!n.tls_settings&&t("tls_settings",{})},children:[al(c)?e.jsx("option",{value:"0",children:d("node.none")}):null,e.jsx("option",{value:"1",children:d("node.useTls")}),wn(c)?e.jsx("option",{value:"2",children:d("node.reality")}):null]})]}):null,ol(c)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.transportProtocol"),required:!0,actionText:d("node.editConfig"),onAction:l}),e.jsx("select",{className:"config-input",value:g.includes(fe(n,"network","tcp"))?fe(n,"network","tcp"):"tcp",onChange:u=>{t("network",u.target.value),n.network_settings||t("network_settings",{})},children:g.map(u=>e.jsx("option",{value:u,children:u},u))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:d("node.warpOutbound")}),e.jsx(ut,{label:d("node.warpEnable"),checked:_,onChange:u=>t("warp_settings",kn({...b,enable:u}))}),_?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:u=>h("mode",u.target.value),children:[e.jsx("option",{value:"auto",children:d("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:d("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:u=>h("fail_policy",u.target.value),children:[e.jsx("option",{value:"direct",children:d("node.warpFailDirect")}),e.jsx("option",{value:"block",children:d("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:u=>h("mtu",Number(u.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:u=>h("domain_strategy",u.target.value),children:Pi.map(u=>e.jsx("option",{value:u,children:u},u))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:u=>h("private_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:u=>h("peer_public_key",u.target.value),placeholder:d("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:u=>h("endpoint",u.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:Ps(b.addresses),onChange:u=>h("addresses",u.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.warpReserved")}),e.jsx("input",{className:"config-input",value:Ps(b.reserved),onChange:u=>h("reserved",u.target.value)})]})]})]}):null,c==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.encryption"),actionText:fe(n,"encryption")?d("node.editConfig"):void 0,onAction:()=>s(d("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:fe(n,"encryption"),onChange:u=>t("encryption",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.flow")}),e.jsxs("select",{className:"config-input",value:fe(n,"flow"),onChange:u=>t("flow",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),c==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:fe(n,"cipher","aes-128-gcm"),onChange:u=>t("cipher",u.target.value),children:Ti.map(u=>e.jsx("option",{value:u,children:u},u))})]}),c==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:fe(n,"up_mbps","0"),onChange:u=>t("up_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:fe(n,"down_mbps","0"),onChange:u=>t("down_mbps",Number(u.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:fe(n,"obfs"),onChange:u=>t("obfs",u.target.value||null),children:[e.jsx("option",{value:"",children:d("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),fe(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:fe(n,"obfs_password"),onChange:u=>t("obfs_password",u.target.value),placeholder:d("node.autoGenHelp")})]}):null]})]}),c==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:fe(n,"udp_relay_mode","native"),onChange:u=>t("udp_relay_mode",u.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(oe,{label:d("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:fe(n,"congestion_control","bbr"),onChange:u=>t("congestion_control",u.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ut,{label:d("node.disableSni"),checked:n.disable_sni===1,onChange:u=>t("disable_sni",u?1:0)}),e.jsx(ut,{label:d("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:u=>t("zero_rtt_handshake",u?1:0)})]}),c==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(oe,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>s(d("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Fs={vmess:ka,vless:Ma,trojan:Kn,shadowsocks:ss,hysteria:va,tuic:na,anytls:nn,v2node:xn,zicnode:xn},Nl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},kl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function kt(n){return Nl[n]??kl}function _l({draft:n,config:t,onCopy:s,t:l}){const a=Number(n.id??0),d=a>0?ul(a,t):"",c=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:l("node.quickInstallTitle")}),e.jsx("span",{children:l("node.quickInstallHelp")})]}),a>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:d}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(d),children:[e.jsx(Vt,{size:15}),l("node.copyInstallCommand")]}),c?e.jsx("span",{className:"node-install-warning",children:l("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:l("node.installSaveFirst")})]})}function Sl(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState([]),[b,_]=o.useState(null),[h,j]=o.useState(null),[u,P]=o.useState(!0),[G,I]=o.useState(!1),[S,L]=o.useState(""),[T,N]=o.useState(""),[U,A]=o.useState(1),[O,f]=o.useState(()=>Zr()),[$,D]=o.useState(!1),[Z,r]=o.useState({}),[w,H]=o.useState({apiHost:ls,apiKey:""}),[C,B]=o.useState(!1),[v,R]=o.useState(""),[m,Q]=o.useState(null),[q,V]=o.useState(null),[X,ie]=o.useState(null),[we,Fe]=o.useState(null),[Ae,Me]=o.useState(null),[_e,Ne]=o.useState(null),[be,Se]=o.useState(null),ve=(x,E)=>{x.dataTransfer.effectAllowed="move",Ne(E)},Ke=(x,E)=>{if(x.preventDefault(),_e===null||_e===E)return;const i=[...s],k=i[_e];i.splice(_e,1),i.splice(E,0,k),Ne(E),l(i)},y=()=>{Ne(null)},se=(x,E)=>{$&&Se(E)},W=x=>{if(!$||be===null)return;x.cancelable&&x.preventDefault();const E=x.touches[0],i=document.elementFromPoint(E.clientX,E.clientY);if(!i)return;const k=i.closest(".mobile-node-card");if(!k)return;const M=k.getAttribute("data-index");if(M===null)return;const F=Number(M);if(F!==be&&F>=0&&F<s.length){const ce=[...s],ye=ce[be];ce.splice(be,1),ce.splice(F,0,ye),Se(F),l(ce)}},xe=()=>{Se(null)},Ce=o.useCallback(x=>{const E=Ae===x;Me(E?null:x),Fe(i=>E&&i===x?null:i),E||(ie(null),V(null))},[Ae]),he=o.useCallback(x=>{const E=X===x;ie(E?null:x),V(i=>E&&i===x?null:i),E||(Me(null),Fe(null))},[X]);o.useEffect(()=>{const x=E=>{const i=E.target;if(!i)return;const k=i instanceof Element?i:i.parentElement;k!=null&&k.closest(".load-ip-status-wrap, .load-ip-online-wrap")||(Me(null),ie(null))};return document.addEventListener("mousedown",x),document.addEventListener("touchstart",x),()=>{document.removeEventListener("mousedown",x),document.removeEventListener("touchstart",x)}},[]),o.useEffect(()=>{A(1)},[v,O]),o.useEffect(()=>{try{window.localStorage.setItem($i,String(O))}catch{}},[O]);const Ie=s.filter(x=>{const E=v.toLowerCase().trim();return E?x.name.toLowerCase().includes(E)||x.host.toLowerCase().includes(E)||Nn(x.load_ips).some(i=>i.toLowerCase().includes(E))||String(x.id).includes(E)||x.type.toLowerCase().includes(E):!0}),qe=Math.ceil(Ie.length/O),ae=Ie.slice((U-1)*O,U*O);function mt(x,E){return E<=7?Array.from({length:E},(i,k)=>k+1):x<=4?[1,2,3,4,5,"...",E]:x>=E-3?[1,"...",E-4,E-3,E-2,E-1,E]:[1,"...",x-1,x,x+1,"...",E]}const pe=mt(U,qe),st=async()=>{var x,E;I(!0),L(""),N("");try{const i={};s.forEach((k,M)=>{i[k.type]||(i[k.type]={}),i[k.type][String(k.id)]=M+1}),await cr(i),(x=window.showToast)==null||x.call(window,t("node.saveSortSuccess"),"success"),D(!1),await ht()}catch(i){L(i instanceof Error?i.message:t("node.saveSortFailed")),(E=window.showToast)==null||E.call(window,i instanceof Error?i.message:t("node.saveSortFailed"),"error")}finally{I(!1)}},it=async()=>{D(!1),await et()},at=()=>Ie.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:U===1,onClick:()=>A(x=>Math.max(x-1,1)),children:"<"}),pe.map((x,E)=>x==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${E}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${U===x?"active":""}`,onClick:()=>A(Number(x)),children:x},`page-${x}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:U===qe||qe===0,onClick:()=>A(x=>Math.min(x+1,qe)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:O,onChange:x=>{const E=Number(x.target.value);Ei(E)&&f(E)},children:vn.map(x=>e.jsxs("option",{value:x,children:[x," / ",t("common.perPage")]},x))})})]}),[z,le]=o.useState(null),[re,te]=o.useState(!1),[ge,ue]=o.useState(""),[ze,Te]=o.useState(!1),[Qe,Ve]=o.useState(!1);async function Be(x){var i,k;x.preventDefault();const E=ge.trim();if(!(!E||!b)){Te(!0),L(""),N("");try{await as({name:E});const M=await Ut();d(M);const F=M.filter(ce=>ce.name===E).sort((ce,ye)=>ye.id-ce.id)[0];if(F){const ce=b.group_id??[];ce.includes(F.id)||Pe("group_id",[...ce,F.id])}ue(""),te(!1),(i=window.showToast)==null||i.call(window,t("node.groupCreateSuccess"),"success")}catch(M){L(M instanceof Error?M.message:t("node.groupCreateFailed")),(k=window.showToast)==null||k.call(window,M instanceof Error?M.message:t("node.groupCreateFailed"),"error")}finally{Te(!1)}}}const $t=(x,E)=>{if(!b)return;let i=b[E];if(typeof i=="string"&&i.trim())try{i=JSON.parse(i)}catch{}["tlsSettings","tls_settings"].includes(E)&&pt(String(b._type))&&(i=bt(i,Number(b.tls??0))),le({title:x,key:E,value:i&&typeof i=="object"?i:{}})},et=o.useCallback(async()=>{var x,E,i,k,M;P(!0),L("");try{const[F,ce,ye,$e]=await Promise.all([js(),Ut(),vi(),gi()]);l(F.data),d(ce),g(ye);const je=$s((x=$e.site)==null?void 0:x.app_url);H({apiHost:$s((E=$e.server)==null?void 0:E.server_api_url,je),apiKey:De((i=$e.server)==null?void 0:i.server_token)}),B(cs(((k=$e.subscribe)==null?void 0:k.device_hwid_available)??((M=$e.subscribe)==null?void 0:M.device_hwid_enable)))}catch(F){L(F instanceof Error?F.message:t("knowledge.loadFailed"))}finally{P(!1)}},[]),ht=o.useCallback(async()=>{try{const x=await js();l(x.data)}catch(x){console.error("Refresh nodes failed",x)}},[]);async function qt(x){var i;const E=await zt(x);(i=window.showToast)==null||i.call(window,t(E?"node.installCopied":"common.copyFailed"),E?"success":"error")}o.useEffect(()=>{if(!He()){n.replace("/login");return}et()},[et,n]);function Dt(x){_(Ls(x)),j(null),L(""),N("")}function Et(x){_(Ls(x.type,x)),L(""),N("")}function Ft(x){!C||Number(x.online??0)<=0||n.push(`/device?node_type=${encodeURIComponent(x.type)}&node_id=${encodeURIComponent(String(x.id))}`)}function At(x){return x.reported?x.online>0?2:1:0}function wt(x,E){const i=Ot(x);if(!i.length)return null;const k=`${Nt(x)}-load-ip-status`,M=Ae===k||we===k;return e.jsxs("span",{className:`load-ip-status-wrap ${E}${M?" active":""}`,onMouseEnter:E==="desktop"?()=>Fe(k):void 0,onMouseLeave:E==="desktop"?()=>Fe(F=>F===k?null:F):void 0,children:[e.jsx("button",{className:"load-ip-status-button",type:"button","aria-expanded":M,"aria-label":t("node.loadIpStatusTitle"),onClick:()=>Ce(k),children:e.jsx(xn,{size:14})}),M?e.jsxs("div",{className:"load-ip-status-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpStatusTitle")}),e.jsxs("strong",{children:[i.length," IP"]})]}),e.jsx("div",{className:"load-ip-status-list",children:i.map(F=>{const ce=At(F);return e.jsxs("div",{className:"load-ip-status-row",children:[e.jsx("span",{className:`status-indicator-dot status-${ce}`}),e.jsx("span",{className:"mono",children:F.ip}),e.jsx("span",{className:`load-ip-online-count${F.reported?"":" is-muted"}`,children:F.reported?F.online:t("node.loadIpOnlineNoReport")})]},F.ip)})})]}):null]})}function Nt(x){return`${x.type}-${x.id}`}function Ot(x){const E=Nn(x.load_ips),i=Array.isArray(x.load_ip_online)?x.load_ip_online:[],k=new Map;return i.forEach(M=>{if(!M||typeof M!="object")return;const F=M,ce=String(F.ip??"").trim();if(!ce)return;const ye=F.last_push_at;k.set(ce,{online:Math.max(0,Number(F.online??0)),lastPushAt:ye==null||ye===""?null:Number(ye)})}),E.map(M=>{const F=k.get(M);return{ip:M,online:Math.max(0,Number((F==null?void 0:F.online)??0)),lastPushAt:(F==null?void 0:F.lastPushAt)??null,reported:(F==null?void 0:F.lastPushAt)!==null&&(F==null?void 0:F.lastPushAt)!==void 0}})}function p(x,E){return E.some(i=>i.reported)?E.reduce((i,k)=>i+k.online,0):Number(x.online??0)}function K(x,E){return e.jsxs("div",{className:"load-ip-online-popover",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpOnlineByIp")}),e.jsxs("strong",{children:[t("node.loadIpOnlineTotal"),": ",E]})]}),e.jsx("div",{className:"load-ip-online-list",children:x.map(i=>e.jsxs("div",{className:"load-ip-online-row",children:[e.jsx("span",{className:"mono",children:i.ip}),e.jsx("span",{className:`load-ip-online-count${i.reported?"":" is-muted"}`,children:i.reported?i.online:t("node.loadIpOnlineNoReport")})]},i.ip))})]})}function ne(x,E){const i=Ot(x),k=i.length>0,M=k?p(x,i):Number(x.online??0),F=!k&&C&&M>0,ye=`${E==="mobile"?"mobile-badge-pill":"online-badge"}${F||k?" online-badge-link":""}${k?" load-ip-online-trigger":""}`,$e=E==="mobile"?12:13,je={...E==="mobile"?{marginRight:4}:{},color:M>0?"#10b981":"var(--muted)",opacity:M>0?1:.6},nt=k?xn:hi,Gt=e.jsxs(e.Fragment,{children:[e.jsx(nt,{size:$e,style:je}),M]});if(k){const Wt=Nt(x),Cn=X===Wt||q===Wt;return e.jsxs("span",{className:`load-ip-online-wrap${Cn?" active":""}`,onMouseEnter:E==="desktop"?()=>V(Wt):void 0,onMouseLeave:E==="desktop"?()=>V(ps=>ps===Wt?null:ps):void 0,children:[e.jsx("button",{className:ye,type:"button","aria-expanded":Cn,onClick:()=>he(Wt),children:Gt}),Cn?K(i,M):null]})}return F?e.jsx("button",{className:ye,type:"button",onClick:()=>Ft(x),children:Gt}):e.jsx("span",{className:ye,children:Gt})}async function de(x){var F,ce,ye,$e;if(x.preventDefault(),!b)return;I(!0),L(""),N("");const E=String(b._type),i={...b};if(pt(E)&&!De(i.protocol)){L(t("node.protocolRequired")),(F=window.showToast)==null||F.call(window,t("node.protocolRequired"),"error"),I(!1);return}if(i.load_ips=Li(i.load_ips),i.load_ips.length>100){L(t("node.loadIpsLimit")),(ce=window.showToast)==null||ce.call(window,t("node.loadIpsLimit"),"error"),I(!1);return}for(const je of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete i[je];if(i.padding_scheme!==void 0&&i.padding_scheme!==null&&typeof i.padding_scheme!="string"&&(i.padding_scheme=JSON.stringify(i.padding_scheme)),i.padding_scheme)try{const je=JSON.parse(String(i.padding_scheme));if(typeof je!="object"||je===null)throw new Error("Invalid JSON array or object")}catch(je){L("Invalid Padding Scheme configuration: "+(je instanceof Error?je.message:"JSON error")),I(!1);return}const k=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const je of k)(i[je]===""||i[je]===null||i[je]===void 0)&&delete i[je];if(pt(E)){const je=String(i.protocol??""),nt=Number(i.tls??0);i.warp_settings=kn(i.warp_settings),jn(je)?fn.includes(je)&&nt!==2||!wn(je)&&nt===2?(i.tls=1,i.tls_settings=bt(i.tls_settings,1)):i.tls_settings=bt(i.tls_settings,nt):(i.tls=0,i.tls_settings={})}const M=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const je of M){const nt=i[je];(nt==null||typeof nt=="object"&&Object.keys(nt).length===0)&&delete i[je]}i.port!==void 0&&(i.port=String(i.port).trim()),i.server_port!==void 0&&(i.server_port=Number(i.server_port)),i.tls!==void 0&&(i.tls=Number(i.tls)),i.rate!==void 0&&(i.rate=Number(i.rate));try{await ar(E,i),_(null),(ye=window.showToast)==null||ye.call(window,t("node.saveSuccess"),"success"),await ht()}catch(je){L(je instanceof Error?je.message:t("node.saveFailed")),($e=window.showToast)==null||$e.call(window,je instanceof Error?je.message:t("node.saveFailed"),"error")}finally{I(!1)}}async function Le(x){const E=[...s];l(i=>i.map(k=>k.id===x.id&&k.type===x.type?{...k,show:x.show?0:1}:k));try{await rr(x.type,x.id,x.show?0:1),await ht()}catch(i){l(E),L(i instanceof Error?i.message:t("node.updateFailed"))}}async function dt(x){var E,i;try{await lr(x.type,x.id),(E=window.showToast)==null||E.call(window,t("node.copySuccess"),"success"),await ht()}catch(k){L(k instanceof Error?k.message:t("node.copyFailed")),(i=window.showToast)==null||i.call(window,k instanceof Error?k.message:t("node.copyFailed"),"error")}}async function gt(x){var E;(E=window.showConfirm)==null||E.call(window,{message:t("node.deleteConfirm",{name:x.name}),onConfirm:async()=>{var k,M;const i=[...s];l(F=>F.filter(ce=>!(ce.id===x.id&&ce.type===x.type))),L("");try{await or(x.type,x.id),(k=window.showToast)==null||k.call(window,t("node.deleteSuccess"),"success"),await ht()}catch(F){l(i),L(F instanceof Error?F.message:t("node.deleteFailed")),(M=window.showToast)==null||M.call(window,F instanceof Error?F.message:t("node.deleteFailed"),"error")}}})}const Pe=(x,E)=>_(i=>{if(!i)return null;const k={...i,[x]:E};if(!pt(String(k._type)))return k;if(x==="tls_settings"&&(k.tls_settings=bt(E,Number(k.tls??0))),x==="tls"&&(k.tls_settings=bt(k.tls_settings,Number(E))),x==="warp_settings"&&(k.warp_settings=kn(E)),x==="protocol"){const M=String(E);jn(M)?!wn(M)&&Number(k.tls??0)===2?(k.tls=1,k.tls_settings=bt(k.tls_settings,1)):k.tls_settings=bt(k.tls_settings,Number(k.tls??0)):(k.tls=0,k.tls_settings={})}return k}),Bt=b?String(b._type):"",Mt=rl(Bt);return e.jsxs(We,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(h?null:"show"),children:e.jsx(rt,{size:18})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Vn.map(x=>{const E=kt(x.value),i=Fs[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Dt(x.value),j(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:E==null?void 0:E.bg,backgroundColor:E==null?void 0:E.rowBg},children:e.jsx(i,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(E==null?void 0:E.bg)??"var(--surface-soft)",color:(E==null?void 0:E.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:v,onChange:x=>R(x.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${$?"success-btn":""}`,type:"button",onClick:$?st:()=>D(!0),disabled:G,children:t($?G?"node.saving":"node.saveOrder":"node.editSortOrder")}),$&&e.jsx("button",{className:"ghost-button",type:"button",onClick:it,children:t("common.cancel")})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t($?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[ae.map(x=>{const E=s.findIndex(i=>i.id===x.id&&i.type===x.type);return e.jsxs("tr",{draggable:$,onDragStart:i=>ve(i,E),onDragOver:i=>Ke(i,E),onDragEnd:y,className:_e===E?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:kt(x.type).bg,color:kt(x.type).text,border:`1px solid ${kt(x.type).border}`},children:x.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:()=>void Le(x),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"node-name-cell",children:e.jsxs("div",{className:"node-name-line",children:[wt(x,"desktop")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("strong",{children:x.name})]})})}),e.jsx("td",{className:"mobile-hide",children:e.jsxs("span",{className:"mono",children:[x.host,":",x.port||x.server_port]})}),e.jsx("td",{children:ne(x,"desktop")}),e.jsxs("td",{className:"mobile-hide",children:[x.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const i=x.group_id??[],k=Z[`${x.type}-${x.id}`],M=i.map(ye=>{const $e=a.find(je=>Number(je.id)===Number(ye));return e.jsx("span",{className:"tag",children:($e==null?void 0:$e.name)??`#${ye}`},ye)});if(i.length<=3||k)return e.jsxs(e.Fragment,{children:[M,i.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>r(ye=>({...ye,[`${x.type}-${x.id}`]:!1})),children:t("node.collapse")})]});const F=M.slice(0,3),ce=i.length-3;return e.jsxs(e.Fragment,{children:[F,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>r(ye=>({...ye,[`${x.type}-${x.id}`]:!0})),children:["+",ce,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:i.length})}),M]})]})]})})()})}),e.jsx("td",{children:$?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>Q((m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>Q(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(x),Q(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dt(x),Q(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{gt(x),Q(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})})]},`${x.type}-${x.id}`)}),!u&&Ie.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),at()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(h?null:"show"),children:e.jsx(rt,{size:20})}),h!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Vn.map(x=>{const E=kt(x.value),i=Fs[x.value]||bn;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Dt(x.value),j(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:E==null?void 0:E.bg,backgroundColor:E==null?void 0:E.rowBg},children:e.jsx(i,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(E==null?void 0:E.bg)??"var(--surface-soft)",color:(E==null?void 0:E.text)??"#ffffff"},children:x.label})]},x.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:v,onChange:x=>R(x.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${$?"active":""}`,type:"button",onClick:()=>D(!$),children:e.jsx(Qt,{size:20})})]}),$&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:it,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void st(),disabled:G,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(G?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[ae.map(x=>{const E=s.findIndex(i=>i.id===x.id&&i.type===x.type);return e.jsxs("div",{className:`mobile-node-card ${_e===E||be===E?"dragging":""}`,draggable:$,onDragStart:i=>ve(i,E),onDragOver:i=>Ke(i,E),onDragEnd:y,onTouchStart:i=>se(i,E),onTouchMove:W,onTouchEnd:xe,"data-index":E,style:$?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsx("div",{className:"card-header-left",children:e.jsxs("div",{className:"mobile-node-name-line",children:[wt(x,"mobile")??e.jsx("span",{className:`status-indicator-dot status-${x.available_status??0}`}),e.jsx("span",{className:"mobile-node-name",children:x.name})]})}),e.jsx("div",{className:"card-header-right",children:$?e.jsx("div",{className:"drag-handle",children:e.jsx(Qt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`admin-switch ${x.show===1?"active":""}`,onClick:()=>void Le(x),children:e.jsx("span",{className:"admin-switch-thumb"})}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>Q((m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type?null:{id:x.id,type:x.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(m==null?void 0:m.id)===x.id&&(m==null?void 0:m.type)===x.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>Q(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(x),Q(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dt(x),Q(null)},children:[e.jsx(Vt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{gt(x),Q(null)},children:[e.jsx(Ze,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsx("div",{className:"card-middle-row",children:e.jsxs("span",{className:"mobile-node-address",children:[x.host,":",x.port||x.server_port]})}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:kt(x.type).bg,color:kt(x.type).text,border:`1px solid ${kt(x.type).border}`},children:x.id}),ne(x,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[x.rate," x"]})]})]},`${x.type}-${x.id}`)}),!u&&Ie.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),at()]}),b!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:b.id?t("node.editNodeTitle",{type:Mt}):t("node.createNodeTitle",{type:Mt})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:Mt})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:de,children:[e.jsx(hl,{draft:b,set:Pe,groups:a,routes:c,nodes:s,onOpenJson:$t,onAddGroup:()=>te(!0),onOpenTransportConfig:()=>Ve(!0)}),pt(Bt)?e.jsx(_l,{draft:b,config:w,onCopy:x=>void qt(x),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"node.saving":"common.save")]})]})]})]})}),z!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:z.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(z.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>le(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(z.key)?e.jsx(ml,{initialValue:z.value,isSnakeCase:z.key==="tls_settings",tlsMode:il(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>le(null),onSave:x=>{Pe(z.key,x),le(null)}}):e.jsx(Ii,{initialValue:z.value,onCancel:()=>le(null),onSave:x=>{Pe(z.key,x),le(null)}})})]})}),re&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:Be,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:ge,onChange:x=>ue(x.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(!1),disabled:ze,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ze||!ge.trim(),children:t(ze?"node.saving":"common.confirm")})]})]})]})}),Qe&&b!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ve(!1),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(xl,{draft:b,set:Pe,onCancel:()=>Ve(!1),onSave:()=>Ve(!1)})})]})})]})}function Cl(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[b,_]=o.useState(!1),[h,j]=o.useState(""),u=o.useCallback(async()=>{g(!0),j("");try{l(await Ut())}catch(S){j(S instanceof Error?S.message:t("serverGroup.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function P(S){d({id:S==null?void 0:S.id,name:(S==null?void 0:S.name)??""}),j("")}async function G(S){var L;if(S.preventDefault(),!!a){_(!0),j("");try{await as(a),d(null),(L=window.showToast)==null||L.call(window,t("serverGroup.saveSuccess"),"success"),await u()}catch(T){j(T instanceof Error?T.message:t("serverGroup.saveFailed"))}finally{_(!1)}}}async function I(S){var L;(L=window.showConfirm)==null||L.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var T,N;j("");try{await lo(S),(T=window.showToast)==null||T.call(window,t("serverGroup.deleteSuccess"),"success"),await u()}catch(U){j(U instanceof Error?U.message:t("serverGroup.deleteFailed")),(N=window.showToast)==null||N.call(window,U instanceof Error?U.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>P(),children:[e.jsx(rt,{size:16}),t("serverGroup.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,c&&s.length===0?e.jsx(Ee,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(S=>e.jsxs("tr",{children:[e.jsx("td",{children:S.id}),e.jsx("td",{children:e.jsx("strong",{children:S.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),S.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(bn,{size:14}),S.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>P(S),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(S.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},S.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:a.name,onChange:S=>d({...a,name:S.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(lt,{size:16}),t(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function zl(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function Tl(n){var t;return((t=yi.find(s=>s.value===n))==null?void 0:t.label)??n}function Pl(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[b,_]=o.useState(!1),[h,j]=o.useState(""),u=o.useCallback(async()=>{g(!0),j("");try{l(await vi())}catch(S){j(S instanceof Error?S.message:t("serverRoute.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}u()},[u,n]);function P(S){d(zl(S)),j("")}async function G(S){var T;if(S.preventDefault(),!a)return;_(!0),j("");const L=a.action==="default_out"?[]:a.match.split(`
`).map(N=>N.trim()).filter(Boolean);try{await co({id:a.id,remarks:a.remarks,match:L,action:a.action,action_value:a.action_value||null}),d(null),(T=window.showToast)==null||T.call(window,t("serverRoute.saveSuccess"),"success"),await u()}catch(N){j(N instanceof Error?N.message:t("serverRoute.saveFailed"))}finally{_(!1)}}async function I(S){var L;(L=window.showConfirm)==null||L.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var T,N;j("");try{await po(S),(T=window.showToast)==null||T.call(window,t("serverRoute.deleteSuccess"),"success"),await u()}catch(U){j(U instanceof Error?U.message:t("serverRoute.deleteFailed")),(N=window.showToast)==null||N.call(window,U instanceof Error?U.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:u,disabled:c,children:[e.jsx(Re,{size:16}),t(c?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>P(),children:[e.jsx(rt,{size:16}),t("serverRoute.add")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,c&&s.length===0?e.jsx(Ee,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(S=>e.jsxs("tr",{children:[e.jsx("td",{children:S.id}),e.jsx("td",{children:e.jsx("strong",{children:S.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(S.match)?S.match:[]).slice(0,3).map((L,T)=>e.jsx("span",{className:"tag",children:L},T)),Array.isArray(S.match)&&S.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",S.match.length-3]}):null,!Array.isArray(S.match)||S.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:Tl(S.action)})}),e.jsx("td",{children:S.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>P(S),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void I(S.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},S.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:G,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:a.remarks,onChange:S=>d({...a,remarks:S.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:a.action,onChange:S=>d({...a,action:S.target.value}),children:yi.map(S=>e.jsx("option",{value:S.value,children:S.label},S.value))})]}),a.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:a.match,onChange:S=>d({...a,match:S.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:a.action_value,onChange:S=>d({...a,action_value:S.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(lt,{size:16}),t(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function $l(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function El(n){const t=l=>l===""?null:Math.round(Number(l)*100),s=l=>l===""?null:Number(l);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function tt(n){return n==null?"—":Je(n)}function Ml(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function Ll(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[b,_]=o.useState(!0),[h,j]=o.useState(!1),[u,P]=o.useState(""),[G,I]=o.useState(""),[S,L]=o.useState(!1),[T,N]=o.useState(""),[U,A]=o.useState(!1),[O,f]=o.useState(null),[$,D]=o.useState(null),Z=o.useRef(!1),r=o.useRef(null),w=o.useRef(!1),H=y=>y instanceof Element&&!!y.closest(".drag-handle"),C=(y,se)=>{if(y===se||y<0||se<0||y>=s.length||se>=s.length)return!1;const W=[...s],xe=W[y];return W.splice(y,1),W.splice(se,0,xe),l(W),r.current=W.map(Ce=>Ce.id),Z.current=!0,!0},B=async()=>{const y=Z.current,se=r.current??s.map(W=>W.id);if(Z.current=!1,r.current=null,w.current=!1,f(null),D(null),!!y)try{await ho(se),await X()}catch(W){P(W instanceof Error?W.message:t("plan.sortFailed")),await X()}},v=(y,se)=>{var W;if(!H(y.target)){y.preventDefault();return}y.dataTransfer.effectAllowed="move",y.dataTransfer.setData("text/plain",String(((W=s[se])==null?void 0:W.id)??se)),Z.current=!1,f(se)},R=(y,se)=>{O===null||O===se||(y.preventDefault(),C(O,se)&&f(se))},m=async()=>{await B()},Q=(y,se)=>{!H(y.target)||y.touches.length!==1||(Z.current=!1,w.current=!0,D(se))},q=y=>{if(!w.current||$===null)return;y.cancelable&&y.preventDefault();const se=y.touches[0],W=document.elementFromPoint(se.clientX,se.clientY);if(!W)return;const xe=W.closest("tr, [data-index]");if(!xe)return;const Ce=xe.getAttribute("data-index");if(Ce===null)return;const he=Number(Ce);C($,he)&&D(he)},V=async()=>{!w.current&&$===null||await B()},X=o.useCallback(async()=>{_(!0),P("");try{const[y,se]=await Promise.all([Pt(),Ut()]);l(y),d(se)}catch(y){P(y instanceof Error?y.message:t("plan.loadFailed"))}finally{_(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}X()},[X,n]);function ie(){g(null),L(!1),N("")}function we(y){g($l(y)),L(!1),N(""),P(""),I("")}async function Fe(y){var se,W;if(y.preventDefault(),!!c){j(!0),P(""),I("");try{await uo(El(c)),ie(),(se=window.showToast)==null||se.call(window,t("plan.saveSuccess"),"success"),await X()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.saveFailed"),"error")}finally{j(!1)}}}async function Ae(y,se){var W;try{await zn(y,{show:se?0:1}),await X()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function Me(y,se){var W;try{await zn(y,{renew:se?0:1}),await X()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function _e(y,se){var W;try{await zn(y,{allow_subscribe_url:se?0:1}),await X()}catch(xe){(W=window.showToast)==null||W.call(window,xe instanceof Error?xe.message:t("plan.toggleFailed"),"error")}}async function Ne(y){var se;(se=window.showConfirm)==null||se.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var W,xe;P(""),I("");try{await mo(y),(W=window.showToast)==null||W.call(window,t("plan.deleteSuccess"),"success"),await X()}catch(Ce){(xe=window.showToast)==null||xe.call(window,Ce instanceof Error?Ce.message:t("plan.deleteFailed"),"error")}}})}function be(y){var se;return((se=a.find(W=>W.id===y))==null?void 0:se.name)??`#${y}`}function Se(y){return Number(y.allow_subscribe_url??1)===1}function ve(y,se){g(W=>W&&{...W,[y]:se})}async function Ke(y){var W,xe;y.preventDefault();const se=T.trim();if(!(!se||!c)){A(!0),P(""),I("");try{await as({name:se});const Ce=await Ut();d(Ce);const he=Ce.filter(Ie=>Ie.name===se).sort((Ie,qe)=>qe.id-Ie.id)[0];he&&ve("group_id",String(he.id)),N(""),L(!1),(W=window.showToast)==null||W.call(window,t("node.groupCreateSuccess"),"success")}catch(Ce){const he=Ce instanceof Error?Ce.message:t("node.groupCreateFailed");P(he),(xe=window.showToast)==null||xe.call(window,he,"error")}finally{A(!1)}}}return e.jsxs(We,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:X,disabled:b,children:[e.jsx(Re,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>we(),children:[e.jsx(rt,{size:16}),t("plan.add")]})]})]}),u?e.jsx("div",{className:"form-error",children:u}):null,G?e.jsx("div",{className:"form-success",children:G}):null,b&&s.length===0?e.jsx(Ee,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((y,se)=>e.jsxs("tr",{onDragOver:W=>R(W,se),"data-index":se,className:O===se||$===se?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>v(W,se),onDragEnd:m,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:y.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${y.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ae(y.id,y.show)},title:y.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${y.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Me(y.id,y.renew)},title:y.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Se(y)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),_e(y.id,Se(y)?1:0)},title:Se(y)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:y.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(gn,{size:14}),y.count??0]})}),e.jsx("td",{children:be(y.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[y.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:tt(y.month_price)})]}),y.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:tt(y.quarter_price)})]}),y.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:tt(y.half_year_price)})]}),y.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:tt(y.year_price)})]}),y.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:tt(y.two_year_price)})]}),y.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:tt(y.three_year_price)})]}),y.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:tt(y.onetime_price)})]}),y.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:tt(y.reset_price)})]})]})}),e.jsxs("td",{children:[y.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:W=>{W.stopPropagation(),we(y)},children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:W=>{W.stopPropagation(),Ne(y.id)},children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},y.id)),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((y,se)=>e.jsxs("div",{className:`mobile-node-card ${O===se||$===se?"dragging":""}`,onDragOver:W=>R(W,se),"data-index":se,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:W=>v(W,se),onDragEnd:m,onTouchStart:W=>Q(W,se),onTouchMove:q,onTouchEnd:V,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Qt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:y.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:y.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),we(y)},children:[e.jsx(Ge,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:W=>{W.stopPropagation(),Ne(y.id)},children:[e.jsx(Ze,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${y.show?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Ae(y.id,y.show)},title:y.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${y.renew?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),Me(y.id,y.renew)},title:y.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Se(y)?"active":""}`,type:"button",onClick:W=>{W.stopPropagation(),_e(y.id,Se(y)?1:0)},title:Se(y)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(gn,{size:12,style:{marginRight:4}}),y.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:be(y.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[y.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[y.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:tt(y.month_price)})]}),y.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:tt(y.quarter_price)})]}),y.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:tt(y.half_year_price)})]}),y.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:tt(y.year_price)})]}),y.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:tt(y.two_year_price)})]}),y.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:tt(y.three_year_price)})]}),y.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:tt(y.onetime_price)})]}),y.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:tt(y.reset_price)})]})]})]},y.id)),!b&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:ie,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Fe,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:c.name,onChange:y=>ve("name",y.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:c.content,onChange:y=>ve("content",y.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>L(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:c.group_id,onChange:y=>ve("group_id",y.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),a.map(y=>e.jsx("option",{value:y.id,children:y.name},y.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:c.transfer_enable,onChange:y=>ve("transfer_enable",y.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.device_limit,onChange:y=>ve("device_limit",y.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.speed_limit,onChange:y=>ve("speed_limit",y.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:c.capacity_limit,onChange:y=>ve("capacity_limit",y.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:c.reset_traffic_method,onChange:y=>ve("reset_traffic_method",y.target.value),children:Ml(t).map(y=>e.jsx("option",{value:y.value,children:y.label},y.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:c.allow_subscribe_url==="1",onChange:y=>ve("allow_subscribe_url",y.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.month_price,onChange:y=>ve("month_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.quarter_price,onChange:y=>ve("quarter_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.half_year_price,onChange:y=>ve("half_year_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.year_price,onChange:y=>ve("year_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.two_year_price,onChange:y=>ve("two_year_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.three_year_price,onChange:y=>ve("three_year_price",y.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.onetime_price,onChange:y=>ve("onetime_price",y.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:c.reset_price,onChange:y=>ve("reset_price",y.target.value),placeholder:"—"})]})]}),c.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:c.force_update,onChange:y=>ve("force_update",String(y.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:ie,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"plan.saving":"common.save")]})]})]})]})}):null,S&&c?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>L(!1),disabled:U,children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{onSubmit:Ke,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:T,onChange:y=>N(y.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>L(!1),disabled:U,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:U||!T.trim(),children:t(U?"node.saving":"common.confirm")})]})]})]})}):null]})}const Ln="模糊",As={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Os={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Rs(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0");return`${s}/${l}/${a} ${d}:${c}`}function Hs(n){const t=new Date(n*1e3),s=t.getFullYear(),l=String(t.getMonth()+1).padStart(2,"0"),a=String(t.getDate()).padStart(2,"0"),d=String(t.getHours()).padStart(2,"0"),c=String(t.getMinutes()).padStart(2,"0"),g=String(t.getSeconds()).padStart(2,"0");return`${s}-${l}-${a} ${d}:${c}:${g}`}function Us(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function ct(n){return`${Je(Number(n??0))} ₫`}const Di="adminzic_user_cache";function Il(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(Di);return n?JSON.parse(n):{}}catch{return{}}}function Dl(n){if(!(typeof window>"u"))try{sessionStorage.setItem(Di,JSON.stringify(n))}catch{}}const Rt=(n,t)=>`${n}:${t}`;function Fl(){var mt,pe,st,it,at;const n=Ue(),t=tn(),{t:s}=me(),l=o.useCallback(z=>{switch(z){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${z}`,cls:""}}},[s]),a=o.useCallback(z=>{const le=`order.period.${z}`,re=s(le);return re===le?Os[z]??z:re},[s]),[d,c]=o.useState([]),[g,b]=o.useState([]),[_,h]=o.useState({}),[j,u]=o.useState(0),[P,G]=o.useState(1),[I]=o.useState(15),[S,L]=o.useState(""),[T,N]=o.useState("trade_no"),[U,A]=o.useState(!0),[O,f]=o.useState(null),[$,D]=o.useState(!1),[Z,r]=o.useState(""),[w,H]=o.useState(""),[C,B]=o.useState(null),[v,R]=o.useState(null),[m,Q]=o.useState(!1),[q,V]=o.useState(null),[X,ie]=o.useState(!1),[we,Fe]=o.useState(()=>Il()),Ae=o.useCallback((z,le)=>{const re=Rt(le,z);R(null),B(te=>te===re?null:re)},[]),Me=o.useCallback((z,le)=>{const re=Rt(le,z);B(null),R(te=>te===re?null:re)},[]),_e=o.useCallback(z=>{const le=Number(z.coupon_id??0);return le?_[le]??`#${le}`:null},[_]);o.useEffect(()=>{if(!C&&!v)return;const z=()=>{B(null),R(null)},le=te=>{const ge=te.target;ge!=null&&ge.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||z()},re=te=>{te.key==="Escape"&&z()};return document.addEventListener("pointerdown",le),document.addEventListener("keydown",re),()=>{document.removeEventListener("pointerdown",le),document.removeEventListener("keydown",re)}},[C,v]),o.useEffect(()=>{const z=new Set;if(d.forEach(re=>{re.user_id&&!we[re.user_id]&&z.add(re.user_id),re.invite_user_id&&!we[re.invite_user_id]&&z.add(re.invite_user_id)}),q&&(q.user_id&&!we[q.user_id]&&z.add(q.user_id),q.invite_user_id&&!we[q.invite_user_id]&&z.add(q.invite_user_id)),z.size===0)return;const le=Array.from(z);Promise.allSettled(le.map(async re=>{try{const te=await Xn(re);if(te&&te.data)return{id:re,email:te.data.email,invite_user:te.data.invite_user}}catch(te){console.error(`Failed to fetch user ${re}:`,te)}return null})).then(re=>{const te={};re.forEach(ge=>{var ue;if(ge.status==="fulfilled"&&ge.value){const ze=ge.value;te[ze.id]={email:ze.email,invite_user_email:((ue=ze.invite_user)==null?void 0:ue.email)||null},ze.invite_user&&(te[ze.invite_user.id]={email:ze.invite_user.email})}}),Object.keys(te).length>0&&Fe(ge=>{const ue={...ge,...te};return Dl(ue),ue})})},[d,q,we]);const Ne={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},be=o.useCallback(async(z=1,le,re)=>{var te,ge;A(!0),r("");try{let ue;if(le)if(re==="email"){const Qe=(te=(await Qn(1,1,[{key:"email",condition:Ln,value:le}])).data)==null?void 0:te[0];if(!Qe){c([]),u(0),A(!1);return}ue=[{key:"user_id",condition:"=",value:String(Qe.id)}]}else if(re==="invite_user_email"){const Qe=(ge=(await Qn(1,1,[{key:"email",condition:Ln,value:le}])).data)==null?void 0:ge[0];if(!Qe){c([]),u(0),A(!1);return}ue=[{key:"invite_user_id",condition:"=",value:String(Qe.id)}]}else ue=[{key:re||"trade_no",condition:re==="trade_no"||re==="user_id"||re==="invite_user_id"||re==="plan_id"||re==="status"?"=":Ln,value:le}];const ze=await xo({current:z,pageSize:I,filter:ue});c(ze.data),u(ze.total)}catch(ue){r(ue instanceof Error?ue.message:s("order.loadFailed"))}finally{A(!1)}},[I,s]),Se=o.useCallback(z=>{const le=String(z);N("user_id"),L(le),Q(!0),G(1),be(1,le,"user_id")},[be]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const z=new URLSearchParams(t.search),le=z.get("filter_email"),re=z.get("invite_user_email"),te=z.get("user_id")||z.get("filter_user_id");let ge="",ue="trade_no";te?(ge=te,ue="user_id",N("user_id"),L(te),Q(!0)):le?(ge=le,ue="email",N("email"),L(le),Q(!0)):re&&(ge=re,ue="invite_user_email",N("invite_user_email"),L(re),Q(!0)),be(1,ge,ue),Pt().then(b).catch(()=>{}),ji(1,1e3).then(ze=>{const Te={};ze.data.forEach(Qe=>{Te[Qe.id]=Qe.code}),h(Te)}).catch(()=>{})},[be,n,t.search]);function ve(){G(1),be(1,S,T)}function Ke(){L(""),G(1),be(1)}function y(z){G(z),be(z,S,T)}async function se(z){var le,re;B(null),R(null),r(""),H("");try{await bo(z),(le=window.showToast)==null||le.call(window,s("order.paidSuccess"),"success"),await be(P,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.paidFailed"),"error")}}async function W(z){var le,re;B(null),R(null),r(""),H("");try{await go(z),(le=window.showToast)==null||le.call(window,s("order.cancelSuccess"),"success"),await be(P,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.cancelFailed"),"error")}}async function xe(z,le){var re,te;B(null),R(null),r(""),H("");try{await fo(z,le),(re=window.showToast)==null||re.call(window,s("order.commissionSuccess"),"success"),await be(P,S,T)}catch(ge){(te=window.showToast)==null||te.call(window,ge instanceof Error?ge.message:s("order.commissionFailed"),"error")}}async function Ce(z){V(z),ie(!0);try{const le=await yo(z.id);le&&le.data&&V(le.data)}catch(le){console.error("Failed to fetch order detail:",le)}finally{ie(!1)}}function he(){var z;f({email:"",plan_id:(z=g[0])!=null&&z.id?String(g[0].id):"",period:"month_price",total_amount:"0"}),r(""),H("")}async function Ie(z){var le,re;if(z.preventDefault(),!!O){D(!0),r(""),H("");try{await os({email:O.email,plan_id:Number(O.plan_id),period:O.period,total_amount:Number(O.total_amount)*100}),f(null),(le=window.showToast)==null||le.call(window,s("order.assignSuccess"),"success"),await be(P,S,T)}catch(te){(re=window.showToast)==null||re.call(window,te instanceof Error?te.message:s("order.assignFailed"),"error")}finally{D(!1)}}}const qe=Math.ceil(j/I),ae=q?_e(q):null;return e.jsxs(We,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${m?"active":""}`,type:"button",onClick:()=>Q(!m),children:[e.jsx(en,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:he,children:[e.jsx(rt,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void be(P,S,T),disabled:U,children:[e.jsx(Re,{size:16}),s(U?"common.refreshing":"common.refresh")]})]}),m&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:T,onChange:z=>N(z.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input search-input",value:S,onChange:z=>L(z.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:z=>z.key==="Enter"&&ve()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:ve,children:[e.jsx(en,{size:16}),s("order.filter")]}),S?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[e.jsx(ke,{size:16}),s("order.clearFilter")]}):null]}),Z?e.jsx("div",{className:"form-error",children:Z}):null,w?e.jsx("div",{className:"form-success",children:w}):null,U&&d.length===0?e.jsx(Ee,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${U?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[d.map(z=>{var ze;const le=l(z.status),re=z.invite_user_id!==null,te=Ne[z.commission_status]??{label:`#${z.commission_status}`,dotClass:"pending"},ge=_e(z),ue=(ze=we[z.user_id])==null?void 0:ze.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(z),title:s("order.detailsTitle"),children:Us(z.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",z.id]}),e.jsx("span",{className:"order-type-pill",children:As[z.type]??`#${z.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[ue?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(z.user_id),title:s("order.filterByUser"),children:ue}):e.jsxs("span",{className:"order-subline",children:["ID: ",z.user_id]}),e.jsx("strong",{className:"order-plan-name",children:z.plan_name??`Plan #${z.plan_id}`}),e.jsx("span",{className:"period-capsule",children:a(z.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:ct(z.total_amount)}),ge?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",ge]}):null,Number(z.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",ct(z.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${le.cls.replace("status-","")}`}),e.jsx("span",{children:le.label}),z.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),Ae(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),C===Rt("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),se(z.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{B(null),W(z.trade_no)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[re?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:ct(z.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{children:te.label}),z.commission_status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Te=>{Te.stopPropagation(),Me(z.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),v===Rt("desktop",z.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Te=>Te.stopPropagation(),onClick:Te=>Te.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{R(null),xe(z.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{R(null),xe(z.trade_no,3)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Rs(z.created_at)})})]},z.trade_no)}),!U&&d.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),qe>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:P<=1,onClick:()=>y(P-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[P," / ",qe]}),e.jsx("button",{className:"mini-button",disabled:P>=qe,onClick:()=>y(P+1),children:e.jsx(jt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[d.map(z=>{var Ve;const le=l(z.status),re=z.invite_user_id!==null,te=Ne[z.invite_user_id!==null?z.commission_status:0]??{label:`#${z.commission_status}`,dotClass:"pending"},ge=(Ve=we[z.user_id])==null?void 0:Ve.email,ue=_e(z),ze=Rt("mobile",z.trade_no),Te=Rt("mobile",z.trade_no),Qe=C===ze||v===Te;return e.jsxs("div",{className:`mobile-order-card${Qe?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>Ce(z),children:Us(z.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",z.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${le.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:le.label}),z.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),Ae(z.trade_no,"mobile")},"aria-expanded":C===ze,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),C===ze&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),se(z.trade_no)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{B(null),W(z.trade_no)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:ge?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Se(z.user_id),children:ge}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",z.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:As[z.type]??`#${z.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:z.plan_name??`Plan #${z.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:a(z.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:ct(z.total_amount)})]}),ue?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:ue})})]}):null,Number(z.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:ct(z.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:re?e.jsx("strong",{children:ct(z.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),re&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:te.label}),z.commission_status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),Me(z.trade_no,"mobile")},"aria-expanded":v===Te,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),v===Te&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{R(null),xe(z.trade_no,1)},children:[e.jsx(sn,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{R(null),xe(z.trade_no,3)},children:[e.jsx(It,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Rs(z.created_at)})]})]})]},z.trade_no)}),!U&&d.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,qe>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:P<=1,onClick:()=>y(P-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[P," / ",qe]}),e.jsx("button",{className:"mini-button",disabled:P>=qe,onClick:()=>y(P+1),children:e.jsx(jt,{size:16})})]}):null]})]}),q?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(null),children:e.jsx(ke,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:X?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx(Ee,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(mt=we[q.user_id])!=null&&mt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{V(null),Se(q.user_id)},title:"Filter by this user",children:we[q.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",q.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:q.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:a(q.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:l(q.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:q.plan_name??`Plan #${q.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:q.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),q.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(pe=we[q.invite_user_id])!=null&&pe.email||(st=we[q.user_id])!=null&&st.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const z=String(q.invite_user_id);N("invite_user_id"),L(z),Q(!0),V(null),be(1,z,"invite_user_id")},title:"Filter by this inviter",children:((it=we[q.invite_user_id])==null?void 0:it.email)||((at=we[q.user_id])==null?void 0:at.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",q.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:ct(q.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(Ne[q.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(Ne[q.commission_status]??{label:`#${q.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:ct(q.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:ct(q.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:ct(q.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:ct(q.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:ct(q.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Hs(q.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Hs(q.updated_at)})]})]})]})})]})}):null,O?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ie,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:O.email,onChange:z=>f({...O,email:z.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:O.plan_id,onChange:z=>f({...O,plan_id:z.target.value}),children:g.map(z=>e.jsx("option",{value:z.id,children:z.name},z.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:O.period,onChange:z=>f({...O,period:z.target.value}),children:Object.entries(Os).map(([z,le])=>e.jsx("option",{value:z,children:le},z))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:O.total_amount,onChange:z=>f({...O,total_amount:z.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:$,children:[e.jsx(lt,{size:16}),s($?"order.assigning":"order.assign")]})]})]})]})}):null]})}function rn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function ln(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function In(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Al(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(0),[c,g]=o.useState(1),[b,_]=o.useState([]),[h,j]=o.useState(null),[u,P]=o.useState(!0),[G,I]=o.useState(!1),[S,L]=o.useState(""),[T,N]=o.useState(""),[U,A]=o.useState("");o.useEffect(()=>{h||A("")},[h]);const O=o.useCallback(async(r=1)=>{P(!0),L("");try{const w=await ji(r,15);l(w.data),d(w.total)}catch(w){L(w instanceof Error?w.message:t("coupon.loadFailed"))}finally{P(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}O(1),Pt().then(_).catch(()=>{})},[O,n]);async function f(r){var w,H;if(r.preventDefault(),!!h){I(!0),L(""),N("");try{const C=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await vo({id:h.id,name:h.name,type:Number(h.type),value:C,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,limit_use_with_user:h.limit_use_with_user?Number(h.limit_use_with_user):null,limit_plan_ids:h.limit_plan_ids.length?h.limit_plan_ids:null,limit_period:h.limit_period.length?h.limit_period:null,generate_count:h.generate_count?Number(h.generate_count):void 0}),j(null),(w=window.showToast)==null||w.call(window,t("coupon.saveSuccess"),"success"),await O(c)}catch(C){(H=window.showToast)==null||H.call(window,C instanceof Error?C.message:t("coupon.saveFailed"),"error")}finally{I(!1)}}}async function $(r){var w;try{await wo(r),await O(c)}catch(H){(w=window.showToast)==null||w.call(window,H instanceof Error?H.message:t("coupon.toggleFailed"),"error")}}async function D(r){var w;(w=window.showConfirm)==null||w.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var H,C;try{await jo(r),(H=window.showToast)==null||H.call(window,t("coupon.deleteSuccess"),"success"),await O(c)}catch(B){(C=window.showToast)==null||C.call(window,B instanceof Error?B.message:t("coupon.deleteFailed"),"error")}}})}const Z=Math.ceil(a/15);return e.jsxs(We,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[a," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(c),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(In()),children:[e.jsx(rt,{size:16}),t("coupon.add")]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(r=>{var B,v;const w=(B=r.limit_plan_ids)==null?void 0:B.map(R=>{var m;return((m=b.find(Q=>Q.id===R))==null?void 0:m.name)||`#${R}`}).join(", "),H=ln(t),C=(v=r.limit_period)==null?void 0:v.map(R=>H[R]||R).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:r.id}),e.jsx("td",{children:e.jsx("strong",{children:r.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:r.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:r.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:r.type===1?Je(r.value):`${r.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",r.limit_use??"∞"]}),r.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",r.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[w?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",w]})}):null,C?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",C]})}):null,!w&&!C?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${r.show?"active":""}`,type:"button",onClick:()=>void $(r.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[rn(r.started_at)," — ",rn(r.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(In(r)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(r.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},r.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(r=>{var w,H,C,B;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",r.id]}),e.jsx("span",{className:`tag type-tag ${r.type===1?"fixed-type":"percent-type"}`,children:r.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:r.name,children:r.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{zt(r.code).then(v=>{var R;(R=window.showToast)==null||R.call(window,v?`${t("coupon.copiedCode")}: ${r.code}`:t("common.copyFailed"),v?"success":"error")})},children:[e.jsx("code",{className:"mono",children:r.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(w=r.limit_plan_ids)!=null&&w.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:r.limit_plan_ids.map(v=>{const R=b.find(m=>m.id===v);return e.jsx("span",{className:"res-pill plan-pill",children:R?R.name:`#${v}`},v)})})]}):null,(H=r.limit_period)!=null&&H.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:r.limit_period.map(v=>e.jsx("span",{className:"res-pill cycle-pill",children:ln(t)[v]||v},v))})]}):null,!((C=r.limit_plan_ids)!=null&&C.length)&&!((B=r.limit_period)!=null&&B.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[rn(r.started_at)," — ",rn(r.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${r.show?"active":""}`,type:"button",onClick:()=>void $(r.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:r.type===1?Je(r.value).replace(/\s?₫/,""):`${r.value}`}),e.jsx("span",{className:"ticket-value-unit",children:r.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:r.limit_use??"∞"}),r.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",r.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(In(r)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void D(r.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},r.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:c<=1,onClick:()=>{g(c-1),O(c-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[c," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:c>=Z,onClick:()=>{g(c+1),O(c+1)},children:e.jsx(jt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:f,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:r=>j({...h,name:r.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:h.type,onChange:r=>j({...h,type:r.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:r=>j({...h,value:r.target.value})})]})]}),h.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:h.code,onChange:r=>j({...h,code:r.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:r=>j({...h,started_at:r.target.value}),onClick:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)},onFocus:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:r=>j({...h,ended_at:r.target.value}),onClick:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)},onFocus:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:r=>j({...h,limit_use:r.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use_with_user,onChange:r=>j({...h,limit_use_with_user:r.target.value}),placeholder:t("coupon.unlimited")})]})]}),h.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:r=>j({...h,generate_count:r.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),h.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_plan_ids.map(r=>{const w=b.find(H=>H.id===r);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const H=h.limit_plan_ids.filter(C=>C!==r);j({...h,limit_plan_ids:H})},children:[w?w.name:`#${r}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},r)})}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:U,onChange:r=>A(r.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(r=>r.name.toLowerCase().includes(U.toLowerCase())).map(r=>{const w=h.limit_plan_ids.includes(r.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:w,onChange:H=>{const C=H.target.checked?[...h.limit_plan_ids,r.id]:h.limit_plan_ids.filter(B=>B!==r.id);j({...h,limit_plan_ids:C})}}),e.jsx("span",{children:r.name})]},r.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),h.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:h.limit_period.map(r=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const w=h.limit_period.filter(H=>H!==r);j({...h,limit_period:w})},children:[ln(t)[r]||r," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},r))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(ln(t)).map(([r,w])=>{const H=h.limit_period.includes(r);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:H,onChange:C=>{const B=C.target.checked?[...h.limit_period,r]:h.limit_period.filter(v=>v!==r);j({...h,limit_period:B})}}),e.jsx("span",{children:w})]},r)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function cn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Ol(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function Dn(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Rl(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(0),[c,g]=o.useState(1),[b,_]=o.useState([]),[h,j]=o.useState(null),[u,P]=o.useState(!0),[G,I]=o.useState(!1),[S,L]=o.useState(""),[T,N]=o.useState(""),[U,A]=o.useState("");o.useEffect(()=>{h||A("")},[h]);const O=Ol(t),f=o.useCallback(async(r=1)=>{P(!0),L("");try{const w=await No(r,15);l(w.data),d(w.total)}catch(w){L(w instanceof Error?w.message:t("giftcard.loadFailed"))}finally{P(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}f(1),Pt().then(_).catch(()=>{})},[f,n]);async function $(r){var w,H;if(r.preventDefault(),!!h){I(!0),L(""),N("");try{const C=h.type==="1"?Math.round(Number(h.value)*100):Number(h.value);await ko({id:h.id,name:h.name,type:Number(h.type),value:C,code:h.code||void 0,started_at:Math.floor(new Date(h.started_at).getTime()/1e3),ended_at:Math.floor(new Date(h.ended_at).getTime()/1e3),limit_use:h.limit_use?Number(h.limit_use):null,plan_id:h.plan_id?Number(h.plan_id):null,generate_count:h.generate_count?Number(h.generate_count):void 0}),j(null),(w=window.showToast)==null||w.call(window,t("giftcard.saveSuccess"),"success"),await f(c)}catch(C){(H=window.showToast)==null||H.call(window,C instanceof Error?C.message:t("giftcard.saveFailed"),"error")}finally{I(!1)}}}async function D(r){var w;(w=window.showConfirm)==null||w.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var H,C;try{await _o(r),(H=window.showToast)==null||H.call(window,t("giftcard.deleteSuccess"),"success"),await f(c)}catch(B){(C=window.showToast)==null||C.call(window,B instanceof Error?B.message:t("giftcard.deleteFailed"),"error")}}})}const Z=Math.ceil(a/15);return e.jsxs(We,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[a," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void f(c),disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(Dn()),children:[e.jsx(rt,{size:16}),t("giftcard.add")]})]})]}),S?e.jsx("div",{className:"form-error",children:S}):null,T?e.jsx("div",{className:"form-success",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(r=>{var w;return e.jsxs("tr",{children:[e.jsx("td",{children:r.id}),e.jsx("td",{children:e.jsx("strong",{children:r.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:r.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:O[r.type]??r.type})}),e.jsx("td",{children:e.jsx("strong",{children:r.type===1?Je(r.value):r.value})}),e.jsx("td",{children:r.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((w=b.find(H=>H.id===r.plan_id))==null?void 0:w.name)||`#${r.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:r.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[cn(r.started_at)," — ",cn(r.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(Dn(r)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(r.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},r.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(r=>{var w;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",r.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:O[r.type]??r.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:r.name,children:r.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{zt(r.code).then(H=>{var C;(C=window.showToast)==null||C.call(window,H?t("giftcard.copiedCode").replace("{code}",r.code):t("common.copyFailed"),H?"success":"error")})},children:[e.jsx("code",{className:"mono",children:r.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:r.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((w=b.find(H=>H.id===r.plan_id))==null?void 0:w.name)||`#${r.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[cn(r.started_at)," — ",cn(r.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:r.type===1?Je(r.value).replace(/\s?₫/,""):`${r.value}`}),e.jsx("span",{className:"ticket-value-unit",children:r.type===1?"₫":O[r.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:r.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(Dn(r)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void D(r.id),"aria-label":t("common.delete"),children:e.jsx(Ze,{size:15})})]})]})]},r.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:c<=1,onClick:()=>{g(c-1),f(c-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[c," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:c>=Z,onClick:()=>{g(c+1),f(c+1)},children:e.jsx(jt,{size:16})})]}):null,h?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:h.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:$,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:h.name,onChange:r=>j({...h,name:r.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:h.type,onChange:r=>j({...h,type:r.target.value}),children:Object.entries(O).map(([r,w])=>e.jsx("option",{value:r,children:w},r))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:h.value,onChange:r=>j({...h,value:r.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.started_at,onChange:r=>j({...h,started_at:r.target.value}),onClick:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)},onFocus:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:h.ended_at,onChange:r=>j({...h,ended_at:r.target.value}),onClick:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)},onFocus:r=>{var w,H;return(H=(w=r.currentTarget).showPicker)==null?void 0:H.call(w)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.limit_use,onChange:r=>j({...h,limit_use:r.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),h.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:h.generate_count,onChange:r=>j({...h,generate_count:r.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),h.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const r=b.find(w=>String(w.id)===h.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...h,plan_id:""})},children:[r?r.name:`#${h.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:U,onChange:r=>A(r.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!h.plan_id,onChange:()=>{j({...h,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),b.filter(r=>r.name.toLowerCase().includes(U.toLowerCase())).map(r=>{const w=String(r.id)===h.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:w,onChange:H=>{H.target.checked&&j({...h,plan_id:String(r.id)})}}),e.jsx("span",{children:r.name})]},r.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[e.jsx(lt,{size:16}),t(G?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Kt="Tương đối",xt="=";function dn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Hl(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function qs(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Fn(n){return+(n/1073741824).toFixed(2)}function An(n){return Math.round(n*1073741824)}function pn(n){return(n/1073741824).toFixed(2)}function Ul(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function Ht(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const ts=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Fi="user_visible_columns";function ql(){if(typeof window<"u")try{const n=localStorage.getItem(Fi);if(n)return new Set(JSON.parse(n))}catch{}return new Set(ts.filter(n=>n.defaultVisible).map(n=>n.key))}const _n=[{value:"email",label:"Email",condition:Kt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:xt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:xt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:xt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:xt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:xt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Kt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:xt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Kt,placeholder:"UUID"},{value:"token",label:"Token",condition:Kt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Kt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:xt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:xt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:xt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:xt,placeholder:"1780366403"}],Bl=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Xe(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Gl(n,t){var a;const s=((a=_n.find(d=>d.value===n))==null?void 0:a.label)??n,l=d=>{const c=t(d);return c===d?s:c};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return l("user.filterBanned");case"is_admin":return l("user.filterAdmin");case"is_manager":return l("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return l("user.filterUuid");case"token":return l("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return l("user.filterTransferEnable");case"d":return l("user.filterDownloadUsed");case"device_limit":return l("user.filterDeviceLimit");case"expired_at":return l("user.filterExpiredAt");default:return s}}function On(n){return _n.find(t=>t.value===n)??_n[0]}function Wl(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function Kl(){const n=Ue(),t=tn(),{t:s}=me(),[l,a]=o.useState([]),[d,c]=o.useState([]),[g,b]=o.useState([]),[_,h]=o.useState(0),[j,u]=o.useState(1),[P,G]=o.useState(""),[I,S]=o.useState("email"),[L,T]=o.useState(!0),[N,U]=o.useState(""),[A,O]=o.useState(ql),[f,$]=o.useState(!1),D=o.useRef(null),[Z,r]=o.useState(null),[w,H]=o.useState(null),[C,B]=o.useState(null),[v,R]=o.useState({}),[m,Q]=o.useState(!1),[q,V]=o.useState(!1),[X,ie]=o.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[we,Fe]=o.useState(!1),[Ae,Me]=o.useState(null),[_e,Ne]=o.useState({plan_id:"",period:"month_price",total_amount:""}),[be,Se]=o.useState(!1),[ve,Ke]=o.useState(null),[y,se]=o.useState(null),[W,xe]=o.useState([]),[Ce,he]=o.useState(0),[Ie,qe]=o.useState(1),[ae]=o.useState(10),[mt,pe]=o.useState(!1),[st,it]=o.useState("");o.useEffect(()=>{function i(k){const M=k.target instanceof Element?k.target:null;Z!==null&&(!M||!M.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(r(null),H(null)),f&&D.current&&!D.current.contains(k.target)&&$(!1)}return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[Z,f]),o.useEffect(()=>{if(Z===null)return;const i=()=>{r(null),H(null)};return window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),()=>{window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0)}},[Z]);function at(i,k){if(Z===i){r(null),H(null);return}const M=k.getBoundingClientRect(),F=220,ce=392,ye=6,$e=8,je=Math.max($e,Math.min(window.innerWidth-F-$e,M.right-F)),Gt=M.bottom+ye+ce<=window.innerHeight-$e?M.bottom+ye:Math.max($e,M.top-ce-ye);H({top:Gt,left:je}),r(i)}function z(){r(null),H(null)}function le(i,k=!1,M=""){const F=ce=>{z(),ce()};return e.jsxs("div",{className:`action-dropdown-menu ${k?"action-dropdown-menu-fixed":""} ${M}`.trim(),style:k&&w?{top:w.top,left:w.left}:void 0,onMouseDown:ce=>ce.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>F(()=>gt(i)),children:[e.jsx(Ge,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>Le(i)),children:[e.jsx(mi,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>void Ft(i)),children:[e.jsx(ft,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>Nt(i)),children:[e.jsx(Yn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>At(i)),children:[e.jsx(ss,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>Ot(i)),children:[e.jsx(ra,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>p(i)),children:[e.jsx(Wn,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>K(i)),children:[e.jsx(gn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>F(()=>de(i)),children:[e.jsx(bs,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>F(()=>wt(i)),children:[e.jsx(Ze,{size:14}),s("user.actionDelete")]})]})}function re(i){O(k=>{const M=new Set(k);M.has(i)?M.delete(i):M.add(i);try{localStorage.setItem(Fi,JSON.stringify([...M]))}catch{}return M})}const te=i=>A.has(i),ge=ts.filter(i=>A.has(i.key)).length,ue=o.useCallback(async(i=1,k,M)=>{T(!0),U("");try{const F=k==null?void 0:k.trim(),ce=On(M||"email"),ye=F?[{key:ce.value,condition:ce.condition,value:F}]:void 0,$e=await Qn(i,15,ye);a($e.data),h($e.total)}catch(F){U(F instanceof Error?F.message:s("user.loadFailed"))}finally{T(!1)}},[]),ze=o.useCallback(async()=>{try{const[i,k]=await Promise.all([Pt(),Ut()]);c(i),b(k)}catch{}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const i=new URLSearchParams(t.search),M=[["email",i.get("email")||i.get("filter_email")],["id",i.get("id")||i.get("user_id")||i.get("filter_user_id")],["plan_id",i.get("plan_id")],["invite_user_id",i.get("invite_user_id")],["invite_by_email",i.get("invite_by_email")],["uuid",i.get("uuid")],["token",i.get("token")],["remarks",i.get("remarks")]].find(([,F])=>F==null?void 0:F.trim());if(M){const[F,ce]=M,ye=On(F),$e=(ce==null?void 0:ce.trim())??"";S(ye.value),G($e),u(1),ue(1,$e,ye.value)}else ue(1);ze()},[ue,ze,n,t.search]);function Te(){u(1),ue(1,P,I)}function Qe(){G(""),u(1),ue(1)}function Ve(i){u(i),ue(i,P,I)}function Be(i){if(i.plan_name)return i.plan_name;if(!i.plan_id)return"—";const k=d.find(M=>M.id===i.plan_id);return k?k.name:`#${i.plan_id}`}function $t(i){if(!i.group_id)return"—";const k=g.find(M=>M.id===i.group_id);return k?k.name:`#${i.group_id}`}function et(i,k){const M=s(i);return M===i?k:M}function ht(i){const k=Number(i.device_limit??0);return k>0?`${Number(i.device_bound_count??0)} / ${k}`:et("user.unlimited","Unlimited")}function qt(i){const k=Number(i.device_bound_count??0),M=Number(i.device_pending_count??0),F=Number(i.device_banned_count??0),ce=Number(i.device_online_count??0),ye=Number(i.alive_ip??0),$e=Number(i.device_limit??0),je=$e>0?`${k} / ${$e}`:`${k} / ${et("user.unlimited","Unlimited")}`,nt=[`${et("user.deviceBound","Bound")}: ${je}`,`${et("user.devicePending","Pending")}: ${M}`,`${et("user.deviceBanned","Banned")}: ${F}`,`${et("user.deviceOnline","Online devices")}: ${ce}`,`${et("user.deviceOnlineIp","Online IP")}: ${ye}`];return i.ips&&nt.push(i.ips),nt.join(`
`)}function Dt(i){n.push(`/device?user_id=${encodeURIComponent(String(i.id))}`)}function Et(i,k="left"){const M=`${et("user.deviceOnlineShort","Online")}: ${Number(i.device_online_count??0)} | ${et("user.deviceIpShort","IP")}: ${Number(i.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${k==="right"?"align-right":""}`,type:"button",title:qt(i),onClick:()=>Dt(i),children:[e.jsx("span",{className:"device-cell-primary",children:ht(i)}),e.jsx("span",{className:"device-cell-secondary",children:M})]})}async function Ft(i){var F,ce;const k=i.subscribe_url;if(!k){(F=window.showToast)==null||F.call(window,s("user.toastNoSubscribeUrl"),"error");return}const M=await zt(k);(ce=window.showToast)==null||ce.call(window,s(M?"user.toastUrlCopied":"common.copyFailed"),M?"success":"error"),r(null)}function At(i){var k;r(null),(k=window.showConfirm)==null||k.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var M,F;try{await To(i.id),(M=window.showToast)==null||M.call(window,s("user.toastSecretResetSuccess"),"success"),await ue(j,P,I)}catch(ce){(F=window.showToast)==null||F.call(window,ce instanceof Error?ce.message:s("user.toastSecretResetFailed"),"error")}}})}function wt(i){var k;r(null),(k=window.showConfirm)==null||k.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var M,F;try{await Co(i.id),(M=window.showToast)==null||M.call(window,s("user.toastDeletedSuccess"),"success"),await ue(j,P,I)}catch(ce){(F=window.showToast)==null||F.call(window,ce instanceof Error?ce.message:s("user.toastDeletedFailed"),"error")}}})}function Nt(i){var M;r(null);const k=i.subscribe_url;if(!k){(M=window.showToast)==null||M.call(window,s("user.toastNoSubscribeUrl"),"error");return}Ke({url:k,userId:i.id})}function Ot(i){r(null),n.push(`/order?user_id=${i.id}`)}function p(i){r(null),n.push(`/subscription?user_id=${i.id}`)}function K(i){r(null),S("invite_user_id"),G(String(i.id)),ue(1,String(i.id),"invite_user_id")}async function ne(i,k){pe(!0),it("");try{const M=await Io(i,k,ae);xe(M.data||[]),he(M.total||0),qe(k)}catch(M){it(M instanceof Error?M.message:s("user.historyLoading"))}finally{pe(!1)}}function de(i){r(null),se(i),ne(i.id,1)}function Le(i){r(null),Me(i.email),Ne({plan_id:"",period:"month_price",total_amount:""})}async function dt(i){var k,M;if(i.preventDefault(),!!Ae){Se(!0);try{await os({email:Ae,plan_id:Number(_e.plan_id),period:_e.period,total_amount:(Number(_e.total_amount)||0)*100}),(k=window.showToast)==null||k.call(window,s("user.toastAssignSuccess"),"success"),Me(null)}catch(F){(M=window.showToast)==null||M.call(window,F instanceof Error?F.message:s("user.toastAssignFailed"),"error")}finally{Se(!1)}}}function gt(i){r(null),B(i),R({id:i.id,email:i.email,invite_user_email:"",password:"",balance:i.balance,commission_balance:i.commission_balance,u:Fn(i.u),d:Fn(i.d),transfer_enable:Fn(i.transfer_enable),device_limit:i.device_limit,expired_at:Hl(i.expired_at),plan_id:i.plan_id,banned:i.banned,commission_type:i.commission_type??0,commission_rate:i.commission_rate??"",discount:i.discount??"",speed_limit:i.speed_limit,is_admin:i.is_admin,is_staff:i.is_staff,is_manager:i.is_manager,remarks:i.remarks??""})}function Pe(i,k){R(M=>({...M,[i]:k}))}async function Bt(i){var k,M;if(i.preventDefault(),!!C){Q(!0);try{const F={id:C.id,email:v.email,plan_id:v.plan_id||null,expired_at:qs(String(v.expired_at??"")),transfer_enable:An(Number(v.transfer_enable??0)),speed_limit:v.speed_limit||null,device_limit:v.device_limit||null,u:An(Number(v.u??0)),d:An(Number(v.d??0)),balance:Number(v.balance??0),commission_balance:Number(v.commission_balance??0),commission_rate:v.commission_rate!==""&&v.commission_rate!==null?Number(v.commission_rate):null,commission_type:Number(v.commission_type??0),discount:v.discount!==""&&v.discount!==null?Number(v.discount):null,remarks:v.remarks||null,is_admin:Number(v.is_admin??0),is_staff:Number(v.is_staff??0),is_manager:Number(v.is_manager??0),banned:Number(v.banned??0)};v.invite_user_email&&(F.invite_user_email=v.invite_user_email),v.password&&(F.password=v.password),await So(F),(k=window.showToast)==null||k.call(window,s("user.toastSaveSuccess"),"success"),B(null),await ue(j,P,I)}catch(F){(M=window.showToast)==null||M.call(window,F instanceof Error?F.message:s("user.toastSaveFailed"),"error")}finally{Q(!1)}}}async function Mt(i){var k,M;i.preventDefault(),Fe(!0);try{await zo({email_prefix:X.email_prefix,email_suffix:X.email_suffix,password:X.password||void 0,plan_id:X.plan_id?Number(X.plan_id):void 0,expired_at:qs(X.expired_at)}),(k=window.showToast)==null||k.call(window,s("user.toastCreateSuccess"),"success"),V(!1),ie({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await ue(j,P,I)}catch(F){(M=window.showToast)==null||M.call(window,F instanceof Error?F.message:s("user.toastCreateFailed"),"error")}finally{Fe(!1)}}const x=Math.ceil(_/15),E=On(I);return e.jsxs(We,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[_," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:D,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>$(!f),children:[e.jsx(ta,{size:16}),s("user.columns")]}),f?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>$(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:ge})})}),e.jsx("div",{className:"col-picker-list",children:ts.map(i=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:A.has(i.key),onChange:()=>re(i.key)}),e.jsx("span",{children:Xe(i.key,s)})]},i.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ue(j,P,I),disabled:L,children:[e.jsx(Re,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>V(!0),children:[e.jsx(rt,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:I,onChange:i=>S(i.target.value),children:_n.map(i=>e.jsx("option",{value:i.value,children:Gl(i.value,s)},i.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input search-input",value:P,onChange:i=>G(i.target.value),placeholder:E.placeholder,onKeyDown:i=>i.key==="Enter"&&Te()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:Te,children:[e.jsx(en,{size:16}),s("user.filter")]}),P?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Qe,children:[e.jsx(ke,{size:16}),s("user.clearFilter")]}):null]}),N?e.jsx("div",{className:"form-error",children:N}):null,L&&l.length===0?e.jsx(Ee,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${L?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[l.map(i=>{const k=pn(i.u+i.d),M=pn(i.transfer_enable),F=parseFloat(k);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",i.id]}),e.jsx("span",{className:"user-email",title:i.email,children:i.email})]}),i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[Be(i)," / ",i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):$t(i)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${F>0?F>parseFloat(M)*.9?"high":"ok":""}`,children:[k," GB"]})," / ",M," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("devices",s)}),e.jsx("span",{className:"info-val",children:Et(i,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("expires",s)}),e.jsx("span",{className:"info-val",children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(i.balance/100).toFixed(2)," ₫ / ",(i.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:dn(i.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>r(Z===i.id?null:i.id),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Z===i.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>r(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:ce=>ce.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:i.email}),e.jsxs("small",{children:["#",i.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>r(null),children:e.jsx(ke,{size:16})})]}),le(i,!1,"mobile-action-menu")]})}):null]})})]},i.id)}),!L&&l.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[te("id")&&e.jsx("th",{children:Xe("id",s)}),te("email")&&e.jsx("th",{children:Xe("email",s)}),te("status")&&e.jsx("th",{children:Xe("status",s)}),te("plan")&&e.jsx("th",{children:Xe("plan",s)}),te("group")&&e.jsx("th",{children:Xe("group",s)}),te("used")&&e.jsx("th",{children:Xe("used",s)}),te("traffic")&&e.jsx("th",{children:Xe("traffic",s)}),te("devices")&&e.jsx("th",{children:Xe("devices",s)}),te("expires")&&e.jsx("th",{children:Xe("expires",s)}),te("balance")&&e.jsx("th",{children:Xe("balance",s)}),te("commission")&&e.jsx("th",{children:Xe("commission",s)}),te("joined")&&e.jsx("th",{children:Xe("joined",s)}),te("actions")&&e.jsx("th",{className:"user-actions-col",children:Xe("actions",s)})]})}),e.jsxs("tbody",{children:[l.map(i=>{const k=pn(i.u+i.d),M=pn(i.transfer_enable),F=parseFloat(k);return e.jsxs("tr",{children:[te("id")&&e.jsx("td",{children:i.id}),te("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:i.email})}),te("status")&&e.jsx("td",{children:i.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),te("plan")&&e.jsx("td",{children:Be(i)}),te("group")&&e.jsx("td",{children:i.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):$t(i)}),te("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${F>0?F>parseFloat(M)*.9?"high":"ok":""}`,children:k})}),te("traffic")&&e.jsx("td",{children:M}),te("devices")&&e.jsx("td",{children:Et(i)}),te("expires")&&e.jsx("td",{children:i.expired_at?e.jsx("span",{className:`expiry-date ${i.expired_at<Date.now()/1e3?"expired":""}`,children:dn(i.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),te("balance")&&e.jsx("td",{children:(i.balance/100).toFixed(2)}),te("commission")&&e.jsx("td",{children:(i.commission_balance/100).toFixed(2)}),te("joined")&&e.jsx("td",{children:e.jsx("small",{children:dn(i.created_at)})}),te("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===i.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:ce=>at(i.id,ce.currentTarget),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Z===i.id&&w?oi.createPortal(le(i,!0),document.body):null]})})]},i.id)}),!L&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:ge,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),x>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Ve(j-1),children:e.jsx(vt,{size:16})}),Array.from({length:Math.min(5,x)},(i,k)=>{let M;return x<=5||j<=3?M=k+1:j>=x-2?M=x-4+k:M=j-2+k,e.jsx("button",{className:`mini-button ${M===j?"active-page":""}`,onClick:()=>Ve(M),children:M},M)}),x>5?e.jsxs("span",{className:"page-info",children:["… ",x]}):null,e.jsx("button",{className:"mini-button",disabled:j>=x,onClick:()=>Ve(j+1),children:e.jsx(jt,{size:16})})]})}):null]}),C?e.jsx("div",{className:"modal-backdrop",onClick:()=>B(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>B(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:Bt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(v.email??""),onChange:i=>Pe("email",i.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(v.invite_user_email??""),onChange:i=>Pe("invite_user_email",i.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(v.password??""),onChange:i=>Pe("password",i.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.balance??0)/100).toFixed(2)),onChange:i=>Pe("balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.commission_balance??0)/100).toFixed(2)),onChange:i=>Pe("commission_balance",Math.round(Number(i.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.u??0),onChange:i=>Pe("u",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.d??0),onChange:i=>Pe("d",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.transfer_enable??0),onChange:i=>Pe("transfer_enable",i.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.device_limit??""),onChange:i=>Pe("device_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(v.expired_at??""),onChange:i=>Pe("expired_at",i.target.value),onClick:i=>{var k,M;return(M=(k=i.currentTarget).showPicker)==null?void 0:M.call(k)},onFocus:i=>{var k,M;return(M=(k=i.currentTarget).showPicker)==null?void 0:M.call(k)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(v.plan_id??""),onChange:i=>Pe("plan_id",i.target.value?Number(i.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(v.banned??0),onChange:i=>Pe("banned",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(v.commission_type??0),onChange:i=>Pe("commission_type",Number(i.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.commission_rate??""),onChange:i=>Pe("commission_rate",i.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.discount??""),onChange:i=>Pe("discount",i.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.speed_limit??""),onChange:i=>Pe("speed_limit",i.target.value?Number(i.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${v.is_admin?"active":""}`,onClick:()=>Pe("is_admin",v.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${v.is_manager?"active":""}`,onClick:()=>Pe("is_manager",v.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${v.is_staff?"active":""}`,onClick:()=>Pe("is_staff",v.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(v.remarks??""),onChange:i=>Pe("remarks",i.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>B(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:m,children:s(m?"common.processing":"common.save")})]})]})]})}):null,q?e.jsx("div",{className:"modal-backdrop",onClick:()=>V(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>V(!1),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Mt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:X.email_prefix,onChange:i=>ie({...X,email_prefix:i.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:X.email_suffix,onChange:i=>ie({...X,email_suffix:i.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:X.password,onChange:i=>ie({...X,password:i.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:X.plan_id,onChange:i=>ie({...X,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:X.expired_at,onChange:i=>ie({...X,expired_at:i.target.value}),onClick:i=>{var k,M;return(M=(k=i.currentTarget).showPicker)==null?void 0:M.call(k)},onFocus:i=>{var k,M;return(M=(k=i.currentTarget).showPicker)==null?void 0:M.call(k)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>V(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:we,children:s(we?"user.creating":"user.createUser")})]})]})]})}):null,Ae?e.jsx("div",{className:"modal-backdrop",onClick:()=>Me(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Me(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:dt,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ae})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:_e.plan_id,onChange:i=>Ne({..._e,plan_id:i.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),d.map(i=>e.jsx("option",{value:i.id,children:i.name},i.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:_e.period,onChange:i=>Ne({..._e,period:i.target.value}),children:Bl.map(i=>e.jsx("option",{value:i.value,children:Wl(i.value,s)},i.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:_e.total_amount,onChange:i=>Ne({..._e,total_amount:i.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Me(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:be,children:s(be?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),ve?e.jsx("div",{className:"modal-backdrop",onClick:()=>Ke(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ke(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ve.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:ve.userId})})]})]})}):null,y?e.jsx("div",{className:"modal-backdrop",onClick:()=>se(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:i=>i.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:y.email,id:y.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>se(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[st?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:st}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:Ce})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(W.reduce((i,k)=>i+k.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(W.reduce((i,k)=>i+k.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:Ht(W.reduce((i,k)=>i+k.u+k.d,0))})]})]}),mt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx(Ee,{label:s("user.historyLoading")})}):W.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(bs,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:W.map(i=>{const k=Ht(i.u),M=Ht(i.d),F=Ht(i.u+i.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Ul(i.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(i.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:k}),e.jsx("td",{style:{color:"var(--muted)"},children:M}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:F})]},i.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((Ie-1)*ae+1,Ce),end:Math.min(Ie*ae,Ce),total:Ce})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:Ie<=1,onClick:()=>ne(y.id,Ie-1),children:[e.jsx(vt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:Ie*ae>=Ce,onClick:()=>ne(y.id,Ie+1),children:[s("user.historyNext"),e.jsx(jt,{size:16})]})]})]})]})]})]})}):null]})}function Yl(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Xt({value:n,onCopy:t,className:s="",copyClassName:l="",prefixLength:a=8,suffixLength:d=4}){const{t:c}=me(),[g,b]=o.useState(!1),_=g?n:Yl(n,a,d);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${l}`.trim(),type:"button",title:c("uuid.copy"),onClick:()=>void t(),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:g?n:_,children:_})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:c(g?"uuid.hide":"uuid.showFull"),"aria-label":c(g?"uuid.hide":"uuid.showFull"),onClick:()=>b(h=>!h),children:g?e.jsx(aa,{size:14}):e.jsx(oa,{size:14})})]})}const Bs=15,Gs=20,Jl=["email","id","user_id","plan_id","status"],Zl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function _t(n,t){return n?new Date(n*1e3).toLocaleString():t}function Ql(n){if(!n)return"";const t=new Date(n*1e3),s=l=>String(l).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Xl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Lt(n){return+(n/1073741824).toFixed(2)}function Rn(n){return Math.round((Number(n)||0)*1073741824)}function Vl(n){return n==="email"?"like":"="}function ec(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function tc(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Ws(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ks(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Ys(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Js(n){return String(n.hwid??"").trim()!==""}function nc(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function sc(){const n=Ue(),t=tn(),{t:s}=me(),[l,a]=o.useState([]),[d,c]=o.useState([]),[g,b]=o.useState(0),[_,h]=o.useState(1),[j,u]=o.useState("email"),[P,G]=o.useState(""),[I,S]=o.useState(!0),[L,T]=o.useState(""),[N,U]=o.useState(null),[A,O]=o.useState({}),[f,$]=o.useState(null),[D,Z]=o.useState(null),[r,w]=o.useState([]),[H,C]=o.useState(0),[B,v]=o.useState(1),[R,m]=o.useState(!1),[Q,q]=o.useState(""),[V,X]=o.useState(null),[ie,we]=o.useState(null),[Fe,Ae]=o.useState({period:"month_price",total_amount:""}),[Me,_e]=o.useState(!1),[Ne,be]=o.useState(null),[Se,ve]=o.useState(null),[Ke,y]=o.useState(null);function se(p){const K=p==null?void 0:p.trim();K&&n.push(`/user?email=${encodeURIComponent(K)}`)}const W=o.useCallback(async(p=1,K="",ne="email")=>{S(!0),T("");try{const de=K.trim()?[{key:ne,condition:Vl(ne),value:K.trim()}]:void 0,Le=await Po(p,Bs,de);a(Le.data),b(Le.total),h(p)}catch(de){T(de instanceof Error?de.message:s("subscription.loadFailed"))}finally{S(!1)}},[s]),xe=o.useCallback(async(p,K=1)=>{m(!0),q("");try{const ne=await wi(K,Gs,[{key:"subscription_id",condition:"=",value:String(p.id)}]);w(ne.data),C(ne.total),v(K)}catch(ne){q(ne instanceof Error?ne.message:s("subscription.slotsLoadFailed"))}finally{m(!1)}},[s]),Ce=o.useCallback(async()=>{var p;try{c(await Pt())}catch(K){(p=window.showToast)==null||p.call(window,K instanceof Error?K.message:s("subscription.plansLoadFailed"),"error")}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}Ce();const p=new URLSearchParams(t.search),ne=[["user_id",p.get("user_id")],["id",p.get("id")],["plan_id",p.get("plan_id")],["email",p.get("email")],["status",p.get("status")]].find(([,de])=>de&&de.trim());if(ne){const[de,Le]=ne,dt=Le??"";u(de),G(dt),W(1,dt,de);return}W()},[W,Ce,t.search,n]),o.useEffect(()=>{function p(K){const ne=K.target instanceof Element?K.target:null;Ne!==null&&(!ne||!ne.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&he()}return document.addEventListener("mousedown",p),()=>document.removeEventListener("mousedown",p)},[Ne]),o.useEffect(()=>{if(Ne===null)return;const p=()=>he();return window.addEventListener("resize",p),window.addEventListener("scroll",p,!0),()=>{window.removeEventListener("resize",p),window.removeEventListener("scroll",p,!0)}},[Ne]);function he(){be(null),ve(null)}function Ie(p,K){if(Ne===p&&Se){he();return}const ne=K.getBoundingClientRect(),de=230,Le=292,dt=6,gt=8,Pe=Math.max(gt,Math.min(window.innerWidth-de-gt,ne.right-de)),Mt=ne.bottom+dt+Le<=window.innerHeight-gt?ne.bottom+dt:Math.max(gt,ne.top-Le-dt);ve({top:Mt,left:Pe}),be(p)}function qe(p){ve(null),be(K=>K===p?null:p)}function ae(p){p.preventDefault(),W(1,P,j)}function mt(){if(G(""),t.search){n.replace("/subscription");return}W(1,"",j)}function pe(p){if(!p)return s("subscription.noPlan");const K=d.find(ne=>Number(ne.id)===Number(p));return K?`#${K.id} - ${K.name}`:`#${p}`}function st(p){U(p),O({plan_id:p.plan_id?String(p.plan_id):"",transfer_enable:String(Lt(p.transfer_enable)),u:String(Lt(p.u)),d:String(Lt(p.d)),device_limit:p.device_limit===null?"":String(p.device_limit),speed_limit:p.speed_limit===null?"":String(p.speed_limit),expired_at:Ql(p.expired_at),status:p.status,auto_renewal:String(p.auto_renewal||0),name_sni:p.name_sni??"",network_settings:p.network_settings??"",remarks:p.remarks??""})}async function it(p){var K,ne;if(p.preventDefault(),!!N){$(N.id);try{await Eo({id:N.id,plan_id:A.plan_id===""?null:Number(A.plan_id),transfer_enable:Rn(A.transfer_enable),u:Rn(A.u),d:Rn(A.d),device_limit:A.device_limit===""?null:Number(A.device_limit),speed_limit:A.speed_limit===""?null:Number(A.speed_limit),expired_at:Xl(A.expired_at),status:A.status,auto_renewal:Number(A.auto_renewal),name_sni:A.name_sni||null,network_settings:A.network_settings||null,remarks:A.remarks}),U(null),(K=window.showToast)==null||K.call(window,s("subscription.updateSuccess"),"success"),await W(_,P,j)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("subscription.saveFailed"),"error")}finally{$(null)}}}function at(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.resetConfirm",{id:p.id}),onConfirm:async()=>{var ne,de;$(p.id);try{await Mo(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.resetSuccess"),"success"),await W(_,P,j)}catch(Le){(de=window.showToast)==null||de.call(window,Le instanceof Error?Le.message:s("subscription.resetFailed"),"error")}finally{$(null)}}})}function z(p){var K,ne;if(!p.user_email){(K=window.showToast)==null||K.call(window,s("subscription.renewMissingEmail"),"error");return}if(!p.plan_id){(ne=window.showToast)==null||ne.call(window,s("subscription.renewMissingPlan"),"error");return}we(p),Ae({period:"month_price",total_amount:""})}async function le(p){var K,ne;if(p.preventDefault(),!(!(ie!=null&&ie.user_email)||!ie.plan_id)){_e(!0);try{await os({email:ie.user_email,plan_id:ie.plan_id,period:Fe.period,total_amount:Math.round((Number(Fe.total_amount)||0)*100),subscription_id:ie.id}),(K=window.showToast)==null||K.call(window,s("subscription.renewSuccess"),"success"),we(null)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("subscription.renewFailed"),"error")}finally{_e(!1)}}}async function re(p){var ne;if(!p)return;const K=await zt(p);(ne=window.showToast)==null||ne.call(window,s(K?"subscription.copySuccess":"common.copyFailed"),K?"success":"error")}function te(p,K){a(ne=>ne.map(de=>de.id===p?{...de,subscribe_url:K}:de)),Z(ne=>ne&&ne.id===p?{...ne,subscribe_url:K}:ne)}async function ge(p){if(p.subscribe_url)return p.subscribe_url;const ne=(await $o(p.id)).data||null;return ne&&te(p.id,ne),ne}async function ue(p){var K;if(!p.subscribe_url){X(p.id);try{await ge(p)}catch(ne){(K=window.showToast)==null||K.call(window,ne instanceof Error?ne.message:s("common.copyFailed"),"error")}finally{X(null)}}}async function ze(p){var K,ne;X(p.id);try{const de=await ge(p);if(!de){(K=window.showToast)==null||K.call(window,s("common.copyFailed"),"error");return}await re(de)}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("common.copyFailed"),"error")}finally{X(null)}}async function Te(p){var K,ne;X(p.id);try{const de=await ge(p);if(!de){(K=window.showToast)==null||K.call(window,s("common.copyFailed"),"error");return}y({url:de,subscriptionId:p.id})}catch(de){(ne=window.showToast)==null||ne.call(window,de instanceof Error?de.message:s("common.copyFailed"),"error")}finally{X(null)}}function Qe(p){Z(p),w([]),C(0),v(1),xe(p,1),ue(p)}function Ve(p=B){return D?xe(D,p):Promise.resolve()}function Be(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var ne,de;$(p.id);try{await Ni(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([Ve(),W(_,P,j)])}catch(Le){(de=window.showToast)==null||de.call(window,Le instanceof Error?Le.message:s("subscription.unbindFailed"),"error")}finally{$(null)}}})}function $t(p){var K;(K=window.showConfirm)==null||K.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var ne,de;$(p.id);try{await ki(p.id),(ne=window.showToast)==null||ne.call(window,s("subscription.banSuccess"),"success"),await Promise.all([Ve(),W(_,P,j)])}catch(Le){(de=window.showToast)==null||de.call(window,Le instanceof Error?Le.message:s("subscription.banFailed"),"error")}finally{$(null)}}})}function et(p){const K=p.device_limit&&p.device_limit>0?String(p.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:p.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:K})]}),p.device_limit&&p.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(p.device_count/p.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Qe(p),children:[e.jsx(Wn,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function ht(p){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Lt(p.total_used)," / ",Lt(p.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${nc(p)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Lt(p.u),download:Lt(p.d)})})]})}function qt(p){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function Dt(p){return e.jsxs("div",{className:"subscription-link-stack",children:[qt(p),p.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.subscribe_url,onClick:()=>void ze(p),disabled:V===p.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void ze(p),disabled:V===p.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{children:V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function Et(p){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:V===p.id,onClick:()=>void Te(p),children:[e.jsx(Yn,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),Dt(p)]})}function Ft(p,K=!1,ne=""){const de=Le=>{he(),Le()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${K?"subscription-action-menu-fixed":""} ${ne}`.trim(),style:K&&Se?{top:Se.top,left:Se.left}:void 0,onMouseDown:Le=>Le.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>st(p)),children:[e.jsx(Ge,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>z(p)),children:[e.jsx(mi,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>de(()=>Qe(p)),children:[e.jsx(Wn,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>de(()=>void ze(p)),children:[e.jsx(ft,{size:14}),V===p.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:V===p.id,onClick:()=>de(()=>void Te(p)),children:[e.jsx(Yn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:f===p.id,onClick:()=>de(()=>at(p)),children:[e.jsx(ss,{size:14}),s("subscription.resetSecret")]})]})}function At(p,K="desktop"){return K==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id&&!Se?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>qe(p.id),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Ne===p.id&&!Se?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:he,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ne=>ne.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:p.user_email??s("subscription.userId",{id:p.user_id})}),e.jsxs("small",{children:["#",p.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:he,children:e.jsx(ke,{size:16})})]}),Ft(p,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Ne===p.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ne=>Ie(p.id,ne.currentTarget),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),Ne===p.id&&Se?oi.createPortal(Ft(p,!0),document.body):null]})}const wt=Math.ceil(g/Bs),Nt=Math.ceil(H/Gs),Ot=wt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||I,onClick:()=>void W(_-1,P,j),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:_,total:wt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:_>=wt||I,onClick:()=>void W(_+1,P,j),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null;return e.jsxs(We,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:g})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void W(_,P,j),children:[e.jsx(Re,{size:16}),s(I?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:j,onChange:p=>u(p.target.value),children:Jl.map(p=>e.jsx("option",{value:p,children:ec(p,s)},p))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input",value:P,onChange:p=>G(p.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:mt,children:s("common.clearFilter")})]}),L?e.jsx("div",{className:"form-error",children:L}):null,I&&l.length===0?e.jsx(Ee,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[l.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",p.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>se(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:p.user_id}),p.plan_id?` - ${s("subscription.planId",{id:p.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ws(p.status,s)})}),e.jsx("td",{children:ht(p)}),e.jsx("td",{children:et(p)}),e.jsx("td",{children:_t(p.expired_at,s("subscription.never"))}),e.jsx("td",{children:_t(p.updated_at,s("subscription.never"))}),e.jsx("td",{children:At(p)})]},p.id)),!I&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[l.map(p=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",p.id]}),e.jsx("strong",{className:"subscription-plan-name",children:p.plan_name??"-"}),p.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>se(p.user_email),title:s("subscription.viewUser"),children:p.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${p.status}`,children:Ws(p.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),ht(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),et(p)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:_t(p.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:_t(p.updated_at,s("subscription.never"))})]})]}),At(p,"mobile")]},p.id)),!I&&l.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),Ot,D?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Z(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:D.id})}),e.jsx("p",{children:D.user_email??s("subscription.userId",{id:D.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>Z(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[Q?e.jsx("div",{className:"form-error",children:Q}):null,R&&r.length===0?e.jsx(Ee,{label:s("subscription.slotsLoading")}):null,Et(D),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[r.map(p=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Ys(p.status)}`,children:Ks(p.status,s)})}),e.jsx("td",{children:p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>re(p.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsx("td",{children:_t(p.first_seen_at,"-")}),e.jsx("td",{children:_t(p.last_seen_at,"-")}),e.jsx("td",{children:Js(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:f===p.id,onClick:()=>Be(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:f===p.id,onClick:()=>$t(p),children:[e.jsx(It,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},p.id)),!R&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[r.map(p=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Ys(p.status)}`,children:Ks(p.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Xt,{value:p.uuid,onCopy:()=>re(p.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),p.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:p.hwid,onClick:()=>re(p.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:p.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:p.last_ip??"-"}),e.jsx("small",{children:p.first_ip?s("subscription.firstIp",{ip:p.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:p.user_agent??"",children:p.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:_t(p.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:_t(p.last_seen_at,"-")})]})]}),Js(p)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:f===p.id,onClick:()=>Be(p),children:[e.jsx(Zn,{size:14}),s("subscription.unbind")]}),p.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:f===p.id,onClick:()=>$t(p),children:[e.jsx(It,{size:14}),s("subscription.ban")]}):null]}):null]},p.id)),!R&&r.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),Nt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:B<=1||R,onClick:()=>void Ve(B-1),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:B,total:Nt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:B>=Nt||R,onClick:()=>void Ve(B+1),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null]})]})}):null,Ke?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>y(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:Ke.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>y(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Ke.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:Ke.url})]})]})}):null,N?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>U(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:N.id})}),e.jsx("p",{children:N.user_email??s("subscription.userId",{id:N.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>U(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:it,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:A.plan_id,onChange:p=>O(K=>({...K,plan_id:p.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),d.map(p=>e.jsxs("option",{value:p.id,children:["#",p.id," - ",p.name]},p.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.transfer_enable,onChange:p=>O(K=>({...K,transfer_enable:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.u,onChange:p=>O(K=>({...K,u:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.d,onChange:p=>O(K=>({...K,d:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:A.device_limit,onChange:p=>O(K=>({...K,device_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:A.speed_limit,onChange:p=>O(K=>({...K,speed_limit:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:A.expired_at,onChange:p=>O(K=>({...K,expired_at:p.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:A.status,onChange:p=>O(K=>({...K,status:p.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:A.auto_renewal,onChange:p=>O(K=>({...K,auto_renewal:p.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:A.name_sni,onChange:p=>O(K=>({...K,name_sni:p.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:A.network_settings,onChange:p=>O(K=>({...K,network_settings:p.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:A.remarks,onChange:p=>O(K=>({...K,remarks:p.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:f===N.id,children:f===N.id?s("common.processing"):s("common.save")})]})]})]})}):null,ie?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>we(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:p=>p.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:ie.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>we(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:le,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:ie.user_email??"",children:ie.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",ie.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:pe(ie.plan_id),children:pe(ie.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:Fe.period,onChange:p=>Ae(K=>({...K,period:p.target.value})),children:Zl.map(p=>e.jsx("option",{value:p,children:tc(p,s)},p))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Fe.total_amount,onChange:p=>Ae(K=>({...K,total_amount:p.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>we(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:Me,children:s(Me?"common.processing":"common.save")})]})]})]})}):null]})}const Zs=15,ic=["email","user_id","node","hwid","user_agent","last_ip"];function Yt(n){return n?new Date(n*1e3).toLocaleString():"-"}function St(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let l=t,a=0;for(;l>=1024&&a<s.length-1;)l/=1024,a+=1;return`${l>=10||a===0?l.toFixed(0):l.toFixed(2)} ${s[a]}`}function ac(n){return["user_id","subscription_id","node","node_type","node_id"].includes(n)?"=":"like"}function oc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");default:return""}}function Qs(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function un(n){return(n.online_ips??[]).join(", ")||"-"}function mn(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function rc(n){return String(n.hwid??"").trim()!==""}function lc(n){var d,c,g;const t=new URLSearchParams(n),s=(d=t.get("node_type"))==null?void 0:d.trim(),l=(c=t.get("node_id"))==null?void 0:c.trim();if(s&&l)return{field:"node",value:`${s}:${l}`};if(l)return{field:"node",value:l};const a=["node","hwid","user_agent","last_ip","email","user_id"];for(const b of a){const _=(g=t.get(b))==null?void 0:g.trim();if(_)return{field:b,value:_}}return null}function cc(){const n=Ue(),t=tn(),{t:s}=me(),[l,a]=o.useState([]),[d,c]=o.useState(0),[g,b]=o.useState(1),[_,h]=o.useState("email"),[j,u]=o.useState(""),[P,G]=o.useState(!0),[I,S]=o.useState(""),[L,T]=o.useState(null),[N,U]=o.useState(null),[A,O]=o.useState(null),f=o.useCallback(async(m=1,Q="",q="email")=>{G(!0),S("");try{const V=Q.trim()?[{key:q,condition:ac(q),value:Q.trim()}]:void 0,X=await wi(m,Zs,V);a(X.data),c(X.total),b(m)}catch(V){S(V instanceof Error?V.message:s("device.loadFailed"))}finally{G(!1)}},[s]);o.useEffect(()=>{if(!He()){n.replace("/login");return}const m=lc(t.search);if(m){h(m.field),u(m.value),f(1,m.value,m.field);return}f()},[f,n,t.search]),o.useEffect(()=>{if(A===null)return;function m(q){const V=q.target;V!=null&&V.closest(".device-action-wrap")||O(null)}function Q(q){q.key==="Escape"&&O(null)}return document.addEventListener("pointerdown",m),document.addEventListener("keydown",Q),()=>{document.removeEventListener("pointerdown",m),document.removeEventListener("keydown",Q)}},[A]);function $(m){m.preventDefault(),f(1,j,_)}function D(){if(u(""),t.search){n.replace("/device");return}f(1,"",_)}async function Z(m){var q;if(!m.hwid)return;const Q=await zt(m.hwid);(q=window.showToast)==null||q.call(window,s(Q?"device.copySuccess":"common.copyFailed"),Q?"success":"error")}async function r(m){var q;const Q=await zt(m.uuid);(q=window.showToast)==null||q.call(window,s(Q?"device.copyUuidSuccess":"common.copyFailed"),Q?"success":"error")}function w(m){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var q,V;T(m.id);try{await Ni(m.id),(q=window.showToast)==null||q.call(window,s("device.unbindSuccess"),"success"),await f(g,j,_)}catch(X){(V=window.showToast)==null||V.call(window,X instanceof Error?X.message:s("device.unbindFailed"),"error")}finally{T(null)}}})}function H(m){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var q,V;T(m.id);try{await ki(m.id),(q=window.showToast)==null||q.call(window,s("device.banSuccess"),"success"),await f(g,j,_)}catch(X){(V=window.showToast)==null||V.call(window,X instanceof Error?X.message:s("device.banFailed"),"error")}finally{T(null)}}})}function C(m){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.resetConfirm",{user:m.user_email??`#${m.user_id}`}),onConfirm:async()=>{var q,V;U(m.user_id);try{await Lo(m.user_id),(q=window.showToast)==null||q.call(window,s("device.resetSuccess"),"success"),await f(g,j,_)}catch(X){(V=window.showToast)==null||V.call(window,X instanceof Error?X.message:s("device.resetFailed"),"error")}finally{U(null)}}})}function B(m){O(null),m()}function v(m,Q){const q=Q==="mobile"?-m.id:m.id,V=A===q,X=rc(m);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${V?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>O(V?null:q),children:[s("device.action")," ",e.jsx(yt,{size:14})]}),V?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[X?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:L===m.id,onClick:()=>B(()=>w(m)),children:[e.jsx(Zn,{size:14}),s("device.unbind")]}),m.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:L===m.id,onClick:()=>B(()=>H(m)),children:[e.jsx(It,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===m.user_id,onClick:()=>B(()=>C(m)),children:[e.jsx(ja,{size:14}),s("device.resetUser")]})]}):null]})}const R=Math.ceil(d/Zs);return e.jsxs(We,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:d})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:P,onClick:()=>void f(g,j,_),children:[e.jsx(Re,{size:16}),s(P?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:$,children:[e.jsx("select",{className:"config-input filter-select",value:_,onChange:m=>h(m.target.value),children:ic.map(m=>e.jsx("option",{value:m,children:oc(m,s)},m))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(Sn,{size:16}),e.jsx("input",{className:"config-input",value:j,onChange:m=>u(m.target.value),placeholder:s(_==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(en,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:D,children:s("device.clear")})]}),I?e.jsx("div",{className:"form-error",children:I}):null,P&&l.length===0?e.jsx(Ee,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[l.map(m=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:m.user_email??"-"}),e.jsxs("small",{children:["ID: ",m.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[m.plan_name??"-",m.user_plan_id?` #${m.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Qs(m.status,s)}),e.jsxs("span",{className:`online-badge ${m.is_online?"online":"offline"}`,children:[m.is_online?e.jsx(ys,{size:14}):e.jsx(fs,{size:14}),m.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Xt,{value:m.uuid,onCopy:()=>r(m),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),m.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:m.hwid,onClick:()=>Z(m),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:m.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:m.user_agent??"",children:m.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${m.last_ip??"-"} / ${m.first_ip??"-"}`,children:[m.last_ip??"-",m.first_ip?` (${m.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${St(m.device_upload)} / ${s("device.download")}: ${St(m.device_download)}`,children:[St(m.device_used_traffic)," / ",s("device.upload"),": ",St(m.device_upload)," / ",s("device.download"),": ",St(m.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${un(m)} / ${mn(m)}`,children:[s("device.onlineIps"),": ",un(m)," / ",s("device.onlineNodes"),": ",mn(m)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Yt(m.first_seen_at)," / ",s("device.lastSeen"),": ",Yt(m.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:v(m,"mobile")})]},m.id)),!P&&l.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[l.map(m=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:m.user_email??"-"}),e.jsxs("small",{children:["ID: ",m.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[m.plan_name??"-",m.user_plan_id?` #${m.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Qs(m.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:St(m.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",St(m.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",St(m.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${m.is_online?"online":"offline"}`,children:[m.is_online?e.jsx(ys,{size:14}):e.jsx(fs,{size:14}),m.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:un(m),children:[s("device.onlineIps"),": ",un(m)]}),e.jsxs("small",{title:mn(m),children:[s("device.onlineNodes"),": ",mn(m)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Yt(m.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Xt,{value:m.uuid,onCopy:()=>r(m),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),m.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:m.hwid,onClick:()=>Z(m),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:m.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:m.user_agent??"",children:m.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:m.last_ip??"-"}),e.jsx("small",{children:m.first_ip?`${s("device.firstIp")}: ${m.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Yt(m.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Yt(m.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:v(m,"desktop")})]},m.id)),!P&&l.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),R>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:g<=1||P,onClick:()=>void f(g-1,j,_),children:[e.jsx(vt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:g,total:R})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:g>=R||P,onClick:()=>void f(g+1,j,_),children:[s("device.next"),e.jsx(jt,{size:14})]})]}):null]})]})}const dc={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function ds(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return ds(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Xs(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:ds(n.plan_id)}:{...dc}}function Hn(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function pc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function uc(n){return Number(n)===1}function Vs(n,t,s){if(!n.length)return s("webcon.allPlans");const l=new Map(t.map(a=>[Number(a.id),a.name]));return n.map(a=>l.get(a)??`#${a}`).join(", ")}function Ct(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function mc(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState([]),[c,g]=o.useState(null),[b,_]=o.useState(!0),[h,j]=o.useState(!1),[u,P]=o.useState(null),[G,I]=o.useState(""),S=o.useCallback(async()=>{_(!0),I("");try{const[f,$]=await Promise.all([Jo(),Pt()]);l(f),d($)}catch(f){I(f instanceof Error?f.message:t("webcon.toastLoadFailed"))}finally{_(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}S()},[S,n]);const L=o.useMemo(()=>a.map(f=>({id:Number(f.id),name:f.name})),[a]);function T(f,$){g(D=>D&&{...D,[f]:$})}function N(f,$){g(D=>{if(!D)return D;const Z=$?Array.from(new Set([...D.plan_ids,f])):D.plan_ids.filter(r=>r!==f);return{...D,plan_ids:Z}})}async function U(f){var D,Z;if(f.preventDefault(),!c)return;const $=Hn(c.domain);j(!0),I("");try{await Zo({id:c.id,email:c.email.trim(),domain:$,title:c.title.trim(),description:c.description.trim()||null,logo:c.logo.trim()||null,background_url:c.background_url.trim()||null,custom_html:c.custom_html||null,plan_ids:c.plan_ids,plan_id:c.plan_ids}),g(null),(D=window.showToast)==null||D.call(window,t("webcon.toastSaveSuccess"),"success"),await S()}catch(r){const w=r instanceof Error?r.message:t("webcon.toastSaveFailed");I(w),(Z=window.showToast)==null||Z.call(window,w,"error")}finally{j(!1)}}async function A(f){var $,D;P(f.id);try{await Xo(f.id),($=window.showToast)==null||$.call(window,t("webcon.toastToggleSuccess"),"success"),await S()}catch(Z){const r=Z instanceof Error?Z.message:t("webcon.toastToggleFailed");I(r),(D=window.showToast)==null||D.call(window,r,"error")}finally{P(null)}}function O(f){var $;($=window.showConfirm)==null||$.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var D,Z;P(f.id),I("");try{await Qo(f.id),(D=window.showToast)==null||D.call(window,t("webcon.toastDeleteSuccess"),"success"),await S()}catch(r){const w=r instanceof Error?r.message:t("webcon.toastDeleteFailed");I(w),(Z=window.showToast)==null||Z.call(window,w,"error")}finally{P(null)}}})}return e.jsxs(We,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void S(),children:[e.jsx(Re,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(Xs()),children:[e.jsx(rt,{size:16}),t("webcon.add")]})]})]}),G?e.jsx("div",{className:"form-error",children:G}):null,b&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(f=>{var D;const $=ds(f.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",f.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${uc(f.status)?"active":""}`,type:"button",disabled:u===f.id,onClick:()=>void A(f),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:f.email??"-"}),e.jsx("small",{children:Number(f.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:f.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((D=window.settings)==null?void 0:D.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:f.title||"-"}),e.jsx("small",{children:f.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(da,{size:13}),f.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(nn,{size:13}),f.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:Vs($,L,t)}),e.jsx("small",{children:$.length?t("webcon.selectedCount",{count:$.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:pc(f.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(Xs(f)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:u===f.id,onClick:()=>O(f),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},f.id)}),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),c?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>g(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:f=>f.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:c.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>g(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:U,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:c.email,onChange:f=>T("email",f.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:c.domain,onChange:f=>T("domain",f.target.value),onBlur:f=>T("domain",Hn(f.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:c.title,onChange:f=>T("title",f.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.description")),e.jsx("input",{className:"config-input",value:c.description,onChange:f=>T("description",f.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:c.logo,onChange:f=>T("logo",f.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[Ct(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:c.background_url,onChange:f=>T("background_url",f.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[Ct(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[L.map(f=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:c.plan_ids.includes(f.id),onChange:$=>N(f.id,$.target.checked)}),e.jsx("span",{children:f.name})]},f.id)),L.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[Ct(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:c.custom_html,onChange:f=>T("custom_html",f.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:c.logo?e.jsx("img",{src:c.logo,alt:""}):e.jsx(ya,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:c.title||t("webcon.previewTitle")}),e.jsx("span",{children:Hn(c.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(is,{size:12})," ",Vs(c.plan_ids,L,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:h,children:[e.jsx(lt,{size:16}),t(h?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ei(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Un(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function hc(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[b,_]=o.useState(!1),[h,j]=o.useState(""),[u,P]=o.useState(""),G=o.useCallback(async()=>{g(!0),j("");try{l(await Do())}catch(T){j(T instanceof Error?T.message:t("notice.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function I(T){var N,U;if(T.preventDefault(),!!a){_(!0),j(""),P("");try{const A=a.tags?a.tags.split(",").map(O=>O.trim()).filter(Boolean):[];await Fo({id:a.id,title:a.title,content:a.content,img_url:a.img_url||null,tags:A.length?A:null}),d(null),(N=window.showToast)==null||N.call(window,t("notice.saveSuccess"),"success"),await G()}catch(A){(U=window.showToast)==null||U.call(window,A instanceof Error?A.message:t("notice.saveFailed"),"error")}finally{_(!1)}}}async function S(T){var N;try{await Oo(T),await G()}catch(U){(N=window.showToast)==null||N.call(window,U instanceof Error?U.message:t("notice.toggleFailed"),"error")}}async function L(T){var N;(N=window.showConfirm)==null||N.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var U,A;try{await Ao(T),(U=window.showToast)==null||U.call(window,t("notice.deleteSuccess"),"success"),await G()}catch(O){(A=window.showToast)==null||A.call(window,O instanceof Error?O.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:c,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(Un()),children:[e.jsx(rt,{size:16}),t("notice.addNotice")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,c&&s.length===0?e.jsx(Ee,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(T=>{var N;return e.jsxs("tr",{children:[e.jsx("td",{children:T.id}),e.jsx("td",{children:e.jsx("strong",{children:T.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void S(T.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((N=T.tags)==null?void 0:N.map((U,A)=>e.jsx("span",{className:"tag",children:U},A)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:ei(T.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>d(Un(T)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(T.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},T.id)}),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(T=>e.jsxs("div",{className:`notice-mobile-card ${T.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",T.id]})}),e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void S(T.id),"aria-label":T.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:T.title}),e.jsx("div",{className:"notice-tags",children:T.tags&&T.tags.length>0?T.tags.map((N,U)=>e.jsx("span",{className:"tag-badge",children:N},U)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",ei(T.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>d(Un(T)),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void L(T.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},T.id)),!c&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:I,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:T=>d({...a,title:T.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:a.content,onChange:T=>d({...a,content:T.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:a.img_url,onChange:T=>d({...a,img_url:T.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:a.tags,onChange:T=>d({...a,tags:T.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(lt,{size:16}),t(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function qn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function xc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,l,a)=>a.slice(l+t.length,l+t.length+2)==="//"?t:`${s}: `):""}const ti=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Bn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function bc(){var R;const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!1),[b,_]=o.useState(null),[h,j]=o.useState(""),[u,P]=o.useState(!0),[G,I]=o.useState(!1),[S,L]=o.useState(!1),[T,N]=o.useState(""),U=o.useRef(null),[A,O]=o.useState([]),[f,$]=o.useState(null),D=o.useCallback(async()=>{P(!0),N("");try{l(await Ro())}catch(m){N(m instanceof Error?m.message:"Load failed")}finally{P(!1)}},[]);o.useEffect(()=>{if(!He()){n.replace("/login");return}D(),Pt().then(m=>{m&&O(m)}).catch(()=>{})},[D,n]),o.useEffect(()=>{var m;(m=U.current)==null||m.scrollIntoView({behavior:"smooth"})},[a]);async function Z(m){var Q;_(m),j(""),d(null),$(null),g(!0);try{const q=await Tn(m);if(d(q),q&&q.user_id)try{const V=await Xn(q.user_id);V&&V.data&&$(V.data)}catch(V){console.error("Failed to load user info:",V)}}catch{(Q=window.showToast)==null||Q.call(window,"Failed to load message thread","error")}finally{g(!1)}}async function r(m){var Q,q;if(m.preventDefault(),!(!b||!h.trim())){I(!0),N("");try{await Ho(b,h),j(""),(Q=window.showToast)==null||Q.call(window,"Reply sent!","success");try{const V=await Tn(b);d(V)}catch{}await D()}catch(V){(q=window.showToast)==null||q.call(window,V instanceof Error?V.message:"Reply failed","error")}finally{I(!1)}}}async function w(m){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:"Close this ticket?",onConfirm:async()=>{var q,V;N("");try{await Uo(m),(q=window.showToast)==null||q.call(window,"Ticket closed!","success"),b===m&&(_(null),d(null)),await D()}catch(X){N(X instanceof Error?X.message:"Close failed"),(V=window.showToast)==null||V.call(window,X instanceof Error?X.message:"Close failed","error")}}})}function H(){var V,X,ie;if(!a||!f)return;const m=Number(a.withdraw_amount??0),Q=Number(f.commission_balance??0);if(a.level!==3||m<=0){(V=window.showToast)==null||V.call(window,t("ticket.noWithdrawAmount"),"error");return}if(Q<m){(X=window.showToast)==null||X.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const q=`${Je(m)} ${t("ticket.currencyUnit")}`;(ie=window.showConfirm)==null||ie.call(window,{message:t("ticket.confirmCommissionMessage",{amount:q}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var we,Fe,Ae;L(!0),N("");try{const _e=((we=(await qo(a.id)).data)==null?void 0:we.amount)??m,Ne=`${Je(_e)} ${t("ticket.currencyUnit")}`,be=await Tn(a.id);if(d(be),be!=null&&be.user_id){const Se=await Xn(be.user_id);$(Se.data)}await D(),(Fe=window.showToast)==null||Fe.call(window,t("ticket.commissionConfirmSuccess",{amount:Ne}),"success")}catch(Me){(Ae=window.showToast)==null||Ae.call(window,Me instanceof Error?Me.message:t("ticket.commissionConfirmFailed"),"error")}finally{L(!1)}}})}const C=Number((f==null?void 0:f.commission_balance)??0),B=Number((a==null?void 0:a.withdraw_amount)??0),v=(a==null?void 0:a.level)===3&&B>0&&C>=B;return e.jsxs(We,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:u,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),T?e.jsx("div",{className:"form-error",children:T}):null,u&&s.length===0?e.jsx(Ee,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(m=>{const Q=ti(m.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:m.id}),e.jsx("td",{children:e.jsx("strong",{children:m.subject})}),e.jsxs("td",{children:["#",m.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Bn(m.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${Q.cls}`,children:Q.label})}),e.jsx("td",{children:m.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:qn(m.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:m.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(m.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(m.id),children:[e.jsx(Kn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(m.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})})]},m.id)}),!u&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(m=>{const Q=ti(m.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:m.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Bn(m.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",m.id]})]}),e.jsx("span",{className:`status-pill ${Q.cls}`,children:Q.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",m.user_id]})]}),e.jsx("span",{children:m.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:qn(m.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:m.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(m.id),children:[e.jsx(Jt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(m.id),children:[e.jsx(Kn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(m.id),children:[e.jsx(Jt,{size:14}),t("ticket.viewHistory")]})})]},m.id)}),!u&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),b!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:a?`${t("ticket.ticketDetail")}: ${a.subject}`:`${t("ticket.ticketDetail")} #${b}`}),e.jsxs("p",{children:[t("ticket.user"),": #",a==null?void 0:a.user_id," | ",t("ticket.level"),": ",a!=null?Bn(a.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{_(null),d(null)},children:e.jsx(ke,{size:18})})]}),f&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:f.email,children:f.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((R=A.find(m=>m.id===f.plan_id))==null?void 0:R.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Je(f.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Je(f.commission_balance)," ",t("ticket.currencyUnit")]})]}),(a==null?void 0:a.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:B>0?`${Je(B)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:f.expired_at?new Date(f.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(a==null?void 0:a.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:H,disabled:S||!v,children:[e.jsx(ea,{size:14}),t(S?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),c?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(Ee,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[a!=null&&a.message&&a.message.length>0?a.message.map(m=>{const Q=m.is_me,q=Q?m.user_email||t("ticket.staff"):`${t("ticket.user")} #${m.user_id}`;return e.jsxs("div",{className:`chat-message ${Q?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:xc(m.message)}),e.jsxs("div",{className:"chat-meta",children:[q," • ",qn(m.created_at)]})]},m.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:U})]}),(a==null?void 0:a.status)===0?e.jsx("form",{className:"modal-form",onSubmit:r,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:h,onChange:m=>j(m.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:G||!h.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(ui,{size:14}),G?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function ni(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const si={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ii(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function gc(){const n=Ue(),{t}=me(),[s,l]=o.useState([]),[a,d]=o.useState(null),[c,g]=o.useState(!0),[b,_]=o.useState(!1),[h,j]=o.useState(""),[u,P]=o.useState(""),G=o.useCallback(async()=>{g(!0),j("");try{l(await Bo())}catch(N){j(N instanceof Error?N.message:t("knowledge.loadFailed"))}finally{g(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);async function I(N){var U;try{const A=await Go(N.id);d(ii(A))}catch(A){(U=window.showToast)==null||U.call(window,A instanceof Error?A.message:t("knowledge.detailFailed"),"error")}}async function S(N){var U,A;if(N.preventDefault(),!!a){_(!0),j(""),P("");try{await Wo({id:a.id,category:a.category,title:a.title,body:a.body,language:a.language||null,sort:a.sort?Number(a.sort):null}),d(null),(U=window.showToast)==null||U.call(window,t("knowledge.saveSuccess"),"success"),await G()}catch(O){(A=window.showToast)==null||A.call(window,O instanceof Error?O.message:t("knowledge.saveFailed"),"error")}finally{_(!1)}}}async function L(N){var U;try{await Yo(N),await G()}catch(A){(U=window.showToast)==null||U.call(window,A instanceof Error?A.message:t("knowledge.toggleFailed"),"error")}}async function T(N){var U;(U=window.showConfirm)==null||U.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var A,O;try{await Ko(N),(A=window.showToast)==null||A.call(window,t("knowledge.deleteSuccess"),"success"),await G()}catch(f){(O=window.showToast)==null||O.call(window,f instanceof Error?f.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:c,children:[e.jsx(Re,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>d(ii()),children:[e.jsx(rt,{size:16}),t("knowledge.addArticle")]})]})]}),h?e.jsx("div",{className:"form-error",children:h}):null,u?e.jsx("div",{className:"form-success",children:u}):null,c&&s.length===0?e.jsx(Ee,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(N=>e.jsxs("tr",{children:[e.jsx("td",{children:N.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:N.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:N.title})}),e.jsx("td",{children:N.language&&si[N.language]||N.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void L(N.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:N.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:ni(N.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void I(N),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void T(N.id),children:[e.jsx(Ze,{size:14}),t("common.delete")]})]})})]},N.id)),!c&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(N=>e.jsxs("div",{className:`knowledge-mobile-card ${N.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",N.id]}),N.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",N.sort]})]}),e.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void L(N.id),"aria-label":N.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:N.title}),e.jsxs("div",{className:"card-meta",children:[N.category&&e.jsx("span",{className:"category-badge",children:N.category}),N.language&&e.jsx("span",{className:"lang-badge",children:si[N.language]||N.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",ni(N.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void I(N),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void T(N.id),children:[e.jsx(Ze,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},N.id)),!c&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),a?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:a.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>d(null),children:e.jsx(ke,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:S,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:a.category,onChange:N=>d({...a,category:N.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:a.title,onChange:N=>d({...a,title:N.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:a.body,onChange:N=>d({...a,body:N.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:a.language,onChange:N=>d({...a,language:N.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:a.sort,onChange:N=>d({...a,sort:N.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>d(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(lt,{size:16}),t(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function fc(){const n=Ue(),{t}=me(),[s,l]=o.useState(null),[a,d]=o.useState(null),[c,g]=o.useState(null),[b,_]=o.useState(""),[h,j]=o.useState(!0),[u,P]=o.useState(""),G=o.useCallback(async()=>{j(!0),P("");try{const[S,L,T,N]=await Promise.all([Vo().catch(()=>({data:{}})),nr().catch(()=>({data:{}})),sr().catch(()=>({data:[]})),ir().catch(()=>({data:""}))]);l(S.data),d(L.data),g(T.data),_(typeof N.data=="string"?N.data:"")}catch(S){P(S instanceof Error?S.message:t("queue.toastLoadFailed"))}finally{j(!1)}},[t]);o.useEffect(()=>{if(!He()){n.replace("/login");return}G()},[G,n]);function I(S,L,T){return S?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[T," ",L]}),e.jsx("div",{className:"queue-grid",children:Object.entries(S).map(([N,U])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:N}),e.jsx("strong",{children:typeof U=="object"?JSON.stringify(U):String(U??"—")})]},N))})]}):null}return e.jsxs(We,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:h,children:[e.jsx(Re,{size:16}),t("common.refresh")]})})]}),u?e.jsx("div",{className:"form-error",children:u}):null,h?e.jsx(Ee,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[I(s,t("queue.systemStatus"),e.jsx(bn,{size:18})),I(a,t("queue.queueStats"),e.jsx(is,{size:18})),c&&c.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Ji,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(c,null,2)})]}):null,b?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(ia,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}function vc(){return e.jsx(Da,{children:e.jsxs(Ri,{children:[e.jsx(Oe,{path:"/login",element:e.jsx(vr,{})}),e.jsx(Oe,{path:"/dashboard",element:e.jsx(Sr,{})}),e.jsx(Oe,{path:"/config/system",element:e.jsx(Dr,{})}),e.jsx(Oe,{path:"/config/payment",element:e.jsx(Or,{})}),e.jsx(Oe,{path:"/config/theme",element:e.jsx(Ur,{})}),e.jsx(Oe,{path:"/server/manage",element:e.jsx(Sl,{})}),e.jsx(Oe,{path:"/server/group",element:e.jsx(Cl,{})}),e.jsx(Oe,{path:"/server/route",element:e.jsx(Pl,{})}),e.jsx(Oe,{path:"/plan",element:e.jsx(Ll,{})}),e.jsx(Oe,{path:"/order",element:e.jsx(Fl,{})}),e.jsx(Oe,{path:"/coupon",element:e.jsx(Al,{})}),e.jsx(Oe,{path:"/giftcard",element:e.jsx(Rl,{})}),e.jsx(Oe,{path:"/user",element:e.jsx(Kl,{})}),e.jsx(Oe,{path:"/subscription",element:e.jsx(sc,{})}),e.jsx(Oe,{path:"/device",element:e.jsx(cc,{})}),e.jsx(Oe,{path:"/webcon",element:e.jsx(mc,{})}),e.jsx(Oe,{path:"/notice",element:e.jsx(hc,{})}),e.jsx(Oe,{path:"/ticket",element:e.jsx(bc,{})}),e.jsx(Oe,{path:"/knowledge",element:e.jsx(gc,{})}),e.jsx(Oe,{path:"/queue",element:e.jsx(fc,{})}),e.jsx(Oe,{path:"/",element:e.jsx(us,{to:"/dashboard",replace:!0})}),e.jsx(Oe,{path:"*",element:e.jsx(us,{to:"/dashboard",replace:!0})})]})})}export{vc as default};
