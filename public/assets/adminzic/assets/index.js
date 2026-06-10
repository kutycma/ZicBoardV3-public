function oy(s,l){for(var o=0;o<l.length;o++){const d=l[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const m=Object.getOwnPropertyDescriptor(d,u);m&&Object.defineProperty(s,u,m.get?m:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function ry(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var dd={exports:{}},os={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function cy(){if(Vf)return os;Vf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(d,u,m){var f=null;if(m!==void 0&&(f=""+m),u.key!==void 0&&(f=""+u.key),"key"in u){m={};for(var k in u)k!=="key"&&(m[k]=u[k])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:f,ref:u!==void 0?u:null,props:m}}return os.Fragment=l,os.jsx=o,os.jsxs=o,os}var Pf;function dy(){return Pf||(Pf=1,dd.exports=cy()),dd.exports}var t=dy(),ud={exports:{}},Ge={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function uy(){if(Wf)return Ge;Wf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),b=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),N=Symbol.iterator;function $(C){return C===null||typeof C!="object"?null:(C=N&&C[N]||C["@@iterator"],typeof C=="function"?C:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,M={};function Y(C,B,pe){this.props=C,this.context=B,this.refs=M,this.updater=pe||I}Y.prototype.isReactComponent={},Y.prototype.setState=function(C,B){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,B,"setState")},Y.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function q(){}q.prototype=Y.prototype;function U(C,B,pe){this.props=C,this.context=B,this.refs=M,this.updater=pe||I}var ne=U.prototype=new q;ne.constructor=U,Q(ne,Y.prototype),ne.isPureReactComponent=!0;var P=Array.isArray;function te(){}var E={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function ie(C,B,pe){var xe=pe.ref;return{$$typeof:s,type:C,key:B,ref:xe!==void 0?xe:null,props:pe}}function ve(C,B){return ie(C.type,B,C.props)}function _(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function O(C){var B={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pe){return B[pe]})}var ae=/\/+/g;function G(C,B){return typeof C=="object"&&C!==null&&C.key!=null?O(""+C.key):B.toString(36)}function ce(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(te,te):(C.status="pending",C.then(function(B){C.status==="pending"&&(C.status="fulfilled",C.value=B)},function(B){C.status==="pending"&&(C.status="rejected",C.reason=B)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function v(C,B,pe,xe,ze){var Ne=typeof C;(Ne==="undefined"||Ne==="boolean")&&(C=null);var qe=!1;if(C===null)qe=!0;else switch(Ne){case"bigint":case"string":case"number":qe=!0;break;case"object":switch(C.$$typeof){case s:case l:qe=!0;break;case w:return qe=C._init,v(qe(C._payload),B,pe,xe,ze)}}if(qe)return ze=ze(C),qe=xe===""?"."+G(C,0):xe,P(ze)?(pe="",qe!=null&&(pe=qe.replace(ae,"$&/")+"/"),v(ze,B,pe,"",function(me){return me})):ze!=null&&(_(ze)&&(ze=ve(ze,pe+(ze.key==null||C&&C.key===ze.key?"":(""+ze.key).replace(ae,"$&/")+"/")+qe)),B.push(ze)),1;qe=0;var D=xe===""?".":xe+":";if(P(C))for(var fe=0;fe<C.length;fe++)xe=C[fe],Ne=D+G(xe,fe),qe+=v(xe,B,pe,Ne,ze);else if(fe=$(C),typeof fe=="function")for(C=fe.call(C),fe=0;!(xe=C.next()).done;)xe=xe.value,Ne=D+G(xe,fe++),qe+=v(xe,B,pe,Ne,ze);else if(Ne==="object"){if(typeof C.then=="function")return v(ce(C),B,pe,xe,ze);throw B=String(C),Error("Objects are not valid as a React child (found: "+(B==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":B)+"). If you meant to render a collection of children, use an array instead.")}return qe}function H(C,B,pe){if(C==null)return C;var xe=[],ze=0;return v(C,xe,"","",function(Ne){return B.call(pe,Ne,ze++)}),xe}function z(C){if(C._status===-1){var B=C._result;B=B(),B.then(function(pe){(C._status===0||C._status===-1)&&(C._status=1,C._result=pe)},function(pe){(C._status===0||C._status===-1)&&(C._status=2,C._result=pe)}),C._status===-1&&(C._status=0,C._result=B)}if(C._status===1)return C._result.default;throw C._result}var he=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var B=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(B))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},oe={map:H,forEach:function(C,B,pe){H(C,function(){B.apply(this,arguments)},pe)},count:function(C){var B=0;return H(C,function(){B++}),B},toArray:function(C){return H(C,function(B){return B})||[]},only:function(C){if(!_(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return Ge.Activity=S,Ge.Children=oe,Ge.Component=Y,Ge.Fragment=o,Ge.Profiler=u,Ge.PureComponent=U,Ge.StrictMode=d,Ge.Suspense=b,Ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,Ge.__COMPILER_RUNTIME={__proto__:null,c:function(C){return E.H.useMemoCache(C)}},Ge.cache=function(C){return function(){return C.apply(null,arguments)}},Ge.cacheSignal=function(){return null},Ge.cloneElement=function(C,B,pe){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var xe=Q({},C.props),ze=C.key;if(B!=null)for(Ne in B.key!==void 0&&(ze=""+B.key),B)!F.call(B,Ne)||Ne==="key"||Ne==="__self"||Ne==="__source"||Ne==="ref"&&B.ref===void 0||(xe[Ne]=B[Ne]);var Ne=arguments.length-2;if(Ne===1)xe.children=pe;else if(1<Ne){for(var qe=Array(Ne),D=0;D<Ne;D++)qe[D]=arguments[D+2];xe.children=qe}return ie(C.type,ze,xe)},Ge.createContext=function(C){return C={$$typeof:f,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:m,_context:C},C},Ge.createElement=function(C,B,pe){var xe,ze={},Ne=null;if(B!=null)for(xe in B.key!==void 0&&(Ne=""+B.key),B)F.call(B,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(ze[xe]=B[xe]);var qe=arguments.length-2;if(qe===1)ze.children=pe;else if(1<qe){for(var D=Array(qe),fe=0;fe<qe;fe++)D[fe]=arguments[fe+2];ze.children=D}if(C&&C.defaultProps)for(xe in qe=C.defaultProps,qe)ze[xe]===void 0&&(ze[xe]=qe[xe]);return ie(C,Ne,ze)},Ge.createRef=function(){return{current:null}},Ge.forwardRef=function(C){return{$$typeof:k,render:C}},Ge.isValidElement=_,Ge.lazy=function(C){return{$$typeof:w,_payload:{_status:-1,_result:C},_init:z}},Ge.memo=function(C,B){return{$$typeof:g,type:C,compare:B===void 0?null:B}},Ge.startTransition=function(C){var B=E.T,pe={};E.T=pe;try{var xe=C(),ze=E.S;ze!==null&&ze(pe,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(te,he)}catch(Ne){he(Ne)}finally{B!==null&&pe.types!==null&&(B.types=pe.types),E.T=B}},Ge.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},Ge.use=function(C){return E.H.use(C)},Ge.useActionState=function(C,B,pe){return E.H.useActionState(C,B,pe)},Ge.useCallback=function(C,B){return E.H.useCallback(C,B)},Ge.useContext=function(C){return E.H.useContext(C)},Ge.useDebugValue=function(){},Ge.useDeferredValue=function(C,B){return E.H.useDeferredValue(C,B)},Ge.useEffect=function(C,B){return E.H.useEffect(C,B)},Ge.useEffectEvent=function(C){return E.H.useEffectEvent(C)},Ge.useId=function(){return E.H.useId()},Ge.useImperativeHandle=function(C,B,pe){return E.H.useImperativeHandle(C,B,pe)},Ge.useInsertionEffect=function(C,B){return E.H.useInsertionEffect(C,B)},Ge.useLayoutEffect=function(C,B){return E.H.useLayoutEffect(C,B)},Ge.useMemo=function(C,B){return E.H.useMemo(C,B)},Ge.useOptimistic=function(C,B){return E.H.useOptimistic(C,B)},Ge.useReducer=function(C,B,pe){return E.H.useReducer(C,B,pe)},Ge.useRef=function(C){return E.H.useRef(C)},Ge.useState=function(C){return E.H.useState(C)},Ge.useSyncExternalStore=function(C,B,pe){return E.H.useSyncExternalStore(C,B,pe)},Ge.useTransition=function(){return E.H.useTransition()},Ge.version="19.2.6",Ge}var If;function Zd(){return If||(If=1,ud.exports=uy()),ud.exports}var h=Zd();const py=ry(h),my=oy({__proto__:null,default:py},[h]);var pd={exports:{}},rs={},md={exports:{}},fd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function fy(){return eh||(eh=1,(function(s){function l(v,H){var z=v.length;v.push(H);e:for(;0<z;){var he=z-1>>>1,oe=v[he];if(0<u(oe,H))v[he]=H,v[z]=oe,z=he;else break e}}function o(v){return v.length===0?null:v[0]}function d(v){if(v.length===0)return null;var H=v[0],z=v.pop();if(z!==H){v[0]=z;e:for(var he=0,oe=v.length,C=oe>>>1;he<C;){var B=2*(he+1)-1,pe=v[B],xe=B+1,ze=v[xe];if(0>u(pe,z))xe<oe&&0>u(ze,pe)?(v[he]=ze,v[xe]=z,he=xe):(v[he]=pe,v[B]=z,he=B);else if(xe<oe&&0>u(ze,z))v[he]=ze,v[xe]=z,he=xe;else break e}}return H}function u(v,H){var z=v.sortIndex-H.sortIndex;return z!==0?z:v.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var f=Date,k=f.now();s.unstable_now=function(){return f.now()-k}}var b=[],g=[],w=1,S=null,N=3,$=!1,I=!1,Q=!1,M=!1,Y=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function ne(v){for(var H=o(g);H!==null;){if(H.callback===null)d(g);else if(H.startTime<=v)d(g),H.sortIndex=H.expirationTime,l(b,H);else break;H=o(g)}}function P(v){if(Q=!1,ne(v),!I)if(o(b)!==null)I=!0,te||(te=!0,O());else{var H=o(g);H!==null&&ce(P,H.startTime-v)}}var te=!1,E=-1,F=5,ie=-1;function ve(){return M?!0:!(s.unstable_now()-ie<F)}function _(){if(M=!1,te){var v=s.unstable_now();ie=v;var H=!0;try{e:{I=!1,Q&&(Q=!1,q(E),E=-1),$=!0;var z=N;try{t:{for(ne(v),S=o(b);S!==null&&!(S.expirationTime>v&&ve());){var he=S.callback;if(typeof he=="function"){S.callback=null,N=S.priorityLevel;var oe=he(S.expirationTime<=v);if(v=s.unstable_now(),typeof oe=="function"){S.callback=oe,ne(v),H=!0;break t}S===o(b)&&d(b),ne(v)}else d(b);S=o(b)}if(S!==null)H=!0;else{var C=o(g);C!==null&&ce(P,C.startTime-v),H=!1}}break e}finally{S=null,N=z,$=!1}H=void 0}}finally{H?O():te=!1}}}var O;if(typeof U=="function")O=function(){U(_)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,G=ae.port2;ae.port1.onmessage=_,O=function(){G.postMessage(null)}}else O=function(){Y(_,0)};function ce(v,H){E=Y(function(){v(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(v){v.callback=null},s.unstable_forceFrameRate=function(v){0>v||125<v?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<v?Math.floor(1e3/v):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(v){switch(N){case 1:case 2:case 3:var H=3;break;default:H=N}var z=N;N=H;try{return v()}finally{N=z}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(v,H){switch(v){case 1:case 2:case 3:case 4:case 5:break;default:v=3}var z=N;N=v;try{return H()}finally{N=z}},s.unstable_scheduleCallback=function(v,H,z){var he=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?he+z:he):z=he,v){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=z+oe,v={id:w++,callback:H,priorityLevel:v,startTime:z,expirationTime:oe,sortIndex:-1},z>he?(v.sortIndex=z,l(g,v),o(b)===null&&v===o(g)&&(Q?(q(E),E=-1):Q=!0,ce(P,z-he))):(v.sortIndex=oe,l(b,v),I||$||(I=!0,te||(te=!0,O()))),v},s.unstable_shouldYield=ve,s.unstable_wrapCallback=function(v){var H=N;return function(){var z=N;N=H;try{return v.apply(this,arguments)}finally{N=z}}}})(fd)),fd}var th;function hy(){return th||(th=1,md.exports=fy()),md.exports}var hd={exports:{}},cn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function xy(){if(nh)return cn;nh=1;var s=Zd();function l(b){var g="https://react.dev/errors/"+b;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var w=2;w<arguments.length;w++)g+="&args[]="+encodeURIComponent(arguments[w])}return"Minified React error #"+b+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(b,g,w){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:S==null?null:""+S,children:b,containerInfo:g,implementation:w}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(b,g){if(b==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return cn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,cn.createPortal=function(b,g){var w=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(l(299));return m(b,g,null,w)},cn.flushSync=function(b){var g=f.T,w=d.p;try{if(f.T=null,d.p=2,b)return b()}finally{f.T=g,d.p=w,d.d.f()}},cn.preconnect=function(b,g){typeof b=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(b,g))},cn.prefetchDNS=function(b){typeof b=="string"&&d.d.D(b)},cn.preinit=function(b,g){if(typeof b=="string"&&g&&typeof g.as=="string"){var w=g.as,S=k(w,g.crossOrigin),N=typeof g.integrity=="string"?g.integrity:void 0,$=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;w==="style"?d.d.S(b,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:S,integrity:N,fetchPriority:$}):w==="script"&&d.d.X(b,{crossOrigin:S,integrity:N,fetchPriority:$,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},cn.preinitModule=function(b,g){if(typeof b=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var w=k(g.as,g.crossOrigin);d.d.M(b,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(b)},cn.preload=function(b,g){if(typeof b=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var w=g.as,S=k(w,g.crossOrigin);d.d.L(b,w,{crossOrigin:S,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},cn.preloadModule=function(b,g){if(typeof b=="string")if(g){var w=k(g.as,g.crossOrigin);d.d.m(b,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(b)},cn.requestFormReset=function(b){d.d.r(b)},cn.unstable_batchedUpdates=function(b,g){return b(g)},cn.useFormState=function(b,g,w){return f.H.useFormState(b,g,w)},cn.useFormStatus=function(){return f.H.useHostTransitionStatus()},cn.version="19.2.6",cn}var ah;function dx(){if(ah)return hd.exports;ah=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),hd.exports=xy(),hd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ih;function by(){if(ih)return rs;ih=1;var s=hy(),l=Zd(),o=dx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function b(e){if(m(e)!==e)throw Error(d(188))}function g(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,i=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return b(r),e;if(c===i)return b(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==i.return)a=r,i=c;else{for(var p=!1,x=r.child;x;){if(x===a){p=!0,a=r,i=c;break}if(x===i){p=!0,i=r,a=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===a){p=!0,a=c,i=r;break}if(x===i){p=!0,i=c,a=r;break}x=x.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function w(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=w(e),n!==null)return n;e=e.sibling}return null}var S=Object.assign,N=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Y=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),U=Symbol.for("react.context"),ne=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),ve=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var ae=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ae?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Q:return"Fragment";case Y:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case te:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case U:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case ne:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return n=e.displayName||null,n!==null?n:G(e.type)||"Memo";case F:n=e._payload,e=e._init;try{return G(e(n))}catch{}}return null}var ce=Array.isArray,v=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},he=[],oe=-1;function C(e){return{current:e}}function B(e){0>oe||(e.current=he[oe],he[oe]=null,oe--)}function pe(e,n){oe++,he[oe]=e.current,e.current=n}var xe=C(null),ze=C(null),Ne=C(null),qe=C(null);function D(e,n){switch(pe(Ne,n),pe(ze,e),pe(xe,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?yf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=yf(n),e=vf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}B(xe),pe(xe,e)}function fe(){B(xe),B(ze),B(Ne)}function me(e){e.memoizedState!==null&&pe(qe,e);var n=xe.current,a=vf(n,e.type);n!==a&&(pe(ze,e),pe(xe,a))}function Le(e){ze.current===e&&(B(xe),B(ze)),qe.current===e&&(B(qe),as._currentValue=z)}var ct,ut;function nt(e){if(ct===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);ct=n&&n[1]||"",ut=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ct+e+ut}var Ct=!1;function pt(e,n){if(!e||Ct)return"";Ct=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var de=function(){throw Error()};if(Object.defineProperty(de.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(de,[])}catch(V){var K=V}Reflect.construct(e,[],de)}else{try{de.call()}catch(V){K=V}e.call(de.prototype)}}else{try{throw Error()}catch(V){K=V}(de=e())&&typeof de.catch=="function"&&de.catch(function(){})}}catch(V){if(V&&K&&typeof V.stack=="string")return[V.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],x=c[1];if(p&&x){var T=p.split(`
`),Z=x.split(`
`);for(r=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(i===T.length||r===Z.length)for(i=T.length-1,r=Z.length-1;1<=i&&0<=r&&T[i]!==Z[r];)r--;for(;1<=i&&0<=r;i--,r--)if(T[i]!==Z[r]){if(i!==1||r!==1)do if(i--,r--,0>r||T[i]!==Z[r]){var ee=`
`+T[i].replace(" at new "," at ");return e.displayName&&ee.includes("<anonymous>")&&(ee=ee.replace("<anonymous>",e.displayName)),ee}while(1<=i&&0<=r);break}}}finally{Ct=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function Pt(e,n){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return e.child!==n&&n!==null?nt("Suspense Fallback"):nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return pt(e.type,!1);case 11:return pt(e.type.render,!1);case 1:return pt(e.type,!0);case 31:return nt("Activity");default:return""}}function yt(e){try{var n="",a=null;do n+=Pt(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ze=Object.prototype.hasOwnProperty,Gt=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,ke=s.unstable_shouldYield,Nn=s.unstable_requestPaint,Ae=s.unstable_now,un=s.unstable_getCurrentPriorityLevel,pn=s.unstable_ImmediatePriority,Wt=s.unstable_UserBlockingPriority,J=s.unstable_NormalPriority,De=s.unstable_LowPriority,Se=s.unstable_IdlePriority,we=s.log,Je=s.unstable_setDisableYieldValue,Be=null,$e=null;function Ve(e){if(typeof we=="function"&&Je(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Be,e)}catch{}}var st=Math.clz32?Math.clz32:ea,mn=Math.log,Et=Math.LN2;function ea(e){return e>>>=0,e===0?32:31-(mn(e)/Et|0)|0}var $t=256,fn=262144,Kn=4194304;function hn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function R(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?r=hn(i):(p&=x,p!==0?r=hn(p):a||(a=x&~e,a!==0&&(r=hn(a))))):(x=i&~c,x!==0?r=hn(x):p!==0?r=hn(p):a||(a=i&~e,a!==0&&(r=hn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function le(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function W(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Me(){var e=Kn;return Kn<<=1,(Kn&62914560)===0&&(Kn=4194304),e}function Xe(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Ke(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function y(e,n,a,i,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,T=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var ee=31-st(a),de=1<<ee;x[ee]=0,T[ee]=-1;var K=Z[ee];if(K!==null)for(Z[ee]=null,ee=0;ee<K.length;ee++){var V=K[ee];V!==null&&(V.lane&=-536870913)}a&=~de}i!==0&&re(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function re(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-st(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function ue(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-st(a),r=1<<i;r&n|e[i]&n&&(e[i]|=n),a&=~r}}function Ce(e,n){var a=n&-n;return a=(a&42)!==0?1:vt(a),(a&(e.suspendedLanes|n))!==0?0:a}function vt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Un(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function ca(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:Yf(e.type))}function Nt(e,n){var a=H.p;try{return H.p=e,n()}finally{H.p=a}}var Fn=Math.random().toString(36).slice(2),Ut="__reactFiber$"+Fn,zt="__reactProps$"+Fn,Oa="__reactContainer$"+Fn,j="__reactEvents$"+Fn,be="__reactListeners$"+Fn,ge="__reactHandles$"+Fn,Ue="__reactResources$"+Fn,it="__reactMarker$"+Fn;function bn(e){delete e[Ut],delete e[zt],delete e[j],delete e[be],delete e[ge]}function Yt(e){var n=e[Ut];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oa]||a[Ut]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Cf(e);e!==null;){if(a=e[Ut])return a;e=Cf(e)}return n}e=a,a=e.parentNode}return null}function ta(e){if(e=e[Ut]||e[Oa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function da(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Ua(e){var n=e[Ue];return n||(n=e[Ue]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function It(e){e[it]=!0}var su=new Set,ou={};function xi(e,n){Ri(e,n),Ri(e+"Capture",n)}function Ri(e,n){for(ou[e]=n,e=0;e<n.length;e++)su.add(n[e])}var Wx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ru={},cu={};function Ix(e){return Ze.call(cu,e)?!0:Ze.call(ru,e)?!1:Wx.test(e)?cu[e]=!0:(ru[e]=!0,!1)}function vs(e,n,a){if(Ix(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function js(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ua(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Rn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function du(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function eb(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ar(e){if(!e._valueTracker){var n=du(e)?"checked":"value";e._valueTracker=eb(e,n,""+e[n])}}function uu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=du(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var tb=/[\n"\\]/g;function Hn(e){return e.replace(tb,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ir(e,n,a,i,r,c,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Rn(n)):e.value!==""+Rn(n)&&(e.value=""+Rn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?lr(e,p,Rn(n)):a!=null?lr(e,p,Rn(a)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Rn(x):e.removeAttribute("name")}function pu(e,n,a,i,r,c,p,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){ar(e);return}a=a!=null?""+Rn(a):"",n=n!=null?""+Rn(n):a,x||n===e.value||(e.value=n),e.defaultValue=n}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),ar(e)}function lr(e,n,a){n==="number"&&ws(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Hi(e,n,a,i){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Rn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function mu(e,n,a){if(n!=null&&(n=""+Rn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Rn(a):""}function fu(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(d(92));if(ce(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Rn(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),ar(e)}function Li(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var nb=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function hu(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||nb.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function xu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in n)i=n[r],n.hasOwnProperty(r)&&a[r]!==i&&hu(e,r,i)}else for(var c in n)n.hasOwnProperty(c)&&hu(e,c,n[c])}function sr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ab=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ib=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function _s(e){return ib.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function pa(){}var or=null;function rr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var qi=null,Bi=null;function bu(e){var n=ta(e);if(n&&(e=n.stateNode)){var a=e[zt]||null;e:switch(e=n.stateNode,n.type){case"input":if(ir(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Hn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var r=i[zt]||null;if(!r)throw Error(d(90));ir(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&uu(i)}break e;case"textarea":mu(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Hi(e,!!a.multiple,n,!1)}}}var cr=!1;function gu(e,n,a){if(cr)return e(n,a);cr=!0;try{var i=e(n);return i}finally{if(cr=!1,(qi!==null||Bi!==null)&&(uo(),qi&&(n=qi,e=Bi,Bi=qi=null,bu(n),e)))for(n=0;n<e.length;n++)bu(e[n])}}function vl(e,n){var a=e.stateNode;if(a===null)return null;var i=a[zt]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ma=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),dr=!1;if(ma)try{var jl={};Object.defineProperty(jl,"passive",{get:function(){dr=!0}}),window.addEventListener("test",jl,jl),window.removeEventListener("test",jl,jl)}catch{dr=!1}var Ra=null,ur=null,Ns=null;function yu(){if(Ns)return Ns;var e,n=ur,a=n.length,i,r="value"in Ra?Ra.value:Ra.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(i=1;i<=p&&n[a-i]===r[c-i];i++);return Ns=r.slice(e,1<i?1-i:void 0)}function Ss(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ks(){return!0}function vu(){return!1}function gn(e){function n(a,i,r,c,p){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ks:vu,this.isPropagationStopped=vu,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ks)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ks)},persist:function(){},isPersistent:ks}),n}var bi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Cs=gn(bi),wl=S({},bi,{view:0,detail:0}),lb=gn(wl),pr,mr,_l,zs=S({},wl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_l&&(_l&&e.type==="mousemove"?(pr=e.screenX-_l.screenX,mr=e.screenY-_l.screenY):mr=pr=0,_l=e),pr)},movementY:function(e){return"movementY"in e?e.movementY:mr}}),ju=gn(zs),sb=S({},zs,{dataTransfer:0}),ob=gn(sb),rb=S({},wl,{relatedTarget:0}),fr=gn(rb),cb=S({},bi,{animationName:0,elapsedTime:0,pseudoElement:0}),db=gn(cb),ub=S({},bi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),pb=gn(ub),mb=S({},bi,{data:0}),wu=gn(mb),fb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=xb[e])?!!n[e]:!1}function hr(){return bb}var gb=S({},wl,{key:function(e){if(e.key){var n=fb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?hb[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hr,charCode:function(e){return e.type==="keypress"?Ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),yb=gn(gb),vb=S({},zs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=gn(vb),jb=S({},wl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hr}),wb=gn(jb),_b=S({},bi,{propertyName:0,elapsedTime:0,pseudoElement:0}),Nb=gn(_b),Sb=S({},zs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),kb=gn(Sb),Cb=S({},bi,{newState:0,oldState:0}),zb=gn(Cb),Tb=[9,13,27,32],xr=ma&&"CompositionEvent"in window,Nl=null;ma&&"documentMode"in document&&(Nl=document.documentMode);var Eb=ma&&"TextEvent"in window&&!Nl,Nu=ma&&(!xr||Nl&&8<Nl&&11>=Nl),Su=" ",ku=!1;function Cu(e,n){switch(e){case"keyup":return Tb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Gi=!1;function Mb(e,n){switch(e){case"compositionend":return zu(n);case"keypress":return n.which!==32?null:(ku=!0,Su);case"textInput":return e=n.data,e===Su&&ku?null:e;default:return null}}function Ab(e,n){if(Gi)return e==="compositionend"||!xr&&Cu(e,n)?(e=yu(),Ns=ur=Ra=null,Gi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Nu&&n.locale!=="ko"?null:n.data;default:return null}}var Db={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Db[e.type]:n==="textarea"}function Eu(e,n,a,i){qi?Bi?Bi.push(i):Bi=[i]:qi=i,n=go(n,"onChange"),0<n.length&&(a=new Cs("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var Sl=null,kl=null;function Ob(e){mf(e,0)}function Ts(e){var n=da(e);if(uu(n))return e}function Mu(e,n){if(e==="change")return n}var Au=!1;if(ma){var br;if(ma){var gr="oninput"in document;if(!gr){var Du=document.createElement("div");Du.setAttribute("oninput","return;"),gr=typeof Du.oninput=="function"}br=gr}else br=!1;Au=br&&(!document.documentMode||9<document.documentMode)}function Ou(){Sl&&(Sl.detachEvent("onpropertychange",Uu),kl=Sl=null)}function Uu(e){if(e.propertyName==="value"&&Ts(kl)){var n=[];Eu(n,kl,e,rr(e)),gu(Ob,n)}}function Ub(e,n,a){e==="focusin"?(Ou(),Sl=n,kl=a,Sl.attachEvent("onpropertychange",Uu)):e==="focusout"&&Ou()}function Rb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ts(kl)}function Hb(e,n){if(e==="click")return Ts(n)}function Lb(e,n){if(e==="input"||e==="change")return Ts(n)}function qb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Sn=typeof Object.is=="function"?Object.is:qb;function Cl(e,n){if(Sn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!Ze.call(n,r)||!Sn(e[r],n[r]))return!1}return!0}function Ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Hu(e,n){var a=Ru(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Ru(a)}}function Lu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Lu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function qu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ws(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ws(e.document)}return n}function yr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Bb=ma&&"documentMode"in document&&11>=document.documentMode,$i=null,vr=null,zl=null,jr=!1;function Bu(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jr||$i==null||$i!==ws(i)||(i=$i,"selectionStart"in i&&yr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),zl&&Cl(zl,i)||(zl=i,i=go(vr,"onSelect"),0<i.length&&(n=new Cs("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=$i)))}function gi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Yi={animationend:gi("Animation","AnimationEnd"),animationiteration:gi("Animation","AnimationIteration"),animationstart:gi("Animation","AnimationStart"),transitionrun:gi("Transition","TransitionRun"),transitionstart:gi("Transition","TransitionStart"),transitioncancel:gi("Transition","TransitionCancel"),transitionend:gi("Transition","TransitionEnd")},wr={},Gu={};ma&&(Gu=document.createElement("div").style,"AnimationEvent"in window||(delete Yi.animationend.animation,delete Yi.animationiteration.animation,delete Yi.animationstart.animation),"TransitionEvent"in window||delete Yi.transitionend.transition);function yi(e){if(wr[e])return wr[e];if(!Yi[e])return e;var n=Yi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Gu)return wr[e]=n[a];return e}var $u=yi("animationend"),Yu=yi("animationiteration"),Qu=yi("animationstart"),Gb=yi("transitionrun"),$b=yi("transitionstart"),Yb=yi("transitioncancel"),Xu=yi("transitionend"),Zu=new Map,_r="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");_r.push("scrollEnd");function Jn(e,n){Zu.set(e,n),xi(n,[e])}var Es=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ln=[],Qi=0,Nr=0;function Ms(){for(var e=Qi,n=Nr=Qi=0;n<e;){var a=Ln[n];Ln[n++]=null;var i=Ln[n];Ln[n++]=null;var r=Ln[n];Ln[n++]=null;var c=Ln[n];if(Ln[n++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&Ku(a,r,c)}}function As(e,n,a,i){Ln[Qi++]=e,Ln[Qi++]=n,Ln[Qi++]=a,Ln[Qi++]=i,Nr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Sr(e,n,a,i){return As(e,n,a,i),Ds(e)}function vi(e,n){return As(e,null,null,n),Ds(e)}function Ku(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-st(a),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[n]:i.push(n),n.lane=a|536870912),c):null}function Ds(e){if(50<Vl)throw Vl=0,Oc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xi={};function Qb(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kn(e,n,a,i){return new Qb(e,n,a,i)}function kr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function fa(e,n){var a=e.alternate;return a===null?(a=kn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Fu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Os(e,n,a,i,r,c){var p=0;if(i=e,typeof e=="function")kr(e)&&(p=1);else if(typeof e=="string")p=Jg(e,a,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=kn(31,a,n,r),e.elementType=ie,e.lanes=c,e;case Q:return ji(a.children,r,c,n);case M:p=8,r|=24;break;case Y:return e=kn(12,a,n,r|2),e.elementType=Y,e.lanes=c,e;case P:return e=kn(13,a,n,r),e.elementType=P,e.lanes=c,e;case te:return e=kn(19,a,n,r),e.elementType=te,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:p=10;break e;case q:p=9;break e;case ne:p=11;break e;case E:p=14;break e;case F:p=16,i=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),i=null}return n=kn(p,a,n,r),n.elementType=e,n.type=i,n.lanes=c,n}function ji(e,n,a,i){return e=kn(7,e,i,n),e.lanes=a,e}function Cr(e,n,a){return e=kn(6,e,null,n),e.lanes=a,e}function Ju(e){var n=kn(18,null,null,0);return n.stateNode=e,n}function zr(e,n,a){return n=kn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vu=new WeakMap;function qn(e,n){if(typeof e=="object"&&e!==null){var a=Vu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:yt(n)},Vu.set(e,n),n)}return{value:e,source:n,stack:yt(n)}}var Zi=[],Ki=0,Us=null,Tl=0,Bn=[],Gn=0,Ha=null,na=1,aa="";function ha(e,n){Zi[Ki++]=Tl,Zi[Ki++]=Us,Us=e,Tl=n}function Pu(e,n,a){Bn[Gn++]=na,Bn[Gn++]=aa,Bn[Gn++]=Ha,Ha=e;var i=na;e=aa;var r=32-st(i)-1;i&=~(1<<r),a+=1;var c=32-st(n)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,na=1<<32-st(n)+r|a<<r|i,aa=c+e}else na=1<<c|a<<r|i,aa=e}function Tr(e){e.return!==null&&(ha(e,1),Pu(e,1,0))}function Er(e){for(;e===Us;)Us=Zi[--Ki],Zi[Ki]=null,Tl=Zi[--Ki],Zi[Ki]=null;for(;e===Ha;)Ha=Bn[--Gn],Bn[Gn]=null,aa=Bn[--Gn],Bn[Gn]=null,na=Bn[--Gn],Bn[Gn]=null}function Wu(e,n){Bn[Gn++]=na,Bn[Gn++]=aa,Bn[Gn++]=Ha,na=n.id,aa=n.overflow,Ha=e}var an=null,jt=null,at=!1,La=null,$n=!1,Mr=Error(d(519));function qa(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw El(qn(n,e)),Mr}function Iu(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[Ut]=e,n[zt]=i,a){case"dialog":We("cancel",n),We("close",n);break;case"iframe":case"object":case"embed":We("load",n);break;case"video":case"audio":for(a=0;a<Wl.length;a++)We(Wl[a],n);break;case"source":We("error",n);break;case"img":case"image":case"link":We("error",n),We("load",n);break;case"details":We("toggle",n);break;case"input":We("invalid",n),pu(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":We("invalid",n);break;case"textarea":We("invalid",n),fu(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||bf(n.textContent,a)?(i.popover!=null&&(We("beforetoggle",n),We("toggle",n)),i.onScroll!=null&&We("scroll",n),i.onScrollEnd!=null&&We("scrollend",n),i.onClick!=null&&(n.onclick=pa),n=!0):n=!1,n||qa(e,!0)}function ep(e){for(an=e.return;an;)switch(an.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:an=an.return}}function Fi(e){if(e!==an)return!1;if(!at)return ep(e),at=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Jc(e.type,e.memoizedProps)),a=!a),a&&jt&&qa(e),ep(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));jt=kf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));jt=kf(e)}else n===27?(n=jt,Ia(e.type)?(e=ed,ed=null,jt=e):jt=n):jt=an?Qn(e.stateNode.nextSibling):null;return!0}function wi(){jt=an=null,at=!1}function Ar(){var e=La;return e!==null&&(wn===null?wn=e:wn.push.apply(wn,e),La=null),e}function El(e){La===null?La=[e]:La.push(e)}var Dr=C(null),_i=null,xa=null;function Ba(e,n,a){pe(Dr,n._currentValue),n._currentValue=a}function ba(e){e._currentValue=Dr.current,B(Dr)}function Or(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function Ur(e,n,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var T=0;T<n.length;T++)if(x.context===n[T]){c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),Or(c.return,a,e),i||(p=null);break e}c=x.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Or(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ji(e,n,a,i){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var x=r.type;Sn(r.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(r===qe.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(as):e=[as])}r=r.return}e!==null&&Ur(n,e,a,i),n.flags|=262144}function Rs(e){for(e=e.firstContext;e!==null;){if(!Sn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ni(e){_i=e,xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function ln(e){return tp(_i,e)}function Hs(e,n){return _i===null&&Ni(e),tp(e,n)}function tp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},xa===null){if(e===null)throw Error(d(308));xa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else xa=xa.next=n;return a}var Xb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Zb=s.unstable_scheduleCallback,Kb=s.unstable_NormalPriority,Qt={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rr(){return{controller:new Xb,data:new Map,refCount:0}}function Ml(e){e.refCount--,e.refCount===0&&Zb(Kb,function(){e.controller.abort()})}var Al=null,Hr=0,Vi=0,Pi=null;function Fb(e,n){if(Al===null){var a=Al=[];Hr=0,Vi=Bc(),Pi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Hr++,n.then(np,np),n}function np(){if(--Hr===0&&Al!==null){Pi!==null&&(Pi.status="fulfilled");var e=Al;Al=null,Vi=0,Pi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jb(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var ap=v.S;v.S=function(e,n){Bm=Ae(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Fb(e,n),ap!==null&&ap(e,n)};var Si=C(null);function Lr(){var e=Si.current;return e!==null?e:gt.pooledCache}function Ls(e,n){n===null?pe(Si,Si.current):pe(Si,n.pool)}function ip(){var e=Lr();return e===null?null:{parent:Qt._currentValue,pool:e}}var Wi=Error(d(460)),qr=Error(d(474)),qs=Error(d(542)),Bs={then:function(){}};function lp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(pa,pa),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rp(e),e;default:if(typeof n.status=="string")n.then(pa,pa);else{if(e=gt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=i}},function(i){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,rp(e),e}throw Ci=n,Wi}}function ki(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ci=a,Wi):a}}var Ci=null;function op(){if(Ci===null)throw Error(d(459));var e=Ci;return Ci=null,e}function rp(e){if(e===Wi||e===qs)throw Error(d(483))}var Ii=null,Dl=0;function Gs(e){var n=Dl;return Dl+=1,Ii===null&&(Ii=[]),sp(Ii,e,n)}function Ol(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function $s(e,n){throw n.$$typeof===N?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function cp(e){function n(L,A){if(e){var X=L.deletions;X===null?(L.deletions=[A],L.flags|=16):X.push(A)}}function a(L,A){if(!e)return null;for(;A!==null;)n(L,A),A=A.sibling;return null}function i(L){for(var A=new Map;L!==null;)L.key!==null?A.set(L.key,L):A.set(L.index,L),L=L.sibling;return A}function r(L,A){return L=fa(L,A),L.index=0,L.sibling=null,L}function c(L,A,X){return L.index=X,e?(X=L.alternate,X!==null?(X=X.index,X<A?(L.flags|=67108866,A):X):(L.flags|=67108866,A)):(L.flags|=1048576,A)}function p(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function x(L,A,X,se){return A===null||A.tag!==6?(A=Cr(X,L.mode,se),A.return=L,A):(A=r(A,X),A.return=L,A)}function T(L,A,X,se){var Re=X.type;return Re===Q?ee(L,A,X.props.children,se,X.key):A!==null&&(A.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===F&&ki(Re)===A.type)?(A=r(A,X.props),Ol(A,X),A.return=L,A):(A=Os(X.type,X.key,X.props,null,L.mode,se),Ol(A,X),A.return=L,A)}function Z(L,A,X,se){return A===null||A.tag!==4||A.stateNode.containerInfo!==X.containerInfo||A.stateNode.implementation!==X.implementation?(A=zr(X,L.mode,se),A.return=L,A):(A=r(A,X.children||[]),A.return=L,A)}function ee(L,A,X,se,Re){return A===null||A.tag!==7?(A=ji(X,L.mode,se,Re),A.return=L,A):(A=r(A,X),A.return=L,A)}function de(L,A,X){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return A=Cr(""+A,L.mode,X),A.return=L,A;if(typeof A=="object"&&A!==null){switch(A.$$typeof){case $:return X=Os(A.type,A.key,A.props,null,L.mode,X),Ol(X,A),X.return=L,X;case I:return A=zr(A,L.mode,X),A.return=L,A;case F:return A=ki(A),de(L,A,X)}if(ce(A)||O(A))return A=ji(A,L.mode,X,null),A.return=L,A;if(typeof A.then=="function")return de(L,Gs(A),X);if(A.$$typeof===U)return de(L,Hs(L,A),X);$s(L,A)}return null}function K(L,A,X,se){var Re=A!==null?A.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Re!==null?null:x(L,A,""+X,se);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return X.key===Re?T(L,A,X,se):null;case I:return X.key===Re?Z(L,A,X,se):null;case F:return X=ki(X),K(L,A,X,se)}if(ce(X)||O(X))return Re!==null?null:ee(L,A,X,se,null);if(typeof X.then=="function")return K(L,A,Gs(X),se);if(X.$$typeof===U)return K(L,A,Hs(L,X),se);$s(L,X)}return null}function V(L,A,X,se,Re){if(typeof se=="string"&&se!==""||typeof se=="number"||typeof se=="bigint")return L=L.get(X)||null,x(A,L,""+se,Re);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case $:return L=L.get(se.key===null?X:se.key)||null,T(A,L,se,Re);case I:return L=L.get(se.key===null?X:se.key)||null,Z(A,L,se,Re);case F:return se=ki(se),V(L,A,X,se,Re)}if(ce(se)||O(se))return L=L.get(X)||null,ee(A,L,se,Re,null);if(typeof se.then=="function")return V(L,A,X,Gs(se),Re);if(se.$$typeof===U)return V(L,A,X,Hs(A,se),Re);$s(A,se)}return null}function Ee(L,A,X,se){for(var Re=null,ot=null,Oe=A,Qe=A=0,tt=null;Oe!==null&&Qe<X.length;Qe++){Oe.index>Qe?(tt=Oe,Oe=null):tt=Oe.sibling;var rt=K(L,Oe,X[Qe],se);if(rt===null){Oe===null&&(Oe=tt);break}e&&Oe&&rt.alternate===null&&n(L,Oe),A=c(rt,A,Qe),ot===null?Re=rt:ot.sibling=rt,ot=rt,Oe=tt}if(Qe===X.length)return a(L,Oe),at&&ha(L,Qe),Re;if(Oe===null){for(;Qe<X.length;Qe++)Oe=de(L,X[Qe],se),Oe!==null&&(A=c(Oe,A,Qe),ot===null?Re=Oe:ot.sibling=Oe,ot=Oe);return at&&ha(L,Qe),Re}for(Oe=i(Oe);Qe<X.length;Qe++)tt=V(Oe,L,Qe,X[Qe],se),tt!==null&&(e&&tt.alternate!==null&&Oe.delete(tt.key===null?Qe:tt.key),A=c(tt,A,Qe),ot===null?Re=tt:ot.sibling=tt,ot=tt);return e&&Oe.forEach(function(ii){return n(L,ii)}),at&&ha(L,Qe),Re}function He(L,A,X,se){if(X==null)throw Error(d(151));for(var Re=null,ot=null,Oe=A,Qe=A=0,tt=null,rt=X.next();Oe!==null&&!rt.done;Qe++,rt=X.next()){Oe.index>Qe?(tt=Oe,Oe=null):tt=Oe.sibling;var ii=K(L,Oe,rt.value,se);if(ii===null){Oe===null&&(Oe=tt);break}e&&Oe&&ii.alternate===null&&n(L,Oe),A=c(ii,A,Qe),ot===null?Re=ii:ot.sibling=ii,ot=ii,Oe=tt}if(rt.done)return a(L,Oe),at&&ha(L,Qe),Re;if(Oe===null){for(;!rt.done;Qe++,rt=X.next())rt=de(L,rt.value,se),rt!==null&&(A=c(rt,A,Qe),ot===null?Re=rt:ot.sibling=rt,ot=rt);return at&&ha(L,Qe),Re}for(Oe=i(Oe);!rt.done;Qe++,rt=X.next())rt=V(Oe,L,Qe,rt.value,se),rt!==null&&(e&&rt.alternate!==null&&Oe.delete(rt.key===null?Qe:rt.key),A=c(rt,A,Qe),ot===null?Re=rt:ot.sibling=rt,ot=rt);return e&&Oe.forEach(function(sy){return n(L,sy)}),at&&ha(L,Qe),Re}function bt(L,A,X,se){if(typeof X=="object"&&X!==null&&X.type===Q&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case $:e:{for(var Re=X.key;A!==null;){if(A.key===Re){if(Re=X.type,Re===Q){if(A.tag===7){a(L,A.sibling),se=r(A,X.props.children),se.return=L,L=se;break e}}else if(A.elementType===Re||typeof Re=="object"&&Re!==null&&Re.$$typeof===F&&ki(Re)===A.type){a(L,A.sibling),se=r(A,X.props),Ol(se,X),se.return=L,L=se;break e}a(L,A);break}else n(L,A);A=A.sibling}X.type===Q?(se=ji(X.props.children,L.mode,se,X.key),se.return=L,L=se):(se=Os(X.type,X.key,X.props,null,L.mode,se),Ol(se,X),se.return=L,L=se)}return p(L);case I:e:{for(Re=X.key;A!==null;){if(A.key===Re)if(A.tag===4&&A.stateNode.containerInfo===X.containerInfo&&A.stateNode.implementation===X.implementation){a(L,A.sibling),se=r(A,X.children||[]),se.return=L,L=se;break e}else{a(L,A);break}else n(L,A);A=A.sibling}se=zr(X,L.mode,se),se.return=L,L=se}return p(L);case F:return X=ki(X),bt(L,A,X,se)}if(ce(X))return Ee(L,A,X,se);if(O(X)){if(Re=O(X),typeof Re!="function")throw Error(d(150));return X=Re.call(X),He(L,A,X,se)}if(typeof X.then=="function")return bt(L,A,Gs(X),se);if(X.$$typeof===U)return bt(L,A,Hs(L,X),se);$s(L,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,A!==null&&A.tag===6?(a(L,A.sibling),se=r(A,X),se.return=L,L=se):(a(L,A),se=Cr(X,L.mode,se),se.return=L,L=se),p(L)):a(L,A)}return function(L,A,X,se){try{Dl=0;var Re=bt(L,A,X,se);return Ii=null,Re}catch(Oe){if(Oe===Wi||Oe===qs)throw Oe;var ot=kn(29,Oe,null,L.mode);return ot.lanes=se,ot.return=L,ot}finally{}}}var zi=cp(!0),dp=cp(!1),Ga=!1;function Br(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Gr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function $a(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ya(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(dt&2)!==0){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,n=Ds(e),Ku(e,null,a),n}return As(e,i,n,a),Ds(e)}function Ul(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,ue(e,a)}}function $r(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Yr=!1;function Rl(){if(Yr){var e=Pi;if(e!==null)throw e}}function Hl(e,n,a,i){Yr=!1;var r=e.updateQueue;Ga=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var T=x,Z=T.next;T.next=null,p===null?c=Z:p.next=Z,p=T;var ee=e.alternate;ee!==null&&(ee=ee.updateQueue,x=ee.lastBaseUpdate,x!==p&&(x===null?ee.firstBaseUpdate=Z:x.next=Z,ee.lastBaseUpdate=T))}if(c!==null){var de=r.baseState;p=0,ee=Z=T=null,x=c;do{var K=x.lane&-536870913,V=K!==x.lane;if(V?(et&K)===K:(i&K)===K){K!==0&&K===Vi&&(Yr=!0),ee!==null&&(ee=ee.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var Ee=e,He=x;K=n;var bt=a;switch(He.tag){case 1:if(Ee=He.payload,typeof Ee=="function"){de=Ee.call(bt,de,K);break e}de=Ee;break e;case 3:Ee.flags=Ee.flags&-65537|128;case 0:if(Ee=He.payload,K=typeof Ee=="function"?Ee.call(bt,de,K):Ee,K==null)break e;de=S({},de,K);break e;case 2:Ga=!0}}K=x.callback,K!==null&&(e.flags|=64,V&&(e.flags|=8192),V=r.callbacks,V===null?r.callbacks=[K]:V.push(K))}else V={lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},ee===null?(Z=ee=V,T=de):ee=ee.next=V,p|=K;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;V=x,x=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null}}while(!0);ee===null&&(T=de),r.baseState=T,r.firstBaseUpdate=Z,r.lastBaseUpdate=ee,c===null&&(r.shared.lanes=0),Fa|=p,e.lanes=p,e.memoizedState=de}}function up(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function pp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)up(a[e],n)}var el=C(null),Ys=C(0);function mp(e,n){e=ka,pe(Ys,e),pe(el,n),ka=e|n.baseLanes}function Qr(){pe(Ys,ka),pe(el,el.current)}function Xr(){ka=Ys.current,B(el),B(Ys)}var Cn=C(null),Yn=null;function Qa(e){var n=e.alternate;pe(Rt,Rt.current&1),pe(Cn,e),Yn===null&&(n===null||el.current!==null||n.memoizedState!==null)&&(Yn=e)}function Zr(e){pe(Rt,Rt.current),pe(Cn,e),Yn===null&&(Yn=e)}function fp(e){e.tag===22?(pe(Rt,Rt.current),pe(Cn,e),Yn===null&&(Yn=e)):Xa()}function Xa(){pe(Rt,Rt.current),pe(Cn,Cn.current)}function zn(e){B(Cn),Yn===e&&(Yn=null),B(Rt)}var Rt=C(0);function Qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Wc(a)||Ic(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ga=0,Ye=null,ht=null,Xt=null,Xs=!1,tl=!1,Ti=!1,Zs=0,Ll=0,nl=null,Vb=0;function Mt(){throw Error(d(321))}function Kr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Sn(e[a],n[a]))return!1;return!0}function Fr(e,n,a,i,r,c){return ga=c,Ye=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,v.H=e===null||e.memoizedState===null?Pp:cc,Ti=!1,c=a(i,r),Ti=!1,tl&&(c=xp(n,a,i,r)),hp(e),c}function hp(e){v.H=Gl;var n=ht!==null&&ht.next!==null;if(ga=0,Xt=ht=Ye=null,Xs=!1,Ll=0,nl=null,n)throw Error(d(300));e===null||Zt||(e=e.dependencies,e!==null&&Rs(e)&&(Zt=!0))}function xp(e,n,a,i){Ye=e;var r=0;do{if(tl&&(nl=null),Ll=0,tl=!1,25<=r)throw Error(d(301));if(r+=1,Xt=ht=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}v.H=Wp,c=n(a,i)}while(tl);return c}function Pb(){var e=v.H,n=e.useState()[0];return n=typeof n.then=="function"?ql(n):n,e=e.useState()[0],(ht!==null?ht.memoizedState:null)!==e&&(Ye.flags|=1024),n}function Jr(){var e=Zs!==0;return Zs=0,e}function Vr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Pr(e){if(Xs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xs=!1}ga=0,Xt=ht=Ye=null,tl=!1,Ll=Zs=0,nl=null}function xn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Xt===null?Ye.memoizedState=Xt=e:Xt=Xt.next=e,Xt}function Ht(){if(ht===null){var e=Ye.alternate;e=e!==null?e.memoizedState:null}else e=ht.next;var n=Xt===null?Ye.memoizedState:Xt.next;if(n!==null)Xt=n,ht=e;else{if(e===null)throw Ye.alternate===null?Error(d(467)):Error(d(310));ht=e,e={memoizedState:ht.memoizedState,baseState:ht.baseState,baseQueue:ht.baseQueue,queue:ht.queue,next:null},Xt===null?Ye.memoizedState=Xt=e:Xt=Xt.next=e}return Xt}function Ks(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ql(e){var n=Ll;return Ll+=1,nl===null&&(nl=[]),e=sp(nl,e,n),n=Ye,(Xt===null?n.memoizedState:Xt.next)===null&&(n=n.alternate,v.H=n===null||n.memoizedState===null?Pp:cc),e}function Fs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ql(e);if(e.$$typeof===U)return ln(e)}throw Error(d(438,String(e)))}function Wr(e){var n=null,a=Ye.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=Ye.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ks(),Ye.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=ve;return n.index++,a}function ya(e,n){return typeof n=="function"?n(e):n}function Js(e){var n=Ht();return Ir(n,ht,e)}function Ir(e,n,a){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var x=p=null,T=null,Z=n,ee=!1;do{var de=Z.lane&-536870913;if(de!==Z.lane?(et&de)===de:(ga&de)===de){var K=Z.revertLane;if(K===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),de===Vi&&(ee=!0);else if((ga&K)===K){Z=Z.next,K===Vi&&(ee=!0);continue}else de={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},T===null?(x=T=de,p=c):T=T.next=de,Ye.lanes|=K,Fa|=K;de=Z.action,Ti&&a(c,de),c=Z.hasEagerState?Z.eagerState:a(c,de)}else K={lane:de,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},T===null?(x=T=K,p=c):T=T.next=K,Ye.lanes|=de,Fa|=de;Z=Z.next}while(Z!==null&&Z!==n);if(T===null?p=c:T.next=x,!Sn(c,e.memoizedState)&&(Zt=!0,ee&&(a=Pi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=T,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ec(e){var n=Ht(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);Sn(c,n.memoizedState)||(Zt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,i]}function bp(e,n,a){var i=Ye,r=Ht(),c=at;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!Sn((ht||r).memoizedState,a);if(p&&(r.memoizedState=a,Zt=!0),r=r.queue,ac(vp.bind(null,i,r,e),[e]),r.getSnapshot!==n||p||Xt!==null&&Xt.memoizedState.tag&1){if(i.flags|=2048,al(9,{destroy:void 0},yp.bind(null,i,r,a,n),null),gt===null)throw Error(d(349));c||(ga&127)!==0||gp(i,n,a)}return a}function gp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ye.updateQueue,n===null?(n=Ks(),Ye.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function yp(e,n,a,i){n.value=a,n.getSnapshot=i,jp(n)&&wp(e)}function vp(e,n,a){return a(function(){jp(n)&&wp(e)})}function jp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Sn(e,a)}catch{return!0}}function wp(e){var n=vi(e,2);n!==null&&_n(n,e,2)}function tc(e){var n=xn();if(typeof e=="function"){var a=e;if(e=a(),Ti){Ve(!0);try{a()}finally{Ve(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:e},n}function _p(e,n,a,i){return e.baseState=a,Ir(e,ht,typeof i=="function"?i:ya)}function Wb(e,n,a,i,r){if(Ws(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};v.T!==null?a(!0):c.isTransition=!1,i(c),a=n.pending,a===null?(c.next=n.pending=c,Np(n,c)):(c.next=a.next,n.pending=a.next=c)}}function Np(e,n){var a=n.action,i=n.payload,r=e.state;if(n.isTransition){var c=v.T,p={};v.T=p;try{var x=a(r,i),T=v.S;T!==null&&T(p,x),Sp(e,n,x)}catch(Z){nc(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),v.T=c}}else try{c=a(r,i),Sp(e,n,c)}catch(Z){nc(e,n,Z)}}function Sp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){kp(e,n,i)},function(i){return nc(e,n,i)}):kp(e,n,a)}function kp(e,n,a){n.status="fulfilled",n.value=a,Cp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Np(e,a)))}function nc(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==i)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function zp(e,n){return n}function Tp(e,n){if(at){var a=gt.formState;if(a!==null){e:{var i=Ye;if(at){if(jt){t:{for(var r=jt,c=$n;r.nodeType!==8;){if(!c){r=null;break t}if(r=Qn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){jt=Qn(r.nextSibling),i=r.data==="F!";break e}}qa(i)}i=!1}i&&(n=a[0])}}return a=xn(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zp,lastRenderedState:n},a.queue=i,a=Fp.bind(null,Ye,i),i.dispatch=a,i=tc(!1),c=rc.bind(null,Ye,!1,i.queue),i=xn(),r={state:n,dispatch:null,action:e,pending:null},i.queue=r,a=Wb.bind(null,Ye,r,c,a),r.dispatch=a,i.memoizedState=e,[n,a,!1]}function Ep(e){var n=Ht();return Mp(n,ht,e)}function Mp(e,n,a){if(n=Ir(e,n,zp)[0],e=Js(ya)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=ql(n)}catch(p){throw p===Wi?qs:p}else i=n;n=Ht();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Ye.flags|=2048,al(9,{destroy:void 0},Ib.bind(null,r,a),null)),[i,c,e]}function Ib(e,n){e.action=n}function Ap(e){var n=Ht(),a=ht;if(a!==null)return Mp(n,a,e);Ht(),n=n.memoizedState,a=Ht();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function al(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=Ye.updateQueue,n===null&&(n=Ks(),Ye.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Dp(){return Ht().memoizedState}function Vs(e,n,a,i){var r=xn();Ye.flags|=e,r.memoizedState=al(1|n,{destroy:void 0},a,i===void 0?null:i)}function Ps(e,n,a,i){var r=Ht();i=i===void 0?null:i;var c=r.memoizedState.inst;ht!==null&&i!==null&&Kr(i,ht.memoizedState.deps)?r.memoizedState=al(n,c,a,i):(Ye.flags|=e,r.memoizedState=al(1|n,c,a,i))}function Op(e,n){Vs(8390656,8,e,n)}function ac(e,n){Ps(2048,8,e,n)}function eg(e){Ye.flags|=4;var n=Ye.updateQueue;if(n===null)n=Ks(),Ye.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Up(e){var n=Ht().memoizedState;return eg({ref:n,nextImpl:e}),function(){if((dt&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function Rp(e,n){return Ps(4,2,e,n)}function Hp(e,n){return Ps(4,4,e,n)}function Lp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function qp(e,n,a){a=a!=null?a.concat([e]):null,Ps(4,4,Lp.bind(null,n,e),a)}function ic(){}function Bp(e,n){var a=Ht();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Kr(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=Ht();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Kr(n,i[1]))return i[0];if(i=e(),Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[i,n],i}function lc(e,n,a){return a===void 0||(ga&1073741824)!==0&&(et&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$m(),Ye.lanes|=e,Fa|=e,a)}function $p(e,n,a,i){return Sn(a,n)?a:el.current!==null?(e=lc(e,a,i),Sn(e,n)||(Zt=!0),e):(ga&42)===0||(ga&1073741824)!==0&&(et&261930)===0?(Zt=!0,e.memoizedState=a):(e=$m(),Ye.lanes|=e,Fa|=e,n)}function Yp(e,n,a,i,r){var c=H.p;H.p=c!==0&&8>c?c:8;var p=v.T,x={};v.T=x,rc(e,!1,n,a);try{var T=r(),Z=v.S;if(Z!==null&&Z(x,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var ee=Jb(T,i);Bl(e,n,ee,Mn(e))}else Bl(e,n,i,Mn(e))}catch(de){Bl(e,n,{then:function(){},status:"rejected",reason:de},Mn())}finally{H.p=c,p!==null&&x.types!==null&&(p.types=x.types),v.T=p}}function tg(){}function sc(e,n,a,i){if(e.tag!==5)throw Error(d(476));var r=Qp(e).queue;Yp(e,r,n,z,a===null?tg:function(){return Xp(e),a(i)})}function Qp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Xp(e){var n=Qp(e);n.next===null&&(n=e.alternate.memoizedState),Bl(e,n.next.queue,{},Mn())}function oc(){return ln(as)}function Zp(){return Ht().memoizedState}function Kp(){return Ht().memoizedState}function ng(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Mn();e=$a(a);var i=Ya(n,e,a);i!==null&&(_n(i,n,a),Ul(i,n,a)),n={cache:Rr()},e.payload=n;return}n=n.return}}function ag(e,n,a){var i=Mn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ws(e)?Jp(n,a):(a=Sr(e,n,a,i),a!==null&&(_n(a,e,i),Vp(a,n,i)))}function Fp(e,n,a){var i=Mn();Bl(e,n,a,i)}function Bl(e,n,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ws(e))Jp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,x=c(p,a);if(r.hasEagerState=!0,r.eagerState=x,Sn(x,p))return As(e,n,r,0),gt===null&&Ms(),!1}catch{}finally{}if(a=Sr(e,n,r,i),a!==null)return _n(a,e,i),Vp(a,n,i),!0}return!1}function rc(e,n,a,i){if(i={lane:2,revertLane:Bc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ws(e)){if(n)throw Error(d(479))}else n=Sr(e,a,i,2),n!==null&&_n(n,e,2)}function Ws(e){var n=e.alternate;return e===Ye||n!==null&&n===Ye}function Jp(e,n){tl=Xs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Vp(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,ue(e,a)}}var Gl={readContext:ln,use:Fs,useCallback:Mt,useContext:Mt,useEffect:Mt,useImperativeHandle:Mt,useLayoutEffect:Mt,useInsertionEffect:Mt,useMemo:Mt,useReducer:Mt,useRef:Mt,useState:Mt,useDebugValue:Mt,useDeferredValue:Mt,useTransition:Mt,useSyncExternalStore:Mt,useId:Mt,useHostTransitionStatus:Mt,useFormState:Mt,useActionState:Mt,useOptimistic:Mt,useMemoCache:Mt,useCacheRefresh:Mt};Gl.useEffectEvent=Mt;var Pp={readContext:ln,use:Fs,useCallback:function(e,n){return xn().memoizedState=[e,n===void 0?null:n],e},useContext:ln,useEffect:Op,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,Lp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){Vs(4,2,e,n)},useMemo:function(e,n){var a=xn();n=n===void 0?null:n;var i=e();if(Ti){Ve(!0);try{e()}finally{Ve(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=xn();if(a!==void 0){var r=a(n);if(Ti){Ve(!0);try{a(n)}finally{Ve(!1)}}}else r=n;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=ag.bind(null,Ye,e),[i.memoizedState,e]},useRef:function(e){var n=xn();return e={current:e},n.memoizedState=e},useState:function(e){e=tc(e);var n=e.queue,a=Fp.bind(null,Ye,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ic,useDeferredValue:function(e,n){var a=xn();return lc(a,e,n)},useTransition:function(){var e=tc(!1);return e=Yp.bind(null,Ye,e.queue,!0,!1),xn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=Ye,r=xn();if(at){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),gt===null)throw Error(d(349));(et&127)!==0||gp(i,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Op(vp.bind(null,i,c,e),[e]),i.flags|=2048,al(9,{destroy:void 0},yp.bind(null,i,c,a,n),null),a},useId:function(){var e=xn(),n=gt.identifierPrefix;if(at){var a=aa,i=na;a=(i&~(1<<32-st(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Vb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:oc,useFormState:Tp,useActionState:Tp,useOptimistic:function(e){var n=xn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=rc.bind(null,Ye,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wr,useCacheRefresh:function(){return xn().memoizedState=ng.bind(null,Ye)},useEffectEvent:function(e){var n=xn(),a={impl:e};return n.memoizedState=a,function(){if((dt&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},cc={readContext:ln,use:Fs,useCallback:Bp,useContext:ln,useEffect:ac,useImperativeHandle:qp,useInsertionEffect:Rp,useLayoutEffect:Hp,useMemo:Gp,useReducer:Js,useRef:Dp,useState:function(){return Js(ya)},useDebugValue:ic,useDeferredValue:function(e,n){var a=Ht();return $p(a,ht.memoizedState,e,n)},useTransition:function(){var e=Js(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:bp,useId:Zp,useHostTransitionStatus:oc,useFormState:Ep,useActionState:Ep,useOptimistic:function(e,n){var a=Ht();return _p(a,ht,e,n)},useMemoCache:Wr,useCacheRefresh:Kp};cc.useEffectEvent=Up;var Wp={readContext:ln,use:Fs,useCallback:Bp,useContext:ln,useEffect:ac,useImperativeHandle:qp,useInsertionEffect:Rp,useLayoutEffect:Hp,useMemo:Gp,useReducer:ec,useRef:Dp,useState:function(){return ec(ya)},useDebugValue:ic,useDeferredValue:function(e,n){var a=Ht();return ht===null?lc(a,e,n):$p(a,ht.memoizedState,e,n)},useTransition:function(){var e=ec(ya)[0],n=Ht().memoizedState;return[typeof e=="boolean"?e:ql(e),n]},useSyncExternalStore:bp,useId:Zp,useHostTransitionStatus:oc,useFormState:Ap,useActionState:Ap,useOptimistic:function(e,n){var a=Ht();return ht!==null?_p(a,ht,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wr,useCacheRefresh:Kp};Wp.useEffectEvent=Up;function dc(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:S({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var uc={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=Mn(),r=$a(i);r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,i),n!==null&&(_n(n,e,i),Ul(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=Mn(),r=$a(i);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=Ya(e,r,i),n!==null&&(_n(n,e,i),Ul(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Mn(),i=$a(a);i.tag=2,n!=null&&(i.callback=n),n=Ya(e,i,a),n!==null&&(_n(n,e,a),Ul(n,e,a))}};function Ip(e,n,a,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):n.prototype&&n.prototype.isPureReactComponent?!Cl(a,i)||!Cl(r,c):!0}function em(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&uc.enqueueReplaceState(n,n.state,null)}function Ei(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=S({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function tm(e){Es(e)}function nm(e){console.error(e)}function am(e){Es(e)}function Is(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function im(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function pc(e,n,a){return a=$a(a),a.tag=3,a.payload={element:null},a.callback=function(){Is(e,n)},a}function lm(e){return e=$a(e),e.tag=3,e}function sm(e,n,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){im(n,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){im(n,a,i),typeof r!="function"&&(Ja===null?Ja=new Set([this]):Ja.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function ig(e,n,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Ji(n,a,r,!0),a=Cn.current,a!==null){switch(a.tag){case 31:case 13:return Yn===null?po():a.alternate===null&&At===0&&(At=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===Bs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),Hc(e,i,r)),!1;case 22:return a.flags|=65536,i===Bs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),Hc(e,i,r)),!1}throw Error(d(435,a.tag))}return Hc(e,i,r),po(),!1}if(at)return n=Cn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,i!==Mr&&(e=Error(d(422),{cause:i}),El(qn(e,a)))):(i!==Mr&&(n=Error(d(423),{cause:i}),El(qn(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=qn(i,a),r=pc(e.stateNode,i,r),$r(e,r),At!==4&&(At=2)),!1;var c=Error(d(520),{cause:i});if(c=qn(c,a),Jl===null?Jl=[c]:Jl.push(c),At!==4&&(At=2),n===null)return!0;i=qn(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=pc(a.stateNode,i,e),$r(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Ja===null||!Ja.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=lm(r),sm(r,e,a,i),$r(a,r),!1}a=a.return}while(a!==null);return!1}var mc=Error(d(461)),Zt=!1;function sn(e,n,a,i){n.child=e===null?dp(n,null,a,i):zi(n,e.child,a,i)}function om(e,n,a,i,r){a=a.render;var c=n.ref;if("ref"in i){var p={};for(var x in i)x!=="ref"&&(p[x]=i[x])}else p=i;return Ni(n),i=Fr(e,n,a,p,c,r),x=Jr(),e!==null&&!Zt?(Vr(e,n,r),va(e,n,r)):(at&&x&&Tr(n),n.flags|=1,sn(e,n,i,r),n.child)}function rm(e,n,a,i,r){if(e===null){var c=a.type;return typeof c=="function"&&!kr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,cm(e,n,c,i,r)):(e=Os(a.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!jc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Cl,a(p,i)&&e.ref===n.ref)return va(e,n,r)}return n.flags|=1,e=fa(c,i),e.ref=n.ref,e.return=n,n.child=e}function cm(e,n,a,i,r){if(e!==null){var c=e.memoizedProps;if(Cl(c,i)&&e.ref===n.ref)if(Zt=!1,n.pendingProps=i=c,jc(e,r))(e.flags&131072)!==0&&(Zt=!0);else return n.lanes=e.lanes,va(e,n,r)}return fc(e,n,a,i,r)}function dm(e,n,a,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=n.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,n.child=null;return um(e,n,c,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ls(n,c!==null?c.cachePool:null),c!==null?mp(n,c):Qr(),fp(n);else return i=n.lanes=536870912,um(e,n,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(Ls(n,c.cachePool),mp(n,c),Xa(),n.memoizedState=null):(e!==null&&Ls(n,null),Qr(),Xa());return sn(e,n,r,a),n.child}function $l(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function um(e,n,a,i,r){var c=Lr();return c=c===null?null:{parent:Qt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Ls(n,null),Qr(),fp(n),e!==null&&Ji(e,n,i,!0),n.childLanes=r,null}function eo(e,n){return n=no({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function pm(e,n,a){return zi(n,e.child,null,a),e=eo(n,n.pendingProps),e.flags|=2,zn(n),n.memoizedState=null,e}function lg(e,n,a){var i=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(at){if(i.mode==="hidden")return e=eo(n,i),n.lanes=536870912,$l(null,e);if(Zr(n),(e=jt)?(e=Sf(e,$n),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:na,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=n,n.child=a,an=n,jt=null)):e=null,e===null)throw qa(n);return n.lanes=536870912,null}return eo(n,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Zr(n),r)if(n.flags&256)n.flags&=-257,n=pm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Zt||Ji(e,n,a,!1),r=(a&e.childLanes)!==0,Zt||r){if(i=gt,i!==null&&(p=Ce(i,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,vi(e,p),_n(i,e,p),mc;po(),n=pm(e,n,a)}else e=c.treeContext,jt=Qn(p.nextSibling),an=n,at=!0,La=null,$n=!1,e!==null&&Wu(n,e),n=eo(n,i),n.flags|=4096;return n}return e=fa(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function to(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function fc(e,n,a,i,r){return Ni(n),a=Fr(e,n,a,i,void 0,r),i=Jr(),e!==null&&!Zt?(Vr(e,n,r),va(e,n,r)):(at&&i&&Tr(n),n.flags|=1,sn(e,n,a,r),n.child)}function mm(e,n,a,i,r,c){return Ni(n),n.updateQueue=null,a=xp(n,i,a,r),hp(e),i=Jr(),e!==null&&!Zt?(Vr(e,n,c),va(e,n,c)):(at&&i&&Tr(n),n.flags|=1,sn(e,n,a,c),n.child)}function fm(e,n,a,i,r){if(Ni(n),n.stateNode===null){var c=Xi,p=a.contextType;typeof p=="object"&&p!==null&&(c=ln(p)),c=new a(i,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=uc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=i,c.state=n.memoizedState,c.refs={},Br(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?ln(p):Xi,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(dc(n,a,p,i),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&uc.enqueueReplaceState(c,c.state,null),Hl(n,i,c,r),Rl(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){c=n.stateNode;var x=n.memoizedProps,T=Ei(a,x);c.props=T;var Z=c.context,ee=a.contextType;p=Xi,typeof ee=="object"&&ee!==null&&(p=ln(ee));var de=a.getDerivedStateFromProps;ee=typeof de=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=n.pendingProps!==x,ee||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||Z!==p)&&em(n,c,i,p),Ga=!1;var K=n.memoizedState;c.state=K,Hl(n,i,c,r),Rl(),Z=n.memoizedState,x||K!==Z||Ga?(typeof de=="function"&&(dc(n,a,de,i),Z=n.memoizedState),(T=Ga||Ip(n,a,T,i,K,Z,p))?(ee||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Z),c.props=i,c.state=Z,c.context=p,i=T):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{c=n.stateNode,Gr(e,n),p=n.memoizedProps,ee=Ei(a,p),c.props=ee,de=n.pendingProps,K=c.context,Z=a.contextType,T=Xi,typeof Z=="object"&&Z!==null&&(T=ln(Z)),x=a.getDerivedStateFromProps,(Z=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==de||K!==T)&&em(n,c,i,T),Ga=!1,K=n.memoizedState,c.state=K,Hl(n,i,c,r),Rl();var V=n.memoizedState;p!==de||K!==V||Ga||e!==null&&e.dependencies!==null&&Rs(e.dependencies)?(typeof x=="function"&&(dc(n,a,x,i),V=n.memoizedState),(ee=Ga||Ip(n,a,ee,i,K,V,T)||e!==null&&e.dependencies!==null&&Rs(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,V,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,V,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=V),c.props=i,c.state=V,c.context=T,i=ee):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),i=!1)}return c=i,to(e,n),i=(n.flags&128)!==0,c||i?(c=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&i?(n.child=zi(n,e.child,null,r),n.child=zi(n,null,a,r)):sn(e,n,a,r),n.memoizedState=c.state,e=n.child):e=va(e,n,r),e}function hm(e,n,a,i){return wi(),n.flags|=256,sn(e,n,a,i),n.child}var hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function xc(e){return{baseLanes:e,cachePool:ip()}}function bc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=En),e}function xm(e,n,a){var i=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Rt.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(at){if(r?Qa(n):Xa(),(e=jt)?(e=Sf(e,$n),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ha!==null?{id:na,overflow:aa}:null,retryLane:536870912,hydrationErrors:null},a=Ju(e),a.return=n,n.child=a,an=n,jt=null)):e=null,e===null)throw qa(n);return Ic(e)?n.lanes=32:n.lanes=536870912,null}var x=i.children;return i=i.fallback,r?(Xa(),r=n.mode,x=no({mode:"hidden",children:x},r),i=ji(i,r,a,null),x.return=n,i.return=n,x.sibling=i,n.child=x,i=n.child,i.memoizedState=xc(a),i.childLanes=bc(e,p,a),n.memoizedState=hc,$l(null,i)):(Qa(n),gc(n,x))}var T=e.memoizedState;if(T!==null&&(x=T.dehydrated,x!==null)){if(c)n.flags&256?(Qa(n),n.flags&=-257,n=yc(e,n,a)):n.memoizedState!==null?(Xa(),n.child=e.child,n.flags|=128,n=null):(Xa(),x=i.fallback,r=n.mode,i=no({mode:"visible",children:i.children},r),x=ji(x,r,a,null),x.flags|=2,i.return=n,x.return=n,i.sibling=x,n.child=i,zi(n,e.child,null,a),i=n.child,i.memoizedState=xc(a),i.childLanes=bc(e,p,a),n.memoizedState=hc,n=$l(null,i));else if(Qa(n),Ic(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var Z=p.dgst;p=Z,i=Error(d(419)),i.stack="",i.digest=p,El({value:i,source:null,stack:null}),n=yc(e,n,a)}else if(Zt||Ji(e,n,a,!1),p=(a&e.childLanes)!==0,Zt||p){if(p=gt,p!==null&&(i=Ce(p,a),i!==0&&i!==T.retryLane))throw T.retryLane=i,vi(e,i),_n(p,e,i),mc;Wc(x)||po(),n=yc(e,n,a)}else Wc(x)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,jt=Qn(x.nextSibling),an=n,at=!0,La=null,$n=!1,e!==null&&Wu(n,e),n=gc(n,i.children),n.flags|=4096);return n}return r?(Xa(),x=i.fallback,r=n.mode,T=e.child,Z=T.sibling,i=fa(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,Z!==null?x=fa(Z,x):(x=ji(x,r,a,null),x.flags|=2),x.return=n,i.return=n,i.sibling=x,n.child=i,$l(null,i),i=n.child,x=e.child.memoizedState,x===null?x=xc(a):(r=x.cachePool,r!==null?(T=Qt._currentValue,r=r.parent!==T?{parent:T,pool:T}:r):r=ip(),x={baseLanes:x.baseLanes|a,cachePool:r}),i.memoizedState=x,i.childLanes=bc(e,p,a),n.memoizedState=hc,$l(e.child,i)):(Qa(n),a=e.child,e=a.sibling,a=fa(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function gc(e,n){return n=no({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function no(e,n){return e=kn(22,e,null,n),e.lanes=0,e}function yc(e,n,a){return zi(n,e.child,null,a),e=gc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function bm(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Or(e.return,n,a)}function vc(e,n,a,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function gm(e,n,a){var i=n.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=Rt.current,x=(p&2)!==0;if(x?(p=p&1|2,n.flags|=128):p&=1,pe(Rt,p),sn(e,n,i,a),i=at?Tl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&bm(e,a,n);else if(e.tag===19)bm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Qs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),vc(n,!1,r,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Qs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}vc(n,!0,a,null,c,i);break;case"together":vc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function va(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Fa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ji(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=fa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=fa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function jc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Rs(e)))}function sg(e,n,a){switch(n.tag){case 3:D(n,n.stateNode.containerInfo),Ba(n,Qt,e.memoizedState.cache),wi();break;case 27:case 5:me(n);break;case 4:D(n,n.stateNode.containerInfo);break;case 10:Ba(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Zr(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Qa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?xm(e,n,a):(Qa(n),e=va(e,n,a),e!==null?e.sibling:null);Qa(n);break;case 19:var r=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Ji(e,n,a,!1),i=(a&n.childLanes)!==0),r){if(i)return gm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(Rt,Rt.current),i)break;return null;case 22:return n.lanes=0,dm(e,n,a,n.pendingProps);case 24:Ba(n,Qt,e.memoizedState.cache)}return va(e,n,a)}function ym(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Zt=!0;else{if(!jc(e,a)&&(n.flags&128)===0)return Zt=!1,sg(e,n,a);Zt=(e.flags&131072)!==0}else Zt=!1,at&&(n.flags&1048576)!==0&&Pu(n,Tl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=ki(n.elementType),n.type=e,typeof e=="function")kr(e)?(i=Ei(e,i),n.tag=1,n=fm(null,n,e,i,a)):(n.tag=0,n=fc(null,n,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===ne){n.tag=11,n=om(null,n,e,i,a);break e}else if(r===E){n.tag=14,n=rm(null,n,e,i,a);break e}}throw n=G(e)||e,Error(d(306,n,""))}}return n;case 0:return fc(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,r=Ei(i,n.pendingProps),fm(e,n,i,r,a);case 3:e:{if(D(n,n.stateNode.containerInfo),e===null)throw Error(d(387));i=n.pendingProps;var c=n.memoizedState;r=c.element,Gr(e,n),Hl(n,i,null,a);var p=n.memoizedState;if(i=p.cache,Ba(n,Qt,i),i!==c.cache&&Ur(n,[Qt],a,!0),Rl(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=hm(e,n,i,a);break e}else if(i!==r){r=qn(Error(d(424)),n),El(r),n=hm(e,n,i,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=Qn(e.firstChild),an=n,at=!0,La=null,$n=!0,a=dp(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(wi(),i===r){n=va(e,n,a);break e}sn(e,n,i,a)}n=n.child}return n;case 26:return to(e,n),e===null?(a=Mf(n.type,null,n.pendingProps,null))?n.memoizedState=a:at||(a=n.type,e=n.pendingProps,i=yo(Ne.current).createElement(a),i[Ut]=n,i[zt]=e,on(i,a,e),It(i),n.stateNode=i):n.memoizedState=Mf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return me(n),e===null&&at&&(i=n.stateNode=zf(n.type,n.pendingProps,Ne.current),an=n,$n=!0,r=jt,Ia(n.type)?(ed=r,jt=Qn(i.firstChild)):jt=r),sn(e,n,n.pendingProps.children,a),to(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&at&&((r=i=jt)&&(i=Rg(i,n.type,n.pendingProps,$n),i!==null?(n.stateNode=i,an=n,jt=Qn(i.firstChild),$n=!1,r=!0):r=!1),r||qa(n)),me(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,Jc(r,c)?i=null:p!==null&&Jc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Fr(e,n,Pb,null,null,a),as._currentValue=r),to(e,n),sn(e,n,i,a),n.child;case 6:return e===null&&at&&((e=a=jt)&&(a=Hg(a,n.pendingProps,$n),a!==null?(n.stateNode=a,an=n,jt=null,e=!0):e=!1),e||qa(n)),null;case 13:return xm(e,n,a);case 4:return D(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=zi(n,null,i,a):sn(e,n,i,a),n.child;case 11:return om(e,n,n.type,n.pendingProps,a);case 7:return sn(e,n,n.pendingProps,a),n.child;case 8:return sn(e,n,n.pendingProps.children,a),n.child;case 12:return sn(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,Ba(n,n.type,i.value),sn(e,n,i.children,a),n.child;case 9:return r=n.type._context,i=n.pendingProps.children,Ni(n),r=ln(r),i=i(r),n.flags|=1,sn(e,n,i,a),n.child;case 14:return rm(e,n,n.type,n.pendingProps,a);case 15:return cm(e,n,n.type,n.pendingProps,a);case 19:return gm(e,n,a);case 31:return lg(e,n,a);case 22:return dm(e,n,a,n.pendingProps);case 24:return Ni(n),i=ln(Qt),e===null?(r=Lr(),r===null&&(r=gt,c=Rr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:i,cache:r},Br(n),Ba(n,Qt,r)):((e.lanes&a)!==0&&(Gr(e,n),Hl(n,null,null,a),Rl()),r=e.memoizedState,c=n.memoizedState,r.parent!==i?(r={parent:i,cache:i},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Ba(n,Qt,i)):(i=c.cache,Ba(n,Qt,i),i!==r.cache&&Ur(n,[Qt],a,!0))),sn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ja(e){e.flags|=4}function wc(e,n,a,i,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Zm())e.flags|=8192;else throw Ci=Bs,qr}else e.flags&=-16777217}function vm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Rf(n))if(Zm())e.flags|=8192;else throw Ci=Bs,qr}function ao(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Me():536870912,e.lanes|=n,ol|=n)}function Yl(e,n){if(!at)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function wt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function og(e,n,a){var i=n.pendingProps;switch(Er(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return wt(n),null;case 1:return wt(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ba(Qt),fe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fi(n)?ja(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ar())),wt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ja(n),c!==null?(wt(n),vm(n,c)):(wt(n),wc(n,r,null,i,a))):c?c!==e.memoizedState?(ja(n),wt(n),vm(n,c)):(wt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ja(n),wt(n),wc(n,r,e,i,a)),null;case 27:if(Le(n),a=Ne.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ja(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return wt(n),null}e=xe.current,Fi(n)?Iu(n):(e=zf(r,i,a),n.stateNode=e,ja(n))}return wt(n),null;case 5:if(Le(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ja(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return wt(n),null}if(c=xe.current,Fi(n))Iu(n);else{var p=yo(Ne.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[Ut]=n,c[zt]=i;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(on(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ja(n)}}return wt(n),wc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ja(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(d(166));if(e=Ne.current,Fi(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,r=an,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Ut]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||bf(e.nodeValue,a)),e||qa(n,!0)}else e=yo(e).createTextNode(i),e[Ut]=n,n.stateNode=e}return wt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Fi(n),a!==null){if(e===null){if(!i)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Ut]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;wt(n),e=!1}else a=Ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(zn(n),n):(zn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return wt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Fi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Ut]=n}else wi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;wt(n),r=!1}else r=Ar(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(zn(n),n):(zn(n),null)}return zn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),ao(n,n.updateQueue),wt(n),null);case 4:return fe(),e===null&&Qc(n.stateNode.containerInfo),wt(n),null;case 10:return ba(n.type),wt(n),null;case 19:if(B(Rt),i=n.memoizedState,i===null)return wt(n),null;if(r=(n.flags&128)!==0,c=i.rendering,c===null)if(r)Yl(i,!1);else{if(At!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Qs(e),c!==null){for(n.flags|=128,Yl(i,!1),e=c.updateQueue,n.updateQueue=e,ao(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Fu(a,e),a=a.sibling;return pe(Rt,Rt.current&1|2),at&&ha(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&Ae()>ro&&(n.flags|=128,r=!0,Yl(i,!1),n.lanes=4194304)}else{if(!r)if(e=Qs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,ao(n,e),Yl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!at)return wt(n),null}else 2*Ae()-i.renderingStartTime>ro&&a!==536870912&&(n.flags|=128,r=!0,Yl(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(e=i.last,e!==null?e.sibling=c:n.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Ae(),e.sibling=null,a=Rt.current,pe(Rt,r?a&1|2:a&1),at&&ha(n,i.treeForkCount),e):(wt(n),null);case 22:case 23:return zn(n),Xr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(wt(n),n.subtreeFlags&6&&(n.flags|=8192)):wt(n),a=n.updateQueue,a!==null&&ao(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&B(Si),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ba(Qt),wt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function rg(e,n){switch(Er(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ba(Qt),fe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Le(n),null;case 31:if(n.memoizedState!==null){if(zn(n),n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(zn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));wi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return B(Rt),null;case 4:return fe(),null;case 10:return ba(n.type),null;case 22:case 23:return zn(n),Xr(),e!==null&&B(Si),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ba(Qt),null;case 25:return null;default:return null}}function jm(e,n){switch(Er(n),n.tag){case 3:ba(Qt),fe();break;case 26:case 27:case 5:Le(n);break;case 4:fe();break;case 31:n.memoizedState!==null&&zn(n);break;case 13:zn(n);break;case 19:B(Rt);break;case 10:ba(n.type);break;case 22:case 23:zn(n),Xr(),e!==null&&B(Si);break;case 24:ba(Qt)}}function Ql(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var c=a.create,p=a.inst;i=c(),p.destroy=i}a=a.next}while(a!==r)}}catch(x){ft(n,n.return,x)}}function Za(e,n,a){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,r=n;var T=a,Z=x;try{Z()}catch(ee){ft(r,T,ee)}}}i=i.next}while(i!==c)}}catch(ee){ft(n,n.return,ee)}}function wm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{pp(n,a)}catch(i){ft(e,e.return,i)}}}function _m(e,n,a){a.props=Ei(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ft(e,n,i)}}function Xl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){ft(e,n,r)}}function ia(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){ft(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){ft(e,n,r)}else a.current=null}function Nm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){ft(e,e.return,r)}}function _c(e,n,a){try{var i=e.stateNode;Eg(i,e.type,a,n),i[zt]=n}catch(r){ft(e,e.return,r)}}function Sm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ia(e.type)||e.tag===4}function Nc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Sm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ia(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Sc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=pa));else if(i!==4&&(i===27&&Ia(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Sc(e,n,a),e=e.sibling;e!==null;)Sc(e,n,a),e=e.sibling}function io(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Ia(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(io(e,n,a),e=e.sibling;e!==null;)io(e,n,a),e=e.sibling}function km(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);on(n,i,a),n[Ut]=e,n[zt]=a}catch(c){ft(e,e.return,c)}}var wa=!1,Kt=!1,kc=!1,Cm=typeof WeakSet=="function"?WeakSet:Set,en=null;function cg(e,n){if(e=e.containerInfo,Kc=ko,e=qu(e),yr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,x=-1,T=-1,Z=0,ee=0,de=e,K=null;t:for(;;){for(var V;de!==a||r!==0&&de.nodeType!==3||(x=p+r),de!==c||i!==0&&de.nodeType!==3||(T=p+i),de.nodeType===3&&(p+=de.nodeValue.length),(V=de.firstChild)!==null;)K=de,de=V;for(;;){if(de===e)break t;if(K===a&&++Z===r&&(x=p),K===c&&++ee===i&&(T=p),(V=de.nextSibling)!==null)break;de=K,K=de.parentNode}de=V}a=x===-1||T===-1?null:{start:x,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:e,selectionRange:a},ko=!1,en=n;en!==null;)if(n=en,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,en=e;else for(;en!==null;){switch(n=en,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var Ee=Ei(a.type,r);e=i.getSnapshotBeforeUpdate(Ee,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(He){ft(a,a.return,He)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Pc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Pc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,en=e;break}en=n.return}}function zm(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Na(e,a),i&4&&Ql(5,a);break;case 1:if(Na(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){ft(a,a.return,p)}else{var r=Ei(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){ft(a,a.return,p)}}i&64&&wm(a),i&512&&Xl(a,a.return);break;case 3:if(Na(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{pp(e,n)}catch(p){ft(a,a.return,p)}}break;case 27:n===null&&i&4&&km(a);case 26:case 5:Na(e,a),n===null&&i&4&&Nm(a),i&512&&Xl(a,a.return);break;case 12:Na(e,a);break;case 31:Na(e,a),i&4&&Mm(e,a);break;case 13:Na(e,a),i&4&&Am(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=gg.bind(null,a),Lg(e,a))));break;case 22:if(i=a.memoizedState!==null||wa,!i){n=n!==null&&n.memoizedState!==null||Kt,r=wa;var c=Kt;wa=i,(Kt=n)&&!c?Sa(e,a,(a.subtreeFlags&8772)!==0):Na(e,a),wa=r,Kt=c}break;case 30:break;default:Na(e,a)}}function Tm(e){var n=e.alternate;n!==null&&(e.alternate=null,Tm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&bn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var St=null,yn=!1;function _a(e,n,a){for(a=a.child;a!==null;)Em(e,n,a),a=a.sibling}function Em(e,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Be,a)}catch{}switch(a.tag){case 26:Kt||ia(a,n),_a(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Kt||ia(a,n);var i=St,r=yn;Ia(a.type)&&(St=a.stateNode,yn=!1),_a(e,n,a),es(a.stateNode),St=i,yn=r;break;case 5:Kt||ia(a,n);case 6:if(i=St,r=yn,St=null,_a(e,n,a),St=i,yn=r,St!==null)if(yn)try{(St.nodeType===9?St.body:St.nodeName==="HTML"?St.ownerDocument.body:St).removeChild(a.stateNode)}catch(c){ft(a,n,c)}else try{St.removeChild(a.stateNode)}catch(c){ft(a,n,c)}break;case 18:St!==null&&(yn?(e=St,_f(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),hl(e)):_f(St,a.stateNode));break;case 4:i=St,r=yn,St=a.stateNode.containerInfo,yn=!0,_a(e,n,a),St=i,yn=r;break;case 0:case 11:case 14:case 15:Za(2,a,n),Kt||Za(4,a,n),_a(e,n,a);break;case 1:Kt||(ia(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&_m(a,n,i)),_a(e,n,a);break;case 21:_a(e,n,a);break;case 22:Kt=(i=Kt)||a.memoizedState!==null,_a(e,n,a),Kt=i;break;default:_a(e,n,a)}}function Mm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{hl(e)}catch(a){ft(n,n.return,a)}}}function Am(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{hl(e)}catch(a){ft(n,n.return,a)}}function dg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cm),n;default:throw Error(d(435,e.tag))}}function lo(e,n){var a=dg(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var r=yg.bind(null,e,i);i.then(r,r)}})}function vn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],c=e,p=n,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(Ia(x.type)){St=x.stateNode,yn=!1;break e}break;case 5:St=x.stateNode,yn=!1;break e;case 3:case 4:St=x.stateNode.containerInfo,yn=!0;break e}x=x.return}if(St===null)throw Error(d(160));Em(c,p,r),St=null,yn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Dm(n,e),n=n.sibling}var Vn=null;function Dm(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:vn(n,e),jn(e),i&4&&(Za(3,e,e.return),Ql(3,e),Za(5,e,e.return));break;case 1:vn(n,e),jn(e),i&512&&(Kt||a===null||ia(a,a.return)),i&64&&wa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=Vn;if(vn(n,e),jn(e),i&512&&(Kt||a===null||ia(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[it]||c[Ut]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),on(c,i,a),c[Ut]=e,It(c),i=c;break e;case"link":var p=Of("link","href",r).get(i+(a.href||""));if(p){for(var x=0;x<p.length;x++)if(c=p[x],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(x,1);break t}}c=r.createElement(i),on(c,i,a),r.head.appendChild(c);break;case"meta":if(p=Of("meta","content",r).get(i+(a.content||""))){for(x=0;x<p.length;x++)if(c=p[x],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(x,1);break t}}c=r.createElement(i),on(c,i,a),r.head.appendChild(c);break;default:throw Error(d(468,i))}c[Ut]=e,It(c),i=c}e.stateNode=i}else Uf(r,e.type,e.stateNode);else e.stateNode=Df(r,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Uf(r,e.type,e.stateNode):Df(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&_c(e,e.memoizedProps,a.memoizedProps)}break;case 27:vn(n,e),jn(e),i&512&&(Kt||a===null||ia(a,a.return)),a!==null&&i&4&&_c(e,e.memoizedProps,a.memoizedProps);break;case 5:if(vn(n,e),jn(e),i&512&&(Kt||a===null||ia(a,a.return)),e.flags&32){r=e.stateNode;try{Li(r,"")}catch(Ee){ft(e,e.return,Ee)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,_c(e,r,a!==null?a.memoizedProps:r)),i&1024&&(kc=!0);break;case 6:if(vn(n,e),jn(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(Ee){ft(e,e.return,Ee)}}break;case 3:if(wo=null,r=Vn,Vn=vo(n.containerInfo),vn(n,e),Vn=r,jn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{hl(n.containerInfo)}catch(Ee){ft(e,e.return,Ee)}kc&&(kc=!1,Om(e));break;case 4:i=Vn,Vn=vo(e.stateNode.containerInfo),vn(n,e),jn(e),Vn=i;break;case 12:vn(n,e),jn(e);break;case 31:vn(n,e),jn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,lo(e,i)));break;case 13:vn(n,e),jn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(oo=Ae()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,lo(e,i)));break;case 22:r=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,Z=wa,ee=Kt;if(wa=Z||r,Kt=ee||T,vn(n,e),Kt=ee,wa=Z,jn(e),i&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||T||wa||Kt||Mi(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){T=a=n;try{if(c=T.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=T.stateNode;var de=T.memoizedProps.style,K=de!=null&&de.hasOwnProperty("display")?de.display:null;x.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Ee){ft(T,T.return,Ee)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=r?"":T.memoizedProps}catch(Ee){ft(T,T.return,Ee)}}}else if(n.tag===18){if(a===null){T=n;try{var V=T.stateNode;r?Nf(V,!0):Nf(T.stateNode,!1)}catch(Ee){ft(T,T.return,Ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,lo(e,a))));break;case 19:vn(n,e),jn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,lo(e,i)));break;case 30:break;case 21:break;default:vn(n,e),jn(e)}}function jn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(Sm(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=Nc(e);io(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Li(p,""),a.flags&=-33);var x=Nc(e);io(e,x,p);break;case 3:case 4:var T=a.stateNode.containerInfo,Z=Nc(e);Sc(e,Z,T);break;default:throw Error(d(161))}}catch(ee){ft(e,e.return,ee)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Om(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Om(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Na(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)zm(e,n.alternate,n),n=n.sibling}function Mi(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Za(4,n,n.return),Mi(n);break;case 1:ia(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&_m(n,n.return,a),Mi(n);break;case 27:es(n.stateNode);case 26:case 5:ia(n,n.return),Mi(n);break;case 22:n.memoizedState===null&&Mi(n);break;case 30:Mi(n);break;default:Mi(n)}e=e.sibling}}function Sa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:Sa(r,c,a),Ql(4,c);break;case 1:if(Sa(r,c,a),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){ft(i,i.return,Z)}if(i=c,r=i.updateQueue,r!==null){var x=i.stateNode;try{var T=r.shared.hiddenCallbacks;if(T!==null)for(r.shared.hiddenCallbacks=null,r=0;r<T.length;r++)up(T[r],x)}catch(Z){ft(i,i.return,Z)}}a&&p&64&&wm(c),Xl(c,c.return);break;case 27:km(c);case 26:case 5:Sa(r,c,a),a&&i===null&&p&4&&Nm(c),Xl(c,c.return);break;case 12:Sa(r,c,a);break;case 31:Sa(r,c,a),a&&p&4&&Mm(r,c);break;case 13:Sa(r,c,a),a&&p&4&&Am(r,c);break;case 22:c.memoizedState===null&&Sa(r,c,a),Xl(c,c.return);break;case 30:break;default:Sa(r,c,a)}n=n.sibling}}function Cc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ml(a))}function zc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e))}function Pn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Um(e,n,a,i),n=n.sibling}function Um(e,n,a,i){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Pn(e,n,a,i),r&2048&&Ql(9,n);break;case 1:Pn(e,n,a,i);break;case 3:Pn(e,n,a,i),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ml(e)));break;case 12:if(r&2048){Pn(e,n,a,i),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,x=c.onPostCommit;typeof x=="function"&&x(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){ft(n,n.return,T)}}else Pn(e,n,a,i);break;case 31:Pn(e,n,a,i);break;case 13:Pn(e,n,a,i);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Pn(e,n,a,i):Zl(e,n):c._visibility&2?Pn(e,n,a,i):(c._visibility|=2,il(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),r&2048&&Cc(p,n);break;case 24:Pn(e,n,a,i),r&2048&&zc(n.alternate,n);break;default:Pn(e,n,a,i)}}function il(e,n,a,i,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,x=a,T=i,Z=p.flags;switch(p.tag){case 0:case 11:case 15:il(c,p,x,T,r),Ql(8,p);break;case 23:break;case 22:var ee=p.stateNode;p.memoizedState!==null?ee._visibility&2?il(c,p,x,T,r):Zl(c,p):(ee._visibility|=2,il(c,p,x,T,r)),r&&Z&2048&&Cc(p.alternate,p);break;case 24:il(c,p,x,T,r),r&&Z&2048&&zc(p.alternate,p);break;default:il(c,p,x,T,r)}n=n.sibling}}function Zl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,r=i.flags;switch(i.tag){case 22:Zl(a,i),r&2048&&Cc(i.alternate,i);break;case 24:Zl(a,i),r&2048&&zc(i.alternate,i);break;default:Zl(a,i)}n=n.sibling}}var Kl=8192;function ll(e,n,a){if(e.subtreeFlags&Kl)for(e=e.child;e!==null;)Rm(e,n,a),e=e.sibling}function Rm(e,n,a){switch(e.tag){case 26:ll(e,n,a),e.flags&Kl&&e.memoizedState!==null&&Vg(a,Vn,e.memoizedState,e.memoizedProps);break;case 5:ll(e,n,a);break;case 3:case 4:var i=Vn;Vn=vo(e.stateNode.containerInfo),ll(e,n,a),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Kl,Kl=16777216,ll(e,n,a),Kl=i):ll(e,n,a));break;default:ll(e,n,a)}}function Hm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Fl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];en=i,qm(i,e)}Hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Lm(e),e=e.sibling}function Lm(e){switch(e.tag){case 0:case 11:case 15:Fl(e),e.flags&2048&&Za(9,e,e.return);break;case 3:Fl(e);break;case 12:Fl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,so(e)):Fl(e);break;default:Fl(e)}}function so(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];en=i,qm(i,e)}Hm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Za(8,n,n.return),so(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,so(n));break;default:so(n)}e=e.sibling}}function qm(e,n){for(;en!==null;){var a=en;switch(a.tag){case 0:case 11:case 15:Za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Ml(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,en=i;else e:for(a=e;en!==null;){i=en;var r=i.sibling,c=i.return;if(Tm(i),i===a){en=null;break e}if(r!==null){r.return=c,en=r;break e}en=c}}}var ug={getCacheForType:function(e){var n=ln(Qt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return ln(Qt).controller.signal}},pg=typeof WeakMap=="function"?WeakMap:Map,dt=0,gt=null,Pe=null,et=0,mt=0,Tn=null,Ka=!1,sl=!1,Tc=!1,ka=0,At=0,Fa=0,Ai=0,Ec=0,En=0,ol=0,Jl=null,wn=null,Mc=!1,oo=0,Bm=0,ro=1/0,co=null,Ja=null,Ft=0,Va=null,rl=null,Ca=0,Ac=0,Dc=null,Gm=null,Vl=0,Oc=null;function Mn(){return(dt&2)!==0&&et!==0?et&-et:v.T!==null?Bc():ca()}function $m(){if(En===0)if((et&536870912)===0||at){var e=fn;fn<<=1,(fn&3932160)===0&&(fn=262144),En=e}else En=536870912;return e=Cn.current,e!==null&&(e.flags|=32),En}function _n(e,n,a){(e===gt&&(mt===2||mt===9)||e.cancelPendingCommit!==null)&&(cl(e,0),Pa(e,et,En,!1)),Ke(e,a),((dt&2)===0||e!==gt)&&(e===gt&&((dt&2)===0&&(Ai|=a),At===4&&Pa(e,et,En,!1)),la(e))}function Ym(e,n,a){if((dt&6)!==0)throw Error(d(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||le(e,n),r=i?hg(e,n):Rc(e,n,!0),c=i;do{if(r===0){sl&&!i&&Pa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!mg(a)){r=Rc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var x=e;r=Jl;var T=x.current.memoizedState.isDehydrated;if(T&&(cl(x,p).flags|=256),p=Rc(x,p,!1),p!==2){if(Tc&&!T){x.errorRecoveryDisabledLanes|=c,Ai|=c,r=4;break e}c=wn,wn=r,c!==null&&(wn===null?wn=c:wn.push.apply(wn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){cl(e,0),Pa(e,n,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Pa(i,n,En,!Ka);break e;case 2:wn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=oo+300-Ae(),10<r)){if(Pa(i,n,En,!Ka),R(i,0,!0)!==0)break e;Ca=n,i.timeoutHandle=jf(Qm.bind(null,i,a,wn,co,Mc,n,En,Ai,ol,Ka,c,"Throttled",-0,0),r);break e}Qm(i,a,wn,co,Mc,n,En,Ai,ol,Ka,c,null,-0,0)}}break}while(!0);la(e)}function Qm(e,n,a,i,r,c,p,x,T,Z,ee,de,K,V){if(e.timeoutHandle=-1,de=n.subtreeFlags,de&8192||(de&16785408)===16785408){de={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:pa},Rm(n,c,de);var Ee=(c&62914560)===c?oo-Ae():(c&4194048)===c?Bm-Ae():0;if(Ee=Pg(de,Ee),Ee!==null){Ca=c,e.cancelPendingCommit=Ee(Wm.bind(null,e,n,c,a,i,r,p,x,T,ee,de,null,K,V)),Pa(e,c,p,!Z);return}}Wm(e,n,c,a,i,r,p,x,T)}function mg(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],c=r.getSnapshot;r=r.value;try{if(!Sn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pa(e,n,a,i){n&=~Ec,n&=~Ai,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var r=n;0<r;){var c=31-st(r),p=1<<c;i[c]=-1,r&=~p}a!==0&&re(e,a,n)}function uo(){return(dt&6)===0?(Pl(0),!1):!0}function Uc(){if(Pe!==null){if(mt===0)var e=Pe.return;else e=Pe,xa=_i=null,Pr(e),Ii=null,Dl=0,e=Pe;for(;e!==null;)jm(e.alternate,e),e=e.return;Pe=null}}function cl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Dg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ca=0,Uc(),gt=e,Pe=a=fa(e.current,null),et=n,mt=0,Tn=null,Ka=!1,sl=le(e,n),Tc=!1,ol=En=Ec=Ai=Fa=At=0,wn=Jl=null,Mc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var r=31-st(i),c=1<<r;n|=e[r],i&=~c}return ka=n,Ms(),a}function Xm(e,n){Ye=null,v.H=Gl,n===Wi||n===qs?(n=op(),mt=3):n===qr?(n=op(),mt=4):mt=n===mc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Tn=n,Pe===null&&(At=1,Is(e,qn(n,e.current)))}function Zm(){var e=Cn.current;return e===null?!0:(et&4194048)===et?Yn===null:(et&62914560)===et||(et&536870912)!==0?e===Yn:!1}function Km(){var e=v.H;return v.H=Gl,e===null?Gl:e}function Fm(){var e=v.A;return v.A=ug,e}function po(){At=4,Ka||(et&4194048)!==et&&Cn.current!==null||(sl=!0),(Fa&134217727)===0&&(Ai&134217727)===0||gt===null||Pa(gt,et,En,!1)}function Rc(e,n,a){var i=dt;dt|=2;var r=Km(),c=Fm();(gt!==e||et!==n)&&(co=null,cl(e,n)),n=!1;var p=At;e:do try{if(mt!==0&&Pe!==null){var x=Pe,T=Tn;switch(mt){case 8:Uc(),p=6;break e;case 3:case 2:case 9:case 6:Cn.current===null&&(n=!0);var Z=mt;if(mt=0,Tn=null,dl(e,x,T,Z),a&&sl){p=0;break e}break;default:Z=mt,mt=0,Tn=null,dl(e,x,T,Z)}}fg(),p=At;break}catch(ee){Xm(e,ee)}while(!0);return n&&e.shellSuspendCounter++,xa=_i=null,dt=i,v.H=r,v.A=c,Pe===null&&(gt=null,et=0,Ms()),p}function fg(){for(;Pe!==null;)Jm(Pe)}function hg(e,n){var a=dt;dt|=2;var i=Km(),r=Fm();gt!==e||et!==n?(co=null,ro=Ae()+500,cl(e,n)):sl=le(e,n);e:do try{if(mt!==0&&Pe!==null){n=Pe;var c=Tn;t:switch(mt){case 1:mt=0,Tn=null,dl(e,n,c,1);break;case 2:case 9:if(lp(c)){mt=0,Tn=null,Vm(n);break}n=function(){mt!==2&&mt!==9||gt!==e||(mt=7),la(e)},c.then(n,n);break e;case 3:mt=7;break e;case 4:mt=5;break e;case 7:lp(c)?(mt=0,Tn=null,Vm(n)):(mt=0,Tn=null,dl(e,n,c,7));break;case 5:var p=null;switch(Pe.tag){case 26:p=Pe.memoizedState;case 5:case 27:var x=Pe;if(p?Rf(p):x.stateNode.complete){mt=0,Tn=null;var T=x.sibling;if(T!==null)Pe=T;else{var Z=x.return;Z!==null?(Pe=Z,mo(Z)):Pe=null}break t}}mt=0,Tn=null,dl(e,n,c,5);break;case 6:mt=0,Tn=null,dl(e,n,c,6);break;case 8:Uc(),At=6;break e;default:throw Error(d(462))}}xg();break}catch(ee){Xm(e,ee)}while(!0);return xa=_i=null,v.H=i,v.A=r,dt=a,Pe!==null?0:(gt=null,et=0,Ms(),At)}function xg(){for(;Pe!==null&&!ke();)Jm(Pe)}function Jm(e){var n=ym(e.alternate,e,ka);e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function Vm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=mm(a,n,n.pendingProps,n.type,void 0,et);break;case 11:n=mm(a,n,n.pendingProps,n.type.render,n.ref,et);break;case 5:Pr(n);default:jm(a,n),n=Pe=Fu(n,ka),n=ym(a,n,ka)}e.memoizedProps=e.pendingProps,n===null?mo(e):Pe=n}function dl(e,n,a,i){xa=_i=null,Pr(n),Ii=null,Dl=0;var r=n.return;try{if(ig(e,r,n,a,et)){At=1,Is(e,qn(a,e.current)),Pe=null;return}}catch(c){if(r!==null)throw Pe=r,c;At=1,Is(e,qn(a,e.current)),Pe=null;return}n.flags&32768?(at||i===1?e=!0:sl||(et&536870912)!==0?e=!1:(Ka=e=!0,(i===2||i===9||i===3||i===6)&&(i=Cn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Pm(n,e)):mo(n)}function mo(e){var n=e;do{if((n.flags&32768)!==0){Pm(n,Ka);return}e=n.return;var a=og(n.alternate,n,ka);if(a!==null){Pe=a;return}if(n=n.sibling,n!==null){Pe=n;return}Pe=n=e}while(n!==null);At===0&&(At=5)}function Pm(e,n){do{var a=rg(e.alternate,e);if(a!==null){a.flags&=32767,Pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Pe=e;return}Pe=e=a}while(e!==null);At=6,Pe=null}function Wm(e,n,a,i,r,c,p,x,T){e.cancelPendingCommit=null;do fo();while(Ft!==0);if((dt&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=Nr,y(e,a,c,p,x,T),e===gt&&(Pe=gt=null,et=0),rl=n,Va=e,Ca=a,Ac=c,Dc=r,Gm=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,vg(J,function(){return af(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=v.T,v.T=null,r=H.p,H.p=2,p=dt,dt|=4;try{cg(e,n,a)}finally{dt=p,H.p=r,v.T=i}}Ft=1,Im(),ef(),tf()}}function Im(){if(Ft===1){Ft=0;var e=Va,n=rl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=v.T,v.T=null;var i=H.p;H.p=2;var r=dt;dt|=4;try{Dm(n,e);var c=Fc,p=qu(e.containerInfo),x=c.focusedElem,T=c.selectionRange;if(p!==x&&x&&x.ownerDocument&&Lu(x.ownerDocument.documentElement,x)){if(T!==null&&yr(x)){var Z=T.start,ee=T.end;if(ee===void 0&&(ee=Z),"selectionStart"in x)x.selectionStart=Z,x.selectionEnd=Math.min(ee,x.value.length);else{var de=x.ownerDocument||document,K=de&&de.defaultView||window;if(K.getSelection){var V=K.getSelection(),Ee=x.textContent.length,He=Math.min(T.start,Ee),bt=T.end===void 0?He:Math.min(T.end,Ee);!V.extend&&He>bt&&(p=bt,bt=He,He=p);var L=Hu(x,He),A=Hu(x,bt);if(L&&A&&(V.rangeCount!==1||V.anchorNode!==L.node||V.anchorOffset!==L.offset||V.focusNode!==A.node||V.focusOffset!==A.offset)){var X=de.createRange();X.setStart(L.node,L.offset),V.removeAllRanges(),He>bt?(V.addRange(X),V.extend(A.node,A.offset)):(X.setEnd(A.node,A.offset),V.addRange(X))}}}}for(de=[],V=x;V=V.parentNode;)V.nodeType===1&&de.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<de.length;x++){var se=de[x];se.element.scrollLeft=se.left,se.element.scrollTop=se.top}}ko=!!Kc,Fc=Kc=null}finally{dt=r,H.p=i,v.T=a}}e.current=n,Ft=2}}function ef(){if(Ft===2){Ft=0;var e=Va,n=rl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=v.T,v.T=null;var i=H.p;H.p=2;var r=dt;dt|=4;try{zm(e,n.alternate,n)}finally{dt=r,H.p=i,v.T=a}}Ft=3}}function tf(){if(Ft===4||Ft===3){Ft=0,Nn();var e=Va,n=rl,a=Ca,i=Gm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ft=5:(Ft=0,rl=Va=null,nf(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Ja=null),Un(a),n=n.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Be,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=v.T,r=H.p,H.p=2,v.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var x=i[p];c(x.value,{componentStack:x.stack})}}finally{v.T=n,H.p=r}}(Ca&3)!==0&&fo(),la(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Oc?Vl++:(Vl=0,Oc=e):Vl=0,Pl(0)}}function nf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ml(n)))}function fo(){return Im(),ef(),tf(),af()}function af(){if(Ft!==5)return!1;var e=Va,n=Ac;Ac=0;var a=Un(Ca),i=v.T,r=H.p;try{H.p=32>a?32:a,v.T=null,a=Dc,Dc=null;var c=Va,p=Ca;if(Ft=0,rl=Va=null,Ca=0,(dt&6)!==0)throw Error(d(331));var x=dt;if(dt|=4,Lm(c.current),Um(c,c.current,p,a),dt=x,Pl(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Be,c)}catch{}return!0}finally{H.p=r,v.T=i,nf(e,n)}}function lf(e,n,a){n=qn(a,n),n=pc(e.stateNode,n,2),e=Ya(e,n,2),e!==null&&(Ke(e,2),la(e))}function ft(e,n,a){if(e.tag===3)lf(e,e,a);else for(;n!==null;){if(n.tag===3){lf(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ja===null||!Ja.has(i))){e=qn(a,e),a=lm(2),i=Ya(n,a,2),i!==null&&(sm(a,i,n,e),Ke(i,2),la(i));break}}n=n.return}}function Hc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new pg;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(a)||(Tc=!0,r.add(a),e=bg.bind(null,e,n,a),n.then(e,e))}function bg(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,gt===e&&(et&a)===a&&(At===4||At===3&&(et&62914560)===et&&300>Ae()-oo?(dt&2)===0&&cl(e,0):Ec|=a,ol===et&&(ol=0)),la(e)}function sf(e,n){n===0&&(n=Me()),e=vi(e,n),e!==null&&(Ke(e,n),la(e))}function gg(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),sf(e,a)}function yg(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(n),sf(e,a)}function vg(e,n){return Gt(e,n)}var ho=null,ul=null,Lc=!1,xo=!1,qc=!1,Wa=0;function la(e){e!==ul&&e.next===null&&(ul===null?ho=ul=e:ul=ul.next=e),xo=!0,Lc||(Lc=!0,wg())}function Pl(e,n){if(!qc&&xo){qc=!0;do for(var a=!1,i=ho;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-st(42|e)+1)-1,c&=r&~(p&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,df(i,c))}else c=et,c=R(i,i===gt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||le(i,c)||(a=!0,df(i,c));i=i.next}while(a);qc=!1}}function jg(){of()}function of(){xo=Lc=!1;var e=0;Wa!==0&&Ag()&&(e=Wa);for(var n=Ae(),a=null,i=ho;i!==null;){var r=i.next,c=rf(i,n);c===0?(i.next=null,a===null?ho=r:a.next=r,r===null&&(ul=a)):(a=i,(e!==0||(c&3)!==0)&&(xo=!0)),i=r}Ft!==0&&Ft!==5||Pl(e),Wa!==0&&(Wa=0)}function rf(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-st(c),x=1<<p,T=r[p];T===-1?((x&a)===0||(x&i)!==0)&&(r[p]=W(x,n)):T<=n&&(e.expiredLanes|=x),c&=~x}if(n=gt,a=et,a=R(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(mt===2||mt===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Ot(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||le(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&Ot(i),Un(a)){case 2:case 8:a=Wt;break;case 32:a=J;break;case 268435456:a=Se;break;default:a=J}return i=cf.bind(null,e),a=Gt(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&Ot(i),e.callbackPriority=2,e.callbackNode=null,2}function cf(e,n){if(Ft!==0&&Ft!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(fo()&&e.callbackNode!==a)return null;var i=et;return i=R(e,e===gt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ym(e,i,n),rf(e,Ae()),e.callbackNode!=null&&e.callbackNode===a?cf.bind(null,e):null)}function df(e,n){if(fo())return null;Ym(e,n,!0)}function wg(){Og(function(){(dt&6)!==0?Gt(pn,jg):of()})}function Bc(){if(Wa===0){var e=Vi;e===0&&(e=$t,$t<<=1,($t&261888)===0&&($t=256)),Wa=e}return Wa}function uf(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:_s(""+e)}function pf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function _g(e,n,a,i,r){if(n==="submit"&&a&&a.stateNode===r){var c=uf((r[zt]||null).action),p=i.submitter;p&&(n=(n=p[zt]||null)?uf(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var x=new Cs("action","action",null,i,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Wa!==0){var T=p?pf(r,p):new FormData(r);sc(a,{pending:!0,data:T,method:r.method,action:c},null,T)}}else typeof c=="function"&&(x.preventDefault(),T=p?pf(r,p):new FormData(r),sc(a,{pending:!0,data:T,method:r.method,action:c},c,T))},currentTarget:r}]})}}for(var Gc=0;Gc<_r.length;Gc++){var $c=_r[Gc],Ng=$c.toLowerCase(),Sg=$c[0].toUpperCase()+$c.slice(1);Jn(Ng,"on"+Sg)}Jn($u,"onAnimationEnd"),Jn(Yu,"onAnimationIteration"),Jn(Qu,"onAnimationStart"),Jn("dblclick","onDoubleClick"),Jn("focusin","onFocus"),Jn("focusout","onBlur"),Jn(Gb,"onTransitionRun"),Jn($b,"onTransitionStart"),Jn(Yb,"onTransitionCancel"),Jn(Xu,"onTransitionEnd"),Ri("onMouseEnter",["mouseout","mouseover"]),Ri("onMouseLeave",["mouseout","mouseover"]),Ri("onPointerEnter",["pointerout","pointerover"]),Ri("onPointerLeave",["pointerout","pointerover"]),xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),xi("onBeforeInput",["compositionend","keypress","textInput","paste"]),xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Wl));function mf(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var c=void 0;if(n)for(var p=i.length-1;0<=p;p--){var x=i[p],T=x.instance,Z=x.currentTarget;if(x=x.listener,T!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(ee){Es(ee)}r.currentTarget=null,c=T}else for(p=0;p<i.length;p++){if(x=i[p],T=x.instance,Z=x.currentTarget,x=x.listener,T!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(ee){Es(ee)}r.currentTarget=null,c=T}}}}function We(e,n){var a=n[j];a===void 0&&(a=n[j]=new Set);var i=e+"__bubble";a.has(i)||(ff(n,e,2,!1),a.add(i))}function Yc(e,n,a){var i=0;n&&(i|=4),ff(a,e,i,n)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Qc(e){if(!e[bo]){e[bo]=!0,su.forEach(function(a){a!=="selectionchange"&&(kg.has(a)||Yc(a,!1,e),Yc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[bo]||(n[bo]=!0,Yc("selectionchange",!1,n))}}function ff(e,n,a,i){switch(Yf(n)){case 2:var r=ey;break;case 8:r=ty;break;default:r=ld}a=r.bind(null,n,a,e),r=void 0,!dr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Xc(e,n,a,i,r){var c=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var x=i.stateNode.containerInfo;if(x===r)break;if(p===4)for(p=i.return;p!==null;){var T=p.tag;if((T===3||T===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;x!==null;){if(p=Yt(x),p===null)return;if(T=p.tag,T===5||T===6||T===26||T===27){i=c=p;continue e}x=x.parentNode}}i=i.return}gu(function(){var Z=c,ee=rr(a),de=[];e:{var K=Zu.get(e);if(K!==void 0){var V=Cs,Ee=e;switch(e){case"keypress":if(Ss(a)===0)break e;case"keydown":case"keyup":V=yb;break;case"focusin":Ee="focus",V=fr;break;case"focusout":Ee="blur",V=fr;break;case"beforeblur":case"afterblur":V=fr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=ju;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=ob;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=wb;break;case $u:case Yu:case Qu:V=db;break;case Xu:V=Nb;break;case"scroll":case"scrollend":V=lb;break;case"wheel":V=kb;break;case"copy":case"cut":case"paste":V=pb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=_u;break;case"toggle":case"beforetoggle":V=zb}var He=(n&4)!==0,bt=!He&&(e==="scroll"||e==="scrollend"),L=He?K!==null?K+"Capture":null:K;He=[];for(var A=Z,X;A!==null;){var se=A;if(X=se.stateNode,se=se.tag,se!==5&&se!==26&&se!==27||X===null||L===null||(se=vl(A,L),se!=null&&He.push(Il(A,se,X))),bt)break;A=A.return}0<He.length&&(K=new V(K,Ee,null,a,ee),de.push({event:K,listeners:He}))}}if((n&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",K&&a!==or&&(Ee=a.relatedTarget||a.fromElement)&&(Yt(Ee)||Ee[Oa]))break e;if((V||K)&&(K=ee.window===ee?ee:(K=ee.ownerDocument)?K.defaultView||K.parentWindow:window,V?(Ee=a.relatedTarget||a.toElement,V=Z,Ee=Ee?Yt(Ee):null,Ee!==null&&(bt=m(Ee),He=Ee.tag,Ee!==bt||He!==5&&He!==27&&He!==6)&&(Ee=null)):(V=null,Ee=Z),V!==Ee)){if(He=ju,se="onMouseLeave",L="onMouseEnter",A="mouse",(e==="pointerout"||e==="pointerover")&&(He=_u,se="onPointerLeave",L="onPointerEnter",A="pointer"),bt=V==null?K:da(V),X=Ee==null?K:da(Ee),K=new He(se,A+"leave",V,a,ee),K.target=bt,K.relatedTarget=X,se=null,Yt(ee)===Z&&(He=new He(L,A+"enter",Ee,a,ee),He.target=X,He.relatedTarget=bt,se=He),bt=se,V&&Ee)t:{for(He=Cg,L=V,A=Ee,X=0,se=L;se;se=He(se))X++;se=0;for(var Re=A;Re;Re=He(Re))se++;for(;0<X-se;)L=He(L),X--;for(;0<se-X;)A=He(A),se--;for(;X--;){if(L===A||A!==null&&L===A.alternate){He=L;break t}L=He(L),A=He(A)}He=null}else He=null;V!==null&&hf(de,K,V,He,!1),Ee!==null&&bt!==null&&hf(de,bt,Ee,He,!0)}}e:{if(K=Z?da(Z):window,V=K.nodeName&&K.nodeName.toLowerCase(),V==="select"||V==="input"&&K.type==="file")var ot=Mu;else if(Tu(K))if(Au)ot=Lb;else{ot=Rb;var Oe=Ub}else V=K.nodeName,!V||V.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Z&&sr(Z.elementType)&&(ot=Mu):ot=Hb;if(ot&&(ot=ot(e,Z))){Eu(de,ot,a,ee);break e}Oe&&Oe(e,K,Z),e==="focusout"&&Z&&K.type==="number"&&Z.memoizedProps.value!=null&&lr(K,"number",K.value)}switch(Oe=Z?da(Z):window,e){case"focusin":(Tu(Oe)||Oe.contentEditable==="true")&&($i=Oe,vr=Z,zl=null);break;case"focusout":zl=vr=$i=null;break;case"mousedown":jr=!0;break;case"contextmenu":case"mouseup":case"dragend":jr=!1,Bu(de,a,ee);break;case"selectionchange":if(Bb)break;case"keydown":case"keyup":Bu(de,a,ee)}var Qe;if(xr)e:{switch(e){case"compositionstart":var tt="onCompositionStart";break e;case"compositionend":tt="onCompositionEnd";break e;case"compositionupdate":tt="onCompositionUpdate";break e}tt=void 0}else Gi?Cu(e,a)&&(tt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(tt="onCompositionStart");tt&&(Nu&&a.locale!=="ko"&&(Gi||tt!=="onCompositionStart"?tt==="onCompositionEnd"&&Gi&&(Qe=yu()):(Ra=ee,ur="value"in Ra?Ra.value:Ra.textContent,Gi=!0)),Oe=go(Z,tt),0<Oe.length&&(tt=new wu(tt,e,null,a,ee),de.push({event:tt,listeners:Oe}),Qe?tt.data=Qe:(Qe=zu(a),Qe!==null&&(tt.data=Qe)))),(Qe=Eb?Mb(e,a):Ab(e,a))&&(tt=go(Z,"onBeforeInput"),0<tt.length&&(Oe=new wu("onBeforeInput","beforeinput",null,a,ee),de.push({event:Oe,listeners:tt}),Oe.data=Qe)),_g(de,e,Z,a,ee)}mf(de,n)})}function Il(e,n,a){return{instance:e,listener:n,currentTarget:a}}function go(e,n){for(var a=n+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=vl(e,a),r!=null&&i.unshift(Il(e,r,c)),r=vl(e,n),r!=null&&i.push(Il(e,r,c))),e.tag===3)return i;e=e.return}return[]}function Cg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function hf(e,n,a,i,r){for(var c=n._reactName,p=[];a!==null&&a!==i;){var x=a,T=x.alternate,Z=x.stateNode;if(x=x.tag,T!==null&&T===i)break;x!==5&&x!==26&&x!==27||Z===null||(T=Z,r?(Z=vl(a,c),Z!=null&&p.unshift(Il(a,Z,T))):r||(Z=vl(a,c),Z!=null&&p.push(Il(a,Z,T)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var zg=/\r\n?/g,Tg=/\u0000|\uFFFD/g;function xf(e){return(typeof e=="string"?e:""+e).replace(zg,`
`).replace(Tg,"")}function bf(e,n){return n=xf(n),xf(e)===n}function xt(e,n,a,i,r,c){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Li(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Li(e,""+i);break;case"className":js(e,"class",i);break;case"tabIndex":js(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":js(e,a,i);break;case"style":xu(e,i,c);break;case"data":if(n!=="object"){js(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=_s(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&xt(e,n,"name",r.name,r,null),xt(e,n,"formEncType",r.formEncType,r,null),xt(e,n,"formMethod",r.formMethod,r,null),xt(e,n,"formTarget",r.formTarget,r,null)):(xt(e,n,"encType",r.encType,r,null),xt(e,n,"method",r.method,r,null),xt(e,n,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=_s(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=pa);break;case"onScroll":i!=null&&We("scroll",e);break;case"onScrollEnd":i!=null&&We("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=_s(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":We("beforetoggle",e),We("toggle",e),vs(e,"popover",i);break;case"xlinkActuate":ua(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ua(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ua(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ua(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ua(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ua(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ua(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ua(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ua(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":vs(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=ab.get(a)||a,vs(e,a,i))}}function Zc(e,n,a,i,r,c){switch(a){case"style":xu(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Li(e,i):(typeof i=="number"||typeof i=="bigint")&&Li(e,""+i);break;case"onScroll":i!=null&&We("scroll",e);break;case"onScrollEnd":i!=null&&We("scrollend",e);break;case"onClick":i!=null&&(e.onclick=pa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!ou.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[zt]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):vs(e,a,i)}}}function on(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":We("error",e),We("load",e);var i=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,c,p,a,null)}}r&&xt(e,n,"srcSet",a.srcSet,a,null),i&&xt(e,n,"src",a.src,a,null);return;case"input":We("invalid",e);var x=c=p=r=null,T=null,Z=null;for(i in a)if(a.hasOwnProperty(i)){var ee=a[i];if(ee!=null)switch(i){case"name":r=ee;break;case"type":p=ee;break;case"checked":T=ee;break;case"defaultChecked":Z=ee;break;case"value":c=ee;break;case"defaultValue":x=ee;break;case"children":case"dangerouslySetInnerHTML":if(ee!=null)throw Error(d(137,n));break;default:xt(e,n,i,ee,a,null)}}pu(e,c,x,T,Z,p,r,!1);return;case"select":We("invalid",e),i=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(x=a[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":p=x;break;case"multiple":i=x;default:xt(e,n,r,x,a,null)}n=c,a=p,e.multiple=!!i,n!=null?Hi(e,!!i,n,!1):a!=null&&Hi(e,!!i,a,!0);return;case"textarea":We("invalid",e),c=r=i=null;for(p in a)if(a.hasOwnProperty(p)&&(x=a[p],x!=null))switch(p){case"value":i=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:xt(e,n,p,x,a,null)}fu(e,i,r,c);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(i=a[T],i!=null))switch(T){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:xt(e,n,T,i,a,null)}return;case"dialog":We("beforetoggle",e),We("toggle",e),We("cancel",e),We("close",e);break;case"iframe":case"object":We("load",e);break;case"video":case"audio":for(i=0;i<Wl.length;i++)We(Wl[i],e);break;case"image":We("error",e),We("load",e);break;case"details":We("toggle",e);break;case"embed":case"source":case"link":We("error",e),We("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(i=a[Z],i!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:xt(e,n,Z,i,a,null)}return;default:if(sr(n)){for(ee in a)a.hasOwnProperty(ee)&&(i=a[ee],i!==void 0&&Zc(e,n,ee,i,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!=null&&xt(e,n,x,i,a,null))}function Eg(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,x=null,T=null,Z=null,ee=null;for(V in a){var de=a[V];if(a.hasOwnProperty(V)&&de!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":T=de;default:i.hasOwnProperty(V)||xt(e,n,V,null,i,de)}}for(var K in i){var V=i[K];if(de=a[K],i.hasOwnProperty(K)&&(V!=null||de!=null))switch(K){case"type":c=V;break;case"name":r=V;break;case"checked":Z=V;break;case"defaultChecked":ee=V;break;case"value":p=V;break;case"defaultValue":x=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,n));break;default:V!==de&&xt(e,n,K,V,i,de)}}ir(e,p,x,T,Z,ee,c,r);return;case"select":V=p=x=K=null;for(c in a)if(T=a[c],a.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":V=T;default:i.hasOwnProperty(c)||xt(e,n,c,null,i,T)}for(r in i)if(c=i[r],T=a[r],i.hasOwnProperty(r)&&(c!=null||T!=null))switch(r){case"value":K=c;break;case"defaultValue":x=c;break;case"multiple":p=c;default:c!==T&&xt(e,n,r,c,i,T)}n=x,a=p,i=V,K!=null?Hi(e,!!a,K,!1):!!i!=!!a&&(n!=null?Hi(e,!!a,n,!0):Hi(e,!!a,a?[]:"",!1));return;case"textarea":V=K=null;for(x in a)if(r=a[x],a.hasOwnProperty(x)&&r!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:xt(e,n,x,null,i,r)}for(p in i)if(r=i[p],c=a[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":K=r;break;case"defaultValue":V=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&xt(e,n,p,r,i,c)}mu(e,K,V);return;case"option":for(var Ee in a)if(K=a[Ee],a.hasOwnProperty(Ee)&&K!=null&&!i.hasOwnProperty(Ee))switch(Ee){case"selected":e.selected=!1;break;default:xt(e,n,Ee,null,i,K)}for(T in i)if(K=i[T],V=a[T],i.hasOwnProperty(T)&&K!==V&&(K!=null||V!=null))switch(T){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:xt(e,n,T,K,i,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var He in a)K=a[He],a.hasOwnProperty(He)&&K!=null&&!i.hasOwnProperty(He)&&xt(e,n,He,null,i,K);for(Z in i)if(K=i[Z],V=a[Z],i.hasOwnProperty(Z)&&K!==V&&(K!=null||V!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,n));break;default:xt(e,n,Z,K,i,V)}return;default:if(sr(n)){for(var bt in a)K=a[bt],a.hasOwnProperty(bt)&&K!==void 0&&!i.hasOwnProperty(bt)&&Zc(e,n,bt,void 0,i,K);for(ee in i)K=i[ee],V=a[ee],!i.hasOwnProperty(ee)||K===V||K===void 0&&V===void 0||Zc(e,n,ee,K,i,V);return}}for(var L in a)K=a[L],a.hasOwnProperty(L)&&K!=null&&!i.hasOwnProperty(L)&&xt(e,n,L,null,i,K);for(de in i)K=i[de],V=a[de],!i.hasOwnProperty(de)||K===V||K==null&&V==null||xt(e,n,de,K,i,V)}function gf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],c=r.transferSize,p=r.initiatorType,x=r.duration;if(c&&x&&gf(p)){for(p=0,x=r.responseEnd,i+=1;i<a.length;i++){var T=a[i],Z=T.startTime;if(Z>x)break;var ee=T.transferSize,de=T.initiatorType;ee&&gf(de)&&(T=T.responseEnd,p+=ee*(T<x?1:(x-Z)/(T-Z)))}if(--i,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Kc=null,Fc=null;function yo(e){return e.nodeType===9?e:e.ownerDocument}function yf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function vf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Vc=null;function Ag(){var e=window.event;return e&&e.type==="popstate"?e===Vc?!1:(Vc=e,!0):(Vc=null,!1)}var jf=typeof setTimeout=="function"?setTimeout:void 0,Dg=typeof clearTimeout=="function"?clearTimeout:void 0,wf=typeof Promise=="function"?Promise:void 0,Og=typeof queueMicrotask=="function"?queueMicrotask:typeof wf<"u"?function(e){return wf.resolve(null).then(e).catch(Ug)}:jf;function Ug(e){setTimeout(function(){throw e})}function Ia(e){return e==="head"}function _f(e,n){var a=n,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),hl(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")es(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,es(a);for(var c=a.firstChild;c;){var p=c.nextSibling,x=c.nodeName;c[it]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&es(e.ownerDocument.body);a=r}while(a);hl(n)}function Nf(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Pc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Pc(a),bn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Rg(e,n,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[it])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Qn(e.nextSibling),e===null)break}return null}function Hg(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Qn(e.nextSibling),e===null))return null;return e}function Sf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Qn(e.nextSibling),e===null))return null;return e}function Wc(e){return e.data==="$?"||e.data==="$~"}function Ic(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Lg(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Qn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var ed=null;function kf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Qn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Cf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function zf(e,n,a){switch(n=yo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function es(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);bn(e)}var Xn=new Map,Tf=new Set;function vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var za=H.d;H.d={f:qg,r:Bg,D:Gg,C:$g,L:Yg,m:Qg,X:Zg,S:Xg,M:Kg};function qg(){var e=za.f(),n=uo();return e||n}function Bg(e){var n=ta(e);n!==null&&n.tag===5&&n.type==="form"?Xp(n):za.r(e)}var pl=typeof document>"u"?null:document;function Ef(e,n,a){var i=pl;if(i&&typeof n=="string"&&n){var r=Hn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Tf.has(r)||(Tf.add(r),e={rel:e,crossOrigin:a,href:n},i.querySelector(r)===null&&(n=i.createElement("link"),on(n,"link",e),It(n),i.head.appendChild(n)))}}function Gg(e){za.D(e),Ef("dns-prefetch",e,null)}function $g(e,n){za.C(e,n),Ef("preconnect",e,n)}function Yg(e,n,a){za.L(e,n,a);var i=pl;if(i&&e&&n){var r='link[rel="preload"][as="'+Hn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Hn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Hn(a.imageSizes)+'"]')):r+='[href="'+Hn(e)+'"]';var c=r;switch(n){case"style":c=ml(e);break;case"script":c=fl(e)}Xn.has(c)||(e=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Xn.set(c,e),i.querySelector(r)!==null||n==="style"&&i.querySelector(ts(c))||n==="script"&&i.querySelector(ns(c))||(n=i.createElement("link"),on(n,"link",e),It(n),i.head.appendChild(n)))}}function Qg(e,n){za.m(e,n);var a=pl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Hn(i)+'"][href="'+Hn(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=fl(e)}if(!Xn.has(c)&&(e=S({rel:"modulepreload",href:e},n),Xn.set(c,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ns(c)))return}i=a.createElement("link"),on(i,"link",e),It(i),a.head.appendChild(i)}}}function Xg(e,n,a){za.S(e,n,a);var i=pl;if(i&&e){var r=Ua(i).hoistableStyles,c=ml(e);n=n||"default";var p=r.get(c);if(!p){var x={loading:0,preload:null};if(p=i.querySelector(ts(c)))x.loading=5;else{e=S({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Xn.get(c))&&td(e,a);var T=p=i.createElement("link");It(T),on(T,"link",e),T._p=new Promise(function(Z,ee){T.onload=Z,T.onerror=ee}),T.addEventListener("load",function(){x.loading|=1}),T.addEventListener("error",function(){x.loading|=2}),x.loading|=4,jo(p,n,i)}p={type:"stylesheet",instance:p,count:1,state:x},r.set(c,p)}}}function Zg(e,n){za.X(e,n);var a=pl;if(a&&e){var i=Ua(a).hoistableScripts,r=fl(e),c=i.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0},n),(n=Xn.get(r))&&nd(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Kg(e,n){za.M(e,n);var a=pl;if(a&&e){var i=Ua(a).hoistableScripts,r=fl(e),c=i.get(r);c||(c=a.querySelector(ns(r)),c||(e=S({src:e,async:!0,type:"module"},n),(n=Xn.get(r))&&nd(e,n),c=a.createElement("script"),It(c),on(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Mf(e,n,a,i){var r=(r=Ne.current)?vo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ml(a.href),a=Ua(r).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ml(a.href);var c=Ua(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(ts(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Xn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Xn.set(e,a),c||Fg(r,e,a,p.state))),n&&i===null)throw Error(d(528,""));return p}if(n&&i!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=fl(a),a=Ua(r).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ml(e){return'href="'+Hn(e)+'"'}function ts(e){return'link[rel="stylesheet"]['+e+"]"}function Af(e){return S({},e,{"data-precedence":e.precedence,precedence:null})}function Fg(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),on(n,"link",a),It(n),e.head.appendChild(n))}function fl(e){return'[src="'+Hn(e)+'"]'}function ns(e){return"script[async]"+e}function Df(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Hn(a.href)+'"]');if(i)return n.instance=i,It(i),i;var r=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),It(i),on(i,"style",r),jo(i,a.precedence,e),n.instance=i;case"stylesheet":r=ml(a.href);var c=e.querySelector(ts(r));if(c)return n.state.loading|=4,n.instance=c,It(c),c;i=Af(a),(r=Xn.get(r))&&td(i,r),c=(e.ownerDocument||e).createElement("link"),It(c);var p=c;return p._p=new Promise(function(x,T){p.onload=x,p.onerror=T}),on(c,"link",i),n.state.loading|=4,jo(c,a.precedence,e),n.instance=c;case"script":return c=fl(a.src),(r=e.querySelector(ns(c)))?(n.instance=r,It(r),r):(i=a,(r=Xn.get(c))&&(i=S({},a),nd(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),It(r),on(r,"link",i),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,jo(i,a.precedence,e));return n.instance}function jo(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var x=i[p];if(x.dataset.precedence===n)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function td(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function nd(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wo=null;function Of(e,n,a){if(wo===null){var i=new Map,r=wo=new Map;r.set(a,i)}else r=wo,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[it]||c[Ut]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var x=i.get(p);x?x.push(c):i.set(p,[c])}}return i}function Uf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Jg(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Vg(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ml(i.href),c=n.querySelector(ts(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=_o.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,It(c);return}c=n.ownerDocument||n,i=Af(i),(r=Xn.get(r))&&td(i,r),c=c.createElement("link"),It(c);var p=c;p._p=new Promise(function(x,T){p.onload=x,p.onerror=T}),on(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_o.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var ad=0;function Pg(e,n){return e.stylesheets&&e.count===0&&So(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&So(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&ad===0&&(ad=62500*Mg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&So(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>ad?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function _o(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)So(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var No=null;function So(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,No=new Map,n.forEach(Wg,e),No=null,_o.call(e))}function Wg(e,n){if(!(n.state.loading&4)){var a=No.get(e);if(a)var i=a.get(null);else{a=new Map,No.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||i,c===i&&a.set(null,r),a.set(p,r),this.count++,i=_o.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var as={$$typeof:U,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function Ig(e,n,a,i,r,c,p,x,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Xe(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Xe(0),this.hiddenUpdates=Xe(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Hf(e,n,a,i,r,c,p,x,T,Z,ee,de){return e=new Ig(e,n,a,p,T,Z,ee,de,x),n=1,c===!0&&(n|=24),c=kn(3,null,null,n),e.current=c,c.stateNode=e,n=Rr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:n},Br(c),e}function Lf(e){return e?(e=Xi,e):Xi}function qf(e,n,a,i,r,c){r=Lf(r),i.context===null?i.context=r:i.pendingContext=r,i=$a(n),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=Ya(e,i,n),a!==null&&(_n(a,e,n),Ul(a,e,n))}function Bf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function id(e,n){Bf(e,n),(e=e.alternate)&&Bf(e,n)}function Gf(e){if(e.tag===13||e.tag===31){var n=vi(e,67108864);n!==null&&_n(n,e,67108864),id(e,67108864)}}function $f(e){if(e.tag===13||e.tag===31){var n=Mn();n=vt(n);var a=vi(e,n);a!==null&&_n(a,e,n),id(e,n)}}var ko=!0;function ey(e,n,a,i){var r=v.T;v.T=null;var c=H.p;try{H.p=2,ld(e,n,a,i)}finally{H.p=c,v.T=r}}function ty(e,n,a,i){var r=v.T;v.T=null;var c=H.p;try{H.p=8,ld(e,n,a,i)}finally{H.p=c,v.T=r}}function ld(e,n,a,i){if(ko){var r=sd(i);if(r===null)Xc(e,n,i,Co,a),Qf(e,i);else if(ay(r,e,n,a,i))i.stopPropagation();else if(Qf(e,i),n&4&&-1<ny.indexOf(e)){for(;r!==null;){var c=ta(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=hn(c.pendingLanes);if(p!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var T=1<<31-st(p);x.entanglements[1]|=T,p&=~T}la(c),(dt&6)===0&&(ro=Ae()+500,Pl(0))}}break;case 31:case 13:x=vi(c,2),x!==null&&_n(x,c,2),uo(),id(c,2)}if(c=sd(i),c===null&&Xc(e,n,i,Co,a),c===r)break;r=c}r!==null&&i.stopPropagation()}else Xc(e,n,i,null,a)}}function sd(e){return e=rr(e),od(e)}var Co=null;function od(e){if(Co=null,e=Yt(e),e!==null){var n=m(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=k(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Co=e,null}function Yf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(un()){case pn:return 2;case Wt:return 8;case J:case De:return 32;case Se:return 268435456;default:return 32}default:return 32}}var rd=!1,ei=null,ti=null,ni=null,is=new Map,ls=new Map,ai=[],ny="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qf(e,n){switch(e){case"focusin":case"focusout":ei=null;break;case"dragenter":case"dragleave":ti=null;break;case"mouseover":case"mouseout":ni=null;break;case"pointerover":case"pointerout":is.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ls.delete(n.pointerId)}}function ss(e,n,a,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},n!==null&&(n=ta(n),n!==null&&Gf(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function ay(e,n,a,i,r){switch(n){case"focusin":return ei=ss(ei,e,n,a,i,r),!0;case"dragenter":return ti=ss(ti,e,n,a,i,r),!0;case"mouseover":return ni=ss(ni,e,n,a,i,r),!0;case"pointerover":var c=r.pointerId;return is.set(c,ss(is.get(c)||null,e,n,a,i,r)),!0;case"gotpointercapture":return c=r.pointerId,ls.set(c,ss(ls.get(c)||null,e,n,a,i,r)),!0}return!1}function Xf(e){var n=Yt(e.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){$f(a)});return}}else if(n===31){if(n=k(a),n!==null){e.blockedOn=n,Nt(e.priority,function(){$f(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zo(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=sd(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);or=i,a.target.dispatchEvent(i),or=null}else return n=ta(a),n!==null&&Gf(n),e.blockedOn=a,!1;n.shift()}return!0}function Zf(e,n,a){zo(e)&&a.delete(n)}function iy(){rd=!1,ei!==null&&zo(ei)&&(ei=null),ti!==null&&zo(ti)&&(ti=null),ni!==null&&zo(ni)&&(ni=null),is.forEach(Zf),ls.forEach(Zf)}function To(e,n){e.blockedOn===n&&(e.blockedOn=null,rd||(rd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,iy)))}var Eo=null;function Kf(e){Eo!==e&&(Eo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Eo===e&&(Eo=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],r=e[n+2];if(typeof i!="function"){if(od(i||a)===null)continue;break}var c=ta(a);c!==null&&(e.splice(n,3),n-=3,sc(c,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function hl(e){function n(T){return To(T,e)}ei!==null&&To(ei,e),ti!==null&&To(ti,e),ni!==null&&To(ni,e),is.forEach(n),ls.forEach(n);for(var a=0;a<ai.length;a++){var i=ai[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ai.length&&(a=ai[0],a.blockedOn===null);)Xf(a),a.blockedOn===null&&ai.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],c=a[i+1],p=r[zt]||null;if(typeof c=="function")p||Kf(a);else if(p){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[zt]||null)x=p.formAction;else if(od(r)!==null)continue}else x=p.action;typeof x=="function"?a[i+1]=x:(a.splice(i,3),i-=3),Kf(a)}}}function Ff(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function cd(e){this._internalRoot=e}Mo.prototype.render=cd.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,i=Mn();qf(a,i,e,n,null,null)},Mo.prototype.unmount=cd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;qf(e.current,2,null,e,null,null),uo(),n[Oa]=null}};function Mo(e){this._internalRoot=e}Mo.prototype.unstable_scheduleHydration=function(e){if(e){var n=ca();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ai.length&&n!==0&&n<ai[a].priority;a++);ai.splice(a,0,e),a===0&&Xf(e)}};var Jf=l.version;if(Jf!=="19.2.6")throw Error(d(527,Jf,"19.2.6"));H.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(n),e=e!==null?w(e):null,e=e===null?null:e.stateNode,e};var ly={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:v,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ao=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ao.isDisabled&&Ao.supportsFiber)try{Be=Ao.inject(ly),$e=Ao}catch{}}return rs.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,i="",r=tm,c=nm,p=am;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Hf(e,1,!1,null,null,a,i,null,r,c,p,Ff),e[Oa]=n.current,Qc(e),new cd(n)},rs.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var i=!1,r="",c=tm,p=nm,x=am,T=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),n=Hf(e,1,!0,n,a??null,i,r,T,c,p,x,Ff),n.context=Lf(null),a=n.current,i=Mn(),i=vt(i),r=$a(i),r.callback=null,Ya(a,r,i),a=i,n.current.lanes=a,Ke(n,a),la(n),e[Oa]=n.current,Qc(e),new Mo(n)},rs.version="19.2.6",rs}var lh;function gy(){if(lh)return pd.exports;lh=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),pd.exports=by(),pd.exports}var yy=gy(),ux=dx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hs(){return hs=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},hs.apply(this,arguments)}var ci;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ci||(ci={}));const sh="popstate";function vy(s){s===void 0&&(s={});function l(u,m){let{pathname:f="/",search:k="",hash:b=""}=Ui(u.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Dd("",{pathname:f,search:k,hash:b},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){let f=u.document.querySelector("base"),k="";if(f&&f.getAttribute("href")){let b=u.location.href,g=b.indexOf("#");k=g===-1?b:b.slice(0,g)}return k+"#"+(typeof m=="string"?m:Qo(m))}function d(u,m){er(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(m)+")")}return wy(l,o,d,s)}function Lt(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function er(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function jy(){return Math.random().toString(36).substr(2,8)}function oh(s,l){return{usr:s.state,key:s.key,idx:l}}function Dd(s,l,o,d){return o===void 0&&(o=null),hs({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?Ui(l):l,{state:o,key:l&&l.key||d||jy()})}function Qo(s){let{pathname:l="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Ui(s){let l={};if(s){let o=s.indexOf("#");o>=0&&(l.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function wy(s,l,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:m=!1}=d,f=u.history,k=ci.Pop,b=null,g=w();g==null&&(g=0,f.replaceState(hs({},f.state,{idx:g}),""));function w(){return(f.state||{idx:null}).idx}function S(){k=ci.Pop;let M=w(),Y=M==null?null:M-g;g=M,b&&b({action:k,location:Q.location,delta:Y})}function N(M,Y){k=ci.Push;let q=Dd(Q.location,M,Y);o&&o(q,M),g=w()+1;let U=oh(q,g),ne=Q.createHref(q);try{f.pushState(U,"",ne)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(ne)}m&&b&&b({action:k,location:Q.location,delta:1})}function $(M,Y){k=ci.Replace;let q=Dd(Q.location,M,Y);o&&o(q,M),g=w();let U=oh(q,g),ne=Q.createHref(q);f.replaceState(U,"",ne),m&&b&&b({action:k,location:Q.location,delta:0})}function I(M){let Y=u.location.origin!=="null"?u.location.origin:u.location.href,q=typeof M=="string"?M:Qo(M);return q=q.replace(/ $/,"%20"),Lt(Y,"No window.location.(origin|href) available to create URL for href: "+q),new URL(q,Y)}let Q={get action(){return k},get location(){return s(u,f)},listen(M){if(b)throw new Error("A history only accepts one active listener");return u.addEventListener(sh,S),b=M,()=>{u.removeEventListener(sh,S),b=null}},createHref(M){return l(u,M)},createURL:I,encodeLocation(M){let Y=I(M);return{pathname:Y.pathname,search:Y.search,hash:Y.hash}},push:N,replace:$,go(M){return f.go(M)}};return Q}var rh;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(rh||(rh={}));function _y(s,l,o){return o===void 0&&(o="/"),Ny(s,l,o)}function Ny(s,l,o,d){let u=typeof l=="string"?Ui(l):l,m=Kd(u.pathname||"/",o);if(m==null)return null;let f=px(s);Sy(f);let k=null;for(let b=0;k==null&&b<f.length;++b){let g=Hy(m);k=Oy(f[b],g)}return k}function px(s,l,o,d){l===void 0&&(l=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(m,f,k)=>{let b={relativePath:k===void 0?m.path||"":k,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};b.relativePath.startsWith("/")&&(Lt(b.relativePath.startsWith(d),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(d.length));let g=di([d,b.relativePath]),w=o.concat(b);m.children&&m.children.length>0&&(Lt(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),px(m.children,l,w,g)),!(m.path==null&&!m.index)&&l.push({path:g,score:Ay(g,m.index),routesMeta:w})};return s.forEach((m,f)=>{var k;if(m.path===""||!((k=m.path)!=null&&k.includes("?")))u(m,f);else for(let b of mx(m.path))u(m,f,b)}),l}function mx(s){let l=s.split("/");if(l.length===0)return[];let[o,...d]=l,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let f=mx(d.join("/")),k=[];return k.push(...f.map(b=>b===""?m:[m,b].join("/"))),u&&k.push(...f),k.map(b=>s.startsWith("/")&&b===""?"/":b)}function Sy(s){s.sort((l,o)=>l.score!==o.score?o.score-l.score:Dy(l.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ky=/^:[\w-]+$/,Cy=3,zy=2,Ty=1,Ey=10,My=-2,ch=s=>s==="*";function Ay(s,l){let o=s.split("/"),d=o.length;return o.some(ch)&&(d+=My),l&&(d+=zy),o.filter(u=>!ch(u)).reduce((u,m)=>u+(ky.test(m)?Cy:m===""?Ty:Ey),d)}function Dy(s,l){return s.length===l.length&&s.slice(0,-1).every((d,u)=>d===l[u])?s[s.length-1]-l[l.length-1]:0}function Oy(s,l,o){let{routesMeta:d}=s,u={},m="/",f=[];for(let k=0;k<d.length;++k){let b=d[k],g=k===d.length-1,w=m==="/"?l:l.slice(m.length)||"/",S=Uy({path:b.relativePath,caseSensitive:b.caseSensitive,end:g},w),N=b.route;if(!S)return null;Object.assign(u,S.params),f.push({params:u,pathname:di([m,S.pathname]),pathnameBase:$y(di([m,S.pathnameBase])),route:N}),S.pathnameBase!=="/"&&(m=di([m,S.pathnameBase]))}return f}function Uy(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=Ry(s.path,s.caseSensitive,s.end),u=l.match(o);if(!u)return null;let m=u[0],f=m.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:d.reduce((g,w,S)=>{let{paramName:N,isOptional:$}=w;if(N==="*"){let Q=k[S]||"";f=m.slice(0,m.length-Q.length).replace(/(.)\/+$/,"$1")}const I=k[S];return $&&!I?g[N]=void 0:g[N]=(I||"").replace(/%2F/g,"/"),g},{}),pathname:m,pathnameBase:f,pattern:s}}function Ry(s,l,o){l===void 0&&(l=!1),o===void 0&&(o=!0),er(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,k,b)=>(d.push({paramName:k,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),d]}function Hy(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return er(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function Kd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Ly=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qy=s=>Ly.test(s);function By(s,l){l===void 0&&(l="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Ui(s):s,m;if(o)if(qy(o))m=o;else{if(o.includes("//")){let f=o;o=o.replace(/\/\/+/g,"/"),er(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+o))}o.startsWith("/")?m=dh(o.substring(1),"/"):m=dh(o,l)}else m=l;return{pathname:m,search:Yy(d),hash:Qy(u)}}function dh(s,l){let o=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function xd(s,l,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gy(s){return s.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function Fd(s,l){let o=Gy(s);return l?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Jd(s,l,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Ui(s):(u=hs({},s),Lt(!u.pathname||!u.pathname.includes("?"),xd("?","pathname","search",u)),Lt(!u.pathname||!u.pathname.includes("#"),xd("#","pathname","hash",u)),Lt(!u.search||!u.search.includes("#"),xd("#","search","hash",u)));let m=s===""||u.pathname==="",f=m?"/":u.pathname,k;if(f==null)k=o;else{let S=l.length-1;if(!d&&f.startsWith("..")){let N=f.split("/");for(;N[0]==="..";)N.shift(),S-=1;u.pathname=N.join("/")}k=S>=0?l[S]:"/"}let b=By(u,k),g=f&&f!=="/"&&f.endsWith("/"),w=(m||f===".")&&o.endsWith("/");return!b.pathname.endsWith("/")&&(g||w)&&(b.pathname+="/"),b}const di=s=>s.join("/").replace(/\/\/+/g,"/"),$y=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Yy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Qy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Xy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const fx=["post","put","patch","delete"];new Set(fx);const Zy=["get",...fx];new Set(Zy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function xs(){return xs=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},xs.apply(this,arguments)}const Vd=h.createContext(null),Ky=h.createContext(null),mi=h.createContext(null),tr=h.createContext(null),fi=h.createContext({outlet:null,matches:[],isDataRoute:!1}),hx=h.createContext(null);function Fy(s,l){let{relative:o}=l===void 0?{}:l;yl()||Lt(!1);let{basename:d,navigator:u}=h.useContext(mi),{hash:m,pathname:f,search:k}=bx(s,{relative:o}),b=f;return d!=="/"&&(b=f==="/"?d:di([d,f])),u.createHref({pathname:b,search:k,hash:m})}function yl(){return h.useContext(tr)!=null}function ra(){return yl()||Lt(!1),h.useContext(tr).location}function xx(s){h.useContext(mi).static||h.useLayoutEffect(s)}function Pd(){let{isDataRoute:s}=h.useContext(fi);return s?ov():Jy()}function Jy(){yl()||Lt(!1);let s=h.useContext(Vd),{basename:l,future:o,navigator:d}=h.useContext(mi),{matches:u}=h.useContext(fi),{pathname:m}=ra(),f=JSON.stringify(Fd(u,o.v7_relativeSplatPath)),k=h.useRef(!1);return xx(()=>{k.current=!0}),h.useCallback(function(g,w){if(w===void 0&&(w={}),!k.current)return;if(typeof g=="number"){d.go(g);return}let S=Jd(g,JSON.parse(f),m,w.relative==="path");s==null&&l!=="/"&&(S.pathname=S.pathname==="/"?l:di([l,S.pathname])),(w.replace?d.replace:d.push)(S,w.state,w)},[l,d,f,m,s])}function bx(s,l){let{relative:o}=l===void 0?{}:l,{future:d}=h.useContext(mi),{matches:u}=h.useContext(fi),{pathname:m}=ra(),f=JSON.stringify(Fd(u,d.v7_relativeSplatPath));return h.useMemo(()=>Jd(s,JSON.parse(f),m,o==="path"),[s,f,m,o])}function Vy(s,l){return Py(s,l)}function Py(s,l,o,d){yl()||Lt(!1);let{navigator:u}=h.useContext(mi),{matches:m}=h.useContext(fi),f=m[m.length-1],k=f?f.params:{};f&&f.pathname;let b=f?f.pathnameBase:"/";f&&f.route;let g=ra(),w;if(l){var S;let M=typeof l=="string"?Ui(l):l;b==="/"||(S=M.pathname)!=null&&S.startsWith(b)||Lt(!1),w=M}else w=g;let N=w.pathname||"/",$=N;if(b!=="/"){let M=b.replace(/^\//,"").split("/");$="/"+N.replace(/^\//,"").split("/").slice(M.length).join("/")}let I=_y(s,{pathname:$}),Q=nv(I&&I.map(M=>Object.assign({},M,{params:Object.assign({},k,M.params),pathname:di([b,u.encodeLocation?u.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?b:di([b,u.encodeLocation?u.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),m,o,d);return l&&Q?h.createElement(tr.Provider,{value:{location:xs({pathname:"/",search:"",hash:"",state:null,key:"default"},w),navigationType:ci.Pop}},Q):Q}function Wy(){let s=sv(),l=Xy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},l),o?h.createElement("pre",{style:u},o):null,null)}const Iy=h.createElement(Wy,null);class ev extends h.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?h.createElement(fi.Provider,{value:this.props.routeContext},h.createElement(hx.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tv(s){let{routeContext:l,match:o,children:d}=s,u=h.useContext(Vd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(fi.Provider,{value:l},d)}function nv(s,l,o,d){var u;if(l===void 0&&(l=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var m;if(!o)return null;if(o.errors)s=o.matches;else if((m=d)!=null&&m.v7_partialHydration&&l.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let f=s,k=(u=o)==null?void 0:u.errors;if(k!=null){let w=f.findIndex(S=>S.route.id&&(k==null?void 0:k[S.route.id])!==void 0);w>=0||Lt(!1),f=f.slice(0,Math.min(f.length,w+1))}let b=!1,g=-1;if(o&&d&&d.v7_partialHydration)for(let w=0;w<f.length;w++){let S=f[w];if((S.route.HydrateFallback||S.route.hydrateFallbackElement)&&(g=w),S.route.id){let{loaderData:N,errors:$}=o,I=S.route.loader&&N[S.route.id]===void 0&&(!$||$[S.route.id]===void 0);if(S.route.lazy||I){b=!0,g>=0?f=f.slice(0,g+1):f=[f[0]];break}}}return f.reduceRight((w,S,N)=>{let $,I=!1,Q=null,M=null;o&&($=k&&S.route.id?k[S.route.id]:void 0,Q=S.route.errorElement||Iy,b&&(g<0&&N===0?(rv("route-fallback"),I=!0,M=null):g===N&&(I=!0,M=S.route.hydrateFallbackElement||null)));let Y=l.concat(f.slice(0,N+1)),q=()=>{let U;return $?U=Q:I?U=M:S.route.Component?U=h.createElement(S.route.Component,null):S.route.element?U=S.route.element:U=w,h.createElement(tv,{match:S,routeContext:{outlet:w,matches:Y,isDataRoute:o!=null},children:U})};return o&&(S.route.ErrorBoundary||S.route.errorElement||N===0)?h.createElement(ev,{location:o.location,revalidation:o.revalidation,component:Q,error:$,children:q(),routeContext:{outlet:null,matches:Y,isDataRoute:!0}}):q()},null)}var gx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(gx||{}),yx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(yx||{});function av(s){let l=h.useContext(Vd);return l||Lt(!1),l}function iv(s){let l=h.useContext(Ky);return l||Lt(!1),l}function lv(s){let l=h.useContext(fi);return l||Lt(!1),l}function vx(s){let l=lv(),o=l.matches[l.matches.length-1];return o.route.id||Lt(!1),o.route.id}function sv(){var s;let l=h.useContext(hx),o=iv(),d=vx();return l!==void 0?l:(s=o.errors)==null?void 0:s[d]}function ov(){let{router:s}=av(gx.UseNavigateStable),l=vx(yx.UseNavigateStable),o=h.useRef(!1);return xx(()=>{o.current=!0}),h.useCallback(function(u,m){m===void 0&&(m={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,xs({fromRouteId:l},m)))},[s,l])}const uh={};function rv(s,l,o){uh[s]||(uh[s]=!0)}function cv(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function ph(s){let{to:l,replace:o,state:d,relative:u}=s;yl()||Lt(!1);let{future:m,static:f}=h.useContext(mi),{matches:k}=h.useContext(fi),{pathname:b}=ra(),g=Pd(),w=Jd(l,Fd(k,m.v7_relativeSplatPath),b,u==="path"),S=JSON.stringify(w);return h.useEffect(()=>g(JSON.parse(S),{replace:o,state:d,relative:u}),[g,S,u,o,d]),null}function Tt(s){Lt(!1)}function dv(s){let{basename:l="/",children:o=null,location:d,navigationType:u=ci.Pop,navigator:m,static:f=!1,future:k}=s;yl()&&Lt(!1);let b=l.replace(/^\/*/,"/"),g=h.useMemo(()=>({basename:b,navigator:m,static:f,future:xs({v7_relativeSplatPath:!1},k)}),[b,k,m,f]);typeof d=="string"&&(d=Ui(d));let{pathname:w="/",search:S="",hash:N="",state:$=null,key:I="default"}=d,Q=h.useMemo(()=>{let M=Kd(w,b);return M==null?null:{location:{pathname:M,search:S,hash:N,state:$,key:I},navigationType:u}},[b,w,S,N,$,I,u]);return Q==null?null:h.createElement(mi.Provider,{value:g},h.createElement(tr.Provider,{children:o,value:Q}))}function uv(s){let{children:l,location:o}=s;return Vy(Od(l),o)}new Promise(()=>{});function Od(s,l){l===void 0&&(l=[]);let o=[];return h.Children.forEach(s,(d,u)=>{if(!h.isValidElement(d))return;let m=[...l,u];if(d.type===h.Fragment){o.push.apply(o,Od(d.props.children,m));return}d.type!==Tt&&Lt(!1),!d.props.index||!d.props.children||Lt(!1);let f={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(f.children=Od(d.props.children,m)),o.push(f)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ud(){return Ud=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Ud.apply(this,arguments)}function pv(s,l){if(s==null)return{};var o={},d=Object.keys(s),u,m;for(m=0;m<d.length;m++)u=d[m],!(l.indexOf(u)>=0)&&(o[u]=s[u]);return o}function mv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function fv(s,l){return s.button===0&&(!l||l==="_self")&&!mv(s)}const hv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],xv="6";try{window.__reactRouterVersion=xv}catch{}const bv="startTransition",mh=my[bv];function gv(s){let{basename:l,children:o,future:d,window:u}=s,m=h.useRef();m.current==null&&(m.current=vy({window:u,v5Compat:!0}));let f=m.current,[k,b]=h.useState({action:f.action,location:f.location}),{v7_startTransition:g}=d||{},w=h.useCallback(S=>{g&&mh?mh(()=>b(S)):b(S)},[b,g]);return h.useLayoutEffect(()=>f.listen(w),[f,w]),h.useEffect(()=>cv(d),[d]),h.createElement(dv,{basename:l,children:o,location:k.location,navigationType:k.action,navigator:f,future:d})}const yv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",vv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jv=h.forwardRef(function(l,o){let{onClick:d,relative:u,reloadDocument:m,replace:f,state:k,target:b,to:g,preventScrollReset:w,viewTransition:S}=l,N=pv(l,hv),{basename:$}=h.useContext(mi),I,Q=!1;if(typeof g=="string"&&vv.test(g)&&(I=g,yv))try{let U=new URL(window.location.href),ne=g.startsWith("//")?new URL(U.protocol+g):new URL(g),P=Kd(ne.pathname,$);ne.origin===U.origin&&P!=null?g=P+ne.search+ne.hash:Q=!0}catch{}let M=Fy(g,{relative:u}),Y=wv(g,{replace:f,state:k,target:b,preventScrollReset:w,relative:u,viewTransition:S});function q(U){d&&d(U),U.defaultPrevented||Y(U)}return h.createElement("a",Ud({},N,{href:I||M,onClick:Q||m?d:q,ref:o,target:b}))});var fh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(fh||(fh={}));var hh;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(hh||(hh={}));function wv(s,l){let{target:o,replace:d,state:u,preventScrollReset:m,relative:f,viewTransition:k}=l===void 0?{}:l,b=Pd(),g=ra(),w=bx(s,{relative:f});return h.useCallback(S=>{if(fv(S,o)){S.preventDefault();let N=d!==void 0?d:Qo(g)===Qo(w);b(s,{replace:N,state:u,preventScrollReset:m,relative:f,viewTransition:k})}},[g,b,w,d,u,o,s,m,f,k])}function qt(){const s=Pd();return h.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function _v(){return ra().pathname}function Nv({href:s,...l}){return t.jsx(jv,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),jx=(...s)=>s.filter((l,o,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=h.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:m,iconNode:f,...k},b)=>h.createElement("svg",{ref:b,...kv,width:l,height:l,stroke:s,strokeWidth:d?Number(o)*24/Number(l):o,className:jx("lucide",u),...k},[...f.map(([g,w])=>h.createElement(g,w)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=(s,l)=>{const o=h.forwardRef(({className:d,...u},m)=>h.createElement(Cv,{ref:m,iconNode:l,className:jx(`lucide-${Sv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=_e("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=_e("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=_e("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=_e("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=_e("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=_e("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=_e("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=_e("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=_e("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=_e("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=_e("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=_e("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=_e("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=_e("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=_e("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=_e("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=_e("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=_e("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=_e("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=_e("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=_e("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=_e("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=_e("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=_e("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=_e("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=_e("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=_e("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=_e("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=_e("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=_e("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=_e("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=_e("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=_e("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=_e("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=_e("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=_e("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=_e("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=_e("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=_e("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=_e("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _x=_e("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=_e("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=_e("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=_e("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=_e("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=_e("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=_e("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=_e("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=_e("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=_e("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=_e("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=_e("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=_e("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=_e("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nx=_e("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=_e("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=_e("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=_e("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=_e("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=_e("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sx=_e("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=_e("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=_e("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=_e("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=_e("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=_e("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=_e("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=_e("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=_e("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kx=_e("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=_e("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=_e("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=_e("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=_e("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=_e("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=_e("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=_e("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=_e("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),p0="/api/v3";var cx;const je=typeof window<"u"&&((cx=window.settings)==null?void 0:cx.secure_path)||"ZicFree123",Yo="authorization";function m0(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(l)===0)try{const m=u.substring(l.length,u.length),f=decodeURIComponent(m),k=JSON.parse(f);return k&&typeof k=="object"&&"value"in k?k.value:f}catch{try{return decodeURIComponent(u.substring(l.length,u.length))}catch{return u.substring(l.length,u.length)}}}return null}function f0(s,l,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:l}),m=window.location.protocol==="https:",f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",k=new Date;k.setTime(k.getTime()+o*24*60*60*1e3);const b=`expires=${k.toUTCString()}`,g=f?"":`domain=${window.location.hostname};`;let w=`${s}=${encodeURIComponent(u)}; ${b}; ${g} path=/`;m&&(w+="; secure"),w+="; SameSite=Lax",document.cookie=w;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function h0(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,o=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(m=>{const f=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${f} path=${m};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Cx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Yo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Yo,s)}catch{}if(!s&&(s=m0("auth_data"),s))try{window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function x0(s,l){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${p0}${o}`,window.location.origin);return Object.entries(l??{}).forEach(([u,m])=>{m!==void 0&&d.searchParams.set(u,String(m))}),d.toString()}function Bt(){return!!Cx()}function b0(s){typeof window>"u"||(window.localStorage.setItem(Yo,s),window.localStorage.setItem("auth_data",s),f0("auth_data",s,36500))}function zx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(m=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${m};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,h0(u)})}async function ye(s,l={}){const o={},d=l.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),l.auth!==!1){const b=Cx();b&&(o.authorization=b)}const u=await fetch(x0(s,l.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),f=(u.headers.get("content-type")||"").includes("application/json"),k=f?await u.json():await u.text();if(!u.ok){const b=typeof k=="object"&&k&&"message"in k?String(k.message):`Request failed with status ${u.status}`,g=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(b);throw(u.status===401||u.status===403&&!g)&&l.auth!==!1&&(zx(),window.location.hash="/login"),new Error(b)}if(!f&&typeof k=="string"&&(k.trim().startsWith("<!DOCTYPE html")||k.trim().startsWith("<html")||k.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return k}async function g0(s,l){return ye("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function y0(){const s=`/${je}/stat`,[l,o,d,u,m,f]=await Promise.all([ye(`${s}/getOverride`),ye(`${s}/getOrder`),ye(`${s}/getServerTodayRank`),ye(`${s}/getServerLastRank`),ye(`${s}/getUserTodayRank`),ye(`${s}/getUserLastRank`)]);return{override:l.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:m.data,userYesterday:f.data}}async function Tx(){return(await ye(`/${je}/config/fetch`)).data}async function Ex(s){return ye(`/${je}/config/save`,{method:"POST",body:s})}async function v0(){return(await ye(`/${je}/config/getEmailTemplate`)).data}async function j0(){return(await ye(`/${je}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function w0(){return ye(`/${je}/config/testSendMail`,{method:"POST",body:{}})}async function _0(s){return ye(`/${je}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function N0(){return(await ye(`/${je}/payment/fetch`)).data}async function S0(){return(await ye(`/${je}/payment/getPaymentMethods`)).data}async function Nh(s,l){return(await ye(`/${je}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function k0(s){return ye(`/${je}/payment/save`,{method:"POST",body:s})}async function C0(s){return ye(`/${je}/payment/show`,{method:"POST",body:{id:s}})}async function z0(s){return ye(`/${je}/payment/drop`,{method:"POST",body:{id:s}})}async function T0(s){return ye(`/${je}/payment/sort`,{method:"POST",body:{ids:s}})}async function E0(){return(await ye(`/${je}/theme/getThemes`)).data}async function M0(s){return(await ye(`/${je}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function A0(s,l){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return ye(`/${je}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function gl(){return(await ye(`/${je}/server/group/fetch`)).data}async function eu(s){return ye(`/${je}/server/group/save`,{method:"POST",body:s})}async function D0(s){return ye(`/${je}/server/group/drop`,{method:"POST",body:{id:s}})}const Mx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Ax(){return(await ye(`/${je}/server/route/fetch`)).data}async function O0(s){return ye(`/${je}/server/route/save`,{method:"POST",body:s})}async function U0(s){return ye(`/${je}/server/route/drop`,{method:"POST",body:{id:s}})}async function hi(){return(await ye(`/${je}/plan/fetch`)).data}async function R0(s){return ye(`/${je}/plan/save`,{method:"POST",body:s})}async function H0(s){return ye(`/${je}/plan/drop`,{method:"POST",body:{id:s}})}async function bd(s,l){return ye(`/${je}/plan/update`,{method:"POST",body:{id:s,...l}})}async function Sh(s){return ye(`/${je}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function L0(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{l.set(`filter[${u}][key]`,d.key),l.set(`filter[${u}][condition]`,d.condition),l.set(`filter[${u}][value]`,d.value)}),await ye(`/${je}/order/fetch?${l.toString()}`)}async function q0(s){return ye(`/${je}/order/paid`,{method:"POST",body:{trade_no:s}})}async function B0(s){return ye(`/${je}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function tu(s){return ye(`/${je}/order/assign`,{method:"POST",body:s})}async function G0(s,l){return ye(`/${je}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function $0(s){return ye(`/${je}/order/detail`,{method:"POST",body:{id:s}})}async function Dx(s=1,l=15){return ye(`/${je}/coupon/fetch?current=${s}&pageSize=${l}`)}async function Y0(s){return ye(`/${je}/coupon/generate`,{method:"POST",body:s})}async function Q0(s){return ye(`/${je}/coupon/drop`,{method:"POST",body:{id:s}})}async function X0(s){return ye(`/${je}/coupon/show`,{method:"POST",body:{id:s}})}async function Z0(s=1,l=15){return ye(`/${je}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function K0(s){return ye(`/${je}/giftcard/generate`,{method:"POST",body:s})}async function F0(s){return ye(`/${je}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Gd(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o&&o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),ye(`/${je}/user/fetch?${d.toString()}`)}async function J0(s){return ye(`/${je}/user/update`,{method:"POST",body:s})}async function Ox(s){return ye(`/${je}/user/getUserInfoById`,{params:{id:s}})}async function V0(s){return ye(`/${je}/user/delUser`,{method:"POST",body:{id:s}})}async function P0(s){return ye(`/${je}/user/generate`,{method:"POST",body:s})}async function W0(s){return ye(`/${je}/user/resetSecret`,{method:"POST",body:{id:s}})}async function I0(s=1,l=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(l)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((m,f)=>{u.set(`filter[${f}][key]`,m.key),u.set(`filter[${f}][condition]`,m.condition),u.set(`filter[${f}][value]`,m.value)}),ye(`/${je}/subscription/fetch?${u.toString()}`)}async function e1(s){return ye(`/${je}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function t1(s){return ye(`/${je}/subscription/update`,{method:"POST",body:s})}async function n1(s){return ye(`/${je}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Ux(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o==null||o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),ye(`/${je}/device/fetch?${d.toString()}`)}async function Rx(s){return ye(`/${je}/device/drop`,{method:"POST",body:{id:s}})}async function Hx(s){return ye(`/${je}/device/ban`,{method:"POST",body:{id:s}})}async function a1(s){return ye(`/${je}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function i1(s,l=1,o=10){return ye(`/${je}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:o}})}async function l1(){return(await ye(`/${je}/notice/fetch`)).data}async function s1(s){return ye(`/${je}/notice/save`,{method:"POST",body:s})}async function o1(s){return ye(`/${je}/notice/drop`,{method:"POST",body:{id:s}})}async function r1(s){return ye(`/${je}/notice/show`,{method:"POST",body:{id:s}})}async function c1(){return(await ye(`/${je}/ticket/fetch`)).data}async function kh(s){return(await ye(`/${je}/ticket/fetch`,{params:{id:s}})).data}async function d1(s,l){return ye(`/${je}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function u1(s){return ye(`/${je}/ticket/close`,{method:"POST",body:{id:s}})}async function p1(){return(await ye(`/${je}/knowledge/fetch`)).data}async function m1(s){return(await ye(`/${je}/knowledge/fetch`,{params:{id:s}})).data}async function f1(s){return ye(`/${je}/knowledge/save`,{method:"POST",body:s})}async function h1(s){return ye(`/${je}/knowledge/drop`,{method:"POST",body:{id:s}})}async function x1(s){return ye(`/${je}/knowledge/show`,{method:"POST",body:{id:s}})}async function b1(){return(await ye(`/${je}/webcon/fetch`)).data}async function g1(s){return ye(`/${je}/webcon/save`,{method:"POST",body:s})}async function y1(s){return ye(`/${je}/webcon/drop`,{method:"POST",body:{id:s}})}async function v1(s){return ye(`/${je}/webcon/show`,{method:"POST",body:{id:s}})}async function j1(){return ye(`/${je}/system/getSystemStatus`)}async function w1(){return(await ye(`/${je}/system/getCoreLicenseStatus`)).data}async function _1(){return(await ye(`/${je}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function N1(){return ye(`/${je}/system/getQueueStats`)}async function S1(){return ye(`/${je}/system/getQueueWorkload`)}async function k1(){return ye(`/${je}/system/getSystemLog`)}async function Ch(){return ye(`/${je}/server/manage/getNodes`)}async function C1(s,l){return ye(`/${je}/server/${s}/save`,{method:"POST",body:l})}async function z1(s,l){return ye(`/${je}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function T1(s,l,o){return ye(`/${je}/server/${s}/update`,{method:"POST",body:{id:l,show:o}})}async function E1(s,l){return ye(`/${je}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function M1(s){return ye(`/${je}/server/manage/sort`,{method:"POST",body:s})}const nu=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Lx="admin-locale",$d="vi-VN",A1="/assets/adminzic",qx=h.createContext(null);function D1(){if(typeof window>"u")return $d;const s=localStorage.getItem(Lx);return s&&nu.some(l=>l.code===s)?s:$d}function O1(s,l){return l?Object.entries(l).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function U1(s){return new Promise((l,o)=>{var f;if(typeof window>"u"){l({});return}const d=(f=window.AdminNextI18n)==null?void 0:f[s];if(d){l(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var k;l(((k=window.AdminNextI18n)==null?void 0:k[s])??{})}),u.addEventListener("error",o);return}const m=document.createElement("script");m.src=`${A1}/i18n/${s}.js`,m.async=!0,m.dataset.adminNextLocale=s,m.onload=()=>{var k;return l(((k=window.AdminNextI18n)==null?void 0:k[s])??{})},m.onerror=o,document.head.appendChild(m)})}function R1({children:s}){const[l,o]=h.useState($d),[d,u]=h.useState({}),[m,f]=h.useState(!0);h.useEffect(()=>{o(D1())},[]);const k=h.useCallback(w=>{o(w),typeof window<"u"&&localStorage.setItem(Lx,w)},[]);h.useEffect(()=>{let w=!0;return f(!0),U1(l).then(S=>{w&&u(S)}).finally(()=>{w&&f(!1)}),()=>{w=!1}},[l]);const b=h.useCallback((w,S)=>O1(d[w]??w,S),[d]),g=h.useMemo(()=>({locale:l,loading:m,setLocale:k,t:b}),[l,m,k,b]);return t.jsx(qx.Provider,{value:g,children:s})}function Fe(){const s=h.useContext(qx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function H1(){const s=qt(),{t:l,locale:o,setLocale:d}=Fe(),[u,m]=h.useState(""),[f,k]=h.useState(""),[b,g]=h.useState(""),[w,S]=h.useState(!1),[N,$]=h.useState(!1),I=h.useRef(null);h.useEffect(()=>{function M(Y){I.current&&!I.current.contains(Y.target)&&$(!1)}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),h.useEffect(()=>{Bt()&&s.replace("/dashboard")},[s]);async function Q(M){var Y,q,U,ne;M.preventDefault(),g(""),S(!0);try{const P=await g0(u,f),te=((Y=P.data)==null?void 0:Y.auth_data)??((q=P.data)==null?void 0:q.token),E=((U=P.data)==null?void 0:U.is_admin)===1||((ne=P.data)==null?void 0:ne.is_admin)===!0;if(!te||!E)throw new Error(l("login.adminRequired"));b0(te),s.replace("/dashboard")}catch(P){g(P instanceof Error?P.message:l("login.failed"))}finally{S(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:I,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>$(M=>!M),children:t.jsx(ys,{size:17})}),N?t.jsx("div",{className:"locale-menu",children:nu.map(M=>t.jsxs("button",{className:`locale-option ${o===M.code?"active":""}`,type:"button",onClick:()=>{d(M.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:M.flag}),t.jsx("span",{children:M.label})]},M.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(t0,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Q,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(_x,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:M=>m(M.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"text",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Zv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:M=>k(M.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:f})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,t.jsx("button",{className:"primary-button",disabled:w,type:"submit",children:l(w?"login.signingIn":"login.submit")})]})]})]})}function An(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function oa(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function L1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const q1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Bv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:i0},{href:"/config/payment",label:"nav.paymentConfig",icon:Uv},{href:"/config/theme",label:"nav.themeConfig",icon:r0}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Id},{href:"/server/group",label:"nav.groupManagement",icon:d0},{href:"/server/route",label:"nav.routeManagement",icon:a0}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:jh},{href:"/order",label:"nav.orders",icon:Xv},{href:"/coupon",label:"nav.coupons",icon:Gv},{href:"/giftcard",label:"nav.giftcards",icon:s0}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:kx},{href:"/subscription",label:"nav.subscriptions",icon:jh},{href:"/device",label:"nav.devices",icon:l0},{href:"/webcon",label:"nav.webcon",icon:ys},{href:"/notice",label:"nav.notices",icon:us},{href:"/ticket",label:"nav.tickets",icon:Qv},{href:"/knowledge",label:"nav.knowledge",icon:Ev}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Mv}]}];function B1(){const[s,l]=h.useState("light");h.useEffect(()=>{const m=localStorage.getItem("admin-theme")??"light";l(m),document.documentElement.setAttribute("data-theme",m)},[]);const o=h.useCallback(u=>{l(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=h.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Bx(s){return s?new Date(s*1e3):null}function G1(s,l){const o=Bx(l);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function $1(s){const l=Bx(s);return l?Math.ceil((l.getTime()-Date.now())/864e5):null}function Vt({children:s,title:l,subtitle:o}){const[d,u]=h.useState(!1),m=qt(),f=_v(),{t:k,locale:b,setLocale:g}=Fe(),{theme:w,toggle:S}=B1(),[N,$]=h.useState(!1),I=h.useRef(null),[Q,M]=h.useState(null),[Y,q]=h.useState(!1),U=h.useCallback(async(_=!1)=>{if(Bt()){q(_);try{M(_?await _1():await w1())}catch(O){M({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:k("license.unavailable"),error:O instanceof Error?O.message:k("license.unavailable")})}finally{q(!1)}}},[k]);h.useEffect(()=>{function _(O){I.current&&!I.current.contains(O.target)&&$(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),h.useEffect(()=>{U(!1);const _=window.setInterval(()=>{U(!1)},6e4);return()=>window.clearInterval(_)},[U]);function ne(){zx(),m.replace("/login")}const P=(Q==null?void 0:Q.license_expires_at)??(Q==null?void 0:Q.expires_at),te=G1(b,P),E=typeof(Q==null?void 0:Q.days_until_expiry)=="number"?Q.days_until_expiry:$1(P),F=typeof E=="number"?E<=0?k("license.expiresToday"):k("license.daysLeft",{days:E}):null,ie=!!Q&&Q.available&&!Q.requires_renewal,ve=ie&&!!(Q!=null&&Q.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:k("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:q1.map(_=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:k(_.label)}),_.items.map(O=>{const ae=O.icon,G=f===O.href;return t.jsxs(Nv,{className:`nav-item ${G?"active":""}`,href:O.href,onClick:()=>u(!1),children:[t.jsx(ae,{size:17}),t.jsx("span",{children:k(O.label)})]},O.href)})]},_.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":k(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(_=>!_),children:d?t.jsx(lt,{size:19}):t.jsx(Fv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ie?t.jsxs("button",{className:`license-chip ${ve?"warning":""}`,type:"button",disabled:Y,title:k("license.refresh"),onClick:()=>void U(!0),children:[t.jsx(gh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:k("license.validUntil")}),t.jsx("strong",{children:te??k("license.unknownExpiry")})]}),F?t.jsx("small",{children:F}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:I,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":k("common.language"),onClick:()=>$(_=>!_),children:t.jsx(ys,{size:17})}),N?t.jsx("div",{className:"locale-menu",children:nu.map(_=>t.jsxs("button",{className:`locale-option ${b===_.code?"active":""}`,type:"button",onClick:()=>{g(_.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:_.flag}),t.jsx("span",{children:_.label})]},_.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":w==="dark"?"Switch to light mode":"Switch to dark mode",onClick:S,children:w==="dark"?t.jsx(o0,{size:17}):t.jsx(Jv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ne,children:[t.jsx(Kv,{size:16}),t.jsx("span",{children:k("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Q!=null&&Q.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(qd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.renewTitle")}),t.jsx("p",{children:k("license.renewBody")}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Q.status,Q.error?` - ${Q.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void U(!0),children:[t.jsx(Dt,{size:16}),k(Y?"license.refreshing":"license.refresh")]})]}):null,ve?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(gh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.expiryWarningTitle")}),t.jsx("p",{children:k("license.expiryWarningBody",{date:te??k("license.unknownExpiry"),days:E??""})}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Q.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void U(!0),children:[t.jsx(Dt,{size:16}),k(Y?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const zh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Gx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ps(s){return Number(s??0)}function Th(s){return ps(s)/100}function Eh(s){return`${oa(Math.round(s))} VND`}function $x(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function Y1(s){const l=new Date;return l.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(l);return u.setDate(l.getDate()-(s-d-1)),$x(u)})}function Mh(s,l){const o=s.get(l);if(o)return o;const d=Gx(l);return s.set(l,d),d}function Q1(s){const l=s.toLowerCase();return l==="register_count"||l.includes("đăng")||l.includes("register")?"registrations":l==="order_count"?"orderCount":l==="paid_count"||l.includes("giao dịch thu")?"paidCount":l==="paid_total"||l.includes("tiền thu")?"paidAmount":l==="commission_count"||l.includes("giao dịch hoa hồng")?"commissionCount":l==="commission_total"||l.includes("tiền hoa hồng")?"commissionAmount":null}function Oo({label:s,value:l,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Tv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function _t({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Dt,{size:18}),t.jsx("span",{children:s})]})}function X1(s,l){const o=new Map,d=new Map;if(s.forEach(u=>{const m=Mh(o,u.date),f=Q1(u.type);if(f){m[f]=Number(u.value||0);return}const k=d.get(u.date)??0,b=zh[k%zh.length];m[b]=Number(u.value||0),d.set(u.date,k+1)}),l){const u=Mh(o,$x(new Date));u.registrations=ps(l.day_register_total),l.day_order_total!==void 0&&(u.orderCount=ps(l.day_order_total)),l.day_paid_order_total!==void 0&&(u.paidCount=ps(l.day_paid_order_total)),u.paidAmount=Th(l.day_paid_income??l.day_income),l.day_commission_payout!==void 0&&(u.commissionAmount=Th(l.day_commission_payout)),l.day_commission_count!==void 0&&(u.commissionCount=ps(l.day_commission_count))}return o.size===0?[]:Y1(31).map(u=>o.get(u)??Gx(u))}function Z1({records:s,override:l}){const{t:o}=Fe(),[d,u]=h.useState(["paidAmount","orderCount","paidCount","commissionAmount","commissionCount","registrations"]),[m,f]=h.useState(null),k=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#14b8a6",unit:"money",format:Eh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#60a5fa",unit:"count",format:oa},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#a78bfa",unit:"count",format:oa},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#f97316",unit:"money",format:Eh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#fb7185",unit:"count",format:oa},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#22c55e",unit:"count",format:oa}],b=X1(s,l),g=k.filter(v=>d.includes(v.key)),w=g.filter(v=>v.unit==="money"),S=g.filter(v=>v.unit==="count"),N=Math.max(1,...w.flatMap(v=>b.map(H=>Number(H[v.key]||0)))),$=Math.max(1,...S.flatMap(v=>b.map(H=>Number(H[v.key]||0)))),I=920,Q=300,M=40,Y=26,U=Q-Y-36,ne=b.length>1?(I-M*2)/(b.length-1):0,P=Math.max(Math.ceil(b.length/7),1),te=m===null?null:b[m]??null,E=v=>({"--metric-color":v.color}),F=(v,H)=>Number(v[H.key]||0),ie=v=>v.unit==="money"?N:$,ve=v=>M+v*ne,_=m===null?50:Math.min(88,Math.max(12,ve(m)/I*100)),O=(v,H)=>Y+U-v/ie(H)*U,ae=v=>Math.max(0,...b.map(H=>F(H,v))),G=v=>{const H=b.map((z,he)=>({x:ve(he),y:O(F(z,v),v)}));return H.length?H.length===1?`M ${H[0].x} ${H[0].y}`:H.slice(1).reduce((z,he,oe)=>{const C=H[oe],B=(C.x+he.x)/2;return`${z} C ${B} ${C.y}, ${B} ${he.y}, ${he.x} ${he.y}`},`M ${H[0].x} ${H[0].y}`):""};function ce(v){u(H=>H.includes(v)?H.length===1?H:H.filter(z=>z!==v):[...H,v]),f(null)}return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading chart-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:b.length})})]}),t.jsx("div",{className:"chart-legend",role:"group","aria-label":o("dashboard.chartMetrics"),children:k.map(v=>{const H=d.includes(v.key);return t.jsxs("button",{type:"button",className:`chart-legend-toggle ${H?"active":""}`,style:E(v),onClick:()=>ce(v.key),"aria-pressed":H,children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:v.label})]},v.key)})}),b.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"chart-frame",onMouseLeave:()=>f(null),children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${I} ${Q}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"dashboardChartBackdrop",x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"currentColor",stopOpacity:"0.05"}),t.jsx("stop",{offset:"100%",stopColor:"currentColor",stopOpacity:"0"})]})}),t.jsx("rect",{className:"chart-plot-bg",x:M,y:Y,width:I-M*2,height:U,rx:"14"}),[0,.25,.5,.75,1].map(v=>t.jsx("line",{className:"chart-grid",x1:M,x2:I-M,y1:Y+v*U,y2:Y+v*U},v)),m!==null?t.jsx("line",{className:"chart-hover-line",x1:ve(m),x2:ve(m),y1:Y,y2:Y+U}):null,g.map(v=>t.jsx("path",{className:"chart-series-line",d:G(v),style:E(v)},v.key)),m!==null?g.map(v=>t.jsx("circle",{className:"chart-series-dot",cx:ve(m),cy:O(F(b[m],v),v),r:"5",style:E(v)},`${v.key}-${m}`)):null,b.map((v,H)=>{const z=b.length>1?ne:I-M*2;return t.jsx("rect",{className:"chart-hover-zone",x:ve(H)-z/2,y:Y,width:z,height:U,onMouseEnter:()=>f(H),onFocus:()=>f(H),onClick:()=>f(H),tabIndex:0},v.date)})]}),te?t.jsxs("div",{className:"chart-tooltip chart-tooltip-multi",style:{left:`${_}%`},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",te.date]}),t.jsx("div",{className:"tooltip-series-list",children:g.map(v=>t.jsxs("div",{className:"tooltip-series-row",style:E(v),children:[t.jsx("span",{className:"tooltip-dot"}),t.jsx("span",{children:v.label}),t.jsx("strong",{children:v.format(F(te,v))})]},v.key))})]}):null]}),t.jsx("div",{className:"chart-axis",children:b.filter((v,H)=>H===0||H===b.length-1||H%P===0).map(v=>t.jsx("span",{children:v.date},v.date))}),t.jsx("div",{className:"chart-insights",children:g.map(v=>t.jsxs("div",{className:"chart-insight",style:E(v),children:[t.jsx("span",{className:"chart-legend-swatch"}),t.jsx("span",{children:v.summaryLabel}),t.jsx("strong",{children:v.format(ae(v))})]},v.key))})]})]})}function Uo({title:s,subtitle:l,records:o,labelKey:d}){const{t:u}=Fe(),m=Math.max(...o.map(f=>Number(f.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((f,k)=>{const b=d==="server_name"?f.server_name||u("dashboard.unnamedNode"):f.email||u("dashboard.unknownUser"),g=Number(f.total||0)/m*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:k+1}),t.jsx("strong",{children:b}),t.jsxs("small",{children:[L1(f.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(g,3)}%`}})})]},`${b}-${k}`)})})]})}function gd({label:s,current:l,previous:o}){const{t:d}=Fe();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?oa(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?oa(o):o]})]})}function K1(){var g,w,S,N,$,I,Q,M,Y,q,U,ne;const s=qt(),{t:l}=Fe(),[o,d]=h.useState(null),[u,m]=h.useState(""),[f,k]=h.useState(!0),b=h.useCallback(async()=>{k(!0),m("");try{d(await y0())}catch(P){m(P instanceof Error?P.message:l("dashboard.loadFailed"))}finally{k(!1)}},[l]);return h.useEffect(()=>{if(!Bt()){s.replace("/login");return}b()},[b,s]),t.jsxs(Vt,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:b,children:[t.jsx(Dt,{size:16}),l("common.retry")]})]}):null,f&&!o?t.jsx(_t,{label:l("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((g=o.override)==null?void 0:g.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(w=o.override)==null?void 0:w.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:b,disabled:f,children:[t.jsx(Dt,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Oo,{label:l("dashboard.onlineUsers"),value:oa(((S=o.override)==null?void 0:S.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Oo,{label:l("dashboard.todayIncome"),value:`${An(((N=o.override)==null?void 0:N.day_paid_income)??(($=o.override)==null?void 0:$.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Oo,{label:l("dashboard.todayRegistrations"),value:oa(((I=o.override)==null?void 0:I.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Oo,{label:l("dashboard.pendingCommission"),value:oa(((Q=o.override)==null?void 0:Q.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(gd,{label:l("dashboard.monthIncome"),current:`${An(((M=o.override)==null?void 0:M.month_income)??0)} VND`,previous:`${An(((Y=o.override)==null?void 0:Y.last_month_income)??0)} VND`}),t.jsx(gd,{label:l("dashboard.monthCommission"),current:`${An(((q=o.override)==null?void 0:q.commission_month_payout)??0)} VND`,previous:`${An(((U=o.override)==null?void 0:U.commission_last_month_payout)??0)} VND`}),t.jsx(gd,{label:l("dashboard.monthRegistrations"),current:((ne=o.override)==null?void 0:ne.month_register_total)??0,previous:"-"})]}),t.jsx(Z1,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Uo,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Uo,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Uo,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Uo,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const F1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Ah(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function J1(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function yd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function V1(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function P1(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function W1(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function tn(s){return s===!0||s===1||s==="1"}function I1(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function vd(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function ej(s){return s.split(/\r\n|\r|\n/).map(l=>l.trim()).filter(Boolean).join(`
`)}function tj({field:s,value:l,onChange:o}){const{t:d}=Fe(),u=s.toInput?s.toInput(l):I1(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${tn(l)?"on":""}`,type:"button",onClick:()=>o(tn(l)?0:1),"aria-pressed":tn(l),children:[t.jsx("span",{}),tn(l)?Ah(d)[0].label:Ah(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:m=>o(m.target.value),children:(s.options??[]).map(m=>t.jsx("option",{value:m.value,children:m.label},String(m.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function nj({plans:s,emailTemplates:l,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"webcon_shared_subscribe_url_enable",label:o("config.site.webconSharedSubscribeUrl"),description:o("config.site.webconSharedSubscribeUrlHelp"),type:"switch"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>tn(u.email_whitelist_enable),fromInput:vd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>tn(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>tn(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>tn(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:P1(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:J1(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:yd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:yd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:yd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:V1(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>tn(u.subscribe_url_ua_enable),fromInput:ej}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:vd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:W1(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:vd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>tn(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>tn(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>tn(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>tn(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:l.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function aj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState("site"),[u,m]=h.useState(null),[f,k]=h.useState([]),[b,g]=h.useState([]),[w,S]=h.useState(!0),[N,$]=h.useState(null),[I,Q]=h.useState(""),M=h.useCallback(async()=>{S(!0),Q("");try{const[F,ie,ve]=await Promise.all([Tx(),j0(),v0()]);m(F),k(ie),g(ve)}catch(F){Q(F instanceof Error?F.message:l("config.loadFailed"))}finally{S(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}M()},[M,s]),h.useEffect(()=>{const F=document.querySelector(".config-tabs button.active");F&&F.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Y=h.useMemo(()=>nj({plans:f,emailTemplates:b,t:l}),[f,b,l]),q=Y.find(F=>F.key===o)??Y[0],U=(u==null?void 0:u[q.key])??{};function ne(F,ie,ve){m(_=>_&&{..._,[F]:{..._[F],[ie]:ve}})}async function P(){var ve,_,O;if(!u)return;const F=q.key==="safe"?String(((ve=window.settings)==null?void 0:ve.secure_path)??"").trim():"",ie=q.key==="safe"?String(((_=u.safe)==null?void 0:_.secure_path)??"").trim():"";$(q.key),Q("");try{await Ex(u[q.key]),(O=window.showToast)==null||O.call(window,l("config.saveSuccess"),"success"),q.key==="safe"&&ie&&ie!==F&&(window.settings={...window.settings??{},secure_path:ie},window.location.replace(`${window.location.origin}/${ie}`))}catch(ae){Q(ae instanceof Error?ae.message:l("config.saveFailed"))}finally{$(null)}}async function te(){var F;$("mail"),Q("");try{await w0(),(F=window.showToast)==null||F.call(window,l("config.email.testSuccess"),"success")}catch(ie){Q(ie instanceof Error?ie.message:l("config.email.testFailed"))}finally{$(null)}}async function E(){var ie;const F=String((u==null?void 0:u.telegram.telegram_bot_token)??"");$("webhook"),Q("");try{await _0(F),(ie=window.showToast)==null||ie.call(window,l("config.telegram.webhookSuccess"),"success")}catch(ve){Q(ve instanceof Error?ve.message:l("config.telegram.webhookFailed"))}finally{$(null)}}return t.jsxs(Vt,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:M,disabled:w,children:[t.jsx(Dt,{size:16}),l(w?"common.refreshing":"common.refresh")]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,w&&!u?t.jsx(_t,{label:l("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:F1.map(F=>{const ie=Y.find(ve=>ve.key===F);return ie?t.jsxs("button",{className:o===F?"active":"",type:"button",onClick:()=>d(F),children:[t.jsx("span",{children:ie.label}),t.jsx("small",{children:ie.hint})]},F):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:q.label}),t.jsx("p",{children:q.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:N===q.key,type:"button",onClick:P,children:[t.jsx(On,{size:16}),N===q.key?l("config.saving"):l("config.saveTab")]})]}),q.warning?t.jsx("div",{className:"config-warning",children:q.warning}):null,t.jsx("div",{className:"config-fields",children:q.fields.map(F=>F.visible&&!F.visible(U)?null:t.jsx(tj,{field:F,value:U[F.key],onChange:ie=>ne(q.key,F.key,ie)},F.key))}),q.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:N==="mail",onClick:te,children:[t.jsx(_x,{size:16}),l(N==="mail"?"config.email.testing":"config.email.test")]})}):null,q.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:N==="webhook",onClick:E,children:[t.jsx(c0,{size:16}),l(N==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(Nx,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function ui(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function jd(s){return s===!0||s===1||s==="1"}function ij(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function lj(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function sj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,k]=h.useState(null),[b,g]=h.useState({}),[w,S]=h.useState(!0),[N,$]=h.useState(!1),[I,Q]=h.useState(!1),[M,Y]=h.useState(""),[q,U]=h.useState(""),[ne,P]=h.useState({}),te=h.useCallback(async()=>{S(!0),Y("");try{const[G,ce]=await Promise.all([N0(),S0()]);d(G),m(ce),P({})}catch(G){Y(G instanceof Error?G.message:l("payment.loadFailed"))}finally{S(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}te()},[te,s]);async function E(G){const ce=(G==null?void 0:G.payment)??u[0]??"",v=ij(G,ce);if(k(v),g({}),Y(""),U(""),!!ce){$(!0);try{g(await Nh(ce,G==null?void 0:G.id))}catch(H){Y(H instanceof Error?H.message:l("payment.formLoadFailed"))}finally{$(!1)}}}async function F(G){if(f){k({...f,payment:G,config:{}}),$(!0),Y("");try{g(await Nh(G,f.id))}catch(ce){Y(ce instanceof Error?ce.message:l("payment.formLoadFailed"))}finally{$(!1)}}}async function ie(G){var ce,v;if(G.preventDefault(),!!f){Q(!0),Y(""),U("");try{await k0(lj(f)),k(null),(ce=window.showToast)==null||ce.call(window,l("payment.saveSuccess"),"success"),await te()}catch(H){(v=window.showToast)==null||v.call(window,H instanceof Error?H.message:l("payment.saveFailed"),"error")}finally{Q(!1)}}}async function ve(G){var ce;Y(""),U("");try{await C0(G),await te()}catch(v){(ce=window.showToast)==null||ce.call(window,v instanceof Error?v.message:l("payment.toggleFailed"),"error")}}async function _(G){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var v,H;Y(""),U("");try{await z0(G),(v=window.showToast)==null||v.call(window,l("payment.deleteSuccess"),"success"),await te()}catch(z){(H=window.showToast)==null||H.call(window,z instanceof Error?z.message:l("payment.deleteFailed"),"error")}}})}async function O(G,ce){var he;const v=G+ce;if(v<0||v>=o.length)return;const H=[...o],z=H[G];H.splice(G,1),H.splice(v,0,z),d(H);try{await T0(H.map(oe=>oe.id)),await te()}catch(oe){(he=window.showToast)==null||he.call(window,oe instanceof Error?oe.message:l("payment.sortFailed"),"error"),await te()}}async function ae(G){var v;const ce=await ui(G);(v=window.showToast)==null||v.call(window,l(ce?"payment.copied":"common.copyFailed"),ce?"success":"error")}return t.jsxs(Vt,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:te,disabled:w,children:[t.jsx(Dt,{size:16}),t.jsx("span",{children:l(w?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void E(),children:[t.jsx(Dn,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,w&&o.length===0?t.jsx(_t,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((G,ce)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:G.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void O(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(bh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void O(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(xh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${jd(G.enable)?"active":""}`,type:"button",onClick:()=>void ve(G.id),"aria-label":jd(G.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:G.name}),G.icon?t.jsx("small",{children:G.icon}):null]}),t.jsx("td",{children:G.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void ae(G.notify_url),children:[t.jsx("span",{children:G.notify_url}),t.jsx(bs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void E(G),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(G.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},G.id)),!w&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((G,ce)=>{const v=jd(G.enable),H=G.handling_fee_percent!==null&&G.handling_fee_percent!==""?`${G.handling_fee_percent}%`:"",z=G.handling_fee_fixed!==null?`${An(G.handling_fee_fixed)} VND`:"",he=[H,z].filter(Boolean).join(" + ")||"No fees",oe=ne[G.id],C=G.icon&&!oe;return t.jsxs("div",{className:`payment-mobile-card ${v?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",G.id]}),t.jsx("span",{className:"gateway-tag",children:G.payment})]}),t.jsx("button",{className:`admin-switch ${v?"active":""}`,type:"button",onClick:()=>void ve(G.id),"aria-label":l(v?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[C?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:G.icon,alt:G.name,onError:()=>{P(B=>({...B,[G.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:G.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:G.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:he})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void ae(G.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:G.notify_url}),t.jsx(bs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void O(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(bh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void O(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(xh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void E(G),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void _(G.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},G.id)}),!w&&o.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:G=>k({...f,name:G.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:f.icon,onChange:G=>k({...f,icon:G.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:f.notify_domain,onChange:G=>k({...f,notify_domain:G.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:f.handling_fee_percent,onChange:G=>k({...f,handling_fee_percent:G.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:f.handling_fee_fixed,onChange:G=>k({...f,handling_fee_fixed:G.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:f.payment,onChange:G=>void F(G.target.value),children:u.map(G=>t.jsx("option",{value:G,children:G},G))})]}),N?t.jsx(_t,{label:l("payment.formLoading")}):null,N?null:Object.entries(b).map(([G,ce])=>t.jsxs("label",{children:[t.jsx("span",{children:ce.label}),t.jsx("input",{className:"config-input",placeholder:ce.description,value:String(f.config[G]??ce.value??""),onChange:v=>k({...f,config:{...f.config,[G]:v.target.value}})})]},G)),f.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(On,{size:16}),l(I?"payment.saving":"common.save")]})]})]})]})}):null]})}function oj(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function rj(s,l){return l[s.field_name]??s.default_value??""}function cj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState(null),[u,m]=h.useState(null),[f,k]=h.useState(!0),[b,g]=h.useState(!1),[w,S]=h.useState(!1),[N,$]=h.useState(null),[I,Q]=h.useState(""),[M,Y]=h.useState(""),q=h.useCallback(async()=>{k(!0),Q("");try{d(await E0())}catch(E){Q(E instanceof Error?E.message:l("theme.loadFailed"))}finally{k(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}q()},[q,s]);async function U(E,F){m(null),g(!0),Q(""),Y("");try{const ie=await M0(E);m({key:E,theme:F,values:ie})}catch(ie){Q(ie instanceof Error?ie.message:l("theme.configLoadFailed"))}finally{g(!1)}}async function ne(E){$(E),Q(""),Y("");try{await Ex({frontend_theme:E}),Y(l("theme.activateSuccess")),await q()}catch(F){Q(F instanceof Error?F.message:l("theme.activateFailed"))}finally{$(null)}}async function P(E){if(E.preventDefault(),!!u){S(!0),Q(""),Y("");try{await A0(u.key,u.values),m(null),Y(l("theme.saveSuccess")),await q()}catch(F){Q(F instanceof Error?F.message:l("theme.saveFailed"))}finally{S(!1)}}}function te(E,F){m(ie=>ie&&{...ie,values:{...ie.values,[E]:F}})}return t.jsxs(Vt,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:q,disabled:f,children:[t.jsx(Dt,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),I?t.jsx("div",{className:"form-error",children:I}):null,M?t.jsx("div",{className:"form-success",children:M}):null,f&&!o?t.jsx(_t,{label:l("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([E,F])=>{const ie=o.active===E;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${oj(F)})`},children:ie?t.jsxs("span",{className:"theme-active",children:[t.jsx(wx,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:F.name||E}),t.jsx("p",{children:F.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",F.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(E,F),children:[t.jsx(e0,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ie||N===E,type:"button",onClick:()=>void ne(E),children:[t.jsx(Vv,{size:15}),l(ie?"theme.current":N===E?"theme.activating":"theme.activate")]})]})]},E)})}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(_t,{label:l("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[(u.theme.configs??[]).map(E=>{const F=rj(E,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:E.label}),E.description?t.jsx("p",{className:"field-description",children:E.description}):null,E.field_type==="select"?t.jsx("select",{className:"config-input",value:F,onChange:ie=>te(E.field_name,ie.target.value),children:Object.entries(E.select_options??{}).map(([ie,ve])=>t.jsx("option",{value:ie,children:ve},ie))}):null,E.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:E.placeholder,rows:5,value:F,onChange:ie=>te(E.field_name,ie.target.value)}):null,E.field_type!=="select"&&E.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:E.placeholder,value:F,onChange:ie=>te(E.field_name,ie.target.value)}):null]},E.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(On,{size:16}),l(w?"theme.saving":"common.save")]})]})]})]})}):null]})}const Yd=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],dj=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],uj=["tcp","ws","grpc","http","httpupgrade","xhttp"],Yx=["tcp","ws","grpc"],Qx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],pj=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Ko=["anytls","hysteria2","trojan","tuic"],mj=["tcp","ws","grpc","httpupgrade","xhttp"],fj=["chrome","firefox","safari","ios","android","edge","360","qq"],hj=["vmess","vless","trojan","hysteria","tuic","anytls"],xj=["trojan","hysteria","tuic","anytls"],Xx=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],Fo={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},Jo=[10,20,50,100],Zx="admin_server_manage_page_size";function Kx(s){return Jo.includes(s)}function bj(){if(typeof window>"u")return Jo[0];try{const s=Number(window.localStorage.getItem(Zx));if(Kx(s))return s}catch{}return Jo[0]}const au=typeof window<"u"?window.location.origin:"",gj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function yj(s,l,o=""){return s[l]??o}function Ie(s,l,o=""){return String(yj(s,l,o))}function vj(s,l){const o=s[l];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function pi(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const l=JSON.parse(s);return l&&typeof l=="object"&&!Array.isArray(l)?l:{}}catch{return{}}}function Qd(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function jj(s){return s==="vmess"?"networkSettings":"network_settings"}function wj(s,l){const o=s==="vmess",d=s==="vless"||Wn(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(l){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function Wn(s){return s==="v2node"||s==="zicnode"}function _j(s){return xj.includes(s)}function Nj(s){return Wn(s)||hj.includes(s)}function Dh(s){return s==="vmess"?"tlsSettings":"tls_settings"}function Sj(s){const l=String((s==null?void 0:s._type)??"");return _j(l)?1:Number((s==null?void 0:s.tls)??0)}function Vo(s){return!!s&&s!=="shadowsocks"}function kj(s){return s==="vless"||s==="vmess"}function Po(s){return s==="vless"||s==="anytls"}function Cj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Oh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Yx:s==="vless"||s==="vmess"?mj:[]}function zj(s){var l;return Wn(s)?"ZicNode":((l=Yd.find(o=>o.value===s))==null?void 0:l.label)??s}function kt(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function iu(s){return s===!0||s===1||s==="1"||s==="true"}function Uh(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s:""}function Fx(s){return Array.isArray(s)?s.map(l=>String(l).trim()).filter(Boolean):typeof s=="string"?s.split(",").map(l=>l.trim()).filter(Boolean):[]}function Tj(s){return Fx(s).map(l=>Number(l)).filter(l=>Number.isInteger(l)&&l>=0&&l<=255)}function Wo(s){const l={...Fo,...pi(s)};if(!iu(l.enable))return{enable:!1};const d={enable:!0,mode:["auto","manual"].includes(String(l.mode))?l.mode:"auto",fail_policy:["direct","block"].includes(String(l.fail_policy))?l.fail_policy:"direct",mtu:Number(l.mtu)>0?Number(l.mtu):1280,domain_strategy:Xx.includes(String(l.domain_strategy))?l.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(f=>{const k=kt(l[f]);k&&(d[f]=k)});const u=Fx(l.addresses);u.length&&(d.addresses=u);const m=Tj(l.reserved);return m.length&&(d.reserved=m),d}const Ej=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],Mj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert","allow_insecure","allowInsecure"];function sa(s,l){const o=pi(s);if(l===0)return{};const d={...o};return l===1?Ej.forEach(u=>delete d[u]):l===2&&Mj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const m=d[u];(m===""||m===null||m===void 0)&&delete d[u]}),d}function Aj(s){const l=pi(s);if(!Object.keys(l).length)return{state:"pending",hasPin:!1,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"};const o=String(l.status??"").trim().toLowerCase(),d=!!(kt(l.public_key_sha256)||kt(l.sha256_hex)||kt(l.sha256));return o==="error"?{state:"error",hasPin:d,labelKey:"node.autoCertError",detailKey:"node.autoCertErrorHelp"}:d?{state:"ready",hasPin:d,labelKey:"node.autoCertReady",detailKey:"node.autoCertReadyHelp"}:{state:"pending",hasPin:d,labelKey:"node.autoCertPending",detailKey:"node.autoCertPendingHelp"}}function Rh(s,l=au){return kt(s).replace(/\/+$/,"")||l}function Hh(s){return`'${s.replace(/'/g,"'\\''")}'`}function Dj(s,l){const o=l.apiHost||au,d=l.apiKey||"TOKEN_MOI";return`wget -N ${gj} && \\
bash install.sh --api-host ${Hh(o)} --node-id ${s} --api-key ${Hh(d)}`}function Lh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function qh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));if(d.group_id=Lh(d.group_id),d.route_id=Lh(d.route_id),Wn(s)){d.warp_settings={...Fo,...pi(d.warp_settings)};const u=String(d.protocol??""),m=Number(d.tls??0);m===2&&!Po(u)?d.tls=Vo(u)?1:0:Ko.includes(u)&&m!==2&&(d.tls=1)}return{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:"1",show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...Fo}};default:return o}}function Jx({initialValue:s,placeholder:l,onCancel:o,onSave:d}){const{t:u}=Fe(),[m,f]=h.useState(()=>Qd(s)?JSON.stringify(s,null,2):""),[k,b]=h.useState(""),g=S=>{if(S.preventDefault(),!m.trim()){d({});return}try{const N=JSON.parse(m);if(typeof N!="object"||N===null)throw new Error("Must be a JSON object {} or array []");d(N)}catch(N){b(N instanceof Error?N.message:"Invalid JSON")}},w=S=>{if(f(S),!S.trim()){b("");return}try{const N=JSON.parse(S);if(typeof N!="object"||N===null)throw new Error("Must be a JSON object {} or array []");b("")}catch(N){b(N instanceof Error?N.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:u("node.jsonContent")}),k&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",k]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:k?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:m,onChange:S=>w(S.target.value),placeholder:l??`{
  "key": "value"
}`,autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:o,children:u("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!k,children:u("common.confirm")})]})]})}function Te({label:s,required:l,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function Oj({value:s,onChange:l,label:o}){const{t:d}=Fe(),[u,m]=h.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((f,k)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((b,g)=>g!==k)),style:{cursor:"pointer"},children:[f," ×"]},k)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:f=>m(f.target.value),onKeyDown:f=>{f.key==="Enter"&&u.trim()&&(f.preventDefault(),l([...s,u.trim()]),m(""))}})]})]})}function Bh({options:s,value:l,onChange:o,label:d,actionText:u,onAction:m}){const{t:f}=Fe(),[k,b]=h.useState(""),g=s.filter(S=>l.includes(S.id)),w=s.filter(S=>S.name.toLowerCase().includes(k.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:u,onAction:m}),g.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:g.map(S=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(l.filter(N=>N!==S.id)),children:[S.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},S.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${f("common.search")}...`,value:k,onChange:S=>b(S.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[w.map(S=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(S.id),onChange:N=>o(N.target.checked?[...l,S.id]:l.filter($=>$!==S.id))}),t.jsx("span",{children:S.name})]},S.id)),w.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?f("node.noGroupsAvailable"):f("node.noResultsFound")})]})]})}function In({label:s,checked:l,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Uj({initialValue:s,isSnakeCase:l,tlsMode:o,nodeType:d,onCancel:u,onSave:m}){const{t:f}=Fe(),k=l?"server_name":"serverName",b=l?"allow_insecure":"allowInsecure",g=Wn(d),w=Nj(d),S=o===1&&w,[N,$]=h.useState(String((s==null?void 0:s[k])??"")),[I,Q]=h.useState(String((s==null?void 0:s.dest)??"")),[M,Y]=h.useState(String((s==null?void 0:s.server_port)??"443")),[q,U]=h.useState(String((s==null?void 0:s.xver)??"0")),[ne,P]=h.useState(String((s==null?void 0:s.private_key)??"")),[te,E]=h.useState(String((s==null?void 0:s.public_key)??"")),[F,ie]=h.useState(String((s==null?void 0:s.short_id)??"")),[ve,_]=h.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[O,ae]=h.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[G,ce]=h.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),v=String((s==null?void 0:s.cert_mode)??"").trim(),[H,z]=h.useState(v||"auto"),[he,oe]=h.useState(String((s==null?void 0:s.provider)??"")),[C,B]=h.useState(String((s==null?void 0:s.dns_env)??"")),[pe,xe]=h.useState(String((s==null?void 0:s.cert_file)??"")),[ze,Ne]=h.useState(String((s==null?void 0:s.key_file)??"")),[qe,D]=h.useState(()=>{const ke=s==null?void 0:s.reject_unknown_sni;return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),[fe,me]=h.useState(String((s==null?void 0:s.ech)??"")),[Le,ct]=h.useState(String((s==null?void 0:s.ech_server_name)??"")),[ut,nt]=h.useState(String((s==null?void 0:s.ech_key)??"")),[Ct,pt]=h.useState(String((s==null?void 0:s.ech_config)??"")),[Pt,yt]=h.useState(()=>{const ke=s==null?void 0:s[b];return ke===1||ke===!0||String(ke)==="1"||String(ke)==="true"}),Ze=pi(s==null?void 0:s.auto_cert),Gt=Aj(s==null?void 0:s.auto_cert),Ot=ke=>{if(ke.preventDefault(),g&&o===0){m({});return}const Nn=g?sa(s,o):pi(s),Ae=g?{...Nn,[k]:N,fingerprint:ve}:{...s??{},[k]:N,fingerprint:ve},un=O.trim(),pn=G.trim();if(un?Ae.pinnedPeerCertSha256=un:delete Ae.pinnedPeerCertSha256,delete Ae.pinned_peer_cert_sha256,pn?Ae.verifyPeerCertByName=pn:delete Ae.verifyPeerCertByName,delete Ae.verify_peer_cert_by_name,g&&o!==1?(delete Ae.allow_insecure,delete Ae.allowInsecure):Ae[b]=l?Pt?1:0:Pt,o===2&&(Ae.dest=I,Ae.server_port=M,Ae.xver=Number(q)||0,Ae.private_key=ne,Ae.public_key=te,Ae.short_id=F,Ae.ech=fe,Ae.ech_server_name=Le,Ae.ech_key=ut,Ae.ech_config=Ct),S){Ae.cert_mode=H;const Wt=s==null?void 0:s.auto_cert;Wt&&typeof Wt=="object"&&(Ae.auto_cert=Wt),H==="none"?(delete Ae.provider,delete Ae.dns_env,delete Ae.cert_file,delete Ae.key_file):(he.trim()?Ae.provider=he:delete Ae.provider,C.trim()?Ae.dns_env=C:delete Ae.dns_env,pe.trim()?Ae.cert_file=pe:delete Ae.cert_file,ze.trim()?Ae.key_file=ze:delete Ae.key_file),Ae.reject_unknown_sni=qe?"1":"0"}m(g?sa(Ae,o):Ae)};return t.jsxs("form",{onSubmit:Ot,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:f("node.sni")}),t.jsx("input",{className:"config-input",value:N,onChange:ke=>$(ke.target.value),placeholder:f(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.dest")}),t.jsx("input",{className:"config-input",value:I,onChange:ke=>Q(ke.target.value),placeholder:f("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.servicePort")}),t.jsx("input",{className:"config-input",value:M,onChange:ke=>Y(ke.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:q,onChange:ke=>U(ke.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.privateKey")}),t.jsx("input",{className:"config-input",value:ne,onChange:ke=>P(ke.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.publicKey")}),t.jsx("input",{className:"config-input",value:te,onChange:ke=>E(ke.target.value),placeholder:f("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.shortId")}),t.jsx("input",{className:"config-input",value:F,onChange:ke=>ie(ke.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.fingerprint")}),t.jsx("select",{className:"config-input",value:ve,onChange:ke=>_(ke.target.value),children:fj.map(ke=>t.jsx("option",{value:ke,children:ke},ke))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:O,onChange:ke=>ae(ke.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:G,onChange:ke=>ce(ke.target.value),placeholder:"example.com"})]})]}),S?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.certMode")}),t.jsxs("select",{className:"config-input",value:H,onChange:ke=>z(ke.target.value),children:[t.jsx("option",{value:"auto",children:f("node.certModeAuto")}),t.jsx("option",{value:"self",children:f("node.certModeSelf")}),t.jsx("option",{value:"http",children:f("node.certModeHttp")}),t.jsx("option",{value:"dns",children:f("node.certModeDns")}),t.jsx("option",{value:"file",children:f("node.certModeFile")}),t.jsx("option",{value:"none",children:f("node.certModeNone")})]})]}),H!=="none"?t.jsxs("div",{className:`config-warning auto-cert-status auto-cert-${Gt.state}`,children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:8},children:[t.jsx("strong",{children:f(Gt.labelKey)}),kt(Ze.updated_at)?t.jsx("span",{className:"mono",children:kt(Ze.updated_at)}):null]}),t.jsx("div",{style:{marginTop:4},children:f(Gt.detailKey)}),kt(Ze.target)||kt(Ze.source)?t.jsxs("div",{className:"mono",style:{marginTop:6,fontSize:12},children:[kt(Ze.target)?`${f("node.autoCertTarget")}: ${kt(Ze.target)}`:"",kt(Ze.target)&&kt(Ze.source)?" · ":"",kt(Ze.source)?`${f("node.autoCertSource")}: ${kt(Ze.source)}`:""]}):null,kt(Ze.public_key_sha256)||kt(Ze.sha256_hex)?t.jsx("div",{className:"mono",style:{marginTop:6,fontSize:12,wordBreak:"break-all"},children:kt(Ze.public_key_sha256)?`${f("node.autoCertPublicKeySha")}: ${kt(Ze.public_key_sha256)}`:`${f("node.autoCertSha")}: ${kt(Ze.sha256_hex)}`}):null,kt(Ze.error)?t.jsx("div",{style:{marginTop:6,color:"var(--rose)"},children:kt(Ze.error)}):null]}):null,H==="dns"||H==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:he,onChange:ke=>oe(ke.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:C,onChange:ke=>B(ke.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,H!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.certFile")}),t.jsx("input",{className:"config-input",value:pe,onChange:ke=>xe(ke.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.keyFile")}),t.jsx("input",{className:"config-input",value:ze,onChange:ke=>Ne(ke.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsx(In,{label:f("node.rejectUnknownSni"),checked:qe,onChange:D})]}):null,!g||g&&o===1?t.jsx(In,{label:f("node.allowInsecure"),checked:Pt,onChange:yt}):null,o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.ech")}),t.jsxs("select",{className:"config-input",value:fe,onChange:ke=>me(ke.target.value),children:[t.jsx("option",{value:"",children:f("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:f("node.echCustom")})]})]}),fe==="cloudflare"?t.jsx("div",{className:"config-warning",children:f("node.echCloudflareHelp")}):null,fe==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.echServerName")}),t.jsx("input",{className:"config-input",value:Le,onChange:ke=>ct(ke.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.echKey")}),t.jsx("input",{className:"config-input",value:ut,onChange:ke=>nt(ke.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.echConfig")}),t.jsx("input",{className:"config-input",value:Ct,onChange:ke=>pt(ke.target.value),placeholder:f("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:f("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:f("common.confirm")})]})]})}function Rj({draft:s,set:l,groups:o,routes:d,nodes:u,onOpenJson:m,onAddGroup:f,onOpenTransportConfig:k}){const{t:b}=Fe(),g=String(s._type),w=Wn(g),S=Ie(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:b("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"name"),onChange:N=>l("name",N.target.value),placeholder:b("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",inputMode:"decimal",required:!0,value:Ie(s,"rate","1"),onChange:N=>l("rate",N.target.value)})]})]}),t.jsx(Oj,{value:s.tags??[],onChange:N=>l("tags",N),label:b("node.tags")}),t.jsx(Bh,{options:o.map(N=>({id:N.id,name:N.name})),value:s.group_id??[],onChange:N=>l("group_id",N),label:b("node.permissionGroups"),actionText:b("node.addGroup"),onAction:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"host"),onChange:N=>l("host",N.target.value),placeholder:b("node.addressPlaceholder")})]}),w?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ie(s,"listen_ip"),onChange:N=>l("listen_ip",N.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?b("node.editConfig"):void 0,onAction:()=>{const N=Dh(g);m(b("node.connectionSecurityConfig"),N)}}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls","0"),onChange:N=>{const $=Number(N.target.value);l("tls",$);const I=Dh(g);$!==0&&!s[I]&&l(I,{})},children:[t.jsx("option",{value:"0",children:b("node.none")}),t.jsx("option",{value:"1",children:b("node.useTls")}),g!=="vmess"&&t.jsx("option",{value:"2",children:b("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.sni"),actionText:b("node.editConfig"),onAction:()=>m(b("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Ie(s,"server_name"),onChange:N=>l("server_name",N.target.value),placeholder:b("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"port"),onChange:N=>l("port",N.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ie(s,"server_port"),onChange:N=>l("server_port",N.target.value),placeholder:"443"})]})]}),w?t.jsx(Qj,{draft:s,set:l,onOpenJson:m,onOpenTransportConfig:k,onOpenSecurityConfig:()=>m(b("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(g)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:b("node.transportProtocol"),required:!0,actionText:b("node.editConfig"),onAction:k}),t.jsxs("select",{className:"config-input",value:S,onChange:N=>{l("network",N.target.value);const $=g==="vmess"?"networkSettings":"network_settings";s[$]||l($,{})},children:[g==="vmess"&&dj.map(N=>t.jsx("option",{value:N,children:N},N)),g==="trojan"&&Yx.map(N=>t.jsx("option",{value:N,children:N},N)),g==="vless"&&uj.map(N=>t.jsx("option",{value:N,children:N},N))]})]}):null,g==="trojan"&&t.jsx(Lj,{draft:s,set:l}),g==="shadowsocks"&&t.jsx(qj,{draft:s,set:l,onOpenJson:m}),g==="hysteria"&&t.jsx(Bj,{draft:s,set:l}),g==="tuic"&&t.jsx(Gj,{draft:s,set:l}),g==="vless"&&t.jsx($j,{draft:s,set:l,onOpenJson:m}),g==="anytls"&&t.jsx(Yj,{draft:s,set:l,onOpenJson:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:b("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:N=>l("parent_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:b("node.none")}),u.filter(N=>N.id!==s.id&&!N.parent_id).map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsx(Bh,{options:d.map(N=>({id:N.id,name:N.remarks})),value:s.route_id??[],onChange:N=>l("route_id",N),label:b("node.routingGroups")})]})]})}function Hj({draft:s,set:l,onCancel:o,onSave:d}){const u=String(s._type),m=String(s.network??"tcp"),f=jj(u),k=s[f],b=Qd(k)?pi(k):{},g=wj(u,m),w=Qd(g)?JSON.stringify(g,null,2):void 0;return t.jsx(Jx,{initialValue:b,placeholder:w,onCancel:o,onSave:S=>{l(f,S),d()}})}function Lj({draft:s,set:l}){const{t:o}=Fe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(In,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function qj({draft:s,set:l,onOpenJson:o}){const{t:d}=Fe(),u=vj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:m=>l("cipher",m.target.value),children:Qx.map(m=>t.jsx("option",{value:m,children:m},m))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:m=>l("obfs",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:m=>l("obfs_settings",{...u,host:m.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:m=>l("obfs_settings",{...u,path:m.target.value}),placeholder:"/"})]})]})]})}function Bj({draft:s,set:l}){const{t:o}=Fe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ie(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(In,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function Gj({draft:s,set:l}){const{t:o}=Fe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(In,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(In,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(In,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function $j({draft:s,set:l,onOpenJson:o}){const{t:d}=Fe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:u=>l("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ie(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:u=>l("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function Yj({draft:s,set:l,onOpenJson:o}){const{t:d}=Fe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(In,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>l("insecure",u?1:0)})]})}function Qj({draft:s,set:l,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:m}=Fe(),f=Ie(s,"protocol"),k=Oh(f),b={...Fo,...pi(s.warp_settings)},g=iu(b.enable),w=(N,$)=>{l("warp_settings",Wo({...b,[N]:$}))},S=N=>{if(l("protocol",N),!N){l("tls",0),l("network","tcp");return}Ko.includes(N)?(l("tls",1),s.tls_settings||l("tls_settings",{})):N==="shadowsocks"?l("tls",0):N==="vmess"&&Number(s.tls??0)===2&&l("tls",1);const $=Oh(N);($.length===0||!$.includes(Ie(s,"network","tcp")))&&l("network","tcp"),N!=="vless"&&(l("flow",""),l("encryption",""),l("encryption_settings",{})),N!=="hysteria2"&&(l("obfs",null),l("obfs_password",""),l("up_mbps",0),l("down_mbps",0)),N!=="anytls"&&l("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:f,onChange:N=>S(N.target.value),children:[t.jsx("option",{value:"",children:m("node.selectNodeProtocol")}),pj.map(N=>t.jsx("option",{value:N,children:N},N))]})]}),f?t.jsxs(t.Fragment,{children:[Vo(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?m("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ie(s,"tls",Ko.includes(f)?"1":"0"),onChange:N=>{const $=Number(N.target.value);l("tls",$),$!==0&&!s.tls_settings&&l("tls_settings",{})},children:[kj(f)?t.jsx("option",{value:"0",children:m("node.none")}):null,t.jsx("option",{value:"1",children:m("node.useTls")}),Po(f)?t.jsx("option",{value:"2",children:m("node.reality")}):null]})]}):null,Cj(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.transportProtocol"),required:!0,actionText:m("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:k.includes(Ie(s,"network","tcp"))?Ie(s,"network","tcp"):"tcp",onChange:N=>{l("network",N.target.value),s.network_settings||l("network_settings",{})},children:k.map(N=>t.jsx("option",{value:N,children:N},N))})]}):null]}):null,t.jsx("div",{className:"form-section-title",children:m("node.warpOutbound")}),t.jsx(In,{label:m("node.warpEnable"),checked:g,onChange:N=>l("warp_settings",Wo({...b,enable:N}))}),g?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMode")}),t.jsxs("select",{className:"config-input",value:String(b.mode??"auto"),onChange:N=>w("mode",N.target.value),children:[t.jsx("option",{value:"auto",children:m("node.warpModeAuto")}),t.jsx("option",{value:"manual",children:m("node.warpModeManual")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpFailPolicy")}),t.jsxs("select",{className:"config-input",value:String(b.fail_policy??"direct"),onChange:N=>w("fail_policy",N.target.value),children:[t.jsx("option",{value:"direct",children:m("node.warpFailDirect")}),t.jsx("option",{value:"block",children:m("node.warpFailBlock")})]})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpMtu")}),t.jsx("input",{className:"config-input",type:"number",min:"576",value:String(b.mtu??1280),onChange:N=>w("mtu",Number(N.target.value))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpDomainStrategy")}),t.jsx("select",{className:"config-input",value:String(b.domain_strategy??"ForceIPv4v6"),onChange:N=>w("domain_strategy",N.target.value),children:Xx.map(N=>t.jsx("option",{value:N,children:N},N))})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.warpPrivateKey")}),t.jsx("input",{className:"config-input",value:String(b.private_key??""),onChange:N=>w("private_key",N.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpPeerPublicKey")}),t.jsx("input",{className:"config-input",value:String(b.peer_public_key??""),onChange:N=>w("peer_public_key",N.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpEndpoint")}),t.jsx("input",{className:"config-input",value:String(b.endpoint??"engage.cloudflareclient.com:2408"),onChange:N=>w("endpoint",N.target.value)})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpAddresses")}),t.jsx("input",{className:"config-input",value:Uh(b.addresses),onChange:N=>w("addresses",N.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.warpReserved")}),t.jsx("input",{className:"config-input",value:Uh(b.reserved),onChange:N=>w("reserved",N.target.value)})]})]})]}):null,f==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.encryption"),actionText:Ie(s,"encryption")?m("node.editConfig"):void 0,onAction:()=>o(m("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ie(s,"encryption"),onChange:N=>l("encryption",N.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.flow")}),t.jsxs("select",{className:"config-input",value:Ie(s,"flow"),onChange:N=>l("flow",N.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),f==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ie(s,"cipher","aes-128-gcm"),onChange:N=>l("cipher",N.target.value),children:Qx.map(N=>t.jsx("option",{value:N,children:N},N))})]}),f==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"up_mbps","0"),onChange:N=>l("up_mbps",Number(N.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ie(s,"down_mbps","0"),onChange:N=>l("down_mbps",Number(N.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ie(s,"obfs"),onChange:N=>l("obfs",N.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ie(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ie(s,"obfs_password"),onChange:N=>l("obfs_password",N.target.value),placeholder:m("node.autoGenHelp")})]}):null]})]}),f==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ie(s,"udp_relay_mode","native"),onChange:N=>l("udp_relay_mode",N.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ie(s,"congestion_control","bbr"),onChange:N=>l("congestion_control",N.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(In,{label:m("node.disableSni"),checked:s.disable_sni===1,onChange:N=>l("disable_sni",N?1:0)}),t.jsx(In,{label:m("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:N=>l("zero_rtt_handshake",N?1:0)})]}),f==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:m("node.paddingScheme"),actionText:m("node.editConfig"),onAction:()=>o(m("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Gh={vmess:n0,vless:u0,trojan:Hd,shadowsocks:Wd,hysteria:Wv,tuic:Ov,anytls:ys,v2node:yh,zicnode:yh},Xj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},Zj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function li(s){return Xj[s]??Zj}function Kj({draft:s,config:l,onCopy:o,t:d}){const u=Number(s.id??0),m=u>0?Dj(u,l):"",f=!l.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:m}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(m),children:[t.jsx(bs,{size:15}),d("node.copyInstallCommand")]}),f?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Fj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,k]=h.useState([]),[b,g]=h.useState(null),[w,S]=h.useState(null),[N,$]=h.useState(!0),[I,Q]=h.useState(!1),[M,Y]=h.useState(""),[q,U]=h.useState(""),[ne,P]=h.useState(1),[te,E]=h.useState(()=>bj()),[F,ie]=h.useState(!1),[ve,_]=h.useState({}),[O,ae]=h.useState({apiHost:au,apiKey:""}),[G,ce]=h.useState(!1),[v,H]=h.useState(""),[z,he]=h.useState(null),[oe,C]=h.useState(null),[B,pe]=h.useState(null),xe=(R,le)=>{R.dataTransfer.effectAllowed="move",C(le)},ze=(R,le)=>{if(R.preventDefault(),oe===null||oe===le)return;const W=[...o],Me=W[oe];W.splice(oe,1),W.splice(le,0,Me),C(le),d(W)},Ne=()=>{C(null)},qe=(R,le)=>{F&&pe(le)},D=R=>{if(!F||B===null)return;R.cancelable&&R.preventDefault();const le=R.touches[0],W=document.elementFromPoint(le.clientX,le.clientY);if(!W)return;const Me=W.closest(".mobile-node-card");if(!Me)return;const Xe=Me.getAttribute("data-index");if(Xe===null)return;const Ke=Number(Xe);if(Ke!==B&&Ke>=0&&Ke<o.length){const y=[...o],re=y[B];y.splice(B,1),y.splice(Ke,0,re),pe(Ke),d(y)}},fe=()=>{pe(null)};h.useEffect(()=>{P(1)},[v,te]),h.useEffect(()=>{try{window.localStorage.setItem(Zx,String(te))}catch{}},[te]);const me=o.filter(R=>{const le=v.toLowerCase().trim();return le?R.name.toLowerCase().includes(le)||R.host.toLowerCase().includes(le)||String(R.id).includes(le)||R.type.toLowerCase().includes(le):!0}),Le=Math.ceil(me.length/te),ct=me.slice((ne-1)*te,ne*te);function ut(R,le){return le<=7?Array.from({length:le},(W,Me)=>Me+1):R<=4?[1,2,3,4,5,"...",le]:R>=le-3?[1,"...",le-4,le-3,le-2,le-1,le]:[1,"...",R-1,R,R+1,"...",le]}const nt=ut(ne,Le),Ct=async()=>{var R,le;Q(!0),Y(""),U("");try{const W={};o.forEach((Me,Xe)=>{W[Me.type]||(W[Me.type]={}),W[Me.type][String(Me.id)]=Xe+1}),await M1(W),(R=window.showToast)==null||R.call(window,l("node.saveSortSuccess"),"success"),ie(!1),await we()}catch(W){Y(W instanceof Error?W.message:l("node.saveSortFailed")),(le=window.showToast)==null||le.call(window,W instanceof Error?W.message:l("node.saveSortFailed"),"error")}finally{Q(!1)}},pt=async()=>{ie(!1),await Se()},Pt=()=>me.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ne===1,onClick:()=>P(R=>Math.max(R-1,1)),children:"<"}),nt.map((R,le)=>R==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${le}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ne===R?"active":""}`,onClick:()=>P(Number(R)),children:R},`page-${R}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ne===Le||Le===0,onClick:()=>P(R=>Math.min(R+1,Le)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsx("select",{className:"pagination-size-select",value:te,onChange:R=>{const le=Number(R.target.value);Kx(le)&&E(le)},children:Jo.map(R=>t.jsxs("option",{value:R,children:[R," / ",l("common.perPage")]},R))})})]}),[yt,Ze]=h.useState(null),[Gt,Ot]=h.useState(!1),[ke,Nn]=h.useState(""),[Ae,un]=h.useState(!1),[pn,Wt]=h.useState(!1);async function J(R){var W,Me;R.preventDefault();const le=ke.trim();if(!(!le||!b)){un(!0),Y(""),U("");try{await eu({name:le});const Xe=await gl();m(Xe);const Ke=Xe.filter(y=>y.name===le).sort((y,re)=>re.id-y.id)[0];if(Ke){const y=b.group_id??[];y.includes(Ke.id)||fn("group_id",[...y,Ke.id])}Nn(""),Ot(!1),(W=window.showToast)==null||W.call(window,l("node.groupCreateSuccess"),"success")}catch(Xe){Y(Xe instanceof Error?Xe.message:l("node.groupCreateFailed")),(Me=window.showToast)==null||Me.call(window,Xe instanceof Error?Xe.message:l("node.groupCreateFailed"),"error")}finally{un(!1)}}}const De=(R,le)=>{if(!b)return;let W=b[le];if(typeof W=="string"&&W.trim())try{W=JSON.parse(W)}catch{}["tlsSettings","tls_settings"].includes(le)&&Wn(String(b._type))&&(W=sa(W,Number(b.tls??0))),Ze({title:R,key:le,value:W&&typeof W=="object"?W:{}})},Se=h.useCallback(async()=>{var R,le,W,Me,Xe;$(!0),Y("");try{const[Ke,y,re,ue]=await Promise.all([Ch(),gl(),Ax(),Tx()]);d(Ke.data),m(y),k(re);const Ce=Rh((R=ue.site)==null?void 0:R.app_url);ae({apiHost:Rh((le=ue.server)==null?void 0:le.server_api_url,Ce),apiKey:kt((W=ue.server)==null?void 0:W.server_token)}),ce(iu(((Me=ue.subscribe)==null?void 0:Me.device_hwid_available)??((Xe=ue.subscribe)==null?void 0:Xe.device_hwid_enable)))}catch(Ke){Y(Ke instanceof Error?Ke.message:l("knowledge.loadFailed"))}finally{$(!1)}},[]),we=h.useCallback(async()=>{try{const R=await Ch();d(R.data)}catch(R){console.error("Refresh nodes failed",R)}},[]);async function Je(R){var W;const le=await ui(R);(W=window.showToast)==null||W.call(window,l(le?"node.installCopied":"common.copyFailed"),le?"success":"error")}h.useEffect(()=>{if(!Bt()){s.replace("/login");return}Se()},[Se,s]);function Be(R){g(qh(R)),S(null),Y(""),U("")}function $e(R){g(qh(R.type,R)),Y(""),U("")}function Ve(R){!G||Number(R.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(R.type)}&node_id=${encodeURIComponent(String(R.id))}`)}function st(R,le){const W=Number(R.online??0),Me=G&&W>0,Xe=`${le==="mobile"?"mobile-badge-pill":"online-badge"}${Me?" online-badge-link":""}`,Ke=le==="mobile"?12:13,y={...le==="mobile"?{marginRight:4}:{},color:W>0?"#10b981":"var(--muted)",opacity:W>0?1:.6},re=t.jsxs(t.Fragment,{children:[t.jsx(kx,{size:Ke,style:y}),W]});return Me?t.jsx("button",{className:Xe,type:"button",title:l("node.viewOnlineDevices"),onClick:()=>Ve(R),children:re}):t.jsx("span",{className:Xe,children:re})}async function mn(R){var Ke,y,re;if(R.preventDefault(),!b)return;Q(!0),Y(""),U("");const le=String(b._type),W={...b};if(Wn(le)&&!kt(W.protocol)){Y(l("node.protocolRequired")),(Ke=window.showToast)==null||Ke.call(window,l("node.protocolRequired"),"error"),Q(!1);return}for(const ue of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete W[ue];if(W.padding_scheme!==void 0&&W.padding_scheme!==null&&typeof W.padding_scheme!="string"&&(W.padding_scheme=JSON.stringify(W.padding_scheme)),W.padding_scheme)try{const ue=JSON.parse(String(W.padding_scheme));if(typeof ue!="object"||ue===null)throw new Error("Invalid JSON array or object")}catch(ue){Y("Invalid Padding Scheme configuration: "+(ue instanceof Error?ue.message:"JSON error")),Q(!1);return}const Me=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const ue of Me)(W[ue]===""||W[ue]===null||W[ue]===void 0)&&delete W[ue];if(Wn(le)){const ue=String(W.protocol??""),Ce=Number(W.tls??0);W.warp_settings=Wo(W.warp_settings),Vo(ue)?Ko.includes(ue)&&Ce!==2||!Po(ue)&&Ce===2?(W.tls=1,W.tls_settings=sa(W.tls_settings,1)):W.tls_settings=sa(W.tls_settings,Ce):(W.tls=0,W.tls_settings={})}const Xe=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const ue of Xe){const Ce=W[ue];(Ce==null||typeof Ce=="object"&&Object.keys(Ce).length===0)&&delete W[ue]}W.port!==void 0&&(W.port=String(W.port).trim()),W.server_port!==void 0&&(W.server_port=Number(W.server_port)),W.tls!==void 0&&(W.tls=Number(W.tls)),W.rate!==void 0&&(W.rate=Number(W.rate));try{await C1(le,W),g(null),(y=window.showToast)==null||y.call(window,l("node.saveSuccess"),"success"),await we()}catch(ue){Y(ue instanceof Error?ue.message:l("node.saveFailed")),(re=window.showToast)==null||re.call(window,ue instanceof Error?ue.message:l("node.saveFailed"),"error")}finally{Q(!1)}}async function Et(R){const le=[...o];d(W=>W.map(Me=>Me.id===R.id&&Me.type===R.type?{...Me,show:R.show?0:1}:Me));try{await T1(R.type,R.id,R.show?0:1),await we()}catch(W){d(le),Y(W instanceof Error?W.message:l("node.updateFailed"))}}async function ea(R){var le,W;try{await E1(R.type,R.id),(le=window.showToast)==null||le.call(window,l("node.copySuccess"),"success"),await we()}catch(Me){Y(Me instanceof Error?Me.message:l("node.copyFailed")),(W=window.showToast)==null||W.call(window,Me instanceof Error?Me.message:l("node.copyFailed"),"error")}}async function $t(R){var le;(le=window.showConfirm)==null||le.call(window,{message:l("node.deleteConfirm",{name:R.name}),onConfirm:async()=>{var Me,Xe;const W=[...o];d(Ke=>Ke.filter(y=>!(y.id===R.id&&y.type===R.type))),Y("");try{await z1(R.type,R.id),(Me=window.showToast)==null||Me.call(window,l("node.deleteSuccess"),"success"),await we()}catch(Ke){d(W),Y(Ke instanceof Error?Ke.message:l("node.deleteFailed")),(Xe=window.showToast)==null||Xe.call(window,Ke instanceof Error?Ke.message:l("node.deleteFailed"),"error")}}})}const fn=(R,le)=>g(W=>{if(!W)return null;const Me={...W,[R]:le};if(!Wn(String(Me._type)))return Me;if(R==="tls_settings"&&(Me.tls_settings=sa(le,Number(Me.tls??0))),R==="tls"&&(Me.tls_settings=sa(Me.tls_settings,Number(le))),R==="warp_settings"&&(Me.warp_settings=Wo(le)),R==="protocol"){const Xe=String(le);Vo(Xe)?!Po(Xe)&&Number(Me.tls??0)===2?(Me.tls=1,Me.tls_settings=sa(Me.tls_settings,1)):Me.tls_settings=sa(Me.tls_settings,Number(Me.tls??0)):(Me.tls=0,Me.tls_settings={})}return Me}),Kn=b?String(b._type):"",hn=zj(Kn);return t.jsxs(Vt,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>S(w?null:"show"),title:l("node.createNode"),children:t.jsx(Dn,{size:18})}),w!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Yd.map(R=>{const le=li(R.value),W=Gh[R.value]||Xo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(R.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:le==null?void 0:le.bg,backgroundColor:le==null?void 0:le.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(le==null?void 0:le.bg)??"var(--surface-soft)",color:(le==null?void 0:le.text)??"#ffffff"},children:R.label})]},R.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:v,onChange:R=>H(R.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${F?"success-btn":""}`,type:"button",onClick:F?Ct:()=>ie(!0),disabled:I,children:l(F?I?"node.saving":"node.saveOrder":"node.editSortOrder")}),F&&t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,children:l("common.cancel")})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,N&&o.length===0?t.jsx(_t,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(F?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[ct.map(R=>{const le=o.findIndex(W=>W.id===R.id&&W.type===R.type);return t.jsxs("tr",{draggable:F,onDragStart:W=>xe(W,le),onDragOver:W=>ze(W,le),onDragEnd:Ne,className:oe===le?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(R.type).bg,color:li(R.type).text,border:`1px solid ${li(R.type).border}`},children:R.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void Et(R),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${R.available_status??0}`,title:R.available_status===2?l("node.statusNormal"):R.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:R.name})]})}),t.jsx("td",{children:st(R,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:R.host})}),t.jsx("td",{className:"mobile-hide",children:String(R.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[R.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const W=R.group_id??[],Me=ve[`${R.type}-${R.id}`],Xe=W.map(re=>{const ue=u.find(Ce=>Number(Ce.id)===Number(re));return t.jsx("span",{className:"tag",children:(ue==null?void 0:ue.name)??`#${re}`},re)});if(W.length<=3||Me)return t.jsxs(t.Fragment,{children:[Xe,W.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>_(re=>({...re,[`${R.type}-${R.id}`]:!1})),children:l("node.collapse")})]});const Ke=Xe.slice(0,3),y=W.length-3;return t.jsxs(t.Fragment,{children:[Ke,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>_(re=>({...re,[`${R.type}-${R.id}`]:!0})),children:["+",y,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:W.length})}),Xe]})]})]})})()})}),t.jsx("td",{children:F?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>he((z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type?null:{id:R.id,type:R.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>he(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{$e(R),he(null)},children:[t.jsx(Jt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ea(R),he(null)},children:[t.jsx(bs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{$t(R),he(null)},children:[t.jsx(nn,{size:14})," ",l("common.delete")]})]})]})]})})]},`${R.type}-${R.id}`)}),!N&&me.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Pt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>S(w?null:"show"),title:l("node.createNode"),children:t.jsx(Dn,{size:20})}),w!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>S(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Yd.map(R=>{const le=li(R.value),W=Gh[R.value]||Xo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Be(R.value),S(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:le==null?void 0:le.bg,backgroundColor:le==null?void 0:le.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(le==null?void 0:le.bg)??"var(--surface-soft)",color:(le==null?void 0:le.text)??"#ffffff"},children:R.label})]},R.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:v,onChange:R=>H(R.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${F?"active":""}`,type:"button",onClick:()=>ie(!F),title:l("node.editSortOrder"),children:t.jsx(ms,{size:20})})]}),F&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:pt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Ct(),disabled:I,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(I?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[ct.map(R=>{const le=o.findIndex(W=>W.id===R.id&&W.type===R.type);return t.jsxs("div",{className:`mobile-node-card ${oe===le||B===le?"dragging":""}`,draggable:F,onDragStart:W=>xe(W,le),onDragOver:W=>ze(W,le),onDragEnd:Ne,onTouchStart:W=>qe(W,le),onTouchMove:D,onTouchEnd:fe,"data-index":le,style:F?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${R.available_status??0}`,title:R.available_status===2?l("node.statusNormal"):R.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:R.name})]}),t.jsx("div",{className:"card-header-right",children:F?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(ms,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${R.show===1?"active":""}`,onClick:()=>void Et(R),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>he((z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type?null:{id:R.id,type:R.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===R.id&&(z==null?void 0:z.type)===R.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>he(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{$e(R),he(null)},children:[t.jsx(Jt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ea(R),he(null)},children:[t.jsx(bs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{$t(R),he(null)},children:[t.jsx(nn,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[R.host,":",R.port||R.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:li(R.type).bg,color:li(R.type).text,border:`1px solid ${li(R.type).border}`},children:R.id}),st(R,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[R.rate," x"]})]})]},`${R.type}-${R.id}`)}),!N&&me.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Pt()]}),b!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("node.editNodeTitle",{type:hn}):l("node.createNodeTitle",{type:hn})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:hn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:mn,children:[t.jsx(Rj,{draft:b,set:fn,groups:u,routes:f,nodes:o,onOpenJson:De,onAddGroup:()=>Ot(!0),onOpenTransportConfig:()=>Wt(!0)}),Wn(Kn)?t.jsx(Kj,{draft:b,config:O,onCopy:R=>void Je(R),t:l}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(On,{size:16}),l(I?"node.saving":"common.save")]})]})]})]})}),yt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:yt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(yt.key)?l("node.connectionSecurityEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ze(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(yt.key)?t.jsx(Uj,{initialValue:yt.value,isSnakeCase:yt.key==="tls_settings",tlsMode:Sj(b),nodeType:String((b==null?void 0:b._type)??""),onCancel:()=>Ze(null),onSave:R=>{fn(yt.key,R),Ze(null)}}):t.jsx(Jx,{initialValue:yt.value,onCancel:()=>Ze(null),onSave:R=>{fn(yt.key,R),Ze(null)}})})]})}),Gt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ot(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:J,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:ke,onChange:R=>Nn(R.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ot(!1),disabled:Ae,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Ae||!ke.trim(),children:l(Ae?"node.saving":"common.confirm")})]})]})]})}),pn&&b!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(b.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Wt(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Hj,{draft:b,set:fn,onCancel:()=>Wt(!1),onSave:()=>Wt(!1)})})]})})]})}function Jj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,k]=h.useState(!0),[b,g]=h.useState(!1),[w,S]=h.useState(""),N=h.useCallback(async()=>{k(!0),S("");try{d(await gl())}catch(M){S(M instanceof Error?M.message:l("serverGroup.loadFailed"))}finally{k(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}N()},[N,s]);function $(M){m({id:M==null?void 0:M.id,name:(M==null?void 0:M.name)??""}),S("")}async function I(M){var Y;if(M.preventDefault(),!!u){g(!0),S("");try{await eu(u),m(null),(Y=window.showToast)==null||Y.call(window,l("serverGroup.saveSuccess"),"success"),await N()}catch(q){S(q instanceof Error?q.message:l("serverGroup.saveFailed"))}finally{g(!1)}}}async function Q(M){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var q,U;S("");try{await D0(M),(q=window.showToast)==null||q.call(window,l("serverGroup.deleteSuccess"),"success"),await N()}catch(ne){S(ne instanceof Error?ne.message:l("serverGroup.deleteFailed")),(U=window.showToast)==null||U.call(window,ne instanceof Error?ne.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:N,disabled:f,children:[t.jsx(Dt,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(Dn,{size:16}),l("serverGroup.add")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,f&&o.length===0?t.jsx(_t,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Zo,{size:14}),M.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),M.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(M),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(M.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},M.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:M=>m({...u,name:M.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(On,{size:16}),l(b?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Vj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Pj(s){var l;return((l=Mx.find(o=>o.value===s))==null?void 0:l.label)??s}function Wj(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,k]=h.useState(!0),[b,g]=h.useState(!1),[w,S]=h.useState(""),N=h.useCallback(async()=>{k(!0),S("");try{d(await Ax())}catch(M){S(M instanceof Error?M.message:l("serverRoute.loadFailed"))}finally{k(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}N()},[N,s]);function $(M){m(Vj(M)),S("")}async function I(M){var q;if(M.preventDefault(),!u)return;g(!0),S("");const Y=u.action==="default_out"?[]:u.match.split(`
`).map(U=>U.trim()).filter(Boolean);try{await O0({id:u.id,remarks:u.remarks,match:Y,action:u.action,action_value:u.action_value||null}),m(null),(q=window.showToast)==null||q.call(window,l("serverRoute.saveSuccess"),"success"),await N()}catch(U){S(U instanceof Error?U.message:l("serverRoute.saveFailed"))}finally{g(!1)}}async function Q(M){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var q,U;S("");try{await U0(M),(q=window.showToast)==null||q.call(window,l("serverRoute.deleteSuccess"),"success"),await N()}catch(ne){S(ne instanceof Error?ne.message:l("serverRoute.deleteFailed")),(U=window.showToast)==null||U.call(window,ne instanceof Error?ne.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:N,disabled:f,children:[t.jsx(Dt,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(Dn,{size:16}),l("serverRoute.add")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,f&&o.length===0?t.jsx(_t,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(M.match)?M.match:[]).slice(0,3).map((Y,q)=>t.jsx("span",{className:"tag",children:Y},q)),Array.isArray(M.match)&&M.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",M.match.length-3]}):null,!Array.isArray(M.match)||M.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Pj(M.action)})}),t.jsx("td",{children:M.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(M),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(M.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},M.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:M=>m({...u,remarks:M.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:M=>m({...u,action:M.target.value}),children:Mx.map(M=>t.jsx("option",{value:M.value,children:M.label},M.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:M=>m({...u,match:M.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:M=>m({...u,action_value:M.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(On,{size:16}),l(b?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Ij(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function ew(s){const l=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function dn(s){return s==null?"—":An(s)}function tw(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function nw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,k]=h.useState(null),[b,g]=h.useState(!0),[w,S]=h.useState(!1),[N,$]=h.useState(""),[I,Q]=h.useState(""),[M,Y]=h.useState(!1),[q,U]=h.useState(""),[ne,P]=h.useState(!1),[te,E]=h.useState(null),[F,ie]=h.useState(null),ve=(D,fe)=>{D.dataTransfer.effectAllowed="move",E(fe)},_=(D,fe)=>{if(D.preventDefault(),te===null||te===fe)return;const me=[...o],Le=me[te];me.splice(te,1),me.splice(fe,0,Le),E(fe),d(me)},O=async()=>{E(null);try{await Sh(o.map(D=>D.id)),await v()}catch(D){$(D instanceof Error?D.message:l("plan.sortFailed")),await v()}},ae=(D,fe)=>{ie(fe)},G=D=>{if(F===null)return;const fe=D.touches[0],me=document.elementFromPoint(fe.clientX,fe.clientY);if(!me)return;const Le=me.closest("tr, [data-index]");if(!Le)return;const ct=Le.getAttribute("data-index");if(ct===null)return;const ut=Number(ct);if(ut!==F&&ut>=0&&ut<o.length){const nt=[...o],Ct=nt[F];nt.splice(F,1),nt.splice(ut,0,Ct),ie(ut),d(nt)}},ce=async()=>{if(F!==null){ie(null);try{await Sh(o.map(D=>D.id)),await v()}catch(D){$(D instanceof Error?D.message:l("plan.sortFailed")),await v()}}},v=h.useCallback(async()=>{g(!0),$("");try{const[D,fe]=await Promise.all([hi(),gl()]);d(D),m(fe)}catch(D){$(D instanceof Error?D.message:l("plan.loadFailed"))}finally{g(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}v()},[v,s]);function H(){k(null),Y(!1),U("")}function z(D){k(Ij(D)),Y(!1),U(""),$(""),Q("")}async function he(D){var fe,me;if(D.preventDefault(),!!f){S(!0),$(""),Q("");try{await R0(ew(f)),H(),(fe=window.showToast)==null||fe.call(window,l("plan.saveSuccess"),"success"),await v()}catch(Le){(me=window.showToast)==null||me.call(window,Le instanceof Error?Le.message:l("plan.saveFailed"),"error")}finally{S(!1)}}}async function oe(D,fe){var me;try{await bd(D,{show:fe?0:1}),await v()}catch(Le){(me=window.showToast)==null||me.call(window,Le instanceof Error?Le.message:l("plan.toggleFailed"),"error")}}async function C(D,fe){var me;try{await bd(D,{renew:fe?0:1}),await v()}catch(Le){(me=window.showToast)==null||me.call(window,Le instanceof Error?Le.message:l("plan.toggleFailed"),"error")}}async function B(D,fe){var me;try{await bd(D,{allow_subscribe_url:fe?0:1}),await v()}catch(Le){(me=window.showToast)==null||me.call(window,Le instanceof Error?Le.message:l("plan.toggleFailed"),"error")}}async function pe(D){var fe;(fe=window.showConfirm)==null||fe.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var me,Le;$(""),Q("");try{await H0(D),(me=window.showToast)==null||me.call(window,l("plan.deleteSuccess"),"success"),await v()}catch(ct){(Le=window.showToast)==null||Le.call(window,ct instanceof Error?ct.message:l("plan.deleteFailed"),"error")}}})}function xe(D){var fe;return((fe=u.find(me=>me.id===D))==null?void 0:fe.name)??`#${D}`}function ze(D){return Number(D.allow_subscribe_url??1)===1}function Ne(D,fe){k(me=>me&&{...me,[D]:fe})}async function qe(D){var me,Le;D.preventDefault();const fe=q.trim();if(!(!fe||!f)){P(!0),$(""),Q("");try{await eu({name:fe});const ct=await gl();m(ct);const ut=ct.filter(nt=>nt.name===fe).sort((nt,Ct)=>Ct.id-nt.id)[0];ut&&Ne("group_id",String(ut.id)),U(""),Y(!1),(me=window.showToast)==null||me.call(window,l("node.groupCreateSuccess"),"success")}catch(ct){const ut=ct instanceof Error?ct.message:l("node.groupCreateFailed");$(ut),(Le=window.showToast)==null||Le.call(window,ut,"error")}finally{P(!1)}}}return t.jsxs(Vt,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:b,children:[t.jsx(Dt,{size:16}),l(b?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>z(),children:[t.jsx(Dn,{size:16}),l("plan.add")]})]})]}),N?t.jsx("div",{className:"form-error",children:N}):null,I?t.jsx("div",{className:"form-success",children:I}):null,b&&o.length===0?t.jsx(_t,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.allowSubscribeUrl")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((D,fe)=>t.jsxs("tr",{draggable:!0,onDragStart:me=>ve(me,fe),onDragOver:me=>_(me,fe),onDragEnd:O,onTouchStart:me=>ae(me,fe),onTouchMove:G,onTouchEnd:ce,"data-index":fe,className:te===fe||F===fe?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(ms,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:D.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),oe(D.id,D.show)},title:D.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${D.renew?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),C(D.id,D.renew)},title:D.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${ze(D)?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),B(D.id,ze(D)?1:0)},title:ze(D)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:D.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Zo,{size:14}),D.count??0]})}),t.jsx("td",{children:xe(D.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[D.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(D.month_price)})]}),D.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(D.quarter_price)})]}),D.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(D.half_year_price)})]}),D.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(D.year_price)})]}),D.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(D.two_year_price)})]}),D.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(D.three_year_price)})]}),D.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(D.onetime_price)})]}),D.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(D.reset_price)})]})]})}),t.jsxs("td",{children:[D.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:me=>{me.stopPropagation(),z(D)},children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:me=>{me.stopPropagation(),pe(D.id)},children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},D.id)),!b&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((D,fe)=>t.jsxs("div",{className:`mobile-node-card ${te===fe||F===fe?"dragging":""}`,draggable:!0,onDragStart:me=>ve(me,fe),onDragOver:me=>_(me,fe),onDragEnd:O,onTouchStart:me=>ae(me,fe),onTouchMove:G,onTouchEnd:ce,"data-index":fe,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(ms,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:D.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:D.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:me=>{me.stopPropagation(),z(D)},children:[t.jsx(Jt,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:me=>{me.stopPropagation(),pe(D.id)},children:[t.jsx(nn,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),oe(D.id,D.show)},title:D.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${D.renew?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),C(D.id,D.renew)},title:D.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${ze(D)?"active":""}`,type:"button",onClick:me=>{me.stopPropagation(),B(D.id,ze(D)?1:0)},title:ze(D)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Zo,{size:12,style:{marginRight:4}}),D.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:xe(D.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[D.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[D.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:dn(D.month_price)})]}),D.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:dn(D.quarter_price)})]}),D.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:dn(D.half_year_price)})]}),D.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:dn(D.year_price)})]}),D.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:dn(D.two_year_price)})]}),D.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:dn(D.three_year_price)})]}),D.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:dn(D.onetime_price)})]}),D.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:dn(D.reset_price)})]})]})]},D.id)),!b&&o.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:H,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:he,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:D=>Ne("name",D.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:f.content,onChange:D=>Ne("content",D.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:8},children:[l("plan.group"),t.jsx("button",{type:"button",onClick:()=>Y(!0),style:{border:0,background:"transparent",color:"var(--accent)",padding:0,font:"inherit",fontSize:12,fontWeight:800,cursor:"pointer"},children:l("node.addGroup")})]}),t.jsxs("select",{className:"config-input",required:!0,value:f.group_id,onChange:D=>Ne("group_id",D.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),u.map(D=>t.jsx("option",{value:D.id,children:D.name},D.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:f.transfer_enable,onChange:D=>Ne("transfer_enable",D.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.device_limit,onChange:D=>Ne("device_limit",D.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.speed_limit,onChange:D=>Ne("speed_limit",D.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.capacity_limit,onChange:D=>Ne("capacity_limit",D.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:f.reset_traffic_method,onChange:D=>Ne("reset_traffic_method",D.target.value),children:tw(l).map(D=>t.jsx("option",{value:D.value,children:D.label},D.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.allow_subscribe_url==="1",onChange:D=>Ne("allow_subscribe_url",D.target.checked?"1":"0")}),t.jsx("span",{children:l("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.month_price,onChange:D=>Ne("month_price",D.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.quarter_price,onChange:D=>Ne("quarter_price",D.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.half_year_price,onChange:D=>Ne("half_year_price",D.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.year_price,onChange:D=>Ne("year_price",D.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.two_year_price,onChange:D=>Ne("two_year_price",D.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.three_year_price,onChange:D=>Ne("three_year_price",D.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.onetime_price,onChange:D=>Ne("onetime_price",D.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.reset_price,onChange:D=>Ne("reset_price",D.target.value),placeholder:"—"})]})]}),f.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.force_update,onChange:D=>Ne("force_update",String(D.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:H,children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(On,{size:16}),l(w?"plan.saving":"common.save")]})]})]})]})}):null,M&&f?t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Y(!1),disabled:ne,children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:qe,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:q,onChange:D=>U(D.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Y(!1),disabled:ne,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ne||!q.trim(),children:l(ne?"node.saving":"common.confirm")})]})]})]})}):null]})}const wd="模糊",$h={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Yh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Qh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${m}:${f}`}function Xh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0"),k=String(l.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${m}:${f}:${k}`}function Zh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Zn(s){return`${An(Number(s??0))} ₫`}const Vx="adminzic_user_cache";function aw(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Vx);return s?JSON.parse(s):{}}catch{return{}}}function iw(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Vx,JSON.stringify(s))}catch{}}const xl=(s,l)=>`${s}:${l}`;function lw(){var Nn,Ae,un,pn,Wt;const s=qt(),l=ra(),{t:o}=Fe(),d=h.useCallback(J=>{switch(J){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${J}`,cls:""}}},[o]),u=h.useCallback(J=>{const De=`order.period.${J}`,Se=o(De);return Se===De?Yh[J]??J:Se},[o]),[m,f]=h.useState([]),[k,b]=h.useState([]),[g,w]=h.useState({}),[S,N]=h.useState(0),[$,I]=h.useState(1),[Q]=h.useState(15),[M,Y]=h.useState(""),[q,U]=h.useState("trade_no"),[ne,P]=h.useState(!0),[te,E]=h.useState(null),[F,ie]=h.useState(!1),[ve,_]=h.useState(""),[O,ae]=h.useState(""),[G,ce]=h.useState(null),[v,H]=h.useState(null),[z,he]=h.useState(!1),[oe,C]=h.useState(null),[B,pe]=h.useState(!1),[xe,ze]=h.useState(()=>aw()),Ne=h.useCallback((J,De)=>{const Se=xl(De,J);H(null),ce(we=>we===Se?null:Se)},[]),qe=h.useCallback((J,De)=>{const Se=xl(De,J);ce(null),H(we=>we===Se?null:Se)},[]),D=h.useCallback(J=>{const De=Number(J.coupon_id??0);return De?g[De]??`#${De}`:null},[g]);h.useEffect(()=>{if(!G&&!v)return;const J=()=>{ce(null),H(null)},De=we=>{const Je=we.target;Je!=null&&Je.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||J()},Se=we=>{we.key==="Escape"&&J()};return document.addEventListener("pointerdown",De),document.addEventListener("keydown",Se),()=>{document.removeEventListener("pointerdown",De),document.removeEventListener("keydown",Se)}},[G,v]),h.useEffect(()=>{const J=new Set;if(m.forEach(Se=>{Se.user_id&&!xe[Se.user_id]&&J.add(Se.user_id),Se.invite_user_id&&!xe[Se.invite_user_id]&&J.add(Se.invite_user_id)}),oe&&(oe.user_id&&!xe[oe.user_id]&&J.add(oe.user_id),oe.invite_user_id&&!xe[oe.invite_user_id]&&J.add(oe.invite_user_id)),J.size===0)return;const De=Array.from(J);Promise.allSettled(De.map(async Se=>{try{const we=await Ox(Se);if(we&&we.data)return{id:Se,email:we.data.email,invite_user:we.data.invite_user}}catch(we){console.error(`Failed to fetch user ${Se}:`,we)}return null})).then(Se=>{const we={};Se.forEach(Je=>{var Be;if(Je.status==="fulfilled"&&Je.value){const $e=Je.value;we[$e.id]={email:$e.email,invite_user_email:((Be=$e.invite_user)==null?void 0:Be.email)||null},$e.invite_user&&(we[$e.invite_user.id]={email:$e.invite_user.email})}}),Object.keys(we).length>0&&ze(Je=>{const Be={...Je,...we};return iw(Be),Be})})},[m,oe,xe]);const fe={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},me=h.useCallback(async(J=1,De,Se)=>{var we,Je;P(!0),_("");try{let Be;if(De)if(Se==="email"){const st=(we=(await Gd(1,1,[{key:"email",condition:wd,value:De}])).data)==null?void 0:we[0];if(!st){f([]),N(0),P(!1);return}Be=[{key:"user_id",condition:"=",value:String(st.id)}]}else if(Se==="invite_user_email"){const st=(Je=(await Gd(1,1,[{key:"email",condition:wd,value:De}])).data)==null?void 0:Je[0];if(!st){f([]),N(0),P(!1);return}Be=[{key:"invite_user_id",condition:"=",value:String(st.id)}]}else Be=[{key:Se||"trade_no",condition:Se==="trade_no"||Se==="user_id"||Se==="invite_user_id"||Se==="plan_id"||Se==="status"?"=":wd,value:De}];const $e=await L0({current:J,pageSize:Q,filter:Be});f($e.data),N($e.total)}catch(Be){_(Be instanceof Error?Be.message:o("order.loadFailed"))}finally{P(!1)}},[Q,o]),Le=h.useCallback(J=>{const De=String(J);U("user_id"),Y(De),he(!0),I(1),me(1,De,"user_id")},[me]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}const J=new URLSearchParams(l.search),De=J.get("filter_email"),Se=J.get("invite_user_email"),we=J.get("user_id")||J.get("filter_user_id");let Je="",Be="trade_no";we?(Je=we,Be="user_id",U("user_id"),Y(we),he(!0)):De?(Je=De,Be="email",U("email"),Y(De),he(!0)):Se&&(Je=Se,Be="invite_user_email",U("invite_user_email"),Y(Se),he(!0)),me(1,Je,Be),hi().then(b).catch(()=>{}),Dx(1,1e3).then($e=>{const Ve={};$e.data.forEach(st=>{Ve[st.id]=st.code}),w(Ve)}).catch(()=>{})},[me,s,l.search]);function ct(){I(1),me(1,M,q)}function ut(){Y(""),I(1),me(1)}function nt(J){I(J),me(J,M,q)}async function Ct(J){var De,Se;ce(null),H(null),_(""),ae("");try{await q0(J),(De=window.showToast)==null||De.call(window,o("order.paidSuccess"),"success"),await me($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.paidFailed"),"error")}}async function pt(J){var De,Se;ce(null),H(null),_(""),ae("");try{await B0(J),(De=window.showToast)==null||De.call(window,o("order.cancelSuccess"),"success"),await me($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.cancelFailed"),"error")}}async function Pt(J,De){var Se,we;ce(null),H(null),_(""),ae("");try{await G0(J,De),(Se=window.showToast)==null||Se.call(window,o("order.commissionSuccess"),"success"),await me($,M,q)}catch(Je){(we=window.showToast)==null||we.call(window,Je instanceof Error?Je.message:o("order.commissionFailed"),"error")}}async function yt(J){C(J),pe(!0);try{const De=await $0(J.id);De&&De.data&&C(De.data)}catch(De){console.error("Failed to fetch order detail:",De)}finally{pe(!1)}}function Ze(){var J;E({email:"",plan_id:(J=k[0])!=null&&J.id?String(k[0].id):"",period:"month_price",total_amount:"0"}),_(""),ae("")}async function Gt(J){var De,Se;if(J.preventDefault(),!!te){ie(!0),_(""),ae("");try{await tu({email:te.email,plan_id:Number(te.plan_id),period:te.period,total_amount:Number(te.total_amount)*100}),E(null),(De=window.showToast)==null||De.call(window,o("order.assignSuccess"),"success"),await me($,M,q)}catch(we){(Se=window.showToast)==null||Se.call(window,we instanceof Error?we.message:o("order.assignFailed"),"error")}finally{ie(!1)}}}const Ot=Math.ceil(S/Q),ke=oe?D(oe):null;return t.jsxs(Vt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${z?"active":""}`,type:"button",onClick:()=>he(!z),children:[t.jsx(gs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ze,children:[t.jsx(Dn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void me($,M,q),disabled:ne,children:[t.jsx(Dt,{size:16}),o(ne?"common.refreshing":"common.refresh")]})]}),z&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:q,onChange:J=>U(J.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input search-input",value:M,onChange:J=>Y(J.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:J=>J.key==="Enter"&&ct()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ct,children:[t.jsx(gs,{size:16}),o("order.filter")]}),M?t.jsxs("button",{className:"ghost-button",type:"button",onClick:ut,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),ve?t.jsx("div",{className:"form-error",children:ve}):null,O?t.jsx("div",{className:"form-success",children:O}):null,ne&&m.length===0?t.jsx(_t,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ne?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[m.map(J=>{var $e;const De=d(J.status),Se=J.invite_user_id!==null,we=fe[J.commission_status]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=D(J),Be=($e=xe[J.user_id])==null?void 0:$e.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>yt(J),title:o("order.detailsTitle"),children:Zh(J.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",J.id]}),t.jsx("span",{className:"order-type-pill",children:$h[J.type]??`#${J.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Be?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Le(J.user_id),title:o("order.filterByUser"),children:Be}):t.jsxs("span",{className:"order-subline",children:["ID: ",J.user_id]}),t.jsx("strong",{className:"order-plan-name",children:J.plan_name??`Plan #${J.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(J.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Zn(J.total_amount)}),Je?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Je]}):null,Number(J.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Zn(J.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${De.cls.replace("status-","")}`}),t.jsx("span",{children:De.label}),J.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),Ne(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),G===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),Ct(J.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[Se?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Zn(J.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{children:we.label}),J.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ve=>{Ve.stopPropagation(),qe(J.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),v===xl("desktop",J.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ve=>Ve.stopPropagation(),onClick:Ve=>Ve.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{H(null),Pt(J.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{H(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Qh(J.created_at)})})]},J.trade_no)}),!ne&&m.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Ot>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>nt($-1),children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:$>=Ot,onClick:()=>nt($+1),children:t.jsx(Da,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[m.map(J=>{var mn;const De=d(J.status),Se=J.invite_user_id!==null,we=fe[J.invite_user_id!==null?J.commission_status:0]??{label:`#${J.commission_status}`,dotClass:"pending"},Je=(mn=xe[J.user_id])==null?void 0:mn.email,Be=D(J),$e=xl("mobile",J.trade_no),Ve=xl("mobile",J.trade_no),st=G===$e||v===Ve;return t.jsxs("div",{className:`mobile-order-card${st?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>yt(J),children:Zh(J.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",J.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${De.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:De.label}),J.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),Ne(J.trade_no,"mobile")},"aria-expanded":G===$e,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),G===$e&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),Ct(J.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),pt(J.trade_no)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Je?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Le(J.user_id),children:Je}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",J.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:$h[J.type]??`#${J.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:J.plan_name??`Plan #${J.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(J.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Zn(J.total_amount)})]}),Be?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Be})})]}):null,Number(J.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Zn(J.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:Se?t.jsx("strong",{children:Zn(J.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),Se&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${we.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:we.label}),J.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Et=>{Et.stopPropagation(),qe(J.trade_no,"mobile")},"aria-expanded":v===Ve,children:[o("order.markAs"),t.jsx(Ma,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),v===Ve&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Et=>Et.stopPropagation(),onClick:Et=>Et.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{H(null),Pt(J.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{H(null),Pt(J.trade_no,3)},children:[t.jsx(Oi,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Qh(J.created_at)})]})]})]},J.trade_no)}),!ne&&m.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Ot>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>nt($-1),children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",Ot]}),t.jsx("button",{className:"mini-button",disabled:$>=Ot,onClick:()=>nt($+1),children:t.jsx(Da,{size:16})})]}):null]})]}),oe?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:B?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(_t,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(Nn=xe[oe.user_id])!=null&&Nn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{C(null),Le(oe.user_id)},title:"Filter by this user",children:xe[oe.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",oe.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:oe.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(oe.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(oe.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:oe.plan_name??`Plan #${oe.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:oe.callback_no||"-"})]}),ke?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:ke})]}):null]}),oe.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(Ae=xe[oe.invite_user_id])!=null&&Ae.email||(un=xe[oe.user_id])!=null&&un.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const J=String(oe.invite_user_id);U("invite_user_id"),Y(J),he(!0),C(null),me(1,J,"invite_user_id")},title:"Filter by this inviter",children:((pn=xe[oe.invite_user_id])==null?void 0:pn.email)||((Wt=xe[oe.user_id])==null?void 0:Wt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",oe.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Zn(oe.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(fe[oe.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(fe[oe.commission_status]??{label:`#${oe.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Zn(oe.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Zn(oe.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Zn(oe.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Zn(oe.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Zn(oe.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Xh(oe.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Xh(oe.updated_at)})]})]})]})})]})}):null,te?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>E(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Gt,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:te.email,onChange:J=>E({...te,email:J.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:te.plan_id,onChange:J=>E({...te,plan_id:J.target.value}),children:k.map(J=>t.jsx("option",{value:J.id,children:J.name},J.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:te.period,onChange:J=>E({...te,period:J.target.value}),children:Object.entries(Yh).map(([J,De])=>t.jsx("option",{value:J,children:De},J))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:te.total_amount,onChange:J=>E({...te,total_amount:J.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>E(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:F,children:[t.jsx(On,{size:16}),o(F?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Ro(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ho(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function _d(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function sw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(0),[f,k]=h.useState(1),[b,g]=h.useState([]),[w,S]=h.useState(null),[N,$]=h.useState(!0),[I,Q]=h.useState(!1),[M,Y]=h.useState(""),[q,U]=h.useState(""),[ne,P]=h.useState("");h.useEffect(()=>{w||P("")},[w]);const te=h.useCallback(async(_=1)=>{$(!0),Y("");try{const O=await Dx(_,15);d(O.data),m(O.total)}catch(O){Y(O instanceof Error?O.message:l("coupon.loadFailed"))}finally{$(!1)}},[]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}te(1),hi().then(g).catch(()=>{})},[te,s]);async function E(_){var O,ae;if(_.preventDefault(),!!w){Q(!0),Y(""),U("");try{const G=w.type==="1"?Math.round(Number(w.value)*100):Number(w.value);await Y0({id:w.id,name:w.name,type:Number(w.type),value:G,code:w.code||void 0,started_at:Math.floor(new Date(w.started_at).getTime()/1e3),ended_at:Math.floor(new Date(w.ended_at).getTime()/1e3),limit_use:w.limit_use?Number(w.limit_use):null,limit_use_with_user:w.limit_use_with_user?Number(w.limit_use_with_user):null,limit_plan_ids:w.limit_plan_ids.length?w.limit_plan_ids:null,limit_period:w.limit_period.length?w.limit_period:null,generate_count:w.generate_count?Number(w.generate_count):void 0}),S(null),(O=window.showToast)==null||O.call(window,l("coupon.saveSuccess"),"success"),await te(f)}catch(G){(ae=window.showToast)==null||ae.call(window,G instanceof Error?G.message:l("coupon.saveFailed"),"error")}finally{Q(!1)}}}async function F(_){var O;try{await X0(_),await te(f)}catch(ae){(O=window.showToast)==null||O.call(window,ae instanceof Error?ae.message:l("coupon.toggleFailed"),"error")}}async function ie(_){var O;(O=window.showConfirm)==null||O.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var ae,G;try{await Q0(_),(ae=window.showToast)==null||ae.call(window,l("coupon.deleteSuccess"),"success"),await te(f)}catch(ce){(G=window.showToast)==null||G.call(window,ce instanceof Error?ce.message:l("coupon.deleteFailed"),"error")}}})}const ve=Math.ceil(u/15);return t.jsxs(Vt,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[u," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void te(f),disabled:N,children:[t.jsx(Dt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(_d()),children:[t.jsx(Dn,{size:16}),l("coupon.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,N&&o.length===0?t.jsx(_t,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var ce,v;const O=(ce=_.limit_plan_ids)==null?void 0:ce.map(H=>{var z;return((z=b.find(he=>he.id===H))==null?void 0:z.name)||`#${H}`}).join(", "),ae=Ho(l),G=(v=_.limit_period)==null?void 0:v.map(H=>ae[H]||H).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?An(_.value):`${_.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",_.limit_use??"∞"]}),_.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[O?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",O]})}):null,G?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",G]})}):null,!O&&!G?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void F(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Ro(_.started_at)," — ",Ro(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(_d(_)),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(_.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},_.id)}),!N&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(_=>{var O,ae,G,ce;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:`tag type-tag ${_.type===1?"fixed-type":"percent-type"}`,children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{ui(_.code).then(v=>{var H;(H=window.showToast)==null||H.call(window,v?`${l("coupon.copiedCode")}: ${_.code}`:l("common.copyFailed"),v?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(O=_.limit_plan_ids)!=null&&O.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:_.limit_plan_ids.map(v=>{const H=b.find(z=>z.id===v);return t.jsx("span",{className:"res-pill plan-pill",children:H?H.name:`#${v}`},v)})})]}):null,(ae=_.limit_period)!=null&&ae.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:_.limit_period.map(v=>t.jsx("span",{className:"res-pill cycle-pill",children:Ho(l)[v]||v},v))})]}):null,!((G=_.limit_plan_ids)!=null&&G.length)&&!((ce=_.limit_period)!=null&&ce.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ro(_.started_at)," — ",Ro(_.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void F(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?An(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"}),_.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(_d(_)),"aria-label":l("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(_.id),"aria-label":l("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},_.id)}),!N&&o.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),ve>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{k(f-1),te(f-1)},children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",ve]}),t.jsx("button",{className:"mini-button",disabled:f>=ve,onClick:()=>{k(f+1),te(f+1)},children:t.jsx(Da,{size:16})})]}):null,w?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:w.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:E,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:w.name,onChange:_=>S({...w,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:w.type,onChange:_=>S({...w,type:_.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:w.value,onChange:_=>S({...w,value:_.target.value})})]})]}),w.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:w.code,onChange:_=>S({...w,code:_.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.started_at,onChange:_=>S({...w,started_at:_.target.value}),onClick:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)},onFocus:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.ended_at,onChange:_=>S({...w,ended_at:_.target.value}),onClick:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)},onFocus:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use,onChange:_=>S({...w,limit_use:_.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use_with_user,onChange:_=>S({...w,limit_use_with_user:_.target.value}),placeholder:l("coupon.unlimited")})]})]}),w.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.generate_count,onChange:_=>S({...w,generate_count:_.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),w.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:w.limit_plan_ids.map(_=>{const O=b.find(ae=>ae.id===_);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const ae=w.limit_plan_ids.filter(G=>G!==_);S({...w,limit_plan_ids:ae})},children:[O?O.name:`#${_}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_)})}),b.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:ne,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[b.filter(_=>_.name.toLowerCase().includes(ne.toLowerCase())).map(_=>{const O=w.limit_plan_ids.includes(_.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:O,onChange:ae=>{const G=ae.target.checked?[...w.limit_plan_ids,_.id]:w.limit_plan_ids.filter(ce=>ce!==_.id);S({...w,limit_plan_ids:G})}}),t.jsx("span",{children:_.name})]},_.id)}),b.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),w.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:w.limit_period.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const O=w.limit_period.filter(ae=>ae!==_);S({...w,limit_period:O})},children:[Ho(l)[_]||_," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Ho(l)).map(([_,O])=>{const ae=w.limit_period.includes(_);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:ae,onChange:G=>{const ce=G.target.checked?[...w.limit_period,_]:w.limit_period.filter(v=>v!==_);S({...w,limit_period:ce})}}),t.jsx("span",{children:O})]},_)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(On,{size:16}),l(I?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Lo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function ow(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function Nd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function rw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(0),[f,k]=h.useState(1),[b,g]=h.useState([]),[w,S]=h.useState(null),[N,$]=h.useState(!0),[I,Q]=h.useState(!1),[M,Y]=h.useState(""),[q,U]=h.useState(""),[ne,P]=h.useState("");h.useEffect(()=>{w||P("")},[w]);const te=ow(l),E=h.useCallback(async(_=1)=>{$(!0),Y("");try{const O=await Z0(_,15);d(O.data),m(O.total)}catch(O){Y(O instanceof Error?O.message:l("giftcard.loadFailed"))}finally{$(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}E(1),hi().then(g).catch(()=>{})},[E,s]);async function F(_){var O,ae;if(_.preventDefault(),!!w){Q(!0),Y(""),U("");try{const G=w.type==="1"?Math.round(Number(w.value)*100):Number(w.value);await K0({id:w.id,name:w.name,type:Number(w.type),value:G,code:w.code||void 0,started_at:Math.floor(new Date(w.started_at).getTime()/1e3),ended_at:Math.floor(new Date(w.ended_at).getTime()/1e3),limit_use:w.limit_use?Number(w.limit_use):null,plan_id:w.plan_id?Number(w.plan_id):null,generate_count:w.generate_count?Number(w.generate_count):void 0}),S(null),(O=window.showToast)==null||O.call(window,l("giftcard.saveSuccess"),"success"),await E(f)}catch(G){(ae=window.showToast)==null||ae.call(window,G instanceof Error?G.message:l("giftcard.saveFailed"),"error")}finally{Q(!1)}}}async function ie(_){var O;(O=window.showConfirm)==null||O.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var ae,G;try{await F0(_),(ae=window.showToast)==null||ae.call(window,l("giftcard.deleteSuccess"),"success"),await E(f)}catch(ce){(G=window.showToast)==null||G.call(window,ce instanceof Error?ce.message:l("giftcard.deleteFailed"),"error")}}})}const ve=Math.ceil(u/15);return t.jsxs(Vt,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[u," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void E(f),disabled:N,children:[t.jsx(Dt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Nd()),children:[t.jsx(Dn,{size:16}),l("giftcard.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,q?t.jsx("div",{className:"form-success",children:q}):null,N&&o.length===0?t.jsx(_t,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:te[_.type]??_.type})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?An(_.value):_.value})}),t.jsx("td",{children:_.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((O=b.find(ae=>ae.id===_.plan_id))==null?void 0:O.name)||`#${_.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:_.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Lo(_.started_at)," — ",Lo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Nd(_)),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(_.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},_.id)}),!N&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(_=>{var O;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:te[_.type]??_.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{ui(_.code).then(ae=>{var G;(G=window.showToast)==null||G.call(window,ae?l("giftcard.copiedCode").replace("{code}",_.code):l("common.copyFailed"),ae?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:_.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((O=b.find(ae=>ae.id===_.plan_id))==null?void 0:O.name)||`#${_.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Lo(_.started_at)," — ",Lo(_.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?An(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":te[_.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>S(Nd(_)),"aria-label":l("common.edit"),children:t.jsx(Jt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(_.id),"aria-label":l("common.delete"),children:t.jsx(nn,{size:15})})]})]})]},_.id)}),!N&&o.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),ve>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{k(f-1),E(f-1)},children:t.jsx(Aa,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",ve]}),t.jsx("button",{className:"mini-button",disabled:f>=ve,onClick:()=>{k(f+1),E(f+1)},children:t.jsx(Da,{size:16})})]}):null,w?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:w.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:F,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:w.name,onChange:_=>S({...w,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:w.type,onChange:_=>S({...w,type:_.target.value}),children:Object.entries(te).map(([_,O])=>t.jsx("option",{value:_,children:O},_))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:w.value,onChange:_=>S({...w,value:_.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.started_at,onChange:_=>S({...w,started_at:_.target.value}),onClick:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)},onFocus:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:w.ended_at,onChange:_=>S({...w,ended_at:_.target.value}),onClick:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)},onFocus:_=>{var O,ae;return(ae=(O=_.currentTarget).showPicker)==null?void 0:ae.call(O)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.limit_use,onChange:_=>S({...w,limit_use:_.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),w.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:w.generate_count,onChange:_=>S({...w,generate_count:_.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),w.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const _=b.find(O=>String(O.id)===w.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{S({...w,plan_id:""})},children:[_?_.name:`#${w.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),b.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:ne,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!w.plan_id,onChange:()=>{S({...w,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),b.filter(_=>_.name.toLowerCase().includes(ne.toLowerCase())).map(_=>{const O=String(_.id)===w.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:O,onChange:ae=>{ae.target.checked&&S({...w,plan_id:String(_.id)})}}),t.jsx("span",{children:_.name})]},_.id)}),b.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(On,{size:16}),l(I?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const cs="Tương đối",Ta="=";function qo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function cw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function Kh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Sd(s){return+(s/1073741824).toFixed(2)}function kd(s){return Math.round(s*1073741824)}function Bo(s){return(s/1073741824).toFixed(2)}function dw(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function bl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const Xd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Px="user_visible_columns";function uw(){if(typeof window<"u")try{const s=localStorage.getItem(Px);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Xd.filter(s=>s.defaultVisible).map(s=>s.key))}const Io=[{value:"email",label:"Email",condition:cs,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ta,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ta,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ta,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ta,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:cs,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ta,placeholder:"12345"},{value:"uuid",label:"UUID",condition:cs,placeholder:"UUID"},{value:"token",label:"Token",condition:cs,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:cs,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ta,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ta,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ta,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ta,placeholder:"1780366403"}],pw=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function rn(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function mw(s,l){var u;const o=((u=Io.find(m=>m.value===s))==null?void 0:u.label)??s,d=m=>{const f=l(m);return f===m?o:f};switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return l("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function Cd(s){return Io.find(l=>l.value===s)??Io[0]}function fw(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function hw(){const s=qt(),l=ra(),{t:o}=Fe(),[d,u]=h.useState([]),[m,f]=h.useState([]),[k,b]=h.useState([]),[g,w]=h.useState(0),[S,N]=h.useState(1),[$,I]=h.useState(""),[Q,M]=h.useState("email"),[Y,q]=h.useState(!0),[U,ne]=h.useState(""),[P,te]=h.useState(uw),[E,F]=h.useState(!1),ie=h.useRef(null),[ve,_]=h.useState(null),[O,ae]=h.useState(null),[G,ce]=h.useState(null),[v,H]=h.useState({}),[z,he]=h.useState(!1),[oe,C]=h.useState(!1),[B,pe]=h.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[xe,ze]=h.useState(!1),[Ne,qe]=h.useState(null),[D,fe]=h.useState({plan_id:"",period:"month_price",total_amount:""}),[me,Le]=h.useState(!1),[ct,ut]=h.useState(null),[nt,Ct]=h.useState(null),[pt,Pt]=h.useState([]),[yt,Ze]=h.useState(0),[Gt,Ot]=h.useState(1),[ke]=h.useState(10),[Nn,Ae]=h.useState(!1),[un,pn]=h.useState("");h.useEffect(()=>{function j(be){const ge=be.target instanceof Element?be.target:null;ve!==null&&(!ge||!ge.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(_(null),ae(null)),E&&ie.current&&!ie.current.contains(be.target)&&F(!1)}return document.addEventListener("mousedown",j),()=>document.removeEventListener("mousedown",j)},[ve,E]),h.useEffect(()=>{if(ve===null)return;const j=()=>{_(null),ae(null)};return window.addEventListener("resize",j),window.addEventListener("scroll",j,!0),()=>{window.removeEventListener("resize",j),window.removeEventListener("scroll",j,!0)}},[ve]);function Wt(j,be){if(ve===j){_(null),ae(null);return}const ge=be.getBoundingClientRect(),Ue=220,it=392,bn=6,Yt=8,ta=Math.max(Yt,Math.min(window.innerWidth-Ue-Yt,ge.right-Ue)),Ua=ge.bottom+bn+it<=window.innerHeight-Yt?ge.bottom+bn:Math.max(Yt,ge.top-it-bn);ae({top:Ua,left:ta}),_(j)}function J(){_(null),ae(null)}function De(j,be=!1,ge=""){const Ue=it=>{J(),it()};return t.jsxs("div",{className:`action-dropdown-menu ${be?"action-dropdown-menu-fixed":""} ${ge}`.trim(),style:be&&O?{top:O.top,left:O.left}:void 0,onMouseDown:it=>it.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Ue(()=>ca(j)),children:[t.jsx(Jt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>vt(j)),children:[t.jsx(Sx,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>void le(j)),children:[t.jsx(Ea,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Xe(j)),children:[t.jsx(Ld,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>W(j)),children:[t.jsx(Wd,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Ke(j)),children:[t.jsx(qv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>y(j)),children:[t.jsx(Rd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>re(j)),children:[t.jsx(Zo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(()=>Ce(j)),children:[t.jsx(vh,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Ue(()=>Me(j)),children:[t.jsx(nn,{size:14}),o("user.actionDelete")]})]})}function Se(j){te(be=>{const ge=new Set(be);ge.has(j)?ge.delete(j):ge.add(j);try{localStorage.setItem(Px,JSON.stringify([...ge]))}catch{}return ge})}const we=j=>P.has(j),Je=Xd.filter(j=>P.has(j.key)).length,Be=h.useCallback(async(j=1,be,ge)=>{q(!0),ne("");try{const Ue=be==null?void 0:be.trim(),it=Cd(ge||"email"),bn=Ue?[{key:it.value,condition:it.condition,value:Ue}]:void 0,Yt=await Gd(j,15,bn);u(Yt.data),w(Yt.total)}catch(Ue){ne(Ue instanceof Error?Ue.message:o("user.loadFailed"))}finally{q(!1)}},[]),$e=h.useCallback(async()=>{try{const[j,be]=await Promise.all([hi(),gl()]);f(j),b(be)}catch{}},[]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}const j=new URLSearchParams(l.search),ge=[["email",j.get("email")||j.get("filter_email")],["id",j.get("id")||j.get("user_id")||j.get("filter_user_id")],["plan_id",j.get("plan_id")],["invite_user_id",j.get("invite_user_id")],["invite_by_email",j.get("invite_by_email")],["uuid",j.get("uuid")],["token",j.get("token")],["remarks",j.get("remarks")]].find(([,Ue])=>Ue==null?void 0:Ue.trim());if(ge){const[Ue,it]=ge,bn=Cd(Ue),Yt=(it==null?void 0:it.trim())??"";M(bn.value),I(Yt),N(1),Be(1,Yt,bn.value)}else Be(1);$e()},[Be,$e,s,l.search]);function Ve(){N(1),Be(1,$,Q)}function st(){I(""),N(1),Be(1)}function mn(j){N(j),Be(j,$,Q)}function Et(j){if(j.plan_name)return j.plan_name;if(!j.plan_id)return"—";const be=m.find(ge=>ge.id===j.plan_id);return be?be.name:`#${j.plan_id}`}function ea(j){if(!j.group_id)return"—";const be=k.find(ge=>ge.id===j.group_id);return be?be.name:`#${j.group_id}`}function $t(j,be){const ge=o(j);return ge===j?be:ge}function fn(j){const be=Number(j.device_limit??0);return be>0?`${Number(j.device_bound_count??0)} / ${be}`:$t("user.unlimited","Unlimited")}function Kn(j){const be=Number(j.device_bound_count??0),ge=Number(j.device_pending_count??0),Ue=Number(j.device_banned_count??0),it=Number(j.device_online_count??0),bn=Number(j.alive_ip??0),Yt=Number(j.device_limit??0),ta=Yt>0?`${be} / ${Yt}`:`${be} / ${$t("user.unlimited","Unlimited")}`,da=[`${$t("user.deviceBound","Bound")}: ${ta}`,`${$t("user.devicePending","Pending")}: ${ge}`,`${$t("user.deviceBanned","Banned")}: ${Ue}`,`${$t("user.deviceOnline","Online devices")}: ${it}`,`${$t("user.deviceOnlineIp","Online IP")}: ${bn}`];return j.ips&&da.push(j.ips),da.join(`
`)}function hn(j){s.push(`/device?user_id=${encodeURIComponent(String(j.id))}`)}function R(j,be="left"){const ge=`${$t("user.deviceOnlineShort","Online")}: ${Number(j.device_online_count??0)} | ${$t("user.deviceIpShort","IP")}: ${Number(j.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${be==="right"?"align-right":""}`,type:"button",title:Kn(j),onClick:()=>hn(j),children:[t.jsx("span",{className:"device-cell-primary",children:fn(j)}),t.jsx("span",{className:"device-cell-secondary",children:ge})]})}async function le(j){var Ue,it;const be=j.subscribe_url;if(!be){(Ue=window.showToast)==null||Ue.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ge=await ui(be);(it=window.showToast)==null||it.call(window,o(ge?"user.toastUrlCopied":"common.copyFailed"),ge?"success":"error"),_(null)}function W(j){var be;_(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ge,Ue;try{await W0(j.id),(ge=window.showToast)==null||ge.call(window,o("user.toastSecretResetSuccess"),"success"),await Be(S,$,Q)}catch(it){(Ue=window.showToast)==null||Ue.call(window,it instanceof Error?it.message:o("user.toastSecretResetFailed"),"error")}}})}function Me(j){var be;_(null),(be=window.showConfirm)==null||be.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ge,Ue;try{await V0(j.id),(ge=window.showToast)==null||ge.call(window,o("user.toastDeletedSuccess"),"success"),await Be(S,$,Q)}catch(it){(Ue=window.showToast)==null||Ue.call(window,it instanceof Error?it.message:o("user.toastDeletedFailed"),"error")}}})}function Xe(j){var ge;_(null);const be=j.subscribe_url;if(!be){(ge=window.showToast)==null||ge.call(window,o("user.toastNoSubscribeUrl"),"error");return}ut({url:be,userId:j.id})}function Ke(j){_(null),s.push(`/order?user_id=${j.id}`)}function y(j){_(null),s.push(`/subscription?user_id=${j.id}`)}function re(j){_(null),M("invite_user_id"),I(String(j.id)),Be(1,String(j.id),"invite_user_id")}async function ue(j,be){Ae(!0),pn("");try{const ge=await i1(j,be,ke);Pt(ge.data||[]),Ze(ge.total||0),Ot(be)}catch(ge){pn(ge instanceof Error?ge.message:o("user.historyLoading"))}finally{Ae(!1)}}function Ce(j){_(null),Ct(j),ue(j.id,1)}function vt(j){_(null),qe(j.email),fe({plan_id:"",period:"month_price",total_amount:""})}async function Un(j){var be,ge;if(j.preventDefault(),!!Ne){Le(!0);try{await tu({email:Ne,plan_id:Number(D.plan_id),period:D.period,total_amount:(Number(D.total_amount)||0)*100}),(be=window.showToast)==null||be.call(window,o("user.toastAssignSuccess"),"success"),qe(null)}catch(Ue){(ge=window.showToast)==null||ge.call(window,Ue instanceof Error?Ue.message:o("user.toastAssignFailed"),"error")}finally{Le(!1)}}}function ca(j){_(null),ce(j),H({id:j.id,email:j.email,invite_user_email:"",password:"",balance:j.balance,commission_balance:j.commission_balance,u:Sd(j.u),d:Sd(j.d),transfer_enable:Sd(j.transfer_enable),device_limit:j.device_limit,expired_at:cw(j.expired_at),plan_id:j.plan_id,banned:j.banned,commission_type:j.commission_type??0,commission_rate:j.commission_rate??"",discount:j.discount??"",speed_limit:j.speed_limit,is_admin:j.is_admin,is_staff:j.is_staff,remarks:j.remarks??""})}function Nt(j,be){H(ge=>({...ge,[j]:be}))}async function Fn(j){var be,ge;if(j.preventDefault(),!!G){he(!0);try{const Ue={id:G.id,email:v.email,plan_id:v.plan_id||null,expired_at:Kh(String(v.expired_at??"")),transfer_enable:kd(Number(v.transfer_enable??0)),speed_limit:v.speed_limit||null,device_limit:v.device_limit||null,u:kd(Number(v.u??0)),d:kd(Number(v.d??0)),balance:Number(v.balance??0),commission_balance:Number(v.commission_balance??0),commission_rate:v.commission_rate!==""&&v.commission_rate!==null?Number(v.commission_rate):null,commission_type:Number(v.commission_type??0),discount:v.discount!==""&&v.discount!==null?Number(v.discount):null,remarks:v.remarks||null,is_admin:Number(v.is_admin??0),is_staff:Number(v.is_staff??0),banned:Number(v.banned??0)};v.invite_user_email&&(Ue.invite_user_email=v.invite_user_email),v.password&&(Ue.password=v.password),await J0(Ue),(be=window.showToast)==null||be.call(window,o("user.toastSaveSuccess"),"success"),ce(null),await Be(S,$,Q)}catch(Ue){(ge=window.showToast)==null||ge.call(window,Ue instanceof Error?Ue.message:o("user.toastSaveFailed"),"error")}finally{he(!1)}}}async function Ut(j){var be,ge;j.preventDefault(),ze(!0);try{await P0({email_prefix:B.email_prefix,email_suffix:B.email_suffix,password:B.password||void 0,plan_id:B.plan_id?Number(B.plan_id):void 0,expired_at:Kh(B.expired_at)}),(be=window.showToast)==null||be.call(window,o("user.toastCreateSuccess"),"success"),C(!1),pe({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Be(S,$,Q)}catch(Ue){(ge=window.showToast)==null||ge.call(window,Ue instanceof Error?Ue.message:o("user.toastCreateFailed"),"error")}finally{ze(!1)}}const zt=Math.ceil(g/15),Oa=Cd(Q);return t.jsxs(Vt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[g," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ie,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>F(!E),children:[t.jsx(Dv,{size:16}),o("user.columns")]}),E?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Je})})}),Xd.map(j=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:P.has(j.key),onChange:()=>Se(j.key)}),t.jsx("span",{children:rn(j.key,o)})]},j.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Be(S,$,Q),disabled:Y,children:[t.jsx(Dt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>C(!0),children:[t.jsx(Dn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Q,onChange:j=>M(j.target.value),children:Io.map(j=>t.jsx("option",{value:j.value,children:mw(j.value,o)},j.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input search-input",value:$,onChange:j=>I(j.target.value),placeholder:Oa.placeholder,onKeyDown:j=>j.key==="Enter"&&Ve()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ve,children:[t.jsx(gs,{size:16}),o("user.filter")]}),$?t.jsxs("button",{className:"ghost-button",type:"button",onClick:st,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),U?t.jsx("div",{className:"form-error",children:U}):null,Y&&d.length===0?t.jsx(_t,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Y?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(j=>{const be=Bo(j.u+j.d),ge=Bo(j.transfer_enable),Ue=parseFloat(be);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",j.id]}),t.jsx("span",{className:"user-email",title:j.email,children:j.email})]}),j.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Et(j)," / ",j.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ea(j)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ue>0?Ue>parseFloat(ge)*.9?"high":"ok":""}`,children:[be," GB"]})," / ",ge," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("devices",o)}),t.jsx("span",{className:"info-val",children:R(j,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("expires",o)}),t.jsx("span",{className:"info-val",children:j.expired_at?t.jsx("span",{className:`expiry-date ${j.expired_at<Date.now()/1e3?"expired":""}`,children:qo(j.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(j.balance/100).toFixed(2)," ₫ / ",(j.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:rn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:qo(j.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${ve===j.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>_(ve===j.id?null:j.id),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ve===j.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>_(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:it=>it.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:j.email}),t.jsxs("small",{children:["#",j.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:16})})]}),De(j,!1,"mobile-action-menu")]})}):null]})})]},j.id)}),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[we("id")&&t.jsx("th",{children:rn("id",o)}),we("email")&&t.jsx("th",{children:rn("email",o)}),we("status")&&t.jsx("th",{children:rn("status",o)}),we("plan")&&t.jsx("th",{children:rn("plan",o)}),we("group")&&t.jsx("th",{children:rn("group",o)}),we("used")&&t.jsx("th",{children:rn("used",o)}),we("traffic")&&t.jsx("th",{children:rn("traffic",o)}),we("devices")&&t.jsx("th",{children:rn("devices",o)}),we("expires")&&t.jsx("th",{children:rn("expires",o)}),we("balance")&&t.jsx("th",{children:rn("balance",o)}),we("commission")&&t.jsx("th",{children:rn("commission",o)}),we("joined")&&t.jsx("th",{children:rn("joined",o)}),we("actions")&&t.jsx("th",{className:"user-actions-col",children:rn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(j=>{const be=Bo(j.u+j.d),ge=Bo(j.transfer_enable),Ue=parseFloat(be);return t.jsxs("tr",{children:[we("id")&&t.jsx("td",{children:j.id}),we("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:j.email})}),we("status")&&t.jsx("td",{children:j.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),we("plan")&&t.jsx("td",{children:Et(j)}),we("group")&&t.jsx("td",{children:j.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):ea(j)}),we("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ue>0?Ue>parseFloat(ge)*.9?"high":"ok":""}`,children:be})}),we("traffic")&&t.jsx("td",{children:ge}),we("devices")&&t.jsx("td",{children:R(j)}),we("expires")&&t.jsx("td",{children:j.expired_at?t.jsx("span",{className:`expiry-date ${j.expired_at<Date.now()/1e3?"expired":""}`,children:qo(j.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),we("balance")&&t.jsx("td",{children:(j.balance/100).toFixed(2)}),we("commission")&&t.jsx("td",{children:(j.commission_balance/100).toFixed(2)}),we("joined")&&t.jsx("td",{children:t.jsx("small",{children:qo(j.created_at)})}),we("actions")&&t.jsx("td",{className:"user-actions-col",children:t.jsxs("div",{className:`action-dropdown-wrap ${ve===j.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:it=>Wt(j.id,it.currentTarget),children:[o("user.colActions")," ",t.jsx(Ma,{size:14})]}),ve===j.id&&O?ux.createPortal(De(j,!0),document.body):null]})})]},j.id)}),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Je,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),zt>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:S<=1,onClick:()=>mn(S-1),children:t.jsx(Aa,{size:16})}),Array.from({length:Math.min(5,zt)},(j,be)=>{let ge;return zt<=5||S<=3?ge=be+1:S>=zt-2?ge=zt-4+be:ge=S-2+be,t.jsx("button",{className:`mini-button ${ge===S?"active-page":""}`,onClick:()=>mn(ge),children:ge},ge)}),zt>5?t.jsxs("span",{className:"page-info",children:["… ",zt]}):null,t.jsx("button",{className:"mini-button",disabled:S>=zt,onClick:()=>mn(S+1),children:t.jsx(Da,{size:16})})]})}):null]}),G?t.jsx("div",{className:"modal-backdrop",onClick:()=>ce(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Fn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(v.email??""),onChange:j=>Nt("email",j.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(v.invite_user_email??""),onChange:j=>Nt("invite_user_email",j.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(v.password??""),onChange:j=>Nt("password",j.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.balance??0)/100).toFixed(2)),onChange:j=>Nt("balance",Math.round(Number(j.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(v.commission_balance??0)/100).toFixed(2)),onChange:j=>Nt("commission_balance",Math.round(Number(j.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.u??0),onChange:j=>Nt("u",j.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.d??0),onChange:j=>Nt("d",j.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(v.transfer_enable??0),onChange:j=>Nt("transfer_enable",j.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.device_limit??""),onChange:j=>Nt("device_limit",j.target.value?Number(j.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(v.expired_at??""),onChange:j=>Nt("expired_at",j.target.value),onClick:j=>{var be,ge;return(ge=(be=j.currentTarget).showPicker)==null?void 0:ge.call(be)},onFocus:j=>{var be,ge;return(ge=(be=j.currentTarget).showPicker)==null?void 0:ge.call(be)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(v.plan_id??""),onChange:j=>Nt("plan_id",j.target.value?Number(j.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(v.banned??0),onChange:j=>Nt("banned",Number(j.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(v.commission_type??0),onChange:j=>Nt("commission_type",Number(j.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.commission_rate??""),onChange:j=>Nt("commission_rate",j.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(v.discount??""),onChange:j=>Nt("discount",j.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(v.speed_limit??""),onChange:j=>Nt("speed_limit",j.target.value?Number(j.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${v.is_admin?"active":""}`,onClick:()=>Nt("is_admin",v.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${v.is_staff?"active":""}`,onClick:()=>Nt("is_staff",v.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(v.remarks??""),onChange:j=>Nt("remarks",j.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ce(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:z,children:o(z?"common.processing":"common.save")})]})]})]})}):null,oe?t.jsx("div",{className:"modal-backdrop",onClick:()=>C(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ut,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:B.email_prefix,onChange:j=>pe({...B,email_prefix:j.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:B.email_suffix,onChange:j=>pe({...B,email_suffix:j.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:B.password,onChange:j=>pe({...B,password:j.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:B.plan_id,onChange:j=>pe({...B,plan_id:j.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:B.expired_at,onChange:j=>pe({...B,expired_at:j.target.value}),onClick:j=>{var be,ge;return(ge=(be=j.currentTarget).showPicker)==null?void 0:ge.call(be)},onFocus:j=>{var be,ge;return(ge=(be=j.currentTarget).showPicker)==null?void 0:ge.call(be)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:xe,children:o(xe?"user.creating":"user.createUser")})]})]})]})}):null,Ne?t.jsx("div",{className:"modal-backdrop",onClick:()=>qe(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>qe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Un,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ne})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:D.plan_id,onChange:j=>fe({...D,plan_id:j.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),m.map(j=>t.jsx("option",{value:j.id,children:j.name},j.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:D.period,onChange:j=>fe({...D,period:j.target.value}),children:pw.map(j=>t.jsx("option",{value:j.value,children:fw(j.value,o)},j.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.total_amount,onChange:j=>fe({...D,total_amount:j.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>qe(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:me,children:o(me?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* ── column picker ─────────────────────── */
        .col-picker-wrap {
          position: relative;
          display: inline-block;
        }
        .col-picker-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 6px);
          z-index: 999;
          min-width: 220px;
          background: var(--surface);
          border: 1px solid var(--line);
          border-radius: 10px;
          box-shadow: 0 8px 28px rgba(0,0,0,0.12);
          padding: 6px 0;
          animation: menu-fade 0.15s ease-out;
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
        }
        .col-picker-item {
          display: flex;
          align-items: center;
          gap: 10px;
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
      `}}),ct?t.jsx("div",{className:"modal-backdrop",onClick:()=>ut(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ut(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ct.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:ct.userId})})]})]})}):null,nt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ct(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:j=>j.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:nt.email,id:nt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ct(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[un?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:un}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:yt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:bl(pt.reduce((j,be)=>j+be.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:bl(pt.reduce((j,be)=>j+be.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:bl(pt.reduce((j,be)=>j+be.u+be.d,0))})]})]}),Nn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(_t,{label:o("user.historyLoading")})}):pt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(vh,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:pt.map(j=>{const be=bl(j.u),ge=bl(j.d),Ue=bl(j.u+j.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:dw(j.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(j.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:be}),t.jsx("td",{style:{color:"var(--muted)"},children:ge}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ue})]},j.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((Gt-1)*ke+1,yt),end:Math.min(Gt*ke,yt),total:yt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:Gt<=1,onClick:()=>ue(nt.id,Gt-1),children:[t.jsx(Aa,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Gt*ke>=yt,onClick:()=>ue(nt.id,Gt+1),children:[o("user.historyNext"),t.jsx(Da,{size:16})]})]})]})]})]})]})}):null]})}function xw(s,l=8,o=4){return s.length<=l+o+3?s:`${s.slice(0,l)}...${s.slice(-o)}`}function fs({value:s,onCopy:l,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:m=4}){const{t:f}=Fe(),[k,b]=h.useState(!1),g=k?s:xw(s,u,m);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:f("uuid.copy"),onClick:()=>void l(),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:k?s:g,children:g})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:f(k?"uuid.hide":"uuid.showFull"),"aria-label":f(k?"uuid.hide":"uuid.showFull"),onClick:()=>b(w=>!w),children:k?t.jsx(Hv,{size:14}):t.jsx(Lv,{size:14})})]})}const Fh=15,Jh=20,bw=["email","id","user_id","plan_id","status"],gw=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function si(s,l){return s?new Date(s*1e3).toLocaleString():l}function yw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function vw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Di(s){return+(s/1073741824).toFixed(2)}function zd(s){return Math.round((Number(s)||0)*1073741824)}function jw(s){return s==="email"?"like":"="}function ww(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function _w(s,l){const o=l(`order.period.${s}`);return o===`order.period.${s}`?s:o}function Vh(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Ph(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function Wh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Ih(s){return String(s.hwid??"").trim()!==""}function Nw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Sw(){const s=qt(),l=ra(),{t:o}=Fe(),[d,u]=h.useState([]),[m,f]=h.useState([]),[k,b]=h.useState(0),[g,w]=h.useState(1),[S,N]=h.useState("email"),[$,I]=h.useState(""),[Q,M]=h.useState(!0),[Y,q]=h.useState(""),[U,ne]=h.useState(null),[P,te]=h.useState({}),[E,F]=h.useState(null),[ie,ve]=h.useState(null),[_,O]=h.useState([]),[ae,G]=h.useState(0),[ce,v]=h.useState(1),[H,z]=h.useState(!1),[he,oe]=h.useState(""),[C,B]=h.useState(null),[pe,xe]=h.useState(null),[ze,Ne]=h.useState({period:"month_price",total_amount:""}),[qe,D]=h.useState(!1),[fe,me]=h.useState(null),[Le,ct]=h.useState(null),[ut,nt]=h.useState(null);function Ct(y){const re=y==null?void 0:y.trim();re&&s.push(`/user?email=${encodeURIComponent(re)}`)}const pt=h.useCallback(async(y=1,re="",ue="email")=>{M(!0),q("");try{const Ce=re.trim()?[{key:ue,condition:jw(ue),value:re.trim()}]:void 0,vt=await I0(y,Fh,Ce);u(vt.data),b(vt.total),w(y)}catch(Ce){q(Ce instanceof Error?Ce.message:o("subscription.loadFailed"))}finally{M(!1)}},[o]),Pt=h.useCallback(async(y,re=1)=>{z(!0),oe("");try{const ue=await Ux(re,Jh,[{key:"subscription_id",condition:"=",value:String(y.id)}]);O(ue.data),G(ue.total),v(re)}catch(ue){oe(ue instanceof Error?ue.message:o("subscription.slotsLoadFailed"))}finally{z(!1)}},[o]),yt=h.useCallback(async()=>{var y;try{f(await hi())}catch(re){(y=window.showToast)==null||y.call(window,re instanceof Error?re.message:o("subscription.plansLoadFailed"),"error")}},[o]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}yt();const y=new URLSearchParams(l.search),ue=[["user_id",y.get("user_id")],["id",y.get("id")],["plan_id",y.get("plan_id")],["email",y.get("email")],["status",y.get("status")]].find(([,Ce])=>Ce&&Ce.trim());if(ue){const[Ce,vt]=ue,Un=vt??"";N(Ce),I(Un),pt(1,Un,Ce);return}pt()},[pt,yt,l.search,s]),h.useEffect(()=>{function y(re){const ue=re.target instanceof Element?re.target:null;fe!==null&&(!ue||!ue.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Ze()}return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[fe]),h.useEffect(()=>{if(fe===null)return;const y=()=>Ze();return window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[fe]);function Ze(){me(null),ct(null)}function Gt(y,re){if(fe===y&&Le){Ze();return}const ue=re.getBoundingClientRect(),Ce=230,vt=292,Un=6,ca=8,Nt=Math.max(ca,Math.min(window.innerWidth-Ce-ca,ue.right-Ce)),Ut=ue.bottom+Un+vt<=window.innerHeight-ca?ue.bottom+Un:Math.max(ca,ue.top-vt-Un);ct({top:Ut,left:Nt}),me(y)}function Ot(y){ct(null),me(re=>re===y?null:y)}function ke(y){y.preventDefault(),pt(1,$,S)}function Nn(){if(I(""),l.search){s.replace("/subscription");return}pt(1,"",S)}function Ae(y){if(!y)return o("subscription.noPlan");const re=m.find(ue=>Number(ue.id)===Number(y));return re?`#${re.id} - ${re.name}`:`#${y}`}function un(y){ne(y),te({plan_id:y.plan_id?String(y.plan_id):"",transfer_enable:String(Di(y.transfer_enable)),u:String(Di(y.u)),d:String(Di(y.d)),device_limit:y.device_limit===null?"":String(y.device_limit),speed_limit:y.speed_limit===null?"":String(y.speed_limit),expired_at:yw(y.expired_at),status:y.status,auto_renewal:String(y.auto_renewal||0),name_sni:y.name_sni??"",network_settings:y.network_settings??"",remarks:y.remarks??""})}async function pn(y){var re,ue;if(y.preventDefault(),!!U){F(U.id);try{await t1({id:U.id,plan_id:P.plan_id===""?null:Number(P.plan_id),transfer_enable:zd(P.transfer_enable),u:zd(P.u),d:zd(P.d),device_limit:P.device_limit===""?null:Number(P.device_limit),speed_limit:P.speed_limit===""?null:Number(P.speed_limit),expired_at:vw(P.expired_at),status:P.status,auto_renewal:Number(P.auto_renewal),name_sni:P.name_sni||null,network_settings:P.network_settings||null,remarks:P.remarks}),ne(null),(re=window.showToast)==null||re.call(window,o("subscription.updateSuccess"),"success"),await pt(g,$,S)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("subscription.saveFailed"),"error")}finally{F(null)}}}function Wt(y){var re;(re=window.showConfirm)==null||re.call(window,{message:o("subscription.resetConfirm",{id:y.id}),onConfirm:async()=>{var ue,Ce;F(y.id);try{await n1(y.id),(ue=window.showToast)==null||ue.call(window,o("subscription.resetSuccess"),"success"),await pt(g,$,S)}catch(vt){(Ce=window.showToast)==null||Ce.call(window,vt instanceof Error?vt.message:o("subscription.resetFailed"),"error")}finally{F(null)}}})}function J(y){var re,ue;if(!y.user_email){(re=window.showToast)==null||re.call(window,o("subscription.renewMissingEmail"),"error");return}if(!y.plan_id){(ue=window.showToast)==null||ue.call(window,o("subscription.renewMissingPlan"),"error");return}xe(y),Ne({period:"month_price",total_amount:""})}async function De(y){var re,ue;if(y.preventDefault(),!(!(pe!=null&&pe.user_email)||!pe.plan_id)){D(!0);try{await tu({email:pe.user_email,plan_id:pe.plan_id,period:ze.period,total_amount:Math.round((Number(ze.total_amount)||0)*100),subscription_id:pe.id}),(re=window.showToast)==null||re.call(window,o("subscription.renewSuccess"),"success"),xe(null)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("subscription.renewFailed"),"error")}finally{D(!1)}}}async function Se(y){var ue;if(!y)return;const re=await ui(y);(ue=window.showToast)==null||ue.call(window,o(re?"subscription.copySuccess":"common.copyFailed"),re?"success":"error")}function we(y,re){u(ue=>ue.map(Ce=>Ce.id===y?{...Ce,subscribe_url:re}:Ce)),ve(ue=>ue&&ue.id===y?{...ue,subscribe_url:re}:ue)}async function Je(y){if(y.subscribe_url)return y.subscribe_url;const ue=(await e1(y.id)).data||null;return ue&&we(y.id,ue),ue}async function Be(y){var re;if(!y.subscribe_url){B(y.id);try{await Je(y)}catch(ue){(re=window.showToast)==null||re.call(window,ue instanceof Error?ue.message:o("common.copyFailed"),"error")}finally{B(null)}}}async function $e(y){var re,ue;B(y.id);try{const Ce=await Je(y);if(!Ce){(re=window.showToast)==null||re.call(window,o("common.copyFailed"),"error");return}await Se(Ce)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{B(null)}}async function Ve(y){var re,ue;B(y.id);try{const Ce=await Je(y);if(!Ce){(re=window.showToast)==null||re.call(window,o("common.copyFailed"),"error");return}nt({url:Ce,subscriptionId:y.id})}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("common.copyFailed"),"error")}finally{B(null)}}function st(y){ve(y),O([]),G(0),v(1),Pt(y,1),Be(y)}function mn(y=ce){return ie?Pt(ie,y):Promise.resolve()}function Et(y){var re;(re=window.showConfirm)==null||re.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var ue,Ce;F(y.id);try{await Rx(y.id),(ue=window.showToast)==null||ue.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([mn(),pt(g,$,S)])}catch(vt){(Ce=window.showToast)==null||Ce.call(window,vt instanceof Error?vt.message:o("subscription.unbindFailed"),"error")}finally{F(null)}}})}function ea(y){var re;(re=window.showConfirm)==null||re.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var ue,Ce;F(y.id);try{await Hx(y.id),(ue=window.showToast)==null||ue.call(window,o("subscription.banSuccess"),"success"),await Promise.all([mn(),pt(g,$,S)])}catch(vt){(Ce=window.showToast)==null||Ce.call(window,vt instanceof Error?vt.message:o("subscription.banFailed"),"error")}finally{F(null)}}})}function $t(y){const re=y.device_limit&&y.device_limit>0?String(y.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:y.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:re})]}),y.device_limit&&y.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(y.device_count/y.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>st(y),children:[t.jsx(Rd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function fn(y){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Di(y.total_used)," / ",Di(y.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Nw(y)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Di(y.u),download:Di(y.d)})})]})}function Kn(y){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(fs,{value:y.uuid,onCopy:()=>Se(y.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function hn(y){return t.jsxs("div",{className:"subscription-link-stack",children:[Kn(y),y.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.subscribe_url,onClick:()=>void $e(y),disabled:C===y.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:y.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void $e(y),disabled:C===y.id,children:[t.jsx(Ea,{size:14}),t.jsx("span",{children:C===y.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function R(y){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:C===y.id,onClick:()=>void Ve(y),children:[t.jsx(Ld,{size:14}),C===y.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),hn(y)]})}function le(y,re=!1,ue=""){const Ce=vt=>{Ze(),vt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${re?"subscription-action-menu-fixed":""} ${ue}`.trim(),style:re&&Le?{top:Le.top,left:Le.left}:void 0,onMouseDown:vt=>vt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>un(y)),children:[t.jsx(Jt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>J(y)),children:[t.jsx(Sx,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>Ce(()=>st(y)),children:[t.jsx(Rd,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:C===y.id,onClick:()=>Ce(()=>void $e(y)),children:[t.jsx(Ea,{size:14}),C===y.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:C===y.id,onClick:()=>Ce(()=>void Ve(y)),children:[t.jsx(Ld,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:E===y.id,onClick:()=>Ce(()=>Wt(y)),children:[t.jsx(Wd,{size:14}),o("subscription.resetSecret")]})]})}function W(y,re="desktop"){return re==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===y.id&&!Le?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Ot(y.id),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===y.id&&!Le?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Ze,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:ue=>ue.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:y.user_email??o("subscription.userId",{id:y.user_id})}),t.jsxs("small",{children:["#",y.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Ze,children:t.jsx(lt,{size:16})})]}),le(y,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${fe===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:ue=>Gt(y.id,ue.currentTarget),children:[o("subscription.action")," ",t.jsx(Ma,{size:14})]}),fe===y.id&&Le?ux.createPortal(le(y,!0),document.body):null]})}const Me=Math.ceil(k/Fh),Xe=Math.ceil(ae/Jh),Ke=Me>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:g<=1||Q,onClick:()=>void pt(g-1,$,S),children:[t.jsx(Aa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:g,total:Me})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:g>=Me||Q,onClick:()=>void pt(g+1,$,S),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null;return t.jsxs(Vt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:k})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void pt(g,$,S),children:[t.jsx(Dt,{size:16}),o(Q?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ke,children:[t.jsx("select",{className:"config-input filter-select",value:S,onChange:y=>N(y.target.value),children:bw.map(y=>t.jsx("option",{value:y,children:ww(y,o)},y))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input",value:$,onChange:y=>I(y.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(gs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Nn,children:o("common.clearFilter")})]}),Y?t.jsx("div",{className:"form-error",children:Y}):null,Q&&d.length===0?t.jsx(_t,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(y=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",y.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:y.plan_name??"-"}),y.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(y.user_email),title:o("subscription.viewUser"),children:y.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:y.user_id}),y.plan_id?` - ${o("subscription.planId",{id:y.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${y.status}`,children:Vh(y.status,o)})}),t.jsx("td",{children:fn(y)}),t.jsx("td",{children:$t(y)}),t.jsx("td",{children:si(y.expired_at,o("subscription.never"))}),t.jsx("td",{children:si(y.updated_at,o("subscription.never"))}),t.jsx("td",{children:W(y)})]},y.id)),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(y=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",y.id]}),t.jsx("strong",{className:"subscription-plan-name",children:y.plan_name??"-"}),y.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Ct(y.user_email),title:o("subscription.viewUser"),children:y.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${y.status}`,children:Vh(y.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),fn(y)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),$t(y)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:si(y.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:si(y.updated_at,o("subscription.never"))})]})]}),W(y,"mobile")]},y.id)),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),Ke,ie?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ve(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ie.id})}),t.jsx("p",{children:ie.user_email??o("subscription.userId",{id:ie.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ve(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[he?t.jsx("div",{className:"form-error",children:he}):null,H&&_.length===0?t.jsx(_t,{label:o("subscription.slotsLoading")}):null,R(ie),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[_.map(y=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(fs,{value:y.uuid,onCopy:()=>Se(y.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Wh(y.status)}`,children:Ph(y.status,o)})}),t.jsx("td",{children:y.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.hwid,onClick:()=>Se(y.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:y.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:y.user_agent??"",children:y.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:y.last_ip??"-"}),t.jsx("small",{children:y.first_ip?o("subscription.firstIp",{ip:y.first_ip}):"-"})]}),t.jsx("td",{children:si(y.first_seen_at,"-")}),t.jsx("td",{children:si(y.last_seen_at,"-")}),t.jsx("td",{children:Ih(y)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===y.id,onClick:()=>Et(y),children:[t.jsx(Bd,{size:14}),o("subscription.unbind")]}),y.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===y.id,onClick:()=>ea(y),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},y.id)),!H&&_.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[_.map(y=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Wh(y.status)}`,children:Ph(y.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(fs,{value:y.uuid,onCopy:()=>Se(y.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),y.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.hwid,onClick:()=>Se(y.hwid),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:y.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:y.last_ip??"-"}),t.jsx("small",{children:y.first_ip?o("subscription.firstIp",{ip:y.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:y.user_agent??"",children:y.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:si(y.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:si(y.last_seen_at,"-")})]})]}),Ih(y)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===y.id,onClick:()=>Et(y),children:[t.jsx(Bd,{size:14}),o("subscription.unbind")]}),y.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===y.id,onClick:()=>ea(y),children:[t.jsx(Oi,{size:14}),o("subscription.ban")]}):null]}):null]},y.id)),!H&&_.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Xe>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:ce<=1||H,onClick:()=>void mn(ce-1),children:[t.jsx(Aa,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:ce,total:Xe})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ce>=Xe||H,onClick:()=>void mn(ce+1),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null]})]})}):null,ut?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>nt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:ut.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>nt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(ut.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:ut.url})]})]})}):null,U?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ne(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:U.id})}),t.jsx("p",{children:U.user_email??o("subscription.userId",{id:U.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ne(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:pn,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:P.plan_id,onChange:y=>te(re=>({...re,plan_id:y.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),m.map(y=>t.jsxs("option",{value:y.id,children:["#",y.id," - ",y.name]},y.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.transfer_enable,onChange:y=>te(re=>({...re,transfer_enable:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.u,onChange:y=>te(re=>({...re,u:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.d,onChange:y=>te(re=>({...re,d:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.device_limit,onChange:y=>te(re=>({...re,device_limit:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.speed_limit,onChange:y=>te(re=>({...re,speed_limit:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:P.expired_at,onChange:y=>te(re=>({...re,expired_at:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:P.status,onChange:y=>te(re=>({...re,status:y.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:P.auto_renewal,onChange:y=>te(re=>({...re,auto_renewal:y.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]}),t.jsxs("label",{children:[o("subscription.sniName"),t.jsx("input",{className:"config-input",value:P.name_sni,onChange:y=>te(re=>({...re,name_sni:y.target.value})),placeholder:o("subscription.sniNamePlaceholder")})]}),t.jsxs("label",{children:[o("subscription.sniValue"),t.jsx("input",{className:"config-input",value:P.network_settings,onChange:y=>te(re=>({...re,network_settings:y.target.value})),placeholder:o("subscription.sniValuePlaceholder")})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:P.remarks,onChange:y=>te(re=>({...re,remarks:y.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ne(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:E===U.id,children:E===U.id?o("common.processing"):o("common.save")})]})]})]})}):null,pe?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>xe(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:pe.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>xe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:De,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:pe.user_email??"",children:pe.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",pe.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:Ae(pe.plan_id),children:Ae(pe.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:ze.period,onChange:y=>Ne(re=>({...re,period:y.target.value})),children:gw.map(y=>t.jsx("option",{value:y,children:_w(y,o)},y))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ze.total_amount,onChange:y=>Ne(re=>({...re,total_amount:y.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>xe(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:qe,children:o(qe?"common.processing":"common.save")})]})]})]})}):null]})}const ex=15,kw=["email","user_id","node","hwid","user_agent","last_ip"];function ds(s){return s?new Date(s*1e3).toLocaleString():"-"}function oi(s){const l=Math.max(0,Number(s??0));if(l===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=l,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function Cw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function zw(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"node":return l("device.filterNode");case"node_id":return l("device.filterNodeId");case"node_type":return l("device.filterNodeType");case"user_agent":return l("device.filterUserAgent");case"last_ip":return l("device.filterIp");default:return""}}function tx(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function Go(s){return(s.online_ips??[]).join(", ")||"-"}function $o(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function Tw(s){return String(s.hwid??"").trim()!==""}function Ew(s){var m,f,k;const l=new URLSearchParams(s),o=(m=l.get("node_type"))==null?void 0:m.trim(),d=(f=l.get("node_id"))==null?void 0:f.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const b of u){const g=(k=l.get(b))==null?void 0:k.trim();if(g)return{field:b,value:g}}return null}function Mw(){const s=qt(),l=ra(),{t:o}=Fe(),[d,u]=h.useState([]),[m,f]=h.useState(0),[k,b]=h.useState(1),[g,w]=h.useState("email"),[S,N]=h.useState(""),[$,I]=h.useState(!0),[Q,M]=h.useState(""),[Y,q]=h.useState(null),[U,ne]=h.useState(null),[P,te]=h.useState(null),E=h.useCallback(async(z=1,he="",oe="email")=>{I(!0),M("");try{const C=he.trim()?[{key:oe,condition:Cw(oe),value:he.trim()}]:void 0,B=await Ux(z,ex,C);u(B.data),f(B.total),b(z)}catch(C){M(C instanceof Error?C.message:o("device.loadFailed"))}finally{I(!1)}},[o]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}const z=Ew(l.search);if(z){w(z.field),N(z.value),E(1,z.value,z.field);return}E()},[E,s,l.search]),h.useEffect(()=>{if(P===null)return;function z(oe){const C=oe.target;C!=null&&C.closest(".device-action-wrap")||te(null)}function he(oe){oe.key==="Escape"&&te(null)}return document.addEventListener("pointerdown",z),document.addEventListener("keydown",he),()=>{document.removeEventListener("pointerdown",z),document.removeEventListener("keydown",he)}},[P]);function F(z){z.preventDefault(),E(1,S,g)}function ie(){if(N(""),l.search){s.replace("/device");return}E(1,"",g)}async function ve(z){var oe;if(!z.hwid)return;const he=await ui(z.hwid);(oe=window.showToast)==null||oe.call(window,o(he?"device.copySuccess":"common.copyFailed"),he?"success":"error")}async function _(z){var oe;const he=await ui(z.uuid);(oe=window.showToast)==null||oe.call(window,o(he?"device.copyUuidSuccess":"common.copyFailed"),he?"success":"error")}function O(z){var he;(he=window.showConfirm)==null||he.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var oe,C;q(z.id);try{await Rx(z.id),(oe=window.showToast)==null||oe.call(window,o("device.unbindSuccess"),"success"),await E(k,S,g)}catch(B){(C=window.showToast)==null||C.call(window,B instanceof Error?B.message:o("device.unbindFailed"),"error")}finally{q(null)}}})}function ae(z){var he;(he=window.showConfirm)==null||he.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var oe,C;q(z.id);try{await Hx(z.id),(oe=window.showToast)==null||oe.call(window,o("device.banSuccess"),"success"),await E(k,S,g)}catch(B){(C=window.showToast)==null||C.call(window,B instanceof Error?B.message:o("device.banFailed"),"error")}finally{q(null)}}})}function G(z){var he;(he=window.showConfirm)==null||he.call(window,{message:o("device.resetConfirm",{user:z.user_email??`#${z.user_id}`}),onConfirm:async()=>{var oe,C;ne(z.user_id);try{await a1(z.user_id),(oe=window.showToast)==null||oe.call(window,o("device.resetSuccess"),"success"),await E(k,S,g)}catch(B){(C=window.showToast)==null||C.call(window,B instanceof Error?B.message:o("device.resetFailed"),"error")}finally{ne(null)}}})}function ce(z){te(null),z()}function v(z,he){const oe=he==="mobile"?-z.id:z.id,C=P===oe,B=Tw(z);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${C?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>te(C?null:oe),children:[o("device.action")," ",t.jsx(Ma,{size:14})]}),C?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[B?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Y===z.id,onClick:()=>ce(()=>O(z)),children:[t.jsx(Bd,{size:14}),o("device.unbind")]}),z.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Y===z.id,onClick:()=>ce(()=>ae(z)),children:[t.jsx(Oi,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===z.user_id,onClick:()=>ce(()=>G(z)),children:[t.jsx(Iv,{size:14}),o("device.resetUser")]})]}):null]})}const H=Math.ceil(m/ex);return t.jsxs(Vt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:m})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void E(k,S,g),children:[t.jsx(Dt,{size:16}),o($?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:F,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:z=>w(z.target.value),children:kw.map(z=>t.jsx("option",{value:z,children:zw(z,o)},z))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(nr,{size:16}),t.jsx("input",{className:"config-input",value:S,onChange:z=>N(z.target.value),placeholder:o(g==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(gs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ie,children:o("device.clear")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,$&&d.length===0?t.jsx(_t,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(z=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:tx(z.status,o)}),t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(_h,{size:14}):t.jsx(wh,{size:14}),z.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(fs,{value:z.uuid,onCopy:()=>_(z),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:z.hwid,onClick:()=>ve(z),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${z.last_ip??"-"} / ${z.first_ip??"-"}`,children:[z.last_ip??"-",z.first_ip?` (${z.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${oi(z.device_upload)} / ${o("device.download")}: ${oi(z.device_download)}`,children:[oi(z.device_used_traffic)," / ",o("device.upload"),": ",oi(z.device_upload)," / ",o("device.download"),": ",oi(z.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Go(z)} / ${$o(z)}`,children:[o("device.onlineIps"),": ",Go(z)," / ",o("device.onlineNodes"),": ",$o(z)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ds(z.first_seen_at)," / ",o("device.lastSeen"),": ",ds(z.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:v(z,"mobile")})]},z.id)),!$&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(z=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:tx(z.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:oi(z.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",oi(z.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",oi(z.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(_h,{size:14}):t.jsx(wh,{size:14}),z.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Go(z),children:[o("device.onlineIps"),": ",Go(z)]}),t.jsxs("small",{title:$o(z),children:[o("device.onlineNodes"),": ",$o(z)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ds(z.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(fs,{value:z.uuid,onCopy:()=>_(z),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:z.hwid,onClick:()=>ve(z),children:[t.jsx(Ea,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:z.last_ip??"-"}),t.jsx("small",{children:z.first_ip?`${o("device.firstIp")}: ${z.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ds(z.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ds(z.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:v(z,"desktop")})]},z.id)),!$&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),H>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:k<=1||$,onClick:()=>void E(k-1,S,g),children:[t.jsx(Aa,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:k,total:H})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:k>=H||$,onClick:()=>void E(k+1,S,g),children:[o("device.next"),t.jsx(Da,{size:14})]})]}):null]})]})}const Aw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function lu(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return lu(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function nx(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:lu(s.plan_id)}:{...Aw}}function Td(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Dw(s){const l=Number(s);if(!l)return"-";const o=new Date(l*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Ow(s){return Number(s)===1}function ax(s,l,o){if(!s.length)return o("webcon.allPlans");const d=new Map(l.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function ri(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function Uw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,k]=h.useState(null),[b,g]=h.useState(!0),[w,S]=h.useState(!1),[N,$]=h.useState(null),[I,Q]=h.useState(""),M=h.useCallback(async()=>{g(!0),Q("");try{const[E,F]=await Promise.all([b1(),hi()]);d(E),m(F)}catch(E){Q(E instanceof Error?E.message:l("webcon.toastLoadFailed"))}finally{g(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}M()},[M,s]);const Y=h.useMemo(()=>u.map(E=>({id:Number(E.id),name:E.name})),[u]);function q(E,F){k(ie=>ie&&{...ie,[E]:F})}function U(E,F){k(ie=>{if(!ie)return ie;const ve=F?Array.from(new Set([...ie.plan_ids,E])):ie.plan_ids.filter(_=>_!==E);return{...ie,plan_ids:ve}})}async function ne(E){var ie,ve;if(E.preventDefault(),!f)return;const F=Td(f.domain);S(!0),Q("");try{await g1({id:f.id,email:f.email.trim(),domain:F,title:f.title.trim(),description:f.description.trim()||null,logo:f.logo.trim()||null,background_url:f.background_url.trim()||null,custom_html:f.custom_html||null,plan_ids:f.plan_ids,plan_id:f.plan_ids}),k(null),(ie=window.showToast)==null||ie.call(window,l("webcon.toastSaveSuccess"),"success"),await M()}catch(_){const O=_ instanceof Error?_.message:l("webcon.toastSaveFailed");Q(O),(ve=window.showToast)==null||ve.call(window,O,"error")}finally{S(!1)}}async function P(E){var F,ie;$(E.id);try{await v1(E.id),(F=window.showToast)==null||F.call(window,l("webcon.toastToggleSuccess"),"success"),await M()}catch(ve){const _=ve instanceof Error?ve.message:l("webcon.toastToggleFailed");Q(_),(ie=window.showToast)==null||ie.call(window,_,"error")}finally{$(null)}}function te(E){var F;(F=window.showConfirm)==null||F.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ie,ve;$(E.id),Q("");try{await y1(E.id),(ie=window.showToast)==null||ie.call(window,l("webcon.toastDeleteSuccess"),"success"),await M()}catch(_){const O=_ instanceof Error?_.message:l("webcon.toastDeleteFailed");Q(O),(ve=window.showToast)==null||ve.call(window,O,"error")}finally{$(null)}}})}return t.jsxs(Vt,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:b,onClick:()=>void M(),children:[t.jsx(Dt,{size:16}),l(b?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>k(nx()),children:[t.jsx(Dn,{size:16}),l("webcon.add")]})]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,b&&o.length===0?t.jsx(_t,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:l("webcon.colStatus")}),t.jsx("th",{children:l("webcon.colStaffOwner")}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:l("webcon.colLanding")}),t.jsx("th",{children:l("webcon.colPlans")}),t.jsx("th",{children:l("webcon.colCreated")}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(E=>{var ie;const F=lu(E.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",E.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Ow(E.status)?"active":""}`,type:"button",disabled:N===E.id,onClick:()=>void P(E),"aria-label":l("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:E.email??"-"}),t.jsx("small",{children:Number(E.staff)===1?l("webcon.staffEnabled"):l("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:E.domain}),t.jsx("small",{children:l("webcon.adminPath",{path:`/${String(((ie=window.settings)==null?void 0:ie.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:E.title||"-"}),t.jsx("small",{children:E.description||l("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx($v,{size:13}),E.logo?l("webcon.logo"):l("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(ys,{size:13}),E.background_url?l("webcon.background"):l("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:ax(F,Y,l)}),t.jsx("small",{children:F.length?l("webcon.selectedCount",{count:F.length}):l("webcon.unrestricted")})]})}),t.jsx("td",{children:Dw(E.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>k(nx(E)),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:N===E.id,onClick:()=>te(E),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},E.id)}),!b&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>k(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:f.domain||l("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ne,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:f.email,onChange:E=>q("email",E.target.value),placeholder:l("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.domain,onChange:E=>q("domain",E.target.value),onBlur:E=>q("domain",Td(E.target.value)),placeholder:l("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:l("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.title,onChange:E=>q("title",E.target.value),placeholder:l("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.description")),t.jsx("input",{className:"config-input",value:f.description,onChange:E=>q("description",E.target.value),placeholder:l("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.logo,onChange:E=>q("logo",E.target.value),placeholder:l("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[ri(l("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.background_url,onChange:E=>q("background_url",E.target.value),placeholder:l("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[ri(l("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Y.map(E=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:f.plan_ids.includes(E.id),onChange:F=>U(E.id,F.target.checked)}),t.jsx("span",{children:E.name})]},E.id)),Y.length===0?t.jsx("span",{className:"webcon-help",children:l("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:l("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[ri(l("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:f.custom_html,onChange:E=>q("custom_html",E.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:f.logo?t.jsx("img",{src:f.logo,alt:""}):t.jsx(Pv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:f.title||l("webcon.previewTitle")}),t.jsx("span",{children:Td(f.domain)||l("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(Id,{size:12})," ",ax(f.plan_ids,Y,l)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:w,children:[t.jsx(On,{size:16}),l(w?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ix(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ed(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Rw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,k]=h.useState(!0),[b,g]=h.useState(!1),[w,S]=h.useState(""),[N,$]=h.useState(""),I=h.useCallback(async()=>{k(!0),S("");try{d(await l1())}catch(q){S(q instanceof Error?q.message:l("notice.loadFailed"))}finally{k(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);async function Q(q){var U,ne;if(q.preventDefault(),!!u){g(!0),S(""),$("");try{const P=u.tags?u.tags.split(",").map(te=>te.trim()).filter(Boolean):[];await s1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:P.length?P:null}),m(null),(U=window.showToast)==null||U.call(window,l("notice.saveSuccess"),"success"),await I()}catch(P){(ne=window.showToast)==null||ne.call(window,P instanceof Error?P.message:l("notice.saveFailed"),"error")}finally{g(!1)}}}async function M(q){var U;try{await r1(q),await I()}catch(ne){(U=window.showToast)==null||U.call(window,ne instanceof Error?ne.message:l("notice.toggleFailed"),"error")}}async function Y(q){var U;(U=window.showConfirm)==null||U.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var ne,P;try{await o1(q),(ne=window.showToast)==null||ne.call(window,l("notice.deleteSuccess"),"success"),await I()}catch(te){(P=window.showToast)==null||P.call(window,te instanceof Error?te.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[o.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:f,children:[t.jsx(Dt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(Ed()),children:[t.jsx(Dn,{size:16}),l("notice.addNotice")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,N?t.jsx("div",{className:"form-success",children:N}):null,f&&o.length===0?t.jsx(_t,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(q=>{var U;return t.jsxs("tr",{children:[t.jsx("td",{children:q.id}),t.jsx("td",{children:t.jsx("strong",{children:q.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void M(q.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((U=q.tags)==null?void 0:U.map((ne,P)=>t.jsx("span",{className:"tag",children:ne},P)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:ix(q.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>m(Ed(q)),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(q.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},q.id)}),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(q=>t.jsxs("div",{className:`notice-mobile-card ${q.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",q.id]})}),t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void M(q.id),"aria-label":q.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:q.title}),t.jsx("div",{className:"notice-tags",children:q.tags&&q.tags.length>0?q.tags.map((U,ne)=>t.jsx("span",{className:"tag-badge",children:U},ne)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",ix(q.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>m(Ed(q)),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Y(q.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},q.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Q,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:q=>m({...u,title:q.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:q=>m({...u,content:q.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:q=>m({...u,img_url:q.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:q=>m({...u,tags:q.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(On,{size:16}),l(b?"notice.saving":"common.save")]})]})]})]})}):null]})}function Md(s){return new Date(s*1e3).toLocaleString("vi-VN")}const lx=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Ad=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function Hw(){var _;const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,k]=h.useState(!1),[b,g]=h.useState(null),[w,S]=h.useState(""),[N,$]=h.useState(!0),[I,Q]=h.useState(!1),[M,Y]=h.useState(""),q=h.useRef(null),[U,ne]=h.useState([]),[P,te]=h.useState(null),E=h.useCallback(async()=>{$(!0),Y("");try{d(await c1())}catch(O){Y(O instanceof Error?O.message:"Load failed")}finally{$(!1)}},[]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}E(),hi().then(O=>{O&&ne(O)}).catch(()=>{})},[E,s]),h.useEffect(()=>{var O;(O=q.current)==null||O.scrollIntoView({behavior:"smooth"})},[u]);async function F(O){var ae;g(O),S(""),m(null),te(null),k(!0);try{const G=await kh(O);if(m(G),G&&G.user_id)try{const ce=await Ox(G.user_id);ce&&ce.data&&te(ce.data)}catch(ce){console.error("Failed to load user info:",ce)}}catch{(ae=window.showToast)==null||ae.call(window,"Failed to load message thread","error")}finally{k(!1)}}async function ie(O){var ae,G;if(O.preventDefault(),!(!b||!w.trim())){Q(!0),Y("");try{await d1(b,w),S(""),(ae=window.showToast)==null||ae.call(window,"Reply sent!","success");try{const ce=await kh(b);m(ce)}catch{}await E()}catch(ce){(G=window.showToast)==null||G.call(window,ce instanceof Error?ce.message:"Reply failed","error")}finally{Q(!1)}}}async function ve(O){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:"Close this ticket?",onConfirm:async()=>{var G,ce;Y("");try{await u1(O),(G=window.showToast)==null||G.call(window,"Ticket closed!","success"),b===O&&(g(null),m(null)),await E()}catch(v){Y(v instanceof Error?v.message:"Close failed"),(ce=window.showToast)==null||ce.call(window,v instanceof Error?v.message:"Close failed","error")}}})}return t.jsxs(Vt,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:N,children:[t.jsx(Dt,{size:16}),l("common.refresh")]})})]}),M?t.jsx("div",{className:"form-error",children:M}):null,N&&o.length===0?t.jsx(_t,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(O=>{const ae=lx(O.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("strong",{children:O.subject})}),t.jsxs("td",{children:["#",O.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Ad(O.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${ae.cls}`,children:ae.label})}),t.jsx("td",{children:O.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:Md(O.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:O.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void F(O.id),children:[t.jsx(us,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ve(O.id),children:[t.jsx(Hd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void F(O.id),children:[t.jsx(us,{size:14}),l("ticket.viewHistory")]})})})]},O.id)}),!N&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(O=>{const ae=lx(O.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:O.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Ad(O.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",O.id]})]}),t.jsx("span",{className:`status-pill ${ae.cls}`,children:ae.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",O.user_id]})]}),t.jsx("span",{children:O.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:Md(O.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:O.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void F(O.id),children:[t.jsx(us,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ve(O.id),children:[t.jsx(Hd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void F(O.id),children:[t.jsx(us,{size:14}),l("ticket.viewHistory")]})})]},O.id)}),!N&&o.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),b!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${l("ticket.ticketDetail")}: ${u.subject}`:`${l("ticket.ticketDetail")} #${b}`}),t.jsxs("p",{children:[l("ticket.user"),": #",u==null?void 0:u.user_id," | ",l("ticket.level"),": ",u!=null?Ad(u.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{g(null),m(null)},children:t.jsx(lt,{size:18})})]}),P&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:P.email,children:P.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((_=U.find(O=>O.id===P.plan_id))==null?void 0:_.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[An(P.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:P.expired_at?new Date(P.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),f?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(_t,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(O=>{const ae=O.is_me;return t.jsxs("div",{className:`chat-message ${ae?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:O.message}),t.jsxs("div",{className:"chat-meta",children:[ae?l("ticket.staff"):`${l("ticket.user")} #${O.user_id}`," • ",Md(O.created_at)]})]},O.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:q})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ie,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:w,onChange:O=>S(O.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I||!w.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(Nx,{size:14}),I?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        @media (max-width: 480px) {
          .user-details-bar {
            grid-template-columns: 1fr;
            gap: 8px;
            padding: 10px 14px;
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
      `}})]})}function sx(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const ox={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function rx(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Lw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,k]=h.useState(!0),[b,g]=h.useState(!1),[w,S]=h.useState(""),[N,$]=h.useState(""),I=h.useCallback(async()=>{k(!0),S("");try{d(await p1())}catch(U){S(U instanceof Error?U.message:l("knowledge.loadFailed"))}finally{k(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);async function Q(U){var ne;try{const P=await m1(U.id);m(rx(P))}catch(P){(ne=window.showToast)==null||ne.call(window,P instanceof Error?P.message:l("knowledge.detailFailed"),"error")}}async function M(U){var ne,P;if(U.preventDefault(),!!u){g(!0),S(""),$("");try{await f1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),m(null),(ne=window.showToast)==null||ne.call(window,l("knowledge.saveSuccess"),"success"),await I()}catch(te){(P=window.showToast)==null||P.call(window,te instanceof Error?te.message:l("knowledge.saveFailed"),"error")}finally{g(!1)}}}async function Y(U){var ne;try{await x1(U),await I()}catch(P){(ne=window.showToast)==null||ne.call(window,P instanceof Error?P.message:l("knowledge.toggleFailed"),"error")}}async function q(U){var ne;(ne=window.showConfirm)==null||ne.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var P,te;try{await h1(U),(P=window.showToast)==null||P.call(window,l("knowledge.deleteSuccess"),"success"),await I()}catch(E){(te=window.showToast)==null||te.call(window,E instanceof Error?E.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Vt,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:f,children:[t.jsx(Dt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(rx()),children:[t.jsx(Dn,{size:16}),l("knowledge.addArticle")]})]})]}),w?t.jsx("div",{className:"form-error",children:w}):null,N?t.jsx("div",{className:"form-success",children:N}):null,f&&o.length===0?t.jsx(_t,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:U.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:U.language&&ox[U.language]||U.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void Y(U.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:U.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:sx(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(U),children:[t.jsx(Jt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void q(U.id),children:[t.jsx(nn,{size:14}),l("common.delete")]})]})})]},U.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(U=>t.jsxs("div",{className:`knowledge-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",U.id]}),U.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",U.sort]})]}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void Y(U.id),"aria-label":U.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsxs("div",{className:"card-meta",children:[U.category&&t.jsx("span",{className:"category-badge",children:U.category}),U.language&&t.jsx("span",{className:"lang-badge",children:ox[U.language]||U.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",sx(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Q(U),children:[t.jsx(Jt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void q(U.id),children:[t.jsx(nn,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},U.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:M,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:U=>m({...u,category:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:U=>m({...u,title:U.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:U=>m({...u,body:U.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:U=>m({...u,language:U.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:U=>m({...u,sort:U.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(On,{size:16}),l(b?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function qw(){const s=qt(),{t:l}=Fe(),[o,d]=h.useState(null),[u,m]=h.useState(null),[f,k]=h.useState(null),[b,g]=h.useState(""),[w,S]=h.useState(!0),[N,$]=h.useState(""),I=h.useCallback(async()=>{S(!0),$("");try{const[M,Y,q,U]=await Promise.all([j1().catch(()=>({data:{}})),N1().catch(()=>({data:{}})),S1().catch(()=>({data:[]})),k1().catch(()=>({data:""}))]);d(M.data),m(Y.data),k(q.data),g(typeof U.data=="string"?U.data:"")}catch(M){$(M instanceof Error?M.message:l("queue.toastLoadFailed"))}finally{S(!1)}},[l]);h.useEffect(()=>{if(!Bt()){s.replace("/login");return}I()},[I,s]);function Q(M,Y,q){return M?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[q," ",Y]}),t.jsx("div",{className:"queue-grid",children:Object.entries(M).map(([U,ne])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:U}),t.jsx("strong",{children:typeof ne=="object"?JSON.stringify(ne):String(ne??"—")})]},U))})]}):null}return t.jsxs(Vt,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:w,children:[t.jsx(Dt,{size:16}),l("common.refresh")]})})]}),N?t.jsx("div",{className:"form-error",children:N}):null,w?t.jsx(_t,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Q(o,l("queue.systemStatus"),t.jsx(Xo,{size:18})),Q(u,l("queue.queueStats"),t.jsx(Id,{size:18})),f&&f.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(zv,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(f,null,2)})]}):null,b?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Rv,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:b})]}):null]})]})}const Bw=h.createContext(null);function Gw({children:s}){const[l,o]=h.useState([]),[d,u]=h.useState(null),m=h.useCallback((g,w="success")=>{const S=Math.random().toString(36).substring(2,9);o(N=>[...N,{id:S,message:g,type:w}]),setTimeout(()=>{o(N=>N.filter($=>$.id!==S))},5e3)},[]),f=h.useCallback(g=>{u(g)},[]);h.useEffect(()=>{typeof window<"u"&&(window.showToast=m,window.showConfirm=f)},[m,f]);const k=async()=>{if(d){try{await d.onConfirm()}catch(g){console.error("Error in onConfirm:",g)}u(null)}},b=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Bw.Provider,{value:{showToast:m,showConfirm:f},children:[s,t.jsx("div",{className:"toast-container",children:l.map(g=>{let w=Yv;return g.type==="success"&&(w=wx),g.type==="error"&&(w=Av),g.type==="warning"&&(w=qd),t.jsxs("div",{className:`toast-card toast-${g.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(w,{size:18})}),t.jsx("div",{className:"toast-message",children:g.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(S=>S.filter(N=>N.id!==g.id)),children:t.jsx(lt,{size:14})})]},g.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:b,children:t.jsxs("div",{className:"confirm-card",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(qd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:b,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:k,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function $w({children:s}){return t.jsx(R1,{children:t.jsx(Gw,{children:s})})}function Yw(){return t.jsx($w,{children:t.jsxs(uv,{children:[t.jsx(Tt,{path:"/login",element:t.jsx(H1,{})}),t.jsx(Tt,{path:"/dashboard",element:t.jsx(K1,{})}),t.jsx(Tt,{path:"/config/system",element:t.jsx(aj,{})}),t.jsx(Tt,{path:"/config/payment",element:t.jsx(sj,{})}),t.jsx(Tt,{path:"/config/theme",element:t.jsx(cj,{})}),t.jsx(Tt,{path:"/server/manage",element:t.jsx(Fj,{})}),t.jsx(Tt,{path:"/server/group",element:t.jsx(Jj,{})}),t.jsx(Tt,{path:"/server/route",element:t.jsx(Wj,{})}),t.jsx(Tt,{path:"/plan",element:t.jsx(nw,{})}),t.jsx(Tt,{path:"/order",element:t.jsx(lw,{})}),t.jsx(Tt,{path:"/coupon",element:t.jsx(sw,{})}),t.jsx(Tt,{path:"/giftcard",element:t.jsx(rw,{})}),t.jsx(Tt,{path:"/user",element:t.jsx(hw,{})}),t.jsx(Tt,{path:"/subscription",element:t.jsx(Sw,{})}),t.jsx(Tt,{path:"/device",element:t.jsx(Mw,{})}),t.jsx(Tt,{path:"/webcon",element:t.jsx(Uw,{})}),t.jsx(Tt,{path:"/notice",element:t.jsx(Rw,{})}),t.jsx(Tt,{path:"/ticket",element:t.jsx(Hw,{})}),t.jsx(Tt,{path:"/knowledge",element:t.jsx(Lw,{})}),t.jsx(Tt,{path:"/queue",element:t.jsx(qw,{})}),t.jsx(Tt,{path:"/",element:t.jsx(ph,{to:"/dashboard",replace:!0})}),t.jsx(Tt,{path:"*",element:t.jsx(ph,{to:"/dashboard",replace:!0})})]})})}yy.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(gv,{children:t.jsx(Yw,{})})}));
