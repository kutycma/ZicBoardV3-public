function Mb(s,l){for(var r=0;r<l.length;r++){const d=l[r];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function r(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=r(p);fetch(p.href,h)}})();function Db(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wc={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zf;function Ab(){if(zf)return Zi;zf=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.fragment");function r(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var j in p)j!=="key"&&(h[j]=p[j])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return Zi.Fragment=l,Zi.jsx=r,Zi.jsxs=r,Zi}var Tf;function Ob(){return Tf||(Tf=1,Wc.exports=Ab()),Wc.exports}var t=Ob(),Pc={exports:{}},De={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ef;function Ub(){if(Ef)return De;Ef=1;var s=Symbol.for("react.transitional.element"),l=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),R=Symbol.iterator;function J(C){return C===null||typeof C!="object"?null:(C=R&&C[R]||C["@@iterator"],typeof C=="function"?C:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,k={};function G(C,Z,ue){this.props=C,this.context=Z,this.refs=k,this.updater=ue||W}G.prototype.isReactComponent={},G.prototype.setState=function(C,Z){if(typeof C!="object"&&typeof C!="function"&&C!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,C,Z,"setState")},G.prototype.forceUpdate=function(C){this.updater.enqueueForceUpdate(this,C,"forceUpdate")};function H(){}H.prototype=G.prototype;function A(C,Z,ue){this.props=C,this.context=Z,this.refs=k,this.updater=ue||W}var F=A.prototype=new H;F.constructor=A,P(F,G.prototype),F.isPureReactComponent=!0;var ie=Array.isArray;function de(){}var U={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ee(C,Z,ue){var xe=ue.ref;return{$$typeof:s,type:C,key:Z,ref:xe!==void 0?xe:null,props:ue}}function fe(C,Z){return ee(C.type,Z,C.props)}function S(C){return typeof C=="object"&&C!==null&&C.$$typeof===s}function L(C){var Z={"=":"=0",":":"=2"};return"$"+C.replace(/[=:]/g,function(ue){return Z[ue]})}var w=/\/+/g;function T(C,Z){return typeof C=="object"&&C!==null&&C.key!=null?L(""+C.key):Z.toString(36)}function I(C){switch(C.status){case"fulfilled":return C.value;case"rejected":throw C.reason;default:switch(typeof C.status=="string"?C.then(de,de):(C.status="pending",C.then(function(Z){C.status==="pending"&&(C.status="fulfilled",C.value=Z)},function(Z){C.status==="pending"&&(C.status="rejected",C.reason=Z)})),C.status){case"fulfilled":return C.value;case"rejected":throw C.reason}}throw C}function D(C,Z,ue,xe,we){var _e=typeof C;(_e==="undefined"||_e==="boolean")&&(C=null);var Se=!1;if(C===null)Se=!0;else switch(_e){case"bigint":case"string":case"number":Se=!0;break;case"object":switch(C.$$typeof){case s:case l:Se=!0;break;case b:return Se=C._init,D(Se(C._payload),Z,ue,xe,we)}}if(Se)return we=we(C),Se=xe===""?"."+T(C,0):xe,ie(we)?(ue="",Se!=null&&(ue=Se.replace(w,"$&/")+"/"),D(we,Z,ue,"",function(Ot){return Ot})):we!=null&&(S(we)&&(we=fe(we,ue+(we.key==null||C&&C.key===we.key?"":(""+we.key).replace(w,"$&/")+"/")+Se)),Z.push(we)),1;Se=0;var Ke=xe===""?".":xe+":";if(ie(C))for(var $e=0;$e<C.length;$e++)xe=C[$e],_e=Ke+T(xe,$e),Se+=D(xe,Z,ue,_e,we);else if($e=J(C),typeof $e=="function")for(C=$e.call(C),$e=0;!(xe=C.next()).done;)xe=xe.value,_e=Ke+T(xe,$e++),Se+=D(xe,Z,ue,_e,we);else if(_e==="object"){if(typeof C.then=="function")return D(I(C),Z,ue,xe,we);throw Z=String(C),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(C).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return Se}function X(C,Z,ue){if(C==null)return C;var xe=[],we=0;return D(C,xe,"","",function(_e){return Z.call(ue,_e,we++)}),xe}function _(C){if(C._status===-1){var Z=C._result;Z=Z(),Z.then(function(ue){(C._status===0||C._status===-1)&&(C._status=1,C._result=ue)},function(ue){(C._status===0||C._status===-1)&&(C._status=2,C._result=ue)}),C._status===-1&&(C._status=0,C._result=Z)}if(C._status===1)return C._result.default;throw C._result}var se=typeof reportError=="function"?reportError:function(C){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof C=="object"&&C!==null&&typeof C.message=="string"?String(C.message):String(C),error:C});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",C);return}console.error(C)},oe={map:X,forEach:function(C,Z,ue){X(C,function(){Z.apply(this,arguments)},ue)},count:function(C){var Z=0;return X(C,function(){Z++}),Z},toArray:function(C){return X(C,function(Z){return Z})||[]},only:function(C){if(!S(C))throw Error("React.Children.only expected to receive a single React element child.");return C}};return De.Activity=g,De.Children=oe,De.Component=G,De.Fragment=r,De.Profiler=p,De.PureComponent=A,De.StrictMode=d,De.Suspense=v,De.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,De.__COMPILER_RUNTIME={__proto__:null,c:function(C){return U.H.useMemoCache(C)}},De.cache=function(C){return function(){return C.apply(null,arguments)}},De.cacheSignal=function(){return null},De.cloneElement=function(C,Z,ue){if(C==null)throw Error("The argument must be a React element, but you passed "+C+".");var xe=P({},C.props),we=C.key;if(Z!=null)for(_e in Z.key!==void 0&&(we=""+Z.key),Z)!Y.call(Z,_e)||_e==="key"||_e==="__self"||_e==="__source"||_e==="ref"&&Z.ref===void 0||(xe[_e]=Z[_e]);var _e=arguments.length-2;if(_e===1)xe.children=ue;else if(1<_e){for(var Se=Array(_e),Ke=0;Ke<_e;Ke++)Se[Ke]=arguments[Ke+2];xe.children=Se}return ee(C.type,we,xe)},De.createContext=function(C){return C={$$typeof:m,_currentValue:C,_currentValue2:C,_threadCount:0,Provider:null,Consumer:null},C.Provider=C,C.Consumer={$$typeof:h,_context:C},C},De.createElement=function(C,Z,ue){var xe,we={},_e=null;if(Z!=null)for(xe in Z.key!==void 0&&(_e=""+Z.key),Z)Y.call(Z,xe)&&xe!=="key"&&xe!=="__self"&&xe!=="__source"&&(we[xe]=Z[xe]);var Se=arguments.length-2;if(Se===1)we.children=ue;else if(1<Se){for(var Ke=Array(Se),$e=0;$e<Se;$e++)Ke[$e]=arguments[$e+2];we.children=Ke}if(C&&C.defaultProps)for(xe in Se=C.defaultProps,Se)we[xe]===void 0&&(we[xe]=Se[xe]);return ee(C,_e,we)},De.createRef=function(){return{current:null}},De.forwardRef=function(C){return{$$typeof:j,render:C}},De.isValidElement=S,De.lazy=function(C){return{$$typeof:b,_payload:{_status:-1,_result:C},_init:_}},De.memo=function(C,Z){return{$$typeof:y,type:C,compare:Z===void 0?null:Z}},De.startTransition=function(C){var Z=U.T,ue={};U.T=ue;try{var xe=C(),we=U.S;we!==null&&we(ue,xe),typeof xe=="object"&&xe!==null&&typeof xe.then=="function"&&xe.then(de,se)}catch(_e){se(_e)}finally{Z!==null&&ue.types!==null&&(Z.types=ue.types),U.T=Z}},De.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},De.use=function(C){return U.H.use(C)},De.useActionState=function(C,Z,ue){return U.H.useActionState(C,Z,ue)},De.useCallback=function(C,Z){return U.H.useCallback(C,Z)},De.useContext=function(C){return U.H.useContext(C)},De.useDebugValue=function(){},De.useDeferredValue=function(C,Z){return U.H.useDeferredValue(C,Z)},De.useEffect=function(C,Z){return U.H.useEffect(C,Z)},De.useEffectEvent=function(C){return U.H.useEffectEvent(C)},De.useId=function(){return U.H.useId()},De.useImperativeHandle=function(C,Z,ue){return U.H.useImperativeHandle(C,Z,ue)},De.useInsertionEffect=function(C,Z){return U.H.useInsertionEffect(C,Z)},De.useLayoutEffect=function(C,Z){return U.H.useLayoutEffect(C,Z)},De.useMemo=function(C,Z){return U.H.useMemo(C,Z)},De.useOptimistic=function(C,Z){return U.H.useOptimistic(C,Z)},De.useReducer=function(C,Z,ue){return U.H.useReducer(C,Z,ue)},De.useRef=function(C){return U.H.useRef(C)},De.useState=function(C){return U.H.useState(C)},De.useSyncExternalStore=function(C,Z,ue){return U.H.useSyncExternalStore(C,Z,ue)},De.useTransition=function(){return U.H.useTransition()},De.version="19.2.6",De}var Mf;function zd(){return Mf||(Mf=1,Pc.exports=Ub()),Pc.exports}var f=zd();const Rb=Db(f),Hb=Mb({__proto__:null,default:Rb},[f]);var Ic={exports:{}},Ki={},ed={exports:{}},td={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Df;function Lb(){return Df||(Df=1,(function(s){function l(D,X){var _=D.length;D.push(X);e:for(;0<_;){var se=_-1>>>1,oe=D[se];if(0<p(oe,X))D[se]=X,D[_]=oe,_=se;else break e}}function r(D){return D.length===0?null:D[0]}function d(D){if(D.length===0)return null;var X=D[0],_=D.pop();if(_!==X){D[0]=_;e:for(var se=0,oe=D.length,C=oe>>>1;se<C;){var Z=2*(se+1)-1,ue=D[Z],xe=Z+1,we=D[xe];if(0>p(ue,_))xe<oe&&0>p(we,ue)?(D[se]=we,D[xe]=_,se=xe):(D[se]=ue,D[Z]=_,se=Z);else if(xe<oe&&0>p(we,_))D[se]=we,D[xe]=_,se=xe;else break e}}return X}function p(D,X){var _=D.sortIndex-X.sortIndex;return _!==0?_:D.id-X.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,j=m.now();s.unstable_now=function(){return m.now()-j}}var v=[],y=[],b=1,g=null,R=3,J=!1,W=!1,P=!1,k=!1,G=typeof setTimeout=="function"?setTimeout:null,H=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function F(D){for(var X=r(y);X!==null;){if(X.callback===null)d(y);else if(X.startTime<=D)d(y),X.sortIndex=X.expirationTime,l(v,X);else break;X=r(y)}}function ie(D){if(P=!1,F(D),!W)if(r(v)!==null)W=!0,de||(de=!0,L());else{var X=r(y);X!==null&&I(ie,X.startTime-D)}}var de=!1,U=-1,Y=5,ee=-1;function fe(){return k?!0:!(s.unstable_now()-ee<Y)}function S(){if(k=!1,de){var D=s.unstable_now();ee=D;var X=!0;try{e:{W=!1,P&&(P=!1,H(U),U=-1),J=!0;var _=R;try{t:{for(F(D),g=r(v);g!==null&&!(g.expirationTime>D&&fe());){var se=g.callback;if(typeof se=="function"){g.callback=null,R=g.priorityLevel;var oe=se(g.expirationTime<=D);if(D=s.unstable_now(),typeof oe=="function"){g.callback=oe,F(D),X=!0;break t}g===r(v)&&d(v),F(D)}else d(v);g=r(v)}if(g!==null)X=!0;else{var C=r(y);C!==null&&I(ie,C.startTime-D),X=!1}}break e}finally{g=null,R=_,J=!1}X=void 0}}finally{X?L():de=!1}}}var L;if(typeof A=="function")L=function(){A(S)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,T=w.port2;w.port1.onmessage=S,L=function(){T.postMessage(null)}}else L=function(){G(S,0)};function I(D,X){U=G(function(){D(s.unstable_now())},X)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(D){D.callback=null},s.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<D?Math.floor(1e3/D):5},s.unstable_getCurrentPriorityLevel=function(){return R},s.unstable_next=function(D){switch(R){case 1:case 2:case 3:var X=3;break;default:X=R}var _=R;R=X;try{return D()}finally{R=_}},s.unstable_requestPaint=function(){k=!0},s.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var _=R;R=D;try{return X()}finally{R=_}},s.unstable_scheduleCallback=function(D,X,_){var se=s.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?se+_:se):_=se,D){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=_+oe,D={id:b++,callback:X,priorityLevel:D,startTime:_,expirationTime:oe,sortIndex:-1},_>se?(D.sortIndex=_,l(y,D),r(v)===null&&D===r(y)&&(P?(H(U),U=-1):P=!0,I(ie,_-se))):(D.sortIndex=oe,l(v,D),W||J||(W=!0,de||(de=!0,L()))),D},s.unstable_shouldYield=fe,s.unstable_wrapCallback=function(D){var X=R;return function(){var _=R;R=X;try{return D.apply(this,arguments)}finally{R=_}}}})(td)),td}var Af;function qb(){return Af||(Af=1,ed.exports=Lb()),ed.exports}var ad={exports:{}},Kt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Of;function Bb(){if(Of)return Kt;Of=1;var s=zd();function l(v){var y="https://react.dev/errors/"+v;if(1<arguments.length){y+="?args[]="+encodeURIComponent(arguments[1]);for(var b=2;b<arguments.length;b++)y+="&args[]="+encodeURIComponent(arguments[b])}return"Minified React error #"+v+"; visit "+y+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(){}var d={d:{f:r,r:function(){throw Error(l(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(v,y,b){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:g==null?null:""+g,children:v,containerInfo:y,implementation:b}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function j(v,y){if(v==="font")return"";if(typeof y=="string")return y==="use-credentials"?y:""}return Kt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Kt.createPortal=function(v,y){var b=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!y||y.nodeType!==1&&y.nodeType!==9&&y.nodeType!==11)throw Error(l(299));return h(v,y,null,b)},Kt.flushSync=function(v){var y=m.T,b=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=y,d.p=b,d.d.f()}},Kt.preconnect=function(v,y){typeof v=="string"&&(y?(y=y.crossOrigin,y=typeof y=="string"?y==="use-credentials"?y:"":void 0):y=null,d.d.C(v,y))},Kt.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},Kt.preinit=function(v,y){if(typeof v=="string"&&y&&typeof y.as=="string"){var b=y.as,g=j(b,y.crossOrigin),R=typeof y.integrity=="string"?y.integrity:void 0,J=typeof y.fetchPriority=="string"?y.fetchPriority:void 0;b==="style"?d.d.S(v,typeof y.precedence=="string"?y.precedence:void 0,{crossOrigin:g,integrity:R,fetchPriority:J}):b==="script"&&d.d.X(v,{crossOrigin:g,integrity:R,fetchPriority:J,nonce:typeof y.nonce=="string"?y.nonce:void 0})}},Kt.preinitModule=function(v,y){if(typeof v=="string")if(typeof y=="object"&&y!==null){if(y.as==null||y.as==="script"){var b=j(y.as,y.crossOrigin);d.d.M(v,{crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0})}}else y==null&&d.d.M(v)},Kt.preload=function(v,y){if(typeof v=="string"&&typeof y=="object"&&y!==null&&typeof y.as=="string"){var b=y.as,g=j(b,y.crossOrigin);d.d.L(v,b,{crossOrigin:g,integrity:typeof y.integrity=="string"?y.integrity:void 0,nonce:typeof y.nonce=="string"?y.nonce:void 0,type:typeof y.type=="string"?y.type:void 0,fetchPriority:typeof y.fetchPriority=="string"?y.fetchPriority:void 0,referrerPolicy:typeof y.referrerPolicy=="string"?y.referrerPolicy:void 0,imageSrcSet:typeof y.imageSrcSet=="string"?y.imageSrcSet:void 0,imageSizes:typeof y.imageSizes=="string"?y.imageSizes:void 0,media:typeof y.media=="string"?y.media:void 0})}},Kt.preloadModule=function(v,y){if(typeof v=="string")if(y){var b=j(y.as,y.crossOrigin);d.d.m(v,{as:typeof y.as=="string"&&y.as!=="script"?y.as:void 0,crossOrigin:b,integrity:typeof y.integrity=="string"?y.integrity:void 0})}else d.d.m(v)},Kt.requestFormReset=function(v){d.d.r(v)},Kt.unstable_batchedUpdates=function(v,y){return v(y)},Kt.useFormState=function(v,y,b){return m.H.useFormState(v,y,b)},Kt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Kt.version="19.2.6",Kt}var Uf;function Yh(){if(Uf)return ad.exports;Uf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),ad.exports=Bb(),ad.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Gb(){if(Rf)return Ki;Rf=1;var s=qb(),l=zd(),r=Yh();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function j(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function y(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,i=a;;){var o=n.return;if(o===null)break;var c=o.alternate;if(c===null){if(i=o.return,i!==null){n=i;continue}break}if(o.child===c.child){for(c=o.child;c;){if(c===n)return v(o),e;if(c===i)return v(o),a;c=c.sibling}throw Error(d(188))}if(n.return!==i.return)n=o,i=c;else{for(var u=!1,x=o.child;x;){if(x===n){u=!0,n=o,i=c;break}if(x===i){u=!0,i=o,n=c;break}x=x.sibling}if(!u){for(x=c.child;x;){if(x===n){u=!0,n=c,i=o;break}if(x===i){u=!0,i=c,n=o;break}x=x.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==i)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function b(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=b(e),a!==null)return a;e=e.sibling}return null}var g=Object.assign,R=Symbol.for("react.element"),J=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.consumer"),A=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ee=Symbol.for("react.activity"),fe=Symbol.for("react.memo_cache_sentinel"),S=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=S&&e[S]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function T(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case P:return"Fragment";case G:return"Profiler";case k:return"StrictMode";case ie:return"Suspense";case de:return"SuspenseList";case ee:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case A:return e.displayName||"Context";case H:return(e._context.displayName||"Context")+".Consumer";case F:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return a=e.displayName||null,a!==null?a:T(e.type)||"Memo";case Y:a=e._payload,e=e._init;try{return T(e(a))}catch{}}return null}var I=Array.isArray,D=l.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},se=[],oe=-1;function C(e){return{current:e}}function Z(e){0>oe||(e.current=se[oe],se[oe]=null,oe--)}function ue(e,a){oe++,se[oe]=e.current,e.current=a}var xe=C(null),we=C(null),_e=C(null),Se=C(null);function Ke(e,a){switch(ue(_e,a),ue(we,e),ue(xe,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?Fm(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=Fm(a),e=Wm(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Z(xe),ue(xe,e)}function $e(){Z(xe),Z(we),Z(_e)}function Ot(e){e.memoizedState!==null&&ue(Se,e);var a=xe.current,n=Wm(a,e.type);a!==n&&(ue(we,e),ue(xe,n))}function gt(e){we.current===e&&(Z(xe),Z(we)),Se.current===e&&(Z(Se),Vi._currentValue=_)}var Qt,Et;function st(e){if(Qt===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Qt=a&&a[1]||"",Et=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qt+e+Et}var bt=!1;function Ma(e,a){if(!e||bt)return"";bt=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(a){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(K){var Q=K}Reflect.construct(e,[],le)}else{try{le.call()}catch(K){Q=K}e.call(le.prototype)}}else{try{throw Error()}catch(K){Q=K}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(K){if(K&&Q&&typeof K.stack=="string")return[K.stack,Q.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=i.DetermineComponentFrameRoot(),u=c[0],x=c[1];if(u&&x){var z=u.split(`
`),$=x.split(`
`);for(o=i=0;i<z.length&&!z[i].includes("DetermineComponentFrameRoot");)i++;for(;o<$.length&&!$[o].includes("DetermineComponentFrameRoot");)o++;if(i===z.length||o===$.length)for(i=z.length-1,o=$.length-1;1<=i&&0<=o&&z[i]!==$[o];)o--;for(;1<=i&&0<=o;i--,o--)if(z[i]!==$[o]){if(i!==1||o!==1)do if(i--,o--,0>o||z[i]!==$[o]){var te=`
`+z[i].replace(" at new "," at ");return e.displayName&&te.includes("<anonymous>")&&(te=te.replace("<anonymous>",e.displayName)),te}while(1<=i&&0<=o);break}}}finally{bt=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?st(n):""}function pt(e,a){switch(e.tag){case 26:case 27:case 5:return st(e.type);case 16:return st("Lazy");case 13:return e.child!==a&&a!==null?st("Suspense Fallback"):st("Suspense");case 19:return st("SuspenseList");case 0:case 15:return Ma(e.type,!1);case 11:return Ma(e.type.render,!1);case 1:return Ma(e.type,!0);case 31:return st("Activity");default:return""}}function It(e){try{var a="",n=null;do a+=pt(e,n),n=e,e=e.return;while(e);return a}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Ut=Object.prototype.hasOwnProperty,Xt=s.unstable_scheduleCallback,ea=s.unstable_cancelCallback,E=s.unstable_shouldYield,O=s.unstable_requestPaint,re=s.unstable_now,ae=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,Ce=s.unstable_UserBlockingPriority,Ee=s.unstable_NormalPriority,We=s.unstable_LowPriority,pn=s.unstable_IdlePriority,ta=s.log,Qn=s.unstable_setDisableYieldValue,Da=null,ft=null;function Ft(e){if(typeof ta=="function"&&Qn(e),ft&&typeof ft.setStrictMode=="function")try{ft.setStrictMode(Da,e)}catch{}}var q=Math.clz32?Math.clz32:Ue,ce=Math.log,me=Math.LN2;function Ue(e){return e>>>=0,e===0?32:31-(ce(e)/me|0)|0}var Me=256,Pe=262144,Fe=4194304;function Le(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function aa(e,a,n){var i=e.pendingLanes;if(i===0)return 0;var o=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var x=i&134217727;return x!==0?(i=x&~c,i!==0?o=Le(i):(u&=x,u!==0?o=Le(u):n||(n=x&~e,n!==0&&(o=Le(n))))):(x=i&~c,x!==0?o=Le(x):u!==0?o=Le(u):n||(n=i&~e,n!==0&&(o=Le(n)))),o===0?0:a!==0&&a!==o&&(a&c)===0&&(c=o&-o,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:o}function Wt(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function mn(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ot(){var e=Fe;return Fe<<=1,(Fe&62914560)===0&&(Fe=4194304),e}function ni(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Xn(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Ha(e,a,n,i,o,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var x=e.entanglements,z=e.expirationTimes,$=e.hiddenUpdates;for(n=u&~n;0<n;){var te=31-q(n),le=1<<te;x[te]=0,z[te]=-1;var Q=$[te];if(Q!==null)for($[te]=null,te=0;te<Q.length;te++){var K=Q[te];K!==null&&(K.lane&=-536870913)}n&=~le}i!==0&&is(e,i,0),c!==0&&o===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function is(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var i=31-q(a);e.entangledLanes|=a,e.entanglements[i]=e.entanglements[i]|1073741824|n&261930}function N(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var i=31-q(n),o=1<<i;o&a|e[i]&a&&(e[i]|=a),n&=~o}}function ge(e,a){var n=a&-a;return n=(n&42)!==0?1:be(n),(n&(e.suspendedLanes|a))!==0?0:n}function be(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Re(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zt(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:jf(e.type))}function ss(e,a){var n=X.p;try{return X.p=e,a()}finally{X.p=n}}var Aa=Math.random().toString(36).slice(2),Lt="__reactFiber$"+Aa,na="__reactProps$"+Aa,fl="__reactContainer$"+Aa,Yo="__reactEvents$"+Aa,vx="__reactListeners$"+Aa,jx="__reactHandles$"+Aa,Hd="__reactResources$"+Aa,li="__reactMarker$"+Aa;function Vo(e){delete e[Lt],delete e[na],delete e[Yo],delete e[vx],delete e[jx]}function hl(e){var a=e[Lt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[fl]||n[Lt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=lf(e);e!==null;){if(n=e[Lt])return n;e=lf(e)}return a}e=n,n=e.parentNode}return null}function xl(e){if(e=e[Lt]||e[fl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function ii(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function gl(e){var a=e[Hd];return a||(a=e[Hd]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Rt(e){e[li]=!0}var Ld=new Set,qd={};function Zn(e,a){bl(e,a),bl(e+"Capture",a)}function bl(e,a){for(qd[e]=a,e=0;e<a.length;e++)Ld.add(a[e])}var wx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Bd={},Gd={};function Nx(e){return Ut.call(Gd,e)?!0:Ut.call(Bd,e)?!1:wx.test(e)?Gd[e]=!0:(Bd[e]=!0,!1)}function os(e,a,n){if(Nx(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var i=a.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function rs(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Va(e,a,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+i)}}function ja(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Yd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function _x(e,a,n){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var o=i.get,c=i.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return o.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function $o(e){if(!e._valueTracker){var a=Yd(e)?"checked":"value";e._valueTracker=_x(e,a,""+e[a])}}function Vd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),i="";return e&&(i=Yd(e)?e.checked?"true":"false":e.value),e=i,e!==n?(a.setValue(e),!0):!1}function cs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Sx=/[\n"\\]/g;function wa(e){return e.replace(Sx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Qo(e,a,n,i,o,c,u,x){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+ja(a)):e.value!==""+ja(a)&&(e.value=""+ja(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Xo(e,u,ja(a)):n!=null?Xo(e,u,ja(n)):i!=null&&e.removeAttribute("value"),o==null&&c!=null&&(e.defaultChecked=!!c),o!=null&&(e.checked=o&&typeof o!="function"&&typeof o!="symbol"),x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.name=""+ja(x):e.removeAttribute("name")}function $d(e,a,n,i,o,c,u,x){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){$o(e);return}n=n!=null?""+ja(n):"",a=a!=null?""+ja(a):n,x||a===e.value||(e.value=a),e.defaultValue=a}i=i??o,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=x?e.checked:!!i,e.defaultChecked=!!i,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),$o(e)}function Xo(e,a,n){a==="number"&&cs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function yl(e,a,n,i){if(e=e.options,a){a={};for(var o=0;o<n.length;o++)a["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=a.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&i&&(e[n].defaultSelected=!0)}else{for(n=""+ja(n),a=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,i&&(e[o].defaultSelected=!0);return}a!==null||e[o].disabled||(a=e[o])}a!==null&&(a.selected=!0)}}function Qd(e,a,n){if(a!=null&&(a=""+ja(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+ja(n):""}function Xd(e,a,n,i){if(a==null){if(i!=null){if(n!=null)throw Error(d(92));if(I(i)){if(1<i.length)throw Error(d(93));i=i[0]}n=i}n==null&&(n=""),a=n}n=ja(a),e.defaultValue=n,i=e.textContent,i===n&&i!==""&&i!==null&&(e.value=i),$o(e)}function vl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var kx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Zd(e,a,n){var i=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":i?e.setProperty(a,n):typeof n!="number"||n===0||kx.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function Kd(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||a!=null&&a.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var o in a)i=a[o],a.hasOwnProperty(o)&&n[o]!==i&&Zd(e,o,i)}else for(var c in a)a.hasOwnProperty(c)&&Zd(e,c,a[c])}function Zo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),zx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ds(e){return zx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $a(){}var Ko=null;function Jo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var jl=null,wl=null;function Jd(e){var a=xl(e);if(a&&(e=a.stateNode)){var n=e[na]||null;e:switch(e=a.stateNode,a.type){case"input":if(Qo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+wa(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var i=n[a];if(i!==e&&i.form===e.form){var o=i[na]||null;if(!o)throw Error(d(90));Qo(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(a=0;a<n.length;a++)i=n[a],i.form===e.form&&Vd(i)}break e;case"textarea":Qd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&yl(e,!!n.multiple,a,!1)}}}var Fo=!1;function Fd(e,a,n){if(Fo)return e(a,n);Fo=!0;try{var i=e(a);return i}finally{if(Fo=!1,(jl!==null||wl!==null)&&(Ws(),jl&&(a=jl,e=wl,wl=jl=null,Jd(a),e)))for(a=0;a<e.length;a++)Jd(e[a])}}function si(e,a){var n=e.stateNode;if(n===null)return null;var i=n[na]||null;if(i===null)return null;n=i[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var Qa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wo=!1;if(Qa)try{var oi={};Object.defineProperty(oi,"passive",{get:function(){Wo=!0}}),window.addEventListener("test",oi,oi),window.removeEventListener("test",oi,oi)}catch{Wo=!1}var fn=null,Po=null,us=null;function Wd(){if(us)return us;var e,a=Po,n=a.length,i,o="value"in fn?fn.value:fn.textContent,c=o.length;for(e=0;e<n&&a[e]===o[e];e++);var u=n-e;for(i=1;i<=u&&a[n-i]===o[c-i];i++);return us=o.slice(e,1<i?1-i:void 0)}function ps(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function ms(){return!0}function Pd(){return!1}function la(e){function a(n,i,o,c,u){this._reactName=n,this._targetInst=o,this.type=i,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var x in e)e.hasOwnProperty(x)&&(n=e[x],this[x]=n?n(c):c[x]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ms:Pd,this.isPropagationStopped=Pd,this}return g(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ms)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ms)},persist:function(){},isPersistent:ms}),a}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fs=la(Kn),ri=g({},Kn,{view:0,detail:0}),Tx=la(ri),Io,er,ci,hs=g({},ri,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ar,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ci&&(ci&&e.type==="mousemove"?(Io=e.screenX-ci.screenX,er=e.screenY-ci.screenY):er=Io=0,ci=e),Io)},movementY:function(e){return"movementY"in e?e.movementY:er}}),Id=la(hs),Ex=g({},hs,{dataTransfer:0}),Mx=la(Ex),Dx=g({},ri,{relatedTarget:0}),tr=la(Dx),Ax=g({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),Ox=la(Ax),Ux=g({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Rx=la(Ux),Hx=g({},Kn,{data:0}),eu=la(Hx),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Gx(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Bx[e])?!!a[e]:!1}function ar(){return Gx}var Yx=g({},ri,{key:function(e){if(e.key){var a=Lx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=ps(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ar,charCode:function(e){return e.type==="keypress"?ps(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ps(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Vx=la(Yx),$x=g({},hs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),tu=la($x),Qx=g({},ri,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ar}),Xx=la(Qx),Zx=g({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Kx=la(Zx),Jx=g({},hs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Fx=la(Jx),Wx=g({},Kn,{newState:0,oldState:0}),Px=la(Wx),Ix=[9,13,27,32],nr=Qa&&"CompositionEvent"in window,di=null;Qa&&"documentMode"in document&&(di=document.documentMode);var eg=Qa&&"TextEvent"in window&&!di,au=Qa&&(!nr||di&&8<di&&11>=di),nu=" ",lu=!1;function iu(e,a){switch(e){case"keyup":return Ix.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function su(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Nl=!1;function tg(e,a){switch(e){case"compositionend":return su(a);case"keypress":return a.which!==32?null:(lu=!0,nu);case"textInput":return e=a.data,e===nu&&lu?null:e;default:return null}}function ag(e,a){if(Nl)return e==="compositionend"||!nr&&iu(e,a)?(e=Wd(),us=Po=fn=null,Nl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return au&&a.locale!=="ko"?null:a.data;default:return null}}var ng={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ou(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!ng[e.type]:a==="textarea"}function ru(e,a,n,i){jl?wl?wl.push(i):wl=[i]:jl=i,a=lo(a,"onChange"),0<a.length&&(n=new fs("onChange","change",null,n,i),e.push({event:n,listeners:a}))}var ui=null,pi=null;function lg(e){$m(e,0)}function xs(e){var a=ii(e);if(Vd(a))return e}function cu(e,a){if(e==="change")return a}var du=!1;if(Qa){var lr;if(Qa){var ir="oninput"in document;if(!ir){var uu=document.createElement("div");uu.setAttribute("oninput","return;"),ir=typeof uu.oninput=="function"}lr=ir}else lr=!1;du=lr&&(!document.documentMode||9<document.documentMode)}function pu(){ui&&(ui.detachEvent("onpropertychange",mu),pi=ui=null)}function mu(e){if(e.propertyName==="value"&&xs(pi)){var a=[];ru(a,pi,e,Jo(e)),Fd(lg,a)}}function ig(e,a,n){e==="focusin"?(pu(),ui=a,pi=n,ui.attachEvent("onpropertychange",mu)):e==="focusout"&&pu()}function sg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return xs(pi)}function og(e,a){if(e==="click")return xs(a)}function rg(e,a){if(e==="input"||e==="change")return xs(a)}function cg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var ua=typeof Object.is=="function"?Object.is:cg;function mi(e,a){if(ua(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),i=Object.keys(a);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var o=n[i];if(!Ut.call(a,o)||!ua(e[o],a[o]))return!1}return!0}function fu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function hu(e,a){var n=fu(e);e=0;for(var i;n;){if(n.nodeType===3){if(i=e+n.textContent.length,e<=a&&i>=a)return{node:n,offset:a-e};e=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fu(n)}}function xu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?xu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function gu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=cs(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=cs(e.document)}return a}function sr(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var dg=Qa&&"documentMode"in document&&11>=document.documentMode,_l=null,or=null,fi=null,rr=!1;function bu(e,a,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;rr||_l==null||_l!==cs(i)||(i=_l,"selectionStart"in i&&sr(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),fi&&mi(fi,i)||(fi=i,i=lo(or,"onSelect"),0<i.length&&(a=new fs("onSelect","select",null,a,n),e.push({event:a,listeners:i}),a.target=_l)))}function Jn(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Sl={animationend:Jn("Animation","AnimationEnd"),animationiteration:Jn("Animation","AnimationIteration"),animationstart:Jn("Animation","AnimationStart"),transitionrun:Jn("Transition","TransitionRun"),transitionstart:Jn("Transition","TransitionStart"),transitioncancel:Jn("Transition","TransitionCancel"),transitionend:Jn("Transition","TransitionEnd")},cr={},yu={};Qa&&(yu=document.createElement("div").style,"AnimationEvent"in window||(delete Sl.animationend.animation,delete Sl.animationiteration.animation,delete Sl.animationstart.animation),"TransitionEvent"in window||delete Sl.transitionend.transition);function Fn(e){if(cr[e])return cr[e];if(!Sl[e])return e;var a=Sl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in yu)return cr[e]=a[n];return e}var vu=Fn("animationend"),ju=Fn("animationiteration"),wu=Fn("animationstart"),ug=Fn("transitionrun"),pg=Fn("transitionstart"),mg=Fn("transitioncancel"),Nu=Fn("transitionend"),_u=new Map,dr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");dr.push("scrollEnd");function Oa(e,a){_u.set(e,a),Zn(a,[e])}var gs=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Na=[],kl=0,ur=0;function bs(){for(var e=kl,a=ur=kl=0;a<e;){var n=Na[a];Na[a++]=null;var i=Na[a];Na[a++]=null;var o=Na[a];Na[a++]=null;var c=Na[a];if(Na[a++]=null,i!==null&&o!==null){var u=i.pending;u===null?o.next=o:(o.next=u.next,u.next=o),i.pending=o}c!==0&&Su(n,o,c)}}function ys(e,a,n,i){Na[kl++]=e,Na[kl++]=a,Na[kl++]=n,Na[kl++]=i,ur|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function pr(e,a,n,i){return ys(e,a,n,i),vs(e)}function Wn(e,a){return ys(e,null,null,a),vs(e)}function Su(e,a,n){e.lanes|=n;var i=e.alternate;i!==null&&(i.lanes|=n);for(var o=!1,c=e.return;c!==null;)c.childLanes|=n,i=c.alternate,i!==null&&(i.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(o=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,o&&a!==null&&(o=31-q(n),e=c.hiddenUpdates,i=e[o],i===null?e[o]=[a]:i.push(a),a.lane=n|536870912),c):null}function vs(e){if(50<Ri)throw Ri=0,jc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Cl={};function fg(e,a,n,i){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pa(e,a,n,i){return new fg(e,a,n,i)}function mr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Xa(e,a){var n=e.alternate;return n===null?(n=pa(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function ku(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function js(e,a,n,i,o,c){var u=0;if(i=e,typeof e=="function")mr(e)&&(u=1);else if(typeof e=="string")u=yb(e,n,xe.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ee:return e=pa(31,n,a,o),e.elementType=ee,e.lanes=c,e;case P:return Pn(n.children,o,c,a);case k:u=8,o|=24;break;case G:return e=pa(12,n,a,o|2),e.elementType=G,e.lanes=c,e;case ie:return e=pa(13,n,a,o),e.elementType=ie,e.lanes=c,e;case de:return e=pa(19,n,a,o),e.elementType=de,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case A:u=10;break e;case H:u=9;break e;case F:u=11;break e;case U:u=14;break e;case Y:u=16,i=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),i=null}return a=pa(u,n,a,o),a.elementType=e,a.type=i,a.lanes=c,a}function Pn(e,a,n,i){return e=pa(7,e,i,a),e.lanes=n,e}function fr(e,a,n){return e=pa(6,e,null,a),e.lanes=n,e}function Cu(e){var a=pa(18,null,null,0);return a.stateNode=e,a}function hr(e,a,n){return a=pa(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var zu=new WeakMap;function _a(e,a){if(typeof e=="object"&&e!==null){var n=zu.get(e);return n!==void 0?n:(a={value:e,source:a,stack:It(a)},zu.set(e,a),a)}return{value:e,source:a,stack:It(a)}}var zl=[],Tl=0,ws=null,hi=0,Sa=[],ka=0,hn=null,La=1,qa="";function Za(e,a){zl[Tl++]=hi,zl[Tl++]=ws,ws=e,hi=a}function Tu(e,a,n){Sa[ka++]=La,Sa[ka++]=qa,Sa[ka++]=hn,hn=e;var i=La;e=qa;var o=32-q(i)-1;i&=~(1<<o),n+=1;var c=32-q(a)+o;if(30<c){var u=o-o%5;c=(i&(1<<u)-1).toString(32),i>>=u,o-=u,La=1<<32-q(a)+o|n<<o|i,qa=c+e}else La=1<<c|n<<o|i,qa=e}function xr(e){e.return!==null&&(Za(e,1),Tu(e,1,0))}function gr(e){for(;e===ws;)ws=zl[--Tl],zl[Tl]=null,hi=zl[--Tl],zl[Tl]=null;for(;e===hn;)hn=Sa[--ka],Sa[ka]=null,qa=Sa[--ka],Sa[ka]=null,La=Sa[--ka],Sa[ka]=null}function Eu(e,a){Sa[ka++]=La,Sa[ka++]=qa,Sa[ka++]=hn,La=a.id,qa=a.overflow,hn=e}var qt=null,rt=null,Ve=!1,xn=null,Ca=!1,br=Error(d(519));function gn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xi(_a(a,e)),br}function Mu(e){var a=e.stateNode,n=e.type,i=e.memoizedProps;switch(a[Lt]=e,a[na]=i,n){case"dialog":Be("cancel",a),Be("close",a);break;case"iframe":case"object":case"embed":Be("load",a);break;case"video":case"audio":for(n=0;n<Li.length;n++)Be(Li[n],a);break;case"source":Be("error",a);break;case"img":case"image":case"link":Be("error",a),Be("load",a);break;case"details":Be("toggle",a);break;case"input":Be("invalid",a),$d(a,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":Be("invalid",a);break;case"textarea":Be("invalid",a),Xd(a,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||i.suppressHydrationWarning===!0||Km(a.textContent,n)?(i.popover!=null&&(Be("beforetoggle",a),Be("toggle",a)),i.onScroll!=null&&Be("scroll",a),i.onScrollEnd!=null&&Be("scrollend",a),i.onClick!=null&&(a.onclick=$a),a=!0):a=!1,a||gn(e,!0)}function Du(e){for(qt=e.return;qt;)switch(qt.tag){case 5:case 31:case 13:Ca=!1;return;case 27:case 3:Ca=!0;return;default:qt=qt.return}}function El(e){if(e!==qt)return!1;if(!Ve)return Du(e),Ve=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Rc(e.type,e.memoizedProps)),n=!n),n&&rt&&gn(e),Du(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));rt=nf(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));rt=nf(e)}else a===27?(a=rt,Mn(e.type)?(e=Gc,Gc=null,rt=e):rt=a):rt=qt?Ta(e.stateNode.nextSibling):null;return!0}function In(){rt=qt=null,Ve=!1}function yr(){var e=xn;return e!==null&&(ra===null?ra=e:ra.push.apply(ra,e),xn=null),e}function xi(e){xn===null?xn=[e]:xn.push(e)}var vr=C(null),el=null,Ka=null;function bn(e,a,n){ue(vr,a._currentValue),a._currentValue=n}function Ja(e){e._currentValue=vr.current,Z(vr)}function jr(e,a,n){for(;e!==null;){var i=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,i!==null&&(i.childLanes|=a)):i!==null&&(i.childLanes&a)!==a&&(i.childLanes|=a),e===n)break;e=e.return}}function wr(e,a,n,i){var o=e.child;for(o!==null&&(o.return=e);o!==null;){var c=o.dependencies;if(c!==null){var u=o.child;c=c.firstContext;e:for(;c!==null;){var x=c;c=o;for(var z=0;z<a.length;z++)if(x.context===a[z]){c.lanes|=n,x=c.alternate,x!==null&&(x.lanes|=n),jr(c.return,n,e),i||(u=null);break e}c=x.next}}else if(o.tag===18){if(u=o.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),jr(u,n,e),u=null}else u=o.child;if(u!==null)u.return=o;else for(u=o;u!==null;){if(u===e){u=null;break}if(o=u.sibling,o!==null){o.return=u.return,u=o;break}u=u.return}o=u}}function Ml(e,a,n,i){e=null;for(var o=a,c=!1;o!==null;){if(!c){if((o.flags&524288)!==0)c=!0;else if((o.flags&262144)!==0)break}if(o.tag===10){var u=o.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var x=o.type;ua(o.pendingProps.value,u.value)||(e!==null?e.push(x):e=[x])}}else if(o===Se.current){if(u=o.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}o=o.return}e!==null&&wr(a,e,n,i),a.flags|=262144}function Ns(e){for(e=e.firstContext;e!==null;){if(!ua(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function tl(e){el=e,Ka=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Bt(e){return Au(el,e)}function _s(e,a){return el===null&&tl(e),Au(e,a)}function Au(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},Ka===null){if(e===null)throw Error(d(308));Ka=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else Ka=Ka.next=a;return n}var hg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,i){e.push(i)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},xg=s.unstable_scheduleCallback,gg=s.unstable_NormalPriority,Nt={$$typeof:A,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nr(){return{controller:new hg,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&xg(gg,function(){e.controller.abort()})}var bi=null,_r=0,Dl=0,Al=null;function bg(e,a){if(bi===null){var n=bi=[];_r=0,Dl=Cc(),Al={status:"pending",value:void 0,then:function(i){n.push(i)}}}return _r++,a.then(Ou,Ou),a}function Ou(){if(--_r===0&&bi!==null){Al!==null&&(Al.status="fulfilled");var e=bi;bi=null,Dl=0,Al=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function yg(e,a){var n=[],i={status:"pending",value:null,reason:null,then:function(o){n.push(o)}};return e.then(function(){i.status="fulfilled",i.value=a;for(var o=0;o<n.length;o++)(0,n[o])(a)},function(o){for(i.status="rejected",i.reason=o,o=0;o<n.length;o++)(0,n[o])(void 0)}),i}var Uu=D.S;D.S=function(e,a){bm=re(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&bg(e,a),Uu!==null&&Uu(e,a)};var al=C(null);function Sr(){var e=al.current;return e!==null?e:it.pooledCache}function Ss(e,a){a===null?ue(al,al.current):ue(al,a.pool)}function Ru(){var e=Sr();return e===null?null:{parent:Nt._currentValue,pool:e}}var Ol=Error(d(460)),kr=Error(d(474)),ks=Error(d(542)),Cs={then:function(){}};function Hu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Lu(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then($a,$a),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bu(e),e;default:if(typeof a.status=="string")a.then($a,$a);else{if(e=it,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(i){if(a.status==="pending"){var o=a;o.status="fulfilled",o.value=i}},function(i){if(a.status==="pending"){var o=a;o.status="rejected",o.reason=i}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Bu(e),e}throw ll=a,Ol}}function nl(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(ll=n,Ol):n}}var ll=null;function qu(){if(ll===null)throw Error(d(459));var e=ll;return ll=null,e}function Bu(e){if(e===Ol||e===ks)throw Error(d(483))}var Ul=null,yi=0;function zs(e){var a=yi;return yi+=1,Ul===null&&(Ul=[]),Lu(Ul,e,a)}function vi(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function Ts(e,a){throw a.$$typeof===R?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Gu(e){function a(B,M){if(e){var V=B.deletions;V===null?(B.deletions=[M],B.flags|=16):V.push(M)}}function n(B,M){if(!e)return null;for(;M!==null;)a(B,M),M=M.sibling;return null}function i(B){for(var M=new Map;B!==null;)B.key!==null?M.set(B.key,B):M.set(B.index,B),B=B.sibling;return M}function o(B,M){return B=Xa(B,M),B.index=0,B.sibling=null,B}function c(B,M,V){return B.index=V,e?(V=B.alternate,V!==null?(V=V.index,V<M?(B.flags|=67108866,M):V):(B.flags|=67108866,M)):(B.flags|=1048576,M)}function u(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function x(B,M,V,ne){return M===null||M.tag!==6?(M=fr(V,B.mode,ne),M.return=B,M):(M=o(M,V),M.return=B,M)}function z(B,M,V,ne){var ke=V.type;return ke===P?te(B,M,V.props.children,ne,V.key):M!==null&&(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&nl(ke)===M.type)?(M=o(M,V.props),vi(M,V),M.return=B,M):(M=js(V.type,V.key,V.props,null,B.mode,ne),vi(M,V),M.return=B,M)}function $(B,M,V,ne){return M===null||M.tag!==4||M.stateNode.containerInfo!==V.containerInfo||M.stateNode.implementation!==V.implementation?(M=hr(V,B.mode,ne),M.return=B,M):(M=o(M,V.children||[]),M.return=B,M)}function te(B,M,V,ne,ke){return M===null||M.tag!==7?(M=Pn(V,B.mode,ne,ke),M.return=B,M):(M=o(M,V),M.return=B,M)}function le(B,M,V){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=fr(""+M,B.mode,V),M.return=B,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case J:return V=js(M.type,M.key,M.props,null,B.mode,V),vi(V,M),V.return=B,V;case W:return M=hr(M,B.mode,V),M.return=B,M;case Y:return M=nl(M),le(B,M,V)}if(I(M)||L(M))return M=Pn(M,B.mode,V,null),M.return=B,M;if(typeof M.then=="function")return le(B,zs(M),V);if(M.$$typeof===A)return le(B,_s(B,M),V);Ts(B,M)}return null}function Q(B,M,V,ne){var ke=M!==null?M.key:null;if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return ke!==null?null:x(B,M,""+V,ne);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case J:return V.key===ke?z(B,M,V,ne):null;case W:return V.key===ke?$(B,M,V,ne):null;case Y:return V=nl(V),Q(B,M,V,ne)}if(I(V)||L(V))return ke!==null?null:te(B,M,V,ne,null);if(typeof V.then=="function")return Q(B,M,zs(V),ne);if(V.$$typeof===A)return Q(B,M,_s(B,V),ne);Ts(B,V)}return null}function K(B,M,V,ne,ke){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return B=B.get(V)||null,x(M,B,""+ne,ke);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case J:return B=B.get(ne.key===null?V:ne.key)||null,z(M,B,ne,ke);case W:return B=B.get(ne.key===null?V:ne.key)||null,$(M,B,ne,ke);case Y:return ne=nl(ne),K(B,M,V,ne,ke)}if(I(ne)||L(ne))return B=B.get(V)||null,te(M,B,ne,ke,null);if(typeof ne.then=="function")return K(B,M,V,zs(ne),ke);if(ne.$$typeof===A)return K(B,M,V,_s(M,ne),ke);Ts(M,ne)}return null}function je(B,M,V,ne){for(var ke=null,Qe=null,Ne=M,Oe=M=0,Ye=null;Ne!==null&&Oe<V.length;Oe++){Ne.index>Oe?(Ye=Ne,Ne=null):Ye=Ne.sibling;var Xe=Q(B,Ne,V[Oe],ne);if(Xe===null){Ne===null&&(Ne=Ye);break}e&&Ne&&Xe.alternate===null&&a(B,Ne),M=c(Xe,M,Oe),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe,Ne=Ye}if(Oe===V.length)return n(B,Ne),Ve&&Za(B,Oe),ke;if(Ne===null){for(;Oe<V.length;Oe++)Ne=le(B,V[Oe],ne),Ne!==null&&(M=c(Ne,M,Oe),Qe===null?ke=Ne:Qe.sibling=Ne,Qe=Ne);return Ve&&Za(B,Oe),ke}for(Ne=i(Ne);Oe<V.length;Oe++)Ye=K(Ne,B,Oe,V[Oe],ne),Ye!==null&&(e&&Ye.alternate!==null&&Ne.delete(Ye.key===null?Oe:Ye.key),M=c(Ye,M,Oe),Qe===null?ke=Ye:Qe.sibling=Ye,Qe=Ye);return e&&Ne.forEach(function(Rn){return a(B,Rn)}),Ve&&Za(B,Oe),ke}function ze(B,M,V,ne){if(V==null)throw Error(d(151));for(var ke=null,Qe=null,Ne=M,Oe=M=0,Ye=null,Xe=V.next();Ne!==null&&!Xe.done;Oe++,Xe=V.next()){Ne.index>Oe?(Ye=Ne,Ne=null):Ye=Ne.sibling;var Rn=Q(B,Ne,Xe.value,ne);if(Rn===null){Ne===null&&(Ne=Ye);break}e&&Ne&&Rn.alternate===null&&a(B,Ne),M=c(Rn,M,Oe),Qe===null?ke=Rn:Qe.sibling=Rn,Qe=Rn,Ne=Ye}if(Xe.done)return n(B,Ne),Ve&&Za(B,Oe),ke;if(Ne===null){for(;!Xe.done;Oe++,Xe=V.next())Xe=le(B,Xe.value,ne),Xe!==null&&(M=c(Xe,M,Oe),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe);return Ve&&Za(B,Oe),ke}for(Ne=i(Ne);!Xe.done;Oe++,Xe=V.next())Xe=K(Ne,B,Oe,Xe.value,ne),Xe!==null&&(e&&Xe.alternate!==null&&Ne.delete(Xe.key===null?Oe:Xe.key),M=c(Xe,M,Oe),Qe===null?ke=Xe:Qe.sibling=Xe,Qe=Xe);return e&&Ne.forEach(function(Eb){return a(B,Eb)}),Ve&&Za(B,Oe),ke}function lt(B,M,V,ne){if(typeof V=="object"&&V!==null&&V.type===P&&V.key===null&&(V=V.props.children),typeof V=="object"&&V!==null){switch(V.$$typeof){case J:e:{for(var ke=V.key;M!==null;){if(M.key===ke){if(ke=V.type,ke===P){if(M.tag===7){n(B,M.sibling),ne=o(M,V.props.children),ne.return=B,B=ne;break e}}else if(M.elementType===ke||typeof ke=="object"&&ke!==null&&ke.$$typeof===Y&&nl(ke)===M.type){n(B,M.sibling),ne=o(M,V.props),vi(ne,V),ne.return=B,B=ne;break e}n(B,M);break}else a(B,M);M=M.sibling}V.type===P?(ne=Pn(V.props.children,B.mode,ne,V.key),ne.return=B,B=ne):(ne=js(V.type,V.key,V.props,null,B.mode,ne),vi(ne,V),ne.return=B,B=ne)}return u(B);case W:e:{for(ke=V.key;M!==null;){if(M.key===ke)if(M.tag===4&&M.stateNode.containerInfo===V.containerInfo&&M.stateNode.implementation===V.implementation){n(B,M.sibling),ne=o(M,V.children||[]),ne.return=B,B=ne;break e}else{n(B,M);break}else a(B,M);M=M.sibling}ne=hr(V,B.mode,ne),ne.return=B,B=ne}return u(B);case Y:return V=nl(V),lt(B,M,V,ne)}if(I(V))return je(B,M,V,ne);if(L(V)){if(ke=L(V),typeof ke!="function")throw Error(d(150));return V=ke.call(V),ze(B,M,V,ne)}if(typeof V.then=="function")return lt(B,M,zs(V),ne);if(V.$$typeof===A)return lt(B,M,_s(B,V),ne);Ts(B,V)}return typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint"?(V=""+V,M!==null&&M.tag===6?(n(B,M.sibling),ne=o(M,V),ne.return=B,B=ne):(n(B,M),ne=fr(V,B.mode,ne),ne.return=B,B=ne),u(B)):n(B,M)}return function(B,M,V,ne){try{yi=0;var ke=lt(B,M,V,ne);return Ul=null,ke}catch(Ne){if(Ne===Ol||Ne===ks)throw Ne;var Qe=pa(29,Ne,null,B.mode);return Qe.lanes=ne,Qe.return=B,Qe}finally{}}}var il=Gu(!0),Yu=Gu(!1),yn=!1;function Cr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function zr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function vn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function jn(e,a,n){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(Je&2)!==0){var o=i.pending;return o===null?a.next=a:(a.next=o.next,o.next=a),i.pending=a,a=vs(e),Su(e,null,n),a}return ys(e,i,a,n),vs(e)}function ji(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,N(e,n)}}function Tr(e,a){var n=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var o=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?o=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?o=c=a:c=c.next=a}else o=c=a;n={baseState:i.baseState,firstBaseUpdate:o,lastBaseUpdate:c,shared:i.shared,callbacks:i.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Er=!1;function wi(){if(Er){var e=Al;if(e!==null)throw e}}function Ni(e,a,n,i){Er=!1;var o=e.updateQueue;yn=!1;var c=o.firstBaseUpdate,u=o.lastBaseUpdate,x=o.shared.pending;if(x!==null){o.shared.pending=null;var z=x,$=z.next;z.next=null,u===null?c=$:u.next=$,u=z;var te=e.alternate;te!==null&&(te=te.updateQueue,x=te.lastBaseUpdate,x!==u&&(x===null?te.firstBaseUpdate=$:x.next=$,te.lastBaseUpdate=z))}if(c!==null){var le=o.baseState;u=0,te=$=z=null,x=c;do{var Q=x.lane&-536870913,K=Q!==x.lane;if(K?(Ge&Q)===Q:(i&Q)===Q){Q!==0&&Q===Dl&&(Er=!0),te!==null&&(te=te.next={lane:0,tag:x.tag,payload:x.payload,callback:null,next:null});e:{var je=e,ze=x;Q=a;var lt=n;switch(ze.tag){case 1:if(je=ze.payload,typeof je=="function"){le=je.call(lt,le,Q);break e}le=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=ze.payload,Q=typeof je=="function"?je.call(lt,le,Q):je,Q==null)break e;le=g({},le,Q);break e;case 2:yn=!0}}Q=x.callback,Q!==null&&(e.flags|=64,K&&(e.flags|=8192),K=o.callbacks,K===null?o.callbacks=[Q]:K.push(Q))}else K={lane:Q,tag:x.tag,payload:x.payload,callback:x.callback,next:null},te===null?($=te=K,z=le):te=te.next=K,u|=Q;if(x=x.next,x===null){if(x=o.shared.pending,x===null)break;K=x,x=K.next,K.next=null,o.lastBaseUpdate=K,o.shared.pending=null}}while(!0);te===null&&(z=le),o.baseState=z,o.firstBaseUpdate=$,o.lastBaseUpdate=te,c===null&&(o.shared.lanes=0),kn|=u,e.lanes=u,e.memoizedState=le}}function Vu(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function $u(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Vu(n[e],a)}var Rl=C(null),Es=C(0);function Qu(e,a){e=ln,ue(Es,e),ue(Rl,a),ln=e|a.baseLanes}function Mr(){ue(Es,ln),ue(Rl,Rl.current)}function Dr(){ln=Es.current,Z(Rl),Z(Es)}var ma=C(null),za=null;function wn(e){var a=e.alternate;ue(yt,yt.current&1),ue(ma,e),za===null&&(a===null||Rl.current!==null||a.memoizedState!==null)&&(za=e)}function Ar(e){ue(yt,yt.current),ue(ma,e),za===null&&(za=e)}function Xu(e){e.tag===22?(ue(yt,yt.current),ue(ma,e),za===null&&(za=e)):Nn()}function Nn(){ue(yt,yt.current),ue(ma,ma.current)}function fa(e){Z(ma),za===e&&(za=null),Z(yt)}var yt=C(0);function Ms(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||qc(n)||Bc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var Fa=0,Ae=null,at=null,_t=null,Ds=!1,Hl=!1,sl=!1,As=0,_i=0,Ll=null,vg=0;function ht(){throw Error(d(321))}function Or(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!ua(e[n],a[n]))return!1;return!0}function Ur(e,a,n,i,o,c){return Fa=c,Ae=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,D.H=e===null||e.memoizedState===null?Tp:Fr,sl=!1,c=n(i,o),sl=!1,Hl&&(c=Ku(a,n,i,o)),Zu(e),c}function Zu(e){D.H=Ci;var a=at!==null&&at.next!==null;if(Fa=0,_t=at=Ae=null,Ds=!1,_i=0,Ll=null,a)throw Error(d(300));e===null||St||(e=e.dependencies,e!==null&&Ns(e)&&(St=!0))}function Ku(e,a,n,i){Ae=e;var o=0;do{if(Hl&&(Ll=null),_i=0,Hl=!1,25<=o)throw Error(d(301));if(o+=1,_t=at=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}D.H=Ep,c=a(n,i)}while(Hl);return c}function jg(){var e=D.H,a=e.useState()[0];return a=typeof a.then=="function"?Si(a):a,e=e.useState()[0],(at!==null?at.memoizedState:null)!==e&&(Ae.flags|=1024),a}function Rr(){var e=As!==0;return As=0,e}function Hr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function Lr(e){if(Ds){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Ds=!1}Fa=0,_t=at=Ae=null,Hl=!1,_i=As=0,Ll=null}function Pt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _t===null?Ae.memoizedState=_t=e:_t=_t.next=e,_t}function vt(){if(at===null){var e=Ae.alternate;e=e!==null?e.memoizedState:null}else e=at.next;var a=_t===null?Ae.memoizedState:_t.next;if(a!==null)_t=a,at=e;else{if(e===null)throw Ae.alternate===null?Error(d(467)):Error(d(310));at=e,e={memoizedState:at.memoizedState,baseState:at.baseState,baseQueue:at.baseQueue,queue:at.queue,next:null},_t===null?Ae.memoizedState=_t=e:_t=_t.next=e}return _t}function Os(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Si(e){var a=_i;return _i+=1,Ll===null&&(Ll=[]),e=Lu(Ll,e,a),a=Ae,(_t===null?a.memoizedState:_t.next)===null&&(a=a.alternate,D.H=a===null||a.memoizedState===null?Tp:Fr),e}function Us(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Si(e);if(e.$$typeof===A)return Bt(e)}throw Error(d(438,String(e)))}function qr(e){var a=null,n=Ae.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var i=Ae.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(a={data:i.data.map(function(o){return o.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=Os(),Ae.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),i=0;i<e;i++)n[i]=fe;return a.index++,n}function Wa(e,a){return typeof a=="function"?a(e):a}function Rs(e){var a=vt();return Br(a,at,e)}function Br(e,a,n){var i=e.queue;if(i===null)throw Error(d(311));i.lastRenderedReducer=n;var o=e.baseQueue,c=i.pending;if(c!==null){if(o!==null){var u=o.next;o.next=c.next,c.next=u}a.baseQueue=o=c,i.pending=null}if(c=e.baseState,o===null)e.memoizedState=c;else{a=o.next;var x=u=null,z=null,$=a,te=!1;do{var le=$.lane&-536870913;if(le!==$.lane?(Ge&le)===le:(Fa&le)===le){var Q=$.revertLane;if(Q===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),le===Dl&&(te=!0);else if((Fa&Q)===Q){$=$.next,Q===Dl&&(te=!0);continue}else le={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(x=z=le,u=c):z=z.next=le,Ae.lanes|=Q,kn|=Q;le=$.action,sl&&n(c,le),c=$.hasEagerState?$.eagerState:n(c,le)}else Q={lane:le,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},z===null?(x=z=Q,u=c):z=z.next=Q,Ae.lanes|=le,kn|=le;$=$.next}while($!==null&&$!==a);if(z===null?u=c:z.next=x,!ua(c,e.memoizedState)&&(St=!0,te&&(n=Al,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=z,i.lastRenderedState=c}return o===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Gr(e){var a=vt(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var i=n.dispatch,o=n.pending,c=a.memoizedState;if(o!==null){n.pending=null;var u=o=o.next;do c=e(c,u.action),u=u.next;while(u!==o);ua(c,a.memoizedState)||(St=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,i]}function Ju(e,a,n){var i=Ae,o=vt(),c=Ve;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!ua((at||o).memoizedState,n);if(u&&(o.memoizedState=n,St=!0),o=o.queue,$r(Pu.bind(null,i,o,e),[e]),o.getSnapshot!==a||u||_t!==null&&_t.memoizedState.tag&1){if(i.flags|=2048,ql(9,{destroy:void 0},Wu.bind(null,i,o,n,a),null),it===null)throw Error(d(349));c||(Fa&127)!==0||Fu(i,a,n)}return n}function Fu(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=Ae.updateQueue,a===null?(a=Os(),Ae.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function Wu(e,a,n,i){a.value=n,a.getSnapshot=i,Iu(a)&&ep(e)}function Pu(e,a,n){return n(function(){Iu(a)&&ep(e)})}function Iu(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!ua(e,n)}catch{return!0}}function ep(e){var a=Wn(e,2);a!==null&&ca(a,e,2)}function Yr(e){var a=Pt();if(typeof e=="function"){var n=e;if(e=n(),sl){Ft(!0);try{n()}finally{Ft(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:e},a}function tp(e,a,n,i){return e.baseState=n,Br(e,at,typeof i=="function"?i:Wa)}function wg(e,a,n,i,o){if(qs(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};D.T!==null?n(!0):c.isTransition=!1,i(c),n=a.pending,n===null?(c.next=a.pending=c,ap(a,c)):(c.next=n.next,a.pending=n.next=c)}}function ap(e,a){var n=a.action,i=a.payload,o=e.state;if(a.isTransition){var c=D.T,u={};D.T=u;try{var x=n(o,i),z=D.S;z!==null&&z(u,x),np(e,a,x)}catch($){Vr(e,a,$)}finally{c!==null&&u.types!==null&&(c.types=u.types),D.T=c}}else try{c=n(o,i),np(e,a,c)}catch($){Vr(e,a,$)}}function np(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){lp(e,a,i)},function(i){return Vr(e,a,i)}):lp(e,a,n)}function lp(e,a,n){a.status="fulfilled",a.value=n,ip(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,ap(e,n)))}function Vr(e,a,n){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do a.status="rejected",a.reason=n,ip(a),a=a.next;while(a!==i)}e.action=null}function ip(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function sp(e,a){return a}function op(e,a){if(Ve){var n=it.formState;if(n!==null){e:{var i=Ae;if(Ve){if(rt){t:{for(var o=rt,c=Ca;o.nodeType!==8;){if(!c){o=null;break t}if(o=Ta(o.nextSibling),o===null){o=null;break t}}c=o.data,o=c==="F!"||c==="F"?o:null}if(o){rt=Ta(o.nextSibling),i=o.data==="F!";break e}}gn(i)}i=!1}i&&(a=n[0])}}return n=Pt(),n.memoizedState=n.baseState=a,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sp,lastRenderedState:a},n.queue=i,n=kp.bind(null,Ae,i),i.dispatch=n,i=Yr(!1),c=Jr.bind(null,Ae,!1,i.queue),i=Pt(),o={state:a,dispatch:null,action:e,pending:null},i.queue=o,n=wg.bind(null,Ae,o,c,n),o.dispatch=n,i.memoizedState=e,[a,n,!1]}function rp(e){var a=vt();return cp(a,at,e)}function cp(e,a,n){if(a=Br(e,a,sp)[0],e=Rs(Wa)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var i=Si(a)}catch(u){throw u===Ol?ks:u}else i=a;a=vt();var o=a.queue,c=o.dispatch;return n!==a.memoizedState&&(Ae.flags|=2048,ql(9,{destroy:void 0},Ng.bind(null,o,n),null)),[i,c,e]}function Ng(e,a){e.action=a}function dp(e){var a=vt(),n=at;if(n!==null)return cp(a,n,e);vt(),a=a.memoizedState,n=vt();var i=n.queue.dispatch;return n.memoizedState=e,[a,i,!1]}function ql(e,a,n,i){return e={tag:e,create:n,deps:i,inst:a,next:null},a=Ae.updateQueue,a===null&&(a=Os(),Ae.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(i=n.next,n.next=e,e.next=i,a.lastEffect=e),e}function up(){return vt().memoizedState}function Hs(e,a,n,i){var o=Pt();Ae.flags|=e,o.memoizedState=ql(1|a,{destroy:void 0},n,i===void 0?null:i)}function Ls(e,a,n,i){var o=vt();i=i===void 0?null:i;var c=o.memoizedState.inst;at!==null&&i!==null&&Or(i,at.memoizedState.deps)?o.memoizedState=ql(a,c,n,i):(Ae.flags|=e,o.memoizedState=ql(1|a,c,n,i))}function pp(e,a){Hs(8390656,8,e,a)}function $r(e,a){Ls(2048,8,e,a)}function _g(e){Ae.flags|=4;var a=Ae.updateQueue;if(a===null)a=Os(),Ae.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function mp(e){var a=vt().memoizedState;return _g({ref:a,nextImpl:e}),function(){if((Je&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function fp(e,a){return Ls(4,2,e,a)}function hp(e,a){return Ls(4,4,e,a)}function xp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function gp(e,a,n){n=n!=null?n.concat([e]):null,Ls(4,4,xp.bind(null,a,e),n)}function Qr(){}function bp(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;return a!==null&&Or(a,i[1])?i[0]:(n.memoizedState=[e,a],e)}function yp(e,a){var n=vt();a=a===void 0?null:a;var i=n.memoizedState;if(a!==null&&Or(a,i[1]))return i[0];if(i=e(),sl){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[i,a],i}function Xr(e,a,n){return n===void 0||(Fa&1073741824)!==0&&(Ge&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=vm(),Ae.lanes|=e,kn|=e,n)}function vp(e,a,n,i){return ua(n,a)?n:Rl.current!==null?(e=Xr(e,n,i),ua(e,a)||(St=!0),e):(Fa&42)===0||(Fa&1073741824)!==0&&(Ge&261930)===0?(St=!0,e.memoizedState=n):(e=vm(),Ae.lanes|=e,kn|=e,a)}function jp(e,a,n,i,o){var c=X.p;X.p=c!==0&&8>c?c:8;var u=D.T,x={};D.T=x,Jr(e,!1,a,n);try{var z=o(),$=D.S;if($!==null&&$(x,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var te=yg(z,i);ki(e,a,te,ga(e))}else ki(e,a,i,ga(e))}catch(le){ki(e,a,{then:function(){},status:"rejected",reason:le},ga())}finally{X.p=c,u!==null&&x.types!==null&&(u.types=x.types),D.T=u}}function Sg(){}function Zr(e,a,n,i){if(e.tag!==5)throw Error(d(476));var o=wp(e).queue;jp(e,o,a,_,n===null?Sg:function(){return Np(e),n(i)})}function wp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:_},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Np(e){var a=wp(e);a.next===null&&(a=e.alternate.memoizedState),ki(e,a.next.queue,{},ga())}function Kr(){return Bt(Vi)}function _p(){return vt().memoizedState}function Sp(){return vt().memoizedState}function kg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=ga();e=vn(n);var i=jn(a,e,n);i!==null&&(ca(i,a,n),ji(i,a,n)),a={cache:Nr()},e.payload=a;return}a=a.return}}function Cg(e,a,n){var i=ga();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},qs(e)?Cp(a,n):(n=pr(e,a,n,i),n!==null&&(ca(n,e,i),zp(n,a,i)))}function kp(e,a,n){var i=ga();ki(e,a,n,i)}function ki(e,a,n,i){var o={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(qs(e))Cp(a,o);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,x=c(u,n);if(o.hasEagerState=!0,o.eagerState=x,ua(x,u))return ys(e,a,o,0),it===null&&bs(),!1}catch{}finally{}if(n=pr(e,a,o,i),n!==null)return ca(n,e,i),zp(n,a,i),!0}return!1}function Jr(e,a,n,i){if(i={lane:2,revertLane:Cc(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qs(e)){if(a)throw Error(d(479))}else a=pr(e,n,i,2),a!==null&&ca(a,e,2)}function qs(e){var a=e.alternate;return e===Ae||a!==null&&a===Ae}function Cp(e,a){Hl=Ds=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function zp(e,a,n){if((n&4194048)!==0){var i=a.lanes;i&=e.pendingLanes,n|=i,a.lanes=n,N(e,n)}}var Ci={readContext:Bt,use:Us,useCallback:ht,useContext:ht,useEffect:ht,useImperativeHandle:ht,useLayoutEffect:ht,useInsertionEffect:ht,useMemo:ht,useReducer:ht,useRef:ht,useState:ht,useDebugValue:ht,useDeferredValue:ht,useTransition:ht,useSyncExternalStore:ht,useId:ht,useHostTransitionStatus:ht,useFormState:ht,useActionState:ht,useOptimistic:ht,useMemoCache:ht,useCacheRefresh:ht};Ci.useEffectEvent=ht;var Tp={readContext:Bt,use:Us,useCallback:function(e,a){return Pt().memoizedState=[e,a===void 0?null:a],e},useContext:Bt,useEffect:pp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Hs(4194308,4,xp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Hs(4194308,4,e,a)},useInsertionEffect:function(e,a){Hs(4,2,e,a)},useMemo:function(e,a){var n=Pt();a=a===void 0?null:a;var i=e();if(sl){Ft(!0);try{e()}finally{Ft(!1)}}return n.memoizedState=[i,a],i},useReducer:function(e,a,n){var i=Pt();if(n!==void 0){var o=n(a);if(sl){Ft(!0);try{n(a)}finally{Ft(!1)}}}else o=a;return i.memoizedState=i.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},i.queue=e,e=e.dispatch=Cg.bind(null,Ae,e),[i.memoizedState,e]},useRef:function(e){var a=Pt();return e={current:e},a.memoizedState=e},useState:function(e){e=Yr(e);var a=e.queue,n=kp.bind(null,Ae,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Qr,useDeferredValue:function(e,a){var n=Pt();return Xr(n,e,a)},useTransition:function(){var e=Yr(!1);return e=jp.bind(null,Ae,e.queue,!0,!1),Pt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var i=Ae,o=Pt();if(Ve){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),it===null)throw Error(d(349));(Ge&127)!==0||Fu(i,a,n)}o.memoizedState=n;var c={value:n,getSnapshot:a};return o.queue=c,pp(Pu.bind(null,i,c,e),[e]),i.flags|=2048,ql(9,{destroy:void 0},Wu.bind(null,i,c,n,a),null),n},useId:function(){var e=Pt(),a=it.identifierPrefix;if(Ve){var n=qa,i=La;n=(i&~(1<<32-q(i)-1)).toString(32)+n,a="_"+a+"R_"+n,n=As++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=vg++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Kr,useFormState:op,useActionState:op,useOptimistic:function(e){var a=Pt();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Jr.bind(null,Ae,!0,n),n.dispatch=a,[e,a]},useMemoCache:qr,useCacheRefresh:function(){return Pt().memoizedState=kg.bind(null,Ae)},useEffectEvent:function(e){var a=Pt(),n={impl:e};return a.memoizedState=n,function(){if((Je&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Fr={readContext:Bt,use:Us,useCallback:bp,useContext:Bt,useEffect:$r,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:yp,useReducer:Rs,useRef:up,useState:function(){return Rs(Wa)},useDebugValue:Qr,useDeferredValue:function(e,a){var n=vt();return vp(n,at.memoizedState,e,a)},useTransition:function(){var e=Rs(Wa)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:Si(e),a]},useSyncExternalStore:Ju,useId:_p,useHostTransitionStatus:Kr,useFormState:rp,useActionState:rp,useOptimistic:function(e,a){var n=vt();return tp(n,at,e,a)},useMemoCache:qr,useCacheRefresh:Sp};Fr.useEffectEvent=mp;var Ep={readContext:Bt,use:Us,useCallback:bp,useContext:Bt,useEffect:$r,useImperativeHandle:gp,useInsertionEffect:fp,useLayoutEffect:hp,useMemo:yp,useReducer:Gr,useRef:up,useState:function(){return Gr(Wa)},useDebugValue:Qr,useDeferredValue:function(e,a){var n=vt();return at===null?Xr(n,e,a):vp(n,at.memoizedState,e,a)},useTransition:function(){var e=Gr(Wa)[0],a=vt().memoizedState;return[typeof e=="boolean"?e:Si(e),a]},useSyncExternalStore:Ju,useId:_p,useHostTransitionStatus:Kr,useFormState:dp,useActionState:dp,useOptimistic:function(e,a){var n=vt();return at!==null?tp(n,at,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:qr,useCacheRefresh:Sp};Ep.useEffectEvent=mp;function Wr(e,a,n,i){a=e.memoizedState,n=n(i,a),n=n==null?a:g({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Pr={enqueueSetState:function(e,a,n){e=e._reactInternals;var i=ga(),o=vn(i);o.payload=a,n!=null&&(o.callback=n),a=jn(e,o,i),a!==null&&(ca(a,e,i),ji(a,e,i))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var i=ga(),o=vn(i);o.tag=1,o.payload=a,n!=null&&(o.callback=n),a=jn(e,o,i),a!==null&&(ca(a,e,i),ji(a,e,i))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=ga(),i=vn(n);i.tag=2,a!=null&&(i.callback=a),a=jn(e,i,n),a!==null&&(ca(a,e,n),ji(a,e,n))}};function Mp(e,a,n,i,o,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,c,u):a.prototype&&a.prototype.isPureReactComponent?!mi(n,i)||!mi(o,c):!0}function Dp(e,a,n,i){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,i),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,i),a.state!==e&&Pr.enqueueReplaceState(a,a.state,null)}function ol(e,a){var n=a;if("ref"in a){n={};for(var i in a)i!=="ref"&&(n[i]=a[i])}if(e=e.defaultProps){n===a&&(n=g({},n));for(var o in e)n[o]===void 0&&(n[o]=e[o])}return n}function Ap(e){gs(e)}function Op(e){console.error(e)}function Up(e){gs(e)}function Bs(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(i){setTimeout(function(){throw i})}}function Rp(e,a,n){try{var i=e.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(o){setTimeout(function(){throw o})}}function Ir(e,a,n){return n=vn(n),n.tag=3,n.payload={element:null},n.callback=function(){Bs(e,a)},n}function Hp(e){return e=vn(e),e.tag=3,e}function Lp(e,a,n,i){var o=n.type.getDerivedStateFromError;if(typeof o=="function"){var c=i.value;e.payload=function(){return o(c)},e.callback=function(){Rp(a,n,i)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Rp(a,n,i),typeof o!="function"&&(Cn===null?Cn=new Set([this]):Cn.add(this));var x=i.stack;this.componentDidCatch(i.value,{componentStack:x!==null?x:""})})}function zg(e,a,n,i,o){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(a=n.alternate,a!==null&&Ml(a,n,o,!0),n=ma.current,n!==null){switch(n.tag){case 31:case 13:return za===null?Ps():n.alternate===null&&xt===0&&(xt=3),n.flags&=-257,n.flags|=65536,n.lanes=o,i===Cs?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([i]):a.add(i),_c(e,i,o)),!1;case 22:return n.flags|=65536,i===Cs?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([i]):n.add(i)),_c(e,i,o)),!1}throw Error(d(435,n.tag))}return _c(e,i,o),Ps(),!1}if(Ve)return a=ma.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=o,i!==br&&(e=Error(d(422),{cause:i}),xi(_a(e,n)))):(i!==br&&(a=Error(d(423),{cause:i}),xi(_a(a,n))),e=e.current.alternate,e.flags|=65536,o&=-o,e.lanes|=o,i=_a(i,n),o=Ir(e.stateNode,i,o),Tr(e,o),xt!==4&&(xt=2)),!1;var c=Error(d(520),{cause:i});if(c=_a(c,n),Ui===null?Ui=[c]:Ui.push(c),xt!==4&&(xt=2),a===null)return!0;i=_a(i,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,e=Ir(n.stateNode,i,e),Tr(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Cn===null||!Cn.has(c))))return n.flags|=65536,o&=-o,n.lanes|=o,o=Hp(o),Lp(o,e,n,i),Tr(n,o),!1}n=n.return}while(n!==null);return!1}var ec=Error(d(461)),St=!1;function Gt(e,a,n,i){a.child=e===null?Yu(a,null,n,i):il(a,e.child,n,i)}function qp(e,a,n,i,o){n=n.render;var c=a.ref;if("ref"in i){var u={};for(var x in i)x!=="ref"&&(u[x]=i[x])}else u=i;return tl(a),i=Ur(e,a,n,u,c,o),x=Rr(),e!==null&&!St?(Hr(e,a,o),Pa(e,a,o)):(Ve&&x&&xr(a),a.flags|=1,Gt(e,a,i,o),a.child)}function Bp(e,a,n,i,o){if(e===null){var c=n.type;return typeof c=="function"&&!mr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Gp(e,a,c,i,o)):(e=js(n.type,null,i,a,a.mode,o),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!rc(e,o)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:mi,n(u,i)&&e.ref===a.ref)return Pa(e,a,o)}return a.flags|=1,e=Xa(c,i),e.ref=a.ref,e.return=a,a.child=e}function Gp(e,a,n,i,o){if(e!==null){var c=e.memoizedProps;if(mi(c,i)&&e.ref===a.ref)if(St=!1,a.pendingProps=i=c,rc(e,o))(e.flags&131072)!==0&&(St=!0);else return a.lanes=e.lanes,Pa(e,a,o)}return tc(e,a,n,i,o)}function Yp(e,a,n,i){var o=i.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(i=a.child=e.child,o=0;i!==null;)o=o|i.lanes|i.childLanes,i=i.sibling;i=o&~c}else i=0,a.child=null;return Vp(e,a,c,n,i)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ss(a,c!==null?c.cachePool:null),c!==null?Qu(a,c):Mr(),Xu(a);else return i=a.lanes=536870912,Vp(e,a,c!==null?c.baseLanes|n:n,n,i)}else c!==null?(Ss(a,c.cachePool),Qu(a,c),Nn(),a.memoizedState=null):(e!==null&&Ss(a,null),Mr(),Nn());return Gt(e,a,o,n),a.child}function zi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Vp(e,a,n,i,o){var c=Sr();return c=c===null?null:{parent:Nt._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&Ss(a,null),Mr(),Xu(a),e!==null&&Ml(e,a,i,!0),a.childLanes=o,null}function Gs(e,a){return a=Vs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function $p(e,a,n){return il(a,e.child,null,n),e=Gs(a,a.pendingProps),e.flags|=2,fa(a),a.memoizedState=null,e}function Tg(e,a,n){var i=a.pendingProps,o=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(Ve){if(i.mode==="hidden")return e=Gs(a,i),a.lanes=536870912,zi(null,e);if(Ar(a),(e=rt)?(e=af(e,Ca),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:hn!==null?{id:La,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},n=Cu(e),n.return=a,a.child=n,qt=a,rt=null)):e=null,e===null)throw gn(a);return a.lanes=536870912,null}return Gs(a,i)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Ar(a),o)if(a.flags&256)a.flags&=-257,a=$p(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(St||Ml(e,a,n,!1),o=(n&e.childLanes)!==0,St||o){if(i=it,i!==null&&(u=ge(i,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,Wn(e,u),ca(i,e,u),ec;Ps(),a=$p(e,a,n)}else e=c.treeContext,rt=Ta(u.nextSibling),qt=a,Ve=!0,xn=null,Ca=!1,e!==null&&Eu(a,e),a=Gs(a,i),a.flags|=4096;return a}return e=Xa(e.child,{mode:i.mode,children:i.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ys(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function tc(e,a,n,i,o){return tl(a),n=Ur(e,a,n,i,void 0,o),i=Rr(),e!==null&&!St?(Hr(e,a,o),Pa(e,a,o)):(Ve&&i&&xr(a),a.flags|=1,Gt(e,a,n,o),a.child)}function Qp(e,a,n,i,o,c){return tl(a),a.updateQueue=null,n=Ku(a,i,n,o),Zu(e),i=Rr(),e!==null&&!St?(Hr(e,a,c),Pa(e,a,c)):(Ve&&i&&xr(a),a.flags|=1,Gt(e,a,n,c),a.child)}function Xp(e,a,n,i,o){if(tl(a),a.stateNode===null){var c=Cl,u=n.contextType;typeof u=="object"&&u!==null&&(c=Bt(u)),c=new n(i,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Pr,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=i,c.state=a.memoizedState,c.refs={},Cr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Bt(u):Cl,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Wr(a,n,u,i),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&Pr.enqueueReplaceState(c,c.state,null),Ni(a,i,c,o),wi(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!0}else if(e===null){c=a.stateNode;var x=a.memoizedProps,z=ol(n,x);c.props=z;var $=c.context,te=n.contextType;u=Cl,typeof te=="object"&&te!==null&&(u=Bt(te));var le=n.getDerivedStateFromProps;te=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",x=a.pendingProps!==x,te||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(x||$!==u)&&Dp(a,c,i,u),yn=!1;var Q=a.memoizedState;c.state=Q,Ni(a,i,c,o),wi(),$=a.memoizedState,x||Q!==$||yn?(typeof le=="function"&&(Wr(a,n,le,i),$=a.memoizedState),(z=yn||Mp(a,n,z,i,Q,$,u))?(te||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=i,a.memoizedState=$),c.props=i,c.state=$,c.context=u,i=z):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),i=!1)}else{c=a.stateNode,zr(e,a),u=a.memoizedProps,te=ol(n,u),c.props=te,le=a.pendingProps,Q=c.context,$=n.contextType,z=Cl,typeof $=="object"&&$!==null&&(z=Bt($)),x=n.getDerivedStateFromProps,($=typeof x=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||Q!==z)&&Dp(a,c,i,z),yn=!1,Q=a.memoizedState,c.state=Q,Ni(a,i,c,o),wi();var K=a.memoizedState;u!==le||Q!==K||yn||e!==null&&e.dependencies!==null&&Ns(e.dependencies)?(typeof x=="function"&&(Wr(a,n,x,i),K=a.memoizedState),(te=yn||Mp(a,n,te,i,Q,K,z)||e!==null&&e.dependencies!==null&&Ns(e.dependencies))?($||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(i,K,z),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(i,K,z)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=1024),a.memoizedProps=i,a.memoizedState=K),c.props=i,c.state=K,c.context=z,i=te):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&Q===e.memoizedState||(a.flags|=1024),i=!1)}return c=i,Ys(e,a),i=(a.flags&128)!==0,c||i?(c=a.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&i?(a.child=il(a,e.child,null,o),a.child=il(a,null,n,o)):Gt(e,a,n,o),a.memoizedState=c.state,e=a.child):e=Pa(e,a,o),e}function Zp(e,a,n,i){return In(),a.flags|=256,Gt(e,a,n,i),a.child}var ac={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function nc(e){return{baseLanes:e,cachePool:Ru()}}function lc(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=xa),e}function Kp(e,a,n){var i=a.pendingProps,o=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(yt.current&2)!==0),u&&(o=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(Ve){if(o?wn(a):Nn(),(e=rt)?(e=af(e,Ca),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:hn!==null?{id:La,overflow:qa}:null,retryLane:536870912,hydrationErrors:null},n=Cu(e),n.return=a,a.child=n,qt=a,rt=null)):e=null,e===null)throw gn(a);return Bc(e)?a.lanes=32:a.lanes=536870912,null}var x=i.children;return i=i.fallback,o?(Nn(),o=a.mode,x=Vs({mode:"hidden",children:x},o),i=Pn(i,o,n,null),x.return=a,i.return=a,x.sibling=i,a.child=x,i=a.child,i.memoizedState=nc(n),i.childLanes=lc(e,u,n),a.memoizedState=ac,zi(null,i)):(wn(a),ic(a,x))}var z=e.memoizedState;if(z!==null&&(x=z.dehydrated,x!==null)){if(c)a.flags&256?(wn(a),a.flags&=-257,a=sc(e,a,n)):a.memoizedState!==null?(Nn(),a.child=e.child,a.flags|=128,a=null):(Nn(),x=i.fallback,o=a.mode,i=Vs({mode:"visible",children:i.children},o),x=Pn(x,o,n,null),x.flags|=2,i.return=a,x.return=a,i.sibling=x,a.child=i,il(a,e.child,null,n),i=a.child,i.memoizedState=nc(n),i.childLanes=lc(e,u,n),a.memoizedState=ac,a=zi(null,i));else if(wn(a),Bc(x)){if(u=x.nextSibling&&x.nextSibling.dataset,u)var $=u.dgst;u=$,i=Error(d(419)),i.stack="",i.digest=u,xi({value:i,source:null,stack:null}),a=sc(e,a,n)}else if(St||Ml(e,a,n,!1),u=(n&e.childLanes)!==0,St||u){if(u=it,u!==null&&(i=ge(u,n),i!==0&&i!==z.retryLane))throw z.retryLane=i,Wn(e,i),ca(u,e,i),ec;qc(x)||Ps(),a=sc(e,a,n)}else qc(x)?(a.flags|=192,a.child=e.child,a=null):(e=z.treeContext,rt=Ta(x.nextSibling),qt=a,Ve=!0,xn=null,Ca=!1,e!==null&&Eu(a,e),a=ic(a,i.children),a.flags|=4096);return a}return o?(Nn(),x=i.fallback,o=a.mode,z=e.child,$=z.sibling,i=Xa(z,{mode:"hidden",children:i.children}),i.subtreeFlags=z.subtreeFlags&65011712,$!==null?x=Xa($,x):(x=Pn(x,o,n,null),x.flags|=2),x.return=a,i.return=a,i.sibling=x,a.child=i,zi(null,i),i=a.child,x=e.child.memoizedState,x===null?x=nc(n):(o=x.cachePool,o!==null?(z=Nt._currentValue,o=o.parent!==z?{parent:z,pool:z}:o):o=Ru(),x={baseLanes:x.baseLanes|n,cachePool:o}),i.memoizedState=x,i.childLanes=lc(e,u,n),a.memoizedState=ac,zi(e.child,i)):(wn(a),n=e.child,e=n.sibling,n=Xa(n,{mode:"visible",children:i.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function ic(e,a){return a=Vs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Vs(e,a){return e=pa(22,e,null,a),e.lanes=0,e}function sc(e,a,n){return il(a,e.child,null,n),e=ic(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function Jp(e,a,n){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a),jr(e.return,a,n)}function oc(e,a,n,i,o,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:o,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=i,u.tail=n,u.tailMode=o,u.treeForkCount=c)}function Fp(e,a,n){var i=a.pendingProps,o=i.revealOrder,c=i.tail;i=i.children;var u=yt.current,x=(u&2)!==0;if(x?(u=u&1|2,a.flags|=128):u&=1,ue(yt,u),Gt(e,a,i,n),i=Ve?hi:0,!x&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Jp(e,n,a);else if(e.tag===19)Jp(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(o){case"forwards":for(n=a.child,o=null;n!==null;)e=n.alternate,e!==null&&Ms(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=a.child,a.child=null):(o=n.sibling,n.sibling=null),oc(a,!1,o,n,c,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,o=a.child,a.child=null;o!==null;){if(e=o.alternate,e!==null&&Ms(e)===null){a.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}oc(a,!0,n,null,c,i);break;case"together":oc(a,!1,null,null,void 0,i);break;default:a.memoizedState=null}return a.child}function Pa(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),kn|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Ml(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=Xa(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Xa(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function rc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&Ns(e)))}function Eg(e,a,n){switch(a.tag){case 3:Ke(a,a.stateNode.containerInfo),bn(a,Nt,e.memoizedState.cache),In();break;case 27:case 5:Ot(a);break;case 4:Ke(a,a.stateNode.containerInfo);break;case 10:bn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ar(a),null;break;case 13:var i=a.memoizedState;if(i!==null)return i.dehydrated!==null?(wn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?Kp(e,a,n):(wn(a),e=Pa(e,a,n),e!==null?e.sibling:null);wn(a);break;case 19:var o=(e.flags&128)!==0;if(i=(n&a.childLanes)!==0,i||(Ml(e,a,n,!1),i=(n&a.childLanes)!==0),o){if(i)return Fp(e,a,n);a.flags|=128}if(o=a.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(yt,yt.current),i)break;return null;case 22:return a.lanes=0,Yp(e,a,n,a.pendingProps);case 24:bn(a,Nt,e.memoizedState.cache)}return Pa(e,a,n)}function Wp(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)St=!0;else{if(!rc(e,n)&&(a.flags&128)===0)return St=!1,Eg(e,a,n);St=(e.flags&131072)!==0}else St=!1,Ve&&(a.flags&1048576)!==0&&Tu(a,hi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var i=a.pendingProps;if(e=nl(a.elementType),a.type=e,typeof e=="function")mr(e)?(i=ol(e,i),a.tag=1,a=Xp(null,a,e,i,n)):(a.tag=0,a=tc(null,a,e,i,n));else{if(e!=null){var o=e.$$typeof;if(o===F){a.tag=11,a=qp(null,a,e,i,n);break e}else if(o===U){a.tag=14,a=Bp(null,a,e,i,n);break e}}throw a=T(e)||e,Error(d(306,a,""))}}return a;case 0:return tc(e,a,a.type,a.pendingProps,n);case 1:return i=a.type,o=ol(i,a.pendingProps),Xp(e,a,i,o,n);case 3:e:{if(Ke(a,a.stateNode.containerInfo),e===null)throw Error(d(387));i=a.pendingProps;var c=a.memoizedState;o=c.element,zr(e,a),Ni(a,i,null,n);var u=a.memoizedState;if(i=u.cache,bn(a,Nt,i),i!==c.cache&&wr(a,[Nt],n,!0),wi(),i=u.element,c.isDehydrated)if(c={element:i,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Zp(e,a,i,n);break e}else if(i!==o){o=_a(Error(d(424)),a),xi(o),a=Zp(e,a,i,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(rt=Ta(e.firstChild),qt=a,Ve=!0,xn=null,Ca=!0,n=Yu(a,null,i,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(In(),i===o){a=Pa(e,a,n);break e}Gt(e,a,i,n)}a=a.child}return a;case 26:return Ys(e,a),e===null?(n=cf(a.type,null,a.pendingProps,null))?a.memoizedState=n:Ve||(n=a.type,e=a.pendingProps,i=io(_e.current).createElement(n),i[Lt]=a,i[na]=e,Yt(i,n,e),Rt(i),a.stateNode=i):a.memoizedState=cf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ot(a),e===null&&Ve&&(i=a.stateNode=sf(a.type,a.pendingProps,_e.current),qt=a,Ca=!0,o=rt,Mn(a.type)?(Gc=o,rt=Ta(i.firstChild)):rt=o),Gt(e,a,a.pendingProps.children,n),Ys(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&Ve&&((o=i=rt)&&(i=sb(i,a.type,a.pendingProps,Ca),i!==null?(a.stateNode=i,qt=a,rt=Ta(i.firstChild),Ca=!1,o=!0):o=!1),o||gn(a)),Ot(a),o=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,i=c.children,Rc(o,c)?i=null:u!==null&&Rc(o,u)&&(a.flags|=32),a.memoizedState!==null&&(o=Ur(e,a,jg,null,null,n),Vi._currentValue=o),Ys(e,a),Gt(e,a,i,n),a.child;case 6:return e===null&&Ve&&((e=n=rt)&&(n=ob(n,a.pendingProps,Ca),n!==null?(a.stateNode=n,qt=a,rt=null,e=!0):e=!1),e||gn(a)),null;case 13:return Kp(e,a,n);case 4:return Ke(a,a.stateNode.containerInfo),i=a.pendingProps,e===null?a.child=il(a,null,i,n):Gt(e,a,i,n),a.child;case 11:return qp(e,a,a.type,a.pendingProps,n);case 7:return Gt(e,a,a.pendingProps,n),a.child;case 8:return Gt(e,a,a.pendingProps.children,n),a.child;case 12:return Gt(e,a,a.pendingProps.children,n),a.child;case 10:return i=a.pendingProps,bn(a,a.type,i.value),Gt(e,a,i.children,n),a.child;case 9:return o=a.type._context,i=a.pendingProps.children,tl(a),o=Bt(o),i=i(o),a.flags|=1,Gt(e,a,i,n),a.child;case 14:return Bp(e,a,a.type,a.pendingProps,n);case 15:return Gp(e,a,a.type,a.pendingProps,n);case 19:return Fp(e,a,n);case 31:return Tg(e,a,n);case 22:return Yp(e,a,n,a.pendingProps);case 24:return tl(a),i=Bt(Nt),e===null?(o=Sr(),o===null&&(o=it,c=Nr(),o.pooledCache=c,c.refCount++,c!==null&&(o.pooledCacheLanes|=n),o=c),a.memoizedState={parent:i,cache:o},Cr(a),bn(a,Nt,o)):((e.lanes&n)!==0&&(zr(e,a),Ni(a,null,null,n),wi()),o=e.memoizedState,c=a.memoizedState,o.parent!==i?(o={parent:i,cache:i},a.memoizedState=o,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=o),bn(a,Nt,i)):(i=c.cache,bn(a,Nt,i),i!==o.cache&&wr(a,[Nt],n,!0))),Gt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function Ia(e){e.flags|=4}function cc(e,a,n,i,o){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(o&335544128)===o)if(e.stateNode.complete)e.flags|=8192;else if(_m())e.flags|=8192;else throw ll=Cs,kr}else e.flags&=-16777217}function Pp(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!ff(a))if(_m())e.flags|=8192;else throw ll=Cs,kr}function $s(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?ot():536870912,e.lanes|=a,Vl|=a)}function Ti(e,a){if(!Ve)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function ct(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,i=0;if(a)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags&65011712,i|=o.flags&65011712,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,i|=o.subtreeFlags,i|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=i,e.childLanes=n,a}function Mg(e,a,n){var i=a.pendingProps;switch(gr(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ct(a),null;case 1:return ct(a),null;case 3:return n=a.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),a.memoizedState.cache!==i&&(a.flags|=2048),Ja(Nt),$e(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(El(a)?Ia(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,yr())),ct(a),null;case 26:var o=a.type,c=a.memoizedState;return e===null?(Ia(a),c!==null?(ct(a),Pp(a,c)):(ct(a),cc(a,o,null,i,n))):c?c!==e.memoizedState?(Ia(a),ct(a),Pp(a,c)):(ct(a),a.flags&=-16777217):(e=e.memoizedProps,e!==i&&Ia(a),ct(a),cc(a,o,e,i,n)),null;case 27:if(gt(a),n=_e.current,o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Ia(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ct(a),null}e=xe.current,El(a)?Mu(a):(e=sf(o,i,n),a.stateNode=e,Ia(a))}return ct(a),null;case 5:if(gt(a),o=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==i&&Ia(a);else{if(!i){if(a.stateNode===null)throw Error(d(166));return ct(a),null}if(c=xe.current,El(a))Mu(a);else{var u=io(_e.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof i.is=="string"?u.createElement("select",{is:i.is}):u.createElement("select"),i.multiple?c.multiple=!0:i.size&&(c.size=i.size);break;default:c=typeof i.is=="string"?u.createElement(o,{is:i.is}):u.createElement(o)}}c[Lt]=a,c[na]=i;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Yt(c,o,i),o){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Ia(a)}}return ct(a),cc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==i&&Ia(a);else{if(typeof i!="string"&&a.stateNode===null)throw Error(d(166));if(e=_e.current,El(a)){if(e=a.stateNode,n=a.memoizedProps,i=null,o=qt,o!==null)switch(o.tag){case 27:case 5:i=o.memoizedProps}e[Lt]=a,e=!!(e.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||Km(e.nodeValue,n)),e||gn(a,!0)}else e=io(e).createTextNode(i),e[Lt]=a,a.stateNode=e}return ct(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(i=El(a),n!==null){if(e===null){if(!i)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[Lt]=a}else In(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),e=!1}else n=yr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(fa(a),a):(fa(a),null);if((a.flags&128)!==0)throw Error(d(558))}return ct(a),null;case 13:if(i=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(o=El(a),i!==null&&i.dehydrated!==null){if(e===null){if(!o)throw Error(d(318));if(o=a.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(d(317));o[Lt]=a}else In(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ct(a),o=!1}else o=yr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return a.flags&256?(fa(a),a):(fa(a),null)}return fa(a),(a.flags&128)!==0?(a.lanes=n,a):(n=i!==null,e=e!==null&&e.memoizedState!==null,n&&(i=a.child,o=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(o=i.alternate.memoizedState.cachePool.pool),c=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(c=i.memoizedState.cachePool.pool),c!==o&&(i.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),$s(a,a.updateQueue),ct(a),null);case 4:return $e(),e===null&&Mc(a.stateNode.containerInfo),ct(a),null;case 10:return Ja(a.type),ct(a),null;case 19:if(Z(yt),i=a.memoizedState,i===null)return ct(a),null;if(o=(a.flags&128)!==0,c=i.rendering,c===null)if(o)Ti(i,!1);else{if(xt!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=Ms(e),c!==null){for(a.flags|=128,Ti(i,!1),e=c.updateQueue,a.updateQueue=e,$s(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)ku(n,e),n=n.sibling;return ue(yt,yt.current&1|2),Ve&&Za(a,i.treeForkCount),a.child}e=e.sibling}i.tail!==null&&re()>Js&&(a.flags|=128,o=!0,Ti(i,!1),a.lanes=4194304)}else{if(!o)if(e=Ms(c),e!==null){if(a.flags|=128,o=!0,e=e.updateQueue,a.updateQueue=e,$s(a,e),Ti(i,!0),i.tail===null&&i.tailMode==="hidden"&&!c.alternate&&!Ve)return ct(a),null}else 2*re()-i.renderingStartTime>Js&&n!==536870912&&(a.flags|=128,o=!0,Ti(i,!1),a.lanes=4194304);i.isBackwards?(c.sibling=a.child,a.child=c):(e=i.last,e!==null?e.sibling=c:a.child=c,i.last=c)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=re(),e.sibling=null,n=yt.current,ue(yt,o?n&1|2:n&1),Ve&&Za(a,i.treeForkCount),e):(ct(a),null);case 22:case 23:return fa(a),Dr(),i=a.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(a.flags|=8192):i&&(a.flags|=8192),i?(n&536870912)!==0&&(a.flags&128)===0&&(ct(a),a.subtreeFlags&6&&(a.flags|=8192)):ct(a),n=a.updateQueue,n!==null&&$s(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),i=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==n&&(a.flags|=2048),e!==null&&Z(al),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),Ja(Nt),ct(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Dg(e,a){switch(gr(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return Ja(Nt),$e(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return gt(a),null;case 31:if(a.memoizedState!==null){if(fa(a),a.alternate===null)throw Error(d(340));In()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(fa(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));In()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Z(yt),null;case 4:return $e(),null;case 10:return Ja(a.type),null;case 22:case 23:return fa(a),Dr(),e!==null&&Z(al),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return Ja(Nt),null;case 25:return null;default:return null}}function Ip(e,a){switch(gr(a),a.tag){case 3:Ja(Nt),$e();break;case 26:case 27:case 5:gt(a);break;case 4:$e();break;case 31:a.memoizedState!==null&&fa(a);break;case 13:fa(a);break;case 19:Z(yt);break;case 10:Ja(a.type);break;case 22:case 23:fa(a),Dr(),e!==null&&Z(al);break;case 24:Ja(Nt)}}function Ei(e,a){try{var n=a.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var o=i.next;n=o;do{if((n.tag&e)===e){i=void 0;var c=n.create,u=n.inst;i=c(),u.destroy=i}n=n.next}while(n!==o)}}catch(x){et(a,a.return,x)}}function _n(e,a,n){try{var i=a.updateQueue,o=i!==null?i.lastEffect:null;if(o!==null){var c=o.next;i=c;do{if((i.tag&e)===e){var u=i.inst,x=u.destroy;if(x!==void 0){u.destroy=void 0,o=a;var z=n,$=x;try{$()}catch(te){et(o,z,te)}}}i=i.next}while(i!==c)}}catch(te){et(a,a.return,te)}}function em(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{$u(a,n)}catch(i){et(e,e.return,i)}}}function tm(e,a,n){n.props=ol(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(i){et(e,a,i)}}function Mi(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof n=="function"?e.refCleanup=n(i):n.current=i}}catch(o){et(e,a,o)}}function Ba(e,a){var n=e.ref,i=e.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(o){et(e,a,o)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(o){et(e,a,o)}else n.current=null}function am(e){var a=e.type,n=e.memoizedProps,i=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(o){et(e,e.return,o)}}function dc(e,a,n){try{var i=e.stateNode;eb(i,e.type,n,a),i[na]=a}catch(o){et(e,e.return,o)}}function nm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Mn(e.type)||e.tag===4}function uc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Mn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function pc(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=$a));else if(i!==4&&(i===27&&Mn(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(pc(e,a,n),e=e.sibling;e!==null;)pc(e,a,n),e=e.sibling}function Qs(e,a,n){var i=e.tag;if(i===5||i===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(i!==4&&(i===27&&Mn(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qs(e,a,n),e=e.sibling;e!==null;)Qs(e,a,n),e=e.sibling}function lm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var i=e.type,o=a.attributes;o.length;)a.removeAttributeNode(o[0]);Yt(a,i,n),a[Lt]=e,a[na]=n}catch(c){et(e,e.return,c)}}var en=!1,kt=!1,mc=!1,im=typeof WeakSet=="function"?WeakSet:Set,Ht=null;function Ag(e,a){if(e=e.containerInfo,Oc=mo,e=gu(e),sr(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var o=i.anchorOffset,c=i.focusNode;i=i.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,x=-1,z=-1,$=0,te=0,le=e,Q=null;t:for(;;){for(var K;le!==n||o!==0&&le.nodeType!==3||(x=u+o),le!==c||i!==0&&le.nodeType!==3||(z=u+i),le.nodeType===3&&(u+=le.nodeValue.length),(K=le.firstChild)!==null;)Q=le,le=K;for(;;){if(le===e)break t;if(Q===n&&++$===o&&(x=u),Q===c&&++te===i&&(z=u),(K=le.nextSibling)!==null)break;le=Q,Q=le.parentNode}le=K}n=x===-1||z===-1?null:{start:x,end:z}}else n=null}n=n||{start:0,end:0}}else n=null;for(Uc={focusedElem:e,selectionRange:n},mo=!1,Ht=a;Ht!==null;)if(a=Ht,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Ht=e;else for(;Ht!==null;){switch(a=Ht,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)o=e[n],o.ref.impl=o.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,o=c.memoizedProps,c=c.memoizedState,i=n.stateNode;try{var je=ol(n.type,o);e=i.getSnapshotBeforeUpdate(je,c),i.__reactInternalSnapshotBeforeUpdate=e}catch(ze){et(n,n.return,ze)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)Lc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Lc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Ht=e;break}Ht=a.return}}function sm(e,a,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:an(e,n),i&4&&Ei(5,n);break;case 1:if(an(e,n),i&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){et(n,n.return,u)}else{var o=ol(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(o,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){et(n,n.return,u)}}i&64&&em(n),i&512&&Mi(n,n.return);break;case 3:if(an(e,n),i&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{$u(e,a)}catch(u){et(n,n.return,u)}}break;case 27:a===null&&i&4&&lm(n);case 26:case 5:an(e,n),a===null&&i&4&&am(n),i&512&&Mi(n,n.return);break;case 12:an(e,n);break;case 31:an(e,n),i&4&&cm(e,n);break;case 13:an(e,n),i&4&&dm(e,n),i&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yg.bind(null,n),rb(e,n))));break;case 22:if(i=n.memoizedState!==null||en,!i){a=a!==null&&a.memoizedState!==null||kt,o=en;var c=kt;en=i,(kt=a)&&!c?nn(e,n,(n.subtreeFlags&8772)!==0):an(e,n),en=o,kt=c}break;case 30:break;default:an(e,n)}}function om(e){var a=e.alternate;a!==null&&(e.alternate=null,om(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Vo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ut=null,ia=!1;function tn(e,a,n){for(n=n.child;n!==null;)rm(e,a,n),n=n.sibling}function rm(e,a,n){if(ft&&typeof ft.onCommitFiberUnmount=="function")try{ft.onCommitFiberUnmount(Da,n)}catch{}switch(n.tag){case 26:kt||Ba(n,a),tn(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:kt||Ba(n,a);var i=ut,o=ia;Mn(n.type)&&(ut=n.stateNode,ia=!1),tn(e,a,n),Bi(n.stateNode),ut=i,ia=o;break;case 5:kt||Ba(n,a);case 6:if(i=ut,o=ia,ut=null,tn(e,a,n),ut=i,ia=o,ut!==null)if(ia)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(n.stateNode)}catch(c){et(n,a,c)}else try{ut.removeChild(n.stateNode)}catch(c){et(n,a,c)}break;case 18:ut!==null&&(ia?(e=ut,ef(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),Wl(e)):ef(ut,n.stateNode));break;case 4:i=ut,o=ia,ut=n.stateNode.containerInfo,ia=!0,tn(e,a,n),ut=i,ia=o;break;case 0:case 11:case 14:case 15:_n(2,n,a),kt||_n(4,n,a),tn(e,a,n);break;case 1:kt||(Ba(n,a),i=n.stateNode,typeof i.componentWillUnmount=="function"&&tm(n,a,i)),tn(e,a,n);break;case 21:tn(e,a,n);break;case 22:kt=(i=kt)||n.memoizedState!==null,tn(e,a,n),kt=i;break;default:tn(e,a,n)}}function cm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wl(e)}catch(n){et(a,a.return,n)}}}function dm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wl(e)}catch(n){et(a,a.return,n)}}function Og(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new im),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new im),a;default:throw Error(d(435,e.tag))}}function Xs(e,a){var n=Og(e);a.forEach(function(i){if(!n.has(i)){n.add(i);var o=Vg.bind(null,e,i);i.then(o,o)}})}function sa(e,a){var n=a.deletions;if(n!==null)for(var i=0;i<n.length;i++){var o=n[i],c=e,u=a,x=u;e:for(;x!==null;){switch(x.tag){case 27:if(Mn(x.type)){ut=x.stateNode,ia=!1;break e}break;case 5:ut=x.stateNode,ia=!1;break e;case 3:case 4:ut=x.stateNode.containerInfo,ia=!0;break e}x=x.return}if(ut===null)throw Error(d(160));rm(c,u,o),ut=null,ia=!1,c=o.alternate,c!==null&&(c.return=null),o.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)um(a,e),a=a.sibling}var Ua=null;function um(e,a){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sa(a,e),oa(e),i&4&&(_n(3,e,e.return),Ei(3,e),_n(5,e,e.return));break;case 1:sa(a,e),oa(e),i&512&&(kt||n===null||Ba(n,n.return)),i&64&&en&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var o=Ua;if(sa(a,e),oa(e),i&512&&(kt||n===null||Ba(n,n.return)),i&4){var c=n!==null?n.memoizedState:null;if(i=e.memoizedState,n===null)if(i===null)if(e.stateNode===null){e:{i=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(i){case"title":c=o.getElementsByTagName("title")[0],(!c||c[li]||c[Lt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=o.createElement(i),o.head.insertBefore(c,o.querySelector("head > title"))),Yt(c,i,n),c[Lt]=e,Rt(c),i=c;break e;case"link":var u=pf("link","href",o).get(i+(n.href||""));if(u){for(var x=0;x<u.length;x++)if(c=u[x],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(x,1);break t}}c=o.createElement(i),Yt(c,i,n),o.head.appendChild(c);break;case"meta":if(u=pf("meta","content",o).get(i+(n.content||""))){for(x=0;x<u.length;x++)if(c=u[x],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(x,1);break t}}c=o.createElement(i),Yt(c,i,n),o.head.appendChild(c);break;default:throw Error(d(468,i))}c[Lt]=e,Rt(c),i=c}e.stateNode=i}else mf(o,e.type,e.stateNode);else e.stateNode=uf(o,i,e.memoizedProps);else c!==i?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,i===null?mf(o,e.type,e.stateNode):uf(o,i,e.memoizedProps)):i===null&&e.stateNode!==null&&dc(e,e.memoizedProps,n.memoizedProps)}break;case 27:sa(a,e),oa(e),i&512&&(kt||n===null||Ba(n,n.return)),n!==null&&i&4&&dc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(sa(a,e),oa(e),i&512&&(kt||n===null||Ba(n,n.return)),e.flags&32){o=e.stateNode;try{vl(o,"")}catch(je){et(e,e.return,je)}}i&4&&e.stateNode!=null&&(o=e.memoizedProps,dc(e,o,n!==null?n.memoizedProps:o)),i&1024&&(mc=!0);break;case 6:if(sa(a,e),oa(e),i&4){if(e.stateNode===null)throw Error(d(162));i=e.memoizedProps,n=e.stateNode;try{n.nodeValue=i}catch(je){et(e,e.return,je)}}break;case 3:if(ro=null,o=Ua,Ua=so(a.containerInfo),sa(a,e),Ua=o,oa(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Wl(a.containerInfo)}catch(je){et(e,e.return,je)}mc&&(mc=!1,pm(e));break;case 4:i=Ua,Ua=so(e.stateNode.containerInfo),sa(a,e),oa(e),Ua=i;break;case 12:sa(a,e),oa(e);break;case 31:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xs(e,i)));break;case 13:sa(a,e),oa(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Ks=re()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xs(e,i)));break;case 22:o=e.memoizedState!==null;var z=n!==null&&n.memoizedState!==null,$=en,te=kt;if(en=$||o,kt=te||z,sa(a,e),kt=te,en=$,oa(e),i&8192)e:for(a=e.stateNode,a._visibility=o?a._visibility&-2:a._visibility|1,o&&(n===null||z||en||kt||rl(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){z=n=a;try{if(c=z.stateNode,o)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{x=z.stateNode;var le=z.memoizedProps.style,Q=le!=null&&le.hasOwnProperty("display")?le.display:null;x.style.display=Q==null||typeof Q=="boolean"?"":(""+Q).trim()}}catch(je){et(z,z.return,je)}}}else if(a.tag===6){if(n===null){z=a;try{z.stateNode.nodeValue=o?"":z.memoizedProps}catch(je){et(z,z.return,je)}}}else if(a.tag===18){if(n===null){z=a;try{var K=z.stateNode;o?tf(K,!0):tf(z.stateNode,!1)}catch(je){et(z,z.return,je)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}i&4&&(i=e.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,Xs(e,n))));break;case 19:sa(a,e),oa(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,Xs(e,i)));break;case 30:break;case 21:break;default:sa(a,e),oa(e)}}function oa(e){var a=e.flags;if(a&2){try{for(var n,i=e.return;i!==null;){if(nm(i)){n=i;break}i=i.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var o=n.stateNode,c=uc(e);Qs(e,c,o);break;case 5:var u=n.stateNode;n.flags&32&&(vl(u,""),n.flags&=-33);var x=uc(e);Qs(e,x,u);break;case 3:case 4:var z=n.stateNode.containerInfo,$=uc(e);pc(e,$,z);break;default:throw Error(d(161))}}catch(te){et(e,e.return,te)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function pm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;pm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function an(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)sm(e,a.alternate,a),a=a.sibling}function rl(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:_n(4,a,a.return),rl(a);break;case 1:Ba(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&tm(a,a.return,n),rl(a);break;case 27:Bi(a.stateNode);case 26:case 5:Ba(a,a.return),rl(a);break;case 22:a.memoizedState===null&&rl(a);break;case 30:rl(a);break;default:rl(a)}e=e.sibling}}function nn(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var i=a.alternate,o=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:nn(o,c,n),Ei(4,c);break;case 1:if(nn(o,c,n),i=c,o=i.stateNode,typeof o.componentDidMount=="function")try{o.componentDidMount()}catch($){et(i,i.return,$)}if(i=c,o=i.updateQueue,o!==null){var x=i.stateNode;try{var z=o.shared.hiddenCallbacks;if(z!==null)for(o.shared.hiddenCallbacks=null,o=0;o<z.length;o++)Vu(z[o],x)}catch($){et(i,i.return,$)}}n&&u&64&&em(c),Mi(c,c.return);break;case 27:lm(c);case 26:case 5:nn(o,c,n),n&&i===null&&u&4&&am(c),Mi(c,c.return);break;case 12:nn(o,c,n);break;case 31:nn(o,c,n),n&&u&4&&cm(o,c);break;case 13:nn(o,c,n),n&&u&4&&dm(o,c);break;case 22:c.memoizedState===null&&nn(o,c,n),Mi(c,c.return);break;case 30:break;default:nn(o,c,n)}a=a.sibling}}function fc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&gi(n))}function hc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&gi(e))}function Ra(e,a,n,i){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)mm(e,a,n,i),a=a.sibling}function mm(e,a,n,i){var o=a.flags;switch(a.tag){case 0:case 11:case 15:Ra(e,a,n,i),o&2048&&Ei(9,a);break;case 1:Ra(e,a,n,i);break;case 3:Ra(e,a,n,i),o&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&gi(e)));break;case 12:if(o&2048){Ra(e,a,n,i),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,x=c.onPostCommit;typeof x=="function"&&x(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){et(a,a.return,z)}}else Ra(e,a,n,i);break;case 31:Ra(e,a,n,i);break;case 13:Ra(e,a,n,i);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Ra(e,a,n,i):Di(e,a):c._visibility&2?Ra(e,a,n,i):(c._visibility|=2,Bl(e,a,n,i,(a.subtreeFlags&10256)!==0||!1)),o&2048&&fc(u,a);break;case 24:Ra(e,a,n,i),o&2048&&hc(a.alternate,a);break;default:Ra(e,a,n,i)}}function Bl(e,a,n,i,o){for(o=o&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,x=n,z=i,$=u.flags;switch(u.tag){case 0:case 11:case 15:Bl(c,u,x,z,o),Ei(8,u);break;case 23:break;case 22:var te=u.stateNode;u.memoizedState!==null?te._visibility&2?Bl(c,u,x,z,o):Di(c,u):(te._visibility|=2,Bl(c,u,x,z,o)),o&&$&2048&&fc(u.alternate,u);break;case 24:Bl(c,u,x,z,o),o&&$&2048&&hc(u.alternate,u);break;default:Bl(c,u,x,z,o)}a=a.sibling}}function Di(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,i=a,o=i.flags;switch(i.tag){case 22:Di(n,i),o&2048&&fc(i.alternate,i);break;case 24:Di(n,i),o&2048&&hc(i.alternate,i);break;default:Di(n,i)}a=a.sibling}}var Ai=8192;function Gl(e,a,n){if(e.subtreeFlags&Ai)for(e=e.child;e!==null;)fm(e,a,n),e=e.sibling}function fm(e,a,n){switch(e.tag){case 26:Gl(e,a,n),e.flags&Ai&&e.memoizedState!==null&&vb(n,Ua,e.memoizedState,e.memoizedProps);break;case 5:Gl(e,a,n);break;case 3:case 4:var i=Ua;Ua=so(e.stateNode.containerInfo),Gl(e,a,n),Ua=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Ai,Ai=16777216,Gl(e,a,n),Ai=i):Gl(e,a,n));break;default:Gl(e,a,n)}}function hm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function Oi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Ht=i,gm(i,e)}hm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)xm(e),e=e.sibling}function xm(e){switch(e.tag){case 0:case 11:case 15:Oi(e),e.flags&2048&&_n(9,e,e.return);break;case 3:Oi(e);break;case 12:Oi(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Zs(e)):Oi(e);break;default:Oi(e)}}function Zs(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var i=a[n];Ht=i,gm(i,e)}hm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:_n(8,a,a.return),Zs(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Zs(a));break;default:Zs(a)}e=e.sibling}}function gm(e,a){for(;Ht!==null;){var n=Ht;switch(n.tag){case 0:case 11:case 15:_n(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:gi(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,Ht=i;else e:for(n=e;Ht!==null;){i=Ht;var o=i.sibling,c=i.return;if(om(i),i===n){Ht=null;break e}if(o!==null){o.return=c,Ht=o;break e}Ht=c}}}var Ug={getCacheForType:function(e){var a=Bt(Nt),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Bt(Nt).controller.signal}},Rg=typeof WeakMap=="function"?WeakMap:Map,Je=0,it=null,qe=null,Ge=0,Ie=0,ha=null,Sn=!1,Yl=!1,xc=!1,ln=0,xt=0,kn=0,cl=0,gc=0,xa=0,Vl=0,Ui=null,ra=null,bc=!1,Ks=0,bm=0,Js=1/0,Fs=null,Cn=null,Mt=0,zn=null,$l=null,sn=0,yc=0,vc=null,ym=null,Ri=0,jc=null;function ga(){return(Je&2)!==0&&Ge!==0?Ge&-Ge:D.T!==null?Cc():Zt()}function vm(){if(xa===0)if((Ge&536870912)===0||Ve){var e=Pe;Pe<<=1,(Pe&3932160)===0&&(Pe=262144),xa=e}else xa=536870912;return e=ma.current,e!==null&&(e.flags|=32),xa}function ca(e,a,n){(e===it&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(Ql(e,0),Tn(e,Ge,xa,!1)),Xn(e,n),((Je&2)===0||e!==it)&&(e===it&&((Je&2)===0&&(cl|=n),xt===4&&Tn(e,Ge,xa,!1)),Ga(e))}function jm(e,a,n){if((Je&6)!==0)throw Error(d(327));var i=!n&&(a&127)===0&&(a&e.expiredLanes)===0||Wt(e,a),o=i?qg(e,a):Nc(e,a,!0),c=i;do{if(o===0){Yl&&!i&&Tn(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!Hg(n)){o=Nc(e,a,!1),c=!1;continue}if(o===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var x=e;o=Ui;var z=x.current.memoizedState.isDehydrated;if(z&&(Ql(x,u).flags|=256),u=Nc(x,u,!1),u!==2){if(xc&&!z){x.errorRecoveryDisabledLanes|=c,cl|=c,o=4;break e}c=ra,ra=o,c!==null&&(ra===null?ra=c:ra.push.apply(ra,c))}o=u}if(c=!1,o!==2)continue}}if(o===1){Ql(e,0),Tn(e,a,0,!0);break}e:{switch(i=e,c=o,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:Tn(i,a,xa,!Sn);break e;case 2:ra=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(o=Ks+300-re(),10<o)){if(Tn(i,a,xa,!Sn),aa(i,0,!0)!==0)break e;sn=a,i.timeoutHandle=Pm(wm.bind(null,i,n,ra,Fs,bc,a,xa,cl,Vl,Sn,c,"Throttled",-0,0),o);break e}wm(i,n,ra,Fs,bc,a,xa,cl,Vl,Sn,c,null,-0,0)}}break}while(!0);Ga(e)}function wm(e,a,n,i,o,c,u,x,z,$,te,le,Q,K){if(e.timeoutHandle=-1,le=a.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$a},fm(a,c,le);var je=(c&62914560)===c?Ks-re():(c&4194048)===c?bm-re():0;if(je=jb(le,je),je!==null){sn=c,e.cancelPendingCommit=je(Em.bind(null,e,a,c,n,i,o,u,x,z,te,le,null,Q,K)),Tn(e,c,u,!$);return}}Em(e,a,c,n,i,o,u,x,z)}function Hg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var o=n[i],c=o.getSnapshot;o=o.value;try{if(!ua(c(),o))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Tn(e,a,n,i){a&=~gc,a&=~cl,e.suspendedLanes|=a,e.pingedLanes&=~a,i&&(e.warmLanes|=a),i=e.expirationTimes;for(var o=a;0<o;){var c=31-q(o),u=1<<c;i[c]=-1,o&=~u}n!==0&&is(e,n,a)}function Ws(){return(Je&6)===0?(Hi(0),!1):!0}function wc(){if(qe!==null){if(Ie===0)var e=qe.return;else e=qe,Ka=el=null,Lr(e),Ul=null,yi=0,e=qe;for(;e!==null;)Ip(e.alternate,e),e=e.return;qe=null}}function Ql(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,nb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),sn=0,wc(),it=e,qe=n=Xa(e.current,null),Ge=a,Ie=0,ha=null,Sn=!1,Yl=Wt(e,a),xc=!1,Vl=xa=gc=cl=kn=xt=0,ra=Ui=null,bc=!1,(a&8)!==0&&(a|=a&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=a;0<i;){var o=31-q(i),c=1<<o;a|=e[o],i&=~c}return ln=a,bs(),n}function Nm(e,a){Ae=null,D.H=Ci,a===Ol||a===ks?(a=qu(),Ie=3):a===kr?(a=qu(),Ie=4):Ie=a===ec?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,ha=a,qe===null&&(xt=1,Bs(e,_a(a,e.current)))}function _m(){var e=ma.current;return e===null?!0:(Ge&4194048)===Ge?za===null:(Ge&62914560)===Ge||(Ge&536870912)!==0?e===za:!1}function Sm(){var e=D.H;return D.H=Ci,e===null?Ci:e}function km(){var e=D.A;return D.A=Ug,e}function Ps(){xt=4,Sn||(Ge&4194048)!==Ge&&ma.current!==null||(Yl=!0),(kn&134217727)===0&&(cl&134217727)===0||it===null||Tn(it,Ge,xa,!1)}function Nc(e,a,n){var i=Je;Je|=2;var o=Sm(),c=km();(it!==e||Ge!==a)&&(Fs=null,Ql(e,a)),a=!1;var u=xt;e:do try{if(Ie!==0&&qe!==null){var x=qe,z=ha;switch(Ie){case 8:wc(),u=6;break e;case 3:case 2:case 9:case 6:ma.current===null&&(a=!0);var $=Ie;if(Ie=0,ha=null,Xl(e,x,z,$),n&&Yl){u=0;break e}break;default:$=Ie,Ie=0,ha=null,Xl(e,x,z,$)}}Lg(),u=xt;break}catch(te){Nm(e,te)}while(!0);return a&&e.shellSuspendCounter++,Ka=el=null,Je=i,D.H=o,D.A=c,qe===null&&(it=null,Ge=0,bs()),u}function Lg(){for(;qe!==null;)Cm(qe)}function qg(e,a){var n=Je;Je|=2;var i=Sm(),o=km();it!==e||Ge!==a?(Fs=null,Js=re()+500,Ql(e,a)):Yl=Wt(e,a);e:do try{if(Ie!==0&&qe!==null){a=qe;var c=ha;t:switch(Ie){case 1:Ie=0,ha=null,Xl(e,a,c,1);break;case 2:case 9:if(Hu(c)){Ie=0,ha=null,zm(a);break}a=function(){Ie!==2&&Ie!==9||it!==e||(Ie=7),Ga(e)},c.then(a,a);break e;case 3:Ie=7;break e;case 4:Ie=5;break e;case 7:Hu(c)?(Ie=0,ha=null,zm(a)):(Ie=0,ha=null,Xl(e,a,c,7));break;case 5:var u=null;switch(qe.tag){case 26:u=qe.memoizedState;case 5:case 27:var x=qe;if(u?ff(u):x.stateNode.complete){Ie=0,ha=null;var z=x.sibling;if(z!==null)qe=z;else{var $=x.return;$!==null?(qe=$,Is($)):qe=null}break t}}Ie=0,ha=null,Xl(e,a,c,5);break;case 6:Ie=0,ha=null,Xl(e,a,c,6);break;case 8:wc(),xt=6;break e;default:throw Error(d(462))}}Bg();break}catch(te){Nm(e,te)}while(!0);return Ka=el=null,D.H=i,D.A=o,Je=n,qe!==null?0:(it=null,Ge=0,bs(),xt)}function Bg(){for(;qe!==null&&!E();)Cm(qe)}function Cm(e){var a=Wp(e.alternate,e,ln);e.memoizedProps=e.pendingProps,a===null?Is(e):qe=a}function zm(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Qp(n,a,a.pendingProps,a.type,void 0,Ge);break;case 11:a=Qp(n,a,a.pendingProps,a.type.render,a.ref,Ge);break;case 5:Lr(a);default:Ip(n,a),a=qe=ku(a,ln),a=Wp(n,a,ln)}e.memoizedProps=e.pendingProps,a===null?Is(e):qe=a}function Xl(e,a,n,i){Ka=el=null,Lr(a),Ul=null,yi=0;var o=a.return;try{if(zg(e,o,a,n,Ge)){xt=1,Bs(e,_a(n,e.current)),qe=null;return}}catch(c){if(o!==null)throw qe=o,c;xt=1,Bs(e,_a(n,e.current)),qe=null;return}a.flags&32768?(Ve||i===1?e=!0:Yl||(Ge&536870912)!==0?e=!1:(Sn=e=!0,(i===2||i===9||i===3||i===6)&&(i=ma.current,i!==null&&i.tag===13&&(i.flags|=16384))),Tm(a,e)):Is(a)}function Is(e){var a=e;do{if((a.flags&32768)!==0){Tm(a,Sn);return}e=a.return;var n=Mg(a.alternate,a,ln);if(n!==null){qe=n;return}if(a=a.sibling,a!==null){qe=a;return}qe=a=e}while(a!==null);xt===0&&(xt=5)}function Tm(e,a){do{var n=Dg(e.alternate,e);if(n!==null){n.flags&=32767,qe=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){qe=e;return}qe=e=n}while(e!==null);xt=6,qe=null}function Em(e,a,n,i,o,c,u,x,z){e.cancelPendingCommit=null;do eo();while(Mt!==0);if((Je&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=ur,Ha(e,n,c,u,x,z),e===it&&(qe=it=null,Ge=0),$l=a,zn=e,sn=n,yc=c,vc=o,ym=i,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,$g(Ee,function(){return Um(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||i){i=D.T,D.T=null,o=X.p,X.p=2,u=Je,Je|=4;try{Ag(e,a,n)}finally{Je=u,X.p=o,D.T=i}}Mt=1,Mm(),Dm(),Am()}}function Mm(){if(Mt===1){Mt=0;var e=zn,a=$l,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=D.T,D.T=null;var i=X.p;X.p=2;var o=Je;Je|=4;try{um(a,e);var c=Uc,u=gu(e.containerInfo),x=c.focusedElem,z=c.selectionRange;if(u!==x&&x&&x.ownerDocument&&xu(x.ownerDocument.documentElement,x)){if(z!==null&&sr(x)){var $=z.start,te=z.end;if(te===void 0&&(te=$),"selectionStart"in x)x.selectionStart=$,x.selectionEnd=Math.min(te,x.value.length);else{var le=x.ownerDocument||document,Q=le&&le.defaultView||window;if(Q.getSelection){var K=Q.getSelection(),je=x.textContent.length,ze=Math.min(z.start,je),lt=z.end===void 0?ze:Math.min(z.end,je);!K.extend&&ze>lt&&(u=lt,lt=ze,ze=u);var B=hu(x,ze),M=hu(x,lt);if(B&&M&&(K.rangeCount!==1||K.anchorNode!==B.node||K.anchorOffset!==B.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var V=le.createRange();V.setStart(B.node,B.offset),K.removeAllRanges(),ze>lt?(K.addRange(V),K.extend(M.node,M.offset)):(V.setEnd(M.node,M.offset),K.addRange(V))}}}}for(le=[],K=x;K=K.parentNode;)K.nodeType===1&&le.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof x.focus=="function"&&x.focus(),x=0;x<le.length;x++){var ne=le[x];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}mo=!!Oc,Uc=Oc=null}finally{Je=o,X.p=i,D.T=n}}e.current=a,Mt=2}}function Dm(){if(Mt===2){Mt=0;var e=zn,a=$l,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=D.T,D.T=null;var i=X.p;X.p=2;var o=Je;Je|=4;try{sm(e,a.alternate,a)}finally{Je=o,X.p=i,D.T=n}}Mt=3}}function Am(){if(Mt===4||Mt===3){Mt=0,O();var e=zn,a=$l,n=sn,i=ym;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Mt=5:(Mt=0,$l=zn=null,Om(e,e.pendingLanes));var o=e.pendingLanes;if(o===0&&(Cn=null),Re(n),a=a.stateNode,ft&&typeof ft.onCommitFiberRoot=="function")try{ft.onCommitFiberRoot(Da,a,void 0,(a.current.flags&128)===128)}catch{}if(i!==null){a=D.T,o=X.p,X.p=2,D.T=null;try{for(var c=e.onRecoverableError,u=0;u<i.length;u++){var x=i[u];c(x.value,{componentStack:x.stack})}}finally{D.T=a,X.p=o}}(sn&3)!==0&&eo(),Ga(e),o=e.pendingLanes,(n&261930)!==0&&(o&42)!==0?e===jc?Ri++:(Ri=0,jc=e):Ri=0,Hi(0)}}function Om(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,gi(a)))}function eo(){return Mm(),Dm(),Am(),Um()}function Um(){if(Mt!==5)return!1;var e=zn,a=yc;yc=0;var n=Re(sn),i=D.T,o=X.p;try{X.p=32>n?32:n,D.T=null,n=vc,vc=null;var c=zn,u=sn;if(Mt=0,$l=zn=null,sn=0,(Je&6)!==0)throw Error(d(331));var x=Je;if(Je|=4,xm(c.current),mm(c,c.current,u,n),Je=x,Hi(0,!1),ft&&typeof ft.onPostCommitFiberRoot=="function")try{ft.onPostCommitFiberRoot(Da,c)}catch{}return!0}finally{X.p=o,D.T=i,Om(e,a)}}function Rm(e,a,n){a=_a(n,a),a=Ir(e.stateNode,a,2),e=jn(e,a,2),e!==null&&(Xn(e,2),Ga(e))}function et(e,a,n){if(e.tag===3)Rm(e,e,n);else for(;a!==null;){if(a.tag===3){Rm(a,e,n);break}else if(a.tag===1){var i=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cn===null||!Cn.has(i))){e=_a(n,e),n=Hp(2),i=jn(a,n,2),i!==null&&(Lp(n,i,a,e),Xn(i,2),Ga(i));break}}a=a.return}}function _c(e,a,n){var i=e.pingCache;if(i===null){i=e.pingCache=new Rg;var o=new Set;i.set(a,o)}else o=i.get(a),o===void 0&&(o=new Set,i.set(a,o));o.has(n)||(xc=!0,o.add(n),e=Gg.bind(null,e,a,n),a.then(e,e))}function Gg(e,a,n){var i=e.pingCache;i!==null&&i.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,it===e&&(Ge&n)===n&&(xt===4||xt===3&&(Ge&62914560)===Ge&&300>re()-Ks?(Je&2)===0&&Ql(e,0):gc|=n,Vl===Ge&&(Vl=0)),Ga(e)}function Hm(e,a){a===0&&(a=ot()),e=Wn(e,a),e!==null&&(Xn(e,a),Ga(e))}function Yg(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),Hm(e,n)}function Vg(e,a){var n=0;switch(e.tag){case 31:case 13:var i=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(d(314))}i!==null&&i.delete(a),Hm(e,n)}function $g(e,a){return Xt(e,a)}var to=null,Zl=null,Sc=!1,ao=!1,kc=!1,En=0;function Ga(e){e!==Zl&&e.next===null&&(Zl===null?to=Zl=e:Zl=Zl.next=e),ao=!0,Sc||(Sc=!0,Xg())}function Hi(e,a){if(!kc&&ao){kc=!0;do for(var n=!1,i=to;i!==null;){if(e!==0){var o=i.pendingLanes;if(o===0)var c=0;else{var u=i.suspendedLanes,x=i.pingedLanes;c=(1<<31-q(42|e)+1)-1,c&=o&~(u&~x),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Gm(i,c))}else c=Ge,c=aa(i,i===it?c:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(c&3)===0||Wt(i,c)||(n=!0,Gm(i,c));i=i.next}while(n);kc=!1}}function Qg(){Lm()}function Lm(){ao=Sc=!1;var e=0;En!==0&&ab()&&(e=En);for(var a=re(),n=null,i=to;i!==null;){var o=i.next,c=qm(i,a);c===0?(i.next=null,n===null?to=o:n.next=o,o===null&&(Zl=n)):(n=i,(e!==0||(c&3)!==0)&&(ao=!0)),i=o}Mt!==0&&Mt!==5||Hi(e),En!==0&&(En=0)}function qm(e,a){for(var n=e.suspendedLanes,i=e.pingedLanes,o=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-q(c),x=1<<u,z=o[u];z===-1?((x&n)===0||(x&i)!==0)&&(o[u]=mn(x,a)):z<=a&&(e.expiredLanes|=x),c&=~x}if(a=it,n=Ge,n=aa(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,n===0||e===a&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&ea(i),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||Wt(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(i!==null&&ea(i),Re(n)){case 2:case 8:n=Ce;break;case 32:n=Ee;break;case 268435456:n=pn;break;default:n=Ee}return i=Bm.bind(null,e),n=Xt(n,i),e.callbackPriority=a,e.callbackNode=n,a}return i!==null&&i!==null&&ea(i),e.callbackPriority=2,e.callbackNode=null,2}function Bm(e,a){if(Mt!==0&&Mt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(eo()&&e.callbackNode!==n)return null;var i=Ge;return i=aa(e,e===it?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(jm(e,i,a),qm(e,re()),e.callbackNode!=null&&e.callbackNode===n?Bm.bind(null,e):null)}function Gm(e,a){if(eo())return null;jm(e,a,!0)}function Xg(){lb(function(){(Je&6)!==0?Xt(ve,Qg):Lm()})}function Cc(){if(En===0){var e=Dl;e===0&&(e=Me,Me<<=1,(Me&261888)===0&&(Me=256)),En=e}return En}function Ym(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ds(""+e)}function Vm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function Zg(e,a,n,i,o){if(a==="submit"&&n&&n.stateNode===o){var c=Ym((o[na]||null).action),u=i.submitter;u&&(a=(a=u[na]||null)?Ym(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var x=new fs("action","action",null,i,o);e.push({event:x,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(En!==0){var z=u?Vm(o,u):new FormData(o);Zr(n,{pending:!0,data:z,method:o.method,action:c},null,z)}}else typeof c=="function"&&(x.preventDefault(),z=u?Vm(o,u):new FormData(o),Zr(n,{pending:!0,data:z,method:o.method,action:c},c,z))},currentTarget:o}]})}}for(var zc=0;zc<dr.length;zc++){var Tc=dr[zc],Kg=Tc.toLowerCase(),Jg=Tc[0].toUpperCase()+Tc.slice(1);Oa(Kg,"on"+Jg)}Oa(vu,"onAnimationEnd"),Oa(ju,"onAnimationIteration"),Oa(wu,"onAnimationStart"),Oa("dblclick","onDoubleClick"),Oa("focusin","onFocus"),Oa("focusout","onBlur"),Oa(ug,"onTransitionRun"),Oa(pg,"onTransitionStart"),Oa(mg,"onTransitionCancel"),Oa(Nu,"onTransitionEnd"),bl("onMouseEnter",["mouseout","mouseover"]),bl("onMouseLeave",["mouseout","mouseover"]),bl("onPointerEnter",["pointerout","pointerover"]),bl("onPointerLeave",["pointerout","pointerover"]),Zn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Zn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Zn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Zn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Zn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Li="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Fg=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Li));function $m(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var i=e[n],o=i.event;i=i.listeners;e:{var c=void 0;if(a)for(var u=i.length-1;0<=u;u--){var x=i[u],z=x.instance,$=x.currentTarget;if(x=x.listener,z!==c&&o.isPropagationStopped())break e;c=x,o.currentTarget=$;try{c(o)}catch(te){gs(te)}o.currentTarget=null,c=z}else for(u=0;u<i.length;u++){if(x=i[u],z=x.instance,$=x.currentTarget,x=x.listener,z!==c&&o.isPropagationStopped())break e;c=x,o.currentTarget=$;try{c(o)}catch(te){gs(te)}o.currentTarget=null,c=z}}}}function Be(e,a){var n=a[Yo];n===void 0&&(n=a[Yo]=new Set);var i=e+"__bubble";n.has(i)||(Qm(a,e,2,!1),n.add(i))}function Ec(e,a,n){var i=0;a&&(i|=4),Qm(n,e,i,a)}var no="_reactListening"+Math.random().toString(36).slice(2);function Mc(e){if(!e[no]){e[no]=!0,Ld.forEach(function(n){n!=="selectionchange"&&(Fg.has(n)||Ec(n,!1,e),Ec(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[no]||(a[no]=!0,Ec("selectionchange",!1,a))}}function Qm(e,a,n,i){switch(jf(a)){case 2:var o=_b;break;case 8:o=Sb;break;default:o=Xc}n=o.bind(null,a,n,e),o=void 0,!Wo||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(o=!0),i?o!==void 0?e.addEventListener(a,n,{capture:!0,passive:o}):e.addEventListener(a,n,!0):o!==void 0?e.addEventListener(a,n,{passive:o}):e.addEventListener(a,n,!1)}function Dc(e,a,n,i,o){var c=i;if((a&1)===0&&(a&2)===0&&i!==null)e:for(;;){if(i===null)return;var u=i.tag;if(u===3||u===4){var x=i.stateNode.containerInfo;if(x===o)break;if(u===4)for(u=i.return;u!==null;){var z=u.tag;if((z===3||z===4)&&u.stateNode.containerInfo===o)return;u=u.return}for(;x!==null;){if(u=hl(x),u===null)return;if(z=u.tag,z===5||z===6||z===26||z===27){i=c=u;continue e}x=x.parentNode}}i=i.return}Fd(function(){var $=c,te=Jo(n),le=[];e:{var Q=_u.get(e);if(Q!==void 0){var K=fs,je=e;switch(e){case"keypress":if(ps(n)===0)break e;case"keydown":case"keyup":K=Vx;break;case"focusin":je="focus",K=tr;break;case"focusout":je="blur",K=tr;break;case"beforeblur":case"afterblur":K=tr;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Id;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Xx;break;case vu:case ju:case wu:K=Ox;break;case Nu:K=Kx;break;case"scroll":case"scrollend":K=Tx;break;case"wheel":K=Fx;break;case"copy":case"cut":case"paste":K=Rx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=tu;break;case"toggle":case"beforetoggle":K=Px}var ze=(a&4)!==0,lt=!ze&&(e==="scroll"||e==="scrollend"),B=ze?Q!==null?Q+"Capture":null:Q;ze=[];for(var M=$,V;M!==null;){var ne=M;if(V=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||V===null||B===null||(ne=si(M,B),ne!=null&&ze.push(qi(M,ne,V))),lt)break;M=M.return}0<ze.length&&(Q=new K(Q,je,null,n,te),le.push({event:Q,listeners:ze}))}}if((a&7)===0){e:{if(Q=e==="mouseover"||e==="pointerover",K=e==="mouseout"||e==="pointerout",Q&&n!==Ko&&(je=n.relatedTarget||n.fromElement)&&(hl(je)||je[fl]))break e;if((K||Q)&&(Q=te.window===te?te:(Q=te.ownerDocument)?Q.defaultView||Q.parentWindow:window,K?(je=n.relatedTarget||n.toElement,K=$,je=je?hl(je):null,je!==null&&(lt=h(je),ze=je.tag,je!==lt||ze!==5&&ze!==27&&ze!==6)&&(je=null)):(K=null,je=$),K!==je)){if(ze=Id,ne="onMouseLeave",B="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ze=tu,ne="onPointerLeave",B="onPointerEnter",M="pointer"),lt=K==null?Q:ii(K),V=je==null?Q:ii(je),Q=new ze(ne,M+"leave",K,n,te),Q.target=lt,Q.relatedTarget=V,ne=null,hl(te)===$&&(ze=new ze(B,M+"enter",je,n,te),ze.target=V,ze.relatedTarget=lt,ne=ze),lt=ne,K&&je)t:{for(ze=Wg,B=K,M=je,V=0,ne=B;ne;ne=ze(ne))V++;ne=0;for(var ke=M;ke;ke=ze(ke))ne++;for(;0<V-ne;)B=ze(B),V--;for(;0<ne-V;)M=ze(M),ne--;for(;V--;){if(B===M||M!==null&&B===M.alternate){ze=B;break t}B=ze(B),M=ze(M)}ze=null}else ze=null;K!==null&&Xm(le,Q,K,ze,!1),je!==null&&lt!==null&&Xm(le,lt,je,ze,!0)}}e:{if(Q=$?ii($):window,K=Q.nodeName&&Q.nodeName.toLowerCase(),K==="select"||K==="input"&&Q.type==="file")var Qe=cu;else if(ou(Q))if(du)Qe=rg;else{Qe=sg;var Ne=ig}else K=Q.nodeName,!K||K.toLowerCase()!=="input"||Q.type!=="checkbox"&&Q.type!=="radio"?$&&Zo($.elementType)&&(Qe=cu):Qe=og;if(Qe&&(Qe=Qe(e,$))){ru(le,Qe,n,te);break e}Ne&&Ne(e,Q,$),e==="focusout"&&$&&Q.type==="number"&&$.memoizedProps.value!=null&&Xo(Q,"number",Q.value)}switch(Ne=$?ii($):window,e){case"focusin":(ou(Ne)||Ne.contentEditable==="true")&&(_l=Ne,or=$,fi=null);break;case"focusout":fi=or=_l=null;break;case"mousedown":rr=!0;break;case"contextmenu":case"mouseup":case"dragend":rr=!1,bu(le,n,te);break;case"selectionchange":if(dg)break;case"keydown":case"keyup":bu(le,n,te)}var Oe;if(nr)e:{switch(e){case"compositionstart":var Ye="onCompositionStart";break e;case"compositionend":Ye="onCompositionEnd";break e;case"compositionupdate":Ye="onCompositionUpdate";break e}Ye=void 0}else Nl?iu(e,n)&&(Ye="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Ye="onCompositionStart");Ye&&(au&&n.locale!=="ko"&&(Nl||Ye!=="onCompositionStart"?Ye==="onCompositionEnd"&&Nl&&(Oe=Wd()):(fn=te,Po="value"in fn?fn.value:fn.textContent,Nl=!0)),Ne=lo($,Ye),0<Ne.length&&(Ye=new eu(Ye,e,null,n,te),le.push({event:Ye,listeners:Ne}),Oe?Ye.data=Oe:(Oe=su(n),Oe!==null&&(Ye.data=Oe)))),(Oe=eg?tg(e,n):ag(e,n))&&(Ye=lo($,"onBeforeInput"),0<Ye.length&&(Ne=new eu("onBeforeInput","beforeinput",null,n,te),le.push({event:Ne,listeners:Ye}),Ne.data=Oe)),Zg(le,e,$,n,te)}$m(le,a)})}function qi(e,a,n){return{instance:e,listener:a,currentTarget:n}}function lo(e,a){for(var n=a+"Capture",i=[];e!==null;){var o=e,c=o.stateNode;if(o=o.tag,o!==5&&o!==26&&o!==27||c===null||(o=si(e,n),o!=null&&i.unshift(qi(e,o,c)),o=si(e,a),o!=null&&i.push(qi(e,o,c))),e.tag===3)return i;e=e.return}return[]}function Wg(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Xm(e,a,n,i,o){for(var c=a._reactName,u=[];n!==null&&n!==i;){var x=n,z=x.alternate,$=x.stateNode;if(x=x.tag,z!==null&&z===i)break;x!==5&&x!==26&&x!==27||$===null||(z=$,o?($=si(n,c),$!=null&&u.unshift(qi(n,$,z))):o||($=si(n,c),$!=null&&u.push(qi(n,$,z)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var Pg=/\r\n?/g,Ig=/\u0000|\uFFFD/g;function Zm(e){return(typeof e=="string"?e:""+e).replace(Pg,`
`).replace(Ig,"")}function Km(e,a){return a=Zm(a),Zm(e)===a}function nt(e,a,n,i,o,c){switch(n){case"children":typeof i=="string"?a==="body"||a==="textarea"&&i===""||vl(e,i):(typeof i=="number"||typeof i=="bigint")&&a!=="body"&&vl(e,""+i);break;case"className":rs(e,"class",i);break;case"tabIndex":rs(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":rs(e,n,i);break;case"style":Kd(e,i,c);break;case"data":if(a!=="object"){rs(e,"data",i);break}case"src":case"href":if(i===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ds(""+i),e.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&nt(e,a,"name",o.name,o,null),nt(e,a,"formEncType",o.formEncType,o,null),nt(e,a,"formMethod",o.formMethod,o,null),nt(e,a,"formTarget",o.formTarget,o,null)):(nt(e,a,"encType",o.encType,o,null),nt(e,a,"method",o.method,o,null),nt(e,a,"target",o.target,o,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(n);break}i=ds(""+i),e.setAttribute(n,i);break;case"onClick":i!=null&&(e.onclick=$a);break;case"onScroll":i!=null&&Be("scroll",e);break;case"onScrollEnd":i!=null&&Be("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}n=ds(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""+i):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":i===!0?e.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(n,i):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(n,i):e.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(n):e.setAttribute(n,i);break;case"popover":Be("beforetoggle",e),Be("toggle",e),os(e,"popover",i);break;case"xlinkActuate":Va(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Va(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Va(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Va(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Va(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Va(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Va(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Va(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Va(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":os(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=Cx.get(n)||n,os(e,n,i))}}function Ac(e,a,n,i,o,c){switch(n){case"style":Kd(e,i,c);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(d(61));if(n=i.__html,n!=null){if(o.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof i=="string"?vl(e,i):(typeof i=="number"||typeof i=="bigint")&&vl(e,""+i);break;case"onScroll":i!=null&&Be("scroll",e);break;case"onScrollEnd":i!=null&&Be("scrollend",e);break;case"onClick":i!=null&&(e.onclick=$a);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!qd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(o=n.endsWith("Capture"),a=n.slice(2,o?n.length-7:void 0),c=e[na]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,o),typeof i=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,i,o);break e}n in e?e[n]=i:i===!0?e.setAttribute(n,""):os(e,n,i)}}}function Yt(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Be("error",e),Be("load",e);var i=!1,o=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":i=!0;break;case"srcSet":o=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:nt(e,a,c,u,n,null)}}o&&nt(e,a,"srcSet",n.srcSet,n,null),i&&nt(e,a,"src",n.src,n,null);return;case"input":Be("invalid",e);var x=c=u=o=null,z=null,$=null;for(i in n)if(n.hasOwnProperty(i)){var te=n[i];if(te!=null)switch(i){case"name":o=te;break;case"type":u=te;break;case"checked":z=te;break;case"defaultChecked":$=te;break;case"value":c=te;break;case"defaultValue":x=te;break;case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(d(137,a));break;default:nt(e,a,i,te,n,null)}}$d(e,c,x,z,$,u,o,!1);return;case"select":Be("invalid",e),i=u=c=null;for(o in n)if(n.hasOwnProperty(o)&&(x=n[o],x!=null))switch(o){case"value":c=x;break;case"defaultValue":u=x;break;case"multiple":i=x;default:nt(e,a,o,x,n,null)}a=c,n=u,e.multiple=!!i,a!=null?yl(e,!!i,a,!1):n!=null&&yl(e,!!i,n,!0);return;case"textarea":Be("invalid",e),c=o=i=null;for(u in n)if(n.hasOwnProperty(u)&&(x=n[u],x!=null))switch(u){case"value":i=x;break;case"defaultValue":o=x;break;case"children":c=x;break;case"dangerouslySetInnerHTML":if(x!=null)throw Error(d(91));break;default:nt(e,a,u,x,n,null)}Xd(e,i,o,c);return;case"option":for(z in n)if(n.hasOwnProperty(z)&&(i=n[z],i!=null))switch(z){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:nt(e,a,z,i,n,null)}return;case"dialog":Be("beforetoggle",e),Be("toggle",e),Be("cancel",e),Be("close",e);break;case"iframe":case"object":Be("load",e);break;case"video":case"audio":for(i=0;i<Li.length;i++)Be(Li[i],e);break;case"image":Be("error",e),Be("load",e);break;case"details":Be("toggle",e);break;case"embed":case"source":case"link":Be("error",e),Be("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in n)if(n.hasOwnProperty($)&&(i=n[$],i!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:nt(e,a,$,i,n,null)}return;default:if(Zo(a)){for(te in n)n.hasOwnProperty(te)&&(i=n[te],i!==void 0&&Ac(e,a,te,i,n,void 0));return}}for(x in n)n.hasOwnProperty(x)&&(i=n[x],i!=null&&nt(e,a,x,i,n,null))}function eb(e,a,n,i){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,c=null,u=null,x=null,z=null,$=null,te=null;for(K in n){var le=n[K];if(n.hasOwnProperty(K)&&le!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":z=le;default:i.hasOwnProperty(K)||nt(e,a,K,null,i,le)}}for(var Q in i){var K=i[Q];if(le=n[Q],i.hasOwnProperty(Q)&&(K!=null||le!=null))switch(Q){case"type":c=K;break;case"name":o=K;break;case"checked":$=K;break;case"defaultChecked":te=K;break;case"value":u=K;break;case"defaultValue":x=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(d(137,a));break;default:K!==le&&nt(e,a,Q,K,i,le)}}Qo(e,u,x,z,$,te,c,o);return;case"select":K=u=x=Q=null;for(c in n)if(z=n[c],n.hasOwnProperty(c)&&z!=null)switch(c){case"value":break;case"multiple":K=z;default:i.hasOwnProperty(c)||nt(e,a,c,null,i,z)}for(o in i)if(c=i[o],z=n[o],i.hasOwnProperty(o)&&(c!=null||z!=null))switch(o){case"value":Q=c;break;case"defaultValue":x=c;break;case"multiple":u=c;default:c!==z&&nt(e,a,o,c,i,z)}a=x,n=u,i=K,Q!=null?yl(e,!!n,Q,!1):!!i!=!!n&&(a!=null?yl(e,!!n,a,!0):yl(e,!!n,n?[]:"",!1));return;case"textarea":K=Q=null;for(x in n)if(o=n[x],n.hasOwnProperty(x)&&o!=null&&!i.hasOwnProperty(x))switch(x){case"value":break;case"children":break;default:nt(e,a,x,null,i,o)}for(u in i)if(o=i[u],c=n[u],i.hasOwnProperty(u)&&(o!=null||c!=null))switch(u){case"value":Q=o;break;case"defaultValue":K=o;break;case"children":break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(d(91));break;default:o!==c&&nt(e,a,u,o,i,c)}Qd(e,Q,K);return;case"option":for(var je in n)if(Q=n[je],n.hasOwnProperty(je)&&Q!=null&&!i.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:nt(e,a,je,null,i,Q)}for(z in i)if(Q=i[z],K=n[z],i.hasOwnProperty(z)&&Q!==K&&(Q!=null||K!=null))switch(z){case"selected":e.selected=Q&&typeof Q!="function"&&typeof Q!="symbol";break;default:nt(e,a,z,Q,i,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ze in n)Q=n[ze],n.hasOwnProperty(ze)&&Q!=null&&!i.hasOwnProperty(ze)&&nt(e,a,ze,null,i,Q);for($ in i)if(Q=i[$],K=n[$],i.hasOwnProperty($)&&Q!==K&&(Q!=null||K!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(Q!=null)throw Error(d(137,a));break;default:nt(e,a,$,Q,i,K)}return;default:if(Zo(a)){for(var lt in n)Q=n[lt],n.hasOwnProperty(lt)&&Q!==void 0&&!i.hasOwnProperty(lt)&&Ac(e,a,lt,void 0,i,Q);for(te in i)Q=i[te],K=n[te],!i.hasOwnProperty(te)||Q===K||Q===void 0&&K===void 0||Ac(e,a,te,Q,i,K);return}}for(var B in n)Q=n[B],n.hasOwnProperty(B)&&Q!=null&&!i.hasOwnProperty(B)&&nt(e,a,B,null,i,Q);for(le in i)Q=i[le],K=n[le],!i.hasOwnProperty(le)||Q===K||Q==null&&K==null||nt(e,a,le,Q,i,K)}function Jm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function tb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var o=n[i],c=o.transferSize,u=o.initiatorType,x=o.duration;if(c&&x&&Jm(u)){for(u=0,x=o.responseEnd,i+=1;i<n.length;i++){var z=n[i],$=z.startTime;if($>x)break;var te=z.transferSize,le=z.initiatorType;te&&Jm(le)&&(z=z.responseEnd,u+=te*(z<x?1:(x-$)/(z-$)))}if(--i,a+=8*(c+u)/(o.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Oc=null,Uc=null;function io(e){return e.nodeType===9?e:e.ownerDocument}function Fm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Wm(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Rc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Hc=null;function ab(){var e=window.event;return e&&e.type==="popstate"?e===Hc?!1:(Hc=e,!0):(Hc=null,!1)}var Pm=typeof setTimeout=="function"?setTimeout:void 0,nb=typeof clearTimeout=="function"?clearTimeout:void 0,Im=typeof Promise=="function"?Promise:void 0,lb=typeof queueMicrotask=="function"?queueMicrotask:typeof Im<"u"?function(e){return Im.resolve(null).then(e).catch(ib)}:Pm;function ib(e){setTimeout(function(){throw e})}function Mn(e){return e==="head"}function ef(e,a){var n=a,i=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"||n==="/&"){if(i===0){e.removeChild(o),Wl(a);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Bi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Bi(n);for(var c=n.firstChild;c;){var u=c.nextSibling,x=c.nodeName;c[li]||x==="SCRIPT"||x==="STYLE"||x==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Bi(e.ownerDocument.body);n=o}while(n);Wl(a)}function tf(e,a){var n=e;e=0;do{var i=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=i}while(n)}function Lc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lc(n),Vo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function sb(e,a,n,i){for(;e.nodeType===1;){var o=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[li])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==o.rel||e.getAttribute("href")!==(o.href==null||o.href===""?null:o.href)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin)||e.getAttribute("title")!==(o.title==null?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(o.src==null?null:o.src)||e.getAttribute("type")!==(o.type==null?null:o.type)||e.getAttribute("crossorigin")!==(o.crossOrigin==null?null:o.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=o.name==null?null:""+o.name;if(o.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ta(e.nextSibling),e===null)break}return null}function ob(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ta(e.nextSibling),e===null))return null;return e}function af(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ta(e.nextSibling),e===null))return null;return e}function qc(e){return e.data==="$?"||e.data==="$~"}function Bc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var i=function(){a(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function Ta(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Gc=null;function nf(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Ta(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function lf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function sf(e,a,n){switch(a=io(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Bi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Vo(e)}var Ea=new Map,of=new Set;function so(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var on=X.d;X.d={f:cb,r:db,D:ub,C:pb,L:mb,m:fb,X:xb,S:hb,M:gb};function cb(){var e=on.f(),a=Ws();return e||a}function db(e){var a=xl(e);a!==null&&a.tag===5&&a.type==="form"?Np(a):on.r(e)}var Kl=typeof document>"u"?null:document;function rf(e,a,n){var i=Kl;if(i&&typeof a=="string"&&a){var o=wa(a);o='link[rel="'+e+'"][href="'+o+'"]',typeof n=="string"&&(o+='[crossorigin="'+n+'"]'),of.has(o)||(of.add(o),e={rel:e,crossOrigin:n,href:a},i.querySelector(o)===null&&(a=i.createElement("link"),Yt(a,"link",e),Rt(a),i.head.appendChild(a)))}}function ub(e){on.D(e),rf("dns-prefetch",e,null)}function pb(e,a){on.C(e,a),rf("preconnect",e,a)}function mb(e,a,n){on.L(e,a,n);var i=Kl;if(i&&e&&a){var o='link[rel="preload"][as="'+wa(a)+'"]';a==="image"&&n&&n.imageSrcSet?(o+='[imagesrcset="'+wa(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(o+='[imagesizes="'+wa(n.imageSizes)+'"]')):o+='[href="'+wa(e)+'"]';var c=o;switch(a){case"style":c=Jl(e);break;case"script":c=Fl(e)}Ea.has(c)||(e=g({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ea.set(c,e),i.querySelector(o)!==null||a==="style"&&i.querySelector(Gi(c))||a==="script"&&i.querySelector(Yi(c))||(a=i.createElement("link"),Yt(a,"link",e),Rt(a),i.head.appendChild(a)))}}function fb(e,a){on.m(e,a);var n=Kl;if(n&&e){var i=a&&typeof a.as=="string"?a.as:"script",o='link[rel="modulepreload"][as="'+wa(i)+'"][href="'+wa(e)+'"]',c=o;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Fl(e)}if(!Ea.has(c)&&(e=g({rel:"modulepreload",href:e},a),Ea.set(c,e),n.querySelector(o)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Yi(c)))return}i=n.createElement("link"),Yt(i,"link",e),Rt(i),n.head.appendChild(i)}}}function hb(e,a,n){on.S(e,a,n);var i=Kl;if(i&&e){var o=gl(i).hoistableStyles,c=Jl(e);a=a||"default";var u=o.get(c);if(!u){var x={loading:0,preload:null};if(u=i.querySelector(Gi(c)))x.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ea.get(c))&&Yc(e,n);var z=u=i.createElement("link");Rt(z),Yt(z,"link",e),z._p=new Promise(function($,te){z.onload=$,z.onerror=te}),z.addEventListener("load",function(){x.loading|=1}),z.addEventListener("error",function(){x.loading|=2}),x.loading|=4,oo(u,a,i)}u={type:"stylesheet",instance:u,count:1,state:x},o.set(c,u)}}}function xb(e,a){on.X(e,a);var n=Kl;if(n&&e){var i=gl(n).hoistableScripts,o=Fl(e),c=i.get(o);c||(c=n.querySelector(Yi(o)),c||(e=g({src:e,async:!0},a),(a=Ea.get(o))&&Vc(e,a),c=n.createElement("script"),Rt(c),Yt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function gb(e,a){on.M(e,a);var n=Kl;if(n&&e){var i=gl(n).hoistableScripts,o=Fl(e),c=i.get(o);c||(c=n.querySelector(Yi(o)),c||(e=g({src:e,async:!0,type:"module"},a),(a=Ea.get(o))&&Vc(e,a),c=n.createElement("script"),Rt(c),Yt(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},i.set(o,c))}}function cf(e,a,n,i){var o=(o=_e.current)?so(o):null;if(!o)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=Jl(n.href),n=gl(o).hoistableStyles,i=n.get(a),i||(i={type:"style",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=Jl(n.href);var c=gl(o).hoistableStyles,u=c.get(e);if(u||(o=o.ownerDocument||o,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=o.querySelector(Gi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ea.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ea.set(e,n),c||bb(o,e,n,u.state))),a&&i===null)throw Error(d(528,""));return u}if(a&&i!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Fl(n),n=gl(o).hoistableScripts,i=n.get(a),i||(i={type:"script",instance:null,count:0,state:null},n.set(a,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function Jl(e){return'href="'+wa(e)+'"'}function Gi(e){return'link[rel="stylesheet"]['+e+"]"}function df(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function bb(e,a,n,i){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?i.loading=1:(a=e.createElement("link"),i.preload=a,a.addEventListener("load",function(){return i.loading|=1}),a.addEventListener("error",function(){return i.loading|=2}),Yt(a,"link",n),Rt(a),e.head.appendChild(a))}function Fl(e){return'[src="'+wa(e)+'"]'}function Yi(e){return"script[async]"+e}function uf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var i=e.querySelector('style[data-href~="'+wa(n.href)+'"]');if(i)return a.instance=i,Rt(i),i;var o=g({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Rt(i),Yt(i,"style",o),oo(i,n.precedence,e),a.instance=i;case"stylesheet":o=Jl(n.href);var c=e.querySelector(Gi(o));if(c)return a.state.loading|=4,a.instance=c,Rt(c),c;i=df(n),(o=Ea.get(o))&&Yc(i,o),c=(e.ownerDocument||e).createElement("link"),Rt(c);var u=c;return u._p=new Promise(function(x,z){u.onload=x,u.onerror=z}),Yt(c,"link",i),a.state.loading|=4,oo(c,n.precedence,e),a.instance=c;case"script":return c=Fl(n.src),(o=e.querySelector(Yi(c)))?(a.instance=o,Rt(o),o):(i=n,(o=Ea.get(c))&&(i=g({},n),Vc(i,o)),e=e.ownerDocument||e,o=e.createElement("script"),Rt(o),Yt(o,"link",i),e.head.appendChild(o),a.instance=o);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(i=a.instance,a.state.loading|=4,oo(i,n.precedence,e));return a.instance}function oo(e,a,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=i.length?i[i.length-1]:null,c=o,u=0;u<i.length;u++){var x=i[u];if(x.dataset.precedence===a)c=x;else if(c!==o)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function Yc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Vc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var ro=null;function pf(e,a,n){if(ro===null){var i=new Map,o=ro=new Map;o.set(n,i)}else o=ro,i=o.get(n),i||(i=new Map,o.set(n,i));if(i.has(e))return i;for(i.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var c=n[o];if(!(c[li]||c[Lt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var x=i.get(u);x?x.push(c):i.set(u,[c])}}return i}function mf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function yb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function ff(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function vb(e,a,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var o=Jl(i.href),c=a.querySelector(Gi(o));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=co.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Rt(c);return}c=a.ownerDocument||a,i=df(i),(o=Ea.get(o))&&Yc(i,o),c=c.createElement("link"),Rt(c);var u=c;u._p=new Promise(function(x,z){u.onload=x,u.onerror=z}),Yt(c,"link",i),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=co.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var $c=0;function jb(e,a){return e.stylesheets&&e.count===0&&po(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var i=setTimeout(function(){if(e.stylesheets&&po(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&$c===0&&($c=62500*tb());var o=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&po(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>$c?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(o)}}:null}function co(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)po(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var uo=null;function po(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,uo=new Map,a.forEach(wb,e),uo=null,co.call(e))}function wb(e,a){if(!(a.state.loading&4)){var n=uo.get(e);if(n)var i=n.get(null);else{n=new Map,uo.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<o.length;c++){var u=o[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),i=u)}i&&n.set(null,i)}o=a.instance,u=o.getAttribute("data-precedence"),c=n.get(u)||i,c===i&&n.set(null,o),n.set(u,o),this.count++,i=co.bind(this),o.addEventListener("load",i),o.addEventListener("error",i),c?c.parentNode.insertBefore(o,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(o,e.firstChild)),a.state.loading|=4}}var Vi={$$typeof:A,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Nb(e,a,n,i,o,c,u,x,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ni(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ni(0),this.hiddenUpdates=ni(null),this.identifierPrefix=i,this.onUncaughtError=o,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function hf(e,a,n,i,o,c,u,x,z,$,te,le){return e=new Nb(e,a,n,u,z,$,te,le,x),a=1,c===!0&&(a|=24),c=pa(3,null,null,a),e.current=c,c.stateNode=e,a=Nr(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:i,isDehydrated:n,cache:a},Cr(c),e}function xf(e){return e?(e=Cl,e):Cl}function gf(e,a,n,i,o,c){o=xf(o),i.context===null?i.context=o:i.pendingContext=o,i=vn(a),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=jn(e,i,a),n!==null&&(ca(n,e,a),ji(n,e,a))}function bf(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Qc(e,a){bf(e,a),(e=e.alternate)&&bf(e,a)}function yf(e){if(e.tag===13||e.tag===31){var a=Wn(e,67108864);a!==null&&ca(a,e,67108864),Qc(e,67108864)}}function vf(e){if(e.tag===13||e.tag===31){var a=ga();a=be(a);var n=Wn(e,a);n!==null&&ca(n,e,a),Qc(e,a)}}var mo=!0;function _b(e,a,n,i){var o=D.T;D.T=null;var c=X.p;try{X.p=2,Xc(e,a,n,i)}finally{X.p=c,D.T=o}}function Sb(e,a,n,i){var o=D.T;D.T=null;var c=X.p;try{X.p=8,Xc(e,a,n,i)}finally{X.p=c,D.T=o}}function Xc(e,a,n,i){if(mo){var o=Zc(i);if(o===null)Dc(e,a,i,fo,n),wf(e,i);else if(Cb(o,e,a,n,i))i.stopPropagation();else if(wf(e,i),a&4&&-1<kb.indexOf(e)){for(;o!==null;){var c=xl(o);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=Le(c.pendingLanes);if(u!==0){var x=c;for(x.pendingLanes|=2,x.entangledLanes|=2;u;){var z=1<<31-q(u);x.entanglements[1]|=z,u&=~z}Ga(c),(Je&6)===0&&(Js=re()+500,Hi(0))}}break;case 31:case 13:x=Wn(c,2),x!==null&&ca(x,c,2),Ws(),Qc(c,2)}if(c=Zc(i),c===null&&Dc(e,a,i,fo,n),c===o)break;o=c}o!==null&&i.stopPropagation()}else Dc(e,a,i,null,n)}}function Zc(e){return e=Jo(e),Kc(e)}var fo=null;function Kc(e){if(fo=null,e=hl(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=m(a),e!==null)return e;e=null}else if(n===31){if(e=j(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return fo=e,null}function jf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ae()){case ve:return 2;case Ce:return 8;case Ee:case We:return 32;case pn:return 268435456;default:return 32}default:return 32}}var Jc=!1,Dn=null,An=null,On=null,$i=new Map,Qi=new Map,Un=[],kb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function wf(e,a){switch(e){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":$i.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(a.pointerId)}}function Xi(e,a,n,i,o,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:i,nativeEvent:c,targetContainers:[o]},a!==null&&(a=xl(a),a!==null&&yf(a)),e):(e.eventSystemFlags|=i,a=e.targetContainers,o!==null&&a.indexOf(o)===-1&&a.push(o),e)}function Cb(e,a,n,i,o){switch(a){case"focusin":return Dn=Xi(Dn,e,a,n,i,o),!0;case"dragenter":return An=Xi(An,e,a,n,i,o),!0;case"mouseover":return On=Xi(On,e,a,n,i,o),!0;case"pointerover":var c=o.pointerId;return $i.set(c,Xi($i.get(c)||null,e,a,n,i,o)),!0;case"gotpointercapture":return c=o.pointerId,Qi.set(c,Xi(Qi.get(c)||null,e,a,n,i,o)),!0}return!1}function Nf(e){var a=hl(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=m(n),a!==null){e.blockedOn=a,ss(e.priority,function(){vf(n)});return}}else if(a===31){if(a=j(n),a!==null){e.blockedOn=a,ss(e.priority,function(){vf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ho(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Zc(e.nativeEvent);if(n===null){n=e.nativeEvent;var i=new n.constructor(n.type,n);Ko=i,n.target.dispatchEvent(i),Ko=null}else return a=xl(n),a!==null&&yf(a),e.blockedOn=n,!1;a.shift()}return!0}function _f(e,a,n){ho(e)&&n.delete(a)}function zb(){Jc=!1,Dn!==null&&ho(Dn)&&(Dn=null),An!==null&&ho(An)&&(An=null),On!==null&&ho(On)&&(On=null),$i.forEach(_f),Qi.forEach(_f)}function xo(e,a){e.blockedOn===a&&(e.blockedOn=null,Jc||(Jc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,zb)))}var go=null;function Sf(e){go!==e&&(go=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){go===e&&(go=null);for(var a=0;a<e.length;a+=3){var n=e[a],i=e[a+1],o=e[a+2];if(typeof i!="function"){if(Kc(i||n)===null)continue;break}var c=xl(n);c!==null&&(e.splice(a,3),a-=3,Zr(c,{pending:!0,data:o,method:n.method,action:i},i,o))}}))}function Wl(e){function a(z){return xo(z,e)}Dn!==null&&xo(Dn,e),An!==null&&xo(An,e),On!==null&&xo(On,e),$i.forEach(a),Qi.forEach(a);for(var n=0;n<Un.length;n++){var i=Un[n];i.blockedOn===e&&(i.blockedOn=null)}for(;0<Un.length&&(n=Un[0],n.blockedOn===null);)Nf(n),n.blockedOn===null&&Un.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var o=n[i],c=n[i+1],u=o[na]||null;if(typeof c=="function")u||Sf(n);else if(u){var x=null;if(c&&c.hasAttribute("formAction")){if(o=c,u=c[na]||null)x=u.formAction;else if(Kc(o)!==null)continue}else x=u.action;typeof x=="function"?n[i+1]=x:(n.splice(i,3),i-=3),Sf(n)}}}function kf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return o=u})},focusReset:"manual",scroll:"manual"})}function a(){o!==null&&(o(),o=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,o=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),o!==null&&(o(),o=null)}}}function Fc(e){this._internalRoot=e}bo.prototype.render=Fc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,i=ga();gf(n,i,e,a,null,null)},bo.prototype.unmount=Fc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;gf(e.current,2,null,e,null,null),Ws(),a[fl]=null}};function bo(e){this._internalRoot=e}bo.prototype.unstable_scheduleHydration=function(e){if(e){var a=Zt();e={blockedOn:null,target:e,priority:a};for(var n=0;n<Un.length&&a!==0&&a<Un[n].priority;n++);Un.splice(n,0,e),n===0&&Nf(e)}};var Cf=l.version;if(Cf!=="19.2.6")throw Error(d(527,Cf,"19.2.6"));X.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=y(a),e=e!==null?b(e):null,e=e===null?null:e.stateNode,e};var Tb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:D,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var yo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!yo.isDisabled&&yo.supportsFiber)try{Da=yo.inject(Tb),ft=yo}catch{}}return Ki.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,i="",o=Ap,c=Op,u=Up;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(o=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=hf(e,1,!1,null,null,n,i,null,o,c,u,kf),e[fl]=a.current,Mc(e),new Fc(a)},Ki.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var i=!1,o="",c=Ap,u=Op,x=Up,z=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError),n.formState!==void 0&&(z=n.formState)),a=hf(e,1,!0,a,n??null,i,o,z,c,u,x,kf),a.context=xf(null),n=a.current,i=ga(),i=be(i),o=vn(i),o.callback=null,jn(n,o,i),n=i,a.current.lanes=n,Xn(a,n),Ga(a),e[fl]=a.current,Mc(e),new bo(a)},Ki.version="19.2.6",Ki}var Hf;function Yb(){if(Hf)return Ic.exports;Hf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(l){console.error(l)}}return s(),Ic.exports=Gb(),Ic.exports}var Vb=Yb();Yh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ii(){return Ii=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},Ii.apply(this,arguments)}var qn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(qn||(qn={}));const Lf="popstate";function $b(s){s===void 0&&(s={});function l(p,h){let{pathname:m="/",search:j="",hash:v=""}=pl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),yd("",{pathname:m,search:j,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function r(p,h){let m=p.document.querySelector("base"),j="";if(m&&m.getAttribute("href")){let v=p.location.href,y=v.indexOf("#");j=y===-1?v:v.slice(0,y)}return j+"#"+(typeof h=="string"?h:Do(h))}function d(p,h){Lo(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return Xb(l,r,d,s)}function jt(s,l){if(s===!1||s===null||typeof s>"u")throw new Error(l)}function Lo(s,l){if(!s){typeof console<"u"&&console.warn(l);try{throw new Error(l)}catch{}}}function Qb(){return Math.random().toString(36).substr(2,8)}function qf(s,l){return{usr:s.state,key:s.key,idx:l}}function yd(s,l,r,d){return r===void 0&&(r=null),Ii({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof l=="string"?pl(l):l,{state:r,key:l&&l.key||d||Qb()})}function Do(s){let{pathname:l="/",search:r="",hash:d=""}=s;return r&&r!=="?"&&(l+=r.charAt(0)==="?"?r:"?"+r),d&&d!=="#"&&(l+=d.charAt(0)==="#"?d:"#"+d),l}function pl(s){let l={};if(s){let r=s.indexOf("#");r>=0&&(l.hash=s.substr(r),s=s.substr(0,r));let d=s.indexOf("?");d>=0&&(l.search=s.substr(d),s=s.substr(0,d)),s&&(l.pathname=s)}return l}function Xb(s,l,r,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,j=qn.Pop,v=null,y=b();y==null&&(y=0,m.replaceState(Ii({},m.state,{idx:y}),""));function b(){return(m.state||{idx:null}).idx}function g(){j=qn.Pop;let k=b(),G=k==null?null:k-y;y=k,v&&v({action:j,location:P.location,delta:G})}function R(k,G){j=qn.Push;let H=yd(P.location,k,G);r&&r(H,k),y=b()+1;let A=qf(H,y),F=P.createHref(H);try{m.pushState(A,"",F)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;p.location.assign(F)}h&&v&&v({action:j,location:P.location,delta:1})}function J(k,G){j=qn.Replace;let H=yd(P.location,k,G);r&&r(H,k),y=b();let A=qf(H,y),F=P.createHref(H);m.replaceState(A,"",F),h&&v&&v({action:j,location:P.location,delta:0})}function W(k){let G=p.location.origin!=="null"?p.location.origin:p.location.href,H=typeof k=="string"?k:Do(k);return H=H.replace(/ $/,"%20"),jt(G,"No window.location.(origin|href) available to create URL for href: "+H),new URL(H,G)}let P={get action(){return j},get location(){return s(p,m)},listen(k){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Lf,g),v=k,()=>{p.removeEventListener(Lf,g),v=null}},createHref(k){return l(p,k)},createURL:W,encodeLocation(k){let G=W(k);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:R,replace:J,go(k){return m.go(k)}};return P}var Bf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Bf||(Bf={}));function Zb(s,l,r){return r===void 0&&(r="/"),Kb(s,l,r)}function Kb(s,l,r,d){let p=typeof l=="string"?pl(l):l,h=Td(p.pathname||"/",r);if(h==null)return null;let m=Vh(s);Jb(m);let j=null;for(let v=0;j==null&&v<m.length;++v){let y=oy(h);j=ly(m[v],y)}return j}function Vh(s,l,r,d){l===void 0&&(l=[]),r===void 0&&(r=[]),d===void 0&&(d="");let p=(h,m,j)=>{let v={relativePath:j===void 0?h.path||"":j,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};v.relativePath.startsWith("/")&&(jt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let y=Gn([d,v.relativePath]),b=r.concat(v);h.children&&h.children.length>0&&(jt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),Vh(h.children,l,b,y)),!(h.path==null&&!h.index)&&l.push({path:y,score:ay(y,h.index),routesMeta:b})};return s.forEach((h,m)=>{var j;if(h.path===""||!((j=h.path)!=null&&j.includes("?")))p(h,m);else for(let v of $h(h.path))p(h,m,v)}),l}function $h(s){let l=s.split("/");if(l.length===0)return[];let[r,...d]=l,p=r.endsWith("?"),h=r.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=$h(d.join("/")),j=[];return j.push(...m.map(v=>v===""?h:[h,v].join("/"))),p&&j.push(...m),j.map(v=>s.startsWith("/")&&v===""?"/":v)}function Jb(s){s.sort((l,r)=>l.score!==r.score?r.score-l.score:ny(l.routesMeta.map(d=>d.childrenIndex),r.routesMeta.map(d=>d.childrenIndex)))}const Fb=/^:[\w-]+$/,Wb=3,Pb=2,Ib=1,ey=10,ty=-2,Gf=s=>s==="*";function ay(s,l){let r=s.split("/"),d=r.length;return r.some(Gf)&&(d+=ty),l&&(d+=Pb),r.filter(p=>!Gf(p)).reduce((p,h)=>p+(Fb.test(h)?Wb:h===""?Ib:ey),d)}function ny(s,l){return s.length===l.length&&s.slice(0,-1).every((d,p)=>d===l[p])?s[s.length-1]-l[l.length-1]:0}function ly(s,l,r){let{routesMeta:d}=s,p={},h="/",m=[];for(let j=0;j<d.length;++j){let v=d[j],y=j===d.length-1,b=h==="/"?l:l.slice(h.length)||"/",g=iy({path:v.relativePath,caseSensitive:v.caseSensitive,end:y},b),R=v.route;if(!g)return null;Object.assign(p,g.params),m.push({params:p,pathname:Gn([h,g.pathname]),pathnameBase:py(Gn([h,g.pathnameBase])),route:R}),g.pathnameBase!=="/"&&(h=Gn([h,g.pathnameBase]))}return m}function iy(s,l){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[r,d]=sy(s.path,s.caseSensitive,s.end),p=l.match(r);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),j=p.slice(1);return{params:d.reduce((y,b,g)=>{let{paramName:R,isOptional:J}=b;if(R==="*"){let P=j[g]||"";m=h.slice(0,h.length-P.length).replace(/(.)\/+$/,"$1")}const W=j[g];return J&&!W?y[R]=void 0:y[R]=(W||"").replace(/%2F/g,"/"),y},{}),pathname:h,pathnameBase:m,pattern:s}}function sy(s,l,r){l===void 0&&(l=!1),r===void 0&&(r=!0),Lo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,j,v)=>(d.push({paramName:j,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,l?void 0:"i"),d]}function oy(s){try{return s.split("/").map(l=>decodeURIComponent(l).replace(/\//g,"%2F")).join("/")}catch(l){return Lo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+l+").")),s}}function Td(s,l){if(l==="/")return s;if(!s.toLowerCase().startsWith(l.toLowerCase()))return null;let r=l.endsWith("/")?l.length-1:l.length,d=s.charAt(r);return d&&d!=="/"?null:s.slice(r)||"/"}const ry=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,cy=s=>ry.test(s);function dy(s,l){l===void 0&&(l="/");let{pathname:r,search:d="",hash:p=""}=typeof s=="string"?pl(s):s,h;if(r)if(cy(r))h=r;else{if(r.includes("//")){let m=r;r=r.replace(/\/\/+/g,"/"),Lo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+r))}r.startsWith("/")?h=Yf(r.substring(1),"/"):h=Yf(r,l)}else h=l;return{pathname:h,search:my(d),hash:fy(p)}}function Yf(s,l){let r=l.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?r.length>1&&r.pop():p!=="."&&r.push(p)}),r.length>1?r.join("/"):"/"}function nd(s,l,r,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+l+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+r+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function uy(s){return s.filter((l,r)=>r===0||l.route.path&&l.route.path.length>0)}function Ed(s,l){let r=uy(s);return l?r.map((d,p)=>p===r.length-1?d.pathname:d.pathnameBase):r.map(d=>d.pathnameBase)}function Md(s,l,r,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=pl(s):(p=Ii({},s),jt(!p.pathname||!p.pathname.includes("?"),nd("?","pathname","search",p)),jt(!p.pathname||!p.pathname.includes("#"),nd("#","pathname","hash",p)),jt(!p.search||!p.search.includes("#"),nd("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,j;if(m==null)j=r;else{let g=l.length-1;if(!d&&m.startsWith("..")){let R=m.split("/");for(;R[0]==="..";)R.shift(),g-=1;p.pathname=R.join("/")}j=g>=0?l[g]:"/"}let v=dy(p,j),y=m&&m!=="/"&&m.endsWith("/"),b=(h||m===".")&&r.endsWith("/");return!v.pathname.endsWith("/")&&(y||b)&&(v.pathname+="/"),v}const Gn=s=>s.join("/").replace(/\/\/+/g,"/"),py=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),my=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,fy=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function hy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Qh=["post","put","patch","delete"];new Set(Qh);const xy=["get",...Qh];new Set(xy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function es(){return es=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},es.apply(this,arguments)}const Dd=f.createContext(null),gy=f.createContext(null),Yn=f.createContext(null),qo=f.createContext(null),Vn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Xh=f.createContext(null);function by(s,l){let{relative:r}=l===void 0?{}:l;ai()||jt(!1);let{basename:d,navigator:p}=f.useContext(Yn),{hash:h,pathname:m,search:j}=Kh(s,{relative:r}),v=m;return d!=="/"&&(v=m==="/"?d:Gn([d,m])),p.createHref({pathname:v,search:j,hash:h})}function ai(){return f.useContext(qo)!=null}function $n(){return ai()||jt(!1),f.useContext(qo).location}function Zh(s){f.useContext(Yn).static||f.useLayoutEffect(s)}function Ad(){let{isDataRoute:s}=f.useContext(Vn);return s?My():yy()}function yy(){ai()||jt(!1);let s=f.useContext(Dd),{basename:l,future:r,navigator:d}=f.useContext(Yn),{matches:p}=f.useContext(Vn),{pathname:h}=$n(),m=JSON.stringify(Ed(p,r.v7_relativeSplatPath)),j=f.useRef(!1);return Zh(()=>{j.current=!0}),f.useCallback(function(y,b){if(b===void 0&&(b={}),!j.current)return;if(typeof y=="number"){d.go(y);return}let g=Md(y,JSON.parse(m),h,b.relative==="path");s==null&&l!=="/"&&(g.pathname=g.pathname==="/"?l:Gn([l,g.pathname])),(b.replace?d.replace:d.push)(g,b.state,b)},[l,d,m,h,s])}function Kh(s,l){let{relative:r}=l===void 0?{}:l,{future:d}=f.useContext(Yn),{matches:p}=f.useContext(Vn),{pathname:h}=$n(),m=JSON.stringify(Ed(p,d.v7_relativeSplatPath));return f.useMemo(()=>Md(s,JSON.parse(m),h,r==="path"),[s,m,h,r])}function vy(s,l){return jy(s,l)}function jy(s,l,r,d){ai()||jt(!1);let{navigator:p}=f.useContext(Yn),{matches:h}=f.useContext(Vn),m=h[h.length-1],j=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let y=$n(),b;if(l){var g;let k=typeof l=="string"?pl(l):l;v==="/"||(g=k.pathname)!=null&&g.startsWith(v)||jt(!1),b=k}else b=y;let R=b.pathname||"/",J=R;if(v!=="/"){let k=v.replace(/^\//,"").split("/");J="/"+R.replace(/^\//,"").split("/").slice(k.length).join("/")}let W=Zb(s,{pathname:J}),P=ky(W&&W.map(k=>Object.assign({},k,{params:Object.assign({},j,k.params),pathname:Gn([v,p.encodeLocation?p.encodeLocation(k.pathname).pathname:k.pathname]),pathnameBase:k.pathnameBase==="/"?v:Gn([v,p.encodeLocation?p.encodeLocation(k.pathnameBase).pathname:k.pathnameBase])})),h,r,d);return l&&P?f.createElement(qo.Provider,{value:{location:es({pathname:"/",search:"",hash:"",state:null,key:"default"},b),navigationType:qn.Pop}},P):P}function wy(){let s=Ey(),l=hy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),r=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},l),r?f.createElement("pre",{style:p},r):null,null)}const Ny=f.createElement(wy,null);class _y extends f.Component{constructor(l){super(l),this.state={location:l.location,revalidation:l.revalidation,error:l.error}}static getDerivedStateFromError(l){return{error:l}}static getDerivedStateFromProps(l,r){return r.location!==l.location||r.revalidation!=="idle"&&l.revalidation==="idle"?{error:l.error,location:l.location,revalidation:l.revalidation}:{error:l.error!==void 0?l.error:r.error,location:r.location,revalidation:l.revalidation||r.revalidation}}componentDidCatch(l,r){console.error("React Router caught the following error during render",l,r)}render(){return this.state.error!==void 0?f.createElement(Vn.Provider,{value:this.props.routeContext},f.createElement(Xh.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sy(s){let{routeContext:l,match:r,children:d}=s,p=f.useContext(Dd);return p&&p.static&&p.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=r.route.id),f.createElement(Vn.Provider,{value:l},d)}function ky(s,l,r,d){var p;if(l===void 0&&(l=[]),r===void 0&&(r=null),d===void 0&&(d=null),s==null){var h;if(!r)return null;if(r.errors)s=r.matches;else if((h=d)!=null&&h.v7_partialHydration&&l.length===0&&!r.initialized&&r.matches.length>0)s=r.matches;else return null}let m=s,j=(p=r)==null?void 0:p.errors;if(j!=null){let b=m.findIndex(g=>g.route.id&&(j==null?void 0:j[g.route.id])!==void 0);b>=0||jt(!1),m=m.slice(0,Math.min(m.length,b+1))}let v=!1,y=-1;if(r&&d&&d.v7_partialHydration)for(let b=0;b<m.length;b++){let g=m[b];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(y=b),g.route.id){let{loaderData:R,errors:J}=r,W=g.route.loader&&R[g.route.id]===void 0&&(!J||J[g.route.id]===void 0);if(g.route.lazy||W){v=!0,y>=0?m=m.slice(0,y+1):m=[m[0]];break}}}return m.reduceRight((b,g,R)=>{let J,W=!1,P=null,k=null;r&&(J=j&&g.route.id?j[g.route.id]:void 0,P=g.route.errorElement||Ny,v&&(y<0&&R===0?(Dy("route-fallback"),W=!0,k=null):y===R&&(W=!0,k=g.route.hydrateFallbackElement||null)));let G=l.concat(m.slice(0,R+1)),H=()=>{let A;return J?A=P:W?A=k:g.route.Component?A=f.createElement(g.route.Component,null):g.route.element?A=g.route.element:A=b,f.createElement(Sy,{match:g,routeContext:{outlet:b,matches:G,isDataRoute:r!=null},children:A})};return r&&(g.route.ErrorBoundary||g.route.errorElement||R===0)?f.createElement(_y,{location:r.location,revalidation:r.revalidation,component:P,error:J,children:H(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):H()},null)}var Jh=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(Jh||{}),Fh=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(Fh||{});function Cy(s){let l=f.useContext(Dd);return l||jt(!1),l}function zy(s){let l=f.useContext(gy);return l||jt(!1),l}function Ty(s){let l=f.useContext(Vn);return l||jt(!1),l}function Wh(s){let l=Ty(),r=l.matches[l.matches.length-1];return r.route.id||jt(!1),r.route.id}function Ey(){var s;let l=f.useContext(Xh),r=zy(),d=Wh();return l!==void 0?l:(s=r.errors)==null?void 0:s[d]}function My(){let{router:s}=Cy(Jh.UseNavigateStable),l=Wh(Fh.UseNavigateStable),r=f.useRef(!1);return Zh(()=>{r.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),r.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,es({fromRouteId:l},h)))},[s,l])}const Vf={};function Dy(s,l,r){Vf[s]||(Vf[s]=!0)}function Ay(s,l){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function $f(s){let{to:l,replace:r,state:d,relative:p}=s;ai()||jt(!1);let{future:h,static:m}=f.useContext(Yn),{matches:j}=f.useContext(Vn),{pathname:v}=$n(),y=Ad(),b=Md(l,Ed(j,h.v7_relativeSplatPath),v,p==="path"),g=JSON.stringify(b);return f.useEffect(()=>y(JSON.parse(g),{replace:r,state:d,relative:p}),[y,g,p,r,d]),null}function mt(s){jt(!1)}function Oy(s){let{basename:l="/",children:r=null,location:d,navigationType:p=qn.Pop,navigator:h,static:m=!1,future:j}=s;ai()&&jt(!1);let v=l.replace(/^\/*/,"/"),y=f.useMemo(()=>({basename:v,navigator:h,static:m,future:es({v7_relativeSplatPath:!1},j)}),[v,j,h,m]);typeof d=="string"&&(d=pl(d));let{pathname:b="/",search:g="",hash:R="",state:J=null,key:W="default"}=d,P=f.useMemo(()=>{let k=Td(b,v);return k==null?null:{location:{pathname:k,search:g,hash:R,state:J,key:W},navigationType:p}},[v,b,g,R,J,W,p]);return P==null?null:f.createElement(Yn.Provider,{value:y},f.createElement(qo.Provider,{children:r,value:P}))}function Uy(s){let{children:l,location:r}=s;return vy(vd(l),r)}new Promise(()=>{});function vd(s,l){l===void 0&&(l=[]);let r=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...l,p];if(d.type===f.Fragment){r.push.apply(r,vd(d.props.children,h));return}d.type!==mt&&jt(!1),!d.props.index||!d.props.children||jt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=vd(d.props.children,h)),r.push(m)}),r}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jd(){return jd=Object.assign?Object.assign.bind():function(s){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var d in r)Object.prototype.hasOwnProperty.call(r,d)&&(s[d]=r[d])}return s},jd.apply(this,arguments)}function Ry(s,l){if(s==null)return{};var r={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(l.indexOf(p)>=0)&&(r[p]=s[p]);return r}function Hy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Ly(s,l){return s.button===0&&(!l||l==="_self")&&!Hy(s)}const qy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],By="6";try{window.__reactRouterVersion=By}catch{}const Gy="startTransition",Qf=Hb[Gy];function Yy(s){let{basename:l,children:r,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=$b({window:p,v5Compat:!0}));let m=h.current,[j,v]=f.useState({action:m.action,location:m.location}),{v7_startTransition:y}=d||{},b=f.useCallback(g=>{y&&Qf?Qf(()=>v(g)):v(g)},[v,y]);return f.useLayoutEffect(()=>m.listen(b),[m,b]),f.useEffect(()=>Ay(d),[d]),f.createElement(Oy,{basename:l,children:r,location:j.location,navigationType:j.action,navigator:m,future:d})}const Vy=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",$y=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Qy=f.forwardRef(function(l,r){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:j,target:v,to:y,preventScrollReset:b,viewTransition:g}=l,R=Ry(l,qy),{basename:J}=f.useContext(Yn),W,P=!1;if(typeof y=="string"&&$y.test(y)&&(W=y,Vy))try{let A=new URL(window.location.href),F=y.startsWith("//")?new URL(A.protocol+y):new URL(y),ie=Td(F.pathname,J);F.origin===A.origin&&ie!=null?y=ie+F.search+F.hash:P=!0}catch{}let k=by(y,{relative:p}),G=Xy(y,{replace:m,state:j,target:v,preventScrollReset:b,relative:p,viewTransition:g});function H(A){d&&d(A),A.defaultPrevented||G(A)}return f.createElement("a",jd({},R,{href:W||k,onClick:P||h?d:H,ref:r,target:v}))});var Xf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Xf||(Xf={}));var Zf;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(Zf||(Zf={}));function Xy(s,l){let{target:r,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:j}=l===void 0?{}:l,v=Ad(),y=$n(),b=Kh(s,{relative:m});return f.useCallback(g=>{if(Ly(g,r)){g.preventDefault();let R=d!==void 0?d:Do(y)===Do(b);v(s,{replace:R,state:p,preventScrollReset:h,relative:m,viewTransition:j})}},[y,v,b,d,p,r,s,h,m,j])}function wt(){const s=Ad();return f.useMemo(()=>({push:l=>s(l),replace:l=>s(l,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function Zy(){return $n().pathname}function Ky({href:s,...l}){return t.jsx(Qy,{to:s,...l})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ph=(...s)=>s.filter((l,r,d)=>!!l&&l.trim()!==""&&d.indexOf(l)===r).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Fy={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=f.forwardRef(({color:s="currentColor",size:l=24,strokeWidth:r=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,...j},v)=>f.createElement("svg",{ref:v,...Fy,width:l,height:l,stroke:s,strokeWidth:d?Number(r)*24/Number(l):r,className:Ph("lucide",p),...j},[...m.map(([y,b])=>f.createElement(y,b)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=(s,l)=>{const r=f.forwardRef(({className:d,...p},h)=>f.createElement(Wy,{ref:h,iconNode:l,className:Ph(`lucide-${Jy(s)}`,d),...p}));return r.displayName=`${s}`,r};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=ye("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kf=ye("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=ye("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jf=ye("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=ye("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ev=ye("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=ye("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=ye("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=ye("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=ye("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=ye("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=ye("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=ye("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ff=ye("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ye("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=ye("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=ye("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=ye("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=ye("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=ye("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wf=ye("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=ye("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=ye("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=ye("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=ye("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=ye("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=ye("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=ye("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ye("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ye("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=ye("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=ye("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ye("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=ye("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ye("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ye("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=ye("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ye("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ex=ye("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ye("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=ye("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ye("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ye("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=ye("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=ye("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ye("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pf=ye("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=ye("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ye("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const If=ye("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=ye("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=ye("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tx=ye("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=ye("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ye("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ye("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ye("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ye("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ye("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ye("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ye("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ye("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ye("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ye("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=ye("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=ye("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=ye("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ye("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ye("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ye("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ye("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ye("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=ye("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ye("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=ye("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ye("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Av="/api/v3";var Gh;const he=typeof window<"u"&&((Gh=window.settings)==null?void 0:Gh.secure_path)||"ZicFree123",Mo="authorization";function Ov(s){if(typeof window>"u"||typeof document>"u")return null;const l=s+"=",r=document.cookie.split(";");for(let d=0;d<r.length;d++){let p=r[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(l)===0)try{const h=p.substring(l.length,p.length),m=decodeURIComponent(h),j=JSON.parse(m);return j&&typeof j=="object"&&"value"in j?j.value:m}catch{try{return decodeURIComponent(p.substring(l.length,p.length))}catch{return p.substring(l.length,p.length)}}}return null}function Uv(s,l,r=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:l}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",j=new Date;j.setTime(j.getTime()+r*24*60*60*1e3);const v=`expires=${j.toUTCString()}`,y=m?"":`domain=${window.location.hostname};`;let b=`${s}=${encodeURIComponent(p)}; ${v}; ${y} path=/`;h&&(b+="; secure"),b+="; SameSite=Lax",document.cookie=b;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function Rv(s){if(typeof window>"u"||typeof document>"u")return;const l=window.location.hostname,r=["",l,l.startsWith(".")?l:`.${l}`],d=["/","/dashboard","/user","/admin"];r.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function ax(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Mo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Mo,s)}catch{}if(!s&&(s=Ov("auth_data"),s))try{window.localStorage.setItem(Mo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Hv(s,l){const r=s.startsWith("/")?s:`/${s}`,d=new URL(`${Av}${r}`,window.location.origin);return Object.entries(l??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function Tt(){return!!ax()}function Lv(s){typeof window>"u"||(window.localStorage.setItem(Mo,s),window.localStorage.setItem("auth_data",s),Uv("auth_data",s,36500))}function nx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const r=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{r.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Rv(p)})}async function pe(s,l={}){const r={},d=l.method??"GET";if(d!=="GET"&&(r["content-type"]="application/json"),l.auth!==!1){const v=ax();v&&(r.authorization=v)}const p=await fetch(Hv(s,l.params),{method:d,headers:r,body:d==="GET"?void 0:JSON.stringify(l.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),j=m?await p.json():await p.text();if(!p.ok){(p.status===401||p.status===403)&&l.auth!==!1&&(nx(),window.location.hash="/login");const v=typeof j=="object"&&j&&"message"in j?String(j.message):`Request failed with status ${p.status}`;throw new Error(v)}if(!m&&typeof j=="string"&&(j.trim().startsWith("<!DOCTYPE html")||j.trim().startsWith("<html")||j.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return j}async function qv(s,l){return pe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:l}})}async function Bv(){const s=`/${he}/stat`,[l,r,d,p,h,m]=await Promise.all([pe(`${s}/getOverride`),pe(`${s}/getOrder`),pe(`${s}/getServerTodayRank`),pe(`${s}/getServerLastRank`),pe(`${s}/getUserTodayRank`),pe(`${s}/getUserLastRank`)]);return{override:l.data,order:r.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function Gv(){return(await pe(`/${he}/config/fetch`)).data}async function lx(s){return pe(`/${he}/config/save`,{method:"POST",body:s})}async function Yv(){return(await pe(`/${he}/config/getEmailTemplate`)).data}async function Vv(){return(await pe(`/${he}/plan/fetch`)).data.map(l=>({id:l.id,name:l.name}))}async function $v(){return pe(`/${he}/config/testSendMail`,{method:"POST",body:{}})}async function Qv(s){return pe(`/${he}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function Xv(){return(await pe(`/${he}/payment/fetch`)).data}async function Zv(){return(await pe(`/${he}/payment/getPaymentMethods`)).data}async function ih(s,l){return(await pe(`/${he}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:l}})).data}async function Kv(s){return pe(`/${he}/payment/save`,{method:"POST",body:s})}async function Jv(s){return pe(`/${he}/payment/show`,{method:"POST",body:{id:s}})}async function Fv(s){return pe(`/${he}/payment/drop`,{method:"POST",body:{id:s}})}async function Wv(s){return pe(`/${he}/payment/sort`,{method:"POST",body:{ids:s}})}async function Pv(){return(await pe(`/${he}/theme/getThemes`)).data}async function Iv(s){return(await pe(`/${he}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function e1(s,l){const r=window.btoa(unescape(encodeURIComponent(JSON.stringify(l))));return pe(`/${he}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:r}})}async function ns(){return(await pe(`/${he}/server/group/fetch`)).data}async function ix(s){return pe(`/${he}/server/group/save`,{method:"POST",body:s})}async function t1(s){return pe(`/${he}/server/group/drop`,{method:"POST",body:{id:s}})}const sx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function ox(){return(await pe(`/${he}/server/route/fetch`)).data}async function a1(s){return pe(`/${he}/server/route/save`,{method:"POST",body:s})}async function n1(s){return pe(`/${he}/server/route/drop`,{method:"POST",body:{id:s}})}async function ml(){return(await pe(`/${he}/plan/fetch`)).data}async function l1(s){return pe(`/${he}/plan/save`,{method:"POST",body:s})}async function i1(s){return pe(`/${he}/plan/drop`,{method:"POST",body:{id:s}})}async function sh(s,l){return pe(`/${he}/plan/update`,{method:"POST",body:{id:s,...l}})}async function oh(s){return pe(`/${he}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function s1(s={}){const l=new URLSearchParams;return l.set("current",String(s.current??1)),l.set("pageSize",String(s.pageSize??15)),s.is_commission&&l.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{l.set(`filter[${p}][key]`,d.key),l.set(`filter[${p}][condition]`,d.condition),l.set(`filter[${p}][value]`,d.value)}),await pe(`/${he}/order/fetch?${l.toString()}`)}async function o1(s){return pe(`/${he}/order/paid`,{method:"POST",body:{trade_no:s}})}async function r1(s){return pe(`/${he}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function rx(s){return pe(`/${he}/order/assign`,{method:"POST",body:s})}async function c1(s,l){return pe(`/${he}/order/update`,{method:"POST",body:{trade_no:s,commission_status:l}})}async function d1(s){return pe(`/${he}/order/detail`,{method:"POST",body:{id:s}})}async function u1(s=1,l=15){return pe(`/${he}/coupon/fetch?current=${s}&pageSize=${l}`)}async function p1(s){return pe(`/${he}/coupon/generate`,{method:"POST",body:s})}async function m1(s){return pe(`/${he}/coupon/drop`,{method:"POST",body:{id:s}})}async function f1(s){return pe(`/${he}/coupon/show`,{method:"POST",body:{id:s}})}async function h1(s=1,l=15){return pe(`/${he}/giftcard/fetch?current=${s}&pageSize=${l}`)}async function x1(s){return pe(`/${he}/giftcard/generate`,{method:"POST",body:s})}async function g1(s){return pe(`/${he}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Sd(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r&&r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${he}/user/fetch?${d.toString()}`)}async function b1(s){return pe(`/${he}/user/update`,{method:"POST",body:s})}async function cx(s){return pe(`/${he}/user/getUserInfoById`,{params:{id:s}})}async function y1(s){return pe(`/${he}/user/delUser`,{method:"POST",body:{id:s}})}async function v1(s){return pe(`/${he}/user/generate`,{method:"POST",body:s})}async function j1(s){return pe(`/${he}/user/resetSecret`,{method:"POST",body:{id:s}})}async function w1(s=1,l=15,r,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(l)),d&&p.set("include_subscribe_url","1"),r==null||r.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),pe(`/${he}/subscription/fetch?${p.toString()}`)}async function N1(s){return pe(`/${he}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function _1(s){return pe(`/${he}/subscription/update`,{method:"POST",body:s})}async function S1(s){return pe(`/${he}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function dx(s=1,l=15,r){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(l)),r==null||r.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${he}/device/fetch?${d.toString()}`)}async function ux(s){return pe(`/${he}/device/drop`,{method:"POST",body:{id:s}})}async function px(s){return pe(`/${he}/device/ban`,{method:"POST",body:{id:s}})}async function k1(s){return pe(`/${he}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function C1(s,l=1,r=10){return pe(`/${he}/stat/getStatUser`,{params:{user_id:s,current:l,pageSize:r}})}async function z1(){return(await pe(`/${he}/notice/fetch`)).data}async function T1(s){return pe(`/${he}/notice/save`,{method:"POST",body:s})}async function E1(s){return pe(`/${he}/notice/drop`,{method:"POST",body:{id:s}})}async function M1(s){return pe(`/${he}/notice/show`,{method:"POST",body:{id:s}})}async function D1(){return(await pe(`/${he}/ticket/fetch`)).data}async function rh(s){return(await pe(`/${he}/ticket/fetch`,{params:{id:s}})).data}async function A1(s,l){return pe(`/${he}/ticket/reply`,{method:"POST",body:{id:s,message:l}})}async function O1(s){return pe(`/${he}/ticket/close`,{method:"POST",body:{id:s}})}async function U1(){return(await pe(`/${he}/knowledge/fetch`)).data}async function R1(s){return(await pe(`/${he}/knowledge/fetch`,{params:{id:s}})).data}async function H1(s){return pe(`/${he}/knowledge/save`,{method:"POST",body:s})}async function L1(s){return pe(`/${he}/knowledge/drop`,{method:"POST",body:{id:s}})}async function q1(s){return pe(`/${he}/knowledge/show`,{method:"POST",body:{id:s}})}async function B1(){return(await pe(`/${he}/webcon/fetch`)).data}async function G1(s){return pe(`/${he}/webcon/save`,{method:"POST",body:s})}async function Y1(s){return pe(`/${he}/webcon/drop`,{method:"POST",body:{id:s}})}async function V1(s){return pe(`/${he}/webcon/show`,{method:"POST",body:{id:s}})}async function $1(){return pe(`/${he}/system/getSystemStatus`)}async function Q1(){return pe(`/${he}/system/getQueueStats`)}async function X1(){return pe(`/${he}/system/getQueueWorkload`)}async function Z1(){return pe(`/${he}/system/getSystemLog`)}async function ch(){return pe(`/${he}/server/manage/getNodes`)}async function K1(s,l){return pe(`/${he}/server/${s}/save`,{method:"POST",body:l})}async function J1(s,l){return pe(`/${he}/server/${s}/drop`,{method:"POST",body:{id:l}})}async function F1(s,l,r){return pe(`/${he}/server/${s}/update`,{method:"POST",body:{id:l,show:r}})}async function W1(s,l){return pe(`/${he}/server/${s}/copy`,{method:"POST",body:{id:l}})}async function P1(s){return pe(`/${he}/server/manage/sort`,{method:"POST",body:s})}const Ud=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],mx="admin-locale",kd="vi-VN",I1="/assets/adminzic",fx=f.createContext(null);function e0(){if(typeof window>"u")return kd;const s=localStorage.getItem(mx);return s&&Ud.some(l=>l.code===s)?s:kd}function t0(s,l){return l?Object.entries(l).reduce((r,[d,p])=>r.replaceAll(`{${d}}`,String(p)),s):s}function a0(s){return new Promise((l,r)=>{var m;if(typeof window>"u"){l({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){l(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var j;l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})}),p.addEventListener("error",r);return}const h=document.createElement("script");h.src=`${I1}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var j;return l(((j=window.AdminNextI18n)==null?void 0:j[s])??{})},h.onerror=r,document.head.appendChild(h)})}function n0({children:s}){const[l,r]=f.useState(kd),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{r(e0())},[]);const j=f.useCallback(b=>{r(b),typeof window<"u"&&localStorage.setItem(mx,b)},[]);f.useEffect(()=>{let b=!0;return m(!0),a0(l).then(g=>{b&&p(g)}).finally(()=>{b&&m(!1)}),()=>{b=!1}},[l]);const v=f.useCallback((b,g)=>t0(d[b]??b,g),[d]),y=f.useMemo(()=>({locale:l,loading:h,setLocale:j,t:v}),[l,h,j,v]);return t.jsx(fx.Provider,{value:y,children:s})}function He(){const s=f.useContext(fx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function l0(){const s=wt(),{t:l,locale:r,setLocale:d}=He(),[p,h]=f.useState(""),[m,j]=f.useState(""),[v,y]=f.useState(""),[b,g]=f.useState(!1),[R,J]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function k(G){W.current&&!W.current.contains(G.target)&&J(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]),f.useEffect(()=>{Tt()&&s.replace("/dashboard")},[s]);async function P(k){var G,H,A,F;k.preventDefault(),y(""),g(!0);try{const ie=await qv(p,m),de=((G=ie.data)==null?void 0:G.auth_data)??((H=ie.data)==null?void 0:H.token),U=((A=ie.data)==null?void 0:A.is_admin)===1||((F=ie.data)==null?void 0:F.is_admin)===!0;if(!de||!U)throw new Error(l("login.adminRequired"));Lv(de),s.replace("/dashboard")}catch(ie){y(ie instanceof Error?ie.message:l("login.failed"))}finally{g(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:l("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:l("login.eyebrow")}),t.jsx("h1",{children:l("login.heading")}),t.jsx("span",{children:l("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":l("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.language"),onClick:()=>J(k=>!k),children:t.jsx(ls,{size:17})}),R?t.jsx("div",{className:"locale-menu",children:Ud.map(k=>t.jsxs("button",{className:`locale-option ${r===k.code?"active":""}`,type:"button",onClick:()=>{d(k.code),J(!1)},children:[t.jsx("span",{className:"locale-flag",children:k.flag}),t.jsx("span",{children:k.label})]},k.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(wv,{size:18}),t.jsx("span",{children:l("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:l("login.title")}),t.jsx("p",{children:l("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(ex,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:k=>h(k.target.value),placeholder:l("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(fv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:k=>j(k.target.value),placeholder:l("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:b,type:"submit",children:l(b?"login.signingIn":"login.submit")})]})]})]})}function $t(s){const l=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(l)}function Ya(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function i0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const s0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:ov}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Sv},{href:"/config/payment",label:"nav.paymentConfig",icon:iv},{href:"/config/theme",label:"nav.themeConfig",icon:Tv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Od},{href:"/server/group",label:"nav.groupManagement",icon:Mv},{href:"/server/route",label:"nav.routeManagement",icon:_v}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:eh},{href:"/order",label:"nav.orders",icon:mv},{href:"/coupon",label:"nav.coupons",icon:rv},{href:"/giftcard",label:"nav.giftcards",icon:Cv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:_d},{href:"/subscription",label:"nav.subscriptions",icon:eh},{href:"/device",label:"nav.devices",icon:kv},{href:"/webcon",label:"nav.webcon",icon:ls},{href:"/notice",label:"nav.notices",icon:Fi},{href:"/ticket",label:"nav.tickets",icon:pv},{href:"/knowledge",label:"nav.knowledge",icon:ev}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:tv}]}];function o0(){const[s,l]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";l(h),document.documentElement.setAttribute("data-theme",h)},[]);const r=f.useCallback(p=>{l(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{r(s==="light"?"dark":"light")},[s,r]);return{theme:s,toggle:d}}function At({children:s,title:l,subtitle:r}){const[d,p]=f.useState(!1),h=wt(),m=Zy(),{t:j,locale:v,setLocale:y}=He(),{theme:b,toggle:g}=o0(),[R,J]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function k(G){W.current&&!W.current.contains(G.target)&&J(!1)}return document.addEventListener("mousedown",k),()=>document.removeEventListener("mousedown",k)},[]);function P(){nx(),h.replace("/login")}return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:j("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:s0.map(k=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:j(k.label)}),k.items.map(G=>{const H=G.icon,A=m===G.href;return t.jsxs(Ky,{className:`nav-item ${A?"active":""}`,href:G.href,onClick:()=>p(!1),children:[t.jsx(H,{size:17}),t.jsx("span",{children:j(G.label)})]},G.href)})]},k.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":j(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(k=>!k),children:d?t.jsx(tt,{size:19}):t.jsx(xv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:l}),r?t.jsx("p",{children:r}):null]}),t.jsxs("div",{className:"topbar-actions",children:[t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":j("common.language"),onClick:()=>J(k=>!k),children:t.jsx(ls,{size:17})}),R?t.jsx("div",{className:"locale-menu",children:Ud.map(k=>t.jsxs("button",{className:`locale-option ${v===k.code?"active":""}`,type:"button",onClick:()=>{y(k.code),J(!1)},children:[t.jsx("span",{className:"locale-flag",children:k.flag}),t.jsx("span",{children:k.label})]},k.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":b==="dark"?"Switch to light mode":"Switch to dark mode",onClick:g,children:b==="dark"?t.jsx(zv,{size:17}):t.jsx(gv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,children:[t.jsx(hv,{size:16}),t.jsx("span",{children:j("common.logout")})]})]})]}),t.jsx("main",{className:"content",children:s})]})]})}const dh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function hx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function Wi(s){return Number(s??0)}function uh(s){return Wi(s)/100}function ph(s){return`${Ya(Math.round(s))} VND`}function xx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function r0(s){const l=new Date;return l.setHours(0,0,0,0),Array.from({length:s},(r,d)=>{const p=new Date(l);return p.setDate(l.getDate()-(s-d-1)),xx(p)})}function mh(s,l){const r=s.get(l);if(r)return r;const d=hx(l);return s.set(l,d),d}function c0(s){const l=s.toLowerCase();return l==="register_count"||l.includes("đăng")||l.includes("register")?"registrations":l==="order_count"?"orderCount":l==="paid_count"||l.includes("giao dịch thu")?"paidCount":l==="paid_total"||l.includes("tiền thu")?"paidAmount":l==="commission_count"||l.includes("giao dịch hoa hồng")?"commissionCount":l==="commission_total"||l.includes("tiền hoa hồng")?"commissionAmount":null}function jo({label:s,value:l,helper:r,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:l})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(Iy,{size:19})}),r?t.jsx("small",{children:r}):null]})}function dt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(zt,{size:18}),t.jsx("span",{children:s})]})}function d0(s,l){const r=new Map,d=new Map;if(s.forEach(p=>{const h=mh(r,p.date),m=c0(p.type);if(m){h[m]=Number(p.value||0);return}const j=d.get(p.date)??0,v=dh[j%dh.length];h[v]=Number(p.value||0),d.set(p.date,j+1)}),l){const p=mh(r,xx(new Date));p.registrations=Wi(l.day_register_total),l.day_order_total!==void 0&&(p.orderCount=Wi(l.day_order_total)),l.day_paid_order_total!==void 0&&(p.paidCount=Wi(l.day_paid_order_total)),p.paidAmount=uh(l.day_paid_income??l.day_income),l.day_commission_payout!==void 0&&(p.commissionAmount=uh(l.day_commission_payout)),l.day_commission_count!==void 0&&(p.commissionCount=Wi(l.day_commission_count))}return r.size===0?[]:r0(31).map(p=>r.get(p)??hx(p))}function u0({records:s,override:l}){const{t:r}=He(),[d,p]=f.useState("paidAmount"),[h,m]=f.useState(null),[j,v]=f.useState(0),[y,b]=f.useState(0),g=[{key:"paidAmount",label:r("dashboard.chartRevenue"),summaryLabel:r("dashboard.peakRevenue"),color:"#2f8f83",format:ph},{key:"orderCount",label:r("dashboard.chartOrderCount"),summaryLabel:r("dashboard.peakOrderCount"),color:"#2563eb",format:Ya},{key:"paidCount",label:r("dashboard.chartPaidCount"),summaryLabel:r("dashboard.peakPaidCount"),color:"#7c3aed",format:Ya},{key:"commissionAmount",label:r("dashboard.chartCommission"),summaryLabel:r("dashboard.peakCommission"),color:"#c2410c",format:ph},{key:"commissionCount",label:r("dashboard.chartCommissionCount"),summaryLabel:r("dashboard.peakCommissionCount"),color:"#be123c",format:Ya},{key:"registrations",label:r("dashboard.chartRegistrations"),summaryLabel:r("dashboard.peakRegistrations"),color:"#0891b2",format:Ya}],R=g.find(Y=>Y.key===d)??g[0],J=d0(s,l),W=Y=>Number(Y[R.key]||0),P=Math.max(...J.map(W),1),k=720,G=220,H=28,A=J.length>1?(k-H*2)/(J.length-1):0,F=Y=>G-H-Y/P*(G-H*2),ie=J.map((Y,ee)=>`${H+ee*A},${F(W(Y))}`).join(" "),de=Math.max(Math.ceil(J.length/6),1),U=`dashboardTrendFill-${R.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("dashboard.revenueTrend")}),t.jsx("p",{children:r("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:r("dashboard.lastDays",{count:J.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":r("dashboard.chartMetrics"),children:g.map(Y=>t.jsx("button",{type:"button",className:d===Y.key?"active":"",onClick:()=>{p(Y.key),m(null)},children:Y.label},Y.key))}),J.length===0?t.jsx("div",{className:"empty-state",children:r("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${k} ${G}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:U,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:R.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:R.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(Y=>t.jsx("line",{className:"chart-grid",x1:H,x2:k-H,y1:H+Y*(G-H*2),y2:H+Y*(G-H*2)},Y)),J.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${U})`},points:`${H},${G-H} ${ie} ${k-H},${G-H}`}),t.jsx("polyline",{className:"chart-line",points:ie,style:{stroke:R.color}}),J.map((Y,ee)=>{const fe=H+ee*A,S=F(W(Y));return t.jsxs("g",{children:[t.jsx("circle",{cx:fe,cy:S,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m(Y),v(fe),b(S)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:fe,cy:S,r:(h==null?void 0:h.date)===Y.date?6:4,fill:R.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===Y.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},Y.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${j/k*100}%`,top:`${y/G*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[r("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[R.label,": ",R.format(W(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:J.filter((Y,ee)=>ee===0||ee===J.length-1||ee%de===0).map(Y=>t.jsx("span",{children:Y.date},Y.date))}),J.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:R.summaryLabel}),t.jsx("strong",{children:R.format(P)})]}):null]})}function wo({title:s,subtitle:l,records:r,labelKey:d}){const{t:p}=He(),h=Math.max(...r.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:l})]})}),t.jsx("div",{className:"rank-list",children:r.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):r.slice(0,8).map((m,j)=>{const v=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),y=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:j+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[i0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(y,3)}%`}})})]},`${v}-${j}`)})})]})}function id({label:s,current:l,previous:r}){const{t:d}=He();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof l=="number"?Ya(l):l}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof r=="number"?Ya(r):r]})]})}function p0(){var y,b,g,R,J,W,P,k,G,H,A,F;const s=wt(),{t:l}=He(),[r,d]=f.useState(null),[p,h]=f.useState(""),[m,j]=f.useState(!0),v=f.useCallback(async()=>{j(!0),h("");try{d(await Bv())}catch(ie){h(ie instanceof Error?ie.message:l("dashboard.loadFailed"))}finally{j(!1)}},[l]);return f.useEffect(()=>{if(!Tt()){s.replace("/login");return}v()},[v,s]),t.jsxs(At,{title:l("dashboard.title"),subtitle:l("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(zt,{size:16}),l("common.retry")]})]}):null,m&&!r?t.jsx(dt,{label:l("dashboard.loading")}):null,r?t.jsxs(t.Fragment,{children:[((y=r.override)==null?void 0:y.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:l("dashboard.pendingTickets",{count:(b=r.override)==null?void 0:b.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:l("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("dashboard.today")}),t.jsx("p",{children:l("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(jo,{label:l("dashboard.onlineUsers"),value:Ya(((g=r.override)==null?void 0:g.online_user)??0),helper:l("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(jo,{label:l("dashboard.todayIncome"),value:`${$t(((R=r.override)==null?void 0:R.day_paid_income)??((J=r.override)==null?void 0:J.day_income)??0)} VND`,helper:l("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(jo,{label:l("dashboard.todayRegistrations"),value:Ya(((W=r.override)==null?void 0:W.day_register_total)??0),helper:l("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(jo,{label:l("dashboard.pendingCommission"),value:Ya(((P=r.override)==null?void 0:P.commission_pending_total)??0),helper:l("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(id,{label:l("dashboard.monthIncome"),current:`${$t(((k=r.override)==null?void 0:k.month_income)??0)} VND`,previous:`${$t(((G=r.override)==null?void 0:G.last_month_income)??0)} VND`}),t.jsx(id,{label:l("dashboard.monthCommission"),current:`${$t(((H=r.override)==null?void 0:H.commission_month_payout)??0)} VND`,previous:`${$t(((A=r.override)==null?void 0:A.commission_last_month_payout)??0)} VND`}),t.jsx(id,{label:l("dashboard.monthRegistrations"),current:((F=r.override)==null?void 0:F.month_register_total)??0,previous:"-"})]}),t.jsx(u0,{records:r.order,override:r.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(wo,{title:l("dashboard.serverRankToday"),subtitle:l("dashboard.trafficGb"),records:r.serverToday,labelKey:"server_name"}),t.jsx(wo,{title:l("dashboard.serverRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.serverYesterday,labelKey:"server_name"}),t.jsx(wo,{title:l("dashboard.userRankToday"),subtitle:l("dashboard.trafficGb"),records:r.userToday,labelKey:"email"}),t.jsx(wo,{title:l("dashboard.userRankYesterday"),subtitle:l("dashboard.trafficGb"),records:r.userYesterday,labelKey:"email"})]})]}):null]})}const m0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function fh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function f0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function sd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function h0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function x0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function da(s){return s===!0||s===1||s==="1"}function g0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function od(s){return s.split(",").map(l=>l.trim()).filter(Boolean)}function b0({field:s,value:l,onChange:r}){const{t:d}=He(),p=s.toInput?s.toInput(l):g0(l);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${da(l)?"on":""}`,type:"button",onClick:()=>r(da(l)?0:1),"aria-pressed":da(l),children:[t.jsx("span",{}),da(l)?fh(d)[0].label:fh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>r(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>r(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function y0({plans:s,emailTemplates:l,t:r}){const d=[{label:r("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:r("config.tabs.site"),hint:r("config.tabs.siteHint"),fields:[{key:"app_name",label:r("config.site.appName"),description:r("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:r("config.site.appDescription"),description:r("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:r("config.site.appUrl"),description:r("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:r("config.site.forceHttps"),description:r("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:r("config.site.logo"),description:r("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:r("config.site.subscribeUrl"),description:r("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:r("config.site.subscribePath"),description:r("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:r("config.site.tosUrl"),description:r("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:r("config.site.stopRegister"),description:r("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:r("config.site.trialPlan"),description:r("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:r("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:r("config.site.currency"),description:r("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:r("config.site.currencySymbol"),description:r("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:r("config.tabs.safe"),hint:r("config.tabs.safeHint"),fields:[{key:"email_verify",label:r("config.safe.emailVerify"),description:r("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:r("config.safe.gmailAlias"),description:r("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:r("config.safe.safeMode"),description:r("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:r("config.safe.securePath"),description:r("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:r("config.safe.staffPath"),description:r("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:r("config.safe.emailWhitelist"),description:r("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:r("config.safe.emailWhitelistSuffix"),description:r("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>da(p.email_whitelist_enable),fromInput:od},{key:"recaptcha_enable",label:r("config.safe.recaptcha"),description:r("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:r("config.safe.recaptchaKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"recaptcha_site_key",label:r("config.safe.recaptchaSiteKey"),type:"text",visible:p=>da(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:r("config.safe.ipRegisterLimit"),description:r("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:r("config.safe.passwordLimit"),description:r("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:r("config.safe.limitCount"),type:"number",visible:p=>da(p.password_limit_enable)},{key:"password_limit_expire",label:r("config.safe.limitMinutes"),type:"number",visible:p=>da(p.password_limit_enable)}]},{key:"subscribe",label:r("config.tabs.subscribe"),hint:r("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:r("config.subscribe.multipleSubscription"),description:r("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:r("config.subscribe.planChange"),description:r("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:r("config.subscribe.deviceHwid"),description:r("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"change_sni_enable",label:r("config.subscribe.changeSni"),description:r("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:r("config.subscribe.giftcardNotice"),description:r("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:r("config.subscribe.resetTraffic"),description:r("config.subscribe.resetTrafficHelp"),type:"select",options:f0(r)},{key:"surplus_enable",label:r("config.subscribe.surplus"),description:r("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:r("config.subscribe.allowNewPeriod"),description:r("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:r("config.subscribe.newOrderEvent"),type:"select",options:sd(r)},{key:"renew_order_event_id",label:r("config.subscribe.renewOrderEvent"),type:"select",options:sd(r)},{key:"change_order_event_id",label:r("config.subscribe.changeOrderEvent"),type:"select",options:sd(r)},{key:"show_info_to_server_enable",label:r("config.subscribe.showInfo"),description:r("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:r("config.subscribe.linkMode"),description:r("config.subscribe.linkModeHelp"),type:"select",options:h0(r)},{key:"show_subscribe_expire",label:r("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:r("config.tabs.deposit"),hint:r("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:r("config.deposit.bonus"),description:r("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:od}]},{key:"ticket",label:r("config.tabs.ticket"),hint:r("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:r("config.ticket.status"),description:r("config.ticket.statusHelp"),type:"select",options:x0(r)}]},{key:"invite",label:r("config.tabs.invite"),hint:r("config.tabs.inviteHint"),fields:[{key:"invite_force",label:r("config.invite.force"),description:r("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:r("config.invite.commission"),description:r("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:r("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:r("config.invite.neverExpire"),description:r("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:r("config.invite.firstTime"),description:r("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:r("config.invite.autoCheck"),description:r("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:r("config.invite.withdrawLimit"),description:r("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:r("config.invite.withdrawMethods"),description:r("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:od},{key:"withdraw_close_enable",label:r("config.invite.withdrawClose"),description:r("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:r("config.invite.distribution"),description:r("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:r("config.invite.level1"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:r("config.invite.level2"),type:"number",visible:p=>da(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:r("config.invite.level3"),type:"number",visible:p=>da(p.commission_distribution_enable)}]},{key:"server",label:r("config.tabs.server"),hint:r("config.tabs.serverHint"),fields:[{key:"server_api_url",label:r("config.server.apiUrl"),description:r("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:r("config.server.token"),description:r("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:r("config.server.pullInterval"),description:r("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:r("config.server.pushInterval"),description:r("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:r("config.server.nodeTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:r("config.server.deviceTrafficThreshold"),description:r("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:r("config.server.deviceLimitMode"),description:r("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:r("config.tabs.email"),hint:r("config.tabs.emailHint"),warning:r("config.email.warning"),fields:[{key:"email_host",label:r("config.email.host"),type:"text"},{key:"email_port",label:r("config.email.port"),type:"text"},{key:"email_encryption",label:r("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:r("config.email.username"),type:"text"},{key:"email_password",label:r("config.email.password"),type:"text"},{key:"email_from_address",label:r("config.email.fromAddress"),type:"text"},{key:"email_template",label:r("config.email.template"),type:"select",options:l.map(p=>({label:p,value:p}))}]},{key:"telegram",label:r("config.tabs.telegram"),hint:r("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:r("config.telegram.token"),description:r("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:r("config.telegram.enable"),description:r("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:r("config.telegram.group"),description:r("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:r("config.telegram.appleShareApi"),description:r("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:r("config.tabs.app"),hint:r("config.tabs.appHint"),warning:r("config.app.warning"),fields:[{key:"windows_version",label:r("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:r("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:r("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:r("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:r("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:r("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function v0(){const s=wt(),{t:l}=He(),[r,d]=f.useState("site"),[p,h]=f.useState(null),[m,j]=f.useState([]),[v,y]=f.useState([]),[b,g]=f.useState(!0),[R,J]=f.useState(null),[W,P]=f.useState(""),k=f.useCallback(async()=>{g(!0),P("");try{const[Y,ee,fe]=await Promise.all([Gv(),Vv(),Yv()]);h(Y),j(ee),y(fe)}catch(Y){P(Y instanceof Error?Y.message:l("config.loadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}k()},[k,s]),f.useEffect(()=>{const Y=document.querySelector(".config-tabs button.active");Y&&Y.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[r]);const G=f.useMemo(()=>y0({plans:m,emailTemplates:v,t:l}),[m,v,l]),H=G.find(Y=>Y.key===r)??G[0],A=(p==null?void 0:p[H.key])??{};function F(Y,ee,fe){h(S=>S&&{...S,[Y]:{...S[Y],[ee]:fe}})}async function ie(){var Y;if(p){J(H.key),P("");try{await lx(p[H.key]),(Y=window.showToast)==null||Y.call(window,l("config.saveSuccess"),"success")}catch(ee){P(ee instanceof Error?ee.message:l("config.saveFailed"))}finally{J(null)}}}async function de(){var Y;J("mail"),P("");try{await $v(),(Y=window.showToast)==null||Y.call(window,l("config.email.testSuccess"),"success")}catch(ee){P(ee instanceof Error?ee.message:l("config.email.testFailed"))}finally{J(null)}}async function U(){var ee;const Y=String((p==null?void 0:p.telegram.telegram_bot_token)??"");J("webhook"),P("");try{await Qv(Y),(ee=window.showToast)==null||ee.call(window,l("config.telegram.webhookSuccess"),"success")}catch(fe){P(fe instanceof Error?fe.message:l("config.telegram.webhookFailed"))}finally{J(null)}}return t.jsxs(At,{title:l("config.title"),subtitle:l("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("config.systemConfig")}),t.jsx("p",{children:l("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:k,disabled:b,children:[t.jsx(zt,{size:16}),l(b?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,b&&!p?t.jsx(dt,{label:l("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":l("config.tabsLabel"),children:m0.map(Y=>{const ee=G.find(fe=>fe.key===Y);return ee?t.jsxs("button",{className:r===Y?"active":"",type:"button",onClick:()=>d(Y),children:[t.jsx("span",{children:ee.label}),t.jsx("small",{children:ee.hint})]},Y):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:H.label}),t.jsx("p",{children:H.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:R===H.key,type:"button",onClick:ie,children:[t.jsx(va,{size:16}),R===H.key?l("config.saving"):l("config.saveTab")]})]}),H.warning?t.jsx("div",{className:"config-warning",children:H.warning}):null,t.jsx("div",{className:"config-fields",children:H.fields.map(Y=>Y.visible&&!Y.visible(A)?null:t.jsx(b0,{field:Y,value:A[Y.key],onChange:ee=>F(H.key,Y.key,ee)},Y.key))}),H.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:R==="mail",onClick:de,children:[t.jsx(ex,{size:16}),l(R==="mail"?"config.email.testing":"config.email.test")]})}):null,H.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:R==="webhook",onClick:U,children:[t.jsx(Ev,{size:16}),l(R==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(tx,{size:14}),l("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function ul(s){var r;if(typeof window>"u"||typeof document>"u")return!1;if((r=navigator.clipboard)!=null&&r.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const l=document.createElement("textarea");l.value=s,l.setAttribute("readonly",""),l.style.position="fixed",l.style.left="-9999px",l.style.top="0",document.body.appendChild(l),l.select(),l.setSelectionRange(0,l.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(l)}}function rd(s){return s===!0||s===1||s==="1"}function j0(s,l=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??l,config:{...(s==null?void 0:s.config)??{}}}}function w0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function N0(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState({}),[b,g]=f.useState(!0),[R,J]=f.useState(!1),[W,P]=f.useState(!1),[k,G]=f.useState(""),[H,A]=f.useState(""),[F,ie]=f.useState({}),de=f.useCallback(async()=>{g(!0),G("");try{const[T,I]=await Promise.all([Xv(),Zv()]);d(T),h(I),ie({})}catch(T){G(T instanceof Error?T.message:l("payment.loadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}de()},[de,s]);async function U(T){const I=(T==null?void 0:T.payment)??p[0]??"",D=j0(T,I);if(j(D),y({}),G(""),A(""),!!I){J(!0);try{y(await ih(I,T==null?void 0:T.id))}catch(X){G(X instanceof Error?X.message:l("payment.formLoadFailed"))}finally{J(!1)}}}async function Y(T){if(m){j({...m,payment:T,config:{}}),J(!0),G("");try{y(await ih(T,m.id))}catch(I){G(I instanceof Error?I.message:l("payment.formLoadFailed"))}finally{J(!1)}}}async function ee(T){var I,D;if(T.preventDefault(),!!m){P(!0),G(""),A("");try{await Kv(w0(m)),j(null),(I=window.showToast)==null||I.call(window,l("payment.saveSuccess"),"success"),await de()}catch(X){(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("payment.saveFailed"),"error")}finally{P(!1)}}}async function fe(T){var I;G(""),A("");try{await Jv(T),await de()}catch(D){(I=window.showToast)==null||I.call(window,D instanceof Error?D.message:l("payment.toggleFailed"),"error")}}async function S(T){var I;(I=window.showConfirm)==null||I.call(window,{message:l("payment.deleteConfirm"),onConfirm:async()=>{var D,X;G(""),A("");try{await Fv(T),(D=window.showToast)==null||D.call(window,l("payment.deleteSuccess"),"success"),await de()}catch(_){(X=window.showToast)==null||X.call(window,_ instanceof Error?_.message:l("payment.deleteFailed"),"error")}}})}async function L(T,I){var se;const D=T+I;if(D<0||D>=r.length)return;const X=[...r],_=X[T];X.splice(T,1),X.splice(D,0,_),d(X);try{await Wv(X.map(oe=>oe.id)),await de()}catch(oe){(se=window.showToast)==null||se.call(window,oe instanceof Error?oe.message:l("payment.sortFailed"),"error"),await de()}}async function w(T){var D;const I=await ul(T);(D=window.showToast)==null||D.call(window,l(I?"payment.copied":"common.copyFailed"),I?"success":"error")}return t.jsxs(At,{title:l("payment.title"),subtitle:l("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("payment.methods")}),t.jsx("p",{children:l("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:de,disabled:b,children:[t.jsx(zt,{size:16}),t.jsx("span",{children:l(b?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void U(),children:[t.jsx(ya,{size:16}),t.jsx("span",{children:l("payment.add")})]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,H?t.jsx("div",{className:"form-success",children:H}):null,b&&r.length===0?t.jsx(dt,{label:l("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("payment.id")}),t.jsx("th",{children:l("payment.enabled")}),t.jsx("th",{children:l("payment.displayName")}),t.jsx("th",{children:l("payment.interface")}),t.jsx("th",{children:l("payment.notifyUrl")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((T,I)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:T.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(I,-1),disabled:I===0,"aria-label":l("payment.moveUp"),children:t.jsx(Jf,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(I,1),disabled:I===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Kf,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${rd(T.enable)?"active":""}`,type:"button",onClick:()=>void fe(T.id),"aria-label":rd(T.enable)?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:T.name}),T.icon?t.jsx("small",{children:T.icon}):null]}),t.jsx("td",{children:T.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void w(T.notify_url),children:[t.jsx("span",{children:T.notify_url}),t.jsx(Ao,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void U(T),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void S(T.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},T.id)),!b&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[r.map((T,I)=>{const D=rd(T.enable),X=T.handling_fee_percent!==null&&T.handling_fee_percent!==""?`${T.handling_fee_percent}%`:"",_=T.handling_fee_fixed!==null?`${$t(T.handling_fee_fixed)} VND`:"",se=[X,_].filter(Boolean).join(" + ")||"No fees",oe=F[T.id],C=T.icon&&!oe;return t.jsxs("div",{className:`payment-mobile-card ${D?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",T.id]}),t.jsx("span",{className:"gateway-tag",children:T.payment})]}),t.jsx("button",{className:`admin-switch ${D?"active":""}`,type:"button",onClick:()=>void fe(T.id),"aria-label":l(D?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[C?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:T.icon,alt:T.name,onError:()=>{ie(Z=>({...Z,[T.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:T.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:T.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:se})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:l("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void w(T.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:T.notify_url}),t.jsx(Ao,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(I,-1),disabled:I===0,"aria-label":l("payment.moveUp"),children:t.jsx(Jf,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(I,1),disabled:I===r.length-1,"aria-label":l("payment.moveDown"),children:t.jsx(Kf,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void U(T),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void S(T.id),children:[t.jsx(Dt,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]})]},T.id)}),!b&&r.length===0?t.jsx("div",{className:"empty-state",children:l("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("payment.edit"):l("payment.add")}),t.jsx("p",{children:l("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ee,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:T=>j({...m,name:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:T=>j({...m,icon:T.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:T=>j({...m,notify_domain:T.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:T=>j({...m,handling_fee_percent:T.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:T=>j({...m,handling_fee_fixed:T.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:T=>void Y(T.target.value),children:p.map(T=>t.jsx("option",{value:T,children:T},T))})]}),R?t.jsx(dt,{label:l("payment.formLoading")}):null,R?null:Object.entries(v).map(([T,I])=>t.jsxs("label",{children:[t.jsx("span",{children:I.label}),t.jsx("input",{className:"config-input",placeholder:I.description,value:String(m.config[T]??I.value??""),onChange:D=>j({...m,config:{...m.config,[T]:D.target.value}})})]},T)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(va,{size:16}),l(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function _0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function S0(s,l){return l[s.field_name]??s.default_value??""}function k0(){const s=wt(),{t:l}=He(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(!1),[R,J]=f.useState(null),[W,P]=f.useState(""),[k,G]=f.useState(""),H=f.useCallback(async()=>{j(!0),P("");try{d(await Pv())}catch(U){P(U instanceof Error?U.message:l("theme.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}H()},[H,s]);async function A(U,Y){h(null),y(!0),P(""),G("");try{const ee=await Iv(U);h({key:U,theme:Y,values:ee})}catch(ee){P(ee instanceof Error?ee.message:l("theme.configLoadFailed"))}finally{y(!1)}}async function F(U){J(U),P(""),G("");try{await lx({frontend_theme:U}),G(l("theme.activateSuccess")),await H()}catch(Y){P(Y instanceof Error?Y.message:l("theme.activateFailed"))}finally{J(null)}}async function ie(U){if(U.preventDefault(),!!p){g(!0),P(""),G("");try{await e1(p.key,p.values),h(null),G(l("theme.saveSuccess")),await H()}catch(Y){P(Y instanceof Error?Y.message:l("theme.saveFailed"))}finally{g(!1)}}}function de(U,Y){h(ee=>ee&&{...ee,values:{...ee.values,[U]:Y}})}return t.jsxs(At,{title:l("theme.title"),subtitle:l("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.available")}),t.jsx("p",{children:l("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:H,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:l("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,k?t.jsx("div",{className:"form-success",children:k}):null,m&&!r?t.jsx(dt,{label:l("theme.loading")}):null,r?t.jsx("section",{className:"theme-grid",children:Object.entries(r.themes).map(([U,Y])=>{const ee=r.active===U;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${_0(Y)})`},children:ee?t.jsxs("span",{className:"theme-active",children:[t.jsx(Ih,{size:15}),l("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:Y.name||U}),t.jsx("p",{children:Y.description||l("theme.noDescription")})]}),t.jsxs("small",{children:[l("theme.version"),": ",Y.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void A(U,Y),children:[t.jsx(jv,{size:15}),l("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ee||R===U,type:"button",onClick:()=>void F(U),children:[t.jsx(bv,{size:15}),l(ee?"theme.current":R===U?"theme.activating":"theme.activate")]})]})]},U)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(dt,{label:l("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||l("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[(p.theme.configs??[]).map(U=>{const Y=S0(U,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:U.label}),U.description?t.jsx("p",{className:"field-description",children:U.description}):null,U.field_type==="select"?t.jsx("select",{className:"config-input",value:Y,onChange:ee=>de(U.field_name,ee.target.value),children:Object.entries(U.select_options??{}).map(([ee,fe])=>t.jsx("option",{value:ee,children:fe},ee))}):null,U.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:U.placeholder,rows:5,value:Y,onChange:ee=>de(U.field_name,ee.target.value)}):null,U.field_type!=="select"&&U.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:U.placeholder,value:Y,onChange:ee=>de(U.field_name,ee.target.value)}):null]},U.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:l("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(va,{size:16}),l(b?"theme.saving":"common.save")]})]})]})]})}):null]})}const hh=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"v2node",label:"V2Node"}],C0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],z0=["tcp","ws","grpc","http","httpupgrade","xhttp"],T0=["tcp","ws","grpc","http","httpupgrade","xhttp"],E0=["tcp","ws","grpc"],gx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],M0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"];function D0(s,l,r=""){return s[l]??r}function Ze(s,l,r=""){return String(D0(s,l,r))}function Go(s,l){const r=s[l];return r&&typeof r=="object"&&!Array.isArray(r)?r:{}}function xh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(r=>r.trim()):[]).map(r=>Number(r)).filter(r=>Number.isFinite(r))}function gh(s,l){if(l){const d=JSON.parse(JSON.stringify(l));return d.group_id=xh(d.group_id),d.route_id=xh(d.route_id),{_type:s,...d}}const r={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...r,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...r,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...r,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...r,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...r,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...r,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...r,server_name:"",insecure:0,padding_scheme:""};case"v2node":return{...r,protocol:"vless",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return r}}function A0({initialValue:s,onCancel:l,onSave:r}){const{t:d}=He(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,j]=f.useState(""),v=b=>{if(b.preventDefault(),!p.trim()){r({});return}try{const g=JSON.parse(p);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");r(g)}catch(g){j(g instanceof Error?g.message:"Invalid JSON")}},y=b=>{if(h(b),!b.trim()){j("");return}try{const g=JSON.parse(b);if(typeof g!="object"||g===null)throw new Error("Must be a JSON object {} or array []");j("")}catch(g){j(g instanceof Error?g.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:b=>y(b.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:l,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:l,actionText:r,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,l&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),r&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:r})]})}function O0({value:s,onChange:l,label:r}){const{t:d}=He(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:r}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,j)=>t.jsxs("span",{className:"tag",onClick:()=>l(s.filter((v,y)=>y!==j)),style:{cursor:"pointer"},children:[m," ×"]},j)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),l([...s,p.trim()]),h(""))}})]})]})}function bh({options:s,value:l,onChange:r,label:d,actionText:p,onAction:h}){const{t:m}=He(),[j,v]=f.useState(""),y=s.filter(g=>l.includes(g.id)),b=s.filter(g=>g.name.toLowerCase().includes(j.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:p,onAction:h}),y.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:y.map(g=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>r(l.filter(R=>R!==g.id)),children:[g.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},g.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:j,onChange:g=>v(g.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[b.map(g=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:l.includes(g.id),onChange:R=>r(R.target.checked?[...l,g.id]:l.filter(J=>J!==g.id))}),t.jsx("span",{children:g.name})]},g.id)),b.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function cn({label:s,checked:l,onChange:r}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:l,onChange:d=>r(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:l?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:l?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function U0({initialValue:s,isSnakeCase:l,onCancel:r,onSave:d}){const{t:p}=He(),h=l?"server_name":"serverName",m=l?"allow_insecure":"allowInsecure",[j,v]=f.useState(String((s==null?void 0:s[h])??"")),[y,b]=f.useState(()=>{const R=s==null?void 0:s[m];return R===1||R===!0||String(R)==="1"||String(R)==="true"}),g=R=>{R.preventDefault(),d({[h]:j,[m]:l?y?1:0:y})};return t.jsxs("form",{onSubmit:g,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:p("node.serverName")}),t.jsx("input",{className:"config-input",value:j,onChange:R=>v(R.target.value),placeholder:p("node.serverNameHelp")})]}),t.jsx(cn,{label:p("node.allowInsecure"),checked:y,onChange:b}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function R0({draft:s,set:l,groups:r,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:j}){const{t:v}=He(),y=String(s._type),b=Ze(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"name"),onChange:g=>l("name",g.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Ze(s,"rate","1"),onChange:g=>l("rate",Number(g.target.value))})]})]}),t.jsx(O0,{value:s.tags??[],onChange:g=>l("tags",g),label:v("node.tags")}),t.jsx(bh,{options:r.map(g=>({id:g.id,name:g.name})),value:s.group_id??[],onChange:g=>l("group_id",g),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"host"),onChange:g=>l("host",g.target.value),placeholder:v("node.addressPlaceholder")})]}),["vmess","vless","v2node"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.tls"),actionText:Number(s.tls)===2?void 0:v("node.editConfig"),onAction:()=>{const g=y==="vmess"?"tlsSettings":"tls_settings";h(v("node.tls"),g)}}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls","0"),onChange:g=>{const R=Number(g.target.value);l("tls",R);const J=y==="vmess"?"tlsSettings":"tls_settings";R===1&&!s[J]&&l(J,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),y!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(y)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Ze(s,"server_name"),onChange:g=>l("server_name",g.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"port"),onChange:g=>l("port",g.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"server_port"),onChange:g=>l("server_port",g.target.value),placeholder:"443"})]})]}),["vmess","trojan","vless","v2node"].includes(y)&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:j}),t.jsxs("select",{className:"config-input",value:b,onChange:g=>{l("network",g.target.value);const R=y==="vmess"?"networkSettings":"network_settings";s[R]||l(R,{})},children:[y==="vmess"&&C0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="trojan"&&E0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="vless"&&z0.map(g=>t.jsx("option",{value:g,children:g},g)),y==="v2node"&&T0.map(g=>t.jsx("option",{value:g,children:g},g))]})]}),y==="trojan"&&t.jsx(L0,{draft:s,set:l}),y==="shadowsocks"&&t.jsx(q0,{draft:s,set:l,onOpenJson:h}),y==="hysteria"&&t.jsx(B0,{draft:s,set:l}),y==="tuic"&&t.jsx(G0,{draft:s,set:l}),y==="vless"&&t.jsx(Y0,{draft:s,set:l,onOpenJson:h}),y==="anytls"&&t.jsx(V0,{draft:s,set:l,onOpenJson:h}),y==="v2node"&&t.jsx($0,{draft:s,set:l,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:g=>l("parent_id",g.target.value?Number(g.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),p.filter(g=>g.id!==s.id&&!g.parent_id).map(g=>t.jsx("option",{value:g.id,children:g.name},g.id))]})]}),t.jsx(bh,{options:d.map(g=>({id:g.id,name:g.remarks})),value:s.route_id??[],onChange:g=>l("route_id",g),label:v("node.routingGroups")})]})]})}function H0({draft:s,set:l,onCancel:r,onSave:d}){const{t:p}=He(),h=String(s._type),m=String(s.network??"tcp"),j=h==="vmess",v=j?"networkSettings":"network_settings",y=Go(s,v),b=String(y.path??""),g=String(j?y.headers&&typeof y.headers=="object"?y.headers.Host??"":"":y.host??""),R=String(y.serviceName??""),J=k=>{k.preventDefault(),d()},W=["ws","http","httpupgrade","xhttp"].includes(m),P=m==="grpc";return t.jsxs("form",{onSubmit:J,style:{display:"flex",flexDirection:"column",gap:16},children:[W&&t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.path")}),t.jsx("input",{className:"config-input",value:b,onChange:k=>{const G={...y,path:k.target.value};l(v,G)},placeholder:"/"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.host")}),t.jsx("input",{className:"config-input",value:g,onChange:k=>{if(j){const G=y.headers&&typeof y.headers=="object"?{...y.headers}:{};G.Host=k.target.value,l(v,{...y,headers:G})}else l(v,{...y,host:k.target.value})},placeholder:p("node.hostPlaceholder")})]})]}),P&&t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:p("node.serviceName")}),t.jsx("input",{className:"config-input",value:R,onChange:k=>{l(v,{...y,serviceName:k.target.value})},placeholder:p("node.serviceNamePlaceholder")})]}),!W&&!P&&t.jsx("div",{style:{color:"var(--muted)",fontSize:13,padding:"8px 0"},children:p("node.transportNoConfig",{network:m.toUpperCase()})}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:r,children:p("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:p("common.confirm")})]})]})}function L0({draft:s,set:l}){const{t:r}=He();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.trojanConfig")}),t.jsx(cn,{label:r("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>l("allow_insecure",d?1:0)})]})}function q0({draft:s,set:l,onOpenJson:r}){const{t:d}=He(),p=Go(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:h=>l("cipher",h.target.value),children:gx.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>r(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:h=>l("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>l("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>l("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function B0({draft:s,set:l}){const{t:r}=He();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ze(s,"version","2"),onChange:d=>l("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:d=>l("up_mbps",Number(d.target.value)),placeholder:r("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:d=>l("down_mbps",Number(d.target.value)),placeholder:r("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:d=>l("obfs",d.target.value||null),placeholder:r("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:d=>l("obfs_password",d.target.value),placeholder:r("node.autoGenHelp")})]})]}),t.jsx(cn,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)})]})}function G0({draft:s,set:l}){const{t:r}=He();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:r("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:d=>l("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:r("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:d=>l("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(cn,{label:r("node.allowInsecure"),checked:s.insecure===1,onChange:d=>l("insecure",d?1:0)}),t.jsx(cn,{label:r("node.disableSni"),checked:s.disable_sni===1,onChange:d=>l("disable_sni",d?1:0)}),t.jsx(cn,{label:r("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>l("zero_rtt_handshake",d?1:0)})]})}function Y0({draft:s,set:l,onOpenJson:r}){const{t:d}=He(),p=Number(s.tls??0),h=Go(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:m=>l("flow",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:m=>l("encryption",m.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),p===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(h.server_name??""),onChange:m=>l("tls_settings",{...h,server_name:m.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(h.server_port??"443"),onChange:m=>l("tls_settings",{...h,server_port:m.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(h.public_key??""),onChange:m=>l("tls_settings",{...h,public_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(h.private_key??""),onChange:m=>l("tls_settings",{...h,private_key:m.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(h.short_id??""),onChange:m=>l("tls_settings",{...h,short_id:m.target.value}),placeholder:d("node.autoGenHelp")})]})]})]})}function V0({draft:s,set:l,onOpenJson:r}){const{t:d}=He();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(cn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>l("insecure",p?1:0)})]})}function $0({draft:s,set:l,onOpenJson:r}){const{t:d}=He(),p=Ze(s,"protocol","vless"),h=Number(s.tls??0),m=Go(s,"tls_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.v2nodeConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.nodeProtocol"),required:!0}),t.jsx("select",{className:"config-input",value:p,onChange:j=>l("protocol",j.target.value),children:M0.map(j=>t.jsx("option",{value:j,children:j},j))})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ze(s,"listen_ip"),onChange:j=>l("listen_ip",j.target.value),placeholder:"0.0.0.0"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:j=>l("flow",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>r(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:j=>l("encryption",j.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]}),h===2&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.realityConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.sni")}),t.jsx("input",{className:"config-input",value:String(m.server_name??""),onChange:j=>l("tls_settings",{...m,server_name:j.target.value})})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.servicePort")}),t.jsx("input",{className:"config-input",value:String(m.server_port??"443"),onChange:j=>l("tls_settings",{...m,server_port:j.target.value})})]})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.publicKey")}),t.jsx("input",{className:"config-input",value:String(m.public_key??""),onChange:j=>l("tls_settings",{...m,public_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.privateKey")}),t.jsx("input",{className:"config-input",value:String(m.private_key??""),onChange:j=>l("tls_settings",{...m,private_key:j.target.value}),placeholder:d("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.shortId")}),t.jsx("input",{className:"config-input",value:String(m.short_id??""),onChange:j=>l("tls_settings",{...m,short_id:j.target.value}),placeholder:d("node.autoGenHelp")})]})]}),p==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:j=>l("cipher",j.target.value),children:gx.map(j=>t.jsx("option",{value:j,children:j},j))})]}),p==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:j=>l("up_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:j=>l("down_mbps",Number(j.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:j=>l("obfs",j.target.value||null)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:j=>l("obfs_password",j.target.value)})]})]})]}),p==="tuic"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:j=>l("udp_relay_mode",j.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:j=>l("congestion_control",j.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),p==="anytls"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>r(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(cn,{label:d("node.disableSni"),checked:s.disable_sni===1,onChange:j=>l("disable_sni",j?1:0)}),t.jsx(cn,{label:d("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:j=>l("zero_rtt_handshake",j?1:0)})]})}const yh={vmess:Nv,vless:Dv,trojan:Nd,shadowsocks:Oo,hysteria:vv,tuic:lv,anytls:ls,v2node:cv},Pl={v2node:{bg:"#ef4444",text:"#ffffff",rowBg:"rgba(239, 68, 68, 0.05)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.05)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.05)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.05)"},hysteria:{bg:"#111827",text:"#ffffff",rowBg:"rgba(17, 24, 39, 0.04)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.05)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.05)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.05)"}};function Q0(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(null),[b,g]=f.useState(null),[R,J]=f.useState(!0),[W,P]=f.useState(!1),[k,G]=f.useState(""),[H,A]=f.useState(""),[F,ie]=f.useState(1),[de,U]=f.useState(10),[Y,ee]=f.useState(!1),[fe,S]=f.useState({}),[L,w]=f.useState(""),[T,I]=f.useState(null),[D,X]=f.useState(null),[_,se]=f.useState(null),oe=(q,ce)=>{q.dataTransfer.effectAllowed="move",X(ce)},C=(q,ce)=>{if(q.preventDefault(),D===null||D===ce)return;const me=[...r],Ue=me[D];me.splice(D,1),me.splice(ce,0,Ue),X(ce),d(me)},Z=()=>{X(null)},ue=(q,ce)=>{Y&&se(ce)},xe=q=>{if(!Y||_===null)return;q.cancelable&&q.preventDefault();const ce=q.touches[0],me=document.elementFromPoint(ce.clientX,ce.clientY);if(!me)return;const Ue=me.closest(".mobile-node-card");if(!Ue)return;const Me=Ue.getAttribute("data-index");if(Me===null)return;const Pe=Number(Me);if(Pe!==_&&Pe>=0&&Pe<r.length){const Fe=[...r],Le=Fe[_];Fe.splice(_,1),Fe.splice(Pe,0,Le),se(Pe),d(Fe)}},we=()=>{se(null)};f.useEffect(()=>{ie(1)},[L,de]);const _e=r.filter(q=>{const ce=L.toLowerCase().trim();return ce?q.name.toLowerCase().includes(ce)||q.host.toLowerCase().includes(ce)||String(q.id).includes(ce)||q.type.toLowerCase().includes(ce):!0}),Se=Math.ceil(_e.length/de),Ke=_e.slice((F-1)*de,F*de);function $e(q,ce){return ce<=7?Array.from({length:ce},(me,Ue)=>Ue+1):q<=4?[1,2,3,4,5,"...",ce]:q>=ce-3?[1,"...",ce-4,ce-3,ce-2,ce-1,ce]:[1,"...",q-1,q,q+1,"...",ce]}const Ot=$e(F,Se),gt=async()=>{var q,ce;P(!0),G(""),A("");try{const me={};r.forEach((Ue,Me)=>{me[Ue.type]||(me[Ue.type]={}),me[Ue.type][String(Ue.id)]=Me+1}),await P1(me),(q=window.showToast)==null||q.call(window,l("node.saveSortSuccess"),"success"),ee(!1),await Ce()}catch(me){G(me instanceof Error?me.message:l("node.saveSortFailed")),(ce=window.showToast)==null||ce.call(window,me instanceof Error?me.message:l("node.saveSortFailed"),"error")}finally{P(!1)}},Qt=async()=>{ee(!1),await ve()},Et=()=>_e.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:F===1,onClick:()=>ie(q=>Math.max(q-1,1)),children:"<"}),Ot.map((q,ce)=>q==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${ce}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${F===q?"active":""}`,onClick:()=>ie(Number(q)),children:q},`page-${q}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:F===Se||Se===0,onClick:()=>ie(q=>Math.min(q+1,Se)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:de,onChange:q=>U(Number(q.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",l("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",l("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",l("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",l("common.perPage")]})]})})]}),[st,bt]=f.useState(null),[Ma,pt]=f.useState(!1),[It,Ut]=f.useState(""),[Xt,ea]=f.useState(!1),[E,O]=f.useState(!1);async function re(q){var me,Ue;q.preventDefault();const ce=It.trim();if(!(!ce||!v)){ea(!0),G(""),A("");try{await ix({name:ce});const Me=await ns();h(Me);const Pe=Me.filter(Fe=>Fe.name===ce).sort((Fe,Le)=>Le.id-Fe.id)[0];if(Pe){const Fe=v.group_id??[];Fe.includes(Pe.id)||ft("group_id",[...Fe,Pe.id])}Ut(""),pt(!1),(me=window.showToast)==null||me.call(window,l("node.groupCreateSuccess"),"success")}catch(Me){G(Me instanceof Error?Me.message:l("node.groupCreateFailed")),(Ue=window.showToast)==null||Ue.call(window,Me instanceof Error?Me.message:l("node.groupCreateFailed"),"error")}finally{ea(!1)}}}const ae=(q,ce)=>{if(!v)return;let me=v[ce];if(typeof me=="string"&&me.trim())try{me=JSON.parse(me)}catch{}bt({title:q,key:ce,value:me&&typeof me=="object"?me:{}})},ve=f.useCallback(async()=>{J(!0),G("");try{const[q,ce,me]=await Promise.all([ch(),ns(),ox()]);d(q.data),h(ce),j(me)}catch(q){G(q instanceof Error?q.message:l("knowledge.loadFailed"))}finally{J(!1)}},[]),Ce=f.useCallback(async()=>{try{const q=await ch();d(q.data)}catch(q){console.error("Refresh nodes failed",q)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}ve()},[ve,s]);function Ee(q){y(gh(q)),g(null),G(""),A("")}function We(q){y(gh(q.type,q)),G(""),A("")}async function pn(q){var Pe,Fe;if(q.preventDefault(),!v)return;P(!0),G(""),A("");const ce=String(v._type),me={...v};for(const Le of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete me[Le];if(me.padding_scheme!==void 0&&me.padding_scheme!==null&&typeof me.padding_scheme!="string"&&(me.padding_scheme=JSON.stringify(me.padding_scheme)),me.padding_scheme)try{const Le=JSON.parse(String(me.padding_scheme));if(typeof Le!="object"||Le===null)throw new Error("Invalid JSON array or object")}catch(Le){G("Invalid Padding Scheme configuration: "+(Le instanceof Error?Le.message:"JSON error")),P(!1);return}const Ue=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Le of Ue)(me[Le]===""||me[Le]===null||me[Le]===void 0)&&delete me[Le];const Me=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Le of Me){const aa=me[Le];(aa==null||typeof aa=="object"&&Object.keys(aa).length===0)&&delete me[Le]}me.port!==void 0&&(me.port=Number(me.port)),me.server_port!==void 0&&(me.server_port=Number(me.server_port)),me.tls!==void 0&&(me.tls=Number(me.tls)),me.rate!==void 0&&(me.rate=Number(me.rate));try{await K1(ce,me),y(null),(Pe=window.showToast)==null||Pe.call(window,l("node.saveSuccess"),"success"),await Ce()}catch(Le){G(Le instanceof Error?Le.message:l("node.saveFailed")),(Fe=window.showToast)==null||Fe.call(window,Le instanceof Error?Le.message:l("node.saveFailed"),"error")}finally{P(!1)}}async function ta(q){const ce=[...r];d(me=>me.map(Ue=>Ue.id===q.id&&Ue.type===q.type?{...Ue,show:q.show?0:1}:Ue));try{await F1(q.type,q.id,q.show?0:1),await Ce()}catch(me){d(ce),G(me instanceof Error?me.message:l("node.updateFailed"))}}async function Qn(q){var ce,me;try{await W1(q.type,q.id),(ce=window.showToast)==null||ce.call(window,l("node.copySuccess"),"success"),await Ce()}catch(Ue){G(Ue instanceof Error?Ue.message:l("node.copyFailed")),(me=window.showToast)==null||me.call(window,Ue instanceof Error?Ue.message:l("node.copyFailed"),"error")}}async function Da(q){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:l("node.deleteConfirm",{name:q.name}),onConfirm:async()=>{var Ue,Me;const me=[...r];d(Pe=>Pe.filter(Fe=>!(Fe.id===q.id&&Fe.type===q.type))),G("");try{await J1(q.type,q.id),(Ue=window.showToast)==null||Ue.call(window,l("node.deleteSuccess"),"success"),await Ce()}catch(Pe){d(me),G(Pe instanceof Error?Pe.message:l("node.deleteFailed")),(Me=window.showToast)==null||Me.call(window,Pe instanceof Error?Pe.message:l("node.deleteFailed"),"error")}}})}const ft=(q,ce)=>y(me=>me?{...me,[q]:ce}:null),Ft=v?String(v._type):"";return t.jsxs(At,{title:l("node.title"),subtitle:l("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>g(b?null:"show"),title:l("node.createNode"),children:t.jsx(ya,{size:18})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),hh.map(q=>{const ce=Pl[q.value],me=yh[q.value]||Uo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ee(q.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(me,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:L,onChange:q=>w(q.target.value),placeholder:`${l("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${Y?"success-btn":""}`,type:"button",onClick:Y?gt:()=>ee(!0),disabled:W,children:l(Y?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),Y&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Qt,children:l("common.cancel")})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,H?t.jsx("div",{className:"form-success",children:H}):null,R&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[l("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",l("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",l("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",l("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:l("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:l("node.address")}),t.jsx("th",{className:"mobile-hide",children:l("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:l("node.colRate")}),t.jsx("th",{children:l("node.colGroups")}),t.jsx("th",{children:l(Y?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Ke.map(q=>{var me,Ue;const ce=r.findIndex(Me=>Me.id===q.id&&Me.type===q.type);return t.jsxs("tr",{draggable:Y,onDragStart:Me=>oe(Me,ce),onDragOver:Me=>C(Me,ce),onDragEnd:Z,className:D===ce?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((me=Pl[q.type])==null?void 0:me.bg)??"var(--surface-soft)",color:((Ue=Pl[q.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:q.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void ta(q),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?l("node.statusNormal"):q.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("strong",{children:q.name})]})}),t.jsx("td",{children:t.jsxs("span",{className:"online-badge",children:[t.jsx(_d,{size:13,style:{color:Number(q.online)>0?"#10b981":"var(--text-muted)",opacity:Number(q.online)>0?1:.6}}),Number(q.online??0)]})}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:q.host})}),t.jsx("td",{className:"mobile-hide",children:String(q.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[q.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const Me=q.group_id??[],Pe=fe[`${q.type}-${q.id}`],Fe=Me.map(Wt=>{const mn=p.find(ot=>Number(ot.id)===Number(Wt));return t.jsx("span",{className:"tag",children:(mn==null?void 0:mn.name)??`#${Wt}`},Wt)});if(Me.length<=3||Pe)return t.jsxs(t.Fragment,{children:[Fe,Me.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>S(Wt=>({...Wt,[`${q.type}-${q.id}`]:!1})),children:l("node.collapse")})]});const Le=Fe.slice(0,3),aa=Me.length-3;return t.jsxs(t.Fragment,{children:[Le,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>S(Wt=>({...Wt,[`${q.type}-${q.id}`]:!0})),children:["+",aa,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:l("node.allPermissionGroups",{count:Me.length})}),Fe]})]})]})})()})}),t.jsx("td",{children:Y?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Pi,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>I((T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type?null:{id:q.id,type:q.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>I(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{We(q),I(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Qn(q),I(null)},children:[t.jsx(Ao,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Da(q),I(null)},children:[t.jsx(Dt,{size:14})," ",l("common.delete")]})]})]})]})})]},`${q.type}-${q.id}`)}),!R&&_e.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")})})}):null]})]})}),Et()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>g(b?null:"show"),title:l("node.createNode"),children:t.jsx(ya,{size:20})}),b!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>g(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:l("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:l("node.selectProtocolSubtitle")})]}),hh.map(q=>{const ce=Pl[q.value],me=yh[q.value]||Uo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ee(q.value),g(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(me,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:L,onChange:q=>w(q.target.value),placeholder:`${l("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${Y?"active":""}`,type:"button",onClick:()=>ee(!Y),title:l("node.editSortOrder"),children:t.jsx(Pi,{size:20})})]}),Y&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:l("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Qt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void gt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:l(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Ke.map(q=>{var me,Ue;const ce=r.findIndex(Me=>Me.id===q.id&&Me.type===q.type);return t.jsxs("div",{className:`mobile-node-card ${D===ce||_===ce?"dragging":""}`,draggable:Y,onDragStart:Me=>oe(Me,ce),onDragOver:Me=>C(Me,ce),onDragEnd:Z,onTouchStart:Me=>ue(Me,ce),onTouchMove:xe,onTouchEnd:we,"data-index":ce,style:Y?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?l("node.statusNormal"):q.available_status===1?l("node.statusError"):l("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:q.name})]}),t.jsx("div",{className:"card-header-right",children:Y?t.jsx("div",{className:"drag-handle",title:l("node.dragDropHelp"),children:t.jsx(Pi,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${q.show===1?"active":""}`,onClick:()=>void ta(q),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>I((T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type?null:{id:q.id,type:q.type}),children:[l("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(T==null?void 0:T.id)===q.id&&(T==null?void 0:T.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>I(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{We(q),I(null)},children:[t.jsx(Ct,{size:14})," ",l("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Qn(q),I(null)},children:[t.jsx(Ao,{size:14})," ",l("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Da(q),I(null)},children:[t.jsx(Dt,{size:14})," ",l("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[q.host,":",q.port||q.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:((me=Pl[q.type])==null?void 0:me.bg)??"var(--surface-soft)",color:((Ue=Pl[q.type])==null?void 0:Ue.text)??"var(--text-muted)"},children:q.id}),t.jsxs("span",{className:"mobile-badge-pill",children:[t.jsx(_d,{size:12,style:{marginRight:4,color:Number(q.online)>0?"#10b981":"var(--text-muted)",opacity:Number(q.online)>0?1:.6}}),Number(q.online??0)]}),t.jsxs("span",{className:"mobile-badge-pill",children:[q.rate," x"]})]})]},`${q.type}-${q.id}`)}),!R&&_e.length===0&&t.jsx("div",{className:"empty-state",children:l("node.noNodesFound")}),Et()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?l("node.editNodeTitle",{type:Ft}):l("node.createNodeTitle",{type:Ft})}),t.jsx("p",{children:l("node.configureFieldsSubtitle",{type:Ft})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>y(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:pn,children:[t.jsx(R0,{draft:v,set:ft,groups:p,routes:m,nodes:r,onOpenJson:ae,onAddGroup:()=>pt(!0),onOpenTransportConfig:()=>O(!0)}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>y(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(va,{size:16}),l(W?"node.saving":"common.save")]})]})]})]})}),st!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:600,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:st.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(st.key)?l("node.tlsEditorSubtitle"):l("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>bt(null),children:t.jsx(tt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(st.key)?t.jsx(U0,{initialValue:st.value,isSnakeCase:st.key==="tls_settings",onCancel:()=>bt(null),onSave:q=>{ft(st.key,q),bt(null)}}):t.jsx(A0,{initialValue:st.value,onCancel:()=>bt(null),onSave:q=>{ft(st.key,q),bt(null)}})})]})}),Ma&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.addNewGroupTitle")}),t.jsx("p",{children:l("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>pt(!1),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{onSubmit:re,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:l("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:It,onChange:q=>Ut(q.target.value),placeholder:l("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>pt(!1),disabled:Xt,children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Xt||!It.trim(),children:l(Xt?"node.saving":"common.confirm")})]})]})]})}),E&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:500,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:l("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>O(!1),children:t.jsx(tt,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(H0,{draft:v,set:ft,onCancel:()=>O(!1),onSave:()=>O(!1)})})]})})]})}function X0(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),R=f.useCallback(async()=>{j(!0),g("");try{d(await ns())}catch(k){g(k instanceof Error?k.message:l("serverGroup.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}R()},[R,s]);function J(k){h({id:k==null?void 0:k.id,name:(k==null?void 0:k.name)??""}),g("")}async function W(k){var G;if(k.preventDefault(),!!p){y(!0),g("");try{await ix(p),h(null),(G=window.showToast)==null||G.call(window,l("serverGroup.saveSuccess"),"success"),await R()}catch(H){g(H instanceof Error?H.message:l("serverGroup.saveFailed"))}finally{y(!1)}}}async function P(k){var G;(G=window.showConfirm)==null||G.call(window,{message:l("serverGroup.deleteConfirm"),onConfirm:async()=>{var H,A;g("");try{await t1(k),(H=window.showToast)==null||H.call(window,l("serverGroup.deleteSuccess"),"success"),await R()}catch(F){g(F instanceof Error?F.message:l("serverGroup.deleteFailed")),(A=window.showToast)==null||A.call(window,F instanceof Error?F.message:l("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverGroup.title"),subtitle:l("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverGroup.heading")}),t.jsx("p",{children:l("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>J(),children:[t.jsx(ya,{size:16}),l("serverGroup.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(dt,{label:l("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverGroup.id")}),t.jsx("th",{children:l("serverGroup.name")}),t.jsx("th",{children:l("serverGroup.userCount")}),t.jsx("th",{children:l("serverGroup.serverCount")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(k=>t.jsxs("tr",{children:[t.jsx("td",{children:k.id}),t.jsx("td",{children:t.jsx("strong",{children:k.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(as,{size:14}),k.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Uo,{size:14}),k.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>J(k),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void P(k.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},k.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:l("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverGroup.edit"):l("serverGroup.add")}),t.jsx("p",{children:l("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:k=>h({...p,name:k.target.value}),placeholder:l("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(va,{size:16}),l(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Z0(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function K0(s){var l;return((l=sx.find(r=>r.value===s))==null?void 0:l.label)??s}function J0(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),R=f.useCallback(async()=>{j(!0),g("");try{d(await ox())}catch(k){g(k instanceof Error?k.message:l("serverRoute.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}R()},[R,s]);function J(k){h(Z0(k)),g("")}async function W(k){var H;if(k.preventDefault(),!p)return;y(!0),g("");const G=p.action==="default_out"?[]:p.match.split(`
`).map(A=>A.trim()).filter(Boolean);try{await a1({id:p.id,remarks:p.remarks,match:G,action:p.action,action_value:p.action_value||null}),h(null),(H=window.showToast)==null||H.call(window,l("serverRoute.saveSuccess"),"success"),await R()}catch(A){g(A instanceof Error?A.message:l("serverRoute.saveFailed"))}finally{y(!1)}}async function P(k){var G;(G=window.showConfirm)==null||G.call(window,{message:l("serverRoute.deleteConfirm"),onConfirm:async()=>{var H,A;g("");try{await n1(k),(H=window.showToast)==null||H.call(window,l("serverRoute.deleteSuccess"),"success"),await R()}catch(F){g(F instanceof Error?F.message:l("serverRoute.deleteFailed")),(A=window.showToast)==null||A.call(window,F instanceof Error?F.message:l("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("serverRoute.title"),subtitle:l("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("serverRoute.heading")}),t.jsx("p",{children:l("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:m,children:[t.jsx(zt,{size:16}),l(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>J(),children:[t.jsx(ya,{size:16}),l("serverRoute.add")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,m&&r.length===0?t.jsx(dt,{label:l("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("serverRoute.id")}),t.jsx("th",{children:l("serverRoute.remarks")}),t.jsx("th",{children:l("serverRoute.matchValues")}),t.jsx("th",{children:l("serverRoute.action")}),t.jsx("th",{children:l("serverRoute.actionValue")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(k=>t.jsxs("tr",{children:[t.jsx("td",{children:k.id}),t.jsx("td",{children:t.jsx("strong",{children:k.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(k.match)?k.match:[]).slice(0,3).map((G,H)=>t.jsx("span",{className:"tag",children:G},H)),Array.isArray(k.match)&&k.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",k.match.length-3]}):null,!Array.isArray(k.match)||k.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:K0(k.action)})}),t.jsx("td",{children:k.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>J(k),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void P(k.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},k.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?l("serverRoute.edit"):l("serverRoute.add")}),t.jsx("p",{children:l("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:k=>h({...p,remarks:k.target.value}),placeholder:l("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:k=>h({...p,action:k.target.value}),children:sx.map(k=>t.jsx("option",{value:k.value,children:k.label},k.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:k=>h({...p,match:k.target.value}),placeholder:l("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:l("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:k=>h({...p,action_value:k.target.value}),placeholder:l("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(va,{size:16}),l(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function F0(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function W0(s){const l=d=>d===""?null:Math.round(Number(d)*100),r=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:r(s.device_limit),speed_limit:r(s.speed_limit),month_price:l(s.month_price),quarter_price:l(s.quarter_price),half_year_price:l(s.half_year_price),year_price:l(s.year_price),two_year_price:l(s.two_year_price),three_year_price:l(s.three_year_price),onetime_price:l(s.onetime_price),reset_price:l(s.reset_price),reset_traffic_method:r(s.reset_traffic_method),capacity_limit:r(s.capacity_limit),force_update:s.force_update}}function Jt(s){return s==null?"—":$t(s)}function P0(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function I0(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,g]=f.useState(!1),[R,J]=f.useState(""),[W,P]=f.useState(""),[k,G]=f.useState(null),[H,A]=f.useState(null),F=(_,se)=>{_.dataTransfer.effectAllowed="move",G(se)},ie=(_,se)=>{if(_.preventDefault(),k===null||k===se)return;const oe=[...r],C=oe[k];oe.splice(k,1),oe.splice(se,0,C),G(se),d(oe)},de=async()=>{G(null);try{await oh(r.map(_=>_.id)),await fe()}catch(_){J(_ instanceof Error?_.message:l("plan.sortFailed")),await fe()}},U=(_,se)=>{A(se)},Y=_=>{if(H===null)return;const se=_.touches[0],oe=document.elementFromPoint(se.clientX,se.clientY);if(!oe)return;const C=oe.closest("tr, [data-index]");if(!C)return;const Z=C.getAttribute("data-index");if(Z===null)return;const ue=Number(Z);if(ue!==H&&ue>=0&&ue<r.length){const xe=[...r],we=xe[H];xe.splice(H,1),xe.splice(ue,0,we),A(ue),d(xe)}},ee=async()=>{if(H!==null){A(null);try{await oh(r.map(_=>_.id)),await fe()}catch(_){J(_ instanceof Error?_.message:l("plan.sortFailed")),await fe()}}},fe=f.useCallback(async()=>{y(!0),J("");try{const[_,se]=await Promise.all([ml(),ns()]);d(_),h(se)}catch(_){J(_ instanceof Error?_.message:l("plan.loadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}fe()},[fe,s]);function S(_){j(F0(_)),J(""),P("")}async function L(_){var se,oe;if(_.preventDefault(),!!m){g(!0),J(""),P("");try{await l1(W0(m)),j(null),(se=window.showToast)==null||se.call(window,l("plan.saveSuccess"),"success"),await fe()}catch(C){(oe=window.showToast)==null||oe.call(window,C instanceof Error?C.message:l("plan.saveFailed"),"error")}finally{g(!1)}}}async function w(_,se){var oe;try{await sh(_,{show:se?0:1}),await fe()}catch(C){(oe=window.showToast)==null||oe.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function T(_,se){var oe;try{await sh(_,{renew:se?0:1}),await fe()}catch(C){(oe=window.showToast)==null||oe.call(window,C instanceof Error?C.message:l("plan.toggleFailed"),"error")}}async function I(_){var se;(se=window.showConfirm)==null||se.call(window,{message:l("plan.deleteConfirm"),onConfirm:async()=>{var oe,C;J(""),P("");try{await i1(_),(oe=window.showToast)==null||oe.call(window,l("plan.deleteSuccess"),"success"),await fe()}catch(Z){(C=window.showToast)==null||C.call(window,Z instanceof Error?Z.message:l("plan.deleteFailed"),"error")}}})}function D(_){var se;return((se=p.find(oe=>oe.id===_))==null?void 0:se.name)??`#${_}`}function X(_,se){j(oe=>oe&&{...oe,[_]:se})}return t.jsxs(At,{title:l("plan.title"),subtitle:l("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("plan.heading")}),t.jsx("p",{children:l("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:fe,disabled:v,children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(),children:[t.jsx(ya,{size:16}),l("plan.add")]})]})]}),R?t.jsx("div",{className:"form-error",children:R}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&r.length===0?t.jsx(dt,{label:l("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:l("plan.show")}),t.jsx("th",{children:l("plan.renew")}),t.jsx("th",{children:l("plan.name")}),t.jsx("th",{children:l("plan.users")}),t.jsx("th",{children:l("plan.group")}),t.jsx("th",{children:l("plan.pricing")}),t.jsx("th",{children:l("plan.traffic")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map((_,se)=>t.jsxs("tr",{draggable:!0,onDragStart:oe=>F(oe,se),onDragOver:oe=>ie(oe,se),onDragEnd:de,onTouchStart:oe=>U(oe,se),onTouchMove:Y,onTouchEnd:ee,"data-index":se,className:k===se||H===se?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:l("plan.sort"),children:t.jsx(Pi,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:oe=>{oe.stopPropagation(),w(_.id,_.show)},title:_.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:oe=>{oe.stopPropagation(),T(_.id,_.renew)},title:_.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(as,{size:14}),_.count??0]})}),t.jsx("td",{children:D(_.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Jt(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Jt(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Jt(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Jt(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Jt(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Jt(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Jt(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Jt(_.reset_price)})]})]})}),t.jsxs("td",{children:[_.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:oe=>{oe.stopPropagation(),S(_)},children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:oe=>{oe.stopPropagation(),I(_.id)},children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},_.id)),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[r.map((_,se)=>t.jsxs("div",{className:`mobile-node-card ${k===se||H===se?"dragging":""}`,draggable:!0,onDragStart:oe=>F(oe,se),onDragOver:oe=>ie(oe,se),onDragEnd:de,onTouchStart:oe=>U(oe,se),onTouchMove:Y,onTouchEnd:ee,"data-index":se,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:l("plan.sort"),children:t.jsx(Pi,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:_.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:oe=>{oe.stopPropagation(),S(_)},children:[t.jsx(Ct,{size:12}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:oe=>{oe.stopPropagation(),I(_.id)},children:[t.jsx(Dt,{size:12}),l("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.show")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:oe=>{oe.stopPropagation(),w(_.id,_.show)},title:_.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:l("plan.renew")}),t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:oe=>{oe.stopPropagation(),T(_.id,_.renew)},title:_.renew?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(as,{size:12,style:{marginRight:4}}),_.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:D(_.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[_.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:Jt(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:Jt(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:Jt(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:Jt(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:Jt(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:Jt(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:Jt(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:l("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:Jt(_.reset_price)})]})]})]},_.id)),!v&&r.length===0?t.jsx("div",{className:"empty-state",children:l("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("plan.edit"):l("plan.add")}),t.jsx("p",{children:l("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:L,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:_=>X("name",_.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:_=>X("content",_.target.value),placeholder:l("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:_=>X("group_id",_.target.value),children:[t.jsx("option",{value:"",children:l("plan.selectGroup")}),p.map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:_=>X("transfer_enable",_.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:_=>X("device_limit",_.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[l("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:_=>X("speed_limit",_.target.value),placeholder:l("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:_=>X("capacity_limit",_.target.value),placeholder:l("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:_=>X("reset_traffic_method",_.target.value),children:P0(l).map(_=>t.jsx("option",{value:_.value,children:_.label},_.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:l("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:_=>X("month_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:_=>X("quarter_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:_=>X("half_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:_=>X("year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:_=>X("two_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:_=>X("three_year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:_=>X("onetime_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:_=>X("reset_price",_.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:_=>X("force_update",String(_.target.checked))}),t.jsx("span",{children:l("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(va,{size:16}),l(b?"plan.saving":"common.save")]})]})]})]})}):null]})}const cd="模糊",vh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},jh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function wh(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0");return`${r}/${d}/${p} ${h}:${m}`}function Nh(s){const l=new Date(s*1e3),r=l.getFullYear(),d=String(l.getMonth()+1).padStart(2,"0"),p=String(l.getDate()).padStart(2,"0"),h=String(l.getHours()).padStart(2,"0"),m=String(l.getMinutes()).padStart(2,"0"),j=String(l.getSeconds()).padStart(2,"0");return`${r}-${d}-${p} ${h}:${m}:${j}`}function _h(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}const bx="adminzic_user_cache";function ej(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(bx);return s?JSON.parse(s):{}}catch{return{}}}function tj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(bx,JSON.stringify(s))}catch{}}const Il=(s,l)=>`${s}:${l}`;function aj(){var It,Ut,Xt,ea,E;const s=wt(),l=$n(),{t:r}=He(),d=f.useCallback(O=>{switch(O){case 0:return{label:r("order.statusPending"),cls:"status-pending"};case 1:return{label:r("order.statusProcessing"),cls:"status-processing"};case 2:return{label:r("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:r("order.statusCompleted"),cls:"status-completed"};case 4:return{label:r("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${O}`,cls:""}}},[r]),p=f.useCallback(O=>{const re=`order.period.${O}`,ae=r(re);return ae===re?jh[O]??O:ae},[r]),[h,m]=f.useState([]),[j,v]=f.useState([]),[y,b]=f.useState(0),[g,R]=f.useState(1),[J]=f.useState(15),[W,P]=f.useState(""),[k,G]=f.useState("trade_no"),[H,A]=f.useState(!0),[F,ie]=f.useState(null),[de,U]=f.useState(!1),[Y,ee]=f.useState(""),[fe,S]=f.useState(""),[L,w]=f.useState(null),[T,I]=f.useState(null),[D,X]=f.useState(!1),[_,se]=f.useState(null),[oe,C]=f.useState(!1),[Z,ue]=f.useState(()=>ej()),xe=f.useCallback((O,re)=>{const ae=Il(re,O);I(null),w(ve=>ve===ae?null:ae)},[]),we=f.useCallback((O,re)=>{const ae=Il(re,O);w(null),I(ve=>ve===ae?null:ae)},[]);f.useEffect(()=>{if(!L&&!T)return;const O=()=>{w(null),I(null)},re=ve=>{const Ce=ve.target;Ce!=null&&Ce.closest(".order-dropdown-trigger, .order-dropdown-menu")||O()},ae=ve=>{ve.key==="Escape"&&O()};return document.addEventListener("pointerdown",re),document.addEventListener("keydown",ae),()=>{document.removeEventListener("pointerdown",re),document.removeEventListener("keydown",ae)}},[L,T]),f.useEffect(()=>{const O=new Set;if(h.forEach(ae=>{ae.user_id&&!Z[ae.user_id]&&O.add(ae.user_id),ae.invite_user_id&&!Z[ae.invite_user_id]&&O.add(ae.invite_user_id)}),_&&(_.user_id&&!Z[_.user_id]&&O.add(_.user_id),_.invite_user_id&&!Z[_.invite_user_id]&&O.add(_.invite_user_id)),O.size===0)return;const re=Array.from(O);Promise.allSettled(re.map(async ae=>{try{const ve=await cx(ae);if(ve&&ve.data)return{id:ae,email:ve.data.email,invite_user:ve.data.invite_user}}catch(ve){console.error(`Failed to fetch user ${ae}:`,ve)}return null})).then(ae=>{const ve={};ae.forEach(Ce=>{var Ee;if(Ce.status==="fulfilled"&&Ce.value){const We=Ce.value;ve[We.id]={email:We.email,invite_user_email:((Ee=We.invite_user)==null?void 0:Ee.email)||null},We.invite_user&&(ve[We.invite_user.id]={email:We.invite_user.email})}}),Object.keys(ve).length>0&&ue(Ce=>{const Ee={...Ce,...ve};return tj(Ee),Ee})})},[h,_,Z]);const _e={0:{label:r("order.commissionPending"),dotClass:"pending"},1:{label:r("order.commissionApproved"),dotClass:"processing"},2:{label:r("order.commissionPaid"),dotClass:"completed"},3:{label:r("order.commissionCancelled"),dotClass:"cancelled"}},Se=f.useCallback(async(O=1,re,ae)=>{var ve,Ce;A(!0),ee("");try{let Ee;if(re)if(ae==="email"){const ta=(ve=(await Sd(1,1,[{key:"email",condition:cd,value:re}])).data)==null?void 0:ve[0];if(!ta){m([]),b(0),A(!1);return}Ee=[{key:"user_id",condition:"=",value:String(ta.id)}]}else if(ae==="invite_user_email"){const ta=(Ce=(await Sd(1,1,[{key:"email",condition:cd,value:re}])).data)==null?void 0:Ce[0];if(!ta){m([]),b(0),A(!1);return}Ee=[{key:"invite_user_id",condition:"=",value:String(ta.id)}]}else Ee=[{key:ae||"trade_no",condition:ae==="trade_no"||ae==="user_id"||ae==="invite_user_id"||ae==="plan_id"||ae==="status"?"=":cd,value:re}];const We=await s1({current:O,pageSize:J,filter:Ee});m(We.data),b(We.total)}catch(Ee){ee(Ee instanceof Error?Ee.message:r("order.loadFailed"))}finally{A(!1)}},[J,r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const O=new URLSearchParams(l.search),re=O.get("filter_email"),ae=O.get("invite_user_email"),ve=O.get("user_id")||O.get("filter_user_id");let Ce="",Ee="trade_no";ve?(Ce=ve,Ee="user_id",G("user_id"),P(ve),X(!0)):re?(Ce=re,Ee="email",G("email"),P(re),X(!0)):ae&&(Ce=ae,Ee="invite_user_email",G("invite_user_email"),P(ae),X(!0)),Se(1,Ce,Ee),ml().then(v).catch(()=>{})},[Se,s,l.search]);function Ke(){R(1),Se(1,W,k)}function $e(){P(""),R(1),Se(1)}function Ot(O){R(O),Se(O,W,k)}async function gt(O){var re,ae;w(null),I(null),ee(""),S("");try{await o1(O),(re=window.showToast)==null||re.call(window,r("order.paidSuccess"),"success"),await Se(g,W,k)}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("order.paidFailed"),"error")}}async function Qt(O){var re,ae;w(null),I(null),ee(""),S("");try{await r1(O),(re=window.showToast)==null||re.call(window,r("order.cancelSuccess"),"success"),await Se(g,W,k)}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("order.cancelFailed"),"error")}}async function Et(O,re){var ae,ve;w(null),I(null),ee(""),S("");try{await c1(O,re),(ae=window.showToast)==null||ae.call(window,r("order.commissionSuccess"),"success"),await Se(g,W,k)}catch(Ce){(ve=window.showToast)==null||ve.call(window,Ce instanceof Error?Ce.message:r("order.commissionFailed"),"error")}}async function st(O){se(O),C(!0);try{const re=await d1(O.id);re&&re.data&&se(re.data)}catch(re){console.error("Failed to fetch order detail:",re)}finally{C(!1)}}function bt(){var O;ie({email:"",plan_id:(O=j[0])!=null&&O.id?String(j[0].id):"",period:"month_price",total_amount:"0"}),ee(""),S("")}async function Ma(O){var re,ae;if(O.preventDefault(),!!F){U(!0),ee(""),S("");try{await rx({email:F.email,plan_id:Number(F.plan_id),period:F.period,total_amount:Number(F.total_amount)*100}),ie(null),(re=window.showToast)==null||re.call(window,r("order.assignSuccess"),"success"),await Se(g,W,k)}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("order.assignFailed"),"error")}finally{U(!1)}}}const pt=Math.ceil(y/J);return t.jsxs(At,{title:r("order.title"),subtitle:r("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${D?"active":""}`,type:"button",onClick:()=>X(!D),children:[t.jsx(ts,{size:16}),r("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:bt,children:[t.jsx(ya,{size:16}),r("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Se(g,W,k),disabled:H,children:[t.jsx(zt,{size:16}),r(H?"common.refreshing":"common.refresh")]})]}),D&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:k,onChange:O=>G(O.target.value),children:[t.jsx("option",{value:"trade_no",children:r("order.tradeNo")}),t.jsx("option",{value:"email",children:r("order.email")}),t.jsx("option",{value:"status",children:r("order.status")}),t.jsx("option",{value:"plan_id",children:r("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:r("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:r("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:r("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Bo,{size:16}),t.jsx("input",{className:"config-input search-input",value:W,onChange:O=>P(O.target.value),placeholder:r("order.searchPlaceholder"),onKeyDown:O=>O.key==="Enter"&&Ke()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ke,children:[t.jsx(ts,{size:16}),r("order.filter")]}),W?t.jsxs("button",{className:"ghost-button",type:"button",onClick:$e,children:[t.jsx(tt,{size:16}),r("order.clearFilter")]}):null]}),Y?t.jsx("div",{className:"form-error",children:Y}):null,fe?t.jsx("div",{className:"form-success",children:fe}):null,H&&h.length===0?t.jsx(dt,{label:r("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${H?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("order.tradeNo")}),t.jsx("th",{children:r("order.id")}),t.jsx("th",{children:r("order.email")}),t.jsx("th",{children:r("order.type")}),t.jsx("th",{children:r("order.subscriptionPlan")}),t.jsx("th",{children:r("order.period")}),t.jsx("th",{children:r("order.amount")}),t.jsxs("th",{children:[r("order.orderStatus"),t.jsx("span",{className:"help-icon",title:"Order Payment Status",children:t.jsx(Ff,{size:14})})]}),t.jsx("th",{children:r("order.commissionAmount")}),t.jsxs("th",{children:[r("order.commissionStatus"),t.jsx("span",{className:"help-icon",title:"Referral Commission Status",children:t.jsx(Ff,{size:14})})]}),t.jsx("th",{children:r("order.created")})]})}),t.jsxs("tbody",{children:[h.map(O=>{var Ce;const re=d(O.status),ae=O.invite_user_id!==null,ve=_e[O.commission_status]??{label:`#${O.commission_status}`,dotClass:"pending"};return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsx("span",{className:"trade-no-link",onClick:()=>st(O),title:"Click to view details",children:_h(O.trade_no)})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:O.id})}),t.jsx("td",{children:(Ce=Z[O.user_id])!=null&&Ce.email?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{G("user_id"),P(String(O.user_id)),X(!0),Se(1,String(O.user_id),"user_id")},title:"Filter by this user",children:Z[O.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",O.user_id]})}),t.jsx("td",{children:vh[O.type]??`#${O.type}`}),t.jsx("td",{children:t.jsx("strong",{children:O.plan_name??`Plan #${O.plan_id}`})}),t.jsx("td",{children:t.jsx("span",{className:"period-capsule",children:p(O.period)})}),t.jsx("td",{children:t.jsxs("strong",{children:[$t(O.total_amount)," ₫"]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),t.jsx("span",{children:re.label}),O.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),xe(O.trade_no,"desktop")},children:[r("order.markAs")," ",t.jsx(ti,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),L===Il("desktop",O.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{w(null),gt(O.trade_no)},children:[t.jsx(vo,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{w(null),Qt(O.trade_no)},children:[t.jsx(Bn,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]}),t.jsx("td",{children:ae?t.jsxs("strong",{children:[$t(O.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})}),t.jsxs("td",{style:{position:"relative"},children:[ae?t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ve.dotClass}`}),t.jsx("span",{children:ve.label}),O.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ee=>{Ee.stopPropagation(),we(O.trade_no,"desktop")},children:[r("order.markAs")," ",t.jsx(ti,{size:12,style:{display:"inline",strokeWidth:3}})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),T===Il("desktop",O.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ee=>Ee.stopPropagation(),onClick:Ee=>Ee.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{I(null),Et(O.trade_no,1)},children:[t.jsx(vo,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{I(null),Et(O.trade_no,3)},children:[t.jsx(Bn,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]}),t.jsx("td",{children:wh(O.created_at)})]},O.trade_no)}),!H&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:r("order.empty")})})}):null]})]})}),pt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:g<=1,onClick:()=>Ot(g-1),children:t.jsx(dn,{size:16})}),t.jsxs("span",{className:"page-info",children:[g," / ",pt]}),t.jsx("button",{className:"mini-button",disabled:g>=pt,onClick:()=>Ot(g+1),children:t.jsx(un,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(O=>{var Ee;const re=d(O.status),ae=O.invite_user_id!==null,ve=_e[O.invite_user_id!==null?O.commission_status:0]??{label:`#${O.commission_status}`,dotClass:"pending"},Ce=(Ee=Z[O.user_id])==null?void 0:Ee.email;return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>st(O),children:_h(O.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",O.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${re.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:re.label}),O.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:We=>{We.stopPropagation(),xe(O.trade_no,"mobile")},children:t.jsx(ti,{size:12,style:{display:"inline",strokeWidth:3}})})]}),L===Il("mobile",O.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:We=>We.stopPropagation(),onClick:We=>We.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{w(null),gt(O.trade_no)},children:[t.jsx(vo,{size:14,style:{color:"#10b981"}}),r("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{w(null),Qt(O.trade_no)},children:[t.jsx(Bn,{size:14,style:{color:"#ef4444"}}),r("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.email")}),t.jsx("span",{className:"value",children:Ce?t.jsx("span",{className:"trade-no-link",style:{fontFamily:"inherit",fontWeight:400},onClick:()=>{G("user_id"),P(String(O.user_id)),X(!0),Se(1,String(O.user_id),"user_id")},children:Ce}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",O.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.type")}),t.jsx("span",{className:"value",children:vh[O.type]??`#${O.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:O.plan_name??`Plan #${O.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(O.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.amount")}),t.jsxs("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:[$t(O.total_amount)," ₫"]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionAmount")}),t.jsx("span",{className:"value",children:ae?t.jsxs("strong",{children:[$t(O.commission_balance)," ₫"]}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),ae&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${ve.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:ve.label}),O.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:We=>{We.stopPropagation(),we(O.trade_no,"mobile")},children:t.jsx(ti,{size:12,style:{display:"inline",strokeWidth:3}})})]}),T===Il("mobile",O.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:We=>We.stopPropagation(),onClick:We=>We.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{I(null),Et(O.trade_no,1)},children:[t.jsx(vo,{size:14,style:{color:"#10b981"}}),r("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{I(null),Et(O.trade_no,3)},children:[t.jsx(Bn,{size:14,style:{color:"#ef4444"}}),r("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:r("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:wh(O.created_at)})]})]})]},O.trade_no)}),!H&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:r("order.empty")}):null,pt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:g<=1,onClick:()=>Ot(g-1),children:t.jsx(dn,{size:16})}),t.jsxs("span",{className:"page-info",children:[g," / ",pt]}),t.jsx("button",{className:"mini-button",disabled:g>=pt,onClick:()=>Ot(g+1),children:t.jsx(un,{size:16})})]}):null]})]}),_?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:r("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>se(null),children:t.jsx(tt,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:oe?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(dt,{label:r("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("common.email")}),(It=Z[_.user_id])!=null&&It.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{G("user_id"),P(String(_.user_id)),X(!0),se(null),Se(1,String(_.user_id),"user_id")},title:"Filter by this user",children:Z[_.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:_.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.periodLabel")}),t.jsx("span",{children:p(_.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.orderStatus")}),t.jsx("span",{children:d(_.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.planLabel")}),t.jsx("span",{children:_.plan_name??`Plan #${_.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.callbackLabel")}),t.jsx("span",{children:_.callback_no||"-"})]})]}),_.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:r("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.inviterEmail")}),(Ut=Z[_.invite_user_id])!=null&&Ut.email||(Xt=Z[_.user_id])!=null&&Xt.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const O=String(_.invite_user_id);G("invite_user_id"),P(O),X(!0),se(null),Se(1,O,"invite_user_id")},title:"Filter by this inviter",children:((ea=Z[_.invite_user_id])==null?void 0:ea.email)||((E=Z[_.user_id])==null?void 0:E.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionAmount")}),t.jsxs("strong",{children:[$t(_.commission_balance??0)," ₫"]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(_e[_.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(_e[_.commission_status]??{label:`#${_.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.amount")}),t.jsx("span",{children:(Number(_.total_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.balanceLabel")}),t.jsx("span",{children:(Number(_.balance_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.discountLabel")}),t.jsx("span",{children:(Number(_.discount_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.refundLabel")}),t.jsx("span",{children:(Number(_.refund_amount??0)/100).toFixed(2)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.surplusLabel")}),t.jsx("span",{children:(Number(_.surplus_amount??0)/100).toFixed(2)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.createdLabel")}),t.jsx("span",{children:Nh(_.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:r("order.updatedLabel")}),t.jsx("span",{children:Nh(_.updated_at)})]})]})]})})]})}):null,F?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("order.assign")}),t.jsx("p",{children:r("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ie(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ma,children:[t.jsxs("label",{children:[t.jsx("span",{children:r("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:F.email,onChange:O=>ie({...F,email:O.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:F.plan_id,onChange:O=>ie({...F,plan_id:O.target.value}),children:j.map(O=>t.jsx("option",{value:O.id,children:O.name},O.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:r("order.period")}),t.jsx("select",{className:"config-input",value:F.period,onChange:O=>ie({...F,period:O.target.value}),children:Object.entries(jh).map(([O,re])=>t.jsx("option",{value:O,children:re},O))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[r("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:F.total_amount,onChange:O=>ie({...F,total_amount:O.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ie(null),children:r("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:de,children:[t.jsx(va,{size:16}),r(de?"order.assigning":"order.assign")]})]})]})]})}):null]})}function No(s){return new Date(s*1e3).toLocaleString("vi-VN")}function _o(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function dd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function nj(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,g]=f.useState(null),[R,J]=f.useState(!0),[W,P]=f.useState(!1),[k,G]=f.useState(""),[H,A]=f.useState(""),[F,ie]=f.useState("");f.useEffect(()=>{b||ie("")},[b]);const de=f.useCallback(async(S=1)=>{J(!0),G("");try{const L=await u1(S,15);d(L.data),h(L.total)}catch(L){G(L instanceof Error?L.message:l("coupon.loadFailed"))}finally{J(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}de(1),ml().then(y).catch(()=>{})},[de,s]);async function U(S){var L,w;if(S.preventDefault(),!!b){P(!0),G(""),A("");try{const T=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await p1({id:b.id,name:b.name,type:Number(b.type),value:T,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,limit_use_with_user:b.limit_use_with_user?Number(b.limit_use_with_user):null,limit_plan_ids:b.limit_plan_ids.length?b.limit_plan_ids:null,limit_period:b.limit_period.length?b.limit_period:null,generate_count:b.generate_count?Number(b.generate_count):void 0}),g(null),(L=window.showToast)==null||L.call(window,l("coupon.saveSuccess"),"success"),await de(m)}catch(T){(w=window.showToast)==null||w.call(window,T instanceof Error?T.message:l("coupon.saveFailed"),"error")}finally{P(!1)}}}async function Y(S){var L;try{await f1(S),await de(m)}catch(w){(L=window.showToast)==null||L.call(window,w instanceof Error?w.message:l("coupon.toggleFailed"),"error")}}async function ee(S){var L;(L=window.showConfirm)==null||L.call(window,{message:l("coupon.deleteConfirm"),onConfirm:async()=>{var w,T;try{await m1(S),(w=window.showToast)==null||w.call(window,l("coupon.deleteSuccess"),"success"),await de(m)}catch(I){(T=window.showToast)==null||T.call(window,I instanceof Error?I.message:l("coupon.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(At,{title:l("coupon.title"),subtitle:l("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("coupon.heading")}),t.jsxs("p",{children:[p," ",l("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void de(m),disabled:R,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(dd()),children:[t.jsx(ya,{size:16}),l("coupon.add")]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,H?t.jsx("div",{className:"form-success",children:H}):null,R&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("coupon.name")}),t.jsx("th",{children:l("coupon.code")}),t.jsx("th",{children:l("coupon.type")}),t.jsx("th",{children:l("coupon.value")}),t.jsx("th",{children:l("coupon.usageLimit")}),t.jsx("th",{children:l("coupon.limitPlans")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("coupon.limitPeriods")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(S=>{var I,D;const L=(I=S.limit_plan_ids)==null?void 0:I.map(X=>{var _;return((_=v.find(se=>se.id===X))==null?void 0:_.name)||`#${X}`}).join(", "),w=_o(l),T=(D=S.limit_period)==null?void 0:D.map(X=>w[X]||X).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:S.id}),t.jsx("td",{children:t.jsx("strong",{children:S.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:S.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:S.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:S.type===1?$t(S.value):`${S.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[l("coupon.maxUses"),": ",S.limit_use??"∞"]}),S.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[l("coupon.maxUses")," ",S.limit_use_with_user,"/",l("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[L?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[l("coupon.plans"),": ",L]})}):null,T?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[l("coupon.cycles"),": ",T]})}):null,!L&&!T?t.jsx("span",{className:"tag muted-tag",children:l("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${S.show?"active":""}`,type:"button",onClick:()=>void Y(S.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[No(S.started_at)," — ",No(S.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(dd(S)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ee(S.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},S.id)}),!R&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:l("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[r.map(S=>{var L,w,T,I;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",S.id]}),t.jsx("span",{className:`tag type-tag ${S.type===1?"fixed-type":"percent-type"}`,children:S.type===1?l("coupon.type.fixed"):l("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:S.name,children:S.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:l("coupon.clickToCopy"),onClick:()=>{ul(S.code).then(D=>{var X;(X=window.showToast)==null||X.call(window,D?`${l("coupon.copiedCode")}: ${S.code}`:l("common.copyFailed"),D?"success":"error")})},children:[t.jsx("code",{className:"mono",children:S.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(L=S.limit_plan_ids)!=null&&L.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:S.limit_plan_ids.map(D=>{const X=v.find(_=>_.id===D);return t.jsx("span",{className:"res-pill plan-pill",children:X?X.name:`#${D}`},D)})})]}):null,(w=S.limit_period)!=null&&w.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:S.limit_period.map(D=>t.jsx("span",{className:"res-pill cycle-pill",children:_o(l)[D]||D},D))})]}):null,!((T=S.limit_plan_ids)!=null&&T.length)&&!((I=S.limit_period)!=null&&I.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[No(S.started_at)," — ",No(S.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:l("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${S.show?"active":""}`,type:"button",onClick:()=>void Y(S.id),"aria-label":l("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:S.type===1?$t(S.value).replace(/\s?₫/,""):`${S.value}`}),t.jsx("span",{className:"ticket-value-unit",children:S.type===1?"₫":l("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:S.limit_use??"∞"}),S.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[l("coupon.maxUses")," ",S.limit_use_with_user,"/",l("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(dd(S)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ee(S.id),"aria-label":l("common.delete"),children:t.jsx(Dt,{size:15})})]})]})]},S.id)}),!R&&r.length===0?t.jsx("div",{className:"empty-state",children:l("coupon.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),de(m-1)},children:t.jsx(dn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:m>=fe,onClick:()=>{j(m+1),de(m+1)},children:t.jsx(un,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("coupon.edit"):l("coupon.add")}),t.jsx("p",{children:l("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:U,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:S=>g({...b,name:S.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.type")}),t.jsxs("select",{className:"config-input",value:b.type,onChange:S=>g({...b,type:S.target.value}),children:[t.jsx("option",{value:"1",children:l("coupon.type.fixed")}),t.jsx("option",{value:"2",children:l("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:S=>g({...b,value:S.target.value})})]})]}),b.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[l("coupon.code")," (",l("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:b.code,onChange:S=>g({...b,code:S.target.value}),placeholder:l("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:S=>g({...b,started_at:S.target.value}),onClick:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)},onFocus:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:S=>g({...b,ended_at:S.target.value}),onClick:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)},onFocus:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:S=>g({...b,limit_use:S.target.value}),placeholder:l("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use_with_user,onChange:S=>g({...b,limit_use_with_user:S.target.value}),placeholder:l("coupon.unlimited")})]})]}),b.id?null:t.jsxs("label",{children:[t.jsx("span",{children:l("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:S=>g({...b,generate_count:S.target.value}),placeholder:l("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPlans")}),b.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_plan_ids.map(S=>{const L=v.find(w=>w.id===S);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const w=b.limit_plan_ids.filter(T=>T!==S);g({...b,limit_plan_ids:w})},children:[L?L.name:`#${S}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},S)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("coupon.searchPlans"),value:F,onChange:S=>ie(S.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(S=>S.name.toLowerCase().includes(F.toLowerCase())).map(S=>{const L=b.limit_plan_ids.includes(S.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:w=>{const T=w.target.checked?[...b.limit_plan_ids,S.id]:b.limit_plan_ids.filter(I=>I!==S.id);g({...b,limit_plan_ids:T})}}),t.jsx("span",{children:S.name})]},S.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("coupon.restrictedPeriods")}),b.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:b.limit_period.map(S=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const L=b.limit_period.filter(w=>w!==S);g({...b,limit_period:L})},children:[_o(l)[S]||S," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},S))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(_o(l)).map(([S,L])=>{const w=b.limit_period.includes(S);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:w,onChange:T=>{const I=T.target.checked?[...b.limit_period,S]:b.limit_period.filter(D=>D!==S);g({...b,limit_period:I})}}),t.jsx("span",{children:L})]},S)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(va,{size:16}),l(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function So(s){return new Date(s*1e3).toLocaleString("vi-VN")}function lj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function ud(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function ij(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState([]),[b,g]=f.useState(null),[R,J]=f.useState(!0),[W,P]=f.useState(!1),[k,G]=f.useState(""),[H,A]=f.useState(""),[F,ie]=f.useState("");f.useEffect(()=>{b||ie("")},[b]);const de=lj(l),U=f.useCallback(async(S=1)=>{J(!0),G("");try{const L=await h1(S,15);d(L.data),h(L.total)}catch(L){G(L instanceof Error?L.message:l("giftcard.loadFailed"))}finally{J(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}U(1),ml().then(y).catch(()=>{})},[U,s]);async function Y(S){var L,w;if(S.preventDefault(),!!b){P(!0),G(""),A("");try{const T=b.type==="1"?Math.round(Number(b.value)*100):Number(b.value);await x1({id:b.id,name:b.name,type:Number(b.type),value:T,code:b.code||void 0,started_at:Math.floor(new Date(b.started_at).getTime()/1e3),ended_at:Math.floor(new Date(b.ended_at).getTime()/1e3),limit_use:b.limit_use?Number(b.limit_use):null,plan_id:b.plan_id?Number(b.plan_id):null,generate_count:b.generate_count?Number(b.generate_count):void 0}),g(null),(L=window.showToast)==null||L.call(window,l("giftcard.saveSuccess"),"success"),await U(m)}catch(T){(w=window.showToast)==null||w.call(window,T instanceof Error?T.message:l("giftcard.saveFailed"),"error")}finally{P(!1)}}}async function ee(S){var L;(L=window.showConfirm)==null||L.call(window,{message:l("giftcard.deleteConfirm"),onConfirm:async()=>{var w,T;try{await g1(S),(w=window.showToast)==null||w.call(window,l("giftcard.deleteSuccess"),"success"),await U(m)}catch(I){(T=window.showToast)==null||T.call(window,I instanceof Error?I.message:l("giftcard.deleteFailed"),"error")}}})}const fe=Math.ceil(p/15);return t.jsxs(At,{title:l("giftcard.title"),subtitle:l("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("giftcard.heading")}),t.jsxs("p",{children:[p," ",l("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(m),disabled:R,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>g(ud()),children:[t.jsx(ya,{size:16}),l("giftcard.add")]})]})]}),k?t.jsx("div",{className:"form-error",children:k}):null,H?t.jsx("div",{className:"form-success",children:H}):null,R&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("giftcard.thId")}),t.jsx("th",{children:l("giftcard.thName")}),t.jsx("th",{children:l("giftcard.thCode")}),t.jsx("th",{children:l("giftcard.thType")}),t.jsx("th",{children:l("giftcard.thValue")}),t.jsx("th",{children:l("giftcard.thBoundPlan")}),t.jsx("th",{children:l("giftcard.thUses")}),t.jsx("th",{children:l("giftcard.thPeriod")}),t.jsx("th",{children:l("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[r.map(S=>{var L;return t.jsxs("tr",{children:[t.jsx("td",{children:S.id}),t.jsx("td",{children:t.jsx("strong",{children:S.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:S.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:de[S.type]??S.type})}),t.jsx("td",{children:t.jsx("strong",{children:S.type===1?$t(S.value):S.value})}),t.jsx("td",{children:S.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((L=v.find(w=>w.id===S.plan_id))==null?void 0:L.name)||`#${S.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:l("giftcard.planNone")})}),t.jsx("td",{children:S.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[So(S.started_at)," — ",So(S.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>g(ud(S)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ee(S.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},S.id)}),!R&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:l("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[r.map(S=>{var L;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",S.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:de[S.type]??S.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:S.name,children:S.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:l("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:l("giftcard.clickToCopy"),onClick:()=>{ul(S.code).then(w=>{var T;(T=window.showToast)==null||T.call(window,w?l("giftcard.copiedCode").replace("{code}",S.code):l("common.copyFailed"),w?"success":"error")})},children:[t.jsx("code",{className:"mono",children:S.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:S.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((L=v.find(w=>w.id===S.plan_id))==null?void 0:L.name)||`#${S.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",l("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[So(S.started_at)," — ",So(S.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:S.type===1?$t(S.value).replace(/\s?₫/,""):`${S.value}`}),t.jsx("span",{className:"ticket-value-unit",children:S.type===1?"₫":de[S.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:l("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:S.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>g(ud(S)),"aria-label":l("common.edit"),children:t.jsx(Ct,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ee(S.id),"aria-label":l("common.delete"),children:t.jsx(Dt,{size:15})})]})]})]},S.id)}),!R&&r.length===0?t.jsx("div",{className:"empty-state",children:l("giftcard.empty")}):null]}),fe>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{j(m-1),U(m-1)},children:t.jsx(dn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",fe]}),t.jsx("button",{className:"mini-button",disabled:m>=fe,onClick:()=>{j(m+1),U(m+1)},children:t.jsx(un,{size:16})})]}):null,b?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:b.id?l("giftcard.edit"):l("giftcard.create")}),t.jsx("p",{children:l("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:b.name,onChange:S=>g({...b,name:S.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:b.type,onChange:S=>g({...b,type:S.target.value}),children:Object.entries(de).map(([S,L])=>t.jsx("option",{value:S,children:L},S))})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:b.value,onChange:S=>g({...b,value:S.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.started_at,onChange:S=>g({...b,started_at:S.target.value}),onClick:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)},onFocus:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:b.ended_at,onChange:S=>g({...b,ended_at:S.target.value}),onClick:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)},onFocus:S=>{var L,w;return(w=(L=S.currentTarget).showPicker)==null?void 0:w.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.limit_use,onChange:S=>g({...b,limit_use:S.target.value}),placeholder:l("giftcard.placeholderUnlimited")})]}),b.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:l("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:b.generate_count,onChange:S=>g({...b,generate_count:S.target.value}),placeholder:l("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:l("giftcard.bindPlan")}),b.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const S=v.find(L=>String(L.id)===b.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{g({...b,plan_id:""})},children:[S?S.name:`#${b.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:l("giftcard.searchPlans"),value:F,onChange:S=>ie(S.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!b.plan_id,onChange:()=>{g({...b,plan_id:""})}}),t.jsx("span",{children:l("giftcard.noneAllPlans")})]}),v.filter(S=>S.name.toLowerCase().includes(F.toLowerCase())).map(S=>{const L=String(S.id)===b.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:w=>{w.target.checked&&g({...b,plan_id:String(S.id)})}}),t.jsx("span",{children:S.name})]},S.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:l("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(va,{size:16}),l(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const Ji="Tương đối",rn="=";function ko(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function sj(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function Sh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function pd(s){return+(s/1073741824).toFixed(2)}function md(s){return Math.round(s*1073741824)}function Co(s){return(s/1073741824).toFixed(2)}function oj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function ei(s){if(s===0)return"0.00 MB";const l=s/1073741824;return l<.1?`${(s/1048576).toFixed(2)} MB`:`${l.toFixed(2)} GB`}const Cd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],yx="user_visible_columns";function rj(){if(typeof window<"u")try{const s=localStorage.getItem(yx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Cd.filter(s=>s.defaultVisible).map(s=>s.key))}const Ho=[{value:"email",label:"Email",condition:Ji,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:rn,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:rn,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:rn,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:rn,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:Ji,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:rn,placeholder:"12345"},{value:"uuid",label:"UUID",condition:Ji,placeholder:"UUID"},{value:"token",label:"Token",condition:Ji,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:Ji,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:rn,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:rn,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:rn,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:rn,placeholder:"1780366403"}],cj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Vt(s,l){switch(s){case"id":return l("user.colId");case"email":return l("user.colEmail");case"status":return l("user.colStatus");case"plan":return l("user.colPlan");case"group":return l("user.colGroup");case"used":return l("user.colUsed");case"traffic":return l("user.colTraffic");case"devices":return l("user.colDevices");case"expires":return l("user.colExpires");case"balance":return l("user.colBalance");case"commission":return l("user.colCommission");case"joined":return l("user.colJoined");case"actions":return l("user.colActions");default:return""}}function dj(s,l){var p;const r=((p=Ho.find(h=>h.value===s))==null?void 0:p.label)??s,d=h=>{const m=l(h);return m===h?r:m};switch(s){case"email":return l("user.filterEmail");case"id":return l("user.filterId");case"plan_id":return l("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return l("user.filterInviterEmail");case"invite_user_id":return l("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return l("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return r}}function kh(s){return Ho.find(l=>l.value===s)??Ho[0]}function uj(s,l){switch(s){case"month_price":return l("order.period.month_price");case"quarter_price":return l("order.period.quarter_price");case"half_year_price":return l("order.period.half_year_price");case"year_price":return l("order.period.year_price");case"two_year_price":return l("order.period.two_year_price");case"three_year_price":return l("order.period.three_year_price");case"onetime_price":return l("order.period.onetime_price");case"reset_price":return l("order.period.reset_price");default:return""}}function pj(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState([]),[v,y]=f.useState(0),[b,g]=f.useState(1),[R,J]=f.useState(""),[W,P]=f.useState("email"),[k,G]=f.useState(!0),[H,A]=f.useState(""),[F,ie]=f.useState(rj),[de,U]=f.useState(!1),Y=f.useRef(null),[ee,fe]=f.useState(null),[S,L]=f.useState(null),[w,T]=f.useState({}),[I,D]=f.useState(!1),[X,_]=f.useState(!1),[se,oe]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[C,Z]=f.useState(!1),[ue,xe]=f.useState(null),[we,_e]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[Se,Ke]=f.useState(!1),[$e,Ot]=f.useState(null),[gt,Qt]=f.useState(null),[Et,st]=f.useState([]),[bt,Ma]=f.useState(0),[pt,It]=f.useState(1),[Ut]=f.useState(10),[Xt,ea]=f.useState(!1),[E,O]=f.useState("");f.useEffect(()=>{function N(ge){const be=ge.target instanceof Element?ge.target:null;ee!==null&&(!be||!be.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&fe(null),de&&Y.current&&!Y.current.contains(ge.target)&&U(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[ee,de]);function re(N){ie(ge=>{const be=new Set(ge);be.has(N)?be.delete(N):be.add(N);try{localStorage.setItem(yx,JSON.stringify([...be]))}catch{}return be})}const ae=N=>F.has(N),ve=Cd.filter(N=>F.has(N.key)).length,Ce=f.useCallback(async(N=1,ge,be)=>{G(!0),A("");try{const Re=ge==null?void 0:ge.trim(),Zt=kh(be||"email"),ss=Re?[{key:Zt.value,condition:Zt.condition,value:Re}]:void 0,Aa=await Sd(N,15,ss);d(Aa.data),y(Aa.total)}catch(Re){A(Re instanceof Error?Re.message:l("user.loadFailed"))}finally{G(!1)}},[]),Ee=f.useCallback(async()=>{try{const[N,ge]=await Promise.all([ml(),ns()]);h(N),j(ge)}catch{}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}Ce(1),Ee()},[Ce,Ee,s]);function We(){g(1),Ce(1,R,W)}function pn(){J(""),g(1),Ce(1)}function ta(N){g(N),Ce(N,R,W)}function Qn(N){if(N.plan_name)return N.plan_name;if(!N.plan_id)return"—";const ge=p.find(be=>be.id===N.plan_id);return ge?ge.name:`#${N.plan_id}`}function Da(N){if(!N.group_id)return"—";const ge=m.find(be=>be.id===N.group_id);return ge?ge.name:`#${N.group_id}`}function ft(N){return`${N.alive_ip??0} / ${N.device_limit??"∞"}`}async function Ft(N){var Re,Zt;const ge=N.subscribe_url;if(!ge){(Re=window.showToast)==null||Re.call(window,l("user.toastNoSubscribeUrl"),"error");return}const be=await ul(ge);(Zt=window.showToast)==null||Zt.call(window,l(be?"user.toastUrlCopied":"common.copyFailed"),be?"success":"error"),fe(null)}function q(N){var ge;fe(null),(ge=window.showConfirm)==null||ge.call(window,{message:l("user.confirmResetSecret"),onConfirm:async()=>{var be,Re;try{await j1(N.id),(be=window.showToast)==null||be.call(window,l("user.toastSecretResetSuccess"),"success"),await Ce(b,R,W)}catch(Zt){(Re=window.showToast)==null||Re.call(window,Zt instanceof Error?Zt.message:l("user.toastSecretResetFailed"),"error")}}})}function ce(N){var ge;fe(null),(ge=window.showConfirm)==null||ge.call(window,{message:l("user.confirmDelete"),onConfirm:async()=>{var be,Re;try{await y1(N.id),(be=window.showToast)==null||be.call(window,l("user.toastDeletedSuccess"),"success"),await Ce(b,R,W)}catch(Zt){(Re=window.showToast)==null||Re.call(window,Zt instanceof Error?Zt.message:l("user.toastDeletedFailed"),"error")}}})}function me(N){var be;fe(null);const ge=N.subscribe_url;if(!ge){(be=window.showToast)==null||be.call(window,l("user.toastNoSubscribeUrl"),"error");return}Ot({url:ge,userId:N.id})}function Ue(N){fe(null),s.push(`/order?user_id=${N.id}`)}function Me(N){fe(null),s.push(`/subscription?user_id=${N.id}`)}function Pe(N){fe(null),P("invite_user_id"),J(String(N.id)),Ce(1,String(N.id),"invite_user_id")}async function Fe(N,ge){ea(!0),O("");try{const be=await C1(N,ge,Ut);st(be.data||[]),Ma(be.total||0),It(ge)}catch(be){O(be instanceof Error?be.message:l("user.historyLoading"))}finally{ea(!1)}}function Le(N){fe(null),Qt(N),Fe(N.id,1)}function aa(N){fe(null),xe(N.email),_e({plan_id:"",period:"month_price",total_amount:""})}async function Wt(N){var ge,be;if(N.preventDefault(),!!ue){Ke(!0);try{await rx({email:ue,plan_id:Number(we.plan_id),period:we.period,total_amount:(Number(we.total_amount)||0)*100}),(ge=window.showToast)==null||ge.call(window,l("user.toastAssignSuccess"),"success"),xe(null)}catch(Re){(be=window.showToast)==null||be.call(window,Re instanceof Error?Re.message:l("user.toastAssignFailed"),"error")}finally{Ke(!1)}}}function mn(N){fe(null),L(N),T({id:N.id,email:N.email,invite_user_email:"",password:"",balance:N.balance,commission_balance:N.commission_balance,u:pd(N.u),d:pd(N.d),transfer_enable:pd(N.transfer_enable),device_limit:N.device_limit,network_settings:N.network_settings??"",expired_at:sj(N.expired_at),plan_id:N.plan_id,banned:N.banned,commission_type:N.commission_type??0,commission_rate:N.commission_rate??"",discount:N.discount??"",speed_limit:N.speed_limit,is_admin:N.is_admin,is_staff:N.is_staff,remarks:N.remarks??""})}function ot(N,ge){T(be=>({...be,[N]:ge}))}async function ni(N){var ge,be;if(N.preventDefault(),!!S){D(!0);try{const Re={id:S.id,email:w.email,plan_id:w.plan_id||null,expired_at:Sh(String(w.expired_at??"")),transfer_enable:md(Number(w.transfer_enable??0)),speed_limit:w.speed_limit||null,device_limit:w.device_limit||null,u:md(Number(w.u??0)),d:md(Number(w.d??0)),balance:Number(w.balance??0),commission_balance:Number(w.commission_balance??0),commission_rate:w.commission_rate!==""&&w.commission_rate!==null?Number(w.commission_rate):null,commission_type:Number(w.commission_type??0),discount:w.discount!==""&&w.discount!==null?Number(w.discount):null,network_settings:w.network_settings||null,remarks:w.remarks||null,is_admin:Number(w.is_admin??0),is_staff:Number(w.is_staff??0),banned:Number(w.banned??0)};w.invite_user_email&&(Re.invite_user_email=w.invite_user_email),w.password&&(Re.password=w.password),await b1(Re),(ge=window.showToast)==null||ge.call(window,l("user.toastSaveSuccess"),"success"),L(null),await Ce(b,R,W)}catch(Re){(be=window.showToast)==null||be.call(window,Re instanceof Error?Re.message:l("user.toastSaveFailed"),"error")}finally{D(!1)}}}async function Xn(N){var ge,be;N.preventDefault(),Z(!0);try{await v1({email_prefix:se.email_prefix,email_suffix:se.email_suffix,password:se.password||void 0,plan_id:se.plan_id?Number(se.plan_id):void 0,expired_at:Sh(se.expired_at)}),(ge=window.showToast)==null||ge.call(window,l("user.toastCreateSuccess"),"success"),_(!1),oe({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Ce(b,R,W)}catch(Re){(be=window.showToast)==null||be.call(window,Re instanceof Error?Re.message:l("user.toastCreateFailed"),"error")}finally{Z(!1)}}const Ha=Math.ceil(v/15),is=kh(W);return t.jsxs(At,{title:l("user.title"),subtitle:l("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("user.heading")}),t.jsxs("p",{children:[v," ",l("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:Y,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>U(!de),children:[t.jsx(nv,{size:16}),l("user.columns")]}),de?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:l("user.visibleColumns",{count:ve})})}),Cd.map(N=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:F.has(N.key),onChange:()=>re(N.key)}),t.jsx("span",{children:Vt(N.key,l)})]},N.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Ce(b,R,W),disabled:k,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(!0),children:[t.jsx(ya,{size:16}),l("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:W,onChange:N=>P(N.target.value),children:Ho.map(N=>t.jsx("option",{value:N.value,children:dj(N.value,l)},N.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Bo,{size:16}),t.jsx("input",{className:"config-input search-input",value:R,onChange:N=>J(N.target.value),placeholder:is.placeholder,onKeyDown:N=>N.key==="Enter"&&We()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:We,children:[t.jsx(ts,{size:16}),l("user.filter")]}),R?t.jsxs("button",{className:"ghost-button",type:"button",onClick:pn,children:[t.jsx(tt,{size:16}),l("user.clearFilter")]}):null]}),H?t.jsx("div",{className:"form-error",children:H}):null,k&&r.length===0?t.jsx(dt,{label:l("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${k?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[r.map(N=>{const ge=Co(N.u+N.d),be=Co(N.transfer_enable),Re=parseFloat(ge);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",N.id]}),t.jsx("span",{className:"user-email",title:N.email,children:N.email})]}),N.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Qn(N)," / ",N.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):Da(N)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Re>0?Re>parseFloat(be)*.9?"high":"ok":""}`,children:[ge," GB"]})," / ",be," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Vt("devices",l)}),t.jsx("span",{className:"info-val",children:ft(N)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Vt("expires",l)}),t.jsx("span",{className:"info-val",children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:ko(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:l("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(N.balance/100).toFixed(2)," ₫ / ",(N.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Vt("joined",l)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:ko(N.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${ee===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>fe(ee===N.id?null:N.id),children:[l("user.colActions")," ",t.jsx(ti,{size:14})]}),ee===N.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>fe(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:Zt=>Zt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:N.email}),t.jsxs("small",{children:["#",N.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>fe(null),children:t.jsx(tt,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>mn(N),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>aa(N),children:[t.jsx(th,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Ft(N),children:[t.jsx(ba,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>me(N),children:[t.jsx(Pf,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>q(N),children:[t.jsx(Oo,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(N),children:[t.jsx(Wf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Me(N),children:[t.jsx(wd,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Pe(N),children:[t.jsx(as,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Le(N),children:[t.jsx(ld,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>ce(N),children:[t.jsx(Dt,{size:14}),l("user.actionDelete")]})]})]})}):null]})})]},N.id)}),!k&&r.length===0?t.jsx("div",{className:"empty-state",children:l("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ae("id")&&t.jsx("th",{children:Vt("id",l)}),ae("email")&&t.jsx("th",{children:Vt("email",l)}),ae("status")&&t.jsx("th",{children:Vt("status",l)}),ae("plan")&&t.jsx("th",{children:Vt("plan",l)}),ae("group")&&t.jsx("th",{children:Vt("group",l)}),ae("used")&&t.jsx("th",{children:Vt("used",l)}),ae("traffic")&&t.jsx("th",{children:Vt("traffic",l)}),ae("devices")&&t.jsx("th",{children:Vt("devices",l)}),ae("expires")&&t.jsx("th",{children:Vt("expires",l)}),ae("balance")&&t.jsx("th",{children:Vt("balance",l)}),ae("commission")&&t.jsx("th",{children:Vt("commission",l)}),ae("joined")&&t.jsx("th",{children:Vt("joined",l)}),ae("actions")&&t.jsx("th",{children:Vt("actions",l)})]})}),t.jsxs("tbody",{children:[r.map(N=>{const ge=Co(N.u+N.d),be=Co(N.transfer_enable),Re=parseFloat(ge);return t.jsxs("tr",{children:[ae("id")&&t.jsx("td",{children:N.id}),ae("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:N.email})}),ae("status")&&t.jsx("td",{children:N.banned?t.jsx("span",{className:"status-tag banned",children:l("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:l("user.cardActive")})}),ae("plan")&&t.jsx("td",{children:Qn(N)}),ae("group")&&t.jsx("td",{children:N.is_admin?t.jsx("span",{style:{fontWeight:600},children:l("user.adminLabel")}):Da(N)}),ae("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Re>0?Re>parseFloat(be)*.9?"high":"ok":""}`,children:ge})}),ae("traffic")&&t.jsx("td",{children:be}),ae("devices")&&t.jsx("td",{children:ft(N)}),ae("expires")&&t.jsx("td",{children:N.expired_at?t.jsx("span",{className:`expiry-date ${N.expired_at<Date.now()/1e3?"expired":""}`,children:ko(N.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ae("balance")&&t.jsx("td",{children:(N.balance/100).toFixed(2)}),ae("commission")&&t.jsx("td",{children:(N.commission_balance/100).toFixed(2)}),ae("joined")&&t.jsx("td",{children:t.jsx("small",{children:ko(N.created_at)})}),ae("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${ee===N.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>fe(ee===N.id?null:N.id),children:[l("user.colActions")," ",t.jsx(ti,{size:14})]}),ee===N.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>mn(N),children:[t.jsx(Ct,{size:14}),l("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>aa(N),children:[t.jsx(th,{size:14}),l("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Ft(N),children:[t.jsx(ba,{size:14}),l("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>me(N),children:[t.jsx(Pf,{size:14}),l("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>q(N),children:[t.jsx(Oo,{size:14}),l("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ue(N),children:[t.jsx(Wf,{size:14}),l("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>Me(N),children:[t.jsx(wd,{size:14}),l("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Pe(N),children:[t.jsx(as,{size:14}),l("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Le(N),children:[t.jsx(ld,{size:14}),l("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>ce(N),children:[t.jsx(Dt,{size:14}),l("user.actionDelete")]})]}):null]})})]},N.id)}),!k&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:ve,children:t.jsx("div",{className:"empty-state",children:l("user.noUsers")})})}):null]})]})})}),Ha>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:b<=1,onClick:()=>ta(b-1),children:t.jsx(dn,{size:16})}),Array.from({length:Math.min(5,Ha)},(N,ge)=>{let be;return Ha<=5||b<=3?be=ge+1:b>=Ha-2?be=Ha-4+ge:be=b-2+ge,t.jsx("button",{className:`mini-button ${be===b?"active-page":""}`,onClick:()=>ta(be),children:be},be)}),Ha>5?t.jsxs("span",{className:"page-info",children:["… ",Ha]}):null,t.jsx("button",{className:"mini-button",disabled:b>=Ha,onClick:()=>ta(b+1),children:t.jsx(un,{size:16})})]})}):null]}),S?t.jsx("div",{className:"modal-backdrop",onClick:()=>L(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>L(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:ni,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(w.email??""),onChange:N=>ot("email",N.target.value)})]}),t.jsxs("label",{className:"field-label",children:[l("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(w.invite_user_email??""),onChange:N=>ot("invite_user_email",N.target.value),placeholder:l("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(w.password??""),onChange:N=>ot("password",N.target.value),placeholder:l("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(w.balance??0)/100).toFixed(2)),onChange:N=>ot("balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(w.commission_balance??0)/100).toFixed(2)),onChange:N=>ot("commission_balance",Math.round(Number(N.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[l("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.u??0),onChange:N=>ot("u",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.d??0),onChange:N=>ot("d",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(w.transfer_enable??0),onChange:N=>ot("transfer_enable",N.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(w.device_limit??""),onChange:N=>ot("device_limit",N.target.value?Number(N.target.value):null),placeholder:l("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(w.network_settings??""),onChange:N=>ot("network_settings",N.target.value),placeholder:l("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(w.expired_at??""),onChange:N=>ot("expired_at",N.target.value),onClick:N=>{var ge,be;return(be=(ge=N.currentTarget).showPicker)==null?void 0:be.call(ge)},onFocus:N=>{var ge,be;return(be=(ge=N.currentTarget).showPicker)==null?void 0:be.call(ge)}})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:String(w.plan_id??""),onChange:N=>ot("plan_id",N.target.value?Number(N.target.value):null),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(w.banned??0),onChange:N=>ot("banned",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:l("user.cardActive")}),t.jsx("option",{value:"1",children:l("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(w.commission_type??0),onChange:N=>ot("commission_type",Number(N.target.value)),children:[t.jsx("option",{value:"0",children:l("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:l("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:l("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(w.commission_rate??""),onChange:N=>ot("commission_rate",N.target.value),placeholder:l("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(w.discount??""),onChange:N=>ot("discount",N.target.value),placeholder:l("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(w.speed_limit??""),onChange:N=>ot("speed_limit",N.target.value?Number(N.target.value):null),placeholder:l("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${w.is_admin?"active":""}`,onClick:()=>ot("is_admin",w.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:l("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${w.is_staff?"active":""}`,onClick:()=>ot("is_staff",w.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[l("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(w.remarks??""),onChange:N=>ot("remarks",N.target.value),placeholder:l("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>L(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:I,children:l(I?"common.processing":"common.save")})]})]})]})}):null,X?t.jsx("div",{className:"modal-backdrop",onClick:()=>_(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(!1),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Xn,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:se.email_prefix,onChange:N=>oe({...se,email_prefix:N.target.value}),placeholder:l("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:se.email_suffix,onChange:N=>oe({...se,email_suffix:N.target.value}),placeholder:l("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[l("user.password"),t.jsx("input",{className:"config-input",type:"password",value:se.password,onChange:N=>oe({...se,password:N.target.value}),placeholder:l("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",value:se.plan_id,onChange:N=>oe({...se,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:l("user.planNone")}),p.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:se.expired_at,onChange:N=>oe({...se,expired_at:N.target.value}),onClick:N=>{var ge,be;return(be=(ge=N.currentTarget).showPicker)==null?void 0:be.call(ge)},onFocus:N=>{var ge,be;return(be=(ge=N.currentTarget).showPicker)==null?void 0:be.call(ge)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(!1),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:C,children:l(C?"user.creating":"user.createUser")})]})]})]})}):null,ue?t.jsx("div",{className:"modal-backdrop",onClick:()=>xe(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>xe(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Wt,children:[t.jsxs("label",{className:"field-label",children:[l("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:ue})]}),t.jsxs("label",{className:"field-label",children:[l("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:we.plan_id,onChange:N=>_e({...we,plan_id:N.target.value}),children:[t.jsx("option",{value:"",children:l("user.assignPlanSelect")}),p.map(N=>t.jsx("option",{value:N.id,children:N.name},N.id))]})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:we.period,onChange:N=>_e({...we,period:N.target.value}),children:cj.map(N=>t.jsx("option",{value:N.value,children:uj(N.value,l)},N.value))})]}),t.jsxs("label",{className:"field-label",children:[l("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:we.total_amount,onChange:N=>_e({...we,total_amount:N.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>xe(null),children:l("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Se,children:l(Se?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),$e?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ot(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:l("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ot(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent($e.url)}`,alt:l("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:l("user.qrCodeUserId",{userId:$e.userId})})]})]})}):null,gt?t.jsx("div",{className:"modal-backdrop",onClick:()=>Qt(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:N=>N.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:l("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:l("user.dataHistorySub",{email:gt.email,id:gt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Qt(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[E?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:E}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:l("user.historyTotalDays",{count:bt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:ei(Et.reduce((N,ge)=>N+ge.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:ei(Et.reduce((N,ge)=>N+ge.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:l("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:ei(Et.reduce((N,ge)=>N+ge.u+ge.d,0))})]})]}),Xt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(dt,{label:l("user.historyLoading")})}):Et.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(ld,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:l("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:l("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("user.historyColDate")}),t.jsx("th",{children:l("user.historyColRate")}),t.jsx("th",{children:l("user.historyColUpload")}),t.jsx("th",{children:l("user.historyColDownload")}),t.jsx("th",{children:l("user.historyColTotal")})]})}),t.jsx("tbody",{children:Et.map(N=>{const ge=ei(N.u),be=ei(N.d),Re=ei(N.u+N.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:oj(N.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(N.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:ge}),t.jsx("td",{style:{color:"var(--muted)"},children:be}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Re})]},N.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:l("user.historyShowingLogs",{start:Math.min((pt-1)*Ut+1,bt),end:Math.min(pt*Ut,bt),total:bt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:pt<=1,onClick:()=>Fe(gt.id,pt-1),children:[t.jsx(dn,{size:16}),l("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:pt*Ut>=bt,onClick:()=>Fe(gt.id,pt+1),children:[l("user.historyNext"),t.jsx(un,{size:16})]})]})]})]})]})]})}):null]})}const Ch=15,zh=20,mj=["email","id","user_id","plan_id","status"];function Hn(s,l){return s?new Date(s*1e3).toLocaleString():l}function fj(s){if(!s)return"";const l=new Date(s*1e3),r=d=>String(d).padStart(2,"0");return`${l.getFullYear()}-${r(l.getMonth()+1)}-${r(l.getDate())}`}function hj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function dl(s){return+(s/1073741824).toFixed(2)}function fd(s){return Math.round((Number(s)||0)*1073741824)}function xj(s){return s==="email"?"like":"="}function gj(s,l){switch(s){case"email":return l("subscription.filterEmail");case"id":return l("subscription.filterId");case"user_id":return l("subscription.filterUserId");case"plan_id":return l("subscription.filterPlanId");case"status":return l("subscription.filterStatus");default:return s}}function Th(s,l){return l(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Eh(s,l){switch(s){case"bound":return l("subscription.slotStatusBound");case"banned":return l("subscription.slotStatusBanned");default:return l("subscription.slotStatusPending")}}function Mh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function bj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function yj(){const s=wt(),l=$n(),{t:r}=He(),[d,p]=f.useState([]),[h,m]=f.useState(0),[j,v]=f.useState(1),[y,b]=f.useState("email"),[g,R]=f.useState(""),[J,W]=f.useState(!0),[P,k]=f.useState(""),[G,H]=f.useState(null),[A,F]=f.useState({}),[ie,de]=f.useState(null),[U,Y]=f.useState(null),[ee,fe]=f.useState([]),[S,L]=f.useState(0),[w,T]=f.useState(1),[I,D]=f.useState(!1),[X,_]=f.useState(""),[se,oe]=f.useState(null),C=f.useCallback(async(E=1,O="",re="email")=>{W(!0),k("");try{const ae=O.trim()?[{key:re,condition:xj(re),value:O.trim()}]:void 0,ve=await w1(E,Ch,ae);p(ve.data),m(ve.total),v(E)}catch(ae){k(ae instanceof Error?ae.message:r("subscription.loadFailed"))}finally{W(!1)}},[r]),Z=f.useCallback(async(E,O=1)=>{D(!0),_("");try{const re=await dx(O,zh,[{key:"subscription_id",condition:"=",value:String(E.id)}]);fe(re.data),L(re.total),T(O)}catch(re){_(re instanceof Error?re.message:r("subscription.slotsLoadFailed"))}finally{D(!1)}},[r]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}const E=new URLSearchParams(l.search),re=[["user_id",E.get("user_id")],["id",E.get("id")],["plan_id",E.get("plan_id")],["email",E.get("email")],["status",E.get("status")]].find(([,ae])=>ae&&ae.trim());if(re){const[ae,ve]=re,Ce=ve??"";b(ae),R(Ce),C(1,Ce,ae);return}C()},[C,l.search,s]);function ue(E){E.preventDefault(),C(1,g,y)}function xe(){if(R(""),l.search){s.replace("/subscription");return}C(1,"",y)}function we(E){H(E),F({transfer_enable:String(dl(E.transfer_enable)),u:String(dl(E.u)),d:String(dl(E.d)),device_limit:E.device_limit===null?"":String(E.device_limit),speed_limit:E.speed_limit===null?"":String(E.speed_limit),expired_at:fj(E.expired_at),status:E.status,auto_renewal:String(E.auto_renewal||0),remarks:E.remarks??""})}async function _e(E){var O,re;if(E.preventDefault(),!!G){de(G.id);try{await _1({id:G.id,transfer_enable:fd(A.transfer_enable),u:fd(A.u),d:fd(A.d),device_limit:A.device_limit===""?null:Number(A.device_limit),speed_limit:A.speed_limit===""?null:Number(A.speed_limit),expired_at:hj(A.expired_at),status:A.status,auto_renewal:Number(A.auto_renewal),remarks:A.remarks}),H(null),(O=window.showToast)==null||O.call(window,r("subscription.updateSuccess"),"success"),await C(j,g,y)}catch(ae){(re=window.showToast)==null||re.call(window,ae instanceof Error?ae.message:r("subscription.saveFailed"),"error")}finally{de(null)}}}function Se(E){var O;(O=window.showConfirm)==null||O.call(window,{message:r("subscription.resetConfirm",{id:E.id}),onConfirm:async()=>{var re,ae;de(E.id);try{await S1(E.id),(re=window.showToast)==null||re.call(window,r("subscription.resetSuccess"),"success"),await C(j,g,y)}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("subscription.resetFailed"),"error")}finally{de(null)}}})}async function Ke(E){var re;if(!E)return;const O=await ul(E);(re=window.showToast)==null||re.call(window,r(O?"subscription.copySuccess":"common.copyFailed"),O?"success":"error")}async function $e(E){var O,re;oe(E.id);try{let ae=E.subscribe_url||null;if(ae||(ae=(await N1(E.id)).data,ae&&p(Ce=>Ce.map(Ee=>Ee.id===E.id?{...Ee,subscribe_url:ae}:Ee))),!ae){(O=window.showToast)==null||O.call(window,r("common.copyFailed"),"error");return}await Ke(ae)}catch(ae){(re=window.showToast)==null||re.call(window,ae instanceof Error?ae.message:r("common.copyFailed"),"error")}finally{oe(null)}}function Ot(E){Y(E),fe([]),L(0),T(1),Z(E,1)}function gt(E=w){return U?Z(U,E):Promise.resolve()}function Qt(E){var O;(O=window.showConfirm)==null||O.call(window,{message:r("subscription.unbindConfirm"),onConfirm:async()=>{var re,ae;de(E.id);try{await ux(E.id),(re=window.showToast)==null||re.call(window,r("subscription.unbindSuccess"),"success"),await Promise.all([gt(),C(j,g,y)])}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("subscription.unbindFailed"),"error")}finally{de(null)}}})}function Et(E){var O;(O=window.showConfirm)==null||O.call(window,{message:r("subscription.banConfirm"),onConfirm:async()=>{var re,ae;de(E.id);try{await px(E.id),(re=window.showToast)==null||re.call(window,r("subscription.banSuccess"),"success"),await Promise.all([gt(),C(j,g,y)])}catch(ve){(ae=window.showToast)==null||ae.call(window,ve instanceof Error?ve.message:r("subscription.banFailed"),"error")}finally{de(null)}}})}function st(E){const O=E.device_limit&&E.device_limit>0?String(E.device_limit):r("subscription.unlimited"),re=!!(E.device_count||E.device_limit&&E.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:E.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:O})]}),E.device_limit&&E.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(E.device_count/E.device_limit*100))}%`}})}):t.jsx("small",{children:r("subscription.noDeviceLimit")}),re?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ot(E),children:[t.jsx(wd,{size:14}),t.jsx("span",{children:r("subscription.manageUuids")})]}):null]})}function bt(E){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[dl(E.total_used)," / ",dl(E.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${bj(E)}%`}})}),t.jsx("small",{children:r("subscription.uploadDownload",{upload:dl(E.u),download:dl(E.d)})})]})}function Ma(E){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]}),t.jsx("small",{children:r("subscription.primaryUuid")})]})}function pt(E){return t.jsxs("div",{className:"subscription-link-stack",children:[Ma(E),E.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.subscribe_url,onClick:()=>void $e(E),disabled:se===E.id,children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.subscribe_url})]}),t.jsx("small",{children:r("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void $e(E),disabled:se===E.id,children:[t.jsx(ba,{size:14}),t.jsx("span",{children:se===E.id?r("common.processing"):r("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:r("subscription.colSubscribeUrl")})]})]})}function It(E){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>we(E),children:[t.jsx(Ct,{size:14}),r("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ie===E.id,onClick:()=>Se(E),children:[t.jsx(Oo,{size:14}),r("subscription.resetSecret")]})]})}const Ut=Math.ceil(h/Ch),Xt=Math.ceil(S/zh),ea=Ut>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:j<=1||J,onClick:()=>void C(j-1,g,y),children:[t.jsx(dn,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:j,total:Ut})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:j>=Ut||J,onClick:()=>void C(j+1,g,y),children:[r("common.next"),t.jsx(un,{size:14})]})]}):null;return t.jsxs(At,{title:r("subscription.title"),subtitle:r("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.heading")}),t.jsx("p",{children:r("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:J,onClick:()=>void C(j,g,y),children:[t.jsx(zt,{size:16}),r(J?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ue,children:[t.jsx("select",{className:"config-input filter-select",value:y,onChange:E=>b(E.target.value),children:mj.map(E=>t.jsx("option",{value:E,children:gj(E,r)},E))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Bo,{size:16}),t.jsx("input",{className:"config-input",value:g,onChange:E=>R(E.target.value),placeholder:r("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ts,{size:16}),r("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:xe,children:r("common.clearFilter")})]}),P?t.jsx("div",{className:"form-error",children:P}):null,J&&d.length===0?t.jsx(dt,{label:r("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[r("subscription.colUser")," / ",r("subscription.colPlan")]}),t.jsx("th",{children:r("subscription.colStatus")}),t.jsx("th",{children:r("subscription.colTraffic")}),t.jsx("th",{children:r("subscription.colDevices")}),t.jsx("th",{children:r("subscription.colExpires")}),t.jsxs("th",{children:[r("subscription.colPrimaryUuid")," / ",r("subscription.colSubscribeUrl")]}),t.jsx("th",{children:r("subscription.colUpdated")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(E=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",E.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:E.plan_name??"-"}),t.jsx("strong",{className:"subscription-email",children:E.user_email??"-"}),t.jsxs("small",{children:[r("subscription.userId",{id:E.user_id}),E.plan_id?` - ${r("subscription.planId",{id:E.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${E.status}`,children:Th(E.status,r)})}),t.jsx("td",{children:bt(E)}),t.jsx("td",{children:st(E)}),t.jsx("td",{children:Hn(E.expired_at,r("subscription.never"))}),t.jsx("td",{children:pt(E)}),t.jsx("td",{children:Hn(E.updated_at,r("subscription.never"))}),t.jsx("td",{children:It(E)})]},E.id)),!J&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(E=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",E.id]}),t.jsx("strong",{className:"subscription-plan-name",children:E.plan_name??"-"}),t.jsx("small",{children:E.user_email??r("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${E.status}`,children:Th(E.status,r)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colTraffic")}),bt(E)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colDevices")}),st(E)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colExpires")}),t.jsx("strong",{children:Hn(E.expired_at,r("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:r("subscription.colUpdated")}),t.jsx("strong",{children:Hn(E.updated_at,r("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:pt(E)}),It(E)]},E.id)),!J&&d.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.empty")}):null]}),ea,U?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Y(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.slotsTitle",{id:U.id})}),t.jsx("p",{children:U.user_email??r("subscription.userId",{id:U.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>Y(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[X?t.jsx("div",{className:"form-error",children:X}):null,I&&ee.length===0?t.jsx(dt,{label:r("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:r("subscription.slotUuid")}),t.jsx("th",{children:r("subscription.slotStatus")}),t.jsx("th",{children:r("subscription.slotHwid")}),t.jsx("th",{children:r("subscription.slotClient")}),t.jsx("th",{children:r("subscription.slotIp")}),t.jsx("th",{children:r("subscription.slotFirstSeen")}),t.jsx("th",{children:r("subscription.slotLastSeen")}),t.jsx("th",{children:r("common.actions")})]})}),t.jsxs("tbody",{children:[ee.map(E=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Mh(E.status)}`,children:Eh(E.status,r)})}),t.jsx("td",{children:E.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.hwid,onClick:()=>Ke(E.hwid),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:E.user_agent??"",children:E.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:E.last_ip??"-"}),t.jsx("small",{children:E.first_ip?r("subscription.firstIp",{ip:E.first_ip}):"-"})]}),t.jsx("td",{children:Hn(E.first_seen_at,"-")}),t.jsx("td",{children:Hn(E.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===E.id,onClick:()=>Qt(E),children:[t.jsx(Ro,{size:14}),r("subscription.unbind")]}),E.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===E.id,onClick:()=>Et(E),children:[t.jsx(Bn,{size:14}),r("subscription.ban")]}):null]})})]},E.id)),!I&&ee.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ee.map(E=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:r("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Mh(E.status)}`,children:Eh(E.status,r)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.uuid,onClick:()=>Ke(E.uuid),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotHwid")}),E.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:E.hwid,onClick:()=>Ke(E.hwid),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:E.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotIp")}),t.jsx("span",{className:"mono",children:E.last_ip??"-"}),t.jsx("small",{children:E.first_ip?r("subscription.firstIp",{ip:E.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotClient")}),t.jsx("small",{title:E.user_agent??"",children:E.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotFirstSeen")}),t.jsx("span",{children:Hn(E.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:r("subscription.slotLastSeen")}),t.jsx("span",{children:Hn(E.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===E.id,onClick:()=>Qt(E),children:[t.jsx(Ro,{size:14}),r("subscription.unbind")]}),E.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===E.id,onClick:()=>Et(E),children:[t.jsx(Bn,{size:14}),r("subscription.ban")]}):null]})]},E.id)),!I&&ee.length===0?t.jsx("div",{className:"empty-state",children:r("subscription.slotsEmpty")}):null]}),Xt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:w<=1||I,onClick:()=>void gt(w-1),children:[t.jsx(dn,{size:14}),r("common.prev")]}),t.jsx("span",{className:"page-info",children:r("subscription.page",{page:w,total:Xt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:w>=Xt||I,onClick:()=>void gt(w+1),children:[r("common.next"),t.jsx(un,{size:14})]})]}):null]})]})}):null,G?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>H(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:r("subscription.editTitle",{id:G.id})}),t.jsx("p",{children:G.user_email??r("subscription.userId",{id:G.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":r("common.closeMenu"),onClick:()=>H(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:_e,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[r("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.transfer_enable,onChange:E=>F(O=>({...O,transfer_enable:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.u,onChange:E=>F(O=>({...O,u:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:A.d,onChange:E=>F(O=>({...O,d:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:A.device_limit,onChange:E=>F(O=>({...O,device_limit:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:A.speed_limit,onChange:E=>F(O=>({...O,speed_limit:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:A.expired_at,onChange:E=>F(O=>({...O,expired_at:E.target.value}))})]}),t.jsxs("label",{children:[r("subscription.status"),t.jsxs("select",{className:"config-input",value:A.status,onChange:E=>F(O=>({...O,status:E.target.value})),children:[t.jsx("option",{value:"active",children:r("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:r("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[r("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:A.auto_renewal,onChange:E=>F(O=>({...O,auto_renewal:E.target.value})),children:[t.jsx("option",{value:"0",children:r("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:r("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[r("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:A.remarks,onChange:E=>F(O=>({...O,remarks:E.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>H(null),children:r("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ie===G.id,children:ie===G.id?r("common.processing"):r("common.save")})]})]})]})}):null]})}const Dh=15,vj=["email","user_id","hwid","last_ip"];function zo(s){return s?new Date(s*1e3).toLocaleString():"-"}function jj(s){return s==="user_id"?"=":"like"}function wj(s,l){switch(s){case"email":return l("device.filterEmail");case"user_id":return l("device.filterUserId");case"hwid":return l("device.filterHwid");case"last_ip":return l("device.filterIp");default:return""}}function Ah(s,l){switch(s){case"bound":return l("device.statusBound");case"banned":return l("device.statusBanned");default:return l("device.statusPending")}}function To(s){return(s.online_ips??[]).join(", ")||"-"}function Eo(s){return(s.online_nodes??[]).map(l=>`${l.node_type}#${l.node_id}`).join(", ")||"-"}function Nj(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(0),[m,j]=f.useState(1),[v,y]=f.useState("email"),[b,g]=f.useState(""),[R,J]=f.useState(!0),[W,P]=f.useState(""),[k,G]=f.useState(null),[H,A]=f.useState(null),F=f.useCallback(async(w=1,T="",I="email")=>{J(!0),P("");try{const D=T.trim()?[{key:I,condition:jj(I),value:T.trim()}]:void 0,X=await dx(w,Dh,D);d(X.data),h(X.total),j(w)}catch(D){P(D instanceof Error?D.message:l("device.loadFailed"))}finally{J(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}F()},[F,s]);function ie(w){w.preventDefault(),F(1,b,v)}function de(){g(""),F(1,"",v)}async function U(w){var I;if(!w.hwid)return;const T=await ul(w.hwid);(I=window.showToast)==null||I.call(window,l(T?"device.copySuccess":"common.copyFailed"),T?"success":"error")}async function Y(w){var I;const T=await ul(w.uuid);(I=window.showToast)==null||I.call(window,l(T?"device.copyUuidSuccess":"common.copyFailed"),T?"success":"error")}function ee(w){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.unbindConfirm"),onConfirm:async()=>{var I,D;G(w.id);try{await ux(w.id),(I=window.showToast)==null||I.call(window,l("device.unbindSuccess"),"success"),await F(m,b,v)}catch(X){(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("device.unbindFailed"),"error")}finally{G(null)}}})}function fe(w){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.banConfirm"),onConfirm:async()=>{var I,D;G(w.id);try{await px(w.id),(I=window.showToast)==null||I.call(window,l("device.banSuccess"),"success"),await F(m,b,v)}catch(X){(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("device.banFailed"),"error")}finally{G(null)}}})}function S(w){var T;(T=window.showConfirm)==null||T.call(window,{message:l("device.resetConfirm",{user:w.user_email??`#${w.user_id}`}),onConfirm:async()=>{var I,D;A(w.user_id);try{await k1(w.user_id),(I=window.showToast)==null||I.call(window,l("device.resetSuccess"),"success"),await F(m,b,v)}catch(X){(D=window.showToast)==null||D.call(window,X instanceof Error?X.message:l("device.resetFailed"),"error")}finally{A(null)}}})}const L=Math.ceil(p/Dh);return t.jsxs(At,{title:l("device.title"),subtitle:l("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .device-table {
          min-width: 1480px;
        }
        .mobile-device-list {
          display: none;
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
          .mobile-device-actions {
            display: grid;
            grid-template-columns: 1fr;
            gap: 8px;
            padding-top: 10px;
            border-top: 1px solid var(--line);
          }
          .mobile-device-actions .mini-button {
            width: 100%;
            min-height: 38px;
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("device.heading")}),t.jsx("p",{children:l("device.total",{count:p})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:R,onClick:()=>void F(m,b,v),children:[t.jsx(zt,{size:16}),l(R?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:ie,children:[t.jsx("select",{className:"config-input filter-select",value:v,onChange:w=>y(w.target.value),children:vj.map(w=>t.jsx("option",{value:w,children:wj(w,l)},w))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Bo,{size:16}),t.jsx("input",{className:"config-input",value:b,onChange:w=>g(w.target.value),placeholder:l("device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ts,{size:16}),l("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:de,children:l("device.clear")})]}),W?t.jsx("div",{className:"form-error",children:W}):null,R&&r.length===0?t.jsx(dt,{label:l("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[r.map(w=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:w.user_email??"-"}),t.jsxs("small",{children:["ID: ",w.user_id," · ",w.plan_name??"-"]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Ah(w.status,l)}),t.jsxs("span",{className:`online-badge ${w.is_online?"online":"offline"}`,children:[w.is_online?t.jsx(lh,{size:14}):t.jsx(nh,{size:14}),w.is_online?l("device.online"):l("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.boundLimit")}),t.jsxs("span",{children:[w.user_device_count," / ",w.user_device_limit&&w.user_device_limit>0?w.user_device_limit:l("device.unlimited")]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:w.uuid,onClick:()=>Y(w),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:w.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.hwid")}),w.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:w.hwid,onClick:()=>U(w),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:w.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.ip")}),t.jsxs("span",{className:"mono",title:`${w.last_ip??"-"} / ${w.first_ip??"-"}`,children:[w.last_ip??"-",w.first_ip?` (${w.first_ip})`:""]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.connection")}),t.jsxs("small",{title:`${To(w)} · ${Eo(w)}`,children:[l("device.onlineIps"),": ",To(w)," · ",l("device.onlineNodes"),": ",Eo(w)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:l("device.lastSeen")}),t.jsx("span",{children:zo(w.last_seen_at)})]})]}),t.jsxs("div",{className:"mobile-device-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===w.id,onClick:()=>ee(w),children:[t.jsx(Ro,{size:14}),l("device.unbind")]}),w.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===w.id,onClick:()=>fe(w),children:[t.jsx(Bn,{size:14}),l("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:H===w.user_id,onClick:()=>S(w),children:[t.jsx(If,{size:14}),l("device.resetUser")]})]})]},w.id)),!R&&r.length===0?t.jsx("div",{className:"empty-state",children:l("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("device.user")}),t.jsx("th",{children:l("device.plan")}),t.jsx("th",{children:l("device.boundLimit")}),t.jsx("th",{children:l("device.status")}),t.jsx("th",{children:l("device.connection")}),t.jsx("th",{children:l("device.uuid")}),t.jsx("th",{children:l("device.hwid")}),t.jsx("th",{children:l("device.client")}),t.jsx("th",{children:l("device.ip")}),t.jsx("th",{children:l("device.firstSeen")}),t.jsx("th",{children:l("device.lastSeen")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(w=>t.jsxs("tr",{children:[t.jsxs("td",{children:[t.jsx("strong",{children:w.user_email??"-"}),t.jsxs("small",{children:["ID: ",w.user_id]})]}),t.jsxs("td",{children:[t.jsx("strong",{children:w.plan_name??"-"}),w.user_plan_id?t.jsxs("small",{children:["#",w.user_plan_id]}):null]}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[w.user_device_count," / ",w.user_device_limit&&w.user_device_limit>0?w.user_device_limit:l("device.unlimited")]})}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Ah(w.status,l)})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${w.is_online?"online":"offline"}`,children:[w.is_online?t.jsx(lh,{size:14}):t.jsx(nh,{size:14}),w.is_online?l("device.online"):l("device.offline")]}),t.jsxs("small",{title:To(w),children:[l("device.onlineIps"),": ",To(w)]}),t.jsxs("small",{title:Eo(w),children:[l("device.onlineNodes"),": ",Eo(w)]}),t.jsxs("small",{children:[l("device.lastOnline"),": ",zo(w.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-hwid",children:t.jsxs("button",{className:"copy-value",type:"button",title:w.uuid,onClick:()=>Y(w),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:w.uuid})]})}),t.jsx("td",{className:"device-hwid",children:w.hwid?t.jsxs("button",{className:"copy-value",type:"button",title:w.hwid,onClick:()=>U(w),children:[t.jsx(ba,{size:14}),t.jsx("span",{className:"mono",children:w.hwid})]}):"-"}),t.jsx("td",{className:"device-client",children:t.jsx("small",{title:w.user_agent??"",children:w.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:w.last_ip??"-"}),t.jsx("small",{children:w.first_ip?`${l("device.firstIp")}: ${w.first_ip}`:"-"})]}),t.jsx("td",{children:zo(w.first_seen_at)}),t.jsx("td",{children:zo(w.last_seen_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===w.id,onClick:()=>ee(w),children:[t.jsx(Ro,{size:14}),l("device.unbind")]}),w.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:k===w.id,onClick:()=>fe(w),children:[t.jsx(Bn,{size:14}),l("device.ban")]}):null,t.jsxs("button",{className:"mini-button",type:"button",disabled:H===w.user_id,onClick:()=>S(w),children:[t.jsx(If,{size:14}),l("device.resetUser")]})]})})]},w.id)),!R&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:12,children:t.jsx("div",{className:"empty-state",children:l("device.empty")})})}):null]})]})}),L>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:m<=1||R,onClick:()=>void F(m-1,b,v),children:[t.jsx(dn,{size:14}),l("device.previous")]}),t.jsx("span",{className:"page-info",children:l("device.page",{page:m,total:L})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:m>=L||R,onClick:()=>void F(m+1,b,v),children:[l("device.next"),t.jsx(un,{size:14})]})]}):null]})]})}const _j={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Rd(s){if(Array.isArray(s))return s.map(l=>Number(l)).filter(l=>Number.isFinite(l)&&l>0);if(typeof s=="string")try{return Rd(JSON.parse(s))}catch{return s.split(",").map(l=>Number(l.trim())).filter(l=>Number.isFinite(l)&&l>0)}return[]}function Oh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Rd(s.plan_id)}:{..._j}}function hd(s){const l=s.trim();if(!l)return"";try{return new URL(l.includes("://")?l:`https://${l}`).host.toLowerCase()}catch{return l.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function Sj(s){const l=Number(s);if(!l)return"-";const r=new Date(l*1e3);return Number.isNaN(r.getTime())?"-":r.toLocaleString()}function kj(s){return Number(s)===1}function Uh(s,l){if(!s.length)return"All plans";const r=new Map(l.map(d=>[Number(d.id),d.name]));return s.map(d=>r.get(d)??`#${d}`).join(", ")}function Ln(s,l=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,l?t.jsx("small",{children:"*"}):null]})}function Cj(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState([]),[m,j]=f.useState(null),[v,y]=f.useState(!0),[b,g]=f.useState(!1),[R,J]=f.useState(null),[W,P]=f.useState(""),k=f.useCallback(async()=>{y(!0),P("");try{const[U,Y]=await Promise.all([B1(),ml()]);d(U),h(Y)}catch(U){P(U instanceof Error?U.message:l("webcon.toastLoadFailed"))}finally{y(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}k()},[k,s]);const G=f.useMemo(()=>p.map(U=>({id:Number(U.id),name:U.name})),[p]);function H(U,Y){j(ee=>ee&&{...ee,[U]:Y})}function A(U,Y){j(ee=>{if(!ee)return ee;const fe=Y?Array.from(new Set([...ee.plan_ids,U])):ee.plan_ids.filter(S=>S!==U);return{...ee,plan_ids:fe}})}async function F(U){var ee,fe;if(U.preventDefault(),!m)return;const Y=hd(m.domain);g(!0),P("");try{await G1({id:m.id,email:m.email.trim(),domain:Y,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),j(null),(ee=window.showToast)==null||ee.call(window,l("webcon.toastSaveSuccess"),"success"),await k()}catch(S){const L=S instanceof Error?S.message:l("webcon.toastSaveFailed");P(L),(fe=window.showToast)==null||fe.call(window,L,"error")}finally{g(!1)}}async function ie(U){var Y,ee;J(U.id);try{await V1(U.id),(Y=window.showToast)==null||Y.call(window,l("webcon.toastToggleSuccess"),"success"),await k()}catch(fe){const S=fe instanceof Error?fe.message:l("webcon.toastToggleFailed");P(S),(ee=window.showToast)==null||ee.call(window,S,"error")}finally{J(null)}}function de(U){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:l("webcon.deleteConfirm"),onConfirm:async()=>{var ee,fe;J(U.id),P("");try{await Y1(U.id),(ee=window.showToast)==null||ee.call(window,l("webcon.toastDeleteSuccess"),"success"),await k()}catch(S){const L=S instanceof Error?S.message:l("webcon.toastDeleteFailed");P(L),(fe=window.showToast)==null||fe.call(window,L,"error")}finally{J(null)}}})}return t.jsxs(At,{title:l("webcon.title"),subtitle:l("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("webcon.heading")}),t.jsx("p",{children:l("webcon.sitesCount",{count:r.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void k(),children:[t.jsx(zt,{size:16}),l(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(Oh()),children:[t.jsx(ya,{size:16}),l("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:l("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:l("webcon.colActions")})]})}),t.jsxs("tbody",{children:[r.map(U=>{var ee;const Y=Rd(U.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",U.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${kj(U.status)?"active":""}`,type:"button",disabled:R===U.id,onClick:()=>void ie(U),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:U.email??"-"}),t.jsx("small",{children:Number(U.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:U.domain}),t.jsxs("small",{children:["/",String(((ee=window.settings)==null?void 0:ee.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:U.title||"-"}),t.jsx("small",{children:U.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(dv,{size:13}),U.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(ls,{size:13}),U.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Uh(Y,G)}),t.jsx("small",{children:Y.length?`${Y.length} selected`:"not restricted"})]})}),t.jsx("td",{children:Sj(U.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(Oh(U)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:R===U.id,onClick:()=>de(U),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},U.id)}),!v&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>j(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:U=>U.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?l("webcon.editTitle"):l("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":l("common.closeMenu"),onClick:()=>j(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:F,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Ln("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:U=>H("email",U.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Ln("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:U=>H("domain",U.target.value),onBlur:U=>H("domain",hd(U.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Ln("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:U=>H("title",U.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Ln("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:U=>H("description",U.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Ln("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:U=>H("logo",U.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Ln("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:U=>H("background_url",U.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Ln("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[G.map(U=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(U.id),onChange:Y=>A(U.id,Y.target.checked)}),t.jsx("span",{children:U.name})]},U.id)),G.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Ln("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:U=>H("custom_html",U.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(yv,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:hd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Od,{size:12})," ",Uh(m.plan_ids,G)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:b,children:[t.jsx(va,{size:16}),l(b?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Rh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function xd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function zj(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),[R,J]=f.useState(""),W=f.useCallback(async()=>{j(!0),g("");try{d(await z1())}catch(H){g(H instanceof Error?H.message:l("notice.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function P(H){var A,F;if(H.preventDefault(),!!p){y(!0),g(""),J("");try{const ie=p.tags?p.tags.split(",").map(de=>de.trim()).filter(Boolean):[];await T1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:ie.length?ie:null}),h(null),(A=window.showToast)==null||A.call(window,l("notice.saveSuccess"),"success"),await W()}catch(ie){(F=window.showToast)==null||F.call(window,ie instanceof Error?ie.message:l("notice.saveFailed"),"error")}finally{y(!1)}}}async function k(H){var A;try{await M1(H),await W()}catch(F){(A=window.showToast)==null||A.call(window,F instanceof Error?F.message:l("notice.toggleFailed"),"error")}}async function G(H){var A;(A=window.showConfirm)==null||A.call(window,{message:l("notice.deleteConfirm"),onConfirm:async()=>{var F,ie;try{await E1(H),(F=window.showToast)==null||F.call(window,l("notice.deleteSuccess"),"success"),await W()}catch(de){(ie=window.showToast)==null||ie.call(window,de instanceof Error?de.message:l("notice.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("notice.title"),subtitle:l("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("notice.heading")}),t.jsxs("p",{children:[r.length," ",l("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(xd()),children:[t.jsx(ya,{size:16}),l("notice.addNotice")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,R?t.jsx("div",{className:"form-success",children:R}):null,m&&r.length===0?t.jsx(dt,{label:l("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("notice.titleField")}),t.jsx("th",{children:l("notice.show")}),t.jsx("th",{children:l("notice.tags")}),t.jsx("th",{children:l("notice.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(H=>{var A;return t.jsxs("tr",{children:[t.jsx("td",{children:H.id}),t.jsx("td",{children:t.jsx("strong",{children:H.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void k(H.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((A=H.tags)==null?void 0:A.map((F,ie)=>t.jsx("span",{className:"tag",children:F},ie)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Rh(H.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(xd(H)),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(H.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},H.id)}),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:l("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[r.map(H=>t.jsxs("div",{className:`notice-mobile-card ${H.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",H.id]})}),t.jsx("button",{className:`admin-switch ${H.show?"active":""}`,type:"button",onClick:()=>void k(H.id),"aria-label":H.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:H.title}),t.jsx("div",{className:"notice-tags",children:H.tags&&H.tags.length>0?H.tags.map((A,F)=>t.jsx("span",{className:"tag-badge",children:A},F)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[l("notice.created"),": ",Rh(H.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(xd(H)),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void G(H.id),children:[t.jsx(Dt,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},H.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("notice.editNotice"):l("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:H=>h({...p,title:H.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:H=>h({...p,content:H.target.value}),placeholder:l("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:H=>h({...p,img_url:H.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:H=>h({...p,tags:H.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(va,{size:16}),l(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function gd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Hh=(s,l)=>({0:{label:l("ticket.statusOpen"),cls:"enabled"},1:{label:l("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},bd=(s,l)=>({0:l("ticket.levelLow"),1:l("ticket.levelMedium"),2:l("ticket.levelHigh")})[s]||String(s);function Tj(){var S;const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!1),[v,y]=f.useState(null),[b,g]=f.useState(""),[R,J]=f.useState(!0),[W,P]=f.useState(!1),[k,G]=f.useState(""),H=f.useRef(null),[A,F]=f.useState([]),[ie,de]=f.useState(null),U=f.useCallback(async()=>{J(!0),G("");try{d(await D1())}catch(L){G(L instanceof Error?L.message:"Load failed")}finally{J(!1)}},[]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}U(),ml().then(L=>{L&&F(L)}).catch(()=>{})},[U,s]),f.useEffect(()=>{var L;(L=H.current)==null||L.scrollIntoView({behavior:"smooth"})},[p]);async function Y(L){var w;y(L),g(""),h(null),de(null),j(!0);try{const T=await rh(L);if(h(T),T&&T.user_id)try{const I=await cx(T.user_id);I&&I.data&&de(I.data)}catch(I){console.error("Failed to load user info:",I)}}catch{(w=window.showToast)==null||w.call(window,"Failed to load message thread","error")}finally{j(!1)}}async function ee(L){var w,T;if(L.preventDefault(),!(!v||!b.trim())){P(!0),G("");try{await A1(v,b),g(""),(w=window.showToast)==null||w.call(window,"Reply sent!","success");try{const I=await rh(v);h(I)}catch{}await U()}catch(I){(T=window.showToast)==null||T.call(window,I instanceof Error?I.message:"Reply failed","error")}finally{P(!1)}}}async function fe(L){var w;(w=window.showConfirm)==null||w.call(window,{message:"Close this ticket?",onConfirm:async()=>{var T,I;G("");try{await O1(L),(T=window.showToast)==null||T.call(window,"Ticket closed!","success"),v===L&&(y(null),h(null)),await U()}catch(D){G(D instanceof Error?D.message:"Close failed"),(I=window.showToast)==null||I.call(window,D instanceof Error?D.message:"Close failed","error")}}})}return t.jsxs(At,{title:l("ticket.title"),subtitle:l("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("ticket.heading")}),t.jsxs("p",{children:[r.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:R,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),k?t.jsx("div",{className:"form-error",children:k}):null,R&&r.length===0?t.jsx(dt,{label:l("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("ticket.id")}),t.jsx("th",{children:l("ticket.subject")}),t.jsx("th",{children:l("ticket.user")}),t.jsx("th",{children:l("ticket.level")}),t.jsx("th",{children:l("ticket.status")}),t.jsx("th",{children:l("ticket.replyStatus")}),t.jsx("th",{children:l("ticket.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(L=>{const w=Hh(L.status,l);return t.jsxs("tr",{children:[t.jsx("td",{children:L.id}),t.jsx("td",{children:t.jsx("strong",{children:L.subject})}),t.jsxs("td",{children:["#",L.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:bd(L.level,l)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${w.cls}`,children:w.label})}),t.jsx("td",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:gd(L.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(Fi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(L.id),children:[t.jsx(Nd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(Fi,{size:14}),l("ticket.viewHistory")]})})})]},L.id)}),!R&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[r.map(L=>{const w=Hh(L.status,l);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:L.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:bd(L.level,l)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.id"),": ",t.jsxs("strong",{children:["#",L.id]})]}),t.jsx("span",{className:`status-pill ${w.cls}`,children:w.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[l("ticket.user"),": ",t.jsxs("strong",{children:["#",L.user_id]})]}),t.jsx("span",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:l("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:l("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[l("ticket.created"),": ",t.jsx("small",{children:gd(L.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(Fi,{size:14}),l("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void fe(L.id),children:[t.jsx(Nd,{size:14}),l("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(Fi,{size:14}),l("ticket.viewHistory")]})})]},L.id)}),!R&&r.length===0?t.jsx("div",{className:"empty-state",children:l("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${l("ticket.ticketDetail")}: ${p.subject}`:`${l("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[l("ticket.user"),": #",p==null?void 0:p.user_id," | ",l("ticket.level"),": ",p!=null?bd(p.level,l):l("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{y(null),h(null)},children:t.jsx(tt,{size:18})})]}),ie&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("common.email")}),t.jsx("span",{className:"details-value",title:ie.email,children:ie.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((S=A.find(L=>L.id===ie.plan_id))==null?void 0:S.name)||l("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[$t(ie.balance)," ",l("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:l("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:ie.expired_at?new Date(ie.expired_at*1e3).toLocaleDateString("vi-VN"):l("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(dt,{label:l("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(L=>{const w=L.is_me;return t.jsxs("div",{className:`chat-message ${w?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:L.message}),t.jsxs("div",{className:"chat-meta",children:[w?l("ticket.staff"):`${l("ticket.user")} #${L.user_id}`," • ",gd(L.created_at)]})]},L.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:l("ticket.noLogs")}),t.jsx("div",{ref:H})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ee,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:l("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:b,onChange:L=>g(L.target.value),placeholder:l("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!b.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(tx,{size:14}),W?"":l("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:l("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Lh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const qh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Bh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function Ej(){const s=wt(),{t:l}=He(),[r,d]=f.useState([]),[p,h]=f.useState(null),[m,j]=f.useState(!0),[v,y]=f.useState(!1),[b,g]=f.useState(""),[R,J]=f.useState(""),W=f.useCallback(async()=>{j(!0),g("");try{d(await U1())}catch(A){g(A instanceof Error?A.message:l("knowledge.loadFailed"))}finally{j(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);async function P(A){var F;try{const ie=await R1(A.id);h(Bh(ie))}catch(ie){(F=window.showToast)==null||F.call(window,ie instanceof Error?ie.message:l("knowledge.detailFailed"),"error")}}async function k(A){var F,ie;if(A.preventDefault(),!!p){y(!0),g(""),J("");try{await H1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(F=window.showToast)==null||F.call(window,l("knowledge.saveSuccess"),"success"),await W()}catch(de){(ie=window.showToast)==null||ie.call(window,de instanceof Error?de.message:l("knowledge.saveFailed"),"error")}finally{y(!1)}}}async function G(A){var F;try{await q1(A),await W()}catch(ie){(F=window.showToast)==null||F.call(window,ie instanceof Error?ie.message:l("knowledge.toggleFailed"),"error")}}async function H(A){var F;(F=window.showConfirm)==null||F.call(window,{message:l("knowledge.deleteConfirm"),onConfirm:async()=>{var ie,de;try{await L1(A),(ie=window.showToast)==null||ie.call(window,l("knowledge.deleteSuccess"),"success"),await W()}catch(U){(de=window.showToast)==null||de.call(window,U instanceof Error?U.message:l("knowledge.deleteFailed"),"error")}}})}return t.jsxs(At,{title:l("knowledge.title"),subtitle:l("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("knowledge.heading")}),t.jsxs("p",{children:[r.length," ",l("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),l("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Bh()),children:[t.jsx(ya,{size:16}),l("knowledge.addArticle")]})]})]}),b?t.jsx("div",{className:"form-error",children:b}):null,R?t.jsx("div",{className:"form-success",children:R}):null,m&&r.length===0?t.jsx(dt,{label:l("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:l("common.id")}),t.jsx("th",{children:l("knowledge.category")}),t.jsx("th",{children:l("knowledge.titleField")}),t.jsx("th",{children:l("knowledge.language")}),t.jsx("th",{children:l("knowledge.show")}),t.jsx("th",{children:l("knowledge.sort")}),t.jsx("th",{children:l("knowledge.created")}),t.jsx("th",{children:l("common.actions")})]})}),t.jsxs("tbody",{children:[r.map(A=>t.jsxs("tr",{children:[t.jsx("td",{children:A.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:A.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:A.title})}),t.jsx("td",{children:A.language&&qh[A.language]||A.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void G(A.id),"aria-label":l("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:A.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Lh(A.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void P(A),children:[t.jsx(Ct,{size:14}),l("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void H(A.id),children:[t.jsx(Dt,{size:14}),l("common.delete")]})]})})]},A.id)),!m&&r.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[r.map(A=>t.jsxs("div",{className:`knowledge-mobile-card ${A.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",A.id]}),A.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",A.sort]})]}),t.jsx("button",{className:`admin-switch ${A.show?"active":""}`,type:"button",onClick:()=>void G(A.id),"aria-label":A.show?l("common.enabled"):l("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:A.title}),t.jsxs("div",{className:"card-meta",children:[A.category&&t.jsx("span",{className:"category-badge",children:A.category}),A.language&&t.jsx("span",{className:"lang-badge",children:qh[A.language]||A.language})]}),t.jsxs("p",{className:"created-time",children:[l("knowledge.created"),": ",Lh(A.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void P(A),children:[t.jsx(Ct,{size:13}),t.jsx("span",{children:l("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void H(A.id),children:[t.jsx(Dt,{size:13}),t.jsx("span",{children:l("common.delete")})]})]})]},A.id)),!m&&r.length===0?t.jsx("div",{className:"empty-state",children:l("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?l("knowledge.editArticle"):l("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(tt,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:k,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:A=>h({...p,category:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:A=>h({...p,title:A.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:A=>h({...p,body:A.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:A=>h({...p,language:A.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:l("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:l("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:l("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:l("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:l("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:l("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:l("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:l("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:A=>h({...p,sort:A.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:l("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(va,{size:16}),l(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function Mj(){const s=wt(),{t:l}=He(),[r,d]=f.useState(null),[p,h]=f.useState(null),[m,j]=f.useState(null),[v,y]=f.useState(""),[b,g]=f.useState(!0),[R,J]=f.useState(""),W=f.useCallback(async()=>{g(!0),J("");try{const[k,G,H,A]=await Promise.all([$1().catch(()=>({data:{}})),Q1().catch(()=>({data:{}})),X1().catch(()=>({data:[]})),Z1().catch(()=>({data:""}))]);d(k.data),h(G.data),j(H.data),y(typeof A.data=="string"?A.data:"")}catch(k){J(k instanceof Error?k.message:l("queue.toastLoadFailed"))}finally{g(!1)}},[l]);f.useEffect(()=>{if(!Tt()){s.replace("/login");return}W()},[W,s]);function P(k,G,H){return k?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[H," ",G]}),t.jsx("div",{className:"queue-grid",children:Object.entries(k).map(([A,F])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:A}),t.jsx("strong",{children:typeof F=="object"?JSON.stringify(F):String(F??"—")})]},A))})]}):null}return t.jsxs(At,{title:l("queue.title"),subtitle:l("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:l("queue.heading")}),t.jsx("p",{children:l("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:b,children:[t.jsx(zt,{size:16}),l("common.refresh")]})})]}),R?t.jsx("div",{className:"form-error",children:R}):null,b?t.jsx(dt,{label:l("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[P(r,l("queue.systemStatus"),t.jsx(Uo,{size:18})),P(p,l("queue.queueStats"),t.jsx(Od,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(Py,{size:18})," ",l("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(sv,{size:18})," ",l("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const Dj=f.createContext(null);function Aj({children:s}){const[l,r]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((y,b="success")=>{const g=Math.random().toString(36).substring(2,9);r(R=>[...R,{id:g,message:y,type:b}]),setTimeout(()=>{r(R=>R.filter(J=>J.id!==g))},5e3)},[]),m=f.useCallback(y=>{p(y)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const j=async()=>{if(d){try{await d.onConfirm()}catch(y){console.error("Error in onConfirm:",y)}p(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(Dj.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:l.map(y=>{let b=uv;return y.type==="success"&&(b=Ih),y.type==="error"&&(b=av),y.type==="warning"&&(b=ah),t.jsxs("div",{className:`toast-card toast-${y.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(b,{size:18})}),t.jsx("div",{className:"toast-message",children:y.message}),t.jsx("button",{className:"toast-close",onClick:()=>r(g=>g.filter(R=>R.id!==y.id)),children:t.jsx(tt,{size:14})})]},y.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(ah,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:j,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Oj({children:s}){return t.jsx(n0,{children:t.jsx(Aj,{children:s})})}function Uj(){return t.jsx(Oj,{children:t.jsxs(Uy,{children:[t.jsx(mt,{path:"/login",element:t.jsx(l0,{})}),t.jsx(mt,{path:"/dashboard",element:t.jsx(p0,{})}),t.jsx(mt,{path:"/config/system",element:t.jsx(v0,{})}),t.jsx(mt,{path:"/config/payment",element:t.jsx(N0,{})}),t.jsx(mt,{path:"/config/theme",element:t.jsx(k0,{})}),t.jsx(mt,{path:"/server/manage",element:t.jsx(Q0,{})}),t.jsx(mt,{path:"/server/group",element:t.jsx(X0,{})}),t.jsx(mt,{path:"/server/route",element:t.jsx(J0,{})}),t.jsx(mt,{path:"/plan",element:t.jsx(I0,{})}),t.jsx(mt,{path:"/order",element:t.jsx(aj,{})}),t.jsx(mt,{path:"/coupon",element:t.jsx(nj,{})}),t.jsx(mt,{path:"/giftcard",element:t.jsx(ij,{})}),t.jsx(mt,{path:"/user",element:t.jsx(pj,{})}),t.jsx(mt,{path:"/subscription",element:t.jsx(yj,{})}),t.jsx(mt,{path:"/device",element:t.jsx(Nj,{})}),t.jsx(mt,{path:"/webcon",element:t.jsx(Cj,{})}),t.jsx(mt,{path:"/notice",element:t.jsx(zj,{})}),t.jsx(mt,{path:"/ticket",element:t.jsx(Tj,{})}),t.jsx(mt,{path:"/knowledge",element:t.jsx(Ej,{})}),t.jsx(mt,{path:"/queue",element:t.jsx(Mj,{})}),t.jsx(mt,{path:"/",element:t.jsx($f,{to:"/dashboard",replace:!0})}),t.jsx(mt,{path:"*",element:t.jsx($f,{to:"/dashboard",replace:!0})})]})})}Vb.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(Yy,{children:t.jsx(Uj,{})})}));
