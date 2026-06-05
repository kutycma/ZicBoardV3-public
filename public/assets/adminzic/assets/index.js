function $b(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=o(p);fetch(p.href,h)}})();function Qb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var td={exports:{}},es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hf;function Xb(){if(Hf)return es;Hf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var S in p)S!=="key"&&(h[S]=p[S])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return es.Fragment=i,es.jsx=o,es.jsxs=o,es}var Lf;function Zb(){return Lf||(Lf=1,td.exports=Xb()),td.exports}var t=Zb(),nd={exports:{}},He={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qf;function Kb(){if(qf)return He;qf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),T=Symbol.iterator;function $(N){return N===null||typeof N!="object"?null:(N=T&&N[T]||N["@@iterator"],typeof N=="function"?N:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,z={};function G(N,E,re){this.props=N,this.context=E,this.refs=z,this.updater=re||W}G.prototype.isReactComponent={},G.prototype.setState=function(N,E){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,E,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=G.prototype;function U(N,E,re){this.props=N,this.context=E,this.refs=z,this.updater=re||W}var I=U.prototype=new R;I.constructor=U,K(I,G.prototype),I.isPureReactComponent=!0;var ie=Array.isArray;function oe(){}var D={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function te(N,E,re){var me=re.ref;return{$$typeof:s,type:N,key:E,ref:me!==void 0?me:null,props:re}}function he(N,E){return te(N.type,E,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function L(N){var E={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(re){return E[re]})}var ee=/\/+/g;function A(N,E){return typeof N=="object"&&N!==null&&N.key!=null?L(""+N.key):E.toString(36)}function ae(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(oe,oe):(N.status="pending",N.then(function(E){N.status==="pending"&&(N.status="fulfilled",N.value=E)},function(E){N.status==="pending"&&(N.status="rejected",N.reason=E)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function H(N,E,re,me,we){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var De=!1;if(N===null)De=!0;else switch(Se){case"bigint":case"string":case"number":De=!0;break;case"object":switch(N.$$typeof){case s:case i:De=!0;break;case y:return De=N._init,H(De(N._payload),E,re,me,we)}}if(De)return we=we(N),De=me===""?"."+A(N,0):me,ie(we)?(re="",De!=null&&(re=De.replace(ee,"$&/")+"/"),H(we,E,re,"",function(Pe){return Pe})):we!=null&&(w(we)&&(we=he(we,re+(we.key==null||N&&N.key===we.key?"":(""+we.key).replace(ee,"$&/")+"/")+De)),E.push(we)),1;De=0;var ot=me===""?".":me+":";if(ie(N))for(var qe=0;qe<N.length;qe++)me=N[qe],Se=ot+A(me,qe),De+=H(me,E,re,Se,we);else if(qe=$(N),typeof qe=="function")for(N=qe.call(N),qe=0;!(me=N.next()).done;)me=me.value,Se=ot+A(me,qe++),De+=H(me,E,re,Se,we);else if(Se==="object"){if(typeof N.then=="function")return H(ae(N),E,re,me,we);throw E=String(N),Error("Objects are not valid as a React child (found: "+(E==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":E)+"). If you meant to render a collection of children, use an array instead.")}return De}function F(N,E,re){if(N==null)return N;var me=[],we=0;return H(N,me,"","",function(Se){return E.call(re,Se,we++)}),me}function k(N){if(N._status===-1){var E=N._result;E=E(),E.then(function(re){(N._status===0||N._status===-1)&&(N._status=1,N._result=re)},function(re){(N._status===0||N._status===-1)&&(N._status=2,N._result=re)}),N._status===-1&&(N._status=0,N._result=E)}if(N._status===1)return N._result.default;throw N._result}var ce=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var E=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(E))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_={map:F,forEach:function(N,E,re){F(N,function(){E.apply(this,arguments)},re)},count:function(N){var E=0;return F(N,function(){E++}),E},toArray:function(N){return F(N,function(E){return E})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return He.Activity=j,He.Children=_,He.Component=G,He.Fragment=o,He.Profiler=p,He.PureComponent=U,He.StrictMode=d,He.Suspense=v,He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,He.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},He.cache=function(N){return function(){return N.apply(null,arguments)}},He.cacheSignal=function(){return null},He.cloneElement=function(N,E,re){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var me=K({},N.props),we=N.key;if(E!=null)for(Se in E.key!==void 0&&(we=""+E.key),E)!Q.call(E,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&E.ref===void 0||(me[Se]=E[Se]);var Se=arguments.length-2;if(Se===1)me.children=re;else if(1<Se){for(var De=Array(Se),ot=0;ot<Se;ot++)De[ot]=arguments[ot+2];me.children=De}return te(N.type,we,me)},He.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:h,_context:N},N},He.createElement=function(N,E,re){var me,we={},Se=null;if(E!=null)for(me in E.key!==void 0&&(Se=""+E.key),E)Q.call(E,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(we[me]=E[me]);var De=arguments.length-2;if(De===1)we.children=re;else if(1<De){for(var ot=Array(De),qe=0;qe<De;qe++)ot[qe]=arguments[qe+2];we.children=ot}if(N&&N.defaultProps)for(me in De=N.defaultProps,De)we[me]===void 0&&(we[me]=De[me]);return te(N,Se,we)},He.createRef=function(){return{current:null}},He.forwardRef=function(N){return{$$typeof:S,render:N}},He.isValidElement=w,He.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:k}},He.memo=function(N,E){return{$$typeof:x,type:N,compare:E===void 0?null:E}},He.startTransition=function(N){var E=D.T,re={};D.T=re;try{var me=N(),we=D.S;we!==null&&we(re,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(oe,ce)}catch(Se){ce(Se)}finally{E!==null&&re.types!==null&&(E.types=re.types),D.T=E}},He.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},He.use=function(N){return D.H.use(N)},He.useActionState=function(N,E,re){return D.H.useActionState(N,E,re)},He.useCallback=function(N,E){return D.H.useCallback(N,E)},He.useContext=function(N){return D.H.useContext(N)},He.useDebugValue=function(){},He.useDeferredValue=function(N,E){return D.H.useDeferredValue(N,E)},He.useEffect=function(N,E){return D.H.useEffect(N,E)},He.useEffectEvent=function(N){return D.H.useEffectEvent(N)},He.useId=function(){return D.H.useId()},He.useImperativeHandle=function(N,E,re){return D.H.useImperativeHandle(N,E,re)},He.useInsertionEffect=function(N,E){return D.H.useInsertionEffect(N,E)},He.useLayoutEffect=function(N,E){return D.H.useLayoutEffect(N,E)},He.useMemo=function(N,E){return D.H.useMemo(N,E)},He.useOptimistic=function(N,E){return D.H.useOptimistic(N,E)},He.useReducer=function(N,E,re){return D.H.useReducer(N,E,re)},He.useRef=function(N){return D.H.useRef(N)},He.useState=function(N){return D.H.useState(N)},He.useSyncExternalStore=function(N,E,re){return D.H.useSyncExternalStore(N,E,re)},He.useTransition=function(){return D.H.useTransition()},He.version="19.2.6",He}var Bf;function Hd(){return Bf||(Bf=1,nd.exports=Kb()),nd.exports}var f=Hd();const Vb=Qb(f),Jb=$b({__proto__:null,default:Vb},[f]);var ad={exports:{}},ts={},ld={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gf;function Fb(){return Gf||(Gf=1,(function(s){function i(H,F){var k=H.length;H.push(F);e:for(;0<k;){var ce=k-1>>>1,_=H[ce];if(0<p(_,F))H[ce]=F,H[k]=_,k=ce;else break e}}function o(H){return H.length===0?null:H[0]}function d(H){if(H.length===0)return null;var F=H[0],k=H.pop();if(k!==F){H[0]=k;e:for(var ce=0,_=H.length,N=_>>>1;ce<N;){var E=2*(ce+1)-1,re=H[E],me=E+1,we=H[me];if(0>p(re,k))me<_&&0>p(we,re)?(H[ce]=we,H[me]=k,ce=me):(H[ce]=re,H[E]=k,ce=E);else if(me<_&&0>p(we,k))H[ce]=we,H[me]=k,ce=me;else break e}}return F}function p(H,F){var k=H.sortIndex-F.sortIndex;return k!==0?k:H.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,S=m.now();s.unstable_now=function(){return m.now()-S}}var v=[],x=[],y=1,j=null,T=3,$=!1,W=!1,K=!1,z=!1,G=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(H){for(var F=o(x);F!==null;){if(F.callback===null)d(x);else if(F.startTime<=H)d(x),F.sortIndex=F.expirationTime,i(v,F);else break;F=o(x)}}function ie(H){if(K=!1,I(H),!W)if(o(v)!==null)W=!0,oe||(oe=!0,L());else{var F=o(x);F!==null&&ae(ie,F.startTime-H)}}var oe=!1,D=-1,Q=5,te=-1;function he(){return z?!0:!(s.unstable_now()-te<Q)}function w(){if(z=!1,oe){var H=s.unstable_now();te=H;var F=!0;try{e:{W=!1,K&&(K=!1,R(D),D=-1),$=!0;var k=T;try{t:{for(I(H),j=o(v);j!==null&&!(j.expirationTime>H&&he());){var ce=j.callback;if(typeof ce=="function"){j.callback=null,T=j.priorityLevel;var _=ce(j.expirationTime<=H);if(H=s.unstable_now(),typeof _=="function"){j.callback=_,I(H),F=!0;break t}j===o(v)&&d(v),I(H)}else d(v);j=o(v)}if(j!==null)F=!0;else{var N=o(x);N!==null&&ae(ie,N.startTime-H),F=!1}}break e}finally{j=null,T=k,$=!1}F=void 0}}finally{F?L():oe=!1}}}var L;if(typeof U=="function")L=function(){U(w)};else if(typeof MessageChannel<"u"){var ee=new MessageChannel,A=ee.port2;ee.port1.onmessage=w,L=function(){A.postMessage(null)}}else L=function(){G(w,0)};function ae(H,F){D=G(function(){H(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return T},s.unstable_next=function(H){switch(T){case 1:case 2:case 3:var F=3;break;default:F=T}var k=T;T=F;try{return H()}finally{T=k}},s.unstable_requestPaint=function(){z=!0},s.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var k=T;T=H;try{return F()}finally{T=k}},s.unstable_scheduleCallback=function(H,F,k){var ce=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?ce+k:ce):k=ce,H){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=k+_,H={id:y++,callback:F,priorityLevel:H,startTime:k,expirationTime:_,sortIndex:-1},k>ce?(H.sortIndex=k,i(x,H),o(v)===null&&H===o(x)&&(K?(R(D),D=-1):K=!0,ae(ie,k-ce))):(H.sortIndex=_,i(v,H),W||$||(W=!0,oe||(oe=!0,L()))),H},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(H){var F=T;return function(){var k=T;T=F;try{return H.apply(this,arguments)}finally{T=k}}}})(id)),id}var Yf;function Wb(){return Yf||(Yf=1,ld.exports=Fb()),ld.exports}var sd={exports:{}},en={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function Pb(){if($f)return en;$f=1;var s=Hd();function i(v){var x="https://react.dev/errors/"+v;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(v,x,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:j==null?null:""+j,children:v,containerInfo:x,implementation:y}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(v,x){if(v==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,en.createPortal=function(v,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return h(v,x,null,y)},en.flushSync=function(v){var x=m.T,y=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=x,d.p=y,d.d.f()}},en.preconnect=function(v,x){typeof v=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(v,x))},en.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},en.preinit=function(v,x){if(typeof v=="string"&&x&&typeof x.as=="string"){var y=x.as,j=S(y,x.crossOrigin),T=typeof x.integrity=="string"?x.integrity:void 0,$=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?d.d.S(v,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:j,integrity:T,fetchPriority:$}):y==="script"&&d.d.X(v,{crossOrigin:j,integrity:T,fetchPriority:$,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},en.preinitModule=function(v,x){if(typeof v=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=S(x.as,x.crossOrigin);d.d.M(v,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(v)},en.preload=function(v,x){if(typeof v=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,j=S(y,x.crossOrigin);d.d.L(v,y,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},en.preloadModule=function(v,x){if(typeof v=="string")if(x){var y=S(x.as,x.crossOrigin);d.d.m(v,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(v)},en.requestFormReset=function(v){d.d.r(v)},en.unstable_batchedUpdates=function(v,x){return v(x)},en.useFormState=function(v,x,y){return m.H.useFormState(v,x,y)},en.useFormStatus=function(){return m.H.useHostTransitionStatus()},en.version="19.2.6",en}var Qf;function Fh(){if(Qf)return sd.exports;Qf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),sd.exports=Pb(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xf;function Ib(){if(Xf)return ts;Xf=1;var s=Wb(),i=Hd(),o=Fh();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function x(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return v(r),e;if(c===l)return v(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var u=!1,g=r.child;g;){if(g===a){u=!0,a=r,l=c;break}if(g===l){u=!0,l=r,a=c;break}g=g.sibling}if(!u){for(g=c.child;g;){if(g===a){u=!0,a=c,l=r;break}if(g===l){u=!0,l=c,a=r;break}g=g.sibling}if(!u)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var j=Object.assign,T=Symbol.for("react.element"),$=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),te=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var ee=Symbol.for("react.client.reference");function A(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ee?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case G:return"Profiler";case z:return"StrictMode";case ie:return"Suspense";case oe:return"SuspenseList";case te:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case U:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:A(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return A(e(n))}catch{}}return null}var ae=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},ce=[],_=-1;function N(e){return{current:e}}function E(e){0>_||(e.current=ce[_],ce[_]=null,_--)}function re(e,n){_++,ce[_]=e.current,e.current=n}var me=N(null),we=N(null),Se=N(null),De=N(null);function ot(e,n){switch(re(Se,n),re(we,e),re(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?sf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=sf(n),e=of(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}E(me),re(me,e)}function qe(){E(me),E(we),E(Se)}function Pe(e){e.memoizedState!==null&&re(De,e);var n=me.current,a=of(n,e.type);n!==a&&(re(we,e),re(me,a))}function Nt(e){we.current===e&&(E(me),E(we)),De.current===e&&(E(De),Fi._currentValue=k)}var St,It;function gt(e){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",It=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+e+It}var Qt=!1;function Ot(e,n){if(!e||Qt)return"";Qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(J){var V=J}Reflect.construct(e,[],le)}else{try{le.call()}catch(J){V=J}e.call(le.prototype)}}else{try{throw Error()}catch(J){V=J}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(J){if(J&&V&&typeof J.stack=="string")return[J.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),u=c[0],g=c[1];if(u&&g){var C=u.split(`
`),Z=g.split(`
`);for(r=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===C.length||r===Z.length)for(l=C.length-1,r=Z.length-1;1<=l&&0<=r&&C[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(C[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||C[l]!==Z[r]){var P=`
`+C[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=r);break}}}finally{Qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function nn(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return gt("Activity");default:return""}}function ge(e){try{var n="",a=null;do n+=nn(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Oe=Object.prototype.hasOwnProperty,Bt=s.unstable_scheduleCallback,jt=s.unstable_cancelCallback,pn=s.unstable_shouldYield,M=s.unstable_requestPaint,ye=s.unstable_now,Be=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,rt=s.unstable_UserBlockingPriority,Y=s.unstable_NormalPriority,Ne=s.unstable_LowPriority,_e=s.unstable_IdlePriority,Ee=s.log,Ie=s.unstable_setDisableYieldValue,Ke=null,Ye=null;function Ae(e){if(typeof Ee=="function"&&Ie(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ke,e)}catch{}}var mt=Math.clz32?Math.clz32:Wa,ri=Math.log,vl=Math.LN2;function Wa(e){return e>>>=0,e===0?32:31-(ri(e)/vl|0)|0}var Gn=256,mn=262144,Yn=4194304;function ln(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function q(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?r=ln(l):(u&=g,u!==0?r=ln(u):a||(a=g&~e,a!==0&&(r=ln(a))))):(g=l&~c,g!==0?r=ln(g):u!==0?r=ln(u):a||(a=l&~e,a!==0&&(r=ln(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function de(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Re(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function Ve(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function et(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ft(e,n,a,l,r,c){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,C=e.expirationTimes,Z=e.hiddenUpdates;for(a=u&~a;0<a;){var P=31-mt(a),le=1<<P;g[P]=0,C[P]=-1;var V=Z[P];if(V!==null)for(Z[P]=null,P=0;P<V.length;P++){var J=V[P];J!==null&&(J.lane&=-536870913)}a&=~le}l!==0&&ct(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~n))}function ct(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-mt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ue(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-mt(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function Hn(e,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(e.suspendedLanes|n))!==0?0:a}function ci(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fs(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Ef(e.type))}function b(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var pe=Math.random().toString(36).slice(2),ue="__reactFiber$"+pe,Ce="__reactProps$"+pe,xt="__reactContainer$"+pe,$n="__reactEvents$"+pe,Qn="__reactListeners$"+pe,Zo="__reactHandles$"+pe,di="__reactResources$"+pe,ui="__reactMarker$"+pe;function Ko(e){delete e[ue],delete e[Ce],delete e[$n],delete e[Qn],delete e[Zo]}function jl(e){var n=e[ue];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xt]||a[ue]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=ff(e);e!==null;){if(a=e[ue])return a;e=ff(e)}return n}e=a,a=e.parentNode}return null}function wl(e){if(e=e[ue]||e[xt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function pi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function _l(e){var n=e[di];return n||(n=e[di]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xt(e){e[ui]=!0}var Kd=new Set,Vd={};function Pa(e,n){Nl(e,n),Nl(e+"Capture",n)}function Nl(e,n){for(Vd[e]=n,e=0;e<n.length;e++)Kd.add(n[e])}var Ox=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Jd={},Fd={};function Ux(e){return Oe.call(Fd,e)?!0:Oe.call(Jd,e)?!1:Ox.test(e)?Fd[e]=!0:(Jd[e]=!0,!1)}function hs(e,n,a){if(Ux(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function xs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Wd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rx(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(u){a=""+u,c.call(this,u)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vo(e){if(!e._valueTracker){var n=Wd(e)?"checked":"value";e._valueTracker=Rx(e,n,""+e[n])}}function Pd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=Wd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hx=/[\n"\\]/g;function Cn(e){return e.replace(Hx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jo(e,n,a,l,r,c,u,g){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kn(n)):e.value!==""+kn(n)&&(e.value=""+kn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?Fo(e,u,kn(n)):a!=null?Fo(e,u,kn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+kn(g):e.removeAttribute("name")}function Id(e,n,a,l,r,c,u,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vo(e);return}a=a!=null?""+kn(a):"",n=n!=null?""+kn(n):a,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Vo(e)}function Fo(e,n,a){n==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sl(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+kn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function eu(e,n,a){if(n!=null&&(n=""+kn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+kn(a):""}function tu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(ae(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=kn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Vo(e)}function kl(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function nu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Lx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function au(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&nu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&nu(e,c,n[c])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function In(){}var Po=null;function Io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,zl=null;function lu(e){var n=wl(e);if(n&&(e=n.stateNode)){var a=e[Ce]||null;e:switch(e=n.stateNode,n.type){case"input":if(Jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[Ce]||null;if(!r)throw Error(d(90));Jo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&Pd(l)}break e;case"textarea":eu(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sl(e,!!a.multiple,n,!1)}}}var er=!1;function iu(e,n,a){if(er)return e(n,a);er=!0;try{var l=e(n);return l}finally{if(er=!1,(Cl!==null||zl!==null)&&(io(),Cl&&(n=Cl,e=zl,zl=Cl=null,lu(n),e)))for(n=0;n<e.length;n++)lu(e[n])}}function mi(e,n){var a=e.stateNode;if(a===null)return null;var l=a[Ce]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tr=!1;if(ea)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){tr=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{tr=!1}var ya=null,nr=null,ys=null;function su(){if(ys)return ys;var e,n=nr,a=n.length,l,r="value"in ya?ya.value:ya.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var u=a-e;for(l=1;l<=u&&n[a-l]===r[c-l];l++);return ys=r.slice(e,1<l?1-l:void 0)}function vs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function ou(){return!1}function sn(e){function n(a,l,r,c,u){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?js:ou,this.isPropagationStopped=ou,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=sn(Ia),hi=j({},Ia,{view:0,detail:0}),Gx=sn(hi),ar,lr,xi,_s=j({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(ar=e.screenX-xi.screenX,lr=e.screenY-xi.screenY):lr=ar=0,xi=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),ru=sn(_s),Yx=j({},_s,{dataTransfer:0}),$x=sn(Yx),Qx=j({},hi,{relatedTarget:0}),ir=sn(Qx),Xx=j({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=sn(Xx),Kx=j({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=sn(Kx),Jx=j({},Ia,{data:0}),cu=sn(Jx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function sr(){return Ix}var eg=j({},hi,{key:function(e){if(e.key){var n=Fx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=sn(eg),ng=j({},_s,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),du=sn(ng),ag=j({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),lg=sn(ag),ig=j({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=sn(ig),og=j({},_s,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=sn(og),cg=j({},Ia,{newState:0,oldState:0}),dg=sn(cg),ug=[9,13,27,32],or=ea&&"CompositionEvent"in window,gi=null;ea&&"documentMode"in document&&(gi=document.documentMode);var pg=ea&&"TextEvent"in window&&!gi,uu=ea&&(!or||gi&&8<gi&&11>=gi),pu=" ",mu=!1;function fu(e,n){switch(e){case"keyup":return ug.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function hu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tl=!1;function mg(e,n){switch(e){case"compositionend":return hu(n);case"keypress":return n.which!==32?null:(mu=!0,pu);case"textInput":return e=n.data,e===pu&&mu?null:e;default:return null}}function fg(e,n){if(Tl)return e==="compositionend"||!or&&fu(e,n)?(e=su(),ys=nr=ya=null,Tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return uu&&n.locale!=="ko"?null:n.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hg[e.type]:n==="textarea"}function gu(e,n,a,l){Cl?zl?zl.push(l):zl=[l]:Cl=l,n=mo(n,"onChange"),0<n.length&&(a=new ws("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var bi=null,yi=null;function xg(e){Im(e,0)}function Ns(e){var n=pi(e);if(Pd(n))return e}function bu(e,n){if(e==="change")return n}var yu=!1;if(ea){var rr;if(ea){var cr="oninput"in document;if(!cr){var vu=document.createElement("div");vu.setAttribute("oninput","return;"),cr=typeof vu.oninput=="function"}rr=cr}else rr=!1;yu=rr&&(!document.documentMode||9<document.documentMode)}function ju(){bi&&(bi.detachEvent("onpropertychange",wu),yi=bi=null)}function wu(e){if(e.propertyName==="value"&&Ns(yi)){var n=[];gu(n,yi,e,Io(e)),iu(xg,n)}}function gg(e,n,a){e==="focusin"?(ju(),bi=n,yi=a,bi.attachEvent("onpropertychange",wu)):e==="focusout"&&ju()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ns(yi)}function yg(e,n){if(e==="click")return Ns(n)}function vg(e,n){if(e==="input"||e==="change")return Ns(n)}function jg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:jg;function vi(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Oe.call(n,r)||!fn(e[r],n[r]))return!1}return!0}function _u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,n){var a=_u(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=_u(a)}}function Su(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Su(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function ku(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gs(e.document)}return n}function dr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var wg=ea&&"documentMode"in document&&11>=document.documentMode,El=null,ur=null,ji=null,pr=!1;function Cu(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pr||El==null||El!==gs(l)||(l=El,"selectionStart"in l&&dr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ji&&vi(ji,l)||(ji=l,l=mo(ur,"onSelect"),0<l.length&&(n=new ws("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=El)))}function el(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ml={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},mr={},zu={};ea&&(zu=document.createElement("div").style,"AnimationEvent"in window||(delete Ml.animationend.animation,delete Ml.animationiteration.animation,delete Ml.animationstart.animation),"TransitionEvent"in window||delete Ml.transitionend.transition);function tl(e){if(mr[e])return mr[e];if(!Ml[e])return e;var n=Ml[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in zu)return mr[e]=n[a];return e}var Tu=tl("animationend"),Eu=tl("animationiteration"),Mu=tl("animationstart"),_g=tl("transitionrun"),Ng=tl("transitionstart"),Sg=tl("transitioncancel"),Du=tl("transitionend"),Au=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function Ln(e,n){Au.set(e,n),Pa(n,[e])}var Ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zn=[],Dl=0,hr=0;function ks(){for(var e=Dl,n=hr=Dl=0;n<e;){var a=zn[n];zn[n++]=null;var l=zn[n];zn[n++]=null;var r=zn[n];zn[n++]=null;var c=zn[n];if(zn[n++]=null,l!==null&&r!==null){var u=l.pending;u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r}c!==0&&Ou(a,r,c)}}function Cs(e,n,a,l){zn[Dl++]=e,zn[Dl++]=n,zn[Dl++]=a,zn[Dl++]=l,hr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xr(e,n,a,l){return Cs(e,n,a,l),zs(e)}function nl(e,n){return Cs(e,null,null,n),zs(e)}function Ou(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-mt(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function zs(e){if(50<$i)throw $i=0,Sc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Al={};function kg(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,a,l){return new kg(e,n,a,l)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Uu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,a,l,r,c){var u=0;if(l=e,typeof e=="function")gr(e)&&(u=1);else if(typeof e=="string")u=Mb(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case te:return e=hn(31,a,n,r),e.elementType=te,e.lanes=c,e;case K:return al(a.children,r,c,n);case z:u=8,r|=24;break;case G:return e=hn(12,a,n,r|2),e.elementType=G,e.lanes=c,e;case ie:return e=hn(13,a,n,r),e.elementType=ie,e.lanes=c,e;case oe:return e=hn(19,a,n,r),e.elementType=oe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:u=10;break e;case R:u=9;break e;case I:u=11;break e;case D:u=14;break e;case Q:u=16,l=null;break e}u=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=hn(u,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function al(e,n,a,l){return e=hn(7,e,l,n),e.lanes=a,e}function br(e,n,a){return e=hn(6,e,null,n),e.lanes=a,e}function Ru(e){var n=hn(18,null,null,0);return n.stateNode=e,n}function yr(e,n,a){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Hu=new WeakMap;function Tn(e,n){if(typeof e=="object"&&e!==null){var a=Hu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ge(n)},Hu.set(e,n),n)}return{value:e,source:n,stack:ge(n)}}var Ol=[],Ul=0,Es=null,wi=0,En=[],Mn=0,va=null,Xn=1,Zn="";function na(e,n){Ol[Ul++]=wi,Ol[Ul++]=Es,Es=e,wi=n}function Lu(e,n,a){En[Mn++]=Xn,En[Mn++]=Zn,En[Mn++]=va,va=e;var l=Xn;e=Zn;var r=32-mt(l)-1;l&=~(1<<r),a+=1;var c=32-mt(n)+r;if(30<c){var u=r-r%5;c=(l&(1<<u)-1).toString(32),l>>=u,r-=u,Xn=1<<32-mt(n)+r|a<<r|l,Zn=c+e}else Xn=1<<c|a<<r|l,Zn=e}function vr(e){e.return!==null&&(na(e,1),Lu(e,1,0))}function jr(e){for(;e===Es;)Es=Ol[--Ul],Ol[Ul]=null,wi=Ol[--Ul],Ol[Ul]=null;for(;e===va;)va=En[--Mn],En[Mn]=null,Zn=En[--Mn],En[Mn]=null,Xn=En[--Mn],En[Mn]=null}function qu(e,n){En[Mn++]=Xn,En[Mn++]=Zn,En[Mn++]=va,Xn=n.id,Zn=n.overflow,va=e}var Kt=null,bt=null,We=!1,ja=null,Dn=!1,wr=Error(d(519));function wa(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw _i(Tn(n,e)),wr}function Bu(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[ue]=e,n[Ce]=l,a){case"dialog":Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":case"embed":Qe("load",n);break;case"video":case"audio":for(a=0;a<Xi.length;a++)Qe(Xi[a],n);break;case"source":Qe("error",n);break;case"img":case"image":case"link":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"input":Qe("invalid",n),Id(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Qe("invalid",n);break;case"textarea":Qe("invalid",n),tu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||af(n.textContent,a)?(l.popover!=null&&(Qe("beforetoggle",n),Qe("toggle",n)),l.onScroll!=null&&Qe("scroll",n),l.onScrollEnd!=null&&Qe("scrollend",n),l.onClick!=null&&(n.onclick=In),n=!0):n=!1,n||wa(e,!0)}function Gu(e){for(Kt=e.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Dn=!1;return;case 27:case 3:Dn=!0;return;default:Kt=Kt.return}}function Rl(e){if(e!==Kt)return!1;if(!We)return Gu(e),We=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bc(e.type,e.memoizedProps)),a=!a),a&&bt&&wa(e),Gu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=mf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=mf(e)}else n===27?(n=bt,Ra(e.type)?(e=Xc,Xc=null,bt=e):bt=n):bt=Kt?On(e.stateNode.nextSibling):null;return!0}function ll(){bt=Kt=null,We=!1}function _r(){var e=ja;return e!==null&&(dn===null?dn=e:dn.push.apply(dn,e),ja=null),e}function _i(e){ja===null?ja=[e]:ja.push(e)}var Nr=N(null),il=null,aa=null;function _a(e,n,a){re(Nr,n._currentValue),n._currentValue=a}function la(e){e._currentValue=Nr.current,E(Nr)}function Sr(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function kr(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var u=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var C=0;C<n.length;C++)if(g.context===n[C]){c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),Sr(c.return,a,e),l||(u=null);break e}c=g.next}}else if(r.tag===18){if(u=r.return,u===null)throw Error(d(341));u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),Sr(u,a,e),u=null}else u=r.child;if(u!==null)u.return=r;else for(u=r;u!==null;){if(u===e){u=null;break}if(r=u.sibling,r!==null){r.return=u.return,u=r;break}u=u.return}r=u}}function Hl(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var u=r.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var g=r.type;fn(r.pendingProps.value,u.value)||(e!==null?e.push(g):e=[g])}}else if(r===De.current){if(u=r.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}r=r.return}e!==null&&kr(n,e,a,l),n.flags|=262144}function Ms(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sl(e){il=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vt(e){return Yu(il,e)}function Ds(e,n){return il===null&&sl(e),Yu(e,n)}function Yu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(d(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var Cg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zg=s.unstable_scheduleCallback,Tg=s.unstable_NormalPriority,Ut={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(){return{controller:new Cg,data:new Map,refCount:0}}function Ni(e){e.refCount--,e.refCount===0&&zg(Tg,function(){e.controller.abort()})}var Si=null,zr=0,Ll=0,ql=null;function Eg(e,n){if(Si===null){var a=Si=[];zr=0,Ll=Mc(),ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zr++,n.then($u,$u),n}function $u(){if(--zr===0&&Si!==null){ql!==null&&(ql.status="fulfilled");var e=Si;Si=null,Ll=0,ql=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mg(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var Qu=H.S;H.S=function(e,n){Cm=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Eg(e,n),Qu!==null&&Qu(e,n)};var ol=N(null);function Tr(){var e=ol.current;return e!==null?e:ht.pooledCache}function As(e,n){n===null?re(ol,ol.current):re(ol,n.pool)}function Xu(){var e=Tr();return e===null?null:{parent:Ut._currentValue,pool:e}}var Bl=Error(d(460)),Er=Error(d(474)),Os=Error(d(542)),Us={then:function(){}};function Zu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Ku(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(In,In),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ju(e),e;default:if(typeof n.status=="string")n.then(In,In);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ju(e),e}throw cl=n,Bl}}function rl(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cl=a,Bl):a}}var cl=null;function Vu(){if(cl===null)throw Error(d(459));var e=cl;return cl=null,e}function Ju(e){if(e===Bl||e===Os)throw Error(d(483))}var Gl=null,ki=0;function Rs(e){var n=ki;return ki+=1,Gl===null&&(Gl=[]),Ku(Gl,e,n)}function Ci(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Hs(e,n){throw n.$$typeof===T?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Fu(e){function n(B,O){if(e){var X=B.deletions;X===null?(B.deletions=[O],B.flags|=16):X.push(O)}}function a(B,O){if(!e)return null;for(;O!==null;)n(B,O),O=O.sibling;return null}function l(B){for(var O=new Map;B!==null;)B.key!==null?O.set(B.key,B):O.set(B.index,B),B=B.sibling;return O}function r(B,O){return B=ta(B,O),B.index=0,B.sibling=null,B}function c(B,O,X){return B.index=X,e?(X=B.alternate,X!==null?(X=X.index,X<O?(B.flags|=67108866,O):X):(B.flags|=67108866,O)):(B.flags|=1048576,O)}function u(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function g(B,O,X,ne){return O===null||O.tag!==6?(O=br(X,B.mode,ne),O.return=B,O):(O=r(O,X),O.return=B,O)}function C(B,O,X,ne){var Te=X.type;return Te===K?P(B,O,X.props.children,ne,X.key):O!==null&&(O.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&rl(Te)===O.type)?(O=r(O,X.props),Ci(O,X),O.return=B,O):(O=Ts(X.type,X.key,X.props,null,B.mode,ne),Ci(O,X),O.return=B,O)}function Z(B,O,X,ne){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=yr(X,B.mode,ne),O.return=B,O):(O=r(O,X.children||[]),O.return=B,O)}function P(B,O,X,ne,Te){return O===null||O.tag!==7?(O=al(X,B.mode,ne,Te),O.return=B,O):(O=r(O,X),O.return=B,O)}function le(B,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=br(""+O,B.mode,X),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case $:return X=Ts(O.type,O.key,O.props,null,B.mode,X),Ci(X,O),X.return=B,X;case W:return O=yr(O,B.mode,X),O.return=B,O;case Q:return O=rl(O),le(B,O,X)}if(ae(O)||L(O))return O=al(O,B.mode,X,null),O.return=B,O;if(typeof O.then=="function")return le(B,Rs(O),X);if(O.$$typeof===U)return le(B,Ds(B,O),X);Hs(B,O)}return null}function V(B,O,X,ne){var Te=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Te!==null?null:g(B,O,""+X,ne);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case $:return X.key===Te?C(B,O,X,ne):null;case W:return X.key===Te?Z(B,O,X,ne):null;case Q:return X=rl(X),V(B,O,X,ne)}if(ae(X)||L(X))return Te!==null?null:P(B,O,X,ne,null);if(typeof X.then=="function")return V(B,O,Rs(X),ne);if(X.$$typeof===U)return V(B,O,Ds(B,X),ne);Hs(B,X)}return null}function J(B,O,X,ne,Te){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return B=B.get(X)||null,g(O,B,""+ne,Te);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case $:return B=B.get(ne.key===null?X:ne.key)||null,C(O,B,ne,Te);case W:return B=B.get(ne.key===null?X:ne.key)||null,Z(O,B,ne,Te);case Q:return ne=rl(ne),J(B,O,X,ne,Te)}if(ae(ne)||L(ne))return B=B.get(X)||null,P(O,B,ne,Te,null);if(typeof ne.then=="function")return J(B,O,X,Rs(ne),Te);if(ne.$$typeof===U)return J(B,O,X,Ds(O,ne),Te);Hs(O,ne)}return null}function je(B,O,X,ne){for(var Te=null,tt=null,ke=O,Ge=O=0,Fe=null;ke!==null&&Ge<X.length;Ge++){ke.index>Ge?(Fe=ke,ke=null):Fe=ke.sibling;var nt=V(B,ke,X[Ge],ne);if(nt===null){ke===null&&(ke=Fe);break}e&&ke&&nt.alternate===null&&n(B,ke),O=c(nt,O,Ge),tt===null?Te=nt:tt.sibling=nt,tt=nt,ke=Fe}if(Ge===X.length)return a(B,ke),We&&na(B,Ge),Te;if(ke===null){for(;Ge<X.length;Ge++)ke=le(B,X[Ge],ne),ke!==null&&(O=c(ke,O,Ge),tt===null?Te=ke:tt.sibling=ke,tt=ke);return We&&na(B,Ge),Te}for(ke=l(ke);Ge<X.length;Ge++)Fe=J(ke,B,Ge,X[Ge],ne),Fe!==null&&(e&&Fe.alternate!==null&&ke.delete(Fe.key===null?Ge:Fe.key),O=c(Fe,O,Ge),tt===null?Te=Fe:tt.sibling=Fe,tt=Fe);return e&&ke.forEach(function(Ga){return n(B,Ga)}),We&&na(B,Ge),Te}function Me(B,O,X,ne){if(X==null)throw Error(d(151));for(var Te=null,tt=null,ke=O,Ge=O=0,Fe=null,nt=X.next();ke!==null&&!nt.done;Ge++,nt=X.next()){ke.index>Ge?(Fe=ke,ke=null):Fe=ke.sibling;var Ga=V(B,ke,nt.value,ne);if(Ga===null){ke===null&&(ke=Fe);break}e&&ke&&Ga.alternate===null&&n(B,ke),O=c(Ga,O,Ge),tt===null?Te=Ga:tt.sibling=Ga,tt=Ga,ke=Fe}if(nt.done)return a(B,ke),We&&na(B,Ge),Te;if(ke===null){for(;!nt.done;Ge++,nt=X.next())nt=le(B,nt.value,ne),nt!==null&&(O=c(nt,O,Ge),tt===null?Te=nt:tt.sibling=nt,tt=nt);return We&&na(B,Ge),Te}for(ke=l(ke);!nt.done;Ge++,nt=X.next())nt=J(ke,B,Ge,nt.value,ne),nt!==null&&(e&&nt.alternate!==null&&ke.delete(nt.key===null?Ge:nt.key),O=c(nt,O,Ge),tt===null?Te=nt:tt.sibling=nt,tt=nt);return e&&ke.forEach(function(Yb){return n(B,Yb)}),We&&na(B,Ge),Te}function pt(B,O,X,ne){if(typeof X=="object"&&X!==null&&X.type===K&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case $:e:{for(var Te=X.key;O!==null;){if(O.key===Te){if(Te=X.type,Te===K){if(O.tag===7){a(B,O.sibling),ne=r(O,X.props.children),ne.return=B,B=ne;break e}}else if(O.elementType===Te||typeof Te=="object"&&Te!==null&&Te.$$typeof===Q&&rl(Te)===O.type){a(B,O.sibling),ne=r(O,X.props),Ci(ne,X),ne.return=B,B=ne;break e}a(B,O);break}else n(B,O);O=O.sibling}X.type===K?(ne=al(X.props.children,B.mode,ne,X.key),ne.return=B,B=ne):(ne=Ts(X.type,X.key,X.props,null,B.mode,ne),Ci(ne,X),ne.return=B,B=ne)}return u(B);case W:e:{for(Te=X.key;O!==null;){if(O.key===Te)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(B,O.sibling),ne=r(O,X.children||[]),ne.return=B,B=ne;break e}else{a(B,O);break}else n(B,O);O=O.sibling}ne=yr(X,B.mode,ne),ne.return=B,B=ne}return u(B);case Q:return X=rl(X),pt(B,O,X,ne)}if(ae(X))return je(B,O,X,ne);if(L(X)){if(Te=L(X),typeof Te!="function")throw Error(d(150));return X=Te.call(X),Me(B,O,X,ne)}if(typeof X.then=="function")return pt(B,O,Rs(X),ne);if(X.$$typeof===U)return pt(B,O,Ds(B,X),ne);Hs(B,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(B,O.sibling),ne=r(O,X),ne.return=B,B=ne):(a(B,O),ne=br(X,B.mode,ne),ne.return=B,B=ne),u(B)):a(B,O)}return function(B,O,X,ne){try{ki=0;var Te=pt(B,O,X,ne);return Gl=null,Te}catch(ke){if(ke===Bl||ke===Os)throw ke;var tt=hn(29,ke,null,B.mode);return tt.lanes=ne,tt.return=B,tt}finally{}}}var dl=Fu(!0),Wu=Fu(!1),Na=!1;function Mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=zs(e),Ou(e,null,a),n}return Cs(e,l,n,a),zs(e)}function zi(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Ue(e,a)}}function Ar(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=u:c=c.next=u,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Or=!1;function Ti(){if(Or){var e=ql;if(e!==null)throw e}}function Ei(e,n,a,l){Or=!1;var r=e.updateQueue;Na=!1;var c=r.firstBaseUpdate,u=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var C=g,Z=C.next;C.next=null,u===null?c=Z:u.next=Z,u=C;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==u&&(g===null?P.firstBaseUpdate=Z:g.next=Z,P.lastBaseUpdate=C))}if(c!==null){var le=r.baseState;u=0,P=Z=C=null,g=c;do{var V=g.lane&-536870913,J=V!==g.lane;if(J?(Je&V)===V:(l&V)===V){V!==0&&V===Ll&&(Or=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var je=e,Me=g;V=n;var pt=a;switch(Me.tag){case 1:if(je=Me.payload,typeof je=="function"){le=je.call(pt,le,V);break e}le=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Me.payload,V=typeof je=="function"?je.call(pt,le,V):je,V==null)break e;le=j({},le,V);break e;case 2:Na=!0}}V=g.callback,V!==null&&(e.flags|=64,J&&(e.flags|=8192),J=r.callbacks,J===null?r.callbacks=[V]:J.push(V))}else J={lane:V,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(Z=P=J,C=le):P=P.next=J,u|=V;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;J=g,g=J.next,J.next=null,r.lastBaseUpdate=J,r.shared.pending=null}}while(!0);P===null&&(C=le),r.baseState=C,r.firstBaseUpdate=Z,r.lastBaseUpdate=P,c===null&&(r.shared.lanes=0),Ma|=u,e.lanes=u,e.memoizedState=le}}function Pu(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function Iu(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Pu(a[e],n)}var Yl=N(null),Ls=N(0);function ep(e,n){e=ma,re(Ls,e),re(Yl,n),ma=e|n.baseLanes}function Ur(){re(Ls,ma),re(Yl,Yl.current)}function Rr(){ma=Ls.current,E(Yl),E(Ls)}var xn=N(null),An=null;function Ca(e){var n=e.alternate;re(Tt,Tt.current&1),re(xn,e),An===null&&(n===null||Yl.current!==null||n.memoizedState!==null)&&(An=e)}function Hr(e){re(Tt,Tt.current),re(xn,e),An===null&&(An=e)}function tp(e){e.tag===22?(re(Tt,Tt.current),re(xn,e),An===null&&(An=e)):za()}function za(){re(Tt,Tt.current),re(xn,xn.current)}function gn(e){E(xn),An===e&&(An=null),E(Tt)}var Tt=N(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$c(a)||Qc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,Le=null,dt=null,Rt=null,Bs=!1,$l=!1,ul=!1,Gs=0,Mi=0,Ql=null,Dg=0;function kt(){throw Error(d(321))}function Lr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fn(e[a],n[a]))return!1;return!0}function qr(e,n,a,l,r,c){return ia=c,Le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?Lp:ec,ul=!1,c=a(l,r),ul=!1,$l&&(c=ap(n,a,l,r)),np(e),c}function np(e){H.H=Oi;var n=dt!==null&&dt.next!==null;if(ia=0,Rt=dt=Le=null,Bs=!1,Mi=0,Ql=null,n)throw Error(d(300));e===null||Ht||(e=e.dependencies,e!==null&&Ms(e)&&(Ht=!0))}function ap(e,n,a,l){Le=e;var r=0;do{if($l&&(Ql=null),Mi=0,$l=!1,25<=r)throw Error(d(301));if(r+=1,Rt=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}H.H=qp,c=n(a,l)}while($l);return c}function Ag(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Di(n):n,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(Le.flags|=1024),n}function Br(){var e=Gs!==0;return Gs=0,e}function Gr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yr(e){if(Bs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bs=!1}ia=0,Rt=dt=Le=null,$l=!1,Mi=Gs=0,Ql=null}function an(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Le.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Et(){if(dt===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var n=Rt===null?Le.memoizedState:Rt.next;if(n!==null)Rt=n,dt=e;else{if(e===null)throw Le.alternate===null?Error(d(467)):Error(d(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Rt===null?Le.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function Ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Di(e){var n=Mi;return Mi+=1,Ql===null&&(Ql=[]),e=Ku(Ql,e,n),n=Le,(Rt===null?n.memoizedState:Rt.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Lp:ec),e}function $s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Di(e);if(e.$$typeof===U)return Vt(e)}throw Error(d(438,String(e)))}function $r(e){var n=null,a=Le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ys(),Le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=he;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Qs(e){var n=Et();return Qr(n,dt,e)}function Qr(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var u=r.next;r.next=c.next,c.next=u}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var g=u=null,C=null,Z=n,P=!1;do{var le=Z.lane&-536870913;if(le!==Z.lane?(Je&le)===le:(ia&le)===le){var V=Z.revertLane;if(V===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),le===Ll&&(P=!0);else if((ia&V)===V){Z=Z.next,V===Ll&&(P=!0);continue}else le={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},C===null?(g=C=le,u=c):C=C.next=le,Le.lanes|=V,Ma|=V;le=Z.action,ul&&a(c,le),c=Z.hasEagerState?Z.eagerState:a(c,le)}else V={lane:le,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},C===null?(g=C=V,u=c):C=C.next=V,Le.lanes|=le,Ma|=le;Z=Z.next}while(Z!==null&&Z!==n);if(C===null?u=c:C.next=g,!fn(c,e.memoizedState)&&(Ht=!0,P&&(a=ql,a!==null)))throw a;e.memoizedState=c,e.baseState=u,e.baseQueue=C,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xr(e){var n=Et(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var u=r=r.next;do c=e(c,u.action),u=u.next;while(u!==r);fn(c,n.memoizedState)||(Ht=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function lp(e,n,a){var l=Le,r=Et(),c=We;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var u=!fn((dt||r).memoizedState,a);if(u&&(r.memoizedState=a,Ht=!0),r=r.queue,Vr(op.bind(null,l,r,e),[e]),r.getSnapshot!==n||u||Rt!==null&&Rt.memoizedState.tag&1){if(l.flags|=2048,Xl(9,{destroy:void 0},sp.bind(null,l,r,a,n),null),ht===null)throw Error(d(349));c||(ia&127)!==0||ip(l,n,a)}return a}function ip(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Le.updateQueue,n===null?(n=Ys(),Le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function sp(e,n,a,l){n.value=a,n.getSnapshot=l,rp(n)&&cp(e)}function op(e,n,a){return a(function(){rp(n)&&cp(e)})}function rp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fn(e,a)}catch{return!0}}function cp(e){var n=nl(e,2);n!==null&&un(n,e,2)}function Zr(e){var n=an();if(typeof e=="function"){var a=e;if(e=a(),ul){Ae(!0);try{a()}finally{Ae(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function dp(e,n,a,l){return e.baseState=a,Qr(e,dt,typeof l=="function"?l:sa)}function Og(e,n,a,l,r){if(Ks(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};H.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,up(n,c)):(c.next=a.next,n.pending=a.next=c)}}function up(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=H.T,u={};H.T=u;try{var g=a(r,l),C=H.S;C!==null&&C(u,g),pp(e,n,g)}catch(Z){Kr(e,n,Z)}finally{c!==null&&u.types!==null&&(c.types=u.types),H.T=c}}else try{c=a(r,l),pp(e,n,c)}catch(Z){Kr(e,n,Z)}}function pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){mp(e,n,l)},function(l){return Kr(e,n,l)}):mp(e,n,a)}function mp(e,n,a){n.status="fulfilled",n.value=a,fp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,up(e,a)))}function Kr(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,fp(n),n=n.next;while(n!==l)}e.action=null}function fp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function hp(e,n){return n}function xp(e,n){if(We){var a=ht.formState;if(a!==null){e:{var l=Le;if(We){if(bt){t:{for(var r=bt,c=Dn;r.nodeType!==8;){if(!c){r=null;break t}if(r=On(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){bt=On(r.nextSibling),l=r.data==="F!";break e}}wa(l)}l=!1}l&&(n=a[0])}}return a=an(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:hp,lastRenderedState:n},a.queue=l,a=Up.bind(null,Le,l),l.dispatch=a,l=Zr(!1),c=Ir.bind(null,Le,!1,l.queue),l=an(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=Og.bind(null,Le,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function gp(e){var n=Et();return bp(n,dt,e)}function bp(e,n,a){if(n=Qr(e,n,hp)[0],e=Qs(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Di(n)}catch(u){throw u===Bl?Os:u}else l=n;n=Et();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Le.flags|=2048,Xl(9,{destroy:void 0},Ug.bind(null,r,a),null)),[l,c,e]}function Ug(e,n){e.action=n}function yp(e){var n=Et(),a=dt;if(a!==null)return bp(n,a,e);Et(),n=n.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Xl(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=Le.updateQueue,n===null&&(n=Ys(),Le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function vp(){return Et().memoizedState}function Xs(e,n,a,l){var r=an();Le.flags|=e,r.memoizedState=Xl(1|n,{destroy:void 0},a,l===void 0?null:l)}function Zs(e,n,a,l){var r=Et();l=l===void 0?null:l;var c=r.memoizedState.inst;dt!==null&&l!==null&&Lr(l,dt.memoizedState.deps)?r.memoizedState=Xl(n,c,a,l):(Le.flags|=e,r.memoizedState=Xl(1|n,c,a,l))}function jp(e,n){Xs(8390656,8,e,n)}function Vr(e,n){Zs(2048,8,e,n)}function Rg(e){Le.flags|=4;var n=Le.updateQueue;if(n===null)n=Ys(),Le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function wp(e){var n=Et().memoizedState;return Rg({ref:n,nextImpl:e}),function(){if((at&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function _p(e,n){return Zs(4,2,e,n)}function Np(e,n){return Zs(4,4,e,n)}function Sp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kp(e,n,a){a=a!=null?a.concat([e]):null,Zs(4,4,Sp.bind(null,n,e),a)}function Jr(){}function Cp(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Lr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function zp(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Lr(n,l[1]))return l[0];if(l=e(),ul){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[l,n],l}function Fr(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Je&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Tm(),Le.lanes|=e,Ma|=e,a)}function Tp(e,n,a,l){return fn(a,n)?a:Yl.current!==null?(e=Fr(e,a,l),fn(e,n)||(Ht=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Je&261930)===0?(Ht=!0,e.memoizedState=a):(e=Tm(),Le.lanes|=e,Ma|=e,n)}function Ep(e,n,a,l,r){var c=F.p;F.p=c!==0&&8>c?c:8;var u=H.T,g={};H.T=g,Ir(e,!1,n,a);try{var C=r(),Z=H.S;if(Z!==null&&Z(g,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=Mg(C,l);Ai(e,n,P,vn(e))}else Ai(e,n,l,vn(e))}catch(le){Ai(e,n,{then:function(){},status:"rejected",reason:le},vn())}finally{F.p=c,u!==null&&g.types!==null&&(u.types=g.types),H.T=u}}function Hg(){}function Wr(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Mp(e).queue;Ep(e,r,n,k,a===null?Hg:function(){return Dp(e),a(l)})}function Mp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Dp(e){var n=Mp(e);n.next===null&&(n=e.alternate.memoizedState),Ai(e,n.next.queue,{},vn())}function Pr(){return Vt(Fi)}function Ap(){return Et().memoizedState}function Op(){return Et().memoizedState}function Lg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vn();e=Sa(a);var l=ka(n,e,a);l!==null&&(un(l,n,a),zi(l,n,a)),n={cache:Cr()},e.payload=n;return}n=n.return}}function qg(e,n,a){var l=vn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ks(e)?Rp(n,a):(a=xr(e,n,a,l),a!==null&&(un(a,e,l),Hp(a,n,l)))}function Up(e,n,a){var l=vn();Ai(e,n,a,l)}function Ai(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ks(e))Rp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var u=n.lastRenderedState,g=c(u,a);if(r.hasEagerState=!0,r.eagerState=g,fn(g,u))return Cs(e,n,r,0),ht===null&&ks(),!1}catch{}finally{}if(a=xr(e,n,r,l),a!==null)return un(a,e,l),Hp(a,n,l),!0}return!1}function Ir(e,n,a,l){if(l={lane:2,revertLane:Mc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ks(e)){if(n)throw Error(d(479))}else n=xr(e,a,l,2),n!==null&&un(n,e,2)}function Ks(e){var n=e.alternate;return e===Le||n!==null&&n===Le}function Rp(e,n){$l=Bs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Hp(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Ue(e,a)}}var Oi={readContext:Vt,use:$s,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};Oi.useEffectEvent=kt;var Lp={readContext:Vt,use:$s,useCallback:function(e,n){return an().memoizedState=[e,n===void 0?null:n],e},useContext:Vt,useEffect:jp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xs(4194308,4,Sp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xs(4194308,4,e,n)},useInsertionEffect:function(e,n){Xs(4,2,e,n)},useMemo:function(e,n){var a=an();n=n===void 0?null:n;var l=e();if(ul){Ae(!0);try{e()}finally{Ae(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=an();if(a!==void 0){var r=a(n);if(ul){Ae(!0);try{a(n)}finally{Ae(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=qg.bind(null,Le,e),[l.memoizedState,e]},useRef:function(e){var n=an();return e={current:e},n.memoizedState=e},useState:function(e){e=Zr(e);var n=e.queue,a=Up.bind(null,Le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Jr,useDeferredValue:function(e,n){var a=an();return Fr(a,e,n)},useTransition:function(){var e=Zr(!1);return e=Ep.bind(null,Le,e.queue,!0,!1),an().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Le,r=an();if(We){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Je&127)!==0||ip(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,jp(op.bind(null,l,c,e),[e]),l.flags|=2048,Xl(9,{destroy:void 0},sp.bind(null,l,c,a,n),null),a},useId:function(){var e=an(),n=ht.identifierPrefix;if(We){var a=Zn,l=Xn;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dg++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Pr,useFormState:xp,useActionState:xp,useOptimistic:function(e){var n=an();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ir.bind(null,Le,!0,a),a.dispatch=n,[e,n]},useMemoCache:$r,useCacheRefresh:function(){return an().memoizedState=Lg.bind(null,Le)},useEffectEvent:function(e){var n=an(),a={impl:e};return n.memoizedState=a,function(){if((at&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},ec={readContext:Vt,use:$s,useCallback:Cp,useContext:Vt,useEffect:Vr,useImperativeHandle:kp,useInsertionEffect:_p,useLayoutEffect:Np,useMemo:zp,useReducer:Qs,useRef:vp,useState:function(){return Qs(sa)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Et();return Tp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Qs(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:lp,useId:Ap,useHostTransitionStatus:Pr,useFormState:gp,useActionState:gp,useOptimistic:function(e,n){var a=Et();return dp(a,dt,e,n)},useMemoCache:$r,useCacheRefresh:Op};ec.useEffectEvent=wp;var qp={readContext:Vt,use:$s,useCallback:Cp,useContext:Vt,useEffect:Vr,useImperativeHandle:kp,useInsertionEffect:_p,useLayoutEffect:Np,useMemo:zp,useReducer:Xr,useRef:vp,useState:function(){return Xr(sa)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Et();return dt===null?Fr(a,e,n):Tp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Xr(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:lp,useId:Ap,useHostTransitionStatus:Pr,useFormState:yp,useActionState:yp,useOptimistic:function(e,n){var a=Et();return dt!==null?dp(a,dt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$r,useCacheRefresh:Op};qp.useEffectEvent=wp;function tc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:j({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=vn(),r=Sa(l);r.payload=n,a!=null&&(r.callback=a),n=ka(e,r,l),n!==null&&(un(n,e,l),zi(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=vn(),r=Sa(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=ka(e,r,l),n!==null&&(un(n,e,l),zi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vn(),l=Sa(a);l.tag=2,n!=null&&(l.callback=n),n=ka(e,l,a),n!==null&&(un(n,e,a),zi(n,e,a))}};function Bp(e,n,a,l,r,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,u):n.prototype&&n.prototype.isPureReactComponent?!vi(a,l)||!vi(r,c):!0}function Gp(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&nc.enqueueReplaceState(n,n.state,null)}function pl(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=j({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Yp(e){Ss(e)}function $p(e){console.error(e)}function Qp(e){Ss(e)}function Vs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Xp(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ac(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vs(e,n)},a}function Zp(e){return e=Sa(e),e.tag=3,e}function Kp(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Xp(n,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Xp(n,a,l),typeof r!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Bg(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Hl(n,a,r,!0),a=xn.current,a!==null){switch(a.tag){case 31:case 13:return An===null?so():a.alternate===null&&Ct===0&&(Ct=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Us?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),zc(e,l,r)),!1;case 22:return a.flags|=65536,l===Us?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),zc(e,l,r)),!1}throw Error(d(435,a.tag))}return zc(e,l,r),so(),!1}if(We)return n=xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==wr&&(e=Error(d(422),{cause:l}),_i(Tn(e,a)))):(l!==wr&&(n=Error(d(423),{cause:l}),_i(Tn(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Tn(l,a),r=ac(e.stateNode,l,r),Ar(e,r),Ct!==4&&(Ct=2)),!1;var c=Error(d(520),{cause:l});if(c=Tn(c,a),Yi===null?Yi=[c]:Yi.push(c),Ct!==4&&(Ct=2),n===null)return!0;l=Tn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ac(a.stateNode,l,e),Ar(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Da===null||!Da.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Zp(r),Kp(r,e,a,l),Ar(a,r),!1}a=a.return}while(a!==null);return!1}var lc=Error(d(461)),Ht=!1;function Jt(e,n,a,l){n.child=e===null?Wu(n,null,a,l):dl(n,e.child,a,l)}function Vp(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var u={};for(var g in l)g!=="ref"&&(u[g]=l[g])}else u=l;return sl(n),l=qr(e,n,a,u,c,r),g=Br(),e!==null&&!Ht?(Gr(e,n,r),oa(e,n,r)):(We&&g&&vr(n),n.flags|=1,Jt(e,n,l,r),n.child)}function Jp(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!gr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Fp(e,n,c,l,r)):(e=Ts(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!pc(e,r)){var u=c.memoizedProps;if(a=a.compare,a=a!==null?a:vi,a(u,l)&&e.ref===n.ref)return oa(e,n,r)}return n.flags|=1,e=ta(c,l),e.ref=n.ref,e.return=n,n.child=e}function Fp(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(vi(c,l)&&e.ref===n.ref)if(Ht=!1,n.pendingProps=l=c,pc(e,r))(e.flags&131072)!==0&&(Ht=!0);else return n.lanes=e.lanes,oa(e,n,r)}return ic(e,n,a,l,r)}function Wp(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return Pp(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&As(n,c!==null?c.cachePool:null),c!==null?ep(n,c):Ur(),tp(n);else return l=n.lanes=536870912,Pp(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(As(n,c.cachePool),ep(n,c),za(),n.memoizedState=null):(e!==null&&As(n,null),Ur(),za());return Jt(e,n,r,a),n.child}function Ui(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Pp(e,n,a,l,r){var c=Tr();return c=c===null?null:{parent:Ut._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&As(n,null),Ur(),tp(n),e!==null&&Hl(e,n,l,!0),n.childLanes=r,null}function Js(e,n){return n=Ws({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Ip(e,n,a){return dl(n,e.child,null,a),e=Js(n,n.pendingProps),e.flags|=2,gn(n),n.memoizedState=null,e}function Gg(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(We){if(l.mode==="hidden")return e=Js(n,l),n.lanes=536870912,Ui(null,e);if(Hr(n),(e=bt)?(e=pf(e,Dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=Ru(e),a.return=n,n.child=a,Kt=n,bt=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Js(n,l)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Hr(n),r)if(n.flags&256)n.flags&=-257,n=Ip(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Ht||Hl(e,n,a,!1),r=(a&e.childLanes)!==0,Ht||r){if(l=ht,l!==null&&(u=Hn(l,a),u!==0&&u!==c.retryLane))throw c.retryLane=u,nl(e,u),un(l,e,u),lc;so(),n=Ip(e,n,a)}else e=c.treeContext,bt=On(u.nextSibling),Kt=n,We=!0,ja=null,Dn=!1,e!==null&&qu(n,e),n=Js(n,l),n.flags|=4096;return n}return e=ta(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ic(e,n,a,l,r){return sl(n),a=qr(e,n,a,l,void 0,r),l=Br(),e!==null&&!Ht?(Gr(e,n,r),oa(e,n,r)):(We&&l&&vr(n),n.flags|=1,Jt(e,n,a,r),n.child)}function em(e,n,a,l,r,c){return sl(n),n.updateQueue=null,a=ap(n,l,a,r),np(e),l=Br(),e!==null&&!Ht?(Gr(e,n,c),oa(e,n,c)):(We&&l&&vr(n),n.flags|=1,Jt(e,n,a,c),n.child)}function tm(e,n,a,l,r){if(sl(n),n.stateNode===null){var c=Al,u=a.contextType;typeof u=="object"&&u!==null&&(c=Vt(u)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=nc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Mr(n),u=a.contextType,c.context=typeof u=="object"&&u!==null?Vt(u):Al,c.state=n.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(tc(n,a,u,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&nc.enqueueReplaceState(c,c.state,null),Ei(n,l,c,r),Ti(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var g=n.memoizedProps,C=pl(a,g);c.props=C;var Z=c.context,P=a.contextType;u=Al,typeof P=="object"&&P!==null&&(u=Vt(P));var le=a.getDerivedStateFromProps;P=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,P||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||Z!==u)&&Gp(n,c,l,u),Na=!1;var V=n.memoizedState;c.state=V,Ei(n,l,c,r),Ti(),Z=n.memoizedState,g||V!==Z||Na?(typeof le=="function"&&(tc(n,a,le,l),Z=n.memoizedState),(C=Na||Bp(n,a,C,l,V,Z,u))?(P||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Z),c.props=l,c.state=Z,c.context=u,l=C):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Dr(e,n),u=n.memoizedProps,P=pl(a,u),c.props=P,le=n.pendingProps,V=c.context,Z=a.contextType,C=Al,typeof Z=="object"&&Z!==null&&(C=Vt(Z)),g=a.getDerivedStateFromProps,(Z=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||V!==C)&&Gp(n,c,l,C),Na=!1,V=n.memoizedState,c.state=V,Ei(n,l,c,r),Ti();var J=n.memoizedState;u!==le||V!==J||Na||e!==null&&e.dependencies!==null&&Ms(e.dependencies)?(typeof g=="function"&&(tc(n,a,g,l),J=n.memoizedState),(P=Na||Bp(n,a,P,l,V,J,C)||e!==null&&e.dependencies!==null&&Ms(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,J,C),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,J,C)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=J),c.props=l,c.state=J,c.context=C,l=P):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,Fs(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=dl(n,e.child,null,r),n.child=dl(n,null,a,r)):Jt(e,n,a,r),n.memoizedState=c.state,e=n.child):e=oa(e,n,r),e}function nm(e,n,a,l){return ll(),n.flags|=256,Jt(e,n,a,l),n.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Xu()}}function rc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=yn),e}function am(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),u&&(r=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(We){if(r?Ca(n):za(),(e=bt)?(e=pf(e,Dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=Ru(e),a.return=n,n.child=a,Kt=n,bt=null)):e=null,e===null)throw wa(n);return Qc(e)?n.lanes=32:n.lanes=536870912,null}var g=l.children;return l=l.fallback,r?(za(),r=n.mode,g=Ws({mode:"hidden",children:g},r),l=al(l,r,a,null),g.return=n,l.return=n,g.sibling=l,n.child=g,l=n.child,l.memoizedState=oc(a),l.childLanes=rc(e,u,a),n.memoizedState=sc,Ui(null,l)):(Ca(n),cc(n,g))}var C=e.memoizedState;if(C!==null&&(g=C.dehydrated,g!==null)){if(c)n.flags&256?(Ca(n),n.flags&=-257,n=dc(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),g=l.fallback,r=n.mode,l=Ws({mode:"visible",children:l.children},r),g=al(g,r,a,null),g.flags|=2,l.return=n,g.return=n,l.sibling=g,n.child=l,dl(n,e.child,null,a),l=n.child,l.memoizedState=oc(a),l.childLanes=rc(e,u,a),n.memoizedState=sc,n=Ui(null,l));else if(Ca(n),Qc(g)){if(u=g.nextSibling&&g.nextSibling.dataset,u)var Z=u.dgst;u=Z,l=Error(d(419)),l.stack="",l.digest=u,_i({value:l,source:null,stack:null}),n=dc(e,n,a)}else if(Ht||Hl(e,n,a,!1),u=(a&e.childLanes)!==0,Ht||u){if(u=ht,u!==null&&(l=Hn(u,a),l!==0&&l!==C.retryLane))throw C.retryLane=l,nl(e,l),un(u,e,l),lc;$c(g)||so(),n=dc(e,n,a)}else $c(g)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,bt=On(g.nextSibling),Kt=n,We=!0,ja=null,Dn=!1,e!==null&&qu(n,e),n=cc(n,l.children),n.flags|=4096);return n}return r?(za(),g=l.fallback,r=n.mode,C=e.child,Z=C.sibling,l=ta(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,Z!==null?g=ta(Z,g):(g=al(g,r,a,null),g.flags|=2),g.return=n,l.return=n,l.sibling=g,n.child=l,Ui(null,l),l=n.child,g=e.child.memoizedState,g===null?g=oc(a):(r=g.cachePool,r!==null?(C=Ut._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=Xu(),g={baseLanes:g.baseLanes|a,cachePool:r}),l.memoizedState=g,l.childLanes=rc(e,u,a),n.memoizedState=sc,Ui(e.child,l)):(Ca(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=a,n.memoizedState=null,a)}function cc(e,n){return n=Ws({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ws(e,n){return e=hn(22,e,null,n),e.lanes=0,e}function dc(e,n,a){return dl(n,e.child,null,a),e=cc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function lm(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Sr(e.return,n,a)}function uc(e,n,a,l,r,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=r,u.treeForkCount=c)}function im(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var u=Tt.current,g=(u&2)!==0;if(g?(u=u&1|2,n.flags|=128):u&=1,re(Tt,u),Jt(e,n,l,a),l=We?wi:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&lm(e,a,n);else if(e.tag===19)lm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&qs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),uc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&qs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}uc(n,!0,a,null,c,l);break;case"together":uc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hl(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ms(e)))}function Yg(e,n,a){switch(n.tag){case 3:ot(n,n.stateNode.containerInfo),_a(n,Ut,e.memoizedState.cache),ll();break;case 27:case 5:Pe(n);break;case 4:ot(n,n.stateNode.containerInfo);break;case 10:_a(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?am(e,n,a):(Ca(n),e=oa(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Hl(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return im(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),re(Tt,Tt.current),l)break;return null;case 22:return n.lanes=0,Wp(e,n,a,n.pendingProps);case 24:_a(n,Ut,e.memoizedState.cache)}return oa(e,n,a)}function sm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ht=!0;else{if(!pc(e,a)&&(n.flags&128)===0)return Ht=!1,Yg(e,n,a);Ht=(e.flags&131072)!==0}else Ht=!1,We&&(n.flags&1048576)!==0&&Lu(n,wi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=rl(n.elementType),n.type=e,typeof e=="function")gr(e)?(l=pl(e,l),n.tag=1,n=tm(null,n,e,l,a)):(n.tag=0,n=ic(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=Vp(null,n,e,l,a);break e}else if(r===D){n.tag=14,n=Jp(null,n,e,l,a);break e}}throw n=A(e)||e,Error(d(306,n,""))}}return n;case 0:return ic(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=pl(l,n.pendingProps),tm(e,n,l,r,a);case 3:e:{if(ot(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,Dr(e,n),Ei(n,l,null,a);var u=n.memoizedState;if(l=u.cache,_a(n,Ut,l),l!==c.cache&&kr(n,[Ut],a,!0),Ti(),l=u.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=nm(e,n,l,a);break e}else if(l!==r){r=Tn(Error(d(424)),n),_i(r),n=nm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=On(e.firstChild),Kt=n,We=!0,ja=null,Dn=!0,a=Wu(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ll(),l===r){n=oa(e,n,a);break e}Jt(e,n,l,a)}n=n.child}return n;case 26:return Fs(e,n),e===null?(a=bf(n.type,null,n.pendingProps,null))?n.memoizedState=a:We||(a=n.type,e=n.pendingProps,l=fo(Se.current).createElement(a),l[ue]=n,l[Ce]=e,Ft(l,a,e),Xt(l),n.stateNode=l):n.memoizedState=bf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&We&&(l=n.stateNode=hf(n.type,n.pendingProps,Se.current),Kt=n,Dn=!0,r=bt,Ra(n.type)?(Xc=r,bt=On(l.firstChild)):bt=r),Jt(e,n,n.pendingProps.children,a),Fs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&We&&((r=l=bt)&&(l=bb(l,n.type,n.pendingProps,Dn),l!==null?(n.stateNode=l,Kt=n,bt=On(l.firstChild),Dn=!1,r=!0):r=!1),r||wa(n)),Pe(n),r=n.type,c=n.pendingProps,u=e!==null?e.memoizedProps:null,l=c.children,Bc(r,c)?l=null:u!==null&&Bc(r,u)&&(n.flags|=32),n.memoizedState!==null&&(r=qr(e,n,Ag,null,null,a),Fi._currentValue=r),Fs(e,n),Jt(e,n,l,a),n.child;case 6:return e===null&&We&&((e=a=bt)&&(a=yb(a,n.pendingProps,Dn),a!==null?(n.stateNode=a,Kt=n,bt=null,e=!0):e=!1),e||wa(n)),null;case 13:return am(e,n,a);case 4:return ot(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=dl(n,null,l,a):Jt(e,n,l,a),n.child;case 11:return Vp(e,n,n.type,n.pendingProps,a);case 7:return Jt(e,n,n.pendingProps,a),n.child;case 8:return Jt(e,n,n.pendingProps.children,a),n.child;case 12:return Jt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,_a(n,n.type,l.value),Jt(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,sl(n),r=Vt(r),l=l(r),n.flags|=1,Jt(e,n,l,a),n.child;case 14:return Jp(e,n,n.type,n.pendingProps,a);case 15:return Fp(e,n,n.type,n.pendingProps,a);case 19:return im(e,n,a);case 31:return Gg(e,n,a);case 22:return Wp(e,n,a,n.pendingProps);case 24:return sl(n),l=Vt(Ut),e===null?(r=Tr(),r===null&&(r=ht,c=Cr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Mr(n),_a(n,Ut,r)):((e.lanes&a)!==0&&(Dr(e,n),Ei(n,null,null,a),Ti()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),_a(n,Ut,l)):(l=c.cache,_a(n,Ut,l),l!==r.cache&&kr(n,[Ut],a,!0))),Jt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ra(e){e.flags|=4}function mc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Am())e.flags|=8192;else throw cl=Us,Er}else e.flags&=-16777217}function om(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!_f(n))if(Am())e.flags|=8192;else throw cl=Us,Er}function Ps(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Re():536870912,e.lanes|=n,Jl|=n)}function Ri(e,n){if(!We)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function $g(e,n,a){var l=n.pendingProps;switch(jr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(n),null;case 1:return yt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),la(Ut),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rl(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,_r())),yt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ra(n),c!==null?(yt(n),om(n,c)):(yt(n),mc(n,r,null,l,a))):c?c!==e.memoizedState?(ra(n),yt(n),om(n,c)):(yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ra(n),yt(n),mc(n,r,e,l,a)),null;case 27:if(Nt(n),a=Se.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}e=me.current,Rl(n)?Bu(n):(e=hf(r,l,a),n.stateNode=e,ra(n))}return yt(n),null;case 5:if(Nt(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}if(c=me.current,Rl(n))Bu(n);else{var u=fo(Se.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}c[ue]=n,c[Ce]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=c;e:switch(Ft(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ra(n)}}return yt(n),mc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=Se.current,Rl(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=Kt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[ue]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||af(e.nodeValue,a)),e||wa(n,!0)}else e=fo(e).createTextNode(l),e[ue]=n,n.stateNode=e}return yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Rl(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ue]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),e=!1}else a=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gn(n),n):(gn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return yt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Rl(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[ue]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),r=!1}else r=_r(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(gn(n),n):(gn(n),null)}return gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ps(n,n.updateQueue),yt(n),null);case 4:return qe(),e===null&&Uc(n.stateNode.containerInfo),yt(n),null;case 10:return la(n.type),yt(n),null;case 19:if(E(Tt),l=n.memoizedState,l===null)return yt(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Ri(l,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=qs(e),c!==null){for(n.flags|=128,Ri(l,!1),e=c.updateQueue,n.updateQueue=e,Ps(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Uu(a,e),a=a.sibling;return re(Tt,Tt.current&1|2),We&&na(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ye()>ao&&(n.flags|=128,r=!0,Ri(l,!1),n.lanes=4194304)}else{if(!r)if(e=qs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ps(n,e),Ri(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!We)return yt(n),null}else 2*ye()-l.renderingStartTime>ao&&a!==536870912&&(n.flags|=128,r=!0,Ri(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ye(),e.sibling=null,a=Tt.current,re(Tt,r?a&1|2:a&1),We&&na(n,l.treeForkCount),e):(yt(n),null);case 22:case 23:return gn(n),Rr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(yt(n),n.subtreeFlags&6&&(n.flags|=8192)):yt(n),a=n.updateQueue,a!==null&&Ps(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&E(ol),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(Ut),yt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Qg(e,n){switch(jr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(Ut),qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Nt(n),null;case 31:if(n.memoizedState!==null){if(gn(n),n.alternate===null)throw Error(d(340));ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return E(Tt),null;case 4:return qe(),null;case 10:return la(n.type),null;case 22:case 23:return gn(n),Rr(),e!==null&&E(ol),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(Ut),null;case 25:return null;default:return null}}function rm(e,n){switch(jr(n),n.tag){case 3:la(Ut),qe();break;case 26:case 27:case 5:Nt(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&gn(n);break;case 13:gn(n);break;case 19:E(Tt);break;case 10:la(n.type);break;case 22:case 23:gn(n),Rr(),e!==null&&E(ol);break;case 24:la(Ut)}}function Hi(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,u=a.inst;l=c(),u.destroy=l}a=a.next}while(a!==r)}}catch(g){it(n,n.return,g)}}function Ta(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var u=l.inst,g=u.destroy;if(g!==void 0){u.destroy=void 0,r=n;var C=a,Z=g;try{Z()}catch(P){it(r,C,P)}}}l=l.next}while(l!==c)}}catch(P){it(n,n.return,P)}}function cm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Iu(n,a)}catch(l){it(e,e.return,l)}}}function dm(e,n,a){a.props=pl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){it(e,n,l)}}function Li(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){it(e,n,r)}}function Kn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){it(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){it(e,n,r)}else a.current=null}function um(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){it(e,e.return,r)}}function fc(e,n,a){try{var l=e.stateNode;pb(l,e.type,a,n),l[Ce]=n}catch(r){it(e,e.return,r)}}function pm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||pm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=In));else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xc(e,n,a),e=e.sibling;e!==null;)xc(e,n,a),e=e.sibling}function Is(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Is(e,n,a),e=e.sibling;e!==null;)Is(e,n,a),e=e.sibling}function mm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ft(n,l,a),n[ue]=e,n[Ce]=a}catch(c){it(e,e.return,c)}}var ca=!1,Lt=!1,gc=!1,fm=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function Xg(e,n){if(e=e.containerInfo,Lc=jo,e=ku(e),dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var u=0,g=-1,C=-1,Z=0,P=0,le=e,V=null;t:for(;;){for(var J;le!==a||r!==0&&le.nodeType!==3||(g=u+r),le!==c||l!==0&&le.nodeType!==3||(C=u+l),le.nodeType===3&&(u+=le.nodeValue.length),(J=le.firstChild)!==null;)V=le,le=J;for(;;){if(le===e)break t;if(V===a&&++Z===r&&(g=u),V===c&&++P===l&&(C=u),(J=le.nextSibling)!==null)break;le=V,V=le.parentNode}le=J}a=g===-1||C===-1?null:{start:g,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:e,selectionRange:a},jo=!1,Zt=n;Zt!==null;)if(n=Zt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Zt=e;else for(;Zt!==null;){switch(n=Zt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var je=pl(a.type,r);e=l.getSnapshotBeforeUpdate(je,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Me){it(a,a.return,Me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Zt=e;break}Zt=n.return}}function hm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&Hi(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(u){it(a,a.return,u)}else{var r=pl(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(u){it(a,a.return,u)}}l&64&&cm(a),l&512&&Li(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Iu(e,n)}catch(u){it(a,a.return,u)}}break;case 27:n===null&&l&4&&mm(a);case 26:case 5:ua(e,a),n===null&&l&4&&um(a),l&512&&Li(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&bm(e,a);break;case 13:ua(e,a),l&4&&ym(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eb.bind(null,a),vb(e,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){n=n!==null&&n.memoizedState!==null||Lt,r=ca;var c=Lt;ca=l,(Lt=n)&&!c?pa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),ca=r,Lt=c}break;case 30:break;default:ua(e,a)}}function xm(e){var n=e.alternate;n!==null&&(e.alternate=null,xm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ko(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,on=!1;function da(e,n,a){for(a=a.child;a!==null;)gm(e,n,a),a=a.sibling}function gm(e,n,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ke,a)}catch{}switch(a.tag){case 26:Lt||Kn(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Lt||Kn(a,n);var l=wt,r=on;Ra(a.type)&&(wt=a.stateNode,on=!1),da(e,n,a),Ki(a.stateNode),wt=l,on=r;break;case 5:Lt||Kn(a,n);case 6:if(l=wt,r=on,wt=null,da(e,n,a),wt=l,on=r,wt!==null)if(on)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(c){it(a,n,c)}else try{wt.removeChild(a.stateNode)}catch(c){it(a,n,c)}break;case 18:wt!==null&&(on?(e=wt,df(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ai(e)):df(wt,a.stateNode));break;case 4:l=wt,r=on,wt=a.stateNode.containerInfo,on=!0,da(e,n,a),wt=l,on=r;break;case 0:case 11:case 14:case 15:Ta(2,a,n),Lt||Ta(4,a,n),da(e,n,a);break;case 1:Lt||(Kn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&dm(a,n,l)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:Lt=(l=Lt)||a.memoizedState!==null,da(e,n,a),Lt=l;break;default:da(e,n,a)}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ai(e)}catch(a){it(n,n.return,a)}}}function ym(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ai(e)}catch(a){it(n,n.return,a)}}function Zg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new fm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new fm),n;default:throw Error(d(435,e.tag))}}function eo(e,n){var a=Zg(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=tb.bind(null,e,l);l.then(r,r)}})}function rn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,u=n,g=u;e:for(;g!==null;){switch(g.tag){case 27:if(Ra(g.type)){wt=g.stateNode,on=!1;break e}break;case 5:wt=g.stateNode,on=!1;break e;case 3:case 4:wt=g.stateNode.containerInfo,on=!0;break e}g=g.return}if(wt===null)throw Error(d(160));gm(c,u,r),wt=null,on=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)vm(n,e),n=n.sibling}var qn=null;function vm(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:rn(n,e),cn(e),l&4&&(Ta(3,e,e.return),Hi(3,e),Ta(5,e,e.return));break;case 1:rn(n,e),cn(e),l&512&&(Lt||a===null||Kn(a,a.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=qn;if(rn(n,e),cn(e),l&512&&(Lt||a===null||Kn(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[ui]||c[ue]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Ft(c,l,a),c[ue]=e,Xt(c),l=c;break e;case"link":var u=jf("link","href",r).get(l+(a.href||""));if(u){for(var g=0;g<u.length;g++)if(c=u[g],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(g,1);break t}}c=r.createElement(l),Ft(c,l,a),r.head.appendChild(c);break;case"meta":if(u=jf("meta","content",r).get(l+(a.content||""))){for(g=0;g<u.length;g++)if(c=u[g],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(g,1);break t}}c=r.createElement(l),Ft(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[ue]=e,Xt(c),l=c}e.stateNode=l}else wf(r,e.type,e.stateNode);else e.stateNode=vf(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?wf(r,e.type,e.stateNode):vf(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fc(e,e.memoizedProps,a.memoizedProps)}break;case 27:rn(n,e),cn(e),l&512&&(Lt||a===null||Kn(a,a.return)),a!==null&&l&4&&fc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(rn(n,e),cn(e),l&512&&(Lt||a===null||Kn(a,a.return)),e.flags&32){r=e.stateNode;try{kl(r,"")}catch(je){it(e,e.return,je)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,fc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(gc=!0);break;case 6:if(rn(n,e),cn(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(je){it(e,e.return,je)}}break;case 3:if(go=null,r=qn,qn=ho(n.containerInfo),rn(n,e),qn=r,cn(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ai(n.containerInfo)}catch(je){it(e,e.return,je)}gc&&(gc=!1,jm(e));break;case 4:l=qn,qn=ho(e.stateNode.containerInfo),rn(n,e),cn(e),qn=l;break;case 12:rn(n,e),cn(e);break;case 31:rn(n,e),cn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 13:rn(n,e),cn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(no=ye()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 22:r=e.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,Z=ca,P=Lt;if(ca=Z||r,Lt=P||C,rn(n,e),Lt=P,ca=Z,cn(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||C||ca||Lt||ml(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){C=a=n;try{if(c=C.stateNode,r)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{g=C.stateNode;var le=C.memoizedProps.style,V=le!=null&&le.hasOwnProperty("display")?le.display:null;g.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(je){it(C,C.return,je)}}}else if(n.tag===6){if(a===null){C=n;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(je){it(C,C.return,je)}}}else if(n.tag===18){if(a===null){C=n;try{var J=C.stateNode;r?uf(J,!0):uf(C.stateNode,!1)}catch(je){it(C,C.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,eo(e,a))));break;case 19:rn(n,e),cn(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 30:break;case 21:break;default:rn(n,e),cn(e)}}function cn(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(pm(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=hc(e);Is(e,c,r);break;case 5:var u=a.stateNode;a.flags&32&&(kl(u,""),a.flags&=-33);var g=hc(e);Is(e,g,u);break;case 3:case 4:var C=a.stateNode.containerInfo,Z=hc(e);xc(e,Z,C);break;default:throw Error(d(161))}}catch(P){it(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function jm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;jm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)hm(e,n.alternate,n),n=n.sibling}function ml(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),ml(n);break;case 1:Kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&dm(n,n.return,a),ml(n);break;case 27:Ki(n.stateNode);case 26:case 5:Kn(n,n.return),ml(n);break;case 22:n.memoizedState===null&&ml(n);break;case 30:ml(n);break;default:ml(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,u=c.flags;switch(c.tag){case 0:case 11:case 15:pa(r,c,a),Hi(4,c);break;case 1:if(pa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){it(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var g=l.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)Pu(C[r],g)}catch(Z){it(l,l.return,Z)}}a&&u&64&&cm(c),Li(c,c.return);break;case 27:mm(c);case 26:case 5:pa(r,c,a),a&&l===null&&u&4&&um(c),Li(c,c.return);break;case 12:pa(r,c,a);break;case 31:pa(r,c,a),a&&u&4&&bm(r,c);break;case 13:pa(r,c,a),a&&u&4&&ym(r,c);break;case 22:c.memoizedState===null&&pa(r,c,a),Li(c,c.return);break;case 30:break;default:pa(r,c,a)}n=n.sibling}}function bc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Ni(a))}function yc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ni(e))}function Bn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)wm(e,n,a,l),n=n.sibling}function wm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,a,l),r&2048&&Hi(9,n);break;case 1:Bn(e,n,a,l);break;case 3:Bn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ni(e)));break;case 12:if(r&2048){Bn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,u=c.id,g=c.onPostCommit;typeof g=="function"&&g(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){it(n,n.return,C)}}else Bn(e,n,a,l);break;case 31:Bn(e,n,a,l);break;case 13:Bn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,u=n.alternate,n.memoizedState!==null?c._visibility&2?Bn(e,n,a,l):qi(e,n):c._visibility&2?Bn(e,n,a,l):(c._visibility|=2,Zl(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&bc(u,n);break;case 24:Bn(e,n,a,l),r&2048&&yc(n.alternate,n);break;default:Bn(e,n,a,l)}}function Zl(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,u=n,g=a,C=l,Z=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(c,u,g,C,r),Hi(8,u);break;case 23:break;case 22:var P=u.stateNode;u.memoizedState!==null?P._visibility&2?Zl(c,u,g,C,r):qi(c,u):(P._visibility|=2,Zl(c,u,g,C,r)),r&&Z&2048&&bc(u.alternate,u);break;case 24:Zl(c,u,g,C,r),r&&Z&2048&&yc(u.alternate,u);break;default:Zl(c,u,g,C,r)}n=n.sibling}}function qi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:qi(a,l),r&2048&&bc(l.alternate,l);break;case 24:qi(a,l),r&2048&&yc(l.alternate,l);break;default:qi(a,l)}n=n.sibling}}var Bi=8192;function Kl(e,n,a){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)_m(e,n,a),e=e.sibling}function _m(e,n,a){switch(e.tag){case 26:Kl(e,n,a),e.flags&Bi&&e.memoizedState!==null&&Db(a,qn,e.memoizedState,e.memoizedProps);break;case 5:Kl(e,n,a);break;case 3:case 4:var l=qn;qn=ho(e.stateNode.containerInfo),Kl(e,n,a),qn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Bi,Bi=16777216,Kl(e,n,a),Bi=l):Kl(e,n,a));break;default:Kl(e,n,a)}}function Nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Gi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Zt=l,km(l,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Sm(e),e=e.sibling}function Sm(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,to(e)):Gi(e);break;default:Gi(e)}}function to(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Zt=l,km(l,e)}Nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),to(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,to(n));break;default:to(n)}e=e.sibling}}function km(e,n){for(;Zt!==null;){var a=Zt;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ni(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Zt=l;else e:for(a=e;Zt!==null;){l=Zt;var r=l.sibling,c=l.return;if(xm(l),l===a){Zt=null;break e}if(r!==null){r.return=c,Zt=r;break e}Zt=c}}}var Kg={getCacheForType:function(e){var n=Vt(Ut),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Vt(Ut).controller.signal}},Vg=typeof WeakMap=="function"?WeakMap:Map,at=0,ht=null,$e=null,Je=0,lt=0,bn=null,Ea=!1,Vl=!1,vc=!1,ma=0,Ct=0,Ma=0,fl=0,jc=0,yn=0,Jl=0,Yi=null,dn=null,wc=!1,no=0,Cm=0,ao=1/0,lo=null,Da=null,Gt=0,Aa=null,Fl=null,fa=0,_c=0,Nc=null,zm=null,$i=0,Sc=null;function vn(){return(at&2)!==0&&Je!==0?Je&-Je:H.T!==null?Mc():fs()}function Tm(){if(yn===0)if((Je&536870912)===0||We){var e=mn;mn<<=1,(mn&3932160)===0&&(mn=262144),yn=e}else yn=536870912;return e=xn.current,e!==null&&(e.flags|=32),yn}function un(e,n,a){(e===ht&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(Wl(e,0),Oa(e,Je,yn,!1)),et(e,a),((at&2)===0||e!==ht)&&(e===ht&&((at&2)===0&&(fl|=a),Ct===4&&Oa(e,Je,yn,!1)),Vn(e))}function Em(e,n,a){if((at&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||de(e,n),r=l?Wg(e,n):Cc(e,n,!0),c=l;do{if(r===0){Vl&&!l&&Oa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Jg(a)){r=Cc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var g=e;r=Yi;var C=g.current.memoizedState.isDehydrated;if(C&&(Wl(g,u).flags|=256),u=Cc(g,u,!1),u!==2){if(vc&&!C){g.errorRecoveryDisabledLanes|=c,fl|=c,r=4;break e}c=dn,dn=r,c!==null&&(dn===null?dn=c:dn.push.apply(dn,c))}r=u}if(c=!1,r!==2)continue}}if(r===1){Wl(e,0),Oa(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Oa(l,n,yn,!Ea);break e;case 2:dn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=no+300-ye(),10<r)){if(Oa(l,n,yn,!Ea),q(l,0,!0)!==0)break e;fa=n,l.timeoutHandle=rf(Mm.bind(null,l,a,dn,lo,wc,n,yn,fl,Jl,Ea,c,"Throttled",-0,0),r);break e}Mm(l,a,dn,lo,wc,n,yn,fl,Jl,Ea,c,null,-0,0)}}break}while(!0);Vn(e)}function Mm(e,n,a,l,r,c,u,g,C,Z,P,le,V,J){if(e.timeoutHandle=-1,le=n.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:In},_m(n,c,le);var je=(c&62914560)===c?no-ye():(c&4194048)===c?Cm-ye():0;if(je=Ab(le,je),je!==null){fa=c,e.cancelPendingCommit=je(qm.bind(null,e,n,c,a,l,r,u,g,C,P,le,null,V,J)),Oa(e,c,u,!Z);return}}qm(e,n,c,a,l,r,u,g,C)}function Jg(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!fn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Oa(e,n,a,l){n&=~jc,n&=~fl,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-mt(r),u=1<<c;l[c]=-1,r&=~u}a!==0&&ct(e,a,n)}function io(){return(at&6)===0?(Qi(0),!1):!0}function kc(){if($e!==null){if(lt===0)var e=$e.return;else e=$e,aa=il=null,Yr(e),Gl=null,ki=0,e=$e;for(;e!==null;)rm(e.alternate,e),e=e.return;$e=null}}function Wl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,kc(),ht=e,$e=a=ta(e.current,null),Je=n,lt=0,bn=null,Ea=!1,Vl=de(e,n),vc=!1,Jl=yn=jc=fl=Ma=Ct=0,dn=Yi=null,wc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-mt(l),c=1<<r;n|=e[r],l&=~c}return ma=n,ks(),a}function Dm(e,n){Le=null,H.H=Oi,n===Bl||n===Os?(n=Vu(),lt=3):n===Er?(n=Vu(),lt=4):lt=n===lc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,bn=n,$e===null&&(Ct=1,Vs(e,Tn(n,e.current)))}function Am(){var e=xn.current;return e===null?!0:(Je&4194048)===Je?An===null:(Je&62914560)===Je||(Je&536870912)!==0?e===An:!1}function Om(){var e=H.H;return H.H=Oi,e===null?Oi:e}function Um(){var e=H.A;return H.A=Kg,e}function so(){Ct=4,Ea||(Je&4194048)!==Je&&xn.current!==null||(Vl=!0),(Ma&134217727)===0&&(fl&134217727)===0||ht===null||Oa(ht,Je,yn,!1)}function Cc(e,n,a){var l=at;at|=2;var r=Om(),c=Um();(ht!==e||Je!==n)&&(lo=null,Wl(e,n)),n=!1;var u=Ct;e:do try{if(lt!==0&&$e!==null){var g=$e,C=bn;switch(lt){case 8:kc(),u=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(n=!0);var Z=lt;if(lt=0,bn=null,Pl(e,g,C,Z),a&&Vl){u=0;break e}break;default:Z=lt,lt=0,bn=null,Pl(e,g,C,Z)}}Fg(),u=Ct;break}catch(P){Dm(e,P)}while(!0);return n&&e.shellSuspendCounter++,aa=il=null,at=l,H.H=r,H.A=c,$e===null&&(ht=null,Je=0,ks()),u}function Fg(){for(;$e!==null;)Rm($e)}function Wg(e,n){var a=at;at|=2;var l=Om(),r=Um();ht!==e||Je!==n?(lo=null,ao=ye()+500,Wl(e,n)):Vl=de(e,n);e:do try{if(lt!==0&&$e!==null){n=$e;var c=bn;t:switch(lt){case 1:lt=0,bn=null,Pl(e,n,c,1);break;case 2:case 9:if(Zu(c)){lt=0,bn=null,Hm(n);break}n=function(){lt!==2&&lt!==9||ht!==e||(lt=7),Vn(e)},c.then(n,n);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Zu(c)?(lt=0,bn=null,Hm(n)):(lt=0,bn=null,Pl(e,n,c,7));break;case 5:var u=null;switch($e.tag){case 26:u=$e.memoizedState;case 5:case 27:var g=$e;if(u?_f(u):g.stateNode.complete){lt=0,bn=null;var C=g.sibling;if(C!==null)$e=C;else{var Z=g.return;Z!==null?($e=Z,oo(Z)):$e=null}break t}}lt=0,bn=null,Pl(e,n,c,5);break;case 6:lt=0,bn=null,Pl(e,n,c,6);break;case 8:kc(),Ct=6;break e;default:throw Error(d(462))}}Pg();break}catch(P){Dm(e,P)}while(!0);return aa=il=null,H.H=l,H.A=r,at=a,$e!==null?0:(ht=null,Je=0,ks(),Ct)}function Pg(){for(;$e!==null&&!pn();)Rm($e)}function Rm(e){var n=sm(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?oo(e):$e=n}function Hm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=em(a,n,n.pendingProps,n.type,void 0,Je);break;case 11:n=em(a,n,n.pendingProps,n.type.render,n.ref,Je);break;case 5:Yr(n);default:rm(a,n),n=$e=Uu(n,ma),n=sm(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?oo(e):$e=n}function Pl(e,n,a,l){aa=il=null,Yr(n),Gl=null,ki=0;var r=n.return;try{if(Bg(e,r,n,a,Je)){Ct=1,Vs(e,Tn(a,e.current)),$e=null;return}}catch(c){if(r!==null)throw $e=r,c;Ct=1,Vs(e,Tn(a,e.current)),$e=null;return}n.flags&32768?(We||l===1?e=!0:Vl||(Je&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=xn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Lm(n,e)):oo(n)}function oo(e){var n=e;do{if((n.flags&32768)!==0){Lm(n,Ea);return}e=n.return;var a=$g(n.alternate,n,ma);if(a!==null){$e=a;return}if(n=n.sibling,n!==null){$e=n;return}$e=n=e}while(n!==null);Ct===0&&(Ct=5)}function Lm(e,n){do{var a=Qg(e.alternate,e);if(a!==null){a.flags&=32767,$e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){$e=e;return}$e=e=a}while(e!==null);Ct=6,$e=null}function qm(e,n,a,l,r,c,u,g,C){e.cancelPendingCommit=null;do ro();while(Gt!==0);if((at&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=hr,ft(e,a,c,u,g,C),e===ht&&($e=ht=null,Je=0),Fl=n,Aa=e,fa=a,_c=c,Nc=r,zm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nb(Y,function(){return Qm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,r=F.p,F.p=2,u=at,at|=4;try{Xg(e,n,a)}finally{at=u,F.p=r,H.T=l}}Gt=1,Bm(),Gm(),Ym()}}function Bm(){if(Gt===1){Gt=0;var e=Aa,n=Fl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=F.p;F.p=2;var r=at;at|=4;try{vm(n,e);var c=qc,u=ku(e.containerInfo),g=c.focusedElem,C=c.selectionRange;if(u!==g&&g&&g.ownerDocument&&Su(g.ownerDocument.documentElement,g)){if(C!==null&&dr(g)){var Z=C.start,P=C.end;if(P===void 0&&(P=Z),"selectionStart"in g)g.selectionStart=Z,g.selectionEnd=Math.min(P,g.value.length);else{var le=g.ownerDocument||document,V=le&&le.defaultView||window;if(V.getSelection){var J=V.getSelection(),je=g.textContent.length,Me=Math.min(C.start,je),pt=C.end===void 0?Me:Math.min(C.end,je);!J.extend&&Me>pt&&(u=pt,pt=Me,Me=u);var B=Nu(g,Me),O=Nu(g,pt);if(B&&O&&(J.rangeCount!==1||J.anchorNode!==B.node||J.anchorOffset!==B.offset||J.focusNode!==O.node||J.focusOffset!==O.offset)){var X=le.createRange();X.setStart(B.node,B.offset),J.removeAllRanges(),Me>pt?(J.addRange(X),J.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),J.addRange(X))}}}}for(le=[],J=g;J=J.parentNode;)J.nodeType===1&&le.push({element:J,left:J.scrollLeft,top:J.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<le.length;g++){var ne=le[g];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}jo=!!Lc,qc=Lc=null}finally{at=r,F.p=l,H.T=a}}e.current=n,Gt=2}}function Gm(){if(Gt===2){Gt=0;var e=Aa,n=Fl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=F.p;F.p=2;var r=at;at|=4;try{hm(e,n.alternate,n)}finally{at=r,F.p=l,H.T=a}}Gt=3}}function Ym(){if(Gt===4||Gt===3){Gt=0,M();var e=Aa,n=Fl,a=fa,l=zm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Gt=5:(Gt=0,Fl=Aa=null,$m(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Da=null),Sn(a),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ke,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,r=F.p,F.p=2,H.T=null;try{for(var c=e.onRecoverableError,u=0;u<l.length;u++){var g=l[u];c(g.value,{componentStack:g.stack})}}finally{H.T=n,F.p=r}}(fa&3)!==0&&ro(),Vn(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Sc?$i++:($i=0,Sc=e):$i=0,Qi(0)}}function $m(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ni(n)))}function ro(){return Bm(),Gm(),Ym(),Qm()}function Qm(){if(Gt!==5)return!1;var e=Aa,n=_c;_c=0;var a=Sn(fa),l=H.T,r=F.p;try{F.p=32>a?32:a,H.T=null,a=Nc,Nc=null;var c=Aa,u=fa;if(Gt=0,Fl=Aa=null,fa=0,(at&6)!==0)throw Error(d(331));var g=at;if(at|=4,Sm(c.current),wm(c,c.current,u,a),at=g,Qi(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ke,c)}catch{}return!0}finally{F.p=r,H.T=l,$m(e,n)}}function Xm(e,n,a){n=Tn(a,n),n=ac(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(et(e,2),Vn(e))}function it(e,n,a){if(e.tag===3)Xm(e,e,a);else for(;n!==null;){if(n.tag===3){Xm(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Da===null||!Da.has(l))){e=Tn(a,e),a=Zp(2),l=ka(n,a,2),l!==null&&(Kp(a,l,n,e),et(l,2),Vn(l));break}}n=n.return}}function zc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Vg;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(vc=!0,r.add(a),e=Ig.bind(null,e,n,a),n.then(e,e))}function Ig(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Je&a)===a&&(Ct===4||Ct===3&&(Je&62914560)===Je&&300>ye()-no?(at&2)===0&&Wl(e,0):jc|=a,Jl===Je&&(Jl=0)),Vn(e)}function Zm(e,n){n===0&&(n=Re()),e=nl(e,n),e!==null&&(et(e,n),Vn(e))}function eb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Zm(e,a)}function tb(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),Zm(e,a)}function nb(e,n){return Bt(e,n)}var co=null,Il=null,Tc=!1,uo=!1,Ec=!1,Ua=0;function Vn(e){e!==Il&&e.next===null&&(Il===null?co=Il=e:Il=Il.next=e),uo=!0,Tc||(Tc=!0,lb())}function Qi(e,n){if(!Ec&&uo){Ec=!0;do for(var a=!1,l=co;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var u=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-mt(42|e)+1)-1,c&=r&~(u&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Fm(l,c))}else c=Je,c=q(l,l===ht?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||de(l,c)||(a=!0,Fm(l,c));l=l.next}while(a);Ec=!1}}function ab(){Km()}function Km(){uo=Tc=!1;var e=0;Ua!==0&&fb()&&(e=Ua);for(var n=ye(),a=null,l=co;l!==null;){var r=l.next,c=Vm(l,n);c===0?(l.next=null,a===null?co=r:a.next=r,r===null&&(Il=a)):(a=l,(e!==0||(c&3)!==0)&&(uo=!0)),l=r}Gt!==0&&Gt!==5||Qi(e),Ua!==0&&(Ua=0)}function Vm(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-mt(c),g=1<<u,C=r[u];C===-1?((g&a)===0||(g&l)!==0)&&(r[u]=se(g,n)):C<=n&&(e.expiredLanes|=g),c&=~g}if(n=ht,a=Je,a=q(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&jt(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||de(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&jt(l),Sn(a)){case 2:case 8:a=rt;break;case 32:a=Y;break;case 268435456:a=_e;break;default:a=Y}return l=Jm.bind(null,e),a=Bt(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&jt(l),e.callbackPriority=2,e.callbackNode=null,2}function Jm(e,n){if(Gt!==0&&Gt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ro()&&e.callbackNode!==a)return null;var l=Je;return l=q(e,e===ht?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Em(e,l,n),Vm(e,ye()),e.callbackNode!=null&&e.callbackNode===a?Jm.bind(null,e):null)}function Fm(e,n){if(ro())return null;Em(e,n,!0)}function lb(){xb(function(){(at&6)!==0?Bt(ve,ab):Km()})}function Mc(){if(Ua===0){var e=Ll;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Ua=e}return Ua}function Wm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function Pm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ib(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=Wm((r[Ce]||null).action),u=l.submitter;u&&(n=(n=u[Ce]||null)?Wm(n.formAction):u.getAttribute("formAction"),n!==null&&(c=n,u=null));var g=new ws("action","action",null,l,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var C=u?Pm(r,u):new FormData(r);Wr(a,{pending:!0,data:C,method:r.method,action:c},null,C)}}else typeof c=="function"&&(g.preventDefault(),C=u?Pm(r,u):new FormData(r),Wr(a,{pending:!0,data:C,method:r.method,action:c},c,C))},currentTarget:r}]})}}for(var Dc=0;Dc<fr.length;Dc++){var Ac=fr[Dc],sb=Ac.toLowerCase(),ob=Ac[0].toUpperCase()+Ac.slice(1);Ln(sb,"on"+ob)}Ln(Tu,"onAnimationEnd"),Ln(Eu,"onAnimationIteration"),Ln(Mu,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(_g,"onTransitionRun"),Ln(Ng,"onTransitionStart"),Ln(Sg,"onTransitionCancel"),Ln(Du,"onTransitionEnd"),Nl("onMouseEnter",["mouseout","mouseover"]),Nl("onMouseLeave",["mouseout","mouseover"]),Nl("onPointerEnter",["pointerout","pointerover"]),Nl("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Im(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var u=l.length-1;0<=u;u--){var g=l[u],C=g.instance,Z=g.currentTarget;if(g=g.listener,C!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(P){Ss(P)}r.currentTarget=null,c=C}else for(u=0;u<l.length;u++){if(g=l[u],C=g.instance,Z=g.currentTarget,g=g.listener,C!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(P){Ss(P)}r.currentTarget=null,c=C}}}}function Qe(e,n){var a=n[$n];a===void 0&&(a=n[$n]=new Set);var l=e+"__bubble";a.has(l)||(ef(n,e,2,!1),a.add(l))}function Oc(e,n,a){var l=0;n&&(l|=4),ef(a,e,l,n)}var po="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[po]){e[po]=!0,Kd.forEach(function(a){a!=="selectionchange"&&(rb.has(a)||Oc(a,!1,e),Oc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[po]||(n[po]=!0,Oc("selectionchange",!1,n))}}function ef(e,n,a,l){switch(Ef(n)){case 2:var r=Rb;break;case 8:r=Hb;break;default:r=Fc}a=r.bind(null,n,a,e),r=void 0,!tr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Rc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var g=l.stateNode.containerInfo;if(g===r)break;if(u===4)for(u=l.return;u!==null;){var C=u.tag;if((C===3||C===4)&&u.stateNode.containerInfo===r)return;u=u.return}for(;g!==null;){if(u=jl(g),u===null)return;if(C=u.tag,C===5||C===6||C===26||C===27){l=c=u;continue e}g=g.parentNode}}l=l.return}iu(function(){var Z=c,P=Io(a),le=[];e:{var V=Au.get(e);if(V!==void 0){var J=ws,je=e;switch(e){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":J=tg;break;case"focusin":je="focus",J=ir;break;case"focusout":je="blur",J=ir;break;case"beforeblur":case"afterblur":J=ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":J=ru;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":J=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":J=lg;break;case Tu:case Eu:case Mu:J=Zx;break;case Du:J=sg;break;case"scroll":case"scrollend":J=Gx;break;case"wheel":J=rg;break;case"copy":case"cut":case"paste":J=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":J=du;break;case"toggle":case"beforetoggle":J=dg}var Me=(n&4)!==0,pt=!Me&&(e==="scroll"||e==="scrollend"),B=Me?V!==null?V+"Capture":null:V;Me=[];for(var O=Z,X;O!==null;){var ne=O;if(X=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||X===null||B===null||(ne=mi(O,B),ne!=null&&Me.push(Zi(O,ne,X))),pt)break;O=O.return}0<Me.length&&(V=new J(V,je,null,a,P),le.push({event:V,listeners:Me}))}}if((n&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",J=e==="mouseout"||e==="pointerout",V&&a!==Po&&(je=a.relatedTarget||a.fromElement)&&(jl(je)||je[xt]))break e;if((J||V)&&(V=P.window===P?P:(V=P.ownerDocument)?V.defaultView||V.parentWindow:window,J?(je=a.relatedTarget||a.toElement,J=Z,je=je?jl(je):null,je!==null&&(pt=h(je),Me=je.tag,je!==pt||Me!==5&&Me!==27&&Me!==6)&&(je=null)):(J=null,je=Z),J!==je)){if(Me=ru,ne="onMouseLeave",B="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Me=du,ne="onPointerLeave",B="onPointerEnter",O="pointer"),pt=J==null?V:pi(J),X=je==null?V:pi(je),V=new Me(ne,O+"leave",J,a,P),V.target=pt,V.relatedTarget=X,ne=null,jl(P)===Z&&(Me=new Me(B,O+"enter",je,a,P),Me.target=X,Me.relatedTarget=pt,ne=Me),pt=ne,J&&je)t:{for(Me=cb,B=J,O=je,X=0,ne=B;ne;ne=Me(ne))X++;ne=0;for(var Te=O;Te;Te=Me(Te))ne++;for(;0<X-ne;)B=Me(B),X--;for(;0<ne-X;)O=Me(O),ne--;for(;X--;){if(B===O||O!==null&&B===O.alternate){Me=B;break t}B=Me(B),O=Me(O)}Me=null}else Me=null;J!==null&&tf(le,V,J,Me,!1),je!==null&&pt!==null&&tf(le,pt,je,Me,!0)}}e:{if(V=Z?pi(Z):window,J=V.nodeName&&V.nodeName.toLowerCase(),J==="select"||J==="input"&&V.type==="file")var tt=bu;else if(xu(V))if(yu)tt=vg;else{tt=bg;var ke=gg}else J=V.nodeName,!J||J.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?Z&&Wo(Z.elementType)&&(tt=bu):tt=yg;if(tt&&(tt=tt(e,Z))){gu(le,tt,a,P);break e}ke&&ke(e,V,Z),e==="focusout"&&Z&&V.type==="number"&&Z.memoizedProps.value!=null&&Fo(V,"number",V.value)}switch(ke=Z?pi(Z):window,e){case"focusin":(xu(ke)||ke.contentEditable==="true")&&(El=ke,ur=Z,ji=null);break;case"focusout":ji=ur=El=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,Cu(le,a,P);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":Cu(le,a,P)}var Ge;if(or)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Tl?fu(e,a)&&(Fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Fe="onCompositionStart");Fe&&(uu&&a.locale!=="ko"&&(Tl||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Tl&&(Ge=su()):(ya=P,nr="value"in ya?ya.value:ya.textContent,Tl=!0)),ke=mo(Z,Fe),0<ke.length&&(Fe=new cu(Fe,e,null,a,P),le.push({event:Fe,listeners:ke}),Ge?Fe.data=Ge:(Ge=hu(a),Ge!==null&&(Fe.data=Ge)))),(Ge=pg?mg(e,a):fg(e,a))&&(Fe=mo(Z,"onBeforeInput"),0<Fe.length&&(ke=new cu("onBeforeInput","beforeinput",null,a,P),le.push({event:ke,listeners:Fe}),ke.data=Ge)),ib(le,e,Z,a,P)}Im(le,n)})}function Zi(e,n,a){return{instance:e,listener:n,currentTarget:a}}function mo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=mi(e,a),r!=null&&l.unshift(Zi(e,r,c)),r=mi(e,n),r!=null&&l.push(Zi(e,r,c))),e.tag===3)return l;e=e.return}return[]}function cb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function tf(e,n,a,l,r){for(var c=n._reactName,u=[];a!==null&&a!==l;){var g=a,C=g.alternate,Z=g.stateNode;if(g=g.tag,C!==null&&C===l)break;g!==5&&g!==26&&g!==27||Z===null||(C=Z,r?(Z=mi(a,c),Z!=null&&u.unshift(Zi(a,Z,C))):r||(Z=mi(a,c),Z!=null&&u.push(Zi(a,Z,C)))),a=a.return}u.length!==0&&e.push({event:n,listeners:u})}var db=/\r\n?/g,ub=/\u0000|\uFFFD/g;function nf(e){return(typeof e=="string"?e:""+e).replace(db,`
`).replace(ub,"")}function af(e,n){return n=nf(n),nf(e)===n}function ut(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||kl(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&kl(e,""+l);break;case"className":xs(e,"class",l);break;case"tabIndex":xs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xs(e,a,l);break;case"style":au(e,l,c);break;case"data":if(n!=="object"){xs(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=bs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ut(e,n,"name",r.name,r,null),ut(e,n,"formEncType",r.formEncType,r,null),ut(e,n,"formMethod",r.formMethod,r,null),ut(e,n,"formTarget",r.formTarget,r,null)):(ut(e,n,"encType",r.encType,r,null),ut(e,n,"method",r.method,r,null),ut(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=bs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=In);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Qe("beforetoggle",e),Qe("toggle",e),hs(e,"popover",l);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qx.get(a)||a,hs(e,a,l))}}function Hc(e,n,a,l,r,c){switch(a){case"style":au(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?kl(e,l):(typeof l=="number"||typeof l=="bigint")&&kl(e,""+l);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=In);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[Ce]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):hs(e,a,l)}}}function Ft(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",e),Qe("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var u=a[c];if(u!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,c,u,a,null)}}r&&ut(e,n,"srcSet",a.srcSet,a,null),l&&ut(e,n,"src",a.src,a,null);return;case"input":Qe("invalid",e);var g=c=u=r=null,C=null,Z=null;for(l in a)if(a.hasOwnProperty(l)){var P=a[l];if(P!=null)switch(l){case"name":r=P;break;case"type":u=P;break;case"checked":C=P;break;case"defaultChecked":Z=P;break;case"value":c=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,n));break;default:ut(e,n,l,P,a,null)}}Id(e,c,g,C,Z,u,r,!1);return;case"select":Qe("invalid",e),l=u=c=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":u=g;break;case"multiple":l=g;default:ut(e,n,r,g,a,null)}n=c,a=u,e.multiple=!!l,n!=null?Sl(e,!!l,n,!1):a!=null&&Sl(e,!!l,a,!0);return;case"textarea":Qe("invalid",e),c=r=l=null;for(u in a)if(a.hasOwnProperty(u)&&(g=a[u],g!=null))switch(u){case"value":l=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:ut(e,n,u,g,a,null)}tu(e,l,r,c);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ut(e,n,C,l,a,null)}return;case"dialog":Qe("beforetoggle",e),Qe("toggle",e),Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":Qe("load",e);break;case"video":case"audio":for(l=0;l<Xi.length;l++)Qe(Xi[l],e);break;case"image":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"embed":case"source":case"link":Qe("error",e),Qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(l=a[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,Z,l,a,null)}return;default:if(Wo(n)){for(P in a)a.hasOwnProperty(P)&&(l=a[P],l!==void 0&&Hc(e,n,P,l,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null&&ut(e,n,g,l,a,null))}function pb(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,u=null,g=null,C=null,Z=null,P=null;for(J in a){var le=a[J];if(a.hasOwnProperty(J)&&le!=null)switch(J){case"checked":break;case"value":break;case"defaultValue":C=le;default:l.hasOwnProperty(J)||ut(e,n,J,null,l,le)}}for(var V in l){var J=l[V];if(le=a[V],l.hasOwnProperty(V)&&(J!=null||le!=null))switch(V){case"type":c=J;break;case"name":r=J;break;case"checked":Z=J;break;case"defaultChecked":P=J;break;case"value":u=J;break;case"defaultValue":g=J;break;case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:J!==le&&ut(e,n,V,J,l,le)}}Jo(e,u,g,C,Z,P,c,r);return;case"select":J=u=g=V=null;for(c in a)if(C=a[c],a.hasOwnProperty(c)&&C!=null)switch(c){case"value":break;case"multiple":J=C;default:l.hasOwnProperty(c)||ut(e,n,c,null,l,C)}for(r in l)if(c=l[r],C=a[r],l.hasOwnProperty(r)&&(c!=null||C!=null))switch(r){case"value":V=c;break;case"defaultValue":g=c;break;case"multiple":u=c;default:c!==C&&ut(e,n,r,c,l,C)}n=g,a=u,l=J,V!=null?Sl(e,!!a,V,!1):!!l!=!!a&&(n!=null?Sl(e,!!a,n,!0):Sl(e,!!a,a?[]:"",!1));return;case"textarea":J=V=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ut(e,n,g,null,l,r)}for(u in l)if(r=l[u],c=a[u],l.hasOwnProperty(u)&&(r!=null||c!=null))switch(u){case"value":V=r;break;case"defaultValue":J=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&ut(e,n,u,r,l,c)}eu(e,V,J);return;case"option":for(var je in a)if(V=a[je],a.hasOwnProperty(je)&&V!=null&&!l.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:ut(e,n,je,null,l,V)}for(C in l)if(V=l[C],J=a[C],l.hasOwnProperty(C)&&V!==J&&(V!=null||J!=null))switch(C){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:ut(e,n,C,V,l,J)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in a)V=a[Me],a.hasOwnProperty(Me)&&V!=null&&!l.hasOwnProperty(Me)&&ut(e,n,Me,null,l,V);for(Z in l)if(V=l[Z],J=a[Z],l.hasOwnProperty(Z)&&V!==J&&(V!=null||J!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,n));break;default:ut(e,n,Z,V,l,J)}return;default:if(Wo(n)){for(var pt in a)V=a[pt],a.hasOwnProperty(pt)&&V!==void 0&&!l.hasOwnProperty(pt)&&Hc(e,n,pt,void 0,l,V);for(P in l)V=l[P],J=a[P],!l.hasOwnProperty(P)||V===J||V===void 0&&J===void 0||Hc(e,n,P,V,l,J);return}}for(var B in a)V=a[B],a.hasOwnProperty(B)&&V!=null&&!l.hasOwnProperty(B)&&ut(e,n,B,null,l,V);for(le in l)V=l[le],J=a[le],!l.hasOwnProperty(le)||V===J||V==null&&J==null||ut(e,n,le,V,l,J)}function lf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,u=r.initiatorType,g=r.duration;if(c&&g&&lf(u)){for(u=0,g=r.responseEnd,l+=1;l<a.length;l++){var C=a[l],Z=C.startTime;if(Z>g)break;var P=C.transferSize,le=C.initiatorType;P&&lf(le)&&(C=C.responseEnd,u+=P*(C<g?1:(g-Z)/(C-Z)))}if(--l,n+=8*(c+u)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,qc=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function sf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function of(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function fb(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var rf=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,cf=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof cf<"u"?function(e){return cf.resolve(null).then(e).catch(gb)}:rf;function gb(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function df(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),ai(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ki(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ki(a);for(var c=a.firstChild;c;){var u=c.nextSibling,g=c.nodeName;c[ui]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=u}}else a==="body"&&Ki(e.ownerDocument.body);a=r}while(a);ai(n)}function uf(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Yc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),Ko(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function bb(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=On(e.nextSibling),e===null)break}return null}function yb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=On(e.nextSibling),e===null))return null;return e}function pf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=On(e.nextSibling),e===null))return null;return e}function $c(e){return e.data==="$?"||e.data==="$~"}function Qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function On(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xc=null;function mf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return On(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function ff(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function hf(e,n,a){switch(n=fo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Ki(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ko(e)}var Un=new Map,xf=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=F.d;F.d={f:jb,r:wb,D:_b,C:Nb,L:Sb,m:kb,X:zb,S:Cb,M:Tb};function jb(){var e=ha.f(),n=io();return e||n}function wb(e){var n=wl(e);n!==null&&n.tag===5&&n.type==="form"?Dp(n):ha.r(e)}var ei=typeof document>"u"?null:document;function gf(e,n,a){var l=ei;if(l&&typeof n=="string"&&n){var r=Cn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),xf.has(r)||(xf.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Ft(n,"link",e),Xt(n),l.head.appendChild(n)))}}function _b(e){ha.D(e),gf("dns-prefetch",e,null)}function Nb(e,n){ha.C(e,n),gf("preconnect",e,n)}function Sb(e,n,a){ha.L(e,n,a);var l=ei;if(l&&e&&n){var r='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Cn(a.imageSizes)+'"]')):r+='[href="'+Cn(e)+'"]';var c=r;switch(n){case"style":c=ti(e);break;case"script":c=ni(e)}Un.has(c)||(e=j({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Un.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Vi(c))||n==="script"&&l.querySelector(Ji(c))||(n=l.createElement("link"),Ft(n,"link",e),Xt(n),l.head.appendChild(n)))}}function kb(e,n){ha.m(e,n);var a=ei;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Cn(l)+'"][href="'+Cn(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ni(e)}if(!Un.has(c)&&(e=j({rel:"modulepreload",href:e},n),Un.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ji(c)))return}l=a.createElement("link"),Ft(l,"link",e),Xt(l),a.head.appendChild(l)}}}function Cb(e,n,a){ha.S(e,n,a);var l=ei;if(l&&e){var r=_l(l).hoistableStyles,c=ti(e);n=n||"default";var u=r.get(c);if(!u){var g={loading:0,preload:null};if(u=l.querySelector(Vi(c)))g.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Un.get(c))&&Zc(e,a);var C=u=l.createElement("link");Xt(C),Ft(C,"link",e),C._p=new Promise(function(Z,P){C.onload=Z,C.onerror=P}),C.addEventListener("load",function(){g.loading|=1}),C.addEventListener("error",function(){g.loading|=2}),g.loading|=4,xo(u,n,l)}u={type:"stylesheet",instance:u,count:1,state:g},r.set(c,u)}}}function zb(e,n){ha.X(e,n);var a=ei;if(a&&e){var l=_l(a).hoistableScripts,r=ni(e),c=l.get(r);c||(c=a.querySelector(Ji(r)),c||(e=j({src:e,async:!0},n),(n=Un.get(r))&&Kc(e,n),c=a.createElement("script"),Xt(c),Ft(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Tb(e,n){ha.M(e,n);var a=ei;if(a&&e){var l=_l(a).hoistableScripts,r=ni(e),c=l.get(r);c||(c=a.querySelector(Ji(r)),c||(e=j({src:e,async:!0,type:"module"},n),(n=Un.get(r))&&Kc(e,n),c=a.createElement("script"),Xt(c),Ft(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function bf(e,n,a,l){var r=(r=Se.current)?ho(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ti(a.href),a=_l(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ti(a.href);var c=_l(r).hoistableStyles,u=c.get(e);if(u||(r=r.ownerDocument||r,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=r.querySelector(Vi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),c||Eb(r,e,a,u.state))),n&&l===null)throw Error(d(528,""));return u}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ni(a),a=_l(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ti(e){return'href="'+Cn(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function yf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Eb(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Ft(n,"link",a),Xt(n),e.head.appendChild(n))}function ni(e){return'[src="'+Cn(e)+'"]'}function Ji(e){return"script[async]"+e}function vf(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Cn(a.href)+'"]');if(l)return n.instance=l,Xt(l),l;var r=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xt(l),Ft(l,"style",r),xo(l,a.precedence,e),n.instance=l;case"stylesheet":r=ti(a.href);var c=e.querySelector(Vi(r));if(c)return n.state.loading|=4,n.instance=c,Xt(c),c;l=yf(a),(r=Un.get(r))&&Zc(l,r),c=(e.ownerDocument||e).createElement("link"),Xt(c);var u=c;return u._p=new Promise(function(g,C){u.onload=g,u.onerror=C}),Ft(c,"link",l),n.state.loading|=4,xo(c,a.precedence,e),n.instance=c;case"script":return c=ni(a.src),(r=e.querySelector(Ji(c)))?(n.instance=r,Xt(r),r):(l=a,(r=Un.get(c))&&(l=j({},a),Kc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Xt(r),Ft(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,xo(l,a.precedence,e));return n.instance}function xo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,u=0;u<l.length;u++){var g=l[u];if(g.dataset.precedence===n)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var go=null;function jf(e,n,a){if(go===null){var l=new Map,r=go=new Map;r.set(a,l)}else r=go,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[ui]||c[ue]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(n)||"";u=e+u;var g=l.get(u);g?g.push(c):l.set(u,[c])}}return l}function wf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Mb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _f(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Db(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ti(l.href),c=n.querySelector(Vi(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Xt(c);return}c=n.ownerDocument||n,l=yf(l),(r=Un.get(r))&&Zc(l,r),c=c.createElement("link"),Xt(c);var u=c;u._p=new Promise(function(g,C){u.onload=g,u.onerror=C}),Ft(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vc=0;function Ab(e,n){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Vc===0&&(Vc=62500*mb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function vo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,n.forEach(Ob,e),yo=null,bo.call(e))}function Ob(e,n){if(!(n.state.loading&4)){var a=yo.get(e);if(a)var l=a.get(null);else{a=new Map,yo.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var u=r[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}r=n.instance,u=r.getAttribute("data-precedence"),c=a.get(u)||l,c===l&&a.set(null,r),a.set(u,r),this.count++,l=bo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Fi={$$typeof:U,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function Ub(e,n,a,l,r,c,u,g,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ve(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.hiddenUpdates=Ve(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Nf(e,n,a,l,r,c,u,g,C,Z,P,le){return e=new Ub(e,n,a,u,C,Z,P,le,g),n=1,c===!0&&(n|=24),c=hn(3,null,null,n),e.current=c,c.stateNode=e,n=Cr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Mr(c),e}function Sf(e){return e?(e=Al,e):Al}function kf(e,n,a,l,r,c){r=Sf(r),l.context===null?l.context=r:l.pendingContext=r,l=Sa(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=ka(e,l,n),a!==null&&(un(a,e,n),zi(a,e,n))}function Cf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jc(e,n){Cf(e,n),(e=e.alternate)&&Cf(e,n)}function zf(e){if(e.tag===13||e.tag===31){var n=nl(e,67108864);n!==null&&un(n,e,67108864),Jc(e,67108864)}}function Tf(e){if(e.tag===13||e.tag===31){var n=vn();n=ci(n);var a=nl(e,n);a!==null&&un(a,e,n),Jc(e,n)}}var jo=!0;function Rb(e,n,a,l){var r=H.T;H.T=null;var c=F.p;try{F.p=2,Fc(e,n,a,l)}finally{F.p=c,H.T=r}}function Hb(e,n,a,l){var r=H.T;H.T=null;var c=F.p;try{F.p=8,Fc(e,n,a,l)}finally{F.p=c,H.T=r}}function Fc(e,n,a,l){if(jo){var r=Wc(l);if(r===null)Rc(e,n,l,wo,a),Mf(e,l);else if(qb(r,e,n,a,l))l.stopPropagation();else if(Mf(e,l),n&4&&-1<Lb.indexOf(e)){for(;r!==null;){var c=wl(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=ln(c.pendingLanes);if(u!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;u;){var C=1<<31-mt(u);g.entanglements[1]|=C,u&=~C}Vn(c),(at&6)===0&&(ao=ye()+500,Qi(0))}}break;case 31:case 13:g=nl(c,2),g!==null&&un(g,c,2),io(),Jc(c,2)}if(c=Wc(l),c===null&&Rc(e,n,l,wo,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Rc(e,n,l,null,a)}}function Wc(e){return e=Io(e),Pc(e)}var wo=null;function Pc(e){if(wo=null,e=jl(e),e!==null){var n=h(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=m(n),e!==null)return e;e=null}else if(a===31){if(e=S(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wo=e,null}function Ef(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Be()){case ve:return 2;case rt:return 8;case Y:case Ne:return 32;case _e:return 268435456;default:return 32}default:return 32}}var Ic=!1,Ha=null,La=null,qa=null,Wi=new Map,Pi=new Map,Ba=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Mf(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(n.pointerId)}}function Ii(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=wl(n),n!==null&&zf(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function qb(e,n,a,l,r){switch(n){case"focusin":return Ha=Ii(Ha,e,n,a,l,r),!0;case"dragenter":return La=Ii(La,e,n,a,l,r),!0;case"mouseover":return qa=Ii(qa,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return Wi.set(c,Ii(Wi.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Pi.set(c,Ii(Pi.get(c)||null,e,n,a,l,r)),!0}return!1}function Df(e){var n=jl(e.target);if(n!==null){var a=h(n);if(a!==null){if(n=a.tag,n===13){if(n=m(a),n!==null){e.blockedOn=n,b(e.priority,function(){Tf(a)});return}}else if(n===31){if(n=S(a),n!==null){e.blockedOn=n,b(e.priority,function(){Tf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _o(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Po=l,a.target.dispatchEvent(l),Po=null}else return n=wl(a),n!==null&&zf(n),e.blockedOn=a,!1;n.shift()}return!0}function Af(e,n,a){_o(e)&&a.delete(n)}function Bb(){Ic=!1,Ha!==null&&_o(Ha)&&(Ha=null),La!==null&&_o(La)&&(La=null),qa!==null&&_o(qa)&&(qa=null),Wi.forEach(Af),Pi.forEach(Af)}function No(e,n){e.blockedOn===n&&(e.blockedOn=null,Ic||(Ic=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bb)))}var So=null;function Of(e){So!==e&&(So=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){So===e&&(So=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Pc(l||a)===null)continue;break}var c=wl(a);c!==null&&(e.splice(n,3),n-=3,Wr(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function ai(e){function n(C){return No(C,e)}Ha!==null&&No(Ha,e),La!==null&&No(La,e),qa!==null&&No(qa,e),Wi.forEach(n),Pi.forEach(n);for(var a=0;a<Ba.length;a++){var l=Ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Df(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],u=r[Ce]||null;if(typeof c=="function")u||Of(a);else if(u){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,u=c[Ce]||null)g=u.formAction;else if(Pc(r)!==null)continue}else g=u.action;typeof g=="function"?a[l+1]=g:(a.splice(l,3),l-=3),Of(a)}}}function Uf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return r=u})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function ed(e){this._internalRoot=e}ko.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=vn();kf(a,l,e,n,null,null)},ko.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kf(e.current,2,null,e,null,null),io(),n[xt]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var n=fs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Df(e)}};var Rf=i.version;if(Rf!=="19.2.6")throw Error(d(527,Rf,"19.2.6"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=x(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Ke=Co.inject(Gb),Ye=Co}catch{}}return ts.createRoot=function(e,n){if(!p(e))throw Error(d(299));var a=!1,l="",r=Yp,c=$p,u=Qp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Nf(e,1,!1,null,null,a,l,null,r,c,u,Uf),e[xt]=n.current,Uc(e),new ed(n)},ts.hydrateRoot=function(e,n,a){if(!p(e))throw Error(d(299));var l=!1,r="",c=Yp,u=$p,g=Qp,C=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),n=Nf(e,1,!0,n,a??null,l,r,C,c,u,g,Uf),n.context=Sf(null),a=n.current,l=vn(),l=ci(l),r=Sa(l),r.callback=null,ka(a,r,l),a=l,n.current.lanes=a,et(n,a),Vn(n),e[xt]=n.current,Uc(e),new ko(n)},ts.version="19.2.6",ts}var Zf;function ey(){if(Zf)return ad.exports;Zf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ad.exports=Ib(),ad.exports}var ty=ey();Fh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},os.apply(this,arguments)}var Za;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Za||(Za={}));const Kf="popstate";function ny(s){s===void 0&&(s={});function i(p,h){let{pathname:m="/",search:S="",hash:v=""}=bl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),Sd("",{pathname:m,search:S,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(p,h){let m=p.document.querySelector("base"),S="";if(m&&m.getAttribute("href")){let v=p.location.href,x=v.indexOf("#");S=x===-1?v:v.slice(0,x)}return S+"#"+(typeof h=="string"?h:qo(h))}function d(p,h){$o(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return ly(i,o,d,s)}function Mt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function $o(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ay(){return Math.random().toString(36).substr(2,8)}function Vf(s,i){return{usr:s.state,key:s.key,idx:i}}function Sd(s,i,o,d){return o===void 0&&(o=null),os({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?bl(i):i,{state:o,key:i&&i.key||d||ay()})}function qo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function bl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ly(s,i,o,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,S=Za.Pop,v=null,x=y();x==null&&(x=0,m.replaceState(os({},m.state,{idx:x}),""));function y(){return(m.state||{idx:null}).idx}function j(){S=Za.Pop;let z=y(),G=z==null?null:z-x;x=z,v&&v({action:S,location:K.location,delta:G})}function T(z,G){S=Za.Push;let R=Sd(K.location,z,G);o&&o(R,z),x=y()+1;let U=Vf(R,x),I=K.createHref(R);try{m.pushState(U,"",I)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;p.location.assign(I)}h&&v&&v({action:S,location:K.location,delta:1})}function $(z,G){S=Za.Replace;let R=Sd(K.location,z,G);o&&o(R,z),x=y();let U=Vf(R,x),I=K.createHref(R);m.replaceState(U,"",I),h&&v&&v({action:S,location:K.location,delta:0})}function W(z){let G=p.location.origin!=="null"?p.location.origin:p.location.href,R=typeof z=="string"?z:qo(z);return R=R.replace(/ $/,"%20"),Mt(G,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,G)}let K={get action(){return S},get location(){return s(p,m)},listen(z){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Kf,j),v=z,()=>{p.removeEventListener(Kf,j),v=null}},createHref(z){return i(p,z)},createURL:W,encodeLocation(z){let G=W(z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:T,replace:$,go(z){return m.go(z)}};return K}var Jf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Jf||(Jf={}));function iy(s,i,o){return o===void 0&&(o="/"),sy(s,i,o)}function sy(s,i,o,d){let p=typeof i=="string"?bl(i):i,h=Ld(p.pathname||"/",o);if(h==null)return null;let m=Wh(s);oy(m);let S=null;for(let v=0;S==null&&v<m.length;++v){let x=yy(h);S=xy(m[v],x)}return S}function Wh(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let p=(h,m,S)=>{let v={relativePath:S===void 0?h.path||"":S,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};v.relativePath.startsWith("/")&&(Mt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let x=Ka([d,v.relativePath]),y=o.concat(v);h.children&&h.children.length>0&&(Mt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),Wh(h.children,i,y,x)),!(h.path==null&&!h.index)&&i.push({path:x,score:fy(x,h.index),routesMeta:y})};return s.forEach((h,m)=>{var S;if(h.path===""||!((S=h.path)!=null&&S.includes("?")))p(h,m);else for(let v of Ph(h.path))p(h,m,v)}),i}function Ph(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,p=o.endsWith("?"),h=o.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=Ph(d.join("/")),S=[];return S.push(...m.map(v=>v===""?h:[h,v].join("/"))),p&&S.push(...m),S.map(v=>s.startsWith("/")&&v===""?"/":v)}function oy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:hy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ry=/^:[\w-]+$/,cy=3,dy=2,uy=1,py=10,my=-2,Ff=s=>s==="*";function fy(s,i){let o=s.split("/"),d=o.length;return o.some(Ff)&&(d+=my),i&&(d+=dy),o.filter(p=>!Ff(p)).reduce((p,h)=>p+(ry.test(h)?cy:h===""?uy:py),d)}function hy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,p)=>d===i[p])?s[s.length-1]-i[i.length-1]:0}function xy(s,i,o){let{routesMeta:d}=s,p={},h="/",m=[];for(let S=0;S<d.length;++S){let v=d[S],x=S===d.length-1,y=h==="/"?i:i.slice(h.length)||"/",j=gy({path:v.relativePath,caseSensitive:v.caseSensitive,end:x},y),T=v.route;if(!j)return null;Object.assign(p,j.params),m.push({params:p,pathname:Ka([h,j.pathname]),pathnameBase:Ny(Ka([h,j.pathnameBase])),route:T}),j.pathnameBase!=="/"&&(h=Ka([h,j.pathnameBase]))}return m}function gy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=by(s.path,s.caseSensitive,s.end),p=i.match(o);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),S=p.slice(1);return{params:d.reduce((x,y,j)=>{let{paramName:T,isOptional:$}=y;if(T==="*"){let K=S[j]||"";m=h.slice(0,h.length-K.length).replace(/(.)\/+$/,"$1")}const W=S[j];return $&&!W?x[T]=void 0:x[T]=(W||"").replace(/%2F/g,"/"),x},{}),pathname:h,pathnameBase:m,pattern:s}}function by(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),$o(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,S,v)=>(d.push({paramName:S,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,i?void 0:"i"),d]}function yy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return $o(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Ld(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy=s=>vy.test(s);function wy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:p=""}=typeof s=="string"?bl(s):s,h;if(o)if(jy(o))h=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),$o(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?h=Wf(o.substring(1),"/"):h=Wf(o,i)}else h=i;return{pathname:h,search:Sy(d),hash:ky(p)}}function Wf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function od(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function _y(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function qd(s,i){let o=_y(s);return i?o.map((d,p)=>p===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Bd(s,i,o,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=bl(s):(p=os({},s),Mt(!p.pathname||!p.pathname.includes("?"),od("?","pathname","search",p)),Mt(!p.pathname||!p.pathname.includes("#"),od("#","pathname","hash",p)),Mt(!p.search||!p.search.includes("#"),od("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,S;if(m==null)S=o;else{let j=i.length-1;if(!d&&m.startsWith("..")){let T=m.split("/");for(;T[0]==="..";)T.shift(),j-=1;p.pathname=T.join("/")}S=j>=0?i[j]:"/"}let v=wy(p,S),x=m&&m!=="/"&&m.endsWith("/"),y=(h||m===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(x||y)&&(v.pathname+="/"),v}const Ka=s=>s.join("/").replace(/\/\/+/g,"/"),Ny=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ky=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ih=["post","put","patch","delete"];new Set(Ih);const zy=["get",...Ih];new Set(zy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},rs.apply(this,arguments)}const Gd=f.createContext(null),Ty=f.createContext(null),Ja=f.createContext(null),Qo=f.createContext(null),Fa=f.createContext({outlet:null,matches:[],isDataRoute:!1}),ex=f.createContext(null);function Ey(s,i){let{relative:o}=i===void 0?{}:i;oi()||Mt(!1);let{basename:d,navigator:p}=f.useContext(Ja),{hash:h,pathname:m,search:S}=nx(s,{relative:o}),v=m;return d!=="/"&&(v=m==="/"?d:Ka([d,m])),p.createHref({pathname:v,search:S,hash:h})}function oi(){return f.useContext(Qo)!=null}function Wn(){return oi()||Mt(!1),f.useContext(Qo).location}function tx(s){f.useContext(Ja).static||f.useLayoutEffect(s)}function Yd(){let{isDataRoute:s}=f.useContext(Fa);return s?$y():My()}function My(){oi()||Mt(!1);let s=f.useContext(Gd),{basename:i,future:o,navigator:d}=f.useContext(Ja),{matches:p}=f.useContext(Fa),{pathname:h}=Wn(),m=JSON.stringify(qd(p,o.v7_relativeSplatPath)),S=f.useRef(!1);return tx(()=>{S.current=!0}),f.useCallback(function(x,y){if(y===void 0&&(y={}),!S.current)return;if(typeof x=="number"){d.go(x);return}let j=Bd(x,JSON.parse(m),h,y.relative==="path");s==null&&i!=="/"&&(j.pathname=j.pathname==="/"?i:Ka([i,j.pathname])),(y.replace?d.replace:d.push)(j,y.state,y)},[i,d,m,h,s])}function nx(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(Ja),{matches:p}=f.useContext(Fa),{pathname:h}=Wn(),m=JSON.stringify(qd(p,d.v7_relativeSplatPath));return f.useMemo(()=>Bd(s,JSON.parse(m),h,o==="path"),[s,m,h,o])}function Dy(s,i){return Ay(s,i)}function Ay(s,i,o,d){oi()||Mt(!1);let{navigator:p}=f.useContext(Ja),{matches:h}=f.useContext(Fa),m=h[h.length-1],S=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let x=Wn(),y;if(i){var j;let z=typeof i=="string"?bl(i):i;v==="/"||(j=z.pathname)!=null&&j.startsWith(v)||Mt(!1),y=z}else y=x;let T=y.pathname||"/",$=T;if(v!=="/"){let z=v.replace(/^\//,"").split("/");$="/"+T.replace(/^\//,"").split("/").slice(z.length).join("/")}let W=iy(s,{pathname:$}),K=Ly(W&&W.map(z=>Object.assign({},z,{params:Object.assign({},S,z.params),pathname:Ka([v,p.encodeLocation?p.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?v:Ka([v,p.encodeLocation?p.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),h,o,d);return i&&K?f.createElement(Qo.Provider,{value:{location:rs({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Za.Pop}},K):K}function Oy(){let s=Yy(),i=Cy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:p},o):null,null)}const Uy=f.createElement(Oy,null);class Ry extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(Fa.Provider,{value:this.props.routeContext},f.createElement(ex.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(s){let{routeContext:i,match:o,children:d}=s,p=f.useContext(Gd);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(Fa.Provider,{value:i},d)}function Ly(s,i,o,d){var p;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var h;if(!o)return null;if(o.errors)s=o.matches;else if((h=d)!=null&&h.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,S=(p=o)==null?void 0:p.errors;if(S!=null){let y=m.findIndex(j=>j.route.id&&(S==null?void 0:S[j.route.id])!==void 0);y>=0||Mt(!1),m=m.slice(0,Math.min(m.length,y+1))}let v=!1,x=-1;if(o&&d&&d.v7_partialHydration)for(let y=0;y<m.length;y++){let j=m[y];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(x=y),j.route.id){let{loaderData:T,errors:$}=o,W=j.route.loader&&T[j.route.id]===void 0&&(!$||$[j.route.id]===void 0);if(j.route.lazy||W){v=!0,x>=0?m=m.slice(0,x+1):m=[m[0]];break}}}return m.reduceRight((y,j,T)=>{let $,W=!1,K=null,z=null;o&&($=S&&j.route.id?S[j.route.id]:void 0,K=j.route.errorElement||Uy,v&&(x<0&&T===0?(Qy("route-fallback"),W=!0,z=null):x===T&&(W=!0,z=j.route.hydrateFallbackElement||null)));let G=i.concat(m.slice(0,T+1)),R=()=>{let U;return $?U=K:W?U=z:j.route.Component?U=f.createElement(j.route.Component,null):j.route.element?U=j.route.element:U=y,f.createElement(Hy,{match:j,routeContext:{outlet:y,matches:G,isDataRoute:o!=null},children:U})};return o&&(j.route.ErrorBoundary||j.route.errorElement||T===0)?f.createElement(Ry,{location:o.location,revalidation:o.revalidation,component:K,error:$,children:R(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):R()},null)}var ax=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(ax||{}),lx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(lx||{});function qy(s){let i=f.useContext(Gd);return i||Mt(!1),i}function By(s){let i=f.useContext(Ty);return i||Mt(!1),i}function Gy(s){let i=f.useContext(Fa);return i||Mt(!1),i}function ix(s){let i=Gy(),o=i.matches[i.matches.length-1];return o.route.id||Mt(!1),o.route.id}function Yy(){var s;let i=f.useContext(ex),o=By(),d=ix();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function $y(){let{router:s}=qy(ax.UseNavigateStable),i=ix(lx.UseNavigateStable),o=f.useRef(!1);return tx(()=>{o.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,rs({fromRouteId:i},h)))},[s,i])}const Pf={};function Qy(s,i,o){Pf[s]||(Pf[s]=!0)}function Xy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function If(s){let{to:i,replace:o,state:d,relative:p}=s;oi()||Mt(!1);let{future:h,static:m}=f.useContext(Ja),{matches:S}=f.useContext(Fa),{pathname:v}=Wn(),x=Yd(),y=Bd(i,qd(S,h.v7_relativeSplatPath),v,p==="path"),j=JSON.stringify(y);return f.useEffect(()=>x(JSON.parse(j),{replace:o,state:d,relative:p}),[x,j,p,o,d]),null}function _t(s){Mt(!1)}function Zy(s){let{basename:i="/",children:o=null,location:d,navigationType:p=Za.Pop,navigator:h,static:m=!1,future:S}=s;oi()&&Mt(!1);let v=i.replace(/^\/*/,"/"),x=f.useMemo(()=>({basename:v,navigator:h,static:m,future:rs({v7_relativeSplatPath:!1},S)}),[v,S,h,m]);typeof d=="string"&&(d=bl(d));let{pathname:y="/",search:j="",hash:T="",state:$=null,key:W="default"}=d,K=f.useMemo(()=>{let z=Ld(y,v);return z==null?null:{location:{pathname:z,search:j,hash:T,state:$,key:W},navigationType:p}},[v,y,j,T,$,W,p]);return K==null?null:f.createElement(Ja.Provider,{value:x},f.createElement(Qo.Provider,{children:o,value:K}))}function Ky(s){let{children:i,location:o}=s;return Dy(kd(i),o)}new Promise(()=>{});function kd(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...i,p];if(d.type===f.Fragment){o.push.apply(o,kd(d.props.children,h));return}d.type!==_t&&Mt(!1),!d.props.index||!d.props.children||Mt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=kd(d.props.children,h)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cd(){return Cd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Cd.apply(this,arguments)}function Vy(s,i){if(s==null)return{};var o={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(i.indexOf(p)>=0)&&(o[p]=s[p]);return o}function Jy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Fy(s,i){return s.button===0&&(!i||i==="_self")&&!Jy(s)}const Wy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Py="6";try{window.__reactRouterVersion=Py}catch{}const Iy="startTransition",eh=Jb[Iy];function ev(s){let{basename:i,children:o,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=ny({window:p,v5Compat:!0}));let m=h.current,[S,v]=f.useState({action:m.action,location:m.location}),{v7_startTransition:x}=d||{},y=f.useCallback(j=>{x&&eh?eh(()=>v(j)):v(j)},[v,x]);return f.useLayoutEffect(()=>m.listen(y),[m,y]),f.useEffect(()=>Xy(d),[d]),f.createElement(Zy,{basename:i,children:o,location:S.location,navigationType:S.action,navigator:m,future:d})}const tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=f.forwardRef(function(i,o){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:S,target:v,to:x,preventScrollReset:y,viewTransition:j}=i,T=Vy(i,Wy),{basename:$}=f.useContext(Ja),W,K=!1;if(typeof x=="string"&&nv.test(x)&&(W=x,tv))try{let U=new URL(window.location.href),I=x.startsWith("//")?new URL(U.protocol+x):new URL(x),ie=Ld(I.pathname,$);I.origin===U.origin&&ie!=null?x=ie+I.search+I.hash:K=!0}catch{}let z=Ey(x,{relative:p}),G=lv(x,{replace:m,state:S,target:v,preventScrollReset:y,relative:p,viewTransition:j});function R(U){d&&d(U),U.defaultPrevented||G(U)}return f.createElement("a",Cd({},T,{href:W||z,onClick:K||h?d:R,ref:o,target:v}))});var th;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(th||(th={}));var nh;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(nh||(nh={}));function lv(s,i){let{target:o,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:S}=i===void 0?{}:i,v=Yd(),x=Wn(),y=nx(s,{relative:m});return f.useCallback(j=>{if(Fy(j,o)){j.preventDefault();let T=d!==void 0?d:qo(x)===qo(y);v(s,{replace:T,state:p,preventScrollReset:h,relative:m,viewTransition:S})}},[x,v,y,d,p,o,s,h,m,S])}function Dt(){const s=Yd();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function iv(){return Wn().pathname}function sv({href:s,...i}){return t.jsx(av,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),sx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,...S},v)=>f.createElement("svg",{ref:v,...rv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:sx("lucide",p),...S},[...m.map(([x,y])=>f.createElement(x,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(s,i)=>{const o=f.forwardRef(({className:d,...p},h)=>f.createElement(cv,{ref:h,iconNode:i,className:sx(`lucide-${ov(s)}`,d),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=be("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=be("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=be("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=be("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=be("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=be("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=be("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=be("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=be("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=be("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=be("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=be("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=be("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=be("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=be("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Xv="/api/v3";var Jh;const xe=typeof window<"u"&&((Jh=window.settings)==null?void 0:Jh.secure_path)||"ZicFree123",Lo="authorization";function Zv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let p=o[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(i)===0)try{const h=p.substring(i.length,p.length),m=decodeURIComponent(h),S=JSON.parse(m);return S&&typeof S=="object"&&"value"in S?S.value:m}catch{try{return decodeURIComponent(p.substring(i.length,p.length))}catch{return p.substring(i.length,p.length)}}}return null}function Kv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:i}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",S=new Date;S.setTime(S.getTime()+o*24*60*60*1e3);const v=`expires=${S.toUTCString()}`,x=m?"":`domain=${window.location.hostname};`;let y=`${s}=${encodeURIComponent(p)}; ${v}; ${x} path=/`;h&&(y+="; secure"),y+="; SameSite=Lax",document.cookie=y;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function Vv(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function ux(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Lo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Lo,s)}catch{}if(!s&&(s=Zv("auth_data"),s))try{window.localStorage.setItem(Lo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Jv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${Xv}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function At(){return!!ux()}function Fv(s){typeof window>"u"||(window.localStorage.setItem(Lo,s),window.localStorage.setItem("auth_data",s),Kv("auth_data",s,36500))}function px(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{o.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Vv(p)})}async function fe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const v=ux();v&&(o.authorization=v)}const p=await fetch(Jv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),S=m?await p.json():await p.text();if(!p.ok){const v=typeof S=="object"&&S&&"message"in S?String(S.message):`Request failed with status ${p.status}`,x=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(v);throw(p.status===401||p.status===403&&!x)&&i.auth!==!1&&(px(),window.location.hash="/login"),new Error(v)}if(!m&&typeof S=="string"&&(S.trim().startsWith("<!DOCTYPE html")||S.trim().startsWith("<html")||S.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return S}async function Wv(s,i){return fe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function Pv(){const s=`/${xe}/stat`,[i,o,d,p,h,m]=await Promise.all([fe(`${s}/getOverride`),fe(`${s}/getOrder`),fe(`${s}/getServerTodayRank`),fe(`${s}/getServerLastRank`),fe(`${s}/getUserTodayRank`),fe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function mx(){return(await fe(`/${xe}/config/fetch`)).data}async function fx(s){return fe(`/${xe}/config/save`,{method:"POST",body:s})}async function Iv(){return(await fe(`/${xe}/config/getEmailTemplate`)).data}async function e1(){return(await fe(`/${xe}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function t1(){return fe(`/${xe}/config/testSendMail`,{method:"POST",body:{}})}async function n1(s){return fe(`/${xe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function a1(){return(await fe(`/${xe}/payment/fetch`)).data}async function l1(){return(await fe(`/${xe}/payment/getPaymentMethods`)).data}async function mh(s,i){return(await fe(`/${xe}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function i1(s){return fe(`/${xe}/payment/save`,{method:"POST",body:s})}async function s1(s){return fe(`/${xe}/payment/show`,{method:"POST",body:{id:s}})}async function o1(s){return fe(`/${xe}/payment/drop`,{method:"POST",body:{id:s}})}async function r1(s){return fe(`/${xe}/payment/sort`,{method:"POST",body:{ids:s}})}async function c1(){return(await fe(`/${xe}/theme/getThemes`)).data}async function d1(s){return(await fe(`/${xe}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function u1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return fe(`/${xe}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ps(){return(await fe(`/${xe}/server/group/fetch`)).data}async function hx(s){return fe(`/${xe}/server/group/save`,{method:"POST",body:s})}async function p1(s){return fe(`/${xe}/server/group/drop`,{method:"POST",body:{id:s}})}const xx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function gx(){return(await fe(`/${xe}/server/route/fetch`)).data}async function m1(s){return fe(`/${xe}/server/route/save`,{method:"POST",body:s})}async function f1(s){return fe(`/${xe}/server/route/drop`,{method:"POST",body:{id:s}})}async function yl(){return(await fe(`/${xe}/plan/fetch`)).data}async function h1(s){return fe(`/${xe}/plan/save`,{method:"POST",body:s})}async function x1(s){return fe(`/${xe}/plan/drop`,{method:"POST",body:{id:s}})}async function cd(s,i){return fe(`/${xe}/plan/update`,{method:"POST",body:{id:s,...i}})}async function fh(s){return fe(`/${xe}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function g1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{i.set(`filter[${p}][key]`,d.key),i.set(`filter[${p}][condition]`,d.condition),i.set(`filter[${p}][value]`,d.value)}),await fe(`/${xe}/order/fetch?${i.toString()}`)}async function b1(s){return fe(`/${xe}/order/paid`,{method:"POST",body:{trade_no:s}})}async function y1(s){return fe(`/${xe}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function bx(s){return fe(`/${xe}/order/assign`,{method:"POST",body:s})}async function v1(s,i){return fe(`/${xe}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function j1(s){return fe(`/${xe}/order/detail`,{method:"POST",body:{id:s}})}async function yx(s=1,i=15){return fe(`/${xe}/coupon/fetch?current=${s}&pageSize=${i}`)}async function w1(s){return fe(`/${xe}/coupon/generate`,{method:"POST",body:s})}async function _1(s){return fe(`/${xe}/coupon/drop`,{method:"POST",body:{id:s}})}async function N1(s){return fe(`/${xe}/coupon/show`,{method:"POST",body:{id:s}})}async function S1(s=1,i=15){return fe(`/${xe}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function k1(s){return fe(`/${xe}/giftcard/generate`,{method:"POST",body:s})}async function C1(s){return fe(`/${xe}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Dd(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),fe(`/${xe}/user/fetch?${d.toString()}`)}async function z1(s){return fe(`/${xe}/user/update`,{method:"POST",body:s})}async function vx(s){return fe(`/${xe}/user/getUserInfoById`,{params:{id:s}})}async function T1(s){return fe(`/${xe}/user/delUser`,{method:"POST",body:{id:s}})}async function E1(s){return fe(`/${xe}/user/generate`,{method:"POST",body:s})}async function M1(s){return fe(`/${xe}/user/resetSecret`,{method:"POST",body:{id:s}})}async function D1(s=1,i=15,o,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(i)),d&&p.set("include_subscribe_url","1"),o==null||o.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),fe(`/${xe}/subscription/fetch?${p.toString()}`)}async function A1(s){return fe(`/${xe}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function O1(s){return fe(`/${xe}/subscription/update`,{method:"POST",body:s})}async function U1(s){return fe(`/${xe}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function jx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),fe(`/${xe}/device/fetch?${d.toString()}`)}async function wx(s){return fe(`/${xe}/device/drop`,{method:"POST",body:{id:s}})}async function _x(s){return fe(`/${xe}/device/ban`,{method:"POST",body:{id:s}})}async function R1(s){return fe(`/${xe}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function H1(s,i=1,o=10){return fe(`/${xe}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function L1(){return(await fe(`/${xe}/notice/fetch`)).data}async function q1(s){return fe(`/${xe}/notice/save`,{method:"POST",body:s})}async function B1(s){return fe(`/${xe}/notice/drop`,{method:"POST",body:{id:s}})}async function G1(s){return fe(`/${xe}/notice/show`,{method:"POST",body:{id:s}})}async function Y1(){return(await fe(`/${xe}/ticket/fetch`)).data}async function hh(s){return(await fe(`/${xe}/ticket/fetch`,{params:{id:s}})).data}async function $1(s,i){return fe(`/${xe}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function Q1(s){return fe(`/${xe}/ticket/close`,{method:"POST",body:{id:s}})}async function X1(){return(await fe(`/${xe}/knowledge/fetch`)).data}async function Z1(s){return(await fe(`/${xe}/knowledge/fetch`,{params:{id:s}})).data}async function K1(s){return fe(`/${xe}/knowledge/save`,{method:"POST",body:s})}async function V1(s){return fe(`/${xe}/knowledge/drop`,{method:"POST",body:{id:s}})}async function J1(s){return fe(`/${xe}/knowledge/show`,{method:"POST",body:{id:s}})}async function F1(){return(await fe(`/${xe}/webcon/fetch`)).data}async function W1(s){return fe(`/${xe}/webcon/save`,{method:"POST",body:s})}async function P1(s){return fe(`/${xe}/webcon/drop`,{method:"POST",body:{id:s}})}async function I1(s){return fe(`/${xe}/webcon/show`,{method:"POST",body:{id:s}})}async function e0(){return fe(`/${xe}/system/getSystemStatus`)}async function t0(){return(await fe(`/${xe}/system/getCoreLicenseStatus`)).data}async function n0(){return(await fe(`/${xe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function a0(){return fe(`/${xe}/system/getQueueStats`)}async function l0(){return fe(`/${xe}/system/getQueueWorkload`)}async function i0(){return fe(`/${xe}/system/getSystemLog`)}async function xh(){return fe(`/${xe}/server/manage/getNodes`)}async function s0(s,i){return fe(`/${xe}/server/${s}/save`,{method:"POST",body:i})}async function o0(s,i){return fe(`/${xe}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function r0(s,i,o){return fe(`/${xe}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function c0(s,i){return fe(`/${xe}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function d0(s){return fe(`/${xe}/server/manage/sort`,{method:"POST",body:s})}const Qd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Nx="admin-locale",Ad="vi-VN",u0="/assets/adminzic",Sx=f.createContext(null);function p0(){if(typeof window>"u")return Ad;const s=localStorage.getItem(Nx);return s&&Qd.some(i=>i.code===s)?s:Ad}function m0(s,i){return i?Object.entries(i).reduce((o,[d,p])=>o.replaceAll(`{${d}}`,String(p)),s):s}function f0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var S;i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})}),p.addEventListener("error",o);return}const h=document.createElement("script");h.src=`${u0}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var S;return i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})},h.onerror=o,document.head.appendChild(h)})}function h0({children:s}){const[i,o]=f.useState(Ad),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{o(p0())},[]);const S=f.useCallback(y=>{o(y),typeof window<"u"&&localStorage.setItem(Nx,y)},[]);f.useEffect(()=>{let y=!0;return m(!0),f0(i).then(j=>{y&&p(j)}).finally(()=>{y&&m(!1)}),()=>{y=!1}},[i]);const v=f.useCallback((y,j)=>m0(d[y]??y,j),[d]),x=f.useMemo(()=>({locale:i,loading:h,setLocale:S,t:v}),[i,h,S,v]);return t.jsx(Sx.Provider,{value:x,children:s})}function Ze(){const s=f.useContext(Sx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function x0(){const s=Dt(),{t:i,locale:o,setLocale:d}=Ze(),[p,h]=f.useState(""),[m,S]=f.useState(""),[v,x]=f.useState(""),[y,j]=f.useState(!1),[T,$]=f.useState(!1),W=f.useRef(null);f.useEffect(()=>{function z(G){W.current&&!W.current.contains(G.target)&&$(!1)}return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),f.useEffect(()=>{At()&&s.replace("/dashboard")},[s]);async function K(z){var G,R,U,I;z.preventDefault(),x(""),j(!0);try{const ie=await Wv(p,m),oe=((G=ie.data)==null?void 0:G.auth_data)??((R=ie.data)==null?void 0:R.token),D=((U=ie.data)==null?void 0:U.is_admin)===1||((I=ie.data)==null?void 0:I.is_admin)===!0;if(!oe||!D)throw new Error(i("login.adminRequired"));Fv(oe),s.replace("/dashboard")}catch(ie){x(ie instanceof Error?ie.message:i("login.failed"))}finally{j(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>$(z=>!z),children:t.jsx(ms,{size:17})}),T?t.jsx("div",{className:"locale-menu",children:Qd.map(z=>t.jsxs("button",{className:`locale-option ${o===z.code?"active":""}`,type:"button",onClick:()=>{d(z.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:z.flag}),t.jsx("span",{children:z.label})]},z.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Ov,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(rx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:z=>h(z.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Sv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:z=>S(z.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:y,type:"submit",children:i(y?"login.signingIn":"login.submit")})]})]})]})}function wn(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Jn(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function g0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const b0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:yv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Hv},{href:"/config/payment",label:"nav.paymentConfig",icon:gv},{href:"/config/theme",label:"nav.themeConfig",icon:Gv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:$d},{href:"/server/group",label:"nav.groupManagement",icon:$v},{href:"/server/route",label:"nav.routeManagement",icon:Rv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:ch},{href:"/order",label:"nav.orders",icon:Nv},{href:"/coupon",label:"nav.coupons",icon:vv},{href:"/giftcard",label:"nav.giftcards",icon:qv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:dx},{href:"/subscription",label:"nav.subscriptions",icon:ch},{href:"/device",label:"nav.devices",icon:Lv},{href:"/webcon",label:"nav.webcon",icon:ms},{href:"/notice",label:"nav.notices",icon:ls},{href:"/ticket",label:"nav.tickets",icon:_v},{href:"/knowledge",label:"nav.knowledge",icon:pv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:mv}]}];function y0(){const[s,i]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";i(h),document.documentElement.setAttribute("data-theme",h)},[]);const o=f.useCallback(p=>{i(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function kx(s){return s?new Date(s*1e3):null}function v0(s,i){const o=kx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function j0(s){const i=kx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function $t({children:s,title:i,subtitle:o}){const[d,p]=f.useState(!1),h=Dt(),m=iv(),{t:S,locale:v,setLocale:x}=Ze(),{theme:y,toggle:j}=y0(),[T,$]=f.useState(!1),W=f.useRef(null),[K,z]=f.useState(null),[G,R]=f.useState(!1),U=f.useCallback(async(w=!1)=>{if(At()){R(w);try{z(w?await n0():await t0())}catch(L){z({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:S("license.unavailable"),error:L instanceof Error?L.message:S("license.unavailable")})}finally{R(!1)}}},[S]);f.useEffect(()=>{function w(L){W.current&&!W.current.contains(L.target)&&$(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),f.useEffect(()=>{U(!1);const w=window.setInterval(()=>{U(!1)},6e4);return()=>window.clearInterval(w)},[U]);function I(){px(),h.replace("/login")}const ie=(K==null?void 0:K.license_expires_at)??(K==null?void 0:K.expires_at),oe=v0(v,ie),D=typeof(K==null?void 0:K.days_until_expiry)=="number"?K.days_until_expiry:j0(ie),Q=typeof D=="number"?D<=0?S("license.expiresToday"):S("license.daysLeft",{days:D}):null,te=!!K&&K.available&&!K.requires_renewal,he=te&&!!(K!=null&&K.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:S("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:b0.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:S(w.label)}),w.items.map(L=>{const ee=L.icon,A=m===L.href;return t.jsxs(sv,{className:`nav-item ${A?"active":""}`,href:L.href,onClick:()=>p(!1),children:[t.jsx(ee,{size:17}),t.jsx("span",{children:S(L.label)})]},L.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":S(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(w=>!w),children:d?t.jsx(st,{size:19}):t.jsx(Cv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[te?t.jsxs("button",{className:`license-chip ${he?"warning":""}`,type:"button",disabled:G,title:S("license.refresh"),onClick:()=>void U(!0),children:[t.jsx(ih,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:S("license.validUntil")}),t.jsx("strong",{children:oe??S("license.unknownExpiry")})]}),Q?t.jsx("small",{children:Q}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":S("common.language"),onClick:()=>$(w=>!w),children:t.jsx(ms,{size:17})}),T?t.jsx("div",{className:"locale-menu",children:Qd.map(w=>t.jsxs("button",{className:`locale-option ${v===w.code?"active":""}`,type:"button",onClick:()=>{x(w.code),$(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":y==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:y==="dark"?t.jsx(Bv,{size:17}):t.jsx(zv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,children:[t.jsx(kv,{size:16}),t.jsx("span",{children:S("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[K!=null&&K.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Ed,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.renewTitle")}),t.jsx("p",{children:S("license.renewBody")}),t.jsxs("small",{children:[S("license.currentStatus"),": ",K.status,K.error?` - ${K.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void U(!0),children:[t.jsx(zt,{size:16}),S(G?"license.refreshing":"license.refresh")]})]}):null,he?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(ih,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.expiryWarningTitle")}),t.jsx("p",{children:S("license.expiryWarningBody",{date:oe??S("license.unknownExpiry"),days:D??""})}),t.jsxs("small",{children:[S("license.currentStatus"),": ",K.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void U(!0),children:[t.jsx(zt,{size:16}),S(G?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const gh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Cx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function is(s){return Number(s??0)}function bh(s){return is(s)/100}function yh(s){return`${Jn(Math.round(s))} VND`}function zx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function w0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const p=new Date(i);return p.setDate(i.getDate()-(s-d-1)),zx(p)})}function vh(s,i){const o=s.get(i);if(o)return o;const d=Cx(i);return s.set(i,d),d}function _0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function To({label:s,value:i,helper:o,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(uv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function vt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(zt,{size:18}),t.jsx("span",{children:s})]})}function N0(s,i){const o=new Map,d=new Map;if(s.forEach(p=>{const h=vh(o,p.date),m=_0(p.type);if(m){h[m]=Number(p.value||0);return}const S=d.get(p.date)??0,v=gh[S%gh.length];h[v]=Number(p.value||0),d.set(p.date,S+1)}),i){const p=vh(o,zx(new Date));p.registrations=is(i.day_register_total),i.day_order_total!==void 0&&(p.orderCount=is(i.day_order_total)),i.day_paid_order_total!==void 0&&(p.paidCount=is(i.day_paid_order_total)),p.paidAmount=bh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(p.commissionAmount=bh(i.day_commission_payout)),i.day_commission_count!==void 0&&(p.commissionCount=is(i.day_commission_count))}return o.size===0?[]:w0(31).map(p=>o.get(p)??Cx(p))}function S0({records:s,override:i}){const{t:o}=Ze(),[d,p]=f.useState("paidAmount"),[h,m]=f.useState(null),[S,v]=f.useState(0),[x,y]=f.useState(0),j=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:yh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Jn},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Jn},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:yh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Jn},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Jn}],T=j.find(Q=>Q.key===d)??j[0],$=N0(s,i),W=Q=>Number(Q[T.key]||0),K=Math.max(...$.map(W),1),z=720,G=220,R=28,U=$.length>1?(z-R*2)/($.length-1):0,I=Q=>G-R-Q/K*(G-R*2),ie=$.map((Q,te)=>`${R+te*U},${I(W(Q))}`).join(" "),oe=Math.max(Math.ceil($.length/6),1),D=`dashboardTrendFill-${T.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:$.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:j.map(Q=>t.jsx("button",{type:"button",className:d===Q.key?"active":"",onClick:()=>{p(Q.key),m(null)},children:Q.label},Q.key))}),$.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${z} ${G}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:D,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:T.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:T.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(Q=>t.jsx("line",{className:"chart-grid",x1:R,x2:z-R,y1:R+Q*(G-R*2),y2:R+Q*(G-R*2)},Q)),$.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${D})`},points:`${R},${G-R} ${ie} ${z-R},${G-R}`}),t.jsx("polyline",{className:"chart-line",points:ie,style:{stroke:T.color}}),$.map((Q,te)=>{const he=R+te*U,w=I(W(Q));return t.jsxs("g",{children:[t.jsx("circle",{cx:he,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m(Q),v(he),y(w)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:he,cy:w,r:(h==null?void 0:h.date)===Q.date?6:4,fill:T.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===Q.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},Q.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${S/z*100}%`,top:`${x/G*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[T.label,": ",T.format(W(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:$.filter((Q,te)=>te===0||te===$.length-1||te%oe===0).map(Q=>t.jsx("span",{children:Q.date},Q.date))}),$.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:T.summaryLabel}),t.jsx("strong",{children:T.format(K)})]}):null]})}function Eo({title:s,subtitle:i,records:o,labelKey:d}){const{t:p}=Ze(),h=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):o.slice(0,8).map((m,S)=>{const v=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),x=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:S+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[g0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(x,3)}%`}})})]},`${v}-${S}`)})})]})}function dd({label:s,current:i,previous:o}){const{t:d}=Ze();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Jn(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Jn(o):o]})]})}function k0(){var x,y,j,T,$,W,K,z,G,R,U,I;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(""),[m,S]=f.useState(!0),v=f.useCallback(async()=>{S(!0),h("");try{d(await Pv())}catch(ie){h(ie instanceof Error?ie.message:i("dashboard.loadFailed"))}finally{S(!1)}},[i]);return f.useEffect(()=>{if(!At()){s.replace("/login");return}v()},[v,s]),t.jsxs($t,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(zt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(vt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((x=o.override)==null?void 0:x.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(y=o.override)==null?void 0:y.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(To,{label:i("dashboard.onlineUsers"),value:Jn(((j=o.override)==null?void 0:j.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(To,{label:i("dashboard.todayIncome"),value:`${wn(((T=o.override)==null?void 0:T.day_paid_income)??(($=o.override)==null?void 0:$.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(To,{label:i("dashboard.todayRegistrations"),value:Jn(((W=o.override)==null?void 0:W.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(To,{label:i("dashboard.pendingCommission"),value:Jn(((K=o.override)==null?void 0:K.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(dd,{label:i("dashboard.monthIncome"),current:`${wn(((z=o.override)==null?void 0:z.month_income)??0)} VND`,previous:`${wn(((G=o.override)==null?void 0:G.last_month_income)??0)} VND`}),t.jsx(dd,{label:i("dashboard.monthCommission"),current:`${wn(((R=o.override)==null?void 0:R.commission_month_payout)??0)} VND`,previous:`${wn(((U=o.override)==null?void 0:U.commission_last_month_payout)??0)} VND`}),t.jsx(dd,{label:i("dashboard.monthRegistrations"),current:((I=o.override)==null?void 0:I.month_register_total)??0,previous:"-"})]}),t.jsx(S0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Eo,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Eo,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Eo,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Eo,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const C0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function jh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function z0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function ud(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function T0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function E0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function Pt(s){return s===!0||s===1||s==="1"}function M0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function pd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function D0({field:s,value:i,onChange:o}){const{t:d}=Ze(),p=s.toInput?s.toInput(i):M0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${Pt(i)?"on":""}`,type:"button",onClick:()=>o(Pt(i)?0:1),"aria-pressed":Pt(i),children:[t.jsx("span",{}),Pt(i)?jh(d)[0].label:jh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>o(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function A0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>Pt(p.email_whitelist_enable),fromInput:pd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:p=>Pt(p.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:p=>Pt(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>Pt(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>Pt(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>Pt(p.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>Pt(p.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:z0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:ud(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:ud(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:ud(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:T0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:pd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:E0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:pd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:p=>Pt(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:p=>Pt(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:p=>Pt(p.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:p=>Pt(p.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:p=>Pt(p.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:p=>Pt(p.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(p=>({label:p,value:p}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function O0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState("site"),[p,h]=f.useState(null),[m,S]=f.useState([]),[v,x]=f.useState([]),[y,j]=f.useState(!0),[T,$]=f.useState(null),[W,K]=f.useState(""),z=f.useCallback(async()=>{j(!0),K("");try{const[Q,te,he]=await Promise.all([mx(),e1(),Iv()]);h(Q),S(te),x(he)}catch(Q){K(Q instanceof Error?Q.message:i("config.loadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}z()},[z,s]),f.useEffect(()=>{const Q=document.querySelector(".config-tabs button.active");Q&&Q.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const G=f.useMemo(()=>A0({plans:m,emailTemplates:v,t:i}),[m,v,i]),R=G.find(Q=>Q.key===o)??G[0],U=(p==null?void 0:p[R.key])??{};function I(Q,te,he){h(w=>w&&{...w,[Q]:{...w[Q],[te]:he}})}async function ie(){var Q;if(p){$(R.key),K("");try{await fx(p[R.key]),(Q=window.showToast)==null||Q.call(window,i("config.saveSuccess"),"success")}catch(te){K(te instanceof Error?te.message:i("config.saveFailed"))}finally{$(null)}}}async function oe(){var Q;$("mail"),K("");try{await t1(),(Q=window.showToast)==null||Q.call(window,i("config.email.testSuccess"),"success")}catch(te){K(te instanceof Error?te.message:i("config.email.testFailed"))}finally{$(null)}}async function D(){var te;const Q=String((p==null?void 0:p.telegram.telegram_bot_token)??"");$("webhook"),K("");try{await n1(Q),(te=window.showToast)==null||te.call(window,i("config.telegram.webhookSuccess"),"success")}catch(he){K(he instanceof Error?he.message:i("config.telegram.webhookFailed"))}finally{$(null)}}return t.jsxs($t,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:y,children:[t.jsx(zt,{size:16}),i(y?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,y&&!p?t.jsx(vt,{label:i("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:C0.map(Q=>{const te=G.find(he=>he.key===Q);return te?t.jsxs("button",{className:o===Q?"active":"",type:"button",onClick:()=>d(Q),children:[t.jsx("span",{children:te.label}),t.jsx("small",{children:te.hint})]},Q):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:R.label}),t.jsx("p",{children:R.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:T===R.key,type:"button",onClick:ie,children:[t.jsx(Nn,{size:16}),T===R.key?i("config.saving"):i("config.saveTab")]})]}),R.warning?t.jsx("div",{className:"config-warning",children:R.warning}):null,t.jsx("div",{className:"config-fields",children:R.fields.map(Q=>Q.visible&&!Q.visible(U)?null:t.jsx(D0,{field:Q,value:U[Q.key],onChange:te=>I(R.key,Q.key,te)},Q.key))}),R.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:T==="mail",onClick:oe,children:[t.jsx(rx,{size:16}),i(T==="mail"?"config.email.testing":"config.email.test")]})}):null,R.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:T==="webhook",onClick:D,children:[t.jsx(Yv,{size:16}),i(T==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(cx,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Va(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function md(s){return s===!0||s===1||s==="1"}function U0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function R0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function H0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,S]=f.useState(null),[v,x]=f.useState({}),[y,j]=f.useState(!0),[T,$]=f.useState(!1),[W,K]=f.useState(!1),[z,G]=f.useState(""),[R,U]=f.useState(""),[I,ie]=f.useState({}),oe=f.useCallback(async()=>{j(!0),G("");try{const[A,ae]=await Promise.all([a1(),l1()]);d(A),h(ae),ie({})}catch(A){G(A instanceof Error?A.message:i("payment.loadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}oe()},[oe,s]);async function D(A){const ae=(A==null?void 0:A.payment)??p[0]??"",H=U0(A,ae);if(S(H),x({}),G(""),U(""),!!ae){$(!0);try{x(await mh(ae,A==null?void 0:A.id))}catch(F){G(F instanceof Error?F.message:i("payment.formLoadFailed"))}finally{$(!1)}}}async function Q(A){if(m){S({...m,payment:A,config:{}}),$(!0),G("");try{x(await mh(A,m.id))}catch(ae){G(ae instanceof Error?ae.message:i("payment.formLoadFailed"))}finally{$(!1)}}}async function te(A){var ae,H;if(A.preventDefault(),!!m){K(!0),G(""),U("");try{await i1(R0(m)),S(null),(ae=window.showToast)==null||ae.call(window,i("payment.saveSuccess"),"success"),await oe()}catch(F){(H=window.showToast)==null||H.call(window,F instanceof Error?F.message:i("payment.saveFailed"),"error")}finally{K(!1)}}}async function he(A){var ae;G(""),U("");try{await s1(A),await oe()}catch(H){(ae=window.showToast)==null||ae.call(window,H instanceof Error?H.message:i("payment.toggleFailed"),"error")}}async function w(A){var ae;(ae=window.showConfirm)==null||ae.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var H,F;G(""),U("");try{await o1(A),(H=window.showToast)==null||H.call(window,i("payment.deleteSuccess"),"success"),await oe()}catch(k){(F=window.showToast)==null||F.call(window,k instanceof Error?k.message:i("payment.deleteFailed"),"error")}}})}async function L(A,ae){var ce;const H=A+ae;if(H<0||H>=o.length)return;const F=[...o],k=F[A];F.splice(A,1),F.splice(H,0,k),d(F);try{await r1(F.map(_=>_.id)),await oe()}catch(_){(ce=window.showToast)==null||ce.call(window,_ instanceof Error?_.message:i("payment.sortFailed"),"error"),await oe()}}async function ee(A){var H;const ae=await Va(A);(H=window.showToast)==null||H.call(window,i(ae?"payment.copied":"common.copyFailed"),ae?"success":"error")}return t.jsxs($t,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:oe,disabled:y,children:[t.jsx(zt,{size:16}),t.jsx("span",{children:i(y?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void D(),children:[t.jsx(_n,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,y&&o.length===0?t.jsx(vt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((A,ae)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:A.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(ae,-1),disabled:ae===0,"aria-label":i("payment.moveUp"),children:t.jsx(lh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(ae,1),disabled:ae===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(ah,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${md(A.enable)?"active":""}`,type:"button",onClick:()=>void he(A.id),"aria-label":md(A.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:A.name}),A.icon?t.jsx("small",{children:A.icon}):null]}),t.jsx("td",{children:A.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void ee(A.notify_url),children:[t.jsx("span",{children:A.notify_url}),t.jsx(cs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void D(A),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(A.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},A.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((A,ae)=>{const H=md(A.enable),F=A.handling_fee_percent!==null&&A.handling_fee_percent!==""?`${A.handling_fee_percent}%`:"",k=A.handling_fee_fixed!==null?`${wn(A.handling_fee_fixed)} VND`:"",ce=[F,k].filter(Boolean).join(" + ")||"No fees",_=I[A.id],N=A.icon&&!_;return t.jsxs("div",{className:`payment-mobile-card ${H?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",A.id]}),t.jsx("span",{className:"gateway-tag",children:A.payment})]}),t.jsx("button",{className:`admin-switch ${H?"active":""}`,type:"button",onClick:()=>void he(A.id),"aria-label":i(H?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[N?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:A.icon,alt:A.name,onError:()=>{ie(E=>({...E,[A.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:A.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:A.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:ce})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void ee(A.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:A.notify_url}),t.jsx(cs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(ae,-1),disabled:ae===0,"aria-label":i("payment.moveUp"),children:t.jsx(lh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(ae,1),disabled:ae===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(ah,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void D(A),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w(A.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},A.id)}),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:te,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:A=>S({...m,name:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:A=>S({...m,icon:A.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:A=>S({...m,notify_domain:A.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:A=>S({...m,handling_fee_percent:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:A=>S({...m,handling_fee_fixed:A.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:A=>void Q(A.target.value),children:p.map(A=>t.jsx("option",{value:A,children:A},A))})]}),T?t.jsx(vt,{label:i("payment.formLoading")}):null,T?null:Object.entries(v).map(([A,ae])=>t.jsxs("label",{children:[t.jsx("span",{children:ae.label}),t.jsx("input",{className:"config-input",placeholder:ae.description,value:String(m.config[A]??ae.value??""),onChange:H=>S({...m,config:{...m.config,[A]:H.target.value}})})]},A)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Nn,{size:16}),i(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function L0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function q0(s,i){return i[s.field_name]??s.default_value??""}function B0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,S]=f.useState(!0),[v,x]=f.useState(!1),[y,j]=f.useState(!1),[T,$]=f.useState(null),[W,K]=f.useState(""),[z,G]=f.useState(""),R=f.useCallback(async()=>{S(!0),K("");try{d(await c1())}catch(D){K(D instanceof Error?D.message:i("theme.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}R()},[R,s]);async function U(D,Q){h(null),x(!0),K(""),G("");try{const te=await d1(D);h({key:D,theme:Q,values:te})}catch(te){K(te instanceof Error?te.message:i("theme.configLoadFailed"))}finally{x(!1)}}async function I(D){$(D),K(""),G("");try{await fx({frontend_theme:D}),G(i("theme.activateSuccess")),await R()}catch(Q){K(Q instanceof Error?Q.message:i("theme.activateFailed"))}finally{$(null)}}async function ie(D){if(D.preventDefault(),!!p){j(!0),K(""),G("");try{await u1(p.key,p.values),h(null),G(i("theme.saveSuccess")),await R()}catch(Q){K(Q instanceof Error?Q.message:i("theme.saveFailed"))}finally{j(!1)}}}function oe(D,Q){h(te=>te&&{...te,values:{...te.values,[D]:Q}})}return t.jsxs($t,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&!o?t.jsx(vt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([D,Q])=>{const te=o.active===D;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${L0(Q)})`},children:te?t.jsxs("span",{className:"theme-active",children:[t.jsx(ox,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:Q.name||D}),t.jsx("p",{children:Q.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",Q.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(D,Q),children:[t.jsx(Av,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:te||T===D,type:"button",onClick:()=>void I(D),children:[t.jsx(Tv,{size:15}),i(te?"theme.current":T===D?"theme.activating":"theme.activate")]})]})]},D)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(vt,{label:i("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[(p.theme.configs??[]).map(D=>{const Q=q0(D,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:D.label}),D.description?t.jsx("p",{className:"field-description",children:D.description}):null,D.field_type==="select"?t.jsx("select",{className:"config-input",value:Q,onChange:te=>oe(D.field_name,te.target.value),children:Object.entries(D.select_options??{}).map(([te,he])=>t.jsx("option",{value:te,children:he},te))}):null,D.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:D.placeholder,rows:5,value:Q,onChange:te=>oe(D.field_name,te.target.value)}):null,D.field_type!=="select"&&D.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:D.placeholder,value:Q,onChange:te=>oe(D.field_name,te.target.value)}):null]},D.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Nn,{size:16}),i(y?"theme.saving":"common.save")]})]})]})]})}):null]})}const Od=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],G0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Y0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Tx=["tcp","ws","grpc"],Ex=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],$0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],wh=["anytls","hysteria2","trojan","tuic"],Q0=["tcp","ws","grpc","httpupgrade","xhttp"],X0=["chrome","firefox","safari","ios","android","edge","360","qq"],Xd=typeof window<"u"?window.location.origin:"",Z0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function K0(s,i,o=""){return s[i]??o}function Xe(s,i,o=""){return String(K0(s,i,o))}function V0(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function J0(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function F0(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function W0(s){return s==="vmess"?"networkSettings":"network_settings"}function P0(s,i){const o=s==="vmess",d=s==="vless"||si(s),p={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...p}:p;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function si(s){return s==="v2node"||s==="zicnode"}function I0(s){return!!s&&s!=="shadowsocks"}function ej(s){return s==="vless"||s==="vmess"}function tj(s){return s==="vless"||s==="anytls"}function nj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function _h(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Tx:s==="vless"||s==="vmess"?Q0:[]}function aj(s){var i;return si(s)?"ZicNode":((i=Od.find(o=>o.value===s))==null?void 0:i.label)??s}function Ud(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function lj(s){return s===!0||s===1||s==="1"||s==="true"}function ij(s){return Ud(s).replace(/\/+$/,"")||Xd}function Nh(s){return`'${s.replace(/'/g,"'\\''")}'`}function sj(s,i){const o=i.apiHost||Xd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${Z0} && \\
bash install.sh --api-host ${Nh(o)} --node-id ${s} --api-key ${Nh(d)}`}function Sh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function kh(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=Sh(d.group_id),d.route_id=Sh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Mx({initialValue:s,onCancel:i,onSave:o}){const{t:d}=Ze(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,S]=f.useState(""),v=y=>{if(y.preventDefault(),!p.trim()){o({});return}try{const j=JSON.parse(p);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");o(j)}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}},x=y=>{if(h(y),!y.trim()){S("");return}try{const j=JSON.parse(y);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");S("")}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:y=>x(y.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function ze({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:o})]})}function oj({value:s,onChange:i,label:o}){const{t:d}=Ze(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(ze,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,S)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((v,x)=>x!==S)),style:{cursor:"pointer"},children:[m," ×"]},S)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),i([...s,p.trim()]),h(""))}})]})]})}function Ch({options:s,value:i,onChange:o,label:d,actionText:p,onAction:h}){const{t:m}=Ze(),[S,v]=f.useState(""),x=s.filter(j=>i.includes(j.id)),y=s.filter(j=>j.name.toLowerCase().includes(S.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(ze,{label:d,actionText:p,onAction:h}),x.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:x.map(j=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(T=>T!==j.id)),children:[j.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:S,onChange:j=>v(j.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[y.map(j=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(j.id),onChange:T=>o(T.target.checked?[...i,j.id]:i.filter($=>$!==j.id))}),t.jsx("span",{children:j.name})]},j.id)),y.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function Fn({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function rj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:p,onSave:h}){const{t:m}=Ze(),S=i?"server_name":"serverName",v=i?"allow_insecure":"allowInsecure",x=si(d),[y,j]=f.useState(String((s==null?void 0:s[S])??"")),[T,$]=f.useState(String((s==null?void 0:s.dest)??"")),[W,K]=f.useState(String((s==null?void 0:s.server_port)??"443")),[z,G]=f.useState(String((s==null?void 0:s.xver)??"0")),[R,U]=f.useState(String((s==null?void 0:s.private_key)??"")),[I,ie]=f.useState(String((s==null?void 0:s.public_key)??"")),[oe,D]=f.useState(String((s==null?void 0:s.short_id)??"")),[Q,te]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[he,w]=f.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[L,ee]=f.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),A=String((s==null?void 0:s.cert_mode)??"").trim(),[ae,H]=f.useState(x?A:A||"self"),[F,k]=f.useState(String((s==null?void 0:s.provider)??"")),[ce,_]=f.useState(String((s==null?void 0:s.dns_env)??"")),[N,E]=f.useState(String((s==null?void 0:s.cert_file)??"")),[re,me]=f.useState(String((s==null?void 0:s.key_file)??"")),[we,Se]=f.useState(()=>{const ge=s==null?void 0:s.reject_unknown_sni;return ge===1||ge===!0||String(ge)==="1"||String(ge)==="true"}),[De,ot]=f.useState(String((s==null?void 0:s.ech)??"")),[qe,Pe]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[Nt,St]=f.useState(String((s==null?void 0:s.ech_key)??"")),[It,gt]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Qt,Ot]=f.useState(()=>{const ge=s==null?void 0:s[v];return ge===1||ge===!0||String(ge)==="1"||String(ge)==="true"}),nn=ge=>{ge.preventDefault();const Oe={...s??{},[S]:y,fingerprint:Q},Bt=he.trim(),jt=L.trim();Bt?Oe.pinnedPeerCertSha256=Bt:delete Oe.pinnedPeerCertSha256,delete Oe.pinned_peer_cert_sha256,jt?Oe.verifyPeerCertByName=jt:delete Oe.verifyPeerCertByName,delete Oe.verify_peer_cert_by_name,x?(delete Oe.allow_insecure,delete Oe.allowInsecure):Oe[v]=i?Qt?1:0:Qt,o===2&&(Oe.dest=T,Oe.server_port=W,Oe.xver=Number(z)||0,Oe.private_key=R,Oe.public_key=I,Oe.short_id=oe,Oe.ech=De,Oe.ech_server_name=qe,Oe.ech_key=Nt,Oe.ech_config=It),o===1&&x&&(Oe.cert_mode=ae,ae===""?(delete Oe.provider,delete Oe.dns_env,delete Oe.cert_file,delete Oe.key_file):(Oe.provider=F,Oe.dns_env=ce,Oe.cert_file=N,Oe.key_file=re),Oe.reject_unknown_sni=we?"1":"0"),h(Oe)};return t.jsxs("form",{onSubmit:nn,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.sni")}),t.jsx("input",{className:"config-input",value:y,onChange:ge=>j(ge.target.value),placeholder:m(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dest")}),t.jsx("input",{className:"config-input",value:T,onChange:ge=>$(ge.target.value),placeholder:m("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.servicePort")}),t.jsx("input",{className:"config-input",value:W,onChange:ge=>K(ge.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:z,onChange:ge=>G(ge.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.privateKey")}),t.jsx("input",{className:"config-input",value:R,onChange:ge=>U(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.publicKey")}),t.jsx("input",{className:"config-input",value:I,onChange:ge=>ie(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.shortId")}),t.jsx("input",{className:"config-input",value:oe,onChange:ge=>D(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.fingerprint")}),t.jsx("select",{className:"config-input",value:Q,onChange:ge=>te(ge.target.value),children:X0.map(ge=>t.jsx("option",{value:ge,children:ge},ge))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:he,onChange:ge=>w(ge.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:L,onChange:ge=>ee(ge.target.value),placeholder:"example.com"})]})]}),o===1&&x?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.certMode")}),t.jsxs("select",{className:"config-input",value:ae,onChange:ge=>H(ge.target.value),children:[t.jsx("option",{value:"",children:m("node.certModeAuto")}),t.jsx("option",{value:"self",children:m("node.certModeSelf")}),t.jsx("option",{value:"http",children:m("node.certModeHttp")}),t.jsx("option",{value:"dns",children:m("node.certModeDns")}),t.jsx("option",{value:"file",children:m("node.certModeFile")}),t.jsx("option",{value:"none",children:m("node.certModeNone")})]})]}),ae==="dns"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:F,onChange:ge=>k(ge.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:ce,onChange:ge=>_(ge.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,ae!==""&&ae!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.certFile")}),t.jsx("input",{className:"config-input",value:N,onChange:ge=>E(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.keyFile")}),t.jsx("input",{className:"config-input",value:re,onChange:ge=>me(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsx(Fn,{label:m("node.rejectUnknownSni"),checked:we,onChange:Se})]}):null,x?null:t.jsx(Fn,{label:m("node.allowInsecure"),checked:Qt,onChange:Ot}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.ech")}),t.jsxs("select",{className:"config-input",value:De,onChange:ge=>ot(ge.target.value),children:[t.jsx("option",{value:"",children:m("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:m("node.echCustom")})]})]}),De==="cloudflare"?t.jsx("div",{className:"config-warning",children:m("node.echCloudflareHelp")}):null,De==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echServerName")}),t.jsx("input",{className:"config-input",value:qe,onChange:ge=>Pe(ge.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echKey")}),t.jsx("input",{className:"config-input",value:Nt,onChange:ge=>St(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echConfig")}),t.jsx("input",{className:"config-input",value:It,onChange:ge=>gt(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:p,children:m("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function cj({draft:s,set:i,groups:o,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:S}){const{t:v}=Ze(),x=String(s._type),y=si(x),j=Xe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"name"),onChange:T=>i("name",T.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Xe(s,"rate","1"),onChange:T=>i("rate",Number(T.target.value))})]})]}),t.jsx(oj,{value:s.tags??[],onChange:T=>i("tags",T),label:v("node.tags")}),t.jsx(Ch,{options:o.map(T=>({id:T.id,name:T.name})),value:s.group_id??[],onChange:T=>i("group_id",T),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"host"),onChange:T=>i("host",T.target.value),placeholder:v("node.addressPlaceholder")})]}),y?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.listenIp")}),t.jsx("input",{className:"config-input",value:Xe(s,"listen_ip"),onChange:T=>i("listen_ip",T.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?v("node.editConfig"):void 0,onAction:()=>{const T=x==="vmess"?"tlsSettings":"tls_settings";h(v("node.connectionSecurityConfig"),T)}}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls","0"),onChange:T=>{const $=Number(T.target.value);i("tls",$);const W=x==="vmess"?"tlsSettings":"tls_settings";$!==0&&!s[W]&&i(W,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),x!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Xe(s,"server_name"),onChange:T=>i("server_name",T.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"port"),onChange:T=>i("port",T.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"server_port"),onChange:T=>i("server_port",T.target.value),placeholder:"443"})]})]}),y?t.jsx(gj,{draft:s,set:i,onOpenJson:h,onOpenTransportConfig:S,onOpenSecurityConfig:()=>h(v("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(x)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:S}),t.jsxs("select",{className:"config-input",value:j,onChange:T=>{i("network",T.target.value);const $=x==="vmess"?"networkSettings":"network_settings";s[$]||i($,{})},children:[x==="vmess"&&G0.map(T=>t.jsx("option",{value:T,children:T},T)),x==="trojan"&&Tx.map(T=>t.jsx("option",{value:T,children:T},T)),x==="vless"&&Y0.map(T=>t.jsx("option",{value:T,children:T},T))]})]}):null,x==="trojan"&&t.jsx(uj,{draft:s,set:i}),x==="shadowsocks"&&t.jsx(pj,{draft:s,set:i,onOpenJson:h}),x==="hysteria"&&t.jsx(mj,{draft:s,set:i}),x==="tuic"&&t.jsx(fj,{draft:s,set:i}),x==="vless"&&t.jsx(hj,{draft:s,set:i,onOpenJson:h}),x==="anytls"&&t.jsx(xj,{draft:s,set:i,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:T=>i("parent_id",T.target.value?Number(T.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),p.filter(T=>T.id!==s.id&&!T.parent_id).map(T=>t.jsx("option",{value:T.id,children:T.name},T.id))]})]}),t.jsx(Ch,{options:d.map(T=>({id:T.id,name:T.remarks})),value:s.route_id??[],onChange:T=>i("route_id",T),label:v("node.routingGroups")})]})]})}function dj({draft:s,set:i,onCancel:o,onSave:d}){const p=String(s._type),h=String(s.network??"tcp"),m=W0(p),S=s[m],v=F0(S)?J0(S):P0(p,h);return t.jsx(Mx,{initialValue:v,onCancel:o,onSave:x=>{i(m,x),d()}})}function uj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function pj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze(),p=V0(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:h=>i("cipher",h.target.value),children:Ex.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:h=>i("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>i("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>i("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function mj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Xe(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function fj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(Fn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(Fn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function hj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:p=>i("flow",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.encryption"),actionText:Xe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:p=>i("encryption",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function xj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Fn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>i("insecure",p?1:0)})]})}function gj({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:p}){const{t:h}=Ze(),m=Xe(s,"protocol"),S=_h(m),v=x=>{if(i("protocol",x),!x){i("tls",0),i("network","tcp");return}wh.includes(x)?(i("tls",1),s.tls_settings||i("tls_settings",{})):x==="shadowsocks"?i("tls",0):x==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const y=_h(x);(y.length===0||!y.includes(Xe(s,"network","tcp")))&&i("network","tcp"),x!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),x!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),x!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:m,onChange:x=>v(x.target.value),children:[t.jsx("option",{value:"",children:h("node.selectNodeProtocol")}),$0.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),m?t.jsxs(t.Fragment,{children:[I0(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?h("node.editConfig"):void 0,onAction:p}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls",wh.includes(m)?"1":"0"),onChange:x=>{const y=Number(x.target.value);i("tls",y),y!==0&&!s.tls_settings&&i("tls_settings",{})},children:[ej(m)?t.jsx("option",{value:"0",children:h("node.none")}):null,t.jsx("option",{value:"1",children:h("node.useTls")}),tj(m)?t.jsx("option",{value:"2",children:h("node.reality")}):null]})]}):null,nj(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.transportProtocol"),required:!0,actionText:h("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:S.includes(Xe(s,"network","tcp"))?Xe(s,"network","tcp"):"tcp",onChange:x=>{i("network",x.target.value),s.network_settings||i("network_settings",{})},children:S.map(x=>t.jsx("option",{value:x,children:x},x))})]}):null]}):null,m==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.encryption"),actionText:Xe(s,"encryption")?h("node.editConfig"):void 0,onAction:()=>o(h("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:x=>i("encryption",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:x=>i("flow",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),m==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:x=>i("cipher",x.target.value),children:Ex.map(x=>t.jsx("option",{value:x,children:x},x))})]}),m==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:x=>i("up_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:x=>i("down_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:x=>i("obfs",x.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Xe(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:x=>i("obfs_password",x.target.value),placeholder:h("node.autoGenHelp")})]}):null]})]}),m==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:x=>i("udp_relay_mode",x.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:x=>i("congestion_control",x.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:h("node.disableSni"),checked:s.disable_sni===1,onChange:x=>i("disable_sni",x?1:0)}),t.jsx(Fn,{label:h("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:x=>i("zero_rtt_handshake",x?1:0)})]}),m==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.paddingScheme"),actionText:h("node.editConfig"),onAction:()=>o(h("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const zh={vmess:Uv,vless:Qv,trojan:Td,shadowsocks:Bo,hysteria:Mv,tuic:xv,anytls:ms,v2node:oh,zicnode:oh},bj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},yj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Ya(s){return bj[s]??yj}function vj({draft:s,config:i,onCopy:o,t:d}){const p=Number(s.id??0),h=p>0?sj(p,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),p>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:h}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(h),children:[t.jsx(cs,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function jj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,S]=f.useState([]),[v,x]=f.useState(null),[y,j]=f.useState(null),[T,$]=f.useState(!0),[W,K]=f.useState(!1),[z,G]=f.useState(""),[R,U]=f.useState(""),[I,ie]=f.useState(1),[oe,D]=f.useState(10),[Q,te]=f.useState(!1),[he,w]=f.useState({}),[L,ee]=f.useState({apiHost:Xd,apiKey:""}),[A,ae]=f.useState(!1),[H,F]=f.useState(""),[k,ce]=f.useState(null),[_,N]=f.useState(null),[E,re]=f.useState(null),me=(q,de)=>{q.dataTransfer.effectAllowed="move",N(de)},we=(q,de)=>{if(q.preventDefault(),_===null||_===de)return;const se=[...o],Re=se[_];se.splice(_,1),se.splice(de,0,Re),N(de),d(se)},Se=()=>{N(null)},De=(q,de)=>{Q&&re(de)},ot=q=>{if(!Q||E===null)return;q.cancelable&&q.preventDefault();const de=q.touches[0],se=document.elementFromPoint(de.clientX,de.clientY);if(!se)return;const Re=se.closest(".mobile-node-card");if(!Re)return;const Ve=Re.getAttribute("data-index");if(Ve===null)return;const et=Number(Ve);if(et!==E&&et>=0&&et<o.length){const ft=[...o],ct=ft[E];ft.splice(E,1),ft.splice(et,0,ct),re(et),d(ft)}},qe=()=>{re(null)};f.useEffect(()=>{ie(1)},[H,oe]);const Pe=o.filter(q=>{const de=H.toLowerCase().trim();return de?q.name.toLowerCase().includes(de)||q.host.toLowerCase().includes(de)||String(q.id).includes(de)||q.type.toLowerCase().includes(de):!0}),Nt=Math.ceil(Pe.length/oe),St=Pe.slice((I-1)*oe,I*oe);function It(q,de){return de<=7?Array.from({length:de},(se,Re)=>Re+1):q<=4?[1,2,3,4,5,"...",de]:q>=de-3?[1,"...",de-4,de-3,de-2,de-1,de]:[1,"...",q-1,q,q+1,"...",de]}const gt=It(I,Nt),Qt=async()=>{var q,de;K(!0),G(""),U("");try{const se={};o.forEach((Re,Ve)=>{se[Re.type]||(se[Re.type]={}),se[Re.type][String(Re.id)]=Ve+1}),await d0(se),(q=window.showToast)==null||q.call(window,i("node.saveSortSuccess"),"success"),te(!1),await Ee()}catch(se){G(se instanceof Error?se.message:i("node.saveSortFailed")),(de=window.showToast)==null||de.call(window,se instanceof Error?se.message:i("node.saveSortFailed"),"error")}finally{K(!1)}},Ot=async()=>{te(!1),await _e()},nn=()=>Pe.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===1,onClick:()=>ie(q=>Math.max(q-1,1)),children:"<"}),gt.map((q,de)=>q==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${de}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${I===q?"active":""}`,onClick:()=>ie(Number(q)),children:q},`page-${q}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===Nt||Nt===0,onClick:()=>ie(q=>Math.min(q+1,Nt)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:oe,onChange:q=>D(Number(q.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[ge,Oe]=f.useState(null),[Bt,jt]=f.useState(!1),[pn,M]=f.useState(""),[ye,Be]=f.useState(!1),[ve,rt]=f.useState(!1);async function Y(q){var se,Re;q.preventDefault();const de=pn.trim();if(!(!de||!v)){Be(!0),G(""),U("");try{await hx({name:de});const Ve=await ps();h(Ve);const et=Ve.filter(ft=>ft.name===de).sort((ft,ct)=>ct.id-ft.id)[0];if(et){const ft=v.group_id??[];ft.includes(et.id)||mn("group_id",[...ft,et.id])}M(""),jt(!1),(se=window.showToast)==null||se.call(window,i("node.groupCreateSuccess"),"success")}catch(Ve){G(Ve instanceof Error?Ve.message:i("node.groupCreateFailed")),(Re=window.showToast)==null||Re.call(window,Ve instanceof Error?Ve.message:i("node.groupCreateFailed"),"error")}finally{Be(!1)}}}const Ne=(q,de)=>{if(!v)return;let se=v[de];if(typeof se=="string"&&se.trim())try{se=JSON.parse(se)}catch{}Oe({title:q,key:de,value:se&&typeof se=="object"?se:{}})},_e=f.useCallback(async()=>{var q,de,se,Re;$(!0),G("");try{const[Ve,et,ft,ct]=await Promise.all([xh(),ps(),gx(),mx()]);d(Ve.data),h(et),S(ft),ee({apiHost:ij((q=ct.site)==null?void 0:q.app_url),apiKey:Ud((de=ct.server)==null?void 0:de.server_token)}),ae(lj(((se=ct.subscribe)==null?void 0:se.device_hwid_available)??((Re=ct.subscribe)==null?void 0:Re.device_hwid_enable)))}catch(Ve){G(Ve instanceof Error?Ve.message:i("knowledge.loadFailed"))}finally{$(!1)}},[]),Ee=f.useCallback(async()=>{try{const q=await xh();d(q.data)}catch(q){console.error("Refresh nodes failed",q)}},[]);async function Ie(q){var se;const de=await Va(q);(se=window.showToast)==null||se.call(window,i(de?"node.installCopied":"common.copyFailed"),de?"success":"error")}f.useEffect(()=>{if(!At()){s.replace("/login");return}_e()},[_e,s]);function Ke(q){x(kh(q)),j(null),G(""),U("")}function Ye(q){x(kh(q.type,q)),G(""),U("")}function Ae(q){!A||Number(q.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(q.type)}&node_id=${encodeURIComponent(String(q.id))}`)}function mt(q,de){const se=Number(q.online??0),Re=A&&se>0,Ve=`${de==="mobile"?"mobile-badge-pill":"online-badge"}${Re?" online-badge-link":""}`,et=de==="mobile"?12:13,ft={...de==="mobile"?{marginRight:4}:{},color:se>0?"#10b981":"var(--muted)",opacity:se>0?1:.6},ct=t.jsxs(t.Fragment,{children:[t.jsx(dx,{size:et,style:ft}),se]});return Re?t.jsx("button",{className:Ve,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Ae(q),children:ct}):t.jsx("span",{className:Ve,children:ct})}async function ri(q){var et,ft,ct;if(q.preventDefault(),!v)return;K(!0),G(""),U("");const de=String(v._type),se={...v};if(si(de)&&!Ud(se.protocol)){G(i("node.protocolRequired")),(et=window.showToast)==null||et.call(window,i("node.protocolRequired"),"error"),K(!1);return}for(const Ue of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete se[Ue];if(se.padding_scheme!==void 0&&se.padding_scheme!==null&&typeof se.padding_scheme!="string"&&(se.padding_scheme=JSON.stringify(se.padding_scheme)),se.padding_scheme)try{const Ue=JSON.parse(String(se.padding_scheme));if(typeof Ue!="object"||Ue===null)throw new Error("Invalid JSON array or object")}catch(Ue){G("Invalid Padding Scheme configuration: "+(Ue instanceof Error?Ue.message:"JSON error")),K(!1);return}const Re=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Ue of Re)(se[Ue]===""||se[Ue]===null||se[Ue]===void 0)&&delete se[Ue];const Ve=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Ue of Ve){const Hn=se[Ue];(Hn==null||typeof Hn=="object"&&Object.keys(Hn).length===0)&&delete se[Ue]}se.port!==void 0&&(se.port=Number(se.port)),se.server_port!==void 0&&(se.server_port=Number(se.server_port)),se.tls!==void 0&&(se.tls=Number(se.tls)),se.rate!==void 0&&(se.rate=Number(se.rate));try{await s0(de,se),x(null),(ft=window.showToast)==null||ft.call(window,i("node.saveSuccess"),"success"),await Ee()}catch(Ue){G(Ue instanceof Error?Ue.message:i("node.saveFailed")),(ct=window.showToast)==null||ct.call(window,Ue instanceof Error?Ue.message:i("node.saveFailed"),"error")}finally{K(!1)}}async function vl(q){const de=[...o];d(se=>se.map(Re=>Re.id===q.id&&Re.type===q.type?{...Re,show:q.show?0:1}:Re));try{await r0(q.type,q.id,q.show?0:1),await Ee()}catch(se){d(de),G(se instanceof Error?se.message:i("node.updateFailed"))}}async function Wa(q){var de,se;try{await c0(q.type,q.id),(de=window.showToast)==null||de.call(window,i("node.copySuccess"),"success"),await Ee()}catch(Re){G(Re instanceof Error?Re.message:i("node.copyFailed")),(se=window.showToast)==null||se.call(window,Re instanceof Error?Re.message:i("node.copyFailed"),"error")}}async function Gn(q){var de;(de=window.showConfirm)==null||de.call(window,{message:i("node.deleteConfirm",{name:q.name}),onConfirm:async()=>{var Re,Ve;const se=[...o];d(et=>et.filter(ft=>!(ft.id===q.id&&ft.type===q.type))),G("");try{await o0(q.type,q.id),(Re=window.showToast)==null||Re.call(window,i("node.deleteSuccess"),"success"),await Ee()}catch(et){d(se),G(et instanceof Error?et.message:i("node.deleteFailed")),(Ve=window.showToast)==null||Ve.call(window,et instanceof Error?et.message:i("node.deleteFailed"),"error")}}})}const mn=(q,de)=>x(se=>se?{...se,[q]:de}:null),Yn=v?String(v._type):"",ln=aj(Yn);return t.jsxs($t,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(_n,{size:18})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Od.map(q=>{const de=Ya(q.value),se=zh[q.value]||Go;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ke(q.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:H,onChange:q=>F(q.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${Q?"success-btn":""}`,type:"button",onClick:Q?Qt:()=>te(!0),disabled:W,children:i(Q?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),Q&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Ot,children:i("common.cancel")})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,T&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(Q?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[St.map(q=>{const de=o.findIndex(se=>se.id===q.id&&se.type===q.type);return t.jsxs("tr",{draggable:Q,onDragStart:se=>me(se,de),onDragOver:se=>we(se,de),onDragEnd:Se,className:_===de?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Ya(q.type).bg,color:Ya(q.type).text,border:`1px solid ${Ya(q.type).border}`},children:q.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void vl(q),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:q.name})]})}),t.jsx("td",{children:mt(q,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:q.host})}),t.jsx("td",{className:"mobile-hide",children:String(q.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[q.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const se=q.group_id??[],Re=he[`${q.type}-${q.id}`],Ve=se.map(ct=>{const Ue=p.find(Hn=>Number(Hn.id)===Number(ct));return t.jsx("span",{className:"tag",children:(Ue==null?void 0:Ue.name)??`#${ct}`},ct)});if(se.length<=3||Re)return t.jsxs(t.Fragment,{children:[Ve,se.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(ct=>({...ct,[`${q.type}-${q.id}`]:!1})),children:i("node.collapse")})]});const et=Ve.slice(0,3),ft=se.length-3;return t.jsxs(t.Fragment,{children:[et,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(ct=>({...ct,[`${q.type}-${q.id}`]:!0})),children:["+",ft,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:se.length})}),Ve]})]})]})})()})}),t.jsx("td",{children:Q?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ss,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ce((k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ce(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(q),ce(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wa(q),ce(null)},children:[t.jsx(cs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(q),ce(null)},children:[t.jsx(Yt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${q.type}-${q.id}`)}),!T&&Pe.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),nn()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(_n,{size:20})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Od.map(q=>{const de=Ya(q.value),se=zh[q.value]||Go;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ke(q.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:de==null?void 0:de.bg,backgroundColor:de==null?void 0:de.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(de==null?void 0:de.bg)??"var(--surface-soft)",color:(de==null?void 0:de.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:H,onChange:q=>F(q.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${Q?"active":""}`,type:"button",onClick:()=>te(!Q),title:i("node.editSortOrder"),children:t.jsx(ss,{size:20})})]}),Q&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Ot,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Qt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[St.map(q=>{const de=o.findIndex(se=>se.id===q.id&&se.type===q.type);return t.jsxs("div",{className:`mobile-node-card ${_===de||E===de?"dragging":""}`,draggable:Q,onDragStart:se=>me(se,de),onDragOver:se=>we(se,de),onDragEnd:Se,onTouchStart:se=>De(se,de),onTouchMove:ot,onTouchEnd:qe,"data-index":de,style:Q?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:q.name})]}),t.jsx("div",{className:"card-header-right",children:Q?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ss,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${q.show===1?"active":""}`,onClick:()=>void vl(q),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>ce((k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>ce(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(q),ce(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wa(q),ce(null)},children:[t.jsx(cs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(q),ce(null)},children:[t.jsx(Yt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[q.host,":",q.port||q.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Ya(q.type).bg,color:Ya(q.type).text,border:`1px solid ${Ya(q.type).border}`},children:q.id}),mt(q,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[q.rate," x"]})]})]},`${q.type}-${q.id}`)}),!T&&Pe.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),nn()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("node.editNodeTitle",{type:ln}):i("node.createNodeTitle",{type:ln})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:ln})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ri,children:[t.jsx(cj,{draft:v,set:mn,groups:p,routes:m,nodes:o,onOpenJson:Ne,onAddGroup:()=>jt(!0),onOpenTransportConfig:()=>rt(!0)}),si(Yn)?t.jsx(vj,{draft:v,config:L,onCopy:q=>void Ie(q),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Nn,{size:16}),i(W?"node.saving":"common.save")]})]})]})]})}),ge!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:ge.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(ge.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Oe(null),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(ge.key)?t.jsx(rj,{initialValue:ge.value,isSnakeCase:ge.key==="tls_settings",tlsMode:Number((v==null?void 0:v.tls)??0),nodeType:String((v==null?void 0:v._type)??""),onCancel:()=>Oe(null),onSave:q=>{mn(ge.key,q),Oe(null)}}):t.jsx(Mx,{initialValue:ge.value,onCancel:()=>Oe(null),onSave:q=>{mn(ge.key,q),Oe(null)}})})]})}),Bt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>jt(!1),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{onSubmit:Y,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:pn,onChange:q=>M(q.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>jt(!1),disabled:ye,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ye||!pn.trim(),children:i(ye?"node.saving":"common.confirm")})]})]})]})}),ve&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>rt(!1),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(dj,{draft:v,set:mn,onCancel:()=>rt(!1),onSave:()=>rt(!1)})})]})})]})}function wj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,S]=f.useState(!0),[v,x]=f.useState(!1),[y,j]=f.useState(""),T=f.useCallback(async()=>{S(!0),j("");try{d(await ps())}catch(z){j(z instanceof Error?z.message:i("serverGroup.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}T()},[T,s]);function $(z){h({id:z==null?void 0:z.id,name:(z==null?void 0:z.name)??""}),j("")}async function W(z){var G;if(z.preventDefault(),!!p){x(!0),j("");try{await hx(p),h(null),(G=window.showToast)==null||G.call(window,i("serverGroup.saveSuccess"),"success"),await T()}catch(R){j(R instanceof Error?R.message:i("serverGroup.saveFailed"))}finally{x(!1)}}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await p1(z),(R=window.showToast)==null||R.call(window,i("serverGroup.deleteSuccess"),"success"),await T()}catch(I){j(I instanceof Error?I.message:i("serverGroup.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(_n,{size:16}),i("serverGroup.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(vt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(us,{size:14}),z.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Go,{size:14}),z.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(z),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:z=>h({...p,name:z.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Nn,{size:16}),i(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function _j(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Nj(s){var i;return((i=xx.find(o=>o.value===s))==null?void 0:i.label)??s}function Sj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,S]=f.useState(!0),[v,x]=f.useState(!1),[y,j]=f.useState(""),T=f.useCallback(async()=>{S(!0),j("");try{d(await gx())}catch(z){j(z instanceof Error?z.message:i("serverRoute.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}T()},[T,s]);function $(z){h(_j(z)),j("")}async function W(z){var R;if(z.preventDefault(),!p)return;x(!0),j("");const G=p.action==="default_out"?[]:p.match.split(`
`).map(U=>U.trim()).filter(Boolean);try{await m1({id:p.id,remarks:p.remarks,match:G,action:p.action,action_value:p.action_value||null}),h(null),(R=window.showToast)==null||R.call(window,i("serverRoute.saveSuccess"),"success"),await T()}catch(U){j(U instanceof Error?U.message:i("serverRoute.saveFailed"))}finally{x(!1)}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await f1(z),(R=window.showToast)==null||R.call(window,i("serverRoute.deleteSuccess"),"success"),await T()}catch(I){j(I instanceof Error?I.message:i("serverRoute.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:T,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>$(),children:[t.jsx(_n,{size:16}),i("serverRoute.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(vt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(z.match)?z.match:[]).slice(0,3).map((G,R)=>t.jsx("span",{className:"tag",children:G},R)),Array.isArray(z.match)&&z.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",z.match.length-3]}):null,!Array.isArray(z.match)||z.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Nj(z.action)})}),t.jsx("td",{children:z.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>$(z),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:z=>h({...p,remarks:z.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:z=>h({...p,action:z.target.value}),children:xx.map(z=>t.jsx("option",{value:z.value,children:z.label},z.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:z=>h({...p,match:z.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:z=>h({...p,action_value:z.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Nn,{size:16}),i(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function kj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Cj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function tn(s){return s==null?"—":wn(s)}function zj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Tj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,S]=f.useState(null),[v,x]=f.useState(!0),[y,j]=f.useState(!1),[T,$]=f.useState(""),[W,K]=f.useState(""),[z,G]=f.useState(null),[R,U]=f.useState(null),I=(_,N)=>{_.dataTransfer.effectAllowed="move",G(N)},ie=(_,N)=>{if(_.preventDefault(),z===null||z===N)return;const E=[...o],re=E[z];E.splice(z,1),E.splice(N,0,re),G(N),d(E)},oe=async()=>{G(null);try{await fh(o.map(_=>_.id)),await he()}catch(_){$(_ instanceof Error?_.message:i("plan.sortFailed")),await he()}},D=(_,N)=>{U(N)},Q=_=>{if(R===null)return;const N=_.touches[0],E=document.elementFromPoint(N.clientX,N.clientY);if(!E)return;const re=E.closest("tr, [data-index]");if(!re)return;const me=re.getAttribute("data-index");if(me===null)return;const we=Number(me);if(we!==R&&we>=0&&we<o.length){const Se=[...o],De=Se[R];Se.splice(R,1),Se.splice(we,0,De),U(we),d(Se)}},te=async()=>{if(R!==null){U(null);try{await fh(o.map(_=>_.id)),await he()}catch(_){$(_ instanceof Error?_.message:i("plan.sortFailed")),await he()}}},he=f.useCallback(async()=>{x(!0),$("");try{const[_,N]=await Promise.all([yl(),ps()]);d(_),h(N)}catch(_){$(_ instanceof Error?_.message:i("plan.loadFailed"))}finally{x(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}he()},[he,s]);function w(_){S(kj(_)),$(""),K("")}async function L(_){var N,E;if(_.preventDefault(),!!m){j(!0),$(""),K("");try{await h1(Cj(m)),S(null),(N=window.showToast)==null||N.call(window,i("plan.saveSuccess"),"success"),await he()}catch(re){(E=window.showToast)==null||E.call(window,re instanceof Error?re.message:i("plan.saveFailed"),"error")}finally{j(!1)}}}async function ee(_,N){var E;try{await cd(_,{show:N?0:1}),await he()}catch(re){(E=window.showToast)==null||E.call(window,re instanceof Error?re.message:i("plan.toggleFailed"),"error")}}async function A(_,N){var E;try{await cd(_,{renew:N?0:1}),await he()}catch(re){(E=window.showToast)==null||E.call(window,re instanceof Error?re.message:i("plan.toggleFailed"),"error")}}async function ae(_,N){var E;try{await cd(_,{allow_subscribe_url:N?0:1}),await he()}catch(re){(E=window.showToast)==null||E.call(window,re instanceof Error?re.message:i("plan.toggleFailed"),"error")}}async function H(_){var N;(N=window.showConfirm)==null||N.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var E,re;$(""),K("");try{await x1(_),(E=window.showToast)==null||E.call(window,i("plan.deleteSuccess"),"success"),await he()}catch(me){(re=window.showToast)==null||re.call(window,me instanceof Error?me.message:i("plan.deleteFailed"),"error")}}})}function F(_){var N;return((N=p.find(E=>E.id===_))==null?void 0:N.name)??`#${_}`}function k(_){return Number(_.allow_subscribe_url??1)===1}function ce(_,N){S(E=>E&&{...E,[_]:N})}return t.jsxs($t,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:he,disabled:v,children:[t.jsx(zt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(_n,{size:16}),i("plan.add")]})]})]}),T?t.jsx("div",{className:"form-error",children:T}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&o.length===0?t.jsx(vt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.allowSubscribeUrl")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((_,N)=>t.jsxs("tr",{draggable:!0,onDragStart:E=>I(E,N),onDragOver:E=>ie(E,N),onDragEnd:oe,onTouchStart:E=>D(E,N),onTouchMove:Q,onTouchEnd:te,"data-index":N,className:z===N||R===N?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ss,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ee(_.id,_.show)},title:_.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),A(_.id,_.renew)},title:_.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k(_)?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ae(_.id,k(_)?1:0)},title:k(_)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(us,{size:14}),_.count??0]})}),t.jsx("td",{children:F(_.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:tn(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:tn(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:tn(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:tn(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:tn(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:tn(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:tn(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:tn(_.reset_price)})]})]})}),t.jsxs("td",{children:[_.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:E=>{E.stopPropagation(),w(_)},children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:E=>{E.stopPropagation(),H(_.id)},children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},_.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((_,N)=>t.jsxs("div",{className:`mobile-node-card ${z===N||R===N?"dragging":""}`,draggable:!0,onDragStart:E=>I(E,N),onDragOver:E=>ie(E,N),onDragEnd:oe,onTouchStart:E=>D(E,N),onTouchMove:Q,onTouchEnd:te,"data-index":N,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ss,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:_.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:E=>{E.stopPropagation(),w(_)},children:[t.jsx(qt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:E=>{E.stopPropagation(),H(_.id)},children:[t.jsx(Yt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ee(_.id,_.show)},title:_.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),A(_.id,_.renew)},title:_.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${k(_)?"active":""}`,type:"button",onClick:E=>{E.stopPropagation(),ae(_.id,k(_)?1:0)},title:k(_)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(us,{size:12,style:{marginRight:4}}),_.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:F(_.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[_.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:tn(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:tn(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:tn(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:tn(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:tn(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:tn(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:tn(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:tn(_.reset_price)})]})]})]},_.id)),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:L,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:_=>ce("name",_.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:_=>ce("content",_.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:_=>ce("group_id",_.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),p.map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:_=>ce("transfer_enable",_.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:_=>ce("device_limit",_.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:_=>ce("speed_limit",_.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:_=>ce("capacity_limit",_.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:_=>ce("reset_traffic_method",_.target.value),children:zj(i).map(_=>t.jsx("option",{value:_.value,children:_.label},_.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.allow_subscribe_url==="1",onChange:_=>ce("allow_subscribe_url",_.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:_=>ce("month_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:_=>ce("quarter_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:_=>ce("half_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:_=>ce("year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:_=>ce("two_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:_=>ce("three_year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:_=>ce("onetime_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:_=>ce("reset_price",_.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:_=>ce("force_update",String(_.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Nn,{size:16}),i(y?"plan.saving":"common.save")]})]})]})]})}):null]})}const fd="模糊",Th={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Eh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Mh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${p} ${h}:${m}`}function Dh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),S=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${p} ${h}:${m}:${S}`}function Ah(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Rn(s){return`${wn(Number(s??0))} ₫`}const Dx="adminzic_user_cache";function Ej(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Dx);return s?JSON.parse(s):{}}catch{return{}}}function Mj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Dx,JSON.stringify(s))}catch{}}const li=(s,i)=>`${s}:${i}`;function Dj(){var M,ye,Be,ve,rt;const s=Dt(),i=Wn(),{t:o}=Ze(),d=f.useCallback(Y=>{switch(Y){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${Y}`,cls:""}}},[o]),p=f.useCallback(Y=>{const Ne=`order.period.${Y}`,_e=o(Ne);return _e===Ne?Eh[Y]??Y:_e},[o]),[h,m]=f.useState([]),[S,v]=f.useState([]),[x,y]=f.useState({}),[j,T]=f.useState(0),[$,W]=f.useState(1),[K]=f.useState(15),[z,G]=f.useState(""),[R,U]=f.useState("trade_no"),[I,ie]=f.useState(!0),[oe,D]=f.useState(null),[Q,te]=f.useState(!1),[he,w]=f.useState(""),[L,ee]=f.useState(""),[A,ae]=f.useState(null),[H,F]=f.useState(null),[k,ce]=f.useState(!1),[_,N]=f.useState(null),[E,re]=f.useState(!1),[me,we]=f.useState(()=>Ej()),Se=f.useCallback((Y,Ne)=>{const _e=li(Ne,Y);F(null),ae(Ee=>Ee===_e?null:_e)},[]),De=f.useCallback((Y,Ne)=>{const _e=li(Ne,Y);ae(null),F(Ee=>Ee===_e?null:_e)},[]),ot=f.useCallback(Y=>{const Ne=Number(Y.coupon_id??0);return Ne?x[Ne]??`#${Ne}`:null},[x]);f.useEffect(()=>{if(!A&&!H)return;const Y=()=>{ae(null),F(null)},Ne=Ee=>{const Ie=Ee.target;Ie!=null&&Ie.closest(".order-dropdown-trigger, .order-dropdown-menu")||Y()},_e=Ee=>{Ee.key==="Escape"&&Y()};return document.addEventListener("pointerdown",Ne),document.addEventListener("keydown",_e),()=>{document.removeEventListener("pointerdown",Ne),document.removeEventListener("keydown",_e)}},[A,H]),f.useEffect(()=>{const Y=new Set;if(h.forEach(_e=>{_e.user_id&&!me[_e.user_id]&&Y.add(_e.user_id),_e.invite_user_id&&!me[_e.invite_user_id]&&Y.add(_e.invite_user_id)}),_&&(_.user_id&&!me[_.user_id]&&Y.add(_.user_id),_.invite_user_id&&!me[_.invite_user_id]&&Y.add(_.invite_user_id)),Y.size===0)return;const Ne=Array.from(Y);Promise.allSettled(Ne.map(async _e=>{try{const Ee=await vx(_e);if(Ee&&Ee.data)return{id:_e,email:Ee.data.email,invite_user:Ee.data.invite_user}}catch(Ee){console.error(`Failed to fetch user ${_e}:`,Ee)}return null})).then(_e=>{const Ee={};_e.forEach(Ie=>{var Ke;if(Ie.status==="fulfilled"&&Ie.value){const Ye=Ie.value;Ee[Ye.id]={email:Ye.email,invite_user_email:((Ke=Ye.invite_user)==null?void 0:Ke.email)||null},Ye.invite_user&&(Ee[Ye.invite_user.id]={email:Ye.invite_user.email})}}),Object.keys(Ee).length>0&&we(Ie=>{const Ke={...Ie,...Ee};return Mj(Ke),Ke})})},[h,_,me]);const qe={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},Pe=f.useCallback(async(Y=1,Ne,_e)=>{var Ee,Ie;ie(!0),w("");try{let Ke;if(Ne)if(_e==="email"){const mt=(Ee=(await Dd(1,1,[{key:"email",condition:fd,value:Ne}])).data)==null?void 0:Ee[0];if(!mt){m([]),T(0),ie(!1);return}Ke=[{key:"user_id",condition:"=",value:String(mt.id)}]}else if(_e==="invite_user_email"){const mt=(Ie=(await Dd(1,1,[{key:"email",condition:fd,value:Ne}])).data)==null?void 0:Ie[0];if(!mt){m([]),T(0),ie(!1);return}Ke=[{key:"invite_user_id",condition:"=",value:String(mt.id)}]}else Ke=[{key:_e||"trade_no",condition:_e==="trade_no"||_e==="user_id"||_e==="invite_user_id"||_e==="plan_id"||_e==="status"?"=":fd,value:Ne}];const Ye=await g1({current:Y,pageSize:K,filter:Ke});m(Ye.data),T(Ye.total)}catch(Ke){w(Ke instanceof Error?Ke.message:o("order.loadFailed"))}finally{ie(!1)}},[K,o]),Nt=f.useCallback(Y=>{const Ne=String(Y);U("user_id"),G(Ne),ce(!0),W(1),Pe(1,Ne,"user_id")},[Pe]);f.useEffect(()=>{if(!At()){s.replace("/login");return}const Y=new URLSearchParams(i.search),Ne=Y.get("filter_email"),_e=Y.get("invite_user_email"),Ee=Y.get("user_id")||Y.get("filter_user_id");let Ie="",Ke="trade_no";Ee?(Ie=Ee,Ke="user_id",U("user_id"),G(Ee),ce(!0)):Ne?(Ie=Ne,Ke="email",U("email"),G(Ne),ce(!0)):_e&&(Ie=_e,Ke="invite_user_email",U("invite_user_email"),G(_e),ce(!0)),Pe(1,Ie,Ke),yl().then(v).catch(()=>{}),yx(1,1e3).then(Ye=>{const Ae={};Ye.data.forEach(mt=>{Ae[mt.id]=mt.code}),y(Ae)}).catch(()=>{})},[Pe,s,i.search]);function St(){W(1),Pe(1,z,R)}function It(){G(""),W(1),Pe(1)}function gt(Y){W(Y),Pe(Y,z,R)}async function Qt(Y){var Ne,_e;ae(null),F(null),w(""),ee("");try{await b1(Y),(Ne=window.showToast)==null||Ne.call(window,o("order.paidSuccess"),"success"),await Pe($,z,R)}catch(Ee){(_e=window.showToast)==null||_e.call(window,Ee instanceof Error?Ee.message:o("order.paidFailed"),"error")}}async function Ot(Y){var Ne,_e;ae(null),F(null),w(""),ee("");try{await y1(Y),(Ne=window.showToast)==null||Ne.call(window,o("order.cancelSuccess"),"success"),await Pe($,z,R)}catch(Ee){(_e=window.showToast)==null||_e.call(window,Ee instanceof Error?Ee.message:o("order.cancelFailed"),"error")}}async function nn(Y,Ne){var _e,Ee;ae(null),F(null),w(""),ee("");try{await v1(Y,Ne),(_e=window.showToast)==null||_e.call(window,o("order.commissionSuccess"),"success"),await Pe($,z,R)}catch(Ie){(Ee=window.showToast)==null||Ee.call(window,Ie instanceof Error?Ie.message:o("order.commissionFailed"),"error")}}async function ge(Y){N(Y),re(!0);try{const Ne=await j1(Y.id);Ne&&Ne.data&&N(Ne.data)}catch(Ne){console.error("Failed to fetch order detail:",Ne)}finally{re(!1)}}function Oe(){var Y;D({email:"",plan_id:(Y=S[0])!=null&&Y.id?String(S[0].id):"",period:"month_price",total_amount:"0"}),w(""),ee("")}async function Bt(Y){var Ne,_e;if(Y.preventDefault(),!!oe){te(!0),w(""),ee("");try{await bx({email:oe.email,plan_id:Number(oe.plan_id),period:oe.period,total_amount:Number(oe.total_amount)*100}),D(null),(Ne=window.showToast)==null||Ne.call(window,o("order.assignSuccess"),"success"),await Pe($,z,R)}catch(Ee){(_e=window.showToast)==null||_e.call(window,Ee instanceof Error?Ee.message:o("order.assignFailed"),"error")}finally{te(!1)}}}const jt=Math.ceil(j/K),pn=_?ot(_):null;return t.jsxs($t,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
          width: 900px;
          min-width: 900px;
          table-layout: fixed;
        }
        .order-table th:nth-child(1) { width: 150px; }
        .order-table th:nth-child(2) { width: 230px; }
        .order-table th:nth-child(3) { width: 155px; }
        .order-table th:nth-child(4) { width: 165px; }
        .order-table th:nth-child(5) { width: 170px; }
        .order-table th:nth-child(6) { width: 128px; }
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
          .mobile-card-body-row .value .order-coupon-badge {
            margin-left: auto;
          }
        }
        @media (min-width: 769px) {
          .mobile-order-list {
            display: none !important;
          }
        }
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${k?"active":""}`,type:"button",onClick:()=>ce(!k),children:[t.jsx(ds,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Oe,children:[t.jsx(_n,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Pe($,z,R),disabled:I,children:[t.jsx(zt,{size:16}),o(I?"common.refreshing":"common.refresh")]})]}),k&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:R,onChange:Y=>U(Y.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input search-input",value:z,onChange:Y=>G(Y.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:Y=>Y.key==="Enter"&&St()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:St,children:[t.jsx(ds,{size:16}),o("order.filter")]}),z?t.jsxs("button",{className:"ghost-button",type:"button",onClick:It,children:[t.jsx(st,{size:16}),o("order.clearFilter")]}):null]}),he?t.jsx("div",{className:"form-error",children:he}):null,L?t.jsx("div",{className:"form-success",children:L}):null,I&&h.length===0?t.jsx(vt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[h.map(Y=>{var Ye;const Ne=d(Y.status),_e=Y.invite_user_id!==null,Ee=qe[Y.commission_status]??{label:`#${Y.commission_status}`,dotClass:"pending"},Ie=ot(Y),Ke=(Ye=me[Y.user_id])==null?void 0:Ye.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>ge(Y),title:o("order.detailsTitle"),children:Ah(Y.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",Y.id]}),t.jsx("span",{className:"order-type-pill",children:Th[Y.type]??`#${Y.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Ke?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Nt(Y.user_id),title:o("order.filterByUser"),children:Ke}):t.jsxs("span",{className:"order-subline",children:["ID: ",Y.user_id]}),t.jsx("strong",{className:"order-plan-name",children:Y.plan_name??`Plan #${Y.plan_id}`}),t.jsx("span",{className:"period-capsule",children:p(Y.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Rn(Y.total_amount)}),Ie?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Ie]}):null,Number(Y.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Rn(Y.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{children:Ne.label}),Y.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ae=>{Ae.stopPropagation(),Se(Y.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),A===li("desktop",Y.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ae=>Ae.stopPropagation(),onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{ae(null),Qt(Y.trade_no)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{ae(null),Ot(Y.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[_e?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Rn(Y.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ee.dotClass}`}),t.jsx("span",{children:Ee.label}),Y.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ae=>{Ae.stopPropagation(),De(Y.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),H===li("desktop",Y.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ae=>Ae.stopPropagation(),onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),nn(Y.trade_no,1)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),nn(Y.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Mh(Y.created_at)})})]},Y.trade_no)}),!I&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),jt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>gt($-1),children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",jt]}),t.jsx("button",{className:"mini-button",disabled:$>=jt,onClick:()=>gt($+1),children:t.jsx(ba,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(Y=>{var Ye;const Ne=d(Y.status),_e=Y.invite_user_id!==null,Ee=qe[Y.invite_user_id!==null?Y.commission_status:0]??{label:`#${Y.commission_status}`,dotClass:"pending"},Ie=(Ye=me[Y.user_id])==null?void 0:Ye.email,Ke=ot(Y);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>ge(Y),children:Ah(Y.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",Y.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ne.label}),Y.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ae=>{Ae.stopPropagation(),Se(Y.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===li("mobile",Y.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ae=>Ae.stopPropagation(),onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{ae(null),Qt(Y.trade_no)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{ae(null),Ot(Y.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Ie?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Nt(Y.user_id),children:Ie}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",Y.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Th[Y.type]??`#${Y.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:Y.plan_name??`Plan #${Y.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(Y.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Rn(Y.total_amount)})]}),Ke?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Ke})})]}):null,Number(Y.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Rn(Y.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:_e?t.jsx("strong",{children:Rn(Y.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),_e&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ee.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ee.label}),Y.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Ae=>{Ae.stopPropagation(),De(Y.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),H===li("mobile",Y.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Ae=>Ae.stopPropagation(),onClick:Ae=>Ae.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),nn(Y.trade_no,1)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),nn(Y.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Mh(Y.created_at)})]})]})]},Y.trade_no)}),!I&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,jt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:$<=1,onClick:()=>gt($-1),children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[$," / ",jt]}),t.jsx("button",{className:"mini-button",disabled:$>=jt,onClick:()=>gt($+1),children:t.jsx(ba,{size:16})})]}):null]})]}),_?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:E?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(vt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(M=me[_.user_id])!=null&&M.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{N(null),Nt(_.user_id)},title:"Filter by this user",children:me[_.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:_.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:p(_.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(_.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:_.plan_name??`Plan #${_.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:_.callback_no||"-"})]}),pn?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:pn})]}):null]}),_.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(ye=me[_.invite_user_id])!=null&&ye.email||(Be=me[_.user_id])!=null&&Be.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const Y=String(_.invite_user_id);U("invite_user_id"),G(Y),ce(!0),N(null),Pe(1,Y,"invite_user_id")},title:"Filter by this inviter",children:((ve=me[_.invite_user_id])==null?void 0:ve.email)||((rt=me[_.user_id])==null?void 0:rt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Rn(_.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(qe[_.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(qe[_.commission_status]??{label:`#${_.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Rn(_.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Rn(_.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Rn(_.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Rn(_.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Rn(_.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Dh(_.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Dh(_.updated_at)})]})]})]})})]})}):null,oe?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>D(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Bt,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:oe.email,onChange:Y=>D({...oe,email:Y.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:oe.plan_id,onChange:Y=>D({...oe,plan_id:Y.target.value}),children:S.map(Y=>t.jsx("option",{value:Y.id,children:Y.name},Y.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:oe.period,onChange:Y=>D({...oe,period:Y.target.value}),children:Object.entries(Eh).map(([Y,Ne])=>t.jsx("option",{value:Y,children:Ne},Y))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:oe.total_amount,onChange:Y=>D({...oe,total_amount:Y.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>D(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:Q,children:[t.jsx(Nn,{size:16}),o(Q?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Mo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Do(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function hd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Aj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,S]=f.useState(1),[v,x]=f.useState([]),[y,j]=f.useState(null),[T,$]=f.useState(!0),[W,K]=f.useState(!1),[z,G]=f.useState(""),[R,U]=f.useState(""),[I,ie]=f.useState("");f.useEffect(()=>{y||ie("")},[y]);const oe=f.useCallback(async(w=1)=>{$(!0),G("");try{const L=await yx(w,15);d(L.data),h(L.total)}catch(L){G(L instanceof Error?L.message:i("coupon.loadFailed"))}finally{$(!1)}},[]);f.useEffect(()=>{if(!At()){s.replace("/login");return}oe(1),yl().then(x).catch(()=>{})},[oe,s]);async function D(w){var L,ee;if(w.preventDefault(),!!y){K(!0),G(""),U("");try{const A=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await w1({id:y.id,name:y.name,type:Number(y.type),value:A,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,limit_use_with_user:y.limit_use_with_user?Number(y.limit_use_with_user):null,limit_plan_ids:y.limit_plan_ids.length?y.limit_plan_ids:null,limit_period:y.limit_period.length?y.limit_period:null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(L=window.showToast)==null||L.call(window,i("coupon.saveSuccess"),"success"),await oe(m)}catch(A){(ee=window.showToast)==null||ee.call(window,A instanceof Error?A.message:i("coupon.saveFailed"),"error")}finally{K(!1)}}}async function Q(w){var L;try{await N1(w),await oe(m)}catch(ee){(L=window.showToast)==null||L.call(window,ee instanceof Error?ee.message:i("coupon.toggleFailed"),"error")}}async function te(w){var L;(L=window.showConfirm)==null||L.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var ee,A;try{await _1(w),(ee=window.showToast)==null||ee.call(window,i("coupon.deleteSuccess"),"success"),await oe(m)}catch(ae){(A=window.showToast)==null||A.call(window,ae instanceof Error?ae.message:i("coupon.deleteFailed"),"error")}}})}const he=Math.ceil(p/15);return t.jsxs($t,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[p," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void oe(m),disabled:T,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(hd()),children:[t.jsx(_n,{size:16}),i("coupon.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,T&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var ae,H;const L=(ae=w.limit_plan_ids)==null?void 0:ae.map(F=>{var k;return((k=v.find(ce=>ce.id===F))==null?void 0:k.name)||`#${F}`}).join(", "),ee=Do(i),A=(H=w.limit_period)==null?void 0:H.map(F=>ee[F]||F).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?wn(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[L?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",L]})}):null,A?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",A]})}):null,!L&&!A?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Q(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Mo(w.started_at)," — ",Mo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(hd(w)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void te(w.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},w.id)}),!T&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var L,ee,A,ae;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Va(w.code).then(H=>{var F;(F=window.showToast)==null||F.call(window,H?`${i("coupon.copiedCode")}: ${w.code}`:i("common.copyFailed"),H?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(L=w.limit_plan_ids)!=null&&L.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(H=>{const F=v.find(k=>k.id===H);return t.jsx("span",{className:"res-pill plan-pill",children:F?F.name:`#${H}`},H)})})]}):null,(ee=w.limit_period)!=null&&ee.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(H=>t.jsx("span",{className:"res-pill cycle-pill",children:Do(i)[H]||H},H))})]}):null,!((A=w.limit_plan_ids)!=null&&A.length)&&!((ae=w.limit_period)!=null&&ae.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Mo(w.started_at)," — ",Mo(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Q(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?wn(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(hd(w)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void te(w.id),"aria-label":i("common.delete"),children:t.jsx(Yt,{size:15})})]})]})]},w.id)}),!T&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),oe(m-1)},children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),oe(m+1)},children:t.jsx(ba,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:D,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:w=>j({...y,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:y.type,onChange:w=>j({...y,type:w.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:w=>j({...y,value:w.target.value})})]})]}),y.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:y.code,onChange:w=>j({...y,code:w.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:w=>j({...y,started_at:w.target.value}),onClick:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)},onFocus:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:w=>j({...y,ended_at:w.target.value}),onClick:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)},onFocus:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:w=>j({...y,limit_use:w.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use_with_user,onChange:w=>j({...y,limit_use_with_user:w.target.value}),placeholder:i("coupon.unlimited")})]})]}),y.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:w=>j({...y,generate_count:w.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),y.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_plan_ids.map(w=>{const L=v.find(ee=>ee.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const ee=y.limit_plan_ids.filter(A=>A!==w);j({...y,limit_plan_ids:ee})},children:[L?L.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:I,onChange:w=>ie(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const L=y.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:ee=>{const A=ee.target.checked?[...y.limit_plan_ids,w.id]:y.limit_plan_ids.filter(ae=>ae!==w.id);j({...y,limit_plan_ids:A})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),y.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const L=y.limit_period.filter(ee=>ee!==w);j({...y,limit_period:L})},children:[Do(i)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Do(i)).map(([w,L])=>{const ee=y.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:ee,onChange:A=>{const ae=A.target.checked?[...y.limit_period,w]:y.limit_period.filter(H=>H!==w);j({...y,limit_period:ae})}}),t.jsx("span",{children:L})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Nn,{size:16}),i(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Ao(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Oj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function xd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Uj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,S]=f.useState(1),[v,x]=f.useState([]),[y,j]=f.useState(null),[T,$]=f.useState(!0),[W,K]=f.useState(!1),[z,G]=f.useState(""),[R,U]=f.useState(""),[I,ie]=f.useState("");f.useEffect(()=>{y||ie("")},[y]);const oe=Oj(i),D=f.useCallback(async(w=1)=>{$(!0),G("");try{const L=await S1(w,15);d(L.data),h(L.total)}catch(L){G(L instanceof Error?L.message:i("giftcard.loadFailed"))}finally{$(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}D(1),yl().then(x).catch(()=>{})},[D,s]);async function Q(w){var L,ee;if(w.preventDefault(),!!y){K(!0),G(""),U("");try{const A=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await k1({id:y.id,name:y.name,type:Number(y.type),value:A,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,plan_id:y.plan_id?Number(y.plan_id):null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(L=window.showToast)==null||L.call(window,i("giftcard.saveSuccess"),"success"),await D(m)}catch(A){(ee=window.showToast)==null||ee.call(window,A instanceof Error?A.message:i("giftcard.saveFailed"),"error")}finally{K(!1)}}}async function te(w){var L;(L=window.showConfirm)==null||L.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var ee,A;try{await C1(w),(ee=window.showToast)==null||ee.call(window,i("giftcard.deleteSuccess"),"success"),await D(m)}catch(ae){(A=window.showToast)==null||A.call(window,ae instanceof Error?ae.message:i("giftcard.deleteFailed"),"error")}}})}const he=Math.ceil(p/15);return t.jsxs($t,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[p," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(m),disabled:T,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(xd()),children:[t.jsx(_n,{size:16}),i("giftcard.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,T&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var L;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:oe[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?wn(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((L=v.find(ee=>ee.id===w.plan_id))==null?void 0:L.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Ao(w.started_at)," — ",Ao(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(xd(w)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void te(w.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},w.id)}),!T&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var L;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:oe[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Va(w.code).then(ee=>{var A;(A=window.showToast)==null||A.call(window,ee?i("giftcard.copiedCode").replace("{code}",w.code):i("common.copyFailed"),ee?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((L=v.find(ee=>ee.id===w.plan_id))==null?void 0:L.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Ao(w.started_at)," — ",Ao(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?wn(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":oe[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(xd(w)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void te(w.id),"aria-label":i("common.delete"),children:t.jsx(Yt,{size:15})})]})]})]},w.id)}),!T&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),D(m-1)},children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),D(m+1)},children:t.jsx(ba,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Q,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:w=>j({...y,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:y.type,onChange:w=>j({...y,type:w.target.value}),children:Object.entries(oe).map(([w,L])=>t.jsx("option",{value:w,children:L},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:w=>j({...y,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:w=>j({...y,started_at:w.target.value}),onClick:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)},onFocus:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:w=>j({...y,ended_at:w.target.value}),onClick:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)},onFocus:w=>{var L,ee;return(ee=(L=w.currentTarget).showPicker)==null?void 0:ee.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:w=>j({...y,limit_use:w.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),y.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:w=>j({...y,generate_count:w.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),y.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=v.find(L=>String(L.id)===y.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...y,plan_id:""})},children:[w?w.name:`#${y.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:I,onChange:w=>ie(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!y.plan_id,onChange:()=>{j({...y,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),v.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const L=String(w.id)===y.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:ee=>{ee.target.checked&&j({...y,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Nn,{size:16}),i(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const ns="Tương đối",xa="=";function Oo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Rj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Oh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function gd(s){return+(s/1073741824).toFixed(2)}function bd(s){return Math.round(s*1073741824)}function Uo(s){return(s/1073741824).toFixed(2)}function Hj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function ii(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Rd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ax="user_visible_columns";function Lj(){if(typeof window<"u")try{const s=localStorage.getItem(Ax);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Rd.filter(s=>s.defaultVisible).map(s=>s.key))}const Yo=[{value:"email",label:"Email",condition:ns,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:xa,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:xa,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:xa,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:xa,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:ns,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:xa,placeholder:"12345"},{value:"uuid",label:"UUID",condition:ns,placeholder:"UUID"},{value:"token",label:"Token",condition:ns,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:ns,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:xa,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:xa,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:xa,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:xa,placeholder:"1780366403"}],qj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Wt(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Bj(s,i){var p;const o=((p=Yo.find(h=>h.value===s))==null?void 0:p.label)??s,d=h=>{const m=i(h);return m===h?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function yd(s){return Yo.find(i=>i.value===s)??Yo[0]}function Gj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Yj(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState([]),[S,v]=f.useState([]),[x,y]=f.useState(0),[j,T]=f.useState(1),[$,W]=f.useState(""),[K,z]=f.useState("email"),[G,R]=f.useState(!0),[U,I]=f.useState(""),[ie,oe]=f.useState(Lj),[D,Q]=f.useState(!1),te=f.useRef(null),[he,w]=f.useState(null),[L,ee]=f.useState(null),[A,ae]=f.useState({}),[H,F]=f.useState(!1),[k,ce]=f.useState(!1),[_,N]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[E,re]=f.useState(!1),[me,we]=f.useState(null),[Se,De]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[ot,qe]=f.useState(!1),[Pe,Nt]=f.useState(null),[St,It]=f.useState(null),[gt,Qt]=f.useState([]),[Ot,nn]=f.useState(0),[ge,Oe]=f.useState(1),[Bt]=f.useState(10),[jt,pn]=f.useState(!1),[M,ye]=f.useState("");f.useEffect(()=>{function b(pe){const ue=pe.target instanceof Element?pe.target:null;he!==null&&(!ue||!ue.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&w(null),D&&te.current&&!te.current.contains(pe.target)&&Q(!1)}return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[he,D]);function Be(b){oe(pe=>{const ue=new Set(pe);ue.has(b)?ue.delete(b):ue.add(b);try{localStorage.setItem(Ax,JSON.stringify([...ue]))}catch{}return ue})}const ve=b=>ie.has(b),rt=Rd.filter(b=>ie.has(b.key)).length,Y=f.useCallback(async(b=1,pe,ue)=>{R(!0),I("");try{const Ce=pe==null?void 0:pe.trim(),xt=yd(ue||"email"),$n=Ce?[{key:xt.value,condition:xt.condition,value:Ce}]:void 0,Qn=await Dd(b,15,$n);p(Qn.data),y(Qn.total)}catch(Ce){I(Ce instanceof Error?Ce.message:o("user.loadFailed"))}finally{R(!1)}},[]),Ne=f.useCallback(async()=>{try{const[b,pe]=await Promise.all([yl(),ps()]);m(b),v(pe)}catch{}},[]);f.useEffect(()=>{if(!At()){s.replace("/login");return}const b=new URLSearchParams(i.search),ue=[["email",b.get("email")||b.get("filter_email")],["id",b.get("id")||b.get("user_id")||b.get("filter_user_id")],["plan_id",b.get("plan_id")],["invite_user_id",b.get("invite_user_id")],["invite_by_email",b.get("invite_by_email")],["uuid",b.get("uuid")],["token",b.get("token")],["remarks",b.get("remarks")]].find(([,Ce])=>Ce==null?void 0:Ce.trim());if(ue){const[Ce,xt]=ue,$n=yd(Ce),Qn=(xt==null?void 0:xt.trim())??"";z($n.value),W(Qn),T(1),Y(1,Qn,$n.value)}else Y(1);Ne()},[Y,Ne,s,i.search]);function _e(){T(1),Y(1,$,K)}function Ee(){W(""),T(1),Y(1)}function Ie(b){T(b),Y(b,$,K)}function Ke(b){if(b.plan_name)return b.plan_name;if(!b.plan_id)return"—";const pe=h.find(ue=>ue.id===b.plan_id);return pe?pe.name:`#${b.plan_id}`}function Ye(b){if(!b.group_id)return"—";const pe=S.find(ue=>ue.id===b.group_id);return pe?pe.name:`#${b.group_id}`}function Ae(b,pe){const ue=o(b);return ue===b?pe:ue}function mt(b){const pe=Number(b.device_limit??0);return pe>0?`${Number(b.device_bound_count??0)} / ${pe}`:Ae("user.unlimited","Unlimited")}function ri(b){const pe=Number(b.device_bound_count??0),ue=Number(b.device_pending_count??0),Ce=Number(b.device_banned_count??0),xt=Number(b.device_online_count??0),$n=Number(b.alive_ip??0),Qn=Number(b.device_limit??0),Zo=Qn>0?`${pe} / ${Qn}`:`${pe} / ${Ae("user.unlimited","Unlimited")}`,di=[`${Ae("user.deviceBound","Bound")}: ${Zo}`,`${Ae("user.devicePending","Pending")}: ${ue}`,`${Ae("user.deviceBanned","Banned")}: ${Ce}`,`${Ae("user.deviceOnline","Online devices")}: ${xt}`,`${Ae("user.deviceOnlineIp","Online IP")}: ${$n}`];return b.ips&&di.push(b.ips),di.join(`
`)}function vl(b){s.push(`/device?user_id=${encodeURIComponent(String(b.id))}`)}function Wa(b,pe="left"){const ue=`${Ae("user.deviceOnlineShort","Online")}: ${Number(b.device_online_count??0)} | ${Ae("user.deviceIpShort","IP")}: ${Number(b.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${pe==="right"?"align-right":""}`,type:"button",title:ri(b),onClick:()=>vl(b),children:[t.jsx("span",{className:"device-cell-primary",children:mt(b)}),t.jsx("span",{className:"device-cell-secondary",children:ue})]})}async function Gn(b){var Ce,xt;const pe=b.subscribe_url;if(!pe){(Ce=window.showToast)==null||Ce.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ue=await Va(pe);(xt=window.showToast)==null||xt.call(window,o(ue?"user.toastUrlCopied":"common.copyFailed"),ue?"success":"error"),w(null)}function mn(b){var pe;w(null),(pe=window.showConfirm)==null||pe.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ue,Ce;try{await M1(b.id),(ue=window.showToast)==null||ue.call(window,o("user.toastSecretResetSuccess"),"success"),await Y(j,$,K)}catch(xt){(Ce=window.showToast)==null||Ce.call(window,xt instanceof Error?xt.message:o("user.toastSecretResetFailed"),"error")}}})}function Yn(b){var pe;w(null),(pe=window.showConfirm)==null||pe.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ue,Ce;try{await T1(b.id),(ue=window.showToast)==null||ue.call(window,o("user.toastDeletedSuccess"),"success"),await Y(j,$,K)}catch(xt){(Ce=window.showToast)==null||Ce.call(window,xt instanceof Error?xt.message:o("user.toastDeletedFailed"),"error")}}})}function ln(b){var ue;w(null);const pe=b.subscribe_url;if(!pe){(ue=window.showToast)==null||ue.call(window,o("user.toastNoSubscribeUrl"),"error");return}Nt({url:pe,userId:b.id})}function q(b){w(null),s.push(`/order?user_id=${b.id}`)}function de(b){w(null),s.push(`/subscription?user_id=${b.id}`)}function se(b){w(null),z("invite_user_id"),W(String(b.id)),Y(1,String(b.id),"invite_user_id")}async function Re(b,pe){pn(!0),ye("");try{const ue=await H1(b,pe,Bt);Qt(ue.data||[]),nn(ue.total||0),Oe(pe)}catch(ue){ye(ue instanceof Error?ue.message:o("user.historyLoading"))}finally{pn(!1)}}function Ve(b){w(null),It(b),Re(b.id,1)}function et(b){w(null),we(b.email),De({plan_id:"",period:"month_price",total_amount:""})}async function ft(b){var pe,ue;if(b.preventDefault(),!!me){qe(!0);try{await bx({email:me,plan_id:Number(Se.plan_id),period:Se.period,total_amount:(Number(Se.total_amount)||0)*100}),(pe=window.showToast)==null||pe.call(window,o("user.toastAssignSuccess"),"success"),we(null)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("user.toastAssignFailed"),"error")}finally{qe(!1)}}}function ct(b){w(null),ee(b),ae({id:b.id,email:b.email,invite_user_email:"",password:"",balance:b.balance,commission_balance:b.commission_balance,u:gd(b.u),d:gd(b.d),transfer_enable:gd(b.transfer_enable),device_limit:b.device_limit,network_settings:b.network_settings??"",expired_at:Rj(b.expired_at),plan_id:b.plan_id,banned:b.banned,commission_type:b.commission_type??0,commission_rate:b.commission_rate??"",discount:b.discount??"",speed_limit:b.speed_limit,is_admin:b.is_admin,is_staff:b.is_staff,remarks:b.remarks??""})}function Ue(b,pe){ae(ue=>({...ue,[b]:pe}))}async function Hn(b){var pe,ue;if(b.preventDefault(),!!L){F(!0);try{const Ce={id:L.id,email:A.email,plan_id:A.plan_id||null,expired_at:Oh(String(A.expired_at??"")),transfer_enable:bd(Number(A.transfer_enable??0)),speed_limit:A.speed_limit||null,device_limit:A.device_limit||null,u:bd(Number(A.u??0)),d:bd(Number(A.d??0)),balance:Number(A.balance??0),commission_balance:Number(A.commission_balance??0),commission_rate:A.commission_rate!==""&&A.commission_rate!==null?Number(A.commission_rate):null,commission_type:Number(A.commission_type??0),discount:A.discount!==""&&A.discount!==null?Number(A.discount):null,network_settings:A.network_settings||null,remarks:A.remarks||null,is_admin:Number(A.is_admin??0),is_staff:Number(A.is_staff??0),banned:Number(A.banned??0)};A.invite_user_email&&(Ce.invite_user_email=A.invite_user_email),A.password&&(Ce.password=A.password),await z1(Ce),(pe=window.showToast)==null||pe.call(window,o("user.toastSaveSuccess"),"success"),ee(null),await Y(j,$,K)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("user.toastSaveFailed"),"error")}finally{F(!1)}}}async function ci(b){var pe,ue;b.preventDefault(),re(!0);try{await E1({email_prefix:_.email_prefix,email_suffix:_.email_suffix,password:_.password||void 0,plan_id:_.plan_id?Number(_.plan_id):void 0,expired_at:Oh(_.expired_at)}),(pe=window.showToast)==null||pe.call(window,o("user.toastCreateSuccess"),"success"),ce(!1),N({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await Y(j,$,K)}catch(Ce){(ue=window.showToast)==null||ue.call(window,Ce instanceof Error?Ce.message:o("user.toastCreateFailed"),"error")}finally{re(!1)}}const Sn=Math.ceil(x/15),fs=yd(K);return t.jsxs($t,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[x," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:te,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>Q(!D),children:[t.jsx(hv,{size:16}),o("user.columns")]}),D?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:rt})})}),Rd.map(b=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:ie.has(b.key),onChange:()=>Be(b.key)}),t.jsx("span",{children:Wt(b.key,o)})]},b.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Y(j,$,K),disabled:G,children:[t.jsx(zt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>ce(!0),children:[t.jsx(_n,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:K,onChange:b=>z(b.target.value),children:Yo.map(b=>t.jsx("option",{value:b.value,children:Bj(b.value,o)},b.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input search-input",value:$,onChange:b=>W(b.target.value),placeholder:fs.placeholder,onKeyDown:b=>b.key==="Enter"&&_e()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:_e,children:[t.jsx(ds,{size:16}),o("user.filter")]}),$?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ee,children:[t.jsx(st,{size:16}),o("user.clearFilter")]}):null]}),U?t.jsx("div",{className:"form-error",children:U}):null,G&&d.length===0?t.jsx(vt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${G?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(b=>{const pe=Uo(b.u+b.d),ue=Uo(b.transfer_enable),Ce=parseFloat(pe);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",b.id]}),t.jsx("span",{className:"user-email",title:b.email,children:b.email})]}),b.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ke(b)," / ",b.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(b)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ce>0?Ce>parseFloat(ue)*.9?"high":"ok":""}`,children:[pe," GB"]})," / ",ue," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("devices",o)}),t.jsx("span",{className:"info-val",children:Wa(b,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("expires",o)}),t.jsx("span",{className:"info-val",children:b.expired_at?t.jsx("span",{className:`expiry-date ${b.expired_at<Date.now()/1e3?"expired":""}`,children:Oo(b.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(b.balance/100).toFixed(2)," ₫ / ",(b.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Oo(b.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${he===b.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(he===b.id?null:b.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),he===b.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:xt=>xt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:b.email}),t.jsxs("small",{children:["#",b.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(st,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(b),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(b),children:[t.jsx(dh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(b),children:[t.jsx(jn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>ln(b),children:[t.jsx(rh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>mn(b),children:[t.jsx(Bo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>q(b),children:[t.jsx(sh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>de(b),children:[t.jsx(zd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>se(b),children:[t.jsx(us,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ve(b),children:[t.jsx(rd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(b),children:[t.jsx(Yt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},b.id)}),!G&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ve("id")&&t.jsx("th",{children:Wt("id",o)}),ve("email")&&t.jsx("th",{children:Wt("email",o)}),ve("status")&&t.jsx("th",{children:Wt("status",o)}),ve("plan")&&t.jsx("th",{children:Wt("plan",o)}),ve("group")&&t.jsx("th",{children:Wt("group",o)}),ve("used")&&t.jsx("th",{children:Wt("used",o)}),ve("traffic")&&t.jsx("th",{children:Wt("traffic",o)}),ve("devices")&&t.jsx("th",{children:Wt("devices",o)}),ve("expires")&&t.jsx("th",{children:Wt("expires",o)}),ve("balance")&&t.jsx("th",{children:Wt("balance",o)}),ve("commission")&&t.jsx("th",{children:Wt("commission",o)}),ve("joined")&&t.jsx("th",{children:Wt("joined",o)}),ve("actions")&&t.jsx("th",{children:Wt("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(b=>{const pe=Uo(b.u+b.d),ue=Uo(b.transfer_enable),Ce=parseFloat(pe);return t.jsxs("tr",{children:[ve("id")&&t.jsx("td",{children:b.id}),ve("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:b.email})}),ve("status")&&t.jsx("td",{children:b.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ve("plan")&&t.jsx("td",{children:Ke(b)}),ve("group")&&t.jsx("td",{children:b.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(b)}),ve("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ce>0?Ce>parseFloat(ue)*.9?"high":"ok":""}`,children:pe})}),ve("traffic")&&t.jsx("td",{children:ue}),ve("devices")&&t.jsx("td",{children:Wa(b)}),ve("expires")&&t.jsx("td",{children:b.expired_at?t.jsx("span",{className:`expiry-date ${b.expired_at<Date.now()/1e3?"expired":""}`,children:Oo(b.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ve("balance")&&t.jsx("td",{children:(b.balance/100).toFixed(2)}),ve("commission")&&t.jsx("td",{children:(b.commission_balance/100).toFixed(2)}),ve("joined")&&t.jsx("td",{children:t.jsx("small",{children:Oo(b.created_at)})}),ve("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${he===b.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(he===b.id?null:b.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),he===b.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(b),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(b),children:[t.jsx(dh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(b),children:[t.jsx(jn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>ln(b),children:[t.jsx(rh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>mn(b),children:[t.jsx(Bo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>q(b),children:[t.jsx(sh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>de(b),children:[t.jsx(zd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>se(b),children:[t.jsx(us,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ve(b),children:[t.jsx(rd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(b),children:[t.jsx(Yt,{size:14}),o("user.actionDelete")]})]}):null]})})]},b.id)}),!G&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:rt,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),Sn>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Ie(j-1),children:t.jsx(ga,{size:16})}),Array.from({length:Math.min(5,Sn)},(b,pe)=>{let ue;return Sn<=5||j<=3?ue=pe+1:j>=Sn-2?ue=Sn-4+pe:ue=j-2+pe,t.jsx("button",{className:`mini-button ${ue===j?"active-page":""}`,onClick:()=>Ie(ue),children:ue},ue)}),Sn>5?t.jsxs("span",{className:"page-info",children:["… ",Sn]}):null,t.jsx("button",{className:"mini-button",disabled:j>=Sn,onClick:()=>Ie(j+1),children:t.jsx(ba,{size:16})})]})}):null]}),L?t.jsx("div",{className:"modal-backdrop",onClick:()=>ee(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ee(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Hn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(A.email??""),onChange:b=>Ue("email",b.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(A.invite_user_email??""),onChange:b=>Ue("invite_user_email",b.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(A.password??""),onChange:b=>Ue("password",b.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(A.balance??0)/100).toFixed(2)),onChange:b=>Ue("balance",Math.round(Number(b.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(A.commission_balance??0)/100).toFixed(2)),onChange:b=>Ue("commission_balance",Math.round(Number(b.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.u??0),onChange:b=>Ue("u",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.d??0),onChange:b=>Ue("d",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.transfer_enable??0),onChange:b=>Ue("transfer_enable",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(A.device_limit??""),onChange:b=>Ue("device_limit",b.target.value?Number(b.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(A.network_settings??""),onChange:b=>Ue("network_settings",b.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(A.expired_at??""),onChange:b=>Ue("expired_at",b.target.value),onClick:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)},onFocus:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(A.plan_id??""),onChange:b=>Ue("plan_id",b.target.value?Number(b.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(A.banned??0),onChange:b=>Ue("banned",Number(b.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(A.commission_type??0),onChange:b=>Ue("commission_type",Number(b.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(A.commission_rate??""),onChange:b=>Ue("commission_rate",b.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(A.discount??""),onChange:b=>Ue("discount",b.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(A.speed_limit??""),onChange:b=>Ue("speed_limit",b.target.value?Number(b.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${A.is_admin?"active":""}`,onClick:()=>Ue("is_admin",A.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${A.is_staff?"active":""}`,onClick:()=>Ue("is_staff",A.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(A.remarks??""),onChange:b=>Ue("remarks",b.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ee(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:H,children:o(H?"common.processing":"common.save")})]})]})]})}):null,k?t.jsx("div",{className:"modal-backdrop",onClick:()=>ce(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>ce(!1),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ci,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:_.email_prefix,onChange:b=>N({..._,email_prefix:b.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:_.email_suffix,onChange:b=>N({..._,email_suffix:b.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:_.password,onChange:b=>N({..._,password:b.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:_.plan_id,onChange:b=>N({..._,plan_id:b.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:_.expired_at,onChange:b=>N({..._,expired_at:b.target.value}),onClick:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)},onFocus:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>ce(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:E,children:o(E?"user.creating":"user.createUser")})]})]})]})}):null,me?t.jsx("div",{className:"modal-backdrop",onClick:()=>we(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>we(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ft,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:me})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Se.plan_id,onChange:b=>De({...Se,plan_id:b.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),h.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Se.period,onChange:b=>De({...Se,period:b.target.value}),children:qj.map(b=>t.jsx("option",{value:b.value,children:Gj(b.value,o)},b.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:b=>De({...Se,total_amount:b.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>we(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ot,children:o(ot?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Pe?t.jsx("div",{className:"modal-backdrop",onClick:()=>Nt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Nt(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Pe.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Pe.userId})})]})]})}):null,St?t.jsx("div",{className:"modal-backdrop",onClick:()=>It(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:St.email,id:St.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>It(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[M?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:M}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:Ot})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(gt.reduce((b,pe)=>b+pe.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(gt.reduce((b,pe)=>b+pe.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(gt.reduce((b,pe)=>b+pe.u+pe.d,0))})]})]}),jt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(vt,{label:o("user.historyLoading")})}):gt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(rd,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:gt.map(b=>{const pe=ii(b.u),ue=ii(b.d),Ce=ii(b.u+b.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Hj(b.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(b.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:pe}),t.jsx("td",{style:{color:"var(--muted)"},children:ue}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ce})]},b.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((ge-1)*Bt+1,Ot),end:Math.min(ge*Bt,Ot),total:Ot})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:ge<=1,onClick:()=>Re(St.id,ge-1),children:[t.jsx(ga,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:ge*Bt>=Ot,onClick:()=>Re(St.id,ge+1),children:[o("user.historyNext"),t.jsx(ba,{size:16})]})]})]})]})]})]})}):null]})}const Uh=15,Rh=20,$j=["email","id","user_id","plan_id","status"];function $a(s,i){return s?new Date(s*1e3).toLocaleString():i}function Qj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Xj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function hl(s){return+(s/1073741824).toFixed(2)}function vd(s){return Math.round((Number(s)||0)*1073741824)}function Zj(s){return s==="email"?"like":"="}function Kj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Hh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Lh(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function qh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Vj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Jj(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[S,v]=f.useState(1),[x,y]=f.useState("email"),[j,T]=f.useState(""),[$,W]=f.useState(!0),[K,z]=f.useState(""),[G,R]=f.useState(null),[U,I]=f.useState({}),[ie,oe]=f.useState(null),[D,Q]=f.useState(null),[te,he]=f.useState([]),[w,L]=f.useState(0),[ee,A]=f.useState(1),[ae,H]=f.useState(!1),[F,k]=f.useState(""),[ce,_]=f.useState(null);function N(M){const ye=M==null?void 0:M.trim();ye&&s.push(`/user?email=${encodeURIComponent(ye)}`)}const E=f.useCallback(async(M=1,ye="",Be="email")=>{W(!0),z("");try{const ve=ye.trim()?[{key:Be,condition:Zj(Be),value:ye.trim()}]:void 0,rt=await D1(M,Uh,ve);p(rt.data),m(rt.total),v(M)}catch(ve){z(ve instanceof Error?ve.message:o("subscription.loadFailed"))}finally{W(!1)}},[o]),re=f.useCallback(async(M,ye=1)=>{H(!0),k("");try{const Be=await jx(ye,Rh,[{key:"subscription_id",condition:"=",value:String(M.id)}]);he(Be.data),L(Be.total),A(ye)}catch(Be){k(Be instanceof Error?Be.message:o("subscription.slotsLoadFailed"))}finally{H(!1)}},[o]);f.useEffect(()=>{if(!At()){s.replace("/login");return}const M=new URLSearchParams(i.search),Be=[["user_id",M.get("user_id")],["id",M.get("id")],["plan_id",M.get("plan_id")],["email",M.get("email")],["status",M.get("status")]].find(([,ve])=>ve&&ve.trim());if(Be){const[ve,rt]=Be,Y=rt??"";y(ve),T(Y),E(1,Y,ve);return}E()},[E,i.search,s]);function me(M){M.preventDefault(),E(1,j,x)}function we(){if(T(""),i.search){s.replace("/subscription");return}E(1,"",x)}function Se(M){R(M),I({transfer_enable:String(hl(M.transfer_enable)),u:String(hl(M.u)),d:String(hl(M.d)),device_limit:M.device_limit===null?"":String(M.device_limit),speed_limit:M.speed_limit===null?"":String(M.speed_limit),expired_at:Qj(M.expired_at),status:M.status,auto_renewal:String(M.auto_renewal||0),remarks:M.remarks??""})}async function De(M){var ye,Be;if(M.preventDefault(),!!G){oe(G.id);try{await O1({id:G.id,transfer_enable:vd(U.transfer_enable),u:vd(U.u),d:vd(U.d),device_limit:U.device_limit===""?null:Number(U.device_limit),speed_limit:U.speed_limit===""?null:Number(U.speed_limit),expired_at:Xj(U.expired_at),status:U.status,auto_renewal:Number(U.auto_renewal),remarks:U.remarks}),R(null),(ye=window.showToast)==null||ye.call(window,o("subscription.updateSuccess"),"success"),await E(S,j,x)}catch(ve){(Be=window.showToast)==null||Be.call(window,ve instanceof Error?ve.message:o("subscription.saveFailed"),"error")}finally{oe(null)}}}function ot(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.resetConfirm",{id:M.id}),onConfirm:async()=>{var Be,ve;oe(M.id);try{await U1(M.id),(Be=window.showToast)==null||Be.call(window,o("subscription.resetSuccess"),"success"),await E(S,j,x)}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.resetFailed"),"error")}finally{oe(null)}}})}async function qe(M){var Be;if(!M)return;const ye=await Va(M);(Be=window.showToast)==null||Be.call(window,o(ye?"subscription.copySuccess":"common.copyFailed"),ye?"success":"error")}async function Pe(M){var ye,Be;_(M.id);try{let ve=M.subscribe_url||null;if(ve||(ve=(await A1(M.id)).data,ve&&p(Y=>Y.map(Ne=>Ne.id===M.id?{...Ne,subscribe_url:ve}:Ne))),!ve){(ye=window.showToast)==null||ye.call(window,o("common.copyFailed"),"error");return}await qe(ve)}catch(ve){(Be=window.showToast)==null||Be.call(window,ve instanceof Error?ve.message:o("common.copyFailed"),"error")}finally{_(null)}}function Nt(M){Q(M),he([]),L(0),A(1),re(M,1)}function St(M=ee){return D?re(D,M):Promise.resolve()}function It(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var Be,ve;oe(M.id);try{await wx(M.id),(Be=window.showToast)==null||Be.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([St(),E(S,j,x)])}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.unbindFailed"),"error")}finally{oe(null)}}})}function gt(M){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var Be,ve;oe(M.id);try{await _x(M.id),(Be=window.showToast)==null||Be.call(window,o("subscription.banSuccess"),"success"),await Promise.all([St(),E(S,j,x)])}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.banFailed"),"error")}finally{oe(null)}}})}function Qt(M){const ye=M.device_limit&&M.device_limit>0?String(M.device_limit):o("subscription.unlimited"),Be=!!(M.device_count||M.device_limit&&M.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:M.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ye})]}),M.device_limit&&M.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(M.device_count/M.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),Be?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Nt(M),children:[t.jsx(zd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function Ot(M){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[hl(M.total_used)," / ",hl(M.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Vj(M)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:hl(M.u),download:hl(M.d)})})]})}function nn(M){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>qe(M.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function ge(M){return t.jsxs("div",{className:"subscription-link-stack",children:[nn(M),M.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.subscribe_url,onClick:()=>void Pe(M),disabled:ce===M.id,children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Pe(M),disabled:ce===M.id,children:[t.jsx(jn,{size:14}),t.jsx("span",{children:ce===M.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Oe(M){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Se(M),children:[t.jsx(qt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ie===M.id,onClick:()=>ot(M),children:[t.jsx(Bo,{size:14}),o("subscription.resetSecret")]})]})}const Bt=Math.ceil(h/Uh),jt=Math.ceil(w/Rh),pn=Bt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||$,onClick:()=>void E(S-1,j,x),children:[t.jsx(ga,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:S,total:Bt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=Bt||$,onClick:()=>void E(S+1,j,x),children:[o("common.next"),t.jsx(ba,{size:14})]})]}):null;return t.jsxs($t,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void E(S,j,x),children:[t.jsx(zt,{size:16}),o($?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:me,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:M=>y(M.target.value),children:$j.map(M=>t.jsx("option",{value:M,children:Kj(M,o)},M))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:M=>T(M.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ds,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:we,children:o("common.clearFilter")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,$&&d.length===0?t.jsx(vt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",M.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:M.plan_name??"-"}),M.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>N(M.user_email),title:o("subscription.viewUser"),children:M.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:M.user_id}),M.plan_id?` - ${o("subscription.planId",{id:M.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:Hh(M.status,o)})}),t.jsx("td",{children:Ot(M)}),t.jsx("td",{children:Qt(M)}),t.jsx("td",{children:$a(M.expired_at,o("subscription.never"))}),t.jsx("td",{children:ge(M)}),t.jsx("td",{children:$a(M.updated_at,o("subscription.never"))}),t.jsx("td",{children:Oe(M)})]},M.id)),!$&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(M=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",M.id]}),t.jsx("strong",{className:"subscription-plan-name",children:M.plan_name??"-"}),M.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>N(M.user_email),title:o("subscription.viewUser"),children:M.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${M.status}`,children:Hh(M.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),Ot(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Qt(M)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:$a(M.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:$a(M.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:ge(M)}),Oe(M)]},M.id)),!$&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),pn,D?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Q(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:D.id})}),t.jsx("p",{children:D.user_email??o("subscription.userId",{id:D.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>Q(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[F?t.jsx("div",{className:"form-error",children:F}):null,ae&&te.length===0?t.jsx(vt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[te.map(M=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>qe(M.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${qh(M.status)}`,children:Lh(M.status,o)})}),t.jsx("td",{children:M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>qe(M.hwid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?o("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsx("td",{children:$a(M.first_seen_at,"-")}),t.jsx("td",{children:$a(M.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===M.id,onClick:()=>It(M),children:[t.jsx(Md,{size:14}),o("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===M.id,onClick:()=>gt(M),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})})]},M.id)),!ae&&te.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[te.map(M=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${qh(M.status)}`,children:Lh(M.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.uuid,onClick:()=>qe(M.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),M.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:M.hwid,onClick:()=>qe(M.hwid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:M.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:M.last_ip??"-"}),t.jsx("small",{children:M.first_ip?o("subscription.firstIp",{ip:M.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:M.user_agent??"",children:M.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:$a(M.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:$a(M.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===M.id,onClick:()=>It(M),children:[t.jsx(Md,{size:14}),o("subscription.unbind")]}),M.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===M.id,onClick:()=>gt(M),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})]},M.id)),!ae&&te.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),jt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:ee<=1||ae,onClick:()=>void St(ee-1),children:[t.jsx(ga,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:ee,total:jt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ee>=jt||ae,onClick:()=>void St(ee+1),children:[o("common.next"),t.jsx(ba,{size:14})]})]}):null]})]})}):null,G?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:M=>M.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:G.id})}),t.jsx("p",{children:G.user_email??o("subscription.userId",{id:G.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>R(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:De,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.transfer_enable,onChange:M=>I(ye=>({...ye,transfer_enable:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.u,onChange:M=>I(ye=>({...ye,u:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.d,onChange:M=>I(ye=>({...ye,d:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.device_limit,onChange:M=>I(ye=>({...ye,device_limit:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.speed_limit,onChange:M=>I(ye=>({...ye,speed_limit:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:M=>I(ye=>({...ye,expired_at:M.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:U.status,onChange:M=>I(ye=>({...ye,status:M.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:U.auto_renewal,onChange:M=>I(ye=>({...ye,auto_renewal:M.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:U.remarks,onChange:M=>I(ye=>({...ye,remarks:M.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ie===G.id,children:ie===G.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Bh=15,Fj=["email","user_id","node","hwid","user_agent","last_ip"];function as(s){return s?new Date(s*1e3).toLocaleString():"-"}function Qa(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,p=0;for(;d>=1024&&p<o.length-1;)d/=1024,p+=1;return`${d>=10||p===0?d.toFixed(0):d.toFixed(2)} ${o[p]}`}function Wj(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Pj(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function Gh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Ro(s){return(s.online_ips??[]).join(", ")||"-"}function Ho(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function Ij(s){var h,m,S;const i=new URLSearchParams(s),o=(h=i.get("node_type"))==null?void 0:h.trim(),d=(m=i.get("node_id"))==null?void 0:m.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const p=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of p){const x=(S=i.get(v))==null?void 0:S.trim();if(x)return{field:v,value:x}}return null}function ew(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[S,v]=f.useState(1),[x,y]=f.useState("email"),[j,T]=f.useState(""),[$,W]=f.useState(!0),[K,z]=f.useState(""),[G,R]=f.useState(null),[U,I]=f.useState(null),[ie,oe]=f.useState(null),D=f.useCallback(async(k=1,ce="",_="email")=>{W(!0),z("");try{const N=ce.trim()?[{key:_,condition:Wj(_),value:ce.trim()}]:void 0,E=await jx(k,Bh,N);p(E.data),m(E.total),v(k)}catch(N){z(N instanceof Error?N.message:o("device.loadFailed"))}finally{W(!1)}},[o]);f.useEffect(()=>{if(!At()){s.replace("/login");return}const k=Ij(i.search);if(k){y(k.field),T(k.value),D(1,k.value,k.field);return}D()},[D,s,i.search]),f.useEffect(()=>{if(ie===null)return;function k(_){const N=_.target;N!=null&&N.closest(".device-action-wrap")||oe(null)}function ce(_){_.key==="Escape"&&oe(null)}return document.addEventListener("pointerdown",k),document.addEventListener("keydown",ce),()=>{document.removeEventListener("pointerdown",k),document.removeEventListener("keydown",ce)}},[ie]);function Q(k){k.preventDefault(),D(1,j,x)}function te(){if(T(""),i.search){s.replace("/device");return}D(1,"",x)}async function he(k){var _;if(!k.hwid)return;const ce=await Va(k.hwid);(_=window.showToast)==null||_.call(window,o(ce?"device.copySuccess":"common.copyFailed"),ce?"success":"error")}async function w(k){var _;const ce=await Va(k.uuid);(_=window.showToast)==null||_.call(window,o(ce?"device.copyUuidSuccess":"common.copyFailed"),ce?"success":"error")}function L(k){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var _,N;R(k.id);try{await wx(k.id),(_=window.showToast)==null||_.call(window,o("device.unbindSuccess"),"success"),await D(S,j,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.unbindFailed"),"error")}finally{R(null)}}})}function ee(k){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var _,N;R(k.id);try{await _x(k.id),(_=window.showToast)==null||_.call(window,o("device.banSuccess"),"success"),await D(S,j,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.banFailed"),"error")}finally{R(null)}}})}function A(k){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:o("device.resetConfirm",{user:k.user_email??`#${k.user_id}`}),onConfirm:async()=>{var _,N;I(k.user_id);try{await R1(k.user_id),(_=window.showToast)==null||_.call(window,o("device.resetSuccess"),"success"),await D(S,j,x)}catch(E){(N=window.showToast)==null||N.call(window,E instanceof Error?E.message:o("device.resetFailed"),"error")}finally{I(null)}}})}function ae(k){oe(null),k()}function H(k,ce){const _=ce==="mobile"?-k.id:k.id,N=ie===_;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${N?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>oe(N?null:_),children:[o("device.action")," ",t.jsx(gl,{size:14})]}),N?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===k.id,onClick:()=>ae(()=>L(k)),children:[t.jsx(Md,{size:14}),o("device.unbind")]}),k.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===k.id,onClick:()=>ae(()=>ee(k)),children:[t.jsx(xl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===k.user_id,onClick:()=>ae(()=>A(k)),children:[t.jsx(Dv,{size:14}),o("device.resetUser")]})]}):null]})}const F=Math.ceil(h/Bh);return t.jsxs($t,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:h})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:$,onClick:()=>void D(S,j,x),children:[t.jsx(zt,{size:16}),o($?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:Q,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:k=>y(k.target.value),children:Fj.map(k=>t.jsx("option",{value:k,children:Pj(k,o)},k))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:k=>T(k.target.value),placeholder:o(x==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ds,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:te,children:o("device.clear")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,$&&d.length===0?t.jsx(vt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(k=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:k.user_email??"-"}),t.jsxs("small",{children:["ID: ",k.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[k.plan_name??"-",k.user_plan_id?` #${k.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Gh(k.status,o)}),t.jsxs("span",{className:`online-badge ${k.is_online?"online":"offline"}`,children:[k.is_online?t.jsx(ph,{size:14}):t.jsx(uh,{size:14}),k.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:k.uuid,onClick:()=>w(k),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:k.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),k.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:k.hwid,onClick:()=>he(k),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:k.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:k.user_agent??"",children:k.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${k.last_ip??"-"} / ${k.first_ip??"-"}`,children:[k.last_ip??"-",k.first_ip?` (${k.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${Qa(k.device_upload)} / ${o("device.download")}: ${Qa(k.device_download)}`,children:[Qa(k.device_used_traffic)," / ",o("device.upload"),": ",Qa(k.device_upload)," / ",o("device.download"),": ",Qa(k.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Ro(k)} / ${Ho(k)}`,children:[o("device.onlineIps"),": ",Ro(k)," / ",o("device.onlineNodes"),": ",Ho(k)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",as(k.first_seen_at)," / ",o("device.lastSeen"),": ",as(k.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:H(k,"mobile")})]},k.id)),!$&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(k=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:k.user_email??"-"}),t.jsxs("small",{children:["ID: ",k.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[k.plan_name??"-",k.user_plan_id?` #${k.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Gh(k.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:Qa(k.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",Qa(k.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",Qa(k.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${k.is_online?"online":"offline"}`,children:[k.is_online?t.jsx(ph,{size:14}):t.jsx(uh,{size:14}),k.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Ro(k),children:[o("device.onlineIps"),": ",Ro(k)]}),t.jsxs("small",{title:Ho(k),children:[o("device.onlineNodes"),": ",Ho(k)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",as(k.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:k.uuid,onClick:()=>w(k),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:k.uuid})]})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),k.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:k.hwid,onClick:()=>he(k),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:k.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:k.user_agent??"",children:k.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:k.last_ip??"-"}),t.jsx("small",{children:k.first_ip?`${o("device.firstIp")}: ${k.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:as(k.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:as(k.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:H(k,"desktop")})]},k.id)),!$&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),F>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||$,onClick:()=>void D(S-1,j,x),children:[t.jsx(ga,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:S,total:F})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=F||$,onClick:()=>void D(S+1,j,x),children:[o("device.next"),t.jsx(ba,{size:14})]})]}):null]})]})}const tw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Zd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Zd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Yh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Zd(s.plan_id)}:{...tw}}function jd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function nw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function aw(s){return Number(s)===1}function $h(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function Xa(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function lw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,S]=f.useState(null),[v,x]=f.useState(!0),[y,j]=f.useState(!1),[T,$]=f.useState(null),[W,K]=f.useState(""),z=f.useCallback(async()=>{x(!0),K("");try{const[D,Q]=await Promise.all([F1(),yl()]);d(D),h(Q)}catch(D){K(D instanceof Error?D.message:i("webcon.toastLoadFailed"))}finally{x(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}z()},[z,s]);const G=f.useMemo(()=>p.map(D=>({id:Number(D.id),name:D.name})),[p]);function R(D,Q){S(te=>te&&{...te,[D]:Q})}function U(D,Q){S(te=>{if(!te)return te;const he=Q?Array.from(new Set([...te.plan_ids,D])):te.plan_ids.filter(w=>w!==D);return{...te,plan_ids:he}})}async function I(D){var te,he;if(D.preventDefault(),!m)return;const Q=jd(m.domain);j(!0),K("");try{await W1({id:m.id,email:m.email.trim(),domain:Q,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),S(null),(te=window.showToast)==null||te.call(window,i("webcon.toastSaveSuccess"),"success"),await z()}catch(w){const L=w instanceof Error?w.message:i("webcon.toastSaveFailed");K(L),(he=window.showToast)==null||he.call(window,L,"error")}finally{j(!1)}}async function ie(D){var Q,te;$(D.id);try{await I1(D.id),(Q=window.showToast)==null||Q.call(window,i("webcon.toastToggleSuccess"),"success"),await z()}catch(he){const w=he instanceof Error?he.message:i("webcon.toastToggleFailed");K(w),(te=window.showToast)==null||te.call(window,w,"error")}finally{$(null)}}function oe(D){var Q;(Q=window.showConfirm)==null||Q.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var te,he;$(D.id),K("");try{await P1(D.id),(te=window.showToast)==null||te.call(window,i("webcon.toastDeleteSuccess"),"success"),await z()}catch(w){const L=w instanceof Error?w.message:i("webcon.toastDeleteFailed");K(L),(he=window.showToast)==null||he.call(window,L,"error")}finally{$(null)}}})}return t.jsxs($t,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void z(),children:[t.jsx(zt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Yh()),children:[t.jsx(_n,{size:16}),i("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(D=>{var te;const Q=Zd(D.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",D.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${aw(D.status)?"active":""}`,type:"button",disabled:T===D.id,onClick:()=>void ie(D),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:D.email??"-"}),t.jsx("small",{children:Number(D.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:D.domain}),t.jsxs("small",{children:["/",String(((te=window.settings)==null?void 0:te.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:D.title||"-"}),t.jsx("small",{children:D.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(jv,{size:13}),D.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(ms,{size:13}),D.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:$h(Q,G)}),t.jsx("small",{children:Q.length?`${Q.length} selected`:"not restricted"})]})}),t.jsx("td",{children:nw(D.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Yh(D)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:T===D.id,onClick:()=>oe(D),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},D.id)}),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>S(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:D=>D.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:I,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Xa("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:D=>R("email",D.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:D=>R("domain",D.target.value),onBlur:D=>R("domain",jd(D.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:D=>R("title",D.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:D=>R("description",D.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:D=>R("logo",D.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:D=>R("background_url",D.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Xa("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[G.map(D=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(D.id),onChange:Q=>U(D.id,Q.target.checked)}),t.jsx("span",{children:D.name})]},D.id)),G.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Xa("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:D=>R("custom_html",D.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(Ev,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:jd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx($d,{size:12})," ",$h(m.plan_ids,G)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Nn,{size:16}),i(y?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Qh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function wd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function iw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,S]=f.useState(!0),[v,x]=f.useState(!1),[y,j]=f.useState(""),[T,$]=f.useState(""),W=f.useCallback(async()=>{S(!0),j("");try{d(await L1())}catch(R){j(R instanceof Error?R.message:i("notice.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);async function K(R){var U,I;if(R.preventDefault(),!!p){x(!0),j(""),$("");try{const ie=p.tags?p.tags.split(",").map(oe=>oe.trim()).filter(Boolean):[];await q1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:ie.length?ie:null}),h(null),(U=window.showToast)==null||U.call(window,i("notice.saveSuccess"),"success"),await W()}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("notice.saveFailed"),"error")}finally{x(!1)}}}async function z(R){var U;try{await G1(R),await W()}catch(I){(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("notice.toggleFailed"),"error")}}async function G(R){var U;(U=window.showConfirm)==null||U.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var I,ie;try{await B1(R),(I=window.showToast)==null||I.call(window,i("notice.deleteSuccess"),"success"),await W()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(wd()),children:[t.jsx(_n,{size:16}),i("notice.addNotice")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,T?t.jsx("div",{className:"form-success",children:T}):null,m&&o.length===0?t.jsx(vt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{var U;return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void z(R.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((U=R.tags)==null?void 0:U.map((I,ie)=>t.jsx("span",{className:"tag",children:I},ie)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Qh(R.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(wd(R)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(R.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},R.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(R=>t.jsxs("div",{className:`notice-mobile-card ${R.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",R.id]})}),t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void z(R.id),"aria-label":R.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:R.title}),t.jsx("div",{className:"notice-tags",children:R.tags&&R.tags.length>0?R.tags.map((U,I)=>t.jsx("span",{className:"tag-badge",children:U},I)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Qh(R.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(wd(R)),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void G(R.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},R.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:R=>h({...p,title:R.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:R=>h({...p,content:R.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:R=>h({...p,img_url:R.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:R=>h({...p,tags:R.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Nn,{size:16}),i(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function _d(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Xh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Nd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function sw(){var w;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,S]=f.useState(!1),[v,x]=f.useState(null),[y,j]=f.useState(""),[T,$]=f.useState(!0),[W,K]=f.useState(!1),[z,G]=f.useState(""),R=f.useRef(null),[U,I]=f.useState([]),[ie,oe]=f.useState(null),D=f.useCallback(async()=>{$(!0),G("");try{d(await Y1())}catch(L){G(L instanceof Error?L.message:"Load failed")}finally{$(!1)}},[]);f.useEffect(()=>{if(!At()){s.replace("/login");return}D(),yl().then(L=>{L&&I(L)}).catch(()=>{})},[D,s]),f.useEffect(()=>{var L;(L=R.current)==null||L.scrollIntoView({behavior:"smooth"})},[p]);async function Q(L){var ee;x(L),j(""),h(null),oe(null),S(!0);try{const A=await hh(L);if(h(A),A&&A.user_id)try{const ae=await vx(A.user_id);ae&&ae.data&&oe(ae.data)}catch(ae){console.error("Failed to load user info:",ae)}}catch{(ee=window.showToast)==null||ee.call(window,"Failed to load message thread","error")}finally{S(!1)}}async function te(L){var ee,A;if(L.preventDefault(),!(!v||!y.trim())){K(!0),G("");try{await $1(v,y),j(""),(ee=window.showToast)==null||ee.call(window,"Reply sent!","success");try{const ae=await hh(v);h(ae)}catch{}await D()}catch(ae){(A=window.showToast)==null||A.call(window,ae instanceof Error?ae.message:"Reply failed","error")}finally{K(!1)}}}async function he(L){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:"Close this ticket?",onConfirm:async()=>{var A,ae;G("");try{await Q1(L),(A=window.showToast)==null||A.call(window,"Ticket closed!","success"),v===L&&(x(null),h(null)),await D()}catch(H){G(H instanceof Error?H.message:"Close failed"),(ae=window.showToast)==null||ae.call(window,H instanceof Error?H.message:"Close failed","error")}}})}return t.jsxs($t,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:T,children:[t.jsx(zt,{size:16}),i("common.refresh")]})})]}),z?t.jsx("div",{className:"form-error",children:z}):null,T&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(L=>{const ee=Xh(L.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:L.id}),t.jsx("td",{children:t.jsx("strong",{children:L.subject})}),t.jsxs("td",{children:["#",L.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Nd(L.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${ee.cls}`,children:ee.label})}),t.jsx("td",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:_d(L.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(L.id),children:[t.jsx(ls,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(L.id),children:[t.jsx(Td,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(L.id),children:[t.jsx(ls,{size:14}),i("ticket.viewHistory")]})})})]},L.id)}),!T&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(L=>{const ee=Xh(L.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:L.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Nd(L.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",L.id]})]}),t.jsx("span",{className:`status-pill ${ee.cls}`,children:ee.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",L.user_id]})]}),t.jsx("span",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:_d(L.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Q(L.id),children:[t.jsx(ls,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(L.id),children:[t.jsx(Td,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Q(L.id),children:[t.jsx(ls,{size:14}),i("ticket.viewHistory")]})})]},L.id)}),!T&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${i("ticket.ticketDetail")}: ${p.subject}`:`${i("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[i("ticket.user"),": #",p==null?void 0:p.user_id," | ",i("ticket.level"),": ",p!=null?Nd(p.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{x(null),h(null)},children:t.jsx(st,{size:18})})]}),ie&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:ie.email,children:ie.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=U.find(L=>L.id===ie.plan_id))==null?void 0:w.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[wn(ie.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:ie.expired_at?new Date(ie.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(vt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(L=>{const ee=L.is_me;return t.jsxs("div",{className:`chat-message ${ee?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:L.message}),t.jsxs("div",{className:"chat-meta",children:[ee?i("ticket.staff"):`${i("ticket.user")} #${L.user_id}`," • ",_d(L.created_at)]})]},L.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:R})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:te,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:y,onChange:L=>j(L.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!y.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(cx,{size:14}),W?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Zh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Kh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Vh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function ow(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,S]=f.useState(!0),[v,x]=f.useState(!1),[y,j]=f.useState(""),[T,$]=f.useState(""),W=f.useCallback(async()=>{S(!0),j("");try{d(await X1())}catch(U){j(U instanceof Error?U.message:i("knowledge.loadFailed"))}finally{S(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);async function K(U){var I;try{const ie=await Z1(U.id);h(Vh(ie))}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("knowledge.detailFailed"),"error")}}async function z(U){var I,ie;if(U.preventDefault(),!!p){x(!0),j(""),$("");try{await K1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(I=window.showToast)==null||I.call(window,i("knowledge.saveSuccess"),"success"),await W()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("knowledge.saveFailed"),"error")}finally{x(!1)}}}async function G(U){var I;try{await J1(U),await W()}catch(ie){(I=window.showToast)==null||I.call(window,ie instanceof Error?ie.message:i("knowledge.toggleFailed"),"error")}}async function R(U){var I;(I=window.showConfirm)==null||I.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var ie,oe;try{await V1(U),(ie=window.showToast)==null||ie.call(window,i("knowledge.deleteSuccess"),"success"),await W()}catch(D){(oe=window.showToast)==null||oe.call(window,D instanceof Error?D.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Vh()),children:[t.jsx(_n,{size:16}),i("knowledge.addArticle")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,T?t.jsx("div",{className:"form-success",children:T}):null,m&&o.length===0?t.jsx(vt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:U.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:U.language&&Kh[U.language]||U.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void G(U.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:U.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Zh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(U),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},U.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(U=>t.jsxs("div",{className:`knowledge-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",U.id]}),U.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",U.sort]})]}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void G(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsxs("div",{className:"card-meta",children:[U.category&&t.jsx("span",{className:"category-badge",children:U.category}),U.language&&t.jsx("span",{className:"lang-badge",children:Kh[U.language]||U.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Zh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void K(U),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:z,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:U=>h({...p,category:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:U=>h({...p,title:U.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:U=>h({...p,body:U.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:U=>h({...p,language:U.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:U=>h({...p,sort:U.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Nn,{size:16}),i(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function rw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,S]=f.useState(null),[v,x]=f.useState(""),[y,j]=f.useState(!0),[T,$]=f.useState(""),W=f.useCallback(async()=>{j(!0),$("");try{const[z,G,R,U]=await Promise.all([e0().catch(()=>({data:{}})),a0().catch(()=>({data:{}})),l0().catch(()=>({data:[]})),i0().catch(()=>({data:""}))]);d(z.data),h(G.data),S(R.data),x(typeof U.data=="string"?U.data:"")}catch(z){$(z instanceof Error?z.message:i("queue.toastLoadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);function K(z,G,R){return z?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[R," ",G]}),t.jsx("div",{className:"queue-grid",children:Object.entries(z).map(([U,I])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:U}),t.jsx("strong",{children:typeof I=="object"?JSON.stringify(I):String(I??"—")})]},U))})]}):null}return t.jsxs($t,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:y,children:[t.jsx(zt,{size:16}),i("common.refresh")]})})]}),T?t.jsx("div",{className:"form-error",children:T}):null,y?t.jsx(vt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[K(o,i("queue.systemStatus"),t.jsx(Go,{size:18})),K(p,i("queue.queueStats"),t.jsx($d,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(dv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(bv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const cw=f.createContext(null);function dw({children:s}){const[i,o]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((x,y="success")=>{const j=Math.random().toString(36).substring(2,9);o(T=>[...T,{id:j,message:x,type:y}]),setTimeout(()=>{o(T=>T.filter($=>$.id!==j))},5e3)},[]),m=f.useCallback(x=>{p(x)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const S=async()=>{if(d){try{await d.onConfirm()}catch(x){console.error("Error in onConfirm:",x)}p(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(cw.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(x=>{let y=wv;return x.type==="success"&&(y=ox),x.type==="error"&&(y=fv),x.type==="warning"&&(y=Ed),t.jsxs("div",{className:`toast-card toast-${x.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(y,{size:18})}),t.jsx("div",{className:"toast-message",children:x.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(j=>j.filter(T=>T.id!==x.id)),children:t.jsx(st,{size:14})})]},x.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Ed,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:S,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function uw({children:s}){return t.jsx(h0,{children:t.jsx(dw,{children:s})})}function pw(){return t.jsx(uw,{children:t.jsxs(Ky,{children:[t.jsx(_t,{path:"/login",element:t.jsx(x0,{})}),t.jsx(_t,{path:"/dashboard",element:t.jsx(k0,{})}),t.jsx(_t,{path:"/config/system",element:t.jsx(O0,{})}),t.jsx(_t,{path:"/config/payment",element:t.jsx(H0,{})}),t.jsx(_t,{path:"/config/theme",element:t.jsx(B0,{})}),t.jsx(_t,{path:"/server/manage",element:t.jsx(jj,{})}),t.jsx(_t,{path:"/server/group",element:t.jsx(wj,{})}),t.jsx(_t,{path:"/server/route",element:t.jsx(Sj,{})}),t.jsx(_t,{path:"/plan",element:t.jsx(Tj,{})}),t.jsx(_t,{path:"/order",element:t.jsx(Dj,{})}),t.jsx(_t,{path:"/coupon",element:t.jsx(Aj,{})}),t.jsx(_t,{path:"/giftcard",element:t.jsx(Uj,{})}),t.jsx(_t,{path:"/user",element:t.jsx(Yj,{})}),t.jsx(_t,{path:"/subscription",element:t.jsx(Jj,{})}),t.jsx(_t,{path:"/device",element:t.jsx(ew,{})}),t.jsx(_t,{path:"/webcon",element:t.jsx(lw,{})}),t.jsx(_t,{path:"/notice",element:t.jsx(iw,{})}),t.jsx(_t,{path:"/ticket",element:t.jsx(sw,{})}),t.jsx(_t,{path:"/knowledge",element:t.jsx(ow,{})}),t.jsx(_t,{path:"/queue",element:t.jsx(rw,{})}),t.jsx(_t,{path:"/",element:t.jsx(If,{to:"/dashboard",replace:!0})}),t.jsx(_t,{path:"*",element:t.jsx(If,{to:"/dashboard",replace:!0})})]})})}ty.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(ev,{children:t.jsx(pw,{})})}));
