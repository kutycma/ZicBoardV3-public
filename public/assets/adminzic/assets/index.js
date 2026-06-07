function ny(s,l){for(var o=0;o<l.length;o++){const d=l[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const m=Object.getOwnPropertyDescriptor(d,u);m&&Object.defineProperty(s,u,m.get?m:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const m of u)if(m.type==="childList")for(const f of m.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const m={};return u.integrity&&(m.integrity=u.integrity),u.referrerPolicy&&(m.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?m.credentials="include":u.crossOrigin==="anonymous"?m.credentials="omit":m.credentials="same-origin",m}function d(u){if(u.ep)return;u.ep=!0;const m=o(u);fetch(u.href,m)}})();function ay(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var sd={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function iy(){if(Zf)return ls;Zf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(d,u,m){var f=null;if(m!==void 0&&(f=""+m),u.key!==void 0&&(f=""+u.key),"key"in u){m={};for(var C in u)C!=="key"&&(m[C]=u[C])}else m=u;return u=m.ref,{$$typeof:s,type:d,key:f,ref:u!==void 0?u:null,props:m}}return ls.Fragment=l,ls.jsx=o,ls.jsxs=o,ls}var Kf;function ly(){return Kf||(Kf=1,sd.exports=iy()),sd.exports}var t=ly(),od={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ff;function sy(){if(Ff)return Le;Ff=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),m=Symbol.for("react.consumer"),f=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),b=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),S=Symbol.iterator;function B(N){return N===null||typeof N!="object"?null:(N=S&&N[S]||N["@@iterator"],typeof N=="function"?N:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,D={};function Q(N,M,ee){this.props=N,this.context=M,this.refs=D,this.updater=ee||I}Q.prototype.isReactComponent={},Q.prototype.setState=function(N,M){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,M,"setState")},Q.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=Q.prototype;function H(N,M,ee){this.props=N,this.context=M,this.refs=D,this.updater=ee||I}var ae=H.prototype=new U;ae.constructor=H,Y(ae,Q.prototype),ae.isPureReactComponent=!0;var P=Array.isArray;function de(){}var A={H:null,A:null,T:null,S:null},G=Object.prototype.hasOwnProperty;function ne(N,M,ee){var me=ee.ref;return{$$typeof:s,type:N,key:M,ref:me!==void 0?me:null,props:ee}}function be(N,M){return ne(N.type,M,N.props)}function _(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function R(N){var M={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ee){return M[ee]})}var le=/\/+/g;function $(N,M){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):M.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(de,de):(N.status="pending",N.then(function(M){N.status==="pending"&&(N.status="fulfilled",N.value=M)},function(M){N.status==="pending"&&(N.status="rejected",N.reason=M)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function z(N,M,ee,me,Se){var Me=typeof N;(Me==="undefined"||Me==="boolean")&&(N=null);var Ue=!1;if(N===null)Ue=!0;else switch(Me){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(N.$$typeof){case s:case l:Ue=!0;break;case j:return Ue=N._init,z(Ue(N._payload),M,ee,me,Se)}}if(Ue)return Se=Se(N),Ue=me===""?"."+$(N,0):me,P(Se)?(ee="",Ue!=null&&(ee=Ue.replace(le,"$&/")+"/"),z(Se,M,ee,"",function(et){return et})):Se!=null&&(_(Se)&&(Se=be(Se,ee+(Se.key==null||N&&N.key===Se.key?"":(""+Se.key).replace(le,"$&/")+"/")+Ue)),M.push(Se)),1;Ue=0;var Ve=me===""?".":me+":";if(P(N))for(var Re=0;Re<N.length;Re++)me=N[Re],Me=Ve+$(me,Re),Ue+=z(me,M,ee,Me,Se);else if(Re=B(N),typeof Re=="function")for(N=Re.call(N),Re=0;!(me=N.next()).done;)me=me.value,Me=Ve+$(me,Re++),Ue+=z(me,M,ee,Me,Se);else if(Me==="object"){if(typeof N.then=="function")return z(ce(N),M,ee,me,Se);throw M=String(N),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function V(N,M,ee){if(N==null)return N;var me=[],Se=0;return z(N,me,"","",function(Me){return M.call(ee,Me,Se++)}),me}function T(N){if(N._status===-1){var M=N._result;M=M(),M.then(function(ee){(N._status===0||N._status===-1)&&(N._status=1,N._result=ee)},function(ee){(N._status===0||N._status===-1)&&(N._status=2,N._result=ee)}),N._status===-1&&(N._status=0,N._result=M)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},k={map:V,forEach:function(N,M,ee){V(N,function(){M.apply(this,arguments)},ee)},count:function(N){var M=0;return V(N,function(){M++}),M},toArray:function(N){return V(N,function(M){return M})||[]},only:function(N){if(!_(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Le.Activity=w,Le.Children=k,Le.Component=Q,Le.Fragment=o,Le.Profiler=u,Le.PureComponent=H,Le.StrictMode=d,Le.Suspense=g,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,Le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return A.H.useMemoCache(N)}},Le.cache=function(N){return function(){return N.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(N,M,ee){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var me=Y({},N.props),Se=N.key;if(M!=null)for(Me in M.key!==void 0&&(Se=""+M.key),M)!G.call(M,Me)||Me==="key"||Me==="__self"||Me==="__source"||Me==="ref"&&M.ref===void 0||(me[Me]=M[Me]);var Me=arguments.length-2;if(Me===1)me.children=ee;else if(1<Me){for(var Ue=Array(Me),Ve=0;Ve<Me;Ve++)Ue[Ve]=arguments[Ve+2];me.children=Ue}return ne(N.type,Se,me)},Le.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:m,_context:N},N},Le.createElement=function(N,M,ee){var me,Se={},Me=null;if(M!=null)for(me in M.key!==void 0&&(Me=""+M.key),M)G.call(M,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Se[me]=M[me]);var Ue=arguments.length-2;if(Ue===1)Se.children=ee;else if(1<Ue){for(var Ve=Array(Ue),Re=0;Re<Ue;Re++)Ve[Re]=arguments[Re+2];Se.children=Ve}if(N&&N.defaultProps)for(me in Ue=N.defaultProps,Ue)Se[me]===void 0&&(Se[me]=Ue[me]);return ne(N,Me,Se)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(N){return{$$typeof:C,render:N}},Le.isValidElement=_,Le.lazy=function(N){return{$$typeof:j,_payload:{_status:-1,_result:N},_init:T}},Le.memo=function(N,M){return{$$typeof:b,type:N,compare:M===void 0?null:M}},Le.startTransition=function(N){var M=A.T,ee={};A.T=ee;try{var me=N(),Se=A.S;Se!==null&&Se(ee,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(de,ue)}catch(Me){ue(Me)}finally{M!==null&&ee.types!==null&&(M.types=ee.types),A.T=M}},Le.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},Le.use=function(N){return A.H.use(N)},Le.useActionState=function(N,M,ee){return A.H.useActionState(N,M,ee)},Le.useCallback=function(N,M){return A.H.useCallback(N,M)},Le.useContext=function(N){return A.H.useContext(N)},Le.useDebugValue=function(){},Le.useDeferredValue=function(N,M){return A.H.useDeferredValue(N,M)},Le.useEffect=function(N,M){return A.H.useEffect(N,M)},Le.useEffectEvent=function(N){return A.H.useEffectEvent(N)},Le.useId=function(){return A.H.useId()},Le.useImperativeHandle=function(N,M,ee){return A.H.useImperativeHandle(N,M,ee)},Le.useInsertionEffect=function(N,M){return A.H.useInsertionEffect(N,M)},Le.useLayoutEffect=function(N,M){return A.H.useLayoutEffect(N,M)},Le.useMemo=function(N,M){return A.H.useMemo(N,M)},Le.useOptimistic=function(N,M){return A.H.useOptimistic(N,M)},Le.useReducer=function(N,M,ee){return A.H.useReducer(N,M,ee)},Le.useRef=function(N){return A.H.useRef(N)},Le.useState=function(N){return A.H.useState(N)},Le.useSyncExternalStore=function(N,M,ee){return A.H.useSyncExternalStore(N,M,ee)},Le.useTransition=function(){return A.H.useTransition()},Le.version="19.2.6",Le}var Vf;function Yd(){return Vf||(Vf=1,od.exports=sy()),od.exports}var h=Yd();const oy=ay(h),ry=ny({__proto__:null,default:oy},[h]);var rd={exports:{}},ss={},cd={exports:{}},dd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function cy(){return Jf||(Jf=1,(function(s){function l(z,V){var T=z.length;z.push(V);e:for(;0<T;){var ue=T-1>>>1,k=z[ue];if(0<u(k,V))z[ue]=V,z[T]=k,T=ue;else break e}}function o(z){return z.length===0?null:z[0]}function d(z){if(z.length===0)return null;var V=z[0],T=z.pop();if(T!==V){z[0]=T;e:for(var ue=0,k=z.length,N=k>>>1;ue<N;){var M=2*(ue+1)-1,ee=z[M],me=M+1,Se=z[me];if(0>u(ee,T))me<k&&0>u(Se,ee)?(z[ue]=Se,z[me]=T,ue=me):(z[ue]=ee,z[M]=T,ue=M);else if(me<k&&0>u(Se,T))z[ue]=Se,z[me]=T,ue=me;else break e}}return V}function u(z,V){var T=z.sortIndex-V.sortIndex;return T!==0?T:z.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var m=performance;s.unstable_now=function(){return m.now()}}else{var f=Date,C=f.now();s.unstable_now=function(){return f.now()-C}}var g=[],b=[],j=1,w=null,S=3,B=!1,I=!1,Y=!1,D=!1,Q=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function ae(z){for(var V=o(b);V!==null;){if(V.callback===null)d(b);else if(V.startTime<=z)d(b),V.sortIndex=V.expirationTime,l(g,V);else break;V=o(b)}}function P(z){if(Y=!1,ae(z),!I)if(o(g)!==null)I=!0,de||(de=!0,R());else{var V=o(b);V!==null&&ce(P,V.startTime-z)}}var de=!1,A=-1,G=5,ne=-1;function be(){return D?!0:!(s.unstable_now()-ne<G)}function _(){if(D=!1,de){var z=s.unstable_now();ne=z;var V=!0;try{e:{I=!1,Y&&(Y=!1,U(A),A=-1),B=!0;var T=S;try{t:{for(ae(z),w=o(g);w!==null&&!(w.expirationTime>z&&be());){var ue=w.callback;if(typeof ue=="function"){w.callback=null,S=w.priorityLevel;var k=ue(w.expirationTime<=z);if(z=s.unstable_now(),typeof k=="function"){w.callback=k,ae(z),V=!0;break t}w===o(g)&&d(g),ae(z)}else d(g);w=o(g)}if(w!==null)V=!0;else{var N=o(b);N!==null&&ce(P,N.startTime-z),V=!1}}break e}finally{w=null,S=T,B=!1}V=void 0}}finally{V?R():de=!1}}}var R;if(typeof H=="function")R=function(){H(_)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,$=le.port2;le.port1.onmessage=_,R=function(){$.postMessage(null)}}else R=function(){Q(_,0)};function ce(z,V){A=Q(function(){z(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(z){z.callback=null},s.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<z?Math.floor(1e3/z):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(z){switch(S){case 1:case 2:case 3:var V=3;break;default:V=S}var T=S;S=V;try{return z()}finally{S=T}},s.unstable_requestPaint=function(){D=!0},s.unstable_runWithPriority=function(z,V){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var T=S;S=z;try{return V()}finally{S=T}},s.unstable_scheduleCallback=function(z,V,T){var ue=s.unstable_now();switch(typeof T=="object"&&T!==null?(T=T.delay,T=typeof T=="number"&&0<T?ue+T:ue):T=ue,z){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=T+k,z={id:j++,callback:V,priorityLevel:z,startTime:T,expirationTime:k,sortIndex:-1},T>ue?(z.sortIndex=T,l(b,z),o(g)===null&&z===o(b)&&(Y?(U(A),A=-1):Y=!0,ce(P,T-ue))):(z.sortIndex=k,l(g,z),I||B||(I=!0,de||(de=!0,R()))),z},s.unstable_shouldYield=be,s.unstable_wrapCallback=function(z){var V=S;return function(){var T=S;S=V;try{return z.apply(this,arguments)}finally{S=T}}}})(dd)),dd}var Pf;function dy(){return Pf||(Pf=1,cd.exports=cy()),cd.exports}var ud={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function uy(){if(Wf)return rn;Wf=1;var s=Yd();function l(g){var b="https://react.dev/errors/"+g;if(1<arguments.length){b+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)b+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+g+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function m(g,b,j){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:w==null?null:""+w,children:g,containerInfo:b,implementation:j}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function C(g,b){if(g==="font")return"";if(typeof b=="string")return b==="use-credentials"?b:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,rn.createPortal=function(g,b){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!b||b.nodeType!==1&&b.nodeType!==9&&b.nodeType!==11)throw Error(l(299));return m(g,b,null,j)},rn.flushSync=function(g){var b=f.T,j=d.p;try{if(f.T=null,d.p=2,g)return g()}finally{f.T=b,d.p=j,d.d.f()}},rn.preconnect=function(g,b){typeof g=="string"&&(b?(b=b.crossOrigin,b=typeof b=="string"?b==="use-credentials"?b:"":void 0):b=null,d.d.C(g,b))},rn.prefetchDNS=function(g){typeof g=="string"&&d.d.D(g)},rn.preinit=function(g,b){if(typeof g=="string"&&b&&typeof b.as=="string"){var j=b.as,w=C(j,b.crossOrigin),S=typeof b.integrity=="string"?b.integrity:void 0,B=typeof b.fetchPriority=="string"?b.fetchPriority:void 0;j==="style"?d.d.S(g,typeof b.precedence=="string"?b.precedence:void 0,{crossOrigin:w,integrity:S,fetchPriority:B}):j==="script"&&d.d.X(g,{crossOrigin:w,integrity:S,fetchPriority:B,nonce:typeof b.nonce=="string"?b.nonce:void 0})}},rn.preinitModule=function(g,b){if(typeof g=="string")if(typeof b=="object"&&b!==null){if(b.as==null||b.as==="script"){var j=C(b.as,b.crossOrigin);d.d.M(g,{crossOrigin:j,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0})}}else b==null&&d.d.M(g)},rn.preload=function(g,b){if(typeof g=="string"&&typeof b=="object"&&b!==null&&typeof b.as=="string"){var j=b.as,w=C(j,b.crossOrigin);d.d.L(g,j,{crossOrigin:w,integrity:typeof b.integrity=="string"?b.integrity:void 0,nonce:typeof b.nonce=="string"?b.nonce:void 0,type:typeof b.type=="string"?b.type:void 0,fetchPriority:typeof b.fetchPriority=="string"?b.fetchPriority:void 0,referrerPolicy:typeof b.referrerPolicy=="string"?b.referrerPolicy:void 0,imageSrcSet:typeof b.imageSrcSet=="string"?b.imageSrcSet:void 0,imageSizes:typeof b.imageSizes=="string"?b.imageSizes:void 0,media:typeof b.media=="string"?b.media:void 0})}},rn.preloadModule=function(g,b){if(typeof g=="string")if(b){var j=C(b.as,b.crossOrigin);d.d.m(g,{as:typeof b.as=="string"&&b.as!=="script"?b.as:void 0,crossOrigin:j,integrity:typeof b.integrity=="string"?b.integrity:void 0})}else d.d.m(g)},rn.requestFormReset=function(g){d.d.r(g)},rn.unstable_batchedUpdates=function(g,b){return g(b)},rn.useFormState=function(g,b,j){return f.H.useFormState(g,b,j)},rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},rn.version="19.2.6",rn}var If;function sx(){if(If)return ud.exports;If=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),ud.exports=uy(),ud.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function py(){if(eh)return ss;eh=1;var s=dy(),l=Yd(),o=sx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function m(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function C(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(m(e)!==e)throw Error(d(188))}function b(e){var n=e.alternate;if(!n){if(n=m(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,i=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return g(r),e;if(c===i)return g(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==i.return)a=r,i=c;else{for(var p=!1,x=r.child;x;){if(x===a){p=!0,a=r,i=c;break}if(x===i){p=!0,i=r,a=c;break}x=x.sibling}if(!p){for(x=c.child;x;){if(x===a){p=!0,a=c,i=r;break}if(x===i){p=!0,i=c,a=r;break}x=x.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=j(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,S=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),I=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case D:return"StrictMode";case P:return"Suspense";case de:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case I:return"Portal";case H:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case G:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}var ce=Array.isArray,z=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,T={pending:!1,data:null,method:null,action:null},ue=[],k=-1;function N(e){return{current:e}}function M(e){0>k||(e.current=ue[k],ue[k]=null,k--)}function ee(e,n){k++,ue[k]=e.current,e.current=n}var me=N(null),Se=N(null),Me=N(null),Ue=N(null);function Ve(e,n){switch(ee(Me,n),ee(Se,e),ee(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?hf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=hf(n),e=xf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(me),ee(me,e)}function Re(){M(me),M(Se),M(Me)}function et(e){e.memoizedState!==null&&ee(Ue,e);var n=me.current,a=xf(n,e.type);n!==a&&(ee(Se,e),ee(me,a))}function ft(e){Se.current===e&&(M(me),M(Se)),Ue.current===e&&(M(Ue),ts._currentValue=T)}var Qt,Vt;function xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Vt}var Xt=!1;function ot(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(J){var K=J}Reflect.construct(e,[],re)}else{try{re.call()}catch(J){K=J}e.call(re.prototype)}}else{try{throw Error()}catch(J){K=J}(re=e())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],x=c[1];if(p&&x){var E=p.split(`
`),Z=x.split(`
`);for(r=i=0;i<E.length&&!E[i].includes("DetermineComponentFrameRoot");)i++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(i===E.length||r===Z.length)for(i=E.length-1,r=Z.length-1;1<=i&&0<=r&&E[i]!==Z[r];)r--;for(;1<=i&&0<=r;i--,r--)if(E[i]!==Z[r]){if(i!==1||r!==1)do if(i--,r--,0>r||E[i]!==Z[r]){var te=`
`+E[i].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),te}while(1<=i&&0<=r);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return xt("Activity");default:return""}}function bt(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Nt=Object.prototype.hasOwnProperty,je=s.unstable_scheduleCallback,Mt=s.unstable_cancelCallback,Ae=s.unstable_shouldYield,fn=s.unstable_requestPaint,rt=s.unstable_now,on=s.unstable_getCurrentPriorityLevel,An=s.unstable_ImmediatePriority,hn=s.unstable_UserBlockingPriority,F=s.unstable_NormalPriority,ze=s.unstable_LowPriority,we=s.unstable_IdlePriority,ye=s.log,Qe=s.unstable_setDisableYieldValue,He=null,qe=null;function Xe(e){if(typeof ye=="function"&&Qe(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(He,e)}catch{}}var nt=Math.clz32?Math.clz32:In,dn=Math.log,Ct=Math.LN2;function In(e){return e>>>=0,e===0?32:31-(dn(e)/Ct|0)|0}var Lt=256,un=262144,Zn=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?r=pn(i):(p&=x,p!==0?r=pn(p):a||(a=x&~e,a!==0&&(r=pn(a))))):(x=i&~c,x!==0?r=pn(x):p!==0?r=pn(p):a||(a=i&~e,a!==0&&(r=pn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function se(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function W(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ce(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function Be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function We(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function y(e,n,a,i,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var x=e.entanglements,E=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var te=31-nt(a),re=1<<te;x[te]=0,E[te]=-1;var K=Z[te];if(K!==null)for(Z[te]=null,te=0;te<K.length;te++){var J=K[te];J!==null&&(J.lane&=-536870913)}a&=~re}i!==0&&oe(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function oe(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-nt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function pe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-nt(a),r=1<<i;r&n|e[i]&n&&(e[i]|=n),a&=~r}}function _e(e,n){var a=n&-n;return a=(a&42)!==0?1:gt(a),(a&(e.suspendedLanes|n))!==0?0:a}function gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function On(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oa(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:qf(e.type))}function yt(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Kn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Kn,St="__reactProps$"+Kn,Aa="__reactContainer$"+Kn,v="__reactEvents$"+Kn,fe="__reactListeners$"+Kn,he="__reactHandles$"+Kn,Ee="__reactResources$"+Kn,tt="__reactMarker$"+Kn;function xn(e){delete e[Dt],delete e[St],delete e[v],delete e[fe],delete e[he]}function qt(e){var n=e[Dt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Aa]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=_f(e);e!==null;){if(a=e[Dt])return a;e=_f(e)}return n}e=a,a=e.parentNode}return null}function ea(e){if(e=e[Dt]||e[Aa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ra(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Oa(e){var n=e[Ee];return n||(n=e[Ee]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pt(e){e[tt]=!0}var nu=new Set,au={};function fi(e,n){Oi(e,n),Oi(e+"Capture",n)}function Oi(e,n){for(au[e]=n,e=0;e<n.length;e++)nu.add(n[e])}var Kx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),iu={},lu={};function Fx(e){return Nt.call(lu,e)?!0:Nt.call(iu,e)?!1:Kx.test(e)?lu[e]=!0:(iu[e]=!0,!1)}function ys(e,n,a){if(Fx(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function vs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ca(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function su(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Vx(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Io(e){if(!e._valueTracker){var n=su(e)?"checked":"value";e._valueTracker=Vx(e,n,""+e[n])}}function ou(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=su(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function js(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Jx=/[\n"\\]/g;function Rn(e){return e.replace(Jx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function er(e,n,a,i,r,c,p,x){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?tr(e,p,Un(n)):a!=null?tr(e,p,Un(a)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+Un(x):e.removeAttribute("name")}function ru(e,n,a,i,r,c,p,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Io(e);return}a=a!=null?""+Un(a):"",n=n!=null?""+Un(n):a,x||n===e.value||(e.value=n),e.defaultValue=n}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Io(e)}function tr(e,n,a){n==="number"&&js(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ui(e,n,a,i){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Un(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function cu(e,n,a){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Un(a):""}function du(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(d(92));if(ce(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Un(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Io(e)}function Ri(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Px=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||Px.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function pu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in n)i=n[r],n.hasOwnProperty(r)&&a[r]!==i&&uu(e,r,i)}else for(var c in n)n.hasOwnProperty(c)&&uu(e,c,n[c])}function nr(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Ix=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ws(e){return Ix.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var ar=null;function ir(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,Li=null;function mu(e){var n=ea(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(er(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var r=i[St]||null;if(!r)throw Error(d(90));er(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&ou(i)}break e;case"textarea":cu(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ui(e,!!a.multiple,n,!1)}}}var lr=!1;function fu(e,n,a){if(lr)return e(n,a);lr=!0;try{var i=e(n);return i}finally{if(lr=!1,(Hi!==null||Li!==null)&&(co(),Hi&&(n=Hi,e=Li,Li=Hi=null,mu(n),e)))for(n=0;n<e.length;n++)mu(e[n])}}function gl(e,n){var a=e.stateNode;if(a===null)return null;var i=a[St]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sr=!1;if(ua)try{var yl={};Object.defineProperty(yl,"passive",{get:function(){sr=!0}}),window.addEventListener("test",yl,yl),window.removeEventListener("test",yl,yl)}catch{sr=!1}var Ua=null,or=null,_s=null;function hu(){if(_s)return _s;var e,n=or,a=n.length,i,r="value"in Ua?Ua.value:Ua.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(i=1;i<=p&&n[a-i]===r[c-i];i++);return _s=r.slice(e,1<i?1-i:void 0)}function Ns(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ss(){return!0}function xu(){return!1}function bn(e){function n(a,i,r,c,p){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(a=e[x],this[x]=a?a(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ss:xu,this.isPropagationStopped=xu,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ss)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ss)},persist:function(){},isPersistent:Ss}),n}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ks=bn(hi),vl=w({},hi,{view:0,detail:0}),eb=bn(vl),rr,cr,jl,Cs=w({},vl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ur,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jl&&(jl&&e.type==="mousemove"?(rr=e.screenX-jl.screenX,cr=e.screenY-jl.screenY):cr=rr=0,jl=e),rr)},movementY:function(e){return"movementY"in e?e.movementY:cr}}),bu=bn(Cs),tb=w({},Cs,{dataTransfer:0}),nb=bn(tb),ab=w({},vl,{relatedTarget:0}),dr=bn(ab),ib=w({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),lb=bn(ib),sb=w({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ob=bn(sb),rb=w({},hi,{data:0}),gu=bn(rb),cb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},db={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ub={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ub[e])?!!n[e]:!1}function ur(){return pb}var mb=w({},vl,{key:function(e){if(e.key){var n=cb[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Ns(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?db[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ur,charCode:function(e){return e.type==="keypress"?Ns(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ns(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fb=bn(mb),hb=w({},Cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yu=bn(hb),xb=w({},vl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ur}),bb=bn(xb),gb=w({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),yb=bn(gb),vb=w({},Cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),jb=bn(vb),wb=w({},hi,{newState:0,oldState:0}),_b=bn(wb),Nb=[9,13,27,32],pr=ua&&"CompositionEvent"in window,wl=null;ua&&"documentMode"in document&&(wl=document.documentMode);var Sb=ua&&"TextEvent"in window&&!wl,vu=ua&&(!pr||wl&&8<wl&&11>=wl),ju=" ",wu=!1;function _u(e,n){switch(e){case"keyup":return Nb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function kb(e,n){switch(e){case"compositionend":return Nu(n);case"keypress":return n.which!==32?null:(wu=!0,ju);case"textInput":return e=n.data,e===ju&&wu?null:e;default:return null}}function Cb(e,n){if(qi)return e==="compositionend"||!pr&&_u(e,n)?(e=hu(),_s=or=Ua=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vu&&n.locale!=="ko"?null:n.data;default:return null}}var zb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Su(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!zb[e.type]:n==="textarea"}function ku(e,n,a,i){Hi?Li?Li.push(i):Li=[i]:Hi=i,n=bo(n,"onChange"),0<n.length&&(a=new ks("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var _l=null,Nl=null;function Tb(e){cf(e,0)}function zs(e){var n=ra(e);if(ou(n))return e}function Cu(e,n){if(e==="change")return n}var zu=!1;if(ua){var mr;if(ua){var fr="oninput"in document;if(!fr){var Tu=document.createElement("div");Tu.setAttribute("oninput","return;"),fr=typeof Tu.oninput=="function"}mr=fr}else mr=!1;zu=mr&&(!document.documentMode||9<document.documentMode)}function Eu(){_l&&(_l.detachEvent("onpropertychange",Mu),Nl=_l=null)}function Mu(e){if(e.propertyName==="value"&&zs(Nl)){var n=[];ku(n,Nl,e,ir(e)),fu(Tb,n)}}function Eb(e,n,a){e==="focusin"?(Eu(),_l=n,Nl=a,_l.attachEvent("onpropertychange",Mu)):e==="focusout"&&Eu()}function Mb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zs(Nl)}function Db(e,n){if(e==="click")return zs(n)}function Ab(e,n){if(e==="input"||e==="change")return zs(n)}function Ob(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:Ob;function Sl(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!Nt.call(n,r)||!_n(e[r],n[r]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Au(e,n){var a=Du(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Du(a)}}function Ou(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Ou(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=js(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=js(e.document)}return n}function hr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ub=ua&&"documentMode"in document&&11>=document.documentMode,Bi=null,xr=null,kl=null,br=!1;function Ru(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;br||Bi==null||Bi!==js(i)||(i=Bi,"selectionStart"in i&&hr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),kl&&Sl(kl,i)||(kl=i,i=bo(xr,"onSelect"),0<i.length&&(n=new ks("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=Bi)))}function xi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gi={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},gr={},Hu={};ua&&(Hu=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function bi(e){if(gr[e])return gr[e];if(!Gi[e])return e;var n=Gi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Hu)return gr[e]=n[a];return e}var Lu=bi("animationend"),qu=bi("animationiteration"),Bu=bi("animationstart"),Rb=bi("transitionrun"),Hb=bi("transitionstart"),Lb=bi("transitioncancel"),Gu=bi("transitionend"),$u=new Map,yr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yr.push("scrollEnd");function Fn(e,n){$u.set(e,n),fi(n,[e])}var Ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Hn=[],$i=0,vr=0;function Es(){for(var e=$i,n=vr=$i=0;n<e;){var a=Hn[n];Hn[n++]=null;var i=Hn[n];Hn[n++]=null;var r=Hn[n];Hn[n++]=null;var c=Hn[n];if(Hn[n++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&Yu(a,r,c)}}function Ms(e,n,a,i){Hn[$i++]=e,Hn[$i++]=n,Hn[$i++]=a,Hn[$i++]=i,vr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function jr(e,n,a,i){return Ms(e,n,a,i),Ds(e)}function gi(e,n){return Ms(e,null,null,n),Ds(e)}function Yu(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-nt(a),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[n]:i.push(n),n.lane=a|536870912),c):null}function Ds(e){if(50<Fl)throw Fl=0,Ec=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yi={};function qb(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,a,i){return new qb(e,n,a,i)}function wr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,n){var a=e.alternate;return a===null?(a=Nn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Qu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function As(e,n,a,i,r,c){var p=0;if(i=e,typeof e=="function")wr(e)&&(p=1);else if(typeof e=="string")p=Qg(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Nn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case Y:return yi(a.children,r,c,n);case D:p=8,r|=24;break;case Q:return e=Nn(12,a,n,r|2),e.elementType=Q,e.lanes=c,e;case P:return e=Nn(13,a,n,r),e.elementType=P,e.lanes=c,e;case de:return e=Nn(19,a,n,r),e.elementType=de,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:p=10;break e;case U:p=9;break e;case ae:p=11;break e;case A:p=14;break e;case G:p=16,i=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),i=null}return n=Nn(p,a,n,r),n.elementType=e,n.type=i,n.lanes=c,n}function yi(e,n,a,i){return e=Nn(7,e,i,n),e.lanes=a,e}function _r(e,n,a){return e=Nn(6,e,null,n),e.lanes=a,e}function Xu(e){var n=Nn(18,null,null,0);return n.stateNode=e,n}function Nr(e,n,a){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Zu=new WeakMap;function Ln(e,n){if(typeof e=="object"&&e!==null){var a=Zu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:bt(n)},Zu.set(e,n),n)}return{value:e,source:n,stack:bt(n)}}var Qi=[],Xi=0,Os=null,Cl=0,qn=[],Bn=0,Ra=null,ta=1,na="";function ma(e,n){Qi[Xi++]=Cl,Qi[Xi++]=Os,Os=e,Cl=n}function Ku(e,n,a){qn[Bn++]=ta,qn[Bn++]=na,qn[Bn++]=Ra,Ra=e;var i=ta;e=na;var r=32-nt(i)-1;i&=~(1<<r),a+=1;var c=32-nt(n)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,ta=1<<32-nt(n)+r|a<<r|i,na=c+e}else ta=1<<c|a<<r|i,na=e}function Sr(e){e.return!==null&&(ma(e,1),Ku(e,1,0))}function kr(e){for(;e===Os;)Os=Qi[--Xi],Qi[Xi]=null,Cl=Qi[--Xi],Qi[Xi]=null;for(;e===Ra;)Ra=qn[--Bn],qn[Bn]=null,na=qn[--Bn],qn[Bn]=null,ta=qn[--Bn],qn[Bn]=null}function Fu(e,n){qn[Bn++]=ta,qn[Bn++]=na,qn[Bn++]=Ra,ta=n.id,na=n.overflow,Ra=e}var tn=null,vt=null,Ie=!1,Ha=null,Gn=!1,Cr=Error(d(519));function La(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw zl(Ln(n,e)),Cr}function Vu(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[Dt]=e,n[St]=i,a){case"dialog":Ke("cancel",n),Ke("close",n);break;case"iframe":case"object":case"embed":Ke("load",n);break;case"video":case"audio":for(a=0;a<Jl.length;a++)Ke(Jl[a],n);break;case"source":Ke("error",n);break;case"img":case"image":case"link":Ke("error",n),Ke("load",n);break;case"details":Ke("toggle",n);break;case"input":Ke("invalid",n),ru(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ke("invalid",n);break;case"textarea":Ke("invalid",n),du(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||mf(n.textContent,a)?(i.popover!=null&&(Ke("beforetoggle",n),Ke("toggle",n)),i.onScroll!=null&&Ke("scroll",n),i.onScrollEnd!=null&&Ke("scrollend",n),i.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||La(e,!0)}function Ju(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:tn=tn.return}}function Zi(e){if(e!==tn)return!1;if(!Ie)return Ju(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xc(e.type,e.memoizedProps)),a=!a),a&&vt&&La(e),Ju(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));vt=wf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));vt=wf(e)}else n===27?(n=vt,Wa(e.type)?(e=Jc,Jc=null,vt=e):vt=n):vt=tn?Yn(e.stateNode.nextSibling):null;return!0}function vi(){vt=tn=null,Ie=!1}function zr(){var e=Ha;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ha=null),e}function zl(e){Ha===null?Ha=[e]:Ha.push(e)}var Tr=N(null),ji=null,fa=null;function qa(e,n,a){ee(Tr,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=Tr.current,M(Tr)}function Er(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function Mr(e,n,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=r;for(var E=0;E<n.length;E++)if(x.context===n[E]){c.lanes|=a,x=c.alternate,x!==null&&(x.lanes|=a),Er(c.return,a,e),i||(p=null);break e}c=x.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),Er(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ki(e,n,a,i){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var x=r.type;_n(r.pendingProps.value,p.value)||(e!==null?e.push(x):e=[x])}}else if(r===Ue.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(ts):e=[ts])}r=r.return}e!==null&&Mr(n,e,a,i),n.flags|=262144}function Us(e){for(e=e.firstContext;e!==null;){if(!_n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){ji=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Pu(ji,e)}function Rs(e,n){return ji===null&&wi(e),Pu(e,n)}function Pu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(d(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var Bb=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Gb=s.unstable_scheduleCallback,$b=s.unstable_NormalPriority,Bt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dr(){return{controller:new Bb,data:new Map,refCount:0}}function Tl(e){e.refCount--,e.refCount===0&&Gb($b,function(){e.controller.abort()})}var El=null,Ar=0,Fi=0,Vi=null;function Yb(e,n){if(El===null){var a=El=[];Ar=0,Fi=Rc(),Vi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Ar++,n.then(Wu,Wu),n}function Wu(){if(--Ar===0&&El!==null){Vi!==null&&(Vi.status="fulfilled");var e=El;El=null,Fi=0,Vi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Qb(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var Iu=z.S;z.S=function(e,n){Rm=rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yb(e,n),Iu!==null&&Iu(e,n)};var _i=N(null);function Or(){var e=_i.current;return e!==null?e:ht.pooledCache}function Hs(e,n){n===null?ee(_i,_i.current):ee(_i,n.pool)}function ep(){var e=Or();return e===null?null:{parent:Bt._currentValue,pool:e}}var Ji=Error(d(460)),Ur=Error(d(474)),Ls=Error(d(542)),qs={then:function(){}};function tp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function np(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(da,da),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ip(e),e;default:if(typeof n.status=="string")n.then(da,da);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=i}},function(i){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,ip(e),e}throw Si=n,Ji}}function Ni(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Si=a,Ji):a}}var Si=null;function ap(){if(Si===null)throw Error(d(459));var e=Si;return Si=null,e}function ip(e){if(e===Ji||e===Ls)throw Error(d(483))}var Pi=null,Ml=0;function Bs(e){var n=Ml;return Ml+=1,Pi===null&&(Pi=[]),np(Pi,e,n)}function Dl(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Gs(e,n){throw n.$$typeof===S?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lp(e){function n(q,O){if(e){var X=q.deletions;X===null?(q.deletions=[O],q.flags|=16):X.push(O)}}function a(q,O){if(!e)return null;for(;O!==null;)n(q,O),O=O.sibling;return null}function i(q){for(var O=new Map;q!==null;)q.key!==null?O.set(q.key,q):O.set(q.index,q),q=q.sibling;return O}function r(q,O){return q=pa(q,O),q.index=0,q.sibling=null,q}function c(q,O,X){return q.index=X,e?(X=q.alternate,X!==null?(X=X.index,X<O?(q.flags|=67108866,O):X):(q.flags|=67108866,O)):(q.flags|=1048576,O)}function p(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function x(q,O,X,ie){return O===null||O.tag!==6?(O=_r(X,q.mode,ie),O.return=q,O):(O=r(O,X),O.return=q,O)}function E(q,O,X,ie){var De=X.type;return De===Y?te(q,O,X.props.children,ie,X.key):O!==null&&(O.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===G&&Ni(De)===O.type)?(O=r(O,X.props),Dl(O,X),O.return=q,O):(O=As(X.type,X.key,X.props,null,q.mode,ie),Dl(O,X),O.return=q,O)}function Z(q,O,X,ie){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=Nr(X,q.mode,ie),O.return=q,O):(O=r(O,X.children||[]),O.return=q,O)}function te(q,O,X,ie,De){return O===null||O.tag!==7?(O=yi(X,q.mode,ie,De),O.return=q,O):(O=r(O,X),O.return=q,O)}function re(q,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=_r(""+O,q.mode,X),O.return=q,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case B:return X=As(O.type,O.key,O.props,null,q.mode,X),Dl(X,O),X.return=q,X;case I:return O=Nr(O,q.mode,X),O.return=q,O;case G:return O=Ni(O),re(q,O,X)}if(ce(O)||R(O))return O=yi(O,q.mode,X,null),O.return=q,O;if(typeof O.then=="function")return re(q,Bs(O),X);if(O.$$typeof===H)return re(q,Rs(q,O),X);Gs(q,O)}return null}function K(q,O,X,ie){var De=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return De!==null?null:x(q,O,""+X,ie);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case B:return X.key===De?E(q,O,X,ie):null;case I:return X.key===De?Z(q,O,X,ie):null;case G:return X=Ni(X),K(q,O,X,ie)}if(ce(X)||R(X))return De!==null?null:te(q,O,X,ie,null);if(typeof X.then=="function")return K(q,O,Bs(X),ie);if(X.$$typeof===H)return K(q,O,Rs(q,X),ie);Gs(q,X)}return null}function J(q,O,X,ie,De){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return q=q.get(X)||null,x(O,q,""+ie,De);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case B:return q=q.get(ie.key===null?X:ie.key)||null,E(O,q,ie,De);case I:return q=q.get(ie.key===null?X:ie.key)||null,Z(O,q,ie,De);case G:return ie=Ni(ie),J(q,O,X,ie,De)}if(ce(ie)||R(ie))return q=q.get(X)||null,te(O,q,ie,De,null);if(typeof ie.then=="function")return J(q,O,X,Bs(ie),De);if(ie.$$typeof===H)return J(q,O,X,Rs(O,ie),De);Gs(O,ie)}return null}function ke(q,O,X,ie){for(var De=null,at=null,Te=O,$e=O=0,Pe=null;Te!==null&&$e<X.length;$e++){Te.index>$e?(Pe=Te,Te=null):Pe=Te.sibling;var it=K(q,Te,X[$e],ie);if(it===null){Te===null&&(Te=Pe);break}e&&Te&&it.alternate===null&&n(q,Te),O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it,Te=Pe}if($e===X.length)return a(q,Te),Ie&&ma(q,$e),De;if(Te===null){for(;$e<X.length;$e++)Te=re(q,X[$e],ie),Te!==null&&(O=c(Te,O,$e),at===null?De=Te:at.sibling=Te,at=Te);return Ie&&ma(q,$e),De}for(Te=i(Te);$e<X.length;$e++)Pe=J(Te,q,$e,X[$e],ie),Pe!==null&&(e&&Pe.alternate!==null&&Te.delete(Pe.key===null?$e:Pe.key),O=c(Pe,O,$e),at===null?De=Pe:at.sibling=Pe,at=Pe);return e&&Te.forEach(function(ai){return n(q,ai)}),Ie&&ma(q,$e),De}function Oe(q,O,X,ie){if(X==null)throw Error(d(151));for(var De=null,at=null,Te=O,$e=O=0,Pe=null,it=X.next();Te!==null&&!it.done;$e++,it=X.next()){Te.index>$e?(Pe=Te,Te=null):Pe=Te.sibling;var ai=K(q,Te,it.value,ie);if(ai===null){Te===null&&(Te=Pe);break}e&&Te&&ai.alternate===null&&n(q,Te),O=c(ai,O,$e),at===null?De=ai:at.sibling=ai,at=ai,Te=Pe}if(it.done)return a(q,Te),Ie&&ma(q,$e),De;if(Te===null){for(;!it.done;$e++,it=X.next())it=re(q,it.value,ie),it!==null&&(O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it);return Ie&&ma(q,$e),De}for(Te=i(Te);!it.done;$e++,it=X.next())it=J(Te,q,$e,it.value,ie),it!==null&&(e&&it.alternate!==null&&Te.delete(it.key===null?$e:it.key),O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it);return e&&Te.forEach(function(ty){return n(q,ty)}),Ie&&ma(q,$e),De}function mt(q,O,X,ie){if(typeof X=="object"&&X!==null&&X.type===Y&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case B:e:{for(var De=X.key;O!==null;){if(O.key===De){if(De=X.type,De===Y){if(O.tag===7){a(q,O.sibling),ie=r(O,X.props.children),ie.return=q,q=ie;break e}}else if(O.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===G&&Ni(De)===O.type){a(q,O.sibling),ie=r(O,X.props),Dl(ie,X),ie.return=q,q=ie;break e}a(q,O);break}else n(q,O);O=O.sibling}X.type===Y?(ie=yi(X.props.children,q.mode,ie,X.key),ie.return=q,q=ie):(ie=As(X.type,X.key,X.props,null,q.mode,ie),Dl(ie,X),ie.return=q,q=ie)}return p(q);case I:e:{for(De=X.key;O!==null;){if(O.key===De)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(q,O.sibling),ie=r(O,X.children||[]),ie.return=q,q=ie;break e}else{a(q,O);break}else n(q,O);O=O.sibling}ie=Nr(X,q.mode,ie),ie.return=q,q=ie}return p(q);case G:return X=Ni(X),mt(q,O,X,ie)}if(ce(X))return ke(q,O,X,ie);if(R(X)){if(De=R(X),typeof De!="function")throw Error(d(150));return X=De.call(X),Oe(q,O,X,ie)}if(typeof X.then=="function")return mt(q,O,Bs(X),ie);if(X.$$typeof===H)return mt(q,O,Rs(q,X),ie);Gs(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(q,O.sibling),ie=r(O,X),ie.return=q,q=ie):(a(q,O),ie=_r(X,q.mode,ie),ie.return=q,q=ie),p(q)):a(q,O)}return function(q,O,X,ie){try{Ml=0;var De=mt(q,O,X,ie);return Pi=null,De}catch(Te){if(Te===Ji||Te===Ls)throw Te;var at=Nn(29,Te,null,q.mode);return at.lanes=ie,at.return=q,at}finally{}}}var ki=lp(!0),sp=lp(!1),Ba=!1;function Rr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(st&2)!==0){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,n=Ds(e),Yu(e,null,a),n}return Ms(e,i,n,a),Ds(e)}function Al(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,pe(e,a)}}function Lr(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var qr=!1;function Ol(){if(qr){var e=Vi;if(e!==null)throw e}}function Ul(e,n,a,i){qr=!1;var r=e.updateQueue;Ba=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,x=r.shared.pending;if(x!==null){r.shared.pending=null;var E=x,Z=E.next;E.next=null,p===null?c=Z:p.next=Z,p=E;var te=e.alternate;te!==null&&(te=te.updateQueue,x=te.lastBaseUpdate,x!==p&&(x===null?te.firstBaseUpdate=Z:x.next=Z,te.lastBaseUpdate=E))}if(c!==null){var re=r.baseState;p=0,te=Z=E=null,x=c;do{var K=x.lane&-536870913,J=K!==x.lane;if(J?(Je&K)===K:(i&K)===K){K!==0&&K===Fi&&(qr=!0),te!==null&&(te=te.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var ke=e,Oe=x;K=n;var mt=a;switch(Oe.tag){case 1:if(ke=Oe.payload,typeof ke=="function"){re=ke.call(mt,re,K);break e}re=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=Oe.payload,K=typeof ke=="function"?ke.call(mt,re,K):ke,K==null)break e;re=w({},re,K);break e;case 2:Ba=!0}}K=x.callback,K!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[K]:J.push(K))}else J={lane:K,tag:x.tag,payload:x.payload,callback:x.callback,next:null},te===null?(Z=te=J,E=re):te=te.next=J,p|=K;if(x=x.next,x===null){if(x=r.shared.pending,x===null)break;J=x,x=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);te===null&&(E=re),r.baseState=E,r.firstBaseUpdate=Z,r.lastBaseUpdate=te,c===null&&(r.shared.lanes=0),Ka|=p,e.lanes=p,e.memoizedState=re}}function op(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function rp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)op(a[e],n)}var Wi=N(null),$s=N(0);function cp(e,n){e=Na,ee($s,e),ee(Wi,n),Na=e|n.baseLanes}function Br(){ee($s,Na),ee(Wi,Wi.current)}function Gr(){Na=$s.current,M(Wi),M($s)}var Sn=N(null),$n=null;function Ya(e){var n=e.alternate;ee(At,At.current&1),ee(Sn,e),$n===null&&(n===null||Wi.current!==null||n.memoizedState!==null)&&($n=e)}function $r(e){ee(At,At.current),ee(Sn,e),$n===null&&($n=e)}function dp(e){e.tag===22?(ee(At,At.current),ee(Sn,e),$n===null&&($n=e)):Qa()}function Qa(){ee(At,At.current),ee(Sn,Sn.current)}function kn(e){M(Sn),$n===e&&($n=null),M(At)}var At=N(0);function Ys(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Fc(a)||Vc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,Ge=null,ut=null,Gt=null,Qs=!1,Ii=!1,Ci=!1,Xs=0,Rl=0,el=null,Xb=0;function zt(){throw Error(d(321))}function Yr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!_n(e[a],n[a]))return!1;return!0}function Qr(e,n,a,i,r,c){return xa=c,Ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Kp:lc,Ci=!1,c=a(i,r),Ci=!1,Ii&&(c=pp(n,a,i,r)),up(e),c}function up(e){z.H=ql;var n=ut!==null&&ut.next!==null;if(xa=0,Gt=ut=Ge=null,Qs=!1,Rl=0,el=null,n)throw Error(d(300));e===null||$t||(e=e.dependencies,e!==null&&Us(e)&&($t=!0))}function pp(e,n,a,i){Ge=e;var r=0;do{if(Ii&&(el=null),Rl=0,Ii=!1,25<=r)throw Error(d(301));if(r+=1,Gt=ut=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}z.H=Fp,c=n(a,i)}while(Ii);return c}function Zb(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?Hl(n):n,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(Ge.flags|=1024),n}function Xr(){var e=Xs!==0;return Xs=0,e}function Zr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Kr(e){if(Qs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Qs=!1}xa=0,Gt=ut=Ge=null,Ii=!1,Rl=Xs=0,el=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Ge.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function Ot(){if(ut===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var n=Gt===null?Ge.memoizedState:Gt.next;if(n!==null)Gt=n,ut=e;else{if(e===null)throw Ge.alternate===null?Error(d(467)):Error(d(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Gt===null?Ge.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function Zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Hl(e){var n=Rl;return Rl+=1,el===null&&(el=[]),e=np(el,e,n),n=Ge,(Gt===null?n.memoizedState:Gt.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Kp:lc),e}function Ks(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Hl(e);if(e.$$typeof===H)return nn(e)}throw Error(d(438,String(e)))}function Fr(e){var n=null,a=Ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Zs(),Ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=be;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function Fs(e){var n=Ot();return Vr(n,ut,e)}function Vr(e,n,a){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var x=p=null,E=null,Z=n,te=!1;do{var re=Z.lane&-536870913;if(re!==Z.lane?(Je&re)===re:(xa&re)===re){var K=Z.revertLane;if(K===0)E!==null&&(E=E.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),re===Fi&&(te=!0);else if((xa&K)===K){Z=Z.next,K===Fi&&(te=!0);continue}else re={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(x=E=re,p=c):E=E.next=re,Ge.lanes|=K,Ka|=K;re=Z.action,Ci&&a(c,re),c=Z.hasEagerState?Z.eagerState:a(c,re)}else K={lane:re,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},E===null?(x=E=K,p=c):E=E.next=K,Ge.lanes|=re,Ka|=re;Z=Z.next}while(Z!==null&&Z!==n);if(E===null?p=c:E.next=x,!_n(c,e.memoizedState)&&($t=!0,te&&(a=Vi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=E,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Jr(e){var n=Ot(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);_n(c,n.memoizedState)||($t=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,i]}function mp(e,n,a){var i=Ge,r=Ot(),c=Ie;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!_n((ut||r).memoizedState,a);if(p&&(r.memoizedState=a,$t=!0),r=r.queue,Ir(xp.bind(null,i,r,e),[e]),r.getSnapshot!==n||p||Gt!==null&&Gt.memoizedState.tag&1){if(i.flags|=2048,tl(9,{destroy:void 0},hp.bind(null,i,r,a,n),null),ht===null)throw Error(d(349));c||(xa&127)!==0||fp(i,n,a)}return a}function fp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ge.updateQueue,n===null?(n=Zs(),Ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function hp(e,n,a,i){n.value=a,n.getSnapshot=i,bp(n)&&gp(e)}function xp(e,n,a){return a(function(){bp(n)&&gp(e)})}function bp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!_n(e,a)}catch{return!0}}function gp(e){var n=gi(e,2);n!==null&&wn(n,e,2)}function Pr(e){var n=mn();if(typeof e=="function"){var a=e;if(e=a(),Ci){Xe(!0);try{a()}finally{Xe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function yp(e,n,a,i){return e.baseState=a,Vr(e,ut,typeof i=="function"?i:ba)}function Kb(e,n,a,i,r){if(Ps(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};z.T!==null?a(!0):c.isTransition=!1,i(c),a=n.pending,a===null?(c.next=n.pending=c,vp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function vp(e,n){var a=n.action,i=n.payload,r=e.state;if(n.isTransition){var c=z.T,p={};z.T=p;try{var x=a(r,i),E=z.S;E!==null&&E(p,x),jp(e,n,x)}catch(Z){Wr(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),z.T=c}}else try{c=a(r,i),jp(e,n,c)}catch(Z){Wr(e,n,Z)}}function jp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){wp(e,n,i)},function(i){return Wr(e,n,i)}):wp(e,n,a)}function wp(e,n,a){n.status="fulfilled",n.value=a,_p(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,vp(e,a)))}function Wr(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,_p(n),n=n.next;while(n!==i)}e.action=null}function _p(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Np(e,n){return n}function Sp(e,n){if(Ie){var a=ht.formState;if(a!==null){e:{var i=Ge;if(Ie){if(vt){t:{for(var r=vt,c=Gn;r.nodeType!==8;){if(!c){r=null;break t}if(r=Yn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){vt=Yn(r.nextSibling),i=r.data==="F!";break e}}La(i)}i=!1}i&&(n=a[0])}}return a=mn(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=i,a=Qp.bind(null,Ge,i),i.dispatch=a,i=Pr(!1),c=ic.bind(null,Ge,!1,i.queue),i=mn(),r={state:n,dispatch:null,action:e,pending:null},i.queue=r,a=Kb.bind(null,Ge,r,c,a),r.dispatch=a,i.memoizedState=e,[n,a,!1]}function kp(e){var n=Ot();return Cp(n,ut,e)}function Cp(e,n,a){if(n=Vr(e,n,Np)[0],e=Fs(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Hl(n)}catch(p){throw p===Ji?Ls:p}else i=n;n=Ot();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Ge.flags|=2048,tl(9,{destroy:void 0},Fb.bind(null,r,a),null)),[i,c,e]}function Fb(e,n){e.action=n}function zp(e){var n=Ot(),a=ut;if(a!==null)return Cp(n,a,e);Ot(),n=n.memoizedState,a=Ot();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function tl(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=Ge.updateQueue,n===null&&(n=Zs(),Ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function Tp(){return Ot().memoizedState}function Vs(e,n,a,i){var r=mn();Ge.flags|=e,r.memoizedState=tl(1|n,{destroy:void 0},a,i===void 0?null:i)}function Js(e,n,a,i){var r=Ot();i=i===void 0?null:i;var c=r.memoizedState.inst;ut!==null&&i!==null&&Yr(i,ut.memoizedState.deps)?r.memoizedState=tl(n,c,a,i):(Ge.flags|=e,r.memoizedState=tl(1|n,c,a,i))}function Ep(e,n){Vs(8390656,8,e,n)}function Ir(e,n){Js(2048,8,e,n)}function Vb(e){Ge.flags|=4;var n=Ge.updateQueue;if(n===null)n=Zs(),Ge.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Mp(e){var n=Ot().memoizedState;return Vb({ref:n,nextImpl:e}),function(){if((st&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function Dp(e,n){return Js(4,2,e,n)}function Ap(e,n){return Js(4,4,e,n)}function Op(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Up(e,n,a){a=a!=null?a.concat([e]):null,Js(4,4,Op.bind(null,n,e),a)}function ec(){}function Rp(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&Yr(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Hp(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&Yr(n,i[1]))return i[0];if(i=e(),Ci){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,n],i}function tc(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Je&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Lm(),Ge.lanes|=e,Ka|=e,a)}function Lp(e,n,a,i){return _n(a,n)?a:Wi.current!==null?(e=tc(e,a,i),_n(e,n)||($t=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(Je&261930)===0?($t=!0,e.memoizedState=a):(e=Lm(),Ge.lanes|=e,Ka|=e,n)}function qp(e,n,a,i,r){var c=V.p;V.p=c!==0&&8>c?c:8;var p=z.T,x={};z.T=x,ic(e,!1,n,a);try{var E=r(),Z=z.S;if(Z!==null&&Z(x,E),E!==null&&typeof E=="object"&&typeof E.then=="function"){var te=Qb(E,i);Ll(e,n,te,Tn(e))}else Ll(e,n,i,Tn(e))}catch(re){Ll(e,n,{then:function(){},status:"rejected",reason:re},Tn())}finally{V.p=c,p!==null&&x.types!==null&&(p.types=x.types),z.T=p}}function Jb(){}function nc(e,n,a,i){if(e.tag!==5)throw Error(d(476));var r=Bp(e).queue;qp(e,r,n,T,a===null?Jb:function(){return Gp(e),a(i)})}function Bp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:T,baseState:T,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:T},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Gp(e){var n=Bp(e);n.next===null&&(n=e.alternate.memoizedState),Ll(e,n.next.queue,{},Tn())}function ac(){return nn(ts)}function $p(){return Ot().memoizedState}function Yp(){return Ot().memoizedState}function Pb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Tn();e=Ga(a);var i=$a(n,e,a);i!==null&&(wn(i,n,a),Al(i,n,a)),n={cache:Dr()},e.payload=n;return}n=n.return}}function Wb(e,n,a){var i=Tn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Xp(n,a):(a=jr(e,n,a,i),a!==null&&(wn(a,e,i),Zp(a,n,i)))}function Qp(e,n,a){var i=Tn();Ll(e,n,a,i)}function Ll(e,n,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Xp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,x=c(p,a);if(r.hasEagerState=!0,r.eagerState=x,_n(x,p))return Ms(e,n,r,0),ht===null&&Es(),!1}catch{}finally{}if(a=jr(e,n,r,i),a!==null)return wn(a,e,i),Zp(a,n,i),!0}return!1}function ic(e,n,a,i){if(i={lane:2,revertLane:Rc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(n)throw Error(d(479))}else n=jr(e,a,i,2),n!==null&&wn(n,e,2)}function Ps(e){var n=e.alternate;return e===Ge||n!==null&&n===Ge}function Xp(e,n){Ii=Qs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Zp(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,pe(e,a)}}var ql={readContext:nn,use:Ks,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};ql.useEffectEvent=zt;var Kp={readContext:nn,use:Ks,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Ep,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Vs(4194308,4,Op.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Vs(4194308,4,e,n)},useInsertionEffect:function(e,n){Vs(4,2,e,n)},useMemo:function(e,n){var a=mn();n=n===void 0?null:n;var i=e();if(Ci){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=mn();if(a!==void 0){var r=a(n);if(Ci){Xe(!0);try{a(n)}finally{Xe(!1)}}}else r=n;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Wb.bind(null,Ge,e),[i.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:function(e){e=Pr(e);var n=e.queue,a=Qp.bind(null,Ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:ec,useDeferredValue:function(e,n){var a=mn();return tc(a,e,n)},useTransition:function(){var e=Pr(!1);return e=qp.bind(null,Ge,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=Ge,r=mn();if(Ie){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Je&127)!==0||fp(i,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Ep(xp.bind(null,i,c,e),[e]),i.flags|=2048,tl(9,{destroy:void 0},hp.bind(null,i,c,a,n),null),a},useId:function(){var e=mn(),n=ht.identifierPrefix;if(Ie){var a=na,i=ta;a=(i&~(1<<32-nt(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Xs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Xb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ac,useFormState:Sp,useActionState:Sp,useOptimistic:function(e){var n=mn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ic.bind(null,Ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:Fr,useCacheRefresh:function(){return mn().memoizedState=Pb.bind(null,Ge)},useEffectEvent:function(e){var n=mn(),a={impl:e};return n.memoizedState=a,function(){if((st&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},lc={readContext:nn,use:Ks,useCallback:Rp,useContext:nn,useEffect:Ir,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ap,useMemo:Hp,useReducer:Fs,useRef:Tp,useState:function(){return Fs(ba)},useDebugValue:ec,useDeferredValue:function(e,n){var a=Ot();return Lp(a,ut.memoizedState,e,n)},useTransition:function(){var e=Fs(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:mp,useId:$p,useHostTransitionStatus:ac,useFormState:kp,useActionState:kp,useOptimistic:function(e,n){var a=Ot();return yp(a,ut,e,n)},useMemoCache:Fr,useCacheRefresh:Yp};lc.useEffectEvent=Mp;var Fp={readContext:nn,use:Ks,useCallback:Rp,useContext:nn,useEffect:Ir,useImperativeHandle:Up,useInsertionEffect:Dp,useLayoutEffect:Ap,useMemo:Hp,useReducer:Jr,useRef:Tp,useState:function(){return Jr(ba)},useDebugValue:ec,useDeferredValue:function(e,n){var a=Ot();return ut===null?tc(a,e,n):Lp(a,ut.memoizedState,e,n)},useTransition:function(){var e=Jr(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Hl(e),n]},useSyncExternalStore:mp,useId:$p,useHostTransitionStatus:ac,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=Ot();return ut!==null?yp(a,ut,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Fr,useCacheRefresh:Yp};Fp.useEffectEvent=Mp;function sc(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:w({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var oc={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.payload=n,a!=null&&(r.callback=a),n=$a(e,r,i),n!==null&&(wn(n,e,i),Al(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=$a(e,r,i),n!==null&&(wn(n,e,i),Al(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Tn(),i=Ga(a);i.tag=2,n!=null&&(i.callback=n),n=$a(e,i,a),n!==null&&(wn(n,e,a),Al(n,e,a))}};function Vp(e,n,a,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):n.prototype&&n.prototype.isPureReactComponent?!Sl(a,i)||!Sl(r,c):!0}function Jp(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&oc.enqueueReplaceState(n,n.state,null)}function zi(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=w({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Pp(e){Ts(e)}function Wp(e){console.error(e)}function Ip(e){Ts(e)}function Ws(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function em(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function rc(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ws(e,n)},a}function tm(e){return e=Ga(e),e.tag=3,e}function nm(e,n,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){em(n,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){em(n,a,i),typeof r!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function Ib(e,n,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Ki(n,a,r,!0),a=Sn.current,a!==null){switch(a.tag){case 31:case 13:return $n===null?uo():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===qs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),Ac(e,i,r)),!1;case 22:return a.flags|=65536,i===qs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),Ac(e,i,r)),!1}throw Error(d(435,a.tag))}return Ac(e,i,r),uo(),!1}if(Ie)return n=Sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,i!==Cr&&(e=Error(d(422),{cause:i}),zl(Ln(e,a)))):(i!==Cr&&(n=Error(d(423),{cause:i}),zl(Ln(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Ln(i,a),r=rc(e.stateNode,i,r),Lr(e,r),Tt!==4&&(Tt=2)),!1;var c=Error(d(520),{cause:i});if(c=Ln(c,a),Kl===null?Kl=[c]:Kl.push(c),Tt!==4&&(Tt=2),n===null)return!0;i=Ln(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=rc(a.stateNode,i,e),Lr(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Fa===null||!Fa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=tm(r),nm(r,e,a,i),Lr(a,r),!1}a=a.return}while(a!==null);return!1}var cc=Error(d(461)),$t=!1;function an(e,n,a,i){n.child=e===null?sp(n,null,a,i):ki(n,e.child,a,i)}function am(e,n,a,i,r){a=a.render;var c=n.ref;if("ref"in i){var p={};for(var x in i)x!=="ref"&&(p[x]=i[x])}else p=i;return wi(n),i=Qr(e,n,a,p,c,r),x=Xr(),e!==null&&!$t?(Zr(e,n,r),ga(e,n,r)):(Ie&&x&&Sr(n),n.flags|=1,an(e,n,i,r),n.child)}function im(e,n,a,i,r){if(e===null){var c=a.type;return typeof c=="function"&&!wr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,lm(e,n,c,i,r)):(e=As(a.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!bc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Sl,a(p,i)&&e.ref===n.ref)return ga(e,n,r)}return n.flags|=1,e=pa(c,i),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,a,i,r){if(e!==null){var c=e.memoizedProps;if(Sl(c,i)&&e.ref===n.ref)if($t=!1,n.pendingProps=i=c,bc(e,r))(e.flags&131072)!==0&&($t=!0);else return n.lanes=e.lanes,ga(e,n,r)}return dc(e,n,a,i,r)}function sm(e,n,a,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=n.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,n.child=null;return om(e,n,c,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hs(n,c!==null?c.cachePool:null),c!==null?cp(n,c):Br(),dp(n);else return i=n.lanes=536870912,om(e,n,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(Hs(n,c.cachePool),cp(n,c),Qa(),n.memoizedState=null):(e!==null&&Hs(n,null),Br(),Qa());return an(e,n,r,a),n.child}function Bl(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function om(e,n,a,i,r){var c=Or();return c=c===null?null:{parent:Bt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Hs(n,null),Br(),dp(n),e!==null&&Ki(e,n,i,!0),n.childLanes=r,null}function Is(e,n){return n=to({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function rm(e,n,a){return ki(n,e.child,null,a),e=Is(n,n.pendingProps),e.flags|=2,kn(n),n.memoizedState=null,e}function eg(e,n,a){var i=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(i.mode==="hidden")return e=Is(n,i),n.lanes=536870912,Bl(null,e);if($r(n),(e=vt)?(e=jf(e,Gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Xu(e),a.return=n,n.child=a,tn=n,vt=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Is(n,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if($r(n),r)if(n.flags&256)n.flags&=-257,n=rm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if($t||Ki(e,n,a,!1),r=(a&e.childLanes)!==0,$t||r){if(i=ht,i!==null&&(p=_e(i,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,gi(e,p),wn(i,e,p),cc;uo(),n=rm(e,n,a)}else e=c.treeContext,vt=Yn(p.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Fu(n,e),n=Is(n,i),n.flags|=4096;return n}return e=pa(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function eo(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function dc(e,n,a,i,r){return wi(n),a=Qr(e,n,a,i,void 0,r),i=Xr(),e!==null&&!$t?(Zr(e,n,r),ga(e,n,r)):(Ie&&i&&Sr(n),n.flags|=1,an(e,n,a,r),n.child)}function cm(e,n,a,i,r,c){return wi(n),n.updateQueue=null,a=pp(n,i,a,r),up(e),i=Xr(),e!==null&&!$t?(Zr(e,n,c),ga(e,n,c)):(Ie&&i&&Sr(n),n.flags|=1,an(e,n,a,c),n.child)}function dm(e,n,a,i,r){if(wi(n),n.stateNode===null){var c=Yi,p=a.contextType;typeof p=="object"&&p!==null&&(c=nn(p)),c=new a(i,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=oc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=i,c.state=n.memoizedState,c.refs={},Rr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?nn(p):Yi,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(sc(n,a,p,i),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&oc.enqueueReplaceState(c,c.state,null),Ul(n,i,c,r),Ol(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){c=n.stateNode;var x=n.memoizedProps,E=zi(a,x);c.props=E;var Z=c.context,te=a.contextType;p=Yi,typeof te=="object"&&te!==null&&(p=nn(te));var re=a.getDerivedStateFromProps;te=typeof re=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=n.pendingProps!==x,te||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||Z!==p)&&Jp(n,c,i,p),Ba=!1;var K=n.memoizedState;c.state=K,Ul(n,i,c,r),Ol(),Z=n.memoizedState,x||K!==Z||Ba?(typeof re=="function"&&(sc(n,a,re,i),Z=n.memoizedState),(E=Ba||Vp(n,a,E,i,K,Z,p))?(te||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Z),c.props=i,c.state=Z,c.context=p,i=E):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{c=n.stateNode,Hr(e,n),p=n.memoizedProps,te=zi(a,p),c.props=te,re=n.pendingProps,K=c.context,Z=a.contextType,E=Yi,typeof Z=="object"&&Z!==null&&(E=nn(Z)),x=a.getDerivedStateFromProps,(Z=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==re||K!==E)&&Jp(n,c,i,E),Ba=!1,K=n.memoizedState,c.state=K,Ul(n,i,c,r),Ol();var J=n.memoizedState;p!==re||K!==J||Ba||e!==null&&e.dependencies!==null&&Us(e.dependencies)?(typeof x=="function"&&(sc(n,a,x,i),J=n.memoizedState),(te=Ba||Vp(n,a,te,i,K,J,E)||e!==null&&e.dependencies!==null&&Us(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,J,E),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,J,E)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=J),c.props=i,c.state=J,c.context=E,i=te):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),i=!1)}return c=i,eo(e,n),i=(n.flags&128)!==0,c||i?(c=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&i?(n.child=ki(n,e.child,null,r),n.child=ki(n,null,a,r)):an(e,n,a,r),n.memoizedState=c.state,e=n.child):e=ga(e,n,r),e}function um(e,n,a,i){return vi(),n.flags|=256,an(e,n,a,i),n.child}var uc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pc(e){return{baseLanes:e,cachePool:ep()}}function mc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=zn),e}function pm(e,n,a){var i=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(At.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(r?Ya(n):Qa(),(e=vt)?(e=jf(e,Gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:ta,overflow:na}:null,retryLane:536870912,hydrationErrors:null},a=Xu(e),a.return=n,n.child=a,tn=n,vt=null)):e=null,e===null)throw La(n);return Vc(e)?n.lanes=32:n.lanes=536870912,null}var x=i.children;return i=i.fallback,r?(Qa(),r=n.mode,x=to({mode:"hidden",children:x},r),i=yi(i,r,a,null),x.return=n,i.return=n,x.sibling=i,n.child=x,i=n.child,i.memoizedState=pc(a),i.childLanes=mc(e,p,a),n.memoizedState=uc,Bl(null,i)):(Ya(n),fc(n,x))}var E=e.memoizedState;if(E!==null&&(x=E.dehydrated,x!==null)){if(c)n.flags&256?(Ya(n),n.flags&=-257,n=hc(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),x=i.fallback,r=n.mode,i=to({mode:"visible",children:i.children},r),x=yi(x,r,a,null),x.flags|=2,i.return=n,x.return=n,i.sibling=x,n.child=i,ki(n,e.child,null,a),i=n.child,i.memoizedState=pc(a),i.childLanes=mc(e,p,a),n.memoizedState=uc,n=Bl(null,i));else if(Ya(n),Vc(x)){if(p=x.nextSibling&&x.nextSibling.dataset,p)var Z=p.dgst;p=Z,i=Error(d(419)),i.stack="",i.digest=p,zl({value:i,source:null,stack:null}),n=hc(e,n,a)}else if($t||Ki(e,n,a,!1),p=(a&e.childLanes)!==0,$t||p){if(p=ht,p!==null&&(i=_e(p,a),i!==0&&i!==E.retryLane))throw E.retryLane=i,gi(e,i),wn(p,e,i),cc;Fc(x)||uo(),n=hc(e,n,a)}else Fc(x)?(n.flags|=192,n.child=e.child,n=null):(e=E.treeContext,vt=Yn(x.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Fu(n,e),n=fc(n,i.children),n.flags|=4096);return n}return r?(Qa(),x=i.fallback,r=n.mode,E=e.child,Z=E.sibling,i=pa(E,{mode:"hidden",children:i.children}),i.subtreeFlags=E.subtreeFlags&65011712,Z!==null?x=pa(Z,x):(x=yi(x,r,a,null),x.flags|=2),x.return=n,i.return=n,i.sibling=x,n.child=i,Bl(null,i),i=n.child,x=e.child.memoizedState,x===null?x=pc(a):(r=x.cachePool,r!==null?(E=Bt._currentValue,r=r.parent!==E?{parent:E,pool:E}:r):r=ep(),x={baseLanes:x.baseLanes|a,cachePool:r}),i.memoizedState=x,i.childLanes=mc(e,p,a),n.memoizedState=uc,Bl(e.child,i)):(Ya(n),a=e.child,e=a.sibling,a=pa(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function fc(e,n){return n=to({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function to(e,n){return e=Nn(22,e,null,n),e.lanes=0,e}function hc(e,n,a){return ki(n,e.child,null,a),e=fc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),Er(e.return,n,a)}function xc(e,n,a,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function fm(e,n,a){var i=n.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=At.current,x=(p&2)!==0;if(x?(p=p&1|2,n.flags|=128):p&=1,ee(At,p),an(e,n,i,a),i=Ie?Cl:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,a,n);else if(e.tag===19)mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Ys(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),xc(n,!1,r,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Ys(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}xc(n,!0,a,null,c,i);break;case"together":xc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ki(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=pa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=pa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function bc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Us(e)))}function tg(e,n,a){switch(n.tag){case 3:Ve(n,n.stateNode.containerInfo),qa(n,Bt,e.memoizedState.cache),vi();break;case 27:case 5:et(n);break;case 4:Ve(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,$r(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?pm(e,n,a):(Ya(n),e=ga(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var r=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Ki(e,n,a,!1),i=(a&n.childLanes)!==0),r){if(i)return fm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ee(At,At.current),i)break;return null;case 22:return n.lanes=0,sm(e,n,a,n.pendingProps);case 24:qa(n,Bt,e.memoizedState.cache)}return ga(e,n,a)}function hm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)$t=!0;else{if(!bc(e,a)&&(n.flags&128)===0)return $t=!1,tg(e,n,a);$t=(e.flags&131072)!==0}else $t=!1,Ie&&(n.flags&1048576)!==0&&Ku(n,Cl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Ni(n.elementType),n.type=e,typeof e=="function")wr(e)?(i=zi(e,i),n.tag=1,n=dm(null,n,e,i,a)):(n.tag=0,n=dc(null,n,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===ae){n.tag=11,n=am(null,n,e,i,a);break e}else if(r===A){n.tag=14,n=im(null,n,e,i,a);break e}}throw n=$(e)||e,Error(d(306,n,""))}}return n;case 0:return dc(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,r=zi(i,n.pendingProps),dm(e,n,i,r,a);case 3:e:{if(Ve(n,n.stateNode.containerInfo),e===null)throw Error(d(387));i=n.pendingProps;var c=n.memoizedState;r=c.element,Hr(e,n),Ul(n,i,null,a);var p=n.memoizedState;if(i=p.cache,qa(n,Bt,i),i!==c.cache&&Mr(n,[Bt],a,!0),Ol(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=um(e,n,i,a);break e}else if(i!==r){r=Ln(Error(d(424)),n),zl(r),n=um(e,n,i,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(vt=Yn(e.firstChild),tn=n,Ie=!0,Ha=null,Gn=!0,a=sp(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vi(),i===r){n=ga(e,n,a);break e}an(e,n,i,a)}n=n.child}return n;case 26:return eo(e,n),e===null?(a=Cf(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,i=go(Me.current).createElement(a),i[Dt]=n,i[St]=e,ln(i,a,e),Pt(i),n.stateNode=i):n.memoizedState=Cf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Ie&&(i=n.stateNode=Nf(n.type,n.pendingProps,Me.current),tn=n,Gn=!0,r=vt,Wa(n.type)?(Jc=r,vt=Yn(i.firstChild)):vt=r),an(e,n,n.pendingProps.children,a),eo(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((r=i=vt)&&(i=Mg(i,n.type,n.pendingProps,Gn),i!==null?(n.stateNode=i,tn=n,vt=Yn(i.firstChild),Gn=!1,r=!0):r=!1),r||La(n)),et(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,Xc(r,c)?i=null:p!==null&&Xc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Qr(e,n,Zb,null,null,a),ts._currentValue=r),eo(e,n),an(e,n,i,a),n.child;case 6:return e===null&&Ie&&((e=a=vt)&&(a=Dg(a,n.pendingProps,Gn),a!==null?(n.stateNode=a,tn=n,vt=null,e=!0):e=!1),e||La(n)),null;case 13:return pm(e,n,a);case 4:return Ve(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ki(n,null,i,a):an(e,n,i,a),n.child;case 11:return am(e,n,n.type,n.pendingProps,a);case 7:return an(e,n,n.pendingProps,a),n.child;case 8:return an(e,n,n.pendingProps.children,a),n.child;case 12:return an(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,qa(n,n.type,i.value),an(e,n,i.children,a),n.child;case 9:return r=n.type._context,i=n.pendingProps.children,wi(n),r=nn(r),i=i(r),n.flags|=1,an(e,n,i,a),n.child;case 14:return im(e,n,n.type,n.pendingProps,a);case 15:return lm(e,n,n.type,n.pendingProps,a);case 19:return fm(e,n,a);case 31:return eg(e,n,a);case 22:return sm(e,n,a,n.pendingProps);case 24:return wi(n),i=nn(Bt),e===null?(r=Or(),r===null&&(r=ht,c=Dr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:i,cache:r},Rr(n),qa(n,Bt,r)):((e.lanes&a)!==0&&(Hr(e,n),Ul(n,null,null,a),Ol()),r=e.memoizedState,c=n.memoizedState,r.parent!==i?(r={parent:i,cache:i},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),qa(n,Bt,i)):(i=c.cache,qa(n,Bt,i),i!==r.cache&&Mr(n,[Bt],a,!0))),an(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ya(e){e.flags|=4}function gc(e,n,a,i,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if($m())e.flags|=8192;else throw Si=qs,Ur}else e.flags&=-16777217}function xm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Df(n))if($m())e.flags|=8192;else throw Si=qs,Ur}function no(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ce():536870912,e.lanes|=n,ll|=n)}function Gl(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function ng(e,n,a){var i=n.pendingProps;switch(kr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ha(Bt),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?ya(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,zr())),jt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ya(n),c!==null?(jt(n),xm(n,c)):(jt(n),gc(n,r,null,i,a))):c?c!==e.memoizedState?(ya(n),jt(n),xm(n,c)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ya(n),jt(n),gc(n,r,e,i,a)),null;case 27:if(ft(n),a=Me.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return jt(n),null}e=me.current,Zi(n)?Vu(n):(e=Nf(r,i,a),n.stateNode=e,ya(n))}return jt(n),null;case 5:if(ft(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return jt(n),null}if(c=me.current,Zi(n))Vu(n);else{var p=go(Me.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[Dt]=n,c[St]=i;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(ln(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ya(n)}}return jt(n),gc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(d(166));if(e=Me.current,Zi(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,r=tn,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Dt]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||mf(e.nodeValue,a)),e||La(n,!0)}else e=go(e).createTextNode(i),e[Dt]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Zi(n),a!==null){if(e===null){if(!i)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Dt]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return jt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Zi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Dt]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),r=!1}else r=zr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),no(n,n.updateQueue),jt(n),null);case 4:return Re(),e===null&&Bc(n.stateNode.containerInfo),jt(n),null;case 10:return ha(n.type),jt(n),null;case 19:if(M(At),i=n.memoizedState,i===null)return jt(n),null;if(r=(n.flags&128)!==0,c=i.rendering,c===null)if(r)Gl(i,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Ys(e),c!==null){for(n.flags|=128,Gl(i,!1),e=c.updateQueue,n.updateQueue=e,no(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Qu(a,e),a=a.sibling;return ee(At,At.current&1|2),Ie&&ma(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&rt()>oo&&(n.flags|=128,r=!0,Gl(i,!1),n.lanes=4194304)}else{if(!r)if(e=Ys(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,no(n,e),Gl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ie)return jt(n),null}else 2*rt()-i.renderingStartTime>oo&&a!==536870912&&(n.flags|=128,r=!0,Gl(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(e=i.last,e!==null?e.sibling=c:n.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=rt(),e.sibling=null,a=At.current,ee(At,r?a&1|2:a&1),Ie&&ma(n,i.treeForkCount),e):(jt(n),null);case 22:case 23:return kn(n),Gr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&no(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&M(_i),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Bt),jt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function ag(e,n){switch(kr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Bt),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(At),null;case 4:return Re(),null;case 10:return ha(n.type),null;case 22:case 23:return kn(n),Gr(),e!==null&&M(_i),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Bt),null;case 25:return null;default:return null}}function bm(e,n){switch(kr(n),n.tag){case 3:ha(Bt),Re();break;case 26:case 27:case 5:ft(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:M(At);break;case 10:ha(n.type);break;case 22:case 23:kn(n),Gr(),e!==null&&M(_i);break;case 24:ha(Bt)}}function $l(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var c=a.create,p=a.inst;i=c(),p.destroy=i}a=a.next}while(a!==r)}}catch(x){dt(n,n.return,x)}}function Xa(e,n,a){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,x=p.destroy;if(x!==void 0){p.destroy=void 0,r=n;var E=a,Z=x;try{Z()}catch(te){dt(r,E,te)}}}i=i.next}while(i!==c)}}catch(te){dt(n,n.return,te)}}function gm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{rp(n,a)}catch(i){dt(e,e.return,i)}}}function ym(e,n,a){a.props=zi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){dt(e,n,i)}}function Yl(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){dt(e,n,r)}}function aa(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){dt(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){dt(e,n,r)}else a.current=null}function vm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){dt(e,e.return,r)}}function yc(e,n,a){try{var i=e.stateNode;Sg(i,e.type,a,n),i[St]=n}catch(r){dt(e,e.return,r)}}function jm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function vc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function jc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=da));else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(jc(e,n,a),e=e.sibling;e!==null;)jc(e,n,a),e=e.sibling}function ao(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(ao(e,n,a),e=e.sibling;e!==null;)ao(e,n,a),e=e.sibling}function wm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ln(n,i,a),n[Dt]=e,n[St]=a}catch(c){dt(e,e.return,c)}}var va=!1,Yt=!1,wc=!1,_m=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function ig(e,n){if(e=e.containerInfo,Yc=So,e=Uu(e),hr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,x=-1,E=-1,Z=0,te=0,re=e,K=null;t:for(;;){for(var J;re!==a||r!==0&&re.nodeType!==3||(x=p+r),re!==c||i!==0&&re.nodeType!==3||(E=p+i),re.nodeType===3&&(p+=re.nodeValue.length),(J=re.firstChild)!==null;)K=re,re=J;for(;;){if(re===e)break t;if(K===a&&++Z===r&&(x=p),K===c&&++te===i&&(E=p),(J=re.nextSibling)!==null)break;re=K,K=re.parentNode}re=J}a=x===-1||E===-1?null:{start:x,end:E}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qc={focusedElem:e,selectionRange:a},So=!1,Wt=n;Wt!==null;)if(n=Wt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Wt=e;else for(;Wt!==null;){switch(n=Wt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var ke=zi(a.type,r);e=i.getSnapshotBeforeUpdate(ke,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(Oe){dt(a,a.return,Oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Kc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Kc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Wt=e;break}Wt=n.return}}function Nm(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),i&4&&$l(5,a);break;case 1:if(wa(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){dt(a,a.return,p)}else{var r=zi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){dt(a,a.return,p)}}i&64&&gm(a),i&512&&Yl(a,a.return);break;case 3:if(wa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{rp(e,n)}catch(p){dt(a,a.return,p)}}break;case 27:n===null&&i&4&&wm(a);case 26:case 5:wa(e,a),n===null&&i&4&&vm(a),i&512&&Yl(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),i&4&&Cm(e,a);break;case 13:wa(e,a),i&4&&zm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=mg.bind(null,a),Ag(e,a))));break;case 22:if(i=a.memoizedState!==null||va,!i){n=n!==null&&n.memoizedState!==null||Yt,r=va;var c=Yt;va=i,(Yt=n)&&!c?_a(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),va=r,Yt=c}break;case 30:break;default:wa(e,a)}}function Sm(e){var n=e.alternate;n!==null&&(e.alternate=null,Sm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _t=null,gn=!1;function ja(e,n,a){for(a=a.child;a!==null;)km(e,n,a),a=a.sibling}function km(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(He,a)}catch{}switch(a.tag){case 26:Yt||aa(a,n),ja(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||aa(a,n);var i=_t,r=gn;Wa(a.type)&&(_t=a.stateNode,gn=!1),ja(e,n,a),Wl(a.stateNode),_t=i,gn=r;break;case 5:Yt||aa(a,n);case 6:if(i=_t,r=gn,_t=null,ja(e,n,a),_t=i,gn=r,_t!==null)if(gn)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(a.stateNode)}catch(c){dt(a,n,c)}else try{_t.removeChild(a.stateNode)}catch(c){dt(a,n,c)}break;case 18:_t!==null&&(gn?(e=_t,yf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):yf(_t,a.stateNode));break;case 4:i=_t,r=gn,_t=a.stateNode.containerInfo,gn=!0,ja(e,n,a),_t=i,gn=r;break;case 0:case 11:case 14:case 15:Xa(2,a,n),Yt||Xa(4,a,n),ja(e,n,a);break;case 1:Yt||(aa(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&ym(a,n,i)),ja(e,n,a);break;case 21:ja(e,n,a);break;case 22:Yt=(i=Yt)||a.memoizedState!==null,ja(e,n,a),Yt=i;break;default:ja(e,n,a)}}function Cm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){dt(n,n.return,a)}}}function zm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){dt(n,n.return,a)}}function lg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new _m),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new _m),n;default:throw Error(d(435,e.tag))}}function io(e,n){var a=lg(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var r=fg.bind(null,e,i);i.then(r,r)}})}function yn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],c=e,p=n,x=p;e:for(;x!==null;){switch(x.tag){case 27:if(Wa(x.type)){_t=x.stateNode,gn=!1;break e}break;case 5:_t=x.stateNode,gn=!1;break e;case 3:case 4:_t=x.stateNode.containerInfo,gn=!0;break e}x=x.return}if(_t===null)throw Error(d(160));km(c,p,r),_t=null,gn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Tm(n,e),n=n.sibling}var Vn=null;function Tm(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(n,e),vn(e),i&4&&(Xa(3,e,e.return),$l(3,e),Xa(5,e,e.return));break;case 1:yn(n,e),vn(e),i&512&&(Yt||a===null||aa(a,a.return)),i&64&&va&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=Vn;if(yn(n,e),vn(e),i&512&&(Yt||a===null||aa(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[tt]||c[Dt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ln(c,i,a),c[Dt]=e,Pt(c),i=c;break e;case"link":var p=Ef("link","href",r).get(i+(a.href||""));if(p){for(var x=0;x<p.length;x++)if(c=p[x],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(x,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;case"meta":if(p=Ef("meta","content",r).get(i+(a.content||""))){for(x=0;x<p.length;x++)if(c=p[x],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(x,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;default:throw Error(d(468,i))}c[Dt]=e,Pt(c),i=c}e.stateNode=i}else Mf(r,e.type,e.stateNode);else e.stateNode=Tf(r,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?Mf(r,e.type,e.stateNode):Tf(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&yc(e,e.memoizedProps,a.memoizedProps)}break;case 27:yn(n,e),vn(e),i&512&&(Yt||a===null||aa(a,a.return)),a!==null&&i&4&&yc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yn(n,e),vn(e),i&512&&(Yt||a===null||aa(a,a.return)),e.flags&32){r=e.stateNode;try{Ri(r,"")}catch(ke){dt(e,e.return,ke)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,yc(e,r,a!==null?a.memoizedProps:r)),i&1024&&(wc=!0);break;case 6:if(yn(n,e),vn(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(ke){dt(e,e.return,ke)}}break;case 3:if(jo=null,r=Vn,Vn=yo(n.containerInfo),yn(n,e),Vn=r,vn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(n.containerInfo)}catch(ke){dt(e,e.return,ke)}wc&&(wc=!1,Em(e));break;case 4:i=Vn,Vn=yo(e.stateNode.containerInfo),yn(n,e),vn(e),Vn=i;break;case 12:yn(n,e),vn(e);break;case 31:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 13:yn(n,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(so=rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 22:r=e.memoizedState!==null;var E=a!==null&&a.memoizedState!==null,Z=va,te=Yt;if(va=Z||r,Yt=te||E,yn(n,e),Yt=te,va=Z,vn(e),i&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||E||va||Yt||Ti(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){E=a=n;try{if(c=E.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{x=E.stateNode;var re=E.memoizedProps.style,K=re!=null&&re.hasOwnProperty("display")?re.display:null;x.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(ke){dt(E,E.return,ke)}}}else if(n.tag===6){if(a===null){E=n;try{E.stateNode.nodeValue=r?"":E.memoizedProps}catch(ke){dt(E,E.return,ke)}}}else if(n.tag===18){if(a===null){E=n;try{var J=E.stateNode;r?vf(J,!0):vf(E.stateNode,!1)}catch(ke){dt(E,E.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,io(e,a))));break;case 19:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,io(e,i)));break;case 30:break;case 21:break;default:yn(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(jm(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=vc(e);ao(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Ri(p,""),a.flags&=-33);var x=vc(e);ao(e,x,p);break;case 3:case 4:var E=a.stateNode.containerInfo,Z=vc(e);jc(e,Z,E);break;default:throw Error(d(161))}}catch(te){dt(e,e.return,te)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Em(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Em(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Nm(e,n.alternate,n),n=n.sibling}function Ti(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ti(n);break;case 1:aa(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&ym(n,n.return,a),Ti(n);break;case 27:Wl(n.stateNode);case 26:case 5:aa(n,n.return),Ti(n);break;case 22:n.memoizedState===null&&Ti(n);break;case 30:Ti(n);break;default:Ti(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:_a(r,c,a),$l(4,c);break;case 1:if(_a(r,c,a),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){dt(i,i.return,Z)}if(i=c,r=i.updateQueue,r!==null){var x=i.stateNode;try{var E=r.shared.hiddenCallbacks;if(E!==null)for(r.shared.hiddenCallbacks=null,r=0;r<E.length;r++)op(E[r],x)}catch(Z){dt(i,i.return,Z)}}a&&p&64&&gm(c),Yl(c,c.return);break;case 27:wm(c);case 26:case 5:_a(r,c,a),a&&i===null&&p&4&&vm(c),Yl(c,c.return);break;case 12:_a(r,c,a);break;case 31:_a(r,c,a),a&&p&4&&Cm(r,c);break;case 13:_a(r,c,a),a&&p&4&&zm(r,c);break;case 22:c.memoizedState===null&&_a(r,c,a),Yl(c,c.return);break;case 30:break;default:_a(r,c,a)}n=n.sibling}}function _c(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Tl(a))}function Nc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e))}function Jn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mm(e,n,a,i),n=n.sibling}function Mm(e,n,a,i){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n,a,i),r&2048&&$l(9,n);break;case 1:Jn(e,n,a,i);break;case 3:Jn(e,n,a,i),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Tl(e)));break;case 12:if(r&2048){Jn(e,n,a,i),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,x=c.onPostCommit;typeof x=="function"&&x(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(E){dt(n,n.return,E)}}else Jn(e,n,a,i);break;case 31:Jn(e,n,a,i);break;case 13:Jn(e,n,a,i);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Jn(e,n,a,i):Ql(e,n):c._visibility&2?Jn(e,n,a,i):(c._visibility|=2,nl(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),r&2048&&_c(p,n);break;case 24:Jn(e,n,a,i),r&2048&&Nc(n.alternate,n);break;default:Jn(e,n,a,i)}}function nl(e,n,a,i,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,x=a,E=i,Z=p.flags;switch(p.tag){case 0:case 11:case 15:nl(c,p,x,E,r),$l(8,p);break;case 23:break;case 22:var te=p.stateNode;p.memoizedState!==null?te._visibility&2?nl(c,p,x,E,r):Ql(c,p):(te._visibility|=2,nl(c,p,x,E,r)),r&&Z&2048&&_c(p.alternate,p);break;case 24:nl(c,p,x,E,r),r&&Z&2048&&Nc(p.alternate,p);break;default:nl(c,p,x,E,r)}n=n.sibling}}function Ql(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,r=i.flags;switch(i.tag){case 22:Ql(a,i),r&2048&&_c(i.alternate,i);break;case 24:Ql(a,i),r&2048&&Nc(i.alternate,i);break;default:Ql(a,i)}n=n.sibling}}var Xl=8192;function al(e,n,a){if(e.subtreeFlags&Xl)for(e=e.child;e!==null;)Dm(e,n,a),e=e.sibling}function Dm(e,n,a){switch(e.tag){case 26:al(e,n,a),e.flags&Xl&&e.memoizedState!==null&&Xg(a,Vn,e.memoizedState,e.memoizedProps);break;case 5:al(e,n,a);break;case 3:case 4:var i=Vn;Vn=yo(e.stateNode.containerInfo),al(e,n,a),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Xl,Xl=16777216,al(e,n,a),Xl=i):al(e,n,a));break;default:al(e,n,a)}}function Am(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Zl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Um(i,e)}Am(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Om(e),e=e.sibling}function Om(e){switch(e.tag){case 0:case 11:case 15:Zl(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Zl(e);break;case 12:Zl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,lo(e)):Zl(e);break;default:Zl(e)}}function lo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Um(i,e)}Am(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),lo(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,lo(n));break;default:lo(n)}e=e.sibling}}function Um(e,n){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Tl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else e:for(a=e;Wt!==null;){i=Wt;var r=i.sibling,c=i.return;if(Sm(i),i===a){Wt=null;break e}if(r!==null){r.return=c,Wt=r;break e}Wt=c}}}var sg={getCacheForType:function(e){var n=nn(Bt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return nn(Bt).controller.signal}},og=typeof WeakMap=="function"?WeakMap:Map,st=0,ht=null,Ze=null,Je=0,ct=0,Cn=null,Za=!1,il=!1,Sc=!1,Na=0,Tt=0,Ka=0,Ei=0,kc=0,zn=0,ll=0,Kl=null,jn=null,Cc=!1,so=0,Rm=0,oo=1/0,ro=null,Fa=null,Zt=0,Va=null,sl=null,Sa=0,zc=0,Tc=null,Hm=null,Fl=0,Ec=null;function Tn(){return(st&2)!==0&&Je!==0?Je&-Je:z.T!==null?Rc():oa()}function Lm(){if(zn===0)if((Je&536870912)===0||Ie){var e=un;un<<=1,(un&3932160)===0&&(un=262144),zn=e}else zn=536870912;return e=Sn.current,e!==null&&(e.flags|=32),zn}function wn(e,n,a){(e===ht&&(ct===2||ct===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Ja(e,Je,zn,!1)),We(e,a),((st&2)===0||e!==ht)&&(e===ht&&((st&2)===0&&(Ei|=a),Tt===4&&Ja(e,Je,zn,!1)),ia(e))}function qm(e,n,a){if((st&6)!==0)throw Error(d(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||se(e,n),r=i?dg(e,n):Dc(e,n,!0),c=i;do{if(r===0){il&&!i&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!rg(a)){r=Dc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var x=e;r=Kl;var E=x.current.memoizedState.isDehydrated;if(E&&(ol(x,p).flags|=256),p=Dc(x,p,!1),p!==2){if(Sc&&!E){x.errorRecoveryDisabledLanes|=c,Ei|=c,r=4;break e}c=jn,jn=r,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){ol(e,0),Ja(e,n,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Ja(i,n,zn,!Za);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=so+300-rt(),10<r)){if(Ja(i,n,zn,!Za),L(i,0,!0)!==0)break e;Sa=n,i.timeoutHandle=bf(Bm.bind(null,i,a,jn,ro,Cc,n,zn,Ei,ll,Za,c,"Throttled",-0,0),r);break e}Bm(i,a,jn,ro,Cc,n,zn,Ei,ll,Za,c,null,-0,0)}}break}while(!0);ia(e)}function Bm(e,n,a,i,r,c,p,x,E,Z,te,re,K,J){if(e.timeoutHandle=-1,re=n.subtreeFlags,re&8192||(re&16785408)===16785408){re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Dm(n,c,re);var ke=(c&62914560)===c?so-rt():(c&4194048)===c?Rm-rt():0;if(ke=Zg(re,ke),ke!==null){Sa=c,e.cancelPendingCommit=ke(Fm.bind(null,e,n,c,a,i,r,p,x,E,te,re,null,K,J)),Ja(e,c,p,!Z);return}}Fm(e,n,c,a,i,r,p,x,E)}function rg(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],c=r.getSnapshot;r=r.value;try{if(!_n(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,i){n&=~kc,n&=~Ei,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var r=n;0<r;){var c=31-nt(r),p=1<<c;i[c]=-1,r&=~p}a!==0&&oe(e,a,n)}function co(){return(st&6)===0?(Vl(0),!1):!0}function Mc(){if(Ze!==null){if(ct===0)var e=Ze.return;else e=Ze,fa=ji=null,Kr(e),Pi=null,Ml=0,e=Ze;for(;e!==null;)bm(e.alternate,e),e=e.return;Ze=null}}function ol(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,zg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Mc(),ht=e,Ze=a=pa(e.current,null),Je=n,ct=0,Cn=null,Za=!1,il=se(e,n),Sc=!1,ll=zn=kc=Ei=Ka=Tt=0,jn=Kl=null,Cc=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var r=31-nt(i),c=1<<r;n|=e[r],i&=~c}return Na=n,Es(),a}function Gm(e,n){Ge=null,z.H=ql,n===Ji||n===Ls?(n=ap(),ct=3):n===Ur?(n=ap(),ct=4):ct=n===cc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cn=n,Ze===null&&(Tt=1,Ws(e,Ln(n,e.current)))}function $m(){var e=Sn.current;return e===null?!0:(Je&4194048)===Je?$n===null:(Je&62914560)===Je||(Je&536870912)!==0?e===$n:!1}function Ym(){var e=z.H;return z.H=ql,e===null?ql:e}function Qm(){var e=z.A;return z.A=sg,e}function uo(){Tt=4,Za||(Je&4194048)!==Je&&Sn.current!==null||(il=!0),(Ka&134217727)===0&&(Ei&134217727)===0||ht===null||Ja(ht,Je,zn,!1)}function Dc(e,n,a){var i=st;st|=2;var r=Ym(),c=Qm();(ht!==e||Je!==n)&&(ro=null,ol(e,n)),n=!1;var p=Tt;e:do try{if(ct!==0&&Ze!==null){var x=Ze,E=Cn;switch(ct){case 8:Mc(),p=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(n=!0);var Z=ct;if(ct=0,Cn=null,rl(e,x,E,Z),a&&il){p=0;break e}break;default:Z=ct,ct=0,Cn=null,rl(e,x,E,Z)}}cg(),p=Tt;break}catch(te){Gm(e,te)}while(!0);return n&&e.shellSuspendCounter++,fa=ji=null,st=i,z.H=r,z.A=c,Ze===null&&(ht=null,Je=0,Es()),p}function cg(){for(;Ze!==null;)Xm(Ze)}function dg(e,n){var a=st;st|=2;var i=Ym(),r=Qm();ht!==e||Je!==n?(ro=null,oo=rt()+500,ol(e,n)):il=se(e,n);e:do try{if(ct!==0&&Ze!==null){n=Ze;var c=Cn;t:switch(ct){case 1:ct=0,Cn=null,rl(e,n,c,1);break;case 2:case 9:if(tp(c)){ct=0,Cn=null,Zm(n);break}n=function(){ct!==2&&ct!==9||ht!==e||(ct=7),ia(e)},c.then(n,n);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:tp(c)?(ct=0,Cn=null,Zm(n)):(ct=0,Cn=null,rl(e,n,c,7));break;case 5:var p=null;switch(Ze.tag){case 26:p=Ze.memoizedState;case 5:case 27:var x=Ze;if(p?Df(p):x.stateNode.complete){ct=0,Cn=null;var E=x.sibling;if(E!==null)Ze=E;else{var Z=x.return;Z!==null?(Ze=Z,po(Z)):Ze=null}break t}}ct=0,Cn=null,rl(e,n,c,5);break;case 6:ct=0,Cn=null,rl(e,n,c,6);break;case 8:Mc(),Tt=6;break e;default:throw Error(d(462))}}ug();break}catch(te){Gm(e,te)}while(!0);return fa=ji=null,z.H=i,z.A=r,st=a,Ze!==null?0:(ht=null,Je=0,Es(),Tt)}function ug(){for(;Ze!==null&&!Ae();)Xm(Ze)}function Xm(e){var n=hm(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?po(e):Ze=n}function Zm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=cm(a,n,n.pendingProps,n.type,void 0,Je);break;case 11:n=cm(a,n,n.pendingProps,n.type.render,n.ref,Je);break;case 5:Kr(n);default:bm(a,n),n=Ze=Qu(n,Na),n=hm(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?po(e):Ze=n}function rl(e,n,a,i){fa=ji=null,Kr(n),Pi=null,Ml=0;var r=n.return;try{if(Ib(e,r,n,a,Je)){Tt=1,Ws(e,Ln(a,e.current)),Ze=null;return}}catch(c){if(r!==null)throw Ze=r,c;Tt=1,Ws(e,Ln(a,e.current)),Ze=null;return}n.flags&32768?(Ie||i===1?e=!0:il||(Je&536870912)!==0?e=!1:(Za=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Km(n,e)):po(n)}function po(e){var n=e;do{if((n.flags&32768)!==0){Km(n,Za);return}e=n.return;var a=ng(n.alternate,n,Na);if(a!==null){Ze=a;return}if(n=n.sibling,n!==null){Ze=n;return}Ze=n=e}while(n!==null);Tt===0&&(Tt=5)}function Km(e,n){do{var a=ag(e.alternate,e);if(a!==null){a.flags&=32767,Ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ze=e;return}Ze=e=a}while(e!==null);Tt=6,Ze=null}function Fm(e,n,a,i,r,c,p,x,E){e.cancelPendingCommit=null;do mo();while(Zt!==0);if((st&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=vr,y(e,a,c,p,x,E),e===ht&&(Ze=ht=null,Je=0),sl=n,Va=e,Sa=a,zc=c,Tc=r,Hm=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,hg(F,function(){return Im(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=z.T,z.T=null,r=V.p,V.p=2,p=st,st|=4;try{ig(e,n,a)}finally{st=p,V.p=r,z.T=i}}Zt=1,Vm(),Jm(),Pm()}}function Vm(){if(Zt===1){Zt=0;var e=Va,n=sl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{Tm(n,e);var c=Qc,p=Uu(e.containerInfo),x=c.focusedElem,E=c.selectionRange;if(p!==x&&x&&x.ownerDocument&&Ou(x.ownerDocument.documentElement,x)){if(E!==null&&hr(x)){var Z=E.start,te=E.end;if(te===void 0&&(te=Z),"selectionStart"in x)x.selectionStart=Z,x.selectionEnd=Math.min(te,x.value.length);else{var re=x.ownerDocument||document,K=re&&re.defaultView||window;if(K.getSelection){var J=K.getSelection(),ke=x.textContent.length,Oe=Math.min(E.start,ke),mt=E.end===void 0?Oe:Math.min(E.end,ke);!J.extend&&Oe>mt&&(p=mt,mt=Oe,Oe=p);var q=Au(x,Oe),O=Au(x,mt);if(q&&O&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==O.node||J.focusOffset!==O.offset)){var X=re.createRange();X.setStart(q.node,q.offset),J.removeAllRanges(),Oe>mt?(J.addRange(X),J.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),J.addRange(X))}}}}for(re=[],J=x;J=J.parentNode;)J.nodeType===1&&re.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<re.length;x++){var ie=re[x];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}So=!!Yc,Qc=Yc=null}finally{st=r,V.p=i,z.T=a}}e.current=n,Zt=2}}function Jm(){if(Zt===2){Zt=0;var e=Va,n=sl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{Nm(e,n.alternate,n)}finally{st=r,V.p=i,z.T=a}}Zt=3}}function Pm(){if(Zt===4||Zt===3){Zt=0,fn();var e=Va,n=sl,a=Sa,i=Hm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Zt=5:(Zt=0,sl=Va=null,Wm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Fa=null),On(a),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(He,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=z.T,r=V.p,V.p=2,z.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var x=i[p];c(x.value,{componentStack:x.stack})}}finally{z.T=n,V.p=r}}(Sa&3)!==0&&mo(),ia(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Ec?Fl++:(Fl=0,Ec=e):Fl=0,Vl(0)}}function Wm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Tl(n)))}function mo(){return Vm(),Jm(),Pm(),Im()}function Im(){if(Zt!==5)return!1;var e=Va,n=zc;zc=0;var a=On(Sa),i=z.T,r=V.p;try{V.p=32>a?32:a,z.T=null,a=Tc,Tc=null;var c=Va,p=Sa;if(Zt=0,sl=Va=null,Sa=0,(st&6)!==0)throw Error(d(331));var x=st;if(st|=4,Om(c.current),Mm(c,c.current,p,a),st=x,Vl(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(He,c)}catch{}return!0}finally{V.p=r,z.T=i,Wm(e,n)}}function ef(e,n,a){n=Ln(a,n),n=rc(e.stateNode,n,2),e=$a(e,n,2),e!==null&&(We(e,2),ia(e))}function dt(e,n,a){if(e.tag===3)ef(e,e,a);else for(;n!==null;){if(n.tag===3){ef(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))){e=Ln(a,e),a=tm(2),i=$a(n,a,2),i!==null&&(nm(a,i,n,e),We(i,2),ia(i));break}}n=n.return}}function Ac(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new og;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(a)||(Sc=!0,r.add(a),e=pg.bind(null,e,n,a),n.then(e,e))}function pg(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Je&a)===a&&(Tt===4||Tt===3&&(Je&62914560)===Je&&300>rt()-so?(st&2)===0&&ol(e,0):kc|=a,ll===Je&&(ll=0)),ia(e)}function tf(e,n){n===0&&(n=Ce()),e=gi(e,n),e!==null&&(We(e,n),ia(e))}function mg(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),tf(e,a)}function fg(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(n),tf(e,a)}function hg(e,n){return je(e,n)}var fo=null,cl=null,Oc=!1,ho=!1,Uc=!1,Pa=0;function ia(e){e!==cl&&e.next===null&&(cl===null?fo=cl=e:cl=cl.next=e),ho=!0,Oc||(Oc=!0,bg())}function Vl(e,n){if(!Uc&&ho){Uc=!0;do for(var a=!1,i=fo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-nt(42|e)+1)-1,c&=r&~(p&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,sf(i,c))}else c=Je,c=L(i,i===ht?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||se(i,c)||(a=!0,sf(i,c));i=i.next}while(a);Uc=!1}}function xg(){nf()}function nf(){ho=Oc=!1;var e=0;Pa!==0&&Cg()&&(e=Pa);for(var n=rt(),a=null,i=fo;i!==null;){var r=i.next,c=af(i,n);c===0?(i.next=null,a===null?fo=r:a.next=r,r===null&&(cl=a)):(a=i,(e!==0||(c&3)!==0)&&(ho=!0)),i=r}Zt!==0&&Zt!==5||Vl(e),Pa!==0&&(Pa=0)}function af(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-nt(c),x=1<<p,E=r[p];E===-1?((x&a)===0||(x&i)!==0)&&(r[p]=W(x,n)):E<=n&&(e.expiredLanes|=x),c&=~x}if(n=ht,a=Je,a=L(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(ct===2||ct===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||se(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&Mt(i),On(a)){case 2:case 8:a=hn;break;case 32:a=F;break;case 268435456:a=we;break;default:a=F}return i=lf.bind(null,e),a=je(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&Mt(i),e.callbackPriority=2,e.callbackNode=null,2}function lf(e,n){if(Zt!==0&&Zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(mo()&&e.callbackNode!==a)return null;var i=Je;return i=L(e,e===ht?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(qm(e,i,n),af(e,rt()),e.callbackNode!=null&&e.callbackNode===a?lf.bind(null,e):null)}function sf(e,n){if(mo())return null;qm(e,n,!0)}function bg(){Tg(function(){(st&6)!==0?je(An,xg):nf()})}function Rc(){if(Pa===0){var e=Fi;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Pa=e}return Pa}function of(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ws(""+e)}function rf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function gg(e,n,a,i,r){if(n==="submit"&&a&&a.stateNode===r){var c=of((r[St]||null).action),p=i.submitter;p&&(n=(n=p[St]||null)?of(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var x=new ks("action","action",null,i,r);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Pa!==0){var E=p?rf(r,p):new FormData(r);nc(a,{pending:!0,data:E,method:r.method,action:c},null,E)}}else typeof c=="function"&&(x.preventDefault(),E=p?rf(r,p):new FormData(r),nc(a,{pending:!0,data:E,method:r.method,action:c},c,E))},currentTarget:r}]})}}for(var Hc=0;Hc<yr.length;Hc++){var Lc=yr[Hc],yg=Lc.toLowerCase(),vg=Lc[0].toUpperCase()+Lc.slice(1);Fn(yg,"on"+vg)}Fn(Lu,"onAnimationEnd"),Fn(qu,"onAnimationIteration"),Fn(Bu,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Rb,"onTransitionRun"),Fn(Hb,"onTransitionStart"),Fn(Lb,"onTransitionCancel"),Fn(Gu,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Jl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Jl));function cf(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var c=void 0;if(n)for(var p=i.length-1;0<=p;p--){var x=i[p],E=x.instance,Z=x.currentTarget;if(x=x.listener,E!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(te){Ts(te)}r.currentTarget=null,c=E}else for(p=0;p<i.length;p++){if(x=i[p],E=x.instance,Z=x.currentTarget,x=x.listener,E!==c&&r.isPropagationStopped())break e;c=x,r.currentTarget=Z;try{c(r)}catch(te){Ts(te)}r.currentTarget=null,c=E}}}}function Ke(e,n){var a=n[v];a===void 0&&(a=n[v]=new Set);var i=e+"__bubble";a.has(i)||(df(n,e,2,!1),a.add(i))}function qc(e,n,a){var i=0;n&&(i|=4),df(a,e,i,n)}var xo="_reactListening"+Math.random().toString(36).slice(2);function Bc(e){if(!e[xo]){e[xo]=!0,nu.forEach(function(a){a!=="selectionchange"&&(jg.has(a)||qc(a,!1,e),qc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[xo]||(n[xo]=!0,qc("selectionchange",!1,n))}}function df(e,n,a,i){switch(qf(n)){case 2:var r=Vg;break;case 8:r=Jg;break;default:r=td}a=r.bind(null,n,a,e),r=void 0,!sr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Gc(e,n,a,i,r){var c=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var x=i.stateNode.containerInfo;if(x===r)break;if(p===4)for(p=i.return;p!==null;){var E=p.tag;if((E===3||E===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;x!==null;){if(p=qt(x),p===null)return;if(E=p.tag,E===5||E===6||E===26||E===27){i=c=p;continue e}x=x.parentNode}}i=i.return}fu(function(){var Z=c,te=ir(a),re=[];e:{var K=$u.get(e);if(K!==void 0){var J=ks,ke=e;switch(e){case"keypress":if(Ns(a)===0)break e;case"keydown":case"keyup":J=fb;break;case"focusin":ke="focus",J=dr;break;case"focusout":ke="blur",J=dr;break;case"beforeblur":case"afterblur":J=dr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=bu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=nb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=bb;break;case Lu:case qu:case Bu:J=lb;break;case Gu:J=yb;break;case"scroll":case"scrollend":J=eb;break;case"wheel":J=jb;break;case"copy":case"cut":case"paste":J=ob;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=yu;break;case"toggle":case"beforetoggle":J=_b}var Oe=(n&4)!==0,mt=!Oe&&(e==="scroll"||e==="scrollend"),q=Oe?K!==null?K+"Capture":null:K;Oe=[];for(var O=Z,X;O!==null;){var ie=O;if(X=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||X===null||q===null||(ie=gl(O,q),ie!=null&&Oe.push(Pl(O,ie,X))),mt)break;O=O.return}0<Oe.length&&(K=new J(K,ke,null,a,te),re.push({event:K,listeners:Oe}))}}if((n&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",K&&a!==ar&&(ke=a.relatedTarget||a.fromElement)&&(qt(ke)||ke[Aa]))break e;if((J||K)&&(K=te.window===te?te:(K=te.ownerDocument)?K.defaultView||K.parentWindow:window,J?(ke=a.relatedTarget||a.toElement,J=Z,ke=ke?qt(ke):null,ke!==null&&(mt=m(ke),Oe=ke.tag,ke!==mt||Oe!==5&&Oe!==27&&Oe!==6)&&(ke=null)):(J=null,ke=Z),J!==ke)){if(Oe=bu,ie="onMouseLeave",q="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Oe=yu,ie="onPointerLeave",q="onPointerEnter",O="pointer"),mt=J==null?K:ra(J),X=ke==null?K:ra(ke),K=new Oe(ie,O+"leave",J,a,te),K.target=mt,K.relatedTarget=X,ie=null,qt(te)===Z&&(Oe=new Oe(q,O+"enter",ke,a,te),Oe.target=X,Oe.relatedTarget=mt,ie=Oe),mt=ie,J&&ke)t:{for(Oe=wg,q=J,O=ke,X=0,ie=q;ie;ie=Oe(ie))X++;ie=0;for(var De=O;De;De=Oe(De))ie++;for(;0<X-ie;)q=Oe(q),X--;for(;0<ie-X;)O=Oe(O),ie--;for(;X--;){if(q===O||O!==null&&q===O.alternate){Oe=q;break t}q=Oe(q),O=Oe(O)}Oe=null}else Oe=null;J!==null&&uf(re,K,J,Oe,!1),ke!==null&&mt!==null&&uf(re,mt,ke,Oe,!0)}}e:{if(K=Z?ra(Z):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var at=Cu;else if(Su(K))if(zu)at=Ab;else{at=Mb;var Te=Eb}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Z&&nr(Z.elementType)&&(at=Cu):at=Db;if(at&&(at=at(e,Z))){ku(re,at,a,te);break e}Te&&Te(e,K,Z),e==="focusout"&&Z&&K.type==="number"&&Z.memoizedProps.value!=null&&tr(K,"number",K.value)}switch(Te=Z?ra(Z):window,e){case"focusin":(Su(Te)||Te.contentEditable==="true")&&(Bi=Te,xr=Z,kl=null);break;case"focusout":kl=xr=Bi=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,Ru(re,a,te);break;case"selectionchange":if(Ub)break;case"keydown":case"keyup":Ru(re,a,te)}var $e;if(pr)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else qi?_u(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(vu&&a.locale!=="ko"&&(qi||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&qi&&($e=hu()):(Ua=te,or="value"in Ua?Ua.value:Ua.textContent,qi=!0)),Te=bo(Z,Pe),0<Te.length&&(Pe=new gu(Pe,e,null,a,te),re.push({event:Pe,listeners:Te}),$e?Pe.data=$e:($e=Nu(a),$e!==null&&(Pe.data=$e)))),($e=Sb?kb(e,a):Cb(e,a))&&(Pe=bo(Z,"onBeforeInput"),0<Pe.length&&(Te=new gu("onBeforeInput","beforeinput",null,a,te),re.push({event:Te,listeners:Pe}),Te.data=$e)),gg(re,e,Z,a,te)}cf(re,n)})}function Pl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function bo(e,n){for(var a=n+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=gl(e,a),r!=null&&i.unshift(Pl(e,r,c)),r=gl(e,n),r!=null&&i.push(Pl(e,r,c))),e.tag===3)return i;e=e.return}return[]}function wg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function uf(e,n,a,i,r){for(var c=n._reactName,p=[];a!==null&&a!==i;){var x=a,E=x.alternate,Z=x.stateNode;if(x=x.tag,E!==null&&E===i)break;x!==5&&x!==26&&x!==27||Z===null||(E=Z,r?(Z=gl(a,c),Z!=null&&p.unshift(Pl(a,Z,E))):r||(Z=gl(a,c),Z!=null&&p.push(Pl(a,Z,E)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var _g=/\r\n?/g,Ng=/\u0000|\uFFFD/g;function pf(e){return(typeof e=="string"?e:""+e).replace(_g,`
`).replace(Ng,"")}function mf(e,n){return n=pf(n),pf(e)===n}function pt(e,n,a,i,r,c){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ri(e,""+i);break;case"className":vs(e,"class",i);break;case"tabIndex":vs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":vs(e,a,i);break;case"style":pu(e,i,c);break;case"data":if(n!=="object"){vs(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=ws(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&pt(e,n,"name",r.name,r,null),pt(e,n,"formEncType",r.formEncType,r,null),pt(e,n,"formMethod",r.formMethod,r,null),pt(e,n,"formTarget",r.formTarget,r,null)):(pt(e,n,"encType",r.encType,r,null),pt(e,n,"method",r.method,r,null),pt(e,n,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=ws(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=da);break;case"onScroll":i!=null&&Ke("scroll",e);break;case"onScrollEnd":i!=null&&Ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=ws(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ke("beforetoggle",e),Ke("toggle",e),ys(e,"popover",i);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ys(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Wx.get(a)||a,ys(e,a,i))}}function $c(e,n,a,i,r,c){switch(a){case"style":pu(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&Ri(e,""+i);break;case"onScroll":i!=null&&Ke("scroll",e);break;case"onScrollEnd":i!=null&&Ke("scrollend",e);break;case"onClick":i!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!au.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[St]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):ys(e,a,i)}}}function ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",e),Ke("load",e);var i=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,c,p,a,null)}}r&&pt(e,n,"srcSet",a.srcSet,a,null),i&&pt(e,n,"src",a.src,a,null);return;case"input":Ke("invalid",e);var x=c=p=r=null,E=null,Z=null;for(i in a)if(a.hasOwnProperty(i)){var te=a[i];if(te!=null)switch(i){case"name":r=te;break;case"type":p=te;break;case"checked":E=te;break;case"defaultChecked":Z=te;break;case"value":c=te;break;case"defaultValue":x=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(d(137,n));break;default:pt(e,n,i,te,a,null)}}ru(e,c,x,E,Z,p,r,!1);return;case"select":Ke("invalid",e),i=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(x=a[r],x!=null))switch(r){case"value":c=x;break;case"defaultValue":p=x;break;case"multiple":i=x;default:pt(e,n,r,x,a,null)}n=c,a=p,e.multiple=!!i,n!=null?Ui(e,!!i,n,!1):a!=null&&Ui(e,!!i,a,!0);return;case"textarea":Ke("invalid",e),c=r=i=null;for(p in a)if(a.hasOwnProperty(p)&&(x=a[p],x!=null))switch(p){case"value":i=x;break;case"defaultValue":r=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:pt(e,n,p,x,a,null)}du(e,i,r,c);return;case"option":for(E in a)if(a.hasOwnProperty(E)&&(i=a[E],i!=null))switch(E){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(e,n,E,i,a,null)}return;case"dialog":Ke("beforetoggle",e),Ke("toggle",e),Ke("cancel",e),Ke("close",e);break;case"iframe":case"object":Ke("load",e);break;case"video":case"audio":for(i=0;i<Jl.length;i++)Ke(Jl[i],e);break;case"image":Ke("error",e),Ke("load",e);break;case"details":Ke("toggle",e);break;case"embed":case"source":case"link":Ke("error",e),Ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(i=a[Z],i!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,Z,i,a,null)}return;default:if(nr(n)){for(te in a)a.hasOwnProperty(te)&&(i=a[te],i!==void 0&&$c(e,n,te,i,a,void 0));return}}for(x in a)a.hasOwnProperty(x)&&(i=a[x],i!=null&&pt(e,n,x,i,a,null))}function Sg(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,x=null,E=null,Z=null,te=null;for(J in a){var re=a[J];if(a.hasOwnProperty(J)&&re!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":E=re;default:i.hasOwnProperty(J)||pt(e,n,J,null,i,re)}}for(var K in i){var J=i[K];if(re=a[K],i.hasOwnProperty(K)&&(J!=null||re!=null))switch(K){case"type":c=J;break;case"name":r=J;break;case"checked":Z=J;break;case"defaultChecked":te=J;break;case"value":p=J;break;case"defaultValue":x=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:J!==re&&pt(e,n,K,J,i,re)}}er(e,p,x,E,Z,te,c,r);return;case"select":J=p=x=K=null;for(c in a)if(E=a[c],a.hasOwnProperty(c)&&E!=null)switch(c){case"value":break;case"multiple":J=E;default:i.hasOwnProperty(c)||pt(e,n,c,null,i,E)}for(r in i)if(c=i[r],E=a[r],i.hasOwnProperty(r)&&(c!=null||E!=null))switch(r){case"value":K=c;break;case"defaultValue":x=c;break;case"multiple":p=c;default:c!==E&&pt(e,n,r,c,i,E)}n=x,a=p,i=J,K!=null?Ui(e,!!a,K,!1):!!i!=!!a&&(n!=null?Ui(e,!!a,n,!0):Ui(e,!!a,a?[]:"",!1));return;case"textarea":J=K=null;for(x in a)if(r=a[x],a.hasOwnProperty(x)&&r!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:pt(e,n,x,null,i,r)}for(p in i)if(r=i[p],c=a[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":K=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&pt(e,n,p,r,i,c)}cu(e,K,J);return;case"option":for(var ke in a)if(K=a[ke],a.hasOwnProperty(ke)&&K!=null&&!i.hasOwnProperty(ke))switch(ke){case"selected":e.selected=!1;break;default:pt(e,n,ke,null,i,K)}for(E in i)if(K=i[E],J=a[E],i.hasOwnProperty(E)&&K!==J&&(K!=null||J!=null))switch(E){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:pt(e,n,E,K,i,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in a)K=a[Oe],a.hasOwnProperty(Oe)&&K!=null&&!i.hasOwnProperty(Oe)&&pt(e,n,Oe,null,i,K);for(Z in i)if(K=i[Z],J=a[Z],i.hasOwnProperty(Z)&&K!==J&&(K!=null||J!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,n));break;default:pt(e,n,Z,K,i,J)}return;default:if(nr(n)){for(var mt in a)K=a[mt],a.hasOwnProperty(mt)&&K!==void 0&&!i.hasOwnProperty(mt)&&$c(e,n,mt,void 0,i,K);for(te in i)K=i[te],J=a[te],!i.hasOwnProperty(te)||K===J||K===void 0&&J===void 0||$c(e,n,te,K,i,J);return}}for(var q in a)K=a[q],a.hasOwnProperty(q)&&K!=null&&!i.hasOwnProperty(q)&&pt(e,n,q,null,i,K);for(re in i)K=i[re],J=a[re],!i.hasOwnProperty(re)||K===J||K==null&&J==null||pt(e,n,re,K,i,J)}function ff(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function kg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],c=r.transferSize,p=r.initiatorType,x=r.duration;if(c&&x&&ff(p)){for(p=0,x=r.responseEnd,i+=1;i<a.length;i++){var E=a[i],Z=E.startTime;if(Z>x)break;var te=E.transferSize,re=E.initiatorType;te&&ff(re)&&(E=E.responseEnd,p+=te*(E<x?1:(x-Z)/(E-Z)))}if(--i,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yc=null,Qc=null;function go(e){return e.nodeType===9?e:e.ownerDocument}function hf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function xf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Xc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Zc=null;function Cg(){var e=window.event;return e&&e.type==="popstate"?e===Zc?!1:(Zc=e,!0):(Zc=null,!1)}var bf=typeof setTimeout=="function"?setTimeout:void 0,zg=typeof clearTimeout=="function"?clearTimeout:void 0,gf=typeof Promise=="function"?Promise:void 0,Tg=typeof queueMicrotask=="function"?queueMicrotask:typeof gf<"u"?function(e){return gf.resolve(null).then(e).catch(Eg)}:bf;function Eg(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function yf(e,n){var a=n,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),ml(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Wl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Wl(a);for(var c=a.firstChild;c;){var p=c.nextSibling,x=c.nodeName;c[tt]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Wl(e.ownerDocument.body);a=r}while(a);ml(n)}function vf(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Kc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Kc(a),xn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mg(e,n,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function Dg(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yn(e.nextSibling),e===null))return null;return e}function jf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Fc(e){return e.data==="$?"||e.data==="$~"}function Vc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Ag(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Jc=null;function wf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Yn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function _f(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Nf(e,n,a){switch(n=go(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Wl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xn(e)}var Qn=new Map,Sf=new Set;function yo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=V.d;V.d={f:Og,r:Ug,D:Rg,C:Hg,L:Lg,m:qg,X:Gg,S:Bg,M:$g};function Og(){var e=ka.f(),n=co();return e||n}function Ug(e){var n=ea(e);n!==null&&n.tag===5&&n.type==="form"?Gp(n):ka.r(e)}var dl=typeof document>"u"?null:document;function kf(e,n,a){var i=dl;if(i&&typeof n=="string"&&n){var r=Rn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),Sf.has(r)||(Sf.add(r),e={rel:e,crossOrigin:a,href:n},i.querySelector(r)===null&&(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function Rg(e){ka.D(e),kf("dns-prefetch",e,null)}function Hg(e,n){ka.C(e,n),kf("preconnect",e,n)}function Lg(e,n,a){ka.L(e,n,a);var i=dl;if(i&&e&&n){var r='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Rn(a.imageSizes)+'"]')):r+='[href="'+Rn(e)+'"]';var c=r;switch(n){case"style":c=ul(e);break;case"script":c=pl(e)}Qn.has(c)||(e=w({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Qn.set(c,e),i.querySelector(r)!==null||n==="style"&&i.querySelector(Il(c))||n==="script"&&i.querySelector(es(c))||(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function qg(e,n){ka.m(e,n);var a=dl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Rn(i)+'"][href="'+Rn(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pl(e)}if(!Qn.has(c)&&(e=w({rel:"modulepreload",href:e},n),Qn.set(c,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(es(c)))return}i=a.createElement("link"),ln(i,"link",e),Pt(i),a.head.appendChild(i)}}}function Bg(e,n,a){ka.S(e,n,a);var i=dl;if(i&&e){var r=Oa(i).hoistableStyles,c=ul(e);n=n||"default";var p=r.get(c);if(!p){var x={loading:0,preload:null};if(p=i.querySelector(Il(c)))x.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Qn.get(c))&&Pc(e,a);var E=p=i.createElement("link");Pt(E),ln(E,"link",e),E._p=new Promise(function(Z,te){E.onload=Z,E.onerror=te}),E.addEventListener("load",function(){x.loading|=1}),E.addEventListener("error",function(){x.loading|=2}),x.loading|=4,vo(p,n,i)}p={type:"stylesheet",instance:p,count:1,state:x},r.set(c,p)}}}function Gg(e,n){ka.X(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(es(r)),c||(e=w({src:e,async:!0},n),(n=Qn.get(r))&&Wc(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function $g(e,n){ka.M(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(es(r)),c||(e=w({src:e,async:!0,type:"module"},n),(n=Qn.get(r))&&Wc(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Cf(e,n,a,i){var r=(r=Me.current)?yo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ul(a.href),a=Oa(r).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ul(a.href);var c=Oa(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Il(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Qn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(e,a),c||Yg(r,e,a,p.state))),n&&i===null)throw Error(d(528,""));return p}if(n&&i!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pl(a),a=Oa(r).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ul(e){return'href="'+Rn(e)+'"'}function Il(e){return'link[rel="stylesheet"]['+e+"]"}function zf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Yg(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),ln(n,"link",a),Pt(n),e.head.appendChild(n))}function pl(e){return'[src="'+Rn(e)+'"]'}function es(e){return"script[async]"+e}function Tf(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(i)return n.instance=i,Pt(i),i;var r=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Pt(i),ln(i,"style",r),vo(i,a.precedence,e),n.instance=i;case"stylesheet":r=ul(a.href);var c=e.querySelector(Il(r));if(c)return n.state.loading|=4,n.instance=c,Pt(c),c;i=zf(a),(r=Qn.get(r))&&Pc(i,r),c=(e.ownerDocument||e).createElement("link"),Pt(c);var p=c;return p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),ln(c,"link",i),n.state.loading|=4,vo(c,a.precedence,e),n.instance=c;case"script":return c=pl(a.src),(r=e.querySelector(es(c)))?(n.instance=r,Pt(r),r):(i=a,(r=Qn.get(c))&&(i=w({},a),Wc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pt(r),ln(r,"link",i),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,vo(i,a.precedence,e));return n.instance}function vo(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var x=i[p];if(x.dataset.precedence===n)c=x;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Pc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Wc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var jo=null;function Ef(e,n,a){if(jo===null){var i=new Map,r=jo=new Map;r.set(a,i)}else r=jo,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[tt]||c[Dt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var x=i.get(p);x?x.push(c):i.set(p,[c])}}return i}function Mf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Qg(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Df(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Xg(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ul(i.href),c=n.querySelector(Il(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=wo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Pt(c);return}c=n.ownerDocument||n,i=zf(i),(r=Qn.get(r))&&Pc(i,r),c=c.createElement("link"),Pt(c);var p=c;p._p=new Promise(function(x,E){p.onload=x,p.onerror=E}),ln(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=wo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Ic=0;function Zg(e,n){return e.stylesheets&&e.count===0&&No(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&No(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Ic===0&&(Ic=62500*kg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&No(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Ic?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function wo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)No(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var _o=null;function No(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,_o=new Map,n.forEach(Kg,e),_o=null,wo.call(e))}function Kg(e,n){if(!(n.state.loading&4)){var a=_o.get(e);if(a)var i=a.get(null);else{a=new Map,_o.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||i,c===i&&a.set(null,r),a.set(p,r),this.count++,i=wo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var ts={$$typeof:H,Provider:null,Consumer:null,_currentValue:T,_currentValue2:T,_threadCount:0};function Fg(e,n,a,i,r,c,p,x,E){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.hiddenUpdates=Be(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=E,this.incompleteTransitions=new Map}function Af(e,n,a,i,r,c,p,x,E,Z,te,re){return e=new Fg(e,n,a,p,E,Z,te,re,x),n=1,c===!0&&(n|=24),c=Nn(3,null,null,n),e.current=c,c.stateNode=e,n=Dr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:n},Rr(c),e}function Of(e){return e?(e=Yi,e):Yi}function Uf(e,n,a,i,r,c){r=Of(r),i.context===null?i.context=r:i.pendingContext=r,i=Ga(n),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=$a(e,i,n),a!==null&&(wn(a,e,n),Al(a,e,n))}function Rf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function ed(e,n){Rf(e,n),(e=e.alternate)&&Rf(e,n)}function Hf(e){if(e.tag===13||e.tag===31){var n=gi(e,67108864);n!==null&&wn(n,e,67108864),ed(e,67108864)}}function Lf(e){if(e.tag===13||e.tag===31){var n=Tn();n=gt(n);var a=gi(e,n);a!==null&&wn(a,e,n),ed(e,n)}}var So=!0;function Vg(e,n,a,i){var r=z.T;z.T=null;var c=V.p;try{V.p=2,td(e,n,a,i)}finally{V.p=c,z.T=r}}function Jg(e,n,a,i){var r=z.T;z.T=null;var c=V.p;try{V.p=8,td(e,n,a,i)}finally{V.p=c,z.T=r}}function td(e,n,a,i){if(So){var r=nd(i);if(r===null)Gc(e,n,i,ko,a),Bf(e,i);else if(Wg(r,e,n,a,i))i.stopPropagation();else if(Bf(e,i),n&4&&-1<Pg.indexOf(e)){for(;r!==null;){var c=ea(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=pn(c.pendingLanes);if(p!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;p;){var E=1<<31-nt(p);x.entanglements[1]|=E,p&=~E}ia(c),(st&6)===0&&(oo=rt()+500,Vl(0))}}break;case 31:case 13:x=gi(c,2),x!==null&&wn(x,c,2),co(),ed(c,2)}if(c=nd(i),c===null&&Gc(e,n,i,ko,a),c===r)break;r=c}r!==null&&i.stopPropagation()}else Gc(e,n,i,null,a)}}function nd(e){return e=ir(e),ad(e)}var ko=null;function ad(e){if(ko=null,e=qt(e),e!==null){var n=m(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=C(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ko=e,null}function qf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case An:return 2;case hn:return 8;case F:case ze:return 32;case we:return 268435456;default:return 32}default:return 32}}var id=!1,Ia=null,ei=null,ti=null,ns=new Map,as=new Map,ni=[],Pg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bf(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ns.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(n.pointerId)}}function is(e,n,a,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},n!==null&&(n=ea(n),n!==null&&Hf(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Wg(e,n,a,i,r){switch(n){case"focusin":return Ia=is(Ia,e,n,a,i,r),!0;case"dragenter":return ei=is(ei,e,n,a,i,r),!0;case"mouseover":return ti=is(ti,e,n,a,i,r),!0;case"pointerover":var c=r.pointerId;return ns.set(c,is(ns.get(c)||null,e,n,a,i,r)),!0;case"gotpointercapture":return c=r.pointerId,as.set(c,is(as.get(c)||null,e,n,a,i,r)),!0}return!1}function Gf(e){var n=qt(e.target);if(n!==null){var a=m(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,yt(e.priority,function(){Lf(a)});return}}else if(n===31){if(n=C(a),n!==null){e.blockedOn=n,yt(e.priority,function(){Lf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Co(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=nd(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);ar=i,a.target.dispatchEvent(i),ar=null}else return n=ea(a),n!==null&&Hf(n),e.blockedOn=a,!1;n.shift()}return!0}function $f(e,n,a){Co(e)&&a.delete(n)}function Ig(){id=!1,Ia!==null&&Co(Ia)&&(Ia=null),ei!==null&&Co(ei)&&(ei=null),ti!==null&&Co(ti)&&(ti=null),ns.forEach($f),as.forEach($f)}function zo(e,n){e.blockedOn===n&&(e.blockedOn=null,id||(id=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Ig)))}var To=null;function Yf(e){To!==e&&(To=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){To===e&&(To=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],r=e[n+2];if(typeof i!="function"){if(ad(i||a)===null)continue;break}var c=ea(a);c!==null&&(e.splice(n,3),n-=3,nc(c,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function ml(e){function n(E){return zo(E,e)}Ia!==null&&zo(Ia,e),ei!==null&&zo(ei,e),ti!==null&&zo(ti,e),ns.forEach(n),as.forEach(n);for(var a=0;a<ni.length;a++){var i=ni[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ni.length&&(a=ni[0],a.blockedOn===null);)Gf(a),a.blockedOn===null&&ni.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],c=a[i+1],p=r[St]||null;if(typeof c=="function")p||Yf(a);else if(p){var x=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[St]||null)x=p.formAction;else if(ad(r)!==null)continue}else x=p.action;typeof x=="function"?a[i+1]=x:(a.splice(i,3),i-=3),Yf(a)}}}function Qf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function ld(e){this._internalRoot=e}Eo.prototype.render=ld.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,i=Tn();Uf(a,i,e,n,null,null)},Eo.prototype.unmount=ld.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Uf(e.current,2,null,e,null,null),co(),n[Aa]=null}};function Eo(e){this._internalRoot=e}Eo.prototype.unstable_scheduleHydration=function(e){if(e){var n=oa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ni.length&&n!==0&&n<ni[a].priority;a++);ni.splice(a,0,e),a===0&&Gf(e)}};var Xf=l.version;if(Xf!=="19.2.6")throw Error(d(527,Xf,"19.2.6"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=b(n),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var ey={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{He=Mo.inject(ey),qe=Mo}catch{}}return ss.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,i="",r=Pp,c=Wp,p=Ip;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Af(e,1,!1,null,null,a,i,null,r,c,p,Qf),e[Aa]=n.current,Bc(e),new ld(n)},ss.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var i=!1,r="",c=Pp,p=Wp,x=Ip,E=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(x=a.onRecoverableError),a.formState!==void 0&&(E=a.formState)),n=Af(e,1,!0,n,a??null,i,r,E,c,p,x,Qf),n.context=Of(null),a=n.current,i=Tn(),i=gt(i),r=Ga(i),r.callback=null,$a(a,r,i),a=i,n.current.lanes=a,We(n,a),ia(n),e[Aa]=n.current,Bc(e),new Eo(n)},ss.version="19.2.6",ss}var th;function my(){if(th)return rd.exports;th=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),rd.exports=py(),rd.exports}var fy=my(),ox=sx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ms.apply(this,arguments)}var ri;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ri||(ri={}));const nh="popstate";function hy(s){s===void 0&&(s={});function l(u,m){let{pathname:f="/",search:C="",hash:g=""}=Ai(u.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Td("",{pathname:f,search:C,hash:g},m.state&&m.state.usr||null,m.state&&m.state.key||"default")}function o(u,m){let f=u.document.querySelector("base"),C="";if(f&&f.getAttribute("href")){let g=u.location.href,b=g.indexOf("#");C=b===-1?g:g.slice(0,b)}return C+"#"+(typeof m=="string"?m:Yo(m))}function d(u,m){Jo(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(m)+")")}return by(l,o,d,s)}function Ut(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function Jo(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function xy(){return Math.random().toString(36).substr(2,8)}function ah(s,l){return{usr:s.state,key:s.key,idx:l}}function Td(s,l,o,d){return o===void 0&&(o=null),ms({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?Ai(l):l,{state:o,key:l&&l.key||d||xy()})}function Yo(s){let{pathname:l="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Ai(s){let l={};if(s){let o=s.indexOf("#");o>=0&&(l.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function by(s,l,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:m=!1}=d,f=u.history,C=ri.Pop,g=null,b=j();b==null&&(b=0,f.replaceState(ms({},f.state,{idx:b}),""));function j(){return(f.state||{idx:null}).idx}function w(){C=ri.Pop;let D=j(),Q=D==null?null:D-b;b=D,g&&g({action:C,location:Y.location,delta:Q})}function S(D,Q){C=ri.Push;let U=Td(Y.location,D,Q);o&&o(U,D),b=j()+1;let H=ah(U,b),ae=Y.createHref(U);try{f.pushState(H,"",ae)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(ae)}m&&g&&g({action:C,location:Y.location,delta:1})}function B(D,Q){C=ri.Replace;let U=Td(Y.location,D,Q);o&&o(U,D),b=j();let H=ah(U,b),ae=Y.createHref(U);f.replaceState(H,"",ae),m&&g&&g({action:C,location:Y.location,delta:0})}function I(D){let Q=u.location.origin!=="null"?u.location.origin:u.location.href,U=typeof D=="string"?D:Yo(D);return U=U.replace(/ $/,"%20"),Ut(Q,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,Q)}let Y={get action(){return C},get location(){return s(u,f)},listen(D){if(g)throw new Error("A history only accepts one active listener");return u.addEventListener(nh,w),g=D,()=>{u.removeEventListener(nh,w),g=null}},createHref(D){return l(u,D)},createURL:I,encodeLocation(D){let Q=I(D);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:S,replace:B,go(D){return f.go(D)}};return Y}var ih;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(ih||(ih={}));function gy(s,l,o){return o===void 0&&(o="/"),yy(s,l,o)}function yy(s,l,o,d){let u=typeof l=="string"?Ai(l):l,m=Qd(u.pathname||"/",o);if(m==null)return null;let f=rx(s);vy(f);let C=null;for(let g=0;C==null&&g<f.length;++g){let b=Dy(m);C=Ty(f[g],b)}return C}function rx(s,l,o,d){l===void 0&&(l=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(m,f,C)=>{let g={relativePath:C===void 0?m.path||"":C,caseSensitive:m.caseSensitive===!0,childrenIndex:f,route:m};g.relativePath.startsWith("/")&&(Ut(g.relativePath.startsWith(d),'Absolute route path "'+g.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),g.relativePath=g.relativePath.slice(d.length));let b=ci([d,g.relativePath]),j=o.concat(g);m.children&&m.children.length>0&&(Ut(m.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+b+'".')),rx(m.children,l,j,b)),!(m.path==null&&!m.index)&&l.push({path:b,score:Cy(b,m.index),routesMeta:j})};return s.forEach((m,f)=>{var C;if(m.path===""||!((C=m.path)!=null&&C.includes("?")))u(m,f);else for(let g of cx(m.path))u(m,f,g)}),l}function cx(s){let l=s.split("/");if(l.length===0)return[];let[o,...d]=l,u=o.endsWith("?"),m=o.replace(/\?$/,"");if(d.length===0)return u?[m,""]:[m];let f=cx(d.join("/")),C=[];return C.push(...f.map(g=>g===""?m:[m,g].join("/"))),u&&C.push(...f),C.map(g=>s.startsWith("/")&&g===""?"/":g)}function vy(s){s.sort((l,o)=>l.score!==o.score?o.score-l.score:zy(l.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const jy=/^:[\w-]+$/,wy=3,_y=2,Ny=1,Sy=10,ky=-2,lh=s=>s==="*";function Cy(s,l){let o=s.split("/"),d=o.length;return o.some(lh)&&(d+=ky),l&&(d+=_y),o.filter(u=>!lh(u)).reduce((u,m)=>u+(jy.test(m)?wy:m===""?Ny:Sy),d)}function zy(s,l){return s.length===l.length&&s.slice(0,-1).every((d,u)=>d===l[u])?s[s.length-1]-l[l.length-1]:0}function Ty(s,l,o){let{routesMeta:d}=s,u={},m="/",f=[];for(let C=0;C<d.length;++C){let g=d[C],b=C===d.length-1,j=m==="/"?l:l.slice(m.length)||"/",w=Ey({path:g.relativePath,caseSensitive:g.caseSensitive,end:b},j),S=g.route;if(!w)return null;Object.assign(u,w.params),f.push({params:u,pathname:ci([m,w.pathname]),pathnameBase:Hy(ci([m,w.pathnameBase])),route:S}),w.pathnameBase!=="/"&&(m=ci([m,w.pathnameBase]))}return f}function Ey(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=My(s.path,s.caseSensitive,s.end),u=l.match(o);if(!u)return null;let m=u[0],f=m.replace(/(.)\/+$/,"$1"),C=u.slice(1);return{params:d.reduce((b,j,w)=>{let{paramName:S,isOptional:B}=j;if(S==="*"){let Y=C[w]||"";f=m.slice(0,m.length-Y.length).replace(/(.)\/+$/,"$1")}const I=C[w];return B&&!I?b[S]=void 0:b[S]=(I||"").replace(/%2F/g,"/"),b},{}),pathname:m,pathnameBase:f,pattern:s}}function My(s,l,o){l===void 0&&(l=!1),o===void 0&&(o=!0),Jo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,C,g)=>(d.push({paramName:C,isOptional:g!=null}),g?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),d]}function Dy(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Jo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function Qd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Ay=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Oy=s=>Ay.test(s);function Uy(s,l){l===void 0&&(l="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Ai(s):s,m;if(o)if(Oy(o))m=o;else{if(o.includes("//")){let f=o;o=o.replace(/\/\/+/g,"/"),Jo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+o))}o.startsWith("/")?m=sh(o.substring(1),"/"):m=sh(o,l)}else m=l;return{pathname:m,search:Ly(d),hash:qy(u)}}function sh(s,l){let o=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function pd(s,l,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ry(s){return s.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function Xd(s,l){let o=Ry(s);return l?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Zd(s,l,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Ai(s):(u=ms({},s),Ut(!u.pathname||!u.pathname.includes("?"),pd("?","pathname","search",u)),Ut(!u.pathname||!u.pathname.includes("#"),pd("#","pathname","hash",u)),Ut(!u.search||!u.search.includes("#"),pd("#","search","hash",u)));let m=s===""||u.pathname==="",f=m?"/":u.pathname,C;if(f==null)C=o;else{let w=l.length-1;if(!d&&f.startsWith("..")){let S=f.split("/");for(;S[0]==="..";)S.shift(),w-=1;u.pathname=S.join("/")}C=w>=0?l[w]:"/"}let g=Uy(u,C),b=f&&f!=="/"&&f.endsWith("/"),j=(m||f===".")&&o.endsWith("/");return!g.pathname.endsWith("/")&&(b||j)&&(g.pathname+="/"),g}const ci=s=>s.join("/").replace(/\/\/+/g,"/"),Hy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ly=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,qy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function By(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const dx=["post","put","patch","delete"];new Set(dx);const Gy=["get",...dx];new Set(Gy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function fs(){return fs=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},fs.apply(this,arguments)}const Kd=h.createContext(null),$y=h.createContext(null),ui=h.createContext(null),Po=h.createContext(null),pi=h.createContext({outlet:null,matches:[],isDataRoute:!1}),ux=h.createContext(null);function Yy(s,l){let{relative:o}=l===void 0?{}:l;xl()||Ut(!1);let{basename:d,navigator:u}=h.useContext(ui),{hash:m,pathname:f,search:C}=mx(s,{relative:o}),g=f;return d!=="/"&&(g=f==="/"?d:ci([d,f])),u.createHref({pathname:g,search:C,hash:m})}function xl(){return h.useContext(Po)!=null}function sa(){return xl()||Ut(!1),h.useContext(Po).location}function px(s){h.useContext(ui).static||h.useLayoutEffect(s)}function Fd(){let{isDataRoute:s}=h.useContext(pi);return s?nv():Qy()}function Qy(){xl()||Ut(!1);let s=h.useContext(Kd),{basename:l,future:o,navigator:d}=h.useContext(ui),{matches:u}=h.useContext(pi),{pathname:m}=sa(),f=JSON.stringify(Xd(u,o.v7_relativeSplatPath)),C=h.useRef(!1);return px(()=>{C.current=!0}),h.useCallback(function(b,j){if(j===void 0&&(j={}),!C.current)return;if(typeof b=="number"){d.go(b);return}let w=Zd(b,JSON.parse(f),m,j.relative==="path");s==null&&l!=="/"&&(w.pathname=w.pathname==="/"?l:ci([l,w.pathname])),(j.replace?d.replace:d.push)(w,j.state,j)},[l,d,f,m,s])}function mx(s,l){let{relative:o}=l===void 0?{}:l,{future:d}=h.useContext(ui),{matches:u}=h.useContext(pi),{pathname:m}=sa(),f=JSON.stringify(Xd(u,d.v7_relativeSplatPath));return h.useMemo(()=>Zd(s,JSON.parse(f),m,o==="path"),[s,f,m,o])}function Xy(s,l){return Zy(s,l)}function Zy(s,l,o,d){xl()||Ut(!1);let{navigator:u}=h.useContext(ui),{matches:m}=h.useContext(pi),f=m[m.length-1],C=f?f.params:{};f&&f.pathname;let g=f?f.pathnameBase:"/";f&&f.route;let b=sa(),j;if(l){var w;let D=typeof l=="string"?Ai(l):l;g==="/"||(w=D.pathname)!=null&&w.startsWith(g)||Ut(!1),j=D}else j=b;let S=j.pathname||"/",B=S;if(g!=="/"){let D=g.replace(/^\//,"").split("/");B="/"+S.replace(/^\//,"").split("/").slice(D.length).join("/")}let I=gy(s,{pathname:B}),Y=Py(I&&I.map(D=>Object.assign({},D,{params:Object.assign({},C,D.params),pathname:ci([g,u.encodeLocation?u.encodeLocation(D.pathname).pathname:D.pathname]),pathnameBase:D.pathnameBase==="/"?g:ci([g,u.encodeLocation?u.encodeLocation(D.pathnameBase).pathname:D.pathnameBase])})),m,o,d);return l&&Y?h.createElement(Po.Provider,{value:{location:fs({pathname:"/",search:"",hash:"",state:null,key:"default"},j),navigationType:ri.Pop}},Y):Y}function Ky(){let s=tv(),l=By(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},l),o?h.createElement("pre",{style:u},o):null,null)}const Fy=h.createElement(Ky,null);class Vy extends h.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?h.createElement(pi.Provider,{value:this.props.routeContext},h.createElement(ux.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Jy(s){let{routeContext:l,match:o,children:d}=s,u=h.useContext(Kd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(pi.Provider,{value:l},d)}function Py(s,l,o,d){var u;if(l===void 0&&(l=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var m;if(!o)return null;if(o.errors)s=o.matches;else if((m=d)!=null&&m.v7_partialHydration&&l.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let f=s,C=(u=o)==null?void 0:u.errors;if(C!=null){let j=f.findIndex(w=>w.route.id&&(C==null?void 0:C[w.route.id])!==void 0);j>=0||Ut(!1),f=f.slice(0,Math.min(f.length,j+1))}let g=!1,b=-1;if(o&&d&&d.v7_partialHydration)for(let j=0;j<f.length;j++){let w=f[j];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(b=j),w.route.id){let{loaderData:S,errors:B}=o,I=w.route.loader&&S[w.route.id]===void 0&&(!B||B[w.route.id]===void 0);if(w.route.lazy||I){g=!0,b>=0?f=f.slice(0,b+1):f=[f[0]];break}}}return f.reduceRight((j,w,S)=>{let B,I=!1,Y=null,D=null;o&&(B=C&&w.route.id?C[w.route.id]:void 0,Y=w.route.errorElement||Fy,g&&(b<0&&S===0?(av("route-fallback"),I=!0,D=null):b===S&&(I=!0,D=w.route.hydrateFallbackElement||null)));let Q=l.concat(f.slice(0,S+1)),U=()=>{let H;return B?H=Y:I?H=D:w.route.Component?H=h.createElement(w.route.Component,null):w.route.element?H=w.route.element:H=j,h.createElement(Jy,{match:w,routeContext:{outlet:j,matches:Q,isDataRoute:o!=null},children:H})};return o&&(w.route.ErrorBoundary||w.route.errorElement||S===0)?h.createElement(Vy,{location:o.location,revalidation:o.revalidation,component:Y,error:B,children:U(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):U()},null)}var fx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(fx||{}),hx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(hx||{});function Wy(s){let l=h.useContext(Kd);return l||Ut(!1),l}function Iy(s){let l=h.useContext($y);return l||Ut(!1),l}function ev(s){let l=h.useContext(pi);return l||Ut(!1),l}function xx(s){let l=ev(),o=l.matches[l.matches.length-1];return o.route.id||Ut(!1),o.route.id}function tv(){var s;let l=h.useContext(ux),o=Iy(),d=xx();return l!==void 0?l:(s=o.errors)==null?void 0:s[d]}function nv(){let{router:s}=Wy(fx.UseNavigateStable),l=xx(hx.UseNavigateStable),o=h.useRef(!1);return px(()=>{o.current=!0}),h.useCallback(function(u,m){m===void 0&&(m={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,fs({fromRouteId:l},m)))},[s,l])}const oh={};function av(s,l,o){oh[s]||(oh[s]=!0)}function iv(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function rh(s){let{to:l,replace:o,state:d,relative:u}=s;xl()||Ut(!1);let{future:m,static:f}=h.useContext(ui),{matches:C}=h.useContext(pi),{pathname:g}=sa(),b=Fd(),j=Zd(l,Xd(C,m.v7_relativeSplatPath),g,u==="path"),w=JSON.stringify(j);return h.useEffect(()=>b(JSON.parse(w),{replace:o,state:d,relative:u}),[b,w,u,o,d]),null}function kt(s){Ut(!1)}function lv(s){let{basename:l="/",children:o=null,location:d,navigationType:u=ri.Pop,navigator:m,static:f=!1,future:C}=s;xl()&&Ut(!1);let g=l.replace(/^\/*/,"/"),b=h.useMemo(()=>({basename:g,navigator:m,static:f,future:fs({v7_relativeSplatPath:!1},C)}),[g,C,m,f]);typeof d=="string"&&(d=Ai(d));let{pathname:j="/",search:w="",hash:S="",state:B=null,key:I="default"}=d,Y=h.useMemo(()=>{let D=Qd(j,g);return D==null?null:{location:{pathname:D,search:w,hash:S,state:B,key:I},navigationType:u}},[g,j,w,S,B,I,u]);return Y==null?null:h.createElement(ui.Provider,{value:b},h.createElement(Po.Provider,{children:o,value:Y}))}function sv(s){let{children:l,location:o}=s;return Xy(Ed(l),o)}new Promise(()=>{});function Ed(s,l){l===void 0&&(l=[]);let o=[];return h.Children.forEach(s,(d,u)=>{if(!h.isValidElement(d))return;let m=[...l,u];if(d.type===h.Fragment){o.push.apply(o,Ed(d.props.children,m));return}d.type!==kt&&Ut(!1),!d.props.index||!d.props.children||Ut(!1);let f={id:d.props.id||m.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(f.children=Ed(d.props.children,m)),o.push(f)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Md.apply(this,arguments)}function ov(s,l){if(s==null)return{};var o={},d=Object.keys(s),u,m;for(m=0;m<d.length;m++)u=d[m],!(l.indexOf(u)>=0)&&(o[u]=s[u]);return o}function rv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function cv(s,l){return s.button===0&&(!l||l==="_self")&&!rv(s)}const dv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],uv="6";try{window.__reactRouterVersion=uv}catch{}const pv="startTransition",ch=ry[pv];function mv(s){let{basename:l,children:o,future:d,window:u}=s,m=h.useRef();m.current==null&&(m.current=hy({window:u,v5Compat:!0}));let f=m.current,[C,g]=h.useState({action:f.action,location:f.location}),{v7_startTransition:b}=d||{},j=h.useCallback(w=>{b&&ch?ch(()=>g(w)):g(w)},[g,b]);return h.useLayoutEffect(()=>f.listen(j),[f,j]),h.useEffect(()=>iv(d),[d]),h.createElement(lv,{basename:l,children:o,location:C.location,navigationType:C.action,navigator:f,future:d})}const fv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",hv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,xv=h.forwardRef(function(l,o){let{onClick:d,relative:u,reloadDocument:m,replace:f,state:C,target:g,to:b,preventScrollReset:j,viewTransition:w}=l,S=ov(l,dv),{basename:B}=h.useContext(ui),I,Y=!1;if(typeof b=="string"&&hv.test(b)&&(I=b,fv))try{let H=new URL(window.location.href),ae=b.startsWith("//")?new URL(H.protocol+b):new URL(b),P=Qd(ae.pathname,B);ae.origin===H.origin&&P!=null?b=P+ae.search+ae.hash:Y=!0}catch{}let D=Yy(b,{relative:u}),Q=bv(b,{replace:f,state:C,target:g,preventScrollReset:j,relative:u,viewTransition:w});function U(H){d&&d(H),H.defaultPrevented||Q(H)}return h.createElement("a",Md({},S,{href:I||D,onClick:Y||m?d:U,ref:o,target:g}))});var dh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(dh||(dh={}));var uh;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(uh||(uh={}));function bv(s,l){let{target:o,replace:d,state:u,preventScrollReset:m,relative:f,viewTransition:C}=l===void 0?{}:l,g=Fd(),b=sa(),j=mx(s,{relative:f});return h.useCallback(w=>{if(cv(w,o)){w.preventDefault();let S=d!==void 0?d:Yo(b)===Yo(j);g(s,{replace:S,state:u,preventScrollReset:m,relative:f,viewTransition:C})}},[b,g,j,d,u,o,s,m,f,C])}function Rt(){const s=Fd();return h.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function gv(){return sa().pathname}function yv({href:s,...l}){return t.jsx(xv,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),bx=(...s)=>s.filter((l,o,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var jv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=h.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:m,iconNode:f,...C},g)=>h.createElement("svg",{ref:g,...jv,width:l,height:l,stroke:s,strokeWidth:d?Number(o)*24/Number(l):o,className:bx("lucide",u),...C},[...f.map(([b,j])=>h.createElement(b,j)),...Array.isArray(m)?m:[m]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(s,l)=>{const o=h.forwardRef(({className:d,...u},m)=>h.createElement(wv,{ref:m,iconNode:l,className:bx(`lucide-${vv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ve("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ve("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ve("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ve("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=ve("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ve("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ve("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=ve("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=ve("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=ve("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ve("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=ve("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ve("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ve("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ve("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ve("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ve("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ve("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ve("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=ve("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ve("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ve("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ve("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=ve("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ve("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ve("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ve("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ve("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=ve("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=ve("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ve("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ve("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ve("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ve("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yx=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ve("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ve("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=ve("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=ve("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=ve("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ve("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=ve("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ve("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=ve("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vx=ve("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ve("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ve("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=ve("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=ve("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ve("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ve("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ve("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=ve("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=ve("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=ve("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=ve("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wx=ve("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=ve("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=ve("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=ve("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=ve("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=ve("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=ve("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),o0="/api/v3";var lx;const ge=typeof window<"u"&&((lx=window.settings)==null?void 0:lx.secure_path)||"ZicFree123",$o="authorization";function r0(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(l)===0)try{const m=u.substring(l.length,u.length),f=decodeURIComponent(m),C=JSON.parse(f);return C&&typeof C=="object"&&"value"in C?C.value:f}catch{try{return decodeURIComponent(u.substring(l.length,u.length))}catch{return u.substring(l.length,u.length)}}}return null}function c0(s,l,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:l}),m=window.location.protocol==="https:",f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",C=new Date;C.setTime(C.getTime()+o*24*60*60*1e3);const g=`expires=${C.toUTCString()}`,b=f?"":`domain=${window.location.hostname};`;let j=`${s}=${encodeURIComponent(u)}; ${g}; ${b} path=/`;m&&(j+="; secure"),j+="; SameSite=Lax",document.cookie=j;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function d0(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,o=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(m=>{const f=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${f} path=${m};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function _x(){if(typeof window>"u")return null;let s=window.localStorage.getItem($o);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem($o,s)}catch{}if(!s&&(s=r0("auth_data"),s))try{window.localStorage.setItem($o,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function u0(s,l){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${o0}${o}`,window.location.origin);return Object.entries(l??{}).forEach(([u,m])=>{m!==void 0&&d.searchParams.set(u,String(m))}),d.toString()}function Ht(){return!!_x()}function p0(s){typeof window>"u"||(window.localStorage.setItem($o,s),window.localStorage.setItem("auth_data",s),c0("auth_data",s,36500))}function Nx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(m=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${m};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,d0(u)})}async function xe(s,l={}){const o={},d=l.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),l.auth!==!1){const g=_x();g&&(o.authorization=g)}const u=await fetch(u0(s,l.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),f=(u.headers.get("content-type")||"").includes("application/json"),C=f?await u.json():await u.text();if(!u.ok){const g=typeof C=="object"&&C&&"message"in C?String(C.message):`Request failed with status ${u.status}`,b=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(g);throw(u.status===401||u.status===403&&!b)&&l.auth!==!1&&(Nx(),window.location.hash="/login"),new Error(g)}if(!f&&typeof C=="string"&&(C.trim().startsWith("<!DOCTYPE html")||C.trim().startsWith("<html")||C.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return C}async function m0(s,l){return xe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function f0(){const s=`/${ge}/stat`,[l,o,d,u,m,f]=await Promise.all([xe(`${s}/getOverride`),xe(`${s}/getOrder`),xe(`${s}/getServerTodayRank`),xe(`${s}/getServerLastRank`),xe(`${s}/getUserTodayRank`),xe(`${s}/getUserLastRank`)]);return{override:l.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:m.data,userYesterday:f.data}}async function Sx(){return(await xe(`/${ge}/config/fetch`)).data}async function kx(s){return xe(`/${ge}/config/save`,{method:"POST",body:s})}async function h0(){return(await xe(`/${ge}/config/getEmailTemplate`)).data}async function x0(){return(await xe(`/${ge}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function b0(){return xe(`/${ge}/config/testSendMail`,{method:"POST",body:{}})}async function g0(s){return xe(`/${ge}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function y0(){return(await xe(`/${ge}/payment/fetch`)).data}async function v0(){return(await xe(`/${ge}/payment/getPaymentMethods`)).data}async function vh(s,l){return(await xe(`/${ge}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function j0(s){return xe(`/${ge}/payment/save`,{method:"POST",body:s})}async function w0(s){return xe(`/${ge}/payment/show`,{method:"POST",body:{id:s}})}async function _0(s){return xe(`/${ge}/payment/drop`,{method:"POST",body:{id:s}})}async function N0(s){return xe(`/${ge}/payment/sort`,{method:"POST",body:{ids:s}})}async function S0(){return(await xe(`/${ge}/theme/getThemes`)).data}async function k0(s){return(await xe(`/${ge}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function C0(s,l){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return xe(`/${ge}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function bs(){return(await xe(`/${ge}/server/group/fetch`)).data}async function Cx(s){return xe(`/${ge}/server/group/save`,{method:"POST",body:s})}async function z0(s){return xe(`/${ge}/server/group/drop`,{method:"POST",body:{id:s}})}const zx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Tx(){return(await xe(`/${ge}/server/route/fetch`)).data}async function T0(s){return xe(`/${ge}/server/route/save`,{method:"POST",body:s})}async function E0(s){return xe(`/${ge}/server/route/drop`,{method:"POST",body:{id:s}})}async function mi(){return(await xe(`/${ge}/plan/fetch`)).data}async function M0(s){return xe(`/${ge}/plan/save`,{method:"POST",body:s})}async function D0(s){return xe(`/${ge}/plan/drop`,{method:"POST",body:{id:s}})}async function md(s,l){return xe(`/${ge}/plan/update`,{method:"POST",body:{id:s,...l}})}async function jh(s){return xe(`/${ge}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function A0(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{l.set(`filter[${u}][key]`,d.key),l.set(`filter[${u}][condition]`,d.condition),l.set(`filter[${u}][value]`,d.value)}),await xe(`/${ge}/order/fetch?${l.toString()}`)}async function O0(s){return xe(`/${ge}/order/paid`,{method:"POST",body:{trade_no:s}})}async function U0(s){return xe(`/${ge}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function Pd(s){return xe(`/${ge}/order/assign`,{method:"POST",body:s})}async function R0(s,l){return xe(`/${ge}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function H0(s){return xe(`/${ge}/order/detail`,{method:"POST",body:{id:s}})}async function Ex(s=1,l=15){return xe(`/${ge}/coupon/fetch?current=${s}&pageSize=${l}`)}async function L0(s){return xe(`/${ge}/coupon/generate`,{method:"POST",body:s})}async function q0(s){return xe(`/${ge}/coupon/drop`,{method:"POST",body:{id:s}})}async function B0(s){return xe(`/${ge}/coupon/show`,{method:"POST",body:{id:s}})}async function G0(s=1,l=15){return xe(`/${ge}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function $0(s){return xe(`/${ge}/giftcard/generate`,{method:"POST",body:s})}async function Y0(s){return xe(`/${ge}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Hd(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o&&o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${ge}/user/fetch?${d.toString()}`)}async function Q0(s){return xe(`/${ge}/user/update`,{method:"POST",body:s})}async function Mx(s){return xe(`/${ge}/user/getUserInfoById`,{params:{id:s}})}async function X0(s){return xe(`/${ge}/user/delUser`,{method:"POST",body:{id:s}})}async function Z0(s){return xe(`/${ge}/user/generate`,{method:"POST",body:s})}async function K0(s){return xe(`/${ge}/user/resetSecret`,{method:"POST",body:{id:s}})}async function F0(s=1,l=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(l)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((m,f)=>{u.set(`filter[${f}][key]`,m.key),u.set(`filter[${f}][condition]`,m.condition),u.set(`filter[${f}][value]`,m.value)}),xe(`/${ge}/subscription/fetch?${u.toString()}`)}async function V0(s){return xe(`/${ge}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function J0(s){return xe(`/${ge}/subscription/update`,{method:"POST",body:s})}async function P0(s){return xe(`/${ge}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Dx(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o==null||o.forEach((u,m)=>{d.set(`filter[${m}][key]`,u.key),d.set(`filter[${m}][condition]`,u.condition),d.set(`filter[${m}][value]`,u.value)}),xe(`/${ge}/device/fetch?${d.toString()}`)}async function Ax(s){return xe(`/${ge}/device/drop`,{method:"POST",body:{id:s}})}async function Ox(s){return xe(`/${ge}/device/ban`,{method:"POST",body:{id:s}})}async function W0(s){return xe(`/${ge}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function I0(s,l=1,o=10){return xe(`/${ge}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:o}})}async function e1(){return(await xe(`/${ge}/notice/fetch`)).data}async function t1(s){return xe(`/${ge}/notice/save`,{method:"POST",body:s})}async function n1(s){return xe(`/${ge}/notice/drop`,{method:"POST",body:{id:s}})}async function a1(s){return xe(`/${ge}/notice/show`,{method:"POST",body:{id:s}})}async function i1(){return(await xe(`/${ge}/ticket/fetch`)).data}async function wh(s){return(await xe(`/${ge}/ticket/fetch`,{params:{id:s}})).data}async function l1(s,l){return xe(`/${ge}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function s1(s){return xe(`/${ge}/ticket/close`,{method:"POST",body:{id:s}})}async function o1(){return(await xe(`/${ge}/knowledge/fetch`)).data}async function r1(s){return(await xe(`/${ge}/knowledge/fetch`,{params:{id:s}})).data}async function c1(s){return xe(`/${ge}/knowledge/save`,{method:"POST",body:s})}async function d1(s){return xe(`/${ge}/knowledge/drop`,{method:"POST",body:{id:s}})}async function u1(s){return xe(`/${ge}/knowledge/show`,{method:"POST",body:{id:s}})}async function p1(){return(await xe(`/${ge}/webcon/fetch`)).data}async function m1(s){return xe(`/${ge}/webcon/save`,{method:"POST",body:s})}async function f1(s){return xe(`/${ge}/webcon/drop`,{method:"POST",body:{id:s}})}async function h1(s){return xe(`/${ge}/webcon/show`,{method:"POST",body:{id:s}})}async function x1(){return xe(`/${ge}/system/getSystemStatus`)}async function b1(){return(await xe(`/${ge}/system/getCoreLicenseStatus`)).data}async function g1(){return(await xe(`/${ge}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function y1(){return xe(`/${ge}/system/getQueueStats`)}async function v1(){return xe(`/${ge}/system/getQueueWorkload`)}async function j1(){return xe(`/${ge}/system/getSystemLog`)}async function _h(){return xe(`/${ge}/server/manage/getNodes`)}async function w1(s,l){return xe(`/${ge}/server/${s}/save`,{method:"POST",body:l})}async function _1(s,l){return xe(`/${ge}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function N1(s,l,o){return xe(`/${ge}/server/${s}/update`,{method:"POST",body:{id:l,show:o}})}async function S1(s,l){return xe(`/${ge}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function k1(s){return xe(`/${ge}/server/manage/sort`,{method:"POST",body:s})}const Wd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Ux="admin-locale",Ld="vi-VN",C1="/assets/adminzic",Rx=h.createContext(null);function z1(){if(typeof window>"u")return Ld;const s=localStorage.getItem(Ux);return s&&Wd.some(l=>l.code===s)?s:Ld}function T1(s,l){return l?Object.entries(l).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function E1(s){return new Promise((l,o)=>{var f;if(typeof window>"u"){l({});return}const d=(f=window.AdminNextI18n)==null?void 0:f[s];if(d){l(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var C;l(((C=window.AdminNextI18n)==null?void 0:C[s])??{})}),u.addEventListener("error",o);return}const m=document.createElement("script");m.src=`${C1}/i18n/${s}.js`,m.async=!0,m.dataset.adminNextLocale=s,m.onload=()=>{var C;return l(((C=window.AdminNextI18n)==null?void 0:C[s])??{})},m.onerror=o,document.head.appendChild(m)})}function M1({children:s}){const[l,o]=h.useState(Ld),[d,u]=h.useState({}),[m,f]=h.useState(!0);h.useEffect(()=>{o(z1())},[]);const C=h.useCallback(j=>{o(j),typeof window<"u"&&localStorage.setItem(Ux,j)},[]);h.useEffect(()=>{let j=!0;return f(!0),E1(l).then(w=>{j&&u(w)}).finally(()=>{j&&f(!1)}),()=>{j=!1}},[l]);const g=h.useCallback((j,w)=>T1(d[j]??j,w),[d]),b=h.useMemo(()=>({locale:l,loading:m,setLocale:C,t:g}),[l,m,C,g]);return t.jsx(Rx.Provider,{value:b,children:s})}function Ye(){const s=h.useContext(Rx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function D1(){const s=Rt(),{t:l,locale:o,setLocale:d}=Ye(),[u,m]=h.useState(""),[f,C]=h.useState(""),[g,b]=h.useState(""),[j,w]=h.useState(!1),[S,B]=h.useState(!1),I=h.useRef(null);h.useEffect(()=>{function D(Q){I.current&&!I.current.contains(Q.target)&&B(!1)}return document.addEventListener("mousedown",D),()=>document.removeEventListener("mousedown",D)},[]),h.useEffect(()=>{Ht()&&s.replace("/dashboard")},[s]);async function Y(D){var Q,U,H,ae;D.preventDefault(),b(""),w(!0);try{const P=await m0(u,f),de=((Q=P.data)==null?void 0:Q.auth_data)??((U=P.data)==null?void 0:U.token),A=((H=P.data)==null?void 0:H.is_admin)===1||((ae=P.data)==null?void 0:ae.is_admin)===!0;if(!de||!A)throw new Error(l("login.adminRequired"));p0(de),s.replace("/dashboard")}catch(P){b(P instanceof Error?P.message:l("login.failed"))}finally{w(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:I,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>B(D=>!D),children:t.jsx(gs,{size:17})}),S?t.jsx("div",{className:"locale-menu",children:Wd.map(D=>t.jsxs("button",{className:`locale-option ${o===D.code?"active":""}`,type:"button",onClick:()=>{d(D.code),B(!1)},children:[t.jsx("span",{className:"locale-flag",children:D.flag}),t.jsx("span",{children:D.label})]},D.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Jv,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(yx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:D=>m(D.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"email",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Gv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:D=>C(D.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:f})]})]}),g?t.jsx("div",{className:"form-error",children:g}):null,t.jsx("button",{className:"primary-button",disabled:j,type:"submit",children:l(j?"login.signingIn":"login.submit")})]})]})]})}function En(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function la(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function A1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const O1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Uv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Iv},{href:"/config/payment",label:"nav.paymentConfig",icon:Ev},{href:"/config/theme",label:"nav.themeConfig",icon:a0}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Jd},{href:"/server/group",label:"nav.groupManagement",icon:l0},{href:"/server/route",label:"nav.routeManagement",icon:Wv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:bh},{href:"/order",label:"nav.orders",icon:Bv},{href:"/coupon",label:"nav.coupons",icon:Rv},{href:"/giftcard",label:"nav.giftcards",icon:t0}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:wx},{href:"/subscription",label:"nav.subscriptions",icon:bh},{href:"/device",label:"nav.devices",icon:e0},{href:"/webcon",label:"nav.webcon",icon:gs},{href:"/notice",label:"nav.notices",icon:cs},{href:"/ticket",label:"nav.tickets",icon:qv},{href:"/knowledge",label:"nav.knowledge",icon:Sv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:kv}]}];function U1(){const[s,l]=h.useState("light");h.useEffect(()=>{const m=localStorage.getItem("admin-theme")??"light";l(m),document.documentElement.setAttribute("data-theme",m)},[]);const o=h.useCallback(u=>{l(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=h.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Hx(s){return s?new Date(s*1e3):null}function R1(s,l){const o=Hx(l);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function H1(s){const l=Hx(s);return l?Math.ceil((l.getTime()-Date.now())/864e5):null}function Ft({children:s,title:l,subtitle:o}){const[d,u]=h.useState(!1),m=Rt(),f=gv(),{t:C,locale:g,setLocale:b}=Ye(),{theme:j,toggle:w}=U1(),[S,B]=h.useState(!1),I=h.useRef(null),[Y,D]=h.useState(null),[Q,U]=h.useState(!1),H=h.useCallback(async(_=!1)=>{if(Ht()){U(_);try{D(_?await g1():await b1())}catch(R){D({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:C("license.unavailable"),error:R instanceof Error?R.message:C("license.unavailable")})}finally{U(!1)}}},[C]);h.useEffect(()=>{function _(R){I.current&&!I.current.contains(R.target)&&B(!1)}return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]),h.useEffect(()=>{H(!1);const _=window.setInterval(()=>{H(!1)},6e4);return()=>window.clearInterval(_)},[H]);function ae(){Nx(),m.replace("/login")}const P=(Y==null?void 0:Y.license_expires_at)??(Y==null?void 0:Y.expires_at),de=R1(g,P),A=typeof(Y==null?void 0:Y.days_until_expiry)=="number"?Y.days_until_expiry:H1(P),G=typeof A=="number"?A<=0?C("license.expiresToday"):C("license.daysLeft",{days:A}):null,ne=!!Y&&Y.available&&!Y.requires_renewal,be=ne&&!!(Y!=null&&Y.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:C("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:O1.map(_=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:C(_.label)}),_.items.map(R=>{const le=R.icon,$=f===R.href;return t.jsxs(yv,{className:`nav-item ${$?"active":""}`,href:R.href,onClick:()=>u(!1),children:[t.jsx(le,{size:17}),t.jsx("span",{children:C(R.label)})]},R.href)})]},_.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":C(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(_=>!_),children:d?t.jsx(lt,{size:19}):t.jsx(Yv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${be?"warning":""}`,type:"button",disabled:Q,title:C("license.refresh"),onClick:()=>void H(!0),children:[t.jsx(fh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:C("license.validUntil")}),t.jsx("strong",{children:de??C("license.unknownExpiry")})]}),G?t.jsx("small",{children:G}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:I,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":C("common.language"),onClick:()=>B(_=>!_),children:t.jsx(gs,{size:17})}),S?t.jsx("div",{className:"locale-menu",children:Wd.map(_=>t.jsxs("button",{className:`locale-option ${g===_.code?"active":""}`,type:"button",onClick:()=>{b(_.code),B(!1)},children:[t.jsx("span",{className:"locale-flag",children:_.flag}),t.jsx("span",{children:_.label})]},_.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":j==="dark"?"Switch to light mode":"Switch to dark mode",onClick:w,children:j==="dark"?t.jsx(n0,{size:17}):t.jsx(Qv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ae,children:[t.jsx($v,{size:16}),t.jsx("span",{children:C("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Y!=null&&Y.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Ud,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:C("license.renewTitle")}),t.jsx("p",{children:C("license.renewBody")}),t.jsxs("small",{children:[C("license.currentStatus"),": ",Y.status,Y.error?` - ${Y.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void H(!0),children:[t.jsx(Et,{size:16}),C(Q?"license.refreshing":"license.refresh")]})]}):null,be?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(fh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:C("license.expiryWarningTitle")}),t.jsx("p",{children:C("license.expiryWarningBody",{date:de??C("license.unknownExpiry"),days:A??""})}),t.jsxs("small",{children:[C("license.currentStatus"),": ",Y.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void H(!0),children:[t.jsx(Et,{size:16}),C(Q?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const Nh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Lx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ds(s){return Number(s??0)}function Sh(s){return ds(s)/100}function kh(s){return`${la(Math.round(s))} VND`}function qx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function L1(s){const l=new Date;return l.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(l);return u.setDate(l.getDate()-(s-d-1)),qx(u)})}function Ch(s,l){const o=s.get(l);if(o)return o;const d=Lx(l);return s.set(l,d),d}function q1(s){const l=s.toLowerCase();return l==="register_count"||l.includes("đăng")||l.includes("register")?"registrations":l==="order_count"?"orderCount":l==="paid_count"||l.includes("giao dịch thu")?"paidCount":l==="paid_total"||l.includes("tiền thu")?"paidAmount":l==="commission_count"||l.includes("giao dịch hoa hồng")?"commissionCount":l==="commission_total"||l.includes("tiền hoa hồng")?"commissionAmount":null}function Ao({label:s,value:l,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Nv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function wt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Et,{size:18}),t.jsx("span",{children:s})]})}function B1(s,l){const o=new Map,d=new Map;if(s.forEach(u=>{const m=Ch(o,u.date),f=q1(u.type);if(f){m[f]=Number(u.value||0);return}const C=d.get(u.date)??0,g=Nh[C%Nh.length];m[g]=Number(u.value||0),d.set(u.date,C+1)}),l){const u=Ch(o,qx(new Date));u.registrations=ds(l.day_register_total),l.day_order_total!==void 0&&(u.orderCount=ds(l.day_order_total)),l.day_paid_order_total!==void 0&&(u.paidCount=ds(l.day_paid_order_total)),u.paidAmount=Sh(l.day_paid_income??l.day_income),l.day_commission_payout!==void 0&&(u.commissionAmount=Sh(l.day_commission_payout)),l.day_commission_count!==void 0&&(u.commissionCount=ds(l.day_commission_count))}return o.size===0?[]:L1(31).map(u=>o.get(u)??Lx(u))}function G1({records:s,override:l}){const{t:o}=Ye(),[d,u]=h.useState("paidAmount"),[m,f]=h.useState(null),[C,g]=h.useState(0),[b,j]=h.useState(0),w=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:kh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:la},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:la},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:kh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:la},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:la}],S=w.find(G=>G.key===d)??w[0],B=B1(s,l),I=G=>Number(G[S.key]||0),Y=Math.max(...B.map(I),1),D=720,Q=220,U=28,H=B.length>1?(D-U*2)/(B.length-1):0,ae=G=>Q-U-G/Y*(Q-U*2),P=B.map((G,ne)=>`${U+ne*H},${ae(I(G))}`).join(" "),de=Math.max(Math.ceil(B.length/6),1),A=`dashboardTrendFill-${S.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:B.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:w.map(G=>t.jsx("button",{type:"button",className:d===G.key?"active":"",onClick:()=>{u(G.key),f(null)},children:G.label},G.key))}),B.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${D} ${Q}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:A,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:S.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:S.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(G=>t.jsx("line",{className:"chart-grid",x1:U,x2:D-U,y1:U+G*(Q-U*2),y2:U+G*(Q-U*2)},G)),B.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${A})`},points:`${U},${Q-U} ${P} ${D-U},${Q-U}`}),t.jsx("polyline",{className:"chart-line",points:P,style:{stroke:S.color}}),B.map((G,ne)=>{const be=U+ne*H,_=ae(I(G));return t.jsxs("g",{children:[t.jsx("circle",{cx:be,cy:_,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{f(G),g(be),j(_)},onMouseLeave:()=>{f(null)}}),t.jsx("circle",{cx:be,cy:_,r:(m==null?void 0:m.date)===G.date?6:4,fill:S.color,stroke:"var(--surface)",strokeWidth:(m==null?void 0:m.date)===G.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},G.date)})]}):null]}),m?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${C/D*100}%`,top:`${b/Q*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",m.date]}),t.jsxs("div",{className:"tooltip-value",children:[S.label,": ",S.format(I(m))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:B.filter((G,ne)=>ne===0||ne===B.length-1||ne%de===0).map(G=>t.jsx("span",{children:G.date},G.date))}),B.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:S.summaryLabel}),t.jsx("strong",{children:S.format(Y)})]}):null]})}function Oo({title:s,subtitle:l,records:o,labelKey:d}){const{t:u}=Ye(),m=Math.max(...o.map(f=>Number(f.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((f,C)=>{const g=d==="server_name"?f.server_name||u("dashboard.unnamedNode"):f.email||u("dashboard.unknownUser"),b=Number(f.total||0)/m*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:C+1}),t.jsx("strong",{children:g}),t.jsxs("small",{children:[A1(f.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(b,3)}%`}})})]},`${g}-${C}`)})})]})}function fd({label:s,current:l,previous:o}){const{t:d}=Ye();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?la(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?la(o):o]})]})}function $1(){var b,j,w,S,B,I,Y,D,Q,U,H,ae;const s=Rt(),{t:l}=Ye(),[o,d]=h.useState(null),[u,m]=h.useState(""),[f,C]=h.useState(!0),g=h.useCallback(async()=>{C(!0),m("");try{d(await f0())}catch(P){m(P instanceof Error?P.message:l("dashboard.loadFailed"))}finally{C(!1)}},[l]);return h.useEffect(()=>{if(!Ht()){s.replace("/login");return}g()},[g,s]),t.jsxs(Ft,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:g,children:[t.jsx(Et,{size:16}),l("common.retry")]})]}):null,f&&!o?t.jsx(wt,{label:l("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((b=o.override)==null?void 0:b.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(j=o.override)==null?void 0:j.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:g,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Ao,{label:l("dashboard.onlineUsers"),value:la(((w=o.override)==null?void 0:w.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Ao,{label:l("dashboard.todayIncome"),value:`${En(((S=o.override)==null?void 0:S.day_paid_income)??((B=o.override)==null?void 0:B.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Ao,{label:l("dashboard.todayRegistrations"),value:la(((I=o.override)==null?void 0:I.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Ao,{label:l("dashboard.pendingCommission"),value:la(((Y=o.override)==null?void 0:Y.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(fd,{label:l("dashboard.monthIncome"),current:`${En(((D=o.override)==null?void 0:D.month_income)??0)} VND`,previous:`${En(((Q=o.override)==null?void 0:Q.last_month_income)??0)} VND`}),t.jsx(fd,{label:l("dashboard.monthCommission"),current:`${En(((U=o.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${En(((H=o.override)==null?void 0:H.commission_last_month_payout)??0)} VND`}),t.jsx(fd,{label:l("dashboard.monthRegistrations"),current:((ae=o.override)==null?void 0:ae.month_register_total)??0,previous:"-"})]}),t.jsx(G1,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Oo,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Oo,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Oo,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Oo,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const Y1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function zh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function Q1(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function hd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function X1(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function Z1(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function K1(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function It(s){return s===!0||s===1||s==="1"}function F1(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function xd(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function V1(s){return s.split(/\r\n|\r|\n/).map(l=>l.trim()).filter(Boolean).join(`
`)}function J1({field:s,value:l,onChange:o}){const{t:d}=Ye(),u=s.toInput?s.toInput(l):F1(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${It(l)?"on":""}`,type:"button",onClick:()=>o(It(l)?0:1),"aria-pressed":It(l),children:[t.jsx("span",{}),It(l)?zh(d)[0].label:zh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:m=>o(m.target.value),children:(s.options??[]).map(m=>t.jsx("option",{value:m.value,children:m.label},String(m.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:m=>o(s.fromInput?s.fromInput(m.target.value):m.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function P1({plans:s,emailTemplates:l,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>It(u.email_whitelist_enable),fromInput:xd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:Z1(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:Q1(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:hd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:hd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:hd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:X1(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>It(u.subscribe_url_ua_enable),fromInput:V1}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:xd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:K1(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:xd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>It(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>It(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:l.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function W1(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState("site"),[u,m]=h.useState(null),[f,C]=h.useState([]),[g,b]=h.useState([]),[j,w]=h.useState(!0),[S,B]=h.useState(null),[I,Y]=h.useState(""),D=h.useCallback(async()=>{w(!0),Y("");try{const[G,ne,be]=await Promise.all([Sx(),x0(),h0()]);m(G),C(ne),b(be)}catch(G){Y(G instanceof Error?G.message:l("config.loadFailed"))}finally{w(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}D()},[D,s]),h.useEffect(()=>{const G=document.querySelector(".config-tabs button.active");G&&G.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Q=h.useMemo(()=>P1({plans:f,emailTemplates:g,t:l}),[f,g,l]),U=Q.find(G=>G.key===o)??Q[0],H=(u==null?void 0:u[U.key])??{};function ae(G,ne,be){m(_=>_&&{..._,[G]:{..._[G],[ne]:be}})}async function P(){var G;if(u){B(U.key),Y("");try{await kx(u[U.key]),(G=window.showToast)==null||G.call(window,l("config.saveSuccess"),"success")}catch(ne){Y(ne instanceof Error?ne.message:l("config.saveFailed"))}finally{B(null)}}}async function de(){var G;B("mail"),Y("");try{await b0(),(G=window.showToast)==null||G.call(window,l("config.email.testSuccess"),"success")}catch(ne){Y(ne instanceof Error?ne.message:l("config.email.testFailed"))}finally{B(null)}}async function A(){var ne;const G=String((u==null?void 0:u.telegram.telegram_bot_token)??"");B("webhook"),Y("");try{await g0(G),(ne=window.showToast)==null||ne.call(window,l("config.telegram.webhookSuccess"),"success")}catch(be){Y(be instanceof Error?be.message:l("config.telegram.webhookFailed"))}finally{B(null)}}return t.jsxs(Ft,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:j,children:[t.jsx(Et,{size:16}),l(j?"common.refreshing":"common.refresh")]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,j&&!u?t.jsx(wt,{label:l("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:Y1.map(G=>{const ne=Q.find(be=>be.key===G);return ne?t.jsxs("button",{className:o===G?"active":"",type:"button",onClick:()=>d(G),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},G):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:U.label}),t.jsx("p",{children:U.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:S===U.key,type:"button",onClick:P,children:[t.jsx(Dn,{size:16}),S===U.key?l("config.saving"):l("config.saveTab")]})]}),U.warning?t.jsx("div",{className:"config-warning",children:U.warning}):null,t.jsx("div",{className:"config-fields",children:U.fields.map(G=>G.visible&&!G.visible(H)?null:t.jsx(J1,{field:G,value:H[G.key],onChange:ne=>ae(U.key,G.key,ne)},G.key))}),U.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:S==="mail",onClick:de,children:[t.jsx(yx,{size:16}),l(S==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:S==="webhook",onClick:A,children:[t.jsx(i0,{size:16}),l(S==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(vx,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function di(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function bd(s){return s===!0||s===1||s==="1"}function I1(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function ej(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function tj(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,C]=h.useState(null),[g,b]=h.useState({}),[j,w]=h.useState(!0),[S,B]=h.useState(!1),[I,Y]=h.useState(!1),[D,Q]=h.useState(""),[U,H]=h.useState(""),[ae,P]=h.useState({}),de=h.useCallback(async()=>{w(!0),Q("");try{const[$,ce]=await Promise.all([y0(),v0()]);d($),m(ce),P({})}catch($){Q($ instanceof Error?$.message:l("payment.loadFailed"))}finally{w(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}de()},[de,s]);async function A($){const ce=($==null?void 0:$.payment)??u[0]??"",z=I1($,ce);if(C(z),b({}),Q(""),H(""),!!ce){B(!0);try{b(await vh(ce,$==null?void 0:$.id))}catch(V){Q(V instanceof Error?V.message:l("payment.formLoadFailed"))}finally{B(!1)}}}async function G($){if(f){C({...f,payment:$,config:{}}),B(!0),Q("");try{b(await vh($,f.id))}catch(ce){Q(ce instanceof Error?ce.message:l("payment.formLoadFailed"))}finally{B(!1)}}}async function ne($){var ce,z;if($.preventDefault(),!!f){Y(!0),Q(""),H("");try{await j0(ej(f)),C(null),(ce=window.showToast)==null||ce.call(window,l("payment.saveSuccess"),"success"),await de()}catch(V){(z=window.showToast)==null||z.call(window,V instanceof Error?V.message:l("payment.saveFailed"),"error")}finally{Y(!1)}}}async function be($){var ce;Q(""),H("");try{await w0($),await de()}catch(z){(ce=window.showToast)==null||ce.call(window,z instanceof Error?z.message:l("payment.toggleFailed"),"error")}}async function _($){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var z,V;Q(""),H("");try{await _0($),(z=window.showToast)==null||z.call(window,l("payment.deleteSuccess"),"success"),await de()}catch(T){(V=window.showToast)==null||V.call(window,T instanceof Error?T.message:l("payment.deleteFailed"),"error")}}})}async function R($,ce){var ue;const z=$+ce;if(z<0||z>=o.length)return;const V=[...o],T=V[$];V.splice($,1),V.splice(z,0,T),d(V);try{await N0(V.map(k=>k.id)),await de()}catch(k){(ue=window.showToast)==null||ue.call(window,k instanceof Error?k.message:l("payment.sortFailed"),"error"),await de()}}async function le($){var z;const ce=await di($);(z=window.showToast)==null||z.call(window,l(ce?"payment.copied":"common.copyFailed"),ce?"success":"error")}return t.jsxs(Ft,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:de,disabled:j,children:[t.jsx(Et,{size:16}),t.jsx("span",{children:l(j?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void A(),children:[t.jsx(Mn,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),D?t.jsx("div",{className:"form-error",children:D}):null,U?t.jsx("div",{className:"form-success",children:U}):null,j&&o.length===0?t.jsx(wt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(($,ce)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:$.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(mh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(ph,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${bd($.enable)?"active":""}`,type:"button",onClick:()=>void be($.id),"aria-label":bd($.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:$.name}),$.icon?t.jsx("small",{children:$.icon}):null]}),t.jsx("td",{children:$.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void le($.notify_url),children:[t.jsx("span",{children:$.notify_url}),t.jsx(hs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void A($),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _($.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},$.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map(($,ce)=>{const z=bd($.enable),V=$.handling_fee_percent!==null&&$.handling_fee_percent!==""?`${$.handling_fee_percent}%`:"",T=$.handling_fee_fixed!==null?`${En($.handling_fee_fixed)} VND`:"",ue=[V,T].filter(Boolean).join(" + ")||"No fees",k=ae[$.id],N=$.icon&&!k;return t.jsxs("div",{className:`payment-mobile-card ${z?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",$.id]}),t.jsx("span",{className:"gateway-tag",children:$.payment})]}),t.jsx("button",{className:`admin-switch ${z?"active":""}`,type:"button",onClick:()=>void be($.id),"aria-label":l(z?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[N?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:$.icon,alt:$.name,onError:()=>{P(M=>({...M,[$.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:$.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:$.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ue})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void le($.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:$.notify_url}),t.jsx(hs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(mh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(ph,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void A($),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void _($.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},$.id)}),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:$=>C({...f,name:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:f.icon,onChange:$=>C({...f,icon:$.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:f.notify_domain,onChange:$=>C({...f,notify_domain:$.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:f.handling_fee_percent,onChange:$=>C({...f,handling_fee_percent:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:f.handling_fee_fixed,onChange:$=>C({...f,handling_fee_fixed:$.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:f.payment,onChange:$=>void G($.target.value),children:u.map($=>t.jsx("option",{value:$,children:$},$))})]}),S?t.jsx(wt,{label:l("payment.formLoading")}):null,S?null:Object.entries(g).map(([$,ce])=>t.jsxs("label",{children:[t.jsx("span",{children:ce.label}),t.jsx("input",{className:"config-input",placeholder:ce.description,value:String(f.config[$]??ce.value??""),onChange:z=>C({...f,config:{...f.config,[$]:z.target.value}})})]},$)),f.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Dn,{size:16}),l(I?"payment.saving":"common.save")]})]})]})]})}):null]})}function nj(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function aj(s,l){return l[s.field_name]??s.default_value??""}function ij(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState(null),[u,m]=h.useState(null),[f,C]=h.useState(!0),[g,b]=h.useState(!1),[j,w]=h.useState(!1),[S,B]=h.useState(null),[I,Y]=h.useState(""),[D,Q]=h.useState(""),U=h.useCallback(async()=>{C(!0),Y("");try{d(await S0())}catch(A){Y(A instanceof Error?A.message:l("theme.loadFailed"))}finally{C(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}U()},[U,s]);async function H(A,G){m(null),b(!0),Y(""),Q("");try{const ne=await k0(A);m({key:A,theme:G,values:ne})}catch(ne){Y(ne instanceof Error?ne.message:l("theme.configLoadFailed"))}finally{b(!1)}}async function ae(A){B(A),Y(""),Q("");try{await kx({frontend_theme:A}),Q(l("theme.activateSuccess")),await U()}catch(G){Y(G instanceof Error?G.message:l("theme.activateFailed"))}finally{B(null)}}async function P(A){if(A.preventDefault(),!!u){w(!0),Y(""),Q("");try{await C0(u.key,u.values),m(null),Q(l("theme.saveSuccess")),await U()}catch(G){Y(G instanceof Error?G.message:l("theme.saveFailed"))}finally{w(!1)}}}function de(A,G){m(ne=>ne&&{...ne,values:{...ne.values,[A]:G}})}return t.jsxs(Ft,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),I?t.jsx("div",{className:"form-error",children:I}):null,D?t.jsx("div",{className:"form-success",children:D}):null,f&&!o?t.jsx(wt,{label:l("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([A,G])=>{const ne=o.active===A;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${nj(G)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(gx,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:G.name||A}),t.jsx("p",{children:G.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",G.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void H(A,G),children:[t.jsx(Vv,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||S===A,type:"button",onClick:()=>void ae(A),children:[t.jsx(Xv,{size:15}),l(ne?"theme.current":S===A?"theme.activating":"theme.activate")]})]})]},A)})}):null,g?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(wt,{label:l("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[(u.theme.configs??[]).map(A=>{const G=aj(A,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:A.label}),A.description?t.jsx("p",{className:"field-description",children:A.description}):null,A.field_type==="select"?t.jsx("select",{className:"config-input",value:G,onChange:ne=>de(A.field_name,ne.target.value),children:Object.entries(A.select_options??{}).map(([ne,be])=>t.jsx("option",{value:ne,children:be},ne))}):null,A.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:A.placeholder,rows:5,value:G,onChange:ne=>de(A.field_name,ne.target.value)}):null,A.field_type!=="select"&&A.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:A.placeholder,value:G,onChange:ne=>de(A.field_name,ne.target.value)}):null]},A.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"theme.saving":"common.save")]})]})]})]})}):null]})}const qd=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],lj=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],sj=["tcp","ws","grpc","http","httpupgrade","xhttp"],Bx=["tcp","ws","grpc"],Gx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],oj=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Th=["anytls","hysteria2","trojan","tuic"],rj=["tcp","ws","grpc","httpupgrade","xhttp"],cj=["chrome","firefox","safari","ios","android","edge","360","qq"],dj=["vmess","vless","trojan","hysteria","tuic","anytls"],uj=["trojan","hysteria","tuic","anytls"],$x=["ForceIP","ForceIPv4","ForceIPv6","ForceIPv4v6","ForceIPv6v4"],Zo={enable:!1,mode:"auto",fail_policy:"direct",mtu:1280,domain_strategy:"ForceIPv4v6",endpoint:"engage.cloudflareclient.com:2408",addresses:["172.16.0.2/32","2606:4700:110:8765::2/128"],reserved:[]},Id=typeof window<"u"?window.location.origin:"",pj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function mj(s,l,o=""){return s[l]??o}function Fe(s,l,o=""){return String(mj(s,l,o))}function fj(s,l){const o=s[l];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function bl(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const l=JSON.parse(s);return l&&typeof l=="object"&&!Array.isArray(l)?l:{}}catch{return{}}}function hj(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function xj(s){return s==="vmess"?"networkSettings":"network_settings"}function bj(s,l){const o=s==="vmess",d=s==="vless"||Pn(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(l){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function Pn(s){return s==="v2node"||s==="zicnode"}function gj(s){return uj.includes(s)}function yj(s){return Pn(s)||dj.includes(s)}function Eh(s){return s==="vmess"?"tlsSettings":"tls_settings"}function vj(s){const l=String((s==null?void 0:s._type)??"");return gj(l)?1:Number((s==null?void 0:s.tls)??0)}function Bd(s){return!!s&&s!=="shadowsocks"}function jj(s){return s==="vless"||s==="vmess"}function Gd(s){return s==="vless"||s==="anytls"}function wj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Mh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Bx:s==="vless"||s==="vmess"?rj:[]}function _j(s){var l;return Pn(s)?"ZicNode":((l=qd.find(o=>o.value===s))==null?void 0:l.label)??s}function Ko(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function eu(s){return s===!0||s===1||s==="1"||s==="true"}function Dh(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s:""}function Yx(s){return Array.isArray(s)?s.map(l=>String(l).trim()).filter(Boolean):typeof s=="string"?s.split(",").map(l=>l.trim()).filter(Boolean):[]}function Nj(s){return Yx(s).map(l=>Number(l)).filter(l=>Number.isInteger(l)&&l>=0&&l<=255)}function Fo(s){const l={...Zo,...bl(s)};if(!eu(l.enable))return{enable:!1};const d={enable:!0,mode:["auto","manual"].includes(String(l.mode))?l.mode:"auto",fail_policy:["direct","block"].includes(String(l.fail_policy))?l.fail_policy:"direct",mtu:Number(l.mtu)>0?Number(l.mtu):1280,domain_strategy:$x.includes(String(l.domain_strategy))?l.domain_strategy:"ForceIPv4v6"};["private_key","peer_public_key","endpoint"].forEach(f=>{const C=Ko(l[f]);C&&(d[f]=C)});const u=Yx(l.addresses);u.length&&(d.addresses=u);const m=Nj(l.reserved);return m.length&&(d.reserved=m),d}const Sj=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],kj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert"];function za(s,l){const o=bl(s);if(l===0)return{};const d={...o};return delete d.allow_insecure,delete d.allowInsecure,l===1?Sj.forEach(u=>delete d[u]):l===2&&kj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const m=d[u];(m===""||m===null||m===void 0)&&delete d[u]}),d}function Cj(s){return Ko(s).replace(/\/+$/,"")||Id}function Ah(s){return`'${s.replace(/'/g,"'\\''")}'`}function zj(s,l){const o=l.apiHost||Id,d=l.apiKey||"TOKEN_MOI";return`wget -N ${pj} && \\
bash install.sh --api-host ${Ah(o)} --node-id ${s} --api-key ${Ah(d)}`}function Oh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Uh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=Oh(d.group_id),d.route_id=Oh(d.route_id),Pn(s)&&(d.warp_settings={...Zo,...bl(d.warp_settings)}),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:"",warp_settings:{...Zo}};default:return o}}function Qx({initialValue:s,onCancel:l,onSave:o}){const{t:d}=Ye(),[u,m]=h.useState(()=>JSON.stringify(s??{},null,2)),[f,C]=h.useState(""),g=j=>{if(j.preventDefault(),!u.trim()){o({});return}try{const w=JSON.parse(u);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");o(w)}catch(w){C(w instanceof Error?w.message:"Invalid JSON")}},b=j=>{if(m(j),!j.trim()){C("");return}try{const w=JSON.parse(j);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");C("")}catch(w){C(w instanceof Error?w.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),f&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",f]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:f?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:u,onChange:j=>b(j.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!f,children:d("common.confirm")})]})]})}function Ne({label:s,required:l,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function Tj({value:s,onChange:l,label:o}){const{t:d}=Ye(),[u,m]=h.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Ne,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((f,C)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((g,b)=>b!==C)),style:{cursor:"pointer"},children:[f," ×"]},C)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:f=>m(f.target.value),onKeyDown:f=>{f.key==="Enter"&&u.trim()&&(f.preventDefault(),l([...s,u.trim()]),m(""))}})]})]})}function Rh({options:s,value:l,onChange:o,label:d,actionText:u,onAction:m}){const{t:f}=Ye(),[C,g]=h.useState(""),b=s.filter(w=>l.includes(w.id)),j=s.filter(w=>w.name.toLowerCase().includes(C.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Ne,{label:d,actionText:u,onAction:m}),b.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:b.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(l.filter(S=>S!==w.id)),children:[w.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},w.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${f("common.search")}...`,value:C,onChange:w=>g(w.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[j.map(w=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(w.id),onChange:S=>o(S.target.checked?[...l,w.id]:l.filter(B=>B!==w.id))}),t.jsx("span",{children:w.name})]},w.id)),j.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?f("node.noGroupsAvailable"):f("node.noResultsFound")})]})]})}function Wn({label:s,checked:l,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Ej({initialValue:s,isSnakeCase:l,tlsMode:o,nodeType:d,onCancel:u,onSave:m}){const{t:f}=Ye(),C=l?"server_name":"serverName",g=l?"allow_insecure":"allowInsecure",b=Pn(d),j=yj(d),w=o===1&&j,[S,B]=h.useState(String((s==null?void 0:s[C])??"")),[I,Y]=h.useState(String((s==null?void 0:s.dest)??"")),[D,Q]=h.useState(String((s==null?void 0:s.server_port)??"443")),[U,H]=h.useState(String((s==null?void 0:s.xver)??"0")),[ae,P]=h.useState(String((s==null?void 0:s.private_key)??"")),[de,A]=h.useState(String((s==null?void 0:s.public_key)??"")),[G,ne]=h.useState(String((s==null?void 0:s.short_id)??"")),[be,_]=h.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[R,le]=h.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[$,ce]=h.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),z=String((s==null?void 0:s.cert_mode)??"").trim(),[V,T]=h.useState(z||"auto"),[ue,k]=h.useState(String((s==null?void 0:s.provider)??"")),[N,M]=h.useState(String((s==null?void 0:s.dns_env)??"")),[ee,me]=h.useState(String((s==null?void 0:s.cert_file)??"")),[Se,Me]=h.useState(String((s==null?void 0:s.key_file)??"")),[Ue,Ve]=h.useState(()=>{const je=s==null?void 0:s.reject_unknown_sni;return je===1||je===!0||String(je)==="1"||String(je)==="true"}),[Re,et]=h.useState(String((s==null?void 0:s.ech)??"")),[ft,Qt]=h.useState(String((s==null?void 0:s.ech_server_name)??"")),[Vt,xt]=h.useState(String((s==null?void 0:s.ech_key)??"")),[Xt,ot]=h.useState(String((s==null?void 0:s.ech_config)??"")),[Jt,bt]=h.useState(()=>{const je=s==null?void 0:s[g];return je===1||je===!0||String(je)==="1"||String(je)==="true"}),Nt=je=>{if(je.preventDefault(),b&&o===0){m({});return}const Mt=b?za(s,o):bl(s),Ae=b?{...Mt,[C]:S,fingerprint:be}:{...s??{},[C]:S,fingerprint:be},fn=R.trim(),rt=$.trim();if(fn?Ae.pinnedPeerCertSha256=fn:delete Ae.pinnedPeerCertSha256,delete Ae.pinned_peer_cert_sha256,rt?Ae.verifyPeerCertByName=rt:delete Ae.verifyPeerCertByName,delete Ae.verify_peer_cert_by_name,b?(delete Ae.allow_insecure,delete Ae.allowInsecure):Ae[g]=l?Jt?1:0:Jt,o===2&&(Ae.dest=I,Ae.server_port=D,Ae.xver=Number(U)||0,Ae.private_key=ae,Ae.public_key=de,Ae.short_id=G,Ae.ech=Re,Ae.ech_server_name=ft,Ae.ech_key=Vt,Ae.ech_config=Xt),w){Ae.cert_mode=V;const on=s==null?void 0:s.auto_cert;on&&typeof on=="object"&&(Ae.auto_cert=on),V==="none"?(delete Ae.provider,delete Ae.dns_env,delete Ae.cert_file,delete Ae.key_file):(ue.trim()?Ae.provider=ue:delete Ae.provider,N.trim()?Ae.dns_env=N:delete Ae.dns_env,ee.trim()?Ae.cert_file=ee:delete Ae.cert_file,Se.trim()?Ae.key_file=Se:delete Ae.key_file),Ae.reject_unknown_sni=Ue?"1":"0"}m(b?za(Ae,o):Ae)};return t.jsxs("form",{onSubmit:Nt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:f("node.sni")}),t.jsx("input",{className:"config-input",value:S,onChange:je=>B(je.target.value),placeholder:f(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.dest")}),t.jsx("input",{className:"config-input",value:I,onChange:je=>Y(je.target.value),placeholder:f("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.servicePort")}),t.jsx("input",{className:"config-input",value:D,onChange:je=>Q(je.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:U,onChange:je=>H(je.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.privateKey")}),t.jsx("input",{className:"config-input",value:ae,onChange:je=>P(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.publicKey")}),t.jsx("input",{className:"config-input",value:de,onChange:je=>A(je.target.value),placeholder:f("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.shortId")}),t.jsx("input",{className:"config-input",value:G,onChange:je=>ne(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.fingerprint")}),t.jsx("select",{className:"config-input",value:be,onChange:je=>_(je.target.value),children:cj.map(je=>t.jsx("option",{value:je,children:je},je))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:R,onChange:je=>le(je.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:$,onChange:je=>ce(je.target.value),placeholder:"example.com"})]})]}),w?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.certMode")}),t.jsxs("select",{className:"config-input",value:V,onChange:je=>T(je.target.value),children:[t.jsx("option",{value:"auto",children:f("node.certModeAuto")}),t.jsx("option",{value:"self",children:f("node.certModeSelf")}),t.jsx("option",{value:"http",children:f("node.certModeHttp")}),t.jsx("option",{value:"dns",children:f("node.certModeDns")}),t.jsx("option",{value:"file",children:f("node.certModeFile")}),t.jsx("option",{value:"none",children:f("node.certModeNone")})]})]}),V==="dns"||V==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:ue,onChange:je=>k(je.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:N,onChange:je=>M(je.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,V!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.certFile")}),t.jsx("input",{className:"config-input",value:ee,onChange:je=>me(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.keyFile")}),t.jsx("input",{className:"config-input",value:Se,onChange:je=>Me(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsx(Wn,{label:f("node.rejectUnknownSni"),checked:Ue,onChange:Ve})]}):null,b?null:t.jsx(Wn,{label:f("node.allowInsecure"),checked:Jt,onChange:bt}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.ech")}),t.jsxs("select",{className:"config-input",value:Re,onChange:je=>et(je.target.value),children:[t.jsx("option",{value:"",children:f("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:f("node.echCustom")})]})]}),Re==="cloudflare"?t.jsx("div",{className:"config-warning",children:f("node.echCloudflareHelp")}):null,Re==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.echServerName")}),t.jsx("input",{className:"config-input",value:ft,onChange:je=>Qt(je.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.echKey")}),t.jsx("input",{className:"config-input",value:Vt,onChange:je=>xt(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:f("node.echConfig")}),t.jsx("input",{className:"config-input",value:Xt,onChange:je=>ot(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:f("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:f("common.confirm")})]})]})}function Mj({draft:s,set:l,groups:o,routes:d,nodes:u,onOpenJson:m,onAddGroup:f,onOpenTransportConfig:C}){const{t:g}=Ye(),b=String(s._type),j=Pn(b),w=Fe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:g("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"name"),onChange:S=>l("name",S.target.value),placeholder:g("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Fe(s,"rate","1"),onChange:S=>l("rate",Number(S.target.value))})]})]}),t.jsx(Tj,{value:s.tags??[],onChange:S=>l("tags",S),label:g("node.tags")}),t.jsx(Rh,{options:o.map(S=>({id:S.id,name:S.name})),value:s.group_id??[],onChange:S=>l("group_id",S),label:g("node.permissionGroups"),actionText:g("node.addGroup"),onAction:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"host"),onChange:S=>l("host",S.target.value),placeholder:g("node.addressPlaceholder")})]}),j?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.listenIp")}),t.jsx("input",{className:"config-input",value:Fe(s,"listen_ip"),onChange:S=>l("listen_ip",S.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(b)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?g("node.editConfig"):void 0,onAction:()=>{const S=Eh(b);m(g("node.connectionSecurityConfig"),S)}}),t.jsxs("select",{className:"config-input",value:Fe(s,"tls","0"),onChange:S=>{const B=Number(S.target.value);l("tls",B);const I=Eh(b);B!==0&&!s[I]&&l(I,{})},children:[t.jsx("option",{value:"0",children:g("node.none")}),t.jsx("option",{value:"1",children:g("node.useTls")}),b!=="vmess"&&t.jsx("option",{value:"2",children:g("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(b)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.sni"),actionText:g("node.editConfig"),onAction:()=>m(g("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Fe(s,"server_name"),onChange:S=>l("server_name",S.target.value),placeholder:g("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"port"),onChange:S=>l("port",S.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"server_port"),onChange:S=>l("server_port",S.target.value),placeholder:"443"})]})]}),j?t.jsx(qj,{draft:s,set:l,onOpenJson:m,onOpenTransportConfig:C,onOpenSecurityConfig:()=>m(g("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(b)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:g("node.transportProtocol"),required:!0,actionText:g("node.editConfig"),onAction:C}),t.jsxs("select",{className:"config-input",value:w,onChange:S=>{l("network",S.target.value);const B=b==="vmess"?"networkSettings":"network_settings";s[B]||l(B,{})},children:[b==="vmess"&&lj.map(S=>t.jsx("option",{value:S,children:S},S)),b==="trojan"&&Bx.map(S=>t.jsx("option",{value:S,children:S},S)),b==="vless"&&sj.map(S=>t.jsx("option",{value:S,children:S},S))]})]}):null,b==="trojan"&&t.jsx(Aj,{draft:s,set:l}),b==="shadowsocks"&&t.jsx(Oj,{draft:s,set:l,onOpenJson:m}),b==="hysteria"&&t.jsx(Uj,{draft:s,set:l}),b==="tuic"&&t.jsx(Rj,{draft:s,set:l}),b==="vless"&&t.jsx(Hj,{draft:s,set:l,onOpenJson:m}),b==="anytls"&&t.jsx(Lj,{draft:s,set:l,onOpenJson:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:g("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:S=>l("parent_id",S.target.value?Number(S.target.value):null),children:[t.jsx("option",{value:"",children:g("node.none")}),u.filter(S=>S.id!==s.id&&!S.parent_id).map(S=>t.jsx("option",{value:S.id,children:S.name},S.id))]})]}),t.jsx(Rh,{options:d.map(S=>({id:S.id,name:S.remarks})),value:s.route_id??[],onChange:S=>l("route_id",S),label:g("node.routingGroups")})]})]})}function Dj({draft:s,set:l,onCancel:o,onSave:d}){const u=String(s._type),m=String(s.network??"tcp"),f=xj(u),C=s[f],g=hj(C)?bl(C):bj(u,m);return t.jsx(Qx,{initialValue:g,onCancel:o,onSave:b=>{l(f,b),d()}})}function Aj({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function Oj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye(),u=fj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Fe(s,"cipher","aes-128-gcm"),onChange:m=>l("cipher",m.target.value),children:Gx.map(m=>t.jsx("option",{value:m,children:m},m))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"obfs"),onChange:m=>l("obfs",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:m=>l("obfs_settings",{...u,host:m.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:m=>l("obfs_settings",{...u,path:m.target.value}),placeholder:"/"})]})]})]})}function Uj({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Fe(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function Rj({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Fe(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Fe(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Wn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(Wn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(Wn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function Hj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Fe(s,"flow"),onChange:u=>l("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.encryption"),actionText:Fe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"encryption"),onChange:u=>l("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function Lj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Wn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>l("insecure",u?1:0)})]})}function qj({draft:s,set:l,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:m}=Ye(),f=Fe(s,"protocol"),C=Mh(f),g={...Zo,...bl(s.warp_settings)},b=eu(g.enable),j=(S,B)=>{l("warp_settings",Fo({...g,[S]:B}))},w=S=>{if(l("protocol",S),!S){l("tls",0),l("network","tcp");return}Th.includes(S)?(l("tls",1),s.tls_settings||l("tls_settings",{})):S==="shadowsocks"?l("tls",0):S==="vmess"&&Number(s.tls??0)===2&&l("tls",1);const B=Mh(S);(B.length===0||!B.includes(Fe(s,"network","tcp")))&&l("network","tcp"),S!=="vless"&&(l("flow",""),l("encryption",""),l("encryption_settings",{})),S!=="hysteria2"&&(l("obfs",null),l("obfs_password",""),l("up_mbps",0),l("down_mbps",0)),S!=="anytls"&&l("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:f,onChange:S=>w(S.target.value),children:[t.jsx("option",{value:"",children:m("node.selectNodeProtocol")}),oj.map(S=>t.jsx("option",{value:S,children:S},S))]})]}),f?t.jsxs(t.Fragment,{children:[Bd(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?m("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Fe(s,"tls",Th.includes(f)?"1":"0"),onChange:S=>{const B=Number(S.target.value);l("tls",B),B!==0&&!s.tls_settings&&l("tls_settings",{})},children:[jj(f)?t.jsx("option",{value:"0",children:m("node.none")}):null,t.jsx("option",{value:"1",children:m("node.useTls")}),Gd(f)?t.jsx("option",{value:"2",children:m("node.reality")}):null]})]}):null,wj(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.transportProtocol"),required:!0,actionText:m("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:C.includes(Fe(s,"network","tcp"))?Fe(s,"network","tcp"):"tcp",onChange:S=>{l("network",S.target.value),s.network_settings||l("network_settings",{})},children:C.map(S=>t.jsx("option",{value:S,children:S},S))})]}):null]}):null,t.jsx("div",{className:"form-section-title",children:m("node.warpOutbound")}),t.jsx(Wn,{label:m("node.warpEnable"),checked:b,onChange:S=>l("warp_settings",Fo({...g,enable:S}))}),b?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpMode")}),t.jsxs("select",{className:"config-input",value:String(g.mode??"auto"),onChange:S=>j("mode",S.target.value),children:[t.jsx("option",{value:"auto",children:m("node.warpModeAuto")}),t.jsx("option",{value:"manual",children:m("node.warpModeManual")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpFailPolicy")}),t.jsxs("select",{className:"config-input",value:String(g.fail_policy??"direct"),onChange:S=>j("fail_policy",S.target.value),children:[t.jsx("option",{value:"direct",children:m("node.warpFailDirect")}),t.jsx("option",{value:"block",children:m("node.warpFailBlock")})]})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpMtu")}),t.jsx("input",{className:"config-input",type:"number",min:"576",value:String(g.mtu??1280),onChange:S=>j("mtu",Number(S.target.value))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpDomainStrategy")}),t.jsx("select",{className:"config-input",value:String(g.domain_strategy??"ForceIPv4v6"),onChange:S=>j("domain_strategy",S.target.value),children:$x.map(S=>t.jsx("option",{value:S,children:S},S))})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.warpPrivateKey")}),t.jsx("input",{className:"config-input",value:String(g.private_key??""),onChange:S=>j("private_key",S.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpPeerPublicKey")}),t.jsx("input",{className:"config-input",value:String(g.peer_public_key??""),onChange:S=>j("peer_public_key",S.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpEndpoint")}),t.jsx("input",{className:"config-input",value:String(g.endpoint??"engage.cloudflareclient.com:2408"),onChange:S=>j("endpoint",S.target.value)})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpAddresses")}),t.jsx("input",{className:"config-input",value:Dh(g.addresses),onChange:S=>j("addresses",S.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.warpReserved")}),t.jsx("input",{className:"config-input",value:Dh(g.reserved),onChange:S=>j("reserved",S.target.value)})]})]})]}):null,f==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.encryption"),actionText:Fe(s,"encryption")?m("node.editConfig"):void 0,onAction:()=>o(m("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"encryption"),onChange:S=>l("encryption",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.flow")}),t.jsxs("select",{className:"config-input",value:Fe(s,"flow"),onChange:S=>l("flow",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),f==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Fe(s,"cipher","aes-128-gcm"),onChange:S=>l("cipher",S.target.value),children:Gx.map(S=>t.jsx("option",{value:S,children:S},S))})]}),f==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"up_mbps","0"),onChange:S=>l("up_mbps",Number(S.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"down_mbps","0"),onChange:S=>l("down_mbps",Number(S.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Fe(s,"obfs"),onChange:S=>l("obfs",S.target.value||null),children:[t.jsx("option",{value:"",children:m("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Fe(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs_password"),onChange:S=>l("obfs_password",S.target.value),placeholder:m("node.autoGenHelp")})]}):null]})]}),f==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Fe(s,"udp_relay_mode","native"),onChange:S=>l("udp_relay_mode",S.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Ne,{label:m("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Fe(s,"congestion_control","bbr"),onChange:S=>l("congestion_control",S.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Wn,{label:m("node.disableSni"),checked:s.disable_sni===1,onChange:S=>l("disable_sni",S?1:0)}),t.jsx(Wn,{label:m("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:S=>l("zero_rtt_handshake",S?1:0)})]}),f==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:m("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Ne,{label:m("node.paddingScheme"),actionText:m("node.editConfig"),onAction:()=>o(m("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Hh={vmess:Pv,vless:s0,trojan:Ad,shadowsocks:Vd,hysteria:Kv,tuic:Tv,anytls:gs,v2node:hh,zicnode:hh},Bj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},Gj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function ii(s){return Bj[s]??Gj}function $j({draft:s,config:l,onCopy:o,t:d}){const u=Number(s.id??0),m=u>0?zj(u,l):"",f=!l.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:m}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(m),children:[t.jsx(hs,{size:15}),d("node.copyInstallCommand")]}),f?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Yj(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,C]=h.useState([]),[g,b]=h.useState(null),[j,w]=h.useState(null),[S,B]=h.useState(!0),[I,Y]=h.useState(!1),[D,Q]=h.useState(""),[U,H]=h.useState(""),[ae,P]=h.useState(1),[de,A]=h.useState(10),[G,ne]=h.useState(!1),[be,_]=h.useState({}),[R,le]=h.useState({apiHost:Id,apiKey:""}),[$,ce]=h.useState(!1),[z,V]=h.useState(""),[T,ue]=h.useState(null),[k,N]=h.useState(null),[M,ee]=h.useState(null),me=(L,se)=>{L.dataTransfer.effectAllowed="move",N(se)},Se=(L,se)=>{if(L.preventDefault(),k===null||k===se)return;const W=[...o],Ce=W[k];W.splice(k,1),W.splice(se,0,Ce),N(se),d(W)},Me=()=>{N(null)},Ue=(L,se)=>{G&&ee(se)},Ve=L=>{if(!G||M===null)return;L.cancelable&&L.preventDefault();const se=L.touches[0],W=document.elementFromPoint(se.clientX,se.clientY);if(!W)return;const Ce=W.closest(".mobile-node-card");if(!Ce)return;const Be=Ce.getAttribute("data-index");if(Be===null)return;const We=Number(Be);if(We!==M&&We>=0&&We<o.length){const y=[...o],oe=y[M];y.splice(M,1),y.splice(We,0,oe),ee(We),d(y)}},Re=()=>{ee(null)};h.useEffect(()=>{P(1)},[z,de]);const et=o.filter(L=>{const se=z.toLowerCase().trim();return se?L.name.toLowerCase().includes(se)||L.host.toLowerCase().includes(se)||String(L.id).includes(se)||L.type.toLowerCase().includes(se):!0}),ft=Math.ceil(et.length/de),Qt=et.slice((ae-1)*de,ae*de);function Vt(L,se){return se<=7?Array.from({length:se},(W,Ce)=>Ce+1):L<=4?[1,2,3,4,5,"...",se]:L>=se-3?[1,"...",se-4,se-3,se-2,se-1,se]:[1,"...",L-1,L,L+1,"...",se]}const xt=Vt(ae,ft),Xt=async()=>{var L,se;Y(!0),Q(""),H("");try{const W={};o.forEach((Ce,Be)=>{W[Ce.type]||(W[Ce.type]={}),W[Ce.type][String(Ce.id)]=Be+1}),await k1(W),(L=window.showToast)==null||L.call(window,l("node.saveSortSuccess"),"success"),ne(!1),await ye()}catch(W){Q(W instanceof Error?W.message:l("node.saveSortFailed")),(se=window.showToast)==null||se.call(window,W instanceof Error?W.message:l("node.saveSortFailed"),"error")}finally{Y(!1)}},ot=async()=>{ne(!1),await we()},Jt=()=>et.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===1,onClick:()=>P(L=>Math.max(L-1,1)),children:"<"}),xt.map((L,se)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${se}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ae===L?"active":""}`,onClick:()=>P(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===ft||ft===0,onClick:()=>P(L=>Math.min(L+1,ft)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:de,onChange:L=>A(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",l("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",l("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",l("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",l("common.perPage")]})]})})]}),[bt,Nt]=h.useState(null),[je,Mt]=h.useState(!1),[Ae,fn]=h.useState(""),[rt,on]=h.useState(!1),[An,hn]=h.useState(!1);async function F(L){var W,Ce;L.preventDefault();const se=Ae.trim();if(!(!se||!g)){on(!0),Q(""),H("");try{await Cx({name:se});const Be=await bs();m(Be);const We=Be.filter(y=>y.name===se).sort((y,oe)=>oe.id-y.id)[0];if(We){const y=g.group_id??[];y.includes(We.id)||un("group_id",[...y,We.id])}fn(""),Mt(!1),(W=window.showToast)==null||W.call(window,l("node.groupCreateSuccess"),"success")}catch(Be){Q(Be instanceof Error?Be.message:l("node.groupCreateFailed")),(Ce=window.showToast)==null||Ce.call(window,Be instanceof Error?Be.message:l("node.groupCreateFailed"),"error")}finally{on(!1)}}}const ze=(L,se)=>{if(!g)return;let W=g[se];if(typeof W=="string"&&W.trim())try{W=JSON.parse(W)}catch{}["tlsSettings","tls_settings"].includes(se)&&Pn(String(g._type))&&(W=za(W,Number(g.tls??0))),Nt({title:L,key:se,value:W&&typeof W=="object"?W:{}})},we=h.useCallback(async()=>{var L,se,W,Ce;B(!0),Q("");try{const[Be,We,y,oe]=await Promise.all([_h(),bs(),Tx(),Sx()]);d(Be.data),m(We),C(y),le({apiHost:Cj((L=oe.site)==null?void 0:L.app_url),apiKey:Ko((se=oe.server)==null?void 0:se.server_token)}),ce(eu(((W=oe.subscribe)==null?void 0:W.device_hwid_available)??((Ce=oe.subscribe)==null?void 0:Ce.device_hwid_enable)))}catch(Be){Q(Be instanceof Error?Be.message:l("knowledge.loadFailed"))}finally{B(!1)}},[]),ye=h.useCallback(async()=>{try{const L=await _h();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function Qe(L){var W;const se=await di(L);(W=window.showToast)==null||W.call(window,l(se?"node.installCopied":"common.copyFailed"),se?"success":"error")}h.useEffect(()=>{if(!Ht()){s.replace("/login");return}we()},[we,s]);function He(L){b(Uh(L)),w(null),Q(""),H("")}function qe(L){b(Uh(L.type,L)),Q(""),H("")}function Xe(L){!$||Number(L.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function nt(L,se){const W=Number(L.online??0),Ce=$&&W>0,Be=`${se==="mobile"?"mobile-badge-pill":"online-badge"}${Ce?" online-badge-link":""}`,We=se==="mobile"?12:13,y={...se==="mobile"?{marginRight:4}:{},color:W>0?"#10b981":"var(--muted)",opacity:W>0?1:.6},oe=t.jsxs(t.Fragment,{children:[t.jsx(wx,{size:We,style:y}),W]});return Ce?t.jsx("button",{className:Be,type:"button",title:l("node.viewOnlineDevices"),onClick:()=>Xe(L),children:oe}):t.jsx("span",{className:Be,children:oe})}async function dn(L){var We,y,oe;if(L.preventDefault(),!g)return;Y(!0),Q(""),H("");const se=String(g._type),W={...g};if(Pn(se)&&!Ko(W.protocol)){Q(l("node.protocolRequired")),(We=window.showToast)==null||We.call(window,l("node.protocolRequired"),"error"),Y(!1);return}for(const pe of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete W[pe];if(W.padding_scheme!==void 0&&W.padding_scheme!==null&&typeof W.padding_scheme!="string"&&(W.padding_scheme=JSON.stringify(W.padding_scheme)),W.padding_scheme)try{const pe=JSON.parse(String(W.padding_scheme));if(typeof pe!="object"||pe===null)throw new Error("Invalid JSON array or object")}catch(pe){Q("Invalid Padding Scheme configuration: "+(pe instanceof Error?pe.message:"JSON error")),Y(!1);return}const Ce=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const pe of Ce)(W[pe]===""||W[pe]===null||W[pe]===void 0)&&delete W[pe];if(Pn(se)){const pe=String(W.protocol??""),_e=Number(W.tls??0);W.warp_settings=Fo(W.warp_settings),Bd(pe)?!Gd(pe)&&_e===2?(W.tls=1,W.tls_settings=za(W.tls_settings,1)):W.tls_settings=za(W.tls_settings,_e):(W.tls=0,W.tls_settings={})}const Be=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings","warp_settings"];for(const pe of Be){const _e=W[pe];(_e==null||typeof _e=="object"&&Object.keys(_e).length===0)&&delete W[pe]}W.port!==void 0&&(W.port=Number(W.port)),W.server_port!==void 0&&(W.server_port=Number(W.server_port)),W.tls!==void 0&&(W.tls=Number(W.tls)),W.rate!==void 0&&(W.rate=Number(W.rate));try{await w1(se,W),b(null),(y=window.showToast)==null||y.call(window,l("node.saveSuccess"),"success"),await ye()}catch(pe){Q(pe instanceof Error?pe.message:l("node.saveFailed")),(oe=window.showToast)==null||oe.call(window,pe instanceof Error?pe.message:l("node.saveFailed"),"error")}finally{Y(!1)}}async function Ct(L){const se=[...o];d(W=>W.map(Ce=>Ce.id===L.id&&Ce.type===L.type?{...Ce,show:L.show?0:1}:Ce));try{await N1(L.type,L.id,L.show?0:1),await ye()}catch(W){d(se),Q(W instanceof Error?W.message:l("node.updateFailed"))}}async function In(L){var se,W;try{await S1(L.type,L.id),(se=window.showToast)==null||se.call(window,l("node.copySuccess"),"success"),await ye()}catch(Ce){Q(Ce instanceof Error?Ce.message:l("node.copyFailed")),(W=window.showToast)==null||W.call(window,Ce instanceof Error?Ce.message:l("node.copyFailed"),"error")}}async function Lt(L){var se;(se=window.showConfirm)==null||se.call(window,{message:l("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var Ce,Be;const W=[...o];d(We=>We.filter(y=>!(y.id===L.id&&y.type===L.type))),Q("");try{await _1(L.type,L.id),(Ce=window.showToast)==null||Ce.call(window,l("node.deleteSuccess"),"success"),await ye()}catch(We){d(W),Q(We instanceof Error?We.message:l("node.deleteFailed")),(Be=window.showToast)==null||Be.call(window,We instanceof Error?We.message:l("node.deleteFailed"),"error")}}})}const un=(L,se)=>b(W=>{if(!W)return null;const Ce={...W,[L]:se};if(!Pn(String(Ce._type)))return Ce;if(L==="tls_settings"&&(Ce.tls_settings=za(se,Number(Ce.tls??0))),L==="tls"&&(Ce.tls_settings=za(Ce.tls_settings,Number(se))),L==="warp_settings"&&(Ce.warp_settings=Fo(se)),L==="protocol"){const Be=String(se);Bd(Be)?!Gd(Be)&&Number(Ce.tls??0)===2?(Ce.tls=1,Ce.tls_settings=za(Ce.tls_settings,1)):Ce.tls_settings=za(Ce.tls_settings,Number(Ce.tls??0)):(Ce.tls=0,Ce.tls_settings={})}return Ce}),Zn=g?String(g._type):"",pn=_j(Zn);return t.jsxs(Ft,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>w(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:18})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),qd.map(L=>{const se=ii(L.value),W=Hh[L.value]||Qo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(L.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:se==null?void 0:se.bg,backgroundColor:se==null?void 0:se.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(se==null?void 0:se.bg)??"var(--surface-soft)",color:(se==null?void 0:se.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:z,onChange:L=>V(L.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${G?"success-btn":""}`,type:"button",onClick:G?Xt:()=>ne(!0),disabled:I,children:l(G?I?"node.saving":"node.saveOrder":"node.editSortOrder")}),G&&t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,children:l("common.cancel")})]})]}),D?t.jsx("div",{className:"form-error",children:D}):null,U?t.jsx("div",{className:"form-success",children:U}):null,S&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(G?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Qt.map(L=>{const se=o.findIndex(W=>W.id===L.id&&W.type===L.type);return t.jsxs("tr",{draggable:G,onDragStart:W=>me(W,se),onDragOver:W=>Se(W,se),onDragEnd:Me,className:k===se?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(L.type).bg,color:ii(L.type).text,border:`1px solid ${ii(L.type).border}`},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Ct(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:nt(L,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const W=L.group_id??[],Ce=be[`${L.type}-${L.id}`],Be=W.map(oe=>{const pe=u.find(_e=>Number(_e.id)===Number(oe));return t.jsx("span",{className:"tag",children:(pe==null?void 0:pe.name)??`#${oe}`},oe)});if(W.length<=3||Ce)return t.jsxs(t.Fragment,{children:[Be,W.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>_(oe=>({...oe,[`${L.type}-${L.id}`]:!1})),children:l("node.collapse")})]});const We=Be.slice(0,3),y=W.length-3;return t.jsxs(t.Fragment,{children:[We,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>_(oe=>({...oe,[`${L.type}-${L.id}`]:!0})),children:["+",y,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:W.length})}),Be]})]})]})})()})}),t.jsx("td",{children:G?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(us,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ue((T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ue(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(L),ue(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{In(L),ue(null)},children:[t.jsx(hs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(L),ue(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!S&&et.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Jt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>w(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:20})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),qd.map(L=>{const se=ii(L.value),W=Hh[L.value]||Qo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(L.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:se==null?void 0:se.bg,backgroundColor:se==null?void 0:se.rowBg},children:t.jsx(W,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(se==null?void 0:se.bg)??"var(--surface-soft)",color:(se==null?void 0:se.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:z,onChange:L=>V(L.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${G?"active":""}`,type:"button",onClick:()=>ne(!G),title:l("node.editSortOrder"),children:t.jsx(us,{size:20})})]}),G&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Xt(),disabled:I,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(I?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Qt.map(L=>{const se=o.findIndex(W=>W.id===L.id&&W.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${k===se||M===se?"dragging":""}`,draggable:G,onDragStart:W=>me(W,se),onDragOver:W=>Se(W,se),onDragEnd:Me,onTouchStart:W=>Ue(W,se),onTouchMove:Ve,onTouchEnd:Re,"data-index":se,style:G?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:G?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(us,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void Ct(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ue((T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ue(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(L),ue(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{In(L),ue(null)},children:[t.jsx(hs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(L),ue(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(L.type).bg,color:ii(L.type).text,border:`1px solid ${ii(L.type).border}`},children:L.id}),nt(L,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!S&&et.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Jt()]}),g!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:g.id?l("node.editNodeTitle",{type:pn}):l("node.createNodeTitle",{type:pn})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:pn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>b(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:dn,children:[t.jsx(Mj,{draft:g,set:un,groups:u,routes:f,nodes:o,onOpenJson:ze,onAddGroup:()=>Mt(!0),onOpenTransportConfig:()=>hn(!0)}),Pn(Zn)?t.jsx($j,{draft:g,config:R,onCopy:L=>void Qe(L),t:l}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>b(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Dn,{size:16}),l(I?"node.saving":"common.save")]})]})]})]})}),bt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:bt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(bt.key)?l("node.connectionSecurityEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Nt(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(bt.key)?t.jsx(Ej,{initialValue:bt.value,isSnakeCase:bt.key==="tls_settings",tlsMode:vj(g),nodeType:String((g==null?void 0:g._type)??""),onCancel:()=>Nt(null),onSave:L=>{un(bt.key,L),Nt(null)}}):t.jsx(Qx,{initialValue:bt.value,onCancel:()=>Nt(null),onSave:L=>{un(bt.key,L),Nt(null)}})})]})}),je&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Mt(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:F,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:Ae,onChange:L=>fn(L.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Mt(!1),disabled:rt,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:rt||!Ae.trim(),children:l(rt?"node.saving":"common.confirm")})]})]})]})}),An&&g!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(g.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>hn(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(Dj,{draft:g,set:un,onCancel:()=>hn(!1),onSave:()=>hn(!1)})})]})})]})}function Qj(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,C]=h.useState(!0),[g,b]=h.useState(!1),[j,w]=h.useState(""),S=h.useCallback(async()=>{C(!0),w("");try{d(await bs())}catch(D){w(D instanceof Error?D.message:l("serverGroup.loadFailed"))}finally{C(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}S()},[S,s]);function B(D){m({id:D==null?void 0:D.id,name:(D==null?void 0:D.name)??""}),w("")}async function I(D){var Q;if(D.preventDefault(),!!u){b(!0),w("");try{await Cx(u),m(null),(Q=window.showToast)==null||Q.call(window,l("serverGroup.saveSuccess"),"success"),await S()}catch(U){w(U instanceof Error?U.message:l("serverGroup.saveFailed"))}finally{b(!1)}}}async function Y(D){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,H;w("");try{await z0(D),(U=window.showToast)==null||U.call(window,l("serverGroup.deleteSuccess"),"success"),await S()}catch(ae){w(ae instanceof Error?ae.message:l("serverGroup.deleteFailed")),(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>B(),children:[t.jsx(Mn,{size:16}),l("serverGroup.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(wt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:D.id}),t.jsx("td",{children:t.jsx("strong",{children:D.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),D.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),D.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>B(D),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(D.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},D.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:D=>m({...u,name:D.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:g,children:[t.jsx(Dn,{size:16}),l(g?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Xj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Zj(s){var l;return((l=zx.find(o=>o.value===s))==null?void 0:l.label)??s}function Kj(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,C]=h.useState(!0),[g,b]=h.useState(!1),[j,w]=h.useState(""),S=h.useCallback(async()=>{C(!0),w("");try{d(await Tx())}catch(D){w(D instanceof Error?D.message:l("serverRoute.loadFailed"))}finally{C(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}S()},[S,s]);function B(D){m(Xj(D)),w("")}async function I(D){var U;if(D.preventDefault(),!u)return;b(!0),w("");const Q=u.action==="default_out"?[]:u.match.split(`
`).map(H=>H.trim()).filter(Boolean);try{await T0({id:u.id,remarks:u.remarks,match:Q,action:u.action,action_value:u.action_value||null}),m(null),(U=window.showToast)==null||U.call(window,l("serverRoute.saveSuccess"),"success"),await S()}catch(H){w(H instanceof Error?H.message:l("serverRoute.saveFailed"))}finally{b(!1)}}async function Y(D){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,H;w("");try{await E0(D),(U=window.showToast)==null||U.call(window,l("serverRoute.deleteSuccess"),"success"),await S()}catch(ae){w(ae instanceof Error?ae.message:l("serverRoute.deleteFailed")),(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:S,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>B(),children:[t.jsx(Mn,{size:16}),l("serverRoute.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(wt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:D.id}),t.jsx("td",{children:t.jsx("strong",{children:D.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(D.match)?D.match:[]).slice(0,3).map((Q,U)=>t.jsx("span",{className:"tag",children:Q},U)),Array.isArray(D.match)&&D.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",D.match.length-3]}):null,!Array.isArray(D.match)||D.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Zj(D.action)})}),t.jsx("td",{children:D.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>B(D),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(D.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},D.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:I,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:D=>m({...u,remarks:D.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:D=>m({...u,action:D.target.value}),children:zx.map(D=>t.jsx("option",{value:D.value,children:D.label},D.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:D=>m({...u,match:D.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:D=>m({...u,action_value:D.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:g,children:[t.jsx(Dn,{size:16}),l(g?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Fj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Vj(s){const l=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function cn(s){return s==null?"—":En(s)}function Jj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Pj(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,C]=h.useState(null),[g,b]=h.useState(!0),[j,w]=h.useState(!1),[S,B]=h.useState(""),[I,Y]=h.useState(""),[D,Q]=h.useState(null),[U,H]=h.useState(null),ae=(k,N)=>{k.dataTransfer.effectAllowed="move",Q(N)},P=(k,N)=>{if(k.preventDefault(),D===null||D===N)return;const M=[...o],ee=M[D];M.splice(D,1),M.splice(N,0,ee),Q(N),d(M)},de=async()=>{Q(null);try{await jh(o.map(k=>k.id)),await be()}catch(k){B(k instanceof Error?k.message:l("plan.sortFailed")),await be()}},A=(k,N)=>{H(N)},G=k=>{if(U===null)return;const N=k.touches[0],M=document.elementFromPoint(N.clientX,N.clientY);if(!M)return;const ee=M.closest("tr, [data-index]");if(!ee)return;const me=ee.getAttribute("data-index");if(me===null)return;const Se=Number(me);if(Se!==U&&Se>=0&&Se<o.length){const Me=[...o],Ue=Me[U];Me.splice(U,1),Me.splice(Se,0,Ue),H(Se),d(Me)}},ne=async()=>{if(U!==null){H(null);try{await jh(o.map(k=>k.id)),await be()}catch(k){B(k instanceof Error?k.message:l("plan.sortFailed")),await be()}}},be=h.useCallback(async()=>{b(!0),B("");try{const[k,N]=await Promise.all([mi(),bs()]);d(k),m(N)}catch(k){B(k instanceof Error?k.message:l("plan.loadFailed"))}finally{b(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}be()},[be,s]);function _(k){C(Fj(k)),B(""),Y("")}async function R(k){var N,M;if(k.preventDefault(),!!f){w(!0),B(""),Y("");try{await M0(Vj(f)),C(null),(N=window.showToast)==null||N.call(window,l("plan.saveSuccess"),"success"),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.saveFailed"),"error")}finally{w(!1)}}}async function le(k,N){var M;try{await md(k,{show:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function $(k,N){var M;try{await md(k,{renew:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function ce(k,N){var M;try{await md(k,{allow_subscribe_url:N?0:1}),await be()}catch(ee){(M=window.showToast)==null||M.call(window,ee instanceof Error?ee.message:l("plan.toggleFailed"),"error")}}async function z(k){var N;(N=window.showConfirm)==null||N.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var M,ee;B(""),Y("");try{await D0(k),(M=window.showToast)==null||M.call(window,l("plan.deleteSuccess"),"success"),await be()}catch(me){(ee=window.showToast)==null||ee.call(window,me instanceof Error?me.message:l("plan.deleteFailed"),"error")}}})}function V(k){var N;return((N=u.find(M=>M.id===k))==null?void 0:N.name)??`#${k}`}function T(k){return Number(k.allow_subscribe_url??1)===1}function ue(k,N){C(M=>M&&{...M,[k]:N})}return t.jsxs(Ft,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:be,disabled:g,children:[t.jsx(Et,{size:16}),l(g?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(),children:[t.jsx(Mn,{size:16}),l("plan.add")]})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,I?t.jsx("div",{className:"form-success",children:I}):null,g&&o.length===0?t.jsx(wt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.allowSubscribeUrl")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((k,N)=>t.jsxs("tr",{draggable:!0,onDragStart:M=>ae(M,N),onDragOver:M=>P(M,N),onDragEnd:de,onTouchStart:M=>A(M,N),onTouchMove:G,onTouchEnd:ne,"data-index":N,className:D===N||U===N?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(us,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:k.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),le(k.id,k.show)},title:k.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),$(k.id,k.renew)},title:k.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${T(k)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),ce(k.id,T(k)?1:0)},title:T(k)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:k.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Xo,{size:14}),k.count??0]})}),t.jsx("td",{children:V(k.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[k.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(k.month_price)})]}),k.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(k.quarter_price)})]}),k.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(k.half_year_price)})]}),k.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(k.year_price)})]}),k.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(k.two_year_price)})]}),k.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(k.three_year_price)})]}),k.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(k.onetime_price)})]}),k.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(k.reset_price)})]})]})}),t.jsxs("td",{children:[k.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:M=>{M.stopPropagation(),_(k)},children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:M=>{M.stopPropagation(),z(k.id)},children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},k.id)),!g&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((k,N)=>t.jsxs("div",{className:`mobile-node-card ${D===N||U===N?"dragging":""}`,draggable:!0,onDragStart:M=>ae(M,N),onDragOver:M=>P(M,N),onDragEnd:de,onTouchStart:M=>A(M,N),onTouchMove:G,onTouchEnd:ne,"data-index":N,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(us,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:k.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:k.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),_(k)},children:[t.jsx(Kt,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),z(k.id)},children:[t.jsx(en,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${k.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),le(k.id,k.show)},title:k.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${k.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),$(k.id,k.renew)},title:k.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${T(k)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),ce(k.id,T(k)?1:0)},title:T(k)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Xo,{size:12,style:{marginRight:4}}),k.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:V(k.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[k.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[k.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(k.month_price)})]}),k.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(k.quarter_price)})]}),k.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(k.half_year_price)})]}),k.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(k.year_price)})]}),k.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(k.two_year_price)})]}),k.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(k.three_year_price)})]}),k.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(k.onetime_price)})]}),k.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(k.reset_price)})]})]})]},k.id)),!g&&o.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:k=>ue("name",k.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:f.content,onChange:k=>ue("content",k.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:f.group_id,onChange:k=>ue("group_id",k.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),u.map(k=>t.jsx("option",{value:k.id,children:k.name},k.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:f.transfer_enable,onChange:k=>ue("transfer_enable",k.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.device_limit,onChange:k=>ue("device_limit",k.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.speed_limit,onChange:k=>ue("speed_limit",k.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.capacity_limit,onChange:k=>ue("capacity_limit",k.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:f.reset_traffic_method,onChange:k=>ue("reset_traffic_method",k.target.value),children:Jj(l).map(k=>t.jsx("option",{value:k.value,children:k.label},k.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.allow_subscribe_url==="1",onChange:k=>ue("allow_subscribe_url",k.target.checked?"1":"0")}),t.jsx("span",{children:l("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.month_price,onChange:k=>ue("month_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.quarter_price,onChange:k=>ue("quarter_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.half_year_price,onChange:k=>ue("half_year_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.year_price,onChange:k=>ue("year_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.two_year_price,onChange:k=>ue("two_year_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.three_year_price,onChange:k=>ue("three_year_price",k.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.onetime_price,onChange:k=>ue("onetime_price",k.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.reset_price,onChange:k=>ue("reset_price",k.target.value),placeholder:"—"})]})]}),f.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.force_update,onChange:k=>ue("force_update",String(k.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"plan.saving":"common.save")]})]})]})]})}):null]})}const gd="模糊",Lh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},qh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Bh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${m}:${f}`}function Gh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),m=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0"),C=String(l.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${m}:${f}:${C}`}function $h(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Xn(s){return`${En(Number(s??0))} ₫`}const Xx="adminzic_user_cache";function Wj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Xx);return s?JSON.parse(s):{}}catch{return{}}}function Ij(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Xx,JSON.stringify(s))}catch{}}const fl=(s,l)=>`${s}:${l}`;function ew(){var fn,rt,on,An,hn;const s=Rt(),l=sa(),{t:o}=Ye(),d=h.useCallback(F=>{switch(F){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${F}`,cls:""}}},[o]),u=h.useCallback(F=>{const ze=`order.period.${F}`,we=o(ze);return we===ze?qh[F]??F:we},[o]),[m,f]=h.useState([]),[C,g]=h.useState([]),[b,j]=h.useState({}),[w,S]=h.useState(0),[B,I]=h.useState(1),[Y]=h.useState(15),[D,Q]=h.useState(""),[U,H]=h.useState("trade_no"),[ae,P]=h.useState(!0),[de,A]=h.useState(null),[G,ne]=h.useState(!1),[be,_]=h.useState(""),[R,le]=h.useState(""),[$,ce]=h.useState(null),[z,V]=h.useState(null),[T,ue]=h.useState(!1),[k,N]=h.useState(null),[M,ee]=h.useState(!1),[me,Se]=h.useState(()=>Wj()),Me=h.useCallback((F,ze)=>{const we=fl(ze,F);V(null),ce(ye=>ye===we?null:we)},[]),Ue=h.useCallback((F,ze)=>{const we=fl(ze,F);ce(null),V(ye=>ye===we?null:we)},[]),Ve=h.useCallback(F=>{const ze=Number(F.coupon_id??0);return ze?b[ze]??`#${ze}`:null},[b]);h.useEffect(()=>{if(!$&&!z)return;const F=()=>{ce(null),V(null)},ze=ye=>{const Qe=ye.target;Qe!=null&&Qe.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||F()},we=ye=>{ye.key==="Escape"&&F()};return document.addEventListener("pointerdown",ze),document.addEventListener("keydown",we),()=>{document.removeEventListener("pointerdown",ze),document.removeEventListener("keydown",we)}},[$,z]),h.useEffect(()=>{const F=new Set;if(m.forEach(we=>{we.user_id&&!me[we.user_id]&&F.add(we.user_id),we.invite_user_id&&!me[we.invite_user_id]&&F.add(we.invite_user_id)}),k&&(k.user_id&&!me[k.user_id]&&F.add(k.user_id),k.invite_user_id&&!me[k.invite_user_id]&&F.add(k.invite_user_id)),F.size===0)return;const ze=Array.from(F);Promise.allSettled(ze.map(async we=>{try{const ye=await Mx(we);if(ye&&ye.data)return{id:we,email:ye.data.email,invite_user:ye.data.invite_user}}catch(ye){console.error(`Failed to fetch user ${we}:`,ye)}return null})).then(we=>{const ye={};we.forEach(Qe=>{var He;if(Qe.status==="fulfilled"&&Qe.value){const qe=Qe.value;ye[qe.id]={email:qe.email,invite_user_email:((He=qe.invite_user)==null?void 0:He.email)||null},qe.invite_user&&(ye[qe.invite_user.id]={email:qe.invite_user.email})}}),Object.keys(ye).length>0&&Se(Qe=>{const He={...Qe,...ye};return Ij(He),He})})},[m,k,me]);const Re={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},et=h.useCallback(async(F=1,ze,we)=>{var ye,Qe;P(!0),_("");try{let He;if(ze)if(we==="email"){const nt=(ye=(await Hd(1,1,[{key:"email",condition:gd,value:ze}])).data)==null?void 0:ye[0];if(!nt){f([]),S(0),P(!1);return}He=[{key:"user_id",condition:"=",value:String(nt.id)}]}else if(we==="invite_user_email"){const nt=(Qe=(await Hd(1,1,[{key:"email",condition:gd,value:ze}])).data)==null?void 0:Qe[0];if(!nt){f([]),S(0),P(!1);return}He=[{key:"invite_user_id",condition:"=",value:String(nt.id)}]}else He=[{key:we||"trade_no",condition:we==="trade_no"||we==="user_id"||we==="invite_user_id"||we==="plan_id"||we==="status"?"=":gd,value:ze}];const qe=await A0({current:F,pageSize:Y,filter:He});f(qe.data),S(qe.total)}catch(He){_(He instanceof Error?He.message:o("order.loadFailed"))}finally{P(!1)}},[Y,o]),ft=h.useCallback(F=>{const ze=String(F);H("user_id"),Q(ze),ue(!0),I(1),et(1,ze,"user_id")},[et]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}const F=new URLSearchParams(l.search),ze=F.get("filter_email"),we=F.get("invite_user_email"),ye=F.get("user_id")||F.get("filter_user_id");let Qe="",He="trade_no";ye?(Qe=ye,He="user_id",H("user_id"),Q(ye),ue(!0)):ze?(Qe=ze,He="email",H("email"),Q(ze),ue(!0)):we&&(Qe=we,He="invite_user_email",H("invite_user_email"),Q(we),ue(!0)),et(1,Qe,He),mi().then(g).catch(()=>{}),Ex(1,1e3).then(qe=>{const Xe={};qe.data.forEach(nt=>{Xe[nt.id]=nt.code}),j(Xe)}).catch(()=>{})},[et,s,l.search]);function Qt(){I(1),et(1,D,U)}function Vt(){Q(""),I(1),et(1)}function xt(F){I(F),et(F,D,U)}async function Xt(F){var ze,we;ce(null),V(null),_(""),le("");try{await O0(F),(ze=window.showToast)==null||ze.call(window,o("order.paidSuccess"),"success"),await et(B,D,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.paidFailed"),"error")}}async function ot(F){var ze,we;ce(null),V(null),_(""),le("");try{await U0(F),(ze=window.showToast)==null||ze.call(window,o("order.cancelSuccess"),"success"),await et(B,D,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.cancelFailed"),"error")}}async function Jt(F,ze){var we,ye;ce(null),V(null),_(""),le("");try{await R0(F,ze),(we=window.showToast)==null||we.call(window,o("order.commissionSuccess"),"success"),await et(B,D,U)}catch(Qe){(ye=window.showToast)==null||ye.call(window,Qe instanceof Error?Qe.message:o("order.commissionFailed"),"error")}}async function bt(F){N(F),ee(!0);try{const ze=await H0(F.id);ze&&ze.data&&N(ze.data)}catch(ze){console.error("Failed to fetch order detail:",ze)}finally{ee(!1)}}function Nt(){var F;A({email:"",plan_id:(F=C[0])!=null&&F.id?String(C[0].id):"",period:"month_price",total_amount:"0"}),_(""),le("")}async function je(F){var ze,we;if(F.preventDefault(),!!de){ne(!0),_(""),le("");try{await Pd({email:de.email,plan_id:Number(de.plan_id),period:de.period,total_amount:Number(de.total_amount)*100}),A(null),(ze=window.showToast)==null||ze.call(window,o("order.assignSuccess"),"success"),await et(B,D,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const Mt=Math.ceil(w/Y),Ae=k?Ve(k):null;return t.jsxs(Ft,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${T?"active":""}`,type:"button",onClick:()=>ue(!T),children:[t.jsx(xs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Nt,children:[t.jsx(Mn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void et(B,D,U),disabled:ae,children:[t.jsx(Et,{size:16}),o(ae?"common.refreshing":"common.refresh")]})]}),T&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:U,onChange:F=>H(F.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Wo,{size:16}),t.jsx("input",{className:"config-input search-input",value:D,onChange:F=>Q(F.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:F=>F.key==="Enter"&&Qt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Qt,children:[t.jsx(xs,{size:16}),o("order.filter")]}),D?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Vt,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),be?t.jsx("div",{className:"form-error",children:be}):null,R?t.jsx("div",{className:"form-success",children:R}):null,ae&&m.length===0?t.jsx(wt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ae?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[m.map(F=>{var qe;const ze=d(F.status),we=F.invite_user_id!==null,ye=Re[F.commission_status]??{label:`#${F.commission_status}`,dotClass:"pending"},Qe=Ve(F),He=(qe=me[F.user_id])==null?void 0:qe.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),title:o("order.detailsTitle"),children:$h(F.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",F.id]}),t.jsx("span",{className:"order-type-pill",children:Lh[F.type]??`#${F.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[He?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),title:o("order.filterByUser"),children:He}):t.jsxs("span",{className:"order-subline",children:["ID: ",F.user_id]}),t.jsx("strong",{className:"order-plan-name",children:F.plan_name??`Plan #${F.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(F.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Xn(F.total_amount)}),Qe?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Qe]}):null,Number(F.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Xn(F.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ze.cls.replace("status-","")}`}),t.jsx("span",{children:ze.label}),F.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Xe=>{Xe.stopPropagation(),Me(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),$===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Xe=>Xe.stopPropagation(),onClick:Xe=>Xe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),Xt(F.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),ot(F.trade_no)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[we?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Xn(F.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{children:ye.label}),F.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Xe=>{Xe.stopPropagation(),Ue(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),z===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Xe=>Xe.stopPropagation(),onClick:Xe=>Xe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Bh(F.created_at)})})]},F.trade_no)}),!ae&&m.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Mt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:B<=1,onClick:()=>xt(B-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[B," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:B>=Mt,onClick:()=>xt(B+1),children:t.jsx(Da,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[m.map(F=>{var dn;const ze=d(F.status),we=F.invite_user_id!==null,ye=Re[F.invite_user_id!==null?F.commission_status:0]??{label:`#${F.commission_status}`,dotClass:"pending"},Qe=(dn=me[F.user_id])==null?void 0:dn.email,He=Ve(F),qe=fl("mobile",F.trade_no),Xe=fl("mobile",F.trade_no),nt=$===qe||z===Xe;return t.jsxs("div",{className:`mobile-order-card${nt?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),children:$h(F.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",F.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ze.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:ze.label}),F.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Me(F.trade_no,"mobile")},"aria-expanded":$===qe,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),$===qe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),Xt(F.trade_no)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),ot(F.trade_no)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Qe?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),children:Qe}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",F.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Lh[F.type]??`#${F.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:F.plan_name??`Plan #${F.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(F.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Xn(F.total_amount)})]}),He?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:He})})]}):null,Number(F.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Xn(F.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:we?t.jsx("strong",{children:Xn(F.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),we&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ye.label}),F.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Ue(F.trade_no,"mobile")},"aria-expanded":z===Xe,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),z===Xe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Do,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Bh(F.created_at)})]})]})]},F.trade_no)}),!ae&&m.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Mt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:B<=1,onClick:()=>xt(B-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[B," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:B>=Mt,onClick:()=>xt(B+1),children:t.jsx(Da,{size:16})})]}):null]})]}),k?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:M?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(wt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(fn=me[k.user_id])!=null&&fn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{N(null),ft(k.user_id)},title:"Filter by this user",children:me[k.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",k.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:k.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(k.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(k.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:k.plan_name??`Plan #${k.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:k.callback_no||"-"})]}),Ae?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:Ae})]}):null]}),k.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(rt=me[k.invite_user_id])!=null&&rt.email||(on=me[k.user_id])!=null&&on.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const F=String(k.invite_user_id);H("invite_user_id"),Q(F),ue(!0),N(null),et(1,F,"invite_user_id")},title:"Filter by this inviter",children:((An=me[k.invite_user_id])==null?void 0:An.email)||((hn=me[k.user_id])==null?void 0:hn.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",k.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Xn(k.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Re[k.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Re[k.commission_status]??{label:`#${k.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Xn(k.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Xn(k.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Xn(k.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Xn(k.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Xn(k.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Gh(k.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Gh(k.updated_at)})]})]})]})})]})}):null,de?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>A(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:je,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:de.email,onChange:F=>A({...de,email:F.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:de.plan_id,onChange:F=>A({...de,plan_id:F.target.value}),children:C.map(F=>t.jsx("option",{value:F.id,children:F.name},F.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:de.period,onChange:F=>A({...de,period:F.target.value}),children:Object.entries(qh).map(([F,ze])=>t.jsx("option",{value:F,children:ze},F))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:de.total_amount,onChange:F=>A({...de,total_amount:F.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:G,children:[t.jsx(Dn,{size:16}),o(G?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Uo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ro(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function yd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function tw(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(0),[f,C]=h.useState(1),[g,b]=h.useState([]),[j,w]=h.useState(null),[S,B]=h.useState(!0),[I,Y]=h.useState(!1),[D,Q]=h.useState(""),[U,H]=h.useState(""),[ae,P]=h.useState("");h.useEffect(()=>{j||P("")},[j]);const de=h.useCallback(async(_=1)=>{B(!0),Q("");try{const R=await Ex(_,15);d(R.data),m(R.total)}catch(R){Q(R instanceof Error?R.message:l("coupon.loadFailed"))}finally{B(!1)}},[]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}de(1),mi().then(b).catch(()=>{})},[de,s]);async function A(_){var R,le;if(_.preventDefault(),!!j){Y(!0),Q(""),H("");try{const $=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await L0({id:j.id,name:j.name,type:Number(j.type),value:$,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,limit_use_with_user:j.limit_use_with_user?Number(j.limit_use_with_user):null,limit_plan_ids:j.limit_plan_ids.length?j.limit_plan_ids:null,limit_period:j.limit_period.length?j.limit_period:null,generate_count:j.generate_count?Number(j.generate_count):void 0}),w(null),(R=window.showToast)==null||R.call(window,l("coupon.saveSuccess"),"success"),await de(f)}catch($){(le=window.showToast)==null||le.call(window,$ instanceof Error?$.message:l("coupon.saveFailed"),"error")}finally{Y(!1)}}}async function G(_){var R;try{await B0(_),await de(f)}catch(le){(R=window.showToast)==null||R.call(window,le instanceof Error?le.message:l("coupon.toggleFailed"),"error")}}async function ne(_){var R;(R=window.showConfirm)==null||R.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var le,$;try{await q0(_),(le=window.showToast)==null||le.call(window,l("coupon.deleteSuccess"),"success"),await de(f)}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:l("coupon.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[u," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void de(f),disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(yd()),children:[t.jsx(Mn,{size:16}),l("coupon.add")]})]})]}),D?t.jsx("div",{className:"form-error",children:D}):null,U?t.jsx("div",{className:"form-success",children:U}):null,S&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var ce,z;const R=(ce=_.limit_plan_ids)==null?void 0:ce.map(V=>{var T;return((T=g.find(ue=>ue.id===V))==null?void 0:T.name)||`#${V}`}).join(", "),le=Ro(l),$=(z=_.limit_period)==null?void 0:z.map(V=>le[V]||V).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?En(_.value):`${_.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",_.limit_use??"∞"]}),_.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",R]})}):null,$?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",$]})}):null,!R&&!$?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void G(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Uo(_.started_at)," — ",Uo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(yd(_)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(_.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},_.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(_=>{var R,le,$,ce;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:`tag type-tag ${_.type===1?"fixed-type":"percent-type"}`,children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{di(_.code).then(z=>{var V;(V=window.showToast)==null||V.call(window,z?`${l("coupon.copiedCode")}: ${_.code}`:l("common.copyFailed"),z?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(R=_.limit_plan_ids)!=null&&R.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:_.limit_plan_ids.map(z=>{const V=g.find(T=>T.id===z);return t.jsx("span",{className:"res-pill plan-pill",children:V?V.name:`#${z}`},z)})})]}):null,(le=_.limit_period)!=null&&le.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:_.limit_period.map(z=>t.jsx("span",{className:"res-pill cycle-pill",children:Ro(l)[z]||z},z))})]}):null,!(($=_.limit_plan_ids)!=null&&$.length)&&!((ce=_.limit_period)!=null&&ce.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Uo(_.started_at)," — ",Uo(_.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void G(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?En(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"}),_.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(yd(_)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(_.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},_.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{C(f-1),de(f-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",be]}),t.jsx("button",{className:"mini-button",disabled:f>=be,onClick:()=>{C(f+1),de(f+1)},children:t.jsx(Da,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:_=>w({...j,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:j.type,onChange:_=>w({...j,type:_.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:_=>w({...j,value:_.target.value})})]})]}),j.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:j.code,onChange:_=>w({...j,code:_.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:_=>w({...j,started_at:_.target.value}),onClick:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:_=>w({...j,ended_at:_.target.value}),onClick:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:_=>w({...j,limit_use:_.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use_with_user,onChange:_=>w({...j,limit_use_with_user:_.target.value}),placeholder:l("coupon.unlimited")})]})]}),j.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:_=>w({...j,generate_count:_.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),j.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_plan_ids.map(_=>{const R=g.find(le=>le.id===_);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const le=j.limit_plan_ids.filter($=>$!==_);w({...j,limit_plan_ids:le})},children:[R?R.name:`#${_}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_)})}),g.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:ae,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[g.filter(_=>_.name.toLowerCase().includes(ae.toLowerCase())).map(_=>{const R=j.limit_plan_ids.includes(_.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:le=>{const $=le.target.checked?[...j.limit_plan_ids,_.id]:j.limit_plan_ids.filter(ce=>ce!==_.id);w({...j,limit_plan_ids:$})}}),t.jsx("span",{children:_.name})]},_.id)}),g.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),j.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_period.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=j.limit_period.filter(le=>le!==_);w({...j,limit_period:R})},children:[Ro(l)[_]||_," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Ro(l)).map(([_,R])=>{const le=j.limit_period.includes(_);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:le,onChange:$=>{const ce=$.target.checked?[...j.limit_period,_]:j.limit_period.filter(z=>z!==_);w({...j,limit_period:ce})}}),t.jsx("span",{children:R})]},_)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Dn,{size:16}),l(I?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ho(s){return new Date(s*1e3).toLocaleString("vi-VN")}function nw(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function vd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function aw(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(0),[f,C]=h.useState(1),[g,b]=h.useState([]),[j,w]=h.useState(null),[S,B]=h.useState(!0),[I,Y]=h.useState(!1),[D,Q]=h.useState(""),[U,H]=h.useState(""),[ae,P]=h.useState("");h.useEffect(()=>{j||P("")},[j]);const de=nw(l),A=h.useCallback(async(_=1)=>{B(!0),Q("");try{const R=await G0(_,15);d(R.data),m(R.total)}catch(R){Q(R instanceof Error?R.message:l("giftcard.loadFailed"))}finally{B(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}A(1),mi().then(b).catch(()=>{})},[A,s]);async function G(_){var R,le;if(_.preventDefault(),!!j){Y(!0),Q(""),H("");try{const $=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await $0({id:j.id,name:j.name,type:Number(j.type),value:$,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,plan_id:j.plan_id?Number(j.plan_id):null,generate_count:j.generate_count?Number(j.generate_count):void 0}),w(null),(R=window.showToast)==null||R.call(window,l("giftcard.saveSuccess"),"success"),await A(f)}catch($){(le=window.showToast)==null||le.call(window,$ instanceof Error?$.message:l("giftcard.saveFailed"),"error")}finally{Y(!1)}}}async function ne(_){var R;(R=window.showConfirm)==null||R.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var le,$;try{await Y0(_),(le=window.showToast)==null||le.call(window,l("giftcard.deleteSuccess"),"success"),await A(f)}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:l("giftcard.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[u," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(f),disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(vd()),children:[t.jsx(Mn,{size:16}),l("giftcard.add")]})]})]}),D?t.jsx("div",{className:"form-error",children:D}):null,U?t.jsx("div",{className:"form-success",children:U}):null,S&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(_=>{var R;return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:de[_.type]??_.type})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?En(_.value):_.value})}),t.jsx("td",{children:_.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=g.find(le=>le.id===_.plan_id))==null?void 0:R.name)||`#${_.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:_.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Ho(_.started_at)," — ",Ho(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(vd(_)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(_.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},_.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(_=>{var R;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:de[_.type]??_.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{di(_.code).then(le=>{var $;($=window.showToast)==null||$.call(window,le?l("giftcard.copiedCode").replace("{code}",_.code):l("common.copyFailed"),le?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:_.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((R=g.find(le=>le.id===_.plan_id))==null?void 0:R.name)||`#${_.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ho(_.started_at)," — ",Ho(_.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?En(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":de[_.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(vd(_)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(_.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},_.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{C(f-1),A(f-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",be]}),t.jsx("button",{className:"mini-button",disabled:f>=be,onClick:()=>{C(f+1),A(f+1)},children:t.jsx(Da,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:G,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:_=>w({...j,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:j.type,onChange:_=>w({...j,type:_.target.value}),children:Object.entries(de).map(([_,R])=>t.jsx("option",{value:_,children:R},_))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:_=>w({...j,value:_.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:_=>w({...j,started_at:_.target.value}),onClick:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:_=>w({...j,ended_at:_.target.value}),onClick:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:_=>{var R,le;return(le=(R=_.currentTarget).showPicker)==null?void 0:le.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:_=>w({...j,limit_use:_.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),j.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:_=>w({...j,generate_count:_.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),j.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const _=g.find(R=>String(R.id)===j.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{w({...j,plan_id:""})},children:[_?_.name:`#${j.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),g.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:ae,onChange:_=>P(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!j.plan_id,onChange:()=>{w({...j,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),g.filter(_=>_.name.toLowerCase().includes(ae.toLowerCase())).map(_=>{const R=String(_.id)===j.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:le=>{le.target.checked&&w({...j,plan_id:String(_.id)})}}),t.jsx("span",{children:_.name})]},_.id)}),g.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I,children:[t.jsx(Dn,{size:16}),l(I?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const os="Tương đối",Ca="=";function Lo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function iw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function Yh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function jd(s){return+(s/1073741824).toFixed(2)}function wd(s){return Math.round(s*1073741824)}function qo(s){return(s/1073741824).toFixed(2)}function lw(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function hl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const $d=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Zx="user_visible_columns";function sw(){if(typeof window<"u")try{const s=localStorage.getItem(Zx);if(s)return new Set(JSON.parse(s))}catch{}return new Set($d.filter(s=>s.defaultVisible).map(s=>s.key))}const Vo=[{value:"email",label:"Email",condition:os,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ca,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ca,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ca,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ca,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:os,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ca,placeholder:"12345"},{value:"uuid",label:"UUID",condition:os,placeholder:"UUID"},{value:"token",label:"Token",condition:os,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:os,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ca,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ca,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ca,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ca,placeholder:"1780366403"}],ow=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function sn(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function rw(s,l){var u;const o=((u=Vo.find(m=>m.value===s))==null?void 0:u.label)??s,d=m=>{const f=l(m);return f===m?o:f};switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return l("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function _d(s){return Vo.find(l=>l.value===s)??Vo[0]}function cw(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function dw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=h.useState([]),[m,f]=h.useState([]),[C,g]=h.useState([]),[b,j]=h.useState(0),[w,S]=h.useState(1),[B,I]=h.useState(""),[Y,D]=h.useState("email"),[Q,U]=h.useState(!0),[H,ae]=h.useState(""),[P,de]=h.useState(sw),[A,G]=h.useState(!1),ne=h.useRef(null),[be,_]=h.useState(null),[R,le]=h.useState(null),[$,ce]=h.useState(null),[z,V]=h.useState({}),[T,ue]=h.useState(!1),[k,N]=h.useState(!1),[M,ee]=h.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[me,Se]=h.useState(!1),[Me,Ue]=h.useState(null),[Ve,Re]=h.useState({plan_id:"",period:"month_price",total_amount:""}),[et,ft]=h.useState(!1),[Qt,Vt]=h.useState(null),[xt,Xt]=h.useState(null),[ot,Jt]=h.useState([]),[bt,Nt]=h.useState(0),[je,Mt]=h.useState(1),[Ae]=h.useState(10),[fn,rt]=h.useState(!1),[on,An]=h.useState("");h.useEffect(()=>{function v(fe){const he=fe.target instanceof Element?fe.target:null;be!==null&&(!he||!he.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(_(null),le(null)),A&&ne.current&&!ne.current.contains(fe.target)&&G(!1)}return document.addEventListener("mousedown",v),()=>document.removeEventListener("mousedown",v)},[be,A]),h.useEffect(()=>{if(be===null)return;const v=()=>{_(null),le(null)};return window.addEventListener("resize",v),window.addEventListener("scroll",v,!0),()=>{window.removeEventListener("resize",v),window.removeEventListener("scroll",v,!0)}},[be]);function hn(v,fe){if(be===v){_(null),le(null);return}const he=fe.getBoundingClientRect(),Ee=220,tt=392,xn=6,qt=8,ea=Math.max(qt,Math.min(window.innerWidth-Ee-qt,he.right-Ee)),Oa=he.bottom+xn+tt<=window.innerHeight-qt?he.bottom+xn:Math.max(qt,he.top-tt-xn);le({top:Oa,left:ea}),_(v)}function F(){_(null),le(null)}function ze(v,fe=!1,he=""){const Ee=tt=>{F(),tt()};return t.jsxs("div",{className:`action-dropdown-menu ${fe?"action-dropdown-menu-fixed":""} ${he}`.trim(),style:fe&&R?{top:R.top,left:R.left}:void 0,onMouseDown:tt=>tt.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Ee(()=>oa(v)),children:[t.jsx(Kt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>gt(v)),children:[t.jsx(jx,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>void se(v)),children:[t.jsx(Ta,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>Be(v)),children:[t.jsx(Od,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>W(v)),children:[t.jsx(Vd,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>We(v)),children:[t.jsx(Ov,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>y(v)),children:[t.jsx(Dd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>oe(v)),children:[t.jsx(Xo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(()=>_e(v)),children:[t.jsx(xh,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Ee(()=>Ce(v)),children:[t.jsx(en,{size:14}),o("user.actionDelete")]})]})}function we(v){de(fe=>{const he=new Set(fe);he.has(v)?he.delete(v):he.add(v);try{localStorage.setItem(Zx,JSON.stringify([...he]))}catch{}return he})}const ye=v=>P.has(v),Qe=$d.filter(v=>P.has(v.key)).length,He=h.useCallback(async(v=1,fe,he)=>{U(!0),ae("");try{const Ee=fe==null?void 0:fe.trim(),tt=_d(he||"email"),xn=Ee?[{key:tt.value,condition:tt.condition,value:Ee}]:void 0,qt=await Hd(v,15,xn);u(qt.data),j(qt.total)}catch(Ee){ae(Ee instanceof Error?Ee.message:o("user.loadFailed"))}finally{U(!1)}},[]),qe=h.useCallback(async()=>{try{const[v,fe]=await Promise.all([mi(),bs()]);f(v),g(fe)}catch{}},[]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}const v=new URLSearchParams(l.search),he=[["email",v.get("email")||v.get("filter_email")],["id",v.get("id")||v.get("user_id")||v.get("filter_user_id")],["plan_id",v.get("plan_id")],["invite_user_id",v.get("invite_user_id")],["invite_by_email",v.get("invite_by_email")],["uuid",v.get("uuid")],["token",v.get("token")],["remarks",v.get("remarks")]].find(([,Ee])=>Ee==null?void 0:Ee.trim());if(he){const[Ee,tt]=he,xn=_d(Ee),qt=(tt==null?void 0:tt.trim())??"";D(xn.value),I(qt),S(1),He(1,qt,xn.value)}else He(1);qe()},[He,qe,s,l.search]);function Xe(){S(1),He(1,B,Y)}function nt(){I(""),S(1),He(1)}function dn(v){S(v),He(v,B,Y)}function Ct(v){if(v.plan_name)return v.plan_name;if(!v.plan_id)return"—";const fe=m.find(he=>he.id===v.plan_id);return fe?fe.name:`#${v.plan_id}`}function In(v){if(!v.group_id)return"—";const fe=C.find(he=>he.id===v.group_id);return fe?fe.name:`#${v.group_id}`}function Lt(v,fe){const he=o(v);return he===v?fe:he}function un(v){const fe=Number(v.device_limit??0);return fe>0?`${Number(v.device_bound_count??0)} / ${fe}`:Lt("user.unlimited","Unlimited")}function Zn(v){const fe=Number(v.device_bound_count??0),he=Number(v.device_pending_count??0),Ee=Number(v.device_banned_count??0),tt=Number(v.device_online_count??0),xn=Number(v.alive_ip??0),qt=Number(v.device_limit??0),ea=qt>0?`${fe} / ${qt}`:`${fe} / ${Lt("user.unlimited","Unlimited")}`,ra=[`${Lt("user.deviceBound","Bound")}: ${ea}`,`${Lt("user.devicePending","Pending")}: ${he}`,`${Lt("user.deviceBanned","Banned")}: ${Ee}`,`${Lt("user.deviceOnline","Online devices")}: ${tt}`,`${Lt("user.deviceOnlineIp","Online IP")}: ${xn}`];return v.ips&&ra.push(v.ips),ra.join(`
`)}function pn(v){s.push(`/device?user_id=${encodeURIComponent(String(v.id))}`)}function L(v,fe="left"){const he=`${Lt("user.deviceOnlineShort","Online")}: ${Number(v.device_online_count??0)} | ${Lt("user.deviceIpShort","IP")}: ${Number(v.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${fe==="right"?"align-right":""}`,type:"button",title:Zn(v),onClick:()=>pn(v),children:[t.jsx("span",{className:"device-cell-primary",children:un(v)}),t.jsx("span",{className:"device-cell-secondary",children:he})]})}async function se(v){var Ee,tt;const fe=v.subscribe_url;if(!fe){(Ee=window.showToast)==null||Ee.call(window,o("user.toastNoSubscribeUrl"),"error");return}const he=await di(fe);(tt=window.showToast)==null||tt.call(window,o(he?"user.toastUrlCopied":"common.copyFailed"),he?"success":"error"),_(null)}function W(v){var fe;_(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var he,Ee;try{await K0(v.id),(he=window.showToast)==null||he.call(window,o("user.toastSecretResetSuccess"),"success"),await He(w,B,Y)}catch(tt){(Ee=window.showToast)==null||Ee.call(window,tt instanceof Error?tt.message:o("user.toastSecretResetFailed"),"error")}}})}function Ce(v){var fe;_(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var he,Ee;try{await X0(v.id),(he=window.showToast)==null||he.call(window,o("user.toastDeletedSuccess"),"success"),await He(w,B,Y)}catch(tt){(Ee=window.showToast)==null||Ee.call(window,tt instanceof Error?tt.message:o("user.toastDeletedFailed"),"error")}}})}function Be(v){var he;_(null);const fe=v.subscribe_url;if(!fe){(he=window.showToast)==null||he.call(window,o("user.toastNoSubscribeUrl"),"error");return}Vt({url:fe,userId:v.id})}function We(v){_(null),s.push(`/order?user_id=${v.id}`)}function y(v){_(null),s.push(`/subscription?user_id=${v.id}`)}function oe(v){_(null),D("invite_user_id"),I(String(v.id)),He(1,String(v.id),"invite_user_id")}async function pe(v,fe){rt(!0),An("");try{const he=await I0(v,fe,Ae);Jt(he.data||[]),Nt(he.total||0),Mt(fe)}catch(he){An(he instanceof Error?he.message:o("user.historyLoading"))}finally{rt(!1)}}function _e(v){_(null),Xt(v),pe(v.id,1)}function gt(v){_(null),Ue(v.email),Re({plan_id:"",period:"month_price",total_amount:""})}async function On(v){var fe,he;if(v.preventDefault(),!!Me){ft(!0);try{await Pd({email:Me,plan_id:Number(Ve.plan_id),period:Ve.period,total_amount:(Number(Ve.total_amount)||0)*100}),(fe=window.showToast)==null||fe.call(window,o("user.toastAssignSuccess"),"success"),Ue(null)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastAssignFailed"),"error")}finally{ft(!1)}}}function oa(v){_(null),ce(v),V({id:v.id,email:v.email,invite_user_email:"",password:"",balance:v.balance,commission_balance:v.commission_balance,u:jd(v.u),d:jd(v.d),transfer_enable:jd(v.transfer_enable),device_limit:v.device_limit,network_settings:v.network_settings??"",expired_at:iw(v.expired_at),plan_id:v.plan_id,banned:v.banned,commission_type:v.commission_type??0,commission_rate:v.commission_rate??"",discount:v.discount??"",speed_limit:v.speed_limit,is_admin:v.is_admin,is_staff:v.is_staff,remarks:v.remarks??""})}function yt(v,fe){V(he=>({...he,[v]:fe}))}async function Kn(v){var fe,he;if(v.preventDefault(),!!$){ue(!0);try{const Ee={id:$.id,email:z.email,plan_id:z.plan_id||null,expired_at:Yh(String(z.expired_at??"")),transfer_enable:wd(Number(z.transfer_enable??0)),speed_limit:z.speed_limit||null,device_limit:z.device_limit||null,u:wd(Number(z.u??0)),d:wd(Number(z.d??0)),balance:Number(z.balance??0),commission_balance:Number(z.commission_balance??0),commission_rate:z.commission_rate!==""&&z.commission_rate!==null?Number(z.commission_rate):null,commission_type:Number(z.commission_type??0),discount:z.discount!==""&&z.discount!==null?Number(z.discount):null,network_settings:z.network_settings||null,remarks:z.remarks||null,is_admin:Number(z.is_admin??0),is_staff:Number(z.is_staff??0),banned:Number(z.banned??0)};z.invite_user_email&&(Ee.invite_user_email=z.invite_user_email),z.password&&(Ee.password=z.password),await Q0(Ee),(fe=window.showToast)==null||fe.call(window,o("user.toastSaveSuccess"),"success"),ce(null),await He(w,B,Y)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastSaveFailed"),"error")}finally{ue(!1)}}}async function Dt(v){var fe,he;v.preventDefault(),Se(!0);try{await Z0({email_prefix:M.email_prefix,email_suffix:M.email_suffix,password:M.password||void 0,plan_id:M.plan_id?Number(M.plan_id):void 0,expired_at:Yh(M.expired_at)}),(fe=window.showToast)==null||fe.call(window,o("user.toastCreateSuccess"),"success"),N(!1),ee({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await He(w,B,Y)}catch(Ee){(he=window.showToast)==null||he.call(window,Ee instanceof Error?Ee.message:o("user.toastCreateFailed"),"error")}finally{Se(!1)}}const St=Math.ceil(b/15),Aa=_d(Y);return t.jsxs(Ft,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[b," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>G(!A),children:[t.jsx(zv,{size:16}),o("user.columns")]}),A?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Qe})})}),$d.map(v=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:P.has(v.key),onChange:()=>we(v.key)}),t.jsx("span",{children:sn(v.key,o)})]},v.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void He(w,B,Y),disabled:Q,children:[t.jsx(Et,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(!0),children:[t.jsx(Mn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Y,onChange:v=>D(v.target.value),children:Vo.map(v=>t.jsx("option",{value:v.value,children:rw(v.value,o)},v.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Wo,{size:16}),t.jsx("input",{className:"config-input search-input",value:B,onChange:v=>I(v.target.value),placeholder:Aa.placeholder,onKeyDown:v=>v.key==="Enter"&&Xe()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Xe,children:[t.jsx(xs,{size:16}),o("user.filter")]}),B?t.jsxs("button",{className:"ghost-button",type:"button",onClick:nt,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),H?t.jsx("div",{className:"form-error",children:H}):null,Q&&d.length===0?t.jsx(wt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Q?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(v=>{const fe=qo(v.u+v.d),he=qo(v.transfer_enable),Ee=parseFloat(fe);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",v.id]}),t.jsx("span",{className:"user-email",title:v.email,children:v.email})]}),v.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ct(v)," / ",v.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):In(v)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ee>0?Ee>parseFloat(he)*.9?"high":"ok":""}`,children:[fe," GB"]})," / ",he," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("devices",o)}),t.jsx("span",{className:"info-val",children:L(v,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("expires",o)}),t.jsx("span",{className:"info-val",children:v.expired_at?t.jsx("span",{className:`expiry-date ${v.expired_at<Date.now()/1e3?"expired":""}`,children:Lo(v.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(v.balance/100).toFixed(2)," ₫ / ",(v.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Lo(v.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${be===v.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>_(be===v.id?null:v.id),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===v.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>_(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:tt=>tt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:v.email}),t.jsxs("small",{children:["#",v.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:16})})]}),ze(v,!1,"mobile-action-menu")]})}):null]})})]},v.id)}),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:sn("id",o)}),ye("email")&&t.jsx("th",{children:sn("email",o)}),ye("status")&&t.jsx("th",{children:sn("status",o)}),ye("plan")&&t.jsx("th",{children:sn("plan",o)}),ye("group")&&t.jsx("th",{children:sn("group",o)}),ye("used")&&t.jsx("th",{children:sn("used",o)}),ye("traffic")&&t.jsx("th",{children:sn("traffic",o)}),ye("devices")&&t.jsx("th",{children:sn("devices",o)}),ye("expires")&&t.jsx("th",{children:sn("expires",o)}),ye("balance")&&t.jsx("th",{children:sn("balance",o)}),ye("commission")&&t.jsx("th",{children:sn("commission",o)}),ye("joined")&&t.jsx("th",{children:sn("joined",o)}),ye("actions")&&t.jsx("th",{children:sn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(v=>{const fe=qo(v.u+v.d),he=qo(v.transfer_enable),Ee=parseFloat(fe);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:v.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:v.email})}),ye("status")&&t.jsx("td",{children:v.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Ct(v)}),ye("group")&&t.jsx("td",{children:v.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):In(v)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ee>0?Ee>parseFloat(he)*.9?"high":"ok":""}`,children:fe})}),ye("traffic")&&t.jsx("td",{children:he}),ye("devices")&&t.jsx("td",{children:L(v)}),ye("expires")&&t.jsx("td",{children:v.expired_at?t.jsx("span",{className:`expiry-date ${v.expired_at<Date.now()/1e3?"expired":""}`,children:Lo(v.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(v.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(v.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Lo(v.created_at)})}),ye("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${be===v.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:tt=>hn(v.id,tt.currentTarget),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===v.id&&R?ox.createPortal(ze(v,!0),document.body):null]})})]},v.id)}),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Qe,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),St>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:w<=1,onClick:()=>dn(w-1),children:t.jsx(Ma,{size:16})}),Array.from({length:Math.min(5,St)},(v,fe)=>{let he;return St<=5||w<=3?he=fe+1:w>=St-2?he=St-4+fe:he=w-2+fe,t.jsx("button",{className:`mini-button ${he===w?"active-page":""}`,onClick:()=>dn(he),children:he},he)}),St>5?t.jsxs("span",{className:"page-info",children:["… ",St]}):null,t.jsx("button",{className:"mini-button",disabled:w>=St,onClick:()=>dn(w+1),children:t.jsx(Da,{size:16})})]})}):null]}),$?t.jsx("div",{className:"modal-backdrop",onClick:()=>ce(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Kn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(z.email??""),onChange:v=>yt("email",v.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(z.invite_user_email??""),onChange:v=>yt("invite_user_email",v.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(z.password??""),onChange:v=>yt("password",v.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(z.balance??0)/100).toFixed(2)),onChange:v=>yt("balance",Math.round(Number(v.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(z.commission_balance??0)/100).toFixed(2)),onChange:v=>yt("commission_balance",Math.round(Number(v.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.u??0),onChange:v=>yt("u",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.d??0),onChange:v=>yt("d",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(z.transfer_enable??0),onChange:v=>yt("transfer_enable",v.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(z.device_limit??""),onChange:v=>yt("device_limit",v.target.value?Number(v.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(z.network_settings??""),onChange:v=>yt("network_settings",v.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(z.expired_at??""),onChange:v=>yt("expired_at",v.target.value),onClick:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(z.plan_id??""),onChange:v=>yt("plan_id",v.target.value?Number(v.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(z.banned??0),onChange:v=>yt("banned",Number(v.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(z.commission_type??0),onChange:v=>yt("commission_type",Number(v.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(z.commission_rate??""),onChange:v=>yt("commission_rate",v.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(z.discount??""),onChange:v=>yt("discount",v.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(z.speed_limit??""),onChange:v=>yt("speed_limit",v.target.value?Number(v.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${z.is_admin?"active":""}`,onClick:()=>yt("is_admin",z.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${z.is_staff?"active":""}`,onClick:()=>yt("is_staff",z.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(z.remarks??""),onChange:v=>yt("remarks",v.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ce(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:T,children:o(T?"common.processing":"common.save")})]})]})]})}):null,k?t.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Dt,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:M.email_prefix,onChange:v=>ee({...M,email_prefix:v.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:M.email_suffix,onChange:v=>ee({...M,email_suffix:v.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:M.password,onChange:v=>ee({...M,password:v.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:M.plan_id,onChange:v=>ee({...M,plan_id:v.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:M.expired_at,onChange:v=>ee({...M,expired_at:v.target.value}),onClick:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:v=>{var fe,he;return(he=(fe=v.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:me,children:o(me?"user.creating":"user.createUser")})]})]})]})}):null,Me?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ue(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ue(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:On,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Me})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Ve.plan_id,onChange:v=>Re({...Ve,plan_id:v.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),m.map(v=>t.jsx("option",{value:v.id,children:v.name},v.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Ve.period,onChange:v=>Re({...Ve,period:v.target.value}),children:ow.map(v=>t.jsx("option",{value:v.value,children:cw(v.value,o)},v.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Ve.total_amount,onChange:v=>Re({...Ve,total_amount:v.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ue(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:et,children:o(et?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

        .user-table th, .user-table td { white-space: nowrap; font-size: 13px; }
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
      `}}),Qt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Vt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Vt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Qt.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Qt.userId})})]})]})}):null,xt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Xt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:v=>v.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:xt.email,id:xt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[on?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:on}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((v,fe)=>v+fe.u+fe.d,0))})]})]}),fn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(wt,{label:o("user.historyLoading")})}):ot.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(xh,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:ot.map(v=>{const fe=hl(v.u),he=hl(v.d),Ee=hl(v.u+v.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:lw(v.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(v.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:fe}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ee})]},v.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((je-1)*Ae+1,bt),end:Math.min(je*Ae,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:je<=1,onClick:()=>pe(xt.id,je-1),children:[t.jsx(Ma,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:je*Ae>=bt,onClick:()=>pe(xt.id,je+1),children:[o("user.historyNext"),t.jsx(Da,{size:16})]})]})]})]})]})]})}):null]})}function uw(s,l=8,o=4){return s.length<=l+o+3?s:`${s.slice(0,l)}...${s.slice(-o)}`}function ps({value:s,onCopy:l,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:m=4}){const{t:f}=Ye(),[C,g]=h.useState(!1),b=C?s:uw(s,u,m);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:f("uuid.copy"),onClick:()=>void l(),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:C?s:b,children:b})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:f(C?"uuid.hide":"uuid.showFull"),"aria-label":f(C?"uuid.hide":"uuid.showFull"),onClick:()=>g(j=>!j),children:C?t.jsx(Dv,{size:14}):t.jsx(Av,{size:14})})]})}const Qh=15,Xh=20,pw=["email","id","user_id","plan_id","status"],mw=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function li(s,l){return s?new Date(s*1e3).toLocaleString():l}function fw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function hw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Mi(s){return+(s/1073741824).toFixed(2)}function Nd(s){return Math.round((Number(s)||0)*1073741824)}function xw(s){return s==="email"?"like":"="}function bw(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function gw(s,l){const o=l(`order.period.${s}`);return o===`order.period.${s}`?s:o}function Zh(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Kh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function Fh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Vh(s){return String(s.hwid??"").trim()!==""}function yw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function vw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=h.useState([]),[m,f]=h.useState([]),[C,g]=h.useState(0),[b,j]=h.useState(1),[w,S]=h.useState("email"),[B,I]=h.useState(""),[Y,D]=h.useState(!0),[Q,U]=h.useState(""),[H,ae]=h.useState(null),[P,de]=h.useState({}),[A,G]=h.useState(null),[ne,be]=h.useState(null),[_,R]=h.useState([]),[le,$]=h.useState(0),[ce,z]=h.useState(1),[V,T]=h.useState(!1),[ue,k]=h.useState(""),[N,M]=h.useState(null),[ee,me]=h.useState(null),[Se,Me]=h.useState({period:"month_price",total_amount:""}),[Ue,Ve]=h.useState(!1),[Re,et]=h.useState(null),[ft,Qt]=h.useState(null),[Vt,xt]=h.useState(null);function Xt(y){const oe=y==null?void 0:y.trim();oe&&s.push(`/user?email=${encodeURIComponent(oe)}`)}const ot=h.useCallback(async(y=1,oe="",pe="email")=>{D(!0),U("");try{const _e=oe.trim()?[{key:pe,condition:xw(pe),value:oe.trim()}]:void 0,gt=await F0(y,Qh,_e);u(gt.data),g(gt.total),j(y)}catch(_e){U(_e instanceof Error?_e.message:o("subscription.loadFailed"))}finally{D(!1)}},[o]),Jt=h.useCallback(async(y,oe=1)=>{T(!0),k("");try{const pe=await Dx(oe,Xh,[{key:"subscription_id",condition:"=",value:String(y.id)}]);R(pe.data),$(pe.total),z(oe)}catch(pe){k(pe instanceof Error?pe.message:o("subscription.slotsLoadFailed"))}finally{T(!1)}},[o]),bt=h.useCallback(async()=>{var y;try{f(await mi())}catch(oe){(y=window.showToast)==null||y.call(window,oe instanceof Error?oe.message:o("subscription.plansLoadFailed"),"error")}},[o]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}bt();const y=new URLSearchParams(l.search),pe=[["user_id",y.get("user_id")],["id",y.get("id")],["plan_id",y.get("plan_id")],["email",y.get("email")],["status",y.get("status")]].find(([,_e])=>_e&&_e.trim());if(pe){const[_e,gt]=pe,On=gt??"";S(_e),I(On),ot(1,On,_e);return}ot()},[ot,bt,l.search,s]),h.useEffect(()=>{function y(oe){const pe=oe.target instanceof Element?oe.target:null;Re!==null&&(!pe||!pe.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Nt()}return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[Re]),h.useEffect(()=>{if(Re===null)return;const y=()=>Nt();return window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[Re]);function Nt(){et(null),Qt(null)}function je(y,oe){if(Re===y&&ft){Nt();return}const pe=oe.getBoundingClientRect(),_e=230,gt=292,On=6,oa=8,yt=Math.max(oa,Math.min(window.innerWidth-_e-oa,pe.right-_e)),Dt=pe.bottom+On+gt<=window.innerHeight-oa?pe.bottom+On:Math.max(oa,pe.top-gt-On);Qt({top:Dt,left:yt}),et(y)}function Mt(y){Qt(null),et(oe=>oe===y?null:y)}function Ae(y){y.preventDefault(),ot(1,B,w)}function fn(){if(I(""),l.search){s.replace("/subscription");return}ot(1,"",w)}function rt(y){if(!y)return o("subscription.noPlan");const oe=m.find(pe=>Number(pe.id)===Number(y));return oe?`#${oe.id} - ${oe.name}`:`#${y}`}function on(y){ae(y),de({plan_id:y.plan_id?String(y.plan_id):"",transfer_enable:String(Mi(y.transfer_enable)),u:String(Mi(y.u)),d:String(Mi(y.d)),device_limit:y.device_limit===null?"":String(y.device_limit),speed_limit:y.speed_limit===null?"":String(y.speed_limit),expired_at:fw(y.expired_at),status:y.status,auto_renewal:String(y.auto_renewal||0),remarks:y.remarks??""})}async function An(y){var oe,pe;if(y.preventDefault(),!!H){G(H.id);try{await J0({id:H.id,plan_id:P.plan_id===""?null:Number(P.plan_id),transfer_enable:Nd(P.transfer_enable),u:Nd(P.u),d:Nd(P.d),device_limit:P.device_limit===""?null:Number(P.device_limit),speed_limit:P.speed_limit===""?null:Number(P.speed_limit),expired_at:hw(P.expired_at),status:P.status,auto_renewal:Number(P.auto_renewal),remarks:P.remarks}),ae(null),(oe=window.showToast)==null||oe.call(window,o("subscription.updateSuccess"),"success"),await ot(b,B,w)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("subscription.saveFailed"),"error")}finally{G(null)}}}function hn(y){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.resetConfirm",{id:y.id}),onConfirm:async()=>{var pe,_e;G(y.id);try{await P0(y.id),(pe=window.showToast)==null||pe.call(window,o("subscription.resetSuccess"),"success"),await ot(b,B,w)}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.resetFailed"),"error")}finally{G(null)}}})}function F(y){var oe,pe;if(!y.user_email){(oe=window.showToast)==null||oe.call(window,o("subscription.renewMissingEmail"),"error");return}if(!y.plan_id){(pe=window.showToast)==null||pe.call(window,o("subscription.renewMissingPlan"),"error");return}me(y),Me({period:"month_price",total_amount:""})}async function ze(y){var oe,pe;if(y.preventDefault(),!(!(ee!=null&&ee.user_email)||!ee.plan_id)){Ve(!0);try{await Pd({email:ee.user_email,plan_id:ee.plan_id,period:Se.period,total_amount:Math.round((Number(Se.total_amount)||0)*100),subscription_id:ee.id}),(oe=window.showToast)==null||oe.call(window,o("subscription.renewSuccess"),"success"),me(null)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("subscription.renewFailed"),"error")}finally{Ve(!1)}}}async function we(y){var pe;if(!y)return;const oe=await di(y);(pe=window.showToast)==null||pe.call(window,o(oe?"subscription.copySuccess":"common.copyFailed"),oe?"success":"error")}function ye(y,oe){u(pe=>pe.map(_e=>_e.id===y?{..._e,subscribe_url:oe}:_e)),be(pe=>pe&&pe.id===y?{...pe,subscribe_url:oe}:pe)}async function Qe(y){if(y.subscribe_url)return y.subscribe_url;const pe=(await V0(y.id)).data||null;return pe&&ye(y.id,pe),pe}async function He(y){var oe;if(!y.subscribe_url){M(y.id);try{await Qe(y)}catch(pe){(oe=window.showToast)==null||oe.call(window,pe instanceof Error?pe.message:o("common.copyFailed"),"error")}finally{M(null)}}}async function qe(y){var oe,pe;M(y.id);try{const _e=await Qe(y);if(!_e){(oe=window.showToast)==null||oe.call(window,o("common.copyFailed"),"error");return}await we(_e)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{M(null)}}async function Xe(y){var oe,pe;M(y.id);try{const _e=await Qe(y);if(!_e){(oe=window.showToast)==null||oe.call(window,o("common.copyFailed"),"error");return}xt({url:_e,subscriptionId:y.id})}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{M(null)}}function nt(y){be(y),R([]),$(0),z(1),Jt(y,1),He(y)}function dn(y=ce){return ne?Jt(ne,y):Promise.resolve()}function Ct(y){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var pe,_e;G(y.id);try{await Ax(y.id),(pe=window.showToast)==null||pe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([dn(),ot(b,B,w)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.unbindFailed"),"error")}finally{G(null)}}})}function In(y){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var pe,_e;G(y.id);try{await Ox(y.id),(pe=window.showToast)==null||pe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([dn(),ot(b,B,w)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.banFailed"),"error")}finally{G(null)}}})}function Lt(y){const oe=y.device_limit&&y.device_limit>0?String(y.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:y.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:oe})]}),y.device_limit&&y.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(y.device_count/y.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>nt(y),children:[t.jsx(Dd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function un(y){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Mi(y.total_used)," / ",Mi(y.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${yw(y)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Mi(y.u),download:Mi(y.d)})})]})}function Zn(y){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(ps,{value:y.uuid,onCopy:()=>we(y.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function pn(y){return t.jsxs("div",{className:"subscription-link-stack",children:[Zn(y),y.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.subscribe_url,onClick:()=>void qe(y),disabled:N===y.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:y.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void qe(y),disabled:N===y.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{children:N===y.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function L(y){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:N===y.id,onClick:()=>void Xe(y),children:[t.jsx(Od,{size:14}),N===y.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),pn(y)]})}function se(y,oe=!1,pe=""){const _e=gt=>{Nt(),gt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${oe?"subscription-action-menu-fixed":""} ${pe}`.trim(),style:oe&&ft?{top:ft.top,left:ft.left}:void 0,onMouseDown:gt=>gt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>on(y)),children:[t.jsx(Kt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>F(y)),children:[t.jsx(jx,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>nt(y)),children:[t.jsx(Dd,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===y.id,onClick:()=>_e(()=>void qe(y)),children:[t.jsx(Ta,{size:14}),N===y.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===y.id,onClick:()=>_e(()=>void Xe(y)),children:[t.jsx(Od,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:A===y.id,onClick:()=>_e(()=>hn(y)),children:[t.jsx(Vd,{size:14}),o("subscription.resetSecret")]})]})}function W(y,oe="desktop"){return oe==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===y.id&&!ft?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Mt(y.id),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===y.id&&!ft?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Nt,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:pe=>pe.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:y.user_email??o("subscription.userId",{id:y.user_id})}),t.jsxs("small",{children:["#",y.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Nt,children:t.jsx(lt,{size:16})})]}),se(y,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:pe=>je(y.id,pe.currentTarget),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===y.id&&ft?ox.createPortal(se(y,!0),document.body):null]})}const Ce=Math.ceil(C/Qh),Be=Math.ceil(le/Xh),We=Ce>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:b<=1||Y,onClick:()=>void ot(b-1,B,w),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:b,total:Ce})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:b>=Ce||Y,onClick:()=>void ot(b+1,B,w),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null;return t.jsxs(Ft,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:C})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void ot(b,B,w),children:[t.jsx(Et,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:Ae,children:[t.jsx("select",{className:"config-input filter-select",value:w,onChange:y=>S(y.target.value),children:pw.map(y=>t.jsx("option",{value:y,children:bw(y,o)},y))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Wo,{size:16}),t.jsx("input",{className:"config-input",value:B,onChange:y=>I(y.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(xs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:fn,children:o("common.clearFilter")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,Y&&d.length===0?t.jsx(wt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(y=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",y.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:y.plan_name??"-"}),y.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(y.user_email),title:o("subscription.viewUser"),children:y.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:y.user_id}),y.plan_id?` - ${o("subscription.planId",{id:y.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${y.status}`,children:Zh(y.status,o)})}),t.jsx("td",{children:un(y)}),t.jsx("td",{children:Lt(y)}),t.jsx("td",{children:li(y.expired_at,o("subscription.never"))}),t.jsx("td",{children:li(y.updated_at,o("subscription.never"))}),t.jsx("td",{children:W(y)})]},y.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(y=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",y.id]}),t.jsx("strong",{className:"subscription-plan-name",children:y.plan_name??"-"}),y.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(y.user_email),title:o("subscription.viewUser"),children:y.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${y.status}`,children:Zh(y.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),un(y)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Lt(y)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:li(y.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:li(y.updated_at,o("subscription.never"))})]})]}),W(y,"mobile")]},y.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),We,ne?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>be(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ne.id})}),t.jsx("p",{children:ne.user_email??o("subscription.userId",{id:ne.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>be(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[ue?t.jsx("div",{className:"form-error",children:ue}):null,V&&_.length===0?t.jsx(wt,{label:o("subscription.slotsLoading")}):null,L(ne),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[_.map(y=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(ps,{value:y.uuid,onCopy:()=>we(y.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Fh(y.status)}`,children:Kh(y.status,o)})}),t.jsx("td",{children:y.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.hwid,onClick:()=>we(y.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:y.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:y.user_agent??"",children:y.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:y.last_ip??"-"}),t.jsx("small",{children:y.first_ip?o("subscription.firstIp",{ip:y.first_ip}):"-"})]}),t.jsx("td",{children:li(y.first_seen_at,"-")}),t.jsx("td",{children:li(y.last_seen_at,"-")}),t.jsx("td",{children:Vh(y)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===y.id,onClick:()=>Ct(y),children:[t.jsx(Rd,{size:14}),o("subscription.unbind")]}),y.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===y.id,onClick:()=>In(y),children:[t.jsx(Di,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},y.id)),!V&&_.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[_.map(y=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Fh(y.status)}`,children:Kh(y.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(ps,{value:y.uuid,onCopy:()=>we(y.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),y.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:y.hwid,onClick:()=>we(y.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:y.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:y.last_ip??"-"}),t.jsx("small",{children:y.first_ip?o("subscription.firstIp",{ip:y.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:y.user_agent??"",children:y.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:li(y.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:li(y.last_seen_at,"-")})]})]}),Vh(y)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===y.id,onClick:()=>Ct(y),children:[t.jsx(Rd,{size:14}),o("subscription.unbind")]}),y.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===y.id,onClick:()=>In(y),children:[t.jsx(Di,{size:14}),o("subscription.ban")]}):null]}):null]},y.id)),!V&&_.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Be>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:ce<=1||V,onClick:()=>void dn(ce-1),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:ce,total:Be})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ce>=Be||V,onClick:()=>void dn(ce+1),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null]})]})}):null,Vt?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>xt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:Vt.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Vt.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:Vt.url})]})]})}):null,H?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ae(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:H.id})}),t.jsx("p",{children:H.user_email??o("subscription.userId",{id:H.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ae(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:An,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:P.plan_id,onChange:y=>de(oe=>({...oe,plan_id:y.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),m.map(y=>t.jsxs("option",{value:y.id,children:["#",y.id," - ",y.name]},y.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.transfer_enable,onChange:y=>de(oe=>({...oe,transfer_enable:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.u,onChange:y=>de(oe=>({...oe,u:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.d,onChange:y=>de(oe=>({...oe,d:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.device_limit,onChange:y=>de(oe=>({...oe,device_limit:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.speed_limit,onChange:y=>de(oe=>({...oe,speed_limit:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:P.expired_at,onChange:y=>de(oe=>({...oe,expired_at:y.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:P.status,onChange:y=>de(oe=>({...oe,status:y.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:P.auto_renewal,onChange:y=>de(oe=>({...oe,auto_renewal:y.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:P.remarks,onChange:y=>de(oe=>({...oe,remarks:y.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ae(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:A===H.id,children:A===H.id?o("common.processing"):o("common.save")})]})]})]})}):null,ee?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>me(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:ee.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>me(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ze,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:ee.user_email??"",children:ee.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",ee.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:rt(ee.plan_id),children:rt(ee.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:Se.period,onChange:y=>Me(oe=>({...oe,period:y.target.value})),children:mw.map(y=>t.jsx("option",{value:y,children:gw(y,o)},y))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:y=>Me(oe=>({...oe,total_amount:y.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>me(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Ue,children:o(Ue?"common.processing":"common.save")})]})]})]})}):null]})}const Jh=15,jw=["email","user_id","node","hwid","user_agent","last_ip"];function rs(s){return s?new Date(s*1e3).toLocaleString():"-"}function si(s){const l=Math.max(0,Number(s??0));if(l===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=l,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function ww(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function _w(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"node":return l("device.filterNode");case"node_id":return l("device.filterNodeId");case"node_type":return l("device.filterNodeType");case"user_agent":return l("device.filterUserAgent");case"last_ip":return l("device.filterIp");default:return""}}function Ph(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function Bo(s){return(s.online_ips??[]).join(", ")||"-"}function Go(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function Nw(s){return String(s.hwid??"").trim()!==""}function Sw(s){var m,f,C;const l=new URLSearchParams(s),o=(m=l.get("node_type"))==null?void 0:m.trim(),d=(f=l.get("node_id"))==null?void 0:f.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const g of u){const b=(C=l.get(g))==null?void 0:C.trim();if(b)return{field:g,value:b}}return null}function kw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=h.useState([]),[m,f]=h.useState(0),[C,g]=h.useState(1),[b,j]=h.useState("email"),[w,S]=h.useState(""),[B,I]=h.useState(!0),[Y,D]=h.useState(""),[Q,U]=h.useState(null),[H,ae]=h.useState(null),[P,de]=h.useState(null),A=h.useCallback(async(T=1,ue="",k="email")=>{I(!0),D("");try{const N=ue.trim()?[{key:k,condition:ww(k),value:ue.trim()}]:void 0,M=await Dx(T,Jh,N);u(M.data),f(M.total),g(T)}catch(N){D(N instanceof Error?N.message:o("device.loadFailed"))}finally{I(!1)}},[o]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}const T=Sw(l.search);if(T){j(T.field),S(T.value),A(1,T.value,T.field);return}A()},[A,s,l.search]),h.useEffect(()=>{if(P===null)return;function T(k){const N=k.target;N!=null&&N.closest(".device-action-wrap")||de(null)}function ue(k){k.key==="Escape"&&de(null)}return document.addEventListener("pointerdown",T),document.addEventListener("keydown",ue),()=>{document.removeEventListener("pointerdown",T),document.removeEventListener("keydown",ue)}},[P]);function G(T){T.preventDefault(),A(1,w,b)}function ne(){if(S(""),l.search){s.replace("/device");return}A(1,"",b)}async function be(T){var k;if(!T.hwid)return;const ue=await di(T.hwid);(k=window.showToast)==null||k.call(window,o(ue?"device.copySuccess":"common.copyFailed"),ue?"success":"error")}async function _(T){var k;const ue=await di(T.uuid);(k=window.showToast)==null||k.call(window,o(ue?"device.copyUuidSuccess":"common.copyFailed"),ue?"success":"error")}function R(T){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var k,N;U(T.id);try{await Ax(T.id),(k=window.showToast)==null||k.call(window,o("device.unbindSuccess"),"success"),await A(C,w,b)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.unbindFailed"),"error")}finally{U(null)}}})}function le(T){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var k,N;U(T.id);try{await Ox(T.id),(k=window.showToast)==null||k.call(window,o("device.banSuccess"),"success"),await A(C,w,b)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.banFailed"),"error")}finally{U(null)}}})}function $(T){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.resetConfirm",{user:T.user_email??`#${T.user_id}`}),onConfirm:async()=>{var k,N;ae(T.user_id);try{await W0(T.user_id),(k=window.showToast)==null||k.call(window,o("device.resetSuccess"),"success"),await A(C,w,b)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.resetFailed"),"error")}finally{ae(null)}}})}function ce(T){de(null),T()}function z(T,ue){const k=ue==="mobile"?-T.id:T.id,N=P===k,M=Nw(T);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${N?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>de(N?null:k),children:[o("device.action")," ",t.jsx(Ea,{size:14})]}),N?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[M?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===T.id,onClick:()=>ce(()=>R(T)),children:[t.jsx(Rd,{size:14}),o("device.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===T.id,onClick:()=>ce(()=>le(T)),children:[t.jsx(Di,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:H===T.user_id,onClick:()=>ce(()=>$(T)),children:[t.jsx(Fv,{size:14}),o("device.resetUser")]})]}):null]})}const V=Math.ceil(m/Jh);return t.jsxs(Ft,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:m})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void A(C,w,b),children:[t.jsx(Et,{size:16}),o(B?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:G,children:[t.jsx("select",{className:"config-input filter-select",value:b,onChange:T=>j(T.target.value),children:jw.map(T=>t.jsx("option",{value:T,children:_w(T,o)},T))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Wo,{size:16}),t.jsx("input",{className:"config-input",value:w,onChange:T=>S(T.target.value),placeholder:o(b==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(xs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),Y?t.jsx("div",{className:"form-error",children:Y}):null,B&&d.length===0?t.jsx(wt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(T=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:T.user_email??"-"}),t.jsxs("small",{children:["ID: ",T.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[T.plan_name??"-",T.user_plan_id?` #${T.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Ph(T.status,o)}),t.jsxs("span",{className:`online-badge ${T.is_online?"online":"offline"}`,children:[T.is_online?t.jsx(yh,{size:14}):t.jsx(gh,{size:14}),T.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(ps,{value:T.uuid,onCopy:()=>_(T),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),T.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:T.hwid,onClick:()=>be(T),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${T.last_ip??"-"} / ${T.first_ip??"-"}`,children:[T.last_ip??"-",T.first_ip?` (${T.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${si(T.device_upload)} / ${o("device.download")}: ${si(T.device_download)}`,children:[si(T.device_used_traffic)," / ",o("device.upload"),": ",si(T.device_upload)," / ",o("device.download"),": ",si(T.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Bo(T)} / ${Go(T)}`,children:[o("device.onlineIps"),": ",Bo(T)," / ",o("device.onlineNodes"),": ",Go(T)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",rs(T.first_seen_at)," / ",o("device.lastSeen"),": ",rs(T.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:z(T,"mobile")})]},T.id)),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(T=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:T.user_email??"-"}),t.jsxs("small",{children:["ID: ",T.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[T.plan_name??"-",T.user_plan_id?` #${T.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Ph(T.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:si(T.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",si(T.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",si(T.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${T.is_online?"online":"offline"}`,children:[T.is_online?t.jsx(yh,{size:14}):t.jsx(gh,{size:14}),T.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Bo(T),children:[o("device.onlineIps"),": ",Bo(T)]}),t.jsxs("small",{title:Go(T),children:[o("device.onlineNodes"),": ",Go(T)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",rs(T.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(ps,{value:T.uuid,onCopy:()=>_(T),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),T.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:T.hwid,onClick:()=>be(T),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?`${o("device.firstIp")}: ${T.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:rs(T.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:rs(T.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:z(T,"desktop")})]},T.id)),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),V>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:C<=1||B,onClick:()=>void A(C-1,w,b),children:[t.jsx(Ma,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:C,total:V})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:C>=V||B,onClick:()=>void A(C+1,w,b),children:[o("device.next"),t.jsx(Da,{size:14})]})]}):null]})]})}const Cw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function tu(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return tu(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function Wh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:tu(s.plan_id)}:{...Cw}}function Sd(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function zw(s){const l=Number(s);if(!l)return"-";const o=new Date(l*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function Tw(s){return Number(s)===1}function Ih(s,l,o){if(!s.length)return o("webcon.allPlans");const d=new Map(l.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function oi(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function Ew(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState([]),[f,C]=h.useState(null),[g,b]=h.useState(!0),[j,w]=h.useState(!1),[S,B]=h.useState(null),[I,Y]=h.useState(""),D=h.useCallback(async()=>{b(!0),Y("");try{const[A,G]=await Promise.all([p1(),mi()]);d(A),m(G)}catch(A){Y(A instanceof Error?A.message:l("webcon.toastLoadFailed"))}finally{b(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}D()},[D,s]);const Q=h.useMemo(()=>u.map(A=>({id:Number(A.id),name:A.name})),[u]);function U(A,G){C(ne=>ne&&{...ne,[A]:G})}function H(A,G){C(ne=>{if(!ne)return ne;const be=G?Array.from(new Set([...ne.plan_ids,A])):ne.plan_ids.filter(_=>_!==A);return{...ne,plan_ids:be}})}async function ae(A){var ne,be;if(A.preventDefault(),!f)return;const G=Sd(f.domain);w(!0),Y("");try{await m1({id:f.id,email:f.email.trim(),domain:G,title:f.title.trim(),description:f.description.trim()||null,logo:f.logo.trim()||null,background_url:f.background_url.trim()||null,custom_html:f.custom_html||null,plan_ids:f.plan_ids,plan_id:f.plan_ids}),C(null),(ne=window.showToast)==null||ne.call(window,l("webcon.toastSaveSuccess"),"success"),await D()}catch(_){const R=_ instanceof Error?_.message:l("webcon.toastSaveFailed");Y(R),(be=window.showToast)==null||be.call(window,R,"error")}finally{w(!1)}}async function P(A){var G,ne;B(A.id);try{await h1(A.id),(G=window.showToast)==null||G.call(window,l("webcon.toastToggleSuccess"),"success"),await D()}catch(be){const _=be instanceof Error?be.message:l("webcon.toastToggleFailed");Y(_),(ne=window.showToast)==null||ne.call(window,_,"error")}finally{B(null)}}function de(A){var G;(G=window.showConfirm)==null||G.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ne,be;B(A.id),Y("");try{await f1(A.id),(ne=window.showToast)==null||ne.call(window,l("webcon.toastDeleteSuccess"),"success"),await D()}catch(_){const R=_ instanceof Error?_.message:l("webcon.toastDeleteFailed");Y(R),(be=window.showToast)==null||be.call(window,R,"error")}finally{B(null)}}})}return t.jsxs(Ft,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:g,onClick:()=>void D(),children:[t.jsx(Et,{size:16}),l(g?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>C(Wh()),children:[t.jsx(Mn,{size:16}),l("webcon.add")]})]})]}),I?t.jsx("div",{className:"form-error",children:I}):null,g&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:l("webcon.colStatus")}),t.jsx("th",{children:l("webcon.colStaffOwner")}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:l("webcon.colLanding")}),t.jsx("th",{children:l("webcon.colPlans")}),t.jsx("th",{children:l("webcon.colCreated")}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(A=>{var ne;const G=tu(A.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",A.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Tw(A.status)?"active":""}`,type:"button",disabled:S===A.id,onClick:()=>void P(A),"aria-label":l("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:A.email??"-"}),t.jsx("small",{children:Number(A.staff)===1?l("webcon.staffEnabled"):l("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:A.domain}),t.jsx("small",{children:l("webcon.adminPath",{path:`/${String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:A.title||"-"}),t.jsx("small",{children:A.description||l("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Hv,{size:13}),A.logo?l("webcon.logo"):l("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(gs,{size:13}),A.background_url?l("webcon.background"):l("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Ih(G,Q,l)}),t.jsx("small",{children:G.length?l("webcon.selectedCount",{count:G.length}):l("webcon.unrestricted")})]})}),t.jsx("td",{children:zw(A.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>C(Wh(A)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:S===A.id,onClick:()=>de(A),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},A.id)}),!g&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>C(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:A=>A.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:f.domain||l("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>C(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ae,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:f.email,onChange:A=>U("email",A.target.value),placeholder:l("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.domain,onChange:A=>U("domain",A.target.value),onBlur:A=>U("domain",Sd(A.target.value)),placeholder:l("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:l("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.title,onChange:A=>U("title",A.target.value),placeholder:l("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.description")),t.jsx("input",{className:"config-input",value:f.description,onChange:A=>U("description",A.target.value),placeholder:l("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.logo,onChange:A=>U("logo",A.target.value),placeholder:l("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.background_url,onChange:A=>U("background_url",A.target.value),placeholder:l("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[oi(l("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Q.map(A=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:f.plan_ids.includes(A.id),onChange:G=>H(A.id,G.target.checked)}),t.jsx("span",{children:A.name})]},A.id)),Q.length===0?t.jsx("span",{className:"webcon-help",children:l("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:l("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[oi(l("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:f.custom_html,onChange:A=>U("custom_html",A.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:f.logo?t.jsx("img",{src:f.logo,alt:""}):t.jsx(Zv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:f.title||l("webcon.previewTitle")}),t.jsx("span",{children:Sd(f.domain)||l("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(Jd,{size:12})," ",Ih(f.plan_ids,Q,l)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>C(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"webcon.saving":"common.save")]})]})]})]})}):null]})}function ex(s){return new Date(s*1e3).toLocaleString("vi-VN")}function kd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Mw(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,C]=h.useState(!0),[g,b]=h.useState(!1),[j,w]=h.useState(""),[S,B]=h.useState(""),I=h.useCallback(async()=>{C(!0),w("");try{d(await e1())}catch(U){w(U instanceof Error?U.message:l("notice.loadFailed"))}finally{C(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);async function Y(U){var H,ae;if(U.preventDefault(),!!u){b(!0),w(""),B("");try{const P=u.tags?u.tags.split(",").map(de=>de.trim()).filter(Boolean):[];await t1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:P.length?P:null}),m(null),(H=window.showToast)==null||H.call(window,l("notice.saveSuccess"),"success"),await I()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("notice.saveFailed"),"error")}finally{b(!1)}}}async function D(U){var H;try{await a1(U),await I()}catch(ae){(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("notice.toggleFailed"),"error")}}async function Q(U){var H;(H=window.showConfirm)==null||H.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var ae,P;try{await n1(U),(ae=window.showToast)==null||ae.call(window,l("notice.deleteSuccess"),"success"),await I()}catch(de){(P=window.showToast)==null||P.call(window,de instanceof Error?de.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[o.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:f,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(kd()),children:[t.jsx(Mn,{size:16}),l("notice.addNotice")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,S?t.jsx("div",{className:"form-success",children:S}):null,f&&o.length===0?t.jsx(wt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{var H;return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void D(U.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((H=U.tags)==null?void 0:H.map((ae,P)=>t.jsx("span",{className:"tag",children:ae},P)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:ex(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>m(kd(U)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(U.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},U.id)}),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(U=>t.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",U.id]})}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void D(U.id),"aria-label":U.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((H,ae)=>t.jsx("span",{className:"tag-badge",children:H},ae)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",ex(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>m(kd(U)),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Q(U.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},U.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:U=>m({...u,title:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:U=>m({...u,content:U.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:U=>m({...u,img_url:U.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:U=>m({...u,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:g,children:[t.jsx(Dn,{size:16}),l(g?"notice.saving":"common.save")]})]})]})]})}):null]})}function Cd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const tx=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},zd=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function Dw(){var _;const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,C]=h.useState(!1),[g,b]=h.useState(null),[j,w]=h.useState(""),[S,B]=h.useState(!0),[I,Y]=h.useState(!1),[D,Q]=h.useState(""),U=h.useRef(null),[H,ae]=h.useState([]),[P,de]=h.useState(null),A=h.useCallback(async()=>{B(!0),Q("");try{d(await i1())}catch(R){Q(R instanceof Error?R.message:"Load failed")}finally{B(!1)}},[]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}A(),mi().then(R=>{R&&ae(R)}).catch(()=>{})},[A,s]),h.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[u]);async function G(R){var le;b(R),w(""),m(null),de(null),C(!0);try{const $=await wh(R);if(m($),$&&$.user_id)try{const ce=await Mx($.user_id);ce&&ce.data&&de(ce.data)}catch(ce){console.error("Failed to load user info:",ce)}}catch{(le=window.showToast)==null||le.call(window,"Failed to load message thread","error")}finally{C(!1)}}async function ne(R){var le,$;if(R.preventDefault(),!(!g||!j.trim())){Y(!0),Q("");try{await l1(g,j),w(""),(le=window.showToast)==null||le.call(window,"Reply sent!","success");try{const ce=await wh(g);m(ce)}catch{}await A()}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:"Reply failed","error")}finally{Y(!1)}}}async function be(R){var le;(le=window.showConfirm)==null||le.call(window,{message:"Close this ticket?",onConfirm:async()=>{var $,ce;Q("");try{await s1(R),($=window.showToast)==null||$.call(window,"Ticket closed!","success"),g===R&&(b(null),m(null)),await A()}catch(z){Q(z instanceof Error?z.message:"Close failed"),(ce=window.showToast)==null||ce.call(window,z instanceof Error?z.message:"Close failed","error")}}})}return t.jsxs(Ft,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:S,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),D?t.jsx("div",{className:"form-error",children:D}):null,S&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{const le=tx(R.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.subject})}),t.jsxs("td",{children:["#",R.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:zd(R.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${le.cls}`,children:le.label})}),t.jsx("td",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:Cd(R.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void G(R.id),children:[t.jsx(cs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(R.id),children:[t.jsx(Ad,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void G(R.id),children:[t.jsx(cs,{size:14}),l("ticket.viewHistory")]})})})]},R.id)}),!S&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(R=>{const le=tx(R.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:R.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:zd(R.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",R.id]})]}),t.jsx("span",{className:`status-pill ${le.cls}`,children:le.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",R.user_id]})]}),t.jsx("span",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:Cd(R.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void G(R.id),children:[t.jsx(cs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(R.id),children:[t.jsx(Ad,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void G(R.id),children:[t.jsx(cs,{size:14}),l("ticket.viewHistory")]})})]},R.id)}),!S&&o.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),g!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${l("ticket.ticketDetail")}: ${u.subject}`:`${l("ticket.ticketDetail")} #${g}`}),t.jsxs("p",{children:[l("ticket.user"),": #",u==null?void 0:u.user_id," | ",l("ticket.level"),": ",u!=null?zd(u.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{b(null),m(null)},children:t.jsx(lt,{size:18})})]}),P&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:P.email,children:P.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((_=H.find(R=>R.id===P.plan_id))==null?void 0:_.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[En(P.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:P.expired_at?new Date(P.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),f?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(wt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(R=>{const le=R.is_me;return t.jsxs("div",{className:`chat-message ${le?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:R.message}),t.jsxs("div",{className:"chat-meta",children:[le?l("ticket.staff"):`${l("ticket.user")} #${R.user_id}`," • ",Cd(R.created_at)]})]},R.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:U})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:j,onChange:R=>w(R.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:I||!j.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(vx,{size:14}),I?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function nx(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const ax={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ix(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Aw(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState([]),[u,m]=h.useState(null),[f,C]=h.useState(!0),[g,b]=h.useState(!1),[j,w]=h.useState(""),[S,B]=h.useState(""),I=h.useCallback(async()=>{C(!0),w("");try{d(await o1())}catch(H){w(H instanceof Error?H.message:l("knowledge.loadFailed"))}finally{C(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);async function Y(H){var ae;try{const P=await r1(H.id);m(ix(P))}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.detailFailed"),"error")}}async function D(H){var ae,P;if(H.preventDefault(),!!u){b(!0),w(""),B("");try{await c1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),m(null),(ae=window.showToast)==null||ae.call(window,l("knowledge.saveSuccess"),"success"),await I()}catch(de){(P=window.showToast)==null||P.call(window,de instanceof Error?de.message:l("knowledge.saveFailed"),"error")}finally{b(!1)}}}async function Q(H){var ae;try{await u1(H),await I()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.toggleFailed"),"error")}}async function U(H){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var P,de;try{await d1(H),(P=window.showToast)==null||P.call(window,l("knowledge.deleteSuccess"),"success"),await I()}catch(A){(de=window.showToast)==null||de.call(window,A instanceof Error?A.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:f,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>m(ix()),children:[t.jsx(Mn,{size:16}),l("knowledge.addArticle")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,S?t.jsx("div",{className:"form-success",children:S}):null,f&&o.length===0?t.jsx(wt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(H=>t.jsxs("tr",{children:[t.jsx("td",{children:H.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:H.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:H.title})}),t.jsx("td",{children:H.language&&ax[H.language]||H.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Q(H.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:H.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:nx(H.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(H),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(H.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},H.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(H=>t.jsxs("div",{className:`knowledge-mobile-card ${H.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",H.id]}),H.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",H.sort]})]}),t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Q(H.id),"aria-label":H.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:H.title}),t.jsxs("div",{className:"card-meta",children:[H.category&&t.jsx("span",{className:"category-badge",children:H.category}),H.language&&t.jsx("span",{className:"lang-badge",children:ax[H.language]||H.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",nx(H.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Y(H),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(H.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},H.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>m(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:D,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:H=>m({...u,category:H.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:H=>m({...u,title:H.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:H=>m({...u,body:H.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:H=>m({...u,language:H.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:H=>m({...u,sort:H.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>m(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:g,children:[t.jsx(Dn,{size:16}),l(g?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Ow(){const s=Rt(),{t:l}=Ye(),[o,d]=h.useState(null),[u,m]=h.useState(null),[f,C]=h.useState(null),[g,b]=h.useState(""),[j,w]=h.useState(!0),[S,B]=h.useState(""),I=h.useCallback(async()=>{w(!0),B("");try{const[D,Q,U,H]=await Promise.all([x1().catch(()=>({data:{}})),y1().catch(()=>({data:{}})),v1().catch(()=>({data:[]})),j1().catch(()=>({data:""}))]);d(D.data),m(Q.data),C(U.data),b(typeof H.data=="string"?H.data:"")}catch(D){B(D instanceof Error?D.message:l("queue.toastLoadFailed"))}finally{w(!1)}},[l]);h.useEffect(()=>{if(!Ht()){s.replace("/login");return}I()},[I,s]);function Y(D,Q,U){return D?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",Q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(D).map(([H,ae])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:H}),t.jsx("strong",{children:typeof ae=="object"?JSON.stringify(ae):String(ae??"—")})]},H))})]}):null}return t.jsxs(Ft,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,disabled:j,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),S?t.jsx("div",{className:"form-error",children:S}):null,j?t.jsx(wt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Y(o,l("queue.systemStatus"),t.jsx(Qo,{size:18})),Y(u,l("queue.queueStats"),t.jsx(Jd,{size:18})),f&&f.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(_v,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(f,null,2)})]}):null,g?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Mv,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:g})]}):null]})]})}const Uw=h.createContext(null);function Rw({children:s}){const[l,o]=h.useState([]),[d,u]=h.useState(null),m=h.useCallback((b,j="success")=>{const w=Math.random().toString(36).substring(2,9);o(S=>[...S,{id:w,message:b,type:j}]),setTimeout(()=>{o(S=>S.filter(B=>B.id!==w))},5e3)},[]),f=h.useCallback(b=>{u(b)},[]);h.useEffect(()=>{typeof window<"u"&&(window.showToast=m,window.showConfirm=f)},[m,f]);const C=async()=>{if(d){try{await d.onConfirm()}catch(b){console.error("Error in onConfirm:",b)}u(null)}},g=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Uw.Provider,{value:{showToast:m,showConfirm:f},children:[s,t.jsx("div",{className:"toast-container",children:l.map(b=>{let j=Lv;return b.type==="success"&&(j=gx),b.type==="error"&&(j=Cv),b.type==="warning"&&(j=Ud),t.jsxs("div",{className:`toast-card toast-${b.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(j,{size:18})}),t.jsx("div",{className:"toast-message",children:b.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(w=>w.filter(S=>S.id!==b.id)),children:t.jsx(lt,{size:14})})]},b.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:g,children:t.jsxs("div",{className:"confirm-card",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Ud,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:g,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:C,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Hw({children:s}){return t.jsx(M1,{children:t.jsx(Rw,{children:s})})}function Lw(){return t.jsx(Hw,{children:t.jsxs(sv,{children:[t.jsx(kt,{path:"/login",element:t.jsx(D1,{})}),t.jsx(kt,{path:"/dashboard",element:t.jsx($1,{})}),t.jsx(kt,{path:"/config/system",element:t.jsx(W1,{})}),t.jsx(kt,{path:"/config/payment",element:t.jsx(tj,{})}),t.jsx(kt,{path:"/config/theme",element:t.jsx(ij,{})}),t.jsx(kt,{path:"/server/manage",element:t.jsx(Yj,{})}),t.jsx(kt,{path:"/server/group",element:t.jsx(Qj,{})}),t.jsx(kt,{path:"/server/route",element:t.jsx(Kj,{})}),t.jsx(kt,{path:"/plan",element:t.jsx(Pj,{})}),t.jsx(kt,{path:"/order",element:t.jsx(ew,{})}),t.jsx(kt,{path:"/coupon",element:t.jsx(tw,{})}),t.jsx(kt,{path:"/giftcard",element:t.jsx(aw,{})}),t.jsx(kt,{path:"/user",element:t.jsx(dw,{})}),t.jsx(kt,{path:"/subscription",element:t.jsx(vw,{})}),t.jsx(kt,{path:"/device",element:t.jsx(kw,{})}),t.jsx(kt,{path:"/webcon",element:t.jsx(Ew,{})}),t.jsx(kt,{path:"/notice",element:t.jsx(Mw,{})}),t.jsx(kt,{path:"/ticket",element:t.jsx(Dw,{})}),t.jsx(kt,{path:"/knowledge",element:t.jsx(Aw,{})}),t.jsx(kt,{path:"/queue",element:t.jsx(Ow,{})}),t.jsx(kt,{path:"/",element:t.jsx(rh,{to:"/dashboard",replace:!0})}),t.jsx(kt,{path:"*",element:t.jsx(rh,{to:"/dashboard",replace:!0})})]})})}fy.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(mv,{children:t.jsx(Lw,{})})}));
