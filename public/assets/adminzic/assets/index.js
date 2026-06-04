function $b(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=o(p);fetch(p.href,h)}})();function Qb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var td={exports:{}},es={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Xb(){if(Rf)return es;Rf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var _ in p)_!=="key"&&(h[_]=p[_])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return es.Fragment=i,es.jsx=o,es.jsxs=o,es}var Hf;function Zb(){return Hf||(Hf=1,td.exports=Xb()),td.exports}var t=Zb(),nd={exports:{}},Re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Kb(){if(Lf)return Re;Lf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),z=Symbol.iterator;function Y(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,C={};function B(S,Q,pe){this.props=S,this.context=Q,this.refs=C,this.updater=pe||P}B.prototype.isReactComponent={},B.prototype.setState=function(S,Q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Q,"setState")},B.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function U(){}U.prototype=B.prototype;function O(S,Q,pe){this.props=S,this.context=Q,this.refs=C,this.updater=pe||P}var ee=O.prototype=new U;ee.constructor=O,K(ee,B.prototype),ee.isPureReactComponent=!0;var ie=Array.isArray;function oe(){}var E={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function ne(S,Q,pe){var me=pe.ref;return{$$typeof:s,type:S,key:Q,ref:me!==void 0?me:null,props:pe}}function he(S,Q){return ne(S.type,Q,S.props)}function N(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function R(S){var Q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(pe){return Q[pe]})}var te=/\/+/g;function M(S,Q){return typeof S=="object"&&S!==null&&S.key!=null?R(""+S.key):Q.toString(36)}function re(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(oe,oe):(S.status="pending",S.then(function(Q){S.status==="pending"&&(S.status="fulfilled",S.value=Q)},function(Q){S.status==="pending"&&(S.status="rejected",S.reason=Q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function A(S,Q,pe,me,Se){var ke=typeof S;(ke==="undefined"||ke==="boolean")&&(S=null);var Ae=!1;if(S===null)Ae=!0;else switch(ke){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(S.$$typeof){case s:case i:Ae=!0;break;case v:return Ae=S._init,A(Ae(S._payload),Q,pe,me,Se)}}if(Ae)return Se=Se(S),Ae=me===""?"."+M(S,0):me,ie(Se)?(pe="",Ae!=null&&(pe=Ae.replace(te,"$&/")+"/"),A(Se,Q,pe,"",function(Ke){return Ke})):Se!=null&&(N(Se)&&(Se=he(Se,pe+(Se.key==null||S&&S.key===Se.key?"":(""+Se.key).replace(te,"$&/")+"/")+Ae)),Q.push(Se)),1;Ae=0;var lt=me===""?".":me+":";if(ie(S))for(var Ge=0;Ge<S.length;Ge++)me=S[Ge],ke=lt+M(me,Ge),Ae+=A(me,Q,pe,ke,Se);else if(Ge=Y(S),typeof Ge=="function")for(S=Ge.call(S),Ge=0;!(me=S.next()).done;)me=me.value,ke=lt+M(me,Ge++),Ae+=A(me,Q,pe,ke,Se);else if(ke==="object"){if(typeof S.then=="function")return A(re(S),Q,pe,me,Se);throw Q=String(S),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function J(S,Q,pe){if(S==null)return S;var me=[],Se=0;return A(S,me,"","",function(ke){return Q.call(pe,ke,Se++)}),me}function x(S){if(S._status===-1){var Q=S._result;Q=Q(),Q.then(function(pe){(S._status===0||S._status===-1)&&(S._status=1,S._result=pe)},function(pe){(S._status===0||S._status===-1)&&(S._status=2,S._result=pe)}),S._status===-1&&(S._status=0,S._result=Q)}if(S._status===1)return S._result.default;throw S._result}var W=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},H={map:J,forEach:function(S,Q,pe){J(S,function(){Q.apply(this,arguments)},pe)},count:function(S){var Q=0;return J(S,function(){Q++}),Q},toArray:function(S){return J(S,function(Q){return Q})||[]},only:function(S){if(!N(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return Re.Activity=w,Re.Children=H,Re.Component=B,Re.Fragment=o,Re.Profiler=p,Re.PureComponent=O,Re.StrictMode=d,Re.Suspense=j,Re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,Re.__COMPILER_RUNTIME={__proto__:null,c:function(S){return E.H.useMemoCache(S)}},Re.cache=function(S){return function(){return S.apply(null,arguments)}},Re.cacheSignal=function(){return null},Re.cloneElement=function(S,Q,pe){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var me=K({},S.props),Se=S.key;if(Q!=null)for(ke in Q.key!==void 0&&(Se=""+Q.key),Q)!$.call(Q,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&Q.ref===void 0||(me[ke]=Q[ke]);var ke=arguments.length-2;if(ke===1)me.children=pe;else if(1<ke){for(var Ae=Array(ke),lt=0;lt<ke;lt++)Ae[lt]=arguments[lt+2];me.children=Ae}return ne(S.type,Se,me)},Re.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},Re.createElement=function(S,Q,pe){var me,Se={},ke=null;if(Q!=null)for(me in Q.key!==void 0&&(ke=""+Q.key),Q)$.call(Q,me)&&me!=="key"&&me!=="__self"&&me!=="__source"&&(Se[me]=Q[me]);var Ae=arguments.length-2;if(Ae===1)Se.children=pe;else if(1<Ae){for(var lt=Array(Ae),Ge=0;Ge<Ae;Ge++)lt[Ge]=arguments[Ge+2];Se.children=lt}if(S&&S.defaultProps)for(me in Ae=S.defaultProps,Ae)Se[me]===void 0&&(Se[me]=Ae[me]);return ne(S,ke,Se)},Re.createRef=function(){return{current:null}},Re.forwardRef=function(S){return{$$typeof:_,render:S}},Re.isValidElement=N,Re.lazy=function(S){return{$$typeof:v,_payload:{_status:-1,_result:S},_init:x}},Re.memo=function(S,Q){return{$$typeof:g,type:S,compare:Q===void 0?null:Q}},Re.startTransition=function(S){var Q=E.T,pe={};E.T=pe;try{var me=S(),Se=E.S;Se!==null&&Se(pe,me),typeof me=="object"&&me!==null&&typeof me.then=="function"&&me.then(oe,W)}catch(ke){W(ke)}finally{Q!==null&&pe.types!==null&&(Q.types=pe.types),E.T=Q}},Re.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},Re.use=function(S){return E.H.use(S)},Re.useActionState=function(S,Q,pe){return E.H.useActionState(S,Q,pe)},Re.useCallback=function(S,Q){return E.H.useCallback(S,Q)},Re.useContext=function(S){return E.H.useContext(S)},Re.useDebugValue=function(){},Re.useDeferredValue=function(S,Q){return E.H.useDeferredValue(S,Q)},Re.useEffect=function(S,Q){return E.H.useEffect(S,Q)},Re.useEffectEvent=function(S){return E.H.useEffectEvent(S)},Re.useId=function(){return E.H.useId()},Re.useImperativeHandle=function(S,Q,pe){return E.H.useImperativeHandle(S,Q,pe)},Re.useInsertionEffect=function(S,Q){return E.H.useInsertionEffect(S,Q)},Re.useLayoutEffect=function(S,Q){return E.H.useLayoutEffect(S,Q)},Re.useMemo=function(S,Q){return E.H.useMemo(S,Q)},Re.useOptimistic=function(S,Q){return E.H.useOptimistic(S,Q)},Re.useReducer=function(S,Q,pe){return E.H.useReducer(S,Q,pe)},Re.useRef=function(S){return E.H.useRef(S)},Re.useState=function(S){return E.H.useState(S)},Re.useSyncExternalStore=function(S,Q,pe){return E.H.useSyncExternalStore(S,Q,pe)},Re.useTransition=function(){return E.H.useTransition()},Re.version="19.2.6",Re}var qf;function Rd(){return qf||(qf=1,nd.exports=Kb()),nd.exports}var f=Rd();const Vb=Qb(f),Jb=$b({__proto__:null,default:Vb},[f]);var ad={exports:{}},ts={},ld={exports:{}},id={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Fb(){return Bf||(Bf=1,(function(s){function i(A,J){var x=A.length;A.push(J);e:for(;0<x;){var W=x-1>>>1,H=A[W];if(0<p(H,J))A[W]=J,A[x]=H,x=W;else break e}}function o(A){return A.length===0?null:A[0]}function d(A){if(A.length===0)return null;var J=A[0],x=A.pop();if(x!==J){A[0]=x;e:for(var W=0,H=A.length,S=H>>>1;W<S;){var Q=2*(W+1)-1,pe=A[Q],me=Q+1,Se=A[me];if(0>p(pe,x))me<H&&0>p(Se,pe)?(A[W]=Se,A[me]=x,W=me):(A[W]=pe,A[Q]=x,W=Q);else if(me<H&&0>p(Se,x))A[W]=Se,A[me]=x,W=me;else break e}}return J}function p(A,J){var x=A.sortIndex-J.sortIndex;return x!==0?x:A.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,_=m.now();s.unstable_now=function(){return m.now()-_}}var j=[],g=[],v=1,w=null,z=3,Y=!1,P=!1,K=!1,C=!1,B=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function ee(A){for(var J=o(g);J!==null;){if(J.callback===null)d(g);else if(J.startTime<=A)d(g),J.sortIndex=J.expirationTime,i(j,J);else break;J=o(g)}}function ie(A){if(K=!1,ee(A),!P)if(o(j)!==null)P=!0,oe||(oe=!0,R());else{var J=o(g);J!==null&&re(ie,J.startTime-A)}}var oe=!1,E=-1,$=5,ne=-1;function he(){return C?!0:!(s.unstable_now()-ne<$)}function N(){if(C=!1,oe){var A=s.unstable_now();ne=A;var J=!0;try{e:{P=!1,K&&(K=!1,U(E),E=-1),Y=!0;var x=z;try{t:{for(ee(A),w=o(j);w!==null&&!(w.expirationTime>A&&he());){var W=w.callback;if(typeof W=="function"){w.callback=null,z=w.priorityLevel;var H=W(w.expirationTime<=A);if(A=s.unstable_now(),typeof H=="function"){w.callback=H,ee(A),J=!0;break t}w===o(j)&&d(j),ee(A)}else d(j);w=o(j)}if(w!==null)J=!0;else{var S=o(g);S!==null&&re(ie,S.startTime-A),J=!1}}break e}finally{w=null,z=x,Y=!1}J=void 0}}finally{J?R():oe=!1}}}var R;if(typeof O=="function")R=function(){O(N)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,M=te.port2;te.port1.onmessage=N,R=function(){M.postMessage(null)}}else R=function(){B(N,0)};function re(A,J){E=B(function(){A(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(A){A.callback=null},s.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},s.unstable_getCurrentPriorityLevel=function(){return z},s.unstable_next=function(A){switch(z){case 1:case 2:case 3:var J=3;break;default:J=z}var x=z;z=J;try{return A()}finally{z=x}},s.unstable_requestPaint=function(){C=!0},s.unstable_runWithPriority=function(A,J){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var x=z;z=A;try{return J()}finally{z=x}},s.unstable_scheduleCallback=function(A,J,x){var W=s.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?W+x:W):x=W,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=x+H,A={id:v++,callback:J,priorityLevel:A,startTime:x,expirationTime:H,sortIndex:-1},x>W?(A.sortIndex=x,i(g,A),o(j)===null&&A===o(g)&&(K?(U(E),E=-1):K=!0,re(ie,x-W))):(A.sortIndex=H,i(j,A),P||Y||(P=!0,oe||(oe=!0,R()))),A},s.unstable_shouldYield=he,s.unstable_wrapCallback=function(A){var J=z;return function(){var x=z;z=J;try{return A.apply(this,arguments)}finally{z=x}}}})(id)),id}var Gf;function Wb(){return Gf||(Gf=1,ld.exports=Fb()),ld.exports}var sd={exports:{}},Pt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Pb(){if(Yf)return Pt;Yf=1;var s=Rd();function i(j){var g="https://react.dev/errors/"+j;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+j+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(j,g,v){var w=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:w==null?null:""+w,children:j,containerInfo:g,implementation:v}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(j,g){if(j==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Pt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Pt.createPortal=function(j,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return h(j,g,null,v)},Pt.flushSync=function(j){var g=m.T,v=d.p;try{if(m.T=null,d.p=2,j)return j()}finally{m.T=g,d.p=v,d.d.f()}},Pt.preconnect=function(j,g){typeof j=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(j,g))},Pt.prefetchDNS=function(j){typeof j=="string"&&d.d.D(j)},Pt.preinit=function(j,g){if(typeof j=="string"&&g&&typeof g.as=="string"){var v=g.as,w=_(v,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,Y=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?d.d.S(j,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:w,integrity:z,fetchPriority:Y}):v==="script"&&d.d.X(j,{crossOrigin:w,integrity:z,fetchPriority:Y,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Pt.preinitModule=function(j,g){if(typeof j=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=_(g.as,g.crossOrigin);d.d.M(j,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(j)},Pt.preload=function(j,g){if(typeof j=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,w=_(v,g.crossOrigin);d.d.L(j,v,{crossOrigin:w,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Pt.preloadModule=function(j,g){if(typeof j=="string")if(g){var v=_(g.as,g.crossOrigin);d.d.m(j,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(j)},Pt.requestFormReset=function(j){d.d.r(j)},Pt.unstable_batchedUpdates=function(j,g){return j(g)},Pt.useFormState=function(j,g,v){return m.H.useFormState(j,g,v)},Pt.useFormStatus=function(){return m.H.useHostTransitionStatus()},Pt.version="19.2.6",Pt}var $f;function Fh(){if($f)return sd.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),sd.exports=Pb(),sd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qf;function Ib(){if(Qf)return ts;Qf=1;var s=Wb(),i=Rd(),o=Fh();function d(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function _(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function j(e){if(h(e)!==e)throw Error(d(188))}function g(e){var n=e.alternate;if(!n){if(n=h(e),n===null)throw Error(d(188));return n!==e?null:e}for(var a=e,l=n;;){var r=a.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){a=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===a)return j(r),e;if(c===l)return j(r),n;c=c.sibling}throw Error(d(188))}if(a.return!==l.return)a=r,l=c;else{for(var u=!1,b=r.child;b;){if(b===a){u=!0,a=r,l=c;break}if(b===l){u=!0,l=r,a=c;break}b=b.sibling}if(!u){for(b=c.child;b;){if(b===a){u=!0,a=c,l=r;break}if(b===l){u=!0,l=c,a=r;break}b=b.sibling}if(!u)throw Error(d(189))}}if(a.alternate!==l)throw Error(d(190))}if(a.tag!==3)throw Error(d(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var w=Object.assign,z=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ne=Symbol.for("react.activity"),he=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function M(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case B:return"Profiler";case C:return"StrictMode";case ie:return"Suspense";case oe:return"SuspenseList";case ne:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case O:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case ee:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return n=e.displayName||null,n!==null?n:M(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return M(e(n))}catch{}}return null}var re=Array.isArray,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},W=[],H=-1;function S(e){return{current:e}}function Q(e){0>H||(e.current=W[H],W[H]=null,H--)}function pe(e,n){H++,W[H]=e.current,e.current=n}var me=S(null),Se=S(null),ke=S(null),Ae=S(null);function lt(e,n){switch(pe(ke,n),pe(Se,e),pe(me,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?lf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=lf(n),e=sf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(me),pe(me,e)}function Ge(){Q(me),Q(Se),Q(ke)}function Ke(e){e.memoizedState!==null&&pe(Ae,e);var n=me.current,a=sf(n,e.type);n!==a&&(pe(Se,e),pe(me,a))}function Ct(e){Se.current===e&&(Q(me),Q(Se)),Ae.current===e&&(Q(Ae),Fi._currentValue=x)}var Nt,we;function Le(e){if(Nt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Nt=n&&n[1]||"",we=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+we}var tn=!1;function Yt(e,n){if(!e||tn)return"";tn=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(F){var V=F}Reflect.construct(e,[],le)}else{try{le.call()}catch(F){V=F}e.call(le.prototype)}}else{try{throw Error()}catch(F){V=F}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(F){if(F&&V&&typeof F.stack=="string")return[F.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),u=c[0],b=c[1];if(u&&b){var k=u.split(`
`),Z=b.split(`
`);for(r=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===k.length||r===Z.length)for(l=k.length-1,r=Z.length-1;1<=l&&0<=r&&k[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(k[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||k[l]!==Z[r]){var I=`
`+k[l].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=l&&0<=r);break}}}finally{tn=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Le(a):""}function un(e,n){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le("Lazy");case 13:return e.child!==n&&n!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return Yt(e.type,!1);case 11:return Yt(e.type.render,!1);case 1:return Yt(e.type,!0);case 31:return Le("Activity");default:return""}}function gt(e){try{var n="",a=null;do n+=un(e,a),a=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Xt=Object.prototype.hasOwnProperty,Wt=s.unstable_scheduleCallback,zt=s.unstable_cancelCallback,pn=s.unstable_shouldYield,T=s.unstable_requestPaint,be=s.unstable_now,qe=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,rt=s.unstable_UserBlockingPriority,G=s.unstable_NormalPriority,Ne=s.unstable_LowPriority,je=s.unstable_IdlePriority,Ee=s.log,Ie=s.unstable_setDisableYieldValue,Ve=null,Ye=null;function De(e){if(typeof Ee=="function"&&Ie(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ve,e)}catch{}}var mt=Math.clz32?Math.clz32:Wa,ri=Math.log,vl=Math.LN2;function Wa(e){return e>>>=0,e===0?32:31-(ri(e)/vl|0)|0}var Gn=256,mn=262144,Yn=4194304;function nn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,n,a){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?r=nn(l):(u&=b,u!==0?r=nn(u):a||(a=b&~e,a!==0&&(r=nn(a))))):(b=l&~c,b!==0?r=nn(b):u!==0?r=nn(u):a||(a=l&~e,a!==0&&(r=nn(a)))),r===0?0:n!==0&&n!==r&&(n&c)===0&&(c=r&-r,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:r}function ce(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function se(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ue(){var e=Yn;return Yn<<=1,(Yn&62914560)===0&&(Yn=4194304),e}function Je(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function et(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function ft(e,n,a,l,r,c){var u=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,Z=e.hiddenUpdates;for(a=u&~a;0<a;){var I=31-mt(a),le=1<<I;b[I]=0,k[I]=-1;var V=Z[I];if(V!==null)for(Z[I]=null,I=0;I<V.length;I++){var F=V[I];F!==null&&(F.lane&=-536870913)}a&=~le}l!==0&&ct(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~n))}function ct(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-mt(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Oe(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var l=31-mt(a),r=1<<l;r&n|e[l]&n&&(e[l]|=n),a&=~r}}function Hn(e,n){var a=n&-n;return a=(a&42)!==0?1:ci(a),(a&(e.suspendedLanes|n))!==0?0:a}function ci(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Sn(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function fs(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Tf(e.type))}function y(e,n){var a=J.p;try{return J.p=e,n()}finally{J.p=a}}var ue=Math.random().toString(36).slice(2),de="__reactFiber$"+ue,Ce="__reactProps$"+ue,xt="__reactContainer$"+ue,$n="__reactEvents$"+ue,Qn="__reactListeners$"+ue,Zo="__reactHandles$"+ue,di="__reactResources$"+ue,ui="__reactMarker$"+ue;function Ko(e){delete e[de],delete e[Ce],delete e[$n],delete e[Qn],delete e[Zo]}function jl(e){var n=e[de];if(n)return n;for(var a=e.parentNode;a;){if(n=a[xt]||a[de]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=mf(e);e!==null;){if(a=e[de])return a;e=mf(e)}return n}e=a,a=e.parentNode}return null}function wl(e){if(e=e[de]||e[xt]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function pi(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(d(33))}function Nl(e){var n=e[di];return n||(n=e[di]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $t(e){e[ui]=!0}var Zd=new Set,Kd={};function Pa(e,n){_l(e,n),_l(e+"Capture",n)}function _l(e,n){for(Kd[e]=n,e=0;e<n.length;e++)Zd.add(n[e])}var Ax=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Vd={},Jd={};function Ux(e){return Xt.call(Jd,e)?!0:Xt.call(Vd,e)?!1:Ax.test(e)?Jd[e]=!0:(Vd[e]=!0,!1)}function hs(e,n,a){if(Ux(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function xs(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Pn(e,n,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+l)}}function kn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Fd(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Rx(e,n,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return r.call(this)},set:function(u){a=""+u,c.call(this,u)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Vo(e){if(!e._valueTracker){var n=Fd(e)?"checked":"value";e._valueTracker=Rx(e,n,""+e[n])}}function Wd(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),l="";return e&&(l=Fd(e)?e.checked?"true":"false":e.value),e=l,e!==a?(n.setValue(e),!0):!1}function gs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hx=/[\n"\\]/g;function Cn(e){return e.replace(Hx,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Jo(e,n,a,l,r,c,u,b){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),n!=null?u==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+kn(n)):e.value!==""+kn(n)&&(e.value=""+kn(n)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),n!=null?Fo(e,u,kn(n)):a!=null?Fo(e,u,kn(a)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+kn(b):e.removeAttribute("name")}function Pd(e,n,a,l,r,c,u,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Vo(e);return}a=a!=null?""+kn(a):"",n=n!=null?""+kn(n):a,b||n===e.value||(e.value=n),e.defaultValue=n}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Vo(e)}function Fo(e,n,a){n==="number"&&gs(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Sl(e,n,a,l){if(e=e.options,n){n={};for(var r=0;r<a.length;r++)n["$"+a[r]]=!0;for(a=0;a<e.length;a++)r=n.hasOwnProperty("$"+e[a].value),e[a].selected!==r&&(e[a].selected=r),r&&l&&(e[a].defaultSelected=!0)}else{for(a=""+kn(a),n=null,r=0;r<e.length;r++){if(e[r].value===a){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}n!==null||e[r].disabled||(n=e[r])}n!==null&&(n.selected=!0)}}function Id(e,n,a){if(n!=null&&(n=""+kn(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+kn(a):""}function eu(e,n,a,l){if(n==null){if(l!=null){if(a!=null)throw Error(d(92));if(re(l)){if(1<l.length)throw Error(d(93));l=l[0]}a=l}a==null&&(a=""),n=a}a=kn(n),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Vo(e)}function kl(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function tu(e,n,a){var l=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,a):typeof a!="number"||a===0||Lx.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function nu(e,n,a){if(n!=null&&typeof n!="object")throw Error(d(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in n)l=n[r],n.hasOwnProperty(r)&&a[r]!==l&&tu(e,r,l)}else for(var c in n)n.hasOwnProperty(c)&&tu(e,c,n[c])}function Wo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function bs(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function In(){}var Po=null;function Io(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cl=null,zl=null;function au(e){var n=wl(e);if(n&&(e=n.stateNode)){var a=e[Ce]||null;e:switch(e=n.stateNode,n.type){case"input":if(Jo(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var l=a[n];if(l!==e&&l.form===e.form){var r=l[Ce]||null;if(!r)throw Error(d(90));Jo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(n=0;n<a.length;n++)l=a[n],l.form===e.form&&Wd(l)}break e;case"textarea":Id(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&Sl(e,!!a.multiple,n,!1)}}}var er=!1;function lu(e,n,a){if(er)return e(n,a);er=!0;try{var l=e(n);return l}finally{if(er=!1,(Cl!==null||zl!==null)&&(io(),Cl&&(n=Cl,e=zl,zl=Cl=null,au(n),e)))for(n=0;n<e.length;n++)au(e[n])}}function mi(e,n){var a=e.stateNode;if(a===null)return null;var l=a[Ce]||null;if(l===null)return null;a=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(d(231,n,typeof a));return a}var ea=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),tr=!1;if(ea)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){tr=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{tr=!1}var ya=null,nr=null,ys=null;function iu(){if(ys)return ys;var e,n=nr,a=n.length,l,r="value"in ya?ya.value:ya.textContent,c=r.length;for(e=0;e<a&&n[e]===r[e];e++);var u=a-e;for(l=1;l<=u&&n[a-l]===r[c-l];l++);return ys=r.slice(e,1<l?1-l:void 0)}function vs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function js(){return!0}function su(){return!1}function an(e){function n(a,l,r,c,u){this._reactName=a,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(a=e[b],this[b]=a?a(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?js:su,this.isPropagationStopped=su,this}return w(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=js)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=js)},persist:function(){},isPersistent:js}),n}var Ia={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ws=an(Ia),hi=w({},Ia,{view:0,detail:0}),Gx=an(hi),ar,lr,xi,Ns=w({},hi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==xi&&(xi&&e.type==="mousemove"?(ar=e.screenX-xi.screenX,lr=e.screenY-xi.screenY):lr=ar=0,xi=e),ar)},movementY:function(e){return"movementY"in e?e.movementY:lr}}),ou=an(Ns),Yx=w({},Ns,{dataTransfer:0}),$x=an(Yx),Qx=w({},hi,{relatedTarget:0}),ir=an(Qx),Xx=w({},Ia,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=an(Xx),Kx=w({},Ia,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=an(Kx),Jx=w({},Ia,{data:0}),ru=an(Jx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Px[e])?!!n[e]:!1}function sr(){return Ix}var eg=w({},hi,{key:function(e){if(e.key){var n=Fx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=vs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sr,charCode:function(e){return e.type==="keypress"?vs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?vs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=an(eg),ng=w({},Ns,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),cu=an(ng),ag=w({},hi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sr}),lg=an(ag),ig=w({},Ia,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=an(ig),og=w({},Ns,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=an(og),cg=w({},Ia,{newState:0,oldState:0}),dg=an(cg),ug=[9,13,27,32],or=ea&&"CompositionEvent"in window,gi=null;ea&&"documentMode"in document&&(gi=document.documentMode);var pg=ea&&"TextEvent"in window&&!gi,du=ea&&(!or||gi&&8<gi&&11>=gi),uu=" ",pu=!1;function mu(e,n){switch(e){case"keyup":return ug.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tl=!1;function mg(e,n){switch(e){case"compositionend":return fu(n);case"keypress":return n.which!==32?null:(pu=!0,uu);case"textInput":return e=n.data,e===uu&&pu?null:e;default:return null}}function fg(e,n){if(Tl)return e==="compositionend"||!or&&mu(e,n)?(e=iu(),ys=nr=ya=null,Tl=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return du&&n.locale!=="ko"?null:n.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!hg[e.type]:n==="textarea"}function xu(e,n,a,l){Cl?zl?zl.push(l):zl=[l]:Cl=l,n=mo(n,"onChange"),0<n.length&&(a=new ws("onChange","change",null,a,l),e.push({event:a,listeners:n}))}var bi=null,yi=null;function xg(e){Pm(e,0)}function _s(e){var n=pi(e);if(Wd(n))return e}function gu(e,n){if(e==="change")return n}var bu=!1;if(ea){var rr;if(ea){var cr="oninput"in document;if(!cr){var yu=document.createElement("div");yu.setAttribute("oninput","return;"),cr=typeof yu.oninput=="function"}rr=cr}else rr=!1;bu=rr&&(!document.documentMode||9<document.documentMode)}function vu(){bi&&(bi.detachEvent("onpropertychange",ju),yi=bi=null)}function ju(e){if(e.propertyName==="value"&&_s(yi)){var n=[];xu(n,yi,e,Io(e)),lu(xg,n)}}function gg(e,n,a){e==="focusin"?(vu(),bi=n,yi=a,bi.attachEvent("onpropertychange",ju)):e==="focusout"&&vu()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return _s(yi)}function yg(e,n){if(e==="click")return _s(n)}function vg(e,n){if(e==="input"||e==="change")return _s(n)}function jg(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var fn=typeof Object.is=="function"?Object.is:jg;function vi(e,n){if(fn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),l=Object.keys(n);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var r=a[l];if(!Xt.call(n,r)||!fn(e[r],n[r]))return!1}return!0}function wu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Nu(e,n){var a=wu(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=n&&l>=n)return{node:a,offset:n-e};e=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=wu(a)}}function _u(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_u(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Su(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=gs(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=gs(e.document)}return n}function dr(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var wg=ea&&"documentMode"in document&&11>=document.documentMode,El=null,ur=null,ji=null,pr=!1;function ku(e,n,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pr||El==null||El!==gs(l)||(l=El,"selectionStart"in l&&dr(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),ji&&vi(ji,l)||(ji=l,l=mo(ur,"onSelect"),0<l.length&&(n=new ws("onSelect","select",null,n,a),e.push({event:n,listeners:l}),n.target=El)))}function el(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ml={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},mr={},Cu={};ea&&(Cu=document.createElement("div").style,"AnimationEvent"in window||(delete Ml.animationend.animation,delete Ml.animationiteration.animation,delete Ml.animationstart.animation),"TransitionEvent"in window||delete Ml.transitionend.transition);function tl(e){if(mr[e])return mr[e];if(!Ml[e])return e;var n=Ml[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Cu)return mr[e]=n[a];return e}var zu=tl("animationend"),Tu=tl("animationiteration"),Eu=tl("animationstart"),Ng=tl("transitionrun"),_g=tl("transitionstart"),Sg=tl("transitioncancel"),Mu=tl("transitionend"),Du=new Map,fr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");fr.push("scrollEnd");function Ln(e,n){Du.set(e,n),Pa(n,[e])}var Ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},zn=[],Dl=0,hr=0;function ks(){for(var e=Dl,n=hr=Dl=0;n<e;){var a=zn[n];zn[n++]=null;var l=zn[n];zn[n++]=null;var r=zn[n];zn[n++]=null;var c=zn[n];if(zn[n++]=null,l!==null&&r!==null){var u=l.pending;u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r}c!==0&&Ou(a,r,c)}}function Cs(e,n,a,l){zn[Dl++]=e,zn[Dl++]=n,zn[Dl++]=a,zn[Dl++]=l,hr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function xr(e,n,a,l){return Cs(e,n,a,l),zs(e)}function nl(e,n){return Cs(e,null,null,n),zs(e)}function Ou(e,n,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var r=!1,c=e.return;c!==null;)c.childLanes|=a,l=c.alternate,l!==null&&(l.childLanes|=a),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&n!==null&&(r=31-mt(a),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[n]:l.push(n),n.lane=a|536870912),c):null}function zs(e){if(50<$i)throw $i=0,Sc=null,Error(d(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Ol={};function kg(e,n,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(e,n,a,l){return new kg(e,n,a,l)}function gr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ta(e,n){var a=e.alternate;return a===null?(a=hn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Au(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Ts(e,n,a,l,r,c){var u=0;if(l=e,typeof e=="function")gr(e)&&(u=1);else if(typeof e=="string")u=Mb(e,a,me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ne:return e=hn(31,a,n,r),e.elementType=ne,e.lanes=c,e;case K:return al(a.children,r,c,n);case C:u=8,r|=24;break;case B:return e=hn(12,a,n,r|2),e.elementType=B,e.lanes=c,e;case ie:return e=hn(13,a,n,r),e.elementType=ie,e.lanes=c,e;case oe:return e=hn(19,a,n,r),e.elementType=oe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:u=10;break e;case U:u=9;break e;case ee:u=11;break e;case E:u=14;break e;case $:u=16,l=null;break e}u=29,a=Error(d(130,e===null?"null":typeof e,"")),l=null}return n=hn(u,a,n,r),n.elementType=e,n.type=l,n.lanes=c,n}function al(e,n,a,l){return e=hn(7,e,l,n),e.lanes=a,e}function br(e,n,a){return e=hn(6,e,null,n),e.lanes=a,e}function Uu(e){var n=hn(18,null,null,0);return n.stateNode=e,n}function yr(e,n,a){return n=hn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Ru=new WeakMap;function Tn(e,n){if(typeof e=="object"&&e!==null){var a=Ru.get(e);return a!==void 0?a:(n={value:e,source:n,stack:gt(n)},Ru.set(e,n),n)}return{value:e,source:n,stack:gt(n)}}var Al=[],Ul=0,Es=null,wi=0,En=[],Mn=0,va=null,Xn=1,Zn="";function na(e,n){Al[Ul++]=wi,Al[Ul++]=Es,Es=e,wi=n}function Hu(e,n,a){En[Mn++]=Xn,En[Mn++]=Zn,En[Mn++]=va,va=e;var l=Xn;e=Zn;var r=32-mt(l)-1;l&=~(1<<r),a+=1;var c=32-mt(n)+r;if(30<c){var u=r-r%5;c=(l&(1<<u)-1).toString(32),l>>=u,r-=u,Xn=1<<32-mt(n)+r|a<<r|l,Zn=c+e}else Xn=1<<c|a<<r|l,Zn=e}function vr(e){e.return!==null&&(na(e,1),Hu(e,1,0))}function jr(e){for(;e===Es;)Es=Al[--Ul],Al[Ul]=null,wi=Al[--Ul],Al[Ul]=null;for(;e===va;)va=En[--Mn],En[Mn]=null,Zn=En[--Mn],En[Mn]=null,Xn=En[--Mn],En[Mn]=null}function Lu(e,n){En[Mn++]=Xn,En[Mn++]=Zn,En[Mn++]=va,Xn=n.id,Zn=n.overflow,va=e}var Zt=null,bt=null,Pe=!1,ja=null,Dn=!1,wr=Error(d(519));function wa(e){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ni(Tn(n,e)),wr}function qu(e){var n=e.stateNode,a=e.type,l=e.memoizedProps;switch(n[de]=e,n[Ce]=l,a){case"dialog":Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":case"embed":Qe("load",n);break;case"video":case"audio":for(a=0;a<Xi.length;a++)Qe(Xi[a],n);break;case"source":Qe("error",n);break;case"img":case"image":case"link":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"input":Qe("invalid",n),Pd(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Qe("invalid",n);break;case"textarea":Qe("invalid",n),eu(n,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||l.suppressHydrationWarning===!0||nf(n.textContent,a)?(l.popover!=null&&(Qe("beforetoggle",n),Qe("toggle",n)),l.onScroll!=null&&Qe("scroll",n),l.onScrollEnd!=null&&Qe("scrollend",n),l.onClick!=null&&(n.onclick=In),n=!0):n=!1,n||wa(e,!0)}function Bu(e){for(Zt=e.return;Zt;)switch(Zt.tag){case 5:case 31:case 13:Dn=!1;return;case 27:case 3:Dn=!0;return;default:Zt=Zt.return}}function Rl(e){if(e!==Zt)return!1;if(!Pe)return Bu(e),Pe=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Bc(e.type,e.memoizedProps)),a=!a),a&&bt&&wa(e),Bu(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=pf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));bt=pf(e)}else n===27?(n=bt,Ra(e.type)?(e=Xc,Xc=null,bt=e):bt=n):bt=Zt?An(e.stateNode.nextSibling):null;return!0}function ll(){bt=Zt=null,Pe=!1}function Nr(){var e=ja;return e!==null&&(rn===null?rn=e:rn.push.apply(rn,e),ja=null),e}function Ni(e){ja===null?ja=[e]:ja.push(e)}var _r=S(null),il=null,aa=null;function Na(e,n,a){pe(_r,n._currentValue),n._currentValue=a}function la(e){e._currentValue=_r.current,Q(_r)}function Sr(e,n,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===a)break;e=e.return}}function kr(e,n,a,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var u=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var k=0;k<n.length;k++)if(b.context===n[k]){c.lanes|=a,b=c.alternate,b!==null&&(b.lanes|=a),Sr(c.return,a,e),l||(u=null);break e}c=b.next}}else if(r.tag===18){if(u=r.return,u===null)throw Error(d(341));u.lanes|=a,c=u.alternate,c!==null&&(c.lanes|=a),Sr(u,a,e),u=null}else u=r.child;if(u!==null)u.return=r;else for(u=r;u!==null;){if(u===e){u=null;break}if(r=u.sibling,r!==null){r.return=u.return,u=r;break}u=u.return}r=u}}function Hl(e,n,a,l){e=null;for(var r=n,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var u=r.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var b=r.type;fn(r.pendingProps.value,u.value)||(e!==null?e.push(b):e=[b])}}else if(r===Ae.current){if(u=r.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Fi):e=[Fi])}r=r.return}e!==null&&kr(n,e,a,l),n.flags|=262144}function Ms(e){for(e=e.firstContext;e!==null;){if(!fn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sl(e){il=e,aa=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Kt(e){return Gu(il,e)}function Ds(e,n){return il===null&&sl(e),Gu(e,n)}function Gu(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},aa===null){if(e===null)throw Error(d(308));aa=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else aa=aa.next=n;return a}var Cg=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},zg=s.unstable_scheduleCallback,Tg=s.unstable_NormalPriority,At={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Cr(){return{controller:new Cg,data:new Map,refCount:0}}function _i(e){e.refCount--,e.refCount===0&&zg(Tg,function(){e.controller.abort()})}var Si=null,zr=0,Ll=0,ql=null;function Eg(e,n){if(Si===null){var a=Si=[];zr=0,Ll=Mc(),ql={status:"pending",value:void 0,then:function(l){a.push(l)}}}return zr++,n.then(Yu,Yu),n}function Yu(){if(--zr===0&&Si!==null){ql!==null&&(ql.status="fulfilled");var e=Si;Si=null,Ll=0,ql=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Mg(e,n){var a=[],l={status:"pending",value:null,reason:null,then:function(r){a.push(r)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var r=0;r<a.length;r++)(0,a[r])(n)},function(r){for(l.status="rejected",l.reason=r,r=0;r<a.length;r++)(0,a[r])(void 0)}),l}var $u=A.S;A.S=function(e,n){km=be(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Eg(e,n),$u!==null&&$u(e,n)};var ol=S(null);function Tr(){var e=ol.current;return e!==null?e:ht.pooledCache}function Os(e,n){n===null?pe(ol,ol.current):pe(ol,n.pool)}function Qu(){var e=Tr();return e===null?null:{parent:At._currentValue,pool:e}}var Bl=Error(d(460)),Er=Error(d(474)),As=Error(d(542)),Us={then:function(){}};function Xu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zu(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(In,In),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vu(e),e;default:if(typeof n.status=="string")n.then(In,In);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var r=n;r.status="fulfilled",r.value=l}},function(l){if(n.status==="pending"){var r=n;r.status="rejected",r.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Vu(e),e}throw cl=n,Bl}}function rl(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cl=a,Bl):a}}var cl=null;function Ku(){if(cl===null)throw Error(d(459));var e=cl;return cl=null,e}function Vu(e){if(e===Bl||e===As)throw Error(d(483))}var Gl=null,ki=0;function Rs(e){var n=ki;return ki+=1,Gl===null&&(Gl=[]),Zu(Gl,e,n)}function Ci(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Hs(e,n){throw n.$$typeof===z?Error(d(525)):(e=Object.prototype.toString.call(n),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Ju(e){function n(q,D){if(e){var X=q.deletions;X===null?(q.deletions=[D],q.flags|=16):X.push(D)}}function a(q,D){if(!e)return null;for(;D!==null;)n(q,D),D=D.sibling;return null}function l(q){for(var D=new Map;q!==null;)q.key!==null?D.set(q.key,q):D.set(q.index,q),q=q.sibling;return D}function r(q,D){return q=ta(q,D),q.index=0,q.sibling=null,q}function c(q,D,X){return q.index=X,e?(X=q.alternate,X!==null?(X=X.index,X<D?(q.flags|=67108866,D):X):(q.flags|=67108866,D)):(q.flags|=1048576,D)}function u(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,D,X,ae){return D===null||D.tag!==6?(D=br(X,q.mode,ae),D.return=q,D):(D=r(D,X),D.return=q,D)}function k(q,D,X,ae){var ze=X.type;return ze===K?I(q,D,X.props.children,ae,X.key):D!==null&&(D.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===$&&rl(ze)===D.type)?(D=r(D,X.props),Ci(D,X),D.return=q,D):(D=Ts(X.type,X.key,X.props,null,q.mode,ae),Ci(D,X),D.return=q,D)}function Z(q,D,X,ae){return D===null||D.tag!==4||D.stateNode.containerInfo!==X.containerInfo||D.stateNode.implementation!==X.implementation?(D=yr(X,q.mode,ae),D.return=q,D):(D=r(D,X.children||[]),D.return=q,D)}function I(q,D,X,ae,ze){return D===null||D.tag!==7?(D=al(X,q.mode,ae,ze),D.return=q,D):(D=r(D,X),D.return=q,D)}function le(q,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=br(""+D,q.mode,X),D.return=q,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Y:return X=Ts(D.type,D.key,D.props,null,q.mode,X),Ci(X,D),X.return=q,X;case P:return D=yr(D,q.mode,X),D.return=q,D;case $:return D=rl(D),le(q,D,X)}if(re(D)||R(D))return D=al(D,q.mode,X,null),D.return=q,D;if(typeof D.then=="function")return le(q,Rs(D),X);if(D.$$typeof===O)return le(q,Ds(q,D),X);Hs(q,D)}return null}function V(q,D,X,ae){var ze=D!==null?D.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return ze!==null?null:b(q,D,""+X,ae);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Y:return X.key===ze?k(q,D,X,ae):null;case P:return X.key===ze?Z(q,D,X,ae):null;case $:return X=rl(X),V(q,D,X,ae)}if(re(X)||R(X))return ze!==null?null:I(q,D,X,ae,null);if(typeof X.then=="function")return V(q,D,Rs(X),ae);if(X.$$typeof===O)return V(q,D,Ds(q,X),ae);Hs(q,X)}return null}function F(q,D,X,ae,ze){if(typeof ae=="string"&&ae!==""||typeof ae=="number"||typeof ae=="bigint")return q=q.get(X)||null,b(D,q,""+ae,ze);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case Y:return q=q.get(ae.key===null?X:ae.key)||null,k(D,q,ae,ze);case P:return q=q.get(ae.key===null?X:ae.key)||null,Z(D,q,ae,ze);case $:return ae=rl(ae),F(q,D,X,ae,ze)}if(re(ae)||R(ae))return q=q.get(X)||null,I(D,q,ae,ze,null);if(typeof ae.then=="function")return F(q,D,X,Rs(ae),ze);if(ae.$$typeof===O)return F(q,D,X,Ds(D,ae),ze);Hs(D,ae)}return null}function ve(q,D,X,ae){for(var ze=null,tt=null,_e=D,Be=D=0,We=null;_e!==null&&Be<X.length;Be++){_e.index>Be?(We=_e,_e=null):We=_e.sibling;var nt=V(q,_e,X[Be],ae);if(nt===null){_e===null&&(_e=We);break}e&&_e&&nt.alternate===null&&n(q,_e),D=c(nt,D,Be),tt===null?ze=nt:tt.sibling=nt,tt=nt,_e=We}if(Be===X.length)return a(q,_e),Pe&&na(q,Be),ze;if(_e===null){for(;Be<X.length;Be++)_e=le(q,X[Be],ae),_e!==null&&(D=c(_e,D,Be),tt===null?ze=_e:tt.sibling=_e,tt=_e);return Pe&&na(q,Be),ze}for(_e=l(_e);Be<X.length;Be++)We=F(_e,q,Be,X[Be],ae),We!==null&&(e&&We.alternate!==null&&_e.delete(We.key===null?Be:We.key),D=c(We,D,Be),tt===null?ze=We:tt.sibling=We,tt=We);return e&&_e.forEach(function(Ga){return n(q,Ga)}),Pe&&na(q,Be),ze}function Me(q,D,X,ae){if(X==null)throw Error(d(151));for(var ze=null,tt=null,_e=D,Be=D=0,We=null,nt=X.next();_e!==null&&!nt.done;Be++,nt=X.next()){_e.index>Be?(We=_e,_e=null):We=_e.sibling;var Ga=V(q,_e,nt.value,ae);if(Ga===null){_e===null&&(_e=We);break}e&&_e&&Ga.alternate===null&&n(q,_e),D=c(Ga,D,Be),tt===null?ze=Ga:tt.sibling=Ga,tt=Ga,_e=We}if(nt.done)return a(q,_e),Pe&&na(q,Be),ze;if(_e===null){for(;!nt.done;Be++,nt=X.next())nt=le(q,nt.value,ae),nt!==null&&(D=c(nt,D,Be),tt===null?ze=nt:tt.sibling=nt,tt=nt);return Pe&&na(q,Be),ze}for(_e=l(_e);!nt.done;Be++,nt=X.next())nt=F(_e,q,Be,nt.value,ae),nt!==null&&(e&&nt.alternate!==null&&_e.delete(nt.key===null?Be:nt.key),D=c(nt,D,Be),tt===null?ze=nt:tt.sibling=nt,tt=nt);return e&&_e.forEach(function(Yb){return n(q,Yb)}),Pe&&na(q,Be),ze}function pt(q,D,X,ae){if(typeof X=="object"&&X!==null&&X.type===K&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case Y:e:{for(var ze=X.key;D!==null;){if(D.key===ze){if(ze=X.type,ze===K){if(D.tag===7){a(q,D.sibling),ae=r(D,X.props.children),ae.return=q,q=ae;break e}}else if(D.elementType===ze||typeof ze=="object"&&ze!==null&&ze.$$typeof===$&&rl(ze)===D.type){a(q,D.sibling),ae=r(D,X.props),Ci(ae,X),ae.return=q,q=ae;break e}a(q,D);break}else n(q,D);D=D.sibling}X.type===K?(ae=al(X.props.children,q.mode,ae,X.key),ae.return=q,q=ae):(ae=Ts(X.type,X.key,X.props,null,q.mode,ae),Ci(ae,X),ae.return=q,q=ae)}return u(q);case P:e:{for(ze=X.key;D!==null;){if(D.key===ze)if(D.tag===4&&D.stateNode.containerInfo===X.containerInfo&&D.stateNode.implementation===X.implementation){a(q,D.sibling),ae=r(D,X.children||[]),ae.return=q,q=ae;break e}else{a(q,D);break}else n(q,D);D=D.sibling}ae=yr(X,q.mode,ae),ae.return=q,q=ae}return u(q);case $:return X=rl(X),pt(q,D,X,ae)}if(re(X))return ve(q,D,X,ae);if(R(X)){if(ze=R(X),typeof ze!="function")throw Error(d(150));return X=ze.call(X),Me(q,D,X,ae)}if(typeof X.then=="function")return pt(q,D,Rs(X),ae);if(X.$$typeof===O)return pt(q,D,Ds(q,X),ae);Hs(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,D!==null&&D.tag===6?(a(q,D.sibling),ae=r(D,X),ae.return=q,q=ae):(a(q,D),ae=br(X,q.mode,ae),ae.return=q,q=ae),u(q)):a(q,D)}return function(q,D,X,ae){try{ki=0;var ze=pt(q,D,X,ae);return Gl=null,ze}catch(_e){if(_e===Bl||_e===As)throw _e;var tt=hn(29,_e,null,q.mode);return tt.lanes=ae,tt.return=q,tt}finally{}}}var dl=Ju(!0),Fu=Ju(!1),_a=!1;function Mr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Dr(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Sa(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ka(e,n,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var r=l.pending;return r===null?n.next=n:(n.next=r.next,r.next=n),l.pending=n,n=zs(e),Ou(e,null,a),n}return Cs(e,l,n,a),zs(e)}function zi(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Oe(e,a)}}function Or(e,n){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var r=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var u={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?r=c=u:c=c.next=u,a=a.next}while(a!==null);c===null?r=c=n:c=c.next=n}else r=c=n;a={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Ar=!1;function Ti(){if(Ar){var e=ql;if(e!==null)throw e}}function Ei(e,n,a,l){Ar=!1;var r=e.updateQueue;_a=!1;var c=r.firstBaseUpdate,u=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var k=b,Z=k.next;k.next=null,u===null?c=Z:u.next=Z,u=k;var I=e.alternate;I!==null&&(I=I.updateQueue,b=I.lastBaseUpdate,b!==u&&(b===null?I.firstBaseUpdate=Z:b.next=Z,I.lastBaseUpdate=k))}if(c!==null){var le=r.baseState;u=0,I=Z=k=null,b=c;do{var V=b.lane&-536870913,F=V!==b.lane;if(F?(Fe&V)===V:(l&V)===V){V!==0&&V===Ll&&(Ar=!0),I!==null&&(I=I.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=e,Me=b;V=n;var pt=a;switch(Me.tag){case 1:if(ve=Me.payload,typeof ve=="function"){le=ve.call(pt,le,V);break e}le=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Me.payload,V=typeof ve=="function"?ve.call(pt,le,V):ve,V==null)break e;le=w({},le,V);break e;case 2:_a=!0}}V=b.callback,V!==null&&(e.flags|=64,F&&(e.flags|=8192),F=r.callbacks,F===null?r.callbacks=[V]:F.push(V))}else F={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},I===null?(Z=I=F,k=le):I=I.next=F,u|=V;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;F=b,b=F.next,F.next=null,r.lastBaseUpdate=F,r.shared.pending=null}}while(!0);I===null&&(k=le),r.baseState=k,r.firstBaseUpdate=Z,r.lastBaseUpdate=I,c===null&&(r.shared.lanes=0),Ma|=u,e.lanes=u,e.memoizedState=le}}function Wu(e,n){if(typeof e!="function")throw Error(d(191,e));e.call(n)}function Pu(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Wu(a[e],n)}var Yl=S(null),Ls=S(0);function Iu(e,n){e=ma,pe(Ls,e),pe(Yl,n),ma=e|n.baseLanes}function Ur(){pe(Ls,ma),pe(Yl,Yl.current)}function Rr(){ma=Ls.current,Q(Yl),Q(Ls)}var xn=S(null),On=null;function Ca(e){var n=e.alternate;pe(Tt,Tt.current&1),pe(xn,e),On===null&&(n===null||Yl.current!==null||n.memoizedState!==null)&&(On=e)}function Hr(e){pe(Tt,Tt.current),pe(xn,e),On===null&&(On=e)}function ep(e){e.tag===22?(pe(Tt,Tt.current),pe(xn,e),On===null&&(On=e)):za()}function za(){pe(Tt,Tt.current),pe(xn,xn.current)}function gn(e){Q(xn),On===e&&(On=null),Q(Tt)}var Tt=S(0);function qs(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||$c(a)||Qc(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,He=null,dt=null,Ut=null,Bs=!1,$l=!1,ul=!1,Gs=0,Mi=0,Ql=null,Dg=0;function _t(){throw Error(d(321))}function Lr(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!fn(e[a],n[a]))return!1;return!0}function qr(e,n,a,l,r,c){return ia=c,He=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,A.H=e===null||e.memoizedState===null?Hp:ec,ul=!1,c=a(l,r),ul=!1,$l&&(c=np(n,a,l,r)),tp(e),c}function tp(e){A.H=Ai;var n=dt!==null&&dt.next!==null;if(ia=0,Ut=dt=He=null,Bs=!1,Mi=0,Ql=null,n)throw Error(d(300));e===null||Rt||(e=e.dependencies,e!==null&&Ms(e)&&(Rt=!0))}function np(e,n,a,l){He=e;var r=0;do{if($l&&(Ql=null),Mi=0,$l=!1,25<=r)throw Error(d(301));if(r+=1,Ut=dt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}A.H=Lp,c=n(a,l)}while($l);return c}function Og(){var e=A.H,n=e.useState()[0];return n=typeof n.then=="function"?Di(n):n,e=e.useState()[0],(dt!==null?dt.memoizedState:null)!==e&&(He.flags|=1024),n}function Br(){var e=Gs!==0;return Gs=0,e}function Gr(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Yr(e){if(Bs){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Bs=!1}ia=0,Ut=dt=He=null,$l=!1,Mi=Gs=0,Ql=null}function en(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?He.memoizedState=Ut=e:Ut=Ut.next=e,Ut}function Et(){if(dt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=dt.next;var n=Ut===null?He.memoizedState:Ut.next;if(n!==null)Ut=n,dt=e;else{if(e===null)throw He.alternate===null?Error(d(467)):Error(d(310));dt=e,e={memoizedState:dt.memoizedState,baseState:dt.baseState,baseQueue:dt.baseQueue,queue:dt.queue,next:null},Ut===null?He.memoizedState=Ut=e:Ut=Ut.next=e}return Ut}function Ys(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Di(e){var n=Mi;return Mi+=1,Ql===null&&(Ql=[]),e=Zu(Ql,e,n),n=He,(Ut===null?n.memoizedState:Ut.next)===null&&(n=n.alternate,A.H=n===null||n.memoizedState===null?Hp:ec),e}function $s(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Di(e);if(e.$$typeof===O)return Kt(e)}throw Error(d(438,String(e)))}function $r(e){var n=null,a=He.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var l=He.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(r){return r.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ys(),He.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),l=0;l<e;l++)a[l]=he;return n.index++,a}function sa(e,n){return typeof n=="function"?n(e):n}function Qs(e){var n=Et();return Qr(n,dt,e)}function Qr(e,n,a){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=a;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var u=r.next;r.next=c.next,c.next=u}n.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{n=r.next;var b=u=null,k=null,Z=n,I=!1;do{var le=Z.lane&-536870913;if(le!==Z.lane?(Fe&le)===le:(ia&le)===le){var V=Z.revertLane;if(V===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),le===Ll&&(I=!0);else if((ia&V)===V){Z=Z.next,V===Ll&&(I=!0);continue}else le={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},k===null?(b=k=le,u=c):k=k.next=le,He.lanes|=V,Ma|=V;le=Z.action,ul&&a(c,le),c=Z.hasEagerState?Z.eagerState:a(c,le)}else V={lane:le,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},k===null?(b=k=V,u=c):k=k.next=V,He.lanes|=le,Ma|=le;Z=Z.next}while(Z!==null&&Z!==n);if(k===null?u=c:k.next=b,!fn(c,e.memoizedState)&&(Rt=!0,I&&(a=ql,a!==null)))throw a;e.memoizedState=c,e.baseState=u,e.baseQueue=k,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Xr(e){var n=Et(),a=n.queue;if(a===null)throw Error(d(311));a.lastRenderedReducer=e;var l=a.dispatch,r=a.pending,c=n.memoizedState;if(r!==null){a.pending=null;var u=r=r.next;do c=e(c,u.action),u=u.next;while(u!==r);fn(c,n.memoizedState)||(Rt=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,l]}function ap(e,n,a){var l=He,r=Et(),c=Pe;if(c){if(a===void 0)throw Error(d(407));a=a()}else a=n();var u=!fn((dt||r).memoizedState,a);if(u&&(r.memoizedState=a,Rt=!0),r=r.queue,Vr(sp.bind(null,l,r,e),[e]),r.getSnapshot!==n||u||Ut!==null&&Ut.memoizedState.tag&1){if(l.flags|=2048,Xl(9,{destroy:void 0},ip.bind(null,l,r,a,n),null),ht===null)throw Error(d(349));c||(ia&127)!==0||lp(l,n,a)}return a}function lp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=He.updateQueue,n===null?(n=Ys(),He.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function ip(e,n,a,l){n.value=a,n.getSnapshot=l,op(n)&&rp(e)}function sp(e,n,a){return a(function(){op(n)&&rp(e)})}function op(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!fn(e,a)}catch{return!0}}function rp(e){var n=nl(e,2);n!==null&&cn(n,e,2)}function Zr(e){var n=en();if(typeof e=="function"){var a=e;if(e=a(),ul){De(!0);try{a()}finally{De(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:e},n}function cp(e,n,a,l){return e.baseState=a,Qr(e,dt,typeof l=="function"?l:sa)}function Ag(e,n,a,l,r){if(Ks(e))throw Error(d(485));if(e=n.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};A.T!==null?a(!0):c.isTransition=!1,l(c),a=n.pending,a===null?(c.next=n.pending=c,dp(n,c)):(c.next=a.next,n.pending=a.next=c)}}function dp(e,n){var a=n.action,l=n.payload,r=e.state;if(n.isTransition){var c=A.T,u={};A.T=u;try{var b=a(r,l),k=A.S;k!==null&&k(u,b),up(e,n,b)}catch(Z){Kr(e,n,Z)}finally{c!==null&&u.types!==null&&(c.types=u.types),A.T=c}}else try{c=a(r,l),up(e,n,c)}catch(Z){Kr(e,n,Z)}}function up(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){pp(e,n,l)},function(l){return Kr(e,n,l)}):pp(e,n,a)}function pp(e,n,a){n.status="fulfilled",n.value=a,mp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dp(e,a)))}function Kr(e,n,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=a,mp(n),n=n.next;while(n!==l)}e.action=null}function mp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function fp(e,n){return n}function hp(e,n){if(Pe){var a=ht.formState;if(a!==null){e:{var l=He;if(Pe){if(bt){t:{for(var r=bt,c=Dn;r.nodeType!==8;){if(!c){r=null;break t}if(r=An(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){bt=An(r.nextSibling),l=r.data==="F!";break e}}wa(l)}l=!1}l&&(n=a[0])}}return a=en(),a.memoizedState=a.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fp,lastRenderedState:n},a.queue=l,a=Ap.bind(null,He,l),l.dispatch=a,l=Zr(!1),c=Ir.bind(null,He,!1,l.queue),l=en(),r={state:n,dispatch:null,action:e,pending:null},l.queue=r,a=Ag.bind(null,He,r,c,a),r.dispatch=a,l.memoizedState=e,[n,a,!1]}function xp(e){var n=Et();return gp(n,dt,e)}function gp(e,n,a){if(n=Qr(e,n,fp)[0],e=Qs(sa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Di(n)}catch(u){throw u===Bl?As:u}else l=n;n=Et();var r=n.queue,c=r.dispatch;return a!==n.memoizedState&&(He.flags|=2048,Xl(9,{destroy:void 0},Ug.bind(null,r,a),null)),[l,c,e]}function Ug(e,n){e.action=n}function bp(e){var n=Et(),a=dt;if(a!==null)return gp(n,a,e);Et(),n=n.memoizedState,a=Et();var l=a.queue.dispatch;return a.memoizedState=e,[n,l,!1]}function Xl(e,n,a,l){return e={tag:e,create:a,deps:l,inst:n,next:null},n=He.updateQueue,n===null&&(n=Ys(),He.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,n.lastEffect=e),e}function yp(){return Et().memoizedState}function Xs(e,n,a,l){var r=en();He.flags|=e,r.memoizedState=Xl(1|n,{destroy:void 0},a,l===void 0?null:l)}function Zs(e,n,a,l){var r=Et();l=l===void 0?null:l;var c=r.memoizedState.inst;dt!==null&&l!==null&&Lr(l,dt.memoizedState.deps)?r.memoizedState=Xl(n,c,a,l):(He.flags|=e,r.memoizedState=Xl(1|n,c,a,l))}function vp(e,n){Xs(8390656,8,e,n)}function Vr(e,n){Zs(2048,8,e,n)}function Rg(e){He.flags|=4;var n=He.updateQueue;if(n===null)n=Ys(),He.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function jp(e){var n=Et().memoizedState;return Rg({ref:n,nextImpl:e}),function(){if((at&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function wp(e,n){return Zs(4,2,e,n)}function Np(e,n){return Zs(4,4,e,n)}function _p(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Sp(e,n,a){a=a!=null?a.concat([e]):null,Zs(4,4,_p.bind(null,n,e),a)}function Jr(){}function kp(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;return n!==null&&Lr(n,l[1])?l[0]:(a.memoizedState=[e,n],e)}function Cp(e,n){var a=Et();n=n===void 0?null:n;var l=a.memoizedState;if(n!==null&&Lr(n,l[1]))return l[0];if(l=e(),ul){De(!0);try{e()}finally{De(!1)}}return a.memoizedState=[l,n],l}function Fr(e,n,a){return a===void 0||(ia&1073741824)!==0&&(Fe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=zm(),He.lanes|=e,Ma|=e,a)}function zp(e,n,a,l){return fn(a,n)?a:Yl.current!==null?(e=Fr(e,a,l),fn(e,n)||(Rt=!0),e):(ia&42)===0||(ia&1073741824)!==0&&(Fe&261930)===0?(Rt=!0,e.memoizedState=a):(e=zm(),He.lanes|=e,Ma|=e,n)}function Tp(e,n,a,l,r){var c=J.p;J.p=c!==0&&8>c?c:8;var u=A.T,b={};A.T=b,Ir(e,!1,n,a);try{var k=r(),Z=A.S;if(Z!==null&&Z(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var I=Mg(k,l);Oi(e,n,I,vn(e))}else Oi(e,n,l,vn(e))}catch(le){Oi(e,n,{then:function(){},status:"rejected",reason:le},vn())}finally{J.p=c,u!==null&&b.types!==null&&(u.types=b.types),A.T=u}}function Hg(){}function Wr(e,n,a,l){if(e.tag!==5)throw Error(d(476));var r=Ep(e).queue;Tp(e,r,n,x,a===null?Hg:function(){return Mp(e),a(l)})}function Ep(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:x},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sa,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Mp(e){var n=Ep(e);n.next===null&&(n=e.alternate.memoizedState),Oi(e,n.next.queue,{},vn())}function Pr(){return Kt(Fi)}function Dp(){return Et().memoizedState}function Op(){return Et().memoizedState}function Lg(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=vn();e=Sa(a);var l=ka(n,e,a);l!==null&&(cn(l,n,a),zi(l,n,a)),n={cache:Cr()},e.payload=n;return}n=n.return}}function qg(e,n,a){var l=vn();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Ks(e)?Up(n,a):(a=xr(e,n,a,l),a!==null&&(cn(a,e,l),Rp(a,n,l)))}function Ap(e,n,a){var l=vn();Oi(e,n,a,l)}function Oi(e,n,a,l){var r={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Ks(e))Up(n,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var u=n.lastRenderedState,b=c(u,a);if(r.hasEagerState=!0,r.eagerState=b,fn(b,u))return Cs(e,n,r,0),ht===null&&ks(),!1}catch{}finally{}if(a=xr(e,n,r,l),a!==null)return cn(a,e,l),Rp(a,n,l),!0}return!1}function Ir(e,n,a,l){if(l={lane:2,revertLane:Mc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Ks(e)){if(n)throw Error(d(479))}else n=xr(e,a,l,2),n!==null&&cn(n,e,2)}function Ks(e){var n=e.alternate;return e===He||n!==null&&n===He}function Up(e,n){$l=Bs=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Rp(e,n,a){if((a&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,a|=l,n.lanes=a,Oe(e,a)}}var Ai={readContext:Kt,use:$s,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};Ai.useEffectEvent=_t;var Hp={readContext:Kt,use:$s,useCallback:function(e,n){return en().memoizedState=[e,n===void 0?null:n],e},useContext:Kt,useEffect:vp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Xs(4194308,4,_p.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Xs(4194308,4,e,n)},useInsertionEffect:function(e,n){Xs(4,2,e,n)},useMemo:function(e,n){var a=en();n=n===void 0?null:n;var l=e();if(ul){De(!0);try{e()}finally{De(!1)}}return a.memoizedState=[l,n],l},useReducer:function(e,n,a){var l=en();if(a!==void 0){var r=a(n);if(ul){De(!0);try{a(n)}finally{De(!1)}}}else r=n;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=qg.bind(null,He,e),[l.memoizedState,e]},useRef:function(e){var n=en();return e={current:e},n.memoizedState=e},useState:function(e){e=Zr(e);var n=e.queue,a=Ap.bind(null,He,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Jr,useDeferredValue:function(e,n){var a=en();return Fr(a,e,n)},useTransition:function(){var e=Zr(!1);return e=Tp.bind(null,He,e.queue,!0,!1),en().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var l=He,r=en();if(Pe){if(a===void 0)throw Error(d(407));a=a()}else{if(a=n(),ht===null)throw Error(d(349));(Fe&127)!==0||lp(l,n,a)}r.memoizedState=a;var c={value:a,getSnapshot:n};return r.queue=c,vp(sp.bind(null,l,c,e),[e]),l.flags|=2048,Xl(9,{destroy:void 0},ip.bind(null,l,c,a,n),null),a},useId:function(){var e=en(),n=ht.identifierPrefix;if(Pe){var a=Zn,l=Xn;a=(l&~(1<<32-mt(l)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Gs++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=Dg++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Pr,useFormState:hp,useActionState:hp,useOptimistic:function(e){var n=en();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Ir.bind(null,He,!0,a),a.dispatch=n,[e,n]},useMemoCache:$r,useCacheRefresh:function(){return en().memoizedState=Lg.bind(null,He)},useEffectEvent:function(e){var n=en(),a={impl:e};return n.memoizedState=a,function(){if((at&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}},ec={readContext:Kt,use:$s,useCallback:kp,useContext:Kt,useEffect:Vr,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Np,useMemo:Cp,useReducer:Qs,useRef:yp,useState:function(){return Qs(sa)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Et();return zp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Qs(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:ap,useId:Dp,useHostTransitionStatus:Pr,useFormState:xp,useActionState:xp,useOptimistic:function(e,n){var a=Et();return cp(a,dt,e,n)},useMemoCache:$r,useCacheRefresh:Op};ec.useEffectEvent=jp;var Lp={readContext:Kt,use:$s,useCallback:kp,useContext:Kt,useEffect:Vr,useImperativeHandle:Sp,useInsertionEffect:wp,useLayoutEffect:Np,useMemo:Cp,useReducer:Xr,useRef:yp,useState:function(){return Xr(sa)},useDebugValue:Jr,useDeferredValue:function(e,n){var a=Et();return dt===null?Fr(a,e,n):zp(a,dt.memoizedState,e,n)},useTransition:function(){var e=Xr(sa)[0],n=Et().memoizedState;return[typeof e=="boolean"?e:Di(e),n]},useSyncExternalStore:ap,useId:Dp,useHostTransitionStatus:Pr,useFormState:bp,useActionState:bp,useOptimistic:function(e,n){var a=Et();return dt!==null?cp(a,dt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:$r,useCacheRefresh:Op};Lp.useEffectEvent=jp;function tc(e,n,a,l){n=e.memoizedState,a=a(l,n),a=a==null?n:w({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var nc={enqueueSetState:function(e,n,a){e=e._reactInternals;var l=vn(),r=Sa(l);r.payload=n,a!=null&&(r.callback=a),n=ka(e,r,l),n!==null&&(cn(n,e,l),zi(n,e,l))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var l=vn(),r=Sa(l);r.tag=1,r.payload=n,a!=null&&(r.callback=a),n=ka(e,r,l),n!==null&&(cn(n,e,l),zi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=vn(),l=Sa(a);l.tag=2,n!=null&&(l.callback=n),n=ka(e,l,a),n!==null&&(cn(n,e,a),zi(n,e,a))}};function qp(e,n,a,l,r,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,u):n.prototype&&n.prototype.isPureReactComponent?!vi(a,l)||!vi(r,c):!0}function Bp(e,n,a,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,l),n.state!==e&&nc.enqueueReplaceState(n,n.state,null)}function pl(e,n){var a=n;if("ref"in n){a={};for(var l in n)l!=="ref"&&(a[l]=n[l])}if(e=e.defaultProps){a===n&&(a=w({},a));for(var r in e)a[r]===void 0&&(a[r]=e[r])}return a}function Gp(e){Ss(e)}function Yp(e){console.error(e)}function $p(e){Ss(e)}function Vs(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function Qp(e,n,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ac(e,n,a){return a=Sa(a),a.tag=3,a.payload={element:null},a.callback=function(){Vs(e,n)},a}function Xp(e){return e=Sa(e),e.tag=3,e}function Zp(e,n,a,l){var r=a.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Qp(n,a,l)}}var u=a.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Qp(n,a,l),typeof r!="function"&&(Da===null?Da=new Set([this]):Da.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Bg(e,n,a,l,r){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=a.alternate,n!==null&&Hl(n,a,r,!0),a=xn.current,a!==null){switch(a.tag){case 31:case 13:return On===null?so():a.alternate===null&&St===0&&(St=3),a.flags&=-257,a.flags|=65536,a.lanes=r,l===Us?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([l]):n.add(l),zc(e,l,r)),!1;case 22:return a.flags|=65536,l===Us?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([l]):a.add(l)),zc(e,l,r)),!1}throw Error(d(435,a.tag))}return zc(e,l,r),so(),!1}if(Pe)return n=xn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=r,l!==wr&&(e=Error(d(422),{cause:l}),Ni(Tn(e,a)))):(l!==wr&&(n=Error(d(423),{cause:l}),Ni(Tn(n,a))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Tn(l,a),r=ac(e.stateNode,l,r),Or(e,r),St!==4&&(St=2)),!1;var c=Error(d(520),{cause:l});if(c=Tn(c,a),Yi===null?Yi=[c]:Yi.push(c),St!==4&&(St=2),n===null)return!0;l=Tn(l,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=r&-r,a.lanes|=e,e=ac(a.stateNode,l,e),Or(a,e),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Da===null||!Da.has(c))))return a.flags|=65536,r&=-r,a.lanes|=r,r=Xp(r),Zp(r,e,a,l),Or(a,r),!1}a=a.return}while(a!==null);return!1}var lc=Error(d(461)),Rt=!1;function Vt(e,n,a,l){n.child=e===null?Fu(n,null,a,l):dl(n,e.child,a,l)}function Kp(e,n,a,l,r){a=a.render;var c=n.ref;if("ref"in l){var u={};for(var b in l)b!=="ref"&&(u[b]=l[b])}else u=l;return sl(n),l=qr(e,n,a,u,c,r),b=Br(),e!==null&&!Rt?(Gr(e,n,r),oa(e,n,r)):(Pe&&b&&vr(n),n.flags|=1,Vt(e,n,l,r),n.child)}function Vp(e,n,a,l,r){if(e===null){var c=a.type;return typeof c=="function"&&!gr(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,Jp(e,n,c,l,r)):(e=Ts(a.type,null,l,n,n.mode,r),e.ref=n.ref,e.return=n,n.child=e)}if(c=e.child,!pc(e,r)){var u=c.memoizedProps;if(a=a.compare,a=a!==null?a:vi,a(u,l)&&e.ref===n.ref)return oa(e,n,r)}return n.flags|=1,e=ta(c,l),e.ref=n.ref,e.return=n,n.child=e}function Jp(e,n,a,l,r){if(e!==null){var c=e.memoizedProps;if(vi(c,l)&&e.ref===n.ref)if(Rt=!1,n.pendingProps=l=c,pc(e,r))(e.flags&131072)!==0&&(Rt=!0);else return n.lanes=e.lanes,oa(e,n,r)}return ic(e,n,a,l,r)}function Fp(e,n,a,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,e!==null){for(l=n.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,n.child=null;return Wp(e,n,c,a,l)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Os(n,c!==null?c.cachePool:null),c!==null?Iu(n,c):Ur(),ep(n);else return l=n.lanes=536870912,Wp(e,n,c!==null?c.baseLanes|a:a,a,l)}else c!==null?(Os(n,c.cachePool),Iu(n,c),za(),n.memoizedState=null):(e!==null&&Os(n,null),Ur(),za());return Vt(e,n,r,a),n.child}function Ui(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Wp(e,n,a,l,r){var c=Tr();return c=c===null?null:{parent:At._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&Os(n,null),Ur(),ep(n),e!==null&&Hl(e,n,l,!0),n.childLanes=r,null}function Js(e,n){return n=Ws({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function Pp(e,n,a){return dl(n,e.child,null,a),e=Js(n,n.pendingProps),e.flags|=2,gn(n),n.memoizedState=null,e}function Gg(e,n,a){var l=n.pendingProps,r=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Pe){if(l.mode==="hidden")return e=Js(n,l),n.lanes=536870912,Ui(null,e);if(Hr(n),(e=bt)?(e=uf(e,Dn),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=Uu(e),a.return=n,n.child=a,Zt=n,bt=null)):e=null,e===null)throw wa(n);return n.lanes=536870912,null}return Js(n,l)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Hr(n),r)if(n.flags&256)n.flags&=-257,n=Pp(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(d(558));else if(Rt||Hl(e,n,a,!1),r=(a&e.childLanes)!==0,Rt||r){if(l=ht,l!==null&&(u=Hn(l,a),u!==0&&u!==c.retryLane))throw c.retryLane=u,nl(e,u),cn(l,e,u),lc;so(),n=Pp(e,n,a)}else e=c.treeContext,bt=An(u.nextSibling),Zt=n,Pe=!0,ja=null,Dn=!1,e!==null&&Lu(n,e),n=Js(n,l),n.flags|=4096;return n}return e=ta(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Fs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(d(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function ic(e,n,a,l,r){return sl(n),a=qr(e,n,a,l,void 0,r),l=Br(),e!==null&&!Rt?(Gr(e,n,r),oa(e,n,r)):(Pe&&l&&vr(n),n.flags|=1,Vt(e,n,a,r),n.child)}function Ip(e,n,a,l,r,c){return sl(n),n.updateQueue=null,a=np(n,l,a,r),tp(e),l=Br(),e!==null&&!Rt?(Gr(e,n,c),oa(e,n,c)):(Pe&&l&&vr(n),n.flags|=1,Vt(e,n,a,c),n.child)}function em(e,n,a,l,r){if(sl(n),n.stateNode===null){var c=Ol,u=a.contextType;typeof u=="object"&&u!==null&&(c=Kt(u)),c=new a(l,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=nc,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=l,c.state=n.memoizedState,c.refs={},Mr(n),u=a.contextType,c.context=typeof u=="object"&&u!==null?Kt(u):Ol,c.state=n.memoizedState,u=a.getDerivedStateFromProps,typeof u=="function"&&(tc(n,a,u,l),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&nc.enqueueReplaceState(c,c.state,null),Ei(n,l,c,r),Ti(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){c=n.stateNode;var b=n.memoizedProps,k=pl(a,b);c.props=k;var Z=c.context,I=a.contextType;u=Ol,typeof I=="object"&&I!==null&&(u=Kt(I));var le=a.getDerivedStateFromProps;I=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=n.pendingProps!==b,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||Z!==u)&&Bp(n,c,l,u),_a=!1;var V=n.memoizedState;c.state=V,Ei(n,l,c,r),Ti(),Z=n.memoizedState,b||V!==Z||_a?(typeof le=="function"&&(tc(n,a,le,l),Z=n.memoizedState),(k=_a||qp(n,a,k,l,V,Z,u))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=Z),c.props=l,c.state=Z,c.context=u,l=k):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{c=n.stateNode,Dr(e,n),u=n.memoizedProps,I=pl(a,u),c.props=I,le=n.pendingProps,V=c.context,Z=a.contextType,k=Ol,typeof Z=="object"&&Z!==null&&(k=Kt(Z)),b=a.getDerivedStateFromProps,(Z=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||V!==k)&&Bp(n,c,l,k),_a=!1,V=n.memoizedState,c.state=V,Ei(n,l,c,r),Ti();var F=n.memoizedState;u!==le||V!==F||_a||e!==null&&e.dependencies!==null&&Ms(e.dependencies)?(typeof b=="function"&&(tc(n,a,b,l),F=n.memoizedState),(I=_a||qp(n,a,I,l,V,F,k)||e!==null&&e.dependencies!==null&&Ms(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,F,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,F,k)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=F),c.props=l,c.state=F,c.context=k,l=I):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(n.flags|=1024),l=!1)}return c=l,Fs(e,n),l=(n.flags&128)!==0,c||l?(c=n.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,e!==null&&l?(n.child=dl(n,e.child,null,r),n.child=dl(n,null,a,r)):Vt(e,n,a,r),n.memoizedState=c.state,e=n.child):e=oa(e,n,r),e}function tm(e,n,a,l){return ll(),n.flags|=256,Vt(e,n,a,l),n.child}var sc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function oc(e){return{baseLanes:e,cachePool:Qu()}}function rc(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=yn),e}function nm(e,n,a){var l=n.pendingProps,r=!1,c=(n.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),u&&(r=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,e===null){if(Pe){if(r?Ca(n):za(),(e=bt)?(e=uf(e,Dn),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:va!==null?{id:Xn,overflow:Zn}:null,retryLane:536870912,hydrationErrors:null},a=Uu(e),a.return=n,n.child=a,Zt=n,bt=null)):e=null,e===null)throw wa(n);return Qc(e)?n.lanes=32:n.lanes=536870912,null}var b=l.children;return l=l.fallback,r?(za(),r=n.mode,b=Ws({mode:"hidden",children:b},r),l=al(l,r,a,null),b.return=n,l.return=n,b.sibling=l,n.child=b,l=n.child,l.memoizedState=oc(a),l.childLanes=rc(e,u,a),n.memoizedState=sc,Ui(null,l)):(Ca(n),cc(n,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(c)n.flags&256?(Ca(n),n.flags&=-257,n=dc(e,n,a)):n.memoizedState!==null?(za(),n.child=e.child,n.flags|=128,n=null):(za(),b=l.fallback,r=n.mode,l=Ws({mode:"visible",children:l.children},r),b=al(b,r,a,null),b.flags|=2,l.return=n,b.return=n,l.sibling=b,n.child=l,dl(n,e.child,null,a),l=n.child,l.memoizedState=oc(a),l.childLanes=rc(e,u,a),n.memoizedState=sc,n=Ui(null,l));else if(Ca(n),Qc(b)){if(u=b.nextSibling&&b.nextSibling.dataset,u)var Z=u.dgst;u=Z,l=Error(d(419)),l.stack="",l.digest=u,Ni({value:l,source:null,stack:null}),n=dc(e,n,a)}else if(Rt||Hl(e,n,a,!1),u=(a&e.childLanes)!==0,Rt||u){if(u=ht,u!==null&&(l=Hn(u,a),l!==0&&l!==k.retryLane))throw k.retryLane=l,nl(e,l),cn(u,e,l),lc;$c(b)||so(),n=dc(e,n,a)}else $c(b)?(n.flags|=192,n.child=e.child,n=null):(e=k.treeContext,bt=An(b.nextSibling),Zt=n,Pe=!0,ja=null,Dn=!1,e!==null&&Lu(n,e),n=cc(n,l.children),n.flags|=4096);return n}return r?(za(),b=l.fallback,r=n.mode,k=e.child,Z=k.sibling,l=ta(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,Z!==null?b=ta(Z,b):(b=al(b,r,a,null),b.flags|=2),b.return=n,l.return=n,l.sibling=b,n.child=l,Ui(null,l),l=n.child,b=e.child.memoizedState,b===null?b=oc(a):(r=b.cachePool,r!==null?(k=At._currentValue,r=r.parent!==k?{parent:k,pool:k}:r):r=Qu(),b={baseLanes:b.baseLanes|a,cachePool:r}),l.memoizedState=b,l.childLanes=rc(e,u,a),n.memoizedState=sc,Ui(e.child,l)):(Ca(n),a=e.child,e=a.sibling,a=ta(a,{mode:"visible",children:l.children}),a.return=n,a.sibling=null,e!==null&&(u=n.deletions,u===null?(n.deletions=[e],n.flags|=16):u.push(e)),n.child=a,n.memoizedState=null,a)}function cc(e,n){return n=Ws({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ws(e,n){return e=hn(22,e,null,n),e.lanes=0,e}function dc(e,n,a){return dl(n,e.child,null,a),e=cc(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function am(e,n,a){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Sr(e.return,n,a)}function uc(e,n,a,l,r,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:r,treeForkCount:c}:(u.isBackwards=n,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=a,u.tailMode=r,u.treeForkCount=c)}function lm(e,n,a){var l=n.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var u=Tt.current,b=(u&2)!==0;if(b?(u=u&1|2,n.flags|=128):u&=1,pe(Tt,u),Vt(e,n,l,a),l=Pe?wi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&am(e,a,n);else if(e.tag===19)am(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(a=n.child,r=null;a!==null;)e=a.alternate,e!==null&&qs(e)===null&&(r=a),a=a.sibling;a=r,a===null?(r=n.child,n.child=null):(r=a.sibling,a.sibling=null),uc(n,!1,r,a,c,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,r=n.child,n.child=null;r!==null;){if(e=r.alternate,e!==null&&qs(e)===null){n.child=r;break}e=r.sibling,r.sibling=a,a=r,r=e}uc(n,!0,a,null,c,l);break;case"together":uc(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function oa(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ma|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Hl(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(d(153));if(n.child!==null){for(e=n.child,a=ta(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=ta(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function pc(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Ms(e)))}function Yg(e,n,a){switch(n.tag){case 3:lt(n,n.stateNode.containerInfo),Na(n,At,e.memoizedState.cache),ll();break;case 27:case 5:Ke(n);break;case 4:lt(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Hr(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(Ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?nm(e,n,a):(Ca(n),e=oa(e,n,a),e!==null?e.sibling:null);Ca(n);break;case 19:var r=(e.flags&128)!==0;if(l=(a&n.childLanes)!==0,l||(Hl(e,n,a,!1),l=(a&n.childLanes)!==0),r){if(l)return lm(e,n,a);n.flags|=128}if(r=n.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),pe(Tt,Tt.current),l)break;return null;case 22:return n.lanes=0,Fp(e,n,a,n.pendingProps);case 24:Na(n,At,e.memoizedState.cache)}return oa(e,n,a)}function im(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)Rt=!0;else{if(!pc(e,a)&&(n.flags&128)===0)return Rt=!1,Yg(e,n,a);Rt=(e.flags&131072)!==0}else Rt=!1,Pe&&(n.flags&1048576)!==0&&Hu(n,wi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=rl(n.elementType),n.type=e,typeof e=="function")gr(e)?(l=pl(e,l),n.tag=1,n=em(null,n,e,l,a)):(n.tag=0,n=ic(null,n,e,l,a));else{if(e!=null){var r=e.$$typeof;if(r===ee){n.tag=11,n=Kp(null,n,e,l,a);break e}else if(r===E){n.tag=14,n=Vp(null,n,e,l,a);break e}}throw n=M(e)||e,Error(d(306,n,""))}}return n;case 0:return ic(e,n,n.type,n.pendingProps,a);case 1:return l=n.type,r=pl(l,n.pendingProps),em(e,n,l,r,a);case 3:e:{if(lt(n,n.stateNode.containerInfo),e===null)throw Error(d(387));l=n.pendingProps;var c=n.memoizedState;r=c.element,Dr(e,n),Ei(n,l,null,a);var u=n.memoizedState;if(l=u.cache,Na(n,At,l),l!==c.cache&&kr(n,[At],a,!0),Ti(),l=u.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=tm(e,n,l,a);break e}else if(l!==r){r=Tn(Error(d(424)),n),Ni(r),n=tm(e,n,l,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(bt=An(e.firstChild),Zt=n,Pe=!0,ja=null,Dn=!0,a=Fu(n,null,l,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ll(),l===r){n=oa(e,n,a);break e}Vt(e,n,l,a)}n=n.child}return n;case 26:return Fs(e,n),e===null?(a=gf(n.type,null,n.pendingProps,null))?n.memoizedState=a:Pe||(a=n.type,e=n.pendingProps,l=fo(ke.current).createElement(a),l[de]=n,l[Ce]=e,Jt(l,a,e),$t(l),n.stateNode=l):n.memoizedState=gf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Ke(n),e===null&&Pe&&(l=n.stateNode=ff(n.type,n.pendingProps,ke.current),Zt=n,Dn=!0,r=bt,Ra(n.type)?(Xc=r,bt=An(l.firstChild)):bt=r),Vt(e,n,n.pendingProps.children,a),Fs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Pe&&((r=l=bt)&&(l=bb(l,n.type,n.pendingProps,Dn),l!==null?(n.stateNode=l,Zt=n,bt=An(l.firstChild),Dn=!1,r=!0):r=!1),r||wa(n)),Ke(n),r=n.type,c=n.pendingProps,u=e!==null?e.memoizedProps:null,l=c.children,Bc(r,c)?l=null:u!==null&&Bc(r,u)&&(n.flags|=32),n.memoizedState!==null&&(r=qr(e,n,Og,null,null,a),Fi._currentValue=r),Fs(e,n),Vt(e,n,l,a),n.child;case 6:return e===null&&Pe&&((e=a=bt)&&(a=yb(a,n.pendingProps,Dn),a!==null?(n.stateNode=a,Zt=n,bt=null,e=!0):e=!1),e||wa(n)),null;case 13:return nm(e,n,a);case 4:return lt(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=dl(n,null,l,a):Vt(e,n,l,a),n.child;case 11:return Kp(e,n,n.type,n.pendingProps,a);case 7:return Vt(e,n,n.pendingProps,a),n.child;case 8:return Vt(e,n,n.pendingProps.children,a),n.child;case 12:return Vt(e,n,n.pendingProps.children,a),n.child;case 10:return l=n.pendingProps,Na(n,n.type,l.value),Vt(e,n,l.children,a),n.child;case 9:return r=n.type._context,l=n.pendingProps.children,sl(n),r=Kt(r),l=l(r),n.flags|=1,Vt(e,n,l,a),n.child;case 14:return Vp(e,n,n.type,n.pendingProps,a);case 15:return Jp(e,n,n.type,n.pendingProps,a);case 19:return lm(e,n,a);case 31:return Gg(e,n,a);case 22:return Fp(e,n,a,n.pendingProps);case 24:return sl(n),l=Kt(At),e===null?(r=Tr(),r===null&&(r=ht,c=Cr(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=a),r=c),n.memoizedState={parent:l,cache:r},Mr(n),Na(n,At,r)):((e.lanes&a)!==0&&(Dr(e,n),Ei(n,null,null,a),Ti()),r=e.memoizedState,c=n.memoizedState,r.parent!==l?(r={parent:l,cache:l},n.memoizedState=r,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=r),Na(n,At,l)):(l=c.cache,Na(n,At,l),l!==r.cache&&kr(n,[At],a,!0))),Vt(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function ra(e){e.flags|=4}function mc(e,n,a,l,r){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Dm())e.flags|=8192;else throw cl=Us,Er}else e.flags&=-16777217}function sm(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!wf(n))if(Dm())e.flags|=8192;else throw cl=Us,Er}function Ps(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ue():536870912,e.lanes|=n,Jl|=n)}function Ri(e,n){if(!Pe)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function yt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(n)for(var r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)a|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=a,n}function $g(e,n,a){var l=n.pendingProps;switch(jr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return yt(n),null;case 1:return yt(n),null;case 3:return a=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),la(At),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Rl(n)?ra(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Nr())),yt(n),null;case 26:var r=n.type,c=n.memoizedState;return e===null?(ra(n),c!==null?(yt(n),sm(n,c)):(yt(n),mc(n,r,null,l,a))):c?c!==e.memoizedState?(ra(n),yt(n),sm(n,c)):(yt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ra(n),yt(n),mc(n,r,e,l,a)),null;case 27:if(Ct(n),a=ke.current,r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}e=me.current,Rl(n)?qu(n):(e=ff(r,l,a),n.stateNode=e,ra(n))}return yt(n),null;case 5:if(Ct(n),r=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(!l){if(n.stateNode===null)throw Error(d(166));return yt(n),null}if(c=me.current,Rl(n))qu(n);else{var u=fo(ke.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}c[de]=n,c[Ce]=l;e:for(u=n.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===n)break e;for(;u.sibling===null;){if(u.return===null||u.return===n)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}n.stateNode=c;e:switch(Jt(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ra(n)}}return yt(n),mc(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ra(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(d(166));if(e=ke.current,Rl(n)){if(e=n.stateNode,a=n.memoizedProps,l=null,r=Zt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[de]=n,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||nf(e.nodeValue,a)),e||wa(n,!0)}else e=fo(e).createTextNode(l),e[de]=n,n.stateNode=e}return yt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(l=Rl(n),a!==null){if(e===null){if(!l)throw Error(d(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[de]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),e=!1}else a=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(gn(n),n):(gn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return yt(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Rl(n),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=n.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[de]=n}else ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;yt(n),r=!1}else r=Nr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return n.flags&256?(gn(n),n):(gn(n),null)}return gn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=n.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ps(n,n.updateQueue),yt(n),null);case 4:return Ge(),e===null&&Uc(n.stateNode.containerInfo),yt(n),null;case 10:return la(n.type),yt(n),null;case 19:if(Q(Tt),l=n.memoizedState,l===null)return yt(n),null;if(r=(n.flags&128)!==0,c=l.rendering,c===null)if(r)Ri(l,!1);else{if(St!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(c=qs(e),c!==null){for(n.flags|=128,Ri(l,!1),e=c.updateQueue,n.updateQueue=e,Ps(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Au(a,e),a=a.sibling;return pe(Tt,Tt.current&1|2),Pe&&na(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&be()>ao&&(n.flags|=128,r=!0,Ri(l,!1),n.lanes=4194304)}else{if(!r)if(e=qs(c),e!==null){if(n.flags|=128,r=!0,e=e.updateQueue,n.updateQueue=e,Ps(n,e),Ri(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!Pe)return yt(n),null}else 2*be()-l.renderingStartTime>ao&&a!==536870912&&(n.flags|=128,r=!0,Ri(l,!1),n.lanes=4194304);l.isBackwards?(c.sibling=n.child,n.child=c):(e=l.last,e!==null?e.sibling=c:n.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=be(),e.sibling=null,a=Tt.current,pe(Tt,r?a&1|2:a&1),Pe&&na(n,l.treeForkCount),e):(yt(n),null);case 22:case 23:return gn(n),Rr(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(a&536870912)!==0&&(n.flags&128)===0&&(yt(n),n.subtreeFlags&6&&(n.flags|=8192)):yt(n),a=n.updateQueue,a!==null&&Ps(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==a&&(n.flags|=2048),e!==null&&Q(ol),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),la(At),yt(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function Qg(e,n){switch(jr(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return la(At),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Ct(n),null;case 31:if(n.memoizedState!==null){if(gn(n),n.alternate===null)throw Error(d(340));ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(gn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(d(340));ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Q(Tt),null;case 4:return Ge(),null;case 10:return la(n.type),null;case 22:case 23:return gn(n),Rr(),e!==null&&Q(ol),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return la(At),null;case 25:return null;default:return null}}function om(e,n){switch(jr(n),n.tag){case 3:la(At),Ge();break;case 26:case 27:case 5:Ct(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&gn(n);break;case 13:gn(n);break;case 19:Q(Tt);break;case 10:la(n.type);break;case 22:case 23:gn(n),Rr(),e!==null&&Q(ol);break;case 24:la(At)}}function Hi(e,n){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var r=l.next;a=r;do{if((a.tag&e)===e){l=void 0;var c=a.create,u=a.inst;l=c(),u.destroy=l}a=a.next}while(a!==r)}}catch(b){st(n,n.return,b)}}function Ta(e,n,a){try{var l=n.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var u=l.inst,b=u.destroy;if(b!==void 0){u.destroy=void 0,r=n;var k=a,Z=b;try{Z()}catch(I){st(r,k,I)}}}l=l.next}while(l!==c)}}catch(I){st(n,n.return,I)}}function rm(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Pu(n,a)}catch(l){st(e,e.return,l)}}}function cm(e,n,a){a.props=pl(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){st(e,n,l)}}function Li(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(r){st(e,n,r)}}function Kn(e,n){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(r){st(e,n,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(r){st(e,n,r)}else a.current=null}function dm(e){var n=e.type,a=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break e;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(r){st(e,e.return,r)}}function fc(e,n,a){try{var l=e.stateNode;pb(l,e.type,a,n),l[Ce]=n}catch(r){st(e,e.return,r)}}function um(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ra(e.type)||e.tag===4}function hc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||um(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ra(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xc(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=In));else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xc(e,n,a),e=e.sibling;e!==null;)xc(e,n,a),e=e.sibling}function Is(e,n,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(l!==4&&(l===27&&Ra(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Is(e,n,a),e=e.sibling;e!==null;)Is(e,n,a),e=e.sibling}function pm(e){var n=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,r=n.attributes;r.length;)n.removeAttributeNode(r[0]);Jt(n,l,a),n[de]=e,n[Ce]=a}catch(c){st(e,e.return,c)}}var ca=!1,Ht=!1,gc=!1,mm=typeof WeakSet=="function"?WeakSet:Set,Qt=null;function Xg(e,n){if(e=e.containerInfo,Lc=jo,e=Su(e),dr(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var u=0,b=-1,k=-1,Z=0,I=0,le=e,V=null;t:for(;;){for(var F;le!==a||r!==0&&le.nodeType!==3||(b=u+r),le!==c||l!==0&&le.nodeType!==3||(k=u+l),le.nodeType===3&&(u+=le.nodeValue.length),(F=le.firstChild)!==null;)V=le,le=F;for(;;){if(le===e)break t;if(V===a&&++Z===r&&(b=u),V===c&&++I===l&&(k=u),(F=le.nextSibling)!==null)break;le=V,V=le.parentNode}le=F}a=b===-1||k===-1?null:{start:b,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(qc={focusedElem:e,selectionRange:a},jo=!1,Qt=n;Qt!==null;)if(n=Qt,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Qt=e;else for(;Qt!==null;){switch(n=Qt,c=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)r=e[a],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,a=n,r=c.memoizedProps,c=c.memoizedState,l=a.stateNode;try{var ve=pl(a.type,r);e=l.getSnapshotBeforeUpdate(ve,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Me){st(a,a.return,Me)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Yc(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Yc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=n.sibling,e!==null){e.return=n.return,Qt=e;break}Qt=n.return}}function fm(e,n,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:ua(e,a),l&4&&Hi(5,a);break;case 1:if(ua(e,a),l&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(u){st(a,a.return,u)}else{var r=pl(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(r,n,e.__reactInternalSnapshotBeforeUpdate)}catch(u){st(a,a.return,u)}}l&64&&rm(a),l&512&&Li(a,a.return);break;case 3:if(ua(e,a),l&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Pu(e,n)}catch(u){st(a,a.return,u)}}break;case 27:n===null&&l&4&&pm(a);case 26:case 5:ua(e,a),n===null&&l&4&&dm(a),l&512&&Li(a,a.return);break;case 12:ua(e,a);break;case 31:ua(e,a),l&4&&gm(e,a);break;case 13:ua(e,a),l&4&&bm(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=eb.bind(null,a),vb(e,a))));break;case 22:if(l=a.memoizedState!==null||ca,!l){n=n!==null&&n.memoizedState!==null||Ht,r=ca;var c=Ht;ca=l,(Ht=n)&&!c?pa(e,a,(a.subtreeFlags&8772)!==0):ua(e,a),ca=r,Ht=c}break;case 30:break;default:ua(e,a)}}function hm(e){var n=e.alternate;n!==null&&(e.alternate=null,hm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ko(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var jt=null,ln=!1;function da(e,n,a){for(a=a.child;a!==null;)xm(e,n,a),a=a.sibling}function xm(e,n,a){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ve,a)}catch{}switch(a.tag){case 26:Ht||Kn(a,n),da(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Ht||Kn(a,n);var l=jt,r=ln;Ra(a.type)&&(jt=a.stateNode,ln=!1),da(e,n,a),Ki(a.stateNode),jt=l,ln=r;break;case 5:Ht||Kn(a,n);case 6:if(l=jt,r=ln,jt=null,da(e,n,a),jt=l,ln=r,jt!==null)if(ln)try{(jt.nodeType===9?jt.body:jt.nodeName==="HTML"?jt.ownerDocument.body:jt).removeChild(a.stateNode)}catch(c){st(a,n,c)}else try{jt.removeChild(a.stateNode)}catch(c){st(a,n,c)}break;case 18:jt!==null&&(ln?(e=jt,cf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),ai(e)):cf(jt,a.stateNode));break;case 4:l=jt,r=ln,jt=a.stateNode.containerInfo,ln=!0,da(e,n,a),jt=l,ln=r;break;case 0:case 11:case 14:case 15:Ta(2,a,n),Ht||Ta(4,a,n),da(e,n,a);break;case 1:Ht||(Kn(a,n),l=a.stateNode,typeof l.componentWillUnmount=="function"&&cm(a,n,l)),da(e,n,a);break;case 21:da(e,n,a);break;case 22:Ht=(l=Ht)||a.memoizedState!==null,da(e,n,a),Ht=l;break;default:da(e,n,a)}}function gm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{ai(e)}catch(a){st(n,n.return,a)}}}function bm(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{ai(e)}catch(a){st(n,n.return,a)}}function Zg(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new mm),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new mm),n;default:throw Error(d(435,e.tag))}}function eo(e,n){var a=Zg(e);n.forEach(function(l){if(!a.has(l)){a.add(l);var r=tb.bind(null,e,l);l.then(r,r)}})}function sn(e,n){var a=n.deletions;if(a!==null)for(var l=0;l<a.length;l++){var r=a[l],c=e,u=n,b=u;e:for(;b!==null;){switch(b.tag){case 27:if(Ra(b.type)){jt=b.stateNode,ln=!1;break e}break;case 5:jt=b.stateNode,ln=!1;break e;case 3:case 4:jt=b.stateNode.containerInfo,ln=!0;break e}b=b.return}if(jt===null)throw Error(d(160));xm(c,u,r),jt=null,ln=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ym(n,e),n=n.sibling}var qn=null;function ym(e,n){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:sn(n,e),on(e),l&4&&(Ta(3,e,e.return),Hi(3,e),Ta(5,e,e.return));break;case 1:sn(n,e),on(e),l&512&&(Ht||a===null||Kn(a,a.return)),l&64&&ca&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var r=qn;if(sn(n,e),on(e),l&512&&(Ht||a===null||Kn(a,a.return)),l&4){var c=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){e:{l=e.type,a=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[ui]||c[de]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Jt(c,l,a),c[de]=e,$t(c),l=c;break e;case"link":var u=vf("link","href",r).get(l+(a.href||""));if(u){for(var b=0;b<u.length;b++)if(c=u[b],c.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&c.getAttribute("rel")===(a.rel==null?null:a.rel)&&c.getAttribute("title")===(a.title==null?null:a.title)&&c.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){u.splice(b,1);break t}}c=r.createElement(l),Jt(c,l,a),r.head.appendChild(c);break;case"meta":if(u=vf("meta","content",r).get(l+(a.content||""))){for(b=0;b<u.length;b++)if(c=u[b],c.getAttribute("content")===(a.content==null?null:""+a.content)&&c.getAttribute("name")===(a.name==null?null:a.name)&&c.getAttribute("property")===(a.property==null?null:a.property)&&c.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&c.getAttribute("charset")===(a.charSet==null?null:a.charSet)){u.splice(b,1);break t}}c=r.createElement(l),Jt(c,l,a),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[de]=e,$t(c),l=c}e.stateNode=l}else jf(r,e.type,e.stateNode);else e.stateNode=yf(r,l,e.memoizedProps);else c!==l?(c===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):c.count--,l===null?jf(r,e.type,e.stateNode):yf(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&fc(e,e.memoizedProps,a.memoizedProps)}break;case 27:sn(n,e),on(e),l&512&&(Ht||a===null||Kn(a,a.return)),a!==null&&l&4&&fc(e,e.memoizedProps,a.memoizedProps);break;case 5:if(sn(n,e),on(e),l&512&&(Ht||a===null||Kn(a,a.return)),e.flags&32){r=e.stateNode;try{kl(r,"")}catch(ve){st(e,e.return,ve)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,fc(e,r,a!==null?a.memoizedProps:r)),l&1024&&(gc=!0);break;case 6:if(sn(n,e),on(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(ve){st(e,e.return,ve)}}break;case 3:if(go=null,r=qn,qn=ho(n.containerInfo),sn(n,e),qn=r,on(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{ai(n.containerInfo)}catch(ve){st(e,e.return,ve)}gc&&(gc=!1,vm(e));break;case 4:l=qn,qn=ho(e.stateNode.containerInfo),sn(n,e),on(e),qn=l;break;case 12:sn(n,e),on(e);break;case 31:sn(n,e),on(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 13:sn(n,e),on(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(no=be()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 22:r=e.memoizedState!==null;var k=a!==null&&a.memoizedState!==null,Z=ca,I=Ht;if(ca=Z||r,Ht=I||k,sn(n,e),Ht=I,ca=Z,on(e),l&8192)e:for(n=e.stateNode,n._visibility=r?n._visibility&-2:n._visibility|1,r&&(a===null||k||ca||Ht||ml(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){k=a=n;try{if(c=k.stateNode,r)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{b=k.stateNode;var le=k.memoizedProps.style,V=le!=null&&le.hasOwnProperty("display")?le.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(ve){st(k,k.return,ve)}}}else if(n.tag===6){if(a===null){k=n;try{k.stateNode.nodeValue=r?"":k.memoizedProps}catch(ve){st(k,k.return,ve)}}}else if(n.tag===18){if(a===null){k=n;try{var F=k.stateNode;r?df(F,!0):df(k.stateNode,!1)}catch(ve){st(k,k.return,ve)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,eo(e,a))));break;case 19:sn(n,e),on(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,eo(e,l)));break;case 30:break;case 21:break;default:sn(n,e),on(e)}}function on(e){var n=e.flags;if(n&2){try{for(var a,l=e.return;l!==null;){if(um(l)){a=l;break}l=l.return}if(a==null)throw Error(d(160));switch(a.tag){case 27:var r=a.stateNode,c=hc(e);Is(e,c,r);break;case 5:var u=a.stateNode;a.flags&32&&(kl(u,""),a.flags&=-33);var b=hc(e);Is(e,b,u);break;case 3:case 4:var k=a.stateNode.containerInfo,Z=hc(e);xc(e,Z,k);break;default:throw Error(d(161))}}catch(I){st(e,e.return,I)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function vm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;vm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ua(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)fm(e,n.alternate,n),n=n.sibling}function ml(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),ml(n);break;case 1:Kn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&cm(n,n.return,a),ml(n);break;case 27:Ki(n.stateNode);case 26:case 5:Kn(n,n.return),ml(n);break;case 22:n.memoizedState===null&&ml(n);break;case 30:ml(n);break;default:ml(n)}e=e.sibling}}function pa(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,r=e,c=n,u=c.flags;switch(c.tag){case 0:case 11:case 15:pa(r,c,a),Hi(4,c);break;case 1:if(pa(r,c,a),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){st(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var b=l.stateNode;try{var k=r.shared.hiddenCallbacks;if(k!==null)for(r.shared.hiddenCallbacks=null,r=0;r<k.length;r++)Wu(k[r],b)}catch(Z){st(l,l.return,Z)}}a&&u&64&&rm(c),Li(c,c.return);break;case 27:pm(c);case 26:case 5:pa(r,c,a),a&&l===null&&u&4&&dm(c),Li(c,c.return);break;case 12:pa(r,c,a);break;case 31:pa(r,c,a),a&&u&4&&gm(r,c);break;case 13:pa(r,c,a),a&&u&4&&bm(r,c);break;case 22:c.memoizedState===null&&pa(r,c,a),Li(c,c.return);break;case 30:break;default:pa(r,c,a)}n=n.sibling}}function bc(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&_i(a))}function yc(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_i(e))}function Bn(e,n,a,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)jm(e,n,a,l),n=n.sibling}function jm(e,n,a,l){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Bn(e,n,a,l),r&2048&&Hi(9,n);break;case 1:Bn(e,n,a,l);break;case 3:Bn(e,n,a,l),r&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&_i(e)));break;case 12:if(r&2048){Bn(e,n,a,l),e=n.stateNode;try{var c=n.memoizedProps,u=c.id,b=c.onPostCommit;typeof b=="function"&&b(u,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){st(n,n.return,k)}}else Bn(e,n,a,l);break;case 31:Bn(e,n,a,l);break;case 13:Bn(e,n,a,l);break;case 23:break;case 22:c=n.stateNode,u=n.alternate,n.memoizedState!==null?c._visibility&2?Bn(e,n,a,l):qi(e,n):c._visibility&2?Bn(e,n,a,l):(c._visibility|=2,Zl(e,n,a,l,(n.subtreeFlags&10256)!==0||!1)),r&2048&&bc(u,n);break;case 24:Bn(e,n,a,l),r&2048&&yc(n.alternate,n);break;default:Bn(e,n,a,l)}}function Zl(e,n,a,l,r){for(r=r&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=e,u=n,b=a,k=l,Z=u.flags;switch(u.tag){case 0:case 11:case 15:Zl(c,u,b,k,r),Hi(8,u);break;case 23:break;case 22:var I=u.stateNode;u.memoizedState!==null?I._visibility&2?Zl(c,u,b,k,r):qi(c,u):(I._visibility|=2,Zl(c,u,b,k,r)),r&&Z&2048&&bc(u.alternate,u);break;case 24:Zl(c,u,b,k,r),r&&Z&2048&&yc(u.alternate,u);break;default:Zl(c,u,b,k,r)}n=n.sibling}}function qi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,l=n,r=l.flags;switch(l.tag){case 22:qi(a,l),r&2048&&bc(l.alternate,l);break;case 24:qi(a,l),r&2048&&yc(l.alternate,l);break;default:qi(a,l)}n=n.sibling}}var Bi=8192;function Kl(e,n,a){if(e.subtreeFlags&Bi)for(e=e.child;e!==null;)wm(e,n,a),e=e.sibling}function wm(e,n,a){switch(e.tag){case 26:Kl(e,n,a),e.flags&Bi&&e.memoizedState!==null&&Db(a,qn,e.memoizedState,e.memoizedProps);break;case 5:Kl(e,n,a);break;case 3:case 4:var l=qn;qn=ho(e.stateNode.containerInfo),Kl(e,n,a),qn=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Bi,Bi=16777216,Kl(e,n,a),Bi=l):Kl(e,n,a));break;default:Kl(e,n,a)}}function Nm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Gi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Qt=l,Sm(l,e)}Nm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_m(e),e=e.sibling}function _m(e){switch(e.tag){case 0:case 11:case 15:Gi(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:Gi(e);break;case 12:Gi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,to(e)):Gi(e);break;default:Gi(e)}}function to(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var l=n[a];Qt=l,Sm(l,e)}Nm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),to(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,to(n));break;default:to(n)}e=e.sibling}}function Sm(e,n){for(;Qt!==null;){var a=Qt;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:_i(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,Qt=l;else e:for(a=e;Qt!==null;){l=Qt;var r=l.sibling,c=l.return;if(hm(l),l===a){Qt=null;break e}if(r!==null){r.return=c,Qt=r;break e}Qt=c}}}var Kg={getCacheForType:function(e){var n=Kt(At),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Kt(At).controller.signal}},Vg=typeof WeakMap=="function"?WeakMap:Map,at=0,ht=null,$e=null,Fe=0,it=0,bn=null,Ea=!1,Vl=!1,vc=!1,ma=0,St=0,Ma=0,fl=0,jc=0,yn=0,Jl=0,Yi=null,rn=null,wc=!1,no=0,km=0,ao=1/0,lo=null,Da=null,qt=0,Oa=null,Fl=null,fa=0,Nc=0,_c=null,Cm=null,$i=0,Sc=null;function vn(){return(at&2)!==0&&Fe!==0?Fe&-Fe:A.T!==null?Mc():fs()}function zm(){if(yn===0)if((Fe&536870912)===0||Pe){var e=mn;mn<<=1,(mn&3932160)===0&&(mn=262144),yn=e}else yn=536870912;return e=xn.current,e!==null&&(e.flags|=32),yn}function cn(e,n,a){(e===ht&&(it===2||it===9)||e.cancelPendingCommit!==null)&&(Wl(e,0),Aa(e,Fe,yn,!1)),et(e,a),((at&2)===0||e!==ht)&&(e===ht&&((at&2)===0&&(fl|=a),St===4&&Aa(e,Fe,yn,!1)),Vn(e))}function Tm(e,n,a){if((at&6)!==0)throw Error(d(327));var l=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ce(e,n),r=l?Wg(e,n):Cc(e,n,!0),c=l;do{if(r===0){Vl&&!l&&Aa(e,n,0,!1);break}else{if(a=e.current.alternate,c&&!Jg(a)){r=Cc(e,n,!1),c=!1;continue}if(r===2){if(c=n,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;e:{var b=e;r=Yi;var k=b.current.memoizedState.isDehydrated;if(k&&(Wl(b,u).flags|=256),u=Cc(b,u,!1),u!==2){if(vc&&!k){b.errorRecoveryDisabledLanes|=c,fl|=c,r=4;break e}c=rn,rn=r,c!==null&&(rn===null?rn=c:rn.push.apply(rn,c))}r=u}if(c=!1,r!==2)continue}}if(r===1){Wl(e,0),Aa(e,n,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:Aa(l,n,yn,!Ea);break e;case 2:rn=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(r=no+300-be(),10<r)){if(Aa(l,n,yn,!Ea),L(l,0,!0)!==0)break e;fa=n,l.timeoutHandle=of(Em.bind(null,l,a,rn,lo,wc,n,yn,fl,Jl,Ea,c,"Throttled",-0,0),r);break e}Em(l,a,rn,lo,wc,n,yn,fl,Jl,Ea,c,null,-0,0)}}break}while(!0);Vn(e)}function Em(e,n,a,l,r,c,u,b,k,Z,I,le,V,F){if(e.timeoutHandle=-1,le=n.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:In},wm(n,c,le);var ve=(c&62914560)===c?no-be():(c&4194048)===c?km-be():0;if(ve=Ob(le,ve),ve!==null){fa=c,e.cancelPendingCommit=ve(Lm.bind(null,e,n,c,a,l,r,u,b,k,I,le,null,V,F)),Aa(e,c,u,!Z);return}}Lm(e,n,c,a,l,r,u,b,k)}function Jg(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var r=a[l],c=r.getSnapshot;r=r.value;try{if(!fn(c(),r))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Aa(e,n,a,l){n&=~jc,n&=~fl,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var r=n;0<r;){var c=31-mt(r),u=1<<c;l[c]=-1,r&=~u}a!==0&&ct(e,a,n)}function io(){return(at&6)===0?(Qi(0),!1):!0}function kc(){if($e!==null){if(it===0)var e=$e.return;else e=$e,aa=il=null,Yr(e),Gl=null,ki=0,e=$e;for(;e!==null;)om(e.alternate,e),e=e.return;$e=null}}function Wl(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),fa=0,kc(),ht=e,$e=a=ta(e.current,null),Fe=n,it=0,bn=null,Ea=!1,Vl=ce(e,n),vc=!1,Jl=yn=jc=fl=Ma=St=0,rn=Yi=null,wc=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var r=31-mt(l),c=1<<r;n|=e[r],l&=~c}return ma=n,ks(),a}function Mm(e,n){He=null,A.H=Ai,n===Bl||n===As?(n=Ku(),it=3):n===Er?(n=Ku(),it=4):it=n===lc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,bn=n,$e===null&&(St=1,Vs(e,Tn(n,e.current)))}function Dm(){var e=xn.current;return e===null?!0:(Fe&4194048)===Fe?On===null:(Fe&62914560)===Fe||(Fe&536870912)!==0?e===On:!1}function Om(){var e=A.H;return A.H=Ai,e===null?Ai:e}function Am(){var e=A.A;return A.A=Kg,e}function so(){St=4,Ea||(Fe&4194048)!==Fe&&xn.current!==null||(Vl=!0),(Ma&134217727)===0&&(fl&134217727)===0||ht===null||Aa(ht,Fe,yn,!1)}function Cc(e,n,a){var l=at;at|=2;var r=Om(),c=Am();(ht!==e||Fe!==n)&&(lo=null,Wl(e,n)),n=!1;var u=St;e:do try{if(it!==0&&$e!==null){var b=$e,k=bn;switch(it){case 8:kc(),u=6;break e;case 3:case 2:case 9:case 6:xn.current===null&&(n=!0);var Z=it;if(it=0,bn=null,Pl(e,b,k,Z),a&&Vl){u=0;break e}break;default:Z=it,it=0,bn=null,Pl(e,b,k,Z)}}Fg(),u=St;break}catch(I){Mm(e,I)}while(!0);return n&&e.shellSuspendCounter++,aa=il=null,at=l,A.H=r,A.A=c,$e===null&&(ht=null,Fe=0,ks()),u}function Fg(){for(;$e!==null;)Um($e)}function Wg(e,n){var a=at;at|=2;var l=Om(),r=Am();ht!==e||Fe!==n?(lo=null,ao=be()+500,Wl(e,n)):Vl=ce(e,n);e:do try{if(it!==0&&$e!==null){n=$e;var c=bn;t:switch(it){case 1:it=0,bn=null,Pl(e,n,c,1);break;case 2:case 9:if(Xu(c)){it=0,bn=null,Rm(n);break}n=function(){it!==2&&it!==9||ht!==e||(it=7),Vn(e)},c.then(n,n);break e;case 3:it=7;break e;case 4:it=5;break e;case 7:Xu(c)?(it=0,bn=null,Rm(n)):(it=0,bn=null,Pl(e,n,c,7));break;case 5:var u=null;switch($e.tag){case 26:u=$e.memoizedState;case 5:case 27:var b=$e;if(u?wf(u):b.stateNode.complete){it=0,bn=null;var k=b.sibling;if(k!==null)$e=k;else{var Z=b.return;Z!==null?($e=Z,oo(Z)):$e=null}break t}}it=0,bn=null,Pl(e,n,c,5);break;case 6:it=0,bn=null,Pl(e,n,c,6);break;case 8:kc(),St=6;break e;default:throw Error(d(462))}}Pg();break}catch(I){Mm(e,I)}while(!0);return aa=il=null,A.H=l,A.A=r,at=a,$e!==null?0:(ht=null,Fe=0,ks(),St)}function Pg(){for(;$e!==null&&!pn();)Um($e)}function Um(e){var n=im(e.alternate,e,ma);e.memoizedProps=e.pendingProps,n===null?oo(e):$e=n}function Rm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=Ip(a,n,n.pendingProps,n.type,void 0,Fe);break;case 11:n=Ip(a,n,n.pendingProps,n.type.render,n.ref,Fe);break;case 5:Yr(n);default:om(a,n),n=$e=Au(n,ma),n=im(a,n,ma)}e.memoizedProps=e.pendingProps,n===null?oo(e):$e=n}function Pl(e,n,a,l){aa=il=null,Yr(n),Gl=null,ki=0;var r=n.return;try{if(Bg(e,r,n,a,Fe)){St=1,Vs(e,Tn(a,e.current)),$e=null;return}}catch(c){if(r!==null)throw $e=r,c;St=1,Vs(e,Tn(a,e.current)),$e=null;return}n.flags&32768?(Pe||l===1?e=!0:Vl||(Fe&536870912)!==0?e=!1:(Ea=e=!0,(l===2||l===9||l===3||l===6)&&(l=xn.current,l!==null&&l.tag===13&&(l.flags|=16384))),Hm(n,e)):oo(n)}function oo(e){var n=e;do{if((n.flags&32768)!==0){Hm(n,Ea);return}e=n.return;var a=$g(n.alternate,n,ma);if(a!==null){$e=a;return}if(n=n.sibling,n!==null){$e=n;return}$e=n=e}while(n!==null);St===0&&(St=5)}function Hm(e,n){do{var a=Qg(e.alternate,e);if(a!==null){a.flags&=32767,$e=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){$e=e;return}$e=e=a}while(e!==null);St=6,$e=null}function Lm(e,n,a,l,r,c,u,b,k){e.cancelPendingCommit=null;do ro();while(qt!==0);if((at&6)!==0)throw Error(d(327));if(n!==null){if(n===e.current)throw Error(d(177));if(c=n.lanes|n.childLanes,c|=hr,ft(e,a,c,u,b,k),e===ht&&($e=ht=null,Fe=0),Fl=n,Oa=e,fa=a,Nc=c,_c=r,Cm=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,nb(G,function(){return $m(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,r=J.p,J.p=2,u=at,at|=4;try{Xg(e,n,a)}finally{at=u,J.p=r,A.T=l}}qt=1,qm(),Bm(),Gm()}}function qm(){if(qt===1){qt=0;var e=Oa,n=Fl,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=A.T,A.T=null;var l=J.p;J.p=2;var r=at;at|=4;try{ym(n,e);var c=qc,u=Su(e.containerInfo),b=c.focusedElem,k=c.selectionRange;if(u!==b&&b&&b.ownerDocument&&_u(b.ownerDocument.documentElement,b)){if(k!==null&&dr(b)){var Z=k.start,I=k.end;if(I===void 0&&(I=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(I,b.value.length);else{var le=b.ownerDocument||document,V=le&&le.defaultView||window;if(V.getSelection){var F=V.getSelection(),ve=b.textContent.length,Me=Math.min(k.start,ve),pt=k.end===void 0?Me:Math.min(k.end,ve);!F.extend&&Me>pt&&(u=pt,pt=Me,Me=u);var q=Nu(b,Me),D=Nu(b,pt);if(q&&D&&(F.rangeCount!==1||F.anchorNode!==q.node||F.anchorOffset!==q.offset||F.focusNode!==D.node||F.focusOffset!==D.offset)){var X=le.createRange();X.setStart(q.node,q.offset),F.removeAllRanges(),Me>pt?(F.addRange(X),F.extend(D.node,D.offset)):(X.setEnd(D.node,D.offset),F.addRange(X))}}}}for(le=[],F=b;F=F.parentNode;)F.nodeType===1&&le.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<le.length;b++){var ae=le[b];ae.element.scrollLeft=ae.left,ae.element.scrollTop=ae.top}}jo=!!Lc,qc=Lc=null}finally{at=r,J.p=l,A.T=a}}e.current=n,qt=2}}function Bm(){if(qt===2){qt=0;var e=Oa,n=Fl,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=A.T,A.T=null;var l=J.p;J.p=2;var r=at;at|=4;try{fm(e,n.alternate,n)}finally{at=r,J.p=l,A.T=a}}qt=3}}function Gm(){if(qt===4||qt===3){qt=0,T();var e=Oa,n=Fl,a=fa,l=Cm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?qt=5:(qt=0,Fl=Oa=null,Ym(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Da=null),Sn(a),n=n.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ve,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=A.T,r=J.p,J.p=2,A.T=null;try{for(var c=e.onRecoverableError,u=0;u<l.length;u++){var b=l[u];c(b.value,{componentStack:b.stack})}}finally{A.T=n,J.p=r}}(fa&3)!==0&&ro(),Vn(e),r=e.pendingLanes,(a&261930)!==0&&(r&42)!==0?e===Sc?$i++:($i=0,Sc=e):$i=0,Qi(0)}}function Ym(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,_i(n)))}function ro(){return qm(),Bm(),Gm(),$m()}function $m(){if(qt!==5)return!1;var e=Oa,n=Nc;Nc=0;var a=Sn(fa),l=A.T,r=J.p;try{J.p=32>a?32:a,A.T=null,a=_c,_c=null;var c=Oa,u=fa;if(qt=0,Fl=Oa=null,fa=0,(at&6)!==0)throw Error(d(331));var b=at;if(at|=4,_m(c.current),jm(c,c.current,u,a),at=b,Qi(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ve,c)}catch{}return!0}finally{J.p=r,A.T=l,Ym(e,n)}}function Qm(e,n,a){n=Tn(a,n),n=ac(e.stateNode,n,2),e=ka(e,n,2),e!==null&&(et(e,2),Vn(e))}function st(e,n,a){if(e.tag===3)Qm(e,e,a);else for(;n!==null;){if(n.tag===3){Qm(n,e,a);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Da===null||!Da.has(l))){e=Tn(a,e),a=Xp(2),l=ka(n,a,2),l!==null&&(Zp(a,l,n,e),et(l,2),Vn(l));break}}n=n.return}}function zc(e,n,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Vg;var r=new Set;l.set(n,r)}else r=l.get(n),r===void 0&&(r=new Set,l.set(n,r));r.has(a)||(vc=!0,r.add(a),e=Ig.bind(null,e,n,a),n.then(e,e))}function Ig(e,n,a){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ht===e&&(Fe&a)===a&&(St===4||St===3&&(Fe&62914560)===Fe&&300>be()-no?(at&2)===0&&Wl(e,0):jc|=a,Jl===Fe&&(Jl=0)),Vn(e)}function Xm(e,n){n===0&&(n=Ue()),e=nl(e,n),e!==null&&(et(e,n),Vn(e))}function eb(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),Xm(e,a)}function tb(e,n){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(a=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(n),Xm(e,a)}function nb(e,n){return Wt(e,n)}var co=null,Il=null,Tc=!1,uo=!1,Ec=!1,Ua=0;function Vn(e){e!==Il&&e.next===null&&(Il===null?co=Il=e:Il=Il.next=e),uo=!0,Tc||(Tc=!0,lb())}function Qi(e,n){if(!Ec&&uo){Ec=!0;do for(var a=!1,l=co;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var u=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-mt(42|e)+1)-1,c&=r&~(u&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,Jm(l,c))}else c=Fe,c=L(l,l===ht?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||ce(l,c)||(a=!0,Jm(l,c));l=l.next}while(a);Ec=!1}}function ab(){Zm()}function Zm(){uo=Tc=!1;var e=0;Ua!==0&&fb()&&(e=Ua);for(var n=be(),a=null,l=co;l!==null;){var r=l.next,c=Km(l,n);c===0?(l.next=null,a===null?co=r:a.next=r,r===null&&(Il=a)):(a=l,(e!==0||(c&3)!==0)&&(uo=!0)),l=r}qt!==0&&qt!==5||Qi(e),Ua!==0&&(Ua=0)}function Km(e,n){for(var a=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-mt(c),b=1<<u,k=r[u];k===-1?((b&a)===0||(b&l)!==0)&&(r[u]=se(b,n)):k<=n&&(e.expiredLanes|=b),c&=~b}if(n=ht,a=Fe,a=L(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===n&&(it===2||it===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zt(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ce(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(l!==null&&zt(l),Sn(a)){case 2:case 8:a=rt;break;case 32:a=G;break;case 268435456:a=je;break;default:a=G}return l=Vm.bind(null,e),a=Wt(a,l),e.callbackPriority=n,e.callbackNode=a,n}return l!==null&&l!==null&&zt(l),e.callbackPriority=2,e.callbackNode=null,2}function Vm(e,n){if(qt!==0&&qt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(ro()&&e.callbackNode!==a)return null;var l=Fe;return l=L(e,e===ht?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Tm(e,l,n),Km(e,be()),e.callbackNode!=null&&e.callbackNode===a?Vm.bind(null,e):null)}function Jm(e,n){if(ro())return null;Tm(e,n,!0)}function lb(){xb(function(){(at&6)!==0?Wt(ye,ab):Zm()})}function Mc(){if(Ua===0){var e=Ll;e===0&&(e=Gn,Gn<<=1,(Gn&261888)===0&&(Gn=256)),Ua=e}return Ua}function Fm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:bs(""+e)}function Wm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function ib(e,n,a,l,r){if(n==="submit"&&a&&a.stateNode===r){var c=Fm((r[Ce]||null).action),u=l.submitter;u&&(n=(n=u[Ce]||null)?Fm(n.formAction):u.getAttribute("formAction"),n!==null&&(c=n,u=null));var b=new ws("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ua!==0){var k=u?Wm(r,u):new FormData(r);Wr(a,{pending:!0,data:k,method:r.method,action:c},null,k)}}else typeof c=="function"&&(b.preventDefault(),k=u?Wm(r,u):new FormData(r),Wr(a,{pending:!0,data:k,method:r.method,action:c},c,k))},currentTarget:r}]})}}for(var Dc=0;Dc<fr.length;Dc++){var Oc=fr[Dc],sb=Oc.toLowerCase(),ob=Oc[0].toUpperCase()+Oc.slice(1);Ln(sb,"on"+ob)}Ln(zu,"onAnimationEnd"),Ln(Tu,"onAnimationIteration"),Ln(Eu,"onAnimationStart"),Ln("dblclick","onDoubleClick"),Ln("focusin","onFocus"),Ln("focusout","onBlur"),Ln(Ng,"onTransitionRun"),Ln(_g,"onTransitionStart"),Ln(Sg,"onTransitionCancel"),Ln(Mu,"onTransitionEnd"),_l("onMouseEnter",["mouseout","mouseover"]),_l("onMouseLeave",["mouseout","mouseover"]),_l("onPointerEnter",["pointerout","pointerover"]),_l("onPointerLeave",["pointerout","pointerover"]),Pa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pa("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Xi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Xi));function Pm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],r=l.event;l=l.listeners;e:{var c=void 0;if(n)for(var u=l.length-1;0<=u;u--){var b=l[u],k=b.instance,Z=b.currentTarget;if(b=b.listener,k!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(I){Ss(I)}r.currentTarget=null,c=k}else for(u=0;u<l.length;u++){if(b=l[u],k=b.instance,Z=b.currentTarget,b=b.listener,k!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(I){Ss(I)}r.currentTarget=null,c=k}}}}function Qe(e,n){var a=n[$n];a===void 0&&(a=n[$n]=new Set);var l=e+"__bubble";a.has(l)||(Im(n,e,2,!1),a.add(l))}function Ac(e,n,a){var l=0;n&&(l|=4),Im(a,e,l,n)}var po="_reactListening"+Math.random().toString(36).slice(2);function Uc(e){if(!e[po]){e[po]=!0,Zd.forEach(function(a){a!=="selectionchange"&&(rb.has(a)||Ac(a,!1,e),Ac(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[po]||(n[po]=!0,Ac("selectionchange",!1,n))}}function Im(e,n,a,l){switch(Tf(n)){case 2:var r=Rb;break;case 8:r=Hb;break;default:r=Fc}a=r.bind(null,n,a,e),r=void 0,!tr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(n,a,{capture:!0,passive:r}):e.addEventListener(n,a,!0):r!==void 0?e.addEventListener(n,a,{passive:r}):e.addEventListener(n,a,!1)}function Rc(e,n,a,l,r){var c=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var b=l.stateNode.containerInfo;if(b===r)break;if(u===4)for(u=l.return;u!==null;){var k=u.tag;if((k===3||k===4)&&u.stateNode.containerInfo===r)return;u=u.return}for(;b!==null;){if(u=jl(b),u===null)return;if(k=u.tag,k===5||k===6||k===26||k===27){l=c=u;continue e}b=b.parentNode}}l=l.return}lu(function(){var Z=c,I=Io(a),le=[];e:{var V=Du.get(e);if(V!==void 0){var F=ws,ve=e;switch(e){case"keypress":if(vs(a)===0)break e;case"keydown":case"keyup":F=tg;break;case"focusin":ve="focus",F=ir;break;case"focusout":ve="blur",F=ir;break;case"beforeblur":case"afterblur":F=ir;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=ou;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=lg;break;case zu:case Tu:case Eu:F=Zx;break;case Mu:F=sg;break;case"scroll":case"scrollend":F=Gx;break;case"wheel":F=rg;break;case"copy":case"cut":case"paste":F=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=cu;break;case"toggle":case"beforetoggle":F=dg}var Me=(n&4)!==0,pt=!Me&&(e==="scroll"||e==="scrollend"),q=Me?V!==null?V+"Capture":null:V;Me=[];for(var D=Z,X;D!==null;){var ae=D;if(X=ae.stateNode,ae=ae.tag,ae!==5&&ae!==26&&ae!==27||X===null||q===null||(ae=mi(D,q),ae!=null&&Me.push(Zi(D,ae,X))),pt)break;D=D.return}0<Me.length&&(V=new F(V,ve,null,a,I),le.push({event:V,listeners:Me}))}}if((n&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",V&&a!==Po&&(ve=a.relatedTarget||a.fromElement)&&(jl(ve)||ve[xt]))break e;if((F||V)&&(V=I.window===I?I:(V=I.ownerDocument)?V.defaultView||V.parentWindow:window,F?(ve=a.relatedTarget||a.toElement,F=Z,ve=ve?jl(ve):null,ve!==null&&(pt=h(ve),Me=ve.tag,ve!==pt||Me!==5&&Me!==27&&Me!==6)&&(ve=null)):(F=null,ve=Z),F!==ve)){if(Me=ou,ae="onMouseLeave",q="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Me=cu,ae="onPointerLeave",q="onPointerEnter",D="pointer"),pt=F==null?V:pi(F),X=ve==null?V:pi(ve),V=new Me(ae,D+"leave",F,a,I),V.target=pt,V.relatedTarget=X,ae=null,jl(I)===Z&&(Me=new Me(q,D+"enter",ve,a,I),Me.target=X,Me.relatedTarget=pt,ae=Me),pt=ae,F&&ve)t:{for(Me=cb,q=F,D=ve,X=0,ae=q;ae;ae=Me(ae))X++;ae=0;for(var ze=D;ze;ze=Me(ze))ae++;for(;0<X-ae;)q=Me(q),X--;for(;0<ae-X;)D=Me(D),ae--;for(;X--;){if(q===D||D!==null&&q===D.alternate){Me=q;break t}q=Me(q),D=Me(D)}Me=null}else Me=null;F!==null&&ef(le,V,F,Me,!1),ve!==null&&pt!==null&&ef(le,pt,ve,Me,!0)}}e:{if(V=Z?pi(Z):window,F=V.nodeName&&V.nodeName.toLowerCase(),F==="select"||F==="input"&&V.type==="file")var tt=gu;else if(hu(V))if(bu)tt=vg;else{tt=bg;var _e=gg}else F=V.nodeName,!F||F.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?Z&&Wo(Z.elementType)&&(tt=gu):tt=yg;if(tt&&(tt=tt(e,Z))){xu(le,tt,a,I);break e}_e&&_e(e,V,Z),e==="focusout"&&Z&&V.type==="number"&&Z.memoizedProps.value!=null&&Fo(V,"number",V.value)}switch(_e=Z?pi(Z):window,e){case"focusin":(hu(_e)||_e.contentEditable==="true")&&(El=_e,ur=Z,ji=null);break;case"focusout":ji=ur=El=null;break;case"mousedown":pr=!0;break;case"contextmenu":case"mouseup":case"dragend":pr=!1,ku(le,a,I);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":ku(le,a,I)}var Be;if(or)e:{switch(e){case"compositionstart":var We="onCompositionStart";break e;case"compositionend":We="onCompositionEnd";break e;case"compositionupdate":We="onCompositionUpdate";break e}We=void 0}else Tl?mu(e,a)&&(We="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(We="onCompositionStart");We&&(du&&a.locale!=="ko"&&(Tl||We!=="onCompositionStart"?We==="onCompositionEnd"&&Tl&&(Be=iu()):(ya=I,nr="value"in ya?ya.value:ya.textContent,Tl=!0)),_e=mo(Z,We),0<_e.length&&(We=new ru(We,e,null,a,I),le.push({event:We,listeners:_e}),Be?We.data=Be:(Be=fu(a),Be!==null&&(We.data=Be)))),(Be=pg?mg(e,a):fg(e,a))&&(We=mo(Z,"onBeforeInput"),0<We.length&&(_e=new ru("onBeforeInput","beforeinput",null,a,I),le.push({event:_e,listeners:We}),_e.data=Be)),ib(le,e,Z,a,I)}Pm(le,n)})}function Zi(e,n,a){return{instance:e,listener:n,currentTarget:a}}function mo(e,n){for(var a=n+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=mi(e,a),r!=null&&l.unshift(Zi(e,r,c)),r=mi(e,n),r!=null&&l.push(Zi(e,r,c))),e.tag===3)return l;e=e.return}return[]}function cb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ef(e,n,a,l,r){for(var c=n._reactName,u=[];a!==null&&a!==l;){var b=a,k=b.alternate,Z=b.stateNode;if(b=b.tag,k!==null&&k===l)break;b!==5&&b!==26&&b!==27||Z===null||(k=Z,r?(Z=mi(a,c),Z!=null&&u.unshift(Zi(a,Z,k))):r||(Z=mi(a,c),Z!=null&&u.push(Zi(a,Z,k)))),a=a.return}u.length!==0&&e.push({event:n,listeners:u})}var db=/\r\n?/g,ub=/\u0000|\uFFFD/g;function tf(e){return(typeof e=="string"?e:""+e).replace(db,`
`).replace(ub,"")}function nf(e,n){return n=tf(n),tf(e)===n}function ut(e,n,a,l,r,c){switch(a){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||kl(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&kl(e,""+l);break;case"className":xs(e,"class",l);break;case"tabIndex":xs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":xs(e,a,l);break;case"style":nu(e,l,c);break;case"data":if(n!=="object"){xs(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=bs(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&ut(e,n,"name",r.name,r,null),ut(e,n,"formEncType",r.formEncType,r,null),ut(e,n,"formMethod",r.formMethod,r,null),ut(e,n,"formTarget",r.formTarget,r,null)):(ut(e,n,"encType",r.encType,r,null),ut(e,n,"method",r.method,r,null),ut(e,n,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=bs(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=In);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=bs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Qe("beforetoggle",e),Qe("toggle",e),hs(e,"popover",l);break;case"xlinkActuate":Pn(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Pn(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Pn(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Pn(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Pn(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Pn(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Pn(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":hs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qx.get(a)||a,hs(e,a,l))}}function Hc(e,n,a,l,r,c){switch(a){case"style":nu(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(a=l.__html,a!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=a}}break;case"children":typeof l=="string"?kl(e,l):(typeof l=="number"||typeof l=="bigint")&&kl(e,""+l);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=In);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kd.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(r=a.endsWith("Capture"),n=a.slice(2,r?a.length-7:void 0),c=e[Ce]||null,c=c!=null?c[a]:null,typeof c=="function"&&e.removeEventListener(n,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,l,r);break e}a in e?e[a]=l:l===!0?e.setAttribute(a,""):hs(e,a,l)}}}function Jt(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",e),Qe("load",e);var l=!1,r=!1,c;for(c in a)if(a.hasOwnProperty(c)){var u=a[c];if(u!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,c,u,a,null)}}r&&ut(e,n,"srcSet",a.srcSet,a,null),l&&ut(e,n,"src",a.src,a,null);return;case"input":Qe("invalid",e);var b=c=u=r=null,k=null,Z=null;for(l in a)if(a.hasOwnProperty(l)){var I=a[l];if(I!=null)switch(l){case"name":r=I;break;case"type":u=I;break;case"checked":k=I;break;case"defaultChecked":Z=I;break;case"value":c=I;break;case"defaultValue":b=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(d(137,n));break;default:ut(e,n,l,I,a,null)}}Pd(e,c,b,k,Z,u,r,!1);return;case"select":Qe("invalid",e),l=u=c=null;for(r in a)if(a.hasOwnProperty(r)&&(b=a[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":u=b;break;case"multiple":l=b;default:ut(e,n,r,b,a,null)}n=c,a=u,e.multiple=!!l,n!=null?Sl(e,!!l,n,!1):a!=null&&Sl(e,!!l,a,!0);return;case"textarea":Qe("invalid",e),c=r=l=null;for(u in a)if(a.hasOwnProperty(u)&&(b=a[u],b!=null))switch(u){case"value":l=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(91));break;default:ut(e,n,u,b,a,null)}eu(e,l,r,c);return;case"option":for(k in a)if(a.hasOwnProperty(k)&&(l=a[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ut(e,n,k,l,a,null)}return;case"dialog":Qe("beforetoggle",e),Qe("toggle",e),Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":Qe("load",e);break;case"video":case"audio":for(l=0;l<Xi.length;l++)Qe(Xi[l],e);break;case"image":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"embed":case"source":case"link":Qe("error",e),Qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(l=a[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:ut(e,n,Z,l,a,null)}return;default:if(Wo(n)){for(I in a)a.hasOwnProperty(I)&&(l=a[I],l!==void 0&&Hc(e,n,I,l,a,void 0));return}}for(b in a)a.hasOwnProperty(b)&&(l=a[b],l!=null&&ut(e,n,b,l,a,null))}function pb(e,n,a,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,u=null,b=null,k=null,Z=null,I=null;for(F in a){var le=a[F];if(a.hasOwnProperty(F)&&le!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":k=le;default:l.hasOwnProperty(F)||ut(e,n,F,null,l,le)}}for(var V in l){var F=l[V];if(le=a[V],l.hasOwnProperty(V)&&(F!=null||le!=null))switch(V){case"type":c=F;break;case"name":r=F;break;case"checked":Z=F;break;case"defaultChecked":I=F;break;case"value":u=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,n));break;default:F!==le&&ut(e,n,V,F,l,le)}}Jo(e,u,b,k,Z,I,c,r);return;case"select":F=u=b=V=null;for(c in a)if(k=a[c],a.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":F=k;default:l.hasOwnProperty(c)||ut(e,n,c,null,l,k)}for(r in l)if(c=l[r],k=a[r],l.hasOwnProperty(r)&&(c!=null||k!=null))switch(r){case"value":V=c;break;case"defaultValue":b=c;break;case"multiple":u=c;default:c!==k&&ut(e,n,r,c,l,k)}n=b,a=u,l=F,V!=null?Sl(e,!!a,V,!1):!!l!=!!a&&(n!=null?Sl(e,!!a,n,!0):Sl(e,!!a,a?[]:"",!1));return;case"textarea":F=V=null;for(b in a)if(r=a[b],a.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:ut(e,n,b,null,l,r)}for(u in l)if(r=l[u],c=a[u],l.hasOwnProperty(u)&&(r!=null||c!=null))switch(u){case"value":V=r;break;case"defaultValue":F=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&ut(e,n,u,r,l,c)}Id(e,V,F);return;case"option":for(var ve in a)if(V=a[ve],a.hasOwnProperty(ve)&&V!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:ut(e,n,ve,null,l,V)}for(k in l)if(V=l[k],F=a[k],l.hasOwnProperty(k)&&V!==F&&(V!=null||F!=null))switch(k){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:ut(e,n,k,V,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in a)V=a[Me],a.hasOwnProperty(Me)&&V!=null&&!l.hasOwnProperty(Me)&&ut(e,n,Me,null,l,V);for(Z in l)if(V=l[Z],F=a[Z],l.hasOwnProperty(Z)&&V!==F&&(V!=null||F!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,n));break;default:ut(e,n,Z,V,l,F)}return;default:if(Wo(n)){for(var pt in a)V=a[pt],a.hasOwnProperty(pt)&&V!==void 0&&!l.hasOwnProperty(pt)&&Hc(e,n,pt,void 0,l,V);for(I in l)V=l[I],F=a[I],!l.hasOwnProperty(I)||V===F||V===void 0&&F===void 0||Hc(e,n,I,V,l,F);return}}for(var q in a)V=a[q],a.hasOwnProperty(q)&&V!=null&&!l.hasOwnProperty(q)&&ut(e,n,q,null,l,V);for(le in l)V=l[le],F=a[le],!l.hasOwnProperty(le)||V===F||V==null&&F==null||ut(e,n,le,V,l,F)}function af(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var r=a[l],c=r.transferSize,u=r.initiatorType,b=r.duration;if(c&&b&&af(u)){for(u=0,b=r.responseEnd,l+=1;l<a.length;l++){var k=a[l],Z=k.startTime;if(Z>b)break;var I=k.transferSize,le=k.initiatorType;I&&af(le)&&(k=k.responseEnd,u+=I*(k<b?1:(b-Z)/(k-Z)))}if(--l,n+=8*(c+u)/(r.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Lc=null,qc=null;function fo(e){return e.nodeType===9?e:e.ownerDocument}function lf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Bc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Gc=null;function fb(){var e=window.event;return e&&e.type==="popstate"?e===Gc?!1:(Gc=e,!0):(Gc=null,!1)}var of=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,rf=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof rf<"u"?function(e){return rf.resolve(null).then(e).catch(gb)}:of;function gb(e){setTimeout(function(){throw e})}function Ra(e){return e==="head"}function cf(e,n){var a=n,l=0;do{var r=a.nextSibling;if(e.removeChild(a),r&&r.nodeType===8)if(a=r.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(r),ai(n);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")Ki(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ki(a);for(var c=a.firstChild;c;){var u=c.nextSibling,b=c.nodeName;c[ui]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=u}}else a==="body"&&Ki(e.ownerDocument.body);a=r}while(a);ai(n)}function df(e,n){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Yc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Yc(a),Ko(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function bb(e,n,a,l){for(;e.nodeType===1;){var r=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=An(e.nextSibling),e===null)break}return null}function yb(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=An(e.nextSibling),e===null))return null;return e}function uf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=An(e.nextSibling),e===null))return null;return e}function $c(e){return e.data==="$?"||e.data==="$~"}function Qc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vb(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var l=function(){n(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function An(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Xc=null;function pf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return An(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function mf(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function ff(e,n,a){switch(n=fo(a),e){case"html":if(e=n.documentElement,!e)throw Error(d(452));return e;case"head":if(e=n.head,!e)throw Error(d(453));return e;case"body":if(e=n.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Ki(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ko(e)}var Un=new Map,hf=new Set;function ho(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ha=J.d;J.d={f:jb,r:wb,D:Nb,C:_b,L:Sb,m:kb,X:zb,S:Cb,M:Tb};function jb(){var e=ha.f(),n=io();return e||n}function wb(e){var n=wl(e);n!==null&&n.tag===5&&n.type==="form"?Mp(n):ha.r(e)}var ei=typeof document>"u"?null:document;function xf(e,n,a){var l=ei;if(l&&typeof n=="string"&&n){var r=Cn(n);r='link[rel="'+e+'"][href="'+r+'"]',typeof a=="string"&&(r+='[crossorigin="'+a+'"]'),hf.has(r)||(hf.add(r),e={rel:e,crossOrigin:a,href:n},l.querySelector(r)===null&&(n=l.createElement("link"),Jt(n,"link",e),$t(n),l.head.appendChild(n)))}}function Nb(e){ha.D(e),xf("dns-prefetch",e,null)}function _b(e,n){ha.C(e,n),xf("preconnect",e,n)}function Sb(e,n,a){ha.L(e,n,a);var l=ei;if(l&&e&&n){var r='link[rel="preload"][as="'+Cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(r+='[imagesrcset="'+Cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(r+='[imagesizes="'+Cn(a.imageSizes)+'"]')):r+='[href="'+Cn(e)+'"]';var c=r;switch(n){case"style":c=ti(e);break;case"script":c=ni(e)}Un.has(c)||(e=w({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),Un.set(c,e),l.querySelector(r)!==null||n==="style"&&l.querySelector(Vi(c))||n==="script"&&l.querySelector(Ji(c))||(n=l.createElement("link"),Jt(n,"link",e),$t(n),l.head.appendChild(n)))}}function kb(e,n){ha.m(e,n);var a=ei;if(a&&e){var l=n&&typeof n.as=="string"?n.as:"script",r='link[rel="modulepreload"][as="'+Cn(l)+'"][href="'+Cn(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ni(e)}if(!Un.has(c)&&(e=w({rel:"modulepreload",href:e},n),Un.set(c,e),a.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Ji(c)))return}l=a.createElement("link"),Jt(l,"link",e),$t(l),a.head.appendChild(l)}}}function Cb(e,n,a){ha.S(e,n,a);var l=ei;if(l&&e){var r=Nl(l).hoistableStyles,c=ti(e);n=n||"default";var u=r.get(c);if(!u){var b={loading:0,preload:null};if(u=l.querySelector(Vi(c)))b.loading=5;else{e=w({rel:"stylesheet",href:e,"data-precedence":n},a),(a=Un.get(c))&&Zc(e,a);var k=u=l.createElement("link");$t(k),Jt(k,"link",e),k._p=new Promise(function(Z,I){k.onload=Z,k.onerror=I}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,xo(u,n,l)}u={type:"stylesheet",instance:u,count:1,state:b},r.set(c,u)}}}function zb(e,n){ha.X(e,n);var a=ei;if(a&&e){var l=Nl(a).hoistableScripts,r=ni(e),c=l.get(r);c||(c=a.querySelector(Ji(r)),c||(e=w({src:e,async:!0},n),(n=Un.get(r))&&Kc(e,n),c=a.createElement("script"),$t(c),Jt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Tb(e,n){ha.M(e,n);var a=ei;if(a&&e){var l=Nl(a).hoistableScripts,r=ni(e),c=l.get(r);c||(c=a.querySelector(Ji(r)),c||(e=w({src:e,async:!0,type:"module"},n),(n=Un.get(r))&&Kc(e,n),c=a.createElement("script"),$t(c),Jt(c,"link",e),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function gf(e,n,a,l){var r=(r=ke.current)?ho(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ti(a.href),a=Nl(r).hoistableStyles,l=a.get(n),l||(l={type:"style",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ti(a.href);var c=Nl(r).hoistableStyles,u=c.get(e);if(u||(r=r.ownerDocument||r,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=r.querySelector(Vi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Un.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},Un.set(e,a),c||Eb(r,e,a,u.state))),n&&l===null)throw Error(d(528,""));return u}if(n&&l!==null)throw Error(d(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ni(a),a=Nl(r).hoistableScripts,l=a.get(n),l||(l={type:"script",instance:null,count:0,state:null},a.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ti(e){return'href="'+Cn(e)+'"'}function Vi(e){return'link[rel="stylesheet"]['+e+"]"}function bf(e){return w({},e,{"data-precedence":e.precedence,precedence:null})}function Eb(e,n,a,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),Jt(n,"link",a),$t(n),e.head.appendChild(n))}function ni(e){return'[src="'+Cn(e)+'"]'}function Ji(e){return"script[async]"+e}function yf(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+Cn(a.href)+'"]');if(l)return n.instance=l,$t(l),l;var r=w({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),$t(l),Jt(l,"style",r),xo(l,a.precedence,e),n.instance=l;case"stylesheet":r=ti(a.href);var c=e.querySelector(Vi(r));if(c)return n.state.loading|=4,n.instance=c,$t(c),c;l=bf(a),(r=Un.get(r))&&Zc(l,r),c=(e.ownerDocument||e).createElement("link"),$t(c);var u=c;return u._p=new Promise(function(b,k){u.onload=b,u.onerror=k}),Jt(c,"link",l),n.state.loading|=4,xo(c,a.precedence,e),n.instance=c;case"script":return c=ni(a.src),(r=e.querySelector(Ji(c)))?(n.instance=r,$t(r),r):(l=a,(r=Un.get(c))&&(l=w({},a),Kc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),$t(r),Jt(r,"link",l),e.head.appendChild(r),n.instance=r);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,xo(l,a.precedence,e));return n.instance}function xo(e,n,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,u=0;u<l.length;u++){var b=l[u];if(b.dataset.precedence===n)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var go=null;function vf(e,n,a){if(go===null){var l=new Map,r=go=new Map;r.set(a,l)}else r=go,l=r.get(a),l||(l=new Map,r.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),r=0;r<a.length;r++){var c=a[r];if(!(c[ui]||c[de]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(n)||"";u=e+u;var b=l.get(u);b?b.push(c):l.set(u,[c])}}return l}function jf(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Mb(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function wf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Db(e,n,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var r=ti(l.href),c=n.querySelector(Vi(r));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=bo.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=c,$t(c);return}c=n.ownerDocument||n,l=bf(l),(r=Un.get(r))&&Zc(l,r),c=c.createElement("link"),$t(c);var u=c;u._p=new Promise(function(b,k){u.onload=b,u.onerror=k}),Jt(c,"link",l),a.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=bo.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vc=0;function Ob(e,n){return e.stylesheets&&e.count===0&&vo(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+n);0<e.imgBytes&&Vc===0&&(Vc=62500*mb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&vo(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Vc?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function bo(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)vo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var yo=null;function vo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,yo=new Map,n.forEach(Ab,e),yo=null,bo.call(e))}function Ab(e,n){if(!(n.state.loading&4)){var a=yo.get(e);if(a)var l=a.get(null);else{a=new Map,yo.set(e,a);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var u=r[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(a.set(u.dataset.precedence,u),l=u)}l&&a.set(null,l)}r=n.instance,u=r.getAttribute("data-precedence"),c=a.get(u)||l,c===l&&a.set(null,r),a.set(u,r),this.count++,l=bo.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),n.state.loading|=4}}var Fi={$$typeof:O,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function Ub(e,n,a,l,r,c,u,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Je(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Je(0),this.hiddenUpdates=Je(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function Nf(e,n,a,l,r,c,u,b,k,Z,I,le){return e=new Ub(e,n,a,u,k,Z,I,le,b),n=1,c===!0&&(n|=24),c=hn(3,null,null,n),e.current=c,c.stateNode=e,n=Cr(),n.refCount++,e.pooledCache=n,n.refCount++,c.memoizedState={element:l,isDehydrated:a,cache:n},Mr(c),e}function _f(e){return e?(e=Ol,e):Ol}function Sf(e,n,a,l,r,c){r=_f(r),l.context===null?l.context=r:l.pendingContext=r,l=Sa(n),l.payload={element:a},c=c===void 0?null:c,c!==null&&(l.callback=c),a=ka(e,l,n),a!==null&&(cn(a,e,n),zi(a,e,n))}function kf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jc(e,n){kf(e,n),(e=e.alternate)&&kf(e,n)}function Cf(e){if(e.tag===13||e.tag===31){var n=nl(e,67108864);n!==null&&cn(n,e,67108864),Jc(e,67108864)}}function zf(e){if(e.tag===13||e.tag===31){var n=vn();n=ci(n);var a=nl(e,n);a!==null&&cn(a,e,n),Jc(e,n)}}var jo=!0;function Rb(e,n,a,l){var r=A.T;A.T=null;var c=J.p;try{J.p=2,Fc(e,n,a,l)}finally{J.p=c,A.T=r}}function Hb(e,n,a,l){var r=A.T;A.T=null;var c=J.p;try{J.p=8,Fc(e,n,a,l)}finally{J.p=c,A.T=r}}function Fc(e,n,a,l){if(jo){var r=Wc(l);if(r===null)Rc(e,n,l,wo,a),Ef(e,l);else if(qb(r,e,n,a,l))l.stopPropagation();else if(Ef(e,l),n&4&&-1<Lb.indexOf(e)){for(;r!==null;){var c=wl(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=nn(c.pendingLanes);if(u!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;u;){var k=1<<31-mt(u);b.entanglements[1]|=k,u&=~k}Vn(c),(at&6)===0&&(ao=be()+500,Qi(0))}}break;case 31:case 13:b=nl(c,2),b!==null&&cn(b,c,2),io(),Jc(c,2)}if(c=Wc(l),c===null&&Rc(e,n,l,wo,a),c===r)break;r=c}r!==null&&l.stopPropagation()}else Rc(e,n,l,null,a)}}function Wc(e){return e=Io(e),Pc(e)}var wo=null;function Pc(e){if(wo=null,e=jl(e),e!==null){var n=h(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=m(n),e!==null)return e;e=null}else if(a===31){if(e=_(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return wo=e,null}function Tf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case ye:return 2;case rt:return 8;case G:case Ne:return 32;case je:return 268435456;default:return 32}default:return 32}}var Ic=!1,Ha=null,La=null,qa=null,Wi=new Map,Pi=new Map,Ba=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ef(e,n){switch(e){case"focusin":case"focusout":Ha=null;break;case"dragenter":case"dragleave":La=null;break;case"mouseover":case"mouseout":qa=null;break;case"pointerover":case"pointerout":Wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Pi.delete(n.pointerId)}}function Ii(e,n,a,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:n,domEventName:a,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},n!==null&&(n=wl(n),n!==null&&Cf(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,r!==null&&n.indexOf(r)===-1&&n.push(r),e)}function qb(e,n,a,l,r){switch(n){case"focusin":return Ha=Ii(Ha,e,n,a,l,r),!0;case"dragenter":return La=Ii(La,e,n,a,l,r),!0;case"mouseover":return qa=Ii(qa,e,n,a,l,r),!0;case"pointerover":var c=r.pointerId;return Wi.set(c,Ii(Wi.get(c)||null,e,n,a,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Pi.set(c,Ii(Pi.get(c)||null,e,n,a,l,r)),!0}return!1}function Mf(e){var n=jl(e.target);if(n!==null){var a=h(n);if(a!==null){if(n=a.tag,n===13){if(n=m(a),n!==null){e.blockedOn=n,y(e.priority,function(){zf(a)});return}}else if(n===31){if(n=_(a),n!==null){e.blockedOn=n,y(e.priority,function(){zf(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Wc(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Po=l,a.target.dispatchEvent(l),Po=null}else return n=wl(a),n!==null&&Cf(n),e.blockedOn=a,!1;n.shift()}return!0}function Df(e,n,a){No(e)&&a.delete(n)}function Bb(){Ic=!1,Ha!==null&&No(Ha)&&(Ha=null),La!==null&&No(La)&&(La=null),qa!==null&&No(qa)&&(qa=null),Wi.forEach(Df),Pi.forEach(Df)}function _o(e,n){e.blockedOn===n&&(e.blockedOn=null,Ic||(Ic=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bb)))}var So=null;function Of(e){So!==e&&(So=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){So===e&&(So=null);for(var n=0;n<e.length;n+=3){var a=e[n],l=e[n+1],r=e[n+2];if(typeof l!="function"){if(Pc(l||a)===null)continue;break}var c=wl(a);c!==null&&(e.splice(n,3),n-=3,Wr(c,{pending:!0,data:r,method:a.method,action:l},l,r))}}))}function ai(e){function n(k){return _o(k,e)}Ha!==null&&_o(Ha,e),La!==null&&_o(La,e),qa!==null&&_o(qa,e),Wi.forEach(n),Pi.forEach(n);for(var a=0;a<Ba.length;a++){var l=Ba[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Mf(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var r=a[l],c=a[l+1],u=r[Ce]||null;if(typeof c=="function")u||Of(a);else if(u){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,u=c[Ce]||null)b=u.formAction;else if(Pc(r)!==null)continue}else b=u.action;typeof b=="function"?a[l+1]=b:(a.splice(l,3),l-=3),Of(a)}}}function Af(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return r=u})},focusReset:"manual",scroll:"manual"})}function n(){r!==null&&(r(),r=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),r!==null&&(r(),r=null)}}}function ed(e){this._internalRoot=e}ko.prototype.render=ed.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(d(409));var a=n.current,l=vn();Sf(a,l,e,n,null,null)},ko.prototype.unmount=ed.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Sf(e.current,2,null,e,null,null),io(),n[xt]=null}};function ko(e){this._internalRoot=e}ko.prototype.unstable_scheduleHydration=function(e){if(e){var n=fs();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Mf(e)}};var Uf=i.version;if(Uf!=="19.2.6")throw Error(d(527,Uf,"19.2.6"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Co=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Co.isDisabled&&Co.supportsFiber)try{Ve=Co.inject(Gb),Ye=Co}catch{}}return ts.createRoot=function(e,n){if(!p(e))throw Error(d(299));var a=!1,l="",r=Gp,c=Yp,u=$p;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(r=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError)),n=Nf(e,1,!1,null,null,a,l,null,r,c,u,Af),e[xt]=n.current,Uc(e),new ed(n)},ts.hydrateRoot=function(e,n,a){if(!p(e))throw Error(d(299));var l=!1,r="",c=Gp,u=Yp,b=$p,k=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(r=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(u=a.onCaughtError),a.onRecoverableError!==void 0&&(b=a.onRecoverableError),a.formState!==void 0&&(k=a.formState)),n=Nf(e,1,!0,n,a??null,l,r,k,c,u,b,Af),n.context=_f(null),a=n.current,l=vn(),l=ci(l),r=Sa(l),r.callback=null,ka(a,r,l),a=l,n.current.lanes=a,et(n,a),Vn(n),e[xt]=n.current,Uc(e),new ko(n)},ts.version="19.2.6",ts}var Xf;function ey(){if(Xf)return ad.exports;Xf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ad.exports=Ib(),ad.exports}var ty=ey();Fh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function os(){return os=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},os.apply(this,arguments)}var Za;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Za||(Za={}));const Zf="popstate";function ny(s){s===void 0&&(s={});function i(p,h){let{pathname:m="/",search:_="",hash:j=""}=bl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),_d("",{pathname:m,search:_,hash:j},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(p,h){let m=p.document.querySelector("base"),_="";if(m&&m.getAttribute("href")){let j=p.location.href,g=j.indexOf("#");_=g===-1?j:j.slice(0,g)}return _+"#"+(typeof h=="string"?h:qo(h))}function d(p,h){$o(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return ly(i,o,d,s)}function Mt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function $o(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ay(){return Math.random().toString(36).substr(2,8)}function Kf(s,i){return{usr:s.state,key:s.key,idx:i}}function _d(s,i,o,d){return o===void 0&&(o=null),os({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?bl(i):i,{state:o,key:i&&i.key||d||ay()})}function qo(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function bl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ly(s,i,o,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,_=Za.Pop,j=null,g=v();g==null&&(g=0,m.replaceState(os({},m.state,{idx:g}),""));function v(){return(m.state||{idx:null}).idx}function w(){_=Za.Pop;let C=v(),B=C==null?null:C-g;g=C,j&&j({action:_,location:K.location,delta:B})}function z(C,B){_=Za.Push;let U=_d(K.location,C,B);o&&o(U,C),g=v()+1;let O=Kf(U,g),ee=K.createHref(U);try{m.pushState(O,"",ee)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;p.location.assign(ee)}h&&j&&j({action:_,location:K.location,delta:1})}function Y(C,B){_=Za.Replace;let U=_d(K.location,C,B);o&&o(U,C),g=v();let O=Kf(U,g),ee=K.createHref(U);m.replaceState(O,"",ee),h&&j&&j({action:_,location:K.location,delta:0})}function P(C){let B=p.location.origin!=="null"?p.location.origin:p.location.href,U=typeof C=="string"?C:qo(C);return U=U.replace(/ $/,"%20"),Mt(B,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,B)}let K={get action(){return _},get location(){return s(p,m)},listen(C){if(j)throw new Error("A history only accepts one active listener");return p.addEventListener(Zf,w),j=C,()=>{p.removeEventListener(Zf,w),j=null}},createHref(C){return i(p,C)},createURL:P,encodeLocation(C){let B=P(C);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:z,replace:Y,go(C){return m.go(C)}};return K}var Vf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Vf||(Vf={}));function iy(s,i,o){return o===void 0&&(o="/"),sy(s,i,o)}function sy(s,i,o,d){let p=typeof i=="string"?bl(i):i,h=Hd(p.pathname||"/",o);if(h==null)return null;let m=Wh(s);oy(m);let _=null;for(let j=0;_==null&&j<m.length;++j){let g=yy(h);_=xy(m[j],g)}return _}function Wh(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let p=(h,m,_)=>{let j={relativePath:_===void 0?h.path||"":_,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};j.relativePath.startsWith("/")&&(Mt(j.relativePath.startsWith(d),'Absolute route path "'+j.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),j.relativePath=j.relativePath.slice(d.length));let g=Ka([d,j.relativePath]),v=o.concat(j);h.children&&h.children.length>0&&(Mt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Wh(h.children,i,v,g)),!(h.path==null&&!h.index)&&i.push({path:g,score:fy(g,h.index),routesMeta:v})};return s.forEach((h,m)=>{var _;if(h.path===""||!((_=h.path)!=null&&_.includes("?")))p(h,m);else for(let j of Ph(h.path))p(h,m,j)}),i}function Ph(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,p=o.endsWith("?"),h=o.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=Ph(d.join("/")),_=[];return _.push(...m.map(j=>j===""?h:[h,j].join("/"))),p&&_.push(...m),_.map(j=>s.startsWith("/")&&j===""?"/":j)}function oy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:hy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ry=/^:[\w-]+$/,cy=3,dy=2,uy=1,py=10,my=-2,Jf=s=>s==="*";function fy(s,i){let o=s.split("/"),d=o.length;return o.some(Jf)&&(d+=my),i&&(d+=dy),o.filter(p=>!Jf(p)).reduce((p,h)=>p+(ry.test(h)?cy:h===""?uy:py),d)}function hy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,p)=>d===i[p])?s[s.length-1]-i[i.length-1]:0}function xy(s,i,o){let{routesMeta:d}=s,p={},h="/",m=[];for(let _=0;_<d.length;++_){let j=d[_],g=_===d.length-1,v=h==="/"?i:i.slice(h.length)||"/",w=gy({path:j.relativePath,caseSensitive:j.caseSensitive,end:g},v),z=j.route;if(!w)return null;Object.assign(p,w.params),m.push({params:p,pathname:Ka([h,w.pathname]),pathnameBase:_y(Ka([h,w.pathnameBase])),route:z}),w.pathnameBase!=="/"&&(h=Ka([h,w.pathnameBase]))}return m}function gy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=by(s.path,s.caseSensitive,s.end),p=i.match(o);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),_=p.slice(1);return{params:d.reduce((g,v,w)=>{let{paramName:z,isOptional:Y}=v;if(z==="*"){let K=_[w]||"";m=h.slice(0,h.length-K.length).replace(/(.)\/+$/,"$1")}const P=_[w];return Y&&!P?g[z]=void 0:g[z]=(P||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:m,pattern:s}}function by(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),$o(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,_,j)=>(d.push({paramName:_,isOptional:j!=null}),j?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,i?void 0:"i"),d]}function yy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return $o(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Hd(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy=s=>vy.test(s);function wy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:p=""}=typeof s=="string"?bl(s):s,h;if(o)if(jy(o))h=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),$o(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?h=Ff(o.substring(1),"/"):h=Ff(o,i)}else h=i;return{pathname:h,search:Sy(d),hash:ky(p)}}function Ff(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function od(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ny(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ld(s,i){let o=Ny(s);return i?o.map((d,p)=>p===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function qd(s,i,o,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=bl(s):(p=os({},s),Mt(!p.pathname||!p.pathname.includes("?"),od("?","pathname","search",p)),Mt(!p.pathname||!p.pathname.includes("#"),od("#","pathname","hash",p)),Mt(!p.search||!p.search.includes("#"),od("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,_;if(m==null)_=o;else{let w=i.length-1;if(!d&&m.startsWith("..")){let z=m.split("/");for(;z[0]==="..";)z.shift(),w-=1;p.pathname=z.join("/")}_=w>=0?i[w]:"/"}let j=wy(p,_),g=m&&m!=="/"&&m.endsWith("/"),v=(h||m===".")&&o.endsWith("/");return!j.pathname.endsWith("/")&&(g||v)&&(j.pathname+="/"),j}const Ka=s=>s.join("/").replace(/\/\/+/g,"/"),_y=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ky=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Ih=["post","put","patch","delete"];new Set(Ih);const zy=["get",...Ih];new Set(zy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function rs(){return rs=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},rs.apply(this,arguments)}const Bd=f.createContext(null),Ty=f.createContext(null),Ja=f.createContext(null),Qo=f.createContext(null),Fa=f.createContext({outlet:null,matches:[],isDataRoute:!1}),ex=f.createContext(null);function Ey(s,i){let{relative:o}=i===void 0?{}:i;oi()||Mt(!1);let{basename:d,navigator:p}=f.useContext(Ja),{hash:h,pathname:m,search:_}=nx(s,{relative:o}),j=m;return d!=="/"&&(j=m==="/"?d:Ka([d,m])),p.createHref({pathname:j,search:_,hash:h})}function oi(){return f.useContext(Qo)!=null}function Wn(){return oi()||Mt(!1),f.useContext(Qo).location}function tx(s){f.useContext(Ja).static||f.useLayoutEffect(s)}function Gd(){let{isDataRoute:s}=f.useContext(Fa);return s?$y():My()}function My(){oi()||Mt(!1);let s=f.useContext(Bd),{basename:i,future:o,navigator:d}=f.useContext(Ja),{matches:p}=f.useContext(Fa),{pathname:h}=Wn(),m=JSON.stringify(Ld(p,o.v7_relativeSplatPath)),_=f.useRef(!1);return tx(()=>{_.current=!0}),f.useCallback(function(g,v){if(v===void 0&&(v={}),!_.current)return;if(typeof g=="number"){d.go(g);return}let w=qd(g,JSON.parse(m),h,v.relative==="path");s==null&&i!=="/"&&(w.pathname=w.pathname==="/"?i:Ka([i,w.pathname])),(v.replace?d.replace:d.push)(w,v.state,v)},[i,d,m,h,s])}function nx(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(Ja),{matches:p}=f.useContext(Fa),{pathname:h}=Wn(),m=JSON.stringify(Ld(p,d.v7_relativeSplatPath));return f.useMemo(()=>qd(s,JSON.parse(m),h,o==="path"),[s,m,h,o])}function Dy(s,i){return Oy(s,i)}function Oy(s,i,o,d){oi()||Mt(!1);let{navigator:p}=f.useContext(Ja),{matches:h}=f.useContext(Fa),m=h[h.length-1],_=m?m.params:{};m&&m.pathname;let j=m?m.pathnameBase:"/";m&&m.route;let g=Wn(),v;if(i){var w;let C=typeof i=="string"?bl(i):i;j==="/"||(w=C.pathname)!=null&&w.startsWith(j)||Mt(!1),v=C}else v=g;let z=v.pathname||"/",Y=z;if(j!=="/"){let C=j.replace(/^\//,"").split("/");Y="/"+z.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=iy(s,{pathname:Y}),K=Ly(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},_,C.params),pathname:Ka([j,p.encodeLocation?p.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?j:Ka([j,p.encodeLocation?p.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),h,o,d);return i&&K?f.createElement(Qo.Provider,{value:{location:rs({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:Za.Pop}},K):K}function Ay(){let s=Yy(),i=Cy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:p},o):null,null)}const Uy=f.createElement(Ay,null);class Ry extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(Fa.Provider,{value:this.props.routeContext},f.createElement(ex.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(s){let{routeContext:i,match:o,children:d}=s,p=f.useContext(Bd);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(Fa.Provider,{value:i},d)}function Ly(s,i,o,d){var p;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var h;if(!o)return null;if(o.errors)s=o.matches;else if((h=d)!=null&&h.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,_=(p=o)==null?void 0:p.errors;if(_!=null){let v=m.findIndex(w=>w.route.id&&(_==null?void 0:_[w.route.id])!==void 0);v>=0||Mt(!1),m=m.slice(0,Math.min(m.length,v+1))}let j=!1,g=-1;if(o&&d&&d.v7_partialHydration)for(let v=0;v<m.length;v++){let w=m[v];if((w.route.HydrateFallback||w.route.hydrateFallbackElement)&&(g=v),w.route.id){let{loaderData:z,errors:Y}=o,P=w.route.loader&&z[w.route.id]===void 0&&(!Y||Y[w.route.id]===void 0);if(w.route.lazy||P){j=!0,g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}return m.reduceRight((v,w,z)=>{let Y,P=!1,K=null,C=null;o&&(Y=_&&w.route.id?_[w.route.id]:void 0,K=w.route.errorElement||Uy,j&&(g<0&&z===0?(Qy("route-fallback"),P=!0,C=null):g===z&&(P=!0,C=w.route.hydrateFallbackElement||null)));let B=i.concat(m.slice(0,z+1)),U=()=>{let O;return Y?O=K:P?O=C:w.route.Component?O=f.createElement(w.route.Component,null):w.route.element?O=w.route.element:O=v,f.createElement(Hy,{match:w,routeContext:{outlet:v,matches:B,isDataRoute:o!=null},children:O})};return o&&(w.route.ErrorBoundary||w.route.errorElement||z===0)?f.createElement(Ry,{location:o.location,revalidation:o.revalidation,component:K,error:Y,children:U(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):U()},null)}var ax=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(ax||{}),lx=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(lx||{});function qy(s){let i=f.useContext(Bd);return i||Mt(!1),i}function By(s){let i=f.useContext(Ty);return i||Mt(!1),i}function Gy(s){let i=f.useContext(Fa);return i||Mt(!1),i}function ix(s){let i=Gy(),o=i.matches[i.matches.length-1];return o.route.id||Mt(!1),o.route.id}function Yy(){var s;let i=f.useContext(ex),o=By(),d=ix();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function $y(){let{router:s}=qy(ax.UseNavigateStable),i=ix(lx.UseNavigateStable),o=f.useRef(!1);return tx(()=>{o.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,rs({fromRouteId:i},h)))},[s,i])}const Wf={};function Qy(s,i,o){Wf[s]||(Wf[s]=!0)}function Xy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Pf(s){let{to:i,replace:o,state:d,relative:p}=s;oi()||Mt(!1);let{future:h,static:m}=f.useContext(Ja),{matches:_}=f.useContext(Fa),{pathname:j}=Wn(),g=Gd(),v=qd(i,Ld(_,h.v7_relativeSplatPath),j,p==="path"),w=JSON.stringify(v);return f.useEffect(()=>g(JSON.parse(w),{replace:o,state:d,relative:p}),[g,w,p,o,d]),null}function wt(s){Mt(!1)}function Zy(s){let{basename:i="/",children:o=null,location:d,navigationType:p=Za.Pop,navigator:h,static:m=!1,future:_}=s;oi()&&Mt(!1);let j=i.replace(/^\/*/,"/"),g=f.useMemo(()=>({basename:j,navigator:h,static:m,future:rs({v7_relativeSplatPath:!1},_)}),[j,_,h,m]);typeof d=="string"&&(d=bl(d));let{pathname:v="/",search:w="",hash:z="",state:Y=null,key:P="default"}=d,K=f.useMemo(()=>{let C=Hd(v,j);return C==null?null:{location:{pathname:C,search:w,hash:z,state:Y,key:P},navigationType:p}},[j,v,w,z,Y,P,p]);return K==null?null:f.createElement(Ja.Provider,{value:g},f.createElement(Qo.Provider,{children:o,value:K}))}function Ky(s){let{children:i,location:o}=s;return Dy(Sd(i),o)}new Promise(()=>{});function Sd(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...i,p];if(d.type===f.Fragment){o.push.apply(o,Sd(d.props.children,h));return}d.type!==wt&&Mt(!1),!d.props.index||!d.props.children||Mt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=Sd(d.props.children,h)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kd(){return kd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},kd.apply(this,arguments)}function Vy(s,i){if(s==null)return{};var o={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(i.indexOf(p)>=0)&&(o[p]=s[p]);return o}function Jy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Fy(s,i){return s.button===0&&(!i||i==="_self")&&!Jy(s)}const Wy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Py="6";try{window.__reactRouterVersion=Py}catch{}const Iy="startTransition",If=Jb[Iy];function ev(s){let{basename:i,children:o,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=ny({window:p,v5Compat:!0}));let m=h.current,[_,j]=f.useState({action:m.action,location:m.location}),{v7_startTransition:g}=d||{},v=f.useCallback(w=>{g&&If?If(()=>j(w)):j(w)},[j,g]);return f.useLayoutEffect(()=>m.listen(v),[m,v]),f.useEffect(()=>Xy(d),[d]),f.createElement(Zy,{basename:i,children:o,location:_.location,navigationType:_.action,navigator:m,future:d})}const tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,av=f.forwardRef(function(i,o){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:_,target:j,to:g,preventScrollReset:v,viewTransition:w}=i,z=Vy(i,Wy),{basename:Y}=f.useContext(Ja),P,K=!1;if(typeof g=="string"&&nv.test(g)&&(P=g,tv))try{let O=new URL(window.location.href),ee=g.startsWith("//")?new URL(O.protocol+g):new URL(g),ie=Hd(ee.pathname,Y);ee.origin===O.origin&&ie!=null?g=ie+ee.search+ee.hash:K=!0}catch{}let C=Ey(g,{relative:p}),B=lv(g,{replace:m,state:_,target:j,preventScrollReset:v,relative:p,viewTransition:w});function U(O){d&&d(O),O.defaultPrevented||B(O)}return f.createElement("a",kd({},z,{href:P||C,onClick:K||h?d:U,ref:o,target:j}))});var eh;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(eh||(eh={}));var th;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(th||(th={}));function lv(s,i){let{target:o,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:_}=i===void 0?{}:i,j=Gd(),g=Wn(),v=nx(s,{relative:m});return f.useCallback(w=>{if(Fy(w,o)){w.preventDefault();let z=d!==void 0?d:qo(g)===qo(v);j(s,{replace:z,state:p,preventScrollReset:h,relative:m,viewTransition:_})}},[g,j,v,d,p,o,s,h,m,_])}function Dt(){const s=Gd();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function iv(){return Wn().pathname}function sv({href:s,...i}){return t.jsx(av,{to:s,...i})}/**
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
 */const cv=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,..._},j)=>f.createElement("svg",{ref:j,...rv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:sx("lucide",p),..._},[...m.map(([g,v])=>f.createElement(g,v)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(s,i)=>{const o=f.forwardRef(({className:d,...p},h)=>f.createElement(cv,{ref:h,iconNode:i,className:sx(`lucide-${ov(s)}`,d),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=ge("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=ge("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=ge("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=ge("BookOpen",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=ge("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=ge("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ge("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ge("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=ge("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=ge("CreditCard",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=ge("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=ge("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vv=ge("Gift",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=ge("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=ge("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=ge("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=ge("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=ge("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ge("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ge("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=ge("List",[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=ge("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=ge("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=ge("Palette",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ge("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=ge("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=ge("RefreshCcw",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=ge("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=ge("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=ge("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cx=ge("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=ge("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=ge("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=ge("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=ge("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=ge("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ge("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=ge("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=ge("SlidersVertical",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=ge("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=ge("Star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=ge("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=ge("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dx=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=ge("WandSparkles",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=ge("Webhook",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=ge("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=ge("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Xv="/api/v3";var Jh;const xe=typeof window<"u"&&((Jh=window.settings)==null?void 0:Jh.secure_path)||"ZicFree123",Lo="authorization";function Zv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let p=o[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(i)===0)try{const h=p.substring(i.length,p.length),m=decodeURIComponent(h),_=JSON.parse(m);return _&&typeof _=="object"&&"value"in _?_.value:m}catch{try{return decodeURIComponent(p.substring(i.length,p.length))}catch{return p.substring(i.length,p.length)}}}return null}function Kv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:i}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",_=new Date;_.setTime(_.getTime()+o*24*60*60*1e3);const j=`expires=${_.toUTCString()}`,g=m?"":`domain=${window.location.hostname};`;let v=`${s}=${encodeURIComponent(p)}; ${j}; ${g} path=/`;h&&(v+="; secure"),v+="; SameSite=Lax",document.cookie=v;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function Vv(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function ux(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Lo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Lo,s)}catch{}if(!s&&(s=Zv("auth_data"),s))try{window.localStorage.setItem(Lo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Jv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${Xv}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function Ot(){return!!ux()}function Fv(s){typeof window>"u"||(window.localStorage.setItem(Lo,s),window.localStorage.setItem("auth_data",s),Kv("auth_data",s,36500))}function px(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{o.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Vv(p)})}async function fe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const j=ux();j&&(o.authorization=j)}const p=await fetch(Jv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),_=m?await p.json():await p.text();if(!p.ok){const j=typeof _=="object"&&_&&"message"in _?String(_.message):`Request failed with status ${p.status}`,g=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(j);throw(p.status===401||p.status===403&&!g)&&i.auth!==!1&&(px(),window.location.hash="/login"),new Error(j)}if(!m&&typeof _=="string"&&(_.trim().startsWith("<!DOCTYPE html")||_.trim().startsWith("<html")||_.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return _}async function Wv(s,i){return fe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function Pv(){const s=`/${xe}/stat`,[i,o,d,p,h,m]=await Promise.all([fe(`${s}/getOverride`),fe(`${s}/getOrder`),fe(`${s}/getServerTodayRank`),fe(`${s}/getServerLastRank`),fe(`${s}/getUserTodayRank`),fe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function mx(){return(await fe(`/${xe}/config/fetch`)).data}async function fx(s){return fe(`/${xe}/config/save`,{method:"POST",body:s})}async function Iv(){return(await fe(`/${xe}/config/getEmailTemplate`)).data}async function e1(){return(await fe(`/${xe}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function t1(){return fe(`/${xe}/config/testSendMail`,{method:"POST",body:{}})}async function n1(s){return fe(`/${xe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function a1(){return(await fe(`/${xe}/payment/fetch`)).data}async function l1(){return(await fe(`/${xe}/payment/getPaymentMethods`)).data}async function ph(s,i){return(await fe(`/${xe}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function i1(s){return fe(`/${xe}/payment/save`,{method:"POST",body:s})}async function s1(s){return fe(`/${xe}/payment/show`,{method:"POST",body:{id:s}})}async function o1(s){return fe(`/${xe}/payment/drop`,{method:"POST",body:{id:s}})}async function r1(s){return fe(`/${xe}/payment/sort`,{method:"POST",body:{ids:s}})}async function c1(){return(await fe(`/${xe}/theme/getThemes`)).data}async function d1(s){return(await fe(`/${xe}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function u1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return fe(`/${xe}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ps(){return(await fe(`/${xe}/server/group/fetch`)).data}async function hx(s){return fe(`/${xe}/server/group/save`,{method:"POST",body:s})}async function p1(s){return fe(`/${xe}/server/group/drop`,{method:"POST",body:{id:s}})}const xx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function gx(){return(await fe(`/${xe}/server/route/fetch`)).data}async function m1(s){return fe(`/${xe}/server/route/save`,{method:"POST",body:s})}async function f1(s){return fe(`/${xe}/server/route/drop`,{method:"POST",body:{id:s}})}async function yl(){return(await fe(`/${xe}/plan/fetch`)).data}async function h1(s){return fe(`/${xe}/plan/save`,{method:"POST",body:s})}async function x1(s){return fe(`/${xe}/plan/drop`,{method:"POST",body:{id:s}})}async function mh(s,i){return fe(`/${xe}/plan/update`,{method:"POST",body:{id:s,...i}})}async function fh(s){return fe(`/${xe}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function g1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{i.set(`filter[${p}][key]`,d.key),i.set(`filter[${p}][condition]`,d.condition),i.set(`filter[${p}][value]`,d.value)}),await fe(`/${xe}/order/fetch?${i.toString()}`)}async function b1(s){return fe(`/${xe}/order/paid`,{method:"POST",body:{trade_no:s}})}async function y1(s){return fe(`/${xe}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function bx(s){return fe(`/${xe}/order/assign`,{method:"POST",body:s})}async function v1(s,i){return fe(`/${xe}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function j1(s){return fe(`/${xe}/order/detail`,{method:"POST",body:{id:s}})}async function yx(s=1,i=15){return fe(`/${xe}/coupon/fetch?current=${s}&pageSize=${i}`)}async function w1(s){return fe(`/${xe}/coupon/generate`,{method:"POST",body:s})}async function N1(s){return fe(`/${xe}/coupon/drop`,{method:"POST",body:{id:s}})}async function _1(s){return fe(`/${xe}/coupon/show`,{method:"POST",body:{id:s}})}async function S1(s=1,i=15){return fe(`/${xe}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function k1(s){return fe(`/${xe}/giftcard/generate`,{method:"POST",body:s})}async function C1(s){return fe(`/${xe}/giftcard/drop`,{method:"POST",body:{id:s}})}async function Md(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),fe(`/${xe}/user/fetch?${d.toString()}`)}async function z1(s){return fe(`/${xe}/user/update`,{method:"POST",body:s})}async function vx(s){return fe(`/${xe}/user/getUserInfoById`,{params:{id:s}})}async function T1(s){return fe(`/${xe}/user/delUser`,{method:"POST",body:{id:s}})}async function E1(s){return fe(`/${xe}/user/generate`,{method:"POST",body:s})}async function M1(s){return fe(`/${xe}/user/resetSecret`,{method:"POST",body:{id:s}})}async function D1(s=1,i=15,o,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(i)),d&&p.set("include_subscribe_url","1"),o==null||o.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),fe(`/${xe}/subscription/fetch?${p.toString()}`)}async function O1(s){return fe(`/${xe}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function A1(s){return fe(`/${xe}/subscription/update`,{method:"POST",body:s})}async function U1(s){return fe(`/${xe}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function jx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),fe(`/${xe}/device/fetch?${d.toString()}`)}async function wx(s){return fe(`/${xe}/device/drop`,{method:"POST",body:{id:s}})}async function Nx(s){return fe(`/${xe}/device/ban`,{method:"POST",body:{id:s}})}async function R1(s){return fe(`/${xe}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function H1(s,i=1,o=10){return fe(`/${xe}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function L1(){return(await fe(`/${xe}/notice/fetch`)).data}async function q1(s){return fe(`/${xe}/notice/save`,{method:"POST",body:s})}async function B1(s){return fe(`/${xe}/notice/drop`,{method:"POST",body:{id:s}})}async function G1(s){return fe(`/${xe}/notice/show`,{method:"POST",body:{id:s}})}async function Y1(){return(await fe(`/${xe}/ticket/fetch`)).data}async function hh(s){return(await fe(`/${xe}/ticket/fetch`,{params:{id:s}})).data}async function $1(s,i){return fe(`/${xe}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function Q1(s){return fe(`/${xe}/ticket/close`,{method:"POST",body:{id:s}})}async function X1(){return(await fe(`/${xe}/knowledge/fetch`)).data}async function Z1(s){return(await fe(`/${xe}/knowledge/fetch`,{params:{id:s}})).data}async function K1(s){return fe(`/${xe}/knowledge/save`,{method:"POST",body:s})}async function V1(s){return fe(`/${xe}/knowledge/drop`,{method:"POST",body:{id:s}})}async function J1(s){return fe(`/${xe}/knowledge/show`,{method:"POST",body:{id:s}})}async function F1(){return(await fe(`/${xe}/webcon/fetch`)).data}async function W1(s){return fe(`/${xe}/webcon/save`,{method:"POST",body:s})}async function P1(s){return fe(`/${xe}/webcon/drop`,{method:"POST",body:{id:s}})}async function I1(s){return fe(`/${xe}/webcon/show`,{method:"POST",body:{id:s}})}async function e0(){return fe(`/${xe}/system/getSystemStatus`)}async function t0(){return(await fe(`/${xe}/system/getCoreLicenseStatus`)).data}async function n0(){return(await fe(`/${xe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function a0(){return fe(`/${xe}/system/getQueueStats`)}async function l0(){return fe(`/${xe}/system/getQueueWorkload`)}async function i0(){return fe(`/${xe}/system/getSystemLog`)}async function xh(){return fe(`/${xe}/server/manage/getNodes`)}async function s0(s,i){return fe(`/${xe}/server/${s}/save`,{method:"POST",body:i})}async function o0(s,i){return fe(`/${xe}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function r0(s,i,o){return fe(`/${xe}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function c0(s,i){return fe(`/${xe}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function d0(s){return fe(`/${xe}/server/manage/sort`,{method:"POST",body:s})}const $d=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],_x="admin-locale",Dd="vi-VN",u0="/assets/adminzic",Sx=f.createContext(null);function p0(){if(typeof window>"u")return Dd;const s=localStorage.getItem(_x);return s&&$d.some(i=>i.code===s)?s:Dd}function m0(s,i){return i?Object.entries(i).reduce((o,[d,p])=>o.replaceAll(`{${d}}`,String(p)),s):s}function f0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var _;i(((_=window.AdminNextI18n)==null?void 0:_[s])??{})}),p.addEventListener("error",o);return}const h=document.createElement("script");h.src=`${u0}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var _;return i(((_=window.AdminNextI18n)==null?void 0:_[s])??{})},h.onerror=o,document.head.appendChild(h)})}function h0({children:s}){const[i,o]=f.useState(Dd),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{o(p0())},[]);const _=f.useCallback(v=>{o(v),typeof window<"u"&&localStorage.setItem(_x,v)},[]);f.useEffect(()=>{let v=!0;return m(!0),f0(i).then(w=>{v&&p(w)}).finally(()=>{v&&m(!1)}),()=>{v=!1}},[i]);const j=f.useCallback((v,w)=>m0(d[v]??v,w),[d]),g=f.useMemo(()=>({locale:i,loading:h,setLocale:_,t:j}),[i,h,_,j]);return t.jsx(Sx.Provider,{value:g,children:s})}function Ze(){const s=f.useContext(Sx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function x0(){const s=Dt(),{t:i,locale:o,setLocale:d}=Ze(),[p,h]=f.useState(""),[m,_]=f.useState(""),[j,g]=f.useState(""),[v,w]=f.useState(!1),[z,Y]=f.useState(!1),P=f.useRef(null);f.useEffect(()=>{function C(B){P.current&&!P.current.contains(B.target)&&Y(!1)}return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]),f.useEffect(()=>{Ot()&&s.replace("/dashboard")},[s]);async function K(C){var B,U,O,ee;C.preventDefault(),g(""),w(!0);try{const ie=await Wv(p,m),oe=((B=ie.data)==null?void 0:B.auth_data)??((U=ie.data)==null?void 0:U.token),E=((O=ie.data)==null?void 0:O.is_admin)===1||((ee=ie.data)==null?void 0:ee.is_admin)===!0;if(!oe||!E)throw new Error(i("login.adminRequired"));Fv(oe),s.replace("/dashboard")}catch(ie){g(ie instanceof Error?ie.message:i("login.failed"))}finally{w(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:P,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>Y(C=>!C),children:t.jsx(ms,{size:17})}),z?t.jsx("div",{className:"locale-menu",children:$d.map(C=>t.jsxs("button",{className:`locale-option ${o===C.code?"active":""}`,type:"button",onClick:()=>{d(C.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:C.flag}),t.jsx("span",{children:C.label})]},C.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Av,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(rx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:C=>h(C.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Sv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:C=>_(C.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),j?t.jsx("div",{className:"form-error",children:j}):null,t.jsx("button",{className:"primary-button",disabled:v,type:"submit",children:i(v?"login.signingIn":"login.submit")})]})]})]})}function wn(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Jn(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function g0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const b0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:yv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Hv},{href:"/config/payment",label:"nav.paymentConfig",icon:gv},{href:"/config/theme",label:"nav.themeConfig",icon:Gv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:Yd},{href:"/server/group",label:"nav.groupManagement",icon:$v},{href:"/server/route",label:"nav.routeManagement",icon:Rv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:rh},{href:"/order",label:"nav.orders",icon:_v},{href:"/coupon",label:"nav.coupons",icon:vv},{href:"/giftcard",label:"nav.giftcards",icon:qv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:dx},{href:"/subscription",label:"nav.subscriptions",icon:rh},{href:"/device",label:"nav.devices",icon:Lv},{href:"/webcon",label:"nav.webcon",icon:ms},{href:"/notice",label:"nav.notices",icon:ls},{href:"/ticket",label:"nav.tickets",icon:Nv},{href:"/knowledge",label:"nav.knowledge",icon:pv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:mv}]}];function y0(){const[s,i]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";i(h),document.documentElement.setAttribute("data-theme",h)},[]);const o=f.useCallback(p=>{i(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function kx(s){return s?new Date(s*1e3):null}function v0(s,i){const o=kx(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function j0(s){const i=kx(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Gt({children:s,title:i,subtitle:o}){const[d,p]=f.useState(!1),h=Dt(),m=iv(),{t:_,locale:j,setLocale:g}=Ze(),{theme:v,toggle:w}=y0(),[z,Y]=f.useState(!1),P=f.useRef(null),[K,C]=f.useState(null),[B,U]=f.useState(!1),O=f.useCallback(async(N=!1)=>{if(Ot()){U(N);try{C(N?await n0():await t0())}catch(R){C({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:_("license.unavailable"),error:R instanceof Error?R.message:_("license.unavailable")})}finally{U(!1)}}},[_]);f.useEffect(()=>{function N(R){P.current&&!P.current.contains(R.target)&&Y(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]),f.useEffect(()=>{O(!1);const N=window.setInterval(()=>{O(!1)},6e4);return()=>window.clearInterval(N)},[O]);function ee(){px(),h.replace("/login")}const ie=(K==null?void 0:K.license_expires_at)??(K==null?void 0:K.expires_at),oe=v0(j,ie),E=typeof(K==null?void 0:K.days_until_expiry)=="number"?K.days_until_expiry:j0(ie),$=typeof E=="number"?E<=0?_("license.expiresToday"):_("license.daysLeft",{days:E}):null,ne=!!K&&K.available&&!K.requires_renewal,he=ne&&!!(K!=null&&K.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:_("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:b0.map(N=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:_(N.label)}),N.items.map(R=>{const te=R.icon,M=m===R.href;return t.jsxs(sv,{className:`nav-item ${M?"active":""}`,href:R.href,onClick:()=>p(!1),children:[t.jsx(te,{size:17}),t.jsx("span",{children:_(R.label)})]},R.href)})]},N.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":_(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(N=>!N),children:d?t.jsx(ot,{size:19}):t.jsx(Cv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ne?t.jsxs("button",{className:`license-chip ${he?"warning":""}`,type:"button",disabled:B,title:_("license.refresh"),onClick:()=>void O(!0),children:[t.jsx(lh,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:_("license.validUntil")}),t.jsx("strong",{children:oe??_("license.unknownExpiry")})]}),$?t.jsx("small",{children:$}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:P,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":_("common.language"),onClick:()=>Y(N=>!N),children:t.jsx(ms,{size:17})}),z?t.jsx("div",{className:"locale-menu",children:$d.map(N=>t.jsxs("button",{className:`locale-option ${j===N.code?"active":""}`,type:"button",onClick:()=>{g(N.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:N.flag}),t.jsx("span",{children:N.label})]},N.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":v==="dark"?"Switch to light mode":"Switch to dark mode",onClick:w,children:v==="dark"?t.jsx(Bv,{size:17}):t.jsx(zv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,children:[t.jsx(kv,{size:16}),t.jsx("span",{children:_("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[K!=null&&K.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(Td,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:_("license.renewTitle")}),t.jsx("p",{children:_("license.renewBody")}),t.jsxs("small",{children:[_("license.currentStatus"),": ",K.status,K.error?` - ${K.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void O(!0),children:[t.jsx(kt,{size:16}),_(B?"license.refreshing":"license.refresh")]})]}):null,he?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(lh,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:_("license.expiryWarningTitle")}),t.jsx("p",{children:_("license.expiryWarningBody",{date:oe??_("license.unknownExpiry"),days:E??""})}),t.jsxs("small",{children:[_("license.currentStatus"),": ",K.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void O(!0),children:[t.jsx(kt,{size:16}),_(B?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const gh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Cx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function is(s){return Number(s??0)}function bh(s){return is(s)/100}function yh(s){return`${Jn(Math.round(s))} VND`}function zx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function w0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const p=new Date(i);return p.setDate(i.getDate()-(s-d-1)),zx(p)})}function vh(s,i){const o=s.get(i);if(o)return o;const d=Cx(i);return s.set(i,d),d}function N0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function To({label:s,value:i,helper:o,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(uv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function vt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(kt,{size:18}),t.jsx("span",{children:s})]})}function _0(s,i){const o=new Map,d=new Map;if(s.forEach(p=>{const h=vh(o,p.date),m=N0(p.type);if(m){h[m]=Number(p.value||0);return}const _=d.get(p.date)??0,j=gh[_%gh.length];h[j]=Number(p.value||0),d.set(p.date,_+1)}),i){const p=vh(o,zx(new Date));p.registrations=is(i.day_register_total),i.day_order_total!==void 0&&(p.orderCount=is(i.day_order_total)),i.day_paid_order_total!==void 0&&(p.paidCount=is(i.day_paid_order_total)),p.paidAmount=bh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(p.commissionAmount=bh(i.day_commission_payout)),i.day_commission_count!==void 0&&(p.commissionCount=is(i.day_commission_count))}return o.size===0?[]:w0(31).map(p=>o.get(p)??Cx(p))}function S0({records:s,override:i}){const{t:o}=Ze(),[d,p]=f.useState("paidAmount"),[h,m]=f.useState(null),[_,j]=f.useState(0),[g,v]=f.useState(0),w=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:yh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Jn},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Jn},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:yh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Jn},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Jn}],z=w.find($=>$.key===d)??w[0],Y=_0(s,i),P=$=>Number($[z.key]||0),K=Math.max(...Y.map(P),1),C=720,B=220,U=28,O=Y.length>1?(C-U*2)/(Y.length-1):0,ee=$=>B-U-$/K*(B-U*2),ie=Y.map(($,ne)=>`${U+ne*O},${ee(P($))}`).join(" "),oe=Math.max(Math.ceil(Y.length/6),1),E=`dashboardTrendFill-${z.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:Y.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:w.map($=>t.jsx("button",{type:"button",className:d===$.key?"active":"",onClick:()=>{p($.key),m(null)},children:$.label},$.key))}),Y.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${C} ${B}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:E,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:z.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:z.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map($=>t.jsx("line",{className:"chart-grid",x1:U,x2:C-U,y1:U+$*(B-U*2),y2:U+$*(B-U*2)},$)),Y.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${E})`},points:`${U},${B-U} ${ie} ${C-U},${B-U}`}),t.jsx("polyline",{className:"chart-line",points:ie,style:{stroke:z.color}}),Y.map(($,ne)=>{const he=U+ne*O,N=ee(P($));return t.jsxs("g",{children:[t.jsx("circle",{cx:he,cy:N,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m($),j(he),v(N)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:he,cy:N,r:(h==null?void 0:h.date)===$.date?6:4,fill:z.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===$.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},$.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${_/C*100}%`,top:`${g/B*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[z.label,": ",z.format(P(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:Y.filter(($,ne)=>ne===0||ne===Y.length-1||ne%oe===0).map($=>t.jsx("span",{children:$.date},$.date))}),Y.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:z.summaryLabel}),t.jsx("strong",{children:z.format(K)})]}):null]})}function Eo({title:s,subtitle:i,records:o,labelKey:d}){const{t:p}=Ze(),h=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):o.slice(0,8).map((m,_)=>{const j=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),g=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:_+1}),t.jsx("strong",{children:j}),t.jsxs("small",{children:[g0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(g,3)}%`}})})]},`${j}-${_}`)})})]})}function cd({label:s,current:i,previous:o}){const{t:d}=Ze();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Jn(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Jn(o):o]})]})}function k0(){var g,v,w,z,Y,P,K,C,B,U,O,ee;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(""),[m,_]=f.useState(!0),j=f.useCallback(async()=>{_(!0),h("");try{d(await Pv())}catch(ie){h(ie instanceof Error?ie.message:i("dashboard.loadFailed"))}finally{_(!1)}},[i]);return f.useEffect(()=>{if(!Ot()){s.replace("/login");return}j()},[j,s]),t.jsxs(Gt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:j,children:[t.jsx(kt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(vt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((g=o.override)==null?void 0:g.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(v=o.override)==null?void 0:v.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:j,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(To,{label:i("dashboard.onlineUsers"),value:Jn(((w=o.override)==null?void 0:w.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(To,{label:i("dashboard.todayIncome"),value:`${wn(((z=o.override)==null?void 0:z.day_paid_income)??((Y=o.override)==null?void 0:Y.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(To,{label:i("dashboard.todayRegistrations"),value:Jn(((P=o.override)==null?void 0:P.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(To,{label:i("dashboard.pendingCommission"),value:Jn(((K=o.override)==null?void 0:K.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(cd,{label:i("dashboard.monthIncome"),current:`${wn(((C=o.override)==null?void 0:C.month_income)??0)} VND`,previous:`${wn(((B=o.override)==null?void 0:B.last_month_income)??0)} VND`}),t.jsx(cd,{label:i("dashboard.monthCommission"),current:`${wn(((U=o.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${wn(((O=o.override)==null?void 0:O.commission_last_month_payout)??0)} VND`}),t.jsx(cd,{label:i("dashboard.monthRegistrations"),current:((ee=o.override)==null?void 0:ee.month_register_total)??0,previous:"-"})]}),t.jsx(S0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Eo,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Eo,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Eo,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Eo,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const C0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function jh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function z0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function dd(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function T0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function E0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function dn(s){return s===!0||s===1||s==="1"}function M0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function ud(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function D0({field:s,value:i,onChange:o}){const{t:d}=Ze(),p=s.toInput?s.toInput(i):M0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${dn(i)?"on":""}`,type:"button",onClick:()=>o(dn(i)?0:1),"aria-pressed":dn(i),children:[t.jsx("span",{}),dn(i)?jh(d)[0].label:jh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>o(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function O0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>dn(p.email_whitelist_enable),fromInput:ud},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:p=>dn(p.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:p=>dn(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>dn(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>dn(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>dn(p.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>dn(p.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:z0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:dd(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:dd(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:dd(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:T0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:ud}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:E0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:ud},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:p=>dn(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:p=>dn(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:p=>dn(p.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(p=>({label:p,value:p}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function A0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState("site"),[p,h]=f.useState(null),[m,_]=f.useState([]),[j,g]=f.useState([]),[v,w]=f.useState(!0),[z,Y]=f.useState(null),[P,K]=f.useState(""),C=f.useCallback(async()=>{w(!0),K("");try{const[$,ne,he]=await Promise.all([mx(),e1(),Iv()]);h($),_(ne),g(he)}catch($){K($ instanceof Error?$.message:i("config.loadFailed"))}finally{w(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}C()},[C,s]),f.useEffect(()=>{const $=document.querySelector(".config-tabs button.active");$&&$.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const B=f.useMemo(()=>O0({plans:m,emailTemplates:j,t:i}),[m,j,i]),U=B.find($=>$.key===o)??B[0],O=(p==null?void 0:p[U.key])??{};function ee($,ne,he){h(N=>N&&{...N,[$]:{...N[$],[ne]:he}})}async function ie(){var $;if(p){Y(U.key),K("");try{await fx(p[U.key]),($=window.showToast)==null||$.call(window,i("config.saveSuccess"),"success")}catch(ne){K(ne instanceof Error?ne.message:i("config.saveFailed"))}finally{Y(null)}}}async function oe(){var $;Y("mail"),K("");try{await t1(),($=window.showToast)==null||$.call(window,i("config.email.testSuccess"),"success")}catch(ne){K(ne instanceof Error?ne.message:i("config.email.testFailed"))}finally{Y(null)}}async function E(){var ne;const $=String((p==null?void 0:p.telegram.telegram_bot_token)??"");Y("webhook"),K("");try{await n1($),(ne=window.showToast)==null||ne.call(window,i("config.telegram.webhookSuccess"),"success")}catch(he){K(he instanceof Error?he.message:i("config.telegram.webhookFailed"))}finally{Y(null)}}return t.jsxs(Gt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:C,disabled:v,children:[t.jsx(kt,{size:16}),i(v?"common.refreshing":"common.refresh")]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,v&&!p?t.jsx(vt,{label:i("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:C0.map($=>{const ne=B.find(he=>he.key===$);return ne?t.jsxs("button",{className:o===$?"active":"",type:"button",onClick:()=>d($),children:[t.jsx("span",{children:ne.label}),t.jsx("small",{children:ne.hint})]},$):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:U.label}),t.jsx("p",{children:U.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:z===U.key,type:"button",onClick:ie,children:[t.jsx(_n,{size:16}),z===U.key?i("config.saving"):i("config.saveTab")]})]}),U.warning?t.jsx("div",{className:"config-warning",children:U.warning}):null,t.jsx("div",{className:"config-fields",children:U.fields.map($=>$.visible&&!$.visible(O)?null:t.jsx(D0,{field:$,value:O[$.key],onChange:ne=>ee(U.key,$.key,ne)},$.key))}),U.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:z==="mail",onClick:oe,children:[t.jsx(rx,{size:16}),i(z==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:z==="webhook",onClick:E,children:[t.jsx(Yv,{size:16}),i(z==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(cx,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Va(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function pd(s){return s===!0||s===1||s==="1"}function U0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function R0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function H0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[j,g]=f.useState({}),[v,w]=f.useState(!0),[z,Y]=f.useState(!1),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState({}),oe=f.useCallback(async()=>{w(!0),B("");try{const[M,re]=await Promise.all([a1(),l1()]);d(M),h(re),ie({})}catch(M){B(M instanceof Error?M.message:i("payment.loadFailed"))}finally{w(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}oe()},[oe,s]);async function E(M){const re=(M==null?void 0:M.payment)??p[0]??"",A=U0(M,re);if(_(A),g({}),B(""),O(""),!!re){Y(!0);try{g(await ph(re,M==null?void 0:M.id))}catch(J){B(J instanceof Error?J.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function $(M){if(m){_({...m,payment:M,config:{}}),Y(!0),B("");try{g(await ph(M,m.id))}catch(re){B(re instanceof Error?re.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function ne(M){var re,A;if(M.preventDefault(),!!m){K(!0),B(""),O("");try{await i1(R0(m)),_(null),(re=window.showToast)==null||re.call(window,i("payment.saveSuccess"),"success"),await oe()}catch(J){(A=window.showToast)==null||A.call(window,J instanceof Error?J.message:i("payment.saveFailed"),"error")}finally{K(!1)}}}async function he(M){var re;B(""),O("");try{await s1(M),await oe()}catch(A){(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:i("payment.toggleFailed"),"error")}}async function N(M){var re;(re=window.showConfirm)==null||re.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var A,J;B(""),O("");try{await o1(M),(A=window.showToast)==null||A.call(window,i("payment.deleteSuccess"),"success"),await oe()}catch(x){(J=window.showToast)==null||J.call(window,x instanceof Error?x.message:i("payment.deleteFailed"),"error")}}})}async function R(M,re){var W;const A=M+re;if(A<0||A>=o.length)return;const J=[...o],x=J[M];J.splice(M,1),J.splice(A,0,x),d(J);try{await r1(J.map(H=>H.id)),await oe()}catch(H){(W=window.showToast)==null||W.call(window,H instanceof Error?H.message:i("payment.sortFailed"),"error"),await oe()}}async function te(M){var A;const re=await Va(M);(A=window.showToast)==null||A.call(window,i(re?"payment.copied":"common.copyFailed"),re?"success":"error")}return t.jsxs(Gt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:oe,disabled:v,children:[t.jsx(kt,{size:16}),t.jsx("span",{children:i(v?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void E(),children:[t.jsx(Nn,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,v&&o.length===0?t.jsx(vt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((M,re)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:M.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":i("payment.moveUp"),children:t.jsx(ah,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,1),disabled:re===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(nh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${pd(M.enable)?"active":""}`,type:"button",onClick:()=>void he(M.id),"aria-label":pd(M.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:M.name}),M.icon?t.jsx("small",{children:M.icon}):null]}),t.jsx("td",{children:M.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void te(M.notify_url),children:[t.jsx("span",{children:M.notify_url}),t.jsx(cs,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void E(M),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void N(M.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},M.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((M,re)=>{const A=pd(M.enable),J=M.handling_fee_percent!==null&&M.handling_fee_percent!==""?`${M.handling_fee_percent}%`:"",x=M.handling_fee_fixed!==null?`${wn(M.handling_fee_fixed)} VND`:"",W=[J,x].filter(Boolean).join(" + ")||"No fees",H=ee[M.id],S=M.icon&&!H;return t.jsxs("div",{className:`payment-mobile-card ${A?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",M.id]}),t.jsx("span",{className:"gateway-tag",children:M.payment})]}),t.jsx("button",{className:`admin-switch ${A?"active":""}`,type:"button",onClick:()=>void he(M.id),"aria-label":i(A?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[S?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:M.icon,alt:M.name,onError:()=>{ie(Q=>({...Q,[M.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:M.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:M.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:W})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void te(M.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:M.notify_url}),t.jsx(cs,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":i("payment.moveUp"),children:t.jsx(ah,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,1),disabled:re===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(nh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void E(M),children:[t.jsx(Lt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void N(M.id),children:[t.jsx(Bt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},M.id)}),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ne,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:M=>_({...m,name:M.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:M=>_({...m,icon:M.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:M=>_({...m,notify_domain:M.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:M=>_({...m,handling_fee_percent:M.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:M=>_({...m,handling_fee_fixed:M.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:M=>void $(M.target.value),children:p.map(M=>t.jsx("option",{value:M,children:M},M))})]}),z?t.jsx(vt,{label:i("payment.formLoading")}):null,z?null:Object.entries(j).map(([M,re])=>t.jsxs("label",{children:[t.jsx("span",{children:re.label}),t.jsx("input",{className:"config-input",placeholder:re.description,value:String(m.config[M]??re.value??""),onChange:A=>_({...m,config:{...m.config,[M]:A.target.value}})})]},M)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(_n,{size:16}),i(P?"payment.saving":"common.save")]})]})]})]})}):null]})}function L0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function q0(s,i){return i[s.field_name]??s.default_value??""}function B0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,_]=f.useState(!0),[j,g]=f.useState(!1),[v,w]=f.useState(!1),[z,Y]=f.useState(null),[P,K]=f.useState(""),[C,B]=f.useState(""),U=f.useCallback(async()=>{_(!0),K("");try{d(await c1())}catch(E){K(E instanceof Error?E.message:i("theme.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}U()},[U,s]);async function O(E,$){h(null),g(!0),K(""),B("");try{const ne=await d1(E);h({key:E,theme:$,values:ne})}catch(ne){K(ne instanceof Error?ne.message:i("theme.configLoadFailed"))}finally{g(!1)}}async function ee(E){Y(E),K(""),B("");try{await fx({frontend_theme:E}),B(i("theme.activateSuccess")),await U()}catch($){K($ instanceof Error?$.message:i("theme.activateFailed"))}finally{Y(null)}}async function ie(E){if(E.preventDefault(),!!p){w(!0),K(""),B("");try{await u1(p.key,p.values),h(null),B(i("theme.saveSuccess")),await U()}catch($){K($ instanceof Error?$.message:i("theme.saveFailed"))}finally{w(!1)}}}function oe(E,$){h(ne=>ne&&{...ne,values:{...ne.values,[E]:$}})}return t.jsxs(Gt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),P?t.jsx("div",{className:"form-error",children:P}):null,C?t.jsx("div",{className:"form-success",children:C}):null,m&&!o?t.jsx(vt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([E,$])=>{const ne=o.active===E;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${L0($)})`},children:ne?t.jsxs("span",{className:"theme-active",children:[t.jsx(ox,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:$.name||E}),t.jsx("p",{children:$.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",$.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(E,$),children:[t.jsx(Ov,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ne||z===E,type:"button",onClick:()=>void ee(E),children:[t.jsx(Tv,{size:15}),i(ne?"theme.current":z===E?"theme.activating":"theme.activate")]})]})]},E)})}):null,j?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(vt,{label:i("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[(p.theme.configs??[]).map(E=>{const $=q0(E,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:E.label}),E.description?t.jsx("p",{className:"field-description",children:E.description}):null,E.field_type==="select"?t.jsx("select",{className:"config-input",value:$,onChange:ne=>oe(E.field_name,ne.target.value),children:Object.entries(E.select_options??{}).map(([ne,he])=>t.jsx("option",{value:ne,children:he},ne))}):null,E.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:E.placeholder,rows:5,value:$,onChange:ne=>oe(E.field_name,ne.target.value)}):null,E.field_type!=="select"&&E.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:E.placeholder,value:$,onChange:ne=>oe(E.field_name,ne.target.value)}):null]},E.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(_n,{size:16}),i(v?"theme.saving":"common.save")]})]})]})]})}):null]})}const Od=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],G0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Y0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Tx=["tcp","ws","grpc"],Ex=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],$0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],wh=["anytls","hysteria2","trojan","tuic"],Q0=["tcp","ws","grpc","httpupgrade","xhttp"],X0=["chrome","firefox","safari","ios","android","edge","360","qq"],Qd=typeof window<"u"?window.location.origin:"",Z0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function K0(s,i,o=""){return s[i]??o}function Xe(s,i,o=""){return String(K0(s,i,o))}function V0(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function J0(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function F0(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function W0(s){return s==="vmess"?"networkSettings":"network_settings"}function P0(s,i){const o=s==="vmess",d=s==="vless"||si(s),p={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...p}:p;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function si(s){return s==="v2node"||s==="zicnode"}function I0(s){return!!s&&s!=="shadowsocks"}function ej(s){return s==="vless"||s==="vmess"}function tj(s){return s==="vless"||s==="anytls"}function nj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function Nh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Tx:s==="vless"||s==="vmess"?Q0:[]}function aj(s){var i;return si(s)?"ZicNode":((i=Od.find(o=>o.value===s))==null?void 0:i.label)??s}function Ad(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function lj(s){return s===!0||s===1||s==="1"||s==="true"}function ij(s){return Ad(s).replace(/\/+$/,"")||Qd}function _h(s){return`'${s.replace(/'/g,"'\\''")}'`}function sj(s,i){const o=i.apiHost||Qd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${Z0} && \\
bash install.sh --api-host ${_h(o)} --node-id ${s} --api-key ${_h(d)}`}function Sh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function kh(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=Sh(d.group_id),d.route_id=Sh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Mx({initialValue:s,onCancel:i,onSave:o}){const{t:d}=Ze(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,_]=f.useState(""),j=v=>{if(v.preventDefault(),!p.trim()){o({});return}try{const w=JSON.parse(p);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");o(w)}catch(w){_(w instanceof Error?w.message:"Invalid JSON")}},g=v=>{if(h(v),!v.trim()){_("");return}try{const w=JSON.parse(v);if(typeof w!="object"||w===null)throw new Error("Must be a JSON object {} or array []");_("")}catch(w){_(w instanceof Error?w.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:j,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:v=>g(v.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function Te({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:o})]})}function oj({value:s,onChange:i,label:o}){const{t:d}=Ze(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(Te,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,_)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((j,g)=>g!==_)),style:{cursor:"pointer"},children:[m," ×"]},_)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),i([...s,p.trim()]),h(""))}})]})]})}function Ch({options:s,value:i,onChange:o,label:d,actionText:p,onAction:h}){const{t:m}=Ze(),[_,j]=f.useState(""),g=s.filter(w=>i.includes(w.id)),v=s.filter(w=>w.name.toLowerCase().includes(_.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(Te,{label:d,actionText:p,onAction:h}),g.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:g.map(w=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(z=>z!==w.id)),children:[w.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},w.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:_,onChange:w=>j(w.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[v.map(w=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(w.id),onChange:z=>o(z.target.checked?[...i,w.id]:i.filter(Y=>Y!==w.id))}),t.jsx("span",{children:w.name})]},w.id)),v.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function Fn({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function rj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:p,onSave:h}){const{t:m}=Ze(),_=i?"server_name":"serverName",j=i?"allow_insecure":"allowInsecure",g=si(d),[v,w]=f.useState(String((s==null?void 0:s[_])??"")),[z,Y]=f.useState(String((s==null?void 0:s.dest)??"")),[P,K]=f.useState(String((s==null?void 0:s.server_port)??"443")),[C,B]=f.useState(String((s==null?void 0:s.xver)??"0")),[U,O]=f.useState(String((s==null?void 0:s.private_key)??"")),[ee,ie]=f.useState(String((s==null?void 0:s.public_key)??"")),[oe,E]=f.useState(String((s==null?void 0:s.short_id)??"")),[$,ne]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[he,N]=f.useState(String((s==null?void 0:s.cert_mode)??"self")),[R,te]=f.useState(String((s==null?void 0:s.provider)??"")),[M,re]=f.useState(String((s==null?void 0:s.dns_env)??"")),[A,J]=f.useState(String((s==null?void 0:s.cert_file)??"")),[x,W]=f.useState(String((s==null?void 0:s.key_file)??"")),[H,S]=f.useState(()=>{const we=s==null?void 0:s.reject_unknown_sni;return we===1||we===!0||String(we)==="1"||String(we)==="true"}),[Q,pe]=f.useState(String((s==null?void 0:s.ech)??"")),[me,Se]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[ke,Ae]=f.useState(String((s==null?void 0:s.ech_key)??"")),[lt,Ge]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Ke,Ct]=f.useState(()=>{const we=s==null?void 0:s[j];return we===1||we===!0||String(we)==="1"||String(we)==="true"}),Nt=we=>{we.preventDefault();const Le={...s??{},[_]:v,[j]:i?Ke?1:0:Ke,fingerprint:$};o===2&&(Le.dest=z,Le.server_port=P,Le.xver=Number(C)||0,Le.private_key=U,Le.public_key=ee,Le.short_id=oe,Le.ech=Q,Le.ech_server_name=me,Le.ech_key=ke,Le.ech_config=lt),o===1&&g&&(Le.cert_mode=he,Le.provider=R,Le.dns_env=M,Le.cert_file=A,Le.key_file=x,Le.reject_unknown_sni=H?"1":"0"),h(Le)};return t.jsxs("form",{onSubmit:Nt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.sni")}),t.jsx("input",{className:"config-input",value:v,onChange:we=>w(we.target.value),placeholder:m(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dest")}),t.jsx("input",{className:"config-input",value:z,onChange:we=>Y(we.target.value),placeholder:m("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.servicePort")}),t.jsx("input",{className:"config-input",value:P,onChange:we=>K(we.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:C,onChange:we=>B(we.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.privateKey")}),t.jsx("input",{className:"config-input",value:U,onChange:we=>O(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.publicKey")}),t.jsx("input",{className:"config-input",value:ee,onChange:we=>ie(we.target.value),placeholder:m("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.shortId")}),t.jsx("input",{className:"config-input",value:oe,onChange:we=>E(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.fingerprint")}),t.jsx("select",{className:"config-input",value:$,onChange:we=>ne(we.target.value),children:X0.map(we=>t.jsx("option",{value:we,children:we},we))})]}),o===1&&g?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certMode")}),t.jsxs("select",{className:"config-input",value:he,onChange:we=>N(we.target.value),children:[t.jsx("option",{value:"self",children:m("node.certModeSelf")}),t.jsx("option",{value:"http",children:m("node.certModeHttp")}),t.jsx("option",{value:"dns",children:m("node.certModeDns")}),t.jsx("option",{value:"none",children:m("node.certModeNone")})]})]}),he==="dns"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:R,onChange:we=>te(we.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:M,onChange:we=>re(we.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,he!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.certFile")}),t.jsx("input",{className:"config-input",value:A,onChange:we=>J(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.keyFile")}),t.jsx("input",{className:"config-input",value:x,onChange:we=>W(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsx(Fn,{label:m("node.rejectUnknownSni"),checked:H,onChange:S})]}):null,t.jsx(Fn,{label:m("node.allowInsecure"),checked:Ke,onChange:Ct}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.ech")}),t.jsxs("select",{className:"config-input",value:Q,onChange:we=>pe(we.target.value),children:[t.jsx("option",{value:"",children:m("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:m("node.echCustom")})]})]}),Q==="cloudflare"?t.jsx("div",{className:"config-warning",children:m("node.echCloudflareHelp")}):null,Q==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echServerName")}),t.jsx("input",{className:"config-input",value:me,onChange:we=>Se(we.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echKey")}),t.jsx("input",{className:"config-input",value:ke,onChange:we=>Ae(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:m("node.echConfig")}),t.jsx("input",{className:"config-input",value:lt,onChange:we=>Ge(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:p,children:m("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function cj({draft:s,set:i,groups:o,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:_}){const{t:j}=Ze(),g=String(s._type),v=si(g),w=Xe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:j("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"name"),onChange:z=>i("name",z.target.value),placeholder:j("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Xe(s,"rate","1"),onChange:z=>i("rate",Number(z.target.value))})]})]}),t.jsx(oj,{value:s.tags??[],onChange:z=>i("tags",z),label:j("node.tags")}),t.jsx(Ch,{options:o.map(z=>({id:z.id,name:z.name})),value:s.group_id??[],onChange:z=>i("group_id",z),label:j("node.permissionGroups"),actionText:j("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"host"),onChange:z=>i("host",z.target.value),placeholder:j("node.addressPlaceholder")})]}),v?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.listenIp")}),t.jsx("input",{className:"config-input",value:Xe(s,"listen_ip"),onChange:z=>i("listen_ip",z.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?j("node.editConfig"):void 0,onAction:()=>{const z=g==="vmess"?"tlsSettings":"tls_settings";h(j("node.connectionSecurityConfig"),z)}}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls","0"),onChange:z=>{const Y=Number(z.target.value);i("tls",Y);const P=g==="vmess"?"tlsSettings":"tls_settings";Y!==0&&!s[P]&&i(P,{})},children:[t.jsx("option",{value:"0",children:j("node.none")}),t.jsx("option",{value:"1",children:j("node.useTls")}),g!=="vmess"&&t.jsx("option",{value:"2",children:j("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.sni")}),t.jsx("input",{className:"config-input",value:Xe(s,"server_name"),onChange:z=>i("server_name",z.target.value),placeholder:j("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"port"),onChange:z=>i("port",z.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"server_port"),onChange:z=>i("server_port",z.target.value),placeholder:"443"})]})]}),v?t.jsx(gj,{draft:s,set:i,onOpenJson:h,onOpenTransportConfig:_,onOpenSecurityConfig:()=>h(j("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(g)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:j("node.transportProtocol"),required:!0,actionText:j("node.editConfig"),onAction:_}),t.jsxs("select",{className:"config-input",value:w,onChange:z=>{i("network",z.target.value);const Y=g==="vmess"?"networkSettings":"network_settings";s[Y]||i(Y,{})},children:[g==="vmess"&&G0.map(z=>t.jsx("option",{value:z,children:z},z)),g==="trojan"&&Tx.map(z=>t.jsx("option",{value:z,children:z},z)),g==="vless"&&Y0.map(z=>t.jsx("option",{value:z,children:z},z))]})]}):null,g==="trojan"&&t.jsx(uj,{draft:s,set:i}),g==="shadowsocks"&&t.jsx(pj,{draft:s,set:i,onOpenJson:h}),g==="hysteria"&&t.jsx(mj,{draft:s,set:i}),g==="tuic"&&t.jsx(fj,{draft:s,set:i}),g==="vless"&&t.jsx(hj,{draft:s,set:i,onOpenJson:h}),g==="anytls"&&t.jsx(xj,{draft:s,set:i,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:j("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:z=>i("parent_id",z.target.value?Number(z.target.value):null),children:[t.jsx("option",{value:"",children:j("node.none")}),p.filter(z=>z.id!==s.id&&!z.parent_id).map(z=>t.jsx("option",{value:z.id,children:z.name},z.id))]})]}),t.jsx(Ch,{options:d.map(z=>({id:z.id,name:z.remarks})),value:s.route_id??[],onChange:z=>i("route_id",z),label:j("node.routingGroups")})]})]})}function dj({draft:s,set:i,onCancel:o,onSave:d}){const p=String(s._type),h=String(s.network??"tcp"),m=W0(p),_=s[m],j=F0(_)?J0(_):P0(p,h);return t.jsx(Mx,{initialValue:j,onCancel:o,onSave:g=>{i(m,g),d()}})}function uj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function pj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze(),p=V0(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:h=>i("cipher",h.target.value),children:Ex.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:h=>i("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>i("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>i("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function mj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Xe(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function fj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(Fn,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(Fn,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function hj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:p=>i("flow",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.encryption"),actionText:Xe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:p=>i("encryption",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function xj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Fn,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>i("insecure",p?1:0)})]})}function gj({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:p}){const{t:h}=Ze(),m=Xe(s,"protocol"),_=Nh(m),j=g=>{if(i("protocol",g),!g){i("tls",0),i("network","tcp");return}wh.includes(g)?(i("tls",1),s.tls_settings||i("tls_settings",{})):g==="shadowsocks"?i("tls",0):g==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const v=Nh(g);(v.length===0||!v.includes(Xe(s,"network","tcp")))&&i("network","tcp"),g!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),g!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),g!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:m,onChange:g=>j(g.target.value),children:[t.jsx("option",{value:"",children:h("node.selectNodeProtocol")}),$0.map(g=>t.jsx("option",{value:g,children:g},g))]})]}),m?t.jsxs(t.Fragment,{children:[I0(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:h("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?h("node.editConfig"):void 0,onAction:p}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls",wh.includes(m)?"1":"0"),onChange:g=>{const v=Number(g.target.value);i("tls",v),v!==0&&!s.tls_settings&&i("tls_settings",{})},children:[ej(m)?t.jsx("option",{value:"0",children:h("node.none")}):null,t.jsx("option",{value:"1",children:h("node.useTls")}),tj(m)?t.jsx("option",{value:"2",children:h("node.reality")}):null]})]}):null,nj(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:h("node.transportProtocol"),required:!0,actionText:h("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:_.includes(Xe(s,"network","tcp"))?Xe(s,"network","tcp"):"tcp",onChange:g=>{i("network",g.target.value),s.network_settings||i("network_settings",{})},children:_.map(g=>t.jsx("option",{value:g,children:g},g))})]}):null]}):null,m==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.encryption"),actionText:Xe(s,"encryption")?h("node.editConfig"):void 0,onAction:()=>o(h("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:g=>i("encryption",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:g=>i("flow",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),m==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:h("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:g=>i("cipher",g.target.value),children:Ex.map(g=>t.jsx("option",{value:g,children:g},g))})]}),m==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:g=>i("up_mbps",Number(g.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:g=>i("down_mbps",Number(g.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:g=>i("obfs",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Xe(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:g=>i("obfs_password",g.target.value),placeholder:h("node.autoGenHelp")})]}):null]})]}),m==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:g=>i("udp_relay_mode",g.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(Te,{label:h("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:g=>i("congestion_control",g.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Fn,{label:h("node.disableSni"),checked:s.disable_sni===1,onChange:g=>i("disable_sni",g?1:0)}),t.jsx(Fn,{label:h("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:g=>i("zero_rtt_handshake",g?1:0)})]}),m==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(Te,{label:h("node.paddingScheme"),actionText:h("node.editConfig"),onAction:()=>o(h("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const zh={vmess:Uv,vless:Qv,trojan:zd,shadowsocks:Bo,hysteria:Mv,tuic:xv,anytls:ms,v2node:sh,zicnode:sh},bj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},yj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Ya(s){return bj[s]??yj}function vj({draft:s,config:i,onCopy:o,t:d}){const p=Number(s.id??0),h=p>0?sj(p,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),p>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:h}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(h),children:[t.jsx(cs,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function jj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState([]),[j,g]=f.useState(null),[v,w]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState(1),[oe,E]=f.useState(10),[$,ne]=f.useState(!1),[he,N]=f.useState({}),[R,te]=f.useState({apiHost:Qd,apiKey:""}),[M,re]=f.useState(!1),[A,J]=f.useState(""),[x,W]=f.useState(null),[H,S]=f.useState(null),[Q,pe]=f.useState(null),me=(L,ce)=>{L.dataTransfer.effectAllowed="move",S(ce)},Se=(L,ce)=>{if(L.preventDefault(),H===null||H===ce)return;const se=[...o],Ue=se[H];se.splice(H,1),se.splice(ce,0,Ue),S(ce),d(se)},ke=()=>{S(null)},Ae=(L,ce)=>{$&&pe(ce)},lt=L=>{if(!$||Q===null)return;L.cancelable&&L.preventDefault();const ce=L.touches[0],se=document.elementFromPoint(ce.clientX,ce.clientY);if(!se)return;const Ue=se.closest(".mobile-node-card");if(!Ue)return;const Je=Ue.getAttribute("data-index");if(Je===null)return;const et=Number(Je);if(et!==Q&&et>=0&&et<o.length){const ft=[...o],ct=ft[Q];ft.splice(Q,1),ft.splice(et,0,ct),pe(et),d(ft)}},Ge=()=>{pe(null)};f.useEffect(()=>{ie(1)},[A,oe]);const Ke=o.filter(L=>{const ce=A.toLowerCase().trim();return ce?L.name.toLowerCase().includes(ce)||L.host.toLowerCase().includes(ce)||String(L.id).includes(ce)||L.type.toLowerCase().includes(ce):!0}),Ct=Math.ceil(Ke.length/oe),Nt=Ke.slice((ee-1)*oe,ee*oe);function we(L,ce){return ce<=7?Array.from({length:ce},(se,Ue)=>Ue+1):L<=4?[1,2,3,4,5,"...",ce]:L>=ce-3?[1,"...",ce-4,ce-3,ce-2,ce-1,ce]:[1,"...",L-1,L,L+1,"...",ce]}const Le=we(ee,Ct),tn=async()=>{var L,ce;K(!0),B(""),O("");try{const se={};o.forEach((Ue,Je)=>{se[Ue.type]||(se[Ue.type]={}),se[Ue.type][String(Ue.id)]=Je+1}),await d0(se),(L=window.showToast)==null||L.call(window,i("node.saveSortSuccess"),"success"),ne(!1),await Ee()}catch(se){B(se instanceof Error?se.message:i("node.saveSortFailed")),(ce=window.showToast)==null||ce.call(window,se instanceof Error?se.message:i("node.saveSortFailed"),"error")}finally{K(!1)}},Yt=async()=>{ne(!1),await je()},un=()=>Ke.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===1,onClick:()=>ie(L=>Math.max(L-1,1)),children:"<"}),Le.map((L,ce)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${ce}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ee===L?"active":""}`,onClick:()=>ie(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===Ct||Ct===0,onClick:()=>ie(L=>Math.min(L+1,Ct)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:oe,onChange:L=>E(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[gt,Xt]=f.useState(null),[Wt,zt]=f.useState(!1),[pn,T]=f.useState(""),[be,qe]=f.useState(!1),[ye,rt]=f.useState(!1);async function G(L){var se,Ue;L.preventDefault();const ce=pn.trim();if(!(!ce||!j)){qe(!0),B(""),O("");try{await hx({name:ce});const Je=await ps();h(Je);const et=Je.filter(ft=>ft.name===ce).sort((ft,ct)=>ct.id-ft.id)[0];if(et){const ft=j.group_id??[];ft.includes(et.id)||mn("group_id",[...ft,et.id])}T(""),zt(!1),(se=window.showToast)==null||se.call(window,i("node.groupCreateSuccess"),"success")}catch(Je){B(Je instanceof Error?Je.message:i("node.groupCreateFailed")),(Ue=window.showToast)==null||Ue.call(window,Je instanceof Error?Je.message:i("node.groupCreateFailed"),"error")}finally{qe(!1)}}}const Ne=(L,ce)=>{if(!j)return;let se=j[ce];if(typeof se=="string"&&se.trim())try{se=JSON.parse(se)}catch{}Xt({title:L,key:ce,value:se&&typeof se=="object"?se:{}})},je=f.useCallback(async()=>{var L,ce,se,Ue;Y(!0),B("");try{const[Je,et,ft,ct]=await Promise.all([xh(),ps(),gx(),mx()]);d(Je.data),h(et),_(ft),te({apiHost:ij((L=ct.site)==null?void 0:L.app_url),apiKey:Ad((ce=ct.server)==null?void 0:ce.server_token)}),re(lj(((se=ct.subscribe)==null?void 0:se.device_hwid_available)??((Ue=ct.subscribe)==null?void 0:Ue.device_hwid_enable)))}catch(Je){B(Je instanceof Error?Je.message:i("knowledge.loadFailed"))}finally{Y(!1)}},[]),Ee=f.useCallback(async()=>{try{const L=await xh();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function Ie(L){var se;const ce=await Va(L);(se=window.showToast)==null||se.call(window,i(ce?"node.installCopied":"common.copyFailed"),ce?"success":"error")}f.useEffect(()=>{if(!Ot()){s.replace("/login");return}je()},[je,s]);function Ve(L){g(kh(L)),w(null),B(""),O("")}function Ye(L){g(kh(L.type,L)),B(""),O("")}function De(L){!M||Number(L.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function mt(L,ce){const se=Number(L.online??0),Ue=M&&se>0,Je=`${ce==="mobile"?"mobile-badge-pill":"online-badge"}${Ue?" online-badge-link":""}`,et=ce==="mobile"?12:13,ft={...ce==="mobile"?{marginRight:4}:{},color:se>0?"#10b981":"var(--muted)",opacity:se>0?1:.6},ct=t.jsxs(t.Fragment,{children:[t.jsx(dx,{size:et,style:ft}),se]});return Ue?t.jsx("button",{className:Je,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>De(L),children:ct}):t.jsx("span",{className:Je,children:ct})}async function ri(L){var et,ft,ct;if(L.preventDefault(),!j)return;K(!0),B(""),O("");const ce=String(j._type),se={...j};if(si(ce)&&!Ad(se.protocol)){B(i("node.protocolRequired")),(et=window.showToast)==null||et.call(window,i("node.protocolRequired"),"error"),K(!1);return}for(const Oe of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete se[Oe];if(se.padding_scheme!==void 0&&se.padding_scheme!==null&&typeof se.padding_scheme!="string"&&(se.padding_scheme=JSON.stringify(se.padding_scheme)),se.padding_scheme)try{const Oe=JSON.parse(String(se.padding_scheme));if(typeof Oe!="object"||Oe===null)throw new Error("Invalid JSON array or object")}catch(Oe){B("Invalid Padding Scheme configuration: "+(Oe instanceof Error?Oe.message:"JSON error")),K(!1);return}const Ue=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const Oe of Ue)(se[Oe]===""||se[Oe]===null||se[Oe]===void 0)&&delete se[Oe];const Je=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const Oe of Je){const Hn=se[Oe];(Hn==null||typeof Hn=="object"&&Object.keys(Hn).length===0)&&delete se[Oe]}se.port!==void 0&&(se.port=Number(se.port)),se.server_port!==void 0&&(se.server_port=Number(se.server_port)),se.tls!==void 0&&(se.tls=Number(se.tls)),se.rate!==void 0&&(se.rate=Number(se.rate));try{await s0(ce,se),g(null),(ft=window.showToast)==null||ft.call(window,i("node.saveSuccess"),"success"),await Ee()}catch(Oe){B(Oe instanceof Error?Oe.message:i("node.saveFailed")),(ct=window.showToast)==null||ct.call(window,Oe instanceof Error?Oe.message:i("node.saveFailed"),"error")}finally{K(!1)}}async function vl(L){const ce=[...o];d(se=>se.map(Ue=>Ue.id===L.id&&Ue.type===L.type?{...Ue,show:L.show?0:1}:Ue));try{await r0(L.type,L.id,L.show?0:1),await Ee()}catch(se){d(ce),B(se instanceof Error?se.message:i("node.updateFailed"))}}async function Wa(L){var ce,se;try{await c0(L.type,L.id),(ce=window.showToast)==null||ce.call(window,i("node.copySuccess"),"success"),await Ee()}catch(Ue){B(Ue instanceof Error?Ue.message:i("node.copyFailed")),(se=window.showToast)==null||se.call(window,Ue instanceof Error?Ue.message:i("node.copyFailed"),"error")}}async function Gn(L){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:i("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var Ue,Je;const se=[...o];d(et=>et.filter(ft=>!(ft.id===L.id&&ft.type===L.type))),B("");try{await o0(L.type,L.id),(Ue=window.showToast)==null||Ue.call(window,i("node.deleteSuccess"),"success"),await Ee()}catch(et){d(se),B(et instanceof Error?et.message:i("node.deleteFailed")),(Je=window.showToast)==null||Je.call(window,et instanceof Error?et.message:i("node.deleteFailed"),"error")}}})}const mn=(L,ce)=>g(se=>se?{...se,[L]:ce}:null),Yn=j?String(j._type):"",nn=aj(Yn);return t.jsxs(Gt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>w(v?null:"show"),title:i("node.createNode"),children:t.jsx(Nn,{size:18})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Od.map(L=>{const ce=Ya(L.value),se=zh[L.value]||Go;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ve(L.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:A,onChange:L=>J(L.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${$?"success-btn":""}`,type:"button",onClick:$?tn:()=>ne(!0),disabled:P,children:i($?P?"node.saving":"node.saveOrder":"node.editSortOrder")}),$&&t.jsx("button",{className:"ghost-button",type:"button",onClick:Yt,children:i("common.cancel")})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i($?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Nt.map(L=>{const ce=o.findIndex(se=>se.id===L.id&&se.type===L.type);return t.jsxs("tr",{draggable:$,onDragStart:se=>me(se,ce),onDragOver:se=>Se(se,ce),onDragEnd:ke,className:H===ce?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Ya(L.type).bg,color:Ya(L.type).text,border:`1px solid ${Ya(L.type).border}`},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void vl(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:mt(L,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const se=L.group_id??[],Ue=he[`${L.type}-${L.id}`],Je=se.map(ct=>{const Oe=p.find(Hn=>Number(Hn.id)===Number(ct));return t.jsx("span",{className:"tag",children:(Oe==null?void 0:Oe.name)??`#${ct}`},ct)});if(se.length<=3||Ue)return t.jsxs(t.Fragment,{children:[Je,se.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>N(ct=>({...ct,[`${L.type}-${L.id}`]:!1})),children:i("node.collapse")})]});const et=Je.slice(0,3),ft=se.length-3;return t.jsxs(t.Fragment,{children:[et,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>N(ct=>({...ct,[`${L.type}-${L.id}`]:!0})),children:["+",ft,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:se.length})}),Je]})]})]})})()})}),t.jsx("td",{children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ss,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),W(null)},children:[t.jsx(Lt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wa(L),W(null)},children:[t.jsx(cs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(L),W(null)},children:[t.jsx(Bt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!z&&Ke.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),un()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>w(v?null:"show"),title:i("node.createNode"),children:t.jsx(Nn,{size:20})}),v!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>w(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Od.map(L=>{const ce=Ya(L.value),se=zh[L.value]||Go;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ve(L.value),w(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:A,onChange:L=>J(L.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${$?"active":""}`,type:"button",onClick:()=>ne(!$),title:i("node.editSortOrder"),children:t.jsx(ss,{size:20})})]}),$&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:Yt,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void tn(),disabled:P,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(P?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Nt.map(L=>{const ce=o.findIndex(se=>se.id===L.id&&se.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${H===ce||Q===ce?"dragging":""}`,draggable:$,onDragStart:se=>me(se,ce),onDragOver:se=>Se(se,ce),onDragEnd:ke,onTouchStart:se=>Ae(se,ce),onTouchMove:lt,onTouchEnd:Ge,"data-index":ce,style:$?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ss,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void vl(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),W(null)},children:[t.jsx(Lt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wa(L),W(null)},children:[t.jsx(cs,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Gn(L),W(null)},children:[t.jsx(Bt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Ya(L.type).bg,color:Ya(L.type).text,border:`1px solid ${Ya(L.type).border}`},children:L.id}),mt(L,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!z&&Ke.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),un()]}),j!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:j.id?i("node.editNodeTitle",{type:nn}):i("node.createNodeTitle",{type:nn})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:nn})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ri,children:[t.jsx(cj,{draft:j,set:mn,groups:p,routes:m,nodes:o,onOpenJson:Ne,onAddGroup:()=>zt(!0),onOpenTransportConfig:()=>rt(!0)}),si(Yn)?t.jsx(vj,{draft:j,config:R,onCopy:L=>void Ie(L),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(_n,{size:16}),i(P?"node.saving":"common.save")]})]})]})]})}),gt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:gt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(gt.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Xt(null),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(gt.key)?t.jsx(rj,{initialValue:gt.value,isSnakeCase:gt.key==="tls_settings",tlsMode:Number((j==null?void 0:j.tls)??0),nodeType:String((j==null?void 0:j._type)??""),onCancel:()=>Xt(null),onSave:L=>{mn(gt.key,L),Xt(null)}}):t.jsx(Mx,{initialValue:gt.value,onCancel:()=>Xt(null),onSave:L=>{mn(gt.key,L),Xt(null)}})})]})}),Wt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>zt(!1),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{onSubmit:G,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:pn,onChange:L=>T(L.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>zt(!1),disabled:be,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:be||!pn.trim(),children:i(be?"node.saving":"common.confirm")})]})]})]})}),ye&&j!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(j.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>rt(!1),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(dj,{draft:j,set:mn,onCancel:()=>rt(!1),onSave:()=>rt(!1)})})]})})]})}function wj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[j,g]=f.useState(!1),[v,w]=f.useState(""),z=f.useCallback(async()=>{_(!0),w("");try{d(await ps())}catch(C){w(C instanceof Error?C.message:i("serverGroup.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}z()},[z,s]);function Y(C){h({id:C==null?void 0:C.id,name:(C==null?void 0:C.name)??""}),w("")}async function P(C){var B;if(C.preventDefault(),!!p){g(!0),w("");try{await hx(p),h(null),(B=window.showToast)==null||B.call(window,i("serverGroup.saveSuccess"),"success"),await z()}catch(U){w(U instanceof Error?U.message:i("serverGroup.saveFailed"))}finally{g(!1)}}}async function K(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,O;w("");try{await p1(C),(U=window.showToast)==null||U.call(window,i("serverGroup.deleteSuccess"),"success"),await z()}catch(ee){w(ee instanceof Error?ee.message:i("serverGroup.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Gt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Nn,{size:16}),i("serverGroup.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(vt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(us,{size:14}),C.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Go,{size:14}),C.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(C),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(C.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},C.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:C=>h({...p,name:C.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(_n,{size:16}),i(j?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Nj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function _j(s){var i;return((i=xx.find(o=>o.value===s))==null?void 0:i.label)??s}function Sj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[j,g]=f.useState(!1),[v,w]=f.useState(""),z=f.useCallback(async()=>{_(!0),w("");try{d(await gx())}catch(C){w(C instanceof Error?C.message:i("serverRoute.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}z()},[z,s]);function Y(C){h(Nj(C)),w("")}async function P(C){var U;if(C.preventDefault(),!p)return;g(!0),w("");const B=p.action==="default_out"?[]:p.match.split(`
`).map(O=>O.trim()).filter(Boolean);try{await m1({id:p.id,remarks:p.remarks,match:B,action:p.action,action_value:p.action_value||null}),h(null),(U=window.showToast)==null||U.call(window,i("serverRoute.saveSuccess"),"success"),await z()}catch(O){w(O instanceof Error?O.message:i("serverRoute.saveFailed"))}finally{g(!1)}}async function K(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,O;w("");try{await f1(C),(U=window.showToast)==null||U.call(window,i("serverRoute.deleteSuccess"),"success"),await z()}catch(ee){w(ee instanceof Error?ee.message:i("serverRoute.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Gt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Nn,{size:16}),i("serverRoute.add")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,m&&o.length===0?t.jsx(vt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(C.match)?C.match:[]).slice(0,3).map((B,U)=>t.jsx("span",{className:"tag",children:B},U)),Array.isArray(C.match)&&C.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",C.match.length-3]}):null,!Array.isArray(C.match)||C.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:_j(C.action)})}),t.jsx("td",{children:C.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(C),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(C.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},C.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:C=>h({...p,remarks:C.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:C=>h({...p,action:C.target.value}),children:xx.map(C=>t.jsx("option",{value:C.value,children:C.label},C.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:C=>h({...p,match:C.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:C=>h({...p,action_value:C.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(_n,{size:16}),i(j?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function kj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function Cj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),force_update:s.force_update}}function It(s){return s==null?"—":wn(s)}function zj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Tj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[j,g]=f.useState(!0),[v,w]=f.useState(!1),[z,Y]=f.useState(""),[P,K]=f.useState(""),[C,B]=f.useState(null),[U,O]=f.useState(null),ee=(x,W)=>{x.dataTransfer.effectAllowed="move",B(W)},ie=(x,W)=>{if(x.preventDefault(),C===null||C===W)return;const H=[...o],S=H[C];H.splice(C,1),H.splice(W,0,S),B(W),d(H)},oe=async()=>{B(null);try{await fh(o.map(x=>x.id)),await he()}catch(x){Y(x instanceof Error?x.message:i("plan.sortFailed")),await he()}},E=(x,W)=>{O(W)},$=x=>{if(U===null)return;const W=x.touches[0],H=document.elementFromPoint(W.clientX,W.clientY);if(!H)return;const S=H.closest("tr, [data-index]");if(!S)return;const Q=S.getAttribute("data-index");if(Q===null)return;const pe=Number(Q);if(pe!==U&&pe>=0&&pe<o.length){const me=[...o],Se=me[U];me.splice(U,1),me.splice(pe,0,Se),O(pe),d(me)}},ne=async()=>{if(U!==null){O(null);try{await fh(o.map(x=>x.id)),await he()}catch(x){Y(x instanceof Error?x.message:i("plan.sortFailed")),await he()}}},he=f.useCallback(async()=>{g(!0),Y("");try{const[x,W]=await Promise.all([yl(),ps()]);d(x),h(W)}catch(x){Y(x instanceof Error?x.message:i("plan.loadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}he()},[he,s]);function N(x){_(kj(x)),Y(""),K("")}async function R(x){var W,H;if(x.preventDefault(),!!m){w(!0),Y(""),K("");try{await h1(Cj(m)),_(null),(W=window.showToast)==null||W.call(window,i("plan.saveSuccess"),"success"),await he()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.saveFailed"),"error")}finally{w(!1)}}}async function te(x,W){var H;try{await mh(x,{show:W?0:1}),await he()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function M(x,W){var H;try{await mh(x,{renew:W?0:1}),await he()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function re(x){var W;(W=window.showConfirm)==null||W.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var H,S;Y(""),K("");try{await x1(x),(H=window.showToast)==null||H.call(window,i("plan.deleteSuccess"),"success"),await he()}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:i("plan.deleteFailed"),"error")}}})}function A(x){var W;return((W=p.find(H=>H.id===x))==null?void 0:W.name)??`#${x}`}function J(x,W){_(H=>H&&{...H,[x]:W})}return t.jsxs(Gt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:he,disabled:j,children:[t.jsx(kt,{size:16}),i(j?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(),children:[t.jsx(Nn,{size:16}),i("plan.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,P?t.jsx("div",{className:"form-success",children:P}):null,j&&o.length===0?t.jsx(vt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((x,W)=>t.jsxs("tr",{draggable:!0,onDragStart:H=>ee(H,W),onDragOver:H=>ie(H,W),onDragEnd:oe,onTouchStart:H=>E(H,W),onTouchMove:$,onTouchEnd:ne,"data-index":W,className:C===W||U===W?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ss,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),te(x.id,x.show)},title:x.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:x.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(us,{size:14}),x.count??0]})}),t.jsx("td",{children:A(x.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[x.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:It(x.month_price)})]}),x.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:It(x.quarter_price)})]}),x.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:It(x.half_year_price)})]}),x.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:It(x.year_price)})]}),x.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:It(x.two_year_price)})]}),x.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:It(x.three_year_price)})]}),x.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:It(x.onetime_price)})]}),x.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:It(x.reset_price)})]})]})}),t.jsxs("td",{children:[x.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:H=>{H.stopPropagation(),N(x)},children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:H=>{H.stopPropagation(),re(x.id)},children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},x.id)),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((x,W)=>t.jsxs("div",{className:`mobile-node-card ${C===W||U===W?"dragging":""}`,draggable:!0,onDragStart:H=>ee(H,W),onDragOver:H=>ie(H,W),onDragEnd:oe,onTouchStart:H=>E(H,W),onTouchMove:$,onTouchEnd:ne,"data-index":W,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ss,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:x.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),N(x)},children:[t.jsx(Lt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),re(x.id)},children:[t.jsx(Bt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),te(x.id,x.show)},title:x.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(us,{size:12,style:{marginRight:4}}),x.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:A(x.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[x.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[x.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:It(x.month_price)})]}),x.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:It(x.quarter_price)})]}),x.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:It(x.half_year_price)})]}),x.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:It(x.year_price)})]}),x.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:It(x.two_year_price)})]}),x.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:It(x.three_year_price)})]}),x.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:It(x.onetime_price)})]}),x.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:It(x.reset_price)})]})]})]},x.id)),!j&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:x=>J("name",x.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:x=>J("content",x.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:x=>J("group_id",x.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),p.map(x=>t.jsx("option",{value:x.id,children:x.name},x.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:x=>J("transfer_enable",x.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:x=>J("device_limit",x.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:x=>J("speed_limit",x.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:x=>J("capacity_limit",x.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:x=>J("reset_traffic_method",x.target.value),children:zj(i).map(x=>t.jsx("option",{value:x.value,children:x.label},x.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:x=>J("month_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:x=>J("quarter_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:x=>J("half_year_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:x=>J("year_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:x=>J("two_year_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:x=>J("three_year_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:x=>J("onetime_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:x=>J("reset_price",x.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:x=>J("force_update",String(x.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(_n,{size:16}),i(v?"plan.saving":"common.save")]})]})]})]})}):null]})}const md="模糊",Th={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},Eh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Mh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${p} ${h}:${m}`}function Dh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),_=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${p} ${h}:${m}:${_}`}function Oh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Rn(s){return`${wn(Number(s??0))} ₫`}const Dx="adminzic_user_cache";function Ej(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Dx);return s?JSON.parse(s):{}}catch{return{}}}function Mj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Dx,JSON.stringify(s))}catch{}}const li=(s,i)=>`${s}:${i}`;function Dj(){var T,be,qe,ye,rt;const s=Dt(),i=Wn(),{t:o}=Ze(),d=f.useCallback(G=>{switch(G){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${G}`,cls:""}}},[o]),p=f.useCallback(G=>{const Ne=`order.period.${G}`,je=o(Ne);return je===Ne?Eh[G]??G:je},[o]),[h,m]=f.useState([]),[_,j]=f.useState([]),[g,v]=f.useState({}),[w,z]=f.useState(0),[Y,P]=f.useState(1),[K]=f.useState(15),[C,B]=f.useState(""),[U,O]=f.useState("trade_no"),[ee,ie]=f.useState(!0),[oe,E]=f.useState(null),[$,ne]=f.useState(!1),[he,N]=f.useState(""),[R,te]=f.useState(""),[M,re]=f.useState(null),[A,J]=f.useState(null),[x,W]=f.useState(!1),[H,S]=f.useState(null),[Q,pe]=f.useState(!1),[me,Se]=f.useState(()=>Ej()),ke=f.useCallback((G,Ne)=>{const je=li(Ne,G);J(null),re(Ee=>Ee===je?null:je)},[]),Ae=f.useCallback((G,Ne)=>{const je=li(Ne,G);re(null),J(Ee=>Ee===je?null:je)},[]),lt=f.useCallback(G=>{const Ne=Number(G.coupon_id??0);return Ne?g[Ne]??`#${Ne}`:null},[g]);f.useEffect(()=>{if(!M&&!A)return;const G=()=>{re(null),J(null)},Ne=Ee=>{const Ie=Ee.target;Ie!=null&&Ie.closest(".order-dropdown-trigger, .order-dropdown-menu")||G()},je=Ee=>{Ee.key==="Escape"&&G()};return document.addEventListener("pointerdown",Ne),document.addEventListener("keydown",je),()=>{document.removeEventListener("pointerdown",Ne),document.removeEventListener("keydown",je)}},[M,A]),f.useEffect(()=>{const G=new Set;if(h.forEach(je=>{je.user_id&&!me[je.user_id]&&G.add(je.user_id),je.invite_user_id&&!me[je.invite_user_id]&&G.add(je.invite_user_id)}),H&&(H.user_id&&!me[H.user_id]&&G.add(H.user_id),H.invite_user_id&&!me[H.invite_user_id]&&G.add(H.invite_user_id)),G.size===0)return;const Ne=Array.from(G);Promise.allSettled(Ne.map(async je=>{try{const Ee=await vx(je);if(Ee&&Ee.data)return{id:je,email:Ee.data.email,invite_user:Ee.data.invite_user}}catch(Ee){console.error(`Failed to fetch user ${je}:`,Ee)}return null})).then(je=>{const Ee={};je.forEach(Ie=>{var Ve;if(Ie.status==="fulfilled"&&Ie.value){const Ye=Ie.value;Ee[Ye.id]={email:Ye.email,invite_user_email:((Ve=Ye.invite_user)==null?void 0:Ve.email)||null},Ye.invite_user&&(Ee[Ye.invite_user.id]={email:Ye.invite_user.email})}}),Object.keys(Ee).length>0&&Se(Ie=>{const Ve={...Ie,...Ee};return Mj(Ve),Ve})})},[h,H,me]);const Ge={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},Ke=f.useCallback(async(G=1,Ne,je)=>{var Ee,Ie;ie(!0),N("");try{let Ve;if(Ne)if(je==="email"){const mt=(Ee=(await Md(1,1,[{key:"email",condition:md,value:Ne}])).data)==null?void 0:Ee[0];if(!mt){m([]),z(0),ie(!1);return}Ve=[{key:"user_id",condition:"=",value:String(mt.id)}]}else if(je==="invite_user_email"){const mt=(Ie=(await Md(1,1,[{key:"email",condition:md,value:Ne}])).data)==null?void 0:Ie[0];if(!mt){m([]),z(0),ie(!1);return}Ve=[{key:"invite_user_id",condition:"=",value:String(mt.id)}]}else Ve=[{key:je||"trade_no",condition:je==="trade_no"||je==="user_id"||je==="invite_user_id"||je==="plan_id"||je==="status"?"=":md,value:Ne}];const Ye=await g1({current:G,pageSize:K,filter:Ve});m(Ye.data),z(Ye.total)}catch(Ve){N(Ve instanceof Error?Ve.message:o("order.loadFailed"))}finally{ie(!1)}},[K,o]),Ct=f.useCallback(G=>{const Ne=String(G);O("user_id"),B(Ne),W(!0),P(1),Ke(1,Ne,"user_id")},[Ke]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const G=new URLSearchParams(i.search),Ne=G.get("filter_email"),je=G.get("invite_user_email"),Ee=G.get("user_id")||G.get("filter_user_id");let Ie="",Ve="trade_no";Ee?(Ie=Ee,Ve="user_id",O("user_id"),B(Ee),W(!0)):Ne?(Ie=Ne,Ve="email",O("email"),B(Ne),W(!0)):je&&(Ie=je,Ve="invite_user_email",O("invite_user_email"),B(je),W(!0)),Ke(1,Ie,Ve),yl().then(j).catch(()=>{}),yx(1,1e3).then(Ye=>{const De={};Ye.data.forEach(mt=>{De[mt.id]=mt.code}),v(De)}).catch(()=>{})},[Ke,s,i.search]);function Nt(){P(1),Ke(1,C,U)}function we(){B(""),P(1),Ke(1)}function Le(G){P(G),Ke(G,C,U)}async function tn(G){var Ne,je;re(null),J(null),N(""),te("");try{await b1(G),(Ne=window.showToast)==null||Ne.call(window,o("order.paidSuccess"),"success"),await Ke(Y,C,U)}catch(Ee){(je=window.showToast)==null||je.call(window,Ee instanceof Error?Ee.message:o("order.paidFailed"),"error")}}async function Yt(G){var Ne,je;re(null),J(null),N(""),te("");try{await y1(G),(Ne=window.showToast)==null||Ne.call(window,o("order.cancelSuccess"),"success"),await Ke(Y,C,U)}catch(Ee){(je=window.showToast)==null||je.call(window,Ee instanceof Error?Ee.message:o("order.cancelFailed"),"error")}}async function un(G,Ne){var je,Ee;re(null),J(null),N(""),te("");try{await v1(G,Ne),(je=window.showToast)==null||je.call(window,o("order.commissionSuccess"),"success"),await Ke(Y,C,U)}catch(Ie){(Ee=window.showToast)==null||Ee.call(window,Ie instanceof Error?Ie.message:o("order.commissionFailed"),"error")}}async function gt(G){S(G),pe(!0);try{const Ne=await j1(G.id);Ne&&Ne.data&&S(Ne.data)}catch(Ne){console.error("Failed to fetch order detail:",Ne)}finally{pe(!1)}}function Xt(){var G;E({email:"",plan_id:(G=_[0])!=null&&G.id?String(_[0].id):"",period:"month_price",total_amount:"0"}),N(""),te("")}async function Wt(G){var Ne,je;if(G.preventDefault(),!!oe){ne(!0),N(""),te("");try{await bx({email:oe.email,plan_id:Number(oe.plan_id),period:oe.period,total_amount:Number(oe.total_amount)*100}),E(null),(Ne=window.showToast)==null||Ne.call(window,o("order.assignSuccess"),"success"),await Ke(Y,C,U)}catch(Ee){(je=window.showToast)==null||je.call(window,Ee instanceof Error?Ee.message:o("order.assignFailed"),"error")}finally{ne(!1)}}}const zt=Math.ceil(w/K),pn=H?lt(H):null;return t.jsxs(Gt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${x?"active":""}`,type:"button",onClick:()=>W(!x),children:[t.jsx(ds,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Xt,children:[t.jsx(Nn,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Ke(Y,C,U),disabled:ee,children:[t.jsx(kt,{size:16}),o(ee?"common.refreshing":"common.refresh")]})]}),x&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:U,onChange:G=>O(G.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input search-input",value:C,onChange:G=>B(G.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:G=>G.key==="Enter"&&Nt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Nt,children:[t.jsx(ds,{size:16}),o("order.filter")]}),C?t.jsxs("button",{className:"ghost-button",type:"button",onClick:we,children:[t.jsx(ot,{size:16}),o("order.clearFilter")]}):null]}),he?t.jsx("div",{className:"form-error",children:he}):null,R?t.jsx("div",{className:"form-success",children:R}):null,ee&&h.length===0?t.jsx(vt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ee?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[h.map(G=>{var Ye;const Ne=d(G.status),je=G.invite_user_id!==null,Ee=Ge[G.commission_status]??{label:`#${G.commission_status}`,dotClass:"pending"},Ie=lt(G),Ve=(Ye=me[G.user_id])==null?void 0:Ye.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>gt(G),title:o("order.detailsTitle"),children:Oh(G.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",G.id]}),t.jsx("span",{className:"order-type-pill",children:Th[G.type]??`#${G.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Ve?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ct(G.user_id),title:o("order.filterByUser"),children:Ve}):t.jsxs("span",{className:"order-subline",children:["ID: ",G.user_id]}),t.jsx("strong",{className:"order-plan-name",children:G.plan_name??`Plan #${G.plan_id}`}),t.jsx("span",{className:"period-capsule",children:p(G.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Rn(G.total_amount)}),Ie?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Ie]}):null,Number(G.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Rn(G.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{children:Ne.label}),G.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:De=>{De.stopPropagation(),ke(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),M===li("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:De=>De.stopPropagation(),onClick:De=>De.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),tn(G.trade_no)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),Yt(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[je?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Rn(G.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ee.dotClass}`}),t.jsx("span",{children:Ee.label}),G.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:De=>{De.stopPropagation(),Ae(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),A===li("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:De=>De.stopPropagation(),onClick:De=>De.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),un(G.trade_no,1)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),un(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Mh(G.created_at)})})]},G.trade_no)}),!ee&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),zt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>Le(Y-1),children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",zt]}),t.jsx("button",{className:"mini-button",disabled:Y>=zt,onClick:()=>Le(Y+1),children:t.jsx(ba,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(G=>{var Ye;const Ne=d(G.status),je=G.invite_user_id!==null,Ee=Ge[G.invite_user_id!==null?G.commission_status:0]??{label:`#${G.commission_status}`,dotClass:"pending"},Ie=(Ye=me[G.user_id])==null?void 0:Ye.email,Ve=lt(G);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>gt(G),children:Oh(G.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",G.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ne.label}),G.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:De=>{De.stopPropagation(),ke(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),M===li("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:De=>De.stopPropagation(),onClick:De=>De.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),tn(G.trade_no)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),Yt(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Ie?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ct(G.user_id),children:Ie}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Th[G.type]??`#${G.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:G.plan_name??`Plan #${G.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(G.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Rn(G.total_amount)})]}),Ve?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Ve})})]}):null,Number(G.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Rn(G.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:je?t.jsx("strong",{children:Rn(G.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),je&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ee.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ee.label}),G.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:De=>{De.stopPropagation(),Ae(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===li("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:De=>De.stopPropagation(),onClick:De=>De.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),un(G.trade_no,1)},children:[t.jsx(zo,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),un(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Mh(G.created_at)})]})]})]},G.trade_no)}),!ee&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,zt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>Le(Y-1),children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",zt]}),t.jsx("button",{className:"mini-button",disabled:Y>=zt,onClick:()=>Le(Y+1),children:t.jsx(ba,{size:16})})]}):null]})]}),H?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(ot,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:Q?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(vt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(T=me[H.user_id])!=null&&T.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{S(null),Ct(H.user_id)},title:"Filter by this user",children:me[H.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:H.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:p(H.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(H.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:H.plan_name??`Plan #${H.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:H.callback_no||"-"})]}),pn?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:pn})]}):null]}),H.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(be=me[H.invite_user_id])!=null&&be.email||(qe=me[H.user_id])!=null&&qe.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const G=String(H.invite_user_id);O("invite_user_id"),B(G),W(!0),S(null),Ke(1,G,"invite_user_id")},title:"Filter by this inviter",children:((ye=me[H.invite_user_id])==null?void 0:ye.email)||((rt=me[H.user_id])==null?void 0:rt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Rn(H.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Ge[H.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Ge[H.commission_status]??{label:`#${H.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Rn(H.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Rn(H.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Rn(H.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Rn(H.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Rn(H.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Dh(H.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Dh(H.updated_at)})]})]})]})})]})}):null,oe?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>E(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Wt,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:oe.email,onChange:G=>E({...oe,email:G.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:oe.plan_id,onChange:G=>E({...oe,plan_id:G.target.value}),children:_.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:oe.period,onChange:G=>E({...oe,period:G.target.value}),children:Object.entries(Eh).map(([G,Ne])=>t.jsx("option",{value:G,children:Ne},G))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:oe.total_amount,onChange:G=>E({...oe,total_amount:G.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>E(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:$,children:[t.jsx(_n,{size:16}),o($?"order.assigning":"order.assign")]})]})]})]})}):null]})}function Mo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Do(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function fd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Oj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,_]=f.useState(1),[j,g]=f.useState([]),[v,w]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState("");f.useEffect(()=>{v||ie("")},[v]);const oe=f.useCallback(async(N=1)=>{Y(!0),B("");try{const R=await yx(N,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("coupon.loadFailed"))}finally{Y(!1)}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}oe(1),yl().then(g).catch(()=>{})},[oe,s]);async function E(N){var R,te;if(N.preventDefault(),!!v){K(!0),B(""),O("");try{const M=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await w1({id:v.id,name:v.name,type:Number(v.type),value:M,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,limit_use_with_user:v.limit_use_with_user?Number(v.limit_use_with_user):null,limit_plan_ids:v.limit_plan_ids.length?v.limit_plan_ids:null,limit_period:v.limit_period.length?v.limit_period:null,generate_count:v.generate_count?Number(v.generate_count):void 0}),w(null),(R=window.showToast)==null||R.call(window,i("coupon.saveSuccess"),"success"),await oe(m)}catch(M){(te=window.showToast)==null||te.call(window,M instanceof Error?M.message:i("coupon.saveFailed"),"error")}finally{K(!1)}}}async function $(N){var R;try{await _1(N),await oe(m)}catch(te){(R=window.showToast)==null||R.call(window,te instanceof Error?te.message:i("coupon.toggleFailed"),"error")}}async function ne(N){var R;(R=window.showConfirm)==null||R.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var te,M;try{await N1(N),(te=window.showToast)==null||te.call(window,i("coupon.deleteSuccess"),"success"),await oe(m)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:i("coupon.deleteFailed"),"error")}}})}const he=Math.ceil(p/15);return t.jsxs(Gt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[p," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void oe(m),disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(fd()),children:[t.jsx(Nn,{size:16}),i("coupon.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(N=>{var re,A;const R=(re=N.limit_plan_ids)==null?void 0:re.map(J=>{var x;return((x=j.find(W=>W.id===J))==null?void 0:x.name)||`#${J}`}).join(", "),te=Do(i),M=(A=N.limit_period)==null?void 0:A.map(J=>te[J]||J).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:N.id}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:N.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:N.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:N.type===1?wn(N.value):`${N.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",N.limit_use??"∞"]}),N.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",N.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",R]})}):null,M?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",M]})}):null,!R&&!M?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[Mo(N.started_at)," — ",Mo(N.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(fd(N)),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(N.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},N.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(N=>{var R,te,M,re;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),t.jsx("span",{className:`tag type-tag ${N.type===1?"fixed-type":"percent-type"}`,children:N.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Va(N.code).then(A=>{var J;(J=window.showToast)==null||J.call(window,A?`${i("coupon.copiedCode")}: ${N.code}`:i("common.copyFailed"),A?"success":"error")})},children:[t.jsx("code",{className:"mono",children:N.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(R=N.limit_plan_ids)!=null&&R.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:N.limit_plan_ids.map(A=>{const J=j.find(x=>x.id===A);return t.jsx("span",{className:"res-pill plan-pill",children:J?J.name:`#${A}`},A)})})]}):null,(te=N.limit_period)!=null&&te.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:N.limit_period.map(A=>t.jsx("span",{className:"res-pill cycle-pill",children:Do(i)[A]||A},A))})]}):null,!((M=N.limit_plan_ids)!=null&&M.length)&&!((re=N.limit_period)!=null&&re.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Mo(N.started_at)," — ",Mo(N.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:N.type===1?wn(N.value).replace(/\s?₫/,""):`${N.value}`}),t.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:N.limit_use??"∞"}),N.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",N.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(fd(N)),"aria-label":i("common.edit"),children:t.jsx(Lt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(N.id),"aria-label":i("common.delete"),children:t.jsx(Bt,{size:15})})]})]})]},N.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{_(m-1),oe(m-1)},children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{_(m+1),oe(m+1)},children:t.jsx(ba,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:E,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:N=>w({...v,name:N.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:v.type,onChange:N=>w({...v,type:N.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:N=>w({...v,value:N.target.value})})]})]}),v.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:v.code,onChange:N=>w({...v,code:N.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:N=>w({...v,started_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:N=>w({...v,ended_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:N=>w({...v,limit_use:N.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use_with_user,onChange:N=>w({...v,limit_use_with_user:N.target.value}),placeholder:i("coupon.unlimited")})]})]}),v.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:N=>w({...v,generate_count:N.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),v.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_plan_ids.map(N=>{const R=j.find(te=>te.id===N);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const te=v.limit_plan_ids.filter(M=>M!==N);w({...v,limit_plan_ids:te})},children:[R?R.name:`#${N}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},N)})}),j.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:ee,onChange:N=>ie(N.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[j.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=v.limit_plan_ids.includes(N.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:te=>{const M=te.target.checked?[...v.limit_plan_ids,N.id]:v.limit_plan_ids.filter(re=>re!==N.id);w({...v,limit_plan_ids:M})}}),t.jsx("span",{children:N.name})]},N.id)}),j.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),v.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:v.limit_period.map(N=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=v.limit_period.filter(te=>te!==N);w({...v,limit_period:R})},children:[Do(i)[N]||N," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},N))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(Do(i)).map(([N,R])=>{const te=v.limit_period.includes(N);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:te,onChange:M=>{const re=M.target.checked?[...v.limit_period,N]:v.limit_period.filter(A=>A!==N);w({...v,limit_period:re})}}),t.jsx("span",{children:R})]},N)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(_n,{size:16}),i(P?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Oo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Aj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function hd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Uj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,_]=f.useState(1),[j,g]=f.useState([]),[v,w]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState("");f.useEffect(()=>{v||ie("")},[v]);const oe=Aj(i),E=f.useCallback(async(N=1)=>{Y(!0),B("");try{const R=await S1(N,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("giftcard.loadFailed"))}finally{Y(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}E(1),yl().then(g).catch(()=>{})},[E,s]);async function $(N){var R,te;if(N.preventDefault(),!!v){K(!0),B(""),O("");try{const M=v.type==="1"?Math.round(Number(v.value)*100):Number(v.value);await k1({id:v.id,name:v.name,type:Number(v.type),value:M,code:v.code||void 0,started_at:Math.floor(new Date(v.started_at).getTime()/1e3),ended_at:Math.floor(new Date(v.ended_at).getTime()/1e3),limit_use:v.limit_use?Number(v.limit_use):null,plan_id:v.plan_id?Number(v.plan_id):null,generate_count:v.generate_count?Number(v.generate_count):void 0}),w(null),(R=window.showToast)==null||R.call(window,i("giftcard.saveSuccess"),"success"),await E(m)}catch(M){(te=window.showToast)==null||te.call(window,M instanceof Error?M.message:i("giftcard.saveFailed"),"error")}finally{K(!1)}}}async function ne(N){var R;(R=window.showConfirm)==null||R.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var te,M;try{await C1(N),(te=window.showToast)==null||te.call(window,i("giftcard.deleteSuccess"),"success"),await E(m)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:i("giftcard.deleteFailed"),"error")}}})}const he=Math.ceil(p/15);return t.jsxs(Gt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[p," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void E(m),disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>w(hd()),children:[t.jsx(Nn,{size:16}),i("giftcard.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(N=>{var R;return t.jsxs("tr",{children:[t.jsx("td",{children:N.id}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:N.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:oe[N.type]??N.type})}),t.jsx("td",{children:t.jsx("strong",{children:N.type===1?wn(N.value):N.value})}),t.jsx("td",{children:N.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=j.find(te=>te.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:N.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Oo(N.started_at)," — ",Oo(N.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>w(hd(N)),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ne(N.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},N.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(N=>{var R;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:oe[N.type]??N.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Va(N.code).then(te=>{var M;(M=window.showToast)==null||M.call(window,te?i("giftcard.copiedCode").replace("{code}",N.code):i("common.copyFailed"),te?"success":"error")})},children:[t.jsx("code",{className:"mono",children:N.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:N.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((R=j.find(te=>te.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Oo(N.started_at)," — ",Oo(N.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:N.type===1?wn(N.value).replace(/\s?₫/,""):`${N.value}`}),t.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":oe[N.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:N.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>w(hd(N)),"aria-label":i("common.edit"),children:t.jsx(Lt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ne(N.id),"aria-label":i("common.delete"),children:t.jsx(Bt,{size:15})})]})]})]},N.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),he>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{_(m-1),E(m-1)},children:t.jsx(ga,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",he]}),t.jsx("button",{className:"mini-button",disabled:m>=he,onClick:()=>{_(m+1),E(m+1)},children:t.jsx(ba,{size:16})})]}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>w(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:v.name,onChange:N=>w({...v,name:N.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:v.type,onChange:N=>w({...v,type:N.target.value}),children:Object.entries(oe).map(([N,R])=>t.jsx("option",{value:N,children:R},N))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:v.value,onChange:N=>w({...v,value:N.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.started_at,onChange:N=>w({...v,started_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:v.ended_at,onChange:N=>w({...v,ended_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.limit_use,onChange:N=>w({...v,limit_use:N.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),v.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:v.generate_count,onChange:N=>w({...v,generate_count:N.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),v.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const N=j.find(R=>String(R.id)===v.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{w({...v,plan_id:""})},children:[N?N.name:`#${v.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),j.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:ee,onChange:N=>ie(N.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!v.plan_id,onChange:()=>{w({...v,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),j.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=String(N.id)===v.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:te=>{te.target.checked&&w({...v,plan_id:String(N.id)})}}),t.jsx("span",{children:N.name})]},N.id)}),j.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>w(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(_n,{size:16}),i(P?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const ns="Tương đối",xa="=";function Ao(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Rj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Ah(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function xd(s){return+(s/1073741824).toFixed(2)}function gd(s){return Math.round(s*1073741824)}function Uo(s){return(s/1073741824).toFixed(2)}function Hj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function ii(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Ud=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Ox="user_visible_columns";function Lj(){if(typeof window<"u")try{const s=localStorage.getItem(Ox);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Ud.filter(s=>s.defaultVisible).map(s=>s.key))}const Yo=[{value:"email",label:"Email",condition:ns,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:xa,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:xa,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:xa,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:xa,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:ns,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:xa,placeholder:"12345"},{value:"uuid",label:"UUID",condition:ns,placeholder:"UUID"},{value:"token",label:"Token",condition:ns,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:ns,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:xa,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:xa,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:xa,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:xa,placeholder:"1780366403"}],qj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Ft(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Bj(s,i){var p;const o=((p=Yo.find(h=>h.value===s))==null?void 0:p.label)??s,d=h=>{const m=i(h);return m===h?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function bd(s){return Yo.find(i=>i.value===s)??Yo[0]}function Gj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Yj(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState([]),[_,j]=f.useState([]),[g,v]=f.useState(0),[w,z]=f.useState(1),[Y,P]=f.useState(""),[K,C]=f.useState("email"),[B,U]=f.useState(!0),[O,ee]=f.useState(""),[ie,oe]=f.useState(Lj),[E,$]=f.useState(!1),ne=f.useRef(null),[he,N]=f.useState(null),[R,te]=f.useState(null),[M,re]=f.useState({}),[A,J]=f.useState(!1),[x,W]=f.useState(!1),[H,S]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[Q,pe]=f.useState(!1),[me,Se]=f.useState(null),[ke,Ae]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[lt,Ge]=f.useState(!1),[Ke,Ct]=f.useState(null),[Nt,we]=f.useState(null),[Le,tn]=f.useState([]),[Yt,un]=f.useState(0),[gt,Xt]=f.useState(1),[Wt]=f.useState(10),[zt,pn]=f.useState(!1),[T,be]=f.useState("");f.useEffect(()=>{function y(ue){const de=ue.target instanceof Element?ue.target:null;he!==null&&(!de||!de.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&N(null),E&&ne.current&&!ne.current.contains(ue.target)&&$(!1)}return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[he,E]);function qe(y){oe(ue=>{const de=new Set(ue);de.has(y)?de.delete(y):de.add(y);try{localStorage.setItem(Ox,JSON.stringify([...de]))}catch{}return de})}const ye=y=>ie.has(y),rt=Ud.filter(y=>ie.has(y.key)).length,G=f.useCallback(async(y=1,ue,de)=>{U(!0),ee("");try{const Ce=ue==null?void 0:ue.trim(),xt=bd(de||"email"),$n=Ce?[{key:xt.value,condition:xt.condition,value:Ce}]:void 0,Qn=await Md(y,15,$n);p(Qn.data),v(Qn.total)}catch(Ce){ee(Ce instanceof Error?Ce.message:o("user.loadFailed"))}finally{U(!1)}},[]),Ne=f.useCallback(async()=>{try{const[y,ue]=await Promise.all([yl(),ps()]);m(y),j(ue)}catch{}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const y=new URLSearchParams(i.search),de=[["email",y.get("email")||y.get("filter_email")],["id",y.get("id")||y.get("user_id")||y.get("filter_user_id")],["plan_id",y.get("plan_id")],["invite_user_id",y.get("invite_user_id")],["invite_by_email",y.get("invite_by_email")],["uuid",y.get("uuid")],["token",y.get("token")],["remarks",y.get("remarks")]].find(([,Ce])=>Ce==null?void 0:Ce.trim());if(de){const[Ce,xt]=de,$n=bd(Ce),Qn=(xt==null?void 0:xt.trim())??"";C($n.value),P(Qn),z(1),G(1,Qn,$n.value)}else G(1);Ne()},[G,Ne,s,i.search]);function je(){z(1),G(1,Y,K)}function Ee(){P(""),z(1),G(1)}function Ie(y){z(y),G(y,Y,K)}function Ve(y){if(y.plan_name)return y.plan_name;if(!y.plan_id)return"—";const ue=h.find(de=>de.id===y.plan_id);return ue?ue.name:`#${y.plan_id}`}function Ye(y){if(!y.group_id)return"—";const ue=_.find(de=>de.id===y.group_id);return ue?ue.name:`#${y.group_id}`}function De(y,ue){const de=o(y);return de===y?ue:de}function mt(y){const ue=Number(y.device_limit??0);return ue>0?`${Number(y.device_bound_count??0)} / ${ue}`:De("user.unlimited","Unlimited")}function ri(y){const ue=Number(y.device_bound_count??0),de=Number(y.device_pending_count??0),Ce=Number(y.device_banned_count??0),xt=Number(y.device_online_count??0),$n=Number(y.alive_ip??0),Qn=Number(y.device_limit??0),Zo=Qn>0?`${ue} / ${Qn}`:`${ue} / ${De("user.unlimited","Unlimited")}`,di=[`${De("user.deviceBound","Bound")}: ${Zo}`,`${De("user.devicePending","Pending")}: ${de}`,`${De("user.deviceBanned","Banned")}: ${Ce}`,`${De("user.deviceOnline","Online devices")}: ${xt}`,`${De("user.deviceOnlineIp","Online IP")}: ${$n}`];return y.ips&&di.push(y.ips),di.join(`
`)}function vl(y){s.push(`/device?user_id=${encodeURIComponent(String(y.id))}`)}function Wa(y,ue="left"){const de=`${De("user.deviceOnlineShort","Online")}: ${Number(y.device_online_count??0)} | ${De("user.deviceIpShort","IP")}: ${Number(y.alive_ip??0)}`;return t.jsxs("button",{className:`device-cell-button ${ue==="right"?"align-right":""}`,type:"button",title:ri(y),onClick:()=>vl(y),children:[t.jsx("span",{className:"device-cell-primary",children:mt(y)}),t.jsx("span",{className:"device-cell-secondary",children:de})]})}async function Gn(y){var Ce,xt;const ue=y.subscribe_url;if(!ue){(Ce=window.showToast)==null||Ce.call(window,o("user.toastNoSubscribeUrl"),"error");return}const de=await Va(ue);(xt=window.showToast)==null||xt.call(window,o(de?"user.toastUrlCopied":"common.copyFailed"),de?"success":"error"),N(null)}function mn(y){var ue;N(null),(ue=window.showConfirm)==null||ue.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var de,Ce;try{await M1(y.id),(de=window.showToast)==null||de.call(window,o("user.toastSecretResetSuccess"),"success"),await G(w,Y,K)}catch(xt){(Ce=window.showToast)==null||Ce.call(window,xt instanceof Error?xt.message:o("user.toastSecretResetFailed"),"error")}}})}function Yn(y){var ue;N(null),(ue=window.showConfirm)==null||ue.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var de,Ce;try{await T1(y.id),(de=window.showToast)==null||de.call(window,o("user.toastDeletedSuccess"),"success"),await G(w,Y,K)}catch(xt){(Ce=window.showToast)==null||Ce.call(window,xt instanceof Error?xt.message:o("user.toastDeletedFailed"),"error")}}})}function nn(y){var de;N(null);const ue=y.subscribe_url;if(!ue){(de=window.showToast)==null||de.call(window,o("user.toastNoSubscribeUrl"),"error");return}Ct({url:ue,userId:y.id})}function L(y){N(null),s.push(`/order?user_id=${y.id}`)}function ce(y){N(null),s.push(`/subscription?user_id=${y.id}`)}function se(y){N(null),C("invite_user_id"),P(String(y.id)),G(1,String(y.id),"invite_user_id")}async function Ue(y,ue){pn(!0),be("");try{const de=await H1(y,ue,Wt);tn(de.data||[]),un(de.total||0),Xt(ue)}catch(de){be(de instanceof Error?de.message:o("user.historyLoading"))}finally{pn(!1)}}function Je(y){N(null),we(y),Ue(y.id,1)}function et(y){N(null),Se(y.email),Ae({plan_id:"",period:"month_price",total_amount:""})}async function ft(y){var ue,de;if(y.preventDefault(),!!me){Ge(!0);try{await bx({email:me,plan_id:Number(ke.plan_id),period:ke.period,total_amount:(Number(ke.total_amount)||0)*100}),(ue=window.showToast)==null||ue.call(window,o("user.toastAssignSuccess"),"success"),Se(null)}catch(Ce){(de=window.showToast)==null||de.call(window,Ce instanceof Error?Ce.message:o("user.toastAssignFailed"),"error")}finally{Ge(!1)}}}function ct(y){N(null),te(y),re({id:y.id,email:y.email,invite_user_email:"",password:"",balance:y.balance,commission_balance:y.commission_balance,u:xd(y.u),d:xd(y.d),transfer_enable:xd(y.transfer_enable),device_limit:y.device_limit,network_settings:y.network_settings??"",expired_at:Rj(y.expired_at),plan_id:y.plan_id,banned:y.banned,commission_type:y.commission_type??0,commission_rate:y.commission_rate??"",discount:y.discount??"",speed_limit:y.speed_limit,is_admin:y.is_admin,is_staff:y.is_staff,remarks:y.remarks??""})}function Oe(y,ue){re(de=>({...de,[y]:ue}))}async function Hn(y){var ue,de;if(y.preventDefault(),!!R){J(!0);try{const Ce={id:R.id,email:M.email,plan_id:M.plan_id||null,expired_at:Ah(String(M.expired_at??"")),transfer_enable:gd(Number(M.transfer_enable??0)),speed_limit:M.speed_limit||null,device_limit:M.device_limit||null,u:gd(Number(M.u??0)),d:gd(Number(M.d??0)),balance:Number(M.balance??0),commission_balance:Number(M.commission_balance??0),commission_rate:M.commission_rate!==""&&M.commission_rate!==null?Number(M.commission_rate):null,commission_type:Number(M.commission_type??0),discount:M.discount!==""&&M.discount!==null?Number(M.discount):null,network_settings:M.network_settings||null,remarks:M.remarks||null,is_admin:Number(M.is_admin??0),is_staff:Number(M.is_staff??0),banned:Number(M.banned??0)};M.invite_user_email&&(Ce.invite_user_email=M.invite_user_email),M.password&&(Ce.password=M.password),await z1(Ce),(ue=window.showToast)==null||ue.call(window,o("user.toastSaveSuccess"),"success"),te(null),await G(w,Y,K)}catch(Ce){(de=window.showToast)==null||de.call(window,Ce instanceof Error?Ce.message:o("user.toastSaveFailed"),"error")}finally{J(!1)}}}async function ci(y){var ue,de;y.preventDefault(),pe(!0);try{await E1({email_prefix:H.email_prefix,email_suffix:H.email_suffix,password:H.password||void 0,plan_id:H.plan_id?Number(H.plan_id):void 0,expired_at:Ah(H.expired_at)}),(ue=window.showToast)==null||ue.call(window,o("user.toastCreateSuccess"),"success"),W(!1),S({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await G(w,Y,K)}catch(Ce){(de=window.showToast)==null||de.call(window,Ce instanceof Error?Ce.message:o("user.toastCreateFailed"),"error")}finally{pe(!1)}}const Sn=Math.ceil(g/15),fs=bd(K);return t.jsxs(Gt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[g," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ne,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>$(!E),children:[t.jsx(hv,{size:16}),o("user.columns")]}),E?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:rt})})}),Ud.map(y=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:ie.has(y.key),onChange:()=>qe(y.key)}),t.jsx("span",{children:Ft(y.key,o)})]},y.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void G(w,Y,K),disabled:B,children:[t.jsx(kt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>W(!0),children:[t.jsx(Nn,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:K,onChange:y=>C(y.target.value),children:Yo.map(y=>t.jsx("option",{value:y.value,children:Bj(y.value,o)},y.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input search-input",value:Y,onChange:y=>P(y.target.value),placeholder:fs.placeholder,onKeyDown:y=>y.key==="Enter"&&je()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[t.jsx(ds,{size:16}),o("user.filter")]}),Y?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Ee,children:[t.jsx(ot,{size:16}),o("user.clearFilter")]}):null]}),O?t.jsx("div",{className:"form-error",children:O}):null,B&&d.length===0?t.jsx(vt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${B?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(y=>{const ue=Uo(y.u+y.d),de=Uo(y.transfer_enable),Ce=parseFloat(ue);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",y.id]}),t.jsx("span",{className:"user-email",title:y.email,children:y.email})]}),y.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ve(y)," / ",y.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(y)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ce>0?Ce>parseFloat(de)*.9?"high":"ok":""}`,children:[ue," GB"]})," / ",de," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("devices",o)}),t.jsx("span",{className:"info-val",children:Wa(y,"right")})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("expires",o)}),t.jsx("span",{className:"info-val",children:y.expired_at?t.jsx("span",{className:`expiry-date ${y.expired_at<Date.now()/1e3?"expired":""}`,children:Ao(y.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(y.balance/100).toFixed(2)," ₫ / ",(y.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Ft("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Ao(y.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${he===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(he===y.id?null:y.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),he===y.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>N(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:xt=>xt.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:y.email}),t.jsxs("small",{children:["#",y.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(ot,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(y),children:[t.jsx(Lt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(y),children:[t.jsx(ch,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(y),children:[t.jsx(jn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>nn(y),children:[t.jsx(oh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>mn(y),children:[t.jsx(Bo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>L(y),children:[t.jsx(ih,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ce(y),children:[t.jsx(Cd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>se(y),children:[t.jsx(us,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Je(y),children:[t.jsx(rd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(y),children:[t.jsx(Bt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},y.id)}),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:Ft("id",o)}),ye("email")&&t.jsx("th",{children:Ft("email",o)}),ye("status")&&t.jsx("th",{children:Ft("status",o)}),ye("plan")&&t.jsx("th",{children:Ft("plan",o)}),ye("group")&&t.jsx("th",{children:Ft("group",o)}),ye("used")&&t.jsx("th",{children:Ft("used",o)}),ye("traffic")&&t.jsx("th",{children:Ft("traffic",o)}),ye("devices")&&t.jsx("th",{children:Ft("devices",o)}),ye("expires")&&t.jsx("th",{children:Ft("expires",o)}),ye("balance")&&t.jsx("th",{children:Ft("balance",o)}),ye("commission")&&t.jsx("th",{children:Ft("commission",o)}),ye("joined")&&t.jsx("th",{children:Ft("joined",o)}),ye("actions")&&t.jsx("th",{children:Ft("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(y=>{const ue=Uo(y.u+y.d),de=Uo(y.transfer_enable),Ce=parseFloat(ue);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:y.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:y.email})}),ye("status")&&t.jsx("td",{children:y.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Ve(y)}),ye("group")&&t.jsx("td",{children:y.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(y)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ce>0?Ce>parseFloat(de)*.9?"high":"ok":""}`,children:ue})}),ye("traffic")&&t.jsx("td",{children:de}),ye("devices")&&t.jsx("td",{children:Wa(y)}),ye("expires")&&t.jsx("td",{children:y.expired_at?t.jsx("span",{className:`expiry-date ${y.expired_at<Date.now()/1e3?"expired":""}`,children:Ao(y.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(y.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(y.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Ao(y.created_at)})}),ye("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${he===y.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(he===y.id?null:y.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),he===y.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>ct(y),children:[t.jsx(Lt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>et(y),children:[t.jsx(ch,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void Gn(y),children:[t.jsx(jn,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>nn(y),children:[t.jsx(oh,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>mn(y),children:[t.jsx(Bo,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>L(y),children:[t.jsx(ih,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>ce(y),children:[t.jsx(Cd,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>se(y),children:[t.jsx(us,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>Je(y),children:[t.jsx(rd,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Yn(y),children:[t.jsx(Bt,{size:14}),o("user.actionDelete")]})]}):null]})})]},y.id)}),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:rt,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),Sn>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:w<=1,onClick:()=>Ie(w-1),children:t.jsx(ga,{size:16})}),Array.from({length:Math.min(5,Sn)},(y,ue)=>{let de;return Sn<=5||w<=3?de=ue+1:w>=Sn-2?de=Sn-4+ue:de=w-2+ue,t.jsx("button",{className:`mini-button ${de===w?"active-page":""}`,onClick:()=>Ie(de),children:de},de)}),Sn>5?t.jsxs("span",{className:"page-info",children:["… ",Sn]}):null,t.jsx("button",{className:"mini-button",disabled:w>=Sn,onClick:()=>Ie(w+1),children:t.jsx(ba,{size:16})})]})}):null]}),R?t.jsx("div",{className:"modal-backdrop",onClick:()=>te(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Hn,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(M.email??""),onChange:y=>Oe("email",y.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(M.invite_user_email??""),onChange:y=>Oe("invite_user_email",y.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(M.password??""),onChange:y=>Oe("password",y.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.balance??0)/100).toFixed(2)),onChange:y=>Oe("balance",Math.round(Number(y.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.commission_balance??0)/100).toFixed(2)),onChange:y=>Oe("commission_balance",Math.round(Number(y.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.u??0),onChange:y=>Oe("u",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.d??0),onChange:y=>Oe("d",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.transfer_enable??0),onChange:y=>Oe("transfer_enable",y.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.device_limit??""),onChange:y=>Oe("device_limit",y.target.value?Number(y.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(M.network_settings??""),onChange:y=>Oe("network_settings",y.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(M.expired_at??""),onChange:y=>Oe("expired_at",y.target.value),onClick:y=>{var ue,de;return(de=(ue=y.currentTarget).showPicker)==null?void 0:de.call(ue)},onFocus:y=>{var ue,de;return(de=(ue=y.currentTarget).showPicker)==null?void 0:de.call(ue)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(M.plan_id??""),onChange:y=>Oe("plan_id",y.target.value?Number(y.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(M.banned??0),onChange:y=>Oe("banned",Number(y.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(M.commission_type??0),onChange:y=>Oe("commission_type",Number(y.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.commission_rate??""),onChange:y=>Oe("commission_rate",y.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.discount??""),onChange:y=>Oe("discount",y.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.speed_limit??""),onChange:y=>Oe("speed_limit",y.target.value?Number(y.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${M.is_admin?"active":""}`,onClick:()=>Oe("is_admin",M.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${M.is_staff?"active":""}`,onClick:()=>Oe("is_staff",M.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(M.remarks??""),onChange:y=>Oe("remarks",y.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:A,children:o(A?"common.processing":"common.save")})]})]})]})}):null,x?t.jsx("div",{className:"modal-backdrop",onClick:()=>W(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>W(!1),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ci,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:H.email_prefix,onChange:y=>S({...H,email_prefix:y.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:H.email_suffix,onChange:y=>S({...H,email_suffix:y.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:H.password,onChange:y=>S({...H,password:y.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:H.plan_id,onChange:y=>S({...H,plan_id:y.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:H.expired_at,onChange:y=>S({...H,expired_at:y.target.value}),onClick:y=>{var ue,de;return(de=(ue=y.currentTarget).showPicker)==null?void 0:de.call(ue)},onFocus:y=>{var ue,de;return(de=(ue=y.currentTarget).showPicker)==null?void 0:de.call(ue)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>W(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Q,children:o(Q?"user.creating":"user.createUser")})]})]})]})}):null,me?t.jsx("div",{className:"modal-backdrop",onClick:()=>Se(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Se(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ft,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:me})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:ke.plan_id,onChange:y=>Ae({...ke,plan_id:y.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),h.map(y=>t.jsx("option",{value:y.id,children:y.name},y.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:ke.period,onChange:y=>Ae({...ke,period:y.target.value}),children:qj.map(y=>t.jsx("option",{value:y.value,children:Gj(y.value,o)},y.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ke.total_amount,onChange:y=>Ae({...ke,total_amount:y.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Se(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:lt,children:o(lt?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Ke?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ct(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ct(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Ke.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Ke.userId})})]})]})}):null,Nt?t.jsx("div",{className:"modal-backdrop",onClick:()=>we(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:y=>y.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:Nt.email,id:Nt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>we(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[T?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:T}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:Yt})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(Le.reduce((y,ue)=>y+ue.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(Le.reduce((y,ue)=>y+ue.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:ii(Le.reduce((y,ue)=>y+ue.u+ue.d,0))})]})]}),zt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(vt,{label:o("user.historyLoading")})}):Le.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(rd,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:Le.map(y=>{const ue=ii(y.u),de=ii(y.d),Ce=ii(y.u+y.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Hj(y.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(y.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:ue}),t.jsx("td",{style:{color:"var(--muted)"},children:de}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ce})]},y.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((gt-1)*Wt+1,Yt),end:Math.min(gt*Wt,Yt),total:Yt})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:gt<=1,onClick:()=>Ue(Nt.id,gt-1),children:[t.jsx(ga,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:gt*Wt>=Yt,onClick:()=>Ue(Nt.id,gt+1),children:[o("user.historyNext"),t.jsx(ba,{size:16})]})]})]})]})]})]})}):null]})}const Uh=15,Rh=20,$j=["email","id","user_id","plan_id","status"];function $a(s,i){return s?new Date(s*1e3).toLocaleString():i}function Qj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Xj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function hl(s){return+(s/1073741824).toFixed(2)}function yd(s){return Math.round((Number(s)||0)*1073741824)}function Zj(s){return s==="email"?"like":"="}function Kj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Hh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Lh(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function qh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Vj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Jj(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[_,j]=f.useState(1),[g,v]=f.useState("email"),[w,z]=f.useState(""),[Y,P]=f.useState(!0),[K,C]=f.useState(""),[B,U]=f.useState(null),[O,ee]=f.useState({}),[ie,oe]=f.useState(null),[E,$]=f.useState(null),[ne,he]=f.useState([]),[N,R]=f.useState(0),[te,M]=f.useState(1),[re,A]=f.useState(!1),[J,x]=f.useState(""),[W,H]=f.useState(null);function S(T){const be=T==null?void 0:T.trim();be&&s.push(`/user?email=${encodeURIComponent(be)}`)}const Q=f.useCallback(async(T=1,be="",qe="email")=>{P(!0),C("");try{const ye=be.trim()?[{key:qe,condition:Zj(qe),value:be.trim()}]:void 0,rt=await D1(T,Uh,ye);p(rt.data),m(rt.total),j(T)}catch(ye){C(ye instanceof Error?ye.message:o("subscription.loadFailed"))}finally{P(!1)}},[o]),pe=f.useCallback(async(T,be=1)=>{A(!0),x("");try{const qe=await jx(be,Rh,[{key:"subscription_id",condition:"=",value:String(T.id)}]);he(qe.data),R(qe.total),M(be)}catch(qe){x(qe instanceof Error?qe.message:o("subscription.slotsLoadFailed"))}finally{A(!1)}},[o]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const T=new URLSearchParams(i.search),qe=[["user_id",T.get("user_id")],["id",T.get("id")],["plan_id",T.get("plan_id")],["email",T.get("email")],["status",T.get("status")]].find(([,ye])=>ye&&ye.trim());if(qe){const[ye,rt]=qe,G=rt??"";v(ye),z(G),Q(1,G,ye);return}Q()},[Q,i.search,s]);function me(T){T.preventDefault(),Q(1,w,g)}function Se(){if(z(""),i.search){s.replace("/subscription");return}Q(1,"",g)}function ke(T){U(T),ee({transfer_enable:String(hl(T.transfer_enable)),u:String(hl(T.u)),d:String(hl(T.d)),device_limit:T.device_limit===null?"":String(T.device_limit),speed_limit:T.speed_limit===null?"":String(T.speed_limit),expired_at:Qj(T.expired_at),status:T.status,auto_renewal:String(T.auto_renewal||0),remarks:T.remarks??""})}async function Ae(T){var be,qe;if(T.preventDefault(),!!B){oe(B.id);try{await A1({id:B.id,transfer_enable:yd(O.transfer_enable),u:yd(O.u),d:yd(O.d),device_limit:O.device_limit===""?null:Number(O.device_limit),speed_limit:O.speed_limit===""?null:Number(O.speed_limit),expired_at:Xj(O.expired_at),status:O.status,auto_renewal:Number(O.auto_renewal),remarks:O.remarks}),U(null),(be=window.showToast)==null||be.call(window,o("subscription.updateSuccess"),"success"),await Q(_,w,g)}catch(ye){(qe=window.showToast)==null||qe.call(window,ye instanceof Error?ye.message:o("subscription.saveFailed"),"error")}finally{oe(null)}}}function lt(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.resetConfirm",{id:T.id}),onConfirm:async()=>{var qe,ye;oe(T.id);try{await U1(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.resetSuccess"),"success"),await Q(_,w,g)}catch(rt){(ye=window.showToast)==null||ye.call(window,rt instanceof Error?rt.message:o("subscription.resetFailed"),"error")}finally{oe(null)}}})}async function Ge(T){var qe;if(!T)return;const be=await Va(T);(qe=window.showToast)==null||qe.call(window,o(be?"subscription.copySuccess":"common.copyFailed"),be?"success":"error")}async function Ke(T){var be,qe;H(T.id);try{let ye=T.subscribe_url||null;if(ye||(ye=(await O1(T.id)).data,ye&&p(G=>G.map(Ne=>Ne.id===T.id?{...Ne,subscribe_url:ye}:Ne))),!ye){(be=window.showToast)==null||be.call(window,o("common.copyFailed"),"error");return}await Ge(ye)}catch(ye){(qe=window.showToast)==null||qe.call(window,ye instanceof Error?ye.message:o("common.copyFailed"),"error")}finally{H(null)}}function Ct(T){$(T),he([]),R(0),M(1),pe(T,1)}function Nt(T=te){return E?pe(E,T):Promise.resolve()}function we(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var qe,ye;oe(T.id);try{await wx(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([Nt(),Q(_,w,g)])}catch(rt){(ye=window.showToast)==null||ye.call(window,rt instanceof Error?rt.message:o("subscription.unbindFailed"),"error")}finally{oe(null)}}})}function Le(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var qe,ye;oe(T.id);try{await Nx(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([Nt(),Q(_,w,g)])}catch(rt){(ye=window.showToast)==null||ye.call(window,rt instanceof Error?rt.message:o("subscription.banFailed"),"error")}finally{oe(null)}}})}function tn(T){const be=T.device_limit&&T.device_limit>0?String(T.device_limit):o("subscription.unlimited"),qe=!!(T.device_count||T.device_limit&&T.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:T.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:be})]}),T.device_limit&&T.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(T.device_count/T.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),qe?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ct(T),children:[t.jsx(Cd,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function Yt(T){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[hl(T.total_used)," / ",hl(T.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Vj(T)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:hl(T.u),download:hl(T.d)})})]})}function un(T){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function gt(T){return t.jsxs("div",{className:"subscription-link-stack",children:[un(T),T.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.subscribe_url,onClick:()=>void Ke(T),disabled:W===T.id,children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Ke(T),disabled:W===T.id,children:[t.jsx(jn,{size:14}),t.jsx("span",{children:W===T.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Xt(T){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>ke(T),children:[t.jsx(Lt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ie===T.id,onClick:()=>lt(T),children:[t.jsx(Bo,{size:14}),o("subscription.resetSecret")]})]})}const Wt=Math.ceil(h/Uh),zt=Math.ceil(N/Rh),pn=Wt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||Y,onClick:()=>void Q(_-1,w,g),children:[t.jsx(ga,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:_,total:Wt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:_>=Wt||Y,onClick:()=>void Q(_+1,w,g),children:[o("common.next"),t.jsx(ba,{size:14})]})]}):null;return t.jsxs(Gt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void Q(_,w,g),children:[t.jsx(kt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:me,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:T=>v(T.target.value),children:$j.map(T=>t.jsx("option",{value:T,children:Kj(T,o)},T))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input",value:w,onChange:T=>z(T.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ds,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Se,children:o("common.clearFilter")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Y&&d.length===0?t.jsx(vt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",T.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:T.user_id}),T.plan_id?` - ${o("subscription.planId",{id:T.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Hh(T.status,o)})}),t.jsx("td",{children:Yt(T)}),t.jsx("td",{children:tn(T)}),t.jsx("td",{children:$a(T.expired_at,o("subscription.never"))}),t.jsx("td",{children:gt(T)}),t.jsx("td",{children:$a(T.updated_at,o("subscription.never"))}),t.jsx("td",{children:Xt(T)})]},T.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(T=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",T.id]}),t.jsx("strong",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Hh(T.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),Yt(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),tn(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:$a(T.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:$a(T.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:gt(T)}),Xt(T)]},T.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),pn,E?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>$(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:E.id})}),t.jsx("p",{children:E.user_email??o("subscription.userId",{id:E.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>$(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[J?t.jsx("div",{className:"form-error",children:J}):null,re&&ne.length===0?t.jsx(vt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ne.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${qh(T.status)}`,children:Lh(T.status,o)})}),t.jsx("td",{children:T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsx("td",{children:$a(T.first_seen_at,"-")}),t.jsx("td",{children:$a(T.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>we(T),children:[t.jsx(Ed,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>Le(T),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})})]},T.id)),!re&&ne.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ne.map(T=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${qh(T.status)}`,children:Lh(T.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:$a(T.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:$a(T.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>we(T),children:[t.jsx(Ed,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>Le(T),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})]},T.id)),!re&&ne.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),zt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:te<=1||re,onClick:()=>void Nt(te-1),children:[t.jsx(ga,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:te,total:zt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:te>=zt||re,onClick:()=>void Nt(te+1),children:[o("common.next"),t.jsx(ba,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>U(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??o("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>U(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Ae,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.transfer_enable,onChange:T=>ee(be=>({...be,transfer_enable:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.u,onChange:T=>ee(be=>({...be,u:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.d,onChange:T=>ee(be=>({...be,d:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.device_limit,onChange:T=>ee(be=>({...be,device_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.speed_limit,onChange:T=>ee(be=>({...be,speed_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:O.expired_at,onChange:T=>ee(be=>({...be,expired_at:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:O.status,onChange:T=>ee(be=>({...be,status:T.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:O.auto_renewal,onChange:T=>ee(be=>({...be,auto_renewal:T.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:O.remarks,onChange:T=>ee(be=>({...be,remarks:T.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ie===B.id,children:ie===B.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Bh=15,Fj=["email","user_id","node","hwid","user_agent","last_ip"];function as(s){return s?new Date(s*1e3).toLocaleString():"-"}function Qa(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,p=0;for(;d>=1024&&p<o.length-1;)d/=1024,p+=1;return`${d>=10||p===0?d.toFixed(0):d.toFixed(2)} ${o[p]}`}function Wj(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Pj(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function Gh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Ro(s){return(s.online_ips??[]).join(", ")||"-"}function Ho(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function Ij(s){var h,m,_;const i=new URLSearchParams(s),o=(h=i.get("node_type"))==null?void 0:h.trim(),d=(m=i.get("node_id"))==null?void 0:m.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const p=["node","hwid","user_agent","last_ip","email","user_id"];for(const j of p){const g=(_=i.get(j))==null?void 0:_.trim();if(g)return{field:j,value:g}}return null}function ew(){const s=Dt(),i=Wn(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[_,j]=f.useState(1),[g,v]=f.useState("email"),[w,z]=f.useState(""),[Y,P]=f.useState(!0),[K,C]=f.useState(""),[B,U]=f.useState(null),[O,ee]=f.useState(null),[ie,oe]=f.useState(null),E=f.useCallback(async(x=1,W="",H="email")=>{P(!0),C("");try{const S=W.trim()?[{key:H,condition:Wj(H),value:W.trim()}]:void 0,Q=await jx(x,Bh,S);p(Q.data),m(Q.total),j(x)}catch(S){C(S instanceof Error?S.message:o("device.loadFailed"))}finally{P(!1)}},[o]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const x=Ij(i.search);if(x){v(x.field),z(x.value),E(1,x.value,x.field);return}E()},[E,s,i.search]),f.useEffect(()=>{if(ie===null)return;function x(H){const S=H.target;S!=null&&S.closest(".device-action-wrap")||oe(null)}function W(H){H.key==="Escape"&&oe(null)}return document.addEventListener("pointerdown",x),document.addEventListener("keydown",W),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",W)}},[ie]);function $(x){x.preventDefault(),E(1,w,g)}function ne(){if(z(""),i.search){s.replace("/device");return}E(1,"",g)}async function he(x){var H;if(!x.hwid)return;const W=await Va(x.hwid);(H=window.showToast)==null||H.call(window,o(W?"device.copySuccess":"common.copyFailed"),W?"success":"error")}async function N(x){var H;const W=await Va(x.uuid);(H=window.showToast)==null||H.call(window,o(W?"device.copyUuidSuccess":"common.copyFailed"),W?"success":"error")}function R(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var H,S;U(x.id);try{await wx(x.id),(H=window.showToast)==null||H.call(window,o("device.unbindSuccess"),"success"),await E(_,w,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.unbindFailed"),"error")}finally{U(null)}}})}function te(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var H,S;U(x.id);try{await Nx(x.id),(H=window.showToast)==null||H.call(window,o("device.banSuccess"),"success"),await E(_,w,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.banFailed"),"error")}finally{U(null)}}})}function M(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.resetConfirm",{user:x.user_email??`#${x.user_id}`}),onConfirm:async()=>{var H,S;ee(x.user_id);try{await R1(x.user_id),(H=window.showToast)==null||H.call(window,o("device.resetSuccess"),"success"),await E(_,w,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.resetFailed"),"error")}finally{ee(null)}}})}function re(x){oe(null),x()}function A(x,W){const H=W==="mobile"?-x.id:x.id,S=ie===H;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${S?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>oe(S?null:H),children:[o("device.action")," ",t.jsx(gl,{size:14})]}),S?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===x.id,onClick:()=>re(()=>R(x)),children:[t.jsx(Ed,{size:14}),o("device.unbind")]}),x.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===x.id,onClick:()=>re(()=>te(x)),children:[t.jsx(xl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:O===x.user_id,onClick:()=>re(()=>M(x)),children:[t.jsx(Dv,{size:14}),o("device.resetUser")]})]}):null]})}const J=Math.ceil(h/Bh);return t.jsxs(Gt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:h})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void E(_,w,g),children:[t.jsx(kt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:$,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:x=>v(x.target.value),children:Fj.map(x=>t.jsx("option",{value:x,children:Pj(x,o)},x))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Xo,{size:16}),t.jsx("input",{className:"config-input",value:w,onChange:x=>z(x.target.value),placeholder:o(g==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(ds,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ne,children:o("device.clear")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Y&&d.length===0?t.jsx(vt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(x=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:x.user_email??"-"}),t.jsxs("small",{children:["ID: ",x.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:Gh(x.status,o)}),t.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?t.jsx(uh,{size:14}):t.jsx(dh,{size:14}),x.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:x.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),x.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.hwid,onClick:()=>he(x),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:x.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:x.user_agent??"",children:x.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${x.last_ip??"-"} / ${x.first_ip??"-"}`,children:[x.last_ip??"-",x.first_ip?` (${x.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${Qa(x.device_upload)} / ${o("device.download")}: ${Qa(x.device_download)}`,children:[Qa(x.device_used_traffic)," / ",o("device.upload"),": ",Qa(x.device_upload)," / ",o("device.download"),": ",Qa(x.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Ro(x)} / ${Ho(x)}`,children:[o("device.onlineIps"),": ",Ro(x)," / ",o("device.onlineNodes"),": ",Ho(x)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",as(x.first_seen_at)," / ",o("device.lastSeen"),": ",as(x.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:A(x,"mobile")})]},x.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(x=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:x.user_email??"-"}),t.jsxs("small",{children:["ID: ",x.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:Gh(x.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:Qa(x.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",Qa(x.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",Qa(x.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?t.jsx(uh,{size:14}):t.jsx(dh,{size:14}),x.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Ro(x),children:[o("device.onlineIps"),": ",Ro(x)]}),t.jsxs("small",{title:Ho(x),children:[o("device.onlineNodes"),": ",Ho(x)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",as(x.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:x.uuid})]})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),x.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.hwid,onClick:()=>he(x),children:[t.jsx(jn,{size:14}),t.jsx("span",{className:"mono",children:x.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:x.user_agent??"",children:x.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:x.last_ip??"-"}),t.jsx("small",{children:x.first_ip?`${o("device.firstIp")}: ${x.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:as(x.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:as(x.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:A(x,"desktop")})]},x.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),J>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||Y,onClick:()=>void E(_-1,w,g),children:[t.jsx(ga,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:_,total:J})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:_>=J||Y,onClick:()=>void E(_+1,w,g),children:[o("device.next"),t.jsx(ba,{size:14})]})]}):null]})]})}const tw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Xd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Xd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Yh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Xd(s.plan_id)}:{...tw}}function vd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function nw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function aw(s){return Number(s)===1}function $h(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function Xa(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function lw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[j,g]=f.useState(!0),[v,w]=f.useState(!1),[z,Y]=f.useState(null),[P,K]=f.useState(""),C=f.useCallback(async()=>{g(!0),K("");try{const[E,$]=await Promise.all([F1(),yl()]);d(E),h($)}catch(E){K(E instanceof Error?E.message:i("webcon.toastLoadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}C()},[C,s]);const B=f.useMemo(()=>p.map(E=>({id:Number(E.id),name:E.name})),[p]);function U(E,$){_(ne=>ne&&{...ne,[E]:$})}function O(E,$){_(ne=>{if(!ne)return ne;const he=$?Array.from(new Set([...ne.plan_ids,E])):ne.plan_ids.filter(N=>N!==E);return{...ne,plan_ids:he}})}async function ee(E){var ne,he;if(E.preventDefault(),!m)return;const $=vd(m.domain);w(!0),K("");try{await W1({id:m.id,email:m.email.trim(),domain:$,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),_(null),(ne=window.showToast)==null||ne.call(window,i("webcon.toastSaveSuccess"),"success"),await C()}catch(N){const R=N instanceof Error?N.message:i("webcon.toastSaveFailed");K(R),(he=window.showToast)==null||he.call(window,R,"error")}finally{w(!1)}}async function ie(E){var $,ne;Y(E.id);try{await I1(E.id),($=window.showToast)==null||$.call(window,i("webcon.toastToggleSuccess"),"success"),await C()}catch(he){const N=he instanceof Error?he.message:i("webcon.toastToggleFailed");K(N),(ne=window.showToast)==null||ne.call(window,N,"error")}finally{Y(null)}}function oe(E){var $;($=window.showConfirm)==null||$.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ne,he;Y(E.id),K("");try{await P1(E.id),(ne=window.showToast)==null||ne.call(window,i("webcon.toastDeleteSuccess"),"success"),await C()}catch(N){const R=N instanceof Error?N.message:i("webcon.toastDeleteFailed");K(R),(he=window.showToast)==null||he.call(window,R,"error")}finally{Y(null)}}})}return t.jsxs(Gt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:j,onClick:()=>void C(),children:[t.jsx(kt,{size:16}),i(j?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(Yh()),children:[t.jsx(Nn,{size:16}),i("webcon.add")]})]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,j&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(E=>{var ne;const $=Xd(E.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",E.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${aw(E.status)?"active":""}`,type:"button",disabled:z===E.id,onClick:()=>void ie(E),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:E.email??"-"}),t.jsx("small",{children:Number(E.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:E.domain}),t.jsxs("small",{children:["/",String(((ne=window.settings)==null?void 0:ne.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:E.title||"-"}),t.jsx("small",{children:E.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(jv,{size:13}),E.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(ms,{size:13}),E.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:$h($,B)}),t.jsx("small",{children:$.length?`${$.length} selected`:"not restricted"})]})}),t.jsx("td",{children:nw(E.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>_(Yh(E)),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===E.id,onClick:()=>oe(E),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},E.id)}),!j&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>_(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>_(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ee,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Xa("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:E=>U("email",E.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:E=>U("domain",E.target.value),onBlur:E=>U("domain",vd(E.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:E=>U("title",E.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:E=>U("description",E.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:E=>U("logo",E.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Xa("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:E=>U("background_url",E.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Xa("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(E=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(E.id),onChange:$=>O(E.id,$.target.checked)}),t.jsx("span",{children:E.name})]},E.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Xa("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:E=>U("custom_html",E.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(Ev,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:vd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(Yd,{size:12})," ",$h(m.plan_ids,B)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(_n,{size:16}),i(v?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Qh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function jd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function iw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[j,g]=f.useState(!1),[v,w]=f.useState(""),[z,Y]=f.useState(""),P=f.useCallback(async()=>{_(!0),w("");try{d(await L1())}catch(U){w(U instanceof Error?U.message:i("notice.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);async function K(U){var O,ee;if(U.preventDefault(),!!p){g(!0),w(""),Y("");try{const ie=p.tags?p.tags.split(",").map(oe=>oe.trim()).filter(Boolean):[];await q1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:ie.length?ie:null}),h(null),(O=window.showToast)==null||O.call(window,i("notice.saveSuccess"),"success"),await P()}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("notice.saveFailed"),"error")}finally{g(!1)}}}async function C(U){var O;try{await G1(U),await P()}catch(ee){(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("notice.toggleFailed"),"error")}}async function B(U){var O;(O=window.showConfirm)==null||O.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var ee,ie;try{await B1(U),(ee=window.showToast)==null||ee.call(window,i("notice.deleteSuccess"),"success"),await P()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Gt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(jd()),children:[t.jsx(Nn,{size:16}),i("notice.addNotice")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&o.length===0?t.jsx(vt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void C(U.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((O=U.tags)==null?void 0:O.map((ee,ie)=>t.jsx("span",{className:"tag",children:ee},ie)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Qh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(jd(U)),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(U.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},U.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(U=>t.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",U.id]})}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void C(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((O,ee)=>t.jsx("span",{className:"tag-badge",children:O},ee)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Qh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(jd(U)),children:[t.jsx(Lt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(U.id),children:[t.jsx(Bt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:U=>h({...p,title:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:U=>h({...p,content:U.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:U=>h({...p,img_url:U.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:U=>h({...p,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(_n,{size:16}),i(j?"notice.saving":"common.save")]})]})]})]})}):null]})}function wd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const Xh=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},Nd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function sw(){var N;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!1),[j,g]=f.useState(null),[v,w]=f.useState(""),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),U=f.useRef(null),[O,ee]=f.useState([]),[ie,oe]=f.useState(null),E=f.useCallback(async()=>{Y(!0),B("");try{d(await Y1())}catch(R){B(R instanceof Error?R.message:"Load failed")}finally{Y(!1)}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}E(),yl().then(R=>{R&&ee(R)}).catch(()=>{})},[E,s]),f.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[p]);async function $(R){var te;g(R),w(""),h(null),oe(null),_(!0);try{const M=await hh(R);if(h(M),M&&M.user_id)try{const re=await vx(M.user_id);re&&re.data&&oe(re.data)}catch(re){console.error("Failed to load user info:",re)}}catch{(te=window.showToast)==null||te.call(window,"Failed to load message thread","error")}finally{_(!1)}}async function ne(R){var te,M;if(R.preventDefault(),!(!j||!v.trim())){K(!0),B("");try{await $1(j,v),w(""),(te=window.showToast)==null||te.call(window,"Reply sent!","success");try{const re=await hh(j);h(re)}catch{}await E()}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:"Reply failed","error")}finally{K(!1)}}}async function he(R){var te;(te=window.showConfirm)==null||te.call(window,{message:"Close this ticket?",onConfirm:async()=>{var M,re;B("");try{await Q1(R),(M=window.showToast)==null||M.call(window,"Ticket closed!","success"),j===R&&(g(null),h(null)),await E()}catch(A){B(A instanceof Error?A.message:"Close failed"),(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:"Close failed","error")}}})}return t.jsxs(Gt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]})})]}),C?t.jsx("div",{className:"form-error",children:C}):null,z&&o.length===0?t.jsx(vt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{const te=Xh(R.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.subject})}),t.jsxs("td",{children:["#",R.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:Nd(R.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})}),t.jsx("td",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:wd(R.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(ls,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(R.id),children:[t.jsx(zd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(ls,{size:14}),i("ticket.viewHistory")]})})})]},R.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(R=>{const te=Xh(R.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:R.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:Nd(R.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",R.id]})]}),t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",R.user_id]})]}),t.jsx("span",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:wd(R.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(ls,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void he(R.id),children:[t.jsx(zd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(ls,{size:14}),i("ticket.viewHistory")]})})]},R.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),j!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${i("ticket.ticketDetail")}: ${p.subject}`:`${i("ticket.ticketDetail")} #${j}`}),t.jsxs("p",{children:[i("ticket.user"),": #",p==null?void 0:p.user_id," | ",i("ticket.level"),": ",p!=null?Nd(p.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{g(null),h(null)},children:t.jsx(ot,{size:18})})]}),ie&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:ie.email,children:ie.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((N=O.find(R=>R.id===ie.plan_id))==null?void 0:N.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[wn(ie.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:ie.expired_at?new Date(ie.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(vt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(R=>{const te=R.is_me;return t.jsxs("div",{className:`chat-message ${te?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:R.message}),t.jsxs("div",{className:"chat-meta",children:[te?i("ticket.staff"):`${i("ticket.user")} #${R.user_id}`," • ",wd(R.created_at)]})]},R.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:U})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ne,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:v,onChange:R=>w(R.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P||!v.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(cx,{size:14}),P?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Zh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Kh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Vh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function ow(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[j,g]=f.useState(!1),[v,w]=f.useState(""),[z,Y]=f.useState(""),P=f.useCallback(async()=>{_(!0),w("");try{d(await X1())}catch(O){w(O instanceof Error?O.message:i("knowledge.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);async function K(O){var ee;try{const ie=await Z1(O.id);h(Vh(ie))}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("knowledge.detailFailed"),"error")}}async function C(O){var ee,ie;if(O.preventDefault(),!!p){g(!0),w(""),Y("");try{await K1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(ee=window.showToast)==null||ee.call(window,i("knowledge.saveSuccess"),"success"),await P()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("knowledge.saveFailed"),"error")}finally{g(!1)}}}async function B(O){var ee;try{await J1(O),await P()}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("knowledge.toggleFailed"),"error")}}async function U(O){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var ie,oe;try{await V1(O),(ie=window.showToast)==null||ie.call(window,i("knowledge.deleteSuccess"),"success"),await P()}catch(E){(oe=window.showToast)==null||oe.call(window,E instanceof Error?E.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Gt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Vh()),children:[t.jsx(Nn,{size:16}),i("knowledge.addArticle")]})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&o.length===0?t.jsx(vt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(O=>t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:O.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:O.title})}),t.jsx("td",{children:O.language&&Kh[O.language]||O.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:O.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Zh(O.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(O),children:[t.jsx(Lt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(O.id),children:[t.jsx(Bt,{size:14}),i("common.delete")]})]})})]},O.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(O=>t.jsxs("div",{className:`knowledge-mobile-card ${O.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",O.id]}),O.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",O.sort]})]}),t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":O.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:O.title}),t.jsxs("div",{className:"card-meta",children:[O.category&&t.jsx("span",{className:"category-badge",children:O.category}),O.language&&t.jsx("span",{className:"lang-badge",children:Kh[O.language]||O.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Zh(O.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void K(O),children:[t.jsx(Lt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(O.id),children:[t.jsx(Bt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},O.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ot,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:C,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:O=>h({...p,category:O.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:O=>h({...p,title:O.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:O=>h({...p,body:O.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:O=>h({...p,language:O.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:O=>h({...p,sort:O.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:j,children:[t.jsx(_n,{size:16}),i(j?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function rw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,_]=f.useState(null),[j,g]=f.useState(""),[v,w]=f.useState(!0),[z,Y]=f.useState(""),P=f.useCallback(async()=>{w(!0),Y("");try{const[C,B,U,O]=await Promise.all([e0().catch(()=>({data:{}})),a0().catch(()=>({data:{}})),l0().catch(()=>({data:[]})),i0().catch(()=>({data:""}))]);d(C.data),h(B.data),_(U.data),g(typeof O.data=="string"?O.data:"")}catch(C){Y(C instanceof Error?C.message:i("queue.toastLoadFailed"))}finally{w(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);function K(C,B,U){return C?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(C).map(([O,ee])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:O}),t.jsx("strong",{children:typeof ee=="object"?JSON.stringify(ee):String(ee??"—")})]},O))})]}):null}return t.jsxs(Gt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:v,children:[t.jsx(kt,{size:16}),i("common.refresh")]})})]}),z?t.jsx("div",{className:"form-error",children:z}):null,v?t.jsx(vt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[K(o,i("queue.systemStatus"),t.jsx(Go,{size:18})),K(p,i("queue.queueStats"),t.jsx(Yd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(dv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,j?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(bv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:j})]}):null]})]})}const cw=f.createContext(null);function dw({children:s}){const[i,o]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((g,v="success")=>{const w=Math.random().toString(36).substring(2,9);o(z=>[...z,{id:w,message:g,type:v}]),setTimeout(()=>{o(z=>z.filter(Y=>Y.id!==w))},5e3)},[]),m=f.useCallback(g=>{p(g)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const _=async()=>{if(d){try{await d.onConfirm()}catch(g){console.error("Error in onConfirm:",g)}p(null)}},j=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(cw.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(g=>{let v=wv;return g.type==="success"&&(v=ox),g.type==="error"&&(v=fv),g.type==="warning"&&(v=Td),t.jsxs("div",{className:`toast-card toast-${g.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(v,{size:18})}),t.jsx("div",{className:"toast-message",children:g.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(w=>w.filter(z=>z.id!==g.id)),children:t.jsx(ot,{size:14})})]},g.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:j,children:t.jsxs("div",{className:"confirm-card",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(Td,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:j,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:_,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function uw({children:s}){return t.jsx(h0,{children:t.jsx(dw,{children:s})})}function pw(){return t.jsx(uw,{children:t.jsxs(Ky,{children:[t.jsx(wt,{path:"/login",element:t.jsx(x0,{})}),t.jsx(wt,{path:"/dashboard",element:t.jsx(k0,{})}),t.jsx(wt,{path:"/config/system",element:t.jsx(A0,{})}),t.jsx(wt,{path:"/config/payment",element:t.jsx(H0,{})}),t.jsx(wt,{path:"/config/theme",element:t.jsx(B0,{})}),t.jsx(wt,{path:"/server/manage",element:t.jsx(jj,{})}),t.jsx(wt,{path:"/server/group",element:t.jsx(wj,{})}),t.jsx(wt,{path:"/server/route",element:t.jsx(Sj,{})}),t.jsx(wt,{path:"/plan",element:t.jsx(Tj,{})}),t.jsx(wt,{path:"/order",element:t.jsx(Dj,{})}),t.jsx(wt,{path:"/coupon",element:t.jsx(Oj,{})}),t.jsx(wt,{path:"/giftcard",element:t.jsx(Uj,{})}),t.jsx(wt,{path:"/user",element:t.jsx(Yj,{})}),t.jsx(wt,{path:"/subscription",element:t.jsx(Jj,{})}),t.jsx(wt,{path:"/device",element:t.jsx(ew,{})}),t.jsx(wt,{path:"/webcon",element:t.jsx(lw,{})}),t.jsx(wt,{path:"/notice",element:t.jsx(iw,{})}),t.jsx(wt,{path:"/ticket",element:t.jsx(sw,{})}),t.jsx(wt,{path:"/knowledge",element:t.jsx(ow,{})}),t.jsx(wt,{path:"/queue",element:t.jsx(rw,{})}),t.jsx(wt,{path:"/",element:t.jsx(Pf,{to:"/dashboard",replace:!0})}),t.jsx(wt,{path:"*",element:t.jsx(Pf,{to:"/dashboard",replace:!0})})]})})}ty.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(ev,{children:t.jsx(pw,{})})}));
