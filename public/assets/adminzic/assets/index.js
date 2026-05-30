function pb(s,l){for(var r=0;r<l.length;r++){const d=l[r];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=r(p);fetch(p.href,h)}})();function mb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Gc={exports:{}},$i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function fb(){if(vf)return $i;vf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var j in p)j!=="key"&&(h[j]=p[j])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return $i.Fragment=l,$i.jsx=r,$i.jsxs=r,$i}var jf;function hb(){return jf||(jf=1,Gc.exports=fb()),Gc.exports}var t=hb(),Yc={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wf;function xb(){if(wf)return De;wf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),L=Symbol.iterator;function I(C){return C===null||typeof C!="object"?null:(C=L&&C[L]||C["@@iterator"],typeof C=="function"?C:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},J=Object.assign,k={};function q(C,Z,de){this.props=C,this.context=Z,this.refs=k,this.updater=de||W}q.prototype.isReactComponent={},q.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},q.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function V(){}V.prototype=q.prototype;function D(C,Z,de){this.props=C,this.context=Z,this.refs=k,this.updater=de||W}var X=D.prototype=new V;X.constructor=D,J(X,q.prototype),X.isPureReactComponent=!0;var le=Array.isArray;function ce(){}var R={H:null,A:null,T:null,S:null},oe=Object.prototype.hasOwnProperty;function ie(C,Z,de){var fe=de.ref;return{$$typeof:s,type:C,key:Z,ref:fe!==void 0?fe:null,props:de}}function se(C,Z){return ie(C.type,Z,C.props)}function _(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function O(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(de){return Z[de]})}var A=/\/+/g;function S(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?O(""+C.key):Z.toString(36)}function F(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(ce,ce):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function E(C,Z,de,fe,Ne){var ve=typeof C;(ve==="undefined"||ve==="boolean")&&(C=null);var _e=!1;if(C===null)_e=!0;else switch(ve){case"bigint":case"string":case"number":_e=!0;break;case"object":switch(C.$$typeof){case s:case l:_e=!0;break;case b:return _e=C._init,E(_e(C._payload),Z,de,fe,Ne)}}if(_e)return Ne=Ne(C),_e=fe===""?"."+S(C,0):fe,le(Ne)?(de="",_e!=null&&(de=_e.replace(A,"$&/")+"/"),E(Ne,Z,de,"",function(Et){return Et})):Ne!=null&&(_(Ne)&&(Ne=se(Ne,de+(Ne.key==null||C&&C.key===Ne.key?"":(""+Ne.key).replace(A,"$&/")+"/")+_e)),Z.push(Ne)),1;_e=0;var Pe=fe===""?".":fe+":";if(le(C))for(var Fe=0;Fe<C.length;Fe++)fe=C[Fe],ve=Pe+S(fe,Fe),_e+=E(fe,Z,de,ve,Ne);else if(Fe=I(C),typeof Fe=="function")for(C=Fe.call(C),Fe=0;!(fe=C.next()).done;)fe=fe.value,ve=Pe+S(fe,Fe++),_e+=E(fe,Z,de,ve,Ne);else if(ve==="object"){if(typeof C.then=="function")return E(F(C),Z,de,fe,Ne);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return _e}function $(C,Z,de){if(C==null)return C;var fe=[],Ne=0;return E(C,fe,"","",function(ve){return Z.call(de,ve,Ne++)}),fe}function N(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(de){(C._status===0||C._status===-1)&&(C._status=1,C._result=de)},function(de){(C._status===0||C._status===-1)&&(C._status=2,C._result=de)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var ne=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},ae={map:$,forEach:function(C,Z,de){$(C,function(){Z.apply(this,arguments)},de)},count:function(C){var Z=0;return $(C,function(){Z++}),Z},toArray:function(C){return $(C,function(Z){return Z})||[]},only:function(C){if(!_(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=g,De.Children=ae,De.Component=q,De.Fragment=r,De.Profiler=p,De.PureComponent=D,De.StrictMode=d,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return R.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,Z,de){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var fe=J({},C.props),Ne=C.key;if(Z!=null)for(ve in Z.key!==void 0&&(Ne=""+Z.key),Z)!oe.call(Z,ve)||ve==="key"||ve==="__self"||ve==="__source"||ve==="ref"&&Z.ref===void 0||(fe[ve]=Z[ve]);var ve=arguments.length-2;if(ve===1)fe.children=de;else if(1<ve){for(var _e=Array(ve),Pe=0;Pe<ve;Pe++)_e[Pe]=arguments[Pe+2];fe.children=_e}return ie(C.type,Ne,fe)},De.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:h,_context:C},C},De.createElement=function(C,Z,de){var fe,Ne={},ve=null;if(Z!=null)for(fe in Z.key!==void 0&&(ve=""+Z.key),Z)oe.call(Z,fe)&&fe!=="key"&&fe!=="__self"&&fe!=="__source"&&(Ne[fe]=Z[fe]);var _e=arguments.length-2;if(_e===1)Ne.children=de;else if(1<_e){for(var Pe=Array(_e),Fe=0;Fe<_e;Fe++)Pe[Fe]=arguments[Fe+2];Ne.children=Pe}if(C&&C.defaultProps)for(fe in _e=C.defaultProps,_e)Ne[fe]===void 0&&(Ne[fe]=_e[fe]);return ie(C,ve,Ne)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:j,render:C}},De.isValidElement=_,De.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:N}},De.memo=function(C,Z){return{$$typeof:y,type:C,compare:Z===void 0?null:Z}},De.startTransition=function(C){var Z=R.T,de={};R.T=de;try{var fe=C(),Ne=R.S;Ne!==null&&Ne(de,fe),typeof fe=="object"&&fe!==null&&typeof fe.then=="function"&&fe.then(ce,ne)}catch(ve){ne(ve)}finally{Z!==null&&de.types!==null&&(Z.types=de.types),R.T=Z}},De.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},De.use=function(C){return R.H.use(C)},De.useActionState=function(C,Z,de){return R.H.useActionState(C,Z,de)},De.useCallback=function(C,Z){return R.H.useCallback(C,Z)},De.useContext=function(C){return R.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,Z){return R.H.useDeferredValue(C,Z)},De.useEffect=function(C,Z){return R.H.useEffect(C,Z)},De.useEffectEvent=function(C){return R.H.useEffectEvent(C)},De.useId=function(){return R.H.useId()},De.useImperativeHandle=function(C,Z,de){return R.H.useImperativeHandle(C,Z,de)},De.useInsertionEffect=function(C,Z){return R.H.useInsertionEffect(C,Z)},De.useLayoutEffect=function(C,Z){return R.H.useLayoutEffect(C,Z)},De.useMemo=function(C,Z){return R.H.useMemo(C,Z)},De.useOptimistic=function(C,Z){return R.H.useOptimistic(C,Z)},De.useReducer=function(C,Z,de){return R.H.useReducer(C,Z,de)},De.useRef=function(C){return R.H.useRef(C)},De.useState=function(C){return R.H.useState(C)},De.useSyncExternalStore=function(C,Z,de){return R.H.useSyncExternalStore(C,Z,de)},De.useTransition=function(){return R.H.useTransition()},De.version="19.2.6",De}var Nf;function yd(){return Nf||(Nf=1,Yc.exports=xb()),Yc.exports}var f=yd();const gb=mb(f),bb=pb({__proto__:null,default:gb},[f]);var Vc={exports:{}},Qi={},$c={exports:{}},Qc={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _f;function yb(){return _f||(_f=1,(function(s){function l(E,$){var N=E.length;E.push($);e:for(;0<N;){var ne=N-1>>>1,ae=E[ne];if(0<p(ae,$))E[ne]=$,E[N]=ae,N=ne;else break e}}function r(E){return E.length===0?null:E[0]}function d(E){if(E.length===0)return null;var $=E[0],N=E.pop();if(N!==$){E[0]=N;e:for(var ne=0,ae=E.length,C=ae>>>1;ne<C;){var Z=2*(ne+1)-1,de=E[Z],fe=Z+1,Ne=E[fe];if(0>p(de,N))fe<ae&&0>p(Ne,de)?(E[ne]=Ne,E[fe]=N,ne=fe):(E[ne]=de,E[Z]=N,ne=Z);else if(fe<ae&&0>p(Ne,N))E[ne]=Ne,E[fe]=N,ne=fe;else break e}}return $}function p(E,$){var N=E.sortIndex-$.sortIndex;return N!==0?N:E.id-$.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,j=m.now();s.unstable_now=function(){return m.now()-j}}var v=[],y=[],b=1,g=null,L=3,I=!1,W=!1,J=!1,k=!1,q=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function X(E){for(var $=r(y);$!==null;){if($.callback===null)d(y);else if($.startTime<=E)d(y),$.sortIndex=$.expirationTime,l(v,$);else break;$=r(y)}}function le(E){if(J=!1,X(E),!W)if(r(v)!==null)W=!0,ce||(ce=!0,O());else{var $=r(y);$!==null&&F(le,$.startTime-E)}}var ce=!1,R=-1,oe=5,ie=-1;function se(){return k?!0:!(s.unstable_now()-ie<oe)}function _(){if(k=!1,ce){var E=s.unstable_now();ie=E;var $=!0;try{e:{W=!1,J&&(J=!1,V(R),R=-1),I=!0;var N=L;try{t:{for(X(E),g=r(v);g!==null&&!(g.expirationTime>E&&se());){var ne=g.callback;if(typeof ne=="function"){g.callback=null,L=g.priorityLevel;var ae=ne(g.expirationTime<=E);if(E=s.unstable_now(),typeof ae=="function"){g.callback=ae,X(E),$=!0;break t}g===r(v)&&d(v),X(E)}else d(v);g=r(v)}if(g!==null)$=!0;else{var C=r(y);C!==null&&F(le,C.startTime-E),$=!1}}break e}finally{g=null,L=N,I=!1}$=void 0}}finally{$?O():ce=!1}}}var O;if(typeof D=="function")O=function(){D(_)};else if(typeof MessageChannel<"u"){var A=new MessageChannel,S=A.port2;A.port1.onmessage=_,O=function(){S.postMessage(null)}}else O=function(){q(_,0)};function F(E,$){R=q(function(){E(s.unstable_now())},$)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(E){E.callback=null},s.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):oe=0<E?Math.floor(1e3/E):5},s.unstable_getCurrentPriorityLevel=function(){return L},s.unstable_next=function(E){switch(L){case 1:case 2:case 3:var $=3;break;default:$=L}var N=L;L=$;try{return E()}finally{L=N}},s.unstable_requestPaint=function(){k=!0},s.unstable_runWithPriority=function(E,$){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var N=L;L=E;try{return $()}finally{L=N}},s.unstable_scheduleCallback=function(E,$,N){var ne=s.unstable_now();switch(typeof N=="object"&&N!==null?(N=N.delay,N=typeof N=="number"&&0<N?ne+N:ne):N=ne,E){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=N+ae,E={id:b++,callback:$,priorityLevel:E,startTime:N,expirationTime:ae,sortIndex:-1},N>ne?(E.sortIndex=N,l(y,E),r(v)===null&&E===r(y)&&(J?(V(R),R=-1):J=!0,F(le,N-ne))):(E.sortIndex=ae,l(v,E),W||I||(W=!0,ce||(ce=!0,O()))),E},s.unstable_shouldYield=se,s.unstable_wrapCallback=function(E){var $=L;return function(){var N=L;L=$;try{return E.apply(this,arguments)}finally{L=N}}}})(Qc)),Qc}var Sf;function vb(){return Sf||(Sf=1,$c.exports=yb()),$c.exports}var Xc={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kf;function jb(){if(kf)return Wt;kf=1;var s=yd();function l(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var d={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(v,y,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:g==null?null:""+g,children:v,containerInfo:y,implementation:b}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Wt.createPortal=function(v,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(l(299));return h(v,y,null,b)},Wt.flushSync=function(v){var y=m.T,b=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=y,d.p=b,d.d.f()}},Wt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(v,y))},Wt.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},Wt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var b=y.as,g=j(b,y.crossOrigin),L=typeof y.integrity=="string"?y.integrity:void 0,I=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?d.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:g,integrity:L,fetchPriority:I}):b==="script"&&d.d.X(v,{crossOrigin:g,integrity:L,fetchPriority:I,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Wt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=j(y.as,y.crossOrigin);d.d.M(v,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(v)},Wt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,g=j(b,y.crossOrigin);d.d.L(v,b,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Wt.preloadModule=function(v,y){if(typeof v=="string")if(y){var b=j(y.as,y.crossOrigin);d.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(v)},Wt.requestFormReset=function(v){d.d.r(v)},Wt.unstable_batchedUpdates=function(v,y){return v(y)},Wt.useFormState=function(v,y,b){return m.H.useFormState(v,y,b)},Wt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Wt.version="19.2.6",Wt}var Cf;function kh(){if(Cf)return Xc.exports;Cf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Xc.exports=jb(),Xc.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function wb(){if(zf)return Qi;zf=1;var s=vb(),l=yd(),r=kh();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function y(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,i=a;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return v(o),e;if(c===i)return v(o),a;c=c.sibling}throw Error(d(188))}if(n.return!==i.return)n=o,i=c;else{for(var u=!1,x=o.child;x;){if(x===n){u=!0,n=o,i=c;break}if(x===i){u=!0,i=o,n=c;break}x=x.sibling}if(!u){for(x=c.child;x;){if(x===n){u=!0,n=c,i=o;break}if(x===i){u=!0,i=c,n=o;break}x=x.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function b(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=b(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,L=Symbol.for("react.element"),I=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),J=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),q=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),D=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),le=Symbol.for("react.suspense"),ce=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ie=Symbol.for("react.activity"),se=Symbol.for("react.memo_cache_sentinel"),_=Symbol.iterator;function O(e){return e===null||typeof e!="object"?null:(e=_&&e[_]||e["@@iterator"],typeof e=="function"?e:null)}var A=Symbol.for("react.client.reference");function S(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===A?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case J:return"Fragment";case q:return"Profiler";case k:return"StrictMode";case le:return"Suspense";case ce:return"SuspenseList";case ie:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case D:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case X:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case R:return a=e.displayName||null,a!==null?a:S(e.type)||"Memo";case oe:a=e._payload,e=e._init;try{return S(e(a))}catch{}}return null}var F=Array.isArray,E=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,$=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},ne=[],ae=-1;function C(e){return{current:e}}function Z(e){0>ae||(e.current=ne[ae],ne[ae]=null,ae--)}function de(e,a){ae++,ne[ae]=e.current,e.current=a}var fe=C(null),Ne=C(null),ve=C(null),_e=C(null);function Pe(e,a){switch(de(ve,a),de(Ne,e),de(fe,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Ym(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Ym(a),e=Vm(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(fe),de(fe,e)}function Fe(){Z(fe),Z(Ne),Z(ve)}function Et(e){e.memoizedState!==null&&de(_e,e);var a=fe.current,n=Vm(a,e.type);a!==n&&(de(Ne,e),de(fe,n))}function Bt(e){Ne.current===e&&(Z(fe),Z(Ne)),_e.current===e&&(Z(_e),Bi._currentValue=N)}var Rt,Jt;function Ie(e){if(Rt===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Rt=a&&a[1]||"",Jt=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Rt+e+Jt}var Gt=!1;function Yt(e,a){if(!e||Gt)return"";Gt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(K){var Q=K}Reflect.construct(e,[],te)}else{try{te.call()}catch(K){Q=K}e.call(te.prototype)}}else{try{throw Error()}catch(K){Q=K}(te=e())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(K){if(K&&Q&&typeof K.stack=="string")return[K.stack,Q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),u=c[0],x=c[1];if(u&&x){var z=u.split(`
`),Y=x.split(`
`);for(o=i=0;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;for(;o<Y.length&&!Y[o].includes("DetermineComponentFrameRoot");)o++;if(i===z.length||o===Y.length)for(i=z.length-1,o=Y.length-1;1<=i&&0<=o&&z[i]!==Y[o];)o--;for(;1<=i&&0<=o;i--,o--)if(z[i]!==Y[o]){if(i!==1||o!==1)do if(i--,o--,0>o||z[i]!==Y[o]){var P=`
`+z[i].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=i&&0<=o);break}}}finally{Gt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Ie(n):""}function Mt(e,a){switch(e.tag){case 26:case 27:case 5:return Ie(e.type);case 16:return Ie("Lazy");case 13:return e.child!==a&&a!==null?Ie("Suspense Fallback"):Ie("Suspense");case 19:return Ie("SuspenseList");case 0:case 15:return Yt(e.type,!1);case 11:return Yt(e.type.render,!1);case 1:return Yt(e.type,!0);case 31:return Ie("Activity");default:return""}}function Ut(e){try{var a="",n=null;do a+=Mt(e,n),n=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var M=Object.prototype.hasOwnProperty,Se=s.unstable_scheduleCallback,Re=s.unstable_cancelCallback,Xe=s.unstable_shouldYield,G=s.unstable_requestPaint,ye=s.unstable_now,ke=s.unstable_getCurrentPriorityLevel,ge=s.unstable_ImmediatePriority,He=s.unstable_UserBlockingPriority,Me=s.unstable_NormalPriority,ct=s.unstable_LowPriority,Ga=s.unstable_IdlePriority,va=s.log,dn=s.unstable_setDisableYieldValue,Ma=null,xt=null;function It(e){if(typeof va=="function"&&dn(e),xt&&typeof xt.setStrictMode=="function")try{xt.setStrictMode(Ma,e)}catch{}}var U=Math.clz32?Math.clz32:Ue,re=Math.log,pe=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(re(e)/pe|0)|0}var Ee=256,et=262144,tt=4194304;function Le(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ta(e,a,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?o=Le(i):(u&=x,u!==0?o=Le(u):n||(n=x&~e,n!==0&&(o=Le(n))))):(x=i&~c,x!==0?o=Le(x):u!==0?o=Le(u):n||(n=i&~e,n!==0&&(o=Le(n)))),o===0?0:a!==0&&a!==o&&(a&c)===0&&(c=o&-o,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:o}function Ft(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function Yn(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vn(){var e=tt;return tt<<=1,(tt&62914560)===0&&(tt=4194304),e}function mt(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function $n(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Mo(e,a,n,i,o,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,z=e.expirationTimes,Y=e.hiddenUpdates;for(n=u&~n;0<n;){var P=31-U(n),te=1<<P;x[P]=0,z[P]=-1;var Q=Y[P];if(Q!==null)for(Y[P]=null,P=0;P<Q.length;P++){var K=Q[P];K!==null&&(K.lane&=-536870913)}n&=~te}i!==0&&Da(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function Da(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-U(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function w(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var i=31-U(n),o=1<<i;o&a|e[i]&a&&(e[i]|=a),n&=~o}}function he(e,a){var n=a&-a;return n=(n&42)!==0?1:xe(n),(n&(e.suspendedLanes|a))!==0?0:n}function xe(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Be(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function aa(){var e=$.p;return e!==0?e:(e=window.event,e===void 0?32:mf(e.type))}function zd(e,a){var n=$.p;try{return $.p=e,a()}finally{$.p=n}}var un=Math.random().toString(36).slice(2),Vt="__reactFiber$"+un,na="__reactProps$"+un,ml="__reactContainer$"+un,Do="__reactEvents$"+un,tx="__reactListeners$"+un,ax="__reactHandles$"+un,Td="__reactResources$"+un,ti="__reactMarker$"+un;function Oo(e){delete e[Vt],delete e[na],delete e[Do],delete e[tx],delete e[ax]}function fl(e){var a=e[Vt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[ml]||n[Vt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=Fm(e);e!==null;){if(n=e[Vt])return n;e=Fm(e)}return a}e=n,n=e.parentNode}return null}function hl(e){if(e=e[Vt]||e[ml]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ai(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function xl(e){var a=e[Td];return a||(a=e[Td]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Ht(e){e[ti]=!0}var Ed=new Set,Md={};function Qn(e,a){gl(e,a),gl(e+"Capture",a)}function gl(e,a){for(Md[e]=a,e=0;e<a.length;e++)Ed.add(a[e])}var nx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dd={},Od={};function lx(e){return M.call(Od,e)?!0:M.call(Dd,e)?!1:nx.test(e)?Od[e]=!0:(Dd[e]=!0,!1)}function ts(e,a,n){if(lx(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function as(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Ya(e,a,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+i)}}function ja(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ad(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function ix(e,a,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Ao(e){if(!e._valueTracker){var a=Ad(e)?"checked":"value";e._valueTracker=ix(e,a,""+e[a])}}function Rd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),i="";return e&&(i=Ad(e)?e.checked?"true":"false":e.value),e=i,e!==n?(a.setValue(e),!0):!1}function ns(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var sx=/[\n"\\]/g;function wa(e){return e.replace(sx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Ro(e,a,n,i,o,c,u,x){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ja(a)):e.value!==""+ja(a)&&(e.value=""+ja(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Uo(e,u,ja(a)):n!=null?Uo(e,u,ja(n)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ja(x):e.removeAttribute("name")}function Ud(e,a,n,i,o,c,u,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){Ao(e);return}n=n!=null?""+ja(n):"",a=a!=null?""+ja(a):n,x||a===e.value||(e.value=a),e.defaultValue=a}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Ao(e)}function Uo(e,a,n){a==="number"&&ns(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bl(e,a,n,i){if(e=e.options,a){a={};for(var o=0;o<n.length;o++)a["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=a.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ja(n),a=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Hd(e,a,n){if(a!=null&&(a=""+ja(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+ja(n):""}function Ld(e,a,n,i){if(a==null){if(i!=null){if(n!=null)throw Error(d(92));if(F(i)){if(1<i.length)throw Error(d(93));i=i[0]}n=i}n==null&&(n=""),a=n}n=ja(a),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),Ao(e)}function yl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var ox=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function qd(e,a,n){var i=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,n):typeof n!="number"||n===0||ox.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Bd(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in a)i=a[o],a.hasOwnProperty(o)&&n[o]!==i&&qd(e,o,i)}else for(var c in a)a.hasOwnProperty(c)&&qd(e,c,a[c])}function Ho(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ls(e){return cx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Va(){}var Lo=null;function qo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var vl=null,jl=null;function Gd(e){var a=hl(e);if(a&&(e=a.stateNode)){var n=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(Ro(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wa(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var i=n[a];if(i!==e&&i.form===e.form){var o=i[na]||null;if(!o)throw Error(d(90));Ro(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<n.length;a++)i=n[a],i.form===e.form&&Rd(i)}break e;case"textarea":Hd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&bl(e,!!n.multiple,a,!1)}}}var Bo=!1;function Yd(e,a,n){if(Bo)return e(a,n);Bo=!0;try{var i=e(a);return i}finally{if(Bo=!1,(vl!==null||jl!==null)&&(Qs(),vl&&(a=vl,e=jl,jl=vl=null,Gd(a),e)))for(a=0;a<e.length;a++)Gd(e[a])}}function ni(e,a){var n=e.stateNode;if(n===null)return null;var i=n[na]||null;if(i===null)return null;n=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var $a=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Go=!1;if($a)try{var li={};Object.defineProperty(li,"passive",{get:function(){Go=!0}}),window.addEventListener("test",li,li),window.removeEventListener("test",li,li)}catch{Go=!1}var pn=null,Yo=null,is=null;function Vd(){if(is)return is;var e,a=Yo,n=a.length,i,o="value"in pn?pn.value:pn.textContent,c=o.length;for(e=0;e<n&&a[e]===o[e];e++);var u=n-e;for(i=1;i<=u&&a[n-i]===o[c-i];i++);return is=o.slice(e,1<i?1-i:void 0)}function ss(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function os(){return!0}function $d(){return!1}function la(e){function a(n,i,o,c,u){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?os:$d,this.isPropagationStopped=$d,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=os)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=os)},persist:function(){},isPersistent:os}),a}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rs=la(Xn),ii=g({},Xn,{view:0,detail:0}),dx=la(ii),Vo,$o,si,cs=g({},ii,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==si&&(si&&e.type==="mousemove"?(Vo=e.screenX-si.screenX,$o=e.screenY-si.screenY):$o=Vo=0,si=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:$o}}),Qd=la(cs),ux=g({},cs,{dataTransfer:0}),px=la(ux),mx=g({},ii,{relatedTarget:0}),Qo=la(mx),fx=g({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),hx=la(fx),xx=g({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gx=la(xx),bx=g({},Xn,{data:0}),Xd=la(bx),yx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},jx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=jx[e])?!!a[e]:!1}function Xo(){return wx}var Nx=g({},ii,{key:function(e){if(e.key){var a=yx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ss(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xo,charCode:function(e){return e.type==="keypress"?ss(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ss(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),_x=la(Nx),Sx=g({},cs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zd=la(Sx),kx=g({},ii,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xo}),Cx=la(kx),zx=g({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=la(zx),Ex=g({},cs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Mx=la(Ex),Dx=g({},Xn,{newState:0,oldState:0}),Ox=la(Dx),Ax=[9,13,27,32],Zo=$a&&"CompositionEvent"in window,oi=null;$a&&"documentMode"in document&&(oi=document.documentMode);var Rx=$a&&"TextEvent"in window&&!oi,Kd=$a&&(!Zo||oi&&8<oi&&11>=oi),Jd=" ",Fd=!1;function Wd(e,a){switch(e){case"keyup":return Ax.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Pd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wl=!1;function Ux(e,a){switch(e){case"compositionend":return Pd(a);case"keypress":return a.which!==32?null:(Fd=!0,Jd);case"textInput":return e=a.data,e===Jd&&Fd?null:e;default:return null}}function Hx(e,a){if(wl)return e==="compositionend"||!Zo&&Wd(e,a)?(e=Vd(),is=Yo=pn=null,wl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return Kd&&a.locale!=="ko"?null:a.data;default:return null}}var Lx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!Lx[e.type]:a==="textarea"}function eu(e,a,n,i){vl?jl?jl.push(i):jl=[i]:vl=i,a=Ps(a,"onChange"),0<a.length&&(n=new rs("onChange","change",null,n,i),e.push({event:n,listeners:a}))}var ri=null,ci=null;function qx(e){Um(e,0)}function ds(e){var a=ai(e);if(Rd(a))return e}function tu(e,a){if(e==="change")return a}var au=!1;if($a){var Ko;if($a){var Jo="oninput"in document;if(!Jo){var nu=document.createElement("div");nu.setAttribute("oninput","return;"),Jo=typeof nu.oninput=="function"}Ko=Jo}else Ko=!1;au=Ko&&(!document.documentMode||9<document.documentMode)}function lu(){ri&&(ri.detachEvent("onpropertychange",iu),ci=ri=null)}function iu(e){if(e.propertyName==="value"&&ds(ci)){var a=[];eu(a,ci,e,qo(e)),Yd(qx,a)}}function Bx(e,a,n){e==="focusin"?(lu(),ri=a,ci=n,ri.attachEvent("onpropertychange",iu)):e==="focusout"&&lu()}function Gx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return ds(ci)}function Yx(e,a){if(e==="click")return ds(a)}function Vx(e,a){if(e==="input"||e==="change")return ds(a)}function $x(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:$x;function di(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),i=Object.keys(a);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!M.call(a,o)||!ua(e[o],a[o]))return!1}return!0}function su(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ou(e,a){var n=su(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=a&&i>=a)return{node:n,offset:a-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=su(n)}}function ru(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?ru(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function cu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=ns(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=ns(e.document)}return a}function Fo(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var Qx=$a&&"documentMode"in document&&11>=document.documentMode,Nl=null,Wo=null,ui=null,Po=!1;function du(e,a,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Po||Nl==null||Nl!==ns(i)||(i=Nl,"selectionStart"in i&&Fo(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ui&&di(ui,i)||(ui=i,i=Ps(Wo,"onSelect"),0<i.length&&(a=new rs("onSelect","select",null,a,n),e.push({event:a,listeners:i}),a.target=Nl)))}function Zn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var _l={animationend:Zn("Animation","AnimationEnd"),animationiteration:Zn("Animation","AnimationIteration"),animationstart:Zn("Animation","AnimationStart"),transitionrun:Zn("Transition","TransitionRun"),transitionstart:Zn("Transition","TransitionStart"),transitioncancel:Zn("Transition","TransitionCancel"),transitionend:Zn("Transition","TransitionEnd")},Io={},uu={};$a&&(uu=document.createElement("div").style,"AnimationEvent"in window||(delete _l.animationend.animation,delete _l.animationiteration.animation,delete _l.animationstart.animation),"TransitionEvent"in window||delete _l.transitionend.transition);function Kn(e){if(Io[e])return Io[e];if(!_l[e])return e;var a=_l[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in uu)return Io[e]=a[n];return e}var pu=Kn("animationend"),mu=Kn("animationiteration"),fu=Kn("animationstart"),Xx=Kn("transitionrun"),Zx=Kn("transitionstart"),Kx=Kn("transitioncancel"),hu=Kn("transitionend"),xu=new Map,er="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");er.push("scrollEnd");function Oa(e,a){xu.set(e,a),Qn(a,[e])}var us=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Na=[],Sl=0,tr=0;function ps(){for(var e=Sl,a=tr=Sl=0;a<e;){var n=Na[a];Na[a++]=null;var i=Na[a];Na[a++]=null;var o=Na[a];Na[a++]=null;var c=Na[a];if(Na[a++]=null,i!==null&&o!==null){var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}c!==0&&gu(n,o,c)}}function ms(e,a,n,i){Na[Sl++]=e,Na[Sl++]=a,Na[Sl++]=n,Na[Sl++]=i,tr|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function ar(e,a,n,i){return ms(e,a,n,i),fs(e)}function Jn(e,a){return ms(e,null,null,a),fs(e)}function gu(e,a,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&a!==null&&(o=31-U(n),e=c.hiddenUpdates,i=e[o],i===null?e[o]=[a]:i.push(a),a.lane=n|536870912),c):null}function fs(e){if(50<Oi)throw Oi=0,uc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var kl={};function Jx(e,a,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pa(e,a,n,i){return new Jx(e,a,n,i)}function nr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Qa(e,a){var n=e.alternate;return n===null?(n=pa(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function bu(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function hs(e,a,n,i,o,c){var u=0;if(i=e,typeof e=="function")nr(e)&&(u=1);else if(typeof e=="string")u=eb(e,n,fe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ie:return e=pa(31,n,a,o),e.elementType=ie,e.lanes=c,e;case J:return Fn(n.children,o,c,a);case k:u=8,o|=24;break;case q:return e=pa(12,n,a,o|2),e.elementType=q,e.lanes=c,e;case le:return e=pa(13,n,a,o),e.elementType=le,e.lanes=c,e;case ce:return e=pa(19,n,a,o),e.elementType=ce,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case D:u=10;break e;case V:u=9;break e;case X:u=11;break e;case R:u=14;break e;case oe:u=16,i=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),i=null}return a=pa(u,n,a,o),a.elementType=e,a.type=i,a.lanes=c,a}function Fn(e,a,n,i){return e=pa(7,e,i,a),e.lanes=n,e}function lr(e,a,n){return e=pa(6,e,null,a),e.lanes=n,e}function yu(e){var a=pa(18,null,null,0);return a.stateNode=e,a}function ir(e,a,n){return a=pa(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var vu=new WeakMap;function _a(e,a){if(typeof e=="object"&&e!==null){var n=vu.get(e);return n!==void 0?n:(a={value:e,source:a,stack:Ut(a)},vu.set(e,a),a)}return{value:e,source:a,stack:Ut(a)}}var Cl=[],zl=0,xs=null,pi=0,Sa=[],ka=0,mn=null,Ua=1,Ha="";function Xa(e,a){Cl[zl++]=pi,Cl[zl++]=xs,xs=e,pi=a}function ju(e,a,n){Sa[ka++]=Ua,Sa[ka++]=Ha,Sa[ka++]=mn,mn=e;var i=Ua;e=Ha;var o=32-U(i)-1;i&=~(1<<o),n+=1;var c=32-U(a)+o;if(30<c){var u=o-o%5;c=(i&(1<<u)-1).toString(32),i>>=u,o-=u,Ua=1<<32-U(a)+o|n<<o|i,Ha=c+e}else Ua=1<<c|n<<o|i,Ha=e}function sr(e){e.return!==null&&(Xa(e,1),ju(e,1,0))}function or(e){for(;e===xs;)xs=Cl[--zl],Cl[zl]=null,pi=Cl[--zl],Cl[zl]=null;for(;e===mn;)mn=Sa[--ka],Sa[ka]=null,Ha=Sa[--ka],Sa[ka]=null,Ua=Sa[--ka],Sa[ka]=null}function wu(e,a){Sa[ka++]=Ua,Sa[ka++]=Ha,Sa[ka++]=mn,Ua=a.id,Ha=a.overflow,mn=e}var $t=null,dt=null,Qe=!1,fn=null,Ca=!1,rr=Error(d(519));function hn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mi(_a(a,e)),rr}function Nu(e){var a=e.stateNode,n=e.type,i=e.memoizedProps;switch(a[Vt]=e,a[na]=i,n){case"dialog":Ye("cancel",a),Ye("close",a);break;case"iframe":case"object":case"embed":Ye("load",a);break;case"video":case"audio":for(n=0;n<Ri.length;n++)Ye(Ri[n],a);break;case"source":Ye("error",a);break;case"img":case"image":case"link":Ye("error",a),Ye("load",a);break;case"details":Ye("toggle",a);break;case"input":Ye("invalid",a),Ud(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Ye("invalid",a);break;case"textarea":Ye("invalid",a),Ld(a,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||i.suppressHydrationWarning===!0||Bm(a.textContent,n)?(i.popover!=null&&(Ye("beforetoggle",a),Ye("toggle",a)),i.onScroll!=null&&Ye("scroll",a),i.onScrollEnd!=null&&Ye("scrollend",a),i.onClick!=null&&(a.onclick=Va),a=!0):a=!1,a||hn(e,!0)}function _u(e){for($t=e.return;$t;)switch($t.tag){case 5:case 31:case 13:Ca=!1;return;case 27:case 3:Ca=!0;return;default:$t=$t.return}}function Tl(e){if(e!==$t)return!1;if(!Qe)return _u(e),Qe=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||kc(e.type,e.memoizedProps)),n=!n),n&&dt&&hn(e),_u(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));dt=Jm(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));dt=Jm(e)}else a===27?(a=dt,Tn(e.type)?(e=Mc,Mc=null,dt=e):dt=a):dt=$t?Ta(e.stateNode.nextSibling):null;return!0}function Wn(){dt=$t=null,Qe=!1}function cr(){var e=fn;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),fn=null),e}function mi(e){fn===null?fn=[e]:fn.push(e)}var dr=C(null),Pn=null,Za=null;function xn(e,a,n){de(dr,a._currentValue),a._currentValue=n}function Ka(e){e._currentValue=dr.current,Z(dr)}function ur(e,a,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===n)break;e=e.return}}function pr(e,a,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var u=o.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=o;for(var z=0;z<a.length;z++)if(x.context===a[z]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),ur(c.return,n,e),i||(u=null);break e}c=x.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),ur(u,n,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function El(e,a,n,i){e=null;for(var o=a,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var x=o.type;ua(o.pendingProps.value,u.value)||(e!==null?e.push(x):e=[x])}}else if(o===_e.current){if(u=o.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Bi):e=[Bi])}o=o.return}e!==null&&pr(a,e,n,i),a.flags|=262144}function gs(e){for(e=e.firstContext;e!==null;){if(!ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function In(e){Pn=e,Za=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Qt(e){return Su(Pn,e)}function bs(e,a){return Pn===null&&In(e),Su(e,a)}function Su(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Za===null){if(e===null)throw Error(d(308));Za=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Za=Za.next=a;return n}var Fx=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},Wx=s.unstable_scheduleCallback,Px=s.unstable_NormalPriority,Nt={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function mr(){return{controller:new Fx,data:new Map,refCount:0}}function fi(e){e.refCount--,e.refCount===0&&Wx(Px,function(){e.controller.abort()})}var hi=null,fr=0,Ml=0,Dl=null;function Ix(e,a){if(hi===null){var n=hi=[];fr=0,Ml=gc(),Dl={status:"pending",value:void 0,then:function(i){n.push(i)}}}return fr++,a.then(ku,ku),a}function ku(){if(--fr===0&&hi!==null){Dl!==null&&(Dl.status="fulfilled");var e=hi;hi=null,Ml=0,Dl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function eg(e,a){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var o=0;o<n.length;o++)(0,n[o])(a)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Cu=E.S;E.S=function(e,a){dm=ye(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Ix(e,a),Cu!==null&&Cu(e,a)};var el=C(null);function hr(){var e=el.current;return e!==null?e:rt.pooledCache}function ys(e,a){a===null?de(el,el.current):de(el,a.pool)}function zu(){var e=hr();return e===null?null:{parent:Nt._currentValue,pool:e}}var Ol=Error(d(460)),xr=Error(d(474)),vs=Error(d(542)),js={then:function(){}};function Tu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eu(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Va,Va),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Du(e),e;default:if(typeof a.status=="string")a.then(Va,Va);else{if(e=rt,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=i}},function(i){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Du(e),e}throw al=a,Ol}}function tl(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(al=n,Ol):n}}var al=null;function Mu(){if(al===null)throw Error(d(459));var e=al;return al=null,e}function Du(e){if(e===Ol||e===vs)throw Error(d(483))}var Al=null,xi=0;function ws(e){var a=xi;return xi+=1,Al===null&&(Al=[]),Eu(Al,e,a)}function gi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ns(e,a){throw a.$$typeof===L?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ou(e){function a(H,T){if(e){var B=H.deletions;B===null?(H.deletions=[T],H.flags|=16):B.push(T)}}function n(H,T){if(!e)return null;for(;T!==null;)a(H,T),T=T.sibling;return null}function i(H){for(var T=new Map;H!==null;)H.key!==null?T.set(H.key,H):T.set(H.index,H),H=H.sibling;return T}function o(H,T){return H=Qa(H,T),H.index=0,H.sibling=null,H}function c(H,T,B){return H.index=B,e?(B=H.alternate,B!==null?(B=B.index,B<T?(H.flags|=67108866,T):B):(H.flags|=67108866,T)):(H.flags|=1048576,T)}function u(H){return e&&H.alternate===null&&(H.flags|=67108866),H}function x(H,T,B,ee){return T===null||T.tag!==6?(T=lr(B,H.mode,ee),T.return=H,T):(T=o(T,B),T.return=H,T)}function z(H,T,B,ee){var Ce=B.type;return Ce===J?P(H,T,B.props.children,ee,B.key):T!==null&&(T.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===oe&&tl(Ce)===T.type)?(T=o(T,B.props),gi(T,B),T.return=H,T):(T=hs(B.type,B.key,B.props,null,H.mode,ee),gi(T,B),T.return=H,T)}function Y(H,T,B,ee){return T===null||T.tag!==4||T.stateNode.containerInfo!==B.containerInfo||T.stateNode.implementation!==B.implementation?(T=ir(B,H.mode,ee),T.return=H,T):(T=o(T,B.children||[]),T.return=H,T)}function P(H,T,B,ee,Ce){return T===null||T.tag!==7?(T=Fn(B,H.mode,ee,Ce),T.return=H,T):(T=o(T,B),T.return=H,T)}function te(H,T,B){if(typeof T=="string"&&T!==""||typeof T=="number"||typeof T=="bigint")return T=lr(""+T,H.mode,B),T.return=H,T;if(typeof T=="object"&&T!==null){switch(T.$$typeof){case I:return B=hs(T.type,T.key,T.props,null,H.mode,B),gi(B,T),B.return=H,B;case W:return T=ir(T,H.mode,B),T.return=H,T;case oe:return T=tl(T),te(H,T,B)}if(F(T)||O(T))return T=Fn(T,H.mode,B,null),T.return=H,T;if(typeof T.then=="function")return te(H,ws(T),B);if(T.$$typeof===D)return te(H,bs(H,T),B);Ns(H,T)}return null}function Q(H,T,B,ee){var Ce=T!==null?T.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return Ce!==null?null:x(H,T,""+B,ee);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case I:return B.key===Ce?z(H,T,B,ee):null;case W:return B.key===Ce?Y(H,T,B,ee):null;case oe:return B=tl(B),Q(H,T,B,ee)}if(F(B)||O(B))return Ce!==null?null:P(H,T,B,ee,null);if(typeof B.then=="function")return Q(H,T,ws(B),ee);if(B.$$typeof===D)return Q(H,T,bs(H,B),ee);Ns(H,B)}return null}function K(H,T,B,ee,Ce){if(typeof ee=="string"&&ee!==""||typeof ee=="number"||typeof ee=="bigint")return H=H.get(B)||null,x(T,H,""+ee,Ce);if(typeof ee=="object"&&ee!==null){switch(ee.$$typeof){case I:return H=H.get(ee.key===null?B:ee.key)||null,z(T,H,ee,Ce);case W:return H=H.get(ee.key===null?B:ee.key)||null,Y(T,H,ee,Ce);case oe:return ee=tl(ee),K(H,T,B,ee,Ce)}if(F(ee)||O(ee))return H=H.get(B)||null,P(T,H,ee,Ce,null);if(typeof ee.then=="function")return K(H,T,B,ws(ee),Ce);if(ee.$$typeof===D)return K(H,T,B,bs(T,ee),Ce);Ns(T,ee)}return null}function je(H,T,B,ee){for(var Ce=null,Ze=null,we=T,Ae=T=0,$e=null;we!==null&&Ae<B.length;Ae++){we.index>Ae?($e=we,we=null):$e=we.sibling;var Ke=Q(H,we,B[Ae],ee);if(Ke===null){we===null&&(we=$e);break}e&&we&&Ke.alternate===null&&a(H,we),T=c(Ke,T,Ae),Ze===null?Ce=Ke:Ze.sibling=Ke,Ze=Ke,we=$e}if(Ae===B.length)return n(H,we),Qe&&Xa(H,Ae),Ce;if(we===null){for(;Ae<B.length;Ae++)we=te(H,B[Ae],ee),we!==null&&(T=c(we,T,Ae),Ze===null?Ce=we:Ze.sibling=we,Ze=we);return Qe&&Xa(H,Ae),Ce}for(we=i(we);Ae<B.length;Ae++)$e=K(we,H,Ae,B[Ae],ee),$e!==null&&(e&&$e.alternate!==null&&we.delete($e.key===null?Ae:$e.key),T=c($e,T,Ae),Ze===null?Ce=$e:Ze.sibling=$e,Ze=$e);return e&&we.forEach(function(An){return a(H,An)}),Qe&&Xa(H,Ae),Ce}function ze(H,T,B,ee){if(B==null)throw Error(d(151));for(var Ce=null,Ze=null,we=T,Ae=T=0,$e=null,Ke=B.next();we!==null&&!Ke.done;Ae++,Ke=B.next()){we.index>Ae?($e=we,we=null):$e=we.sibling;var An=Q(H,we,Ke.value,ee);if(An===null){we===null&&(we=$e);break}e&&we&&An.alternate===null&&a(H,we),T=c(An,T,Ae),Ze===null?Ce=An:Ze.sibling=An,Ze=An,we=$e}if(Ke.done)return n(H,we),Qe&&Xa(H,Ae),Ce;if(we===null){for(;!Ke.done;Ae++,Ke=B.next())Ke=te(H,Ke.value,ee),Ke!==null&&(T=c(Ke,T,Ae),Ze===null?Ce=Ke:Ze.sibling=Ke,Ze=Ke);return Qe&&Xa(H,Ae),Ce}for(we=i(we);!Ke.done;Ae++,Ke=B.next())Ke=K(we,H,Ae,Ke.value,ee),Ke!==null&&(e&&Ke.alternate!==null&&we.delete(Ke.key===null?Ae:Ke.key),T=c(Ke,T,Ae),Ze===null?Ce=Ke:Ze.sibling=Ke,Ze=Ke);return e&&we.forEach(function(ub){return a(H,ub)}),Qe&&Xa(H,Ae),Ce}function st(H,T,B,ee){if(typeof B=="object"&&B!==null&&B.type===J&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case I:e:{for(var Ce=B.key;T!==null;){if(T.key===Ce){if(Ce=B.type,Ce===J){if(T.tag===7){n(H,T.sibling),ee=o(T,B.props.children),ee.return=H,H=ee;break e}}else if(T.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===oe&&tl(Ce)===T.type){n(H,T.sibling),ee=o(T,B.props),gi(ee,B),ee.return=H,H=ee;break e}n(H,T);break}else a(H,T);T=T.sibling}B.type===J?(ee=Fn(B.props.children,H.mode,ee,B.key),ee.return=H,H=ee):(ee=hs(B.type,B.key,B.props,null,H.mode,ee),gi(ee,B),ee.return=H,H=ee)}return u(H);case W:e:{for(Ce=B.key;T!==null;){if(T.key===Ce)if(T.tag===4&&T.stateNode.containerInfo===B.containerInfo&&T.stateNode.implementation===B.implementation){n(H,T.sibling),ee=o(T,B.children||[]),ee.return=H,H=ee;break e}else{n(H,T);break}else a(H,T);T=T.sibling}ee=ir(B,H.mode,ee),ee.return=H,H=ee}return u(H);case oe:return B=tl(B),st(H,T,B,ee)}if(F(B))return je(H,T,B,ee);if(O(B)){if(Ce=O(B),typeof Ce!="function")throw Error(d(150));return B=Ce.call(B),ze(H,T,B,ee)}if(typeof B.then=="function")return st(H,T,ws(B),ee);if(B.$$typeof===D)return st(H,T,bs(H,B),ee);Ns(H,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,T!==null&&T.tag===6?(n(H,T.sibling),ee=o(T,B),ee.return=H,H=ee):(n(H,T),ee=lr(B,H.mode,ee),ee.return=H,H=ee),u(H)):n(H,T)}return function(H,T,B,ee){try{xi=0;var Ce=st(H,T,B,ee);return Al=null,Ce}catch(we){if(we===Ol||we===vs)throw we;var Ze=pa(29,we,null,H.mode);return Ze.lanes=ee,Ze.return=H,Ze}finally{}}}var nl=Ou(!0),Au=Ou(!1),gn=!1;function gr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function br(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function yn(e,a,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(We&2)!==0){var o=i.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a,a=fs(e),gu(e,null,n),a}return ms(e,i,a,n),fs(e)}function bi(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,w(e,n)}}function yr(e,a){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?o=c=a:c=c.next=a}else o=c=a;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var vr=!1;function yi(){if(vr){var e=Dl;if(e!==null)throw e}}function vi(e,a,n,i){vr=!1;var o=e.updateQueue;gn=!1;var c=o.firstBaseUpdate,u=o.lastBaseUpdate,x=o.shared.pending;if(x!==null){o.shared.pending=null;var z=x,Y=z.next;z.next=null,u===null?c=Y:u.next=Y,u=z;var P=e.alternate;P!==null&&(P=P.updateQueue,x=P.lastBaseUpdate,x!==u&&(x===null?P.firstBaseUpdate=Y:x.next=Y,P.lastBaseUpdate=z))}if(c!==null){var te=o.baseState;u=0,P=Y=z=null,x=c;do{var Q=x.lane&-536870913,K=Q!==x.lane;if(K?(Ve&Q)===Q:(i&Q)===Q){Q!==0&&Q===Ml&&(vr=!0),P!==null&&(P=P.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var je=e,ze=x;Q=a;var st=n;switch(ze.tag){case 1:if(je=ze.payload,typeof je=="function"){te=je.call(st,te,Q);break e}te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ze.payload,Q=typeof je=="function"?je.call(st,te,Q):je,Q==null)break e;te=g({},te,Q);break e;case 2:gn=!0}}Q=x.callback,Q!==null&&(e.flags|=64,K&&(e.flags|=8192),K=o.callbacks,K===null?o.callbacks=[Q]:K.push(Q))}else K={lane:Q,tag:x.tag,payload:x.payload,callback:x.callback,next:null},P===null?(Y=P=K,z=te):P=P.next=K,u|=Q;if(x=x.next,x===null){if(x=o.shared.pending,x===null)break;K=x,x=K.next,K.next=null,o.lastBaseUpdate=K,o.shared.pending=null}}while(!0);P===null&&(z=te),o.baseState=z,o.firstBaseUpdate=Y,o.lastBaseUpdate=P,c===null&&(o.shared.lanes=0),_n|=u,e.lanes=u,e.memoizedState=te}}function Ru(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Uu(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ru(n[e],a)}var Rl=C(null),_s=C(0);function Hu(e,a){e=nn,de(_s,e),de(Rl,a),nn=e|a.baseLanes}function jr(){de(_s,nn),de(Rl,Rl.current)}function wr(){nn=_s.current,Z(Rl),Z(_s)}var ma=C(null),za=null;function vn(e){var a=e.alternate;de(yt,yt.current&1),de(ma,e),za===null&&(a===null||Rl.current!==null||a.memoizedState!==null)&&(za=e)}function Nr(e){de(yt,yt.current),de(ma,e),za===null&&(za=e)}function Lu(e){e.tag===22?(de(yt,yt.current),de(ma,e),za===null&&(za=e)):jn()}function jn(){de(yt,yt.current),de(ma,ma.current)}function fa(e){Z(ma),za===e&&(za=null),Z(yt)}var yt=C(0);function Ss(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Tc(n)||Ec(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Ja=0,Oe=null,lt=null,_t=null,ks=!1,Ul=!1,ll=!1,Cs=0,ji=0,Hl=null,tg=0;function gt(){throw Error(d(321))}function _r(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ua(e[n],a[n]))return!1;return!0}function Sr(e,a,n,i,o,c){return Ja=c,Oe=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,E.H=e===null||e.memoizedState===null?jp:Br,ll=!1,c=n(i,o),ll=!1,Ul&&(c=Bu(a,n,i,o)),qu(e),c}function qu(e){E.H=_i;var a=lt!==null&&lt.next!==null;if(Ja=0,_t=lt=Oe=null,ks=!1,ji=0,Hl=null,a)throw Error(d(300));e===null||St||(e=e.dependencies,e!==null&&gs(e)&&(St=!0))}function Bu(e,a,n,i){Oe=e;var o=0;do{if(Ul&&(Hl=null),ji=0,Ul=!1,25<=o)throw Error(d(301));if(o+=1,_t=lt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}E.H=wp,c=a(n,i)}while(Ul);return c}function ag(){var e=E.H,a=e.useState()[0];return a=typeof a.then=="function"?wi(a):a,e=e.useState()[0],(lt!==null?lt.memoizedState:null)!==e&&(Oe.flags|=1024),a}function kr(){var e=Cs!==0;return Cs=0,e}function Cr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function zr(e){if(ks){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}ks=!1}Ja=0,_t=lt=Oe=null,Ul=!1,ji=Cs=0,Hl=null}function ea(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Oe.memoizedState=_t=e:_t=_t.next=e,_t}function vt(){if(lt===null){var e=Oe.alternate;e=e!==null?e.memoizedState:null}else e=lt.next;var a=_t===null?Oe.memoizedState:_t.next;if(a!==null)_t=a,lt=e;else{if(e===null)throw Oe.alternate===null?Error(d(467)):Error(d(310));lt=e,e={memoizedState:lt.memoizedState,baseState:lt.baseState,baseQueue:lt.baseQueue,queue:lt.queue,next:null},_t===null?Oe.memoizedState=_t=e:_t=_t.next=e}return _t}function zs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wi(e){var a=ji;return ji+=1,Hl===null&&(Hl=[]),e=Eu(Hl,e,a),a=Oe,(_t===null?a.memoizedState:_t.next)===null&&(a=a.alternate,E.H=a===null||a.memoizedState===null?jp:Br),e}function Ts(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return wi(e);if(e.$$typeof===D)return Qt(e)}throw Error(d(438,String(e)))}function Tr(e){var a=null,n=Oe.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var i=Oe.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=zs(),Oe.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),i=0;i<e;i++)n[i]=se;return a.index++,n}function Fa(e,a){return typeof a=="function"?a(e):a}function Es(e){var a=vt();return Er(a,lt,e)}function Er(e,a,n){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=n;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var u=o.next;o.next=c.next,c.next=u}a.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{a=o.next;var x=u=null,z=null,Y=a,P=!1;do{var te=Y.lane&-536870913;if(te!==Y.lane?(Ve&te)===te:(Ja&te)===te){var Q=Y.revertLane;if(Q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null}),te===Ml&&(P=!0);else if((Ja&Q)===Q){Y=Y.next,Q===Ml&&(P=!0);continue}else te={lane:0,revertLane:Y.revertLane,gesture:null,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(x=z=te,u=c):z=z.next=te,Oe.lanes|=Q,_n|=Q;te=Y.action,ll&&n(c,te),c=Y.hasEagerState?Y.eagerState:n(c,te)}else Q={lane:te,revertLane:Y.revertLane,gesture:Y.gesture,action:Y.action,hasEagerState:Y.hasEagerState,eagerState:Y.eagerState,next:null},z===null?(x=z=Q,u=c):z=z.next=Q,Oe.lanes|=te,_n|=te;Y=Y.next}while(Y!==null&&Y!==a);if(z===null?u=c:z.next=x,!ua(c,e.memoizedState)&&(St=!0,P&&(n=Dl,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=z,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Mr(e){var a=vt(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=a.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do c=e(c,u.action),u=u.next;while(u!==o);ua(c,a.memoizedState)||(St=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,i]}function Gu(e,a,n){var i=Oe,o=vt(),c=Qe;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!ua((lt||o).memoizedState,n);if(u&&(o.memoizedState=n,St=!0),o=o.queue,Ar($u.bind(null,i,o,e),[e]),o.getSnapshot!==a||u||_t!==null&&_t.memoizedState.tag&1){if(i.flags|=2048,Ll(9,{destroy:void 0},Vu.bind(null,i,o,n,a),null),rt===null)throw Error(d(349));c||(Ja&127)!==0||Yu(i,a,n)}return n}function Yu(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=Oe.updateQueue,a===null?(a=zs(),Oe.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Vu(e,a,n,i){a.value=n,a.getSnapshot=i,Qu(a)&&Xu(e)}function $u(e,a,n){return n(function(){Qu(a)&&Xu(e)})}function Qu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ua(e,n)}catch{return!0}}function Xu(e){var a=Jn(e,2);a!==null&&ca(a,e,2)}function Dr(e){var a=ea();if(typeof e=="function"){var n=e;if(e=n(),ll){It(!0);try{n()}finally{It(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:e},a}function Zu(e,a,n,i){return e.baseState=n,Er(e,lt,typeof i=="function"?i:Fa)}function ng(e,a,n,i,o){if(Os(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};E.T!==null?n(!0):c.isTransition=!1,i(c),n=a.pending,n===null?(c.next=a.pending=c,Ku(a,c)):(c.next=n.next,a.pending=n.next=c)}}function Ku(e,a){var n=a.action,i=a.payload,o=e.state;if(a.isTransition){var c=E.T,u={};E.T=u;try{var x=n(o,i),z=E.S;z!==null&&z(u,x),Ju(e,a,x)}catch(Y){Or(e,a,Y)}finally{c!==null&&u.types!==null&&(c.types=u.types),E.T=c}}else try{c=n(o,i),Ju(e,a,c)}catch(Y){Or(e,a,Y)}}function Ju(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){Fu(e,a,i)},function(i){return Or(e,a,i)}):Fu(e,a,n)}function Fu(e,a,n){a.status="fulfilled",a.value=n,Wu(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,Ku(e,n)))}function Or(e,a,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=n,Wu(a),a=a.next;while(a!==i)}e.action=null}function Wu(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function Pu(e,a){return a}function Iu(e,a){if(Qe){var n=rt.formState;if(n!==null){e:{var i=Oe;if(Qe){if(dt){t:{for(var o=dt,c=Ca;o.nodeType!==8;){if(!c){o=null;break t}if(o=Ta(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){dt=Ta(o.nextSibling),i=o.data==="F!";break e}}hn(i)}i=!1}i&&(a=n[0])}}return n=ea(),n.memoizedState=n.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pu,lastRenderedState:a},n.queue=i,n=bp.bind(null,Oe,i),i.dispatch=n,i=Dr(!1),c=qr.bind(null,Oe,!1,i.queue),i=ea(),o={state:a,dispatch:null,action:e,pending:null},i.queue=o,n=ng.bind(null,Oe,o,c,n),o.dispatch=n,i.memoizedState=e,[a,n,!1]}function ep(e){var a=vt();return tp(a,lt,e)}function tp(e,a,n){if(a=Er(e,a,Pu)[0],e=Es(Fa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=wi(a)}catch(u){throw u===Ol?vs:u}else i=a;a=vt();var o=a.queue,c=o.dispatch;return n!==a.memoizedState&&(Oe.flags|=2048,Ll(9,{destroy:void 0},lg.bind(null,o,n),null)),[i,c,e]}function lg(e,a){e.action=a}function ap(e){var a=vt(),n=lt;if(n!==null)return tp(a,n,e);vt(),a=a.memoizedState,n=vt();var i=n.queue.dispatch;return n.memoizedState=e,[a,i,!1]}function Ll(e,a,n,i){return e={tag:e,create:n,deps:i,inst:a,next:null},a=Oe.updateQueue,a===null&&(a=zs(),Oe.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,a.lastEffect=e),e}function np(){return vt().memoizedState}function Ms(e,a,n,i){var o=ea();Oe.flags|=e,o.memoizedState=Ll(1|a,{destroy:void 0},n,i===void 0?null:i)}function Ds(e,a,n,i){var o=vt();i=i===void 0?null:i;var c=o.memoizedState.inst;lt!==null&&i!==null&&_r(i,lt.memoizedState.deps)?o.memoizedState=Ll(a,c,n,i):(Oe.flags|=e,o.memoizedState=Ll(1|a,c,n,i))}function lp(e,a){Ms(8390656,8,e,a)}function Ar(e,a){Ds(2048,8,e,a)}function ig(e){Oe.flags|=4;var a=Oe.updateQueue;if(a===null)a=zs(),Oe.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function ip(e){var a=vt().memoizedState;return ig({ref:a,nextImpl:e}),function(){if((We&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function sp(e,a){return Ds(4,2,e,a)}function op(e,a){return Ds(4,4,e,a)}function rp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function cp(e,a,n){n=n!=null?n.concat([e]):null,Ds(4,4,rp.bind(null,a,e),n)}function Rr(){}function dp(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;return a!==null&&_r(a,i[1])?i[0]:(n.memoizedState=[e,a],e)}function up(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;if(a!==null&&_r(a,i[1]))return i[0];if(i=e(),ll){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[i,a],i}function Ur(e,a,n){return n===void 0||(Ja&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=pm(),Oe.lanes|=e,_n|=e,n)}function pp(e,a,n,i){return ua(n,a)?n:Rl.current!==null?(e=Ur(e,n,i),ua(e,a)||(St=!0),e):(Ja&42)===0||(Ja&1073741824)!==0&&(Ve&261930)===0?(St=!0,e.memoizedState=n):(e=pm(),Oe.lanes|=e,_n|=e,a)}function mp(e,a,n,i,o){var c=$.p;$.p=c!==0&&8>c?c:8;var u=E.T,x={};E.T=x,qr(e,!1,a,n);try{var z=o(),Y=E.S;if(Y!==null&&Y(x,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var P=eg(z,i);Ni(e,a,P,ga(e))}else Ni(e,a,i,ga(e))}catch(te){Ni(e,a,{then:function(){},status:"rejected",reason:te},ga())}finally{$.p=c,u!==null&&x.types!==null&&(u.types=x.types),E.T=u}}function sg(){}function Hr(e,a,n,i){if(e.tag!==5)throw Error(d(476));var o=fp(e).queue;mp(e,o,a,N,n===null?sg:function(){return hp(e),n(i)})}function fp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:N},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fa,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function hp(e){var a=fp(e);a.next===null&&(a=e.alternate.memoizedState),Ni(e,a.next.queue,{},ga())}function Lr(){return Qt(Bi)}function xp(){return vt().memoizedState}function gp(){return vt().memoizedState}function og(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ga();e=bn(n);var i=yn(a,e,n);i!==null&&(ca(i,a,n),bi(i,a,n)),a={cache:mr()},e.payload=a;return}a=a.return}}function rg(e,a,n){var i=ga();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Os(e)?yp(a,n):(n=ar(e,a,n,i),n!==null&&(ca(n,e,i),vp(n,a,i)))}function bp(e,a,n){var i=ga();Ni(e,a,n,i)}function Ni(e,a,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Os(e))yp(a,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,x=c(u,n);if(o.hasEagerState=!0,o.eagerState=x,ua(x,u))return ms(e,a,o,0),rt===null&&ps(),!1}catch{}finally{}if(n=ar(e,a,o,i),n!==null)return ca(n,e,i),vp(n,a,i),!0}return!1}function qr(e,a,n,i){if(i={lane:2,revertLane:gc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Os(e)){if(a)throw Error(d(479))}else a=ar(e,n,i,2),a!==null&&ca(a,e,2)}function Os(e){var a=e.alternate;return e===Oe||a!==null&&a===Oe}function yp(e,a){Ul=ks=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function vp(e,a,n){if((n&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,w(e,n)}}var _i={readContext:Qt,use:Ts,useCallback:gt,useContext:gt,useEffect:gt,useImperativeHandle:gt,useLayoutEffect:gt,useInsertionEffect:gt,useMemo:gt,useReducer:gt,useRef:gt,useState:gt,useDebugValue:gt,useDeferredValue:gt,useTransition:gt,useSyncExternalStore:gt,useId:gt,useHostTransitionStatus:gt,useFormState:gt,useActionState:gt,useOptimistic:gt,useMemoCache:gt,useCacheRefresh:gt};_i.useEffectEvent=gt;var jp={readContext:Qt,use:Ts,useCallback:function(e,a){return ea().memoizedState=[e,a===void 0?null:a],e},useContext:Qt,useEffect:lp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ms(4194308,4,rp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ms(4194308,4,e,a)},useInsertionEffect:function(e,a){Ms(4,2,e,a)},useMemo:function(e,a){var n=ea();a=a===void 0?null:a;var i=e();if(ll){It(!0);try{e()}finally{It(!1)}}return n.memoizedState=[i,a],i},useReducer:function(e,a,n){var i=ea();if(n!==void 0){var o=n(a);if(ll){It(!0);try{n(a)}finally{It(!1)}}}else o=a;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=rg.bind(null,Oe,e),[i.memoizedState,e]},useRef:function(e){var a=ea();return e={current:e},a.memoizedState=e},useState:function(e){e=Dr(e);var a=e.queue,n=bp.bind(null,Oe,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Rr,useDeferredValue:function(e,a){var n=ea();return Ur(n,e,a)},useTransition:function(){var e=Dr(!1);return e=mp.bind(null,Oe,e.queue,!0,!1),ea().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var i=Oe,o=ea();if(Qe){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),rt===null)throw Error(d(349));(Ve&127)!==0||Yu(i,a,n)}o.memoizedState=n;var c={value:n,getSnapshot:a};return o.queue=c,lp($u.bind(null,i,c,e),[e]),i.flags|=2048,Ll(9,{destroy:void 0},Vu.bind(null,i,c,n,a),null),n},useId:function(){var e=ea(),a=rt.identifierPrefix;if(Qe){var n=Ha,i=Ua;n=(i&~(1<<32-U(i)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Cs++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=tg++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Lr,useFormState:Iu,useActionState:Iu,useOptimistic:function(e){var a=ea();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=qr.bind(null,Oe,!0,n),n.dispatch=a,[e,a]},useMemoCache:Tr,useCacheRefresh:function(){return ea().memoizedState=og.bind(null,Oe)},useEffectEvent:function(e){var a=ea(),n={impl:e};return a.memoizedState=n,function(){if((We&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Br={readContext:Qt,use:Ts,useCallback:dp,useContext:Qt,useEffect:Ar,useImperativeHandle:cp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:Es,useRef:np,useState:function(){return Es(Fa)},useDebugValue:Rr,useDeferredValue:function(e,a){var n=vt();return pp(n,lt.memoizedState,e,a)},useTransition:function(){var e=Es(Fa)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:wi(e),a]},useSyncExternalStore:Gu,useId:xp,useHostTransitionStatus:Lr,useFormState:ep,useActionState:ep,useOptimistic:function(e,a){var n=vt();return Zu(n,lt,e,a)},useMemoCache:Tr,useCacheRefresh:gp};Br.useEffectEvent=ip;var wp={readContext:Qt,use:Ts,useCallback:dp,useContext:Qt,useEffect:Ar,useImperativeHandle:cp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:Mr,useRef:np,useState:function(){return Mr(Fa)},useDebugValue:Rr,useDeferredValue:function(e,a){var n=vt();return lt===null?Ur(n,e,a):pp(n,lt.memoizedState,e,a)},useTransition:function(){var e=Mr(Fa)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:wi(e),a]},useSyncExternalStore:Gu,useId:xp,useHostTransitionStatus:Lr,useFormState:ap,useActionState:ap,useOptimistic:function(e,a){var n=vt();return lt!==null?Zu(n,lt,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Tr,useCacheRefresh:gp};wp.useEffectEvent=ip;function Gr(e,a,n,i){a=e.memoizedState,n=n(i,a),n=n==null?a:g({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Yr={enqueueSetState:function(e,a,n){e=e._reactInternals;var i=ga(),o=bn(i);o.payload=a,n!=null&&(o.callback=n),a=yn(e,o,i),a!==null&&(ca(a,e,i),bi(a,e,i))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var i=ga(),o=bn(i);o.tag=1,o.payload=a,n!=null&&(o.callback=n),a=yn(e,o,i),a!==null&&(ca(a,e,i),bi(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ga(),i=bn(n);i.tag=2,a!=null&&(i.callback=a),a=yn(e,i,n),a!==null&&(ca(a,e,n),bi(a,e,n))}};function Np(e,a,n,i,o,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,u):a.prototype&&a.prototype.isPureReactComponent?!di(n,i)||!di(o,c):!0}function _p(e,a,n,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,i),a.state!==e&&Yr.enqueueReplaceState(a,a.state,null)}function il(e,a){var n=a;if("ref"in a){n={};for(var i in a)i!=="ref"&&(n[i]=a[i])}if(e=e.defaultProps){n===a&&(n=g({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Sp(e){us(e)}function kp(e){console.error(e)}function Cp(e){us(e)}function As(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function zp(e,a,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Vr(e,a,n){return n=bn(n),n.tag=3,n.payload={element:null},n.callback=function(){As(e,a)},n}function Tp(e){return e=bn(e),e.tag=3,e}function Ep(e,a,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){zp(a,n,i)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){zp(a,n,i),typeof o!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function cg(e,a,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=n.alternate,a!==null&&El(a,n,o,!0),n=ma.current,n!==null){switch(n.tag){case 31:case 13:return za===null?Xs():n.alternate===null&&bt===0&&(bt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===js?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([i]):a.add(i),fc(e,i,o)),!1;case 22:return n.flags|=65536,i===js?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([i]):n.add(i)),fc(e,i,o)),!1}throw Error(d(435,n.tag))}return fc(e,i,o),Xs(),!1}if(Qe)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,i!==rr&&(e=Error(d(422),{cause:i}),mi(_a(e,n)))):(i!==rr&&(a=Error(d(423),{cause:i}),mi(_a(a,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=_a(i,n),o=Vr(e.stateNode,i,o),yr(e,o),bt!==4&&(bt=2)),!1;var c=Error(d(520),{cause:i});if(c=_a(c,n),Di===null?Di=[c]:Di.push(c),bt!==4&&(bt=2),a===null)return!0;i=_a(i,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Vr(n.stateNode,i,e),yr(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Sn===null||!Sn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Tp(o),Ep(o,e,n,i),yr(n,o),!1}n=n.return}while(n!==null);return!1}var $r=Error(d(461)),St=!1;function Xt(e,a,n,i){a.child=e===null?Au(a,null,n,i):nl(a,e.child,n,i)}function Mp(e,a,n,i,o){n=n.render;var c=a.ref;if("ref"in i){var u={};for(var x in i)x!=="ref"&&(u[x]=i[x])}else u=i;return In(a),i=Sr(e,a,n,u,c,o),x=kr(),e!==null&&!St?(Cr(e,a,o),Wa(e,a,o)):(Qe&&x&&sr(a),a.flags|=1,Xt(e,a,i,o),a.child)}function Dp(e,a,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!nr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Op(e,a,c,i,o)):(e=hs(n.type,null,i,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!Pr(e,o)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:di,n(u,i)&&e.ref===a.ref)return Wa(e,a,o)}return a.flags|=1,e=Qa(c,i),e.ref=a.ref,e.return=a,a.child=e}function Op(e,a,n,i,o){if(e!==null){var c=e.memoizedProps;if(di(c,i)&&e.ref===a.ref)if(St=!1,a.pendingProps=i=c,Pr(e,o))(e.flags&131072)!==0&&(St=!0);else return a.lanes=e.lanes,Wa(e,a,o)}return Qr(e,a,n,i,o)}function Ap(e,a,n,i){var o=i.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=a.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,a.child=null;return Rp(e,a,c,n,i)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&ys(a,c!==null?c.cachePool:null),c!==null?Hu(a,c):jr(),Lu(a);else return i=a.lanes=536870912,Rp(e,a,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(ys(a,c.cachePool),Hu(a,c),jn(),a.memoizedState=null):(e!==null&&ys(a,null),jr(),jn());return Xt(e,a,o,n),a.child}function Si(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Rp(e,a,n,i,o){var c=hr();return c=c===null?null:{parent:Nt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&ys(a,null),jr(),Lu(a),e!==null&&El(e,a,i,!0),a.childLanes=o,null}function Rs(e,a){return a=Hs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Up(e,a,n){return nl(a,e.child,null,n),e=Rs(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function dg(e,a,n){var i=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Qe){if(i.mode==="hidden")return e=Rs(a,i),a.lanes=536870912,Si(null,e);if(Nr(a),(e=dt)?(e=Km(e,Ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ua,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},n=yu(e),n.return=a,a.child=n,$t=a,dt=null)):e=null,e===null)throw hn(a);return a.lanes=536870912,null}return Rs(a,i)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Nr(a),o)if(a.flags&256)a.flags&=-257,a=Up(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(St||El(e,a,n,!1),o=(n&e.childLanes)!==0,St||o){if(i=rt,i!==null&&(u=he(i,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,Jn(e,u),ca(i,e,u),$r;Xs(),a=Up(e,a,n)}else e=c.treeContext,dt=Ta(u.nextSibling),$t=a,Qe=!0,fn=null,Ca=!1,e!==null&&wu(a,e),a=Rs(a,i),a.flags|=4096;return a}return e=Qa(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Us(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function Qr(e,a,n,i,o){return In(a),n=Sr(e,a,n,i,void 0,o),i=kr(),e!==null&&!St?(Cr(e,a,o),Wa(e,a,o)):(Qe&&i&&sr(a),a.flags|=1,Xt(e,a,n,o),a.child)}function Hp(e,a,n,i,o,c){return In(a),a.updateQueue=null,n=Bu(a,i,n,o),qu(e),i=kr(),e!==null&&!St?(Cr(e,a,c),Wa(e,a,c)):(Qe&&i&&sr(a),a.flags|=1,Xt(e,a,n,c),a.child)}function Lp(e,a,n,i,o){if(In(a),a.stateNode===null){var c=kl,u=n.contextType;typeof u=="object"&&u!==null&&(c=Qt(u)),c=new n(i,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Yr,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=i,c.state=a.memoizedState,c.refs={},gr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Qt(u):kl,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Gr(a,n,u,i),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&Yr.enqueueReplaceState(c,c.state,null),vi(a,i,c,o),yi(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){c=a.stateNode;var x=a.memoizedProps,z=il(n,x);c.props=z;var Y=c.context,P=n.contextType;u=kl,typeof P=="object"&&P!==null&&(u=Qt(P));var te=n.getDerivedStateFromProps;P=typeof te=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,P||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||Y!==u)&&_p(a,c,i,u),gn=!1;var Q=a.memoizedState;c.state=Q,vi(a,i,c,o),yi(),Y=a.memoizedState,x||Q!==Y||gn?(typeof te=="function"&&(Gr(a,n,te,i),Y=a.memoizedState),(z=gn||Np(a,n,z,i,Q,Y,u))?(P||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=Y),c.props=i,c.state=Y,c.context=u,i=z):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{c=a.stateNode,br(e,a),u=a.memoizedProps,P=il(n,u),c.props=P,te=a.pendingProps,Q=c.context,Y=n.contextType,z=kl,typeof Y=="object"&&Y!==null&&(z=Qt(Y)),x=n.getDerivedStateFromProps,(Y=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==te||Q!==z)&&_p(a,c,i,z),gn=!1,Q=a.memoizedState,c.state=Q,vi(a,i,c,o),yi();var K=a.memoizedState;u!==te||Q!==K||gn||e!==null&&e.dependencies!==null&&gs(e.dependencies)?(typeof x=="function"&&(Gr(a,n,x,i),K=a.memoizedState),(P=gn||Np(a,n,P,i,Q,K,z)||e!==null&&e.dependencies!==null&&gs(e.dependencies))?(Y||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,K,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,K,z)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=K),c.props=i,c.state=K,c.context=z,i=P):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=1024),i=!1)}return c=i,Us(e,a),i=(a.flags&128)!==0,c||i?(c=a.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&i?(a.child=nl(a,e.child,null,o),a.child=nl(a,null,n,o)):Xt(e,a,n,o),a.memoizedState=c.state,e=a.child):e=Wa(e,a,o),e}function qp(e,a,n,i){return Wn(),a.flags|=256,Xt(e,a,n,i),a.child}var Xr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Zr(e){return{baseLanes:e,cachePool:zu()}}function Kr(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=xa),e}function Bp(e,a,n){var i=a.pendingProps,o=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),u&&(o=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Qe){if(o?vn(a):jn(),(e=dt)?(e=Km(e,Ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:mn!==null?{id:Ua,overflow:Ha}:null,retryLane:536870912,hydrationErrors:null},n=yu(e),n.return=a,a.child=n,$t=a,dt=null)):e=null,e===null)throw hn(a);return Ec(e)?a.lanes=32:a.lanes=536870912,null}var x=i.children;return i=i.fallback,o?(jn(),o=a.mode,x=Hs({mode:"hidden",children:x},o),i=Fn(i,o,n,null),x.return=a,i.return=a,x.sibling=i,a.child=x,i=a.child,i.memoizedState=Zr(n),i.childLanes=Kr(e,u,n),a.memoizedState=Xr,Si(null,i)):(vn(a),Jr(a,x))}var z=e.memoizedState;if(z!==null&&(x=z.dehydrated,x!==null)){if(c)a.flags&256?(vn(a),a.flags&=-257,a=Fr(e,a,n)):a.memoizedState!==null?(jn(),a.child=e.child,a.flags|=128,a=null):(jn(),x=i.fallback,o=a.mode,i=Hs({mode:"visible",children:i.children},o),x=Fn(x,o,n,null),x.flags|=2,i.return=a,x.return=a,i.sibling=x,a.child=i,nl(a,e.child,null,n),i=a.child,i.memoizedState=Zr(n),i.childLanes=Kr(e,u,n),a.memoizedState=Xr,a=Si(null,i));else if(vn(a),Ec(x)){if(u=x.nextSibling&&x.nextSibling.dataset,u)var Y=u.dgst;u=Y,i=Error(d(419)),i.stack="",i.digest=u,mi({value:i,source:null,stack:null}),a=Fr(e,a,n)}else if(St||El(e,a,n,!1),u=(n&e.childLanes)!==0,St||u){if(u=rt,u!==null&&(i=he(u,n),i!==0&&i!==z.retryLane))throw z.retryLane=i,Jn(e,i),ca(u,e,i),$r;Tc(x)||Xs(),a=Fr(e,a,n)}else Tc(x)?(a.flags|=192,a.child=e.child,a=null):(e=z.treeContext,dt=Ta(x.nextSibling),$t=a,Qe=!0,fn=null,Ca=!1,e!==null&&wu(a,e),a=Jr(a,i.children),a.flags|=4096);return a}return o?(jn(),x=i.fallback,o=a.mode,z=e.child,Y=z.sibling,i=Qa(z,{mode:"hidden",children:i.children}),i.subtreeFlags=z.subtreeFlags&65011712,Y!==null?x=Qa(Y,x):(x=Fn(x,o,n,null),x.flags|=2),x.return=a,i.return=a,i.sibling=x,a.child=i,Si(null,i),i=a.child,x=e.child.memoizedState,x===null?x=Zr(n):(o=x.cachePool,o!==null?(z=Nt._currentValue,o=o.parent!==z?{parent:z,pool:z}:o):o=zu(),x={baseLanes:x.baseLanes|n,cachePool:o}),i.memoizedState=x,i.childLanes=Kr(e,u,n),a.memoizedState=Xr,Si(e.child,i)):(vn(a),n=e.child,e=n.sibling,n=Qa(n,{mode:"visible",children:i.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function Jr(e,a){return a=Hs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Hs(e,a){return e=pa(22,e,null,a),e.lanes=0,e}function Fr(e,a,n){return nl(a,e.child,null,n),e=Jr(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Gp(e,a,n){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),ur(e.return,a,n)}function Wr(e,a,n,i,o,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=o,u.treeForkCount=c)}function Yp(e,a,n){var i=a.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var u=yt.current,x=(u&2)!==0;if(x?(u=u&1|2,a.flags|=128):u&=1,de(yt,u),Xt(e,a,i,n),i=Qe?pi:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Gp(e,n,a);else if(e.tag===19)Gp(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=a.child,o=null;n!==null;)e=n.alternate,e!==null&&Ss(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=a.child,a.child=null):(o=n.sibling,n.sibling=null),Wr(a,!1,o,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Ss(e)===null){a.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Wr(a,!0,n,null,c,i);break;case"together":Wr(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Wa(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),_n|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(El(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=Qa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Qa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function Pr(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&gs(e)))}function ug(e,a,n){switch(a.tag){case 3:Pe(a,a.stateNode.containerInfo),xn(a,Nt,e.memoizedState.cache),Wn();break;case 27:case 5:Et(a);break;case 4:Pe(a,a.stateNode.containerInfo);break;case 10:xn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Nr(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(vn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Bp(e,a,n):(vn(a),e=Wa(e,a,n),e!==null?e.sibling:null);vn(a);break;case 19:var o=(e.flags&128)!==0;if(i=(n&a.childLanes)!==0,i||(El(e,a,n,!1),i=(n&a.childLanes)!==0),o){if(i)return Yp(e,a,n);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),de(yt,yt.current),i)break;return null;case 22:return a.lanes=0,Ap(e,a,n,a.pendingProps);case 24:xn(a,Nt,e.memoizedState.cache)}return Wa(e,a,n)}function Vp(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)St=!0;else{if(!Pr(e,n)&&(a.flags&128)===0)return St=!1,ug(e,a,n);St=(e.flags&131072)!==0}else St=!1,Qe&&(a.flags&1048576)!==0&&ju(a,pi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=tl(a.elementType),a.type=e,typeof e=="function")nr(e)?(i=il(e,i),a.tag=1,a=Lp(null,a,e,i,n)):(a.tag=0,a=Qr(null,a,e,i,n));else{if(e!=null){var o=e.$$typeof;if(o===X){a.tag=11,a=Mp(null,a,e,i,n);break e}else if(o===R){a.tag=14,a=Dp(null,a,e,i,n);break e}}throw a=S(e)||e,Error(d(306,a,""))}}return a;case 0:return Qr(e,a,a.type,a.pendingProps,n);case 1:return i=a.type,o=il(i,a.pendingProps),Lp(e,a,i,o,n);case 3:e:{if(Pe(a,a.stateNode.containerInfo),e===null)throw Error(d(387));i=a.pendingProps;var c=a.memoizedState;o=c.element,br(e,a),vi(a,i,null,n);var u=a.memoizedState;if(i=u.cache,xn(a,Nt,i),i!==c.cache&&pr(a,[Nt],n,!0),yi(),i=u.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=qp(e,a,i,n);break e}else if(i!==o){o=_a(Error(d(424)),a),mi(o),a=qp(e,a,i,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(dt=Ta(e.firstChild),$t=a,Qe=!0,fn=null,Ca=!0,n=Au(a,null,i,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(Wn(),i===o){a=Wa(e,a,n);break e}Xt(e,a,i,n)}a=a.child}return a;case 26:return Us(e,a),e===null?(n=ef(a.type,null,a.pendingProps,null))?a.memoizedState=n:Qe||(n=a.type,e=a.pendingProps,i=Is(ve.current).createElement(n),i[Vt]=a,i[na]=e,Zt(i,n,e),Ht(i),a.stateNode=i):a.memoizedState=ef(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Et(a),e===null&&Qe&&(i=a.stateNode=Wm(a.type,a.pendingProps,ve.current),$t=a,Ca=!0,o=dt,Tn(a.type)?(Mc=o,dt=Ta(i.firstChild)):dt=o),Xt(e,a,a.pendingProps.children,n),Us(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Qe&&((o=i=dt)&&(i=Gg(i,a.type,a.pendingProps,Ca),i!==null?(a.stateNode=i,$t=a,dt=Ta(i.firstChild),Ca=!1,o=!0):o=!1),o||hn(a)),Et(a),o=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,i=c.children,kc(o,c)?i=null:u!==null&&kc(o,u)&&(a.flags|=32),a.memoizedState!==null&&(o=Sr(e,a,ag,null,null,n),Bi._currentValue=o),Us(e,a),Xt(e,a,i,n),a.child;case 6:return e===null&&Qe&&((e=n=dt)&&(n=Yg(n,a.pendingProps,Ca),n!==null?(a.stateNode=n,$t=a,dt=null,e=!0):e=!1),e||hn(a)),null;case 13:return Bp(e,a,n);case 4:return Pe(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=nl(a,null,i,n):Xt(e,a,i,n),a.child;case 11:return Mp(e,a,a.type,a.pendingProps,n);case 7:return Xt(e,a,a.pendingProps,n),a.child;case 8:return Xt(e,a,a.pendingProps.children,n),a.child;case 12:return Xt(e,a,a.pendingProps.children,n),a.child;case 10:return i=a.pendingProps,xn(a,a.type,i.value),Xt(e,a,i.children,n),a.child;case 9:return o=a.type._context,i=a.pendingProps.children,In(a),o=Qt(o),i=i(o),a.flags|=1,Xt(e,a,i,n),a.child;case 14:return Dp(e,a,a.type,a.pendingProps,n);case 15:return Op(e,a,a.type,a.pendingProps,n);case 19:return Yp(e,a,n);case 31:return dg(e,a,n);case 22:return Ap(e,a,n,a.pendingProps);case 24:return In(a),i=Qt(Nt),e===null?(o=hr(),o===null&&(o=rt,c=mr(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),a.memoizedState={parent:i,cache:o},gr(a),xn(a,Nt,o)):((e.lanes&n)!==0&&(br(e,a),vi(a,null,null,n),yi()),o=e.memoizedState,c=a.memoizedState,o.parent!==i?(o={parent:i,cache:i},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),xn(a,Nt,i)):(i=c.cache,xn(a,Nt,i),i!==o.cache&&pr(a,[Nt],n,!0))),Xt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Pa(e){e.flags|=4}function Ir(e,a,n,i,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(xm())e.flags|=8192;else throw al=js,xr}else e.flags&=-16777217}function $p(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!sf(a))if(xm())e.flags|=8192;else throw al=js,xr}function Ls(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?Vn():536870912,e.lanes|=a,Yl|=a)}function ki(e,a){if(!Qe)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ut(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(a)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,a}function pg(e,a,n){var i=a.pendingProps;switch(or(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ut(a),null;case 1:return ut(a),null;case 3:return n=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Ka(Nt),Fe(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Tl(a)?Pa(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,cr())),ut(a),null;case 26:var o=a.type,c=a.memoizedState;return e===null?(Pa(a),c!==null?(ut(a),$p(a,c)):(ut(a),Ir(a,o,null,i,n))):c?c!==e.memoizedState?(Pa(a),ut(a),$p(a,c)):(ut(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&Pa(a),ut(a),Ir(a,o,e,i,n)),null;case 27:if(Bt(a),n=ve.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Pa(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ut(a),null}e=fe.current,Tl(a)?Nu(a):(e=Wm(o,i,n),a.stateNode=e,Pa(a))}return ut(a),null;case 5:if(Bt(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Pa(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ut(a),null}if(c=fe.current,Tl(a))Nu(a);else{var u=Is(ve.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?u.createElement(o,{is:i.is}):u.createElement(o)}}c[Vt]=a,c[na]=i;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Zt(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Pa(a)}}return ut(a),Ir(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&Pa(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(d(166));if(e=ve.current,Tl(a)){if(e=a.stateNode,n=a.memoizedProps,i=null,o=$t,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Vt]=a,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Bm(e.nodeValue,n)),e||hn(a,!0)}else e=Is(e).createTextNode(i),e[Vt]=a,a.stateNode=e}return ut(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(i=Tl(a),n!==null){if(e===null){if(!i)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Vt]=a}else Wn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ut(a),e=!1}else n=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ut(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=Tl(a),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[Vt]=a}else Wn(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ut(a),o=!1}else o=cr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=n,a):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=a.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Ls(a,a.updateQueue),ut(a),null);case 4:return Fe(),e===null&&jc(a.stateNode.containerInfo),ut(a),null;case 10:return Ka(a.type),ut(a),null;case 19:if(Z(yt),i=a.memoizedState,i===null)return ut(a),null;if(o=(a.flags&128)!==0,c=i.rendering,c===null)if(o)ki(i,!1);else{if(bt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=Ss(e),c!==null){for(a.flags|=128,ki(i,!1),e=c.updateQueue,a.updateQueue=e,Ls(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)bu(n,e),n=n.sibling;return de(yt,yt.current&1|2),Qe&&Xa(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&ye()>Vs&&(a.flags|=128,o=!0,ki(i,!1),a.lanes=4194304)}else{if(!o)if(e=Ss(c),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,Ls(a,e),ki(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Qe)return ut(a),null}else 2*ye()-i.renderingStartTime>Vs&&n!==536870912&&(a.flags|=128,o=!0,ki(i,!1),a.lanes=4194304);i.isBackwards?(c.sibling=a.child,a.child=c):(e=i.last,e!==null?e.sibling=c:a.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=ye(),e.sibling=null,n=yt.current,de(yt,o?n&1|2:n&1),Qe&&Xa(a,i.treeForkCount),e):(ut(a),null);case 22:case 23:return fa(a),wr(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(n&536870912)!==0&&(a.flags&128)===0&&(ut(a),a.subtreeFlags&6&&(a.flags|=8192)):ut(a),n=a.updateQueue,n!==null&&Ls(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048),e!==null&&Z(el),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Ka(Nt),ut(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function mg(e,a){switch(or(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ka(Nt),Fe(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Bt(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(d(340));Wn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));Wn()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Z(yt),null;case 4:return Fe(),null;case 10:return Ka(a.type),null;case 22:case 23:return fa(a),wr(),e!==null&&Z(el),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ka(Nt),null;case 25:return null;default:return null}}function Qp(e,a){switch(or(a),a.tag){case 3:Ka(Nt),Fe();break;case 26:case 27:case 5:Bt(a);break;case 4:Fe();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:Z(yt);break;case 10:Ka(a.type);break;case 22:case 23:fa(a),wr(),e!==null&&Z(el);break;case 24:Ka(Nt)}}function Ci(e,a){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var c=n.create,u=n.inst;i=c(),u.destroy=i}n=n.next}while(n!==o)}}catch(x){nt(a,a.return,x)}}function wn(e,a,n){try{var i=a.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var u=i.inst,x=u.destroy;if(x!==void 0){u.destroy=void 0,o=a;var z=n,Y=x;try{Y()}catch(P){nt(o,z,P)}}}i=i.next}while(i!==c)}}catch(P){nt(a,a.return,P)}}function Xp(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Uu(a,n)}catch(i){nt(e,e.return,i)}}}function Zp(e,a,n){n.props=il(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){nt(e,a,i)}}function zi(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){nt(e,a,o)}}function La(e,a){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){nt(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){nt(e,a,o)}else n.current=null}function Kp(e){var a=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){nt(e,e.return,o)}}function ec(e,a,n){try{var i=e.stateNode;Rg(i,e.type,n,a),i[na]=a}catch(o){nt(e,e.return,o)}}function Jp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Tn(e.type)||e.tag===4}function tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Jp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Tn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ac(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Va));else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(ac(e,a,n),e=e.sibling;e!==null;)ac(e,a,n),e=e.sibling}function qs(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(i!==4&&(i===27&&Tn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(qs(e,a,n),e=e.sibling;e!==null;)qs(e,a,n),e=e.sibling}function Fp(e){var a=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);Zt(a,i,n),a[Vt]=e,a[na]=n}catch(c){nt(e,e.return,c)}}var Ia=!1,kt=!1,nc=!1,Wp=typeof WeakSet=="function"?WeakSet:Set,Lt=null;function fg(e,a){if(e=e.containerInfo,_c=so,e=cu(e),Fo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,x=-1,z=-1,Y=0,P=0,te=e,Q=null;t:for(;;){for(var K;te!==n||o!==0&&te.nodeType!==3||(x=u+o),te!==c||i!==0&&te.nodeType!==3||(z=u+i),te.nodeType===3&&(u+=te.nodeValue.length),(K=te.firstChild)!==null;)Q=te,te=K;for(;;){if(te===e)break t;if(Q===n&&++Y===o&&(x=u),Q===c&&++P===i&&(z=u),(K=te.nextSibling)!==null)break;te=Q,Q=te.parentNode}te=K}n=x===-1||z===-1?null:{start:x,end:z}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sc={focusedElem:e,selectionRange:n},so=!1,Lt=a;Lt!==null;)if(a=Lt,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Lt=e;else for(;Lt!==null;){switch(a=Lt,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,o=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var je=il(n.type,o);e=i.getSnapshotBeforeUpdate(je,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ze){nt(n,n.return,ze)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)zc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":zc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Lt=e;break}Lt=a.return}}function Pp(e,a,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:tn(e,n),i&4&&Ci(5,n);break;case 1:if(tn(e,n),i&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){nt(n,n.return,u)}else{var o=il(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){nt(n,n.return,u)}}i&64&&Xp(n),i&512&&zi(n,n.return);break;case 3:if(tn(e,n),i&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Uu(e,a)}catch(u){nt(n,n.return,u)}}break;case 27:a===null&&i&4&&Fp(n);case 26:case 5:tn(e,n),a===null&&i&4&&Kp(n),i&512&&zi(n,n.return);break;case 12:tn(e,n);break;case 31:tn(e,n),i&4&&tm(e,n);break;case 13:tn(e,n),i&4&&am(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Ng.bind(null,n),Vg(e,n))));break;case 22:if(i=n.memoizedState!==null||Ia,!i){a=a!==null&&a.memoizedState!==null||kt,o=Ia;var c=kt;Ia=i,(kt=a)&&!c?an(e,n,(n.subtreeFlags&8772)!==0):tn(e,n),Ia=o,kt=c}break;case 30:break;default:tn(e,n)}}function Ip(e){var a=e.alternate;a!==null&&(e.alternate=null,Ip(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Oo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ft=null,ia=!1;function en(e,a,n){for(n=n.child;n!==null;)em(e,a,n),n=n.sibling}function em(e,a,n){if(xt&&typeof xt.onCommitFiberUnmount=="function")try{xt.onCommitFiberUnmount(Ma,n)}catch{}switch(n.tag){case 26:kt||La(n,a),en(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||La(n,a);var i=ft,o=ia;Tn(n.type)&&(ft=n.stateNode,ia=!1),en(e,a,n),Hi(n.stateNode),ft=i,ia=o;break;case 5:kt||La(n,a);case 6:if(i=ft,o=ia,ft=null,en(e,a,n),ft=i,ia=o,ft!==null)if(ia)try{(ft.nodeType===9?ft.body:ft.nodeName==="HTML"?ft.ownerDocument.body:ft).removeChild(n.stateNode)}catch(c){nt(n,a,c)}else try{ft.removeChild(n.stateNode)}catch(c){nt(n,a,c)}break;case 18:ft!==null&&(ia?(e=ft,Xm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Fl(e)):Xm(ft,n.stateNode));break;case 4:i=ft,o=ia,ft=n.stateNode.containerInfo,ia=!0,en(e,a,n),ft=i,ia=o;break;case 0:case 11:case 14:case 15:wn(2,n,a),kt||wn(4,n,a),en(e,a,n);break;case 1:kt||(La(n,a),i=n.stateNode,typeof i.componentWillUnmount=="function"&&Zp(n,a,i)),en(e,a,n);break;case 21:en(e,a,n);break;case 22:kt=(i=kt)||n.memoizedState!==null,en(e,a,n),kt=i;break;default:en(e,a,n)}}function tm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Fl(e)}catch(n){nt(a,a.return,n)}}}function am(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Fl(e)}catch(n){nt(a,a.return,n)}}function hg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new Wp),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new Wp),a;default:throw Error(d(435,e.tag))}}function Bs(e,a){var n=hg(e);a.forEach(function(i){if(!n.has(i)){n.add(i);var o=_g.bind(null,e,i);i.then(o,o)}})}function sa(e,a){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],c=e,u=a,x=u;e:for(;x!==null;){switch(x.tag){case 27:if(Tn(x.type)){ft=x.stateNode,ia=!1;break e}break;case 5:ft=x.stateNode,ia=!1;break e;case 3:case 4:ft=x.stateNode.containerInfo,ia=!0;break e}x=x.return}if(ft===null)throw Error(d(160));em(c,u,o),ft=null,ia=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)nm(a,e),a=a.sibling}var Aa=null;function nm(e,a){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sa(a,e),oa(e),i&4&&(wn(3,e,e.return),Ci(3,e),wn(5,e,e.return));break;case 1:sa(a,e),oa(e),i&512&&(kt||n===null||La(n,n.return)),i&64&&Ia&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=Aa;if(sa(a,e),oa(e),i&512&&(kt||n===null||La(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[ti]||c[Vt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),Zt(c,i,n),c[Vt]=e,Ht(c),i=c;break e;case"link":var u=nf("link","href",o).get(i+(n.href||""));if(u){for(var x=0;x<u.length;x++)if(c=u[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(x,1);break t}}c=o.createElement(i),Zt(c,i,n),o.head.appendChild(c);break;case"meta":if(u=nf("meta","content",o).get(i+(n.content||""))){for(x=0;x<u.length;x++)if(c=u[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(x,1);break t}}c=o.createElement(i),Zt(c,i,n),o.head.appendChild(c);break;default:throw Error(d(468,i))}c[Vt]=e,Ht(c),i=c}e.stateNode=i}else lf(o,e.type,e.stateNode);else e.stateNode=af(o,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?lf(o,e.type,e.stateNode):af(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&ec(e,e.memoizedProps,n.memoizedProps)}break;case 27:sa(a,e),oa(e),i&512&&(kt||n===null||La(n,n.return)),n!==null&&i&4&&ec(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sa(a,e),oa(e),i&512&&(kt||n===null||La(n,n.return)),e.flags&32){o=e.stateNode;try{yl(o,"")}catch(je){nt(e,e.return,je)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,ec(e,o,n!==null?n.memoizedProps:o)),i&1024&&(nc=!0);break;case 6:if(sa(a,e),oa(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(je){nt(e,e.return,je)}}break;case 3:if(ao=null,o=Aa,Aa=eo(a.containerInfo),sa(a,e),Aa=o,oa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Fl(a.containerInfo)}catch(je){nt(e,e.return,je)}nc&&(nc=!1,lm(e));break;case 4:i=Aa,Aa=eo(e.stateNode.containerInfo),sa(a,e),oa(e),Aa=i;break;case 12:sa(a,e),oa(e);break;case 31:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bs(e,i)));break;case 13:sa(a,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ys=ye()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bs(e,i)));break;case 22:o=e.memoizedState!==null;var z=n!==null&&n.memoizedState!==null,Y=Ia,P=kt;if(Ia=Y||o,kt=P||z,sa(a,e),kt=P,Ia=Y,oa(e),i&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(n===null||z||Ia||kt||sl(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){z=n=a;try{if(c=z.stateNode,o)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{x=z.stateNode;var te=z.memoizedProps.style,Q=te!=null&&te.hasOwnProperty("display")?te.display:null;x.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(je){nt(z,z.return,je)}}}else if(a.tag===6){if(n===null){z=a;try{z.stateNode.nodeValue=o?"":z.memoizedProps}catch(je){nt(z,z.return,je)}}}else if(a.tag===18){if(n===null){z=a;try{var K=z.stateNode;o?Zm(K,!0):Zm(z.stateNode,!1)}catch(je){nt(z,z.return,je)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Bs(e,n))));break;case 19:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Bs(e,i)));break;case 30:break;case 21:break;default:sa(a,e),oa(e)}}function oa(e){var a=e.flags;if(a&2){try{for(var n,i=e.return;i!==null;){if(Jp(i)){n=i;break}i=i.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var o=n.stateNode,c=tc(e);qs(e,c,o);break;case 5:var u=n.stateNode;n.flags&32&&(yl(u,""),n.flags&=-33);var x=tc(e);qs(e,x,u);break;case 3:case 4:var z=n.stateNode.containerInfo,Y=tc(e);ac(e,Y,z);break;default:throw Error(d(161))}}catch(P){nt(e,e.return,P)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function lm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;lm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function tn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)Pp(e,a.alternate,a),a=a.sibling}function sl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:wn(4,a,a.return),sl(a);break;case 1:La(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&Zp(a,a.return,n),sl(a);break;case 27:Hi(a.stateNode);case 26:case 5:La(a,a.return),sl(a);break;case 22:a.memoizedState===null&&sl(a);break;case 30:sl(a);break;default:sl(a)}e=e.sibling}}function an(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,o=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:an(o,c,n),Ci(4,c);break;case 1:if(an(o,c,n),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch(Y){nt(i,i.return,Y)}if(i=c,o=i.updateQueue,o!==null){var x=i.stateNode;try{var z=o.shared.hiddenCallbacks;if(z!==null)for(o.shared.hiddenCallbacks=null,o=0;o<z.length;o++)Ru(z[o],x)}catch(Y){nt(i,i.return,Y)}}n&&u&64&&Xp(c),zi(c,c.return);break;case 27:Fp(c);case 26:case 5:an(o,c,n),n&&i===null&&u&4&&Kp(c),zi(c,c.return);break;case 12:an(o,c,n);break;case 31:an(o,c,n),n&&u&4&&tm(o,c);break;case 13:an(o,c,n),n&&u&4&&am(o,c);break;case 22:c.memoizedState===null&&an(o,c,n),zi(c,c.return);break;case 30:break;default:an(o,c,n)}a=a.sibling}}function lc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&fi(n))}function ic(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&fi(e))}function Ra(e,a,n,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)im(e,a,n,i),a=a.sibling}function im(e,a,n,i){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a,n,i),o&2048&&Ci(9,a);break;case 1:Ra(e,a,n,i);break;case 3:Ra(e,a,n,i),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&fi(e)));break;case 12:if(o&2048){Ra(e,a,n,i),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,x=c.onPostCommit;typeof x=="function"&&x(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){nt(a,a.return,z)}}else Ra(e,a,n,i);break;case 31:Ra(e,a,n,i);break;case 13:Ra(e,a,n,i);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Ra(e,a,n,i):Ti(e,a):c._visibility&2?Ra(e,a,n,i):(c._visibility|=2,ql(e,a,n,i,(a.subtreeFlags&10256)!==0||!1)),o&2048&&lc(u,a);break;case 24:Ra(e,a,n,i),o&2048&&ic(a.alternate,a);break;default:Ra(e,a,n,i)}}function ql(e,a,n,i,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,x=n,z=i,Y=u.flags;switch(u.tag){case 0:case 11:case 15:ql(c,u,x,z,o),Ci(8,u);break;case 23:break;case 22:var P=u.stateNode;u.memoizedState!==null?P._visibility&2?ql(c,u,x,z,o):Ti(c,u):(P._visibility|=2,ql(c,u,x,z,o)),o&&Y&2048&&lc(u.alternate,u);break;case 24:ql(c,u,x,z,o),o&&Y&2048&&ic(u.alternate,u);break;default:ql(c,u,x,z,o)}a=a.sibling}}function Ti(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,i=a,o=i.flags;switch(i.tag){case 22:Ti(n,i),o&2048&&lc(i.alternate,i);break;case 24:Ti(n,i),o&2048&&ic(i.alternate,i);break;default:Ti(n,i)}a=a.sibling}}var Ei=8192;function Bl(e,a,n){if(e.subtreeFlags&Ei)for(e=e.child;e!==null;)sm(e,a,n),e=e.sibling}function sm(e,a,n){switch(e.tag){case 26:Bl(e,a,n),e.flags&Ei&&e.memoizedState!==null&&tb(n,Aa,e.memoizedState,e.memoizedProps);break;case 5:Bl(e,a,n);break;case 3:case 4:var i=Aa;Aa=eo(e.stateNode.containerInfo),Bl(e,a,n),Aa=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ei,Ei=16777216,Bl(e,a,n),Ei=i):Bl(e,a,n));break;default:Bl(e,a,n)}}function om(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Mi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Lt=i,cm(i,e)}om(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)rm(e),e=e.sibling}function rm(e){switch(e.tag){case 0:case 11:case 15:Mi(e),e.flags&2048&&wn(9,e,e.return);break;case 3:Mi(e);break;case 12:Mi(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Gs(e)):Mi(e);break;default:Mi(e)}}function Gs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Lt=i,cm(i,e)}om(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:wn(8,a,a.return),Gs(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Gs(a));break;default:Gs(a)}e=e.sibling}}function cm(e,a){for(;Lt!==null;){var n=Lt;switch(n.tag){case 0:case 11:case 15:wn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:fi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Lt=i;else e:for(n=e;Lt!==null;){i=Lt;var o=i.sibling,c=i.return;if(Ip(i),i===n){Lt=null;break e}if(o!==null){o.return=c,Lt=o;break e}Lt=c}}}var xg={getCacheForType:function(e){var a=Qt(Nt),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Qt(Nt).controller.signal}},gg=typeof WeakMap=="function"?WeakMap:Map,We=0,rt=null,Ge=null,Ve=0,at=0,ha=null,Nn=!1,Gl=!1,sc=!1,nn=0,bt=0,_n=0,ol=0,oc=0,xa=0,Yl=0,Di=null,ra=null,rc=!1,Ys=0,dm=0,Vs=1/0,$s=null,Sn=null,Dt=0,kn=null,Vl=null,ln=0,cc=0,dc=null,um=null,Oi=0,uc=null;function ga(){return(We&2)!==0&&Ve!==0?Ve&-Ve:E.T!==null?gc():aa()}function pm(){if(xa===0)if((Ve&536870912)===0||Qe){var e=et;et<<=1,(et&3932160)===0&&(et=262144),xa=e}else xa=536870912;return e=ma.current,e!==null&&(e.flags|=32),xa}function ca(e,a,n){(e===rt&&(at===2||at===9)||e.cancelPendingCommit!==null)&&($l(e,0),Cn(e,Ve,xa,!1)),$n(e,n),((We&2)===0||e!==rt)&&(e===rt&&((We&2)===0&&(ol|=n),bt===4&&Cn(e,Ve,xa,!1)),qa(e))}function mm(e,a,n){if((We&6)!==0)throw Error(d(327));var i=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Ft(e,a),o=i?vg(e,a):mc(e,a,!0),c=i;do{if(o===0){Gl&&!i&&Cn(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!bg(n)){o=mc(e,a,!1),c=!1;continue}if(o===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var x=e;o=Di;var z=x.current.memoizedState.isDehydrated;if(z&&($l(x,u).flags|=256),u=mc(x,u,!1),u!==2){if(sc&&!z){x.errorRecoveryDisabledLanes|=c,ol|=c,o=4;break e}c=ra,ra=o,c!==null&&(ra===null?ra=c:ra.push.apply(ra,c))}o=u}if(c=!1,o!==2)continue}}if(o===1){$l(e,0),Cn(e,a,0,!0);break}e:{switch(i=e,c=o,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Cn(i,a,xa,!Nn);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(o=Ys+300-ye(),10<o)){if(Cn(i,a,xa,!Nn),ta(i,0,!0)!==0)break e;ln=a,i.timeoutHandle=$m(fm.bind(null,i,n,ra,$s,rc,a,xa,ol,Yl,Nn,c,"Throttled",-0,0),o);break e}fm(i,n,ra,$s,rc,a,xa,ol,Yl,Nn,c,null,-0,0)}}break}while(!0);qa(e)}function fm(e,a,n,i,o,c,u,x,z,Y,P,te,Q,K){if(e.timeoutHandle=-1,te=a.subtreeFlags,te&8192||(te&16785408)===16785408){te={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Va},sm(a,c,te);var je=(c&62914560)===c?Ys-ye():(c&4194048)===c?dm-ye():0;if(je=ab(te,je),je!==null){ln=c,e.cancelPendingCommit=je(wm.bind(null,e,a,c,n,i,o,u,x,z,P,te,null,Q,K)),Cn(e,c,u,!Y);return}}wm(e,a,c,n,i,o,u,x,z)}function bg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!ua(c(),o))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Cn(e,a,n,i){a&=~oc,a&=~ol,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var o=a;0<o;){var c=31-U(o),u=1<<c;i[c]=-1,o&=~u}n!==0&&Da(e,n,a)}function Qs(){return(We&6)===0?(Ai(0),!1):!0}function pc(){if(Ge!==null){if(at===0)var e=Ge.return;else e=Ge,Za=Pn=null,zr(e),Al=null,xi=0,e=Ge;for(;e!==null;)Qp(e.alternate,e),e=e.return;Ge=null}}function $l(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,Lg(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),ln=0,pc(),rt=e,Ge=n=Qa(e.current,null),Ve=a,at=0,ha=null,Nn=!1,Gl=Ft(e,a),sc=!1,Yl=xa=oc=ol=_n=bt=0,ra=Di=null,rc=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var o=31-U(i),c=1<<o;a|=e[o],i&=~c}return nn=a,ps(),n}function hm(e,a){Oe=null,E.H=_i,a===Ol||a===vs?(a=Mu(),at=3):a===xr?(a=Mu(),at=4):at=a===$r?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ha=a,Ge===null&&(bt=1,As(e,_a(a,e.current)))}function xm(){var e=ma.current;return e===null?!0:(Ve&4194048)===Ve?za===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===za:!1}function gm(){var e=E.H;return E.H=_i,e===null?_i:e}function bm(){var e=E.A;return E.A=xg,e}function Xs(){bt=4,Nn||(Ve&4194048)!==Ve&&ma.current!==null||(Gl=!0),(_n&134217727)===0&&(ol&134217727)===0||rt===null||Cn(rt,Ve,xa,!1)}function mc(e,a,n){var i=We;We|=2;var o=gm(),c=bm();(rt!==e||Ve!==a)&&($s=null,$l(e,a)),a=!1;var u=bt;e:do try{if(at!==0&&Ge!==null){var x=Ge,z=ha;switch(at){case 8:pc(),u=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var Y=at;if(at=0,ha=null,Ql(e,x,z,Y),n&&Gl){u=0;break e}break;default:Y=at,at=0,ha=null,Ql(e,x,z,Y)}}yg(),u=bt;break}catch(P){hm(e,P)}while(!0);return a&&e.shellSuspendCounter++,Za=Pn=null,We=i,E.H=o,E.A=c,Ge===null&&(rt=null,Ve=0,ps()),u}function yg(){for(;Ge!==null;)ym(Ge)}function vg(e,a){var n=We;We|=2;var i=gm(),o=bm();rt!==e||Ve!==a?($s=null,Vs=ye()+500,$l(e,a)):Gl=Ft(e,a);e:do try{if(at!==0&&Ge!==null){a=Ge;var c=ha;t:switch(at){case 1:at=0,ha=null,Ql(e,a,c,1);break;case 2:case 9:if(Tu(c)){at=0,ha=null,vm(a);break}a=function(){at!==2&&at!==9||rt!==e||(at=7),qa(e)},c.then(a,a);break e;case 3:at=7;break e;case 4:at=5;break e;case 7:Tu(c)?(at=0,ha=null,vm(a)):(at=0,ha=null,Ql(e,a,c,7));break;case 5:var u=null;switch(Ge.tag){case 26:u=Ge.memoizedState;case 5:case 27:var x=Ge;if(u?sf(u):x.stateNode.complete){at=0,ha=null;var z=x.sibling;if(z!==null)Ge=z;else{var Y=x.return;Y!==null?(Ge=Y,Zs(Y)):Ge=null}break t}}at=0,ha=null,Ql(e,a,c,5);break;case 6:at=0,ha=null,Ql(e,a,c,6);break;case 8:pc(),bt=6;break e;default:throw Error(d(462))}}jg();break}catch(P){hm(e,P)}while(!0);return Za=Pn=null,E.H=i,E.A=o,We=n,Ge!==null?0:(rt=null,Ve=0,ps(),bt)}function jg(){for(;Ge!==null&&!Xe();)ym(Ge)}function ym(e){var a=Vp(e.alternate,e,nn);e.memoizedProps=e.pendingProps,a===null?Zs(e):Ge=a}function vm(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Hp(n,a,a.pendingProps,a.type,void 0,Ve);break;case 11:a=Hp(n,a,a.pendingProps,a.type.render,a.ref,Ve);break;case 5:zr(a);default:Qp(n,a),a=Ge=bu(a,nn),a=Vp(n,a,nn)}e.memoizedProps=e.pendingProps,a===null?Zs(e):Ge=a}function Ql(e,a,n,i){Za=Pn=null,zr(a),Al=null,xi=0;var o=a.return;try{if(cg(e,o,a,n,Ve)){bt=1,As(e,_a(n,e.current)),Ge=null;return}}catch(c){if(o!==null)throw Ge=o,c;bt=1,As(e,_a(n,e.current)),Ge=null;return}a.flags&32768?(Qe||i===1?e=!0:Gl||(Ve&536870912)!==0?e=!1:(Nn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ma.current,i!==null&&i.tag===13&&(i.flags|=16384))),jm(a,e)):Zs(a)}function Zs(e){var a=e;do{if((a.flags&32768)!==0){jm(a,Nn);return}e=a.return;var n=pg(a.alternate,a,nn);if(n!==null){Ge=n;return}if(a=a.sibling,a!==null){Ge=a;return}Ge=a=e}while(a!==null);bt===0&&(bt=5)}function jm(e,a){do{var n=mg(e.alternate,e);if(n!==null){n.flags&=32767,Ge=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){Ge=e;return}Ge=e=n}while(e!==null);bt=6,Ge=null}function wm(e,a,n,i,o,c,u,x,z){e.cancelPendingCommit=null;do Ks();while(Dt!==0);if((We&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=tr,Mo(e,n,c,u,x,z),e===rt&&(Ge=rt=null,Ve=0),Vl=a,kn=e,ln=n,cc=c,dc=o,um=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sg(Me,function(){return Cm(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,o=$.p,$.p=2,u=We,We|=4;try{fg(e,a,n)}finally{We=u,$.p=o,E.T=i}}Dt=1,Nm(),_m(),Sm()}}function Nm(){if(Dt===1){Dt=0;var e=kn,a=Vl,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=E.T,E.T=null;var i=$.p;$.p=2;var o=We;We|=4;try{nm(a,e);var c=Sc,u=cu(e.containerInfo),x=c.focusedElem,z=c.selectionRange;if(u!==x&&x&&x.ownerDocument&&ru(x.ownerDocument.documentElement,x)){if(z!==null&&Fo(x)){var Y=z.start,P=z.end;if(P===void 0&&(P=Y),"selectionStart"in x)x.selectionStart=Y,x.selectionEnd=Math.min(P,x.value.length);else{var te=x.ownerDocument||document,Q=te&&te.defaultView||window;if(Q.getSelection){var K=Q.getSelection(),je=x.textContent.length,ze=Math.min(z.start,je),st=z.end===void 0?ze:Math.min(z.end,je);!K.extend&&ze>st&&(u=st,st=ze,ze=u);var H=ou(x,ze),T=ou(x,st);if(H&&T&&(K.rangeCount!==1||K.anchorNode!==H.node||K.anchorOffset!==H.offset||K.focusNode!==T.node||K.focusOffset!==T.offset)){var B=te.createRange();B.setStart(H.node,H.offset),K.removeAllRanges(),ze>st?(K.addRange(B),K.extend(T.node,T.offset)):(B.setEnd(T.node,T.offset),K.addRange(B))}}}}for(te=[],K=x;K=K.parentNode;)K.nodeType===1&&te.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<te.length;x++){var ee=te[x];ee.element.scrollLeft=ee.left,ee.element.scrollTop=ee.top}}so=!!_c,Sc=_c=null}finally{We=o,$.p=i,E.T=n}}e.current=a,Dt=2}}function _m(){if(Dt===2){Dt=0;var e=kn,a=Vl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=E.T,E.T=null;var i=$.p;$.p=2;var o=We;We|=4;try{Pp(e,a.alternate,a)}finally{We=o,$.p=i,E.T=n}}Dt=3}}function Sm(){if(Dt===4||Dt===3){Dt=0,G();var e=kn,a=Vl,n=ln,i=um;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Dt=5:(Dt=0,Vl=kn=null,km(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Sn=null),Be(n),a=a.stateNode,xt&&typeof xt.onCommitFiberRoot=="function")try{xt.onCommitFiberRoot(Ma,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=E.T,o=$.p,$.p=2,E.T=null;try{for(var c=e.onRecoverableError,u=0;u<i.length;u++){var x=i[u];c(x.value,{componentStack:x.stack})}}finally{E.T=a,$.p=o}}(ln&3)!==0&&Ks(),qa(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===uc?Oi++:(Oi=0,uc=e):Oi=0,Ai(0)}}function km(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,fi(a)))}function Ks(){return Nm(),_m(),Sm(),Cm()}function Cm(){if(Dt!==5)return!1;var e=kn,a=cc;cc=0;var n=Be(ln),i=E.T,o=$.p;try{$.p=32>n?32:n,E.T=null,n=dc,dc=null;var c=kn,u=ln;if(Dt=0,Vl=kn=null,ln=0,(We&6)!==0)throw Error(d(331));var x=We;if(We|=4,rm(c.current),im(c,c.current,u,n),We=x,Ai(0,!1),xt&&typeof xt.onPostCommitFiberRoot=="function")try{xt.onPostCommitFiberRoot(Ma,c)}catch{}return!0}finally{$.p=o,E.T=i,km(e,a)}}function zm(e,a,n){a=_a(n,a),a=Vr(e.stateNode,a,2),e=yn(e,a,2),e!==null&&($n(e,2),qa(e))}function nt(e,a,n){if(e.tag===3)zm(e,e,n);else for(;a!==null;){if(a.tag===3){zm(a,e,n);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Sn===null||!Sn.has(i))){e=_a(n,e),n=Tp(2),i=yn(a,n,2),i!==null&&(Ep(n,i,a,e),$n(i,2),qa(i));break}}a=a.return}}function fc(e,a,n){var i=e.pingCache;if(i===null){i=e.pingCache=new gg;var o=new Set;i.set(a,o)}else o=i.get(a),o===void 0&&(o=new Set,i.set(a,o));o.has(n)||(sc=!0,o.add(n),e=wg.bind(null,e,a,n),a.then(e,e))}function wg(e,a,n){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rt===e&&(Ve&n)===n&&(bt===4||bt===3&&(Ve&62914560)===Ve&&300>ye()-Ys?(We&2)===0&&$l(e,0):oc|=n,Yl===Ve&&(Yl=0)),qa(e)}function Tm(e,a){a===0&&(a=Vn()),e=Jn(e,a),e!==null&&($n(e,a),qa(e))}function Ng(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Tm(e,n)}function _g(e,a){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(a),Tm(e,n)}function Sg(e,a){return Se(e,a)}var Js=null,Xl=null,hc=!1,Fs=!1,xc=!1,zn=0;function qa(e){e!==Xl&&e.next===null&&(Xl===null?Js=Xl=e:Xl=Xl.next=e),Fs=!0,hc||(hc=!0,Cg())}function Ai(e,a){if(!xc&&Fs){xc=!0;do for(var n=!1,i=Js;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var u=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-U(42|e)+1)-1,c&=o&~(u&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Om(i,c))}else c=Ve,c=ta(i,i===rt?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Ft(i,c)||(n=!0,Om(i,c));i=i.next}while(n);xc=!1}}function kg(){Em()}function Em(){Fs=hc=!1;var e=0;zn!==0&&Hg()&&(e=zn);for(var a=ye(),n=null,i=Js;i!==null;){var o=i.next,c=Mm(i,a);c===0?(i.next=null,n===null?Js=o:n.next=o,o===null&&(Xl=n)):(n=i,(e!==0||(c&3)!==0)&&(Fs=!0)),i=o}Dt!==0&&Dt!==5||Ai(e),zn!==0&&(zn=0)}function Mm(e,a){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-U(c),x=1<<u,z=o[u];z===-1?((x&n)===0||(x&i)!==0)&&(o[u]=Yn(x,a)):z<=a&&(e.expiredLanes|=x),c&=~x}if(a=rt,n=Ve,n=ta(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===a&&(at===2||at===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Re(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Ft(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(i!==null&&Re(i),Be(n)){case 2:case 8:n=He;break;case 32:n=Me;break;case 268435456:n=Ga;break;default:n=Me}return i=Dm.bind(null,e),n=Se(n,i),e.callbackPriority=a,e.callbackNode=n,a}return i!==null&&i!==null&&Re(i),e.callbackPriority=2,e.callbackNode=null,2}function Dm(e,a){if(Dt!==0&&Dt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Ks()&&e.callbackNode!==n)return null;var i=Ve;return i=ta(e,e===rt?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(mm(e,i,a),Mm(e,ye()),e.callbackNode!=null&&e.callbackNode===n?Dm.bind(null,e):null)}function Om(e,a){if(Ks())return null;mm(e,a,!0)}function Cg(){qg(function(){(We&6)!==0?Se(ge,kg):Em()})}function gc(){if(zn===0){var e=Ml;e===0&&(e=Ee,Ee<<=1,(Ee&261888)===0&&(Ee=256)),zn=e}return zn}function Am(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ls(""+e)}function Rm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function zg(e,a,n,i,o){if(a==="submit"&&n&&n.stateNode===o){var c=Am((o[na]||null).action),u=i.submitter;u&&(a=(a=u[na]||null)?Am(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var x=new rs("action","action",null,i,o);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(zn!==0){var z=u?Rm(o,u):new FormData(o);Hr(n,{pending:!0,data:z,method:o.method,action:c},null,z)}}else typeof c=="function"&&(x.preventDefault(),z=u?Rm(o,u):new FormData(o),Hr(n,{pending:!0,data:z,method:o.method,action:c},c,z))},currentTarget:o}]})}}for(var bc=0;bc<er.length;bc++){var yc=er[bc],Tg=yc.toLowerCase(),Eg=yc[0].toUpperCase()+yc.slice(1);Oa(Tg,"on"+Eg)}Oa(pu,"onAnimationEnd"),Oa(mu,"onAnimationIteration"),Oa(fu,"onAnimationStart"),Oa("dblclick","onDoubleClick"),Oa("focusin","onFocus"),Oa("focusout","onBlur"),Oa(Xx,"onTransitionRun"),Oa(Zx,"onTransitionStart"),Oa(Kx,"onTransitionCancel"),Oa(hu,"onTransitionEnd"),gl("onMouseEnter",["mouseout","mouseover"]),gl("onMouseLeave",["mouseout","mouseover"]),gl("onPointerEnter",["pointerout","pointerover"]),gl("onPointerLeave",["pointerout","pointerover"]),Qn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ri));function Um(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(a)for(var u=i.length-1;0<=u;u--){var x=i[u],z=x.instance,Y=x.currentTarget;if(x=x.listener,z!==c&&o.isPropagationStopped())break e;c=x,o.currentTarget=Y;try{c(o)}catch(P){us(P)}o.currentTarget=null,c=z}else for(u=0;u<i.length;u++){if(x=i[u],z=x.instance,Y=x.currentTarget,x=x.listener,z!==c&&o.isPropagationStopped())break e;c=x,o.currentTarget=Y;try{c(o)}catch(P){us(P)}o.currentTarget=null,c=z}}}}function Ye(e,a){var n=a[Do];n===void 0&&(n=a[Do]=new Set);var i=e+"__bubble";n.has(i)||(Hm(a,e,2,!1),n.add(i))}function vc(e,a,n){var i=0;a&&(i|=4),Hm(n,e,i,a)}var Ws="_reactListening"+Math.random().toString(36).slice(2);function jc(e){if(!e[Ws]){e[Ws]=!0,Ed.forEach(function(n){n!=="selectionchange"&&(Mg.has(n)||vc(n,!1,e),vc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[Ws]||(a[Ws]=!0,vc("selectionchange",!1,a))}}function Hm(e,a,n,i){switch(mf(a)){case 2:var o=ib;break;case 8:o=sb;break;default:o=Uc}n=o.bind(null,a,n,e),o=void 0,!Go||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(a,n,{capture:!0,passive:o}):e.addEventListener(a,n,!0):o!==void 0?e.addEventListener(a,n,{passive:o}):e.addEventListener(a,n,!1)}function wc(e,a,n,i,o){var c=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var x=i.stateNode.containerInfo;if(x===o)break;if(u===4)for(u=i.return;u!==null;){var z=u.tag;if((z===3||z===4)&&u.stateNode.containerInfo===o)return;u=u.return}for(;x!==null;){if(u=fl(x),u===null)return;if(z=u.tag,z===5||z===6||z===26||z===27){i=c=u;continue e}x=x.parentNode}}i=i.return}Yd(function(){var Y=c,P=qo(n),te=[];e:{var Q=xu.get(e);if(Q!==void 0){var K=rs,je=e;switch(e){case"keypress":if(ss(n)===0)break e;case"keydown":case"keyup":K=_x;break;case"focusin":je="focus",K=Qo;break;case"focusout":je="blur",K=Qo;break;case"beforeblur":case"afterblur":K=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Qd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=px;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Cx;break;case pu:case mu:case fu:K=hx;break;case hu:K=Tx;break;case"scroll":case"scrollend":K=dx;break;case"wheel":K=Mx;break;case"copy":case"cut":case"paste":K=gx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=Zd;break;case"toggle":case"beforetoggle":K=Ox}var ze=(a&4)!==0,st=!ze&&(e==="scroll"||e==="scrollend"),H=ze?Q!==null?Q+"Capture":null:Q;ze=[];for(var T=Y,B;T!==null;){var ee=T;if(B=ee.stateNode,ee=ee.tag,ee!==5&&ee!==26&&ee!==27||B===null||H===null||(ee=ni(T,H),ee!=null&&ze.push(Ui(T,ee,B))),st)break;T=T.return}0<ze.length&&(Q=new K(Q,je,null,n,P),te.push({event:Q,listeners:ze}))}}if((a&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",Q&&n!==Lo&&(je=n.relatedTarget||n.fromElement)&&(fl(je)||je[ml]))break e;if((K||Q)&&(Q=P.window===P?P:(Q=P.ownerDocument)?Q.defaultView||Q.parentWindow:window,K?(je=n.relatedTarget||n.toElement,K=Y,je=je?fl(je):null,je!==null&&(st=h(je),ze=je.tag,je!==st||ze!==5&&ze!==27&&ze!==6)&&(je=null)):(K=null,je=Y),K!==je)){if(ze=Qd,ee="onMouseLeave",H="onMouseEnter",T="mouse",(e==="pointerout"||e==="pointerover")&&(ze=Zd,ee="onPointerLeave",H="onPointerEnter",T="pointer"),st=K==null?Q:ai(K),B=je==null?Q:ai(je),Q=new ze(ee,T+"leave",K,n,P),Q.target=st,Q.relatedTarget=B,ee=null,fl(P)===Y&&(ze=new ze(H,T+"enter",je,n,P),ze.target=B,ze.relatedTarget=st,ee=ze),st=ee,K&&je)t:{for(ze=Dg,H=K,T=je,B=0,ee=H;ee;ee=ze(ee))B++;ee=0;for(var Ce=T;Ce;Ce=ze(Ce))ee++;for(;0<B-ee;)H=ze(H),B--;for(;0<ee-B;)T=ze(T),ee--;for(;B--;){if(H===T||T!==null&&H===T.alternate){ze=H;break t}H=ze(H),T=ze(T)}ze=null}else ze=null;K!==null&&Lm(te,Q,K,ze,!1),je!==null&&st!==null&&Lm(te,st,je,ze,!0)}}e:{if(Q=Y?ai(Y):window,K=Q.nodeName&&Q.nodeName.toLowerCase(),K==="select"||K==="input"&&Q.type==="file")var Ze=tu;else if(Id(Q))if(au)Ze=Vx;else{Ze=Gx;var we=Bx}else K=Q.nodeName,!K||K.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?Y&&Ho(Y.elementType)&&(Ze=tu):Ze=Yx;if(Ze&&(Ze=Ze(e,Y))){eu(te,Ze,n,P);break e}we&&we(e,Q,Y),e==="focusout"&&Y&&Q.type==="number"&&Y.memoizedProps.value!=null&&Uo(Q,"number",Q.value)}switch(we=Y?ai(Y):window,e){case"focusin":(Id(we)||we.contentEditable==="true")&&(Nl=we,Wo=Y,ui=null);break;case"focusout":ui=Wo=Nl=null;break;case"mousedown":Po=!0;break;case"contextmenu":case"mouseup":case"dragend":Po=!1,du(te,n,P);break;case"selectionchange":if(Qx)break;case"keydown":case"keyup":du(te,n,P)}var Ae;if(Zo)e:{switch(e){case"compositionstart":var $e="onCompositionStart";break e;case"compositionend":$e="onCompositionEnd";break e;case"compositionupdate":$e="onCompositionUpdate";break e}$e=void 0}else wl?Wd(e,n)&&($e="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&($e="onCompositionStart");$e&&(Kd&&n.locale!=="ko"&&(wl||$e!=="onCompositionStart"?$e==="onCompositionEnd"&&wl&&(Ae=Vd()):(pn=P,Yo="value"in pn?pn.value:pn.textContent,wl=!0)),we=Ps(Y,$e),0<we.length&&($e=new Xd($e,e,null,n,P),te.push({event:$e,listeners:we}),Ae?$e.data=Ae:(Ae=Pd(n),Ae!==null&&($e.data=Ae)))),(Ae=Rx?Ux(e,n):Hx(e,n))&&($e=Ps(Y,"onBeforeInput"),0<$e.length&&(we=new Xd("onBeforeInput","beforeinput",null,n,P),te.push({event:we,listeners:$e}),we.data=Ae)),zg(te,e,Y,n,P)}Um(te,a)})}function Ui(e,a,n){return{instance:e,listener:a,currentTarget:n}}function Ps(e,a){for(var n=a+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=ni(e,n),o!=null&&i.unshift(Ui(e,o,c)),o=ni(e,a),o!=null&&i.push(Ui(e,o,c))),e.tag===3)return i;e=e.return}return[]}function Dg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Lm(e,a,n,i,o){for(var c=a._reactName,u=[];n!==null&&n!==i;){var x=n,z=x.alternate,Y=x.stateNode;if(x=x.tag,z!==null&&z===i)break;x!==5&&x!==26&&x!==27||Y===null||(z=Y,o?(Y=ni(n,c),Y!=null&&u.unshift(Ui(n,Y,z))):o||(Y=ni(n,c),Y!=null&&u.push(Ui(n,Y,z)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var Og=/\r\n?/g,Ag=/\u0000|\uFFFD/g;function qm(e){return(typeof e=="string"?e:""+e).replace(Og,`
`).replace(Ag,"")}function Bm(e,a){return a=qm(a),qm(e)===a}function it(e,a,n,i,o,c){switch(n){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||yl(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&yl(e,""+i);break;case"className":as(e,"class",i);break;case"tabIndex":as(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":as(e,n,i);break;case"style":Bd(e,i,c);break;case"data":if(a!=="object"){as(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ls(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&it(e,a,"name",o.name,o,null),it(e,a,"formEncType",o.formEncType,o,null),it(e,a,"formMethod",o.formMethod,o,null),it(e,a,"formTarget",o.formTarget,o,null)):(it(e,a,"encType",o.encType,o,null),it(e,a,"method",o.method,o,null),it(e,a,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ls(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=Va);break;case"onScroll":i!=null&&Ye("scroll",e);break;case"onScrollEnd":i!=null&&Ye("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ls(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Ye("beforetoggle",e),Ye("toggle",e),ts(e,"popover",i);break;case"xlinkActuate":Ya(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Ya(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Ya(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Ya(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Ya(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Ya(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Ya(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":ts(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=rx.get(n)||n,ts(e,n,i))}}function Nc(e,a,n,i,o,c){switch(n){case"style":Bd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof i=="string"?yl(e,i):(typeof i=="number"||typeof i=="bigint")&&yl(e,""+i);break;case"onScroll":i!=null&&Ye("scroll",e);break;case"onScrollEnd":i!=null&&Ye("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Va);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Md.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),a=n.slice(2,o?n.length-7:void 0),c=e[na]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):ts(e,n,i)}}}function Zt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ye("error",e),Ye("load",e);var i=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:it(e,a,c,u,n,null)}}o&&it(e,a,"srcSet",n.srcSet,n,null),i&&it(e,a,"src",n.src,n,null);return;case"input":Ye("invalid",e);var x=c=u=o=null,z=null,Y=null;for(i in n)if(n.hasOwnProperty(i)){var P=n[i];if(P!=null)switch(i){case"name":o=P;break;case"type":u=P;break;case"checked":z=P;break;case"defaultChecked":Y=P;break;case"value":c=P;break;case"defaultValue":x=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,a));break;default:it(e,a,i,P,n,null)}}Ud(e,c,x,z,Y,u,o,!1);return;case"select":Ye("invalid",e),i=u=c=null;for(o in n)if(n.hasOwnProperty(o)&&(x=n[o],x!=null))switch(o){case"value":c=x;break;case"defaultValue":u=x;break;case"multiple":i=x;default:it(e,a,o,x,n,null)}a=c,n=u,e.multiple=!!i,a!=null?bl(e,!!i,a,!1):n!=null&&bl(e,!!i,n,!0);return;case"textarea":Ye("invalid",e),c=o=i=null;for(u in n)if(n.hasOwnProperty(u)&&(x=n[u],x!=null))switch(u){case"value":i=x;break;case"defaultValue":o=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:it(e,a,u,x,n,null)}Ld(e,i,o,c);return;case"option":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:it(e,a,z,i,n,null)}return;case"dialog":Ye("beforetoggle",e),Ye("toggle",e),Ye("cancel",e),Ye("close",e);break;case"iframe":case"object":Ye("load",e);break;case"video":case"audio":for(i=0;i<Ri.length;i++)Ye(Ri[i],e);break;case"image":Ye("error",e),Ye("load",e);break;case"details":Ye("toggle",e);break;case"embed":case"source":case"link":Ye("error",e),Ye("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Y in n)if(n.hasOwnProperty(Y)&&(i=n[Y],i!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:it(e,a,Y,i,n,null)}return;default:if(Ho(a)){for(P in n)n.hasOwnProperty(P)&&(i=n[P],i!==void 0&&Nc(e,a,P,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&it(e,a,x,i,n,null))}function Rg(e,a,n,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,u=null,x=null,z=null,Y=null,P=null;for(K in n){var te=n[K];if(n.hasOwnProperty(K)&&te!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":z=te;default:i.hasOwnProperty(K)||it(e,a,K,null,i,te)}}for(var Q in i){var K=i[Q];if(te=n[Q],i.hasOwnProperty(Q)&&(K!=null||te!=null))switch(Q){case"type":c=K;break;case"name":o=K;break;case"checked":Y=K;break;case"defaultChecked":P=K;break;case"value":u=K;break;case"defaultValue":x=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,a));break;default:K!==te&&it(e,a,Q,K,i,te)}}Ro(e,u,x,z,Y,P,c,o);return;case"select":K=u=x=Q=null;for(c in n)if(z=n[c],n.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":K=z;default:i.hasOwnProperty(c)||it(e,a,c,null,i,z)}for(o in i)if(c=i[o],z=n[o],i.hasOwnProperty(o)&&(c!=null||z!=null))switch(o){case"value":Q=c;break;case"defaultValue":x=c;break;case"multiple":u=c;default:c!==z&&it(e,a,o,c,i,z)}a=x,n=u,i=K,Q!=null?bl(e,!!n,Q,!1):!!i!=!!n&&(a!=null?bl(e,!!n,a,!0):bl(e,!!n,n?[]:"",!1));return;case"textarea":K=Q=null;for(x in n)if(o=n[x],n.hasOwnProperty(x)&&o!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:it(e,a,x,null,i,o)}for(u in i)if(o=i[u],c=n[u],i.hasOwnProperty(u)&&(o!=null||c!=null))switch(u){case"value":Q=o;break;case"defaultValue":K=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:o!==c&&it(e,a,u,o,i,c)}Hd(e,Q,K);return;case"option":for(var je in n)if(Q=n[je],n.hasOwnProperty(je)&&Q!=null&&!i.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:it(e,a,je,null,i,Q)}for(z in i)if(Q=i[z],K=n[z],i.hasOwnProperty(z)&&Q!==K&&(Q!=null||K!=null))switch(z){case"selected":e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:it(e,a,z,Q,i,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in n)Q=n[ze],n.hasOwnProperty(ze)&&Q!=null&&!i.hasOwnProperty(ze)&&it(e,a,ze,null,i,Q);for(Y in i)if(Q=i[Y],K=n[Y],i.hasOwnProperty(Y)&&Q!==K&&(Q!=null||K!=null))switch(Y){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(d(137,a));break;default:it(e,a,Y,Q,i,K)}return;default:if(Ho(a)){for(var st in n)Q=n[st],n.hasOwnProperty(st)&&Q!==void 0&&!i.hasOwnProperty(st)&&Nc(e,a,st,void 0,i,Q);for(P in i)Q=i[P],K=n[P],!i.hasOwnProperty(P)||Q===K||Q===void 0&&K===void 0||Nc(e,a,P,Q,i,K);return}}for(var H in n)Q=n[H],n.hasOwnProperty(H)&&Q!=null&&!i.hasOwnProperty(H)&&it(e,a,H,null,i,Q);for(te in i)Q=i[te],K=n[te],!i.hasOwnProperty(te)||Q===K||Q==null&&K==null||it(e,a,te,Q,i,K)}function Gm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Ug(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],c=o.transferSize,u=o.initiatorType,x=o.duration;if(c&&x&&Gm(u)){for(u=0,x=o.responseEnd,i+=1;i<n.length;i++){var z=n[i],Y=z.startTime;if(Y>x)break;var P=z.transferSize,te=z.initiatorType;P&&Gm(te)&&(z=z.responseEnd,u+=P*(z<x?1:(x-Y)/(z-Y)))}if(--i,a+=8*(c+u)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var _c=null,Sc=null;function Is(e){return e.nodeType===9?e:e.ownerDocument}function Ym(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Vm(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function kc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Cc=null;function Hg(){var e=window.event;return e&&e.type==="popstate"?e===Cc?!1:(Cc=e,!0):(Cc=null,!1)}var $m=typeof setTimeout=="function"?setTimeout:void 0,Lg=typeof clearTimeout=="function"?clearTimeout:void 0,Qm=typeof Promise=="function"?Promise:void 0,qg=typeof queueMicrotask=="function"?queueMicrotask:typeof Qm<"u"?function(e){return Qm.resolve(null).then(e).catch(Bg)}:$m;function Bg(e){setTimeout(function(){throw e})}function Tn(e){return e==="head"}function Xm(e,a){var n=a,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(o),Fl(a);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Hi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Hi(n);for(var c=n.firstChild;c;){var u=c.nextSibling,x=c.nodeName;c[ti]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Hi(e.ownerDocument.body);n=o}while(n);Fl(a)}function Zm(e,a){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function zc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":zc(n),Oo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function Gg(e,a,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[ti])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ta(e.nextSibling),e===null)break}return null}function Yg(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ta(e.nextSibling),e===null))return null;return e}function Km(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ta(e.nextSibling),e===null))return null;return e}function Tc(e){return e.data==="$?"||e.data==="$~"}function Ec(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Vg(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var i=function(){a(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ta(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Mc=null;function Jm(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Ta(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function Fm(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function Wm(e,a,n){switch(a=Is(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Hi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Oo(e)}var Ea=new Map,Pm=new Set;function eo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var sn=$.d;$.d={f:$g,r:Qg,D:Xg,C:Zg,L:Kg,m:Jg,X:Wg,S:Fg,M:Pg};function $g(){var e=sn.f(),a=Qs();return e||a}function Qg(e){var a=hl(e);a!==null&&a.tag===5&&a.type==="form"?hp(a):sn.r(e)}var Zl=typeof document>"u"?null:document;function Im(e,a,n){var i=Zl;if(i&&typeof a=="string"&&a){var o=wa(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),Pm.has(o)||(Pm.add(o),e={rel:e,crossOrigin:n,href:a},i.querySelector(o)===null&&(a=i.createElement("link"),Zt(a,"link",e),Ht(a),i.head.appendChild(a)))}}function Xg(e){sn.D(e),Im("dns-prefetch",e,null)}function Zg(e,a){sn.C(e,a),Im("preconnect",e,a)}function Kg(e,a,n){sn.L(e,a,n);var i=Zl;if(i&&e&&a){var o='link[rel="preload"][as="'+wa(a)+'"]';a==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+wa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+wa(n.imageSizes)+'"]')):o+='[href="'+wa(e)+'"]';var c=o;switch(a){case"style":c=Kl(e);break;case"script":c=Jl(e)}Ea.has(c)||(e=g({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ea.set(c,e),i.querySelector(o)!==null||a==="style"&&i.querySelector(Li(c))||a==="script"&&i.querySelector(qi(c))||(a=i.createElement("link"),Zt(a,"link",e),Ht(a),i.head.appendChild(a)))}}function Jg(e,a){sn.m(e,a);var n=Zl;if(n&&e){var i=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+wa(i)+'"][href="'+wa(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Jl(e)}if(!Ea.has(c)&&(e=g({rel:"modulepreload",href:e},a),Ea.set(c,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(qi(c)))return}i=n.createElement("link"),Zt(i,"link",e),Ht(i),n.head.appendChild(i)}}}function Fg(e,a,n){sn.S(e,a,n);var i=Zl;if(i&&e){var o=xl(i).hoistableStyles,c=Kl(e);a=a||"default";var u=o.get(c);if(!u){var x={loading:0,preload:null};if(u=i.querySelector(Li(c)))x.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ea.get(c))&&Dc(e,n);var z=u=i.createElement("link");Ht(z),Zt(z,"link",e),z._p=new Promise(function(Y,P){z.onload=Y,z.onerror=P}),z.addEventListener("load",function(){x.loading|=1}),z.addEventListener("error",function(){x.loading|=2}),x.loading|=4,to(u,a,i)}u={type:"stylesheet",instance:u,count:1,state:x},o.set(c,u)}}}function Wg(e,a){sn.X(e,a);var n=Zl;if(n&&e){var i=xl(n).hoistableScripts,o=Jl(e),c=i.get(o);c||(c=n.querySelector(qi(o)),c||(e=g({src:e,async:!0},a),(a=Ea.get(o))&&Oc(e,a),c=n.createElement("script"),Ht(c),Zt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function Pg(e,a){sn.M(e,a);var n=Zl;if(n&&e){var i=xl(n).hoistableScripts,o=Jl(e),c=i.get(o);c||(c=n.querySelector(qi(o)),c||(e=g({src:e,async:!0,type:"module"},a),(a=Ea.get(o))&&Oc(e,a),c=n.createElement("script"),Ht(c),Zt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function ef(e,a,n,i){var o=(o=ve.current)?eo(o):null;if(!o)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Kl(n.href),n=xl(o).hoistableStyles,i=n.get(a),i||(i={type:"style",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Kl(n.href);var c=xl(o).hoistableStyles,u=c.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=o.querySelector(Li(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ea.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ea.set(e,n),c||Ig(o,e,n,u.state))),a&&i===null)throw Error(d(528,""));return u}if(a&&i!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Jl(n),n=xl(o).hoistableScripts,i=n.get(a),i||(i={type:"script",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Kl(e){return'href="'+wa(e)+'"'}function Li(e){return'link[rel="stylesheet"]['+e+"]"}function tf(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Ig(e,a,n,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Zt(a,"link",n),Ht(a),e.head.appendChild(a))}function Jl(e){return'[src="'+wa(e)+'"]'}function qi(e){return"script[async]"+e}function af(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+wa(n.href)+'"]');if(i)return a.instance=i,Ht(i),i;var o=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ht(i),Zt(i,"style",o),to(i,n.precedence,e),a.instance=i;case"stylesheet":o=Kl(n.href);var c=e.querySelector(Li(o));if(c)return a.state.loading|=4,a.instance=c,Ht(c),c;i=tf(n),(o=Ea.get(o))&&Dc(i,o),c=(e.ownerDocument||e).createElement("link"),Ht(c);var u=c;return u._p=new Promise(function(x,z){u.onload=x,u.onerror=z}),Zt(c,"link",i),a.state.loading|=4,to(c,n.precedence,e),a.instance=c;case"script":return c=Jl(n.src),(o=e.querySelector(qi(c)))?(a.instance=o,Ht(o),o):(i=n,(o=Ea.get(c))&&(i=g({},n),Oc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),Ht(o),Zt(o,"link",i),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,to(i,n.precedence,e));return a.instance}function to(e,a,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,u=0;u<i.length;u++){var x=i[u];if(x.dataset.precedence===a)c=x;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Dc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Oc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ao=null;function nf(e,a,n){if(ao===null){var i=new Map,o=ao=new Map;o.set(n,i)}else o=ao,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[ti]||c[Vt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var x=i.get(u);x?x.push(c):i.set(u,[c])}}return i}function lf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function eb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function sf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function tb(e,a,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Kl(i.href),c=a.querySelector(Li(o));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=no.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Ht(c);return}c=a.ownerDocument||a,i=tf(i),(o=Ea.get(o))&&Dc(i,o),c=c.createElement("link"),Ht(c);var u=c;u._p=new Promise(function(x,z){u.onload=x,u.onerror=z}),Zt(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=no.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Ac=0;function ab(e,a){return e.stylesheets&&e.count===0&&io(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&io(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&Ac===0&&(Ac=62500*Ug());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&io(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Ac?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function no(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)io(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var lo=null;function io(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,lo=new Map,a.forEach(nb,e),lo=null,no.call(e))}function nb(e,a){if(!(a.state.loading&4)){var n=lo.get(e);if(n)var i=n.get(null);else{n=new Map,lo.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var u=o[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),i=u)}i&&n.set(null,i)}o=a.instance,u=o.getAttribute("data-precedence"),c=n.get(u)||i,c===i&&n.set(null,o),n.set(u,o),this.count++,i=no.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Bi={$$typeof:D,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function lb(e,a,n,i,o,c,u,x,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=mt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.hiddenUpdates=mt(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function of(e,a,n,i,o,c,u,x,z,Y,P,te){return e=new lb(e,a,n,u,z,Y,P,te,x),a=1,c===!0&&(a|=24),c=pa(3,null,null,a),e.current=c,c.stateNode=e,a=mr(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:a},gr(c),e}function rf(e){return e?(e=kl,e):kl}function cf(e,a,n,i,o,c){o=rf(o),i.context===null?i.context=o:i.pendingContext=o,i=bn(a),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=yn(e,i,a),n!==null&&(ca(n,e,a),bi(n,e,a))}function df(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Rc(e,a){df(e,a),(e=e.alternate)&&df(e,a)}function uf(e){if(e.tag===13||e.tag===31){var a=Jn(e,67108864);a!==null&&ca(a,e,67108864),Rc(e,67108864)}}function pf(e){if(e.tag===13||e.tag===31){var a=ga();a=xe(a);var n=Jn(e,a);n!==null&&ca(n,e,a),Rc(e,a)}}var so=!0;function ib(e,a,n,i){var o=E.T;E.T=null;var c=$.p;try{$.p=2,Uc(e,a,n,i)}finally{$.p=c,E.T=o}}function sb(e,a,n,i){var o=E.T;E.T=null;var c=$.p;try{$.p=8,Uc(e,a,n,i)}finally{$.p=c,E.T=o}}function Uc(e,a,n,i){if(so){var o=Hc(i);if(o===null)wc(e,a,i,oo,n),ff(e,i);else if(rb(o,e,a,n,i))i.stopPropagation();else if(ff(e,i),a&4&&-1<ob.indexOf(e)){for(;o!==null;){var c=hl(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=Le(c.pendingLanes);if(u!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;u;){var z=1<<31-U(u);x.entanglements[1]|=z,u&=~z}qa(c),(We&6)===0&&(Vs=ye()+500,Ai(0))}}break;case 31:case 13:x=Jn(c,2),x!==null&&ca(x,c,2),Qs(),Rc(c,2)}if(c=Hc(i),c===null&&wc(e,a,i,oo,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else wc(e,a,i,null,n)}}function Hc(e){return e=qo(e),Lc(e)}var oo=null;function Lc(e){if(oo=null,e=fl(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=m(a),e!==null)return e;e=null}else if(n===31){if(e=j(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return oo=e,null}function mf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ke()){case ge:return 2;case He:return 8;case Me:case ct:return 32;case Ga:return 268435456;default:return 32}default:return 32}}var qc=!1,En=null,Mn=null,Dn=null,Gi=new Map,Yi=new Map,On=[],ob="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ff(e,a){switch(e){case"focusin":case"focusout":En=null;break;case"dragenter":case"dragleave":Mn=null;break;case"mouseover":case"mouseout":Dn=null;break;case"pointerover":case"pointerout":Gi.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(a.pointerId)}}function Vi(e,a,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},a!==null&&(a=hl(a),a!==null&&uf(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function rb(e,a,n,i,o){switch(a){case"focusin":return En=Vi(En,e,a,n,i,o),!0;case"dragenter":return Mn=Vi(Mn,e,a,n,i,o),!0;case"mouseover":return Dn=Vi(Dn,e,a,n,i,o),!0;case"pointerover":var c=o.pointerId;return Gi.set(c,Vi(Gi.get(c)||null,e,a,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,Yi.set(c,Vi(Yi.get(c)||null,e,a,n,i,o)),!0}return!1}function hf(e){var a=fl(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=m(n),a!==null){e.blockedOn=a,zd(e.priority,function(){pf(n)});return}}else if(a===31){if(a=j(n),a!==null){e.blockedOn=a,zd(e.priority,function(){pf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ro(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Hc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Lo=i,n.target.dispatchEvent(i),Lo=null}else return a=hl(n),a!==null&&uf(a),e.blockedOn=n,!1;a.shift()}return!0}function xf(e,a,n){ro(e)&&n.delete(a)}function cb(){qc=!1,En!==null&&ro(En)&&(En=null),Mn!==null&&ro(Mn)&&(Mn=null),Dn!==null&&ro(Dn)&&(Dn=null),Gi.forEach(xf),Yi.forEach(xf)}function co(e,a){e.blockedOn===a&&(e.blockedOn=null,qc||(qc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,cb)))}var uo=null;function gf(e){uo!==e&&(uo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){uo===e&&(uo=null);for(var a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],o=e[a+2];if(typeof i!="function"){if(Lc(i||n)===null)continue;break}var c=hl(n);c!==null&&(e.splice(a,3),a-=3,Hr(c,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Fl(e){function a(z){return co(z,e)}En!==null&&co(En,e),Mn!==null&&co(Mn,e),Dn!==null&&co(Dn,e),Gi.forEach(a),Yi.forEach(a);for(var n=0;n<On.length;n++){var i=On[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<On.length&&(n=On[0],n.blockedOn===null);)hf(n),n.blockedOn===null&&On.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],u=o[na]||null;if(typeof c=="function")u||gf(n);else if(u){var x=null;if(c&&c.hasAttribute("formAction")){if(o=c,u=c[na]||null)x=u.formAction;else if(Lc(o)!==null)continue}else x=u.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),gf(n)}}}function bf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return o=u})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Bc(e){this._internalRoot=e}po.prototype.render=Bc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,i=ga();cf(n,i,e,a,null,null)},po.prototype.unmount=Bc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;cf(e.current,2,null,e,null,null),Qs(),a[ml]=null}};function po(e){this._internalRoot=e}po.prototype.unstable_scheduleHydration=function(e){if(e){var a=aa();e={blockedOn:null,target:e,priority:a};for(var n=0;n<On.length&&a!==0&&a<On[n].priority;n++);On.splice(n,0,e),n===0&&hf(e)}};var yf=l.version;if(yf!=="19.2.6")throw Error(d(527,yf,"19.2.6"));$.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(a),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var db={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mo.isDisabled&&mo.supportsFiber)try{Ma=mo.inject(db),xt=mo}catch{}}return Qi.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,i="",o=Sp,c=kp,u=Cp;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=of(e,1,!1,null,null,n,i,null,o,c,u,bf),e[ml]=a.current,jc(e),new Bc(a)},Qi.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var i=!1,o="",c=Sp,u=kp,x=Cp,z=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(z=n.formState)),a=of(e,1,!0,a,n??null,i,o,z,c,u,x,bf),a.context=rf(null),n=a.current,i=ga(),i=xe(i),o=bn(i),o.callback=null,yn(n,o,i),n=i,a.current.lanes=n,$n(a,n),qa(a),e[ml]=a.current,jc(e),new po(a)},Qi.version="19.2.6",Qi}var Tf;function Nb(){if(Tf)return Vc.exports;Tf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Vc.exports=wb(),Vc.exports}var _b=Nb();kh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ji(){return Ji=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},Ji.apply(this,arguments)}var Hn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Hn||(Hn={}));const Ef="popstate";function Sb(s){s===void 0&&(s={});function l(p,h){let{pathname:m="/",search:j="",hash:v=""}=ul(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),cd("",{pathname:m,search:j,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function r(p,h){let m=p.document.querySelector("base"),j="";if(m&&m.getAttribute("href")){let v=p.location.href,y=v.indexOf("#");j=y===-1?v:v.slice(0,y)}return j+"#"+(typeof h=="string"?h:No(h))}function d(p,h){Co(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return Cb(l,r,d,s)}function jt(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function Co(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function kb(){return Math.random().toString(36).substr(2,8)}function Mf(s,l){return{usr:s.state,key:s.key,idx:l}}function cd(s,l,r,d){return r===void 0&&(r=null),Ji({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?ul(l):l,{state:r,key:l&&l.key||d||kb()})}function No(s){let{pathname:l="/",search:r="",hash:d=""}=s;return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function ul(s){let l={};if(s){let r=s.indexOf("#");r>=0&&(l.hash=s.substr(r),s=s.substr(0,r));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function Cb(s,l,r,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,j=Hn.Pop,v=null,y=b();y==null&&(y=0,m.replaceState(Ji({},m.state,{idx:y}),""));function b(){return(m.state||{idx:null}).idx}function g(){j=Hn.Pop;let k=b(),q=k==null?null:k-y;y=k,v&&v({action:j,location:J.location,delta:q})}function L(k,q){j=Hn.Push;let V=cd(J.location,k,q);r&&r(V,k),y=b()+1;let D=Mf(V,y),X=J.createHref(V);try{m.pushState(D,"",X)}catch(le){if(le instanceof DOMException&&le.name==="DataCloneError")throw le;p.location.assign(X)}h&&v&&v({action:j,location:J.location,delta:1})}function I(k,q){j=Hn.Replace;let V=cd(J.location,k,q);r&&r(V,k),y=b();let D=Mf(V,y),X=J.createHref(V);m.replaceState(D,"",X),h&&v&&v({action:j,location:J.location,delta:0})}function W(k){let q=p.location.origin!=="null"?p.location.origin:p.location.href,V=typeof k=="string"?k:No(k);return V=V.replace(/ $/,"%20"),jt(q,"No window.location.(origin|href) available to create URL for href: "+V),new URL(V,q)}let J={get action(){return j},get location(){return s(p,m)},listen(k){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Ef,g),v=k,()=>{p.removeEventListener(Ef,g),v=null}},createHref(k){return l(p,k)},createURL:W,encodeLocation(k){let q=W(k);return{pathname:q.pathname,search:q.search,hash:q.hash}},push:L,replace:I,go(k){return m.go(k)}};return J}var Df;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Df||(Df={}));function zb(s,l,r){return r===void 0&&(r="/"),Tb(s,l,r)}function Tb(s,l,r,d){let p=typeof l=="string"?ul(l):l,h=vd(p.pathname||"/",r);if(h==null)return null;let m=Ch(s);Eb(m);let j=null;for(let v=0;j==null&&v<m.length;++v){let y=Yb(h);j=qb(m[v],y)}return j}function Ch(s,l,r,d){l===void 0&&(l=[]),r===void 0&&(r=[]),d===void 0&&(d="");let p=(h,m,j)=>{let v={relativePath:j===void 0?h.path||"":j,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};v.relativePath.startsWith("/")&&(jt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let y=Ln([d,v.relativePath]),b=r.concat(v);h.children&&h.children.length>0&&(jt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Ch(h.children,l,b,y)),!(h.path==null&&!h.index)&&l.push({path:y,score:Hb(y,h.index),routesMeta:b})};return s.forEach((h,m)=>{var j;if(h.path===""||!((j=h.path)!=null&&j.includes("?")))p(h,m);else for(let v of expandOptionalSegments(h.path))p(h,m,v)}),l}function expandOptionalSegments(s){let l=s.split("/");if(l.length===0)return[];let[r,...d]=l,p=r.endsWith("?"),h=r.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=expandOptionalSegments(d.join("/")),j=[];return j.push(...m.map(v=>v===""?h:[h,v].join("/"))),p&&j.push(...m),j.map(v=>s.startsWith("/")&&v===""?"/":v)}function Eb(s){s.sort((l,r)=>l.score!==r.score?r.score-l.score:Lb(l.routesMeta.map(d=>d.childrenIndex),r.routesMeta.map(d=>d.childrenIndex)))}const Mb=/^:[\w-]+$/,Db=3,Ob=2,Ab=1,Rb=10,Ub=-2,Of=s=>s==="*";function Hb(s,l){let r=s.split("/"),d=r.length;return r.some(Of)&&(d+=Ub),l&&(d+=Ob),r.filter(p=>!Of(p)).reduce((p,h)=>p+(Mb.test(h)?Db:h===""?Ab:Rb),d)}function Lb(s,l){return s.length===l.length&&s.slice(0,-1).every((d,p)=>d===l[p])?s[s.length-1]-l[l.length-1]:0}function qb(s,l,r){let{routesMeta:d}=s,p={},h="/",m=[];for(let j=0;j<d.length;++j){let v=d[j],y=j===d.length-1,b=h==="/"?l:l.slice(h.length)||"/",g=Bb({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},b),L=v.route;if(!g)return null;Object.assign(p,g.params),m.push({params:p,pathname:Ln([h,g.pathname]),pathnameBase:Zb(Ln([h,g.pathnameBase])),route:L}),g.pathnameBase!=="/"&&(h=Ln([h,g.pathnameBase]))}return m}function Bb(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,d]=Gb(s.path,s.caseSensitive,s.end),p=l.match(r);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),j=p.slice(1);return{params:d.reduce((y,b,g)=>{let{paramName:L,isOptional:I}=b;if(L==="*"){let J=j[g]||"";m=h.slice(0,h.length-J.length).replace(/(.)\/+$/,"$1")}const W=j[g];return I&&!W?y[L]=void 0:y[L]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:m,pattern:s}}function Gb(s,l,r){l===void 0&&(l=!1),r===void 0&&(r=!0),Co(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,j,v)=>(d.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),d]}function Yb(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Co(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function vd(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,d=s.charAt(r);return d&&d!=="/"?null:s.slice(r)||"/"}const Vb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,$b=s=>Vb.test(s);function Qb(s,l){l===void 0&&(l="/");let{pathname:r,search:d="",hash:p=""}=typeof s=="string"?ul(s):s,h;if(r)if($b(r))h=r;else{if(r.includes("//")){let m=r;r=r.replace(/\/\/+/g,"/"),Co(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+r))}r.startsWith("/")?h=Af(r.substring(1),"/"):h=Af(r,l)}else h=l;return{pathname:h,search:Kb(d),hash:Jb(p)}}function Af(s,l){let r=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?r.length>1&&r.pop():p!=="."&&r.push(p)}),r.length>1?r.join("/"):"/"}function Zc(s,l,r,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xb(s){return s.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function jd(s,l){let r=Xb(s);return l?r.map((d,p)=>p===r.length-1?d.pathname:d.pathnameBase):r.map(d=>d.pathnameBase)}function wd(s,l,r,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=ul(s):(p=Ji({},s),jt(!p.pathname||!p.pathname.includes("?"),Zc("?","pathname","search",p)),jt(!p.pathname||!p.pathname.includes("#"),Zc("#","pathname","hash",p)),jt(!p.search||!p.search.includes("#"),Zc("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,j;if(m==null)j=r;else{let g=l.length-1;if(!d&&m.startsWith("..")){let L=m.split("/");for(;L[0]==="..";)L.shift(),g-=1;p.pathname=L.join("/")}j=g>=0?l[g]:"/"}let v=Qb(p,j),y=m&&m!=="/"&&m.endsWith("/"),b=(h||m===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(y||b)&&(v.pathname+="/"),v}const Ln=s=>s.join("/").replace(/\/\/+/g,"/"),Zb=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Kb=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Jb=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Fb(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Th=["post","put","patch","delete"];new Set(Th);const Wb=["get",...Th];new Set(Wb);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fi(){return Fi=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},Fi.apply(this,arguments)}const Nd=f.createContext(null),Pb=f.createContext(null),qn=f.createContext(null),zo=f.createContext(null),Bn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Eh=f.createContext(null);function Ib(s,l){let{relative:r}=l===void 0?{}:l;ei()||jt(!1);let{basename:d,navigator:p}=f.useContext(qn),{hash:h,pathname:m,search:j}=Dh(s,{relative:r}),v=m;return d!=="/"&&(v=m==="/"?d:Ln([d,m])),p.createHref({pathname:v,search:j,hash:h})}function ei(){return f.useContext(zo)!=null}function Gn(){return ei()||jt(!1),f.useContext(zo).location}function Mh(s){f.useContext(qn).static||f.useLayoutEffect(s)}function _d(){let{isDataRoute:s}=f.useContext(Bn);return s?py():ey()}function ey(){ei()||jt(!1);let s=f.useContext(Nd),{basename:l,future:r,navigator:d}=f.useContext(qn),{matches:p}=f.useContext(Bn),{pathname:h}=Gn(),m=JSON.stringify(jd(p,r.v7_relativeSplatPath)),j=f.useRef(!1);return Mh(()=>{j.current=!0}),f.useCallback(function(y,b){if(b===void 0&&(b={}),!j.current)return;if(typeof y=="number"){d.go(y);return}let g=wd(y,JSON.parse(m),h,b.relative==="path");s==null&&l!=="/"&&(g.pathname=g.pathname==="/"?l:Ln([l,g.pathname])),(b.replace?d.replace:d.push)(g,b.state,b)},[l,d,m,h,s])}function Dh(s,l){let{relative:r}=l===void 0?{}:l,{future:d}=f.useContext(qn),{matches:p}=f.useContext(Bn),{pathname:h}=Gn(),m=JSON.stringify(jd(p,d.v7_relativeSplatPath));return f.useMemo(()=>wd(s,JSON.parse(m),h,r==="path"),[s,m,h,r])}function ty(s,l){return ay(s,l)}function ay(s,l,r,d){ei()||jt(!1);let{navigator:p}=f.useContext(qn),{matches:h}=f.useContext(Bn),m=h[h.length-1],j=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let y=Gn(),b;if(l){var g;let k=typeof l=="string"?ul(l):l;v==="/"||(g=k.pathname)!=null&&g.startsWith(v)||jt(!1),b=k}else b=y;let L=b.pathname||"/",I=L;if(v!=="/"){let k=v.replace(/^\//,"").split("/");I="/"+L.replace(/^\//,"").split("/").slice(k.length).join("/")}let W=zb(s,{pathname:I}),J=oy(W&&W.map(k=>Object.assign({},k,{params:Object.assign({},j,k.params),pathname:Ln([v,p.encodeLocation?p.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?v:Ln([v,p.encodeLocation?p.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),h,r,d);return l&&J?f.createElement(zo.Provider,{value:{location:Fi({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:Hn.Pop}},J):J}function ny(){let s=uy(),l=Fb(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},l),r?f.createElement("pre",{style:p},r):null,null)}const ly=f.createElement(ny,null);class iy extends f.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?f.createElement(Bn.Provider,{value:this.props.routeContext},f.createElement(Eh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function sy(s){let{routeContext:l,match:r,children:d}=s,p=f.useContext(Nd);return p&&p.static&&p.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(Bn.Provider,{value:l},d)}function oy(s,l,r,d){var p;if(l===void 0&&(l=[]),r===void 0&&(r=null),d===void 0&&(d=null),s==null){var h;if(!r)return null;if(r.errors)s=r.matches;else if((h=d)!=null&&h.v7_partialHydration&&l.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let m=s,j=(p=r)==null?void 0:p.errors;if(j!=null){let b=m.findIndex(g=>g.route.id&&(j==null?void 0:j[g.route.id])!==void 0);b>=0||jt(!1),m=m.slice(0,Math.min(m.length,b+1))}let v=!1,y=-1;if(r&&d&&d.v7_partialHydration)for(let b=0;b<m.length;b++){let g=m[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(y=b),g.route.id){let{loaderData:L,errors:I}=r,W=g.route.loader&&L[g.route.id]===void 0&&(!I||I[g.route.id]===void 0);if(g.route.lazy||W){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}return m.reduceRight((b,g,L)=>{let I,W=!1,J=null,k=null;r&&(I=j&&g.route.id?j[g.route.id]:void 0,J=g.route.errorElement||ly,v&&(y<0&&L===0?(my("route-fallback"),W=!0,k=null):y===L&&(W=!0,k=g.route.hydrateFallbackElement||null)));let q=l.concat(m.slice(0,L+1)),V=()=>{let D;return I?D=J:W?D=k:g.route.Component?D=f.createElement(g.route.Component,null):g.route.element?D=g.route.element:D=b,f.createElement(sy,{match:g,routeContext:{outlet:b,matches:q,isDataRoute:r!=null},children:D})};return r&&(g.route.ErrorBoundary||g.route.errorElement||L===0)?f.createElement(iy,{location:r.location,revalidation:r.revalidation,component:J,error:I,children:V(),routeContext:{outlet:null,matches:q,isDataRoute:!0}}):V()},null)}var Oh=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Oh||{}),Ah=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Ah||{});function ry(s){let l=f.useContext(Nd);return l||jt(!1),l}function cy(s){let l=f.useContext(Pb);return l||jt(!1),l}function dy(s){let l=f.useContext(Bn);return l||jt(!1),l}function Rh(s){let l=dy(),r=l.matches[l.matches.length-1];return r.route.id||jt(!1),r.route.id}function uy(){var s;let l=f.useContext(Eh),r=cy(),d=Rh();return l!==void 0?l:(s=r.errors)==null?void 0:s[d]}function py(){let{router:s}=ry(Oh.UseNavigateStable),l=Rh(Ah.UseNavigateStable),r=f.useRef(!1);return Mh(()=>{r.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),r.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,Fi({fromRouteId:l},h)))},[s,l])}const Rf={};function my(s,l,r){Rf[s]||(Rf[s]=!0)}function fy(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Uf(s){let{to:l,replace:r,state:d,relative:p}=s;ei()||jt(!1);let{future:h,static:m}=f.useContext(qn),{matches:j}=f.useContext(Bn),{pathname:v}=Gn(),y=_d(),b=wd(l,jd(j,h.v7_relativeSplatPath),v,p==="path"),g=JSON.stringify(b);return f.useEffect(()=>y(JSON.parse(g),{replace:r,state:d,relative:p}),[y,g,p,r,d]),null}function ht(s){jt(!1)}function hy(s){let{basename:l="/",children:r=null,location:d,navigationType:p=Hn.Pop,navigator:h,static:m=!1,future:j}=s;ei()&&jt(!1);let v=l.replace(/^\/*/,"/"),y=f.useMemo(()=>({basename:v,navigator:h,static:m,future:Fi({v7_relativeSplatPath:!1},j)}),[v,j,h,m]);typeof d=="string"&&(d=ul(d));let{pathname:b="/",search:g="",hash:L="",state:I=null,key:W="default"}=d,J=f.useMemo(()=>{let k=vd(b,v);return k==null?null:{location:{pathname:k,search:g,hash:L,state:I,key:W},navigationType:p}},[v,b,g,L,I,W,p]);return J==null?null:f.createElement(qn.Provider,{value:y},f.createElement(zo.Provider,{children:r,value:J}))}function xy(s){let{children:l,location:r}=s;return ty(dd(l),r)}new Promise(()=>{});function dd(s,l){l===void 0&&(l=[]);let r=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...l,p];if(d.type===f.Fragment){r.push.apply(r,dd(d.props.children,h));return}d.type!==ht&&jt(!1),!d.props.index||!d.props.children||jt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=dd(d.props.children,h)),r.push(m)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ud(){return ud=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},ud.apply(this,arguments)}function gy(s,l){if(s==null)return{};var r={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(l.indexOf(p)>=0)&&(r[p]=s[p]);return r}function by(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function yy(s,l){return s.button===0&&(!l||l==="_self")&&!by(s)}const vy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],jy="6";try{window.__reactRouterVersion=jy}catch{}const wy="startTransition",Hf=bb[wy];function Ny(s){let{basename:l,children:r,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=Sb({window:p,v5Compat:!0}));let m=h.current,[j,v]=f.useState({action:m.action,location:m.location}),{v7_startTransition:y}=d||{},b=f.useCallback(g=>{y&&Hf?Hf(()=>v(g)):v(g)},[v,y]);return f.useLayoutEffect(()=>m.listen(b),[m,b]),f.useEffect(()=>fy(d),[d]),f.createElement(hy,{basename:l,children:r,location:j.location,navigationType:j.action,navigator:m,future:d})}const _y=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Sy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ky=f.forwardRef(function(l,r){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:j,target:v,to:y,preventScrollReset:b,viewTransition:g}=l,L=gy(l,vy),{basename:I}=f.useContext(qn),W,J=!1;if(typeof y=="string"&&Sy.test(y)&&(W=y,_y))try{let D=new URL(window.location.href),X=y.startsWith("//")?new URL(D.protocol+y):new URL(y),le=vd(X.pathname,I);X.origin===D.origin&&le!=null?y=le+X.search+X.hash:J=!0}catch{}let k=Ib(y,{relative:p}),q=Cy(y,{replace:m,state:j,target:v,preventScrollReset:b,relative:p,viewTransition:g});function V(D){d&&d(D),D.defaultPrevented||q(D)}return f.createElement("a",ud({},L,{href:W||k,onClick:J||h?d:V,ref:r,target:v}))});var Lf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Lf||(Lf={}));var qf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(qf||(qf={}));function Cy(s,l){let{target:r,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:j}=l===void 0?{}:l,v=_d(),y=Gn(),b=Dh(s,{relative:m});return f.useCallback(g=>{if(yy(g,r)){g.preventDefault();let L=d!==void 0?d:No(y)===No(b);v(s,{replace:L,state:p,preventScrollReset:h,relative:m,viewTransition:j})}},[y,v,b,d,p,r,s,h,m,j])}function wt(){const s=_d();return f.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function zy(){return Gn().pathname}function Ty({href:s,...l}){return t.jsx(ky,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Uh=(...s)=>s.filter((l,r,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var My={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=f.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,...j},v)=>f.createElement("svg",{ref:v,...My,width:l,height:l,stroke:s,strokeWidth:d?Number(r)*24/Number(l):r,className:Uh("lucide",p),...j},[...m.map(([y,b])=>f.createElement(y,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(s,l)=>{const r=f.forwardRef(({className:d,...p},h)=>f.createElement(Dy,{ref:h,iconNode:l,className:Uh(`lucide-${Ey(s)}`,d),...p}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bf=be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gf=be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=be("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=be("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=be("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vf=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=be("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=be("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=be("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=be("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=be("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=be("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qf=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=be("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zf=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=be("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=be("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=be("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=be("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),hv="/api/v3";var Sh;const me=typeof window<"u"&&((Sh=window.settings)==null?void 0:Sh.secure_path)||"ZicFree123",wo="authorization";function xv(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",r=document.cookie.split(";");for(let d=0;d<r.length;d++){let p=r[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(l)===0)try{const h=p.substring(l.length,p.length),m=decodeURIComponent(h),j=JSON.parse(m);return j&&typeof j=="object"&&"value"in j?j.value:m}catch{try{return decodeURIComponent(p.substring(l.length,p.length))}catch{return p.substring(l.length,p.length)}}}return null}function gv(s,l,r=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:l}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",j=new Date;j.setTime(j.getTime()+r*24*60*60*1e3);const v=`expires=${j.toUTCString()}`,y=m?"":`domain=${window.location.hostname};`;let b=`${s}=${encodeURIComponent(p)}; ${v}; ${y} path=/`;h&&(b+="; secure"),b+="; SameSite=Lax",document.cookie=b;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function bv(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,r=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];r.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function Bh(){if(typeof window>"u")return null;let s=window.localStorage.getItem(wo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(wo,s)}catch{}if(!s&&(s=xv("auth_data"),s))try{window.localStorage.setItem(wo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function yv(s,l){const r=s.startsWith("/")?s:`/${s}`,d=new URL(`${hv}${r}`,window.location.origin);return Object.entries(l??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function Tt(){return!!Bh()}function vv(s){typeof window>"u"||(window.localStorage.setItem(wo,s),window.localStorage.setItem("auth_data",s),gv("auth_data",s,36500))}function Gh(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const r=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{r.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,bv(p)})}async function ue(s,l={}){const r={},d=l.method??"GET";if(d!=="GET"&&(r["content-type"]="application/json"),l.auth!==!1){const v=Bh();v&&(r.authorization=v)}const p=await fetch(yv(s,l.params),{method:d,headers:r,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),j=m?await p.json():await p.text();if(!p.ok){(p.status===401||p.status===403)&&l.auth!==!1&&(Gh(),window.location.hash="/login");const v=typeof j=="object"&&j&&"message"in j?String(j.message):`Request failed with status ${p.status}`;throw new Error(v)}if(!m&&typeof j=="string"&&(j.trim().startsWith("<!DOCTYPE html")||j.trim().startsWith("<html")||j.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return j}async function jv(s,l){return ue("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function wv(){const s=`/${me}/stat`,[l,r,d,p,h,m]=await Promise.all([ue(`${s}/getOverride`),ue(`${s}/getOrder`),ue(`${s}/getServerTodayRank`),ue(`${s}/getServerLastRank`),ue(`${s}/getUserTodayRank`),ue(`${s}/getUserLastRank`)]);return{override:l.data,order:r.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function Nv(){return(await ue(`/${me}/config/fetch`)).data}async function Yh(s){return ue(`/${me}/config/save`,{method:"POST",body:s})}async function _v(){return(await ue(`/${me}/config/getEmailTemplate`)).data}async function Sv(){return(await ue(`/${me}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function kv(){return ue(`/${me}/config/testSendMail`,{method:"POST",body:{}})}async function Cv(s){return ue(`/${me}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function zv(){return(await ue(`/${me}/payment/fetch`)).data}async function Tv(){return(await ue(`/${me}/payment/getPaymentMethods`)).data}async function Kf(s,l){return(await ue(`/${me}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function Ev(s){return ue(`/${me}/payment/save`,{method:"POST",body:s})}async function Mv(s){return ue(`/${me}/payment/show`,{method:"POST",body:{id:s}})}async function Dv(s){return ue(`/${me}/payment/drop`,{method:"POST",body:{id:s}})}async function Ov(s){return ue(`/${me}/payment/sort`,{method:"POST",body:{ids:s}})}async function Av(){return(await ue(`/${me}/theme/getThemes`)).data}async function Rv(s){return(await ue(`/${me}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function Uv(s,l){const r=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return ue(`/${me}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:r}})}async function Ii(){return(await ue(`/${me}/server/group/fetch`)).data}async function Vh(s){return ue(`/${me}/server/group/save`,{method:"POST",body:s})}async function Hv(s){return ue(`/${me}/server/group/drop`,{method:"POST",body:{id:s}})}const $h=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function Qh(){return(await ue(`/${me}/server/route/fetch`)).data}async function Lv(s){return ue(`/${me}/server/route/save`,{method:"POST",body:s})}async function qv(s){return ue(`/${me}/server/route/drop`,{method:"POST",body:{id:s}})}async function pl(){return(await ue(`/${me}/plan/fetch`)).data}async function Bv(s){return ue(`/${me}/plan/save`,{method:"POST",body:s})}async function Gv(s){return ue(`/${me}/plan/drop`,{method:"POST",body:{id:s}})}async function Jf(s,l){return ue(`/${me}/plan/update`,{method:"POST",body:{id:s,...l}})}async function Ff(s){return ue(`/${me}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function Yv(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{l.set(`filter[${p}][key]`,d.key),l.set(`filter[${p}][condition]`,d.condition),l.set(`filter[${p}][value]`,d.value)}),await ue(`/${me}/order/fetch?${l.toString()}`)}async function Vv(s){return ue(`/${me}/order/paid`,{method:"POST",body:{trade_no:s}})}async function $v(s){return ue(`/${me}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function Xh(s){return ue(`/${me}/order/assign`,{method:"POST",body:s})}async function Qv(s,l){return ue(`/${me}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function Xv(s){return ue(`/${me}/order/detail`,{method:"POST",body:{id:s}})}async function Zv(s=1,l=15){return ue(`/${me}/coupon/fetch?current=${s}&pageSize=${l}`)}async function Kv(s){return ue(`/${me}/coupon/generate`,{method:"POST",body:s})}async function Jv(s){return ue(`/${me}/coupon/drop`,{method:"POST",body:{id:s}})}async function Fv(s){return ue(`/${me}/coupon/show`,{method:"POST",body:{id:s}})}async function Wv(s=1,l=15){return ue(`/${me}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function Pv(s){return ue(`/${me}/giftcard/generate`,{method:"POST",body:s})}async function Iv(s){return ue(`/${me}/giftcard/drop`,{method:"POST",body:{id:s}})}async function xd(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r&&r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),ue(`/${me}/user/fetch?${d.toString()}`)}async function e1(s){return ue(`/${me}/user/update`,{method:"POST",body:s})}async function Zh(s){return ue(`/${me}/user/getUserInfoById`,{params:{id:s}})}async function t1(s){return ue(`/${me}/user/delUser`,{method:"POST",body:{id:s}})}async function a1(s){return ue(`/${me}/user/generate`,{method:"POST",body:s})}async function n1(s){return ue(`/${me}/user/resetSecret`,{method:"POST",body:{id:s}})}async function l1(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r==null||r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),ue(`/${me}/subscription/fetch?${d.toString()}`)}async function i1(s){return ue(`/${me}/subscription/update`,{method:"POST",body:s})}async function s1(s){return ue(`/${me}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Kh(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r==null||r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),ue(`/${me}/device/fetch?${d.toString()}`)}async function Jh(s){return ue(`/${me}/device/drop`,{method:"POST",body:{id:s}})}async function Fh(s){return ue(`/${me}/device/ban`,{method:"POST",body:{id:s}})}async function o1(s){return ue(`/${me}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function r1(s,l=1,r=10){return ue(`/${me}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:r}})}async function c1(){return(await ue(`/${me}/notice/fetch`)).data}async function d1(s){return ue(`/${me}/notice/save`,{method:"POST",body:s})}async function u1(s){return ue(`/${me}/notice/drop`,{method:"POST",body:{id:s}})}async function p1(s){return ue(`/${me}/notice/show`,{method:"POST",body:{id:s}})}async function m1(){return(await ue(`/${me}/ticket/fetch`)).data}async function Wf(s){return(await ue(`/${me}/ticket/fetch`,{params:{id:s}})).data}async function f1(s,l){return ue(`/${me}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function h1(s){return ue(`/${me}/ticket/close`,{method:"POST",body:{id:s}})}async function x1(){return(await ue(`/${me}/knowledge/fetch`)).data}async function g1(s){return(await ue(`/${me}/knowledge/fetch`,{params:{id:s}})).data}async function b1(s){return ue(`/${me}/knowledge/save`,{method:"POST",body:s})}async function y1(s){return ue(`/${me}/knowledge/drop`,{method:"POST",body:{id:s}})}async function v1(s){return ue(`/${me}/knowledge/show`,{method:"POST",body:{id:s}})}async function j1(){return(await ue(`/${me}/webcon/fetch`)).data}async function w1(s){return ue(`/${me}/webcon/save`,{method:"POST",body:s})}async function N1(s){return ue(`/${me}/webcon/drop`,{method:"POST",body:{id:s}})}async function _1(s){return ue(`/${me}/webcon/show`,{method:"POST",body:{id:s}})}async function S1(){return ue(`/${me}/system/getSystemStatus`)}async function k1(){return ue(`/${me}/system/getQueueStats`)}async function C1(){return ue(`/${me}/system/getQueueWorkload`)}async function z1(){return ue(`/${me}/system/getSystemLog`)}async function Pf(){return ue(`/${me}/server/manage/getNodes`)}async function T1(s,l){return ue(`/${me}/server/${s}/save`,{method:"POST",body:l})}async function E1(s,l){return ue(`/${me}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function M1(s,l,r){return ue(`/${me}/server/${s}/update`,{method:"POST",body:{id:l,show:r}})}async function D1(s,l){return ue(`/${me}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function O1(s){return ue(`/${me}/server/manage/sort`,{method:"POST",body:s})}const kd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"vi-VN",label:"Tiếng Việt",flag:"🇨🇳"}],Wh="admin-locale",gd="vi-VN",A1="/assets/adminzic",Ph=f.createContext(null);function R1(){if(typeof window>"u")return gd;const s=localStorage.getItem(Wh);return s&&kd.some(l=>l.code===s)?s:gd}function U1(s,l){return l?Object.entries(l).reduce((r,[d,p])=>r.replaceAll(`{${d}}`,String(p)),s):s}function H1(s){return new Promise((l,r)=>{var m;if(typeof window>"u"){l({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){l(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var j;l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})}),p.addEventListener("error",r);return}const h=document.createElement("script");h.src=`${A1}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var j;return l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})},h.onerror=r,document.head.appendChild(h)})}function L1({children:s}){const[l,r]=f.useState(gd),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{r(R1())},[]);const j=f.useCallback(b=>{r(b),typeof window<"u"&&localStorage.setItem(Wh,b)},[]);f.useEffect(()=>{let b=!0;return m(!0),H1(l).then(g=>{b&&p(g)}).finally(()=>{b&&m(!1)}),()=>{b=!1}},[l]);const v=f.useCallback((b,g)=>U1(d[b]??b,g),[d]),y=f.useMemo(()=>({locale:l,loading:h,setLocale:j,t:v}),[l,h,j,v]);return t.jsx(Ph.Provider,{value:y,children:s})}function qe(){const s=f.useContext(Ph);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function q1(){const s=wt(),{t:l,locale:r,setLocale:d}=qe(),[p,h]=f.useState(""),[m,j]=f.useState(""),[v,y]=f.useState(""),[b,g]=f.useState(!1),[L,I]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function k(q){W.current&&!W.current.contains(q.target)&&I(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),f.useEffect(()=>{Tt()&&s.replace("/dashboard")},[s]);async function J(k){var q,V,D,X;k.preventDefault(),y(""),g(!0);try{const le=await jv(p,m),ce=((q=le.data)==null?void 0:q.auth_data)??((V=le.data)==null?void 0:V.token),R=((D=le.data)==null?void 0:D.is_admin)===1||((X=le.data)==null?void 0:X.is_admin)===!0;if(!ce||!R)throw new Error(l("login.adminRequired"));vv(ce),s.replace("/dashboard")}catch(le){y(le instanceof Error?le.message:l("login.failed"))}finally{g(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>I(k=>!k),children:t.jsx(es,{size:17})}),L?t.jsx("div",{className:"locale-menu",children:kd.map(k=>t.jsxs("button",{className:`locale-option ${r===k.code?"active":""}`,type:"button",onClick:()=>{d(k.code),I(!1)},children:[t.jsx("span",{className:"locale-flag",children:k.flag}),t.jsx("span",{children:k.label})]},k.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(lv,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:J,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Lh,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:k=>h(k.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Jy,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:k=>j(k.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:b,type:"submit",children:l(b?"login.signingIn":"login.submit")})]})]})]})}function qt(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function Ki(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function B1(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const G1=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:Yy}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:ov},{href:"/config/payment",label:"nav.paymentConfig",icon:By},{href:"/config/theme",label:"nav.themeConfig",icon:uv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Sd},{href:"/server/group",label:"nav.groupManagement",icon:mv},{href:"/server/route",label:"nav.routeManagement",icon:sv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:Qf},{href:"/order",label:"nav.orders",icon:Ky},{href:"/coupon",label:"nav.coupons",icon:Vy},{href:"/giftcard",label:"nav.giftcards",icon:cv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:hd},{href:"/subscription",label:"nav.subscriptions",icon:Qf},{href:"/device",label:"nav.devices",icon:rv},{href:"/webcon",label:"nav.webcon",icon:es},{href:"/notice",label:"nav.notices",icon:Xi},{href:"/ticket",label:"nav.tickets",icon:Zy},{href:"/knowledge",label:"nav.knowledge",icon:Ry}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:Uy}]}];function Y1(){const[s,l]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";l(h),document.documentElement.setAttribute("data-theme",h)},[]);const r=f.useCallback(p=>{l(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{r(s==="light"?"dark":"light")},[s,r]);return{theme:s,toggle:d}}function At({children:s,title:l,subtitle:r}){const[d,p]=f.useState(!1),h=wt(),m=zy(),{t:j,locale:v,setLocale:y}=qe(),{theme:b,toggle:g}=Y1(),[L,I]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function k(q){W.current&&!W.current.contains(q.target)&&I(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]);function J(){Gh(),h.replace("/login")}return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:j("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:G1.map(k=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:j(k.label)}),k.items.map(q=>{const V=q.icon,D=m===q.href;return t.jsxs(Ty,{className:`nav-item ${D?"active":""}`,href:q.href,onClick:()=>p(!1),children:[t.jsx(V,{size:17}),t.jsx("span",{children:j(q.label)})]},q.href)})]},k.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":j(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(k=>!k),children:d?t.jsx(ot,{size:19}):t.jsx(Wy,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),r?t.jsx("p",{children:r}):null]}),t.jsxs("div",{className:"topbar-actions",children:[t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":j("common.language"),onClick:()=>I(k=>!k),children:t.jsx(es,{size:17})}),L?t.jsx("div",{className:"locale-menu",children:kd.map(k=>t.jsxs("button",{className:`locale-option ${v===k.code?"active":""}`,type:"button",onClick:()=>{y(k.code),I(!1)},children:[t.jsx("span",{className:"locale-flag",children:k.flag}),t.jsx("span",{children:k.label})]},k.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":b==="dark"?"Switch to light mode":"Switch to dark mode",onClick:g,children:b==="dark"?t.jsx(dv,{size:17}):t.jsx(Py,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:J,children:[t.jsx(Fy,{size:16}),t.jsx("span",{children:j("common.logout")})]})]})]}),t.jsx("main",{className:"content",children:s})]})]})}function ho({label:s,value:l,helper:r,tone:d="default"}){return t.jsxs("article",{className:`stat-card tone-${d}`,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Ay,{size:19})}),r?t.jsx("small",{children:r}):null]})}function pt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(zt,{size:18}),t.jsx("span",{children:s})]})}function V1(s){const l=new Map;return s.forEach((r,d)=>{const p=l.get(r.date)??{date:r.date,commissionCount:0,commissionAmount:0,paidCount:0,paidAmount:0,registrations:0},h=d%5;h===0&&(p.commissionCount=r.value),h===1&&(p.commissionAmount=r.value),h===2&&(p.paidCount=r.value),h===3&&(p.paidAmount=r.value),h===4&&(p.registrations=r.value),l.set(r.date,p)}),Array.from(l.values()).slice(-18)}function $1({records:s}){const{t:l}=qe(),r=V1(s),d=Math.max(...r.map(b=>b.paidAmount),1),p=720,h=220,m=28,j=r.length>1?(p-m*2)/(r.length-1):0,v=b=>h-m-b/d*(h-m*2),y=r.map((b,g)=>`${m+g*j},${v(b.paidAmount)}`).join(" ");return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.revenueTrend")}),t.jsx("p",{children:l("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:l("dashboard.lastDays",{count:r.length})})]}),t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${p} ${h}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:"revenueFill",x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:"#2f8f83",stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:"#2f8f83",stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(b=>t.jsx("line",{className:"chart-grid",x1:m,x2:p-m,y1:m+b*(h-m*2),y2:m+b*(h-m*2)},b)),r.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",points:`${m},${h-m} ${y} ${p-m},${h-m}`}),t.jsx("polyline",{className:"chart-line",points:y})]}):null]}),t.jsx("div",{className:"chart-axis",children:r.filter((b,g)=>g%Math.max(Math.ceil(r.length/6),1)===0).map(b=>t.jsx("span",{children:b.date},b.date))}),t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:l("dashboard.peakRevenue")}),t.jsxs("strong",{children:[qt(d)," VND"]})]})]})}function xo({title:s,subtitle:l,records:r,labelKey:d}){const{t:p}=qe(),h=Math.max(...r.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:r.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):r.slice(0,8).map((m,j)=>{const v=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),y=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:j+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[B1(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(y,3)}%`}})})]},`${v}-${j}`)})})]})}function Jc({label:s,current:l,previous:r}){const{t:d}=qe();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?Ki(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof r=="number"?Ki(r):r]})]})}function Q1(){var y,b,g,L,I,W,J,k,q,V,D;const s=wt(),{t:l}=qe(),[r,d]=f.useState(null),[p,h]=f.useState(""),[m,j]=f.useState(!0),v=f.useCallback(async()=>{j(!0),h("");try{d(await wv())}catch(X){h(X instanceof Error?X.message:l("dashboard.loadFailed"))}finally{j(!1)}},[l]);return f.useEffect(()=>{if(!Tt()){s.replace("/login");return}v()},[v,s]),t.jsxs(At,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(zt,{size:16}),l("common.retry")]})]}):null,m&&!r?t.jsx(pt,{label:l("dashboard.loading")}):null,r?t.jsxs(t.Fragment,{children:[((y=r.override)==null?void 0:y.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(b=r.override)==null?void 0:b.ticket_pending_total})}),t.jsx("strong",{children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(ho,{label:l("dashboard.onlineUsers"),value:Ki(((g=r.override)==null?void 0:g.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green"}),t.jsx(ho,{label:l("dashboard.todayIncome"),value:`${qt(((L=r.override)==null?void 0:L.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange"}),t.jsx(ho,{label:l("dashboard.todayRegistrations"),value:Ki(((I=r.override)==null?void 0:I.day_register_total)??0),helper:l("dashboard.newAccounts")}),t.jsx(ho,{label:l("dashboard.pendingCommission"),value:Ki(((W=r.override)==null?void 0:W.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose"})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(Jc,{label:l("dashboard.monthIncome"),current:`${qt(((J=r.override)==null?void 0:J.month_income)??0)} VND`,previous:`${qt(((k=r.override)==null?void 0:k.last_month_income)??0)} VND`}),t.jsx(Jc,{label:l("dashboard.monthCommission"),current:`${qt(((q=r.override)==null?void 0:q.commission_month_payout)??0)} VND`,previous:`${qt(((V=r.override)==null?void 0:V.commission_last_month_payout)??0)} VND`}),t.jsx(Jc,{label:l("dashboard.monthRegistrations"),current:((D=r.override)==null?void 0:D.month_register_total)??0,previous:"-"})]}),t.jsx($1,{records:r.order}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(xo,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:r.serverToday,labelKey:"server_name"}),t.jsx(xo,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.serverYesterday,labelKey:"server_name"}),t.jsx(xo,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:r.userToday,labelKey:"email"}),t.jsx(xo,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.userYesterday,labelKey:"email"})]})]}):null]})}const X1=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function If(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function Z1(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function Fc(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function K1(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function J1(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function da(s){return s===!0||s===1||s==="1"}function F1(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function Wc(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function W1({field:s,value:l,onChange:r}){const{t:d}=qe(),p=s.toInput?s.toInput(l):F1(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${da(l)?"on":""}`,type:"button",onClick:()=>r(da(l)?0:1),"aria-pressed":da(l),children:[t.jsx("span",{}),da(l)?If(d)[0].label:If(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>r(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function P1({plans:s,emailTemplates:l,t:r}){const d=[{label:r("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:r("config.tabs.site"),hint:r("config.tabs.siteHint"),fields:[{key:"app_name",label:r("config.site.appName"),description:r("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:r("config.site.appDescription"),description:r("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:r("config.site.appUrl"),description:r("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:r("config.site.forceHttps"),description:r("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:r("config.site.logo"),description:r("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:r("config.site.subscribeUrl"),description:r("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:r("config.site.subscribePath"),description:r("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:r("config.site.tosUrl"),description:r("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:r("config.site.stopRegister"),description:r("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:r("config.site.trialPlan"),description:r("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:r("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:r("config.site.currency"),description:r("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:r("config.site.currencySymbol"),description:r("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:r("config.tabs.safe"),hint:r("config.tabs.safeHint"),fields:[{key:"email_verify",label:r("config.safe.emailVerify"),description:r("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:r("config.safe.gmailAlias"),description:r("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:r("config.safe.safeMode"),description:r("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:r("config.safe.securePath"),description:r("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:r("config.safe.staffPath"),description:r("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:r("config.safe.emailWhitelist"),description:r("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:r("config.safe.emailWhitelistSuffix"),description:r("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>da(p.email_whitelist_enable),fromInput:Wc},{key:"recaptcha_enable",label:r("config.safe.recaptcha"),description:r("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:r("config.safe.recaptchaKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"recaptcha_site_key",label:r("config.safe.recaptchaSiteKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:r("config.safe.ipRegisterLimit"),description:r("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:r("config.safe.passwordLimit"),description:r("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.password_limit_enable)},{key:"password_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.password_limit_enable)}]},{key:"subscribe",label:r("config.tabs.subscribe"),hint:r("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:r("config.subscribe.multipleSubscription"),description:r("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:r("config.subscribe.planChange"),description:r("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:r("config.subscribe.deviceHwid"),description:r("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"change_sni_enable",label:r("config.subscribe.changeSni"),description:r("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:r("config.subscribe.giftcardNotice"),description:r("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:r("config.subscribe.resetTraffic"),description:r("config.subscribe.resetTrafficHelp"),type:"select",options:Z1(r)},{key:"surplus_enable",label:r("config.subscribe.surplus"),description:r("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:r("config.subscribe.allowNewPeriod"),description:r("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:r("config.subscribe.newOrderEvent"),type:"select",options:Fc(r)},{key:"renew_order_event_id",label:r("config.subscribe.renewOrderEvent"),type:"select",options:Fc(r)},{key:"change_order_event_id",label:r("config.subscribe.changeOrderEvent"),type:"select",options:Fc(r)},{key:"show_info_to_server_enable",label:r("config.subscribe.showInfo"),description:r("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:r("config.subscribe.linkMode"),description:r("config.subscribe.linkModeHelp"),type:"select",options:K1(r)},{key:"show_subscribe_expire",label:r("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:r("config.tabs.deposit"),hint:r("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:r("config.deposit.bonus"),description:r("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:Wc}]},{key:"ticket",label:r("config.tabs.ticket"),hint:r("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:r("config.ticket.status"),description:r("config.ticket.statusHelp"),type:"select",options:J1(r)}]},{key:"invite",label:r("config.tabs.invite"),hint:r("config.tabs.inviteHint"),fields:[{key:"invite_force",label:r("config.invite.force"),description:r("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:r("config.invite.commission"),description:r("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:r("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:r("config.invite.neverExpire"),description:r("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:r("config.invite.firstTime"),description:r("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:r("config.invite.autoCheck"),description:r("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:r("config.invite.withdrawLimit"),description:r("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:r("config.invite.withdrawMethods"),description:r("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:Wc},{key:"withdraw_close_enable",label:r("config.invite.withdrawClose"),description:r("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:r("config.invite.distribution"),description:r("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:r("config.invite.level1"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:r("config.invite.level2"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:r("config.invite.level3"),type:"number",visible:p=>da(p.commission_distribution_enable)}]},{key:"server",label:r("config.tabs.server"),hint:r("config.tabs.serverHint"),fields:[{key:"server_api_url",label:r("config.server.apiUrl"),description:r("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:r("config.server.token"),description:r("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:r("config.server.pullInterval"),description:r("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:r("config.server.pushInterval"),description:r("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:r("config.server.nodeTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:r("config.server.deviceTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:r("config.server.deviceLimitMode"),description:r("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:r("config.tabs.email"),hint:r("config.tabs.emailHint"),warning:r("config.email.warning"),fields:[{key:"email_host",label:r("config.email.host"),type:"text"},{key:"email_port",label:r("config.email.port"),type:"text"},{key:"email_encryption",label:r("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:r("config.email.username"),type:"text"},{key:"email_password",label:r("config.email.password"),type:"text"},{key:"email_from_address",label:r("config.email.fromAddress"),type:"text"},{key:"email_template",label:r("config.email.template"),type:"select",options:l.map(p=>({label:p,value:p}))}]},{key:"telegram",label:r("config.tabs.telegram"),hint:r("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:r("config.telegram.token"),description:r("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:r("config.telegram.enable"),description:r("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:r("config.telegram.group"),description:r("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:r("config.telegram.appleShareApi"),description:r("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:r("config.tabs.app"),hint:r("config.tabs.appHint"),warning:r("config.app.warning"),fields:[{key:"windows_version",label:r("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:r("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:r("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:r("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:r("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:r("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function I1(){const s=wt(),{t:l}=qe(),[r,d]=f.useState("site"),[p,h]=f.useState(null),[m,j]=f.useState([]),[v,y]=f.useState([]),[b,g]=f.useState(!0),[L,I]=f.useState(null),[W,J]=f.useState(""),[k,q]=f.useState(""),V=f.useCallback(async()=>{g(!0),J("");try{const[se,_,O]=await Promise.all([Nv(),Sv(),_v()]);h(se),j(_),y(O)}catch(se){J(se instanceof Error?se.message:l("config.loadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}V()},[V,s]),f.useEffect(()=>{const se=document.querySelector(".config-tabs button.active");se&&se.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]);const D=f.useMemo(()=>P1({plans:m,emailTemplates:v,t:l}),[m,v,l]),X=D.find(se=>se.key===r)??D[0],le=(p==null?void 0:p[X.key])??{};function ce(se,_,O){h(A=>A&&{...A,[se]:{...A[se],[_]:O}})}async function R(){if(p){I(X.key),J(""),q("");try{await Yh(p[X.key]),q(l("config.saveSuccess"))}catch(se){J(se instanceof Error?se.message:l("config.saveFailed"))}finally{I(null)}}}async function oe(){I("mail"),J(""),q("");try{await kv(),q(l("config.email.testSuccess"))}catch(se){J(se instanceof Error?se.message:l("config.email.testFailed"))}finally{I(null)}}async function ie(){const se=String((p==null?void 0:p.telegram.telegram_bot_token)??"");I("webhook"),J(""),q("");try{await Cv(se),q(l("config.telegram.webhookSuccess"))}catch(_){J(_ instanceof Error?_.message:l("config.telegram.webhookFailed"))}finally{I(null)}}return t.jsxs(At,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:V,disabled:b,children:[t.jsx(zt,{size:16}),l(b?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,k?t.jsx("div",{className:"form-success",children:k}):null,b&&!p?t.jsx(pt,{label:l("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:X1.map(se=>{const _=D.find(O=>O.key===se);return _?t.jsxs("button",{className:r===se?"active":"",type:"button",onClick:()=>d(se),children:[t.jsx("span",{children:_.label}),t.jsx("small",{children:_.hint})]},se):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:X.label}),t.jsx("p",{children:X.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:L===X.key,type:"button",onClick:R,children:[t.jsx(ya,{size:16}),L===X.key?l("config.saving"):l("config.saveTab")]})]}),X.warning?t.jsx("div",{className:"config-warning",children:X.warning}):null,t.jsx("div",{className:"config-fields",children:X.fields.map(se=>se.visible&&!se.visible(le)?null:t.jsx(W1,{field:se,value:le[se.key],onChange:_=>ce(X.key,se.key,_)},se.key))}),X.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:L==="mail",onClick:oe,children:[t.jsx(Lh,{size:16}),l(L==="mail"?"config.email.testing":"config.email.test")]})}):null,X.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:L==="webhook",onClick:ie,children:[t.jsx(pv,{size:16}),l(L==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(qh,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function dl(s){var r;if(typeof window>"u"||typeof document>"u")return!1;if((r=navigator.clipboard)!=null&&r.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function Pc(s){return s===!0||s===1||s==="1"}function e0(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function t0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function a0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState({}),[b,g]=f.useState(!0),[L,I]=f.useState(!1),[W,J]=f.useState(!1),[k,q]=f.useState(""),[V,D]=f.useState(""),[X,le]=f.useState({}),ce=f.useCallback(async()=>{g(!0),q("");try{const[S,F]=await Promise.all([zv(),Tv()]);d(S),h(F),le({})}catch(S){q(S instanceof Error?S.message:l("payment.loadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ce()},[ce,s]);async function R(S){const F=(S==null?void 0:S.payment)??p[0]??"",E=e0(S,F);if(j(E),y({}),q(""),D(""),!!F){I(!0);try{y(await Kf(F,S==null?void 0:S.id))}catch($){q($ instanceof Error?$.message:l("payment.formLoadFailed"))}finally{I(!1)}}}async function oe(S){if(m){j({...m,payment:S,config:{}}),I(!0),q("");try{y(await Kf(S,m.id))}catch(F){q(F instanceof Error?F.message:l("payment.formLoadFailed"))}finally{I(!1)}}}async function ie(S){var F,E;if(S.preventDefault(),!!m){J(!0),q(""),D("");try{await Ev(t0(m)),j(null),(F=window.showToast)==null||F.call(window,l("payment.saveSuccess"),"success"),await ce()}catch($){(E=window.showToast)==null||E.call(window,$ instanceof Error?$.message:l("payment.saveFailed"),"error")}finally{J(!1)}}}async function se(S){var F;q(""),D("");try{await Mv(S),await ce()}catch(E){(F=window.showToast)==null||F.call(window,E instanceof Error?E.message:l("payment.toggleFailed"),"error")}}async function _(S){var F;(F=window.showConfirm)==null||F.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var E,$;q(""),D("");try{await Dv(S),(E=window.showToast)==null||E.call(window,l("payment.deleteSuccess"),"success"),await ce()}catch(N){($=window.showToast)==null||$.call(window,N instanceof Error?N.message:l("payment.deleteFailed"),"error")}}})}async function O(S,F){var ne;const E=S+F;if(E<0||E>=r.length)return;const $=[...r],N=$[S];$.splice(S,1),$.splice(E,0,N),d($);try{await Ov($.map(ae=>ae.id)),await ce()}catch(ae){(ne=window.showToast)==null||ne.call(window,ae instanceof Error?ae.message:l("payment.sortFailed"),"error"),await ce()}}async function A(S){var E;const F=await dl(S);(E=window.showToast)==null||E.call(window,l(F?"payment.copied":"common.copyFailed"),F?"success":"error")}return t.jsxs(At,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:ce,disabled:b,children:[t.jsx(zt,{size:16}),t.jsx("span",{children:l(b?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void R(),children:[t.jsx(ba,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,V?t.jsx("div",{className:"form-success",children:V}):null,b&&r.length===0?t.jsx(pt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((S,F)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:S.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void O(F,-1),disabled:F===0,"aria-label":l("payment.moveUp"),children:t.jsx(Gf,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void O(F,1),disabled:F===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Bf,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${Pc(S.enable)?"active":""}`,type:"button",onClick:()=>void se(S.id),"aria-label":Pc(S.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:S.name}),S.icon?t.jsx("small",{children:S.icon}):null]}),t.jsx("td",{children:S.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void A(S.notify_url),children:[t.jsx("span",{children:S.notify_url}),t.jsx(_o,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void R(S),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void _(S.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},S.id)),!b&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[r.map((S,F)=>{const E=Pc(S.enable),$=S.handling_fee_percent!==null&&S.handling_fee_percent!==""?`${S.handling_fee_percent}%`:"",N=S.handling_fee_fixed!==null?`${qt(S.handling_fee_fixed)} VND`:"",ne=[$,N].filter(Boolean).join(" + ")||"No fees",ae=X[S.id],C=S.icon&&!ae;return t.jsxs("div",{className:`payment-mobile-card ${E?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",S.id]}),t.jsx("span",{className:"gateway-tag",children:S.payment})]}),t.jsx("button",{className:`admin-switch ${E?"active":""}`,type:"button",onClick:()=>void se(S.id),"aria-label":l(E?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[C?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:S.icon,alt:S.name,onError:()=>{le(Z=>({...Z,[S.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:S.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:S.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ne})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void A(S.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:S.notify_url}),t.jsx(_o,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void O(F,-1),disabled:F===0,"aria-label":l("payment.moveUp"),children:t.jsx(Gf,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void O(F,1),disabled:F===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Bf,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void R(S),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void _(S.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},S.id)}),!b&&r.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:S=>j({...m,name:S.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:S=>j({...m,icon:S.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:S=>j({...m,notify_domain:S.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:S=>j({...m,handling_fee_percent:S.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:S=>j({...m,handling_fee_fixed:S.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:S=>void oe(S.target.value),children:p.map(S=>t.jsx("option",{value:S,children:S},S))})]}),L?t.jsx(pt,{label:l("payment.formLoading")}):null,L?null:Object.entries(v).map(([S,F])=>t.jsxs("label",{children:[t.jsx("span",{children:F.label}),t.jsx("input",{className:"config-input",placeholder:F.description,value:String(m.config[S]??F.value??""),onChange:E=>j({...m,config:{...m.config,[S]:E.target.value}})})]},S)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment gateway"}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function n0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function l0(s,l){return l[s.field_name]??s.default_value??""}function i0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(!1),[L,I]=f.useState(null),[W,J]=f.useState(""),[k,q]=f.useState(""),V=f.useCallback(async()=>{j(!0),J("");try{d(await Av())}catch(R){J(R instanceof Error?R.message:l("theme.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}V()},[V,s]);async function D(R,oe){h(null),y(!0),J(""),q("");try{const ie=await Rv(R);h({key:R,theme:oe,values:ie})}catch(ie){J(ie instanceof Error?ie.message:l("theme.configLoadFailed"))}finally{y(!1)}}async function X(R){I(R),J(""),q("");try{await Yh({frontend_theme:R}),q(l("theme.activateSuccess")),await V()}catch(oe){J(oe instanceof Error?oe.message:l("theme.activateFailed"))}finally{I(null)}}async function le(R){if(R.preventDefault(),!!p){g(!0),J(""),q("");try{await Uv(p.key,p.values),h(null),q(l("theme.saveSuccess")),await V()}catch(oe){J(oe instanceof Error?oe.message:l("theme.saveFailed"))}finally{g(!1)}}}function ce(R,oe){h(ie=>ie&&{...ie,values:{...ie.values,[R]:oe}})}return t.jsxs(At,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:V,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,k?t.jsx("div",{className:"form-success",children:k}):null,m&&!r?t.jsx(pt,{label:l("theme.loading")}):null,r?t.jsx("section",{className:"theme-grid",children:Object.entries(r.themes).map(([R,oe])=>{const ie=r.active===R;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${n0(oe)})`},children:ie?t.jsxs("span",{className:"theme-active",children:[t.jsx(Hh,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:oe.name||R}),t.jsx("p",{children:oe.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",oe.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(R,oe),children:[t.jsx(nv,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ie||L===R,type:"button",onClick:()=>void X(R),children:[t.jsx(Iy,{size:15}),l(ie?"theme.current":L===R?"theme.activating":"theme.activate")]})]})]},R)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(pt,{label:l("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:le,children:[(p.theme.configs??[]).map(R=>{const oe=l0(R,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:R.label}),R.description?t.jsx("p",{className:"field-description",children:R.description}):null,R.field_type==="select"?t.jsx("select",{className:"config-input",value:oe,onChange:ie=>ce(R.field_name,ie.target.value),children:Object.entries(R.select_options??{}).map(([ie,se])=>t.jsx("option",{value:ie,children:se},ie))}):null,R.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:R.placeholder,rows:5,value:oe,onChange:ie=>ce(R.field_name,ie.target.value)}):null,R.field_type!=="select"&&R.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:R.placeholder,value:oe,onChange:ie=>ce(R.field_name,ie.target.value)}):null]},R.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"theme.saving":"common.save")]})]})]})]})}):null]})}const eh=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"v2node",label:"V2Node"}],s0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],o0=["tcp","ws","grpc","http","httpupgrade","xhttp"],r0=["tcp","ws","grpc","http","httpupgrade","xhttp"],c0=["tcp","ws","grpc"],Ih=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],d0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"];function u0(s,l,r=""){return s[l]??r}function Je(s,l,r=""){return String(u0(s,l,r))}function Eo(s,l){const r=s[l];return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}function th(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(r=>r.trim()):[]).map(r=>Number(r)).filter(r=>Number.isFinite(r))}function ah(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=th(d.group_id),d.route_id=th(d.route_id),{_type:s,...d}}const r={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...r,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...r,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...r,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...r,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...r,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...r,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...r,server_name:"",insecure:0,padding_scheme:""};case"v2node":return{...r,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return r}}function p0({initialValue:s,onCancel:l,onSave:r}){const{t:d}=qe(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,j]=f.useState(""),v=b=>{if(b.preventDefault(),!p.trim()){r({});return}try{const g=JSON.parse(p);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");r(g)}catch(g){j(g instanceof Error?g.message:"Invalid JSON")}},y=b=>{if(h(b),!b.trim()){j("");return}try{const g=JSON.parse(b);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");j("")}catch(g){j(g instanceof Error?g.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:b=>y(b.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:l,actionText:r,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),r&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:r})]})}function m0({value:s,onChange:l,label:r}){const{t:d}=qe(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:r}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,j)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((v,y)=>y!==j)),style:{cursor:"pointer"},children:[m," ×"]},j)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),l([...s,p.trim()]),h(""))}})]})]})}function nh({options:s,value:l,onChange:r,label:d,actionText:p,onAction:h}){const{t:m}=qe(),[j,v]=f.useState(""),y=s.filter(g=>l.includes(g.id)),b=s.filter(g=>g.name.toLowerCase().includes(j.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:p,onAction:h}),y.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:y.map(g=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>r(l.filter(L=>L!==g.id)),children:[g.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},g.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:j,onChange:g=>v(g.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[b.map(g=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(g.id),onChange:L=>r(L.target.checked?[...l,g.id]:l.filter(I=>I!==g.id))}),t.jsx("span",{children:g.name})]},g.id)),b.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function on({label:s,checked:l,onChange:r}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>r(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function f0({initialValue:s,isSnakeCase:l,onCancel:r,onSave:d}){const{t:p}=qe(),h=l?"server_name":"serverName",m=l?"allow_insecure":"allowInsecure",[j,v]=f.useState(String((s==null?void 0:s[h])??"")),[y,b]=f.useState(()=>{const L=s==null?void 0:s[m];return L===1||L===!0||String(L)==="1"||String(L)==="true"}),g=L=>{L.preventDefault(),d({[h]:j,[m]:l?y?1:0:y})};return t.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:p("node.serverName")}),t.jsx("input",{className:"config-input",value:j,onChange:L=>v(L.target.value),placeholder:p("node.serverNameHelp")})]}),t.jsx(on,{label:p("node.allowInsecure"),checked:y,onChange:b}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function h0({draft:s,set:l,groups:r,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:j}){const{t:v}=qe(),y=String(s._type),b=Je(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Je(s,"name"),onChange:g=>l("name",g.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Je(s,"rate","1"),onChange:g=>l("rate",Number(g.target.value))})]})]}),t.jsx(m0,{value:s.tags??[],onChange:g=>l("tags",g),label:v("node.tags")}),t.jsx(nh,{options:r.map(g=>({id:g.id,name:g.name})),value:s.group_id??[],onChange:g=>l("group_id",g),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Je(s,"host"),onChange:g=>l("host",g.target.value),placeholder:v("node.addressPlaceholder")})]}),["vmess","vless","v2node"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.tls"),actionText:Number(s.tls)===2?void 0:v("node.editConfig"),onAction:()=>{const g=y==="vmess"?"tlsSettings":"tls_settings";h(v("node.tls"),g)}}),t.jsxs("select",{className:"config-input",value:Je(s,"tls","0"),onChange:g=>{const L=Number(g.target.value);l("tls",L);const I=y==="vmess"?"tlsSettings":"tls_settings";L===1&&!s[I]&&l(I,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),y!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Je(s,"server_name"),onChange:g=>l("server_name",g.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Je(s,"port"),onChange:g=>l("port",g.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Je(s,"server_port"),onChange:g=>l("server_port",g.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless","v2node"].includes(y)&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:j}),t.jsxs("select",{className:"config-input",value:b,onChange:g=>{l("network",g.target.value);const L=y==="vmess"?"networkSettings":"network_settings";s[L]||l(L,{})},children:[y==="vmess"&&s0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="trojan"&&c0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="vless"&&o0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="v2node"&&r0.map(g=>t.jsx("option",{value:g,children:g},g))]})]}),y==="trojan"&&t.jsx(g0,{draft:s,set:l}),y==="shadowsocks"&&t.jsx(b0,{draft:s,set:l,onOpenJson:h}),y==="hysteria"&&t.jsx(y0,{draft:s,set:l}),y==="tuic"&&t.jsx(v0,{draft:s,set:l}),y==="vless"&&t.jsx(j0,{draft:s,set:l,onOpenJson:h}),y==="anytls"&&t.jsx(w0,{draft:s,set:l,onOpenJson:h}),y==="v2node"&&t.jsx(N0,{draft:s,set:l,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:g=>l("parent_id",g.target.value?Number(g.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),p.filter(g=>g.id!==s.id&&!g.parent_id).map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsx(nh,{options:d.map(g=>({id:g.id,name:g.remarks})),value:s.route_id??[],onChange:g=>l("route_id",g),label:v("node.routingGroups")})]})]})}function x0({draft:s,set:l,onCancel:r,onSave:d}){const{t:p}=qe(),h=String(s._type),m=String(s.network??"tcp"),j=h==="vmess",v=j?"networkSettings":"network_settings",y=Eo(s,v),b=String(y.path??""),g=String(j?y.headers&&typeof y.headers=="object"?y.headers.Host??"":"":y.host??""),L=String(y.serviceName??""),I=k=>{k.preventDefault(),d()},W=["ws","http","httpupgrade","xhttp"].includes(m),J=m==="grpc";return t.jsxs("form",{onSubmit:I,style:{display:"flex",flexDirection:"column",gap:16},children:[W&&t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.path")}),t.jsx("input",{className:"config-input",value:b,onChange:k=>{const q={...y,path:k.target.value};l(v,q)},placeholder:"/"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.host")}),t.jsx("input",{className:"config-input",value:g,onChange:k=>{if(j){const q=y.headers&&typeof y.headers=="object"?{...y.headers}:{};q.Host=k.target.value,l(v,{...y,headers:q})}else l(v,{...y,host:k.target.value})},placeholder:p("node.hostPlaceholder")})]})]}),J&&t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.serviceName")}),t.jsx("input",{className:"config-input",value:L,onChange:k=>{l(v,{...y,serviceName:k.target.value})},placeholder:p("node.serviceNamePlaceholder")})]}),!W&&!J&&t.jsx("div",{style:{color:"var(--muted)",fontSize:13,padding:"8px 0"},children:p("node.transportNoConfig",{network:m.toUpperCase()})}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function g0({draft:s,set:l}){const{t:r}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.trojanConfig")}),t.jsx(on,{label:r("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function b0({draft:s,set:l,onOpenJson:r}){const{t:d}=qe(),p=Eo(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Je(s,"cipher","aes-128-gcm"),onChange:h=>l("cipher",h.target.value),children:Ih.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>r(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Je(s,"obfs"),onChange:h=>l("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>l("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>l("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function y0({draft:s,set:l}){const{t:r}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Je(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Je(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:r("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Je(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:r("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Je(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:r("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Je(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:r("node.autoGenHelp")})]})]}),t.jsx(on,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function v0({draft:s,set:l}){const{t:r}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Je(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Je(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(on,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(on,{label:r("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(on,{label:r("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function j0({draft:s,set:l,onOpenJson:r}){const{t:d}=qe(),p=Number(s.tls??0),h=Eo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Je(s,"flow"),onChange:m=>l("flow",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Je(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Je(s,"encryption"),onChange:m=>l("encryption",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),p===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(h.server_name??""),onChange:m=>l("tls_settings",{...h,server_name:m.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(h.server_port??"443"),onChange:m=>l("tls_settings",{...h,server_port:m.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(h.public_key??""),onChange:m=>l("tls_settings",{...h,public_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(h.private_key??""),onChange:m=>l("tls_settings",{...h,private_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(h.short_id??""),onChange:m=>l("tls_settings",{...h,short_id:m.target.value}),placeholder:d("node.autoGenHelp")})]})]})]})}function w0({draft:s,set:l,onOpenJson:r}){const{t:d}=qe();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(on,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>l("insecure",p?1:0)})]})}function N0({draft:s,set:l,onOpenJson:r}){const{t:d}=qe(),p=Je(s,"protocol","vless"),h=Number(s.tls??0),m=Eo(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.v2nodeConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.nodeProtocol"),required:!0}),t.jsx("select",{className:"config-input",value:p,onChange:j=>l("protocol",j.target.value),children:d0.map(j=>t.jsx("option",{value:j,children:j},j))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.listenIp")}),t.jsx("input",{className:"config-input",value:Je(s,"listen_ip"),onChange:j=>l("listen_ip",j.target.value),placeholder:"0.0.0.0"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Je(s,"flow"),onChange:j=>l("flow",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Je(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Je(s,"encryption"),onChange:j=>l("encryption",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),h===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(m.server_name??""),onChange:j=>l("tls_settings",{...m,server_name:j.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(m.server_port??"443"),onChange:j=>l("tls_settings",{...m,server_port:j.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(m.public_key??""),onChange:j=>l("tls_settings",{...m,public_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(m.private_key??""),onChange:j=>l("tls_settings",{...m,private_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(m.short_id??""),onChange:j=>l("tls_settings",{...m,short_id:j.target.value}),placeholder:d("node.autoGenHelp")})]})]}),p==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Je(s,"cipher","aes-128-gcm"),onChange:j=>l("cipher",j.target.value),children:Ih.map(j=>t.jsx("option",{value:j,children:j},j))})]}),p==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Je(s,"up_mbps","0"),onChange:j=>l("up_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Je(s,"down_mbps","0"),onChange:j=>l("down_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Je(s,"obfs"),onChange:j=>l("obfs",j.target.value||null)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Je(s,"obfs_password"),onChange:j=>l("obfs_password",j.target.value)})]})]})]}),p==="tuic"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Je(s,"udp_relay_mode","native"),onChange:j=>l("udp_relay_mode",j.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Je(s,"congestion_control","bbr"),onChange:j=>l("congestion_control",j.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),p==="anytls"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(on,{label:d("node.disableSni"),checked:s.disable_sni===1,onChange:j=>l("disable_sni",j?1:0)}),t.jsx(on,{label:d("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:j=>l("zero_rtt_handshake",j?1:0)})]})}const lh={vmess:iv,vless:fv,trojan:md,shadowsocks:So,hysteria:tv,tuic:qy,anytls:es,v2node:$y},Wl={v2node:{bg:"#ef4444",text:"#ffffff",rowBg:"rgba(239, 68, 68, 0.05)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.05)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.05)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.05)"},hysteria:{bg:"#111827",text:"#ffffff",rowBg:"rgba(17, 24, 39, 0.04)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.05)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.05)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.05)"}};function _0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(null),[b,g]=f.useState(null),[L,I]=f.useState(!0),[W,J]=f.useState(!1),[k,q]=f.useState(""),[V,D]=f.useState(""),[X,le]=f.useState(1),[ce,R]=f.useState(10),[oe,ie]=f.useState(!1),[se,_]=f.useState({}),[O,A]=f.useState(""),[S,F]=f.useState(null),[E,$]=f.useState(null),[N,ne]=f.useState(null),ae=(U,re)=>{U.dataTransfer.effectAllowed="move",$(re)},C=(U,re)=>{if(U.preventDefault(),E===null||E===re)return;const pe=[...r],Ue=pe[E];pe.splice(E,1),pe.splice(re,0,Ue),$(re),d(pe)},Z=()=>{$(null)},de=(U,re)=>{oe&&ne(re)},fe=U=>{if(!oe||N===null)return;U.cancelable&&U.preventDefault();const re=U.touches[0],pe=document.elementFromPoint(re.clientX,re.clientY);if(!pe)return;const Ue=pe.closest(".mobile-node-card");if(!Ue)return;const Ee=Ue.getAttribute("data-index");if(Ee===null)return;const et=Number(Ee);if(et!==N&&et>=0&&et<r.length){const tt=[...r],Le=tt[N];tt.splice(N,1),tt.splice(et,0,Le),ne(et),d(tt)}},Ne=()=>{ne(null)};f.useEffect(()=>{le(1)},[O,ce]);const ve=r.filter(U=>{const re=O.toLowerCase().trim();return re?U.name.toLowerCase().includes(re)||U.host.toLowerCase().includes(re)||String(U.id).includes(re)||U.type.toLowerCase().includes(re):!0}),_e=Math.ceil(ve.length/ce),Pe=ve.slice((X-1)*ce,X*ce);function Fe(U,re){return re<=7?Array.from({length:re},(pe,Ue)=>Ue+1):U<=4?[1,2,3,4,5,"...",re]:U>=re-3?[1,"...",re-4,re-3,re-2,re-1,re]:[1,"...",U-1,U,U+1,"...",re]}const Et=Fe(X,_e),Bt=async()=>{var U,re;J(!0),q(""),D("");try{const pe={};r.forEach((Ue,Ee)=>{pe[Ue.type]||(pe[Ue.type]={}),pe[Ue.type][String(Ue.id)]=Ee+1}),await O1(pe),(U=window.showToast)==null||U.call(window,l("node.saveSortSuccess"),"success"),ie(!1),await He()}catch(pe){q(pe instanceof Error?pe.message:l("node.saveSortFailed")),(re=window.showToast)==null||re.call(window,pe instanceof Error?pe.message:l("node.saveSortFailed"),"error")}finally{J(!1)}},Rt=async()=>{ie(!1),await ge()},Jt=()=>ve.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:X===1,onClick:()=>le(U=>Math.max(U-1,1)),children:"<"}),Et.map((U,re)=>U==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${re}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${X===U?"active":""}`,onClick:()=>le(Number(U)),children:U},`page-${U}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:X===_e||_e===0,onClick:()=>le(U=>Math.min(U+1,_e)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:ce,onChange:U=>R(Number(U.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",l("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",l("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",l("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",l("common.perPage")]})]})})]}),[Ie,Gt]=f.useState(null),[Yt,Mt]=f.useState(!1),[Ut,M]=f.useState(""),[Se,Re]=f.useState(!1),[Xe,G]=f.useState(!1);async function ye(U){var pe,Ue;U.preventDefault();const re=Ut.trim();if(!(!re||!v)){Re(!0),q(""),D("");try{await Vh({name:re});const Ee=await Ii();h(Ee);const et=Ee.filter(tt=>tt.name===re).sort((tt,Le)=>Le.id-tt.id)[0];if(et){const tt=v.group_id??[];tt.includes(et.id)||xt("group_id",[...tt,et.id])}M(""),Mt(!1),(pe=window.showToast)==null||pe.call(window,l("node.groupCreateSuccess"),"success")}catch(Ee){q(Ee instanceof Error?Ee.message:l("node.groupCreateFailed")),(Ue=window.showToast)==null||Ue.call(window,Ee instanceof Error?Ee.message:l("node.groupCreateFailed"),"error")}finally{Re(!1)}}}const ke=(U,re)=>{if(!v)return;let pe=v[re];if(typeof pe=="string"&&pe.trim())try{pe=JSON.parse(pe)}catch{}Gt({title:U,key:re,value:pe&&typeof pe=="object"?pe:{}})},ge=f.useCallback(async()=>{I(!0),q("");try{const[U,re,pe]=await Promise.all([Pf(),Ii(),Qh()]);d(U.data),h(re),j(pe)}catch(U){q(U instanceof Error?U.message:l("knowledge.loadFailed"))}finally{I(!1)}},[]),He=f.useCallback(async()=>{try{const U=await Pf();d(U.data)}catch(U){console.error("Refresh nodes failed",U)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ge()},[ge,s]);function Me(U){y(ah(U)),g(null),q(""),D("")}function ct(U){y(ah(U.type,U)),q(""),D("")}async function Ga(U){var et,tt;if(U.preventDefault(),!v)return;J(!0),q(""),D("");const re=String(v._type),pe={...v};for(const Le of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete pe[Le];if(pe.padding_scheme!==void 0&&pe.padding_scheme!==null&&typeof pe.padding_scheme!="string"&&(pe.padding_scheme=JSON.stringify(pe.padding_scheme)),pe.padding_scheme)try{const Le=JSON.parse(String(pe.padding_scheme));if(typeof Le!="object"||Le===null)throw new Error("Invalid JSON array or object")}catch(Le){q("Invalid Padding Scheme configuration: "+(Le instanceof Error?Le.message:"JSON error")),J(!1);return}const Ue=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Le of Ue)(pe[Le]===""||pe[Le]===null||pe[Le]===void 0)&&delete pe[Le];const Ee=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Le of Ee){const ta=pe[Le];(ta==null||typeof ta=="object"&&Object.keys(ta).length===0)&&delete pe[Le]}pe.port!==void 0&&(pe.port=Number(pe.port)),pe.server_port!==void 0&&(pe.server_port=Number(pe.server_port)),pe.tls!==void 0&&(pe.tls=Number(pe.tls)),pe.rate!==void 0&&(pe.rate=Number(pe.rate));try{await T1(re,pe),y(null),(et=window.showToast)==null||et.call(window,l("node.saveSuccess"),"success"),await He()}catch(Le){q(Le instanceof Error?Le.message:l("node.saveFailed")),(tt=window.showToast)==null||tt.call(window,Le instanceof Error?Le.message:l("node.saveFailed"),"error")}finally{J(!1)}}async function va(U){const re=[...r];d(pe=>pe.map(Ue=>Ue.id===U.id&&Ue.type===U.type?{...Ue,show:U.show?0:1}:Ue));try{await M1(U.type,U.id,U.show?0:1),await He()}catch(pe){d(re),q(pe instanceof Error?pe.message:l("node.updateFailed"))}}async function dn(U){var re,pe;try{await D1(U.type,U.id),(re=window.showToast)==null||re.call(window,l("node.copySuccess"),"success"),await He()}catch(Ue){q(Ue instanceof Error?Ue.message:l("node.copyFailed")),(pe=window.showToast)==null||pe.call(window,Ue instanceof Error?Ue.message:l("node.copyFailed"),"error")}}async function Ma(U){var re;(re=window.showConfirm)==null||re.call(window,{message:l("node.deleteConfirm",{name:U.name}),onConfirm:async()=>{var Ue,Ee;const pe=[...r];d(et=>et.filter(tt=>!(tt.id===U.id&&tt.type===U.type))),q("");try{await E1(U.type,U.id),(Ue=window.showToast)==null||Ue.call(window,l("node.deleteSuccess"),"success"),await He()}catch(et){d(pe),q(et instanceof Error?et.message:l("node.deleteFailed")),(Ee=window.showToast)==null||Ee.call(window,et instanceof Error?et.message:l("node.deleteFailed"),"error")}}})}const xt=(U,re)=>y(pe=>pe?{...pe,[U]:re}:null),It=v?String(v._type):"";return t.jsxs(At,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>g(b?null:"show"),title:l("node.createNode"),children:t.jsx(ba,{size:18})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),eh.map(U=>{const re=Wl[U.value],pe=lh[U.value]||ko;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Me(U.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(pe,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:U.label})]},U.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:O,onChange:U=>A(U.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${oe?"success-btn":""}`,type:"button",onClick:oe?Bt:()=>ie(!0),disabled:W,children:l(oe?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),oe&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Rt,children:l("common.cancel")})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,V?t.jsx("div",{className:"form-success",children:V}):null,L&&r.length===0?t.jsx(pt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(oe?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Pe.map(U=>{var pe,Ue;const re=r.findIndex(Ee=>Ee.id===U.id&&Ee.type===U.type);return t.jsxs("tr",{draggable:oe,onDragStart:Ee=>ae(Ee,re),onDragOver:Ee=>C(Ee,re),onDragEnd:Z,className:E===re?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((pe=Wl[U.type])==null?void 0:pe.bg)??"var(--surface-soft)",color:((Ue=Wl[U.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:U.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void va(U),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${U.available_status??0}`,title:U.available_status===2?l("node.statusNormal"):U.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:U.name})]})}),t.jsx("td",{children:t.jsxs("span",{className:"online-badge",children:[t.jsx(hd,{size:13,style:{color:Number(U.online)>0?"#10b981":"var(--text-muted)",opacity:Number(U.online)>0?1:.6}}),Number(U.online??0)]})}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:U.host})}),t.jsx("td",{className:"mobile-hide",children:String(U.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[U.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const Ee=U.group_id??[],et=se[`${U.type}-${U.id}`],tt=Ee.map(Ft=>{const Yn=p.find(Vn=>Number(Vn.id)===Number(Ft));return t.jsx("span",{className:"tag",children:(Yn==null?void 0:Yn.name)??`#${Ft}`},Ft)});if(Ee.length<=3||et)return t.jsxs(t.Fragment,{children:[tt,Ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>_(Ft=>({...Ft,[`${U.type}-${U.id}`]:!1})),children:l("node.collapse")})]});const Le=tt.slice(0,3),ta=Ee.length-3;return t.jsxs(t.Fragment,{children:[Le,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>_(Ft=>({...Ft,[`${U.type}-${U.id}`]:!0})),children:["+",ta,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:Ee.length})}),tt]})]})]})})()})}),t.jsx("td",{children:oe?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Zi,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>F((S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type?null:{id:U.id,type:U.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>F(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ct(U),F(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dn(U),F(null)},children:[t.jsx(_o,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ma(U),F(null)},children:[t.jsx(Ot,{size:14})," ",l("common.delete")]})]})]})]})})]},`${U.type}-${U.id}`)}),!L&&ve.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Jt()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>g(b?null:"show"),title:l("node.createNode"),children:t.jsx(ba,{size:20})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),eh.map(U=>{const re=Wl[U.value],pe=lh[U.value]||ko;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Me(U.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:re==null?void 0:re.bg,backgroundColor:re==null?void 0:re.rowBg},children:t.jsx(pe,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(re==null?void 0:re.bg)??"var(--surface-soft)",color:(re==null?void 0:re.text)??"#ffffff"},children:U.label})]},U.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:O,onChange:U=>A(U.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${oe?"active":""}`,type:"button",onClick:()=>ie(!oe),title:l("node.editSortOrder"),children:t.jsx(Zi,{size:20})})]}),oe&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Rt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Bt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Pe.map(U=>{var pe,Ue;const re=r.findIndex(Ee=>Ee.id===U.id&&Ee.type===U.type);return t.jsxs("div",{className:`mobile-node-card ${E===re||N===re?"dragging":""}`,draggable:oe,onDragStart:Ee=>ae(Ee,re),onDragOver:Ee=>C(Ee,re),onDragEnd:Z,onTouchStart:Ee=>de(Ee,re),onTouchMove:fe,onTouchEnd:Ne,"data-index":re,style:oe?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${U.available_status??0}`,title:U.available_status===2?l("node.statusNormal"):U.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:U.name})]}),t.jsx("div",{className:"card-header-right",children:oe?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Zi,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${U.show===1?"active":""}`,onClick:()=>void va(U),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>F((S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type?null:{id:U.id,type:U.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(S==null?void 0:S.id)===U.id&&(S==null?void 0:S.type)===U.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>F(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{ct(U),F(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{dn(U),F(null)},children:[t.jsx(_o,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ma(U),F(null)},children:[t.jsx(Ot,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[U.host,":",U.port||U.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((pe=Wl[U.type])==null?void 0:pe.bg)??"var(--surface-soft)",color:((Ue=Wl[U.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:U.id}),t.jsxs("span",{className:"mobile-badge-pill",children:[t.jsx(hd,{size:12,style:{marginRight:4,color:Number(U.online)>0?"#10b981":"var(--text-muted)",opacity:Number(U.online)>0?1:.6}}),Number(U.online??0)]}),t.jsxs("span",{className:"mobile-badge-pill",children:[U.rate," x"]})]})]},`${U.type}-${U.id}`)}),!L&&ve.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Jt()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?l("node.editNodeTitle",{type:It}):l("node.createNodeTitle",{type:It})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:It})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ga,children:[t.jsx(h0,{draft:v,set:xt,groups:p,routes:m,nodes:r,onOpenJson:ke,onAddGroup:()=>Mt(!0),onOpenTransportConfig:()=>G(!0)}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"node.saving":"common.save")]})]})]})]})}),Ie!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:Ie.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(Ie.key)?l("node.tlsEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Gt(null),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(Ie.key)?t.jsx(f0,{initialValue:Ie.value,isSnakeCase:Ie.key==="tls_settings",onCancel:()=>Gt(null),onSave:U=>{xt(Ie.key,U),Gt(null)}}):t.jsx(p0,{initialValue:Ie.value,onCancel:()=>Gt(null),onSave:U=>{xt(Ie.key,U),Gt(null)}})})]})}),Yt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Mt(!1),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{onSubmit:ye,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:Ut,onChange:U=>M(U.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Mt(!1),disabled:Se,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Se||!Ut.trim(),children:l(Se?"node.saving":"common.confirm")})]})]})]})}),Xe&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:500,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>G(!1),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(x0,{draft:v,set:xt,onCancel:()=>G(!1),onSave:()=>G(!1)})})]})})]})}function S0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),L=f.useCallback(async()=>{j(!0),g("");try{d(await Ii())}catch(k){g(k instanceof Error?k.message:l("serverGroup.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}L()},[L,s]);function I(k){h({id:k==null?void 0:k.id,name:(k==null?void 0:k.name)??""}),g("")}async function W(k){var q;if(k.preventDefault(),!!p){y(!0),g("");try{await Vh(p),h(null),(q=window.showToast)==null||q.call(window,l("serverGroup.saveSuccess"),"success"),await L()}catch(V){g(V instanceof Error?V.message:l("serverGroup.saveFailed"))}finally{y(!1)}}}async function J(k){var q;(q=window.showConfirm)==null||q.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var V,D;g("");try{await Hv(k),(V=window.showToast)==null||V.call(window,l("serverGroup.deleteSuccess"),"success"),await L()}catch(X){g(X instanceof Error?X.message:l("serverGroup.deleteFailed")),(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:L,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>I(),children:[t.jsx(ba,{size:16}),l("serverGroup.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(pt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(k=>t.jsxs("tr",{children:[t.jsx("td",{children:k.id}),t.jsx("td",{children:t.jsx("strong",{children:k.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Pi,{size:14}),k.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(ko,{size:14}),k.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>I(k),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void J(k.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},k.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:k=>h({...p,name:k.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function k0(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function C0(s){var l;return((l=$h.find(r=>r.value===s))==null?void 0:l.label)??s}function z0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),L=f.useCallback(async()=>{j(!0),g("");try{d(await Qh())}catch(k){g(k instanceof Error?k.message:l("serverRoute.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}L()},[L,s]);function I(k){h(k0(k)),g("")}async function W(k){var V;if(k.preventDefault(),!p)return;y(!0),g("");const q=p.action==="default_out"?[]:p.match.split(`
`).map(D=>D.trim()).filter(Boolean);try{await Lv({id:p.id,remarks:p.remarks,match:q,action:p.action,action_value:p.action_value||null}),h(null),(V=window.showToast)==null||V.call(window,l("serverRoute.saveSuccess"),"success"),await L()}catch(D){g(D instanceof Error?D.message:l("serverRoute.saveFailed"))}finally{y(!1)}}async function J(k){var q;(q=window.showConfirm)==null||q.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var V,D;g("");try{await qv(k),(V=window.showToast)==null||V.call(window,l("serverRoute.deleteSuccess"),"success"),await L()}catch(X){g(X instanceof Error?X.message:l("serverRoute.deleteFailed")),(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:L,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>I(),children:[t.jsx(ba,{size:16}),l("serverRoute.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(pt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(k=>t.jsxs("tr",{children:[t.jsx("td",{children:k.id}),t.jsx("td",{children:t.jsx("strong",{children:k.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(k.match)?k.match:[]).slice(0,3).map((q,V)=>t.jsx("span",{className:"tag",children:q},V)),Array.isArray(k.match)&&k.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",k.match.length-3]}):null,!Array.isArray(k.match)||k.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:C0(k.action)})}),t.jsx("td",{children:k.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>I(k),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void J(k.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},k.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:k=>h({...p,remarks:k.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:k=>h({...p,action:k.target.value}),children:$h.map(k=>t.jsx("option",{value:k.value,children:k.label},k.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:k=>h({...p,match:k.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:k=>h({...p,action_value:k.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function T0(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function E0(s){const l=d=>d===""?null:Math.round(Number(d)*100),r=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:r(s.device_limit),speed_limit:r(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:r(s.reset_traffic_method),capacity_limit:r(s.capacity_limit),force_update:s.force_update}}function Pt(s){return s==null?"—":qt(s)}function M0(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function D0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,g]=f.useState(!1),[L,I]=f.useState(""),[W,J]=f.useState(""),[k,q]=f.useState(null),[V,D]=f.useState(null),X=(N,ne)=>{N.dataTransfer.effectAllowed="move",q(ne)},le=(N,ne)=>{if(N.preventDefault(),k===null||k===ne)return;const ae=[...r],C=ae[k];ae.splice(k,1),ae.splice(ne,0,C),q(ne),d(ae)},ce=async()=>{q(null);try{await Ff(r.map(N=>N.id)),await se()}catch(N){I(N instanceof Error?N.message:l("plan.sortFailed")),await se()}},R=(N,ne)=>{D(ne)},oe=N=>{if(V===null)return;const ne=N.touches[0],ae=document.elementFromPoint(ne.clientX,ne.clientY);if(!ae)return;const C=ae.closest("tr, [data-index]");if(!C)return;const Z=C.getAttribute("data-index");if(Z===null)return;const de=Number(Z);if(de!==V&&de>=0&&de<r.length){const fe=[...r],Ne=fe[V];fe.splice(V,1),fe.splice(de,0,Ne),D(de),d(fe)}},ie=async()=>{if(V!==null){D(null);try{await Ff(r.map(N=>N.id)),await se()}catch(N){I(N instanceof Error?N.message:l("plan.sortFailed")),await se()}}},se=f.useCallback(async()=>{y(!0),I("");try{const[N,ne]=await Promise.all([pl(),Ii()]);d(N),h(ne)}catch(N){I(N instanceof Error?N.message:l("plan.loadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}se()},[se,s]);function _(N){j(T0(N)),I(""),J("")}async function O(N){var ne,ae;if(N.preventDefault(),!!m){g(!0),I(""),J("");try{await Bv(E0(m)),j(null),(ne=window.showToast)==null||ne.call(window,l("plan.saveSuccess"),"success"),await se()}catch(C){(ae=window.showToast)==null||ae.call(window,C instanceof Error?C.message:l("plan.saveFailed"),"error")}finally{g(!1)}}}async function A(N,ne){var ae;try{await Jf(N,{show:ne?0:1}),await se()}catch(C){(ae=window.showToast)==null||ae.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function S(N,ne){var ae;try{await Jf(N,{renew:ne?0:1}),await se()}catch(C){(ae=window.showToast)==null||ae.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function F(N){var ne;(ne=window.showConfirm)==null||ne.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var ae,C;I(""),J("");try{await Gv(N),(ae=window.showToast)==null||ae.call(window,l("plan.deleteSuccess"),"success"),await se()}catch(Z){(C=window.showToast)==null||C.call(window,Z instanceof Error?Z.message:l("plan.deleteFailed"),"error")}}})}function E(N){var ne;return((ne=p.find(ae=>ae.id===N))==null?void 0:ne.name)??`#${N}`}function $(N,ne){j(ae=>ae&&{...ae,[N]:ne})}return t.jsxs(At,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:se,disabled:v,children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(),children:[t.jsx(ba,{size:16}),l("plan.add")]})]})]}),L?t.jsx("div",{className:"form-error",children:L}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&r.length===0?t.jsx(pt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((N,ne)=>t.jsxs("tr",{draggable:!0,onDragStart:ae=>X(ae,ne),onDragOver:ae=>le(ae,ne),onDragEnd:ce,onTouchStart:ae=>R(ae,ne),onTouchMove:oe,onTouchEnd:ie,"data-index":ne,className:k===ne||V===ne?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(Zi,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:ae=>{ae.stopPropagation(),A(N.id,N.show)},title:N.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:ae=>{ae.stopPropagation(),S(N.id,N.renew)},title:N.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Pi,{size:14}),N.count??0]})}),t.jsx("td",{children:E(N.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Pt(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Pt(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Pt(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Pt(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Pt(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Pt(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Pt(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Pt(N.reset_price)})]})]})}),t.jsxs("td",{children:[N.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:ae=>{ae.stopPropagation(),_(N)},children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:ae=>{ae.stopPropagation(),F(N.id)},children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},N.id)),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[r.map((N,ne)=>t.jsxs("div",{className:`mobile-node-card ${k===ne||V===ne?"dragging":""}`,draggable:!0,onDragStart:ae=>X(ae,ne),onDragOver:ae=>le(ae,ne),onDragEnd:ce,onTouchStart:ae=>R(ae,ne),onTouchMove:oe,onTouchEnd:ie,"data-index":ne,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(Zi,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:N.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:N.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:ae=>{ae.stopPropagation(),_(N)},children:[t.jsx(Ct,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:ae=>{ae.stopPropagation(),F(N.id)},children:[t.jsx(Ot,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:ae=>{ae.stopPropagation(),A(N.id,N.show)},title:N.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${N.renew?"active":""}`,type:"button",onClick:ae=>{ae.stopPropagation(),S(N.id,N.renew)},title:N.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(Pi,{size:12,style:{marginRight:4}}),N.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:E(N.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[N.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[N.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Pt(N.month_price)})]}),N.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Pt(N.quarter_price)})]}),N.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Pt(N.half_year_price)})]}),N.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Pt(N.year_price)})]}),N.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Pt(N.two_year_price)})]}),N.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Pt(N.three_year_price)})]}),N.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Pt(N.onetime_price)})]}),N.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Pt(N.reset_price)})]})]})]},N.id)),!v&&r.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:O,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:N=>$("name",N.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:N=>$("content",N.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:N=>$("group_id",N.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),p.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:N=>$("transfer_enable",N.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:N=>$("device_limit",N.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:N=>$("speed_limit",N.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:N=>$("capacity_limit",N.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:N=>$("reset_traffic_method",N.target.value),children:M0(l).map(N=>t.jsx("option",{value:N.value,children:N.label},N.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:N=>$("month_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:N=>$("quarter_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:N=>$("half_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:N=>$("year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:N=>$("two_year_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:N=>$("three_year_price",N.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:N=>$("onetime_price",N.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:N=>$("reset_price",N.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:N=>$("force_update",String(N.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"plan.saving":"common.save")]})]})]})]})}):null]})}const Ic="Tương đối",ih={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},sh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function oh(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0");return`${r}/${d}/${p} ${h}:${m}`}function rh(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0"),j=String(l.getSeconds()).padStart(2,"0");return`${r}-${d}-${p} ${h}:${m}:${j}`}function ch(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function O0(){var Ut,M,Se,Re,Xe;const s=wt(),l=Gn(),{t:r}=qe(),d=f.useCallback(G=>{switch(G){case 0:return{label:r("order.statusPending"),cls:"status-pending"};case 1:return{label:r("order.statusProcessing"),cls:"status-processing"};case 2:return{label:r("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:r("order.statusCompleted"),cls:"status-completed"};case 4:return{label:r("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${G}`,cls:""}}},[r]),p=f.useCallback(G=>{const ye=`order.period.${G}`,ke=r(ye);return ke===ye?sh[G]??G:ke},[r]),[h,m]=f.useState([]),[j,v]=f.useState([]),[y,b]=f.useState(0),[g,L]=f.useState(1),[I]=f.useState(15),[W,J]=f.useState(""),[k,q]=f.useState("trade_no"),[V,D]=f.useState(!0),[X,le]=f.useState(null),[ce,R]=f.useState(!1),[oe,ie]=f.useState(""),[se,_]=f.useState(""),[O,A]=f.useState(null),[S,F]=f.useState(null),[E,$]=f.useState(!1),[N,ne]=f.useState(null),[ae,C]=f.useState(!1),[Z,de]=f.useState({}),fe=f.useCallback(G=>{F(null),A(ye=>ye===G?null:G)},[]),Ne=f.useCallback(G=>{A(null),F(ye=>ye===G?null:G)},[]);f.useEffect(()=>{if(!O&&!S)return;const G=()=>{A(null),F(null)},ye=ge=>{const He=ge.target;He!=null&&He.closest(".order-dropdown-trigger, .order-dropdown-menu")||G()},ke=ge=>{ge.key==="Escape"&&G()};return document.addEventListener("pointerdown",ye),document.addEventListener("keydown",ke),()=>{document.removeEventListener("pointerdown",ye),document.removeEventListener("keydown",ke)}},[O,S]),f.useEffect(()=>{const G=new Set;if(h.forEach(ke=>{ke.user_id&&!Z[ke.user_id]&&G.add(ke.user_id),ke.invite_user_id&&!Z[ke.invite_user_id]&&G.add(ke.invite_user_id)}),N&&(N.user_id&&!Z[N.user_id]&&G.add(N.user_id),N.invite_user_id&&!Z[N.invite_user_id]&&G.add(N.invite_user_id)),G.size===0)return;const ye=Array.from(G);Promise.allSettled(ye.map(async ke=>{try{const ge=await Zh(ke);if(ge&&ge.data)return{id:ke,email:ge.data.email,invite_user:ge.data.invite_user}}catch(ge){console.error(`Failed to fetch user ${ke}:`,ge)}return null})).then(ke=>{const ge={};ke.forEach(He=>{var Me;if(He.status==="fulfilled"&&He.value){const ct=He.value;ge[ct.id]={email:ct.email,invite_user_email:((Me=ct.invite_user)==null?void 0:Me.email)||null},ct.invite_user&&(ge[ct.invite_user.id]={email:ct.invite_user.email})}}),Object.keys(ge).length>0&&de(He=>({...He,...ge}))})},[h,N,Z]);const ve={0:{label:r("order.commissionPending"),dotClass:"pending"},1:{label:r("order.commissionApproved"),dotClass:"processing"},2:{label:r("order.commissionPaid"),dotClass:"completed"},3:{label:r("order.commissionCancelled"),dotClass:"cancelled"}},_e=f.useCallback(async(G=1,ye,ke)=>{var ge,He;D(!0),ie("");try{let Me;if(ye)if(ke==="email"){const va=(ge=(await xd(1,1,[{key:"email",condition:Ic,value:ye}])).data)==null?void 0:ge[0];if(!va){m([]),b(0),D(!1);return}Me=[{key:"user_id",condition:"=",value:String(va.id)}]}else if(ke==="invite_user_email"){const va=(He=(await xd(1,1,[{key:"email",condition:Ic,value:ye}])).data)==null?void 0:He[0];if(!va){m([]),b(0),D(!1);return}Me=[{key:"invite_user_id",condition:"=",value:String(va.id)}]}else Me=[{key:ke||"trade_no",condition:ke==="trade_no"||ke==="user_id"||ke==="invite_user_id"||ke==="plan_id"||ke==="status"?"=":Ic,value:ye}];const ct=await Yv({current:G,pageSize:I,filter:Me});m(ct.data),b(ct.total)}catch(Me){ie(Me instanceof Error?Me.message:r("order.loadFailed"))}finally{D(!1)}},[I,r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const G=new URLSearchParams(l.search),ye=G.get("filter_email"),ke=G.get("invite_user_email"),ge=G.get("user_id")||G.get("filter_user_id");let He="",Me="trade_no";ge?(He=ge,Me="user_id",q("user_id"),J(ge),$(!0)):ye?(He=ye,Me="email",q("email"),J(ye),$(!0)):ke&&(He=ke,Me="invite_user_email",q("invite_user_email"),J(ke),$(!0)),_e(1,He,Me),pl().then(v).catch(()=>{})},[_e,s,l.search]);function Pe(){L(1),_e(1,W,k)}function Fe(){J(""),L(1),_e(1)}function Et(G){L(G),_e(G,W,k)}async function Bt(G){var ye,ke;ie(""),_("");try{await Vv(G),(ye=window.showToast)==null||ye.call(window,r("order.paidSuccess"),"success"),await _e(g,W,k)}catch(ge){(ke=window.showToast)==null||ke.call(window,ge instanceof Error?ge.message:r("order.paidFailed"),"error")}}async function Rt(G){var ye,ke;ie(""),_("");try{await $v(G),(ye=window.showToast)==null||ye.call(window,r("order.cancelSuccess"),"success"),await _e(g,W,k)}catch(ge){(ke=window.showToast)==null||ke.call(window,ge instanceof Error?ge.message:r("order.cancelFailed"),"error")}}async function Jt(G,ye){var ke,ge;ie(""),_("");try{await Qv(G,ye),(ke=window.showToast)==null||ke.call(window,r("order.commissionSuccess"),"success"),await _e(g,W,k)}catch(He){(ge=window.showToast)==null||ge.call(window,He instanceof Error?He.message:r("order.commissionFailed"),"error")}}async function Ie(G){ne(G),C(!0);try{const ye=await Xv(G.id);ye&&ye.data&&ne(ye.data)}catch(ye){console.error("Failed to fetch order detail:",ye)}finally{C(!1)}}function Gt(){var G;le({email:"",plan_id:(G=j[0])!=null&&G.id?String(j[0].id):"",period:"month_price",total_amount:"0"}),ie(""),_("")}async function Yt(G){var ye,ke;if(G.preventDefault(),!!X){R(!0),ie(""),_("");try{await Xh({email:X.email,plan_id:Number(X.plan_id),period:X.period,total_amount:Number(X.total_amount)*100}),le(null),(ye=window.showToast)==null||ye.call(window,r("order.assignSuccess"),"success"),await _e(g,W,k)}catch(ge){(ke=window.showToast)==null||ke.call(window,ge instanceof Error?ge.message:r("order.assignFailed"),"error")}finally{R(!1)}}}const Mt=Math.ceil(y/I);return t.jsxs(At,{title:r("order.title"),subtitle:r("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${E?"active":""}`,type:"button",onClick:()=>$(!E),children:[t.jsx(Wi,{size:16}),r("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Gt,children:[t.jsx(ba,{size:16}),r("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void _e(g,W,k),disabled:V,children:[t.jsx(zt,{size:16}),r(V?"common.refreshing":"common.refresh")]})]}),E&&t.jsxs("div",{className:"filter-bar",style:{display:"flex",marginBottom:"16px",gap:"8px"},children:[t.jsxs("select",{className:"config-input filter-select",value:k,onChange:G=>q(G.target.value),children:[t.jsx("option",{value:"trade_no",children:r("order.tradeNo")}),t.jsx("option",{value:"email",children:r("order.email")}),t.jsx("option",{value:"status",children:r("order.status")}),t.jsx("option",{value:"plan_id",children:r("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:r("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:r("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:r("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",style:{flex:1},children:[t.jsx(To,{size:16}),t.jsx("input",{className:"config-input search-input",value:W,onChange:G=>J(G.target.value),placeholder:r("order.searchPlaceholder"),onKeyDown:G=>G.key==="Enter"&&Pe()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Pe,children:[t.jsx(Wi,{size:16}),r("order.filter")]}),W?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Fe,children:[t.jsx(ot,{size:16}),r("order.clearFilter")]}):null]}),oe?t.jsx("div",{className:"form-error",children:oe}):null,se?t.jsx("div",{className:"form-success",children:se}):null,V&&h.length===0?t.jsx(pt,{label:r("order.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("order.tradeNo")}),t.jsx("th",{children:r("order.id")}),t.jsx("th",{children:r("order.email")}),t.jsx("th",{children:r("order.type")}),t.jsx("th",{children:r("order.subscriptionPlan")}),t.jsx("th",{children:r("order.period")}),t.jsx("th",{children:r("order.amount")}),t.jsxs("th",{children:[r("order.orderStatus"),t.jsx("span",{className:"help-icon",title:"Order Payment Status",children:t.jsx(Yf,{size:14})})]}),t.jsx("th",{children:r("order.commissionAmount")}),t.jsxs("th",{children:[r("order.commissionStatus"),t.jsx("span",{className:"help-icon",title:"Referral Commission Status",children:t.jsx(Yf,{size:14})})]}),t.jsx("th",{children:r("order.created")})]})}),t.jsxs("tbody",{children:[h.map(G=>{var He;const ye=d(G.status),ke=G.invite_user_id!==null,ge=ve[G.commission_status]??{label:`#${G.commission_status}`,dotClass:"pending"};return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("span",{className:"trade-no-link",onClick:()=>Ie(G),title:"Click to view details",children:ch(G.trade_no)})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:G.id})}),t.jsx("td",{children:(He=Z[G.user_id])!=null&&He.email?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{q("user_id"),J(String(G.user_id)),$(!0),_e(1,String(G.user_id),"user_id")},title:"Filter by this user",children:Z[G.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})}),t.jsx("td",{children:ih[G.type]??`#${G.type}`}),t.jsx("td",{children:t.jsx("strong",{children:G.plan_name??`Plan #${G.plan_id}`})}),t.jsx("td",{children:t.jsx("span",{className:"period-capsule",children:p(G.period)})}),t.jsx("td",{children:t.jsxs("strong",{children:[qt(G.total_amount)," ₫"]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.cls.replace("status-","")}`}),t.jsx("span",{children:ye.label}),G.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Me=>{Me.stopPropagation(),fe(G.trade_no)},children:[r("order.markAs")," ",t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),O===G.trade_no&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onClick:Me=>Me.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Bt(G.trade_no)},children:[t.jsx(fo,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Rt(G.trade_no)},children:[t.jsx(cl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]}),t.jsx("td",{children:ke?t.jsxs("strong",{children:[qt(G.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})}),t.jsxs("td",{style:{position:"relative"},children:[ke?t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ge.dotClass}`}),t.jsx("span",{children:ge.label}),G.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Me=>{Me.stopPropagation(),Ne(G.trade_no)},children:[r("order.markAs")," ",t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),S===G.trade_no&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onClick:Me=>Me.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Jt(G.trade_no,1)},children:[t.jsx(fo,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Jt(G.trade_no,3)},children:[t.jsx(cl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]}),t.jsx("td",{children:oh(G.created_at)})]},G.trade_no)}),!V&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:r("order.empty")})})}):null]})]})}),Mt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:g<=1,onClick:()=>Et(g-1),children:t.jsx(rn,{size:16})}),t.jsxs("span",{className:"page-info",children:[g," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:g>=Mt,onClick:()=>Et(g+1),children:t.jsx(cn,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(G=>{var Me;const ye=d(G.status),ke=G.invite_user_id!==null,ge=ve[G.invite_user_id!==null?G.commission_status:0]??{label:`#${G.commission_status}`,dotClass:"pending"},He=(Me=Z[G.user_id])==null?void 0:Me.email;return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>Ie(G),children:ch(G.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",G.id]})]}),t.jsxs("div",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ye.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:ye.label}),G.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:ct=>{ct.stopPropagation(),fe(G.trade_no)},children:t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})})]}),O===G.trade_no&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",style:{right:0,top:"100%",position:"absolute"},onClick:ct=>ct.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Bt(G.trade_no)},children:[t.jsx(fo,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{A(null),Rt(G.trade_no)},children:[t.jsx(cl,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.email")}),t.jsx("span",{className:"value",children:He?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{q("user_id"),J(String(G.user_id)),$(!0),_e(1,String(G.user_id),"user_id")},children:He}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.type")}),t.jsx("span",{className:"value",children:ih[G.type]??`#${G.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:G.plan_name??`Plan #${G.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(G.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.amount")}),t.jsxs("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:[qt(G.total_amount)," ₫"]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionAmount")}),t.jsx("span",{className:"value",children:ke?t.jsxs("strong",{children:[qt(G.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),ke&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionStatus")}),t.jsxs("div",{className:"value",style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ge.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ge.label}),G.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:ct=>{ct.stopPropagation(),Ne(G.trade_no)},children:t.jsx(Il,{size:12,style:{display:"inline",strokeWidth:3}})})]}),S===G.trade_no&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",style:{right:0,top:"100%",position:"absolute"},onClick:ct=>ct.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Jt(G.trade_no,1)},children:[t.jsx(fo,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),Jt(G.trade_no,3)},children:[t.jsx(cl,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:oh(G.created_at)})]})]})]},G.trade_no)}),!V&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:r("order.empty")}):null,Mt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:g<=1,onClick:()=>Et(g-1),children:t.jsx(rn,{size:16})}),t.jsxs("span",{className:"page-info",children:[g," / ",Mt]}),t.jsx("button",{className:"mini-button",disabled:g>=Mt,onClick:()=>Et(g+1),children:t.jsx(cn,{size:16})})]}):null]}),N?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:r("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(null),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:ae?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(pt,{label:r("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("common.email")}),(Ut=Z[N.user_id])!=null&&Ut.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{q("user_id"),J(String(N.user_id)),$(!0),ne(null),_e(1,String(N.user_id),"user_id")},title:"Filter by this user",children:Z[N.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:N.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.periodLabel")}),t.jsx("span",{children:p(N.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.orderStatus")}),t.jsx("span",{children:d(N.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.planLabel")}),t.jsx("span",{children:N.plan_name??`Plan #${N.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.callbackLabel")}),t.jsx("span",{children:N.callback_no||"-"})]})]}),N.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:r("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.inviterEmail")}),(M=Z[N.invite_user_id])!=null&&M.email||(Se=Z[N.user_id])!=null&&Se.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const G=String(N.invite_user_id);q("invite_user_id"),J(G),$(!0),ne(null),_e(1,G,"invite_user_id")},title:"Filter by this inviter",children:((Re=Z[N.invite_user_id])==null?void 0:Re.email)||((Xe=Z[N.user_id])==null?void 0:Xe.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",N.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionAmount")}),t.jsxs("strong",{children:[qt(N.commission_balance??0)," ₫"]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(ve[N.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(ve[N.commission_status]??{label:`#${N.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.amount")}),t.jsx("span",{children:(Number(N.total_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.balanceLabel")}),t.jsx("span",{children:(Number(N.balance_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.discountLabel")}),t.jsx("span",{children:(Number(N.discount_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.refundLabel")}),t.jsx("span",{children:(Number(N.refund_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.surplusLabel")}),t.jsx("span",{children:(Number(N.surplus_amount??0)/100).toFixed(2)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.createdLabel")}),t.jsx("span",{children:rh(N.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.updatedLabel")}),t.jsx("span",{children:rh(N.updated_at)})]})]})]})})]})}):null,X?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("order.assign")}),t.jsx("p",{children:r("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>le(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Yt,children:[t.jsxs("label",{children:[t.jsx("span",{children:r("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:X.email,onChange:G=>le({...X,email:G.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:X.plan_id,onChange:G=>le({...X,plan_id:G.target.value}),children:j.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.period")}),t.jsx("select",{className:"config-input",value:X.period,onChange:G=>le({...X,period:G.target.value}),children:Object.entries(sh).map(([G,ye])=>t.jsx("option",{value:G,children:ye},G))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[r("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:X.total_amount,onChange:G=>le({...X,total_amount:G.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>le(null),children:r("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:ce,children:[t.jsx(ya,{size:16}),r(ce?"order.assigning":"order.assign")]})]})]})]})}):null]})}function go(s){return new Date(s*1e3).toLocaleString("vi-VN")}function bo(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function ed(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function A0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,g]=f.useState(null),[L,I]=f.useState(!0),[W,J]=f.useState(!1),[k,q]=f.useState(""),[V,D]=f.useState(""),[X,le]=f.useState("");f.useEffect(()=>{b||le("")},[b]);const ce=f.useCallback(async(_=1)=>{I(!0),q("");try{const O=await Zv(_,15);d(O.data),h(O.total)}catch(O){q(O instanceof Error?O.message:l("coupon.loadFailed"))}finally{I(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ce(1),pl().then(y).catch(()=>{})},[ce,s]);async function R(_){var O,A;if(_.preventDefault(),!!b){J(!0),q(""),D("");try{const S=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await Kv({id:b.id,name:b.name,type:Number(b.type),value:S,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,limit_use_with_user:b.limit_use_with_user?Number(b.limit_use_with_user):null,limit_plan_ids:b.limit_plan_ids.length?b.limit_plan_ids:null,limit_period:b.limit_period.length?b.limit_period:null,generate_count:b.generate_count?Number(b.generate_count):void 0}),g(null),(O=window.showToast)==null||O.call(window,l("coupon.saveSuccess"),"success"),await ce(m)}catch(S){(A=window.showToast)==null||A.call(window,S instanceof Error?S.message:l("coupon.saveFailed"),"error")}finally{J(!1)}}}async function oe(_){var O;try{await Fv(_),await ce(m)}catch(A){(O=window.showToast)==null||O.call(window,A instanceof Error?A.message:l("coupon.toggleFailed"),"error")}}async function ie(_){var O;(O=window.showConfirm)==null||O.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var A,S;try{await Jv(_),(A=window.showToast)==null||A.call(window,l("coupon.deleteSuccess"),"success"),await ce(m)}catch(F){(S=window.showToast)==null||S.call(window,F instanceof Error?F.message:l("coupon.deleteFailed"),"error")}}})}const se=Math.ceil(p/15);return t.jsxs(At,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[p," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void ce(m),disabled:L,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(ed()),children:[t.jsx(ba,{size:16}),l("coupon.add")]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,V?t.jsx("div",{className:"form-success",children:V}):null,L&&r.length===0?t.jsx(pt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(_=>{var F,E;const O=(F=_.limit_plan_ids)==null?void 0:F.map($=>{var N;return((N=v.find(ne=>ne.id===$))==null?void 0:N.name)||`#${$}`}).join(", "),A=bo(l),S=(E=_.limit_period)==null?void 0:E.map($=>A[$]||$).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?qt(_.value):`${_.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",_.limit_use??"∞"]}),_.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[O?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",O]})}):null,S?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",S]})}):null,!O&&!S?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void oe(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[go(_.started_at)," — ",go(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(ed(_)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(_.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},_.id)}),!L&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[r.map(_=>{var O,A,S,F;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:`tag type-tag ${_.type===1?"fixed-type":"percent-type"}`,children:_.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{dl(_.code).then(E=>{var $;($=window.showToast)==null||$.call(window,E?`${l("coupon.copiedCode")}: ${_.code}`:l("common.copyFailed"),E?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(O=_.limit_plan_ids)!=null&&O.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:_.limit_plan_ids.map(E=>{const $=v.find(N=>N.id===E);return t.jsx("span",{className:"res-pill plan-pill",children:$?$.name:`#${E}`},E)})})]}):null,(A=_.limit_period)!=null&&A.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:_.limit_period.map(E=>t.jsx("span",{className:"res-pill cycle-pill",children:bo(l)[E]||E},E))})]}):null,!((S=_.limit_plan_ids)!=null&&S.length)&&!((F=_.limit_period)!=null&&F.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[go(_.started_at)," — ",go(_.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:()=>void oe(_.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?qt(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"}),_.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",_.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(ed(_)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(_.id),"aria-label":l("common.delete"),children:t.jsx(Ot,{size:15})})]})]})]},_.id)}),!L&&r.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),se>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),ce(m-1)},children:t.jsx(rn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",se]}),t.jsx("button",{className:"mini-button",disabled:m>=se,onClick:()=>{j(m+1),ce(m+1)},children:t.jsx(cn,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:_=>g({...b,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:b.type,onChange:_=>g({...b,type:_.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:_=>g({...b,value:_.target.value})})]})]}),b.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:b.code,onChange:_=>g({...b,code:_.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:_=>g({...b,started_at:_.target.value}),onClick:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)},onFocus:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:_=>g({...b,ended_at:_.target.value}),onClick:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)},onFocus:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:_=>g({...b,limit_use:_.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use_with_user,onChange:_=>g({...b,limit_use_with_user:_.target.value}),placeholder:l("coupon.unlimited")})]})]}),b.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:_=>g({...b,generate_count:_.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),b.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_plan_ids.map(_=>{const O=v.find(A=>A.id===_);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const A=b.limit_plan_ids.filter(S=>S!==_);g({...b,limit_plan_ids:A})},children:[O?O.name:`#${_}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:X,onChange:_=>le(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(_=>_.name.toLowerCase().includes(X.toLowerCase())).map(_=>{const O=b.limit_plan_ids.includes(_.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:O,onChange:A=>{const S=A.target.checked?[...b.limit_plan_ids,_.id]:b.limit_plan_ids.filter(F=>F!==_.id);g({...b,limit_plan_ids:S})}}),t.jsx("span",{children:_.name})]},_.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),b.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_period.map(_=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const O=b.limit_period.filter(A=>A!==_);g({...b,limit_period:O})},children:[bo(l)[_]||_," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},_))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(bo(l)).map(([_,O])=>{const A=b.limit_period.includes(_);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:A,onChange:S=>{const F=S.target.checked?[...b.limit_period,_]:b.limit_period.filter(E=>E!==_);g({...b,limit_period:F})}}),t.jsx("span",{children:O})]},_)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function yo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function R0(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function td(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function U0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,g]=f.useState(null),[L,I]=f.useState(!0),[W,J]=f.useState(!1),[k,q]=f.useState(""),[V,D]=f.useState(""),[X,le]=f.useState("");f.useEffect(()=>{b||le("")},[b]);const ce=R0(l),R=f.useCallback(async(_=1)=>{I(!0),q("");try{const O=await Wv(_,15);d(O.data),h(O.total)}catch(O){q(O instanceof Error?O.message:l("giftcard.loadFailed"))}finally{I(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}R(1),pl().then(y).catch(()=>{})},[R,s]);async function oe(_){var O,A;if(_.preventDefault(),!!b){J(!0),q(""),D("");try{const S=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await Pv({id:b.id,name:b.name,type:Number(b.type),value:S,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,plan_id:b.plan_id?Number(b.plan_id):null,generate_count:b.generate_count?Number(b.generate_count):void 0}),g(null),(O=window.showToast)==null||O.call(window,l("giftcard.saveSuccess"),"success"),await R(m)}catch(S){(A=window.showToast)==null||A.call(window,S instanceof Error?S.message:l("giftcard.saveFailed"),"error")}finally{J(!1)}}}async function ie(_){var O;(O=window.showConfirm)==null||O.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var A,S;try{await Iv(_),(A=window.showToast)==null||A.call(window,l("giftcard.deleteSuccess"),"success"),await R(m)}catch(F){(S=window.showToast)==null||S.call(window,F instanceof Error?F.message:l("giftcard.deleteFailed"),"error")}}})}const se=Math.ceil(p/15);return t.jsxs(At,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[p," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void R(m),disabled:L,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(td()),children:[t.jsx(ba,{size:16}),l("giftcard.add")]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,V?t.jsx("div",{className:"form-success",children:V}):null,L&&r.length===0?t.jsx(pt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[r.map(_=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:_.id}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:_.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:ce[_.type]??_.type})}),t.jsx("td",{children:t.jsx("strong",{children:_.type===1?qt(_.value):_.value})}),t.jsx("td",{children:_.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((O=v.find(A=>A.id===_.plan_id))==null?void 0:O.name)||`#${_.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:_.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[yo(_.started_at)," — ",yo(_.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(td(_)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ie(_.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},_.id)}),!L&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[r.map(_=>{var O;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",_.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:ce[_.type]??_.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:_.name,children:_.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{dl(_.code).then(A=>{var S;(S=window.showToast)==null||S.call(window,A?l("giftcard.copiedCode").replace("{code}",_.code):l("common.copyFailed"),A?"success":"error")})},children:[t.jsx("code",{className:"mono",children:_.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:_.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((O=v.find(A=>A.id===_.plan_id))==null?void 0:O.name)||`#${_.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[yo(_.started_at)," — ",yo(_.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:_.type===1?qt(_.value).replace(/\s?₫/,""):`${_.value}`}),t.jsx("span",{className:"ticket-value-unit",children:_.type===1?"₫":ce[_.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:_.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(td(_)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ie(_.id),"aria-label":l("common.delete"),children:t.jsx(Ot,{size:15})})]})]})]},_.id)}),!L&&r.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),se>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),R(m-1)},children:t.jsx(rn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",se]}),t.jsx("button",{className:"mini-button",disabled:m>=se,onClick:()=>{j(m+1),R(m+1)},children:t.jsx(cn,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:oe,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:_=>g({...b,name:_.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:b.type,onChange:_=>g({...b,type:_.target.value}),children:Object.entries(ce).map(([_,O])=>t.jsx("option",{value:_,children:O},_))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:_=>g({...b,value:_.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:_=>g({...b,started_at:_.target.value}),onClick:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)},onFocus:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:_=>g({...b,ended_at:_.target.value}),onClick:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)},onFocus:_=>{var O,A;return(A=(O=_.currentTarget).showPicker)==null?void 0:A.call(O)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:_=>g({...b,limit_use:_.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),b.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:_=>g({...b,generate_count:_.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),b.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const _=v.find(O=>String(O.id)===b.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{g({...b,plan_id:""})},children:[_?_.name:`#${b.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:X,onChange:_=>le(_.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!b.plan_id,onChange:()=>{g({...b,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),v.filter(_=>_.name.toLowerCase().includes(X.toLowerCase())).map(_=>{const O=String(_.id)===b.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:O,onChange:A=>{A.target.checked&&g({...b,plan_id:String(_.id)})}}),t.jsx("span",{children:_.name})]},_.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(ya,{size:16}),l(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const H0="Tương đối";function vo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function L0(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function dh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function ad(s){return+(s/1073741824).toFixed(2)}function nd(s){return Math.round(s*1073741824)}function jo(s){return(s/1073741824).toFixed(2)}function q0(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function Pl(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const bd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],ex="user_visible_columns";function B0(){if(typeof window<"u")try{const s=localStorage.getItem(ex);if(s)return new Set(JSON.parse(s))}catch{}return new Set(bd.filter(s=>s.defaultVisible).map(s=>s.key))}const G0=[{value:"email",label:"Email"},{value:"id",label:"User ID"},{value:"plan_id",label:"Plan ID"},{value:"invite_by_email",label:"Inviter Email"},{value:"invite_user_id",label:"Inviter ID"},{value:"remarks",label:"Remarks"}],Y0=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Kt(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function V0(s,l){switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"remarks":return l("user.filterRemarks");default:return""}}function $0(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function Q0(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(0),[b,g]=f.useState(1),[L,I]=f.useState(""),[W,J]=f.useState("email"),[k,q]=f.useState(!0),[V,D]=f.useState(""),[X,le]=f.useState(B0),[ce,R]=f.useState(!1),oe=f.useRef(null),[ie,se]=f.useState(null),_=f.useRef(null),[O,A]=f.useState(null),[S,F]=f.useState({}),[E,$]=f.useState(!1),[N,ne]=f.useState(!1),[ae,C]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[Z,de]=f.useState(!1),[fe,Ne]=f.useState(null),[ve,_e]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[Pe,Fe]=f.useState(!1),[Et,Bt]=f.useState(null),[Rt,Jt]=f.useState(null),[Ie,Gt]=f.useState([]),[Yt,Mt]=f.useState(0),[Ut,M]=f.useState(1),[Se]=f.useState(10),[Re,Xe]=f.useState(!1),[G,ye]=f.useState("");f.useEffect(()=>{function w(he){ie!==null&&_.current&&!_.current.contains(he.target)&&se(null),ce&&oe.current&&!oe.current.contains(he.target)&&R(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[ie,ce]);function ke(w){le(he=>{const xe=new Set(he);xe.has(w)?xe.delete(w):xe.add(w);try{localStorage.setItem(ex,JSON.stringify([...xe]))}catch{}return xe})}const ge=w=>X.has(w),He=bd.filter(w=>X.has(w.key)).length,Me=f.useCallback(async(w=1,he,xe)=>{q(!0),D("");try{const aa=await xd(w,15,he?[{key:xe||"email",condition:xe==="id"||xe==="plan_id"||xe==="invite_user_id"?"=":H0,value:he}]:void 0);d(aa.data),y(aa.total)}catch(Be){D(Be instanceof Error?Be.message:l("user.loadFailed"))}finally{q(!1)}},[]),ct=f.useCallback(async()=>{try{const[w,he]=await Promise.all([pl(),Ii()]);h(w),j(he)}catch{}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}Me(1),ct()},[Me,ct,s]);function Ga(){g(1),Me(1,L,W)}function va(){I(""),g(1),Me(1)}function dn(w){g(w),Me(w,L,W)}function Ma(w){if(w.plan_name)return w.plan_name;if(!w.plan_id)return"—";const he=p.find(xe=>xe.id===w.plan_id);return he?he.name:`#${w.plan_id}`}function xt(w){if(!w.group_id)return"—";const he=m.find(xe=>xe.id===w.group_id);return he?he.name:`#${w.group_id}`}function It(w){return`${w.alive_ip??0} / ${w.device_limit??"∞"}`}async function U(w){var Be,aa;const he=w.subscribe_url;if(!he){(Be=window.showToast)==null||Be.call(window,l("user.toastNoSubscribeUrl"),"error");return}const xe=await dl(he);(aa=window.showToast)==null||aa.call(window,l(xe?"user.toastUrlCopied":"common.copyFailed"),xe?"success":"error"),se(null)}function re(w){var he;se(null),(he=window.showConfirm)==null||he.call(window,{message:l("user.confirmResetSecret"),onConfirm:async()=>{var xe,Be;try{await n1(w.id),(xe=window.showToast)==null||xe.call(window,l("user.toastSecretResetSuccess"),"success"),await Me(b,L,W)}catch(aa){(Be=window.showToast)==null||Be.call(window,aa instanceof Error?aa.message:l("user.toastSecretResetFailed"),"error")}}})}function pe(w){var he;se(null),(he=window.showConfirm)==null||he.call(window,{message:l("user.confirmDelete"),onConfirm:async()=>{var xe,Be;try{await t1(w.id),(xe=window.showToast)==null||xe.call(window,l("user.toastDeletedSuccess"),"success"),await Me(b,L,W)}catch(aa){(Be=window.showToast)==null||Be.call(window,aa instanceof Error?aa.message:l("user.toastDeletedFailed"),"error")}}})}function Ue(w){var xe;se(null);const he=w.subscribe_url;if(!he){(xe=window.showToast)==null||xe.call(window,l("user.toastNoSubscribeUrl"),"error");return}Bt({url:he,userId:w.id})}function Ee(w){se(null),s.push(`/order?user_id=${w.id}`)}function et(w){se(null),s.push(`/subscription?user_id=${w.id}`)}function tt(w){se(null),J("invite_user_id"),I(String(w.id)),Me(1,String(w.id),"invite_user_id")}async function Le(w,he){Xe(!0),ye("");try{const xe=await r1(w,he,Se);Gt(xe.data||[]),Mt(xe.total||0),M(he)}catch(xe){ye(xe instanceof Error?xe.message:l("user.historyLoading"))}finally{Xe(!1)}}function ta(w){se(null),Jt(w),Le(w.id,1)}function Ft(w){se(null),Ne(w.email),_e({plan_id:"",period:"month_price",total_amount:""})}async function Yn(w){var he,xe;if(w.preventDefault(),!!fe){Fe(!0);try{await Xh({email:fe,plan_id:Number(ve.plan_id),period:ve.period,total_amount:(Number(ve.total_amount)||0)*100}),(he=window.showToast)==null||he.call(window,l("user.toastAssignSuccess"),"success"),Ne(null)}catch(Be){(xe=window.showToast)==null||xe.call(window,Be instanceof Error?Be.message:l("user.toastAssignFailed"),"error")}finally{Fe(!1)}}}function Vn(w){se(null),A(w),F({id:w.id,email:w.email,invite_user_email:"",password:"",balance:w.balance,commission_balance:w.commission_balance,u:ad(w.u),d:ad(w.d),transfer_enable:ad(w.transfer_enable),device_limit:w.device_limit,network_settings:w.network_settings??"",expired_at:L0(w.expired_at),plan_id:w.plan_id,banned:w.banned,commission_type:w.commission_type??0,commission_rate:w.commission_rate??"",discount:w.discount??"",speed_limit:w.speed_limit,is_admin:w.is_admin,is_staff:w.is_staff,remarks:w.remarks??""})}function mt(w,he){F(xe=>({...xe,[w]:he}))}async function $n(w){var he,xe;if(w.preventDefault(),!!O){$(!0);try{const Be={id:O.id,email:S.email,plan_id:S.plan_id||null,expired_at:dh(String(S.expired_at??"")),transfer_enable:nd(Number(S.transfer_enable??0)),speed_limit:S.speed_limit||null,device_limit:S.device_limit||null,u:nd(Number(S.u??0)),d:nd(Number(S.d??0)),balance:Number(S.balance??0),commission_balance:Number(S.commission_balance??0),commission_rate:S.commission_rate!==""&&S.commission_rate!==null?Number(S.commission_rate):null,commission_type:Number(S.commission_type??0),discount:S.discount!==""&&S.discount!==null?Number(S.discount):null,network_settings:S.network_settings||null,remarks:S.remarks||null,is_admin:Number(S.is_admin??0),is_staff:Number(S.is_staff??0),banned:Number(S.banned??0)};S.invite_user_email&&(Be.invite_user_email=S.invite_user_email),S.password&&(Be.password=S.password),await e1(Be),(he=window.showToast)==null||he.call(window,l("user.toastSaveSuccess"),"success"),A(null),await Me(b,L,W)}catch(Be){(xe=window.showToast)==null||xe.call(window,Be instanceof Error?Be.message:l("user.toastSaveFailed"),"error")}finally{$(!1)}}}async function Mo(w){var he,xe;w.preventDefault(),de(!0);try{await a1({email_prefix:ae.email_prefix,email_suffix:ae.email_suffix,password:ae.password||void 0,plan_id:ae.plan_id?Number(ae.plan_id):void 0,expired_at:dh(ae.expired_at)}),(he=window.showToast)==null||he.call(window,l("user.toastCreateSuccess"),"success"),ne(!1),C({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Me(b,L,W)}catch(Be){(xe=window.showToast)==null||xe.call(window,Be instanceof Error?Be.message:l("user.toastCreateFailed"),"error")}finally{de(!1)}}const Da=Math.ceil(v/15);return t.jsxs(At,{title:l("user.title"),subtitle:l("user.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("user.heading")}),t.jsxs("p",{children:[v," ",l("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:oe,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>R(!ce),children:[t.jsx(Ly,{size:16}),l("user.columns")]}),ce?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:l("user.visibleColumns",{count:He})})}),bd.map(w=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:X.has(w.key),onChange:()=>ke(w.key)}),t.jsx("span",{children:Kt(w.key,l)})]},w.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Me(b,L,W),disabled:k,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ne(!0),children:[t.jsx(ba,{size:16}),l("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:W,onChange:w=>J(w.target.value),children:G0.map(w=>t.jsx("option",{value:w.value,children:V0(w.value,l)},w.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(To,{size:16}),t.jsx("input",{className:"config-input search-input",value:L,onChange:w=>I(w.target.value),placeholder:l("user.searchPlaceholder"),onKeyDown:w=>w.key==="Enter"&&Ga()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ga,children:[t.jsx(Wi,{size:16}),l("user.filter")]}),L?t.jsxs("button",{className:"ghost-button",type:"button",onClick:va,children:[t.jsx(ot,{size:16}),l("user.clearFilter")]}):null]}),V?t.jsx("div",{className:"form-error",children:V}):null,k&&r.length===0?t.jsx(pt,{label:l("user.loading")}):null,t.jsxs("div",{className:"mobile-user-list",children:[r.map(w=>{const he=jo(w.u+w.d),xe=jo(w.transfer_enable),Be=parseFloat(he);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",w.id]}),t.jsx("span",{className:"user-email",title:w.email,children:w.email})]}),w.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ma(w)," / ",w.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):xt(w)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Be>0?Be>parseFloat(xe)*.9?"high":"ok":""}`,children:[he," GB"]})," / ",xe," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Kt("devices",l)}),t.jsx("span",{className:"info-val",children:It(w)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Kt("expires",l)}),t.jsx("span",{className:"info-val",children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:vo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(w.balance/100).toFixed(2)," ₫ / ",(w.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Kt("joined",l)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:vo(w.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${ie===w.id?"active":""}`,ref:ie===w.id?_:void 0,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>se(ie===w.id?null:w.id),children:[l("user.colActions")," ",t.jsx(Il,{size:14})]}),ie===w.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>Vn(w),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ft(w),children:[t.jsx(Xf,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void U(w),children:[t.jsx(Ba,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(w),children:[t.jsx($f,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>re(w),children:[t.jsx(So,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(w),children:[t.jsx(Vf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>et(w),children:[t.jsx(pd,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>tt(w),children:[t.jsx(Pi,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>ta(w),children:[t.jsx(Kc,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>pe(w),children:[t.jsx(Ot,{size:14}),l("user.actionDelete")]})]}):null]})})]},w.id)}),!k&&r.length===0?t.jsx("div",{className:"empty-state",children:l("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ge("id")&&t.jsx("th",{children:Kt("id",l)}),ge("email")&&t.jsx("th",{children:Kt("email",l)}),ge("status")&&t.jsx("th",{children:Kt("status",l)}),ge("plan")&&t.jsx("th",{children:Kt("plan",l)}),ge("group")&&t.jsx("th",{children:Kt("group",l)}),ge("used")&&t.jsx("th",{children:Kt("used",l)}),ge("traffic")&&t.jsx("th",{children:Kt("traffic",l)}),ge("devices")&&t.jsx("th",{children:Kt("devices",l)}),ge("expires")&&t.jsx("th",{children:Kt("expires",l)}),ge("balance")&&t.jsx("th",{children:Kt("balance",l)}),ge("commission")&&t.jsx("th",{children:Kt("commission",l)}),ge("joined")&&t.jsx("th",{children:Kt("joined",l)}),ge("actions")&&t.jsx("th",{children:Kt("actions",l)})]})}),t.jsxs("tbody",{children:[r.map(w=>{const he=jo(w.u+w.d),xe=jo(w.transfer_enable),Be=parseFloat(he);return t.jsxs("tr",{children:[ge("id")&&t.jsx("td",{children:w.id}),ge("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:w.email})}),ge("status")&&t.jsx("td",{children:w.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})}),ge("plan")&&t.jsx("td",{children:Ma(w)}),ge("group")&&t.jsx("td",{children:w.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):xt(w)}),ge("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Be>0?Be>parseFloat(xe)*.9?"high":"ok":""}`,children:he})}),ge("traffic")&&t.jsx("td",{children:xe}),ge("devices")&&t.jsx("td",{children:It(w)}),ge("expires")&&t.jsx("td",{children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:vo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ge("balance")&&t.jsx("td",{children:(w.balance/100).toFixed(2)}),ge("commission")&&t.jsx("td",{children:(w.commission_balance/100).toFixed(2)}),ge("joined")&&t.jsx("td",{children:t.jsx("small",{children:vo(w.created_at)})}),ge("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${ie===w.id?"active":""}`,ref:ie===w.id?_:void 0,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>se(ie===w.id?null:w.id),children:[l("user.colActions")," ",t.jsx(Il,{size:14})]}),ie===w.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>Vn(w),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>Ft(w),children:[t.jsx(Xf,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void U(w),children:[t.jsx(Ba,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(w),children:[t.jsx($f,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>re(w),children:[t.jsx(So,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ee(w),children:[t.jsx(Vf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>et(w),children:[t.jsx(pd,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>tt(w),children:[t.jsx(Pi,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>ta(w),children:[t.jsx(Kc,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>pe(w),children:[t.jsx(Ot,{size:14}),l("user.actionDelete")]})]}):null]})})]},w.id)}),!k&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:He,children:t.jsx("div",{className:"empty-state",children:l("user.noUsers")})})}):null]})]})})}),Da>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:b<=1,onClick:()=>dn(b-1),children:t.jsx(rn,{size:16})}),Array.from({length:Math.min(5,Da)},(w,he)=>{let xe;return Da<=5||b<=3?xe=he+1:b>=Da-2?xe=Da-4+he:xe=b-2+he,t.jsx("button",{className:`mini-button ${xe===b?"active-page":""}`,onClick:()=>dn(xe),children:xe},xe)}),Da>5?t.jsxs("span",{className:"page-info",children:["… ",Da]}):null,t.jsx("button",{className:"mini-button",disabled:b>=Da,onClick:()=>dn(b+1),children:t.jsx(cn,{size:16})})]})}):null,O?t.jsx("div",{className:"modal-backdrop",onClick:()=>A(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>A(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:$n,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(S.email??""),onChange:w=>mt("email",w.target.value)})]}),t.jsxs("label",{className:"field-label",children:[l("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(S.invite_user_email??""),onChange:w=>mt("invite_user_email",w.target.value),placeholder:l("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(S.password??""),onChange:w=>mt("password",w.target.value),placeholder:l("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(S.balance??0)/100).toFixed(2)),onChange:w=>mt("balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(S.commission_balance??0)/100).toFixed(2)),onChange:w=>mt("commission_balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(S.u??0),onChange:w=>mt("u",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(S.d??0),onChange:w=>mt("d",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(S.transfer_enable??0),onChange:w=>mt("transfer_enable",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(S.device_limit??""),onChange:w=>mt("device_limit",w.target.value?Number(w.target.value):null),placeholder:l("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(S.network_settings??""),onChange:w=>mt("network_settings",w.target.value),placeholder:l("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(S.expired_at??""),onChange:w=>mt("expired_at",w.target.value),onClick:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:String(S.plan_id??""),onChange:w=>mt("plan_id",w.target.value?Number(w.target.value):null),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(S.banned??0),onChange:w=>mt("banned",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:l("user.cardActive")}),t.jsx("option",{value:"1",children:l("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(S.commission_type??0),onChange:w=>mt("commission_type",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:l("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:l("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:l("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(S.commission_rate??""),onChange:w=>mt("commission_rate",w.target.value),placeholder:l("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(S.discount??""),onChange:w=>mt("discount",w.target.value),placeholder:l("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(S.speed_limit??""),onChange:w=>mt("speed_limit",w.target.value?Number(w.target.value):null),placeholder:l("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${S.is_admin?"active":""}`,onClick:()=>mt("is_admin",S.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${S.is_staff?"active":""}`,onClick:()=>mt("is_staff",S.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[l("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(S.remarks??""),onChange:w=>mt("remarks",w.target.value),placeholder:l("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>A(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:E,children:l(E?"common.processing":"common.save")})]})]})]})}):null,N?t.jsx("div",{className:"modal-backdrop",onClick:()=>ne(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ne(!1),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Mo,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:ae.email_prefix,onChange:w=>C({...ae,email_prefix:w.target.value}),placeholder:l("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:ae.email_suffix,onChange:w=>C({...ae,email_suffix:w.target.value}),placeholder:l("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:ae.password,onChange:w=>C({...ae,password:w.target.value}),placeholder:l("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:ae.plan_id,onChange:w=>C({...ae,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:ae.expired_at,onChange:w=>C({...ae,expired_at:w.target.value}),onClick:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ne(!1),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Z,children:l(Z?"user.creating":"user.createUser")})]})]})]})}):null,fe?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ne(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ne(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Yn,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:fe})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:ve.plan_id,onChange:w=>_e({...ve,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:l("user.assignPlanSelect")}),p.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:ve.period,onChange:w=>_e({...ve,period:w.target.value}),children:Y0.map(w=>t.jsx("option",{value:w.value,children:$0(w.value,l)},w.value))})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ve.total_amount,onChange:w=>_e({...ve,total_amount:w.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Ne(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Pe,children:l(Pe?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Et?t.jsx("div",{className:"modal-backdrop",onClick:()=>Bt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Bt(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Et.url)}`,alt:l("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:l("user.qrCodeUserId",{userId:Et.userId})})]})]})}):null,Rt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Jt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:l("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:l("user.dataHistorySub",{email:Rt.email,id:Rt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Jt(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[G?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:G}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:l("user.historyTotalDays",{count:Yt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Ie.reduce((w,he)=>w+he.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Ie.reduce((w,he)=>w+he.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:Pl(Ie.reduce((w,he)=>w+he.u+he.d,0))})]})]}),Re?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(pt,{label:l("user.historyLoading")})}):Ie.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(Kc,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:l("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:l("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("user.historyColDate")}),t.jsx("th",{children:l("user.historyColRate")}),t.jsx("th",{children:l("user.historyColUpload")}),t.jsx("th",{children:l("user.historyColDownload")}),t.jsx("th",{children:l("user.historyColTotal")})]})}),t.jsx("tbody",{children:Ie.map(w=>{const he=Pl(w.u),xe=Pl(w.d),Be=Pl(w.u+w.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:q0(w.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(w.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{color:"var(--muted)"},children:xe}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Be})]},w.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:l("user.historyShowingLogs",{start:Math.min((Ut-1)*Se+1,Yt),end:Math.min(Ut*Se,Yt),total:Yt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:Ut<=1,onClick:()=>Le(Rt.id,Ut-1),children:[t.jsx(rn,{size:16}),l("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Ut*Se>=Yt,onClick:()=>Le(Rt.id,Ut+1),children:[l("user.historyNext"),t.jsx(cn,{size:16})]})]})]})]})]})]})}):null]})}const uh=15,ph=20,X0=["email","id","user_id","plan_id","status"];function Rn(s,l){return s?new Date(s*1e3).toLocaleString():l}function Z0(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function K0(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function rl(s){return+(s/1073741824).toFixed(2)}function ld(s){return Math.round((Number(s)||0)*1073741824)}function J0(s){return s==="email"?"like":"="}function F0(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function mh(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function fh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function hh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function W0(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function P0(){const s=wt(),l=Gn(),{t:r}=qe(),[d,p]=f.useState([]),[h,m]=f.useState(0),[j,v]=f.useState(1),[y,b]=f.useState("email"),[g,L]=f.useState(""),[I,W]=f.useState(!0),[J,k]=f.useState(""),[q,V]=f.useState(null),[D,X]=f.useState({}),[le,ce]=f.useState(null),[R,oe]=f.useState(null),[ie,se]=f.useState([]),[_,O]=f.useState(0),[A,S]=f.useState(1),[F,E]=f.useState(!1),[$,N]=f.useState(""),ne=f.useCallback(async(M=1,Se="",Re="email")=>{W(!0),k("");try{const Xe=Se.trim()?[{key:Re,condition:J0(Re),value:Se.trim()}]:void 0,G=await l1(M,uh,Xe);p(G.data),m(G.total),v(M)}catch(Xe){k(Xe instanceof Error?Xe.message:r("subscription.loadFailed"))}finally{W(!1)}},[r]),ae=f.useCallback(async(M,Se=1)=>{E(!0),N("");try{const Re=await Kh(Se,ph,[{key:"subscription_id",condition:"=",value:String(M.id)}]);se(Re.data),O(Re.total),S(Se)}catch(Re){N(Re instanceof Error?Re.message:r("subscription.slotsLoadFailed"))}finally{E(!1)}},[r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const M=new URLSearchParams(l.search),Re=[["user_id",M.get("user_id")],["id",M.get("id")],["plan_id",M.get("plan_id")],["email",M.get("email")],["status",M.get("status")]].find(([,Xe])=>Xe&&Xe.trim());if(Re){const[Xe,G]=Re,ye=G??"";b(Xe),L(ye),ne(1,ye,Xe);return}ne()},[ne,l.search,s]);function C(M){M.preventDefault(),ne(1,g,y)}function Z(){if(L(""),l.search){s.replace("/subscription");return}ne(1,"",y)}function de(M){V(M),X({transfer_enable:String(rl(M.transfer_enable)),u:String(rl(M.u)),d:String(rl(M.d)),device_limit:M.device_limit===null?"":String(M.device_limit),speed_limit:M.speed_limit===null?"":String(M.speed_limit),expired_at:Z0(M.expired_at),status:M.status,auto_renewal:String(M.auto_renewal||0),remarks:M.remarks??""})}async function fe(M){var Se,Re;if(M.preventDefault(),!!q){ce(q.id);try{await i1({id:q.id,transfer_enable:ld(D.transfer_enable),u:ld(D.u),d:ld(D.d),device_limit:D.device_limit===""?null:Number(D.device_limit),speed_limit:D.speed_limit===""?null:Number(D.speed_limit),expired_at:K0(D.expired_at),status:D.status,auto_renewal:Number(D.auto_renewal),remarks:D.remarks}),V(null),(Se=window.showToast)==null||Se.call(window,r("subscription.updateSuccess"),"success"),await ne(j,g,y)}catch(Xe){(Re=window.showToast)==null||Re.call(window,Xe instanceof Error?Xe.message:r("subscription.saveFailed"),"error")}finally{ce(null)}}}function Ne(M){var Se;(Se=window.showConfirm)==null||Se.call(window,{message:r("subscription.resetConfirm",{id:M.id}),onConfirm:async()=>{var Re,Xe;ce(M.id);try{await s1(M.id),(Re=window.showToast)==null||Re.call(window,r("subscription.resetSuccess"),"success"),await ne(j,g,y)}catch(G){(Xe=window.showToast)==null||Xe.call(window,G instanceof Error?G.message:r("subscription.resetFailed"),"error")}finally{ce(null)}}})}async function ve(M){var Re;if(!M)return;const Se=await dl(M);(Re=window.showToast)==null||Re.call(window,r(Se?"subscription.copySuccess":"common.copyFailed"),Se?"success":"error")}function _e(M){oe(M),se([]),O(0),S(1),ae(M,1)}function Pe(M=A){return R?ae(R,M):Promise.resolve()}function Fe(M){var Se;(Se=window.showConfirm)==null||Se.call(window,{message:r("subscription.unbindConfirm"),onConfirm:async()=>{var Re,Xe;ce(M.id);try{await Jh(M.id),(Re=window.showToast)==null||Re.call(window,r("subscription.unbindSuccess"),"success"),await Promise.all([Pe(),ne(j,g,y)])}catch(G){(Xe=window.showToast)==null||Xe.call(window,G instanceof Error?G.message:r("subscription.unbindFailed"),"error")}finally{ce(null)}}})}function Et(M){var Se;(Se=window.showConfirm)==null||Se.call(window,{message:r("subscription.banConfirm"),onConfirm:async()=>{var Re,Xe;ce(M.id);try{await Fh(M.id),(Re=window.showToast)==null||Re.call(window,r("subscription.banSuccess"),"success"),await Promise.all([Pe(),ne(j,g,y)])}catch(G){(Xe=window.showToast)==null||Xe.call(window,G instanceof Error?G.message:r("subscription.banFailed"),"error")}finally{ce(null)}}})}function Bt(M){const Se=M.device_limit&&M.device_limit>0?String(M.device_limit):r("subscription.unlimited"),Re=!!(M.device_count||M.device_limit&&M.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:M.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:Se})]}),M.device_limit&&M.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(M.device_count/M.device_limit*100))}%`}})}):t.jsx("small",{children:r("subscription.noDeviceLimit")}),Re?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>_e(M),children:[t.jsx(pd,{size:14}),t.jsx("span",{children:r("subscription.manageUuids")})]}):null]})}function Rt(M){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[rl(M.total_used)," / ",rl(M.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${W0(M)}%`}})}),t.jsx("small",{children:r("subscription.uploadDownload",{upload:rl(M.u),download:rl(M.d)})})]})}function Jt(M){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>ve(M.uuid),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]}),t.jsx("small",{children:r("subscription.primaryUuid")})]})}function Ie(M){return t.jsxs("div",{className:"subscription-link-stack",children:[Jt(M),M.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.subscribe_url,onClick:()=>ve(M.subscribe_url),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.subscribe_url})]}),t.jsx("small",{children:r("subscription.colSubscribeUrl")})]}):null]})}function Gt(M){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>de(M),children:[t.jsx(Ct,{size:14}),r("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:le===M.id,onClick:()=>Ne(M),children:[t.jsx(So,{size:14}),r("subscription.resetSecret")]})]})}const Yt=Math.ceil(h/uh),Mt=Math.ceil(_/ph),Ut=Yt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:j<=1||I,onClick:()=>void ne(j-1,g,y),children:[t.jsx(rn,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:j,total:Yt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:j>=Yt||I,onClick:()=>void ne(j+1,g,y),children:[r("common.next"),t.jsx(cn,{size:14})]})]}):null;return t.jsxs(At,{title:r("subscription.title"),subtitle:r("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.heading")}),t.jsx("p",{children:r("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:I,onClick:()=>void ne(j,g,y),children:[t.jsx(zt,{size:16}),r(I?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:C,children:[t.jsx("select",{className:"config-input filter-select",value:y,onChange:M=>b(M.target.value),children:X0.map(M=>t.jsx("option",{value:M,children:F0(M,r)},M))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(To,{size:16}),t.jsx("input",{className:"config-input",value:g,onChange:M=>L(M.target.value),placeholder:r("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(Wi,{size:16}),r("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Z,children:r("common.clearFilter")})]}),J?t.jsx("div",{className:"form-error",children:J}):null,I&&d.length===0?t.jsx(pt,{label:r("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[r("subscription.colUser")," / ",r("subscription.colPlan")]}),t.jsx("th",{children:r("subscription.colStatus")}),t.jsx("th",{children:r("subscription.colTraffic")}),t.jsx("th",{children:r("subscription.colDevices")}),t.jsx("th",{children:r("subscription.colExpires")}),t.jsxs("th",{children:[r("subscription.colPrimaryUuid")," / ",r("subscription.colSubscribeUrl")]}),t.jsx("th",{children:r("subscription.colUpdated")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",M.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:M.plan_name??"-"}),t.jsx("strong",{className:"subscription-email",children:M.user_email??"-"}),t.jsxs("small",{children:[r("subscription.userId",{id:M.user_id}),M.plan_id?` - ${r("subscription.planId",{id:M.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:mh(M.status,r)})}),t.jsx("td",{children:Rt(M)}),t.jsx("td",{children:Bt(M)}),t.jsx("td",{children:Rn(M.expired_at,r("subscription.never"))}),t.jsx("td",{children:Ie(M)}),t.jsx("td",{children:Rn(M.updated_at,r("subscription.never"))}),t.jsx("td",{children:Gt(M)})]},M.id)),!I&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(M=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",M.id]}),t.jsx("strong",{className:"subscription-plan-name",children:M.plan_name??"-"}),t.jsx("small",{children:M.user_email??r("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:mh(M.status,r)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colTraffic")}),Rt(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colDevices")}),Bt(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colExpires")}),t.jsx("strong",{children:Rn(M.expired_at,r("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colUpdated")}),t.jsx("strong",{children:Rn(M.updated_at,r("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:Ie(M)}),Gt(M)]},M.id)),!I&&d.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.empty")}):null]}),Ut,R?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>oe(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.slotsTitle",{id:R.id})}),t.jsx("p",{children:R.user_email??r("subscription.userId",{id:R.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>oe(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[$?t.jsx("div",{className:"form-error",children:$}):null,F&&ie.length===0?t.jsx(pt,{label:r("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("subscription.slotUuid")}),t.jsx("th",{children:r("subscription.slotStatus")}),t.jsx("th",{children:r("subscription.slotHwid")}),t.jsx("th",{children:r("subscription.slotClient")}),t.jsx("th",{children:r("subscription.slotIp")}),t.jsx("th",{children:r("subscription.slotFirstSeen")}),t.jsx("th",{children:r("subscription.slotLastSeen")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[ie.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>ve(M.uuid),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${hh(M.status)}`,children:fh(M.status,r)})}),t.jsx("td",{children:M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>ve(M.hwid),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?r("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsx("td",{children:Rn(M.first_seen_at,"-")}),t.jsx("td",{children:Rn(M.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===M.id,onClick:()=>Fe(M),children:[t.jsx(fd,{size:14}),r("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===M.id,onClick:()=>Et(M),children:[t.jsx(cl,{size:14}),r("subscription.ban")]}):null]})})]},M.id)),!F&&ie.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ie.map(M=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:r("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${hh(M.status)}`,children:fh(M.status,r)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>ve(M.uuid),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotHwid")}),M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>ve(M.hwid),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotIp")}),t.jsx("span",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?r("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotClient")}),t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotFirstSeen")}),t.jsx("span",{children:Rn(M.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotLastSeen")}),t.jsx("span",{children:Rn(M.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===M.id,onClick:()=>Fe(M),children:[t.jsx(fd,{size:14}),r("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:le===M.id,onClick:()=>Et(M),children:[t.jsx(cl,{size:14}),r("subscription.ban")]}):null]})]},M.id)),!F&&ie.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")}):null]}),Mt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:A<=1||F,onClick:()=>void Pe(A-1),children:[t.jsx(rn,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:A,total:Mt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:A>=Mt||F,onClick:()=>void Pe(A+1),children:[r("common.next"),t.jsx(cn,{size:14})]})]}):null]})]})}):null,q?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>V(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.editTitle",{id:q.id})}),t.jsx("p",{children:q.user_email??r("subscription.userId",{id:q.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>V(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:fe,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[r("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.transfer_enable,onChange:M=>X(Se=>({...Se,transfer_enable:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.u,onChange:M=>X(Se=>({...Se,u:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:D.d,onChange:M=>X(Se=>({...Se,d:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:D.device_limit,onChange:M=>X(Se=>({...Se,device_limit:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:D.speed_limit,onChange:M=>X(Se=>({...Se,speed_limit:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:D.expired_at,onChange:M=>X(Se=>({...Se,expired_at:M.target.value}))})]}),t.jsxs("label",{children:[r("subscription.status"),t.jsxs("select",{className:"config-input",value:D.status,onChange:M=>X(Se=>({...Se,status:M.target.value})),children:[t.jsx("option",{value:"active",children:r("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:r("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[r("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:D.auto_renewal,onChange:M=>X(Se=>({...Se,auto_renewal:M.target.value})),children:[t.jsx("option",{value:"0",children:r("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:r("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[r("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:D.remarks,onChange:M=>X(Se=>({...Se,remarks:M.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>V(null),children:r("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:le===q.id,children:le===q.id?r("common.processing"):r("common.save")})]})]})]})}):null]})}const xh=15,I0=["email","user_id","hwid","last_ip"];function gh(s){return s?new Date(s*1e3).toLocaleString():"-"}function ej(s){return s==="user_id"?"=":"like"}function tj(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"last_ip":return l("device.filterIp");default:return""}}function aj(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function nj(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState("email"),[b,g]=f.useState(""),[L,I]=f.useState(!0),[W,J]=f.useState(""),[k,q]=f.useState(null),[V,D]=f.useState(null),X=f.useCallback(async(A=1,S="",F="email")=>{I(!0),J("");try{const E=S.trim()?[{key:F,condition:ej(F),value:S.trim()}]:void 0,$=await Kh(A,xh,E);d($.data),h($.total),j(A)}catch(E){J(E instanceof Error?E.message:l("device.loadFailed"))}finally{I(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}X()},[X,s]);function le(A){A.preventDefault(),X(1,b,v)}function ce(){g(""),X(1,"",v)}async function R(A){var F;if(!A.hwid)return;const S=await dl(A.hwid);(F=window.showToast)==null||F.call(window,l(S?"device.copySuccess":"common.copyFailed"),S?"success":"error")}async function oe(A){var F;const S=await dl(A.uuid);(F=window.showToast)==null||F.call(window,l(S?"device.copyUuidSuccess":"common.copyFailed"),S?"success":"error")}function ie(A){var S;(S=window.showConfirm)==null||S.call(window,{message:l("device.unbindConfirm"),onConfirm:async()=>{var F,E;q(A.id);try{await Jh(A.id),(F=window.showToast)==null||F.call(window,l("device.unbindSuccess"),"success"),await X(m,b,v)}catch($){(E=window.showToast)==null||E.call(window,$ instanceof Error?$.message:l("device.unbindFailed"),"error")}finally{q(null)}}})}function se(A){var S;(S=window.showConfirm)==null||S.call(window,{message:l("device.banConfirm"),onConfirm:async()=>{var F,E;q(A.id);try{await Fh(A.id),(F=window.showToast)==null||F.call(window,l("device.banSuccess"),"success"),await X(m,b,v)}catch($){(E=window.showToast)==null||E.call(window,$ instanceof Error?$.message:l("device.banFailed"),"error")}finally{q(null)}}})}function _(A){var S;(S=window.showConfirm)==null||S.call(window,{message:l("device.resetConfirm",{user:A.user_email??`#${A.user_id}`}),onConfirm:async()=>{var F,E;D(A.user_id);try{await o1(A.user_id),(F=window.showToast)==null||F.call(window,l("device.resetSuccess"),"success"),await X(m,b,v)}catch($){(E=window.showToast)==null||E.call(window,$ instanceof Error?$.message:l("device.resetFailed"),"error")}finally{D(null)}}})}const O=Math.ceil(p/xh);return t.jsxs(At,{title:l("device.title"),subtitle:l("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
        @media (max-width: 720px) {
          .device-filter-form {
            flex-direction: column;
            align-items: stretch;
          }
          .device-filter-form .filter-select {
            width: 100% !important;
          }
        }
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("device.heading")}),t.jsx("p",{children:l("device.total",{count:p})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:L,onClick:()=>void X(m,b,v),children:[t.jsx(zt,{size:16}),l(L?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:le,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:A=>y(A.target.value),children:I0.map(A=>t.jsx("option",{value:A,children:tj(A,l)},A))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(To,{size:16}),t.jsx("input",{className:"config-input",value:b,onChange:A=>g(A.target.value),placeholder:l("device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(Wi,{size:16}),l("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ce,children:l("device.clear")})]}),W?t.jsx("div",{className:"form-error",children:W}):null,L&&r.length===0?t.jsx(pt,{label:l("device.loading")}):null,t.jsxs("section",{className:"panel table-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("device.user")}),t.jsx("th",{children:l("device.plan")}),t.jsx("th",{children:l("device.boundLimit")}),t.jsx("th",{children:l("device.status")}),t.jsx("th",{children:l("device.uuid")}),t.jsx("th",{children:l("device.hwid")}),t.jsx("th",{children:l("device.client")}),t.jsx("th",{children:l("device.ip")}),t.jsx("th",{children:l("device.firstSeen")}),t.jsx("th",{children:l("device.lastSeen")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(A=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{children:A.user_email??"-"}),t.jsxs("small",{children:["ID: ",A.user_id]})]}),t.jsxs("td",{children:[t.jsx("strong",{children:A.plan_name??"-"}),A.user_plan_id?t.jsxs("small",{children:["#",A.user_plan_id]}):null]}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[A.user_device_count," / ",A.user_device_limit&&A.user_device_limit>0?A.user_device_limit:l("device.unlimited")]})}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:aj(A.status,l)})}),t.jsx("td",{className:"device-hwid",children:t.jsxs("button",{className:"copy-value",type:"button",title:A.uuid,onClick:()=>oe(A),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:A.uuid})]})}),t.jsx("td",{className:"device-hwid",children:A.hwid?t.jsxs("button",{className:"copy-value",type:"button",title:A.hwid,onClick:()=>R(A),children:[t.jsx(Ba,{size:14}),t.jsx("span",{className:"mono",children:A.hwid})]}):"-"}),t.jsx("td",{className:"device-client",children:t.jsx("small",{title:A.user_agent??"",children:A.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:A.last_ip??"-"}),t.jsx("small",{children:A.first_ip?`${l("device.firstIp")}: ${A.first_ip}`:"-"})]}),t.jsx("td",{children:gh(A.first_seen_at)}),t.jsx("td",{children:gh(A.last_seen_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===A.id,onClick:()=>ie(A),children:[t.jsx(fd,{size:14}),l("device.unbind")]}),A.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===A.id,onClick:()=>se(A),children:[t.jsx(cl,{size:14}),l("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:V===A.user_id,onClick:()=>_(A),children:[t.jsx(av,{size:14}),l("device.resetUser")]})]})})]},A.id)),!L&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:l("device.empty")})})}):null]})]})}),O>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:m<=1||L,onClick:()=>void X(m-1,b,v),children:[t.jsx(rn,{size:14}),l("device.previous")]}),t.jsx("span",{className:"page-info",children:l("device.page",{page:m,total:O})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:m>=O||L,onClick:()=>void X(m+1,b,v),children:[l("device.next"),t.jsx(cn,{size:14})]})]}):null]})]})}const lj={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Cd(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return Cd(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function bh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Cd(s.plan_id)}:{...lj}}function id(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function ij(s){const l=Number(s);if(!l)return"-";const r=new Date(l*1e3);return Number.isNaN(r.getTime())?"-":r.toLocaleString()}function sj(s){return Number(s)===1}function yh(s,l){if(!s.length)return"All plans";const r=new Map(l.map(d=>[Number(d.id),d.name]));return s.map(d=>r.get(d)??`#${d}`).join(", ")}function Un(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function oj(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,g]=f.useState(!1),[L,I]=f.useState(null),[W,J]=f.useState(""),k=f.useCallback(async()=>{y(!0),J("");try{const[R,oe]=await Promise.all([j1(),pl()]);d(R),h(oe)}catch(R){J(R instanceof Error?R.message:l("webcon.toastLoadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}k()},[k,s]);const q=f.useMemo(()=>p.map(R=>({id:Number(R.id),name:R.name})),[p]);function V(R,oe){j(ie=>ie&&{...ie,[R]:oe})}function D(R,oe){j(ie=>{if(!ie)return ie;const se=oe?Array.from(new Set([...ie.plan_ids,R])):ie.plan_ids.filter(_=>_!==R);return{...ie,plan_ids:se}})}async function X(R){var ie,se;if(R.preventDefault(),!m)return;const oe=id(m.domain);g(!0),J("");try{await w1({id:m.id,email:m.email.trim(),domain:oe,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),j(null),(ie=window.showToast)==null||ie.call(window,l("webcon.toastSaveSuccess"),"success"),await k()}catch(_){const O=_ instanceof Error?_.message:l("webcon.toastSaveFailed");J(O),(se=window.showToast)==null||se.call(window,O,"error")}finally{g(!1)}}async function le(R){var oe,ie;I(R.id);try{await _1(R.id),(oe=window.showToast)==null||oe.call(window,l("webcon.toastToggleSuccess"),"success"),await k()}catch(se){const _=se instanceof Error?se.message:l("webcon.toastToggleFailed");J(_),(ie=window.showToast)==null||ie.call(window,_,"error")}finally{I(null)}}function ce(R){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ie,se;I(R.id),J("");try{await N1(R.id),(ie=window.showToast)==null||ie.call(window,l("webcon.toastDeleteSuccess"),"success"),await k()}catch(_){const O=_ instanceof Error?_.message:l("webcon.toastDeleteFailed");J(O),(se=window.showToast)==null||se.call(window,O,"error")}finally{I(null)}}})}return t.jsxs(At,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:r.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void k(),children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(bh()),children:[t.jsx(ba,{size:16}),l("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&r.length===0?t.jsx(pt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[r.map(R=>{var ie;const oe=Cd(R.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",R.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${sj(R.status)?"active":""}`,type:"button",disabled:L===R.id,onClick:()=>void le(R),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:R.email??"-"}),t.jsx("small",{children:Number(R.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:R.domain}),t.jsxs("small",{children:["/",String(((ie=window.settings)==null?void 0:ie.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:R.title||"-"}),t.jsx("small",{children:R.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Qy,{size:13}),R.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(es,{size:13}),R.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:yh(oe,q)}),t.jsx("small",{children:oe.length?`${oe.length} selected`:"not restricted"})]})}),t.jsx("td",{children:ij(R.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(bh(R)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:L===R.id,onClick:()=>ce(R),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},R.id)}),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>j(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:R=>R.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>j(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:X,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Un("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:R=>V("email",R.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Un("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:R=>V("domain",R.target.value),onBlur:R=>V("domain",id(R.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Un("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:R=>V("title",R.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Un("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:R=>V("description",R.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Un("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:R=>V("logo",R.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Un("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:R=>V("background_url",R.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Un("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[q.map(R=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(R.id),onChange:oe=>D(R.id,oe.target.checked)}),t.jsx("span",{children:R.name})]},R.id)),q.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Un("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:R=>V("custom_html",R.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(ev,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:id(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Sd,{size:12})," ",yh(m.plan_ids,q)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(ya,{size:16}),l(b?"webcon.saving":"common.save")]})]})]})]})}):null]})}function vh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function sd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function rj(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),[L,I]=f.useState(""),W=f.useCallback(async()=>{j(!0),g("");try{d(await c1())}catch(V){g(V instanceof Error?V.message:l("notice.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function J(V){var D,X;if(V.preventDefault(),!!p){y(!0),g(""),I("");try{const le=p.tags?p.tags.split(",").map(ce=>ce.trim()).filter(Boolean):[];await d1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:le.length?le:null}),h(null),(D=window.showToast)==null||D.call(window,l("notice.saveSuccess"),"success"),await W()}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("notice.saveFailed"),"error")}finally{y(!1)}}}async function k(V){var D;try{await p1(V),await W()}catch(X){(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("notice.toggleFailed"),"error")}}async function q(V){var D;(D=window.showConfirm)==null||D.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var X,le;try{await u1(V),(X=window.showToast)==null||X.call(window,l("notice.deleteSuccess"),"success"),await W()}catch(ce){(le=window.showToast)==null||le.call(window,ce instanceof Error?ce.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[r.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(sd()),children:[t.jsx(ba,{size:16}),l("notice.addNotice")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,L?t.jsx("div",{className:"form-success",children:L}):null,m&&r.length===0?t.jsx(pt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(V=>{var D;return t.jsxs("tr",{children:[t.jsx("td",{children:V.id}),t.jsx("td",{children:t.jsx("strong",{children:V.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${V.show?"active":""}`,type:"button",onClick:()=>void k(V.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((D=V.tags)==null?void 0:D.map((X,le)=>t.jsx("span",{className:"tag",children:X},le)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:vh(V.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(sd(V)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void q(V.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},V.id)}),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[r.map(V=>t.jsxs("div",{className:`notice-mobile-card ${V.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",V.id]})}),t.jsx("button",{className:`admin-switch ${V.show?"active":""}`,type:"button",onClick:()=>void k(V.id),"aria-label":V.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:V.title}),t.jsx("div",{className:"notice-tags",children:V.tags&&V.tags.length>0?V.tags.map((D,X)=>t.jsx("span",{className:"tag-badge",children:D},X)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",vh(V.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(sd(V)),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void q(V.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},V.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:J,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:V=>h({...p,title:V.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:V=>h({...p,content:V.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:V=>h({...p,img_url:V.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:V=>h({...p,tags:V.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function od(s){return new Date(s*1e3).toLocaleString("vi-VN")}const jh=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},rd=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function cj(){var _;const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!1),[v,y]=f.useState(null),[b,g]=f.useState(""),[L,I]=f.useState(!0),[W,J]=f.useState(!1),[k,q]=f.useState(""),V=f.useRef(null),[D,X]=f.useState([]),[le,ce]=f.useState(null),R=f.useCallback(async()=>{I(!0),q("");try{d(await m1())}catch(O){q(O instanceof Error?O.message:"Load failed")}finally{I(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}R(),pl().then(O=>{O&&X(O)}).catch(()=>{})},[R,s]),f.useEffect(()=>{var O;(O=V.current)==null||O.scrollIntoView({behavior:"smooth"})},[p]);async function oe(O){var A;y(O),g(""),h(null),ce(null),j(!0);try{const S=await Wf(O);if(h(S),S&&S.user_id)try{const F=await Zh(S.user_id);F&&F.data&&ce(F.data)}catch(F){console.error("Failed to load user info:",F)}}catch{(A=window.showToast)==null||A.call(window,"Failed to load message thread","error")}finally{j(!1)}}async function ie(O){var A,S;if(O.preventDefault(),!(!v||!b.trim())){J(!0),q("");try{await f1(v,b),g(""),(A=window.showToast)==null||A.call(window,"Reply sent!","success");try{const F=await Wf(v);h(F)}catch{}await R()}catch(F){(S=window.showToast)==null||S.call(window,F instanceof Error?F.message:"Reply failed","error")}finally{J(!1)}}}async function se(O){var A;(A=window.showConfirm)==null||A.call(window,{message:"Close this ticket?",onConfirm:async()=>{var S,F;q("");try{await h1(O),(S=window.showToast)==null||S.call(window,"Ticket closed!","success"),v===O&&(y(null),h(null)),await R()}catch(E){q(E instanceof Error?E.message:"Close failed"),(F=window.showToast)==null||F.call(window,E instanceof Error?E.message:"Close failed","error")}}})}return t.jsxs(At,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[r.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:L,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),k?t.jsx("div",{className:"form-error",children:k}):null,L&&r.length===0?t.jsx(pt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(O=>{const A=jh(O.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("strong",{children:O.subject})}),t.jsxs("td",{children:["#",O.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:rd(O.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${A.cls}`,children:A.label})}),t.jsx("td",{children:O.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:od(O.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:O.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void oe(O.id),children:[t.jsx(Xi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void se(O.id),children:[t.jsx(md,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void oe(O.id),children:[t.jsx(Xi,{size:14}),l("ticket.viewHistory")]})})})]},O.id)}),!L&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[r.map(O=>{const A=jh(O.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:O.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:rd(O.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",O.id]})]}),t.jsx("span",{className:`status-pill ${A.cls}`,children:A.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",O.user_id]})]}),t.jsx("span",{children:O.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:od(O.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:O.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void oe(O.id),children:[t.jsx(Xi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void se(O.id),children:[t.jsx(md,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void oe(O.id),children:[t.jsx(Xi,{size:14}),l("ticket.viewHistory")]})})]},O.id)}),!L&&r.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${l("ticket.ticketDetail")}: ${p.subject}`:`${l("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[l("ticket.user"),": #",p==null?void 0:p.user_id," | ",l("ticket.level"),": ",p!=null?rd(p.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{y(null),h(null)},children:t.jsx(ot,{size:18})})]}),le&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:le.email,children:le.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((_=D.find(O=>O.id===le.plan_id))==null?void 0:_.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[qt(le.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:le.expired_at?new Date(le.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(pt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(O=>{const A=O.is_me;return t.jsxs("div",{className:`chat-message ${A?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:O.message}),t.jsxs("div",{className:"chat-meta",children:[A?l("ticket.staff"):`${l("ticket.user")} #${O.user_id}`," • ",od(O.created_at)]})]},O.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:V})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ie,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:b,onChange:O=>g(O.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!b.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(qh,{size:14}),W?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function wh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Nh={"en-US":"English","ja-JP":"Tiếng Nhật","ko-KR":"한국어","vi-VN":"Tiếng Việt","vi-VN":"Tiếng Việt","vi-VN":"Tiếng Việt"};function _h(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function dj(){const s=wt(),{t:l}=qe(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),[L,I]=f.useState(""),W=f.useCallback(async()=>{j(!0),g("");try{d(await x1())}catch(D){g(D instanceof Error?D.message:l("knowledge.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function J(D){var X;try{const le=await g1(D.id);h(_h(le))}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("knowledge.detailFailed"),"error")}}async function k(D){var X,le;if(D.preventDefault(),!!p){y(!0),g(""),I("");try{await b1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(X=window.showToast)==null||X.call(window,l("knowledge.saveSuccess"),"success"),await W()}catch(ce){(le=window.showToast)==null||le.call(window,ce instanceof Error?ce.message:l("knowledge.saveFailed"),"error")}finally{y(!1)}}}async function q(D){var X;try{await v1(D),await W()}catch(le){(X=window.showToast)==null||X.call(window,le instanceof Error?le.message:l("knowledge.toggleFailed"),"error")}}async function V(D){var X;(X=window.showConfirm)==null||X.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var le,ce;try{await y1(D),(le=window.showToast)==null||le.call(window,l("knowledge.deleteSuccess"),"success"),await W()}catch(R){(ce=window.showToast)==null||ce.call(window,R instanceof Error?R.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[r.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(_h()),children:[t.jsx(ba,{size:16}),l("knowledge.addArticle")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,L?t.jsx("div",{className:"form-success",children:L}):null,m&&r.length===0?t.jsx(pt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(D=>t.jsxs("tr",{children:[t.jsx("td",{children:D.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:D.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:D.title})}),t.jsx("td",{children:D.language&&Nh[D.language]||D.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void q(D.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:D.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:wh(D.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void J(D),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void V(D.id),children:[t.jsx(Ot,{size:14}),l("common.delete")]})]})})]},D.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[r.map(D=>t.jsxs("div",{className:`knowledge-mobile-card ${D.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",D.id]}),D.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",D.sort]})]}),t.jsx("button",{className:`admin-switch ${D.show?"active":""}`,type:"button",onClick:()=>void q(D.id),"aria-label":D.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:D.title}),t.jsxs("div",{className:"card-meta",children:[D.category&&t.jsx("span",{className:"category-badge",children:D.category}),D.language&&t.jsx("span",{className:"lang-badge",children:Nh[D.language]||D.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",wh(D.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void J(D),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void V(D.id),children:[t.jsx(Ot,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},D.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:k,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:D=>h({...p,category:D.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:D=>h({...p,title:D.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:D=>h({...p,body:D.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:D=>h({...p,language:D.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:D=>h({...p,sort:D.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ya,{size:16}),l(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function uj(){const s=wt(),{t:l}=qe(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(null),[v,y]=f.useState(""),[b,g]=f.useState(!0),[L,I]=f.useState(""),W=f.useCallback(async()=>{g(!0),I("");try{const[k,q,V,D]=await Promise.all([S1().catch(()=>({data:{}})),k1().catch(()=>({data:{}})),C1().catch(()=>({data:[]})),z1().catch(()=>({data:""}))]);d(k.data),h(q.data),j(V.data),y(typeof D.data=="string"?D.data:"")}catch(k){I(k instanceof Error?k.message:l("queue.toastLoadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);function J(k,q,V){return k?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[V," ",q]}),t.jsx("div",{className:"queue-grid",children:Object.entries(k).map(([D,X])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:D}),t.jsx("strong",{children:typeof X=="object"?JSON.stringify(X):String(X??"—")})]},D))})]}):null}return t.jsxs(At,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:b,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),L?t.jsx("div",{className:"form-error",children:L}):null,b?t.jsx(pt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[J(r,l("queue.systemStatus"),t.jsx(ko,{size:18})),J(p,l("queue.queueStats"),t.jsx(Sd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Oy,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Gy,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const pj=f.createContext(null);function mj({children:s}){const[l,r]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((y,b="success")=>{const g=Math.random().toString(36).substring(2,9);r(L=>[...L,{id:g,message:y,type:b}]),setTimeout(()=>{r(L=>L.filter(I=>I.id!==g))},5e3)},[]),m=f.useCallback(y=>{p(y)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const j=async()=>{if(d){try{await d.onConfirm()}catch(y){console.error("Error in onConfirm:",y)}p(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(pj.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:l.map(y=>{let b=Xy;return y.type==="success"&&(b=Hh),y.type==="error"&&(b=Hy),y.type==="warning"&&(b=Zf),t.jsxs("div",{className:`toast-card toast-${y.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(b,{size:18})}),t.jsx("div",{className:"toast-message",children:y.message}),t.jsx("button",{className:"toast-close",onClick:()=>r(g=>g.filter(L=>L.id!==y.id)),children:t.jsx(ot,{size:14})})]},y.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Zf,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:j,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function fj({children:s}){return t.jsx(L1,{children:t.jsx(mj,{children:s})})}function hj(){return t.jsx(fj,{children:t.jsxs(xy,{children:[t.jsx(ht,{path:"/login",element:t.jsx(q1,{})}),t.jsx(ht,{path:"/dashboard",element:t.jsx(Q1,{})}),t.jsx(ht,{path:"/config/system",element:t.jsx(I1,{})}),t.jsx(ht,{path:"/config/payment",element:t.jsx(a0,{})}),t.jsx(ht,{path:"/config/theme",element:t.jsx(i0,{})}),t.jsx(ht,{path:"/server/manage",element:t.jsx(_0,{})}),t.jsx(ht,{path:"/server/group",element:t.jsx(S0,{})}),t.jsx(ht,{path:"/server/route",element:t.jsx(z0,{})}),t.jsx(ht,{path:"/plan",element:t.jsx(D0,{})}),t.jsx(ht,{path:"/order",element:t.jsx(O0,{})}),t.jsx(ht,{path:"/coupon",element:t.jsx(A0,{})}),t.jsx(ht,{path:"/giftcard",element:t.jsx(U0,{})}),t.jsx(ht,{path:"/user",element:t.jsx(Q0,{})}),t.jsx(ht,{path:"/subscription",element:t.jsx(P0,{})}),t.jsx(ht,{path:"/device",element:t.jsx(nj,{})}),t.jsx(ht,{path:"/webcon",element:t.jsx(oj,{})}),t.jsx(ht,{path:"/notice",element:t.jsx(rj,{})}),t.jsx(ht,{path:"/ticket",element:t.jsx(cj,{})}),t.jsx(ht,{path:"/knowledge",element:t.jsx(dj,{})}),t.jsx(ht,{path:"/queue",element:t.jsx(uj,{})}),t.jsx(ht,{path:"/",element:t.jsx(Uf,{to:"/dashboard",replace:!0})}),t.jsx(ht,{path:"*",element:t.jsx(Uf,{to:"/dashboard",replace:!0})})]})})}_b.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(Ny,{children:t.jsx(hj,{})})}));
