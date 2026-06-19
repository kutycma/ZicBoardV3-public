import{b as a,j as e,c as Li,u as Xt,L as Ii,r as ni,a as Fi,R as Ae,N as ls}from"./index.js";const Vn=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],si="admin-locale",Hn="vi-VN",Ai="/assets/adminzic",ii=a.createContext(null);function Oi(){if(typeof window>"u")return Hn;const n=localStorage.getItem(si);return n&&Vn.some(t=>t.code===n)?n:Hn}function Ri(n,t){return t?Object.entries(t).reduce((s,[r,i])=>s.replaceAll(`{${r}}`,String(i)),n):n}function Hi(n){return new Promise((t,s)=>{var l;if(typeof window>"u"){t({});return}const r=(l=window.AdminNextI18n)==null?void 0:l[n];if(r){t(r);return}const i=document.querySelector(`script[data-admin-next-locale="${n}"]`);if(i){i.addEventListener("load",()=>{var f;t(((f=window.AdminNextI18n)==null?void 0:f[n])??{})}),i.addEventListener("error",s);return}const c=document.createElement("script");c.src=`${Ai}/i18n/${n}.js`,c.async=!0,c.dataset.adminNextLocale=n,c.onload=()=>{var f;return t(((f=window.AdminNextI18n)==null?void 0:f[n])??{})},c.onerror=s,document.head.appendChild(c)})}function Ui({children:n}){const[t,s]=a.useState(Hn),[r,i]=a.useState({}),[c,l]=a.useState(!0);a.useEffect(()=>{s(Oi())},[]);const f=a.useCallback(x=>{s(x),typeof window<"u"&&localStorage.setItem(si,x)},[]);a.useEffect(()=>{let x=!0;return l(!0),Hi(t).then(N=>{x&&i(N)}).finally(()=>{x&&l(!1)}),()=>{x=!1}},[t]);const b=a.useCallback((x,N)=>Ri(r[x]??x,N),[r]),S=a.useMemo(()=>({locale:t,loading:c,setLocale:f,t:b}),[t,c,f,b]);return e.jsx(ii.Provider,{value:S,children:n})}function he(){const n=a.useContext(ii);if(!n)throw new Error("useI18n must be used inside I18nProvider");return n}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),ai=(...n)=>n.filter((t,s,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===s).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Bi={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=a.forwardRef(({color:n="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:r,className:i="",children:c,iconNode:l,...f},b)=>a.createElement("svg",{ref:b,...Bi,width:t,height:t,stroke:n,strokeWidth:r?Number(s)*24/Number(t):s,className:ai("lucide",i),...f},[...l.map(([S,x])=>a.createElement(S,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=(n,t)=>{const s=a.forwardRef(({className:r,...i},c)=>a.createElement(Gi,{ref:c,iconNode:t,className:ai(`lucide-${qi(n)}`,r),...i}));return s.displayName=`${n}`,s};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=V("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=V("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=V("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=V("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=V("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=V("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=V("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=V("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=V("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=V("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=V("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=V("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=V("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=V("CircleDollarSign",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=V("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=V("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=V("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=V("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=V("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=V("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=V("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const na=V("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=V("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ia=V("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=V("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=V("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=V("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=V("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=V("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=V("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=V("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ra=V("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const la=V("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=V("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=V("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ca=V("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=V("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const da=V("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=V("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=V("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=V("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=V("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=V("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=V("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ha=V("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=V("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=V("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=V("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=V("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=V("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=V("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=V("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=V("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=V("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=V("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=V("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=V("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=V("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=V("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=V("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=V("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=V("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=V("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=V("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=V("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=V("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=V("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=V("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=V("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=V("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=V("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=V("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=V("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=V("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=V("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=V("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=V("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=V("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=V("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),$a=a.createContext(null);function Ea({children:n}){const[t,s]=a.useState([]),[r,i]=a.useState(null),c=a.useCallback((S,x="success")=>{const N=Math.random().toString(36).substring(2,9);s(m=>[...m,{id:N,message:S,type:x}]),setTimeout(()=>{s(m=>m.filter($=>$.id!==N))},5e3)},[]),l=a.useCallback(S=>{i(S)},[]);a.useEffect(()=>{typeof window<"u"&&(window.showToast=c,window.showConfirm=l)},[c,l]);const f=async()=>{if(r){try{await r.onConfirm()}catch(S){console.error("Error in onConfirm:",S)}i(null)}},b=()=>{r&&(r.onCancel&&r.onCancel(),i(null))};return e.jsxs($a.Provider,{value:{showToast:c,showConfirm:l},children:[n,e.jsx("div",{className:"toast-container",children:t.map(S=>{let x=la;return S.type==="success"&&(x=oi),S.type==="error"&&(x=Zi),S.type==="warning"&&(x=Wn),e.jsxs("div",{className:`toast-card toast-${S.type}`,children:[e.jsx("div",{className:"toast-icon",children:e.jsx(x,{size:18})}),e.jsx("div",{className:"toast-message",children:S.message}),e.jsx("button",{className:"toast-close",onClick:()=>s(N=>N.filter(m=>m.id!==S.id)),children:e.jsx(Ne,{size:14})})]},S.id)})}),r&&e.jsx("div",{className:"confirm-backdrop",onClick:b,children:e.jsxs("div",{className:"confirm-card",onClick:S=>S.stopPropagation(),children:[e.jsxs("div",{className:"confirm-header",children:[e.jsx("div",{className:"confirm-icon",children:e.jsx(Wn,{size:22})}),e.jsx("h3",{className:"confirm-title",children:r.title||"Confirmation"})]}),e.jsx("p",{className:"confirm-message",children:r.message}),e.jsxs("div",{className:"confirm-actions",children:[e.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:r.cancelText||"Cancel"}),e.jsx("button",{className:"confirm-btn-ok",onClick:f,children:r.confirmText||"Confirm"})]})]})}),e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ma({children:n}){return e.jsx(Ui,{children:e.jsx(Ea,{children:n})})}const Da="/api/v3";var ti;const J=typeof window<"u"&&((ti=window.settings)==null?void 0:ti.secure_path)||"ZicFree123",pn="authorization";function La(n){if(typeof window>"u"||typeof document>"u")return null;const t=n+"=",s=document.cookie.split(";");for(let r=0;r<s.length;r++){let i=s[r];for(;i.charAt(0)===" ";)i=i.substring(1,i.length);if(i.indexOf(t)===0)try{const c=i.substring(t.length,i.length),l=decodeURIComponent(c),f=JSON.parse(l);return f&&typeof f=="object"&&"value"in f?f.value:l}catch{try{return decodeURIComponent(i.substring(t.length,i.length))}catch{return i.substring(t.length,i.length)}}}return null}function Ia(n,t,s=36500){if(typeof window>"u"||typeof document>"u")return;const i=JSON.stringify({site:"ZicNet",value:t}),c=window.location.protocol==="https:",l=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",f=new Date;f.setTime(f.getTime()+s*24*60*60*1e3);const b=`expires=${f.toUTCString()}`,S=l?"":`domain=${window.location.hostname};`;let x=`${n}=${encodeURIComponent(i)}; ${b}; ${S} path=/`;c&&(x+="; secure"),x+="; SameSite=Lax",document.cookie=x;try{window.localStorage.setItem(`cookie_${n}`,i)}catch{}}function Fa(n){if(typeof window>"u"||typeof document>"u")return;const t=window.location.hostname,s=["",t,t.startsWith(".")?t:`.${t}`],r=["/","/dashboard","/user","/admin"];s.forEach(i=>{r.forEach(c=>{const l=i?` domain=${i};`:"";document.cookie=`${n}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${l} path=${c};`})});try{window.localStorage.removeItem(`cookie_${n}`),window.localStorage.removeItem(`cookie_${n}_failure`)}catch{}}function pi(){if(typeof window>"u")return null;let n=window.localStorage.getItem(pn);if(!n&&(n=window.localStorage.getItem("auth_data"),n))try{window.localStorage.setItem(pn,n)}catch{}if(!n&&(n=La("auth_data"),n))try{window.localStorage.setItem(pn,n),window.localStorage.setItem("auth_data",n)}catch{}return n}function Aa(n,t){const s=n.startsWith("/")?n:`/${n}`,r=new URL(`${Da}${s}`,window.location.origin);return Object.entries(t??{}).forEach(([i,c])=>{c!==void 0&&r.searchParams.set(i,String(c))}),r.toString()}function He(){return!!pi()}function Oa(n){typeof window>"u"||(window.localStorage.setItem(pn,n),window.localStorage.setItem("auth_data",n),Ia("auth_data",n,36500))}function ui(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(i=>{window.localStorage.removeItem(i)}),["token","auth_data","authorization","vuex","user","auth"].forEach(i=>{window.sessionStorage.removeItem(i)});const s=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(i=>{s.forEach(c=>{document.cookie=`${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${c};`}),document.cookie=`${i}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Fa(i)})}async function K(n,t={}){const s={},r=t.method??"GET";if(r!=="GET"&&(s["content-type"]="application/json"),t.auth!==!1){const b=pi();b&&(s.authorization=b)}const i=await fetch(Aa(n,t.params),{method:r,headers:s,body:r==="GET"?void 0:JSON.stringify(t.body??{}),cache:"no-store"}),l=(i.headers.get("content-type")||"").includes("application/json"),f=l?await i.json():await i.text();if(!i.ok){const b=typeof f=="object"&&f&&"message"in f?String(f.message):`Request failed with status ${i.status}`,S=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(b);throw(i.status===401||i.status===403&&!S)&&t.auth!==!1&&(ui(),window.location.hash="/login"),new Error(b)}if(!l&&typeof f=="string"&&(f.trim().startsWith("<!DOCTYPE html")||f.trim().startsWith("<html")||f.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return f}async function Ra(n,t){return K("/passport/auth/login",{method:"POST",auth:!1,body:{email:n,password:t}})}async function Ha(){const n=`/${J}/stat`,[t,s]=await Promise.all([K(`${n}/getOverride`),K(`${n}/getOrder`)]);return{override:t.data,order:s.data}}async function Ua(n){return(await K(`/${J}/stat/getUserBandwidthSeries`,{params:{range:n}})).data}async function qa(n){return(await K(`/${J}/stat/getServerBandwidthSeries`,{params:{range:n}})).data}async function Ba(n){return(await K(`/${J}/stat/getOnlineUserSeries`,{params:{range:n}})).data}async function Ga(n,t=10){return(await K(`/${J}/stat/getCollaboratorCommissionRank`,{params:{range:n,limit:t}})).data}async function mi(){return(await K(`/${J}/config/fetch`)).data}async function hi(n){return K(`/${J}/config/save`,{method:"POST",body:n})}async function Wa(){return(await K(`/${J}/config/getEmailTemplate`)).data}async function Ka(){return(await K(`/${J}/plan/fetch`)).data.map(t=>({id:t.id,name:t.name}))}async function Ya(){return K(`/${J}/config/testSendMail`,{method:"POST",body:{}})}async function Ja(n){return K(`/${J}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:n}})}async function Za(){return(await K(`/${J}/payment/fetch`)).data}async function Qa(){return(await K(`/${J}/payment/getPaymentMethods`)).data}async function bs(n,t){return(await K(`/${J}/payment/getPaymentForm`,{method:"POST",body:{payment:n,id:t}})).data}async function Xa(n){return K(`/${J}/payment/save`,{method:"POST",body:n})}async function Va(n){return K(`/${J}/payment/show`,{method:"POST",body:{id:n}})}async function eo(n){return K(`/${J}/payment/drop`,{method:"POST",body:{id:n}})}async function to(n){return K(`/${J}/payment/sort`,{method:"POST",body:{ids:n}})}async function no(){return(await K(`/${J}/theme/getThemes`)).data}async function so(n){return(await K(`/${J}/theme/getThemeConfig`,{method:"POST",body:{name:n}})).data}async function io(n,t){const s=window.btoa(unescape(encodeURIComponent(JSON.stringify(t))));return K(`/${J}/theme/saveThemeConfig`,{method:"POST",body:{name:n,config:s}})}async function Ht(){return(await K(`/${J}/server/group/fetch`)).data}async function ns(n){return K(`/${J}/server/group/save`,{method:"POST",body:n})}async function ao(n){return K(`/${J}/server/group/drop`,{method:"POST",body:{id:n}})}const xi=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function bi(){return(await K(`/${J}/server/route/fetch`)).data}async function oo(n){return K(`/${J}/server/route/save`,{method:"POST",body:n})}async function ro(n){return K(`/${J}/server/route/drop`,{method:"POST",body:{id:n}})}async function Tt(){return(await K(`/${J}/plan/fetch`)).data}async function lo(n){return K(`/${J}/plan/save`,{method:"POST",body:n})}async function co(n){return K(`/${J}/plan/drop`,{method:"POST",body:{id:n}})}async function kn(n,t){return K(`/${J}/plan/update`,{method:"POST",body:{id:n,...t}})}async function po(n){return K(`/${J}/plan/sort`,{method:"POST",body:{plan_ids:n}})}async function uo(n={}){const t=new URLSearchParams;return t.set("current",String(n.current??1)),t.set("pageSize",String(n.pageSize??15)),n.is_commission&&t.set("is_commission","1"),n.filter&&n.filter.forEach((r,i)=>{t.set(`filter[${i}][key]`,r.key),t.set(`filter[${i}][condition]`,r.condition),t.set(`filter[${i}][value]`,r.value)}),await K(`/${J}/order/fetch?${t.toString()}`)}async function mo(n){return K(`/${J}/order/paid`,{method:"POST",body:{trade_no:n}})}async function ho(n){return K(`/${J}/order/cancel`,{method:"POST",body:{trade_no:n}})}async function ss(n){return K(`/${J}/order/assign`,{method:"POST",body:n})}async function xo(n,t){return K(`/${J}/order/update`,{method:"POST",body:{trade_no:n,commission_status:t}})}async function bo(n){return K(`/${J}/order/detail`,{method:"POST",body:{id:n}})}async function gi(n=1,t=15){return K(`/${J}/coupon/fetch?current=${n}&pageSize=${t}`)}async function go(n){return K(`/${J}/coupon/generate`,{method:"POST",body:n})}async function fo(n){return K(`/${J}/coupon/drop`,{method:"POST",body:{id:n}})}async function yo(n){return K(`/${J}/coupon/show`,{method:"POST",body:{id:n}})}async function vo(n=1,t=15){return K(`/${J}/giftcard/fetch?current=${n}&pageSize=${t}`)}async function jo(n){return K(`/${J}/giftcard/generate`,{method:"POST",body:n})}async function wo(n){return K(`/${J}/giftcard/drop`,{method:"POST",body:{id:n}})}async function Yn(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s&&s.forEach((i,c)=>{r.set(`filter[${c}][key]`,i.key),r.set(`filter[${c}][condition]`,i.condition),r.set(`filter[${c}][value]`,i.value)}),K(`/${J}/user/fetch?${r.toString()}`)}async function No(n){return K(`/${J}/user/update`,{method:"POST",body:n})}async function Jn(n){return K(`/${J}/user/getUserInfoById`,{params:{id:n}})}async function ko(n){return K(`/${J}/user/delUser`,{method:"POST",body:{id:n}})}async function _o(n){return K(`/${J}/user/generate`,{method:"POST",body:n})}async function So(n){return K(`/${J}/user/resetSecret`,{method:"POST",body:{id:n}})}async function Co(n=1,t=15,s,r=!1){const i=new URLSearchParams;return i.set("current",String(n)),i.set("pageSize",String(t)),r&&i.set("include_subscribe_url","1"),s==null||s.forEach((c,l)=>{i.set(`filter[${l}][key]`,c.key),i.set(`filter[${l}][condition]`,c.condition),i.set(`filter[${l}][value]`,c.value)}),K(`/${J}/subscription/fetch?${i.toString()}`)}async function zo(n){return K(`/${J}/subscription/subscribeUrl`,{method:"POST",body:{id:n}})}async function To(n){return K(`/${J}/subscription/update`,{method:"POST",body:n})}async function Po(n){return K(`/${J}/subscription/resetSecret`,{method:"POST",body:{id:n}})}async function fi(n=1,t=15,s){const r=new URLSearchParams;return r.set("current",String(n)),r.set("pageSize",String(t)),s==null||s.forEach((i,c)=>{r.set(`filter[${c}][key]`,i.key),r.set(`filter[${c}][condition]`,i.condition),r.set(`filter[${c}][value]`,i.value)}),K(`/${J}/device/fetch?${r.toString()}`)}async function yi(n){return K(`/${J}/device/drop`,{method:"POST",body:{id:n}})}async function vi(n){return K(`/${J}/device/ban`,{method:"POST",body:{id:n}})}async function $o(n){return K(`/${J}/device/resetUser`,{method:"POST",body:{user_id:n}})}async function Eo(n,t=1,s=10){return K(`/${J}/stat/getStatUser`,{params:{user_id:n,current:t,pageSize:s}})}async function Mo(){return(await K(`/${J}/notice/fetch`)).data}async function Do(n){return K(`/${J}/notice/save`,{method:"POST",body:n})}async function Lo(n){return K(`/${J}/notice/drop`,{method:"POST",body:{id:n}})}async function Io(n){return K(`/${J}/notice/show`,{method:"POST",body:{id:n}})}async function Fo(){return(await K(`/${J}/ticket/fetch`)).data}async function _n(n){return(await K(`/${J}/ticket/fetch`,{params:{id:n}})).data}async function Ao(n,t){return K(`/${J}/ticket/reply`,{method:"POST",body:{id:n,message:t}})}async function Oo(n){return K(`/${J}/ticket/close`,{method:"POST",body:{id:n}})}async function Ro(n){return K(`/${J}/ticket/confirmCommission`,{method:"POST",body:{id:n}})}async function Ho(){return(await K(`/${J}/knowledge/fetch`)).data}async function Uo(n){return(await K(`/${J}/knowledge/fetch`,{params:{id:n}})).data}async function qo(n){return K(`/${J}/knowledge/save`,{method:"POST",body:n})}async function Bo(n){return K(`/${J}/knowledge/drop`,{method:"POST",body:{id:n}})}async function Go(n){return K(`/${J}/knowledge/show`,{method:"POST",body:{id:n}})}async function Wo(){return(await K(`/${J}/webcon/fetch`)).data}async function Ko(n){return K(`/${J}/webcon/save`,{method:"POST",body:n})}async function Yo(n){return K(`/${J}/webcon/drop`,{method:"POST",body:{id:n}})}async function Jo(n){return K(`/${J}/webcon/show`,{method:"POST",body:{id:n}})}async function Zo(){return K(`/${J}/system/getSystemStatus`)}async function Qo(){return(await K(`/${J}/system/getCoreLicenseStatus`)).data}async function Xo(){return(await K(`/${J}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function Vo(){return K(`/${J}/system/getQueueStats`)}async function er(){return K(`/${J}/system/getQueueWorkload`)}async function tr(){return K(`/${J}/system/getSystemLog`)}async function gs(){return K(`/${J}/server/manage/getNodes`)}async function nr(n,t){return K(`/${J}/server/${n}/save`,{method:"POST",body:t})}async function sr(n,t){return K(`/${J}/server/${n}/drop`,{method:"POST",body:{id:t}})}async function ir(n,t,s){return K(`/${J}/server/${n}/update`,{method:"POST",body:{id:t,show:s}})}async function ar(n,t){return K(`/${J}/server/${n}/copy`,{method:"POST",body:{id:t}})}async function or(n){return K(`/${J}/server/manage/sort`,{method:"POST",body:n})}function Ze(n){const t=Number(n??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(t)}function rt(n){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(n??0))}const fs=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function ji(n){return{date:n,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Wt(n){return Number(n??0)}function ys(n){return Wt(n)/100}function vs(n){return`${rt(Math.round(n))} VND`}function rr(n){const t=["B","KB","MB","GB","TB","PB"];let s=Math.max(0,Number(n||0)),r=0;for(;s>=1024&&r<t.length-1;)s/=1024,r+=1;return`${new Intl.NumberFormat("en-US",{maximumFractionDigits:s>=10||r===0?0:1}).format(s)} ${t[r]}`}function wi(n){return`${String(n.getMonth()+1).padStart(2,"0")}-${String(n.getDate()).padStart(2,"0")}`}function lr(n){const t=new Date;return t.setHours(0,0,0,0),Array.from({length:n},(s,r)=>{const i=new Date(t);return i.setDate(t.getDate()-(n-r-1)),wi(i)})}function js(n,t){const s=n.get(t);if(s)return s;const r=ji(t);return n.set(t,r),r}function cr(n){const t=n.toLowerCase();return t==="register_count"||t.includes("đăng")||t.includes("register")?"registrations":t==="order_count"?"orderCount":t==="paid_count"||t.includes("giao dịch thu")?"paidCount":t==="paid_total"||t.includes("tiền thu")?"paidAmount":t==="commission_count"||t.includes("giao dịch hoa hồng")?"commissionCount":t==="commission_total"||t.includes("tiền hoa hồng")?"commissionAmount":null}function tn({label:n,value:t,helper:s,tone:r="default",onClick:i}){return e.jsxs("article",{className:`stat-card tone-${r}`,onClick:i,style:i?{cursor:"pointer"}:void 0,children:[e.jsxs("div",{children:[e.jsx("p",{children:n}),e.jsx("strong",{children:t})]}),e.jsx("span",{className:"stat-icon",children:e.jsx(Ki,{size:19})}),s?e.jsx("small",{children:s}):null]})}function $e({label:n}){return e.jsxs("div",{className:"loading-state",children:[e.jsx(Oe,{size:18}),e.jsx("span",{children:n})]})}function dr(n,t){const s=new Map,r=new Map;if(n.forEach(i=>{const c=js(s,i.date),l=cr(i.type);if(l){c[l]=Number(i.value||0);return}const f=r.get(i.date)??0,b=fs[f%fs.length];c[b]=Number(i.value||0),r.set(i.date,f+1)}),t){const i=js(s,wi(new Date));i.registrations=Wt(t.day_register_total),t.day_order_total!==void 0&&(i.orderCount=Wt(t.day_order_total)),t.day_paid_order_total!==void 0&&(i.paidCount=Wt(t.day_paid_order_total)),i.paidAmount=ys(t.day_paid_income??t.day_income),t.day_commission_payout!==void 0&&(i.commissionAmount=ys(t.day_commission_payout)),t.day_commission_count!==void 0&&(i.commissionCount=Wt(t.day_commission_count))}return s.size===0?[]:lr(31).map(i=>s.get(i)??ji(i))}function pr({records:n,override:t}){const{t:s}=he(),[r,i]=a.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[c,l]=a.useState(null),f=[{key:"paidAmount",label:s("dashboard.chartRevenue"),summaryLabel:s("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:vs},{key:"orderCount",label:s("dashboard.chartOrderCount"),summaryLabel:s("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:rt},{key:"paidCount",label:s("dashboard.chartPaidCount"),summaryLabel:s("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:rt},{key:"commissionAmount",label:s("dashboard.chartCommission"),summaryLabel:s("dashboard.peakCommission"),color:"#f97316",unit:"money",format:vs},{key:"commissionCount",label:s("dashboard.chartCommissionCount"),summaryLabel:s("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:rt},{key:"registrations",label:s("dashboard.chartRegistrations"),summaryLabel:s("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:rt}],b=dr(n,t),S=f.filter(w=>r.includes(w.key)),x=S.filter(w=>w.unit==="money"),N=S.filter(w=>w.unit==="count"),m=Math.max(1,...x.flatMap(w=>b.map(A=>Number(A[w.key]||0)))),$=Math.max(1,...N.flatMap(w=>b.map(A=>Number(A[w.key]||0)))),q=920,D=300,C=8,M=22,_=D-M-28,R=b.length>1?(q-C*2)/(b.length-1):0,I=Math.max(Math.ceil(b.length/7),1),F=c===null?null:b[c]??null,y=w=>({"--metric-color":w.color}),E=(w,A)=>Number(w[A.key]||0),L=w=>w.unit==="money"?m:$,Z=w=>C+w*R,o=c===null?50:Math.min(88,Math.max(12,Z(c)/q*100)),k=(w,A)=>M+_-w/L(A)*_,O=w=>Math.max(0,...b.map(A=>E(A,w))),z=w=>{const A=b.map((h,Q)=>({x:Z(Q),y:k(E(h,w),w)}));return A.length?A.length===1?`M ${A[0].x} ${A[0].y}`:A.slice(1).reduce((h,Q,H)=>{const ee=A[H],Y=(ee.x+Q.x)/2;return`${h} C ${Y} ${ee.y}, ${Y} ${Q.y}, ${Q.x} ${Q.y}`},`M ${A[0].x} ${A[0].y}`):""};function U(w){i(A=>A.includes(w)?A.length===1?A:A.filter(h=>h!==w):[...A,w]),l(null)}return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("dashboard.revenueTrend")}),e.jsx("p",{children:s("dashboard.revenueTrendHelp")})]}),e.jsx("span",{children:s("dashboard.lastDays",{count:b.length})})]}),e.jsx("div",{className:"chart-legend",role:"group","aria-label":s("dashboard.chartMetrics"),children:f.map(w=>{const A=r.includes(w.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${A?"active":""}`,style:y(w),onClick:()=>U(w.key),"aria-pressed":A,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:w.label})]},w.key)})}),b.length===0?e.jsx("div",{className:"empty-state",children:s("dashboard.noChartData")}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>l(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${q} ${D}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),e.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),e.jsx("rect",{className:"chart-plot-bg",x:C,y:M,width:q-C*2,height:_,rx:"14"}),[0,.25,.5,.75,1].map(w=>e.jsx("line",{className:"chart-grid",x1:C,x2:q-C,y1:M+w*_,y2:M+w*_},w)),c!==null?e.jsx("line",{className:"chart-hover-line",x1:Z(c),x2:Z(c),y1:M,y2:M+_}):null,S.map(w=>e.jsx("path",{className:"chart-series-line",d:z(w),style:y(w)},w.key)),c!==null?S.map(w=>e.jsx("circle",{className:"chart-series-dot",cx:Z(c),cy:k(E(b[c],w),w),r:"5",style:y(w)},`${w.key}-${c}`)):null,b.map((w,A)=>{const h=b.length>1?R:q-C*2;return e.jsx("rect",{className:"chart-hover-zone",x:Z(A)-h/2,y:M,width:h,height:_,onMouseEnter:()=>l(A),onFocus:()=>l(A),onClick:()=>l(A),tabIndex:0},w.date)})]}),F?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${o}%`},children:[e.jsxs("div",{className:"tooltip-date",children:[s("dashboard.date"),": ",F.date]}),e.jsx("div",{className:"tooltip-series-list",children:S.map(w=>e.jsxs("div",{className:"tooltip-series-row",style:y(w),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:w.label}),e.jsx("strong",{children:w.format(E(F,w))})]},w.key))})]}):null]}),e.jsx("div",{className:"chart-axis",children:b.filter((w,A)=>A===0||A===b.length-1||A%I===0).map(w=>e.jsx("span",{children:w.date},w.date))}),e.jsx("div",{className:"chart-insights",children:S.map(w=>e.jsxs("div",{className:"chart-insight",style:y(w),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:w.summaryLabel}),e.jsx("strong",{children:w.format(O(w))})]},w.key))})]})]})}function is({value:n,onChange:t,monthLabel:s}){const{t:r}=he();return e.jsx("div",{className:"range-toggle",role:"group","aria-label":r("dashboard.range"),children:["today","month"].map(i=>e.jsx("button",{type:"button",className:n===i?"active":"",onClick:()=>t(i),"aria-pressed":n===i,children:i==="today"?r("dashboard.rangeToday"):s??r("dashboard.rangeMonth")},i))})}function ur({points:n,metrics:t,emptyLabel:s}){const{t:r}=he(),[i,c]=a.useState(t.map(o=>o.key)),[l,f]=a.useState(null),b=t.filter(o=>i.includes(o.key)),S=Math.max(1,...b.flatMap(o=>n.map(k=>Number(k[o.key]||0)))),x=920,N=260,m=8,$=22,D=N-$-28,C=n.length>1?(x-m*2)/(n.length-1):0,M=Math.max(Math.ceil(n.length/7),1),T=l===null?null:n[l]??null,_=o=>({"--metric-color":o.color}),R=o=>m+o*C,I=o=>$+D-o/S*D,F=l===null?50:Math.min(88,Math.max(12,R(l)/x*100)),y=(o,k)=>Number(o[k.key]||0),E=o=>Math.max(0,...n.map(k=>y(k,o))),L=o=>{const k=n.map((O,z)=>({x:R(z),y:I(y(O,o))}));return k.length?k.length===1?`M ${k[0].x} ${k[0].y}`:k.slice(1).reduce((O,z,U)=>{const w=k[U],A=(w.x+z.x)/2;return`${O} C ${A} ${w.y}, ${A} ${z.y}, ${z.x} ${z.y}`},`M ${k[0].x} ${k[0].y}`):""};function Z(o){c(k=>k.includes(o)?k.length===1?k:k.filter(O=>O!==o):[...k,o]),f(null)}return n.length===0?e.jsx("div",{className:"empty-state",children:s}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"chart-legend",role:"group","aria-label":r("dashboard.chartMetrics"),children:t.map(o=>{const k=i.includes(o.key);return e.jsxs("button",{type:"button",className:`chart-legend-toggle ${k?"active":""}`,style:_(o),onClick:()=>Z(o.key),"aria-pressed":k,children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:o.label})]},o.key)})}),e.jsxs("div",{className:"chart-frame",onMouseLeave:()=>f(null),children:[e.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${x} ${N}`,preserveAspectRatio:"none",role:"img",children:[e.jsx("rect",{className:"chart-plot-bg",x:m,y:$,width:x-m*2,height:D,rx:"14"}),[0,.25,.5,.75,1].map(o=>e.jsx("line",{className:"chart-grid",x1:m,x2:x-m,y1:$+o*D,y2:$+o*D},o)),l!==null?e.jsx("line",{className:"chart-hover-line",x1:R(l),x2:R(l),y1:$,y2:$+D}):null,b.map(o=>e.jsx("path",{className:"chart-series-line",d:L(o),style:_(o)},o.key)),l!==null?b.map(o=>e.jsx("circle",{className:"chart-series-dot",cx:R(l),cy:I(y(n[l],o)),r:"5",style:_(o)},`${o.key}-${l}`)):null,n.map((o,k)=>{const O=n.length>1?C:x-m*2;return e.jsx("rect",{className:"chart-hover-zone",x:R(k)-O/2,y:$,width:O,height:D,onMouseEnter:()=>f(k),onFocus:()=>f(k),onClick:()=>f(k),tabIndex:0},`${o.label}-${k}`)})]}),T?e.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${F}%`},children:[e.jsx("div",{className:"tooltip-date",children:T.label}),e.jsxs("div",{className:"tooltip-series-list",children:[b.map(o=>e.jsxs("div",{className:"tooltip-series-row",style:_(o),children:[e.jsx("span",{className:"tooltip-dot"}),e.jsx("span",{children:o.label}),e.jsx("strong",{children:o.format(y(T,o))})]},o.key)),T.sample_count!==void 0?e.jsxs("div",{className:"tooltip-series-row",children:[e.jsx("span",{}),e.jsx("span",{children:r("dashboard.sampleCount")}),e.jsx("strong",{children:rt(T.sample_count)})]}):null]})]}):null]}),e.jsx("div",{className:"chart-axis",children:n.filter((o,k)=>k===0||k===n.length-1||k%M===0).map((o,k)=>e.jsx("span",{children:o.label},`${o.label}-${k}`))}),e.jsx("div",{className:"chart-insights",children:b.map(o=>e.jsxs("div",{className:"chart-insight",style:_(o),children:[e.jsx("span",{className:"chart-legend-swatch"}),e.jsx("span",{children:o.summaryLabel}),e.jsx("strong",{children:o.format(E(o))})]},o.key))})]})}function ws({title:n,subtitle:t,data:s,range:r,onRangeChange:i,loading:c,error:l,mode:f}){const{t:b}=he(),S=f==="users"?((s==null?void 0:s.users)??[]).map(x=>({id:`user-${x.user_id}`,label:x.email||`User #${x.user_id}`,total:Number(x.total||0)})):((s==null?void 0:s.servers)??[]).map(x=>({id:`${x.server_type}-${x.server_id}`,label:x.server_name||b("dashboard.unnamedNode"),total:Number(x.total||0)}));return e.jsxs("section",{className:"panel chart-panel rank-chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:n}),e.jsx("p",{children:t})]}),e.jsx(is,{value:r,onChange:i,monthLabel:b("dashboard.rangeLast31Days")})]}),l?e.jsx("div",{className:"chart-error",children:l}):null,c?e.jsx($e,{label:b("dashboard.chartLoading")}):e.jsx("div",{className:"traffic-compact-list",children:S.length===0?e.jsx("div",{className:"empty-state",children:b("dashboard.noTraffic")}):S.slice(0,10).map((x,N)=>{var q;const m=Math.max(((q=S[0])==null?void 0:q.total)??1,1),$=Math.max(3,x.total/m*100);return e.jsxs("div",{className:"traffic-compact-row",children:[e.jsxs("div",{className:"traffic-compact-meta",children:[e.jsx("span",{children:N+1}),e.jsx("strong",{title:x.label,children:x.label}),e.jsx("small",{children:rr(x.total)})]}),e.jsx("div",{className:"traffic-compact-track","aria-hidden":"true",children:e.jsx("span",{style:{width:`${$}%`}})})]},x.id)})})]})}function mr({data:n,range:t,onRangeChange:s,loading:r,error:i}){const{t:c}=he(),l=[{key:"online_user",label:c("dashboard.onlineUsers"),summaryLabel:c(t==="today"?"dashboard.peakOnline":"dashboard.avgOnlinePeak"),color:"#22c55e",format:rt}];return e.jsxs("section",{className:"panel chart-panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c("dashboard.onlineTrend")}),e.jsx("p",{children:c(t==="today"?"dashboard.onlineTrendTodayHelp":"dashboard.onlineTrendMonthHelp")})]}),e.jsx(is,{value:t,onChange:s,monthLabel:c("dashboard.rangeLast31Days")})]}),i?e.jsx("div",{className:"chart-error",children:c("dashboard.chartLoadFailed")}):null,r?e.jsx($e,{label:c("dashboard.chartLoading")}):e.jsx(ur,{points:(n==null?void 0:n.points)??[],metrics:l,emptyLabel:c("dashboard.noChartData")}),e.jsx("p",{className:"chart-note",children:c("dashboard.onlineRetentionNote")})]})}function hr({data:n,range:t,onRangeChange:s,loading:r,error:i}){const{t:c}=he(),l=(n==null?void 0:n.items)??[],f=Math.max(...l.map(b=>Number(b.commission_amount||0)),1);return e.jsxs("section",{className:"panel",children:[e.jsxs("div",{className:"panel-heading chart-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:c("dashboard.topCtvCommission")}),e.jsx("p",{children:c("dashboard.topCtvCommissionHelp")})]}),e.jsx(is,{value:t,onChange:s})]}),i?e.jsx("div",{className:"chart-error",children:c("dashboard.chartLoadFailed")}):null,r?e.jsx($e,{label:c("dashboard.chartLoading")}):e.jsx("div",{className:"rank-list",children:l.length===0?e.jsx("div",{className:"empty-state",children:c("dashboard.noCommissionRank")}):l.map((b,S)=>{const x=Number(b.commission_amount||0)/f*100;return e.jsxs("div",{className:"rank-row",children:[e.jsxs("div",{className:"rank-meta",children:[e.jsx("span",{children:S+1}),e.jsx("strong",{children:b.email||`User #${b.user_id}`}),e.jsxs("small",{children:[Ze(b.commission_amount)," VND · ",rt(b.commission_count)]})]}),e.jsx("div",{className:"rank-bar",children:e.jsx("span",{style:{width:`${Math.max(x,3)}%`}})})]},`${b.user_id}-${S}`)})})]})}function Sn({label:n,current:t,previous:s}){const{t:r}=he();return e.jsxs("div",{className:"metric-pair",children:[e.jsx("span",{children:n}),e.jsx("strong",{children:typeof t=="number"?rt(t):t}),e.jsxs("small",{children:[r("dashboard.previous"),": ",typeof s=="number"?rt(s):s]})]})}function Ue(){const n=Li();return a.useMemo(()=>({push:t=>n(t),replace:t=>n(t,{replace:!0}),back:()=>n(-1),prefetch:()=>{}}),[n])}function xr(){return Xt().pathname}function br({href:n,...t}){return e.jsx(Ii,{to:n,...t})}function gr(){const n=Ue(),{t,locale:s,setLocale:r}=he(),[i,c]=a.useState(""),[l,f]=a.useState(""),[b,S]=a.useState(""),[x,N]=a.useState(!1),[m,$]=a.useState(!1),q=a.useRef(null);a.useEffect(()=>{function C(M){q.current&&!q.current.contains(M.target)&&$(!1)}return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]),a.useEffect(()=>{He()&&n.replace("/dashboard")},[n]);async function D(C){var M,T,_,R;C.preventDefault(),S(""),N(!0);try{const I=await Ra(i,l),F=((M=I.data)==null?void 0:M.auth_data)??((T=I.data)==null?void 0:T.token),y=((_=I.data)==null?void 0:_.is_admin)===1||((R=I.data)==null?void 0:R.is_admin)===!0;if(!F||!y)throw new Error(t("login.adminRequired"));Oa(F),n.replace("/dashboard")}catch(I){S(I instanceof Error?I.message:t("login.failed"))}finally{N(!1)}}return e.jsxs("main",{className:"login-page",children:[e.jsxs("section",{className:"login-visual",children:[e.jsxs("div",{className:"login-brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:t("app.title")})]}),e.jsxs("div",{className:"login-copy",children:[e.jsx("p",{children:t("login.eyebrow")}),e.jsx("h1",{children:t("login.heading")}),e.jsx("span",{children:t("login.supporting")})]})]}),e.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":t("login.formLabel"),children:[e.jsxs("div",{ref:q,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.language"),onClick:()=>$(C=>!C),children:e.jsx(Vt,{size:17})}),m?e.jsx("div",{className:"locale-menu",children:Vn.map(C=>e.jsxs("button",{className:`locale-option ${s===C.code?"active":""}`,type:"button",onClick:()=>{r(C.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:C.flag}),e.jsx("span",{children:C.label})]},C.code))}):null]}),e.jsxs("div",{className:"security-badge",children:[e.jsx(va,{size:18}),e.jsx("span",{children:t("login.secureArea")})]}),e.jsxs("div",{className:"login-card-heading",children:[e.jsx("h2",{children:t("login.title")}),e.jsx("p",{children:t("login.subtitle")})]}),e.jsxs("form",{className:"auth-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("common.email")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(ri,{size:17}),e.jsx("input",{autoComplete:"email",inputMode:"email",onChange:C=>c(C.target.value),placeholder:t("login.emailPlaceholder"),required:!0,type:"text",value:i})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("common.password")}),e.jsxs("div",{className:"input-shell",children:[e.jsx(pa,{size:17}),e.jsx("input",{autoComplete:"current-password",onChange:C=>f(C.target.value),placeholder:t("login.passwordPlaceholder"),required:!0,type:"password",value:l})]})]}),b?e.jsx("div",{className:"form-error",children:b}):null,e.jsx("button",{className:"primary-button",disabled:x,type:"submit",children:t(x?"login.signingIn":"login.submit")})]})]})]})}const fr=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:aa}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Na},{href:"/config/payment",label:"nav.paymentConfig",icon:ea},{href:"/config/theme",label:"nav.themeConfig",icon:Ca}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:ts},{href:"/server/group",label:"nav.groupManagement",icon:Ta},{href:"/server/route",label:"nav.routeManagement",icon:wa}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:ms},{href:"/order",label:"nav.orders",icon:da},{href:"/coupon",label:"nav.coupons",icon:oa},{href:"/giftcard",label:"nav.giftcards",icon:_a}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:di},{href:"/subscription",label:"nav.subscriptions",icon:ms},{href:"/device",label:"nav.devices",icon:ka},{href:"/webcon",label:"nav.webcon",icon:Vt},{href:"/notice",label:"nav.notices",icon:Gt},{href:"/ticket",label:"nav.tickets",icon:ca},{href:"/knowledge",label:"nav.knowledge",icon:Yi}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Ji}]}];function yr(){const[n,t]=a.useState("light");a.useEffect(()=>{const c=localStorage.getItem("admin-theme")??"light";t(c),document.documentElement.setAttribute("data-theme",c)},[]);const s=a.useCallback(i=>{t(i),localStorage.setItem("admin-theme",i),document.documentElement.setAttribute("data-theme",i)},[]),r=a.useCallback(()=>{s(n==="light"?"dark":"light")},[n,s]);return{theme:n,toggle:r}}function Ni(n){return n?new Date(n*1e3):null}function vr(n,t){const s=Ni(t);if(!s)return null;try{return new Intl.DateTimeFormat(n,{year:"numeric",month:"2-digit",day:"2-digit"}).format(s)}catch{return s.toLocaleDateString()}}function jr(n){const t=Ni(n);return t?Math.ceil((t.getTime()-Date.now())/864e5):null}function We({children:n,title:t,subtitle:s}){const[r,i]=a.useState(!1),c=Ue(),l=xr(),{t:f,locale:b,setLocale:S}=he(),{theme:x,toggle:N}=yr(),[m,$]=a.useState(!1),q=a.useRef(null),[D,C]=a.useState(null),[M,T]=a.useState(!1),_=a.useCallback(async(o=!1)=>{if(He()){T(o);try{C(o?await Xo():await Qo())}catch(k){C({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:f("license.unavailable"),error:k instanceof Error?k.message:f("license.unavailable")})}finally{T(!1)}}},[f]);a.useEffect(()=>{function o(k){q.current&&!q.current.contains(k.target)&&$(!1)}return document.addEventListener("mousedown",o),()=>document.removeEventListener("mousedown",o)},[]),a.useEffect(()=>{_(!1);const o=window.setInterval(()=>{_(!1)},6e4);return()=>window.clearInterval(o)},[_]);function R(){ui(),c.replace("/login")}const I=(D==null?void 0:D.license_expires_at)??(D==null?void 0:D.expires_at),F=vr(b,I),y=typeof(D==null?void 0:D.days_until_expiry)=="number"?D.days_until_expiry:jr(I),E=typeof y=="number"?y<=0?f("license.expiresToday"):f("license.daysLeft",{days:y}):null,L=!!D&&D.available&&!D.requires_renewal,Z=L&&!!(D!=null&&D.renewal_warning);return e.jsxs("div",{className:"admin-shell",children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),r&&e.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>i(!1)}),e.jsxs("aside",{className:`sidebar ${r?"sidebar-open":""}`,children:[e.jsxs("div",{className:"brand",children:[e.jsx("span",{className:"brand-mark",children:"Z"}),e.jsx("span",{children:f("app.title")})]}),e.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:fr.map(o=>e.jsxs("div",{className:"nav-group",children:[e.jsx("div",{className:"nav-heading",children:f(o.label)}),o.items.map(k=>{const O=k.icon,z=l===k.href;return e.jsxs(br,{className:`nav-item ${z?"active":""}`,href:k.href,onClick:()=>i(!1),children:[e.jsx(O,{size:17}),e.jsx("span",{children:f(k.label)})]},k.href)})]},o.label))})]}),e.jsxs("div",{className:"shell-main",children:[e.jsxs("header",{className:"topbar",children:[e.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":f(r?"common.closeMenu":"common.openMenu"),onClick:()=>i(o=>!o),children:r?e.jsx(Ne,{size:19}):e.jsx(ma,{size:19})}),e.jsxs("div",{className:"topbar-title",children:[e.jsx("h1",{children:t}),s?e.jsx("p",{children:s}):null]}),e.jsxs("div",{className:"topbar-actions",children:[L?e.jsxs("button",{className:`license-chip ${Z?"warning":""}`,type:"button",disabled:M,title:f("license.refresh"),onClick:()=>void _(!0),children:[e.jsx(ps,{size:16}),e.jsxs("span",{className:"license-chip-copy",children:[e.jsx("span",{children:f("license.validUntil")}),e.jsx("strong",{children:F??f("license.unknownExpiry")})]}),E?e.jsx("small",{children:E}):null]}):null,e.jsxs("div",{className:"locale-dropdown",ref:q,children:[e.jsx("button",{className:"icon-button",type:"button","aria-label":f("common.language"),onClick:()=>$(o=>!o),children:e.jsx(Vt,{size:17})}),m?e.jsx("div",{className:"locale-menu",children:Vn.map(o=>e.jsxs("button",{className:`locale-option ${b===o.code?"active":""}`,type:"button",onClick:()=>{S(o.code),$(!1)},children:[e.jsx("span",{className:"locale-flag",children:o.flag}),e.jsx("span",{children:o.label})]},o.code))}):null]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":x==="dark"?"Switch to light mode":"Switch to dark mode",onClick:N,children:x==="dark"?e.jsx(Sa,{size:17}):e.jsx(ha,{size:17})}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:R,children:[e.jsx(ua,{size:16}),e.jsx("span",{children:f("common.logout")})]})]})]}),e.jsxs("main",{className:"content",children:[D!=null&&D.requires_renewal?e.jsxs("section",{className:"license-banner",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(Wn,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:f("license.renewTitle")}),e.jsx("p",{children:f("license.renewBody")}),e.jsxs("small",{children:[f("license.currentStatus"),": ",D.status,D.error?` - ${D.error}`:""]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:M,onClick:()=>void _(!0),children:[e.jsx(Oe,{size:16}),f(M?"license.refreshing":"license.refresh")]})]}):null,Z?e.jsxs("section",{className:"license-banner license-banner-warning",children:[e.jsxs("div",{className:"license-banner-main",children:[e.jsx(ps,{size:20}),e.jsxs("div",{children:[e.jsx("strong",{children:f("license.expiryWarningTitle")}),e.jsx("p",{children:f("license.expiryWarningBody",{date:F??f("license.unknownExpiry"),days:y??""})}),e.jsxs("small",{children:[f("license.currentStatus"),": ",D.status]})]})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:M,onClick:()=>void _(!0),children:[e.jsx(Oe,{size:16}),f(M?"license.refreshing":"license.refresh")]})]}):null,n]})]})]})}function nn(){return{data:null,loading:!0,error:""}}function wr(n,t){const s=new Date;if(n==="today"){const i=s.getHours();return{range:n,points:Array.from({length:24},(c,l)=>({time:Math.floor(new Date(s.getFullYear(),s.getMonth(),s.getDate(),l).getTime()/1e3),label:`${String(l).padStart(2,"0")}:00`,online_user:l===i?t:0,sample_count:l===i?1:0}))}}const r=new Date(s.getFullYear(),s.getMonth(),s.getDate());return{range:n,points:Array.from({length:31},(i,c)=>{const l=new Date(r);return l.setDate(r.getDate()-(30-c)),{time:Math.floor(l.getTime()/1e3),label:`${String(l.getMonth()+1).padStart(2,"0")}-${String(l.getDate()).padStart(2,"0")}`,online_user:c===30?t:0,online_user_avg:c===30?t:0,sample_count:c===30?1:0}})}}function Nr(){var L,Z,o,k,O,z,U,w,A,h,Q,H,ee;const n=Ue(),{t}=he(),[s,r]=a.useState(null),[i,c]=a.useState(""),[l,f]=a.useState(!0),[b,S]=a.useState("today"),[x,N]=a.useState("today"),[m,$]=a.useState("today"),[q,D]=a.useState("today"),[C,M]=a.useState(nn),[T,_]=a.useState(nn),[R,I]=a.useState(nn),[F,y]=a.useState(nn),E=a.useCallback(async()=>{f(!0),c("");try{r(await Ha())}catch(Y){c(Y instanceof Error?Y.message:t("dashboard.loadFailed"))}finally{f(!1)}},[t]);return a.useEffect(()=>{if(!He()){n.replace("/login");return}E()},[E,n]),a.useEffect(()=>{let Y=!0;return M(se=>({...se,loading:!0,error:""})),Ua(b).then(se=>{Y&&M({data:se,loading:!1,error:""})}).catch(se=>{Y&&M({data:null,loading:!1,error:se instanceof Error?se.message:t("dashboard.chartLoadFailed")})}),()=>{Y=!1}},[b,t]),a.useEffect(()=>{let Y=!0;return _(se=>({...se,loading:!0,error:""})),qa(x).then(se=>{Y&&_({data:se,loading:!1,error:""})}).catch(se=>{Y&&_({data:null,loading:!1,error:se instanceof Error?se.message:t("dashboard.chartLoadFailed")})}),()=>{Y=!1}},[x,t]),a.useEffect(()=>{let Y=!0;return I(se=>({...se,loading:!0,error:""})),Ba(m).then(se=>{Y&&I({data:se,loading:!1,error:""})}).catch(()=>{var se;Y&&I({data:wr(m,((se=s==null?void 0:s.override)==null?void 0:se.online_user)??0),loading:!1,error:""})}),()=>{Y=!1}},[m,(L=s==null?void 0:s.override)==null?void 0:L.online_user]),a.useEffect(()=>{let Y=!0;return y(se=>({...se,loading:!0,error:""})),Ga(q).then(se=>{Y&&y({data:se,loading:!1,error:""})}).catch(se=>{Y&&y({data:null,loading:!1,error:se instanceof Error?se.message:t("dashboard.chartLoadFailed")})}),()=>{Y=!1}},[q,t]),e.jsxs(We,{title:t("dashboard.title"),subtitle:t("dashboard.subtitle"),children:[i?e.jsxs("div",{className:"alert-error",children:[e.jsx("span",{children:i}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:E,children:[e.jsx(Oe,{size:16}),t("common.retry")]})]}):null,l&&!s?e.jsx($e,{label:t("dashboard.loading")}):null,s?e.jsxs(e.Fragment,{children:[((Z=s.override)==null?void 0:Z.ticket_pending_total)>0?e.jsxs("div",{className:"ticket-alert",children:[e.jsx("span",{children:t("dashboard.pendingTickets",{count:(o=s.override)==null?void 0:o.ticket_pending_total})}),e.jsx("strong",{onClick:()=>n.push("/ticket"),children:t("dashboard.handleNow")})]}):null,e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("dashboard.today")}),e.jsx("p",{children:t("dashboard.todayHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:l,children:[e.jsx(Oe,{size:16}),t(l?"common.refreshing":"common.refresh")]})]}),e.jsxs("section",{className:"stat-grid",children:[e.jsx(tn,{label:t("dashboard.onlineUsers"),value:rt(((k=s.override)==null?void 0:k.online_user)??0),helper:t("dashboard.lastTenMinutes"),tone:"green",onClick:()=>n.push("/user")}),e.jsx(tn,{label:t("dashboard.todayIncome"),value:`${Ze(((O=s.override)==null?void 0:O.day_paid_income)??((z=s.override)==null?void 0:z.day_income)??0)} VND`,helper:t("dashboard.settledOrders"),tone:"orange",onClick:()=>n.push("/order")}),e.jsx(tn,{label:t("dashboard.todayRegistrations"),value:rt(((U=s.override)==null?void 0:U.day_register_total)??0),helper:t("dashboard.newAccounts"),onClick:()=>n.push("/user")}),e.jsx(tn,{label:t("dashboard.pendingCommission"),value:rt(((w=s.override)==null?void 0:w.commission_pending_total)??0),helper:t("dashboard.awaitingReview"),tone:"rose",onClick:()=>n.push("/order")})]}),e.jsxs("section",{className:"overview-grid",children:[e.jsx(Sn,{label:t("dashboard.monthIncome"),current:`${Ze(((A=s.override)==null?void 0:A.month_income)??0)} VND`,previous:`${Ze(((h=s.override)==null?void 0:h.last_month_income)??0)} VND`}),e.jsx(Sn,{label:t("dashboard.monthCommission"),current:`${Ze(((Q=s.override)==null?void 0:Q.commission_month_payout)??0)} VND`,previous:`${Ze(((H=s.override)==null?void 0:H.commission_last_month_payout)??0)} VND`}),e.jsx(Sn,{label:t("dashboard.monthRegistrations"),current:((ee=s.override)==null?void 0:ee.month_register_total)??0,previous:"-"})]}),e.jsx(pr,{records:s.order,override:s.override}),e.jsxs("section",{className:"rank-grid",children:[e.jsx(mr,{data:R.data,range:m,onRangeChange:$,loading:R.loading,error:R.error}),e.jsx(hr,{data:F.data,range:q,onRangeChange:D,loading:F.loading,error:F.error}),e.jsx(ws,{title:t("dashboard.userBandwidth"),subtitle:t("dashboard.userBandwidthHelp"),data:C.data,range:b,onRangeChange:S,loading:C.loading,error:C.error,mode:"users"}),e.jsx(ws,{title:t("dashboard.serverBandwidth"),subtitle:t("dashboard.serverBandwidthHelp"),data:T.data,range:x,onRangeChange:N,loading:T.loading,error:T.error,mode:"servers"})]})]}):null]})}const kr=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Ns(n){return[{label:n("config.option.enabledLabel"),value:1},{label:n("config.option.disabledLabel"),value:0}]}function _r(n){return[{label:n("config.resetTraffic.monthly"),value:0},{label:n("config.resetTraffic.byPurchase"),value:1},{label:n("config.resetTraffic.never"),value:2},{label:n("config.resetTraffic.yearly"),value:3},{label:n("config.resetTraffic.yearlyByPurchase"),value:4}]}function Cn(n){return[{label:n("config.event.none"),value:0},{label:n("config.event.resetTraffic"),value:1}]}function Sr(n){return[{label:n("config.link.permanent"),value:0},{label:n("config.link.oneTime"),value:1},{label:n("config.link.timeLimited"),value:2}]}function Cr(n){return[{label:n("config.happPing.proxyHead"),value:"proxy-head"},{label:n("config.happPing.proxy"),value:"proxy"},{label:n("config.happPing.tcp"),value:"tcp"},{label:n("config.happPing.icmp"),value:"icmp"}]}function zr(n){return[{label:n("config.ticket.openAll"),value:0},{label:n("config.ticket.paidOnly"),value:1},{label:n("config.ticket.disableTickets"),value:2}]}function Je(n){return n===!0||n===1||n==="1"}function Tr(n){return Array.isArray(n)?n.join(", "):n==null?"":String(n)}function zn(n){return n.split(",").map(t=>t.trim()).filter(Boolean)}function Pr(n){return n.split(/\r\n|\r|\n/).map(t=>t.trim()).filter(Boolean).join(`
`)}function $r({field:n,value:t,onChange:s}){const{t:r}=he(),i=n.toInput?n.toInput(t):Tr(t);return e.jsxs("div",{className:"config-row",children:[e.jsxs("div",{className:"config-row-copy",children:[e.jsx("h3",{children:n.label}),n.description?e.jsx("p",{children:n.description}):null]}),e.jsxs("div",{className:"config-row-control",children:[n.type==="switch"?e.jsxs("button",{className:`switch-control ${Je(t)?"on":""}`,type:"button",onClick:()=>s(Je(t)?0:1),"aria-pressed":Je(t),children:[e.jsx("span",{}),Je(t)?Ns(r)[0].label:Ns(r)[1].label]}):null,n.type==="select"?e.jsx("select",{className:"config-input",value:i,onChange:c=>s(c.target.value),children:(n.options??[]).map(c=>e.jsx("option",{value:c.value,children:c.label},String(c.value)))}):null,n.type==="textarea"?e.jsx("textarea",{className:"config-input",onChange:c=>s(n.fromInput?n.fromInput(c.target.value):c.target.value),placeholder:n.placeholder,rows:4,value:i}):null,n.type==="text"||n.type==="number"?e.jsx("input",{className:"config-input",onChange:c=>s(n.fromInput?n.fromInput(c.target.value):c.target.value),placeholder:n.placeholder,type:n.type,value:i}):null]})]})}function Er({plans:n,emailTemplates:t,t:s}){const r=[{label:s("config.option.disabled"),value:0},...n.map(i=>({label:i.name,value:i.id}))];return[{key:"site",label:s("config.tabs.site"),hint:s("config.tabs.siteHint"),fields:[{key:"app_name",label:s("config.site.appName"),description:s("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:s("config.site.appDescription"),description:s("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:s("config.site.appUrl"),description:s("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:s("config.site.forceHttps"),description:s("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:s("config.site.logo"),description:s("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:s("config.site.subscribeUrl"),description:s("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:s("config.site.webconSharedSubscribeUrl"),description:s("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:s("config.site.subscribePath"),description:s("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:s("config.site.tosUrl"),description:s("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:s("config.site.stopRegister"),description:s("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:s("config.site.trialPlan"),description:s("config.site.trialPlanHelp"),type:"select",options:r},{key:"try_out_hour",label:s("config.site.trialHours"),type:"number",visible:i=>Number(i.try_out_plan_id||0)!==0},{key:"currency",label:s("config.site.currency"),description:s("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:s("config.site.currencySymbol"),description:s("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:s("config.tabs.safe"),hint:s("config.tabs.safeHint"),fields:[{key:"email_verify",label:s("config.safe.emailVerify"),description:s("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:s("config.safe.gmailAlias"),description:s("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:s("config.safe.safeMode"),description:s("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:s("config.safe.securePath"),description:s("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:s("config.safe.staffPath"),description:s("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"manager_path",label:s("config.safe.managerPath"),description:s("config.safe.managerPathHelp"),type:"text",placeholder:"manager"},{key:"email_whitelist_enable",label:s("config.safe.emailWhitelist"),description:s("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:s("config.safe.emailWhitelistSuffix"),description:s("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:i=>Je(i.email_whitelist_enable),fromInput:zn},{key:"recaptcha_enable",label:s("config.safe.recaptcha"),description:s("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:s("config.safe.recaptchaKey"),type:"text",visible:i=>Je(i.recaptcha_enable)},{key:"recaptcha_site_key",label:s("config.safe.recaptchaSiteKey"),type:"text",visible:i=>Je(i.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:s("config.safe.ipRegisterLimit"),description:s("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:s("config.safe.limitCount"),type:"number",visible:i=>Je(i.register_limit_by_ip_enable)},{key:"register_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:i=>Je(i.register_limit_by_ip_enable)},{key:"password_limit_enable",label:s("config.safe.passwordLimit"),description:s("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:s("config.safe.limitCount"),type:"number",visible:i=>Je(i.password_limit_enable)},{key:"password_limit_expire",label:s("config.safe.limitMinutes"),type:"number",visible:i=>Je(i.password_limit_enable)}]},{key:"subscribe",label:s("config.tabs.subscribe"),hint:s("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:s("config.subscribe.multipleSubscription"),description:s("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:s("config.subscribe.planChange"),description:s("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:s("config.subscribe.deviceHwid"),description:s("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:s("config.subscribe.happEncrypt"),description:s("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:s("config.subscribe.happProfileTitle"),description:s("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:s("config.subscribe.happHideSettings"),description:s("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:s("config.subscribe.happAnnounce"),description:s("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:s("config.subscribe.happProviderId"),description:s("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:s("config.subscribe.happColorProfile"),description:s("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:s("config.subscribe.happPingType"),description:s("config.subscribe.happPingTypeHelp"),type:"select",options:Cr(s)},{key:"happ_check_url",label:s("config.subscribe.happCheckUrl"),description:s("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:i=>String(i.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:s("config.subscribe.changeSni"),description:s("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:s("config.subscribe.giftcardNotice"),description:s("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:s("config.subscribe.resetTraffic"),description:s("config.subscribe.resetTrafficHelp"),type:"select",options:_r(s)},{key:"surplus_enable",label:s("config.subscribe.surplus"),description:s("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:s("config.subscribe.allowNewPeriod"),description:s("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:s("config.subscribe.newOrderEvent"),type:"select",options:Cn(s)},{key:"renew_order_event_id",label:s("config.subscribe.renewOrderEvent"),type:"select",options:Cn(s)},{key:"change_order_event_id",label:s("config.subscribe.changeOrderEvent"),type:"select",options:Cn(s)},{key:"show_info_to_server_enable",label:s("config.subscribe.showInfo"),description:s("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:s("config.subscribe.linkMode"),description:s("config.subscribe.linkModeHelp"),type:"select",options:Sr(s)},{key:"show_subscribe_expire",label:s("config.subscribe.linkExpire"),type:"number",visible:i=>Number(i.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:s("config.subscribe.uaAllow"),description:s("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:s("config.subscribe.uaAllowList"),description:s("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:i=>Je(i.subscribe_url_ua_enable),fromInput:Pr}]},{key:"deposit",label:s("config.tabs.deposit"),hint:s("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:s("config.deposit.bonus"),description:s("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:zn}]},{key:"ticket",label:s("config.tabs.ticket"),hint:s("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:s("config.ticket.status"),description:s("config.ticket.statusHelp"),type:"select",options:zr(s)}]},{key:"invite",label:s("config.tabs.invite"),hint:s("config.tabs.inviteHint"),fields:[{key:"invite_force",label:s("config.invite.force"),description:s("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:s("config.invite.commission"),description:s("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:s("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:s("config.invite.neverExpire"),description:s("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:s("config.invite.firstTime"),description:s("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:s("config.invite.autoCheck"),description:s("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:s("config.invite.withdrawLimit"),description:s("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:s("config.invite.withdrawMethods"),description:s("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:zn},{key:"withdraw_close_enable",label:s("config.invite.withdrawClose"),description:s("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:s("config.invite.distribution"),description:s("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:s("config.invite.level1"),type:"number",visible:i=>Je(i.commission_distribution_enable)},{key:"commission_distribution_l2",label:s("config.invite.level2"),type:"number",visible:i=>Je(i.commission_distribution_enable)},{key:"commission_distribution_l3",label:s("config.invite.level3"),type:"number",visible:i=>Je(i.commission_distribution_enable)}]},{key:"server",label:s("config.tabs.server"),hint:s("config.tabs.serverHint"),fields:[{key:"server_api_url",label:s("config.server.apiUrl"),description:s("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:s("config.server.token"),description:s("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:s("config.server.pullInterval"),description:s("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:s("config.server.pushInterval"),description:s("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:s("config.server.nodeTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:s("config.server.deviceTrafficThreshold"),description:s("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:s("config.server.deviceLimitMode"),description:s("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:s("config.server.zicnodeAutoTls"),description:s("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:s("config.server.zicnodeAutoTlsProvider"),description:s("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:i=>Je(i.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:s("config.server.zicnodeAutoTlsDnsEnv"),description:s("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:i=>Je(i.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:s("config.server.zicnodeAutoTlsSelfFallback"),description:s("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:i=>Je(i.zicnode_auto_tls_enable)}]},{key:"email",label:s("config.tabs.email"),hint:s("config.tabs.emailHint"),warning:s("config.email.warning"),fields:[{key:"email_host",label:s("config.email.host"),type:"text"},{key:"email_port",label:s("config.email.port"),type:"text"},{key:"email_encryption",label:s("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:s("config.email.username"),type:"text"},{key:"email_password",label:s("config.email.password"),type:"text"},{key:"email_from_address",label:s("config.email.fromAddress"),type:"text"},{key:"email_template",label:s("config.email.template"),type:"select",options:t.map(i=>({label:i,value:i}))}]},{key:"telegram",label:s("config.tabs.telegram"),hint:s("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:s("config.telegram.token"),description:s("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:s("config.telegram.enable"),description:s("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:s("config.telegram.group"),description:s("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:s("config.telegram.appleShareApi"),description:s("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:s("config.tabs.app"),hint:s("config.tabs.appHint"),warning:s("config.app.warning"),fields:[{key:"windows_version",label:s("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:s("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:s("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:s("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:s("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:s("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Mr(){const n=Ue(),{t}=he(),[s,r]=a.useState("site"),[i,c]=a.useState(null),[l,f]=a.useState([]),[b,S]=a.useState([]),[x,N]=a.useState(!0),[m,$]=a.useState(null),[q,D]=a.useState(""),C=a.useCallback(async()=>{N(!0),D("");try{const[E,L,Z]=await Promise.all([mi(),Ka(),Wa()]);c(E),f(L),S(Z)}catch(E){D(E instanceof Error?E.message:t("config.loadFailed"))}finally{N(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}C()},[C,n]),a.useEffect(()=>{const E=document.querySelector(".config-tabs button.active");E&&E.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[s]);const M=a.useMemo(()=>Er({plans:l,emailTemplates:b,t}),[l,b,t]),T=M.find(E=>E.key===s)??M[0],_=(i==null?void 0:i[T.key])??{};function R(E,L,Z){c(o=>o&&{...o,[E]:{...o[E],[L]:Z}})}async function I(){var Z,o,k;if(!i)return;const E=T.key==="safe"?String(((Z=window.settings)==null?void 0:Z.secure_path)??"").trim():"",L=T.key==="safe"?String(((o=i.safe)==null?void 0:o.secure_path)??"").trim():"";$(T.key),D("");try{await hi(i[T.key]),(k=window.showToast)==null||k.call(window,t("config.saveSuccess"),"success"),T.key==="safe"&&L&&L!==E&&(window.settings={...window.settings??{},secure_path:L},window.location.replace(`${window.location.origin}/${L}`))}catch(O){D(O instanceof Error?O.message:t("config.saveFailed"))}finally{$(null)}}async function F(){var E;$("mail"),D("");try{await Ya(),(E=window.showToast)==null||E.call(window,t("config.email.testSuccess"),"success")}catch(L){D(L instanceof Error?L.message:t("config.email.testFailed"))}finally{$(null)}}async function y(){var L;const E=String((i==null?void 0:i.telegram.telegram_bot_token)??"");$("webhook"),D("");try{await Ja(E),(L=window.showToast)==null||L.call(window,t("config.telegram.webhookSuccess"),"success")}catch(Z){D(Z instanceof Error?Z.message:t("config.telegram.webhookFailed"))}finally{$(null)}}return e.jsxs(We,{title:t("config.title"),subtitle:t("config.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("config.systemConfig")}),e.jsx("p",{children:t("config.systemConfigHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:C,disabled:x,children:[e.jsx(Oe,{size:16}),t(x?"common.refreshing":"common.refresh")]})]}),q?e.jsx("div",{className:"form-error",children:q}):null,x&&!i?e.jsx($e,{label:t("config.loading")}):null,i?e.jsxs("section",{className:"config-layout",children:[e.jsx("aside",{className:"config-tabs","aria-label":t("config.tabsLabel"),children:kr.map(E=>{const L=M.find(Z=>Z.key===E);return L?e.jsxs("button",{className:s===E?"active":"",type:"button",onClick:()=>r(E),children:[e.jsx("span",{children:L.label}),e.jsx("small",{children:L.hint})]},E):null})}),e.jsxs("div",{className:"config-panel panel",children:[e.jsxs("div",{className:"config-panel-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:T.label}),e.jsx("p",{children:T.hint})]}),e.jsxs("button",{className:"primary-button save-button",disabled:m===T.key,type:"button",onClick:I,children:[e.jsx(ct,{size:16}),m===T.key?t("config.saving"):t("config.saveTab")]})]}),T.warning?e.jsx("div",{className:"config-warning",children:T.warning}):null,e.jsx("div",{className:"config-fields",children:T.fields.map(E=>E.visible&&!E.visible(_)?null:e.jsx($r,{field:E,value:_[E.key],onChange:L=>R(T.key,E.key,L)},E.key))}),T.key==="email"?e.jsx("div",{className:"config-actions",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:m==="mail",onClick:F,children:[e.jsx(ri,{size:16}),t(m==="mail"?"config.email.testing":"config.email.test")]})}):null,T.key==="telegram"?e.jsxs("div",{className:"config-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:m==="webhook",onClick:y,children:[e.jsx(za,{size:16}),t(m==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),e.jsxs("span",{children:[e.jsx(li,{size:14}),t("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Ct(n){var s;if(typeof window>"u"||typeof document>"u")return!1;if((s=navigator.clipboard)!=null&&s.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(n),!0}catch{}const t=document.createElement("textarea");t.value=n,t.setAttribute("readonly",""),t.style.position="fixed",t.style.left="-9999px",t.style.top="0",document.body.appendChild(t),t.select(),t.setSelectionRange(0,t.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(t)}}function Tn(n){return n===!0||n===1||n==="1"}function Dr(n,t=""){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",icon:(n==null?void 0:n.icon)??"",notify_domain:(n==null?void 0:n.notify_domain)??"",handling_fee_fixed:(n==null?void 0:n.handling_fee_fixed)===null||(n==null?void 0:n.handling_fee_fixed)===void 0?"":String(Number(n.handling_fee_fixed)/100),handling_fee_percent:(n==null?void 0:n.handling_fee_percent)===null||(n==null?void 0:n.handling_fee_percent)===void 0?"":String(n.handling_fee_percent),payment:(n==null?void 0:n.payment)??t,config:{...(n==null?void 0:n.config)??{}}}}function Lr(n){return{id:n.id,name:n.name,icon:n.icon||null,notify_domain:n.notify_domain||null,handling_fee_fixed:n.handling_fee_fixed===""?null:Math.round(Number(n.handling_fee_fixed)*100),handling_fee_percent:n.handling_fee_percent===""?null:n.handling_fee_percent,payment:n.payment,config:n.config}}function Ir(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState([]),[l,f]=a.useState(null),[b,S]=a.useState({}),[x,N]=a.useState(!0),[m,$]=a.useState(!1),[q,D]=a.useState(!1),[C,M]=a.useState(""),[T,_]=a.useState(""),[R,I]=a.useState({}),F=a.useCallback(async()=>{N(!0),M("");try{const[z,U]=await Promise.all([Za(),Qa()]);r(z),c(U),I({})}catch(z){M(z instanceof Error?z.message:t("payment.loadFailed"))}finally{N(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}F()},[F,n]);async function y(z){const U=(z==null?void 0:z.payment)??i[0]??"",w=Dr(z,U);if(f(w),S({}),M(""),_(""),!!U){$(!0);try{S(await bs(U,z==null?void 0:z.id))}catch(A){M(A instanceof Error?A.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function E(z){if(l){f({...l,payment:z,config:{}}),$(!0),M("");try{S(await bs(z,l.id))}catch(U){M(U instanceof Error?U.message:t("payment.formLoadFailed"))}finally{$(!1)}}}async function L(z){var U,w;if(z.preventDefault(),!!l){D(!0),M(""),_("");try{await Xa(Lr(l)),f(null),(U=window.showToast)==null||U.call(window,t("payment.saveSuccess"),"success"),await F()}catch(A){(w=window.showToast)==null||w.call(window,A instanceof Error?A.message:t("payment.saveFailed"),"error")}finally{D(!1)}}}async function Z(z){var U;M(""),_("");try{await Va(z),await F()}catch(w){(U=window.showToast)==null||U.call(window,w instanceof Error?w.message:t("payment.toggleFailed"),"error")}}async function o(z){var U;(U=window.showConfirm)==null||U.call(window,{message:t("payment.deleteConfirm"),onConfirm:async()=>{var w,A;M(""),_("");try{await eo(z),(w=window.showToast)==null||w.call(window,t("payment.deleteSuccess"),"success"),await F()}catch(h){(A=window.showToast)==null||A.call(window,h instanceof Error?h.message:t("payment.deleteFailed"),"error")}}})}async function k(z,U){var Q;const w=z+U;if(w<0||w>=s.length)return;const A=[...s],h=A[z];A.splice(z,1),A.splice(w,0,h),r(A);try{await to(A.map(H=>H.id)),await F()}catch(H){(Q=window.showToast)==null||Q.call(window,H instanceof Error?H.message:t("payment.sortFailed"),"error"),await F()}}async function O(z){var w;const U=await Ct(z);(w=window.showToast)==null||w.call(window,t(U?"payment.copied":"common.copyFailed"),U?"success":"error")}return e.jsxs(We,{title:t("payment.title"),subtitle:t("payment.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("payment.methods")}),e.jsx("p",{children:t("payment.methodsHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:F,disabled:x,children:[e.jsx(Oe,{size:16}),e.jsx("span",{children:t(x?"common.refreshing":"common.refresh")})]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void y(),children:[e.jsx(lt,{size:16}),e.jsx("span",{children:t("payment.add")})]})]})]}),C?e.jsx("div",{className:"form-error",children:C}):null,T?e.jsx("div",{className:"form-success",children:T}):null,x&&s.length===0?e.jsx($e,{label:t("payment.loading")}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("payment.id")}),e.jsx("th",{children:t("payment.enabled")}),e.jsx("th",{children:t("payment.displayName")}),e.jsx("th",{children:t("payment.interface")}),e.jsx("th",{children:t("payment.notifyUrl")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((z,U)=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"sort-cell",children:[e.jsx("span",{children:z.id}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void k(U,-1),disabled:U===0,"aria-label":t("payment.moveUp"),children:e.jsx(ds,{size:13})}),e.jsx("button",{className:"mini-button",type:"button",onClick:()=>void k(U,1),disabled:U===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(cs,{size:13})})]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Tn(z.enable)?"active":""}`,type:"button",onClick:()=>void Z(z.id),"aria-label":Tn(z.enable)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsxs("td",{children:[e.jsx("strong",{children:z.name}),z.icon?e.jsx("small",{children:z.icon}):null]}),e.jsx("td",{children:z.payment}),e.jsx("td",{children:e.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void O(z.notify_url),children:[e.jsx("span",{children:z.notify_url}),e.jsx(Zt,{size:14})]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void y(z),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void o(z.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},z.id)),!x&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("payment.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-payment-list",children:[s.map((z,U)=>{const w=Tn(z.enable),A=z.handling_fee_percent!==null&&z.handling_fee_percent!==""?`${z.handling_fee_percent}%`:"",h=z.handling_fee_fixed!==null?`${Ze(z.handling_fee_fixed)} VND`:"",Q=[A,h].filter(Boolean).join(" + ")||"No fees",H=R[z.id],ee=z.icon&&!H;return e.jsxs("div",{className:`payment-mobile-card ${w?"enabled":"disabled"}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",z.id]}),e.jsx("span",{className:"gateway-tag",children:z.payment})]}),e.jsx("button",{className:`admin-switch ${w?"active":""}`,type:"button",onClick:()=>void Z(z.id),"aria-label":t(w?"common.enabled":"common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsxs("div",{className:"payment-info",children:[ee?e.jsx("div",{className:"payment-avatar img-avatar",children:e.jsx("img",{src:z.icon,alt:z.name,onError:()=>{I(Y=>({...Y,[z.id]:!0}))}})}):e.jsx("div",{className:"payment-avatar text-avatar",children:z.name.slice(0,2).toUpperCase()}),e.jsxs("div",{className:"payment-details",children:[e.jsx("h3",{children:z.name}),e.jsxs("p",{className:"fee-info",children:[e.jsx("span",{className:"fee-label",children:"Fee:"})," ",e.jsx("span",{className:"fee-badge",children:Q})]})]})]}),e.jsxs("div",{className:"notify-url-section",children:[e.jsx("span",{className:"section-label",children:t("payment.notifyUrl")}),e.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void O(z.notify_url),title:"Click to copy",children:[e.jsx("span",{className:"url-text",children:z.notify_url}),e.jsx(Zt,{size:12,className:"copy-icon"})]})]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("div",{className:"sorting-controls",children:[e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void k(U,-1),disabled:U===0,"aria-label":t("payment.moveUp"),children:e.jsx(ds,{size:14})}),e.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void k(U,1),disabled:U===s.length-1,"aria-label":t("payment.moveDown"),children:e.jsx(cs,{size:14})})]}),e.jsxs("div",{className:"action-buttons",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void y(z),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void o(z.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]})]},z.id)}),!x&&s.length===0?e.jsx("div",{className:"empty-state",children:t("payment.empty")}):null]}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsx("div",{className:"drawer-handle hide-on-desktop"}),e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("payment.edit"):t("payment.add")}),e.jsx("p",{children:t("payment.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:L,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.displayName")}),e.jsx("input",{className:"config-input",required:!0,value:l.name,onChange:z=>f({...l,name:z.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.iconUrl")}),e.jsx("input",{className:"config-input",value:l.icon,onChange:z=>f({...l,icon:z.target.value}),placeholder:"https://example.com/icon.svg"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.notifyDomain")}),e.jsx("input",{className:"config-input",value:l.notify_domain,onChange:z=>f({...l,notify_domain:z.target.value}),placeholder:"https://pay.example.com"})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("payment.percentFee")}),e.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:l.handling_fee_percent,onChange:z=>f({...l,handling_fee_percent:z.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.fixedFee")}),e.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:l.handling_fee_fixed,onChange:z=>f({...l,handling_fee_fixed:z.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("payment.interface")}),e.jsx("select",{className:"config-input",value:l.payment,onChange:z=>void E(z.target.value),children:i.map(z=>e.jsx("option",{value:z,children:z},z))})]}),m?e.jsx($e,{label:t("payment.formLoading")}):null,m?null:Object.entries(b).map(([z,U])=>e.jsxs("label",{children:[e.jsx("span",{children:U.label}),e.jsx("input",{className:"config-input",placeholder:U.description,value:String(l.config[z]??U.value??""),onChange:w=>f({...l,config:{...l.config,[z]:w.target.value}})})]},z)),l.payment==="MGate"?e.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ct,{size:16}),t(q?"payment.saving":"common.save")]})]})]})]})}):null]})}function Fr(n){return n.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function Ar(n,t){return t[n.field_name]??n.default_value??""}function Or(){const n=Ue(),{t}=he(),[s,r]=a.useState(null),[i,c]=a.useState(null),[l,f]=a.useState(!0),[b,S]=a.useState(!1),[x,N]=a.useState(!1),[m,$]=a.useState(null),[q,D]=a.useState(""),[C,M]=a.useState(""),T=a.useCallback(async()=>{f(!0),D("");try{r(await no())}catch(y){D(y instanceof Error?y.message:t("theme.loadFailed"))}finally{f(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}T()},[T,n]);async function _(y,E){c(null),S(!0),D(""),M("");try{const L=await so(y);c({key:y,theme:E,values:L})}catch(L){D(L instanceof Error?L.message:t("theme.configLoadFailed"))}finally{S(!1)}}async function R(y){$(y),D(""),M("");try{await hi({frontend_theme:y}),M(t("theme.activateSuccess")),await T()}catch(E){D(E instanceof Error?E.message:t("theme.activateFailed"))}finally{$(null)}}async function I(y){if(y.preventDefault(),!!i){N(!0),D(""),M("");try{await io(i.key,i.values),c(null),M(t("theme.saveSuccess")),await T()}catch(E){D(E instanceof Error?E.message:t("theme.saveFailed"))}finally{N(!1)}}}function F(y,E){c(L=>L&&{...L,values:{...L.values,[y]:E}})}return e.jsxs(We,{title:t("theme.title"),subtitle:t("theme.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.available")}),e.jsx("p",{children:t("theme.availableHelp")})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:l,children:[e.jsx(Oe,{size:16}),t(l?"common.refreshing":"common.refresh")]})]}),e.jsx("div",{className:"config-warning",children:t("theme.warning")}),q?e.jsx("div",{className:"form-error",children:q}):null,C?e.jsx("div",{className:"form-success",children:C}):null,l&&!s?e.jsx($e,{label:t("theme.loading")}):null,s?e.jsx("section",{className:"theme-grid",children:Object.entries(s.themes).map(([y,E])=>{const L=s.active===y;return e.jsxs("article",{className:"theme-card",children:[e.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Fr(E)})`},children:L?e.jsxs("span",{className:"theme-active",children:[e.jsx(oi,{size:15}),t("theme.current")]}):null}),e.jsxs("div",{className:"theme-body",children:[e.jsxs("div",{children:[e.jsx("h3",{children:E.name||y}),e.jsx("p",{children:E.description||t("theme.noDescription")})]}),e.jsxs("small",{children:[t("theme.version"),": ",E.version||"-"]})]}),e.jsxs("div",{className:"theme-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void _(y,E),children:[e.jsx(ya,{size:15}),t("theme.settings")]}),e.jsxs("button",{className:"primary-button",disabled:L||m===y,type:"button",onClick:()=>void R(y),children:[e.jsx(xa,{size:15}),t(L?"theme.current":m===y?"theme.activating":"theme.activate")]})]})]},y)})}):null,b?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:e.jsx($e,{label:t("theme.configLoading")})})}):null,i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("theme.configure",{name:i.theme.name||i.key})}),e.jsx("p",{children:i.theme.description||t("theme.noDescription")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:I,children:[(i.theme.configs??[]).map(y=>{const E=Ar(y,i.values);return e.jsxs("label",{children:[e.jsx("span",{children:y.label}),y.description?e.jsx("p",{className:"field-description",children:y.description}):null,y.field_type==="select"?e.jsx("select",{className:"config-input",value:E,onChange:L=>F(y.field_name,L.target.value),children:Object.entries(y.select_options??{}).map(([L,Z])=>e.jsx("option",{value:L,children:Z},L))}):null,y.field_type==="textarea"?e.jsx("textarea",{className:"config-input",placeholder:y.placeholder,rows:5,value:E,onChange:L=>F(y.field_name,L.target.value)}):null,y.field_type!=="select"&&y.field_type!=="textarea"?e.jsx("input",{className:"config-input",placeholder:y.placeholder,value:E,onChange:L=>F(y.field_name,L.target.value)}):null]},y.field_name)}),(i.theme.configs??[]).length===0?e.jsx("div",{className:"empty-state",children:t("theme.noConfig")}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(ct,{size:16}),t(x?"theme.saving":"common.save")]})]})]})]})}):null]})}const Zn=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],Rr=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Hr=["tcp","ws","grpc","http","httpupgrade","xhttp"],ki=["tcp","ws","grpc"],_i=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],Ur=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],hn=["anytls","hysteria2","trojan","tuic"],qr=["tcp","ws","grpc","httpupgrade","xhttp"],Br=["chrome","firefox","safari","ios","android","edge","360","qq"],Gr=["vmess","vless","trojan","hysteria","tuic","anytls"],Wr=["trojan","hysteria","tuic","anytls"],Si=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],xn={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},bn=[10,20,50,100],Ci="admin_server_manage_page_size";function zi(n){return bn.includes(n)}function Kr(){if(typeof window>"u")return bn[0];try{const n=Number(window.localStorage.getItem(Ci));if(zi(n))return n}catch{}return bn[0]}const as=typeof window<"u"?window.location.origin:"",Yr="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function Jr(n,t,s=""){return n[t]??s}function je(n,t,s=""){return String(Jr(n,t,s))}function Zr(n,t){const s=n[t];return s&&typeof s=="object"&&!Array.isArray(s)?s:{}}function zt(n){if(n&&typeof n=="object"&&!Array.isArray(n))return n;if(typeof n!="string"||!n.trim())return{};try{const t=JSON.parse(n);return t&&typeof t=="object"&&!Array.isArray(t)?t:{}}catch{return{}}}function Qn(n){return typeof n=="string"?n.trim()!=="":Array.isArray(n)?n.length>0:n&&typeof n=="object"?Object.keys(n).length>0:!1}function Qr(n){return n==="vmess"?"networkSettings":"network_settings"}function Xr(n,t){const s=n==="vmess",r=n==="vless"||mt(n),i={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(t){case"tcp":return r?{acceptProxyProtocol:!1,...i}:i;case"ws":return r?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return s?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function mt(n){return n==="v2node"||n==="zicnode"}function Vr(n){return Wr.includes(n)}function el(n){return mt(n)||Gr.includes(n)}function ks(n){return n==="vmess"?"tlsSettings":"tls_settings"}function tl(n){const t=String((n==null?void 0:n._type)??"");return Vr(t)?1:Number((n==null?void 0:n.tls)??0)}function gn(n){return!!n&&n!=="shadowsocks"}function nl(n){return n==="vless"||n==="vmess"}function fn(n){return n==="vless"||n==="anytls"}function sl(n){return["vless","vmess","trojan","shadowsocks"].includes(n)}function _s(n){return n==="shadowsocks"?["tcp","http"]:n==="trojan"?ki:n==="vless"||n==="vmess"?qr:[]}function il(n){var t;return mt(n)?"ZicNode":((t=Zn.find(s=>s.value===n))==null?void 0:t.label)??n}function Le(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n.trim():n==null?"":String(n).trim()}function os(n){return n===!0||n===1||n==="1"||n==="true"}function Ss(n){return Array.isArray(n)?n.join(","):typeof n=="string"?n:""}function Ti(n){return Array.isArray(n)?n.map(t=>String(t).trim()).filter(Boolean):typeof n=="string"?n.split(",").map(t=>t.trim()).filter(Boolean):[]}function Yt(n){if(Array.isArray(n))return n.map(t=>String(t).trim()).filter(Boolean);if(typeof n=="string"){const t=n.trim();if(!t)return[];try{const s=JSON.parse(t);if(Array.isArray(s))return s.map(r=>String(r).trim()).filter(Boolean)}catch{}return t.split(/[\n,]+/).map(s=>s.trim()).filter(Boolean)}return[]}function Pi(n){const t=new Set,s=[];return Yt(n).forEach(r=>{const i=r.toLowerCase();t.has(i)||(t.add(i),s.push(r))}),s}function al(n){return Ti(n).map(t=>Number(t)).filter(t=>Number.isInteger(t)&&t>=0&&t<=255)}function yn(n){const t={...xn,...zt(n)};if(!os(t.enable))return{enable:!1};const r={enable:!0,mode:["auto","manual"].includes(String(t.mode))?t.mode:"auto",fail_policy:["direct","block"].includes(String(t.fail_policy))?t.fail_policy:"direct",mtu:Number(t.mtu)>0?Number(t.mtu):1280,domain_strategy:Si.includes(String(t.domain_strategy))?t.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(l=>{const f=Le(t[l]);f&&(r[l]=f)});const i=Ti(t.addresses);i.length&&(r.addresses=i);const c=al(t.reserved);return c.length&&(r.reserved=c),r}const ol=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],rl=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function gt(n,t){const s=zt(n);if(t===0)return{};const r={...s};return t===1?ol.forEach(i=>delete r[i]):t===2&&rl.forEach(i=>delete r[i]),Object.keys(r).forEach(i=>{const c=r[i];(c===""||c===null||c===void 0)&&delete r[i]}),r}function ll(n){const t=zt(n);if(!Object.keys(t).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const s=String(t.status??"").trim().toLowerCase(),r=!!(Le(t.public_key_sha256)||Le(t.sha256_hex)||Le(t.sha256));return s==="error"?{state:"error",hasPin:r,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:r?{state:"ready",hasPin:r,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:r,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function Cs(n,t=as){return Le(n).replace(/\/+$/,"")||t}function zs(n){return`'${n.replace(/'/g,"'\\''")}'`}function cl(n,t){const s=t.apiHost||as,r=t.apiKey||"TOKEN_MOI";return`wget -N ${Yr} && \\
bash install.sh --api-host ${zs(s)} --node-id ${n} --api-key ${zs(r)}`}function Ts(n){return(Array.isArray(n)?n:typeof n=="string"?n.split(",").map(s=>s.trim()):[]).map(s=>Number(s)).filter(s=>Number.isFinite(s))}function Ps(n,t){if(t){const r=JSON.parse(JSON.stringify(t));if(r.group_id=Ts(r.group_id),r.route_id=Ts(r.route_id),r.load_ips=Pi(r.load_ips),mt(n)){r.warp_settings={...xn,...zt(r.warp_settings)};const i=String(r.protocol??""),c=Number(r.tls??0);c===2&&!fn(i)?r.tls=gn(i)?1:0:hn.includes(i)&&c!==2&&(r.tls=1)}return{_type:n,...r}}const s={_type:n,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],load_ips:[],rate:"1",show:0};switch(n){case"vmess":return{...s,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...s,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...s,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...s,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...s,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...s,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...s,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...s,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...xn}};default:return s}}function $i({initialValue:n,placeholder:t,onCancel:s,onSave:r}){const{t:i}=he(),[c,l]=a.useState(()=>Qn(n)?JSON.stringify(n,null,2):""),[f,b]=a.useState(""),S=N=>{if(N.preventDefault(),!c.trim()){r({});return}try{const m=JSON.parse(c);if(typeof m!="object"||m===null)throw new Error("Must be a JSON object {} or array []");r(m)}catch(m){b(m instanceof Error?m.message:"Invalid JSON")}},x=N=>{if(l(N),!N.trim()){b("");return}try{const m=JSON.parse(N);if(typeof m!="object"||m===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(m){b(m instanceof Error?m.message:"Invalid JSON")}};return e.jsxs("form",{onSubmit:S,style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:i("node.jsonContent")}),f&&e.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",f]})]}),e.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:f?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:c,onChange:N=>x(N.target.value),placeholder:t??`{
  "key": "value"
}`,autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:s,children:i("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:!!f,children:i("common.confirm")})]})]})}function ie({label:n,required:t,actionText:s,onAction:r}){return e.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[e.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[n,t&&e.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),s&&r&&e.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:i=>{i.preventDefault(),r()},children:s})]})}function $s({value:n,onChange:t,label:s,placeholder:r}){const{t:i}=he(),[c,l]=a.useState("");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[e.jsx(ie,{label:s}),e.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[n.map((f,b)=>e.jsxs("span",{className:"tag",onClick:()=>t(n.filter((S,x)=>x!==b)),style:{cursor:"pointer"},children:[f," ×"]},b)),e.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:c,placeholder:r??i("node.tagPlaceholder"),onChange:f=>l(f.target.value),onKeyDown:f=>{f.key==="Enter"&&c.trim()&&(f.preventDefault(),t([...n,c.trim()]),l(""))}})]})]})}function Es({options:n,value:t,onChange:s,label:r,actionText:i,onAction:c}){const{t:l}=he(),[f,b]=a.useState(""),S=n.filter(N=>t.includes(N.id)),x=n.filter(N=>N.name.toLowerCase().includes(f.toLowerCase()));return e.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[e.jsx(ie,{label:r,actionText:i,onAction:c}),S.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:S.map(N=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>s(t.filter(m=>m!==N.id)),children:[N.name," ",e.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},N.id))}),n.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${l("common.search")}...`,value:f,onChange:N=>b(N.target.value)}),e.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[x.map(N=>e.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[e.jsx("input",{type:"checkbox",checked:t.includes(N.id),onChange:m=>s(m.target.checked?[...t,N.id]:t.filter($=>$!==N.id))}),e.jsx("span",{children:N.name})]},N.id)),x.length===0&&e.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:n.length===0?l("node.noGroupsAvailable"):l("node.noResultsFound")})]})]})}function ht({label:n,checked:t,onChange:s}){return e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:n}),e.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[e.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:t,onChange:r=>s(r.target.checked)}),e.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:t?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:e.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:t?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function dl({initialValue:n,isSnakeCase:t,tlsMode:s,nodeType:r,onCancel:i,onSave:c}){const{t:l}=he(),f=t?"server_name":"serverName",b=t?"allow_insecure":"allowInsecure",S=mt(r),x=el(r),N=s===1&&x,[m,$]=a.useState(String((n==null?void 0:n[f])??"")),[q,D]=a.useState(String((n==null?void 0:n.dest)??"")),[C,M]=a.useState(String((n==null?void 0:n.server_port)??"443")),[T,_]=a.useState(String((n==null?void 0:n.xver)??"0")),[R,I]=a.useState(String((n==null?void 0:n.private_key)??"")),[F,y]=a.useState(String((n==null?void 0:n.public_key)??"")),[E,L]=a.useState(String((n==null?void 0:n.short_id)??"")),[Z,o]=a.useState(String((n==null?void 0:n.fingerprint)??"chrome")),[k,O]=a.useState(String((n==null?void 0:n.pinnedPeerCertSha256)??(n==null?void 0:n.pinned_peer_cert_sha256)??"")),[z,U]=a.useState(String((n==null?void 0:n.verifyPeerCertByName)??(n==null?void 0:n.verify_peer_cert_by_name)??"")),w=String((n==null?void 0:n.cert_mode)??"").trim(),[A,h]=a.useState(w||"auto"),[Q,H]=a.useState(String((n==null?void 0:n.provider)??"")),[ee,Y]=a.useState(String((n==null?void 0:n.dns_env)??"")),[se,ye]=a.useState(String((n==null?void 0:n.cert_file)??"")),[Ie,Fe]=a.useState(String((n==null?void 0:n.key_file)??"")),[De,Me]=a.useState(()=>{const ae=n==null?void 0:n.reject_unknown_sni;return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),[ke,we]=a.useState(String((n==null?void 0:n.ech)??"")),[Ce,fe]=a.useState(String((n==null?void 0:n.ech_server_name)??"")),[qe,j]=a.useState(String((n==null?void 0:n.ech_key)??"")),[ne,G]=a.useState(String((n==null?void 0:n.ech_config)??"")),[be,_e]=a.useState(()=>{const ae=n==null?void 0:n[b];return ae===1||ae===!0||String(ae)==="1"||String(ae)==="true"}),xe=zt(n==null?void 0:n.auto_cert),ze=ll(n==null?void 0:n.auto_cert),Re=ae=>{if(ae.preventDefault(),S&&s===0){c({});return}const nt=S?gt(n,s):zt(n),ue=S?{...nt,[f]:m,fingerprint:Z}:{...n??{},[f]:m,fingerprint:Z},st=k.trim(),et=z.trim();if(st?ue.pinnedPeerCertSha256=st:delete ue.pinnedPeerCertSha256,delete ue.pinned_peer_cert_sha256,et?ue.verifyPeerCertByName=et:delete ue.verifyPeerCertByName,delete ue.verify_peer_cert_by_name,S&&s!==1?(delete ue.allow_insecure,delete ue.allowInsecure):ue[b]=t?be?1:0:be,s===2&&(ue.dest=q,ue.server_port=C,ue.xver=Number(T)||0,ue.private_key=R,ue.public_key=F,ue.short_id=E,ue.ech=ke,ue.ech_server_name=Ce,ue.ech_key=qe,ue.ech_config=ne),N){ue.cert_mode=A;const it=n==null?void 0:n.auto_cert;it&&typeof it=="object"&&(ue.auto_cert=it),A==="none"?(delete ue.provider,delete ue.dns_env,delete ue.cert_file,delete ue.key_file):(Q.trim()?ue.provider=Q:delete ue.provider,ee.trim()?ue.dns_env=ee:delete ue.dns_env,se.trim()?ue.cert_file=se:delete ue.cert_file,Ie.trim()?ue.key_file=Ie:delete ue.key_file),ue.reject_unknown_sni=De?"1":"0"}c(S?gt(ue,s):ue)};return e.jsxs("form",{onSubmit:Re,style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.sni")}),e.jsx("input",{className:"config-input",value:m,onChange:ae=>$(ae.target.value),placeholder:l(s===2?"node.realitySniHelp":"node.serverNameHelp")})]}),s===2?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.dest")}),e.jsx("input",{className:"config-input",value:q,onChange:ae=>D(ae.target.value),placeholder:l("node.destHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.servicePort")}),e.jsx("input",{className:"config-input",value:C,onChange:ae=>M(ae.target.value),placeholder:"443"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.proxyProtocol")}),e.jsxs("select",{className:"config-input",value:T,onChange:ae=>_(ae.target.value),children:[e.jsx("option",{value:"0",children:"0"}),e.jsx("option",{value:"1",children:"1"}),e.jsx("option",{value:"2",children:"2"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.privateKey")}),e.jsx("input",{className:"config-input",value:R,onChange:ae=>I(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.publicKey")}),e.jsx("input",{className:"config-input",value:F,onChange:ae=>y(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.shortId")}),e.jsx("input",{className:"config-input",value:E,onChange:ae=>L(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null,e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.fingerprint")}),e.jsx("select",{className:"config-input",value:Z,onChange:ae=>o(ae.target.value),children:Br.map(ae=>e.jsx("option",{value:ae,children:ae},ae))})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.pinnedPeerCertSha256")}),e.jsx("input",{className:"config-input",value:k,onChange:ae=>O(ae.target.value),placeholder:"AA:BB:CC..."})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.verifyPeerCertByName")}),e.jsx("input",{className:"config-input",value:z,onChange:ae=>U(ae.target.value),placeholder:"example.com"})]})]}),N?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.certMode")}),e.jsxs("select",{className:"config-input",value:A,onChange:ae=>h(ae.target.value),children:[e.jsx("option",{value:"auto",children:l("node.certModeAuto")}),e.jsx("option",{value:"self",children:l("node.certModeSelf")}),e.jsx("option",{value:"http",children:l("node.certModeHttp")}),e.jsx("option",{value:"dns",children:l("node.certModeDns")}),e.jsx("option",{value:"file",children:l("node.certModeFile")}),e.jsx("option",{value:"none",children:l("node.certModeNone")})]})]}),A!=="none"?e.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${ze.state}`,children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[e.jsx("strong",{children:l(ze.labelKey)}),Le(xe.updated_at)?e.jsx("span",{className:"mono",children:Le(xe.updated_at)}):null]}),e.jsx("div",{style:{marginTop:4},children:l(ze.detailKey)}),Le(xe.target)||Le(xe.source)?e.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[Le(xe.target)?`${l("node.autoCertTarget")}: ${Le(xe.target)}`:"",Le(xe.target)&&Le(xe.source)?" · ":"",Le(xe.source)?`${l("node.autoCertSource")}: ${Le(xe.source)}`:""]}):null,Le(xe.public_key_sha256)||Le(xe.sha256_hex)?e.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:Le(xe.public_key_sha256)?`${l("node.autoCertPublicKeySha")}: ${Le(xe.public_key_sha256)}`:`${l("node.autoCertSha")}: ${Le(xe.sha256_hex)}`}):null,Le(xe.error)?e.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:Le(xe.error)}):null]}):null,A==="dns"||A==="auto"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.dnsProvider")}),e.jsx("input",{className:"config-input",value:Q,onChange:ae=>H(ae.target.value),placeholder:"cloudflare"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.dnsEnv")}),e.jsx("input",{className:"config-input",value:ee,onChange:ae=>Y(ae.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,A!=="none"?e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.certFile")}),e.jsx("input",{className:"config-input",value:se,onChange:ae=>ye(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.keyFile")}),e.jsx("input",{className:"config-input",value:Ie,onChange:ae=>Fe(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null,e.jsx(ht,{label:l("node.rejectUnknownSni"),checked:De,onChange:Me})]}):null,!S||S&&s===1?e.jsx(ht,{label:l("node.allowInsecure"),checked:be,onChange:_e}):null,s===2?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.ech")}),e.jsxs("select",{className:"config-input",value:ke,onChange:ae=>we(ae.target.value),children:[e.jsx("option",{value:"",children:l("node.echNone")}),e.jsx("option",{value:"cloudflare",children:"Cloudflare"}),e.jsx("option",{value:"custom",children:l("node.echCustom")})]})]}),ke==="cloudflare"?e.jsx("div",{className:"config-warning",children:l("node.echCloudflareHelp")}):null,ke==="custom"?e.jsxs(e.Fragment,{children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.echServerName")}),e.jsx("input",{className:"config-input",value:Ce,onChange:ae=>fe(ae.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.echKey")}),e.jsx("input",{className:"config-input",value:qe,onChange:ae=>j(ae.target.value),placeholder:l("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:l("node.echConfig")}),e.jsx("input",{className:"config-input",value:ne,onChange:ae=>G(ae.target.value),placeholder:l("node.autoGenHelp")})]})]}):null]}):null,e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:l("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",children:l("common.confirm")})]})]})}function pl({draft:n,set:t,groups:s,routes:r,nodes:i,onOpenJson:c,onAddGroup:l,onOpenTransportConfig:f}){const{t:b}=he(),S=String(n._type),x=mt(S),N=je(n,"network","tcp");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),e.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.name"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:je(n,"name"),onChange:m=>t("name",m.target.value),placeholder:b("node.namePlaceholder")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.rate"),required:!0}),e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:je(n,"rate","1"),onChange:m=>t("rate",m.target.value)})]})]}),e.jsx($s,{value:n.tags??[],onChange:m=>t("tags",m),label:b("node.tags")}),e.jsx($s,{value:Yt(n.load_ips),onChange:m=>t("load_ips",m),label:b("node.loadIps"),placeholder:b("node.loadIpsPlaceholder")}),e.jsx(Es,{options:s.map(m=>({id:m.id,name:m.name})),value:n.group_id??[],onChange:m=>t("group_id",m),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:l}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.address"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:je(n,"host"),onChange:m=>t("host",m.target.value),placeholder:b("node.addressPlaceholder")})]}),x?e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.listenIp")}),e.jsx("input",{className:"config-input",value:je(n,"listen_ip"),onChange:m=>t("listen_ip",m.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(S)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const m=ks(S);c(b("node.connectionSecurityConfig"),m)}}),e.jsxs("select",{className:"config-input",value:je(n,"tls","0"),onChange:m=>{const $=Number(m.target.value);t("tls",$);const q=ks(S);$!==0&&!n[q]&&t(q,{})},children:[e.jsx("option",{value:"0",children:b("node.none")}),e.jsx("option",{value:"1",children:b("node.useTls")}),S!=="vmess"&&e.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(S)?e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>c(b("node.connectionSecurityConfig"),"tls_settings")}),e.jsx("input",{className:"config-input",value:je(n,"server_name"),onChange:m=>t("server_name",m.target.value),placeholder:b("node.sniHelp")})]}):null]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.connectionPort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:je(n,"port"),onChange:m=>t("port",m.target.value),placeholder:"443"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.servicePort"),required:!0}),e.jsx("input",{className:"config-input",required:!0,value:je(n,"server_port"),onChange:m=>t("server_port",m.target.value),placeholder:"443"})]})]}),x?e.jsx(yl,{draft:n,set:t,onOpenJson:c,onOpenTransportConfig:f,onOpenSecurityConfig:()=>c(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(S)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:f}),e.jsxs("select",{className:"config-input",value:N,onChange:m=>{t("network",m.target.value);const $=S==="vmess"?"networkSettings":"network_settings";n[$]||t($,{})},children:[S==="vmess"&&Rr.map(m=>e.jsx("option",{value:m,children:m},m)),S==="trojan"&&ki.map(m=>e.jsx("option",{value:m,children:m},m)),S==="vless"&&Hr.map(m=>e.jsx("option",{value:m,children:m},m))]})]}):null,S==="trojan"&&e.jsx(ml,{draft:n,set:t}),S==="shadowsocks"&&e.jsx(hl,{draft:n,set:t,onOpenJson:c}),S==="hysteria"&&e.jsx(xl,{draft:n,set:t}),S==="tuic"&&e.jsx(bl,{draft:n,set:t}),S==="vless"&&e.jsx(gl,{draft:n,set:t,onOpenJson:c}),S==="anytls"&&e.jsx(fl,{draft:n,set:t,onOpenJson:c}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:b("node.parentNode")}),e.jsxs("select",{className:"config-input",value:n.parent_id?String(n.parent_id):"",onChange:m=>t("parent_id",m.target.value?Number(m.target.value):null),children:[e.jsx("option",{value:"",children:b("node.none")}),i.filter(m=>m.id!==n.id&&!m.parent_id).map(m=>e.jsx("option",{value:m.id,children:m.name},m.id))]})]}),e.jsx(Es,{options:r.map(m=>({id:m.id,name:m.remarks})),value:n.route_id??[],onChange:m=>t("route_id",m),label:b("node.routingGroups")})]})]})}function ul({draft:n,set:t,onCancel:s,onSave:r}){const i=String(n._type),c=String(n.network??"tcp"),l=Qr(i),f=n[l],b=Qn(f)?zt(f):{},S=Xr(i,c),x=Qn(S)?JSON.stringify(S,null,2):void 0;return e.jsx($i,{initialValue:b,placeholder:x,onCancel:s,onSave:N=>{t(l,N),r()}})}function ml({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.trojanConfig")}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.allow_insecure===1,onChange:r=>t("allow_insecure",r?1:0)})]})}function hl({draft:n,set:t,onOpenJson:s}){const{t:r}=he(),i=Zr(n,"obfs_settings");return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.shadowsocksConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.encryptionMethod"),required:!0}),e.jsx("select",{className:"config-input",value:je(n,"cipher","aes-128-gcm"),onChange:c=>t("cipher",c.target.value),children:_i.map(c=>e.jsx("option",{value:c,children:c},c))})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:r("node.obfs"),actionText:n.obfs==="http"?r("node.editConfig"):void 0,onAction:()=>s(r("node.obfs"),"obfs_settings")}),e.jsxs("select",{className:"config-input",value:je(n,"obfs"),onChange:c=>t("obfs",c.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"http",children:"HTTP"})]})]}),n.obfs==="http"&&e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.obfsHost")}),e.jsx("input",{className:"config-input",value:String(i.host??""),onChange:c=>t("obfs_settings",{...i,host:c.target.value}),placeholder:"www.example.com"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.obfsPath")}),e.jsx("input",{className:"config-input",value:String(i.path??""),onChange:c=>t("obfs_settings",{...i,path:c.target.value}),placeholder:"/"})]})]})]})}function xl({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.hysteriaConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.version"),required:!0}),e.jsxs("select",{className:"config-input",value:je(n,"version","2"),onChange:r=>t("version",Number(r.target.value)),children:[e.jsx("option",{value:"1",children:"Hysteria 1"}),e.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:je(n,"up_mbps","0"),onChange:r=>t("up_mbps",Number(r.target.value)),placeholder:s("node.upMbpsHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:je(n,"down_mbps","0"),onChange:r=>t("down_mbps",Number(r.target.value)),placeholder:s("node.downMbpsHelp")})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.obfsMethod")}),e.jsx("input",{className:"config-input",value:je(n,"obfs"),onChange:r=>t("obfs",r.target.value||null),placeholder:s("node.obfsMethodHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:je(n,"obfs_password"),onChange:r=>t("obfs_password",r.target.value),placeholder:s("node.autoGenHelp")})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)})]})}function bl({draft:n,set:t}){const{t:s}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:s("node.tuicConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:je(n,"udp_relay_mode","native"),onChange:r=>t("udp_relay_mode",r.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:s("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:je(n,"congestion_control","bbr"),onChange:r=>t("congestion_control",r.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:s("node.allowInsecure"),checked:n.insecure===1,onChange:r=>t("insecure",r?1:0)}),e.jsx(ht,{label:s("node.disableSni"),checked:n.disable_sni===1,onChange:r=>t("disable_sni",r?1:0)}),e.jsx(ht,{label:s("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:r=>t("zero_rtt_handshake",r?1:0)})]})}function gl({draft:n,set:t,onOpenJson:s}){const{t:r}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.flow")}),e.jsxs("select",{className:"config-input",value:je(n,"flow"),onChange:i=>t("flow",i.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.encryption"),actionText:je(n,"encryption")?r("node.editConfig"):void 0,onAction:()=>s(r("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:je(n,"encryption"),onChange:i=>t("encryption",i.target.value||null),children:[e.jsx("option",{value:"",children:r("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function fl({draft:n,set:t,onOpenJson:s}){const{t:r}=he();return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:r("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:r("node.paddingScheme"),actionText:r("node.editConfig"),onAction:()=>s(r("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),e.jsx(ht,{label:r("node.allowInsecure"),checked:n.insecure===1,onChange:i=>t("insecure",i?1:0)})]})}function yl({draft:n,set:t,onOpenJson:s,onOpenTransportConfig:r,onOpenSecurityConfig:i}){const{t:c}=he(),l=je(n,"protocol"),f=_s(l),b={...xn,...zt(n.warp_settings)},S=os(b.enable),x=(m,$)=>{t("warp_settings",yn({...b,[m]:$}))},N=m=>{if(t("protocol",m),!m){t("tls",0),t("network","tcp");return}hn.includes(m)?(t("tls",1),n.tls_settings||t("tls_settings",{})):m==="shadowsocks"?t("tls",0):m==="vmess"&&Number(n.tls??0)===2&&t("tls",1);const $=_s(m);($.length===0||!$.includes(je(n,"network","tcp")))&&t("network","tcp"),m!=="vless"&&(t("flow",""),t("encryption",""),t("encryption_settings",{})),m!=="hysteria2"&&(t("obfs",null),t("obfs_password",""),t("up_mbps",0),t("down_mbps",0)),m!=="anytls"&&t("padding_scheme","")};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.zicnodeConfig")}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.nodeProtocol"),required:!0}),e.jsxs("select",{className:"config-input",value:l,onChange:m=>N(m.target.value),children:[e.jsx("option",{value:"",children:c("node.selectNodeProtocol")}),Ur.map(m=>e.jsx("option",{value:m,children:m},m))]})]}),l?e.jsxs(e.Fragment,{children:[gn(l)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:c("node.connectionSecurity"),actionText:Number(n.tls??0)!==0?c("node.editConfig"):void 0,onAction:i}),e.jsxs("select",{className:"config-input",value:je(n,"tls",hn.includes(l)?"1":"0"),onChange:m=>{const $=Number(m.target.value);t("tls",$),$!==0&&!n.tls_settings&&t("tls_settings",{})},children:[nl(l)?e.jsx("option",{value:"0",children:c("node.none")}):null,e.jsx("option",{value:"1",children:c("node.useTls")}),fn(l)?e.jsx("option",{value:"2",children:c("node.reality")}):null]})]}):null,sl(l)?e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:c("node.transportProtocol"),required:!0,actionText:c("node.editConfig"),onAction:r}),e.jsx("select",{className:"config-input",value:f.includes(je(n,"network","tcp"))?je(n,"network","tcp"):"tcp",onChange:m=>{t("network",m.target.value),n.network_settings||t("network_settings",{})},children:f.map(m=>e.jsx("option",{value:m,children:m},m))})]}):null]}):null,e.jsx("div",{className:"form-section-title",children:c("node.warpOutbound")}),e.jsx(ht,{label:c("node.warpEnable"),checked:S,onChange:m=>t("warp_settings",yn({...b,enable:m}))}),S?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpMode")}),e.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:m=>x("mode",m.target.value),children:[e.jsx("option",{value:"auto",children:c("node.warpModeAuto")}),e.jsx("option",{value:"manual",children:c("node.warpModeManual")})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpFailPolicy")}),e.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:m=>x("fail_policy",m.target.value),children:[e.jsx("option",{value:"direct",children:c("node.warpFailDirect")}),e.jsx("option",{value:"block",children:c("node.warpFailBlock")})]})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpMtu")}),e.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:m=>x("mtu",Number(m.target.value))})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpDomainStrategy")}),e.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:m=>x("domain_strategy",m.target.value),children:Si.map(m=>e.jsx("option",{value:m,children:m},m))})]})]}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:c("node.warpPrivateKey")}),e.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:m=>x("private_key",m.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpPeerPublicKey")}),e.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:m=>x("peer_public_key",m.target.value),placeholder:c("node.autoGenHelp")})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpEndpoint")}),e.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:m=>x("endpoint",m.target.value)})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpAddresses")}),e.jsx("input",{className:"config-input",value:Ss(b.addresses),onChange:m=>x("addresses",m.target.value)})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.warpReserved")}),e.jsx("input",{className:"config-input",value:Ss(b.reserved),onChange:m=>x("reserved",m.target.value)})]})]})]}):null,l==="vless"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.vlessConfig")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.encryption"),actionText:je(n,"encryption")?c("node.editConfig"):void 0,onAction:()=>s(c("node.encryption"),"encryption_settings")}),e.jsxs("select",{className:"config-input",value:je(n,"encryption"),onChange:m=>t("encryption",m.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.flow")}),e.jsxs("select",{className:"config-input",value:je(n,"flow"),onChange:m=>t("flow",m.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),l==="shadowsocks"&&e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:c("node.encryptionMethod")}),e.jsx("select",{className:"config-input",value:je(n,"cipher","aes-128-gcm"),onChange:m=>t("cipher",m.target.value),children:_i.map(m=>e.jsx("option",{value:m,children:m},m))})]}),l==="hysteria2"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.hysteriaConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.upMbps")}),e.jsx("input",{className:"config-input",type:"number",value:je(n,"up_mbps","0"),onChange:m=>t("up_mbps",Number(m.target.value)),placeholder:"0 = BBR"})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.downMbps")}),e.jsx("input",{className:"config-input",type:"number",value:je(n,"down_mbps","0"),onChange:m=>t("down_mbps",Number(m.target.value)),placeholder:"0 = BBR"})]})]}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.obfsMethod")}),e.jsxs("select",{className:"config-input",value:je(n,"obfs"),onChange:m=>t("obfs",m.target.value||null),children:[e.jsx("option",{value:"",children:c("node.none")}),e.jsx("option",{value:"salamander",children:"salamander"})]})]}),je(n,"obfs")==="salamander"?e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.obfsPassword")}),e.jsx("input",{className:"config-input",value:je(n,"obfs_password"),onChange:m=>t("obfs_password",m.target.value),placeholder:c("node.autoGenHelp")})]}):null]})]}),l==="tuic"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.tuicConfig")}),e.jsxs("div",{className:"form-split",style:{marginTop:8},children:[e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.udpRelayMode")}),e.jsxs("select",{className:"config-input",value:je(n,"udp_relay_mode","native"),onChange:m=>t("udp_relay_mode",m.target.value),children:[e.jsx("option",{value:"native",children:"native"}),e.jsx("option",{value:"quic",children:"quic"})]})]}),e.jsxs("label",{style:{display:"block"},children:[e.jsx(ie,{label:c("node.congestionControl")}),e.jsxs("select",{className:"config-input",value:je(n,"congestion_control","bbr"),onChange:m=>t("congestion_control",m.target.value),children:[e.jsx("option",{value:"bbr",children:"bbr"}),e.jsx("option",{value:"cubic",children:"cubic"}),e.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),e.jsx(ht,{label:c("node.disableSni"),checked:n.disable_sni===1,onChange:m=>t("disable_sni",m?1:0)}),e.jsx(ht,{label:c("node.enable0rtt"),checked:n.zero_rtt_handshake===1,onChange:m=>t("zero_rtt_handshake",m?1:0)})]}),l==="anytls"&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"form-section-title",children:c("node.anytlsConfig")}),e.jsxs("label",{style:{display:"block",marginTop:8},children:[e.jsx(ie,{label:c("node.paddingScheme"),actionText:c("node.editConfig"),onAction:()=>s(c("node.paddingScheme"),"padding_scheme")}),e.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof n.padding_scheme=="string"?n.padding_scheme:n.padding_scheme?JSON.stringify(n.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Ms={vmess:ja,vless:Pa,trojan:Bn,shadowsocks:es,hysteria:ga,tuic:Vi,anytls:Vt,v2node:Un,zicnode:Un},vl={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},jl={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Nt(n){return vl[n]??jl}function wl({draft:n,config:t,onCopy:s,t:r}){const i=Number(n.id??0),c=i>0?cl(i,t):"",l=!t.apiKey;return e.jsxs("div",{className:"node-install-panel",children:[e.jsxs("div",{className:"node-install-head",children:[e.jsx("strong",{children:r("node.quickInstallTitle")}),e.jsx("span",{children:r("node.quickInstallHelp")})]}),i>0?e.jsxs(e.Fragment,{children:[e.jsx("pre",{className:"node-install-command",children:c}),e.jsxs("div",{className:"node-install-actions",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>s(c),children:[e.jsx(Zt,{size:15}),r("node.copyInstallCommand")]}),l?e.jsx("span",{className:"node-install-warning",children:r("node.installMissingConfig")}):null]})]}):e.jsx("div",{className:"node-install-warning",children:r("node.installSaveFirst")})]})}function Nl(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState([]),[l,f]=a.useState([]),[b,S]=a.useState(null),[x,N]=a.useState(null),[m,$]=a.useState(!0),[q,D]=a.useState(!1),[C,M]=a.useState(""),[T,_]=a.useState(""),[R,I]=a.useState(1),[F,y]=a.useState(()=>Kr()),[E,L]=a.useState(!1),[Z,o]=a.useState({}),[k,O]=a.useState({apiHost:as,apiKey:""}),[z,U]=a.useState(!1),[w,A]=a.useState(""),[h,Q]=a.useState(null),[H,ee]=a.useState(null),[Y,se]=a.useState(null),[ye,Ie]=a.useState(null),Fe=(p,v)=>{p.dataTransfer.effectAllowed="move",se(v)},De=(p,v)=>{if(p.preventDefault(),Y===null||Y===v)return;const g=[...s],X=g[Y];g.splice(Y,1),g.splice(v,0,X),se(v),r(g)},Me=()=>{se(null)},ke=(p,v)=>{E&&Ie(v)},we=p=>{if(!E||ye===null)return;p.cancelable&&p.preventDefault();const v=p.touches[0],g=document.elementFromPoint(v.clientX,v.clientY);if(!g)return;const X=g.closest(".mobile-node-card");if(!X)return;const de=X.getAttribute("data-index");if(de===null)return;const ce=Number(de);if(ce!==ye&&ce>=0&&ce<s.length){const pe=[...s],Te=pe[ye];pe.splice(ye,1),pe.splice(ce,0,Te),Ie(ce),r(pe)}},Ce=()=>{Ie(null)};a.useEffect(()=>{I(1)},[w,F]),a.useEffect(()=>{try{window.localStorage.setItem(Ci,String(F))}catch{}},[F]);const fe=s.filter(p=>{const v=w.toLowerCase().trim();return v?p.name.toLowerCase().includes(v)||p.host.toLowerCase().includes(v)||Yt(p.load_ips).some(g=>g.toLowerCase().includes(v))||String(p.id).includes(v)||p.type.toLowerCase().includes(v):!0}),qe=Math.ceil(fe.length/F),j=fe.slice((R-1)*F,R*F);function ne(p,v){return v<=7?Array.from({length:v},(g,X)=>X+1):p<=4?[1,2,3,4,5,"...",v]:p>=v-3?[1,"...",v-4,v-3,v-2,v-1,v]:[1,"...",p-1,p,p+1,"...",v]}const G=ne(R,qe),be=async()=>{var p,v;D(!0),M(""),_("");try{const g={};s.forEach((X,de)=>{g[X.type]||(g[X.type]={}),g[X.type][String(X.id)]=de+1}),await or(g),(p=window.showToast)==null||p.call(window,t("node.saveSortSuccess"),"success"),L(!1),await me()}catch(g){M(g instanceof Error?g.message:t("node.saveSortFailed")),(v=window.showToast)==null||v.call(window,g instanceof Error?g.message:t("node.saveSortFailed"),"error")}finally{D(!1)}},_e=async()=>{L(!1),await ve()},xe=()=>fe.length===0?null:e.jsxs("div",{className:"node-pagination",children:[e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===1,onClick:()=>I(p=>Math.max(p-1,1)),children:"<"}),G.map((p,v)=>p==="..."?e.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${v}`):e.jsx("button",{type:"button",className:`pagination-btn num-btn ${R===p?"active":""}`,onClick:()=>I(Number(p)),children:p},`page-${p}`)),e.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:R===qe||qe===0,onClick:()=>I(p=>Math.min(p+1,qe)),children:">"}),e.jsx("div",{className:"pagination-size-select-wrapper",children:e.jsx("select",{className:"pagination-size-select",value:F,onChange:p=>{const v=Number(p.target.value);zi(v)&&y(v)},children:bn.map(p=>e.jsxs("option",{value:p,children:[p," / ",t("common.perPage")]},p))})})]}),[ze,Re]=a.useState(null),[ae,nt]=a.useState(!1),[ue,st]=a.useState(""),[et,it]=a.useState(!1),[P,re]=a.useState(!1);async function oe(p){var g,X;p.preventDefault();const v=ue.trim();if(!(!v||!b)){it(!0),M(""),_("");try{await ns({name:v});const de=await Ht();c(de);const ce=de.filter(pe=>pe.name===v).sort((pe,Te)=>Te.id-pe.id)[0];if(ce){const pe=b.group_id??[];pe.includes(ce.id)||ut("group_id",[...pe,ce.id])}st(""),nt(!1),(g=window.showToast)==null||g.call(window,t("node.groupCreateSuccess"),"success")}catch(de){M(de instanceof Error?de.message:t("node.groupCreateFailed")),(X=window.showToast)==null||X.call(window,de instanceof Error?de.message:t("node.groupCreateFailed"),"error")}finally{it(!1)}}}const te=(p,v)=>{if(!b)return;let g=b[v];if(typeof g=="string"&&g.trim())try{g=JSON.parse(g)}catch{}["tlsSettings","tls_settings"].includes(v)&&mt(String(b._type))&&(g=gt(g,Number(b.tls??0))),Re({title:p,key:v,value:g&&typeof g=="object"?g:{}})},ve=a.useCallback(async()=>{var p,v,g,X,de;$(!0),M("");try{const[ce,pe,Te,Ye]=await Promise.all([gs(),Ht(),bi(),mi()]);r(ce.data),c(pe),f(Te);const ge=Cs((p=Ye.site)==null?void 0:p.app_url);O({apiHost:Cs((v=Ye.server)==null?void 0:v.server_api_url,ge),apiKey:Le((g=Ye.server)==null?void 0:g.server_token)}),U(os(((X=Ye.subscribe)==null?void 0:X.device_hwid_available)??((de=Ye.subscribe)==null?void 0:de.device_hwid_enable)))}catch(ce){M(ce instanceof Error?ce.message:t("knowledge.loadFailed"))}finally{$(!1)}},[]),me=a.useCallback(async()=>{try{const p=await gs();r(p.data)}catch(p){console.error("Refresh nodes failed",p)}},[]);async function Ee(p){var g;const v=await Ct(p);(g=window.showToast)==null||g.call(window,t(v?"node.installCopied":"common.copyFailed"),v?"success":"error")}a.useEffect(()=>{if(!He()){n.replace("/login");return}ve()},[ve,n]);function Se(p){S(Ps(p)),N(null),M(""),_("")}function Ke(p){S(Ps(p.type,p)),M(""),_("")}function at(p){!z||Number(p.online??0)<=0||n.push(`/device?node_type=${encodeURIComponent(p.type)}&node_id=${encodeURIComponent(String(p.id))}`)}function Be(p,v){const g=Yt(p.load_ips);if(!g.length)return v==="desktop"?e.jsx("span",{style:{color:"var(--muted)"},children:"-"}):null;const X=v==="mobile"?2:3,de=g.slice(0,X),ce=g.length-de.length;return e.jsxs("div",{className:"match-tags",title:g.join(", "),style:{gap:4},children:[de.map(pe=>e.jsx("span",{className:"tag mono",children:pe},pe)),ce>0?e.jsxs("span",{className:"tag",children:["+",ce]}):null]})}function Pt(p){return`${p.type}-${p.id}`}function tt(p){const v=Yt(p.load_ips),g=Array.isArray(p.load_ip_online)?p.load_ip_online:[],X=new Map;return g.forEach(de=>{if(!de||typeof de!="object")return;const ce=de,pe=String(ce.ip??"").trim();if(!pe)return;const Te=ce.last_push_at;X.set(pe,{online:Math.max(0,Number(ce.online??0)),lastPushAt:Te==null||Te===""?null:Number(Te)})}),v.map(de=>{const ce=X.get(de);return{ip:de,online:Math.max(0,Number((ce==null?void 0:ce.online)??0)),lastPushAt:(ce==null?void 0:ce.lastPushAt)??null,reported:(ce==null?void 0:ce.lastPushAt)!==null&&(ce==null?void 0:ce.lastPushAt)!==void 0}})}function Lt(p,v){return v.some(g=>g.reported)?v.reduce((g,X)=>g+X.online,0):Number(p.online??0)}function Ut(p,v){return e.jsxs("div",{className:"load-ip-online-popover",role:"tooltip",children:[e.jsxs("div",{className:"load-ip-online-head",children:[e.jsx("span",{children:t("node.loadIpOnlineByIp")}),e.jsxs("strong",{children:[t("node.loadIpOnlineTotal"),": ",v]})]}),e.jsx("div",{className:"load-ip-online-list",children:p.map(g=>e.jsxs("div",{className:"load-ip-online-row",children:[e.jsx("span",{className:"mono",children:g.ip}),e.jsx("span",{className:`load-ip-online-count${g.reported?"":" is-muted"}`,children:g.reported?g.online:t("node.loadIpOnlineNoReport")})]},g.ip))})]})}function It(p,v){const g=tt(p),X=g.length>0,de=X?Lt(p,g):Number(p.online??0),ce=!X&&z&&de>0,Te=`${v==="mobile"?"mobile-badge-pill":"online-badge"}${ce||X?" online-badge-link":""}${X?" load-ip-online-trigger":""}`,Ye=v==="mobile"?12:13,ge={...v==="mobile"?{marginRight:4}:{},color:de>0?"#10b981":"var(--muted)",opacity:de>0?1:.6},dt=X?Un:di,d=e.jsxs(e.Fragment,{children:[e.jsx(dt,{size:Ye,style:ge}),de]});if(X){const B=Pt(p),W=H===B;return e.jsxs("span",{className:`load-ip-online-wrap${W?" active":""}`,onMouseEnter:()=>ee(B),onMouseLeave:()=>ee(le=>le===B?null:le),children:[e.jsx("button",{className:Te,type:"button",title:t("node.loadIpOnline"),"aria-expanded":W,onClick:()=>ee(le=>le===B?null:B),children:d}),W?Ut(g,de):null]})}return ce?e.jsx("button",{className:Te,type:"button",title:t("node.viewOnlineDevices"),onClick:()=>at(p),children:d}):e.jsx("span",{className:Te,children:d})}async function Ft(p){var ce,pe,Te,Ye;if(p.preventDefault(),!b)return;D(!0),M(""),_("");const v=String(b._type),g={...b};if(mt(v)&&!Le(g.protocol)){M(t("node.protocolRequired")),(ce=window.showToast)==null||ce.call(window,t("node.protocolRequired"),"error"),D(!1);return}if(g.load_ips=Pi(g.load_ips),g.load_ips.length>100){M(t("node.loadIpsLimit")),(pe=window.showToast)==null||pe.call(window,t("node.loadIpsLimit"),"error"),D(!1);return}for(const ge of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete g[ge];if(g.padding_scheme!==void 0&&g.padding_scheme!==null&&typeof g.padding_scheme!="string"&&(g.padding_scheme=JSON.stringify(g.padding_scheme)),g.padding_scheme)try{const ge=JSON.parse(String(g.padding_scheme));if(typeof ge!="object"||ge===null)throw new Error("Invalid JSON array or object")}catch(ge){M("Invalid Padding Scheme configuration: "+(ge instanceof Error?ge.message:"JSON error")),D(!1);return}const X=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const ge of X)(g[ge]===""||g[ge]===null||g[ge]===void 0)&&delete g[ge];if(mt(v)){const ge=String(g.protocol??""),dt=Number(g.tls??0);g.warp_settings=yn(g.warp_settings),gn(ge)?hn.includes(ge)&&dt!==2||!fn(ge)&&dt===2?(g.tls=1,g.tls_settings=gt(g.tls_settings,1)):g.tls_settings=gt(g.tls_settings,dt):(g.tls=0,g.tls_settings={})}const de=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const ge of de){const dt=g[ge];(dt==null||typeof dt=="object"&&Object.keys(dt).length===0)&&delete g[ge]}g.port!==void 0&&(g.port=String(g.port).trim()),g.server_port!==void 0&&(g.server_port=Number(g.server_port)),g.tls!==void 0&&(g.tls=Number(g.tls)),g.rate!==void 0&&(g.rate=Number(g.rate));try{await nr(v,g),S(null),(Te=window.showToast)==null||Te.call(window,t("node.saveSuccess"),"success"),await me()}catch(ge){M(ge instanceof Error?ge.message:t("node.saveFailed")),(Ye=window.showToast)==null||Ye.call(window,ge instanceof Error?ge.message:t("node.saveFailed"),"error")}finally{D(!1)}}async function $t(p){const v=[...s];r(g=>g.map(X=>X.id===p.id&&X.type===p.type?{...X,show:p.show?0:1}:X));try{await ir(p.type,p.id,p.show?0:1),await me()}catch(g){r(v),M(g instanceof Error?g.message:t("node.updateFailed"))}}async function Et(p){var v,g;try{await ar(p.type,p.id),(v=window.showToast)==null||v.call(window,t("node.copySuccess"),"success"),await me()}catch(X){M(X instanceof Error?X.message:t("node.copyFailed")),(g=window.showToast)==null||g.call(window,X instanceof Error?X.message:t("node.copyFailed"),"error")}}async function wt(p){var v;(v=window.showConfirm)==null||v.call(window,{message:t("node.deleteConfirm",{name:p.name}),onConfirm:async()=>{var X,de;const g=[...s];r(ce=>ce.filter(pe=>!(pe.id===p.id&&pe.type===p.type))),M("");try{await sr(p.type,p.id),(X=window.showToast)==null||X.call(window,t("node.deleteSuccess"),"success"),await me()}catch(ce){r(g),M(ce instanceof Error?ce.message:t("node.deleteFailed")),(de=window.showToast)==null||de.call(window,ce instanceof Error?ce.message:t("node.deleteFailed"),"error")}}})}const ut=(p,v)=>S(g=>{if(!g)return null;const X={...g,[p]:v};if(!mt(String(X._type)))return X;if(p==="tls_settings"&&(X.tls_settings=gt(v,Number(X.tls??0))),p==="tls"&&(X.tls_settings=gt(X.tls_settings,Number(v))),p==="warp_settings"&&(X.warp_settings=yn(v)),p==="protocol"){const de=String(v);gn(de)?!fn(de)&&Number(X.tls??0)===2?(X.tls=1,X.tls_settings=gt(X.tls_settings,1)):X.tls_settings=gt(X.tls_settings,Number(X.tls??0)):(X.tls=0,X.tls_settings={})}return X}),At=b?String(b._type):"",u=il(At);return e.jsxs(We,{title:t("node.title"),subtitle:t("node.subtitle"),children:[e.jsxs("div",{className:"node-toolbar-desktop",children:[e.jsxs("div",{className:"left-toolbar-group",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>N(x?null:"show"),title:t("node.createNode"),children:e.jsx(lt,{size:18})}),x!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>N(null)}),e.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Zn.map(p=>{const v=Nt(p.value),g=Ms[p.value]||un;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Se(p.value),N(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:v==null?void 0:v.bg,backgroundColor:v==null?void 0:v.rowBg},children:e.jsx(g,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(v==null?void 0:v.bg)??"var(--surface-soft)",color:(v==null?void 0:v.text)??"#ffffff"},children:p.label})]},p.value)})]})]})]}),e.jsx("div",{className:"desktop-search-wrap",children:e.jsx("input",{type:"text",className:"desktop-search-input",value:w,onChange:p=>A(p.target.value),placeholder:`${t("common.search")}...`})})]}),e.jsxs("div",{className:"right-toolbar-group",children:[e.jsx("button",{className:`primary-button ${E?"success-btn":""}`,type:"button",onClick:E?be:()=>L(!0),disabled:q,children:t(E?q?"node.saving":"node.saveOrder":"node.editSortOrder")}),E&&e.jsx("button",{className:"ghost-button",type:"button",onClick:_e,children:t("common.cancel")})]})]}),C?e.jsx("div",{className:"form-error",children:C}):null,T?e.jsx("div",{className:"form-success",children:T}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("node.colShow")}),e.jsx("th",{children:e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[t("node.colName"),e.jsxs("span",{className:"status-help-trigger",children:["?",e.jsxs("span",{className:"status-help-tooltip",children:[e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot red"})," ",t("node.statusInactive")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot orange"})," ",t("node.statusError")]}),e.jsxs("span",{className:"tooltip-item",children:[e.jsx("span",{className:"tooltip-dot blue"})," ",t("node.statusNormal")]})]})]})]})}),e.jsx("th",{className:"mobile-hide",children:t("node.address")}),e.jsx("th",{children:t("node.colOnline")}),e.jsx("th",{className:"mobile-hide",children:t("node.loadIpsShort")}),e.jsx("th",{className:"mobile-hide",children:t("node.colRate")}),e.jsx("th",{children:t("node.colGroups")}),e.jsx("th",{children:t(E?"node.colSort":"common.actions")})]})}),e.jsxs("tbody",{children:[j.map(p=>{const v=s.findIndex(g=>g.id===p.id&&g.type===p.type);return e.jsxs("tr",{draggable:E,onDragStart:g=>Fe(g,v),onDragOver:g=>De(g,v),onDragEnd:Me,className:Y===v?"dragging":"",children:[e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Nt(p.type).bg,color:Nt(p.type).text,border:`1px solid ${Nt(p.type).border}`},children:p.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${p.show?"active":""}`,type:"button",onClick:()=>void $t(p),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[e.jsx("span",{className:`status-indicator-dot status-${p.available_status??0}`,title:p.available_status===2?t("node.statusNormal"):p.available_status===1?t("node.statusError"):t("node.statusInactive")}),e.jsx("strong",{children:p.name})]})}),e.jsx("td",{className:"mobile-hide",children:e.jsxs("span",{className:"mono",children:[p.host,":",p.port||p.server_port]})}),e.jsx("td",{children:It(p,"desktop")}),e.jsx("td",{className:"mobile-hide",children:Be(p,"desktop")}),e.jsxs("td",{className:"mobile-hide",children:[p.rate,"x"]}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:(()=>{const g=p.group_id??[],X=Z[`${p.type}-${p.id}`],de=g.map(Te=>{const Ye=i.find(ge=>Number(ge.id)===Number(Te));return e.jsx("span",{className:"tag",children:(Ye==null?void 0:Ye.name)??`#${Te}`},Te)});if(g.length<=3||X)return e.jsxs(e.Fragment,{children:[de,g.length>3&&e.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>o(Te=>({...Te,[`${p.type}-${p.id}`]:!1})),children:t("node.collapse")})]});const ce=de.slice(0,3),pe=g.length-3;return e.jsxs(e.Fragment,{children:[ce,e.jsxs("div",{className:"group-tooltip-container",children:[e.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>o(Te=>({...Te,[`${p.type}-${p.id}`]:!0})),children:["+",pe,"..."]}),e.jsxs("div",{className:"group-tooltip",children:[e.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:t("node.allPermissionGroups",{count:g.length})}),de]})]})]})})()})}),e.jsx("td",{children:E?e.jsx("div",{className:"drag-handle",title:t("node.dragDropHelp"),children:e.jsx(Kt,{size:18})}):e.jsxs("div",{className:`action-dropdown-wrap ${(h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>Q((h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type?null:{id:p.id,type:p.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>Q(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ke(p),Q(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(p),Q(null)},children:[e.jsx(Zt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{wt(p),Q(null)},children:[e.jsx(Qe,{size:14})," ",t("common.delete")]})]})]})]})})]},`${p.type}-${p.id}`)}),!m&&fe.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")})})}):null]})]})}),xe()]}),e.jsxs("div",{className:"mobile-node-toolbar",children:[e.jsxs("div",{style:{position:"relative"},children:[e.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>N(x?null:"show"),title:t("node.createNode"),children:e.jsx(lt,{size:20})}),x!==null&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"dropdown-overlay",onClick:()=>N(null)}),e.jsxs("div",{className:"dropdown-menu",children:[e.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[e.jsx("div",{className:"mobile-sheet-handle"}),e.jsx("h3",{className:"mobile-sheet-title",children:t("node.selectProtocolTitle")}),e.jsx("p",{className:"mobile-sheet-subtitle",children:t("node.selectProtocolSubtitle")})]}),Zn.map(p=>{const v=Nt(p.value),g=Ms[p.value]||un;return e.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Se(p.value),N(null)},children:[e.jsx("div",{className:"protocol-icon-wrapper",style:{color:v==null?void 0:v.bg,backgroundColor:v==null?void 0:v.rowBg},children:e.jsx(g,{size:20})}),e.jsx("span",{className:"protocol-badge",style:{backgroundColor:(v==null?void 0:v.bg)??"var(--surface-soft)",color:(v==null?void 0:v.text)??"#ffffff"},children:p.label})]},p.value)})]})]})]}),e.jsx("div",{className:"mobile-search-wrap",children:e.jsx("input",{type:"text",className:"mobile-search-input",value:w,onChange:p=>A(p.target.value),placeholder:`${t("common.search")}...`})}),e.jsx("button",{className:`mobile-sort-btn ${E?"active":""}`,type:"button",onClick:()=>L(!E),title:t("node.editSortOrder"),children:e.jsx(Kt,{size:20})})]}),E&&e.jsxs("div",{className:"mobile-sorting-bar",children:[e.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:t("node.dragDropHelp")}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:_e,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t("common.cancel")}),e.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void be(),disabled:q,style:{minHeight:30,padding:"0 10px",fontSize:12},children:t(q?"node.saving":"common.save")})]})]}),e.jsxs("div",{className:"mobile-node-list",children:[j.map(p=>{const v=s.findIndex(g=>g.id===p.id&&g.type===p.type);return e.jsxs("div",{className:`mobile-node-card ${Y===v||ye===v?"dragging":""}`,draggable:E,onDragStart:g=>Fe(g,v),onDragOver:g=>De(g,v),onDragEnd:Me,onTouchStart:g=>ke(g,v),onTouchMove:we,onTouchEnd:Ce,"data-index":v,style:E?{touchAction:"none"}:void 0,children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",children:[e.jsx("span",{className:`status-indicator-dot status-${p.available_status??0}`,title:p.available_status===2?t("node.statusNormal"):p.available_status===1?t("node.statusError"):t("node.statusInactive")}),e.jsx("span",{className:"mobile-node-name",children:p.name})]}),e.jsx("div",{className:"card-header-right",children:E?e.jsx("div",{className:"drag-handle",title:t("node.dragDropHelp"),children:e.jsx(Kt,{size:18})}):e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:`admin-switch ${p.show===1?"active":""}`,onClick:()=>void $t(p),children:e.jsx("span",{className:"admin-switch-thumb"})}),e.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),e.jsxs("div",{className:`action-dropdown-wrap ${(h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[e.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>Q((h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type?null:{id:p.id,type:p.type}),children:[t("common.actions")," ",e.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(h==null?void 0:h.id)===p.id&&(h==null?void 0:h.type)===p.type&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"action-dropdown-overlay",onClick:()=>Q(null)}),e.jsxs("div",{className:"action-dropdown-menu",children:[e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ke(p),Q(null)},children:[e.jsx(Ge,{size:14})," ",t("common.edit")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Et(p),Q(null)},children:[e.jsx(Zt,{size:14})," ",t("common.copy")]}),e.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{wt(p),Q(null)},children:[e.jsx(Qe,{size:14})," ",t("common.delete")]})]})]})]})]})})]}),e.jsxs("div",{className:"card-middle-row",children:[e.jsxs("span",{className:"mobile-node-address",children:[p.host,":",p.port||p.server_port]}),Be(p,"mobile")]}),e.jsxs("div",{className:"card-bottom-row",children:[e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Nt(p.type).bg,color:Nt(p.type).text,border:`1px solid ${Nt(p.type).border}`},children:p.id}),It(p,"mobile"),e.jsxs("span",{className:"mobile-badge-pill",children:[p.rate," x"]})]})]},`${p.type}-${p.id}`)}),!m&&fe.length===0&&e.jsx("div",{className:"empty-state",children:t("node.noNodesFound")}),xe()]}),b!==null&&e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:b.id?t("node.editNodeTitle",{type:u}):t("node.createNodeTitle",{type:u})}),e.jsx("p",{children:t("node.configureFieldsSubtitle",{type:u})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ft,children:[e.jsx(pl,{draft:b,set:ut,groups:i,routes:l,nodes:s,onOpenJson:te,onAddGroup:()=>nt(!0),onOpenTransportConfig:()=>re(!0)}),mt(At)?e.jsx(wl,{draft:b,config:k,onCopy:p=>void Ee(p),t}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ct,{size:16}),t(q?"node.saving":"common.save")]})]})]})]})}),ze!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:ze.title}),e.jsx("p",{children:["tlsSettings","tls_settings"].includes(ze.key)?t("node.connectionSecurityEditorSubtitle"):t("node.jsonEditorSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>Re(null),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(ze.key)?e.jsx(dl,{initialValue:ze.value,isSnakeCase:ze.key==="tls_settings",tlsMode:tl(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>Re(null),onSave:p=>{ut(ze.key,p),Re(null)}}):e.jsx($i,{initialValue:ze.value,onCancel:()=>Re(null),onSave:p=>{ut(ze.key,p),Re(null)}})})]})}),ae&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>nt(!1),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{onSubmit:oe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:ue,onChange:p=>st(p.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>nt(!1),disabled:et,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:et||!ue.trim(),children:t(et?"node.saving":"common.confirm")})]})]})]})}),P&&b!==null&&e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),e.jsx("p",{children:t("node.transportConfigSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>re(!1),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"18px"},children:e.jsx(ul,{draft:b,set:ut,onCancel:()=>re(!1),onSave:()=>re(!1)})})]})})]})}function kl(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(null),[l,f]=a.useState(!0),[b,S]=a.useState(!1),[x,N]=a.useState(""),m=a.useCallback(async()=>{f(!0),N("");try{r(await Ht())}catch(C){N(C instanceof Error?C.message:t("serverGroup.loadFailed"))}finally{f(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}m()},[m,n]);function $(C){c({id:C==null?void 0:C.id,name:(C==null?void 0:C.name)??""}),N("")}async function q(C){var M;if(C.preventDefault(),!!i){S(!0),N("");try{await ns(i),c(null),(M=window.showToast)==null||M.call(window,t("serverGroup.saveSuccess"),"success"),await m()}catch(T){N(T instanceof Error?T.message:t("serverGroup.saveFailed"))}finally{S(!1)}}}async function D(C){var M;(M=window.showConfirm)==null||M.call(window,{message:t("serverGroup.deleteConfirm"),onConfirm:async()=>{var T,_;N("");try{await ao(C),(T=window.showToast)==null||T.call(window,t("serverGroup.deleteSuccess"),"success"),await m()}catch(R){N(R instanceof Error?R.message:t("serverGroup.deleteFailed")),(_=window.showToast)==null||_.call(window,R instanceof Error?R.message:t("serverGroup.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverGroup.title"),subtitle:t("serverGroup.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverGroup.heading")}),e.jsx("p",{children:t("serverGroup.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:m,disabled:l,children:[e.jsx(Oe,{size:16}),t(l?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(lt,{size:16}),t("serverGroup.add")]})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,l&&s.length===0?e.jsx($e,{label:t("serverGroup.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverGroup.id")}),e.jsx("th",{children:t("serverGroup.name")}),e.jsx("th",{children:t("serverGroup.userCount")}),e.jsx("th",{children:t("serverGroup.serverCount")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(C=>e.jsxs("tr",{children:[e.jsx("td",{children:C.id}),e.jsx("td",{children:e.jsx("strong",{children:C.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(mn,{size:14}),C.user_count??0]})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(un,{size:14}),C.server_count??0]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(C),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(C.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},C.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:5,children:e.jsx("div",{className:"empty-state",children:t("serverGroup.empty")})})}):null]})]})})}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i.id?t("serverGroup.edit"):t("serverGroup.add")}),e.jsx("p",{children:t("serverGroup.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:q,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverGroup.name")}),e.jsx("input",{className:"config-input",required:!0,value:i.name,onChange:C=>c({...i,name:C.target.value}),placeholder:t("serverGroup.namePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ct,{size:16}),t(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function _l(n){return{id:n==null?void 0:n.id,remarks:(n==null?void 0:n.remarks)??"",match:Array.isArray(n==null?void 0:n.match)?n.match.join(`
`):"",action:(n==null?void 0:n.action)??"block",action_value:(n==null?void 0:n.action_value)??""}}function Sl(n){var t;return((t=xi.find(s=>s.value===n))==null?void 0:t.label)??n}function Cl(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(null),[l,f]=a.useState(!0),[b,S]=a.useState(!1),[x,N]=a.useState(""),m=a.useCallback(async()=>{f(!0),N("");try{r(await bi())}catch(C){N(C instanceof Error?C.message:t("serverRoute.loadFailed"))}finally{f(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}m()},[m,n]);function $(C){c(_l(C)),N("")}async function q(C){var T;if(C.preventDefault(),!i)return;S(!0),N("");const M=i.action==="default_out"?[]:i.match.split(`
`).map(_=>_.trim()).filter(Boolean);try{await oo({id:i.id,remarks:i.remarks,match:M,action:i.action,action_value:i.action_value||null}),c(null),(T=window.showToast)==null||T.call(window,t("serverRoute.saveSuccess"),"success"),await m()}catch(_){N(_ instanceof Error?_.message:t("serverRoute.saveFailed"))}finally{S(!1)}}async function D(C){var M;(M=window.showConfirm)==null||M.call(window,{message:t("serverRoute.deleteConfirm"),onConfirm:async()=>{var T,_;N("");try{await ro(C),(T=window.showToast)==null||T.call(window,t("serverRoute.deleteSuccess"),"success"),await m()}catch(R){N(R instanceof Error?R.message:t("serverRoute.deleteFailed")),(_=window.showToast)==null||_.call(window,R instanceof Error?R.message:t("serverRoute.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("serverRoute.title"),subtitle:t("serverRoute.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("serverRoute.heading")}),e.jsx("p",{children:t("serverRoute.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:m,disabled:l,children:[e.jsx(Oe,{size:16}),t(l?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[e.jsx(lt,{size:16}),t("serverRoute.add")]})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,l&&s.length===0?e.jsx($e,{label:t("serverRoute.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("serverRoute.id")}),e.jsx("th",{children:t("serverRoute.remarks")}),e.jsx("th",{children:t("serverRoute.matchValues")}),e.jsx("th",{children:t("serverRoute.action")}),e.jsx("th",{children:t("serverRoute.actionValue")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(C=>e.jsxs("tr",{children:[e.jsx("td",{children:C.id}),e.jsx("td",{children:e.jsx("strong",{children:C.remarks})}),e.jsx("td",{children:e.jsxs("div",{className:"match-tags",children:[(Array.isArray(C.match)?C.match:[]).slice(0,3).map((M,T)=>e.jsx("span",{className:"tag",children:M},T)),Array.isArray(C.match)&&C.match.length>3?e.jsxs("span",{className:"tag muted-tag",children:["+",C.match.length-3]}):null,!Array.isArray(C.match)||C.match.length===0?e.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),e.jsx("td",{children:e.jsx("span",{className:"status-pill enabled",children:Sl(C.action)})}),e.jsx("td",{children:C.action_value||"—"}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(C),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void D(C.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},C.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("serverRoute.empty")})})}):null]})]})})}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i.id?t("serverRoute.edit"):t("serverRoute.add")}),e.jsx("p",{children:t("serverRoute.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:q,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.remarks")}),e.jsx("input",{className:"config-input",required:!0,value:i.remarks,onChange:C=>c({...i,remarks:C.target.value}),placeholder:t("serverRoute.remarksPlaceholder")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.action")}),e.jsx("select",{className:"config-input",value:i.action,onChange:C=>c({...i,action:C.target.value}),children:xi.map(C=>e.jsx("option",{value:C.value,children:C.label},C.value))})]}),i.action!=="default_out"?e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.matchValues")}),e.jsx("textarea",{className:"config-input",rows:6,value:i.match,onChange:C=>c({...i,match:C.target.value}),placeholder:t("serverRoute.matchPlaceholder")})]}):null,e.jsxs("label",{children:[e.jsx("span",{children:t("serverRoute.actionValue")}),e.jsx("input",{className:"config-input",value:i.action_value,onChange:C=>c({...i,action_value:C.target.value}),placeholder:t("serverRoute.actionValuePlaceholder")})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ct,{size:16}),t(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function zl(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",content:(n==null?void 0:n.content)??"",group_id:String((n==null?void 0:n.group_id)??""),transfer_enable:n?String(n.transfer_enable):"",device_limit:(n==null?void 0:n.device_limit)!=null?String(n.device_limit):"",speed_limit:(n==null?void 0:n.speed_limit)!=null?String(n.speed_limit):"",month_price:(n==null?void 0:n.month_price)!=null?String(n.month_price/100):"",quarter_price:(n==null?void 0:n.quarter_price)!=null?String(n.quarter_price/100):"",half_year_price:(n==null?void 0:n.half_year_price)!=null?String(n.half_year_price/100):"",year_price:(n==null?void 0:n.year_price)!=null?String(n.year_price/100):"",two_year_price:(n==null?void 0:n.two_year_price)!=null?String(n.two_year_price/100):"",three_year_price:(n==null?void 0:n.three_year_price)!=null?String(n.three_year_price/100):"",onetime_price:(n==null?void 0:n.onetime_price)!=null?String(n.onetime_price/100):"",reset_price:(n==null?void 0:n.reset_price)!=null?String(n.reset_price/100):"",reset_traffic_method:(n==null?void 0:n.reset_traffic_method)!=null?String(n.reset_traffic_method):"0",capacity_limit:(n==null?void 0:n.capacity_limit)!=null?String(n.capacity_limit):"",allow_subscribe_url:(n==null?void 0:n.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Tl(n){const t=r=>r===""?null:Math.round(Number(r)*100),s=r=>r===""?null:Number(r);return{id:n.id,name:n.name,content:n.content||null,group_id:Number(n.group_id),transfer_enable:Number(n.transfer_enable),device_limit:s(n.device_limit),speed_limit:s(n.speed_limit),month_price:t(n.month_price),quarter_price:t(n.quarter_price),half_year_price:t(n.half_year_price),year_price:t(n.year_price),two_year_price:t(n.two_year_price),three_year_price:t(n.three_year_price),onetime_price:t(n.onetime_price),reset_price:t(n.reset_price),reset_traffic_method:s(n.reset_traffic_method),capacity_limit:s(n.capacity_limit),allow_subscribe_url:n.allow_subscribe_url==="0"?0:1,force_update:n.force_update}}function Ve(n){return n==null?"—":Ze(n)}function Pl(n){return[{value:"0",label:n("config.resetTraffic.monthly")},{value:"1",label:n("config.resetTraffic.byPurchase")},{value:"2",label:n("config.resetTraffic.never")},{value:"3",label:n("config.resetTraffic.yearly")},{value:"4",label:n("config.resetTraffic.yearlyByPurchase")}]}function $l(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState([]),[l,f]=a.useState(null),[b,S]=a.useState(!0),[x,N]=a.useState(!1),[m,$]=a.useState(""),[q,D]=a.useState(""),[C,M]=a.useState(!1),[T,_]=a.useState(""),[R,I]=a.useState(!1),[F,y]=a.useState(null),[E,L]=a.useState(null),Z=a.useRef(!1),o=a.useRef(null),k=a.useRef(!1),O=j=>j instanceof Element&&!!j.closest(".drag-handle"),z=(j,ne)=>{if(j===ne||j<0||ne<0||j>=s.length||ne>=s.length)return!1;const G=[...s],be=G[j];return G.splice(j,1),G.splice(ne,0,be),r(G),o.current=G.map(_e=>_e.id),Z.current=!0,!0},U=async()=>{const j=Z.current,ne=o.current??s.map(G=>G.id);if(Z.current=!1,o.current=null,k.current=!1,y(null),L(null),!!j)try{await po(ne),await Y()}catch(G){$(G instanceof Error?G.message:t("plan.sortFailed")),await Y()}},w=(j,ne)=>{var G;if(!O(j.target)){j.preventDefault();return}j.dataTransfer.effectAllowed="move",j.dataTransfer.setData("text/plain",String(((G=s[ne])==null?void 0:G.id)??ne)),Z.current=!1,y(ne)},A=(j,ne)=>{F===null||F===ne||(j.preventDefault(),z(F,ne)&&y(ne))},h=async()=>{await U()},Q=(j,ne)=>{!O(j.target)||j.touches.length!==1||(Z.current=!1,k.current=!0,L(ne))},H=j=>{if(!k.current||E===null)return;j.cancelable&&j.preventDefault();const ne=j.touches[0],G=document.elementFromPoint(ne.clientX,ne.clientY);if(!G)return;const be=G.closest("tr, [data-index]");if(!be)return;const _e=be.getAttribute("data-index");if(_e===null)return;const xe=Number(_e);z(E,xe)&&L(xe)},ee=async()=>{!k.current&&E===null||await U()},Y=a.useCallback(async()=>{S(!0),$("");try{const[j,ne]=await Promise.all([Tt(),Ht()]);r(j),c(ne)}catch(j){$(j instanceof Error?j.message:t("plan.loadFailed"))}finally{S(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}Y()},[Y,n]);function se(){f(null),M(!1),_("")}function ye(j){f(zl(j)),M(!1),_(""),$(""),D("")}async function Ie(j){var ne,G;if(j.preventDefault(),!!l){N(!0),$(""),D("");try{await lo(Tl(l)),se(),(ne=window.showToast)==null||ne.call(window,t("plan.saveSuccess"),"success"),await Y()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.saveFailed"),"error")}finally{N(!1)}}}async function Fe(j,ne){var G;try{await kn(j,{show:ne?0:1}),await Y()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function De(j,ne){var G;try{await kn(j,{renew:ne?0:1}),await Y()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function Me(j,ne){var G;try{await kn(j,{allow_subscribe_url:ne?0:1}),await Y()}catch(be){(G=window.showToast)==null||G.call(window,be instanceof Error?be.message:t("plan.toggleFailed"),"error")}}async function ke(j){var ne;(ne=window.showConfirm)==null||ne.call(window,{message:t("plan.deleteConfirm"),onConfirm:async()=>{var G,be;$(""),D("");try{await co(j),(G=window.showToast)==null||G.call(window,t("plan.deleteSuccess"),"success"),await Y()}catch(_e){(be=window.showToast)==null||be.call(window,_e instanceof Error?_e.message:t("plan.deleteFailed"),"error")}}})}function we(j){var ne;return((ne=i.find(G=>G.id===j))==null?void 0:ne.name)??`#${j}`}function Ce(j){return Number(j.allow_subscribe_url??1)===1}function fe(j,ne){f(G=>G&&{...G,[j]:ne})}async function qe(j){var G,be;j.preventDefault();const ne=T.trim();if(!(!ne||!l)){I(!0),$(""),D("");try{await ns({name:ne});const _e=await Ht();c(_e);const xe=_e.filter(ze=>ze.name===ne).sort((ze,Re)=>Re.id-ze.id)[0];xe&&fe("group_id",String(xe.id)),_(""),M(!1),(G=window.showToast)==null||G.call(window,t("node.groupCreateSuccess"),"success")}catch(_e){const xe=_e instanceof Error?_e.message:t("node.groupCreateFailed");$(xe),(be=window.showToast)==null||be.call(window,xe,"error")}finally{I(!1)}}}return e.jsxs(We,{title:t("plan.title"),subtitle:t("plan.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("plan.heading")}),e.jsx("p",{children:t("plan.headingHelp")})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:Y,disabled:b,children:[e.jsx(Oe,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ye(),children:[e.jsx(lt,{size:16}),t("plan.add")]})]})]}),m?e.jsx("div",{className:"form-error",children:m}):null,q?e.jsx("div",{className:"form-success",children:q}):null,b&&s.length===0?e.jsx($e,{label:t("plan.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("plan.sort")}),e.jsx("th",{children:"ID"}),e.jsx("th",{children:t("plan.show")}),e.jsx("th",{children:t("plan.renew")}),e.jsx("th",{children:t("plan.allowSubscribeUrl")}),e.jsx("th",{children:t("plan.name")}),e.jsx("th",{children:t("plan.users")}),e.jsx("th",{children:t("plan.group")}),e.jsx("th",{children:t("plan.pricing")}),e.jsx("th",{children:t("plan.traffic")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map((j,ne)=>e.jsxs("tr",{onDragOver:G=>A(G,ne),"data-index":ne,className:F===ne||E===ne?"dragging":"",style:{transition:"all 0.2s"},children:[e.jsx("td",{children:e.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:G=>w(G,ne),onDragEnd:h,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:t("plan.sort"),children:e.jsx(Kt,{size:16})})})}),e.jsx("td",{children:e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:j.id})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${j.show?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Fe(j.id,j.show)},title:j.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${j.renew?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),De(j.id,j.renew)},title:j.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${Ce(j)?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Me(j.id,Ce(j)?1:0)},title:Ce(j)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("strong",{children:j.name})}),e.jsx("td",{children:e.jsxs("span",{className:"inline-badge",children:[e.jsx(mn,{size:14}),j.count??0]})}),e.jsx("td",{children:we(j.group_id)}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[j.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:Ve(j.month_price)})]}),j.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:Ve(j.quarter_price)})]}),j.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:Ve(j.half_year_price)})]}),j.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:Ve(j.year_price)})]}),j.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:Ve(j.two_year_price)})]}),j.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:Ve(j.three_year_price)})]}),j.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:Ve(j.onetime_price)})]}),j.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:Ve(j.reset_price)})]})]})}),e.jsxs("td",{children:[j.transfer_enable," GB"]}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:G=>{G.stopPropagation(),ye(j)},children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:G=>{G.stopPropagation(),ke(j.id)},children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},j.id)),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:11,children:e.jsx("div",{className:"empty-state",children:t("plan.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-node-list",children:[s.map((j,ne)=>e.jsxs("div",{className:`mobile-node-card ${F===ne||E===ne?"dragging":""}`,onDragOver:G=>A(G,ne),"data-index":ne,style:{transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[e.jsxs("div",{className:"card-header-row",children:[e.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[e.jsx("span",{className:"drag-handle",draggable:!0,onDragStart:G=>w(G,ne),onDragEnd:h,onTouchStart:G=>Q(G,ne),onTouchMove:H,onTouchEnd:ee,style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:t("plan.sort"),children:e.jsx(Kt,{size:16})}),e.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:j.id}),e.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:j.name})]}),e.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[e.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:G=>{G.stopPropagation(),ye(j)},children:[e.jsx(Ge,{size:12}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:G=>{G.stopPropagation(),ke(j.id)},children:[e.jsx(Qe,{size:12}),t("common.delete")]})]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.show")}),e.jsx("button",{className:`admin-switch ${j.show?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Fe(j.id,j.show)},title:j.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.renew")}),e.jsx("button",{className:`admin-switch ${j.renew?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),De(j.id,j.renew)},title:j.renew?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[e.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:t("plan.allowSubscribeUrl")}),e.jsx("button",{className:`admin-switch ${Ce(j)?"active":""}`,type:"button",onClick:G=>{G.stopPropagation(),Me(j.id,Ce(j)?1:0)},title:Ce(j)?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[e.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[e.jsx(mn,{size:12,style:{marginRight:4}}),j.count??0]}),e.jsx("span",{className:"mobile-badge-pill",children:we(j.group_id)}),e.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[j.transfer_enable," GB"]})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[j.month_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),e.jsx("strong",{style:{color:"var(--accent)"},children:Ve(j.month_price)})]}),j.quarter_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),e.jsx("strong",{style:{color:"#10b981"},children:Ve(j.quarter_price)})]}),j.half_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),e.jsx("strong",{style:{color:"#f59e0b"},children:Ve(j.half_year_price)})]}),j.year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),e.jsx("strong",{style:{color:"#6366f1"},children:Ve(j.year_price)})]}),j.two_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),e.jsx("strong",{style:{color:"#8b5cf6"},children:Ve(j.two_year_price)})]}),j.three_year_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),e.jsx("strong",{style:{color:"#ec4899"},children:Ve(j.three_year_price)})]}),j.onetime_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),e.jsx("strong",{style:{color:"#6b7280"},children:Ve(j.onetime_price)})]}),j.reset_price!=null&&e.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[e.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:t("plan.resetTrafficShort")}),e.jsx("strong",{style:{color:"#ef4444"},children:Ve(j.reset_price)})]})]})]},j.id)),!b&&s.length===0?e.jsx("div",{className:"empty-state",children:t("plan.empty")}):null]}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("plan.edit"):t("plan.add")}),e.jsx("p",{children:t("plan.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:se,children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ie,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.name")}),e.jsx("input",{className:"config-input",required:!0,value:l.name,onChange:j=>fe("name",j.target.value)})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.content")}),e.jsx("textarea",{className:"config-input",rows:3,value:l.content,onChange:j=>fe("content",j.target.value),placeholder:t("plan.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[t("plan.group"),e.jsx("button",{type:"button",onClick:()=>M(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:t("node.addGroup")})]}),e.jsxs("select",{className:"config-input",required:!0,value:l.group_id,onChange:j=>fe("group_id",j.target.value),children:[e.jsx("option",{value:"",children:t("plan.selectGroup")}),i.map(j=>e.jsx("option",{value:j.id,children:j.name},j.id))]})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.transferEnable")," (GB)"]}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:l.transfer_enable,onChange:j=>fe("transfer_enable",j.target.value)})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.deviceLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.device_limit,onChange:j=>fe("device_limit",j.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[t("plan.speedLimit")," (Mbps)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.speed_limit,onChange:j=>fe("speed_limit",j.target.value),placeholder:t("plan.unlimited")})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.capacityLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:l.capacity_limit,onChange:j=>fe("capacity_limit",j.target.value),placeholder:t("plan.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetTrafficMethod")}),e.jsx("select",{className:"config-input",value:l.reset_traffic_method,onChange:j=>fe("reset_traffic_method",j.target.value),children:Pl(t).map(j=>e.jsx("option",{value:j.value,children:j.label},j.value))})]})]}),e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:l.allow_subscribe_url==="1",onChange:j=>fe("allow_subscribe_url",j.target.checked?"1":"0")}),e.jsx("span",{children:t("plan.allowSubscribeUrl")})]}),e.jsx("h3",{className:"form-section-title",children:t("plan.pricing")}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.monthPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.month_price,onChange:j=>fe("month_price",j.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.quarterPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.quarter_price,onChange:j=>fe("quarter_price",j.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.halfYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.half_year_price,onChange:j=>fe("half_year_price",j.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.yearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.year_price,onChange:j=>fe("year_price",j.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.twoYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.two_year_price,onChange:j=>fe("two_year_price",j.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.threeYearPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.three_year_price,onChange:j=>fe("three_year_price",j.target.value),placeholder:"—"})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("plan.onetimePrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.onetime_price,onChange:j=>fe("onetime_price",j.target.value),placeholder:"—"})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("plan.resetPrice")}),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:l.reset_price,onChange:j=>fe("reset_price",j.target.value),placeholder:"—"})]})]}),l.id?e.jsxs("label",{className:"checkbox-row",children:[e.jsx("input",{type:"checkbox",checked:l.force_update,onChange:j=>fe("force_update",String(j.target.checked))}),e.jsx("span",{children:t("plan.forceUpdate")})]}):null,e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:se,children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(ct,{size:16}),t(x?"plan.saving":"common.save")]})]})]})]})}):null,C&&l?e.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("node.addNewGroupTitle")}),e.jsx("p",{children:t("node.addNewGroupSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>M(!1),disabled:R,children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{onSubmit:qe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("label",{style:{display:"grid",gap:6},children:[e.jsx("span",{style:{fontSize:13,fontWeight:800},children:t("node.groupName")}),e.jsx("input",{className:"config-input",required:!0,value:T,onChange:j=>_(j.target.value),placeholder:t("node.groupName"),autoFocus:!0})]}),e.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>M(!1),disabled:R,children:t("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:R||!T.trim(),children:t(R?"node.saving":"common.confirm")})]})]})]})}):null]})}const Pn="模糊",Ds={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Ls={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Is(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0");return`${s}/${r}/${i} ${c}:${l}`}function Fs(n){const t=new Date(n*1e3),s=t.getFullYear(),r=String(t.getMonth()+1).padStart(2,"0"),i=String(t.getDate()).padStart(2,"0"),c=String(t.getHours()).padStart(2,"0"),l=String(t.getMinutes()).padStart(2,"0"),f=String(t.getSeconds()).padStart(2,"0");return`${s}-${r}-${i} ${c}:${l}:${f}`}function As(n){return n.length<=10?n:`${n.slice(0,3)}...${n.slice(-3)}`}function pt(n){return`${Ze(Number(n??0))} ₫`}const Ei="adminzic_user_cache";function El(){if(typeof window>"u")return{};try{const n=sessionStorage.getItem(Ei);return n?JSON.parse(n):{}}catch{return{}}}function Ml(n){if(!(typeof window>"u"))try{sessionStorage.setItem(Ei,JSON.stringify(n))}catch{}}const Ot=(n,t)=>`${n}:${t}`;function Dl(){var nt,ue,st,et,it;const n=Ue(),t=Xt(),{t:s}=he(),r=a.useCallback(P=>{switch(P){case 0:return{label:s("order.statusPending"),cls:"status-pending"};case 1:return{label:s("order.statusProcessing"),cls:"status-processing"};case 2:return{label:s("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:s("order.statusCompleted"),cls:"status-completed"};case 4:return{label:s("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${P}`,cls:""}}},[s]),i=a.useCallback(P=>{const re=`order.period.${P}`,oe=s(re);return oe===re?Ls[P]??P:oe},[s]),[c,l]=a.useState([]),[f,b]=a.useState([]),[S,x]=a.useState({}),[N,m]=a.useState(0),[$,q]=a.useState(1),[D]=a.useState(15),[C,M]=a.useState(""),[T,_]=a.useState("trade_no"),[R,I]=a.useState(!0),[F,y]=a.useState(null),[E,L]=a.useState(!1),[Z,o]=a.useState(""),[k,O]=a.useState(""),[z,U]=a.useState(null),[w,A]=a.useState(null),[h,Q]=a.useState(!1),[H,ee]=a.useState(null),[Y,se]=a.useState(!1),[ye,Ie]=a.useState(()=>El()),Fe=a.useCallback((P,re)=>{const oe=Ot(re,P);A(null),U(te=>te===oe?null:oe)},[]),De=a.useCallback((P,re)=>{const oe=Ot(re,P);U(null),A(te=>te===oe?null:oe)},[]),Me=a.useCallback(P=>{const re=Number(P.coupon_id??0);return re?S[re]??`#${re}`:null},[S]);a.useEffect(()=>{if(!z&&!w)return;const P=()=>{U(null),A(null)},re=te=>{const ve=te.target;ve!=null&&ve.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||P()},oe=te=>{te.key==="Escape"&&P()};return document.addEventListener("pointerdown",re),document.addEventListener("keydown",oe),()=>{document.removeEventListener("pointerdown",re),document.removeEventListener("keydown",oe)}},[z,w]),a.useEffect(()=>{const P=new Set;if(c.forEach(oe=>{oe.user_id&&!ye[oe.user_id]&&P.add(oe.user_id),oe.invite_user_id&&!ye[oe.invite_user_id]&&P.add(oe.invite_user_id)}),H&&(H.user_id&&!ye[H.user_id]&&P.add(H.user_id),H.invite_user_id&&!ye[H.invite_user_id]&&P.add(H.invite_user_id)),P.size===0)return;const re=Array.from(P);Promise.allSettled(re.map(async oe=>{try{const te=await Jn(oe);if(te&&te.data)return{id:oe,email:te.data.email,invite_user:te.data.invite_user}}catch(te){console.error(`Failed to fetch user ${oe}:`,te)}return null})).then(oe=>{const te={};oe.forEach(ve=>{var me;if(ve.status==="fulfilled"&&ve.value){const Ee=ve.value;te[Ee.id]={email:Ee.email,invite_user_email:((me=Ee.invite_user)==null?void 0:me.email)||null},Ee.invite_user&&(te[Ee.invite_user.id]={email:Ee.invite_user.email})}}),Object.keys(te).length>0&&Ie(ve=>{const me={...ve,...te};return Ml(me),me})})},[c,H,ye]);const ke={0:{label:s("order.commissionPending"),dotClass:"pending"},1:{label:s("order.commissionApproved"),dotClass:"processing"},2:{label:s("order.commissionPaid"),dotClass:"completed"},3:{label:s("order.commissionCancelled"),dotClass:"cancelled"}},we=a.useCallback(async(P=1,re,oe)=>{var te,ve;I(!0),o("");try{let me;if(re)if(oe==="email"){const Ke=(te=(await Yn(1,1,[{key:"email",condition:Pn,value:re}])).data)==null?void 0:te[0];if(!Ke){l([]),m(0),I(!1);return}me=[{key:"user_id",condition:"=",value:String(Ke.id)}]}else if(oe==="invite_user_email"){const Ke=(ve=(await Yn(1,1,[{key:"email",condition:Pn,value:re}])).data)==null?void 0:ve[0];if(!Ke){l([]),m(0),I(!1);return}me=[{key:"invite_user_id",condition:"=",value:String(Ke.id)}]}else me=[{key:oe||"trade_no",condition:oe==="trade_no"||oe==="user_id"||oe==="invite_user_id"||oe==="plan_id"||oe==="status"?"=":Pn,value:re}];const Ee=await uo({current:P,pageSize:D,filter:me});l(Ee.data),m(Ee.total)}catch(me){o(me instanceof Error?me.message:s("order.loadFailed"))}finally{I(!1)}},[D,s]),Ce=a.useCallback(P=>{const re=String(P);_("user_id"),M(re),Q(!0),q(1),we(1,re,"user_id")},[we]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const P=new URLSearchParams(t.search),re=P.get("filter_email"),oe=P.get("invite_user_email"),te=P.get("user_id")||P.get("filter_user_id");let ve="",me="trade_no";te?(ve=te,me="user_id",_("user_id"),M(te),Q(!0)):re?(ve=re,me="email",_("email"),M(re),Q(!0)):oe&&(ve=oe,me="invite_user_email",_("invite_user_email"),M(oe),Q(!0)),we(1,ve,me),Tt().then(b).catch(()=>{}),gi(1,1e3).then(Ee=>{const Se={};Ee.data.forEach(Ke=>{Se[Ke.id]=Ke.code}),x(Se)}).catch(()=>{})},[we,n,t.search]);function fe(){q(1),we(1,C,T)}function qe(){M(""),q(1),we(1)}function j(P){q(P),we(P,C,T)}async function ne(P){var re,oe;U(null),A(null),o(""),O("");try{await mo(P),(re=window.showToast)==null||re.call(window,s("order.paidSuccess"),"success"),await we($,C,T)}catch(te){(oe=window.showToast)==null||oe.call(window,te instanceof Error?te.message:s("order.paidFailed"),"error")}}async function G(P){var re,oe;U(null),A(null),o(""),O("");try{await ho(P),(re=window.showToast)==null||re.call(window,s("order.cancelSuccess"),"success"),await we($,C,T)}catch(te){(oe=window.showToast)==null||oe.call(window,te instanceof Error?te.message:s("order.cancelFailed"),"error")}}async function be(P,re){var oe,te;U(null),A(null),o(""),O("");try{await xo(P,re),(oe=window.showToast)==null||oe.call(window,s("order.commissionSuccess"),"success"),await we($,C,T)}catch(ve){(te=window.showToast)==null||te.call(window,ve instanceof Error?ve.message:s("order.commissionFailed"),"error")}}async function _e(P){ee(P),se(!0);try{const re=await bo(P.id);re&&re.data&&ee(re.data)}catch(re){console.error("Failed to fetch order detail:",re)}finally{se(!1)}}function xe(){var P;y({email:"",plan_id:(P=f[0])!=null&&P.id?String(f[0].id):"",period:"month_price",total_amount:"0"}),o(""),O("")}async function ze(P){var re,oe;if(P.preventDefault(),!!F){L(!0),o(""),O("");try{await ss({email:F.email,plan_id:Number(F.plan_id),period:F.period,total_amount:Number(F.total_amount)*100}),y(null),(re=window.showToast)==null||re.call(window,s("order.assignSuccess"),"success"),await we($,C,T)}catch(te){(oe=window.showToast)==null||oe.call(window,te instanceof Error?te.message:s("order.assignFailed"),"error")}finally{L(!1)}}}const Re=Math.ceil(N/D),ae=H?Me(H):null;return e.jsxs(We,{title:s("order.title"),subtitle:s("order.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[e.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:`ghost-button ${h?"active":""}`,type:"button",onClick:()=>Q(!h),children:[e.jsx(Qt,{size:16}),s("order.filter")]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:xe,children:[e.jsx(lt,{size:16}),s("order.assign")]})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void we($,C,T),disabled:R,children:[e.jsx(Oe,{size:16}),s(R?"common.refreshing":"common.refresh")]})]}),h&&e.jsxs("div",{className:"filter-bar",children:[e.jsxs("select",{className:"config-input filter-select",value:T,onChange:P=>_(P.target.value),children:[e.jsx("option",{value:"trade_no",children:s("order.tradeNo")}),e.jsx("option",{value:"email",children:s("order.email")}),e.jsx("option",{value:"status",children:s("order.status")}),e.jsx("option",{value:"plan_id",children:s("order.filterPlanId")}),e.jsx("option",{value:"user_id",children:s("order.filterUserId")}),e.jsx("option",{value:"invite_user_id",children:s("order.filterInviterUserId")}),e.jsx("option",{value:"invite_user_email",children:s("order.inviterEmail")})]}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(jn,{size:16}),e.jsx("input",{className:"config-input search-input",value:C,onChange:P=>M(P.target.value),placeholder:s("order.searchPlaceholder"),onKeyDown:P=>P.key==="Enter"&&fe()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:fe,children:[e.jsx(Qt,{size:16}),s("order.filter")]}),C?e.jsxs("button",{className:"ghost-button",type:"button",onClick:qe,children:[e.jsx(Ne,{size:16}),s("order.clearFilter")]}):null]}),Z?e.jsx("div",{className:"form-error",children:Z}):null,k?e.jsx("div",{className:"form-success",children:k}):null,R&&c.length===0?e.jsx($e,{label:s("order.loading")}):null,e.jsxs("div",{className:`content-loading-container ${R?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table order-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("order.colOrder")}),e.jsx("th",{children:s("order.colCustomerPlan")}),e.jsx("th",{children:s("order.colPayment")}),e.jsx("th",{children:s("order.orderStatus")}),e.jsx("th",{children:s("order.colCommission")}),e.jsx("th",{children:s("order.created")})]})}),e.jsxs("tbody",{children:[c.map(P=>{var Ee;const re=r(P.status),oe=P.invite_user_id!==null,te=ke[P.commission_status]??{label:`#${P.commission_status}`,dotClass:"pending"},ve=Me(P),me=(Ee=ye[P.user_id])==null?void 0:Ee.email;return e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"order-cell-stack",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>_e(P),title:s("order.detailsTitle"),children:As(P.trade_no)}),e.jsxs("span",{className:"order-subline",children:["#",P.id]}),e.jsx("span",{className:"order-type-pill",children:Ds[P.type]??`#${P.type}`})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-user-plan",children:[me?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(P.user_id),title:s("order.filterByUser"),children:me}):e.jsxs("span",{className:"order-subline",children:["ID: ",P.user_id]}),e.jsx("strong",{className:"order-plan-name",children:P.plan_name??`Plan #${P.plan_id}`}),e.jsx("span",{className:"period-capsule",children:i(P.period)})]})}),e.jsx("td",{children:e.jsxs("div",{className:"order-money-stack",children:[e.jsx("strong",{className:"order-money-main",children:pt(P.total_amount)}),ve?e.jsxs("span",{className:"order-coupon-badge",children:[s("order.coupon"),": ",ve]}):null,Number(P.discount_amount??0)>0?e.jsxs("span",{className:"order-subline",children:[s("order.discountLabel"),": ",pt(P.discount_amount)]}):null]})}),e.jsxs("td",{style:{position:"relative"},children:[e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),e.jsx("span",{children:re.label}),P.status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Se=>{Se.stopPropagation(),Fe(P.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),z===Ot("desktop",P.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Se=>Se.stopPropagation(),onClick:Se=>Se.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{U(null),ne(P.trade_no)},children:[e.jsx(en,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{U(null),G(P.trade_no)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]})]}),e.jsxs("td",{style:{position:"relative"},children:[oe?e.jsxs("div",{className:"order-commission-cell",children:[e.jsx("strong",{children:pt(P.commission_balance)}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{children:te.label}),P.commission_status===0&&e.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Se=>{Se.stopPropagation(),De(P.trade_no,"desktop")},children:[s("order.markAs")," ",e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):e.jsx("span",{className:"tag muted-tag",children:"—"}),w===Ot("desktop",P.trade_no)&&e.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Se=>Se.stopPropagation(),onClick:Se=>Se.stopPropagation(),children:[e.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),be(P.trade_no,1)},children:[e.jsx(en,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),be(P.trade_no,3)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsx("td",{children:e.jsx("span",{className:"order-time",children:Is(P.created_at)})})]},P.trade_no)}),!R&&c.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:s("order.empty")})})}):null]})]})}),Re>1?e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>j($-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",Re]}),e.jsx("button",{className:"mini-button",disabled:$>=Re,onClick:()=>j($+1),children:e.jsx(jt,{size:16})})]}):null]}),e.jsxs("div",{className:"mobile-order-list",children:[c.map(P=>{var at;const re=r(P.status),oe=P.invite_user_id!==null,te=ke[P.invite_user_id!==null?P.commission_status:0]??{label:`#${P.commission_status}`,dotClass:"pending"},ve=(at=ye[P.user_id])==null?void 0:at.email,me=Me(P),Ee=Ot("mobile",P.trade_no),Se=Ot("mobile",P.trade_no),Ke=z===Ee||w===Se;return e.jsxs("div",{className:`mobile-order-card${Ke?" is-menu-open":""}`,children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsxs("div",{className:"mobile-card-header-left",children:[e.jsx("span",{className:"trade-no-link",onClick:()=>_e(P),children:As(P.trade_no)}),e.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",P.id]})]}),e.jsx("div",{className:"mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),e.jsx("span",{style:{fontSize:"12px"},children:re.label}),P.status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),Fe(P.trade_no,"mobile")},"aria-expanded":z===Ee,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),z===Ee&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{U(null),ne(P.trade_no)},children:[e.jsx(en,{size:14,style:{color:"#10b981"}}),s("order.statusCompleted")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{U(null),G(P.trade_no)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.statusCancelled")]})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.email")}),e.jsx("span",{className:"value",children:ve?e.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ce(P.user_id),children:ve}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",P.user_id]})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.type")}),e.jsx("span",{className:"value",children:Ds[P.type]??`#${P.type}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.subscriptionPlan")}),e.jsx("span",{className:"value",style:{fontWeight:600},children:P.plan_name??`Plan #${P.plan_id}`})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.period")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"period-capsule",style:{margin:0},children:i(P.period)})})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.amount")}),e.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:pt(P.total_amount)})]}),me?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.coupon")}),e.jsx("span",{className:"value",children:e.jsx("span",{className:"order-coupon-badge",children:me})})]}):null,Number(P.discount_amount??0)>0?e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.discountLabel")}),e.jsx("span",{className:"value",children:pt(P.discount_amount)})]}):null,e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionAmount")}),e.jsx("span",{className:"value",children:oe?e.jsx("strong",{children:pt(P.commission_balance)}):e.jsx("span",{className:"tag muted-tag",children:"—"})})]}),oe&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.commissionStatus")}),e.jsx("div",{className:"value mobile-order-action-wrap",children:e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${te.dotClass}`}),e.jsx("span",{style:{fontSize:"12px"},children:te.label}),P.commission_status===0&&e.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Be=>{Be.stopPropagation(),De(P.trade_no,"mobile")},"aria-expanded":w===Se,children:[s("order.markAs"),e.jsx(yt,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),w===Se&&e.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Be=>Be.stopPropagation(),onClick:Be=>Be.stopPropagation(),children:[e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{A(null),be(P.trade_no,1)},children:[e.jsx(en,{size:14,style:{color:"#10b981"}}),s("order.commissionApproved")]}),e.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{A(null),be(P.trade_no,3)},children:[e.jsx(Dt,{size:14,style:{color:"#ef4444"}}),s("order.commissionCancelled")]})]})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsx("span",{className:"label",children:s("order.created")}),e.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Is(P.created_at)})]})]})]},P.trade_no)}),!R&&c.length===0?e.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:s("order.empty")}):null,Re>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>j($-1),children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[$," / ",Re]}),e.jsx("button",{className:"mini-button",disabled:$>=Re,onClick:()=>j($+1),children:e.jsx(jt,{size:16})})]}):null]})]}),H?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[e.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[e.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:s("order.detailsTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ee(null),children:e.jsx(Ne,{size:18})})]}),e.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:Y?e.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:e.jsx($e,{label:s("order.loadingDetails")})}):e.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("common.email")}),(nt=ye[H.user_id])!=null&&nt.email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{ee(null),Ce(H.user_id)},title:"Filter by this user",children:ye[H.user_id].email}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.tradeNoLabel")}),e.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:H.trade_no})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.periodLabel")}),e.jsx("span",{children:i(H.period)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.orderStatus")}),e.jsx("span",{children:r(H.status).label})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.planLabel")}),e.jsx("span",{children:H.plan_name??`Plan #${H.plan_id}`})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.callbackLabel")}),e.jsx("span",{children:H.callback_no||"-"})]}),ae?e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.coupon")}),e.jsx("span",{children:ae})]}):null]}),H.invite_user_id&&e.jsxs(e.Fragment,{children:[e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:s("order.referralDetails")}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.inviterEmail")}),(ue=ye[H.invite_user_id])!=null&&ue.email||(st=ye[H.user_id])!=null&&st.invite_user_email?e.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const P=String(H.invite_user_id);_("invite_user_id"),M(P),Q(!0),ee(null),we(1,P,"invite_user_id")},title:"Filter by this inviter",children:((et=ye[H.invite_user_id])==null?void 0:et.email)||((it=ye[H.user_id])==null?void 0:it.invite_user_email)}):e.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.invite_user_id]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionAmount")}),e.jsx("strong",{children:pt(H.commission_balance)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.commissionStatus")}),e.jsxs("div",{className:"status-indicator",children:[e.jsx("span",{className:`status-dot ${(ke[H.commission_status]??{dotClass:"pending"}).dotClass}`}),e.jsx("span",{children:(ke[H.commission_status]??{label:`#${H.commission_status}`}).label})]})]})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.amount")}),e.jsx("span",{children:pt(H.total_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.balanceLabel")}),e.jsx("span",{children:pt(H.balance_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.discountLabel")}),e.jsx("span",{children:pt(H.discount_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.refundLabel")}),e.jsx("span",{children:pt(H.refund_amount)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.surplusLabel")}),e.jsx("span",{children:pt(H.surplus_amount)})]})]}),e.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.createdLabel")}),e.jsx("span",{children:Fs(H.created_at)})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{style:{color:"var(--muted)"},children:s("order.updatedLabel")}),e.jsx("span",{children:Fs(H.updated_at)})]})]})]})})]})}):null,F?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("order.assign")}),e.jsx("p",{children:s("order.assignHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:ze,children:[e.jsxs("label",{children:[e.jsx("span",{children:s("order.email")}),e.jsx("input",{className:"config-input",required:!0,type:"email",value:F.email,onChange:P=>y({...F,email:P.target.value}),placeholder:"user@example.com"})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.plan")}),e.jsx("select",{className:"config-input",required:!0,value:F.plan_id,onChange:P=>y({...F,plan_id:P.target.value}),children:f.map(P=>e.jsx("option",{value:P.id,children:P.name},P.id))})]}),e.jsxs("label",{children:[e.jsx("span",{children:s("order.period")}),e.jsx("select",{className:"config-input",value:F.period,onChange:P=>y({...F,period:P.target.value}),children:Object.entries(Ls).map(([P,re])=>e.jsx("option",{value:P,children:re},P))})]}),e.jsxs("label",{children:[e.jsxs("span",{children:[s("order.totalAmount")," (cents)"]}),e.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:F.total_amount,onChange:P=>y({...F,total_amount:P.target.value})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:s("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:E,children:[e.jsx(ct,{size:16}),s(E?"order.assigning":"order.assign")]})]})]})]})}):null]})}function sn(n){return new Date(n*1e3).toLocaleString("vi-VN")}function an(n){return{month_price:n("period.month"),quarter_price:n("period.quarter"),half_year_price:n("period.halfYear"),year_price:n("period.year"),two_year_price:n("period.twoYear"),three_year_price:n("period.threeYear"),onetime_price:n("period.onetime"),reset_price:n("period.resetTraffic")}}function $n(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",limit_use_with_user:(n==null?void 0:n.limit_use_with_user)!=null?String(n.limit_use_with_user):"",limit_plan_ids:(n==null?void 0:n.limit_plan_ids)??[],limit_period:(n==null?void 0:n.limit_period)??[],generate_count:""}}function Ll(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(0),[l,f]=a.useState(1),[b,S]=a.useState([]),[x,N]=a.useState(null),[m,$]=a.useState(!0),[q,D]=a.useState(!1),[C,M]=a.useState(""),[T,_]=a.useState(""),[R,I]=a.useState("");a.useEffect(()=>{x||I("")},[x]);const F=a.useCallback(async(o=1)=>{$(!0),M("");try{const k=await gi(o,15);r(k.data),c(k.total)}catch(k){M(k instanceof Error?k.message:t("coupon.loadFailed"))}finally{$(!1)}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}F(1),Tt().then(S).catch(()=>{})},[F,n]);async function y(o){var k,O;if(o.preventDefault(),!!x){D(!0),M(""),_("");try{const z=x.type==="1"?Math.round(Number(x.value)*100):Number(x.value);await go({id:x.id,name:x.name,type:Number(x.type),value:z,code:x.code||void 0,started_at:Math.floor(new Date(x.started_at).getTime()/1e3),ended_at:Math.floor(new Date(x.ended_at).getTime()/1e3),limit_use:x.limit_use?Number(x.limit_use):null,limit_use_with_user:x.limit_use_with_user?Number(x.limit_use_with_user):null,limit_plan_ids:x.limit_plan_ids.length?x.limit_plan_ids:null,limit_period:x.limit_period.length?x.limit_period:null,generate_count:x.generate_count?Number(x.generate_count):void 0}),N(null),(k=window.showToast)==null||k.call(window,t("coupon.saveSuccess"),"success"),await F(l)}catch(z){(O=window.showToast)==null||O.call(window,z instanceof Error?z.message:t("coupon.saveFailed"),"error")}finally{D(!1)}}}async function E(o){var k;try{await yo(o),await F(l)}catch(O){(k=window.showToast)==null||k.call(window,O instanceof Error?O.message:t("coupon.toggleFailed"),"error")}}async function L(o){var k;(k=window.showConfirm)==null||k.call(window,{message:t("coupon.deleteConfirm"),onConfirm:async()=>{var O,z;try{await fo(o),(O=window.showToast)==null||O.call(window,t("coupon.deleteSuccess"),"success"),await F(l)}catch(U){(z=window.showToast)==null||z.call(window,U instanceof Error?U.message:t("coupon.deleteFailed"),"error")}}})}const Z=Math.ceil(i/15);return e.jsxs(We,{title:t("coupon.title"),subtitle:t("coupon.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("coupon.heading")}),e.jsxs("p",{children:[i," ",t("coupon.totalCoupons")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void F(l),disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N($n()),children:[e.jsx(lt,{size:16}),t("coupon.add")]})]})]}),C?e.jsx("div",{className:"form-error",children:C}):null,T?e.jsx("div",{className:"form-success",children:T}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("coupon.name")}),e.jsx("th",{children:t("coupon.code")}),e.jsx("th",{children:t("coupon.type")}),e.jsx("th",{children:t("coupon.value")}),e.jsx("th",{children:t("coupon.usageLimit")}),e.jsx("th",{children:t("coupon.limitPlans")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("coupon.limitPeriods")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(o=>{var U,w;const k=(U=o.limit_plan_ids)==null?void 0:U.map(A=>{var h;return((h=b.find(Q=>Q.id===A))==null?void 0:h.name)||`#${A}`}).join(", "),O=an(t),z=(w=o.limit_period)==null?void 0:w.map(A=>O[A]||A).join(", ");return e.jsxs("tr",{children:[e.jsx("td",{children:o.id}),e.jsx("td",{children:e.jsx("strong",{children:o.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:o.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:o.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})}),e.jsx("td",{children:e.jsx("strong",{children:o.type===1?Ze(o.value):`${o.value}%`})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[e.jsxs("span",{children:[t("coupon.maxUses"),": ",o.limit_use??"∞"]}),o.limit_use_with_user!=null&&e.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[t("coupon.maxUses")," ",o.limit_use_with_user,"/",t("coupon.perUser")]})]})}),e.jsx("td",{children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[k?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[t("coupon.plans"),": ",k]})}):null,z?e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:e.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[t("coupon.cycles"),": ",z]})}):null,!k&&!z?e.jsx("span",{className:"tag muted-tag",children:t("coupon.noneAllPlans")}):null]})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${o.show?"active":""}`,type:"button",onClick:()=>void E(o.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("small",{children:[sn(o.started_at)," — ",sn(o.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>N($n(o)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(o.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},o.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:10,children:e.jsx("div",{className:"empty-state",children:t("coupon.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-coupon-list",children:[s.map(o=>{var k,O,z,U;return e.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",o.id]}),e.jsx("span",{className:`tag type-tag ${o.type===1?"fixed-type":"percent-type"}`,children:o.type===1?t("coupon.type.fixed"):t("coupon.type.percent")})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:o.name,children:o.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("coupon.code")}),e.jsxs("div",{className:"copyable-code-pill",title:t("coupon.clickToCopy"),onClick:()=>{Ct(o.code).then(w=>{var A;(A=window.showToast)==null||A.call(window,w?`${t("coupon.copiedCode")}: ${o.code}`:t("common.copyFailed"),w?"success":"error")})},children:[e.jsx("code",{className:"mono",children:o.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsxs("div",{className:"ticket-restrictions",children:[(k=o.limit_plan_ids)!=null&&k.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:o.limit_plan_ids.map(w=>{const A=b.find(h=>h.id===w);return e.jsx("span",{className:"res-pill plan-pill",children:A?A.name:`#${w}`},w)})})]}):null,(O=o.limit_period)!=null&&O.length?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"⏱️"}),e.jsx("div",{className:"pill-list",children:o.limit_period.map(w=>e.jsx("span",{className:"res-pill cycle-pill",children:an(t)[w]||w},w))})]}):null,!((z=o.limit_plan_ids)!=null&&z.length)&&!((U=o.limit_period)!=null&&U.length)?e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("coupon.appliesToAll")]}):null]}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[sn(o.started_at)," — ",sn(o.ended_at)]})]}),e.jsxs("div",{className:"ticket-switch-row",children:[e.jsx("span",{className:"switch-label",children:t("coupon.showOnClient")}),e.jsx("button",{className:`admin-switch ${o.show?"active":""}`,type:"button",onClick:()=>void E(o.id),"aria-label":t("coupon.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:o.type===1?Ze(o.value).replace(/\s?₫/,""):`${o.value}`}),e.jsx("span",{className:"ticket-value-unit",children:o.type===1?"₫":t("coupon.percentOff")})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("coupon.maxUses")}),e.jsx("span",{className:"usage-val",children:o.limit_use??"∞"}),o.limit_use_with_user!=null?e.jsxs("span",{className:"usage-per-user",children:[t("coupon.maxUses")," ",o.limit_use_with_user,"/",t("coupon.perUser")]}):null]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>N($n(o)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void L(o.id),"aria-label":t("common.delete"),children:e.jsx(Qe,{size:15})})]})]})]},o.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("coupon.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:l<=1,onClick:()=>{f(l-1),F(l-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[l," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:l>=Z,onClick:()=>{f(l+1),F(l+1)},children:e.jsx(jt,{size:16})})]}):null,x?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:x.id?t("coupon.edit"):t("coupon.add")}),e.jsx("p",{children:t("coupon.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:y,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.name")}),e.jsx("input",{className:"config-input",required:!0,value:x.name,onChange:o=>N({...x,name:o.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.type")}),e.jsxs("select",{className:"config-input",value:x.type,onChange:o=>N({...x,type:o.target.value}),children:[e.jsx("option",{value:"1",children:t("coupon.type.fixed")}),e.jsx("option",{value:"2",children:t("coupon.type.percent")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:x.value,onChange:o=>N({...x,value:o.target.value})})]})]}),x.id?null:e.jsxs("label",{children:[e.jsxs("span",{children:[t("coupon.code")," (",t("coupon.autoIfEmpty"),")"]}),e.jsx("input",{className:"config-input",value:x.code,onChange:o=>N({...x,code:o.target.value}),placeholder:t("coupon.autoGenerate")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.startTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:x.started_at,onChange:o=>N({...x,started_at:o.target.value}),onClick:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)},onFocus:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.endTime")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:x.ended_at,onChange:o=>N({...x,ended_at:o.target.value}),onClick:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)},onFocus:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.usageLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:x.limit_use,onChange:o=>N({...x,limit_use:o.target.value}),placeholder:t("coupon.unlimited")})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.userLimit")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:x.limit_use_with_user,onChange:o=>N({...x,limit_use_with_user:o.target.value}),placeholder:t("coupon.unlimited")})]})]}),x.id?null:e.jsxs("label",{children:[e.jsx("span",{children:t("coupon.generateCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:x.generate_count,onChange:o=>N({...x,generate_count:o.target.value}),placeholder:t("coupon.single")})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPlans")}),x.limit_plan_ids.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:x.limit_plan_ids.map(o=>{const k=b.find(O=>O.id===o);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const O=x.limit_plan_ids.filter(z=>z!==o);N({...x,limit_plan_ids:O})},children:[k?k.name:`#${o}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},o)})}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("coupon.searchPlans"),value:R,onChange:o=>I(o.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(o=>o.name.toLowerCase().includes(R.toLowerCase())).map(o=>{const k=x.limit_plan_ids.includes(o.id);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:k,onChange:O=>{const z=O.target.checked?[...x.limit_plan_ids,o.id]:x.limit_plan_ids.filter(U=>U!==o.id);N({...x,limit_plan_ids:z})}}),e.jsx("span",{children:o.name})]},o.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("coupon.noPlans")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("coupon.restrictedPeriods")}),x.limit_period.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:x.limit_period.map(o=>e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const k=x.limit_period.filter(O=>O!==o);N({...x,limit_period:k})},children:[an(t)[o]||o," ",e.jsx("span",{style:{opacity:.6},children:"×"})]},o))}),e.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(an(t)).map(([o,k])=>{const O=x.limit_period.includes(o);return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:O,onChange:z=>{const U=z.target.checked?[...x.limit_period,o]:x.limit_period.filter(w=>w!==o);N({...x,limit_period:U})}}),e.jsx("span",{children:k})]},o)})})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ct,{size:16}),t(q?"coupon.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function on(n){return new Date(n*1e3).toLocaleString("vi-VN")}function Il(n){return{1:n("giftcard.typeAmount"),2:n("giftcard.typeDuration"),3:n("giftcard.typeTraffic"),4:n("giftcard.typeReset"),5:n("giftcard.typePlan")}}function En(n){return{id:n==null?void 0:n.id,name:(n==null?void 0:n.name)??"",type:String((n==null?void 0:n.type)??1),value:n?String(n.type===1?n.value/100:n.value):"",code:(n==null?void 0:n.code)??"",started_at:n?new Date(n.started_at*1e3).toISOString().slice(0,16):"",ended_at:n?new Date(n.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(n==null?void 0:n.limit_use)!=null?String(n.limit_use):"",plan_id:(n==null?void 0:n.plan_id)!=null?String(n.plan_id):"",generate_count:""}}function Fl(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(0),[l,f]=a.useState(1),[b,S]=a.useState([]),[x,N]=a.useState(null),[m,$]=a.useState(!0),[q,D]=a.useState(!1),[C,M]=a.useState(""),[T,_]=a.useState(""),[R,I]=a.useState("");a.useEffect(()=>{x||I("")},[x]);const F=Il(t),y=a.useCallback(async(o=1)=>{$(!0),M("");try{const k=await vo(o,15);r(k.data),c(k.total)}catch(k){M(k instanceof Error?k.message:t("giftcard.loadFailed"))}finally{$(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}y(1),Tt().then(S).catch(()=>{})},[y,n]);async function E(o){var k,O;if(o.preventDefault(),!!x){D(!0),M(""),_("");try{const z=x.type==="1"?Math.round(Number(x.value)*100):Number(x.value);await jo({id:x.id,name:x.name,type:Number(x.type),value:z,code:x.code||void 0,started_at:Math.floor(new Date(x.started_at).getTime()/1e3),ended_at:Math.floor(new Date(x.ended_at).getTime()/1e3),limit_use:x.limit_use?Number(x.limit_use):null,plan_id:x.plan_id?Number(x.plan_id):null,generate_count:x.generate_count?Number(x.generate_count):void 0}),N(null),(k=window.showToast)==null||k.call(window,t("giftcard.saveSuccess"),"success"),await y(l)}catch(z){(O=window.showToast)==null||O.call(window,z instanceof Error?z.message:t("giftcard.saveFailed"),"error")}finally{D(!1)}}}async function L(o){var k;(k=window.showConfirm)==null||k.call(window,{message:t("giftcard.deleteConfirm"),onConfirm:async()=>{var O,z;try{await wo(o),(O=window.showToast)==null||O.call(window,t("giftcard.deleteSuccess"),"success"),await y(l)}catch(U){(z=window.showToast)==null||z.call(window,U instanceof Error?U.message:t("giftcard.deleteFailed"),"error")}}})}const Z=Math.ceil(i/15);return e.jsxs(We,{title:t("giftcard.title"),subtitle:t("giftcard.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("giftcard.heading")}),e.jsxs("p",{children:[i," ",t("giftcard.totalCards")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void y(l),disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(En()),children:[e.jsx(lt,{size:16}),t("giftcard.add")]})]})]}),C?e.jsx("div",{className:"form-error",children:C}):null,T?e.jsx("div",{className:"form-success",children:T}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("giftcard.thId")}),e.jsx("th",{children:t("giftcard.thName")}),e.jsx("th",{children:t("giftcard.thCode")}),e.jsx("th",{children:t("giftcard.thType")}),e.jsx("th",{children:t("giftcard.thValue")}),e.jsx("th",{children:t("giftcard.thBoundPlan")}),e.jsx("th",{children:t("giftcard.thUses")}),e.jsx("th",{children:t("giftcard.thPeriod")}),e.jsx("th",{children:t("giftcard.thActions")})]})}),e.jsxs("tbody",{children:[s.map(o=>{var k;return e.jsxs("tr",{children:[e.jsx("td",{children:o.id}),e.jsx("td",{children:e.jsx("strong",{children:o.name})}),e.jsx("td",{children:e.jsx("span",{className:"mono",children:o.code})}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:F[o.type]??o.type})}),e.jsx("td",{children:e.jsx("strong",{children:o.type===1?Ze(o.value):o.value})}),e.jsx("td",{children:o.plan_id?e.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((k=b.find(O=>O.id===o.plan_id))==null?void 0:k.name)||`#${o.plan_id}`}):e.jsx("span",{className:"tag muted-tag",children:t("giftcard.planNone")})}),e.jsx("td",{children:o.limit_use??"∞"}),e.jsx("td",{children:e.jsxs("small",{children:[on(o.started_at)," — ",on(o.ended_at)]})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>N(En(o)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void L(o.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},o.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:9,children:e.jsx("div",{className:"empty-state",children:t("giftcard.empty")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-giftcard-list",children:[s.map(o=>{var k;return e.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[e.jsxs("div",{className:"ticket-main",children:[e.jsxs("div",{className:"ticket-badge-row",children:[e.jsxs("span",{className:"ticket-id-tag",children:["ID: ",o.id]}),e.jsx("span",{className:"tag type-tag fixed-type",children:F[o.type]??o.type})]}),e.jsx("div",{className:"ticket-title-row",children:e.jsx("h3",{className:"ticket-name",title:o.name,children:o.name})}),e.jsxs("div",{className:"ticket-code-row",children:[e.jsx("span",{className:"ticket-label",children:t("giftcard.mobileCode")}),e.jsxs("div",{className:"copyable-code-pill",title:t("giftcard.clickToCopy"),onClick:()=>{Ct(o.code).then(O=>{var z;(z=window.showToast)==null||z.call(window,O?t("giftcard.copiedCode").replace("{code}",o.code):t("common.copyFailed"),O?"success":"error")})},children:[e.jsx("code",{className:"mono",children:o.code}),e.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),e.jsx("div",{className:"ticket-restrictions",children:o.plan_id?e.jsxs("div",{className:"restriction-pills",children:[e.jsx("span",{className:"res-icon",children:"📦"}),e.jsx("div",{className:"pill-list",children:e.jsx("span",{className:"res-pill plan-pill",children:((k=b.find(O=>O.id===o.plan_id))==null?void 0:k.name)||`#${o.plan_id}`})})]}):e.jsxs("span",{className:"all-plans-badge",children:["🔓 ",t("giftcard.appliesToAll")]})}),e.jsxs("div",{className:"ticket-dates",children:[e.jsx("span",{className:"date-icon",children:"📅"}),e.jsxs("span",{children:[on(o.started_at)," — ",on(o.ended_at)]})]})]}),e.jsxs("div",{className:"ticket-divider",children:[e.jsx("div",{className:"ticket-notch notch-top"}),e.jsx("div",{className:"ticket-notch notch-bottom"})]}),e.jsxs("div",{className:"ticket-side",children:[e.jsxs("div",{className:"ticket-value-wrap",children:[e.jsx("span",{className:"ticket-value",children:o.type===1?Ze(o.value).replace(/\s?₫/,""):`${o.value}`}),e.jsx("span",{className:"ticket-value-unit",children:o.type===1?"₫":F[o.type]??""})]}),e.jsxs("div",{className:"ticket-usage-wrap",children:[e.jsx("span",{className:"usage-label",children:t("giftcard.maxUses")}),e.jsx("span",{className:"usage-val",children:o.limit_use??"∞"})]}),e.jsxs("div",{className:"ticket-actions",children:[e.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>N(En(o)),"aria-label":t("common.edit"),children:e.jsx(Ge,{size:15})}),e.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void L(o.id),"aria-label":t("common.delete"),children:e.jsx(Qe,{size:15})})]})]})]},o.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("giftcard.empty")}):null]}),Z>1?e.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[e.jsx("button",{className:"mini-button",disabled:l<=1,onClick:()=>{f(l-1),y(l-1)},children:e.jsx(vt,{size:16})}),e.jsxs("span",{className:"page-info",children:[l," / ",Z]}),e.jsx("button",{className:"mini-button",disabled:l>=Z,onClick:()=>{f(l+1),y(l+1)},children:e.jsx(jt,{size:16})})]}):null,x?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:x.id?t("giftcard.edit"):t("giftcard.create")}),e.jsx("p",{children:t("giftcard.modalHelp")})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:E,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.name")}),e.jsx("input",{className:"config-input",required:!0,value:x.name,onChange:o=>N({...x,name:o.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelType")}),e.jsx("select",{className:"config-input",value:x.type,onChange:o=>N({...x,type:o.target.value}),children:Object.entries(F).map(([o,k])=>e.jsx("option",{value:o,children:k},o))})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.value")}),e.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:x.value,onChange:o=>N({...x,value:o.target.value})})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelStart")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:x.started_at,onChange:o=>N({...x,started_at:o.target.value}),onClick:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)},onFocus:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)}})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelEnd")}),e.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:x.ended_at,onChange:o=>N({...x,ended_at:o.target.value}),onClick:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)},onFocus:o=>{var k,O;return(O=(k=o.currentTarget).showPicker)==null?void 0:O.call(k)}})]})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelMaxUses")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:x.limit_use,onChange:o=>N({...x,limit_use:o.target.value}),placeholder:t("giftcard.placeholderUnlimited")})]}),x.id?e.jsx("div",{}):e.jsxs("label",{children:[e.jsx("span",{children:t("giftcard.labelBatchCount")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:x.generate_count,onChange:o=>N({...x,generate_count:o.target.value}),placeholder:t("giftcard.placeholderSingle")})]})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[e.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:t("giftcard.bindPlan")}),x.plan_id&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const o=b.find(k=>String(k.id)===x.plan_id);return e.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{N({...x,plan_id:""})},children:[o?o.name:`#${x.plan_id}`," ",e.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&e.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:t("giftcard.searchPlans"),value:R,onChange:o=>I(o.target.value)}),e.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!x.plan_id,onChange:()=>{N({...x,plan_id:""})}}),e.jsx("span",{children:t("giftcard.noneAllPlans")})]}),b.filter(o=>o.name.toLowerCase().includes(R.toLowerCase())).map(o=>{const k=String(o.id)===x.plan_id;return e.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[e.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:k,onChange:O=>{O.target.checked&&N({...x,plan_id:String(o.id)})}}),e.jsx("span",{children:o.name})]},o.id)}),b.length===0&&e.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:t("giftcard.noPlans")})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q,children:[e.jsx(ct,{size:16}),t(q?"giftcard.saving":"common.save")]})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const qt="Tương đối",bt="=";function rn(n){return n?new Date(n*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Al(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Os(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Mn(n){return+(n/1073741824).toFixed(2)}function Dn(n){return Math.round(n*1073741824)}function ln(n){return(n/1073741824).toFixed(2)}function Ol(n){return n?new Date(n*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function Rt(n){if(n===0)return"0.00 MB";const t=n/1073741824;return t<.1?`${(n/1048576).toFixed(2)} MB`:`${t.toFixed(2)} GB`}const Xn=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Mi="user_visible_columns";function Rl(){if(typeof window<"u")try{const n=localStorage.getItem(Mi);if(n)return new Set(JSON.parse(n))}catch{}return new Set(Xn.filter(n=>n.defaultVisible).map(n=>n.key))}const vn=[{value:"email",label:"Email",condition:qt,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:bt,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:bt,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:bt,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:bt,placeholder:"0 hoặc 1"},{value:"is_manager",label:"Manager",condition:bt,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:qt,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:bt,placeholder:"12345"},{value:"uuid",label:"UUID",condition:qt,placeholder:"UUID"},{value:"token",label:"Token",condition:qt,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:qt,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:bt,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:bt,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:bt,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:bt,placeholder:"1780366403"}],Hl=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Xe(n,t){switch(n){case"id":return t("user.colId");case"email":return t("user.colEmail");case"status":return t("user.colStatus");case"plan":return t("user.colPlan");case"group":return t("user.colGroup");case"used":return t("user.colUsed");case"traffic":return t("user.colTraffic");case"devices":return t("user.colDevices");case"expires":return t("user.colExpires");case"balance":return t("user.colBalance");case"commission":return t("user.colCommission");case"joined":return t("user.colJoined");case"actions":return t("user.colActions");default:return""}}function Ul(n,t){var i;const s=((i=vn.find(c=>c.value===n))==null?void 0:i.label)??n,r=c=>{const l=t(c);return l===c?s:l};switch(n){case"email":return t("user.filterEmail");case"id":return t("user.filterId");case"plan_id":return t("user.filterPlanId");case"banned":return r("user.filterBanned");case"is_admin":return r("user.filterAdmin");case"is_manager":return r("user.filterManager");case"invite_by_email":return t("user.filterInviterEmail");case"invite_user_id":return t("user.filterInviterUserId");case"uuid":return r("user.filterUuid");case"token":return r("user.filterToken");case"remarks":return t("user.filterRemarks");case"transfer_enable":return r("user.filterTransferEnable");case"d":return r("user.filterDownloadUsed");case"device_limit":return r("user.filterDeviceLimit");case"expired_at":return r("user.filterExpiredAt");default:return s}}function Ln(n){return vn.find(t=>t.value===n)??vn[0]}function ql(n,t){switch(n){case"month_price":return t("order.period.month_price");case"quarter_price":return t("order.period.quarter_price");case"half_year_price":return t("order.period.half_year_price");case"year_price":return t("order.period.year_price");case"two_year_price":return t("order.period.two_year_price");case"three_year_price":return t("order.period.three_year_price");case"onetime_price":return t("order.period.onetime_price");case"reset_price":return t("order.period.reset_price");default:return""}}function Bl(){const n=Ue(),t=Xt(),{t:s}=he(),[r,i]=a.useState([]),[c,l]=a.useState([]),[f,b]=a.useState([]),[S,x]=a.useState(0),[N,m]=a.useState(1),[$,q]=a.useState(""),[D,C]=a.useState("email"),[M,T]=a.useState(!0),[_,R]=a.useState(""),[I,F]=a.useState(Rl),[y,E]=a.useState(!1),L=a.useRef(null),[Z,o]=a.useState(null),[k,O]=a.useState(null),[z,U]=a.useState(null),[w,A]=a.useState({}),[h,Q]=a.useState(!1),[H,ee]=a.useState(!1),[Y,se]=a.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[ye,Ie]=a.useState(!1),[Fe,De]=a.useState(null),[Me,ke]=a.useState({plan_id:"",period:"month_price",total_amount:""}),[we,Ce]=a.useState(!1),[fe,qe]=a.useState(null),[j,ne]=a.useState(null),[G,be]=a.useState([]),[_e,xe]=a.useState(0),[ze,Re]=a.useState(1),[ae]=a.useState(10),[nt,ue]=a.useState(!1),[st,et]=a.useState("");a.useEffect(()=>{function d(B){const W=B.target instanceof Element?B.target:null;Z!==null&&(!W||!W.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(o(null),O(null)),y&&L.current&&!L.current.contains(B.target)&&E(!1)}return document.addEventListener("mousedown",d),()=>document.removeEventListener("mousedown",d)},[Z,y]),a.useEffect(()=>{if(Z===null)return;const d=()=>{o(null),O(null)};return window.addEventListener("resize",d),window.addEventListener("scroll",d,!0),()=>{window.removeEventListener("resize",d),window.removeEventListener("scroll",d,!0)}},[Z]);function it(d,B){if(Z===d){o(null),O(null);return}const W=B.getBoundingClientRect(),le=220,Pe=392,xt=6,ot=8,wn=Math.max(ot,Math.min(window.innerWidth-le-ot,W.right-le)),Di=W.bottom+xt+Pe<=window.innerHeight-ot?W.bottom+xt:Math.max(ot,W.top-Pe-xt);O({top:Di,left:wn}),o(d)}function P(){o(null),O(null)}function re(d,B=!1,W=""){const le=Pe=>{P(),Pe()};return e.jsxs("div",{className:`action-dropdown-menu ${B?"action-dropdown-menu-fixed":""} ${W}`.trim(),style:B&&k?{top:k.top,left:k.left}:void 0,onMouseDown:Pe=>Pe.stopPropagation(),children:[e.jsxs("button",{type:"button",onClick:()=>le(()=>ce(d)),children:[e.jsx(Ge,{size:14}),s("user.actionEdit")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>X(d)),children:[e.jsx(ci,{size:14}),s("user.actionAssignOrder")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>void $t(d)),children:[e.jsx(ft,{size:14}),s("user.actionCopyUrl")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>ut(d)),children:[e.jsx(Gn,{size:14}),s("user.actionGetQr")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>Et(d)),children:[e.jsx(es,{size:14}),s("user.actionResetSecret")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>At(d)),children:[e.jsx(ia,{size:14}),s("user.actionOrders")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>u(d)),children:[e.jsx(qn,{size:14}),s("user.actionSubscriptions")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>p(d)),children:[e.jsx(mn,{size:14}),s("user.actionInvitedUsers")]}),e.jsxs("button",{type:"button",onClick:()=>le(()=>g(d)),children:[e.jsx(us,{size:14}),s("user.actionDataHistory")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{type:"button",className:"danger-item",onClick:()=>le(()=>wt(d)),children:[e.jsx(Qe,{size:14}),s("user.actionDelete")]})]})}function oe(d){F(B=>{const W=new Set(B);W.has(d)?W.delete(d):W.add(d);try{localStorage.setItem(Mi,JSON.stringify([...W]))}catch{}return W})}const te=d=>I.has(d),ve=Xn.filter(d=>I.has(d.key)).length,me=a.useCallback(async(d=1,B,W)=>{T(!0),R("");try{const le=B==null?void 0:B.trim(),Pe=Ln(W||"email"),xt=le?[{key:Pe.value,condition:Pe.condition,value:le}]:void 0,ot=await Yn(d,15,xt);i(ot.data),x(ot.total)}catch(le){R(le instanceof Error?le.message:s("user.loadFailed"))}finally{T(!1)}},[]),Ee=a.useCallback(async()=>{try{const[d,B]=await Promise.all([Tt(),Ht()]);l(d),b(B)}catch{}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const d=new URLSearchParams(t.search),W=[["email",d.get("email")||d.get("filter_email")],["id",d.get("id")||d.get("user_id")||d.get("filter_user_id")],["plan_id",d.get("plan_id")],["invite_user_id",d.get("invite_user_id")],["invite_by_email",d.get("invite_by_email")],["uuid",d.get("uuid")],["token",d.get("token")],["remarks",d.get("remarks")]].find(([,le])=>le==null?void 0:le.trim());if(W){const[le,Pe]=W,xt=Ln(le),ot=(Pe==null?void 0:Pe.trim())??"";C(xt.value),q(ot),m(1),me(1,ot,xt.value)}else me(1);Ee()},[me,Ee,n,t.search]);function Se(){m(1),me(1,$,D)}function Ke(){q(""),m(1),me(1)}function at(d){m(d),me(d,$,D)}function Be(d){if(d.plan_name)return d.plan_name;if(!d.plan_id)return"—";const B=c.find(W=>W.id===d.plan_id);return B?B.name:`#${d.plan_id}`}function Pt(d){if(!d.group_id)return"—";const B=f.find(W=>W.id===d.group_id);return B?B.name:`#${d.group_id}`}function tt(d,B){const W=s(d);return W===d?B:W}function Lt(d){const B=Number(d.device_limit??0);return B>0?`${Number(d.device_bound_count??0)} / ${B}`:tt("user.unlimited","Unlimited")}function Ut(d){const B=Number(d.device_bound_count??0),W=Number(d.device_pending_count??0),le=Number(d.device_banned_count??0),Pe=Number(d.device_online_count??0),xt=Number(d.alive_ip??0),ot=Number(d.device_limit??0),wn=ot>0?`${B} / ${ot}`:`${B} / ${tt("user.unlimited","Unlimited")}`,Nn=[`${tt("user.deviceBound","Bound")}: ${wn}`,`${tt("user.devicePending","Pending")}: ${W}`,`${tt("user.deviceBanned","Banned")}: ${le}`,`${tt("user.deviceOnline","Online devices")}: ${Pe}`,`${tt("user.deviceOnlineIp","Online IP")}: ${xt}`];return d.ips&&Nn.push(d.ips),Nn.join(`
`)}function It(d){n.push(`/device?user_id=${encodeURIComponent(String(d.id))}`)}function Ft(d,B="left"){const W=`${tt("user.deviceOnlineShort","Online")}: ${Number(d.device_online_count??0)} | ${tt("user.deviceIpShort","IP")}: ${Number(d.alive_ip??0)}`;return e.jsxs("button",{className:`device-cell-button ${B==="right"?"align-right":""}`,type:"button",title:Ut(d),onClick:()=>It(d),children:[e.jsx("span",{className:"device-cell-primary",children:Lt(d)}),e.jsx("span",{className:"device-cell-secondary",children:W})]})}async function $t(d){var le,Pe;const B=d.subscribe_url;if(!B){(le=window.showToast)==null||le.call(window,s("user.toastNoSubscribeUrl"),"error");return}const W=await Ct(B);(Pe=window.showToast)==null||Pe.call(window,s(W?"user.toastUrlCopied":"common.copyFailed"),W?"success":"error"),o(null)}function Et(d){var B;o(null),(B=window.showConfirm)==null||B.call(window,{message:s("user.confirmResetSecret"),onConfirm:async()=>{var W,le;try{await So(d.id),(W=window.showToast)==null||W.call(window,s("user.toastSecretResetSuccess"),"success"),await me(N,$,D)}catch(Pe){(le=window.showToast)==null||le.call(window,Pe instanceof Error?Pe.message:s("user.toastSecretResetFailed"),"error")}}})}function wt(d){var B;o(null),(B=window.showConfirm)==null||B.call(window,{message:s("user.confirmDelete"),onConfirm:async()=>{var W,le;try{await ko(d.id),(W=window.showToast)==null||W.call(window,s("user.toastDeletedSuccess"),"success"),await me(N,$,D)}catch(Pe){(le=window.showToast)==null||le.call(window,Pe instanceof Error?Pe.message:s("user.toastDeletedFailed"),"error")}}})}function ut(d){var W;o(null);const B=d.subscribe_url;if(!B){(W=window.showToast)==null||W.call(window,s("user.toastNoSubscribeUrl"),"error");return}qe({url:B,userId:d.id})}function At(d){o(null),n.push(`/order?user_id=${d.id}`)}function u(d){o(null),n.push(`/subscription?user_id=${d.id}`)}function p(d){o(null),C("invite_user_id"),q(String(d.id)),me(1,String(d.id),"invite_user_id")}async function v(d,B){ue(!0),et("");try{const W=await Eo(d,B,ae);be(W.data||[]),xe(W.total||0),Re(B)}catch(W){et(W instanceof Error?W.message:s("user.historyLoading"))}finally{ue(!1)}}function g(d){o(null),ne(d),v(d.id,1)}function X(d){o(null),De(d.email),ke({plan_id:"",period:"month_price",total_amount:""})}async function de(d){var B,W;if(d.preventDefault(),!!Fe){Ce(!0);try{await ss({email:Fe,plan_id:Number(Me.plan_id),period:Me.period,total_amount:(Number(Me.total_amount)||0)*100}),(B=window.showToast)==null||B.call(window,s("user.toastAssignSuccess"),"success"),De(null)}catch(le){(W=window.showToast)==null||W.call(window,le instanceof Error?le.message:s("user.toastAssignFailed"),"error")}finally{Ce(!1)}}}function ce(d){o(null),U(d),A({id:d.id,email:d.email,invite_user_email:"",password:"",balance:d.balance,commission_balance:d.commission_balance,u:Mn(d.u),d:Mn(d.d),transfer_enable:Mn(d.transfer_enable),device_limit:d.device_limit,expired_at:Al(d.expired_at),plan_id:d.plan_id,banned:d.banned,commission_type:d.commission_type??0,commission_rate:d.commission_rate??"",discount:d.discount??"",speed_limit:d.speed_limit,is_admin:d.is_admin,is_staff:d.is_staff,is_manager:d.is_manager,remarks:d.remarks??""})}function pe(d,B){A(W=>({...W,[d]:B}))}async function Te(d){var B,W;if(d.preventDefault(),!!z){Q(!0);try{const le={id:z.id,email:w.email,plan_id:w.plan_id||null,expired_at:Os(String(w.expired_at??"")),transfer_enable:Dn(Number(w.transfer_enable??0)),speed_limit:w.speed_limit||null,device_limit:w.device_limit||null,u:Dn(Number(w.u??0)),d:Dn(Number(w.d??0)),balance:Number(w.balance??0),commission_balance:Number(w.commission_balance??0),commission_rate:w.commission_rate!==""&&w.commission_rate!==null?Number(w.commission_rate):null,commission_type:Number(w.commission_type??0),discount:w.discount!==""&&w.discount!==null?Number(w.discount):null,remarks:w.remarks||null,is_admin:Number(w.is_admin??0),is_staff:Number(w.is_staff??0),is_manager:Number(w.is_manager??0),banned:Number(w.banned??0)};w.invite_user_email&&(le.invite_user_email=w.invite_user_email),w.password&&(le.password=w.password),await No(le),(B=window.showToast)==null||B.call(window,s("user.toastSaveSuccess"),"success"),U(null),await me(N,$,D)}catch(le){(W=window.showToast)==null||W.call(window,le instanceof Error?le.message:s("user.toastSaveFailed"),"error")}finally{Q(!1)}}}async function Ye(d){var B,W;d.preventDefault(),Ie(!0);try{await _o({email_prefix:Y.email_prefix,email_suffix:Y.email_suffix,password:Y.password||void 0,plan_id:Y.plan_id?Number(Y.plan_id):void 0,expired_at:Os(Y.expired_at)}),(B=window.showToast)==null||B.call(window,s("user.toastCreateSuccess"),"success"),ee(!1),se({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await me(N,$,D)}catch(le){(W=window.showToast)==null||W.call(window,le instanceof Error?le.message:s("user.toastCreateFailed"),"error")}finally{Ie(!1)}}const ge=Math.ceil(S/15),dt=Ln(D);return e.jsxs(We,{title:s("user.title"),subtitle:s("user.subtitle"),children:[e.jsx("style",{children:`
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
      `}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("user.heading")}),e.jsxs("p",{children:[S," ",s("user.totalUsers")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("div",{className:"col-picker-wrap",ref:L,children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>E(!y),children:[e.jsx(Xi,{size:16}),s("user.columns")]}),y?e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"col-picker-backdrop",type:"button","aria-label":s("common.closeMenu"),onClick:()=>E(!1)}),e.jsxs("div",{className:"col-picker-dropdown",children:[e.jsx("div",{className:"col-picker-header",children:e.jsx("span",{children:s("user.visibleColumns",{count:ve})})}),e.jsx("div",{className:"col-picker-list",children:Xn.map(d=>e.jsxs("label",{className:"col-picker-item",children:[e.jsx("input",{type:"checkbox",checked:I.has(d.key),onChange:()=>oe(d.key)}),e.jsx("span",{children:Xe(d.key,s)})]},d.key))})]})]}):null]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void me(N,$,D),disabled:M,children:[e.jsx(Oe,{size:16}),s("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ee(!0),children:[e.jsx(lt,{size:16}),s("user.createUser")]})]})]}),e.jsxs("div",{className:"filter-bar",children:[e.jsx("select",{className:"config-input filter-select",value:D,onChange:d=>C(d.target.value),children:vn.map(d=>e.jsx("option",{value:d.value,children:Ul(d.value,s)},d.value))}),e.jsxs("div",{className:"search-input-wrap",children:[e.jsx(jn,{size:16}),e.jsx("input",{className:"config-input search-input",value:$,onChange:d=>q(d.target.value),placeholder:dt.placeholder,onKeyDown:d=>d.key==="Enter"&&Se()})]}),e.jsxs("button",{className:"ghost-button",type:"button",onClick:Se,children:[e.jsx(Qt,{size:16}),s("user.filter")]}),$?e.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[e.jsx(Ne,{size:16}),s("user.clearFilter")]}):null]}),_?e.jsx("div",{className:"form-error",children:_}):null,M&&r.length===0?e.jsx($e,{label:s("user.loading")}):null,e.jsxs("div",{className:`content-loading-container ${M?"is-loading":""}`,children:[e.jsx("div",{className:"page-loading-bar"}),e.jsxs("div",{className:"mobile-user-list",children:[r.map(d=>{const B=ln(d.u+d.d),W=ln(d.transfer_enable),le=parseFloat(B);return e.jsxs("div",{className:"mobile-user-card",children:[e.jsxs("div",{className:"mobile-user-card-header",children:[e.jsxs("div",{className:"user-id-email",children:[e.jsxs("span",{className:"user-id",children:["#",d.id]}),e.jsx("span",{className:"user-email",title:d.email,children:d.email})]}),d.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})]}),e.jsxs("div",{className:"mobile-user-card-body",children:[e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.planGroupLabel")}),e.jsxs("span",{className:"info-val",children:[Be(d)," / ",d.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Pt(d)]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.trafficUsedLimitLabel")}),e.jsxs("span",{className:"info-val",children:[e.jsxs("span",{className:`traffic-used ${le>0?le>parseFloat(W)*.9?"high":"ok":""}`,children:[B," GB"]})," / ",W," GB"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("devices",s)}),e.jsx("span",{className:"info-val",children:Ft(d,"right")})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("expires",s)}),e.jsx("span",{className:"info-val",children:d.expired_at?e.jsx("span",{className:`expiry-date ${d.expired_at<Date.now()/1e3?"expired":""}`,children:rn(d.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:s("user.balanceCommLabel")}),e.jsxs("span",{className:"info-val",children:[(d.balance/100).toFixed(2)," ₫ / ",(d.commission_balance/100).toFixed(2)," ₫"]})]}),e.jsxs("div",{className:"info-row",children:[e.jsx("span",{className:"info-label",children:Xe("joined",s)}),e.jsx("span",{className:"info-val",children:e.jsx("small",{children:rn(d.created_at)})})]})]}),e.jsx("div",{className:"mobile-user-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===d.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>o(Z===d.id?null:d.id),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Z===d.id?e.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>o(null),children:e.jsxs("div",{className:"mobile-action-sheet",onClick:Pe=>Pe.stopPropagation(),children:[e.jsxs("div",{className:"mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:d.email}),e.jsxs("small",{children:["#",d.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>o(null),children:e.jsx(Ne,{size:16})})]}),re(d,!1,"mobile-action-menu")]})}):null]})})]},d.id)}),!M&&r.length===0?e.jsx("div",{className:"empty-state",children:s("user.noUsers")}):null]}),e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table user-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[te("id")&&e.jsx("th",{children:Xe("id",s)}),te("email")&&e.jsx("th",{children:Xe("email",s)}),te("status")&&e.jsx("th",{children:Xe("status",s)}),te("plan")&&e.jsx("th",{children:Xe("plan",s)}),te("group")&&e.jsx("th",{children:Xe("group",s)}),te("used")&&e.jsx("th",{children:Xe("used",s)}),te("traffic")&&e.jsx("th",{children:Xe("traffic",s)}),te("devices")&&e.jsx("th",{children:Xe("devices",s)}),te("expires")&&e.jsx("th",{children:Xe("expires",s)}),te("balance")&&e.jsx("th",{children:Xe("balance",s)}),te("commission")&&e.jsx("th",{children:Xe("commission",s)}),te("joined")&&e.jsx("th",{children:Xe("joined",s)}),te("actions")&&e.jsx("th",{className:"user-actions-col",children:Xe("actions",s)})]})}),e.jsxs("tbody",{children:[r.map(d=>{const B=ln(d.u+d.d),W=ln(d.transfer_enable),le=parseFloat(B);return e.jsxs("tr",{children:[te("id")&&e.jsx("td",{children:d.id}),te("email")&&e.jsx("td",{children:e.jsx("span",{className:"email-link",children:d.email})}),te("status")&&e.jsx("td",{children:d.banned?e.jsx("span",{className:"status-tag banned",children:s("user.cardBanned")}):e.jsx("span",{className:"status-tag normal",children:s("user.cardActive")})}),te("plan")&&e.jsx("td",{children:Be(d)}),te("group")&&e.jsx("td",{children:d.is_admin?e.jsx("span",{style:{fontWeight:600},children:s("user.adminLabel")}):Pt(d)}),te("used")&&e.jsx("td",{children:e.jsx("span",{className:`traffic-used ${le>0?le>parseFloat(W)*.9?"high":"ok":""}`,children:B})}),te("traffic")&&e.jsx("td",{children:W}),te("devices")&&e.jsx("td",{children:Ft(d)}),te("expires")&&e.jsx("td",{children:d.expired_at?e.jsx("span",{className:`expiry-date ${d.expired_at<Date.now()/1e3?"expired":""}`,children:rn(d.expired_at)}):e.jsx("span",{className:"expiry-none",children:"—"})}),te("balance")&&e.jsx("td",{children:(d.balance/100).toFixed(2)}),te("commission")&&e.jsx("td",{children:(d.commission_balance/100).toFixed(2)}),te("joined")&&e.jsx("td",{children:e.jsx("small",{children:rn(d.created_at)})}),te("actions")&&e.jsx("td",{className:"user-actions-col",children:e.jsxs("div",{className:`action-dropdown-wrap ${Z===d.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:Pe=>it(d.id,Pe.currentTarget),children:[s("user.colActions")," ",e.jsx(yt,{size:14})]}),Z===d.id&&k?ni.createPortal(re(d,!0),document.body):null]})})]},d.id)}),!M&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:ve,children:e.jsx("div",{className:"empty-state",children:s("user.noUsers")})})}):null]})]})})}),ge>1?e.jsx("div",{className:"pagination-wrap",children:e.jsxs("div",{className:"pagination",children:[e.jsx("button",{className:"mini-button",disabled:N<=1,onClick:()=>at(N-1),children:e.jsx(vt,{size:16})}),Array.from({length:Math.min(5,ge)},(d,B)=>{let W;return ge<=5||N<=3?W=B+1:N>=ge-2?W=ge-4+B:W=N-2+B,e.jsx("button",{className:`mini-button ${W===N?"active-page":""}`,onClick:()=>at(W),children:W},W)}),ge>5?e.jsxs("span",{className:"page-info",children:["… ",ge]}):null,e.jsx("button",{className:"mini-button",disabled:N>=ge,onClick:()=>at(N+1),children:e.jsx(jt,{size:16})})]})}):null]}),z?e.jsx("div",{className:"modal-backdrop",onClick:()=>U(null),children:e.jsxs("section",{className:"modal-panel edit-user-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.editUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>U(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-body-scroll",onSubmit:Te,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",required:!0,value:String(w.email??""),onChange:d=>pe("email",d.target.value)})]}),e.jsxs("label",{className:"field-label",children:[s("user.inviterEmailLabel"),e.jsx("input",{className:"config-input",type:"email",value:String(w.invite_user_email??""),onChange:d=>pe("invite_user_email",d.target.value),placeholder:s("user.inviterEmailLabel")})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:String(w.password??""),onChange:d=>pe("password",d.target.value),placeholder:s("user.passwordPlaceholder"),minLength:8})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.balance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(w.balance??0)/100).toFixed(2)),onChange:d=>pe("balance",Math.round(Number(d.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionBalance"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(w.commission_balance??0)/100).toFixed(2)),onChange:d=>pe("commission_balance",Math.round(Number(d.target.value)*100))}),e.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),e.jsxs("div",{className:"form-row-2",children:[e.jsxs("label",{className:"field-label",children:[s("user.uploadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.u??0),onChange:d=>pe("u",d.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.downloadLabel"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.d??0),onChange:d=>pe("d",d.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.transferEnable"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.transfer_enable??0),onChange:d=>pe("transfer_enable",d.target.value)}),e.jsx("span",{className:"input-suffix",children:"GB"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(w.device_limit??""),onChange:d=>pe("device_limit",d.target.value?Number(d.target.value):null),placeholder:s("user.deviceLimitPlaceholder")})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:String(w.expired_at??""),onChange:d=>pe("expired_at",d.target.value),onClick:d=>{var B,W;return(W=(B=d.currentTarget).showPicker)==null?void 0:W.call(B)},onFocus:d=>{var B,W;return(W=(B=d.currentTarget).showPicker)==null?void 0:W.call(B)}})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:String(w.plan_id??""),onChange:d=>pe("plan_id",d.target.value?Number(d.target.value):null),children:[e.jsx("option",{value:"",children:s("user.planNone")}),c.map(d=>e.jsx("option",{value:d.id,children:d.name},d.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.accountStatusLabel"),e.jsxs("select",{className:"config-input",value:String(w.banned??0),onChange:d=>pe("banned",Number(d.target.value)),children:[e.jsx("option",{value:"0",children:s("user.cardActive")}),e.jsx("option",{value:"1",children:s("user.cardBanned")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionTypeLabel"),e.jsxs("select",{className:"config-input",value:String(w.commission_type??0),onChange:d=>pe("commission_type",Number(d.target.value)),children:[e.jsx("option",{value:"0",children:s("user.commissionTypeSystem")}),e.jsx("option",{value:"1",children:s("user.commissionTypeFixed")}),e.jsx("option",{value:"2",children:s("user.commissionTypePercent")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.commissionRate"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(w.commission_rate??""),onChange:d=>pe("commission_rate",d.target.value),placeholder:s("user.commissionRatePlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.discount"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(w.discount??""),onChange:d=>pe("discount",d.target.value),placeholder:s("user.exclusiveDiscountPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"%"})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.speedLimit"),e.jsxs("div",{className:"input-with-suffix",children:[e.jsx("input",{className:"config-input",type:"number",min:"0",value:String(w.speed_limit??""),onChange:d=>pe("speed_limit",d.target.value?Number(d.target.value):null),placeholder:s("user.speedLimitPlaceholder")}),e.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.adminLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${w.is_admin?"active":""}`,onClick:()=>pe("is_admin",w.is_admin?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.managerLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${w.is_manager?"active":""}`,onClick:()=>pe("is_manager",w.is_manager?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"toggle-field",children:[e.jsx("span",{className:"field-label-text",children:s("user.staffLabel")}),e.jsx("button",{type:"button",className:`admin-switch ${w.is_staff?"active":""}`,onClick:()=>pe("is_staff",w.is_staff?0:1),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("label",{className:"field-label",children:[s("user.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:String(w.remarks??""),onChange:d=>pe("remarks",d.target.value),placeholder:s("user.remarksPlaceholder")})]}),e.jsxs("div",{className:"modal-footer",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:h,children:s(h?"common.processing":"common.save")})]})]})]})}):null,H?e.jsx("div",{className:"modal-backdrop",onClick:()=>ee(!1),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.createUser")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ee(!1),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:Ye,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsxs("div",{className:"email-compose",children:[e.jsx("input",{className:"config-input",required:!0,value:Y.email_prefix,onChange:d=>se({...Y,email_prefix:d.target.value}),placeholder:s("user.emailPrefix")}),e.jsx("span",{className:"email-at",children:"@"}),e.jsx("input",{className:"config-input",required:!0,value:Y.email_suffix,onChange:d=>se({...Y,email_suffix:d.target.value}),placeholder:s("user.emailSuffix")})]})]}),e.jsxs("label",{className:"field-label",children:[s("user.password"),e.jsx("input",{className:"config-input",type:"password",value:Y.password,onChange:d=>se({...Y,password:d.target.value}),placeholder:s("user.createPasswordPlaceholder"),minLength:8})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",value:Y.plan_id,onChange:d=>se({...Y,plan_id:d.target.value}),children:[e.jsx("option",{value:"",children:s("user.planNone")}),c.map(d=>e.jsx("option",{value:d.id,children:d.name},d.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.expiredAt"),e.jsx("input",{className:"config-input",type:"date",value:Y.expired_at,onChange:d=>se({...Y,expired_at:d.target.value}),onClick:d=>{var B,W;return(W=(B=d.currentTarget).showPicker)==null?void 0:W.call(B)},onFocus:d=>{var B,W;return(W=(B=d.currentTarget).showPicker)==null?void 0:W.call(B)}})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ee(!1),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:ye,children:s(ye?"user.creating":"user.createUser")})]})]})]})}):null,Fe?e.jsx("div",{className:"modal-backdrop",onClick:()=>De(null),children:e.jsxs("section",{className:"modal-panel compact-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.assignOrderTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>De(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:de,children:[e.jsxs("label",{className:"field-label",children:[s("user.email"),e.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Fe})]}),e.jsxs("label",{className:"field-label",children:[s("user.plan"),e.jsxs("select",{className:"config-input",required:!0,value:Me.plan_id,onChange:d=>ke({...Me,plan_id:d.target.value}),children:[e.jsx("option",{value:"",children:s("user.assignPlanSelect")}),c.map(d=>e.jsx("option",{value:d.id,children:d.name},d.id))]})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignPeriodLabel"),e.jsx("select",{className:"config-input",value:Me.period,onChange:d=>ke({...Me,period:d.target.value}),children:Hl.map(d=>e.jsx("option",{value:d.value,children:ql(d.value,s)},d.value))})]}),e.jsxs("label",{className:"field-label",children:[s("user.assignTotalAmountLabel"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Me.total_amount,onChange:d=>ke({...Me,total_amount:d.target.value}),placeholder:"0"})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>De(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:we,children:s(we?"common.processing":"common.save")})]})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),fe?e.jsx("div",{className:"modal-backdrop",onClick:()=>qe(null),children:e.jsxs("section",{className:"modal-panel qr-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("h2",{children:s("user.qrCodeTitle")}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>qe(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(fe.url)}`,alt:s("user.actionGetQr"),width:200,height:200}),e.jsx("div",{className:"qr-url",children:s("user.qrCodeUserId",{userId:fe.userId})})]})]})}):null,j?e.jsx("div",{className:"modal-backdrop",onClick:()=>ne(null),children:e.jsxs("section",{className:"modal-panel history-modal",onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:s("user.dataHistoryTitle")}),e.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:s("user.dataHistorySub",{email:j.email,id:j.id})})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[st?e.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:st}):null,e.jsxs("div",{className:"history-summary-grid",children:[e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyLogCount")}),e.jsx("div",{className:"summary-card-value",children:s("user.historyTotalDays",{count:_e})})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalUpload")}),e.jsx("div",{className:"summary-card-value highlight",children:Rt(G.reduce((d,B)=>d+B.u,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyTotalDownload")}),e.jsx("div",{className:"summary-card-value highlight",children:Rt(G.reduce((d,B)=>d+B.d,0))})]}),e.jsxs("div",{className:"summary-card",children:[e.jsx("div",{className:"summary-card-title",children:s("user.historyCombinedUsage")}),e.jsx("div",{className:"summary-card-value highlight",children:Rt(G.reduce((d,B)=>d+B.u+B.d,0))})]})]}),nt?e.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:e.jsx($e,{label:s("user.historyLoading")})}):G.length===0?e.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[e.jsx(us,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),e.jsx("p",{style:{fontWeight:500},children:s("user.historyNoHistory")}),e.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:s("user.historyNoHistoryHelp")})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:e.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("user.historyColDate")}),e.jsx("th",{children:s("user.historyColRate")}),e.jsx("th",{children:s("user.historyColUpload")}),e.jsx("th",{children:s("user.historyColDownload")}),e.jsx("th",{children:s("user.historyColTotal")})]})}),e.jsx("tbody",{children:G.map(d=>{const B=Rt(d.u),W=Rt(d.d),le=Rt(d.u+d.d);return e.jsxs("tr",{children:[e.jsx("td",{style:{fontWeight:500},children:Ol(d.record_at)}),e.jsx("td",{children:e.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(d.server_rate).toFixed(1),"x"]})}),e.jsx("td",{style:{color:"var(--muted)"},children:B}),e.jsx("td",{style:{color:"var(--muted)"},children:W}),e.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:le})]},d.id)})})]})}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[e.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:s("user.historyShowingLogs",{start:Math.min((ze-1)*ae+1,_e),end:Math.min(ze*ae,_e),total:_e})}),e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:ze<=1,onClick:()=>v(j.id,ze-1),children:[e.jsx(vt,{size:16}),s("user.historyPrev")]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:ze*ae>=_e,onClick:()=>v(j.id,ze+1),children:[s("user.historyNext"),e.jsx(jt,{size:16})]})]})]})]})]})]})}):null]})}function Gl(n,t=8,s=4){return n.length<=t+s+3?n:`${n.slice(0,t)}...${n.slice(-s)}`}function Jt({value:n,onCopy:t,className:s="",copyClassName:r="",prefixLength:i=8,suffixLength:c=4}){const{t:l}=he(),[f,b]=a.useState(!1),S=f?n:Gl(n,i,c);return e.jsxs("span",{className:`masked-uuid ${s}`.trim(),children:[e.jsxs("button",{className:`copy-value masked-uuid-copy ${r}`.trim(),type:"button",title:l("uuid.copy"),onClick:()=>void t(),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono masked-uuid-text",title:f?n:S,children:S})]}),e.jsx("button",{className:"masked-uuid-toggle",type:"button",title:l(f?"uuid.hide":"uuid.showFull"),"aria-label":l(f?"uuid.hide":"uuid.showFull"),onClick:()=>b(x=>!x),children:f?e.jsx(na,{size:14}):e.jsx(sa,{size:14})})]})}const Rs=15,Hs=20,Wl=["email","id","user_id","plan_id","status"],Kl=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function kt(n,t){return n?new Date(n*1e3).toLocaleString():t}function Yl(n){if(!n)return"";const t=new Date(n*1e3),s=r=>String(r).padStart(2,"0");return`${t.getFullYear()}-${s(t.getMonth()+1)}-${s(t.getDate())}`}function Jl(n){return n?Math.floor(new Date(n).getTime()/1e3):null}function Mt(n){return+(n/1073741824).toFixed(2)}function In(n){return Math.round((Number(n)||0)*1073741824)}function Zl(n){return n==="email"?"like":"="}function Ql(n,t){switch(n){case"email":return t("subscription.filterEmail");case"id":return t("subscription.filterId");case"user_id":return t("subscription.filterUserId");case"plan_id":return t("subscription.filterPlanId");case"status":return t("subscription.filterStatus");default:return n}}function Xl(n,t){const s=t(`order.period.${n}`);return s===`order.period.${n}`?n:s}function Us(n,t){return t(n==="active"?"subscription.statusActive":"subscription.statusDisabled")}function qs(n,t){switch(n){case"bound":return t("subscription.slotStatusBound");case"banned":return t("subscription.slotStatusBanned");default:return t("subscription.slotStatusPending")}}function Bs(n){switch(n){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Gs(n){return String(n.hwid??"").trim()!==""}function Vl(n){return n.transfer_enable?Math.min(100,Math.round(n.total_used/n.transfer_enable*100)):0}function ec(){const n=Ue(),t=Xt(),{t:s}=he(),[r,i]=a.useState([]),[c,l]=a.useState([]),[f,b]=a.useState(0),[S,x]=a.useState(1),[N,m]=a.useState("email"),[$,q]=a.useState(""),[D,C]=a.useState(!0),[M,T]=a.useState(""),[_,R]=a.useState(null),[I,F]=a.useState({}),[y,E]=a.useState(null),[L,Z]=a.useState(null),[o,k]=a.useState([]),[O,z]=a.useState(0),[U,w]=a.useState(1),[A,h]=a.useState(!1),[Q,H]=a.useState(""),[ee,Y]=a.useState(null),[se,ye]=a.useState(null),[Ie,Fe]=a.useState({period:"month_price",total_amount:""}),[De,Me]=a.useState(!1),[ke,we]=a.useState(null),[Ce,fe]=a.useState(null),[qe,j]=a.useState(null);function ne(u){const p=u==null?void 0:u.trim();p&&n.push(`/user?email=${encodeURIComponent(p)}`)}const G=a.useCallback(async(u=1,p="",v="email")=>{C(!0),T("");try{const g=p.trim()?[{key:v,condition:Zl(v),value:p.trim()}]:void 0,X=await Co(u,Rs,g);i(X.data),b(X.total),x(u)}catch(g){T(g instanceof Error?g.message:s("subscription.loadFailed"))}finally{C(!1)}},[s]),be=a.useCallback(async(u,p=1)=>{h(!0),H("");try{const v=await fi(p,Hs,[{key:"subscription_id",condition:"=",value:String(u.id)}]);k(v.data),z(v.total),w(p)}catch(v){H(v instanceof Error?v.message:s("subscription.slotsLoadFailed"))}finally{h(!1)}},[s]),_e=a.useCallback(async()=>{var u;try{l(await Tt())}catch(p){(u=window.showToast)==null||u.call(window,p instanceof Error?p.message:s("subscription.plansLoadFailed"),"error")}},[s]);a.useEffect(()=>{if(!He()){n.replace("/login");return}_e();const u=new URLSearchParams(t.search),v=[["user_id",u.get("user_id")],["id",u.get("id")],["plan_id",u.get("plan_id")],["email",u.get("email")],["status",u.get("status")]].find(([,g])=>g&&g.trim());if(v){const[g,X]=v,de=X??"";m(g),q(de),G(1,de,g);return}G()},[G,_e,t.search,n]),a.useEffect(()=>{function u(p){const v=p.target instanceof Element?p.target:null;ke!==null&&(!v||!v.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&xe()}return document.addEventListener("mousedown",u),()=>document.removeEventListener("mousedown",u)},[ke]),a.useEffect(()=>{if(ke===null)return;const u=()=>xe();return window.addEventListener("resize",u),window.addEventListener("scroll",u,!0),()=>{window.removeEventListener("resize",u),window.removeEventListener("scroll",u,!0)}},[ke]);function xe(){we(null),fe(null)}function ze(u,p){if(ke===u&&Ce){xe();return}const v=p.getBoundingClientRect(),g=230,X=292,de=6,ce=8,pe=Math.max(ce,Math.min(window.innerWidth-g-ce,v.right-g)),Ye=v.bottom+de+X<=window.innerHeight-ce?v.bottom+de:Math.max(ce,v.top-X-de);fe({top:Ye,left:pe}),we(u)}function Re(u){fe(null),we(p=>p===u?null:u)}function ae(u){u.preventDefault(),G(1,$,N)}function nt(){if(q(""),t.search){n.replace("/subscription");return}G(1,"",N)}function ue(u){if(!u)return s("subscription.noPlan");const p=c.find(v=>Number(v.id)===Number(u));return p?`#${p.id} - ${p.name}`:`#${u}`}function st(u){R(u),F({plan_id:u.plan_id?String(u.plan_id):"",transfer_enable:String(Mt(u.transfer_enable)),u:String(Mt(u.u)),d:String(Mt(u.d)),device_limit:u.device_limit===null?"":String(u.device_limit),speed_limit:u.speed_limit===null?"":String(u.speed_limit),expired_at:Yl(u.expired_at),status:u.status,auto_renewal:String(u.auto_renewal||0),name_sni:u.name_sni??"",network_settings:u.network_settings??"",remarks:u.remarks??""})}async function et(u){var p,v;if(u.preventDefault(),!!_){E(_.id);try{await To({id:_.id,plan_id:I.plan_id===""?null:Number(I.plan_id),transfer_enable:In(I.transfer_enable),u:In(I.u),d:In(I.d),device_limit:I.device_limit===""?null:Number(I.device_limit),speed_limit:I.speed_limit===""?null:Number(I.speed_limit),expired_at:Jl(I.expired_at),status:I.status,auto_renewal:Number(I.auto_renewal),name_sni:I.name_sni||null,network_settings:I.network_settings||null,remarks:I.remarks}),R(null),(p=window.showToast)==null||p.call(window,s("subscription.updateSuccess"),"success"),await G(S,$,N)}catch(g){(v=window.showToast)==null||v.call(window,g instanceof Error?g.message:s("subscription.saveFailed"),"error")}finally{E(null)}}}function it(u){var p;(p=window.showConfirm)==null||p.call(window,{message:s("subscription.resetConfirm",{id:u.id}),onConfirm:async()=>{var v,g;E(u.id);try{await Po(u.id),(v=window.showToast)==null||v.call(window,s("subscription.resetSuccess"),"success"),await G(S,$,N)}catch(X){(g=window.showToast)==null||g.call(window,X instanceof Error?X.message:s("subscription.resetFailed"),"error")}finally{E(null)}}})}function P(u){var p,v;if(!u.user_email){(p=window.showToast)==null||p.call(window,s("subscription.renewMissingEmail"),"error");return}if(!u.plan_id){(v=window.showToast)==null||v.call(window,s("subscription.renewMissingPlan"),"error");return}ye(u),Fe({period:"month_price",total_amount:""})}async function re(u){var p,v;if(u.preventDefault(),!(!(se!=null&&se.user_email)||!se.plan_id)){Me(!0);try{await ss({email:se.user_email,plan_id:se.plan_id,period:Ie.period,total_amount:Math.round((Number(Ie.total_amount)||0)*100),subscription_id:se.id}),(p=window.showToast)==null||p.call(window,s("subscription.renewSuccess"),"success"),ye(null)}catch(g){(v=window.showToast)==null||v.call(window,g instanceof Error?g.message:s("subscription.renewFailed"),"error")}finally{Me(!1)}}}async function oe(u){var v;if(!u)return;const p=await Ct(u);(v=window.showToast)==null||v.call(window,s(p?"subscription.copySuccess":"common.copyFailed"),p?"success":"error")}function te(u,p){i(v=>v.map(g=>g.id===u?{...g,subscribe_url:p}:g)),Z(v=>v&&v.id===u?{...v,subscribe_url:p}:v)}async function ve(u){if(u.subscribe_url)return u.subscribe_url;const v=(await zo(u.id)).data||null;return v&&te(u.id,v),v}async function me(u){var p;if(!u.subscribe_url){Y(u.id);try{await ve(u)}catch(v){(p=window.showToast)==null||p.call(window,v instanceof Error?v.message:s("common.copyFailed"),"error")}finally{Y(null)}}}async function Ee(u){var p,v;Y(u.id);try{const g=await ve(u);if(!g){(p=window.showToast)==null||p.call(window,s("common.copyFailed"),"error");return}await oe(g)}catch(g){(v=window.showToast)==null||v.call(window,g instanceof Error?g.message:s("common.copyFailed"),"error")}finally{Y(null)}}async function Se(u){var p,v;Y(u.id);try{const g=await ve(u);if(!g){(p=window.showToast)==null||p.call(window,s("common.copyFailed"),"error");return}j({url:g,subscriptionId:u.id})}catch(g){(v=window.showToast)==null||v.call(window,g instanceof Error?g.message:s("common.copyFailed"),"error")}finally{Y(null)}}function Ke(u){Z(u),k([]),z(0),w(1),be(u,1),me(u)}function at(u=U){return L?be(L,u):Promise.resolve()}function Be(u){var p;(p=window.showConfirm)==null||p.call(window,{message:s("subscription.unbindConfirm"),onConfirm:async()=>{var v,g;E(u.id);try{await yi(u.id),(v=window.showToast)==null||v.call(window,s("subscription.unbindSuccess"),"success"),await Promise.all([at(),G(S,$,N)])}catch(X){(g=window.showToast)==null||g.call(window,X instanceof Error?X.message:s("subscription.unbindFailed"),"error")}finally{E(null)}}})}function Pt(u){var p;(p=window.showConfirm)==null||p.call(window,{message:s("subscription.banConfirm"),onConfirm:async()=>{var v,g;E(u.id);try{await vi(u.id),(v=window.showToast)==null||v.call(window,s("subscription.banSuccess"),"success"),await Promise.all([at(),G(S,$,N)])}catch(X){(g=window.showToast)==null||g.call(window,X instanceof Error?X.message:s("subscription.banFailed"),"error")}finally{E(null)}}})}function tt(u){const p=u.device_limit&&u.device_limit>0?String(u.device_limit):s("subscription.unlimited");return e.jsxs("div",{className:"subscription-slot-cell",children:[e.jsxs("div",{className:"subscription-slot-count",children:[e.jsx("span",{children:u.device_count}),e.jsx("span",{children:"/"}),e.jsx("span",{children:p})]}),u.device_limit&&u.device_limit>0?e.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Math.min(100,Math.round(u.device_count/u.device_limit*100))}%`}})}):e.jsx("small",{children:s("subscription.noDeviceLimit")}),e.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ke(u),children:[e.jsx(qn,{size:14}),e.jsx("span",{children:s("subscription.manageUuids")})]})]})}function Lt(u){return e.jsxs("div",{className:"subscription-traffic",children:[e.jsxs("strong",{children:[Mt(u.total_used)," / ",Mt(u.transfer_enable)," GB"]}),e.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:e.jsx("span",{style:{width:`${Vl(u)}%`}})}),e.jsx("small",{children:s("subscription.uploadDownload",{upload:Mt(u.u),download:Mt(u.d)})})]})}function Ut(u){return e.jsxs("div",{className:"subscription-copy-item",children:[e.jsx(Jt,{value:u.uuid,onCopy:()=>oe(u.uuid),copyClassName:"subscription-link"}),e.jsx("small",{children:s("subscription.primaryUuid")})]})}function It(u){return e.jsxs("div",{className:"subscription-link-stack",children:[Ut(u),u.subscribe_url?e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:u.subscribe_url,onClick:()=>void Ee(u),disabled:ee===u.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:u.subscribe_url})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]}):e.jsxs("div",{className:"subscription-copy-item",children:[e.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Ee(u),disabled:ee===u.id,children:[e.jsx(ft,{size:14}),e.jsx("span",{children:ee===u.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")})]}),e.jsx("small",{children:s("subscription.colSubscribeUrl")})]})]})}function Ft(u){return e.jsxs("section",{className:"subscription-identity-summary",children:[e.jsxs("div",{className:"subscription-identity-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:s("subscription.identityTitle")}),e.jsx("small",{children:s("subscription.identityHelp")})]}),e.jsxs("button",{className:"mini-button",type:"button",disabled:ee===u.id,onClick:()=>void Se(u),children:[e.jsx(Gn,{size:14}),ee===u.id?s("subscription.subscribeUrlLoading"):s("subscription.getQr")]})]}),It(u)]})}function $t(u,p=!1,v=""){const g=X=>{xe(),X()};return e.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${p?"subscription-action-menu-fixed":""} ${v}`.trim(),style:p&&Ce?{top:Ce.top,left:Ce.left}:void 0,onMouseDown:X=>X.stopPropagation(),children:[e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>g(()=>st(u)),children:[e.jsx(Ge,{size:14}),s("subscription.edit")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>g(()=>P(u)),children:[e.jsx(ci,{size:14}),s("subscription.renew")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>g(()=>Ke(u)),children:[e.jsx(qn,{size:14}),s("subscription.manageUuids")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ee===u.id,onClick:()=>g(()=>void Ee(u)),children:[e.jsx(ft,{size:14}),ee===u.id?s("subscription.subscribeUrlLoading"):s("subscription.copySubscribeUrl")]}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:ee===u.id,onClick:()=>g(()=>void Se(u)),children:[e.jsx(Gn,{size:14}),s("subscription.getQr")]}),e.jsx("div",{className:"menu-divider"}),e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:y===u.id,onClick:()=>g(()=>it(u)),children:[e.jsx(es,{size:14}),s("subscription.resetSecret")]})]})}function Et(u,p="desktop"){return p==="mobile"?e.jsx("div",{className:"subscription-mobile-card-actions",children:e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${ke===u.id&&!Ce?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Re(u.id),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),ke===u.id&&!Ce?e.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:xe,children:e.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:v=>v.stopPropagation(),children:[e.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[e.jsxs("div",{children:[e.jsx("strong",{children:u.user_email??s("subscription.userId",{id:u.user_id})}),e.jsxs("small",{children:["#",u.id]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:xe,children:e.jsx(Ne,{size:16})})]}),$t(u,!1,"subscription-mobile-action-menu")]})}):null]})}):e.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${ke===u.id?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:v=>ze(u.id,v.currentTarget),children:[s("subscription.action")," ",e.jsx(yt,{size:14})]}),ke===u.id&&Ce?ni.createPortal($t(u,!0),document.body):null]})}const wt=Math.ceil(f/Rs),ut=Math.ceil(O/Hs),At=wt>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||D,onClick:()=>void G(S-1,$,N),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:S,total:wt})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:S>=wt||D,onClick:()=>void G(S+1,$,N),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null;return e.jsxs(We,{title:s("subscription.title"),subtitle:s("subscription.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.heading")}),e.jsx("p",{children:s("subscription.total",{count:f})})]}),e.jsxs("button",{className:"ghost-button",type:"button",disabled:D,onClick:()=>void G(S,$,N),children:[e.jsx(Oe,{size:16}),s(D?"common.refreshing":"common.refresh")]})]}),e.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ae,children:[e.jsx("select",{className:"config-input filter-select",value:N,onChange:u=>m(u.target.value),children:Wl.map(u=>e.jsx("option",{value:u,children:Ql(u,s)},u))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(jn,{size:16}),e.jsx("input",{className:"config-input",value:$,onChange:u=>q(u.target.value),placeholder:s("subscription.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(Qt,{size:16}),s("common.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:nt,children:s("common.clearFilter")})]}),M?e.jsx("div",{className:"form-error",children:M}):null,D&&r.length===0?e.jsx($e,{label:s("subscription.loading")}):null,e.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsxs("th",{children:[s("subscription.colUser")," / ",s("subscription.colPlan")]}),e.jsx("th",{children:s("subscription.colStatus")}),e.jsx("th",{children:s("subscription.colTraffic")}),e.jsx("th",{children:s("subscription.colDevices")}),e.jsx("th",{children:s("subscription.colExpires")}),e.jsx("th",{children:s("subscription.colUpdated")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[r.map(u=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsxs("div",{className:"subscription-package",children:[e.jsxs("span",{className:"subscription-package-id",children:["#",u.id]}),e.jsxs("div",{className:"subscription-package-main",children:[e.jsx("span",{className:"subscription-plan-name",children:u.plan_name??"-"}),u.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ne(u.user_email),title:s("subscription.viewUser"),children:u.user_email}):e.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),e.jsxs("small",{children:[s("subscription.userId",{id:u.user_id}),u.plan_id?` - ${s("subscription.planId",{id:u.plan_id})}`:""]})]})]})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status subscription-status-${u.status}`,children:Us(u.status,s)})}),e.jsx("td",{children:Lt(u)}),e.jsx("td",{children:tt(u)}),e.jsx("td",{children:kt(u.expired_at,s("subscription.never"))}),e.jsx("td",{children:kt(u.updated_at,s("subscription.never"))}),e.jsx("td",{children:Et(u)})]},u.id)),!D&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("subscription.empty")})})}):null]})]})})}),e.jsxs("div",{className:"subscription-mobile-list",children:[r.map(u=>e.jsxs("article",{className:"subscription-card",children:[e.jsxs("div",{className:"subscription-card-head",children:[e.jsxs("div",{className:"subscription-card-title",children:[e.jsxs("span",{className:"subscription-card-id",children:["#",u.id]}),e.jsx("strong",{className:"subscription-plan-name",children:u.plan_name??"-"}),u.user_email?e.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>ne(u.user_email),title:s("subscription.viewUser"),children:u.user_email}):e.jsx("small",{children:s("subscription.unknownUser")})]}),e.jsx("span",{className:`status-pill subscription-status subscription-status-${u.status}`,children:Us(u.status,s)})]}),e.jsxs("div",{className:"subscription-card-grid",children:[e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colTraffic")}),Lt(u)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colDevices")}),tt(u)]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colExpires")}),e.jsx("strong",{children:kt(u.expired_at,s("subscription.never"))})]}),e.jsxs("div",{className:"subscription-card-metric",children:[e.jsx("span",{className:"subscription-card-label",children:s("subscription.colUpdated")}),e.jsx("strong",{children:kt(u.updated_at,s("subscription.never"))})]})]}),Et(u,"mobile")]},u.id)),!D&&r.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.empty")}):null]}),At,L?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Z(null),children:e.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.slotsTitle",{id:L.id})}),e.jsx("p",{children:L.user_email??s("subscription.userId",{id:L.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>Z(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"subscription-slots-body",children:[Q?e.jsx("div",{className:"form-error",children:Q}):null,A&&o.length===0?e.jsx($e,{label:s("subscription.slotsLoading")}):null,Ft(L),e.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:e.jsxs("table",{className:"admin-table subscription-slot-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("subscription.slotUuid")}),e.jsx("th",{children:s("subscription.slotStatus")}),e.jsx("th",{children:s("subscription.slotHwid")}),e.jsx("th",{children:s("subscription.slotClient")}),e.jsx("th",{children:s("subscription.slotIp")}),e.jsx("th",{children:s("subscription.slotFirstSeen")}),e.jsx("th",{children:s("subscription.slotLastSeen")}),e.jsx("th",{children:s("common.actions")})]})}),e.jsxs("tbody",{children:[o.map(u=>e.jsxs("tr",{children:[e.jsx("td",{children:e.jsx(Jt,{value:u.uuid,onCopy:()=>oe(u.uuid),copyClassName:"subscription-link"})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill subscription-status ${Bs(u.status)}`,children:qs(u.status,s)})}),e.jsx("td",{children:u.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:u.hwid,onClick:()=>oe(u.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:u.hwid})]}):"-"}),e.jsx("td",{children:e.jsx("small",{title:u.user_agent??"",children:u.user_agent??"-"})}),e.jsxs("td",{children:[e.jsx("strong",{className:"mono",children:u.last_ip??"-"}),e.jsx("small",{children:u.first_ip?s("subscription.firstIp",{ip:u.first_ip}):"-"})]}),e.jsx("td",{children:kt(u.first_seen_at,"-")}),e.jsx("td",{children:kt(u.last_seen_at,"-")}),e.jsx("td",{children:Gs(u)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===u.id,onClick:()=>Be(u),children:[e.jsx(Kn,{size:14}),s("subscription.unbind")]}),u.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===u.id,onClick:()=>Pt(u),children:[e.jsx(Dt,{size:14}),s("subscription.ban")]}):null]}):e.jsx("span",{children:"-"})})]},u.id)),!A&&o.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")})})}):null]})]})}),e.jsxs("div",{className:"subscription-slot-mobile-list",children:[o.map(u=>e.jsxs("article",{className:"subscription-slot-card",children:[e.jsxs("div",{className:"subscription-slot-card-head",children:[e.jsx("strong",{children:s("subscription.slotUuid")}),e.jsx("span",{className:`status-pill subscription-status ${Bs(u.status)}`,children:qs(u.status,s)})]}),e.jsx("div",{className:"subscription-copy-item",children:e.jsx(Jt,{value:u.uuid,onCopy:()=>oe(u.uuid),copyClassName:"subscription-link"})}),e.jsxs("div",{className:"subscription-slot-card-grid",children:[e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotHwid")}),u.hwid?e.jsxs("button",{className:"copy-value subscription-link",type:"button",title:u.hwid,onClick:()=>oe(u.hwid),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:u.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotIp")}),e.jsx("span",{className:"mono",children:u.last_ip??"-"}),e.jsx("small",{children:u.first_ip?s("subscription.firstIp",{ip:u.first_ip}):"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotClient")}),e.jsx("small",{title:u.user_agent??"",children:u.user_agent??"-"})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotFirstSeen")}),e.jsx("span",{children:kt(u.first_seen_at,"-")})]}),e.jsxs("div",{className:"subscription-slot-card-row",children:[e.jsx("span",{children:s("subscription.slotLastSeen")}),e.jsx("span",{children:kt(u.last_seen_at,"-")})]})]}),Gs(u)?e.jsxs("div",{className:"row-actions subscription-slot-actions",children:[e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===u.id,onClick:()=>Be(u),children:[e.jsx(Kn,{size:14}),s("subscription.unbind")]}),u.status==="bound"?e.jsxs("button",{className:"mini-button danger",type:"button",disabled:y===u.id,onClick:()=>Pt(u),children:[e.jsx(Dt,{size:14}),s("subscription.ban")]}):null]}):null]},u.id)),!A&&o.length===0?e.jsx("div",{className:"empty-state",children:s("subscription.slotsEmpty")}):null]}),ut>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:U<=1||A,onClick:()=>void at(U-1),children:[e.jsx(vt,{size:14}),s("common.prev")]}),e.jsx("span",{className:"page-info",children:s("subscription.page",{page:U,total:ut})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:U>=ut||A,onClick:()=>void at(U+1),children:[s("common.next"),e.jsx(jt,{size:14})]})]}):null]})]})}):null,qe?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>j(null),children:e.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.qrTitle")}),e.jsx("p",{children:s("subscription.qrSubtitle",{id:qe.subscriptionId})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>j(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("div",{className:"subscription-qr-body",children:[e.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(qe.url)}`,alt:s("subscription.getQr"),width:200,height:200}),e.jsx("div",{className:"subscription-qr-url",children:qe.url})]})]})}):null,_?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.editTitle",{id:_.id})}),e.jsx("p",{children:_.user_email??s("subscription.userId",{id:_.user_id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>R(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:et,children:[e.jsxs("div",{className:"subscription-modal-grid",children:[e.jsxs("label",{children:[s("subscription.plan"),e.jsxs("select",{className:"config-input",value:I.plan_id,onChange:u=>F(p=>({...p,plan_id:u.target.value})),children:[e.jsx("option",{value:"",children:s("subscription.noPlan")}),c.map(u=>e.jsxs("option",{value:u.id,children:["#",u.id," - ",u.name]},u.id))]})]}),e.jsxs("label",{children:[s("subscription.trafficLimitGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:I.transfer_enable,onChange:u=>F(p=>({...p,transfer_enable:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.uploadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:I.u,onChange:u=>F(p=>({...p,u:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.downloadUsedGb"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:I.d,onChange:u=>F(p=>({...p,d:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.deviceLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:I.device_limit,onChange:u=>F(p=>({...p,device_limit:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.speedLimit"),e.jsx("input",{className:"config-input",type:"number",min:"0",value:I.speed_limit,onChange:u=>F(p=>({...p,speed_limit:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.expires"),e.jsx("input",{className:"config-input",type:"date",value:I.expired_at,onChange:u=>F(p=>({...p,expired_at:u.target.value}))})]}),e.jsxs("label",{children:[s("subscription.status"),e.jsxs("select",{className:"config-input",value:I.status,onChange:u=>F(p=>({...p,status:u.target.value})),children:[e.jsx("option",{value:"active",children:s("subscription.statusActive")}),e.jsx("option",{value:"disabled",children:s("subscription.statusDisabled")})]})]}),e.jsxs("label",{children:[s("subscription.autoRenewal"),e.jsxs("select",{className:"config-input",value:I.auto_renewal,onChange:u=>F(p=>({...p,auto_renewal:u.target.value})),children:[e.jsx("option",{value:"0",children:s("subscription.autoRenewalOff")}),e.jsx("option",{value:"1",children:s("subscription.autoRenewalOn")})]})]}),e.jsxs("label",{children:[s("subscription.sniName"),e.jsx("input",{className:"config-input",value:I.name_sni,onChange:u=>F(p=>({...p,name_sni:u.target.value})),placeholder:s("subscription.sniNamePlaceholder")})]}),e.jsxs("label",{children:[s("subscription.sniValue"),e.jsx("input",{className:"config-input",value:I.network_settings,onChange:u=>F(p=>({...p,network_settings:u.target.value})),placeholder:s("subscription.sniValuePlaceholder")})]})]}),e.jsxs("label",{children:[s("subscription.remarks"),e.jsx("textarea",{className:"config-input",rows:3,value:I.remarks,onChange:u=>F(p=>({...p,remarks:u.target.value}))})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:y===_.id,children:y===_.id?s("common.processing"):s("common.save")})]})]})]})}):null,se?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ye(null),children:e.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:u=>u.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("subscription.renewTitle")}),e.jsx("p",{children:s("subscription.renewSubtitle",{id:se.id})})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":s("common.closeMenu"),onClick:()=>ye(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:re,children:[e.jsxs("div",{className:"subscription-renew-summary",children:[e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("common.email")}),e.jsx("strong",{title:se.user_email??"",children:se.user_email??"-"})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewSubscriptionId")}),e.jsxs("strong",{children:["#",se.id]})]}),e.jsxs("div",{className:"subscription-renew-row",children:[e.jsx("span",{children:s("subscription.renewPlan")}),e.jsx("strong",{title:ue(se.plan_id),children:ue(se.plan_id)})]})]}),e.jsxs("label",{children:[s("subscription.renewPeriod"),e.jsx("select",{className:"config-input",value:Ie.period,onChange:u=>Fe(p=>({...p,period:u.target.value})),children:Kl.map(u=>e.jsx("option",{value:u,children:Xl(u,s)},u))})]}),e.jsxs("label",{children:[s("subscription.renewTotalAmount"),e.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Ie.total_amount,onChange:u=>Fe(p=>({...p,total_amount:u.target.value})),placeholder:"0"})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ye(null),children:s("common.cancel")}),e.jsx("button",{className:"primary-button",type:"submit",disabled:De,children:s(De?"common.processing":"common.save")})]})]})]})}):null]})}const Ws=15,tc=["email","user_id","node","hwid","user_agent","last_ip"];function Bt(n){return n?new Date(n*1e3).toLocaleString():"-"}function _t(n){const t=Math.max(0,Number(n??0));if(t===0)return"0 B";const s=["B","KB","MB","GB","TB"];let r=t,i=0;for(;r>=1024&&i<s.length-1;)r/=1024,i+=1;return`${r>=10||i===0?r.toFixed(0):r.toFixed(2)} ${s[i]}`}function nc(n){return["user_id","subscription_id","node","node_type","node_id"].includes(n)?"=":"like"}function sc(n,t){switch(n){case"email":return t("device.filterEmail");case"user_id":return t("device.filterUserId");case"hwid":return t("device.filterHwid");case"node":return t("device.filterNode");case"node_id":return t("device.filterNodeId");case"node_type":return t("device.filterNodeType");case"user_agent":return t("device.filterUserAgent");case"last_ip":return t("device.filterIp");default:return""}}function Ks(n,t){switch(n){case"bound":return t("device.statusBound");case"banned":return t("device.statusBanned");default:return t("device.statusPending")}}function cn(n){return(n.online_ips??[]).join(", ")||"-"}function dn(n){return(n.online_nodes??[]).map(t=>`${t.node_type}#${t.node_id}`).join(", ")||"-"}function ic(n){return String(n.hwid??"").trim()!==""}function ac(n){var c,l,f;const t=new URLSearchParams(n),s=(c=t.get("node_type"))==null?void 0:c.trim(),r=(l=t.get("node_id"))==null?void 0:l.trim();if(s&&r)return{field:"node",value:`${s}:${r}`};if(r)return{field:"node",value:r};const i=["node","hwid","user_agent","last_ip","email","user_id"];for(const b of i){const S=(f=t.get(b))==null?void 0:f.trim();if(S)return{field:b,value:S}}return null}function oc(){const n=Ue(),t=Xt(),{t:s}=he(),[r,i]=a.useState([]),[c,l]=a.useState(0),[f,b]=a.useState(1),[S,x]=a.useState("email"),[N,m]=a.useState(""),[$,q]=a.useState(!0),[D,C]=a.useState(""),[M,T]=a.useState(null),[_,R]=a.useState(null),[I,F]=a.useState(null),y=a.useCallback(async(h=1,Q="",H="email")=>{q(!0),C("");try{const ee=Q.trim()?[{key:H,condition:nc(H),value:Q.trim()}]:void 0,Y=await fi(h,Ws,ee);i(Y.data),l(Y.total),b(h)}catch(ee){C(ee instanceof Error?ee.message:s("device.loadFailed"))}finally{q(!1)}},[s]);a.useEffect(()=>{if(!He()){n.replace("/login");return}const h=ac(t.search);if(h){x(h.field),m(h.value),y(1,h.value,h.field);return}y()},[y,n,t.search]),a.useEffect(()=>{if(I===null)return;function h(H){const ee=H.target;ee!=null&&ee.closest(".device-action-wrap")||F(null)}function Q(H){H.key==="Escape"&&F(null)}return document.addEventListener("pointerdown",h),document.addEventListener("keydown",Q),()=>{document.removeEventListener("pointerdown",h),document.removeEventListener("keydown",Q)}},[I]);function E(h){h.preventDefault(),y(1,N,S)}function L(){if(m(""),t.search){n.replace("/device");return}y(1,"",S)}async function Z(h){var H;if(!h.hwid)return;const Q=await Ct(h.hwid);(H=window.showToast)==null||H.call(window,s(Q?"device.copySuccess":"common.copyFailed"),Q?"success":"error")}async function o(h){var H;const Q=await Ct(h.uuid);(H=window.showToast)==null||H.call(window,s(Q?"device.copyUuidSuccess":"common.copyFailed"),Q?"success":"error")}function k(h){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.unbindConfirm"),onConfirm:async()=>{var H,ee;T(h.id);try{await yi(h.id),(H=window.showToast)==null||H.call(window,s("device.unbindSuccess"),"success"),await y(f,N,S)}catch(Y){(ee=window.showToast)==null||ee.call(window,Y instanceof Error?Y.message:s("device.unbindFailed"),"error")}finally{T(null)}}})}function O(h){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.banConfirm"),onConfirm:async()=>{var H,ee;T(h.id);try{await vi(h.id),(H=window.showToast)==null||H.call(window,s("device.banSuccess"),"success"),await y(f,N,S)}catch(Y){(ee=window.showToast)==null||ee.call(window,Y instanceof Error?Y.message:s("device.banFailed"),"error")}finally{T(null)}}})}function z(h){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:s("device.resetConfirm",{user:h.user_email??`#${h.user_id}`}),onConfirm:async()=>{var H,ee;R(h.user_id);try{await $o(h.user_id),(H=window.showToast)==null||H.call(window,s("device.resetSuccess"),"success"),await y(f,N,S)}catch(Y){(ee=window.showToast)==null||ee.call(window,Y instanceof Error?Y.message:s("device.resetFailed"),"error")}finally{R(null)}}})}function U(h){F(null),h()}function w(h,Q){const H=Q==="mobile"?-h.id:h.id,ee=I===H,Y=ic(h);return e.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${ee?"active":""}`,children:[e.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>F(ee?null:H),children:[s("device.action")," ",e.jsx(yt,{size:14})]}),ee?e.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[Y?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:M===h.id,onClick:()=>U(()=>k(h)),children:[e.jsx(Kn,{size:14}),s("device.unbind")]}),h.status==="bound"?e.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:M===h.id,onClick:()=>U(()=>O(h)),children:[e.jsx(Dt,{size:14}),s("device.ban")]}):null]}):null,e.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:_===h.user_id,onClick:()=>U(()=>z(h)),children:[e.jsx(fa,{size:14}),s("device.resetUser")]})]}):null]})}const A=Math.ceil(c/Ws);return e.jsxs(We,{title:s("device.title"),subtitle:s("device.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:s("device.heading")}),e.jsx("p",{children:s("device.total",{count:c})})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void y(f,N,S),children:[e.jsx(Oe,{size:16}),s($?"common.refreshing":"common.refresh")]})})]}),e.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:E,children:[e.jsx("select",{className:"config-input filter-select",value:S,onChange:h=>x(h.target.value),children:tc.map(h=>e.jsx("option",{value:h,children:sc(h,s)},h))}),e.jsxs("label",{className:"search-input-wrap",children:[e.jsx(jn,{size:16}),e.jsx("input",{className:"config-input",value:N,onChange:h=>m(h.target.value),placeholder:s(S==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),e.jsxs("button",{className:"ghost-button",type:"submit",children:[e.jsx(Qt,{size:16}),s("device.filter")]}),e.jsx("button",{className:"ghost-button",type:"button",onClick:L,children:s("device.clear")})]}),D?e.jsx("div",{className:"form-error",children:D}):null,$&&r.length===0?e.jsx($e,{label:s("device.loading")}):null,e.jsxs("div",{className:"mobile-device-list",children:[r.map(h=>e.jsxs("article",{className:"mobile-device-card",children:[e.jsxs("div",{className:"mobile-device-card-head",children:[e.jsxs("div",{className:"mobile-device-user",children:[e.jsx("strong",{children:h.user_email??"-"}),e.jsxs("small",{children:["ID: ",h.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[h.plan_name??"-",h.user_plan_id?` #${h.user_plan_id}`:""]})]}),e.jsxs("div",{className:"mobile-device-status",children:[e.jsx("span",{className:"inline-badge",children:Ks(h.status,s)}),e.jsxs("span",{className:`online-badge ${h.is_online?"online":"offline"}`,children:[h.is_online?e.jsx(xs,{size:14}):e.jsx(hs,{size:14}),h.is_online?s("device.online"):s("device.offline")]})]})]}),e.jsxs("div",{className:"mobile-device-grid",children:[e.jsxs("div",{className:"mobile-device-info",children:[e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.uuid")}),e.jsx(Jt,{value:h.uuid,onCopy:()=>o(h),copyClassName:"mobile-device-copy"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.hwid")}),h.hwid?e.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:h.hwid,onClick:()=>Z(h),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:h.hwid})]}):e.jsx("span",{children:"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.client")}),e.jsx("small",{title:h.user_agent??"",children:h.user_agent??"-"})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.ip")}),e.jsxs("span",{className:"mono",title:`${h.last_ip??"-"} / ${h.first_ip??"-"}`,children:[h.last_ip??"-",h.first_ip?` (${h.first_ip})`:""]})]})]}),e.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[e.jsx("span",{children:s("device.traffic")}),e.jsxs("small",{title:`${s("device.upload")}: ${_t(h.device_upload)} / ${s("device.download")}: ${_t(h.device_download)}`,children:[_t(h.device_used_traffic)," / ",s("device.upload"),": ",_t(h.device_upload)," / ",s("device.download"),": ",_t(h.device_download)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.connection")}),e.jsxs("small",{title:`${cn(h)} / ${dn(h)}`,children:[s("device.onlineIps"),": ",cn(h)," / ",s("device.onlineNodes"),": ",dn(h)]})]}),e.jsxs("div",{className:"mobile-device-row",children:[e.jsx("span",{children:s("device.time")}),e.jsxs("small",{children:[s("device.firstSeen"),": ",Bt(h.first_seen_at)," / ",s("device.lastSeen"),": ",Bt(h.last_seen_at)]})]})]}),e.jsx("div",{className:"mobile-device-actions",children:w(h,"mobile")})]},h.id)),!$&&r.length===0?e.jsx("div",{className:"empty-state",children:s("device.empty")}):null]}),e.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table device-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:s("device.user")}),e.jsx("th",{children:s("device.status")}),e.jsx("th",{children:s("device.traffic")}),e.jsx("th",{children:s("device.connection")}),e.jsx("th",{children:s("device.deviceInfo")}),e.jsx("th",{children:s("device.time")}),e.jsx("th",{children:s("device.action")})]})}),e.jsxs("tbody",{children:[r.map(h=>e.jsxs("tr",{children:[e.jsxs("td",{className:"device-user-cell",children:[e.jsx("strong",{children:h.user_email??"-"}),e.jsxs("small",{children:["ID: ",h.user_id]}),e.jsxs("small",{className:"device-plan-line",children:[h.plan_name??"-",h.user_plan_id?` #${h.user_plan_id}`:""]})]}),e.jsx("td",{children:e.jsx("span",{className:"inline-badge",children:Ks(h.status,s)})}),e.jsx("td",{className:"device-traffic-cell",children:e.jsxs("div",{className:"device-traffic-stack",children:[e.jsx("strong",{children:_t(h.device_used_traffic)}),e.jsxs("small",{children:[s("device.upload"),": ",_t(h.device_upload)]}),e.jsxs("small",{children:[s("device.download"),": ",_t(h.device_download)]})]})}),e.jsxs("td",{className:"device-connection",children:[e.jsxs("span",{className:`online-badge ${h.is_online?"online":"offline"}`,children:[h.is_online?e.jsx(xs,{size:14}):e.jsx(hs,{size:14}),h.is_online?s("device.online"):s("device.offline")]}),e.jsxs("small",{title:cn(h),children:[s("device.onlineIps"),": ",cn(h)]}),e.jsxs("small",{title:dn(h),children:[s("device.onlineNodes"),": ",dn(h)]}),e.jsxs("small",{children:[s("device.lastOnline"),": ",Bt(h.online_last_seen_at??null)]})]}),e.jsx("td",{className:"device-info-cell",children:e.jsxs("div",{className:"device-info-stack",children:[e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.uuid")}),e.jsx(Jt,{value:h.uuid,onCopy:()=>o(h),copyClassName:"device-info-copy"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.hwid")}),h.hwid?e.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:h.hwid,onClick:()=>Z(h),children:[e.jsx(ft,{size:14}),e.jsx("span",{className:"mono",children:h.hwid})]}):e.jsx("span",{className:"device-info-value",children:"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.client")}),e.jsx("small",{className:"device-info-value",title:h.user_agent??"",children:h.user_agent??"-"})]}),e.jsxs("div",{className:"device-info-line",children:[e.jsx("span",{className:"device-info-label",children:s("device.ip")}),e.jsxs("div",{className:"device-info-value",children:[e.jsx("strong",{className:"mono",children:h.last_ip??"-"}),e.jsx("small",{children:h.first_ip?`${s("device.firstIp")}: ${h.first_ip}`:"-"})]})]})]})}),e.jsx("td",{className:"device-time-cell",children:e.jsxs("div",{className:"device-time-stack",children:[e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.firstSeen")}),e.jsx("span",{children:Bt(h.first_seen_at)})]}),e.jsxs("div",{className:"device-time-line",children:[e.jsx("small",{children:s("device.lastSeen")}),e.jsx("span",{children:Bt(h.last_seen_at)})]})]})}),e.jsx("td",{className:"device-action-cell",children:w(h,"desktop")})]},h.id)),!$&&r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:7,children:e.jsx("div",{className:"empty-state",children:s("device.empty")})})}):null]})]})}),A>1?e.jsxs("div",{className:"pagination",children:[e.jsxs("button",{className:"mini-button",type:"button",disabled:f<=1||$,onClick:()=>void y(f-1,N,S),children:[e.jsx(vt,{size:14}),s("device.previous")]}),e.jsx("span",{className:"page-info",children:s("device.page",{page:f,total:A})}),e.jsxs("button",{className:"mini-button",type:"button",disabled:f>=A||$,onClick:()=>void y(f+1,N,S),children:[s("device.next"),e.jsx(jt,{size:14})]})]}):null]})]})}const rc={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function rs(n){if(Array.isArray(n))return n.map(t=>Number(t)).filter(t=>Number.isFinite(t)&&t>0);if(typeof n=="string")try{return rs(JSON.parse(n))}catch{return n.split(",").map(t=>Number(t.trim())).filter(t=>Number.isFinite(t)&&t>0)}return[]}function Ys(n){return n?{id:n.id,email:n.email??"",domain:n.domain??"",title:n.title??"",description:n.description??"",logo:n.logo??"",background_url:n.background_url??"",custom_html:n.custom_html??"",plan_ids:rs(n.plan_id)}:{...rc}}function Fn(n){const t=n.trim();if(!t)return"";try{return new URL(t.includes("://")?t:`https://${t}`).host.toLowerCase()}catch{return t.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function lc(n){const t=Number(n);if(!t)return"-";const s=new Date(t*1e3);return Number.isNaN(s.getTime())?"-":s.toLocaleString()}function cc(n){return Number(n)===1}function Js(n,t,s){if(!n.length)return s("webcon.allPlans");const r=new Map(t.map(i=>[Number(i.id),i.name]));return n.map(i=>r.get(i)??`#${i}`).join(", ")}function St(n,t=!1){return e.jsxs("span",{className:"webcon-field-label",children:[n,t?e.jsx("small",{children:"*"}):null]})}function dc(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState([]),[l,f]=a.useState(null),[b,S]=a.useState(!0),[x,N]=a.useState(!1),[m,$]=a.useState(null),[q,D]=a.useState(""),C=a.useCallback(async()=>{S(!0),D("");try{const[y,E]=await Promise.all([Wo(),Tt()]);r(y),c(E)}catch(y){D(y instanceof Error?y.message:t("webcon.toastLoadFailed"))}finally{S(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}C()},[C,n]);const M=a.useMemo(()=>i.map(y=>({id:Number(y.id),name:y.name})),[i]);function T(y,E){f(L=>L&&{...L,[y]:E})}function _(y,E){f(L=>{if(!L)return L;const Z=E?Array.from(new Set([...L.plan_ids,y])):L.plan_ids.filter(o=>o!==y);return{...L,plan_ids:Z}})}async function R(y){var L,Z;if(y.preventDefault(),!l)return;const E=Fn(l.domain);N(!0),D("");try{await Ko({id:l.id,email:l.email.trim(),domain:E,title:l.title.trim(),description:l.description.trim()||null,logo:l.logo.trim()||null,background_url:l.background_url.trim()||null,custom_html:l.custom_html||null,plan_ids:l.plan_ids,plan_id:l.plan_ids}),f(null),(L=window.showToast)==null||L.call(window,t("webcon.toastSaveSuccess"),"success"),await C()}catch(o){const k=o instanceof Error?o.message:t("webcon.toastSaveFailed");D(k),(Z=window.showToast)==null||Z.call(window,k,"error")}finally{N(!1)}}async function I(y){var E,L;$(y.id);try{await Jo(y.id),(E=window.showToast)==null||E.call(window,t("webcon.toastToggleSuccess"),"success"),await C()}catch(Z){const o=Z instanceof Error?Z.message:t("webcon.toastToggleFailed");D(o),(L=window.showToast)==null||L.call(window,o,"error")}finally{$(null)}}function F(y){var E;(E=window.showConfirm)==null||E.call(window,{message:t("webcon.deleteConfirm"),onConfirm:async()=>{var L,Z;$(y.id),D("");try{await Yo(y.id),(L=window.showToast)==null||L.call(window,t("webcon.toastDeleteSuccess"),"success"),await C()}catch(o){const k=o instanceof Error?o.message:t("webcon.toastDeleteFailed");D(k),(Z=window.showToast)==null||Z.call(window,k,"error")}finally{$(null)}}})}return e.jsxs(We,{title:t("webcon.title"),subtitle:t("webcon.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("webcon.heading")}),e.jsx("p",{children:t("webcon.sitesCount",{count:s.length})})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void C(),children:[e.jsx(Oe,{size:16}),t(b?"common.refreshing":"common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(Ys()),children:[e.jsx(lt,{size:16}),t("webcon.add")]})]})]}),q?e.jsx("div",{className:"form-error",children:q}):null,b&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table webcon-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("webcon.colId")}),e.jsx("th",{children:t("webcon.colStatus")}),e.jsx("th",{children:t("webcon.colStaffOwner")}),e.jsx("th",{children:t("webcon.colDomain")}),e.jsx("th",{children:t("webcon.colLanding")}),e.jsx("th",{children:t("webcon.colPlans")}),e.jsx("th",{children:t("webcon.colCreated")}),e.jsx("th",{children:t("webcon.colActions")})]})}),e.jsxs("tbody",{children:[s.map(y=>{var L;const E=rs(y.plan_id);return e.jsxs("tr",{children:[e.jsxs("td",{children:["#",y.id]}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${cc(y.status)?"active":""}`,type:"button",disabled:m===y.id,onClick:()=>void I(y),"aria-label":t("webcon.toggleStatusLabel"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-owner",children:[e.jsx("strong",{children:y.email??"-"}),e.jsx("small",{children:Number(y.staff)===1?t("webcon.staffEnabled"):t("webcon.staffDisabled")})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-domain",children:[e.jsx("strong",{className:"mono",children:y.domain}),e.jsx("small",{children:t("webcon.adminPath",{path:`/${String(((L=window.settings)==null?void 0:L.secure_path)??"admin")}/webcon`})})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-title",children:[e.jsx("strong",{children:y.title||"-"}),e.jsx("small",{children:y.description||t("webcon.noDescription")}),e.jsxs("span",{className:"webcon-branding",children:[e.jsxs("span",{children:[e.jsx(ra,{size:13}),y.logo?t("webcon.logo"):t("webcon.noLogo")]}),e.jsxs("span",{children:[e.jsx(Vt,{size:13}),y.background_url?t("webcon.background"):t("webcon.noBackground")]})]})]})}),e.jsx("td",{children:e.jsxs("div",{className:"webcon-plan-list",children:[e.jsx("strong",{children:Js(E,M,t)}),e.jsx("small",{children:E.length?t("webcon.selectedCount",{count:E.length}):t("webcon.unrestricted")})]})}),e.jsx("td",{children:lc(y.created_at)}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions webcon-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>f(Ys(y)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",disabled:m===y.id,onClick:()=>F(y),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},y.id)}),!b&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("webcon.noWebcon")})})}):null]})]})})}),l?e.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>f(null),children:e.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:l.id?t("webcon.editTitle"):t("webcon.newTitle")}),e.jsx("p",{children:l.domain||t("webcon.modalSubtitle")})]}),e.jsx("button",{className:"icon-button",type:"button","aria-label":t("common.closeMenu"),onClick:()=>f(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"webcon-form",onSubmit:R,children:[e.jsxs("div",{className:"webcon-field-grid",children:[e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.staffOwnerEmail"),!0),e.jsx("input",{className:"config-input",required:!0,type:"email",value:l.email,onChange:y=>T("email",y.target.value),placeholder:t("webcon.staffEmailPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.domain"),!0),e.jsx("input",{className:"config-input",required:!0,value:l.domain,onChange:y=>T("domain",y.target.value),onBlur:y=>T("domain",Fn(y.target.value)),placeholder:t("webcon.domainPlaceholder")}),e.jsx("span",{className:"webcon-help",children:t("webcon.domainHelp")})]}),e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.landingTitle"),!0),e.jsx("input",{className:"config-input",required:!0,value:l.title,onChange:y=>T("title",y.target.value),placeholder:t("webcon.landingTitlePlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.description")),e.jsx("input",{className:"config-input",value:l.description,onChange:y=>T("description",y.target.value),placeholder:t("webcon.descriptionPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.logoUrl")),e.jsx("input",{className:"config-input",type:"url",value:l.logo,onChange:y=>T("logo",y.target.value),placeholder:t("webcon.logoPlaceholder")})]}),e.jsxs("label",{className:"webcon-field",children:[St(t("webcon.backgroundUrl")),e.jsx("input",{className:"config-input",type:"url",value:l.background_url,onChange:y=>T("background_url",y.target.value),placeholder:t("webcon.backgroundPlaceholder")})]}),e.jsxs("div",{className:"webcon-field full",children:[St(t("webcon.allowedPlans")),e.jsxs("div",{className:"webcon-plan-picker",children:[M.map(y=>e.jsxs("label",{className:"webcon-plan-option",children:[e.jsx("input",{type:"checkbox",checked:l.plan_ids.includes(y.id),onChange:E=>_(y.id,E.target.checked)}),e.jsx("span",{children:y.name})]},y.id)),M.length===0?e.jsx("span",{className:"webcon-help",children:t("webcon.noPlansLoaded")}):null]}),e.jsx("span",{className:"webcon-help",children:t("webcon.allowedPlansHelp")})]}),e.jsxs("label",{className:"webcon-field full",children:[St(t("webcon.customHtml")),e.jsx("textarea",{className:"config-input",rows:5,value:l.custom_html,onChange:y=>T("custom_html",y.target.value),placeholder:"<footer>...</footer>"})]})]}),e.jsxs("div",{className:"webcon-preview",children:[e.jsx("span",{className:"webcon-preview-logo",children:l.logo?e.jsx("img",{src:l.logo,alt:""}):e.jsx(ba,{size:18})}),e.jsxs("div",{children:[e.jsx("strong",{children:l.title||t("webcon.previewTitle")}),e.jsx("span",{children:Fn(l.domain)||t("webcon.domainPlaceholder")}),e.jsxs("span",{children:[e.jsx(ts,{size:12})," ",Js(l.plan_ids,M,t)]})]})]}),e.jsxs("div",{className:"button-row modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:x,children:[e.jsx(ct,{size:16}),t(x?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Zs(n){return new Date(n*1e3).toLocaleString("vi-VN")}function An(n){return{id:n==null?void 0:n.id,title:(n==null?void 0:n.title)??"",content:(n==null?void 0:n.content)??"",img_url:(n==null?void 0:n.img_url)??"",tags:n!=null&&n.tags?n.tags.join(", "):""}}function pc(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(null),[l,f]=a.useState(!0),[b,S]=a.useState(!1),[x,N]=a.useState(""),[m,$]=a.useState(""),q=a.useCallback(async()=>{f(!0),N("");try{r(await Mo())}catch(T){N(T instanceof Error?T.message:t("notice.loadFailed"))}finally{f(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);async function D(T){var _,R;if(T.preventDefault(),!!i){S(!0),N(""),$("");try{const I=i.tags?i.tags.split(",").map(F=>F.trim()).filter(Boolean):[];await Do({id:i.id,title:i.title,content:i.content,img_url:i.img_url||null,tags:I.length?I:null}),c(null),(_=window.showToast)==null||_.call(window,t("notice.saveSuccess"),"success"),await q()}catch(I){(R=window.showToast)==null||R.call(window,I instanceof Error?I.message:t("notice.saveFailed"),"error")}finally{S(!1)}}}async function C(T){var _;try{await Io(T),await q()}catch(R){(_=window.showToast)==null||_.call(window,R instanceof Error?R.message:t("notice.toggleFailed"),"error")}}async function M(T){var _;(_=window.showConfirm)==null||_.call(window,{message:t("notice.deleteConfirm"),onConfirm:async()=>{var R,I;try{await Lo(T),(R=window.showToast)==null||R.call(window,t("notice.deleteSuccess"),"success"),await q()}catch(F){(I=window.showToast)==null||I.call(window,F instanceof Error?F.message:t("notice.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("notice.title"),subtitle:t("notice.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("notice.heading")}),e.jsxs("p",{children:[s.length," ",t("notice.notices")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:l,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>c(An()),children:[e.jsx(lt,{size:16}),t("notice.addNotice")]})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,m?e.jsx("div",{className:"form-success",children:m}):null,l&&s.length===0?e.jsx($e,{label:t("notice.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("notice.titleField")}),e.jsx("th",{children:t("notice.show")}),e.jsx("th",{children:t("notice.tags")}),e.jsx("th",{children:t("notice.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(T=>{var _;return e.jsxs("tr",{children:[e.jsx("td",{children:T.id}),e.jsx("td",{children:e.jsx("strong",{children:T.title})}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void C(T.id),"aria-label":"Toggle Show",children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:e.jsx("div",{className:"match-tags",children:((_=T.tags)==null?void 0:_.map((R,I)=>e.jsx("span",{className:"tag",children:R},I)))??e.jsx("span",{className:"tag muted-tag",children:"—"})})}),e.jsx("td",{children:e.jsx("small",{children:Zs(T.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>c(An(T)),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void M(T.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},T.id)}),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:6,children:e.jsx("div",{className:"empty-state",children:t("notice.noNotices")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-notice-list",children:[s.map(T=>e.jsxs("div",{className:`notice-mobile-card ${T.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsx("div",{className:"header-left",children:e.jsxs("span",{className:"id-tag",children:["#",T.id]})}),e.jsx("button",{className:`admin-switch ${T.show?"active":""}`,type:"button",onClick:()=>void C(T.id),"aria-label":T.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:T.title}),e.jsx("div",{className:"notice-tags",children:T.tags&&T.tags.length>0?T.tags.map((_,R)=>e.jsx("span",{className:"tag-badge",children:_},R)):e.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),e.jsxs("p",{className:"created-time",children:[t("notice.created"),": ",Zs(T.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>c(An(T)),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void M(T.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},T.id)),!l&&s.length===0?e.jsx("div",{className:"empty-state",children:t("notice.noNotices")}):null]}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:i.id?t("notice.editNotice"):t("notice.newNotice")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:D,children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:i.title,onChange:T=>c({...i,title:T.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.content")}),e.jsx("textarea",{className:"config-input",rows:10,required:!0,value:i.content,onChange:T=>c({...i,content:T.target.value}),placeholder:t("notice.contentPlaceholder")})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("notice.imageUrl")}),e.jsx("input",{className:"config-input",value:i.img_url,onChange:T=>c({...i,img_url:T.target.value}),placeholder:"https://..."})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("notice.tags")}),e.jsx("input",{className:"config-input",value:i.tags,onChange:T=>c({...i,tags:T.target.value}),placeholder:"tag1, tag2"})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ct,{size:16}),t(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function On(n){return new Date(n*1e3).toLocaleString("vi-VN")}function uc(n){return n?n.replace(/^([^:\r\n]{1,120}):(?=\S)/gm,(t,s,r,i)=>i.slice(r+t.length,r+t.length+2)==="//"?t:`${s}: `):""}const Qs=(n,t)=>({0:{label:t("ticket.statusOpen"),cls:"enabled"},1:{label:t("ticket.statusClosed"),cls:""}})[n]||{label:`#${n}`,cls:""},Rn=(n,t)=>({0:t("ticket.levelLow"),1:t("ticket.levelMedium"),2:t("ticket.levelHigh"),3:t("ticket.levelWithdraw")})[n]||String(n);function mc(){var A;const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(null),[l,f]=a.useState(!1),[b,S]=a.useState(null),[x,N]=a.useState(""),[m,$]=a.useState(!0),[q,D]=a.useState(!1),[C,M]=a.useState(!1),[T,_]=a.useState(""),R=a.useRef(null),[I,F]=a.useState([]),[y,E]=a.useState(null),L=a.useCallback(async()=>{$(!0),_("");try{r(await Fo())}catch(h){_(h instanceof Error?h.message:"Load failed")}finally{$(!1)}},[]);a.useEffect(()=>{if(!He()){n.replace("/login");return}L(),Tt().then(h=>{h&&F(h)}).catch(()=>{})},[L,n]),a.useEffect(()=>{var h;(h=R.current)==null||h.scrollIntoView({behavior:"smooth"})},[i]);async function Z(h){var Q;S(h),N(""),c(null),E(null),f(!0);try{const H=await _n(h);if(c(H),H&&H.user_id)try{const ee=await Jn(H.user_id);ee&&ee.data&&E(ee.data)}catch(ee){console.error("Failed to load user info:",ee)}}catch{(Q=window.showToast)==null||Q.call(window,"Failed to load message thread","error")}finally{f(!1)}}async function o(h){var Q,H;if(h.preventDefault(),!(!b||!x.trim())){D(!0),_("");try{await Ao(b,x),N(""),(Q=window.showToast)==null||Q.call(window,"Reply sent!","success");try{const ee=await _n(b);c(ee)}catch{}await L()}catch(ee){(H=window.showToast)==null||H.call(window,ee instanceof Error?ee.message:"Reply failed","error")}finally{D(!1)}}}async function k(h){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:"Close this ticket?",onConfirm:async()=>{var H,ee;_("");try{await Oo(h),(H=window.showToast)==null||H.call(window,"Ticket closed!","success"),b===h&&(S(null),c(null)),await L()}catch(Y){_(Y instanceof Error?Y.message:"Close failed"),(ee=window.showToast)==null||ee.call(window,Y instanceof Error?Y.message:"Close failed","error")}}})}function O(){var ee,Y,se;if(!i||!y)return;const h=Number(i.withdraw_amount??0),Q=Number(y.commission_balance??0);if(i.level!==3||h<=0){(ee=window.showToast)==null||ee.call(window,t("ticket.noWithdrawAmount"),"error");return}if(Q<h){(Y=window.showToast)==null||Y.call(window,t("ticket.insufficientCommissionForWithdraw"),"error");return}const H=`${Ze(h)} ${t("ticket.currencyUnit")}`;(se=window.showConfirm)==null||se.call(window,{message:t("ticket.confirmCommissionMessage",{amount:H}),confirmText:t("ticket.confirmCommissionAction"),onConfirm:async()=>{var ye,Ie,Fe;M(!0),_("");try{const Me=((ye=(await Ro(i.id)).data)==null?void 0:ye.amount)??h,ke=`${Ze(Me)} ${t("ticket.currencyUnit")}`,we=await _n(i.id);if(c(we),we!=null&&we.user_id){const Ce=await Jn(we.user_id);E(Ce.data)}await L(),(Ie=window.showToast)==null||Ie.call(window,t("ticket.commissionConfirmSuccess",{amount:ke}),"success")}catch(De){(Fe=window.showToast)==null||Fe.call(window,De instanceof Error?De.message:t("ticket.commissionConfirmFailed"),"error")}finally{M(!1)}}})}const z=Number((y==null?void 0:y.commission_balance)??0),U=Number((i==null?void 0:i.withdraw_amount)??0),w=(i==null?void 0:i.level)===3&&U>0&&z>=U;return e.jsxs(We,{title:t("ticket.title"),subtitle:t("ticket.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("ticket.heading")}),e.jsxs("p",{children:[s.length," tickets"]})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:L,disabled:m,children:[e.jsx(Oe,{size:16}),t("common.refresh")]})})]}),T?e.jsx("div",{className:"form-error",children:T}):null,m&&s.length===0?e.jsx($e,{label:t("common.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("ticket.id")}),e.jsx("th",{children:t("ticket.subject")}),e.jsx("th",{children:t("ticket.user")}),e.jsx("th",{children:t("ticket.level")}),e.jsx("th",{children:t("ticket.status")}),e.jsx("th",{children:t("ticket.replyStatus")}),e.jsx("th",{children:t("ticket.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(h=>{const Q=Qs(h.status,t);return e.jsxs("tr",{children:[e.jsx("td",{children:h.id}),e.jsx("td",{children:e.jsx("strong",{children:h.subject})}),e.jsxs("td",{children:["#",h.user_id]}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:Rn(h.level,t)})}),e.jsx("td",{children:e.jsx("span",{className:`status-pill ${Q.cls}`,children:Q.label})}),e.jsx("td",{children:h.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})}),e.jsx("td",{children:e.jsx("small",{children:On(h.created_at)})}),e.jsx("td",{children:e.jsx("div",{className:"row-actions",children:h.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(h.id),children:[e.jsx(Gt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void k(h.id),children:[e.jsx(Bn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(h.id),children:[e.jsx(Gt,{size:14}),t("ticket.viewHistory")]})})})]},h.id)}),!m&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-ticket-list",children:[s.map(h=>{const Q=Qs(h.status,t);return e.jsxs("div",{className:"mobile-ticket-card",children:[e.jsxs("div",{className:"mobile-card-header",children:[e.jsx("span",{className:"mobile-card-title",children:h.subject}),e.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Rn(h.level,t)})]}),e.jsxs("div",{className:"mobile-card-body",children:[e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.id"),": ",e.jsxs("strong",{children:["#",h.id]})]}),e.jsx("span",{className:`status-pill ${Q.cls}`,children:Q.label})]}),e.jsxs("div",{className:"mobile-card-body-row",children:[e.jsxs("span",{children:[t("ticket.user"),": ",e.jsxs("strong",{children:["#",h.user_id]})]}),e.jsx("span",{children:h.reply_status?e.jsx("span",{className:"status-pill enabled",children:t("ticket.replied")}):e.jsx("span",{className:"status-pill status-pending",children:t("ticket.waiting")})})]}),e.jsx("div",{className:"mobile-card-body-row",children:e.jsxs("span",{children:[t("ticket.created"),": ",e.jsx("small",{children:On(h.created_at)})]})})]}),e.jsx("div",{className:"mobile-card-actions",children:h.status===0?e.jsxs(e.Fragment,{children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Z(h.id),children:[e.jsx(Gt,{size:14}),t("ticket.replyAction")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void k(h.id),children:[e.jsx(Bn,{size:14}),t("ticket.closeAction")]})]}):e.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Z(h.id),children:[e.jsx(Gt,{size:14}),t("ticket.viewHistory")]})})]},h.id)}),!m&&s.length===0?e.jsx("div",{className:"empty-state",children:t("ticket.noTickets")}):null]}),b!==null?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsxs("div",{children:[e.jsx("h2",{children:i?`${t("ticket.ticketDetail")}: ${i.subject}`:`${t("ticket.ticketDetail")} #${b}`}),e.jsxs("p",{children:[t("ticket.user"),": #",i==null?void 0:i.user_id," | ",t("ticket.level"),": ",i!=null?Rn(i.level,t):t("common.loading")]})]}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>{S(null),c(null)},children:e.jsx(Ne,{size:18})})]}),y&&e.jsxs("div",{className:"user-details-bar",children:[e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("common.email")}),e.jsx("span",{className:"details-value",title:y.email,children:y.email})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.servicePackage")}),e.jsx("span",{className:"details-value",children:((A=I.find(h=>h.id===y.plan_id))==null?void 0:A.name)||t("ticket.freePlan")})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.accountBalance")}),e.jsxs("span",{className:"details-value",children:[Ze(y.balance)," ",t("ticket.currencyUnit")]})]}),e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.commissionBalance")}),e.jsxs("span",{className:"details-value commission-value",children:[Ze(y.commission_balance)," ",t("ticket.currencyUnit")]})]}),(i==null?void 0:i.level)===3?e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.withdrawAmount")}),e.jsx("span",{className:"details-value commission-value",children:U>0?`${Ze(U)} ${t("ticket.currencyUnit")}`:t("ticket.withdrawAmountMissing")})]}):null,e.jsxs("div",{className:"user-details-item",children:[e.jsx("span",{className:"details-label",children:t("ticket.expirationDate")}),e.jsx("span",{className:"details-value",children:y.expired_at?new Date(y.expired_at*1e3).toLocaleDateString("vi-VN"):t("ticket.never")})]}),e.jsx("div",{className:"user-details-actions",children:(i==null?void 0:i.level)===3?e.jsxs("button",{className:"mini-button commission-confirm-button",type:"button",onClick:O,disabled:C||!w,children:[e.jsx(Qi,{size:14}),t(C?"common.processing":"ticket.confirmCommissionAction")]}):null})]}),l?e.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx($e,{label:t("ticket.loadingLogs")})}):e.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[e.jsxs("div",{className:"chat-container",children:[i!=null&&i.message&&i.message.length>0?i.message.map(h=>{const Q=h.is_me,H=Q?h.user_email||t("ticket.staff"):`${t("ticket.user")} #${h.user_id}`;return e.jsxs("div",{className:`chat-message ${Q?"me":"other"}`,children:[e.jsx("div",{className:"chat-bubble",children:uc(h.message)}),e.jsxs("div",{className:"chat-meta",children:[H," • ",On(h.created_at)]})]},h.id)}):e.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:t("ticket.noLogs")}),e.jsx("div",{ref:R})]}),(i==null?void 0:i.status)===0?e.jsx("form",{className:"modal-form",onSubmit:o,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:e.jsxs("label",{style:{margin:0},children:[e.jsx("span",{children:t("ticket.sendReply")}),e.jsxs("div",{style:{position:"relative"},children:[e.jsx("textarea",{className:"config-input",rows:4,required:!0,value:x,onChange:h=>N(h.target.value),placeholder:t("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:q||!x.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[e.jsx(li,{size:14}),q?"":t("ticket.send")]})]})]})}):e.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:t("ticket.closedNotice")})]})]})}):null,e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Xs(n){return n?new Date(n*1e3).toLocaleString("vi-VN"):"—"}const Vs={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ei(n){return{id:n==null?void 0:n.id,category:(n==null?void 0:n.category)??"",title:(n==null?void 0:n.title)??"",body:(n==null?void 0:n.body)??"",language:(n==null?void 0:n.language)??"",sort:(n==null?void 0:n.sort)!=null?String(n.sort):""}}function hc(){const n=Ue(),{t}=he(),[s,r]=a.useState([]),[i,c]=a.useState(null),[l,f]=a.useState(!0),[b,S]=a.useState(!1),[x,N]=a.useState(""),[m,$]=a.useState(""),q=a.useCallback(async()=>{f(!0),N("");try{r(await Ho())}catch(_){N(_ instanceof Error?_.message:t("knowledge.loadFailed"))}finally{f(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);async function D(_){var R;try{const I=await Uo(_.id);c(ei(I))}catch(I){(R=window.showToast)==null||R.call(window,I instanceof Error?I.message:t("knowledge.detailFailed"),"error")}}async function C(_){var R,I;if(_.preventDefault(),!!i){S(!0),N(""),$("");try{await qo({id:i.id,category:i.category,title:i.title,body:i.body,language:i.language||null,sort:i.sort?Number(i.sort):null}),c(null),(R=window.showToast)==null||R.call(window,t("knowledge.saveSuccess"),"success"),await q()}catch(F){(I=window.showToast)==null||I.call(window,F instanceof Error?F.message:t("knowledge.saveFailed"),"error")}finally{S(!1)}}}async function M(_){var R;try{await Go(_),await q()}catch(I){(R=window.showToast)==null||R.call(window,I instanceof Error?I.message:t("knowledge.toggleFailed"),"error")}}async function T(_){var R;(R=window.showConfirm)==null||R.call(window,{message:t("knowledge.deleteConfirm"),onConfirm:async()=>{var I,F;try{await Bo(_),(I=window.showToast)==null||I.call(window,t("knowledge.deleteSuccess"),"success"),await q()}catch(y){(F=window.showToast)==null||F.call(window,y instanceof Error?y.message:t("knowledge.deleteFailed"),"error")}}})}return e.jsxs(We,{title:t("knowledge.title"),subtitle:t("knowledge.subtitle"),children:[e.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("knowledge.heading")}),e.jsxs("p",{children:[s.length," ",t("knowledge.articles")]})]}),e.jsxs("div",{className:"button-row",children:[e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:l,children:[e.jsx(Oe,{size:16}),t("common.refresh")]}),e.jsxs("button",{className:"primary-button",type:"button",onClick:()=>c(ei()),children:[e.jsx(lt,{size:16}),t("knowledge.addArticle")]})]})]}),x?e.jsx("div",{className:"form-error",children:x}):null,m?e.jsx("div",{className:"form-success",children:m}):null,l&&s.length===0?e.jsx($e,{label:t("knowledge.loading")}):null,e.jsx("section",{className:"panel table-panel hide-on-mobile",children:e.jsx("div",{className:"admin-table-wrap",children:e.jsxs("table",{className:"admin-table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:t("common.id")}),e.jsx("th",{children:t("knowledge.category")}),e.jsx("th",{children:t("knowledge.titleField")}),e.jsx("th",{children:t("knowledge.language")}),e.jsx("th",{children:t("knowledge.show")}),e.jsx("th",{children:t("knowledge.sort")}),e.jsx("th",{children:t("knowledge.created")}),e.jsx("th",{children:t("common.actions")})]})}),e.jsxs("tbody",{children:[s.map(_=>e.jsxs("tr",{children:[e.jsx("td",{children:_.id}),e.jsx("td",{children:e.jsx("span",{className:"tag",children:_.category||"—"})}),e.jsx("td",{children:e.jsx("strong",{children:_.title})}),e.jsx("td",{children:_.language&&Vs[_.language]||_.language||"—"}),e.jsx("td",{children:e.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void M(_.id),"aria-label":t("knowledge.toggleShow"),children:e.jsx("span",{className:"admin-switch-thumb"})})}),e.jsx("td",{children:_.sort??"—"}),e.jsx("td",{children:e.jsx("small",{children:Xs(_.created_at)})}),e.jsx("td",{children:e.jsxs("div",{className:"row-actions",children:[e.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void D(_),children:[e.jsx(Ge,{size:14}),t("common.edit")]}),e.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void T(_.id),children:[e.jsx(Qe,{size:14}),t("common.delete")]})]})})]},_.id)),!l&&s.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:8,children:e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")})})}):null]})]})})}),e.jsxs("div",{className:"mobile-knowledge-list",children:[s.map(_=>e.jsxs("div",{className:`knowledge-mobile-card ${_.show?"show-active":""}`,children:[e.jsxs("div",{className:"card-header",children:[e.jsxs("div",{className:"header-left",children:[e.jsxs("span",{className:"id-tag",children:["#",_.id]}),_.sort!=null&&e.jsxs("span",{className:"sort-tag",children:["Order: ",_.sort]})]}),e.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void M(_.id),"aria-label":_.show?t("common.enabled"):t("common.disabled"),children:e.jsx("span",{className:"admin-switch-thumb"})})]}),e.jsxs("div",{className:"card-body",children:[e.jsx("h3",{className:"card-title",children:_.title}),e.jsxs("div",{className:"card-meta",children:[_.category&&e.jsx("span",{className:"category-badge",children:_.category}),_.language&&e.jsx("span",{className:"lang-badge",children:Vs[_.language]||_.language})]}),e.jsxs("p",{className:"created-time",children:[t("knowledge.created"),": ",Xs(_.created_at)]})]}),e.jsxs("div",{className:"card-footer",children:[e.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void D(_),children:[e.jsx(Ge,{size:13}),e.jsx("span",{children:t("common.edit")})]}),e.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void T(_.id),children:[e.jsx(Qe,{size:13}),e.jsx("span",{children:t("common.delete")})]})]})]},_.id)),!l&&s.length===0?e.jsx("div",{className:"empty-state",children:t("knowledge.noArticles")}):null]}),i?e.jsx("div",{className:"modal-backdrop",role:"presentation",children:e.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[e.jsxs("div",{className:"modal-heading",children:[e.jsx("div",{children:e.jsx("h2",{children:i.id?t("knowledge.editArticle"):t("knowledge.newArticle")})}),e.jsx("button",{className:"icon-button",type:"button",onClick:()=>c(null),children:e.jsx(Ne,{size:18})})]}),e.jsxs("form",{className:"modal-form",onSubmit:C,children:[e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.category")}),e.jsx("input",{className:"config-input",required:!0,value:i.category,onChange:_=>c({...i,category:_.target.value})})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.titleField")}),e.jsx("input",{className:"config-input",required:!0,value:i.title,onChange:_=>c({...i,title:_.target.value})})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.body")}),e.jsx("textarea",{className:"config-input",rows:12,required:!0,value:i.body,onChange:_=>c({...i,body:_.target.value})})]}),e.jsxs("div",{className:"form-split",children:[e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.language")}),e.jsxs("select",{className:"config-input",required:!0,value:i.language,onChange:_=>c({...i,language:_.target.value}),children:[e.jsx("option",{value:"",disabled:!0,hidden:!0,children:t("knowledge.selectLanguage")}),e.jsx("option",{value:"en-US",children:t("knowledge.lang.en")}),e.jsx("option",{value:"ja-JP",children:t("knowledge.lang.ja")}),e.jsx("option",{value:"ko-KR",children:t("knowledge.lang.ko")}),e.jsx("option",{value:"vi-VN",children:t("knowledge.lang.vi")}),e.jsx("option",{value:"zh-CN",children:t("knowledge.lang.zhCN")}),e.jsx("option",{value:"zh-TW",children:t("knowledge.lang.zhTW")})]})]}),e.jsxs("label",{children:[e.jsx("span",{children:t("knowledge.sort")}),e.jsx("input",{className:"config-input",type:"number",min:"0",value:i.sort,onChange:_=>c({...i,sort:_.target.value})})]})]}),e.jsxs("div",{className:"modal-actions",children:[e.jsx("button",{className:"ghost-button",type:"button",onClick:()=>c(null),children:t("common.cancel")}),e.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[e.jsx(ct,{size:16}),t(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function xc(){const n=Ue(),{t}=he(),[s,r]=a.useState(null),[i,c]=a.useState(null),[l,f]=a.useState(null),[b,S]=a.useState(""),[x,N]=a.useState(!0),[m,$]=a.useState(""),q=a.useCallback(async()=>{N(!0),$("");try{const[C,M,T,_]=await Promise.all([Zo().catch(()=>({data:{}})),Vo().catch(()=>({data:{}})),er().catch(()=>({data:[]})),tr().catch(()=>({data:""}))]);r(C.data),c(M.data),f(T.data),S(typeof _.data=="string"?_.data:"")}catch(C){$(C instanceof Error?C.message:t("queue.toastLoadFailed"))}finally{N(!1)}},[t]);a.useEffect(()=>{if(!He()){n.replace("/login");return}q()},[q,n]);function D(C,M,T){return C?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[T," ",M]}),e.jsx("div",{className:"queue-grid",children:Object.entries(C).map(([_,R])=>e.jsxs("div",{className:"queue-item",children:[e.jsx("small",{children:_}),e.jsx("strong",{children:typeof R=="object"?JSON.stringify(R):String(R??"—")})]},_))})]}):null}return e.jsxs(We,{title:t("queue.title"),subtitle:t("queue.subtitle"),children:[e.jsxs("div",{className:"toolbar-row",children:[e.jsxs("div",{children:[e.jsx("h2",{children:t("queue.heading")}),e.jsx("p",{children:t("queue.statusDescription")})]}),e.jsx("div",{className:"button-row",children:e.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:x,children:[e.jsx(Oe,{size:16}),t("common.refresh")]})})]}),m?e.jsx("div",{className:"form-error",children:m}):null,x?e.jsx($e,{label:t("queue.loading")}):null,e.jsxs("div",{style:{display:"grid",gap:16},children:[D(s,t("queue.systemStatus"),e.jsx(un,{size:18})),D(i,t("queue.queueStats"),e.jsx(ts,{size:18})),l&&l.length>0?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(Wi,{size:18})," ",t("queue.workload")]}),e.jsx("pre",{className:"log-viewer",children:JSON.stringify(l,null,2)})]}):null,b?e.jsxs("section",{className:"panel",style:{padding:18},children:[e.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[e.jsx(ta,{size:18})," ",t("queue.systemLog")]}),e.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}function gc(){return e.jsx(Ma,{children:e.jsxs(Fi,{children:[e.jsx(Ae,{path:"/login",element:e.jsx(gr,{})}),e.jsx(Ae,{path:"/dashboard",element:e.jsx(Nr,{})}),e.jsx(Ae,{path:"/config/system",element:e.jsx(Mr,{})}),e.jsx(Ae,{path:"/config/payment",element:e.jsx(Ir,{})}),e.jsx(Ae,{path:"/config/theme",element:e.jsx(Or,{})}),e.jsx(Ae,{path:"/server/manage",element:e.jsx(Nl,{})}),e.jsx(Ae,{path:"/server/group",element:e.jsx(kl,{})}),e.jsx(Ae,{path:"/server/route",element:e.jsx(Cl,{})}),e.jsx(Ae,{path:"/plan",element:e.jsx($l,{})}),e.jsx(Ae,{path:"/order",element:e.jsx(Dl,{})}),e.jsx(Ae,{path:"/coupon",element:e.jsx(Ll,{})}),e.jsx(Ae,{path:"/giftcard",element:e.jsx(Fl,{})}),e.jsx(Ae,{path:"/user",element:e.jsx(Bl,{})}),e.jsx(Ae,{path:"/subscription",element:e.jsx(ec,{})}),e.jsx(Ae,{path:"/device",element:e.jsx(oc,{})}),e.jsx(Ae,{path:"/webcon",element:e.jsx(dc,{})}),e.jsx(Ae,{path:"/notice",element:e.jsx(pc,{})}),e.jsx(Ae,{path:"/ticket",element:e.jsx(mc,{})}),e.jsx(Ae,{path:"/knowledge",element:e.jsx(hc,{})}),e.jsx(Ae,{path:"/queue",element:e.jsx(xc,{})}),e.jsx(Ae,{path:"/",element:e.jsx(ls,{to:"/dashboard",replace:!0})}),e.jsx(Ae,{path:"*",element:e.jsx(ls,{to:"/dashboard",replace:!0})})]})})}export{gc as default};
