function Kb(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const u in d)if(u!=="default"&&!(u in s)){const f=Object.getOwnPropertyDescriptor(d,u);f&&Object.defineProperty(s,u,f.get?f:{enumerable:!0,get:()=>d[u]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))d(u);new MutationObserver(u=>{for(const f of u)if(f.type==="childList")for(const m of f.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(u){const f={};return u.integrity&&(f.integrity=u.integrity),u.referrerPolicy&&(f.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?f.credentials="include":u.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function d(u){if(u.ep)return;u.ep=!0;const f=o(u);fetch(u.href,f)}})();function Jb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nd={exports:{}},ts={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Vb(){if(Bf)return ts;Bf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,u,f){var m=null;if(f!==void 0&&(m=""+f),u.key!==void 0&&(m=""+u.key),"key"in u){f={};for(var S in u)S!=="key"&&(f[S]=u[S])}else f=u;return u=f.ref,{$$typeof:s,type:d,key:m,ref:u!==void 0?u:null,props:f}}return ts.Fragment=i,ts.jsx=o,ts.jsxs=o,ts}var Gf;function Fb(){return Gf||(Gf=1,nd.exports=Vb()),nd.exports}var t=Fb(),ad={exports:{}},He={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Wb(){if(Yf)return He;Yf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),m=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),E=Symbol.iterator;function Q(N){return N===null||typeof N!="object"?null:(N=E&&N[E]||N["@@iterator"],typeof N=="function"?N:null)}var W={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,z={};function G(N,M,ce){this.props=N,this.context=M,this.refs=z,this.updater=ce||W}G.prototype.isReactComponent={},G.prototype.setState=function(N,M){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,M,"setState")},G.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function R(){}R.prototype=G.prototype;function U(N,M,ce){this.props=N,this.context=M,this.refs=z,this.updater=ce||W}var I=U.prototype=new R;I.constructor=U,K(I,G.prototype),I.isPureReactComponent=!0;var se=Array.isArray;function re(){}var D={H:null,A:null,T:null,S:null},Y=Object.prototype.hasOwnProperty;function ne(N,M,ce){var me=ce.ref;return{$$typeof:s,type:N,key:M,ref:me!==void 0?me:null,props:ce}}function he(N,M){return ne(N.type,M,N.props)}function w(N){return typeof N=="object"&&N!==null&&N.$$typeof===s}function L(N){var M={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(ce){return M[ce]})}var te=/\/+/g;function A(N,M){return typeof N=="object"&&N!==null&&N.key!=null?L(""+N.key):M.toString(36)}function le(N){switch(N.status){case"fulfilled":return N.value;case"rejected":throw N.reason;default:switch(typeof N.status=="string"?N.then(re,re):(N.status="pending",N.then(function(M){N.status==="pending"&&(N.status="fulfilled",N.value=M)},function(M){N.status==="pending"&&(N.status="rejected",N.reason=M)})),N.status){case"fulfilled":return N.value;case"rejected":throw N.reason}}throw N}function H(N,M,ce,me,we){var Se=typeof N;(Se==="undefined"||Se==="boolean")&&(N=null);var Oe=!1;if(N===null)Oe=!0;else switch(Se){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(N.$$typeof){case s:case i:Oe=!0;break;case y:return Oe=N._init,H(Oe(N._payload),M,ce,me,we)}}if(Oe)return we=we(N),Oe=me===""?"."+A(N,0):me,se(we)?(ce="",Oe!=null&&(ce=Oe.replace(te,"$&/")+"/"),H(we,M,ce,"",function(Pe){return Pe})):we!=null&&(w(we)&&(we=he(we,ce+(we.key==null||N&&N.key===we.key?"":(""+we.key).replace(te,"$&/")+"/")+Oe)),M.push(we)),1;Oe=0;var ot=me===""?".":me+":";if(se(N))for(var qe=0;qe<N.length;qe++)me=N[qe],Se=ot+A(me,qe),Oe+=H(me,M,ce,Se,we);else if(qe=Q(N),typeof qe=="function")for(N=qe.call(N),qe=0;!(me=N.next()).done;)me=me.value,Se=ot+A(me,qe++),Oe+=H(me,M,ce,Se,we);else if(Se==="object"){if(typeof N.then=="function")return H(le(N),M,ce,me,we);throw M=String(N),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function F(N,M,ce){if(N==null)return N;var me=[],we=0;return H(N,me,"","",function(Se){return M.call(ce,Se,we++)}),me}function k(N){if(N._status===-1){var M=N._result;M=M(),M.then(function(ce){(N._status===0||N._status===-1)&&(N._status=1,N._result=ce)},function(ce){(N._status===0||N._status===-1)&&(N._status=2,N._result=ce)}),N._status===-1&&(N._status=0,N._result=M)}if(N._status===1)return N._result.default;throw N._result}var de=typeof reportError=="function"?reportError:function(N){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var M=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof N=="object"&&N!==null&&typeof N.message=="string"?String(N.message):String(N),error:N});if(!window.dispatchEvent(M))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",N);return}console.error(N)},_={map:F,forEach:function(N,M,ce){F(N,function(){M.apply(this,arguments)},ce)},count:function(N){var M=0;return F(N,function(){M++}),M},toArray:function(N){return F(N,function(M){return M})||[]},only:function(N){if(!w(N))throw Error("React.Children.only expected to receive a single React element child.");return N}};return He.Activity=j,He.Children=_,He.Component=G,He.Fragment=o,He.Profiler=u,He.PureComponent=U,He.StrictMode=d,He.Suspense=v,He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=D,He.__COMPILER_RUNTIME={__proto__:null,c:function(N){return D.H.useMemoCache(N)}},He.cache=function(N){return function(){return N.apply(null,arguments)}},He.cacheSignal=function(){return null},He.cloneElement=function(N,M,ce){if(N==null)throw Error("The argument must be a React element, but you passed "+N+".");var me=K({},N.props),we=N.key;if(M!=null)for(Se in M.key!==void 0&&(we=""+M.key),M)!Y.call(M,Se)||Se==="key"||Se==="__self"||Se==="__source"||Se==="ref"&&M.ref===void 0||(me[Se]=M[Se]);var Se=arguments.length-2;if(Se===1)me.children=ce;else if(1<Se){for(var Oe=Array(Se),ot=0;ot<Se;ot++)Oe[ot]=arguments[ot+2];me.children=Oe}return ne(N.type,we,me)},He.createContext=function(N){return N={$$typeof:m,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null},N.Provider=N,N.Consumer={$$typeof:f,_context:N},N},He.createElement=function(N,M,ce){var me,we={},Se=null;if(M!=null)for(me in M.key!==void 0&&(Se=""+M.key),M)Y.call(M,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(we[me]=M[me]);var Oe=arguments.length-2;if(Oe===1)we.children=ce;else if(1<Oe){for(var ot=Array(Oe),qe=0;qe<Oe;qe++)ot[qe]=arguments[qe+2];we.children=ot}if(N&&N.defaultProps)for(me in Oe=N.defaultProps,Oe)we[me]===void 0&&(we[me]=Oe[me]);return ne(N,Se,we)},He.createRef=function(){return{current:null}},He.forwardRef=function(N){return{$$typeof:S,render:N}},He.isValidElement=w,He.lazy=function(N){return{$$typeof:y,_payload:{_status:-1,_result:N},_init:k}},He.memo=function(N,M){return{$$typeof:x,type:N,compare:M===void 0?null:M}},He.startTransition=function(N){var M=D.T,ce={};D.T=ce;try{var me=N(),we=D.S;we!==null&&we(ce,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(re,de)}catch(Se){de(Se)}finally{M!==null&&ce.types!==null&&(M.types=ce.types),D.T=M}},He.unstable_useCacheRefresh=function(){return D.H.useCacheRefresh()},He.use=function(N){return D.H.use(N)},He.useActionState=function(N,M,ce){return D.H.useActionState(N,M,ce)},He.useCallback=function(N,M){return D.H.useCallback(N,M)},He.useContext=function(N){return D.H.useContext(N)},He.useDebugValue=function(){},He.useDeferredValue=function(N,M){return D.H.useDeferredValue(N,M)},He.useEffect=function(N,M){return D.H.useEffect(N,M)},He.useEffectEvent=function(N){return D.H.useEffectEvent(N)},He.useId=function(){return D.H.useId()},He.useImperativeHandle=function(N,M,ce){return D.H.useImperativeHandle(N,M,ce)},He.useInsertionEffect=function(N,M){return D.H.useInsertionEffect(N,M)},He.useLayoutEffect=function(N,M){return D.H.useLayoutEffect(N,M)},He.useMemo=function(N,M){return D.H.useMemo(N,M)},He.useOptimistic=function(N,M){return D.H.useOptimistic(N,M)},He.useReducer=function(N,M,ce){return D.H.useReducer(N,M,ce)},He.useRef=function(N){return D.H.useRef(N)},He.useState=function(N){return D.H.useState(N)},He.useSyncExternalStore=function(N,M,ce){return D.H.useSyncExternalStore(N,M,ce)},He.useTransition=function(){return D.H.useTransition()},He.version="19.2.6",He}var $f;function Bd(){return $f||($f=1,ad.exports=Wb()),ad.exports}var h=Bd();const Pb=Jb(h),Ib=Kb({__proto__:null,default:Pb},[h]);var ld={exports:{}},ns={},id={exports:{}},sd={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function ey(){return Qf||(Qf=1,(function(s){function i(H,F){var k=H.length;H.push(F);e:for(;0<k;){var de=k-1>>>1,_=H[de];if(0<u(_,F))H[de]=F,H[k]=_,k=de;else break e}}function o(H){return H.length===0?null:H[0]}function d(H){if(H.length===0)return null;var F=H[0],k=H.pop();if(k!==F){H[0]=k;e:for(var de=0,_=H.length,N=_>>>1;de<N;){var M=2*(de+1)-1,ce=H[M],me=M+1,we=H[me];if(0>u(ce,k))me<_&&0>u(we,ce)?(H[de]=we,H[me]=k,de=me):(H[de]=ce,H[M]=k,de=M);else if(me<_&&0>u(we,k))H[de]=we,H[me]=k,de=me;else break e}}return F}function u(H,F){var k=H.sortIndex-F.sortIndex;return k!==0?k:H.id-F.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;s.unstable_now=function(){return f.now()}}else{var m=Date,S=m.now();s.unstable_now=function(){return m.now()-S}}var v=[],x=[],y=1,j=null,E=3,Q=!1,W=!1,K=!1,z=!1,G=typeof setTimeout=="function"?setTimeout:null,R=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function I(H){for(var F=o(x);F!==null;){if(F.callback===null)d(x);else if(F.startTime<=H)d(x),F.sortIndex=F.expirationTime,i(v,F);else break;F=o(x)}}function se(H){if(K=!1,I(H),!W)if(o(v)!==null)W=!0,re||(re=!0,L());else{var F=o(x);F!==null&&le(se,F.startTime-H)}}var re=!1,D=-1,Y=5,ne=-1;function he(){return z?!0:!(s.unstable_now()-ne<Y)}function w(){if(z=!1,re){var H=s.unstable_now();ne=H;var F=!0;try{e:{W=!1,K&&(K=!1,R(D),D=-1),Q=!0;var k=E;try{t:{for(I(H),j=o(v);j!==null&&!(j.expirationTime>H&&he());){var de=j.callback;if(typeof de=="function"){j.callback=null,E=j.priorityLevel;var _=de(j.expirationTime<=H);if(H=s.unstable_now(),typeof _=="function"){j.callback=_,I(H),F=!0;break t}j===o(v)&&d(v),I(H)}else d(v);j=o(v)}if(j!==null)F=!0;else{var N=o(x);N!==null&&le(se,N.startTime-H),F=!1}}break e}finally{j=null,E=k,Q=!1}F=void 0}}finally{F?L():re=!1}}}var L;if(typeof U=="function")L=function(){U(w)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,A=te.port2;te.port1.onmessage=w,L=function(){A.postMessage(null)}}else L=function(){G(w,0)};function le(H,F){D=G(function(){H(s.unstable_now())},F)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(H){H.callback=null},s.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Y=0<H?Math.floor(1e3/H):5},s.unstable_getCurrentPriorityLevel=function(){return E},s.unstable_next=function(H){switch(E){case 1:case 2:case 3:var F=3;break;default:F=E}var k=E;E=F;try{return H()}finally{E=k}},s.unstable_requestPaint=function(){z=!0},s.unstable_runWithPriority=function(H,F){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var k=E;E=H;try{return F()}finally{E=k}},s.unstable_scheduleCallback=function(H,F,k){var de=s.unstable_now();switch(typeof k=="object"&&k!==null?(k=k.delay,k=typeof k=="number"&&0<k?de+k:de):k=de,H){case 1:var _=-1;break;case 2:_=250;break;case 5:_=1073741823;break;case 4:_=1e4;break;default:_=5e3}return _=k+_,H={id:y++,callback:F,priorityLevel:H,startTime:k,expirationTime:_,sortIndex:-1},k>de?(H.sortIndex=k,i(x,H),o(v)===null&&H===o(x)&&(K?(R(D),D=-1):K=!0,le(se,k-de))):(H.sortIndex=_,i(v,H),W||Q||(W=!0,re||(re=!0,L()))),H},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(H){var F=E;return function(){var k=E;E=F;try{return H.apply(this,arguments)}finally{E=k}}}})(sd)),sd}var Xf;function ty(){return Xf||(Xf=1,id.exports=ey()),id.exports}var od={exports:{}},tn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zf;function ny(){if(Zf)return tn;Zf=1;var s=Bd();function i(v){var x="https://react.dev/errors/"+v;if(1<arguments.length){x+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)x+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+x+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},u=Symbol.for("react.portal");function f(v,x,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:j==null?null:""+j,children:v,containerInfo:x,implementation:y}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function S(v,x){if(v==="font")return"";if(typeof x=="string")return x==="use-credentials"?x:""}return tn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,tn.createPortal=function(v,x){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!x||x.nodeType!==1&&x.nodeType!==9&&x.nodeType!==11)throw Error(i(299));return f(v,x,null,y)},tn.flushSync=function(v){var x=m.T,y=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=x,d.p=y,d.d.f()}},tn.preconnect=function(v,x){typeof v=="string"&&(x?(x=x.crossOrigin,x=typeof x=="string"?x==="use-credentials"?x:"":void 0):x=null,d.d.C(v,x))},tn.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},tn.preinit=function(v,x){if(typeof v=="string"&&x&&typeof x.as=="string"){var y=x.as,j=S(y,x.crossOrigin),E=typeof x.integrity=="string"?x.integrity:void 0,Q=typeof x.fetchPriority=="string"?x.fetchPriority:void 0;y==="style"?d.d.S(v,typeof x.precedence=="string"?x.precedence:void 0,{crossOrigin:j,integrity:E,fetchPriority:Q}):y==="script"&&d.d.X(v,{crossOrigin:j,integrity:E,fetchPriority:Q,nonce:typeof x.nonce=="string"?x.nonce:void 0})}},tn.preinitModule=function(v,x){if(typeof v=="string")if(typeof x=="object"&&x!==null){if(x.as==null||x.as==="script"){var y=S(x.as,x.crossOrigin);d.d.M(v,{crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0})}}else x==null&&d.d.M(v)},tn.preload=function(v,x){if(typeof v=="string"&&typeof x=="object"&&x!==null&&typeof x.as=="string"){var y=x.as,j=S(y,x.crossOrigin);d.d.L(v,y,{crossOrigin:j,integrity:typeof x.integrity=="string"?x.integrity:void 0,nonce:typeof x.nonce=="string"?x.nonce:void 0,type:typeof x.type=="string"?x.type:void 0,fetchPriority:typeof x.fetchPriority=="string"?x.fetchPriority:void 0,referrerPolicy:typeof x.referrerPolicy=="string"?x.referrerPolicy:void 0,imageSrcSet:typeof x.imageSrcSet=="string"?x.imageSrcSet:void 0,imageSizes:typeof x.imageSizes=="string"?x.imageSizes:void 0,media:typeof x.media=="string"?x.media:void 0})}},tn.preloadModule=function(v,x){if(typeof v=="string")if(x){var y=S(x.as,x.crossOrigin);d.d.m(v,{as:typeof x.as=="string"&&x.as!=="script"?x.as:void 0,crossOrigin:y,integrity:typeof x.integrity=="string"?x.integrity:void 0})}else d.d.m(v)},tn.requestFormReset=function(v){d.d.r(v)},tn.unstable_batchedUpdates=function(v,x){return v(x)},tn.useFormState=function(v,x,y){return m.H.useFormState(v,x,y)},tn.useFormStatus=function(){return m.H.useHostTransitionStatus()},tn.version="19.2.6",tn}var Kf;function Ih(){if(Kf)return od.exports;Kf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),od.exports=ny(),od.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jf;function ay(){if(Jf)return ns;Jf=1;var s=ty(),i=Bd(),o=Ih();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function f(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function S(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function v(e){if(f(e)!==e)throw Error(d(188))}function x(e){var n=e.alternate;if(!n){if(n=f(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return v(r),e;if(c===l)return v(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var p=!1,g=r.child;g;){if(g===a){p=!0,a=r,l=c;break}if(g===l){p=!0,l=r,a=c;break}g=g.sibling}if(!p){for(g=c.child;g;){if(g===a){p=!0,a=c,l=r;break}if(g===l){p=!0,l=c,a=r;break}g=g.sibling}if(!p)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var j=Object.assign,E=Symbol.for("react.element"),Q=Symbol.for("react.transitional.element"),W=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),z=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),R=Symbol.for("react.consumer"),U=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),se=Symbol.for("react.suspense"),re=Symbol.for("react.suspense_list"),D=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),w=Symbol.iterator;function L(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function A(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case G:return"Profiler";case z:return"StrictMode";case se:return"Suspense";case re:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case W:return"Portal";case U:return e.displayName||"Context";case R:return(e._context.displayName||"Context")+".Consumer";case I:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case D:return n=e.displayName||null,n!==null?n:A(e.type)||"Memo";case Y:n=e._payload,e=e._init;try{return A(e(n))}catch{}}return null}var le=Array.isArray,H=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,F=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,k={pending:!1,data:null,method:null,action:null},de=[],_=-1;function N(e){return{current:e}}function M(e){0>_||(e.current=de[_],de[_]=null,_--)}function ce(e,n){_++,de[_]=e.current,e.current=n}var me=N(null),we=N(null),Se=N(null),Oe=N(null);function ot(e,n){switch(ce(Se,n),ce(we,e),ce(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cf(n),e=df(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}M(me),ce(me,e)}function qe(){M(me),M(we),M(Se)}function Pe(e){e.memoizedState!==null&&ce(Oe,e);var n=me.current,a=df(n,e.type);n!==a&&(ce(we,e),ce(me,a))}function Nt(e){we.current===e&&(M(me),M(we)),Oe.current===e&&(M(Oe),Wi._currentValue=k)}var St,It;function gt(e){if(St===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);St=n&&n[1]||"",It=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+St+e+It}var Qt=!1;function Ot(e,n){if(!e||Qt)return"";Qt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var ie=function(){throw Error()};if(Object.defineProperty(ie.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ie,[])}catch(V){var J=V}Reflect.construct(e,[],ie)}else{try{ie.call()}catch(V){J=V}e.call(ie.prototype)}}else{try{throw Error()}catch(V){J=V}(ie=e())&&typeof ie.catch=="function"&&ie.catch(function(){})}}catch(V){if(V&&J&&typeof V.stack=="string")return[V.stack,J.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),p=c[0],g=c[1];if(p&&g){var C=p.split(`
`),Z=g.split(`
`);for(r=l=0;l<C.length&&!C[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===C.length||r===Z.length)for(l=C.length-1,r=Z.length-1;1<=l&&0<=r&&C[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(C[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||C[l]!==Z[r]){var P=`
`+C[l].replace(" at new "," at ");return e.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",e.displayName)),P}while(1<=l&&0<=r);break}}}finally{Qt=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?gt(a):""}function an(e,n){switch(e.tag){case 26:case 27:case 5:return gt(e.type);case 16:return gt("Lazy");case 13:return e.child!==n&&n!==null?gt("Suspense Fallback"):gt("Suspense");case 19:return gt("SuspenseList");case 0:case 15:return Ot(e.type,!1);case 11:return Ot(e.type.render,!1);case 1:return Ot(e.type,!0);case 31:return gt("Activity");default:return""}}function ge(e){try{var n="",a=null;do n+=an(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Bt=Object.prototype.hasOwnProperty,Ue=s.unstable_scheduleCallback,jt=s.unstable_cancelCallback,en=s.unstable_shouldYield,T=s.unstable_requestPaint,ye=s.unstable_now,Be=s.unstable_getCurrentPriorityLevel,ve=s.unstable_ImmediatePriority,rt=s.unstable_UserBlockingPriority,$=s.unstable_NormalPriority,Ne=s.unstable_LowPriority,_e=s.unstable_IdlePriority,Me=s.log,Ie=s.unstable_setDisableYieldValue,Je=null,$e=null;function Re(e){if(typeof Me=="function"&&Ie(e),$e&&typeof $e.setStrictMode=="function")try{$e.setStrictMode(Je,e)}catch{}}var mt=Math.clz32?Math.clz32:Ia,ci=Math.log,wl=Math.LN2;function Ia(e){return e>>>=0,e===0?32:31-(ci(e)/wl|0)|0}var Gn=256,fn=262144,Yn=4194304;function sn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function q(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,p=e.pingedLanes;e=e.warmLanes;var g=l&134217727;return g!==0?(l=g&~c,l!==0?r=sn(l):(p&=g,p!==0?r=sn(p):a||(a=g&~e,a!==0&&(r=sn(a))))):(g=l&~c,g!==0?r=sn(g):p!==0?r=sn(p):a||(a=l&~e,a!==0&&(r=sn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function oe(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ee(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ke(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function Ye(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function et(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ft(e,n,a,l,r,c){var p=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var g=e.entanglements,C=e.expirationTimes,Z=e.hiddenUpdates;for(a=p&~a;0<a;){var P=31-mt(a),ie=1<<P;g[P]=0,C[P]=-1;var J=Z[P];if(J!==null)for(Z[P]=null,P=0;P<J.length;P++){var V=J[P];V!==null&&(V.lane&=-536870913)}a&=~ie}l!==0&&ct(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(p&~n))}function ct(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-mt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function De(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-mt(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function on(e,n){var a=n&-n;return a=(a&42)!==0?1:di(a),(a&(e.suspendedLanes|n))!==0?0:a}function di(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function kn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function hs(){var e=F.p;return e!==0?e:(e=window.event,e===void 0?32:Af(e.type))}function b(e,n){var a=F.p;try{return F.p=e,n()}finally{F.p=a}}var pe=Math.random().toString(36).slice(2),ue="__reactFiber$"+pe,ze="__reactProps$"+pe,xt="__reactContainer$"+pe,$n="__reactEvents$"+pe,Qn="__reactListeners$"+pe,Ko="__reactHandles$"+pe,ui="__reactResources$"+pe,pi="__reactMarker$"+pe;function Jo(e){delete e[ue],delete e[ze],delete e[$n],delete e[Qn],delete e[Ko]}function _l(e){var n=e[ue];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xt]||a[ue]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=gf(e);e!==null;){if(a=e[ue])return a;e=gf(e)}return n}e=a,a=e.parentNode}return null}function Nl(e){if(e=e[ue]||e[xt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function mi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Sl(e){var n=e[ui];return n||(n=e[ui]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Xt(e){e[pi]=!0}var Fd=new Set,Wd={};function el(e,n){kl(e,n),kl(e+"Capture",n)}function kl(e,n){for(Wd[e]=n,e=0;e<n.length;e++)Fd.add(n[e])}var Lx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Pd={},Id={};function qx(e){return Bt.call(Id,e)?!0:Bt.call(Pd,e)?!1:Lx.test(e)?Id[e]=!0:(Pd[e]=!0,!1)}function xs(e,n,a){if(qx(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function gs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function Cn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function eu(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Bx(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(p){a=""+p,c.call(this,p)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(p){a=""+p},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vo(e){if(!e._valueTracker){var n=eu(e)?"checked":"value";e._valueTracker=Bx(e,n,""+e[n])}}function tu(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=eu(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function bs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gx=/[\n"\\]/g;function zn(e){return e.replace(Gx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Fo(e,n,a,l,r,c,p,g){e.name="",p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"?e.type=p:e.removeAttribute("type"),n!=null?p==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Cn(n)):e.value!==""+Cn(n)&&(e.value=""+Cn(n)):p!=="submit"&&p!=="reset"||e.removeAttribute("value"),n!=null?Wo(e,p,Cn(n)):a!=null?Wo(e,p,Cn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.name=""+Cn(g):e.removeAttribute("name")}function nu(e,n,a,l,r,c,p,g){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vo(e);return}a=a!=null?""+Cn(a):"",n=n!=null?""+Cn(n):a,g||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=g?e.checked:!!l,e.defaultChecked=!!l,p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.name=p),Vo(e)}function Wo(e,n,a){n==="number"&&bs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Cl(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Cn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function au(e,n,a){if(n!=null&&(n=""+Cn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+Cn(a):""}function lu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(le(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=Cn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Vo(e)}function zl(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Yx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function iu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Yx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function su(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&iu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&iu(e,c,n[c])}function Po(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var $x=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ys(e){return Qx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function In(){}var Io=null;function er(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Tl=null,El=null;function ou(e){var n=Nl(e);if(n&&(e=n.stateNode)){var a=e[ze]||null;e:switch(e=n.stateNode,n.type){case"input":if(Fo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+zn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[ze]||null;if(!r)throw Error(d(90));Fo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&tu(l)}break e;case"textarea":au(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Cl(e,!!a.multiple,n,!1)}}}var tr=!1;function ru(e,n,a){if(tr)return e(n,a);tr=!0;try{var l=e(n);return l}finally{if(tr=!1,(Tl!==null||El!==null)&&(so(),Tl&&(n=Tl,e=El,El=Tl=null,ou(n),e)))for(n=0;n<e.length;n++)ou(e[n])}}function fi(e,n){var a=e.stateNode;if(a===null)return null;var l=a[ze]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),nr=!1;if(ea)try{var hi={};Object.defineProperty(hi,"passive",{get:function(){nr=!0}}),window.addEventListener("test",hi,hi),window.removeEventListener("test",hi,hi)}catch{nr=!1}var ja=null,ar=null,vs=null;function cu(){if(vs)return vs;var e,n=ar,a=n.length,l,r="value"in ja?ja.value:ja.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var p=a-e;for(l=1;l<=p&&n[a-l]===r[c-l];l++);return vs=r.slice(e,1<l?1-l:void 0)}function js(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function du(){return!1}function rn(e){function n(a,l,r,c,p){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=p,this.currentTarget=null;for(var g in e)e.hasOwnProperty(g)&&(a=e[g],this[g]=a?a(c):c[g]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ws:du,this.isPropagationStopped=du,this}return j(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),n}var tl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_s=rn(tl),xi=j({},tl,{view:0,detail:0}),Xx=rn(xi),lr,ir,gi,Ns=j({},xi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:or,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gi&&(gi&&e.type==="mousemove"?(lr=e.screenX-gi.screenX,ir=e.screenY-gi.screenY):ir=lr=0,gi=e),lr)},movementY:function(e){return"movementY"in e?e.movementY:ir}}),uu=rn(Ns),Zx=j({},Ns,{dataTransfer:0}),Kx=rn(Zx),Jx=j({},xi,{relatedTarget:0}),sr=rn(Jx),Vx=j({},tl,{animationName:0,elapsedTime:0,pseudoElement:0}),Fx=rn(Vx),Wx=j({},tl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Px=rn(Wx),Ix=j({},tl,{data:0}),pu=rn(Ix),eg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ng={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ag(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=ng[e])?!!n[e]:!1}function or(){return ag}var lg=j({},xi,{key:function(e){if(e.key){var n=eg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:or,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),ig=rn(lg),sg=j({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),mu=rn(sg),og=j({},xi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:or}),rg=rn(og),cg=j({},tl,{propertyName:0,elapsedTime:0,pseudoElement:0}),dg=rn(cg),ug=j({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pg=rn(ug),mg=j({},tl,{newState:0,oldState:0}),fg=rn(mg),hg=[9,13,27,32],rr=ea&&"CompositionEvent"in window,bi=null;ea&&"documentMode"in document&&(bi=document.documentMode);var xg=ea&&"TextEvent"in window&&!bi,fu=ea&&(!rr||bi&&8<bi&&11>=bi),hu=" ",xu=!1;function gu(e,n){switch(e){case"keyup":return hg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ml=!1;function gg(e,n){switch(e){case"compositionend":return bu(n);case"keypress":return n.which!==32?null:(xu=!0,hu);case"textInput":return e=n.data,e===hu&&xu?null:e;default:return null}}function bg(e,n){if(Ml)return e==="compositionend"||!rr&&gu(e,n)?(e=cu(),vs=ar=ja=null,Ml=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return fu&&n.locale!=="ko"?null:n.data;default:return null}}var yg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!yg[e.type]:n==="textarea"}function vu(e,n,a,l){Tl?El?El.push(l):El=[l]:Tl=l,n=fo(n,"onChange"),0<n.length&&(a=new _s("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var yi=null,vi=null;function vg(e){nf(e,0)}function Ss(e){var n=mi(e);if(tu(n))return e}function ju(e,n){if(e==="change")return n}var wu=!1;if(ea){var cr;if(ea){var dr="oninput"in document;if(!dr){var _u=document.createElement("div");_u.setAttribute("oninput","return;"),dr=typeof _u.oninput=="function"}cr=dr}else cr=!1;wu=cr&&(!document.documentMode||9<document.documentMode)}function Nu(){yi&&(yi.detachEvent("onpropertychange",Su),vi=yi=null)}function Su(e){if(e.propertyName==="value"&&Ss(vi)){var n=[];vu(n,vi,e,er(e)),ru(vg,n)}}function jg(e,n,a){e==="focusin"?(Nu(),yi=n,vi=a,yi.attachEvent("onpropertychange",Su)):e==="focusout"&&Nu()}function wg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(vi)}function _g(e,n){if(e==="click")return Ss(n)}function Ng(e,n){if(e==="input"||e==="change")return Ss(n)}function Sg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var hn=typeof Object.is=="function"?Object.is:Sg;function ji(e,n){if(hn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Bt.call(n,r)||!hn(e[r],n[r]))return!1}return!0}function ku(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Cu(e,n){var a=ku(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=ku(a)}}function zu(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?zu(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Tu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=bs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=bs(e.document)}return n}function ur(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var kg=ea&&"documentMode"in document&&11>=document.documentMode,Dl=null,pr=null,wi=null,mr=!1;function Eu(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;mr||Dl==null||Dl!==bs(l)||(l=Dl,"selectionStart"in l&&ur(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),wi&&ji(wi,l)||(wi=l,l=fo(pr,"onSelect"),0<l.length&&(n=new _s("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=Dl)))}function nl(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Al={animationend:nl("Animation","AnimationEnd"),animationiteration:nl("Animation","AnimationIteration"),animationstart:nl("Animation","AnimationStart"),transitionrun:nl("Transition","TransitionRun"),transitionstart:nl("Transition","TransitionStart"),transitioncancel:nl("Transition","TransitionCancel"),transitionend:nl("Transition","TransitionEnd")},fr={},Mu={};ea&&(Mu=document.createElement("div").style,"AnimationEvent"in window||(delete Al.animationend.animation,delete Al.animationiteration.animation,delete Al.animationstart.animation),"TransitionEvent"in window||delete Al.transitionend.transition);function al(e){if(fr[e])return fr[e];if(!Al[e])return e;var n=Al[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Mu)return fr[e]=n[a];return e}var Du=al("animationend"),Au=al("animationiteration"),Ou=al("animationstart"),Cg=al("transitionrun"),zg=al("transitionstart"),Tg=al("transitioncancel"),Uu=al("transitionend"),Ru=new Map,hr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");hr.push("scrollEnd");function Ln(e,n){Ru.set(e,n),el(n,[e])}var ks=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Tn=[],Ol=0,xr=0;function Cs(){for(var e=Ol,n=xr=Ol=0;n<e;){var a=Tn[n];Tn[n++]=null;var l=Tn[n];Tn[n++]=null;var r=Tn[n];Tn[n++]=null;var c=Tn[n];if(Tn[n++]=null,l!==null&&r!==null){var p=l.pending;p===null?r.next=r:(r.next=p.next,p.next=r),l.pending=r}c!==0&&Hu(a,r,c)}}function zs(e,n,a,l){Tn[Ol++]=e,Tn[Ol++]=n,Tn[Ol++]=a,Tn[Ol++]=l,xr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function gr(e,n,a,l){return zs(e,n,a,l),Ts(e)}function ll(e,n){return zs(e,null,null,n),Ts(e)}function Hu(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-mt(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function Ts(e){if(50<Qi)throw Qi=0,kc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ul={};function Eg(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(e,n,a,l){return new Eg(e,n,a,l)}function br(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=xn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Lu(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Es(e,n,a,l,r,c){var p=0;if(l=e,typeof e=="function")br(e)&&(p=1);else if(typeof e=="string")p=Ub(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=xn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case K:return il(a.children,r,c,n);case z:p=8,r|=24;break;case G:return e=xn(12,a,n,r|2),e.elementType=G,e.lanes=c,e;case se:return e=xn(13,a,n,r),e.elementType=se,e.lanes=c,e;case re:return e=xn(19,a,n,r),e.elementType=re,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:p=10;break e;case R:p=9;break e;case I:p=11;break e;case D:p=14;break e;case Y:p=16,l=null;break e}p=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=xn(p,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function il(e,n,a,l){return e=xn(7,e,l,n),e.lanes=a,e}function yr(e,n,a){return e=xn(6,e,null,n),e.lanes=a,e}function qu(e){var n=xn(18,null,null,0);return n.stateNode=e,n}function vr(e,n,a){return n=xn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bu=new WeakMap;function En(e,n){if(typeof e=="object"&&e!==null){var a=Bu.get(e);return a!==void 0?a:(n={value:e,source:n,stack:ge(n)},Bu.set(e,n),n)}return{value:e,source:n,stack:ge(n)}}var Rl=[],Hl=0,Ms=null,_i=0,Mn=[],Dn=0,wa=null,Xn=1,Zn="";function na(e,n){Rl[Hl++]=_i,Rl[Hl++]=Ms,Ms=e,_i=n}function Gu(e,n,a){Mn[Dn++]=Xn,Mn[Dn++]=Zn,Mn[Dn++]=wa,wa=e;var l=Xn;e=Zn;var r=32-mt(l)-1;l&=~(1<<r),a+=1;var c=32-mt(n)+r;if(30<c){var p=r-r%5;c=(l&(1<<p)-1).toString(32),l>>=p,r-=p,Xn=1<<32-mt(n)+r|a<<r|l,Zn=c+e}else Xn=1<<c|a<<r|l,Zn=e}function jr(e){e.return!==null&&(na(e,1),Gu(e,1,0))}function wr(e){for(;e===Ms;)Ms=Rl[--Hl],Rl[Hl]=null,_i=Rl[--Hl],Rl[Hl]=null;for(;e===wa;)wa=Mn[--Dn],Mn[Dn]=null,Zn=Mn[--Dn],Mn[Dn]=null,Xn=Mn[--Dn],Mn[Dn]=null}function Yu(e,n){Mn[Dn++]=Xn,Mn[Dn++]=Zn,Mn[Dn++]=wa,Xn=n.id,Zn=n.overflow,wa=e}var Kt=null,bt=null,We=!1,_a=null,An=!1,_r=Error(d(519));function Na(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ni(En(n,e)),_r}function $u(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[ue]=e,n[ze]=l,a){case"dialog":Xe("cancel",n),Xe("close",n);break;case"iframe":case"object":case"embed":Xe("load",n);break;case"video":case"audio":for(a=0;a<Zi.length;a++)Xe(Zi[a],n);break;case"source":Xe("error",n);break;case"img":case"image":case"link":Xe("error",n),Xe("load",n);break;case"details":Xe("toggle",n);break;case"input":Xe("invalid",n),nu(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Xe("invalid",n);break;case"textarea":Xe("invalid",n),lu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||of(n.textContent,a)?(l.popover!=null&&(Xe("beforetoggle",n),Xe("toggle",n)),l.onScroll!=null&&Xe("scroll",n),l.onScrollEnd!=null&&Xe("scrollend",n),l.onClick!=null&&(n.onclick=In),n=!0):n=!1,n||Na(e,!0)}function Qu(e){for(Kt=e.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:An=!1;return;case 27:case 3:An=!0;return;default:Kt=Kt.return}}function Ll(e){if(e!==Kt)return!1;if(!We)return Qu(e),We=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Gc(e.type,e.memoizedProps)),a=!a),a&&bt&&Na(e),Qu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=xf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=xf(e)}else n===27?(n=bt,La(e.type)?(e=Zc,Zc=null,bt=e):bt=n):bt=Kt?Un(e.stateNode.nextSibling):null;return!0}function sl(){bt=Kt=null,We=!1}function Nr(){var e=_a;return e!==null&&(pn===null?pn=e:pn.push.apply(pn,e),_a=null),e}function Ni(e){_a===null?_a=[e]:_a.push(e)}var Sr=N(null),ol=null,aa=null;function Sa(e,n,a){ce(Sr,n._currentValue),n._currentValue=a}function la(e){e._currentValue=Sr.current,M(Sr)}function kr(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function Cr(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var p=r.child;c=c.firstContext;e:for(;c!==null;){var g=c;c=r;for(var C=0;C<n.length;C++)if(g.context===n[C]){c.lanes|=a,g=c.alternate,g!==null&&(g.lanes|=a),kr(c.return,a,e),l||(p=null);break e}c=g.next}}else if(r.tag===18){if(p=r.return,p===null)throw Error(d(341));p.lanes|=a,c=p.alternate,c!==null&&(c.lanes|=a),kr(p,a,e),p=null}else p=r.child;if(p!==null)p.return=r;else for(p=r;p!==null;){if(p===e){p=null;break}if(r=p.sibling,r!==null){r.return=p.return,p=r;break}p=p.return}r=p}}function ql(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var p=r.alternate;if(p===null)throw Error(d(387));if(p=p.memoizedProps,p!==null){var g=r.type;hn(r.pendingProps.value,p.value)||(e!==null?e.push(g):e=[g])}}else if(r===Oe.current){if(p=r.alternate,p===null)throw Error(d(387));p.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Wi):e=[Wi])}r=r.return}e!==null&&Cr(n,e,a,l),n.flags|=262144}function Ds(e){for(e=e.firstContext;e!==null;){if(!hn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function rl(e){ol=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Jt(e){return Xu(ol,e)}function As(e,n){return ol===null&&rl(e),Xu(e,n)}function Xu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(d(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var Mg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Dg=s.unstable_scheduleCallback,Ag=s.unstable_NormalPriority,Ut={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function zr(){return{controller:new Mg,data:new Map,refCount:0}}function Si(e){e.refCount--,e.refCount===0&&Dg(Ag,function(){e.controller.abort()})}var ki=null,Tr=0,Bl=0,Gl=null;function Og(e,n){if(ki===null){var a=ki=[];Tr=0,Bl=Dc(),Gl={status:"pending",value:void 0,then:function(l){a.push(l)}}}return Tr++,n.then(Zu,Zu),n}function Zu(){if(--Tr===0&&ki!==null){Gl!==null&&(Gl.status="fulfilled");var e=ki;ki=null,Bl=0,Gl=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Ug(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var Ku=H.S;H.S=function(e,n){Em=ye(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Og(e,n),Ku!==null&&Ku(e,n)};var cl=N(null);function Er(){var e=cl.current;return e!==null?e:ht.pooledCache}function Os(e,n){n===null?ce(cl,cl.current):ce(cl,n.pool)}function Ju(){var e=Er();return e===null?null:{parent:Ut._currentValue,pool:e}}var Yl=Error(d(460)),Mr=Error(d(474)),Us=Error(d(542)),Rs={then:function(){}};function Vu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Fu(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(In,In),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pu(e),e;default:if(typeof n.status=="string")n.then(In,In);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Pu(e),e}throw ul=n,Yl}}function dl(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ul=a,Yl):a}}var ul=null;function Wu(){if(ul===null)throw Error(d(459));var e=ul;return ul=null,e}function Pu(e){if(e===Yl||e===Us)throw Error(d(483))}var $l=null,Ci=0;function Hs(e){var n=Ci;return Ci+=1,$l===null&&($l=[]),Fu($l,e,n)}function zi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ls(e,n){throw n.$$typeof===E?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Iu(e){function n(B,O){if(e){var X=B.deletions;X===null?(B.deletions=[O],B.flags|=16):X.push(O)}}function a(B,O){if(!e)return null;for(;O!==null;)n(B,O),O=O.sibling;return null}function l(B){for(var O=new Map;B!==null;)B.key!==null?O.set(B.key,B):O.set(B.index,B),B=B.sibling;return O}function r(B,O){return B=ta(B,O),B.index=0,B.sibling=null,B}function c(B,O,X){return B.index=X,e?(X=B.alternate,X!==null?(X=X.index,X<O?(B.flags|=67108866,O):X):(B.flags|=67108866,O)):(B.flags|=1048576,O)}function p(B){return e&&B.alternate===null&&(B.flags|=67108866),B}function g(B,O,X,ae){return O===null||O.tag!==6?(O=yr(X,B.mode,ae),O.return=B,O):(O=r(O,X),O.return=B,O)}function C(B,O,X,ae){var Ee=X.type;return Ee===K?P(B,O,X.props.children,ae,X.key):O!==null&&(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===Y&&dl(Ee)===O.type)?(O=r(O,X.props),zi(O,X),O.return=B,O):(O=Es(X.type,X.key,X.props,null,B.mode,ae),zi(O,X),O.return=B,O)}function Z(B,O,X,ae){return O===null||O.tag!==4||O.stateNode.containerInfo!==X.containerInfo||O.stateNode.implementation!==X.implementation?(O=vr(X,B.mode,ae),O.return=B,O):(O=r(O,X.children||[]),O.return=B,O)}function P(B,O,X,ae,Ee){return O===null||O.tag!==7?(O=il(X,B.mode,ae,Ee),O.return=B,O):(O=r(O,X),O.return=B,O)}function ie(B,O,X){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=yr(""+O,B.mode,X),O.return=B,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Q:return X=Es(O.type,O.key,O.props,null,B.mode,X),zi(X,O),X.return=B,X;case W:return O=vr(O,B.mode,X),O.return=B,O;case Y:return O=dl(O),ie(B,O,X)}if(le(O)||L(O))return O=il(O,B.mode,X,null),O.return=B,O;if(typeof O.then=="function")return ie(B,Hs(O),X);if(O.$$typeof===U)return ie(B,As(B,O),X);Ls(B,O)}return null}function J(B,O,X,ae){var Ee=O!==null?O.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Ee!==null?null:g(B,O,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Q:return X.key===Ee?C(B,O,X,ae):null;case W:return X.key===Ee?Z(B,O,X,ae):null;case Y:return X=dl(X),J(B,O,X,ae)}if(le(X)||L(X))return Ee!==null?null:P(B,O,X,ae,null);if(typeof X.then=="function")return J(B,O,Hs(X),ae);if(X.$$typeof===U)return J(B,O,As(B,X),ae);Ls(B,X)}return null}function V(B,O,X,ae,Ee){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return B=B.get(X)||null,g(O,B,""+ae,Ee);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Q:return B=B.get(ae.key===null?X:ae.key)||null,C(O,B,ae,Ee);case W:return B=B.get(ae.key===null?X:ae.key)||null,Z(O,B,ae,Ee);case Y:return ae=dl(ae),V(B,O,X,ae,Ee)}if(le(ae)||L(ae))return B=B.get(X)||null,P(O,B,ae,Ee,null);if(typeof ae.then=="function")return V(B,O,X,Hs(ae),Ee);if(ae.$$typeof===U)return V(B,O,X,As(O,ae),Ee);Ls(O,ae)}return null}function je(B,O,X,ae){for(var Ee=null,tt=null,Ce=O,Ge=O=0,Fe=null;Ce!==null&&Ge<X.length;Ge++){Ce.index>Ge?(Fe=Ce,Ce=null):Fe=Ce.sibling;var nt=J(B,Ce,X[Ge],ae);if(nt===null){Ce===null&&(Ce=Fe);break}e&&Ce&&nt.alternate===null&&n(B,Ce),O=c(nt,O,Ge),tt===null?Ee=nt:tt.sibling=nt,tt=nt,Ce=Fe}if(Ge===X.length)return a(B,Ce),We&&na(B,Ge),Ee;if(Ce===null){for(;Ge<X.length;Ge++)Ce=ie(B,X[Ge],ae),Ce!==null&&(O=c(Ce,O,Ge),tt===null?Ee=Ce:tt.sibling=Ce,tt=Ce);return We&&na(B,Ge),Ee}for(Ce=l(Ce);Ge<X.length;Ge++)Fe=V(Ce,B,Ge,X[Ge],ae),Fe!==null&&(e&&Fe.alternate!==null&&Ce.delete(Fe.key===null?Ge:Fe.key),O=c(Fe,O,Ge),tt===null?Ee=Fe:tt.sibling=Fe,tt=Fe);return e&&Ce.forEach(function($a){return n(B,$a)}),We&&na(B,Ge),Ee}function Ae(B,O,X,ae){if(X==null)throw Error(d(151));for(var Ee=null,tt=null,Ce=O,Ge=O=0,Fe=null,nt=X.next();Ce!==null&&!nt.done;Ge++,nt=X.next()){Ce.index>Ge?(Fe=Ce,Ce=null):Fe=Ce.sibling;var $a=J(B,Ce,nt.value,ae);if($a===null){Ce===null&&(Ce=Fe);break}e&&Ce&&$a.alternate===null&&n(B,Ce),O=c($a,O,Ge),tt===null?Ee=$a:tt.sibling=$a,tt=$a,Ce=Fe}if(nt.done)return a(B,Ce),We&&na(B,Ge),Ee;if(Ce===null){for(;!nt.done;Ge++,nt=X.next())nt=ie(B,nt.value,ae),nt!==null&&(O=c(nt,O,Ge),tt===null?Ee=nt:tt.sibling=nt,tt=nt);return We&&na(B,Ge),Ee}for(Ce=l(Ce);!nt.done;Ge++,nt=X.next())nt=V(Ce,B,Ge,nt.value,ae),nt!==null&&(e&&nt.alternate!==null&&Ce.delete(nt.key===null?Ge:nt.key),O=c(nt,O,Ge),tt===null?Ee=nt:tt.sibling=nt,tt=nt);return e&&Ce.forEach(function(Zb){return n(B,Zb)}),We&&na(B,Ge),Ee}function pt(B,O,X,ae){if(typeof X=="object"&&X!==null&&X.type===K&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case Q:e:{for(var Ee=X.key;O!==null;){if(O.key===Ee){if(Ee=X.type,Ee===K){if(O.tag===7){a(B,O.sibling),ae=r(O,X.props.children),ae.return=B,B=ae;break e}}else if(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===Y&&dl(Ee)===O.type){a(B,O.sibling),ae=r(O,X.props),zi(ae,X),ae.return=B,B=ae;break e}a(B,O);break}else n(B,O);O=O.sibling}X.type===K?(ae=il(X.props.children,B.mode,ae,X.key),ae.return=B,B=ae):(ae=Es(X.type,X.key,X.props,null,B.mode,ae),zi(ae,X),ae.return=B,B=ae)}return p(B);case W:e:{for(Ee=X.key;O!==null;){if(O.key===Ee)if(O.tag===4&&O.stateNode.containerInfo===X.containerInfo&&O.stateNode.implementation===X.implementation){a(B,O.sibling),ae=r(O,X.children||[]),ae.return=B,B=ae;break e}else{a(B,O);break}else n(B,O);O=O.sibling}ae=vr(X,B.mode,ae),ae.return=B,B=ae}return p(B);case Y:return X=dl(X),pt(B,O,X,ae)}if(le(X))return je(B,O,X,ae);if(L(X)){if(Ee=L(X),typeof Ee!="function")throw Error(d(150));return X=Ee.call(X),Ae(B,O,X,ae)}if(typeof X.then=="function")return pt(B,O,Hs(X),ae);if(X.$$typeof===U)return pt(B,O,As(B,X),ae);Ls(B,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,O!==null&&O.tag===6?(a(B,O.sibling),ae=r(O,X),ae.return=B,B=ae):(a(B,O),ae=yr(X,B.mode,ae),ae.return=B,B=ae),p(B)):a(B,O)}return function(B,O,X,ae){try{Ci=0;var Ee=pt(B,O,X,ae);return $l=null,Ee}catch(Ce){if(Ce===Yl||Ce===Us)throw Ce;var tt=xn(29,Ce,null,B.mode);return tt.lanes=ae,tt.return=B,tt}finally{}}}var pl=Iu(!0),ep=Iu(!1),ka=!1;function Dr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ar(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Ca(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function za(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=Ts(e),Hu(e,null,a),n}return zs(e,l,n,a),Ts(e)}function Ti(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,De(e,a)}}function Or(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var p={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=p:c=c.next=p,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ur=!1;function Ei(){if(Ur){var e=Gl;if(e!==null)throw e}}function Mi(e,n,a,l){Ur=!1;var r=e.updateQueue;ka=!1;var c=r.firstBaseUpdate,p=r.lastBaseUpdate,g=r.shared.pending;if(g!==null){r.shared.pending=null;var C=g,Z=C.next;C.next=null,p===null?c=Z:p.next=Z,p=C;var P=e.alternate;P!==null&&(P=P.updateQueue,g=P.lastBaseUpdate,g!==p&&(g===null?P.firstBaseUpdate=Z:g.next=Z,P.lastBaseUpdate=C))}if(c!==null){var ie=r.baseState;p=0,P=Z=C=null,g=c;do{var J=g.lane&-536870913,V=J!==g.lane;if(V?(Ve&J)===J:(l&J)===J){J!==0&&J===Bl&&(Ur=!0),P!==null&&(P=P.next={lane:0,tag:g.tag,payload:g.payload,callback:null,next:null});e:{var je=e,Ae=g;J=n;var pt=a;switch(Ae.tag){case 1:if(je=Ae.payload,typeof je=="function"){ie=je.call(pt,ie,J);break e}ie=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Ae.payload,J=typeof je=="function"?je.call(pt,ie,J):je,J==null)break e;ie=j({},ie,J);break e;case 2:ka=!0}}J=g.callback,J!==null&&(e.flags|=64,V&&(e.flags|=8192),V=r.callbacks,V===null?r.callbacks=[J]:V.push(J))}else V={lane:J,tag:g.tag,payload:g.payload,callback:g.callback,next:null},P===null?(Z=P=V,C=ie):P=P.next=V,p|=J;if(g=g.next,g===null){if(g=r.shared.pending,g===null)break;V=g,g=V.next,V.next=null,r.lastBaseUpdate=V,r.shared.pending=null}}while(!0);P===null&&(C=ie),r.baseState=C,r.firstBaseUpdate=Z,r.lastBaseUpdate=P,c===null&&(r.shared.lanes=0),Aa|=p,e.lanes=p,e.memoizedState=ie}}function tp(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function np(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tp(a[e],n)}var Ql=N(null),qs=N(0);function ap(e,n){e=ma,ce(qs,e),ce(Ql,n),ma=e|n.baseLanes}function Rr(){ce(qs,ma),ce(Ql,Ql.current)}function Hr(){ma=qs.current,M(Ql),M(qs)}var gn=N(null),On=null;function Ta(e){var n=e.alternate;ce(Tt,Tt.current&1),ce(gn,e),On===null&&(n===null||Ql.current!==null||n.memoizedState!==null)&&(On=e)}function Lr(e){ce(Tt,Tt.current),ce(gn,e),On===null&&(On=e)}function lp(e){e.tag===22?(ce(Tt,Tt.current),ce(gn,e),On===null&&(On=e)):Ea()}function Ea(){ce(Tt,Tt.current),ce(gn,gn.current)}function bn(e){M(gn),On===e&&(On=null),M(Tt)}var Tt=N(0);function Bs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Qc(a)||Xc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,Le=null,dt=null,Rt=null,Gs=!1,Xl=!1,ml=!1,Ys=0,Di=0,Zl=null,Rg=0;function kt(){throw Error(d(321))}function qr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!hn(e[a],n[a]))return!1;return!0}function Br(e,n,a,l,r,c){return ia=c,Le=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?Gp:tc,ml=!1,c=a(l,r),ml=!1,Xl&&(c=sp(n,a,l,r)),ip(e),c}function ip(e){H.H=Ui;var n=dt!==null&&dt.next!==null;if(ia=0,Rt=dt=Le=null,Gs=!1,Di=0,Zl=null,n)throw Error(d(300));e===null||Ht||(e=e.dependencies,e!==null&&Ds(e)&&(Ht=!0))}function sp(e,n,a,l){Le=e;var r=0;do{if(Xl&&(Zl=null),Di=0,Xl=!1,25<=r)throw Error(d(301));if(r+=1,Rt=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}H.H=Yp,c=n(a,l)}while(Xl);return c}function Hg(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Ai(n):n,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(Le.flags|=1024),n}function Gr(){var e=Ys!==0;return Ys=0,e}function Yr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function $r(e){if(Gs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Gs=!1}ia=0,Rt=dt=Le=null,Xl=!1,Di=Ys=0,Zl=null}function ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?Le.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Et(){if(dt===null){var e=Le.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var n=Rt===null?Le.memoizedState:Rt.next;if(n!==null)Rt=n,dt=e;else{if(e===null)throw Le.alternate===null?Error(d(467)):Error(d(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Rt===null?Le.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function $s(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ai(e){var n=Di;return Di+=1,Zl===null&&(Zl=[]),e=Fu(Zl,e,n),n=Le,(Rt===null?n.memoizedState:Rt.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Gp:tc),e}function Qs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ai(e);if(e.$$typeof===U)return Jt(e)}throw Error(d(438,String(e)))}function Qr(e){var n=null,a=Le.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=Le.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=$s(),Le.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=he;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Xs(e){var n=Et();return Xr(n,dt,e)}function Xr(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var p=r.next;r.next=c.next,c.next=p}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var g=p=null,C=null,Z=n,P=!1;do{var ie=Z.lane&-536870913;if(ie!==Z.lane?(Ve&ie)===ie:(ia&ie)===ie){var J=Z.revertLane;if(J===0)C!==null&&(C=C.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),ie===Bl&&(P=!0);else if((ia&J)===J){Z=Z.next,J===Bl&&(P=!0);continue}else ie={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},C===null?(g=C=ie,p=c):C=C.next=ie,Le.lanes|=J,Aa|=J;ie=Z.action,ml&&a(c,ie),c=Z.hasEagerState?Z.eagerState:a(c,ie)}else J={lane:ie,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},C===null?(g=C=J,p=c):C=C.next=J,Le.lanes|=ie,Aa|=ie;Z=Z.next}while(Z!==null&&Z!==n);if(C===null?p=c:C.next=g,!hn(c,e.memoizedState)&&(Ht=!0,P&&(a=Gl,a!==null)))throw a;e.memoizedState=c,e.baseState=p,e.baseQueue=C,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Zr(e){var n=Et(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var p=r=r.next;do c=e(c,p.action),p=p.next;while(p!==r);hn(c,n.memoizedState)||(Ht=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function op(e,n,a){var l=Le,r=Et(),c=We;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var p=!hn((dt||r).memoizedState,a);if(p&&(r.memoizedState=a,Ht=!0),r=r.queue,Vr(dp.bind(null,l,r,e),[e]),r.getSnapshot!==n||p||Rt!==null&&Rt.memoizedState.tag&1){if(l.flags|=2048,Kl(9,{destroy:void 0},cp.bind(null,l,r,a,n),null),ht===null)throw Error(d(349));c||(ia&127)!==0||rp(l,n,a)}return a}function rp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=Le.updateQueue,n===null?(n=$s(),Le.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function cp(e,n,a,l){n.value=a,n.getSnapshot=l,up(n)&&pp(e)}function dp(e,n,a){return a(function(){up(n)&&pp(e)})}function up(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!hn(e,a)}catch{return!0}}function pp(e){var n=ll(e,2);n!==null&&mn(n,e,2)}function Kr(e){var n=ln();if(typeof e=="function"){var a=e;if(e=a(),ml){Re(!0);try{a()}finally{Re(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function mp(e,n,a,l){return e.baseState=a,Xr(e,dt,typeof l=="function"?l:sa)}function Lg(e,n,a,l,r){if(Js(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(p){c.listeners.push(p)}};H.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,fp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function fp(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=H.T,p={};H.T=p;try{var g=a(r,l),C=H.S;C!==null&&C(p,g),hp(e,n,g)}catch(Z){Jr(e,n,Z)}finally{c!==null&&p.types!==null&&(c.types=p.types),H.T=c}}else try{c=a(r,l),hp(e,n,c)}catch(Z){Jr(e,n,Z)}}function hp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){xp(e,n,l)},function(l){return Jr(e,n,l)}):xp(e,n,a)}function xp(e,n,a){n.status="fulfilled",n.value=a,gp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,fp(e,a)))}function Jr(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,gp(n),n=n.next;while(n!==l)}e.action=null}function gp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function bp(e,n){return n}function yp(e,n){if(We){var a=ht.formState;if(a!==null){e:{var l=Le;if(We){if(bt){t:{for(var r=bt,c=An;r.nodeType!==8;){if(!c){r=null;break t}if(r=Un(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){bt=Un(r.nextSibling),l=r.data==="F!";break e}}Na(l)}l=!1}l&&(n=a[0])}}return a=ln(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:bp,lastRenderedState:n},a.queue=l,a=Lp.bind(null,Le,l),l.dispatch=a,l=Kr(!1),c=ec.bind(null,Le,!1,l.queue),l=ln(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=Lg.bind(null,Le,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function vp(e){var n=Et();return jp(n,dt,e)}function jp(e,n,a){if(n=Xr(e,n,bp)[0],e=Xs(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ai(n)}catch(p){throw p===Yl?Us:p}else l=n;n=Et();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(Le.flags|=2048,Kl(9,{destroy:void 0},qg.bind(null,r,a),null)),[l,c,e]}function qg(e,n){e.action=n}function wp(e){var n=Et(),a=dt;if(a!==null)return jp(n,a,e);Et(),n=n.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Kl(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=Le.updateQueue,n===null&&(n=$s(),Le.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function _p(){return Et().memoizedState}function Zs(e,n,a,l){var r=ln();Le.flags|=e,r.memoizedState=Kl(1|n,{destroy:void 0},a,l===void 0?null:l)}function Ks(e,n,a,l){var r=Et();l=l===void 0?null:l;var c=r.memoizedState.inst;dt!==null&&l!==null&&qr(l,dt.memoizedState.deps)?r.memoizedState=Kl(n,c,a,l):(Le.flags|=e,r.memoizedState=Kl(1|n,c,a,l))}function Np(e,n){Zs(8390656,8,e,n)}function Vr(e,n){Ks(2048,8,e,n)}function Bg(e){Le.flags|=4;var n=Le.updateQueue;if(n===null)n=$s(),Le.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Sp(e){var n=Et().memoizedState;return Bg({ref:n,nextImpl:e}),function(){if((at&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function kp(e,n){return Ks(4,2,e,n)}function Cp(e,n){return Ks(4,4,e,n)}function zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Tp(e,n,a){a=a!=null?a.concat([e]):null,Ks(4,4,zp.bind(null,n,e),a)}function Fr(){}function Ep(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&qr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Mp(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&qr(n,l[1]))return l[0];if(l=e(),ml){Re(!0);try{e()}finally{Re(!1)}}return a.memoizedState=[l,n],l}function Wr(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Ve&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Dm(),Le.lanes|=e,Aa|=e,a)}function Dp(e,n,a,l){return hn(a,n)?a:Ql.current!==null?(e=Wr(e,a,l),hn(e,n)||(Ht=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Ve&261930)===0?(Ht=!0,e.memoizedState=a):(e=Dm(),Le.lanes|=e,Aa|=e,n)}function Ap(e,n,a,l,r){var c=F.p;F.p=c!==0&&8>c?c:8;var p=H.T,g={};H.T=g,ec(e,!1,n,a);try{var C=r(),Z=H.S;if(Z!==null&&Z(g,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var P=Ug(C,l);Oi(e,n,P,jn(e))}else Oi(e,n,l,jn(e))}catch(ie){Oi(e,n,{then:function(){},status:"rejected",reason:ie},jn())}finally{F.p=c,p!==null&&g.types!==null&&(p.types=g.types),H.T=p}}function Gg(){}function Pr(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Op(e).queue;Ap(e,r,n,k,a===null?Gg:function(){return Up(e),a(l)})}function Op(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:k,baseState:k,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:k},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Up(e){var n=Op(e);n.next===null&&(n=e.alternate.memoizedState),Oi(e,n.next.queue,{},jn())}function Ir(){return Jt(Wi)}function Rp(){return Et().memoizedState}function Hp(){return Et().memoizedState}function Yg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=jn();e=Ca(a);var l=za(n,e,a);l!==null&&(mn(l,n,a),Ti(l,n,a)),n={cache:zr()},e.payload=n;return}n=n.return}}function $g(e,n,a){var l=jn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Js(e)?qp(n,a):(a=gr(e,n,a,l),a!==null&&(mn(a,e,l),Bp(a,n,l)))}function Lp(e,n,a){var l=jn();Oi(e,n,a,l)}function Oi(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Js(e))qp(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var p=n.lastRenderedState,g=c(p,a);if(r.hasEagerState=!0,r.eagerState=g,hn(g,p))return zs(e,n,r,0),ht===null&&Cs(),!1}catch{}finally{}if(a=gr(e,n,r,l),a!==null)return mn(a,e,l),Bp(a,n,l),!0}return!1}function ec(e,n,a,l){if(l={lane:2,revertLane:Dc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Js(e)){if(n)throw Error(d(479))}else n=gr(e,a,l,2),n!==null&&mn(n,e,2)}function Js(e){var n=e.alternate;return e===Le||n!==null&&n===Le}function qp(e,n){Xl=Gs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bp(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,De(e,a)}}var Ui={readContext:Jt,use:Qs,useCallback:kt,useContext:kt,useEffect:kt,useImperativeHandle:kt,useLayoutEffect:kt,useInsertionEffect:kt,useMemo:kt,useReducer:kt,useRef:kt,useState:kt,useDebugValue:kt,useDeferredValue:kt,useTransition:kt,useSyncExternalStore:kt,useId:kt,useHostTransitionStatus:kt,useFormState:kt,useActionState:kt,useOptimistic:kt,useMemoCache:kt,useCacheRefresh:kt};Ui.useEffectEvent=kt;var Gp={readContext:Jt,use:Qs,useCallback:function(e,n){return ln().memoizedState=[e,n===void 0?null:n],e},useContext:Jt,useEffect:Np,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Zs(4194308,4,zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Zs(4194308,4,e,n)},useInsertionEffect:function(e,n){Zs(4,2,e,n)},useMemo:function(e,n){var a=ln();n=n===void 0?null:n;var l=e();if(ml){Re(!0);try{e()}finally{Re(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=ln();if(a!==void 0){var r=a(n);if(ml){Re(!0);try{a(n)}finally{Re(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=$g.bind(null,Le,e),[l.memoizedState,e]},useRef:function(e){var n=ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Kr(e);var n=e.queue,a=Lp.bind(null,Le,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Fr,useDeferredValue:function(e,n){var a=ln();return Wr(a,e,n)},useTransition:function(){var e=Kr(!1);return e=Ap.bind(null,Le,e.queue,!0,!1),ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=Le,r=ln();if(We){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Ve&127)!==0||rp(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,Np(dp.bind(null,l,c,e),[e]),l.flags|=2048,Kl(9,{destroy:void 0},cp.bind(null,l,c,a,n),null),a},useId:function(){var e=ln(),n=ht.identifierPrefix;if(We){var a=Zn,l=Xn;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Ys++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Rg++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ir,useFormState:yp,useActionState:yp,useOptimistic:function(e){var n=ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ec.bind(null,Le,!0,a),a.dispatch=n,[e,n]},useMemoCache:Qr,useCacheRefresh:function(){return ln().memoizedState=Yg.bind(null,Le)},useEffectEvent:function(e){var n=ln(),a={impl:e};return n.memoizedState=a,function(){if((at&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},tc={readContext:Jt,use:Qs,useCallback:Ep,useContext:Jt,useEffect:Vr,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Mp,useReducer:Xs,useRef:_p,useState:function(){return Xs(sa)},useDebugValue:Fr,useDeferredValue:function(e,n){var a=Et();return Dp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Xs(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Ai(e),n]},useSyncExternalStore:op,useId:Rp,useHostTransitionStatus:Ir,useFormState:vp,useActionState:vp,useOptimistic:function(e,n){var a=Et();return mp(a,dt,e,n)},useMemoCache:Qr,useCacheRefresh:Hp};tc.useEffectEvent=Sp;var Yp={readContext:Jt,use:Qs,useCallback:Ep,useContext:Jt,useEffect:Vr,useImperativeHandle:Tp,useInsertionEffect:kp,useLayoutEffect:Cp,useMemo:Mp,useReducer:Zr,useRef:_p,useState:function(){return Zr(sa)},useDebugValue:Fr,useDeferredValue:function(e,n){var a=Et();return dt===null?Wr(a,e,n):Dp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Zr(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Ai(e),n]},useSyncExternalStore:op,useId:Rp,useHostTransitionStatus:Ir,useFormState:wp,useActionState:wp,useOptimistic:function(e,n){var a=Et();return dt!==null?mp(a,dt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Qr,useCacheRefresh:Hp};Yp.useEffectEvent=Sp;function nc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:j({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ac={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=jn(),r=Ca(l);r.payload=n,a!=null&&(r.callback=a),n=za(e,r,l),n!==null&&(mn(n,e,l),Ti(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=jn(),r=Ca(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=za(e,r,l),n!==null&&(mn(n,e,l),Ti(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=jn(),l=Ca(a);l.tag=2,n!=null&&(l.callback=n),n=za(e,l,a),n!==null&&(mn(n,e,a),Ti(n,e,a))}};function $p(e,n,a,l,r,c,p){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,p):n.prototype&&n.prototype.isPureReactComponent?!ji(a,l)||!ji(r,c):!0}function Qp(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&ac.enqueueReplaceState(n,n.state,null)}function fl(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=j({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Xp(e){ks(e)}function Zp(e){console.error(e)}function Kp(e){ks(e)}function Vs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Jp(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function lc(e,n,a){return a=Ca(a),a.tag=3,a.payload={element:null},a.callback=function(){Vs(e,n)},a}function Vp(e){return e=Ca(e),e.tag=3,e}function Fp(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Jp(n,a,l)}}var p=a.stateNode;p!==null&&typeof p.componentDidCatch=="function"&&(e.callback=function(){Jp(n,a,l),typeof r!="function"&&(Oa===null?Oa=new Set([this]):Oa.add(this));var g=l.stack;this.componentDidCatch(l.value,{componentStack:g!==null?g:""})})}function Qg(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&ql(n,a,r,!0),a=gn.current,a!==null){switch(a.tag){case 31:case 13:return On===null?oo():a.alternate===null&&Ct===0&&(Ct=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Rs?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),Tc(e,l,r)),!1;case 22:return a.flags|=65536,l===Rs?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),Tc(e,l,r)),!1}throw Error(d(435,a.tag))}return Tc(e,l,r),oo(),!1}if(We)return n=gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==_r&&(e=Error(d(422),{cause:l}),Ni(En(e,a)))):(l!==_r&&(n=Error(d(423),{cause:l}),Ni(En(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=En(l,a),r=lc(e.stateNode,l,r),Or(e,r),Ct!==4&&(Ct=2)),!1;var c=Error(d(520),{cause:l});if(c=En(c,a),$i===null?$i=[c]:$i.push(c),Ct!==4&&(Ct=2),n===null)return!0;l=En(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=lc(a.stateNode,l,e),Or(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Oa===null||!Oa.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Vp(r),Fp(r,e,a,l),Or(a,r),!1}a=a.return}while(a!==null);return!1}var ic=Error(d(461)),Ht=!1;function Vt(e,n,a,l){n.child=e===null?ep(n,null,a,l):pl(n,e.child,a,l)}function Wp(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var p={};for(var g in l)g!=="ref"&&(p[g]=l[g])}else p=l;return rl(n),l=Br(e,n,a,p,c,r),g=Gr(),e!==null&&!Ht?(Yr(e,n,r),oa(e,n,r)):(We&&g&&jr(n),n.flags|=1,Vt(e,n,l,r),n.child)}function Pp(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!br(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Ip(e,n,c,l,r)):(e=Es(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!mc(e,r)){var p=c.memoizedProps;if(a=a.compare,a=a!==null?a:ji,a(p,l)&&e.ref===n.ref)return oa(e,n,r)}return n.flags|=1,e=ta(c,l),e.ref=n.ref,e.return=n,n.child=e}function Ip(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(ji(c,l)&&e.ref===n.ref)if(Ht=!1,n.pendingProps=l=c,mc(e,r))(e.flags&131072)!==0&&(Ht=!0);else return n.lanes=e.lanes,oa(e,n,r)}return sc(e,n,a,l,r)}function em(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return tm(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Os(n,c!==null?c.cachePool:null),c!==null?ap(n,c):Rr(),lp(n);else return l=n.lanes=536870912,tm(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(Os(n,c.cachePool),ap(n,c),Ea(),n.memoizedState=null):(e!==null&&Os(n,null),Rr(),Ea());return Vt(e,n,r,a),n.child}function Ri(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function tm(e,n,a,l,r){var c=Er();return c=c===null?null:{parent:Ut._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Os(n,null),Rr(),lp(n),e!==null&&ql(e,n,l,!0),n.childLanes=r,null}function Fs(e,n){return n=Ps({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function nm(e,n,a){return pl(n,e.child,null,a),e=Fs(n,n.pendingProps),e.flags|=2,bn(n),n.memoizedState=null,e}function Xg(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(We){if(l.mode==="hidden")return e=Fs(n,l),n.lanes=536870912,Ri(null,e);if(Lr(n),(e=bt)?(e=hf(e,An),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=qu(e),a.return=n,n.child=a,Kt=n,bt=null)):e=null,e===null)throw Na(n);return n.lanes=536870912,null}return Fs(n,l)}var c=e.memoizedState;if(c!==null){var p=c.dehydrated;if(Lr(n),r)if(n.flags&256)n.flags&=-257,n=nm(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Ht||ql(e,n,a,!1),r=(a&e.childLanes)!==0,Ht||r){if(l=ht,l!==null&&(p=on(l,a),p!==0&&p!==c.retryLane))throw c.retryLane=p,ll(e,p),mn(l,e,p),ic;oo(),n=nm(e,n,a)}else e=c.treeContext,bt=Un(p.nextSibling),Kt=n,We=!0,_a=null,An=!1,e!==null&&Yu(n,e),n=Fs(n,l),n.flags|=4096;return n}return e=ta(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ws(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function sc(e,n,a,l,r){return rl(n),a=Br(e,n,a,l,void 0,r),l=Gr(),e!==null&&!Ht?(Yr(e,n,r),oa(e,n,r)):(We&&l&&jr(n),n.flags|=1,Vt(e,n,a,r),n.child)}function am(e,n,a,l,r,c){return rl(n),n.updateQueue=null,a=sp(n,l,a,r),ip(e),l=Gr(),e!==null&&!Ht?(Yr(e,n,c),oa(e,n,c)):(We&&l&&jr(n),n.flags|=1,Vt(e,n,a,c),n.child)}function lm(e,n,a,l,r){if(rl(n),n.stateNode===null){var c=Ul,p=a.contextType;typeof p=="object"&&p!==null&&(c=Jt(p)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=ac,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Dr(n),p=a.contextType,c.context=typeof p=="object"&&p!==null?Jt(p):Ul,c.state=n.memoizedState,p=a.getDerivedStateFromProps,typeof p=="function"&&(nc(n,a,p,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(p=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),p!==c.state&&ac.enqueueReplaceState(c,c.state,null),Mi(n,l,c,r),Ei(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var g=n.memoizedProps,C=fl(a,g);c.props=C;var Z=c.context,P=a.contextType;p=Ul,typeof P=="object"&&P!==null&&(p=Jt(P));var ie=a.getDerivedStateFromProps;P=typeof ie=="function"||typeof c.getSnapshotBeforeUpdate=="function",g=n.pendingProps!==g,P||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g||Z!==p)&&Qp(n,c,l,p),ka=!1;var J=n.memoizedState;c.state=J,Mi(n,l,c,r),Ei(),Z=n.memoizedState,g||J!==Z||ka?(typeof ie=="function"&&(nc(n,a,ie,l),Z=n.memoizedState),(C=ka||$p(n,a,C,l,J,Z,p))?(P||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Z),c.props=l,c.state=Z,c.context=p,l=C):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Ar(e,n),p=n.memoizedProps,P=fl(a,p),c.props=P,ie=n.pendingProps,J=c.context,Z=a.contextType,C=Ul,typeof Z=="object"&&Z!==null&&(C=Jt(Z)),g=a.getDerivedStateFromProps,(Z=typeof g=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(p!==ie||J!==C)&&Qp(n,c,l,C),ka=!1,J=n.memoizedState,c.state=J,Mi(n,l,c,r),Ei();var V=n.memoizedState;p!==ie||J!==V||ka||e!==null&&e.dependencies!==null&&Ds(e.dependencies)?(typeof g=="function"&&(nc(n,a,g,l),V=n.memoizedState),(P=ka||$p(n,a,P,l,J,V,C)||e!==null&&e.dependencies!==null&&Ds(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,V,C),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,V,C)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=V),c.props=l,c.state=V,c.context=C,l=P):(typeof c.componentDidUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||p===e.memoizedProps&&J===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,Ws(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=pl(n,e.child,null,r),n.child=pl(n,null,a,r)):Vt(e,n,a,r),n.memoizedState=c.state,e=n.child):e=oa(e,n,r),e}function im(e,n,a,l){return sl(),n.flags|=256,Vt(e,n,a,l),n.child}var oc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rc(e){return{baseLanes:e,cachePool:Ju()}}function cc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=vn),e}function sm(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,p;if((p=c)||(p=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),p&&(r=!0,n.flags&=-129),p=(n.flags&32)!==0,n.flags&=-33,e===null){if(We){if(r?Ta(n):Ea(),(e=bt)?(e=hf(e,An),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:wa!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=qu(e),a.return=n,n.child=a,Kt=n,bt=null)):e=null,e===null)throw Na(n);return Xc(e)?n.lanes=32:n.lanes=536870912,null}var g=l.children;return l=l.fallback,r?(Ea(),r=n.mode,g=Ps({mode:"hidden",children:g},r),l=il(l,r,a,null),g.return=n,l.return=n,g.sibling=l,n.child=g,l=n.child,l.memoizedState=rc(a),l.childLanes=cc(e,p,a),n.memoizedState=oc,Ri(null,l)):(Ta(n),dc(n,g))}var C=e.memoizedState;if(C!==null&&(g=C.dehydrated,g!==null)){if(c)n.flags&256?(Ta(n),n.flags&=-257,n=uc(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),g=l.fallback,r=n.mode,l=Ps({mode:"visible",children:l.children},r),g=il(g,r,a,null),g.flags|=2,l.return=n,g.return=n,l.sibling=g,n.child=l,pl(n,e.child,null,a),l=n.child,l.memoizedState=rc(a),l.childLanes=cc(e,p,a),n.memoizedState=oc,n=Ri(null,l));else if(Ta(n),Xc(g)){if(p=g.nextSibling&&g.nextSibling.dataset,p)var Z=p.dgst;p=Z,l=Error(d(419)),l.stack="",l.digest=p,Ni({value:l,source:null,stack:null}),n=uc(e,n,a)}else if(Ht||ql(e,n,a,!1),p=(a&e.childLanes)!==0,Ht||p){if(p=ht,p!==null&&(l=on(p,a),l!==0&&l!==C.retryLane))throw C.retryLane=l,ll(e,l),mn(p,e,l),ic;Qc(g)||oo(),n=uc(e,n,a)}else Qc(g)?(n.flags|=192,n.child=e.child,n=null):(e=C.treeContext,bt=Un(g.nextSibling),Kt=n,We=!0,_a=null,An=!1,e!==null&&Yu(n,e),n=dc(n,l.children),n.flags|=4096);return n}return r?(Ea(),g=l.fallback,r=n.mode,C=e.child,Z=C.sibling,l=ta(C,{mode:"hidden",children:l.children}),l.subtreeFlags=C.subtreeFlags&65011712,Z!==null?g=ta(Z,g):(g=il(g,r,a,null),g.flags|=2),g.return=n,l.return=n,l.sibling=g,n.child=l,Ri(null,l),l=n.child,g=e.child.memoizedState,g===null?g=rc(a):(r=g.cachePool,r!==null?(C=Ut._currentValue,r=r.parent!==C?{parent:C,pool:C}:r):r=Ju(),g={baseLanes:g.baseLanes|a,cachePool:r}),l.memoizedState=g,l.childLanes=cc(e,p,a),n.memoizedState=oc,Ri(e.child,l)):(Ta(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(p=n.deletions,p===null?(n.deletions=[e],n.flags|=16):p.push(e)),n.child=a,n.memoizedState=null,a)}function dc(e,n){return n=Ps({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ps(e,n){return e=xn(22,e,null,n),e.lanes=0,e}function uc(e,n,a){return pl(n,e.child,null,a),e=dc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function om(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),kr(e.return,n,a)}function pc(e,n,a,l,r,c){var p=e.memoizedState;p===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(p.isBackwards=n,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=r,p.treeForkCount=c)}function rm(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var p=Tt.current,g=(p&2)!==0;if(g?(p=p&1|2,n.flags|=128):p&=1,ce(Tt,p),Vt(e,n,l,a),l=We?_i:0,!g&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&om(e,a,n);else if(e.tag===19)om(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&Bs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),pc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&Bs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}pc(n,!0,a,null,c,l);break;case"together":pc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Aa|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(ql(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ds(e)))}function Zg(e,n,a){switch(n.tag){case 3:ot(n,n.stateNode.containerInfo),Sa(n,Ut,e.memoizedState.cache),sl();break;case 27:case 5:Pe(n);break;case 4:ot(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Lr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ta(n),n.flags|=128,null):(a&n.child.childLanes)!==0?sm(e,n,a):(Ta(n),e=oa(e,n,a),e!==null?e.sibling:null);Ta(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(ql(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return rm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ce(Tt,Tt.current),l)break;return null;case 22:return n.lanes=0,em(e,n,a,n.pendingProps);case 24:Sa(n,Ut,e.memoizedState.cache)}return oa(e,n,a)}function cm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ht=!0;else{if(!mc(e,a)&&(n.flags&128)===0)return Ht=!1,Zg(e,n,a);Ht=(e.flags&131072)!==0}else Ht=!1,We&&(n.flags&1048576)!==0&&Gu(n,_i,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=dl(n.elementType),n.type=e,typeof e=="function")br(e)?(l=fl(e,l),n.tag=1,n=lm(null,n,e,l,a)):(n.tag=0,n=sc(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===I){n.tag=11,n=Wp(null,n,e,l,a);break e}else if(r===D){n.tag=14,n=Pp(null,n,e,l,a);break e}}throw n=A(e)||e,Error(d(306,n,""))}}return n;case 0:return sc(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=fl(l,n.pendingProps),lm(e,n,l,r,a);case 3:e:{if(ot(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,Ar(e,n),Mi(n,l,null,a);var p=n.memoizedState;if(l=p.cache,Sa(n,Ut,l),l!==c.cache&&Cr(n,[Ut],a,!0),Ei(),l=p.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:p.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=im(e,n,l,a);break e}else if(l!==r){r=En(Error(d(424)),n),Ni(r),n=im(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=Un(e.firstChild),Kt=n,We=!0,_a=null,An=!0,a=ep(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(sl(),l===r){n=oa(e,n,a);break e}Vt(e,n,l,a)}n=n.child}return n;case 26:return Ws(e,n),e===null?(a=jf(n.type,null,n.pendingProps,null))?n.memoizedState=a:We||(a=n.type,e=n.pendingProps,l=ho(Se.current).createElement(a),l[ue]=n,l[ze]=e,Ft(l,a,e),Xt(l),n.stateNode=l):n.memoizedState=jf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Pe(n),e===null&&We&&(l=n.stateNode=bf(n.type,n.pendingProps,Se.current),Kt=n,An=!0,r=bt,La(n.type)?(Zc=r,bt=Un(l.firstChild)):bt=r),Vt(e,n,n.pendingProps.children,a),Ws(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&We&&((r=l=bt)&&(l=wb(l,n.type,n.pendingProps,An),l!==null?(n.stateNode=l,Kt=n,bt=Un(l.firstChild),An=!1,r=!0):r=!1),r||Na(n)),Pe(n),r=n.type,c=n.pendingProps,p=e!==null?e.memoizedProps:null,l=c.children,Gc(r,c)?l=null:p!==null&&Gc(r,p)&&(n.flags|=32),n.memoizedState!==null&&(r=Br(e,n,Hg,null,null,a),Wi._currentValue=r),Ws(e,n),Vt(e,n,l,a),n.child;case 6:return e===null&&We&&((e=a=bt)&&(a=_b(a,n.pendingProps,An),a!==null?(n.stateNode=a,Kt=n,bt=null,e=!0):e=!1),e||Na(n)),null;case 13:return sm(e,n,a);case 4:return ot(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=pl(n,null,l,a):Vt(e,n,l,a),n.child;case 11:return Wp(e,n,n.type,n.pendingProps,a);case 7:return Vt(e,n,n.pendingProps,a),n.child;case 8:return Vt(e,n,n.pendingProps.children,a),n.child;case 12:return Vt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Sa(n,n.type,l.value),Vt(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,rl(n),r=Jt(r),l=l(r),n.flags|=1,Vt(e,n,l,a),n.child;case 14:return Pp(e,n,n.type,n.pendingProps,a);case 15:return Ip(e,n,n.type,n.pendingProps,a);case 19:return rm(e,n,a);case 31:return Xg(e,n,a);case 22:return em(e,n,a,n.pendingProps);case 24:return rl(n),l=Jt(Ut),e===null?(r=Er(),r===null&&(r=ht,c=zr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Dr(n),Sa(n,Ut,r)):((e.lanes&a)!==0&&(Ar(e,n),Mi(n,null,null,a),Ei()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Sa(n,Ut,l)):(l=c.cache,Sa(n,Ut,l),l!==r.cache&&Cr(n,[Ut],a,!0))),Vt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ra(e){e.flags|=4}function fc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Rm())e.flags|=8192;else throw ul=Rs,Mr}else e.flags&=-16777217}function dm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!kf(n))if(Rm())e.flags|=8192;else throw ul=Rs,Mr}function Is(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?ke():536870912,e.lanes|=n,Wl|=n)}function Hi(e,n){if(!We)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function Kg(e,n,a){var l=n.pendingProps;switch(wr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(n),null;case 1:return yt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),la(Ut),qe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ll(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nr())),yt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ra(n),c!==null?(yt(n),dm(n,c)):(yt(n),fc(n,r,null,l,a))):c?c!==e.memoizedState?(ra(n),yt(n),dm(n,c)):(yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ra(n),yt(n),fc(n,r,e,l,a)),null;case 27:if(Nt(n),a=Se.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}e=me.current,Ll(n)?$u(n):(e=bf(r,l,a),n.stateNode=e,ra(n))}return yt(n),null;case 5:if(Nt(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}if(c=me.current,Ll(n))$u(n);else{var p=ho(Se.current);switch(c){case 1:c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=p.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=p.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=p.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?p.createElement("select",{is:l.is}):p.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?p.createElement(r,{is:l.is}):p.createElement(r)}}c[ue]=n,c[ze]=l;e:for(p=n.child;p!==null;){if(p.tag===5||p.tag===6)c.appendChild(p.stateNode);else if(p.tag!==4&&p.tag!==27&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===n)break e;for(;p.sibling===null;){if(p.return===null||p.return===n)break e;p=p.return}p.sibling.return=p.return,p=p.sibling}n.stateNode=c;e:switch(Ft(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ra(n)}}return yt(n),fc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=Se.current,Ll(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=Kt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[ue]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||of(e.nodeValue,a)),e||Na(n,!0)}else e=ho(e).createTextNode(l),e[ue]=n,n.stateNode=e}return yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Ll(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[ue]=n}else sl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),e=!1}else a=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(bn(n),n):(bn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return yt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Ll(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[ue]=n}else sl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),r=!1}else r=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(bn(n),n):(bn(n),null)}return bn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Is(n,n.updateQueue),yt(n),null);case 4:return qe(),e===null&&Rc(n.stateNode.containerInfo),yt(n),null;case 10:return la(n.type),yt(n),null;case 19:if(M(Tt),l=n.memoizedState,l===null)return yt(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Hi(l,!1);else{if(Ct!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=Bs(e),c!==null){for(n.flags|=128,Hi(l,!1),e=c.updateQueue,n.updateQueue=e,Is(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Lu(a,e),a=a.sibling;return ce(Tt,Tt.current&1|2),We&&na(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&ye()>lo&&(n.flags|=128,r=!0,Hi(l,!1),n.lanes=4194304)}else{if(!r)if(e=Bs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Is(n,e),Hi(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!We)return yt(n),null}else 2*ye()-l.renderingStartTime>lo&&a!==536870912&&(n.flags|=128,r=!0,Hi(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=ye(),e.sibling=null,a=Tt.current,ce(Tt,r?a&1|2:a&1),We&&na(n,l.treeForkCount),e):(yt(n),null);case 22:case 23:return bn(n),Hr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(yt(n),n.subtreeFlags&6&&(n.flags|=8192)):yt(n),a=n.updateQueue,a!==null&&Is(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&M(cl),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(Ut),yt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Jg(e,n){switch(wr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(Ut),qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Nt(n),null;case 31:if(n.memoizedState!==null){if(bn(n),n.alternate===null)throw Error(d(340));sl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(bn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));sl()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return M(Tt),null;case 4:return qe(),null;case 10:return la(n.type),null;case 22:case 23:return bn(n),Hr(),e!==null&&M(cl),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(Ut),null;case 25:return null;default:return null}}function um(e,n){switch(wr(n),n.tag){case 3:la(Ut),qe();break;case 26:case 27:case 5:Nt(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&bn(n);break;case 13:bn(n);break;case 19:M(Tt);break;case 10:la(n.type);break;case 22:case 23:bn(n),Hr(),e!==null&&M(cl);break;case 24:la(Ut)}}function Li(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,p=a.inst;l=c(),p.destroy=l}a=a.next}while(a!==r)}}catch(g){it(n,n.return,g)}}function Ma(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var p=l.inst,g=p.destroy;if(g!==void 0){p.destroy=void 0,r=n;var C=a,Z=g;try{Z()}catch(P){it(r,C,P)}}}l=l.next}while(l!==c)}}catch(P){it(n,n.return,P)}}function pm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{np(n,a)}catch(l){it(e,e.return,l)}}}function mm(e,n,a){a.props=fl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){it(e,n,l)}}function qi(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){it(e,n,r)}}function Kn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){it(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){it(e,n,r)}else a.current=null}function fm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){it(e,e.return,r)}}function hc(e,n,a){try{var l=e.stateNode;xb(l,e.type,a,n),l[ze]=n}catch(r){it(e,e.return,r)}}function hm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&La(e.type)||e.tag===4}function xc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||hm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&La(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function gc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=In));else if(l!==4&&(l===27&&La(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(gc(e,n,a),e=e.sibling;e!==null;)gc(e,n,a),e=e.sibling}function eo(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&La(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(eo(e,n,a),e=e.sibling;e!==null;)eo(e,n,a),e=e.sibling}function xm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Ft(n,l,a),n[ue]=e,n[ze]=a}catch(c){it(e,e.return,c)}}var ca=!1,Lt=!1,bc=!1,gm=typeof WeakSet=="function"?WeakSet:Set,Zt=null;function Vg(e,n){if(e=e.containerInfo,qc=wo,e=Tu(e),ur(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var p=0,g=-1,C=-1,Z=0,P=0,ie=e,J=null;t:for(;;){for(var V;ie!==a||r!==0&&ie.nodeType!==3||(g=p+r),ie!==c||l!==0&&ie.nodeType!==3||(C=p+l),ie.nodeType===3&&(p+=ie.nodeValue.length),(V=ie.firstChild)!==null;)J=ie,ie=V;for(;;){if(ie===e)break t;if(J===a&&++Z===r&&(g=p),J===c&&++P===l&&(C=p),(V=ie.nextSibling)!==null)break;ie=J,J=ie.parentNode}ie=V}a=g===-1||C===-1?null:{start:g,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Bc={focusedElem:e,selectionRange:a},wo=!1,Zt=n;Zt!==null;)if(n=Zt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Zt=e;else for(;Zt!==null;){switch(n=Zt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var je=fl(a.type,r);e=l.getSnapshotBeforeUpdate(je,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Ae){it(a,a.return,Ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)$c(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":$c(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Zt=e;break}Zt=n.return}}function bm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&Li(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(p){it(a,a.return,p)}else{var r=fl(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(p){it(a,a.return,p)}}l&64&&pm(a),l&512&&qi(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{np(e,n)}catch(p){it(a,a.return,p)}}break;case 27:n===null&&l&4&&xm(a);case 26:case 5:ua(e,a),n===null&&l&4&&fm(a),l&512&&qi(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&jm(e,a);break;case 13:ua(e,a),l&4&&wm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lb.bind(null,a),Nb(e,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){n=n!==null&&n.memoizedState!==null||Lt,r=ca;var c=Lt;ca=l,(Lt=n)&&!c?pa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),ca=r,Lt=c}break;case 30:break;default:ua(e,a)}}function ym(e){var n=e.alternate;n!==null&&(e.alternate=null,ym(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Jo(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var wt=null,cn=!1;function da(e,n,a){for(a=a.child;a!==null;)vm(e,n,a),a=a.sibling}function vm(e,n,a){if($e&&typeof $e.onCommitFiberUnmount=="function")try{$e.onCommitFiberUnmount(Je,a)}catch{}switch(a.tag){case 26:Lt||Kn(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Lt||Kn(a,n);var l=wt,r=cn;La(a.type)&&(wt=a.stateNode,cn=!1),da(e,n,a),Ji(a.stateNode),wt=l,cn=r;break;case 5:Lt||Kn(a,n);case 6:if(l=wt,r=cn,wt=null,da(e,n,a),wt=l,cn=r,wt!==null)if(cn)try{(wt.nodeType===9?wt.body:wt.nodeName==="HTML"?wt.ownerDocument.body:wt).removeChild(a.stateNode)}catch(c){it(a,n,c)}else try{wt.removeChild(a.stateNode)}catch(c){it(a,n,c)}break;case 18:wt!==null&&(cn?(e=wt,mf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ii(e)):mf(wt,a.stateNode));break;case 4:l=wt,r=cn,wt=a.stateNode.containerInfo,cn=!0,da(e,n,a),wt=l,cn=r;break;case 0:case 11:case 14:case 15:Ma(2,a,n),Lt||Ma(4,a,n),da(e,n,a);break;case 1:Lt||(Kn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&mm(a,n,l)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:Lt=(l=Lt)||a.memoizedState!==null,da(e,n,a),Lt=l;break;default:da(e,n,a)}}function jm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ii(e)}catch(a){it(n,n.return,a)}}}function wm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ii(e)}catch(a){it(n,n.return,a)}}function Fg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new gm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new gm),n;default:throw Error(d(435,e.tag))}}function to(e,n){var a=Fg(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=ib.bind(null,e,l);l.then(r,r)}})}function dn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,p=n,g=p;e:for(;g!==null;){switch(g.tag){case 27:if(La(g.type)){wt=g.stateNode,cn=!1;break e}break;case 5:wt=g.stateNode,cn=!1;break e;case 3:case 4:wt=g.stateNode.containerInfo,cn=!0;break e}g=g.return}if(wt===null)throw Error(d(160));vm(c,p,r),wt=null,cn=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)_m(n,e),n=n.sibling}var qn=null;function _m(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:dn(n,e),un(e),l&4&&(Ma(3,e,e.return),Li(3,e),Ma(5,e,e.return));break;case 1:dn(n,e),un(e),l&512&&(Lt||a===null||Kn(a,a.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=qn;if(dn(n,e),un(e),l&512&&(Lt||a===null||Kn(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[pi]||c[ue]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Ft(c,l,a),c[ue]=e,Xt(c),l=c;break e;case"link":var p=Nf("link","href",r).get(l+(a.href||""));if(p){for(var g=0;g<p.length;g++)if(c=p[g],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){p.splice(g,1);break t}}c=r.createElement(l),Ft(c,l,a),r.head.appendChild(c);break;case"meta":if(p=Nf("meta","content",r).get(l+(a.content||""))){for(g=0;g<p.length;g++)if(c=p[g],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){p.splice(g,1);break t}}c=r.createElement(l),Ft(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[ue]=e,Xt(c),l=c}e.stateNode=l}else Sf(r,e.type,e.stateNode);else e.stateNode=_f(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?Sf(r,e.type,e.stateNode):_f(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&hc(e,e.memoizedProps,a.memoizedProps)}break;case 27:dn(n,e),un(e),l&512&&(Lt||a===null||Kn(a,a.return)),a!==null&&l&4&&hc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(dn(n,e),un(e),l&512&&(Lt||a===null||Kn(a,a.return)),e.flags&32){r=e.stateNode;try{zl(r,"")}catch(je){it(e,e.return,je)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,hc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(bc=!0);break;case 6:if(dn(n,e),un(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(je){it(e,e.return,je)}}break;case 3:if(bo=null,r=qn,qn=xo(n.containerInfo),dn(n,e),qn=r,un(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ii(n.containerInfo)}catch(je){it(e,e.return,je)}bc&&(bc=!1,Nm(e));break;case 4:l=qn,qn=xo(e.stateNode.containerInfo),dn(n,e),un(e),qn=l;break;case 12:dn(n,e),un(e);break;case 31:dn(n,e),un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,to(e,l)));break;case 13:dn(n,e),un(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ao=ye()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,to(e,l)));break;case 22:r=e.memoizedState!==null;var C=a!==null&&a.memoizedState!==null,Z=ca,P=Lt;if(ca=Z||r,Lt=P||C,dn(n,e),Lt=P,ca=Z,un(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||C||ca||Lt||hl(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){C=a=n;try{if(c=C.stateNode,r)p=c.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none";else{g=C.stateNode;var ie=C.memoizedProps.style,J=ie!=null&&ie.hasOwnProperty("display")?ie.display:null;g.style.display=J==null||typeof J=="boolean"?"":(""+J).trim()}}catch(je){it(C,C.return,je)}}}else if(n.tag===6){if(a===null){C=n;try{C.stateNode.nodeValue=r?"":C.memoizedProps}catch(je){it(C,C.return,je)}}}else if(n.tag===18){if(a===null){C=n;try{var V=C.stateNode;r?ff(V,!0):ff(C.stateNode,!1)}catch(je){it(C,C.return,je)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,to(e,a))));break;case 19:dn(n,e),un(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,to(e,l)));break;case 30:break;case 21:break;default:dn(n,e),un(e)}}function un(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(hm(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=xc(e);eo(e,c,r);break;case 5:var p=a.stateNode;a.flags&32&&(zl(p,""),a.flags&=-33);var g=xc(e);eo(e,g,p);break;case 3:case 4:var C=a.stateNode.containerInfo,Z=xc(e);gc(e,Z,C);break;default:throw Error(d(161))}}catch(P){it(e,e.return,P)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)bm(e,n.alternate,n),n=n.sibling}function hl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ma(4,n,n.return),hl(n);break;case 1:Kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&mm(n,n.return,a),hl(n);break;case 27:Ji(n.stateNode);case 26:case 5:Kn(n,n.return),hl(n);break;case 22:n.memoizedState===null&&hl(n);break;case 30:hl(n);break;default:hl(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,p=c.flags;switch(c.tag){case 0:case 11:case 15:pa(r,c,a),Li(4,c);break;case 1:if(pa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){it(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var g=l.stateNode;try{var C=r.shared.hiddenCallbacks;if(C!==null)for(r.shared.hiddenCallbacks=null,r=0;r<C.length;r++)tp(C[r],g)}catch(Z){it(l,l.return,Z)}}a&&p&64&&pm(c),qi(c,c.return);break;case 27:xm(c);case 26:case 5:pa(r,c,a),a&&l===null&&p&4&&fm(c),qi(c,c.return);break;case 12:pa(r,c,a);break;case 31:pa(r,c,a),a&&p&4&&jm(r,c);break;case 13:pa(r,c,a),a&&p&4&&wm(r,c);break;case 22:c.memoizedState===null&&pa(r,c,a),qi(c,c.return);break;case 30:break;default:pa(r,c,a)}n=n.sibling}}function yc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Si(a))}function vc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Si(e))}function Bn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Sm(e,n,a,l),n=n.sibling}function Sm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,a,l),r&2048&&Li(9,n);break;case 1:Bn(e,n,a,l);break;case 3:Bn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Si(e)));break;case 12:if(r&2048){Bn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,p=c.id,g=c.onPostCommit;typeof g=="function"&&g(p,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(C){it(n,n.return,C)}}else Bn(e,n,a,l);break;case 31:Bn(e,n,a,l);break;case 13:Bn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,p=n.alternate,n.memoizedState!==null?c._visibility&2?Bn(e,n,a,l):Bi(e,n):c._visibility&2?Bn(e,n,a,l):(c._visibility|=2,Jl(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&yc(p,n);break;case 24:Bn(e,n,a,l),r&2048&&vc(n.alternate,n);break;default:Bn(e,n,a,l)}}function Jl(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,p=n,g=a,C=l,Z=p.flags;switch(p.tag){case 0:case 11:case 15:Jl(c,p,g,C,r),Li(8,p);break;case 23:break;case 22:var P=p.stateNode;p.memoizedState!==null?P._visibility&2?Jl(c,p,g,C,r):Bi(c,p):(P._visibility|=2,Jl(c,p,g,C,r)),r&&Z&2048&&yc(p.alternate,p);break;case 24:Jl(c,p,g,C,r),r&&Z&2048&&vc(p.alternate,p);break;default:Jl(c,p,g,C,r)}n=n.sibling}}function Bi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:Bi(a,l),r&2048&&yc(l.alternate,l);break;case 24:Bi(a,l),r&2048&&vc(l.alternate,l);break;default:Bi(a,l)}n=n.sibling}}var Gi=8192;function Vl(e,n,a){if(e.subtreeFlags&Gi)for(e=e.child;e!==null;)km(e,n,a),e=e.sibling}function km(e,n,a){switch(e.tag){case 26:Vl(e,n,a),e.flags&Gi&&e.memoizedState!==null&&Rb(a,qn,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,n,a);break;case 3:case 4:var l=qn;qn=xo(e.stateNode.containerInfo),Vl(e,n,a),qn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Gi,Gi=16777216,Vl(e,n,a),Gi=l):Vl(e,n,a));break;default:Vl(e,n,a)}}function Cm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Yi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Zt=l,Tm(l,e)}Cm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)zm(e),e=e.sibling}function zm(e){switch(e.tag){case 0:case 11:case 15:Yi(e),e.flags&2048&&Ma(9,e,e.return);break;case 3:Yi(e);break;case 12:Yi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,no(e)):Yi(e);break;default:Yi(e)}}function no(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Zt=l,Tm(l,e)}Cm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ma(8,n,n.return),no(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,no(n));break;default:no(n)}e=e.sibling}}function Tm(e,n){for(;Zt!==null;){var a=Zt;switch(a.tag){case 0:case 11:case 15:Ma(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Si(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Zt=l;else e:for(a=e;Zt!==null;){l=Zt;var r=l.sibling,c=l.return;if(ym(l),l===a){Zt=null;break e}if(r!==null){r.return=c,Zt=r;break e}Zt=c}}}var Wg={getCacheForType:function(e){var n=Jt(Ut),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Jt(Ut).controller.signal}},Pg=typeof WeakMap=="function"?WeakMap:Map,at=0,ht=null,Qe=null,Ve=0,lt=0,yn=null,Da=!1,Fl=!1,jc=!1,ma=0,Ct=0,Aa=0,xl=0,wc=0,vn=0,Wl=0,$i=null,pn=null,_c=!1,ao=0,Em=0,lo=1/0,io=null,Oa=null,Gt=0,Ua=null,Pl=null,fa=0,Nc=0,Sc=null,Mm=null,Qi=0,kc=null;function jn(){return(at&2)!==0&&Ve!==0?Ve&-Ve:H.T!==null?Dc():hs()}function Dm(){if(vn===0)if((Ve&536870912)===0||We){var e=fn;fn<<=1,(fn&3932160)===0&&(fn=262144),vn=e}else vn=536870912;return e=gn.current,e!==null&&(e.flags|=32),vn}function mn(e,n,a){(e===ht&&(lt===2||lt===9)||e.cancelPendingCommit!==null)&&(Il(e,0),Ra(e,Ve,vn,!1)),et(e,a),((at&2)===0||e!==ht)&&(e===ht&&((at&2)===0&&(xl|=a),Ct===4&&Ra(e,Ve,vn,!1)),Jn(e))}function Am(e,n,a){if((at&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||oe(e,n),r=l?tb(e,n):zc(e,n,!0),c=l;do{if(r===0){Fl&&!l&&Ra(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Ig(a)){r=zc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var p=0;else p=e.pendingLanes&-536870913,p=p!==0?p:p&536870912?536870912:0;if(p!==0){n=p;e:{var g=e;r=$i;var C=g.current.memoizedState.isDehydrated;if(C&&(Il(g,p).flags|=256),p=zc(g,p,!1),p!==2){if(jc&&!C){g.errorRecoveryDisabledLanes|=c,xl|=c,r=4;break e}c=pn,pn=r,c!==null&&(pn===null?pn=c:pn.push.apply(pn,c))}r=p}if(c=!1,r!==2)continue}}if(r===1){Il(e,0),Ra(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Ra(l,n,vn,!Da);break e;case 2:pn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=ao+300-ye(),10<r)){if(Ra(l,n,vn,!Da),q(l,0,!0)!==0)break e;fa=n,l.timeoutHandle=uf(Om.bind(null,l,a,pn,io,_c,n,vn,xl,Wl,Da,c,"Throttled",-0,0),r);break e}Om(l,a,pn,io,_c,n,vn,xl,Wl,Da,c,null,-0,0)}}break}while(!0);Jn(e)}function Om(e,n,a,l,r,c,p,g,C,Z,P,ie,J,V){if(e.timeoutHandle=-1,ie=n.subtreeFlags,ie&8192||(ie&16785408)===16785408){ie={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:In},km(n,c,ie);var je=(c&62914560)===c?ao-ye():(c&4194048)===c?Em-ye():0;if(je=Hb(ie,je),je!==null){fa=c,e.cancelPendingCommit=je(Ym.bind(null,e,n,c,a,l,r,p,g,C,P,ie,null,J,V)),Ra(e,c,p,!Z);return}}Ym(e,n,c,a,l,r,p,g,C)}function Ig(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!hn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ra(e,n,a,l){n&=~wc,n&=~xl,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-mt(r),p=1<<c;l[c]=-1,r&=~p}a!==0&&ct(e,a,n)}function so(){return(at&6)===0?(Xi(0),!1):!0}function Cc(){if(Qe!==null){if(lt===0)var e=Qe.return;else e=Qe,aa=ol=null,$r(e),$l=null,Ci=0,e=Qe;for(;e!==null;)um(e.alternate,e),e=e.return;Qe=null}}function Il(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,Cc(),ht=e,Qe=a=ta(e.current,null),Ve=n,lt=0,yn=null,Da=!1,Fl=oe(e,n),jc=!1,Wl=vn=wc=xl=Aa=Ct=0,pn=$i=null,_c=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-mt(l),c=1<<r;n|=e[r],l&=~c}return ma=n,Cs(),a}function Um(e,n){Le=null,H.H=Ui,n===Yl||n===Us?(n=Wu(),lt=3):n===Mr?(n=Wu(),lt=4):lt=n===ic?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,yn=n,Qe===null&&(Ct=1,Vs(e,En(n,e.current)))}function Rm(){var e=gn.current;return e===null?!0:(Ve&4194048)===Ve?On===null:(Ve&62914560)===Ve||(Ve&536870912)!==0?e===On:!1}function Hm(){var e=H.H;return H.H=Ui,e===null?Ui:e}function Lm(){var e=H.A;return H.A=Wg,e}function oo(){Ct=4,Da||(Ve&4194048)!==Ve&&gn.current!==null||(Fl=!0),(Aa&134217727)===0&&(xl&134217727)===0||ht===null||Ra(ht,Ve,vn,!1)}function zc(e,n,a){var l=at;at|=2;var r=Hm(),c=Lm();(ht!==e||Ve!==n)&&(io=null,Il(e,n)),n=!1;var p=Ct;e:do try{if(lt!==0&&Qe!==null){var g=Qe,C=yn;switch(lt){case 8:Cc(),p=6;break e;case 3:case 2:case 9:case 6:gn.current===null&&(n=!0);var Z=lt;if(lt=0,yn=null,ei(e,g,C,Z),a&&Fl){p=0;break e}break;default:Z=lt,lt=0,yn=null,ei(e,g,C,Z)}}eb(),p=Ct;break}catch(P){Um(e,P)}while(!0);return n&&e.shellSuspendCounter++,aa=ol=null,at=l,H.H=r,H.A=c,Qe===null&&(ht=null,Ve=0,Cs()),p}function eb(){for(;Qe!==null;)qm(Qe)}function tb(e,n){var a=at;at|=2;var l=Hm(),r=Lm();ht!==e||Ve!==n?(io=null,lo=ye()+500,Il(e,n)):Fl=oe(e,n);e:do try{if(lt!==0&&Qe!==null){n=Qe;var c=yn;t:switch(lt){case 1:lt=0,yn=null,ei(e,n,c,1);break;case 2:case 9:if(Vu(c)){lt=0,yn=null,Bm(n);break}n=function(){lt!==2&&lt!==9||ht!==e||(lt=7),Jn(e)},c.then(n,n);break e;case 3:lt=7;break e;case 4:lt=5;break e;case 7:Vu(c)?(lt=0,yn=null,Bm(n)):(lt=0,yn=null,ei(e,n,c,7));break;case 5:var p=null;switch(Qe.tag){case 26:p=Qe.memoizedState;case 5:case 27:var g=Qe;if(p?kf(p):g.stateNode.complete){lt=0,yn=null;var C=g.sibling;if(C!==null)Qe=C;else{var Z=g.return;Z!==null?(Qe=Z,ro(Z)):Qe=null}break t}}lt=0,yn=null,ei(e,n,c,5);break;case 6:lt=0,yn=null,ei(e,n,c,6);break;case 8:Cc(),Ct=6;break e;default:throw Error(d(462))}}nb();break}catch(P){Um(e,P)}while(!0);return aa=ol=null,H.H=l,H.A=r,at=a,Qe!==null?0:(ht=null,Ve=0,Cs(),Ct)}function nb(){for(;Qe!==null&&!en();)qm(Qe)}function qm(e){var n=cm(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?ro(e):Qe=n}function Bm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=am(a,n,n.pendingProps,n.type,void 0,Ve);break;case 11:n=am(a,n,n.pendingProps,n.type.render,n.ref,Ve);break;case 5:$r(n);default:um(a,n),n=Qe=Lu(n,ma),n=cm(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?ro(e):Qe=n}function ei(e,n,a,l){aa=ol=null,$r(n),$l=null,Ci=0;var r=n.return;try{if(Qg(e,r,n,a,Ve)){Ct=1,Vs(e,En(a,e.current)),Qe=null;return}}catch(c){if(r!==null)throw Qe=r,c;Ct=1,Vs(e,En(a,e.current)),Qe=null;return}n.flags&32768?(We||l===1?e=!0:Fl||(Ve&536870912)!==0?e=!1:(Da=e=!0,(l===2||l===9||l===3||l===6)&&(l=gn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Gm(n,e)):ro(n)}function ro(e){var n=e;do{if((n.flags&32768)!==0){Gm(n,Da);return}e=n.return;var a=Kg(n.alternate,n,ma);if(a!==null){Qe=a;return}if(n=n.sibling,n!==null){Qe=n;return}Qe=n=e}while(n!==null);Ct===0&&(Ct=5)}function Gm(e,n){do{var a=Jg(e.alternate,e);if(a!==null){a.flags&=32767,Qe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){Qe=e;return}Qe=e=a}while(e!==null);Ct=6,Qe=null}function Ym(e,n,a,l,r,c,p,g,C){e.cancelPendingCommit=null;do co();while(Gt!==0);if((at&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=xr,ft(e,a,c,p,g,C),e===ht&&(Qe=ht=null,Ve=0),Pl=n,Ua=e,fa=a,Nc=c,Sc=r,Mm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sb($,function(){return Km(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=H.T,H.T=null,r=F.p,F.p=2,p=at,at|=4;try{Vg(e,n,a)}finally{at=p,F.p=r,H.T=l}}Gt=1,$m(),Qm(),Xm()}}function $m(){if(Gt===1){Gt=0;var e=Ua,n=Pl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null;var l=F.p;F.p=2;var r=at;at|=4;try{_m(n,e);var c=Bc,p=Tu(e.containerInfo),g=c.focusedElem,C=c.selectionRange;if(p!==g&&g&&g.ownerDocument&&zu(g.ownerDocument.documentElement,g)){if(C!==null&&ur(g)){var Z=C.start,P=C.end;if(P===void 0&&(P=Z),"selectionStart"in g)g.selectionStart=Z,g.selectionEnd=Math.min(P,g.value.length);else{var ie=g.ownerDocument||document,J=ie&&ie.defaultView||window;if(J.getSelection){var V=J.getSelection(),je=g.textContent.length,Ae=Math.min(C.start,je),pt=C.end===void 0?Ae:Math.min(C.end,je);!V.extend&&Ae>pt&&(p=pt,pt=Ae,Ae=p);var B=Cu(g,Ae),O=Cu(g,pt);if(B&&O&&(V.rangeCount!==1||V.anchorNode!==B.node||V.anchorOffset!==B.offset||V.focusNode!==O.node||V.focusOffset!==O.offset)){var X=ie.createRange();X.setStart(B.node,B.offset),V.removeAllRanges(),Ae>pt?(V.addRange(X),V.extend(O.node,O.offset)):(X.setEnd(O.node,O.offset),V.addRange(X))}}}}for(ie=[],V=g;V=V.parentNode;)V.nodeType===1&&ie.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof g.focus=="function"&&g.focus(),g=0;g<ie.length;g++){var ae=ie[g];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}wo=!!qc,Bc=qc=null}finally{at=r,F.p=l,H.T=a}}e.current=n,Gt=2}}function Qm(){if(Gt===2){Gt=0;var e=Ua,n=Pl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=H.T,H.T=null;var l=F.p;F.p=2;var r=at;at|=4;try{bm(e,n.alternate,n)}finally{at=r,F.p=l,H.T=a}}Gt=3}}function Xm(){if(Gt===4||Gt===3){Gt=0,T();var e=Ua,n=Pl,a=fa,l=Mm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Gt=5:(Gt=0,Pl=Ua=null,Zm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Oa=null),kn(a),n=n.stateNode,$e&&typeof $e.onCommitFiberRoot=="function")try{$e.onCommitFiberRoot(Je,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=H.T,r=F.p,F.p=2,H.T=null;try{for(var c=e.onRecoverableError,p=0;p<l.length;p++){var g=l[p];c(g.value,{componentStack:g.stack})}}finally{H.T=n,F.p=r}}(fa&3)!==0&&co(),Jn(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===kc?Qi++:(Qi=0,kc=e):Qi=0,Xi(0)}}function Zm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Si(n)))}function co(){return $m(),Qm(),Xm(),Km()}function Km(){if(Gt!==5)return!1;var e=Ua,n=Nc;Nc=0;var a=kn(fa),l=H.T,r=F.p;try{F.p=32>a?32:a,H.T=null,a=Sc,Sc=null;var c=Ua,p=fa;if(Gt=0,Pl=Ua=null,fa=0,(at&6)!==0)throw Error(d(331));var g=at;if(at|=4,zm(c.current),Sm(c,c.current,p,a),at=g,Xi(0,!1),$e&&typeof $e.onPostCommitFiberRoot=="function")try{$e.onPostCommitFiberRoot(Je,c)}catch{}return!0}finally{F.p=r,H.T=l,Zm(e,n)}}function Jm(e,n,a){n=En(a,n),n=lc(e.stateNode,n,2),e=za(e,n,2),e!==null&&(et(e,2),Jn(e))}function it(e,n,a){if(e.tag===3)Jm(e,e,a);else for(;n!==null;){if(n.tag===3){Jm(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Oa===null||!Oa.has(l))){e=En(a,e),a=Vp(2),l=za(n,a,2),l!==null&&(Fp(a,l,n,e),et(l,2),Jn(l));break}}n=n.return}}function Tc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Pg;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(jc=!0,r.add(a),e=ab.bind(null,e,n,a),n.then(e,e))}function ab(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Ve&a)===a&&(Ct===4||Ct===3&&(Ve&62914560)===Ve&&300>ye()-ao?(at&2)===0&&Il(e,0):wc|=a,Wl===Ve&&(Wl=0)),Jn(e)}function Vm(e,n){n===0&&(n=ke()),e=ll(e,n),e!==null&&(et(e,n),Jn(e))}function lb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Vm(e,a)}function ib(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),Vm(e,a)}function sb(e,n){return Ue(e,n)}var uo=null,ti=null,Ec=!1,po=!1,Mc=!1,Ha=0;function Jn(e){e!==ti&&e.next===null&&(ti===null?uo=ti=e:ti=ti.next=e),po=!0,Ec||(Ec=!0,rb())}function Xi(e,n){if(!Mc&&po){Mc=!0;do for(var a=!1,l=uo;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var p=l.suspendedLanes,g=l.pingedLanes;c=(1<<31-mt(42|e)+1)-1,c&=r&~(p&~g),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Im(l,c))}else c=Ve,c=q(l,l===ht?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||oe(l,c)||(a=!0,Im(l,c));l=l.next}while(a);Mc=!1}}function ob(){Fm()}function Fm(){po=Ec=!1;var e=0;Ha!==0&&bb()&&(e=Ha);for(var n=ye(),a=null,l=uo;l!==null;){var r=l.next,c=Wm(l,n);c===0?(l.next=null,a===null?uo=r:a.next=r,r===null&&(ti=a)):(a=l,(e!==0||(c&3)!==0)&&(po=!0)),l=r}Gt!==0&&Gt!==5||Xi(e),Ha!==0&&(Ha=0)}function Wm(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var p=31-mt(c),g=1<<p,C=r[p];C===-1?((g&a)===0||(g&l)!==0)&&(r[p]=ee(g,n)):C<=n&&(e.expiredLanes|=g),c&=~g}if(n=ht,a=Ve,a=q(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(lt===2||lt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&jt(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||oe(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&jt(l),kn(a)){case 2:case 8:a=rt;break;case 32:a=$;break;case 268435456:a=_e;break;default:a=$}return l=Pm.bind(null,e),a=Ue(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&jt(l),e.callbackPriority=2,e.callbackNode=null,2}function Pm(e,n){if(Gt!==0&&Gt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(co()&&e.callbackNode!==a)return null;var l=Ve;return l=q(e,e===ht?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Am(e,l,n),Wm(e,ye()),e.callbackNode!=null&&e.callbackNode===a?Pm.bind(null,e):null)}function Im(e,n){if(co())return null;Am(e,n,!0)}function rb(){vb(function(){(at&6)!==0?Ue(ve,ob):Fm()})}function Dc(){if(Ha===0){var e=Bl;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Ha=e}return Ha}function ef(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ys(""+e)}function tf(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function cb(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=ef((r[ze]||null).action),p=l.submitter;p&&(n=(n=p[ze]||null)?ef(n.formAction):p.getAttribute("formAction"),n!==null&&(c=n,p=null));var g=new _s("action","action",null,l,r);e.push({event:g,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ha!==0){var C=p?tf(r,p):new FormData(r);Pr(a,{pending:!0,data:C,method:r.method,action:c},null,C)}}else typeof c=="function"&&(g.preventDefault(),C=p?tf(r,p):new FormData(r),Pr(a,{pending:!0,data:C,method:r.method,action:c},c,C))},currentTarget:r}]})}}for(var Ac=0;Ac<hr.length;Ac++){var Oc=hr[Ac],db=Oc.toLowerCase(),ub=Oc[0].toUpperCase()+Oc.slice(1);Ln(db,"on"+ub)}Ln(Du,"onAnimationEnd"),Ln(Au,"onAnimationIteration"),Ln(Ou,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Cg,"onTransitionRun"),Ln(zg,"onTransitionStart"),Ln(Tg,"onTransitionCancel"),Ln(Uu,"onTransitionEnd"),kl("onMouseEnter",["mouseout","mouseover"]),kl("onMouseLeave",["mouseout","mouseover"]),kl("onPointerEnter",["pointerout","pointerover"]),kl("onPointerLeave",["pointerout","pointerover"]),el("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),el("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),el("onBeforeInput",["compositionend","keypress","textInput","paste"]),el("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),el("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),el("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Zi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),pb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Zi));function nf(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var p=l.length-1;0<=p;p--){var g=l[p],C=g.instance,Z=g.currentTarget;if(g=g.listener,C!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(P){ks(P)}r.currentTarget=null,c=C}else for(p=0;p<l.length;p++){if(g=l[p],C=g.instance,Z=g.currentTarget,g=g.listener,C!==c&&r.isPropagationStopped())break e;c=g,r.currentTarget=Z;try{c(r)}catch(P){ks(P)}r.currentTarget=null,c=C}}}}function Xe(e,n){var a=n[$n];a===void 0&&(a=n[$n]=new Set);var l=e+"__bubble";a.has(l)||(af(n,e,2,!1),a.add(l))}function Uc(e,n,a){var l=0;n&&(l|=4),af(a,e,l,n)}var mo="_reactListening"+Math.random().toString(36).slice(2);function Rc(e){if(!e[mo]){e[mo]=!0,Fd.forEach(function(a){a!=="selectionchange"&&(pb.has(a)||Uc(a,!1,e),Uc(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[mo]||(n[mo]=!0,Uc("selectionchange",!1,n))}}function af(e,n,a,l){switch(Af(n)){case 2:var r=Bb;break;case 8:r=Gb;break;default:r=Wc}a=r.bind(null,n,a,e),r=void 0,!nr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Hc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var p=l.tag;if(p===3||p===4){var g=l.stateNode.containerInfo;if(g===r)break;if(p===4)for(p=l.return;p!==null;){var C=p.tag;if((C===3||C===4)&&p.stateNode.containerInfo===r)return;p=p.return}for(;g!==null;){if(p=_l(g),p===null)return;if(C=p.tag,C===5||C===6||C===26||C===27){l=c=p;continue e}g=g.parentNode}}l=l.return}ru(function(){var Z=c,P=er(a),ie=[];e:{var J=Ru.get(e);if(J!==void 0){var V=_s,je=e;switch(e){case"keypress":if(js(a)===0)break e;case"keydown":case"keyup":V=ig;break;case"focusin":je="focus",V=sr;break;case"focusout":je="blur",V=sr;break;case"beforeblur":case"afterblur":V=sr;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=uu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Kx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=rg;break;case Du:case Au:case Ou:V=Fx;break;case Uu:V=dg;break;case"scroll":case"scrollend":V=Xx;break;case"wheel":V=pg;break;case"copy":case"cut":case"paste":V=Px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=mu;break;case"toggle":case"beforetoggle":V=fg}var Ae=(n&4)!==0,pt=!Ae&&(e==="scroll"||e==="scrollend"),B=Ae?J!==null?J+"Capture":null:J;Ae=[];for(var O=Z,X;O!==null;){var ae=O;if(X=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||X===null||B===null||(ae=fi(O,B),ae!=null&&Ae.push(Ki(O,ae,X))),pt)break;O=O.return}0<Ae.length&&(J=new V(J,je,null,a,P),ie.push({event:J,listeners:Ae}))}}if((n&7)===0){e:{if(J=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",J&&a!==Io&&(je=a.relatedTarget||a.fromElement)&&(_l(je)||je[xt]))break e;if((V||J)&&(J=P.window===P?P:(J=P.ownerDocument)?J.defaultView||J.parentWindow:window,V?(je=a.relatedTarget||a.toElement,V=Z,je=je?_l(je):null,je!==null&&(pt=f(je),Ae=je.tag,je!==pt||Ae!==5&&Ae!==27&&Ae!==6)&&(je=null)):(V=null,je=Z),V!==je)){if(Ae=uu,ae="onMouseLeave",B="onMouseEnter",O="mouse",(e==="pointerout"||e==="pointerover")&&(Ae=mu,ae="onPointerLeave",B="onPointerEnter",O="pointer"),pt=V==null?J:mi(V),X=je==null?J:mi(je),J=new Ae(ae,O+"leave",V,a,P),J.target=pt,J.relatedTarget=X,ae=null,_l(P)===Z&&(Ae=new Ae(B,O+"enter",je,a,P),Ae.target=X,Ae.relatedTarget=pt,ae=Ae),pt=ae,V&&je)t:{for(Ae=mb,B=V,O=je,X=0,ae=B;ae;ae=Ae(ae))X++;ae=0;for(var Ee=O;Ee;Ee=Ae(Ee))ae++;for(;0<X-ae;)B=Ae(B),X--;for(;0<ae-X;)O=Ae(O),ae--;for(;X--;){if(B===O||O!==null&&B===O.alternate){Ae=B;break t}B=Ae(B),O=Ae(O)}Ae=null}else Ae=null;V!==null&&lf(ie,J,V,Ae,!1),je!==null&&pt!==null&&lf(ie,pt,je,Ae,!0)}}e:{if(J=Z?mi(Z):window,V=J.nodeName&&J.nodeName.toLowerCase(),V==="select"||V==="input"&&J.type==="file")var tt=ju;else if(yu(J))if(wu)tt=Ng;else{tt=wg;var Ce=jg}else V=J.nodeName,!V||V.toLowerCase()!=="input"||J.type!=="checkbox"&&J.type!=="radio"?Z&&Po(Z.elementType)&&(tt=ju):tt=_g;if(tt&&(tt=tt(e,Z))){vu(ie,tt,a,P);break e}Ce&&Ce(e,J,Z),e==="focusout"&&Z&&J.type==="number"&&Z.memoizedProps.value!=null&&Wo(J,"number",J.value)}switch(Ce=Z?mi(Z):window,e){case"focusin":(yu(Ce)||Ce.contentEditable==="true")&&(Dl=Ce,pr=Z,wi=null);break;case"focusout":wi=pr=Dl=null;break;case"mousedown":mr=!0;break;case"contextmenu":case"mouseup":case"dragend":mr=!1,Eu(ie,a,P);break;case"selectionchange":if(kg)break;case"keydown":case"keyup":Eu(ie,a,P)}var Ge;if(rr)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else Ml?gu(e,a)&&(Fe="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Fe="onCompositionStart");Fe&&(fu&&a.locale!=="ko"&&(Ml||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&Ml&&(Ge=cu()):(ja=P,ar="value"in ja?ja.value:ja.textContent,Ml=!0)),Ce=fo(Z,Fe),0<Ce.length&&(Fe=new pu(Fe,e,null,a,P),ie.push({event:Fe,listeners:Ce}),Ge?Fe.data=Ge:(Ge=bu(a),Ge!==null&&(Fe.data=Ge)))),(Ge=xg?gg(e,a):bg(e,a))&&(Fe=fo(Z,"onBeforeInput"),0<Fe.length&&(Ce=new pu("onBeforeInput","beforeinput",null,a,P),ie.push({event:Ce,listeners:Fe}),Ce.data=Ge)),cb(ie,e,Z,a,P)}nf(ie,n)})}function Ki(e,n,a){return{instance:e,listener:n,currentTarget:a}}function fo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=fi(e,a),r!=null&&l.unshift(Ki(e,r,c)),r=fi(e,n),r!=null&&l.push(Ki(e,r,c))),e.tag===3)return l;e=e.return}return[]}function mb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function lf(e,n,a,l,r){for(var c=n._reactName,p=[];a!==null&&a!==l;){var g=a,C=g.alternate,Z=g.stateNode;if(g=g.tag,C!==null&&C===l)break;g!==5&&g!==26&&g!==27||Z===null||(C=Z,r?(Z=fi(a,c),Z!=null&&p.unshift(Ki(a,Z,C))):r||(Z=fi(a,c),Z!=null&&p.push(Ki(a,Z,C)))),a=a.return}p.length!==0&&e.push({event:n,listeners:p})}var fb=/\r\n?/g,hb=/\u0000|\uFFFD/g;function sf(e){return(typeof e=="string"?e:""+e).replace(fb,`
`).replace(hb,"")}function of(e,n){return n=sf(n),sf(e)===n}function ut(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||zl(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&zl(e,""+l);break;case"className":gs(e,"class",l);break;case"tabIndex":gs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":gs(e,a,l);break;case"style":su(e,l,c);break;case"data":if(n!=="object"){gs(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ys(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ut(e,n,"name",r.name,r,null),ut(e,n,"formEncType",r.formEncType,r,null),ut(e,n,"formMethod",r.formMethod,r,null),ut(e,n,"formTarget",r.formTarget,r,null)):(ut(e,n,"encType",r.encType,r,null),ut(e,n,"method",r.method,r,null),ut(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ys(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=In);break;case"onScroll":l!=null&&Xe("scroll",e);break;case"onScrollEnd":l!=null&&Xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ys(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Xe("beforetoggle",e),Xe("toggle",e),xs(e,"popover",l);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":xs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=$x.get(a)||a,xs(e,a,l))}}function Lc(e,n,a,l,r,c){switch(a){case"style":su(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?zl(e,l):(typeof l=="number"||typeof l=="bigint")&&zl(e,""+l);break;case"onScroll":l!=null&&Xe("scroll",e);break;case"onScrollEnd":l!=null&&Xe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=In);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[ze]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):xs(e,a,l)}}}function Ft(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Xe("error",e),Xe("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var p=a[c];if(p!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,c,p,a,null)}}r&&ut(e,n,"srcSet",a.srcSet,a,null),l&&ut(e,n,"src",a.src,a,null);return;case"input":Xe("invalid",e);var g=c=p=r=null,C=null,Z=null;for(l in a)if(a.hasOwnProperty(l)){var P=a[l];if(P!=null)switch(l){case"name":r=P;break;case"type":p=P;break;case"checked":C=P;break;case"defaultChecked":Z=P;break;case"value":c=P;break;case"defaultValue":g=P;break;case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(d(137,n));break;default:ut(e,n,l,P,a,null)}}nu(e,c,g,C,Z,p,r,!1);return;case"select":Xe("invalid",e),l=p=c=null;for(r in a)if(a.hasOwnProperty(r)&&(g=a[r],g!=null))switch(r){case"value":c=g;break;case"defaultValue":p=g;break;case"multiple":l=g;default:ut(e,n,r,g,a,null)}n=c,a=p,e.multiple=!!l,n!=null?Cl(e,!!l,n,!1):a!=null&&Cl(e,!!l,a,!0);return;case"textarea":Xe("invalid",e),c=r=l=null;for(p in a)if(a.hasOwnProperty(p)&&(g=a[p],g!=null))switch(p){case"value":l=g;break;case"defaultValue":r=g;break;case"children":c=g;break;case"dangerouslySetInnerHTML":if(g!=null)throw Error(d(91));break;default:ut(e,n,p,g,a,null)}lu(e,l,r,c);return;case"option":for(C in a)if(a.hasOwnProperty(C)&&(l=a[C],l!=null))switch(C){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ut(e,n,C,l,a,null)}return;case"dialog":Xe("beforetoggle",e),Xe("toggle",e),Xe("cancel",e),Xe("close",e);break;case"iframe":case"object":Xe("load",e);break;case"video":case"audio":for(l=0;l<Zi.length;l++)Xe(Zi[l],e);break;case"image":Xe("error",e),Xe("load",e);break;case"details":Xe("toggle",e);break;case"embed":case"source":case"link":Xe("error",e),Xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(l=a[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,Z,l,a,null)}return;default:if(Po(n)){for(P in a)a.hasOwnProperty(P)&&(l=a[P],l!==void 0&&Lc(e,n,P,l,a,void 0));return}}for(g in a)a.hasOwnProperty(g)&&(l=a[g],l!=null&&ut(e,n,g,l,a,null))}function xb(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,p=null,g=null,C=null,Z=null,P=null;for(V in a){var ie=a[V];if(a.hasOwnProperty(V)&&ie!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":C=ie;default:l.hasOwnProperty(V)||ut(e,n,V,null,l,ie)}}for(var J in l){var V=l[J];if(ie=a[J],l.hasOwnProperty(J)&&(V!=null||ie!=null))switch(J){case"type":c=V;break;case"name":r=V;break;case"checked":Z=V;break;case"defaultChecked":P=V;break;case"value":p=V;break;case"defaultValue":g=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,n));break;default:V!==ie&&ut(e,n,J,V,l,ie)}}Fo(e,p,g,C,Z,P,c,r);return;case"select":V=p=g=J=null;for(c in a)if(C=a[c],a.hasOwnProperty(c)&&C!=null)switch(c){case"value":break;case"multiple":V=C;default:l.hasOwnProperty(c)||ut(e,n,c,null,l,C)}for(r in l)if(c=l[r],C=a[r],l.hasOwnProperty(r)&&(c!=null||C!=null))switch(r){case"value":J=c;break;case"defaultValue":g=c;break;case"multiple":p=c;default:c!==C&&ut(e,n,r,c,l,C)}n=g,a=p,l=V,J!=null?Cl(e,!!a,J,!1):!!l!=!!a&&(n!=null?Cl(e,!!a,n,!0):Cl(e,!!a,a?[]:"",!1));return;case"textarea":V=J=null;for(g in a)if(r=a[g],a.hasOwnProperty(g)&&r!=null&&!l.hasOwnProperty(g))switch(g){case"value":break;case"children":break;default:ut(e,n,g,null,l,r)}for(p in l)if(r=l[p],c=a[p],l.hasOwnProperty(p)&&(r!=null||c!=null))switch(p){case"value":J=r;break;case"defaultValue":V=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&ut(e,n,p,r,l,c)}au(e,J,V);return;case"option":for(var je in a)if(J=a[je],a.hasOwnProperty(je)&&J!=null&&!l.hasOwnProperty(je))switch(je){case"selected":e.selected=!1;break;default:ut(e,n,je,null,l,J)}for(C in l)if(J=l[C],V=a[C],l.hasOwnProperty(C)&&J!==V&&(J!=null||V!=null))switch(C){case"selected":e.selected=J&&typeof J!="function"&&typeof J!="symbol";break;default:ut(e,n,C,J,l,V)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in a)J=a[Ae],a.hasOwnProperty(Ae)&&J!=null&&!l.hasOwnProperty(Ae)&&ut(e,n,Ae,null,l,J);for(Z in l)if(J=l[Z],V=a[Z],l.hasOwnProperty(Z)&&J!==V&&(J!=null||V!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(J!=null)throw Error(d(137,n));break;default:ut(e,n,Z,J,l,V)}return;default:if(Po(n)){for(var pt in a)J=a[pt],a.hasOwnProperty(pt)&&J!==void 0&&!l.hasOwnProperty(pt)&&Lc(e,n,pt,void 0,l,J);for(P in l)J=l[P],V=a[P],!l.hasOwnProperty(P)||J===V||J===void 0&&V===void 0||Lc(e,n,P,J,l,V);return}}for(var B in a)J=a[B],a.hasOwnProperty(B)&&J!=null&&!l.hasOwnProperty(B)&&ut(e,n,B,null,l,J);for(ie in l)J=l[ie],V=a[ie],!l.hasOwnProperty(ie)||J===V||J==null&&V==null||ut(e,n,ie,J,l,V)}function rf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function gb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,p=r.initiatorType,g=r.duration;if(c&&g&&rf(p)){for(p=0,g=r.responseEnd,l+=1;l<a.length;l++){var C=a[l],Z=C.startTime;if(Z>g)break;var P=C.transferSize,ie=C.initiatorType;P&&rf(ie)&&(C=C.responseEnd,p+=P*(C<g?1:(g-Z)/(C-Z)))}if(--l,n+=8*(c+p)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var qc=null,Bc=null;function ho(e){return e.nodeType===9?e:e.ownerDocument}function cf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function df(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Gc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yc=null;function bb(){var e=window.event;return e&&e.type==="popstate"?e===Yc?!1:(Yc=e,!0):(Yc=null,!1)}var uf=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,pf=typeof Promise=="function"?Promise:void 0,vb=typeof queueMicrotask=="function"?queueMicrotask:typeof pf<"u"?function(e){return pf.resolve(null).then(e).catch(jb)}:uf;function jb(e){setTimeout(function(){throw e})}function La(e){return e==="head"}function mf(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),ii(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ji(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ji(a);for(var c=a.firstChild;c;){var p=c.nextSibling,g=c.nodeName;c[pi]||g==="SCRIPT"||g==="STYLE"||g==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=p}}else a==="body"&&Ji(e.ownerDocument.body);a=r}while(a);ii(n)}function ff(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function $c(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":$c(a),Jo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function wb(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[pi])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Un(e.nextSibling),e===null)break}return null}function _b(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Un(e.nextSibling),e===null))return null;return e}function hf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Un(e.nextSibling),e===null))return null;return e}function Qc(e){return e.data==="$?"||e.data==="$~"}function Xc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Nb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Un(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zc=null;function xf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return Un(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function gf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function bf(e,n,a){switch(n=ho(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Ji(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Jo(e)}var Rn=new Map,yf=new Set;function xo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=F.d;F.d={f:Sb,r:kb,D:Cb,C:zb,L:Tb,m:Eb,X:Db,S:Mb,M:Ab};function Sb(){var e=ha.f(),n=so();return e||n}function kb(e){var n=Nl(e);n!==null&&n.tag===5&&n.type==="form"?Up(n):ha.r(e)}var ni=typeof document>"u"?null:document;function vf(e,n,a){var l=ni;if(l&&typeof n=="string"&&n){var r=zn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),yf.has(r)||(yf.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Ft(n,"link",e),Xt(n),l.head.appendChild(n)))}}function Cb(e){ha.D(e),vf("dns-prefetch",e,null)}function zb(e,n){ha.C(e,n),vf("preconnect",e,n)}function Tb(e,n,a){ha.L(e,n,a);var l=ni;if(l&&e&&n){var r='link[rel="preload"][as="'+zn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+zn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+zn(a.imageSizes)+'"]')):r+='[href="'+zn(e)+'"]';var c=r;switch(n){case"style":c=ai(e);break;case"script":c=li(e)}Rn.has(c)||(e=j({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Rn.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Vi(c))||n==="script"&&l.querySelector(Fi(c))||(n=l.createElement("link"),Ft(n,"link",e),Xt(n),l.head.appendChild(n)))}}function Eb(e,n){ha.m(e,n);var a=ni;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+zn(l)+'"][href="'+zn(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=li(e)}if(!Rn.has(c)&&(e=j({rel:"modulepreload",href:e},n),Rn.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Fi(c)))return}l=a.createElement("link"),Ft(l,"link",e),Xt(l),a.head.appendChild(l)}}}function Mb(e,n,a){ha.S(e,n,a);var l=ni;if(l&&e){var r=Sl(l).hoistableStyles,c=ai(e);n=n||"default";var p=r.get(c);if(!p){var g={loading:0,preload:null};if(p=l.querySelector(Vi(c)))g.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Rn.get(c))&&Kc(e,a);var C=p=l.createElement("link");Xt(C),Ft(C,"link",e),C._p=new Promise(function(Z,P){C.onload=Z,C.onerror=P}),C.addEventListener("load",function(){g.loading|=1}),C.addEventListener("error",function(){g.loading|=2}),g.loading|=4,go(p,n,l)}p={type:"stylesheet",instance:p,count:1,state:g},r.set(c,p)}}}function Db(e,n){ha.X(e,n);var a=ni;if(a&&e){var l=Sl(a).hoistableScripts,r=li(e),c=l.get(r);c||(c=a.querySelector(Fi(r)),c||(e=j({src:e,async:!0},n),(n=Rn.get(r))&&Jc(e,n),c=a.createElement("script"),Xt(c),Ft(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Ab(e,n){ha.M(e,n);var a=ni;if(a&&e){var l=Sl(a).hoistableScripts,r=li(e),c=l.get(r);c||(c=a.querySelector(Fi(r)),c||(e=j({src:e,async:!0,type:"module"},n),(n=Rn.get(r))&&Jc(e,n),c=a.createElement("script"),Xt(c),Ft(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function jf(e,n,a,l){var r=(r=Se.current)?xo(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ai(a.href),a=Sl(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ai(a.href);var c=Sl(r).hoistableStyles,p=c.get(e);if(p||(r=r.ownerDocument||r,p={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,p),(c=r.querySelector(Vi(e)))&&!c._p&&(p.instance=c,p.state.loading=5),Rn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Rn.set(e,a),c||Ob(r,e,a,p.state))),n&&l===null)throw Error(d(528,""));return p}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=li(a),a=Sl(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ai(e){return'href="'+zn(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function wf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Ob(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Ft(n,"link",a),Xt(n),e.head.appendChild(n))}function li(e){return'[src="'+zn(e)+'"]'}function Fi(e){return"script[async]"+e}function _f(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+zn(a.href)+'"]');if(l)return n.instance=l,Xt(l),l;var r=j({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Xt(l),Ft(l,"style",r),go(l,a.precedence,e),n.instance=l;case"stylesheet":r=ai(a.href);var c=e.querySelector(Vi(r));if(c)return n.state.loading|=4,n.instance=c,Xt(c),c;l=wf(a),(r=Rn.get(r))&&Kc(l,r),c=(e.ownerDocument||e).createElement("link"),Xt(c);var p=c;return p._p=new Promise(function(g,C){p.onload=g,p.onerror=C}),Ft(c,"link",l),n.state.loading|=4,go(c,a.precedence,e),n.instance=c;case"script":return c=li(a.src),(r=e.querySelector(Fi(c)))?(n.instance=r,Xt(r),r):(l=a,(r=Rn.get(c))&&(l=j({},a),Jc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Xt(r),Ft(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,go(l,a.precedence,e));return n.instance}function go(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,p=0;p<l.length;p++){var g=l[p];if(g.dataset.precedence===n)c=g;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Jc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var bo=null;function Nf(e,n,a){if(bo===null){var l=new Map,r=bo=new Map;r.set(a,l)}else r=bo,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[pi]||c[ue]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var p=c.getAttribute(n)||"";p=e+p;var g=l.get(p);g?g.push(c):l.set(p,[c])}}return l}function Sf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ub(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function kf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Rb(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ai(l.href),c=n.querySelector(Vi(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=yo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,Xt(c);return}c=n.ownerDocument||n,l=wf(l),(r=Rn.get(r))&&Kc(l,r),c=c.createElement("link"),Xt(c);var p=c;p._p=new Promise(function(g,C){p.onload=g,p.onerror=C}),Ft(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=yo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vc=0;function Hb(e,n){return e.stylesheets&&e.count===0&&jo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&jo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Vc===0&&(Vc=62500*gb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&jo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function yo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)jo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vo=null;function jo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vo=new Map,n.forEach(Lb,e),vo=null,yo.call(e))}function Lb(e,n){if(!(n.state.loading&4)){var a=vo.get(e);if(a)var l=a.get(null);else{a=new Map,vo.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var p=r[c];(p.nodeName==="LINK"||p.getAttribute("media")!=="not all")&&(a.set(p.dataset.precedence,p),l=p)}l&&a.set(null,l)}r=n.instance,p=r.getAttribute("data-precedence"),c=a.get(p)||l,c===l&&a.set(null,r),a.set(p,r),this.count++,l=yo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Wi={$$typeof:U,Provider:null,Consumer:null,_currentValue:k,_currentValue2:k,_threadCount:0};function qb(e,n,a,l,r,c,p,g,C){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ye(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.hiddenUpdates=Ye(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=p,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function Cf(e,n,a,l,r,c,p,g,C,Z,P,ie){return e=new qb(e,n,a,p,C,Z,P,ie,g),n=1,c===!0&&(n|=24),c=xn(3,null,null,n),e.current=c,c.stateNode=e,n=zr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Dr(c),e}function zf(e){return e?(e=Ul,e):Ul}function Tf(e,n,a,l,r,c){r=zf(r),l.context===null?l.context=r:l.pendingContext=r,l=Ca(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=za(e,l,n),a!==null&&(mn(a,e,n),Ti(a,e,n))}function Ef(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Fc(e,n){Ef(e,n),(e=e.alternate)&&Ef(e,n)}function Mf(e){if(e.tag===13||e.tag===31){var n=ll(e,67108864);n!==null&&mn(n,e,67108864),Fc(e,67108864)}}function Df(e){if(e.tag===13||e.tag===31){var n=jn();n=di(n);var a=ll(e,n);a!==null&&mn(a,e,n),Fc(e,n)}}var wo=!0;function Bb(e,n,a,l){var r=H.T;H.T=null;var c=F.p;try{F.p=2,Wc(e,n,a,l)}finally{F.p=c,H.T=r}}function Gb(e,n,a,l){var r=H.T;H.T=null;var c=F.p;try{F.p=8,Wc(e,n,a,l)}finally{F.p=c,H.T=r}}function Wc(e,n,a,l){if(wo){var r=Pc(l);if(r===null)Hc(e,n,l,_o,a),Of(e,l);else if($b(r,e,n,a,l))l.stopPropagation();else if(Of(e,l),n&4&&-1<Yb.indexOf(e)){for(;r!==null;){var c=Nl(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var p=sn(c.pendingLanes);if(p!==0){var g=c;for(g.pendingLanes|=2,g.entangledLanes|=2;p;){var C=1<<31-mt(p);g.entanglements[1]|=C,p&=~C}Jn(c),(at&6)===0&&(lo=ye()+500,Xi(0))}}break;case 31:case 13:g=ll(c,2),g!==null&&mn(g,c,2),so(),Fc(c,2)}if(c=Pc(l),c===null&&Hc(e,n,l,_o,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Hc(e,n,l,null,a)}}function Pc(e){return e=er(e),Ic(e)}var _o=null;function Ic(e){if(_o=null,e=_l(e),e!==null){var n=f(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=m(n),e!==null)return e;e=null}else if(a===31){if(e=S(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return _o=e,null}function Af(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Be()){case ve:return 2;case rt:return 8;case $:case Ne:return 32;case _e:return 268435456;default:return 32}default:return 32}}var ed=!1,qa=null,Ba=null,Ga=null,Pi=new Map,Ii=new Map,Ya=[],Yb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Of(e,n){switch(e){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":Ba=null;break;case"mouseover":case"mouseout":Ga=null;break;case"pointerover":case"pointerout":Pi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ii.delete(n.pointerId)}}function es(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=Nl(n),n!==null&&Mf(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function $b(e,n,a,l,r){switch(n){case"focusin":return qa=es(qa,e,n,a,l,r),!0;case"dragenter":return Ba=es(Ba,e,n,a,l,r),!0;case"mouseover":return Ga=es(Ga,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return Pi.set(c,es(Pi.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Ii.set(c,es(Ii.get(c)||null,e,n,a,l,r)),!0}return!1}function Uf(e){var n=_l(e.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=m(a),n!==null){e.blockedOn=n,b(e.priority,function(){Df(a)});return}}else if(n===31){if(n=S(a),n!==null){e.blockedOn=n,b(e.priority,function(){Df(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Pc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Io=l,a.target.dispatchEvent(l),Io=null}else return n=Nl(a),n!==null&&Mf(n),e.blockedOn=a,!1;n.shift()}return!0}function Rf(e,n,a){No(e)&&a.delete(n)}function Qb(){ed=!1,qa!==null&&No(qa)&&(qa=null),Ba!==null&&No(Ba)&&(Ba=null),Ga!==null&&No(Ga)&&(Ga=null),Pi.forEach(Rf),Ii.forEach(Rf)}function So(e,n){e.blockedOn===n&&(e.blockedOn=null,ed||(ed=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Qb)))}var ko=null;function Hf(e){ko!==e&&(ko=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){ko===e&&(ko=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Ic(l||a)===null)continue;break}var c=Nl(a);c!==null&&(e.splice(n,3),n-=3,Pr(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function ii(e){function n(C){return So(C,e)}qa!==null&&So(qa,e),Ba!==null&&So(Ba,e),Ga!==null&&So(Ga,e),Pi.forEach(n),Ii.forEach(n);for(var a=0;a<Ya.length;a++){var l=Ya[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ya.length&&(a=Ya[0],a.blockedOn===null);)Uf(a),a.blockedOn===null&&Ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],p=r[ze]||null;if(typeof c=="function")p||Hf(a);else if(p){var g=null;if(c&&c.hasAttribute("formAction")){if(r=c,p=c[ze]||null)g=p.formAction;else if(Ic(r)!==null)continue}else g=p.action;typeof g=="function"?a[l+1]=g:(a.splice(l,3),l-=3),Hf(a)}}}function Lf(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(p){return r=p})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function td(e){this._internalRoot=e}Co.prototype.render=td.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=jn();Tf(a,l,e,n,null,null)},Co.prototype.unmount=td.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Tf(e.current,2,null,e,null,null),so(),n[xt]=null}};function Co(e){this._internalRoot=e}Co.prototype.unstable_scheduleHydration=function(e){if(e){var n=hs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ya.length&&n!==0&&n<Ya[a].priority;a++);Ya.splice(a,0,e),a===0&&Uf(e)}};var qf=i.version;if(qf!=="19.2.6")throw Error(d(527,qf,"19.2.6"));F.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=x(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Xb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{Je=zo.inject(Xb),$e=zo}catch{}}return ns.createRoot=function(e,n){if(!u(e))throw Error(d(299));var a=!1,l="",r=Xp,c=Zp,p=Kp;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(p=n.onRecoverableError)),n=Cf(e,1,!1,null,null,a,l,null,r,c,p,Lf),e[xt]=n.current,Rc(e),new td(n)},ns.hydrateRoot=function(e,n,a){if(!u(e))throw Error(d(299));var l=!1,r="",c=Xp,p=Zp,g=Kp,C=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(g=a.onRecoverableError),a.formState!==void 0&&(C=a.formState)),n=Cf(e,1,!0,n,a??null,l,r,C,c,p,g,Lf),n.context=zf(null),a=n.current,l=jn(),l=di(l),r=Ca(l),r.callback=null,za(a,r,l),a=l,n.current.lanes=a,et(n,a),Jn(n),e[xt]=n.current,Rc(e),new Co(n)},ns.version="19.2.6",ns}var Vf;function ly(){if(Vf)return ld.exports;Vf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ld.exports=ay(),ld.exports}var iy=ly();Ih();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},rs.apply(this,arguments)}var Ja;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Ja||(Ja={}));const Ff="popstate";function sy(s){s===void 0&&(s={});function i(u,f){let{pathname:m="/",search:S="",hash:v=""}=vl(u.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),kd("",{pathname:m,search:S,hash:v},f.state&&f.state.usr||null,f.state&&f.state.key||"default")}function o(u,f){let m=u.document.querySelector("base"),S="";if(m&&m.getAttribute("href")){let v=u.location.href,x=v.indexOf("#");S=x===-1?v:v.slice(0,x)}return S+"#"+(typeof f=="string"?f:Bo(f))}function d(u,f){Qo(u.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(f)+")")}return ry(i,o,d,s)}function Mt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Qo(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function oy(){return Math.random().toString(36).substr(2,8)}function Wf(s,i){return{usr:s.state,key:s.key,idx:i}}function kd(s,i,o,d){return o===void 0&&(o=null),rs({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?vl(i):i,{state:o,key:i&&i.key||d||oy()})}function Bo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function vl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ry(s,i,o,d){d===void 0&&(d={});let{window:u=document.defaultView,v5Compat:f=!1}=d,m=u.history,S=Ja.Pop,v=null,x=y();x==null&&(x=0,m.replaceState(rs({},m.state,{idx:x}),""));function y(){return(m.state||{idx:null}).idx}function j(){S=Ja.Pop;let z=y(),G=z==null?null:z-x;x=z,v&&v({action:S,location:K.location,delta:G})}function E(z,G){S=Ja.Push;let R=kd(K.location,z,G);o&&o(R,z),x=y()+1;let U=Wf(R,x),I=K.createHref(R);try{m.pushState(U,"",I)}catch(se){if(se instanceof DOMException&&se.name==="DataCloneError")throw se;u.location.assign(I)}f&&v&&v({action:S,location:K.location,delta:1})}function Q(z,G){S=Ja.Replace;let R=kd(K.location,z,G);o&&o(R,z),x=y();let U=Wf(R,x),I=K.createHref(R);m.replaceState(U,"",I),f&&v&&v({action:S,location:K.location,delta:0})}function W(z){let G=u.location.origin!=="null"?u.location.origin:u.location.href,R=typeof z=="string"?z:Bo(z);return R=R.replace(/ $/,"%20"),Mt(G,"No window.location.(origin|href) available to create URL for href: "+R),new URL(R,G)}let K={get action(){return S},get location(){return s(u,m)},listen(z){if(v)throw new Error("A history only accepts one active listener");return u.addEventListener(Ff,j),v=z,()=>{u.removeEventListener(Ff,j),v=null}},createHref(z){return i(u,z)},createURL:W,encodeLocation(z){let G=W(z);return{pathname:G.pathname,search:G.search,hash:G.hash}},push:E,replace:Q,go(z){return m.go(z)}};return K}var Pf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Pf||(Pf={}));function cy(s,i,o){return o===void 0&&(o="/"),dy(s,i,o)}function dy(s,i,o,d){let u=typeof i=="string"?vl(i):i,f=Gd(u.pathname||"/",o);if(f==null)return null;let m=ex(s);uy(m);let S=null;for(let v=0;S==null&&v<m.length;++v){let x=_y(f);S=vy(m[v],x)}return S}function ex(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let u=(f,m,S)=>{let v={relativePath:S===void 0?f.path||"":S,caseSensitive:f.caseSensitive===!0,childrenIndex:m,route:f};v.relativePath.startsWith("/")&&(Mt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let x=Va([d,v.relativePath]),y=o.concat(v);f.children&&f.children.length>0&&(Mt(f.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+x+'".')),ex(f.children,i,y,x)),!(f.path==null&&!f.index)&&i.push({path:x,score:by(x,f.index),routesMeta:y})};return s.forEach((f,m)=>{var S;if(f.path===""||!((S=f.path)!=null&&S.includes("?")))u(f,m);else for(let v of tx(f.path))u(f,m,v)}),i}function tx(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,u=o.endsWith("?"),f=o.replace(/\?$/,"");if(d.length===0)return u?[f,""]:[f];let m=tx(d.join("/")),S=[];return S.push(...m.map(v=>v===""?f:[f,v].join("/"))),u&&S.push(...m),S.map(v=>s.startsWith("/")&&v===""?"/":v)}function uy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:yy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const py=/^:[\w-]+$/,my=3,fy=2,hy=1,xy=10,gy=-2,If=s=>s==="*";function by(s,i){let o=s.split("/"),d=o.length;return o.some(If)&&(d+=gy),i&&(d+=fy),o.filter(u=>!If(u)).reduce((u,f)=>u+(py.test(f)?my:f===""?hy:xy),d)}function yy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,u)=>d===i[u])?s[s.length-1]-i[i.length-1]:0}function vy(s,i,o){let{routesMeta:d}=s,u={},f="/",m=[];for(let S=0;S<d.length;++S){let v=d[S],x=S===d.length-1,y=f==="/"?i:i.slice(f.length)||"/",j=jy({path:v.relativePath,caseSensitive:v.caseSensitive,end:x},y),E=v.route;if(!j)return null;Object.assign(u,j.params),m.push({params:u,pathname:Va([f,j.pathname]),pathnameBase:zy(Va([f,j.pathnameBase])),route:E}),j.pathnameBase!=="/"&&(f=Va([f,j.pathnameBase]))}return m}function jy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=wy(s.path,s.caseSensitive,s.end),u=i.match(o);if(!u)return null;let f=u[0],m=f.replace(/(.)\/+$/,"$1"),S=u.slice(1);return{params:d.reduce((x,y,j)=>{let{paramName:E,isOptional:Q}=y;if(E==="*"){let K=S[j]||"";m=f.slice(0,f.length-K.length).replace(/(.)\/+$/,"$1")}const W=S[j];return Q&&!W?x[E]=void 0:x[E]=(W||"").replace(/%2F/g,"/"),x},{}),pathname:f,pathnameBase:m,pattern:s}}function wy(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),Qo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],u="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,S,v)=>(d.push({paramName:S,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),u+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?u+="\\/*$":s!==""&&s!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),d]}function _y(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Qo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Gd(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const Ny=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Sy=s=>Ny.test(s);function ky(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:u=""}=typeof s=="string"?vl(s):s,f;if(o)if(Sy(o))f=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),Qo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?f=eh(o.substring(1),"/"):f=eh(o,i)}else f=i;return{pathname:f,search:Ty(d),hash:Ey(u)}}function eh(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(u=>{u===".."?o.length>1&&o.pop():u!=="."&&o.push(u)}),o.length>1?o.join("/"):"/"}function rd(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Cy(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Yd(s,i){let o=Cy(s);return i?o.map((d,u)=>u===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function $d(s,i,o,d){d===void 0&&(d=!1);let u;typeof s=="string"?u=vl(s):(u=rs({},s),Mt(!u.pathname||!u.pathname.includes("?"),rd("?","pathname","search",u)),Mt(!u.pathname||!u.pathname.includes("#"),rd("#","pathname","hash",u)),Mt(!u.search||!u.search.includes("#"),rd("#","search","hash",u)));let f=s===""||u.pathname==="",m=f?"/":u.pathname,S;if(m==null)S=o;else{let j=i.length-1;if(!d&&m.startsWith("..")){let E=m.split("/");for(;E[0]==="..";)E.shift(),j-=1;u.pathname=E.join("/")}S=j>=0?i[j]:"/"}let v=ky(u,S),x=m&&m!=="/"&&m.endsWith("/"),y=(f||m===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(x||y)&&(v.pathname+="/"),v}const Va=s=>s.join("/").replace(/\/\/+/g,"/"),zy=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Ty=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,Ey=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function My(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const nx=["post","put","patch","delete"];new Set(nx);const Dy=["get",...nx];new Set(Dy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function cs(){return cs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},cs.apply(this,arguments)}const Qd=h.createContext(null),Ay=h.createContext(null),Wa=h.createContext(null),Xo=h.createContext(null),Pa=h.createContext({outlet:null,matches:[],isDataRoute:!1}),ax=h.createContext(null);function Oy(s,i){let{relative:o}=i===void 0?{}:i;ri()||Mt(!1);let{basename:d,navigator:u}=h.useContext(Wa),{hash:f,pathname:m,search:S}=ix(s,{relative:o}),v=m;return d!=="/"&&(v=m==="/"?d:Va([d,m])),u.createHref({pathname:v,search:S,hash:f})}function ri(){return h.useContext(Xo)!=null}function Wn(){return ri()||Mt(!1),h.useContext(Xo).location}function lx(s){h.useContext(Wa).static||h.useLayoutEffect(s)}function Xd(){let{isDataRoute:s}=h.useContext(Pa);return s?Ky():Uy()}function Uy(){ri()||Mt(!1);let s=h.useContext(Qd),{basename:i,future:o,navigator:d}=h.useContext(Wa),{matches:u}=h.useContext(Pa),{pathname:f}=Wn(),m=JSON.stringify(Yd(u,o.v7_relativeSplatPath)),S=h.useRef(!1);return lx(()=>{S.current=!0}),h.useCallback(function(x,y){if(y===void 0&&(y={}),!S.current)return;if(typeof x=="number"){d.go(x);return}let j=$d(x,JSON.parse(m),f,y.relative==="path");s==null&&i!=="/"&&(j.pathname=j.pathname==="/"?i:Va([i,j.pathname])),(y.replace?d.replace:d.push)(j,y.state,y)},[i,d,m,f,s])}function ix(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=h.useContext(Wa),{matches:u}=h.useContext(Pa),{pathname:f}=Wn(),m=JSON.stringify(Yd(u,d.v7_relativeSplatPath));return h.useMemo(()=>$d(s,JSON.parse(m),f,o==="path"),[s,m,f,o])}function Ry(s,i){return Hy(s,i)}function Hy(s,i,o,d){ri()||Mt(!1);let{navigator:u}=h.useContext(Wa),{matches:f}=h.useContext(Pa),m=f[f.length-1],S=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let x=Wn(),y;if(i){var j;let z=typeof i=="string"?vl(i):i;v==="/"||(j=z.pathname)!=null&&j.startsWith(v)||Mt(!1),y=z}else y=x;let E=y.pathname||"/",Q=E;if(v!=="/"){let z=v.replace(/^\//,"").split("/");Q="/"+E.replace(/^\//,"").split("/").slice(z.length).join("/")}let W=cy(s,{pathname:Q}),K=Yy(W&&W.map(z=>Object.assign({},z,{params:Object.assign({},S,z.params),pathname:Va([v,u.encodeLocation?u.encodeLocation(z.pathname).pathname:z.pathname]),pathnameBase:z.pathnameBase==="/"?v:Va([v,u.encodeLocation?u.encodeLocation(z.pathnameBase).pathname:z.pathnameBase])})),f,o,d);return i&&K?h.createElement(Xo.Provider,{value:{location:cs({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Ja.Pop}},K):K}function Ly(){let s=Zy(),i=My(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,u={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return h.createElement(h.Fragment,null,h.createElement("h2",null,"Unexpected Application Error!"),h.createElement("h3",{style:{fontStyle:"italic"}},i),o?h.createElement("pre",{style:u},o):null,null)}const qy=h.createElement(Ly,null);class By extends h.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?h.createElement(Pa.Provider,{value:this.props.routeContext},h.createElement(ax.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Gy(s){let{routeContext:i,match:o,children:d}=s,u=h.useContext(Qd);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),h.createElement(Pa.Provider,{value:i},d)}function Yy(s,i,o,d){var u;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var f;if(!o)return null;if(o.errors)s=o.matches;else if((f=d)!=null&&f.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,S=(u=o)==null?void 0:u.errors;if(S!=null){let y=m.findIndex(j=>j.route.id&&(S==null?void 0:S[j.route.id])!==void 0);y>=0||Mt(!1),m=m.slice(0,Math.min(m.length,y+1))}let v=!1,x=-1;if(o&&d&&d.v7_partialHydration)for(let y=0;y<m.length;y++){let j=m[y];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(x=y),j.route.id){let{loaderData:E,errors:Q}=o,W=j.route.loader&&E[j.route.id]===void 0&&(!Q||Q[j.route.id]===void 0);if(j.route.lazy||W){v=!0,x>=0?m=m.slice(0,x+1):m=[m[0]];break}}}return m.reduceRight((y,j,E)=>{let Q,W=!1,K=null,z=null;o&&(Q=S&&j.route.id?S[j.route.id]:void 0,K=j.route.errorElement||qy,v&&(x<0&&E===0?(Jy("route-fallback"),W=!0,z=null):x===E&&(W=!0,z=j.route.hydrateFallbackElement||null)));let G=i.concat(m.slice(0,E+1)),R=()=>{let U;return Q?U=K:W?U=z:j.route.Component?U=h.createElement(j.route.Component,null):j.route.element?U=j.route.element:U=y,h.createElement(Gy,{match:j,routeContext:{outlet:y,matches:G,isDataRoute:o!=null},children:U})};return o&&(j.route.ErrorBoundary||j.route.errorElement||E===0)?h.createElement(By,{location:o.location,revalidation:o.revalidation,component:K,error:Q,children:R(),routeContext:{outlet:null,matches:G,isDataRoute:!0}}):R()},null)}var sx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(sx||{}),ox=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ox||{});function $y(s){let i=h.useContext(Qd);return i||Mt(!1),i}function Qy(s){let i=h.useContext(Ay);return i||Mt(!1),i}function Xy(s){let i=h.useContext(Pa);return i||Mt(!1),i}function rx(s){let i=Xy(),o=i.matches[i.matches.length-1];return o.route.id||Mt(!1),o.route.id}function Zy(){var s;let i=h.useContext(ax),o=Qy(),d=rx();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function Ky(){let{router:s}=$y(sx.UseNavigateStable),i=rx(ox.UseNavigateStable),o=h.useRef(!1);return lx(()=>{o.current=!0}),h.useCallback(function(u,f){f===void 0&&(f={}),o.current&&(typeof u=="number"?s.navigate(u):s.navigate(u,cs({fromRouteId:i},f)))},[s,i])}const th={};function Jy(s,i,o){th[s]||(th[s]=!0)}function Vy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function nh(s){let{to:i,replace:o,state:d,relative:u}=s;ri()||Mt(!1);let{future:f,static:m}=h.useContext(Wa),{matches:S}=h.useContext(Pa),{pathname:v}=Wn(),x=Xd(),y=$d(i,Yd(S,f.v7_relativeSplatPath),v,u==="path"),j=JSON.stringify(y);return h.useEffect(()=>x(JSON.parse(j),{replace:o,state:d,relative:u}),[x,j,u,o,d]),null}function _t(s){Mt(!1)}function Fy(s){let{basename:i="/",children:o=null,location:d,navigationType:u=Ja.Pop,navigator:f,static:m=!1,future:S}=s;ri()&&Mt(!1);let v=i.replace(/^\/*/,"/"),x=h.useMemo(()=>({basename:v,navigator:f,static:m,future:cs({v7_relativeSplatPath:!1},S)}),[v,S,f,m]);typeof d=="string"&&(d=vl(d));let{pathname:y="/",search:j="",hash:E="",state:Q=null,key:W="default"}=d,K=h.useMemo(()=>{let z=Gd(y,v);return z==null?null:{location:{pathname:z,search:j,hash:E,state:Q,key:W},navigationType:u}},[v,y,j,E,Q,W,u]);return K==null?null:h.createElement(Wa.Provider,{value:x},h.createElement(Xo.Provider,{children:o,value:K}))}function Wy(s){let{children:i,location:o}=s;return Ry(Cd(i),o)}new Promise(()=>{});function Cd(s,i){i===void 0&&(i=[]);let o=[];return h.Children.forEach(s,(d,u)=>{if(!h.isValidElement(d))return;let f=[...i,u];if(d.type===h.Fragment){o.push.apply(o,Cd(d.props.children,f));return}d.type!==_t&&Mt(!1),!d.props.index||!d.props.children||Mt(!1);let m={id:d.props.id||f.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=Cd(d.props.children,f)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zd(){return zd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},zd.apply(this,arguments)}function Py(s,i){if(s==null)return{};var o={},d=Object.keys(s),u,f;for(f=0;f<d.length;f++)u=d[f],!(i.indexOf(u)>=0)&&(o[u]=s[u]);return o}function Iy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function ev(s,i){return s.button===0&&(!i||i==="_self")&&!Iy(s)}const tv=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],nv="6";try{window.__reactRouterVersion=nv}catch{}const av="startTransition",ah=Ib[av];function lv(s){let{basename:i,children:o,future:d,window:u}=s,f=h.useRef();f.current==null&&(f.current=sy({window:u,v5Compat:!0}));let m=f.current,[S,v]=h.useState({action:m.action,location:m.location}),{v7_startTransition:x}=d||{},y=h.useCallback(j=>{x&&ah?ah(()=>v(j)):v(j)},[v,x]);return h.useLayoutEffect(()=>m.listen(y),[m,y]),h.useEffect(()=>Vy(d),[d]),h.createElement(Fy,{basename:i,children:o,location:S.location,navigationType:S.action,navigator:m,future:d})}const iv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",sv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ov=h.forwardRef(function(i,o){let{onClick:d,relative:u,reloadDocument:f,replace:m,state:S,target:v,to:x,preventScrollReset:y,viewTransition:j}=i,E=Py(i,tv),{basename:Q}=h.useContext(Wa),W,K=!1;if(typeof x=="string"&&sv.test(x)&&(W=x,iv))try{let U=new URL(window.location.href),I=x.startsWith("//")?new URL(U.protocol+x):new URL(x),se=Gd(I.pathname,Q);I.origin===U.origin&&se!=null?x=se+I.search+I.hash:K=!0}catch{}let z=Oy(x,{relative:u}),G=rv(x,{replace:m,state:S,target:v,preventScrollReset:y,relative:u,viewTransition:j});function R(U){d&&d(U),U.defaultPrevented||G(U)}return h.createElement("a",zd({},E,{href:W||z,onClick:K||f?d:R,ref:o,target:v}))});var lh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(lh||(lh={}));var ih;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(ih||(ih={}));function rv(s,i){let{target:o,replace:d,state:u,preventScrollReset:f,relative:m,viewTransition:S}=i===void 0?{}:i,v=Xd(),x=Wn(),y=ix(s,{relative:m});return h.useCallback(j=>{if(ev(j,o)){j.preventDefault();let E=d!==void 0?d:Bo(x)===Bo(y);v(s,{replace:E,state:u,preventScrollReset:f,relative:m,viewTransition:S})}},[x,v,y,d,u,o,s,f,m,S])}function Dt(){const s=Xd();return h.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function cv(){return Wn().pathname}function dv({href:s,...i}){return t.jsx(ov,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),cx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var pv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=h.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:u="",children:f,iconNode:m,...S},v)=>h.createElement("svg",{ref:v,...pv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:cx("lucide",u),...S},[...m.map(([x,y])=>h.createElement(x,y)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=(s,i)=>{const o=h.forwardRef(({className:d,...u},f)=>h.createElement(mv,{ref:f,iconNode:i,className:cx(`lucide-${uv(s)}`,d),...u}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=be("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=be("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=be("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=be("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=be("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=be("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=be("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=be("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=be("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=be("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=be("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=be("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=be("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=be("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=be("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=be("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=be("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=be("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=be("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=be("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=be("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=be("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=be("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=be("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=be("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=be("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=be("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=be("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=be("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=be("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=be("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=be("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=be("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=be("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=be("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=be("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=be("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=be("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ux=be("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=be("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=be("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=be("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=be("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=be("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=be("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=be("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=be("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=be("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=be("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=be("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=be("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=be("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const px=be("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=be("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=be("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=be("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=be("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=be("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=be("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=be("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=be("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=be("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=be("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=be("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=be("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=be("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=be("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mx=be("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=be("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=be("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zv=be("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=be("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=be("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=be("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=be("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=be("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Vv="/api/v3";var Ph;const xe=typeof window<"u"&&((Ph=window.settings)==null?void 0:Ph.secure_path)||"ZicFree123",qo="authorization";function Fv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let u=o[d];for(;u.charAt(0)===" ";)u=u.substring(1,u.length);if(u.indexOf(i)===0)try{const f=u.substring(i.length,u.length),m=decodeURIComponent(f),S=JSON.parse(m);return S&&typeof S=="object"&&"value"in S?S.value:m}catch{try{return decodeURIComponent(u.substring(i.length,u.length))}catch{return u.substring(i.length,u.length)}}}return null}function Wv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const u=JSON.stringify({site:"ZicNet",value:i}),f=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",S=new Date;S.setTime(S.getTime()+o*24*60*60*1e3);const v=`expires=${S.toUTCString()}`,x=m?"":`domain=${window.location.hostname};`;let y=`${s}=${encodeURIComponent(u)}; ${v}; ${x} path=/`;f&&(y+="; secure"),y+="; SameSite=Lax",document.cookie=y;try{window.localStorage.setItem(`cookie_${s}`,u)}catch{}}function Pv(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(u=>{d.forEach(f=>{const m=u?` domain=${u};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${f};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function fx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(qo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(qo,s)}catch{}if(!s&&(s=Fv("auth_data"),s))try{window.localStorage.setItem(qo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Iv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${Vv}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([u,f])=>{f!==void 0&&d.searchParams.set(u,String(f))}),d.toString()}function At(){return!!fx()}function e1(s){typeof window>"u"||(window.localStorage.setItem(qo,s),window.localStorage.setItem("auth_data",s),Wv("auth_data",s,36500))}function hx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(u=>{window.localStorage.removeItem(u)}),["token","auth_data","authorization","vuex","user","auth"].forEach(u=>{window.sessionStorage.removeItem(u)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(u=>{o.forEach(f=>{document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${f};`}),document.cookie=`${u}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Pv(u)})}async function fe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const v=fx();v&&(o.authorization=v)}const u=await fetch(Iv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(u.headers.get("content-type")||"").includes("application/json"),S=m?await u.json():await u.text();if(!u.ok){const v=typeof S=="object"&&S&&"message"in S?String(S.message):`Request failed with status ${u.status}`,x=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(v);throw(u.status===401||u.status===403&&!x)&&i.auth!==!1&&(hx(),window.location.hash="/login"),new Error(v)}if(!m&&typeof S=="string"&&(S.trim().startsWith("<!DOCTYPE html")||S.trim().startsWith("<html")||S.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return S}async function t1(s,i){return fe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function n1(){const s=`/${xe}/stat`,[i,o,d,u,f,m]=await Promise.all([fe(`${s}/getOverride`),fe(`${s}/getOrder`),fe(`${s}/getServerTodayRank`),fe(`${s}/getServerLastRank`),fe(`${s}/getUserTodayRank`),fe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:u.data,userToday:f.data,userYesterday:m.data}}async function xx(){return(await fe(`/${xe}/config/fetch`)).data}async function gx(s){return fe(`/${xe}/config/save`,{method:"POST",body:s})}async function a1(){return(await fe(`/${xe}/config/getEmailTemplate`)).data}async function l1(){return(await fe(`/${xe}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function i1(){return fe(`/${xe}/config/testSendMail`,{method:"POST",body:{}})}async function s1(s){return fe(`/${xe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function o1(){return(await fe(`/${xe}/payment/fetch`)).data}async function r1(){return(await fe(`/${xe}/payment/getPaymentMethods`)).data}async function xh(s,i){return(await fe(`/${xe}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function c1(s){return fe(`/${xe}/payment/save`,{method:"POST",body:s})}async function d1(s){return fe(`/${xe}/payment/show`,{method:"POST",body:{id:s}})}async function u1(s){return fe(`/${xe}/payment/drop`,{method:"POST",body:{id:s}})}async function p1(s){return fe(`/${xe}/payment/sort`,{method:"POST",body:{ids:s}})}async function m1(){return(await fe(`/${xe}/theme/getThemes`)).data}async function f1(s){return(await fe(`/${xe}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function h1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return fe(`/${xe}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ms(){return(await fe(`/${xe}/server/group/fetch`)).data}async function bx(s){return fe(`/${xe}/server/group/save`,{method:"POST",body:s})}async function x1(s){return fe(`/${xe}/server/group/drop`,{method:"POST",body:{id:s}})}const yx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function vx(){return(await fe(`/${xe}/server/route/fetch`)).data}async function g1(s){return fe(`/${xe}/server/route/save`,{method:"POST",body:s})}async function b1(s){return fe(`/${xe}/server/route/drop`,{method:"POST",body:{id:s}})}async function jl(){return(await fe(`/${xe}/plan/fetch`)).data}async function y1(s){return fe(`/${xe}/plan/save`,{method:"POST",body:s})}async function v1(s){return fe(`/${xe}/plan/drop`,{method:"POST",body:{id:s}})}async function dd(s,i){return fe(`/${xe}/plan/update`,{method:"POST",body:{id:s,...i}})}async function gh(s){return fe(`/${xe}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function j1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,u)=>{i.set(`filter[${u}][key]`,d.key),i.set(`filter[${u}][condition]`,d.condition),i.set(`filter[${u}][value]`,d.value)}),await fe(`/${xe}/order/fetch?${i.toString()}`)}async function w1(s){return fe(`/${xe}/order/paid`,{method:"POST",body:{trade_no:s}})}async function _1(s){return fe(`/${xe}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function jx(s){return fe(`/${xe}/order/assign`,{method:"POST",body:s})}async function N1(s,i){return fe(`/${xe}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function S1(s){return fe(`/${xe}/order/detail`,{method:"POST",body:{id:s}})}async function wx(s=1,i=15){return fe(`/${xe}/coupon/fetch?current=${s}&pageSize=${i}`)}async function k1(s){return fe(`/${xe}/coupon/generate`,{method:"POST",body:s})}async function C1(s){return fe(`/${xe}/coupon/drop`,{method:"POST",body:{id:s}})}async function z1(s){return fe(`/${xe}/coupon/show`,{method:"POST",body:{id:s}})}async function T1(s=1,i=15){return fe(`/${xe}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function E1(s){return fe(`/${xe}/giftcard/generate`,{method:"POST",body:s})}async function M1(s){return fe(`/${xe}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Ad(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((u,f)=>{d.set(`filter[${f}][key]`,u.key),d.set(`filter[${f}][condition]`,u.condition),d.set(`filter[${f}][value]`,u.value)}),fe(`/${xe}/user/fetch?${d.toString()}`)}async function D1(s){return fe(`/${xe}/user/update`,{method:"POST",body:s})}async function _x(s){return fe(`/${xe}/user/getUserInfoById`,{params:{id:s}})}async function A1(s){return fe(`/${xe}/user/delUser`,{method:"POST",body:{id:s}})}async function O1(s){return fe(`/${xe}/user/generate`,{method:"POST",body:s})}async function U1(s){return fe(`/${xe}/user/resetSecret`,{method:"POST",body:{id:s}})}async function R1(s=1,i=15,o,d=!1){const u=new URLSearchParams;return u.set("current",String(s)),u.set("pageSize",String(i)),d&&u.set("include_subscribe_url","1"),o==null||o.forEach((f,m)=>{u.set(`filter[${m}][key]`,f.key),u.set(`filter[${m}][condition]`,f.condition),u.set(`filter[${m}][value]`,f.value)}),fe(`/${xe}/subscription/fetch?${u.toString()}`)}async function H1(s){return fe(`/${xe}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function L1(s){return fe(`/${xe}/subscription/update`,{method:"POST",body:s})}async function q1(s){return fe(`/${xe}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function Nx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((u,f)=>{d.set(`filter[${f}][key]`,u.key),d.set(`filter[${f}][condition]`,u.condition),d.set(`filter[${f}][value]`,u.value)}),fe(`/${xe}/device/fetch?${d.toString()}`)}async function Sx(s){return fe(`/${xe}/device/drop`,{method:"POST",body:{id:s}})}async function kx(s){return fe(`/${xe}/device/ban`,{method:"POST",body:{id:s}})}async function B1(s){return fe(`/${xe}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function G1(s,i=1,o=10){return fe(`/${xe}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function Y1(){return(await fe(`/${xe}/notice/fetch`)).data}async function $1(s){return fe(`/${xe}/notice/save`,{method:"POST",body:s})}async function Q1(s){return fe(`/${xe}/notice/drop`,{method:"POST",body:{id:s}})}async function X1(s){return fe(`/${xe}/notice/show`,{method:"POST",body:{id:s}})}async function Z1(){return(await fe(`/${xe}/ticket/fetch`)).data}async function bh(s){return(await fe(`/${xe}/ticket/fetch`,{params:{id:s}})).data}async function K1(s,i){return fe(`/${xe}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function J1(s){return fe(`/${xe}/ticket/close`,{method:"POST",body:{id:s}})}async function V1(){return(await fe(`/${xe}/knowledge/fetch`)).data}async function F1(s){return(await fe(`/${xe}/knowledge/fetch`,{params:{id:s}})).data}async function W1(s){return fe(`/${xe}/knowledge/save`,{method:"POST",body:s})}async function P1(s){return fe(`/${xe}/knowledge/drop`,{method:"POST",body:{id:s}})}async function I1(s){return fe(`/${xe}/knowledge/show`,{method:"POST",body:{id:s}})}async function e0(){return(await fe(`/${xe}/webcon/fetch`)).data}async function t0(s){return fe(`/${xe}/webcon/save`,{method:"POST",body:s})}async function n0(s){return fe(`/${xe}/webcon/drop`,{method:"POST",body:{id:s}})}async function a0(s){return fe(`/${xe}/webcon/show`,{method:"POST",body:{id:s}})}async function l0(){return fe(`/${xe}/system/getSystemStatus`)}async function i0(){return(await fe(`/${xe}/system/getCoreLicenseStatus`)).data}async function s0(){return(await fe(`/${xe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function o0(){return fe(`/${xe}/system/getQueueStats`)}async function r0(){return fe(`/${xe}/system/getQueueWorkload`)}async function c0(){return fe(`/${xe}/system/getSystemLog`)}async function yh(){return fe(`/${xe}/server/manage/getNodes`)}async function d0(s,i){return fe(`/${xe}/server/${s}/save`,{method:"POST",body:i})}async function u0(s,i){return fe(`/${xe}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function p0(s,i,o){return fe(`/${xe}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function m0(s,i){return fe(`/${xe}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function f0(s){return fe(`/${xe}/server/manage/sort`,{method:"POST",body:s})}const Kd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],Cx="admin-locale",Od="vi-VN",h0="/assets/adminzic",zx=h.createContext(null);function x0(){if(typeof window>"u")return Od;const s=localStorage.getItem(Cx);return s&&Kd.some(i=>i.code===s)?s:Od}function g0(s,i){return i?Object.entries(i).reduce((o,[d,u])=>o.replaceAll(`{${d}}`,String(u)),s):s}function b0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const u=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(u){u.addEventListener("load",()=>{var S;i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})}),u.addEventListener("error",o);return}const f=document.createElement("script");f.src=`${h0}/i18n/${s}.js`,f.async=!0,f.dataset.adminNextLocale=s,f.onload=()=>{var S;return i(((S=window.AdminNextI18n)==null?void 0:S[s])??{})},f.onerror=o,document.head.appendChild(f)})}function y0({children:s}){const[i,o]=h.useState(Od),[d,u]=h.useState({}),[f,m]=h.useState(!0);h.useEffect(()=>{o(x0())},[]);const S=h.useCallback(y=>{o(y),typeof window<"u"&&localStorage.setItem(Cx,y)},[]);h.useEffect(()=>{let y=!0;return m(!0),b0(i).then(j=>{y&&u(j)}).finally(()=>{y&&m(!1)}),()=>{y=!1}},[i]);const v=h.useCallback((y,j)=>g0(d[y]??y,j),[d]),x=h.useMemo(()=>({locale:i,loading:f,setLocale:S,t:v}),[i,f,S,v]);return t.jsx(zx.Provider,{value:x,children:s})}function Ke(){const s=h.useContext(zx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function v0(){const s=Dt(),{t:i,locale:o,setLocale:d}=Ke(),[u,f]=h.useState(""),[m,S]=h.useState(""),[v,x]=h.useState(""),[y,j]=h.useState(!1),[E,Q]=h.useState(!1),W=h.useRef(null);h.useEffect(()=>{function z(G){W.current&&!W.current.contains(G.target)&&Q(!1)}return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[]),h.useEffect(()=>{At()&&s.replace("/dashboard")},[s]);async function K(z){var G,R,U,I;z.preventDefault(),x(""),j(!0);try{const se=await t1(u,m),re=((G=se.data)==null?void 0:G.auth_data)??((R=se.data)==null?void 0:R.token),D=((U=se.data)==null?void 0:U.is_admin)===1||((I=se.data)==null?void 0:I.is_admin)===!0;if(!re||!D)throw new Error(i("login.adminRequired"));e1(re),s.replace("/dashboard")}catch(se){x(se instanceof Error?se.message:i("login.failed"))}finally{j(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:W,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>Q(z=>!z),children:t.jsx(fs,{size:17})}),E?t.jsx("div",{className:"locale-menu",children:Kd.map(z=>t.jsxs("button",{className:`locale-option ${o===z.code?"active":""}`,type:"button",onClick:()=>{d(z.code),Q(!1)},children:[t.jsx("span",{className:"locale-flag",children:z.flag}),t.jsx("span",{children:z.label})]},z.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Lv,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(ux,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:z=>f(z.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:u})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Tv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:z=>S(z.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:y,type:"submit",children:i(y?"login.signingIn":"login.submit")})]})]})]})}function _n(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Vn(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function j0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const w0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:_v}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Gv},{href:"/config/payment",label:"nav.paymentConfig",icon:jv},{href:"/config/theme",label:"nav.themeConfig",icon:Xv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Zd},{href:"/server/group",label:"nav.groupManagement",icon:Kv},{href:"/server/route",label:"nav.routeManagement",icon:Bv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:ph},{href:"/order",label:"nav.orders",icon:zv},{href:"/coupon",label:"nav.coupons",icon:Nv},{href:"/giftcard",label:"nav.giftcards",icon:$v}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:mx},{href:"/subscription",label:"nav.subscriptions",icon:ph},{href:"/device",label:"nav.devices",icon:Yv},{href:"/webcon",label:"nav.webcon",icon:fs},{href:"/notice",label:"nav.notices",icon:is},{href:"/ticket",label:"nav.tickets",icon:Cv},{href:"/knowledge",label:"nav.knowledge",icon:xv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:gv}]}];function _0(){const[s,i]=h.useState("light");h.useEffect(()=>{const f=localStorage.getItem("admin-theme")??"light";i(f),document.documentElement.setAttribute("data-theme",f)},[]);const o=h.useCallback(u=>{i(u),localStorage.setItem("admin-theme",u),document.documentElement.setAttribute("data-theme",u)},[]),d=h.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function Tx(s){return s?new Date(s*1e3):null}function N0(s,i){const o=Tx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function S0(s){const i=Tx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function $t({children:s,title:i,subtitle:o}){const[d,u]=h.useState(!1),f=Dt(),m=cv(),{t:S,locale:v,setLocale:x}=Ke(),{theme:y,toggle:j}=_0(),[E,Q]=h.useState(!1),W=h.useRef(null),[K,z]=h.useState(null),[G,R]=h.useState(!1),U=h.useCallback(async(w=!1)=>{if(At()){R(w);try{z(w?await s0():await i0())}catch(L){z({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:S("license.unavailable"),error:L instanceof Error?L.message:S("license.unavailable")})}finally{R(!1)}}},[S]);h.useEffect(()=>{function w(L){W.current&&!W.current.contains(L.target)&&Q(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[]),h.useEffect(()=>{U(!1);const w=window.setInterval(()=>{U(!1)},6e4);return()=>window.clearInterval(w)},[U]);function I(){hx(),f.replace("/login")}const se=(K==null?void 0:K.license_expires_at)??(K==null?void 0:K.expires_at),re=N0(v,se),D=typeof(K==null?void 0:K.days_until_expiry)=="number"?K.days_until_expiry:S0(se),Y=typeof D=="number"?D<=0?S("license.expiresToday"):S("license.daysLeft",{days:D}):null,ne=!!K&&K.available&&!K.requires_renewal,he=ne&&!!(K!=null&&K.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>u(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:S("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:w0.map(w=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:S(w.label)}),w.items.map(L=>{const te=L.icon,A=m===L.href;return t.jsxs(dv,{className:`nav-item ${A?"active":""}`,href:L.href,onClick:()=>u(!1),children:[t.jsx(te,{size:17}),t.jsx("span",{children:S(L.label)})]},L.href)})]},w.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":S(d?"common.closeMenu":"common.openMenu"),onClick:()=>u(w=>!w),children:d?t.jsx(st,{size:19}):t.jsx(Mv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${he?"warning":""}`,type:"button",disabled:G,title:S("license.refresh"),onClick:()=>void U(!0),children:[t.jsx(rh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:S("license.validUntil")}),t.jsx("strong",{children:re??S("license.unknownExpiry")})]}),Y?t.jsx("small",{children:Y}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:W,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":S("common.language"),onClick:()=>Q(w=>!w),children:t.jsx(fs,{size:17})}),E?t.jsx("div",{className:"locale-menu",children:Kd.map(w=>t.jsxs("button",{className:`locale-option ${v===w.code?"active":""}`,type:"button",onClick:()=>{x(w.code),Q(!1)},children:[t.jsx("span",{className:"locale-flag",children:w.flag}),t.jsx("span",{children:w.label})]},w.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":y==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:y==="dark"?t.jsx(Qv,{size:17}):t.jsx(Dv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:I,children:[t.jsx(Ev,{size:16}),t.jsx("span",{children:S("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[K!=null&&K.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Md,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.renewTitle")}),t.jsx("p",{children:S("license.renewBody")}),t.jsxs("small",{children:[S("license.currentStatus"),": ",K.status,K.error?` - ${K.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void U(!0),children:[t.jsx(zt,{size:16}),S(G?"license.refreshing":"license.refresh")]})]}):null,he?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(rh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:S("license.expiryWarningTitle")}),t.jsx("p",{children:S("license.expiryWarningBody",{date:re??S("license.unknownExpiry"),days:D??""})}),t.jsxs("small",{children:[S("license.currentStatus"),": ",K.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:G,onClick:()=>void U(!0),children:[t.jsx(zt,{size:16}),S(G?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const vh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Ex(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ss(s){return Number(s??0)}function jh(s){return ss(s)/100}function wh(s){return`${Vn(Math.round(s))} VND`}function Mx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function k0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const u=new Date(i);return u.setDate(i.getDate()-(s-d-1)),Mx(u)})}function _h(s,i){const o=s.get(i);if(o)return o;const d=Ex(i);return s.set(i,d),d}function C0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function Eo({label:s,value:i,helper:o,tone:d="default",onClick:u}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:u,style:u?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(hv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function vt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(zt,{size:18}),t.jsx("span",{children:s})]})}function z0(s,i){const o=new Map,d=new Map;if(s.forEach(u=>{const f=_h(o,u.date),m=C0(u.type);if(m){f[m]=Number(u.value||0);return}const S=d.get(u.date)??0,v=vh[S%vh.length];f[v]=Number(u.value||0),d.set(u.date,S+1)}),i){const u=_h(o,Mx(new Date));u.registrations=ss(i.day_register_total),i.day_order_total!==void 0&&(u.orderCount=ss(i.day_order_total)),i.day_paid_order_total!==void 0&&(u.paidCount=ss(i.day_paid_order_total)),u.paidAmount=jh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(u.commissionAmount=jh(i.day_commission_payout)),i.day_commission_count!==void 0&&(u.commissionCount=ss(i.day_commission_count))}return o.size===0?[]:k0(31).map(u=>o.get(u)??Ex(u))}function T0({records:s,override:i}){const{t:o}=Ke(),[d,u]=h.useState("paidAmount"),[f,m]=h.useState(null),[S,v]=h.useState(0),[x,y]=h.useState(0),j=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:wh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Vn},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Vn},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:wh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Vn},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Vn}],E=j.find(Y=>Y.key===d)??j[0],Q=z0(s,i),W=Y=>Number(Y[E.key]||0),K=Math.max(...Q.map(W),1),z=720,G=220,R=28,U=Q.length>1?(z-R*2)/(Q.length-1):0,I=Y=>G-R-Y/K*(G-R*2),se=Q.map((Y,ne)=>`${R+ne*U},${I(W(Y))}`).join(" "),re=Math.max(Math.ceil(Q.length/6),1),D=`dashboardTrendFill-${E.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:Q.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:j.map(Y=>t.jsx("button",{type:"button",className:d===Y.key?"active":"",onClick:()=>{u(Y.key),m(null)},children:Y.label},Y.key))}),Q.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${z} ${G}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:D,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:E.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:E.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map(Y=>t.jsx("line",{className:"chart-grid",x1:R,x2:z-R,y1:R+Y*(G-R*2),y2:R+Y*(G-R*2)},Y)),Q.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${D})`},points:`${R},${G-R} ${se} ${z-R},${G-R}`}),t.jsx("polyline",{className:"chart-line",points:se,style:{stroke:E.color}}),Q.map((Y,ne)=>{const he=R+ne*U,w=I(W(Y));return t.jsxs("g",{children:[t.jsx("circle",{cx:he,cy:w,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m(Y),v(he),y(w)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:he,cy:w,r:(f==null?void 0:f.date)===Y.date?6:4,fill:E.color,stroke:"var(--surface)",strokeWidth:(f==null?void 0:f.date)===Y.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},Y.date)})]}):null]}),f?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${S/z*100}%`,top:`${x/G*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",f.date]}),t.jsxs("div",{className:"tooltip-value",children:[E.label,": ",E.format(W(f))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:Q.filter((Y,ne)=>ne===0||ne===Q.length-1||ne%re===0).map(Y=>t.jsx("span",{children:Y.date},Y.date))}),Q.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:E.summaryLabel}),t.jsx("strong",{children:E.format(K)})]}):null]})}function Mo({title:s,subtitle:i,records:o,labelKey:d}){const{t:u}=Ke(),f=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:u("dashboard.noTraffic")}):o.slice(0,8).map((m,S)=>{const v=d==="server_name"?m.server_name||u("dashboard.unnamedNode"):m.email||u("dashboard.unknownUser"),x=Number(m.total||0)/f*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:S+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[j0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(x,3)}%`}})})]},`${v}-${S}`)})})]})}function ud({label:s,current:i,previous:o}){const{t:d}=Ke();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Vn(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Vn(o):o]})]})}function E0(){var x,y,j,E,Q,W,K,z,G,R,U,I;const s=Dt(),{t:i}=Ke(),[o,d]=h.useState(null),[u,f]=h.useState(""),[m,S]=h.useState(!0),v=h.useCallback(async()=>{S(!0),f("");try{d(await n1())}catch(se){f(se instanceof Error?se.message:i("dashboard.loadFailed"))}finally{S(!1)}},[i]);return h.useEffect(()=>{if(!At()){s.replace("/login");return}v()},[v,s]),t.jsxs($t,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[u?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:u}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(zt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(vt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((x=o.override)==null?void 0:x.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(y=o.override)==null?void 0:y.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(Eo,{label:i("dashboard.onlineUsers"),value:Vn(((j=o.override)==null?void 0:j.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(Eo,{label:i("dashboard.todayIncome"),value:`${_n(((E=o.override)==null?void 0:E.day_paid_income)??((Q=o.override)==null?void 0:Q.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(Eo,{label:i("dashboard.todayRegistrations"),value:Vn(((W=o.override)==null?void 0:W.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(Eo,{label:i("dashboard.pendingCommission"),value:Vn(((K=o.override)==null?void 0:K.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(ud,{label:i("dashboard.monthIncome"),current:`${_n(((z=o.override)==null?void 0:z.month_income)??0)} VND`,previous:`${_n(((G=o.override)==null?void 0:G.last_month_income)??0)} VND`}),t.jsx(ud,{label:i("dashboard.monthCommission"),current:`${_n(((R=o.override)==null?void 0:R.commission_month_payout)??0)} VND`,previous:`${_n(((U=o.override)==null?void 0:U.commission_last_month_payout)??0)} VND`}),t.jsx(ud,{label:i("dashboard.monthRegistrations"),current:((I=o.override)==null?void 0:I.month_register_total)??0,previous:"-"})]}),t.jsx(T0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Mo,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Mo,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Mo,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Mo,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const M0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function Nh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function D0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function pd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function A0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function O0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function Pt(s){return s===!0||s===1||s==="1"}function U0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function md(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function R0({field:s,value:i,onChange:o}){const{t:d}=Ke(),u=s.toInput?s.toInput(i):U0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${Pt(i)?"on":""}`,type:"button",onClick:()=>o(Pt(i)?0:1),"aria-pressed":Pt(i),children:[t.jsx("span",{}),Pt(i)?Nh(d)[0].label:Nh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:u,onChange:f=>o(f.target.value),children:(s.options??[]).map(f=>t.jsx("option",{value:f.value,children:f.label},String(f.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:f=>o(s.fromInput?s.fromInput(f.target.value):f.target.value),placeholder:s.placeholder,rows:4,value:u}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:f=>o(s.fromInput?s.fromInput(f.target.value):f.target.value),placeholder:s.placeholder,type:s.type,value:u}):null]})]})}function H0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(u=>({label:u.name,value:u.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:u=>Number(u.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:u=>Pt(u.email_whitelist_enable),fromInput:md},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:u=>Pt(u.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:u=>Pt(u.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>Pt(u.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>Pt(u.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:u=>Pt(u.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:u=>Pt(u.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:D0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:pd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:pd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:pd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:A0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:u=>Number(u.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:md}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:O0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:md},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:u=>Pt(u.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:u=>Pt(u.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:u=>Pt(u.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"},{key:"zicnode_auto_tls_enable",label:o("config.server.zicnodeAutoTls"),description:o("config.server.zicnodeAutoTlsHelp"),type:"switch"},{key:"zicnode_auto_tls_dns_provider",label:o("config.server.zicnodeAutoTlsProvider"),description:o("config.server.zicnodeAutoTlsProviderHelp"),type:"text",placeholder:"cloudflare",visible:u=>Pt(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_dns_env",label:o("config.server.zicnodeAutoTlsDnsEnv"),description:o("config.server.zicnodeAutoTlsDnsEnvHelp"),type:"textarea",placeholder:"CF_DNS_API_TOKEN=...",visible:u=>Pt(u.zicnode_auto_tls_enable)},{key:"zicnode_auto_tls_self_fallback",label:o("config.server.zicnodeAutoTlsSelfFallback"),description:o("config.server.zicnodeAutoTlsSelfFallbackHelp"),type:"switch",visible:u=>Pt(u.zicnode_auto_tls_enable)}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(u=>({label:u,value:u}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function L0(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState("site"),[u,f]=h.useState(null),[m,S]=h.useState([]),[v,x]=h.useState([]),[y,j]=h.useState(!0),[E,Q]=h.useState(null),[W,K]=h.useState(""),z=h.useCallback(async()=>{j(!0),K("");try{const[Y,ne,he]=await Promise.all([xx(),l1(),a1()]);f(Y),S(ne),x(he)}catch(Y){K(Y instanceof Error?Y.message:i("config.loadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}z()},[z,s]),h.useEffect(()=>{const Y=document.querySelector(".config-tabs button.active");Y&&Y.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const G=h.useMemo(()=>H0({plans:m,emailTemplates:v,t:i}),[m,v,i]),R=G.find(Y=>Y.key===o)??G[0],U=(u==null?void 0:u[R.key])??{};function I(Y,ne,he){f(w=>w&&{...w,[Y]:{...w[Y],[ne]:he}})}async function se(){var Y;if(u){Q(R.key),K("");try{await gx(u[R.key]),(Y=window.showToast)==null||Y.call(window,i("config.saveSuccess"),"success")}catch(ne){K(ne instanceof Error?ne.message:i("config.saveFailed"))}finally{Q(null)}}}async function re(){var Y;Q("mail"),K("");try{await i1(),(Y=window.showToast)==null||Y.call(window,i("config.email.testSuccess"),"success")}catch(ne){K(ne instanceof Error?ne.message:i("config.email.testFailed"))}finally{Q(null)}}async function D(){var ne;const Y=String((u==null?void 0:u.telegram.telegram_bot_token)??"");Q("webhook"),K("");try{await s1(Y),(ne=window.showToast)==null||ne.call(window,i("config.telegram.webhookSuccess"),"success")}catch(he){K(he instanceof Error?he.message:i("config.telegram.webhookFailed"))}finally{Q(null)}}return t.jsxs($t,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:y,children:[t.jsx(zt,{size:16}),i(y?"common.refreshing":"common.refresh")]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,y&&!u?t.jsx(vt,{label:i("config.loading")}):null,u?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:M0.map(Y=>{const ne=G.find(he=>he.key===Y);return ne?t.jsxs("button",{className:o===Y?"active":"",type:"button",onClick:()=>d(Y),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},Y):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:R.label}),t.jsx("p",{children:R.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:E===R.key,type:"button",onClick:se,children:[t.jsx(Sn,{size:16}),E===R.key?i("config.saving"):i("config.saveTab")]})]}),R.warning?t.jsx("div",{className:"config-warning",children:R.warning}):null,t.jsx("div",{className:"config-fields",children:R.fields.map(Y=>Y.visible&&!Y.visible(U)?null:t.jsx(R0,{field:Y,value:U[Y.key],onChange:ne=>I(R.key,Y.key,ne)},Y.key))}),R.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:E==="mail",onClick:re,children:[t.jsx(ux,{size:16}),i(E==="mail"?"config.email.testing":"config.email.test")]})}):null,R.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:E==="webhook",onClick:D,children:[t.jsx(Zv,{size:16}),i(E==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(px,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Fa(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function fd(s){return s===!0||s===1||s==="1"}function q0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function B0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function G0(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[v,x]=h.useState({}),[y,j]=h.useState(!0),[E,Q]=h.useState(!1),[W,K]=h.useState(!1),[z,G]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState({}),re=h.useCallback(async()=>{j(!0),G("");try{const[A,le]=await Promise.all([o1(),r1()]);d(A),f(le),se({})}catch(A){G(A instanceof Error?A.message:i("payment.loadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}re()},[re,s]);async function D(A){const le=(A==null?void 0:A.payment)??u[0]??"",H=q0(A,le);if(S(H),x({}),G(""),U(""),!!le){Q(!0);try{x(await xh(le,A==null?void 0:A.id))}catch(F){G(F instanceof Error?F.message:i("payment.formLoadFailed"))}finally{Q(!1)}}}async function Y(A){if(m){S({...m,payment:A,config:{}}),Q(!0),G("");try{x(await xh(A,m.id))}catch(le){G(le instanceof Error?le.message:i("payment.formLoadFailed"))}finally{Q(!1)}}}async function ne(A){var le,H;if(A.preventDefault(),!!m){K(!0),G(""),U("");try{await c1(B0(m)),S(null),(le=window.showToast)==null||le.call(window,i("payment.saveSuccess"),"success"),await re()}catch(F){(H=window.showToast)==null||H.call(window,F instanceof Error?F.message:i("payment.saveFailed"),"error")}finally{K(!1)}}}async function he(A){var le;G(""),U("");try{await d1(A),await re()}catch(H){(le=window.showToast)==null||le.call(window,H instanceof Error?H.message:i("payment.toggleFailed"),"error")}}async function w(A){var le;(le=window.showConfirm)==null||le.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var H,F;G(""),U("");try{await u1(A),(H=window.showToast)==null||H.call(window,i("payment.deleteSuccess"),"success"),await re()}catch(k){(F=window.showToast)==null||F.call(window,k instanceof Error?k.message:i("payment.deleteFailed"),"error")}}})}async function L(A,le){var de;const H=A+le;if(H<0||H>=o.length)return;const F=[...o],k=F[A];F.splice(A,1),F.splice(H,0,k),d(F);try{await p1(F.map(_=>_.id)),await re()}catch(_){(de=window.showToast)==null||de.call(window,_ instanceof Error?_.message:i("payment.sortFailed"),"error"),await re()}}async function te(A){var H;const le=await Fa(A);(H=window.showToast)==null||H.call(window,i(le?"payment.copied":"common.copyFailed"),le?"success":"error")}return t.jsxs($t,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:re,disabled:y,children:[t.jsx(zt,{size:16}),t.jsx("span",{children:i(y?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void D(),children:[t.jsx(Nn,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,y&&o.length===0?t.jsx(vt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((A,le)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:A.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(le,-1),disabled:le===0,"aria-label":i("payment.moveUp"),children:t.jsx(oh,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void L(le,1),disabled:le===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(sh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${fd(A.enable)?"active":""}`,type:"button",onClick:()=>void he(A.id),"aria-label":fd(A.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:A.name}),A.icon?t.jsx("small",{children:A.icon}):null]}),t.jsx("td",{children:A.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void te(A.notify_url),children:[t.jsx("span",{children:A.notify_url}),t.jsx(ds,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void D(A),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void w(A.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},A.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((A,le)=>{const H=fd(A.enable),F=A.handling_fee_percent!==null&&A.handling_fee_percent!==""?`${A.handling_fee_percent}%`:"",k=A.handling_fee_fixed!==null?`${_n(A.handling_fee_fixed)} VND`:"",de=[F,k].filter(Boolean).join(" + ")||"No fees",_=I[A.id],N=A.icon&&!_;return t.jsxs("div",{className:`payment-mobile-card ${H?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",A.id]}),t.jsx("span",{className:"gateway-tag",children:A.payment})]}),t.jsx("button",{className:`admin-switch ${H?"active":""}`,type:"button",onClick:()=>void he(A.id),"aria-label":i(H?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[N?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:A.icon,alt:A.name,onError:()=>{se(M=>({...M,[A.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:A.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:A.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:de})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void te(A.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:A.notify_url}),t.jsx(ds,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(le,-1),disabled:le===0,"aria-label":i("payment.moveUp"),children:t.jsx(oh,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void L(le,1),disabled:le===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(sh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void D(A),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void w(A.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},A.id)}),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:A=>S({...m,name:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:A=>S({...m,icon:A.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:A=>S({...m,notify_domain:A.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:A=>S({...m,handling_fee_percent:A.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:A=>S({...m,handling_fee_fixed:A.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:A=>void Y(A.target.value),children:u.map(A=>t.jsx("option",{value:A,children:A},A))})]}),E?t.jsx(vt,{label:i("payment.formLoading")}):null,E?null:Object.entries(v).map(([A,le])=>t.jsxs("label",{children:[t.jsx("span",{children:le.label}),t.jsx("input",{className:"config-input",placeholder:le.description,value:String(m.config[A]??le.value??""),onChange:H=>S({...m,config:{...m.config,[A]:H.target.value}})})]},A)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Sn,{size:16}),i(W?"payment.saving":"common.save")]})]})]})]})}):null]})}function Y0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function $0(s,i){return i[s.field_name]??s.default_value??""}function Q0(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState(null),[u,f]=h.useState(null),[m,S]=h.useState(!0),[v,x]=h.useState(!1),[y,j]=h.useState(!1),[E,Q]=h.useState(null),[W,K]=h.useState(""),[z,G]=h.useState(""),R=h.useCallback(async()=>{S(!0),K("");try{d(await m1())}catch(D){K(D instanceof Error?D.message:i("theme.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}R()},[R,s]);async function U(D,Y){f(null),x(!0),K(""),G("");try{const ne=await f1(D);f({key:D,theme:Y,values:ne})}catch(ne){K(ne instanceof Error?ne.message:i("theme.configLoadFailed"))}finally{x(!1)}}async function I(D){Q(D),K(""),G("");try{await gx({frontend_theme:D}),G(i("theme.activateSuccess")),await R()}catch(Y){K(Y instanceof Error?Y.message:i("theme.activateFailed"))}finally{Q(null)}}async function se(D){if(D.preventDefault(),!!u){j(!0),K(""),G("");try{await h1(u.key,u.values),f(null),G(i("theme.saveSuccess")),await R()}catch(Y){K(Y instanceof Error?Y.message:i("theme.saveFailed"))}finally{j(!1)}}}function re(D,Y){f(ne=>ne&&{...ne,values:{...ne.values,[D]:Y}})}return t.jsxs($t,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:R,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),W?t.jsx("div",{className:"form-error",children:W}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&!o?t.jsx(vt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([D,Y])=>{const ne=o.active===D;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${Y0(Y)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(dx,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:Y.name||D}),t.jsx("p",{children:Y.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",Y.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void U(D,Y),children:[t.jsx(Hv,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||E===D,type:"button",onClick:()=>void I(D),children:[t.jsx(Av,{size:15}),i(ne?"theme.current":E===D?"theme.activating":"theme.activate")]})]})]},D)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(vt,{label:i("theme.configLoading")})})}):null,u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:u.theme.name||u.key})}),t.jsx("p",{children:u.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:se,children:[(u.theme.configs??[]).map(D=>{const Y=$0(D,u.values);return t.jsxs("label",{children:[t.jsx("span",{children:D.label}),D.description?t.jsx("p",{className:"field-description",children:D.description}):null,D.field_type==="select"?t.jsx("select",{className:"config-input",value:Y,onChange:ne=>re(D.field_name,ne.target.value),children:Object.entries(D.select_options??{}).map(([ne,he])=>t.jsx("option",{value:ne,children:he},ne))}):null,D.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:D.placeholder,rows:5,value:Y,onChange:ne=>re(D.field_name,ne.target.value)}):null,D.field_type!=="select"&&D.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:D.placeholder,value:Y,onChange:ne=>re(D.field_name,ne.target.value)}):null]},D.field_name)}),(u.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Sn,{size:16}),i(y?"theme.saving":"common.save")]})]})]})]})}):null]})}const Ud=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],X0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Z0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Dx=["tcp","ws","grpc"],Ax=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],K0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],Sh=["anytls","hysteria2","trojan","tuic"],J0=["tcp","ws","grpc","httpupgrade","xhttp"],V0=["chrome","firefox","safari","ios","android","edge","360","qq"],Jd=typeof window<"u"?window.location.origin:"",F0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function W0(s,i,o=""){return s[i]??o}function Ze(s,i,o=""){return String(W0(s,i,o))}function P0(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function Ox(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function I0(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function ej(s){return s==="vmess"?"networkSettings":"network_settings"}function tj(s,i){const o=s==="vmess",d=s==="vless"||ba(s),u={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...u}:u;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function ba(s){return s==="v2node"||s==="zicnode"}function Rd(s){return!!s&&s!=="shadowsocks"}function nj(s){return s==="vless"||s==="vmess"}function Hd(s){return s==="vless"||s==="anytls"}function aj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function kh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Dx:s==="vless"||s==="vmess"?J0:[]}function lj(s){var i;return ba(s)?"ZicNode":((i=Ud.find(o=>o.value===s))==null?void 0:i.label)??s}function Ld(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function ij(s){return s===!0||s===1||s==="1"||s==="true"}const sj=["dest","server_port","xver","private_key","public_key","short_id","ech","ech_server_name","ech_key","ech_config"],oj=["cert_mode","provider","dns_env","cert_file","key_file","reject_unknown_sni","auto_cert"];function ga(s,i){const o=Ox(s);if(i===0)return{};const d={...o};return delete d.allow_insecure,delete d.allowInsecure,i===1?sj.forEach(u=>delete d[u]):i===2&&oj.forEach(u=>delete d[u]),Object.keys(d).forEach(u=>{const f=d[u];(f===""||f===null||f===void 0)&&delete d[u]}),d}function rj(s){return Ld(s).replace(/\/+$/,"")||Jd}function Ch(s){return`'${s.replace(/'/g,"'\\''")}'`}function cj(s,i){const o=i.apiHost||Jd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${F0} && \\
bash install.sh --api-host ${Ch(o)} --node-id ${s} --api-key ${Ch(d)}`}function zh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function Th(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=zh(d.group_id),d.route_id=zh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Ux({initialValue:s,onCancel:i,onSave:o}){const{t:d}=Ke(),[u,f]=h.useState(()=>JSON.stringify(s??{},null,2)),[m,S]=h.useState(""),v=y=>{if(y.preventDefault(),!u.trim()){o({});return}try{const j=JSON.parse(u);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");o(j)}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}},x=y=>{if(f(y),!y.trim()){S("");return}try{const j=JSON.parse(y);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");S("")}catch(j){S(j instanceof Error?j.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:u,onChange:y=>x(y.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:u=>{u.preventDefault(),d()},children:o})]})}function dj({value:s,onChange:i,label:o}){const{t:d}=Ke(),[u,f]=h.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,S)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((v,x)=>x!==S)),style:{cursor:"pointer"},children:[m," ×"]},S)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:u,placeholder:d("node.tagPlaceholder"),onChange:m=>f(m.target.value),onKeyDown:m=>{m.key==="Enter"&&u.trim()&&(m.preventDefault(),i([...s,u.trim()]),f(""))}})]})]})}function Eh({options:s,value:i,onChange:o,label:d,actionText:u,onAction:f}){const{t:m}=Ke(),[S,v]=h.useState(""),x=s.filter(j=>i.includes(j.id)),y=s.filter(j=>j.name.toLowerCase().includes(S.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:u,onAction:f}),x.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:x.map(j=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(E=>E!==j.id)),children:[j.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:S,onChange:j=>v(j.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[y.map(j=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(j.id),onChange:E=>o(E.target.checked?[...i,j.id]:i.filter(Q=>Q!==j.id))}),t.jsx("span",{children:j.name})]},j.id)),y.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function Fn({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function uj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:u,onSave:f}){const{t:m}=Ke(),S=i?"server_name":"serverName",v=i?"allow_insecure":"allowInsecure",x=ba(d),[y,j]=h.useState(String((s==null?void 0:s[S])??"")),[E,Q]=h.useState(String((s==null?void 0:s.dest)??"")),[W,K]=h.useState(String((s==null?void 0:s.server_port)??"443")),[z,G]=h.useState(String((s==null?void 0:s.xver)??"0")),[R,U]=h.useState(String((s==null?void 0:s.private_key)??"")),[I,se]=h.useState(String((s==null?void 0:s.public_key)??"")),[re,D]=h.useState(String((s==null?void 0:s.short_id)??"")),[Y,ne]=h.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[he,w]=h.useState(String((s==null?void 0:s.pinnedPeerCertSha256)??(s==null?void 0:s.pinned_peer_cert_sha256)??"")),[L,te]=h.useState(String((s==null?void 0:s.verifyPeerCertByName)??(s==null?void 0:s.verify_peer_cert_by_name)??"")),A=String((s==null?void 0:s.cert_mode)??"").trim(),[le,H]=h.useState(x?A:A||"self"),[F,k]=h.useState(String((s==null?void 0:s.provider)??"")),[de,_]=h.useState(String((s==null?void 0:s.dns_env)??"")),[N,M]=h.useState(String((s==null?void 0:s.cert_file)??"")),[ce,me]=h.useState(String((s==null?void 0:s.key_file)??"")),[we,Se]=h.useState(()=>{const ge=s==null?void 0:s.reject_unknown_sni;return ge===1||ge===!0||String(ge)==="1"||String(ge)==="true"}),[Oe,ot]=h.useState(String((s==null?void 0:s.ech)??"")),[qe,Pe]=h.useState(String((s==null?void 0:s.ech_server_name)??"")),[Nt,St]=h.useState(String((s==null?void 0:s.ech_key)??"")),[It,gt]=h.useState(String((s==null?void 0:s.ech_config)??"")),[Qt,Ot]=h.useState(()=>{const ge=s==null?void 0:s[v];return ge===1||ge===!0||String(ge)==="1"||String(ge)==="true"}),an=ge=>{if(ge.preventDefault(),x&&o===0){f({});return}const Bt=x?ga(s,o):{},Ue=x?{...Bt,[S]:y,fingerprint:Y}:{...s??{},[S]:y,fingerprint:Y},jt=he.trim(),en=L.trim();if(jt?Ue.pinnedPeerCertSha256=jt:delete Ue.pinnedPeerCertSha256,delete Ue.pinned_peer_cert_sha256,en?Ue.verifyPeerCertByName=en:delete Ue.verifyPeerCertByName,delete Ue.verify_peer_cert_by_name,x?(delete Ue.allow_insecure,delete Ue.allowInsecure):Ue[v]=i?Qt?1:0:Qt,o===2&&(Ue.dest=E,Ue.server_port=W,Ue.xver=Number(z)||0,Ue.private_key=R,Ue.public_key=I,Ue.short_id=re,Ue.ech=Oe,Ue.ech_server_name=qe,Ue.ech_key=Nt,Ue.ech_config=It),o===1&&x){Ue.cert_mode=le;const T=s==null?void 0:s.auto_cert;T&&typeof T=="object"&&(Ue.auto_cert=T),le===""?(delete Ue.provider,delete Ue.dns_env,delete Ue.cert_file,delete Ue.key_file):(Ue.provider=F,Ue.dns_env=de,Ue.cert_file=N,Ue.key_file=ce),Ue.reject_unknown_sni=we?"1":"0"}f(x?ga(Ue,o):Ue)};return t.jsxs("form",{onSubmit:an,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.sni")}),t.jsx("input",{className:"config-input",value:y,onChange:ge=>j(ge.target.value),placeholder:m(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dest")}),t.jsx("input",{className:"config-input",value:E,onChange:ge=>Q(ge.target.value),placeholder:m("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.servicePort")}),t.jsx("input",{className:"config-input",value:W,onChange:ge=>K(ge.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:z,onChange:ge=>G(ge.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.privateKey")}),t.jsx("input",{className:"config-input",value:R,onChange:ge=>U(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.publicKey")}),t.jsx("input",{className:"config-input",value:I,onChange:ge=>se(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.shortId")}),t.jsx("input",{className:"config-input",value:re,onChange:ge=>D(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.fingerprint")}),t.jsx("select",{className:"config-input",value:Y,onChange:ge=>ne(ge.target.value),children:V0.map(ge=>t.jsx("option",{value:ge,children:ge},ge))})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.pinnedPeerCertSha256")}),t.jsx("input",{className:"config-input",value:he,onChange:ge=>w(ge.target.value),placeholder:"AA:BB:CC..."})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.verifyPeerCertByName")}),t.jsx("input",{className:"config-input",value:L,onChange:ge=>te(ge.target.value),placeholder:"example.com"})]})]}),o===1&&x?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certMode")}),t.jsxs("select",{className:"config-input",value:le,onChange:ge=>H(ge.target.value),children:[t.jsx("option",{value:"",children:m("node.certModeAuto")}),t.jsx("option",{value:"self",children:m("node.certModeSelf")}),t.jsx("option",{value:"http",children:m("node.certModeHttp")}),t.jsx("option",{value:"dns",children:m("node.certModeDns")}),t.jsx("option",{value:"file",children:m("node.certModeFile")}),t.jsx("option",{value:"none",children:m("node.certModeNone")})]})]}),le==="dns"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:F,onChange:ge=>k(ge.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:de,onChange:ge=>_(ge.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,le!==""&&le!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certFile")}),t.jsx("input",{className:"config-input",value:N,onChange:ge=>M(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.keyFile")}),t.jsx("input",{className:"config-input",value:ce,onChange:ge=>me(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsx(Fn,{label:m("node.rejectUnknownSni"),checked:we,onChange:Se})]}):null,x?null:t.jsx(Fn,{label:m("node.allowInsecure"),checked:Qt,onChange:Ot}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.ech")}),t.jsxs("select",{className:"config-input",value:Oe,onChange:ge=>ot(ge.target.value),children:[t.jsx("option",{value:"",children:m("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:m("node.echCustom")})]})]}),Oe==="cloudflare"?t.jsx("div",{className:"config-warning",children:m("node.echCloudflareHelp")}):null,Oe==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echServerName")}),t.jsx("input",{className:"config-input",value:qe,onChange:ge=>Pe(ge.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echKey")}),t.jsx("input",{className:"config-input",value:Nt,onChange:ge=>St(ge.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echConfig")}),t.jsx("input",{className:"config-input",value:It,onChange:ge=>gt(ge.target.value),placeholder:m("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:u,children:m("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function pj({draft:s,set:i,groups:o,routes:d,nodes:u,onOpenJson:f,onAddGroup:m,onOpenTransportConfig:S}){const{t:v}=Ke(),x=String(s._type),y=ba(x),j=Ze(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"name"),onChange:E=>i("name",E.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Ze(s,"rate","1"),onChange:E=>i("rate",Number(E.target.value))})]})]}),t.jsx(dj,{value:s.tags??[],onChange:E=>i("tags",E),label:v("node.tags")}),t.jsx(Eh,{options:o.map(E=>({id:E.id,name:E.name})),value:s.group_id??[],onChange:E=>i("group_id",E),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"host"),onChange:E=>i("host",E.target.value),placeholder:v("node.addressPlaceholder")})]}),y?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.listenIp")}),t.jsx("input",{className:"config-input",value:Ze(s,"listen_ip"),onChange:E=>i("listen_ip",E.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?v("node.editConfig"):void 0,onAction:()=>{const E=x==="vmess"?"tlsSettings":"tls_settings";f(v("node.connectionSecurityConfig"),E)}}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls","0"),onChange:E=>{const Q=Number(E.target.value);i("tls",Q);const W=x==="vmess"?"tlsSettings":"tls_settings";Q!==0&&!s[W]&&i(W,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),x!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(x)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Ze(s,"server_name"),onChange:E=>i("server_name",E.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"port"),onChange:E=>i("port",E.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Ze(s,"server_port"),onChange:E=>i("server_port",E.target.value),placeholder:"443"})]})]}),y?t.jsx(vj,{draft:s,set:i,onOpenJson:f,onOpenTransportConfig:S,onOpenSecurityConfig:()=>f(v("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(x)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:S}),t.jsxs("select",{className:"config-input",value:j,onChange:E=>{i("network",E.target.value);const Q=x==="vmess"?"networkSettings":"network_settings";s[Q]||i(Q,{})},children:[x==="vmess"&&X0.map(E=>t.jsx("option",{value:E,children:E},E)),x==="trojan"&&Dx.map(E=>t.jsx("option",{value:E,children:E},E)),x==="vless"&&Z0.map(E=>t.jsx("option",{value:E,children:E},E))]})]}):null,x==="trojan"&&t.jsx(fj,{draft:s,set:i}),x==="shadowsocks"&&t.jsx(hj,{draft:s,set:i,onOpenJson:f}),x==="hysteria"&&t.jsx(xj,{draft:s,set:i}),x==="tuic"&&t.jsx(gj,{draft:s,set:i}),x==="vless"&&t.jsx(bj,{draft:s,set:i,onOpenJson:f}),x==="anytls"&&t.jsx(yj,{draft:s,set:i,onOpenJson:f}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:E=>i("parent_id",E.target.value?Number(E.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),u.filter(E=>E.id!==s.id&&!E.parent_id).map(E=>t.jsx("option",{value:E.id,children:E.name},E.id))]})]}),t.jsx(Eh,{options:d.map(E=>({id:E.id,name:E.remarks})),value:s.route_id??[],onChange:E=>i("route_id",E),label:v("node.routingGroups")})]})]})}function mj({draft:s,set:i,onCancel:o,onSave:d}){const u=String(s._type),f=String(s.network??"tcp"),m=ej(u),S=s[m],v=I0(S)?Ox(S):tj(u,f);return t.jsx(Ux,{initialValue:v,onCancel:o,onSave:x=>{i(m,x),d()}})}function fj({draft:s,set:i}){const{t:o}=Ke();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function hj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ke(),u=P0(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:f=>i("cipher",f.target.value),children:Ax.map(f=>t.jsx("option",{value:f,children:f},f))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:f=>i("obfs",f.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(u.host??""),onChange:f=>i("obfs_settings",{...u,host:f.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(u.path??""),onChange:f=>i("obfs_settings",{...u,path:f.target.value}),placeholder:"/"})]})]})]})}function xj({draft:s,set:i}){const{t:o}=Ke();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Ze(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function gj({draft:s,set:i}){const{t:o}=Ke();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(Fn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(Fn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function bj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ke();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:u=>i("flow",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Ze(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:u=>i("encryption",u.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function yj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ke();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Fn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:u=>i("insecure",u?1:0)})]})}function vj({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:u}){const{t:f}=Ke(),m=Ze(s,"protocol"),S=kh(m),v=x=>{if(i("protocol",x),!x){i("tls",0),i("network","tcp");return}Sh.includes(x)?(i("tls",1),s.tls_settings||i("tls_settings",{})):x==="shadowsocks"?i("tls",0):x==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const y=kh(x);(y.length===0||!y.includes(Ze(s,"network","tcp")))&&i("network","tcp"),x!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),x!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),x!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:m,onChange:x=>v(x.target.value),children:[t.jsx("option",{value:"",children:f("node.selectNodeProtocol")}),K0.map(x=>t.jsx("option",{value:x,children:x},x))]})]}),m?t.jsxs(t.Fragment,{children:[Rd(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?f("node.editConfig"):void 0,onAction:u}),t.jsxs("select",{className:"config-input",value:Ze(s,"tls",Sh.includes(m)?"1":"0"),onChange:x=>{const y=Number(x.target.value);i("tls",y),y!==0&&!s.tls_settings&&i("tls_settings",{})},children:[nj(m)?t.jsx("option",{value:"0",children:f("node.none")}):null,t.jsx("option",{value:"1",children:f("node.useTls")}),Hd(m)?t.jsx("option",{value:"2",children:f("node.reality")}):null]})]}):null,aj(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.transportProtocol"),required:!0,actionText:f("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:S.includes(Ze(s,"network","tcp"))?Ze(s,"network","tcp"):"tcp",onChange:x=>{i("network",x.target.value),s.network_settings||i("network_settings",{})},children:S.map(x=>t.jsx("option",{value:x,children:x},x))})]}):null]}):null,m==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.encryption"),actionText:Ze(s,"encryption")?f("node.editConfig"):void 0,onAction:()=>o(f("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Ze(s,"encryption"),onChange:x=>i("encryption",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.flow")}),t.jsxs("select",{className:"config-input",value:Ze(s,"flow"),onChange:x=>i("flow",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),m==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Ze(s,"cipher","aes-128-gcm"),onChange:x=>i("cipher",x.target.value),children:Ax.map(x=>t.jsx("option",{value:x,children:x},x))})]}),m==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"up_mbps","0"),onChange:x=>i("up_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Ze(s,"down_mbps","0"),onChange:x=>i("down_mbps",Number(x.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Ze(s,"obfs"),onChange:x=>i("obfs",x.target.value||null),children:[t.jsx("option",{value:"",children:f("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Ze(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Ze(s,"obfs_password"),onChange:x=>i("obfs_password",x.target.value),placeholder:f("node.autoGenHelp")})]}):null]})]}),m==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Ze(s,"udp_relay_mode","native"),onChange:x=>i("udp_relay_mode",x.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:f("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Ze(s,"congestion_control","bbr"),onChange:x=>i("congestion_control",x.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:f("node.disableSni"),checked:s.disable_sni===1,onChange:x=>i("disable_sni",x?1:0)}),t.jsx(Fn,{label:f("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:x=>i("zero_rtt_handshake",x?1:0)})]}),m==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:f("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:f("node.paddingScheme"),actionText:f("node.editConfig"),onAction:()=>o(f("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const Mh={vmess:qv,vless:Jv,trojan:Ed,shadowsocks:Go,hysteria:Uv,tuic:vv,anytls:fs,v2node:dh,zicnode:dh},jj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},wj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Qa(s){return jj[s]??wj}function _j({draft:s,config:i,onCopy:o,t:d}){const u=Number(s.id??0),f=u>0?cj(u,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),u>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:f}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(f),children:[t.jsx(ds,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function Nj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState([]),[v,x]=h.useState(null),[y,j]=h.useState(null),[E,Q]=h.useState(!0),[W,K]=h.useState(!1),[z,G]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState(1),[re,D]=h.useState(10),[Y,ne]=h.useState(!1),[he,w]=h.useState({}),[L,te]=h.useState({apiHost:Jd,apiKey:""}),[A,le]=h.useState(!1),[H,F]=h.useState(""),[k,de]=h.useState(null),[_,N]=h.useState(null),[M,ce]=h.useState(null),me=(q,oe)=>{q.dataTransfer.effectAllowed="move",N(oe)},we=(q,oe)=>{if(q.preventDefault(),_===null||_===oe)return;const ee=[...o],ke=ee[_];ee.splice(_,1),ee.splice(oe,0,ke),N(oe),d(ee)},Se=()=>{N(null)},Oe=(q,oe)=>{Y&&ce(oe)},ot=q=>{if(!Y||M===null)return;q.cancelable&&q.preventDefault();const oe=q.touches[0],ee=document.elementFromPoint(oe.clientX,oe.clientY);if(!ee)return;const ke=ee.closest(".mobile-node-card");if(!ke)return;const Ye=ke.getAttribute("data-index");if(Ye===null)return;const et=Number(Ye);if(et!==M&&et>=0&&et<o.length){const ft=[...o],ct=ft[M];ft.splice(M,1),ft.splice(et,0,ct),ce(et),d(ft)}},qe=()=>{ce(null)};h.useEffect(()=>{se(1)},[H,re]);const Pe=o.filter(q=>{const oe=H.toLowerCase().trim();return oe?q.name.toLowerCase().includes(oe)||q.host.toLowerCase().includes(oe)||String(q.id).includes(oe)||q.type.toLowerCase().includes(oe):!0}),Nt=Math.ceil(Pe.length/re),St=Pe.slice((I-1)*re,I*re);function It(q,oe){return oe<=7?Array.from({length:oe},(ee,ke)=>ke+1):q<=4?[1,2,3,4,5,"...",oe]:q>=oe-3?[1,"...",oe-4,oe-3,oe-2,oe-1,oe]:[1,"...",q-1,q,q+1,"...",oe]}const gt=It(I,Nt),Qt=async()=>{var q,oe;K(!0),G(""),U("");try{const ee={};o.forEach((ke,Ye)=>{ee[ke.type]||(ee[ke.type]={}),ee[ke.type][String(ke.id)]=Ye+1}),await f0(ee),(q=window.showToast)==null||q.call(window,i("node.saveSortSuccess"),"success"),ne(!1),await Me()}catch(ee){G(ee instanceof Error?ee.message:i("node.saveSortFailed")),(oe=window.showToast)==null||oe.call(window,ee instanceof Error?ee.message:i("node.saveSortFailed"),"error")}finally{K(!1)}},Ot=async()=>{ne(!1),await _e()},an=()=>Pe.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===1,onClick:()=>se(q=>Math.max(q-1,1)),children:"<"}),gt.map((q,oe)=>q==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${oe}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${I===q?"active":""}`,onClick:()=>se(Number(q)),children:q},`page-${q}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:I===Nt||Nt===0,onClick:()=>se(q=>Math.min(q+1,Nt)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:re,onChange:q=>D(Number(q.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[ge,Bt]=h.useState(null),[Ue,jt]=h.useState(!1),[en,T]=h.useState(""),[ye,Be]=h.useState(!1),[ve,rt]=h.useState(!1);async function $(q){var ee,ke;q.preventDefault();const oe=en.trim();if(!(!oe||!v)){Be(!0),G(""),U("");try{await bx({name:oe});const Ye=await ms();f(Ye);const et=Ye.filter(ft=>ft.name===oe).sort((ft,ct)=>ct.id-ft.id)[0];if(et){const ft=v.group_id??[];ft.includes(et.id)||fn("group_id",[...ft,et.id])}T(""),jt(!1),(ee=window.showToast)==null||ee.call(window,i("node.groupCreateSuccess"),"success")}catch(Ye){G(Ye instanceof Error?Ye.message:i("node.groupCreateFailed")),(ke=window.showToast)==null||ke.call(window,Ye instanceof Error?Ye.message:i("node.groupCreateFailed"),"error")}finally{Be(!1)}}}const Ne=(q,oe)=>{if(!v)return;let ee=v[oe];if(typeof ee=="string"&&ee.trim())try{ee=JSON.parse(ee)}catch{}["tlsSettings","tls_settings"].includes(oe)&&ba(String(v._type))&&(ee=ga(ee,Number(v.tls??0))),Bt({title:q,key:oe,value:ee&&typeof ee=="object"?ee:{}})},_e=h.useCallback(async()=>{var q,oe,ee,ke;Q(!0),G("");try{const[Ye,et,ft,ct]=await Promise.all([yh(),ms(),vx(),xx()]);d(Ye.data),f(et),S(ft),te({apiHost:rj((q=ct.site)==null?void 0:q.app_url),apiKey:Ld((oe=ct.server)==null?void 0:oe.server_token)}),le(ij(((ee=ct.subscribe)==null?void 0:ee.device_hwid_available)??((ke=ct.subscribe)==null?void 0:ke.device_hwid_enable)))}catch(Ye){G(Ye instanceof Error?Ye.message:i("knowledge.loadFailed"))}finally{Q(!1)}},[]),Me=h.useCallback(async()=>{try{const q=await yh();d(q.data)}catch(q){console.error("Refresh nodes failed",q)}},[]);async function Ie(q){var ee;const oe=await Fa(q);(ee=window.showToast)==null||ee.call(window,i(oe?"node.installCopied":"common.copyFailed"),oe?"success":"error")}h.useEffect(()=>{if(!At()){s.replace("/login");return}_e()},[_e,s]);function Je(q){x(Th(q)),j(null),G(""),U("")}function $e(q){x(Th(q.type,q)),G(""),U("")}function Re(q){!A||Number(q.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(q.type)}&node_id=${encodeURIComponent(String(q.id))}`)}function mt(q,oe){const ee=Number(q.online??0),ke=A&&ee>0,Ye=`${oe==="mobile"?"mobile-badge-pill":"online-badge"}${ke?" online-badge-link":""}`,et=oe==="mobile"?12:13,ft={...oe==="mobile"?{marginRight:4}:{},color:ee>0?"#10b981":"var(--muted)",opacity:ee>0?1:.6},ct=t.jsxs(t.Fragment,{children:[t.jsx(mx,{size:et,style:ft}),ee]});return ke?t.jsx("button",{className:Ye,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Re(q),children:ct}):t.jsx("span",{className:Ye,children:ct})}async function ci(q){var et,ft,ct;if(q.preventDefault(),!v)return;K(!0),G(""),U("");const oe=String(v._type),ee={...v};if(ba(oe)&&!Ld(ee.protocol)){G(i("node.protocolRequired")),(et=window.showToast)==null||et.call(window,i("node.protocolRequired"),"error"),K(!1);return}for(const De of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete ee[De];if(ee.padding_scheme!==void 0&&ee.padding_scheme!==null&&typeof ee.padding_scheme!="string"&&(ee.padding_scheme=JSON.stringify(ee.padding_scheme)),ee.padding_scheme)try{const De=JSON.parse(String(ee.padding_scheme));if(typeof De!="object"||De===null)throw new Error("Invalid JSON array or object")}catch(De){G("Invalid Padding Scheme configuration: "+(De instanceof Error?De.message:"JSON error")),K(!1);return}const ke=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const De of ke)(ee[De]===""||ee[De]===null||ee[De]===void 0)&&delete ee[De];if(ba(oe)){const De=String(ee.protocol??""),on=Number(ee.tls??0);Rd(De)?!Hd(De)&&on===2?(ee.tls=1,ee.tls_settings=ga(ee.tls_settings,1)):ee.tls_settings=ga(ee.tls_settings,on):(ee.tls=0,ee.tls_settings={})}const Ye=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const De of Ye){const on=ee[De];(on==null||typeof on=="object"&&Object.keys(on).length===0)&&delete ee[De]}ee.port!==void 0&&(ee.port=Number(ee.port)),ee.server_port!==void 0&&(ee.server_port=Number(ee.server_port)),ee.tls!==void 0&&(ee.tls=Number(ee.tls)),ee.rate!==void 0&&(ee.rate=Number(ee.rate));try{await d0(oe,ee),x(null),(ft=window.showToast)==null||ft.call(window,i("node.saveSuccess"),"success"),await Me()}catch(De){G(De instanceof Error?De.message:i("node.saveFailed")),(ct=window.showToast)==null||ct.call(window,De instanceof Error?De.message:i("node.saveFailed"),"error")}finally{K(!1)}}async function wl(q){const oe=[...o];d(ee=>ee.map(ke=>ke.id===q.id&&ke.type===q.type?{...ke,show:q.show?0:1}:ke));try{await p0(q.type,q.id,q.show?0:1),await Me()}catch(ee){d(oe),G(ee instanceof Error?ee.message:i("node.updateFailed"))}}async function Ia(q){var oe,ee;try{await m0(q.type,q.id),(oe=window.showToast)==null||oe.call(window,i("node.copySuccess"),"success"),await Me()}catch(ke){G(ke instanceof Error?ke.message:i("node.copyFailed")),(ee=window.showToast)==null||ee.call(window,ke instanceof Error?ke.message:i("node.copyFailed"),"error")}}async function Gn(q){var oe;(oe=window.showConfirm)==null||oe.call(window,{message:i("node.deleteConfirm",{name:q.name}),onConfirm:async()=>{var ke,Ye;const ee=[...o];d(et=>et.filter(ft=>!(ft.id===q.id&&ft.type===q.type))),G("");try{await u0(q.type,q.id),(ke=window.showToast)==null||ke.call(window,i("node.deleteSuccess"),"success"),await Me()}catch(et){d(ee),G(et instanceof Error?et.message:i("node.deleteFailed")),(Ye=window.showToast)==null||Ye.call(window,et instanceof Error?et.message:i("node.deleteFailed"),"error")}}})}const fn=(q,oe)=>x(ee=>{if(!ee)return null;const ke={...ee,[q]:oe};if(!ba(String(ke._type)))return ke;if(q==="tls_settings"&&(ke.tls_settings=ga(oe,Number(ke.tls??0))),q==="tls"&&(ke.tls_settings=ga(ke.tls_settings,Number(oe))),q==="protocol"){const Ye=String(oe);Rd(Ye)?!Hd(Ye)&&Number(ke.tls??0)===2?(ke.tls=1,ke.tls_settings=ga(ke.tls_settings,1)):ke.tls_settings=ga(ke.tls_settings,Number(ke.tls??0)):(ke.tls=0,ke.tls_settings={})}return ke}),Yn=v?String(v._type):"",sn=lj(Yn);return t.jsxs($t,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(Nn,{size:18})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ud.map(q=>{const oe=Qa(q.value),ee=Mh[q.value]||Yo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Je(q.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:H,onChange:q=>F(q.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${Y?"success-btn":""}`,type:"button",onClick:Y?Qt:()=>ne(!0),disabled:W,children:i(Y?W?"node.saving":"node.saveOrder":"node.editSortOrder")}),Y&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Ot,children:i("common.cancel")})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i(Y?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[St.map(q=>{const oe=o.findIndex(ee=>ee.id===q.id&&ee.type===q.type);return t.jsxs("tr",{draggable:Y,onDragStart:ee=>me(ee,oe),onDragOver:ee=>we(ee,oe),onDragEnd:Se,className:_===oe?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Qa(q.type).bg,color:Qa(q.type).text,border:`1px solid ${Qa(q.type).border}`},children:q.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${q.show?"active":""}`,type:"button",onClick:()=>void wl(q),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:q.name})]})}),t.jsx("td",{children:mt(q,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:q.host})}),t.jsx("td",{className:"mobile-hide",children:String(q.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[q.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const ee=q.group_id??[],ke=he[`${q.type}-${q.id}`],Ye=ee.map(ct=>{const De=u.find(on=>Number(on.id)===Number(ct));return t.jsx("span",{className:"tag",children:(De==null?void 0:De.name)??`#${ct}`},ct)});if(ee.length<=3||ke)return t.jsxs(t.Fragment,{children:[Ye,ee.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>w(ct=>({...ct,[`${q.type}-${q.id}`]:!1})),children:i("node.collapse")})]});const et=Ye.slice(0,3),ft=ee.length-3;return t.jsxs(t.Fragment,{children:[et,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>w(ct=>({...ct,[`${q.type}-${q.id}`]:!0})),children:["+",ft,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:ee.length})}),Ye]})]})]})})()})}),t.jsx("td",{children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(os,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{$e(q),de(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ia(q),de(null)},children:[t.jsx(ds,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(q),de(null)},children:[t.jsx(Yt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${q.type}-${q.id}`)}),!E&&Pe.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),an()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(Nn,{size:20})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ud.map(q=>{const oe=Qa(q.value),ee=Mh[q.value]||Yo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Je(q.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:oe==null?void 0:oe.bg,backgroundColor:oe==null?void 0:oe.rowBg},children:t.jsx(ee,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(oe==null?void 0:oe.bg)??"var(--surface-soft)",color:(oe==null?void 0:oe.text)??"#ffffff"},children:q.label})]},q.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:H,onChange:q=>F(q.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${Y?"active":""}`,type:"button",onClick:()=>ne(!Y),title:i("node.editSortOrder"),children:t.jsx(os,{size:20})})]}),Y&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Ot,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void Qt(),disabled:W,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(W?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[St.map(q=>{const oe=o.findIndex(ee=>ee.id===q.id&&ee.type===q.type);return t.jsxs("div",{className:`mobile-node-card ${_===oe||M===oe?"dragging":""}`,draggable:Y,onDragStart:ee=>me(ee,oe),onDragOver:ee=>we(ee,oe),onDragEnd:Se,onTouchStart:ee=>Oe(ee,oe),onTouchMove:ot,onTouchEnd:qe,"data-index":oe,style:Y?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${q.available_status??0}`,title:q.available_status===2?i("node.statusNormal"):q.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:q.name})]}),t.jsx("div",{className:"card-header-right",children:Y?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(os,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${q.show===1?"active":""}`,onClick:()=>void wl(q),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>de((k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type?null:{id:q.id,type:q.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(k==null?void 0:k.id)===q.id&&(k==null?void 0:k.type)===q.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>de(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{$e(q),de(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ia(q),de(null)},children:[t.jsx(ds,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(q),de(null)},children:[t.jsx(Yt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[q.host,":",q.port||q.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Qa(q.type).bg,color:Qa(q.type).text,border:`1px solid ${Qa(q.type).border}`},children:q.id}),mt(q,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[q.rate," x"]})]})]},`${q.type}-${q.id}`)}),!E&&Pe.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),an()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("node.editNodeTitle",{type:sn}):i("node.createNodeTitle",{type:sn})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:sn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>x(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ci,children:[t.jsx(pj,{draft:v,set:fn,groups:u,routes:m,nodes:o,onOpenJson:Ne,onAddGroup:()=>jt(!0),onOpenTransportConfig:()=>rt(!0)}),ba(Yn)?t.jsx(_j,{draft:v,config:L,onCopy:q=>void Ie(q),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>x(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Sn,{size:16}),i(W?"node.saving":"common.save")]})]})]})]})}),ge!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:ge.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(ge.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Bt(null),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(ge.key)?t.jsx(uj,{initialValue:ge.value,isSnakeCase:ge.key==="tls_settings",tlsMode:Number((v==null?void 0:v.tls)??0),nodeType:String((v==null?void 0:v._type)??""),onCancel:()=>Bt(null),onSave:q=>{fn(ge.key,q),Bt(null)}}):t.jsx(Ux,{initialValue:ge.value,onCancel:()=>Bt(null),onSave:q=>{fn(ge.key,q),Bt(null)}})})]})}),Ue&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>jt(!1),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{onSubmit:$,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:en,onChange:q=>T(q.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>jt(!1),disabled:ye,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ye||!en.trim(),children:i(ye?"node.saving":"common.confirm")})]})]})]})}),ve&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>rt(!1),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(mj,{draft:v,set:fn,onCancel:()=>rt(!1),onSave:()=>rt(!1)})})]})})]})}function Sj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[v,x]=h.useState(!1),[y,j]=h.useState(""),E=h.useCallback(async()=>{S(!0),j("");try{d(await ms())}catch(z){j(z instanceof Error?z.message:i("serverGroup.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}E()},[E,s]);function Q(z){f({id:z==null?void 0:z.id,name:(z==null?void 0:z.name)??""}),j("")}async function W(z){var G;if(z.preventDefault(),!!u){x(!0),j("");try{await bx(u),f(null),(G=window.showToast)==null||G.call(window,i("serverGroup.saveSuccess"),"success"),await E()}catch(R){j(R instanceof Error?R.message:i("serverGroup.saveFailed"))}finally{x(!1)}}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await x1(z),(R=window.showToast)==null||R.call(window,i("serverGroup.deleteSuccess"),"success"),await E()}catch(I){j(I instanceof Error?I.message:i("serverGroup.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Q(),children:[t.jsx(Nn,{size:16}),i("serverGroup.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(vt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(ps,{size:14}),z.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Yo,{size:14}),z.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Q(z),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:u.name,onChange:z=>f({...u,name:z.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sn,{size:16}),i(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function kj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function Cj(s){var i;return((i=yx.find(o=>o.value===s))==null?void 0:i.label)??s}function zj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[v,x]=h.useState(!1),[y,j]=h.useState(""),E=h.useCallback(async()=>{S(!0),j("");try{d(await vx())}catch(z){j(z instanceof Error?z.message:i("serverRoute.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}E()},[E,s]);function Q(z){f(kj(z)),j("")}async function W(z){var R;if(z.preventDefault(),!u)return;x(!0),j("");const G=u.action==="default_out"?[]:u.match.split(`
`).map(U=>U.trim()).filter(Boolean);try{await g1({id:u.id,remarks:u.remarks,match:G,action:u.action,action_value:u.action_value||null}),f(null),(R=window.showToast)==null||R.call(window,i("serverRoute.saveSuccess"),"success"),await E()}catch(U){j(U instanceof Error?U.message:i("serverRoute.saveFailed"))}finally{x(!1)}}async function K(z){var G;(G=window.showConfirm)==null||G.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var R,U;j("");try{await b1(z),(R=window.showToast)==null||R.call(window,i("serverRoute.deleteSuccess"),"success"),await E()}catch(I){j(I instanceof Error?I.message:i("serverRoute.deleteFailed")),(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:m,children:[t.jsx(zt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Q(),children:[t.jsx(Nn,{size:16}),i("serverRoute.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(vt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(z=>t.jsxs("tr",{children:[t.jsx("td",{children:z.id}),t.jsx("td",{children:t.jsx("strong",{children:z.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(z.match)?z.match:[]).slice(0,3).map((G,R)=>t.jsx("span",{className:"tag",children:G},R)),Array.isArray(z.match)&&z.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",z.match.length-3]}):null,!Array.isArray(z.match)||z.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:Cj(z.action)})}),t.jsx("td",{children:z.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Q(z),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(z.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},z.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:W,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:u.remarks,onChange:z=>f({...u,remarks:z.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:u.action,onChange:z=>f({...u,action:z.target.value}),children:yx.map(z=>t.jsx("option",{value:z.value,children:z.label},z.value))})]}),u.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:u.match,onChange:z=>f({...u,match:z.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:u.action_value,onChange:z=>f({...u,action_value:z.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sn,{size:16}),i(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function Tj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",allow_subscribe_url:(s==null?void 0:s.allow_subscribe_url)===0?"0":"1",force_update:!1}}function Ej(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),allow_subscribe_url:s.allow_subscribe_url==="0"?0:1,force_update:s.force_update}}function nn(s){return s==null?"—":_n(s)}function Mj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Dj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[v,x]=h.useState(!0),[y,j]=h.useState(!1),[E,Q]=h.useState(""),[W,K]=h.useState(""),[z,G]=h.useState(null),[R,U]=h.useState(null),I=(_,N)=>{_.dataTransfer.effectAllowed="move",G(N)},se=(_,N)=>{if(_.preventDefault(),z===null||z===N)return;const M=[...o],ce=M[z];M.splice(z,1),M.splice(N,0,ce),G(N),d(M)},re=async()=>{G(null);try{await gh(o.map(_=>_.id)),await he()}catch(_){Q(_ instanceof Error?_.message:i("plan.sortFailed")),await he()}},D=(_,N)=>{U(N)},Y=_=>{if(R===null)return;const N=_.touches[0],M=document.elementFromPoint(N.clientX,N.clientY);if(!M)return;const ce=M.closest("tr, [data-index]");if(!ce)return;const me=ce.getAttribute("data-index");if(me===null)return;const we=Number(me);if(we!==R&&we>=0&&we<o.length){const Se=[...o],Oe=Se[R];Se.splice(R,1),Se.splice(we,0,Oe),U(we),d(Se)}},ne=async()=>{if(R!==null){U(null);try{await gh(o.map(_=>_.id)),await he()}catch(_){Q(_ instanceof Error?_.message:i("plan.sortFailed")),await he()}}},he=h.useCallback(async()=>{x(!0),Q("");try{const[_,N]=await Promise.all([jl(),ms()]);d(_),f(N)}catch(_){Q(_ instanceof Error?_.message:i("plan.loadFailed"))}finally{x(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}he()},[he,s]);function w(_){S(Tj(_)),Q(""),K("")}async function L(_){var N,M;if(_.preventDefault(),!!m){j(!0),Q(""),K("");try{await y1(Ej(m)),S(null),(N=window.showToast)==null||N.call(window,i("plan.saveSuccess"),"success"),await he()}catch(ce){(M=window.showToast)==null||M.call(window,ce instanceof Error?ce.message:i("plan.saveFailed"),"error")}finally{j(!1)}}}async function te(_,N){var M;try{await dd(_,{show:N?0:1}),await he()}catch(ce){(M=window.showToast)==null||M.call(window,ce instanceof Error?ce.message:i("plan.toggleFailed"),"error")}}async function A(_,N){var M;try{await dd(_,{renew:N?0:1}),await he()}catch(ce){(M=window.showToast)==null||M.call(window,ce instanceof Error?ce.message:i("plan.toggleFailed"),"error")}}async function le(_,N){var M;try{await dd(_,{allow_subscribe_url:N?0:1}),await he()}catch(ce){(M=window.showToast)==null||M.call(window,ce instanceof Error?ce.message:i("plan.toggleFailed"),"error")}}async function H(_){var N;(N=window.showConfirm)==null||N.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var M,ce;Q(""),K("");try{await v1(_),(M=window.showToast)==null||M.call(window,i("plan.deleteSuccess"),"success"),await he()}catch(me){(ce=window.showToast)==null||ce.call(window,me instanceof Error?me.message:i("plan.deleteFailed"),"error")}}})}function F(_){var N;return((N=u.find(M=>M.id===_))==null?void 0:N.name)??`#${_}`}function k(_){return Number(_.allow_subscribe_url??1)===1}function de(_,N){S(M=>M&&{...M,[_]:N})}return t.jsxs($t,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:he,disabled:v,children:[t.jsx(zt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(),children:[t.jsx(Nn,{size:16}),i("plan.add")]})]})]}),E?t.jsx("div",{className:"form-error",children:E}):null,W?t.jsx("div",{className:"form-success",children:W}):null,v&&o.length===0?t.jsx(vt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.allowSubscribeUrl")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((_,N)=>t.jsxs("tr",{draggable:!0,onDragStart:M=>I(M,N),onDragOver:M=>se(M,N),onDragEnd:re,onTouchStart:M=>D(M,N),onTouchMove:Y,onTouchEnd:ne,"data-index":N,className:z===N||R===N?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(os,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),te(_.id,_.show)},title:_.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),A(_.id,_.renew)},title:_.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${k(_)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),le(_.id,k(_)?1:0)},title:k(_)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:_.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(ps,{size:14}),_.count??0]})}),t.jsx("td",{children:F(_.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:nn(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:nn(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:nn(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:nn(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:nn(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:nn(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:nn(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:nn(_.reset_price)})]})]})}),t.jsxs("td",{children:[_.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:M=>{M.stopPropagation(),w(_)},children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:M=>{M.stopPropagation(),H(_.id)},children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},_.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:11,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((_,N)=>t.jsxs("div",{className:`mobile-node-card ${z===N||R===N?"dragging":""}`,draggable:!0,onDragStart:M=>I(M,N),onDragOver:M=>se(M,N),onDragEnd:re,onTouchStart:M=>D(M,N),onTouchMove:Y,onTouchEnd:ne,"data-index":N,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(os,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:_.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:_.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),w(_)},children:[t.jsx(qt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:M=>{M.stopPropagation(),H(_.id)},children:[t.jsx(Yt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${_.show?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),te(_.id,_.show)},title:_.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${_.renew?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),A(_.id,_.renew)},title:_.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.allowSubscribeUrl")}),t.jsx("button",{className:`admin-switch ${k(_)?"active":""}`,type:"button",onClick:M=>{M.stopPropagation(),le(_.id,k(_)?1:0)},title:k(_)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(ps,{size:12,style:{marginRight:4}}),_.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:F(_.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[_.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[_.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:nn(_.month_price)})]}),_.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:nn(_.quarter_price)})]}),_.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:nn(_.half_year_price)})]}),_.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:nn(_.year_price)})]}),_.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:nn(_.two_year_price)})]}),_.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:nn(_.three_year_price)})]}),_.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:nn(_.onetime_price)})]}),_.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:nn(_.reset_price)})]})]})]},_.id)),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:L,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:_=>de("name",_.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:_=>de("content",_.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:_=>de("group_id",_.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),u.map(_=>t.jsx("option",{value:_.id,children:_.name},_.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:_=>de("transfer_enable",_.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:_=>de("device_limit",_.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:_=>de("speed_limit",_.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:_=>de("capacity_limit",_.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:_=>de("reset_traffic_method",_.target.value),children:Mj(i).map(_=>t.jsx("option",{value:_.value,children:_.label},_.value))})]})]}),t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.allow_subscribe_url==="1",onChange:_=>de("allow_subscribe_url",_.target.checked?"1":"0")}),t.jsx("span",{children:i("plan.allowSubscribeUrl")})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:_=>de("month_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:_=>de("quarter_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:_=>de("half_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:_=>de("year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:_=>de("two_year_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:_=>de("three_year_price",_.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:_=>de("onetime_price",_.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:_=>de("reset_price",_.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:_=>de("force_update",String(_.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Sn,{size:16}),i(y?"plan.saving":"common.save")]})]})]})]})}):null]})}const hd="模糊",Dh={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Ah={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Oh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),f=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${u} ${f}:${m}`}function Uh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),u=String(i.getDate()).padStart(2,"0"),f=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),S=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${u} ${f}:${m}:${S}`}function Rh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Hn(s){return`${_n(Number(s??0))} ₫`}const Rx="adminzic_user_cache";function Aj(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Rx);return s?JSON.parse(s):{}}catch{return{}}}function Oj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Rx,JSON.stringify(s))}catch{}}const si=(s,i)=>`${s}:${i}`;function Uj(){var T,ye,Be,ve,rt;const s=Dt(),i=Wn(),{t:o}=Ke(),d=h.useCallback($=>{switch($){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${$}`,cls:""}}},[o]),u=h.useCallback($=>{const Ne=`order.period.${$}`,_e=o(Ne);return _e===Ne?Ah[$]??$:_e},[o]),[f,m]=h.useState([]),[S,v]=h.useState([]),[x,y]=h.useState({}),[j,E]=h.useState(0),[Q,W]=h.useState(1),[K]=h.useState(15),[z,G]=h.useState(""),[R,U]=h.useState("trade_no"),[I,se]=h.useState(!0),[re,D]=h.useState(null),[Y,ne]=h.useState(!1),[he,w]=h.useState(""),[L,te]=h.useState(""),[A,le]=h.useState(null),[H,F]=h.useState(null),[k,de]=h.useState(!1),[_,N]=h.useState(null),[M,ce]=h.useState(!1),[me,we]=h.useState(()=>Aj()),Se=h.useCallback(($,Ne)=>{const _e=si(Ne,$);F(null),le(Me=>Me===_e?null:_e)},[]),Oe=h.useCallback(($,Ne)=>{const _e=si(Ne,$);le(null),F(Me=>Me===_e?null:_e)},[]),ot=h.useCallback($=>{const Ne=Number($.coupon_id??0);return Ne?x[Ne]??`#${Ne}`:null},[x]);h.useEffect(()=>{if(!A&&!H)return;const $=()=>{le(null),F(null)},Ne=Me=>{const Ie=Me.target;Ie!=null&&Ie.closest(".order-dropdown-trigger, .order-dropdown-menu")||$()},_e=Me=>{Me.key==="Escape"&&$()};return document.addEventListener("pointerdown",Ne),document.addEventListener("keydown",_e),()=>{document.removeEventListener("pointerdown",Ne),document.removeEventListener("keydown",_e)}},[A,H]),h.useEffect(()=>{const $=new Set;if(f.forEach(_e=>{_e.user_id&&!me[_e.user_id]&&$.add(_e.user_id),_e.invite_user_id&&!me[_e.invite_user_id]&&$.add(_e.invite_user_id)}),_&&(_.user_id&&!me[_.user_id]&&$.add(_.user_id),_.invite_user_id&&!me[_.invite_user_id]&&$.add(_.invite_user_id)),$.size===0)return;const Ne=Array.from($);Promise.allSettled(Ne.map(async _e=>{try{const Me=await _x(_e);if(Me&&Me.data)return{id:_e,email:Me.data.email,invite_user:Me.data.invite_user}}catch(Me){console.error(`Failed to fetch user ${_e}:`,Me)}return null})).then(_e=>{const Me={};_e.forEach(Ie=>{var Je;if(Ie.status==="fulfilled"&&Ie.value){const $e=Ie.value;Me[$e.id]={email:$e.email,invite_user_email:((Je=$e.invite_user)==null?void 0:Je.email)||null},$e.invite_user&&(Me[$e.invite_user.id]={email:$e.invite_user.email})}}),Object.keys(Me).length>0&&we(Ie=>{const Je={...Ie,...Me};return Oj(Je),Je})})},[f,_,me]);const qe={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},Pe=h.useCallback(async($=1,Ne,_e)=>{var Me,Ie;se(!0),w("");try{let Je;if(Ne)if(_e==="email"){const mt=(Me=(await Ad(1,1,[{key:"email",condition:hd,value:Ne}])).data)==null?void 0:Me[0];if(!mt){m([]),E(0),se(!1);return}Je=[{key:"user_id",condition:"=",value:String(mt.id)}]}else if(_e==="invite_user_email"){const mt=(Ie=(await Ad(1,1,[{key:"email",condition:hd,value:Ne}])).data)==null?void 0:Ie[0];if(!mt){m([]),E(0),se(!1);return}Je=[{key:"invite_user_id",condition:"=",value:String(mt.id)}]}else Je=[{key:_e||"trade_no",condition:_e==="trade_no"||_e==="user_id"||_e==="invite_user_id"||_e==="plan_id"||_e==="status"?"=":hd,value:Ne}];const $e=await j1({current:$,pageSize:K,filter:Je});m($e.data),E($e.total)}catch(Je){w(Je instanceof Error?Je.message:o("order.loadFailed"))}finally{se(!1)}},[K,o]),Nt=h.useCallback($=>{const Ne=String($);U("user_id"),G(Ne),de(!0),W(1),Pe(1,Ne,"user_id")},[Pe]);h.useEffect(()=>{if(!At()){s.replace("/login");return}const $=new URLSearchParams(i.search),Ne=$.get("filter_email"),_e=$.get("invite_user_email"),Me=$.get("user_id")||$.get("filter_user_id");let Ie="",Je="trade_no";Me?(Ie=Me,Je="user_id",U("user_id"),G(Me),de(!0)):Ne?(Ie=Ne,Je="email",U("email"),G(Ne),de(!0)):_e&&(Ie=_e,Je="invite_user_email",U("invite_user_email"),G(_e),de(!0)),Pe(1,Ie,Je),jl().then(v).catch(()=>{}),wx(1,1e3).then($e=>{const Re={};$e.data.forEach(mt=>{Re[mt.id]=mt.code}),y(Re)}).catch(()=>{})},[Pe,s,i.search]);function St(){W(1),Pe(1,z,R)}function It(){G(""),W(1),Pe(1)}function gt($){W($),Pe($,z,R)}async function Qt($){var Ne,_e;le(null),F(null),w(""),te("");try{await w1($),(Ne=window.showToast)==null||Ne.call(window,o("order.paidSuccess"),"success"),await Pe(Q,z,R)}catch(Me){(_e=window.showToast)==null||_e.call(window,Me instanceof Error?Me.message:o("order.paidFailed"),"error")}}async function Ot($){var Ne,_e;le(null),F(null),w(""),te("");try{await _1($),(Ne=window.showToast)==null||Ne.call(window,o("order.cancelSuccess"),"success"),await Pe(Q,z,R)}catch(Me){(_e=window.showToast)==null||_e.call(window,Me instanceof Error?Me.message:o("order.cancelFailed"),"error")}}async function an($,Ne){var _e,Me;le(null),F(null),w(""),te("");try{await N1($,Ne),(_e=window.showToast)==null||_e.call(window,o("order.commissionSuccess"),"success"),await Pe(Q,z,R)}catch(Ie){(Me=window.showToast)==null||Me.call(window,Ie instanceof Error?Ie.message:o("order.commissionFailed"),"error")}}async function ge($){N($),ce(!0);try{const Ne=await S1($.id);Ne&&Ne.data&&N(Ne.data)}catch(Ne){console.error("Failed to fetch order detail:",Ne)}finally{ce(!1)}}function Bt(){var $;D({email:"",plan_id:($=S[0])!=null&&$.id?String(S[0].id):"",period:"month_price",total_amount:"0"}),w(""),te("")}async function Ue($){var Ne,_e;if($.preventDefault(),!!re){ne(!0),w(""),te("");try{await jx({email:re.email,plan_id:Number(re.plan_id),period:re.period,total_amount:Number(re.total_amount)*100}),D(null),(Ne=window.showToast)==null||Ne.call(window,o("order.assignSuccess"),"success"),await Pe(Q,z,R)}catch(Me){(_e=window.showToast)==null||_e.call(window,Me instanceof Error?Me.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const jt=Math.ceil(j/K),en=_?ot(_):null;return t.jsxs($t,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${k?"active":""}`,type:"button",onClick:()=>de(!k),children:[t.jsx(us,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Bt,children:[t.jsx(Nn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Pe(Q,z,R),disabled:I,children:[t.jsx(zt,{size:16}),o(I?"common.refreshing":"common.refresh")]})]}),k&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:R,onChange:$=>U($.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Zo,{size:16}),t.jsx("input",{className:"config-input search-input",value:z,onChange:$=>G($.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:$=>$.key==="Enter"&&St()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:St,children:[t.jsx(us,{size:16}),o("order.filter")]}),z?t.jsxs("button",{className:"ghost-button",type:"button",onClick:It,children:[t.jsx(st,{size:16}),o("order.clearFilter")]}):null]}),he?t.jsx("div",{className:"form-error",children:he}):null,L?t.jsx("div",{className:"form-success",children:L}):null,I&&f.length===0?t.jsx(vt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${I?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[f.map($=>{var $e;const Ne=d($.status),_e=$.invite_user_id!==null,Me=qe[$.commission_status]??{label:`#${$.commission_status}`,dotClass:"pending"},Ie=ot($),Je=($e=me[$.user_id])==null?void 0:$e.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>ge($),title:o("order.detailsTitle"),children:Rh($.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",$.id]}),t.jsx("span",{className:"order-type-pill",children:Dh[$.type]??`#${$.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Je?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Nt($.user_id),title:o("order.filterByUser"),children:Je}):t.jsxs("span",{className:"order-subline",children:["ID: ",$.user_id]}),t.jsx("strong",{className:"order-plan-name",children:$.plan_name??`Plan #${$.plan_id}`}),t.jsx("span",{className:"period-capsule",children:u($.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Hn($.total_amount)}),Ie?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Ie]}):null,Number($.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Hn($.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{children:Ne.label}),$.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Se($.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(yl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),A===si("desktop",$.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{le(null),Qt($.trade_no)},children:[t.jsx(To,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{le(null),Ot($.trade_no)},children:[t.jsx(bl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[_e?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Hn($.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Me.dotClass}`}),t.jsx("span",{children:Me.label}),$.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Oe($.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(yl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),H===si("desktop",$.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),an($.trade_no,1)},children:[t.jsx(To,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{F(null),an($.trade_no,3)},children:[t.jsx(bl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Oh($.created_at)})})]},$.trade_no)}),!I&&f.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),jt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:Q<=1,onClick:()=>gt(Q-1),children:t.jsx(ya,{size:16})}),t.jsxs("span",{className:"page-info",children:[Q," / ",jt]}),t.jsx("button",{className:"mini-button",disabled:Q>=jt,onClick:()=>gt(Q+1),children:t.jsx(va,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[f.map($=>{var $e;const Ne=d($.status),_e=$.invite_user_id!==null,Me=qe[$.invite_user_id!==null?$.commission_status:0]??{label:`#${$.commission_status}`,dotClass:"pending"},Ie=($e=me[$.user_id])==null?void 0:$e.email,Je=ot($);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>ge($),children:Rh($.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",$.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ne.label}),$.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Se($.trade_no,"mobile")},children:t.jsx(yl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===si("mobile",$.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{le(null),Qt($.trade_no)},children:[t.jsx(To,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{le(null),Ot($.trade_no)},children:[t.jsx(bl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Ie?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Nt($.user_id),children:Ie}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",$.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Dh[$.type]??`#${$.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:$.plan_name??`Plan #${$.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:u($.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Hn($.total_amount)})]}),Je?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Je})})]}):null,Number($.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Hn($.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:_e?t.jsx("strong",{children:Hn($.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),_e&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Me.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Me.label}),$.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Oe($.trade_no,"mobile")},children:t.jsx(yl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),H===si("mobile",$.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),an($.trade_no,1)},children:[t.jsx(To,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{F(null),an($.trade_no,3)},children:[t.jsx(bl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Oh($.created_at)})]})]})]},$.trade_no)}),!I&&f.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,jt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:Q<=1,onClick:()=>gt(Q-1),children:t.jsx(ya,{size:16})}),t.jsxs("span",{className:"page-info",children:[Q," / ",jt]}),t.jsx("button",{className:"mini-button",disabled:Q>=jt,onClick:()=>gt(Q+1),children:t.jsx(va,{size:16})})]}):null]})]}),_?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(st,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:M?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(vt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(T=me[_.user_id])!=null&&T.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{N(null),Nt(_.user_id)},title:"Filter by this user",children:me[_.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:_.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:u(_.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(_.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:_.plan_name??`Plan #${_.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:_.callback_no||"-"})]}),en?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:en})]}):null]}),_.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(ye=me[_.invite_user_id])!=null&&ye.email||(Be=me[_.user_id])!=null&&Be.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const $=String(_.invite_user_id);U("invite_user_id"),G($),de(!0),N(null),Pe(1,$,"invite_user_id")},title:"Filter by this inviter",children:((ve=me[_.invite_user_id])==null?void 0:ve.email)||((rt=me[_.user_id])==null?void 0:rt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",_.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Hn(_.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(qe[_.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(qe[_.commission_status]??{label:`#${_.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Hn(_.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Hn(_.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Hn(_.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Hn(_.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Hn(_.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Uh(_.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Uh(_.updated_at)})]})]})]})})]})}):null,re?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>D(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ue,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:re.email,onChange:$=>D({...re,email:$.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:re.plan_id,onChange:$=>D({...re,plan_id:$.target.value}),children:S.map($=>t.jsx("option",{value:$.id,children:$.name},$.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:re.period,onChange:$=>D({...re,period:$.target.value}),children:Object.entries(Ah).map(([$,Ne])=>t.jsx("option",{value:$,children:Ne},$))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:re.total_amount,onChange:$=>D({...re,total_amount:$.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>D(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:Y,children:[t.jsx(Sn,{size:16}),o(Y?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Do(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Ao(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function xd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Rj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(0),[m,S]=h.useState(1),[v,x]=h.useState([]),[y,j]=h.useState(null),[E,Q]=h.useState(!0),[W,K]=h.useState(!1),[z,G]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState("");h.useEffect(()=>{y||se("")},[y]);const re=h.useCallback(async(w=1)=>{Q(!0),G("");try{const L=await wx(w,15);d(L.data),f(L.total)}catch(L){G(L instanceof Error?L.message:i("coupon.loadFailed"))}finally{Q(!1)}},[]);h.useEffect(()=>{if(!At()){s.replace("/login");return}re(1),jl().then(x).catch(()=>{})},[re,s]);async function D(w){var L,te;if(w.preventDefault(),!!y){K(!0),G(""),U("");try{const A=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await k1({id:y.id,name:y.name,type:Number(y.type),value:A,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,limit_use_with_user:y.limit_use_with_user?Number(y.limit_use_with_user):null,limit_plan_ids:y.limit_plan_ids.length?y.limit_plan_ids:null,limit_period:y.limit_period.length?y.limit_period:null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(L=window.showToast)==null||L.call(window,i("coupon.saveSuccess"),"success"),await re(m)}catch(A){(te=window.showToast)==null||te.call(window,A instanceof Error?A.message:i("coupon.saveFailed"),"error")}finally{K(!1)}}}async function Y(w){var L;try{await z1(w),await re(m)}catch(te){(L=window.showToast)==null||L.call(window,te instanceof Error?te.message:i("coupon.toggleFailed"),"error")}}async function ne(w){var L;(L=window.showConfirm)==null||L.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var te,A;try{await C1(w),(te=window.showToast)==null||te.call(window,i("coupon.deleteSuccess"),"success"),await re(m)}catch(le){(A=window.showToast)==null||A.call(window,le instanceof Error?le.message:i("coupon.deleteFailed"),"error")}}})}const he=Math.ceil(u/15);return t.jsxs($t,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[u," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void re(m),disabled:E,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(xd()),children:[t.jsx(Nn,{size:16}),i("coupon.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var le,H;const L=(le=w.limit_plan_ids)==null?void 0:le.map(F=>{var k;return((k=v.find(de=>de.id===F))==null?void 0:k.name)||`#${F}`}).join(", "),te=Ao(i),A=(H=w.limit_period)==null?void 0:H.map(F=>te[F]||F).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?_n(w.value):`${w.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",w.limit_use??"∞"]}),w.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[L?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",L]})}):null,A?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",A]})}):null,!L&&!A?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Do(w.started_at)," — ",Do(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(xd(w)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},w.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(w=>{var L,te,A,le;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:`tag type-tag ${w.type===1?"fixed-type":"percent-type"}`,children:w.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Fa(w.code).then(H=>{var F;(F=window.showToast)==null||F.call(window,H?`${i("coupon.copiedCode")}: ${w.code}`:i("common.copyFailed"),H?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(L=w.limit_plan_ids)!=null&&L.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:w.limit_plan_ids.map(H=>{const F=v.find(k=>k.id===H);return t.jsx("span",{className:"res-pill plan-pill",children:F?F.name:`#${H}`},H)})})]}):null,(te=w.limit_period)!=null&&te.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:w.limit_period.map(H=>t.jsx("span",{className:"res-pill cycle-pill",children:Ao(i)[H]||H},H))})]}):null,!((A=w.limit_plan_ids)!=null&&A.length)&&!((le=w.limit_period)!=null&&le.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Do(w.started_at)," — ",Do(w.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${w.show?"active":""}`,type:"button",onClick:()=>void Y(w.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?_n(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"}),w.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",w.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(xd(w)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(Yt,{size:15})})]})]})]},w.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),re(m-1)},children:t.jsx(ya,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),re(m+1)},children:t.jsx(va,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:D,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:w=>j({...y,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:y.type,onChange:w=>j({...y,type:w.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:w=>j({...y,value:w.target.value})})]})]}),y.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:y.code,onChange:w=>j({...y,code:w.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:w=>j({...y,started_at:w.target.value}),onClick:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)},onFocus:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:w=>j({...y,ended_at:w.target.value}),onClick:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)},onFocus:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:w=>j({...y,limit_use:w.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use_with_user,onChange:w=>j({...y,limit_use_with_user:w.target.value}),placeholder:i("coupon.unlimited")})]})]}),y.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:w=>j({...y,generate_count:w.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),y.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_plan_ids.map(w=>{const L=v.find(te=>te.id===w);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const te=y.limit_plan_ids.filter(A=>A!==w);j({...y,limit_plan_ids:te})},children:[L?L.name:`#${w}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:I,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const L=y.limit_plan_ids.includes(w.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:te=>{const A=te.target.checked?[...y.limit_plan_ids,w.id]:y.limit_plan_ids.filter(le=>le!==w.id);j({...y,limit_plan_ids:A})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),y.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_period.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const L=y.limit_period.filter(te=>te!==w);j({...y,limit_period:L})},children:[Ao(i)[w]||w," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},w))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Ao(i)).map(([w,L])=>{const te=y.limit_period.includes(w);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:te,onChange:A=>{const le=A.target.checked?[...y.limit_period,w]:y.limit_period.filter(H=>H!==w);j({...y,limit_period:le})}}),t.jsx("span",{children:L})]},w)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Sn,{size:16}),i(W?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Oo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Hj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function gd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Lj(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(0),[m,S]=h.useState(1),[v,x]=h.useState([]),[y,j]=h.useState(null),[E,Q]=h.useState(!0),[W,K]=h.useState(!1),[z,G]=h.useState(""),[R,U]=h.useState(""),[I,se]=h.useState("");h.useEffect(()=>{y||se("")},[y]);const re=Hj(i),D=h.useCallback(async(w=1)=>{Q(!0),G("");try{const L=await T1(w,15);d(L.data),f(L.total)}catch(L){G(L instanceof Error?L.message:i("giftcard.loadFailed"))}finally{Q(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}D(1),jl().then(x).catch(()=>{})},[D,s]);async function Y(w){var L,te;if(w.preventDefault(),!!y){K(!0),G(""),U("");try{const A=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await E1({id:y.id,name:y.name,type:Number(y.type),value:A,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,plan_id:y.plan_id?Number(y.plan_id):null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(L=window.showToast)==null||L.call(window,i("giftcard.saveSuccess"),"success"),await D(m)}catch(A){(te=window.showToast)==null||te.call(window,A instanceof Error?A.message:i("giftcard.saveFailed"),"error")}finally{K(!1)}}}async function ne(w){var L;(L=window.showConfirm)==null||L.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var te,A;try{await M1(w),(te=window.showToast)==null||te.call(window,i("giftcard.deleteSuccess"),"success"),await D(m)}catch(le){(A=window.showToast)==null||A.call(window,le instanceof Error?le.message:i("giftcard.deleteFailed"),"error")}}})}const he=Math.ceil(u/15);return t.jsxs($t,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[u," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void D(m),disabled:E,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(gd()),children:[t.jsx(Nn,{size:16}),i("giftcard.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,R?t.jsx("div",{className:"form-success",children:R}):null,E&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(w=>{var L;return t.jsxs("tr",{children:[t.jsx("td",{children:w.id}),t.jsx("td",{children:t.jsx("strong",{children:w.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:w.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:re[w.type]??w.type})}),t.jsx("td",{children:t.jsx("strong",{children:w.type===1?_n(w.value):w.value})}),t.jsx("td",{children:w.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((L=v.find(te=>te.id===w.plan_id))==null?void 0:L.name)||`#${w.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:w.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(gd(w)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(w.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},w.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(w=>{var L;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",w.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:re[w.type]??w.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:w.name,children:w.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Fa(w.code).then(te=>{var A;(A=window.showToast)==null||A.call(window,te?i("giftcard.copiedCode").replace("{code}",w.code):i("common.copyFailed"),te?"success":"error")})},children:[t.jsx("code",{className:"mono",children:w.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:w.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((L=v.find(te=>te.id===w.plan_id))==null?void 0:L.name)||`#${w.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Oo(w.started_at)," — ",Oo(w.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:w.type===1?_n(w.value).replace(/\s?₫/,""):`${w.value}`}),t.jsx("span",{className:"ticket-value-unit",children:w.type===1?"₫":re[w.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:w.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(gd(w)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(w.id),"aria-label":i("common.delete"),children:t.jsx(Yt,{size:15})})]})]})]},w.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{S(m-1),D(m-1)},children:t.jsx(ya,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{S(m+1),D(m+1)},children:t.jsx(va,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Y,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:w=>j({...y,name:w.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:y.type,onChange:w=>j({...y,type:w.target.value}),children:Object.entries(re).map(([w,L])=>t.jsx("option",{value:w,children:L},w))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:w=>j({...y,value:w.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:w=>j({...y,started_at:w.target.value}),onClick:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)},onFocus:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:w=>j({...y,ended_at:w.target.value}),onClick:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)},onFocus:w=>{var L,te;return(te=(L=w.currentTarget).showPicker)==null?void 0:te.call(L)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:w=>j({...y,limit_use:w.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),y.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:w=>j({...y,generate_count:w.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),y.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const w=v.find(L=>String(L.id)===y.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...y,plan_id:""})},children:[w?w.name:`#${y.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:I,onChange:w=>se(w.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!y.plan_id,onChange:()=>{j({...y,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),v.filter(w=>w.name.toLowerCase().includes(I.toLowerCase())).map(w=>{const L=String(w.id)===y.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:L,onChange:te=>{te.target.checked&&j({...y,plan_id:String(w.id)})}}),t.jsx("span",{children:w.name})]},w.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W,children:[t.jsx(Sn,{size:16}),i(W?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const as="Tương đối",xa="=";function Uo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function qj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Hh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function bd(s){return+(s/1073741824).toFixed(2)}function yd(s){return Math.round(s*1073741824)}function Ro(s){return(s/1073741824).toFixed(2)}function Bj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function oi(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const qd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Hx="user_visible_columns";function Gj(){if(typeof window<"u")try{const s=localStorage.getItem(Hx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(qd.filter(s=>s.defaultVisible).map(s=>s.key))}const $o=[{value:"email",label:"Email",condition:as,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:xa,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:xa,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:xa,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:xa,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:as,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:xa,placeholder:"12345"},{value:"uuid",label:"UUID",condition:as,placeholder:"UUID"},{value:"token",label:"Token",condition:as,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:as,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:xa,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:xa,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:xa,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:xa,placeholder:"1780366403"}],Yj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Wt(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function $j(s,i){var u;const o=((u=$o.find(f=>f.value===s))==null?void 0:u.label)??s,d=f=>{const m=i(f);return m===f?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function vd(s){return $o.find(i=>i.value===s)??$o[0]}function Qj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Xj(){const s=Dt(),i=Wn(),{t:o}=Ke(),[d,u]=h.useState([]),[f,m]=h.useState([]),[S,v]=h.useState([]),[x,y]=h.useState(0),[j,E]=h.useState(1),[Q,W]=h.useState(""),[K,z]=h.useState("email"),[G,R]=h.useState(!0),[U,I]=h.useState(""),[se,re]=h.useState(Gj),[D,Y]=h.useState(!1),ne=h.useRef(null),[he,w]=h.useState(null),[L,te]=h.useState(null),[A,le]=h.useState({}),[H,F]=h.useState(!1),[k,de]=h.useState(!1),[_,N]=h.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[M,ce]=h.useState(!1),[me,we]=h.useState(null),[Se,Oe]=h.useState({plan_id:"",period:"month_price",total_amount:""}),[ot,qe]=h.useState(!1),[Pe,Nt]=h.useState(null),[St,It]=h.useState(null),[gt,Qt]=h.useState([]),[Ot,an]=h.useState(0),[ge,Bt]=h.useState(1),[Ue]=h.useState(10),[jt,en]=h.useState(!1),[T,ye]=h.useState("");h.useEffect(()=>{function b(pe){const ue=pe.target instanceof Element?pe.target:null;he!==null&&(!ue||!ue.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&w(null),D&&ne.current&&!ne.current.contains(pe.target)&&Y(!1)}return document.addEventListener("mousedown",b),()=>document.removeEventListener("mousedown",b)},[he,D]);function Be(b){re(pe=>{const ue=new Set(pe);ue.has(b)?ue.delete(b):ue.add(b);try{localStorage.setItem(Hx,JSON.stringify([...ue]))}catch{}return ue})}const ve=b=>se.has(b),rt=qd.filter(b=>se.has(b.key)).length,$=h.useCallback(async(b=1,pe,ue)=>{R(!0),I("");try{const ze=pe==null?void 0:pe.trim(),xt=vd(ue||"email"),$n=ze?[{key:xt.value,condition:xt.condition,value:ze}]:void 0,Qn=await Ad(b,15,$n);u(Qn.data),y(Qn.total)}catch(ze){I(ze instanceof Error?ze.message:o("user.loadFailed"))}finally{R(!1)}},[]),Ne=h.useCallback(async()=>{try{const[b,pe]=await Promise.all([jl(),ms()]);m(b),v(pe)}catch{}},[]);h.useEffect(()=>{if(!At()){s.replace("/login");return}const b=new URLSearchParams(i.search),ue=[["email",b.get("email")||b.get("filter_email")],["id",b.get("id")||b.get("user_id")||b.get("filter_user_id")],["plan_id",b.get("plan_id")],["invite_user_id",b.get("invite_user_id")],["invite_by_email",b.get("invite_by_email")],["uuid",b.get("uuid")],["token",b.get("token")],["remarks",b.get("remarks")]].find(([,ze])=>ze==null?void 0:ze.trim());if(ue){const[ze,xt]=ue,$n=vd(ze),Qn=(xt==null?void 0:xt.trim())??"";z($n.value),W(Qn),E(1),$(1,Qn,$n.value)}else $(1);Ne()},[$,Ne,s,i.search]);function _e(){E(1),$(1,Q,K)}function Me(){W(""),E(1),$(1)}function Ie(b){E(b),$(b,Q,K)}function Je(b){if(b.plan_name)return b.plan_name;if(!b.plan_id)return"—";const pe=f.find(ue=>ue.id===b.plan_id);return pe?pe.name:`#${b.plan_id}`}function $e(b){if(!b.group_id)return"—";const pe=S.find(ue=>ue.id===b.group_id);return pe?pe.name:`#${b.group_id}`}function Re(b,pe){const ue=o(b);return ue===b?pe:ue}function mt(b){const pe=Number(b.device_limit??0);return pe>0?`${Number(b.device_bound_count??0)} / ${pe}`:Re("user.unlimited","Unlimited")}function ci(b){const pe=Number(b.device_bound_count??0),ue=Number(b.device_pending_count??0),ze=Number(b.device_banned_count??0),xt=Number(b.device_online_count??0),$n=Number(b.alive_ip??0),Qn=Number(b.device_limit??0),Ko=Qn>0?`${pe} / ${Qn}`:`${pe} / ${Re("user.unlimited","Unlimited")}`,ui=[`${Re("user.deviceBound","Bound")}: ${Ko}`,`${Re("user.devicePending","Pending")}: ${ue}`,`${Re("user.deviceBanned","Banned")}: ${ze}`,`${Re("user.deviceOnline","Online devices")}: ${xt}`,`${Re("user.deviceOnlineIp","Online IP")}: ${$n}`];return b.ips&&ui.push(b.ips),ui.join(`
`)}function wl(b){s.push(`/device?user_id=${encodeURIComponent(String(b.id))}`)}function Ia(b,pe="left"){const ue=`${Re("user.deviceOnlineShort","Online")}: ${Number(b.device_online_count??0)} | ${Re("user.deviceIpShort","IP")}: ${Number(b.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${pe==="right"?"align-right":""}`,type:"button",title:ci(b),onClick:()=>wl(b),children:[t.jsx("span",{className:"device-cell-primary",children:mt(b)}),t.jsx("span",{className:"device-cell-secondary",children:ue})]})}async function Gn(b){var ze,xt;const pe=b.subscribe_url;if(!pe){(ze=window.showToast)==null||ze.call(window,o("user.toastNoSubscribeUrl"),"error");return}const ue=await Fa(pe);(xt=window.showToast)==null||xt.call(window,o(ue?"user.toastUrlCopied":"common.copyFailed"),ue?"success":"error"),w(null)}function fn(b){var pe;w(null),(pe=window.showConfirm)==null||pe.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var ue,ze;try{await U1(b.id),(ue=window.showToast)==null||ue.call(window,o("user.toastSecretResetSuccess"),"success"),await $(j,Q,K)}catch(xt){(ze=window.showToast)==null||ze.call(window,xt instanceof Error?xt.message:o("user.toastSecretResetFailed"),"error")}}})}function Yn(b){var pe;w(null),(pe=window.showConfirm)==null||pe.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var ue,ze;try{await A1(b.id),(ue=window.showToast)==null||ue.call(window,o("user.toastDeletedSuccess"),"success"),await $(j,Q,K)}catch(xt){(ze=window.showToast)==null||ze.call(window,xt instanceof Error?xt.message:o("user.toastDeletedFailed"),"error")}}})}function sn(b){var ue;w(null);const pe=b.subscribe_url;if(!pe){(ue=window.showToast)==null||ue.call(window,o("user.toastNoSubscribeUrl"),"error");return}Nt({url:pe,userId:b.id})}function q(b){w(null),s.push(`/order?user_id=${b.id}`)}function oe(b){w(null),s.push(`/subscription?user_id=${b.id}`)}function ee(b){w(null),z("invite_user_id"),W(String(b.id)),$(1,String(b.id),"invite_user_id")}async function ke(b,pe){en(!0),ye("");try{const ue=await G1(b,pe,Ue);Qt(ue.data||[]),an(ue.total||0),Bt(pe)}catch(ue){ye(ue instanceof Error?ue.message:o("user.historyLoading"))}finally{en(!1)}}function Ye(b){w(null),It(b),ke(b.id,1)}function et(b){w(null),we(b.email),Oe({plan_id:"",period:"month_price",total_amount:""})}async function ft(b){var pe,ue;if(b.preventDefault(),!!me){qe(!0);try{await jx({email:me,plan_id:Number(Se.plan_id),period:Se.period,total_amount:(Number(Se.total_amount)||0)*100}),(pe=window.showToast)==null||pe.call(window,o("user.toastAssignSuccess"),"success"),we(null)}catch(ze){(ue=window.showToast)==null||ue.call(window,ze instanceof Error?ze.message:o("user.toastAssignFailed"),"error")}finally{qe(!1)}}}function ct(b){w(null),te(b),le({id:b.id,email:b.email,invite_user_email:"",password:"",balance:b.balance,commission_balance:b.commission_balance,u:bd(b.u),d:bd(b.d),transfer_enable:bd(b.transfer_enable),device_limit:b.device_limit,network_settings:b.network_settings??"",expired_at:qj(b.expired_at),plan_id:b.plan_id,banned:b.banned,commission_type:b.commission_type??0,commission_rate:b.commission_rate??"",discount:b.discount??"",speed_limit:b.speed_limit,is_admin:b.is_admin,is_staff:b.is_staff,remarks:b.remarks??""})}function De(b,pe){le(ue=>({...ue,[b]:pe}))}async function on(b){var pe,ue;if(b.preventDefault(),!!L){F(!0);try{const ze={id:L.id,email:A.email,plan_id:A.plan_id||null,expired_at:Hh(String(A.expired_at??"")),transfer_enable:yd(Number(A.transfer_enable??0)),speed_limit:A.speed_limit||null,device_limit:A.device_limit||null,u:yd(Number(A.u??0)),d:yd(Number(A.d??0)),balance:Number(A.balance??0),commission_balance:Number(A.commission_balance??0),commission_rate:A.commission_rate!==""&&A.commission_rate!==null?Number(A.commission_rate):null,commission_type:Number(A.commission_type??0),discount:A.discount!==""&&A.discount!==null?Number(A.discount):null,network_settings:A.network_settings||null,remarks:A.remarks||null,is_admin:Number(A.is_admin??0),is_staff:Number(A.is_staff??0),banned:Number(A.banned??0)};A.invite_user_email&&(ze.invite_user_email=A.invite_user_email),A.password&&(ze.password=A.password),await D1(ze),(pe=window.showToast)==null||pe.call(window,o("user.toastSaveSuccess"),"success"),te(null),await $(j,Q,K)}catch(ze){(ue=window.showToast)==null||ue.call(window,ze instanceof Error?ze.message:o("user.toastSaveFailed"),"error")}finally{F(!1)}}}async function di(b){var pe,ue;b.preventDefault(),ce(!0);try{await O1({email_prefix:_.email_prefix,email_suffix:_.email_suffix,password:_.password||void 0,plan_id:_.plan_id?Number(_.plan_id):void 0,expired_at:Hh(_.expired_at)}),(pe=window.showToast)==null||pe.call(window,o("user.toastCreateSuccess"),"success"),de(!1),N({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await $(j,Q,K)}catch(ze){(ue=window.showToast)==null||ue.call(window,ze instanceof Error?ze.message:o("user.toastCreateFailed"),"error")}finally{ce(!1)}}const kn=Math.ceil(x/15),hs=vd(K);return t.jsxs($t,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[x," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>Y(!D),children:[t.jsx(yv,{size:16}),o("user.columns")]}),D?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:rt})})}),qd.map(b=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:se.has(b.key),onChange:()=>Be(b.key)}),t.jsx("span",{children:Wt(b.key,o)})]},b.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void $(j,Q,K),disabled:G,children:[t.jsx(zt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>de(!0),children:[t.jsx(Nn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:K,onChange:b=>z(b.target.value),children:$o.map(b=>t.jsx("option",{value:b.value,children:$j(b.value,o)},b.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Zo,{size:16}),t.jsx("input",{className:"config-input search-input",value:Q,onChange:b=>W(b.target.value),placeholder:hs.placeholder,onKeyDown:b=>b.key==="Enter"&&_e()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:_e,children:[t.jsx(us,{size:16}),o("user.filter")]}),Q?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Me,children:[t.jsx(st,{size:16}),o("user.clearFilter")]}):null]}),U?t.jsx("div",{className:"form-error",children:U}):null,G&&d.length===0?t.jsx(vt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${G?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(b=>{const pe=Ro(b.u+b.d),ue=Ro(b.transfer_enable),ze=parseFloat(pe);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",b.id]}),t.jsx("span",{className:"user-email",title:b.email,children:b.email})]}),b.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Je(b)," / ",b.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):$e(b)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${ze>0?ze>parseFloat(ue)*.9?"high":"ok":""}`,children:[pe," GB"]})," / ",ue," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("devices",o)}),t.jsx("span",{className:"info-val",children:Ia(b,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("expires",o)}),t.jsx("span",{className:"info-val",children:b.expired_at?t.jsx("span",{className:`expiry-date ${b.expired_at<Date.now()/1e3?"expired":""}`,children:Uo(b.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(b.balance/100).toFixed(2)," ₫ / ",(b.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Uo(b.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${he===b.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(he===b.id?null:b.id),children:[o("user.colActions")," ",t.jsx(yl,{size:14})]}),he===b.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>w(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:xt=>xt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:b.email}),t.jsxs("small",{children:["#",b.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(st,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(b),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(b),children:[t.jsx(mh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(b),children:[t.jsx(wn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>sn(b),children:[t.jsx(uh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>fn(b),children:[t.jsx(Go,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>q(b),children:[t.jsx(ch,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>oe(b),children:[t.jsx(Td,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>ee(b),children:[t.jsx(ps,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ye(b),children:[t.jsx(cd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(b),children:[t.jsx(Yt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},b.id)}),!G&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ve("id")&&t.jsx("th",{children:Wt("id",o)}),ve("email")&&t.jsx("th",{children:Wt("email",o)}),ve("status")&&t.jsx("th",{children:Wt("status",o)}),ve("plan")&&t.jsx("th",{children:Wt("plan",o)}),ve("group")&&t.jsx("th",{children:Wt("group",o)}),ve("used")&&t.jsx("th",{children:Wt("used",o)}),ve("traffic")&&t.jsx("th",{children:Wt("traffic",o)}),ve("devices")&&t.jsx("th",{children:Wt("devices",o)}),ve("expires")&&t.jsx("th",{children:Wt("expires",o)}),ve("balance")&&t.jsx("th",{children:Wt("balance",o)}),ve("commission")&&t.jsx("th",{children:Wt("commission",o)}),ve("joined")&&t.jsx("th",{children:Wt("joined",o)}),ve("actions")&&t.jsx("th",{children:Wt("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(b=>{const pe=Ro(b.u+b.d),ue=Ro(b.transfer_enable),ze=parseFloat(pe);return t.jsxs("tr",{children:[ve("id")&&t.jsx("td",{children:b.id}),ve("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:b.email})}),ve("status")&&t.jsx("td",{children:b.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ve("plan")&&t.jsx("td",{children:Je(b)}),ve("group")&&t.jsx("td",{children:b.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):$e(b)}),ve("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${ze>0?ze>parseFloat(ue)*.9?"high":"ok":""}`,children:pe})}),ve("traffic")&&t.jsx("td",{children:ue}),ve("devices")&&t.jsx("td",{children:Ia(b)}),ve("expires")&&t.jsx("td",{children:b.expired_at?t.jsx("span",{className:`expiry-date ${b.expired_at<Date.now()/1e3?"expired":""}`,children:Uo(b.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ve("balance")&&t.jsx("td",{children:(b.balance/100).toFixed(2)}),ve("commission")&&t.jsx("td",{children:(b.commission_balance/100).toFixed(2)}),ve("joined")&&t.jsx("td",{children:t.jsx("small",{children:Uo(b.created_at)})}),ve("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${he===b.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>w(he===b.id?null:b.id),children:[o("user.colActions")," ",t.jsx(yl,{size:14})]}),he===b.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(b),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(b),children:[t.jsx(mh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(b),children:[t.jsx(wn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>sn(b),children:[t.jsx(uh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>fn(b),children:[t.jsx(Go,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>q(b),children:[t.jsx(ch,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>oe(b),children:[t.jsx(Td,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>ee(b),children:[t.jsx(ps,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Ye(b),children:[t.jsx(cd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(b),children:[t.jsx(Yt,{size:14}),o("user.actionDelete")]})]}):null]})})]},b.id)}),!G&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:rt,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),kn>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Ie(j-1),children:t.jsx(ya,{size:16})}),Array.from({length:Math.min(5,kn)},(b,pe)=>{let ue;return kn<=5||j<=3?ue=pe+1:j>=kn-2?ue=kn-4+pe:ue=j-2+pe,t.jsx("button",{className:`mini-button ${ue===j?"active-page":""}`,onClick:()=>Ie(ue),children:ue},ue)}),kn>5?t.jsxs("span",{className:"page-info",children:["… ",kn]}):null,t.jsx("button",{className:"mini-button",disabled:j>=kn,onClick:()=>Ie(j+1),children:t.jsx(va,{size:16})})]})}):null]}),L?t.jsx("div",{className:"modal-backdrop",onClick:()=>te(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:on,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(A.email??""),onChange:b=>De("email",b.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(A.invite_user_email??""),onChange:b=>De("invite_user_email",b.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(A.password??""),onChange:b=>De("password",b.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(A.balance??0)/100).toFixed(2)),onChange:b=>De("balance",Math.round(Number(b.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(A.commission_balance??0)/100).toFixed(2)),onChange:b=>De("commission_balance",Math.round(Number(b.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.u??0),onChange:b=>De("u",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.d??0),onChange:b=>De("d",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(A.transfer_enable??0),onChange:b=>De("transfer_enable",b.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(A.device_limit??""),onChange:b=>De("device_limit",b.target.value?Number(b.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(A.network_settings??""),onChange:b=>De("network_settings",b.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(A.expired_at??""),onChange:b=>De("expired_at",b.target.value),onClick:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)},onFocus:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(A.plan_id??""),onChange:b=>De("plan_id",b.target.value?Number(b.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),f.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(A.banned??0),onChange:b=>De("banned",Number(b.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(A.commission_type??0),onChange:b=>De("commission_type",Number(b.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(A.commission_rate??""),onChange:b=>De("commission_rate",b.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(A.discount??""),onChange:b=>De("discount",b.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(A.speed_limit??""),onChange:b=>De("speed_limit",b.target.value?Number(b.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${A.is_admin?"active":""}`,onClick:()=>De("is_admin",A.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${A.is_staff?"active":""}`,onClick:()=>De("is_staff",A.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(A.remarks??""),onChange:b=>De("remarks",b.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:H,children:o(H?"common.processing":"common.save")})]})]})]})}):null,k?t.jsx("div",{className:"modal-backdrop",onClick:()=>de(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>de(!1),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:di,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:_.email_prefix,onChange:b=>N({..._,email_prefix:b.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:_.email_suffix,onChange:b=>N({..._,email_suffix:b.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:_.password,onChange:b=>N({..._,password:b.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:_.plan_id,onChange:b=>N({..._,plan_id:b.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),f.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:_.expired_at,onChange:b=>N({..._,expired_at:b.target.value}),onClick:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)},onFocus:b=>{var pe,ue;return(ue=(pe=b.currentTarget).showPicker)==null?void 0:ue.call(pe)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>de(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:M,children:o(M?"user.creating":"user.createUser")})]})]})]})}):null,me?t.jsx("div",{className:"modal-backdrop",onClick:()=>we(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>we(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ft,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:me})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:Se.plan_id,onChange:b=>Oe({...Se,plan_id:b.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),f.map(b=>t.jsx("option",{value:b.id,children:b.name},b.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:Se.period,onChange:b=>Oe({...Se,period:b.target.value}),children:Yj.map(b=>t.jsx("option",{value:b.value,children:Qj(b.value,o)},b.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:Se.total_amount,onChange:b=>Oe({...Se,total_amount:b.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>we(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ot,children:o(ot?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Pe?t.jsx("div",{className:"modal-backdrop",onClick:()=>Nt(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Nt(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Pe.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Pe.userId})})]})]})}):null,St?t.jsx("div",{className:"modal-backdrop",onClick:()=>It(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:b=>b.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:St.email,id:St.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>It(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[T?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:T}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:Ot})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(gt.reduce((b,pe)=>b+pe.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(gt.reduce((b,pe)=>b+pe.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:oi(gt.reduce((b,pe)=>b+pe.u+pe.d,0))})]})]}),jt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(vt,{label:o("user.historyLoading")})}):gt.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(cd,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:gt.map(b=>{const pe=oi(b.u),ue=oi(b.d),ze=oi(b.u+b.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Bj(b.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(b.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:pe}),t.jsx("td",{style:{color:"var(--muted)"},children:ue}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:ze})]},b.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((ge-1)*Ue+1,Ot),end:Math.min(ge*Ue,Ot),total:Ot})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:ge<=1,onClick:()=>ke(St.id,ge-1),children:[t.jsx(ya,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:ge*Ue>=Ot,onClick:()=>ke(St.id,ge+1),children:[o("user.historyNext"),t.jsx(va,{size:16})]})]})]})]})]})]})}):null]})}const Lh=15,qh=20,Zj=["email","id","user_id","plan_id","status"];function Xa(s,i){return s?new Date(s*1e3).toLocaleString():i}function Kj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Jj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function gl(s){return+(s/1073741824).toFixed(2)}function jd(s){return Math.round((Number(s)||0)*1073741824)}function Vj(s){return s==="email"?"like":"="}function Fj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Bh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Gh(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function Yh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Wj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Pj(){const s=Dt(),i=Wn(),{t:o}=Ke(),[d,u]=h.useState([]),[f,m]=h.useState(0),[S,v]=h.useState(1),[x,y]=h.useState("email"),[j,E]=h.useState(""),[Q,W]=h.useState(!0),[K,z]=h.useState(""),[G,R]=h.useState(null),[U,I]=h.useState({}),[se,re]=h.useState(null),[D,Y]=h.useState(null),[ne,he]=h.useState([]),[w,L]=h.useState(0),[te,A]=h.useState(1),[le,H]=h.useState(!1),[F,k]=h.useState(""),[de,_]=h.useState(null);function N(T){const ye=T==null?void 0:T.trim();ye&&s.push(`/user?email=${encodeURIComponent(ye)}`)}const M=h.useCallback(async(T=1,ye="",Be="email")=>{W(!0),z("");try{const ve=ye.trim()?[{key:Be,condition:Vj(Be),value:ye.trim()}]:void 0,rt=await R1(T,Lh,ve);u(rt.data),m(rt.total),v(T)}catch(ve){z(ve instanceof Error?ve.message:o("subscription.loadFailed"))}finally{W(!1)}},[o]),ce=h.useCallback(async(T,ye=1)=>{H(!0),k("");try{const Be=await Nx(ye,qh,[{key:"subscription_id",condition:"=",value:String(T.id)}]);he(Be.data),L(Be.total),A(ye)}catch(Be){k(Be instanceof Error?Be.message:o("subscription.slotsLoadFailed"))}finally{H(!1)}},[o]);h.useEffect(()=>{if(!At()){s.replace("/login");return}const T=new URLSearchParams(i.search),Be=[["user_id",T.get("user_id")],["id",T.get("id")],["plan_id",T.get("plan_id")],["email",T.get("email")],["status",T.get("status")]].find(([,ve])=>ve&&ve.trim());if(Be){const[ve,rt]=Be,$=rt??"";y(ve),E($),M(1,$,ve);return}M()},[M,i.search,s]);function me(T){T.preventDefault(),M(1,j,x)}function we(){if(E(""),i.search){s.replace("/subscription");return}M(1,"",x)}function Se(T){R(T),I({transfer_enable:String(gl(T.transfer_enable)),u:String(gl(T.u)),d:String(gl(T.d)),device_limit:T.device_limit===null?"":String(T.device_limit),speed_limit:T.speed_limit===null?"":String(T.speed_limit),expired_at:Kj(T.expired_at),status:T.status,auto_renewal:String(T.auto_renewal||0),remarks:T.remarks??""})}async function Oe(T){var ye,Be;if(T.preventDefault(),!!G){re(G.id);try{await L1({id:G.id,transfer_enable:jd(U.transfer_enable),u:jd(U.u),d:jd(U.d),device_limit:U.device_limit===""?null:Number(U.device_limit),speed_limit:U.speed_limit===""?null:Number(U.speed_limit),expired_at:Jj(U.expired_at),status:U.status,auto_renewal:Number(U.auto_renewal),remarks:U.remarks}),R(null),(ye=window.showToast)==null||ye.call(window,o("subscription.updateSuccess"),"success"),await M(S,j,x)}catch(ve){(Be=window.showToast)==null||Be.call(window,ve instanceof Error?ve.message:o("subscription.saveFailed"),"error")}finally{re(null)}}}function ot(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.resetConfirm",{id:T.id}),onConfirm:async()=>{var Be,ve;re(T.id);try{await q1(T.id),(Be=window.showToast)==null||Be.call(window,o("subscription.resetSuccess"),"success"),await M(S,j,x)}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.resetFailed"),"error")}finally{re(null)}}})}async function qe(T){var Be;if(!T)return;const ye=await Fa(T);(Be=window.showToast)==null||Be.call(window,o(ye?"subscription.copySuccess":"common.copyFailed"),ye?"success":"error")}async function Pe(T){var ye,Be;_(T.id);try{let ve=T.subscribe_url||null;if(ve||(ve=(await H1(T.id)).data,ve&&u($=>$.map(Ne=>Ne.id===T.id?{...Ne,subscribe_url:ve}:Ne))),!ve){(ye=window.showToast)==null||ye.call(window,o("common.copyFailed"),"error");return}await qe(ve)}catch(ve){(Be=window.showToast)==null||Be.call(window,ve instanceof Error?ve.message:o("common.copyFailed"),"error")}finally{_(null)}}function Nt(T){Y(T),he([]),L(0),A(1),ce(T,1)}function St(T=te){return D?ce(D,T):Promise.resolve()}function It(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var Be,ve;re(T.id);try{await Sx(T.id),(Be=window.showToast)==null||Be.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([St(),M(S,j,x)])}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.unbindFailed"),"error")}finally{re(null)}}})}function gt(T){var ye;(ye=window.showConfirm)==null||ye.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var Be,ve;re(T.id);try{await kx(T.id),(Be=window.showToast)==null||Be.call(window,o("subscription.banSuccess"),"success"),await Promise.all([St(),M(S,j,x)])}catch(rt){(ve=window.showToast)==null||ve.call(window,rt instanceof Error?rt.message:o("subscription.banFailed"),"error")}finally{re(null)}}})}function Qt(T){const ye=T.device_limit&&T.device_limit>0?String(T.device_limit):o("subscription.unlimited"),Be=!!(T.device_count||T.device_limit&&T.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:T.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:ye})]}),T.device_limit&&T.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(T.device_count/T.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),Be?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Nt(T),children:[t.jsx(Td,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function Ot(T){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[gl(T.total_used)," / ",gl(T.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Wj(T)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:gl(T.u),download:gl(T.d)})})]})}function an(T){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>qe(T.uuid),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function ge(T){return t.jsxs("div",{className:"subscription-link-stack",children:[an(T),T.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.subscribe_url,onClick:()=>void Pe(T),disabled:de===T.id,children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Pe(T),disabled:de===T.id,children:[t.jsx(wn,{size:14}),t.jsx("span",{children:de===T.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Bt(T){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Se(T),children:[t.jsx(qt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:se===T.id,onClick:()=>ot(T),children:[t.jsx(Go,{size:14}),o("subscription.resetSecret")]})]})}const Ue=Math.ceil(f/Lh),jt=Math.ceil(w/qh),en=Ue>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||Q,onClick:()=>void M(S-1,j,x),children:[t.jsx(ya,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:S,total:Ue})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=Ue||Q,onClick:()=>void M(S+1,j,x),children:[o("common.next"),t.jsx(va,{size:14})]})]}):null;return t.jsxs($t,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:f})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void M(S,j,x),children:[t.jsx(zt,{size:16}),o(Q?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:me,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:T=>y(T.target.value),children:Zj.map(T=>t.jsx("option",{value:T,children:Fj(T,o)},T))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Zo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:T=>E(T.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(us,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:we,children:o("common.clearFilter")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Q&&d.length===0?t.jsx(vt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",T.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>N(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:T.user_id}),T.plan_id?` - ${o("subscription.planId",{id:T.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Bh(T.status,o)})}),t.jsx("td",{children:Ot(T)}),t.jsx("td",{children:Qt(T)}),t.jsx("td",{children:Xa(T.expired_at,o("subscription.never"))}),t.jsx("td",{children:ge(T)}),t.jsx("td",{children:Xa(T.updated_at,o("subscription.never"))}),t.jsx("td",{children:Bt(T)})]},T.id)),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(T=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",T.id]}),t.jsx("strong",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>N(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Bh(T.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),Ot(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),Qt(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:Xa(T.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:Xa(T.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:ge(T)}),Bt(T)]},T.id)),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),en,D?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>Y(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:D.id})}),t.jsx("p",{children:D.user_email??o("subscription.userId",{id:D.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>Y(null),children:t.jsx(st,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[F?t.jsx("div",{className:"form-error",children:F}):null,le&&ne.length===0?t.jsx(vt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ne.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>qe(T.uuid),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Yh(T.status)}`,children:Gh(T.status,o)})}),t.jsx("td",{children:T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>qe(T.hwid),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsx("td",{children:Xa(T.first_seen_at,"-")}),t.jsx("td",{children:Xa(T.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>It(T),children:[t.jsx(Dd,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>gt(T),children:[t.jsx(bl,{size:14}),o("subscription.ban")]}):null]})})]},T.id)),!le&&ne.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ne.map(T=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Yh(T.status)}`,children:Gh(T.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>qe(T.uuid),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>qe(T.hwid),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:Xa(T.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:Xa(T.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>It(T),children:[t.jsx(Dd,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:se===T.id,onClick:()=>gt(T),children:[t.jsx(bl,{size:14}),o("subscription.ban")]}):null]})]},T.id)),!le&&ne.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),jt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:te<=1||le,onClick:()=>void St(te-1),children:[t.jsx(ya,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:te,total:jt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:te>=jt||le,onClick:()=>void St(te+1),children:[o("common.next"),t.jsx(va,{size:14})]})]}):null]})]})}):null,G?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>R(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:G.id})}),t.jsx("p",{children:G.user_email??o("subscription.userId",{id:G.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>R(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Oe,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.transfer_enable,onChange:T=>I(ye=>({...ye,transfer_enable:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.u,onChange:T=>I(ye=>({...ye,u:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:U.d,onChange:T=>I(ye=>({...ye,d:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.device_limit,onChange:T=>I(ye=>({...ye,device_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:U.speed_limit,onChange:T=>I(ye=>({...ye,speed_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:U.expired_at,onChange:T=>I(ye=>({...ye,expired_at:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:U.status,onChange:T=>I(ye=>({...ye,status:T.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:U.auto_renewal,onChange:T=>I(ye=>({...ye,auto_renewal:T.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:U.remarks,onChange:T=>I(ye=>({...ye,remarks:T.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>R(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:se===G.id,children:se===G.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const $h=15,Ij=["email","user_id","node","hwid","user_agent","last_ip"];function ls(s){return s?new Date(s*1e3).toLocaleString():"-"}function Za(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,u=0;for(;d>=1024&&u<o.length-1;)d/=1024,u+=1;return`${d>=10||u===0?d.toFixed(0):d.toFixed(2)} ${o[u]}`}function ew(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function tw(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function Qh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Ho(s){return(s.online_ips??[]).join(", ")||"-"}function Lo(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function nw(s){var f,m,S;const i=new URLSearchParams(s),o=(f=i.get("node_type"))==null?void 0:f.trim(),d=(m=i.get("node_id"))==null?void 0:m.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const u=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of u){const x=(S=i.get(v))==null?void 0:S.trim();if(x)return{field:v,value:x}}return null}function aw(){const s=Dt(),i=Wn(),{t:o}=Ke(),[d,u]=h.useState([]),[f,m]=h.useState(0),[S,v]=h.useState(1),[x,y]=h.useState("email"),[j,E]=h.useState(""),[Q,W]=h.useState(!0),[K,z]=h.useState(""),[G,R]=h.useState(null),[U,I]=h.useState(null),[se,re]=h.useState(null),D=h.useCallback(async(k=1,de="",_="email")=>{W(!0),z("");try{const N=de.trim()?[{key:_,condition:ew(_),value:de.trim()}]:void 0,M=await Nx(k,$h,N);u(M.data),m(M.total),v(k)}catch(N){z(N instanceof Error?N.message:o("device.loadFailed"))}finally{W(!1)}},[o]);h.useEffect(()=>{if(!At()){s.replace("/login");return}const k=nw(i.search);if(k){y(k.field),E(k.value),D(1,k.value,k.field);return}D()},[D,s,i.search]),h.useEffect(()=>{if(se===null)return;function k(_){const N=_.target;N!=null&&N.closest(".device-action-wrap")||re(null)}function de(_){_.key==="Escape"&&re(null)}return document.addEventListener("pointerdown",k),document.addEventListener("keydown",de),()=>{document.removeEventListener("pointerdown",k),document.removeEventListener("keydown",de)}},[se]);function Y(k){k.preventDefault(),D(1,j,x)}function ne(){if(E(""),i.search){s.replace("/device");return}D(1,"",x)}async function he(k){var _;if(!k.hwid)return;const de=await Fa(k.hwid);(_=window.showToast)==null||_.call(window,o(de?"device.copySuccess":"common.copyFailed"),de?"success":"error")}async function w(k){var _;const de=await Fa(k.uuid);(_=window.showToast)==null||_.call(window,o(de?"device.copyUuidSuccess":"common.copyFailed"),de?"success":"error")}function L(k){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var _,N;R(k.id);try{await Sx(k.id),(_=window.showToast)==null||_.call(window,o("device.unbindSuccess"),"success"),await D(S,j,x)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.unbindFailed"),"error")}finally{R(null)}}})}function te(k){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var _,N;R(k.id);try{await kx(k.id),(_=window.showToast)==null||_.call(window,o("device.banSuccess"),"success"),await D(S,j,x)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.banFailed"),"error")}finally{R(null)}}})}function A(k){var de;(de=window.showConfirm)==null||de.call(window,{message:o("device.resetConfirm",{user:k.user_email??`#${k.user_id}`}),onConfirm:async()=>{var _,N;I(k.user_id);try{await B1(k.user_id),(_=window.showToast)==null||_.call(window,o("device.resetSuccess"),"success"),await D(S,j,x)}catch(M){(N=window.showToast)==null||N.call(window,M instanceof Error?M.message:o("device.resetFailed"),"error")}finally{I(null)}}})}function le(k){re(null),k()}function H(k,de){const _=de==="mobile"?-k.id:k.id,N=se===_;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${N?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>re(N?null:_),children:[o("device.action")," ",t.jsx(yl,{size:14})]}),N?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===k.id,onClick:()=>le(()=>L(k)),children:[t.jsx(Dd,{size:14}),o("device.unbind")]}),k.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:G===k.id,onClick:()=>le(()=>te(k)),children:[t.jsx(bl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:U===k.user_id,onClick:()=>le(()=>A(k)),children:[t.jsx(Rv,{size:14}),o("device.resetUser")]})]}):null]})}const F=Math.ceil(f/$h);return t.jsxs($t,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:f})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:Q,onClick:()=>void D(S,j,x),children:[t.jsx(zt,{size:16}),o(Q?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:Y,children:[t.jsx("select",{className:"config-input filter-select",value:x,onChange:k=>y(k.target.value),children:Ij.map(k=>t.jsx("option",{value:k,children:tw(k,o)},k))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Zo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:k=>E(k.target.value),placeholder:o(x==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(us,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Q&&d.length===0?t.jsx(vt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(k=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:k.user_email??"-"}),t.jsxs("small",{children:["ID: ",k.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[k.plan_name??"-",k.user_plan_id?` #${k.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Qh(k.status,o)}),t.jsxs("span",{className:`online-badge ${k.is_online?"online":"offline"}`,children:[k.is_online?t.jsx(hh,{size:14}):t.jsx(fh,{size:14}),k.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:k.uuid,onClick:()=>w(k),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:k.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),k.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:k.hwid,onClick:()=>he(k),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:k.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:k.user_agent??"",children:k.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${k.last_ip??"-"} / ${k.first_ip??"-"}`,children:[k.last_ip??"-",k.first_ip?` (${k.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${Za(k.device_upload)} / ${o("device.download")}: ${Za(k.device_download)}`,children:[Za(k.device_used_traffic)," / ",o("device.upload"),": ",Za(k.device_upload)," / ",o("device.download"),": ",Za(k.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Ho(k)} / ${Lo(k)}`,children:[o("device.onlineIps"),": ",Ho(k)," / ",o("device.onlineNodes"),": ",Lo(k)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ls(k.first_seen_at)," / ",o("device.lastSeen"),": ",ls(k.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:H(k,"mobile")})]},k.id)),!Q&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(k=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:k.user_email??"-"}),t.jsxs("small",{children:["ID: ",k.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[k.plan_name??"-",k.user_plan_id?` #${k.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Qh(k.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:Za(k.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",Za(k.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",Za(k.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${k.is_online?"online":"offline"}`,children:[k.is_online?t.jsx(hh,{size:14}):t.jsx(fh,{size:14}),k.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Ho(k),children:[o("device.onlineIps"),": ",Ho(k)]}),t.jsxs("small",{title:Lo(k),children:[o("device.onlineNodes"),": ",Lo(k)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ls(k.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:k.uuid,onClick:()=>w(k),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:k.uuid})]})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),k.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:k.hwid,onClick:()=>he(k),children:[t.jsx(wn,{size:14}),t.jsx("span",{className:"mono",children:k.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:k.user_agent??"",children:k.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:k.last_ip??"-"}),t.jsx("small",{children:k.first_ip?`${o("device.firstIp")}: ${k.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ls(k.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ls(k.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:H(k,"desktop")})]},k.id)),!Q&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),F>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:S<=1||Q,onClick:()=>void D(S-1,j,x),children:[t.jsx(ya,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:S,total:F})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:S>=F||Q,onClick:()=>void D(S+1,j,x),children:[o("device.next"),t.jsx(va,{size:14})]})]}):null]})]})}const lw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Vd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Vd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Xh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Vd(s.plan_id)}:{...lw}}function wd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function iw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function sw(s){return Number(s)===1}function Zh(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function Ka(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function ow(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState([]),[m,S]=h.useState(null),[v,x]=h.useState(!0),[y,j]=h.useState(!1),[E,Q]=h.useState(null),[W,K]=h.useState(""),z=h.useCallback(async()=>{x(!0),K("");try{const[D,Y]=await Promise.all([e0(),jl()]);d(D),f(Y)}catch(D){K(D instanceof Error?D.message:i("webcon.toastLoadFailed"))}finally{x(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}z()},[z,s]);const G=h.useMemo(()=>u.map(D=>({id:Number(D.id),name:D.name})),[u]);function R(D,Y){S(ne=>ne&&{...ne,[D]:Y})}function U(D,Y){S(ne=>{if(!ne)return ne;const he=Y?Array.from(new Set([...ne.plan_ids,D])):ne.plan_ids.filter(w=>w!==D);return{...ne,plan_ids:he}})}async function I(D){var ne,he;if(D.preventDefault(),!m)return;const Y=wd(m.domain);j(!0),K("");try{await t0({id:m.id,email:m.email.trim(),domain:Y,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),S(null),(ne=window.showToast)==null||ne.call(window,i("webcon.toastSaveSuccess"),"success"),await z()}catch(w){const L=w instanceof Error?w.message:i("webcon.toastSaveFailed");K(L),(he=window.showToast)==null||he.call(window,L,"error")}finally{j(!1)}}async function se(D){var Y,ne;Q(D.id);try{await a0(D.id),(Y=window.showToast)==null||Y.call(window,i("webcon.toastToggleSuccess"),"success"),await z()}catch(he){const w=he instanceof Error?he.message:i("webcon.toastToggleFailed");K(w),(ne=window.showToast)==null||ne.call(window,w,"error")}finally{Q(null)}}function re(D){var Y;(Y=window.showConfirm)==null||Y.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ne,he;Q(D.id),K("");try{await n0(D.id),(ne=window.showToast)==null||ne.call(window,i("webcon.toastDeleteSuccess"),"success"),await z()}catch(w){const L=w instanceof Error?w.message:i("webcon.toastDeleteFailed");K(L),(he=window.showToast)==null||he.call(window,L,"error")}finally{Q(null)}}})}return t.jsxs($t,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void z(),children:[t.jsx(zt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>S(Xh()),children:[t.jsx(Nn,{size:16}),i("webcon.add")]})]})]}),W?t.jsx("div",{className:"form-error",children:W}):null,v&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(D=>{var ne;const Y=Vd(D.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",D.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${sw(D.status)?"active":""}`,type:"button",disabled:E===D.id,onClick:()=>void se(D),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:D.email??"-"}),t.jsx("small",{children:Number(D.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:D.domain}),t.jsxs("small",{children:["/",String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:D.title||"-"}),t.jsx("small",{children:D.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(Sv,{size:13}),D.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(fs,{size:13}),D.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Zh(Y,G)}),t.jsx("small",{children:Y.length?`${Y.length} selected`:"not restricted"})]})}),t.jsx("td",{children:iw(D.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>S(Xh(D)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:E===D.id,onClick:()=>re(D),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},D.id)}),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>S(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:D=>D.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>S(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:I,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Ka("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:D=>R("email",D.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Ka("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:D=>R("domain",D.target.value),onBlur:D=>R("domain",wd(D.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Ka("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:D=>R("title",D.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Ka("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:D=>R("description",D.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Ka("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:D=>R("logo",D.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Ka("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:D=>R("background_url",D.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Ka("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[G.map(D=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(D.id),onChange:Y=>U(D.id,Y.target.checked)}),t.jsx("span",{children:D.name})]},D.id)),G.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Ka("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:D=>R("custom_html",D.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(Ov,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:wd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Zd,{size:12})," ",Zh(m.plan_ids,G)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>S(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(Sn,{size:16}),i(y?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Kh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function _d(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function rw(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[v,x]=h.useState(!1),[y,j]=h.useState(""),[E,Q]=h.useState(""),W=h.useCallback(async()=>{S(!0),j("");try{d(await Y1())}catch(R){j(R instanceof Error?R.message:i("notice.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);async function K(R){var U,I;if(R.preventDefault(),!!u){x(!0),j(""),Q("");try{const se=u.tags?u.tags.split(",").map(re=>re.trim()).filter(Boolean):[];await $1({id:u.id,title:u.title,content:u.content,img_url:u.img_url||null,tags:se.length?se:null}),f(null),(U=window.showToast)==null||U.call(window,i("notice.saveSuccess"),"success"),await W()}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("notice.saveFailed"),"error")}finally{x(!1)}}}async function z(R){var U;try{await X1(R),await W()}catch(I){(U=window.showToast)==null||U.call(window,I instanceof Error?I.message:i("notice.toggleFailed"),"error")}}async function G(R){var U;(U=window.showConfirm)==null||U.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var I,se;try{await Q1(R),(I=window.showToast)==null||I.call(window,i("notice.deleteSuccess"),"success"),await W()}catch(re){(se=window.showToast)==null||se.call(window,re instanceof Error?re.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(_d()),children:[t.jsx(Nn,{size:16}),i("notice.addNotice")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,E?t.jsx("div",{className:"form-success",children:E}):null,m&&o.length===0?t.jsx(vt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{var U;return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void z(R.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((U=R.tags)==null?void 0:U.map((I,se)=>t.jsx("span",{className:"tag",children:I},se)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Kh(R.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>f(_d(R)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void G(R.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},R.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(R=>t.jsxs("div",{className:`notice-mobile-card ${R.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",R.id]})}),t.jsx("button",{className:`admin-switch ${R.show?"active":""}`,type:"button",onClick:()=>void z(R.id),"aria-label":R.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:R.title}),t.jsx("div",{className:"notice-tags",children:R.tags&&R.tags.length>0?R.tags.map((U,I)=>t.jsx("span",{className:"tag-badge",children:U},I)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Kh(R.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>f(_d(R)),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void G(R.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},R.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:R=>f({...u,title:R.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:u.content,onChange:R=>f({...u,content:R.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:u.img_url,onChange:R=>f({...u,img_url:R.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:u.tags,onChange:R=>f({...u,tags:R.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sn,{size:16}),i(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function Nd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Jh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Sd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function cw(){var w;const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!1),[v,x]=h.useState(null),[y,j]=h.useState(""),[E,Q]=h.useState(!0),[W,K]=h.useState(!1),[z,G]=h.useState(""),R=h.useRef(null),[U,I]=h.useState([]),[se,re]=h.useState(null),D=h.useCallback(async()=>{Q(!0),G("");try{d(await Z1())}catch(L){G(L instanceof Error?L.message:"Load failed")}finally{Q(!1)}},[]);h.useEffect(()=>{if(!At()){s.replace("/login");return}D(),jl().then(L=>{L&&I(L)}).catch(()=>{})},[D,s]),h.useEffect(()=>{var L;(L=R.current)==null||L.scrollIntoView({behavior:"smooth"})},[u]);async function Y(L){var te;x(L),j(""),f(null),re(null),S(!0);try{const A=await bh(L);if(f(A),A&&A.user_id)try{const le=await _x(A.user_id);le&&le.data&&re(le.data)}catch(le){console.error("Failed to load user info:",le)}}catch{(te=window.showToast)==null||te.call(window,"Failed to load message thread","error")}finally{S(!1)}}async function ne(L){var te,A;if(L.preventDefault(),!(!v||!y.trim())){K(!0),G("");try{await K1(v,y),j(""),(te=window.showToast)==null||te.call(window,"Reply sent!","success");try{const le=await bh(v);f(le)}catch{}await D()}catch(le){(A=window.showToast)==null||A.call(window,le instanceof Error?le.message:"Reply failed","error")}finally{K(!1)}}}async function he(L){var te;(te=window.showConfirm)==null||te.call(window,{message:"Close this ticket?",onConfirm:async()=>{var A,le;G("");try{await J1(L),(A=window.showToast)==null||A.call(window,"Ticket closed!","success"),v===L&&(x(null),f(null)),await D()}catch(H){G(H instanceof Error?H.message:"Close failed"),(le=window.showToast)==null||le.call(window,H instanceof Error?H.message:"Close failed","error")}}})}return t.jsxs($t,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:D,disabled:E,children:[t.jsx(zt,{size:16}),i("common.refresh")]})})]}),z?t.jsx("div",{className:"form-error",children:z}):null,E&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(L=>{const te=Jh(L.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:L.id}),t.jsx("td",{children:t.jsx("strong",{children:L.subject})}),t.jsxs("td",{children:["#",L.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Sd(L.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})}),t.jsx("td",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:Nd(L.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(is,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(L.id),children:[t.jsx(Ed,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(is,{size:14}),i("ticket.viewHistory")]})})})]},L.id)}),!E&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(L=>{const te=Jh(L.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:L.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Sd(L.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",L.id]})]}),t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",L.user_id]})]}),t.jsx("span",{children:L.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:Nd(L.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:L.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(is,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(L.id),children:[t.jsx(Ed,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void Y(L.id),children:[t.jsx(is,{size:14}),i("ticket.viewHistory")]})})]},L.id)}),!E&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:u?`${i("ticket.ticketDetail")}: ${u.subject}`:`${i("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[i("ticket.user"),": #",u==null?void 0:u.user_id," | ",i("ticket.level"),": ",u!=null?Sd(u.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{x(null),f(null)},children:t.jsx(st,{size:18})})]}),se&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:se.email,children:se.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((w=U.find(L=>L.id===se.plan_id))==null?void 0:w.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[_n(se.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:se.expired_at?new Date(se.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(vt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[u!=null&&u.message&&u.message.length>0?u.message.map(L=>{const te=L.is_me;return t.jsxs("div",{className:`chat-message ${te?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:L.message}),t.jsxs("div",{className:"chat-meta",children:[te?i("ticket.staff"):`${i("ticket.user")} #${L.user_id}`," • ",Nd(L.created_at)]})]},L.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:R})]}),(u==null?void 0:u.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:y,onChange:L=>j(L.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:W||!y.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(px,{size:14}),W?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Vh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Fh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Wh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function dw(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState([]),[u,f]=h.useState(null),[m,S]=h.useState(!0),[v,x]=h.useState(!1),[y,j]=h.useState(""),[E,Q]=h.useState(""),W=h.useCallback(async()=>{S(!0),j("");try{d(await V1())}catch(U){j(U instanceof Error?U.message:i("knowledge.loadFailed"))}finally{S(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);async function K(U){var I;try{const se=await F1(U.id);f(Wh(se))}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("knowledge.detailFailed"),"error")}}async function z(U){var I,se;if(U.preventDefault(),!!u){x(!0),j(""),Q("");try{await W1({id:u.id,category:u.category,title:u.title,body:u.body,language:u.language||null,sort:u.sort?Number(u.sort):null}),f(null),(I=window.showToast)==null||I.call(window,i("knowledge.saveSuccess"),"success"),await W()}catch(re){(se=window.showToast)==null||se.call(window,re instanceof Error?re.message:i("knowledge.saveFailed"),"error")}finally{x(!1)}}}async function G(U){var I;try{await I1(U),await W()}catch(se){(I=window.showToast)==null||I.call(window,se instanceof Error?se.message:i("knowledge.toggleFailed"),"error")}}async function R(U){var I;(I=window.showConfirm)==null||I.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var se,re;try{await P1(U),(se=window.showToast)==null||se.call(window,i("knowledge.deleteSuccess"),"success"),await W()}catch(D){(re=window.showToast)==null||re.call(window,D instanceof Error?D.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs($t,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:m,children:[t.jsx(zt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>f(Wh()),children:[t.jsx(Nn,{size:16}),i("knowledge.addArticle")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,E?t.jsx("div",{className:"form-success",children:E}):null,m&&o.length===0?t.jsx(vt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:U.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:U.language&&Fh[U.language]||U.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void G(U.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:U.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Vh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(U),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Yt,{size:14}),i("common.delete")]})]})})]},U.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(U=>t.jsxs("div",{className:`knowledge-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",U.id]}),U.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",U.sort]})]}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void G(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsxs("div",{className:"card-meta",children:[U.category&&t.jsx("span",{className:"category-badge",children:U.category}),U.language&&t.jsx("span",{className:"lang-badge",children:Fh[U.language]||U.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Vh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void K(U),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void R(U.id),children:[t.jsx(Yt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),u?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:u.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>f(null),children:t.jsx(st,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:z,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:u.category,onChange:U=>f({...u,category:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:u.title,onChange:U=>f({...u,title:U.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:u.body,onChange:U=>f({...u,body:U.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:u.language,onChange:U=>f({...u,language:U.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:u.sort,onChange:U=>f({...u,sort:U.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>f(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(Sn,{size:16}),i(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function uw(){const s=Dt(),{t:i}=Ke(),[o,d]=h.useState(null),[u,f]=h.useState(null),[m,S]=h.useState(null),[v,x]=h.useState(""),[y,j]=h.useState(!0),[E,Q]=h.useState(""),W=h.useCallback(async()=>{j(!0),Q("");try{const[z,G,R,U]=await Promise.all([l0().catch(()=>({data:{}})),o0().catch(()=>({data:{}})),r0().catch(()=>({data:[]})),c0().catch(()=>({data:""}))]);d(z.data),f(G.data),S(R.data),x(typeof U.data=="string"?U.data:"")}catch(z){Q(z instanceof Error?z.message:i("queue.toastLoadFailed"))}finally{j(!1)}},[i]);h.useEffect(()=>{if(!At()){s.replace("/login");return}W()},[W,s]);function K(z,G,R){return z?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[R," ",G]}),t.jsx("div",{className:"queue-grid",children:Object.entries(z).map(([U,I])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:U}),t.jsx("strong",{children:typeof I=="object"?JSON.stringify(I):String(I??"—")})]},U))})]}):null}return t.jsxs($t,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:W,disabled:y,children:[t.jsx(zt,{size:16}),i("common.refresh")]})})]}),E?t.jsx("div",{className:"form-error",children:E}):null,y?t.jsx(vt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[K(o,i("queue.systemStatus"),t.jsx(Yo,{size:18})),K(u,i("queue.queueStats"),t.jsx(Zd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(fv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(wv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const pw=h.createContext(null);function mw({children:s}){const[i,o]=h.useState([]),[d,u]=h.useState(null),f=h.useCallback((x,y="success")=>{const j=Math.random().toString(36).substring(2,9);o(E=>[...E,{id:j,message:x,type:y}]),setTimeout(()=>{o(E=>E.filter(Q=>Q.id!==j))},5e3)},[]),m=h.useCallback(x=>{u(x)},[]);h.useEffect(()=>{typeof window<"u"&&(window.showToast=f,window.showConfirm=m)},[f,m]);const S=async()=>{if(d){try{await d.onConfirm()}catch(x){console.error("Error in onConfirm:",x)}u(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),u(null))};return t.jsxs(pw.Provider,{value:{showToast:f,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(x=>{let y=kv;return x.type==="success"&&(y=dx),x.type==="error"&&(y=bv),x.type==="warning"&&(y=Md),t.jsxs("div",{className:`toast-card toast-${x.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(y,{size:18})}),t.jsx("div",{className:"toast-message",children:x.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(j=>j.filter(E=>E.id!==x.id)),children:t.jsx(st,{size:14})})]},x.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:x=>x.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Md,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:S,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function fw({children:s}){return t.jsx(y0,{children:t.jsx(mw,{children:s})})}function hw(){return t.jsx(fw,{children:t.jsxs(Wy,{children:[t.jsx(_t,{path:"/login",element:t.jsx(v0,{})}),t.jsx(_t,{path:"/dashboard",element:t.jsx(E0,{})}),t.jsx(_t,{path:"/config/system",element:t.jsx(L0,{})}),t.jsx(_t,{path:"/config/payment",element:t.jsx(G0,{})}),t.jsx(_t,{path:"/config/theme",element:t.jsx(Q0,{})}),t.jsx(_t,{path:"/server/manage",element:t.jsx(Nj,{})}),t.jsx(_t,{path:"/server/group",element:t.jsx(Sj,{})}),t.jsx(_t,{path:"/server/route",element:t.jsx(zj,{})}),t.jsx(_t,{path:"/plan",element:t.jsx(Dj,{})}),t.jsx(_t,{path:"/order",element:t.jsx(Uj,{})}),t.jsx(_t,{path:"/coupon",element:t.jsx(Rj,{})}),t.jsx(_t,{path:"/giftcard",element:t.jsx(Lj,{})}),t.jsx(_t,{path:"/user",element:t.jsx(Xj,{})}),t.jsx(_t,{path:"/subscription",element:t.jsx(Pj,{})}),t.jsx(_t,{path:"/device",element:t.jsx(aw,{})}),t.jsx(_t,{path:"/webcon",element:t.jsx(ow,{})}),t.jsx(_t,{path:"/notice",element:t.jsx(rw,{})}),t.jsx(_t,{path:"/ticket",element:t.jsx(cw,{})}),t.jsx(_t,{path:"/knowledge",element:t.jsx(dw,{})}),t.jsx(_t,{path:"/queue",element:t.jsx(uw,{})}),t.jsx(_t,{path:"/",element:t.jsx(nh,{to:"/dashboard",replace:!0})}),t.jsx(_t,{path:"*",element:t.jsx(nh,{to:"/dashboard",replace:!0})})]})})}iy.createRoot(document.getElementById("root")).render(t.jsx(h.StrictMode,{children:t.jsx(lv,{children:t.jsx(hw,{})})}));
