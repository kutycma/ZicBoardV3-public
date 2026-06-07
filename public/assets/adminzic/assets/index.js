function Jg(s,l){for(var o=0;o<l.length;o++){const d=l[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const h=Object.getOwnPropertyDescriptor(d,u);h&&Object.defineProperty(s,u,h.get?h:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const h of u)if(h.type==="childList")for(const f of h.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&d(f)}).observe(document,{childList:!0,subtree:!0});function o(u){const h={};return u.integrity&&(h.integrity=u.integrity),u.referrerPolicy&&(h.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?h.credentials="include":u.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(u){if(u.ep)return;u.ep=!0;const h=o(u);fetch(u.href,h)}})();function Pg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nd={exports:{}},is={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Wg(){if(Yf)return is;Yf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function o(d,u,h){var f=null;if(h!==void 0&&(f=""+h),u.key!==void 0&&(f=""+u.key),"key"in u){h={};for(var k in u)k!=="key"&&(h[k]=u[k])}else h=u;return u=h.ref,{$$typeof:s,type:d,key:f,ref:u!==void 0?u:null,props:h}}return is.Fragment=l,is.jsx=o,is.jsxs=o,is}var Qf;function Ig(){return Qf||(Qf=1,nd.exports=Wg()),nd.exports}var t=Ig(),ad={exports:{}},Le={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function ey(){if(Xf)return Le;Xf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),f=Symbol.for("react.context"),k=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),D=Symbol.iterator;function G(N){return N===null||typeof N!="object"?null:(N=D&&N[D]||N["@@iterator"],typeof N=="function"?N:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Y=Object.assign,M={};function Q(N,E,I){this.props=N,this.context=E,this.refs=M,this.updater=I||W}Q.prototype.isReactComponent={},Q.prototype.setState=function(N,E){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,E,"setState")},Q.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function U(){}U.prototype=Q.prototype;function H(N,E,I){this.props=N,this.context=E,this.refs=M,this.updater=I||W}var ae=H.prototype=new U;ae.constructor=H,Y(ae,Q.prototype),ae.isPureReactComponent=!0;var P=Array.isArray;function de(){}var A={H:null,A:null,T:null,S:null},B=Object.prototype.hasOwnProperty;function ne(N,E,I){var me=I.ref;return{$$typeof:s,type:N,key:E,ref:me!==void 0?me:null,props:I}}function be(N,E){return ne(N.type,E,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function R(N){var E={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(I){return E[I]})}var le=/\/+/g;function $(N,E){return typeof N=="object"&&N!==null&&N.key!=null?R(""+N.key):E.toString(36)}function ce(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(de,de):(N.status="pending",N.then(function(E){N.status==="pending"&&(N.status="fulfilled",N.value=E)},function(E){N.status==="pending"&&(N.status="rejected",N.reason=E)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function C(N,E,I,me,Ne){var Ee=typeof N;(Ee==="undefined"||Ee==="boolean")&&(N=null);var Ue=!1;if(N===null)Ue=!0;else switch(Ee){case"bigint":case"string":case"number":Ue=!0;break;case"object":switch(N.$$typeof){case s:case l:Ue=!0;break;case j:return Ue=N._init,C(Ue(N._payload),E,I,me,Ne)}}if(Ue)return Ne=Ne(N),Ue=me===""?"."+$(N,0):me,P(Ne)?(I="",Ue!=null&&(I=Ue.replace(le,"$&/")+"/"),C(Ne,E,I,"",function(et){return et})):Ne!=null&&(w(Ne)&&(Ne=be(Ne,I+(Ne.key==null||N&&N.key===Ne.key?"":(""+Ne.key).replace(le,"$&/")+"/")+Ue)),E.push(Ne)),1;Ue=0;var Ve=me===""?".":me+":";if(P(N))for(var Re=0;Re<N.length;Re++)me=N[Re],Ee=Ve+$(me,Re),Ue+=C(me,E,I,Ee,Ne);else if(Re=G(N),typeof Re=="function")for(N=Re.call(N),Re=0;!(me=N.next()).done;)me=me.value,Ee=Ve+$(me,Re++),Ue+=C(me,E,I,Ee,Ne);else if(Ee==="object"){if(typeof N.then=="function")return C(ce(N),E,I,me,Ne);throw E=String(N),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return Ue}function V(N,E,I){if(N==null)return N;var me=[],Ne=0;return C(N,me,"","",function(Ee){return E.call(I,Ee,Ne++)}),me}function z(N){if(N._status===-1){var E=N._result;E=E(),E.then(function(I){(N._status===0||N._status===-1)&&(N._status=1,N._result=I)},function(I){(N._status===0||N._status===-1)&&(N._status=2,N._result=I)}),N._status===-1&&(N._status=0,N._result=E)}if(N._status===1)return N._result.default;throw N._result}var ue=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},S={map:V,forEach:function(N,E,I){V(N,function(){E.apply(this,arguments)},I)},count:function(N){var E=0;return V(N,function(){E++}),E},toArray:function(N){return V(N,function(E){return E})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return Le.Activity=_,Le.Children=S,Le.Component=Q,Le.Fragment=o,Le.Profiler=u,Le.PureComponent=H,Le.StrictMode=d,Le.Suspense=v,Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=A,Le.__COMPILER_RUNTIME={__proto__:null,c:function(N){return A.H.useMemoCache(N)}},Le.cache=function(N){return function(){return N.apply(null,arguments)}},Le.cacheSignal=function(){return null},Le.cloneElement=function(N,E,I){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var me=Y({},N.props),Ne=N.key;if(E!=null)for(Ee in E.key!==void 0&&(Ne=""+E.key),E)!B.call(E,Ee)||Ee==="key"||Ee==="__self"||Ee==="__source"||Ee==="ref"&&E.ref===void 0||(me[Ee]=E[Ee]);var Ee=arguments.length-2;if(Ee===1)me.children=I;else if(1<Ee){for(var Ue=Array(Ee),Ve=0;Ve<Ee;Ve++)Ue[Ve]=arguments[Ve+2];me.children=Ue}return ne(N.type,Ne,me)},Le.createContext=function(N){return N={$$typeof:f,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:h,_context:N},N},Le.createElement=function(N,E,I){var me,Ne={},Ee=null;if(E!=null)for(me in E.key!==void 0&&(Ee=""+E.key),E)B.call(E,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Ne[me]=E[me]);var Ue=arguments.length-2;if(Ue===1)Ne.children=I;else if(1<Ue){for(var Ve=Array(Ue),Re=0;Re<Ue;Re++)Ve[Re]=arguments[Re+2];Ne.children=Ve}if(N&&N.defaultProps)for(me in Ue=N.defaultProps,Ue)Ne[me]===void 0&&(Ne[me]=Ue[me]);return ne(N,Ee,Ne)},Le.createRef=function(){return{current:null}},Le.forwardRef=function(N){return{$$typeof:k,render:N}},Le.isValidElement=w,Le.lazy=function(N){return{$$typeof:j,_payload:{_status:-1,_result:N},_init:z}},Le.memo=function(N,E){return{$$typeof:x,type:N,compare:E===void 0?null:E}},Le.startTransition=function(N){var E=A.T,I={};A.T=I;try{var me=N(),Ne=A.S;Ne!==null&&Ne(I,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(de,ue)}catch(Ee){ue(Ee)}finally{E!==null&&I.types!==null&&(E.types=I.types),A.T=E}},Le.unstable_useCacheRefresh=function(){return A.H.useCacheRefresh()},Le.use=function(N){return A.H.use(N)},Le.useActionState=function(N,E,I){return A.H.useActionState(N,E,I)},Le.useCallback=function(N,E){return A.H.useCallback(N,E)},Le.useContext=function(N){return A.H.useContext(N)},Le.useDebugValue=function(){},Le.useDeferredValue=function(N,E){return A.H.useDeferredValue(N,E)},Le.useEffect=function(N,E){return A.H.useEffect(N,E)},Le.useEffectEvent=function(N){return A.H.useEffectEvent(N)},Le.useId=function(){return A.H.useId()},Le.useImperativeHandle=function(N,E,I){return A.H.useImperativeHandle(N,E,I)},Le.useInsertionEffect=function(N,E){return A.H.useInsertionEffect(N,E)},Le.useLayoutEffect=function(N,E){return A.H.useLayoutEffect(N,E)},Le.useMemo=function(N,E){return A.H.useMemo(N,E)},Le.useOptimistic=function(N,E){return A.H.useOptimistic(N,E)},Le.useReducer=function(N,E,I){return A.H.useReducer(N,E,I)},Le.useRef=function(N){return A.H.useRef(N)},Le.useState=function(N){return A.H.useState(N)},Le.useSyncExternalStore=function(N,E,I){return A.H.useSyncExternalStore(N,E,I)},Le.useTransition=function(){return A.H.useTransition()},Le.version="19.2.6",Le}var Zf;function Bd(){return Zf||(Zf=1,ad.exports=ey()),ad.exports}var m=Bd();const ty=Pg(m),ny=Jg({__proto__:null,default:ty},[m]);var id={exports:{}},ls={},ld={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function ay(){return Kf||(Kf=1,(function(s){function l(C,V){var z=C.length;C.push(V);e:for(;0<z;){var ue=z-1>>>1,S=C[ue];if(0<u(S,V))C[ue]=V,C[z]=S,z=ue;else break e}}function o(C){return C.length===0?null:C[0]}function d(C){if(C.length===0)return null;var V=C[0],z=C.pop();if(z!==V){C[0]=z;e:for(var ue=0,S=C.length,N=S>>>1;ue<N;){var E=2*(ue+1)-1,I=C[E],me=E+1,Ne=C[me];if(0>u(I,z))me<S&&0>u(Ne,I)?(C[ue]=Ne,C[me]=z,ue=me):(C[ue]=I,C[E]=z,ue=E);else if(me<S&&0>u(Ne,z))C[ue]=Ne,C[me]=z,ue=me;else break e}}return V}function u(C,V){var z=C.sortIndex-V.sortIndex;return z!==0?z:C.id-V.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var f=Date,k=f.now();s.unstable_now=function(){return f.now()-k}}var v=[],x=[],j=1,_=null,D=3,G=!1,W=!1,Y=!1,M=!1,Q=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;function ae(C){for(var V=o(x);V!==null;){if(V.callback===null)d(x);else if(V.startTime<=C)d(x),V.sortIndex=V.expirationTime,l(v,V);else break;V=o(x)}}function P(C){if(Y=!1,ae(C),!W)if(o(v)!==null)W=!0,de||(de=!0,R());else{var V=o(x);V!==null&&ce(P,V.startTime-C)}}var de=!1,A=-1,B=5,ne=-1;function be(){return M?!0:!(s.unstable_now()-ne<B)}function w(){if(M=!1,de){var C=s.unstable_now();ne=C;var V=!0;try{e:{W=!1,Y&&(Y=!1,U(A),A=-1),G=!0;var z=D;try{t:{for(ae(C),_=o(v);_!==null&&!(_.expirationTime>C&&be());){var ue=_.callback;if(typeof ue=="function"){_.callback=null,D=_.priorityLevel;var S=ue(_.expirationTime<=C);if(C=s.unstable_now(),typeof S=="function"){_.callback=S,ae(C),V=!0;break t}_===o(v)&&d(v),ae(C)}else d(v);_=o(v)}if(_!==null)V=!0;else{var N=o(x);N!==null&&ce(P,N.startTime-C),V=!1}}break e}finally{_=null,D=z,G=!1}V=void 0}}finally{V?R():de=!1}}}var R;if(typeof H=="function")R=function(){H(w)};else if(typeof MessageChannel<"u"){var le=new MessageChannel,$=le.port2;le.port1.onmessage=w,R=function(){$.postMessage(null)}}else R=function(){Q(w,0)};function ce(C,V){A=Q(function(){C(s.unstable_now())},V)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(C){C.callback=null},s.unstable_forceFrameRate=function(C){0>C||125<C?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):B=0<C?Math.floor(1e3/C):5},s.unstable_getCurrentPriorityLevel=function(){return D},s.unstable_next=function(C){switch(D){case 1:case 2:case 3:var V=3;break;default:V=D}var z=D;D=V;try{return C()}finally{D=z}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(C,V){switch(C){case 1:case 2:case 3:case 4:case 5:break;default:C=3}var z=D;D=C;try{return V()}finally{D=z}},s.unstable_scheduleCallback=function(C,V,z){var ue=s.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?ue+z:ue):z=ue,C){case 1:var S=-1;break;case 2:S=250;break;case 5:S=1073741823;break;case 4:S=1e4;break;default:S=5e3}return S=z+S,C={id:j++,callback:V,priorityLevel:C,startTime:z,expirationTime:S,sortIndex:-1},z>ue?(C.sortIndex=z,l(x,C),o(v)===null&&C===o(x)&&(Y?(U(A),A=-1):Y=!0,ce(P,z-ue))):(C.sortIndex=S,l(v,C),W||G||(W=!0,de||(de=!0,R()))),C},s.unstable_shouldYield=be,s.unstable_wrapCallback=function(C){var V=D;return function(){var z=D;D=V;try{return C.apply(this,arguments)}finally{D=z}}}})(sd)),sd}var Ff;function iy(){return Ff||(Ff=1,ld.exports=ay()),ld.exports}var od={exports:{}},rn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vf;function ly(){if(Vf)return rn;Vf=1;var s=Bd();function l(v){var x="https://react.dev/errors/"+v;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var j=2;j<arguments.length;j++)x+="&args[]="+encodeURIComponent(arguments[j])}return"Minified React error #"+v+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(l(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function h(v,x,j){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:_==null?null:""+_,children:v,containerInfo:x,implementation:j}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function k(v,x){if(v==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,rn.createPortal=function(v,x){var j=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(l(299));return h(v,x,null,j)},rn.flushSync=function(v){var x=f.T,j=d.p;try{if(f.T=null,d.p=2,v)return v()}finally{f.T=x,d.p=j,d.d.f()}},rn.preconnect=function(v,x){typeof v=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(v,x))},rn.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},rn.preinit=function(v,x){if(typeof v=="string"&&x&&typeof x.as=="string"){var j=x.as,_=k(j,x.crossOrigin),D=typeof x.integrity=="string"?x.integrity:void 0,G=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;j==="style"?d.d.S(v,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:_,integrity:D,fetchPriority:G}):j==="script"&&d.d.X(v,{crossOrigin:_,integrity:D,fetchPriority:G,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},rn.preinitModule=function(v,x){if(typeof v=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var j=k(x.as,x.crossOrigin);d.d.M(v,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(v)},rn.preload=function(v,x){if(typeof v=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var j=x.as,_=k(j,x.crossOrigin);d.d.L(v,j,{crossOrigin:_,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},rn.preloadModule=function(v,x){if(typeof v=="string")if(x){var j=k(x.as,x.crossOrigin);d.d.m(v,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(v)},rn.requestFormReset=function(v){d.d.r(v)},rn.unstable_batchedUpdates=function(v,x){return v(x)},rn.useFormState=function(v,x,j){return f.H.useFormState(v,x,j)},rn.useFormStatus=function(){return f.H.useHostTransitionStatus()},rn.version="19.2.6",rn}var Jf;function nx(){if(Jf)return od.exports;Jf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),od.exports=ly(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pf;function sy(){if(Pf)return ls;Pf=1;var s=iy(),l=Bd(),o=nx();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function k(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function x(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,i=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(i=r.return,i!==null){a=i;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return v(r),e;if(c===i)return v(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==i.return)a=r,i=c;else{for(var p=!1,b=r.child;b;){if(b===a){p=!0,a=r,i=c;break}if(b===i){p=!0,i=r,a=c;break}b=b.sibling}if(!p){for(b=c.child;b;){if(b===a){p=!0,a=c,i=r;break}if(b===i){p=!0,i=c,a=r;break}b=b.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==i)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function j(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=j(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,D=Symbol.for("react.element"),G=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),Y=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),Q=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),A=Symbol.for("react.memo"),B=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),be=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var le=Symbol.for("react.client.reference");function $(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===le?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Y:return"Fragment";case Q:return"Profiler";case M:return"StrictMode";case P:return"Suspense";case de:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case H:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case ae:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case A:return n=e.displayName||null,n!==null?n:$(e.type)||"Memo";case B:n=e._payload,e=e._init;try{return $(e(n))}catch{}}return null}var ce=Array.isArray,C=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,V=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z={pending:!1,data:null,method:null,action:null},ue=[],S=-1;function N(e){return{current:e}}function E(e){0>S||(e.current=ue[S],ue[S]=null,S--)}function I(e,n){S++,ue[S]=e.current,e.current=n}var me=N(null),Ne=N(null),Ee=N(null),Ue=N(null);function Ve(e,n){switch(I(Ee,n),I(Ne,e),I(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?pf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=pf(n),e=mf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(me),I(me,e)}function Re(){E(me),E(Ne),E(Ee)}function et(e){e.memoizedState!==null&&I(Ue,e);var n=me.current,a=mf(n,e.type);n!==a&&(I(Ne,e),I(me,a))}function ft(e){Ne.current===e&&(E(me),E(Ne)),Ue.current===e&&(E(Ue),es._currentValue=z)}var Qt,Vt;function xt(e){if(Qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Qt=n&&n[1]||"",Vt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Vt}var Xt=!1;function ot(e,n){if(!e||Xt)return"";Xt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(n){var re=function(){throw Error()};if(Object.defineProperty(re.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(re,[])}catch(J){var K=J}Reflect.construct(e,[],re)}else{try{re.call()}catch(J){K=J}e.call(re.prototype)}}else{try{throw Error()}catch(J){K=J}(re=e())&&typeof re.catch=="function"&&re.catch(function(){})}}catch(J){if(J&&K&&typeof J.stack=="string")return[J.stack,K.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),p=c[0],b=c[1];if(p&&b){var T=p.split(`
`),Z=b.split(`
`);for(r=i=0;i<T.length&&!T[i].includes("DetermineComponentFrameRoot");)i++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(i===T.length||r===Z.length)for(i=T.length-1,r=Z.length-1;1<=i&&0<=r&&T[i]!==Z[r];)r--;for(;1<=i&&0<=r;i--,r--)if(T[i]!==Z[r]){if(i!==1||r!==1)do if(i--,r--,0>r||T[i]!==Z[r]){var te=`
`+T[i].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),te}while(1<=i&&0<=r);break}}}finally{Xt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?xt(a):""}function Jt(e,n){switch(e.tag){case 26:case 27:case 5:return xt(e.type);case 16:return xt("Lazy");case 13:return e.child!==n&&n!==null?xt("Suspense Fallback"):xt("Suspense");case 19:return xt("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return xt("Activity");default:return""}}function bt(e){try{var n="",a=null;do n+=Jt(e,a),a=e,e=e.return;while(e);return n}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Nt=Object.prototype.hasOwnProperty,je=s.unstable_scheduleCallback,Mt=s.unstable_cancelCallback,Ae=s.unstable_shouldYield,fn=s.unstable_requestPaint,rt=s.unstable_now,on=s.unstable_getCurrentPriorityLevel,An=s.unstable_ImmediatePriority,hn=s.unstable_UserBlockingPriority,F=s.unstable_NormalPriority,Ce=s.unstable_LowPriority,we=s.unstable_IdlePriority,ye=s.log,Qe=s.unstable_setDisableYieldValue,He=null,qe=null;function Xe(e){if(typeof ye=="function"&&Qe(e),qe&&typeof qe.setStrictMode=="function")try{qe.setStrictMode(He,e)}catch{}}var nt=Math.clz32?Math.clz32:Pn,dn=Math.log,Ct=Math.LN2;function Pn(e){return e>>>=0,e===0?32:31-(dn(e)/Ct|0)|0}var Lt=256,un=262144,Zn=4194304;function pn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,n,a){var i=e.pendingLanes;if(i===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var b=i&134217727;return b!==0?(i=b&~c,i!==0?r=pn(i):(p&=b,p!==0?r=pn(p):a||(a=b&~e,a!==0&&(r=pn(a))))):(b=i&~c,b!==0?r=pn(b):p!==0?r=pn(p):a||(a=i&~e,a!==0&&(r=pn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function oe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ee(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ke(){var e=Zn;return Zn<<=1,(Zn&62914560)===0&&(Zn=4194304),e}function Be(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function We(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function g(e,n,a,i,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,T=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var te=31-nt(a),re=1<<te;b[te]=0,T[te]=-1;var K=Z[te];if(K!==null)for(Z[te]=null,te=0;te<K.length;te++){var J=K[te];J!==null&&(J.lane&=-536870913)}a&=~re}i!==0&&se(e,i,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function se(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var i=31-nt(n);e.entangledLanes|=n,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function pe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var i=31-nt(a),r=1<<i;r&n|e[i]&n&&(e[i]|=n),a&=~r}}function _e(e,n){var a=n&-n;return a=(a&42)!==0?1:gt(a),(a&(e.suspendedLanes|n))!==0?0:a}function gt(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function On(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function oa(){var e=V.p;return e!==0?e:(e=window.event,e===void 0?32:Rf(e.type))}function yt(e,n){var a=V.p;try{return V.p=e,n()}finally{V.p=a}}var Kn=Math.random().toString(36).slice(2),Dt="__reactFiber$"+Kn,St="__reactProps$"+Kn,Aa="__reactContainer$"+Kn,y="__reactEvents$"+Kn,fe="__reactListeners$"+Kn,he="__reactHandles$"+Kn,Te="__reactResources$"+Kn,tt="__reactMarker$"+Kn;function xn(e){delete e[Dt],delete e[St],delete e[y],delete e[fe],delete e[he]}function qt(e){var n=e[Dt];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Aa]||a[Dt]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=vf(e);e!==null;){if(a=e[Dt])return a;e=vf(e)}return n}e=a,a=e.parentNode}return null}function Wn(e){if(e=e[Dt]||e[Aa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ra(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Oa(e){var n=e[Te];return n||(n=e[Te]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Pt(e){e[tt]=!0}var Id=new Set,eu={};function fi(e,n){Oi(e,n),Oi(e+"Capture",n)}function Oi(e,n){for(eu[e]=n,e=0;e<n.length;e++)Id.add(n[e])}var Gx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),tu={},nu={};function $x(e){return Nt.call(nu,e)?!0:Nt.call(tu,e)?!1:Gx.test(e)?nu[e]=!0:(tu[e]=!0,!1)}function gs(e,n,a){if($x(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var i=n.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function ys(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function ca(e,n,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+i)}}function Un(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function au(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yx(e,n,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,c=i.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vo(e){if(!e._valueTracker){var n=au(e)?"checked":"value";e._valueTracker=Yx(e,n,""+e[n])}}function iu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),i="";return e&&(i=au(e)?e.checked?"true":"false":e.value),e=i,e!==a?(n.setValue(e),!0):!1}function vs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Qx=/[\n"\\]/g;function Rn(e){return e.replace(Qx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jo(e,n,a,i,r,c,p,b){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Un(n)):e.value!==""+Un(n)&&(e.value=""+Un(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Po(e,p,Un(n)):a!=null?Po(e,p,Un(a)):i!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Un(b):e.removeAttribute("name")}function lu(e,n,a,i,r,c,p,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vo(e);return}a=a!=null?""+Un(a):"",n=n!=null?""+Un(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=b?e.checked:!!i,e.defaultChecked=!!i,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Vo(e)}function Po(e,n,a){n==="number"&&vs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Ui(e,n,a,i){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&i&&(e[a].defaultSelected=!0)}else{for(a=""+Un(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function su(e,n,a){if(n!=null&&(n=""+Un(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Un(a):""}function ou(e,n,a,i){if(n==null){if(i!=null){if(a!=null)throw Error(d(92));if(ce(i)){if(1<i.length)throw Error(d(93));i=i[0]}a=i}a==null&&(a=""),n=a}a=Un(n),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Vo(e)}function Ri(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Xx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function ru(e,n,a){var i=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":i?e.setProperty(n,a):typeof a!="number"||a===0||Xx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function cu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||n!=null&&n.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in n)i=n[r],n.hasOwnProperty(r)&&a[r]!==i&&ru(e,r,i)}else for(var c in n)n.hasOwnProperty(c)&&ru(e,c,n[c])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Zx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Kx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function js(e){return Kx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function da(){}var Io=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Hi=null,Li=null;function du(e){var n=Wn(e);if(n&&(e=n.stateNode)){var a=e[St]||null;e:switch(e=n.stateNode,n.type){case"input":if(Jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Rn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var i=a[n];if(i!==e&&i.form===e.form){var r=i[St]||null;if(!r)throw Error(d(90));Jo(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)i=a[n],i.form===e.form&&iu(i)}break e;case"textarea":su(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Ui(e,!!a.multiple,n,!1)}}}var tr=!1;function uu(e,n,a){if(tr)return e(n,a);tr=!0;try{var i=e(n);return i}finally{if(tr=!1,(Hi!==null||Li!==null)&&(ro(),Hi&&(n=Hi,e=Li,Li=Hi=null,du(n),e)))for(n=0;n<e.length;n++)du(e[n])}}function bl(e,n){var a=e.stateNode;if(a===null)return null;var i=a[St]||null;if(i===null)return null;a=i[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ua=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(ua)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){nr=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{nr=!1}var Ua=null,ar=null,ws=null;function pu(){if(ws)return ws;var e,n=ar,a=n.length,i,r="value"in Ua?Ua.value:Ua.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(i=1;i<=p&&n[a-i]===r[c-i];i++);return ws=r.slice(e,1<i?1-i:void 0)}function _s(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Ns(){return!0}function mu(){return!1}function bn(e){function n(a,i,r,c,p){this._reactName=a,this._targetInst=r,this.type=i,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Ns:mu,this.isPropagationStopped=mu,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ns)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ns)},persist:function(){},isPersistent:Ns}),n}var hi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ss=bn(hi),yl=_({},hi,{view:0,detail:0}),Fx=bn(yl),ir,lr,vl,ks=_({},yl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vl&&(vl&&e.type==="mousemove"?(ir=e.screenX-vl.screenX,lr=e.screenY-vl.screenY):lr=ir=0,vl=e),ir)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),fu=bn(ks),Vx=_({},ks,{dataTransfer:0}),Jx=bn(Vx),Px=_({},yl,{relatedTarget:0}),sr=bn(Px),Wx=_({},hi,{animationName:0,elapsedTime:0,pseudoElement:0}),Ix=bn(Wx),eb=_({},hi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),tb=bn(eb),nb=_({},hi,{data:0}),hu=bn(nb),ab={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ib={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},lb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function sb(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=lb[e])?!!n[e]:!1}function or(){return sb}var ob=_({},yl,{key:function(e){if(e.key){var n=ab[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ib[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),rb=bn(ob),cb=_({},ks,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xu=bn(cb),db=_({},yl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),ub=bn(db),pb=_({},hi,{propertyName:0,elapsedTime:0,pseudoElement:0}),mb=bn(pb),fb=_({},ks,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hb=bn(fb),xb=_({},hi,{newState:0,oldState:0}),bb=bn(xb),gb=[9,13,27,32],rr=ua&&"CompositionEvent"in window,jl=null;ua&&"documentMode"in document&&(jl=document.documentMode);var yb=ua&&"TextEvent"in window&&!jl,bu=ua&&(!rr||jl&&8<jl&&11>=jl),gu=" ",yu=!1;function vu(e,n){switch(e){case"keyup":return gb.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ju(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var qi=!1;function vb(e,n){switch(e){case"compositionend":return ju(n);case"keypress":return n.which!==32?null:(yu=!0,gu);case"textInput":return e=n.data,e===gu&&yu?null:e;default:return null}}function jb(e,n){if(qi)return e==="compositionend"||!rr&&vu(e,n)?(e=pu(),ws=ar=Ua=null,qi=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return bu&&n.locale!=="ko"?null:n.data;default:return null}}var wb={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!wb[e.type]:n==="textarea"}function _u(e,n,a,i){Hi?Li?Li.push(i):Li=[i]:Hi=i,n=xo(n,"onChange"),0<n.length&&(a=new Ss("onChange","change",null,a,i),e.push({event:a,listeners:n}))}var wl=null,_l=null;function _b(e){sf(e,0)}function Cs(e){var n=ra(e);if(iu(n))return e}function Nu(e,n){if(e==="change")return n}var Su=!1;if(ua){var cr;if(ua){var dr="oninput"in document;if(!dr){var ku=document.createElement("div");ku.setAttribute("oninput","return;"),dr=typeof ku.oninput=="function"}cr=dr}else cr=!1;Su=cr&&(!document.documentMode||9<document.documentMode)}function Cu(){wl&&(wl.detachEvent("onpropertychange",zu),_l=wl=null)}function zu(e){if(e.propertyName==="value"&&Cs(_l)){var n=[];_u(n,_l,e,er(e)),uu(_b,n)}}function Nb(e,n,a){e==="focusin"?(Cu(),wl=n,_l=a,wl.attachEvent("onpropertychange",zu)):e==="focusout"&&Cu()}function Sb(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Cs(_l)}function kb(e,n){if(e==="click")return Cs(n)}function Cb(e,n){if(e==="input"||e==="change")return Cs(n)}function zb(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var _n=typeof Object.is=="function"?Object.is:zb;function Nl(e,n){if(_n(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),i=Object.keys(n);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var r=a[i];if(!Nt.call(n,r)||!_n(e[r],n[r]))return!1}return!0}function Tu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Eu(e,n){var a=Tu(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=n&&i>=n)return{node:a,offset:n-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Tu(a)}}function Mu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Mu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Du(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=vs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=vs(e.document)}return n}function ur(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Tb=ua&&"documentMode"in document&&11>=document.documentMode,Bi=null,pr=null,Sl=null,mr=!1;function Au(e,n,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mr||Bi==null||Bi!==vs(i)||(i=Bi,"selectionStart"in i&&ur(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Sl&&Nl(Sl,i)||(Sl=i,i=xo(pr,"onSelect"),0<i.length&&(n=new Ss("onSelect","select",null,n,a),e.push({event:n,listeners:i}),n.target=Bi)))}function xi(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Gi={animationend:xi("Animation","AnimationEnd"),animationiteration:xi("Animation","AnimationIteration"),animationstart:xi("Animation","AnimationStart"),transitionrun:xi("Transition","TransitionRun"),transitionstart:xi("Transition","TransitionStart"),transitioncancel:xi("Transition","TransitionCancel"),transitionend:xi("Transition","TransitionEnd")},fr={},Ou={};ua&&(Ou=document.createElement("div").style,"AnimationEvent"in window||(delete Gi.animationend.animation,delete Gi.animationiteration.animation,delete Gi.animationstart.animation),"TransitionEvent"in window||delete Gi.transitionend.transition);function bi(e){if(fr[e])return fr[e];if(!Gi[e])return e;var n=Gi[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Ou)return fr[e]=n[a];return e}var Uu=bi("animationend"),Ru=bi("animationiteration"),Hu=bi("animationstart"),Eb=bi("transitionrun"),Mb=bi("transitionstart"),Db=bi("transitioncancel"),Lu=bi("transitionend"),qu=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function Fn(e,n){qu.set(e,n),fi(n,[e])}var zs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Hn=[],$i=0,xr=0;function Ts(){for(var e=$i,n=xr=$i=0;n<e;){var a=Hn[n];Hn[n++]=null;var i=Hn[n];Hn[n++]=null;var r=Hn[n];Hn[n++]=null;var c=Hn[n];if(Hn[n++]=null,i!==null&&r!==null){var p=i.pending;p===null?r.next=r:(r.next=p.next,p.next=r),i.pending=r}c!==0&&Bu(a,r,c)}}function Es(e,n,a,i){Hn[$i++]=e,Hn[$i++]=n,Hn[$i++]=a,Hn[$i++]=i,xr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function br(e,n,a,i){return Es(e,n,a,i),Ms(e)}function gi(e,n){return Es(e,null,null,n),Ms(e)}function Bu(e,n,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,i=c.alternate,i!==null&&(i.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-nt(a),e=c.hiddenUpdates,i=e[r],i===null?e[r]=[n]:i.push(n),n.lane=a|536870912),c):null}function Ms(e){if(50<Kl)throw Kl=0,kc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Yi={};function Ab(e,n,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(e,n,a,i){return new Ab(e,n,a,i)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function pa(e,n){var a=e.alternate;return a===null?(a=Nn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Gu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ds(e,n,a,i,r,c){var p=0;if(i=e,typeof e=="function")gr(e)&&(p=1);else if(typeof e=="string")p=Lg(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=Nn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case Y:return yi(a.children,r,c,n);case M:p=8,r|=24;break;case Q:return e=Nn(12,a,n,r|2),e.elementType=Q,e.lanes=c,e;case P:return e=Nn(13,a,n,r),e.elementType=P,e.lanes=c,e;case de:return e=Nn(19,a,n,r),e.elementType=de,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case H:p=10;break e;case U:p=9;break e;case ae:p=11;break e;case A:p=14;break e;case B:p=16,i=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),i=null}return n=Nn(p,a,n,r),n.elementType=e,n.type=i,n.lanes=c,n}function yi(e,n,a,i){return e=Nn(7,e,i,n),e.lanes=a,e}function yr(e,n,a){return e=Nn(6,e,null,n),e.lanes=a,e}function $u(e){var n=Nn(18,null,null,0);return n.stateNode=e,n}function vr(e,n,a){return n=Nn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yu=new WeakMap;function Ln(e,n){if(typeof e=="object"&&e!==null){var a=Yu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:bt(n)},Yu.set(e,n),n)}return{value:e,source:n,stack:bt(n)}}var Qi=[],Xi=0,As=null,kl=0,qn=[],Bn=0,Ra=null,In=1,ea="";function ma(e,n){Qi[Xi++]=kl,Qi[Xi++]=As,As=e,kl=n}function Qu(e,n,a){qn[Bn++]=In,qn[Bn++]=ea,qn[Bn++]=Ra,Ra=e;var i=In;e=ea;var r=32-nt(i)-1;i&=~(1<<r),a+=1;var c=32-nt(n)+r;if(30<c){var p=r-r%5;c=(i&(1<<p)-1).toString(32),i>>=p,r-=p,In=1<<32-nt(n)+r|a<<r|i,ea=c+e}else In=1<<c|a<<r|i,ea=e}function jr(e){e.return!==null&&(ma(e,1),Qu(e,1,0))}function wr(e){for(;e===As;)As=Qi[--Xi],Qi[Xi]=null,kl=Qi[--Xi],Qi[Xi]=null;for(;e===Ra;)Ra=qn[--Bn],qn[Bn]=null,ea=qn[--Bn],qn[Bn]=null,In=qn[--Bn],qn[Bn]=null}function Xu(e,n){qn[Bn++]=In,qn[Bn++]=ea,qn[Bn++]=Ra,In=n.id,ea=n.overflow,Ra=e}var tn=null,vt=null,Ie=!1,Ha=null,Gn=!1,_r=Error(d(519));function La(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Cl(Ln(n,e)),_r}function Zu(e){var n=e.stateNode,a=e.type,i=e.memoizedProps;switch(n[Dt]=e,n[St]=i,a){case"dialog":Ke("cancel",n),Ke("close",n);break;case"iframe":case"object":case"embed":Ke("load",n);break;case"video":case"audio":for(a=0;a<Vl.length;a++)Ke(Vl[a],n);break;case"source":Ke("error",n);break;case"img":case"image":case"link":Ke("error",n),Ke("load",n);break;case"details":Ke("toggle",n);break;case"input":Ke("invalid",n),lu(n,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ke("invalid",n);break;case"textarea":Ke("invalid",n),ou(n,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||i.suppressHydrationWarning===!0||df(n.textContent,a)?(i.popover!=null&&(Ke("beforetoggle",n),Ke("toggle",n)),i.onScroll!=null&&Ke("scroll",n),i.onScrollEnd!=null&&Ke("scrollend",n),i.onClick!=null&&(n.onclick=da),n=!0):n=!1,n||La(e,!0)}function Ku(e){for(tn=e.return;tn;)switch(tn.tag){case 5:case 31:case 13:Gn=!1;return;case 27:case 3:Gn=!0;return;default:tn=tn.return}}function Zi(e){if(e!==tn)return!1;if(!Ie)return Ku(e),Ie=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gc(e.type,e.memoizedProps)),a=!a),a&&vt&&La(e),Ku(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));vt=yf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));vt=yf(e)}else n===27?(n=vt,Wa(e.type)?(e=Zc,Zc=null,vt=e):vt=n):vt=tn?Yn(e.stateNode.nextSibling):null;return!0}function vi(){vt=tn=null,Ie=!1}function Nr(){var e=Ha;return e!==null&&(jn===null?jn=e:jn.push.apply(jn,e),Ha=null),e}function Cl(e){Ha===null?Ha=[e]:Ha.push(e)}var Sr=N(null),ji=null,fa=null;function qa(e,n,a){I(Sr,n._currentValue),n._currentValue=a}function ha(e){e._currentValue=Sr.current,E(Sr)}function kr(e,n,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,i!==null&&(i.childLanes|=n)):i!==null&&(i.childLanes&n)!==n&&(i.childLanes|=n),e===a)break;e=e.return}}function Cr(e,n,a,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var T=0;T<n.length;T++)if(b.context===n[T]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),kr(c.return,a,e),i||(p=null);break e}c=b.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),kr(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function Ki(e,n,a,i){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var b=r.type;_n(r.pendingProps.value,p.value)||(e!==null?e.push(b):e=[b])}}else if(r===Ue.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(es):e=[es])}r=r.return}e!==null&&Cr(n,e,a,i),n.flags|=262144}function Os(e){for(e=e.firstContext;e!==null;){if(!_n(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function wi(e){ji=e,fa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function nn(e){return Fu(ji,e)}function Us(e,n){return ji===null&&wi(e),Fu(e,n)}function Fu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},fa===null){if(e===null)throw Error(d(308));fa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else fa=fa.next=n;return a}var Ob=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Ub=s.unstable_scheduleCallback,Rb=s.unstable_NormalPriority,Bt={$$typeof:H,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Ob,data:new Map,refCount:0}}function zl(e){e.refCount--,e.refCount===0&&Ub(Rb,function(){e.controller.abort()})}var Tl=null,Tr=0,Fi=0,Vi=null;function Hb(e,n){if(Tl===null){var a=Tl=[];Tr=0,Fi=Dc(),Vi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Tr++,n.then(Vu,Vu),n}function Vu(){if(--Tr===0&&Tl!==null){Vi!==null&&(Vi.status="fulfilled");var e=Tl;Tl=null,Fi=0,Vi=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Lb(e,n){var a=[],i={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){i.status="fulfilled",i.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(i.status="rejected",i.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),i}var Ju=C.S;C.S=function(e,n){Am=rt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Hb(e,n),Ju!==null&&Ju(e,n)};var _i=N(null);function Er(){var e=_i.current;return e!==null?e:ht.pooledCache}function Rs(e,n){n===null?I(_i,_i.current):I(_i,n.pool)}function Pu(){var e=Er();return e===null?null:{parent:Bt._currentValue,pool:e}}var Ji=Error(d(460)),Mr=Error(d(474)),Hs=Error(d(542)),Ls={then:function(){}};function Wu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Iu(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(da,da),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tp(e),e;default:if(typeof n.status=="string")n.then(da,da);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(i){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=i}},function(i){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=i}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,tp(e),e}throw Si=n,Ji}}function Ni(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Si=a,Ji):a}}var Si=null;function ep(){if(Si===null)throw Error(d(459));var e=Si;return Si=null,e}function tp(e){if(e===Ji||e===Hs)throw Error(d(483))}var Pi=null,El=0;function qs(e){var n=El;return El+=1,Pi===null&&(Pi=[]),Iu(Pi,e,n)}function Ml(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Bs(e,n){throw n.$$typeof===D?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function np(e){function n(q,O){if(e){var X=q.deletions;X===null?(q.deletions=[O],q.flags|=16):X.push(O)}}function a(q,O){if(!e)return null;for(;O!==null;)n(q,O),O=O.sibling;return null}function i(q){for(var O=new Map;q!==null;)q.key!==null?O.set(q.key,q):O.set(q.index,q),q=q.sibling;return O}function r(q,O){return q=pa(q,O),q.index=0,q.sibling=null,q}function c(q,O,X){return q.index=X,e?(X=q.alternate,X!==null?(X=X.index,X<O?(q.flags|=67108866,O):X):(q.flags|=67108866,O)):(q.flags|=1048576,O)}function p(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,O,X,ie){return O===null||O.tag!==6?(O=yr(X,q.mode,ie),O.return=q,O):(O=r(O,X),O.return=q,O)}function T(q,O,X,ie){var De=X.type;return De===Y?te(q,O,X.props.children,ie,X.key):O!==null&&(O.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===B&&Ni(De)===O.type)?(O=r(O,X.props),Ml(O,X),O.return=q,O):(O=Ds(X.type,X.key,X.props,null,q.mode,ie),Ml(O,X),O.return=q,O)}function Z(q,O,X,ie){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=vr(X,q.mode,ie),O.return=q,O):(O=r(O,X.children||[]),O.return=q,O)}function te(q,O,X,ie,De){return O===null||O.tag!==7?(O=yi(X,q.mode,ie,De),O.return=q,O):(O=r(O,X),O.return=q,O)}function re(q,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=yr(""+O,q.mode,X),O.return=q,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case G:return X=Ds(O.type,O.key,O.props,null,q.mode,X),Ml(X,O),X.return=q,X;case W:return O=vr(O,q.mode,X),O.return=q,O;case B:return O=Ni(O),re(q,O,X)}if(ce(O)||R(O))return O=yi(O,q.mode,X,null),O.return=q,O;if(typeof O.then=="function")return re(q,qs(O),X);if(O.$$typeof===H)return re(q,Us(q,O),X);Bs(q,O)}return null}function K(q,O,X,ie){var De=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return De!==null?null:b(q,O,""+X,ie);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case G:return X.key===De?T(q,O,X,ie):null;case W:return X.key===De?Z(q,O,X,ie):null;case B:return X=Ni(X),K(q,O,X,ie)}if(ce(X)||R(X))return De!==null?null:te(q,O,X,ie,null);if(typeof X.then=="function")return K(q,O,qs(X),ie);if(X.$$typeof===H)return K(q,O,Us(q,X),ie);Bs(q,X)}return null}function J(q,O,X,ie,De){if(typeof ie=="string"&&ie!==""||typeof ie=="number"||typeof ie=="bigint")return q=q.get(X)||null,b(O,q,""+ie,De);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case G:return q=q.get(ie.key===null?X:ie.key)||null,T(O,q,ie,De);case W:return q=q.get(ie.key===null?X:ie.key)||null,Z(O,q,ie,De);case B:return ie=Ni(ie),J(q,O,X,ie,De)}if(ce(ie)||R(ie))return q=q.get(X)||null,te(O,q,ie,De,null);if(typeof ie.then=="function")return J(q,O,X,qs(ie),De);if(ie.$$typeof===H)return J(q,O,X,Us(O,ie),De);Bs(O,ie)}return null}function Se(q,O,X,ie){for(var De=null,at=null,ze=O,$e=O=0,Pe=null;ze!==null&&$e<X.length;$e++){ze.index>$e?(Pe=ze,ze=null):Pe=ze.sibling;var it=K(q,ze,X[$e],ie);if(it===null){ze===null&&(ze=Pe);break}e&&ze&&it.alternate===null&&n(q,ze),O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it,ze=Pe}if($e===X.length)return a(q,ze),Ie&&ma(q,$e),De;if(ze===null){for(;$e<X.length;$e++)ze=re(q,X[$e],ie),ze!==null&&(O=c(ze,O,$e),at===null?De=ze:at.sibling=ze,at=ze);return Ie&&ma(q,$e),De}for(ze=i(ze);$e<X.length;$e++)Pe=J(ze,q,$e,X[$e],ie),Pe!==null&&(e&&Pe.alternate!==null&&ze.delete(Pe.key===null?$e:Pe.key),O=c(Pe,O,$e),at===null?De=Pe:at.sibling=Pe,at=Pe);return e&&ze.forEach(function(ai){return n(q,ai)}),Ie&&ma(q,$e),De}function Oe(q,O,X,ie){if(X==null)throw Error(d(151));for(var De=null,at=null,ze=O,$e=O=0,Pe=null,it=X.next();ze!==null&&!it.done;$e++,it=X.next()){ze.index>$e?(Pe=ze,ze=null):Pe=ze.sibling;var ai=K(q,ze,it.value,ie);if(ai===null){ze===null&&(ze=Pe);break}e&&ze&&ai.alternate===null&&n(q,ze),O=c(ai,O,$e),at===null?De=ai:at.sibling=ai,at=ai,ze=Pe}if(it.done)return a(q,ze),Ie&&ma(q,$e),De;if(ze===null){for(;!it.done;$e++,it=X.next())it=re(q,it.value,ie),it!==null&&(O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it);return Ie&&ma(q,$e),De}for(ze=i(ze);!it.done;$e++,it=X.next())it=J(ze,q,$e,it.value,ie),it!==null&&(e&&it.alternate!==null&&ze.delete(it.key===null?$e:it.key),O=c(it,O,$e),at===null?De=it:at.sibling=it,at=it);return e&&ze.forEach(function(Vg){return n(q,Vg)}),Ie&&ma(q,$e),De}function mt(q,O,X,ie){if(typeof X=="object"&&X!==null&&X.type===Y&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case G:e:{for(var De=X.key;O!==null;){if(O.key===De){if(De=X.type,De===Y){if(O.tag===7){a(q,O.sibling),ie=r(O,X.props.children),ie.return=q,q=ie;break e}}else if(O.elementType===De||typeof De=="object"&&De!==null&&De.$$typeof===B&&Ni(De)===O.type){a(q,O.sibling),ie=r(O,X.props),Ml(ie,X),ie.return=q,q=ie;break e}a(q,O);break}else n(q,O);O=O.sibling}X.type===Y?(ie=yi(X.props.children,q.mode,ie,X.key),ie.return=q,q=ie):(ie=Ds(X.type,X.key,X.props,null,q.mode,ie),Ml(ie,X),ie.return=q,q=ie)}return p(q);case W:e:{for(De=X.key;O!==null;){if(O.key===De)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(q,O.sibling),ie=r(O,X.children||[]),ie.return=q,q=ie;break e}else{a(q,O);break}else n(q,O);O=O.sibling}ie=vr(X,q.mode,ie),ie.return=q,q=ie}return p(q);case B:return X=Ni(X),mt(q,O,X,ie)}if(ce(X))return Se(q,O,X,ie);if(R(X)){if(De=R(X),typeof De!="function")throw Error(d(150));return X=De.call(X),Oe(q,O,X,ie)}if(typeof X.then=="function")return mt(q,O,qs(X),ie);if(X.$$typeof===H)return mt(q,O,Us(q,X),ie);Bs(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(q,O.sibling),ie=r(O,X),ie.return=q,q=ie):(a(q,O),ie=yr(X,q.mode,ie),ie.return=q,q=ie),p(q)):a(q,O)}return function(q,O,X,ie){try{El=0;var De=mt(q,O,X,ie);return Pi=null,De}catch(ze){if(ze===Ji||ze===Hs)throw ze;var at=Nn(29,ze,null,q.mode);return at.lanes=ie,at.return=q,at}finally{}}}var ki=np(!0),ap=np(!1),Ba=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ar(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ga(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function $a(e,n,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(st&2)!==0){var r=i.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),i.pending=n,n=Ms(e),Bu(e,null,a),n}return Es(e,i,n,a),Ms(e)}function Dl(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,pe(e,a)}}function Or(e,n){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ur=!1;function Al(){if(Ur){var e=Vi;if(e!==null)throw e}}function Ol(e,n,a,i){Ur=!1;var r=e.updateQueue;Ba=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var T=b,Z=T.next;T.next=null,p===null?c=Z:p.next=Z,p=T;var te=e.alternate;te!==null&&(te=te.updateQueue,b=te.lastBaseUpdate,b!==p&&(b===null?te.firstBaseUpdate=Z:b.next=Z,te.lastBaseUpdate=T))}if(c!==null){var re=r.baseState;p=0,te=Z=T=null,b=c;do{var K=b.lane&-536870913,J=K!==b.lane;if(J?(Je&K)===K:(i&K)===K){K!==0&&K===Fi&&(Ur=!0),te!==null&&(te=te.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Se=e,Oe=b;K=n;var mt=a;switch(Oe.tag){case 1:if(Se=Oe.payload,typeof Se=="function"){re=Se.call(mt,re,K);break e}re=Se;break e;case 3:Se.flags=Se.flags&-65537|128;case 0:if(Se=Oe.payload,K=typeof Se=="function"?Se.call(mt,re,K):Se,K==null)break e;re=_({},re,K);break e;case 2:Ba=!0}}K=b.callback,K!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[K]:J.push(K))}else J={lane:K,tag:b.tag,payload:b.payload,callback:b.callback,next:null},te===null?(Z=te=J,T=re):te=te.next=J,p|=K;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;J=b,b=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);te===null&&(T=re),r.baseState=T,r.firstBaseUpdate=Z,r.lastBaseUpdate=te,c===null&&(r.shared.lanes=0),Ka|=p,e.lanes=p,e.memoizedState=re}}function ip(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function lp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)ip(a[e],n)}var Wi=N(null),Gs=N(0);function sp(e,n){e=Na,I(Gs,e),I(Wi,n),Na=e|n.baseLanes}function Rr(){I(Gs,Na),I(Wi,Wi.current)}function Hr(){Na=Gs.current,E(Wi),E(Gs)}var Sn=N(null),$n=null;function Ya(e){var n=e.alternate;I(At,At.current&1),I(Sn,e),$n===null&&(n===null||Wi.current!==null||n.memoizedState!==null)&&($n=e)}function Lr(e){I(At,At.current),I(Sn,e),$n===null&&($n=e)}function op(e){e.tag===22?(I(At,At.current),I(Sn,e),$n===null&&($n=e)):Qa()}function Qa(){I(At,At.current),I(Sn,Sn.current)}function kn(e){E(Sn),$n===e&&($n=null),E(At)}var At=N(0);function $s(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qc(a)||Xc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var xa=0,Ge=null,ut=null,Gt=null,Ys=!1,Ii=!1,Ci=!1,Qs=0,Ul=0,el=null,qb=0;function zt(){throw Error(d(321))}function qr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!_n(e[a],n[a]))return!1;return!0}function Br(e,n,a,i,r,c){return xa=c,Ge=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,C.H=e===null||e.memoizedState===null?Qp:tc,Ci=!1,c=a(i,r),Ci=!1,Ii&&(c=cp(n,a,i,r)),rp(e),c}function rp(e){C.H=Ll;var n=ut!==null&&ut.next!==null;if(xa=0,Gt=ut=Ge=null,Ys=!1,Ul=0,el=null,n)throw Error(d(300));e===null||$t||(e=e.dependencies,e!==null&&Os(e)&&($t=!0))}function cp(e,n,a,i){Ge=e;var r=0;do{if(Ii&&(el=null),Ul=0,Ii=!1,25<=r)throw Error(d(301));if(r+=1,Gt=ut=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}C.H=Xp,c=n(a,i)}while(Ii);return c}function Bb(){var e=C.H,n=e.useState()[0];return n=typeof n.then=="function"?Rl(n):n,e=e.useState()[0],(ut!==null?ut.memoizedState:null)!==e&&(Ge.flags|=1024),n}function Gr(){var e=Qs!==0;return Qs=0,e}function $r(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yr(e){if(Ys){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Ys=!1}xa=0,Gt=ut=Ge=null,Ii=!1,Ul=Qs=0,el=null}function mn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Ge.memoizedState=Gt=e:Gt=Gt.next=e,Gt}function Ot(){if(ut===null){var e=Ge.alternate;e=e!==null?e.memoizedState:null}else e=ut.next;var n=Gt===null?Ge.memoizedState:Gt.next;if(n!==null)Gt=n,ut=e;else{if(e===null)throw Ge.alternate===null?Error(d(467)):Error(d(310));ut=e,e={memoizedState:ut.memoizedState,baseState:ut.baseState,baseQueue:ut.baseQueue,queue:ut.queue,next:null},Gt===null?Ge.memoizedState=Gt=e:Gt=Gt.next=e}return Gt}function Xs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Rl(e){var n=Ul;return Ul+=1,el===null&&(el=[]),e=Iu(el,e,n),n=Ge,(Gt===null?n.memoizedState:Gt.next)===null&&(n=n.alternate,C.H=n===null||n.memoizedState===null?Qp:tc),e}function Zs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Rl(e);if(e.$$typeof===H)return nn(e)}throw Error(d(438,String(e)))}function Qr(e){var n=null,a=Ge.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var i=Ge.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(n={data:i.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Xs(),Ge.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),i=0;i<e;i++)a[i]=be;return n.index++,a}function ba(e,n){return typeof n=="function"?n(e):n}function Ks(e){var n=Ot();return Xr(n,ut,e)}function Xr(e,n,a){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=a;var r=e.baseQueue,c=i.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,i.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var b=p=null,T=null,Z=n,te=!1;do{var re=Z.lane&-536870913;if(re!==Z.lane?(Je&re)===re:(xa&re)===re){var K=Z.revertLane;if(K===0)T!==null&&(T=T.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),re===Fi&&(te=!0);else if((xa&K)===K){Z=Z.next,K===Fi&&(te=!0);continue}else re={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},T===null?(b=T=re,p=c):T=T.next=re,Ge.lanes|=K,Ka|=K;re=Z.action,Ci&&a(c,re),c=Z.hasEagerState?Z.eagerState:a(c,re)}else K={lane:re,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},T===null?(b=T=K,p=c):T=T.next=K,Ge.lanes|=re,Ka|=re;Z=Z.next}while(Z!==null&&Z!==n);if(T===null?p=c:T.next=b,!_n(c,e.memoizedState)&&($t=!0,te&&(a=Vi,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=T,i.lastRenderedState=c}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Zr(e){var n=Ot(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var i=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);_n(c,n.memoizedState)||($t=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,i]}function dp(e,n,a){var i=Ge,r=Ot(),c=Ie;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!_n((ut||r).memoizedState,a);if(p&&(r.memoizedState=a,$t=!0),r=r.queue,Vr(mp.bind(null,i,r,e),[e]),r.getSnapshot!==n||p||Gt!==null&&Gt.memoizedState.tag&1){if(i.flags|=2048,tl(9,{destroy:void 0},pp.bind(null,i,r,a,n),null),ht===null)throw Error(d(349));c||(xa&127)!==0||up(i,n,a)}return a}function up(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Ge.updateQueue,n===null?(n=Xs(),Ge.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function pp(e,n,a,i){n.value=a,n.getSnapshot=i,fp(n)&&hp(e)}function mp(e,n,a){return a(function(){fp(n)&&hp(e)})}function fp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!_n(e,a)}catch{return!0}}function hp(e){var n=gi(e,2);n!==null&&wn(n,e,2)}function Kr(e){var n=mn();if(typeof e=="function"){var a=e;if(e=a(),Ci){Xe(!0);try{a()}finally{Xe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:e},n}function xp(e,n,a,i){return e.baseState=a,Xr(e,ut,typeof i=="function"?i:ba)}function Gb(e,n,a,i,r){if(Js(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};C.T!==null?a(!0):c.isTransition=!1,i(c),a=n.pending,a===null?(c.next=n.pending=c,bp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function bp(e,n){var a=n.action,i=n.payload,r=e.state;if(n.isTransition){var c=C.T,p={};C.T=p;try{var b=a(r,i),T=C.S;T!==null&&T(p,b),gp(e,n,b)}catch(Z){Fr(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),C.T=c}}else try{c=a(r,i),gp(e,n,c)}catch(Z){Fr(e,n,Z)}}function gp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){yp(e,n,i)},function(i){return Fr(e,n,i)}):yp(e,n,a)}function yp(e,n,a){n.status="fulfilled",n.value=a,vp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bp(e,a)))}function Fr(e,n,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do n.status="rejected",n.reason=a,vp(n),n=n.next;while(n!==i)}e.action=null}function vp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function jp(e,n){return n}function wp(e,n){if(Ie){var a=ht.formState;if(a!==null){e:{var i=Ge;if(Ie){if(vt){t:{for(var r=vt,c=Gn;r.nodeType!==8;){if(!c){r=null;break t}if(r=Yn(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){vt=Yn(r.nextSibling),i=r.data==="F!";break e}}La(i)}i=!1}i&&(n=a[0])}}return a=mn(),a.memoizedState=a.baseState=n,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jp,lastRenderedState:n},a.queue=i,a=Gp.bind(null,Ge,i),i.dispatch=a,i=Kr(!1),c=ec.bind(null,Ge,!1,i.queue),i=mn(),r={state:n,dispatch:null,action:e,pending:null},i.queue=r,a=Gb.bind(null,Ge,r,c,a),r.dispatch=a,i.memoizedState=e,[n,a,!1]}function _p(e){var n=Ot();return Np(n,ut,e)}function Np(e,n,a){if(n=Xr(e,n,jp)[0],e=Ks(ba)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var i=Rl(n)}catch(p){throw p===Ji?Hs:p}else i=n;n=Ot();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Ge.flags|=2048,tl(9,{destroy:void 0},$b.bind(null,r,a),null)),[i,c,e]}function $b(e,n){e.action=n}function Sp(e){var n=Ot(),a=ut;if(a!==null)return Np(n,a,e);Ot(),n=n.memoizedState,a=Ot();var i=a.queue.dispatch;return a.memoizedState=e,[n,i,!1]}function tl(e,n,a,i){return e={tag:e,create:a,deps:i,inst:n,next:null},n=Ge.updateQueue,n===null&&(n=Xs(),Ge.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,n.lastEffect=e),e}function kp(){return Ot().memoizedState}function Fs(e,n,a,i){var r=mn();Ge.flags|=e,r.memoizedState=tl(1|n,{destroy:void 0},a,i===void 0?null:i)}function Vs(e,n,a,i){var r=Ot();i=i===void 0?null:i;var c=r.memoizedState.inst;ut!==null&&i!==null&&qr(i,ut.memoizedState.deps)?r.memoizedState=tl(n,c,a,i):(Ge.flags|=e,r.memoizedState=tl(1|n,c,a,i))}function Cp(e,n){Fs(8390656,8,e,n)}function Vr(e,n){Vs(2048,8,e,n)}function Yb(e){Ge.flags|=4;var n=Ge.updateQueue;if(n===null)n=Xs(),Ge.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function zp(e){var n=Ot().memoizedState;return Yb({ref:n,nextImpl:e}),function(){if((st&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function Tp(e,n){return Vs(4,2,e,n)}function Ep(e,n){return Vs(4,4,e,n)}function Mp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Dp(e,n,a){a=a!=null?a.concat([e]):null,Vs(4,4,Mp.bind(null,n,e),a)}function Jr(){}function Ap(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;return n!==null&&qr(n,i[1])?i[0]:(a.memoizedState=[e,n],e)}function Op(e,n){var a=Ot();n=n===void 0?null:n;var i=a.memoizedState;if(n!==null&&qr(n,i[1]))return i[0];if(i=e(),Ci){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,n],i}function Pr(e,n,a){return a===void 0||(xa&1073741824)!==0&&(Je&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Um(),Ge.lanes|=e,Ka|=e,a)}function Up(e,n,a,i){return _n(a,n)?a:Wi.current!==null?(e=Pr(e,a,i),_n(e,n)||($t=!0),e):(xa&42)===0||(xa&1073741824)!==0&&(Je&261930)===0?($t=!0,e.memoizedState=a):(e=Um(),Ge.lanes|=e,Ka|=e,n)}function Rp(e,n,a,i,r){var c=V.p;V.p=c!==0&&8>c?c:8;var p=C.T,b={};C.T=b,ec(e,!1,n,a);try{var T=r(),Z=C.S;if(Z!==null&&Z(b,T),T!==null&&typeof T=="object"&&typeof T.then=="function"){var te=Lb(T,i);Hl(e,n,te,Tn(e))}else Hl(e,n,i,Tn(e))}catch(re){Hl(e,n,{then:function(){},status:"rejected",reason:re},Tn())}finally{V.p=c,p!==null&&b.types!==null&&(p.types=b.types),C.T=p}}function Qb(){}function Wr(e,n,a,i){if(e.tag!==5)throw Error(d(476));var r=Hp(e).queue;Rp(e,r,n,z,a===null?Qb:function(){return Lp(e),a(i)})}function Hp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:z,baseState:z,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:z},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ba,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Lp(e){var n=Hp(e);n.next===null&&(n=e.alternate.memoizedState),Hl(e,n.next.queue,{},Tn())}function Ir(){return nn(es)}function qp(){return Ot().memoizedState}function Bp(){return Ot().memoizedState}function Xb(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Tn();e=Ga(a);var i=$a(n,e,a);i!==null&&(wn(i,n,a),Dl(i,n,a)),n={cache:zr()},e.payload=n;return}n=n.return}}function Zb(e,n,a){var i=Tn();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Js(e)?$p(n,a):(a=br(e,n,a,i),a!==null&&(wn(a,e,i),Yp(a,n,i)))}function Gp(e,n,a){var i=Tn();Hl(e,n,a,i)}function Hl(e,n,a,i){var r={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Js(e))$p(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,b=c(p,a);if(r.hasEagerState=!0,r.eagerState=b,_n(b,p))return Es(e,n,r,0),ht===null&&Ts(),!1}catch{}finally{}if(a=br(e,n,r,i),a!==null)return wn(a,e,i),Yp(a,n,i),!0}return!1}function ec(e,n,a,i){if(i={lane:2,revertLane:Dc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Js(e)){if(n)throw Error(d(479))}else n=br(e,a,i,2),n!==null&&wn(n,e,2)}function Js(e){var n=e.alternate;return e===Ge||n!==null&&n===Ge}function $p(e,n){Ii=Ys=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Yp(e,n,a){if((a&4194048)!==0){var i=n.lanes;i&=e.pendingLanes,a|=i,n.lanes=a,pe(e,a)}}var Ll={readContext:nn,use:Zs,useCallback:zt,useContext:zt,useEffect:zt,useImperativeHandle:zt,useLayoutEffect:zt,useInsertionEffect:zt,useMemo:zt,useReducer:zt,useRef:zt,useState:zt,useDebugValue:zt,useDeferredValue:zt,useTransition:zt,useSyncExternalStore:zt,useId:zt,useHostTransitionStatus:zt,useFormState:zt,useActionState:zt,useOptimistic:zt,useMemoCache:zt,useCacheRefresh:zt};Ll.useEffectEvent=zt;var Qp={readContext:nn,use:Zs,useCallback:function(e,n){return mn().memoizedState=[e,n===void 0?null:n],e},useContext:nn,useEffect:Cp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Fs(4194308,4,Mp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Fs(4194308,4,e,n)},useInsertionEffect:function(e,n){Fs(4,2,e,n)},useMemo:function(e,n){var a=mn();n=n===void 0?null:n;var i=e();if(Ci){Xe(!0);try{e()}finally{Xe(!1)}}return a.memoizedState=[i,n],i},useReducer:function(e,n,a){var i=mn();if(a!==void 0){var r=a(n);if(Ci){Xe(!0);try{a(n)}finally{Xe(!1)}}}else r=n;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=Zb.bind(null,Ge,e),[i.memoizedState,e]},useRef:function(e){var n=mn();return e={current:e},n.memoizedState=e},useState:function(e){e=Kr(e);var n=e.queue,a=Gp.bind(null,Ge,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Jr,useDeferredValue:function(e,n){var a=mn();return Pr(a,e,n)},useTransition:function(){var e=Kr(!1);return e=Rp.bind(null,Ge,e.queue,!0,!1),mn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var i=Ge,r=mn();if(Ie){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Je&127)!==0||up(i,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Cp(mp.bind(null,i,c,e),[e]),i.flags|=2048,tl(9,{destroy:void 0},pp.bind(null,i,c,a,n),null),a},useId:function(){var e=mn(),n=ht.identifierPrefix;if(Ie){var a=ea,i=In;a=(i&~(1<<32-nt(i)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Qs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=qb++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ir,useFormState:wp,useActionState:wp,useOptimistic:function(e){var n=mn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ec.bind(null,Ge,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qr,useCacheRefresh:function(){return mn().memoizedState=Xb.bind(null,Ge)},useEffectEvent:function(e){var n=mn(),a={impl:e};return n.memoizedState=a,function(){if((st&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},tc={readContext:nn,use:Zs,useCallback:Ap,useContext:nn,useEffect:Vr,useImperativeHandle:Dp,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:Op,useReducer:Ks,useRef:kp,useState:function(){return Ks(ba)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Ot();return Up(a,ut.memoizedState,e,n)},useTransition:function(){var e=Ks(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Rl(e),n]},useSyncExternalStore:dp,useId:qp,useHostTransitionStatus:Ir,useFormState:_p,useActionState:_p,useOptimistic:function(e,n){var a=Ot();return xp(a,ut,e,n)},useMemoCache:Qr,useCacheRefresh:Bp};tc.useEffectEvent=zp;var Xp={readContext:nn,use:Zs,useCallback:Ap,useContext:nn,useEffect:Vr,useImperativeHandle:Dp,useInsertionEffect:Tp,useLayoutEffect:Ep,useMemo:Op,useReducer:Zr,useRef:kp,useState:function(){return Zr(ba)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Ot();return ut===null?Pr(a,e,n):Up(a,ut.memoizedState,e,n)},useTransition:function(){var e=Zr(ba)[0],n=Ot().memoizedState;return[typeof e=="boolean"?e:Rl(e),n]},useSyncExternalStore:dp,useId:qp,useHostTransitionStatus:Ir,useFormState:Sp,useActionState:Sp,useOptimistic:function(e,n){var a=Ot();return ut!==null?xp(a,ut,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qr,useCacheRefresh:Bp};Xp.useEffectEvent=zp;function nc(e,n,a,i){n=e.memoizedState,a=a(i,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ac={enqueueSetState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.payload=n,a!=null&&(r.callback=a),n=$a(e,r,i),n!==null&&(wn(n,e,i),Dl(n,e,i))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var i=Tn(),r=Ga(i);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=$a(e,r,i),n!==null&&(wn(n,e,i),Dl(n,e,i))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Tn(),i=Ga(a);i.tag=2,n!=null&&(i.callback=n),n=$a(e,i,a),n!==null&&(wn(n,e,a),Dl(n,e,a))}};function Zp(e,n,a,i,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,p):n.prototype&&n.prototype.isPureReactComponent?!Nl(a,i)||!Nl(r,c):!0}function Kp(e,n,a,i){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,i),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,i),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function zi(e,n){var a=n;if("ref"in n){a={};for(var i in n)i!=="ref"&&(a[i]=n[i])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Fp(e){zs(e)}function Vp(e){console.error(e)}function Jp(e){zs(e)}function Ps(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(i){setTimeout(function(){throw i})}}function Pp(e,n,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ic(e,n,a){return a=Ga(a),a.tag=3,a.payload={element:null},a.callback=function(){Ps(e,n)},a}function Wp(e){return e=Ga(e),e.tag=3,e}function Ip(e,n,a,i){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=i.value;e.payload=function(){return r(c)},e.callback=function(){Pp(n,a,i)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Pp(n,a,i),typeof r!="function"&&(Fa===null?Fa=new Set([this]):Fa.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})})}function Kb(e,n,a,i,r){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(n=a.alternate,n!==null&&Ki(n,a,r,!0),a=Sn.current,a!==null){switch(a.tag){case 31:case 13:return $n===null?co():a.alternate===null&&Tt===0&&(Tt=3),a.flags&=-257,a.flags|=65536,a.lanes=r,i===Ls?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([i]):n.add(i),Tc(e,i,r)),!1;case 22:return a.flags|=65536,i===Ls?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([i]):a.add(i)),Tc(e,i,r)),!1}throw Error(d(435,a.tag))}return Tc(e,i,r),co(),!1}if(Ie)return n=Sn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,i!==_r&&(e=Error(d(422),{cause:i}),Cl(Ln(e,a)))):(i!==_r&&(n=Error(d(423),{cause:i}),Cl(Ln(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=Ln(i,a),r=ic(e.stateNode,i,r),Or(e,r),Tt!==4&&(Tt=2)),!1;var c=Error(d(520),{cause:i});if(c=Ln(c,a),Zl===null?Zl=[c]:Zl.push(c),Tt!==4&&(Tt=2),n===null)return!0;i=Ln(i,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ic(a.stateNode,i,e),Or(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Fa===null||!Fa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Wp(r),Ip(r,e,a,i),Or(a,r),!1}a=a.return}while(a!==null);return!1}var lc=Error(d(461)),$t=!1;function an(e,n,a,i){n.child=e===null?ap(n,null,a,i):ki(n,e.child,a,i)}function em(e,n,a,i,r){a=a.render;var c=n.ref;if("ref"in i){var p={};for(var b in i)b!=="ref"&&(p[b]=i[b])}else p=i;return wi(n),i=Br(e,n,a,p,c,r),b=Gr(),e!==null&&!$t?($r(e,n,r),ga(e,n,r)):(Ie&&b&&jr(n),n.flags|=1,an(e,n,i,r),n.child)}function tm(e,n,a,i,r){if(e===null){var c=a.type;return typeof c=="function"&&!gr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,nm(e,n,c,i,r)):(e=Ds(a.type,null,i,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!mc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:Nl,a(p,i)&&e.ref===n.ref)return ga(e,n,r)}return n.flags|=1,e=pa(c,i),e.ref=n.ref,e.return=n,n.child=e}function nm(e,n,a,i,r){if(e!==null){var c=e.memoizedProps;if(Nl(c,i)&&e.ref===n.ref)if($t=!1,n.pendingProps=i=c,mc(e,r))(e.flags&131072)!==0&&($t=!0);else return n.lanes=e.lanes,ga(e,n,r)}return sc(e,n,a,i,r)}function am(e,n,a,i){var r=i.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(i=n.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~c}else i=0,n.child=null;return im(e,n,c,a,i)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rs(n,c!==null?c.cachePool:null),c!==null?sp(n,c):Rr(),op(n);else return i=n.lanes=536870912,im(e,n,c!==null?c.baseLanes|a:a,a,i)}else c!==null?(Rs(n,c.cachePool),sp(n,c),Qa(),n.memoizedState=null):(e!==null&&Rs(n,null),Rr(),Qa());return an(e,n,r,a),n.child}function ql(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function im(e,n,a,i,r){var c=Er();return c=c===null?null:{parent:Bt._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Rs(n,null),Rr(),op(n),e!==null&&Ki(e,n,i,!0),n.childLanes=r,null}function Ws(e,n){return n=eo({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function lm(e,n,a){return ki(n,e.child,null,a),e=Ws(n,n.pendingProps),e.flags|=2,kn(n),n.memoizedState=null,e}function Fb(e,n,a){var i=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ie){if(i.mode==="hidden")return e=Ws(n,i),n.lanes=536870912,ql(null,e);if(Lr(n),(e=vt)?(e=gf(e,Gn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:In,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=$u(e),a.return=n,n.child=a,tn=n,vt=null)):e=null,e===null)throw La(n);return n.lanes=536870912,null}return Ws(n,i)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Lr(n),r)if(n.flags&256)n.flags&=-257,n=lm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if($t||Ki(e,n,a,!1),r=(a&e.childLanes)!==0,$t||r){if(i=ht,i!==null&&(p=_e(i,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,gi(e,p),wn(i,e,p),lc;co(),n=lm(e,n,a)}else e=c.treeContext,vt=Yn(p.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Xu(n,e),n=Ws(n,i),n.flags|=4096;return n}return e=pa(e.child,{mode:i.mode,children:i.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Is(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sc(e,n,a,i,r){return wi(n),a=Br(e,n,a,i,void 0,r),i=Gr(),e!==null&&!$t?($r(e,n,r),ga(e,n,r)):(Ie&&i&&jr(n),n.flags|=1,an(e,n,a,r),n.child)}function sm(e,n,a,i,r,c){return wi(n),n.updateQueue=null,a=cp(n,i,a,r),rp(e),i=Gr(),e!==null&&!$t?($r(e,n,c),ga(e,n,c)):(Ie&&i&&jr(n),n.flags|=1,an(e,n,a,c),n.child)}function om(e,n,a,i,r){if(wi(n),n.stateNode===null){var c=Yi,p=a.contextType;typeof p=="object"&&p!==null&&(c=nn(p)),c=new a(i,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ac,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=i,c.state=n.memoizedState,c.refs={},Dr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?nn(p):Yi,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(nc(n,a,p,i),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&ac.enqueueReplaceState(c,c.state,null),Ol(n,i,c,r),Al(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!0}else if(e===null){c=n.stateNode;var b=n.memoizedProps,T=zi(a,b);c.props=T;var Z=c.context,te=a.contextType;p=Yi,typeof te=="object"&&te!==null&&(p=nn(te));var re=a.getDerivedStateFromProps;te=typeof re=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,te||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||Z!==p)&&Kp(n,c,i,p),Ba=!1;var K=n.memoizedState;c.state=K,Ol(n,i,c,r),Al(),Z=n.memoizedState,b||K!==Z||Ba?(typeof re=="function"&&(nc(n,a,re,i),Z=n.memoizedState),(T=Ba||Zp(n,a,T,i,K,Z,p))?(te||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=i,n.memoizedState=Z),c.props=i,c.state=Z,c.context=p,i=T):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),i=!1)}else{c=n.stateNode,Ar(e,n),p=n.memoizedProps,te=zi(a,p),c.props=te,re=n.pendingProps,K=c.context,Z=a.contextType,T=Yi,typeof Z=="object"&&Z!==null&&(T=nn(Z)),b=a.getDerivedStateFromProps,(Z=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==re||K!==T)&&Kp(n,c,i,T),Ba=!1,K=n.memoizedState,c.state=K,Ol(n,i,c,r),Al();var J=n.memoizedState;p!==re||K!==J||Ba||e!==null&&e.dependencies!==null&&Os(e.dependencies)?(typeof b=="function"&&(nc(n,a,b,i),J=n.memoizedState),(te=Ba||Zp(n,a,te,i,K,J,T)||e!==null&&e.dependencies!==null&&Os(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,J,T),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,J,T)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),n.memoizedProps=i,n.memoizedState=J),c.props=i,c.state=J,c.context=T,i=te):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&K===e.memoizedState||(n.flags|=1024),i=!1)}return c=i,Is(e,n),i=(n.flags&128)!==0,c||i?(c=n.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&i?(n.child=ki(n,e.child,null,r),n.child=ki(n,null,a,r)):an(e,n,a,r),n.memoizedState=c.state,e=n.child):e=ga(e,n,r),e}function rm(e,n,a,i){return vi(),n.flags|=256,an(e,n,a,i),n.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Pu()}}function cc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=zn),e}function cm(e,n,a){var i=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(At.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ie){if(r?Ya(n):Qa(),(e=vt)?(e=gf(e,Gn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ra!==null?{id:In,overflow:ea}:null,retryLane:536870912,hydrationErrors:null},a=$u(e),a.return=n,n.child=a,tn=n,vt=null)):e=null,e===null)throw La(n);return Xc(e)?n.lanes=32:n.lanes=536870912,null}var b=i.children;return i=i.fallback,r?(Qa(),r=n.mode,b=eo({mode:"hidden",children:b},r),i=yi(i,r,a,null),b.return=n,i.return=n,b.sibling=i,n.child=b,i=n.child,i.memoizedState=rc(a),i.childLanes=cc(e,p,a),n.memoizedState=oc,ql(null,i)):(Ya(n),dc(n,b))}var T=e.memoizedState;if(T!==null&&(b=T.dehydrated,b!==null)){if(c)n.flags&256?(Ya(n),n.flags&=-257,n=uc(e,n,a)):n.memoizedState!==null?(Qa(),n.child=e.child,n.flags|=128,n=null):(Qa(),b=i.fallback,r=n.mode,i=eo({mode:"visible",children:i.children},r),b=yi(b,r,a,null),b.flags|=2,i.return=n,b.return=n,i.sibling=b,n.child=i,ki(n,e.child,null,a),i=n.child,i.memoizedState=rc(a),i.childLanes=cc(e,p,a),n.memoizedState=oc,n=ql(null,i));else if(Ya(n),Xc(b)){if(p=b.nextSibling&&b.nextSibling.dataset,p)var Z=p.dgst;p=Z,i=Error(d(419)),i.stack="",i.digest=p,Cl({value:i,source:null,stack:null}),n=uc(e,n,a)}else if($t||Ki(e,n,a,!1),p=(a&e.childLanes)!==0,$t||p){if(p=ht,p!==null&&(i=_e(p,a),i!==0&&i!==T.retryLane))throw T.retryLane=i,gi(e,i),wn(p,e,i),lc;Qc(b)||co(),n=uc(e,n,a)}else Qc(b)?(n.flags|=192,n.child=e.child,n=null):(e=T.treeContext,vt=Yn(b.nextSibling),tn=n,Ie=!0,Ha=null,Gn=!1,e!==null&&Xu(n,e),n=dc(n,i.children),n.flags|=4096);return n}return r?(Qa(),b=i.fallback,r=n.mode,T=e.child,Z=T.sibling,i=pa(T,{mode:"hidden",children:i.children}),i.subtreeFlags=T.subtreeFlags&65011712,Z!==null?b=pa(Z,b):(b=yi(b,r,a,null),b.flags|=2),b.return=n,i.return=n,i.sibling=b,n.child=i,ql(null,i),i=n.child,b=e.child.memoizedState,b===null?b=rc(a):(r=b.cachePool,r!==null?(T=Bt._currentValue,r=r.parent!==T?{parent:T,pool:T}:r):r=Pu(),b={baseLanes:b.baseLanes|a,cachePool:r}),i.memoizedState=b,i.childLanes=cc(e,p,a),n.memoizedState=oc,ql(e.child,i)):(Ya(n),a=e.child,e=a.sibling,a=pa(a,{mode:"visible",children:i.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function dc(e,n){return n=eo({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function eo(e,n){return e=Nn(22,e,null,n),e.lanes=0,e}function uc(e,n,a){return ki(n,e.child,null,a),e=dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function dm(e,n,a){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n),kr(e.return,n,a)}function pc(e,n,a,i,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=i,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function um(e,n,a){var i=n.pendingProps,r=i.revealOrder,c=i.tail;i=i.children;var p=At.current,b=(p&2)!==0;if(b?(p=p&1|2,n.flags|=128):p&=1,I(At,p),an(e,n,i,a),i=Ie?kl:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dm(e,a,n);else if(e.tag===19)dm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&$s(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),pc(n,!1,r,a,c,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&$s(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}pc(n,!0,a,null,c,i);break;case"together":pc(n,!1,null,null,void 0,i);break;default:n.memoizedState=null}return n.child}function ga(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ka|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ki(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=pa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=pa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Os(e)))}function Vb(e,n,a){switch(n.tag){case 3:Ve(n,n.stateNode.containerInfo),qa(n,Bt,e.memoizedState.cache),vi();break;case 27:case 5:et(n);break;case 4:Ve(n,n.stateNode.containerInfo);break;case 10:qa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lr(n),null;break;case 13:var i=n.memoizedState;if(i!==null)return i.dehydrated!==null?(Ya(n),n.flags|=128,null):(a&n.child.childLanes)!==0?cm(e,n,a):(Ya(n),e=ga(e,n,a),e!==null?e.sibling:null);Ya(n);break;case 19:var r=(e.flags&128)!==0;if(i=(a&n.childLanes)!==0,i||(Ki(e,n,a,!1),i=(a&n.childLanes)!==0),r){if(i)return um(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),I(At,At.current),i)break;return null;case 22:return n.lanes=0,am(e,n,a,n.pendingProps);case 24:qa(n,Bt,e.memoizedState.cache)}return ga(e,n,a)}function pm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)$t=!0;else{if(!mc(e,a)&&(n.flags&128)===0)return $t=!1,Vb(e,n,a);$t=(e.flags&131072)!==0}else $t=!1,Ie&&(n.flags&1048576)!==0&&Qu(n,kl,n.index);switch(n.lanes=0,n.tag){case 16:e:{var i=n.pendingProps;if(e=Ni(n.elementType),n.type=e,typeof e=="function")gr(e)?(i=zi(e,i),n.tag=1,n=om(null,n,e,i,a)):(n.tag=0,n=sc(null,n,e,i,a));else{if(e!=null){var r=e.$$typeof;if(r===ae){n.tag=11,n=em(null,n,e,i,a);break e}else if(r===A){n.tag=14,n=tm(null,n,e,i,a);break e}}throw n=$(e)||e,Error(d(306,n,""))}}return n;case 0:return sc(e,n,n.type,n.pendingProps,a);case 1:return i=n.type,r=zi(i,n.pendingProps),om(e,n,i,r,a);case 3:e:{if(Ve(n,n.stateNode.containerInfo),e===null)throw Error(d(387));i=n.pendingProps;var c=n.memoizedState;r=c.element,Ar(e,n),Ol(n,i,null,a);var p=n.memoizedState;if(i=p.cache,qa(n,Bt,i),i!==c.cache&&Cr(n,[Bt],a,!0),Al(),i=p.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=rm(e,n,i,a);break e}else if(i!==r){r=Ln(Error(d(424)),n),Cl(r),n=rm(e,n,i,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(vt=Yn(e.firstChild),tn=n,Ie=!0,Ha=null,Gn=!0,a=ap(n,null,i,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(vi(),i===r){n=ga(e,n,a);break e}an(e,n,i,a)}n=n.child}return n;case 26:return Is(e,n),e===null?(a=Nf(n.type,null,n.pendingProps,null))?n.memoizedState=a:Ie||(a=n.type,e=n.pendingProps,i=bo(Ee.current).createElement(a),i[Dt]=n,i[St]=e,ln(i,a,e),Pt(i),n.stateNode=i):n.memoizedState=Nf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return et(n),e===null&&Ie&&(i=n.stateNode=jf(n.type,n.pendingProps,Ee.current),tn=n,Gn=!0,r=vt,Wa(n.type)?(Zc=r,vt=Yn(i.firstChild)):vt=r),an(e,n,n.pendingProps.children,a),Is(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ie&&((r=i=vt)&&(i=Sg(i,n.type,n.pendingProps,Gn),i!==null?(n.stateNode=i,tn=n,vt=Yn(i.firstChild),Gn=!1,r=!0):r=!1),r||La(n)),et(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,i=c.children,Gc(r,c)?i=null:p!==null&&Gc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Br(e,n,Bb,null,null,a),es._currentValue=r),Is(e,n),an(e,n,i,a),n.child;case 6:return e===null&&Ie&&((e=a=vt)&&(a=kg(a,n.pendingProps,Gn),a!==null?(n.stateNode=a,tn=n,vt=null,e=!0):e=!1),e||La(n)),null;case 13:return cm(e,n,a);case 4:return Ve(n,n.stateNode.containerInfo),i=n.pendingProps,e===null?n.child=ki(n,null,i,a):an(e,n,i,a),n.child;case 11:return em(e,n,n.type,n.pendingProps,a);case 7:return an(e,n,n.pendingProps,a),n.child;case 8:return an(e,n,n.pendingProps.children,a),n.child;case 12:return an(e,n,n.pendingProps.children,a),n.child;case 10:return i=n.pendingProps,qa(n,n.type,i.value),an(e,n,i.children,a),n.child;case 9:return r=n.type._context,i=n.pendingProps.children,wi(n),r=nn(r),i=i(r),n.flags|=1,an(e,n,i,a),n.child;case 14:return tm(e,n,n.type,n.pendingProps,a);case 15:return nm(e,n,n.type,n.pendingProps,a);case 19:return um(e,n,a);case 31:return Fb(e,n,a);case 22:return am(e,n,a,n.pendingProps);case 24:return wi(n),i=nn(Bt),e===null?(r=Er(),r===null&&(r=ht,c=zr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:i,cache:r},Dr(n),qa(n,Bt,r)):((e.lanes&a)!==0&&(Ar(e,n),Ol(n,null,null,a),Al()),r=e.memoizedState,c=n.memoizedState,r.parent!==i?(r={parent:i,cache:i},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),qa(n,Bt,i)):(i=c.cache,qa(n,Bt,i),i!==r.cache&&Cr(n,[Bt],a,!0))),an(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ya(e){e.flags|=4}function fc(e,n,a,i,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(qm())e.flags|=8192;else throw Si=Ls,Mr}else e.flags&=-16777217}function mm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tf(n))if(qm())e.flags|=8192;else throw Si=Ls,Mr}function to(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ke():536870912,e.lanes|=n,ll|=n)}function Bl(e,n){if(!Ie)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function jt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=a,n}function Jb(e,n,a){var i=n.pendingProps;switch(wr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return jt(n),null;case 1:return jt(n),null;case 3:return a=n.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),ha(Bt),Re(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Zi(n)?ya(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nr())),jt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ya(n),c!==null?(jt(n),mm(n,c)):(jt(n),fc(n,r,null,i,a))):c?c!==e.memoizedState?(ya(n),jt(n),mm(n,c)):(jt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==i&&ya(n),jt(n),fc(n,r,e,i,a)),null;case 27:if(ft(n),a=Ee.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return jt(n),null}e=me.current,Zi(n)?Zu(n):(e=jf(r,i,a),n.stateNode=e,ya(n))}return jt(n),null;case 5:if(ft(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(!i){if(n.stateNode===null)throw Error(d(166));return jt(n),null}if(c=me.current,Zi(n))Zu(n);else{var p=bo(Ee.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?p.createElement("select",{is:i.is}):p.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?p.createElement(r,{is:i.is}):p.createElement(r)}}c[Dt]=n,c[St]=i;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(ln(c,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ya(n)}}return jt(n),fc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==i&&ya(n);else{if(typeof i!="string"&&n.stateNode===null)throw Error(d(166));if(e=Ee.current,Zi(n)){if(e=n.stateNode,a=n.memoizedProps,i=null,r=tn,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[Dt]=n,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||df(e.nodeValue,a)),e||La(n,!0)}else e=bo(e).createTextNode(i),e[Dt]=n,n.stateNode=e}return jt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(i=Zi(n),a!==null){if(e===null){if(!i)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Dt]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),e=!1}else a=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(kn(n),n):(kn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return jt(n),null;case 13:if(i=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Zi(n),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[Dt]=n}else vi(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;jt(n),r=!1}else r=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(kn(n),n):(kn(n),null)}return kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=n.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==r&&(i.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),to(n,n.updateQueue),jt(n),null);case 4:return Re(),e===null&&Rc(n.stateNode.containerInfo),jt(n),null;case 10:return ha(n.type),jt(n),null;case 19:if(E(At),i=n.memoizedState,i===null)return jt(n),null;if(r=(n.flags&128)!==0,c=i.rendering,c===null)if(r)Bl(i,!1);else{if(Tt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=$s(e),c!==null){for(n.flags|=128,Bl(i,!1),e=c.updateQueue,n.updateQueue=e,to(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Gu(a,e),a=a.sibling;return I(At,At.current&1|2),Ie&&ma(n,i.treeForkCount),n.child}e=e.sibling}i.tail!==null&&rt()>so&&(n.flags|=128,r=!0,Bl(i,!1),n.lanes=4194304)}else{if(!r)if(e=$s(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,to(n,e),Bl(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ie)return jt(n),null}else 2*rt()-i.renderingStartTime>so&&a!==536870912&&(n.flags|=128,r=!0,Bl(i,!1),n.lanes=4194304);i.isBackwards?(c.sibling=n.child,n.child=c):(e=i.last,e!==null?e.sibling=c:n.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=rt(),e.sibling=null,a=At.current,I(At,r?a&1|2:a&1),Ie&&ma(n,i.treeForkCount),e):(jt(n),null);case 22:case 23:return kn(n),Hr(),i=n.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(n.flags|=8192):i&&(n.flags|=8192),i?(a&536870912)!==0&&(n.flags&128)===0&&(jt(n),n.subtreeFlags&6&&(n.flags|=8192)):jt(n),a=n.updateQueue,a!==null&&to(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(i=n.memoizedState.cachePool.pool),i!==a&&(n.flags|=2048),e!==null&&E(_i),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ha(Bt),jt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Pb(e,n){switch(wr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return ha(Bt),Re(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return ft(n),null;case 31:if(n.memoizedState!==null){if(kn(n),n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));vi()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return E(At),null;case 4:return Re(),null;case 10:return ha(n.type),null;case 22:case 23:return kn(n),Hr(),e!==null&&E(_i),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return ha(Bt),null;case 25:return null;default:return null}}function fm(e,n){switch(wr(n),n.tag){case 3:ha(Bt),Re();break;case 26:case 27:case 5:ft(n);break;case 4:Re();break;case 31:n.memoizedState!==null&&kn(n);break;case 13:kn(n);break;case 19:E(At);break;case 10:ha(n.type);break;case 22:case 23:kn(n),Hr(),e!==null&&E(_i);break;case 24:ha(Bt)}}function Gl(e,n){try{var a=n.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var r=i.next;a=r;do{if((a.tag&e)===e){i=void 0;var c=a.create,p=a.inst;i=c(),p.destroy=i}a=a.next}while(a!==r)}}catch(b){dt(n,n.return,b)}}function Xa(e,n,a){try{var i=n.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var c=r.next;i=c;do{if((i.tag&e)===e){var p=i.inst,b=p.destroy;if(b!==void 0){p.destroy=void 0,r=n;var T=a,Z=b;try{Z()}catch(te){dt(r,T,te)}}}i=i.next}while(i!==c)}}catch(te){dt(n,n.return,te)}}function hm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{lp(n,a)}catch(i){dt(e,e.return,i)}}}function xm(e,n,a){a.props=zi(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){dt(e,n,i)}}function $l(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(r){dt(e,n,r)}}function ta(e,n){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(r){dt(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){dt(e,n,r)}else a.current=null}function bm(e){var n=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(r){dt(e,e.return,r)}}function hc(e,n,a){try{var i=e.stateNode;yg(i,e.type,a,n),i[St]=n}catch(r){dt(e,e.return,r)}}function gm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Wa(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||gm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Wa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function bc(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=da));else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(bc(e,n,a),e=e.sibling;e!==null;)bc(e,n,a),e=e.sibling}function no(e,n,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(i!==4&&(i===27&&Wa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(no(e,n,a),e=e.sibling;e!==null;)no(e,n,a),e=e.sibling}function ym(e){var n=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);ln(n,i,a),n[Dt]=e,n[St]=a}catch(c){dt(e,e.return,c)}}var va=!1,Yt=!1,gc=!1,vm=typeof WeakSet=="function"?WeakSet:Set,Wt=null;function Wb(e,n){if(e=e.containerInfo,qc=No,e=Du(e),ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var r=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,b=-1,T=-1,Z=0,te=0,re=e,K=null;t:for(;;){for(var J;re!==a||r!==0&&re.nodeType!==3||(b=p+r),re!==c||i!==0&&re.nodeType!==3||(T=p+i),re.nodeType===3&&(p+=re.nodeValue.length),(J=re.firstChild)!==null;)K=re,re=J;for(;;){if(re===e)break t;if(K===a&&++Z===r&&(b=p),K===c&&++te===i&&(T=p),(J=re.nextSibling)!==null)break;re=K,K=re.parentNode}re=J}a=b===-1||T===-1?null:{start:b,end:T}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},No=!1,Wt=n;Wt!==null;)if(n=Wt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Wt=e;else for(;Wt!==null;){switch(n=Wt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,i=a.stateNode;try{var Se=zi(a.type,r);e=i.getSnapshotBeforeUpdate(Se,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(Oe){dt(a,a.return,Oe)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Wt=e;break}Wt=n.return}}function jm(e,n,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:wa(e,a),i&4&&Gl(5,a);break;case 1:if(wa(e,a),i&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){dt(a,a.return,p)}else{var r=zi(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){dt(a,a.return,p)}}i&64&&hm(a),i&512&&$l(a,a.return);break;case 3:if(wa(e,a),i&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{lp(e,n)}catch(p){dt(a,a.return,p)}}break;case 27:n===null&&i&4&&ym(a);case 26:case 5:wa(e,a),n===null&&i&4&&bm(a),i&512&&$l(a,a.return);break;case 12:wa(e,a);break;case 31:wa(e,a),i&4&&Nm(e,a);break;case 13:wa(e,a),i&4&&Sm(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=og.bind(null,a),Cg(e,a))));break;case 22:if(i=a.memoizedState!==null||va,!i){n=n!==null&&n.memoizedState!==null||Yt,r=va;var c=Yt;va=i,(Yt=n)&&!c?_a(e,a,(a.subtreeFlags&8772)!==0):wa(e,a),va=r,Yt=c}break;case 30:break;default:wa(e,a)}}function wm(e){var n=e.alternate;n!==null&&(e.alternate=null,wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&xn(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var _t=null,gn=!1;function ja(e,n,a){for(a=a.child;a!==null;)_m(e,n,a),a=a.sibling}function _m(e,n,a){if(qe&&typeof qe.onCommitFiberUnmount=="function")try{qe.onCommitFiberUnmount(He,a)}catch{}switch(a.tag){case 26:Yt||ta(a,n),ja(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Yt||ta(a,n);var i=_t,r=gn;Wa(a.type)&&(_t=a.stateNode,gn=!1),ja(e,n,a),Pl(a.stateNode),_t=i,gn=r;break;case 5:Yt||ta(a,n);case 6:if(i=_t,r=gn,_t=null,ja(e,n,a),_t=i,gn=r,_t!==null)if(gn)try{(_t.nodeType===9?_t.body:_t.nodeName==="HTML"?_t.ownerDocument.body:_t).removeChild(a.stateNode)}catch(c){dt(a,n,c)}else try{_t.removeChild(a.stateNode)}catch(c){dt(a,n,c)}break;case 18:_t!==null&&(gn?(e=_t,xf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ml(e)):xf(_t,a.stateNode));break;case 4:i=_t,r=gn,_t=a.stateNode.containerInfo,gn=!0,ja(e,n,a),_t=i,gn=r;break;case 0:case 11:case 14:case 15:Xa(2,a,n),Yt||Xa(4,a,n),ja(e,n,a);break;case 1:Yt||(ta(a,n),i=a.stateNode,typeof i.componentWillUnmount=="function"&&xm(a,n,i)),ja(e,n,a);break;case 21:ja(e,n,a);break;case 22:Yt=(i=Yt)||a.memoizedState!==null,ja(e,n,a),Yt=i;break;default:ja(e,n,a)}}function Nm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ml(e)}catch(a){dt(n,n.return,a)}}}function Sm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ml(e)}catch(a){dt(n,n.return,a)}}function Ib(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new vm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new vm),n;default:throw Error(d(435,e.tag))}}function ao(e,n){var a=Ib(e);n.forEach(function(i){if(!a.has(i)){a.add(i);var r=rg.bind(null,e,i);i.then(r,r)}})}function yn(e,n){var a=n.deletions;if(a!==null)for(var i=0;i<a.length;i++){var r=a[i],c=e,p=n,b=p;e:for(;b!==null;){switch(b.tag){case 27:if(Wa(b.type)){_t=b.stateNode,gn=!1;break e}break;case 5:_t=b.stateNode,gn=!1;break e;case 3:case 4:_t=b.stateNode.containerInfo,gn=!0;break e}b=b.return}if(_t===null)throw Error(d(160));_m(c,p,r),_t=null,gn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)km(n,e),n=n.sibling}var Vn=null;function km(e,n){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:yn(n,e),vn(e),i&4&&(Xa(3,e,e.return),Gl(3,e),Xa(5,e,e.return));break;case 1:yn(n,e),vn(e),i&512&&(Yt||a===null||ta(a,a.return)),i&64&&va&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var r=Vn;if(yn(n,e),vn(e),i&512&&(Yt||a===null||ta(a,a.return)),i&4){var c=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":c=r.getElementsByTagName("title")[0],(!c||c[tt]||c[Dt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(i),r.head.insertBefore(c,r.querySelector("head > title"))),ln(c,i,a),c[Dt]=e,Pt(c),i=c;break e;case"link":var p=Cf("link","href",r).get(i+(a.href||""));if(p){for(var b=0;b<p.length;b++)if(c=p[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(b,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;case"meta":if(p=Cf("meta","content",r).get(i+(a.content||""))){for(b=0;b<p.length;b++)if(c=p[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(b,1);break t}}c=r.createElement(i),ln(c,i,a),r.head.appendChild(c);break;default:throw Error(d(468,i))}c[Dt]=e,Pt(c),i=c}e.stateNode=i}else zf(r,e.type,e.stateNode);else e.stateNode=kf(r,i,e.memoizedProps);else c!==i?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,i===null?zf(r,e.type,e.stateNode):kf(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&hc(e,e.memoizedProps,a.memoizedProps)}break;case 27:yn(n,e),vn(e),i&512&&(Yt||a===null||ta(a,a.return)),a!==null&&i&4&&hc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(yn(n,e),vn(e),i&512&&(Yt||a===null||ta(a,a.return)),e.flags&32){r=e.stateNode;try{Ri(r,"")}catch(Se){dt(e,e.return,Se)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,hc(e,r,a!==null?a.memoizedProps:r)),i&1024&&(gc=!0);break;case 6:if(yn(n,e),vn(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(Se){dt(e,e.return,Se)}}break;case 3:if(vo=null,r=Vn,Vn=go(n.containerInfo),yn(n,e),Vn=r,vn(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{ml(n.containerInfo)}catch(Se){dt(e,e.return,Se)}gc&&(gc=!1,Cm(e));break;case 4:i=Vn,Vn=go(e.stateNode.containerInfo),yn(n,e),vn(e),Vn=i;break;case 12:yn(n,e),vn(e);break;case 31:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ao(e,i)));break;case 13:yn(n,e),vn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(lo=rt()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ao(e,i)));break;case 22:r=e.memoizedState!==null;var T=a!==null&&a.memoizedState!==null,Z=va,te=Yt;if(va=Z||r,Yt=te||T,yn(n,e),Yt=te,va=Z,vn(e),i&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||T||va||Yt||Ti(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){T=a=n;try{if(c=T.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{b=T.stateNode;var re=T.memoizedProps.style,K=re!=null&&re.hasOwnProperty("display")?re.display:null;b.style.display=K==null||typeof K=="boolean"?"":(""+K).trim()}}catch(Se){dt(T,T.return,Se)}}}else if(n.tag===6){if(a===null){T=n;try{T.stateNode.nodeValue=r?"":T.memoizedProps}catch(Se){dt(T,T.return,Se)}}}else if(n.tag===18){if(a===null){T=n;try{var J=T.stateNode;r?bf(J,!0):bf(T.stateNode,!1)}catch(Se){dt(T,T.return,Se)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,ao(e,a))));break;case 19:yn(n,e),vn(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,ao(e,i)));break;case 30:break;case 21:break;default:yn(n,e),vn(e)}}function vn(e){var n=e.flags;if(n&2){try{for(var a,i=e.return;i!==null;){if(gm(i)){a=i;break}i=i.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=xc(e);no(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(Ri(p,""),a.flags&=-33);var b=xc(e);no(e,b,p);break;case 3:case 4:var T=a.stateNode.containerInfo,Z=xc(e);bc(e,Z,T);break;default:throw Error(d(161))}}catch(te){dt(e,e.return,te)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function wa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)jm(e,n.alternate,n),n=n.sibling}function Ti(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Xa(4,n,n.return),Ti(n);break;case 1:ta(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&xm(n,n.return,a),Ti(n);break;case 27:Pl(n.stateNode);case 26:case 5:ta(n,n.return),Ti(n);break;case 22:n.memoizedState===null&&Ti(n);break;case 30:Ti(n);break;default:Ti(n)}e=e.sibling}}function _a(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var i=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:_a(r,c,a),Gl(4,c);break;case 1:if(_a(r,c,a),i=c,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){dt(i,i.return,Z)}if(i=c,r=i.updateQueue,r!==null){var b=i.stateNode;try{var T=r.shared.hiddenCallbacks;if(T!==null)for(r.shared.hiddenCallbacks=null,r=0;r<T.length;r++)ip(T[r],b)}catch(Z){dt(i,i.return,Z)}}a&&p&64&&hm(c),$l(c,c.return);break;case 27:ym(c);case 26:case 5:_a(r,c,a),a&&i===null&&p&4&&bm(c),$l(c,c.return);break;case 12:_a(r,c,a);break;case 31:_a(r,c,a),a&&p&4&&Nm(r,c);break;case 13:_a(r,c,a),a&&p&4&&Sm(r,c);break;case 22:c.memoizedState===null&&_a(r,c,a),$l(c,c.return);break;case 30:break;default:_a(r,c,a)}n=n.sibling}}function yc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&zl(a))}function vc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zl(e))}function Jn(e,n,a,i){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)zm(e,n,a,i),n=n.sibling}function zm(e,n,a,i){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Jn(e,n,a,i),r&2048&&Gl(9,n);break;case 1:Jn(e,n,a,i);break;case 3:Jn(e,n,a,i),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&zl(e)));break;case 12:if(r&2048){Jn(e,n,a,i),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,b=c.onPostCommit;typeof b=="function"&&b(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(T){dt(n,n.return,T)}}else Jn(e,n,a,i);break;case 31:Jn(e,n,a,i);break;case 13:Jn(e,n,a,i);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Jn(e,n,a,i):Yl(e,n):c._visibility&2?Jn(e,n,a,i):(c._visibility|=2,nl(e,n,a,i,(n.subtreeFlags&10256)!==0||!1)),r&2048&&yc(p,n);break;case 24:Jn(e,n,a,i),r&2048&&vc(n.alternate,n);break;default:Jn(e,n,a,i)}}function nl(e,n,a,i,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,b=a,T=i,Z=p.flags;switch(p.tag){case 0:case 11:case 15:nl(c,p,b,T,r),Gl(8,p);break;case 23:break;case 22:var te=p.stateNode;p.memoizedState!==null?te._visibility&2?nl(c,p,b,T,r):Yl(c,p):(te._visibility|=2,nl(c,p,b,T,r)),r&&Z&2048&&yc(p.alternate,p);break;case 24:nl(c,p,b,T,r),r&&Z&2048&&vc(p.alternate,p);break;default:nl(c,p,b,T,r)}n=n.sibling}}function Yl(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,i=n,r=i.flags;switch(i.tag){case 22:Yl(a,i),r&2048&&yc(i.alternate,i);break;case 24:Yl(a,i),r&2048&&vc(i.alternate,i);break;default:Yl(a,i)}n=n.sibling}}var Ql=8192;function al(e,n,a){if(e.subtreeFlags&Ql)for(e=e.child;e!==null;)Tm(e,n,a),e=e.sibling}function Tm(e,n,a){switch(e.tag){case 26:al(e,n,a),e.flags&Ql&&e.memoizedState!==null&&qg(a,Vn,e.memoizedState,e.memoizedProps);break;case 5:al(e,n,a);break;case 3:case 4:var i=Vn;Vn=go(e.stateNode.containerInfo),al(e,n,a),Vn=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ql,Ql=16777216,al(e,n,a),Ql=i):al(e,n,a));break;default:al(e,n,a)}}function Em(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Dm(i,e)}Em(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Mm(e),e=e.sibling}function Mm(e){switch(e.tag){case 0:case 11:case 15:Xl(e),e.flags&2048&&Xa(9,e,e.return);break;case 3:Xl(e);break;case 12:Xl(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,io(e)):Xl(e);break;default:Xl(e)}}function io(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];Wt=i,Dm(i,e)}Em(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Xa(8,n,n.return),io(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,io(n));break;default:io(n)}e=e.sibling}}function Dm(e,n){for(;Wt!==null;){var a=Wt;switch(a.tag){case 0:case 11:case 15:Xa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:zl(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Wt=i;else e:for(a=e;Wt!==null;){i=Wt;var r=i.sibling,c=i.return;if(wm(i),i===a){Wt=null;break e}if(r!==null){r.return=c,Wt=r;break e}Wt=c}}}var eg={getCacheForType:function(e){var n=nn(Bt),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return nn(Bt).controller.signal}},tg=typeof WeakMap=="function"?WeakMap:Map,st=0,ht=null,Ze=null,Je=0,ct=0,Cn=null,Za=!1,il=!1,jc=!1,Na=0,Tt=0,Ka=0,Ei=0,wc=0,zn=0,ll=0,Zl=null,jn=null,_c=!1,lo=0,Am=0,so=1/0,oo=null,Fa=null,Zt=0,Va=null,sl=null,Sa=0,Nc=0,Sc=null,Om=null,Kl=0,kc=null;function Tn(){return(st&2)!==0&&Je!==0?Je&-Je:C.T!==null?Dc():oa()}function Um(){if(zn===0)if((Je&536870912)===0||Ie){var e=un;un<<=1,(un&3932160)===0&&(un=262144),zn=e}else zn=536870912;return e=Sn.current,e!==null&&(e.flags|=32),zn}function wn(e,n,a){(e===ht&&(ct===2||ct===9)||e.cancelPendingCommit!==null)&&(ol(e,0),Ja(e,Je,zn,!1)),We(e,a),((st&2)===0||e!==ht)&&(e===ht&&((st&2)===0&&(Ei|=a),Tt===4&&Ja(e,Je,zn,!1)),na(e))}function Rm(e,n,a){if((st&6)!==0)throw Error(d(327));var i=!a&&(n&127)===0&&(n&e.expiredLanes)===0||oe(e,n),r=i?ig(e,n):zc(e,n,!0),c=i;do{if(r===0){il&&!i&&Ja(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!ng(a)){r=zc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var b=e;r=Zl;var T=b.current.memoizedState.isDehydrated;if(T&&(ol(b,p).flags|=256),p=zc(b,p,!1),p!==2){if(jc&&!T){b.errorRecoveryDisabledLanes|=c,Ei|=c,r=4;break e}c=jn,jn=r,c!==null&&(jn===null?jn=c:jn.push.apply(jn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){ol(e,0),Ja(e,n,0,!0);break}e:{switch(i=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Ja(i,n,zn,!Za);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=lo+300-rt(),10<r)){if(Ja(i,n,zn,!Za),L(i,0,!0)!==0)break e;Sa=n,i.timeoutHandle=ff(Hm.bind(null,i,a,jn,oo,_c,n,zn,Ei,ll,Za,c,"Throttled",-0,0),r);break e}Hm(i,a,jn,oo,_c,n,zn,Ei,ll,Za,c,null,-0,0)}}break}while(!0);na(e)}function Hm(e,n,a,i,r,c,p,b,T,Z,te,re,K,J){if(e.timeoutHandle=-1,re=n.subtreeFlags,re&8192||(re&16785408)===16785408){re={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:da},Tm(n,c,re);var Se=(c&62914560)===c?lo-rt():(c&4194048)===c?Am-rt():0;if(Se=Bg(re,Se),Se!==null){Sa=c,e.cancelPendingCommit=Se(Xm.bind(null,e,n,c,a,i,r,p,b,T,te,re,null,K,J)),Ja(e,c,p,!Z);return}}Xm(e,n,c,a,i,r,p,b,T)}function ng(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var r=a[i],c=r.getSnapshot;r=r.value;try{if(!_n(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ja(e,n,a,i){n&=~wc,n&=~Ei,e.suspendedLanes|=n,e.pingedLanes&=~n,i&&(e.warmLanes|=n),i=e.expirationTimes;for(var r=n;0<r;){var c=31-nt(r),p=1<<c;i[c]=-1,r&=~p}a!==0&&se(e,a,n)}function ro(){return(st&6)===0?(Fl(0),!1):!0}function Cc(){if(Ze!==null){if(ct===0)var e=Ze.return;else e=Ze,fa=ji=null,Yr(e),Pi=null,El=0,e=Ze;for(;e!==null;)fm(e.alternate,e),e=e.return;Ze=null}}function ol(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,wg(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Sa=0,Cc(),ht=e,Ze=a=pa(e.current,null),Je=n,ct=0,Cn=null,Za=!1,il=oe(e,n),jc=!1,ll=zn=wc=Ei=Ka=Tt=0,jn=Zl=null,_c=!1,(n&8)!==0&&(n|=n&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=n;0<i;){var r=31-nt(i),c=1<<r;n|=e[r],i&=~c}return Na=n,Ts(),a}function Lm(e,n){Ge=null,C.H=Ll,n===Ji||n===Hs?(n=ep(),ct=3):n===Mr?(n=ep(),ct=4):ct=n===lc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Cn=n,Ze===null&&(Tt=1,Ps(e,Ln(n,e.current)))}function qm(){var e=Sn.current;return e===null?!0:(Je&4194048)===Je?$n===null:(Je&62914560)===Je||(Je&536870912)!==0?e===$n:!1}function Bm(){var e=C.H;return C.H=Ll,e===null?Ll:e}function Gm(){var e=C.A;return C.A=eg,e}function co(){Tt=4,Za||(Je&4194048)!==Je&&Sn.current!==null||(il=!0),(Ka&134217727)===0&&(Ei&134217727)===0||ht===null||Ja(ht,Je,zn,!1)}function zc(e,n,a){var i=st;st|=2;var r=Bm(),c=Gm();(ht!==e||Je!==n)&&(oo=null,ol(e,n)),n=!1;var p=Tt;e:do try{if(ct!==0&&Ze!==null){var b=Ze,T=Cn;switch(ct){case 8:Cc(),p=6;break e;case 3:case 2:case 9:case 6:Sn.current===null&&(n=!0);var Z=ct;if(ct=0,Cn=null,rl(e,b,T,Z),a&&il){p=0;break e}break;default:Z=ct,ct=0,Cn=null,rl(e,b,T,Z)}}ag(),p=Tt;break}catch(te){Lm(e,te)}while(!0);return n&&e.shellSuspendCounter++,fa=ji=null,st=i,C.H=r,C.A=c,Ze===null&&(ht=null,Je=0,Ts()),p}function ag(){for(;Ze!==null;)$m(Ze)}function ig(e,n){var a=st;st|=2;var i=Bm(),r=Gm();ht!==e||Je!==n?(oo=null,so=rt()+500,ol(e,n)):il=oe(e,n);e:do try{if(ct!==0&&Ze!==null){n=Ze;var c=Cn;t:switch(ct){case 1:ct=0,Cn=null,rl(e,n,c,1);break;case 2:case 9:if(Wu(c)){ct=0,Cn=null,Ym(n);break}n=function(){ct!==2&&ct!==9||ht!==e||(ct=7),na(e)},c.then(n,n);break e;case 3:ct=7;break e;case 4:ct=5;break e;case 7:Wu(c)?(ct=0,Cn=null,Ym(n)):(ct=0,Cn=null,rl(e,n,c,7));break;case 5:var p=null;switch(Ze.tag){case 26:p=Ze.memoizedState;case 5:case 27:var b=Ze;if(p?Tf(p):b.stateNode.complete){ct=0,Cn=null;var T=b.sibling;if(T!==null)Ze=T;else{var Z=b.return;Z!==null?(Ze=Z,uo(Z)):Ze=null}break t}}ct=0,Cn=null,rl(e,n,c,5);break;case 6:ct=0,Cn=null,rl(e,n,c,6);break;case 8:Cc(),Tt=6;break e;default:throw Error(d(462))}}lg();break}catch(te){Lm(e,te)}while(!0);return fa=ji=null,C.H=i,C.A=r,st=a,Ze!==null?0:(ht=null,Je=0,Ts(),Tt)}function lg(){for(;Ze!==null&&!Ae();)$m(Ze)}function $m(e){var n=pm(e.alternate,e,Na);e.memoizedProps=e.pendingProps,n===null?uo(e):Ze=n}function Ym(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=sm(a,n,n.pendingProps,n.type,void 0,Je);break;case 11:n=sm(a,n,n.pendingProps,n.type.render,n.ref,Je);break;case 5:Yr(n);default:fm(a,n),n=Ze=Gu(n,Na),n=pm(a,n,Na)}e.memoizedProps=e.pendingProps,n===null?uo(e):Ze=n}function rl(e,n,a,i){fa=ji=null,Yr(n),Pi=null,El=0;var r=n.return;try{if(Kb(e,r,n,a,Je)){Tt=1,Ps(e,Ln(a,e.current)),Ze=null;return}}catch(c){if(r!==null)throw Ze=r,c;Tt=1,Ps(e,Ln(a,e.current)),Ze=null;return}n.flags&32768?(Ie||i===1?e=!0:il||(Je&536870912)!==0?e=!1:(Za=e=!0,(i===2||i===9||i===3||i===6)&&(i=Sn.current,i!==null&&i.tag===13&&(i.flags|=16384))),Qm(n,e)):uo(n)}function uo(e){var n=e;do{if((n.flags&32768)!==0){Qm(n,Za);return}e=n.return;var a=Jb(n.alternate,n,Na);if(a!==null){Ze=a;return}if(n=n.sibling,n!==null){Ze=n;return}Ze=n=e}while(n!==null);Tt===0&&(Tt=5)}function Qm(e,n){do{var a=Pb(e.alternate,e);if(a!==null){a.flags&=32767,Ze=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Ze=e;return}Ze=e=a}while(e!==null);Tt=6,Ze=null}function Xm(e,n,a,i,r,c,p,b,T){e.cancelPendingCommit=null;do po();while(Zt!==0);if((st&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=xr,g(e,a,c,p,b,T),e===ht&&(Ze=ht=null,Je=0),sl=n,Va=e,Sa=a,Nc=c,Sc=r,Om=i,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,cg(F,function(){return Jm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||i){i=C.T,C.T=null,r=V.p,V.p=2,p=st,st|=4;try{Wb(e,n,a)}finally{st=p,V.p=r,C.T=i}}Zt=1,Zm(),Km(),Fm()}}function Zm(){if(Zt===1){Zt=0;var e=Va,n=sl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=C.T,C.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{km(n,e);var c=Bc,p=Du(e.containerInfo),b=c.focusedElem,T=c.selectionRange;if(p!==b&&b&&b.ownerDocument&&Mu(b.ownerDocument.documentElement,b)){if(T!==null&&ur(b)){var Z=T.start,te=T.end;if(te===void 0&&(te=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(te,b.value.length);else{var re=b.ownerDocument||document,K=re&&re.defaultView||window;if(K.getSelection){var J=K.getSelection(),Se=b.textContent.length,Oe=Math.min(T.start,Se),mt=T.end===void 0?Oe:Math.min(T.end,Se);!J.extend&&Oe>mt&&(p=mt,mt=Oe,Oe=p);var q=Eu(b,Oe),O=Eu(b,mt);if(q&&O&&(J.rangeCount!==1||J.anchorNode!==q.node||J.anchorOffset!==q.offset||J.focusNode!==O.node||J.focusOffset!==O.offset)){var X=re.createRange();X.setStart(q.node,q.offset),J.removeAllRanges(),Oe>mt?(J.addRange(X),J.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),J.addRange(X))}}}}for(re=[],J=b;J=J.parentNode;)J.nodeType===1&&re.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<re.length;b++){var ie=re[b];ie.element.scrollLeft=ie.left,ie.element.scrollTop=ie.top}}No=!!qc,Bc=qc=null}finally{st=r,V.p=i,C.T=a}}e.current=n,Zt=2}}function Km(){if(Zt===2){Zt=0;var e=Va,n=sl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=C.T,C.T=null;var i=V.p;V.p=2;var r=st;st|=4;try{jm(e,n.alternate,n)}finally{st=r,V.p=i,C.T=a}}Zt=3}}function Fm(){if(Zt===4||Zt===3){Zt=0,fn();var e=Va,n=sl,a=Sa,i=Om;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Zt=5:(Zt=0,sl=Va=null,Vm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Fa=null),On(a),n=n.stateNode,qe&&typeof qe.onCommitFiberRoot=="function")try{qe.onCommitFiberRoot(He,n,void 0,(n.current.flags&128)===128)}catch{}if(i!==null){n=C.T,r=V.p,V.p=2,C.T=null;try{for(var c=e.onRecoverableError,p=0;p<i.length;p++){var b=i[p];c(b.value,{componentStack:b.stack})}}finally{C.T=n,V.p=r}}(Sa&3)!==0&&po(),na(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===kc?Kl++:(Kl=0,kc=e):Kl=0,Fl(0)}}function Vm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,zl(n)))}function po(){return Zm(),Km(),Fm(),Jm()}function Jm(){if(Zt!==5)return!1;var e=Va,n=Nc;Nc=0;var a=On(Sa),i=C.T,r=V.p;try{V.p=32>a?32:a,C.T=null,a=Sc,Sc=null;var c=Va,p=Sa;if(Zt=0,sl=Va=null,Sa=0,(st&6)!==0)throw Error(d(331));var b=st;if(st|=4,Mm(c.current),zm(c,c.current,p,a),st=b,Fl(0,!1),qe&&typeof qe.onPostCommitFiberRoot=="function")try{qe.onPostCommitFiberRoot(He,c)}catch{}return!0}finally{V.p=r,C.T=i,Vm(e,n)}}function Pm(e,n,a){n=Ln(a,n),n=ic(e.stateNode,n,2),e=$a(e,n,2),e!==null&&(We(e,2),na(e))}function dt(e,n,a){if(e.tag===3)Pm(e,e,a);else for(;n!==null;){if(n.tag===3){Pm(n,e,a);break}else if(n.tag===1){var i=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Fa===null||!Fa.has(i))){e=Ln(a,e),a=Wp(2),i=$a(n,a,2),i!==null&&(Ip(a,i,n,e),We(i,2),na(i));break}}n=n.return}}function Tc(e,n,a){var i=e.pingCache;if(i===null){i=e.pingCache=new tg;var r=new Set;i.set(n,r)}else r=i.get(n),r===void 0&&(r=new Set,i.set(n,r));r.has(a)||(jc=!0,r.add(a),e=sg.bind(null,e,n,a),n.then(e,e))}function sg(e,n,a){var i=e.pingCache;i!==null&&i.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Je&a)===a&&(Tt===4||Tt===3&&(Je&62914560)===Je&&300>rt()-lo?(st&2)===0&&ol(e,0):wc|=a,ll===Je&&(ll=0)),na(e)}function Wm(e,n){n===0&&(n=ke()),e=gi(e,n),e!==null&&(We(e,n),na(e))}function og(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Wm(e,a)}function rg(e,n){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(n),Wm(e,a)}function cg(e,n){return je(e,n)}var mo=null,cl=null,Ec=!1,fo=!1,Mc=!1,Pa=0;function na(e){e!==cl&&e.next===null&&(cl===null?mo=cl=e:cl=cl.next=e),fo=!0,Ec||(Ec=!0,ug())}function Fl(e,n){if(!Mc&&fo){Mc=!0;do for(var a=!1,i=mo;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var c=0;else{var p=i.suspendedLanes,b=i.pingedLanes;c=(1<<31-nt(42|e)+1)-1,c&=r&~(p&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,nf(i,c))}else c=Je,c=L(i,i===ht?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||oe(i,c)||(a=!0,nf(i,c));i=i.next}while(a);Mc=!1}}function dg(){Im()}function Im(){fo=Ec=!1;var e=0;Pa!==0&&jg()&&(e=Pa);for(var n=rt(),a=null,i=mo;i!==null;){var r=i.next,c=ef(i,n);c===0?(i.next=null,a===null?mo=r:a.next=r,r===null&&(cl=a)):(a=i,(e!==0||(c&3)!==0)&&(fo=!0)),i=r}Zt!==0&&Zt!==5||Fl(e),Pa!==0&&(Pa=0)}function ef(e,n){for(var a=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-nt(c),b=1<<p,T=r[p];T===-1?((b&a)===0||(b&i)!==0)&&(r[p]=ee(b,n)):T<=n&&(e.expiredLanes|=b),c&=~b}if(n=ht,a=Je,a=L(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===n&&(ct===2||ct===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Mt(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||oe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(i!==null&&Mt(i),On(a)){case 2:case 8:a=hn;break;case 32:a=F;break;case 268435456:a=we;break;default:a=F}return i=tf.bind(null,e),a=je(a,i),e.callbackPriority=n,e.callbackNode=a,n}return i!==null&&i!==null&&Mt(i),e.callbackPriority=2,e.callbackNode=null,2}function tf(e,n){if(Zt!==0&&Zt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(po()&&e.callbackNode!==a)return null;var i=Je;return i=L(e,e===ht?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Rm(e,i,n),ef(e,rt()),e.callbackNode!=null&&e.callbackNode===a?tf.bind(null,e):null)}function nf(e,n){if(po())return null;Rm(e,n,!0)}function ug(){_g(function(){(st&6)!==0?je(An,dg):Im()})}function Dc(){if(Pa===0){var e=Fi;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Pa=e}return Pa}function af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:js(""+e)}function lf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function pg(e,n,a,i,r){if(n==="submit"&&a&&a.stateNode===r){var c=af((r[St]||null).action),p=i.submitter;p&&(n=(n=p[St]||null)?af(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var b=new Ss("action","action",null,i,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(Pa!==0){var T=p?lf(r,p):new FormData(r);Wr(a,{pending:!0,data:T,method:r.method,action:c},null,T)}}else typeof c=="function"&&(b.preventDefault(),T=p?lf(r,p):new FormData(r),Wr(a,{pending:!0,data:T,method:r.method,action:c},c,T))},currentTarget:r}]})}}for(var Ac=0;Ac<hr.length;Ac++){var Oc=hr[Ac],mg=Oc.toLowerCase(),fg=Oc[0].toUpperCase()+Oc.slice(1);Fn(mg,"on"+fg)}Fn(Uu,"onAnimationEnd"),Fn(Ru,"onAnimationIteration"),Fn(Hu,"onAnimationStart"),Fn("dblclick","onDoubleClick"),Fn("focusin","onFocus"),Fn("focusout","onBlur"),Fn(Eb,"onTransitionRun"),Fn(Mb,"onTransitionStart"),Fn(Db,"onTransitionCancel"),Fn(Lu,"onTransitionEnd"),Oi("onMouseEnter",["mouseout","mouseover"]),Oi("onMouseLeave",["mouseout","mouseover"]),Oi("onPointerEnter",["pointerout","pointerover"]),Oi("onPointerLeave",["pointerout","pointerover"]),fi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),fi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),fi("onBeforeInput",["compositionend","keypress","textInput","paste"]),fi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),fi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function sf(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],r=i.event;i=i.listeners;e:{var c=void 0;if(n)for(var p=i.length-1;0<=p;p--){var b=i[p],T=b.instance,Z=b.currentTarget;if(b=b.listener,T!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(te){zs(te)}r.currentTarget=null,c=T}else for(p=0;p<i.length;p++){if(b=i[p],T=b.instance,Z=b.currentTarget,b=b.listener,T!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(te){zs(te)}r.currentTarget=null,c=T}}}}function Ke(e,n){var a=n[y];a===void 0&&(a=n[y]=new Set);var i=e+"__bubble";a.has(i)||(of(n,e,2,!1),a.add(i))}function Uc(e,n,a){var i=0;n&&(i|=4),of(a,e,i,n)}var ho="_reactListening"+Math.random().toString(36).slice(2);function Rc(e){if(!e[ho]){e[ho]=!0,Id.forEach(function(a){a!=="selectionchange"&&(hg.has(a)||Uc(a,!1,e),Uc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ho]||(n[ho]=!0,Uc("selectionchange",!1,n))}}function of(e,n,a,i){switch(Rf(n)){case 2:var r=Yg;break;case 8:r=Qg;break;default:r=Pc}a=r.bind(null,n,a,e),r=void 0,!nr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Hc(e,n,a,i,r){var c=i;if((n&1)===0&&(n&2)===0&&i!==null)e:for(;;){if(i===null)return;var p=i.tag;if(p===3||p===4){var b=i.stateNode.containerInfo;if(b===r)break;if(p===4)for(p=i.return;p!==null;){var T=p.tag;if((T===3||T===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;b!==null;){if(p=qt(b),p===null)return;if(T=p.tag,T===5||T===6||T===26||T===27){i=c=p;continue e}b=b.parentNode}}i=i.return}uu(function(){var Z=c,te=er(a),re=[];e:{var K=qu.get(e);if(K!==void 0){var J=Ss,Se=e;switch(e){case"keypress":if(_s(a)===0)break e;case"keydown":case"keyup":J=rb;break;case"focusin":Se="focus",J=sr;break;case"focusout":Se="blur",J=sr;break;case"beforeblur":case"afterblur":J=sr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=fu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=Jx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=ub;break;case Uu:case Ru:case Hu:J=Ix;break;case Lu:J=mb;break;case"scroll":case"scrollend":J=Fx;break;case"wheel":J=hb;break;case"copy":case"cut":case"paste":J=tb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=xu;break;case"toggle":case"beforetoggle":J=bb}var Oe=(n&4)!==0,mt=!Oe&&(e==="scroll"||e==="scrollend"),q=Oe?K!==null?K+"Capture":null:K;Oe=[];for(var O=Z,X;O!==null;){var ie=O;if(X=ie.stateNode,ie=ie.tag,ie!==5&&ie!==26&&ie!==27||X===null||q===null||(ie=bl(O,q),ie!=null&&Oe.push(Jl(O,ie,X))),mt)break;O=O.return}0<Oe.length&&(K=new J(K,Se,null,a,te),re.push({event:K,listeners:Oe}))}}if((n&7)===0){e:{if(K=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",K&&a!==Io&&(Se=a.relatedTarget||a.fromElement)&&(qt(Se)||Se[Aa]))break e;if((J||K)&&(K=te.window===te?te:(K=te.ownerDocument)?K.defaultView||K.parentWindow:window,J?(Se=a.relatedTarget||a.toElement,J=Z,Se=Se?qt(Se):null,Se!==null&&(mt=h(Se),Oe=Se.tag,Se!==mt||Oe!==5&&Oe!==27&&Oe!==6)&&(Se=null)):(J=null,Se=Z),J!==Se)){if(Oe=fu,ie="onMouseLeave",q="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Oe=xu,ie="onPointerLeave",q="onPointerEnter",O="pointer"),mt=J==null?K:ra(J),X=Se==null?K:ra(Se),K=new Oe(ie,O+"leave",J,a,te),K.target=mt,K.relatedTarget=X,ie=null,qt(te)===Z&&(Oe=new Oe(q,O+"enter",Se,a,te),Oe.target=X,Oe.relatedTarget=mt,ie=Oe),mt=ie,J&&Se)t:{for(Oe=xg,q=J,O=Se,X=0,ie=q;ie;ie=Oe(ie))X++;ie=0;for(var De=O;De;De=Oe(De))ie++;for(;0<X-ie;)q=Oe(q),X--;for(;0<ie-X;)O=Oe(O),ie--;for(;X--;){if(q===O||O!==null&&q===O.alternate){Oe=q;break t}q=Oe(q),O=Oe(O)}Oe=null}else Oe=null;J!==null&&rf(re,K,J,Oe,!1),Se!==null&&mt!==null&&rf(re,mt,Se,Oe,!0)}}e:{if(K=Z?ra(Z):window,J=K.nodeName&&K.nodeName.toLowerCase(),J==="select"||J==="input"&&K.type==="file")var at=Nu;else if(wu(K))if(Su)at=Cb;else{at=Sb;var ze=Nb}else J=K.nodeName,!J||J.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?Z&&Wo(Z.elementType)&&(at=Nu):at=kb;if(at&&(at=at(e,Z))){_u(re,at,a,te);break e}ze&&ze(e,K,Z),e==="focusout"&&Z&&K.type==="number"&&Z.memoizedProps.value!=null&&Po(K,"number",K.value)}switch(ze=Z?ra(Z):window,e){case"focusin":(wu(ze)||ze.contentEditable==="true")&&(Bi=ze,pr=Z,Sl=null);break;case"focusout":Sl=pr=Bi=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,Au(re,a,te);break;case"selectionchange":if(Tb)break;case"keydown":case"keyup":Au(re,a,te)}var $e;if(rr)e:{switch(e){case"compositionstart":var Pe="onCompositionStart";break e;case"compositionend":Pe="onCompositionEnd";break e;case"compositionupdate":Pe="onCompositionUpdate";break e}Pe=void 0}else qi?vu(e,a)&&(Pe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Pe="onCompositionStart");Pe&&(bu&&a.locale!=="ko"&&(qi||Pe!=="onCompositionStart"?Pe==="onCompositionEnd"&&qi&&($e=pu()):(Ua=te,ar="value"in Ua?Ua.value:Ua.textContent,qi=!0)),ze=xo(Z,Pe),0<ze.length&&(Pe=new hu(Pe,e,null,a,te),re.push({event:Pe,listeners:ze}),$e?Pe.data=$e:($e=ju(a),$e!==null&&(Pe.data=$e)))),($e=yb?vb(e,a):jb(e,a))&&(Pe=xo(Z,"onBeforeInput"),0<Pe.length&&(ze=new hu("onBeforeInput","beforeinput",null,a,te),re.push({event:ze,listeners:Pe}),ze.data=$e)),pg(re,e,Z,a,te)}sf(re,n)})}function Jl(e,n,a){return{instance:e,listener:n,currentTarget:a}}function xo(e,n){for(var a=n+"Capture",i=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=bl(e,a),r!=null&&i.unshift(Jl(e,r,c)),r=bl(e,n),r!=null&&i.push(Jl(e,r,c))),e.tag===3)return i;e=e.return}return[]}function xg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rf(e,n,a,i,r){for(var c=n._reactName,p=[];a!==null&&a!==i;){var b=a,T=b.alternate,Z=b.stateNode;if(b=b.tag,T!==null&&T===i)break;b!==5&&b!==26&&b!==27||Z===null||(T=Z,r?(Z=bl(a,c),Z!=null&&p.unshift(Jl(a,Z,T))):r||(Z=bl(a,c),Z!=null&&p.push(Jl(a,Z,T)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var bg=/\r\n?/g,gg=/\u0000|\uFFFD/g;function cf(e){return(typeof e=="string"?e:""+e).replace(bg,`
`).replace(gg,"")}function df(e,n){return n=cf(n),cf(e)===n}function pt(e,n,a,i,r,c){switch(a){case"children":typeof i=="string"?n==="body"||n==="textarea"&&i===""||Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&n!=="body"&&Ri(e,""+i);break;case"className":ys(e,"class",i);break;case"tabIndex":ys(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ys(e,a,i);break;case"style":cu(e,i,c);break;case"data":if(n!=="object"){ys(e,"data",i);break}case"src":case"href":if(i===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=js(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&pt(e,n,"name",r.name,r,null),pt(e,n,"formEncType",r.formEncType,r,null),pt(e,n,"formMethod",r.formMethod,r,null),pt(e,n,"formTarget",r.formTarget,r,null)):(pt(e,n,"encType",r.encType,r,null),pt(e,n,"method",r.method,r,null),pt(e,n,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=js(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=da);break;case"onScroll":i!=null&&Ke("scroll",e);break;case"onScrollEnd":i!=null&&Ke("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=js(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":Ke("beforetoggle",e),Ke("toggle",e),gs(e,"popover",i);break;case"xlinkActuate":ca(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ca(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ca(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ca(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ca(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ca(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ca(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ca(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ca(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":gs(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Zx.get(a)||a,gs(e,a,i))}}function Lc(e,n,a,i,r,c){switch(a){case"style":cu(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(a=i.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ri(e,i):(typeof i=="number"||typeof i=="bigint")&&Ri(e,""+i);break;case"onScroll":i!=null&&Ke("scroll",e);break;case"onScrollEnd":i!=null&&Ke("scrollend",e);break;case"onClick":i!=null&&(e.onclick=da);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!eu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[St]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof i=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,i,r);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):gs(e,a,i)}}}function ln(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ke("error",e),Ke("load",e);var i=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,c,p,a,null)}}r&&pt(e,n,"srcSet",a.srcSet,a,null),i&&pt(e,n,"src",a.src,a,null);return;case"input":Ke("invalid",e);var b=c=p=r=null,T=null,Z=null;for(i in a)if(a.hasOwnProperty(i)){var te=a[i];if(te!=null)switch(i){case"name":r=te;break;case"type":p=te;break;case"checked":T=te;break;case"defaultChecked":Z=te;break;case"value":c=te;break;case"defaultValue":b=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(d(137,n));break;default:pt(e,n,i,te,a,null)}}lu(e,c,b,T,Z,p,r,!1);return;case"select":Ke("invalid",e),i=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(b=a[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":p=b;break;case"multiple":i=b;default:pt(e,n,r,b,a,null)}n=c,a=p,e.multiple=!!i,n!=null?Ui(e,!!i,n,!1):a!=null&&Ui(e,!!i,a,!0);return;case"textarea":Ke("invalid",e),c=r=i=null;for(p in a)if(a.hasOwnProperty(p)&&(b=a[p],b!=null))switch(p){case"value":i=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(91));break;default:pt(e,n,p,b,a,null)}ou(e,i,r,c);return;case"option":for(T in a)if(a.hasOwnProperty(T)&&(i=a[T],i!=null))switch(T){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:pt(e,n,T,i,a,null)}return;case"dialog":Ke("beforetoggle",e),Ke("toggle",e),Ke("cancel",e),Ke("close",e);break;case"iframe":case"object":Ke("load",e);break;case"video":case"audio":for(i=0;i<Vl.length;i++)Ke(Vl[i],e);break;case"image":Ke("error",e),Ke("load",e);break;case"details":Ke("toggle",e);break;case"embed":case"source":case"link":Ke("error",e),Ke("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(i=a[Z],i!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:pt(e,n,Z,i,a,null)}return;default:if(Wo(n)){for(te in a)a.hasOwnProperty(te)&&(i=a[te],i!==void 0&&Lc(e,n,te,i,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(i=a[b],i!=null&&pt(e,n,b,i,a,null))}function yg(e,n,a,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,b=null,T=null,Z=null,te=null;for(J in a){var re=a[J];if(a.hasOwnProperty(J)&&re!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":T=re;default:i.hasOwnProperty(J)||pt(e,n,J,null,i,re)}}for(var K in i){var J=i[K];if(re=a[K],i.hasOwnProperty(K)&&(J!=null||re!=null))switch(K){case"type":c=J;break;case"name":r=J;break;case"checked":Z=J;break;case"defaultChecked":te=J;break;case"value":p=J;break;case"defaultValue":b=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:J!==re&&pt(e,n,K,J,i,re)}}Jo(e,p,b,T,Z,te,c,r);return;case"select":J=p=b=K=null;for(c in a)if(T=a[c],a.hasOwnProperty(c)&&T!=null)switch(c){case"value":break;case"multiple":J=T;default:i.hasOwnProperty(c)||pt(e,n,c,null,i,T)}for(r in i)if(c=i[r],T=a[r],i.hasOwnProperty(r)&&(c!=null||T!=null))switch(r){case"value":K=c;break;case"defaultValue":b=c;break;case"multiple":p=c;default:c!==T&&pt(e,n,r,c,i,T)}n=b,a=p,i=J,K!=null?Ui(e,!!a,K,!1):!!i!=!!a&&(n!=null?Ui(e,!!a,n,!0):Ui(e,!!a,a?[]:"",!1));return;case"textarea":J=K=null;for(b in a)if(r=a[b],a.hasOwnProperty(b)&&r!=null&&!i.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:pt(e,n,b,null,i,r)}for(p in i)if(r=i[p],c=a[p],i.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":K=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&pt(e,n,p,r,i,c)}su(e,K,J);return;case"option":for(var Se in a)if(K=a[Se],a.hasOwnProperty(Se)&&K!=null&&!i.hasOwnProperty(Se))switch(Se){case"selected":e.selected=!1;break;default:pt(e,n,Se,null,i,K)}for(T in i)if(K=i[T],J=a[T],i.hasOwnProperty(T)&&K!==J&&(K!=null||J!=null))switch(T){case"selected":e.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:pt(e,n,T,K,i,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Oe in a)K=a[Oe],a.hasOwnProperty(Oe)&&K!=null&&!i.hasOwnProperty(Oe)&&pt(e,n,Oe,null,i,K);for(Z in i)if(K=i[Z],J=a[Z],i.hasOwnProperty(Z)&&K!==J&&(K!=null||J!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,n));break;default:pt(e,n,Z,K,i,J)}return;default:if(Wo(n)){for(var mt in a)K=a[mt],a.hasOwnProperty(mt)&&K!==void 0&&!i.hasOwnProperty(mt)&&Lc(e,n,mt,void 0,i,K);for(te in i)K=i[te],J=a[te],!i.hasOwnProperty(te)||K===J||K===void 0&&J===void 0||Lc(e,n,te,K,i,J);return}}for(var q in a)K=a[q],a.hasOwnProperty(q)&&K!=null&&!i.hasOwnProperty(q)&&pt(e,n,q,null,i,K);for(re in i)K=i[re],J=a[re],!i.hasOwnProperty(re)||K===J||K==null&&J==null||pt(e,n,re,K,i,J)}function uf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var r=a[i],c=r.transferSize,p=r.initiatorType,b=r.duration;if(c&&b&&uf(p)){for(p=0,b=r.responseEnd,i+=1;i<a.length;i++){var T=a[i],Z=T.startTime;if(Z>b)break;var te=T.transferSize,re=T.initiatorType;te&&uf(re)&&(T=T.responseEnd,p+=te*(T<b?1:(b-Z)/(T-Z)))}if(--i,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qc=null,Bc=null;function bo(e){return e.nodeType===9?e:e.ownerDocument}function pf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var $c=null;function jg(){var e=window.event;return e&&e.type==="popstate"?e===$c?!1:($c=e,!0):($c=null,!1)}var ff=typeof setTimeout=="function"?setTimeout:void 0,wg=typeof clearTimeout=="function"?clearTimeout:void 0,hf=typeof Promise=="function"?Promise:void 0,_g=typeof queueMicrotask=="function"?queueMicrotask:typeof hf<"u"?function(e){return hf.resolve(null).then(e).catch(Ng)}:ff;function Ng(e){setTimeout(function(){throw e})}function Wa(e){return e==="head"}function xf(e,n){var a=n,i=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(r),ml(n);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")Pl(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Pl(a);for(var c=a.firstChild;c;){var p=c.nextSibling,b=c.nodeName;c[tt]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Pl(e.ownerDocument.body);a=r}while(a);ml(n)}function bf(e,n){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function Yc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),xn(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Sg(e,n,a,i){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[tt])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Yn(e.nextSibling),e===null)break}return null}function kg(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Yn(e.nextSibling),e===null))return null;return e}function gf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Yn(e.nextSibling),e===null))return null;return e}function Qc(e){return e.data==="$?"||e.data==="$~"}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cg(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var i=function(){n(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Yn(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zc=null;function yf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Yn(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function vf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function jf(e,n,a){switch(n=bo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Pl(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);xn(e)}var Qn=new Map,wf=new Set;function go(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ka=V.d;V.d={f:zg,r:Tg,D:Eg,C:Mg,L:Dg,m:Ag,X:Ug,S:Og,M:Rg};function zg(){var e=ka.f(),n=ro();return e||n}function Tg(e){var n=Wn(e);n!==null&&n.tag===5&&n.type==="form"?Lp(n):ka.r(e)}var dl=typeof document>"u"?null:document;function _f(e,n,a){var i=dl;if(i&&typeof n=="string"&&n){var r=Rn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),wf.has(r)||(wf.add(r),e={rel:e,crossOrigin:a,href:n},i.querySelector(r)===null&&(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function Eg(e){ka.D(e),_f("dns-prefetch",e,null)}function Mg(e,n){ka.C(e,n),_f("preconnect",e,n)}function Dg(e,n,a){ka.L(e,n,a);var i=dl;if(i&&e&&n){var r='link[rel="preload"][as="'+Rn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Rn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Rn(a.imageSizes)+'"]')):r+='[href="'+Rn(e)+'"]';var c=r;switch(n){case"style":c=ul(e);break;case"script":c=pl(e)}Qn.has(c)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Qn.set(c,e),i.querySelector(r)!==null||n==="style"&&i.querySelector(Wl(c))||n==="script"&&i.querySelector(Il(c))||(n=i.createElement("link"),ln(n,"link",e),Pt(n),i.head.appendChild(n)))}}function Ag(e,n){ka.m(e,n);var a=dl;if(a&&e){var i=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Rn(i)+'"][href="'+Rn(e)+'"]',c=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=pl(e)}if(!Qn.has(c)&&(e=_({rel:"modulepreload",href:e},n),Qn.set(c,e),a.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Il(c)))return}i=a.createElement("link"),ln(i,"link",e),Pt(i),a.head.appendChild(i)}}}function Og(e,n,a){ka.S(e,n,a);var i=dl;if(i&&e){var r=Oa(i).hoistableStyles,c=ul(e);n=n||"default";var p=r.get(c);if(!p){var b={loading:0,preload:null};if(p=i.querySelector(Wl(c)))b.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Qn.get(c))&&Kc(e,a);var T=p=i.createElement("link");Pt(T),ln(T,"link",e),T._p=new Promise(function(Z,te){T.onload=Z,T.onerror=te}),T.addEventListener("load",function(){b.loading|=1}),T.addEventListener("error",function(){b.loading|=2}),b.loading|=4,yo(p,n,i)}p={type:"stylesheet",instance:p,count:1,state:b},r.set(c,p)}}}function Ug(e,n){ka.X(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(Il(r)),c||(e=_({src:e,async:!0},n),(n=Qn.get(r))&&Fc(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Rg(e,n){ka.M(e,n);var a=dl;if(a&&e){var i=Oa(a).hoistableScripts,r=pl(e),c=i.get(r);c||(c=a.querySelector(Il(r)),c||(e=_({src:e,async:!0,type:"module"},n),(n=Qn.get(r))&&Fc(e,n),c=a.createElement("script"),Pt(c),ln(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(r,c))}}function Nf(e,n,a,i){var r=(r=Ee.current)?go(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ul(a.href),a=Oa(r).hoistableStyles,i=a.get(n),i||(i={type:"style",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ul(a.href);var c=Oa(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Wl(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Qn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Qn.set(e,a),c||Hg(r,e,a,p.state))),n&&i===null)throw Error(d(528,""));return p}if(n&&i!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=pl(a),a=Oa(r).hoistableScripts,i=a.get(n),i||(i={type:"script",instance:null,count:0,state:null},a.set(n,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ul(e){return'href="'+Rn(e)+'"'}function Wl(e){return'link[rel="stylesheet"]['+e+"]"}function Sf(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Hg(e,n,a,i){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?i.loading=1:(n=e.createElement("link"),i.preload=n,n.addEventListener("load",function(){return i.loading|=1}),n.addEventListener("error",function(){return i.loading|=2}),ln(n,"link",a),Pt(n),e.head.appendChild(n))}function pl(e){return'[src="'+Rn(e)+'"]'}function Il(e){return"script[async]"+e}function kf(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var i=e.querySelector('style[data-href~="'+Rn(a.href)+'"]');if(i)return n.instance=i,Pt(i),i;var r=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Pt(i),ln(i,"style",r),yo(i,a.precedence,e),n.instance=i;case"stylesheet":r=ul(a.href);var c=e.querySelector(Wl(r));if(c)return n.state.loading|=4,n.instance=c,Pt(c),c;i=Sf(a),(r=Qn.get(r))&&Kc(i,r),c=(e.ownerDocument||e).createElement("link"),Pt(c);var p=c;return p._p=new Promise(function(b,T){p.onload=b,p.onerror=T}),ln(c,"link",i),n.state.loading|=4,yo(c,a.precedence,e),n.instance=c;case"script":return c=pl(a.src),(r=e.querySelector(Il(c)))?(n.instance=r,Pt(r),r):(i=a,(r=Qn.get(c))&&(i=_({},a),Fc(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),Pt(r),ln(r,"link",i),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(i=n.instance,n.state.loading|=4,yo(i,a.precedence,e));return n.instance}function yo(e,n,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,c=r,p=0;p<i.length;p++){var b=i[p];if(b.dataset.precedence===n)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Fc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var vo=null;function Cf(e,n,a){if(vo===null){var i=new Map,r=vo=new Map;r.set(a,i)}else r=vo,i=r.get(a),i||(i=new Map,r.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[tt]||c[Dt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var b=i.get(p);b?b.push(c):i.set(p,[c])}}return i}function zf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Lg(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qg(e,n,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ul(i.href),c=n.querySelector(Wl(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=jo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Pt(c);return}c=n.ownerDocument||n,i=Sf(i),(r=Qn.get(r))&&Kc(i,r),c=c.createElement("link"),Pt(c);var p=c;p._p=new Promise(function(b,T){p.onload=b,p.onerror=T}),ln(c,"link",i),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=jo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vc=0;function Bg(e,n){return e.stylesheets&&e.count===0&&_o(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Vc===0&&(Vc=62500*vg());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&_o(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function jo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)_o(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var wo=null;function _o(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,wo=new Map,n.forEach(Gg,e),wo=null,jo.call(e))}function Gg(e,n){if(!(n.state.loading&4)){var a=wo.get(e);if(a)var i=a.get(null);else{a=new Map,wo.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),i=p)}i&&a.set(null,i)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||i,c===i&&a.set(null,r),a.set(p,r),this.count++,i=jo.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var es={$$typeof:H,Provider:null,Consumer:null,_currentValue:z,_currentValue2:z,_threadCount:0};function $g(e,n,a,i,r,c,p,b,T){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Be(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.hiddenUpdates=Be(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=T,this.incompleteTransitions=new Map}function Ef(e,n,a,i,r,c,p,b,T,Z,te,re){return e=new $g(e,n,a,p,T,Z,te,re,b),n=1,c===!0&&(n|=24),c=Nn(3,null,null,n),e.current=c,c.stateNode=e,n=zr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:i,isDehydrated:a,cache:n},Dr(c),e}function Mf(e){return e?(e=Yi,e):Yi}function Df(e,n,a,i,r,c){r=Mf(r),i.context===null?i.context=r:i.pendingContext=r,i=Ga(n),i.payload={element:a},c=c===void 0?null:c,c!==null&&(i.callback=c),a=$a(e,i,n),a!==null&&(wn(a,e,n),Dl(a,e,n))}function Af(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jc(e,n){Af(e,n),(e=e.alternate)&&Af(e,n)}function Of(e){if(e.tag===13||e.tag===31){var n=gi(e,67108864);n!==null&&wn(n,e,67108864),Jc(e,67108864)}}function Uf(e){if(e.tag===13||e.tag===31){var n=Tn();n=gt(n);var a=gi(e,n);a!==null&&wn(a,e,n),Jc(e,n)}}var No=!0;function Yg(e,n,a,i){var r=C.T;C.T=null;var c=V.p;try{V.p=2,Pc(e,n,a,i)}finally{V.p=c,C.T=r}}function Qg(e,n,a,i){var r=C.T;C.T=null;var c=V.p;try{V.p=8,Pc(e,n,a,i)}finally{V.p=c,C.T=r}}function Pc(e,n,a,i){if(No){var r=Wc(i);if(r===null)Hc(e,n,i,So,a),Hf(e,i);else if(Zg(r,e,n,a,i))i.stopPropagation();else if(Hf(e,i),n&4&&-1<Xg.indexOf(e)){for(;r!==null;){var c=Wn(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=pn(c.pendingLanes);if(p!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;p;){var T=1<<31-nt(p);b.entanglements[1]|=T,p&=~T}na(c),(st&6)===0&&(so=rt()+500,Fl(0))}}break;case 31:case 13:b=gi(c,2),b!==null&&wn(b,c,2),ro(),Jc(c,2)}if(c=Wc(i),c===null&&Hc(e,n,i,So,a),c===r)break;r=c}r!==null&&i.stopPropagation()}else Hc(e,n,i,null,a)}}function Wc(e){return e=er(e),Ic(e)}var So=null;function Ic(e){if(So=null,e=qt(e),e!==null){var n=h(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=k(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return So=e,null}function Rf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(on()){case An:return 2;case hn:return 8;case F:case Ce:return 32;case we:return 268435456;default:return 32}default:return 32}}var ed=!1,Ia=null,ei=null,ti=null,ts=new Map,ns=new Map,ni=[],Xg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Hf(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":ei=null;break;case"mouseover":case"mouseout":ti=null;break;case"pointerover":case"pointerout":ts.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":ns.delete(n.pointerId)}}function as(e,n,a,i,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:i,nativeEvent:c,targetContainers:[r]},n!==null&&(n=Wn(n),n!==null&&Of(n)),e):(e.eventSystemFlags|=i,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function Zg(e,n,a,i,r){switch(n){case"focusin":return Ia=as(Ia,e,n,a,i,r),!0;case"dragenter":return ei=as(ei,e,n,a,i,r),!0;case"mouseover":return ti=as(ti,e,n,a,i,r),!0;case"pointerover":var c=r.pointerId;return ts.set(c,as(ts.get(c)||null,e,n,a,i,r)),!0;case"gotpointercapture":return c=r.pointerId,ns.set(c,as(ns.get(c)||null,e,n,a,i,r)),!0}return!1}function Lf(e){var n=qt(e.target);if(n!==null){var a=h(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,yt(e.priority,function(){Uf(a)});return}}else if(n===31){if(n=k(a),n!==null){e.blockedOn=n,yt(e.priority,function(){Uf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ko(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);Io=i,a.target.dispatchEvent(i),Io=null}else return n=Wn(a),n!==null&&Of(n),e.blockedOn=a,!1;n.shift()}return!0}function qf(e,n,a){ko(e)&&a.delete(n)}function Kg(){ed=!1,Ia!==null&&ko(Ia)&&(Ia=null),ei!==null&&ko(ei)&&(ei=null),ti!==null&&ko(ti)&&(ti=null),ts.forEach(qf),ns.forEach(qf)}function Co(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Kg)))}var zo=null;function Bf(e){zo!==e&&(zo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){zo===e&&(zo=null);for(var n=0;n<e.length;n+=3){var a=e[n],i=e[n+1],r=e[n+2];if(typeof i!="function"){if(Ic(i||a)===null)continue;break}var c=Wn(a);c!==null&&(e.splice(n,3),n-=3,Wr(c,{pending:!0,data:r,method:a.method,action:i},i,r))}}))}function ml(e){function n(T){return Co(T,e)}Ia!==null&&Co(Ia,e),ei!==null&&Co(ei,e),ti!==null&&Co(ti,e),ts.forEach(n),ns.forEach(n);for(var a=0;a<ni.length;a++){var i=ni[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ni.length&&(a=ni[0],a.blockedOn===null);)Lf(a),a.blockedOn===null&&ni.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var r=a[i],c=a[i+1],p=r[St]||null;if(typeof c=="function")p||Bf(a);else if(p){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[St]||null)b=p.formAction;else if(Ic(r)!==null)continue}else b=p.action;typeof b=="function"?a[i+1]=b:(a.splice(i,3),i-=3),Bf(a)}}}function Gf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function td(e){this._internalRoot=e}To.prototype.render=td.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,i=Tn();Df(a,i,e,n,null,null)},To.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Df(e.current,2,null,e,null,null),ro(),n[Aa]=null}};function To(e){this._internalRoot=e}To.prototype.unstable_scheduleHydration=function(e){if(e){var n=oa();e={blockedOn:null,target:e,priority:n};for(var a=0;a<ni.length&&n!==0&&n<ni[a].priority;a++);ni.splice(a,0,e),a===0&&Lf(e)}};var $f=l.version;if($f!=="19.2.6")throw Error(d(527,$f,"19.2.6"));V.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=x(n),e=e!==null?j(e):null,e=e===null?null:e.stateNode,e};var Fg={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:C,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Eo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Eo.isDisabled&&Eo.supportsFiber)try{He=Eo.inject(Fg),qe=Eo}catch{}}return ls.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,i="",r=Fp,c=Vp,p=Jp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Ef(e,1,!1,null,null,a,i,null,r,c,p,Gf),e[Aa]=n.current,Rc(e),new td(n)},ls.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var i=!1,r="",c=Fp,p=Vp,b=Jp,T=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(T=a.formState)),n=Ef(e,1,!0,n,a??null,i,r,T,c,p,b,Gf),n.context=Mf(null),a=n.current,i=Tn(),i=gt(i),r=Ga(i),r.callback=null,$a(a,r,i),a=i,n.current.lanes=a,We(n,a),na(n),e[Aa]=n.current,Rc(e),new To(n)},ls.version="19.2.6",ls}var Wf;function oy(){if(Wf)return id.exports;Wf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),id.exports=sy(),id.exports}var ry=oy(),ax=nx();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ps(){return ps=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ps.apply(this,arguments)}var ri;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(ri||(ri={}));const If="popstate";function cy(s){s===void 0&&(s={});function l(u,h){let{pathname:f="/",search:k="",hash:v=""}=Ai(u.location.hash.substr(1));return!f.startsWith("/")&&!f.startsWith(".")&&(f="/"+f),Sd("",{pathname:f,search:k,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(u,h){let f=u.document.querySelector("base"),k="";if(f&&f.getAttribute("href")){let v=u.location.href,x=v.indexOf("#");k=x===-1?v:v.slice(0,x)}return k+"#"+(typeof h=="string"?h:$o(h))}function d(u,h){Zo(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return uy(l,o,d,s)}function Ut(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function Zo(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function dy(){return Math.random().toString(36).substr(2,8)}function eh(s,l){return{usr:s.state,key:s.key,idx:l}}function Sd(s,l,o,d){return o===void 0&&(o=null),ps({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?Ai(l):l,{state:o,key:l&&l.key||d||dy()})}function $o(s){let{pathname:l="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(l+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function Ai(s){let l={};if(s){let o=s.indexOf("#");o>=0&&(l.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function uy(s,l,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:h=!1}=d,f=u.history,k=ri.Pop,v=null,x=j();x==null&&(x=0,f.replaceState(ps({},f.state,{idx:x}),""));function j(){return(f.state||{idx:null}).idx}function _(){k=ri.Pop;let M=j(),Q=M==null?null:M-x;x=M,v&&v({action:k,location:Y.location,delta:Q})}function D(M,Q){k=ri.Push;let U=Sd(Y.location,M,Q);o&&o(U,M),x=j()+1;let H=eh(U,x),ae=Y.createHref(U);try{f.pushState(H,"",ae)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;u.location.assign(ae)}h&&v&&v({action:k,location:Y.location,delta:1})}function G(M,Q){k=ri.Replace;let U=Sd(Y.location,M,Q);o&&o(U,M),x=j();let H=eh(U,x),ae=Y.createHref(U);f.replaceState(H,"",ae),h&&v&&v({action:k,location:Y.location,delta:0})}function W(M){let Q=u.location.origin!=="null"?u.location.origin:u.location.href,U=typeof M=="string"?M:$o(M);return U=U.replace(/ $/,"%20"),Ut(Q,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,Q)}let Y={get action(){return k},get location(){return s(u,f)},listen(M){if(v)throw new Error("A history only accepts one active listener");return u.addEventListener(If,_),v=M,()=>{u.removeEventListener(If,_),v=null}},createHref(M){return l(u,M)},createURL:W,encodeLocation(M){let Q=W(M);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:D,replace:G,go(M){return f.go(M)}};return Y}var th;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(th||(th={}));function py(s,l,o){return o===void 0&&(o="/"),my(s,l,o)}function my(s,l,o,d){let u=typeof l=="string"?Ai(l):l,h=Gd(u.pathname||"/",o);if(h==null)return null;let f=ix(s);fy(f);let k=null;for(let v=0;k==null&&v<f.length;++v){let x=ky(h);k=_y(f[v],x)}return k}function ix(s,l,o,d){l===void 0&&(l=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(h,f,k)=>{let v={relativePath:k===void 0?h.path||"":k,caseSensitive:h.caseSensitive===!0,childrenIndex:f,route:h};v.relativePath.startsWith("/")&&(Ut(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let x=ci([d,v.relativePath]),j=o.concat(v);h.children&&h.children.length>0&&(Ut(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),ix(h.children,l,j,x)),!(h.path==null&&!h.index)&&l.push({path:x,score:jy(x,h.index),routesMeta:j})};return s.forEach((h,f)=>{var k;if(h.path===""||!((k=h.path)!=null&&k.includes("?")))u(h,f);else for(let v of lx(h.path))u(h,f,v)}),l}function lx(s){let l=s.split("/");if(l.length===0)return[];let[o,...d]=l,u=o.endsWith("?"),h=o.replace(/\?$/,"");if(d.length===0)return u?[h,""]:[h];let f=lx(d.join("/")),k=[];return k.push(...f.map(v=>v===""?h:[h,v].join("/"))),u&&k.push(...f),k.map(v=>s.startsWith("/")&&v===""?"/":v)}function fy(s){s.sort((l,o)=>l.score!==o.score?o.score-l.score:wy(l.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const hy=/^:[\w-]+$/,xy=3,by=2,gy=1,yy=10,vy=-2,nh=s=>s==="*";function jy(s,l){let o=s.split("/"),d=o.length;return o.some(nh)&&(d+=vy),l&&(d+=by),o.filter(u=>!nh(u)).reduce((u,h)=>u+(hy.test(h)?xy:h===""?gy:yy),d)}function wy(s,l){return s.length===l.length&&s.slice(0,-1).every((d,u)=>d===l[u])?s[s.length-1]-l[l.length-1]:0}function _y(s,l,o){let{routesMeta:d}=s,u={},h="/",f=[];for(let k=0;k<d.length;++k){let v=d[k],x=k===d.length-1,j=h==="/"?l:l.slice(h.length)||"/",_=Ny({path:v.relativePath,caseSensitive:v.caseSensitive,end:x},j),D=v.route;if(!_)return null;Object.assign(u,_.params),f.push({params:u,pathname:ci([h,_.pathname]),pathnameBase:My(ci([h,_.pathnameBase])),route:D}),_.pathnameBase!=="/"&&(h=ci([h,_.pathnameBase]))}return f}function Ny(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=Sy(s.path,s.caseSensitive,s.end),u=l.match(o);if(!u)return null;let h=u[0],f=h.replace(/(.)\/+$/,"$1"),k=u.slice(1);return{params:d.reduce((x,j,_)=>{let{paramName:D,isOptional:G}=j;if(D==="*"){let Y=k[_]||"";f=h.slice(0,h.length-Y.length).replace(/(.)\/+$/,"$1")}const W=k[_];return G&&!W?x[D]=void 0:x[D]=(W||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:f,pattern:s}}function Sy(s,l,o){l===void 0&&(l=!1),o===void 0&&(o=!0),Zo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(f,k,v)=>(d.push({paramName:k,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,l?void 0:"i"),d]}function ky(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Zo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function Gd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let o=l.endsWith("/")?l.length-1:l.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Cy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,zy=s=>Cy.test(s);function Ty(s,l){l===void 0&&(l="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?Ai(s):s,h;if(o)if(zy(o))h=o;else{if(o.includes("//")){let f=o;o=o.replace(/\/\/+/g,"/"),Zo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(f+" -> "+o))}o.startsWith("/")?h=ah(o.substring(1),"/"):h=ah(o,l)}else h=l;return{pathname:h,search:Dy(d),hash:Ay(u)}}function ah(s,l){let o=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function rd(s,l,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ey(s){return s.filter((l,o)=>o===0||l.route.path&&l.route.path.length>0)}function $d(s,l){let o=Ey(s);return l?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Yd(s,l,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=Ai(s):(u=ps({},s),Ut(!u.pathname||!u.pathname.includes("?"),rd("?","pathname","search",u)),Ut(!u.pathname||!u.pathname.includes("#"),rd("#","pathname","hash",u)),Ut(!u.search||!u.search.includes("#"),rd("#","search","hash",u)));let h=s===""||u.pathname==="",f=h?"/":u.pathname,k;if(f==null)k=o;else{let _=l.length-1;if(!d&&f.startsWith("..")){let D=f.split("/");for(;D[0]==="..";)D.shift(),_-=1;u.pathname=D.join("/")}k=_>=0?l[_]:"/"}let v=Ty(u,k),x=f&&f!=="/"&&f.endsWith("/"),j=(h||f===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(x||j)&&(v.pathname+="/"),v}const ci=s=>s.join("/").replace(/\/\/+/g,"/"),My=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Dy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ay=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Oy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const sx=["post","put","patch","delete"];new Set(sx);const Uy=["get",...sx];new Set(Uy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ms(){return ms=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ms.apply(this,arguments)}const Qd=m.createContext(null),Ry=m.createContext(null),ui=m.createContext(null),Ko=m.createContext(null),pi=m.createContext({outlet:null,matches:[],isDataRoute:!1}),ox=m.createContext(null);function Hy(s,l){let{relative:o}=l===void 0?{}:l;xl()||Ut(!1);let{basename:d,navigator:u}=m.useContext(ui),{hash:h,pathname:f,search:k}=cx(s,{relative:o}),v=f;return d!=="/"&&(v=f==="/"?d:ci([d,f])),u.createHref({pathname:v,search:k,hash:h})}function xl(){return m.useContext(Ko)!=null}function sa(){return xl()||Ut(!1),m.useContext(Ko).location}function rx(s){m.useContext(ui).static||m.useLayoutEffect(s)}function Xd(){let{isDataRoute:s}=m.useContext(pi);return s?Jy():Ly()}function Ly(){xl()||Ut(!1);let s=m.useContext(Qd),{basename:l,future:o,navigator:d}=m.useContext(ui),{matches:u}=m.useContext(pi),{pathname:h}=sa(),f=JSON.stringify($d(u,o.v7_relativeSplatPath)),k=m.useRef(!1);return rx(()=>{k.current=!0}),m.useCallback(function(x,j){if(j===void 0&&(j={}),!k.current)return;if(typeof x=="number"){d.go(x);return}let _=Yd(x,JSON.parse(f),h,j.relative==="path");s==null&&l!=="/"&&(_.pathname=_.pathname==="/"?l:ci([l,_.pathname])),(j.replace?d.replace:d.push)(_,j.state,j)},[l,d,f,h,s])}function cx(s,l){let{relative:o}=l===void 0?{}:l,{future:d}=m.useContext(ui),{matches:u}=m.useContext(pi),{pathname:h}=sa(),f=JSON.stringify($d(u,d.v7_relativeSplatPath));return m.useMemo(()=>Yd(s,JSON.parse(f),h,o==="path"),[s,f,h,o])}function qy(s,l){return By(s,l)}function By(s,l,o,d){xl()||Ut(!1);let{navigator:u}=m.useContext(ui),{matches:h}=m.useContext(pi),f=h[h.length-1],k=f?f.params:{};f&&f.pathname;let v=f?f.pathnameBase:"/";f&&f.route;let x=sa(),j;if(l){var _;let M=typeof l=="string"?Ai(l):l;v==="/"||(_=M.pathname)!=null&&_.startsWith(v)||Ut(!1),j=M}else j=x;let D=j.pathname||"/",G=D;if(v!=="/"){let M=v.replace(/^\//,"").split("/");G="/"+D.replace(/^\//,"").split("/").slice(M.length).join("/")}let W=py(s,{pathname:G}),Y=Xy(W&&W.map(M=>Object.assign({},M,{params:Object.assign({},k,M.params),pathname:ci([v,u.encodeLocation?u.encodeLocation(M.pathname).pathname:M.pathname]),pathnameBase:M.pathnameBase==="/"?v:ci([v,u.encodeLocation?u.encodeLocation(M.pathnameBase).pathname:M.pathnameBase])})),h,o,d);return l&&Y?m.createElement(Ko.Provider,{value:{location:ms({pathname:"/",search:"",hash:"",state:null,key:"default"},j),navigationType:ri.Pop}},Y):Y}function Gy(){let s=Vy(),l=Oy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},l),o?m.createElement("pre",{style:u},o):null,null)}const $y=m.createElement(Gy,null);class Yy extends m.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,o){return o.location!==l.location||o.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:o.error,location:o.location,revalidation:l.revalidation||o.revalidation}}componentDidCatch(l,o){console.error("React Router caught the following error during render",l,o)}render(){return this.state.error!==void 0?m.createElement(pi.Provider,{value:this.props.routeContext},m.createElement(ox.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Qy(s){let{routeContext:l,match:o,children:d}=s,u=m.useContext(Qd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),m.createElement(pi.Provider,{value:l},d)}function Xy(s,l,o,d){var u;if(l===void 0&&(l=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var h;if(!o)return null;if(o.errors)s=o.matches;else if((h=d)!=null&&h.v7_partialHydration&&l.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let f=s,k=(u=o)==null?void 0:u.errors;if(k!=null){let j=f.findIndex(_=>_.route.id&&(k==null?void 0:k[_.route.id])!==void 0);j>=0||Ut(!1),f=f.slice(0,Math.min(f.length,j+1))}let v=!1,x=-1;if(o&&d&&d.v7_partialHydration)for(let j=0;j<f.length;j++){let _=f[j];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(x=j),_.route.id){let{loaderData:D,errors:G}=o,W=_.route.loader&&D[_.route.id]===void 0&&(!G||G[_.route.id]===void 0);if(_.route.lazy||W){v=!0,x>=0?f=f.slice(0,x+1):f=[f[0]];break}}}return f.reduceRight((j,_,D)=>{let G,W=!1,Y=null,M=null;o&&(G=k&&_.route.id?k[_.route.id]:void 0,Y=_.route.errorElement||$y,v&&(x<0&&D===0?(Py("route-fallback"),W=!0,M=null):x===D&&(W=!0,M=_.route.hydrateFallbackElement||null)));let Q=l.concat(f.slice(0,D+1)),U=()=>{let H;return G?H=Y:W?H=M:_.route.Component?H=m.createElement(_.route.Component,null):_.route.element?H=_.route.element:H=j,m.createElement(Qy,{match:_,routeContext:{outlet:j,matches:Q,isDataRoute:o!=null},children:H})};return o&&(_.route.ErrorBoundary||_.route.errorElement||D===0)?m.createElement(Yy,{location:o.location,revalidation:o.revalidation,component:Y,error:G,children:U(),routeContext:{outlet:null,matches:Q,isDataRoute:!0}}):U()},null)}var dx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(dx||{}),ux=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ux||{});function Zy(s){let l=m.useContext(Qd);return l||Ut(!1),l}function Ky(s){let l=m.useContext(Ry);return l||Ut(!1),l}function Fy(s){let l=m.useContext(pi);return l||Ut(!1),l}function px(s){let l=Fy(),o=l.matches[l.matches.length-1];return o.route.id||Ut(!1),o.route.id}function Vy(){var s;let l=m.useContext(ox),o=Ky(),d=px();return l!==void 0?l:(s=o.errors)==null?void 0:s[d]}function Jy(){let{router:s}=Zy(dx.UseNavigateStable),l=px(ux.UseNavigateStable),o=m.useRef(!1);return rx(()=>{o.current=!0}),m.useCallback(function(u,h){h===void 0&&(h={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,ms({fromRouteId:l},h)))},[s,l])}const ih={};function Py(s,l,o){ih[s]||(ih[s]=!0)}function Wy(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function lh(s){let{to:l,replace:o,state:d,relative:u}=s;xl()||Ut(!1);let{future:h,static:f}=m.useContext(ui),{matches:k}=m.useContext(pi),{pathname:v}=sa(),x=Xd(),j=Yd(l,$d(k,h.v7_relativeSplatPath),v,u==="path"),_=JSON.stringify(j);return m.useEffect(()=>x(JSON.parse(_),{replace:o,state:d,relative:u}),[x,_,u,o,d]),null}function kt(s){Ut(!1)}function Iy(s){let{basename:l="/",children:o=null,location:d,navigationType:u=ri.Pop,navigator:h,static:f=!1,future:k}=s;xl()&&Ut(!1);let v=l.replace(/^\/*/,"/"),x=m.useMemo(()=>({basename:v,navigator:h,static:f,future:ms({v7_relativeSplatPath:!1},k)}),[v,k,h,f]);typeof d=="string"&&(d=Ai(d));let{pathname:j="/",search:_="",hash:D="",state:G=null,key:W="default"}=d,Y=m.useMemo(()=>{let M=Gd(j,v);return M==null?null:{location:{pathname:M,search:_,hash:D,state:G,key:W},navigationType:u}},[v,j,_,D,G,W,u]);return Y==null?null:m.createElement(ui.Provider,{value:x},m.createElement(Ko.Provider,{children:o,value:Y}))}function ev(s){let{children:l,location:o}=s;return qy(kd(l),o)}new Promise(()=>{});function kd(s,l){l===void 0&&(l=[]);let o=[];return m.Children.forEach(s,(d,u)=>{if(!m.isValidElement(d))return;let h=[...l,u];if(d.type===m.Fragment){o.push.apply(o,kd(d.props.children,h));return}d.type!==kt&&Ut(!1),!d.props.index||!d.props.children||Ut(!1);let f={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(f.children=kd(d.props.children,h)),o.push(f)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var o=arguments[l];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Cd.apply(this,arguments)}function tv(s,l){if(s==null)return{};var o={},d=Object.keys(s),u,h;for(h=0;h<d.length;h++)u=d[h],!(l.indexOf(u)>=0)&&(o[u]=s[u]);return o}function nv(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function av(s,l){return s.button===0&&(!l||l==="_self")&&!nv(s)}const iv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],lv="6";try{window.__reactRouterVersion=lv}catch{}const sv="startTransition",sh=ny[sv];function ov(s){let{basename:l,children:o,future:d,window:u}=s,h=m.useRef();h.current==null&&(h.current=cy({window:u,v5Compat:!0}));let f=h.current,[k,v]=m.useState({action:f.action,location:f.location}),{v7_startTransition:x}=d||{},j=m.useCallback(_=>{x&&sh?sh(()=>v(_)):v(_)},[v,x]);return m.useLayoutEffect(()=>f.listen(j),[f,j]),m.useEffect(()=>Wy(d),[d]),m.createElement(Iy,{basename:l,children:o,location:k.location,navigationType:k.action,navigator:f,future:d})}const rv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",cv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,dv=m.forwardRef(function(l,o){let{onClick:d,relative:u,reloadDocument:h,replace:f,state:k,target:v,to:x,preventScrollReset:j,viewTransition:_}=l,D=tv(l,iv),{basename:G}=m.useContext(ui),W,Y=!1;if(typeof x=="string"&&cv.test(x)&&(W=x,rv))try{let H=new URL(window.location.href),ae=x.startsWith("//")?new URL(H.protocol+x):new URL(x),P=Gd(ae.pathname,G);ae.origin===H.origin&&P!=null?x=P+ae.search+ae.hash:Y=!0}catch{}let M=Hy(x,{relative:u}),Q=uv(x,{replace:f,state:k,target:v,preventScrollReset:j,relative:u,viewTransition:_});function U(H){d&&d(H),H.defaultPrevented||Q(H)}return m.createElement("a",Cd({},D,{href:W||M,onClick:Y||h?d:U,ref:o,target:v}))});var oh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(oh||(oh={}));var rh;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(rh||(rh={}));function uv(s,l){let{target:o,replace:d,state:u,preventScrollReset:h,relative:f,viewTransition:k}=l===void 0?{}:l,v=Xd(),x=sa(),j=cx(s,{relative:f});return m.useCallback(_=>{if(av(_,o)){_.preventDefault();let D=d!==void 0?d:$o(x)===$o(j);v(s,{replace:D,state:u,preventScrollReset:h,relative:f,viewTransition:k})}},[x,v,j,d,u,o,s,h,f,k])}function Rt(){const s=Xd();return m.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function pv(){return sa().pathname}function mv({href:s,...l}){return t.jsx(dv,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),mx=(...s)=>s.filter((l,o,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var hv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=m.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:h,iconNode:f,...k},v)=>m.createElement("svg",{ref:v,...hv,width:l,height:l,stroke:s,strokeWidth:d?Number(o)*24/Number(l):o,className:mx("lucide",u),...k},[...f.map(([x,j])=>m.createElement(x,j)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=(s,l)=>{const o=m.forwardRef(({className:d,...u},h)=>m.createElement(xv,{ref:h,iconNode:l,className:mx(`lucide-${fv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ve("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ve("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ve("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=ve("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=ve("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ve("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ve("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=ve("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
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
 */const jv=ve("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fx=ve("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=ve("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=ve("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ve("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=ve("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ve("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ve("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ve("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ve("EyeOff",[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ve("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ve("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=ve("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ve("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ve("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=ve("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=ve("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=ve("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=ve("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ve("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ve("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=ve("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=ve("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ve("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ve("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ve("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ve("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ve("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ve("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hx=ve("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ve("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ve("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ve("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ve("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
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
 */const Bv=ve("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=ve("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=ve("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ve("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ve("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=ve("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=ve("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xx=ve("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ve("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ve("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ve("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=ve("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=ve("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bx=ve("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=ve("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=ve("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=ve("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=ve("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=ve("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=ve("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=ve("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=ve("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gx=ve("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=ve("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=ve("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wv=ve("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=ve("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=ve("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=ve("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ve("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=ve("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),t0="/api/v3";var tx;const ge=typeof window<"u"&&((tx=window.settings)==null?void 0:tx.secure_path)||"ZicFree123",Go="authorization";function n0(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(l)===0)try{const h=u.substring(l.length,u.length),f=decodeURIComponent(h),k=JSON.parse(f);return k&&typeof k=="object"&&"value"in k?k.value:f}catch{try{return decodeURIComponent(u.substring(l.length,u.length))}catch{return u.substring(l.length,u.length)}}}return null}function a0(s,l,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:l}),h=window.location.protocol==="https:",f=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",k=new Date;k.setTime(k.getTime()+o*24*60*60*1e3);const v=`expires=${k.toUTCString()}`,x=f?"":`domain=${window.location.hostname};`;let j=`${s}=${encodeURIComponent(u)}; ${v}; ${x} path=/`;h&&(j+="; secure"),j+="; SameSite=Lax",document.cookie=j;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function i0(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,o=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(h=>{const f=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${f} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function yx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Go);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Go,s)}catch{}if(!s&&(s=n0("auth_data"),s))try{window.localStorage.setItem(Go,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function l0(s,l){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${t0}${o}`,window.location.origin);return Object.entries(l??{}).forEach(([u,h])=>{h!==void 0&&d.searchParams.set(u,String(h))}),d.toString()}function Ht(){return!!yx()}function s0(s){typeof window>"u"||(window.localStorage.setItem(Go,s),window.localStorage.setItem("auth_data",s),a0("auth_data",s,36500))}function vx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(h=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,i0(u)})}async function xe(s,l={}){const o={},d=l.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),l.auth!==!1){const v=yx();v&&(o.authorization=v)}const u=await fetch(l0(s,l.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),f=(u.headers.get("content-type")||"").includes("application/json"),k=f?await u.json():await u.text();if(!u.ok){const v=typeof k=="object"&&k&&"message"in k?String(k.message):`Request failed with status ${u.status}`,x=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(v);throw(u.status===401||u.status===403&&!x)&&l.auth!==!1&&(vx(),window.location.hash="/login"),new Error(v)}if(!f&&typeof k=="string"&&(k.trim().startsWith("<!DOCTYPE html")||k.trim().startsWith("<html")||k.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return k}async function o0(s,l){return xe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function r0(){const s=`/${ge}/stat`,[l,o,d,u,h,f]=await Promise.all([xe(`${s}/getOverride`),xe(`${s}/getOrder`),xe(`${s}/getServerTodayRank`),xe(`${s}/getServerLastRank`),xe(`${s}/getUserTodayRank`),xe(`${s}/getUserLastRank`)]);return{override:l.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:h.data,userYesterday:f.data}}async function jx(){return(await xe(`/${ge}/config/fetch`)).data}async function wx(s){return xe(`/${ge}/config/save`,{method:"POST",body:s})}async function c0(){return(await xe(`/${ge}/config/getEmailTemplate`)).data}async function d0(){return(await xe(`/${ge}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function u0(){return xe(`/${ge}/config/testSendMail`,{method:"POST",body:{}})}async function p0(s){return xe(`/${ge}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function m0(){return(await xe(`/${ge}/payment/fetch`)).data}async function f0(){return(await xe(`/${ge}/payment/getPaymentMethods`)).data}async function bh(s,l){return(await xe(`/${ge}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function h0(s){return xe(`/${ge}/payment/save`,{method:"POST",body:s})}async function x0(s){return xe(`/${ge}/payment/show`,{method:"POST",body:{id:s}})}async function b0(s){return xe(`/${ge}/payment/drop`,{method:"POST",body:{id:s}})}async function g0(s){return xe(`/${ge}/payment/sort`,{method:"POST",body:{ids:s}})}async function y0(){return(await xe(`/${ge}/theme/getThemes`)).data}async function v0(s){return(await xe(`/${ge}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function j0(s,l){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return xe(`/${ge}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function xs(){return(await xe(`/${ge}/server/group/fetch`)).data}async function _x(s){return xe(`/${ge}/server/group/save`,{method:"POST",body:s})}async function w0(s){return xe(`/${ge}/server/group/drop`,{method:"POST",body:{id:s}})}const Nx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Sx(){return(await xe(`/${ge}/server/route/fetch`)).data}async function _0(s){return xe(`/${ge}/server/route/save`,{method:"POST",body:s})}async function N0(s){return xe(`/${ge}/server/route/drop`,{method:"POST",body:{id:s}})}async function mi(){return(await xe(`/${ge}/plan/fetch`)).data}async function S0(s){return xe(`/${ge}/plan/save`,{method:"POST",body:s})}async function k0(s){return xe(`/${ge}/plan/drop`,{method:"POST",body:{id:s}})}async function cd(s,l){return xe(`/${ge}/plan/update`,{method:"POST",body:{id:s,...l}})}async function gh(s){return xe(`/${ge}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function C0(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{l.set(`filter[${u}][key]`,d.key),l.set(`filter[${u}][condition]`,d.condition),l.set(`filter[${u}][value]`,d.value)}),await xe(`/${ge}/order/fetch?${l.toString()}`)}async function z0(s){return xe(`/${ge}/order/paid`,{method:"POST",body:{trade_no:s}})}async function T0(s){return xe(`/${ge}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function Fd(s){return xe(`/${ge}/order/assign`,{method:"POST",body:s})}async function E0(s,l){return xe(`/${ge}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function M0(s){return xe(`/${ge}/order/detail`,{method:"POST",body:{id:s}})}async function kx(s=1,l=15){return xe(`/${ge}/coupon/fetch?current=${s}&pageSize=${l}`)}async function D0(s){return xe(`/${ge}/coupon/generate`,{method:"POST",body:s})}async function A0(s){return xe(`/${ge}/coupon/drop`,{method:"POST",body:{id:s}})}async function O0(s){return xe(`/${ge}/coupon/show`,{method:"POST",body:{id:s}})}async function U0(s=1,l=15){return xe(`/${ge}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function R0(s){return xe(`/${ge}/giftcard/generate`,{method:"POST",body:s})}async function H0(s){return xe(`/${ge}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Ad(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o&&o.forEach((u,h)=>{d.set(`filter[${h}][key]`,u.key),d.set(`filter[${h}][condition]`,u.condition),d.set(`filter[${h}][value]`,u.value)}),xe(`/${ge}/user/fetch?${d.toString()}`)}async function L0(s){return xe(`/${ge}/user/update`,{method:"POST",body:s})}async function Cx(s){return xe(`/${ge}/user/getUserInfoById`,{params:{id:s}})}async function q0(s){return xe(`/${ge}/user/delUser`,{method:"POST",body:{id:s}})}async function B0(s){return xe(`/${ge}/user/generate`,{method:"POST",body:s})}async function G0(s){return xe(`/${ge}/user/resetSecret`,{method:"POST",body:{id:s}})}async function $0(s=1,l=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(l)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((h,f)=>{u.set(`filter[${f}][key]`,h.key),u.set(`filter[${f}][condition]`,h.condition),u.set(`filter[${f}][value]`,h.value)}),xe(`/${ge}/subscription/fetch?${u.toString()}`)}async function Y0(s){return xe(`/${ge}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function Q0(s){return xe(`/${ge}/subscription/update`,{method:"POST",body:s})}async function X0(s){return xe(`/${ge}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function zx(s=1,l=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),o==null||o.forEach((u,h)=>{d.set(`filter[${h}][key]`,u.key),d.set(`filter[${h}][condition]`,u.condition),d.set(`filter[${h}][value]`,u.value)}),xe(`/${ge}/device/fetch?${d.toString()}`)}async function Tx(s){return xe(`/${ge}/device/drop`,{method:"POST",body:{id:s}})}async function Ex(s){return xe(`/${ge}/device/ban`,{method:"POST",body:{id:s}})}async function Z0(s){return xe(`/${ge}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function K0(s,l=1,o=10){return xe(`/${ge}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:o}})}async function F0(){return(await xe(`/${ge}/notice/fetch`)).data}async function V0(s){return xe(`/${ge}/notice/save`,{method:"POST",body:s})}async function J0(s){return xe(`/${ge}/notice/drop`,{method:"POST",body:{id:s}})}async function P0(s){return xe(`/${ge}/notice/show`,{method:"POST",body:{id:s}})}async function W0(){return(await xe(`/${ge}/ticket/fetch`)).data}async function yh(s){return(await xe(`/${ge}/ticket/fetch`,{params:{id:s}})).data}async function I0(s,l){return xe(`/${ge}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function e1(s){return xe(`/${ge}/ticket/close`,{method:"POST",body:{id:s}})}async function t1(){return(await xe(`/${ge}/knowledge/fetch`)).data}async function n1(s){return(await xe(`/${ge}/knowledge/fetch`,{params:{id:s}})).data}async function a1(s){return xe(`/${ge}/knowledge/save`,{method:"POST",body:s})}async function i1(s){return xe(`/${ge}/knowledge/drop`,{method:"POST",body:{id:s}})}async function l1(s){return xe(`/${ge}/knowledge/show`,{method:"POST",body:{id:s}})}async function s1(){return(await xe(`/${ge}/webcon/fetch`)).data}async function o1(s){return xe(`/${ge}/webcon/save`,{method:"POST",body:s})}async function r1(s){return xe(`/${ge}/webcon/drop`,{method:"POST",body:{id:s}})}async function c1(s){return xe(`/${ge}/webcon/show`,{method:"POST",body:{id:s}})}async function d1(){return xe(`/${ge}/system/getSystemStatus`)}async function u1(){return(await xe(`/${ge}/system/getCoreLicenseStatus`)).data}async function p1(){return(await xe(`/${ge}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function m1(){return xe(`/${ge}/system/getQueueStats`)}async function f1(){return xe(`/${ge}/system/getQueueWorkload`)}async function h1(){return xe(`/${ge}/system/getSystemLog`)}async function vh(){return xe(`/${ge}/server/manage/getNodes`)}async function x1(s,l){return xe(`/${ge}/server/${s}/save`,{method:"POST",body:l})}async function b1(s,l){return xe(`/${ge}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function g1(s,l,o){return xe(`/${ge}/server/${s}/update`,{method:"POST",body:{id:l,show:o}})}async function y1(s,l){return xe(`/${ge}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function v1(s){return xe(`/${ge}/server/manage/sort`,{method:"POST",body:s})}const Vd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Mx="admin-locale",Od="vi-VN",j1="/assets/adminzic",Dx=m.createContext(null);function w1(){if(typeof window>"u")return Od;const s=localStorage.getItem(Mx);return s&&Vd.some(l=>l.code===s)?s:Od}function _1(s,l){return l?Object.entries(l).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function N1(s){return new Promise((l,o)=>{var f;if(typeof window>"u"){l({});return}const d=(f=window.AdminNextI18n)==null?void 0:f[s];if(d){l(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var k;l(((k=window.AdminNextI18n)==null?void 0:k[s])??{})}),u.addEventListener("error",o);return}const h=document.createElement("script");h.src=`${j1}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var k;return l(((k=window.AdminNextI18n)==null?void 0:k[s])??{})},h.onerror=o,document.head.appendChild(h)})}function S1({children:s}){const[l,o]=m.useState(Od),[d,u]=m.useState({}),[h,f]=m.useState(!0);m.useEffect(()=>{o(w1())},[]);const k=m.useCallback(j=>{o(j),typeof window<"u"&&localStorage.setItem(Mx,j)},[]);m.useEffect(()=>{let j=!0;return f(!0),N1(l).then(_=>{j&&u(_)}).finally(()=>{j&&f(!1)}),()=>{j=!1}},[l]);const v=m.useCallback((j,_)=>_1(d[j]??j,_),[d]),x=m.useMemo(()=>({locale:l,loading:h,setLocale:k,t:v}),[l,h,k,v]);return t.jsx(Dx.Provider,{value:x,children:s})}function Ye(){const s=m.useContext(Dx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function k1(){const s=Rt(),{t:l,locale:o,setLocale:d}=Ye(),[u,h]=m.useState(""),[f,k]=m.useState(""),[v,x]=m.useState(""),[j,_]=m.useState(!1),[D,G]=m.useState(!1),W=m.useRef(null);m.useEffect(()=>{function M(Q){W.current&&!W.current.contains(Q.target)&&G(!1)}return document.addEventListener("mousedown",M),()=>document.removeEventListener("mousedown",M)},[]),m.useEffect(()=>{Ht()&&s.replace("/dashboard")},[s]);async function Y(M){var Q,U,H,ae;M.preventDefault(),x(""),_(!0);try{const P=await o0(u,f),de=((Q=P.data)==null?void 0:Q.auth_data)??((U=P.data)==null?void 0:U.token),A=((H=P.data)==null?void 0:H.is_admin)===1||((ae=P.data)==null?void 0:ae.is_admin)===!0;if(!de||!A)throw new Error(l("login.adminRequired"));s0(de),s.replace("/dashboard")}catch(P){x(P instanceof Error?P.message:l("login.failed"))}finally{_(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>G(M=>!M),children:t.jsx(bs,{size:17})}),D?t.jsx("div",{className:"locale-menu",children:Vd.map(M=>t.jsxs("button",{className:`locale-option ${o===M.code?"active":""}`,type:"button",onClick:()=>{d(M.code),G(!1)},children:[t.jsx("span",{className:"locale-flag",children:M.flag}),t.jsx("span",{children:M.label})]},M.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Qv,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(hx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:M=>h(M.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"email",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Uv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:M=>k(M.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:f})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:j,type:"submit",children:l(j?"login.signingIn":"login.submit")})]})]})]})}function En(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function ia(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function C1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const z1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Tv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Kv},{href:"/config/payment",label:"nav.paymentConfig",icon:Nv},{href:"/config/theme",label:"nav.themeConfig",icon:Pv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Kd},{href:"/server/group",label:"nav.groupManagement",icon:Iv},{href:"/server/route",label:"nav.routeManagement",icon:Zv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:fh},{href:"/order",label:"nav.orders",icon:Ov},{href:"/coupon",label:"nav.coupons",icon:Ev},{href:"/giftcard",label:"nav.giftcards",icon:Vv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:gx},{href:"/subscription",label:"nav.subscriptions",icon:fh},{href:"/device",label:"nav.devices",icon:Fv},{href:"/webcon",label:"nav.webcon",icon:bs},{href:"/notice",label:"nav.notices",icon:rs},{href:"/ticket",label:"nav.tickets",icon:Av},{href:"/knowledge",label:"nav.knowledge",icon:yv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:vv}]}];function T1(){const[s,l]=m.useState("light");m.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";l(h),document.documentElement.setAttribute("data-theme",h)},[]);const o=m.useCallback(u=>{l(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=m.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Ax(s){return s?new Date(s*1e3):null}function E1(s,l){const o=Ax(l);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function M1(s){const l=Ax(s);return l?Math.ceil((l.getTime()-Date.now())/864e5):null}function Ft({children:s,title:l,subtitle:o}){const[d,u]=m.useState(!1),h=Rt(),f=pv(),{t:k,locale:v,setLocale:x}=Ye(),{theme:j,toggle:_}=T1(),[D,G]=m.useState(!1),W=m.useRef(null),[Y,M]=m.useState(null),[Q,U]=m.useState(!1),H=m.useCallback(async(w=!1)=>{if(Ht()){U(w);try{M(w?await p1():await u1())}catch(R){M({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:k("license.unavailable"),error:R instanceof Error?R.message:k("license.unavailable")})}finally{U(!1)}}},[k]);m.useEffect(()=>{function w(R){W.current&&!W.current.contains(R.target)&&G(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),m.useEffect(()=>{H(!1);const w=window.setInterval(()=>{H(!1)},6e4);return()=>window.clearInterval(w)},[H]);function ae(){vx(),h.replace("/login")}const P=(Y==null?void 0:Y.license_expires_at)??(Y==null?void 0:Y.expires_at),de=E1(v,P),A=typeof(Y==null?void 0:Y.days_until_expiry)=="number"?Y.days_until_expiry:M1(P),B=typeof A=="number"?A<=0?k("license.expiresToday"):k("license.daysLeft",{days:A}):null,ne=!!Y&&Y.available&&!Y.requires_renewal,be=ne&&!!(Y!=null&&Y.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:k("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:z1.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:k(w.label)}),w.items.map(R=>{const le=R.icon,$=f===R.href;return t.jsxs(mv,{className:`nav-item ${$?"active":""}`,href:R.href,onClick:()=>u(!1),children:[t.jsx(le,{size:17}),t.jsx("span",{children:k(R.label)})]},R.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":k(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(w=>!w),children:d?t.jsx(lt,{size:19}):t.jsx(Hv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${be?"warning":""}`,type:"button",disabled:Q,title:k("license.refresh"),onClick:()=>void H(!0),children:[t.jsx(uh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:k("license.validUntil")}),t.jsx("strong",{children:de??k("license.unknownExpiry")})]}),B?t.jsx("small",{children:B}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":k("common.language"),onClick:()=>G(w=>!w),children:t.jsx(bs,{size:17})}),D?t.jsx("div",{className:"locale-menu",children:Vd.map(w=>t.jsxs("button",{className:`locale-option ${v===w.code?"active":""}`,type:"button",onClick:()=>{x(w.code),G(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":j==="dark"?"Switch to light mode":"Switch to dark mode",onClick:_,children:j==="dark"?t.jsx(Jv,{size:17}):t.jsx(Lv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ae,children:[t.jsx(Rv,{size:16}),t.jsx("span",{children:k("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[Y!=null&&Y.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Md,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.renewTitle")}),t.jsx("p",{children:k("license.renewBody")}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Y.status,Y.error?` - ${Y.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void H(!0),children:[t.jsx(Et,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,be?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(uh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:k("license.expiryWarningTitle")}),t.jsx("p",{children:k("license.expiryWarningBody",{date:de??k("license.unknownExpiry"),days:A??""})}),t.jsxs("small",{children:[k("license.currentStatus"),": ",Y.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void H(!0),children:[t.jsx(Et,{size:16}),k(Q?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const jh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Ox(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function cs(s){return Number(s??0)}function wh(s){return cs(s)/100}function _h(s){return`${ia(Math.round(s))} VND`}function Ux(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function D1(s){const l=new Date;return l.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(l);return u.setDate(l.getDate()-(s-d-1)),Ux(u)})}function Nh(s,l){const o=s.get(l);if(o)return o;const d=Ox(l);return s.set(l,d),d}function A1(s){const l=s.toLowerCase();return l==="register_count"||l.includes("đăng")||l.includes("register")?"registrations":l==="order_count"?"orderCount":l==="paid_count"||l.includes("giao dịch thu")?"paidCount":l==="paid_total"||l.includes("tiền thu")?"paidAmount":l==="commission_count"||l.includes("giao dịch hoa hồng")?"commissionCount":l==="commission_total"||l.includes("tiền hoa hồng")?"commissionAmount":null}function Do({label:s,value:l,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(gv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function wt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(Et,{size:18}),t.jsx("span",{children:s})]})}function O1(s,l){const o=new Map,d=new Map;if(s.forEach(u=>{const h=Nh(o,u.date),f=A1(u.type);if(f){h[f]=Number(u.value||0);return}const k=d.get(u.date)??0,v=jh[k%jh.length];h[v]=Number(u.value||0),d.set(u.date,k+1)}),l){const u=Nh(o,Ux(new Date));u.registrations=cs(l.day_register_total),l.day_order_total!==void 0&&(u.orderCount=cs(l.day_order_total)),l.day_paid_order_total!==void 0&&(u.paidCount=cs(l.day_paid_order_total)),u.paidAmount=wh(l.day_paid_income??l.day_income),l.day_commission_payout!==void 0&&(u.commissionAmount=wh(l.day_commission_payout)),l.day_commission_count!==void 0&&(u.commissionCount=cs(l.day_commission_count))}return o.size===0?[]:D1(31).map(u=>o.get(u)??Ox(u))}function U1({records:s,override:l}){const{t:o}=Ye(),[d,u]=m.useState("paidAmount"),[h,f]=m.useState(null),[k,v]=m.useState(0),[x,j]=m.useState(0),_=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:_h},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:ia},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:ia},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:_h},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:ia},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:ia}],D=_.find(B=>B.key===d)??_[0],G=O1(s,l),W=B=>Number(B[D.key]||0),Y=Math.max(...G.map(W),1),M=720,Q=220,U=28,H=G.length>1?(M-U*2)/(G.length-1):0,ae=B=>Q-U-B/Y*(Q-U*2),P=G.map((B,ne)=>`${U+ne*H},${ae(W(B))}`).join(" "),de=Math.max(Math.ceil(G.length/6),1),A=`dashboardTrendFill-${D.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:G.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:_.map(B=>t.jsx("button",{type:"button",className:d===B.key?"active":"",onClick:()=>{u(B.key),f(null)},children:B.label},B.key))}),G.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${M} ${Q}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:A,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:D.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:D.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(B=>t.jsx("line",{className:"chart-grid",x1:U,x2:M-U,y1:U+B*(Q-U*2),y2:U+B*(Q-U*2)},B)),G.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${A})`},points:`${U},${Q-U} ${P} ${M-U},${Q-U}`}),t.jsx("polyline",{className:"chart-line",points:P,style:{stroke:D.color}}),G.map((B,ne)=>{const be=U+ne*H,w=ae(W(B));return t.jsxs("g",{children:[t.jsx("circle",{cx:be,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{f(B),v(be),j(w)},onMouseLeave:()=>{f(null)}}),t.jsx("circle",{cx:be,cy:w,r:(h==null?void 0:h.date)===B.date?6:4,fill:D.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===B.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},B.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${k/M*100}%`,top:`${x/Q*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[D.label,": ",D.format(W(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:G.filter((B,ne)=>ne===0||ne===G.length-1||ne%de===0).map(B=>t.jsx("span",{children:B.date},B.date))}),G.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:D.summaryLabel}),t.jsx("strong",{children:D.format(Y)})]}):null]})}function Ao({title:s,subtitle:l,records:o,labelKey:d}){const{t:u}=Ye(),h=Math.max(...o.map(f=>Number(f.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((f,k)=>{const v=d==="server_name"?f.server_name||u("dashboard.unnamedNode"):f.email||u("dashboard.unknownUser"),x=Number(f.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:k+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[C1(f.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(x,3)}%`}})})]},`${v}-${k}`)})})]})}function dd({label:s,current:l,previous:o}){const{t:d}=Ye();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?ia(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?ia(o):o]})]})}function R1(){var x,j,_,D,G,W,Y,M,Q,U,H,ae;const s=Rt(),{t:l}=Ye(),[o,d]=m.useState(null),[u,h]=m.useState(""),[f,k]=m.useState(!0),v=m.useCallback(async()=>{k(!0),h("");try{d(await r0())}catch(P){h(P instanceof Error?P.message:l("dashboard.loadFailed"))}finally{k(!1)}},[l]);return m.useEffect(()=>{if(!Ht()){s.replace("/login");return}v()},[v,s]),t.jsxs(Ft,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(Et,{size:16}),l("common.retry")]})]}):null,f&&!o?t.jsx(wt,{label:l("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((x=o.override)==null?void 0:x.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(j=o.override)==null?void 0:j.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Do,{label:l("dashboard.onlineUsers"),value:ia(((_=o.override)==null?void 0:_.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Do,{label:l("dashboard.todayIncome"),value:`${En(((D=o.override)==null?void 0:D.day_paid_income)??((G=o.override)==null?void 0:G.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Do,{label:l("dashboard.todayRegistrations"),value:ia(((W=o.override)==null?void 0:W.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Do,{label:l("dashboard.pendingCommission"),value:ia(((Y=o.override)==null?void 0:Y.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(dd,{label:l("dashboard.monthIncome"),current:`${En(((M=o.override)==null?void 0:M.month_income)??0)} VND`,previous:`${En(((Q=o.override)==null?void 0:Q.last_month_income)??0)} VND`}),t.jsx(dd,{label:l("dashboard.monthCommission"),current:`${En(((U=o.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${En(((H=o.override)==null?void 0:H.commission_last_month_payout)??0)} VND`}),t.jsx(dd,{label:l("dashboard.monthRegistrations"),current:((ae=o.override)==null?void 0:ae.month_register_total)??0,previous:"-"})]}),t.jsx(U1,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Ao,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Ao,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Ao,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Ao,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const H1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Sh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function L1(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function ud(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function q1(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function B1(s){return[{label:s("config.happPing.proxyHead"),value:"proxy-head"},{label:s("config.happPing.proxy"),value:"proxy"},{label:s("config.happPing.tcp"),value:"tcp"},{label:s("config.happPing.icmp"),value:"icmp"}]}function G1(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function It(s){return s===!0||s===1||s==="1"}function $1(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function pd(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function Y1(s){return s.split(/\r\n|\r|\n/).map(l=>l.trim()).filter(Boolean).join(`
`)}function Q1({field:s,value:l,onChange:o}){const{t:d}=Ye(),u=s.toInput?s.toInput(l):$1(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${It(l)?"on":""}`,type:"button",onClick:()=>o(It(l)?0:1),"aria-pressed":It(l),children:[t.jsx("span",{}),It(l)?Sh(d)[0].label:Sh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:h=>o(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function X1({plans:s,emailTemplates:l,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>It(u.email_whitelist_enable),fromInput:pd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>It(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>It(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>It(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"happ_profile_title",label:o("config.subscribe.happProfileTitle"),description:o("config.subscribe.happProfileTitleHelp"),type:"text"},{key:"happ_hide_settings_enable",label:o("config.subscribe.happHideSettings"),description:o("config.subscribe.happHideSettingsHelp"),type:"switch"},{key:"happ_announce_enable",label:o("config.subscribe.happAnnounce"),description:o("config.subscribe.happAnnounceHelp"),type:"switch"},{key:"happ_provider_id",label:o("config.subscribe.happProviderId"),description:o("config.subscribe.happProviderIdHelp"),type:"text"},{key:"happ_color_profile",label:o("config.subscribe.happColorProfile"),description:o("config.subscribe.happColorProfileHelp"),type:"textarea",placeholder:'{"backgroundColors":["#000000FF"]}'},{key:"happ_ping_type",label:o("config.subscribe.happPingType"),description:o("config.subscribe.happPingTypeHelp"),type:"select",options:B1(o)},{key:"happ_check_url",label:o("config.subscribe.happCheckUrl"),description:o("config.subscribe.happCheckUrlHelp"),type:"text",placeholder:"https://cp.cloudflare.com/generate_204",visible:u=>String(u.happ_ping_type||"proxy-head").startsWith("proxy")},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:L1(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:ud(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:ud(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:ud(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:q1(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2},{key:"subscribe_url_ua_enable",label:o("config.subscribe.uaAllow"),description:o("config.subscribe.uaAllowHelp"),type:"switch"},{key:"subscribe_url_allowed_ua",label:o("config.subscribe.uaAllowList"),description:o("config.subscribe.uaAllowListHelp"),type:"textarea",placeholder:`MosVPN
MosVPN Android
MosVPN iOS`,visible:u=>It(u.subscribe_url_ua_enable),fromInput:Y1}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:pd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:G1(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:pd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>It(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>It(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>It(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>It(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:l.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function Z1(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState("site"),[u,h]=m.useState(null),[f,k]=m.useState([]),[v,x]=m.useState([]),[j,_]=m.useState(!0),[D,G]=m.useState(null),[W,Y]=m.useState(""),M=m.useCallback(async()=>{_(!0),Y("");try{const[B,ne,be]=await Promise.all([jx(),d0(),c0()]);h(B),k(ne),x(be)}catch(B){Y(B instanceof Error?B.message:l("config.loadFailed"))}finally{_(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}M()},[M,s]),m.useEffect(()=>{const B=document.querySelector(".config-tabs button.active");B&&B.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const Q=m.useMemo(()=>X1({plans:f,emailTemplates:v,t:l}),[f,v,l]),U=Q.find(B=>B.key===o)??Q[0],H=(u==null?void 0:u[U.key])??{};function ae(B,ne,be){h(w=>w&&{...w,[B]:{...w[B],[ne]:be}})}async function P(){var B;if(u){G(U.key),Y("");try{await wx(u[U.key]),(B=window.showToast)==null||B.call(window,l("config.saveSuccess"),"success")}catch(ne){Y(ne instanceof Error?ne.message:l("config.saveFailed"))}finally{G(null)}}}async function de(){var B;G("mail"),Y("");try{await u0(),(B=window.showToast)==null||B.call(window,l("config.email.testSuccess"),"success")}catch(ne){Y(ne instanceof Error?ne.message:l("config.email.testFailed"))}finally{G(null)}}async function A(){var ne;const B=String((u==null?void 0:u.telegram.telegram_bot_token)??"");G("webhook"),Y("");try{await p0(B),(ne=window.showToast)==null||ne.call(window,l("config.telegram.webhookSuccess"),"success")}catch(be){Y(be instanceof Error?be.message:l("config.telegram.webhookFailed"))}finally{G(null)}}return t.jsxs(Ft,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:M,disabled:j,children:[t.jsx(Et,{size:16}),l(j?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,j&&!u?t.jsx(wt,{label:l("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:H1.map(B=>{const ne=Q.find(be=>be.key===B);return ne?t.jsxs("button",{className:o===B?"active":"",type:"button",onClick:()=>d(B),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},B):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:U.label}),t.jsx("p",{children:U.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:D===U.key,type:"button",onClick:P,children:[t.jsx(Dn,{size:16}),D===U.key?l("config.saving"):l("config.saveTab")]})]}),U.warning?t.jsx("div",{className:"config-warning",children:U.warning}):null,t.jsx("div",{className:"config-fields",children:U.fields.map(B=>B.visible&&!B.visible(H)?null:t.jsx(Q1,{field:B,value:H[B.key],onChange:ne=>ae(U.key,B.key,ne)},B.key))}),U.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:D==="mail",onClick:de,children:[t.jsx(hx,{size:16}),l(D==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:D==="webhook",onClick:A,children:[t.jsx(Wv,{size:16}),l(D==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(xx,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function di(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function md(s){return s===!0||s===1||s==="1"}function K1(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function F1(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function V1(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState([]),[f,k]=m.useState(null),[v,x]=m.useState({}),[j,_]=m.useState(!0),[D,G]=m.useState(!1),[W,Y]=m.useState(!1),[M,Q]=m.useState(""),[U,H]=m.useState(""),[ae,P]=m.useState({}),de=m.useCallback(async()=>{_(!0),Q("");try{const[$,ce]=await Promise.all([m0(),f0()]);d($),h(ce),P({})}catch($){Q($ instanceof Error?$.message:l("payment.loadFailed"))}finally{_(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}de()},[de,s]);async function A($){const ce=($==null?void 0:$.payment)??u[0]??"",C=K1($,ce);if(k(C),x({}),Q(""),H(""),!!ce){G(!0);try{x(await bh(ce,$==null?void 0:$.id))}catch(V){Q(V instanceof Error?V.message:l("payment.formLoadFailed"))}finally{G(!1)}}}async function B($){if(f){k({...f,payment:$,config:{}}),G(!0),Q("");try{x(await bh($,f.id))}catch(ce){Q(ce instanceof Error?ce.message:l("payment.formLoadFailed"))}finally{G(!1)}}}async function ne($){var ce,C;if($.preventDefault(),!!f){Y(!0),Q(""),H("");try{await h0(F1(f)),k(null),(ce=window.showToast)==null||ce.call(window,l("payment.saveSuccess"),"success"),await de()}catch(V){(C=window.showToast)==null||C.call(window,V instanceof Error?V.message:l("payment.saveFailed"),"error")}finally{Y(!1)}}}async function be($){var ce;Q(""),H("");try{await x0($),await de()}catch(C){(ce=window.showToast)==null||ce.call(window,C instanceof Error?C.message:l("payment.toggleFailed"),"error")}}async function w($){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var C,V;Q(""),H("");try{await b0($),(C=window.showToast)==null||C.call(window,l("payment.deleteSuccess"),"success"),await de()}catch(z){(V=window.showToast)==null||V.call(window,z instanceof Error?z.message:l("payment.deleteFailed"),"error")}}})}async function R($,ce){var ue;const C=$+ce;if(C<0||C>=o.length)return;const V=[...o],z=V[$];V.splice($,1),V.splice(C,0,z),d(V);try{await g0(V.map(S=>S.id)),await de()}catch(S){(ue=window.showToast)==null||ue.call(window,S instanceof Error?S.message:l("payment.sortFailed"),"error"),await de()}}async function le($){var C;const ce=await di($);(C=window.showToast)==null||C.call(window,l(ce?"payment.copied":"common.copyFailed"),ce?"success":"error")}return t.jsxs(Ft,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:de,disabled:j,children:[t.jsx(Et,{size:16}),t.jsx("span",{children:l(j?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void A(),children:[t.jsx(Mn,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,U?t.jsx("div",{className:"form-success",children:U}):null,j&&o.length===0?t.jsx(wt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(($,ce)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:$.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(dh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(ch,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${md($.enable)?"active":""}`,type:"button",onClick:()=>void be($.id),"aria-label":md($.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:$.name}),$.icon?t.jsx("small",{children:$.icon}):null]}),t.jsx("td",{children:$.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void le($.notify_url),children:[t.jsx("span",{children:$.notify_url}),t.jsx(fs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void A($),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w($.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},$.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map(($,ce)=>{const C=md($.enable),V=$.handling_fee_percent!==null&&$.handling_fee_percent!==""?`${$.handling_fee_percent}%`:"",z=$.handling_fee_fixed!==null?`${En($.handling_fee_fixed)} VND`:"",ue=[V,z].filter(Boolean).join(" + ")||"No fees",S=ae[$.id],N=$.icon&&!S;return t.jsxs("div",{className:`payment-mobile-card ${C?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",$.id]}),t.jsx("span",{className:"gateway-tag",children:$.payment})]}),t.jsx("button",{className:`admin-switch ${C?"active":""}`,type:"button",onClick:()=>void be($.id),"aria-label":l(C?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[N?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:$.icon,alt:$.name,onError:()=>{P(E=>({...E,[$.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:$.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:$.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ue})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void le($.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:$.notify_url}),t.jsx(fs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(ce,-1),disabled:ce===0,"aria-label":l("payment.moveUp"),children:t.jsx(dh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(ce,1),disabled:ce===o.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(ch,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void A($),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w($.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},$.id)}),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:$=>k({...f,name:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:f.icon,onChange:$=>k({...f,icon:$.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:f.notify_domain,onChange:$=>k({...f,notify_domain:$.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:f.handling_fee_percent,onChange:$=>k({...f,handling_fee_percent:$.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:f.handling_fee_fixed,onChange:$=>k({...f,handling_fee_fixed:$.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:f.payment,onChange:$=>void B($.target.value),children:u.map($=>t.jsx("option",{value:$,children:$},$))})]}),D?t.jsx(wt,{label:l("payment.formLoading")}):null,D?null:Object.entries(v).map(([$,ce])=>t.jsxs("label",{children:[t.jsx("span",{children:ce.label}),t.jsx("input",{className:"config-input",placeholder:ce.description,value:String(f.config[$]??ce.value??""),onChange:C=>k({...f,config:{...f.config,[$]:C.target.value}})})]},$)),f.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Dn,{size:16}),l(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function J1(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function P1(s,l){return l[s.field_name]??s.default_value??""}function W1(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState(null),[u,h]=m.useState(null),[f,k]=m.useState(!0),[v,x]=m.useState(!1),[j,_]=m.useState(!1),[D,G]=m.useState(null),[W,Y]=m.useState(""),[M,Q]=m.useState(""),U=m.useCallback(async()=>{k(!0),Y("");try{d(await y0())}catch(A){Y(A instanceof Error?A.message:l("theme.loadFailed"))}finally{k(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}U()},[U,s]);async function H(A,B){h(null),x(!0),Y(""),Q("");try{const ne=await v0(A);h({key:A,theme:B,values:ne})}catch(ne){Y(ne instanceof Error?ne.message:l("theme.configLoadFailed"))}finally{x(!1)}}async function ae(A){G(A),Y(""),Q("");try{await wx({frontend_theme:A}),Q(l("theme.activateSuccess")),await U()}catch(B){Y(B instanceof Error?B.message:l("theme.activateFailed"))}finally{G(null)}}async function P(A){if(A.preventDefault(),!!u){_(!0),Y(""),Q("");try{await j0(u.key,u.values),h(null),Q(l("theme.saveSuccess")),await U()}catch(B){Y(B instanceof Error?B.message:l("theme.saveFailed"))}finally{_(!1)}}}function de(A,B){h(ne=>ne&&{...ne,values:{...ne.values,[A]:B}})}return t.jsxs(Ft,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,M?t.jsx("div",{className:"form-success",children:M}):null,f&&!o?t.jsx(wt,{label:l("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([A,B])=>{const ne=o.active===A;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${J1(B)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(fx,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:B.name||A}),t.jsx("p",{children:B.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",B.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void H(A,B),children:[t.jsx(Yv,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||D===A,type:"button",onClick:()=>void ae(A),children:[t.jsx(qv,{size:15}),l(ne?"theme.current":D===A?"theme.activating":"theme.activate")]})]})]},A)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(wt,{label:l("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[(u.theme.configs??[]).map(A=>{const B=P1(A,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:A.label}),A.description?t.jsx("p",{className:"field-description",children:A.description}):null,A.field_type==="select"?t.jsx("select",{className:"config-input",value:B,onChange:ne=>de(A.field_name,ne.target.value),children:Object.entries(A.select_options??{}).map(([ne,be])=>t.jsx("option",{value:ne,children:be},ne))}):null,A.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:A.placeholder,rows:5,value:B,onChange:ne=>de(A.field_name,ne.target.value)}):null,A.field_type!=="select"&&A.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:A.placeholder,value:B,onChange:ne=>de(A.field_name,ne.target.value)}):null]},A.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"theme.saving":"common.save")]})]})]})]})}):null]})}const Ud=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],I1=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],ej=["tcp","ws","grpc","http","httpupgrade","xhttp"],Rx=["tcp","ws","grpc"],Hx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],tj=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],kh=["anytls","hysteria2","trojan","tuic"],nj=["tcp","ws","grpc","httpupgrade","xhttp"],aj=["chrome","firefox","safari","ios","android","edge","360","qq"],ij=["vmess","vless","trojan","hysteria","tuic","anytls"],lj=["trojan","hysteria","tuic","anytls"],Jd=typeof window<"u"?window.location.origin:"",sj="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function oj(s,l,o=""){return s[l]??o}function Fe(s,l,o=""){return String(oj(s,l,o))}function rj(s,l){const o=s[l];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function Pd(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const l=JSON.parse(s);return l&&typeof l=="object"&&!Array.isArray(l)?l:{}}catch{return{}}}function cj(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function dj(s){return s==="vmess"?"networkSettings":"network_settings"}function uj(s,l){const o=s==="vmess",d=s==="vless"||aa(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(l){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function aa(s){return s==="v2node"||s==="zicnode"}function pj(s){return lj.includes(s)}function mj(s){return aa(s)||ij.includes(s)}function Ch(s){return s==="vmess"?"tlsSettings":"tls_settings"}function fj(s){const l=String((s==null?void 0:s._type)??"");return pj(l)?1:Number((s==null?void 0:s.tls)??0)}function Rd(s){return!!s&&s!=="shadowsocks"}function hj(s){return s==="vless"||s==="vmess"}function Hd(s){return s==="vless"||s==="anytls"}function xj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function zh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Rx:s==="vless"||s==="vmess"?nj:[]}function bj(s){var l;return aa(s)?"ZicNode":((l=Ud.find(o=>o.value===s))==null?void 0:l.label)??s}function Ld(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function gj(s){return s===!0||s===1||s==="1"||s==="true"}const yj=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],vj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert"];function za(s,l){const o=Pd(s);if(l===0)return{};const d={...o};return delete d.allow_insecure,delete d.allowInsecure,l===1?yj.forEach(u=>delete d[u]):l===2&&vj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const h=d[u];(h===""||h===null||h===void 0)&&delete d[u]}),d}function jj(s){return Ld(s).replace(/\/+$/,"")||Jd}function Th(s){return`'${s.replace(/'/g,"'\\''")}'`}function wj(s,l){const o=l.apiHost||Jd,d=l.apiKey||"TOKEN_MOI";return`wget -N ${sj} && \\
bash install.sh --api-host ${Th(o)} --node-id ${s} --api-key ${Th(d)}`}function Eh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Mh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=Eh(d.group_id),d.route_id=Eh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},tls_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",tls_settings:{},insecure:0};case"tuic":return{...o,server_name:"",tls_settings:{},insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",tls_settings:{},insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Lx({initialValue:s,onCancel:l,onSave:o}){const{t:d}=Ye(),[u,h]=m.useState(()=>JSON.stringify(s??{},null,2)),[f,k]=m.useState(""),v=j=>{if(j.preventDefault(),!u.trim()){o({});return}try{const _=JSON.parse(u);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");o(_)}catch(_){k(_ instanceof Error?_.message:"Invalid JSON")}},x=j=>{if(h(j),!j.trim()){k("");return}try{const _=JSON.parse(j);if(typeof _!="object"||_===null)throw new Error("Must be a JSON object {} or array []");k("")}catch(_){k(_ instanceof Error?_.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),f&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",f]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:f?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:u,onChange:j=>x(j.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!f,children:d("common.confirm")})]})]})}function Me({label:s,required:l,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function _j({value:s,onChange:l,label:o}){const{t:d}=Ye(),[u,h]=m.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Me,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((f,k)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((v,x)=>x!==k)),style:{cursor:"pointer"},children:[f," ×"]},k)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:f=>h(f.target.value),onKeyDown:f=>{f.key==="Enter"&&u.trim()&&(f.preventDefault(),l([...s,u.trim()]),h(""))}})]})]})}function Dh({options:s,value:l,onChange:o,label:d,actionText:u,onAction:h}){const{t:f}=Ye(),[k,v]=m.useState(""),x=s.filter(_=>l.includes(_.id)),j=s.filter(_=>_.name.toLowerCase().includes(k.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Me,{label:d,actionText:u,onAction:h}),x.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:x.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(l.filter(D=>D!==_.id)),children:[_.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},_.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${f("common.search")}...`,value:k,onChange:_=>v(_.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[j.map(_=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(_.id),onChange:D=>o(D.target.checked?[...l,_.id]:l.filter(G=>G!==_.id))}),t.jsx("span",{children:_.name})]},_.id)),j.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?f("node.noGroupsAvailable"):f("node.noResultsFound")})]})]})}function la({label:s,checked:l,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function Nj({initialValue:s,isSnakeCase:l,tlsMode:o,nodeType:d,onCancel:u,onSave:h}){const{t:f}=Ye(),k=l?"server_name":"serverName",v=l?"allow_insecure":"allowInsecure",x=aa(d),j=mj(d),_=o===1&&j,[D,G]=m.useState(String((s==null?void 0:s[k])??"")),[W,Y]=m.useState(String((s==null?void 0:s.dest)??"")),[M,Q]=m.useState(String((s==null?void 0:s.server_port)??"443")),[U,H]=m.useState(String((s==null?void 0:s.xver)??"0")),[ae,P]=m.useState(String((s==null?void 0:s.private_key)??"")),[de,A]=m.useState(String((s==null?void 0:s.public_key)??"")),[B,ne]=m.useState(String((s==null?void 0:s.short_id)??"")),[be,w]=m.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[R,le]=m.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[$,ce]=m.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),C=String((s==null?void 0:s.cert_mode)??"").trim(),[V,z]=m.useState(C||"auto"),[ue,S]=m.useState(String((s==null?void 0:s.provider)??"")),[N,E]=m.useState(String((s==null?void 0:s.dns_env)??"")),[I,me]=m.useState(String((s==null?void 0:s.cert_file)??"")),[Ne,Ee]=m.useState(String((s==null?void 0:s.key_file)??"")),[Ue,Ve]=m.useState(()=>{const je=s==null?void 0:s.reject_unknown_sni;return je===1||je===!0||String(je)==="1"||String(je)==="true"}),[Re,et]=m.useState(String((s==null?void 0:s.ech)??"")),[ft,Qt]=m.useState(String((s==null?void 0:s.ech_server_name)??"")),[Vt,xt]=m.useState(String((s==null?void 0:s.ech_key)??"")),[Xt,ot]=m.useState(String((s==null?void 0:s.ech_config)??"")),[Jt,bt]=m.useState(()=>{const je=s==null?void 0:s[v];return je===1||je===!0||String(je)==="1"||String(je)==="true"}),Nt=je=>{if(je.preventDefault(),x&&o===0){h({});return}const Mt=x?za(s,o):Pd(s),Ae=x?{...Mt,[k]:D,fingerprint:be}:{...s??{},[k]:D,fingerprint:be},fn=R.trim(),rt=$.trim();if(fn?Ae.pinnedPeerCertSha256=fn:delete Ae.pinnedPeerCertSha256,delete Ae.pinned_peer_cert_sha256,rt?Ae.verifyPeerCertByName=rt:delete Ae.verifyPeerCertByName,delete Ae.verify_peer_cert_by_name,x?(delete Ae.allow_insecure,delete Ae.allowInsecure):Ae[v]=l?Jt?1:0:Jt,o===2&&(Ae.dest=W,Ae.server_port=M,Ae.xver=Number(U)||0,Ae.private_key=ae,Ae.public_key=de,Ae.short_id=B,Ae.ech=Re,Ae.ech_server_name=ft,Ae.ech_key=Vt,Ae.ech_config=Xt),_){Ae.cert_mode=V;const on=s==null?void 0:s.auto_cert;on&&typeof on=="object"&&(Ae.auto_cert=on),V==="none"?(delete Ae.provider,delete Ae.dns_env,delete Ae.cert_file,delete Ae.key_file):(ue.trim()?Ae.provider=ue:delete Ae.provider,N.trim()?Ae.dns_env=N:delete Ae.dns_env,I.trim()?Ae.cert_file=I:delete Ae.cert_file,Ne.trim()?Ae.key_file=Ne:delete Ae.key_file),Ae.reject_unknown_sni=Ue?"1":"0"}h(x?za(Ae,o):Ae)};return t.jsxs("form",{onSubmit:Nt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:f("node.sni")}),t.jsx("input",{className:"config-input",value:D,onChange:je=>G(je.target.value),placeholder:f(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.dest")}),t.jsx("input",{className:"config-input",value:W,onChange:je=>Y(je.target.value),placeholder:f("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.servicePort")}),t.jsx("input",{className:"config-input",value:M,onChange:je=>Q(je.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:U,onChange:je=>H(je.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.privateKey")}),t.jsx("input",{className:"config-input",value:ae,onChange:je=>P(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.publicKey")}),t.jsx("input",{className:"config-input",value:de,onChange:je=>A(je.target.value),placeholder:f("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.shortId")}),t.jsx("input",{className:"config-input",value:B,onChange:je=>ne(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.fingerprint")}),t.jsx("select",{className:"config-input",value:be,onChange:je=>w(je.target.value),children:aj.map(je=>t.jsx("option",{value:je,children:je},je))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:R,onChange:je=>le(je.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:$,onChange:je=>ce(je.target.value),placeholder:"example.com"})]})]}),_?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.certMode")}),t.jsxs("select",{className:"config-input",value:V,onChange:je=>z(je.target.value),children:[t.jsx("option",{value:"auto",children:f("node.certModeAuto")}),t.jsx("option",{value:"self",children:f("node.certModeSelf")}),t.jsx("option",{value:"http",children:f("node.certModeHttp")}),t.jsx("option",{value:"dns",children:f("node.certModeDns")}),t.jsx("option",{value:"file",children:f("node.certModeFile")}),t.jsx("option",{value:"none",children:f("node.certModeNone")})]})]}),V==="dns"||V==="auto"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:ue,onChange:je=>S(je.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:N,onChange:je=>E(je.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,V!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.certFile")}),t.jsx("input",{className:"config-input",value:I,onChange:je=>me(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.keyFile")}),t.jsx("input",{className:"config-input",value:Ne,onChange:je=>Ee(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null,t.jsx(la,{label:f("node.rejectUnknownSni"),checked:Ue,onChange:Ve})]}):null,x?null:t.jsx(la,{label:f("node.allowInsecure"),checked:Jt,onChange:bt}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.ech")}),t.jsxs("select",{className:"config-input",value:Re,onChange:je=>et(je.target.value),children:[t.jsx("option",{value:"",children:f("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:f("node.echCustom")})]})]}),Re==="cloudflare"?t.jsx("div",{className:"config-warning",children:f("node.echCloudflareHelp")}):null,Re==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.echServerName")}),t.jsx("input",{className:"config-input",value:ft,onChange:je=>Qt(je.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.echKey")}),t.jsx("input",{className:"config-input",value:Vt,onChange:je=>xt(je.target.value),placeholder:f("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:f("node.echConfig")}),t.jsx("input",{className:"config-input",value:Xt,onChange:je=>ot(je.target.value),placeholder:f("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:f("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:f("common.confirm")})]})]})}function Sj({draft:s,set:l,groups:o,routes:d,nodes:u,onOpenJson:h,onAddGroup:f,onOpenTransportConfig:k}){const{t:v}=Ye(),x=String(s._type),j=aa(x),_=Fe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"name"),onChange:D=>l("name",D.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Fe(s,"rate","1"),onChange:D=>l("rate",Number(D.target.value))})]})]}),t.jsx(_j,{value:s.tags??[],onChange:D=>l("tags",D),label:v("node.tags")}),t.jsx(Dh,{options:o.map(D=>({id:D.id,name:D.name})),value:s.group_id??[],onChange:D=>l("group_id",D),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"host"),onChange:D=>l("host",D.target.value),placeholder:v("node.addressPlaceholder")})]}),j?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.listenIp")}),t.jsx("input",{className:"config-input",value:Fe(s,"listen_ip"),onChange:D=>l("listen_ip",D.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?v("node.editConfig"):void 0,onAction:()=>{const D=Ch(x);h(v("node.connectionSecurityConfig"),D)}}),t.jsxs("select",{className:"config-input",value:Fe(s,"tls","0"),onChange:D=>{const G=Number(D.target.value);l("tls",G);const W=Ch(x);G!==0&&!s[W]&&l(W,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),x!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.sni"),actionText:v("node.editConfig"),onAction:()=>h(v("node.connectionSecurityConfig"),"tls_settings")}),t.jsx("input",{className:"config-input",value:Fe(s,"server_name"),onChange:D=>l("server_name",D.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"port"),onChange:D=>l("port",D.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Fe(s,"server_port"),onChange:D=>l("server_port",D.target.value),placeholder:"443"})]})]}),j?t.jsx(Aj,{draft:s,set:l,onOpenJson:h,onOpenTransportConfig:k,onOpenSecurityConfig:()=>h(v("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(x)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:k}),t.jsxs("select",{className:"config-input",value:_,onChange:D=>{l("network",D.target.value);const G=x==="vmess"?"networkSettings":"network_settings";s[G]||l(G,{})},children:[x==="vmess"&&I1.map(D=>t.jsx("option",{value:D,children:D},D)),x==="trojan"&&Rx.map(D=>t.jsx("option",{value:D,children:D},D)),x==="vless"&&ej.map(D=>t.jsx("option",{value:D,children:D},D))]})]}):null,x==="trojan"&&t.jsx(Cj,{draft:s,set:l}),x==="shadowsocks"&&t.jsx(zj,{draft:s,set:l,onOpenJson:h}),x==="hysteria"&&t.jsx(Tj,{draft:s,set:l}),x==="tuic"&&t.jsx(Ej,{draft:s,set:l}),x==="vless"&&t.jsx(Mj,{draft:s,set:l,onOpenJson:h}),x==="anytls"&&t.jsx(Dj,{draft:s,set:l,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:D=>l("parent_id",D.target.value?Number(D.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),u.filter(D=>D.id!==s.id&&!D.parent_id).map(D=>t.jsx("option",{value:D.id,children:D.name},D.id))]})]}),t.jsx(Dh,{options:d.map(D=>({id:D.id,name:D.remarks})),value:s.route_id??[],onChange:D=>l("route_id",D),label:v("node.routingGroups")})]})]})}function kj({draft:s,set:l,onCancel:o,onSave:d}){const u=String(s._type),h=String(s.network??"tcp"),f=dj(u),k=s[f],v=cj(k)?Pd(k):uj(u,h);return t.jsx(Lx,{initialValue:v,onCancel:o,onSave:x=>{l(f,x),d()}})}function Cj({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(la,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function zj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye(),u=rj(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Fe(s,"cipher","aes-128-gcm"),onChange:h=>l("cipher",h.target.value),children:Hx.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"obfs"),onChange:h=>l("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:h=>l("obfs_settings",{...u,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:h=>l("obfs_settings",{...u,path:h.target.value}),placeholder:"/"})]})]})]})}function Tj({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Fe(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(la,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function Ej({draft:s,set:l}){const{t:o}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Fe(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Fe(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(la,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(la,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(la,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function Mj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Fe(s,"flow"),onChange:u=>l("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.encryption"),actionText:Fe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"encryption"),onChange:u=>l("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function Dj({draft:s,set:l,onOpenJson:o}){const{t:d}=Ye();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(la,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>l("insecure",u?1:0)})]})}function Aj({draft:s,set:l,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:h}=Ye(),f=Fe(s,"protocol"),k=zh(f),v=x=>{if(l("protocol",x),!x){l("tls",0),l("network","tcp");return}kh.includes(x)?(l("tls",1),s.tls_settings||l("tls_settings",{})):x==="shadowsocks"?l("tls",0):x==="vmess"&&Number(s.tls??0)===2&&l("tls",1);const j=zh(x);(j.length===0||!j.includes(Fe(s,"network","tcp")))&&l("network","tcp"),x!=="vless"&&(l("flow",""),l("encryption",""),l("encryption_settings",{})),x!=="hysteria2"&&(l("obfs",null),l("obfs_password",""),l("up_mbps",0),l("down_mbps",0)),x!=="anytls"&&l("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:f,onChange:x=>v(x.target.value),children:[t.jsx("option",{value:"",children:h("node.selectNodeProtocol")}),tj.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),f?t.jsxs(t.Fragment,{children:[Rd(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:h("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?h("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Fe(s,"tls",kh.includes(f)?"1":"0"),onChange:x=>{const j=Number(x.target.value);l("tls",j),j!==0&&!s.tls_settings&&l("tls_settings",{})},children:[hj(f)?t.jsx("option",{value:"0",children:h("node.none")}):null,t.jsx("option",{value:"1",children:h("node.useTls")}),Hd(f)?t.jsx("option",{value:"2",children:h("node.reality")}):null]})]}):null,xj(f)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:h("node.transportProtocol"),required:!0,actionText:h("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:k.includes(Fe(s,"network","tcp"))?Fe(s,"network","tcp"):"tcp",onChange:x=>{l("network",x.target.value),s.network_settings||l("network_settings",{})},children:k.map(x=>t.jsx("option",{value:x,children:x},x))})]}):null]}):null,f==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.encryption"),actionText:Fe(s,"encryption")?h("node.editConfig"):void 0,onAction:()=>o(h("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Fe(s,"encryption"),onChange:x=>l("encryption",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.flow")}),t.jsxs("select",{className:"config-input",value:Fe(s,"flow"),onChange:x=>l("flow",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),f==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:h("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Fe(s,"cipher","aes-128-gcm"),onChange:x=>l("cipher",x.target.value),children:Hx.map(x=>t.jsx("option",{value:x,children:x},x))})]}),f==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"up_mbps","0"),onChange:x=>l("up_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Fe(s,"down_mbps","0"),onChange:x=>l("down_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Fe(s,"obfs"),onChange:x=>l("obfs",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Fe(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Fe(s,"obfs_password"),onChange:x=>l("obfs_password",x.target.value),placeholder:h("node.autoGenHelp")})]}):null]})]}),f==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Fe(s,"udp_relay_mode","native"),onChange:x=>l("udp_relay_mode",x.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Me,{label:h("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Fe(s,"congestion_control","bbr"),onChange:x=>l("congestion_control",x.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(la,{label:h("node.disableSni"),checked:s.disable_sni===1,onChange:x=>l("disable_sni",x?1:0)}),t.jsx(la,{label:h("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:x=>l("zero_rtt_handshake",x?1:0)})]}),f==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Me,{label:h("node.paddingScheme"),actionText:h("node.editConfig"),onAction:()=>o(h("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Ah={vmess:Xv,vless:e0,trojan:Td,shadowsocks:Zd,hysteria:Gv,tuic:_v,anytls:bs,v2node:ph,zicnode:ph},Oj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},Uj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function ii(s){return Oj[s]??Uj}function Rj({draft:s,config:l,onCopy:o,t:d}){const u=Number(s.id??0),h=u>0?wj(u,l):"",f=!l.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:h}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(h),children:[t.jsx(fs,{size:15}),d("node.copyInstallCommand")]}),f?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Hj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState([]),[f,k]=m.useState([]),[v,x]=m.useState(null),[j,_]=m.useState(null),[D,G]=m.useState(!0),[W,Y]=m.useState(!1),[M,Q]=m.useState(""),[U,H]=m.useState(""),[ae,P]=m.useState(1),[de,A]=m.useState(10),[B,ne]=m.useState(!1),[be,w]=m.useState({}),[R,le]=m.useState({apiHost:Jd,apiKey:""}),[$,ce]=m.useState(!1),[C,V]=m.useState(""),[z,ue]=m.useState(null),[S,N]=m.useState(null),[E,I]=m.useState(null),me=(L,oe)=>{L.dataTransfer.effectAllowed="move",N(oe)},Ne=(L,oe)=>{if(L.preventDefault(),S===null||S===oe)return;const ee=[...o],ke=ee[S];ee.splice(S,1),ee.splice(oe,0,ke),N(oe),d(ee)},Ee=()=>{N(null)},Ue=(L,oe)=>{B&&I(oe)},Ve=L=>{if(!B||E===null)return;L.cancelable&&L.preventDefault();const oe=L.touches[0],ee=document.elementFromPoint(oe.clientX,oe.clientY);if(!ee)return;const ke=ee.closest(".mobile-node-card");if(!ke)return;const Be=ke.getAttribute("data-index");if(Be===null)return;const We=Number(Be);if(We!==E&&We>=0&&We<o.length){const g=[...o],se=g[E];g.splice(E,1),g.splice(We,0,se),I(We),d(g)}},Re=()=>{I(null)};m.useEffect(()=>{P(1)},[C,de]);const et=o.filter(L=>{const oe=C.toLowerCase().trim();return oe?L.name.toLowerCase().includes(oe)||L.host.toLowerCase().includes(oe)||String(L.id).includes(oe)||L.type.toLowerCase().includes(oe):!0}),ft=Math.ceil(et.length/de),Qt=et.slice((ae-1)*de,ae*de);function Vt(L,oe){return oe<=7?Array.from({length:oe},(ee,ke)=>ke+1):L<=4?[1,2,3,4,5,"...",oe]:L>=oe-3?[1,"...",oe-4,oe-3,oe-2,oe-1,oe]:[1,"...",L-1,L,L+1,"...",oe]}const xt=Vt(ae,ft),Xt=async()=>{var L,oe;Y(!0),Q(""),H("");try{const ee={};o.forEach((ke,Be)=>{ee[ke.type]||(ee[ke.type]={}),ee[ke.type][String(ke.id)]=Be+1}),await v1(ee),(L=window.showToast)==null||L.call(window,l("node.saveSortSuccess"),"success"),ne(!1),await ye()}catch(ee){Q(ee instanceof Error?ee.message:l("node.saveSortFailed")),(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:l("node.saveSortFailed"),"error")}finally{Y(!1)}},ot=async()=>{ne(!1),await we()},Jt=()=>et.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===1,onClick:()=>P(L=>Math.max(L-1,1)),children:"<"}),xt.map((L,oe)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${oe}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ae===L?"active":""}`,onClick:()=>P(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ae===ft||ft===0,onClick:()=>P(L=>Math.min(L+1,ft)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:de,onChange:L=>A(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",l("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",l("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",l("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",l("common.perPage")]})]})})]}),[bt,Nt]=m.useState(null),[je,Mt]=m.useState(!1),[Ae,fn]=m.useState(""),[rt,on]=m.useState(!1),[An,hn]=m.useState(!1);async function F(L){var ee,ke;L.preventDefault();const oe=Ae.trim();if(!(!oe||!v)){on(!0),Q(""),H("");try{await _x({name:oe});const Be=await xs();h(Be);const We=Be.filter(g=>g.name===oe).sort((g,se)=>se.id-g.id)[0];if(We){const g=v.group_id??[];g.includes(We.id)||un("group_id",[...g,We.id])}fn(""),Mt(!1),(ee=window.showToast)==null||ee.call(window,l("node.groupCreateSuccess"),"success")}catch(Be){Q(Be instanceof Error?Be.message:l("node.groupCreateFailed")),(ke=window.showToast)==null||ke.call(window,Be instanceof Error?Be.message:l("node.groupCreateFailed"),"error")}finally{on(!1)}}}const Ce=(L,oe)=>{if(!v)return;let ee=v[oe];if(typeof ee=="string"&&ee.trim())try{ee=JSON.parse(ee)}catch{}["tlsSettings","tls_settings"].includes(oe)&&aa(String(v._type))&&(ee=za(ee,Number(v.tls??0))),Nt({title:L,key:oe,value:ee&&typeof ee=="object"?ee:{}})},we=m.useCallback(async()=>{var L,oe,ee,ke;G(!0),Q("");try{const[Be,We,g,se]=await Promise.all([vh(),xs(),Sx(),jx()]);d(Be.data),h(We),k(g),le({apiHost:jj((L=se.site)==null?void 0:L.app_url),apiKey:Ld((oe=se.server)==null?void 0:oe.server_token)}),ce(gj(((ee=se.subscribe)==null?void 0:ee.device_hwid_available)??((ke=se.subscribe)==null?void 0:ke.device_hwid_enable)))}catch(Be){Q(Be instanceof Error?Be.message:l("knowledge.loadFailed"))}finally{G(!1)}},[]),ye=m.useCallback(async()=>{try{const L=await vh();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function Qe(L){var ee;const oe=await di(L);(ee=window.showToast)==null||ee.call(window,l(oe?"node.installCopied":"common.copyFailed"),oe?"success":"error")}m.useEffect(()=>{if(!Ht()){s.replace("/login");return}we()},[we,s]);function He(L){x(Mh(L)),_(null),Q(""),H("")}function qe(L){x(Mh(L.type,L)),Q(""),H("")}function Xe(L){!$||Number(L.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function nt(L,oe){const ee=Number(L.online??0),ke=$&&ee>0,Be=`${oe==="mobile"?"mobile-badge-pill":"online-badge"}${ke?" online-badge-link":""}`,We=oe==="mobile"?12:13,g={...oe==="mobile"?{marginRight:4}:{},color:ee>0?"#10b981":"var(--muted)",opacity:ee>0?1:.6},se=t.jsxs(t.Fragment,{children:[t.jsx(gx,{size:We,style:g}),ee]});return ke?t.jsx("button",{className:Be,type:"button",title:l("node.viewOnlineDevices"),onClick:()=>Xe(L),children:se}):t.jsx("span",{className:Be,children:se})}async function dn(L){var We,g,se;if(L.preventDefault(),!v)return;Y(!0),Q(""),H("");const oe=String(v._type),ee={...v};if(aa(oe)&&!Ld(ee.protocol)){Q(l("node.protocolRequired")),(We=window.showToast)==null||We.call(window,l("node.protocolRequired"),"error"),Y(!1);return}for(const pe of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ee[pe];if(ee.padding_scheme!==void 0&&ee.padding_scheme!==null&&typeof ee.padding_scheme!="string"&&(ee.padding_scheme=JSON.stringify(ee.padding_scheme)),ee.padding_scheme)try{const pe=JSON.parse(String(ee.padding_scheme));if(typeof pe!="object"||pe===null)throw new Error("Invalid JSON array or object")}catch(pe){Q("Invalid Padding Scheme configuration: "+(pe instanceof Error?pe.message:"JSON error")),Y(!1);return}const ke=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const pe of ke)(ee[pe]===""||ee[pe]===null||ee[pe]===void 0)&&delete ee[pe];if(aa(oe)){const pe=String(ee.protocol??""),_e=Number(ee.tls??0);Rd(pe)?!Hd(pe)&&_e===2?(ee.tls=1,ee.tls_settings=za(ee.tls_settings,1)):ee.tls_settings=za(ee.tls_settings,_e):(ee.tls=0,ee.tls_settings={})}const Be=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const pe of Be){const _e=ee[pe];(_e==null||typeof _e=="object"&&Object.keys(_e).length===0)&&delete ee[pe]}ee.port!==void 0&&(ee.port=Number(ee.port)),ee.server_port!==void 0&&(ee.server_port=Number(ee.server_port)),ee.tls!==void 0&&(ee.tls=Number(ee.tls)),ee.rate!==void 0&&(ee.rate=Number(ee.rate));try{await x1(oe,ee),x(null),(g=window.showToast)==null||g.call(window,l("node.saveSuccess"),"success"),await ye()}catch(pe){Q(pe instanceof Error?pe.message:l("node.saveFailed")),(se=window.showToast)==null||se.call(window,pe instanceof Error?pe.message:l("node.saveFailed"),"error")}finally{Y(!1)}}async function Ct(L){const oe=[...o];d(ee=>ee.map(ke=>ke.id===L.id&&ke.type===L.type?{...ke,show:L.show?0:1}:ke));try{await g1(L.type,L.id,L.show?0:1),await ye()}catch(ee){d(oe),Q(ee instanceof Error?ee.message:l("node.updateFailed"))}}async function Pn(L){var oe,ee;try{await y1(L.type,L.id),(oe=window.showToast)==null||oe.call(window,l("node.copySuccess"),"success"),await ye()}catch(ke){Q(ke instanceof Error?ke.message:l("node.copyFailed")),(ee=window.showToast)==null||ee.call(window,ke instanceof Error?ke.message:l("node.copyFailed"),"error")}}async function Lt(L){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:l("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var ke,Be;const ee=[...o];d(We=>We.filter(g=>!(g.id===L.id&&g.type===L.type))),Q("");try{await b1(L.type,L.id),(ke=window.showToast)==null||ke.call(window,l("node.deleteSuccess"),"success"),await ye()}catch(We){d(ee),Q(We instanceof Error?We.message:l("node.deleteFailed")),(Be=window.showToast)==null||Be.call(window,We instanceof Error?We.message:l("node.deleteFailed"),"error")}}})}const un=(L,oe)=>x(ee=>{if(!ee)return null;const ke={...ee,[L]:oe};if(!aa(String(ke._type)))return ke;if(L==="tls_settings"&&(ke.tls_settings=za(oe,Number(ke.tls??0))),L==="tls"&&(ke.tls_settings=za(ke.tls_settings,Number(oe))),L==="protocol"){const Be=String(oe);Rd(Be)?!Hd(Be)&&Number(ke.tls??0)===2?(ke.tls=1,ke.tls_settings=za(ke.tls_settings,1)):ke.tls_settings=za(ke.tls_settings,Number(ke.tls??0)):(ke.tls=0,ke.tls_settings={})}return ke}),Zn=v?String(v._type):"",pn=bj(Zn);return t.jsxs(Ft,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>_(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:18})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>_(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Ud.map(L=>{const oe=ii(L.value),ee=Ah[L.value]||Yo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(L.value),_(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:C,onChange:L=>V(L.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${B?"success-btn":""}`,type:"button",onClick:B?Xt:()=>ne(!0),disabled:W,children:l(B?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),B&&t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,children:l("common.cancel")})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,U?t.jsx("div",{className:"form-success",children:U}):null,D&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(B?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Qt.map(L=>{const oe=o.findIndex(ee=>ee.id===L.id&&ee.type===L.type);return t.jsxs("tr",{draggable:B,onDragStart:ee=>me(ee,oe),onDragOver:ee=>Ne(ee,oe),onDragEnd:Ee,className:S===oe?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(L.type).bg,color:ii(L.type).text,border:`1px solid ${ii(L.type).border}`},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Ct(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:nt(L,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ee=L.group_id??[],ke=be[`${L.type}-${L.id}`],Be=ee.map(se=>{const pe=u.find(_e=>Number(_e.id)===Number(se));return t.jsx("span",{className:"tag",children:(pe==null?void 0:pe.name)??`#${se}`},se)});if(ee.length<=3||ke)return t.jsxs(t.Fragment,{children:[Be,ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(se=>({...se,[`${L.type}-${L.id}`]:!1})),children:l("node.collapse")})]});const We=Be.slice(0,3),g=ee.length-3;return t.jsxs(t.Fragment,{children:[We,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(se=>({...se,[`${L.type}-${L.id}`]:!0})),children:["+",g,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:ee.length})}),Be]})]})]})})()})}),t.jsx("td",{children:B?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(ds,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ue((z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ue(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(L),ue(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Pn(L),ue(null)},children:[t.jsx(fs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(L),ue(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!D&&et.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Jt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>_(j?null:"show"),title:l("node.createNode"),children:t.jsx(Mn,{size:20})}),j!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>_(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),Ud.map(L=>{const oe=ii(L.value),ee=Ah[L.value]||Yo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{He(L.value),_(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:C,onChange:L=>V(L.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${B?"active":""}`,type:"button",onClick:()=>ne(!B),title:l("node.editSortOrder"),children:t.jsx(ds,{size:20})})]}),B&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:ot,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Xt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Qt.map(L=>{const oe=o.findIndex(ee=>ee.id===L.id&&ee.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${S===oe||E===oe?"dragging":""}`,draggable:B,onDragStart:ee=>me(ee,oe),onDragOver:ee=>Ne(ee,oe),onDragEnd:Ee,onTouchStart:ee=>Ue(ee,oe),onTouchMove:Ve,onTouchEnd:Re,"data-index":oe,style:B?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:B?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(ds,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void Ct(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ue((z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(z==null?void 0:z.id)===L.id&&(z==null?void 0:z.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ue(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{qe(L),ue(null)},children:[t.jsx(Kt,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Pn(L),ue(null)},children:[t.jsx(fs,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Lt(L),ue(null)},children:[t.jsx(en,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:ii(L.type).bg,color:ii(L.type).text,border:`1px solid ${ii(L.type).border}`},children:L.id}),nt(L,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!D&&et.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Jt()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?l("node.editNodeTitle",{type:pn}):l("node.createNodeTitle",{type:pn})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:pn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:dn,children:[t.jsx(Sj,{draft:v,set:un,groups:u,routes:f,nodes:o,onOpenJson:Ce,onAddGroup:()=>Mt(!0),onOpenTransportConfig:()=>hn(!0)}),aa(Zn)?t.jsx(Rj,{draft:v,config:R,onCopy:L=>void Qe(L),t:l}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Dn,{size:16}),l(W?"node.saving":"common.save")]})]})]})]})}),bt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:bt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(bt.key)?l("node.connectionSecurityEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Nt(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(bt.key)?t.jsx(Nj,{initialValue:bt.value,isSnakeCase:bt.key==="tls_settings",tlsMode:fj(v),nodeType:String((v==null?void 0:v._type)??""),onCancel:()=>Nt(null),onSave:L=>{un(bt.key,L),Nt(null)}}):t.jsx(Lx,{initialValue:bt.value,onCancel:()=>Nt(null),onSave:L=>{un(bt.key,L),Nt(null)}})})]})}),je&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Mt(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:F,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:Ae,onChange:L=>fn(L.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Mt(!1),disabled:rt,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:rt||!Ae.trim(),children:l(rt?"node.saving":"common.confirm")})]})]})]})}),An&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>hn(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(kj,{draft:v,set:un,onCancel:()=>hn(!1),onSave:()=>hn(!1)})})]})})]})}function Lj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(null),[f,k]=m.useState(!0),[v,x]=m.useState(!1),[j,_]=m.useState(""),D=m.useCallback(async()=>{k(!0),_("");try{d(await xs())}catch(M){_(M instanceof Error?M.message:l("serverGroup.loadFailed"))}finally{k(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}D()},[D,s]);function G(M){h({id:M==null?void 0:M.id,name:(M==null?void 0:M.name)??""}),_("")}async function W(M){var Q;if(M.preventDefault(),!!u){x(!0),_("");try{await _x(u),h(null),(Q=window.showToast)==null||Q.call(window,l("serverGroup.saveSuccess"),"success"),await D()}catch(U){_(U instanceof Error?U.message:l("serverGroup.saveFailed"))}finally{x(!1)}}}async function Y(M){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,H;_("");try{await w0(M),(U=window.showToast)==null||U.call(window,l("serverGroup.deleteSuccess"),"success"),await D()}catch(ae){_(ae instanceof Error?ae.message:l("serverGroup.deleteFailed")),(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>G(),children:[t.jsx(Mn,{size:16}),l("serverGroup.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(wt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),M.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Yo,{size:14}),M.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>G(M),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(M.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},M.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:M=>h({...u,name:M.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Dn,{size:16}),l(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function qj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Bj(s){var l;return((l=Nx.find(o=>o.value===s))==null?void 0:l.label)??s}function Gj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(null),[f,k]=m.useState(!0),[v,x]=m.useState(!1),[j,_]=m.useState(""),D=m.useCallback(async()=>{k(!0),_("");try{d(await Sx())}catch(M){_(M instanceof Error?M.message:l("serverRoute.loadFailed"))}finally{k(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}D()},[D,s]);function G(M){h(qj(M)),_("")}async function W(M){var U;if(M.preventDefault(),!u)return;x(!0),_("");const Q=u.action==="default_out"?[]:u.match.split(`
`).map(H=>H.trim()).filter(Boolean);try{await _0({id:u.id,remarks:u.remarks,match:Q,action:u.action,action_value:u.action_value||null}),h(null),(U=window.showToast)==null||U.call(window,l("serverRoute.saveSuccess"),"success"),await D()}catch(H){_(H instanceof Error?H.message:l("serverRoute.saveFailed"))}finally{x(!1)}}async function Y(M){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,H;_("");try{await N0(M),(U=window.showToast)==null||U.call(window,l("serverRoute.deleteSuccess"),"success"),await D()}catch(ae){_(ae instanceof Error?ae.message:l("serverRoute.deleteFailed")),(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:f,children:[t.jsx(Et,{size:16}),l(f?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>G(),children:[t.jsx(Mn,{size:16}),l("serverRoute.add")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,f&&o.length===0?t.jsx(wt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:M.id}),t.jsx("td",{children:t.jsx("strong",{children:M.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(M.match)?M.match:[]).slice(0,3).map((Q,U)=>t.jsx("span",{className:"tag",children:Q},U)),Array.isArray(M.match)&&M.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",M.match.length-3]}):null,!Array.isArray(M.match)||M.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Bj(M.action)})}),t.jsx("td",{children:M.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>G(M),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Y(M.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},M.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:M=>h({...u,remarks:M.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:M=>h({...u,action:M.target.value}),children:Nx.map(M=>t.jsx("option",{value:M.value,children:M.label},M.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:M=>h({...u,match:M.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:M=>h({...u,action_value:M.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Dn,{size:16}),l(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function $j(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Yj(s){const l=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function cn(s){return s==null?"—":En(s)}function Qj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Xj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState([]),[f,k]=m.useState(null),[v,x]=m.useState(!0),[j,_]=m.useState(!1),[D,G]=m.useState(""),[W,Y]=m.useState(""),[M,Q]=m.useState(null),[U,H]=m.useState(null),ae=(S,N)=>{S.dataTransfer.effectAllowed="move",Q(N)},P=(S,N)=>{if(S.preventDefault(),M===null||M===N)return;const E=[...o],I=E[M];E.splice(M,1),E.splice(N,0,I),Q(N),d(E)},de=async()=>{Q(null);try{await gh(o.map(S=>S.id)),await be()}catch(S){G(S instanceof Error?S.message:l("plan.sortFailed")),await be()}},A=(S,N)=>{H(N)},B=S=>{if(U===null)return;const N=S.touches[0],E=document.elementFromPoint(N.clientX,N.clientY);if(!E)return;const I=E.closest("tr, [data-index]");if(!I)return;const me=I.getAttribute("data-index");if(me===null)return;const Ne=Number(me);if(Ne!==U&&Ne>=0&&Ne<o.length){const Ee=[...o],Ue=Ee[U];Ee.splice(U,1),Ee.splice(Ne,0,Ue),H(Ne),d(Ee)}},ne=async()=>{if(U!==null){H(null);try{await gh(o.map(S=>S.id)),await be()}catch(S){G(S instanceof Error?S.message:l("plan.sortFailed")),await be()}}},be=m.useCallback(async()=>{x(!0),G("");try{const[S,N]=await Promise.all([mi(),xs()]);d(S),h(N)}catch(S){G(S instanceof Error?S.message:l("plan.loadFailed"))}finally{x(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}be()},[be,s]);function w(S){k($j(S)),G(""),Y("")}async function R(S){var N,E;if(S.preventDefault(),!!f){_(!0),G(""),Y("");try{await S0(Yj(f)),k(null),(N=window.showToast)==null||N.call(window,l("plan.saveSuccess"),"success"),await be()}catch(I){(E=window.showToast)==null||E.call(window,I instanceof Error?I.message:l("plan.saveFailed"),"error")}finally{_(!1)}}}async function le(S,N){var E;try{await cd(S,{show:N?0:1}),await be()}catch(I){(E=window.showToast)==null||E.call(window,I instanceof Error?I.message:l("plan.toggleFailed"),"error")}}async function $(S,N){var E;try{await cd(S,{renew:N?0:1}),await be()}catch(I){(E=window.showToast)==null||E.call(window,I instanceof Error?I.message:l("plan.toggleFailed"),"error")}}async function ce(S,N){var E;try{await cd(S,{allow_subscribe_url:N?0:1}),await be()}catch(I){(E=window.showToast)==null||E.call(window,I instanceof Error?I.message:l("plan.toggleFailed"),"error")}}async function C(S){var N;(N=window.showConfirm)==null||N.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var E,I;G(""),Y("");try{await k0(S),(E=window.showToast)==null||E.call(window,l("plan.deleteSuccess"),"success"),await be()}catch(me){(I=window.showToast)==null||I.call(window,me instanceof Error?me.message:l("plan.deleteFailed"),"error")}}})}function V(S){var N;return((N=u.find(E=>E.id===S))==null?void 0:N.name)??`#${S}`}function z(S){return Number(S.allow_subscribe_url??1)===1}function ue(S,N){k(E=>E&&{...E,[S]:N})}return t.jsxs(Ft,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:be,disabled:v,children:[t.jsx(Et,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(Mn,{size:16}),l("plan.add")]})]})]}),D?t.jsx("div",{className:"form-error",children:D}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&o.length===0?t.jsx(wt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.allowSubscribeUrl")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((S,N)=>t.jsxs("tr",{draggable:!0,onDragStart:E=>ae(E,N),onDragOver:E=>P(E,N),onDragEnd:de,onTouchStart:E=>A(E,N),onTouchMove:B,onTouchEnd:ne,"data-index":N,className:M===N||U===N?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(ds,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:S.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${S.show?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),le(S.id,S.show)},title:S.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${S.renew?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),$(S.id,S.renew)},title:S.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${z(S)?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ce(S.id,z(S)?1:0)},title:z(S)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:S.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Qo,{size:14}),S.count??0]})}),t.jsx("td",{children:V(S.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[S.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(S.month_price)})]}),S.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(S.quarter_price)})]}),S.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(S.half_year_price)})]}),S.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(S.year_price)})]}),S.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(S.two_year_price)})]}),S.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(S.three_year_price)})]}),S.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(S.onetime_price)})]}),S.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(S.reset_price)})]})]})}),t.jsxs("td",{children:[S.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:E=>{E.stopPropagation(),w(S)},children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:E=>{E.stopPropagation(),C(S.id)},children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},S.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((S,N)=>t.jsxs("div",{className:`mobile-node-card ${M===N||U===N?"dragging":""}`,draggable:!0,onDragStart:E=>ae(E,N),onDragOver:E=>P(E,N),onDragEnd:de,onTouchStart:E=>A(E,N),onTouchMove:B,onTouchEnd:ne,"data-index":N,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(ds,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:S.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:S.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:E=>{E.stopPropagation(),w(S)},children:[t.jsx(Kt,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:E=>{E.stopPropagation(),C(S.id)},children:[t.jsx(en,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${S.show?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),le(S.id,S.show)},title:S.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${S.renew?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),$(S.id,S.renew)},title:S.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${z(S)?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ce(S.id,z(S)?1:0)},title:z(S)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Qo,{size:12,style:{marginRight:4}}),S.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:V(S.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[S.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[S.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:cn(S.month_price)})]}),S.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:cn(S.quarter_price)})]}),S.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:cn(S.half_year_price)})]}),S.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:cn(S.year_price)})]}),S.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:cn(S.two_year_price)})]}),S.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:cn(S.three_year_price)})]}),S.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:cn(S.onetime_price)})]}),S.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:cn(S.reset_price)})]})]})]},S.id)),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:f.name,onChange:S=>ue("name",S.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:f.content,onChange:S=>ue("content",S.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:f.group_id,onChange:S=>ue("group_id",S.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),u.map(S=>t.jsx("option",{value:S.id,children:S.name},S.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:f.transfer_enable,onChange:S=>ue("transfer_enable",S.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.device_limit,onChange:S=>ue("device_limit",S.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.speed_limit,onChange:S=>ue("speed_limit",S.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:f.capacity_limit,onChange:S=>ue("capacity_limit",S.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:f.reset_traffic_method,onChange:S=>ue("reset_traffic_method",S.target.value),children:Qj(l).map(S=>t.jsx("option",{value:S.value,children:S.label},S.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.allow_subscribe_url==="1",onChange:S=>ue("allow_subscribe_url",S.target.checked?"1":"0")}),t.jsx("span",{children:l("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.month_price,onChange:S=>ue("month_price",S.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.quarter_price,onChange:S=>ue("quarter_price",S.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.half_year_price,onChange:S=>ue("half_year_price",S.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.year_price,onChange:S=>ue("year_price",S.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.two_year_price,onChange:S=>ue("two_year_price",S.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.three_year_price,onChange:S=>ue("three_year_price",S.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.onetime_price,onChange:S=>ue("onetime_price",S.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:f.reset_price,onChange:S=>ue("reset_price",S.target.value),placeholder:"—"})]})]}),f.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:f.force_update,onChange:S=>ue("force_update",String(S.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"plan.saving":"common.save")]})]})]})]})}):null]})}const fd="模糊",Oh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Uh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Rh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${h}:${f}`}function Hh(s){const l=new Date(s*1e3),o=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),u=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),f=String(l.getMinutes()).padStart(2,"0"),k=String(l.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${h}:${f}:${k}`}function Lh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Xn(s){return`${En(Number(s??0))} ₫`}const qx="adminzic_user_cache";function Zj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(qx);return s?JSON.parse(s):{}}catch{return{}}}function Kj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(qx,JSON.stringify(s))}catch{}}const fl=(s,l)=>`${s}:${l}`;function Fj(){var fn,rt,on,An,hn;const s=Rt(),l=sa(),{t:o}=Ye(),d=m.useCallback(F=>{switch(F){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${F}`,cls:""}}},[o]),u=m.useCallback(F=>{const Ce=`order.period.${F}`,we=o(Ce);return we===Ce?Uh[F]??F:we},[o]),[h,f]=m.useState([]),[k,v]=m.useState([]),[x,j]=m.useState({}),[_,D]=m.useState(0),[G,W]=m.useState(1),[Y]=m.useState(15),[M,Q]=m.useState(""),[U,H]=m.useState("trade_no"),[ae,P]=m.useState(!0),[de,A]=m.useState(null),[B,ne]=m.useState(!1),[be,w]=m.useState(""),[R,le]=m.useState(""),[$,ce]=m.useState(null),[C,V]=m.useState(null),[z,ue]=m.useState(!1),[S,N]=m.useState(null),[E,I]=m.useState(!1),[me,Ne]=m.useState(()=>Zj()),Ee=m.useCallback((F,Ce)=>{const we=fl(Ce,F);V(null),ce(ye=>ye===we?null:we)},[]),Ue=m.useCallback((F,Ce)=>{const we=fl(Ce,F);ce(null),V(ye=>ye===we?null:we)},[]),Ve=m.useCallback(F=>{const Ce=Number(F.coupon_id??0);return Ce?x[Ce]??`#${Ce}`:null},[x]);m.useEffect(()=>{if(!$&&!C)return;const F=()=>{ce(null),V(null)},Ce=ye=>{const Qe=ye.target;Qe!=null&&Qe.closest(".order-dropdown-trigger, .order-dropdown-menu, .mobile-inline-action-menu")||F()},we=ye=>{ye.key==="Escape"&&F()};return document.addEventListener("pointerdown",Ce),document.addEventListener("keydown",we),()=>{document.removeEventListener("pointerdown",Ce),document.removeEventListener("keydown",we)}},[$,C]),m.useEffect(()=>{const F=new Set;if(h.forEach(we=>{we.user_id&&!me[we.user_id]&&F.add(we.user_id),we.invite_user_id&&!me[we.invite_user_id]&&F.add(we.invite_user_id)}),S&&(S.user_id&&!me[S.user_id]&&F.add(S.user_id),S.invite_user_id&&!me[S.invite_user_id]&&F.add(S.invite_user_id)),F.size===0)return;const Ce=Array.from(F);Promise.allSettled(Ce.map(async we=>{try{const ye=await Cx(we);if(ye&&ye.data)return{id:we,email:ye.data.email,invite_user:ye.data.invite_user}}catch(ye){console.error(`Failed to fetch user ${we}:`,ye)}return null})).then(we=>{const ye={};we.forEach(Qe=>{var He;if(Qe.status==="fulfilled"&&Qe.value){const qe=Qe.value;ye[qe.id]={email:qe.email,invite_user_email:((He=qe.invite_user)==null?void 0:He.email)||null},qe.invite_user&&(ye[qe.invite_user.id]={email:qe.invite_user.email})}}),Object.keys(ye).length>0&&Ne(Qe=>{const He={...Qe,...ye};return Kj(He),He})})},[h,S,me]);const Re={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},et=m.useCallback(async(F=1,Ce,we)=>{var ye,Qe;P(!0),w("");try{let He;if(Ce)if(we==="email"){const nt=(ye=(await Ad(1,1,[{key:"email",condition:fd,value:Ce}])).data)==null?void 0:ye[0];if(!nt){f([]),D(0),P(!1);return}He=[{key:"user_id",condition:"=",value:String(nt.id)}]}else if(we==="invite_user_email"){const nt=(Qe=(await Ad(1,1,[{key:"email",condition:fd,value:Ce}])).data)==null?void 0:Qe[0];if(!nt){f([]),D(0),P(!1);return}He=[{key:"invite_user_id",condition:"=",value:String(nt.id)}]}else He=[{key:we||"trade_no",condition:we==="trade_no"||we==="user_id"||we==="invite_user_id"||we==="plan_id"||we==="status"?"=":fd,value:Ce}];const qe=await C0({current:F,pageSize:Y,filter:He});f(qe.data),D(qe.total)}catch(He){w(He instanceof Error?He.message:o("order.loadFailed"))}finally{P(!1)}},[Y,o]),ft=m.useCallback(F=>{const Ce=String(F);H("user_id"),Q(Ce),ue(!0),W(1),et(1,Ce,"user_id")},[et]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}const F=new URLSearchParams(l.search),Ce=F.get("filter_email"),we=F.get("invite_user_email"),ye=F.get("user_id")||F.get("filter_user_id");let Qe="",He="trade_no";ye?(Qe=ye,He="user_id",H("user_id"),Q(ye),ue(!0)):Ce?(Qe=Ce,He="email",H("email"),Q(Ce),ue(!0)):we&&(Qe=we,He="invite_user_email",H("invite_user_email"),Q(we),ue(!0)),et(1,Qe,He),mi().then(v).catch(()=>{}),kx(1,1e3).then(qe=>{const Xe={};qe.data.forEach(nt=>{Xe[nt.id]=nt.code}),j(Xe)}).catch(()=>{})},[et,s,l.search]);function Qt(){W(1),et(1,M,U)}function Vt(){Q(""),W(1),et(1)}function xt(F){W(F),et(F,M,U)}async function Xt(F){var Ce,we;ce(null),V(null),w(""),le("");try{await z0(F),(Ce=window.showToast)==null||Ce.call(window,o("order.paidSuccess"),"success"),await et(G,M,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.paidFailed"),"error")}}async function ot(F){var Ce,we;ce(null),V(null),w(""),le("");try{await T0(F),(Ce=window.showToast)==null||Ce.call(window,o("order.cancelSuccess"),"success"),await et(G,M,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.cancelFailed"),"error")}}async function Jt(F,Ce){var we,ye;ce(null),V(null),w(""),le("");try{await E0(F,Ce),(we=window.showToast)==null||we.call(window,o("order.commissionSuccess"),"success"),await et(G,M,U)}catch(Qe){(ye=window.showToast)==null||ye.call(window,Qe instanceof Error?Qe.message:o("order.commissionFailed"),"error")}}async function bt(F){N(F),I(!0);try{const Ce=await M0(F.id);Ce&&Ce.data&&N(Ce.data)}catch(Ce){console.error("Failed to fetch order detail:",Ce)}finally{I(!1)}}function Nt(){var F;A({email:"",plan_id:(F=k[0])!=null&&F.id?String(k[0].id):"",period:"month_price",total_amount:"0"}),w(""),le("")}async function je(F){var Ce,we;if(F.preventDefault(),!!de){ne(!0),w(""),le("");try{await Fd({email:de.email,plan_id:Number(de.plan_id),period:de.period,total_amount:Number(de.total_amount)*100}),A(null),(Ce=window.showToast)==null||Ce.call(window,o("order.assignSuccess"),"success"),await et(G,M,U)}catch(ye){(we=window.showToast)==null||we.call(window,ye instanceof Error?ye.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const Mt=Math.ceil(_/Y),Ae=S?Ve(S):null;return t.jsxs(Ft,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${z?"active":""}`,type:"button",onClick:()=>ue(!z),children:[t.jsx(hs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Nt,children:[t.jsx(Mn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void et(G,M,U),disabled:ae,children:[t.jsx(Et,{size:16}),o(ae?"common.refreshing":"common.refresh")]})]}),z&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:U,onChange:F=>H(F.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input search-input",value:M,onChange:F=>Q(F.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:F=>F.key==="Enter"&&Qt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Qt,children:[t.jsx(hs,{size:16}),o("order.filter")]}),M?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Vt,children:[t.jsx(lt,{size:16}),o("order.clearFilter")]}):null]}),be?t.jsx("div",{className:"form-error",children:be}):null,R?t.jsx("div",{className:"form-success",children:R}):null,ae&&h.length===0?t.jsx(wt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ae?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[h.map(F=>{var qe;const Ce=d(F.status),we=F.invite_user_id!==null,ye=Re[F.commission_status]??{label:`#${F.commission_status}`,dotClass:"pending"},Qe=Ve(F),He=(qe=me[F.user_id])==null?void 0:qe.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),title:o("order.detailsTitle"),children:Lh(F.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",F.id]}),t.jsx("span",{className:"order-type-pill",children:Oh[F.type]??`#${F.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[He?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),title:o("order.filterByUser"),children:He}):t.jsxs("span",{className:"order-subline",children:["ID: ",F.user_id]}),t.jsx("strong",{className:"order-plan-name",children:F.plan_name??`Plan #${F.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u(F.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Xn(F.total_amount)}),Qe?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Qe]}):null,Number(F.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Xn(F.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.cls.replace("status-","")}`}),t.jsx("span",{children:Ce.label}),F.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Xe=>{Xe.stopPropagation(),Ee(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),$===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Xe=>Xe.stopPropagation(),onClick:Xe=>Xe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),Xt(F.trade_no)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{ce(null),ot(F.trade_no)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[we?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Xn(F.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{children:ye.label}),F.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Xe=>{Xe.stopPropagation(),Ue(F.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),C===fl("desktop",F.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Xe=>Xe.stopPropagation(),onClick:Xe=>Xe.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Rh(F.created_at)})})]},F.trade_no)}),!ae&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),Mt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:G<=1,onClick:()=>xt(G-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[G," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:G>=Mt,onClick:()=>xt(G+1),children:t.jsx(Da,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(F=>{var dn;const Ce=d(F.status),we=F.invite_user_id!==null,ye=Re[F.invite_user_id!==null?F.commission_status:0]??{label:`#${F.commission_status}`,dotClass:"pending"},Qe=(dn=me[F.user_id])==null?void 0:dn.email,He=Ve(F),qe=fl("mobile",F.trade_no),Xe=fl("mobile",F.trade_no),nt=$===qe||C===Xe;return t.jsxs("div",{className:`mobile-order-card${nt?" is-menu-open":""}`,children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>bt(F),children:Lh(F.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",F.id]})]}),t.jsx("div",{className:"mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ce.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ce.label}),F.status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Ee(F.trade_no,"mobile")},"aria-expanded":$===qe,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),$===qe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),Xt(F.trade_no)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{ce(null),ot(F.trade_no)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Qe?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>ft(F.user_id),children:Qe}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",F.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Oh[F.type]??`#${F.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:F.plan_name??`Plan #${F.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u(F.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Xn(F.total_amount)})]}),He?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:He})})]}):null,Number(F.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Xn(F.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:we?t.jsx("strong",{children:Xn(F.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),we&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsx("div",{className:"value mobile-order-action-wrap",children:t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ye.label}),F.commission_status===0&&t.jsxs("button",{type:"button",className:"mobile-action-button order-dropdown-trigger",onClick:Ct=>{Ct.stopPropagation(),Ue(F.trade_no,"mobile")},"aria-expanded":C===Xe,children:[o("order.markAs"),t.jsx(Ea,{size:12,style:{display:"inline",strokeWidth:3}})]})]})})]}),C===Xe&&t.jsxs("div",{className:"mobile-inline-action-menu",onPointerDown:Ct=>Ct.stopPropagation(),onClick:Ct=>Ct.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,1)},children:[t.jsx(Mo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"mobile-inline-action-item",onClick:()=>{V(null),Jt(F.trade_no,3)},children:[t.jsx(Di,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Rh(F.created_at)})]})]})]},F.trade_no)}),!ae&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,Mt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:G<=1,onClick:()=>xt(G-1),children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[G," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:G>=Mt,onClick:()=>xt(G+1),children:t.jsx(Da,{size:16})})]}):null]})]}),S?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:E?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(wt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(fn=me[S.user_id])!=null&&fn.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{N(null),ft(S.user_id)},title:"Filter by this user",children:me[S.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",S.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:S.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(S.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(S.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:S.plan_name??`Plan #${S.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:S.callback_no||"-"})]}),Ae?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:Ae})]}):null]}),S.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(rt=me[S.invite_user_id])!=null&&rt.email||(on=me[S.user_id])!=null&&on.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const F=String(S.invite_user_id);H("invite_user_id"),Q(F),ue(!0),N(null),et(1,F,"invite_user_id")},title:"Filter by this inviter",children:((An=me[S.invite_user_id])==null?void 0:An.email)||((hn=me[S.user_id])==null?void 0:hn.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",S.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Xn(S.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Re[S.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Re[S.commission_status]??{label:`#${S.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Xn(S.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Xn(S.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Xn(S.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Xn(S.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Xn(S.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Hh(S.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Hh(S.updated_at)})]})]})]})})]})}):null,de?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>A(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:je,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:de.email,onChange:F=>A({...de,email:F.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:de.plan_id,onChange:F=>A({...de,plan_id:F.target.value}),children:k.map(F=>t.jsx("option",{value:F.id,children:F.name},F.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:de.period,onChange:F=>A({...de,period:F.target.value}),children:Object.entries(Uh).map(([F,Ce])=>t.jsx("option",{value:F,children:Ce},F))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:de.total_amount,onChange:F=>A({...de,total_amount:F.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:B,children:[t.jsx(Dn,{size:16}),o(B?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Oo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Uo(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function hd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Vj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(0),[f,k]=m.useState(1),[v,x]=m.useState([]),[j,_]=m.useState(null),[D,G]=m.useState(!0),[W,Y]=m.useState(!1),[M,Q]=m.useState(""),[U,H]=m.useState(""),[ae,P]=m.useState("");m.useEffect(()=>{j||P("")},[j]);const de=m.useCallback(async(w=1)=>{G(!0),Q("");try{const R=await kx(w,15);d(R.data),h(R.total)}catch(R){Q(R instanceof Error?R.message:l("coupon.loadFailed"))}finally{G(!1)}},[]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}de(1),mi().then(x).catch(()=>{})},[de,s]);async function A(w){var R,le;if(w.preventDefault(),!!j){Y(!0),Q(""),H("");try{const $=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await D0({id:j.id,name:j.name,type:Number(j.type),value:$,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,limit_use_with_user:j.limit_use_with_user?Number(j.limit_use_with_user):null,limit_plan_ids:j.limit_plan_ids.length?j.limit_plan_ids:null,limit_period:j.limit_period.length?j.limit_period:null,generate_count:j.generate_count?Number(j.generate_count):void 0}),_(null),(R=window.showToast)==null||R.call(window,l("coupon.saveSuccess"),"success"),await de(f)}catch($){(le=window.showToast)==null||le.call(window,$ instanceof Error?$.message:l("coupon.saveFailed"),"error")}finally{Y(!1)}}}async function B(w){var R;try{await O0(w),await de(f)}catch(le){(R=window.showToast)==null||R.call(window,le instanceof Error?le.message:l("coupon.toggleFailed"),"error")}}async function ne(w){var R;(R=window.showConfirm)==null||R.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var le,$;try{await A0(w),(le=window.showToast)==null||le.call(window,l("coupon.deleteSuccess"),"success"),await de(f)}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:l("coupon.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[u," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void de(f),disabled:D,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(hd()),children:[t.jsx(Mn,{size:16}),l("coupon.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,U?t.jsx("div",{className:"form-success",children:U}):null,D&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var ce,C;const R=(ce=w.limit_plan_ids)==null?void 0:ce.map(V=>{var z;return((z=v.find(ue=>ue.id===V))==null?void 0:z.name)||`#${V}`}).join(", "),le=Uo(l),$=(C=w.limit_period)==null?void 0:C.map(V=>le[V]||V).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?En(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",w.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",R]})}):null,$?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",$]})}):null,!R&&!$?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void B(w.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>_(hd(w)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},w.id)}),!D&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var R,le,$,ce;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{di(w.code).then(C=>{var V;(V=window.showToast)==null||V.call(window,C?`${l("coupon.copiedCode")}: ${w.code}`:l("common.copyFailed"),C?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(R=w.limit_plan_ids)!=null&&R.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(C=>{const V=v.find(z=>z.id===C);return t.jsx("span",{className:"res-pill plan-pill",children:V?V.name:`#${C}`},C)})})]}):null,(le=w.limit_period)!=null&&le.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(C=>t.jsx("span",{className:"res-pill cycle-pill",children:Uo(l)[C]||C},C))})]}):null,!(($=w.limit_plan_ids)!=null&&$.length)&&!((ce=w.limit_period)!=null&&ce.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void B(w.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?En(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",w.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>_(hd(w)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},w.id)}),!D&&o.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{k(f-1),de(f-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",be]}),t.jsx("button",{className:"mini-button",disabled:f>=be,onClick:()=>{k(f+1),de(f+1)},children:t.jsx(Da,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:w=>_({...j,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:j.type,onChange:w=>_({...j,type:w.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:w=>_({...j,value:w.target.value})})]})]}),j.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:j.code,onChange:w=>_({...j,code:w.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:w=>_({...j,started_at:w.target.value}),onClick:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:w=>_({...j,ended_at:w.target.value}),onClick:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:w=>_({...j,limit_use:w.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use_with_user,onChange:w=>_({...j,limit_use_with_user:w.target.value}),placeholder:l("coupon.unlimited")})]})]}),j.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:w=>_({...j,generate_count:w.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),j.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_plan_ids.map(w=>{const R=v.find(le=>le.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const le=j.limit_plan_ids.filter($=>$!==w);_({...j,limit_plan_ids:le})},children:[R?R.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:ae,onChange:w=>P(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(w=>w.name.toLowerCase().includes(ae.toLowerCase())).map(w=>{const R=j.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:le=>{const $=le.target.checked?[...j.limit_plan_ids,w.id]:j.limit_plan_ids.filter(ce=>ce!==w.id);_({...j,limit_plan_ids:$})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),j.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:j.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=j.limit_period.filter(le=>le!==w);_({...j,limit_period:R})},children:[Uo(l)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Uo(l)).map(([w,R])=>{const le=j.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:le,onChange:$=>{const ce=$.target.checked?[...j.limit_period,w]:j.limit_period.filter(C=>C!==w);_({...j,limit_period:ce})}}),t.jsx("span",{children:R})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Dn,{size:16}),l(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ro(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Jj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function xd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Pj(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(0),[f,k]=m.useState(1),[v,x]=m.useState([]),[j,_]=m.useState(null),[D,G]=m.useState(!0),[W,Y]=m.useState(!1),[M,Q]=m.useState(""),[U,H]=m.useState(""),[ae,P]=m.useState("");m.useEffect(()=>{j||P("")},[j]);const de=Jj(l),A=m.useCallback(async(w=1)=>{G(!0),Q("");try{const R=await U0(w,15);d(R.data),h(R.total)}catch(R){Q(R instanceof Error?R.message:l("giftcard.loadFailed"))}finally{G(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}A(1),mi().then(x).catch(()=>{})},[A,s]);async function B(w){var R,le;if(w.preventDefault(),!!j){Y(!0),Q(""),H("");try{const $=j.type==="1"?Math.round(Number(j.value)*100):Number(j.value);await R0({id:j.id,name:j.name,type:Number(j.type),value:$,code:j.code||void 0,started_at:Math.floor(new Date(j.started_at).getTime()/1e3),ended_at:Math.floor(new Date(j.ended_at).getTime()/1e3),limit_use:j.limit_use?Number(j.limit_use):null,plan_id:j.plan_id?Number(j.plan_id):null,generate_count:j.generate_count?Number(j.generate_count):void 0}),_(null),(R=window.showToast)==null||R.call(window,l("giftcard.saveSuccess"),"success"),await A(f)}catch($){(le=window.showToast)==null||le.call(window,$ instanceof Error?$.message:l("giftcard.saveFailed"),"error")}finally{Y(!1)}}}async function ne(w){var R;(R=window.showConfirm)==null||R.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var le,$;try{await H0(w),(le=window.showToast)==null||le.call(window,l("giftcard.deleteSuccess"),"success"),await A(f)}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:l("giftcard.deleteFailed"),"error")}}})}const be=Math.ceil(u/15);return t.jsxs(Ft,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[u," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(f),disabled:D,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(xd()),children:[t.jsx(Mn,{size:16}),l("giftcard.add")]})]})]}),M?t.jsx("div",{className:"form-error",children:M}):null,U?t.jsx("div",{className:"form-success",children:U}):null,D&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var R;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:de[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?En(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=v.find(le=>le.id===w.plan_id))==null?void 0:R.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Ro(w.started_at)," — ",Ro(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>_(xd(w)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},w.id)}),!D&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var R;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:de[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{di(w.code).then(le=>{var $;($=window.showToast)==null||$.call(window,le?l("giftcard.copiedCode").replace("{code}",w.code):l("common.copyFailed"),le?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((R=v.find(le=>le.id===w.plan_id))==null?void 0:R.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ro(w.started_at)," — ",Ro(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?En(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":de[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>_(xd(w)),"aria-label":l("common.edit"),children:t.jsx(Kt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":l("common.delete"),children:t.jsx(en,{size:15})})]})]})]},w.id)}),!D&&o.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),be>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:f<=1,onClick:()=>{k(f-1),A(f-1)},children:t.jsx(Ma,{size:16})}),t.jsxs("span",{className:"page-info",children:[f," / ",be]}),t.jsx("button",{className:"mini-button",disabled:f>=be,onClick:()=>{k(f+1),A(f+1)},children:t.jsx(Da,{size:16})})]}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:B,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:j.name,onChange:w=>_({...j,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:j.type,onChange:w=>_({...j,type:w.target.value}),children:Object.entries(de).map(([w,R])=>t.jsx("option",{value:w,children:R},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:j.value,onChange:w=>_({...j,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.started_at,onChange:w=>_({...j,started_at:w.target.value}),onClick:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:j.ended_at,onChange:w=>_({...j,ended_at:w.target.value}),onClick:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)},onFocus:w=>{var R,le;return(le=(R=w.currentTarget).showPicker)==null?void 0:le.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.limit_use,onChange:w=>_({...j,limit_use:w.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),j.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:j.generate_count,onChange:w=>_({...j,generate_count:w.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),j.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=v.find(R=>String(R.id)===j.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{_({...j,plan_id:""})},children:[w?w.name:`#${j.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:ae,onChange:w=>P(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!j.plan_id,onChange:()=>{_({...j,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),v.filter(w=>w.name.toLowerCase().includes(ae.toLowerCase())).map(w=>{const R=String(w.id)===j.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:le=>{le.target.checked&&_({...j,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Dn,{size:16}),l(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const ss="Tương đối",Ca="=";function Ho(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Wj(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function qh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function bd(s){return+(s/1073741824).toFixed(2)}function gd(s){return Math.round(s*1073741824)}function Lo(s){return(s/1073741824).toFixed(2)}function Ij(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function hl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const qd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Bx="user_visible_columns";function ew(){if(typeof window<"u")try{const s=localStorage.getItem(Bx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(qd.filter(s=>s.defaultVisible).map(s=>s.key))}const Xo=[{value:"email",label:"Email",condition:ss,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:Ca,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:Ca,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:Ca,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:Ca,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:ss,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:Ca,placeholder:"12345"},{value:"uuid",label:"UUID",condition:ss,placeholder:"UUID"},{value:"token",label:"Token",condition:ss,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:ss,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:Ca,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:Ca,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:Ca,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:Ca,placeholder:"1780366403"}],tw=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function sn(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function nw(s,l){var u;const o=((u=Xo.find(h=>h.value===s))==null?void 0:u.label)??s,d=h=>{const f=l(h);return f===h?o:f};switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return l("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function yd(s){return Xo.find(l=>l.value===s)??Xo[0]}function aw(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function iw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=m.useState([]),[h,f]=m.useState([]),[k,v]=m.useState([]),[x,j]=m.useState(0),[_,D]=m.useState(1),[G,W]=m.useState(""),[Y,M]=m.useState("email"),[Q,U]=m.useState(!0),[H,ae]=m.useState(""),[P,de]=m.useState(ew),[A,B]=m.useState(!1),ne=m.useRef(null),[be,w]=m.useState(null),[R,le]=m.useState(null),[$,ce]=m.useState(null),[C,V]=m.useState({}),[z,ue]=m.useState(!1),[S,N]=m.useState(!1),[E,I]=m.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[me,Ne]=m.useState(!1),[Ee,Ue]=m.useState(null),[Ve,Re]=m.useState({plan_id:"",period:"month_price",total_amount:""}),[et,ft]=m.useState(!1),[Qt,Vt]=m.useState(null),[xt,Xt]=m.useState(null),[ot,Jt]=m.useState([]),[bt,Nt]=m.useState(0),[je,Mt]=m.useState(1),[Ae]=m.useState(10),[fn,rt]=m.useState(!1),[on,An]=m.useState("");m.useEffect(()=>{function y(fe){const he=fe.target instanceof Element?fe.target:null;be!==null&&(!he||!he.closest(".action-dropdown-wrap, .mobile-action-sheet, .action-dropdown-menu-fixed"))&&(w(null),le(null)),A&&ne.current&&!ne.current.contains(fe.target)&&B(!1)}return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[be,A]),m.useEffect(()=>{if(be===null)return;const y=()=>{w(null),le(null)};return window.addEventListener("resize",y),window.addEventListener("scroll",y,!0),()=>{window.removeEventListener("resize",y),window.removeEventListener("scroll",y,!0)}},[be]);function hn(y,fe){if(be===y){w(null),le(null);return}const he=fe.getBoundingClientRect(),Te=220,tt=392,xn=6,qt=8,Wn=Math.max(qt,Math.min(window.innerWidth-Te-qt,he.right-Te)),Oa=he.bottom+xn+tt<=window.innerHeight-qt?he.bottom+xn:Math.max(qt,he.top-tt-xn);le({top:Oa,left:Wn}),w(y)}function F(){w(null),le(null)}function Ce(y,fe=!1,he=""){const Te=tt=>{F(),tt()};return t.jsxs("div",{className:`action-dropdown-menu ${fe?"action-dropdown-menu-fixed":""} ${he}`.trim(),style:fe&&R?{top:R.top,left:R.left}:void 0,onMouseDown:tt=>tt.stopPropagation(),children:[t.jsxs("button",{type:"button",onClick:()=>Te(()=>oa(y)),children:[t.jsx(Kt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>gt(y)),children:[t.jsx(bx,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>void oe(y)),children:[t.jsx(Ta,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>Be(y)),children:[t.jsx(Ed,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>ee(y)),children:[t.jsx(Zd,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>We(y)),children:[t.jsx(zv,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>g(y)),children:[t.jsx(zd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>se(y)),children:[t.jsx(Qo,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Te(()=>_e(y)),children:[t.jsx(mh,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Te(()=>ke(y)),children:[t.jsx(en,{size:14}),o("user.actionDelete")]})]})}function we(y){de(fe=>{const he=new Set(fe);he.has(y)?he.delete(y):he.add(y);try{localStorage.setItem(Bx,JSON.stringify([...he]))}catch{}return he})}const ye=y=>P.has(y),Qe=qd.filter(y=>P.has(y.key)).length,He=m.useCallback(async(y=1,fe,he)=>{U(!0),ae("");try{const Te=fe==null?void 0:fe.trim(),tt=yd(he||"email"),xn=Te?[{key:tt.value,condition:tt.condition,value:Te}]:void 0,qt=await Ad(y,15,xn);u(qt.data),j(qt.total)}catch(Te){ae(Te instanceof Error?Te.message:o("user.loadFailed"))}finally{U(!1)}},[]),qe=m.useCallback(async()=>{try{const[y,fe]=await Promise.all([mi(),xs()]);f(y),v(fe)}catch{}},[]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}const y=new URLSearchParams(l.search),he=[["email",y.get("email")||y.get("filter_email")],["id",y.get("id")||y.get("user_id")||y.get("filter_user_id")],["plan_id",y.get("plan_id")],["invite_user_id",y.get("invite_user_id")],["invite_by_email",y.get("invite_by_email")],["uuid",y.get("uuid")],["token",y.get("token")],["remarks",y.get("remarks")]].find(([,Te])=>Te==null?void 0:Te.trim());if(he){const[Te,tt]=he,xn=yd(Te),qt=(tt==null?void 0:tt.trim())??"";M(xn.value),W(qt),D(1),He(1,qt,xn.value)}else He(1);qe()},[He,qe,s,l.search]);function Xe(){D(1),He(1,G,Y)}function nt(){W(""),D(1),He(1)}function dn(y){D(y),He(y,G,Y)}function Ct(y){if(y.plan_name)return y.plan_name;if(!y.plan_id)return"—";const fe=h.find(he=>he.id===y.plan_id);return fe?fe.name:`#${y.plan_id}`}function Pn(y){if(!y.group_id)return"—";const fe=k.find(he=>he.id===y.group_id);return fe?fe.name:`#${y.group_id}`}function Lt(y,fe){const he=o(y);return he===y?fe:he}function un(y){const fe=Number(y.device_limit??0);return fe>0?`${Number(y.device_bound_count??0)} / ${fe}`:Lt("user.unlimited","Unlimited")}function Zn(y){const fe=Number(y.device_bound_count??0),he=Number(y.device_pending_count??0),Te=Number(y.device_banned_count??0),tt=Number(y.device_online_count??0),xn=Number(y.alive_ip??0),qt=Number(y.device_limit??0),Wn=qt>0?`${fe} / ${qt}`:`${fe} / ${Lt("user.unlimited","Unlimited")}`,ra=[`${Lt("user.deviceBound","Bound")}: ${Wn}`,`${Lt("user.devicePending","Pending")}: ${he}`,`${Lt("user.deviceBanned","Banned")}: ${Te}`,`${Lt("user.deviceOnline","Online devices")}: ${tt}`,`${Lt("user.deviceOnlineIp","Online IP")}: ${xn}`];return y.ips&&ra.push(y.ips),ra.join(`
`)}function pn(y){s.push(`/device?user_id=${encodeURIComponent(String(y.id))}`)}function L(y,fe="left"){const he=`${Lt("user.deviceOnlineShort","Online")}: ${Number(y.device_online_count??0)} | ${Lt("user.deviceIpShort","IP")}: ${Number(y.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${fe==="right"?"align-right":""}`,type:"button",title:Zn(y),onClick:()=>pn(y),children:[t.jsx("span",{className:"device-cell-primary",children:un(y)}),t.jsx("span",{className:"device-cell-secondary",children:he})]})}async function oe(y){var Te,tt;const fe=y.subscribe_url;if(!fe){(Te=window.showToast)==null||Te.call(window,o("user.toastNoSubscribeUrl"),"error");return}const he=await di(fe);(tt=window.showToast)==null||tt.call(window,o(he?"user.toastUrlCopied":"common.copyFailed"),he?"success":"error"),w(null)}function ee(y){var fe;w(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var he,Te;try{await G0(y.id),(he=window.showToast)==null||he.call(window,o("user.toastSecretResetSuccess"),"success"),await He(_,G,Y)}catch(tt){(Te=window.showToast)==null||Te.call(window,tt instanceof Error?tt.message:o("user.toastSecretResetFailed"),"error")}}})}function ke(y){var fe;w(null),(fe=window.showConfirm)==null||fe.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var he,Te;try{await q0(y.id),(he=window.showToast)==null||he.call(window,o("user.toastDeletedSuccess"),"success"),await He(_,G,Y)}catch(tt){(Te=window.showToast)==null||Te.call(window,tt instanceof Error?tt.message:o("user.toastDeletedFailed"),"error")}}})}function Be(y){var he;w(null);const fe=y.subscribe_url;if(!fe){(he=window.showToast)==null||he.call(window,o("user.toastNoSubscribeUrl"),"error");return}Vt({url:fe,userId:y.id})}function We(y){w(null),s.push(`/order?user_id=${y.id}`)}function g(y){w(null),s.push(`/subscription?user_id=${y.id}`)}function se(y){w(null),M("invite_user_id"),W(String(y.id)),He(1,String(y.id),"invite_user_id")}async function pe(y,fe){rt(!0),An("");try{const he=await K0(y,fe,Ae);Jt(he.data||[]),Nt(he.total||0),Mt(fe)}catch(he){An(he instanceof Error?he.message:o("user.historyLoading"))}finally{rt(!1)}}function _e(y){w(null),Xt(y),pe(y.id,1)}function gt(y){w(null),Ue(y.email),Re({plan_id:"",period:"month_price",total_amount:""})}async function On(y){var fe,he;if(y.preventDefault(),!!Ee){ft(!0);try{await Fd({email:Ee,plan_id:Number(Ve.plan_id),period:Ve.period,total_amount:(Number(Ve.total_amount)||0)*100}),(fe=window.showToast)==null||fe.call(window,o("user.toastAssignSuccess"),"success"),Ue(null)}catch(Te){(he=window.showToast)==null||he.call(window,Te instanceof Error?Te.message:o("user.toastAssignFailed"),"error")}finally{ft(!1)}}}function oa(y){w(null),ce(y),V({id:y.id,email:y.email,invite_user_email:"",password:"",balance:y.balance,commission_balance:y.commission_balance,u:bd(y.u),d:bd(y.d),transfer_enable:bd(y.transfer_enable),device_limit:y.device_limit,network_settings:y.network_settings??"",expired_at:Wj(y.expired_at),plan_id:y.plan_id,banned:y.banned,commission_type:y.commission_type??0,commission_rate:y.commission_rate??"",discount:y.discount??"",speed_limit:y.speed_limit,is_admin:y.is_admin,is_staff:y.is_staff,remarks:y.remarks??""})}function yt(y,fe){V(he=>({...he,[y]:fe}))}async function Kn(y){var fe,he;if(y.preventDefault(),!!$){ue(!0);try{const Te={id:$.id,email:C.email,plan_id:C.plan_id||null,expired_at:qh(String(C.expired_at??"")),transfer_enable:gd(Number(C.transfer_enable??0)),speed_limit:C.speed_limit||null,device_limit:C.device_limit||null,u:gd(Number(C.u??0)),d:gd(Number(C.d??0)),balance:Number(C.balance??0),commission_balance:Number(C.commission_balance??0),commission_rate:C.commission_rate!==""&&C.commission_rate!==null?Number(C.commission_rate):null,commission_type:Number(C.commission_type??0),discount:C.discount!==""&&C.discount!==null?Number(C.discount):null,network_settings:C.network_settings||null,remarks:C.remarks||null,is_admin:Number(C.is_admin??0),is_staff:Number(C.is_staff??0),banned:Number(C.banned??0)};C.invite_user_email&&(Te.invite_user_email=C.invite_user_email),C.password&&(Te.password=C.password),await L0(Te),(fe=window.showToast)==null||fe.call(window,o("user.toastSaveSuccess"),"success"),ce(null),await He(_,G,Y)}catch(Te){(he=window.showToast)==null||he.call(window,Te instanceof Error?Te.message:o("user.toastSaveFailed"),"error")}finally{ue(!1)}}}async function Dt(y){var fe,he;y.preventDefault(),Ne(!0);try{await B0({email_prefix:E.email_prefix,email_suffix:E.email_suffix,password:E.password||void 0,plan_id:E.plan_id?Number(E.plan_id):void 0,expired_at:qh(E.expired_at)}),(fe=window.showToast)==null||fe.call(window,o("user.toastCreateSuccess"),"success"),N(!1),I({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await He(_,G,Y)}catch(Te){(he=window.showToast)==null||he.call(window,Te instanceof Error?Te.message:o("user.toastCreateFailed"),"error")}finally{Ne(!1)}}const St=Math.ceil(x/15),Aa=yd(Y);return t.jsxs(Ft,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[x," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>B(!A),children:[t.jsx(wv,{size:16}),o("user.columns")]}),A?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:Qe})})}),qd.map(y=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:P.has(y.key),onChange:()=>we(y.key)}),t.jsx("span",{children:sn(y.key,o)})]},y.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void He(_,G,Y),disabled:Q,children:[t.jsx(Et,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(!0),children:[t.jsx(Mn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:Y,onChange:y=>M(y.target.value),children:Xo.map(y=>t.jsx("option",{value:y.value,children:nw(y.value,o)},y.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input search-input",value:G,onChange:y=>W(y.target.value),placeholder:Aa.placeholder,onKeyDown:y=>y.key==="Enter"&&Xe()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Xe,children:[t.jsx(hs,{size:16}),o("user.filter")]}),G?t.jsxs("button",{className:"ghost-button",type:"button",onClick:nt,children:[t.jsx(lt,{size:16}),o("user.clearFilter")]}):null]}),H?t.jsx("div",{className:"form-error",children:H}):null,Q&&d.length===0?t.jsx(wt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${Q?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(y=>{const fe=Lo(y.u+y.d),he=Lo(y.transfer_enable),Te=parseFloat(fe);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",y.id]}),t.jsx("span",{className:"user-email",title:y.email,children:y.email})]}),y.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ct(y)," / ",y.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Pn(y)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Te>0?Te>parseFloat(he)*.9?"high":"ok":""}`,children:[fe," GB"]})," / ",he," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("devices",o)}),t.jsx("span",{className:"info-val",children:L(y,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("expires",o)}),t.jsx("span",{className:"info-val",children:y.expired_at?t.jsx("span",{className:`expiry-date ${y.expired_at<Date.now()/1e3?"expired":""}`,children:Ho(y.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(y.balance/100).toFixed(2)," ₫ / ",(y.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:sn("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Ho(y.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${be===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(be===y.id?null:y.id),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===y.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:tt=>tt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:y.email}),t.jsxs("small",{children:["#",y.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(lt,{size:16})})]}),Ce(y,!1,"mobile-action-menu")]})}):null]})})]},y.id)}),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:sn("id",o)}),ye("email")&&t.jsx("th",{children:sn("email",o)}),ye("status")&&t.jsx("th",{children:sn("status",o)}),ye("plan")&&t.jsx("th",{children:sn("plan",o)}),ye("group")&&t.jsx("th",{children:sn("group",o)}),ye("used")&&t.jsx("th",{children:sn("used",o)}),ye("traffic")&&t.jsx("th",{children:sn("traffic",o)}),ye("devices")&&t.jsx("th",{children:sn("devices",o)}),ye("expires")&&t.jsx("th",{children:sn("expires",o)}),ye("balance")&&t.jsx("th",{children:sn("balance",o)}),ye("commission")&&t.jsx("th",{children:sn("commission",o)}),ye("joined")&&t.jsx("th",{children:sn("joined",o)}),ye("actions")&&t.jsx("th",{children:sn("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(y=>{const fe=Lo(y.u+y.d),he=Lo(y.transfer_enable),Te=parseFloat(fe);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:y.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:y.email})}),ye("status")&&t.jsx("td",{children:y.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Ct(y)}),ye("group")&&t.jsx("td",{children:y.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Pn(y)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Te>0?Te>parseFloat(he)*.9?"high":"ok":""}`,children:fe})}),ye("traffic")&&t.jsx("td",{children:he}),ye("devices")&&t.jsx("td",{children:L(y)}),ye("expires")&&t.jsx("td",{children:y.expired_at?t.jsx("span",{className:`expiry-date ${y.expired_at<Date.now()/1e3?"expired":""}`,children:Ho(y.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(y.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(y.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Ho(y.created_at)})}),ye("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${be===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:tt=>hn(y.id,tt.currentTarget),children:[o("user.colActions")," ",t.jsx(Ea,{size:14})]}),be===y.id&&R?ax.createPortal(Ce(y,!0),document.body):null]})})]},y.id)}),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:Qe,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),St>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:_<=1,onClick:()=>dn(_-1),children:t.jsx(Ma,{size:16})}),Array.from({length:Math.min(5,St)},(y,fe)=>{let he;return St<=5||_<=3?he=fe+1:_>=St-2?he=St-4+fe:he=_-2+fe,t.jsx("button",{className:`mini-button ${he===_?"active-page":""}`,onClick:()=>dn(he),children:he},he)}),St>5?t.jsxs("span",{className:"page-info",children:["… ",St]}):null,t.jsx("button",{className:"mini-button",disabled:_>=St,onClick:()=>dn(_+1),children:t.jsx(Da,{size:16})})]})}):null]}),$?t.jsx("div",{className:"modal-backdrop",onClick:()=>ce(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Kn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(C.email??""),onChange:y=>yt("email",y.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(C.invite_user_email??""),onChange:y=>yt("invite_user_email",y.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(C.password??""),onChange:y=>yt("password",y.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(C.balance??0)/100).toFixed(2)),onChange:y=>yt("balance",Math.round(Number(y.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(C.commission_balance??0)/100).toFixed(2)),onChange:y=>yt("commission_balance",Math.round(Number(y.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(C.u??0),onChange:y=>yt("u",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(C.d??0),onChange:y=>yt("d",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(C.transfer_enable??0),onChange:y=>yt("transfer_enable",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(C.device_limit??""),onChange:y=>yt("device_limit",y.target.value?Number(y.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(C.network_settings??""),onChange:y=>yt("network_settings",y.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(C.expired_at??""),onChange:y=>yt("expired_at",y.target.value),onClick:y=>{var fe,he;return(he=(fe=y.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:y=>{var fe,he;return(he=(fe=y.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(C.plan_id??""),onChange:y=>yt("plan_id",y.target.value?Number(y.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(C.banned??0),onChange:y=>yt("banned",Number(y.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(C.commission_type??0),onChange:y=>yt("commission_type",Number(y.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(C.commission_rate??""),onChange:y=>yt("commission_rate",y.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(C.discount??""),onChange:y=>yt("discount",y.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(C.speed_limit??""),onChange:y=>yt("speed_limit",y.target.value?Number(y.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${C.is_admin?"active":""}`,onClick:()=>yt("is_admin",C.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${C.is_staff?"active":""}`,onClick:()=>yt("is_staff",C.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(C.remarks??""),onChange:y=>yt("remarks",y.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ce(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:z,children:o(z?"common.processing":"common.save")})]})]})]})}):null,S?t.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Dt,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:E.email_prefix,onChange:y=>I({...E,email_prefix:y.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:E.email_suffix,onChange:y=>I({...E,email_suffix:y.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:E.password,onChange:y=>I({...E,password:y.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:E.plan_id,onChange:y=>I({...E,plan_id:y.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:E.expired_at,onChange:y=>I({...E,expired_at:y.target.value}),onClick:y=>{var fe,he;return(he=(fe=y.currentTarget).showPicker)==null?void 0:he.call(fe)},onFocus:y=>{var fe,he;return(he=(fe=y.currentTarget).showPicker)==null?void 0:he.call(fe)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:me,children:o(me?"user.creating":"user.createUser")})]})]})]})}):null,Ee?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ue(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ue(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:On,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:Ee})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Ve.plan_id,onChange:y=>Re({...Ve,plan_id:y.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Ve.period,onChange:y=>Re({...Ve,period:y.target.value}),children:tw.map(y=>t.jsx("option",{value:y.value,children:aw(y.value,o)},y.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Ve.total_amount,onChange:y=>Re({...Ve,total_amount:y.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ue(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:et,children:o(et?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Qt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Vt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Vt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Qt.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Qt.userId})})]})]})}):null,xt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Xt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:xt.email,id:xt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[on?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:on}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((y,fe)=>y+fe.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((y,fe)=>y+fe.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:hl(ot.reduce((y,fe)=>y+fe.u+fe.d,0))})]})]}),fn?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(wt,{label:o("user.historyLoading")})}):ot.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(mh,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:ot.map(y=>{const fe=hl(y.u),he=hl(y.d),Te=hl(y.u+y.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Ij(y.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(y.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:fe}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Te})]},y.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((je-1)*Ae+1,bt),end:Math.min(je*Ae,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:je<=1,onClick:()=>pe(xt.id,je-1),children:[t.jsx(Ma,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:je*Ae>=bt,onClick:()=>pe(xt.id,je+1),children:[o("user.historyNext"),t.jsx(Da,{size:16})]})]})]})]})]})]})}):null]})}function lw(s,l=8,o=4){return s.length<=l+o+3?s:`${s.slice(0,l)}...${s.slice(-o)}`}function us({value:s,onCopy:l,className:o="",copyClassName:d="",prefixLength:u=8,suffixLength:h=4}){const{t:f}=Ye(),[k,v]=m.useState(!1),x=k?s:lw(s,u,h);return t.jsxs("span",{className:`masked-uuid ${o}`.trim(),children:[t.jsxs("button",{className:`copy-value masked-uuid-copy ${d}`.trim(),type:"button",title:f("uuid.copy"),onClick:()=>void l(),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono masked-uuid-text",title:k?s:x,children:x})]}),t.jsx("button",{className:"masked-uuid-toggle",type:"button",title:f(k?"uuid.hide":"uuid.showFull"),"aria-label":f(k?"uuid.hide":"uuid.showFull"),onClick:()=>v(j=>!j),children:k?t.jsx(kv,{size:14}):t.jsx(Cv,{size:14})})]})}const Bh=15,Gh=20,sw=["email","id","user_id","plan_id","status"],ow=["month_price","quarter_price","half_year_price","year_price","two_year_price","three_year_price","onetime_price","reset_price"];function li(s,l){return s?new Date(s*1e3).toLocaleString():l}function rw(s){if(!s)return"";const l=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${o(l.getMonth()+1)}-${o(l.getDate())}`}function cw(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function Mi(s){return+(s/1073741824).toFixed(2)}function vd(s){return Math.round((Number(s)||0)*1073741824)}function dw(s){return s==="email"?"like":"="}function uw(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function pw(s,l){const o=l(`order.period.${s}`);return o===`order.period.${s}`?s:o}function $h(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Yh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function Qh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Xh(s){return String(s.hwid??"").trim()!==""}function mw(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function fw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=m.useState([]),[h,f]=m.useState([]),[k,v]=m.useState(0),[x,j]=m.useState(1),[_,D]=m.useState("email"),[G,W]=m.useState(""),[Y,M]=m.useState(!0),[Q,U]=m.useState(""),[H,ae]=m.useState(null),[P,de]=m.useState({}),[A,B]=m.useState(null),[ne,be]=m.useState(null),[w,R]=m.useState([]),[le,$]=m.useState(0),[ce,C]=m.useState(1),[V,z]=m.useState(!1),[ue,S]=m.useState(""),[N,E]=m.useState(null),[I,me]=m.useState(null),[Ne,Ee]=m.useState({period:"month_price",total_amount:""}),[Ue,Ve]=m.useState(!1),[Re,et]=m.useState(null),[ft,Qt]=m.useState(null),[Vt,xt]=m.useState(null);function Xt(g){const se=g==null?void 0:g.trim();se&&s.push(`/user?email=${encodeURIComponent(se)}`)}const ot=m.useCallback(async(g=1,se="",pe="email")=>{M(!0),U("");try{const _e=se.trim()?[{key:pe,condition:dw(pe),value:se.trim()}]:void 0,gt=await $0(g,Bh,_e);u(gt.data),v(gt.total),j(g)}catch(_e){U(_e instanceof Error?_e.message:o("subscription.loadFailed"))}finally{M(!1)}},[o]),Jt=m.useCallback(async(g,se=1)=>{z(!0),S("");try{const pe=await zx(se,Gh,[{key:"subscription_id",condition:"=",value:String(g.id)}]);R(pe.data),$(pe.total),C(se)}catch(pe){S(pe instanceof Error?pe.message:o("subscription.slotsLoadFailed"))}finally{z(!1)}},[o]),bt=m.useCallback(async()=>{var g;try{f(await mi())}catch(se){(g=window.showToast)==null||g.call(window,se instanceof Error?se.message:o("subscription.plansLoadFailed"),"error")}},[o]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}bt();const g=new URLSearchParams(l.search),pe=[["user_id",g.get("user_id")],["id",g.get("id")],["plan_id",g.get("plan_id")],["email",g.get("email")],["status",g.get("status")]].find(([,_e])=>_e&&_e.trim());if(pe){const[_e,gt]=pe,On=gt??"";D(_e),W(On),ot(1,On,_e);return}ot()},[ot,bt,l.search,s]),m.useEffect(()=>{function g(se){const pe=se.target instanceof Element?se.target:null;Re!==null&&(!pe||!pe.closest(".subscription-action-wrap, .subscription-mobile-action-sheet, .subscription-action-menu-fixed"))&&Nt()}return document.addEventListener("mousedown",g),()=>document.removeEventListener("mousedown",g)},[Re]),m.useEffect(()=>{if(Re===null)return;const g=()=>Nt();return window.addEventListener("resize",g),window.addEventListener("scroll",g,!0),()=>{window.removeEventListener("resize",g),window.removeEventListener("scroll",g,!0)}},[Re]);function Nt(){et(null),Qt(null)}function je(g,se){if(Re===g&&ft){Nt();return}const pe=se.getBoundingClientRect(),_e=230,gt=292,On=6,oa=8,yt=Math.max(oa,Math.min(window.innerWidth-_e-oa,pe.right-_e)),Dt=pe.bottom+On+gt<=window.innerHeight-oa?pe.bottom+On:Math.max(oa,pe.top-gt-On);Qt({top:Dt,left:yt}),et(g)}function Mt(g){Qt(null),et(se=>se===g?null:g)}function Ae(g){g.preventDefault(),ot(1,G,_)}function fn(){if(W(""),l.search){s.replace("/subscription");return}ot(1,"",_)}function rt(g){if(!g)return o("subscription.noPlan");const se=h.find(pe=>Number(pe.id)===Number(g));return se?`#${se.id} - ${se.name}`:`#${g}`}function on(g){ae(g),de({plan_id:g.plan_id?String(g.plan_id):"",transfer_enable:String(Mi(g.transfer_enable)),u:String(Mi(g.u)),d:String(Mi(g.d)),device_limit:g.device_limit===null?"":String(g.device_limit),speed_limit:g.speed_limit===null?"":String(g.speed_limit),expired_at:rw(g.expired_at),status:g.status,auto_renewal:String(g.auto_renewal||0),remarks:g.remarks??""})}async function An(g){var se,pe;if(g.preventDefault(),!!H){B(H.id);try{await Q0({id:H.id,plan_id:P.plan_id===""?null:Number(P.plan_id),transfer_enable:vd(P.transfer_enable),u:vd(P.u),d:vd(P.d),device_limit:P.device_limit===""?null:Number(P.device_limit),speed_limit:P.speed_limit===""?null:Number(P.speed_limit),expired_at:cw(P.expired_at),status:P.status,auto_renewal:Number(P.auto_renewal),remarks:P.remarks}),ae(null),(se=window.showToast)==null||se.call(window,o("subscription.updateSuccess"),"success"),await ot(x,G,_)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("subscription.saveFailed"),"error")}finally{B(null)}}}function hn(g){var se;(se=window.showConfirm)==null||se.call(window,{message:o("subscription.resetConfirm",{id:g.id}),onConfirm:async()=>{var pe,_e;B(g.id);try{await X0(g.id),(pe=window.showToast)==null||pe.call(window,o("subscription.resetSuccess"),"success"),await ot(x,G,_)}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.resetFailed"),"error")}finally{B(null)}}})}function F(g){var se,pe;if(!g.user_email){(se=window.showToast)==null||se.call(window,o("subscription.renewMissingEmail"),"error");return}if(!g.plan_id){(pe=window.showToast)==null||pe.call(window,o("subscription.renewMissingPlan"),"error");return}me(g),Ee({period:"month_price",total_amount:""})}async function Ce(g){var se,pe;if(g.preventDefault(),!(!(I!=null&&I.user_email)||!I.plan_id)){Ve(!0);try{await Fd({email:I.user_email,plan_id:I.plan_id,period:Ne.period,total_amount:Math.round((Number(Ne.total_amount)||0)*100),subscription_id:I.id}),(se=window.showToast)==null||se.call(window,o("subscription.renewSuccess"),"success"),me(null)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("subscription.renewFailed"),"error")}finally{Ve(!1)}}}async function we(g){var pe;if(!g)return;const se=await di(g);(pe=window.showToast)==null||pe.call(window,o(se?"subscription.copySuccess":"common.copyFailed"),se?"success":"error")}function ye(g,se){u(pe=>pe.map(_e=>_e.id===g?{..._e,subscribe_url:se}:_e)),be(pe=>pe&&pe.id===g?{...pe,subscribe_url:se}:pe)}async function Qe(g){if(g.subscribe_url)return g.subscribe_url;const pe=(await Y0(g.id)).data||null;return pe&&ye(g.id,pe),pe}async function He(g){var se;if(!g.subscribe_url){E(g.id);try{await Qe(g)}catch(pe){(se=window.showToast)==null||se.call(window,pe instanceof Error?pe.message:o("common.copyFailed"),"error")}finally{E(null)}}}async function qe(g){var se,pe;E(g.id);try{const _e=await Qe(g);if(!_e){(se=window.showToast)==null||se.call(window,o("common.copyFailed"),"error");return}await we(_e)}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{E(null)}}async function Xe(g){var se,pe;E(g.id);try{const _e=await Qe(g);if(!_e){(se=window.showToast)==null||se.call(window,o("common.copyFailed"),"error");return}xt({url:_e,subscriptionId:g.id})}catch(_e){(pe=window.showToast)==null||pe.call(window,_e instanceof Error?_e.message:o("common.copyFailed"),"error")}finally{E(null)}}function nt(g){be(g),R([]),$(0),C(1),Jt(g,1),He(g)}function dn(g=ce){return ne?Jt(ne,g):Promise.resolve()}function Ct(g){var se;(se=window.showConfirm)==null||se.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var pe,_e;B(g.id);try{await Tx(g.id),(pe=window.showToast)==null||pe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([dn(),ot(x,G,_)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.unbindFailed"),"error")}finally{B(null)}}})}function Pn(g){var se;(se=window.showConfirm)==null||se.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var pe,_e;B(g.id);try{await Ex(g.id),(pe=window.showToast)==null||pe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([dn(),ot(x,G,_)])}catch(gt){(_e=window.showToast)==null||_e.call(window,gt instanceof Error?gt.message:o("subscription.banFailed"),"error")}finally{B(null)}}})}function Lt(g){const se=g.device_limit&&g.device_limit>0?String(g.device_limit):o("subscription.unlimited");return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:g.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:se})]}),g.device_limit&&g.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(g.device_count/g.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>nt(g),children:[t.jsx(zd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]})]})}function un(g){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[Mi(g.total_used)," / ",Mi(g.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${mw(g)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:Mi(g.u),download:Mi(g.d)})})]})}function Zn(g){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsx(us,{value:g.uuid,onCopy:()=>we(g.uuid),copyClassName:"subscription-link"}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function pn(g){return t.jsxs("div",{className:"subscription-link-stack",children:[Zn(g),g.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:g.subscribe_url,onClick:()=>void qe(g),disabled:N===g.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:g.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void qe(g),disabled:N===g.id,children:[t.jsx(Ta,{size:14}),t.jsx("span",{children:N===g.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function L(g){return t.jsxs("section",{className:"subscription-identity-summary",children:[t.jsxs("div",{className:"subscription-identity-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:o("subscription.identityTitle")}),t.jsx("small",{children:o("subscription.identityHelp")})]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:N===g.id,onClick:()=>void Xe(g),children:[t.jsx(Ed,{size:14}),N===g.id?o("subscription.subscribeUrlLoading"):o("subscription.getQr")]})]}),pn(g)]})}function oe(g,se=!1,pe=""){const _e=gt=>{Nt(),gt()};return t.jsxs("div",{className:`action-dropdown-menu subscription-action-menu ${se?"subscription-action-menu-fixed":""} ${pe}`.trim(),style:se&&ft?{top:ft.top,left:ft.left}:void 0,onMouseDown:gt=>gt.stopPropagation(),children:[t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>on(g)),children:[t.jsx(Kt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>F(g)),children:[t.jsx(bx,{size:14}),o("subscription.renew")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",onClick:()=>_e(()=>nt(g)),children:[t.jsx(zd,{size:14}),o("subscription.manageUuids")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===g.id,onClick:()=>_e(()=>void qe(g)),children:[t.jsx(Ta,{size:14}),N===g.id?o("subscription.subscribeUrlLoading"):o("subscription.copySubscribeUrl")]}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:N===g.id,onClick:()=>_e(()=>void Xe(g)),children:[t.jsx(Ed,{size:14}),o("subscription.getQr")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:A===g.id,onClick:()=>_e(()=>hn(g)),children:[t.jsx(Zd,{size:14}),o("subscription.resetSecret")]})]})}function ee(g,se="desktop"){return se==="mobile"?t.jsx("div",{className:"subscription-mobile-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===g.id&&!ft?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:()=>Mt(g.id),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===g.id&&!ft?t.jsx("div",{className:"subscription-mobile-action-sheet-backdrop",onClick:Nt,children:t.jsxs("div",{className:"subscription-mobile-action-sheet",onClick:pe=>pe.stopPropagation(),children:[t.jsxs("div",{className:"subscription-mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:g.user_email??o("subscription.userId",{id:g.user_id})}),t.jsxs("small",{children:["#",g.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:Nt,children:t.jsx(lt,{size:16})})]}),oe(g,!1,"subscription-mobile-action-menu")]})}):null]})}):t.jsxs("div",{className:`action-dropdown-wrap subscription-action-wrap ${Re===g.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger subscription-action-trigger",type:"button",onClick:pe=>je(g.id,pe.currentTarget),children:[o("subscription.action")," ",t.jsx(Ea,{size:14})]}),Re===g.id&&ft?ax.createPortal(oe(g,!0),document.body):null]})}const ke=Math.ceil(k/Bh),Be=Math.ceil(le/Gh),We=ke>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:x<=1||Y,onClick:()=>void ot(x-1,G,_),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:x,total:ke})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:x>=ke||Y,onClick:()=>void ot(x+1,G,_),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null;return t.jsxs(Ft,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:k})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void ot(x,G,_),children:[t.jsx(Et,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:Ae,children:[t.jsx("select",{className:"config-input filter-select",value:_,onChange:g=>D(g.target.value),children:sw.map(g=>t.jsx("option",{value:g,children:uw(g,o)},g))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input",value:G,onChange:g=>W(g.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(hs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:fn,children:o("common.clearFilter")})]}),Q?t.jsx("div",{className:"form-error",children:Q}):null,Y&&d.length===0?t.jsx(wt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(g=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",g.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:g.plan_name??"-"}),g.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(g.user_email),title:o("subscription.viewUser"),children:g.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:g.user_id}),g.plan_id?` - ${o("subscription.planId",{id:g.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${g.status}`,children:$h(g.status,o)})}),t.jsx("td",{children:un(g)}),t.jsx("td",{children:Lt(g)}),t.jsx("td",{children:li(g.expired_at,o("subscription.never"))}),t.jsx("td",{children:li(g.updated_at,o("subscription.never"))}),t.jsx("td",{children:ee(g)})]},g.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(g=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",g.id]}),t.jsx("strong",{className:"subscription-plan-name",children:g.plan_name??"-"}),g.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>Xt(g.user_email),title:o("subscription.viewUser"),children:g.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${g.status}`,children:$h(g.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),un(g)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Lt(g)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:li(g.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:li(g.updated_at,o("subscription.never"))})]})]}),ee(g,"mobile")]},g.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),We,ne?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>be(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:ne.id})}),t.jsx("p",{children:ne.user_email??o("subscription.userId",{id:ne.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>be(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[ue?t.jsx("div",{className:"form-error",children:ue}):null,V&&w.length===0?t.jsx(wt,{label:o("subscription.slotsLoading")}):null,L(ne),t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[w.map(g=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx(us,{value:g.uuid,onCopy:()=>we(g.uuid),copyClassName:"subscription-link"})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Qh(g.status)}`,children:Yh(g.status,o)})}),t.jsx("td",{children:g.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:g.hwid,onClick:()=>we(g.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:g.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:g.user_agent??"",children:g.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:g.last_ip??"-"}),t.jsx("small",{children:g.first_ip?o("subscription.firstIp",{ip:g.first_ip}):"-"})]}),t.jsx("td",{children:li(g.first_seen_at,"-")}),t.jsx("td",{children:li(g.last_seen_at,"-")}),t.jsx("td",{children:Xh(g)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===g.id,onClick:()=>Ct(g),children:[t.jsx(Dd,{size:14}),o("subscription.unbind")]}),g.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===g.id,onClick:()=>Pn(g),children:[t.jsx(Di,{size:14}),o("subscription.ban")]}):null]}):t.jsx("span",{children:"-"})})]},g.id)),!V&&w.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[w.map(g=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Qh(g.status)}`,children:Yh(g.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsx(us,{value:g.uuid,onCopy:()=>we(g.uuid),copyClassName:"subscription-link"})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),g.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:g.hwid,onClick:()=>we(g.hwid),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:g.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:g.last_ip??"-"}),t.jsx("small",{children:g.first_ip?o("subscription.firstIp",{ip:g.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:g.user_agent??"",children:g.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:li(g.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:li(g.last_seen_at,"-")})]})]}),Xh(g)?t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===g.id,onClick:()=>Ct(g),children:[t.jsx(Dd,{size:14}),o("subscription.unbind")]}),g.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:A===g.id,onClick:()=>Pn(g),children:[t.jsx(Di,{size:14}),o("subscription.ban")]}):null]}):null]},g.id)),!V&&w.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),Be>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:ce<=1||V,onClick:()=>void dn(ce-1),children:[t.jsx(Ma,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:ce,total:Be})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ce>=Be||V,onClick:()=>void dn(ce+1),children:[o("common.next"),t.jsx(Da,{size:14})]})]}):null]})]})}):null,Vt?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>xt(null),children:t.jsxs("section",{className:"modal-panel subscription-qr-modal",role:"dialog","aria-modal":"true",onMouseDown:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.qrTitle")}),t.jsx("p",{children:o("subscription.qrSubtitle",{id:Vt.subscriptionId})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>xt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Vt.url)}`,alt:o("subscription.getQr"),width:200,height:200}),t.jsx("div",{className:"subscription-qr-url",children:Vt.url})]})]})}):null,H?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>ae(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:H.id})}),t.jsx("p",{children:H.user_email??o("subscription.userId",{id:H.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>ae(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:An,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.plan"),t.jsxs("select",{className:"config-input",value:P.plan_id,onChange:g=>de(se=>({...se,plan_id:g.target.value})),children:[t.jsx("option",{value:"",children:o("subscription.noPlan")}),h.map(g=>t.jsxs("option",{value:g.id,children:["#",g.id," - ",g.name]},g.id))]})]}),t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.transfer_enable,onChange:g=>de(se=>({...se,transfer_enable:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.u,onChange:g=>de(se=>({...se,u:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:P.d,onChange:g=>de(se=>({...se,d:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.device_limit,onChange:g=>de(se=>({...se,device_limit:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:P.speed_limit,onChange:g=>de(se=>({...se,speed_limit:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:P.expired_at,onChange:g=>de(se=>({...se,expired_at:g.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:P.status,onChange:g=>de(se=>({...se,status:g.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:P.auto_renewal,onChange:g=>de(se=>({...se,auto_renewal:g.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:P.remarks,onChange:g=>de(se=>({...se,remarks:g.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ae(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:A===H.id,children:A===H.id?o("common.processing"):o("common.save")})]})]})]})}):null,I?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>me(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.renewTitle")}),t.jsx("p",{children:o("subscription.renewSubtitle",{id:I.id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>me(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ce,children:[t.jsxs("div",{className:"subscription-renew-summary",children:[t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("common.email")}),t.jsx("strong",{title:I.user_email??"",children:I.user_email??"-"})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewSubscriptionId")}),t.jsxs("strong",{children:["#",I.id]})]}),t.jsxs("div",{className:"subscription-renew-row",children:[t.jsx("span",{children:o("subscription.renewPlan")}),t.jsx("strong",{title:rt(I.plan_id),children:rt(I.plan_id)})]})]}),t.jsxs("label",{children:[o("subscription.renewPeriod"),t.jsx("select",{className:"config-input",value:Ne.period,onChange:g=>Ee(se=>({...se,period:g.target.value})),children:ow.map(g=>t.jsx("option",{value:g,children:pw(g,o)},g))})]}),t.jsxs("label",{children:[o("subscription.renewTotalAmount"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Ne.total_amount,onChange:g=>Ee(se=>({...se,total_amount:g.target.value})),placeholder:"0"})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>me(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Ue,children:o(Ue?"common.processing":"common.save")})]})]})]})}):null]})}const Zh=15,hw=["email","user_id","node","hwid","user_agent","last_ip"];function os(s){return s?new Date(s*1e3).toLocaleString():"-"}function si(s){const l=Math.max(0,Number(s??0));if(l===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=l,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function xw(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function bw(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"node":return l("device.filterNode");case"node_id":return l("device.filterNodeId");case"node_type":return l("device.filterNodeType");case"user_agent":return l("device.filterUserAgent");case"last_ip":return l("device.filterIp");default:return""}}function Kh(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function qo(s){return(s.online_ips??[]).join(", ")||"-"}function Bo(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function gw(s){return String(s.hwid??"").trim()!==""}function yw(s){var h,f,k;const l=new URLSearchParams(s),o=(h=l.get("node_type"))==null?void 0:h.trim(),d=(f=l.get("node_id"))==null?void 0:f.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of u){const x=(k=l.get(v))==null?void 0:k.trim();if(x)return{field:v,value:x}}return null}function vw(){const s=Rt(),l=sa(),{t:o}=Ye(),[d,u]=m.useState([]),[h,f]=m.useState(0),[k,v]=m.useState(1),[x,j]=m.useState("email"),[_,D]=m.useState(""),[G,W]=m.useState(!0),[Y,M]=m.useState(""),[Q,U]=m.useState(null),[H,ae]=m.useState(null),[P,de]=m.useState(null),A=m.useCallback(async(z=1,ue="",S="email")=>{W(!0),M("");try{const N=ue.trim()?[{key:S,condition:xw(S),value:ue.trim()}]:void 0,E=await zx(z,Zh,N);u(E.data),f(E.total),v(z)}catch(N){M(N instanceof Error?N.message:o("device.loadFailed"))}finally{W(!1)}},[o]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}const z=yw(l.search);if(z){j(z.field),D(z.value),A(1,z.value,z.field);return}A()},[A,s,l.search]),m.useEffect(()=>{if(P===null)return;function z(S){const N=S.target;N!=null&&N.closest(".device-action-wrap")||de(null)}function ue(S){S.key==="Escape"&&de(null)}return document.addEventListener("pointerdown",z),document.addEventListener("keydown",ue),()=>{document.removeEventListener("pointerdown",z),document.removeEventListener("keydown",ue)}},[P]);function B(z){z.preventDefault(),A(1,_,x)}function ne(){if(D(""),l.search){s.replace("/device");return}A(1,"",x)}async function be(z){var S;if(!z.hwid)return;const ue=await di(z.hwid);(S=window.showToast)==null||S.call(window,o(ue?"device.copySuccess":"common.copyFailed"),ue?"success":"error")}async function w(z){var S;const ue=await di(z.uuid);(S=window.showToast)==null||S.call(window,o(ue?"device.copyUuidSuccess":"common.copyFailed"),ue?"success":"error")}function R(z){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var S,N;U(z.id);try{await Tx(z.id),(S=window.showToast)==null||S.call(window,o("device.unbindSuccess"),"success"),await A(k,_,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.unbindFailed"),"error")}finally{U(null)}}})}function le(z){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var S,N;U(z.id);try{await Ex(z.id),(S=window.showToast)==null||S.call(window,o("device.banSuccess"),"success"),await A(k,_,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.banFailed"),"error")}finally{U(null)}}})}function $(z){var ue;(ue=window.showConfirm)==null||ue.call(window,{message:o("device.resetConfirm",{user:z.user_email??`#${z.user_id}`}),onConfirm:async()=>{var S,N;ae(z.user_id);try{await Z0(z.user_id),(S=window.showToast)==null||S.call(window,o("device.resetSuccess"),"success"),await A(k,_,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.resetFailed"),"error")}finally{ae(null)}}})}function ce(z){de(null),z()}function C(z,ue){const S=ue==="mobile"?-z.id:z.id,N=P===S,E=gw(z);return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${N?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>de(N?null:S),children:[o("device.action")," ",t.jsx(Ea,{size:14})]}),N?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[E?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===z.id,onClick:()=>ce(()=>R(z)),children:[t.jsx(Dd,{size:14}),o("device.unbind")]}),z.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:Q===z.id,onClick:()=>ce(()=>le(z)),children:[t.jsx(Di,{size:14}),o("device.ban")]}):null]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:H===z.user_id,onClick:()=>ce(()=>$(z)),children:[t.jsx($v,{size:14}),o("device.resetUser")]})]}):null]})}const V=Math.ceil(h/Zh);return t.jsxs(Ft,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:h})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void A(k,_,x),children:[t.jsx(Et,{size:16}),o(G?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:B,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:z=>j(z.target.value),children:hw.map(z=>t.jsx("option",{value:z,children:bw(z,o)},z))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Fo,{size:16}),t.jsx("input",{className:"config-input",value:_,onChange:z=>D(z.target.value),placeholder:o(x==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(hs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),Y?t.jsx("div",{className:"form-error",children:Y}):null,G&&d.length===0?t.jsx(wt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(z=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Kh(z.status,o)}),t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(xh,{size:14}):t.jsx(hh,{size:14}),z.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsx(us,{value:z.uuid,onCopy:()=>w(z),copyClassName:"mobile-device-copy"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:z.hwid,onClick:()=>be(z),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${z.last_ip??"-"} / ${z.first_ip??"-"}`,children:[z.last_ip??"-",z.first_ip?` (${z.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${si(z.device_upload)} / ${o("device.download")}: ${si(z.device_download)}`,children:[si(z.device_used_traffic)," / ",o("device.upload"),": ",si(z.device_upload)," / ",o("device.download"),": ",si(z.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${qo(z)} / ${Bo(z)}`,children:[o("device.onlineIps"),": ",qo(z)," / ",o("device.onlineNodes"),": ",Bo(z)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",os(z.first_seen_at)," / ",o("device.lastSeen"),": ",os(z.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:C(z,"mobile")})]},z.id)),!G&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(z=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:z.user_email??"-"}),t.jsxs("small",{children:["ID: ",z.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[z.plan_name??"-",z.user_plan_id?` #${z.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Kh(z.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:si(z.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",si(z.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",si(z.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${z.is_online?"online":"offline"}`,children:[z.is_online?t.jsx(xh,{size:14}):t.jsx(hh,{size:14}),z.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:qo(z),children:[o("device.onlineIps"),": ",qo(z)]}),t.jsxs("small",{title:Bo(z),children:[o("device.onlineNodes"),": ",Bo(z)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",os(z.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsx(us,{value:z.uuid,onCopy:()=>w(z),copyClassName:"device-info-copy"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),z.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:z.hwid,onClick:()=>be(z),children:[t.jsx(Ta,{size:14}),t.jsx("span",{className:"mono",children:z.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:z.user_agent??"",children:z.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:z.last_ip??"-"}),t.jsx("small",{children:z.first_ip?`${o("device.firstIp")}: ${z.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:os(z.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:os(z.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:C(z,"desktop")})]},z.id)),!G&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),V>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:k<=1||G,onClick:()=>void A(k-1,_,x),children:[t.jsx(Ma,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:k,total:V})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:k>=V||G,onClick:()=>void A(k+1,_,x),children:[o("device.next"),t.jsx(Da,{size:14})]})]}):null]})]})}const jw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Wd(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return Wd(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function Fh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Wd(s.plan_id)}:{...jw}}function jd(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function ww(s){const l=Number(s);if(!l)return"-";const o=new Date(l*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function _w(s){return Number(s)===1}function Vh(s,l,o){if(!s.length)return o("webcon.allPlans");const d=new Map(l.map(u=>[Number(u.id),u.name]));return s.map(u=>d.get(u)??`#${u}`).join(", ")}function oi(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function Nw(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState([]),[f,k]=m.useState(null),[v,x]=m.useState(!0),[j,_]=m.useState(!1),[D,G]=m.useState(null),[W,Y]=m.useState(""),M=m.useCallback(async()=>{x(!0),Y("");try{const[A,B]=await Promise.all([s1(),mi()]);d(A),h(B)}catch(A){Y(A instanceof Error?A.message:l("webcon.toastLoadFailed"))}finally{x(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}M()},[M,s]);const Q=m.useMemo(()=>u.map(A=>({id:Number(A.id),name:A.name})),[u]);function U(A,B){k(ne=>ne&&{...ne,[A]:B})}function H(A,B){k(ne=>{if(!ne)return ne;const be=B?Array.from(new Set([...ne.plan_ids,A])):ne.plan_ids.filter(w=>w!==A);return{...ne,plan_ids:be}})}async function ae(A){var ne,be;if(A.preventDefault(),!f)return;const B=jd(f.domain);_(!0),Y("");try{await o1({id:f.id,email:f.email.trim(),domain:B,title:f.title.trim(),description:f.description.trim()||null,logo:f.logo.trim()||null,background_url:f.background_url.trim()||null,custom_html:f.custom_html||null,plan_ids:f.plan_ids,plan_id:f.plan_ids}),k(null),(ne=window.showToast)==null||ne.call(window,l("webcon.toastSaveSuccess"),"success"),await M()}catch(w){const R=w instanceof Error?w.message:l("webcon.toastSaveFailed");Y(R),(be=window.showToast)==null||be.call(window,R,"error")}finally{_(!1)}}async function P(A){var B,ne;G(A.id);try{await c1(A.id),(B=window.showToast)==null||B.call(window,l("webcon.toastToggleSuccess"),"success"),await M()}catch(be){const w=be instanceof Error?be.message:l("webcon.toastToggleFailed");Y(w),(ne=window.showToast)==null||ne.call(window,w,"error")}finally{G(null)}}function de(A){var B;(B=window.showConfirm)==null||B.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ne,be;G(A.id),Y("");try{await r1(A.id),(ne=window.showToast)==null||ne.call(window,l("webcon.toastDeleteSuccess"),"success"),await M()}catch(w){const R=w instanceof Error?w.message:l("webcon.toastDeleteFailed");Y(R),(be=window.showToast)==null||be.call(window,R,"error")}finally{G(null)}}})}return t.jsxs(Ft,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void M(),children:[t.jsx(Et,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>k(Fh()),children:[t.jsx(Mn,{size:16}),l("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:l("webcon.colStatus")}),t.jsx("th",{children:l("webcon.colStaffOwner")}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:l("webcon.colLanding")}),t.jsx("th",{children:l("webcon.colPlans")}),t.jsx("th",{children:l("webcon.colCreated")}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(A=>{var ne;const B=Wd(A.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",A.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_w(A.status)?"active":""}`,type:"button",disabled:D===A.id,onClick:()=>void P(A),"aria-label":l("webcon.toggleStatusLabel"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:A.email??"-"}),t.jsx("small",{children:Number(A.staff)===1?l("webcon.staffEnabled"):l("webcon.staffDisabled")})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:A.domain}),t.jsx("small",{children:l("webcon.adminPath",{path:`/${String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin")}/webcon`})})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:A.title||"-"}),t.jsx("small",{children:A.description||l("webcon.noDescription")}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Mv,{size:13}),A.logo?l("webcon.logo"):l("webcon.noLogo")]}),t.jsxs("span",{children:[t.jsx(bs,{size:13}),A.background_url?l("webcon.background"):l("webcon.noBackground")]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Vh(B,Q,l)}),t.jsx("small",{children:B.length?l("webcon.selectedCount",{count:B.length}):l("webcon.unrestricted")})]})}),t.jsx("td",{children:ww(A.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>k(Fh(A)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:D===A.id,onClick:()=>de(A),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},A.id)}),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),f?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>k(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:A=>A.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:f.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:f.domain||l("webcon.modalSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>k(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ae,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.staffOwnerEmail"),!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:f.email,onChange:A=>U("email",A.target.value),placeholder:l("webcon.staffEmailPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.domain"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.domain,onChange:A=>U("domain",A.target.value),onBlur:A=>U("domain",jd(A.target.value)),placeholder:l("webcon.domainPlaceholder")}),t.jsx("span",{className:"webcon-help",children:l("webcon.domainHelp")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.landingTitle"),!0),t.jsx("input",{className:"config-input",required:!0,value:f.title,onChange:A=>U("title",A.target.value),placeholder:l("webcon.landingTitlePlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.description")),t.jsx("input",{className:"config-input",value:f.description,onChange:A=>U("description",A.target.value),placeholder:l("webcon.descriptionPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.logoUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.logo,onChange:A=>U("logo",A.target.value),placeholder:l("webcon.logoPlaceholder")})]}),t.jsxs("label",{className:"webcon-field",children:[oi(l("webcon.backgroundUrl")),t.jsx("input",{className:"config-input",type:"url",value:f.background_url,onChange:A=>U("background_url",A.target.value),placeholder:l("webcon.backgroundPlaceholder")})]}),t.jsxs("div",{className:"webcon-field full",children:[oi(l("webcon.allowedPlans")),t.jsxs("div",{className:"webcon-plan-picker",children:[Q.map(A=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:f.plan_ids.includes(A.id),onChange:B=>H(A.id,B.target.checked)}),t.jsx("span",{children:A.name})]},A.id)),Q.length===0?t.jsx("span",{className:"webcon-help",children:l("webcon.noPlansLoaded")}):null]}),t.jsx("span",{className:"webcon-help",children:l("webcon.allowedPlansHelp")})]}),t.jsxs("label",{className:"webcon-field full",children:[oi(l("webcon.customHtml")),t.jsx("textarea",{className:"config-input",rows:5,value:f.custom_html,onChange:A=>U("custom_html",A.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:f.logo?t.jsx("img",{src:f.logo,alt:""}):t.jsx(Bv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:f.title||l("webcon.previewTitle")}),t.jsx("span",{children:jd(f.domain)||l("webcon.domainPlaceholder")}),t.jsxs("span",{children:[t.jsx(Kd,{size:12})," ",Vh(f.plan_ids,Q,l)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>k(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(Dn,{size:16}),l(j?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Jh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function wd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function Sw(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(null),[f,k]=m.useState(!0),[v,x]=m.useState(!1),[j,_]=m.useState(""),[D,G]=m.useState(""),W=m.useCallback(async()=>{k(!0),_("");try{d(await F0())}catch(U){_(U instanceof Error?U.message:l("notice.loadFailed"))}finally{k(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}W()},[W,s]);async function Y(U){var H,ae;if(U.preventDefault(),!!u){x(!0),_(""),G("");try{const P=u.tags?u.tags.split(",").map(de=>de.trim()).filter(Boolean):[];await V0({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:P.length?P:null}),h(null),(H=window.showToast)==null||H.call(window,l("notice.saveSuccess"),"success"),await W()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("notice.saveFailed"),"error")}finally{x(!1)}}}async function M(U){var H;try{await P0(U),await W()}catch(ae){(H=window.showToast)==null||H.call(window,ae instanceof Error?ae.message:l("notice.toggleFailed"),"error")}}async function Q(U){var H;(H=window.showConfirm)==null||H.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var ae,P;try{await J0(U),(ae=window.showToast)==null||ae.call(window,l("notice.deleteSuccess"),"success"),await W()}catch(de){(P=window.showToast)==null||P.call(window,de instanceof Error?de.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[o.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:f,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(wd()),children:[t.jsx(Mn,{size:16}),l("notice.addNotice")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,D?t.jsx("div",{className:"form-success",children:D}):null,f&&o.length===0?t.jsx(wt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{var H;return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void M(U.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((H=U.tags)==null?void 0:H.map((ae,P)=>t.jsx("span",{className:"tag",children:ae},P)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Jh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(wd(U)),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void Q(U.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},U.id)}),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(U=>t.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",U.id]})}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void M(U.id),"aria-label":U.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((H,ae)=>t.jsx("span",{className:"tag-badge",children:H},ae)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",Jh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(wd(U)),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void Q(U.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},U.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:U=>h({...u,title:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:U=>h({...u,content:U.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:U=>h({...u,img_url:U.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:U=>h({...u,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Dn,{size:16}),l(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function _d(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Ph=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Nd=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function kw(){var w;const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(null),[f,k]=m.useState(!1),[v,x]=m.useState(null),[j,_]=m.useState(""),[D,G]=m.useState(!0),[W,Y]=m.useState(!1),[M,Q]=m.useState(""),U=m.useRef(null),[H,ae]=m.useState([]),[P,de]=m.useState(null),A=m.useCallback(async()=>{G(!0),Q("");try{d(await W0())}catch(R){Q(R instanceof Error?R.message:"Load failed")}finally{G(!1)}},[]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}A(),mi().then(R=>{R&&ae(R)}).catch(()=>{})},[A,s]),m.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[u]);async function B(R){var le;x(R),_(""),h(null),de(null),k(!0);try{const $=await yh(R);if(h($),$&&$.user_id)try{const ce=await Cx($.user_id);ce&&ce.data&&de(ce.data)}catch(ce){console.error("Failed to load user info:",ce)}}catch{(le=window.showToast)==null||le.call(window,"Failed to load message thread","error")}finally{k(!1)}}async function ne(R){var le,$;if(R.preventDefault(),!(!v||!j.trim())){Y(!0),Q("");try{await I0(v,j),_(""),(le=window.showToast)==null||le.call(window,"Reply sent!","success");try{const ce=await yh(v);h(ce)}catch{}await A()}catch(ce){($=window.showToast)==null||$.call(window,ce instanceof Error?ce.message:"Reply failed","error")}finally{Y(!1)}}}async function be(R){var le;(le=window.showConfirm)==null||le.call(window,{message:"Close this ticket?",onConfirm:async()=>{var $,ce;Q("");try{await e1(R),($=window.showToast)==null||$.call(window,"Ticket closed!","success"),v===R&&(x(null),h(null)),await A()}catch(C){Q(C instanceof Error?C.message:"Close failed"),(ce=window.showToast)==null||ce.call(window,C instanceof Error?C.message:"Close failed","error")}}})}return t.jsxs(Ft,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:A,disabled:D,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),M?t.jsx("div",{className:"form-error",children:M}):null,D&&o.length===0?t.jsx(wt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{const le=Ph(R.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.subject})}),t.jsxs("td",{children:["#",R.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Nd(R.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${le.cls}`,children:le.label})}),t.jsx("td",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:_d(R.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void B(R.id),children:[t.jsx(rs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(R.id),children:[t.jsx(Td,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void B(R.id),children:[t.jsx(rs,{size:14}),l("ticket.viewHistory")]})})})]},R.id)}),!D&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(R=>{const le=Ph(R.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:R.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Nd(R.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",R.id]})]}),t.jsx("span",{className:`status-pill ${le.cls}`,children:le.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",R.user_id]})]}),t.jsx("span",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:_d(R.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void B(R.id),children:[t.jsx(rs,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void be(R.id),children:[t.jsx(Td,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void B(R.id),children:[t.jsx(rs,{size:14}),l("ticket.viewHistory")]})})]},R.id)}),!D&&o.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${l("ticket.ticketDetail")}: ${u.subject}`:`${l("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[l("ticket.user"),": #",u==null?void 0:u.user_id," | ",l("ticket.level"),": ",u!=null?Nd(u.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{x(null),h(null)},children:t.jsx(lt,{size:18})})]}),P&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:P.email,children:P.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=H.find(R=>R.id===P.plan_id))==null?void 0:w.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[En(P.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:P.expired_at?new Date(P.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),f?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(wt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(R=>{const le=R.is_me;return t.jsxs("div",{className:`chat-message ${le?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:R.message}),t.jsxs("div",{className:"chat-meta",children:[le?l("ticket.staff"):`${l("ticket.user")} #${R.user_id}`," • ",_d(R.created_at)]})]},R.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:U})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:j,onChange:R=>_(R.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!j.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(xx,{size:14}),W?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Wh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Ih={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function ex(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Cw(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState([]),[u,h]=m.useState(null),[f,k]=m.useState(!0),[v,x]=m.useState(!1),[j,_]=m.useState(""),[D,G]=m.useState(""),W=m.useCallback(async()=>{k(!0),_("");try{d(await t1())}catch(H){_(H instanceof Error?H.message:l("knowledge.loadFailed"))}finally{k(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}W()},[W,s]);async function Y(H){var ae;try{const P=await n1(H.id);h(ex(P))}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.detailFailed"),"error")}}async function M(H){var ae,P;if(H.preventDefault(),!!u){x(!0),_(""),G("");try{await a1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),h(null),(ae=window.showToast)==null||ae.call(window,l("knowledge.saveSuccess"),"success"),await W()}catch(de){(P=window.showToast)==null||P.call(window,de instanceof Error?de.message:l("knowledge.saveFailed"),"error")}finally{x(!1)}}}async function Q(H){var ae;try{await l1(H),await W()}catch(P){(ae=window.showToast)==null||ae.call(window,P instanceof Error?P.message:l("knowledge.toggleFailed"),"error")}}async function U(H){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var P,de;try{await i1(H),(P=window.showToast)==null||P.call(window,l("knowledge.deleteSuccess"),"success"),await W()}catch(A){(de=window.showToast)==null||de.call(window,A instanceof Error?A.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Ft,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:f,children:[t.jsx(Et,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(ex()),children:[t.jsx(Mn,{size:16}),l("knowledge.addArticle")]})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,D?t.jsx("div",{className:"form-success",children:D}):null,f&&o.length===0?t.jsx(wt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(H=>t.jsxs("tr",{children:[t.jsx("td",{children:H.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:H.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:H.title})}),t.jsx("td",{children:H.language&&Ih[H.language]||H.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Q(H.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:H.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Wh(H.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(H),children:[t.jsx(Kt,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(H.id),children:[t.jsx(en,{size:14}),l("common.delete")]})]})})]},H.id)),!f&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(H=>t.jsxs("div",{className:`knowledge-mobile-card ${H.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",H.id]}),H.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",H.sort]})]}),t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void Q(H.id),"aria-label":H.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:H.title}),t.jsxs("div",{className:"card-meta",children:[H.category&&t.jsx("span",{className:"category-badge",children:H.category}),H.language&&t.jsx("span",{className:"lang-badge",children:Ih[H.language]||H.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",Wh(H.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void Y(H),children:[t.jsx(Kt,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(H.id),children:[t.jsx(en,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},H.id)),!f&&o.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:M,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:H=>h({...u,category:H.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:H=>h({...u,title:H.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:H=>h({...u,body:H.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:H=>h({...u,language:H.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:H=>h({...u,sort:H.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Dn,{size:16}),l(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function zw(){const s=Rt(),{t:l}=Ye(),[o,d]=m.useState(null),[u,h]=m.useState(null),[f,k]=m.useState(null),[v,x]=m.useState(""),[j,_]=m.useState(!0),[D,G]=m.useState(""),W=m.useCallback(async()=>{_(!0),G("");try{const[M,Q,U,H]=await Promise.all([d1().catch(()=>({data:{}})),m1().catch(()=>({data:{}})),f1().catch(()=>({data:[]})),h1().catch(()=>({data:""}))]);d(M.data),h(Q.data),k(U.data),x(typeof H.data=="string"?H.data:"")}catch(M){G(M instanceof Error?M.message:l("queue.toastLoadFailed"))}finally{_(!1)}},[l]);m.useEffect(()=>{if(!Ht()){s.replace("/login");return}W()},[W,s]);function Y(M,Q,U){return M?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",Q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(M).map(([H,ae])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:H}),t.jsx("strong",{children:typeof ae=="object"?JSON.stringify(ae):String(ae??"—")})]},H))})]}):null}return t.jsxs(Ft,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:j,children:[t.jsx(Et,{size:16}),l("common.refresh")]})})]}),D?t.jsx("div",{className:"form-error",children:D}):null,j?t.jsx(wt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[Y(o,l("queue.systemStatus"),t.jsx(Yo,{size:18})),Y(u,l("queue.queueStats"),t.jsx(Kd,{size:18})),f&&f.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(bv,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(f,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Sv,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const Tw=m.createContext(null);function Ew({children:s}){const[l,o]=m.useState([]),[d,u]=m.useState(null),h=m.useCallback((x,j="success")=>{const _=Math.random().toString(36).substring(2,9);o(D=>[...D,{id:_,message:x,type:j}]),setTimeout(()=>{o(D=>D.filter(G=>G.id!==_))},5e3)},[]),f=m.useCallback(x=>{u(x)},[]);m.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=f)},[h,f]);const k=async()=>{if(d){try{await d.onConfirm()}catch(x){console.error("Error in onConfirm:",x)}u(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(Tw.Provider,{value:{showToast:h,showConfirm:f},children:[s,t.jsx("div",{className:"toast-container",children:l.map(x=>{let j=Dv;return x.type==="success"&&(j=fx),x.type==="error"&&(j=jv),x.type==="warning"&&(j=Md),t.jsxs("div",{className:`toast-card toast-${x.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(j,{size:18})}),t.jsx("div",{className:"toast-message",children:x.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(_=>_.filter(D=>D.id!==x.id)),children:t.jsx(lt,{size:14})})]},x.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Md,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:k,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Mw({children:s}){return t.jsx(S1,{children:t.jsx(Ew,{children:s})})}function Dw(){return t.jsx(Mw,{children:t.jsxs(ev,{children:[t.jsx(kt,{path:"/login",element:t.jsx(k1,{})}),t.jsx(kt,{path:"/dashboard",element:t.jsx(R1,{})}),t.jsx(kt,{path:"/config/system",element:t.jsx(Z1,{})}),t.jsx(kt,{path:"/config/payment",element:t.jsx(V1,{})}),t.jsx(kt,{path:"/config/theme",element:t.jsx(W1,{})}),t.jsx(kt,{path:"/server/manage",element:t.jsx(Hj,{})}),t.jsx(kt,{path:"/server/group",element:t.jsx(Lj,{})}),t.jsx(kt,{path:"/server/route",element:t.jsx(Gj,{})}),t.jsx(kt,{path:"/plan",element:t.jsx(Xj,{})}),t.jsx(kt,{path:"/order",element:t.jsx(Fj,{})}),t.jsx(kt,{path:"/coupon",element:t.jsx(Vj,{})}),t.jsx(kt,{path:"/giftcard",element:t.jsx(Pj,{})}),t.jsx(kt,{path:"/user",element:t.jsx(iw,{})}),t.jsx(kt,{path:"/subscription",element:t.jsx(fw,{})}),t.jsx(kt,{path:"/device",element:t.jsx(vw,{})}),t.jsx(kt,{path:"/webcon",element:t.jsx(Nw,{})}),t.jsx(kt,{path:"/notice",element:t.jsx(Sw,{})}),t.jsx(kt,{path:"/ticket",element:t.jsx(kw,{})}),t.jsx(kt,{path:"/knowledge",element:t.jsx(Cw,{})}),t.jsx(kt,{path:"/queue",element:t.jsx(zw,{})}),t.jsx(kt,{path:"/",element:t.jsx(lh,{to:"/dashboard",replace:!0})}),t.jsx(kt,{path:"*",element:t.jsx(lh,{to:"/dashboard",replace:!0})})]})})}ry.createRoot(document.getElementById("root")).render(t.jsx(m.StrictMode,{children:t.jsx(ov,{children:t.jsx(Dw,{})})}));
