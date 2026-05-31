function xb(s,l){for(var r=0;r<l.length;r++){const d=l[r];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=r(p);fetch(p.href,h)}})();function gb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gc={exports:{}},Qi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function bb(){if(wf)return Qi;wf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var j in p)j!=="key"&&(h[j]=p[j])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return Qi.Fragment=l,Qi.jsx=r,Qi.jsxs=r,Qi}var Nf;function yb(){return Nf||(Nf=1,Gc.exports=bb()),Gc.exports}var t=yb(),Yc={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function vb(){if(_f)return De;_f=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),U=Symbol.iterator;function P(C){return C===null||typeof C!="object"?null:(C=U&&C[U]||C["@@iterator"],typeof C=="function"?C:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,S={};function B(C,Z,pe){this.props=C,this.context=Z,this.refs=S,this.updater=pe||W}B.prototype.isReactComponent={},B.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},B.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function G(){}G.prototype=B.prototype;function O(C,Z,pe){this.props=C,this.context=Z,this.refs=S,this.updater=pe||W}var X=O.prototype=new G;X.constructor=O,J(X,B.prototype),X.isPureReactComponent=!0;var le=Array.isArray;function ue(){}var H={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function re(C,Z,pe){var xe=pe.ref;return{$$typeof:s,type:C,key:Z,ref:xe!==void 0?xe:null,props:pe}}function se(C,Z){return re(C.type,Z,C.props)}function _(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function A(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(pe){return Z[pe]})}var k=/\/+/g;function T(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?A(""+C.key):Z.toString(36)}function F(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ue,ue):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function D(C,Z,pe,xe,we){var _e=typeof C;(_e==="undefined"||_e==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(_e){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case s:case l:Se=!0;break;case b:return Se=C._init,D(Se(C._payload),Z,pe,xe,we)}}if(Se)return we=we(C),Se=xe===""?"."+T(C,0):xe,le(we)?(pe="",Se!=null&&(pe=Se.replace(k,"$&/")+"/"),D(we,Z,pe,"",function(Ut){return Ut})):we!=null&&(_(we)&&(we=se(we,pe+(we.key==null||C&&C.key===we.key?"":(""+we.key).replace(k,"$&/")+"/")+Se)),Z.push(we)),1;Se=0;var Ke=xe===""?".":xe+":";if(le(C))for(var $e=0;$e<C.length;$e++)xe=C[$e],_e=Ke+T(xe,$e),Se+=D(xe,Z,pe,_e,we);else if($e=P(C),typeof $e=="function")for(C=$e.call(C),$e=0;!(xe=C.next()).done;)xe=xe.value,_e=Ke+T(xe,$e++),Se+=D(xe,Z,pe,_e,we);else if(_e==="object"){if(typeof C.then=="function")return D(F(C),Z,pe,xe,we);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function Q(C,Z,pe){if(C==null)return C;var xe=[],we=0;return D(C,xe,"","",function(_e){return Z.call(pe,_e,we++)}),xe}function N(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(pe){(C._status===0||C._status===-1)&&(C._status=1,C._result=pe)},function(pe){(C._status===0||C._status===-1)&&(C._status=2,C._result=pe)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var ne=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ie={map:Q,forEach:function(C,Z,pe){Q(C,function(){Z.apply(this,arguments)},pe)},count:function(C){var Z=0;return Q(C,function(){Z++}),Z},toArray:function(C){return Q(C,function(Z){return Z})||[]},only:function(C){if(!_(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=x,De.Children=ie,De.Component=B,De.Fragment=r,De.Profiler=p,De.PureComponent=O,De.StrictMode=d,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return H.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,Z,pe){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var xe=J({},C.props),we=C.key;if(Z!=null)for(_e in Z.key!==void 0&&(we=""+Z.key),Z)!oe.call(Z,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&Z.ref===void 0||(xe[_e]=Z[_e]);var _e=arguments.length-2;if(_e===1)xe.children=pe;else if(1<_e){for(var Se=Array(_e),Ke=0;Ke<_e;Ke++)Se[Ke]=arguments[Ke+2];xe.children=Se}return re(C.type,we,xe)},De.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:h,_context:C},C},De.createElement=function(C,Z,pe){var xe,we={},_e=null;if(Z!=null)for(xe in Z.key!==void 0&&(_e=""+Z.key),Z)oe.call(Z,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(we[xe]=Z[xe]);var Se=arguments.length-2;if(Se===1)we.children=pe;else if(1<Se){for(var Ke=Array(Se),$e=0;$e<Se;$e++)Ke[$e]=arguments[$e+2];we.children=Ke}if(C&&C.defaultProps)for(xe in Se=C.defaultProps,Se)we[xe]===void 0&&(we[xe]=Se[xe]);return re(C,_e,we)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:j,render:C}},De.isValidElement=_,De.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:N}},De.memo=function(C,Z){return{$$typeof:y,type:C,compare:Z===void 0?null:Z}},De.startTransition=function(C){var Z=H.T,pe={};H.T=pe;try{var xe=C(),we=H.S;we!==null&&we(pe,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(ue,ne)}catch(_e){ne(_e)}finally{Z!==null&&pe.types!==null&&(Z.types=pe.types),H.T=Z}},De.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},De.use=function(C){return H.H.use(C)},De.useActionState=function(C,Z,pe){return H.H.useActionState(C,Z,pe)},De.useCallback=function(C,Z){return H.H.useCallback(C,Z)},De.useContext=function(C){return H.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,Z){return H.H.useDeferredValue(C,Z)},De.useEffect=function(C,Z){return H.H.useEffect(C,Z)},De.useEffectEvent=function(C){return H.H.useEffectEvent(C)},De.useId=function(){return H.H.useId()},De.useImperativeHandle=function(C,Z,pe){return H.H.useImperativeHandle(C,Z,pe)},De.useInsertionEffect=function(C,Z){return H.H.useInsertionEffect(C,Z)},De.useLayoutEffect=function(C,Z){return H.H.useLayoutEffect(C,Z)},De.useMemo=function(C,Z){return H.H.useMemo(C,Z)},De.useOptimistic=function(C,Z){return H.H.useOptimistic(C,Z)},De.useReducer=function(C,Z,pe){return H.H.useReducer(C,Z,pe)},De.useRef=function(C){return H.H.useRef(C)},De.useState=function(C){return H.H.useState(C)},De.useSyncExternalStore=function(C,Z,pe){return H.H.useSyncExternalStore(C,Z,pe)},De.useTransition=function(){return H.H.useTransition()},De.version="19.2.6",De}var Sf;function vd(){return Sf||(Sf=1,Yc.exports=vb()),Yc.exports}var f=vd();const jb=gb(f),wb=xb({__proto__:null,default:jb},[f]);var Vc={exports:{}},Xi={},$c={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function Nb(){return kf||(kf=1,(function(s){function l(D,Q){var N=D.length;D.push(Q);e:for(;0<N;){var ne=N-1>>>1,ie=D[ne];if(0<p(ie,Q))D[ne]=Q,D[N]=ie,N=ne;else break e}}function r(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var Q=D[0],N=D.pop();if(N!==Q){D[0]=N;e:for(var ne=0,ie=D.length,C=ie>>>1;ne<C;){var Z=2*(ne+1)-1,pe=D[Z],xe=Z+1,we=D[xe];if(0>p(pe,N))xe<ie&&0>p(we,pe)?(D[ne]=we,D[xe]=N,ne=xe):(D[ne]=pe,D[Z]=N,ne=Z);else if(xe<ie&&0>p(we,N))D[ne]=we,D[xe]=N,ne=xe;else break e}}return Q}function p(D,Q){var N=D.sortIndex-Q.sortIndex;return N!==0?N:D.id-Q.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,j=m.now();s.unstable_now=function(){return m.now()-j}}var v=[],y=[],b=1,x=null,U=3,P=!1,W=!1,J=!1,S=!1,B=typeof setTimeout=="function"?setTimeout:null,G=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function X(D){for(var Q=r(y);Q!==null;){if(Q.callback===null)d(y);else if(Q.startTime<=D)d(y),Q.sortIndex=Q.expirationTime,l(v,Q);else break;Q=r(y)}}function le(D){if(J=!1,X(D),!W)if(r(v)!==null)W=!0,ue||(ue=!0,A());else{var Q=r(y);Q!==null&&F(le,Q.startTime-D)}}var ue=!1,H=-1,oe=5,re=-1;function se(){return S?!0:!(s.unstable_now()-re<oe)}function _(){if(S=!1,ue){var D=s.unstable_now();re=D;var Q=!0;try{e:{W=!1,J&&(J=!1,G(H),H=-1),P=!0;var N=U;try{t:{for(X(D),x=r(v);x!==null&&!(x.expirationTime>D&&se());){var ne=x.callback;if(typeof ne=="function"){x.callback=null,U=x.priorityLevel;var ie=ne(x.expirationTime<=D);if(D=s.unstable_now(),typeof ie=="function"){x.callback=ie,X(D),Q=!0;break t}x===r(v)&&d(v),X(D)}else d(v);x=r(v)}if(x!==null)Q=!0;else{var C=r(y);C!==null&&F(le,C.startTime-D),Q=!1}}break e}finally{x=null,U=N,P=!1}Q=void 0}}finally{Q?A():ue=!1}}}var A;if(typeof O=="function")A=function(){O(_)};else if(typeof MessageChannel<"u"){var k=new MessageChannel,T=k.port2;k.port1.onmessage=_,A=function(){T.postMessage(null)}}else A=function(){B(_,0)};function F(D,Q){H=B(function(){D(s.unstable_now())},Q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return U},s.unstable_next=function(D){switch(U){case 1:case 2:case 3:var Q=3;break;default:Q=U}var N=U;U=Q;try{return D()}finally{U=N}},s.unstable_requestPaint=function(){S=!0},s.unstable_runWithPriority=function(D,Q){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var N=U;U=D;try{return Q()}finally{U=N}},s.unstable_scheduleCallback=function(D,Q,N){var ne=s.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?ne+N:ne):N=ne,D){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=N+ie,D={id:b++,callback:Q,priorityLevel:D,startTime:N,expirationTime:ie,sortIndex:-1},N>ne?(D.sortIndex=N,l(y,D),r(v)===null&&D===r(y)&&(J?(G(H),H=-1):J=!0,F(le,N-ne))):(D.sortIndex=ie,l(v,D),W||P||(W=!0,ue||(ue=!0,A()))),D},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(D){var Q=U;return function(){var N=U;U=Q;try{return D.apply(this,arguments)}finally{U=N}}}})(Qc)),Qc}var Cf;function _b(){return Cf||(Cf=1,$c.exports=Nb()),$c.exports}var Xc={exports:{}},Zt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function Sb(){if(zf)return Zt;zf=1;var s=vd();function l(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var d={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(v,y,b){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:x==null?null:""+x,children:v,containerInfo:y,implementation:b}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Zt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Zt.createPortal=function(v,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(l(299));return h(v,y,null,b)},Zt.flushSync=function(v){var y=m.T,b=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=y,d.p=b,d.d.f()}},Zt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(v,y))},Zt.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},Zt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var b=y.as,x=j(b,y.crossOrigin),U=typeof y.integrity=="string"?y.integrity:void 0,P=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?d.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:x,integrity:U,fetchPriority:P}):b==="script"&&d.d.X(v,{crossOrigin:x,integrity:U,fetchPriority:P,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Zt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=j(y.as,y.crossOrigin);d.d.M(v,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(v)},Zt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,x=j(b,y.crossOrigin);d.d.L(v,b,{crossOrigin:x,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Zt.preloadModule=function(v,y){if(typeof v=="string")if(y){var b=j(y.as,y.crossOrigin);d.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(v)},Zt.requestFormReset=function(v){d.d.r(v)},Zt.unstable_batchedUpdates=function(v,y){return v(y)},Zt.useFormState=function(v,y,b){return m.H.useFormState(v,y,b)},Zt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Zt.version="19.2.6",Zt}var Tf;function Th(){if(Tf)return Xc.exports;Tf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Xc.exports=Sb(),Xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function kb(){if(Ef)return Xi;Ef=1;var s=_b(),l=vd(),r=Th();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function y(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,i=a;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return v(o),e;if(c===i)return v(o),a;c=c.sibling}throw Error(d(188))}if(n.return!==i.return)n=o,i=c;else{for(var u=!1,g=o.child;g;){if(g===n){u=!0,n=o,i=c;break}if(g===i){u=!0,i=o,n=c;break}g=g.sibling}if(!u){for(g=c.child;g;){if(g===n){u=!0,n=c,i=o;break}if(g===i){u=!0,i=c,n=o;break}g=g.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function b(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=b(e),a!==null)return a;e=e.sibling}return null}var x=Object.assign,U=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),G=Symbol.for("react.consumer"),O=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),H=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),re=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function A(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var k=Symbol.for("react.client.reference");function T(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===k?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case B:return"Profiler";case S:return"StrictMode";case le:return"Suspense";case ue:return"SuspenseList";case re:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case O:return e.displayName||"Context";case G:return(e._context.displayName||"Context")+".Consumer";case X:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case H:return a=e.displayName||null,a!==null?a:T(e.type)||"Memo";case oe:a=e._payload,e=e._init;try{return T(e(a))}catch{}}return null}var F=Array.isArray,D=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},ne=[],ie=-1;function C(e){return{current:e}}function Z(e){0>ie||(e.current=ne[ie],ne[ie]=null,ie--)}function pe(e,a){ie++,ne[ie]=e.current,e.current=a}var xe=C(null),we=C(null),_e=C(null),Se=C(null);function Ke(e,a){switch(pe(_e,a),pe(we,e),pe(xe,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?$m(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=$m(a),e=Qm(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(xe),pe(xe,e)}function $e(){Z(xe),Z(we),Z(_e)}function Ut(e){e.memoizedState!==null&&pe(Se,e);var a=xe.current,n=Qm(a,e.type);a!==n&&(pe(we,e),pe(xe,n))}function gt(e){we.current===e&&(Z(xe),Z(we)),Se.current===e&&(Z(Se),Gi._currentValue=N)}var Qt,Et;function st(e){if(Qt===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Qt=a&&a[1]||"",Et=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Et}var bt=!1;function Ea(e,a){if(!e||bt)return"";bt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var ae=function(){throw Error()};if(Object.defineProperty(ae.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ae,[])}catch(K){var $=K}Reflect.construct(e,[],ae)}else{try{ae.call()}catch(K){$=K}e.call(ae.prototype)}}else{try{throw Error()}catch(K){$=K}(ae=e())&&typeof ae.catch=="function"&&ae.catch(function(){})}}catch(K){if(K&&$&&typeof K.stack=="string")return[K.stack,$.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),u=c[0],g=c[1];if(u&&g){var z=u.split(`
`),V=g.split(`
`);for(o=i=0;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;for(;o<V.length&&!V[o].includes("DetermineComponentFrameRoot");)o++;if(i===z.length||o===V.length)for(i=z.length-1,o=V.length-1;1<=i&&0<=o&&z[i]!==V[o];)o--;for(;1<=i&&0<=o;i--,o--)if(z[i]!==V[o]){if(i!==1||o!==1)do if(i--,o--,0>o||z[i]!==V[o]){var I=`
`+z[i].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=i&&0<=o);break}}}finally{bt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?st(n):""}function pt(e,a){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==a&&a!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Ea(e.type,!1);case 11:return Ea(e.type.render,!1);case 1:return Ea(e.type,!0);case 31:return st("Activity");default:return""}}function It(e){try{var a="",n=null;do a+=pt(e,n),n=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Rt=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,ea=s.unstable_cancelCallback,E=s.unstable_shouldYield,R=s.unstable_requestPaint,ce=s.unstable_now,ee=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,Ce=s.unstable_UserBlockingPriority,Ee=s.unstable_NormalPriority,We=s.unstable_LowPriority,cn=s.unstable_IdlePriority,ta=s.log,Yn=s.unstable_setDisableYieldValue,Ma=null,ft=null;function Jt(e){if(typeof ta=="function"&&Yn(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Ma,e)}catch{}}var L=Math.clz32?Math.clz32:Ue,de=Math.log,fe=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(de(e)/fe|0)|0}var Me=256,Pe=262144,Fe=4194304;function He(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function aa(e,a,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=i&134217727;return g!==0?(i=g&~c,i!==0?o=He(i):(u&=g,u!==0?o=He(u):n||(n=g&~e,n!==0&&(o=He(n))))):(g=i&~c,g!==0?o=He(g):u!==0?o=He(u):n||(n=i&~e,n!==0&&(o=He(n)))),o===0?0:a!==0&&a!==o&&(a&c)===0&&(c=o&-o,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:o}function Ft(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function dn(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var e=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),e}function ti(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Vn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ra(e,a,n,i,o,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var g=e.entanglements,z=e.expirationTimes,V=e.hiddenUpdates;for(n=u&~n;0<n;){var I=31-L(n),ae=1<<I;g[I]=0,z[I]=-1;var $=V[I];if($!==null)for(V[I]=null,I=0;I<$.length;I++){var K=$[I];K!==null&&(K.lane&=-536870913)}n&=~ae}i!==0&&w(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function w(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-L(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function be(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var i=31-L(n),o=1<<i;o&a|e[i]&a&&(e[i]|=a),n&=~o}}function ge(e,a){var n=a&-a;return n=(n&42)!==0?1:Le(n),(n&(e.suspendedLanes|a))!==0?0:n}function Le(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Wt(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Td(){var e=Q.p;return e!==0?e:(e=window.event,e===void 0?32:hf(e.type))}function Ed(e,a){var n=Q.p;try{return Q.p=e,a()}finally{Q.p=n}}var un=Math.random().toString(36).slice(2),qt="__reactFiber$"+un,na="__reactProps$"+un,pl="__reactContainer$"+un,Do="__reactEvents$"+un,ix="__reactListeners$"+un,sx="__reactHandles$"+un,Md="__reactResources$"+un,ai="__reactMarker$"+un;function Oo(e){delete e[qt],delete e[na],delete e[Do],delete e[ix],delete e[sx]}function ml(e){var a=e[qt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[pl]||n[qt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Pm(e);e!==null;){if(n=e[qt])return n;e=Pm(e)}return a}e=n,n=e.parentNode}return null}function fl(e){if(e=e[qt]||e[pl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ni(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function hl(e){var a=e[Md];return a||(a=e[Md]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ht(e){e[ai]=!0}var Dd=new Set,Od={};function $n(e,a){xl(e,a),xl(e+"Capture",a)}function xl(e,a){for(Od[e]=a,e=0;e<a.length;e++)Dd.add(a[e])}var ox=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ad={},Ud={};function rx(e){return Rt.call(Ud,e)?!0:Rt.call(Ad,e)?!1:ox.test(e)?Ud[e]=!0:(Ad[e]=!0,!1)}function as(e,a,n){if(rx(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function ns(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Ga(e,a,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+i)}}function va(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Rd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function cx(e,a,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ao(e){if(!e._valueTracker){var a=Rd(e)?"checked":"value";e._valueTracker=cx(e,a,""+e[a])}}function Hd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),i="";return e&&(i=Rd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(a.setValue(e),!0):!1}function ls(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var dx=/[\n"\\]/g;function ja(e){return e.replace(dx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Uo(e,a,n,i,o,c,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+va(a)):e.value!==""+va(a)&&(e.value=""+va(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Ro(e,u,va(a)):n!=null?Ro(e,u,va(n)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+va(g):e.removeAttribute("name")}function Ld(e,a,n,i,o,c,u,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){Ao(e);return}n=n!=null?""+va(n):"",a=a!=null?""+va(a):n,g||a===e.value||(e.value=a),e.defaultValue=a}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=g?e.checked:!!i,e.defaultChecked=!!i,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ao(e)}function Ro(e,a,n){a==="number"&&ls(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function gl(e,a,n,i){if(e=e.options,a){a={};for(var o=0;o<n.length;o++)a["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=a.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+va(n),a=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function qd(e,a,n){if(a!=null&&(a=""+va(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+va(n):""}function Bd(e,a,n,i){if(a==null){if(i!=null){if(n!=null)throw Error(d(92));if(F(i)){if(1<i.length)throw Error(d(93));i=i[0]}n=i}n==null&&(n=""),a=n}n=va(a),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ao(e)}function bl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var ux=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Gd(e,a,n){var i=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,n):typeof n!="number"||n===0||ux.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Yd(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in a)i=a[o],a.hasOwnProperty(o)&&n[o]!==i&&Gd(e,o,i)}else for(var c in a)a.hasOwnProperty(c)&&Gd(e,c,a[c])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var px=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),mx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function is(e){return mx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ya(){}var Lo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var yl=null,vl=null;function Vd(e){var a=fl(e);if(a&&(e=a.stateNode)){var n=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(Uo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+ja(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var i=n[a];if(i!==e&&i.form===e.form){var o=i[na]||null;if(!o)throw Error(d(90));Uo(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<n.length;a++)i=n[a],i.form===e.form&&Hd(i)}break e;case"textarea":qd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&gl(e,!!n.multiple,a,!1)}}}var Bo=!1;function $d(e,a,n){if(Bo)return e(a,n);Bo=!0;try{var i=e(a);return i}finally{if(Bo=!1,(yl!==null||vl!==null)&&(Xs(),yl&&(a=yl,e=vl,vl=yl=null,Vd(a),e)))for(a=0;a<e.length;a++)Vd(e[a])}}function li(e,a){var n=e.stateNode;if(n===null)return null;var i=n[na]||null;if(i===null)return null;n=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var Va=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if(Va)try{var ii={};Object.defineProperty(ii,"passive",{get:function(){Go=!0}}),window.addEventListener("test",ii,ii),window.removeEventListener("test",ii,ii)}catch{Go=!1}var pn=null,Yo=null,ss=null;function Qd(){if(ss)return ss;var e,a=Yo,n=a.length,i,o="value"in pn?pn.value:pn.textContent,c=o.length;for(e=0;e<n&&a[e]===o[e];e++);var u=n-e;for(i=1;i<=u&&a[n-i]===o[c-i];i++);return ss=o.slice(e,1<i?1-i:void 0)}function os(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function rs(){return!0}function Xd(){return!1}function la(e){function a(n,i,o,c,u){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(n=e[g],this[g]=n?n(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?rs:Xd,this.isPropagationStopped=Xd,this}return x(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rs)},persist:function(){},isPersistent:rs}),a}var Qn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cs=la(Qn),si=x({},Qn,{view:0,detail:0}),fx=la(si),Vo,$o,oi,ds=x({},si,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==oi&&(oi&&e.type==="mousemove"?(Vo=e.screenX-oi.screenX,$o=e.screenY-oi.screenY):$o=Vo=0,oi=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),Zd=la(ds),hx=x({},ds,{dataTransfer:0}),xx=la(hx),gx=x({},si,{relatedTarget:0}),Qo=la(gx),bx=x({},Qn,{animationName:0,elapsedTime:0,pseudoElement:0}),yx=la(bx),vx=x({},Qn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jx=la(vx),wx=x({},Qn,{data:0}),Kd=la(wx),Nx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Sx[e])?!!a[e]:!1}function Xo(){return kx}var Cx=x({},si,{key:function(e){if(e.key){var a=Nx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=os(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?_x[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?os(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?os(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),zx=la(Cx),Tx=x({},ds,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jd=la(Tx),Ex=x({},si,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Mx=la(Ex),Dx=x({},Qn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ox=la(Dx),Ax=x({},ds,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ux=la(Ax),Rx=x({},Qn,{newState:0,oldState:0}),Hx=la(Rx),Lx=[9,13,27,32],Zo=Va&&"CompositionEvent"in window,ri=null;Va&&"documentMode"in document&&(ri=document.documentMode);var qx=Va&&"TextEvent"in window&&!ri,Fd=Va&&(!Zo||ri&&8<ri&&11>=ri),Wd=" ",Pd=!1;function Id(e,a){switch(e){case"keyup":return Lx.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function eu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jl=!1;function Bx(e,a){switch(e){case"compositionend":return eu(a);case"keypress":return a.which!==32?null:(Pd=!0,Wd);case"textInput":return e=a.data,e===Wd&&Pd?null:e;default:return null}}function Gx(e,a){if(jl)return e==="compositionend"||!Zo&&Id(e,a)?(e=Qd(),ss=Yo=pn=null,jl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Fd&&a.locale!=="ko"?null:a.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function tu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Yx[e.type]:a==="textarea"}function au(e,a,n,i){yl?vl?vl.push(i):vl=[i]:yl=i,a=Is(a,"onChange"),0<a.length&&(n=new cs("onChange","change",null,n,i),e.push({event:n,listeners:a}))}var ci=null,di=null;function Vx(e){Lm(e,0)}function us(e){var a=ni(e);if(Hd(a))return e}function nu(e,a){if(e==="change")return a}var lu=!1;if(Va){var Ko;if(Va){var Jo="oninput"in document;if(!Jo){var iu=document.createElement("div");iu.setAttribute("oninput","return;"),Jo=typeof iu.oninput=="function"}Ko=Jo}else Ko=!1;lu=Ko&&(!document.documentMode||9<document.documentMode)}function su(){ci&&(ci.detachEvent("onpropertychange",ou),di=ci=null)}function ou(e){if(e.propertyName==="value"&&us(di)){var a=[];au(a,di,e,qo(e)),$d(Vx,a)}}function $x(e,a,n){e==="focusin"?(su(),ci=a,di=n,ci.attachEvent("onpropertychange",ou)):e==="focusout"&&su()}function Qx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return us(di)}function Xx(e,a){if(e==="click")return us(a)}function Zx(e,a){if(e==="input"||e==="change")return us(a)}function Kx(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:Kx;function ui(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),i=Object.keys(a);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Rt.call(a,o)||!ua(e[o],a[o]))return!1}return!0}function ru(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cu(e,a){var n=ru(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=a&&i>=a)return{node:n,offset:a-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=ru(n)}}function du(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?du(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function uu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ls(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ls(e.document)}return a}function Fo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Jx=Va&&"documentMode"in document&&11>=document.documentMode,wl=null,Wo=null,pi=null,Po=!1;function pu(e,a,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||wl==null||wl!==ls(i)||(i=wl,"selectionStart"in i&&Fo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),pi&&ui(pi,i)||(pi=i,i=Is(Wo,"onSelect"),0<i.length&&(a=new cs("onSelect","select",null,a,n),e.push({event:a,listeners:i}),a.target=wl)))}function Xn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Nl={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Io={},mu={};Va&&(mu=document.createElement("div").style,"AnimationEvent"in window||(delete Nl.animationend.animation,delete Nl.animationiteration.animation,delete Nl.animationstart.animation),"TransitionEvent"in window||delete Nl.transitionend.transition);function Zn(e){if(Io[e])return Io[e];if(!Nl[e])return e;var a=Nl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in mu)return Io[e]=a[n];return e}var fu=Zn("animationend"),hu=Zn("animationiteration"),xu=Zn("animationstart"),Fx=Zn("transitionrun"),Wx=Zn("transitionstart"),Px=Zn("transitioncancel"),gu=Zn("transitionend"),bu=new Map,er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");er.push("scrollEnd");function Da(e,a){bu.set(e,a),$n(a,[e])}var ps=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},wa=[],_l=0,tr=0;function ms(){for(var e=_l,a=tr=_l=0;a<e;){var n=wa[a];wa[a++]=null;var i=wa[a];wa[a++]=null;var o=wa[a];wa[a++]=null;var c=wa[a];if(wa[a++]=null,i!==null&&o!==null){var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}c!==0&&yu(n,o,c)}}function fs(e,a,n,i){wa[_l++]=e,wa[_l++]=a,wa[_l++]=n,wa[_l++]=i,tr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ar(e,a,n,i){return fs(e,a,n,i),hs(e)}function Kn(e,a){return fs(e,null,null,a),hs(e)}function yu(e,a,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&a!==null&&(o=31-L(n),e=c.hiddenUpdates,i=e[o],i===null?e[o]=[a]:i.push(a),a.lane=n|536870912),c):null}function hs(e){if(50<Ai)throw Ai=0,uc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Sl={};function Ix(e,a,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pa(e,a,n,i){return new Ix(e,a,n,i)}function nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $a(e,a){var n=e.alternate;return n===null?(n=pa(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function vu(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function xs(e,a,n,i,o,c){var u=0;if(i=e,typeof e=="function")nr(e)&&(u=1);else if(typeof e=="string")u=lb(e,n,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case re:return e=pa(31,n,a,o),e.elementType=re,e.lanes=c,e;case J:return Jn(n.children,o,c,a);case S:u=8,o|=24;break;case B:return e=pa(12,n,a,o|2),e.elementType=B,e.lanes=c,e;case le:return e=pa(13,n,a,o),e.elementType=le,e.lanes=c,e;case ue:return e=pa(19,n,a,o),e.elementType=ue,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:u=10;break e;case G:u=9;break e;case X:u=11;break e;case H:u=14;break e;case oe:u=16,i=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),i=null}return a=pa(u,n,a,o),a.elementType=e,a.type=i,a.lanes=c,a}function Jn(e,a,n,i){return e=pa(7,e,i,a),e.lanes=n,e}function lr(e,a,n){return e=pa(6,e,null,a),e.lanes=n,e}function ju(e){var a=pa(18,null,null,0);return a.stateNode=e,a}function ir(e,a,n){return a=pa(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var wu=new WeakMap;function Na(e,a){if(typeof e=="object"&&e!==null){var n=wu.get(e);return n!==void 0?n:(a={value:e,source:a,stack:It(a)},wu.set(e,a),a)}return{value:e,source:a,stack:It(a)}}var kl=[],Cl=0,gs=null,mi=0,_a=[],Sa=0,mn=null,Ha=1,La="";function Qa(e,a){kl[Cl++]=mi,kl[Cl++]=gs,gs=e,mi=a}function Nu(e,a,n){_a[Sa++]=Ha,_a[Sa++]=La,_a[Sa++]=mn,mn=e;var i=Ha;e=La;var o=32-L(i)-1;i&=~(1<<o),n+=1;var c=32-L(a)+o;if(30<c){var u=o-o%5;c=(i&(1<<u)-1).toString(32),i>>=u,o-=u,Ha=1<<32-L(a)+o|n<<o|i,La=c+e}else Ha=1<<c|n<<o|i,La=e}function sr(e){e.return!==null&&(Qa(e,1),Nu(e,1,0))}function or(e){for(;e===gs;)gs=kl[--Cl],kl[Cl]=null,mi=kl[--Cl],kl[Cl]=null;for(;e===mn;)mn=_a[--Sa],_a[Sa]=null,La=_a[--Sa],_a[Sa]=null,Ha=_a[--Sa],_a[Sa]=null}function _u(e,a){_a[Sa++]=Ha,_a[Sa++]=La,_a[Sa++]=mn,Ha=a.id,La=a.overflow,mn=e}var Bt=null,rt=null,Ve=!1,fn=null,ka=!1,rr=Error(d(519));function hn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw fi(Na(a,e)),rr}function Su(e){var a=e.stateNode,n=e.type,i=e.memoizedProps;switch(a[qt]=e,a[na]=i,n){case"dialog":Be("cancel",a),Be("close",a);break;case"iframe":case"object":case"embed":Be("load",a);break;case"video":case"audio":for(n=0;n<Ri.length;n++)Be(Ri[n],a);break;case"source":Be("error",a);break;case"img":case"image":case"link":Be("error",a),Be("load",a);break;case"details":Be("toggle",a);break;case"input":Be("invalid",a),Ld(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Be("invalid",a);break;case"textarea":Be("invalid",a),Bd(a,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||i.suppressHydrationWarning===!0||Ym(a.textContent,n)?(i.popover!=null&&(Be("beforetoggle",a),Be("toggle",a)),i.onScroll!=null&&Be("scroll",a),i.onScrollEnd!=null&&Be("scrollend",a),i.onClick!=null&&(a.onclick=Ya),a=!0):a=!1,a||hn(e,!0)}function ku(e){for(Bt=e.return;Bt;)switch(Bt.tag){case 5:case 31:case 13:ka=!1;return;case 27:case 3:ka=!0;return;default:Bt=Bt.return}}function zl(e){if(e!==Bt)return!1;if(!Ve)return ku(e),Ve=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||kc(e.type,e.memoizedProps)),n=!n),n&&rt&&hn(e),ku(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));rt=Wm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));rt=Wm(e)}else a===27?(a=rt,Tn(e.type)?(e=Mc,Mc=null,rt=e):rt=a):rt=Bt?za(e.stateNode.nextSibling):null;return!0}function Fn(){rt=Bt=null,Ve=!1}function cr(){var e=fn;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),fn=null),e}function fi(e){fn===null?fn=[e]:fn.push(e)}var dr=C(null),Wn=null,Xa=null;function xn(e,a,n){pe(dr,a._currentValue),a._currentValue=n}function Za(e){e._currentValue=dr.current,Z(dr)}function ur(e,a,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===n)break;e=e.return}}function pr(e,a,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var u=o.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=o;for(var z=0;z<a.length;z++)if(g.context===a[z]){c.lanes|=n,g=c.alternate,g!==null&&(g.lanes|=n),ur(c.return,n,e),i||(u=null);break e}c=g.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),ur(u,n,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function Tl(e,a,n,i){e=null;for(var o=a,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var g=o.type;ua(o.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(o===Se.current){if(u=o.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Gi):e=[Gi])}o=o.return}e!==null&&pr(a,e,n,i),a.flags|=262144}function bs(e){for(e=e.firstContext;e!==null;){if(!ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Pn(e){Wn=e,Xa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Gt(e){return Cu(Wn,e)}function ys(e,a){return Wn===null&&Pn(e),Cu(e,a)}function Cu(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Xa===null){if(e===null)throw Error(d(308));Xa=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Xa=Xa.next=a;return n}var eg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},tg=s.unstable_scheduleCallback,ag=s.unstable_NormalPriority,Nt={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mr(){return{controller:new eg,data:new Map,refCount:0}}function hi(e){e.refCount--,e.refCount===0&&tg(ag,function(){e.controller.abort()})}var xi=null,fr=0,El=0,Ml=null;function ng(e,a){if(xi===null){var n=xi=[];fr=0,El=gc(),Ml={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fr++,a.then(zu,zu),a}function zu(){if(--fr===0&&xi!==null){Ml!==null&&(Ml.status="fulfilled");var e=xi;xi=null,El=0,Ml=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function lg(e,a){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var o=0;o<n.length;o++)(0,n[o])(a)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Tu=D.S;D.S=function(e,a){pm=ce(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&ng(e,a),Tu!==null&&Tu(e,a)};var In=C(null);function hr(){var e=In.current;return e!==null?e:it.pooledCache}function vs(e,a){a===null?pe(In,In.current):pe(In,a.pool)}function Eu(){var e=hr();return e===null?null:{parent:Nt._currentValue,pool:e}}var Dl=Error(d(460)),xr=Error(d(474)),js=Error(d(542)),ws={then:function(){}};function Mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Du(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Ya,Ya),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Au(e),e;default:if(typeof a.status=="string")a.then(Ya,Ya);else{if(e=it,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=i}},function(i){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Au(e),e}throw tl=a,Dl}}function el(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(tl=n,Dl):n}}var tl=null;function Ou(){if(tl===null)throw Error(d(459));var e=tl;return tl=null,e}function Au(e){if(e===Dl||e===js)throw Error(d(483))}var Ol=null,gi=0;function Ns(e){var a=gi;return gi+=1,Ol===null&&(Ol=[]),Du(Ol,e,a)}function bi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function _s(e,a){throw a.$$typeof===U?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Uu(e){function a(q,M){if(e){var Y=q.deletions;Y===null?(q.deletions=[M],q.flags|=16):Y.push(M)}}function n(q,M){if(!e)return null;for(;M!==null;)a(q,M),M=M.sibling;return null}function i(q){for(var M=new Map;q!==null;)q.key!==null?M.set(q.key,q):M.set(q.index,q),q=q.sibling;return M}function o(q,M){return q=$a(q,M),q.index=0,q.sibling=null,q}function c(q,M,Y){return q.index=Y,e?(Y=q.alternate,Y!==null?(Y=Y.index,Y<M?(q.flags|=67108866,M):Y):(q.flags|=67108866,M)):(q.flags|=1048576,M)}function u(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function g(q,M,Y,te){return M===null||M.tag!==6?(M=lr(Y,q.mode,te),M.return=q,M):(M=o(M,Y),M.return=q,M)}function z(q,M,Y,te){var ke=Y.type;return ke===J?I(q,M,Y.props.children,te,Y.key):M!==null&&(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===oe&&el(ke)===M.type)?(M=o(M,Y.props),bi(M,Y),M.return=q,M):(M=xs(Y.type,Y.key,Y.props,null,q.mode,te),bi(M,Y),M.return=q,M)}function V(q,M,Y,te){return M===null||M.tag!==4||M.stateNode.containerInfo!==Y.containerInfo||M.stateNode.implementation!==Y.implementation?(M=ir(Y,q.mode,te),M.return=q,M):(M=o(M,Y.children||[]),M.return=q,M)}function I(q,M,Y,te,ke){return M===null||M.tag!==7?(M=Jn(Y,q.mode,te,ke),M.return=q,M):(M=o(M,Y),M.return=q,M)}function ae(q,M,Y){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=lr(""+M,q.mode,Y),M.return=q,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case P:return Y=xs(M.type,M.key,M.props,null,q.mode,Y),bi(Y,M),Y.return=q,Y;case W:return M=ir(M,q.mode,Y),M.return=q,M;case oe:return M=el(M),ae(q,M,Y)}if(F(M)||A(M))return M=Jn(M,q.mode,Y,null),M.return=q,M;if(typeof M.then=="function")return ae(q,Ns(M),Y);if(M.$$typeof===O)return ae(q,ys(q,M),Y);_s(q,M)}return null}function $(q,M,Y,te){var ke=M!==null?M.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint")return ke!==null?null:g(q,M,""+Y,te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:return Y.key===ke?z(q,M,Y,te):null;case W:return Y.key===ke?V(q,M,Y,te):null;case oe:return Y=el(Y),$(q,M,Y,te)}if(F(Y)||A(Y))return ke!==null?null:I(q,M,Y,te,null);if(typeof Y.then=="function")return $(q,M,Ns(Y),te);if(Y.$$typeof===O)return $(q,M,ys(q,Y),te);_s(q,Y)}return null}function K(q,M,Y,te,ke){if(typeof te=="string"&&te!==""||typeof te=="number"||typeof te=="bigint")return q=q.get(Y)||null,g(M,q,""+te,ke);if(typeof te=="object"&&te!==null){switch(te.$$typeof){case P:return q=q.get(te.key===null?Y:te.key)||null,z(M,q,te,ke);case W:return q=q.get(te.key===null?Y:te.key)||null,V(M,q,te,ke);case oe:return te=el(te),K(q,M,Y,te,ke)}if(F(te)||A(te))return q=q.get(Y)||null,I(M,q,te,ke,null);if(typeof te.then=="function")return K(q,M,Y,Ns(te),ke);if(te.$$typeof===O)return K(q,M,Y,ys(M,te),ke);_s(M,te)}return null}function je(q,M,Y,te){for(var ke=null,Qe=null,Ne=M,Ae=M=0,Ye=null;Ne!==null&&Ae<Y.length;Ae++){Ne.index>Ae?(Ye=Ne,Ne=null):Ye=Ne.sibling;var Xe=$(q,Ne,Y[Ae],te);if(Xe===null){Ne===null&&(Ne=Ye);break}e&&Ne&&Xe.alternate===null&&a(q,Ne),M=c(Xe,M,Ae),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe,Ne=Ye}if(Ae===Y.length)return n(q,Ne),Ve&&Qa(q,Ae),ke;if(Ne===null){for(;Ae<Y.length;Ae++)Ne=ae(q,Y[Ae],te),Ne!==null&&(M=c(Ne,M,Ae),Qe===null?ke=Ne:Qe.sibling=Ne,Qe=Ne);return Ve&&Qa(q,Ae),ke}for(Ne=i(Ne);Ae<Y.length;Ae++)Ye=K(Ne,q,Ae,Y[Ae],te),Ye!==null&&(e&&Ye.alternate!==null&&Ne.delete(Ye.key===null?Ae:Ye.key),M=c(Ye,M,Ae),Qe===null?ke=Ye:Qe.sibling=Ye,Qe=Ye);return e&&Ne.forEach(function(An){return a(q,An)}),Ve&&Qa(q,Ae),ke}function ze(q,M,Y,te){if(Y==null)throw Error(d(151));for(var ke=null,Qe=null,Ne=M,Ae=M=0,Ye=null,Xe=Y.next();Ne!==null&&!Xe.done;Ae++,Xe=Y.next()){Ne.index>Ae?(Ye=Ne,Ne=null):Ye=Ne.sibling;var An=$(q,Ne,Xe.value,te);if(An===null){Ne===null&&(Ne=Ye);break}e&&Ne&&An.alternate===null&&a(q,Ne),M=c(An,M,Ae),Qe===null?ke=An:Qe.sibling=An,Qe=An,Ne=Ye}if(Xe.done)return n(q,Ne),Ve&&Qa(q,Ae),ke;if(Ne===null){for(;!Xe.done;Ae++,Xe=Y.next())Xe=ae(q,Xe.value,te),Xe!==null&&(M=c(Xe,M,Ae),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe);return Ve&&Qa(q,Ae),ke}for(Ne=i(Ne);!Xe.done;Ae++,Xe=Y.next())Xe=K(Ne,q,Ae,Xe.value,te),Xe!==null&&(e&&Xe.alternate!==null&&Ne.delete(Xe.key===null?Ae:Xe.key),M=c(Xe,M,Ae),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe);return e&&Ne.forEach(function(hb){return a(q,hb)}),Ve&&Qa(q,Ae),ke}function nt(q,M,Y,te){if(typeof Y=="object"&&Y!==null&&Y.type===J&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case P:e:{for(var ke=Y.key;M!==null;){if(M.key===ke){if(ke=Y.type,ke===J){if(M.tag===7){n(q,M.sibling),te=o(M,Y.props.children),te.return=q,q=te;break e}}else if(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===oe&&el(ke)===M.type){n(q,M.sibling),te=o(M,Y.props),bi(te,Y),te.return=q,q=te;break e}n(q,M);break}else a(q,M);M=M.sibling}Y.type===J?(te=Jn(Y.props.children,q.mode,te,Y.key),te.return=q,q=te):(te=xs(Y.type,Y.key,Y.props,null,q.mode,te),bi(te,Y),te.return=q,q=te)}return u(q);case W:e:{for(ke=Y.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===Y.containerInfo&&M.stateNode.implementation===Y.implementation){n(q,M.sibling),te=o(M,Y.children||[]),te.return=q,q=te;break e}else{n(q,M);break}else a(q,M);M=M.sibling}te=ir(Y,q.mode,te),te.return=q,q=te}return u(q);case oe:return Y=el(Y),nt(q,M,Y,te)}if(F(Y))return je(q,M,Y,te);if(A(Y)){if(ke=A(Y),typeof ke!="function")throw Error(d(150));return Y=ke.call(Y),ze(q,M,Y,te)}if(typeof Y.then=="function")return nt(q,M,Ns(Y),te);if(Y.$$typeof===O)return nt(q,M,ys(q,Y),te);_s(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"||typeof Y=="bigint"?(Y=""+Y,M!==null&&M.tag===6?(n(q,M.sibling),te=o(M,Y),te.return=q,q=te):(n(q,M),te=lr(Y,q.mode,te),te.return=q,q=te),u(q)):n(q,M)}return function(q,M,Y,te){try{gi=0;var ke=nt(q,M,Y,te);return Ol=null,ke}catch(Ne){if(Ne===Dl||Ne===js)throw Ne;var Qe=pa(29,Ne,null,q.mode);return Qe.lanes=te,Qe.return=q,Qe}finally{}}}var al=Uu(!0),Ru=Uu(!1),gn=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function br(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,a,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Je&2)!==0){var o=i.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a,a=hs(e),yu(e,null,n),a}return fs(e,i,a,n),hs(e)}function yi(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,be(e,n)}}function yr(e,a){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?o=c=a:c=c.next=a}else o=c=a;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var vr=!1;function vi(){if(vr){var e=Ml;if(e!==null)throw e}}function ji(e,a,n,i){vr=!1;var o=e.updateQueue;gn=!1;var c=o.firstBaseUpdate,u=o.lastBaseUpdate,g=o.shared.pending;if(g!==null){o.shared.pending=null;var z=g,V=z.next;z.next=null,u===null?c=V:u.next=V,u=z;var I=e.alternate;I!==null&&(I=I.updateQueue,g=I.lastBaseUpdate,g!==u&&(g===null?I.firstBaseUpdate=V:g.next=V,I.lastBaseUpdate=z))}if(c!==null){var ae=o.baseState;u=0,I=V=z=null,g=c;do{var $=g.lane&-536870913,K=$!==g.lane;if(K?(Ge&$)===$:(i&$)===$){$!==0&&$===El&&(vr=!0),I!==null&&(I=I.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var je=e,ze=g;$=a;var nt=n;switch(ze.tag){case 1:if(je=ze.payload,typeof je=="function"){ae=je.call(nt,ae,$);break e}ae=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ze.payload,$=typeof je=="function"?je.call(nt,ae,$):je,$==null)break e;ae=x({},ae,$);break e;case 2:gn=!0}}$=g.callback,$!==null&&(e.flags|=64,K&&(e.flags|=8192),K=o.callbacks,K===null?o.callbacks=[$]:K.push($))}else K={lane:$,tag:g.tag,payload:g.payload,callback:g.callback,next:null},I===null?(V=I=K,z=ae):I=I.next=K,u|=$;if(g=g.next,g===null){if(g=o.shared.pending,g===null)break;K=g,g=K.next,K.next=null,o.lastBaseUpdate=K,o.shared.pending=null}}while(!0);I===null&&(z=ae),o.baseState=z,o.firstBaseUpdate=V,o.lastBaseUpdate=I,c===null&&(o.shared.lanes=0),_n|=u,e.lanes=u,e.memoizedState=ae}}function Hu(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Lu(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Hu(n[e],a)}var Al=C(null),Ss=C(0);function qu(e,a){e=an,pe(Ss,e),pe(Al,a),an=e|a.baseLanes}function jr(){pe(Ss,an),pe(Al,Al.current)}function wr(){an=Ss.current,Z(Al),Z(Ss)}var ma=C(null),Ca=null;function vn(e){var a=e.alternate;pe(yt,yt.current&1),pe(ma,e),Ca===null&&(a===null||Al.current!==null||a.memoizedState!==null)&&(Ca=e)}function Nr(e){pe(yt,yt.current),pe(ma,e),Ca===null&&(Ca=e)}function Bu(e){e.tag===22?(pe(yt,yt.current),pe(ma,e),Ca===null&&(Ca=e)):jn()}function jn(){pe(yt,yt.current),pe(ma,ma.current)}function fa(e){Z(ma),Ca===e&&(Ca=null),Z(yt)}var yt=C(0);function ks(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Tc(n)||Ec(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ka=0,Oe=null,tt=null,_t=null,Cs=!1,Ul=!1,nl=!1,zs=0,wi=0,Rl=null,ig=0;function ht(){throw Error(d(321))}function _r(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ua(e[n],a[n]))return!1;return!0}function Sr(e,a,n,i,o,c){return Ka=c,Oe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=e===null||e.memoizedState===null?Np:Br,nl=!1,c=n(i,o),nl=!1,Ul&&(c=Yu(a,n,i,o)),Gu(e),c}function Gu(e){D.H=Si;var a=tt!==null&&tt.next!==null;if(Ka=0,_t=tt=Oe=null,Cs=!1,wi=0,Rl=null,a)throw Error(d(300));e===null||St||(e=e.dependencies,e!==null&&bs(e)&&(St=!0))}function Yu(e,a,n,i){Oe=e;var o=0;do{if(Ul&&(Rl=null),wi=0,Ul=!1,25<=o)throw Error(d(301));if(o+=1,_t=tt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=_p,c=a(n,i)}while(Ul);return c}function sg(){var e=D.H,a=e.useState()[0];return a=typeof a.then=="function"?Ni(a):a,e=e.useState()[0],(tt!==null?tt.memoizedState:null)!==e&&(Oe.flags|=1024),a}function kr(){var e=zs!==0;return zs=0,e}function Cr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function zr(e){if(Cs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Cs=!1}Ka=0,_t=tt=Oe=null,Ul=!1,wi=zs=0,Rl=null}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Oe.memoizedState=_t=e:_t=_t.next=e,_t}function vt(){if(tt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=tt.next;var a=_t===null?Oe.memoizedState:_t.next;if(a!==null)_t=a,tt=e;else{if(e===null)throw Oe.alternate===null?Error(d(467)):Error(d(310));tt=e,e={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},_t===null?Oe.memoizedState=_t=e:_t=_t.next=e}return _t}function Ts(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var a=wi;return wi+=1,Rl===null&&(Rl=[]),e=Du(Rl,e,a),a=Oe,(_t===null?a.memoizedState:_t.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Np:Br),e}function Es(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===O)return Gt(e)}throw Error(d(438,String(e)))}function Tr(e){var a=null,n=Oe.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var i=Oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Ts(),Oe.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),i=0;i<e;i++)n[i]=se;return a.index++,n}function Ja(e,a){return typeof a=="function"?a(e):a}function Ms(e){var a=vt();return Er(a,tt,e)}function Er(e,a,n){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=n;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var u=o.next;o.next=c.next,c.next=u}a.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{a=o.next;var g=u=null,z=null,V=a,I=!1;do{var ae=V.lane&-536870913;if(ae!==V.lane?(Ge&ae)===ae:(Ka&ae)===ae){var $=V.revertLane;if($===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null}),ae===El&&(I=!0);else if((Ka&$)===$){V=V.next,$===El&&(I=!0);continue}else ae={lane:0,revertLane:V.revertLane,gesture:null,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},z===null?(g=z=ae,u=c):z=z.next=ae,Oe.lanes|=$,_n|=$;ae=V.action,nl&&n(c,ae),c=V.hasEagerState?V.eagerState:n(c,ae)}else $={lane:ae,revertLane:V.revertLane,gesture:V.gesture,action:V.action,hasEagerState:V.hasEagerState,eagerState:V.eagerState,next:null},z===null?(g=z=$,u=c):z=z.next=$,Oe.lanes|=ae,_n|=ae;V=V.next}while(V!==null&&V!==a);if(z===null?u=c:z.next=g,!ua(c,e.memoizedState)&&(St=!0,I&&(n=Ml,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=z,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mr(e){var a=vt(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=a.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do c=e(c,u.action),u=u.next;while(u!==o);ua(c,a.memoizedState)||(St=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,i]}function Vu(e,a,n){var i=Oe,o=vt(),c=Ve;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!ua((tt||o).memoizedState,n);if(u&&(o.memoizedState=n,St=!0),o=o.queue,Ar(Xu.bind(null,i,o,e),[e]),o.getSnapshot!==a||u||_t!==null&&_t.memoizedState.tag&1){if(i.flags|=2048,Hl(9,{destroy:void 0},Qu.bind(null,i,o,n,a),null),it===null)throw Error(d(349));c||(Ka&127)!==0||$u(i,a,n)}return n}function $u(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=Oe.updateQueue,a===null?(a=Ts(),Oe.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Qu(e,a,n,i){a.value=n,a.getSnapshot=i,Zu(a)&&Ku(e)}function Xu(e,a,n){return n(function(){Zu(a)&&Ku(e)})}function Zu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ua(e,n)}catch{return!0}}function Ku(e){var a=Kn(e,2);a!==null&&ca(a,e,2)}function Dr(e){var a=Pt();if(typeof e=="function"){var n=e;if(e=n(),nl){Jt(!0);try{n()}finally{Jt(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:e},a}function Ju(e,a,n,i){return e.baseState=n,Er(e,tt,typeof i=="function"?i:Ja)}function og(e,a,n,i,o){if(As(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};D.T!==null?n(!0):c.isTransition=!1,i(c),n=a.pending,n===null?(c.next=a.pending=c,Fu(a,c)):(c.next=n.next,a.pending=n.next=c)}}function Fu(e,a){var n=a.action,i=a.payload,o=e.state;if(a.isTransition){var c=D.T,u={};D.T=u;try{var g=n(o,i),z=D.S;z!==null&&z(u,g),Wu(e,a,g)}catch(V){Or(e,a,V)}finally{c!==null&&u.types!==null&&(c.types=u.types),D.T=c}}else try{c=n(o,i),Wu(e,a,c)}catch(V){Or(e,a,V)}}function Wu(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Pu(e,a,i)},function(i){return Or(e,a,i)}):Pu(e,a,n)}function Pu(e,a,n){a.status="fulfilled",a.value=n,Iu(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,Fu(e,n)))}function Or(e,a,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=n,Iu(a),a=a.next;while(a!==i)}e.action=null}function Iu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function ep(e,a){return a}function tp(e,a){if(Ve){var n=it.formState;if(n!==null){e:{var i=Oe;if(Ve){if(rt){t:{for(var o=rt,c=ka;o.nodeType!==8;){if(!c){o=null;break t}if(o=za(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){rt=za(o.nextSibling),i=o.data==="F!";break e}}hn(i)}i=!1}i&&(a=n[0])}}return n=Pt(),n.memoizedState=n.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ep,lastRenderedState:a},n.queue=i,n=vp.bind(null,Oe,i),i.dispatch=n,i=Dr(!1),c=qr.bind(null,Oe,!1,i.queue),i=Pt(),o={state:a,dispatch:null,action:e,pending:null},i.queue=o,n=og.bind(null,Oe,o,c,n),o.dispatch=n,i.memoizedState=e,[a,n,!1]}function ap(e){var a=vt();return np(a,tt,e)}function np(e,a,n){if(a=Er(e,a,ep)[0],e=Ms(Ja)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=Ni(a)}catch(u){throw u===Dl?js:u}else i=a;a=vt();var o=a.queue,c=o.dispatch;return n!==a.memoizedState&&(Oe.flags|=2048,Hl(9,{destroy:void 0},rg.bind(null,o,n),null)),[i,c,e]}function rg(e,a){e.action=a}function lp(e){var a=vt(),n=tt;if(n!==null)return np(a,n,e);vt(),a=a.memoizedState,n=vt();var i=n.queue.dispatch;return n.memoizedState=e,[a,i,!1]}function Hl(e,a,n,i){return e={tag:e,create:n,deps:i,inst:a,next:null},a=Oe.updateQueue,a===null&&(a=Ts(),Oe.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,a.lastEffect=e),e}function ip(){return vt().memoizedState}function Ds(e,a,n,i){var o=Pt();Oe.flags|=e,o.memoizedState=Hl(1|a,{destroy:void 0},n,i===void 0?null:i)}function Os(e,a,n,i){var o=vt();i=i===void 0?null:i;var c=o.memoizedState.inst;tt!==null&&i!==null&&_r(i,tt.memoizedState.deps)?o.memoizedState=Hl(a,c,n,i):(Oe.flags|=e,o.memoizedState=Hl(1|a,c,n,i))}function sp(e,a){Ds(8390656,8,e,a)}function Ar(e,a){Os(2048,8,e,a)}function cg(e){Oe.flags|=4;var a=Oe.updateQueue;if(a===null)a=Ts(),Oe.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function op(e){var a=vt().memoizedState;return cg({ref:a,nextImpl:e}),function(){if((Je&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function rp(e,a){return Os(4,2,e,a)}function cp(e,a){return Os(4,4,e,a)}function dp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function up(e,a,n){n=n!=null?n.concat([e]):null,Os(4,4,dp.bind(null,a,e),n)}function Ur(){}function pp(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;return a!==null&&_r(a,i[1])?i[0]:(n.memoizedState=[e,a],e)}function mp(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;if(a!==null&&_r(a,i[1]))return i[0];if(i=e(),nl){Jt(!0);try{e()}finally{Jt(!1)}}return n.memoizedState=[i,a],i}function Rr(e,a,n){return n===void 0||(Ka&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=fm(),Oe.lanes|=e,_n|=e,n)}function fp(e,a,n,i){return ua(n,a)?n:Al.current!==null?(e=Rr(e,n,i),ua(e,a)||(St=!0),e):(Ka&42)===0||(Ka&1073741824)!==0&&(Ge&261930)===0?(St=!0,e.memoizedState=n):(e=fm(),Oe.lanes|=e,_n|=e,a)}function hp(e,a,n,i,o){var c=Q.p;Q.p=c!==0&&8>c?c:8;var u=D.T,g={};D.T=g,qr(e,!1,a,n);try{var z=o(),V=D.S;if(V!==null&&V(g,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var I=lg(z,i);_i(e,a,I,ga(e))}else _i(e,a,i,ga(e))}catch(ae){_i(e,a,{then:function(){},status:"rejected",reason:ae},ga())}finally{Q.p=c,u!==null&&g.types!==null&&(u.types=g.types),D.T=u}}function dg(){}function Hr(e,a,n,i){if(e.tag!==5)throw Error(d(476));var o=xp(e).queue;hp(e,o,a,N,n===null?dg:function(){return gp(e),n(i)})}function xp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:N},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ja,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function gp(e){var a=xp(e);a.next===null&&(a=e.alternate.memoizedState),_i(e,a.next.queue,{},ga())}function Lr(){return Gt(Gi)}function bp(){return vt().memoizedState}function yp(){return vt().memoizedState}function ug(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ga();e=bn(n);var i=yn(a,e,n);i!==null&&(ca(i,a,n),yi(i,a,n)),a={cache:mr()},e.payload=a;return}a=a.return}}function pg(e,a,n){var i=ga();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},As(e)?jp(a,n):(n=ar(e,a,n,i),n!==null&&(ca(n,e,i),wp(n,a,i)))}function vp(e,a,n){var i=ga();_i(e,a,n,i)}function _i(e,a,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(As(e))jp(a,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,g=c(u,n);if(o.hasEagerState=!0,o.eagerState=g,ua(g,u))return fs(e,a,o,0),it===null&&ms(),!1}catch{}finally{}if(n=ar(e,a,o,i),n!==null)return ca(n,e,i),wp(n,a,i),!0}return!1}function qr(e,a,n,i){if(i={lane:2,revertLane:gc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},As(e)){if(a)throw Error(d(479))}else a=ar(e,n,i,2),a!==null&&ca(a,e,2)}function As(e){var a=e.alternate;return e===Oe||a!==null&&a===Oe}function jp(e,a){Ul=Cs=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function wp(e,a,n){if((n&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,be(e,n)}}var Si={readContext:Gt,use:Es,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Si.useEffectEvent=ht;var Np={readContext:Gt,use:Es,useCallback:function(e,a){return Pt().memoizedState=[e,a===void 0?null:a],e},useContext:Gt,useEffect:sp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ds(4194308,4,dp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ds(4194308,4,e,a)},useInsertionEffect:function(e,a){Ds(4,2,e,a)},useMemo:function(e,a){var n=Pt();a=a===void 0?null:a;var i=e();if(nl){Jt(!0);try{e()}finally{Jt(!1)}}return n.memoizedState=[i,a],i},useReducer:function(e,a,n){var i=Pt();if(n!==void 0){var o=n(a);if(nl){Jt(!0);try{n(a)}finally{Jt(!1)}}}else o=a;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=pg.bind(null,Oe,e),[i.memoizedState,e]},useRef:function(e){var a=Pt();return e={current:e},a.memoizedState=e},useState:function(e){e=Dr(e);var a=e.queue,n=vp.bind(null,Oe,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Ur,useDeferredValue:function(e,a){var n=Pt();return Rr(n,e,a)},useTransition:function(){var e=Dr(!1);return e=hp.bind(null,Oe,e.queue,!0,!1),Pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var i=Oe,o=Pt();if(Ve){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),it===null)throw Error(d(349));(Ge&127)!==0||$u(i,a,n)}o.memoizedState=n;var c={value:n,getSnapshot:a};return o.queue=c,sp(Xu.bind(null,i,c,e),[e]),i.flags|=2048,Hl(9,{destroy:void 0},Qu.bind(null,i,c,n,a),null),n},useId:function(){var e=Pt(),a=it.identifierPrefix;if(Ve){var n=La,i=Ha;n=(i&~(1<<32-L(i)-1)).toString(32)+n,a="_"+a+"R_"+n,n=zs++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=ig++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Lr,useFormState:tp,useActionState:tp,useOptimistic:function(e){var a=Pt();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=qr.bind(null,Oe,!0,n),n.dispatch=a,[e,a]},useMemoCache:Tr,useCacheRefresh:function(){return Pt().memoizedState=ug.bind(null,Oe)},useEffectEvent:function(e){var a=Pt(),n={impl:e};return a.memoizedState=n,function(){if((Je&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Br={readContext:Gt,use:Es,useCallback:pp,useContext:Gt,useEffect:Ar,useImperativeHandle:up,useInsertionEffect:rp,useLayoutEffect:cp,useMemo:mp,useReducer:Ms,useRef:ip,useState:function(){return Ms(Ja)},useDebugValue:Ur,useDeferredValue:function(e,a){var n=vt();return fp(n,tt.memoizedState,e,a)},useTransition:function(){var e=Ms(Ja)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:Ni(e),a]},useSyncExternalStore:Vu,useId:bp,useHostTransitionStatus:Lr,useFormState:ap,useActionState:ap,useOptimistic:function(e,a){var n=vt();return Ju(n,tt,e,a)},useMemoCache:Tr,useCacheRefresh:yp};Br.useEffectEvent=op;var _p={readContext:Gt,use:Es,useCallback:pp,useContext:Gt,useEffect:Ar,useImperativeHandle:up,useInsertionEffect:rp,useLayoutEffect:cp,useMemo:mp,useReducer:Mr,useRef:ip,useState:function(){return Mr(Ja)},useDebugValue:Ur,useDeferredValue:function(e,a){var n=vt();return tt===null?Rr(n,e,a):fp(n,tt.memoizedState,e,a)},useTransition:function(){var e=Mr(Ja)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:Ni(e),a]},useSyncExternalStore:Vu,useId:bp,useHostTransitionStatus:Lr,useFormState:lp,useActionState:lp,useOptimistic:function(e,a){var n=vt();return tt!==null?Ju(n,tt,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tr,useCacheRefresh:yp};_p.useEffectEvent=op;function Gr(e,a,n,i){a=e.memoizedState,n=n(i,a),n=n==null?a:x({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yr={enqueueSetState:function(e,a,n){e=e._reactInternals;var i=ga(),o=bn(i);o.payload=a,n!=null&&(o.callback=n),a=yn(e,o,i),a!==null&&(ca(a,e,i),yi(a,e,i))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var i=ga(),o=bn(i);o.tag=1,o.payload=a,n!=null&&(o.callback=n),a=yn(e,o,i),a!==null&&(ca(a,e,i),yi(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ga(),i=bn(n);i.tag=2,a!=null&&(i.callback=a),a=yn(e,i,n),a!==null&&(ca(a,e,n),yi(a,e,n))}};function Sp(e,a,n,i,o,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,u):a.prototype&&a.prototype.isPureReactComponent?!ui(n,i)||!ui(o,c):!0}function kp(e,a,n,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,i),a.state!==e&&Yr.enqueueReplaceState(a,a.state,null)}function ll(e,a){var n=a;if("ref"in a){n={};for(var i in a)i!=="ref"&&(n[i]=a[i])}if(e=e.defaultProps){n===a&&(n=x({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Cp(e){ps(e)}function zp(e){console.error(e)}function Tp(e){ps(e)}function Us(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function Ep(e,a,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Vr(e,a,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){Us(e,a)},n}function Mp(e){return e=bn(e),e.tag=3,e}function Dp(e,a,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){Ep(a,n,i)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Ep(a,n,i),typeof o!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var g=i.stack;this.componentDidCatch(i.value,{componentStack:g!==null?g:""})})}function mg(e,a,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=n.alternate,a!==null&&Tl(a,n,o,!0),n=ma.current,n!==null){switch(n.tag){case 31:case 13:return Ca===null?Zs():n.alternate===null&&xt===0&&(xt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===ws?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([i]):a.add(i),fc(e,i,o)),!1;case 22:return n.flags|=65536,i===ws?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([i]):n.add(i)),fc(e,i,o)),!1}throw Error(d(435,n.tag))}return fc(e,i,o),Zs(),!1}if(Ve)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,i!==rr&&(e=Error(d(422),{cause:i}),fi(Na(e,n)))):(i!==rr&&(a=Error(d(423),{cause:i}),fi(Na(a,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=Na(i,n),o=Vr(e.stateNode,i,o),yr(e,o),xt!==4&&(xt=2)),!1;var c=Error(d(520),{cause:i});if(c=Na(c,n),Oi===null?Oi=[c]:Oi.push(c),xt!==4&&(xt=2),a===null)return!0;i=Na(i,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Vr(n.stateNode,i,e),yr(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Sn===null||!Sn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Mp(o),Dp(o,e,n,i),yr(n,o),!1}n=n.return}while(n!==null);return!1}var $r=Error(d(461)),St=!1;function Yt(e,a,n,i){a.child=e===null?Ru(a,null,n,i):al(a,e.child,n,i)}function Op(e,a,n,i,o){n=n.render;var c=a.ref;if("ref"in i){var u={};for(var g in i)g!=="ref"&&(u[g]=i[g])}else u=i;return Pn(a),i=Sr(e,a,n,u,c,o),g=kr(),e!==null&&!St?(Cr(e,a,o),Fa(e,a,o)):(Ve&&g&&sr(a),a.flags|=1,Yt(e,a,i,o),a.child)}function Ap(e,a,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!nr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Up(e,a,c,i,o)):(e=xs(n.type,null,i,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!Pr(e,o)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:ui,n(u,i)&&e.ref===a.ref)return Fa(e,a,o)}return a.flags|=1,e=$a(c,i),e.ref=a.ref,e.return=a,a.child=e}function Up(e,a,n,i,o){if(e!==null){var c=e.memoizedProps;if(ui(c,i)&&e.ref===a.ref)if(St=!1,a.pendingProps=i=c,Pr(e,o))(e.flags&131072)!==0&&(St=!0);else return a.lanes=e.lanes,Fa(e,a,o)}return Qr(e,a,n,i,o)}function Rp(e,a,n,i){var o=i.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=a.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,a.child=null;return Hp(e,a,c,n,i)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&vs(a,c!==null?c.cachePool:null),c!==null?qu(a,c):jr(),Bu(a);else return i=a.lanes=536870912,Hp(e,a,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(vs(a,c.cachePool),qu(a,c),jn(),a.memoizedState=null):(e!==null&&vs(a,null),jr(),jn());return Yt(e,a,o,n),a.child}function ki(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Hp(e,a,n,i,o){var c=hr();return c=c===null?null:{parent:Nt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&vs(a,null),jr(),Bu(a),e!==null&&Tl(e,a,i,!0),a.childLanes=o,null}function Rs(e,a){return a=Ls({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Lp(e,a,n){return al(a,e.child,null,n),e=Rs(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function fg(e,a,n){var i=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ve){if(i.mode==="hidden")return e=Rs(a,i),a.lanes=536870912,ki(null,e);if(Nr(a),(e=rt)?(e=Fm(e,ka),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ha,overflow:La}:null,retryLane:536870912,hydrationErrors:null},n=ju(e),n.return=a,a.child=n,Bt=a,rt=null)):e=null,e===null)throw hn(a);return a.lanes=536870912,null}return Rs(a,i)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Nr(a),o)if(a.flags&256)a.flags&=-257,a=Lp(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(St||Tl(e,a,n,!1),o=(n&e.childLanes)!==0,St||o){if(i=it,i!==null&&(u=ge(i,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,Kn(e,u),ca(i,e,u),$r;Zs(),a=Lp(e,a,n)}else e=c.treeContext,rt=za(u.nextSibling),Bt=a,Ve=!0,fn=null,ka=!1,e!==null&&_u(a,e),a=Rs(a,i),a.flags|=4096;return a}return e=$a(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Hs(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Qr(e,a,n,i,o){return Pn(a),n=Sr(e,a,n,i,void 0,o),i=kr(),e!==null&&!St?(Cr(e,a,o),Fa(e,a,o)):(Ve&&i&&sr(a),a.flags|=1,Yt(e,a,n,o),a.child)}function qp(e,a,n,i,o,c){return Pn(a),a.updateQueue=null,n=Yu(a,i,n,o),Gu(e),i=kr(),e!==null&&!St?(Cr(e,a,c),Fa(e,a,c)):(Ve&&i&&sr(a),a.flags|=1,Yt(e,a,n,c),a.child)}function Bp(e,a,n,i,o){if(Pn(a),a.stateNode===null){var c=Sl,u=n.contextType;typeof u=="object"&&u!==null&&(c=Gt(u)),c=new n(i,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yr,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=i,c.state=a.memoizedState,c.refs={},gr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Gt(u):Sl,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Gr(a,n,u,i),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&Yr.enqueueReplaceState(c,c.state,null),ji(a,i,c,o),vi(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){c=a.stateNode;var g=a.memoizedProps,z=ll(n,g);c.props=z;var V=c.context,I=n.contextType;u=Sl,typeof I=="object"&&I!==null&&(u=Gt(I));var ae=n.getDerivedStateFromProps;I=typeof ae=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=a.pendingProps!==g,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||V!==u)&&kp(a,c,i,u),gn=!1;var $=a.memoizedState;c.state=$,ji(a,i,c,o),vi(),V=a.memoizedState,g||$!==V||gn?(typeof ae=="function"&&(Gr(a,n,ae,i),V=a.memoizedState),(z=gn||Sp(a,n,z,i,$,V,u))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=V),c.props=i,c.state=V,c.context=u,i=z):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{c=a.stateNode,br(e,a),u=a.memoizedProps,I=ll(n,u),c.props=I,ae=a.pendingProps,$=c.context,V=n.contextType,z=Sl,typeof V=="object"&&V!==null&&(z=Gt(V)),g=n.getDerivedStateFromProps,(V=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==ae||$!==z)&&kp(a,c,i,z),gn=!1,$=a.memoizedState,c.state=$,ji(a,i,c,o),vi();var K=a.memoizedState;u!==ae||$!==K||gn||e!==null&&e.dependencies!==null&&bs(e.dependencies)?(typeof g=="function"&&(Gr(a,n,g,i),K=a.memoizedState),(I=gn||Sp(a,n,I,i,$,K,z)||e!==null&&e.dependencies!==null&&bs(e.dependencies))?(V||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,K,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,K,z)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&$===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&$===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=K),c.props=i,c.state=K,c.context=z,i=I):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&$===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&$===e.memoizedState||(a.flags|=1024),i=!1)}return c=i,Hs(e,a),i=(a.flags&128)!==0,c||i?(c=a.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&i?(a.child=al(a,e.child,null,o),a.child=al(a,null,n,o)):Yt(e,a,n,o),a.memoizedState=c.state,e=a.child):e=Fa(e,a,o),e}function Gp(e,a,n,i){return Fn(),a.flags|=256,Yt(e,a,n,i),a.child}var Xr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:Eu()}}function Kr(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=xa),e}function Yp(e,a,n){var i=a.pendingProps,o=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),u&&(o=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ve){if(o?vn(a):jn(),(e=rt)?(e=Fm(e,ka),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ha,overflow:La}:null,retryLane:536870912,hydrationErrors:null},n=ju(e),n.return=a,a.child=n,Bt=a,rt=null)):e=null,e===null)throw hn(a);return Ec(e)?a.lanes=32:a.lanes=536870912,null}var g=i.children;return i=i.fallback,o?(jn(),o=a.mode,g=Ls({mode:"hidden",children:g},o),i=Jn(i,o,n,null),g.return=a,i.return=a,g.sibling=i,a.child=g,i=a.child,i.memoizedState=Zr(n),i.childLanes=Kr(e,u,n),a.memoizedState=Xr,ki(null,i)):(vn(a),Jr(a,g))}var z=e.memoizedState;if(z!==null&&(g=z.dehydrated,g!==null)){if(c)a.flags&256?(vn(a),a.flags&=-257,a=Fr(e,a,n)):a.memoizedState!==null?(jn(),a.child=e.child,a.flags|=128,a=null):(jn(),g=i.fallback,o=a.mode,i=Ls({mode:"visible",children:i.children},o),g=Jn(g,o,n,null),g.flags|=2,i.return=a,g.return=a,i.sibling=g,a.child=i,al(a,e.child,null,n),i=a.child,i.memoizedState=Zr(n),i.childLanes=Kr(e,u,n),a.memoizedState=Xr,a=ki(null,i));else if(vn(a),Ec(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var V=u.dgst;u=V,i=Error(d(419)),i.stack="",i.digest=u,fi({value:i,source:null,stack:null}),a=Fr(e,a,n)}else if(St||Tl(e,a,n,!1),u=(n&e.childLanes)!==0,St||u){if(u=it,u!==null&&(i=ge(u,n),i!==0&&i!==z.retryLane))throw z.retryLane=i,Kn(e,i),ca(u,e,i),$r;Tc(g)||Zs(),a=Fr(e,a,n)}else Tc(g)?(a.flags|=192,a.child=e.child,a=null):(e=z.treeContext,rt=za(g.nextSibling),Bt=a,Ve=!0,fn=null,ka=!1,e!==null&&_u(a,e),a=Jr(a,i.children),a.flags|=4096);return a}return o?(jn(),g=i.fallback,o=a.mode,z=e.child,V=z.sibling,i=$a(z,{mode:"hidden",children:i.children}),i.subtreeFlags=z.subtreeFlags&65011712,V!==null?g=$a(V,g):(g=Jn(g,o,n,null),g.flags|=2),g.return=a,i.return=a,i.sibling=g,a.child=i,ki(null,i),i=a.child,g=e.child.memoizedState,g===null?g=Zr(n):(o=g.cachePool,o!==null?(z=Nt._currentValue,o=o.parent!==z?{parent:z,pool:z}:o):o=Eu(),g={baseLanes:g.baseLanes|n,cachePool:o}),i.memoizedState=g,i.childLanes=Kr(e,u,n),a.memoizedState=Xr,ki(e.child,i)):(vn(a),n=e.child,e=n.sibling,n=$a(n,{mode:"visible",children:i.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function Jr(e,a){return a=Ls({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Ls(e,a){return e=pa(22,e,null,a),e.lanes=0,e}function Fr(e,a,n){return al(a,e.child,null,n),e=Jr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Vp(e,a,n){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),ur(e.return,a,n)}function Wr(e,a,n,i,o,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=o,u.treeForkCount=c)}function $p(e,a,n){var i=a.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var u=yt.current,g=(u&2)!==0;if(g?(u=u&1|2,a.flags|=128):u&=1,pe(yt,u),Yt(e,a,i,n),i=Ve?mi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Vp(e,n,a);else if(e.tag===19)Vp(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=a.child,o=null;n!==null;)e=n.alternate,e!==null&&ks(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=a.child,a.child=null):(o=n.sibling,n.sibling=null),Wr(a,!1,o,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&ks(e)===null){a.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wr(a,!0,n,null,c,i);break;case"together":Wr(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Fa(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),_n|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Tl(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=$a(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=$a(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Pr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&bs(e)))}function hg(e,a,n){switch(a.tag){case 3:Ke(a,a.stateNode.containerInfo),xn(a,Nt,e.memoizedState.cache),Fn();break;case 27:case 5:Ut(a);break;case 4:Ke(a,a.stateNode.containerInfo);break;case 10:xn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Nr(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(vn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Yp(e,a,n):(vn(a),e=Fa(e,a,n),e!==null?e.sibling:null);vn(a);break;case 19:var o=(e.flags&128)!==0;if(i=(n&a.childLanes)!==0,i||(Tl(e,a,n,!1),i=(n&a.childLanes)!==0),o){if(i)return $p(e,a,n);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),pe(yt,yt.current),i)break;return null;case 22:return a.lanes=0,Rp(e,a,n,a.pendingProps);case 24:xn(a,Nt,e.memoizedState.cache)}return Fa(e,a,n)}function Qp(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)St=!0;else{if(!Pr(e,n)&&(a.flags&128)===0)return St=!1,hg(e,a,n);St=(e.flags&131072)!==0}else St=!1,Ve&&(a.flags&1048576)!==0&&Nu(a,mi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=el(a.elementType),a.type=e,typeof e=="function")nr(e)?(i=ll(e,i),a.tag=1,a=Bp(null,a,e,i,n)):(a.tag=0,a=Qr(null,a,e,i,n));else{if(e!=null){var o=e.$$typeof;if(o===X){a.tag=11,a=Op(null,a,e,i,n);break e}else if(o===H){a.tag=14,a=Ap(null,a,e,i,n);break e}}throw a=T(e)||e,Error(d(306,a,""))}}return a;case 0:return Qr(e,a,a.type,a.pendingProps,n);case 1:return i=a.type,o=ll(i,a.pendingProps),Bp(e,a,i,o,n);case 3:e:{if(Ke(a,a.stateNode.containerInfo),e===null)throw Error(d(387));i=a.pendingProps;var c=a.memoizedState;o=c.element,br(e,a),ji(a,i,null,n);var u=a.memoizedState;if(i=u.cache,xn(a,Nt,i),i!==c.cache&&pr(a,[Nt],n,!0),vi(),i=u.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Gp(e,a,i,n);break e}else if(i!==o){o=Na(Error(d(424)),a),fi(o),a=Gp(e,a,i,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=za(e.firstChild),Bt=a,Ve=!0,fn=null,ka=!0,n=Ru(a,null,i,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Fn(),i===o){a=Fa(e,a,n);break e}Yt(e,a,i,n)}a=a.child}return a;case 26:return Hs(e,a),e===null?(n=af(a.type,null,a.pendingProps,null))?a.memoizedState=n:Ve||(n=a.type,e=a.pendingProps,i=eo(_e.current).createElement(n),i[qt]=a,i[na]=e,Vt(i,n,e),Ht(i),a.stateNode=i):a.memoizedState=af(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ut(a),e===null&&Ve&&(i=a.stateNode=Im(a.type,a.pendingProps,_e.current),Bt=a,ka=!0,o=rt,Tn(a.type)?(Mc=o,rt=za(i.firstChild)):rt=o),Yt(e,a,a.pendingProps.children,n),Hs(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ve&&((o=i=rt)&&(i=Qg(i,a.type,a.pendingProps,ka),i!==null?(a.stateNode=i,Bt=a,rt=za(i.firstChild),ka=!1,o=!0):o=!1),o||hn(a)),Ut(a),o=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,i=c.children,kc(o,c)?i=null:u!==null&&kc(o,u)&&(a.flags|=32),a.memoizedState!==null&&(o=Sr(e,a,sg,null,null,n),Gi._currentValue=o),Hs(e,a),Yt(e,a,i,n),a.child;case 6:return e===null&&Ve&&((e=n=rt)&&(n=Xg(n,a.pendingProps,ka),n!==null?(a.stateNode=n,Bt=a,rt=null,e=!0):e=!1),e||hn(a)),null;case 13:return Yp(e,a,n);case 4:return Ke(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=al(a,null,i,n):Yt(e,a,i,n),a.child;case 11:return Op(e,a,a.type,a.pendingProps,n);case 7:return Yt(e,a,a.pendingProps,n),a.child;case 8:return Yt(e,a,a.pendingProps.children,n),a.child;case 12:return Yt(e,a,a.pendingProps.children,n),a.child;case 10:return i=a.pendingProps,xn(a,a.type,i.value),Yt(e,a,i.children,n),a.child;case 9:return o=a.type._context,i=a.pendingProps.children,Pn(a),o=Gt(o),i=i(o),a.flags|=1,Yt(e,a,i,n),a.child;case 14:return Ap(e,a,a.type,a.pendingProps,n);case 15:return Up(e,a,a.type,a.pendingProps,n);case 19:return $p(e,a,n);case 31:return fg(e,a,n);case 22:return Rp(e,a,n,a.pendingProps);case 24:return Pn(a),i=Gt(Nt),e===null?(o=hr(),o===null&&(o=it,c=mr(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),a.memoizedState={parent:i,cache:o},gr(a),xn(a,Nt,o)):((e.lanes&n)!==0&&(br(e,a),ji(a,null,null,n),vi()),o=e.memoizedState,c=a.memoizedState,o.parent!==i?(o={parent:i,cache:i},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),xn(a,Nt,i)):(i=c.cache,xn(a,Nt,i),i!==o.cache&&pr(a,[Nt],n,!0))),Yt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Wa(e){e.flags|=4}function Ir(e,a,n,i,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(bm())e.flags|=8192;else throw tl=ws,xr}else e.flags&=-16777217}function Xp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!rf(a))if(bm())e.flags|=8192;else throw tl=ws,xr}function qs(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ot():536870912,e.lanes|=a,Gl|=a)}function Ci(e,a){if(!Ve)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ct(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(a)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,a}function xg(e,a,n){var i=a.pendingProps;switch(or(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(a),null;case 1:return ct(a),null;case 3:return n=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Za(Nt),$e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(zl(a)?Wa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cr())),ct(a),null;case 26:var o=a.type,c=a.memoizedState;return e===null?(Wa(a),c!==null?(ct(a),Xp(a,c)):(ct(a),Ir(a,o,null,i,n))):c?c!==e.memoizedState?(Wa(a),ct(a),Xp(a,c)):(ct(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&Wa(a),ct(a),Ir(a,o,e,i,n)),null;case 27:if(gt(a),n=_e.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Wa(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ct(a),null}e=xe.current,zl(a)?Su(a):(e=Im(o,i,n),a.stateNode=e,Wa(a))}return ct(a),null;case 5:if(gt(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Wa(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ct(a),null}if(c=xe.current,zl(a))Su(a);else{var u=eo(_e.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?u.createElement(o,{is:i.is}):u.createElement(o)}}c[qt]=a,c[na]=i;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Vt(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Wa(a)}}return ct(a),Ir(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&Wa(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(d(166));if(e=_e.current,zl(a)){if(e=a.stateNode,n=a.memoizedProps,i=null,o=Bt,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[qt]=a,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Ym(e.nodeValue,n)),e||hn(a,!0)}else e=eo(e).createTextNode(i),e[qt]=a,a.stateNode=e}return ct(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(i=zl(a),n!==null){if(e===null){if(!i)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[qt]=a}else Fn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),e=!1}else n=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ct(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=zl(a),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[qt]=a}else Fn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),o=!1}else o=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=n,a):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=a.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),qs(a,a.updateQueue),ct(a),null);case 4:return $e(),e===null&&jc(a.stateNode.containerInfo),ct(a),null;case 10:return Za(a.type),ct(a),null;case 19:if(Z(yt),i=a.memoizedState,i===null)return ct(a),null;if(o=(a.flags&128)!==0,c=i.rendering,c===null)if(o)Ci(i,!1);else{if(xt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=ks(e),c!==null){for(a.flags|=128,Ci(i,!1),e=c.updateQueue,a.updateQueue=e,qs(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)vu(n,e),n=n.sibling;return pe(yt,yt.current&1|2),Ve&&Qa(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&ce()>$s&&(a.flags|=128,o=!0,Ci(i,!1),a.lanes=4194304)}else{if(!o)if(e=ks(c),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,qs(a,e),Ci(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ve)return ct(a),null}else 2*ce()-i.renderingStartTime>$s&&n!==536870912&&(a.flags|=128,o=!0,Ci(i,!1),a.lanes=4194304);i.isBackwards?(c.sibling=a.child,a.child=c):(e=i.last,e!==null?e.sibling=c:a.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ce(),e.sibling=null,n=yt.current,pe(yt,o?n&1|2:n&1),Ve&&Qa(a,i.treeForkCount),e):(ct(a),null);case 22:case 23:return fa(a),wr(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(n&536870912)!==0&&(a.flags&128)===0&&(ct(a),a.subtreeFlags&6&&(a.flags|=8192)):ct(a),n=a.updateQueue,n!==null&&qs(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048),e!==null&&Z(In),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Za(Nt),ct(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function gg(e,a){switch(or(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Za(Nt),$e(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return gt(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(d(340));Fn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Fn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Z(yt),null;case 4:return $e(),null;case 10:return Za(a.type),null;case 22:case 23:return fa(a),wr(),e!==null&&Z(In),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Za(Nt),null;case 25:return null;default:return null}}function Zp(e,a){switch(or(a),a.tag){case 3:Za(Nt),$e();break;case 26:case 27:case 5:gt(a);break;case 4:$e();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:Z(yt);break;case 10:Za(a.type);break;case 22:case 23:fa(a),wr(),e!==null&&Z(In);break;case 24:Za(Nt)}}function zi(e,a){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var c=n.create,u=n.inst;i=c(),u.destroy=i}n=n.next}while(n!==o)}}catch(g){et(a,a.return,g)}}function wn(e,a,n){try{var i=a.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var u=i.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,o=a;var z=n,V=g;try{V()}catch(I){et(o,z,I)}}}i=i.next}while(i!==c)}}catch(I){et(a,a.return,I)}}function Kp(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Lu(a,n)}catch(i){et(e,e.return,i)}}}function Jp(e,a,n){n.props=ll(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){et(e,a,i)}}function Ti(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){et(e,a,o)}}function qa(e,a){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){et(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){et(e,a,o)}else n.current=null}function Fp(e){var a=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){et(e,e.return,o)}}function ec(e,a,n){try{var i=e.stateNode;qg(i,e.type,n,a),i[na]=a}catch(o){et(e,e.return,o)}}function Wp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tn(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Wp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Ya));else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(ac(e,a,n),e=e.sibling;e!==null;)ac(e,a,n),e=e.sibling}function Bs(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Bs(e,a,n),e=e.sibling;e!==null;)Bs(e,a,n),e=e.sibling}function Pp(e){var a=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);Vt(a,i,n),a[qt]=e,a[na]=n}catch(c){et(e,e.return,c)}}var Pa=!1,kt=!1,nc=!1,Ip=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function bg(e,a){if(e=e.containerInfo,_c=oo,e=uu(e),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,g=-1,z=-1,V=0,I=0,ae=e,$=null;t:for(;;){for(var K;ae!==n||o!==0&&ae.nodeType!==3||(g=u+o),ae!==c||i!==0&&ae.nodeType!==3||(z=u+i),ae.nodeType===3&&(u+=ae.nodeValue.length),(K=ae.firstChild)!==null;)$=ae,ae=K;for(;;){if(ae===e)break t;if($===n&&++V===o&&(g=u),$===c&&++I===i&&(z=u),(K=ae.nextSibling)!==null)break;ae=$,$=ae.parentNode}ae=K}n=g===-1||z===-1?null:{start:g,end:z}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:e,selectionRange:n},oo=!1,Lt=a;Lt!==null;)if(a=Lt,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Lt=e;else for(;Lt!==null;){switch(a=Lt,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,o=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var je=ll(n.type,o);e=i.getSnapshotBeforeUpdate(je,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ze){et(n,n.return,ze)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)zc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Lt=e;break}Lt=a.return}}function em(e,a,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:en(e,n),i&4&&zi(5,n);break;case 1:if(en(e,n),i&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){et(n,n.return,u)}else{var o=ll(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){et(n,n.return,u)}}i&64&&Kp(n),i&512&&Ti(n,n.return);break;case 3:if(en(e,n),i&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Lu(e,a)}catch(u){et(n,n.return,u)}}break;case 27:a===null&&i&4&&Pp(n);case 26:case 5:en(e,n),a===null&&i&4&&Fp(n),i&512&&Ti(n,n.return);break;case 12:en(e,n);break;case 31:en(e,n),i&4&&nm(e,n);break;case 13:en(e,n),i&4&&lm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Cg.bind(null,n),Zg(e,n))));break;case 22:if(i=n.memoizedState!==null||Pa,!i){a=a!==null&&a.memoizedState!==null||kt,o=Pa;var c=kt;Pa=i,(kt=a)&&!c?tn(e,n,(n.subtreeFlags&8772)!==0):en(e,n),Pa=o,kt=c}break;case 30:break;default:en(e,n)}}function tm(e){var a=e.alternate;a!==null&&(e.alternate=null,tm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Oo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ut=null,ia=!1;function Ia(e,a,n){for(n=n.child;n!==null;)am(e,a,n),n=n.sibling}function am(e,a,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Ma,n)}catch{}switch(n.tag){case 26:kt||qa(n,a),Ia(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||qa(n,a);var i=ut,o=ia;Tn(n.type)&&(ut=n.stateNode,ia=!1),Ia(e,a,n),Li(n.stateNode),ut=i,ia=o;break;case 5:kt||qa(n,a);case 6:if(i=ut,o=ia,ut=null,Ia(e,a,n),ut=i,ia=o,ut!==null)if(ia)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(n.stateNode)}catch(c){et(n,a,c)}else try{ut.removeChild(n.stateNode)}catch(c){et(n,a,c)}break;case 18:ut!==null&&(ia?(e=ut,Km(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Jl(e)):Km(ut,n.stateNode));break;case 4:i=ut,o=ia,ut=n.stateNode.containerInfo,ia=!0,Ia(e,a,n),ut=i,ia=o;break;case 0:case 11:case 14:case 15:wn(2,n,a),kt||wn(4,n,a),Ia(e,a,n);break;case 1:kt||(qa(n,a),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Jp(n,a,i)),Ia(e,a,n);break;case 21:Ia(e,a,n);break;case 22:kt=(i=kt)||n.memoizedState!==null,Ia(e,a,n),kt=i;break;default:Ia(e,a,n)}}function nm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Jl(e)}catch(n){et(a,a.return,n)}}}function lm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Jl(e)}catch(n){et(a,a.return,n)}}function yg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Ip),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Ip),a;default:throw Error(d(435,e.tag))}}function Gs(e,a){var n=yg(e);a.forEach(function(i){if(!n.has(i)){n.add(i);var o=zg.bind(null,e,i);i.then(o,o)}})}function sa(e,a){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],c=e,u=a,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(Tn(g.type)){ut=g.stateNode,ia=!1;break e}break;case 5:ut=g.stateNode,ia=!1;break e;case 3:case 4:ut=g.stateNode.containerInfo,ia=!0;break e}g=g.return}if(ut===null)throw Error(d(160));am(c,u,o),ut=null,ia=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)im(a,e),a=a.sibling}var Oa=null;function im(e,a){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sa(a,e),oa(e),i&4&&(wn(3,e,e.return),zi(3,e),wn(5,e,e.return));break;case 1:sa(a,e),oa(e),i&512&&(kt||n===null||qa(n,n.return)),i&64&&Pa&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=Oa;if(sa(a,e),oa(e),i&512&&(kt||n===null||qa(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[ai]||c[qt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),Vt(c,i,n),c[qt]=e,Ht(c),i=c;break e;case"link":var u=sf("link","href",o).get(i+(n.href||""));if(u){for(var g=0;g<u.length;g++)if(c=u[g],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(g,1);break t}}c=o.createElement(i),Vt(c,i,n),o.head.appendChild(c);break;case"meta":if(u=sf("meta","content",o).get(i+(n.content||""))){for(g=0;g<u.length;g++)if(c=u[g],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(g,1);break t}}c=o.createElement(i),Vt(c,i,n),o.head.appendChild(c);break;default:throw Error(d(468,i))}c[qt]=e,Ht(c),i=c}e.stateNode=i}else of(o,e.type,e.stateNode);else e.stateNode=lf(o,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?of(o,e.type,e.stateNode):lf(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:sa(a,e),oa(e),i&512&&(kt||n===null||qa(n,n.return)),n!==null&&i&4&&ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sa(a,e),oa(e),i&512&&(kt||n===null||qa(n,n.return)),e.flags&32){o=e.stateNode;try{bl(o,"")}catch(je){et(e,e.return,je)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,ec(e,o,n!==null?n.memoizedProps:o)),i&1024&&(nc=!0);break;case 6:if(sa(a,e),oa(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(je){et(e,e.return,je)}}break;case 3:if(no=null,o=Oa,Oa=to(a.containerInfo),sa(a,e),Oa=o,oa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Jl(a.containerInfo)}catch(je){et(e,e.return,je)}nc&&(nc=!1,sm(e));break;case 4:i=Oa,Oa=to(e.stateNode.containerInfo),sa(a,e),oa(e),Oa=i;break;case 12:sa(a,e),oa(e);break;case 31:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gs(e,i)));break;case 13:sa(a,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Vs=ce()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gs(e,i)));break;case 22:o=e.memoizedState!==null;var z=n!==null&&n.memoizedState!==null,V=Pa,I=kt;if(Pa=V||o,kt=I||z,sa(a,e),kt=I,Pa=V,oa(e),i&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(n===null||z||Pa||kt||il(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){z=n=a;try{if(c=z.stateNode,o)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=z.stateNode;var ae=z.memoizedProps.style,$=ae!=null&&ae.hasOwnProperty("display")?ae.display:null;g.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(je){et(z,z.return,je)}}}else if(a.tag===6){if(n===null){z=a;try{z.stateNode.nodeValue=o?"":z.memoizedProps}catch(je){et(z,z.return,je)}}}else if(a.tag===18){if(n===null){z=a;try{var K=z.stateNode;o?Jm(K,!0):Jm(z.stateNode,!1)}catch(je){et(z,z.return,je)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Gs(e,n))));break;case 19:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Gs(e,i)));break;case 30:break;case 21:break;default:sa(a,e),oa(e)}}function oa(e){var a=e.flags;if(a&2){try{for(var n,i=e.return;i!==null;){if(Wp(i)){n=i;break}i=i.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var o=n.stateNode,c=tc(e);Bs(e,c,o);break;case 5:var u=n.stateNode;n.flags&32&&(bl(u,""),n.flags&=-33);var g=tc(e);Bs(e,g,u);break;case 3:case 4:var z=n.stateNode.containerInfo,V=tc(e);ac(e,V,z);break;default:throw Error(d(161))}}catch(I){et(e,e.return,I)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function sm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;sm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function en(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)em(e,a.alternate,a),a=a.sibling}function il(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:wn(4,a,a.return),il(a);break;case 1:qa(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Jp(a,a.return,n),il(a);break;case 27:Li(a.stateNode);case 26:case 5:qa(a,a.return),il(a);break;case 22:a.memoizedState===null&&il(a);break;case 30:il(a);break;default:il(a)}e=e.sibling}}function tn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,o=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:tn(o,c,n),zi(4,c);break;case 1:if(tn(o,c,n),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(V){et(i,i.return,V)}if(i=c,o=i.updateQueue,o!==null){var g=i.stateNode;try{var z=o.shared.hiddenCallbacks;if(z!==null)for(o.shared.hiddenCallbacks=null,o=0;o<z.length;o++)Hu(z[o],g)}catch(V){et(i,i.return,V)}}n&&u&64&&Kp(c),Ti(c,c.return);break;case 27:Pp(c);case 26:case 5:tn(o,c,n),n&&i===null&&u&4&&Fp(c),Ti(c,c.return);break;case 12:tn(o,c,n);break;case 31:tn(o,c,n),n&&u&4&&nm(o,c);break;case 13:tn(o,c,n),n&&u&4&&lm(o,c);break;case 22:c.memoizedState===null&&tn(o,c,n),Ti(c,c.return);break;case 30:break;default:tn(o,c,n)}a=a.sibling}}function lc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&hi(n))}function ic(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&hi(e))}function Aa(e,a,n,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)om(e,a,n,i),a=a.sibling}function om(e,a,n,i){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Aa(e,a,n,i),o&2048&&zi(9,a);break;case 1:Aa(e,a,n,i);break;case 3:Aa(e,a,n,i),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&hi(e)));break;case 12:if(o&2048){Aa(e,a,n,i),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,g=c.onPostCommit;typeof g=="function"&&g(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){et(a,a.return,z)}}else Aa(e,a,n,i);break;case 31:Aa(e,a,n,i);break;case 13:Aa(e,a,n,i);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Aa(e,a,n,i):Ei(e,a):c._visibility&2?Aa(e,a,n,i):(c._visibility|=2,Ll(e,a,n,i,(a.subtreeFlags&10256)!==0||!1)),o&2048&&lc(u,a);break;case 24:Aa(e,a,n,i),o&2048&&ic(a.alternate,a);break;default:Aa(e,a,n,i)}}function Ll(e,a,n,i,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,g=n,z=i,V=u.flags;switch(u.tag){case 0:case 11:case 15:Ll(c,u,g,z,o),zi(8,u);break;case 23:break;case 22:var I=u.stateNode;u.memoizedState!==null?I._visibility&2?Ll(c,u,g,z,o):Ei(c,u):(I._visibility|=2,Ll(c,u,g,z,o)),o&&V&2048&&lc(u.alternate,u);break;case 24:Ll(c,u,g,z,o),o&&V&2048&&ic(u.alternate,u);break;default:Ll(c,u,g,z,o)}a=a.sibling}}function Ei(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,i=a,o=i.flags;switch(i.tag){case 22:Ei(n,i),o&2048&&lc(i.alternate,i);break;case 24:Ei(n,i),o&2048&&ic(i.alternate,i);break;default:Ei(n,i)}a=a.sibling}}var Mi=8192;function ql(e,a,n){if(e.subtreeFlags&Mi)for(e=e.child;e!==null;)rm(e,a,n),e=e.sibling}function rm(e,a,n){switch(e.tag){case 26:ql(e,a,n),e.flags&Mi&&e.memoizedState!==null&&ib(n,Oa,e.memoizedState,e.memoizedProps);break;case 5:ql(e,a,n);break;case 3:case 4:var i=Oa;Oa=to(e.stateNode.containerInfo),ql(e,a,n),Oa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Mi,Mi=16777216,ql(e,a,n),Mi=i):ql(e,a,n));break;default:ql(e,a,n)}}function cm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Di(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Lt=i,um(i,e)}cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)dm(e),e=e.sibling}function dm(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&wn(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ys(e)):Di(e);break;default:Di(e)}}function Ys(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Lt=i,um(i,e)}cm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:wn(8,a,a.return),Ys(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Ys(a));break;default:Ys(a)}e=e.sibling}}function um(e,a){for(;Lt!==null;){var n=Lt;switch(n.tag){case 0:case 11:case 15:wn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:hi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Lt=i;else e:for(n=e;Lt!==null;){i=Lt;var o=i.sibling,c=i.return;if(tm(i),i===n){Lt=null;break e}if(o!==null){o.return=c,Lt=o;break e}Lt=c}}}var vg={getCacheForType:function(e){var a=Gt(Nt),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Gt(Nt).controller.signal}},jg=typeof WeakMap=="function"?WeakMap:Map,Je=0,it=null,qe=null,Ge=0,Ie=0,ha=null,Nn=!1,Bl=!1,sc=!1,an=0,xt=0,_n=0,sl=0,oc=0,xa=0,Gl=0,Oi=null,ra=null,rc=!1,Vs=0,pm=0,$s=1/0,Qs=null,Sn=null,Mt=0,kn=null,Yl=null,nn=0,cc=0,dc=null,mm=null,Ai=0,uc=null;function ga(){return(Je&2)!==0&&Ge!==0?Ge&-Ge:D.T!==null?gc():Td()}function fm(){if(xa===0)if((Ge&536870912)===0||Ve){var e=Pe;Pe<<=1,(Pe&3932160)===0&&(Pe=262144),xa=e}else xa=536870912;return e=ma.current,e!==null&&(e.flags|=32),xa}function ca(e,a,n){(e===it&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Vl(e,0),Cn(e,Ge,xa,!1)),Vn(e,n),((Je&2)===0||e!==it)&&(e===it&&((Je&2)===0&&(sl|=n),xt===4&&Cn(e,Ge,xa,!1)),Ba(e))}function hm(e,a,n){if((Je&6)!==0)throw Error(d(327));var i=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Ft(e,a),o=i?_g(e,a):mc(e,a,!0),c=i;do{if(o===0){Bl&&!i&&Cn(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!wg(n)){o=mc(e,a,!1),c=!1;continue}if(o===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var g=e;o=Oi;var z=g.current.memoizedState.isDehydrated;if(z&&(Vl(g,u).flags|=256),u=mc(g,u,!1),u!==2){if(sc&&!z){g.errorRecoveryDisabledLanes|=c,sl|=c,o=4;break e}c=ra,ra=o,c!==null&&(ra===null?ra=c:ra.push.apply(ra,c))}o=u}if(c=!1,o!==2)continue}}if(o===1){Vl(e,0),Cn(e,a,0,!0);break}e:{switch(i=e,c=o,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Cn(i,a,xa,!Nn);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(o=Vs+300-ce(),10<o)){if(Cn(i,a,xa,!Nn),aa(i,0,!0)!==0)break e;nn=a,i.timeoutHandle=Xm(xm.bind(null,i,n,ra,Qs,rc,a,xa,sl,Gl,Nn,c,"Throttled",-0,0),o);break e}xm(i,n,ra,Qs,rc,a,xa,sl,Gl,Nn,c,null,-0,0)}}break}while(!0);Ba(e)}function xm(e,a,n,i,o,c,u,g,z,V,I,ae,$,K){if(e.timeoutHandle=-1,ae=a.subtreeFlags,ae&8192||(ae&16785408)===16785408){ae={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ya},rm(a,c,ae);var je=(c&62914560)===c?Vs-ce():(c&4194048)===c?pm-ce():0;if(je=sb(ae,je),je!==null){nn=c,e.cancelPendingCommit=je(_m.bind(null,e,a,c,n,i,o,u,g,z,I,ae,null,$,K)),Cn(e,c,u,!V);return}}_m(e,a,c,n,i,o,u,g,z)}function wg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!ua(c(),o))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Cn(e,a,n,i){a&=~oc,a&=~sl,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var o=a;0<o;){var c=31-L(o),u=1<<c;i[c]=-1,o&=~u}n!==0&&w(e,n,a)}function Xs(){return(Je&6)===0?(Ui(0),!1):!0}function pc(){if(qe!==null){if(Ie===0)var e=qe.return;else e=qe,Xa=Wn=null,zr(e),Ol=null,gi=0,e=qe;for(;e!==null;)Zp(e.alternate,e),e=e.return;qe=null}}function Vl(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Yg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),nn=0,pc(),it=e,qe=n=$a(e.current,null),Ge=a,Ie=0,ha=null,Nn=!1,Bl=Ft(e,a),sc=!1,Gl=xa=oc=sl=_n=xt=0,ra=Oi=null,rc=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var o=31-L(i),c=1<<o;a|=e[o],i&=~c}return an=a,ms(),n}function gm(e,a){Oe=null,D.H=Si,a===Dl||a===js?(a=Ou(),Ie=3):a===xr?(a=Ou(),Ie=4):Ie=a===$r?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ha=a,qe===null&&(xt=1,Us(e,Na(a,e.current)))}function bm(){var e=ma.current;return e===null?!0:(Ge&4194048)===Ge?Ca===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===Ca:!1}function ym(){var e=D.H;return D.H=Si,e===null?Si:e}function vm(){var e=D.A;return D.A=vg,e}function Zs(){xt=4,Nn||(Ge&4194048)!==Ge&&ma.current!==null||(Bl=!0),(_n&134217727)===0&&(sl&134217727)===0||it===null||Cn(it,Ge,xa,!1)}function mc(e,a,n){var i=Je;Je|=2;var o=ym(),c=vm();(it!==e||Ge!==a)&&(Qs=null,Vl(e,a)),a=!1;var u=xt;e:do try{if(Ie!==0&&qe!==null){var g=qe,z=ha;switch(Ie){case 8:pc(),u=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var V=Ie;if(Ie=0,ha=null,$l(e,g,z,V),n&&Bl){u=0;break e}break;default:V=Ie,Ie=0,ha=null,$l(e,g,z,V)}}Ng(),u=xt;break}catch(I){gm(e,I)}while(!0);return a&&e.shellSuspendCounter++,Xa=Wn=null,Je=i,D.H=o,D.A=c,qe===null&&(it=null,Ge=0,ms()),u}function Ng(){for(;qe!==null;)jm(qe)}function _g(e,a){var n=Je;Je|=2;var i=ym(),o=vm();it!==e||Ge!==a?(Qs=null,$s=ce()+500,Vl(e,a)):Bl=Ft(e,a);e:do try{if(Ie!==0&&qe!==null){a=qe;var c=ha;t:switch(Ie){case 1:Ie=0,ha=null,$l(e,a,c,1);break;case 2:case 9:if(Mu(c)){Ie=0,ha=null,wm(a);break}a=function(){Ie!==2&&Ie!==9||it!==e||(Ie=7),Ba(e)},c.then(a,a);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:Mu(c)?(Ie=0,ha=null,wm(a)):(Ie=0,ha=null,$l(e,a,c,7));break;case 5:var u=null;switch(qe.tag){case 26:u=qe.memoizedState;case 5:case 27:var g=qe;if(u?rf(u):g.stateNode.complete){Ie=0,ha=null;var z=g.sibling;if(z!==null)qe=z;else{var V=g.return;V!==null?(qe=V,Ks(V)):qe=null}break t}}Ie=0,ha=null,$l(e,a,c,5);break;case 6:Ie=0,ha=null,$l(e,a,c,6);break;case 8:pc(),xt=6;break e;default:throw Error(d(462))}}Sg();break}catch(I){gm(e,I)}while(!0);return Xa=Wn=null,D.H=i,D.A=o,Je=n,qe!==null?0:(it=null,Ge=0,ms(),xt)}function Sg(){for(;qe!==null&&!E();)jm(qe)}function jm(e){var a=Qp(e.alternate,e,an);e.memoizedProps=e.pendingProps,a===null?Ks(e):qe=a}function wm(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=qp(n,a,a.pendingProps,a.type,void 0,Ge);break;case 11:a=qp(n,a,a.pendingProps,a.type.render,a.ref,Ge);break;case 5:zr(a);default:Zp(n,a),a=qe=vu(a,an),a=Qp(n,a,an)}e.memoizedProps=e.pendingProps,a===null?Ks(e):qe=a}function $l(e,a,n,i){Xa=Wn=null,zr(a),Ol=null,gi=0;var o=a.return;try{if(mg(e,o,a,n,Ge)){xt=1,Us(e,Na(n,e.current)),qe=null;return}}catch(c){if(o!==null)throw qe=o,c;xt=1,Us(e,Na(n,e.current)),qe=null;return}a.flags&32768?(Ve||i===1?e=!0:Bl||(Ge&536870912)!==0?e=!1:(Nn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ma.current,i!==null&&i.tag===13&&(i.flags|=16384))),Nm(a,e)):Ks(a)}function Ks(e){var a=e;do{if((a.flags&32768)!==0){Nm(a,Nn);return}e=a.return;var n=xg(a.alternate,a,an);if(n!==null){qe=n;return}if(a=a.sibling,a!==null){qe=a;return}qe=a=e}while(a!==null);xt===0&&(xt=5)}function Nm(e,a){do{var n=gg(e.alternate,e);if(n!==null){n.flags&=32767,qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){qe=e;return}qe=e=n}while(e!==null);xt=6,qe=null}function _m(e,a,n,i,o,c,u,g,z){e.cancelPendingCommit=null;do Js();while(Mt!==0);if((Je&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=tr,Ra(e,n,c,u,g,z),e===it&&(qe=it=null,Ge=0),Yl=a,kn=e,nn=n,cc=c,dc=o,mm=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Tg(Ee,function(){return Tm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,o=Q.p,Q.p=2,u=Je,Je|=4;try{bg(e,a,n)}finally{Je=u,Q.p=o,D.T=i}}Mt=1,Sm(),km(),Cm()}}function Sm(){if(Mt===1){Mt=0;var e=kn,a=Yl,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=Q.p;Q.p=2;var o=Je;Je|=4;try{im(a,e);var c=Sc,u=uu(e.containerInfo),g=c.focusedElem,z=c.selectionRange;if(u!==g&&g&&g.ownerDocument&&du(g.ownerDocument.documentElement,g)){if(z!==null&&Fo(g)){var V=z.start,I=z.end;if(I===void 0&&(I=V),"selectionStart"in g)g.selectionStart=V,g.selectionEnd=Math.min(I,g.value.length);else{var ae=g.ownerDocument||document,$=ae&&ae.defaultView||window;if($.getSelection){var K=$.getSelection(),je=g.textContent.length,ze=Math.min(z.start,je),nt=z.end===void 0?ze:Math.min(z.end,je);!K.extend&&ze>nt&&(u=nt,nt=ze,ze=u);var q=cu(g,ze),M=cu(g,nt);if(q&&M&&(K.rangeCount!==1||K.anchorNode!==q.node||K.anchorOffset!==q.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var Y=ae.createRange();Y.setStart(q.node,q.offset),K.removeAllRanges(),ze>nt?(K.addRange(Y),K.extend(M.node,M.offset)):(Y.setEnd(M.node,M.offset),K.addRange(Y))}}}}for(ae=[],K=g;K=K.parentNode;)K.nodeType===1&&ae.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<ae.length;g++){var te=ae[g];te.element.scrollLeft=te.left,te.element.scrollTop=te.top}}oo=!!_c,Sc=_c=null}finally{Je=o,Q.p=i,D.T=n}}e.current=a,Mt=2}}function km(){if(Mt===2){Mt=0;var e=kn,a=Yl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=Q.p;Q.p=2;var o=Je;Je|=4;try{em(e,a.alternate,a)}finally{Je=o,Q.p=i,D.T=n}}Mt=3}}function Cm(){if(Mt===4||Mt===3){Mt=0,R();var e=kn,a=Yl,n=nn,i=mm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Mt=5:(Mt=0,Yl=kn=null,zm(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Sn=null),Wt(n),a=a.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Ma,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=D.T,o=Q.p,Q.p=2,D.T=null;try{for(var c=e.onRecoverableError,u=0;u<i.length;u++){var g=i[u];c(g.value,{componentStack:g.stack})}}finally{D.T=a,Q.p=o}}(nn&3)!==0&&Js(),Ba(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===uc?Ai++:(Ai=0,uc=e):Ai=0,Ui(0)}}function zm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,hi(a)))}function Js(){return Sm(),km(),Cm(),Tm()}function Tm(){if(Mt!==5)return!1;var e=kn,a=cc;cc=0;var n=Wt(nn),i=D.T,o=Q.p;try{Q.p=32>n?32:n,D.T=null,n=dc,dc=null;var c=kn,u=nn;if(Mt=0,Yl=kn=null,nn=0,(Je&6)!==0)throw Error(d(331));var g=Je;if(Je|=4,dm(c.current),om(c,c.current,u,n),Je=g,Ui(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Ma,c)}catch{}return!0}finally{Q.p=o,D.T=i,zm(e,a)}}function Em(e,a,n){a=Na(n,a),a=Vr(e.stateNode,a,2),e=yn(e,a,2),e!==null&&(Vn(e,2),Ba(e))}function et(e,a,n){if(e.tag===3)Em(e,e,n);else for(;a!==null;){if(a.tag===3){Em(a,e,n);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){e=Na(n,e),n=Mp(2),i=yn(a,n,2),i!==null&&(Dp(n,i,a,e),Vn(i,2),Ba(i));break}}a=a.return}}function fc(e,a,n){var i=e.pingCache;if(i===null){i=e.pingCache=new jg;var o=new Set;i.set(a,o)}else o=i.get(a),o===void 0&&(o=new Set,i.set(a,o));o.has(n)||(sc=!0,o.add(n),e=kg.bind(null,e,a,n),a.then(e,e))}function kg(e,a,n){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,it===e&&(Ge&n)===n&&(xt===4||xt===3&&(Ge&62914560)===Ge&&300>ce()-Vs?(Je&2)===0&&Vl(e,0):oc|=n,Gl===Ge&&(Gl=0)),Ba(e)}function Mm(e,a){a===0&&(a=ot()),e=Kn(e,a),e!==null&&(Vn(e,a),Ba(e))}function Cg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Mm(e,n)}function zg(e,a){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(a),Mm(e,n)}function Tg(e,a){return Xt(e,a)}var Fs=null,Ql=null,hc=!1,Ws=!1,xc=!1,zn=0;function Ba(e){e!==Ql&&e.next===null&&(Ql===null?Fs=Ql=e:Ql=Ql.next=e),Ws=!0,hc||(hc=!0,Mg())}function Ui(e,a){if(!xc&&Ws){xc=!0;do for(var n=!1,i=Fs;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var u=i.suspendedLanes,g=i.pingedLanes;c=(1<<31-L(42|e)+1)-1,c&=o&~(u&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Um(i,c))}else c=Ge,c=aa(i,i===it?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Ft(i,c)||(n=!0,Um(i,c));i=i.next}while(n);xc=!1}}function Eg(){Dm()}function Dm(){Ws=hc=!1;var e=0;zn!==0&&Gg()&&(e=zn);for(var a=ce(),n=null,i=Fs;i!==null;){var o=i.next,c=Om(i,a);c===0?(i.next=null,n===null?Fs=o:n.next=o,o===null&&(Ql=n)):(n=i,(e!==0||(c&3)!==0)&&(Ws=!0)),i=o}Mt!==0&&Mt!==5||Ui(e),zn!==0&&(zn=0)}function Om(e,a){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-L(c),g=1<<u,z=o[u];z===-1?((g&n)===0||(g&i)!==0)&&(o[u]=dn(g,a)):z<=a&&(e.expiredLanes|=g),c&=~g}if(a=it,n=Ge,n=aa(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===a&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ea(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ft(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(i!==null&&ea(i),Wt(n)){case 2:case 8:n=Ce;break;case 32:n=Ee;break;case 268435456:n=cn;break;default:n=Ee}return i=Am.bind(null,e),n=Xt(n,i),e.callbackPriority=a,e.callbackNode=n,a}return i!==null&&i!==null&&ea(i),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,a){if(Mt!==0&&Mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Js()&&e.callbackNode!==n)return null;var i=Ge;return i=aa(e,e===it?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(hm(e,i,a),Om(e,ce()),e.callbackNode!=null&&e.callbackNode===n?Am.bind(null,e):null)}function Um(e,a){if(Js())return null;hm(e,a,!0)}function Mg(){Vg(function(){(Je&6)!==0?Xt(ve,Eg):Dm()})}function gc(){if(zn===0){var e=El;e===0&&(e=Me,Me<<=1,(Me&261888)===0&&(Me=256)),zn=e}return zn}function Rm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:is(""+e)}function Hm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function Dg(e,a,n,i,o){if(a==="submit"&&n&&n.stateNode===o){var c=Rm((o[na]||null).action),u=i.submitter;u&&(a=(a=u[na]||null)?Rm(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var g=new cs("action","action",null,i,o);e.push({event:g,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(zn!==0){var z=u?Hm(o,u):new FormData(o);Hr(n,{pending:!0,data:z,method:o.method,action:c},null,z)}}else typeof c=="function"&&(g.preventDefault(),z=u?Hm(o,u):new FormData(o),Hr(n,{pending:!0,data:z,method:o.method,action:c},c,z))},currentTarget:o}]})}}for(var bc=0;bc<er.length;bc++){var yc=er[bc],Og=yc.toLowerCase(),Ag=yc[0].toUpperCase()+yc.slice(1);Da(Og,"on"+Ag)}Da(fu,"onAnimationEnd"),Da(hu,"onAnimationIteration"),Da(xu,"onAnimationStart"),Da("dblclick","onDoubleClick"),Da("focusin","onFocus"),Da("focusout","onBlur"),Da(Fx,"onTransitionRun"),Da(Wx,"onTransitionStart"),Da(Px,"onTransitionCancel"),Da(gu,"onTransitionEnd"),xl("onMouseEnter",["mouseout","mouseover"]),xl("onMouseLeave",["mouseout","mouseover"]),xl("onPointerEnter",["pointerout","pointerover"]),xl("onPointerLeave",["pointerout","pointerover"]),$n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),$n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),$n("onBeforeInput",["compositionend","keypress","textInput","paste"]),$n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),$n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ug=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function Lm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(a)for(var u=i.length-1;0<=u;u--){var g=i[u],z=g.instance,V=g.currentTarget;if(g=g.listener,z!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=V;try{c(o)}catch(I){ps(I)}o.currentTarget=null,c=z}else for(u=0;u<i.length;u++){if(g=i[u],z=g.instance,V=g.currentTarget,g=g.listener,z!==c&&o.isPropagationStopped())break e;c=g,o.currentTarget=V;try{c(o)}catch(I){ps(I)}o.currentTarget=null,c=z}}}}function Be(e,a){var n=a[Do];n===void 0&&(n=a[Do]=new Set);var i=e+"__bubble";n.has(i)||(qm(a,e,2,!1),n.add(i))}function vc(e,a,n){var i=0;a&&(i|=4),qm(n,e,i,a)}var Ps="_reactListening"+Math.random().toString(36).slice(2);function jc(e){if(!e[Ps]){e[Ps]=!0,Dd.forEach(function(n){n!=="selectionchange"&&(Ug.has(n)||vc(n,!1,e),vc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Ps]||(a[Ps]=!0,vc("selectionchange",!1,a))}}function qm(e,a,n,i){switch(hf(a)){case 2:var o=cb;break;case 8:o=db;break;default:o=Rc}n=o.bind(null,a,n,e),o=void 0,!Go||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(a,n,{capture:!0,passive:o}):e.addEventListener(a,n,!0):o!==void 0?e.addEventListener(a,n,{passive:o}):e.addEventListener(a,n,!1)}function wc(e,a,n,i,o){var c=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var g=i.stateNode.containerInfo;if(g===o)break;if(u===4)for(u=i.return;u!==null;){var z=u.tag;if((z===3||z===4)&&u.stateNode.containerInfo===o)return;u=u.return}for(;g!==null;){if(u=ml(g),u===null)return;if(z=u.tag,z===5||z===6||z===26||z===27){i=c=u;continue e}g=g.parentNode}}i=i.return}$d(function(){var V=c,I=qo(n),ae=[];e:{var $=bu.get(e);if($!==void 0){var K=cs,je=e;switch(e){case"keypress":if(os(n)===0)break e;case"keydown":case"keyup":K=zx;break;case"focusin":je="focus",K=Qo;break;case"focusout":je="blur",K=Qo;break;case"beforeblur":case"afterblur":K=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Zd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Mx;break;case fu:case hu:case xu:K=yx;break;case gu:K=Ox;break;case"scroll":case"scrollend":K=fx;break;case"wheel":K=Ux;break;case"copy":case"cut":case"paste":K=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Jd;break;case"toggle":case"beforetoggle":K=Hx}var ze=(a&4)!==0,nt=!ze&&(e==="scroll"||e==="scrollend"),q=ze?$!==null?$+"Capture":null:$;ze=[];for(var M=V,Y;M!==null;){var te=M;if(Y=te.stateNode,te=te.tag,te!==5&&te!==26&&te!==27||Y===null||q===null||(te=li(M,q),te!=null&&ze.push(Hi(M,te,Y))),nt)break;M=M.return}0<ze.length&&($=new K($,je,null,n,I),ae.push({event:$,listeners:ze}))}}if((a&7)===0){e:{if($=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",$&&n!==Lo&&(je=n.relatedTarget||n.fromElement)&&(ml(je)||je[pl]))break e;if((K||$)&&($=I.window===I?I:($=I.ownerDocument)?$.defaultView||$.parentWindow:window,K?(je=n.relatedTarget||n.toElement,K=V,je=je?ml(je):null,je!==null&&(nt=h(je),ze=je.tag,je!==nt||ze!==5&&ze!==27&&ze!==6)&&(je=null)):(K=null,je=V),K!==je)){if(ze=Zd,te="onMouseLeave",q="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ze=Jd,te="onPointerLeave",q="onPointerEnter",M="pointer"),nt=K==null?$:ni(K),Y=je==null?$:ni(je),$=new ze(te,M+"leave",K,n,I),$.target=nt,$.relatedTarget=Y,te=null,ml(I)===V&&(ze=new ze(q,M+"enter",je,n,I),ze.target=Y,ze.relatedTarget=nt,te=ze),nt=te,K&&je)t:{for(ze=Rg,q=K,M=je,Y=0,te=q;te;te=ze(te))Y++;te=0;for(var ke=M;ke;ke=ze(ke))te++;for(;0<Y-te;)q=ze(q),Y--;for(;0<te-Y;)M=ze(M),te--;for(;Y--;){if(q===M||M!==null&&q===M.alternate){ze=q;break t}q=ze(q),M=ze(M)}ze=null}else ze=null;K!==null&&Bm(ae,$,K,ze,!1),je!==null&&nt!==null&&Bm(ae,nt,je,ze,!0)}}e:{if($=V?ni(V):window,K=$.nodeName&&$.nodeName.toLowerCase(),K==="select"||K==="input"&&$.type==="file")var Qe=nu;else if(tu($))if(lu)Qe=Zx;else{Qe=Qx;var Ne=$x}else K=$.nodeName,!K||K.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?V&&Ho(V.elementType)&&(Qe=nu):Qe=Xx;if(Qe&&(Qe=Qe(e,V))){au(ae,Qe,n,I);break e}Ne&&Ne(e,$,V),e==="focusout"&&V&&$.type==="number"&&V.memoizedProps.value!=null&&Ro($,"number",$.value)}switch(Ne=V?ni(V):window,e){case"focusin":(tu(Ne)||Ne.contentEditable==="true")&&(wl=Ne,Wo=V,pi=null);break;case"focusout":pi=Wo=wl=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,pu(ae,n,I);break;case"selectionchange":if(Jx)break;case"keydown":case"keyup":pu(ae,n,I)}var Ae;if(Zo)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else jl?Id(e,n)&&(Ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ye="onCompositionStart");Ye&&(Fd&&n.locale!=="ko"&&(jl||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&jl&&(Ae=Qd()):(pn=I,Yo="value"in pn?pn.value:pn.textContent,jl=!0)),Ne=Is(V,Ye),0<Ne.length&&(Ye=new Kd(Ye,e,null,n,I),ae.push({event:Ye,listeners:Ne}),Ae?Ye.data=Ae:(Ae=eu(n),Ae!==null&&(Ye.data=Ae)))),(Ae=qx?Bx(e,n):Gx(e,n))&&(Ye=Is(V,"onBeforeInput"),0<Ye.length&&(Ne=new Kd("onBeforeInput","beforeinput",null,n,I),ae.push({event:Ne,listeners:Ye}),Ne.data=Ae)),Dg(ae,e,V,n,I)}Lm(ae,a)})}function Hi(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Is(e,a){for(var n=a+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=li(e,n),o!=null&&i.unshift(Hi(e,o,c)),o=li(e,a),o!=null&&i.push(Hi(e,o,c))),e.tag===3)return i;e=e.return}return[]}function Rg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Bm(e,a,n,i,o){for(var c=a._reactName,u=[];n!==null&&n!==i;){var g=n,z=g.alternate,V=g.stateNode;if(g=g.tag,z!==null&&z===i)break;g!==5&&g!==26&&g!==27||V===null||(z=V,o?(V=li(n,c),V!=null&&u.unshift(Hi(n,V,z))):o||(V=li(n,c),V!=null&&u.push(Hi(n,V,z)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var Hg=/\r\n?/g,Lg=/\u0000|\uFFFD/g;function Gm(e){return(typeof e=="string"?e:""+e).replace(Hg,`
`).replace(Lg,"")}function Ym(e,a){return a=Gm(a),Gm(e)===a}function at(e,a,n,i,o,c){switch(n){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||bl(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&bl(e,""+i);break;case"className":ns(e,"class",i);break;case"tabIndex":ns(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":ns(e,n,i);break;case"style":Yd(e,i,c);break;case"data":if(a!=="object"){ns(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=is(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&at(e,a,"name",o.name,o,null),at(e,a,"formEncType",o.formEncType,o,null),at(e,a,"formMethod",o.formMethod,o,null),at(e,a,"formTarget",o.formTarget,o,null)):(at(e,a,"encType",o.encType,o,null),at(e,a,"method",o.method,o,null),at(e,a,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=is(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Ya);break;case"onScroll":i!=null&&Be("scroll",e);break;case"onScrollEnd":i!=null&&Be("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=is(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Be("beforetoggle",e),Be("toggle",e),as(e,"popover",i);break;case"xlinkActuate":Ga(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ga(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ga(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ga(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ga(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ga(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ga(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":as(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=px.get(n)||n,as(e,n,i))}}function Nc(e,a,n,i,o,c){switch(n){case"style":Yd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof i=="string"?bl(e,i):(typeof i=="number"||typeof i=="bigint")&&bl(e,""+i);break;case"onScroll":i!=null&&Be("scroll",e);break;case"onScrollEnd":i!=null&&Be("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ya);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Od.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),a=n.slice(2,o?n.length-7:void 0),c=e[na]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):as(e,n,i)}}}function Vt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",e),Be("load",e);var i=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:at(e,a,c,u,n,null)}}o&&at(e,a,"srcSet",n.srcSet,n,null),i&&at(e,a,"src",n.src,n,null);return;case"input":Be("invalid",e);var g=c=u=o=null,z=null,V=null;for(i in n)if(n.hasOwnProperty(i)){var I=n[i];if(I!=null)switch(i){case"name":o=I;break;case"type":u=I;break;case"checked":z=I;break;case"defaultChecked":V=I;break;case"value":c=I;break;case"defaultValue":g=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(d(137,a));break;default:at(e,a,i,I,n,null)}}Ld(e,c,g,z,V,u,o,!1);return;case"select":Be("invalid",e),i=u=c=null;for(o in n)if(n.hasOwnProperty(o)&&(g=n[o],g!=null))switch(o){case"value":c=g;break;case"defaultValue":u=g;break;case"multiple":i=g;default:at(e,a,o,g,n,null)}a=c,n=u,e.multiple=!!i,a!=null?gl(e,!!i,a,!1):n!=null&&gl(e,!!i,n,!0);return;case"textarea":Be("invalid",e),c=o=i=null;for(u in n)if(n.hasOwnProperty(u)&&(g=n[u],g!=null))switch(u){case"value":i=g;break;case"defaultValue":o=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:at(e,a,u,g,n,null)}Bd(e,i,o,c);return;case"option":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:at(e,a,z,i,n,null)}return;case"dialog":Be("beforetoggle",e),Be("toggle",e),Be("cancel",e),Be("close",e);break;case"iframe":case"object":Be("load",e);break;case"video":case"audio":for(i=0;i<Ri.length;i++)Be(Ri[i],e);break;case"image":Be("error",e),Be("load",e);break;case"details":Be("toggle",e);break;case"embed":case"source":case"link":Be("error",e),Be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(V in n)if(n.hasOwnProperty(V)&&(i=n[V],i!=null))switch(V){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:at(e,a,V,i,n,null)}return;default:if(Ho(a)){for(I in n)n.hasOwnProperty(I)&&(i=n[I],i!==void 0&&Nc(e,a,I,i,n,void 0));return}}for(g in n)n.hasOwnProperty(g)&&(i=n[g],i!=null&&at(e,a,g,i,n,null))}function qg(e,a,n,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,u=null,g=null,z=null,V=null,I=null;for(K in n){var ae=n[K];if(n.hasOwnProperty(K)&&ae!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":z=ae;default:i.hasOwnProperty(K)||at(e,a,K,null,i,ae)}}for(var $ in i){var K=i[$];if(ae=n[$],i.hasOwnProperty($)&&(K!=null||ae!=null))switch($){case"type":c=K;break;case"name":o=K;break;case"checked":V=K;break;case"defaultChecked":I=K;break;case"value":u=K;break;case"defaultValue":g=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,a));break;default:K!==ae&&at(e,a,$,K,i,ae)}}Uo(e,u,g,z,V,I,c,o);return;case"select":K=u=g=$=null;for(c in n)if(z=n[c],n.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":K=z;default:i.hasOwnProperty(c)||at(e,a,c,null,i,z)}for(o in i)if(c=i[o],z=n[o],i.hasOwnProperty(o)&&(c!=null||z!=null))switch(o){case"value":$=c;break;case"defaultValue":g=c;break;case"multiple":u=c;default:c!==z&&at(e,a,o,c,i,z)}a=g,n=u,i=K,$!=null?gl(e,!!n,$,!1):!!i!=!!n&&(a!=null?gl(e,!!n,a,!0):gl(e,!!n,n?[]:"",!1));return;case"textarea":K=$=null;for(g in n)if(o=n[g],n.hasOwnProperty(g)&&o!=null&&!i.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:at(e,a,g,null,i,o)}for(u in i)if(o=i[u],c=n[u],i.hasOwnProperty(u)&&(o!=null||c!=null))switch(u){case"value":$=o;break;case"defaultValue":K=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:o!==c&&at(e,a,u,o,i,c)}qd(e,$,K);return;case"option":for(var je in n)if($=n[je],n.hasOwnProperty(je)&&$!=null&&!i.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:at(e,a,je,null,i,$)}for(z in i)if($=i[z],K=n[z],i.hasOwnProperty(z)&&$!==K&&($!=null||K!=null))switch(z){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:at(e,a,z,$,i,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in n)$=n[ze],n.hasOwnProperty(ze)&&$!=null&&!i.hasOwnProperty(ze)&&at(e,a,ze,null,i,$);for(V in i)if($=i[V],K=n[V],i.hasOwnProperty(V)&&$!==K&&($!=null||K!=null))switch(V){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(d(137,a));break;default:at(e,a,V,$,i,K)}return;default:if(Ho(a)){for(var nt in n)$=n[nt],n.hasOwnProperty(nt)&&$!==void 0&&!i.hasOwnProperty(nt)&&Nc(e,a,nt,void 0,i,$);for(I in i)$=i[I],K=n[I],!i.hasOwnProperty(I)||$===K||$===void 0&&K===void 0||Nc(e,a,I,$,i,K);return}}for(var q in n)$=n[q],n.hasOwnProperty(q)&&$!=null&&!i.hasOwnProperty(q)&&at(e,a,q,null,i,$);for(ae in i)$=i[ae],K=n[ae],!i.hasOwnProperty(ae)||$===K||$==null&&K==null||at(e,a,ae,$,i,K)}function Vm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Bg(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],c=o.transferSize,u=o.initiatorType,g=o.duration;if(c&&g&&Vm(u)){for(u=0,g=o.responseEnd,i+=1;i<n.length;i++){var z=n[i],V=z.startTime;if(V>g)break;var I=z.transferSize,ae=z.initiatorType;I&&Vm(ae)&&(z=z.responseEnd,u+=I*(z<g?1:(g-V)/(z-V)))}if(--i,a+=8*(c+u)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _c=null,Sc=null;function eo(e){return e.nodeType===9?e:e.ownerDocument}function $m(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Qm(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function kc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Cc=null;function Gg(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var Xm=typeof setTimeout=="function"?setTimeout:void 0,Yg=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,Vg=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(e){return Zm.resolve(null).then(e).catch($g)}:Xm;function $g(e){setTimeout(function(){throw e})}function Tn(e){return e==="head"}function Km(e,a){var n=a,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(o),Jl(a);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Li(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Li(n);for(var c=n.firstChild;c;){var u=c.nextSibling,g=c.nodeName;c[ai]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Li(e.ownerDocument.body);n=o}while(n);Jl(a)}function Jm(e,a){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zc(n),Oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Qg(e,a,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ai])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=za(e.nextSibling),e===null)break}return null}function Xg(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=za(e.nextSibling),e===null))return null;return e}function Fm(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=za(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zg(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var i=function(){a(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function za(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Mc=null;function Wm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return za(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function Pm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function Im(e,a,n){switch(a=eo(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Li(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Oo(e)}var Ta=new Map,ef=new Set;function to(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ln=Q.d;Q.d={f:Kg,r:Jg,D:Fg,C:Wg,L:Pg,m:Ig,X:tb,S:eb,M:ab};function Kg(){var e=ln.f(),a=Xs();return e||a}function Jg(e){var a=fl(e);a!==null&&a.tag===5&&a.type==="form"?gp(a):ln.r(e)}var Xl=typeof document>"u"?null:document;function tf(e,a,n){var i=Xl;if(i&&typeof a=="string"&&a){var o=ja(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),ef.has(o)||(ef.add(o),e={rel:e,crossOrigin:n,href:a},i.querySelector(o)===null&&(a=i.createElement("link"),Vt(a,"link",e),Ht(a),i.head.appendChild(a)))}}function Fg(e){ln.D(e),tf("dns-prefetch",e,null)}function Wg(e,a){ln.C(e,a),tf("preconnect",e,a)}function Pg(e,a,n){ln.L(e,a,n);var i=Xl;if(i&&e&&a){var o='link[rel="preload"][as="'+ja(a)+'"]';a==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+ja(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+ja(n.imageSizes)+'"]')):o+='[href="'+ja(e)+'"]';var c=o;switch(a){case"style":c=Zl(e);break;case"script":c=Kl(e)}Ta.has(c)||(e=x({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ta.set(c,e),i.querySelector(o)!==null||a==="style"&&i.querySelector(qi(c))||a==="script"&&i.querySelector(Bi(c))||(a=i.createElement("link"),Vt(a,"link",e),Ht(a),i.head.appendChild(a)))}}function Ig(e,a){ln.m(e,a);var n=Xl;if(n&&e){var i=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+ja(i)+'"][href="'+ja(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Kl(e)}if(!Ta.has(c)&&(e=x({rel:"modulepreload",href:e},a),Ta.set(c,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Bi(c)))return}i=n.createElement("link"),Vt(i,"link",e),Ht(i),n.head.appendChild(i)}}}function eb(e,a,n){ln.S(e,a,n);var i=Xl;if(i&&e){var o=hl(i).hoistableStyles,c=Zl(e);a=a||"default";var u=o.get(c);if(!u){var g={loading:0,preload:null};if(u=i.querySelector(qi(c)))g.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ta.get(c))&&Dc(e,n);var z=u=i.createElement("link");Ht(z),Vt(z,"link",e),z._p=new Promise(function(V,I){z.onload=V,z.onerror=I}),z.addEventListener("load",function(){g.loading|=1}),z.addEventListener("error",function(){g.loading|=2}),g.loading|=4,ao(u,a,i)}u={type:"stylesheet",instance:u,count:1,state:g},o.set(c,u)}}}function tb(e,a){ln.X(e,a);var n=Xl;if(n&&e){var i=hl(n).hoistableScripts,o=Kl(e),c=i.get(o);c||(c=n.querySelector(Bi(o)),c||(e=x({src:e,async:!0},a),(a=Ta.get(o))&&Oc(e,a),c=n.createElement("script"),Ht(c),Vt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function ab(e,a){ln.M(e,a);var n=Xl;if(n&&e){var i=hl(n).hoistableScripts,o=Kl(e),c=i.get(o);c||(c=n.querySelector(Bi(o)),c||(e=x({src:e,async:!0,type:"module"},a),(a=Ta.get(o))&&Oc(e,a),c=n.createElement("script"),Ht(c),Vt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function af(e,a,n,i){var o=(o=_e.current)?to(o):null;if(!o)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Zl(n.href),n=hl(o).hoistableStyles,i=n.get(a),i||(i={type:"style",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Zl(n.href);var c=hl(o).hoistableStyles,u=c.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=o.querySelector(qi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ta.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ta.set(e,n),c||nb(o,e,n,u.state))),a&&i===null)throw Error(d(528,""));return u}if(a&&i!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Kl(n),n=hl(o).hoistableScripts,i=n.get(a),i||(i={type:"script",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Zl(e){return'href="'+ja(e)+'"'}function qi(e){return'link[rel="stylesheet"]['+e+"]"}function nf(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function nb(e,a,n,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Vt(a,"link",n),Ht(a),e.head.appendChild(a))}function Kl(e){return'[src="'+ja(e)+'"]'}function Bi(e){return"script[async]"+e}function lf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+ja(n.href)+'"]');if(i)return a.instance=i,Ht(i),i;var o=x({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ht(i),Vt(i,"style",o),ao(i,n.precedence,e),a.instance=i;case"stylesheet":o=Zl(n.href);var c=e.querySelector(qi(o));if(c)return a.state.loading|=4,a.instance=c,Ht(c),c;i=nf(n),(o=Ta.get(o))&&Dc(i,o),c=(e.ownerDocument||e).createElement("link"),Ht(c);var u=c;return u._p=new Promise(function(g,z){u.onload=g,u.onerror=z}),Vt(c,"link",i),a.state.loading|=4,ao(c,n.precedence,e),a.instance=c;case"script":return c=Kl(n.src),(o=e.querySelector(Bi(c)))?(a.instance=o,Ht(o),o):(i=n,(o=Ta.get(c))&&(i=x({},n),Oc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ht(o),Vt(o,"link",i),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,ao(i,n.precedence,e));return a.instance}function ao(e,a,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,u=0;u<i.length;u++){var g=i[u];if(g.dataset.precedence===a)c=g;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Dc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Oc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var no=null;function sf(e,a,n){if(no===null){var i=new Map,o=no=new Map;o.set(n,i)}else o=no,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[ai]||c[qt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var g=i.get(u);g?g.push(c):i.set(u,[c])}}return i}function of(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function lb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function rf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function ib(e,a,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Zl(i.href),c=a.querySelector(qi(o));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=lo.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Ht(c);return}c=a.ownerDocument||a,i=nf(i),(o=Ta.get(o))&&Dc(i,o),c=c.createElement("link"),Ht(c);var u=c;u._p=new Promise(function(g,z){u.onload=g,u.onerror=z}),Vt(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=lo.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Ac=0;function sb(e,a){return e.stylesheets&&e.count===0&&so(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&so(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&Ac===0&&(Ac=62500*Bg());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&so(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Ac?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function lo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)so(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var io=null;function so(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,io=new Map,a.forEach(ob,e),io=null,lo.call(e))}function ob(e,a){if(!(a.state.loading&4)){var n=io.get(e);if(n)var i=n.get(null);else{n=new Map,io.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var u=o[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),i=u)}i&&n.set(null,i)}o=a.instance,u=o.getAttribute("data-precedence"),c=n.get(u)||i,c===i&&n.set(null,o),n.set(u,o),this.count++,i=lo.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Gi={$$typeof:O,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function rb(e,a,n,i,o,c,u,g,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ti(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ti(0),this.hiddenUpdates=ti(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function cf(e,a,n,i,o,c,u,g,z,V,I,ae){return e=new rb(e,a,n,u,z,V,I,ae,g),a=1,c===!0&&(a|=24),c=pa(3,null,null,a),e.current=c,c.stateNode=e,a=mr(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:a},gr(c),e}function df(e){return e?(e=Sl,e):Sl}function uf(e,a,n,i,o,c){o=df(o),i.context===null?i.context=o:i.pendingContext=o,i=bn(a),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yn(e,i,a),n!==null&&(ca(n,e,a),yi(n,e,a))}function pf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Uc(e,a){pf(e,a),(e=e.alternate)&&pf(e,a)}function mf(e){if(e.tag===13||e.tag===31){var a=Kn(e,67108864);a!==null&&ca(a,e,67108864),Uc(e,67108864)}}function ff(e){if(e.tag===13||e.tag===31){var a=ga();a=Le(a);var n=Kn(e,a);n!==null&&ca(n,e,a),Uc(e,a)}}var oo=!0;function cb(e,a,n,i){var o=D.T;D.T=null;var c=Q.p;try{Q.p=2,Rc(e,a,n,i)}finally{Q.p=c,D.T=o}}function db(e,a,n,i){var o=D.T;D.T=null;var c=Q.p;try{Q.p=8,Rc(e,a,n,i)}finally{Q.p=c,D.T=o}}function Rc(e,a,n,i){if(oo){var o=Hc(i);if(o===null)wc(e,a,i,ro,n),xf(e,i);else if(pb(o,e,a,n,i))i.stopPropagation();else if(xf(e,i),a&4&&-1<ub.indexOf(e)){for(;o!==null;){var c=fl(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=He(c.pendingLanes);if(u!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var z=1<<31-L(u);g.entanglements[1]|=z,u&=~z}Ba(c),(Je&6)===0&&($s=ce()+500,Ui(0))}}break;case 31:case 13:g=Kn(c,2),g!==null&&ca(g,c,2),Xs(),Uc(c,2)}if(c=Hc(i),c===null&&wc(e,a,i,ro,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else wc(e,a,i,null,n)}}function Hc(e){return e=qo(e),Lc(e)}var ro=null;function Lc(e){if(ro=null,e=ml(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=m(a),e!==null)return e;e=null}else if(n===31){if(e=j(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return ro=e,null}function hf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ee()){case ve:return 2;case Ce:return 8;case Ee:case We:return 32;case cn:return 268435456;default:return 32}default:return 32}}var qc=!1,En=null,Mn=null,Dn=null,Yi=new Map,Vi=new Map,On=[],ub="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function xf(e,a){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Yi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Vi.delete(a.pointerId)}}function $i(e,a,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},a!==null&&(a=fl(a),a!==null&&mf(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function pb(e,a,n,i,o){switch(a){case"focusin":return En=$i(En,e,a,n,i,o),!0;case"dragenter":return Mn=$i(Mn,e,a,n,i,o),!0;case"mouseover":return Dn=$i(Dn,e,a,n,i,o),!0;case"pointerover":var c=o.pointerId;return Yi.set(c,$i(Yi.get(c)||null,e,a,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,Vi.set(c,$i(Vi.get(c)||null,e,a,n,i,o)),!0}return!1}function gf(e){var a=ml(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=m(n),a!==null){e.blockedOn=a,Ed(e.priority,function(){ff(n)});return}}else if(a===31){if(a=j(n),a!==null){e.blockedOn=a,Ed(e.priority,function(){ff(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function co(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Lo=i,n.target.dispatchEvent(i),Lo=null}else return a=fl(n),a!==null&&mf(a),e.blockedOn=n,!1;a.shift()}return!0}function bf(e,a,n){co(e)&&n.delete(a)}function mb(){qc=!1,En!==null&&co(En)&&(En=null),Mn!==null&&co(Mn)&&(Mn=null),Dn!==null&&co(Dn)&&(Dn=null),Yi.forEach(bf),Vi.forEach(bf)}function uo(e,a){e.blockedOn===a&&(e.blockedOn=null,qc||(qc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,mb)))}var po=null;function yf(e){po!==e&&(po=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){po===e&&(po=null);for(var a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],o=e[a+2];if(typeof i!="function"){if(Lc(i||n)===null)continue;break}var c=fl(n);c!==null&&(e.splice(a,3),a-=3,Hr(c,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Jl(e){function a(z){return uo(z,e)}En!==null&&uo(En,e),Mn!==null&&uo(Mn,e),Dn!==null&&uo(Dn,e),Yi.forEach(a),Vi.forEach(a);for(var n=0;n<On.length;n++){var i=On[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<On.length&&(n=On[0],n.blockedOn===null);)gf(n),n.blockedOn===null&&On.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],u=o[na]||null;if(typeof c=="function")u||yf(n);else if(u){var g=null;if(c&&c.hasAttribute("formAction")){if(o=c,u=c[na]||null)g=u.formAction;else if(Lc(o)!==null)continue}else g=u.action;typeof g=="function"?n[i+1]=g:(n.splice(i,3),i-=3),yf(n)}}}function vf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return o=u})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Bc(e){this._internalRoot=e}mo.prototype.render=Bc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,i=ga();uf(n,i,e,a,null,null)},mo.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;uf(e.current,2,null,e,null,null),Xs(),a[pl]=null}};function mo(e){this._internalRoot=e}mo.prototype.unstable_scheduleHydration=function(e){if(e){var a=Td();e={blockedOn:null,target:e,priority:a};for(var n=0;n<On.length&&a!==0&&a<On[n].priority;n++);On.splice(n,0,e),n===0&&gf(e)}};var jf=l.version;if(jf!=="19.2.6")throw Error(d(527,jf,"19.2.6"));Q.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(a),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var fb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fo.isDisabled&&fo.supportsFiber)try{Ma=fo.inject(fb),ft=fo}catch{}}return Xi.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,i="",o=Cp,c=zp,u=Tp;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=cf(e,1,!1,null,null,n,i,null,o,c,u,vf),e[pl]=a.current,jc(e),new Bc(a)},Xi.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var i=!1,o="",c=Cp,u=zp,g=Tp,z=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError),n.formState!==void 0&&(z=n.formState)),a=cf(e,1,!0,a,n??null,i,o,z,c,u,g,vf),a.context=df(null),n=a.current,i=ga(),i=Le(i),o=bn(i),o.callback=null,yn(n,o,i),n=i,a.current.lanes=n,Vn(a,n),Ba(a),e[pl]=a.current,jc(e),new mo(a)},Xi.version="19.2.6",Xi}var Mf;function Cb(){if(Mf)return Vc.exports;Mf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Vc.exports=kb(),Vc.exports}var zb=Cb();Th();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},Fi.apply(this,arguments)}var Hn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Hn||(Hn={}));const Df="popstate";function Tb(s){s===void 0&&(s={});function l(p,h){let{pathname:m="/",search:j="",hash:v=""}=dl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),dd("",{pathname:m,search:j,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function r(p,h){let m=p.document.querySelector("base"),j="";if(m&&m.getAttribute("href")){let v=p.location.href,y=v.indexOf("#");j=y===-1?v:v.slice(0,y)}return j+"#"+(typeof h=="string"?h:_o(h))}function d(p,h){zo(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return Mb(l,r,d,s)}function jt(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function zo(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Eb(){return Math.random().toString(36).substr(2,8)}function Of(s,l){return{usr:s.state,key:s.key,idx:l}}function dd(s,l,r,d){return r===void 0&&(r=null),Fi({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?dl(l):l,{state:r,key:l&&l.key||d||Eb()})}function _o(s){let{pathname:l="/",search:r="",hash:d=""}=s;return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function dl(s){let l={};if(s){let r=s.indexOf("#");r>=0&&(l.hash=s.substr(r),s=s.substr(0,r));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function Mb(s,l,r,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,j=Hn.Pop,v=null,y=b();y==null&&(y=0,m.replaceState(Fi({},m.state,{idx:y}),""));function b(){return(m.state||{idx:null}).idx}function x(){j=Hn.Pop;let S=b(),B=S==null?null:S-y;y=S,v&&v({action:j,location:J.location,delta:B})}function U(S,B){j=Hn.Push;let G=dd(J.location,S,B);r&&r(G,S),y=b()+1;let O=Of(G,y),X=J.createHref(G);try{m.pushState(O,"",X)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(X)}h&&v&&v({action:j,location:J.location,delta:1})}function P(S,B){j=Hn.Replace;let G=dd(J.location,S,B);r&&r(G,S),y=b();let O=Of(G,y),X=J.createHref(G);m.replaceState(O,"",X),h&&v&&v({action:j,location:J.location,delta:0})}function W(S){let B=p.location.origin!=="null"?p.location.origin:p.location.href,G=typeof S=="string"?S:_o(S);return G=G.replace(/ $/,"%20"),jt(B,"No window.location.(origin|href) available to create URL for href: "+G),new URL(G,B)}let J={get action(){return j},get location(){return s(p,m)},listen(S){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Df,x),v=S,()=>{p.removeEventListener(Df,x),v=null}},createHref(S){return l(p,S)},createURL:W,encodeLocation(S){let B=W(S);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:U,replace:P,go(S){return m.go(S)}};return J}var Af;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Af||(Af={}));function Db(s,l,r){return r===void 0&&(r="/"),Ob(s,l,r)}function Ob(s,l,r,d){let p=typeof l=="string"?dl(l):l,h=jd(p.pathname||"/",r);if(h==null)return null;let m=Eh(s);Ab(m);let j=null;for(let v=0;j==null&&v<m.length;++v){let y=Xb(h);j=Vb(m[v],y)}return j}function Eh(s,l,r,d){l===void 0&&(l=[]),r===void 0&&(r=[]),d===void 0&&(d="");let p=(h,m,j)=>{let v={relativePath:j===void 0?h.path||"":j,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};v.relativePath.startsWith("/")&&(jt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let y=Ln([d,v.relativePath]),b=r.concat(v);h.children&&h.children.length>0&&(jt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Eh(h.children,l,b,y)),!(h.path==null&&!h.index)&&l.push({path:y,score:Gb(y,h.index),routesMeta:b})};return s.forEach((h,m)=>{var j;if(h.path===""||!((j=h.path)!=null&&j.includes("?")))p(h,m);else for(let v of Mh(h.path))p(h,m,v)}),l}function Mh(s){let l=s.split("/");if(l.length===0)return[];let[r,...d]=l,p=r.endsWith("?"),h=r.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=Mh(d.join("/")),j=[];return j.push(...m.map(v=>v===""?h:[h,v].join("/"))),p&&j.push(...m),j.map(v=>s.startsWith("/")&&v===""?"/":v)}function Ab(s){s.sort((l,r)=>l.score!==r.score?r.score-l.score:Yb(l.routesMeta.map(d=>d.childrenIndex),r.routesMeta.map(d=>d.childrenIndex)))}const Ub=/^:[\w-]+$/,Rb=3,Hb=2,Lb=1,qb=10,Bb=-2,Uf=s=>s==="*";function Gb(s,l){let r=s.split("/"),d=r.length;return r.some(Uf)&&(d+=Bb),l&&(d+=Hb),r.filter(p=>!Uf(p)).reduce((p,h)=>p+(Ub.test(h)?Rb:h===""?Lb:qb),d)}function Yb(s,l){return s.length===l.length&&s.slice(0,-1).every((d,p)=>d===l[p])?s[s.length-1]-l[l.length-1]:0}function Vb(s,l,r){let{routesMeta:d}=s,p={},h="/",m=[];for(let j=0;j<d.length;++j){let v=d[j],y=j===d.length-1,b=h==="/"?l:l.slice(h.length)||"/",x=$b({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},b),U=v.route;if(!x)return null;Object.assign(p,x.params),m.push({params:p,pathname:Ln([h,x.pathname]),pathnameBase:Wb(Ln([h,x.pathnameBase])),route:U}),x.pathnameBase!=="/"&&(h=Ln([h,x.pathnameBase]))}return m}function $b(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,d]=Qb(s.path,s.caseSensitive,s.end),p=l.match(r);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),j=p.slice(1);return{params:d.reduce((y,b,x)=>{let{paramName:U,isOptional:P}=b;if(U==="*"){let J=j[x]||"";m=h.slice(0,h.length-J.length).replace(/(.)\/+$/,"$1")}const W=j[x];return P&&!W?y[U]=void 0:y[U]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:m,pattern:s}}function Qb(s,l,r){l===void 0&&(l=!1),r===void 0&&(r=!0),zo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,j,v)=>(d.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),d]}function Xb(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return zo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function jd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,d=s.charAt(r);return d&&d!=="/"?null:s.slice(r)||"/"}const Zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kb=s=>Zb.test(s);function Jb(s,l){l===void 0&&(l="/");let{pathname:r,search:d="",hash:p=""}=typeof s=="string"?dl(s):s,h;if(r)if(Kb(r))h=r;else{if(r.includes("//")){let m=r;r=r.replace(/\/\/+/g,"/"),zo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+r))}r.startsWith("/")?h=Rf(r.substring(1),"/"):h=Rf(r,l)}else h=l;return{pathname:h,search:Pb(d),hash:Ib(p)}}function Rf(s,l){let r=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?r.length>1&&r.pop():p!=="."&&r.push(p)}),r.length>1?r.join("/"):"/"}function Zc(s,l,r,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Fb(s){return s.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function wd(s,l){let r=Fb(s);return l?r.map((d,p)=>p===r.length-1?d.pathname:d.pathnameBase):r.map(d=>d.pathnameBase)}function Nd(s,l,r,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=dl(s):(p=Fi({},s),jt(!p.pathname||!p.pathname.includes("?"),Zc("?","pathname","search",p)),jt(!p.pathname||!p.pathname.includes("#"),Zc("#","pathname","hash",p)),jt(!p.search||!p.search.includes("#"),Zc("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,j;if(m==null)j=r;else{let x=l.length-1;if(!d&&m.startsWith("..")){let U=m.split("/");for(;U[0]==="..";)U.shift(),x-=1;p.pathname=U.join("/")}j=x>=0?l[x]:"/"}let v=Jb(p,j),y=m&&m!=="/"&&m.endsWith("/"),b=(h||m===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(y||b)&&(v.pathname+="/"),v}const Ln=s=>s.join("/").replace(/\/\/+/g,"/"),Wb=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Pb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ib=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function ey(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Dh=["post","put","patch","delete"];new Set(Dh);const ty=["get",...Dh];new Set(ty);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Wi(){return Wi=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},Wi.apply(this,arguments)}const _d=f.createContext(null),ay=f.createContext(null),qn=f.createContext(null),To=f.createContext(null),Bn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Oh=f.createContext(null);function ny(s,l){let{relative:r}=l===void 0?{}:l;ei()||jt(!1);let{basename:d,navigator:p}=f.useContext(qn),{hash:h,pathname:m,search:j}=Uh(s,{relative:r}),v=m;return d!=="/"&&(v=m==="/"?d:Ln([d,m])),p.createHref({pathname:v,search:j,hash:h})}function ei(){return f.useContext(To)!=null}function Gn(){return ei()||jt(!1),f.useContext(To).location}function Ah(s){f.useContext(qn).static||f.useLayoutEffect(s)}function Sd(){let{isDataRoute:s}=f.useContext(Bn);return s?xy():ly()}function ly(){ei()||jt(!1);let s=f.useContext(_d),{basename:l,future:r,navigator:d}=f.useContext(qn),{matches:p}=f.useContext(Bn),{pathname:h}=Gn(),m=JSON.stringify(wd(p,r.v7_relativeSplatPath)),j=f.useRef(!1);return Ah(()=>{j.current=!0}),f.useCallback(function(y,b){if(b===void 0&&(b={}),!j.current)return;if(typeof y=="number"){d.go(y);return}let x=Nd(y,JSON.parse(m),h,b.relative==="path");s==null&&l!=="/"&&(x.pathname=x.pathname==="/"?l:Ln([l,x.pathname])),(b.replace?d.replace:d.push)(x,b.state,b)},[l,d,m,h,s])}function Uh(s,l){let{relative:r}=l===void 0?{}:l,{future:d}=f.useContext(qn),{matches:p}=f.useContext(Bn),{pathname:h}=Gn(),m=JSON.stringify(wd(p,d.v7_relativeSplatPath));return f.useMemo(()=>Nd(s,JSON.parse(m),h,r==="path"),[s,m,h,r])}function iy(s,l){return sy(s,l)}function sy(s,l,r,d){ei()||jt(!1);let{navigator:p}=f.useContext(qn),{matches:h}=f.useContext(Bn),m=h[h.length-1],j=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let y=Gn(),b;if(l){var x;let S=typeof l=="string"?dl(l):l;v==="/"||(x=S.pathname)!=null&&x.startsWith(v)||jt(!1),b=S}else b=y;let U=b.pathname||"/",P=U;if(v!=="/"){let S=v.replace(/^\//,"").split("/");P="/"+U.replace(/^\//,"").split("/").slice(S.length).join("/")}let W=Db(s,{pathname:P}),J=uy(W&&W.map(S=>Object.assign({},S,{params:Object.assign({},j,S.params),pathname:Ln([v,p.encodeLocation?p.encodeLocation(S.pathname).pathname:S.pathname]),pathnameBase:S.pathnameBase==="/"?v:Ln([v,p.encodeLocation?p.encodeLocation(S.pathnameBase).pathname:S.pathnameBase])})),h,r,d);return l&&J?f.createElement(To.Provider,{value:{location:Wi({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Hn.Pop}},J):J}function oy(){let s=hy(),l=ey(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},l),r?f.createElement("pre",{style:p},r):null,null)}const ry=f.createElement(oy,null);class cy extends f.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?f.createElement(Bn.Provider,{value:this.props.routeContext},f.createElement(Oh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function dy(s){let{routeContext:l,match:r,children:d}=s,p=f.useContext(_d);return p&&p.static&&p.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(Bn.Provider,{value:l},d)}function uy(s,l,r,d){var p;if(l===void 0&&(l=[]),r===void 0&&(r=null),d===void 0&&(d=null),s==null){var h;if(!r)return null;if(r.errors)s=r.matches;else if((h=d)!=null&&h.v7_partialHydration&&l.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let m=s,j=(p=r)==null?void 0:p.errors;if(j!=null){let b=m.findIndex(x=>x.route.id&&(j==null?void 0:j[x.route.id])!==void 0);b>=0||jt(!1),m=m.slice(0,Math.min(m.length,b+1))}let v=!1,y=-1;if(r&&d&&d.v7_partialHydration)for(let b=0;b<m.length;b++){let x=m[b];if((x.route.HydrateFallback||x.route.hydrateFallbackElement)&&(y=b),x.route.id){let{loaderData:U,errors:P}=r,W=x.route.loader&&U[x.route.id]===void 0&&(!P||P[x.route.id]===void 0);if(x.route.lazy||W){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}return m.reduceRight((b,x,U)=>{let P,W=!1,J=null,S=null;r&&(P=j&&x.route.id?j[x.route.id]:void 0,J=x.route.errorElement||ry,v&&(y<0&&U===0?(gy("route-fallback"),W=!0,S=null):y===U&&(W=!0,S=x.route.hydrateFallbackElement||null)));let B=l.concat(m.slice(0,U+1)),G=()=>{let O;return P?O=J:W?O=S:x.route.Component?O=f.createElement(x.route.Component,null):x.route.element?O=x.route.element:O=b,f.createElement(dy,{match:x,routeContext:{outlet:b,matches:B,isDataRoute:r!=null},children:O})};return r&&(x.route.ErrorBoundary||x.route.errorElement||U===0)?f.createElement(cy,{location:r.location,revalidation:r.revalidation,component:J,error:P,children:G(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):G()},null)}var Rh=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Rh||{}),Hh=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Hh||{});function py(s){let l=f.useContext(_d);return l||jt(!1),l}function my(s){let l=f.useContext(ay);return l||jt(!1),l}function fy(s){let l=f.useContext(Bn);return l||jt(!1),l}function Lh(s){let l=fy(),r=l.matches[l.matches.length-1];return r.route.id||jt(!1),r.route.id}function hy(){var s;let l=f.useContext(Oh),r=my(),d=Lh();return l!==void 0?l:(s=r.errors)==null?void 0:s[d]}function xy(){let{router:s}=py(Rh.UseNavigateStable),l=Lh(Hh.UseNavigateStable),r=f.useRef(!1);return Ah(()=>{r.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),r.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,Wi({fromRouteId:l},h)))},[s,l])}const Hf={};function gy(s,l,r){Hf[s]||(Hf[s]=!0)}function by(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Lf(s){let{to:l,replace:r,state:d,relative:p}=s;ei()||jt(!1);let{future:h,static:m}=f.useContext(qn),{matches:j}=f.useContext(Bn),{pathname:v}=Gn(),y=Sd(),b=Nd(l,wd(j,h.v7_relativeSplatPath),v,p==="path"),x=JSON.stringify(b);return f.useEffect(()=>y(JSON.parse(x),{replace:r,state:d,relative:p}),[y,x,p,r,d]),null}function mt(s){jt(!1)}function yy(s){let{basename:l="/",children:r=null,location:d,navigationType:p=Hn.Pop,navigator:h,static:m=!1,future:j}=s;ei()&&jt(!1);let v=l.replace(/^\/*/,"/"),y=f.useMemo(()=>({basename:v,navigator:h,static:m,future:Wi({v7_relativeSplatPath:!1},j)}),[v,j,h,m]);typeof d=="string"&&(d=dl(d));let{pathname:b="/",search:x="",hash:U="",state:P=null,key:W="default"}=d,J=f.useMemo(()=>{let S=jd(b,v);return S==null?null:{location:{pathname:S,search:x,hash:U,state:P,key:W},navigationType:p}},[v,b,x,U,P,W,p]);return J==null?null:f.createElement(qn.Provider,{value:y},f.createElement(To.Provider,{children:r,value:J}))}function vy(s){let{children:l,location:r}=s;return iy(ud(l),r)}new Promise(()=>{});function ud(s,l){l===void 0&&(l=[]);let r=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...l,p];if(d.type===f.Fragment){r.push.apply(r,ud(d.props.children,h));return}d.type!==mt&&jt(!1),!d.props.index||!d.props.children||jt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=ud(d.props.children,h)),r.push(m)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pd(){return pd=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},pd.apply(this,arguments)}function jy(s,l){if(s==null)return{};var r={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(l.indexOf(p)>=0)&&(r[p]=s[p]);return r}function wy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ny(s,l){return s.button===0&&(!l||l==="_self")&&!wy(s)}const _y=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Sy="6";try{window.__reactRouterVersion=Sy}catch{}const ky="startTransition",qf=wb[ky];function Cy(s){let{basename:l,children:r,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=Tb({window:p,v5Compat:!0}));let m=h.current,[j,v]=f.useState({action:m.action,location:m.location}),{v7_startTransition:y}=d||{},b=f.useCallback(x=>{y&&qf?qf(()=>v(x)):v(x)},[v,y]);return f.useLayoutEffect(()=>m.listen(b),[m,b]),f.useEffect(()=>by(d),[d]),f.createElement(yy,{basename:l,children:r,location:j.location,navigationType:j.action,navigator:m,future:d})}const zy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Ty=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ey=f.forwardRef(function(l,r){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:j,target:v,to:y,preventScrollReset:b,viewTransition:x}=l,U=jy(l,_y),{basename:P}=f.useContext(qn),W,J=!1;if(typeof y=="string"&&Ty.test(y)&&(W=y,zy))try{let O=new URL(window.location.href),X=y.startsWith("//")?new URL(O.protocol+y):new URL(y),le=jd(X.pathname,P);X.origin===O.origin&&le!=null?y=le+X.search+X.hash:J=!0}catch{}let S=ny(y,{relative:p}),B=My(y,{replace:m,state:j,target:v,preventScrollReset:b,relative:p,viewTransition:x});function G(O){d&&d(O),O.defaultPrevented||B(O)}return f.createElement("a",pd({},U,{href:W||S,onClick:J||h?d:G,ref:r,target:v}))});var Bf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Bf||(Bf={}));var Gf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Gf||(Gf={}));function My(s,l){let{target:r,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:j}=l===void 0?{}:l,v=Sd(),y=Gn(),b=Uh(s,{relative:m});return f.useCallback(x=>{if(Ny(x,r)){x.preventDefault();let U=d!==void 0?d:_o(y)===_o(b);v(s,{replace:U,state:p,preventScrollReset:h,relative:m,viewTransition:j})}},[y,v,b,d,p,r,s,h,m,j])}function wt(){const s=Sd();return f.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function Dy(){return Gn().pathname}function Oy({href:s,...l}){return t.jsx(Ey,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qh=(...s)=>s.filter((l,r,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Uy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=f.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,...j},v)=>f.createElement("svg",{ref:v,...Uy,width:l,height:l,stroke:s,strokeWidth:d?Number(r)*24/Number(l):r,className:qh("lucide",p),...j},[...m.map(([y,b])=>f.createElement(y,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(s,l)=>{const r=f.forwardRef(({className:d,...p},h)=>f.createElement(Ry,{ref:h,iconNode:l,className:qh(`lucide-${Ay(s)}`,d),...p}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=ye("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=ye("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=ye("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=ye("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=ye("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=ye("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=ye("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=ye("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=ye("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=ye("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=ye("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=ye("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=ye("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=ye("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=ye("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=ye("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=ye("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=ye("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=ye("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=ye("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=ye("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ye("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ye("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=ye("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ye("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ye("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=ye("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ye("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ye("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ye("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=ye("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=ye("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ye("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ye("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ye("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ye("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=ye("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=ye("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ye("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ye("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ye("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ye("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ye("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ye("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),jv="/api/v3";var zh;const he=typeof window<"u"&&((zh=window.settings)==null?void 0:zh.secure_path)||"ZicFree123",No="authorization";function wv(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",r=document.cookie.split(";");for(let d=0;d<r.length;d++){let p=r[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(l)===0)try{const h=p.substring(l.length,p.length),m=decodeURIComponent(h),j=JSON.parse(m);return j&&typeof j=="object"&&"value"in j?j.value:m}catch{try{return decodeURIComponent(p.substring(l.length,p.length))}catch{return p.substring(l.length,p.length)}}}return null}function Nv(s,l,r=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:l}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",j=new Date;j.setTime(j.getTime()+r*24*60*60*1e3);const v=`expires=${j.toUTCString()}`,y=m?"":`domain=${window.location.hostname};`;let b=`${s}=${encodeURIComponent(p)}; ${v}; ${y} path=/`;h&&(b+="; secure"),b+="; SameSite=Lax",document.cookie=b;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function _v(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,r=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];r.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Vh(){if(typeof window>"u")return null;let s=window.localStorage.getItem(No);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(No,s)}catch{}if(!s&&(s=wv("auth_data"),s))try{window.localStorage.setItem(No,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Sv(s,l){const r=s.startsWith("/")?s:`/${s}`,d=new URL(`${jv}${r}`,window.location.origin);return Object.entries(l??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function Tt(){return!!Vh()}function kv(s){typeof window>"u"||(window.localStorage.setItem(No,s),window.localStorage.setItem("auth_data",s),Nv("auth_data",s,36500))}function $h(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const r=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{r.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,_v(p)})}async function me(s,l={}){const r={},d=l.method??"GET";if(d!=="GET"&&(r["content-type"]="application/json"),l.auth!==!1){const v=Vh();v&&(r.authorization=v)}const p=await fetch(Sv(s,l.params),{method:d,headers:r,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),j=m?await p.json():await p.text();if(!p.ok){(p.status===401||p.status===403)&&l.auth!==!1&&($h(),window.location.hash="/login");const v=typeof j=="object"&&j&&"message"in j?String(j.message):`Request failed with status ${p.status}`;throw new Error(v)}if(!m&&typeof j=="string"&&(j.trim().startsWith("<!DOCTYPE html")||j.trim().startsWith("<html")||j.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return j}async function Cv(s,l){return me("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function zv(){const s=`/${he}/stat`,[l,r,d,p,h,m]=await Promise.all([me(`${s}/getOverride`),me(`${s}/getOrder`),me(`${s}/getServerTodayRank`),me(`${s}/getServerLastRank`),me(`${s}/getUserTodayRank`),me(`${s}/getUserLastRank`)]);return{override:l.data,order:r.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function Tv(){return(await me(`/${he}/config/fetch`)).data}async function Qh(s){return me(`/${he}/config/save`,{method:"POST",body:s})}async function Ev(){return(await me(`/${he}/config/getEmailTemplate`)).data}async function Mv(){return(await me(`/${he}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function Dv(){return me(`/${he}/config/testSendMail`,{method:"POST",body:{}})}async function Ov(s){return me(`/${he}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function Av(){return(await me(`/${he}/payment/fetch`)).data}async function Uv(){return(await me(`/${he}/payment/getPaymentMethods`)).data}async function Ff(s,l){return(await me(`/${he}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function Rv(s){return me(`/${he}/payment/save`,{method:"POST",body:s})}async function Hv(s){return me(`/${he}/payment/show`,{method:"POST",body:{id:s}})}async function Lv(s){return me(`/${he}/payment/drop`,{method:"POST",body:{id:s}})}async function qv(s){return me(`/${he}/payment/sort`,{method:"POST",body:{ids:s}})}async function Bv(){return(await me(`/${he}/theme/getThemes`)).data}async function Gv(s){return(await me(`/${he}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function Yv(s,l){const r=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return me(`/${he}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:r}})}async function es(){return(await me(`/${he}/server/group/fetch`)).data}async function Xh(s){return me(`/${he}/server/group/save`,{method:"POST",body:s})}async function Vv(s){return me(`/${he}/server/group/drop`,{method:"POST",body:{id:s}})}const Zh=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Kh(){return(await me(`/${he}/server/route/fetch`)).data}async function $v(s){return me(`/${he}/server/route/save`,{method:"POST",body:s})}async function Qv(s){return me(`/${he}/server/route/drop`,{method:"POST",body:{id:s}})}async function ul(){return(await me(`/${he}/plan/fetch`)).data}async function Xv(s){return me(`/${he}/plan/save`,{method:"POST",body:s})}async function Zv(s){return me(`/${he}/plan/drop`,{method:"POST",body:{id:s}})}async function Wf(s,l){return me(`/${he}/plan/update`,{method:"POST",body:{id:s,...l}})}async function Pf(s){return me(`/${he}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function Kv(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{l.set(`filter[${p}][key]`,d.key),l.set(`filter[${p}][condition]`,d.condition),l.set(`filter[${p}][value]`,d.value)}),await me(`/${he}/order/fetch?${l.toString()}`)}async function Jv(s){return me(`/${he}/order/paid`,{method:"POST",body:{trade_no:s}})}async function Fv(s){return me(`/${he}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function Jh(s){return me(`/${he}/order/assign`,{method:"POST",body:s})}async function Wv(s,l){return me(`/${he}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function Pv(s){return me(`/${he}/order/detail`,{method:"POST",body:{id:s}})}async function Iv(s=1,l=15){return me(`/${he}/coupon/fetch?current=${s}&pageSize=${l}`)}async function e1(s){return me(`/${he}/coupon/generate`,{method:"POST",body:s})}async function t1(s){return me(`/${he}/coupon/drop`,{method:"POST",body:{id:s}})}async function a1(s){return me(`/${he}/coupon/show`,{method:"POST",body:{id:s}})}async function n1(s=1,l=15){return me(`/${he}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function l1(s){return me(`/${he}/giftcard/generate`,{method:"POST",body:s})}async function i1(s){return me(`/${he}/giftcard/drop`,{method:"POST",body:{id:s}})}async function gd(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r&&r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),me(`/${he}/user/fetch?${d.toString()}`)}async function s1(s){return me(`/${he}/user/update`,{method:"POST",body:s})}async function Fh(s){return me(`/${he}/user/getUserInfoById`,{params:{id:s}})}async function o1(s){return me(`/${he}/user/delUser`,{method:"POST",body:{id:s}})}async function r1(s){return me(`/${he}/user/generate`,{method:"POST",body:s})}async function c1(s){return me(`/${he}/user/resetSecret`,{method:"POST",body:{id:s}})}async function d1(s=1,l=15,r,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(l)),d&&p.set("include_subscribe_url","1"),r==null||r.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),me(`/${he}/subscription/fetch?${p.toString()}`)}async function u1(s){return me(`/${he}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function p1(s){return me(`/${he}/subscription/update`,{method:"POST",body:s})}async function m1(s){return me(`/${he}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Wh(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r==null||r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),me(`/${he}/device/fetch?${d.toString()}`)}async function Ph(s){return me(`/${he}/device/drop`,{method:"POST",body:{id:s}})}async function Ih(s){return me(`/${he}/device/ban`,{method:"POST",body:{id:s}})}async function f1(s){return me(`/${he}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function h1(s,l=1,r=10){return me(`/${he}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:r}})}async function x1(){return(await me(`/${he}/notice/fetch`)).data}async function g1(s){return me(`/${he}/notice/save`,{method:"POST",body:s})}async function b1(s){return me(`/${he}/notice/drop`,{method:"POST",body:{id:s}})}async function y1(s){return me(`/${he}/notice/show`,{method:"POST",body:{id:s}})}async function v1(){return(await me(`/${he}/ticket/fetch`)).data}async function If(s){return(await me(`/${he}/ticket/fetch`,{params:{id:s}})).data}async function j1(s,l){return me(`/${he}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function w1(s){return me(`/${he}/ticket/close`,{method:"POST",body:{id:s}})}async function N1(){return(await me(`/${he}/knowledge/fetch`)).data}async function _1(s){return(await me(`/${he}/knowledge/fetch`,{params:{id:s}})).data}async function S1(s){return me(`/${he}/knowledge/save`,{method:"POST",body:s})}async function k1(s){return me(`/${he}/knowledge/drop`,{method:"POST",body:{id:s}})}async function C1(s){return me(`/${he}/knowledge/show`,{method:"POST",body:{id:s}})}async function z1(){return(await me(`/${he}/webcon/fetch`)).data}async function T1(s){return me(`/${he}/webcon/save`,{method:"POST",body:s})}async function E1(s){return me(`/${he}/webcon/drop`,{method:"POST",body:{id:s}})}async function M1(s){return me(`/${he}/webcon/show`,{method:"POST",body:{id:s}})}async function D1(){return me(`/${he}/system/getSystemStatus`)}async function O1(){return me(`/${he}/system/getQueueStats`)}async function A1(){return me(`/${he}/system/getQueueWorkload`)}async function U1(){return me(`/${he}/system/getSystemLog`)}async function eh(){return me(`/${he}/server/manage/getNodes`)}async function R1(s,l){return me(`/${he}/server/${s}/save`,{method:"POST",body:l})}async function H1(s,l){return me(`/${he}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function L1(s,l,r){return me(`/${he}/server/${s}/update`,{method:"POST",body:{id:l,show:r}})}async function q1(s,l){return me(`/${he}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function B1(s){return me(`/${he}/server/manage/sort`,{method:"POST",body:s})}const Cd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],ex="admin-locale",bd="vi-VN",G1="/assets/adminzic",tx=f.createContext(null);function Y1(){if(typeof window>"u")return bd;const s=localStorage.getItem(ex);return s&&Cd.some(l=>l.code===s)?s:bd}function V1(s,l){return l?Object.entries(l).reduce((r,[d,p])=>r.replaceAll(`{${d}}`,String(p)),s):s}function $1(s){return new Promise((l,r)=>{var m;if(typeof window>"u"){l({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){l(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var j;l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})}),p.addEventListener("error",r);return}const h=document.createElement("script");h.src=`${G1}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var j;return l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})},h.onerror=r,document.head.appendChild(h)})}function Q1({children:s}){const[l,r]=f.useState(bd),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{r(Y1())},[]);const j=f.useCallback(b=>{r(b),typeof window<"u"&&localStorage.setItem(ex,b)},[]);f.useEffect(()=>{let b=!0;return m(!0),$1(l).then(x=>{b&&p(x)}).finally(()=>{b&&m(!1)}),()=>{b=!1}},[l]);const v=f.useCallback((b,x)=>V1(d[b]??b,x),[d]),y=f.useMemo(()=>({locale:l,loading:h,setLocale:j,t:v}),[l,h,j,v]);return t.jsx(tx.Provider,{value:y,children:s})}function Re(){const s=f.useContext(tx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function X1(){const s=wt(),{t:l,locale:r,setLocale:d}=Re(),[p,h]=f.useState(""),[m,j]=f.useState(""),[v,y]=f.useState(""),[b,x]=f.useState(!1),[U,P]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function S(B){W.current&&!W.current.contains(B.target)&&P(!1)}return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]),f.useEffect(()=>{Tt()&&s.replace("/dashboard")},[s]);async function J(S){var B,G,O,X;S.preventDefault(),y(""),x(!0);try{const le=await Cv(p,m),ue=((B=le.data)==null?void 0:B.auth_data)??((G=le.data)==null?void 0:G.token),H=((O=le.data)==null?void 0:O.is_admin)===1||((X=le.data)==null?void 0:X.is_admin)===!0;if(!ue||!H)throw new Error(l("login.adminRequired"));kv(ue),s.replace("/dashboard")}catch(le){y(le instanceof Error?le.message:l("login.failed"))}finally{x(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>P(S=>!S),children:t.jsx(ts,{size:17})}),U?t.jsx("div",{className:"locale-menu",children:Cd.map(S=>t.jsxs("button",{className:`locale-option ${r===S.code?"active":""}`,type:"button",onClick:()=>{d(S.code),P(!1)},children:[t.jsx("span",{className:"locale-flag",children:S.flag}),t.jsx("span",{children:S.label})]},S.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(rv,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:J,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Gh,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:S=>h(S.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Iy,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:S=>j(S.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:b,type:"submit",children:l(b?"login.signingIn":"login.submit")})]})]})]})}function Dt(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function Ji(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function Z1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const K1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Xy}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:uv},{href:"/config/payment",label:"nav.paymentConfig",icon:$y},{href:"/config/theme",label:"nav.themeConfig",icon:hv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:kd},{href:"/server/group",label:"nav.groupManagement",icon:yv},{href:"/server/route",label:"nav.routeManagement",icon:dv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:Zf},{href:"/order",label:"nav.orders",icon:Py},{href:"/coupon",label:"nav.coupons",icon:Zy},{href:"/giftcard",label:"nav.giftcards",icon:mv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:xd},{href:"/subscription",label:"nav.subscriptions",icon:Zf},{href:"/device",label:"nav.devices",icon:pv},{href:"/webcon",label:"nav.webcon",icon:ts},{href:"/notice",label:"nav.notices",icon:Zi},{href:"/ticket",label:"nav.tickets",icon:Wy},{href:"/knowledge",label:"nav.knowledge",icon:qy}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:By}]}];function J1(){const[s,l]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";l(h),document.documentElement.setAttribute("data-theme",h)},[]);const r=f.useCallback(p=>{l(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{r(s==="light"?"dark":"light")},[s,r]);return{theme:s,toggle:d}}function At({children:s,title:l,subtitle:r}){const[d,p]=f.useState(!1),h=wt(),m=Dy(),{t:j,locale:v,setLocale:y}=Re(),{theme:b,toggle:x}=J1(),[U,P]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function S(B){W.current&&!W.current.contains(B.target)&&P(!1)}return document.addEventListener("mousedown",S),()=>document.removeEventListener("mousedown",S)},[]);function J(){$h(),h.replace("/login")}return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:j("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:K1.map(S=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:j(S.label)}),S.items.map(B=>{const G=B.icon,O=m===B.href;return t.jsxs(Oy,{className:`nav-item ${O?"active":""}`,href:B.href,onClick:()=>p(!1),children:[t.jsx(G,{size:17}),t.jsx("span",{children:j(B.label)})]},B.href)})]},S.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":j(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(S=>!S),children:d?t.jsx(lt,{size:19}):t.jsx(tv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),r?t.jsx("p",{children:r}):null]}),t.jsxs("div",{className:"topbar-actions",children:[t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":j("common.language"),onClick:()=>P(S=>!S),children:t.jsx(ts,{size:17})}),U?t.jsx("div",{className:"locale-menu",children:Cd.map(S=>t.jsxs("button",{className:`locale-option ${v===S.code?"active":""}`,type:"button",onClick:()=>{y(S.code),P(!1)},children:[t.jsx("span",{className:"locale-flag",children:S.flag}),t.jsx("span",{children:S.label})]},S.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":b==="dark"?"Switch to light mode":"Switch to dark mode",onClick:x,children:b==="dark"?t.jsx(fv,{size:17}):t.jsx(av,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:J,children:[t.jsx(ev,{size:16}),t.jsx("span",{children:j("common.logout")})]})]})]}),t.jsx("main",{className:"content",children:s})]})]})}function xo({label:s,value:l,helper:r,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Ly,{size:19})}),r?t.jsx("small",{children:r}):null]})}function dt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(zt,{size:18}),t.jsx("span",{children:s})]})}function F1(s){const l=new Map;return s.forEach((r,d)=>{const p=l.get(r.date)??{date:r.date,commissionCount:0,commissionAmount:0,paidCount:0,paidAmount:0,registrations:0},h=d%5;h===0&&(p.commissionCount=r.value),h===1&&(p.commissionAmount=r.value),h===2&&(p.paidCount=r.value),h===3&&(p.paidAmount=r.value),h===4&&(p.registrations=r.value),l.set(r.date,p)}),Array.from(l.values()).slice(-18)}function W1({records:s}){const{t:l}=Re(),[r,d]=f.useState(null),[p,h]=f.useState(0),[m,j]=f.useState(0),v=F1(s),y=Math.max(...v.map(S=>S.paidAmount),1),b=720,x=220,U=28,P=v.length>1?(b-U*2)/(v.length-1):0,W=S=>x-U-S/y*(x-U*2),J=v.map((S,B)=>`${U+B*P},${W(S.paidAmount)}`).join(" ");return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.revenueTrend")}),t.jsx("p",{children:l("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:l("dashboard.lastDays",{count:v.length})})]}),t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${b} ${x}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"revenueFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"#2f8f83",stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:"#2f8f83",stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(S=>t.jsx("line",{className:"chart-grid",x1:U,x2:b-U,y1:U+S*(x-U*2),y2:U+S*(x-U*2)},S)),v.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",points:`${U},${x-U} ${J} ${b-U},${x-U}`}),t.jsx("polyline",{className:"chart-line",points:J}),v.map((S,B)=>{const G=U+B*P,O=W(S.paidAmount);return t.jsxs("g",{children:[t.jsx("circle",{cx:G,cy:O,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{d(S),h(G),j(O)},onMouseLeave:()=>{d(null)}}),t.jsx("circle",{cx:G,cy:O,r:(r==null?void 0:r.date)===S.date?6:4,fill:(r==null?void 0:r.date)===S.date?"var(--accent-strong)":"var(--accent)",stroke:"var(--surface)",strokeWidth:(r==null?void 0:r.date)===S.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},S.date)})]}):null]}),r?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${p/b*100}%`,top:`${m/x*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[l("dashboard.date"),": ",r.date]}),t.jsxs("div",{className:"tooltip-value",children:[l("dashboard.revenue"),": ",Dt(r.paidAmount)," VND"]})]}):null]}),t.jsx("div",{className:"chart-axis",children:v.filter((S,B)=>B%Math.max(Math.ceil(v.length/6),1)===0).map(S=>t.jsx("span",{children:S.date},S.date))}),t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:l("dashboard.peakRevenue")}),t.jsxs("strong",{children:[Dt(y)," VND"]})]})]})}function go({title:s,subtitle:l,records:r,labelKey:d}){const{t:p}=Re(),h=Math.max(...r.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:r.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):r.slice(0,8).map((m,j)=>{const v=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),y=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:j+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[Z1(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(y,3)}%`}})})]},`${v}-${j}`)})})]})}function Jc({label:s,current:l,previous:r}){const{t:d}=Re();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?Ji(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof r=="number"?Ji(r):r]})]})}function P1(){var y,b,x,U,P,W,J,S,B,G,O;const s=wt(),{t:l}=Re(),[r,d]=f.useState(null),[p,h]=f.useState(""),[m,j]=f.useState(!0),v=f.useCallback(async()=>{j(!0),h("");try{d(await zv())}catch(X){h(X instanceof Error?X.message:l("dashboard.loadFailed"))}finally{j(!1)}},[l]);return f.useEffect(()=>{if(!Tt()){s.replace("/login");return}v()},[v,s]),t.jsxs(At,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(zt,{size:16}),l("common.retry")]})]}):null,m&&!r?t.jsx(dt,{label:l("dashboard.loading")}):null,r?t.jsxs(t.Fragment,{children:[((y=r.override)==null?void 0:y.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(b=r.override)==null?void 0:b.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(xo,{label:l("dashboard.onlineUsers"),value:Ji(((x=r.override)==null?void 0:x.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(xo,{label:l("dashboard.todayIncome"),value:`${Dt(((U=r.override)==null?void 0:U.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(xo,{label:l("dashboard.todayRegistrations"),value:Ji(((P=r.override)==null?void 0:P.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(xo,{label:l("dashboard.pendingCommission"),value:Ji(((W=r.override)==null?void 0:W.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(Jc,{label:l("dashboard.monthIncome"),current:`${Dt(((J=r.override)==null?void 0:J.month_income)??0)} VND`,previous:`${Dt(((S=r.override)==null?void 0:S.last_month_income)??0)} VND`}),t.jsx(Jc,{label:l("dashboard.monthCommission"),current:`${Dt(((B=r.override)==null?void 0:B.commission_month_payout)??0)} VND`,previous:`${Dt(((G=r.override)==null?void 0:G.commission_last_month_payout)??0)} VND`}),t.jsx(Jc,{label:l("dashboard.monthRegistrations"),current:((O=r.override)==null?void 0:O.month_register_total)??0,previous:"-"})]}),t.jsx(W1,{records:r.order}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(go,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:r.serverToday,labelKey:"server_name"}),t.jsx(go,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.serverYesterday,labelKey:"server_name"}),t.jsx(go,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:r.userToday,labelKey:"email"}),t.jsx(go,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.userYesterday,labelKey:"email"})]})]}):null]})}const I1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function th(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function e0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function Fc(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function t0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function a0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function da(s){return s===!0||s===1||s==="1"}function n0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function Wc(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function l0({field:s,value:l,onChange:r}){const{t:d}=Re(),p=s.toInput?s.toInput(l):n0(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${da(l)?"on":""}`,type:"button",onClick:()=>r(da(l)?0:1),"aria-pressed":da(l),children:[t.jsx("span",{}),da(l)?th(d)[0].label:th(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>r(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function i0({plans:s,emailTemplates:l,t:r}){const d=[{label:r("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:r("config.tabs.site"),hint:r("config.tabs.siteHint"),fields:[{key:"app_name",label:r("config.site.appName"),description:r("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:r("config.site.appDescription"),description:r("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:r("config.site.appUrl"),description:r("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:r("config.site.forceHttps"),description:r("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:r("config.site.logo"),description:r("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:r("config.site.subscribeUrl"),description:r("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:r("config.site.subscribePath"),description:r("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:r("config.site.tosUrl"),description:r("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:r("config.site.stopRegister"),description:r("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:r("config.site.trialPlan"),description:r("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:r("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:r("config.site.currency"),description:r("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:r("config.site.currencySymbol"),description:r("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:r("config.tabs.safe"),hint:r("config.tabs.safeHint"),fields:[{key:"email_verify",label:r("config.safe.emailVerify"),description:r("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:r("config.safe.gmailAlias"),description:r("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:r("config.safe.safeMode"),description:r("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:r("config.safe.securePath"),description:r("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:r("config.safe.staffPath"),description:r("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:r("config.safe.emailWhitelist"),description:r("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:r("config.safe.emailWhitelistSuffix"),description:r("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>da(p.email_whitelist_enable),fromInput:Wc},{key:"recaptcha_enable",label:r("config.safe.recaptcha"),description:r("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:r("config.safe.recaptchaKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"recaptcha_site_key",label:r("config.safe.recaptchaSiteKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:r("config.safe.ipRegisterLimit"),description:r("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:r("config.safe.passwordLimit"),description:r("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.password_limit_enable)},{key:"password_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.password_limit_enable)}]},{key:"subscribe",label:r("config.tabs.subscribe"),hint:r("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:r("config.subscribe.multipleSubscription"),description:r("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:r("config.subscribe.planChange"),description:r("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:r("config.subscribe.deviceHwid"),description:r("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"change_sni_enable",label:r("config.subscribe.changeSni"),description:r("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:r("config.subscribe.giftcardNotice"),description:r("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:r("config.subscribe.resetTraffic"),description:r("config.subscribe.resetTrafficHelp"),type:"select",options:e0(r)},{key:"surplus_enable",label:r("config.subscribe.surplus"),description:r("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:r("config.subscribe.allowNewPeriod"),description:r("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:r("config.subscribe.newOrderEvent"),type:"select",options:Fc(r)},{key:"renew_order_event_id",label:r("config.subscribe.renewOrderEvent"),type:"select",options:Fc(r)},{key:"change_order_event_id",label:r("config.subscribe.changeOrderEvent"),type:"select",options:Fc(r)},{key:"show_info_to_server_enable",label:r("config.subscribe.showInfo"),description:r("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:r("config.subscribe.linkMode"),description:r("config.subscribe.linkModeHelp"),type:"select",options:t0(r)},{key:"show_subscribe_expire",label:r("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:r("config.tabs.deposit"),hint:r("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:r("config.deposit.bonus"),description:r("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:Wc}]},{key:"ticket",label:r("config.tabs.ticket"),hint:r("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:r("config.ticket.status"),description:r("config.ticket.statusHelp"),type:"select",options:a0(r)}]},{key:"invite",label:r("config.tabs.invite"),hint:r("config.tabs.inviteHint"),fields:[{key:"invite_force",label:r("config.invite.force"),description:r("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:r("config.invite.commission"),description:r("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:r("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:r("config.invite.neverExpire"),description:r("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:r("config.invite.firstTime"),description:r("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:r("config.invite.autoCheck"),description:r("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:r("config.invite.withdrawLimit"),description:r("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:r("config.invite.withdrawMethods"),description:r("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:Wc},{key:"withdraw_close_enable",label:r("config.invite.withdrawClose"),description:r("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:r("config.invite.distribution"),description:r("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:r("config.invite.level1"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:r("config.invite.level2"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:r("config.invite.level3"),type:"number",visible:p=>da(p.commission_distribution_enable)}]},{key:"server",label:r("config.tabs.server"),hint:r("config.tabs.serverHint"),fields:[{key:"server_api_url",label:r("config.server.apiUrl"),description:r("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:r("config.server.token"),description:r("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:r("config.server.pullInterval"),description:r("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:r("config.server.pushInterval"),description:r("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:r("config.server.nodeTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:r("config.server.deviceTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:r("config.server.deviceLimitMode"),description:r("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:r("config.tabs.email"),hint:r("config.tabs.emailHint"),warning:r("config.email.warning"),fields:[{key:"email_host",label:r("config.email.host"),type:"text"},{key:"email_port",label:r("config.email.port"),type:"text"},{key:"email_encryption",label:r("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:r("config.email.username"),type:"text"},{key:"email_password",label:r("config.email.password"),type:"text"},{key:"email_from_address",label:r("config.email.fromAddress"),type:"text"},{key:"email_template",label:r("config.email.template"),type:"select",options:l.map(p=>({label:p,value:p}))}]},{key:"telegram",label:r("config.tabs.telegram"),hint:r("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:r("config.telegram.token"),description:r("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:r("config.telegram.enable"),description:r("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:r("config.telegram.group"),description:r("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:r("config.telegram.appleShareApi"),description:r("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:r("config.tabs.app"),hint:r("config.tabs.appHint"),warning:r("config.app.warning"),fields:[{key:"windows_version",label:r("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:r("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:r("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:r("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:r("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:r("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function s0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState("site"),[p,h]=f.useState(null),[m,j]=f.useState([]),[v,y]=f.useState([]),[b,x]=f.useState(!0),[U,P]=f.useState(null),[W,J]=f.useState(""),[S,B]=f.useState(""),G=f.useCallback(async()=>{x(!0),J("");try{const[se,_,A]=await Promise.all([Tv(),Mv(),Ev()]);h(se),j(_),y(A)}catch(se){J(se instanceof Error?se.message:l("config.loadFailed"))}finally{x(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}G()},[G,s]),f.useEffect(()=>{const se=document.querySelector(".config-tabs button.active");se&&se.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]);const O=f.useMemo(()=>i0({plans:m,emailTemplates:v,t:l}),[m,v,l]),X=O.find(se=>se.key===r)??O[0],le=(p==null?void 0:p[X.key])??{};function ue(se,_,A){h(k=>k&&{...k,[se]:{...k[se],[_]:A}})}async function H(){if(p){P(X.key),J(""),B("");try{await Qh(p[X.key]),B(l("config.saveSuccess"))}catch(se){J(se instanceof Error?se.message:l("config.saveFailed"))}finally{P(null)}}}async function oe(){P("mail"),J(""),B("");try{await Dv(),B(l("config.email.testSuccess"))}catch(se){J(se instanceof Error?se.message:l("config.email.testFailed"))}finally{P(null)}}async function re(){const se=String((p==null?void 0:p.telegram.telegram_bot_token)??"");P("webhook"),J(""),B("");try{await Ov(se),B(l("config.telegram.webhookSuccess"))}catch(_){J(_ instanceof Error?_.message:l("config.telegram.webhookFailed"))}finally{P(null)}}return t.jsxs(At,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:b,children:[t.jsx(zt,{size:16}),l(b?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,S?t.jsx("div",{className:"form-success",children:S}):null,b&&!p?t.jsx(dt,{label:l("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:I1.map(se=>{const _=O.find(A=>A.key===se);return _?t.jsxs("button",{className:r===se?"active":"",type:"button",onClick:()=>d(se),children:[t.jsx("span",{children:_.label}),t.jsx("small",{children:_.hint})]},se):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:X.label}),t.jsx("p",{children:X.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:U===X.key,type:"button",onClick:H,children:[t.jsx(ya,{size:16}),U===X.key?l("config.saving"):l("config.saveTab")]})]}),X.warning?t.jsx("div",{className:"config-warning",children:X.warning}):null,t.jsx("div",{className:"config-fields",children:X.fields.map(se=>se.visible&&!se.visible(le)?null:t.jsx(l0,{field:se,value:le[se.key],onChange:_=>ue(X.key,se.key,_)},se.key))}),X.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:U==="mail",onClick:oe,children:[t.jsx(Gh,{size:16}),l(U==="mail"?"config.email.testing":"config.email.test")]})}):null,X.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:U==="webhook",onClick:re,children:[t.jsx(xv,{size:16}),l(U==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(Yh,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function cl(s){var r;if(typeof window>"u"||typeof document>"u")return!1;if((r=navigator.clipboard)!=null&&r.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function Pc(s){return s===!0||s===1||s==="1"}function o0(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function r0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function c0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState({}),[b,x]=f.useState(!0),[U,P]=f.useState(!1),[W,J]=f.useState(!1),[S,B]=f.useState(""),[G,O]=f.useState(""),[X,le]=f.useState({}),ue=f.useCallback(async()=>{x(!0),B("");try{const[T,F]=await Promise.all([Av(),Uv()]);d(T),h(F),le({})}catch(T){B(T instanceof Error?T.message:l("payment.loadFailed"))}finally{x(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ue()},[ue,s]);async function H(T){const F=(T==null?void 0:T.payment)??p[0]??"",D=o0(T,F);if(j(D),y({}),B(""),O(""),!!F){P(!0);try{y(await Ff(F,T==null?void 0:T.id))}catch(Q){B(Q instanceof Error?Q.message:l("payment.formLoadFailed"))}finally{P(!1)}}}async function oe(T){if(m){j({...m,payment:T,config:{}}),P(!0),B("");try{y(await Ff(T,m.id))}catch(F){B(F instanceof Error?F.message:l("payment.formLoadFailed"))}finally{P(!1)}}}async function re(T){var F,D;if(T.preventDefault(),!!m){J(!0),B(""),O("");try{await Rv(r0(m)),j(null),(F=window.showToast)==null||F.call(window,l("payment.saveSuccess"),"success"),await ue()}catch(Q){(D=window.showToast)==null||D.call(window,Q instanceof Error?Q.message:l("payment.saveFailed"),"error")}finally{J(!1)}}}async function se(T){var F;B(""),O("");try{await Hv(T),await ue()}catch(D){(F=window.showToast)==null||F.call(window,D instanceof Error?D.message:l("payment.toggleFailed"),"error")}}async function _(T){var F;(F=window.showConfirm)==null||F.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var D,Q;B(""),O("");try{await Lv(T),(D=window.showToast)==null||D.call(window,l("payment.deleteSuccess"),"success"),await ue()}catch(N){(Q=window.showToast)==null||Q.call(window,N instanceof Error?N.message:l("payment.deleteFailed"),"error")}}})}async function A(T,F){var ne;const D=T+F;if(D<0||D>=r.length)return;const Q=[...r],N=Q[T];Q.splice(T,1),Q.splice(D,0,N),d(Q);try{await qv(Q.map(ie=>ie.id)),await ue()}catch(ie){(ne=window.showToast)==null||ne.call(window,ie instanceof Error?ie.message:l("payment.sortFailed"),"error"),await ue()}}async function k(T){var D;const F=await cl(T);(D=window.showToast)==null||D.call(window,l(F?"payment.copied":"common.copyFailed"),F?"success":"error")}return t.jsxs(At,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ue,disabled:b,children:[t.jsx(zt,{size:16}),t.jsx("span",{children:l(b?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void H(),children:[t.jsx(ba,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,G?t.jsx("div",{className:"form-success",children:G}):null,b&&r.length===0?t.jsx(dt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((T,F)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:T.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void A(F,-1),disabled:F===0,"aria-label":l("payment.moveUp"),children:t.jsx(Vf,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void A(F,1),disabled:F===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Yf,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Pc(T.enable)?"active":""}`,type:"button",onClick:()=>void se(T.id),"aria-label":Pc(T.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:T.name}),T.icon?t.jsx("small",{children:T.icon}):null]}),t.jsx("td",{children:T.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void k(T.notify_url),children:[t.jsx("span",{children:T.notify_url}),t.jsx(So,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void H(T),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(T.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},T.id)),!b&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[r.map((T,F)=>{const D=Pc(T.enable),Q=T.handling_fee_percent!==null&&T.handling_fee_percent!==""?`${T.handling_fee_percent}%`:"",N=T.handling_fee_fixed!==null?`${Dt(T.handling_fee_fixed)} VND`:"",ne=[Q,N].filter(Boolean).join(" + ")||"No fees",ie=X[T.id],C=T.icon&&!ie;return t.jsxs("div",{className:`payment-mobile-card ${D?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",T.id]}),t.jsx("span",{className:"gateway-tag",children:T.payment})]}),t.jsx("button",{className:`admin-switch ${D?"active":""}`,type:"button",onClick:()=>void se(T.id),"aria-label":l(D?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[C?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:T.icon,alt:T.name,onError:()=>{le(Z=>({...Z,[T.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:T.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:T.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ne})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void k(T.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:T.notify_url}),t.jsx(So,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void A(F,-1),disabled:F===0,"aria-label":l("payment.moveUp"),children:t.jsx(Vf,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void A(F,1),disabled:F===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Yf,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void H(T),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void _(T.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},T.id)}),!b&&r.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:re,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:T=>j({...m,name:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:T=>j({...m,icon:T.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:T=>j({...m,notify_domain:T.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:T=>j({...m,handling_fee_percent:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:T=>j({...m,handling_fee_fixed:T.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:T=>void oe(T.target.value),children:p.map(T=>t.jsx("option",{value:T,children:T},T))})]}),U?t.jsx(dt,{label:l("payment.formLoading")}):null,U?null:Object.entries(v).map(([T,F])=>t.jsxs("label",{children:[t.jsx("span",{children:F.label}),t.jsx("input",{className:"config-input",placeholder:F.description,value:String(m.config[T]??F.value??""),onChange:D=>j({...m,config:{...m.config,[T]:D.target.value}})})]},T)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function d0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function u0(s,l){return l[s.field_name]??s.default_value??""}function p0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,x]=f.useState(!1),[U,P]=f.useState(null),[W,J]=f.useState(""),[S,B]=f.useState(""),G=f.useCallback(async()=>{j(!0),J("");try{d(await Bv())}catch(H){J(H instanceof Error?H.message:l("theme.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}G()},[G,s]);async function O(H,oe){h(null),y(!0),J(""),B("");try{const re=await Gv(H);h({key:H,theme:oe,values:re})}catch(re){J(re instanceof Error?re.message:l("theme.configLoadFailed"))}finally{y(!1)}}async function X(H){P(H),J(""),B("");try{await Qh({frontend_theme:H}),B(l("theme.activateSuccess")),await G()}catch(oe){J(oe instanceof Error?oe.message:l("theme.activateFailed"))}finally{P(null)}}async function le(H){if(H.preventDefault(),!!p){x(!0),J(""),B("");try{await Yv(p.key,p.values),h(null),B(l("theme.saveSuccess")),await G()}catch(oe){J(oe instanceof Error?oe.message:l("theme.saveFailed"))}finally{x(!1)}}}function ue(H,oe){h(re=>re&&{...re,values:{...re.values,[H]:oe}})}return t.jsxs(At,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:G,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,S?t.jsx("div",{className:"form-success",children:S}):null,m&&!r?t.jsx(dt,{label:l("theme.loading")}):null,r?t.jsx("section",{className:"theme-grid",children:Object.entries(r.themes).map(([H,oe])=>{const re=r.active===H;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${d0(oe)})`},children:re?t.jsxs("span",{className:"theme-active",children:[t.jsx(Bh,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:oe.name||H}),t.jsx("p",{children:oe.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",oe.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(H,oe),children:[t.jsx(ov,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:re||U===H,type:"button",onClick:()=>void X(H),children:[t.jsx(nv,{size:15}),l(re?"theme.current":U===H?"theme.activating":"theme.activate")]})]})]},H)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(dt,{label:l("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:le,children:[(p.theme.configs??[]).map(H=>{const oe=u0(H,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:H.label}),H.description?t.jsx("p",{className:"field-description",children:H.description}):null,H.field_type==="select"?t.jsx("select",{className:"config-input",value:oe,onChange:re=>ue(H.field_name,re.target.value),children:Object.entries(H.select_options??{}).map(([re,se])=>t.jsx("option",{value:re,children:se},re))}):null,H.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:H.placeholder,rows:5,value:oe,onChange:re=>ue(H.field_name,re.target.value)}):null,H.field_type!=="select"&&H.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:H.placeholder,value:oe,onChange:re=>ue(H.field_name,re.target.value)}):null]},H.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"theme.saving":"common.save")]})]})]})]})}):null]})}const ah=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"v2node",label:"V2Node"}],m0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],f0=["tcp","ws","grpc","http","httpupgrade","xhttp"],h0=["tcp","ws","grpc","http","httpupgrade","xhttp"],x0=["tcp","ws","grpc"],ax=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],g0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"];function b0(s,l,r=""){return s[l]??r}function Ze(s,l,r=""){return String(b0(s,l,r))}function Mo(s,l){const r=s[l];return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}function nh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(r=>r.trim()):[]).map(r=>Number(r)).filter(r=>Number.isFinite(r))}function lh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=nh(d.group_id),d.route_id=nh(d.route_id),{_type:s,...d}}const r={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...r,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...r,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...r,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...r,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...r,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...r,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...r,server_name:"",insecure:0,padding_scheme:""};case"v2node":return{...r,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return r}}function y0({initialValue:s,onCancel:l,onSave:r}){const{t:d}=Re(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,j]=f.useState(""),v=b=>{if(b.preventDefault(),!p.trim()){r({});return}try{const x=JSON.parse(p);if(typeof x!="object"||x===null)throw new Error("Must be a JSON object {} or array []");r(x)}catch(x){j(x instanceof Error?x.message:"Invalid JSON")}},y=b=>{if(h(b),!b.trim()){j("");return}try{const x=JSON.parse(b);if(typeof x!="object"||x===null)throw new Error("Must be a JSON object {} or array []");j("")}catch(x){j(x instanceof Error?x.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:b=>y(b.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:l,actionText:r,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),r&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:r})]})}function v0({value:s,onChange:l,label:r}){const{t:d}=Re(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:r}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,j)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((v,y)=>y!==j)),style:{cursor:"pointer"},children:[m," ×"]},j)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),l([...s,p.trim()]),h(""))}})]})]})}function ih({options:s,value:l,onChange:r,label:d,actionText:p,onAction:h}){const{t:m}=Re(),[j,v]=f.useState(""),y=s.filter(x=>l.includes(x.id)),b=s.filter(x=>x.name.toLowerCase().includes(j.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:p,onAction:h}),y.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:y.map(x=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>r(l.filter(U=>U!==x.id)),children:[x.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},x.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:j,onChange:x=>v(x.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[b.map(x=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(x.id),onChange:U=>r(U.target.checked?[...l,x.id]:l.filter(P=>P!==x.id))}),t.jsx("span",{children:x.name})]},x.id)),b.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function sn({label:s,checked:l,onChange:r}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>r(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function j0({initialValue:s,isSnakeCase:l,onCancel:r,onSave:d}){const{t:p}=Re(),h=l?"server_name":"serverName",m=l?"allow_insecure":"allowInsecure",[j,v]=f.useState(String((s==null?void 0:s[h])??"")),[y,b]=f.useState(()=>{const U=s==null?void 0:s[m];return U===1||U===!0||String(U)==="1"||String(U)==="true"}),x=U=>{U.preventDefault(),d({[h]:j,[m]:l?y?1:0:y})};return t.jsxs("form",{onSubmit:x,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:p("node.serverName")}),t.jsx("input",{className:"config-input",value:j,onChange:U=>v(U.target.value),placeholder:p("node.serverNameHelp")})]}),t.jsx(sn,{label:p("node.allowInsecure"),checked:y,onChange:b}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function w0({draft:s,set:l,groups:r,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:j}){const{t:v}=Re(),y=String(s._type),b=Ze(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"name"),onChange:x=>l("name",x.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Ze(s,"rate","1"),onChange:x=>l("rate",Number(x.target.value))})]})]}),t.jsx(v0,{value:s.tags??[],onChange:x=>l("tags",x),label:v("node.tags")}),t.jsx(ih,{options:r.map(x=>({id:x.id,name:x.name})),value:s.group_id??[],onChange:x=>l("group_id",x),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"host"),onChange:x=>l("host",x.target.value),placeholder:v("node.addressPlaceholder")})]}),["vmess","vless","v2node"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.tls"),actionText:Number(s.tls)===2?void 0:v("node.editConfig"),onAction:()=>{const x=y==="vmess"?"tlsSettings":"tls_settings";h(v("node.tls"),x)}}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls","0"),onChange:x=>{const U=Number(x.target.value);l("tls",U);const P=y==="vmess"?"tlsSettings":"tls_settings";U===1&&!s[P]&&l(P,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),y!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Ze(s,"server_name"),onChange:x=>l("server_name",x.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"port"),onChange:x=>l("port",x.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"server_port"),onChange:x=>l("server_port",x.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless","v2node"].includes(y)&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:j}),t.jsxs("select",{className:"config-input",value:b,onChange:x=>{l("network",x.target.value);const U=y==="vmess"?"networkSettings":"network_settings";s[U]||l(U,{})},children:[y==="vmess"&&m0.map(x=>t.jsx("option",{value:x,children:x},x)),y==="trojan"&&x0.map(x=>t.jsx("option",{value:x,children:x},x)),y==="vless"&&f0.map(x=>t.jsx("option",{value:x,children:x},x)),y==="v2node"&&h0.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),y==="trojan"&&t.jsx(_0,{draft:s,set:l}),y==="shadowsocks"&&t.jsx(S0,{draft:s,set:l,onOpenJson:h}),y==="hysteria"&&t.jsx(k0,{draft:s,set:l}),y==="tuic"&&t.jsx(C0,{draft:s,set:l}),y==="vless"&&t.jsx(z0,{draft:s,set:l,onOpenJson:h}),y==="anytls"&&t.jsx(T0,{draft:s,set:l,onOpenJson:h}),y==="v2node"&&t.jsx(E0,{draft:s,set:l,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:x=>l("parent_id",x.target.value?Number(x.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),p.filter(x=>x.id!==s.id&&!x.parent_id).map(x=>t.jsx("option",{value:x.id,children:x.name},x.id))]})]}),t.jsx(ih,{options:d.map(x=>({id:x.id,name:x.remarks})),value:s.route_id??[],onChange:x=>l("route_id",x),label:v("node.routingGroups")})]})]})}function N0({draft:s,set:l,onCancel:r,onSave:d}){const{t:p}=Re(),h=String(s._type),m=String(s.network??"tcp"),j=h==="vmess",v=j?"networkSettings":"network_settings",y=Mo(s,v),b=String(y.path??""),x=String(j?y.headers&&typeof y.headers=="object"?y.headers.Host??"":"":y.host??""),U=String(y.serviceName??""),P=S=>{S.preventDefault(),d()},W=["ws","http","httpupgrade","xhttp"].includes(m),J=m==="grpc";return t.jsxs("form",{onSubmit:P,style:{display:"flex",flexDirection:"column",gap:16},children:[W&&t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.path")}),t.jsx("input",{className:"config-input",value:b,onChange:S=>{const B={...y,path:S.target.value};l(v,B)},placeholder:"/"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.host")}),t.jsx("input",{className:"config-input",value:x,onChange:S=>{if(j){const B=y.headers&&typeof y.headers=="object"?{...y.headers}:{};B.Host=S.target.value,l(v,{...y,headers:B})}else l(v,{...y,host:S.target.value})},placeholder:p("node.hostPlaceholder")})]})]}),J&&t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.serviceName")}),t.jsx("input",{className:"config-input",value:U,onChange:S=>{l(v,{...y,serviceName:S.target.value})},placeholder:p("node.serviceNamePlaceholder")})]}),!W&&!J&&t.jsx("div",{style:{color:"var(--muted)",fontSize:13,padding:"8px 0"},children:p("node.transportNoConfig",{network:m.toUpperCase()})}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function _0({draft:s,set:l}){const{t:r}=Re();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.trojanConfig")}),t.jsx(sn,{label:r("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function S0({draft:s,set:l,onOpenJson:r}){const{t:d}=Re(),p=Mo(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:h=>l("cipher",h.target.value),children:ax.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>r(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:h=>l("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>l("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>l("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function k0({draft:s,set:l}){const{t:r}=Re();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ze(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:r("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:r("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:r("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:r("node.autoGenHelp")})]})]}),t.jsx(sn,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function C0({draft:s,set:l}){const{t:r}=Re();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(sn,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(sn,{label:r("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(sn,{label:r("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function z0({draft:s,set:l,onOpenJson:r}){const{t:d}=Re(),p=Number(s.tls??0),h=Mo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:m=>l("flow",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:m=>l("encryption",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),p===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(h.server_name??""),onChange:m=>l("tls_settings",{...h,server_name:m.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(h.server_port??"443"),onChange:m=>l("tls_settings",{...h,server_port:m.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(h.public_key??""),onChange:m=>l("tls_settings",{...h,public_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(h.private_key??""),onChange:m=>l("tls_settings",{...h,private_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(h.short_id??""),onChange:m=>l("tls_settings",{...h,short_id:m.target.value}),placeholder:d("node.autoGenHelp")})]})]})]})}function T0({draft:s,set:l,onOpenJson:r}){const{t:d}=Re();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(sn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>l("insecure",p?1:0)})]})}function E0({draft:s,set:l,onOpenJson:r}){const{t:d}=Re(),p=Ze(s,"protocol","vless"),h=Number(s.tls??0),m=Mo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.v2nodeConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.nodeProtocol"),required:!0}),t.jsx("select",{className:"config-input",value:p,onChange:j=>l("protocol",j.target.value),children:g0.map(j=>t.jsx("option",{value:j,children:j},j))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ze(s,"listen_ip"),onChange:j=>l("listen_ip",j.target.value),placeholder:"0.0.0.0"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:j=>l("flow",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:j=>l("encryption",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),h===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(m.server_name??""),onChange:j=>l("tls_settings",{...m,server_name:j.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(m.server_port??"443"),onChange:j=>l("tls_settings",{...m,server_port:j.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(m.public_key??""),onChange:j=>l("tls_settings",{...m,public_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(m.private_key??""),onChange:j=>l("tls_settings",{...m,private_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(m.short_id??""),onChange:j=>l("tls_settings",{...m,short_id:j.target.value}),placeholder:d("node.autoGenHelp")})]})]}),p==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:j=>l("cipher",j.target.value),children:ax.map(j=>t.jsx("option",{value:j,children:j},j))})]}),p==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:j=>l("up_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:j=>l("down_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:j=>l("obfs",j.target.value||null)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:j=>l("obfs_password",j.target.value)})]})]})]}),p==="tuic"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:j=>l("udp_relay_mode",j.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:j=>l("congestion_control",j.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),p==="anytls"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(sn,{label:d("node.disableSni"),checked:s.disable_sni===1,onChange:j=>l("disable_sni",j?1:0)}),t.jsx(sn,{label:d("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:j=>l("zero_rtt_handshake",j?1:0)})]})}const sh={vmess:cv,vless:vv,trojan:fd,shadowsocks:ko,hysteria:iv,tuic:Vy,anytls:ts,v2node:Ky},Fl={v2node:{bg:"#ef4444",text:"#ffffff",rowBg:"rgba(239, 68, 68, 0.05)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.05)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.05)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.05)"},hysteria:{bg:"#111827",text:"#ffffff",rowBg:"rgba(17, 24, 39, 0.04)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.05)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.05)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.05)"}};function M0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(null),[b,x]=f.useState(null),[U,P]=f.useState(!0),[W,J]=f.useState(!1),[S,B]=f.useState(""),[G,O]=f.useState(""),[X,le]=f.useState(1),[ue,H]=f.useState(10),[oe,re]=f.useState(!1),[se,_]=f.useState({}),[A,k]=f.useState(""),[T,F]=f.useState(null),[D,Q]=f.useState(null),[N,ne]=f.useState(null),ie=(L,de)=>{L.dataTransfer.effectAllowed="move",Q(de)},C=(L,de)=>{if(L.preventDefault(),D===null||D===de)return;const fe=[...r],Ue=fe[D];fe.splice(D,1),fe.splice(de,0,Ue),Q(de),d(fe)},Z=()=>{Q(null)},pe=(L,de)=>{oe&&ne(de)},xe=L=>{if(!oe||N===null)return;L.cancelable&&L.preventDefault();const de=L.touches[0],fe=document.elementFromPoint(de.clientX,de.clientY);if(!fe)return;const Ue=fe.closest(".mobile-node-card");if(!Ue)return;const Me=Ue.getAttribute("data-index");if(Me===null)return;const Pe=Number(Me);if(Pe!==N&&Pe>=0&&Pe<r.length){const Fe=[...r],He=Fe[N];Fe.splice(N,1),Fe.splice(Pe,0,He),ne(Pe),d(Fe)}},we=()=>{ne(null)};f.useEffect(()=>{le(1)},[A,ue]);const _e=r.filter(L=>{const de=A.toLowerCase().trim();return de?L.name.toLowerCase().includes(de)||L.host.toLowerCase().includes(de)||String(L.id).includes(de)||L.type.toLowerCase().includes(de):!0}),Se=Math.ceil(_e.length/ue),Ke=_e.slice((X-1)*ue,X*ue);function $e(L,de){return de<=7?Array.from({length:de},(fe,Ue)=>Ue+1):L<=4?[1,2,3,4,5,"...",de]:L>=de-3?[1,"...",de-4,de-3,de-2,de-1,de]:[1,"...",L-1,L,L+1,"...",de]}const Ut=$e(X,Se),gt=async()=>{var L,de;J(!0),B(""),O("");try{const fe={};r.forEach((Ue,Me)=>{fe[Ue.type]||(fe[Ue.type]={}),fe[Ue.type][String(Ue.id)]=Me+1}),await B1(fe),(L=window.showToast)==null||L.call(window,l("node.saveSortSuccess"),"success"),re(!1),await Ce()}catch(fe){B(fe instanceof Error?fe.message:l("node.saveSortFailed")),(de=window.showToast)==null||de.call(window,fe instanceof Error?fe.message:l("node.saveSortFailed"),"error")}finally{J(!1)}},Qt=async()=>{re(!1),await ve()},Et=()=>_e.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:X===1,onClick:()=>le(L=>Math.max(L-1,1)),children:"<"}),Ut.map((L,de)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${de}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${X===L?"active":""}`,onClick:()=>le(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:X===Se||Se===0,onClick:()=>le(L=>Math.min(L+1,Se)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:ue,onChange:L=>H(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",l("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",l("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",l("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",l("common.perPage")]})]})})]}),[st,bt]=f.useState(null),[Ea,pt]=f.useState(!1),[It,Rt]=f.useState(""),[Xt,ea]=f.useState(!1),[E,R]=f.useState(!1);async function ce(L){var fe,Ue;L.preventDefault();const de=It.trim();if(!(!de||!v)){ea(!0),B(""),O("");try{await Xh({name:de});const Me=await es();h(Me);const Pe=Me.filter(Fe=>Fe.name===de).sort((Fe,He)=>He.id-Fe.id)[0];if(Pe){const Fe=v.group_id??[];Fe.includes(Pe.id)||ft("group_id",[...Fe,Pe.id])}Rt(""),pt(!1),(fe=window.showToast)==null||fe.call(window,l("node.groupCreateSuccess"),"success")}catch(Me){B(Me instanceof Error?Me.message:l("node.groupCreateFailed")),(Ue=window.showToast)==null||Ue.call(window,Me instanceof Error?Me.message:l("node.groupCreateFailed"),"error")}finally{ea(!1)}}}const ee=(L,de)=>{if(!v)return;let fe=v[de];if(typeof fe=="string"&&fe.trim())try{fe=JSON.parse(fe)}catch{}bt({title:L,key:de,value:fe&&typeof fe=="object"?fe:{}})},ve=f.useCallback(async()=>{P(!0),B("");try{const[L,de,fe]=await Promise.all([eh(),es(),Kh()]);d(L.data),h(de),j(fe)}catch(L){B(L instanceof Error?L.message:l("knowledge.loadFailed"))}finally{P(!1)}},[]),Ce=f.useCallback(async()=>{try{const L=await eh();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ve()},[ve,s]);function Ee(L){y(lh(L)),x(null),B(""),O("")}function We(L){y(lh(L.type,L)),B(""),O("")}async function cn(L){var Pe,Fe;if(L.preventDefault(),!v)return;J(!0),B(""),O("");const de=String(v._type),fe={...v};for(const He of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete fe[He];if(fe.padding_scheme!==void 0&&fe.padding_scheme!==null&&typeof fe.padding_scheme!="string"&&(fe.padding_scheme=JSON.stringify(fe.padding_scheme)),fe.padding_scheme)try{const He=JSON.parse(String(fe.padding_scheme));if(typeof He!="object"||He===null)throw new Error("Invalid JSON array or object")}catch(He){B("Invalid Padding Scheme configuration: "+(He instanceof Error?He.message:"JSON error")),J(!1);return}const Ue=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const He of Ue)(fe[He]===""||fe[He]===null||fe[He]===void 0)&&delete fe[He];const Me=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const He of Me){const aa=fe[He];(aa==null||typeof aa=="object"&&Object.keys(aa).length===0)&&delete fe[He]}fe.port!==void 0&&(fe.port=Number(fe.port)),fe.server_port!==void 0&&(fe.server_port=Number(fe.server_port)),fe.tls!==void 0&&(fe.tls=Number(fe.tls)),fe.rate!==void 0&&(fe.rate=Number(fe.rate));try{await R1(de,fe),y(null),(Pe=window.showToast)==null||Pe.call(window,l("node.saveSuccess"),"success"),await Ce()}catch(He){B(He instanceof Error?He.message:l("node.saveFailed")),(Fe=window.showToast)==null||Fe.call(window,He instanceof Error?He.message:l("node.saveFailed"),"error")}finally{J(!1)}}async function ta(L){const de=[...r];d(fe=>fe.map(Ue=>Ue.id===L.id&&Ue.type===L.type?{...Ue,show:L.show?0:1}:Ue));try{await L1(L.type,L.id,L.show?0:1),await Ce()}catch(fe){d(de),B(fe instanceof Error?fe.message:l("node.updateFailed"))}}async function Yn(L){var de,fe;try{await q1(L.type,L.id),(de=window.showToast)==null||de.call(window,l("node.copySuccess"),"success"),await Ce()}catch(Ue){B(Ue instanceof Error?Ue.message:l("node.copyFailed")),(fe=window.showToast)==null||fe.call(window,Ue instanceof Error?Ue.message:l("node.copyFailed"),"error")}}async function Ma(L){var de;(de=window.showConfirm)==null||de.call(window,{message:l("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var Ue,Me;const fe=[...r];d(Pe=>Pe.filter(Fe=>!(Fe.id===L.id&&Fe.type===L.type))),B("");try{await H1(L.type,L.id),(Ue=window.showToast)==null||Ue.call(window,l("node.deleteSuccess"),"success"),await Ce()}catch(Pe){d(fe),B(Pe instanceof Error?Pe.message:l("node.deleteFailed")),(Me=window.showToast)==null||Me.call(window,Pe instanceof Error?Pe.message:l("node.deleteFailed"),"error")}}})}const ft=(L,de)=>y(fe=>fe?{...fe,[L]:de}:null),Jt=v?String(v._type):"";return t.jsxs(At,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>x(b?null:"show"),title:l("node.createNode"),children:t.jsx(ba,{size:18})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>x(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),ah.map(L=>{const de=Fl[L.value],fe=sh[L.value]||Co;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ee(L.value),x(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:t.jsx(fe,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:A,onChange:L=>k(L.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${oe?"success-btn":""}`,type:"button",onClick:oe?gt:()=>re(!0),disabled:W,children:l(oe?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),oe&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Qt,children:l("common.cancel")})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,G?t.jsx("div",{className:"form-success",children:G}):null,U&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(oe?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Ke.map(L=>{var fe,Ue;const de=r.findIndex(Me=>Me.id===L.id&&Me.type===L.type);return t.jsxs("tr",{draggable:oe,onDragStart:Me=>ie(Me,de),onDragOver:Me=>C(Me,de),onDragEnd:Z,className:D===de?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((fe=Fl[L.type])==null?void 0:fe.bg)??"var(--surface-soft)",color:((Ue=Fl[L.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void ta(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:t.jsxs("span",{className:"online-badge",children:[t.jsx(xd,{size:13,style:{color:Number(L.online)>0?"#10b981":"var(--text-muted)",opacity:Number(L.online)>0?1:.6}}),Number(L.online??0)]})}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const Me=L.group_id??[],Pe=se[`${L.type}-${L.id}`],Fe=Me.map(Ft=>{const dn=p.find(ot=>Number(ot.id)===Number(Ft));return t.jsx("span",{className:"tag",children:(dn==null?void 0:dn.name)??`#${Ft}`},Ft)});if(Me.length<=3||Pe)return t.jsxs(t.Fragment,{children:[Fe,Me.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>_(Ft=>({...Ft,[`${L.type}-${L.id}`]:!1})),children:l("node.collapse")})]});const He=Fe.slice(0,3),aa=Me.length-3;return t.jsxs(t.Fragment,{children:[He,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>_(Ft=>({...Ft,[`${L.type}-${L.id}`]:!0})),children:["+",aa,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:Me.length})}),Fe]})]})]})})()})}),t.jsx("td",{children:oe?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Ki,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>F((T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>F(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{We(L),F(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Yn(L),F(null)},children:[t.jsx(So,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ma(L),F(null)},children:[t.jsx(Ot,{size:14})," ",l("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!U&&_e.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Et()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>x(b?null:"show"),title:l("node.createNode"),children:t.jsx(ba,{size:20})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>x(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),ah.map(L=>{const de=Fl[L.value],fe=sh[L.value]||Co;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ee(L.value),x(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:t.jsx(fe,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:A,onChange:L=>k(L.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${oe?"active":""}`,type:"button",onClick:()=>re(!oe),title:l("node.editSortOrder"),children:t.jsx(Ki,{size:20})})]}),oe&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Qt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void gt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Ke.map(L=>{var fe,Ue;const de=r.findIndex(Me=>Me.id===L.id&&Me.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${D===de||N===de?"dragging":""}`,draggable:oe,onDragStart:Me=>ie(Me,de),onDragOver:Me=>C(Me,de),onDragEnd:Z,onTouchStart:Me=>pe(Me,de),onTouchMove:xe,onTouchEnd:we,"data-index":de,style:oe?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?l("node.statusNormal"):L.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:oe?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Ki,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void ta(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>F((T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type?null:{id:L.id,type:L.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===L.id&&(T==null?void 0:T.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>F(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{We(L),F(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Yn(L),F(null)},children:[t.jsx(So,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ma(L),F(null)},children:[t.jsx(Ot,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((fe=Fl[L.type])==null?void 0:fe.bg)??"var(--surface-soft)",color:((Ue=Fl[L.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:L.id}),t.jsxs("span",{className:"mobile-badge-pill",children:[t.jsx(xd,{size:12,style:{marginRight:4,color:Number(L.online)>0?"#10b981":"var(--text-muted)",opacity:Number(L.online)>0?1:.6}}),Number(L.online??0)]}),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!U&&_e.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Et()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?l("node.editNodeTitle",{type:Jt}):l("node.createNodeTitle",{type:Jt})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:Jt})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:cn,children:[t.jsx(w0,{draft:v,set:ft,groups:p,routes:m,nodes:r,onOpenJson:ee,onAddGroup:()=>pt(!0),onOpenTransportConfig:()=>R(!0)}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"node.saving":"common.save")]})]})]})]})}),st!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:st.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(st.key)?l("node.tlsEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>bt(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(st.key)?t.jsx(j0,{initialValue:st.value,isSnakeCase:st.key==="tls_settings",onCancel:()=>bt(null),onSave:L=>{ft(st.key,L),bt(null)}}):t.jsx(y0,{initialValue:st.value,onCancel:()=>bt(null),onSave:L=>{ft(st.key,L),bt(null)}})})]})}),Ea&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>pt(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{onSubmit:ce,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:It,onChange:L=>Rt(L.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>pt(!1),disabled:Xt,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Xt||!It.trim(),children:l(Xt?"node.saving":"common.confirm")})]})]})]})}),E&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:500,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>R(!1),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(N0,{draft:v,set:ft,onCancel:()=>R(!1),onSave:()=>R(!1)})})]})})]})}function D0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,x]=f.useState(""),U=f.useCallback(async()=>{j(!0),x("");try{d(await es())}catch(S){x(S instanceof Error?S.message:l("serverGroup.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}U()},[U,s]);function P(S){h({id:S==null?void 0:S.id,name:(S==null?void 0:S.name)??""}),x("")}async function W(S){var B;if(S.preventDefault(),!!p){y(!0),x("");try{await Xh(p),h(null),(B=window.showToast)==null||B.call(window,l("serverGroup.saveSuccess"),"success"),await U()}catch(G){x(G instanceof Error?G.message:l("serverGroup.saveFailed"))}finally{y(!1)}}}async function J(S){var B;(B=window.showConfirm)==null||B.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var G,O;x("");try{await Vv(S),(G=window.showToast)==null||G.call(window,l("serverGroup.deleteSuccess"),"success"),await U()}catch(X){x(X instanceof Error?X.message:l("serverGroup.deleteFailed")),(O=window.showToast)==null||O.call(window,X instanceof Error?X.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>P(),children:[t.jsx(ba,{size:16}),l("serverGroup.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(dt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(S=>t.jsxs("tr",{children:[t.jsx("td",{children:S.id}),t.jsx("td",{children:t.jsx("strong",{children:S.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Ii,{size:14}),S.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Co,{size:14}),S.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>P(S),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void J(S.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},S.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:S=>h({...p,name:S.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function O0(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function A0(s){var l;return((l=Zh.find(r=>r.value===s))==null?void 0:l.label)??s}function U0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,x]=f.useState(""),U=f.useCallback(async()=>{j(!0),x("");try{d(await Kh())}catch(S){x(S instanceof Error?S.message:l("serverRoute.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}U()},[U,s]);function P(S){h(O0(S)),x("")}async function W(S){var G;if(S.preventDefault(),!p)return;y(!0),x("");const B=p.action==="default_out"?[]:p.match.split(`
`).map(O=>O.trim()).filter(Boolean);try{await $v({id:p.id,remarks:p.remarks,match:B,action:p.action,action_value:p.action_value||null}),h(null),(G=window.showToast)==null||G.call(window,l("serverRoute.saveSuccess"),"success"),await U()}catch(O){x(O instanceof Error?O.message:l("serverRoute.saveFailed"))}finally{y(!1)}}async function J(S){var B;(B=window.showConfirm)==null||B.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var G,O;x("");try{await Qv(S),(G=window.showToast)==null||G.call(window,l("serverRoute.deleteSuccess"),"success"),await U()}catch(X){x(X instanceof Error?X.message:l("serverRoute.deleteFailed")),(O=window.showToast)==null||O.call(window,X instanceof Error?X.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>P(),children:[t.jsx(ba,{size:16}),l("serverRoute.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(dt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(S=>t.jsxs("tr",{children:[t.jsx("td",{children:S.id}),t.jsx("td",{children:t.jsx("strong",{children:S.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(S.match)?S.match:[]).slice(0,3).map((B,G)=>t.jsx("span",{className:"tag",children:B},G)),Array.isArray(S.match)&&S.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",S.match.length-3]}):null,!Array.isArray(S.match)||S.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:A0(S.action)})}),t.jsx("td",{children:S.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>P(S),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void J(S.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},S.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:S=>h({...p,remarks:S.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:S=>h({...p,action:S.target.value}),children:Zh.map(S=>t.jsx("option",{value:S.value,children:S.label},S.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:S=>h({...p,match:S.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:S=>h({...p,action_value:S.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function R0(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function H0(s){const l=d=>d===""?null:Math.round(Number(d)*100),r=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:r(s.device_limit),speed_limit:r(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:r(s.reset_traffic_method),capacity_limit:r(s.capacity_limit),force_update:s.force_update}}function Kt(s){return s==null?"—":Dt(s)}function L0(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function q0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,x]=f.useState(!1),[U,P]=f.useState(""),[W,J]=f.useState(""),[S,B]=f.useState(null),[G,O]=f.useState(null),X=(N,ne)=>{N.dataTransfer.effectAllowed="move",B(ne)},le=(N,ne)=>{if(N.preventDefault(),S===null||S===ne)return;const ie=[...r],C=ie[S];ie.splice(S,1),ie.splice(ne,0,C),B(ne),d(ie)},ue=async()=>{B(null);try{await Pf(r.map(N=>N.id)),await se()}catch(N){P(N instanceof Error?N.message:l("plan.sortFailed")),await se()}},H=(N,ne)=>{O(ne)},oe=N=>{if(G===null)return;const ne=N.touches[0],ie=document.elementFromPoint(ne.clientX,ne.clientY);if(!ie)return;const C=ie.closest("tr, [data-index]");if(!C)return;const Z=C.getAttribute("data-index");if(Z===null)return;const pe=Number(Z);if(pe!==G&&pe>=0&&pe<r.length){const xe=[...r],we=xe[G];xe.splice(G,1),xe.splice(pe,0,we),O(pe),d(xe)}},re=async()=>{if(G!==null){O(null);try{await Pf(r.map(N=>N.id)),await se()}catch(N){P(N instanceof Error?N.message:l("plan.sortFailed")),await se()}}},se=f.useCallback(async()=>{y(!0),P("");try{const[N,ne]=await Promise.all([ul(),es()]);d(N),h(ne)}catch(N){P(N instanceof Error?N.message:l("plan.loadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}se()},[se,s]);function _(N){j(R0(N)),P(""),J("")}async function A(N){var ne,ie;if(N.preventDefault(),!!m){x(!0),P(""),J("");try{await Xv(H0(m)),j(null),(ne=window.showToast)==null||ne.call(window,l("plan.saveSuccess"),"success"),await se()}catch(C){(ie=window.showToast)==null||ie.call(window,C instanceof Error?C.message:l("plan.saveFailed"),"error")}finally{x(!1)}}}async function k(N,ne){var ie;try{await Wf(N,{show:ne?0:1}),await se()}catch(C){(ie=window.showToast)==null||ie.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function T(N,ne){var ie;try{await Wf(N,{renew:ne?0:1}),await se()}catch(C){(ie=window.showToast)==null||ie.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function F(N){var ne;(ne=window.showConfirm)==null||ne.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var ie,C;P(""),J("");try{await Zv(N),(ie=window.showToast)==null||ie.call(window,l("plan.deleteSuccess"),"success"),await se()}catch(Z){(C=window.showToast)==null||C.call(window,Z instanceof Error?Z.message:l("plan.deleteFailed"),"error")}}})}function D(N){var ne;return((ne=p.find(ie=>ie.id===N))==null?void 0:ne.name)??`#${N}`}function Q(N,ne){j(ie=>ie&&{...ie,[N]:ne})}return t.jsxs(At,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:se,disabled:v,children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(),children:[t.jsx(ba,{size:16}),l("plan.add")]})]})]}),U?t.jsx("div",{className:"form-error",children:U}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&r.length===0?t.jsx(dt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((N,ne)=>t.jsxs("tr",{draggable:!0,onDragStart:ie=>X(ie,ne),onDragOver:ie=>le(ie,ne),onDragEnd:ue,onTouchStart:ie=>H(ie,ne),onTouchMove:oe,onTouchEnd:re,"data-index":ne,className:S===ne||G===ne?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(Ki,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:ie=>{ie.stopPropagation(),k(N.id,N.show)},title:N.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:ie=>{ie.stopPropagation(),T(N.id,N.renew)},title:N.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Ii,{size:14}),N.count??0]})}),t.jsx("td",{children:D(N.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Kt(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Kt(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Kt(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Kt(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Kt(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Kt(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Kt(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Kt(N.reset_price)})]})]})}),t.jsxs("td",{children:[N.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:ie=>{ie.stopPropagation(),_(N)},children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:ie=>{ie.stopPropagation(),F(N.id)},children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},N.id)),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[r.map((N,ne)=>t.jsxs("div",{className:`mobile-node-card ${S===ne||G===ne?"dragging":""}`,draggable:!0,onDragStart:ie=>X(ie,ne),onDragOver:ie=>le(ie,ne),onDragEnd:ue,onTouchStart:ie=>H(ie,ne),onTouchMove:oe,onTouchEnd:re,"data-index":ne,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(Ki,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:N.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:ie=>{ie.stopPropagation(),_(N)},children:[t.jsx(Ct,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:ie=>{ie.stopPropagation(),F(N.id)},children:[t.jsx(Ot,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:ie=>{ie.stopPropagation(),k(N.id,N.show)},title:N.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:ie=>{ie.stopPropagation(),T(N.id,N.renew)},title:N.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Ii,{size:12,style:{marginRight:4}}),N.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:D(N.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[N.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Kt(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Kt(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Kt(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Kt(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Kt(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Kt(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Kt(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Kt(N.reset_price)})]})]})]},N.id)),!v&&r.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:A,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:N=>Q("name",N.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:N=>Q("content",N.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:N=>Q("group_id",N.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),p.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:N=>Q("transfer_enable",N.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:N=>Q("device_limit",N.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:N=>Q("speed_limit",N.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:N=>Q("capacity_limit",N.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:N=>Q("reset_traffic_method",N.target.value),children:L0(l).map(N=>t.jsx("option",{value:N.value,children:N.label},N.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:N=>Q("month_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:N=>Q("quarter_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:N=>Q("half_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:N=>Q("year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:N=>Q("two_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:N=>Q("three_year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:N=>Q("onetime_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:N=>Q("reset_price",N.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:N=>Q("force_update",String(N.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"plan.saving":"common.save")]})]})]})]})}):null]})}const Ic="模糊",oh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},rh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function ch(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0");return`${r}/${d}/${p} ${h}:${m}`}function dh(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0"),j=String(l.getSeconds()).padStart(2,"0");return`${r}-${d}-${p} ${h}:${m}:${j}`}function uh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}const nx="adminzic_user_cache";function B0(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(nx);return s?JSON.parse(s):{}}catch{return{}}}function G0(s){if(!(typeof window>"u"))try{sessionStorage.setItem(nx,JSON.stringify(s))}catch{}}const Wl=(s,l)=>`${s}:${l}`;function Y0(){var It,Rt,Xt,ea,E;const s=wt(),l=Gn(),{t:r}=Re(),d=f.useCallback(R=>{switch(R){case 0:return{label:r("order.statusPending"),cls:"status-pending"};case 1:return{label:r("order.statusProcessing"),cls:"status-processing"};case 2:return{label:r("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:r("order.statusCompleted"),cls:"status-completed"};case 4:return{label:r("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${R}`,cls:""}}},[r]),p=f.useCallback(R=>{const ce=`order.period.${R}`,ee=r(ce);return ee===ce?rh[R]??R:ee},[r]),[h,m]=f.useState([]),[j,v]=f.useState([]),[y,b]=f.useState(0),[x,U]=f.useState(1),[P]=f.useState(15),[W,J]=f.useState(""),[S,B]=f.useState("trade_no"),[G,O]=f.useState(!0),[X,le]=f.useState(null),[ue,H]=f.useState(!1),[oe,re]=f.useState(""),[se,_]=f.useState(""),[A,k]=f.useState(null),[T,F]=f.useState(null),[D,Q]=f.useState(!1),[N,ne]=f.useState(null),[ie,C]=f.useState(!1),[Z,pe]=f.useState(()=>B0()),xe=f.useCallback((R,ce)=>{const ee=Wl(ce,R);F(null),k(ve=>ve===ee?null:ee)},[]),we=f.useCallback((R,ce)=>{const ee=Wl(ce,R);k(null),F(ve=>ve===ee?null:ee)},[]);f.useEffect(()=>{if(!A&&!T)return;const R=()=>{k(null),F(null)},ce=ve=>{const Ce=ve.target;Ce!=null&&Ce.closest(".order-dropdown-trigger, .order-dropdown-menu")||R()},ee=ve=>{ve.key==="Escape"&&R()};return document.addEventListener("pointerdown",ce),document.addEventListener("keydown",ee),()=>{document.removeEventListener("pointerdown",ce),document.removeEventListener("keydown",ee)}},[A,T]),f.useEffect(()=>{const R=new Set;if(h.forEach(ee=>{ee.user_id&&!Z[ee.user_id]&&R.add(ee.user_id),ee.invite_user_id&&!Z[ee.invite_user_id]&&R.add(ee.invite_user_id)}),N&&(N.user_id&&!Z[N.user_id]&&R.add(N.user_id),N.invite_user_id&&!Z[N.invite_user_id]&&R.add(N.invite_user_id)),R.size===0)return;const ce=Array.from(R);Promise.allSettled(ce.map(async ee=>{try{const ve=await Fh(ee);if(ve&&ve.data)return{id:ee,email:ve.data.email,invite_user:ve.data.invite_user}}catch(ve){console.error(`Failed to fetch user ${ee}:`,ve)}return null})).then(ee=>{const ve={};ee.forEach(Ce=>{var Ee;if(Ce.status==="fulfilled"&&Ce.value){const We=Ce.value;ve[We.id]={email:We.email,invite_user_email:((Ee=We.invite_user)==null?void 0:Ee.email)||null},We.invite_user&&(ve[We.invite_user.id]={email:We.invite_user.email})}}),Object.keys(ve).length>0&&pe(Ce=>{const Ee={...Ce,...ve};return G0(Ee),Ee})})},[h,N,Z]);const _e={0:{label:r("order.commissionPending"),dotClass:"pending"},1:{label:r("order.commissionApproved"),dotClass:"processing"},2:{label:r("order.commissionPaid"),dotClass:"completed"},3:{label:r("order.commissionCancelled"),dotClass:"cancelled"}},Se=f.useCallback(async(R=1,ce,ee)=>{var ve,Ce;O(!0),re("");try{let Ee;if(ce)if(ee==="email"){const ta=(ve=(await gd(1,1,[{key:"email",condition:Ic,value:ce}])).data)==null?void 0:ve[0];if(!ta){m([]),b(0),O(!1);return}Ee=[{key:"user_id",condition:"=",value:String(ta.id)}]}else if(ee==="invite_user_email"){const ta=(Ce=(await gd(1,1,[{key:"email",condition:Ic,value:ce}])).data)==null?void 0:Ce[0];if(!ta){m([]),b(0),O(!1);return}Ee=[{key:"invite_user_id",condition:"=",value:String(ta.id)}]}else Ee=[{key:ee||"trade_no",condition:ee==="trade_no"||ee==="user_id"||ee==="invite_user_id"||ee==="plan_id"||ee==="status"?"=":Ic,value:ce}];const We=await Kv({current:R,pageSize:P,filter:Ee});m(We.data),b(We.total)}catch(Ee){re(Ee instanceof Error?Ee.message:r("order.loadFailed"))}finally{O(!1)}},[P,r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const R=new URLSearchParams(l.search),ce=R.get("filter_email"),ee=R.get("invite_user_email"),ve=R.get("user_id")||R.get("filter_user_id");let Ce="",Ee="trade_no";ve?(Ce=ve,Ee="user_id",B("user_id"),J(ve),Q(!0)):ce?(Ce=ce,Ee="email",B("email"),J(ce),Q(!0)):ee&&(Ce=ee,Ee="invite_user_email",B("invite_user_email"),J(ee),Q(!0)),Se(1,Ce,Ee),ul().then(v).catch(()=>{})},[Se,s,l.search]);function Ke(){U(1),Se(1,W,S)}function $e(){J(""),U(1),Se(1)}function Ut(R){U(R),Se(R,W,S)}async function gt(R){var ce,ee;k(null),F(null),re(""),_("");try{await Jv(R),(ce=window.showToast)==null||ce.call(window,r("order.paidSuccess"),"success"),await Se(x,W,S)}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("order.paidFailed"),"error")}}async function Qt(R){var ce,ee;k(null),F(null),re(""),_("");try{await Fv(R),(ce=window.showToast)==null||ce.call(window,r("order.cancelSuccess"),"success"),await Se(x,W,S)}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("order.cancelFailed"),"error")}}async function Et(R,ce){var ee,ve;k(null),F(null),re(""),_("");try{await Wv(R,ce),(ee=window.showToast)==null||ee.call(window,r("order.commissionSuccess"),"success"),await Se(x,W,S)}catch(Ce){(ve=window.showToast)==null||ve.call(window,Ce instanceof Error?Ce.message:r("order.commissionFailed"),"error")}}async function st(R){ne(R),C(!0);try{const ce=await Pv(R.id);ce&&ce.data&&ne(ce.data)}catch(ce){console.error("Failed to fetch order detail:",ce)}finally{C(!1)}}function bt(){var R;le({email:"",plan_id:(R=j[0])!=null&&R.id?String(j[0].id):"",period:"month_price",total_amount:"0"}),re(""),_("")}async function Ea(R){var ce,ee;if(R.preventDefault(),!!X){H(!0),re(""),_("");try{await Jh({email:X.email,plan_id:Number(X.plan_id),period:X.period,total_amount:Number(X.total_amount)*100}),le(null),(ce=window.showToast)==null||ce.call(window,r("order.assignSuccess"),"success"),await Se(x,W,S)}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("order.assignFailed"),"error")}finally{H(!1)}}}const pt=Math.ceil(y/P);return t.jsxs(At,{title:r("order.title"),subtitle:r("order.subtitle"),children:[t.jsx("style",{children:`
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
          border: 1px solid var(--line);
          border-radius: 4px;
          padding: 2px 8px;
          font-size: 13px;
          color: var(--text);
          background: var(--surface-soft);
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
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: var(--shadow);
            overflow: visible;
          }
          .mobile-order-action-wrap {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: flex-end;
            overflow: visible;
          }
          .mobile-order-action-wrap .order-dropdown-menu {
            left: auto !important;
            right: 0 !important;
            top: calc(100% + 6px) !important;
            min-width: 176px;
            z-index: 1200;
          }
          .mobile-order-action-wrap .dropdown-item {
            min-height: 44px;
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
        }
        @media (min-width: 769px) {
          .mobile-order-list {
            display: none !important;
          }
        }
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${D?"active":""}`,type:"button",onClick:()=>Q(!D),children:[t.jsx(Pi,{size:16}),r("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:bt,children:[t.jsx(ba,{size:16}),r("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Se(x,W,S),disabled:G,children:[t.jsx(zt,{size:16}),r(G?"common.refreshing":"common.refresh")]})]}),D&&t.jsxs("div",{className:"filter-bar",style:{display:"flex",marginBottom:"16px",gap:"8px"},children:[t.jsxs("select",{className:"config-input filter-select",value:S,onChange:R=>B(R.target.value),children:[t.jsx("option",{value:"trade_no",children:r("order.tradeNo")}),t.jsx("option",{value:"email",children:r("order.email")}),t.jsx("option",{value:"status",children:r("order.status")}),t.jsx("option",{value:"plan_id",children:r("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:r("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:r("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:r("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",style:{flex:1},children:[t.jsx(Eo,{size:16}),t.jsx("input",{className:"config-input search-input",value:W,onChange:R=>J(R.target.value),placeholder:r("order.searchPlaceholder"),onKeyDown:R=>R.key==="Enter"&&Ke()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[t.jsx(Pi,{size:16}),r("order.filter")]}),W?t.jsxs("button",{className:"ghost-button",type:"button",onClick:$e,children:[t.jsx(lt,{size:16}),r("order.clearFilter")]}):null]}),oe?t.jsx("div",{className:"form-error",children:oe}):null,se?t.jsx("div",{className:"form-success",children:se}):null,G&&h.length===0?t.jsx(dt,{label:r("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${G?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("order.tradeNo")}),t.jsx("th",{children:r("order.id")}),t.jsx("th",{children:r("order.email")}),t.jsx("th",{children:r("order.type")}),t.jsx("th",{children:r("order.subscriptionPlan")}),t.jsx("th",{children:r("order.period")}),t.jsx("th",{children:r("order.amount")}),t.jsxs("th",{children:[r("order.orderStatus"),t.jsx("span",{className:"help-icon",title:"Order Payment Status",children:t.jsx($f,{size:14})})]}),t.jsx("th",{children:r("order.commissionAmount")}),t.jsxs("th",{children:[r("order.commissionStatus"),t.jsx("span",{className:"help-icon",title:"Referral Commission Status",children:t.jsx($f,{size:14})})]}),t.jsx("th",{children:r("order.created")})]})}),t.jsxs("tbody",{children:[h.map(R=>{var Ce;const ce=d(R.status),ee=R.invite_user_id!==null,ve=_e[R.commission_status]??{label:`#${R.commission_status}`,dotClass:"pending"};return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("span",{className:"trade-no-link",onClick:()=>st(R),title:"Click to view details",children:uh(R.trade_no)})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:R.id})}),t.jsx("td",{children:(Ce=Z[R.user_id])!=null&&Ce.email?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{B("user_id"),J(String(R.user_id)),Q(!0),Se(1,String(R.user_id),"user_id")},title:"Filter by this user",children:Z[R.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",R.user_id]})}),t.jsx("td",{children:oh[R.type]??`#${R.type}`}),t.jsx("td",{children:t.jsx("strong",{children:R.plan_name??`Plan #${R.plan_id}`})}),t.jsx("td",{children:t.jsx("span",{className:"period-capsule",children:p(R.period)})}),t.jsx("td",{children:t.jsxs("strong",{children:[Dt(R.total_amount)," ₫"]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ce.cls.replace("status-","")}`}),t.jsx("span",{children:ce.label}),R.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),xe(R.trade_no,"desktop")},children:[r("order.markAs")," ",t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),A===Wl("desktop",R.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{k(null),gt(R.trade_no)},children:[t.jsx(ho,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{k(null),Qt(R.trade_no)},children:[t.jsx(rl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]}),t.jsx("td",{children:ee?t.jsxs("strong",{children:[Dt(R.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})}),t.jsxs("td",{style:{position:"relative"},children:[ee?t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ve.dotClass}`}),t.jsx("span",{children:ve.label}),R.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),we(R.trade_no,"desktop")},children:[r("order.markAs")," ",t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),T===Wl("desktop",R.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Et(R.trade_no,1)},children:[t.jsx(ho,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Et(R.trade_no,3)},children:[t.jsx(rl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]}),t.jsx("td",{children:ch(R.created_at)})]},R.trade_no)}),!G&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:r("order.empty")})})}):null]})]})}),pt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:x<=1,onClick:()=>Ut(x-1),children:t.jsx(on,{size:16})}),t.jsxs("span",{className:"page-info",children:[x," / ",pt]}),t.jsx("button",{className:"mini-button",disabled:x>=pt,onClick:()=>Ut(x+1),children:t.jsx(rn,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(R=>{var Ee;const ce=d(R.status),ee=R.invite_user_id!==null,ve=_e[R.invite_user_id!==null?R.commission_status:0]??{label:`#${R.commission_status}`,dotClass:"pending"},Ce=(Ee=Z[R.user_id])==null?void 0:Ee.email;return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>st(R),children:uh(R.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",R.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ce.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:ce.label}),R.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:We=>{We.stopPropagation(),xe(R.trade_no,"mobile")},children:t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===Wl("mobile",R.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:We=>We.stopPropagation(),onClick:We=>We.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{k(null),gt(R.trade_no)},children:[t.jsx(ho,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{k(null),Qt(R.trade_no)},children:[t.jsx(rl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.email")}),t.jsx("span",{className:"value",children:Ce?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{B("user_id"),J(String(R.user_id)),Q(!0),Se(1,String(R.user_id),"user_id")},children:Ce}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",R.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.type")}),t.jsx("span",{className:"value",children:oh[R.type]??`#${R.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:R.plan_name??`Plan #${R.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(R.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.amount")}),t.jsxs("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:[Dt(R.total_amount)," ₫"]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionAmount")}),t.jsx("span",{className:"value",children:ee?t.jsxs("strong",{children:[Dt(R.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),ee&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ve.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ve.label}),R.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:We=>{We.stopPropagation(),we(R.trade_no,"mobile")},children:t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})})]}),T===Wl("mobile",R.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:We=>We.stopPropagation(),onClick:We=>We.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),Et(R.trade_no,1)},children:[t.jsx(ho,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),Et(R.trade_no,3)},children:[t.jsx(rl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:ch(R.created_at)})]})]})]},R.trade_no)}),!G&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:r("order.empty")}):null,pt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:x<=1,onClick:()=>Ut(x-1),children:t.jsx(on,{size:16})}),t.jsxs("span",{className:"page-info",children:[x," / ",pt]}),t.jsx("button",{className:"mini-button",disabled:x>=pt,onClick:()=>Ut(x+1),children:t.jsx(rn,{size:16})})]}):null]})]}),N?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:r("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(null),children:t.jsx(lt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:ie?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(dt,{label:r("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("common.email")}),(It=Z[N.user_id])!=null&&It.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{B("user_id"),J(String(N.user_id)),Q(!0),ne(null),Se(1,String(N.user_id),"user_id")},title:"Filter by this user",children:Z[N.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:N.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.periodLabel")}),t.jsx("span",{children:p(N.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.orderStatus")}),t.jsx("span",{children:d(N.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.planLabel")}),t.jsx("span",{children:N.plan_name??`Plan #${N.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.callbackLabel")}),t.jsx("span",{children:N.callback_no||"-"})]})]}),N.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:r("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.inviterEmail")}),(Rt=Z[N.invite_user_id])!=null&&Rt.email||(Xt=Z[N.user_id])!=null&&Xt.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const R=String(N.invite_user_id);B("invite_user_id"),J(R),Q(!0),ne(null),Se(1,R,"invite_user_id")},title:"Filter by this inviter",children:((ea=Z[N.invite_user_id])==null?void 0:ea.email)||((E=Z[N.user_id])==null?void 0:E.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionAmount")}),t.jsxs("strong",{children:[Dt(N.commission_balance??0)," ₫"]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(_e[N.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(_e[N.commission_status]??{label:`#${N.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.amount")}),t.jsx("span",{children:(Number(N.total_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.balanceLabel")}),t.jsx("span",{children:(Number(N.balance_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.discountLabel")}),t.jsx("span",{children:(Number(N.discount_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.refundLabel")}),t.jsx("span",{children:(Number(N.refund_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.surplusLabel")}),t.jsx("span",{children:(Number(N.surplus_amount??0)/100).toFixed(2)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.createdLabel")}),t.jsx("span",{children:dh(N.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.updatedLabel")}),t.jsx("span",{children:dh(N.updated_at)})]})]})]})})]})}):null,X?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("order.assign")}),t.jsx("p",{children:r("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>le(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ea,children:[t.jsxs("label",{children:[t.jsx("span",{children:r("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:X.email,onChange:R=>le({...X,email:R.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:X.plan_id,onChange:R=>le({...X,plan_id:R.target.value}),children:j.map(R=>t.jsx("option",{value:R.id,children:R.name},R.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.period")}),t.jsx("select",{className:"config-input",value:X.period,onChange:R=>le({...X,period:R.target.value}),children:Object.entries(rh).map(([R,ce])=>t.jsx("option",{value:R,children:ce},R))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[r("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:X.total_amount,onChange:R=>le({...X,total_amount:R.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>le(null),children:r("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ue,children:[t.jsx(ya,{size:16}),r(ue?"order.assigning":"order.assign")]})]})]})]})}):null]})}function bo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function yo(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function ed(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function V0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,x]=f.useState(null),[U,P]=f.useState(!0),[W,J]=f.useState(!1),[S,B]=f.useState(""),[G,O]=f.useState(""),[X,le]=f.useState("");f.useEffect(()=>{b||le("")},[b]);const ue=f.useCallback(async(_=1)=>{P(!0),B("");try{const A=await Iv(_,15);d(A.data),h(A.total)}catch(A){B(A instanceof Error?A.message:l("coupon.loadFailed"))}finally{P(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ue(1),ul().then(y).catch(()=>{})},[ue,s]);async function H(_){var A,k;if(_.preventDefault(),!!b){J(!0),B(""),O("");try{const T=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await e1({id:b.id,name:b.name,type:Number(b.type),value:T,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,limit_use_with_user:b.limit_use_with_user?Number(b.limit_use_with_user):null,limit_plan_ids:b.limit_plan_ids.length?b.limit_plan_ids:null,limit_period:b.limit_period.length?b.limit_period:null,generate_count:b.generate_count?Number(b.generate_count):void 0}),x(null),(A=window.showToast)==null||A.call(window,l("coupon.saveSuccess"),"success"),await ue(m)}catch(T){(k=window.showToast)==null||k.call(window,T instanceof Error?T.message:l("coupon.saveFailed"),"error")}finally{J(!1)}}}async function oe(_){var A;try{await a1(_),await ue(m)}catch(k){(A=window.showToast)==null||A.call(window,k instanceof Error?k.message:l("coupon.toggleFailed"),"error")}}async function re(_){var A;(A=window.showConfirm)==null||A.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var k,T;try{await t1(_),(k=window.showToast)==null||k.call(window,l("coupon.deleteSuccess"),"success"),await ue(m)}catch(F){(T=window.showToast)==null||T.call(window,F instanceof Error?F.message:l("coupon.deleteFailed"),"error")}}})}const se=Math.ceil(p/15);return t.jsxs(At,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[p," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ue(m),disabled:U,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>x(ed()),children:[t.jsx(ba,{size:16}),l("coupon.add")]})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,G?t.jsx("div",{className:"form-success",children:G}):null,U&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(_=>{var F,D;const A=(F=_.limit_plan_ids)==null?void 0:F.map(Q=>{var N;return((N=v.find(ne=>ne.id===Q))==null?void 0:N.name)||`#${Q}`}).join(", "),k=yo(l),T=(D=_.limit_period)==null?void 0:D.map(Q=>k[Q]||Q).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?Dt(_.value):`${_.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",_.limit_use??"∞"]}),_.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[A?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",A]})}):null,T?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",T]})}):null,!A&&!T?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void oe(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[bo(_.started_at)," — ",bo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>x(ed(_)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void re(_.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},_.id)}),!U&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[r.map(_=>{var A,k,T,F;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:`tag type-tag ${_.type===1?"fixed-type":"percent-type"}`,children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{cl(_.code).then(D=>{var Q;(Q=window.showToast)==null||Q.call(window,D?`${l("coupon.copiedCode")}: ${_.code}`:l("common.copyFailed"),D?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(A=_.limit_plan_ids)!=null&&A.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:_.limit_plan_ids.map(D=>{const Q=v.find(N=>N.id===D);return t.jsx("span",{className:"res-pill plan-pill",children:Q?Q.name:`#${D}`},D)})})]}):null,(k=_.limit_period)!=null&&k.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:_.limit_period.map(D=>t.jsx("span",{className:"res-pill cycle-pill",children:yo(l)[D]||D},D))})]}):null,!((T=_.limit_plan_ids)!=null&&T.length)&&!((F=_.limit_period)!=null&&F.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[bo(_.started_at)," — ",bo(_.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void oe(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?Dt(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"}),_.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>x(ed(_)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void re(_.id),"aria-label":l("common.delete"),children:t.jsx(Ot,{size:15})})]})]})]},_.id)}),!U&&r.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),se>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),ue(m-1)},children:t.jsx(on,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",se]}),t.jsx("button",{className:"mini-button",disabled:m>=se,onClick:()=>{j(m+1),ue(m+1)},children:t.jsx(rn,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:H,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:_=>x({...b,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:b.type,onChange:_=>x({...b,type:_.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:_=>x({...b,value:_.target.value})})]})]}),b.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:b.code,onChange:_=>x({...b,code:_.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:_=>x({...b,started_at:_.target.value}),onClick:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)},onFocus:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:_=>x({...b,ended_at:_.target.value}),onClick:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)},onFocus:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:_=>x({...b,limit_use:_.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use_with_user,onChange:_=>x({...b,limit_use_with_user:_.target.value}),placeholder:l("coupon.unlimited")})]})]}),b.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:_=>x({...b,generate_count:_.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),b.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_plan_ids.map(_=>{const A=v.find(k=>k.id===_);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const k=b.limit_plan_ids.filter(T=>T!==_);x({...b,limit_plan_ids:k})},children:[A?A.name:`#${_}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:X,onChange:_=>le(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(_=>_.name.toLowerCase().includes(X.toLowerCase())).map(_=>{const A=b.limit_plan_ids.includes(_.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:A,onChange:k=>{const T=k.target.checked?[...b.limit_plan_ids,_.id]:b.limit_plan_ids.filter(F=>F!==_.id);x({...b,limit_plan_ids:T})}}),t.jsx("span",{children:_.name})]},_.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),b.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_period.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const A=b.limit_period.filter(k=>k!==_);x({...b,limit_period:A})},children:[yo(l)[_]||_," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(yo(l)).map(([_,A])=>{const k=b.limit_period.includes(_);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:k,onChange:T=>{const F=T.target.checked?[...b.limit_period,_]:b.limit_period.filter(D=>D!==_);x({...b,limit_period:F})}}),t.jsx("span",{children:A})]},_)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function vo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function $0(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function td(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Q0(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,x]=f.useState(null),[U,P]=f.useState(!0),[W,J]=f.useState(!1),[S,B]=f.useState(""),[G,O]=f.useState(""),[X,le]=f.useState("");f.useEffect(()=>{b||le("")},[b]);const ue=$0(l),H=f.useCallback(async(_=1)=>{P(!0),B("");try{const A=await n1(_,15);d(A.data),h(A.total)}catch(A){B(A instanceof Error?A.message:l("giftcard.loadFailed"))}finally{P(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}H(1),ul().then(y).catch(()=>{})},[H,s]);async function oe(_){var A,k;if(_.preventDefault(),!!b){J(!0),B(""),O("");try{const T=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await l1({id:b.id,name:b.name,type:Number(b.type),value:T,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,plan_id:b.plan_id?Number(b.plan_id):null,generate_count:b.generate_count?Number(b.generate_count):void 0}),x(null),(A=window.showToast)==null||A.call(window,l("giftcard.saveSuccess"),"success"),await H(m)}catch(T){(k=window.showToast)==null||k.call(window,T instanceof Error?T.message:l("giftcard.saveFailed"),"error")}finally{J(!1)}}}async function re(_){var A;(A=window.showConfirm)==null||A.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var k,T;try{await i1(_),(k=window.showToast)==null||k.call(window,l("giftcard.deleteSuccess"),"success"),await H(m)}catch(F){(T=window.showToast)==null||T.call(window,F instanceof Error?F.message:l("giftcard.deleteFailed"),"error")}}})}const se=Math.ceil(p/15);return t.jsxs(At,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[p," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void H(m),disabled:U,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>x(td()),children:[t.jsx(ba,{size:16}),l("giftcard.add")]})]})]}),S?t.jsx("div",{className:"form-error",children:S}):null,G?t.jsx("div",{className:"form-success",children:G}):null,U&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[r.map(_=>{var A;return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:ue[_.type]??_.type})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?Dt(_.value):_.value})}),t.jsx("td",{children:_.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((A=v.find(k=>k.id===_.plan_id))==null?void 0:A.name)||`#${_.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:_.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[vo(_.started_at)," — ",vo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>x(td(_)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void re(_.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},_.id)}),!U&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[r.map(_=>{var A;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:ue[_.type]??_.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{cl(_.code).then(k=>{var T;(T=window.showToast)==null||T.call(window,k?l("giftcard.copiedCode").replace("{code}",_.code):l("common.copyFailed"),k?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:_.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((A=v.find(k=>k.id===_.plan_id))==null?void 0:A.name)||`#${_.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[vo(_.started_at)," — ",vo(_.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?Dt(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":ue[_.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>x(td(_)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void re(_.id),"aria-label":l("common.delete"),children:t.jsx(Ot,{size:15})})]})]})]},_.id)}),!U&&r.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),se>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),H(m-1)},children:t.jsx(on,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",se]}),t.jsx("button",{className:"mini-button",disabled:m>=se,onClick:()=>{j(m+1),H(m+1)},children:t.jsx(rn,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:oe,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:_=>x({...b,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:b.type,onChange:_=>x({...b,type:_.target.value}),children:Object.entries(ue).map(([_,A])=>t.jsx("option",{value:_,children:A},_))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:_=>x({...b,value:_.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:_=>x({...b,started_at:_.target.value}),onClick:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)},onFocus:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:_=>x({...b,ended_at:_.target.value}),onClick:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)},onFocus:_=>{var A,k;return(k=(A=_.currentTarget).showPicker)==null?void 0:k.call(A)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:_=>x({...b,limit_use:_.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),b.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:_=>x({...b,generate_count:_.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),b.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const _=v.find(A=>String(A.id)===b.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{x({...b,plan_id:""})},children:[_?_.name:`#${b.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:X,onChange:_=>le(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!b.plan_id,onChange:()=>{x({...b,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),v.filter(_=>_.name.toLowerCase().includes(X.toLowerCase())).map(_=>{const A=String(_.id)===b.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:A,onChange:k=>{k.target.checked&&x({...b,plan_id:String(_.id)})}}),t.jsx("span",{children:_.name})]},_.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const X0="模糊";function jo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Z0(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function ph(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function ad(s){return+(s/1073741824).toFixed(2)}function nd(s){return Math.round(s*1073741824)}function wo(s){return(s/1073741824).toFixed(2)}function K0(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function Pl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const yd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],lx="user_visible_columns";function J0(){if(typeof window<"u")try{const s=localStorage.getItem(lx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(yd.filter(s=>s.defaultVisible).map(s=>s.key))}const F0=[{value:"email",label:"Email"},{value:"id",label:"User ID"},{value:"plan_id",label:"Plan ID"},{value:"invite_by_email",label:"Inviter Email"},{value:"invite_user_id",label:"Inviter ID"},{value:"remarks",label:"Remarks"}],W0=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function $t(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function P0(s,l){switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"remarks":return l("user.filterRemarks");default:return""}}function I0(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function ej(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(0),[b,x]=f.useState(1),[U,P]=f.useState(""),[W,J]=f.useState("email"),[S,B]=f.useState(!0),[G,O]=f.useState(""),[X,le]=f.useState(J0),[ue,H]=f.useState(!1),oe=f.useRef(null),[re,se]=f.useState(null),[_,A]=f.useState(null),[k,T]=f.useState({}),[F,D]=f.useState(!1),[Q,N]=f.useState(!1),[ne,ie]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[C,Z]=f.useState(!1),[pe,xe]=f.useState(null),[we,_e]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[Se,Ke]=f.useState(!1),[$e,Ut]=f.useState(null),[gt,Qt]=f.useState(null),[Et,st]=f.useState([]),[bt,Ea]=f.useState(0),[pt,It]=f.useState(1),[Rt]=f.useState(10),[Xt,ea]=f.useState(!1),[E,R]=f.useState("");f.useEffect(()=>{function w(be){const ge=be.target instanceof Element?be.target:null;re!==null&&(!ge||!ge.closest(".action-dropdown-wrap"))&&se(null),ue&&oe.current&&!oe.current.contains(be.target)&&H(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[re,ue]);function ce(w){le(be=>{const ge=new Set(be);ge.has(w)?ge.delete(w):ge.add(w);try{localStorage.setItem(lx,JSON.stringify([...ge]))}catch{}return ge})}const ee=w=>X.has(w),ve=yd.filter(w=>X.has(w.key)).length,Ce=f.useCallback(async(w=1,be,ge)=>{B(!0),O("");try{const Wt=await gd(w,15,be?[{key:ge||"email",condition:ge==="id"||ge==="plan_id"||ge==="invite_user_id"?"=":X0,value:be}]:void 0);d(Wt.data),y(Wt.total)}catch(Le){O(Le instanceof Error?Le.message:l("user.loadFailed"))}finally{B(!1)}},[]),Ee=f.useCallback(async()=>{try{const[w,be]=await Promise.all([ul(),es()]);h(w),j(be)}catch{}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}Ce(1),Ee()},[Ce,Ee,s]);function We(){x(1),Ce(1,U,W)}function cn(){P(""),x(1),Ce(1)}function ta(w){x(w),Ce(w,U,W)}function Yn(w){if(w.plan_name)return w.plan_name;if(!w.plan_id)return"—";const be=p.find(ge=>ge.id===w.plan_id);return be?be.name:`#${w.plan_id}`}function Ma(w){if(!w.group_id)return"—";const be=m.find(ge=>ge.id===w.group_id);return be?be.name:`#${w.group_id}`}function ft(w){return`${w.alive_ip??0} / ${w.device_limit??"∞"}`}async function Jt(w){var Le,Wt;const be=w.subscribe_url;if(!be){(Le=window.showToast)==null||Le.call(window,l("user.toastNoSubscribeUrl"),"error");return}const ge=await cl(be);(Wt=window.showToast)==null||Wt.call(window,l(ge?"user.toastUrlCopied":"common.copyFailed"),ge?"success":"error"),se(null)}function L(w){var be;se(null),(be=window.showConfirm)==null||be.call(window,{message:l("user.confirmResetSecret"),onConfirm:async()=>{var ge,Le;try{await c1(w.id),(ge=window.showToast)==null||ge.call(window,l("user.toastSecretResetSuccess"),"success"),await Ce(b,U,W)}catch(Wt){(Le=window.showToast)==null||Le.call(window,Wt instanceof Error?Wt.message:l("user.toastSecretResetFailed"),"error")}}})}function de(w){var be;se(null),(be=window.showConfirm)==null||be.call(window,{message:l("user.confirmDelete"),onConfirm:async()=>{var ge,Le;try{await o1(w.id),(ge=window.showToast)==null||ge.call(window,l("user.toastDeletedSuccess"),"success"),await Ce(b,U,W)}catch(Wt){(Le=window.showToast)==null||Le.call(window,Wt instanceof Error?Wt.message:l("user.toastDeletedFailed"),"error")}}})}function fe(w){var ge;se(null);const be=w.subscribe_url;if(!be){(ge=window.showToast)==null||ge.call(window,l("user.toastNoSubscribeUrl"),"error");return}Ut({url:be,userId:w.id})}function Ue(w){se(null),s.push(`/order?user_id=${w.id}`)}function Me(w){se(null),s.push(`/subscription?user_id=${w.id}`)}function Pe(w){se(null),J("invite_user_id"),P(String(w.id)),Ce(1,String(w.id),"invite_user_id")}async function Fe(w,be){ea(!0),R("");try{const ge=await h1(w,be,Rt);st(ge.data||[]),Ea(ge.total||0),It(be)}catch(ge){R(ge instanceof Error?ge.message:l("user.historyLoading"))}finally{ea(!1)}}function He(w){se(null),Qt(w),Fe(w.id,1)}function aa(w){se(null),xe(w.email),_e({plan_id:"",period:"month_price",total_amount:""})}async function Ft(w){var be,ge;if(w.preventDefault(),!!pe){Ke(!0);try{await Jh({email:pe,plan_id:Number(we.plan_id),period:we.period,total_amount:(Number(we.total_amount)||0)*100}),(be=window.showToast)==null||be.call(window,l("user.toastAssignSuccess"),"success"),xe(null)}catch(Le){(ge=window.showToast)==null||ge.call(window,Le instanceof Error?Le.message:l("user.toastAssignFailed"),"error")}finally{Ke(!1)}}}function dn(w){se(null),A(w),T({id:w.id,email:w.email,invite_user_email:"",password:"",balance:w.balance,commission_balance:w.commission_balance,u:ad(w.u),d:ad(w.d),transfer_enable:ad(w.transfer_enable),device_limit:w.device_limit,network_settings:w.network_settings??"",expired_at:Z0(w.expired_at),plan_id:w.plan_id,banned:w.banned,commission_type:w.commission_type??0,commission_rate:w.commission_rate??"",discount:w.discount??"",speed_limit:w.speed_limit,is_admin:w.is_admin,is_staff:w.is_staff,remarks:w.remarks??""})}function ot(w,be){T(ge=>({...ge,[w]:be}))}async function ti(w){var be,ge;if(w.preventDefault(),!!_){D(!0);try{const Le={id:_.id,email:k.email,plan_id:k.plan_id||null,expired_at:ph(String(k.expired_at??"")),transfer_enable:nd(Number(k.transfer_enable??0)),speed_limit:k.speed_limit||null,device_limit:k.device_limit||null,u:nd(Number(k.u??0)),d:nd(Number(k.d??0)),balance:Number(k.balance??0),commission_balance:Number(k.commission_balance??0),commission_rate:k.commission_rate!==""&&k.commission_rate!==null?Number(k.commission_rate):null,commission_type:Number(k.commission_type??0),discount:k.discount!==""&&k.discount!==null?Number(k.discount):null,network_settings:k.network_settings||null,remarks:k.remarks||null,is_admin:Number(k.is_admin??0),is_staff:Number(k.is_staff??0),banned:Number(k.banned??0)};k.invite_user_email&&(Le.invite_user_email=k.invite_user_email),k.password&&(Le.password=k.password),await s1(Le),(be=window.showToast)==null||be.call(window,l("user.toastSaveSuccess"),"success"),A(null),await Ce(b,U,W)}catch(Le){(ge=window.showToast)==null||ge.call(window,Le instanceof Error?Le.message:l("user.toastSaveFailed"),"error")}finally{D(!1)}}}async function Vn(w){var be,ge;w.preventDefault(),Z(!0);try{await r1({email_prefix:ne.email_prefix,email_suffix:ne.email_suffix,password:ne.password||void 0,plan_id:ne.plan_id?Number(ne.plan_id):void 0,expired_at:ph(ne.expired_at)}),(be=window.showToast)==null||be.call(window,l("user.toastCreateSuccess"),"success"),N(!1),ie({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Ce(b,U,W)}catch(Le){(ge=window.showToast)==null||ge.call(window,Le instanceof Error?Le.message:l("user.toastCreateFailed"),"error")}finally{Z(!1)}}const Ra=Math.ceil(v/15);return t.jsxs(At,{title:l("user.title"),subtitle:l("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("user.heading")}),t.jsxs("p",{children:[v," ",l("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:oe,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>H(!ue),children:[t.jsx(Yy,{size:16}),l("user.columns")]}),ue?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:l("user.visibleColumns",{count:ve})})}),yd.map(w=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:X.has(w.key),onChange:()=>ce(w.key)}),t.jsx("span",{children:$t(w.key,l)})]},w.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Ce(b,U,W),disabled:S,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(!0),children:[t.jsx(ba,{size:16}),l("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:W,onChange:w=>J(w.target.value),children:F0.map(w=>t.jsx("option",{value:w.value,children:P0(w.value,l)},w.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Eo,{size:16}),t.jsx("input",{className:"config-input search-input",value:U,onChange:w=>P(w.target.value),placeholder:l("user.searchPlaceholder"),onKeyDown:w=>w.key==="Enter"&&We()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:We,children:[t.jsx(Pi,{size:16}),l("user.filter")]}),U?t.jsxs("button",{className:"ghost-button",type:"button",onClick:cn,children:[t.jsx(lt,{size:16}),l("user.clearFilter")]}):null]}),G?t.jsx("div",{className:"form-error",children:G}):null,S&&r.length===0?t.jsx(dt,{label:l("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${S?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[r.map(w=>{const be=wo(w.u+w.d),ge=wo(w.transfer_enable),Le=parseFloat(be);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",w.id]}),t.jsx("span",{className:"user-email",title:w.email,children:w.email})]}),w.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Yn(w)," / ",w.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):Ma(w)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Le>0?Le>parseFloat(ge)*.9?"high":"ok":""}`,children:[be," GB"]})," / ",ge," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:$t("devices",l)}),t.jsx("span",{className:"info-val",children:ft(w)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:$t("expires",l)}),t.jsx("span",{className:"info-val",children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:jo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(w.balance/100).toFixed(2)," ₫ / ",(w.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:$t("joined",l)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:jo(w.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${re===w.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>se(re===w.id?null:w.id),children:[l("user.colActions")," ",t.jsx(Il,{size:14})]}),re===w.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>dn(w),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>aa(w),children:[t.jsx(Kf,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Jt(w),children:[t.jsx(Ua,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>fe(w),children:[t.jsx(Xf,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>L(w),children:[t.jsx(ko,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(w),children:[t.jsx(Qf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Me(w),children:[t.jsx(md,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Pe(w),children:[t.jsx(Ii,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>He(w),children:[t.jsx(Kc,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>de(w),children:[t.jsx(Ot,{size:14}),l("user.actionDelete")]})]}):null]})})]},w.id)}),!S&&r.length===0?t.jsx("div",{className:"empty-state",children:l("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ee("id")&&t.jsx("th",{children:$t("id",l)}),ee("email")&&t.jsx("th",{children:$t("email",l)}),ee("status")&&t.jsx("th",{children:$t("status",l)}),ee("plan")&&t.jsx("th",{children:$t("plan",l)}),ee("group")&&t.jsx("th",{children:$t("group",l)}),ee("used")&&t.jsx("th",{children:$t("used",l)}),ee("traffic")&&t.jsx("th",{children:$t("traffic",l)}),ee("devices")&&t.jsx("th",{children:$t("devices",l)}),ee("expires")&&t.jsx("th",{children:$t("expires",l)}),ee("balance")&&t.jsx("th",{children:$t("balance",l)}),ee("commission")&&t.jsx("th",{children:$t("commission",l)}),ee("joined")&&t.jsx("th",{children:$t("joined",l)}),ee("actions")&&t.jsx("th",{children:$t("actions",l)})]})}),t.jsxs("tbody",{children:[r.map(w=>{const be=wo(w.u+w.d),ge=wo(w.transfer_enable),Le=parseFloat(be);return t.jsxs("tr",{children:[ee("id")&&t.jsx("td",{children:w.id}),ee("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:w.email})}),ee("status")&&t.jsx("td",{children:w.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})}),ee("plan")&&t.jsx("td",{children:Yn(w)}),ee("group")&&t.jsx("td",{children:w.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):Ma(w)}),ee("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Le>0?Le>parseFloat(ge)*.9?"high":"ok":""}`,children:be})}),ee("traffic")&&t.jsx("td",{children:ge}),ee("devices")&&t.jsx("td",{children:ft(w)}),ee("expires")&&t.jsx("td",{children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:jo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ee("balance")&&t.jsx("td",{children:(w.balance/100).toFixed(2)}),ee("commission")&&t.jsx("td",{children:(w.commission_balance/100).toFixed(2)}),ee("joined")&&t.jsx("td",{children:t.jsx("small",{children:jo(w.created_at)})}),ee("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${re===w.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>se(re===w.id?null:w.id),children:[l("user.colActions")," ",t.jsx(Il,{size:14})]}),re===w.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>dn(w),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>aa(w),children:[t.jsx(Kf,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Jt(w),children:[t.jsx(Ua,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>fe(w),children:[t.jsx(Xf,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>L(w),children:[t.jsx(ko,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(w),children:[t.jsx(Qf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Me(w),children:[t.jsx(md,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Pe(w),children:[t.jsx(Ii,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>He(w),children:[t.jsx(Kc,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>de(w),children:[t.jsx(Ot,{size:14}),l("user.actionDelete")]})]}):null]})})]},w.id)}),!S&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:ve,children:t.jsx("div",{className:"empty-state",children:l("user.noUsers")})})}):null]})]})})}),Ra>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:b<=1,onClick:()=>ta(b-1),children:t.jsx(on,{size:16})}),Array.from({length:Math.min(5,Ra)},(w,be)=>{let ge;return Ra<=5||b<=3?ge=be+1:b>=Ra-2?ge=Ra-4+be:ge=b-2+be,t.jsx("button",{className:`mini-button ${ge===b?"active-page":""}`,onClick:()=>ta(ge),children:ge},ge)}),Ra>5?t.jsxs("span",{className:"page-info",children:["… ",Ra]}):null,t.jsx("button",{className:"mini-button",disabled:b>=Ra,onClick:()=>ta(b+1),children:t.jsx(rn,{size:16})})]})}):null]}),_?t.jsx("div",{className:"modal-backdrop",onClick:()=>A(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>A(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:ti,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(k.email??""),onChange:w=>ot("email",w.target.value)})]}),t.jsxs("label",{className:"field-label",children:[l("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(k.invite_user_email??""),onChange:w=>ot("invite_user_email",w.target.value),placeholder:l("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(k.password??""),onChange:w=>ot("password",w.target.value),placeholder:l("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(k.balance??0)/100).toFixed(2)),onChange:w=>ot("balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(k.commission_balance??0)/100).toFixed(2)),onChange:w=>ot("commission_balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.u??0),onChange:w=>ot("u",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.d??0),onChange:w=>ot("d",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(k.transfer_enable??0),onChange:w=>ot("transfer_enable",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(k.device_limit??""),onChange:w=>ot("device_limit",w.target.value?Number(w.target.value):null),placeholder:l("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(k.network_settings??""),onChange:w=>ot("network_settings",w.target.value),placeholder:l("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(k.expired_at??""),onChange:w=>ot("expired_at",w.target.value),onClick:w=>{var be,ge;return(ge=(be=w.currentTarget).showPicker)==null?void 0:ge.call(be)},onFocus:w=>{var be,ge;return(ge=(be=w.currentTarget).showPicker)==null?void 0:ge.call(be)}})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:String(k.plan_id??""),onChange:w=>ot("plan_id",w.target.value?Number(w.target.value):null),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(k.banned??0),onChange:w=>ot("banned",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:l("user.cardActive")}),t.jsx("option",{value:"1",children:l("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(k.commission_type??0),onChange:w=>ot("commission_type",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:l("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:l("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:l("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(k.commission_rate??""),onChange:w=>ot("commission_rate",w.target.value),placeholder:l("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(k.discount??""),onChange:w=>ot("discount",w.target.value),placeholder:l("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(k.speed_limit??""),onChange:w=>ot("speed_limit",w.target.value?Number(w.target.value):null),placeholder:l("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${k.is_admin?"active":""}`,onClick:()=>ot("is_admin",k.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${k.is_staff?"active":""}`,onClick:()=>ot("is_staff",k.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[l("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(k.remarks??""),onChange:w=>ot("remarks",w.target.value),placeholder:l("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:F,children:l(F?"common.processing":"common.save")})]})]})]})}):null,Q?t.jsx("div",{className:"modal-backdrop",onClick:()=>N(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(!1),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Vn,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:ne.email_prefix,onChange:w=>ie({...ne,email_prefix:w.target.value}),placeholder:l("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:ne.email_suffix,onChange:w=>ie({...ne,email_suffix:w.target.value}),placeholder:l("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:ne.password,onChange:w=>ie({...ne,password:w.target.value}),placeholder:l("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:ne.plan_id,onChange:w=>ie({...ne,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:ne.expired_at,onChange:w=>ie({...ne,expired_at:w.target.value}),onClick:w=>{var be,ge;return(ge=(be=w.currentTarget).showPicker)==null?void 0:ge.call(be)},onFocus:w=>{var be,ge;return(ge=(be=w.currentTarget).showPicker)==null?void 0:ge.call(be)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>N(!1),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:C,children:l(C?"user.creating":"user.createUser")})]})]})]})}):null,pe?t.jsx("div",{className:"modal-backdrop",onClick:()=>xe(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>xe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ft,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:pe})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:we.plan_id,onChange:w=>_e({...we,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:l("user.assignPlanSelect")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:we.period,onChange:w=>_e({...we,period:w.target.value}),children:W0.map(w=>t.jsx("option",{value:w.value,children:I0(w.value,l)},w.value))})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:we.total_amount,onChange:w=>_e({...we,total_amount:w.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>xe(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Se,children:l(Se?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
            flex-wrap: wrap;
            gap: 8px;
          }
          .filter-select {
            width: 100% !important;
            flex: 1 1 100%;
          }
          .search-input-wrap {
            width: 100% !important;
            flex: 1 1 100%;
          }
          .filter-bar button {
            flex: 1;
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
      `}}),$e?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ut(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ut(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent($e.url)}`,alt:l("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:l("user.qrCodeUserId",{userId:$e.userId})})]})]})}):null,gt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Qt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:l("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:l("user.dataHistorySub",{email:gt.email,id:gt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Qt(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[E?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:E}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:l("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Et.reduce((w,be)=>w+be.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Et.reduce((w,be)=>w+be.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Et.reduce((w,be)=>w+be.u+be.d,0))})]})]}),Xt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(dt,{label:l("user.historyLoading")})}):Et.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(Kc,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:l("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:l("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("user.historyColDate")}),t.jsx("th",{children:l("user.historyColRate")}),t.jsx("th",{children:l("user.historyColUpload")}),t.jsx("th",{children:l("user.historyColDownload")}),t.jsx("th",{children:l("user.historyColTotal")})]})}),t.jsx("tbody",{children:Et.map(w=>{const be=Pl(w.u),ge=Pl(w.d),Le=Pl(w.u+w.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:K0(w.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(w.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:be}),t.jsx("td",{style:{color:"var(--muted)"},children:ge}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Le})]},w.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:l("user.historyShowingLogs",{start:Math.min((pt-1)*Rt+1,bt),end:Math.min(pt*Rt,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:pt<=1,onClick:()=>Fe(gt.id,pt-1),children:[t.jsx(on,{size:16}),l("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:pt*Rt>=bt,onClick:()=>Fe(gt.id,pt+1),children:[l("user.historyNext"),t.jsx(rn,{size:16})]})]})]})]})]})]})}):null]})}const mh=15,fh=20,tj=["email","id","user_id","plan_id","status"];function Un(s,l){return s?new Date(s*1e3).toLocaleString():l}function aj(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function nj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function ol(s){return+(s/1073741824).toFixed(2)}function ld(s){return Math.round((Number(s)||0)*1073741824)}function lj(s){return s==="email"?"like":"="}function ij(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function hh(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function xh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function gh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function sj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function oj(){const s=wt(),l=Gn(),{t:r}=Re(),[d,p]=f.useState([]),[h,m]=f.useState(0),[j,v]=f.useState(1),[y,b]=f.useState("email"),[x,U]=f.useState(""),[P,W]=f.useState(!0),[J,S]=f.useState(""),[B,G]=f.useState(null),[O,X]=f.useState({}),[le,ue]=f.useState(null),[H,oe]=f.useState(null),[re,se]=f.useState([]),[_,A]=f.useState(0),[k,T]=f.useState(1),[F,D]=f.useState(!1),[Q,N]=f.useState(""),[ne,ie]=f.useState(null),C=f.useCallback(async(E=1,R="",ce="email")=>{W(!0),S("");try{const ee=R.trim()?[{key:ce,condition:lj(ce),value:R.trim()}]:void 0,ve=await d1(E,mh,ee);p(ve.data),m(ve.total),v(E)}catch(ee){S(ee instanceof Error?ee.message:r("subscription.loadFailed"))}finally{W(!1)}},[r]),Z=f.useCallback(async(E,R=1)=>{D(!0),N("");try{const ce=await Wh(R,fh,[{key:"subscription_id",condition:"=",value:String(E.id)}]);se(ce.data),A(ce.total),T(R)}catch(ce){N(ce instanceof Error?ce.message:r("subscription.slotsLoadFailed"))}finally{D(!1)}},[r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const E=new URLSearchParams(l.search),ce=[["user_id",E.get("user_id")],["id",E.get("id")],["plan_id",E.get("plan_id")],["email",E.get("email")],["status",E.get("status")]].find(([,ee])=>ee&&ee.trim());if(ce){const[ee,ve]=ce,Ce=ve??"";b(ee),U(Ce),C(1,Ce,ee);return}C()},[C,l.search,s]);function pe(E){E.preventDefault(),C(1,x,y)}function xe(){if(U(""),l.search){s.replace("/subscription");return}C(1,"",y)}function we(E){G(E),X({transfer_enable:String(ol(E.transfer_enable)),u:String(ol(E.u)),d:String(ol(E.d)),device_limit:E.device_limit===null?"":String(E.device_limit),speed_limit:E.speed_limit===null?"":String(E.speed_limit),expired_at:aj(E.expired_at),status:E.status,auto_renewal:String(E.auto_renewal||0),remarks:E.remarks??""})}async function _e(E){var R,ce;if(E.preventDefault(),!!B){ue(B.id);try{await p1({id:B.id,transfer_enable:ld(O.transfer_enable),u:ld(O.u),d:ld(O.d),device_limit:O.device_limit===""?null:Number(O.device_limit),speed_limit:O.speed_limit===""?null:Number(O.speed_limit),expired_at:nj(O.expired_at),status:O.status,auto_renewal:Number(O.auto_renewal),remarks:O.remarks}),G(null),(R=window.showToast)==null||R.call(window,r("subscription.updateSuccess"),"success"),await C(j,x,y)}catch(ee){(ce=window.showToast)==null||ce.call(window,ee instanceof Error?ee.message:r("subscription.saveFailed"),"error")}finally{ue(null)}}}function Se(E){var R;(R=window.showConfirm)==null||R.call(window,{message:r("subscription.resetConfirm",{id:E.id}),onConfirm:async()=>{var ce,ee;ue(E.id);try{await m1(E.id),(ce=window.showToast)==null||ce.call(window,r("subscription.resetSuccess"),"success"),await C(j,x,y)}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("subscription.resetFailed"),"error")}finally{ue(null)}}})}async function Ke(E){var ce;if(!E)return;const R=await cl(E);(ce=window.showToast)==null||ce.call(window,r(R?"subscription.copySuccess":"common.copyFailed"),R?"success":"error")}async function $e(E){var R,ce;ie(E.id);try{let ee=E.subscribe_url||null;if(ee||(ee=(await u1(E.id)).data,ee&&p(Ce=>Ce.map(Ee=>Ee.id===E.id?{...Ee,subscribe_url:ee}:Ee))),!ee){(R=window.showToast)==null||R.call(window,r("common.copyFailed"),"error");return}await Ke(ee)}catch(ee){(ce=window.showToast)==null||ce.call(window,ee instanceof Error?ee.message:r("common.copyFailed"),"error")}finally{ie(null)}}function Ut(E){oe(E),se([]),A(0),T(1),Z(E,1)}function gt(E=k){return H?Z(H,E):Promise.resolve()}function Qt(E){var R;(R=window.showConfirm)==null||R.call(window,{message:r("subscription.unbindConfirm"),onConfirm:async()=>{var ce,ee;ue(E.id);try{await Ph(E.id),(ce=window.showToast)==null||ce.call(window,r("subscription.unbindSuccess"),"success"),await Promise.all([gt(),C(j,x,y)])}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("subscription.unbindFailed"),"error")}finally{ue(null)}}})}function Et(E){var R;(R=window.showConfirm)==null||R.call(window,{message:r("subscription.banConfirm"),onConfirm:async()=>{var ce,ee;ue(E.id);try{await Ih(E.id),(ce=window.showToast)==null||ce.call(window,r("subscription.banSuccess"),"success"),await Promise.all([gt(),C(j,x,y)])}catch(ve){(ee=window.showToast)==null||ee.call(window,ve instanceof Error?ve.message:r("subscription.banFailed"),"error")}finally{ue(null)}}})}function st(E){const R=E.device_limit&&E.device_limit>0?String(E.device_limit):r("subscription.unlimited"),ce=!!(E.device_count||E.device_limit&&E.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:E.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:R})]}),E.device_limit&&E.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(E.device_count/E.device_limit*100))}%`}})}):t.jsx("small",{children:r("subscription.noDeviceLimit")}),ce?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ut(E),children:[t.jsx(md,{size:14}),t.jsx("span",{children:r("subscription.manageUuids")})]}):null]})}function bt(E){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[ol(E.total_used)," / ",ol(E.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${sj(E)}%`}})}),t.jsx("small",{children:r("subscription.uploadDownload",{upload:ol(E.u),download:ol(E.d)})})]})}function Ea(E){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]}),t.jsx("small",{children:r("subscription.primaryUuid")})]})}function pt(E){return t.jsxs("div",{className:"subscription-link-stack",children:[Ea(E),E.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.subscribe_url,onClick:()=>void $e(E),disabled:ne===E.id,children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.subscribe_url})]}),t.jsx("small",{children:r("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void $e(E),disabled:ne===E.id,children:[t.jsx(Ua,{size:14}),t.jsx("span",{children:ne===E.id?r("common.processing"):r("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:r("subscription.colSubscribeUrl")})]})]})}function It(E){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>we(E),children:[t.jsx(Ct,{size:14}),r("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:le===E.id,onClick:()=>Se(E),children:[t.jsx(ko,{size:14}),r("subscription.resetSecret")]})]})}const Rt=Math.ceil(h/mh),Xt=Math.ceil(_/fh),ea=Rt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:j<=1||P,onClick:()=>void C(j-1,x,y),children:[t.jsx(on,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:j,total:Rt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:j>=Rt||P,onClick:()=>void C(j+1,x,y),children:[r("common.next"),t.jsx(rn,{size:14})]})]}):null;return t.jsxs(At,{title:r("subscription.title"),subtitle:r("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .subscription-table {
          min-width: 1160px;
          table-layout: fixed;
        }
        .subscription-table th,
        .subscription-table td {
          padding: 13px 14px;
        }
        .subscription-table th:nth-child(1) { width: 230px; }
        .subscription-table th:nth-child(2) { width: 94px; }
        .subscription-table th:nth-child(3) { width: 190px; }
        .subscription-table th:nth-child(4) { width: 145px; }
        .subscription-table th:nth-child(5) { width: 118px; }
        .subscription-table th:nth-child(6) { width: 250px; }
        .subscription-table th:nth-child(7) { width: 118px; }
        .subscription-table th:nth-child(8) { width: 106px; }
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
        .subscription-email,
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
        .subscription-actions {
          flex-wrap: wrap;
          align-items: stretch;
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
        .subscription-card-link-block {
          display: grid;
          gap: 8px;
          border: 1px solid var(--line);
          border-radius: 8px;
          background: var(--surface-soft);
          padding: 10px;
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
        @media (max-width: 768px) {
          .subscription-table {
            min-width: 0;
          }
          .toolbar-row {
            align-items: stretch;
          }
          .subscription-filter {
            flex-direction: column;
            align-items: stretch;
          }
          .subscription-filter .filter-select {
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
          .subscription-actions {
            width: 100%;
          }
          .subscription-actions .mini-button {
            flex: 1;
            min-width: 0;
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
          .pagination {
            flex-wrap: wrap;
          }
        }
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.heading")}),t.jsx("p",{children:r("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:P,onClick:()=>void C(j,x,y),children:[t.jsx(zt,{size:16}),r(P?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:pe,children:[t.jsx("select",{className:"config-input filter-select",value:y,onChange:E=>b(E.target.value),children:tj.map(E=>t.jsx("option",{value:E,children:ij(E,r)},E))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Eo,{size:16}),t.jsx("input",{className:"config-input",value:x,onChange:E=>U(E.target.value),placeholder:r("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(Pi,{size:16}),r("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:xe,children:r("common.clearFilter")})]}),J?t.jsx("div",{className:"form-error",children:J}):null,P&&d.length===0?t.jsx(dt,{label:r("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[r("subscription.colUser")," / ",r("subscription.colPlan")]}),t.jsx("th",{children:r("subscription.colStatus")}),t.jsx("th",{children:r("subscription.colTraffic")}),t.jsx("th",{children:r("subscription.colDevices")}),t.jsx("th",{children:r("subscription.colExpires")}),t.jsxs("th",{children:[r("subscription.colPrimaryUuid")," / ",r("subscription.colSubscribeUrl")]}),t.jsx("th",{children:r("subscription.colUpdated")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(E=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",E.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:E.plan_name??"-"}),t.jsx("strong",{className:"subscription-email",children:E.user_email??"-"}),t.jsxs("small",{children:[r("subscription.userId",{id:E.user_id}),E.plan_id?` - ${r("subscription.planId",{id:E.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${E.status}`,children:hh(E.status,r)})}),t.jsx("td",{children:bt(E)}),t.jsx("td",{children:st(E)}),t.jsx("td",{children:Un(E.expired_at,r("subscription.never"))}),t.jsx("td",{children:pt(E)}),t.jsx("td",{children:Un(E.updated_at,r("subscription.never"))}),t.jsx("td",{children:It(E)})]},E.id)),!P&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(E=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",E.id]}),t.jsx("strong",{className:"subscription-plan-name",children:E.plan_name??"-"}),t.jsx("small",{children:E.user_email??r("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${E.status}`,children:hh(E.status,r)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colTraffic")}),bt(E)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colDevices")}),st(E)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colExpires")}),t.jsx("strong",{children:Un(E.expired_at,r("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colUpdated")}),t.jsx("strong",{children:Un(E.updated_at,r("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:pt(E)}),It(E)]},E.id)),!P&&d.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.empty")}):null]}),ea,H?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>oe(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.slotsTitle",{id:H.id})}),t.jsx("p",{children:H.user_email??r("subscription.userId",{id:H.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>oe(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[Q?t.jsx("div",{className:"form-error",children:Q}):null,F&&re.length===0?t.jsx(dt,{label:r("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("subscription.slotUuid")}),t.jsx("th",{children:r("subscription.slotStatus")}),t.jsx("th",{children:r("subscription.slotHwid")}),t.jsx("th",{children:r("subscription.slotClient")}),t.jsx("th",{children:r("subscription.slotIp")}),t.jsx("th",{children:r("subscription.slotFirstSeen")}),t.jsx("th",{children:r("subscription.slotLastSeen")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[re.map(E=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${gh(E.status)}`,children:xh(E.status,r)})}),t.jsx("td",{children:E.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.hwid,onClick:()=>Ke(E.hwid),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:E.user_agent??"",children:E.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:E.last_ip??"-"}),t.jsx("small",{children:E.first_ip?r("subscription.firstIp",{ip:E.first_ip}):"-"})]}),t.jsx("td",{children:Un(E.first_seen_at,"-")}),t.jsx("td",{children:Un(E.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===E.id,onClick:()=>Qt(E),children:[t.jsx(hd,{size:14}),r("subscription.unbind")]}),E.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===E.id,onClick:()=>Et(E),children:[t.jsx(rl,{size:14}),r("subscription.ban")]}):null]})})]},E.id)),!F&&re.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[re.map(E=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:r("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${gh(E.status)}`,children:xh(E.status,r)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotHwid")}),E.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.hwid,onClick:()=>Ke(E.hwid),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:E.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotIp")}),t.jsx("span",{className:"mono",children:E.last_ip??"-"}),t.jsx("small",{children:E.first_ip?r("subscription.firstIp",{ip:E.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotClient")}),t.jsx("small",{title:E.user_agent??"",children:E.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotFirstSeen")}),t.jsx("span",{children:Un(E.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotLastSeen")}),t.jsx("span",{children:Un(E.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===E.id,onClick:()=>Qt(E),children:[t.jsx(hd,{size:14}),r("subscription.unbind")]}),E.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===E.id,onClick:()=>Et(E),children:[t.jsx(rl,{size:14}),r("subscription.ban")]}):null]})]},E.id)),!F&&re.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")}):null]}),Xt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:k<=1||F,onClick:()=>void gt(k-1),children:[t.jsx(on,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:k,total:Xt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:k>=Xt||F,onClick:()=>void gt(k+1),children:[r("common.next"),t.jsx(rn,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>G(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??r("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>G(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:_e,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[r("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.transfer_enable,onChange:E=>X(R=>({...R,transfer_enable:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.u,onChange:E=>X(R=>({...R,u:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.d,onChange:E=>X(R=>({...R,d:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.device_limit,onChange:E=>X(R=>({...R,device_limit:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.speed_limit,onChange:E=>X(R=>({...R,speed_limit:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:O.expired_at,onChange:E=>X(R=>({...R,expired_at:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.status"),t.jsxs("select",{className:"config-input",value:O.status,onChange:E=>X(R=>({...R,status:E.target.value})),children:[t.jsx("option",{value:"active",children:r("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:r("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[r("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:O.auto_renewal,onChange:E=>X(R=>({...R,auto_renewal:E.target.value})),children:[t.jsx("option",{value:"0",children:r("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:r("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[r("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:O.remarks,onChange:E=>X(R=>({...R,remarks:E.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>G(null),children:r("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:le===B.id,children:le===B.id?r("common.processing"):r("common.save")})]})]})]})}):null]})}const bh=15,rj=["email","user_id","hwid","last_ip"];function id(s){return s?new Date(s*1e3).toLocaleString():"-"}function cj(s){return s==="user_id"?"=":"like"}function dj(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"last_ip":return l("device.filterIp");default:return""}}function uj(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function yh(s){return(s.online_ips??[]).join(", ")||"-"}function vh(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function pj(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState("email"),[b,x]=f.useState(""),[U,P]=f.useState(!0),[W,J]=f.useState(""),[S,B]=f.useState(null),[G,O]=f.useState(null),X=f.useCallback(async(k=1,T="",F="email")=>{P(!0),J("");try{const D=T.trim()?[{key:F,condition:cj(F),value:T.trim()}]:void 0,Q=await Wh(k,bh,D);d(Q.data),h(Q.total),j(k)}catch(D){J(D instanceof Error?D.message:l("device.loadFailed"))}finally{P(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}X()},[X,s]);function le(k){k.preventDefault(),X(1,b,v)}function ue(){x(""),X(1,"",v)}async function H(k){var F;if(!k.hwid)return;const T=await cl(k.hwid);(F=window.showToast)==null||F.call(window,l(T?"device.copySuccess":"common.copyFailed"),T?"success":"error")}async function oe(k){var F;const T=await cl(k.uuid);(F=window.showToast)==null||F.call(window,l(T?"device.copyUuidSuccess":"common.copyFailed"),T?"success":"error")}function re(k){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.unbindConfirm"),onConfirm:async()=>{var F,D;B(k.id);try{await Ph(k.id),(F=window.showToast)==null||F.call(window,l("device.unbindSuccess"),"success"),await X(m,b,v)}catch(Q){(D=window.showToast)==null||D.call(window,Q instanceof Error?Q.message:l("device.unbindFailed"),"error")}finally{B(null)}}})}function se(k){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.banConfirm"),onConfirm:async()=>{var F,D;B(k.id);try{await Ih(k.id),(F=window.showToast)==null||F.call(window,l("device.banSuccess"),"success"),await X(m,b,v)}catch(Q){(D=window.showToast)==null||D.call(window,Q instanceof Error?Q.message:l("device.banFailed"),"error")}finally{B(null)}}})}function _(k){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.resetConfirm",{user:k.user_email??`#${k.user_id}`}),onConfirm:async()=>{var F,D;O(k.user_id);try{await f1(k.user_id),(F=window.showToast)==null||F.call(window,l("device.resetSuccess"),"success"),await X(m,b,v)}catch(Q){(D=window.showToast)==null||D.call(window,Q instanceof Error?Q.message:l("device.resetFailed"),"error")}finally{O(null)}}})}const A=Math.ceil(p/bh);return t.jsxs(At,{title:l("device.title"),subtitle:l("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .device-table {
          min-width: 1480px;
        }
        .device-hwid {
          max-width: 330px;
        }
        .device-hwid span {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .device-client {
          max-width: 260px;
        }
        .device-client small {
          max-width: 260px;
        }
        .device-connection {
          min-width: 210px;
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
          max-width: 260px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        @media (max-width: 720px) {
          .device-filter-form {
            flex-direction: column;
            align-items: stretch;
          }
          .device-filter-form .filter-select {
            width: 100% !important;
          }
        }
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("device.heading")}),t.jsx("p",{children:l("device.total",{count:p})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:U,onClick:()=>void X(m,b,v),children:[t.jsx(zt,{size:16}),l(U?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:le,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:k=>y(k.target.value),children:rj.map(k=>t.jsx("option",{value:k,children:dj(k,l)},k))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Eo,{size:16}),t.jsx("input",{className:"config-input",value:b,onChange:k=>x(k.target.value),placeholder:l("device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(Pi,{size:16}),l("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ue,children:l("device.clear")})]}),W?t.jsx("div",{className:"form-error",children:W}):null,U&&r.length===0?t.jsx(dt,{label:l("device.loading")}):null,t.jsxs("section",{className:"panel table-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("device.user")}),t.jsx("th",{children:l("device.plan")}),t.jsx("th",{children:l("device.boundLimit")}),t.jsx("th",{children:l("device.status")}),t.jsx("th",{children:l("device.connection")}),t.jsx("th",{children:l("device.uuid")}),t.jsx("th",{children:l("device.hwid")}),t.jsx("th",{children:l("device.client")}),t.jsx("th",{children:l("device.ip")}),t.jsx("th",{children:l("device.firstSeen")}),t.jsx("th",{children:l("device.lastSeen")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(k=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{children:k.user_email??"-"}),t.jsxs("small",{children:["ID: ",k.user_id]})]}),t.jsxs("td",{children:[t.jsx("strong",{children:k.plan_name??"-"}),k.user_plan_id?t.jsxs("small",{children:["#",k.user_plan_id]}):null]}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[k.user_device_count," / ",k.user_device_limit&&k.user_device_limit>0?k.user_device_limit:l("device.unlimited")]})}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:uj(k.status,l)})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${k.is_online?"online":"offline"}`,children:[k.is_online?t.jsx(bv,{size:14}):t.jsx(gv,{size:14}),k.is_online?l("device.online"):l("device.offline")]}),t.jsxs("small",{title:yh(k),children:[l("device.onlineIps"),": ",yh(k)]}),t.jsxs("small",{title:vh(k),children:[l("device.onlineNodes"),": ",vh(k)]}),t.jsxs("small",{children:[l("device.lastOnline"),": ",id(k.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-hwid",children:t.jsxs("button",{className:"copy-value",type:"button",title:k.uuid,onClick:()=>oe(k),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:k.uuid})]})}),t.jsx("td",{className:"device-hwid",children:k.hwid?t.jsxs("button",{className:"copy-value",type:"button",title:k.hwid,onClick:()=>H(k),children:[t.jsx(Ua,{size:14}),t.jsx("span",{className:"mono",children:k.hwid})]}):"-"}),t.jsx("td",{className:"device-client",children:t.jsx("small",{title:k.user_agent??"",children:k.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:k.last_ip??"-"}),t.jsx("small",{children:k.first_ip?`${l("device.firstIp")}: ${k.first_ip}`:"-"})]}),t.jsx("td",{children:id(k.first_seen_at)}),t.jsx("td",{children:id(k.last_seen_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:S===k.id,onClick:()=>re(k),children:[t.jsx(hd,{size:14}),l("device.unbind")]}),k.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:S===k.id,onClick:()=>se(k),children:[t.jsx(rl,{size:14}),l("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:G===k.user_id,onClick:()=>_(k),children:[t.jsx(sv,{size:14}),l("device.resetUser")]})]})})]},k.id)),!U&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:12,children:t.jsx("div",{className:"empty-state",children:l("device.empty")})})}):null]})]})}),A>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:m<=1||U,onClick:()=>void X(m-1,b,v),children:[t.jsx(on,{size:14}),l("device.previous")]}),t.jsx("span",{className:"page-info",children:l("device.page",{page:m,total:A})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:m>=A||U,onClick:()=>void X(m+1,b,v),children:[l("device.next"),t.jsx(rn,{size:14})]})]}):null]})]})}const mj={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function zd(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return zd(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function jh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:zd(s.plan_id)}:{...mj}}function sd(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function fj(s){const l=Number(s);if(!l)return"-";const r=new Date(l*1e3);return Number.isNaN(r.getTime())?"-":r.toLocaleString()}function hj(s){return Number(s)===1}function wh(s,l){if(!s.length)return"All plans";const r=new Map(l.map(d=>[Number(d.id),d.name]));return s.map(d=>r.get(d)??`#${d}`).join(", ")}function Rn(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function xj(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,x]=f.useState(!1),[U,P]=f.useState(null),[W,J]=f.useState(""),S=f.useCallback(async()=>{y(!0),J("");try{const[H,oe]=await Promise.all([z1(),ul()]);d(H),h(oe)}catch(H){J(H instanceof Error?H.message:l("webcon.toastLoadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}S()},[S,s]);const B=f.useMemo(()=>p.map(H=>({id:Number(H.id),name:H.name})),[p]);function G(H,oe){j(re=>re&&{...re,[H]:oe})}function O(H,oe){j(re=>{if(!re)return re;const se=oe?Array.from(new Set([...re.plan_ids,H])):re.plan_ids.filter(_=>_!==H);return{...re,plan_ids:se}})}async function X(H){var re,se;if(H.preventDefault(),!m)return;const oe=sd(m.domain);x(!0),J("");try{await T1({id:m.id,email:m.email.trim(),domain:oe,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),j(null),(re=window.showToast)==null||re.call(window,l("webcon.toastSaveSuccess"),"success"),await S()}catch(_){const A=_ instanceof Error?_.message:l("webcon.toastSaveFailed");J(A),(se=window.showToast)==null||se.call(window,A,"error")}finally{x(!1)}}async function le(H){var oe,re;P(H.id);try{await M1(H.id),(oe=window.showToast)==null||oe.call(window,l("webcon.toastToggleSuccess"),"success"),await S()}catch(se){const _=se instanceof Error?se.message:l("webcon.toastToggleFailed");J(_),(re=window.showToast)==null||re.call(window,_,"error")}finally{P(null)}}function ue(H){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var re,se;P(H.id),J("");try{await E1(H.id),(re=window.showToast)==null||re.call(window,l("webcon.toastDeleteSuccess"),"success"),await S()}catch(_){const A=_ instanceof Error?_.message:l("webcon.toastDeleteFailed");J(A),(se=window.showToast)==null||se.call(window,A,"error")}finally{P(null)}}})}return t.jsxs(At,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:r.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void S(),children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(jh()),children:[t.jsx(ba,{size:16}),l("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[r.map(H=>{var re;const oe=zd(H.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",H.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${hj(H.status)?"active":""}`,type:"button",disabled:U===H.id,onClick:()=>void le(H),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:H.email??"-"}),t.jsx("small",{children:Number(H.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:H.domain}),t.jsxs("small",{children:["/",String(((re=window.settings)==null?void 0:re.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:H.title||"-"}),t.jsx("small",{children:H.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Jy,{size:13}),H.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(ts,{size:13}),H.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:wh(oe,B)}),t.jsx("small",{children:oe.length?`${oe.length} selected`:"not restricted"})]})}),t.jsx("td",{children:fj(H.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(jh(H)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:U===H.id,onClick:()=>ue(H),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},H.id)}),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>j(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:H=>H.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>j(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:X,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Rn("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:H=>G("email",H.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Rn("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:H=>G("domain",H.target.value),onBlur:H=>G("domain",sd(H.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Rn("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:H=>G("title",H.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Rn("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:H=>G("description",H.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Rn("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:H=>G("logo",H.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Rn("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:H=>G("background_url",H.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Rn("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(H=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(H.id),onChange:oe=>O(H.id,oe.target.checked)}),t.jsx("span",{children:H.name})]},H.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Rn("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:H=>G("custom_html",H.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(lv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:sd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(kd,{size:12})," ",wh(m.plan_ids,B)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Nh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function od(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function gj(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,x]=f.useState(""),[U,P]=f.useState(""),W=f.useCallback(async()=>{j(!0),x("");try{d(await x1())}catch(G){x(G instanceof Error?G.message:l("notice.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function J(G){var O,X;if(G.preventDefault(),!!p){y(!0),x(""),P("");try{const le=p.tags?p.tags.split(",").map(ue=>ue.trim()).filter(Boolean):[];await g1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:le.length?le:null}),h(null),(O=window.showToast)==null||O.call(window,l("notice.saveSuccess"),"success"),await W()}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("notice.saveFailed"),"error")}finally{y(!1)}}}async function S(G){var O;try{await y1(G),await W()}catch(X){(O=window.showToast)==null||O.call(window,X instanceof Error?X.message:l("notice.toggleFailed"),"error")}}async function B(G){var O;(O=window.showConfirm)==null||O.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var X,le;try{await b1(G),(X=window.showToast)==null||X.call(window,l("notice.deleteSuccess"),"success"),await W()}catch(ue){(le=window.showToast)==null||le.call(window,ue instanceof Error?ue.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[r.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(od()),children:[t.jsx(ba,{size:16}),l("notice.addNotice")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,U?t.jsx("div",{className:"form-success",children:U}):null,m&&r.length===0?t.jsx(dt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(G=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:G.id}),t.jsx("td",{children:t.jsx("strong",{children:G.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${G.show?"active":""}`,type:"button",onClick:()=>void S(G.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((O=G.tags)==null?void 0:O.map((X,le)=>t.jsx("span",{className:"tag",children:X},le)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Nh(G.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(od(G)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(G.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},G.id)}),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[r.map(G=>t.jsxs("div",{className:`notice-mobile-card ${G.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",G.id]})}),t.jsx("button",{className:`admin-switch ${G.show?"active":""}`,type:"button",onClick:()=>void S(G.id),"aria-label":G.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:G.title}),t.jsx("div",{className:"notice-tags",children:G.tags&&G.tags.length>0?G.tags.map((O,X)=>t.jsx("span",{className:"tag-badge",children:O},X)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",Nh(G.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(od(G)),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(G.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},G.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:J,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:G=>h({...p,title:G.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:G=>h({...p,content:G.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:G=>h({...p,img_url:G.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:G=>h({...p,tags:G.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function rd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const _h=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},cd=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function bj(){var _;const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!1),[v,y]=f.useState(null),[b,x]=f.useState(""),[U,P]=f.useState(!0),[W,J]=f.useState(!1),[S,B]=f.useState(""),G=f.useRef(null),[O,X]=f.useState([]),[le,ue]=f.useState(null),H=f.useCallback(async()=>{P(!0),B("");try{d(await v1())}catch(A){B(A instanceof Error?A.message:"Load failed")}finally{P(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}H(),ul().then(A=>{A&&X(A)}).catch(()=>{})},[H,s]),f.useEffect(()=>{var A;(A=G.current)==null||A.scrollIntoView({behavior:"smooth"})},[p]);async function oe(A){var k;y(A),x(""),h(null),ue(null),j(!0);try{const T=await If(A);if(h(T),T&&T.user_id)try{const F=await Fh(T.user_id);F&&F.data&&ue(F.data)}catch(F){console.error("Failed to load user info:",F)}}catch{(k=window.showToast)==null||k.call(window,"Failed to load message thread","error")}finally{j(!1)}}async function re(A){var k,T;if(A.preventDefault(),!(!v||!b.trim())){J(!0),B("");try{await j1(v,b),x(""),(k=window.showToast)==null||k.call(window,"Reply sent!","success");try{const F=await If(v);h(F)}catch{}await H()}catch(F){(T=window.showToast)==null||T.call(window,F instanceof Error?F.message:"Reply failed","error")}finally{J(!1)}}}async function se(A){var k;(k=window.showConfirm)==null||k.call(window,{message:"Close this ticket?",onConfirm:async()=>{var T,F;B("");try{await w1(A),(T=window.showToast)==null||T.call(window,"Ticket closed!","success"),v===A&&(y(null),h(null)),await H()}catch(D){B(D instanceof Error?D.message:"Close failed"),(F=window.showToast)==null||F.call(window,D instanceof Error?D.message:"Close failed","error")}}})}return t.jsxs(At,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[r.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:U,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),S?t.jsx("div",{className:"form-error",children:S}):null,U&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(A=>{const k=_h(A.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("strong",{children:A.subject})}),t.jsxs("td",{children:["#",A.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:cd(A.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${k.cls}`,children:k.label})}),t.jsx("td",{children:A.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:rd(A.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:A.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void oe(A.id),children:[t.jsx(Zi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void se(A.id),children:[t.jsx(fd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void oe(A.id),children:[t.jsx(Zi,{size:14}),l("ticket.viewHistory")]})})})]},A.id)}),!U&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[r.map(A=>{const k=_h(A.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:A.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:cd(A.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",A.id]})]}),t.jsx("span",{className:`status-pill ${k.cls}`,children:k.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",A.user_id]})]}),t.jsx("span",{children:A.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:rd(A.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:A.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void oe(A.id),children:[t.jsx(Zi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void se(A.id),children:[t.jsx(fd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void oe(A.id),children:[t.jsx(Zi,{size:14}),l("ticket.viewHistory")]})})]},A.id)}),!U&&r.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${l("ticket.ticketDetail")}: ${p.subject}`:`${l("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[l("ticket.user"),": #",p==null?void 0:p.user_id," | ",l("ticket.level"),": ",p!=null?cd(p.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{y(null),h(null)},children:t.jsx(lt,{size:18})})]}),le&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:le.email,children:le.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((_=O.find(A=>A.id===le.plan_id))==null?void 0:_.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[Dt(le.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:le.expired_at?new Date(le.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(dt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(A=>{const k=A.is_me;return t.jsxs("div",{className:`chat-message ${k?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:A.message}),t.jsxs("div",{className:"chat-meta",children:[k?l("ticket.staff"):`${l("ticket.user")} #${A.user_id}`," • ",rd(A.created_at)]})]},A.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:G})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:re,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:b,onChange:A=>x(A.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!b.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(Yh,{size:14}),W?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Sh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const kh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Ch(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function yj(){const s=wt(),{t:l}=Re(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,x]=f.useState(""),[U,P]=f.useState(""),W=f.useCallback(async()=>{j(!0),x("");try{d(await N1())}catch(O){x(O instanceof Error?O.message:l("knowledge.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function J(O){var X;try{const le=await _1(O.id);h(Ch(le))}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("knowledge.detailFailed"),"error")}}async function S(O){var X,le;if(O.preventDefault(),!!p){y(!0),x(""),P("");try{await S1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(X=window.showToast)==null||X.call(window,l("knowledge.saveSuccess"),"success"),await W()}catch(ue){(le=window.showToast)==null||le.call(window,ue instanceof Error?ue.message:l("knowledge.saveFailed"),"error")}finally{y(!1)}}}async function B(O){var X;try{await C1(O),await W()}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("knowledge.toggleFailed"),"error")}}async function G(O){var X;(X=window.showConfirm)==null||X.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var le,ue;try{await k1(O),(le=window.showToast)==null||le.call(window,l("knowledge.deleteSuccess"),"success"),await W()}catch(H){(ue=window.showToast)==null||ue.call(window,H instanceof Error?H.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[r.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Ch()),children:[t.jsx(ba,{size:16}),l("knowledge.addArticle")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,U?t.jsx("div",{className:"form-success",children:U}):null,m&&r.length===0?t.jsx(dt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(O=>t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:O.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:O.title})}),t.jsx("td",{children:O.language&&kh[O.language]||O.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:O.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Sh(O.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void J(O),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(O.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},O.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[r.map(O=>t.jsxs("div",{className:`knowledge-mobile-card ${O.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",O.id]}),O.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",O.sort]})]}),t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":O.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:O.title}),t.jsxs("div",{className:"card-meta",children:[O.category&&t.jsx("span",{className:"category-badge",children:O.category}),O.language&&t.jsx("span",{className:"lang-badge",children:kh[O.language]||O.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",Sh(O.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void J(O),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void G(O.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},O.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(lt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:S,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:O=>h({...p,category:O.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:O=>h({...p,title:O.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:O=>h({...p,body:O.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:O=>h({...p,language:O.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:O=>h({...p,sort:O.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function vj(){const s=wt(),{t:l}=Re(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(null),[v,y]=f.useState(""),[b,x]=f.useState(!0),[U,P]=f.useState(""),W=f.useCallback(async()=>{x(!0),P("");try{const[S,B,G,O]=await Promise.all([D1().catch(()=>({data:{}})),O1().catch(()=>({data:{}})),A1().catch(()=>({data:[]})),U1().catch(()=>({data:""}))]);d(S.data),h(B.data),j(G.data),y(typeof O.data=="string"?O.data:"")}catch(S){P(S instanceof Error?S.message:l("queue.toastLoadFailed"))}finally{x(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);function J(S,B,G){return S?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[G," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(S).map(([O,X])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:O}),t.jsx("strong",{children:typeof X=="object"?JSON.stringify(X):String(X??"—")})]},O))})]}):null}return t.jsxs(At,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:b,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),U?t.jsx("div",{className:"form-error",children:U}):null,b?t.jsx(dt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[J(r,l("queue.systemStatus"),t.jsx(Co,{size:18})),J(p,l("queue.queueStats"),t.jsx(kd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Hy,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Qy,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const jj=f.createContext(null);function wj({children:s}){const[l,r]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((y,b="success")=>{const x=Math.random().toString(36).substring(2,9);r(U=>[...U,{id:x,message:y,type:b}]),setTimeout(()=>{r(U=>U.filter(P=>P.id!==x))},5e3)},[]),m=f.useCallback(y=>{p(y)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const j=async()=>{if(d){try{await d.onConfirm()}catch(y){console.error("Error in onConfirm:",y)}p(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(jj.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:l.map(y=>{let b=Fy;return y.type==="success"&&(b=Bh),y.type==="error"&&(b=Gy),y.type==="warning"&&(b=Jf),t.jsxs("div",{className:`toast-card toast-${y.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(b,{size:18})}),t.jsx("div",{className:"toast-message",children:y.message}),t.jsx("button",{className:"toast-close",onClick:()=>r(x=>x.filter(U=>U.id!==y.id)),children:t.jsx(lt,{size:14})})]},y.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Jf,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:j,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Nj({children:s}){return t.jsx(Q1,{children:t.jsx(wj,{children:s})})}function _j(){return t.jsx(Nj,{children:t.jsxs(vy,{children:[t.jsx(mt,{path:"/login",element:t.jsx(X1,{})}),t.jsx(mt,{path:"/dashboard",element:t.jsx(P1,{})}),t.jsx(mt,{path:"/config/system",element:t.jsx(s0,{})}),t.jsx(mt,{path:"/config/payment",element:t.jsx(c0,{})}),t.jsx(mt,{path:"/config/theme",element:t.jsx(p0,{})}),t.jsx(mt,{path:"/server/manage",element:t.jsx(M0,{})}),t.jsx(mt,{path:"/server/group",element:t.jsx(D0,{})}),t.jsx(mt,{path:"/server/route",element:t.jsx(U0,{})}),t.jsx(mt,{path:"/plan",element:t.jsx(q0,{})}),t.jsx(mt,{path:"/order",element:t.jsx(Y0,{})}),t.jsx(mt,{path:"/coupon",element:t.jsx(V0,{})}),t.jsx(mt,{path:"/giftcard",element:t.jsx(Q0,{})}),t.jsx(mt,{path:"/user",element:t.jsx(ej,{})}),t.jsx(mt,{path:"/subscription",element:t.jsx(oj,{})}),t.jsx(mt,{path:"/device",element:t.jsx(pj,{})}),t.jsx(mt,{path:"/webcon",element:t.jsx(xj,{})}),t.jsx(mt,{path:"/notice",element:t.jsx(gj,{})}),t.jsx(mt,{path:"/ticket",element:t.jsx(bj,{})}),t.jsx(mt,{path:"/knowledge",element:t.jsx(yj,{})}),t.jsx(mt,{path:"/queue",element:t.jsx(vj,{})}),t.jsx(mt,{path:"/",element:t.jsx(Lf,{to:"/dashboard",replace:!0})}),t.jsx(mt,{path:"*",element:t.jsx(Lf,{to:"/dashboard",replace:!0})})]})})}zb.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(Cy,{children:t.jsx(_j,{})})}));
