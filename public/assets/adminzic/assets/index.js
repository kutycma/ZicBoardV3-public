function $b(s,i){for(var o=0;o<i.length;o++){const d=i[o];if(typeof d!="string"&&!Array.isArray(d)){for(const p in d)if(p!=="default"&&!(p in s)){const h=Object.getOwnPropertyDescriptor(d,p);h&&Object.defineProperty(s,p,h.get?h:{enumerable:!0,get:()=>d[p]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const p of document.querySelectorAll('link[rel="modulepreload"]'))d(p);new MutationObserver(p=>{for(const h of p)if(h.type==="childList")for(const m of h.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&d(m)}).observe(document,{childList:!0,subtree:!0});function o(p){const h={};return p.integrity&&(h.integrity=p.integrity),p.referrerPolicy&&(h.referrerPolicy=p.referrerPolicy),p.crossOrigin==="use-credentials"?h.credentials="include":p.crossOrigin==="anonymous"?h.credentials="omit":h.credentials="same-origin",h}function d(p){if(p.ep)return;p.ep=!0;const h=o(p);fetch(p.href,h)}})();function Qb(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Pc={exports:{}},Pi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Xb(){if(Af)return Pi;Af=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function o(d,p,h){var m=null;if(h!==void 0&&(m=""+h),p.key!==void 0&&(m=""+p.key),"key"in p){h={};for(var _ in p)_!=="key"&&(h[_]=p[_])}else h=p;return p=h.ref,{$$typeof:s,type:d,key:m,ref:p!==void 0?p:null,props:h}}return Pi.Fragment=i,Pi.jsx=o,Pi.jsxs=o,Pi}var Uf;function Zb(){return Uf||(Uf=1,Pc.exports=Xb()),Pc.exports}var t=Zb(),Ic={exports:{}},Ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rf;function Kb(){if(Rf)return Ue;Rf=1;var s=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),p=Symbol.for("react.profiler"),h=Symbol.for("react.consumer"),m=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),j=Symbol.for("react.activity"),z=Symbol.iterator;function Y(S){return S===null||typeof S!="object"?null:(S=z&&S[z]||S["@@iterator"],typeof S=="function"?S:null)}var P={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,C={};function B(S,Q,de){this.props=S,this.context=Q,this.refs=C,this.updater=de||P}B.prototype.isReactComponent={},B.prototype.setState=function(S,Q){if(typeof S!="object"&&typeof S!="function"&&S!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,S,Q,"setState")},B.prototype.forceUpdate=function(S){this.updater.enqueueForceUpdate(this,S,"forceUpdate")};function U(){}U.prototype=B.prototype;function O(S,Q,de){this.props=S,this.context=Q,this.refs=C,this.updater=de||P}var ee=O.prototype=new U;ee.constructor=O,K(ee,B.prototype),ee.isPureReactComponent=!0;var ie=Array.isArray;function oe(){}var E={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function ae(S,Q,de){var ue=de.ref;return{$$typeof:s,type:S,key:Q,ref:ue!==void 0?ue:null,props:de}}function me(S,Q){return ae(S.type,Q,S.props)}function N(S){return typeof S=="object"&&S!==null&&S.$$typeof===s}function R(S){var Q={"=":"=0",":":"=2"};return"$"+S.replace(/[=:]/g,function(de){return Q[de]})}var te=/\/+/g;function M(S,Q){return typeof S=="object"&&S!==null&&S.key!=null?R(""+S.key):Q.toString(36)}function re(S){switch(S.status){case"fulfilled":return S.value;case"rejected":throw S.reason;default:switch(typeof S.status=="string"?S.then(oe,oe):(S.status="pending",S.then(function(Q){S.status==="pending"&&(S.status="fulfilled",S.value=Q)},function(Q){S.status==="pending"&&(S.status="rejected",S.reason=Q)})),S.status){case"fulfilled":return S.value;case"rejected":throw S.reason}}throw S}function A(S,Q,de,ue,Se){var ke=typeof S;(ke==="undefined"||ke==="boolean")&&(S=null);var Oe=!1;if(S===null)Oe=!0;else switch(ke){case"bigint":case"string":case"number":Oe=!0;break;case"object":switch(S.$$typeof){case s:case i:Oe=!0;break;case y:return Oe=S._init,A(Oe(S._payload),Q,de,ue,Se)}}if(Oe)return Se=Se(S),Oe=ue===""?"."+M(S,0):ue,ie(Se)?(de="",Oe!=null&&(de=Oe.replace(te,"$&/")+"/"),A(Se,Q,de,"",function(Ke){return Ke})):Se!=null&&(N(Se)&&(Se=me(Se,de+(Se.key==null||S&&S.key===Se.key?"":(""+Se.key).replace(te,"$&/")+"/")+Oe)),Q.push(Se)),1;Oe=0;var nt=ue===""?".":ue+":";if(ie(S))for(var Ge=0;Ge<S.length;Ge++)ue=S[Ge],ke=nt+M(ue,Ge),Oe+=A(ue,Q,de,ke,Se);else if(Ge=Y(S),typeof Ge=="function")for(S=Ge.call(S),Ge=0;!(ue=S.next()).done;)ue=ue.value,ke=nt+M(ue,Ge++),Oe+=A(ue,Q,de,ke,Se);else if(ke==="object"){if(typeof S.then=="function")return A(re(S),Q,de,ue,Se);throw Q=String(S),Error("Objects are not valid as a React child (found: "+(Q==="[object Object]"?"object with keys {"+Object.keys(S).join(", ")+"}":Q)+"). If you meant to render a collection of children, use an array instead.")}return Oe}function J(S,Q,de){if(S==null)return S;var ue=[],Se=0;return A(S,ue,"","",function(ke){return Q.call(de,ke,Se++)}),ue}function x(S){if(S._status===-1){var Q=S._result;Q=Q(),Q.then(function(de){(S._status===0||S._status===-1)&&(S._status=1,S._result=de)},function(de){(S._status===0||S._status===-1)&&(S._status=2,S._result=de)}),S._status===-1&&(S._status=0,S._result=Q)}if(S._status===1)return S._result.default;throw S._result}var W=typeof reportError=="function"?reportError:function(S){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof S=="object"&&S!==null&&typeof S.message=="string"?String(S.message):String(S),error:S});if(!window.dispatchEvent(Q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",S);return}console.error(S)},H={map:J,forEach:function(S,Q,de){J(S,function(){Q.apply(this,arguments)},de)},count:function(S){var Q=0;return J(S,function(){Q++}),Q},toArray:function(S){return J(S,function(Q){return Q})||[]},only:function(S){if(!N(S))throw Error("React.Children.only expected to receive a single React element child.");return S}};return Ue.Activity=j,Ue.Children=H,Ue.Component=B,Ue.Fragment=o,Ue.Profiler=p,Ue.PureComponent=O,Ue.StrictMode=d,Ue.Suspense=v,Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=E,Ue.__COMPILER_RUNTIME={__proto__:null,c:function(S){return E.H.useMemoCache(S)}},Ue.cache=function(S){return function(){return S.apply(null,arguments)}},Ue.cacheSignal=function(){return null},Ue.cloneElement=function(S,Q,de){if(S==null)throw Error("The argument must be a React element, but you passed "+S+".");var ue=K({},S.props),Se=S.key;if(Q!=null)for(ke in Q.key!==void 0&&(Se=""+Q.key),Q)!$.call(Q,ke)||ke==="key"||ke==="__self"||ke==="__source"||ke==="ref"&&Q.ref===void 0||(ue[ke]=Q[ke]);var ke=arguments.length-2;if(ke===1)ue.children=de;else if(1<ke){for(var Oe=Array(ke),nt=0;nt<ke;nt++)Oe[nt]=arguments[nt+2];ue.children=Oe}return ae(S.type,Se,ue)},Ue.createContext=function(S){return S={$$typeof:m,_currentValue:S,_currentValue2:S,_threadCount:0,Provider:null,Consumer:null},S.Provider=S,S.Consumer={$$typeof:h,_context:S},S},Ue.createElement=function(S,Q,de){var ue,Se={},ke=null;if(Q!=null)for(ue in Q.key!==void 0&&(ke=""+Q.key),Q)$.call(Q,ue)&&ue!=="key"&&ue!=="__self"&&ue!=="__source"&&(Se[ue]=Q[ue]);var Oe=arguments.length-2;if(Oe===1)Se.children=de;else if(1<Oe){for(var nt=Array(Oe),Ge=0;Ge<Oe;Ge++)nt[Ge]=arguments[Ge+2];Se.children=nt}if(S&&S.defaultProps)for(ue in Oe=S.defaultProps,Oe)Se[ue]===void 0&&(Se[ue]=Oe[ue]);return ae(S,ke,Se)},Ue.createRef=function(){return{current:null}},Ue.forwardRef=function(S){return{$$typeof:_,render:S}},Ue.isValidElement=N,Ue.lazy=function(S){return{$$typeof:y,_payload:{_status:-1,_result:S},_init:x}},Ue.memo=function(S,Q){return{$$typeof:g,type:S,compare:Q===void 0?null:Q}},Ue.startTransition=function(S){var Q=E.T,de={};E.T=de;try{var ue=S(),Se=E.S;Se!==null&&Se(de,ue),typeof ue=="object"&&ue!==null&&typeof ue.then=="function"&&ue.then(oe,W)}catch(ke){W(ke)}finally{Q!==null&&de.types!==null&&(Q.types=de.types),E.T=Q}},Ue.unstable_useCacheRefresh=function(){return E.H.useCacheRefresh()},Ue.use=function(S){return E.H.use(S)},Ue.useActionState=function(S,Q,de){return E.H.useActionState(S,Q,de)},Ue.useCallback=function(S,Q){return E.H.useCallback(S,Q)},Ue.useContext=function(S){return E.H.useContext(S)},Ue.useDebugValue=function(){},Ue.useDeferredValue=function(S,Q){return E.H.useDeferredValue(S,Q)},Ue.useEffect=function(S,Q){return E.H.useEffect(S,Q)},Ue.useEffectEvent=function(S){return E.H.useEffectEvent(S)},Ue.useId=function(){return E.H.useId()},Ue.useImperativeHandle=function(S,Q,de){return E.H.useImperativeHandle(S,Q,de)},Ue.useInsertionEffect=function(S,Q){return E.H.useInsertionEffect(S,Q)},Ue.useLayoutEffect=function(S,Q){return E.H.useLayoutEffect(S,Q)},Ue.useMemo=function(S,Q){return E.H.useMemo(S,Q)},Ue.useOptimistic=function(S,Q){return E.H.useOptimistic(S,Q)},Ue.useReducer=function(S,Q,de){return E.H.useReducer(S,Q,de)},Ue.useRef=function(S){return E.H.useRef(S)},Ue.useState=function(S){return E.H.useState(S)},Ue.useSyncExternalStore=function(S,Q,de){return E.H.useSyncExternalStore(S,Q,de)},Ue.useTransition=function(){return E.H.useTransition()},Ue.version="19.2.6",Ue}var Hf;function Od(){return Hf||(Hf=1,Ic.exports=Kb()),Ic.exports}var f=Od();const Vb=Qb(f),Jb=$b({__proto__:null,default:Vb},[f]);var ed={exports:{}},Ii={},td={exports:{}},ad={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lf;function Fb(){return Lf||(Lf=1,(function(s){function i(A,J){var x=A.length;A.push(J);e:for(;0<x;){var W=x-1>>>1,H=A[W];if(0<p(H,J))A[W]=J,A[x]=H,x=W;else break e}}function o(A){return A.length===0?null:A[0]}function d(A){if(A.length===0)return null;var J=A[0],x=A.pop();if(x!==J){A[0]=x;e:for(var W=0,H=A.length,S=H>>>1;W<S;){var Q=2*(W+1)-1,de=A[Q],ue=Q+1,Se=A[ue];if(0>p(de,x))ue<H&&0>p(Se,de)?(A[W]=Se,A[ue]=x,W=ue):(A[W]=de,A[Q]=x,W=Q);else if(ue<H&&0>p(Se,x))A[W]=Se,A[ue]=x,W=ue;else break e}}return J}function p(A,J){var x=A.sortIndex-J.sortIndex;return x!==0?x:A.id-J.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var h=performance;s.unstable_now=function(){return h.now()}}else{var m=Date,_=m.now();s.unstable_now=function(){return m.now()-_}}var v=[],g=[],y=1,j=null,z=3,Y=!1,P=!1,K=!1,C=!1,B=typeof setTimeout=="function"?setTimeout:null,U=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function ee(A){for(var J=o(g);J!==null;){if(J.callback===null)d(g);else if(J.startTime<=A)d(g),J.sortIndex=J.expirationTime,i(v,J);else break;J=o(g)}}function ie(A){if(K=!1,ee(A),!P)if(o(v)!==null)P=!0,oe||(oe=!0,R());else{var J=o(g);J!==null&&re(ie,J.startTime-A)}}var oe=!1,E=-1,$=5,ae=-1;function me(){return C?!0:!(s.unstable_now()-ae<$)}function N(){if(C=!1,oe){var A=s.unstable_now();ae=A;var J=!0;try{e:{P=!1,K&&(K=!1,U(E),E=-1),Y=!0;var x=z;try{t:{for(ee(A),j=o(v);j!==null&&!(j.expirationTime>A&&me());){var W=j.callback;if(typeof W=="function"){j.callback=null,z=j.priorityLevel;var H=W(j.expirationTime<=A);if(A=s.unstable_now(),typeof H=="function"){j.callback=H,ee(A),J=!0;break t}j===o(v)&&d(v),ee(A)}else d(v);j=o(v)}if(j!==null)J=!0;else{var S=o(g);S!==null&&re(ie,S.startTime-A),J=!1}}break e}finally{j=null,z=x,Y=!1}J=void 0}}finally{J?R():oe=!1}}}var R;if(typeof O=="function")R=function(){O(N)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,M=te.port2;te.port1.onmessage=N,R=function(){M.postMessage(null)}}else R=function(){B(N,0)};function re(A,J){E=B(function(){A(s.unstable_now())},J)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(A){A.callback=null},s.unstable_forceFrameRate=function(A){0>A||125<A?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<A?Math.floor(1e3/A):5},s.unstable_getCurrentPriorityLevel=function(){return z},s.unstable_next=function(A){switch(z){case 1:case 2:case 3:var J=3;break;default:J=z}var x=z;z=J;try{return A()}finally{z=x}},s.unstable_requestPaint=function(){C=!0},s.unstable_runWithPriority=function(A,J){switch(A){case 1:case 2:case 3:case 4:case 5:break;default:A=3}var x=z;z=A;try{return J()}finally{z=x}},s.unstable_scheduleCallback=function(A,J,x){var W=s.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?W+x:W):x=W,A){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=x+H,A={id:y++,callback:J,priorityLevel:A,startTime:x,expirationTime:H,sortIndex:-1},x>W?(A.sortIndex=x,i(g,A),o(v)===null&&A===o(g)&&(K?(U(E),E=-1):K=!0,re(ie,x-W))):(A.sortIndex=H,i(v,A),P||Y||(P=!0,oe||(oe=!0,R()))),A},s.unstable_shouldYield=me,s.unstable_wrapCallback=function(A){var J=z;return function(){var x=z;z=J;try{return A.apply(this,arguments)}finally{z=x}}}})(ad)),ad}var qf;function Wb(){return qf||(qf=1,td.exports=Fb()),td.exports}var nd={exports:{}},It={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bf;function Pb(){if(Bf)return It;Bf=1;var s=Od();function i(v){var g="https://react.dev/errors/"+v;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)g+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+v+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(){}var d={d:{f:o,r:function(){throw Error(i(522))},D:o,C:o,L:o,m:o,X:o,S:o,M:o},p:0,findDOMNode:null},p=Symbol.for("react.portal");function h(v,g,y){var j=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:p,key:j==null?null:""+j,children:v,containerInfo:g,implementation:y}}var m=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,g){if(v==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return It.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,It.createPortal=function(v,g){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(i(299));return h(v,g,null,y)},It.flushSync=function(v){var g=m.T,y=d.p;try{if(m.T=null,d.p=2,v)return v()}finally{m.T=g,d.p=y,d.d.f()}},It.preconnect=function(v,g){typeof v=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,d.d.C(v,g))},It.prefetchDNS=function(v){typeof v=="string"&&d.d.D(v)},It.preinit=function(v,g){if(typeof v=="string"&&g&&typeof g.as=="string"){var y=g.as,j=_(y,g.crossOrigin),z=typeof g.integrity=="string"?g.integrity:void 0,Y=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;y==="style"?d.d.S(v,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:j,integrity:z,fetchPriority:Y}):y==="script"&&d.d.X(v,{crossOrigin:j,integrity:z,fetchPriority:Y,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},It.preinitModule=function(v,g){if(typeof v=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var y=_(g.as,g.crossOrigin);d.d.M(v,{crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&d.d.M(v)},It.preload=function(v,g){if(typeof v=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var y=g.as,j=_(y,g.crossOrigin);d.d.L(v,y,{crossOrigin:j,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},It.preloadModule=function(v,g){if(typeof v=="string")if(g){var y=_(g.as,g.crossOrigin);d.d.m(v,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:y,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else d.d.m(v)},It.requestFormReset=function(v){d.d.r(v)},It.unstable_batchedUpdates=function(v,g){return v(g)},It.useFormState=function(v,g,y){return m.H.useFormState(v,g,y)},It.useFormStatus=function(){return m.H.useHostTransitionStatus()},It.version="19.2.6",It}var Gf;function Vh(){if(Gf)return nd.exports;Gf=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),nd.exports=Pb(),nd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function Ib(){if(Yf)return Ii;Yf=1;var s=Wb(),i=Od(),o=Vh();function d(e){var a="https://react.dev/errors/"+e;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)a+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function p(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function h(e){var a=e,n=e;if(e.alternate)for(;a.return;)a=a.return;else{e=a;do a=e,(a.flags&4098)!==0&&(n=a.return),e=a.return;while(e)}return a.tag===3?n:null}function m(e){if(e.tag===13){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function _(e){if(e.tag===31){var a=e.memoizedState;if(a===null&&(e=e.alternate,e!==null&&(a=e.memoizedState)),a!==null)return a.dehydrated}return null}function v(e){if(h(e)!==e)throw Error(d(188))}function g(e){var a=e.alternate;if(!a){if(a=h(e),a===null)throw Error(d(188));return a!==e?null:e}for(var n=e,l=a;;){var r=n.return;if(r===null)break;var c=r.alternate;if(c===null){if(l=r.return,l!==null){n=l;continue}break}if(r.child===c.child){for(c=r.child;c;){if(c===n)return v(r),e;if(c===l)return v(r),a;c=c.sibling}throw Error(d(188))}if(n.return!==l.return)n=r,l=c;else{for(var u=!1,b=r.child;b;){if(b===n){u=!0,n=r,l=c;break}if(b===l){u=!0,l=r,n=c;break}b=b.sibling}if(!u){for(b=c.child;b;){if(b===n){u=!0,n=c,l=r;break}if(b===l){u=!0,l=c,n=r;break}b=b.sibling}if(!u)throw Error(d(189))}}if(n.alternate!==l)throw Error(d(190))}if(n.tag!==3)throw Error(d(188));return n.stateNode.current===n?e:a}function y(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e;for(e=e.child;e!==null;){if(a=y(e),a!==null)return a;e=e.sibling}return null}var j=Object.assign,z=Symbol.for("react.element"),Y=Symbol.for("react.transitional.element"),P=Symbol.for("react.portal"),K=Symbol.for("react.fragment"),C=Symbol.for("react.strict_mode"),B=Symbol.for("react.profiler"),U=Symbol.for("react.consumer"),O=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),oe=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ae=Symbol.for("react.activity"),me=Symbol.for("react.memo_cache_sentinel"),N=Symbol.iterator;function R(e){return e===null||typeof e!="object"?null:(e=N&&e[N]||e["@@iterator"],typeof e=="function"?e:null)}var te=Symbol.for("react.client.reference");function M(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===te?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case K:return"Fragment";case B:return"Profiler";case C:return"StrictMode";case ie:return"Suspense";case oe:return"SuspenseList";case ae:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case P:return"Portal";case O:return e.displayName||"Context";case U:return(e._context.displayName||"Context")+".Consumer";case ee:var a=e.render;return e=e.displayName,e||(e=a.displayName||a.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case E:return a=e.displayName||null,a!==null?a:M(e.type)||"Memo";case $:a=e._payload,e=e._init;try{return M(e(a))}catch{}}return null}var re=Array.isArray,A=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,x={pending:!1,data:null,method:null,action:null},W=[],H=-1;function S(e){return{current:e}}function Q(e){0>H||(e.current=W[H],W[H]=null,H--)}function de(e,a){H++,W[H]=e.current,e.current=a}var ue=S(null),Se=S(null),ke=S(null),Oe=S(null);function nt(e,a){switch(de(ke,a),de(Se,e),de(ue,null),a.nodeType){case 9:case 11:e=(e=a.documentElement)&&(e=e.namespaceURI)?af(e):0;break;default:if(e=a.tagName,a=a.namespaceURI)a=af(a),e=nf(a,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Q(ue),de(ue,e)}function Ge(){Q(ue),Q(Se),Q(ke)}function Ke(e){e.memoizedState!==null&&de(Oe,e);var a=ue.current,n=nf(a,e.type);a!==n&&(de(Se,e),de(ue,n))}function Ct(e){Se.current===e&&(Q(ue),Q(Se)),Oe.current===e&&(Q(Oe),Vi._currentValue=x)}var Nt,we;function Le(e){if(Nt===void 0)try{throw Error()}catch(n){var a=n.stack.trim().match(/\n( *(at )?)/);Nt=a&&a[1]||"",we=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Nt+e+we}var na=!1;function $t(e,a){if(!e||na)return"";na=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(a){var le=function(){throw Error()};if(Object.defineProperty(le.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(le,[])}catch(F){var V=F}Reflect.construct(e,[],le)}else{try{le.call()}catch(F){V=F}e.call(le.prototype)}}else{try{throw Error()}catch(F){V=F}(le=e())&&typeof le.catch=="function"&&le.catch(function(){})}}catch(F){if(F&&V&&typeof F.stack=="string")return[F.stack,V.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=l.DetermineComponentFrameRoot(),u=c[0],b=c[1];if(u&&b){var k=u.split(`
`),Z=b.split(`
`);for(r=l=0;l<k.length&&!k[l].includes("DetermineComponentFrameRoot");)l++;for(;r<Z.length&&!Z[r].includes("DetermineComponentFrameRoot");)r++;if(l===k.length||r===Z.length)for(l=k.length-1,r=Z.length-1;1<=l&&0<=r&&k[l]!==Z[r];)r--;for(;1<=l&&0<=r;l--,r--)if(k[l]!==Z[r]){if(l!==1||r!==1)do if(l--,r--,0>r||k[l]!==Z[r]){var I=`
`+k[l].replace(" at new "," at ");return e.displayName&&I.includes("<anonymous>")&&(I=I.replace("<anonymous>",e.displayName)),I}while(1<=l&&0<=r);break}}}finally{na=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?Le(n):""}function pa(e,a){switch(e.tag){case 26:case 27:case 5:return Le(e.type);case 16:return Le("Lazy");case 13:return e.child!==a&&a!==null?Le("Suspense Fallback"):Le("Suspense");case 19:return Le("SuspenseList");case 0:case 15:return $t(e.type,!1);case 11:return $t(e.type.render,!1);case 1:return $t(e.type,!0);case 31:return Le("Activity");default:return""}}function xt(e){try{var a="",n=null;do a+=pa(e,n),n=e,e=e.return;while(e);return a}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Zt=Object.prototype.hasOwnProperty,Pt=s.unstable_scheduleCallback,zt=s.unstable_cancelCallback,ma=s.unstable_shouldYield,T=s.unstable_requestPaint,be=s.unstable_now,qe=s.unstable_getCurrentPriorityLevel,ye=s.unstable_ImmediatePriority,dt=s.unstable_UserBlockingPriority,G=s.unstable_NormalPriority,Ne=s.unstable_LowPriority,je=s.unstable_IdlePriority,Te=s.log,Pe=s.unstable_setDisableYieldValue,Ve=null,Ye=null;function Re(e){if(typeof Te=="function"&&Pe(e),Ye&&typeof Ye.setStrictMode=="function")try{Ye.setStrictMode(Ve,e)}catch{}}var ut=Math.clz32?Math.clz32:Wn,vl=Math.log,Fn=Math.LN2;function Wn(e){return e>>>=0,e===0?32:31-(vl(e)/Fn|0)|0}var Ga=256,fa=262144,Ya=4194304;function ta(e){var a=e&42;if(a!==0)return a;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function L(e,a,n){var l=e.pendingLanes;if(l===0)return 0;var r=0,c=e.suspendedLanes,u=e.pingedLanes;e=e.warmLanes;var b=l&134217727;return b!==0?(l=b&~c,l!==0?r=ta(l):(u&=b,u!==0?r=ta(u):n||(n=b&~e,n!==0&&(r=ta(n))))):(b=l&~c,b!==0?r=ta(b):u!==0?r=ta(u):n||(n=l&~e,n!==0&&(r=ta(n)))),r===0?0:a!==0&&a!==r&&(a&c)===0&&(c=r&-r,n=a&-a,c>=n||c===32&&(n&4194048)!==0)?a:r}function ce(e,a){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&a)===0}function se(e,a){switch(e){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function De(){var e=Ya;return Ya<<=1,(Ya&62914560)===0&&(Ya=4194304),e}function Ee(e){for(var a=[],n=0;31>n;n++)a.push(e);return a}function Ie(e,a){e.pendingLanes|=a,a!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function lt(e,a,n,l,r,c){var u=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var b=e.entanglements,k=e.expirationTimes,Z=e.hiddenUpdates;for(n=u&~n;0<n;){var I=31-ut(n),le=1<<I;b[I]=0,k[I]=-1;var V=Z[I];if(V!==null)for(Z[I]=null,I=0;I<V.length;I++){var F=V[I];F!==null&&(F.lane&=-536870913)}n&=~le}l!==0&&it(e,l,0),c!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=c&~(u&~a))}function it(e,a,n){e.pendingLanes|=a,e.suspendedLanes&=~a;var l=31-ut(a);e.entangledLanes|=a,e.entanglements[l]=e.entanglements[l]|1073741824|n&261930}function st(e,a){var n=e.entangledLanes|=a;for(e=e.entanglements;n;){var l=31-ut(n),r=1<<l;r&a|e[l]&a&&(e[l]|=a),n&=~r}}function w(e,a){var n=a&-a;return n=(n&42)!==0?1:he(n),(n&(e.suspendedLanes|a))!==0?0:n}function he(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function xe(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ae(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Cf(e.type))}function At(e,a){var n=J.p;try{return J.p=e,a()}finally{J.p=n}}var ha=Math.random().toString(36).slice(2),jt="__reactFiber$"+ha,la="__reactProps$"+ha,jl="__reactContainer$"+ha,$o="__reactEvents$"+ha,Dx="__reactListeners$"+ha,Ox="__reactHandles$"+ha,$d="__reactResources$"+ha,ci="__reactMarker$"+ha;function Qo(e){delete e[jt],delete e[la],delete e[$o],delete e[Dx],delete e[Ox]}function wl(e){var a=e[jt];if(a)return a;for(var n=e.parentNode;n;){if(a=n[jl]||n[jt]){if(n=a.alternate,a.child!==null||n!==null&&n.child!==null)for(e=uf(e);e!==null;){if(n=e[jt])return n;e=uf(e)}return a}e=n,n=e.parentNode}return null}function Nl(e){if(e=e[jt]||e[jl]){var a=e.tag;if(a===5||a===6||a===13||a===31||a===26||a===27||a===3)return e}return null}function di(e){var a=e.tag;if(a===5||a===26||a===27||a===6)return e.stateNode;throw Error(d(33))}function _l(e){var a=e[$d];return a||(a=e[$d]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Qt(e){e[ci]=!0}var Qd=new Set,Xd={};function Pn(e,a){Sl(e,a),Sl(e+"Capture",a)}function Sl(e,a){for(Xd[e]=a,e=0;e<a.length;e++)Qd.add(a[e])}var Ax=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Zd={},Kd={};function Ux(e){return Zt.call(Kd,e)?!0:Zt.call(Zd,e)?!1:Ax.test(e)?Kd[e]=!0:(Zd[e]=!0,!1)}function ps(e,a,n){if(Ux(a))if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":e.removeAttribute(a);return;case"boolean":var l=a.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(a);return}}e.setAttribute(a,""+n)}}function ms(e,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttribute(a,""+n)}}function Fa(e,a,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttributeNS(a,n,""+l)}}function Ca(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Vd(e){var a=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function Rx(e,a,n){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,a);if(!e.hasOwnProperty(a)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var r=l.get,c=l.set;return Object.defineProperty(e,a,{configurable:!0,get:function(){return r.call(this)},set:function(u){n=""+u,c.call(this,u)}}),Object.defineProperty(e,a,{enumerable:l.enumerable}),{getValue:function(){return n},setValue:function(u){n=""+u},stopTracking:function(){e._valueTracker=null,delete e[a]}}}}function Xo(e){if(!e._valueTracker){var a=Vd(e)?"checked":"value";e._valueTracker=Rx(e,a,""+e[a])}}function Jd(e){if(!e)return!1;var a=e._valueTracker;if(!a)return!0;var n=a.getValue(),l="";return e&&(l=Vd(e)?e.checked?"true":"false":e.value),e=l,e!==n?(a.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Hx=/[\n"\\]/g;function za(e){return e.replace(Hx,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Zo(e,a,n,l,r,c,u,b){e.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.type=u:e.removeAttribute("type"),a!=null?u==="number"?(a===0&&e.value===""||e.value!=a)&&(e.value=""+Ca(a)):e.value!==""+Ca(a)&&(e.value=""+Ca(a)):u!=="submit"&&u!=="reset"||e.removeAttribute("value"),a!=null?Ko(e,u,Ca(a)):n!=null?Ko(e,u,Ca(n)):l!=null&&e.removeAttribute("value"),r==null&&c!=null&&(e.defaultChecked=!!c),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?e.name=""+Ca(b):e.removeAttribute("name")}function Fd(e,a,n,l,r,c,u,b){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(e.type=c),a!=null||n!=null){if(!(c!=="submit"&&c!=="reset"||a!=null)){Xo(e);return}n=n!=null?""+Ca(n):"",a=a!=null?""+Ca(a):n,b||a===e.value||(e.value=a),e.defaultValue=a}l=l??r,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=b?e.checked:!!l,e.defaultChecked=!!l,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(e.name=u),Xo(e)}function Ko(e,a,n){a==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function kl(e,a,n,l){if(e=e.options,a){a={};for(var r=0;r<n.length;r++)a["$"+n[r]]=!0;for(n=0;n<e.length;n++)r=a.hasOwnProperty("$"+e[n].value),e[n].selected!==r&&(e[n].selected=r),r&&l&&(e[n].defaultSelected=!0)}else{for(n=""+Ca(n),a=null,r=0;r<e.length;r++){if(e[r].value===n){e[r].selected=!0,l&&(e[r].defaultSelected=!0);return}a!==null||e[r].disabled||(a=e[r])}a!==null&&(a.selected=!0)}}function Wd(e,a,n){if(a!=null&&(a=""+Ca(a),a!==e.value&&(e.value=a),n==null)){e.defaultValue!==a&&(e.defaultValue=a);return}e.defaultValue=n!=null?""+Ca(n):""}function Pd(e,a,n,l){if(a==null){if(l!=null){if(n!=null)throw Error(d(92));if(re(l)){if(1<l.length)throw Error(d(93));l=l[0]}n=l}n==null&&(n=""),a=n}n=Ca(a),e.defaultValue=n,l=e.textContent,l===n&&l!==""&&l!==null&&(e.value=l),Xo(e)}function Cl(e,a){if(a){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=a;return}}e.textContent=a}var Lx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Id(e,a,n){var l=a.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?l?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="":l?e.setProperty(a,n):typeof n!="number"||n===0||Lx.has(a)?a==="float"?e.cssFloat=n:e[a]=(""+n).trim():e[a]=n+"px"}function eu(e,a,n){if(a!=null&&typeof a!="object")throw Error(d(62));if(e=e.style,n!=null){for(var l in n)!n.hasOwnProperty(l)||a!=null&&a.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var r in a)l=a[r],a.hasOwnProperty(r)&&n[r]!==l&&Id(e,r,l)}else for(var c in a)a.hasOwnProperty(c)&&Id(e,c,a[c])}function Vo(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Bx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function hs(e){return Bx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wa(){}var Jo=null;function Fo(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var zl=null,Tl=null;function tu(e){var a=Nl(e);if(a&&(e=a.stateNode)){var n=e[la]||null;e:switch(e=a.stateNode,a.type){case"input":if(Zo(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),a=n.name,n.type==="radio"&&a!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+za(""+a)+'"][type="radio"]'),a=0;a<n.length;a++){var l=n[a];if(l!==e&&l.form===e.form){var r=l[la]||null;if(!r)throw Error(d(90));Zo(l,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(a=0;a<n.length;a++)l=n[a],l.form===e.form&&Jd(l)}break e;case"textarea":Wd(e,n.value,n.defaultValue);break e;case"select":a=n.value,a!=null&&kl(e,!!n.multiple,a,!1)}}}var Wo=!1;function au(e,a,n){if(Wo)return e(a,n);Wo=!0;try{var l=e(a);return l}finally{if(Wo=!1,(zl!==null||Tl!==null)&&(ao(),zl&&(a=zl,e=Tl,Tl=zl=null,tu(a),e)))for(a=0;a<e.length;a++)tu(e[a])}}function ui(e,a){var n=e.stateNode;if(n===null)return null;var l=n[la]||null;if(l===null)return null;n=l[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(d(231,a,typeof n));return n}var Pa=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Po=!1;if(Pa)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){Po=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{Po=!1}var bn=null,Io=null,xs=null;function nu(){if(xs)return xs;var e,a=Io,n=a.length,l,r="value"in bn?bn.value:bn.textContent,c=r.length;for(e=0;e<n&&a[e]===r[e];e++);var u=n-e;for(l=1;l<=u&&a[n-l]===r[c-l];l++);return xs=r.slice(e,1<l?1-l:void 0)}function gs(e){var a=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&a===13&&(e=13)):e=a,e===10&&(e=13),32<=e||e===13?e:0}function bs(){return!0}function lu(){return!1}function ia(e){function a(n,l,r,c,u){this._reactName=n,this._targetInst=r,this.type=l,this.nativeEvent=c,this.target=u,this.currentTarget=null;for(var b in e)e.hasOwnProperty(b)&&(n=e[b],this[b]=n?n(c):c[b]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?bs:lu,this.isPropagationStopped=lu,this}return j(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=bs)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=bs)},persist:function(){},isPersistent:bs}),a}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=ia(In),mi=j({},In,{view:0,detail:0}),Gx=ia(mi),er,tr,fi,vs=j({},mi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nr,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==fi&&(fi&&e.type==="mousemove"?(er=e.screenX-fi.screenX,tr=e.screenY-fi.screenY):tr=er=0,fi=e),er)},movementY:function(e){return"movementY"in e?e.movementY:tr}}),iu=ia(vs),Yx=j({},vs,{dataTransfer:0}),$x=ia(Yx),Qx=j({},mi,{relatedTarget:0}),ar=ia(Qx),Xx=j({},In,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=ia(Xx),Kx=j({},In,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Vx=ia(Kx),Jx=j({},In,{data:0}),su=ia(Jx),Fx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Px={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(e){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(e):(e=Px[e])?!!a[e]:!1}function nr(){return Ix}var eg=j({},mi,{key:function(e){if(e.key){var a=Fx[e.key]||e.key;if(a!=="Unidentified")return a}return e.type==="keypress"?(e=gs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nr,charCode:function(e){return e.type==="keypress"?gs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),tg=ia(eg),ag=j({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ou=ia(ag),ng=j({},mi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nr}),lg=ia(ng),ig=j({},In,{propertyName:0,elapsedTime:0,pseudoElement:0}),sg=ia(ig),og=j({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),rg=ia(og),cg=j({},In,{newState:0,oldState:0}),dg=ia(cg),ug=[9,13,27,32],lr=Pa&&"CompositionEvent"in window,hi=null;Pa&&"documentMode"in document&&(hi=document.documentMode);var pg=Pa&&"TextEvent"in window&&!hi,ru=Pa&&(!lr||hi&&8<hi&&11>=hi),cu=" ",du=!1;function uu(e,a){switch(e){case"keyup":return ug.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var El=!1;function mg(e,a){switch(e){case"compositionend":return pu(a);case"keypress":return a.which!==32?null:(du=!0,cu);case"textInput":return e=a.data,e===cu&&du?null:e;default:return null}}function fg(e,a){if(El)return e==="compositionend"||!lr&&uu(e,a)?(e=nu(),xs=Io=bn=null,El=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return ru&&a.locale!=="ko"?null:a.data;default:return null}}var hg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function mu(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a==="input"?!!hg[e.type]:a==="textarea"}function fu(e,a,n,l){zl?Tl?Tl.push(l):Tl=[l]:zl=l,a=co(a,"onChange"),0<a.length&&(n=new ys("onChange","change",null,n,l),e.push({event:n,listeners:a}))}var xi=null,gi=null;function xg(e){Fm(e,0)}function js(e){var a=di(e);if(Jd(a))return e}function hu(e,a){if(e==="change")return a}var xu=!1;if(Pa){var ir;if(Pa){var sr="oninput"in document;if(!sr){var gu=document.createElement("div");gu.setAttribute("oninput","return;"),sr=typeof gu.oninput=="function"}ir=sr}else ir=!1;xu=ir&&(!document.documentMode||9<document.documentMode)}function bu(){xi&&(xi.detachEvent("onpropertychange",yu),gi=xi=null)}function yu(e){if(e.propertyName==="value"&&js(gi)){var a=[];fu(a,gi,e,Fo(e)),au(xg,a)}}function gg(e,a,n){e==="focusin"?(bu(),xi=a,gi=n,xi.attachEvent("onpropertychange",yu)):e==="focusout"&&bu()}function bg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return js(gi)}function yg(e,a){if(e==="click")return js(a)}function vg(e,a){if(e==="input"||e==="change")return js(a)}function jg(e,a){return e===a&&(e!==0||1/e===1/a)||e!==e&&a!==a}var xa=typeof Object.is=="function"?Object.is:jg;function bi(e,a){if(xa(e,a))return!0;if(typeof e!="object"||e===null||typeof a!="object"||a===null)return!1;var n=Object.keys(e),l=Object.keys(a);if(n.length!==l.length)return!1;for(l=0;l<n.length;l++){var r=n[l];if(!Zt.call(a,r)||!xa(e[r],a[r]))return!1}return!0}function vu(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ju(e,a){var n=vu(e);e=0;for(var l;n;){if(n.nodeType===3){if(l=e+n.textContent.length,e<=a&&l>=a)return{node:n,offset:a-e};e=l}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=vu(n)}}function wu(e,a){return e&&a?e===a?!0:e&&e.nodeType===3?!1:a&&a.nodeType===3?wu(e,a.parentNode):"contains"in e?e.contains(a):e.compareDocumentPosition?!!(e.compareDocumentPosition(a)&16):!1:!1}function Nu(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var a=fs(e.document);a instanceof e.HTMLIFrameElement;){try{var n=typeof a.contentWindow.location.href=="string"}catch{n=!1}if(n)e=a.contentWindow;else break;a=fs(e.document)}return a}function or(e){var a=e&&e.nodeName&&e.nodeName.toLowerCase();return a&&(a==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||a==="textarea"||e.contentEditable==="true")}var wg=Pa&&"documentMode"in document&&11>=document.documentMode,Ml=null,rr=null,yi=null,cr=!1;function _u(e,a,n){var l=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;cr||Ml==null||Ml!==fs(l)||(l=Ml,"selectionStart"in l&&or(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),yi&&bi(yi,l)||(yi=l,l=co(rr,"onSelect"),0<l.length&&(a=new ys("onSelect","select",null,a,n),e.push({event:a,listeners:l}),a.target=Ml)))}function el(e,a){var n={};return n[e.toLowerCase()]=a.toLowerCase(),n["Webkit"+e]="webkit"+a,n["Moz"+e]="moz"+a,n}var Dl={animationend:el("Animation","AnimationEnd"),animationiteration:el("Animation","AnimationIteration"),animationstart:el("Animation","AnimationStart"),transitionrun:el("Transition","TransitionRun"),transitionstart:el("Transition","TransitionStart"),transitioncancel:el("Transition","TransitionCancel"),transitionend:el("Transition","TransitionEnd")},dr={},Su={};Pa&&(Su=document.createElement("div").style,"AnimationEvent"in window||(delete Dl.animationend.animation,delete Dl.animationiteration.animation,delete Dl.animationstart.animation),"TransitionEvent"in window||delete Dl.transitionend.transition);function tl(e){if(dr[e])return dr[e];if(!Dl[e])return e;var a=Dl[e],n;for(n in a)if(a.hasOwnProperty(n)&&n in Su)return dr[e]=a[n];return e}var ku=tl("animationend"),Cu=tl("animationiteration"),zu=tl("animationstart"),Ng=tl("transitionrun"),_g=tl("transitionstart"),Sg=tl("transitioncancel"),Tu=tl("transitionend"),Eu=new Map,ur="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ur.push("scrollEnd");function La(e,a){Eu.set(e,a),Pn(a,[e])}var ws=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ta=[],Ol=0,pr=0;function Ns(){for(var e=Ol,a=pr=Ol=0;a<e;){var n=Ta[a];Ta[a++]=null;var l=Ta[a];Ta[a++]=null;var r=Ta[a];Ta[a++]=null;var c=Ta[a];if(Ta[a++]=null,l!==null&&r!==null){var u=l.pending;u===null?r.next=r:(r.next=u.next,u.next=r),l.pending=r}c!==0&&Mu(n,r,c)}}function _s(e,a,n,l){Ta[Ol++]=e,Ta[Ol++]=a,Ta[Ol++]=n,Ta[Ol++]=l,pr|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function mr(e,a,n,l){return _s(e,a,n,l),Ss(e)}function al(e,a){return _s(e,null,null,a),Ss(e)}function Mu(e,a,n){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n);for(var r=!1,c=e.return;c!==null;)c.childLanes|=n,l=c.alternate,l!==null&&(l.childLanes|=n),c.tag===22&&(e=c.stateNode,e===null||e._visibility&1||(r=!0)),e=c,c=c.return;return e.tag===3?(c=e.stateNode,r&&a!==null&&(r=31-ut(n),e=c.hiddenUpdates,l=e[r],l===null?e[r]=[a]:l.push(a),a.lane=n|536870912),c):null}function Ss(e){if(50<Gi)throw Gi=0,wc=null,Error(d(185));for(var a=e.return;a!==null;)e=a,a=e.return;return e.tag===3?e.stateNode:null}var Al={};function kg(e,a,n,l){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ga(e,a,n,l){return new kg(e,a,n,l)}function fr(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ia(e,a){var n=e.alternate;return n===null?(n=ga(e.tag,a,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=a,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,a=e.dependencies,n.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Du(e,a){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=a,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,a=n.dependencies,e.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),e}function ks(e,a,n,l,r,c){var u=0;if(l=e,typeof e=="function")fr(e)&&(u=1);else if(typeof e=="string")u=Mb(e,n,ue.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ae:return e=ga(31,n,a,r),e.elementType=ae,e.lanes=c,e;case K:return nl(n.children,r,c,a);case C:u=8,r|=24;break;case B:return e=ga(12,n,a,r|2),e.elementType=B,e.lanes=c,e;case ie:return e=ga(13,n,a,r),e.elementType=ie,e.lanes=c,e;case oe:return e=ga(19,n,a,r),e.elementType=oe,e.lanes=c,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case O:u=10;break e;case U:u=9;break e;case ee:u=11;break e;case E:u=14;break e;case $:u=16,l=null;break e}u=29,n=Error(d(130,e===null?"null":typeof e,"")),l=null}return a=ga(u,n,a,r),a.elementType=e,a.type=l,a.lanes=c,a}function nl(e,a,n,l){return e=ga(7,e,l,a),e.lanes=n,e}function hr(e,a,n){return e=ga(6,e,null,a),e.lanes=n,e}function Ou(e){var a=ga(18,null,null,0);return a.stateNode=e,a}function xr(e,a,n){return a=ga(4,e.children!==null?e.children:[],e.key,a),a.lanes=n,a.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},a}var Au=new WeakMap;function Ea(e,a){if(typeof e=="object"&&e!==null){var n=Au.get(e);return n!==void 0?n:(a={value:e,source:a,stack:xt(a)},Au.set(e,a),a)}return{value:e,source:a,stack:xt(a)}}var Ul=[],Rl=0,Cs=null,vi=0,Ma=[],Da=0,yn=null,$a=1,Qa="";function en(e,a){Ul[Rl++]=vi,Ul[Rl++]=Cs,Cs=e,vi=a}function Uu(e,a,n){Ma[Da++]=$a,Ma[Da++]=Qa,Ma[Da++]=yn,yn=e;var l=$a;e=Qa;var r=32-ut(l)-1;l&=~(1<<r),n+=1;var c=32-ut(a)+r;if(30<c){var u=r-r%5;c=(l&(1<<u)-1).toString(32),l>>=u,r-=u,$a=1<<32-ut(a)+r|n<<r|l,Qa=c+e}else $a=1<<c|n<<r|l,Qa=e}function gr(e){e.return!==null&&(en(e,1),Uu(e,1,0))}function br(e){for(;e===Cs;)Cs=Ul[--Rl],Ul[Rl]=null,vi=Ul[--Rl],Ul[Rl]=null;for(;e===yn;)yn=Ma[--Da],Ma[Da]=null,Qa=Ma[--Da],Ma[Da]=null,$a=Ma[--Da],Ma[Da]=null}function Ru(e,a){Ma[Da++]=$a,Ma[Da++]=Qa,Ma[Da++]=yn,$a=a.id,Qa=a.overflow,yn=e}var Kt=null,gt=null,We=!1,vn=null,Oa=!1,yr=Error(d(519));function jn(e){var a=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw ji(Ea(a,e)),yr}function Hu(e){var a=e.stateNode,n=e.type,l=e.memoizedProps;switch(a[jt]=e,a[la]=l,n){case"dialog":Qe("cancel",a),Qe("close",a);break;case"iframe":case"object":case"embed":Qe("load",a);break;case"video":case"audio":for(n=0;n<$i.length;n++)Qe($i[n],a);break;case"source":Qe("error",a);break;case"img":case"image":case"link":Qe("error",a),Qe("load",a);break;case"details":Qe("toggle",a);break;case"input":Qe("invalid",a),Fd(a,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Qe("invalid",a);break;case"textarea":Qe("invalid",a),Pd(a,l.value,l.defaultValue,l.children)}n=l.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||a.textContent===""+n||l.suppressHydrationWarning===!0||ef(a.textContent,n)?(l.popover!=null&&(Qe("beforetoggle",a),Qe("toggle",a)),l.onScroll!=null&&Qe("scroll",a),l.onScrollEnd!=null&&Qe("scrollend",a),l.onClick!=null&&(a.onclick=Wa),a=!0):a=!1,a||jn(e,!0)}function Lu(e){for(Kt=e.return;Kt;)switch(Kt.tag){case 5:case 31:case 13:Oa=!1;return;case 27:case 3:Oa=!0;return;default:Kt=Kt.return}}function Hl(e){if(e!==Kt)return!1;if(!We)return Lu(e),We=!0,!1;var a=e.tag,n;if((n=a!==3&&a!==27)&&((n=a===5)&&(n=e.type,n=!(n!=="form"&&n!=="button")||Hc(e.type,e.memoizedProps)),n=!n),n&&gt&&jn(e),Lu(e),a===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));gt=df(e)}else if(a===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(317));gt=df(e)}else a===27?(a=gt,Un(e.type)?(e=Yc,Yc=null,gt=e):gt=a):gt=Kt?Ua(e.stateNode.nextSibling):null;return!0}function ll(){gt=Kt=null,We=!1}function vr(){var e=vn;return e!==null&&(ca===null?ca=e:ca.push.apply(ca,e),vn=null),e}function ji(e){vn===null?vn=[e]:vn.push(e)}var jr=S(null),il=null,tn=null;function wn(e,a,n){de(jr,a._currentValue),a._currentValue=n}function an(e){e._currentValue=jr.current,Q(jr)}function wr(e,a,n){for(;e!==null;){var l=e.alternate;if((e.childLanes&a)!==a?(e.childLanes|=a,l!==null&&(l.childLanes|=a)):l!==null&&(l.childLanes&a)!==a&&(l.childLanes|=a),e===n)break;e=e.return}}function Nr(e,a,n,l){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var c=r.dependencies;if(c!==null){var u=r.child;c=c.firstContext;e:for(;c!==null;){var b=c;c=r;for(var k=0;k<a.length;k++)if(b.context===a[k]){c.lanes|=n,b=c.alternate,b!==null&&(b.lanes|=n),wr(c.return,n,e),l||(u=null);break e}c=b.next}}else if(r.tag===18){if(u=r.return,u===null)throw Error(d(341));u.lanes|=n,c=u.alternate,c!==null&&(c.lanes|=n),wr(u,n,e),u=null}else u=r.child;if(u!==null)u.return=r;else for(u=r;u!==null;){if(u===e){u=null;break}if(r=u.sibling,r!==null){r.return=u.return,u=r;break}u=u.return}r=u}}function Ll(e,a,n,l){e=null;for(var r=a,c=!1;r!==null;){if(!c){if((r.flags&524288)!==0)c=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var u=r.alternate;if(u===null)throw Error(d(387));if(u=u.memoizedProps,u!==null){var b=r.type;xa(r.pendingProps.value,u.value)||(e!==null?e.push(b):e=[b])}}else if(r===Oe.current){if(u=r.alternate,u===null)throw Error(d(387));u.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}r=r.return}e!==null&&Nr(a,e,n,l),a.flags|=262144}function zs(e){for(e=e.firstContext;e!==null;){if(!xa(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sl(e){il=e,tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Vt(e){return qu(il,e)}function Ts(e,a){return il===null&&sl(e),qu(e,a)}function qu(e,a){var n=a._currentValue;if(a={context:a,memoizedValue:n,next:null},tn===null){if(e===null)throw Error(d(308));tn=a,e.dependencies={lanes:0,firstContext:a},e.flags|=524288}else tn=tn.next=a;return n}var Cg=typeof AbortController<"u"?AbortController:function(){var e=[],a=this.signal={aborted:!1,addEventListener:function(n,l){e.push(l)}};this.abort=function(){a.aborted=!0,e.forEach(function(n){return n()})}},zg=s.unstable_scheduleCallback,Tg=s.unstable_NormalPriority,Ut={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function _r(){return{controller:new Cg,data:new Map,refCount:0}}function wi(e){e.refCount--,e.refCount===0&&zg(Tg,function(){e.controller.abort()})}var Ni=null,Sr=0,ql=0,Bl=null;function Eg(e,a){if(Ni===null){var n=Ni=[];Sr=0,ql=zc(),Bl={status:"pending",value:void 0,then:function(l){n.push(l)}}}return Sr++,a.then(Bu,Bu),a}function Bu(){if(--Sr===0&&Ni!==null){Bl!==null&&(Bl.status="fulfilled");var e=Ni;Ni=null,ql=0,Bl=null;for(var a=0;a<e.length;a++)(0,e[a])()}}function Mg(e,a){var n=[],l={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return e.then(function(){l.status="fulfilled",l.value=a;for(var r=0;r<n.length;r++)(0,n[r])(a)},function(r){for(l.status="rejected",l.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),l}var Gu=A.S;A.S=function(e,a){_m=be(),typeof a=="object"&&a!==null&&typeof a.then=="function"&&Eg(e,a),Gu!==null&&Gu(e,a)};var ol=S(null);function kr(){var e=ol.current;return e!==null?e:ht.pooledCache}function Es(e,a){a===null?de(ol,ol.current):de(ol,a.pool)}function Yu(){var e=kr();return e===null?null:{parent:Ut._currentValue,pool:e}}var Gl=Error(d(460)),Cr=Error(d(474)),Ms=Error(d(542)),Ds={then:function(){}};function $u(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Qu(e,a,n){switch(n=e[n],n===void 0?e.push(a):n!==a&&(a.then(Wa,Wa),a=n),a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zu(e),e;default:if(typeof a.status=="string")a.then(Wa,Wa);else{if(e=ht,e!==null&&100<e.shellSuspendCounter)throw Error(d(482));e=a,e.status="pending",e.then(function(l){if(a.status==="pending"){var r=a;r.status="fulfilled",r.value=l}},function(l){if(a.status==="pending"){var r=a;r.status="rejected",r.reason=l}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw e=a.reason,Zu(e),e}throw cl=a,Gl}}function rl(e){try{var a=e._init;return a(e._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(cl=n,Gl):n}}var cl=null;function Xu(){if(cl===null)throw Error(d(459));var e=cl;return cl=null,e}function Zu(e){if(e===Gl||e===Ms)throw Error(d(483))}var Yl=null,_i=0;function Os(e){var a=_i;return _i+=1,Yl===null&&(Yl=[]),Qu(Yl,e,a)}function Si(e,a){a=a.props.ref,e.ref=a!==void 0?a:null}function As(e,a){throw a.$$typeof===z?Error(d(525)):(e=Object.prototype.toString.call(a),Error(d(31,e==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":e)))}function Ku(e){function a(q,D){if(e){var X=q.deletions;X===null?(q.deletions=[D],q.flags|=16):X.push(D)}}function n(q,D){if(!e)return null;for(;D!==null;)a(q,D),D=D.sibling;return null}function l(q){for(var D=new Map;q!==null;)q.key!==null?D.set(q.key,q):D.set(q.index,q),q=q.sibling;return D}function r(q,D){return q=Ia(q,D),q.index=0,q.sibling=null,q}function c(q,D,X){return q.index=X,e?(X=q.alternate,X!==null?(X=X.index,X<D?(q.flags|=67108866,D):X):(q.flags|=67108866,D)):(q.flags|=1048576,D)}function u(q){return e&&q.alternate===null&&(q.flags|=67108866),q}function b(q,D,X,ne){return D===null||D.tag!==6?(D=hr(X,q.mode,ne),D.return=q,D):(D=r(D,X),D.return=q,D)}function k(q,D,X,ne){var Ce=X.type;return Ce===K?I(q,D,X.props.children,ne,X.key):D!==null&&(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===$&&rl(Ce)===D.type)?(D=r(D,X.props),Si(D,X),D.return=q,D):(D=ks(X.type,X.key,X.props,null,q.mode,ne),Si(D,X),D.return=q,D)}function Z(q,D,X,ne){return D===null||D.tag!==4||D.stateNode.containerInfo!==X.containerInfo||D.stateNode.implementation!==X.implementation?(D=xr(X,q.mode,ne),D.return=q,D):(D=r(D,X.children||[]),D.return=q,D)}function I(q,D,X,ne,Ce){return D===null||D.tag!==7?(D=nl(X,q.mode,ne,Ce),D.return=q,D):(D=r(D,X),D.return=q,D)}function le(q,D,X){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=hr(""+D,q.mode,X),D.return=q,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case Y:return X=ks(D.type,D.key,D.props,null,q.mode,X),Si(X,D),X.return=q,X;case P:return D=xr(D,q.mode,X),D.return=q,D;case $:return D=rl(D),le(q,D,X)}if(re(D)||R(D))return D=nl(D,q.mode,X,null),D.return=q,D;if(typeof D.then=="function")return le(q,Os(D),X);if(D.$$typeof===O)return le(q,Ts(q,D),X);As(q,D)}return null}function V(q,D,X,ne){var Ce=D!==null?D.key:null;if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return Ce!==null?null:b(q,D,""+X,ne);if(typeof X=="object"&&X!==null){switch(X.$$typeof){case Y:return X.key===Ce?k(q,D,X,ne):null;case P:return X.key===Ce?Z(q,D,X,ne):null;case $:return X=rl(X),V(q,D,X,ne)}if(re(X)||R(X))return Ce!==null?null:I(q,D,X,ne,null);if(typeof X.then=="function")return V(q,D,Os(X),ne);if(X.$$typeof===O)return V(q,D,Ts(q,X),ne);As(q,X)}return null}function F(q,D,X,ne,Ce){if(typeof ne=="string"&&ne!==""||typeof ne=="number"||typeof ne=="bigint")return q=q.get(X)||null,b(D,q,""+ne,Ce);if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case Y:return q=q.get(ne.key===null?X:ne.key)||null,k(D,q,ne,Ce);case P:return q=q.get(ne.key===null?X:ne.key)||null,Z(D,q,ne,Ce);case $:return ne=rl(ne),F(q,D,X,ne,Ce)}if(re(ne)||R(ne))return q=q.get(X)||null,I(D,q,ne,Ce,null);if(typeof ne.then=="function")return F(q,D,X,Os(ne),Ce);if(ne.$$typeof===O)return F(q,D,X,Ts(D,ne),Ce);As(D,ne)}return null}function ve(q,D,X,ne){for(var Ce=null,et=null,_e=D,Be=D=0,Fe=null;_e!==null&&Be<X.length;Be++){_e.index>Be?(Fe=_e,_e=null):Fe=_e.sibling;var tt=V(q,_e,X[Be],ne);if(tt===null){_e===null&&(_e=Fe);break}e&&_e&&tt.alternate===null&&a(q,_e),D=c(tt,D,Be),et===null?Ce=tt:et.sibling=tt,et=tt,_e=Fe}if(Be===X.length)return n(q,_e),We&&en(q,Be),Ce;if(_e===null){for(;Be<X.length;Be++)_e=le(q,X[Be],ne),_e!==null&&(D=c(_e,D,Be),et===null?Ce=_e:et.sibling=_e,et=_e);return We&&en(q,Be),Ce}for(_e=l(_e);Be<X.length;Be++)Fe=F(_e,q,Be,X[Be],ne),Fe!==null&&(e&&Fe.alternate!==null&&_e.delete(Fe.key===null?Be:Fe.key),D=c(Fe,D,Be),et===null?Ce=Fe:et.sibling=Fe,et=Fe);return e&&_e.forEach(function(Bn){return a(q,Bn)}),We&&en(q,Be),Ce}function Me(q,D,X,ne){if(X==null)throw Error(d(151));for(var Ce=null,et=null,_e=D,Be=D=0,Fe=null,tt=X.next();_e!==null&&!tt.done;Be++,tt=X.next()){_e.index>Be?(Fe=_e,_e=null):Fe=_e.sibling;var Bn=V(q,_e,tt.value,ne);if(Bn===null){_e===null&&(_e=Fe);break}e&&_e&&Bn.alternate===null&&a(q,_e),D=c(Bn,D,Be),et===null?Ce=Bn:et.sibling=Bn,et=Bn,_e=Fe}if(tt.done)return n(q,_e),We&&en(q,Be),Ce;if(_e===null){for(;!tt.done;Be++,tt=X.next())tt=le(q,tt.value,ne),tt!==null&&(D=c(tt,D,Be),et===null?Ce=tt:et.sibling=tt,et=tt);return We&&en(q,Be),Ce}for(_e=l(_e);!tt.done;Be++,tt=X.next())tt=F(_e,q,Be,tt.value,ne),tt!==null&&(e&&tt.alternate!==null&&_e.delete(tt.key===null?Be:tt.key),D=c(tt,D,Be),et===null?Ce=tt:et.sibling=tt,et=tt);return e&&_e.forEach(function(Yb){return a(q,Yb)}),We&&en(q,Be),Ce}function ft(q,D,X,ne){if(typeof X=="object"&&X!==null&&X.type===K&&X.key===null&&(X=X.props.children),typeof X=="object"&&X!==null){switch(X.$$typeof){case Y:e:{for(var Ce=X.key;D!==null;){if(D.key===Ce){if(Ce=X.type,Ce===K){if(D.tag===7){n(q,D.sibling),ne=r(D,X.props.children),ne.return=q,q=ne;break e}}else if(D.elementType===Ce||typeof Ce=="object"&&Ce!==null&&Ce.$$typeof===$&&rl(Ce)===D.type){n(q,D.sibling),ne=r(D,X.props),Si(ne,X),ne.return=q,q=ne;break e}n(q,D);break}else a(q,D);D=D.sibling}X.type===K?(ne=nl(X.props.children,q.mode,ne,X.key),ne.return=q,q=ne):(ne=ks(X.type,X.key,X.props,null,q.mode,ne),Si(ne,X),ne.return=q,q=ne)}return u(q);case P:e:{for(Ce=X.key;D!==null;){if(D.key===Ce)if(D.tag===4&&D.stateNode.containerInfo===X.containerInfo&&D.stateNode.implementation===X.implementation){n(q,D.sibling),ne=r(D,X.children||[]),ne.return=q,q=ne;break e}else{n(q,D);break}else a(q,D);D=D.sibling}ne=xr(X,q.mode,ne),ne.return=q,q=ne}return u(q);case $:return X=rl(X),ft(q,D,X,ne)}if(re(X))return ve(q,D,X,ne);if(R(X)){if(Ce=R(X),typeof Ce!="function")throw Error(d(150));return X=Ce.call(X),Me(q,D,X,ne)}if(typeof X.then=="function")return ft(q,D,Os(X),ne);if(X.$$typeof===O)return ft(q,D,Ts(q,X),ne);As(q,X)}return typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint"?(X=""+X,D!==null&&D.tag===6?(n(q,D.sibling),ne=r(D,X),ne.return=q,q=ne):(n(q,D),ne=hr(X,q.mode,ne),ne.return=q,q=ne),u(q)):n(q,D)}return function(q,D,X,ne){try{_i=0;var Ce=ft(q,D,X,ne);return Yl=null,Ce}catch(_e){if(_e===Gl||_e===Ms)throw _e;var et=ga(29,_e,null,q.mode);return et.lanes=ne,et.return=q,et}finally{}}}var dl=Ku(!0),Vu=Ku(!1),Nn=!1;function zr(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tr(e,a){e=e.updateQueue,a.updateQueue===e&&(a.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function _n(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Sn(e,a,n){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(at&2)!==0){var r=l.pending;return r===null?a.next=a:(a.next=r.next,r.next=a),l.pending=a,a=Ss(e),Mu(e,null,n),a}return _s(e,l,a,n),Ss(e)}function ki(e,a,n){if(a=a.updateQueue,a!==null&&(a=a.shared,(n&4194048)!==0)){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,st(e,n)}}function Er(e,a){var n=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,n===l)){var r=null,c=null;if(n=n.firstBaseUpdate,n!==null){do{var u={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};c===null?r=c=u:c=c.next=u,n=n.next}while(n!==null);c===null?r=c=a:c=c.next=a}else r=c=a;n={baseState:l.baseState,firstBaseUpdate:r,lastBaseUpdate:c,shared:l.shared,callbacks:l.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=a:e.next=a,n.lastBaseUpdate=a}var Mr=!1;function Ci(){if(Mr){var e=Bl;if(e!==null)throw e}}function zi(e,a,n,l){Mr=!1;var r=e.updateQueue;Nn=!1;var c=r.firstBaseUpdate,u=r.lastBaseUpdate,b=r.shared.pending;if(b!==null){r.shared.pending=null;var k=b,Z=k.next;k.next=null,u===null?c=Z:u.next=Z,u=k;var I=e.alternate;I!==null&&(I=I.updateQueue,b=I.lastBaseUpdate,b!==u&&(b===null?I.firstBaseUpdate=Z:b.next=Z,I.lastBaseUpdate=k))}if(c!==null){var le=r.baseState;u=0,I=Z=k=null,b=c;do{var V=b.lane&-536870913,F=V!==b.lane;if(F?(Je&V)===V:(l&V)===V){V!==0&&V===ql&&(Mr=!0),I!==null&&(I=I.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var ve=e,Me=b;V=a;var ft=n;switch(Me.tag){case 1:if(ve=Me.payload,typeof ve=="function"){le=ve.call(ft,le,V);break e}le=ve;break e;case 3:ve.flags=ve.flags&-65537|128;case 0:if(ve=Me.payload,V=typeof ve=="function"?ve.call(ft,le,V):ve,V==null)break e;le=j({},le,V);break e;case 2:Nn=!0}}V=b.callback,V!==null&&(e.flags|=64,F&&(e.flags|=8192),F=r.callbacks,F===null?r.callbacks=[V]:F.push(V))}else F={lane:V,tag:b.tag,payload:b.payload,callback:b.callback,next:null},I===null?(Z=I=F,k=le):I=I.next=F,u|=V;if(b=b.next,b===null){if(b=r.shared.pending,b===null)break;F=b,b=F.next,F.next=null,r.lastBaseUpdate=F,r.shared.pending=null}}while(!0);I===null&&(k=le),r.baseState=k,r.firstBaseUpdate=Z,r.lastBaseUpdate=I,c===null&&(r.shared.lanes=0),En|=u,e.lanes=u,e.memoizedState=le}}function Ju(e,a){if(typeof e!="function")throw Error(d(191,e));e.call(a)}function Fu(e,a){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ju(n[e],a)}var $l=S(null),Us=S(0);function Wu(e,a){e=pn,de(Us,e),de($l,a),pn=e|a.baseLanes}function Dr(){de(Us,pn),de($l,$l.current)}function Or(){pn=Us.current,Q($l),Q(Us)}var ba=S(null),Aa=null;function kn(e){var a=e.alternate;de(Tt,Tt.current&1),de(ba,e),Aa===null&&(a===null||$l.current!==null||a.memoizedState!==null)&&(Aa=e)}function Ar(e){de(Tt,Tt.current),de(ba,e),Aa===null&&(Aa=e)}function Pu(e){e.tag===22?(de(Tt,Tt.current),de(ba,e),Aa===null&&(Aa=e)):Cn()}function Cn(){de(Tt,Tt.current),de(ba,ba.current)}function ya(e){Q(ba),Aa===e&&(Aa=null),Q(Tt)}var Tt=S(0);function Rs(e){for(var a=e;a!==null;){if(a.tag===13){var n=a.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Bc(n)||Gc(n)))return a}else if(a.tag===19&&(a.memoizedProps.revealOrder==="forwards"||a.memoizedProps.revealOrder==="backwards"||a.memoizedProps.revealOrder==="unstable_legacy-backwards"||a.memoizedProps.revealOrder==="together")){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}var nn=0,He=null,pt=null,Rt=null,Hs=!1,Ql=!1,ul=!1,Ls=0,Ti=0,Xl=null,Dg=0;function _t(){throw Error(d(321))}function Ur(e,a){if(a===null)return!1;for(var n=0;n<a.length&&n<e.length;n++)if(!xa(e[n],a[n]))return!1;return!0}function Rr(e,a,n,l,r,c){return nn=c,He=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,A.H=e===null||e.memoizedState===null?Up:Wr,ul=!1,c=n(l,r),ul=!1,Ql&&(c=ep(a,n,l,r)),Iu(e),c}function Iu(e){A.H=Di;var a=pt!==null&&pt.next!==null;if(nn=0,Rt=pt=He=null,Hs=!1,Ti=0,Xl=null,a)throw Error(d(300));e===null||Ht||(e=e.dependencies,e!==null&&zs(e)&&(Ht=!0))}function ep(e,a,n,l){He=e;var r=0;do{if(Ql&&(Xl=null),Ti=0,Ql=!1,25<=r)throw Error(d(301));if(r+=1,Rt=pt=null,e.updateQueue!=null){var c=e.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}A.H=Rp,c=a(n,l)}while(Ql);return c}function Og(){var e=A.H,a=e.useState()[0];return a=typeof a.then=="function"?Ei(a):a,e=e.useState()[0],(pt!==null?pt.memoizedState:null)!==e&&(He.flags|=1024),a}function Hr(){var e=Ls!==0;return Ls=0,e}function Lr(e,a,n){a.updateQueue=e.updateQueue,a.flags&=-2053,e.lanes&=~n}function qr(e){if(Hs){for(e=e.memoizedState;e!==null;){var a=e.queue;a!==null&&(a.pending=null),e=e.next}Hs=!1}nn=0,Rt=pt=He=null,Ql=!1,Ti=Ls=0,Xl=null}function aa(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Rt===null?He.memoizedState=Rt=e:Rt=Rt.next=e,Rt}function Et(){if(pt===null){var e=He.alternate;e=e!==null?e.memoizedState:null}else e=pt.next;var a=Rt===null?He.memoizedState:Rt.next;if(a!==null)Rt=a,pt=e;else{if(e===null)throw He.alternate===null?Error(d(467)):Error(d(310));pt=e,e={memoizedState:pt.memoizedState,baseState:pt.baseState,baseQueue:pt.baseQueue,queue:pt.queue,next:null},Rt===null?He.memoizedState=Rt=e:Rt=Rt.next=e}return Rt}function qs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ei(e){var a=Ti;return Ti+=1,Xl===null&&(Xl=[]),e=Qu(Xl,e,a),a=He,(Rt===null?a.memoizedState:Rt.next)===null&&(a=a.alternate,A.H=a===null||a.memoizedState===null?Up:Wr),e}function Bs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ei(e);if(e.$$typeof===O)return Vt(e)}throw Error(d(438,String(e)))}function Br(e){var a=null,n=He.updateQueue;if(n!==null&&(a=n.memoCache),a==null){var l=He.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(a={data:l.data.map(function(r){return r.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),n===null&&(n=qs(),He.updateQueue=n),n.memoCache=a,n=a.data[a.index],n===void 0)for(n=a.data[a.index]=Array(e),l=0;l<e;l++)n[l]=me;return a.index++,n}function ln(e,a){return typeof a=="function"?a(e):a}function Gs(e){var a=Et();return Gr(a,pt,e)}function Gr(e,a,n){var l=e.queue;if(l===null)throw Error(d(311));l.lastRenderedReducer=n;var r=e.baseQueue,c=l.pending;if(c!==null){if(r!==null){var u=r.next;r.next=c.next,c.next=u}a.baseQueue=r=c,l.pending=null}if(c=e.baseState,r===null)e.memoizedState=c;else{a=r.next;var b=u=null,k=null,Z=a,I=!1;do{var le=Z.lane&-536870913;if(le!==Z.lane?(Je&le)===le:(nn&le)===le){var V=Z.revertLane;if(V===0)k!==null&&(k=k.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),le===ql&&(I=!0);else if((nn&V)===V){Z=Z.next,V===ql&&(I=!0);continue}else le={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},k===null?(b=k=le,u=c):k=k.next=le,He.lanes|=V,En|=V;le=Z.action,ul&&n(c,le),c=Z.hasEagerState?Z.eagerState:n(c,le)}else V={lane:le,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},k===null?(b=k=V,u=c):k=k.next=V,He.lanes|=le,En|=le;Z=Z.next}while(Z!==null&&Z!==a);if(k===null?u=c:k.next=b,!xa(c,e.memoizedState)&&(Ht=!0,I&&(n=Bl,n!==null)))throw n;e.memoizedState=c,e.baseState=u,e.baseQueue=k,l.lastRenderedState=c}return r===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Yr(e){var a=Et(),n=a.queue;if(n===null)throw Error(d(311));n.lastRenderedReducer=e;var l=n.dispatch,r=n.pending,c=a.memoizedState;if(r!==null){n.pending=null;var u=r=r.next;do c=e(c,u.action),u=u.next;while(u!==r);xa(c,a.memoizedState)||(Ht=!0),a.memoizedState=c,a.baseQueue===null&&(a.baseState=c),n.lastRenderedState=c}return[c,l]}function tp(e,a,n){var l=He,r=Et(),c=We;if(c){if(n===void 0)throw Error(d(407));n=n()}else n=a();var u=!xa((pt||r).memoizedState,n);if(u&&(r.memoizedState=n,Ht=!0),r=r.queue,Xr(lp.bind(null,l,r,e),[e]),r.getSnapshot!==a||u||Rt!==null&&Rt.memoizedState.tag&1){if(l.flags|=2048,Zl(9,{destroy:void 0},np.bind(null,l,r,n,a),null),ht===null)throw Error(d(349));c||(nn&127)!==0||ap(l,a,n)}return n}function ap(e,a,n){e.flags|=16384,e={getSnapshot:a,value:n},a=He.updateQueue,a===null?(a=qs(),He.updateQueue=a,a.stores=[e]):(n=a.stores,n===null?a.stores=[e]:n.push(e))}function np(e,a,n,l){a.value=n,a.getSnapshot=l,ip(a)&&sp(e)}function lp(e,a,n){return n(function(){ip(a)&&sp(e)})}function ip(e){var a=e.getSnapshot;e=e.value;try{var n=a();return!xa(e,n)}catch{return!0}}function sp(e){var a=al(e,2);a!==null&&da(a,e,2)}function $r(e){var a=aa();if(typeof e=="function"){var n=e;if(e=n(),ul){Re(!0);try{n()}finally{Re(!1)}}}return a.memoizedState=a.baseState=e,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:e},a}function op(e,a,n,l){return e.baseState=n,Gr(e,pt,typeof l=="function"?l:ln)}function Ag(e,a,n,l,r){if(Qs(e))throw Error(d(485));if(e=a.action,e!==null){var c={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){c.listeners.push(u)}};A.T!==null?n(!0):c.isTransition=!1,l(c),n=a.pending,n===null?(c.next=a.pending=c,rp(a,c)):(c.next=n.next,a.pending=n.next=c)}}function rp(e,a){var n=a.action,l=a.payload,r=e.state;if(a.isTransition){var c=A.T,u={};A.T=u;try{var b=n(r,l),k=A.S;k!==null&&k(u,b),cp(e,a,b)}catch(Z){Qr(e,a,Z)}finally{c!==null&&u.types!==null&&(c.types=u.types),A.T=c}}else try{c=n(r,l),cp(e,a,c)}catch(Z){Qr(e,a,Z)}}function cp(e,a,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(l){dp(e,a,l)},function(l){return Qr(e,a,l)}):dp(e,a,n)}function dp(e,a,n){a.status="fulfilled",a.value=n,up(a),e.state=n,a=e.pending,a!==null&&(n=a.next,n===a?e.pending=null:(n=n.next,a.next=n,rp(e,n)))}function Qr(e,a,n){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do a.status="rejected",a.reason=n,up(a),a=a.next;while(a!==l)}e.action=null}function up(e){e=e.listeners;for(var a=0;a<e.length;a++)(0,e[a])()}function pp(e,a){return a}function mp(e,a){if(We){var n=ht.formState;if(n!==null){e:{var l=He;if(We){if(gt){t:{for(var r=gt,c=Oa;r.nodeType!==8;){if(!c){r=null;break t}if(r=Ua(r.nextSibling),r===null){r=null;break t}}c=r.data,r=c==="F!"||c==="F"?r:null}if(r){gt=Ua(r.nextSibling),l=r.data==="F!";break e}}jn(l)}l=!1}l&&(a=n[0])}}return n=aa(),n.memoizedState=n.baseState=a,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pp,lastRenderedState:a},n.queue=l,n=Dp.bind(null,He,l),l.dispatch=n,l=$r(!1),c=Fr.bind(null,He,!1,l.queue),l=aa(),r={state:a,dispatch:null,action:e,pending:null},l.queue=r,n=Ag.bind(null,He,r,c,n),r.dispatch=n,l.memoizedState=e,[a,n,!1]}function fp(e){var a=Et();return hp(a,pt,e)}function hp(e,a,n){if(a=Gr(e,a,pp)[0],e=Gs(ln)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var l=Ei(a)}catch(u){throw u===Gl?Ms:u}else l=a;a=Et();var r=a.queue,c=r.dispatch;return n!==a.memoizedState&&(He.flags|=2048,Zl(9,{destroy:void 0},Ug.bind(null,r,n),null)),[l,c,e]}function Ug(e,a){e.action=a}function xp(e){var a=Et(),n=pt;if(n!==null)return hp(a,n,e);Et(),a=a.memoizedState,n=Et();var l=n.queue.dispatch;return n.memoizedState=e,[a,l,!1]}function Zl(e,a,n,l){return e={tag:e,create:n,deps:l,inst:a,next:null},a=He.updateQueue,a===null&&(a=qs(),He.updateQueue=a),n=a.lastEffect,n===null?a.lastEffect=e.next=e:(l=n.next,n.next=e,e.next=l,a.lastEffect=e),e}function gp(){return Et().memoizedState}function Ys(e,a,n,l){var r=aa();He.flags|=e,r.memoizedState=Zl(1|a,{destroy:void 0},n,l===void 0?null:l)}function $s(e,a,n,l){var r=Et();l=l===void 0?null:l;var c=r.memoizedState.inst;pt!==null&&l!==null&&Ur(l,pt.memoizedState.deps)?r.memoizedState=Zl(a,c,n,l):(He.flags|=e,r.memoizedState=Zl(1|a,c,n,l))}function bp(e,a){Ys(8390656,8,e,a)}function Xr(e,a){$s(2048,8,e,a)}function Rg(e){He.flags|=4;var a=He.updateQueue;if(a===null)a=qs(),He.updateQueue=a,a.events=[e];else{var n=a.events;n===null?a.events=[e]:n.push(e)}}function yp(e){var a=Et().memoizedState;return Rg({ref:a,nextImpl:e}),function(){if((at&2)!==0)throw Error(d(440));return a.impl.apply(void 0,arguments)}}function vp(e,a){return $s(4,2,e,a)}function jp(e,a){return $s(4,4,e,a)}function wp(e,a){if(typeof a=="function"){e=e();var n=a(e);return function(){typeof n=="function"?n():a(null)}}if(a!=null)return e=e(),a.current=e,function(){a.current=null}}function Np(e,a,n){n=n!=null?n.concat([e]):null,$s(4,4,wp.bind(null,a,e),n)}function Zr(){}function _p(e,a){var n=Et();a=a===void 0?null:a;var l=n.memoizedState;return a!==null&&Ur(a,l[1])?l[0]:(n.memoizedState=[e,a],e)}function Sp(e,a){var n=Et();a=a===void 0?null:a;var l=n.memoizedState;if(a!==null&&Ur(a,l[1]))return l[0];if(l=e(),ul){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[l,a],l}function Kr(e,a,n){return n===void 0||(nn&1073741824)!==0&&(Je&261930)===0?e.memoizedState=a:(e.memoizedState=n,e=km(),He.lanes|=e,En|=e,n)}function kp(e,a,n,l){return xa(n,a)?n:$l.current!==null?(e=Kr(e,n,l),xa(e,a)||(Ht=!0),e):(nn&42)===0||(nn&1073741824)!==0&&(Je&261930)===0?(Ht=!0,e.memoizedState=n):(e=km(),He.lanes|=e,En|=e,a)}function Cp(e,a,n,l,r){var c=J.p;J.p=c!==0&&8>c?c:8;var u=A.T,b={};A.T=b,Fr(e,!1,a,n);try{var k=r(),Z=A.S;if(Z!==null&&Z(b,k),k!==null&&typeof k=="object"&&typeof k.then=="function"){var I=Mg(k,l);Mi(e,a,I,wa(e))}else Mi(e,a,l,wa(e))}catch(le){Mi(e,a,{then:function(){},status:"rejected",reason:le},wa())}finally{J.p=c,u!==null&&b.types!==null&&(u.types=b.types),A.T=u}}function Hg(){}function Vr(e,a,n,l){if(e.tag!==5)throw Error(d(476));var r=zp(e).queue;Cp(e,r,a,x,n===null?Hg:function(){return Tp(e),n(l)})}function zp(e){var a=e.memoizedState;if(a!==null)return a;a={memoizedState:x,baseState:x,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:x},next:null};var n={};return a.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ln,lastRenderedState:n},next:null},e.memoizedState=a,e=e.alternate,e!==null&&(e.memoizedState=a),a}function Tp(e){var a=zp(e);a.next===null&&(a=e.alternate.memoizedState),Mi(e,a.next.queue,{},wa())}function Jr(){return Vt(Vi)}function Ep(){return Et().memoizedState}function Mp(){return Et().memoizedState}function Lg(e){for(var a=e.return;a!==null;){switch(a.tag){case 24:case 3:var n=wa();e=_n(n);var l=Sn(a,e,n);l!==null&&(da(l,a,n),ki(l,a,n)),a={cache:_r()},e.payload=a;return}a=a.return}}function qg(e,a,n){var l=wa();n={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Qs(e)?Op(a,n):(n=mr(e,a,n,l),n!==null&&(da(n,e,l),Ap(n,a,l)))}function Dp(e,a,n){var l=wa();Mi(e,a,n,l)}function Mi(e,a,n,l){var r={lane:l,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Qs(e))Op(a,r);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=a.lastRenderedReducer,c!==null))try{var u=a.lastRenderedState,b=c(u,n);if(r.hasEagerState=!0,r.eagerState=b,xa(b,u))return _s(e,a,r,0),ht===null&&Ns(),!1}catch{}finally{}if(n=mr(e,a,r,l),n!==null)return da(n,e,l),Ap(n,a,l),!0}return!1}function Fr(e,a,n,l){if(l={lane:2,revertLane:zc(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Qs(e)){if(a)throw Error(d(479))}else a=mr(e,n,l,2),a!==null&&da(a,e,2)}function Qs(e){var a=e.alternate;return e===He||a!==null&&a===He}function Op(e,a){Ql=Hs=!0;var n=e.pending;n===null?a.next=a:(a.next=n.next,n.next=a),e.pending=a}function Ap(e,a,n){if((n&4194048)!==0){var l=a.lanes;l&=e.pendingLanes,n|=l,a.lanes=n,st(e,n)}}var Di={readContext:Vt,use:Bs,useCallback:_t,useContext:_t,useEffect:_t,useImperativeHandle:_t,useLayoutEffect:_t,useInsertionEffect:_t,useMemo:_t,useReducer:_t,useRef:_t,useState:_t,useDebugValue:_t,useDeferredValue:_t,useTransition:_t,useSyncExternalStore:_t,useId:_t,useHostTransitionStatus:_t,useFormState:_t,useActionState:_t,useOptimistic:_t,useMemoCache:_t,useCacheRefresh:_t};Di.useEffectEvent=_t;var Up={readContext:Vt,use:Bs,useCallback:function(e,a){return aa().memoizedState=[e,a===void 0?null:a],e},useContext:Vt,useEffect:bp,useImperativeHandle:function(e,a,n){n=n!=null?n.concat([e]):null,Ys(4194308,4,wp.bind(null,a,e),n)},useLayoutEffect:function(e,a){return Ys(4194308,4,e,a)},useInsertionEffect:function(e,a){Ys(4,2,e,a)},useMemo:function(e,a){var n=aa();a=a===void 0?null:a;var l=e();if(ul){Re(!0);try{e()}finally{Re(!1)}}return n.memoizedState=[l,a],l},useReducer:function(e,a,n){var l=aa();if(n!==void 0){var r=n(a);if(ul){Re(!0);try{n(a)}finally{Re(!1)}}}else r=a;return l.memoizedState=l.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},l.queue=e,e=e.dispatch=qg.bind(null,He,e),[l.memoizedState,e]},useRef:function(e){var a=aa();return e={current:e},a.memoizedState=e},useState:function(e){e=$r(e);var a=e.queue,n=Dp.bind(null,He,a);return a.dispatch=n,[e.memoizedState,n]},useDebugValue:Zr,useDeferredValue:function(e,a){var n=aa();return Kr(n,e,a)},useTransition:function(){var e=$r(!1);return e=Cp.bind(null,He,e.queue,!0,!1),aa().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,a,n){var l=He,r=aa();if(We){if(n===void 0)throw Error(d(407));n=n()}else{if(n=a(),ht===null)throw Error(d(349));(Je&127)!==0||ap(l,a,n)}r.memoizedState=n;var c={value:n,getSnapshot:a};return r.queue=c,bp(lp.bind(null,l,c,e),[e]),l.flags|=2048,Zl(9,{destroy:void 0},np.bind(null,l,c,n,a),null),n},useId:function(){var e=aa(),a=ht.identifierPrefix;if(We){var n=Qa,l=$a;n=(l&~(1<<32-ut(l)-1)).toString(32)+n,a="_"+a+"R_"+n,n=Ls++,0<n&&(a+="H"+n.toString(32)),a+="_"}else n=Dg++,a="_"+a+"r_"+n.toString(32)+"_";return e.memoizedState=a},useHostTransitionStatus:Jr,useFormState:mp,useActionState:mp,useOptimistic:function(e){var a=aa();a.memoizedState=a.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=n,a=Fr.bind(null,He,!0,n),n.dispatch=a,[e,a]},useMemoCache:Br,useCacheRefresh:function(){return aa().memoizedState=Lg.bind(null,He)},useEffectEvent:function(e){var a=aa(),n={impl:e};return a.memoizedState=n,function(){if((at&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}},Wr={readContext:Vt,use:Bs,useCallback:_p,useContext:Vt,useEffect:Xr,useImperativeHandle:Np,useInsertionEffect:vp,useLayoutEffect:jp,useMemo:Sp,useReducer:Gs,useRef:gp,useState:function(){return Gs(ln)},useDebugValue:Zr,useDeferredValue:function(e,a){var n=Et();return kp(n,pt.memoizedState,e,a)},useTransition:function(){var e=Gs(ln)[0],a=Et().memoizedState;return[typeof e=="boolean"?e:Ei(e),a]},useSyncExternalStore:tp,useId:Ep,useHostTransitionStatus:Jr,useFormState:fp,useActionState:fp,useOptimistic:function(e,a){var n=Et();return op(n,pt,e,a)},useMemoCache:Br,useCacheRefresh:Mp};Wr.useEffectEvent=yp;var Rp={readContext:Vt,use:Bs,useCallback:_p,useContext:Vt,useEffect:Xr,useImperativeHandle:Np,useInsertionEffect:vp,useLayoutEffect:jp,useMemo:Sp,useReducer:Yr,useRef:gp,useState:function(){return Yr(ln)},useDebugValue:Zr,useDeferredValue:function(e,a){var n=Et();return pt===null?Kr(n,e,a):kp(n,pt.memoizedState,e,a)},useTransition:function(){var e=Yr(ln)[0],a=Et().memoizedState;return[typeof e=="boolean"?e:Ei(e),a]},useSyncExternalStore:tp,useId:Ep,useHostTransitionStatus:Jr,useFormState:xp,useActionState:xp,useOptimistic:function(e,a){var n=Et();return pt!==null?op(n,pt,e,a):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Br,useCacheRefresh:Mp};Rp.useEffectEvent=yp;function Pr(e,a,n,l){a=e.memoizedState,n=n(l,a),n=n==null?a:j({},a,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ir={enqueueSetState:function(e,a,n){e=e._reactInternals;var l=wa(),r=_n(l);r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(da(a,e,l),ki(a,e,l))},enqueueReplaceState:function(e,a,n){e=e._reactInternals;var l=wa(),r=_n(l);r.tag=1,r.payload=a,n!=null&&(r.callback=n),a=Sn(e,r,l),a!==null&&(da(a,e,l),ki(a,e,l))},enqueueForceUpdate:function(e,a){e=e._reactInternals;var n=wa(),l=_n(n);l.tag=2,a!=null&&(l.callback=a),a=Sn(e,l,n),a!==null&&(da(a,e,n),ki(a,e,n))}};function Hp(e,a,n,l,r,c,u){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,c,u):a.prototype&&a.prototype.isPureReactComponent?!bi(n,l)||!bi(r,c):!0}function Lp(e,a,n,l){e=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(n,l),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(n,l),a.state!==e&&Ir.enqueueReplaceState(a,a.state,null)}function pl(e,a){var n=a;if("ref"in a){n={};for(var l in a)l!=="ref"&&(n[l]=a[l])}if(e=e.defaultProps){n===a&&(n=j({},n));for(var r in e)n[r]===void 0&&(n[r]=e[r])}return n}function qp(e){ws(e)}function Bp(e){console.error(e)}function Gp(e){ws(e)}function Xs(e,a){try{var n=e.onUncaughtError;n(a.value,{componentStack:a.stack})}catch(l){setTimeout(function(){throw l})}}function Yp(e,a,n){try{var l=e.onCaughtError;l(n.value,{componentStack:n.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function ec(e,a,n){return n=_n(n),n.tag=3,n.payload={element:null},n.callback=function(){Xs(e,a)},n}function $p(e){return e=_n(e),e.tag=3,e}function Qp(e,a,n,l){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var c=l.value;e.payload=function(){return r(c)},e.callback=function(){Yp(a,n,l)}}var u=n.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(e.callback=function(){Yp(a,n,l),typeof r!="function"&&(Mn===null?Mn=new Set([this]):Mn.add(this));var b=l.stack;this.componentDidCatch(l.value,{componentStack:b!==null?b:""})})}function Bg(e,a,n,l,r){if(n.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(a=n.alternate,a!==null&&Ll(a,n,r,!0),n=ba.current,n!==null){switch(n.tag){case 31:case 13:return Aa===null?no():n.alternate===null&&St===0&&(St=3),n.flags&=-257,n.flags|=65536,n.lanes=r,l===Ds?n.flags|=16384:(a=n.updateQueue,a===null?n.updateQueue=new Set([l]):a.add(l),Sc(e,l,r)),!1;case 22:return n.flags|=65536,l===Ds?n.flags|=16384:(a=n.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([l])},n.updateQueue=a):(n=a.retryQueue,n===null?a.retryQueue=new Set([l]):n.add(l)),Sc(e,l,r)),!1}throw Error(d(435,n.tag))}return Sc(e,l,r),no(),!1}if(We)return a=ba.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=r,l!==yr&&(e=Error(d(422),{cause:l}),ji(Ea(e,n)))):(l!==yr&&(a=Error(d(423),{cause:l}),ji(Ea(a,n))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,l=Ea(l,n),r=ec(e.stateNode,l,r),Er(e,r),St!==4&&(St=2)),!1;var c=Error(d(520),{cause:l});if(c=Ea(c,n),Bi===null?Bi=[c]:Bi.push(c),St!==4&&(St=2),a===null)return!0;l=Ea(l,n),n=a;do{switch(n.tag){case 3:return n.flags|=65536,e=r&-r,n.lanes|=e,e=ec(n.stateNode,l,e),Er(n,e),!1;case 1:if(a=n.type,c=n.stateNode,(n.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(Mn===null||!Mn.has(c))))return n.flags|=65536,r&=-r,n.lanes|=r,r=$p(r),Qp(r,e,n,l),Er(n,r),!1}n=n.return}while(n!==null);return!1}var tc=Error(d(461)),Ht=!1;function Jt(e,a,n,l){a.child=e===null?Vu(a,null,n,l):dl(a,e.child,n,l)}function Xp(e,a,n,l,r){n=n.render;var c=a.ref;if("ref"in l){var u={};for(var b in l)b!=="ref"&&(u[b]=l[b])}else u=l;return sl(a),l=Rr(e,a,n,u,c,r),b=Hr(),e!==null&&!Ht?(Lr(e,a,r),sn(e,a,r)):(We&&b&&gr(a),a.flags|=1,Jt(e,a,l,r),a.child)}function Zp(e,a,n,l,r){if(e===null){var c=n.type;return typeof c=="function"&&!fr(c)&&c.defaultProps===void 0&&n.compare===null?(a.tag=15,a.type=c,Kp(e,a,c,l,r)):(e=ks(n.type,null,l,a,a.mode,r),e.ref=a.ref,e.return=a,a.child=e)}if(c=e.child,!cc(e,r)){var u=c.memoizedProps;if(n=n.compare,n=n!==null?n:bi,n(u,l)&&e.ref===a.ref)return sn(e,a,r)}return a.flags|=1,e=Ia(c,l),e.ref=a.ref,e.return=a,a.child=e}function Kp(e,a,n,l,r){if(e!==null){var c=e.memoizedProps;if(bi(c,l)&&e.ref===a.ref)if(Ht=!1,a.pendingProps=l=c,cc(e,r))(e.flags&131072)!==0&&(Ht=!0);else return a.lanes=e.lanes,sn(e,a,r)}return ac(e,a,n,l,r)}function Vp(e,a,n,l){var r=l.children,c=e!==null?e.memoizedState:null;if(e===null&&a.stateNode===null&&(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((a.flags&128)!==0){if(c=c!==null?c.baseLanes|n:n,e!==null){for(l=a.child=e.child,r=0;l!==null;)r=r|l.lanes|l.childLanes,l=l.sibling;l=r&~c}else l=0,a.child=null;return Jp(e,a,c,n,l)}if((n&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},e!==null&&Es(a,c!==null?c.cachePool:null),c!==null?Wu(a,c):Dr(),Pu(a);else return l=a.lanes=536870912,Jp(e,a,c!==null?c.baseLanes|n:n,n,l)}else c!==null?(Es(a,c.cachePool),Wu(a,c),Cn(),a.memoizedState=null):(e!==null&&Es(a,null),Dr(),Cn());return Jt(e,a,r,n),a.child}function Oi(e,a){return e!==null&&e.tag===22||a.stateNode!==null||(a.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.sibling}function Jp(e,a,n,l,r){var c=kr();return c=c===null?null:{parent:Ut._currentValue,pool:c},a.memoizedState={baseLanes:n,cachePool:c},e!==null&&Es(a,null),Dr(),Pu(a),e!==null&&Ll(e,a,l,!0),a.childLanes=r,null}function Zs(e,a){return a=Vs({mode:a.mode,children:a.children},e.mode),a.ref=e.ref,e.child=a,a.return=e,a}function Fp(e,a,n){return dl(a,e.child,null,n),e=Zs(a,a.pendingProps),e.flags|=2,ya(a),a.memoizedState=null,e}function Gg(e,a,n){var l=a.pendingProps,r=(a.flags&128)!==0;if(a.flags&=-129,e===null){if(We){if(l.mode==="hidden")return e=Zs(a,l),a.lanes=536870912,Oi(null,e);if(Ar(a),(e=gt)?(e=cf(e,Oa),e=e!==null&&e.data==="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:$a,overflow:Qa}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=a,a.child=n,Kt=a,gt=null)):e=null,e===null)throw jn(a);return a.lanes=536870912,null}return Zs(a,l)}var c=e.memoizedState;if(c!==null){var u=c.dehydrated;if(Ar(a),r)if(a.flags&256)a.flags&=-257,a=Fp(e,a,n);else if(a.memoizedState!==null)a.child=e.child,a.flags|=128,a=null;else throw Error(d(558));else if(Ht||Ll(e,a,n,!1),r=(n&e.childLanes)!==0,Ht||r){if(l=ht,l!==null&&(u=w(l,n),u!==0&&u!==c.retryLane))throw c.retryLane=u,al(e,u),da(l,e,u),tc;no(),a=Fp(e,a,n)}else e=c.treeContext,gt=Ua(u.nextSibling),Kt=a,We=!0,vn=null,Oa=!1,e!==null&&Ru(a,e),a=Zs(a,l),a.flags|=4096;return a}return e=Ia(e.child,{mode:l.mode,children:l.children}),e.ref=a.ref,a.child=e,e.return=a,e}function Ks(e,a){var n=a.ref;if(n===null)e!==null&&e.ref!==null&&(a.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(d(284));(e===null||e.ref!==n)&&(a.flags|=4194816)}}function ac(e,a,n,l,r){return sl(a),n=Rr(e,a,n,l,void 0,r),l=Hr(),e!==null&&!Ht?(Lr(e,a,r),sn(e,a,r)):(We&&l&&gr(a),a.flags|=1,Jt(e,a,n,r),a.child)}function Wp(e,a,n,l,r,c){return sl(a),a.updateQueue=null,n=ep(a,l,n,r),Iu(e),l=Hr(),e!==null&&!Ht?(Lr(e,a,c),sn(e,a,c)):(We&&l&&gr(a),a.flags|=1,Jt(e,a,n,c),a.child)}function Pp(e,a,n,l,r){if(sl(a),a.stateNode===null){var c=Al,u=n.contextType;typeof u=="object"&&u!==null&&(c=Vt(u)),c=new n(l,c),a.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=Ir,a.stateNode=c,c._reactInternals=a,c=a.stateNode,c.props=l,c.state=a.memoizedState,c.refs={},zr(a),u=n.contextType,c.context=typeof u=="object"&&u!==null?Vt(u):Al,c.state=a.memoizedState,u=n.getDerivedStateFromProps,typeof u=="function"&&(Pr(a,n,u,l),c.state=a.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(u=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),u!==c.state&&Ir.enqueueReplaceState(c,c.state,null),zi(a,l,c,r),Ci(),c.state=a.memoizedState),typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!0}else if(e===null){c=a.stateNode;var b=a.memoizedProps,k=pl(n,b);c.props=k;var Z=c.context,I=n.contextType;u=Al,typeof I=="object"&&I!==null&&(u=Vt(I));var le=n.getDerivedStateFromProps;I=typeof le=="function"||typeof c.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,I||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(b||Z!==u)&&Lp(a,c,l,u),Nn=!1;var V=a.memoizedState;c.state=V,zi(a,l,c,r),Ci(),Z=a.memoizedState,b||V!==Z||Nn?(typeof le=="function"&&(Pr(a,n,le,l),Z=a.memoizedState),(k=Nn||Hp(a,n,k,l,V,Z,u))?(I||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(a.flags|=4194308)):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=l,a.memoizedState=Z),c.props=l,c.state=Z,c.context=u,l=k):(typeof c.componentDidMount=="function"&&(a.flags|=4194308),l=!1)}else{c=a.stateNode,Tr(e,a),u=a.memoizedProps,I=pl(n,u),c.props=I,le=a.pendingProps,V=c.context,Z=n.contextType,k=Al,typeof Z=="object"&&Z!==null&&(k=Vt(Z)),b=n.getDerivedStateFromProps,(Z=typeof b=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(u!==le||V!==k)&&Lp(a,c,l,k),Nn=!1,V=a.memoizedState,c.state=V,zi(a,l,c,r),Ci();var F=a.memoizedState;u!==le||V!==F||Nn||e!==null&&e.dependencies!==null&&zs(e.dependencies)?(typeof b=="function"&&(Pr(a,n,b,l),F=a.memoizedState),(I=Nn||Hp(a,n,I,l,V,F,k)||e!==null&&e.dependencies!==null&&zs(e.dependencies))?(Z||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(l,F,k),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(l,F,k)),typeof c.componentDidUpdate=="function"&&(a.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(a.flags|=1024),a.memoizedProps=l,a.memoizedState=F),c.props=l,c.state=F,c.context=k,l=I):(typeof c.componentDidUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(a.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||u===e.memoizedProps&&V===e.memoizedState||(a.flags|=1024),l=!1)}return c=l,Ks(e,a),l=(a.flags&128)!==0,c||l?(c=a.stateNode,n=l&&typeof n.getDerivedStateFromError!="function"?null:c.render(),a.flags|=1,e!==null&&l?(a.child=dl(a,e.child,null,r),a.child=dl(a,null,n,r)):Jt(e,a,n,r),a.memoizedState=c.state,e=a.child):e=sn(e,a,r),e}function Ip(e,a,n,l){return ll(),a.flags|=256,Jt(e,a,n,l),a.child}var nc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function lc(e){return{baseLanes:e,cachePool:Yu()}}function ic(e,a,n){return e=e!==null?e.childLanes&~n:0,a&&(e|=ja),e}function em(e,a,n){var l=a.pendingProps,r=!1,c=(a.flags&128)!==0,u;if((u=c)||(u=e!==null&&e.memoizedState===null?!1:(Tt.current&2)!==0),u&&(r=!0,a.flags&=-129),u=(a.flags&32)!==0,a.flags&=-33,e===null){if(We){if(r?kn(a):Cn(),(e=gt)?(e=cf(e,Oa),e=e!==null&&e.data!=="&"?e:null,e!==null&&(a.memoizedState={dehydrated:e,treeContext:yn!==null?{id:$a,overflow:Qa}:null,retryLane:536870912,hydrationErrors:null},n=Ou(e),n.return=a,a.child=n,Kt=a,gt=null)):e=null,e===null)throw jn(a);return Gc(e)?a.lanes=32:a.lanes=536870912,null}var b=l.children;return l=l.fallback,r?(Cn(),r=a.mode,b=Vs({mode:"hidden",children:b},r),l=nl(l,r,n,null),b.return=a,l.return=a,b.sibling=l,a.child=b,l=a.child,l.memoizedState=lc(n),l.childLanes=ic(e,u,n),a.memoizedState=nc,Oi(null,l)):(kn(a),sc(a,b))}var k=e.memoizedState;if(k!==null&&(b=k.dehydrated,b!==null)){if(c)a.flags&256?(kn(a),a.flags&=-257,a=oc(e,a,n)):a.memoizedState!==null?(Cn(),a.child=e.child,a.flags|=128,a=null):(Cn(),b=l.fallback,r=a.mode,l=Vs({mode:"visible",children:l.children},r),b=nl(b,r,n,null),b.flags|=2,l.return=a,b.return=a,l.sibling=b,a.child=l,dl(a,e.child,null,n),l=a.child,l.memoizedState=lc(n),l.childLanes=ic(e,u,n),a.memoizedState=nc,a=Oi(null,l));else if(kn(a),Gc(b)){if(u=b.nextSibling&&b.nextSibling.dataset,u)var Z=u.dgst;u=Z,l=Error(d(419)),l.stack="",l.digest=u,ji({value:l,source:null,stack:null}),a=oc(e,a,n)}else if(Ht||Ll(e,a,n,!1),u=(n&e.childLanes)!==0,Ht||u){if(u=ht,u!==null&&(l=w(u,n),l!==0&&l!==k.retryLane))throw k.retryLane=l,al(e,l),da(u,e,l),tc;Bc(b)||no(),a=oc(e,a,n)}else Bc(b)?(a.flags|=192,a.child=e.child,a=null):(e=k.treeContext,gt=Ua(b.nextSibling),Kt=a,We=!0,vn=null,Oa=!1,e!==null&&Ru(a,e),a=sc(a,l.children),a.flags|=4096);return a}return r?(Cn(),b=l.fallback,r=a.mode,k=e.child,Z=k.sibling,l=Ia(k,{mode:"hidden",children:l.children}),l.subtreeFlags=k.subtreeFlags&65011712,Z!==null?b=Ia(Z,b):(b=nl(b,r,n,null),b.flags|=2),b.return=a,l.return=a,l.sibling=b,a.child=l,Oi(null,l),l=a.child,b=e.child.memoizedState,b===null?b=lc(n):(r=b.cachePool,r!==null?(k=Ut._currentValue,r=r.parent!==k?{parent:k,pool:k}:r):r=Yu(),b={baseLanes:b.baseLanes|n,cachePool:r}),l.memoizedState=b,l.childLanes=ic(e,u,n),a.memoizedState=nc,Oi(e.child,l)):(kn(a),n=e.child,e=n.sibling,n=Ia(n,{mode:"visible",children:l.children}),n.return=a,n.sibling=null,e!==null&&(u=a.deletions,u===null?(a.deletions=[e],a.flags|=16):u.push(e)),a.child=n,a.memoizedState=null,n)}function sc(e,a){return a=Vs({mode:"visible",children:a},e.mode),a.return=e,e.child=a}function Vs(e,a){return e=ga(22,e,null,a),e.lanes=0,e}function oc(e,a,n){return dl(a,e.child,null,n),e=sc(a,a.pendingProps.children),e.flags|=2,a.memoizedState=null,e}function tm(e,a,n){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a),wr(e.return,a,n)}function rc(e,a,n,l,r,c){var u=e.memoizedState;u===null?e.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:l,tail:n,tailMode:r,treeForkCount:c}:(u.isBackwards=a,u.rendering=null,u.renderingStartTime=0,u.last=l,u.tail=n,u.tailMode=r,u.treeForkCount=c)}function am(e,a,n){var l=a.pendingProps,r=l.revealOrder,c=l.tail;l=l.children;var u=Tt.current,b=(u&2)!==0;if(b?(u=u&1|2,a.flags|=128):u&=1,de(Tt,u),Jt(e,a,l,n),l=We?vi:0,!b&&e!==null&&(e.flags&128)!==0)e:for(e=a.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tm(e,n,a);else if(e.tag===19)tm(e,n,a);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===a)break e;for(;e.sibling===null;){if(e.return===null||e.return===a)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(n=a.child,r=null;n!==null;)e=n.alternate,e!==null&&Rs(e)===null&&(r=n),n=n.sibling;n=r,n===null?(r=a.child,a.child=null):(r=n.sibling,n.sibling=null),rc(a,!1,r,n,c,l);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=a.child,a.child=null;r!==null;){if(e=r.alternate,e!==null&&Rs(e)===null){a.child=r;break}e=r.sibling,r.sibling=n,n=r,r=e}rc(a,!0,n,null,c,l);break;case"together":rc(a,!1,null,null,void 0,l);break;default:a.memoizedState=null}return a.child}function sn(e,a,n){if(e!==null&&(a.dependencies=e.dependencies),En|=a.lanes,(n&a.childLanes)===0)if(e!==null){if(Ll(e,a,n,!1),(n&a.childLanes)===0)return null}else return null;if(e!==null&&a.child!==e.child)throw Error(d(153));if(a.child!==null){for(e=a.child,n=Ia(e,e.pendingProps),a.child=n,n.return=a;e.sibling!==null;)e=e.sibling,n=n.sibling=Ia(e,e.pendingProps),n.return=a;n.sibling=null}return a.child}function cc(e,a){return(e.lanes&a)!==0?!0:(e=e.dependencies,!!(e!==null&&zs(e)))}function Yg(e,a,n){switch(a.tag){case 3:nt(a,a.stateNode.containerInfo),wn(a,Ut,e.memoizedState.cache),ll();break;case 27:case 5:Ke(a);break;case 4:nt(a,a.stateNode.containerInfo);break;case 10:wn(a,a.type,a.memoizedProps.value);break;case 31:if(a.memoizedState!==null)return a.flags|=128,Ar(a),null;break;case 13:var l=a.memoizedState;if(l!==null)return l.dehydrated!==null?(kn(a),a.flags|=128,null):(n&a.child.childLanes)!==0?em(e,a,n):(kn(a),e=sn(e,a,n),e!==null?e.sibling:null);kn(a);break;case 19:var r=(e.flags&128)!==0;if(l=(n&a.childLanes)!==0,l||(Ll(e,a,n,!1),l=(n&a.childLanes)!==0),r){if(l)return am(e,a,n);a.flags|=128}if(r=a.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),de(Tt,Tt.current),l)break;return null;case 22:return a.lanes=0,Vp(e,a,n,a.pendingProps);case 24:wn(a,Ut,e.memoizedState.cache)}return sn(e,a,n)}function nm(e,a,n){if(e!==null)if(e.memoizedProps!==a.pendingProps)Ht=!0;else{if(!cc(e,n)&&(a.flags&128)===0)return Ht=!1,Yg(e,a,n);Ht=(e.flags&131072)!==0}else Ht=!1,We&&(a.flags&1048576)!==0&&Uu(a,vi,a.index);switch(a.lanes=0,a.tag){case 16:e:{var l=a.pendingProps;if(e=rl(a.elementType),a.type=e,typeof e=="function")fr(e)?(l=pl(e,l),a.tag=1,a=Pp(null,a,e,l,n)):(a.tag=0,a=ac(null,a,e,l,n));else{if(e!=null){var r=e.$$typeof;if(r===ee){a.tag=11,a=Xp(null,a,e,l,n);break e}else if(r===E){a.tag=14,a=Zp(null,a,e,l,n);break e}}throw a=M(e)||e,Error(d(306,a,""))}}return a;case 0:return ac(e,a,a.type,a.pendingProps,n);case 1:return l=a.type,r=pl(l,a.pendingProps),Pp(e,a,l,r,n);case 3:e:{if(nt(a,a.stateNode.containerInfo),e===null)throw Error(d(387));l=a.pendingProps;var c=a.memoizedState;r=c.element,Tr(e,a),zi(a,l,null,n);var u=a.memoizedState;if(l=u.cache,wn(a,Ut,l),l!==c.cache&&Nr(a,[Ut],n,!0),Ci(),l=u.element,c.isDehydrated)if(c={element:l,isDehydrated:!1,cache:u.cache},a.updateQueue.baseState=c,a.memoizedState=c,a.flags&256){a=Ip(e,a,l,n);break e}else if(l!==r){r=Ea(Error(d(424)),a),ji(r),a=Ip(e,a,l,n);break e}else{switch(e=a.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(gt=Ua(e.firstChild),Kt=a,We=!0,vn=null,Oa=!0,n=Vu(a,null,l,n),a.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ll(),l===r){a=sn(e,a,n);break e}Jt(e,a,l,n)}a=a.child}return a;case 26:return Ks(e,a),e===null?(n=hf(a.type,null,a.pendingProps,null))?a.memoizedState=n:We||(n=a.type,e=a.pendingProps,l=uo(ke.current).createElement(n),l[jt]=a,l[la]=e,Ft(l,n,e),Qt(l),a.stateNode=l):a.memoizedState=hf(a.type,e.memoizedProps,a.pendingProps,e.memoizedState),null;case 27:return Ke(a),e===null&&We&&(l=a.stateNode=pf(a.type,a.pendingProps,ke.current),Kt=a,Oa=!0,r=gt,Un(a.type)?(Yc=r,gt=Ua(l.firstChild)):gt=r),Jt(e,a,a.pendingProps.children,n),Ks(e,a),e===null&&(a.flags|=4194304),a.child;case 5:return e===null&&We&&((r=l=gt)&&(l=bb(l,a.type,a.pendingProps,Oa),l!==null?(a.stateNode=l,Kt=a,gt=Ua(l.firstChild),Oa=!1,r=!0):r=!1),r||jn(a)),Ke(a),r=a.type,c=a.pendingProps,u=e!==null?e.memoizedProps:null,l=c.children,Hc(r,c)?l=null:u!==null&&Hc(r,u)&&(a.flags|=32),a.memoizedState!==null&&(r=Rr(e,a,Og,null,null,n),Vi._currentValue=r),Ks(e,a),Jt(e,a,l,n),a.child;case 6:return e===null&&We&&((e=n=gt)&&(n=yb(n,a.pendingProps,Oa),n!==null?(a.stateNode=n,Kt=a,gt=null,e=!0):e=!1),e||jn(a)),null;case 13:return em(e,a,n);case 4:return nt(a,a.stateNode.containerInfo),l=a.pendingProps,e===null?a.child=dl(a,null,l,n):Jt(e,a,l,n),a.child;case 11:return Xp(e,a,a.type,a.pendingProps,n);case 7:return Jt(e,a,a.pendingProps,n),a.child;case 8:return Jt(e,a,a.pendingProps.children,n),a.child;case 12:return Jt(e,a,a.pendingProps.children,n),a.child;case 10:return l=a.pendingProps,wn(a,a.type,l.value),Jt(e,a,l.children,n),a.child;case 9:return r=a.type._context,l=a.pendingProps.children,sl(a),r=Vt(r),l=l(r),a.flags|=1,Jt(e,a,l,n),a.child;case 14:return Zp(e,a,a.type,a.pendingProps,n);case 15:return Kp(e,a,a.type,a.pendingProps,n);case 19:return am(e,a,n);case 31:return Gg(e,a,n);case 22:return Vp(e,a,n,a.pendingProps);case 24:return sl(a),l=Vt(Ut),e===null?(r=kr(),r===null&&(r=ht,c=_r(),r.pooledCache=c,c.refCount++,c!==null&&(r.pooledCacheLanes|=n),r=c),a.memoizedState={parent:l,cache:r},zr(a),wn(a,Ut,r)):((e.lanes&n)!==0&&(Tr(e,a),zi(a,null,null,n),Ci()),r=e.memoizedState,c=a.memoizedState,r.parent!==l?(r={parent:l,cache:l},a.memoizedState=r,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=r),wn(a,Ut,l)):(l=c.cache,wn(a,Ut,l),l!==r.cache&&Nr(a,[Ut],n,!0))),Jt(e,a,a.pendingProps.children,n),a.child;case 29:throw a.pendingProps}throw Error(d(156,a.tag))}function on(e){e.flags|=4}function dc(e,a,n,l,r){if((a=(e.mode&32)!==0)&&(a=!1),a){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Em())e.flags|=8192;else throw cl=Ds,Cr}else e.flags&=-16777217}function lm(e,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!vf(a))if(Em())e.flags|=8192;else throw cl=Ds,Cr}function Js(e,a){a!==null&&(e.flags|=4),e.flags&16384&&(a=e.tag!==22?De():536870912,e.lanes|=a,Fl|=a)}function Ai(e,a){if(!We)switch(e.tailMode){case"hidden":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?a||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function bt(e){var a=e.alternate!==null&&e.alternate.child===e.child,n=0,l=0;if(a)for(var r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags&65011712,l|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)n|=r.lanes|r.childLanes,l|=r.subtreeFlags,l|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=l,e.childLanes=n,a}function $g(e,a,n){var l=a.pendingProps;switch(br(a),a.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return bt(a),null;case 1:return bt(a),null;case 3:return n=a.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),a.memoizedState.cache!==l&&(a.flags|=2048),an(Ut),Ge(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Hl(a)?on(a):e===null||e.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,vr())),bt(a),null;case 26:var r=a.type,c=a.memoizedState;return e===null?(on(a),c!==null?(bt(a),lm(a,c)):(bt(a),dc(a,r,null,l,n))):c?c!==e.memoizedState?(on(a),bt(a),lm(a,c)):(bt(a),a.flags&=-16777217):(e=e.memoizedProps,e!==l&&on(a),bt(a),dc(a,r,e,l,n)),null;case 27:if(Ct(a),n=ke.current,r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&on(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return bt(a),null}e=ue.current,Hl(a)?Hu(a):(e=pf(r,l,n),a.stateNode=e,on(a))}return bt(a),null;case 5:if(Ct(a),r=a.type,e!==null&&a.stateNode!=null)e.memoizedProps!==l&&on(a);else{if(!l){if(a.stateNode===null)throw Error(d(166));return bt(a),null}if(c=ue.current,Hl(a))Hu(a);else{var u=uo(ke.current);switch(c){case 1:c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":c=u.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":c=u.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":c=u.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof l.is=="string"?u.createElement("select",{is:l.is}):u.createElement("select"),l.multiple?c.multiple=!0:l.size&&(c.size=l.size);break;default:c=typeof l.is=="string"?u.createElement(r,{is:l.is}):u.createElement(r)}}c[jt]=a,c[la]=l;e:for(u=a.child;u!==null;){if(u.tag===5||u.tag===6)c.appendChild(u.stateNode);else if(u.tag!==4&&u.tag!==27&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}a.stateNode=c;e:switch(Ft(c,r,l),r){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&on(a)}}return bt(a),dc(a,a.type,e===null?null:e.memoizedProps,a.pendingProps,n),null;case 6:if(e&&a.stateNode!=null)e.memoizedProps!==l&&on(a);else{if(typeof l!="string"&&a.stateNode===null)throw Error(d(166));if(e=ke.current,Hl(a)){if(e=a.stateNode,n=a.memoizedProps,l=null,r=Kt,r!==null)switch(r.tag){case 27:case 5:l=r.memoizedProps}e[jt]=a,e=!!(e.nodeValue===n||l!==null&&l.suppressHydrationWarning===!0||ef(e.nodeValue,n)),e||jn(a,!0)}else e=uo(e).createTextNode(l),e[jt]=a,a.stateNode=e}return bt(a),null;case 31:if(n=a.memoizedState,e===null||e.memoizedState!==null){if(l=Hl(a),n!==null){if(e===null){if(!l)throw Error(d(318));if(e=a.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(d(557));e[jt]=a}else ll(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;bt(a),e=!1}else n=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return a.flags&256?(ya(a),a):(ya(a),null);if((a.flags&128)!==0)throw Error(d(558))}return bt(a),null;case 13:if(l=a.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=Hl(a),l!==null&&l.dehydrated!==null){if(e===null){if(!r)throw Error(d(318));if(r=a.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(d(317));r[jt]=a}else ll(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;bt(a),r=!1}else r=vr(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return a.flags&256?(ya(a),a):(ya(a),null)}return ya(a),(a.flags&128)!==0?(a.lanes=n,a):(n=l!==null,e=e!==null&&e.memoizedState!==null,n&&(l=a.child,r=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(r=l.alternate.memoizedState.cachePool.pool),c=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(c=l.memoizedState.cachePool.pool),c!==r&&(l.flags|=2048)),n!==e&&n&&(a.child.flags|=8192),Js(a,a.updateQueue),bt(a),null);case 4:return Ge(),e===null&&Dc(a.stateNode.containerInfo),bt(a),null;case 10:return an(a.type),bt(a),null;case 19:if(Q(Tt),l=a.memoizedState,l===null)return bt(a),null;if(r=(a.flags&128)!==0,c=l.rendering,c===null)if(r)Ai(l,!1);else{if(St!==0||e!==null&&(e.flags&128)!==0)for(e=a.child;e!==null;){if(c=Rs(e),c!==null){for(a.flags|=128,Ai(l,!1),e=c.updateQueue,a.updateQueue=e,Js(a,e),a.subtreeFlags=0,e=n,n=a.child;n!==null;)Du(n,e),n=n.sibling;return de(Tt,Tt.current&1|2),We&&en(a,l.treeForkCount),a.child}e=e.sibling}l.tail!==null&&be()>eo&&(a.flags|=128,r=!0,Ai(l,!1),a.lanes=4194304)}else{if(!r)if(e=Rs(c),e!==null){if(a.flags|=128,r=!0,e=e.updateQueue,a.updateQueue=e,Js(a,e),Ai(l,!0),l.tail===null&&l.tailMode==="hidden"&&!c.alternate&&!We)return bt(a),null}else 2*be()-l.renderingStartTime>eo&&n!==536870912&&(a.flags|=128,r=!0,Ai(l,!1),a.lanes=4194304);l.isBackwards?(c.sibling=a.child,a.child=c):(e=l.last,e!==null?e.sibling=c:a.child=c,l.last=c)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=be(),e.sibling=null,n=Tt.current,de(Tt,r?n&1|2:n&1),We&&en(a,l.treeForkCount),e):(bt(a),null);case 22:case 23:return ya(a),Or(),l=a.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(a.flags|=8192):l&&(a.flags|=8192),l?(n&536870912)!==0&&(a.flags&128)===0&&(bt(a),a.subtreeFlags&6&&(a.flags|=8192)):bt(a),n=a.updateQueue,n!==null&&Js(a,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),l=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(l=a.memoizedState.cachePool.pool),l!==n&&(a.flags|=2048),e!==null&&Q(ol),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),a.memoizedState.cache!==n&&(a.flags|=2048),an(Ut),bt(a),null;case 25:return null;case 30:return null}throw Error(d(156,a.tag))}function Qg(e,a){switch(br(a),a.tag){case 1:return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 3:return an(Ut),Ge(),e=a.flags,(e&65536)!==0&&(e&128)===0?(a.flags=e&-65537|128,a):null;case 26:case 27:case 5:return Ct(a),null;case 31:if(a.memoizedState!==null){if(ya(a),a.alternate===null)throw Error(d(340));ll()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 13:if(ya(a),e=a.memoizedState,e!==null&&e.dehydrated!==null){if(a.alternate===null)throw Error(d(340));ll()}return e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 19:return Q(Tt),null;case 4:return Ge(),null;case 10:return an(a.type),null;case 22:case 23:return ya(a),Or(),e!==null&&Q(ol),e=a.flags,e&65536?(a.flags=e&-65537|128,a):null;case 24:return an(Ut),null;case 25:return null;default:return null}}function im(e,a){switch(br(a),a.tag){case 3:an(Ut),Ge();break;case 26:case 27:case 5:Ct(a);break;case 4:Ge();break;case 31:a.memoizedState!==null&&ya(a);break;case 13:ya(a);break;case 19:Q(Tt);break;case 10:an(a.type);break;case 22:case 23:ya(a),Or(),e!==null&&Q(ol);break;case 24:an(Ut)}}function Ui(e,a){try{var n=a.updateQueue,l=n!==null?n.lastEffect:null;if(l!==null){var r=l.next;n=r;do{if((n.tag&e)===e){l=void 0;var c=n.create,u=n.inst;l=c(),u.destroy=l}n=n.next}while(n!==r)}}catch(b){rt(a,a.return,b)}}function zn(e,a,n){try{var l=a.updateQueue,r=l!==null?l.lastEffect:null;if(r!==null){var c=r.next;l=c;do{if((l.tag&e)===e){var u=l.inst,b=u.destroy;if(b!==void 0){u.destroy=void 0,r=a;var k=n,Z=b;try{Z()}catch(I){rt(r,k,I)}}}l=l.next}while(l!==c)}}catch(I){rt(a,a.return,I)}}function sm(e){var a=e.updateQueue;if(a!==null){var n=e.stateNode;try{Fu(a,n)}catch(l){rt(e,e.return,l)}}}function om(e,a,n){n.props=pl(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(l){rt(e,a,l)}}function Ri(e,a){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof n=="function"?e.refCleanup=n(l):n.current=l}}catch(r){rt(e,a,r)}}function Xa(e,a){var n=e.ref,l=e.refCleanup;if(n!==null)if(typeof l=="function")try{l()}catch(r){rt(e,a,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){rt(e,a,r)}else n.current=null}function rm(e){var a=e.type,n=e.memoizedProps,l=e.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":n.autoFocus&&l.focus();break e;case"img":n.src?l.src=n.src:n.srcSet&&(l.srcset=n.srcSet)}}catch(r){rt(e,e.return,r)}}function uc(e,a,n){try{var l=e.stateNode;pb(l,e.type,n,a),l[la]=a}catch(r){rt(e,e.return,r)}}function cm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Un(e.type)||e.tag===4}function pc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||cm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Un(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function mc(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(e,a):(a=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,a.appendChild(e),n=n._reactRootContainer,n!=null||a.onclick!==null||(a.onclick=Wa));else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode,a=null),e=e.child,e!==null))for(mc(e,a,n),e=e.sibling;e!==null;)mc(e,a,n),e=e.sibling}function Fs(e,a,n){var l=e.tag;if(l===5||l===6)e=e.stateNode,a?n.insertBefore(e,a):n.appendChild(e);else if(l!==4&&(l===27&&Un(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Fs(e,a,n),e=e.sibling;e!==null;)Fs(e,a,n),e=e.sibling}function dm(e){var a=e.stateNode,n=e.memoizedProps;try{for(var l=e.type,r=a.attributes;r.length;)a.removeAttributeNode(r[0]);Ft(a,l,n),a[jt]=e,a[la]=n}catch(c){rt(e,e.return,c)}}var rn=!1,Lt=!1,fc=!1,um=typeof WeakSet=="function"?WeakSet:Set,Xt=null;function Xg(e,a){if(e=e.containerInfo,Uc=bo,e=Nu(e),or(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var l=n.getSelection&&n.getSelection();if(l&&l.rangeCount!==0){n=l.anchorNode;var r=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{n.nodeType,c.nodeType}catch{n=null;break e}var u=0,b=-1,k=-1,Z=0,I=0,le=e,V=null;t:for(;;){for(var F;le!==n||r!==0&&le.nodeType!==3||(b=u+r),le!==c||l!==0&&le.nodeType!==3||(k=u+l),le.nodeType===3&&(u+=le.nodeValue.length),(F=le.firstChild)!==null;)V=le,le=F;for(;;){if(le===e)break t;if(V===n&&++Z===r&&(b=u),V===c&&++I===l&&(k=u),(F=le.nextSibling)!==null)break;le=V,V=le.parentNode}le=F}n=b===-1||k===-1?null:{start:b,end:k}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rc={focusedElem:e,selectionRange:n},bo=!1,Xt=a;Xt!==null;)if(a=Xt,e=a.child,(a.subtreeFlags&1028)!==0&&e!==null)e.return=a,Xt=e;else for(;Xt!==null;){switch(a=Xt,c=a.alternate,e=a.flags,a.tag){case 0:if((e&4)!==0&&(e=a.updateQueue,e=e!==null?e.events:null,e!==null))for(n=0;n<e.length;n++)r=e[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&c!==null){e=void 0,n=a,r=c.memoizedProps,c=c.memoizedState,l=n.stateNode;try{var ve=pl(n.type,r);e=l.getSnapshotBeforeUpdate(ve,c),l.__reactInternalSnapshotBeforeUpdate=e}catch(Me){rt(n,n.return,Me)}}break;case 3:if((e&1024)!==0){if(e=a.stateNode.containerInfo,n=e.nodeType,n===9)qc(e);else if(n===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":qc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(d(163))}if(e=a.sibling,e!==null){e.return=a.return,Xt=e;break}Xt=a.return}}function pm(e,a,n){var l=n.flags;switch(n.tag){case 0:case 11:case 15:dn(e,n),l&4&&Ui(5,n);break;case 1:if(dn(e,n),l&4)if(e=n.stateNode,a===null)try{e.componentDidMount()}catch(u){rt(n,n.return,u)}else{var r=pl(n.type,a.memoizedProps);a=a.memoizedState;try{e.componentDidUpdate(r,a,e.__reactInternalSnapshotBeforeUpdate)}catch(u){rt(n,n.return,u)}}l&64&&sm(n),l&512&&Ri(n,n.return);break;case 3:if(dn(e,n),l&64&&(e=n.updateQueue,e!==null)){if(a=null,n.child!==null)switch(n.child.tag){case 27:case 5:a=n.child.stateNode;break;case 1:a=n.child.stateNode}try{Fu(e,a)}catch(u){rt(n,n.return,u)}}break;case 27:a===null&&l&4&&dm(n);case 26:case 5:dn(e,n),a===null&&l&4&&rm(n),l&512&&Ri(n,n.return);break;case 12:dn(e,n);break;case 31:dn(e,n),l&4&&hm(e,n);break;case 13:dn(e,n),l&4&&xm(e,n),l&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=eb.bind(null,n),vb(e,n))));break;case 22:if(l=n.memoizedState!==null||rn,!l){a=a!==null&&a.memoizedState!==null||Lt,r=rn;var c=Lt;rn=l,(Lt=a)&&!c?un(e,n,(n.subtreeFlags&8772)!==0):dn(e,n),rn=r,Lt=c}break;case 30:break;default:dn(e,n)}}function mm(e){var a=e.alternate;a!==null&&(e.alternate=null,mm(a)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(a=e.stateNode,a!==null&&Qo(a)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var vt=null,sa=!1;function cn(e,a,n){for(n=n.child;n!==null;)fm(e,a,n),n=n.sibling}function fm(e,a,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(Ve,n)}catch{}switch(n.tag){case 26:Lt||Xa(n,a),cn(e,a,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:Lt||Xa(n,a);var l=vt,r=sa;Un(n.type)&&(vt=n.stateNode,sa=!1),cn(e,a,n),Xi(n.stateNode),vt=l,sa=r;break;case 5:Lt||Xa(n,a);case 6:if(l=vt,r=sa,vt=null,cn(e,a,n),vt=l,sa=r,vt!==null)if(sa)try{(vt.nodeType===9?vt.body:vt.nodeName==="HTML"?vt.ownerDocument.body:vt).removeChild(n.stateNode)}catch(c){rt(n,a,c)}else try{vt.removeChild(n.stateNode)}catch(c){rt(n,a,c)}break;case 18:vt!==null&&(sa?(e=vt,of(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.stateNode),li(e)):of(vt,n.stateNode));break;case 4:l=vt,r=sa,vt=n.stateNode.containerInfo,sa=!0,cn(e,a,n),vt=l,sa=r;break;case 0:case 11:case 14:case 15:zn(2,n,a),Lt||zn(4,n,a),cn(e,a,n);break;case 1:Lt||(Xa(n,a),l=n.stateNode,typeof l.componentWillUnmount=="function"&&om(n,a,l)),cn(e,a,n);break;case 21:cn(e,a,n);break;case 22:Lt=(l=Lt)||n.memoizedState!==null,cn(e,a,n),Lt=l;break;default:cn(e,a,n)}}function hm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{li(e)}catch(n){rt(a,a.return,n)}}}function xm(e,a){if(a.memoizedState===null&&(e=a.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{li(e)}catch(n){rt(a,a.return,n)}}function Zg(e){switch(e.tag){case 31:case 13:case 19:var a=e.stateNode;return a===null&&(a=e.stateNode=new um),a;case 22:return e=e.stateNode,a=e._retryCache,a===null&&(a=e._retryCache=new um),a;default:throw Error(d(435,e.tag))}}function Ws(e,a){var n=Zg(e);a.forEach(function(l){if(!n.has(l)){n.add(l);var r=tb.bind(null,e,l);l.then(r,r)}})}function oa(e,a){var n=a.deletions;if(n!==null)for(var l=0;l<n.length;l++){var r=n[l],c=e,u=a,b=u;e:for(;b!==null;){switch(b.tag){case 27:if(Un(b.type)){vt=b.stateNode,sa=!1;break e}break;case 5:vt=b.stateNode,sa=!1;break e;case 3:case 4:vt=b.stateNode.containerInfo,sa=!0;break e}b=b.return}if(vt===null)throw Error(d(160));fm(c,u,r),vt=null,sa=!1,c=r.alternate,c!==null&&(c.return=null),r.return=null}if(a.subtreeFlags&13886)for(a=a.child;a!==null;)gm(a,e),a=a.sibling}var qa=null;function gm(e,a){var n=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:oa(a,e),ra(e),l&4&&(zn(3,e,e.return),Ui(3,e),zn(5,e,e.return));break;case 1:oa(a,e),ra(e),l&512&&(Lt||n===null||Xa(n,n.return)),l&64&&rn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?l:n.concat(l))));break;case 26:var r=qa;if(oa(a,e),ra(e),l&512&&(Lt||n===null||Xa(n,n.return)),l&4){var c=n!==null?n.memoizedState:null;if(l=e.memoizedState,n===null)if(l===null)if(e.stateNode===null){e:{l=e.type,n=e.memoizedProps,r=r.ownerDocument||r;t:switch(l){case"title":c=r.getElementsByTagName("title")[0],(!c||c[ci]||c[jt]||c.namespaceURI==="http://www.w3.org/2000/svg"||c.hasAttribute("itemprop"))&&(c=r.createElement(l),r.head.insertBefore(c,r.querySelector("head > title"))),Ft(c,l,n),c[jt]=e,Qt(c),l=c;break e;case"link":var u=bf("link","href",r).get(l+(n.href||""));if(u){for(var b=0;b<u.length;b++)if(c=u[b],c.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&c.getAttribute("rel")===(n.rel==null?null:n.rel)&&c.getAttribute("title")===(n.title==null?null:n.title)&&c.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){u.splice(b,1);break t}}c=r.createElement(l),Ft(c,l,n),r.head.appendChild(c);break;case"meta":if(u=bf("meta","content",r).get(l+(n.content||""))){for(b=0;b<u.length;b++)if(c=u[b],c.getAttribute("content")===(n.content==null?null:""+n.content)&&c.getAttribute("name")===(n.name==null?null:n.name)&&c.getAttribute("property")===(n.property==null?null:n.property)&&c.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&c.getAttribute("charset")===(n.charSet==null?null:n.charSet)){u.splice(b,1);break t}}c=r.createElement(l),Ft(c,l,n),r.head.appendChild(c);break;default:throw Error(d(468,l))}c[jt]=e,Qt(c),l=c}e.stateNode=l}else yf(r,e.type,e.stateNode);else e.stateNode=gf(r,l,e.memoizedProps);else c!==l?(c===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):c.count--,l===null?yf(r,e.type,e.stateNode):gf(r,l,e.memoizedProps)):l===null&&e.stateNode!==null&&uc(e,e.memoizedProps,n.memoizedProps)}break;case 27:oa(a,e),ra(e),l&512&&(Lt||n===null||Xa(n,n.return)),n!==null&&l&4&&uc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(oa(a,e),ra(e),l&512&&(Lt||n===null||Xa(n,n.return)),e.flags&32){r=e.stateNode;try{Cl(r,"")}catch(ve){rt(e,e.return,ve)}}l&4&&e.stateNode!=null&&(r=e.memoizedProps,uc(e,r,n!==null?n.memoizedProps:r)),l&1024&&(fc=!0);break;case 6:if(oa(a,e),ra(e),l&4){if(e.stateNode===null)throw Error(d(162));l=e.memoizedProps,n=e.stateNode;try{n.nodeValue=l}catch(ve){rt(e,e.return,ve)}}break;case 3:if(fo=null,r=qa,qa=po(a.containerInfo),oa(a,e),qa=r,ra(e),l&4&&n!==null&&n.memoizedState.isDehydrated)try{li(a.containerInfo)}catch(ve){rt(e,e.return,ve)}fc&&(fc=!1,bm(e));break;case 4:l=qa,qa=po(e.stateNode.containerInfo),oa(a,e),ra(e),qa=l;break;case 12:oa(a,e),ra(e);break;case 31:oa(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 13:oa(a,e),ra(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(Is=be()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 22:r=e.memoizedState!==null;var k=n!==null&&n.memoizedState!==null,Z=rn,I=Lt;if(rn=Z||r,Lt=I||k,oa(a,e),Lt=I,rn=Z,ra(e),l&8192)e:for(a=e.stateNode,a._visibility=r?a._visibility&-2:a._visibility|1,r&&(n===null||k||rn||Lt||ml(e)),n=null,a=e;;){if(a.tag===5||a.tag===26){if(n===null){k=n=a;try{if(c=k.stateNode,r)u=c.style,typeof u.setProperty=="function"?u.setProperty("display","none","important"):u.display="none";else{b=k.stateNode;var le=k.memoizedProps.style,V=le!=null&&le.hasOwnProperty("display")?le.display:null;b.style.display=V==null||typeof V=="boolean"?"":(""+V).trim()}}catch(ve){rt(k,k.return,ve)}}}else if(a.tag===6){if(n===null){k=a;try{k.stateNode.nodeValue=r?"":k.memoizedProps}catch(ve){rt(k,k.return,ve)}}}else if(a.tag===18){if(n===null){k=a;try{var F=k.stateNode;r?rf(F,!0):rf(k.stateNode,!1)}catch(ve){rt(k,k.return,ve)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===e)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;n===a&&(n=null),a=a.return}n===a&&(n=null),a.sibling.return=a.return,a=a.sibling}l&4&&(l=e.updateQueue,l!==null&&(n=l.retryQueue,n!==null&&(l.retryQueue=null,Ws(e,n))));break;case 19:oa(a,e),ra(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Ws(e,l)));break;case 30:break;case 21:break;default:oa(a,e),ra(e)}}function ra(e){var a=e.flags;if(a&2){try{for(var n,l=e.return;l!==null;){if(cm(l)){n=l;break}l=l.return}if(n==null)throw Error(d(160));switch(n.tag){case 27:var r=n.stateNode,c=pc(e);Fs(e,c,r);break;case 5:var u=n.stateNode;n.flags&32&&(Cl(u,""),n.flags&=-33);var b=pc(e);Fs(e,b,u);break;case 3:case 4:var k=n.stateNode.containerInfo,Z=pc(e);mc(e,Z,k);break;default:throw Error(d(161))}}catch(I){rt(e,e.return,I)}e.flags&=-3}a&4096&&(e.flags&=-4097)}function bm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var a=e;bm(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),e=e.sibling}}function dn(e,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)pm(e,a.alternate,a),a=a.sibling}function ml(e){for(e=e.child;e!==null;){var a=e;switch(a.tag){case 0:case 11:case 14:case 15:zn(4,a,a.return),ml(a);break;case 1:Xa(a,a.return);var n=a.stateNode;typeof n.componentWillUnmount=="function"&&om(a,a.return,n),ml(a);break;case 27:Xi(a.stateNode);case 26:case 5:Xa(a,a.return),ml(a);break;case 22:a.memoizedState===null&&ml(a);break;case 30:ml(a);break;default:ml(a)}e=e.sibling}}function un(e,a,n){for(n=n&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var l=a.alternate,r=e,c=a,u=c.flags;switch(c.tag){case 0:case 11:case 15:un(r,c,n),Ui(4,c);break;case 1:if(un(r,c,n),l=c,r=l.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(Z){rt(l,l.return,Z)}if(l=c,r=l.updateQueue,r!==null){var b=l.stateNode;try{var k=r.shared.hiddenCallbacks;if(k!==null)for(r.shared.hiddenCallbacks=null,r=0;r<k.length;r++)Ju(k[r],b)}catch(Z){rt(l,l.return,Z)}}n&&u&64&&sm(c),Ri(c,c.return);break;case 27:dm(c);case 26:case 5:un(r,c,n),n&&l===null&&u&4&&rm(c),Ri(c,c.return);break;case 12:un(r,c,n);break;case 31:un(r,c,n),n&&u&4&&hm(r,c);break;case 13:un(r,c,n),n&&u&4&&xm(r,c);break;case 22:c.memoizedState===null&&un(r,c,n),Ri(c,c.return);break;case 30:break;default:un(r,c,n)}a=a.sibling}}function hc(e,a){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&wi(n))}function xc(e,a){e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e))}function Ba(e,a,n,l){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)ym(e,a,n,l),a=a.sibling}function ym(e,a,n,l){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Ba(e,a,n,l),r&2048&&Ui(9,a);break;case 1:Ba(e,a,n,l);break;case 3:Ba(e,a,n,l),r&2048&&(e=null,a.alternate!==null&&(e=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==e&&(a.refCount++,e!=null&&wi(e)));break;case 12:if(r&2048){Ba(e,a,n,l),e=a.stateNode;try{var c=a.memoizedProps,u=c.id,b=c.onPostCommit;typeof b=="function"&&b(u,a.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(k){rt(a,a.return,k)}}else Ba(e,a,n,l);break;case 31:Ba(e,a,n,l);break;case 13:Ba(e,a,n,l);break;case 23:break;case 22:c=a.stateNode,u=a.alternate,a.memoizedState!==null?c._visibility&2?Ba(e,a,n,l):Hi(e,a):c._visibility&2?Ba(e,a,n,l):(c._visibility|=2,Kl(e,a,n,l,(a.subtreeFlags&10256)!==0||!1)),r&2048&&hc(u,a);break;case 24:Ba(e,a,n,l),r&2048&&xc(a.alternate,a);break;default:Ba(e,a,n,l)}}function Kl(e,a,n,l,r){for(r=r&&((a.subtreeFlags&10256)!==0||!1),a=a.child;a!==null;){var c=e,u=a,b=n,k=l,Z=u.flags;switch(u.tag){case 0:case 11:case 15:Kl(c,u,b,k,r),Ui(8,u);break;case 23:break;case 22:var I=u.stateNode;u.memoizedState!==null?I._visibility&2?Kl(c,u,b,k,r):Hi(c,u):(I._visibility|=2,Kl(c,u,b,k,r)),r&&Z&2048&&hc(u.alternate,u);break;case 24:Kl(c,u,b,k,r),r&&Z&2048&&xc(u.alternate,u);break;default:Kl(c,u,b,k,r)}a=a.sibling}}function Hi(e,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var n=e,l=a,r=l.flags;switch(l.tag){case 22:Hi(n,l),r&2048&&hc(l.alternate,l);break;case 24:Hi(n,l),r&2048&&xc(l.alternate,l);break;default:Hi(n,l)}a=a.sibling}}var Li=8192;function Vl(e,a,n){if(e.subtreeFlags&Li)for(e=e.child;e!==null;)vm(e,a,n),e=e.sibling}function vm(e,a,n){switch(e.tag){case 26:Vl(e,a,n),e.flags&Li&&e.memoizedState!==null&&Db(n,qa,e.memoizedState,e.memoizedProps);break;case 5:Vl(e,a,n);break;case 3:case 4:var l=qa;qa=po(e.stateNode.containerInfo),Vl(e,a,n),qa=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Li,Li=16777216,Vl(e,a,n),Li=l):Vl(e,a,n));break;default:Vl(e,a,n)}}function jm(e){var a=e.alternate;if(a!==null&&(e=a.child,e!==null)){a.child=null;do a=e.sibling,e.sibling=null,e=a;while(e!==null)}}function qi(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];Xt=l,Nm(l,e)}jm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)wm(e),e=e.sibling}function wm(e){switch(e.tag){case 0:case 11:case 15:qi(e),e.flags&2048&&zn(9,e,e.return);break;case 3:qi(e);break;case 12:qi(e);break;case 22:var a=e.stateNode;e.memoizedState!==null&&a._visibility&2&&(e.return===null||e.return.tag!==13)?(a._visibility&=-3,Ps(e)):qi(e);break;default:qi(e)}}function Ps(e){var a=e.deletions;if((e.flags&16)!==0){if(a!==null)for(var n=0;n<a.length;n++){var l=a[n];Xt=l,Nm(l,e)}jm(e)}for(e=e.child;e!==null;){switch(a=e,a.tag){case 0:case 11:case 15:zn(8,a,a.return),Ps(a);break;case 22:n=a.stateNode,n._visibility&2&&(n._visibility&=-3,Ps(a));break;default:Ps(a)}e=e.sibling}}function Nm(e,a){for(;Xt!==null;){var n=Xt;switch(n.tag){case 0:case 11:case 15:zn(8,n,a);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var l=n.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:wi(n.memoizedState.cache)}if(l=n.child,l!==null)l.return=n,Xt=l;else e:for(n=e;Xt!==null;){l=Xt;var r=l.sibling,c=l.return;if(mm(l),l===n){Xt=null;break e}if(r!==null){r.return=c,Xt=r;break e}Xt=c}}}var Kg={getCacheForType:function(e){var a=Vt(Ut),n=a.data.get(e);return n===void 0&&(n=e(),a.data.set(e,n)),n},cacheSignal:function(){return Vt(Ut).controller.signal}},Vg=typeof WeakMap=="function"?WeakMap:Map,at=0,ht=null,$e=null,Je=0,ot=0,va=null,Tn=!1,Jl=!1,gc=!1,pn=0,St=0,En=0,fl=0,bc=0,ja=0,Fl=0,Bi=null,ca=null,yc=!1,Is=0,_m=0,eo=1/0,to=null,Mn=null,Bt=0,Dn=null,Wl=null,mn=0,vc=0,jc=null,Sm=null,Gi=0,wc=null;function wa(){return(at&2)!==0&&Je!==0?Je&-Je:A.T!==null?zc():Ae()}function km(){if(ja===0)if((Je&536870912)===0||We){var e=fa;fa<<=1,(fa&3932160)===0&&(fa=262144),ja=e}else ja=536870912;return e=ba.current,e!==null&&(e.flags|=32),ja}function da(e,a,n){(e===ht&&(ot===2||ot===9)||e.cancelPendingCommit!==null)&&(Pl(e,0),On(e,Je,ja,!1)),Ie(e,n),((at&2)===0||e!==ht)&&(e===ht&&((at&2)===0&&(fl|=n),St===4&&On(e,Je,ja,!1)),Za(e))}function Cm(e,a,n){if((at&6)!==0)throw Error(d(327));var l=!n&&(a&127)===0&&(a&e.expiredLanes)===0||ce(e,a),r=l?Wg(e,a):_c(e,a,!0),c=l;do{if(r===0){Jl&&!l&&On(e,a,0,!1);break}else{if(n=e.current.alternate,c&&!Jg(n)){r=_c(e,a,!1),c=!1;continue}if(r===2){if(c=a,e.errorRecoveryDisabledLanes&c)var u=0;else u=e.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){a=u;e:{var b=e;r=Bi;var k=b.current.memoizedState.isDehydrated;if(k&&(Pl(b,u).flags|=256),u=_c(b,u,!1),u!==2){if(gc&&!k){b.errorRecoveryDisabledLanes|=c,fl|=c,r=4;break e}c=ca,ca=r,c!==null&&(ca===null?ca=c:ca.push.apply(ca,c))}r=u}if(c=!1,r!==2)continue}}if(r===1){Pl(e,0),On(e,a,0,!0);break}e:{switch(l=e,c=r,c){case 0:case 1:throw Error(d(345));case 4:if((a&4194048)!==a)break;case 6:On(l,a,ja,!Tn);break e;case 2:ca=null;break;case 3:case 5:break;default:throw Error(d(329))}if((a&62914560)===a&&(r=Is+300-be(),10<r)){if(On(l,a,ja,!Tn),L(l,0,!0)!==0)break e;mn=a,l.timeoutHandle=lf(zm.bind(null,l,n,ca,to,yc,a,ja,fl,Fl,Tn,c,"Throttled",-0,0),r);break e}zm(l,n,ca,to,yc,a,ja,fl,Fl,Tn,c,null,-0,0)}}break}while(!0);Za(e)}function zm(e,a,n,l,r,c,u,b,k,Z,I,le,V,F){if(e.timeoutHandle=-1,le=a.subtreeFlags,le&8192||(le&16785408)===16785408){le={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wa},vm(a,c,le);var ve=(c&62914560)===c?Is-be():(c&4194048)===c?_m-be():0;if(ve=Ob(le,ve),ve!==null){mn=c,e.cancelPendingCommit=ve(Rm.bind(null,e,a,c,n,l,r,u,b,k,I,le,null,V,F)),On(e,c,u,!Z);return}}Rm(e,a,c,n,l,r,u,b,k)}function Jg(e){for(var a=e;;){var n=a.tag;if((n===0||n===11||n===15)&&a.flags&16384&&(n=a.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var l=0;l<n.length;l++){var r=n[l],c=r.getSnapshot;r=r.value;try{if(!xa(c(),r))return!1}catch{return!1}}if(n=a.child,a.subtreeFlags&16384&&n!==null)n.return=a,a=n;else{if(a===e)break;for(;a.sibling===null;){if(a.return===null||a.return===e)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function On(e,a,n,l){a&=~bc,a&=~fl,e.suspendedLanes|=a,e.pingedLanes&=~a,l&&(e.warmLanes|=a),l=e.expirationTimes;for(var r=a;0<r;){var c=31-ut(r),u=1<<c;l[c]=-1,r&=~u}n!==0&&it(e,n,a)}function ao(){return(at&6)===0?(Yi(0),!1):!0}function Nc(){if($e!==null){if(ot===0)var e=$e.return;else e=$e,tn=il=null,qr(e),Yl=null,_i=0,e=$e;for(;e!==null;)im(e.alternate,e),e=e.return;$e=null}}function Pl(e,a){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,hb(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),mn=0,Nc(),ht=e,$e=n=Ia(e.current,null),Je=a,ot=0,va=null,Tn=!1,Jl=ce(e,a),gc=!1,Fl=ja=bc=fl=En=St=0,ca=Bi=null,yc=!1,(a&8)!==0&&(a|=a&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=a;0<l;){var r=31-ut(l),c=1<<r;a|=e[r],l&=~c}return pn=a,Ns(),n}function Tm(e,a){He=null,A.H=Di,a===Gl||a===Ms?(a=Xu(),ot=3):a===Cr?(a=Xu(),ot=4):ot=a===tc?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,va=a,$e===null&&(St=1,Xs(e,Ea(a,e.current)))}function Em(){var e=ba.current;return e===null?!0:(Je&4194048)===Je?Aa===null:(Je&62914560)===Je||(Je&536870912)!==0?e===Aa:!1}function Mm(){var e=A.H;return A.H=Di,e===null?Di:e}function Dm(){var e=A.A;return A.A=Kg,e}function no(){St=4,Tn||(Je&4194048)!==Je&&ba.current!==null||(Jl=!0),(En&134217727)===0&&(fl&134217727)===0||ht===null||On(ht,Je,ja,!1)}function _c(e,a,n){var l=at;at|=2;var r=Mm(),c=Dm();(ht!==e||Je!==a)&&(to=null,Pl(e,a)),a=!1;var u=St;e:do try{if(ot!==0&&$e!==null){var b=$e,k=va;switch(ot){case 8:Nc(),u=6;break e;case 3:case 2:case 9:case 6:ba.current===null&&(a=!0);var Z=ot;if(ot=0,va=null,Il(e,b,k,Z),n&&Jl){u=0;break e}break;default:Z=ot,ot=0,va=null,Il(e,b,k,Z)}}Fg(),u=St;break}catch(I){Tm(e,I)}while(!0);return a&&e.shellSuspendCounter++,tn=il=null,at=l,A.H=r,A.A=c,$e===null&&(ht=null,Je=0,Ns()),u}function Fg(){for(;$e!==null;)Om($e)}function Wg(e,a){var n=at;at|=2;var l=Mm(),r=Dm();ht!==e||Je!==a?(to=null,eo=be()+500,Pl(e,a)):Jl=ce(e,a);e:do try{if(ot!==0&&$e!==null){a=$e;var c=va;t:switch(ot){case 1:ot=0,va=null,Il(e,a,c,1);break;case 2:case 9:if($u(c)){ot=0,va=null,Am(a);break}a=function(){ot!==2&&ot!==9||ht!==e||(ot=7),Za(e)},c.then(a,a);break e;case 3:ot=7;break e;case 4:ot=5;break e;case 7:$u(c)?(ot=0,va=null,Am(a)):(ot=0,va=null,Il(e,a,c,7));break;case 5:var u=null;switch($e.tag){case 26:u=$e.memoizedState;case 5:case 27:var b=$e;if(u?vf(u):b.stateNode.complete){ot=0,va=null;var k=b.sibling;if(k!==null)$e=k;else{var Z=b.return;Z!==null?($e=Z,lo(Z)):$e=null}break t}}ot=0,va=null,Il(e,a,c,5);break;case 6:ot=0,va=null,Il(e,a,c,6);break;case 8:Nc(),St=6;break e;default:throw Error(d(462))}}Pg();break}catch(I){Tm(e,I)}while(!0);return tn=il=null,A.H=l,A.A=r,at=n,$e!==null?0:(ht=null,Je=0,Ns(),St)}function Pg(){for(;$e!==null&&!ma();)Om($e)}function Om(e){var a=nm(e.alternate,e,pn);e.memoizedProps=e.pendingProps,a===null?lo(e):$e=a}function Am(e){var a=e,n=a.alternate;switch(a.tag){case 15:case 0:a=Wp(n,a,a.pendingProps,a.type,void 0,Je);break;case 11:a=Wp(n,a,a.pendingProps,a.type.render,a.ref,Je);break;case 5:qr(a);default:im(n,a),a=$e=Du(a,pn),a=nm(n,a,pn)}e.memoizedProps=e.pendingProps,a===null?lo(e):$e=a}function Il(e,a,n,l){tn=il=null,qr(a),Yl=null,_i=0;var r=a.return;try{if(Bg(e,r,a,n,Je)){St=1,Xs(e,Ea(n,e.current)),$e=null;return}}catch(c){if(r!==null)throw $e=r,c;St=1,Xs(e,Ea(n,e.current)),$e=null;return}a.flags&32768?(We||l===1?e=!0:Jl||(Je&536870912)!==0?e=!1:(Tn=e=!0,(l===2||l===9||l===3||l===6)&&(l=ba.current,l!==null&&l.tag===13&&(l.flags|=16384))),Um(a,e)):lo(a)}function lo(e){var a=e;do{if((a.flags&32768)!==0){Um(a,Tn);return}e=a.return;var n=$g(a.alternate,a,pn);if(n!==null){$e=n;return}if(a=a.sibling,a!==null){$e=a;return}$e=a=e}while(a!==null);St===0&&(St=5)}function Um(e,a){do{var n=Qg(e.alternate,e);if(n!==null){n.flags&=32767,$e=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!a&&(e=e.sibling,e!==null)){$e=e;return}$e=e=n}while(e!==null);St=6,$e=null}function Rm(e,a,n,l,r,c,u,b,k){e.cancelPendingCommit=null;do io();while(Bt!==0);if((at&6)!==0)throw Error(d(327));if(a!==null){if(a===e.current)throw Error(d(177));if(c=a.lanes|a.childLanes,c|=pr,lt(e,n,c,u,b,k),e===ht&&($e=ht=null,Je=0),Wl=a,Dn=e,mn=n,vc=c,jc=r,Sm=l,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ab(G,function(){return Gm(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||l){l=A.T,A.T=null,r=J.p,J.p=2,u=at,at|=4;try{Xg(e,a,n)}finally{at=u,J.p=r,A.T=l}}Bt=1,Hm(),Lm(),qm()}}function Hm(){if(Bt===1){Bt=0;var e=Dn,a=Wl,n=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||n){n=A.T,A.T=null;var l=J.p;J.p=2;var r=at;at|=4;try{gm(a,e);var c=Rc,u=Nu(e.containerInfo),b=c.focusedElem,k=c.selectionRange;if(u!==b&&b&&b.ownerDocument&&wu(b.ownerDocument.documentElement,b)){if(k!==null&&or(b)){var Z=k.start,I=k.end;if(I===void 0&&(I=Z),"selectionStart"in b)b.selectionStart=Z,b.selectionEnd=Math.min(I,b.value.length);else{var le=b.ownerDocument||document,V=le&&le.defaultView||window;if(V.getSelection){var F=V.getSelection(),ve=b.textContent.length,Me=Math.min(k.start,ve),ft=k.end===void 0?Me:Math.min(k.end,ve);!F.extend&&Me>ft&&(u=ft,ft=Me,Me=u);var q=ju(b,Me),D=ju(b,ft);if(q&&D&&(F.rangeCount!==1||F.anchorNode!==q.node||F.anchorOffset!==q.offset||F.focusNode!==D.node||F.focusOffset!==D.offset)){var X=le.createRange();X.setStart(q.node,q.offset),F.removeAllRanges(),Me>ft?(F.addRange(X),F.extend(D.node,D.offset)):(X.setEnd(D.node,D.offset),F.addRange(X))}}}}for(le=[],F=b;F=F.parentNode;)F.nodeType===1&&le.push({element:F,left:F.scrollLeft,top:F.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<le.length;b++){var ne=le[b];ne.element.scrollLeft=ne.left,ne.element.scrollTop=ne.top}}bo=!!Uc,Rc=Uc=null}finally{at=r,J.p=l,A.T=n}}e.current=a,Bt=2}}function Lm(){if(Bt===2){Bt=0;var e=Dn,a=Wl,n=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||n){n=A.T,A.T=null;var l=J.p;J.p=2;var r=at;at|=4;try{pm(e,a.alternate,a)}finally{at=r,J.p=l,A.T=n}}Bt=3}}function qm(){if(Bt===4||Bt===3){Bt=0,T();var e=Dn,a=Wl,n=mn,l=Sm;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Bt=5:(Bt=0,Wl=Dn=null,Bm(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(Mn=null),xe(n),a=a.stateNode,Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(Ve,a,void 0,(a.current.flags&128)===128)}catch{}if(l!==null){a=A.T,r=J.p,J.p=2,A.T=null;try{for(var c=e.onRecoverableError,u=0;u<l.length;u++){var b=l[u];c(b.value,{componentStack:b.stack})}}finally{A.T=a,J.p=r}}(mn&3)!==0&&io(),Za(e),r=e.pendingLanes,(n&261930)!==0&&(r&42)!==0?e===wc?Gi++:(Gi=0,wc=e):Gi=0,Yi(0)}}function Bm(e,a){(e.pooledCacheLanes&=a)===0&&(a=e.pooledCache,a!=null&&(e.pooledCache=null,wi(a)))}function io(){return Hm(),Lm(),qm(),Gm()}function Gm(){if(Bt!==5)return!1;var e=Dn,a=vc;vc=0;var n=xe(mn),l=A.T,r=J.p;try{J.p=32>n?32:n,A.T=null,n=jc,jc=null;var c=Dn,u=mn;if(Bt=0,Wl=Dn=null,mn=0,(at&6)!==0)throw Error(d(331));var b=at;if(at|=4,wm(c.current),ym(c,c.current,u,n),at=b,Yi(0,!1),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(Ve,c)}catch{}return!0}finally{J.p=r,A.T=l,Bm(e,a)}}function Ym(e,a,n){a=Ea(n,a),a=ec(e.stateNode,a,2),e=Sn(e,a,2),e!==null&&(Ie(e,2),Za(e))}function rt(e,a,n){if(e.tag===3)Ym(e,e,n);else for(;a!==null;){if(a.tag===3){Ym(a,e,n);break}else if(a.tag===1){var l=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Mn===null||!Mn.has(l))){e=Ea(n,e),n=$p(2),l=Sn(a,n,2),l!==null&&(Qp(n,l,a,e),Ie(l,2),Za(l));break}}a=a.return}}function Sc(e,a,n){var l=e.pingCache;if(l===null){l=e.pingCache=new Vg;var r=new Set;l.set(a,r)}else r=l.get(a),r===void 0&&(r=new Set,l.set(a,r));r.has(n)||(gc=!0,r.add(n),e=Ig.bind(null,e,a,n),a.then(e,e))}function Ig(e,a,n){var l=e.pingCache;l!==null&&l.delete(a),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,ht===e&&(Je&n)===n&&(St===4||St===3&&(Je&62914560)===Je&&300>be()-Is?(at&2)===0&&Pl(e,0):bc|=n,Fl===Je&&(Fl=0)),Za(e)}function $m(e,a){a===0&&(a=De()),e=al(e,a),e!==null&&(Ie(e,a),Za(e))}function eb(e){var a=e.memoizedState,n=0;a!==null&&(n=a.retryLane),$m(e,n)}function tb(e,a){var n=0;switch(e.tag){case 31:case 13:var l=e.stateNode,r=e.memoizedState;r!==null&&(n=r.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(d(314))}l!==null&&l.delete(a),$m(e,n)}function ab(e,a){return Pt(e,a)}var so=null,ei=null,kc=!1,oo=!1,Cc=!1,An=0;function Za(e){e!==ei&&e.next===null&&(ei===null?so=ei=e:ei=ei.next=e),oo=!0,kc||(kc=!0,lb())}function Yi(e,a){if(!Cc&&oo){Cc=!0;do for(var n=!1,l=so;l!==null;){if(e!==0){var r=l.pendingLanes;if(r===0)var c=0;else{var u=l.suspendedLanes,b=l.pingedLanes;c=(1<<31-ut(42|e)+1)-1,c&=r&~(u&~b),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(n=!0,Km(l,c))}else c=Je,c=L(l,l===ht?c:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(c&3)===0||ce(l,c)||(n=!0,Km(l,c));l=l.next}while(n);Cc=!1}}function nb(){Qm()}function Qm(){oo=kc=!1;var e=0;An!==0&&fb()&&(e=An);for(var a=be(),n=null,l=so;l!==null;){var r=l.next,c=Xm(l,a);c===0?(l.next=null,n===null?so=r:n.next=r,r===null&&(ei=n)):(n=l,(e!==0||(c&3)!==0)&&(oo=!0)),l=r}Bt!==0&&Bt!==5||Yi(e),An!==0&&(An=0)}function Xm(e,a){for(var n=e.suspendedLanes,l=e.pingedLanes,r=e.expirationTimes,c=e.pendingLanes&-62914561;0<c;){var u=31-ut(c),b=1<<u,k=r[u];k===-1?((b&n)===0||(b&l)!==0)&&(r[u]=se(b,a)):k<=a&&(e.expiredLanes|=b),c&=~b}if(a=ht,n=Je,n=L(e,e===a?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,n===0||e===a&&(ot===2||ot===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&zt(l),e.callbackNode=null,e.callbackPriority=0;if((n&3)===0||ce(e,n)){if(a=n&-n,a===e.callbackPriority)return a;switch(l!==null&&zt(l),xe(n)){case 2:case 8:n=dt;break;case 32:n=G;break;case 268435456:n=je;break;default:n=G}return l=Zm.bind(null,e),n=Pt(n,l),e.callbackPriority=a,e.callbackNode=n,a}return l!==null&&l!==null&&zt(l),e.callbackPriority=2,e.callbackNode=null,2}function Zm(e,a){if(Bt!==0&&Bt!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(io()&&e.callbackNode!==n)return null;var l=Je;return l=L(e,e===ht?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Cm(e,l,a),Xm(e,be()),e.callbackNode!=null&&e.callbackNode===n?Zm.bind(null,e):null)}function Km(e,a){if(io())return null;Cm(e,a,!0)}function lb(){xb(function(){(at&6)!==0?Pt(ye,nb):Qm()})}function zc(){if(An===0){var e=ql;e===0&&(e=Ga,Ga<<=1,(Ga&261888)===0&&(Ga=256)),An=e}return An}function Vm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:hs(""+e)}function Jm(e,a){var n=a.ownerDocument.createElement("input");return n.name=a.name,n.value=a.value,e.id&&n.setAttribute("form",e.id),a.parentNode.insertBefore(n,a),e=new FormData(e),n.parentNode.removeChild(n),e}function ib(e,a,n,l,r){if(a==="submit"&&n&&n.stateNode===r){var c=Vm((r[la]||null).action),u=l.submitter;u&&(a=(a=u[la]||null)?Vm(a.formAction):u.getAttribute("formAction"),a!==null&&(c=a,u=null));var b=new ys("action","action",null,l,r);e.push({event:b,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(An!==0){var k=u?Jm(r,u):new FormData(r);Vr(n,{pending:!0,data:k,method:r.method,action:c},null,k)}}else typeof c=="function"&&(b.preventDefault(),k=u?Jm(r,u):new FormData(r),Vr(n,{pending:!0,data:k,method:r.method,action:c},c,k))},currentTarget:r}]})}}for(var Tc=0;Tc<ur.length;Tc++){var Ec=ur[Tc],sb=Ec.toLowerCase(),ob=Ec[0].toUpperCase()+Ec.slice(1);La(sb,"on"+ob)}La(ku,"onAnimationEnd"),La(Cu,"onAnimationIteration"),La(zu,"onAnimationStart"),La("dblclick","onDoubleClick"),La("focusin","onFocus"),La("focusout","onBlur"),La(Ng,"onTransitionRun"),La(_g,"onTransitionStart"),La(Sg,"onTransitionCancel"),La(Tu,"onTransitionEnd"),Sl("onMouseEnter",["mouseout","mouseover"]),Sl("onMouseLeave",["mouseout","mouseover"]),Sl("onPointerEnter",["pointerout","pointerover"]),Sl("onPointerLeave",["pointerout","pointerover"]),Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $i="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($i));function Fm(e,a){a=(a&4)!==0;for(var n=0;n<e.length;n++){var l=e[n],r=l.event;l=l.listeners;e:{var c=void 0;if(a)for(var u=l.length-1;0<=u;u--){var b=l[u],k=b.instance,Z=b.currentTarget;if(b=b.listener,k!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(I){ws(I)}r.currentTarget=null,c=k}else for(u=0;u<l.length;u++){if(b=l[u],k=b.instance,Z=b.currentTarget,b=b.listener,k!==c&&r.isPropagationStopped())break e;c=b,r.currentTarget=Z;try{c(r)}catch(I){ws(I)}r.currentTarget=null,c=k}}}}function Qe(e,a){var n=a[$o];n===void 0&&(n=a[$o]=new Set);var l=e+"__bubble";n.has(l)||(Wm(a,e,2,!1),n.add(l))}function Mc(e,a,n){var l=0;a&&(l|=4),Wm(n,e,l,a)}var ro="_reactListening"+Math.random().toString(36).slice(2);function Dc(e){if(!e[ro]){e[ro]=!0,Qd.forEach(function(n){n!=="selectionchange"&&(rb.has(n)||Mc(n,!1,e),Mc(n,!0,e))});var a=e.nodeType===9?e:e.ownerDocument;a===null||a[ro]||(a[ro]=!0,Mc("selectionchange",!1,a))}}function Wm(e,a,n,l){switch(Cf(a)){case 2:var r=Rb;break;case 8:r=Hb;break;default:r=Kc}n=r.bind(null,a,n,e),r=void 0,!Po||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(r=!0),l?r!==void 0?e.addEventListener(a,n,{capture:!0,passive:r}):e.addEventListener(a,n,!0):r!==void 0?e.addEventListener(a,n,{passive:r}):e.addEventListener(a,n,!1)}function Oc(e,a,n,l,r){var c=l;if((a&1)===0&&(a&2)===0&&l!==null)e:for(;;){if(l===null)return;var u=l.tag;if(u===3||u===4){var b=l.stateNode.containerInfo;if(b===r)break;if(u===4)for(u=l.return;u!==null;){var k=u.tag;if((k===3||k===4)&&u.stateNode.containerInfo===r)return;u=u.return}for(;b!==null;){if(u=wl(b),u===null)return;if(k=u.tag,k===5||k===6||k===26||k===27){l=c=u;continue e}b=b.parentNode}}l=l.return}au(function(){var Z=c,I=Fo(n),le=[];e:{var V=Eu.get(e);if(V!==void 0){var F=ys,ve=e;switch(e){case"keypress":if(gs(n)===0)break e;case"keydown":case"keyup":F=tg;break;case"focusin":ve="focus",F=ar;break;case"focusout":ve="blur",F=ar;break;case"beforeblur":case"afterblur":F=ar;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":F=iu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":F=$x;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":F=lg;break;case ku:case Cu:case zu:F=Zx;break;case Tu:F=sg;break;case"scroll":case"scrollend":F=Gx;break;case"wheel":F=rg;break;case"copy":case"cut":case"paste":F=Vx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":F=ou;break;case"toggle":case"beforetoggle":F=dg}var Me=(a&4)!==0,ft=!Me&&(e==="scroll"||e==="scrollend"),q=Me?V!==null?V+"Capture":null:V;Me=[];for(var D=Z,X;D!==null;){var ne=D;if(X=ne.stateNode,ne=ne.tag,ne!==5&&ne!==26&&ne!==27||X===null||q===null||(ne=ui(D,q),ne!=null&&Me.push(Qi(D,ne,X))),ft)break;D=D.return}0<Me.length&&(V=new F(V,ve,null,n,I),le.push({event:V,listeners:Me}))}}if((a&7)===0){e:{if(V=e==="mouseover"||e==="pointerover",F=e==="mouseout"||e==="pointerout",V&&n!==Jo&&(ve=n.relatedTarget||n.fromElement)&&(wl(ve)||ve[jl]))break e;if((F||V)&&(V=I.window===I?I:(V=I.ownerDocument)?V.defaultView||V.parentWindow:window,F?(ve=n.relatedTarget||n.toElement,F=Z,ve=ve?wl(ve):null,ve!==null&&(ft=h(ve),Me=ve.tag,ve!==ft||Me!==5&&Me!==27&&Me!==6)&&(ve=null)):(F=null,ve=Z),F!==ve)){if(Me=iu,ne="onMouseLeave",q="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(Me=ou,ne="onPointerLeave",q="onPointerEnter",D="pointer"),ft=F==null?V:di(F),X=ve==null?V:di(ve),V=new Me(ne,D+"leave",F,n,I),V.target=ft,V.relatedTarget=X,ne=null,wl(I)===Z&&(Me=new Me(q,D+"enter",ve,n,I),Me.target=X,Me.relatedTarget=ft,ne=Me),ft=ne,F&&ve)t:{for(Me=cb,q=F,D=ve,X=0,ne=q;ne;ne=Me(ne))X++;ne=0;for(var Ce=D;Ce;Ce=Me(Ce))ne++;for(;0<X-ne;)q=Me(q),X--;for(;0<ne-X;)D=Me(D),ne--;for(;X--;){if(q===D||D!==null&&q===D.alternate){Me=q;break t}q=Me(q),D=Me(D)}Me=null}else Me=null;F!==null&&Pm(le,V,F,Me,!1),ve!==null&&ft!==null&&Pm(le,ft,ve,Me,!0)}}e:{if(V=Z?di(Z):window,F=V.nodeName&&V.nodeName.toLowerCase(),F==="select"||F==="input"&&V.type==="file")var et=hu;else if(mu(V))if(xu)et=vg;else{et=bg;var _e=gg}else F=V.nodeName,!F||F.toLowerCase()!=="input"||V.type!=="checkbox"&&V.type!=="radio"?Z&&Vo(Z.elementType)&&(et=hu):et=yg;if(et&&(et=et(e,Z))){fu(le,et,n,I);break e}_e&&_e(e,V,Z),e==="focusout"&&Z&&V.type==="number"&&Z.memoizedProps.value!=null&&Ko(V,"number",V.value)}switch(_e=Z?di(Z):window,e){case"focusin":(mu(_e)||_e.contentEditable==="true")&&(Ml=_e,rr=Z,yi=null);break;case"focusout":yi=rr=Ml=null;break;case"mousedown":cr=!0;break;case"contextmenu":case"mouseup":case"dragend":cr=!1,_u(le,n,I);break;case"selectionchange":if(wg)break;case"keydown":case"keyup":_u(le,n,I)}var Be;if(lr)e:{switch(e){case"compositionstart":var Fe="onCompositionStart";break e;case"compositionend":Fe="onCompositionEnd";break e;case"compositionupdate":Fe="onCompositionUpdate";break e}Fe=void 0}else El?uu(e,n)&&(Fe="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(Fe="onCompositionStart");Fe&&(ru&&n.locale!=="ko"&&(El||Fe!=="onCompositionStart"?Fe==="onCompositionEnd"&&El&&(Be=nu()):(bn=I,Io="value"in bn?bn.value:bn.textContent,El=!0)),_e=co(Z,Fe),0<_e.length&&(Fe=new su(Fe,e,null,n,I),le.push({event:Fe,listeners:_e}),Be?Fe.data=Be:(Be=pu(n),Be!==null&&(Fe.data=Be)))),(Be=pg?mg(e,n):fg(e,n))&&(Fe=co(Z,"onBeforeInput"),0<Fe.length&&(_e=new su("onBeforeInput","beforeinput",null,n,I),le.push({event:_e,listeners:Fe}),_e.data=Be)),ib(le,e,Z,n,I)}Fm(le,a)})}function Qi(e,a,n){return{instance:e,listener:a,currentTarget:n}}function co(e,a){for(var n=a+"Capture",l=[];e!==null;){var r=e,c=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||c===null||(r=ui(e,n),r!=null&&l.unshift(Qi(e,r,c)),r=ui(e,a),r!=null&&l.push(Qi(e,r,c))),e.tag===3)return l;e=e.return}return[]}function cb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Pm(e,a,n,l,r){for(var c=a._reactName,u=[];n!==null&&n!==l;){var b=n,k=b.alternate,Z=b.stateNode;if(b=b.tag,k!==null&&k===l)break;b!==5&&b!==26&&b!==27||Z===null||(k=Z,r?(Z=ui(n,c),Z!=null&&u.unshift(Qi(n,Z,k))):r||(Z=ui(n,c),Z!=null&&u.push(Qi(n,Z,k)))),n=n.return}u.length!==0&&e.push({event:a,listeners:u})}var db=/\r\n?/g,ub=/\u0000|\uFFFD/g;function Im(e){return(typeof e=="string"?e:""+e).replace(db,`
`).replace(ub,"")}function ef(e,a){return a=Im(a),Im(e)===a}function mt(e,a,n,l,r,c){switch(n){case"children":typeof l=="string"?a==="body"||a==="textarea"&&l===""||Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&a!=="body"&&Cl(e,""+l);break;case"className":ms(e,"class",l);break;case"tabIndex":ms(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ms(e,n,l);break;case"style":eu(e,l,c);break;case"data":if(a!=="object"){ms(e,"data",l);break}case"src":case"href":if(l===""&&(a!=="a"||n!=="href")){e.removeAttribute(n);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hs(""+l),e.setAttribute(n,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(n==="formAction"?(a!=="input"&&mt(e,a,"name",r.name,r,null),mt(e,a,"formEncType",r.formEncType,r,null),mt(e,a,"formMethod",r.formMethod,r,null),mt(e,a,"formTarget",r.formTarget,r,null)):(mt(e,a,"encType",r.encType,r,null),mt(e,a,"method",r.method,r,null),mt(e,a,"target",r.target,r,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(n);break}l=hs(""+l),e.setAttribute(n,l);break;case"onClick":l!=null&&(e.onclick=Wa);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}n=hs(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""+l):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":l===!0?e.setAttribute(n,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(n,l):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(n,l):e.removeAttribute(n);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(n):e.setAttribute(n,l);break;case"popover":Qe("beforetoggle",e),Qe("toggle",e),ps(e,"popover",l);break;case"xlinkActuate":Fa(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Fa(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Fa(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Fa(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Fa(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Fa(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Fa(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":ps(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=qx.get(n)||n,ps(e,n,l))}}function Ac(e,a,n,l,r,c){switch(n){case"style":eu(e,l,c);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(d(61));if(n=l.__html,n!=null){if(r.children!=null)throw Error(d(60));e.innerHTML=n}}break;case"children":typeof l=="string"?Cl(e,l):(typeof l=="number"||typeof l=="bigint")&&Cl(e,""+l);break;case"onScroll":l!=null&&Qe("scroll",e);break;case"onScrollEnd":l!=null&&Qe("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Wa);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Xd.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),a=n.slice(2,r?n.length-7:void 0),c=e[la]||null,c=c!=null?c[n]:null,typeof c=="function"&&e.removeEventListener(a,c,r),typeof l=="function")){typeof c!="function"&&c!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(a,l,r);break e}n in e?e[n]=l:l===!0?e.setAttribute(n,""):ps(e,n,l)}}}function Ft(e,a,n){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Qe("error",e),Qe("load",e);var l=!1,r=!1,c;for(c in n)if(n.hasOwnProperty(c)){var u=n[c];if(u!=null)switch(c){case"src":l=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:mt(e,a,c,u,n,null)}}r&&mt(e,a,"srcSet",n.srcSet,n,null),l&&mt(e,a,"src",n.src,n,null);return;case"input":Qe("invalid",e);var b=c=u=r=null,k=null,Z=null;for(l in n)if(n.hasOwnProperty(l)){var I=n[l];if(I!=null)switch(l){case"name":r=I;break;case"type":u=I;break;case"checked":k=I;break;case"defaultChecked":Z=I;break;case"value":c=I;break;case"defaultValue":b=I;break;case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(d(137,a));break;default:mt(e,a,l,I,n,null)}}Fd(e,c,b,k,Z,u,r,!1);return;case"select":Qe("invalid",e),l=u=c=null;for(r in n)if(n.hasOwnProperty(r)&&(b=n[r],b!=null))switch(r){case"value":c=b;break;case"defaultValue":u=b;break;case"multiple":l=b;default:mt(e,a,r,b,n,null)}a=c,n=u,e.multiple=!!l,a!=null?kl(e,!!l,a,!1):n!=null&&kl(e,!!l,n,!0);return;case"textarea":Qe("invalid",e),c=r=l=null;for(u in n)if(n.hasOwnProperty(u)&&(b=n[u],b!=null))switch(u){case"value":l=b;break;case"defaultValue":r=b;break;case"children":c=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(d(91));break;default:mt(e,a,u,b,n,null)}Pd(e,l,r,c);return;case"option":for(k in n)if(n.hasOwnProperty(k)&&(l=n[k],l!=null))switch(k){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:mt(e,a,k,l,n,null)}return;case"dialog":Qe("beforetoggle",e),Qe("toggle",e),Qe("cancel",e),Qe("close",e);break;case"iframe":case"object":Qe("load",e);break;case"video":case"audio":for(l=0;l<$i.length;l++)Qe($i[l],e);break;case"image":Qe("error",e),Qe("load",e);break;case"details":Qe("toggle",e);break;case"embed":case"source":case"link":Qe("error",e),Qe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in n)if(n.hasOwnProperty(Z)&&(l=n[Z],l!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,a));default:mt(e,a,Z,l,n,null)}return;default:if(Vo(a)){for(I in n)n.hasOwnProperty(I)&&(l=n[I],l!==void 0&&Ac(e,a,I,l,n,void 0));return}}for(b in n)n.hasOwnProperty(b)&&(l=n[b],l!=null&&mt(e,a,b,l,n,null))}function pb(e,a,n,l){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,c=null,u=null,b=null,k=null,Z=null,I=null;for(F in n){var le=n[F];if(n.hasOwnProperty(F)&&le!=null)switch(F){case"checked":break;case"value":break;case"defaultValue":k=le;default:l.hasOwnProperty(F)||mt(e,a,F,null,l,le)}}for(var V in l){var F=l[V];if(le=n[V],l.hasOwnProperty(V)&&(F!=null||le!=null))switch(V){case"type":c=F;break;case"name":r=F;break;case"checked":Z=F;break;case"defaultChecked":I=F;break;case"value":u=F;break;case"defaultValue":b=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(d(137,a));break;default:F!==le&&mt(e,a,V,F,l,le)}}Zo(e,u,b,k,Z,I,c,r);return;case"select":F=u=b=V=null;for(c in n)if(k=n[c],n.hasOwnProperty(c)&&k!=null)switch(c){case"value":break;case"multiple":F=k;default:l.hasOwnProperty(c)||mt(e,a,c,null,l,k)}for(r in l)if(c=l[r],k=n[r],l.hasOwnProperty(r)&&(c!=null||k!=null))switch(r){case"value":V=c;break;case"defaultValue":b=c;break;case"multiple":u=c;default:c!==k&&mt(e,a,r,c,l,k)}a=b,n=u,l=F,V!=null?kl(e,!!n,V,!1):!!l!=!!n&&(a!=null?kl(e,!!n,a,!0):kl(e,!!n,n?[]:"",!1));return;case"textarea":F=V=null;for(b in n)if(r=n[b],n.hasOwnProperty(b)&&r!=null&&!l.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:mt(e,a,b,null,l,r)}for(u in l)if(r=l[u],c=n[u],l.hasOwnProperty(u)&&(r!=null||c!=null))switch(u){case"value":V=r;break;case"defaultValue":F=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(d(91));break;default:r!==c&&mt(e,a,u,r,l,c)}Wd(e,V,F);return;case"option":for(var ve in n)if(V=n[ve],n.hasOwnProperty(ve)&&V!=null&&!l.hasOwnProperty(ve))switch(ve){case"selected":e.selected=!1;break;default:mt(e,a,ve,null,l,V)}for(k in l)if(V=l[k],F=n[k],l.hasOwnProperty(k)&&V!==F&&(V!=null||F!=null))switch(k){case"selected":e.selected=V&&typeof V!="function"&&typeof V!="symbol";break;default:mt(e,a,k,V,l,F)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Me in n)V=n[Me],n.hasOwnProperty(Me)&&V!=null&&!l.hasOwnProperty(Me)&&mt(e,a,Me,null,l,V);for(Z in l)if(V=l[Z],F=n[Z],l.hasOwnProperty(Z)&&V!==F&&(V!=null||F!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(d(137,a));break;default:mt(e,a,Z,V,l,F)}return;default:if(Vo(a)){for(var ft in n)V=n[ft],n.hasOwnProperty(ft)&&V!==void 0&&!l.hasOwnProperty(ft)&&Ac(e,a,ft,void 0,l,V);for(I in l)V=l[I],F=n[I],!l.hasOwnProperty(I)||V===F||V===void 0&&F===void 0||Ac(e,a,I,V,l,F);return}}for(var q in n)V=n[q],n.hasOwnProperty(q)&&V!=null&&!l.hasOwnProperty(q)&&mt(e,a,q,null,l,V);for(le in l)V=l[le],F=n[le],!l.hasOwnProperty(le)||V===F||V==null&&F==null||mt(e,a,le,V,l,F)}function tf(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,a=0,n=performance.getEntriesByType("resource"),l=0;l<n.length;l++){var r=n[l],c=r.transferSize,u=r.initiatorType,b=r.duration;if(c&&b&&tf(u)){for(u=0,b=r.responseEnd,l+=1;l<n.length;l++){var k=n[l],Z=k.startTime;if(Z>b)break;var I=k.transferSize,le=k.initiatorType;I&&tf(le)&&(k=k.responseEnd,u+=I*(k<b?1:(b-Z)/(k-Z)))}if(--l,a+=8*(c+u)/(r.duration/1e3),e++,10<e)break}}if(0<e)return a/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Uc=null,Rc=null;function uo(e){return e.nodeType===9?e:e.ownerDocument}function af(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nf(e,a){if(e===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&a==="foreignObject"?0:e}function Hc(e,a){return e==="textarea"||e==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var Lc=null;function fb(){var e=window.event;return e&&e.type==="popstate"?e===Lc?!1:(Lc=e,!0):(Lc=null,!1)}var lf=typeof setTimeout=="function"?setTimeout:void 0,hb=typeof clearTimeout=="function"?clearTimeout:void 0,sf=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof sf<"u"?function(e){return sf.resolve(null).then(e).catch(gb)}:lf;function gb(e){setTimeout(function(){throw e})}function Un(e){return e==="head"}function of(e,a){var n=a,l=0;do{var r=n.nextSibling;if(e.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(l===0){e.removeChild(r),li(a);return}l--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")l++;else if(n==="html")Xi(e.ownerDocument.documentElement);else if(n==="head"){n=e.ownerDocument.head,Xi(n);for(var c=n.firstChild;c;){var u=c.nextSibling,b=c.nodeName;c[ci]||b==="SCRIPT"||b==="STYLE"||b==="LINK"&&c.rel.toLowerCase()==="stylesheet"||n.removeChild(c),c=u}}else n==="body"&&Xi(e.ownerDocument.body);n=r}while(n);li(a)}function rf(e,a){var n=e;e=0;do{var l=n.nextSibling;if(n.nodeType===1?a?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(a?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),l&&l.nodeType===8)if(n=l.data,n==="/$"){if(e===0)break;e--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||e++;n=l}while(n)}function qc(e){var a=e.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var n=a;switch(a=a.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":qc(n),Qo(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}e.removeChild(n)}}function bb(e,a,n,l){for(;e.nodeType===1;){var r=n;if(e.nodeName.toLowerCase()!==a.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ci])switch(a){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(c=e.getAttribute("rel"),c==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(c!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(c=e.getAttribute("src"),(c!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&c&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(a==="input"&&e.type==="hidden"){var c=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===c)return e}else return e;if(e=Ua(e.nextSibling),e===null)break}return null}function yb(e,a,n){if(a==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ua(e.nextSibling),e===null))return null;return e}function cf(e,a){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Ua(e.nextSibling),e===null))return null;return e}function Bc(e){return e.data==="$?"||e.data==="$~"}function Gc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function vb(e,a){var n=e.ownerDocument;if(e.data==="$~")e._reactRetry=a;else if(e.data!=="$?"||n.readyState!=="loading")a();else{var l=function(){a(),n.removeEventListener("DOMContentLoaded",l)};n.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ua(e){for(;e!=null;e=e.nextSibling){var a=e.nodeType;if(a===1||a===3)break;if(a===8){if(a=e.data,a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"||a==="F!"||a==="F")break;if(a==="/$"||a==="/&")return null}}return e}var Yc=null;function df(e){e=e.nextSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"||n==="/&"){if(a===0)return Ua(e.nextSibling);a--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||a++}e=e.nextSibling}return null}function uf(e){e=e.previousSibling;for(var a=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(a===0)return e;a--}else n!=="/$"&&n!=="/&"||a++}e=e.previousSibling}return null}function pf(e,a,n){switch(a=uo(n),e){case"html":if(e=a.documentElement,!e)throw Error(d(452));return e;case"head":if(e=a.head,!e)throw Error(d(453));return e;case"body":if(e=a.body,!e)throw Error(d(454));return e;default:throw Error(d(451))}}function Xi(e){for(var a=e.attributes;a.length;)e.removeAttributeNode(a[0]);Qo(e)}var Ra=new Map,mf=new Set;function po(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var fn=J.d;J.d={f:jb,r:wb,D:Nb,C:_b,L:Sb,m:kb,X:zb,S:Cb,M:Tb};function jb(){var e=fn.f(),a=ao();return e||a}function wb(e){var a=Nl(e);a!==null&&a.tag===5&&a.type==="form"?Tp(a):fn.r(e)}var ti=typeof document>"u"?null:document;function ff(e,a,n){var l=ti;if(l&&typeof a=="string"&&a){var r=za(a);r='link[rel="'+e+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),mf.has(r)||(mf.add(r),e={rel:e,crossOrigin:n,href:a},l.querySelector(r)===null&&(a=l.createElement("link"),Ft(a,"link",e),Qt(a),l.head.appendChild(a)))}}function Nb(e){fn.D(e),ff("dns-prefetch",e,null)}function _b(e,a){fn.C(e,a),ff("preconnect",e,a)}function Sb(e,a,n){fn.L(e,a,n);var l=ti;if(l&&e&&a){var r='link[rel="preload"][as="'+za(a)+'"]';a==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+za(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+za(n.imageSizes)+'"]')):r+='[href="'+za(e)+'"]';var c=r;switch(a){case"style":c=ai(e);break;case"script":c=ni(e)}Ra.has(c)||(e=j({rel:"preload",href:a==="image"&&n&&n.imageSrcSet?void 0:e,as:a},n),Ra.set(c,e),l.querySelector(r)!==null||a==="style"&&l.querySelector(Zi(c))||a==="script"&&l.querySelector(Ki(c))||(a=l.createElement("link"),Ft(a,"link",e),Qt(a),l.head.appendChild(a)))}}function kb(e,a){fn.m(e,a);var n=ti;if(n&&e){var l=a&&typeof a.as=="string"?a.as:"script",r='link[rel="modulepreload"][as="'+za(l)+'"][href="'+za(e)+'"]',c=r;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=ni(e)}if(!Ra.has(c)&&(e=j({rel:"modulepreload",href:e},a),Ra.set(c,e),n.querySelector(r)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ki(c)))return}l=n.createElement("link"),Ft(l,"link",e),Qt(l),n.head.appendChild(l)}}}function Cb(e,a,n){fn.S(e,a,n);var l=ti;if(l&&e){var r=_l(l).hoistableStyles,c=ai(e);a=a||"default";var u=r.get(c);if(!u){var b={loading:0,preload:null};if(u=l.querySelector(Zi(c)))b.loading=5;else{e=j({rel:"stylesheet",href:e,"data-precedence":a},n),(n=Ra.get(c))&&$c(e,n);var k=u=l.createElement("link");Qt(k),Ft(k,"link",e),k._p=new Promise(function(Z,I){k.onload=Z,k.onerror=I}),k.addEventListener("load",function(){b.loading|=1}),k.addEventListener("error",function(){b.loading|=2}),b.loading|=4,mo(u,a,l)}u={type:"stylesheet",instance:u,count:1,state:b},r.set(c,u)}}}function zb(e,a){fn.X(e,a);var n=ti;if(n&&e){var l=_l(n).hoistableScripts,r=ni(e),c=l.get(r);c||(c=n.querySelector(Ki(r)),c||(e=j({src:e,async:!0},a),(a=Ra.get(r))&&Qc(e,a),c=n.createElement("script"),Qt(c),Ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function Tb(e,a){fn.M(e,a);var n=ti;if(n&&e){var l=_l(n).hoistableScripts,r=ni(e),c=l.get(r);c||(c=n.querySelector(Ki(r)),c||(e=j({src:e,async:!0,type:"module"},a),(a=Ra.get(r))&&Qc(e,a),c=n.createElement("script"),Qt(c),Ft(c,"link",e),n.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},l.set(r,c))}}function hf(e,a,n,l){var r=(r=ke.current)?po(r):null;if(!r)throw Error(d(446));switch(e){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(a=ai(n.href),n=_l(r).hoistableStyles,l=n.get(a),l||(l={type:"style",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){e=ai(n.href);var c=_l(r).hoistableStyles,u=c.get(e);if(u||(r=r.ownerDocument||r,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(e,u),(c=r.querySelector(Zi(e)))&&!c._p&&(u.instance=c,u.state.loading=5),Ra.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Ra.set(e,n),c||Eb(r,e,n,u.state))),a&&l===null)throw Error(d(528,""));return u}if(a&&l!==null)throw Error(d(529,""));return null;case"script":return a=n.async,n=n.src,typeof n=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=ni(n),n=_l(r).hoistableScripts,l=n.get(a),l||(l={type:"script",instance:null,count:0,state:null},n.set(a,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,e))}}function ai(e){return'href="'+za(e)+'"'}function Zi(e){return'link[rel="stylesheet"]['+e+"]"}function xf(e){return j({},e,{"data-precedence":e.precedence,precedence:null})}function Eb(e,a,n,l){e.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=e.createElement("link"),l.preload=a,a.addEventListener("load",function(){return l.loading|=1}),a.addEventListener("error",function(){return l.loading|=2}),Ft(a,"link",n),Qt(a),e.head.appendChild(a))}function ni(e){return'[src="'+za(e)+'"]'}function Ki(e){return"script[async]"+e}function gf(e,a,n){if(a.count++,a.instance===null)switch(a.type){case"style":var l=e.querySelector('style[data-href~="'+za(n.href)+'"]');if(l)return a.instance=l,Qt(l),l;var r=j({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qt(l),Ft(l,"style",r),mo(l,n.precedence,e),a.instance=l;case"stylesheet":r=ai(n.href);var c=e.querySelector(Zi(r));if(c)return a.state.loading|=4,a.instance=c,Qt(c),c;l=xf(n),(r=Ra.get(r))&&$c(l,r),c=(e.ownerDocument||e).createElement("link"),Qt(c);var u=c;return u._p=new Promise(function(b,k){u.onload=b,u.onerror=k}),Ft(c,"link",l),a.state.loading|=4,mo(c,n.precedence,e),a.instance=c;case"script":return c=ni(n.src),(r=e.querySelector(Ki(c)))?(a.instance=r,Qt(r),r):(l=n,(r=Ra.get(c))&&(l=j({},n),Qc(l,r)),e=e.ownerDocument||e,r=e.createElement("script"),Qt(r),Ft(r,"link",l),e.head.appendChild(r),a.instance=r);case"void":return null;default:throw Error(d(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(l=a.instance,a.state.loading|=4,mo(l,n.precedence,e));return a.instance}function mo(e,a,n){for(var l=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=l.length?l[l.length-1]:null,c=r,u=0;u<l.length;u++){var b=l[u];if(b.dataset.precedence===a)c=b;else if(c!==r)break}c?c.parentNode.insertBefore(e,c.nextSibling):(a=n.nodeType===9?n.head:n,a.insertBefore(e,a.firstChild))}function $c(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.title==null&&(e.title=a.title)}function Qc(e,a){e.crossOrigin==null&&(e.crossOrigin=a.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=a.referrerPolicy),e.integrity==null&&(e.integrity=a.integrity)}var fo=null;function bf(e,a,n){if(fo===null){var l=new Map,r=fo=new Map;r.set(n,l)}else r=fo,l=r.get(n),l||(l=new Map,r.set(n,l));if(l.has(e))return l;for(l.set(e,null),n=n.getElementsByTagName(e),r=0;r<n.length;r++){var c=n[r];if(!(c[ci]||c[jt]||e==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var u=c.getAttribute(a)||"";u=e+u;var b=l.get(u);b?b.push(c):l.set(u,[c])}}return l}function yf(e,a,n){e=e.ownerDocument||e,e.head.insertBefore(n,a==="title"?e.querySelector("head > title"):null)}function Mb(e,a,n){if(n===1||a.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return e=a.disabled,typeof a.precedence=="string"&&e==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function vf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Db(e,a,n,l){if(n.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var r=ai(l.href),c=a.querySelector(Zi(r));if(c){a=c._p,a!==null&&typeof a=="object"&&typeof a.then=="function"&&(e.count++,e=ho.bind(e),a.then(e,e)),n.state.loading|=4,n.instance=c,Qt(c);return}c=a.ownerDocument||a,l=xf(l),(r=Ra.get(r))&&$c(l,r),c=c.createElement("link"),Qt(c);var u=c;u._p=new Promise(function(b,k){u.onload=b,u.onerror=k}),Ft(c,"link",l),n.instance=c}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,a),(a=n.state.preload)&&(n.state.loading&3)===0&&(e.count++,n=ho.bind(e),a.addEventListener("load",n),a.addEventListener("error",n))}}var Xc=0;function Ob(e,a){return e.stylesheets&&e.count===0&&go(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var l=setTimeout(function(){if(e.stylesheets&&go(e,e.stylesheets),e.unsuspend){var c=e.unsuspend;e.unsuspend=null,c()}},6e4+a);0<e.imgBytes&&Xc===0&&(Xc=62500*mb());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&go(e,e.stylesheets),e.unsuspend)){var c=e.unsuspend;e.unsuspend=null,c()}},(e.imgBytes>Xc?50:800)+a);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(r)}}:null}function ho(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)go(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xo=null;function go(e,a){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xo=new Map,a.forEach(Ab,e),xo=null,ho.call(e))}function Ab(e,a){if(!(a.state.loading&4)){var n=xo.get(e);if(n)var l=n.get(null);else{n=new Map,xo.set(e,n);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<r.length;c++){var u=r[c];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(n.set(u.dataset.precedence,u),l=u)}l&&n.set(null,l)}r=a.instance,u=r.getAttribute("data-precedence"),c=n.get(u)||l,c===l&&n.set(null,r),n.set(u,r),this.count++,l=ho.bind(this),r.addEventListener("load",l),r.addEventListener("error",l),c?c.parentNode.insertBefore(r,c.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),a.state.loading|=4}}var Vi={$$typeof:O,Provider:null,Consumer:null,_currentValue:x,_currentValue2:x,_threadCount:0};function Ub(e,a,n,l,r,c,u,b,k){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=l,this.onUncaughtError=r,this.onCaughtError=c,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=k,this.incompleteTransitions=new Map}function jf(e,a,n,l,r,c,u,b,k,Z,I,le){return e=new Ub(e,a,n,u,k,Z,I,le,b),a=1,c===!0&&(a|=24),c=ga(3,null,null,a),e.current=c,c.stateNode=e,a=_r(),a.refCount++,e.pooledCache=a,a.refCount++,c.memoizedState={element:l,isDehydrated:n,cache:a},zr(c),e}function wf(e){return e?(e=Al,e):Al}function Nf(e,a,n,l,r,c){r=wf(r),l.context===null?l.context=r:l.pendingContext=r,l=_n(a),l.payload={element:n},c=c===void 0?null:c,c!==null&&(l.callback=c),n=Sn(e,l,a),n!==null&&(da(n,e,a),ki(n,e,a))}function _f(e,a){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<a?n:a}}function Zc(e,a){_f(e,a),(e=e.alternate)&&_f(e,a)}function Sf(e){if(e.tag===13||e.tag===31){var a=al(e,67108864);a!==null&&da(a,e,67108864),Zc(e,67108864)}}function kf(e){if(e.tag===13||e.tag===31){var a=wa();a=he(a);var n=al(e,a);n!==null&&da(n,e,a),Zc(e,a)}}var bo=!0;function Rb(e,a,n,l){var r=A.T;A.T=null;var c=J.p;try{J.p=2,Kc(e,a,n,l)}finally{J.p=c,A.T=r}}function Hb(e,a,n,l){var r=A.T;A.T=null;var c=J.p;try{J.p=8,Kc(e,a,n,l)}finally{J.p=c,A.T=r}}function Kc(e,a,n,l){if(bo){var r=Vc(l);if(r===null)Oc(e,a,l,yo,n),zf(e,l);else if(qb(r,e,a,n,l))l.stopPropagation();else if(zf(e,l),a&4&&-1<Lb.indexOf(e)){for(;r!==null;){var c=Nl(r);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var u=ta(c.pendingLanes);if(u!==0){var b=c;for(b.pendingLanes|=2,b.entangledLanes|=2;u;){var k=1<<31-ut(u);b.entanglements[1]|=k,u&=~k}Za(c),(at&6)===0&&(eo=be()+500,Yi(0))}}break;case 31:case 13:b=al(c,2),b!==null&&da(b,c,2),ao(),Zc(c,2)}if(c=Vc(l),c===null&&Oc(e,a,l,yo,n),c===r)break;r=c}r!==null&&l.stopPropagation()}else Oc(e,a,l,null,n)}}function Vc(e){return e=Fo(e),Jc(e)}var yo=null;function Jc(e){if(yo=null,e=wl(e),e!==null){var a=h(e);if(a===null)e=null;else{var n=a.tag;if(n===13){if(e=m(a),e!==null)return e;e=null}else if(n===31){if(e=_(a),e!==null)return e;e=null}else if(n===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;e=null}else a!==e&&(e=null)}}return yo=e,null}function Cf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(qe()){case ye:return 2;case dt:return 8;case G:case Ne:return 32;case je:return 268435456;default:return 32}default:return 32}}var Fc=!1,Rn=null,Hn=null,Ln=null,Ji=new Map,Fi=new Map,qn=[],Lb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function zf(e,a){switch(e){case"focusin":case"focusout":Rn=null;break;case"dragenter":case"dragleave":Hn=null;break;case"mouseover":case"mouseout":Ln=null;break;case"pointerover":case"pointerout":Ji.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(a.pointerId)}}function Wi(e,a,n,l,r,c){return e===null||e.nativeEvent!==c?(e={blockedOn:a,domEventName:n,eventSystemFlags:l,nativeEvent:c,targetContainers:[r]},a!==null&&(a=Nl(a),a!==null&&Sf(a)),e):(e.eventSystemFlags|=l,a=e.targetContainers,r!==null&&a.indexOf(r)===-1&&a.push(r),e)}function qb(e,a,n,l,r){switch(a){case"focusin":return Rn=Wi(Rn,e,a,n,l,r),!0;case"dragenter":return Hn=Wi(Hn,e,a,n,l,r),!0;case"mouseover":return Ln=Wi(Ln,e,a,n,l,r),!0;case"pointerover":var c=r.pointerId;return Ji.set(c,Wi(Ji.get(c)||null,e,a,n,l,r)),!0;case"gotpointercapture":return c=r.pointerId,Fi.set(c,Wi(Fi.get(c)||null,e,a,n,l,r)),!0}return!1}function Tf(e){var a=wl(e.target);if(a!==null){var n=h(a);if(n!==null){if(a=n.tag,a===13){if(a=m(n),a!==null){e.blockedOn=a,At(e.priority,function(){kf(n)});return}}else if(a===31){if(a=_(n),a!==null){e.blockedOn=a,At(e.priority,function(){kf(n)});return}}else if(a===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function vo(e){if(e.blockedOn!==null)return!1;for(var a=e.targetContainers;0<a.length;){var n=Vc(e.nativeEvent);if(n===null){n=e.nativeEvent;var l=new n.constructor(n.type,n);Jo=l,n.target.dispatchEvent(l),Jo=null}else return a=Nl(n),a!==null&&Sf(a),e.blockedOn=n,!1;a.shift()}return!0}function Ef(e,a,n){vo(e)&&n.delete(a)}function Bb(){Fc=!1,Rn!==null&&vo(Rn)&&(Rn=null),Hn!==null&&vo(Hn)&&(Hn=null),Ln!==null&&vo(Ln)&&(Ln=null),Ji.forEach(Ef),Fi.forEach(Ef)}function jo(e,a){e.blockedOn===a&&(e.blockedOn=null,Fc||(Fc=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,Bb)))}var wo=null;function Mf(e){wo!==e&&(wo=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){wo===e&&(wo=null);for(var a=0;a<e.length;a+=3){var n=e[a],l=e[a+1],r=e[a+2];if(typeof l!="function"){if(Jc(l||n)===null)continue;break}var c=Nl(n);c!==null&&(e.splice(a,3),a-=3,Vr(c,{pending:!0,data:r,method:n.method,action:l},l,r))}}))}function li(e){function a(k){return jo(k,e)}Rn!==null&&jo(Rn,e),Hn!==null&&jo(Hn,e),Ln!==null&&jo(Ln,e),Ji.forEach(a),Fi.forEach(a);for(var n=0;n<qn.length;n++){var l=qn[n];l.blockedOn===e&&(l.blockedOn=null)}for(;0<qn.length&&(n=qn[0],n.blockedOn===null);)Tf(n),n.blockedOn===null&&qn.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(l=0;l<n.length;l+=3){var r=n[l],c=n[l+1],u=r[la]||null;if(typeof c=="function")u||Mf(n);else if(u){var b=null;if(c&&c.hasAttribute("formAction")){if(r=c,u=c[la]||null)b=u.formAction;else if(Jc(r)!==null)continue}else b=u.action;typeof b=="function"?n[l+1]=b:(n.splice(l,3),l-=3),Mf(n)}}}function Df(){function e(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(u){return r=u})},focusReset:"manual",scroll:"manual"})}function a(){r!==null&&(r(),r=null),l||setTimeout(n,20)}function n(){if(!l&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",a),navigation.addEventListener("navigateerror",a),setTimeout(n,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",a),navigation.removeEventListener("navigateerror",a),r!==null&&(r(),r=null)}}}function Wc(e){this._internalRoot=e}No.prototype.render=Wc.prototype.render=function(e){var a=this._internalRoot;if(a===null)throw Error(d(409));var n=a.current,l=wa();Nf(n,l,e,a,null,null)},No.prototype.unmount=Wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var a=e.containerInfo;Nf(e.current,2,null,e,null,null),ao(),a[jl]=null}};function No(e){this._internalRoot=e}No.prototype.unstable_scheduleHydration=function(e){if(e){var a=Ae();e={blockedOn:null,target:e,priority:a};for(var n=0;n<qn.length&&a!==0&&a<qn[n].priority;n++);qn.splice(n,0,e),n===0&&Tf(e)}};var Of=i.version;if(Of!=="19.2.6")throw Error(d(527,Of,"19.2.6"));J.findDOMNode=function(e){var a=e._reactInternals;if(a===void 0)throw typeof e.render=="function"?Error(d(188)):(e=Object.keys(e).join(","),Error(d(268,e)));return e=g(a),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.2.6",rendererPackageName:"react-dom",currentDispatcherRef:A,reconcilerVersion:"19.2.6"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _o=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_o.isDisabled&&_o.supportsFiber)try{Ve=_o.inject(Gb),Ye=_o}catch{}}return Ii.createRoot=function(e,a){if(!p(e))throw Error(d(299));var n=!1,l="",r=qp,c=Bp,u=Gp;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(l=a.identifierPrefix),a.onUncaughtError!==void 0&&(r=a.onUncaughtError),a.onCaughtError!==void 0&&(c=a.onCaughtError),a.onRecoverableError!==void 0&&(u=a.onRecoverableError)),a=jf(e,1,!1,null,null,n,l,null,r,c,u,Df),e[jl]=a.current,Dc(e),new Wc(a)},Ii.hydrateRoot=function(e,a,n){if(!p(e))throw Error(d(299));var l=!1,r="",c=qp,u=Bp,b=Gp,k=null;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(u=n.onCaughtError),n.onRecoverableError!==void 0&&(b=n.onRecoverableError),n.formState!==void 0&&(k=n.formState)),a=jf(e,1,!0,a,n??null,l,r,k,c,u,b,Df),a.context=wf(null),n=a.current,l=wa(),l=he(l),r=_n(l),r.callback=null,Sn(n,r,l),n=l,a.current.lanes=n,Ie(a,n),Za(a),e[jl]=a.current,Dc(e),new No(a)},Ii.version="19.2.6",Ii}var $f;function ey(){if($f)return ed.exports;$f=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(i){console.error(i)}}return s(),ed.exports=Ib(),ed.exports}var ty=ey();Vh();/**
 * @remix-run/router v1.23.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function is(){return is=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},is.apply(this,arguments)}var Xn;(function(s){s.Pop="POP",s.Push="PUSH",s.Replace="REPLACE"})(Xn||(Xn={}));const Qf="popstate";function ay(s){s===void 0&&(s={});function i(p,h){let{pathname:m="/",search:_="",hash:v=""}=bl(p.location.hash.substr(1));return!m.startsWith("/")&&!m.startsWith(".")&&(m="/"+m),jd("",{pathname:m,search:_,hash:v},h.state&&h.state.usr||null,h.state&&h.state.key||"default")}function o(p,h){let m=p.document.querySelector("base"),_="";if(m&&m.getAttribute("href")){let v=p.location.href,g=v.indexOf("#");_=g===-1?v:v.slice(0,g)}return _+"#"+(typeof h=="string"?h:Ro(h))}function d(p,h){Bo(p.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(h)+")")}return ly(i,o,d,s)}function Mt(s,i){if(s===!1||s===null||typeof s>"u")throw new Error(i)}function Bo(s,i){if(!s){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function ny(){return Math.random().toString(36).substr(2,8)}function Xf(s,i){return{usr:s.state,key:s.key,idx:i}}function jd(s,i,o,d){return o===void 0&&(o=null),is({pathname:typeof s=="string"?s:s.pathname,search:"",hash:""},typeof i=="string"?bl(i):i,{state:o,key:i&&i.key||d||ny()})}function Ro(s){let{pathname:i="/",search:o="",hash:d=""}=s;return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),d&&d!=="#"&&(i+=d.charAt(0)==="#"?d:"#"+d),i}function bl(s){let i={};if(s){let o=s.indexOf("#");o>=0&&(i.hash=s.substr(o),s=s.substr(0,o));let d=s.indexOf("?");d>=0&&(i.search=s.substr(d),s=s.substr(0,d)),s&&(i.pathname=s)}return i}function ly(s,i,o,d){d===void 0&&(d={});let{window:p=document.defaultView,v5Compat:h=!1}=d,m=p.history,_=Xn.Pop,v=null,g=y();g==null&&(g=0,m.replaceState(is({},m.state,{idx:g}),""));function y(){return(m.state||{idx:null}).idx}function j(){_=Xn.Pop;let C=y(),B=C==null?null:C-g;g=C,v&&v({action:_,location:K.location,delta:B})}function z(C,B){_=Xn.Push;let U=jd(K.location,C,B);o&&o(U,C),g=y()+1;let O=Xf(U,g),ee=K.createHref(U);try{m.pushState(O,"",ee)}catch(ie){if(ie instanceof DOMException&&ie.name==="DataCloneError")throw ie;p.location.assign(ee)}h&&v&&v({action:_,location:K.location,delta:1})}function Y(C,B){_=Xn.Replace;let U=jd(K.location,C,B);o&&o(U,C),g=y();let O=Xf(U,g),ee=K.createHref(U);m.replaceState(O,"",ee),h&&v&&v({action:_,location:K.location,delta:0})}function P(C){let B=p.location.origin!=="null"?p.location.origin:p.location.href,U=typeof C=="string"?C:Ro(C);return U=U.replace(/ $/,"%20"),Mt(B,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,B)}let K={get action(){return _},get location(){return s(p,m)},listen(C){if(v)throw new Error("A history only accepts one active listener");return p.addEventListener(Qf,j),v=C,()=>{p.removeEventListener(Qf,j),v=null}},createHref(C){return i(p,C)},createURL:P,encodeLocation(C){let B=P(C);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:z,replace:Y,go(C){return m.go(C)}};return K}var Zf;(function(s){s.data="data",s.deferred="deferred",s.redirect="redirect",s.error="error"})(Zf||(Zf={}));function iy(s,i,o){return o===void 0&&(o="/"),sy(s,i,o)}function sy(s,i,o,d){let p=typeof i=="string"?bl(i):i,h=Ad(p.pathname||"/",o);if(h==null)return null;let m=Jh(s);oy(m);let _=null;for(let v=0;_==null&&v<m.length;++v){let g=yy(h);_=xy(m[v],g)}return _}function Jh(s,i,o,d){i===void 0&&(i=[]),o===void 0&&(o=[]),d===void 0&&(d="");let p=(h,m,_)=>{let v={relativePath:_===void 0?h.path||"":_,caseSensitive:h.caseSensitive===!0,childrenIndex:m,route:h};v.relativePath.startsWith("/")&&(Mt(v.relativePath.startsWith(d),'Absolute route path "'+v.relativePath+'" nested under path '+('"'+d+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),v.relativePath=v.relativePath.slice(d.length));let g=Zn([d,v.relativePath]),y=o.concat(v);h.children&&h.children.length>0&&(Mt(h.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+g+'".')),Jh(h.children,i,y,g)),!(h.path==null&&!h.index)&&i.push({path:g,score:fy(g,h.index),routesMeta:y})};return s.forEach((h,m)=>{var _;if(h.path===""||!((_=h.path)!=null&&_.includes("?")))p(h,m);else for(let v of Fh(h.path))p(h,m,v)}),i}function Fh(s){let i=s.split("/");if(i.length===0)return[];let[o,...d]=i,p=o.endsWith("?"),h=o.replace(/\?$/,"");if(d.length===0)return p?[h,""]:[h];let m=Fh(d.join("/")),_=[];return _.push(...m.map(v=>v===""?h:[h,v].join("/"))),p&&_.push(...m),_.map(v=>s.startsWith("/")&&v===""?"/":v)}function oy(s){s.sort((i,o)=>i.score!==o.score?o.score-i.score:hy(i.routesMeta.map(d=>d.childrenIndex),o.routesMeta.map(d=>d.childrenIndex)))}const ry=/^:[\w-]+$/,cy=3,dy=2,uy=1,py=10,my=-2,Kf=s=>s==="*";function fy(s,i){let o=s.split("/"),d=o.length;return o.some(Kf)&&(d+=my),i&&(d+=dy),o.filter(p=>!Kf(p)).reduce((p,h)=>p+(ry.test(h)?cy:h===""?uy:py),d)}function hy(s,i){return s.length===i.length&&s.slice(0,-1).every((d,p)=>d===i[p])?s[s.length-1]-i[i.length-1]:0}function xy(s,i,o){let{routesMeta:d}=s,p={},h="/",m=[];for(let _=0;_<d.length;++_){let v=d[_],g=_===d.length-1,y=h==="/"?i:i.slice(h.length)||"/",j=gy({path:v.relativePath,caseSensitive:v.caseSensitive,end:g},y),z=v.route;if(!j)return null;Object.assign(p,j.params),m.push({params:p,pathname:Zn([h,j.pathname]),pathnameBase:_y(Zn([h,j.pathnameBase])),route:z}),j.pathnameBase!=="/"&&(h=Zn([h,j.pathnameBase]))}return m}function gy(s,i){typeof s=="string"&&(s={path:s,caseSensitive:!1,end:!0});let[o,d]=by(s.path,s.caseSensitive,s.end),p=i.match(o);if(!p)return null;let h=p[0],m=h.replace(/(.)\/+$/,"$1"),_=p.slice(1);return{params:d.reduce((g,y,j)=>{let{paramName:z,isOptional:Y}=y;if(z==="*"){let K=_[j]||"";m=h.slice(0,h.length-K.length).replace(/(.)\/+$/,"$1")}const P=_[j];return Y&&!P?g[z]=void 0:g[z]=(P||"").replace(/%2F/g,"/"),g},{}),pathname:h,pathnameBase:m,pattern:s}}function by(s,i,o){i===void 0&&(i=!1),o===void 0&&(o=!0),Bo(s==="*"||!s.endsWith("*")||s.endsWith("/*"),'Route path "'+s+'" will be treated as if it were '+('"'+s.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+s.replace(/\*$/,"/*")+'".'));let d=[],p="^"+s.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(m,_,v)=>(d.push({paramName:_,isOptional:v!=null}),v?"/?([^\\/]+)?":"/([^\\/]+)"));return s.endsWith("*")?(d.push({paramName:"*"}),p+=s==="*"||s==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):o?p+="\\/*$":s!==""&&s!=="/"&&(p+="(?:(?=\\/|$))"),[new RegExp(p,i?void 0:"i"),d]}function yy(s){try{return s.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return Bo(!1,'The URL path "'+s+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+i+").")),s}}function Ad(s,i){if(i==="/")return s;if(!s.toLowerCase().startsWith(i.toLowerCase()))return null;let o=i.endsWith("/")?i.length-1:i.length,d=s.charAt(o);return d&&d!=="/"?null:s.slice(o)||"/"}const vy=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jy=s=>vy.test(s);function wy(s,i){i===void 0&&(i="/");let{pathname:o,search:d="",hash:p=""}=typeof s=="string"?bl(s):s,h;if(o)if(jy(o))h=o;else{if(o.includes("//")){let m=o;o=o.replace(/\/\/+/g,"/"),Bo(!1,"Pathnames cannot have embedded double slashes - normalizing "+(m+" -> "+o))}o.startsWith("/")?h=Vf(o.substring(1),"/"):h=Vf(o,i)}else h=i;return{pathname:h,search:Sy(d),hash:ky(p)}}function Vf(s,i){let o=i.replace(/\/+$/,"").split("/");return s.split("/").forEach(p=>{p===".."?o.length>1&&o.pop():p!=="."&&o.push(p)}),o.length>1?o.join("/"):"/"}function ld(s,i,o,d){return"Cannot include a '"+s+"' character in a manually specified "+("`to."+i+"` field ["+JSON.stringify(d)+"].  Please separate it out to the ")+("`to."+o+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Ny(s){return s.filter((i,o)=>o===0||i.route.path&&i.route.path.length>0)}function Ud(s,i){let o=Ny(s);return i?o.map((d,p)=>p===o.length-1?d.pathname:d.pathnameBase):o.map(d=>d.pathnameBase)}function Rd(s,i,o,d){d===void 0&&(d=!1);let p;typeof s=="string"?p=bl(s):(p=is({},s),Mt(!p.pathname||!p.pathname.includes("?"),ld("?","pathname","search",p)),Mt(!p.pathname||!p.pathname.includes("#"),ld("#","pathname","hash",p)),Mt(!p.search||!p.search.includes("#"),ld("#","search","hash",p)));let h=s===""||p.pathname==="",m=h?"/":p.pathname,_;if(m==null)_=o;else{let j=i.length-1;if(!d&&m.startsWith("..")){let z=m.split("/");for(;z[0]==="..";)z.shift(),j-=1;p.pathname=z.join("/")}_=j>=0?i[j]:"/"}let v=wy(p,_),g=m&&m!=="/"&&m.endsWith("/"),y=(h||m===".")&&o.endsWith("/");return!v.pathname.endsWith("/")&&(g||y)&&(v.pathname+="/"),v}const Zn=s=>s.join("/").replace(/\/\/+/g,"/"),_y=s=>s.replace(/\/+$/,"").replace(/^\/*/,"/"),Sy=s=>!s||s==="?"?"":s.startsWith("?")?s:"?"+s,ky=s=>!s||s==="#"?"":s.startsWith("#")?s:"#"+s;function Cy(s){return s!=null&&typeof s.status=="number"&&typeof s.statusText=="string"&&typeof s.internal=="boolean"&&"data"in s}const Wh=["post","put","patch","delete"];new Set(Wh);const zy=["get",...Wh];new Set(zy);/**
 * React Router v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ss(){return ss=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},ss.apply(this,arguments)}const Hd=f.createContext(null),Ty=f.createContext(null),Vn=f.createContext(null),Go=f.createContext(null),Jn=f.createContext({outlet:null,matches:[],isDataRoute:!1}),Ph=f.createContext(null);function Ey(s,i){let{relative:o}=i===void 0?{}:i;ri()||Mt(!1);let{basename:d,navigator:p}=f.useContext(Vn),{hash:h,pathname:m,search:_}=ex(s,{relative:o}),v=m;return d!=="/"&&(v=m==="/"?d:Zn([d,m])),p.createHref({pathname:v,search:_,hash:h})}function ri(){return f.useContext(Go)!=null}function Ja(){return ri()||Mt(!1),f.useContext(Go).location}function Ih(s){f.useContext(Vn).static||f.useLayoutEffect(s)}function Ld(){let{isDataRoute:s}=f.useContext(Jn);return s?$y():My()}function My(){ri()||Mt(!1);let s=f.useContext(Hd),{basename:i,future:o,navigator:d}=f.useContext(Vn),{matches:p}=f.useContext(Jn),{pathname:h}=Ja(),m=JSON.stringify(Ud(p,o.v7_relativeSplatPath)),_=f.useRef(!1);return Ih(()=>{_.current=!0}),f.useCallback(function(g,y){if(y===void 0&&(y={}),!_.current)return;if(typeof g=="number"){d.go(g);return}let j=Rd(g,JSON.parse(m),h,y.relative==="path");s==null&&i!=="/"&&(j.pathname=j.pathname==="/"?i:Zn([i,j.pathname])),(y.replace?d.replace:d.push)(j,y.state,y)},[i,d,m,h,s])}function ex(s,i){let{relative:o}=i===void 0?{}:i,{future:d}=f.useContext(Vn),{matches:p}=f.useContext(Jn),{pathname:h}=Ja(),m=JSON.stringify(Ud(p,d.v7_relativeSplatPath));return f.useMemo(()=>Rd(s,JSON.parse(m),h,o==="path"),[s,m,h,o])}function Dy(s,i){return Oy(s,i)}function Oy(s,i,o,d){ri()||Mt(!1);let{navigator:p}=f.useContext(Vn),{matches:h}=f.useContext(Jn),m=h[h.length-1],_=m?m.params:{};m&&m.pathname;let v=m?m.pathnameBase:"/";m&&m.route;let g=Ja(),y;if(i){var j;let C=typeof i=="string"?bl(i):i;v==="/"||(j=C.pathname)!=null&&j.startsWith(v)||Mt(!1),y=C}else y=g;let z=y.pathname||"/",Y=z;if(v!=="/"){let C=v.replace(/^\//,"").split("/");Y="/"+z.replace(/^\//,"").split("/").slice(C.length).join("/")}let P=iy(s,{pathname:Y}),K=Ly(P&&P.map(C=>Object.assign({},C,{params:Object.assign({},_,C.params),pathname:Zn([v,p.encodeLocation?p.encodeLocation(C.pathname).pathname:C.pathname]),pathnameBase:C.pathnameBase==="/"?v:Zn([v,p.encodeLocation?p.encodeLocation(C.pathnameBase).pathname:C.pathnameBase])})),h,o,d);return i&&K?f.createElement(Go.Provider,{value:{location:ss({pathname:"/",search:"",hash:"",state:null,key:"default"},y),navigationType:Xn.Pop}},K):K}function Ay(){let s=Yy(),i=Cy(s)?s.status+" "+s.statusText:s instanceof Error?s.message:JSON.stringify(s),o=s instanceof Error?s.stack:null,p={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},i),o?f.createElement("pre",{style:p},o):null,null)}const Uy=f.createElement(Ay,null);class Ry extends f.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){console.error("React Router caught the following error during render",i,o)}render(){return this.state.error!==void 0?f.createElement(Jn.Provider,{value:this.props.routeContext},f.createElement(Ph.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Hy(s){let{routeContext:i,match:o,children:d}=s,p=f.useContext(Hd);return p&&p.static&&p.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(p.staticContext._deepestRenderedBoundaryId=o.route.id),f.createElement(Jn.Provider,{value:i},d)}function Ly(s,i,o,d){var p;if(i===void 0&&(i=[]),o===void 0&&(o=null),d===void 0&&(d=null),s==null){var h;if(!o)return null;if(o.errors)s=o.matches;else if((h=d)!=null&&h.v7_partialHydration&&i.length===0&&!o.initialized&&o.matches.length>0)s=o.matches;else return null}let m=s,_=(p=o)==null?void 0:p.errors;if(_!=null){let y=m.findIndex(j=>j.route.id&&(_==null?void 0:_[j.route.id])!==void 0);y>=0||Mt(!1),m=m.slice(0,Math.min(m.length,y+1))}let v=!1,g=-1;if(o&&d&&d.v7_partialHydration)for(let y=0;y<m.length;y++){let j=m[y];if((j.route.HydrateFallback||j.route.hydrateFallbackElement)&&(g=y),j.route.id){let{loaderData:z,errors:Y}=o,P=j.route.loader&&z[j.route.id]===void 0&&(!Y||Y[j.route.id]===void 0);if(j.route.lazy||P){v=!0,g>=0?m=m.slice(0,g+1):m=[m[0]];break}}}return m.reduceRight((y,j,z)=>{let Y,P=!1,K=null,C=null;o&&(Y=_&&j.route.id?_[j.route.id]:void 0,K=j.route.errorElement||Uy,v&&(g<0&&z===0?(Qy("route-fallback"),P=!0,C=null):g===z&&(P=!0,C=j.route.hydrateFallbackElement||null)));let B=i.concat(m.slice(0,z+1)),U=()=>{let O;return Y?O=K:P?O=C:j.route.Component?O=f.createElement(j.route.Component,null):j.route.element?O=j.route.element:O=y,f.createElement(Hy,{match:j,routeContext:{outlet:y,matches:B,isDataRoute:o!=null},children:O})};return o&&(j.route.ErrorBoundary||j.route.errorElement||z===0)?f.createElement(Ry,{location:o.location,revalidation:o.revalidation,component:K,error:Y,children:U(),routeContext:{outlet:null,matches:B,isDataRoute:!0}}):U()},null)}var tx=(function(s){return s.UseBlocker="useBlocker",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s})(tx||{}),ax=(function(s){return s.UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s})(ax||{});function qy(s){let i=f.useContext(Hd);return i||Mt(!1),i}function By(s){let i=f.useContext(Ty);return i||Mt(!1),i}function Gy(s){let i=f.useContext(Jn);return i||Mt(!1),i}function nx(s){let i=Gy(),o=i.matches[i.matches.length-1];return o.route.id||Mt(!1),o.route.id}function Yy(){var s;let i=f.useContext(Ph),o=By(),d=nx();return i!==void 0?i:(s=o.errors)==null?void 0:s[d]}function $y(){let{router:s}=qy(tx.UseNavigateStable),i=nx(ax.UseNavigateStable),o=f.useRef(!1);return Ih(()=>{o.current=!0}),f.useCallback(function(p,h){h===void 0&&(h={}),o.current&&(typeof p=="number"?s.navigate(p):s.navigate(p,ss({fromRouteId:i},h)))},[s,i])}const Jf={};function Qy(s,i,o){Jf[s]||(Jf[s]=!0)}function Xy(s,i){s==null||s.v7_startTransition,s==null||s.v7_relativeSplatPath}function Ff(s){let{to:i,replace:o,state:d,relative:p}=s;ri()||Mt(!1);let{future:h,static:m}=f.useContext(Vn),{matches:_}=f.useContext(Jn),{pathname:v}=Ja(),g=Ld(),y=Rd(i,Ud(_,h.v7_relativeSplatPath),v,p==="path"),j=JSON.stringify(y);return f.useEffect(()=>g(JSON.parse(j),{replace:o,state:d,relative:p}),[g,j,p,o,d]),null}function wt(s){Mt(!1)}function Zy(s){let{basename:i="/",children:o=null,location:d,navigationType:p=Xn.Pop,navigator:h,static:m=!1,future:_}=s;ri()&&Mt(!1);let v=i.replace(/^\/*/,"/"),g=f.useMemo(()=>({basename:v,navigator:h,static:m,future:ss({v7_relativeSplatPath:!1},_)}),[v,_,h,m]);typeof d=="string"&&(d=bl(d));let{pathname:y="/",search:j="",hash:z="",state:Y=null,key:P="default"}=d,K=f.useMemo(()=>{let C=Ad(y,v);return C==null?null:{location:{pathname:C,search:j,hash:z,state:Y,key:P},navigationType:p}},[v,y,j,z,Y,P,p]);return K==null?null:f.createElement(Vn.Provider,{value:g},f.createElement(Go.Provider,{children:o,value:K}))}function Ky(s){let{children:i,location:o}=s;return Dy(wd(i),o)}new Promise(()=>{});function wd(s,i){i===void 0&&(i=[]);let o=[];return f.Children.forEach(s,(d,p)=>{if(!f.isValidElement(d))return;let h=[...i,p];if(d.type===f.Fragment){o.push.apply(o,wd(d.props.children,h));return}d.type!==wt&&Mt(!1),!d.props.index||!d.props.children||Mt(!1);let m={id:d.props.id||h.join("-"),caseSensitive:d.props.caseSensitive,element:d.props.element,Component:d.props.Component,index:d.props.index,path:d.props.path,loader:d.props.loader,action:d.props.action,errorElement:d.props.errorElement,ErrorBoundary:d.props.ErrorBoundary,hasErrorBoundary:d.props.ErrorBoundary!=null||d.props.errorElement!=null,shouldRevalidate:d.props.shouldRevalidate,handle:d.props.handle,lazy:d.props.lazy};d.props.children&&(m.children=wd(d.props.children,h)),o.push(m)}),o}/**
 * React Router DOM v6.30.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Nd(){return Nd=Object.assign?Object.assign.bind():function(s){for(var i=1;i<arguments.length;i++){var o=arguments[i];for(var d in o)Object.prototype.hasOwnProperty.call(o,d)&&(s[d]=o[d])}return s},Nd.apply(this,arguments)}function Vy(s,i){if(s==null)return{};var o={},d=Object.keys(s),p,h;for(h=0;h<d.length;h++)p=d[h],!(i.indexOf(p)>=0)&&(o[p]=s[p]);return o}function Jy(s){return!!(s.metaKey||s.altKey||s.ctrlKey||s.shiftKey)}function Fy(s,i){return s.button===0&&(!i||i==="_self")&&!Jy(s)}const Wy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Py="6";try{window.__reactRouterVersion=Py}catch{}const Iy="startTransition",Wf=Jb[Iy];function ev(s){let{basename:i,children:o,future:d,window:p}=s,h=f.useRef();h.current==null&&(h.current=ay({window:p,v5Compat:!0}));let m=h.current,[_,v]=f.useState({action:m.action,location:m.location}),{v7_startTransition:g}=d||{},y=f.useCallback(j=>{g&&Wf?Wf(()=>v(j)):v(j)},[v,g]);return f.useLayoutEffect(()=>m.listen(y),[m,y]),f.useEffect(()=>Xy(d),[d]),f.createElement(Zy,{basename:i,children:o,location:_.location,navigationType:_.action,navigator:m,future:d})}const tv=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",av=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,nv=f.forwardRef(function(i,o){let{onClick:d,relative:p,reloadDocument:h,replace:m,state:_,target:v,to:g,preventScrollReset:y,viewTransition:j}=i,z=Vy(i,Wy),{basename:Y}=f.useContext(Vn),P,K=!1;if(typeof g=="string"&&av.test(g)&&(P=g,tv))try{let O=new URL(window.location.href),ee=g.startsWith("//")?new URL(O.protocol+g):new URL(g),ie=Ad(ee.pathname,Y);ee.origin===O.origin&&ie!=null?g=ie+ee.search+ee.hash:K=!0}catch{}let C=Ey(g,{relative:p}),B=lv(g,{replace:m,state:_,target:v,preventScrollReset:y,relative:p,viewTransition:j});function U(O){d&&d(O),O.defaultPrevented||B(O)}return f.createElement("a",Nd({},z,{href:P||C,onClick:K||h?d:U,ref:o,target:v}))});var Pf;(function(s){s.UseScrollRestoration="useScrollRestoration",s.UseSubmit="useSubmit",s.UseSubmitFetcher="useSubmitFetcher",s.UseFetcher="useFetcher",s.useViewTransitionState="useViewTransitionState"})(Pf||(Pf={}));var If;(function(s){s.UseFetcher="useFetcher",s.UseFetchers="useFetchers",s.UseScrollRestoration="useScrollRestoration"})(If||(If={}));function lv(s,i){let{target:o,replace:d,state:p,preventScrollReset:h,relative:m,viewTransition:_}=i===void 0?{}:i,v=Ld(),g=Ja(),y=ex(s,{relative:m});return f.useCallback(j=>{if(Fy(j,o)){j.preventDefault();let z=d!==void 0?d:Ro(g)===Ro(y);v(s,{replace:z,state:p,preventScrollReset:h,relative:m,viewTransition:_})}},[g,v,y,d,p,o,s,h,m,_])}function Dt(){const s=Ld();return f.useMemo(()=>({push:i=>s(i),replace:i=>s(i,{replace:!0}),back:()=>s(-1),prefetch:()=>{}}),[s])}function iv(){return Ja().pathname}function sv({href:s,...i}){return t.jsx(nv,{to:s,...i})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),lx=(...s)=>s.filter((i,o,d)=>!!i&&i.trim()!==""&&d.indexOf(i)===o).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=f.forwardRef(({color:s="currentColor",size:i=24,strokeWidth:o=2,absoluteStrokeWidth:d,className:p="",children:h,iconNode:m,..._},v)=>f.createElement("svg",{ref:v,...rv,width:i,height:i,stroke:s,strokeWidth:d?Number(o)*24/Number(i):o,className:lx("lucide",p),..._},[...m.map(([g,y])=>f.createElement(g,y)),...Array.isArray(h)?h:[h]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=(s,i)=>{const o=f.forwardRef(({className:d,...p},h)=>f.createElement(cv,{ref:h,iconNode:i,className:lx(`lucide-${ov(s)}`,d),...p}));return o.displayName=`${s}`,o};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=ge("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=ge("ArrowDown",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=ge("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=ge("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
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
 */const So=ge("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=ge("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=ge("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=ge("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=ge("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ix=ge("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=ge("ClipboardCopy",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=ge("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=ge("Columns3",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=ge("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
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
 */const nh=ge("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=ge("Filter",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
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
 */const lh=ge("GitMerge",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=ge("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=ge("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=ge("History",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
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
 */const Ho=ge("Key",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=ge("Layers",[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=ge("LifeBuoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=ge("ListChecks",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
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
 */const Sd=ge("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=ge("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sx=ge("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=ge("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=ge("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
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
 */const qt=ge("PenLine",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z",key:"1ykcvy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=ge("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=ge("Power",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=ge("QrCode",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
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
 */const ka=ge("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=ge("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ox=ge("Send",[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=ge("Server",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
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
 */const sh=ge("ShoppingBag",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=ge("ShoppingCart",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
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
 */const Gt=ge("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=ge("TriangleAlert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=ge("Unlink",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rx=ge("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=ge("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
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
 */const rh=ge("WifiOff",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=ge("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=ge("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=ge("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qv=ge("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),Xv="/api/v3";var Kh;const fe=typeof window<"u"&&((Kh=window.settings)==null?void 0:Kh.secure_path)||"ZicFree123",Uo="authorization";function Zv(s){if(typeof window>"u"||typeof document>"u")return null;const i=s+"=",o=document.cookie.split(";");for(let d=0;d<o.length;d++){let p=o[d];for(;p.charAt(0)===" ";)p=p.substring(1,p.length);if(p.indexOf(i)===0)try{const h=p.substring(i.length,p.length),m=decodeURIComponent(h),_=JSON.parse(m);return _&&typeof _=="object"&&"value"in _?_.value:m}catch{try{return decodeURIComponent(p.substring(i.length,p.length))}catch{return p.substring(i.length,p.length)}}}return null}function Kv(s,i,o=36500){if(typeof window>"u"||typeof document>"u")return;const p=JSON.stringify({site:"ZicNet",value:i}),h=window.location.protocol==="https:",m=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1",_=new Date;_.setTime(_.getTime()+o*24*60*60*1e3);const v=`expires=${_.toUTCString()}`,g=m?"":`domain=${window.location.hostname};`;let y=`${s}=${encodeURIComponent(p)}; ${v}; ${g} path=/`;h&&(y+="; secure"),y+="; SameSite=Lax",document.cookie=y;try{window.localStorage.setItem(`cookie_${s}`,p)}catch{}}function Vv(s){if(typeof window>"u"||typeof document>"u")return;const i=window.location.hostname,o=["",i,i.startsWith(".")?i:`.${i}`],d=["/","/dashboard","/user","/admin"];o.forEach(p=>{d.forEach(h=>{const m=p?` domain=${p};`:"";document.cookie=`${s}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;${m} path=${h};`})});try{window.localStorage.removeItem(`cookie_${s}`),window.localStorage.removeItem(`cookie_${s}_failure`)}catch{}}function cx(){if(typeof window>"u")return null;let s=window.localStorage.getItem(Uo);if(!s&&(s=window.localStorage.getItem("auth_data"),s))try{window.localStorage.setItem(Uo,s)}catch{}if(!s&&(s=Zv("auth_data"),s))try{window.localStorage.setItem(Uo,s),window.localStorage.setItem("auth_data",s)}catch{}return s}function Jv(s,i){const o=s.startsWith("/")?s:`/${s}`,d=new URL(`${Xv}${o}`,window.location.origin);return Object.entries(i??{}).forEach(([p,h])=>{h!==void 0&&d.searchParams.set(p,String(h))}),d.toString()}function Ot(){return!!cx()}function Fv(s){typeof window>"u"||(window.localStorage.setItem(Uo,s),window.localStorage.setItem("auth_data",s),Kv("auth_data",s,36500))}function dx(){if(typeof window>"u")return;["token","auth_data","authorization","cookie_auth_data","userInfo","is_admin","vuex","user","auth"].forEach(p=>{window.localStorage.removeItem(p)}),["token","auth_data","authorization","vuex","user","auth"].forEach(p=>{window.sessionStorage.removeItem(p)});const o=["/","/dashboard","/user","/admin"];["auth_data","XSRF-TOKEN","laravel_session","token"].forEach(p=>{o.forEach(h=>{document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=${h};`}),document.cookie=`${p}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`,Vv(p)})}async function pe(s,i={}){const o={},d=i.method??"GET";if(d!=="GET"&&(o["content-type"]="application/json"),i.auth!==!1){const v=cx();v&&(o.authorization=v)}const p=await fetch(Jv(s,i.params),{method:d,headers:o,body:d==="GET"?void 0:JSON.stringify(i.body??{}),cache:"no-store"}),m=(p.headers.get("content-type")||"").includes("application/json"),_=m?await p.json():await p.text();if(!p.ok){const v=typeof _=="object"&&_&&"message"in _?String(_.message):`Request failed with status ${p.status}`,g=/license_required|license key is invalid|license is not active|no longer active|renew your license|protected-feature license|license status|activation is not active|activation is bound to another|suspend|revoked|expired/i.test(v);throw(p.status===401||p.status===403&&!g)&&i.auth!==!1&&(dx(),window.location.hash="/login"),new Error(v)}if(!m&&typeof _=="string"&&(_.trim().startsWith("<!DOCTYPE html")||_.trim().startsWith("<html")||_.trim().startsWith("<xml")))throw new Error("API returned HTML/XML instead of JSON. (Please check if the backend is running and your VITE_API_PROXY_BASE is configured correctly)");return _}async function Wv(s,i){return pe("/passport/auth/login",{method:"POST",auth:!1,body:{email:s,password:i}})}async function Pv(){const s=`/${fe}/stat`,[i,o,d,p,h,m]=await Promise.all([pe(`${s}/getOverride`),pe(`${s}/getOrder`),pe(`${s}/getServerTodayRank`),pe(`${s}/getServerLastRank`),pe(`${s}/getUserTodayRank`),pe(`${s}/getUserLastRank`)]);return{override:i.data,order:o.data,serverToday:d.data,serverYesterday:p.data,userToday:h.data,userYesterday:m.data}}async function ux(){return(await pe(`/${fe}/config/fetch`)).data}async function px(s){return pe(`/${fe}/config/save`,{method:"POST",body:s})}async function Iv(){return(await pe(`/${fe}/config/getEmailTemplate`)).data}async function e1(){return(await pe(`/${fe}/plan/fetch`)).data.map(i=>({id:i.id,name:i.name}))}async function t1(){return pe(`/${fe}/config/testSendMail`,{method:"POST",body:{}})}async function a1(s){return pe(`/${fe}/config/setTelegramWebhook`,{method:"POST",body:{telegram_bot_token:s}})}async function n1(){return(await pe(`/${fe}/payment/fetch`)).data}async function l1(){return(await pe(`/${fe}/payment/getPaymentMethods`)).data}async function dh(s,i){return(await pe(`/${fe}/payment/getPaymentForm`,{method:"POST",body:{payment:s,id:i}})).data}async function i1(s){return pe(`/${fe}/payment/save`,{method:"POST",body:s})}async function s1(s){return pe(`/${fe}/payment/show`,{method:"POST",body:{id:s}})}async function o1(s){return pe(`/${fe}/payment/drop`,{method:"POST",body:{id:s}})}async function r1(s){return pe(`/${fe}/payment/sort`,{method:"POST",body:{ids:s}})}async function c1(){return(await pe(`/${fe}/theme/getThemes`)).data}async function d1(s){return(await pe(`/${fe}/theme/getThemeConfig`,{method:"POST",body:{name:s}})).data}async function u1(s,i){const o=window.btoa(unescape(encodeURIComponent(JSON.stringify(i))));return pe(`/${fe}/theme/saveThemeConfig`,{method:"POST",body:{name:s,config:o}})}async function ds(){return(await pe(`/${fe}/server/group/fetch`)).data}async function mx(s){return pe(`/${fe}/server/group/save`,{method:"POST",body:s})}async function p1(s){return pe(`/${fe}/server/group/drop`,{method:"POST",body:{id:s}})}const fx=[{value:"block",label:"Block"},{value:"block_ip",label:"Block IP"},{value:"block_port",label:"Block Port"},{value:"protocol",label:"Protocol"},{value:"dns",label:"DNS"},{value:"route",label:"Route"},{value:"route_ip",label:"Route IP"},{value:"default_out",label:"Default Outbound"}];async function hx(){return(await pe(`/${fe}/server/route/fetch`)).data}async function m1(s){return pe(`/${fe}/server/route/save`,{method:"POST",body:s})}async function f1(s){return pe(`/${fe}/server/route/drop`,{method:"POST",body:{id:s}})}async function yl(){return(await pe(`/${fe}/plan/fetch`)).data}async function h1(s){return pe(`/${fe}/plan/save`,{method:"POST",body:s})}async function x1(s){return pe(`/${fe}/plan/drop`,{method:"POST",body:{id:s}})}async function uh(s,i){return pe(`/${fe}/plan/update`,{method:"POST",body:{id:s,...i}})}async function ph(s){return pe(`/${fe}/plan/sort`,{method:"POST",body:{plan_ids:s}})}async function g1(s={}){const i=new URLSearchParams;return i.set("current",String(s.current??1)),i.set("pageSize",String(s.pageSize??15)),s.is_commission&&i.set("is_commission","1"),s.filter&&s.filter.forEach((d,p)=>{i.set(`filter[${p}][key]`,d.key),i.set(`filter[${p}][condition]`,d.condition),i.set(`filter[${p}][value]`,d.value)}),await pe(`/${fe}/order/fetch?${i.toString()}`)}async function b1(s){return pe(`/${fe}/order/paid`,{method:"POST",body:{trade_no:s}})}async function y1(s){return pe(`/${fe}/order/cancel`,{method:"POST",body:{trade_no:s}})}async function xx(s){return pe(`/${fe}/order/assign`,{method:"POST",body:s})}async function v1(s,i){return pe(`/${fe}/order/update`,{method:"POST",body:{trade_no:s,commission_status:i}})}async function j1(s){return pe(`/${fe}/order/detail`,{method:"POST",body:{id:s}})}async function gx(s=1,i=15){return pe(`/${fe}/coupon/fetch?current=${s}&pageSize=${i}`)}async function w1(s){return pe(`/${fe}/coupon/generate`,{method:"POST",body:s})}async function N1(s){return pe(`/${fe}/coupon/drop`,{method:"POST",body:{id:s}})}async function _1(s){return pe(`/${fe}/coupon/show`,{method:"POST",body:{id:s}})}async function S1(s=1,i=15){return pe(`/${fe}/giftcard/fetch?current=${s}&pageSize=${i}`)}async function k1(s){return pe(`/${fe}/giftcard/generate`,{method:"POST",body:s})}async function C1(s){return pe(`/${fe}/giftcard/drop`,{method:"POST",body:{id:s}})}async function zd(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o&&o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${fe}/user/fetch?${d.toString()}`)}async function z1(s){return pe(`/${fe}/user/update`,{method:"POST",body:s})}async function bx(s){return pe(`/${fe}/user/getUserInfoById`,{params:{id:s}})}async function T1(s){return pe(`/${fe}/user/delUser`,{method:"POST",body:{id:s}})}async function E1(s){return pe(`/${fe}/user/generate`,{method:"POST",body:s})}async function M1(s){return pe(`/${fe}/user/resetSecret`,{method:"POST",body:{id:s}})}async function D1(s=1,i=15,o,d=!1){const p=new URLSearchParams;return p.set("current",String(s)),p.set("pageSize",String(i)),d&&p.set("include_subscribe_url","1"),o==null||o.forEach((h,m)=>{p.set(`filter[${m}][key]`,h.key),p.set(`filter[${m}][condition]`,h.condition),p.set(`filter[${m}][value]`,h.value)}),pe(`/${fe}/subscription/fetch?${p.toString()}`)}async function O1(s){return pe(`/${fe}/subscription/subscribeUrl`,{method:"POST",body:{id:s}})}async function A1(s){return pe(`/${fe}/subscription/update`,{method:"POST",body:s})}async function U1(s){return pe(`/${fe}/subscription/resetSecret`,{method:"POST",body:{id:s}})}async function yx(s=1,i=15,o){const d=new URLSearchParams;return d.set("current",String(s)),d.set("pageSize",String(i)),o==null||o.forEach((p,h)=>{d.set(`filter[${h}][key]`,p.key),d.set(`filter[${h}][condition]`,p.condition),d.set(`filter[${h}][value]`,p.value)}),pe(`/${fe}/device/fetch?${d.toString()}`)}async function vx(s){return pe(`/${fe}/device/drop`,{method:"POST",body:{id:s}})}async function jx(s){return pe(`/${fe}/device/ban`,{method:"POST",body:{id:s}})}async function R1(s){return pe(`/${fe}/device/resetUser`,{method:"POST",body:{user_id:s}})}async function H1(s,i=1,o=10){return pe(`/${fe}/stat/getStatUser`,{params:{user_id:s,current:i,pageSize:o}})}async function L1(){return(await pe(`/${fe}/notice/fetch`)).data}async function q1(s){return pe(`/${fe}/notice/save`,{method:"POST",body:s})}async function B1(s){return pe(`/${fe}/notice/drop`,{method:"POST",body:{id:s}})}async function G1(s){return pe(`/${fe}/notice/show`,{method:"POST",body:{id:s}})}async function Y1(){return(await pe(`/${fe}/ticket/fetch`)).data}async function mh(s){return(await pe(`/${fe}/ticket/fetch`,{params:{id:s}})).data}async function $1(s,i){return pe(`/${fe}/ticket/reply`,{method:"POST",body:{id:s,message:i}})}async function Q1(s){return pe(`/${fe}/ticket/close`,{method:"POST",body:{id:s}})}async function X1(){return(await pe(`/${fe}/knowledge/fetch`)).data}async function Z1(s){return(await pe(`/${fe}/knowledge/fetch`,{params:{id:s}})).data}async function K1(s){return pe(`/${fe}/knowledge/save`,{method:"POST",body:s})}async function V1(s){return pe(`/${fe}/knowledge/drop`,{method:"POST",body:{id:s}})}async function J1(s){return pe(`/${fe}/knowledge/show`,{method:"POST",body:{id:s}})}async function F1(){return(await pe(`/${fe}/webcon/fetch`)).data}async function W1(s){return pe(`/${fe}/webcon/save`,{method:"POST",body:s})}async function P1(s){return pe(`/${fe}/webcon/drop`,{method:"POST",body:{id:s}})}async function I1(s){return pe(`/${fe}/webcon/show`,{method:"POST",body:{id:s}})}async function e0(){return pe(`/${fe}/system/getSystemStatus`)}async function t0(){return(await pe(`/${fe}/system/getCoreLicenseStatus`)).data}async function a0(){return(await pe(`/${fe}/system/refreshCoreLicenseStatus`,{method:"POST"})).data}async function n0(){return pe(`/${fe}/system/getQueueStats`)}async function l0(){return pe(`/${fe}/system/getQueueWorkload`)}async function i0(){return pe(`/${fe}/system/getSystemLog`)}async function fh(){return pe(`/${fe}/server/manage/getNodes`)}async function s0(s,i){return pe(`/${fe}/server/${s}/save`,{method:"POST",body:i})}async function o0(s,i){return pe(`/${fe}/server/${s}/drop`,{method:"POST",body:{id:i}})}async function r0(s,i,o){return pe(`/${fe}/server/${s}/update`,{method:"POST",body:{id:i,show:o}})}async function c0(s,i){return pe(`/${fe}/server/${s}/copy`,{method:"POST",body:{id:i}})}async function d0(s){return pe(`/${fe}/server/manage/sort`,{method:"POST",body:s})}const Bd=[{code:"vi-VN",label:"Tiếng Việt",flag:"🇻🇳"},{code:"en-US",label:"English",flag:"🇺🇸"},{code:"zh-CN",label:"简体中文",flag:"🇨🇳"}],wx="admin-locale",Td="vi-VN",u0="/assets/adminzic",Nx=f.createContext(null);function p0(){if(typeof window>"u")return Td;const s=localStorage.getItem(wx);return s&&Bd.some(i=>i.code===s)?s:Td}function m0(s,i){return i?Object.entries(i).reduce((o,[d,p])=>o.replaceAll(`{${d}}`,String(p)),s):s}function f0(s){return new Promise((i,o)=>{var m;if(typeof window>"u"){i({});return}const d=(m=window.AdminNextI18n)==null?void 0:m[s];if(d){i(d);return}const p=document.querySelector(`script[data-admin-next-locale="${s}"]`);if(p){p.addEventListener("load",()=>{var _;i(((_=window.AdminNextI18n)==null?void 0:_[s])??{})}),p.addEventListener("error",o);return}const h=document.createElement("script");h.src=`${u0}/i18n/${s}.js`,h.async=!0,h.dataset.adminNextLocale=s,h.onload=()=>{var _;return i(((_=window.AdminNextI18n)==null?void 0:_[s])??{})},h.onerror=o,document.head.appendChild(h)})}function h0({children:s}){const[i,o]=f.useState(Td),[d,p]=f.useState({}),[h,m]=f.useState(!0);f.useEffect(()=>{o(p0())},[]);const _=f.useCallback(y=>{o(y),typeof window<"u"&&localStorage.setItem(wx,y)},[]);f.useEffect(()=>{let y=!0;return m(!0),f0(i).then(j=>{y&&p(j)}).finally(()=>{y&&m(!1)}),()=>{y=!1}},[i]);const v=f.useCallback((y,j)=>m0(d[y]??y,j),[d]),g=f.useMemo(()=>({locale:i,loading:h,setLocale:_,t:v}),[i,h,_,v]);return t.jsx(Nx.Provider,{value:g,children:s})}function Ze(){const s=f.useContext(Nx);if(!s)throw new Error("useI18n must be used inside I18nProvider");return s}function x0(){const s=Dt(),{t:i,locale:o,setLocale:d}=Ze(),[p,h]=f.useState(""),[m,_]=f.useState(""),[v,g]=f.useState(""),[y,j]=f.useState(!1),[z,Y]=f.useState(!1),P=f.useRef(null);f.useEffect(()=>{function C(B){P.current&&!P.current.contains(B.target)&&Y(!1)}return document.addEventListener("mousedown",C),()=>document.removeEventListener("mousedown",C)},[]),f.useEffect(()=>{Ot()&&s.replace("/dashboard")},[s]);async function K(C){var B,U,O,ee;C.preventDefault(),g(""),j(!0);try{const ie=await Wv(p,m),oe=((B=ie.data)==null?void 0:B.auth_data)??((U=ie.data)==null?void 0:U.token),E=((O=ie.data)==null?void 0:O.is_admin)===1||((ee=ie.data)==null?void 0:ee.is_admin)===!0;if(!oe||!E)throw new Error(i("login.adminRequired"));Fv(oe),s.replace("/dashboard")}catch(ie){g(ie instanceof Error?ie.message:i("login.failed"))}finally{j(!1)}}return t.jsxs("main",{className:"login-page",children:[t.jsxs("section",{className:"login-visual",children:[t.jsxs("div",{className:"login-brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:i("app.title")})]}),t.jsxs("div",{className:"login-copy",children:[t.jsx("p",{children:i("login.eyebrow")}),t.jsx("h1",{children:i("login.heading")}),t.jsx("span",{children:i("login.supporting")})]})]}),t.jsxs("section",{className:"login-card",style:{position:"relative"},"aria-label":i("login.formLabel"),children:[t.jsxs("div",{ref:P,className:"locale-dropdown",style:{position:"absolute",top:24,right:24,zIndex:10},children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.language"),onClick:()=>Y(C=>!C),children:t.jsx(us,{size:17})}),z?t.jsx("div",{className:"locale-menu",children:Bd.map(C=>t.jsxs("button",{className:`locale-option ${o===C.code?"active":""}`,type:"button",onClick:()=>{d(C.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:C.flag}),t.jsx("span",{children:C.label})]},C.code))}):null]}),t.jsxs("div",{className:"security-badge",children:[t.jsx(Av,{size:18}),t.jsx("span",{children:i("login.secureArea")})]}),t.jsxs("div",{className:"login-card-heading",children:[t.jsx("h2",{children:i("login.title")}),t.jsx("p",{children:i("login.subtitle")})]}),t.jsxs("form",{className:"auth-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("common.email")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(sx,{size:17}),t.jsx("input",{autoComplete:"email",inputMode:"email",onChange:C=>h(C.target.value),placeholder:i("login.emailPlaceholder"),required:!0,type:"email",value:p})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("common.password")}),t.jsxs("div",{className:"input-shell",children:[t.jsx(Sv,{size:17}),t.jsx("input",{autoComplete:"current-password",onChange:C=>_(C.target.value),placeholder:i("login.passwordPlaceholder"),required:!0,type:"password",value:m})]})]}),v?t.jsx("div",{className:"form-error",children:v}):null,t.jsx("button",{className:"primary-button",disabled:y,type:"submit",children:i(y?"login.signingIn":"login.submit")})]})]})]})}function _a(s){const i=Number(s??0)/100;return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(i)}function Ka(s){return new Intl.NumberFormat("en-US",{maximumFractionDigits:0}).format(Number(s??0))}function g0(s){return new Intl.NumberFormat("en-US",{notation:"compact",maximumFractionDigits:1}).format(Number(s??0))}const b0=[{label:"nav.overview",items:[{href:"/dashboard",label:"nav.dashboard",icon:yv}]},{label:"nav.settings",items:[{href:"/config/system",label:"nav.systemConfig",icon:Hv},{href:"/config/payment",label:"nav.paymentConfig",icon:gv},{href:"/config/theme",label:"nav.themeConfig",icon:Gv}]},{label:"nav.servers",items:[{href:"/server/manage",label:"nav.nodeManagement",icon:qd},{href:"/server/group",label:"nav.groupManagement",icon:$v},{href:"/server/route",label:"nav.routeManagement",icon:Rv}]},{label:"nav.finance",items:[{href:"/plan",label:"nav.plans",icon:sh},{href:"/order",label:"nav.orders",icon:_v},{href:"/coupon",label:"nav.coupons",icon:vv},{href:"/giftcard",label:"nav.giftcards",icon:qv}]},{label:"nav.users",items:[{href:"/user",label:"nav.usersManagement",icon:rx},{href:"/subscription",label:"nav.subscriptions",icon:sh},{href:"/device",label:"nav.devices",icon:Lv},{href:"/webcon",label:"nav.webcon",icon:us},{href:"/notice",label:"nav.notices",icon:as},{href:"/ticket",label:"nav.tickets",icon:Nv},{href:"/knowledge",label:"nav.knowledge",icon:pv}]},{label:"nav.metrics",items:[{href:"/queue",label:"nav.queue",icon:mv}]}];function y0(){const[s,i]=f.useState("light");f.useEffect(()=>{const h=localStorage.getItem("admin-theme")??"light";i(h),document.documentElement.setAttribute("data-theme",h)},[]);const o=f.useCallback(p=>{i(p),localStorage.setItem("admin-theme",p),document.documentElement.setAttribute("data-theme",p)},[]),d=f.useCallback(()=>{o(s==="light"?"dark":"light")},[s,o]);return{theme:s,toggle:d}}function _x(s){return s?new Date(s*1e3):null}function v0(s,i){const o=_x(i);if(!o)return null;try{return new Intl.DateTimeFormat(s,{year:"numeric",month:"2-digit",day:"2-digit"}).format(o)}catch{return o.toLocaleDateString()}}function j0(s){const i=_x(s);return i?Math.ceil((i.getTime()-Date.now())/864e5):null}function Yt({children:s,title:i,subtitle:o}){const[d,p]=f.useState(!1),h=Dt(),m=iv(),{t:_,locale:v,setLocale:g}=Ze(),{theme:y,toggle:j}=y0(),[z,Y]=f.useState(!1),P=f.useRef(null),[K,C]=f.useState(null),[B,U]=f.useState(!1),O=f.useCallback(async(N=!1)=>{if(Ot()){U(N);try{C(N?await a0():await t0())}catch(R){C({available:!1,status:"unavailable",active:!1,protected_features_enabled:!1,offline_grace:!1,requires_renewal:!0,renewal_warning:!1,renewal_warning_days:14,days_until_expiry:null,message:_("license.unavailable"),error:R instanceof Error?R.message:_("license.unavailable")})}finally{U(!1)}}},[_]);f.useEffect(()=>{function N(R){P.current&&!P.current.contains(R.target)&&Y(!1)}return document.addEventListener("mousedown",N),()=>document.removeEventListener("mousedown",N)},[]),f.useEffect(()=>{O(!1);const N=window.setInterval(()=>{O(!1)},6e4);return()=>window.clearInterval(N)},[O]);function ee(){dx(),h.replace("/login")}const ie=(K==null?void 0:K.license_expires_at)??(K==null?void 0:K.expires_at),oe=v0(v,ie),E=typeof(K==null?void 0:K.days_until_expiry)=="number"?K.days_until_expiry:j0(ie),$=typeof E=="number"?E<=0?_("license.expiresToday"):_("license.daysLeft",{days:E}):null,ae=!!K&&K.available&&!K.requires_renewal,me=ae&&!!(K!=null&&K.renewal_warning);return t.jsxs("div",{className:"admin-shell",children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
        /* Hide sidebar scrollbar completely across all browsers */
        .sidebar {
          -ms-overflow-style: none !important;
          scrollbar-width: none !important;
        }
        .sidebar::-webkit-scrollbar {
          display: none !important;
        }
      `}}),d&&t.jsx("div",{className:"sidebar-backdrop",role:"presentation",onClick:()=>p(!1)}),t.jsxs("aside",{className:`sidebar ${d?"sidebar-open":""}`,children:[t.jsxs("div",{className:"brand",children:[t.jsx("span",{className:"brand-mark",children:"Z"}),t.jsx("span",{children:_("app.title")})]}),t.jsx("nav",{className:"nav-list","aria-label":"Admin navigation",children:b0.map(N=>t.jsxs("div",{className:"nav-group",children:[t.jsx("div",{className:"nav-heading",children:_(N.label)}),N.items.map(R=>{const te=R.icon,M=m===R.href;return t.jsxs(sv,{className:`nav-item ${M?"active":""}`,href:R.href,onClick:()=>p(!1),children:[t.jsx(te,{size:17}),t.jsx("span",{children:_(R.label)})]},R.href)})]},N.label))})]}),t.jsxs("div",{className:"shell-main",children:[t.jsxs("header",{className:"topbar",children:[t.jsx("button",{className:"icon-button mobile-only",type:"button","aria-label":_(d?"common.closeMenu":"common.openMenu"),onClick:()=>p(N=>!N),children:d?t.jsx(ct,{size:19}):t.jsx(Cv,{size:19})}),t.jsxs("div",{className:"topbar-title",children:[t.jsx("h1",{children:i}),o?t.jsx("p",{children:o}):null]}),t.jsxs("div",{className:"topbar-actions",children:[ae?t.jsxs("button",{className:`license-chip ${me?"warning":""}`,type:"button",disabled:B,title:_("license.refresh"),onClick:()=>void O(!0),children:[t.jsx(ah,{size:16}),t.jsxs("span",{className:"license-chip-copy",children:[t.jsx("span",{children:_("license.validUntil")}),t.jsx("strong",{children:oe??_("license.unknownExpiry")})]}),$?t.jsx("small",{children:$}):null]}):null,t.jsxs("div",{className:"locale-dropdown",ref:P,children:[t.jsx("button",{className:"icon-button",type:"button","aria-label":_("common.language"),onClick:()=>Y(N=>!N),children:t.jsx(us,{size:17})}),z?t.jsx("div",{className:"locale-menu",children:Bd.map(N=>t.jsxs("button",{className:`locale-option ${v===N.code?"active":""}`,type:"button",onClick:()=>{g(N.code),Y(!1)},children:[t.jsx("span",{className:"locale-flag",children:N.flag}),t.jsx("span",{children:N.label})]},N.code))}):null]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":y==="dark"?"Switch to light mode":"Switch to dark mode",onClick:j,children:y==="dark"?t.jsx(Bv,{size:17}):t.jsx(zv,{size:17})}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:ee,children:[t.jsx(kv,{size:16}),t.jsx("span",{children:_("common.logout")})]})]})]}),t.jsxs("main",{className:"content",children:[K!=null&&K.requires_renewal?t.jsxs("section",{className:"license-banner",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(kd,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:_("license.renewTitle")}),t.jsx("p",{children:_("license.renewBody")}),t.jsxs("small",{children:[_("license.currentStatus"),": ",K.status,K.error?` - ${K.error}`:""]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void O(!0),children:[t.jsx(kt,{size:16}),_(B?"license.refreshing":"license.refresh")]})]}):null,me?t.jsxs("section",{className:"license-banner license-banner-warning",children:[t.jsxs("div",{className:"license-banner-main",children:[t.jsx(ah,{size:20}),t.jsxs("div",{children:[t.jsx("strong",{children:_("license.expiryWarningTitle")}),t.jsx("p",{children:_("license.expiryWarningBody",{date:oe??_("license.unknownExpiry"),days:E??""})}),t.jsxs("small",{children:[_("license.currentStatus"),": ",K.status]})]})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:B,onClick:()=>void O(!0),children:[t.jsx(kt,{size:16}),_(B?"license.refreshing":"license.refresh")]})]}):null,s]})]})]})}const hh=["commissionCount","commissionAmount","paidCount","paidAmount","registrations"];function Sx(s){return{date:s,commissionCount:0,commissionAmount:0,orderCount:0,paidCount:0,paidAmount:0,registrations:0}}function ns(s){return Number(s??0)}function xh(s){return ns(s)/100}function gh(s){return`${Ka(Math.round(s))} VND`}function kx(s){return`${String(s.getMonth()+1).padStart(2,"0")}-${String(s.getDate()).padStart(2,"0")}`}function w0(s){const i=new Date;return i.setHours(0,0,0,0),Array.from({length:s},(o,d)=>{const p=new Date(i);return p.setDate(i.getDate()-(s-d-1)),kx(p)})}function bh(s,i){const o=s.get(i);if(o)return o;const d=Sx(i);return s.set(i,d),d}function N0(s){const i=s.toLowerCase();return i==="register_count"||i.includes("đăng")||i.includes("register")?"registrations":i==="order_count"?"orderCount":i==="paid_count"||i.includes("giao dịch thu")?"paidCount":i==="paid_total"||i.includes("tiền thu")?"paidAmount":i==="commission_count"||i.includes("giao dịch hoa hồng")?"commissionCount":i==="commission_total"||i.includes("tiền hoa hồng")?"commissionAmount":null}function ko({label:s,value:i,helper:o,tone:d="default",onClick:p}){return t.jsxs("article",{className:`stat-card tone-${d}`,onClick:p,style:p?{cursor:"pointer"}:void 0,children:[t.jsxs("div",{children:[t.jsx("p",{children:s}),t.jsx("strong",{children:i})]}),t.jsx("span",{className:"stat-icon",children:t.jsx(uv,{size:19})}),o?t.jsx("small",{children:o}):null]})}function yt({label:s}){return t.jsxs("div",{className:"loading-state",children:[t.jsx(kt,{size:18}),t.jsx("span",{children:s})]})}function _0(s,i){const o=new Map,d=new Map;if(s.forEach(p=>{const h=bh(o,p.date),m=N0(p.type);if(m){h[m]=Number(p.value||0);return}const _=d.get(p.date)??0,v=hh[_%hh.length];h[v]=Number(p.value||0),d.set(p.date,_+1)}),i){const p=bh(o,kx(new Date));p.registrations=ns(i.day_register_total),i.day_order_total!==void 0&&(p.orderCount=ns(i.day_order_total)),i.day_paid_order_total!==void 0&&(p.paidCount=ns(i.day_paid_order_total)),p.paidAmount=xh(i.day_paid_income??i.day_income),i.day_commission_payout!==void 0&&(p.commissionAmount=xh(i.day_commission_payout)),i.day_commission_count!==void 0&&(p.commissionCount=ns(i.day_commission_count))}return o.size===0?[]:w0(31).map(p=>o.get(p)??Sx(p))}function S0({records:s,override:i}){const{t:o}=Ze(),[d,p]=f.useState("paidAmount"),[h,m]=f.useState(null),[_,v]=f.useState(0),[g,y]=f.useState(0),j=[{key:"paidAmount",label:o("dashboard.chartRevenue"),summaryLabel:o("dashboard.peakRevenue"),color:"#2f8f83",format:gh},{key:"orderCount",label:o("dashboard.chartOrderCount"),summaryLabel:o("dashboard.peakOrderCount"),color:"#2563eb",format:Ka},{key:"paidCount",label:o("dashboard.chartPaidCount"),summaryLabel:o("dashboard.peakPaidCount"),color:"#7c3aed",format:Ka},{key:"commissionAmount",label:o("dashboard.chartCommission"),summaryLabel:o("dashboard.peakCommission"),color:"#c2410c",format:gh},{key:"commissionCount",label:o("dashboard.chartCommissionCount"),summaryLabel:o("dashboard.peakCommissionCount"),color:"#be123c",format:Ka},{key:"registrations",label:o("dashboard.chartRegistrations"),summaryLabel:o("dashboard.peakRegistrations"),color:"#0891b2",format:Ka}],z=j.find($=>$.key===d)??j[0],Y=_0(s,i),P=$=>Number($[z.key]||0),K=Math.max(...Y.map(P),1),C=720,B=220,U=28,O=Y.length>1?(C-U*2)/(Y.length-1):0,ee=$=>B-U-$/K*(B-U*2),ie=Y.map(($,ae)=>`${U+ae*O},${ee(P($))}`).join(" "),oe=Math.max(Math.ceil(Y.length/6),1),E=`dashboardTrendFill-${z.key}`;return t.jsxs("section",{className:"panel chart-panel",children:[t.jsxs("div",{className:"panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("dashboard.revenueTrend")}),t.jsx("p",{children:o("dashboard.revenueTrendHelp")})]}),t.jsx("span",{children:o("dashboard.lastDays",{count:Y.length})})]}),t.jsx("div",{className:"chart-metric-tabs",role:"tablist","aria-label":o("dashboard.chartMetrics"),children:j.map($=>t.jsx("button",{type:"button",className:d===$.key?"active":"",onClick:()=>{p($.key),m(null)},children:$.label},$.key))}),Y.length===0?t.jsx("div",{className:"empty-state",children:o("dashboard.noChartData")}):null,t.jsxs("div",{style:{position:"relative",width:"100%"},children:[t.jsxs("svg",{className:"line-chart",viewBox:`0 0 ${C} ${B}`,role:"img",children:[t.jsx("defs",{children:t.jsxs("linearGradient",{id:E,x1:"0",x2:"0",y1:"0",y2:"1",children:[t.jsx("stop",{offset:"0%",stopColor:z.color,stopOpacity:"0.24"}),t.jsx("stop",{offset:"100%",stopColor:z.color,stopOpacity:"0"})]})}),[0,.25,.5,.75,1].map($=>t.jsx("line",{className:"chart-grid",x1:U,x2:C-U,y1:U+$*(B-U*2),y2:U+$*(B-U*2)},$)),Y.length>0?t.jsxs(t.Fragment,{children:[t.jsx("polygon",{className:"chart-area",style:{fill:`url(#${E})`},points:`${U},${B-U} ${ie} ${C-U},${B-U}`}),t.jsx("polyline",{className:"chart-line",points:ie,style:{stroke:z.color}}),Y.map(($,ae)=>{const me=U+ae*O,N=ee(P($));return t.jsxs("g",{children:[t.jsx("circle",{cx:me,cy:N,r:14,fill:"transparent",style:{cursor:"pointer"},onMouseEnter:()=>{m($),v(me),y(N)},onMouseLeave:()=>{m(null)}}),t.jsx("circle",{cx:me,cy:N,r:(h==null?void 0:h.date)===$.date?6:4,fill:z.color,stroke:"var(--surface)",strokeWidth:(h==null?void 0:h.date)===$.date?2:1.5,style:{pointerEvents:"none",transition:"all 0.15s ease"}})]},$.date)})]}):null]}),h?t.jsxs("div",{className:"chart-tooltip",style:{position:"absolute",left:`${_/C*100}%`,top:`${g/B*100}%`,transform:"translate(-50%, -100%) translateY(-12px)",pointerEvents:"none"},children:[t.jsxs("div",{className:"tooltip-date",children:[o("dashboard.date"),": ",h.date]}),t.jsxs("div",{className:"tooltip-value",children:[z.label,": ",z.format(P(h))]})]}):null]}),t.jsx("div",{className:"chart-axis",children:Y.filter(($,ae)=>ae===0||ae===Y.length-1||ae%oe===0).map($=>t.jsx("span",{children:$.date},$.date))}),Y.length>0?t.jsxs("div",{className:"chart-summary",children:[t.jsx("span",{children:z.summaryLabel}),t.jsx("strong",{children:z.format(K)})]}):null]})}function Co({title:s,subtitle:i,records:o,labelKey:d}){const{t:p}=Ze(),h=Math.max(...o.map(m=>Number(m.total||0)),1);return t.jsxs("section",{className:"panel",children:[t.jsx("div",{className:"panel-heading",children:t.jsxs("div",{children:[t.jsx("h2",{children:s}),t.jsx("p",{children:i})]})}),t.jsx("div",{className:"rank-list",children:o.length===0?t.jsx("div",{className:"empty-state",children:p("dashboard.noTraffic")}):o.slice(0,8).map((m,_)=>{const v=d==="server_name"?m.server_name||p("dashboard.unnamedNode"):m.email||p("dashboard.unknownUser"),g=Number(m.total||0)/h*100;return t.jsxs("div",{className:"rank-row",children:[t.jsxs("div",{className:"rank-meta",children:[t.jsx("span",{children:_+1}),t.jsx("strong",{children:v}),t.jsxs("small",{children:[g0(m.total)," GB"]})]}),t.jsx("div",{className:"rank-bar",children:t.jsx("span",{style:{width:`${Math.max(g,3)}%`}})})]},`${v}-${_}`)})})]})}function sd({label:s,current:i,previous:o}){const{t:d}=Ze();return t.jsxs("div",{className:"metric-pair",children:[t.jsx("span",{children:s}),t.jsx("strong",{children:typeof i=="number"?Ka(i):i}),t.jsxs("small",{children:[d("dashboard.previous"),": ",typeof o=="number"?Ka(o):o]})]})}function k0(){var g,y,j,z,Y,P,K,C,B,U,O,ee;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(""),[m,_]=f.useState(!0),v=f.useCallback(async()=>{_(!0),h("");try{d(await Pv())}catch(ie){h(ie instanceof Error?ie.message:i("dashboard.loadFailed"))}finally{_(!1)}},[i]);return f.useEffect(()=>{if(!Ot()){s.replace("/login");return}v()},[v,s]),t.jsxs(Yt,{title:i("dashboard.title"),subtitle:i("dashboard.subtitle"),children:[p?t.jsxs("div",{className:"alert-error",children:[t.jsx("span",{children:p}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,children:[t.jsx(kt,{size:16}),i("common.retry")]})]}):null,m&&!o?t.jsx(yt,{label:i("dashboard.loading")}):null,o?t.jsxs(t.Fragment,{children:[((g=o.override)==null?void 0:g.ticket_pending_total)>0?t.jsxs("div",{className:"ticket-alert",children:[t.jsx("span",{children:i("dashboard.pendingTickets",{count:(y=o.override)==null?void 0:y.ticket_pending_total})}),t.jsx("strong",{onClick:()=>s.push("/ticket"),children:i("dashboard.handleNow")})]}):null,t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("dashboard.today")}),t.jsx("p",{children:i("dashboard.todayHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:v,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsxs("section",{className:"stat-grid",children:[t.jsx(ko,{label:i("dashboard.onlineUsers"),value:Ka(((j=o.override)==null?void 0:j.online_user)??0),helper:i("dashboard.lastTenMinutes"),tone:"green",onClick:()=>s.push("/user")}),t.jsx(ko,{label:i("dashboard.todayIncome"),value:`${_a(((z=o.override)==null?void 0:z.day_paid_income)??((Y=o.override)==null?void 0:Y.day_income)??0)} VND`,helper:i("dashboard.settledOrders"),tone:"orange",onClick:()=>s.push("/order")}),t.jsx(ko,{label:i("dashboard.todayRegistrations"),value:Ka(((P=o.override)==null?void 0:P.day_register_total)??0),helper:i("dashboard.newAccounts"),onClick:()=>s.push("/user")}),t.jsx(ko,{label:i("dashboard.pendingCommission"),value:Ka(((K=o.override)==null?void 0:K.commission_pending_total)??0),helper:i("dashboard.awaitingReview"),tone:"rose",onClick:()=>s.push("/order")})]}),t.jsxs("section",{className:"overview-grid",children:[t.jsx(sd,{label:i("dashboard.monthIncome"),current:`${_a(((C=o.override)==null?void 0:C.month_income)??0)} VND`,previous:`${_a(((B=o.override)==null?void 0:B.last_month_income)??0)} VND`}),t.jsx(sd,{label:i("dashboard.monthCommission"),current:`${_a(((U=o.override)==null?void 0:U.commission_month_payout)??0)} VND`,previous:`${_a(((O=o.override)==null?void 0:O.commission_last_month_payout)??0)} VND`}),t.jsx(sd,{label:i("dashboard.monthRegistrations"),current:((ee=o.override)==null?void 0:ee.month_register_total)??0,previous:"-"})]}),t.jsx(S0,{records:o.order,override:o.override}),t.jsxs("section",{className:"rank-grid",children:[t.jsx(Co,{title:i("dashboard.serverRankToday"),subtitle:i("dashboard.trafficGb"),records:o.serverToday,labelKey:"server_name"}),t.jsx(Co,{title:i("dashboard.serverRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.serverYesterday,labelKey:"server_name"}),t.jsx(Co,{title:i("dashboard.userRankToday"),subtitle:i("dashboard.trafficGb"),records:o.userToday,labelKey:"email"}),t.jsx(Co,{title:i("dashboard.userRankYesterday"),subtitle:i("dashboard.trafficGb"),records:o.userYesterday,labelKey:"email"})]})]}):null]})}const C0=["site","safe","subscribe","deposit","ticket","invite","server","email","telegram","app"];function yh(s){return[{label:s("config.option.enabledLabel"),value:1},{label:s("config.option.disabledLabel"),value:0}]}function z0(s){return[{label:s("config.resetTraffic.monthly"),value:0},{label:s("config.resetTraffic.byPurchase"),value:1},{label:s("config.resetTraffic.never"),value:2},{label:s("config.resetTraffic.yearly"),value:3},{label:s("config.resetTraffic.yearlyByPurchase"),value:4}]}function od(s){return[{label:s("config.event.none"),value:0},{label:s("config.event.resetTraffic"),value:1}]}function T0(s){return[{label:s("config.link.permanent"),value:0},{label:s("config.link.oneTime"),value:1},{label:s("config.link.timeLimited"),value:2}]}function E0(s){return[{label:s("config.ticket.openAll"),value:0},{label:s("config.ticket.paidOnly"),value:1},{label:s("config.ticket.disableTickets"),value:2}]}function ua(s){return s===!0||s===1||s==="1"}function M0(s){return Array.isArray(s)?s.join(", "):s==null?"":String(s)}function rd(s){return s.split(",").map(i=>i.trim()).filter(Boolean)}function D0({field:s,value:i,onChange:o}){const{t:d}=Ze(),p=s.toInput?s.toInput(i):M0(i);return t.jsxs("div",{className:"config-row",children:[t.jsxs("div",{className:"config-row-copy",children:[t.jsx("h3",{children:s.label}),s.description?t.jsx("p",{children:s.description}):null]}),t.jsxs("div",{className:"config-row-control",children:[s.type==="switch"?t.jsxs("button",{className:`switch-control ${ua(i)?"on":""}`,type:"button",onClick:()=>o(ua(i)?0:1),"aria-pressed":ua(i),children:[t.jsx("span",{}),ua(i)?yh(d)[0].label:yh(d)[1].label]}):null,s.type==="select"?t.jsx("select",{className:"config-input",value:p,onChange:h=>o(h.target.value),children:(s.options??[]).map(h=>t.jsx("option",{value:h.value,children:h.label},String(h.value)))}):null,s.type==="textarea"?t.jsx("textarea",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,rows:4,value:p}):null,s.type==="text"||s.type==="number"?t.jsx("input",{className:"config-input",onChange:h=>o(s.fromInput?s.fromInput(h.target.value):h.target.value),placeholder:s.placeholder,type:s.type,value:p}):null]})]})}function O0({plans:s,emailTemplates:i,t:o}){const d=[{label:o("config.option.disabled"),value:0},...s.map(p=>({label:p.name,value:p.id}))];return[{key:"site",label:o("config.tabs.site"),hint:o("config.tabs.siteHint"),fields:[{key:"app_name",label:o("config.site.appName"),description:o("config.site.appNameHelp"),type:"text",placeholder:"ZicNet VPN"},{key:"app_description",label:o("config.site.appDescription"),description:o("config.site.appDescriptionHelp"),type:"text"},{key:"app_url",label:o("config.site.appUrl"),description:o("config.site.appUrlHelp"),type:"text",placeholder:"https://example.com"},{key:"force_https",label:o("config.site.forceHttps"),description:o("config.site.forceHttpsHelp"),type:"switch"},{key:"logo",label:o("config.site.logo"),description:o("config.site.logoHelp"),type:"text",placeholder:"https://example.com/logo.png"},{key:"subscribe_url",label:o("config.site.subscribeUrl"),description:o("config.site.subscribeUrlHelp"),type:"textarea"},{key:"subscribe_path",label:o("config.site.subscribePath"),description:o("config.site.subscribePathHelp"),type:"text",placeholder:"/api/v3/client/subscribe"},{key:"tos_url",label:o("config.site.tosUrl"),description:o("config.site.tosUrlHelp"),type:"text",placeholder:"https://example.com/tos"},{key:"stop_register",label:o("config.site.stopRegister"),description:o("config.site.stopRegisterHelp"),type:"switch"},{key:"try_out_plan_id",label:o("config.site.trialPlan"),description:o("config.site.trialPlanHelp"),type:"select",options:d},{key:"try_out_hour",label:o("config.site.trialHours"),type:"number",visible:p=>Number(p.try_out_plan_id||0)!==0},{key:"currency",label:o("config.site.currency"),description:o("config.site.currencyHelp"),type:"text",placeholder:"VND"},{key:"currency_symbol",label:o("config.site.currencySymbol"),description:o("config.site.currencyHelp"),type:"text",placeholder:"₫"}]},{key:"safe",label:o("config.tabs.safe"),hint:o("config.tabs.safeHint"),fields:[{key:"email_verify",label:o("config.safe.emailVerify"),description:o("config.safe.emailVerifyHelp"),type:"switch"},{key:"email_gmail_limit_enable",label:o("config.safe.gmailAlias"),description:o("config.safe.gmailAliasHelp"),type:"switch"},{key:"safe_mode_enable",label:o("config.safe.safeMode"),description:o("config.safe.safeModeHelp"),type:"switch"},{key:"secure_path",label:o("config.safe.securePath"),description:o("config.safe.securePathHelp"),type:"text",placeholder:"admin-path"},{key:"staff_path",label:o("config.safe.staffPath"),description:o("config.safe.staffPathHelp"),type:"text",placeholder:"webctv"},{key:"email_whitelist_enable",label:o("config.safe.emailWhitelist"),description:o("config.safe.emailWhitelistHelp"),type:"switch"},{key:"email_whitelist_suffix",label:o("config.safe.emailWhitelistSuffix"),description:o("config.safe.emailWhitelistSuffixHelp"),type:"textarea",visible:p=>ua(p.email_whitelist_enable),fromInput:rd},{key:"recaptcha_enable",label:o("config.safe.recaptcha"),description:o("config.safe.recaptchaHelp"),type:"switch"},{key:"recaptcha_key",label:o("config.safe.recaptchaKey"),type:"text",visible:p=>ua(p.recaptcha_enable)},{key:"recaptcha_site_key",label:o("config.safe.recaptchaSiteKey"),type:"text",visible:p=>ua(p.recaptcha_enable)},{key:"register_limit_by_ip_enable",label:o("config.safe.ipRegisterLimit"),description:o("config.safe.ipRegisterLimitHelp"),type:"switch"},{key:"register_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>ua(p.register_limit_by_ip_enable)},{key:"register_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>ua(p.register_limit_by_ip_enable)},{key:"password_limit_enable",label:o("config.safe.passwordLimit"),description:o("config.safe.passwordLimitHelp"),type:"switch"},{key:"password_limit_count",label:o("config.safe.limitCount"),type:"number",visible:p=>ua(p.password_limit_enable)},{key:"password_limit_expire",label:o("config.safe.limitMinutes"),type:"number",visible:p=>ua(p.password_limit_enable)}]},{key:"subscribe",label:o("config.tabs.subscribe"),hint:o("config.tabs.subscribeHint"),fields:[{key:"multiple_subscription_enable",label:o("config.subscribe.multipleSubscription"),description:o("config.subscribe.multipleSubscriptionHelp"),type:"switch"},{key:"plan_change_enable",label:o("config.subscribe.planChange"),description:o("config.subscribe.planChangeHelp"),type:"switch"},{key:"device_hwid_enable",label:o("config.subscribe.deviceHwid"),description:o("config.subscribe.deviceHwidHelp"),type:"switch"},{key:"happ_subscribe_encrypt_enable",label:o("config.subscribe.happEncrypt"),description:o("config.subscribe.happEncryptHelp"),type:"switch"},{key:"change_sni_enable",label:o("config.subscribe.changeSni"),description:o("config.subscribe.changeSniHelp"),type:"switch"},{key:"noti_admin_giftcard",label:o("config.subscribe.giftcardNotice"),description:o("config.subscribe.giftcardNoticeHelp"),type:"switch"},{key:"reset_traffic_method",label:o("config.subscribe.resetTraffic"),description:o("config.subscribe.resetTrafficHelp"),type:"select",options:z0(o)},{key:"surplus_enable",label:o("config.subscribe.surplus"),description:o("config.subscribe.surplusHelp"),type:"switch"},{key:"allow_new_period",label:o("config.subscribe.allowNewPeriod"),description:o("config.subscribe.allowNewPeriodHelp"),type:"switch"},{key:"new_order_event_id",label:o("config.subscribe.newOrderEvent"),type:"select",options:od(o)},{key:"renew_order_event_id",label:o("config.subscribe.renewOrderEvent"),type:"select",options:od(o)},{key:"change_order_event_id",label:o("config.subscribe.changeOrderEvent"),type:"select",options:od(o)},{key:"show_info_to_server_enable",label:o("config.subscribe.showInfo"),description:o("config.subscribe.showInfoHelp"),type:"switch"},{key:"show_subscribe_method",label:o("config.subscribe.linkMode"),description:o("config.subscribe.linkModeHelp"),type:"select",options:T0(o)},{key:"show_subscribe_expire",label:o("config.subscribe.linkExpire"),type:"number",visible:p=>Number(p.show_subscribe_method||0)===2}]},{key:"deposit",label:o("config.tabs.deposit"),hint:o("config.tabs.depositHint"),fields:[{key:"deposit_bounus",label:o("config.deposit.bonus"),description:o("config.deposit.bonusHelp"),type:"textarea",placeholder:"10000:500, 20000:1200",fromInput:rd}]},{key:"ticket",label:o("config.tabs.ticket"),hint:o("config.tabs.ticketHint"),fields:[{key:"ticket_status",label:o("config.ticket.status"),description:o("config.ticket.statusHelp"),type:"select",options:E0(o)}]},{key:"invite",label:o("config.tabs.invite"),hint:o("config.tabs.inviteHint"),fields:[{key:"invite_force",label:o("config.invite.force"),description:o("config.invite.forceHelp"),type:"switch"},{key:"invite_commission",label:o("config.invite.commission"),description:o("config.invite.commissionHelp"),type:"number"},{key:"invite_gen_limit",label:o("config.invite.genLimit"),type:"number"},{key:"invite_never_expire",label:o("config.invite.neverExpire"),description:o("config.invite.neverExpireHelp"),type:"switch"},{key:"commission_first_time_enable",label:o("config.invite.firstTime"),description:o("config.invite.firstTimeHelp"),type:"switch"},{key:"commission_auto_check_enable",label:o("config.invite.autoCheck"),description:o("config.invite.autoCheckHelp"),type:"switch"},{key:"commission_withdraw_limit",label:o("config.invite.withdrawLimit"),description:o("config.invite.withdrawLimitHelp"),type:"number"},{key:"commission_withdraw_method",label:o("config.invite.withdrawMethods"),description:o("config.invite.withdrawMethodsHelp"),type:"textarea",fromInput:rd},{key:"withdraw_close_enable",label:o("config.invite.withdrawClose"),description:o("config.invite.withdrawCloseHelp"),type:"switch"},{key:"commission_distribution_enable",label:o("config.invite.distribution"),description:o("config.invite.distributionHelp"),type:"switch"},{key:"commission_distribution_l1",label:o("config.invite.level1"),type:"number",visible:p=>ua(p.commission_distribution_enable)},{key:"commission_distribution_l2",label:o("config.invite.level2"),type:"number",visible:p=>ua(p.commission_distribution_enable)},{key:"commission_distribution_l3",label:o("config.invite.level3"),type:"number",visible:p=>ua(p.commission_distribution_enable)}]},{key:"server",label:o("config.tabs.server"),hint:o("config.tabs.serverHint"),fields:[{key:"server_api_url",label:o("config.server.apiUrl"),description:o("config.server.apiUrlHelp"),type:"text"},{key:"server_token",label:o("config.server.token"),description:o("config.server.tokenHelp"),type:"text"},{key:"server_pull_interval",label:o("config.server.pullInterval"),description:o("config.server.pullIntervalHelp"),type:"number"},{key:"server_push_interval",label:o("config.server.pushInterval"),description:o("config.server.pushIntervalHelp"),type:"number"},{key:"server_node_report_min_traffic",label:o("config.server.nodeTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"server_device_online_min_traffic",label:o("config.server.deviceTrafficThreshold"),description:o("config.server.thresholdHelp"),type:"number"},{key:"device_limit_mode",label:o("config.server.deviceLimitMode"),description:o("config.server.deviceLimitModeHelp"),type:"switch"}]},{key:"email",label:o("config.tabs.email"),hint:o("config.tabs.emailHint"),warning:o("config.email.warning"),fields:[{key:"email_host",label:o("config.email.host"),type:"text"},{key:"email_port",label:o("config.email.port"),type:"text"},{key:"email_encryption",label:o("config.email.encryption"),type:"text",placeholder:"tls"},{key:"email_username",label:o("config.email.username"),type:"text"},{key:"email_password",label:o("config.email.password"),type:"text"},{key:"email_from_address",label:o("config.email.fromAddress"),type:"text"},{key:"email_template",label:o("config.email.template"),type:"select",options:i.map(p=>({label:p,value:p}))}]},{key:"telegram",label:o("config.tabs.telegram"),hint:o("config.tabs.telegramHint"),fields:[{key:"telegram_bot_token",label:o("config.telegram.token"),description:o("config.telegram.tokenHelp"),type:"text",placeholder:"0000000000:xxxxxxxx"},{key:"telegram_bot_enable",label:o("config.telegram.enable"),description:o("config.telegram.enableHelp"),type:"switch"},{key:"telegram_discuss_link",label:o("config.telegram.group"),description:o("config.telegram.groupHelp"),type:"text",placeholder:"https://t.me/example"},{key:"apple_share_api",label:o("config.telegram.appleShareApi"),description:o("config.telegram.appleShareApiHelp"),type:"text"}]},{key:"app",label:o("config.tabs.app"),hint:o("config.tabs.appHint"),warning:o("config.app.warning"),fields:[{key:"windows_version",label:o("config.app.windowsVersion"),type:"text",placeholder:"1.0.0"},{key:"windows_download_url",label:o("config.app.windowsUrl"),type:"text",placeholder:"https://example.com/app.exe"},{key:"macos_version",label:o("config.app.macosVersion"),type:"text",placeholder:"1.0.0"},{key:"macos_download_url",label:o("config.app.macosUrl"),type:"text",placeholder:"https://example.com/app.dmg"},{key:"android_version",label:o("config.app.androidVersion"),type:"text",placeholder:"1.0.0"},{key:"android_download_url",label:o("config.app.androidUrl"),type:"text",placeholder:"https://example.com/app.apk"}]}]}function A0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState("site"),[p,h]=f.useState(null),[m,_]=f.useState([]),[v,g]=f.useState([]),[y,j]=f.useState(!0),[z,Y]=f.useState(null),[P,K]=f.useState(""),C=f.useCallback(async()=>{j(!0),K("");try{const[$,ae,me]=await Promise.all([ux(),e1(),Iv()]);h($),_(ae),g(me)}catch($){K($ instanceof Error?$.message:i("config.loadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}C()},[C,s]),f.useEffect(()=>{const $=document.querySelector(".config-tabs button.active");$&&$.scrollIntoView({behavior:"smooth",block:"nearest",inline:"center"})},[o]);const B=f.useMemo(()=>O0({plans:m,emailTemplates:v,t:i}),[m,v,i]),U=B.find($=>$.key===o)??B[0],O=(p==null?void 0:p[U.key])??{};function ee($,ae,me){h(N=>N&&{...N,[$]:{...N[$],[ae]:me}})}async function ie(){var $;if(p){Y(U.key),K("");try{await px(p[U.key]),($=window.showToast)==null||$.call(window,i("config.saveSuccess"),"success")}catch(ae){K(ae instanceof Error?ae.message:i("config.saveFailed"))}finally{Y(null)}}}async function oe(){var $;Y("mail"),K("");try{await t1(),($=window.showToast)==null||$.call(window,i("config.email.testSuccess"),"success")}catch(ae){K(ae instanceof Error?ae.message:i("config.email.testFailed"))}finally{Y(null)}}async function E(){var ae;const $=String((p==null?void 0:p.telegram.telegram_bot_token)??"");Y("webhook"),K("");try{await a1($),(ae=window.showToast)==null||ae.call(window,i("config.telegram.webhookSuccess"),"success")}catch(me){K(me instanceof Error?me.message:i("config.telegram.webhookFailed"))}finally{Y(null)}}return t.jsxs(Yt,{title:i("config.title"),subtitle:i("config.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("config.systemConfig")}),t.jsx("p",{children:i("config.systemConfigHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:C,disabled:y,children:[t.jsx(kt,{size:16}),i(y?"common.refreshing":"common.refresh")]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,y&&!p?t.jsx(yt,{label:i("config.loading")}):null,p?t.jsxs("section",{className:"config-layout",children:[t.jsx("aside",{className:"config-tabs","aria-label":i("config.tabsLabel"),children:C0.map($=>{const ae=B.find(me=>me.key===$);return ae?t.jsxs("button",{className:o===$?"active":"",type:"button",onClick:()=>d($),children:[t.jsx("span",{children:ae.label}),t.jsx("small",{children:ae.hint})]},$):null})}),t.jsxs("div",{className:"config-panel panel",children:[t.jsxs("div",{className:"config-panel-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:U.label}),t.jsx("p",{children:U.hint})]}),t.jsxs("button",{className:"primary-button save-button",disabled:z===U.key,type:"button",onClick:ie,children:[t.jsx(ka,{size:16}),z===U.key?i("config.saving"):i("config.saveTab")]})]}),U.warning?t.jsx("div",{className:"config-warning",children:U.warning}):null,t.jsx("div",{className:"config-fields",children:U.fields.map($=>$.visible&&!$.visible(O)?null:t.jsx(D0,{field:$,value:O[$.key],onChange:ae=>ee(U.key,$.key,ae)},$.key))}),U.key==="email"?t.jsx("div",{className:"config-actions",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:z==="mail",onClick:oe,children:[t.jsx(sx,{size:16}),i(z==="mail"?"config.email.testing":"config.email.test")]})}):null,U.key==="telegram"?t.jsxs("div",{className:"config-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:z==="webhook",onClick:E,children:[t.jsx(Yv,{size:16}),i(z==="webhook"?"config.telegram.settingWebhook":"config.telegram.setWebhook")]}),t.jsxs("span",{children:[t.jsx(ox,{size:14}),i("config.telegram.webhookHelp")]})]}):null]})]}):null]})}async function Kn(s){var o;if(typeof window>"u"||typeof document>"u")return!1;if((o=navigator.clipboard)!=null&&o.writeText&&window.isSecureContext)try{return await navigator.clipboard.writeText(s),!0}catch{}const i=document.createElement("textarea");i.value=s,i.setAttribute("readonly",""),i.style.position="fixed",i.style.left="-9999px",i.style.top="0",document.body.appendChild(i),i.select(),i.setSelectionRange(0,i.value.length);try{return document.execCommand("copy")}catch{return!1}finally{document.body.removeChild(i)}}function cd(s){return s===!0||s===1||s==="1"}function U0(s,i=""){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",icon:(s==null?void 0:s.icon)??"",notify_domain:(s==null?void 0:s.notify_domain)??"",handling_fee_fixed:(s==null?void 0:s.handling_fee_fixed)===null||(s==null?void 0:s.handling_fee_fixed)===void 0?"":String(Number(s.handling_fee_fixed)/100),handling_fee_percent:(s==null?void 0:s.handling_fee_percent)===null||(s==null?void 0:s.handling_fee_percent)===void 0?"":String(s.handling_fee_percent),payment:(s==null?void 0:s.payment)??i,config:{...(s==null?void 0:s.config)??{}}}}function R0(s){return{id:s.id,name:s.name,icon:s.icon||null,notify_domain:s.notify_domain||null,handling_fee_fixed:s.handling_fee_fixed===""?null:Math.round(Number(s.handling_fee_fixed)*100),handling_fee_percent:s.handling_fee_percent===""?null:s.handling_fee_percent,payment:s.payment,config:s.config}}function H0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[v,g]=f.useState({}),[y,j]=f.useState(!0),[z,Y]=f.useState(!1),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState({}),oe=f.useCallback(async()=>{j(!0),B("");try{const[M,re]=await Promise.all([n1(),l1()]);d(M),h(re),ie({})}catch(M){B(M instanceof Error?M.message:i("payment.loadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}oe()},[oe,s]);async function E(M){const re=(M==null?void 0:M.payment)??p[0]??"",A=U0(M,re);if(_(A),g({}),B(""),O(""),!!re){Y(!0);try{g(await dh(re,M==null?void 0:M.id))}catch(J){B(J instanceof Error?J.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function $(M){if(m){_({...m,payment:M,config:{}}),Y(!0),B("");try{g(await dh(M,m.id))}catch(re){B(re instanceof Error?re.message:i("payment.formLoadFailed"))}finally{Y(!1)}}}async function ae(M){var re,A;if(M.preventDefault(),!!m){K(!0),B(""),O("");try{await i1(R0(m)),_(null),(re=window.showToast)==null||re.call(window,i("payment.saveSuccess"),"success"),await oe()}catch(J){(A=window.showToast)==null||A.call(window,J instanceof Error?J.message:i("payment.saveFailed"),"error")}finally{K(!1)}}}async function me(M){var re;B(""),O("");try{await s1(M),await oe()}catch(A){(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:i("payment.toggleFailed"),"error")}}async function N(M){var re;(re=window.showConfirm)==null||re.call(window,{message:i("payment.deleteConfirm"),onConfirm:async()=>{var A,J;B(""),O("");try{await o1(M),(A=window.showToast)==null||A.call(window,i("payment.deleteSuccess"),"success"),await oe()}catch(x){(J=window.showToast)==null||J.call(window,x instanceof Error?x.message:i("payment.deleteFailed"),"error")}}})}async function R(M,re){var W;const A=M+re;if(A<0||A>=o.length)return;const J=[...o],x=J[M];J.splice(M,1),J.splice(A,0,x),d(J);try{await r1(J.map(H=>H.id)),await oe()}catch(H){(W=window.showToast)==null||W.call(window,H instanceof Error?H.message:i("payment.sortFailed"),"error"),await oe()}}async function te(M){var A;const re=await Kn(M);(A=window.showToast)==null||A.call(window,i(re?"payment.copied":"common.copyFailed"),re?"success":"error")}return t.jsxs(Yt,{title:i("payment.title"),subtitle:i("payment.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("payment.methods")}),t.jsx("p",{children:i("payment.methodsHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:oe,disabled:y,children:[t.jsx(kt,{size:16}),t.jsx("span",{children:i(y?"common.refreshing":"common.refresh")})]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>void E(),children:[t.jsx(Sa,{size:16}),t.jsx("span",{children:i("payment.add")})]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,y&&o.length===0?t.jsx(yt,{label:i("payment.loading")}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("payment.id")}),t.jsx("th",{children:i("payment.enabled")}),t.jsx("th",{children:i("payment.displayName")}),t.jsx("th",{children:i("payment.interface")}),t.jsx("th",{children:i("payment.notifyUrl")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((M,re)=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"sort-cell",children:[t.jsx("span",{children:M.id}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":i("payment.moveUp"),children:t.jsx(th,{size:13})}),t.jsx("button",{className:"mini-button",type:"button",onClick:()=>void R(re,1),disabled:re===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(eh,{size:13})})]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${cd(M.enable)?"active":""}`,type:"button",onClick:()=>void me(M.id),"aria-label":cd(M.enable)?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsxs("td",{children:[t.jsx("strong",{children:M.name}),M.icon?t.jsx("small",{children:M.icon}):null]}),t.jsx("td",{children:M.payment}),t.jsx("td",{children:t.jsxs("button",{className:"copy-value",type:"button",onClick:()=>void te(M.notify_url),children:[t.jsx("span",{children:M.notify_url}),t.jsx(os,{size:14})]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void E(M),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void N(M.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},M.id)),!y&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("payment.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-payment-list",children:[o.map((M,re)=>{const A=cd(M.enable),J=M.handling_fee_percent!==null&&M.handling_fee_percent!==""?`${M.handling_fee_percent}%`:"",x=M.handling_fee_fixed!==null?`${_a(M.handling_fee_fixed)} VND`:"",W=[J,x].filter(Boolean).join(" + ")||"No fees",H=ee[M.id],S=M.icon&&!H;return t.jsxs("div",{className:`payment-mobile-card ${A?"enabled":"disabled"}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",M.id]}),t.jsx("span",{className:"gateway-tag",children:M.payment})]}),t.jsx("button",{className:`admin-switch ${A?"active":""}`,type:"button",onClick:()=>void me(M.id),"aria-label":i(A?"common.enabled":"common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsxs("div",{className:"payment-info",children:[S?t.jsx("div",{className:"payment-avatar img-avatar",children:t.jsx("img",{src:M.icon,alt:M.name,onError:()=>{ie(Q=>({...Q,[M.id]:!0}))}})}):t.jsx("div",{className:"payment-avatar text-avatar",children:M.name.slice(0,2).toUpperCase()}),t.jsxs("div",{className:"payment-details",children:[t.jsx("h3",{children:M.name}),t.jsxs("p",{className:"fee-info",children:[t.jsx("span",{className:"fee-label",children:"Fee:"})," ",t.jsx("span",{className:"fee-badge",children:W})]})]})]}),t.jsxs("div",{className:"notify-url-section",children:[t.jsx("span",{className:"section-label",children:i("payment.notifyUrl")}),t.jsxs("button",{className:"copy-url-pill",type:"button",onClick:()=>void te(M.notify_url),title:"Click to copy",children:[t.jsx("span",{className:"url-text",children:M.notify_url}),t.jsx(os,{size:12,className:"copy-icon"})]})]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("div",{className:"sorting-controls",children:[t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,-1),disabled:re===0,"aria-label":i("payment.moveUp"),children:t.jsx(th,{size:14})}),t.jsx("button",{className:"mini-sort-btn",type:"button",onClick:()=>void R(re,1),disabled:re===o.length-1,"aria-label":i("payment.moveDown"),children:t.jsx(eh,{size:14})})]}),t.jsxs("div",{className:"action-buttons",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void E(M),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void N(M.id),children:[t.jsx(Gt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]})]},M.id)}),!y&&o.length===0?t.jsx("div",{className:"empty-state",children:i("payment.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsx("div",{className:"drawer-handle hide-on-desktop"}),t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("payment.edit"):i("payment.add")}),t.jsx("p",{children:i("payment.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ae,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.displayName")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:M=>_({...m,name:M.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.iconUrl")}),t.jsx("input",{className:"config-input",value:m.icon,onChange:M=>_({...m,icon:M.target.value}),placeholder:"https://example.com/icon.svg"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.notifyDomain")}),t.jsx("input",{className:"config-input",value:m.notify_domain,onChange:M=>_({...m,notify_domain:M.target.value}),placeholder:"https://pay.example.com"})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("payment.percentFee")}),t.jsx("input",{className:"config-input",min:"0.1",max:"100",step:"0.1",type:"number",value:m.handling_fee_percent,onChange:M=>_({...m,handling_fee_percent:M.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.fixedFee")}),t.jsx("input",{className:"config-input",min:"0",step:"1",type:"number",value:m.handling_fee_fixed,onChange:M=>_({...m,handling_fee_fixed:M.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("payment.interface")}),t.jsx("select",{className:"config-input",value:m.payment,onChange:M=>void $(M.target.value),children:p.map(M=>t.jsx("option",{value:M,children:M},M))})]}),z?t.jsx(yt,{label:i("payment.formLoading")}):null,z?null:Object.entries(v).map(([M,re])=>t.jsxs("label",{children:[t.jsx("span",{children:re.label}),t.jsx("input",{className:"config-input",placeholder:re.description,value:String(m.config[M]??re.value??""),onChange:A=>_({...m,config:{...m.config,[M]:A.target.value}})})]},M)),m.payment==="MGate"?t.jsx("div",{className:"config-warning",children:"MGate payment settings require merchant-provided gateway credentials."}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(ka,{size:16}),i(P?"payment.saving":"common.save")]})]})]})]})}):null]})}function L0(s){return s.images||"https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?auto=format&fit=crop&w=1400&q=80"}function q0(s,i){return i[s.field_name]??s.default_value??""}function B0(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,_]=f.useState(!0),[v,g]=f.useState(!1),[y,j]=f.useState(!1),[z,Y]=f.useState(null),[P,K]=f.useState(""),[C,B]=f.useState(""),U=f.useCallback(async()=>{_(!0),K("");try{d(await c1())}catch(E){K(E instanceof Error?E.message:i("theme.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}U()},[U,s]);async function O(E,$){h(null),g(!0),K(""),B("");try{const ae=await d1(E);h({key:E,theme:$,values:ae})}catch(ae){K(ae instanceof Error?ae.message:i("theme.configLoadFailed"))}finally{g(!1)}}async function ee(E){Y(E),K(""),B("");try{await px({frontend_theme:E}),B(i("theme.activateSuccess")),await U()}catch($){K($ instanceof Error?$.message:i("theme.activateFailed"))}finally{Y(null)}}async function ie(E){if(E.preventDefault(),!!p){j(!0),K(""),B("");try{await u1(p.key,p.values),h(null),B(i("theme.saveSuccess")),await U()}catch($){K($ instanceof Error?$.message:i("theme.saveFailed"))}finally{j(!1)}}}function oe(E,$){h(ae=>ae&&{...ae,values:{...ae.values,[E]:$}})}return t.jsxs(Yt,{title:i("theme.title"),subtitle:i("theme.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.available")}),t.jsx("p",{children:i("theme.availableHelp")})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:U,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]})]}),t.jsx("div",{className:"config-warning",children:i("theme.warning")}),P?t.jsx("div",{className:"form-error",children:P}):null,C?t.jsx("div",{className:"form-success",children:C}):null,m&&!o?t.jsx(yt,{label:i("theme.loading")}):null,o?t.jsx("section",{className:"theme-grid",children:Object.entries(o.themes).map(([E,$])=>{const ae=o.active===E;return t.jsxs("article",{className:"theme-card",children:[t.jsx("div",{className:"theme-media",style:{backgroundImage:`url(${L0($)})`},children:ae?t.jsxs("span",{className:"theme-active",children:[t.jsx(ix,{size:15}),i("theme.current")]}):null}),t.jsxs("div",{className:"theme-body",children:[t.jsxs("div",{children:[t.jsx("h3",{children:$.name||E}),t.jsx("p",{children:$.description||i("theme.noDescription")})]}),t.jsxs("small",{children:[i("theme.version"),": ",$.version||"-"]})]}),t.jsxs("div",{className:"theme-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void O(E,$),children:[t.jsx(Ov,{size:15}),i("theme.settings")]}),t.jsxs("button",{className:"primary-button",disabled:ae||z===E,type:"button",onClick:()=>void ee(E),children:[t.jsx(Tv,{size:15}),i(ae?"theme.current":z===E?"theme.activating":"theme.activate")]})]})]},E)})}):null,v?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsx("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:t.jsx(yt,{label:i("theme.configLoading")})})}):null,p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("theme.configure",{name:p.theme.name||p.key})}),t.jsx("p",{children:p.theme.description||i("theme.noDescription")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:ie,children:[(p.theme.configs??[]).map(E=>{const $=q0(E,p.values);return t.jsxs("label",{children:[t.jsx("span",{children:E.label}),E.description?t.jsx("p",{className:"field-description",children:E.description}):null,E.field_type==="select"?t.jsx("select",{className:"config-input",value:$,onChange:ae=>oe(E.field_name,ae.target.value),children:Object.entries(E.select_options??{}).map(([ae,me])=>t.jsx("option",{value:ae,children:me},ae))}):null,E.field_type==="textarea"?t.jsx("textarea",{className:"config-input",placeholder:E.placeholder,rows:5,value:$,onChange:ae=>oe(E.field_name,ae.target.value)}):null,E.field_type!=="select"&&E.field_type!=="textarea"?t.jsx("input",{className:"config-input",placeholder:E.placeholder,value:$,onChange:ae=>oe(E.field_name,ae.target.value)}):null]},E.field_name)}),(p.theme.configs??[]).length===0?t.jsx("div",{className:"empty-state",children:i("theme.noConfig")}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(ka,{size:16}),i(y?"theme.saving":"common.save")]})]})]})]})}):null]})}const Ed=[{value:"vmess",label:"VMess"},{value:"vless",label:"VLESS"},{value:"trojan",label:"Trojan"},{value:"shadowsocks",label:"Shadowsocks"},{value:"hysteria",label:"Hysteria"},{value:"tuic",label:"TUIC"},{value:"anytls",label:"AnyTLS"},{value:"zicnode",label:"ZicNode"}],G0=["tcp","kcp","ws","http","domainsocket","quic","grpc","httpupgrade","xhttp"],Y0=["tcp","ws","grpc","http","httpupgrade","xhttp"],Cx=["tcp","ws","grpc"],zx=["aes-128-gcm","aes-192-gcm","aes-256-gcm","chacha20-ietf-poly1305","2022-blake3-aes-128-gcm","2022-blake3-aes-256-gcm"],$0=["shadowsocks","vmess","vless","trojan","tuic","hysteria2","anytls"],vh=["anytls","hysteria2","trojan","tuic"],Q0=["tcp","ws","grpc","httpupgrade","xhttp"],X0=["chrome","firefox","safari","ios","android","edge","360","qq"],Gd=typeof window<"u"?window.location.origin:"",Z0="https://raw.githubusercontent.com/kutycma/zicnode/main/script/install.sh";function K0(s,i,o=""){return s[i]??o}function Xe(s,i,o=""){return String(K0(s,i,o))}function V0(s,i){const o=s[i];return o&&typeof o=="object"&&!Array.isArray(o)?o:{}}function J0(s){if(s&&typeof s=="object"&&!Array.isArray(s))return s;if(typeof s!="string"||!s.trim())return{};try{const i=JSON.parse(s);return i&&typeof i=="object"&&!Array.isArray(i)?i:{}}catch{return{}}}function F0(s){return typeof s=="string"?s.trim()!=="":Array.isArray(s)?s.length>0:s&&typeof s=="object"?Object.keys(s).length>0:!1}function W0(s){return s==="vmess"?"networkSettings":"network_settings"}function P0(s,i){const o=s==="vmess",d=s==="vless"||oi(s),p={header:{type:"http",request:{path:["/"],headers:{Host:["www.baidu.com","www.bing.com"]}},response:{}}};switch(i){case"tcp":return d?{acceptProxyProtocol:!1,...p}:p;case"ws":return d?{acceptProxyProtocol:!1,path:"/",headers:{Host:"xtls.github.io"}}:{path:"/",headers:{Host:"v2ray.com"}};case"grpc":return{serviceName:"GunService"};case"kcp":return o?{header:{type:"none"},seed:""}:{};case"http":return{acceptProxyProtocol:!1,path:"/",Host:"xtls.github.io"};case"httpupgrade":return{acceptProxyProtocol:!1,path:"/",host:"xtls.github.io"};case"xhttp":return{path:"/",host:"xtls.github.io",mode:"auto",extra:{}};default:return{}}}function oi(s){return s==="v2node"||s==="zicnode"}function I0(s){return!!s&&s!=="shadowsocks"}function ej(s){return s==="vless"||s==="vmess"}function tj(s){return s==="vless"||s==="anytls"}function aj(s){return["vless","vmess","trojan","shadowsocks"].includes(s)}function jh(s){return s==="shadowsocks"?["tcp","http"]:s==="trojan"?Cx:s==="vless"||s==="vmess"?Q0:[]}function nj(s){var i;return oi(s)?"ZicNode":((i=Ed.find(o=>o.value===s))==null?void 0:i.label)??s}function Md(s){return Array.isArray(s)?s.join(","):typeof s=="string"?s.trim():s==null?"":String(s).trim()}function lj(s){return s===!0||s===1||s==="1"||s==="true"}function ij(s){return Md(s).replace(/\/+$/,"")||Gd}function wh(s){return`'${s.replace(/'/g,"'\\''")}'`}function sj(s,i){const o=i.apiHost||Gd,d=i.apiKey||"TOKEN_MOI";return`wget -N ${Z0} && \\
bash install.sh --api-host ${wh(o)} --node-id ${s} --api-key ${wh(d)}`}function Nh(s){return(Array.isArray(s)?s:typeof s=="string"?s.split(",").map(o=>o.trim()):[]).map(o=>Number(o)).filter(o=>Number.isFinite(o))}function _h(s,i){if(i){const d=JSON.parse(JSON.stringify(i));return d.group_id=Nh(d.group_id),d.route_id=Nh(d.route_id),{_type:s,...d}}const o={_type:s,name:"",group_id:[],route_id:[],parent_id:null,host:"",port:"",server_port:"",tags:[],rate:1,show:0};switch(s){case"vmess":return{...o,tls:0,network:"tcp",networkSettings:{},tlsSettings:{},ruleSettings:{},dnsSettings:{}};case"trojan":return{...o,network:"tcp",network_settings:{},allow_insecure:0,server_name:""};case"shadowsocks":return{...o,cipher:"aes-128-gcm",obfs:null,obfs_settings:{}};case"hysteria":return{...o,version:2,up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",server_name:"",insecure:0};case"tuic":return{...o,server_name:"",insecure:0,disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr"};case"vless":return{...o,tls:0,flow:"",network:"tcp",tls_settings:{},network_settings:{},encryption:"",encryption_settings:{}};case"anytls":return{...o,server_name:"",insecure:0,padding_scheme:""};case"zicnode":case"v2node":return{...o,protocol:"",listen_ip:"",tls:0,tls_settings:{},flow:"",network:"tcp",network_settings:{},encryption:"",encryption_settings:{},disable_sni:0,udp_relay_mode:"native",zero_rtt_handshake:0,congestion_control:"bbr",cipher:"aes-128-gcm",up_mbps:0,down_mbps:0,obfs:null,obfs_password:"",padding_scheme:""};default:return o}}function Tx({initialValue:s,onCancel:i,onSave:o}){const{t:d}=Ze(),[p,h]=f.useState(()=>JSON.stringify(s??{},null,2)),[m,_]=f.useState(""),v=y=>{if(y.preventDefault(),!p.trim()){o({});return}try{const j=JSON.parse(p);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");o(j)}catch(j){_(j instanceof Error?j.message:"Invalid JSON")}},g=y=>{if(h(y),!y.trim()){_("");return}try{const j=JSON.parse(y);if(typeof j!="object"||j===null)throw new Error("Must be a JSON object {} or array []");_("")}catch(j){_(j instanceof Error?j.message:"Invalid JSON")}};return t.jsxs("form",{onSubmit:v,style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsxs("div",{children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:700,color:"var(--muted)"},children:d("node.jsonContent")}),m&&t.jsxs("span",{style:{color:"var(--rose)",fontSize:12,fontWeight:700},children:["⚠️ ",m]})]}),t.jsx("textarea",{className:"config-input mono",rows:12,style:{width:"100%",fontSize:13,fontFamily:"monospace",padding:"10px 12px",backgroundColor:"var(--surface-soft)",border:m?"1px solid var(--rose)":"1px solid var(--line)",borderRadius:10,color:"var(--text)",resize:"vertical"},value:p,onChange:y=>g(y.target.value),placeholder:'{\\n  "key": "value"\\n}',autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:i,children:d("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:!!m,children:d("common.confirm")})]})]})}function ze({label:s,required:i,actionText:o,onAction:d}){return t.jsxs("span",{style:{display:"inline-flex",gap:8,alignItems:"center",marginBottom:4},children:[t.jsxs("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:[s,i&&t.jsx("span",{style:{color:"var(--rose)",marginLeft:2},children:"*"})]}),o&&d&&t.jsx("span",{style:{color:"var(--accent)",fontWeight:800,cursor:"pointer",fontSize:13},onClick:p=>{p.preventDefault(),d()},children:o})]})}function oj({value:s,onChange:i,label:o}){const{t:d}=Ze(),[p,h]=f.useState("");return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8},children:[t.jsx(ze,{label:o}),t.jsxs("div",{className:"match-tags",style:{flexWrap:"wrap",gap:6},children:[s.map((m,_)=>t.jsxs("span",{className:"tag",onClick:()=>i(s.filter((v,g)=>g!==_)),style:{cursor:"pointer"},children:[m," ×"]},_)),t.jsx("input",{className:"config-input",style:{width:"100%",minHeight:38},value:p,placeholder:d("node.tagPlaceholder"),onChange:m=>h(m.target.value),onKeyDown:m=>{m.key==="Enter"&&p.trim()&&(m.preventDefault(),i([...s,p.trim()]),h(""))}})]})]})}function Sh({options:s,value:i,onChange:o,label:d,actionText:p,onAction:h}){const{t:m}=Ze(),[_,v]=f.useState(""),g=s.filter(j=>i.includes(j.id)),y=s.filter(j=>j.name.toLowerCase().includes(_.toLowerCase()));return t.jsxs("div",{style:{display:"flex",flexDirection:"column",marginTop:8,gap:4},children:[t.jsx(ze,{label:d,actionText:p,onAction:h}),g.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:4,marginBottom:4},children:g.map(j=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:11,padding:"2px 6px",display:"inline-flex",alignItems:"center",gap:4},onClick:()=>o(i.filter(z=>z!==j.id)),children:[j.name," ",t.jsx("span",{style:{color:"var(--muted)"},children:"×"})]},j.id))}),s.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:32,fontSize:12,padding:"4px 8px",margin:"0 0 4px 0"},placeholder:`${m("common.search")}...`,value:_,onChange:j=>v(j.target.value)}),t.jsxs("div",{style:{maxHeight:140,overflowY:"auto",border:"1px solid var(--line)",borderRadius:8,backgroundColor:"var(--surface-soft)",padding:"6px 8px",display:"flex",flexDirection:"column",gap:4},children:[y.map(j=>t.jsxs("label",{className:"checkbox-row",style:{fontSize:12,display:"flex",alignItems:"center",gap:6,cursor:"pointer",padding:"2px 0"},children:[t.jsx("input",{type:"checkbox",checked:i.includes(j.id),onChange:z=>o(z.target.checked?[...i,j.id]:i.filter(Y=>Y!==j.id))}),t.jsx("span",{children:j.name})]},j.id)),y.length===0&&t.jsx("span",{style:{color:"var(--muted)",fontSize:12,padding:"4px 0"},children:s.length===0?m("node.noGroupsAvailable"):m("node.noResultsFound")})]})]})}function Va({label:s,checked:i,onChange:o}){return t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:8},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800,color:"var(--text)"},children:s}),t.jsxs("label",{className:"switch-shell",style:{position:"relative",display:"inline-block",width:44,height:24},children:[t.jsx("input",{type:"checkbox",style:{opacity:0,width:0,height:0},checked:i,onChange:d=>o(d.target.checked)}),t.jsx("span",{style:{position:"absolute",cursor:"pointer",inset:0,backgroundColor:i?"var(--accent)":"var(--switch-bg)",borderRadius:24,transition:"0.2s"},children:t.jsx("span",{style:{position:"absolute",content:'""',height:18,width:18,left:i?22:4,bottom:3,backgroundColor:"white",borderRadius:"50%",transition:"0.2s",boxShadow:"0 1px 3px rgba(0,0,0,0.2)"}})})]})]})}function rj({initialValue:s,isSnakeCase:i,tlsMode:o,nodeType:d,onCancel:p,onSave:h}){const{t:m}=Ze(),_=i?"server_name":"serverName",v=i?"allow_insecure":"allowInsecure",g=oi(d),[y,j]=f.useState(String((s==null?void 0:s[_])??"")),[z,Y]=f.useState(String((s==null?void 0:s.dest)??"")),[P,K]=f.useState(String((s==null?void 0:s.server_port)??"443")),[C,B]=f.useState(String((s==null?void 0:s.xver)??"0")),[U,O]=f.useState(String((s==null?void 0:s.private_key)??"")),[ee,ie]=f.useState(String((s==null?void 0:s.public_key)??"")),[oe,E]=f.useState(String((s==null?void 0:s.short_id)??"")),[$,ae]=f.useState(String((s==null?void 0:s.fingerprint)??"chrome")),[me,N]=f.useState(String((s==null?void 0:s.cert_mode)??"self")),[R,te]=f.useState(String((s==null?void 0:s.provider)??"")),[M,re]=f.useState(String((s==null?void 0:s.dns_env)??"")),[A,J]=f.useState(String((s==null?void 0:s.cert_file)??"")),[x,W]=f.useState(String((s==null?void 0:s.key_file)??"")),[H,S]=f.useState(()=>{const we=s==null?void 0:s.reject_unknown_sni;return we===1||we===!0||String(we)==="1"||String(we)==="true"}),[Q,de]=f.useState(String((s==null?void 0:s.ech)??"")),[ue,Se]=f.useState(String((s==null?void 0:s.ech_server_name)??"")),[ke,Oe]=f.useState(String((s==null?void 0:s.ech_key)??"")),[nt,Ge]=f.useState(String((s==null?void 0:s.ech_config)??"")),[Ke,Ct]=f.useState(()=>{const we=s==null?void 0:s[v];return we===1||we===!0||String(we)==="1"||String(we)==="true"}),Nt=we=>{we.preventDefault();const Le={...s??{},[_]:y,[v]:i?Ke?1:0:Ke,fingerprint:$};o===2&&(Le.dest=z,Le.server_port=P,Le.xver=Number(C)||0,Le.private_key=U,Le.public_key=ee,Le.short_id=oe,Le.ech=Q,Le.ech_server_name=ue,Le.ech_key=ke,Le.ech_config=nt),o===1&&g&&(Le.cert_mode=me,Le.provider=R,Le.dns_env=M,Le.cert_file=A,Le.key_file=x,Le.reject_unknown_sni=H?"1":"0"),h(Le)};return t.jsxs("form",{onSubmit:Nt,style:{display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:m("node.sni")}),t.jsx("input",{className:"config-input",value:y,onChange:we=>j(we.target.value),placeholder:m(o===2?"node.realitySniHelp":"node.serverNameHelp")})]}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dest")}),t.jsx("input",{className:"config-input",value:z,onChange:we=>Y(we.target.value),placeholder:m("node.destHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.servicePort")}),t.jsx("input",{className:"config-input",value:P,onChange:we=>K(we.target.value),placeholder:"443"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.proxyProtocol")}),t.jsxs("select",{className:"config-input",value:C,onChange:we=>B(we.target.value),children:[t.jsx("option",{value:"0",children:"0"}),t.jsx("option",{value:"1",children:"1"}),t.jsx("option",{value:"2",children:"2"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.privateKey")}),t.jsx("input",{className:"config-input",value:U,onChange:we=>O(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.publicKey")}),t.jsx("input",{className:"config-input",value:ee,onChange:we=>ie(we.target.value),placeholder:m("node.autoGenHelp")})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.shortId")}),t.jsx("input",{className:"config-input",value:oe,onChange:we=>E(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.fingerprint")}),t.jsx("select",{className:"config-input",value:$,onChange:we=>ae(we.target.value),children:X0.map(we=>t.jsx("option",{value:we,children:we},we))})]}),o===1&&g?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.certMode")}),t.jsxs("select",{className:"config-input",value:me,onChange:we=>N(we.target.value),children:[t.jsx("option",{value:"self",children:m("node.certModeSelf")}),t.jsx("option",{value:"http",children:m("node.certModeHttp")}),t.jsx("option",{value:"dns",children:m("node.certModeDns")}),t.jsx("option",{value:"none",children:m("node.certModeNone")})]})]}),me==="dns"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dnsProvider")}),t.jsx("input",{className:"config-input",value:R,onChange:we=>te(we.target.value),placeholder:"cloudflare"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.dnsEnv")}),t.jsx("input",{className:"config-input",value:M,onChange:we=>re(we.target.value),placeholder:"CF_DNS_API_TOKEN=xxxx"})]})]}):null,me!=="none"?t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.certFile")}),t.jsx("input",{className:"config-input",value:A,onChange:we=>J(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.keyFile")}),t.jsx("input",{className:"config-input",value:x,onChange:we=>W(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null,t.jsx(Va,{label:m("node.rejectUnknownSni"),checked:H,onChange:S})]}):null,t.jsx(Va,{label:m("node.allowInsecure"),checked:Ke,onChange:Ct}),o===2?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.ech")}),t.jsxs("select",{className:"config-input",value:Q,onChange:we=>de(we.target.value),children:[t.jsx("option",{value:"",children:m("node.echNone")}),t.jsx("option",{value:"cloudflare",children:"Cloudflare"}),t.jsx("option",{value:"custom",children:m("node.echCustom")})]})]}),Q==="cloudflare"?t.jsx("div",{className:"config-warning",children:m("node.echCloudflareHelp")}):null,Q==="custom"?t.jsxs(t.Fragment,{children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echServerName")}),t.jsx("input",{className:"config-input",value:ue,onChange:we=>Se(we.target.value)})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echKey")}),t.jsx("input",{className:"config-input",value:ke,onChange:we=>Oe(we.target.value),placeholder:m("node.autoGenHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:m("node.echConfig")}),t.jsx("input",{className:"config-input",value:nt,onChange:we=>Ge(we.target.value),placeholder:m("node.autoGenHelp")})]})]}):null]}):null,t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:p,children:m("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",children:m("common.confirm")})]})]})}function cj({draft:s,set:i,groups:o,routes:d,nodes:p,onOpenJson:h,onAddGroup:m,onOpenTransportConfig:_}){const{t:v}=Ze(),g=String(s._type),y=oi(g),j=Xe(s,"network","tcp");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:v("node.basicSettings")}),t.jsxs("div",{className:"form-split",style:{gridTemplateColumns:"3fr 1fr"},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.name"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"name"),onChange:z=>i("name",z.target.value),placeholder:v("node.namePlaceholder")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.rate"),required:!0}),t.jsx("input",{className:"config-input",type:"number",step:"0.1",min:"0",required:!0,value:Xe(s,"rate","1"),onChange:z=>i("rate",Number(z.target.value))})]})]}),t.jsx(oj,{value:s.tags??[],onChange:z=>i("tags",z),label:v("node.tags")}),t.jsx(Sh,{options:o.map(z=>({id:z.id,name:z.name})),value:s.group_id??[],onChange:z=>i("group_id",z),label:v("node.permissionGroups"),actionText:v("node.addGroup"),onAction:m}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.address"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"host"),onChange:z=>i("host",z.target.value),placeholder:v("node.addressPlaceholder")})]}),y?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.listenIp")}),t.jsx("input",{className:"config-input",value:Xe(s,"listen_ip"),onChange:z=>i("listen_ip",z.target.value),placeholder:"0.0.0.0"})]}):["vmess","vless"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?v("node.editConfig"):void 0,onAction:()=>{const z=g==="vmess"?"tlsSettings":"tls_settings";h(v("node.connectionSecurityConfig"),z)}}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls","0"),onChange:z=>{const Y=Number(z.target.value);i("tls",Y);const P=g==="vmess"?"tlsSettings":"tls_settings";Y!==0&&!s[P]&&i(P,{})},children:[t.jsx("option",{value:"0",children:v("node.none")}),t.jsx("option",{value:"1",children:v("node.useTls")}),g!=="vmess"&&t.jsx("option",{value:"2",children:v("node.reality")})]})]}):["trojan","hysteria","tuic","anytls"].includes(g)?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.sni")}),t.jsx("input",{className:"config-input",value:Xe(s,"server_name"),onChange:z=>i("server_name",z.target.value),placeholder:v("node.sniHelp")})]}):null]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.connectionPort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"port"),onChange:z=>i("port",z.target.value),placeholder:"443"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.servicePort"),required:!0}),t.jsx("input",{className:"config-input",required:!0,value:Xe(s,"server_port"),onChange:z=>i("server_port",z.target.value),placeholder:"443"})]})]}),y?t.jsx(gj,{draft:s,set:i,onOpenJson:h,onOpenTransportConfig:_,onOpenSecurityConfig:()=>h(v("node.connectionSecurityConfig"),"tls_settings")}):null,["vmess","trojan","vless"].includes(g)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:v("node.transportProtocol"),required:!0,actionText:v("node.editConfig"),onAction:_}),t.jsxs("select",{className:"config-input",value:j,onChange:z=>{i("network",z.target.value);const Y=g==="vmess"?"networkSettings":"network_settings";s[Y]||i(Y,{})},children:[g==="vmess"&&G0.map(z=>t.jsx("option",{value:z,children:z},z)),g==="trojan"&&Cx.map(z=>t.jsx("option",{value:z,children:z},z)),g==="vless"&&Y0.map(z=>t.jsx("option",{value:z,children:z},z))]})]}):null,g==="trojan"&&t.jsx(uj,{draft:s,set:i}),g==="shadowsocks"&&t.jsx(pj,{draft:s,set:i,onOpenJson:h}),g==="hysteria"&&t.jsx(mj,{draft:s,set:i}),g==="tuic"&&t.jsx(fj,{draft:s,set:i}),g==="vless"&&t.jsx(hj,{draft:s,set:i,onOpenJson:h}),g==="anytls"&&t.jsx(xj,{draft:s,set:i,onOpenJson:h}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:v("node.parentNode")}),t.jsxs("select",{className:"config-input",value:s.parent_id?String(s.parent_id):"",onChange:z=>i("parent_id",z.target.value?Number(z.target.value):null),children:[t.jsx("option",{value:"",children:v("node.none")}),p.filter(z=>z.id!==s.id&&!z.parent_id).map(z=>t.jsx("option",{value:z.id,children:z.name},z.id))]})]}),t.jsx(Sh,{options:d.map(z=>({id:z.id,name:z.remarks})),value:s.route_id??[],onChange:z=>i("route_id",z),label:v("node.routingGroups")})]})]})}function dj({draft:s,set:i,onCancel:o,onSave:d}){const p=String(s._type),h=String(s.network??"tcp"),m=W0(p),_=s[m],v=F0(_)?J0(_):P0(p,h);return t.jsx(Tx,{initialValue:v,onCancel:o,onSave:g=>{i(m,g),d()}})}function uj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.trojanConfig")}),t.jsx(Va,{label:o("node.allowInsecure"),checked:s.allow_insecure===1,onChange:d=>i("allow_insecure",d?1:0)})]})}function pj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze(),p=V0(s,"obfs_settings");return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.shadowsocksConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.encryptionMethod"),required:!0}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:h=>i("cipher",h.target.value),children:zx.map(h=>t.jsx("option",{value:h,children:h},h))})]}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:d("node.obfs"),actionText:s.obfs==="http"?d("node.editConfig"):void 0,onAction:()=>o(d("node.obfs"),"obfs_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:h=>i("obfs",h.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"http",children:"HTTP"})]})]}),s.obfs==="http"&&t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.obfsHost")}),t.jsx("input",{className:"config-input",value:String(p.host??""),onChange:h=>i("obfs_settings",{...p,host:h.target.value}),placeholder:"www.example.com"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.obfsPath")}),t.jsx("input",{className:"config-input",value:String(p.path??""),onChange:h=>i("obfs_settings",{...p,path:h.target.value}),placeholder:"/"})]})]})]})}function mj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.hysteriaConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.version"),required:!0}),t.jsxs("select",{className:"config-input",value:Xe(s,"version","2"),onChange:d=>i("version",Number(d.target.value)),children:[t.jsx("option",{value:"1",children:"Hysteria 1"}),t.jsx("option",{value:"2",children:"Hysteria 2"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:d=>i("up_mbps",Number(d.target.value)),placeholder:o("node.upMbpsHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:d=>i("down_mbps",Number(d.target.value)),placeholder:o("node.downMbpsHelp")})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.obfsMethod")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs"),onChange:d=>i("obfs",d.target.value||null),placeholder:o("node.obfsMethodHelp")})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:d=>i("obfs_password",d.target.value),placeholder:o("node.autoGenHelp")})]})]}),t.jsx(Va,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)})]})}function fj({draft:s,set:i}){const{t:o}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:o("node.tuicConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:d=>i("udp_relay_mode",d.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:o("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:d=>i("congestion_control",d.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Va,{label:o("node.allowInsecure"),checked:s.insecure===1,onChange:d=>i("insecure",d?1:0)}),t.jsx(Va,{label:o("node.disableSni"),checked:s.disable_sni===1,onChange:d=>i("disable_sni",d?1:0)}),t.jsx(Va,{label:o("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:d=>i("zero_rtt_handshake",d?1:0)})]})}function hj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:p=>i("flow",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.encryption"),actionText:Xe(s,"encryption")?d("node.editConfig"):void 0,onAction:()=>o(d("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:p=>i("encryption",p.target.value||null),children:[t.jsx("option",{value:"",children:d("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]})]})]})}function xj({draft:s,set:i,onOpenJson:o}){const{t:d}=Ze();return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:d("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:d("node.paddingScheme"),actionText:d("node.editConfig"),onAction:()=>o(d("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]}),t.jsx(Va,{label:d("node.allowInsecure"),checked:s.insecure===1,onChange:p=>i("insecure",p?1:0)})]})}function gj({draft:s,set:i,onOpenJson:o,onOpenTransportConfig:d,onOpenSecurityConfig:p}){const{t:h}=Ze(),m=Xe(s,"protocol"),_=jh(m),v=g=>{if(i("protocol",g),!g){i("tls",0),i("network","tcp");return}vh.includes(g)?(i("tls",1),s.tls_settings||i("tls_settings",{})):g==="shadowsocks"?i("tls",0):g==="vmess"&&Number(s.tls??0)===2&&i("tls",1);const y=jh(g);(y.length===0||!y.includes(Xe(s,"network","tcp")))&&i("network","tcp"),g!=="vless"&&(i("flow",""),i("encryption",""),i("encryption_settings",{})),g!=="hysteria2"&&(i("obfs",null),i("obfs_password",""),i("up_mbps",0),i("down_mbps",0)),g!=="anytls"&&i("padding_scheme","")};return t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.zicnodeConfig")}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.nodeProtocol"),required:!0}),t.jsxs("select",{className:"config-input",value:m,onChange:g=>v(g.target.value),children:[t.jsx("option",{value:"",children:h("node.selectNodeProtocol")}),$0.map(g=>t.jsx("option",{value:g,children:g},g))]})]}),m?t.jsxs(t.Fragment,{children:[I0(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.connectionSecurity"),actionText:Number(s.tls??0)!==0?h("node.editConfig"):void 0,onAction:p}),t.jsxs("select",{className:"config-input",value:Xe(s,"tls",vh.includes(m)?"1":"0"),onChange:g=>{const y=Number(g.target.value);i("tls",y),y!==0&&!s.tls_settings&&i("tls_settings",{})},children:[ej(m)?t.jsx("option",{value:"0",children:h("node.none")}):null,t.jsx("option",{value:"1",children:h("node.useTls")}),tj(m)?t.jsx("option",{value:"2",children:h("node.reality")}):null]})]}):null,aj(m)?t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.transportProtocol"),required:!0,actionText:h("node.editConfig"),onAction:d}),t.jsx("select",{className:"config-input",value:_.includes(Xe(s,"network","tcp"))?Xe(s,"network","tcp"):"tcp",onChange:g=>{i("network",g.target.value),s.network_settings||i("network_settings",{})},children:_.map(g=>t.jsx("option",{value:g,children:g},g))})]}):null]}):null,m==="vless"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.vlessConfig")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.encryption"),actionText:Xe(s,"encryption")?h("node.editConfig"):void 0,onAction:()=>o(h("node.encryption"),"encryption_settings")}),t.jsxs("select",{className:"config-input",value:Xe(s,"encryption"),onChange:g=>i("encryption",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"mlkem768x25519plus",children:"mlkem768x25519plus"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.flow")}),t.jsxs("select",{className:"config-input",value:Xe(s,"flow"),onChange:g=>i("flow",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"xtls-rprx-vision",children:"xtls-rprx-vision"})]})]})]})]}),m==="shadowsocks"&&t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.encryptionMethod")}),t.jsx("select",{className:"config-input",value:Xe(s,"cipher","aes-128-gcm"),onChange:g=>i("cipher",g.target.value),children:zx.map(g=>t.jsx("option",{value:g,children:g},g))})]}),m==="hysteria2"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.hysteriaConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.upMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"up_mbps","0"),onChange:g=>i("up_mbps",Number(g.target.value)),placeholder:"0 = BBR"})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.downMbps")}),t.jsx("input",{className:"config-input",type:"number",value:Xe(s,"down_mbps","0"),onChange:g=>i("down_mbps",Number(g.target.value)),placeholder:"0 = BBR"})]})]}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.obfsMethod")}),t.jsxs("select",{className:"config-input",value:Xe(s,"obfs"),onChange:g=>i("obfs",g.target.value||null),children:[t.jsx("option",{value:"",children:h("node.none")}),t.jsx("option",{value:"salamander",children:"salamander"})]})]}),Xe(s,"obfs")==="salamander"?t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.obfsPassword")}),t.jsx("input",{className:"config-input",value:Xe(s,"obfs_password"),onChange:g=>i("obfs_password",g.target.value),placeholder:h("node.autoGenHelp")})]}):null]})]}),m==="tuic"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.tuicConfig")}),t.jsxs("div",{className:"form-split",style:{marginTop:8},children:[t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.udpRelayMode")}),t.jsxs("select",{className:"config-input",value:Xe(s,"udp_relay_mode","native"),onChange:g=>i("udp_relay_mode",g.target.value),children:[t.jsx("option",{value:"native",children:"native"}),t.jsx("option",{value:"quic",children:"quic"})]})]}),t.jsxs("label",{style:{display:"block"},children:[t.jsx(ze,{label:h("node.congestionControl")}),t.jsxs("select",{className:"config-input",value:Xe(s,"congestion_control","bbr"),onChange:g=>i("congestion_control",g.target.value),children:[t.jsx("option",{value:"bbr",children:"bbr"}),t.jsx("option",{value:"cubic",children:"cubic"}),t.jsx("option",{value:"new_reno",children:"new_reno"})]})]})]}),t.jsx(Va,{label:h("node.disableSni"),checked:s.disable_sni===1,onChange:g=>i("disable_sni",g?1:0)}),t.jsx(Va,{label:h("node.enable0rtt"),checked:s.zero_rtt_handshake===1,onChange:g=>i("zero_rtt_handshake",g?1:0)})]}),m==="anytls"&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"form-section-title",children:h("node.anytlsConfig")}),t.jsxs("label",{style:{display:"block",marginTop:8},children:[t.jsx(ze,{label:h("node.paddingScheme"),actionText:h("node.editConfig"),onAction:()=>o(h("node.paddingScheme"),"padding_scheme")}),t.jsx("input",{className:"config-input",style:{width:"100%"},readOnly:!0,value:typeof s.padding_scheme=="string"?s.padding_scheme:s.padding_scheme?JSON.stringify(s.padding_scheme):"",placeholder:'e.g. [{"min":1,"max":100}]'})]})]})]})}const kh={vmess:Uv,vless:Qv,trojan:Sd,shadowsocks:Ho,hysteria:Mv,tuic:xv,anytls:us,v2node:lh,zicnode:lh},bj={v2node:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},zicnode:{bg:"#dc2626",text:"#ffffff",rowBg:"rgba(220, 38, 38, 0.10)",border:"rgba(220, 38, 38, 0.35)"},shadowsocks:{bg:"#15803d",text:"#ffffff",rowBg:"rgba(21, 128, 61, 0.10)",border:"rgba(21, 128, 61, 0.32)"},vmess:{bg:"#db2777",text:"#ffffff",rowBg:"rgba(219, 39, 119, 0.10)",border:"rgba(219, 39, 119, 0.32)"},trojan:{bg:"#d97706",text:"#ffffff",rowBg:"rgba(217, 119, 6, 0.11)",border:"rgba(217, 119, 6, 0.34)"},hysteria:{bg:"#374151",text:"#ffffff",rowBg:"rgba(55, 65, 81, 0.11)",border:"rgba(107, 114, 128, 0.36)"},tuic:{bg:"#7c3aed",text:"#ffffff",rowBg:"rgba(124, 58, 237, 0.11)",border:"rgba(124, 58, 237, 0.34)"},vless:{bg:"#2563eb",text:"#ffffff",rowBg:"rgba(37, 99, 235, 0.10)",border:"rgba(37, 99, 235, 0.34)"},anytls:{bg:"#ea580c",text:"#ffffff",rowBg:"rgba(234, 88, 12, 0.11)",border:"rgba(234, 88, 12, 0.34)"}},yj={bg:"var(--surface-soft)",text:"var(--muted)",rowBg:"var(--surface-soft)",border:"var(--line)"};function Gn(s){return bj[s]??yj}function vj({draft:s,config:i,onCopy:o,t:d}){const p=Number(s.id??0),h=p>0?sj(p,i):"",m=!i.apiKey;return t.jsxs("div",{className:"node-install-panel",children:[t.jsxs("div",{className:"node-install-head",children:[t.jsx("strong",{children:d("node.quickInstallTitle")}),t.jsx("span",{children:d("node.quickInstallHelp")})]}),p>0?t.jsxs(t.Fragment,{children:[t.jsx("pre",{className:"node-install-command",children:h}),t.jsxs("div",{className:"node-install-actions",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>o(h),children:[t.jsx(os,{size:15}),d("node.copyInstallCommand")]}),m?t.jsx("span",{className:"node-install-warning",children:d("node.installMissingConfig")}):null]})]}):t.jsx("div",{className:"node-install-warning",children:d("node.installSaveFirst")})]})}function jj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState([]),[v,g]=f.useState(null),[y,j]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState(1),[oe,E]=f.useState(10),[$,ae]=f.useState(!1),[me,N]=f.useState({}),[R,te]=f.useState({apiHost:Gd,apiKey:""}),[M,re]=f.useState(!1),[A,J]=f.useState(""),[x,W]=f.useState(null),[H,S]=f.useState(null),[Q,de]=f.useState(null),ue=(L,ce)=>{L.dataTransfer.effectAllowed="move",S(ce)},Se=(L,ce)=>{if(L.preventDefault(),H===null||H===ce)return;const se=[...o],De=se[H];se.splice(H,1),se.splice(ce,0,De),S(ce),d(se)},ke=()=>{S(null)},Oe=(L,ce)=>{$&&de(ce)},nt=L=>{if(!$||Q===null)return;L.cancelable&&L.preventDefault();const ce=L.touches[0],se=document.elementFromPoint(ce.clientX,ce.clientY);if(!se)return;const De=se.closest(".mobile-node-card");if(!De)return;const Ee=De.getAttribute("data-index");if(Ee===null)return;const Ie=Number(Ee);if(Ie!==Q&&Ie>=0&&Ie<o.length){const lt=[...o],it=lt[Q];lt.splice(Q,1),lt.splice(Ie,0,it),de(Ie),d(lt)}},Ge=()=>{de(null)};f.useEffect(()=>{ie(1)},[A,oe]);const Ke=o.filter(L=>{const ce=A.toLowerCase().trim();return ce?L.name.toLowerCase().includes(ce)||L.host.toLowerCase().includes(ce)||String(L.id).includes(ce)||L.type.toLowerCase().includes(ce):!0}),Ct=Math.ceil(Ke.length/oe),Nt=Ke.slice((ee-1)*oe,ee*oe);function we(L,ce){return ce<=7?Array.from({length:ce},(se,De)=>De+1):L<=4?[1,2,3,4,5,"...",ce]:L>=ce-3?[1,"...",ce-4,ce-3,ce-2,ce-1,ce]:[1,"...",L-1,L,L+1,"...",ce]}const Le=we(ee,Ct),na=async()=>{var L,ce;K(!0),B(""),O("");try{const se={};o.forEach((De,Ee)=>{se[De.type]||(se[De.type]={}),se[De.type][String(De.id)]=Ee+1}),await d0(se),(L=window.showToast)==null||L.call(window,i("node.saveSortSuccess"),"success"),ae(!1),await Te()}catch(se){B(se instanceof Error?se.message:i("node.saveSortFailed")),(ce=window.showToast)==null||ce.call(window,se instanceof Error?se.message:i("node.saveSortFailed"),"error")}finally{K(!1)}},$t=async()=>{ae(!1),await je()},pa=()=>Ke.length===0?null:t.jsxs("div",{className:"node-pagination",children:[t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===1,onClick:()=>ie(L=>Math.max(L-1,1)),children:"<"}),Le.map((L,ce)=>L==="..."?t.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${ce}`):t.jsx("button",{type:"button",className:`pagination-btn num-btn ${ee===L?"active":""}`,onClick:()=>ie(Number(L)),children:L},`page-${L}`)),t.jsx("button",{className:"pagination-btn arrow-btn",type:"button",disabled:ee===Ct||Ct===0,onClick:()=>ie(L=>Math.min(L+1,Ct)),children:">"}),t.jsx("div",{className:"pagination-size-select-wrapper",children:t.jsxs("select",{className:"pagination-size-select",value:oe,onChange:L=>E(Number(L.target.value)),children:[t.jsxs("option",{value:10,children:["10 / ",i("common.perPage")]}),t.jsxs("option",{value:20,children:["20 / ",i("common.perPage")]}),t.jsxs("option",{value:50,children:["50 / ",i("common.perPage")]}),t.jsxs("option",{value:100,children:["100 / ",i("common.perPage")]})]})})]}),[xt,Zt]=f.useState(null),[Pt,zt]=f.useState(!1),[ma,T]=f.useState(""),[be,qe]=f.useState(!1),[ye,dt]=f.useState(!1);async function G(L){var se,De;L.preventDefault();const ce=ma.trim();if(!(!ce||!v)){qe(!0),B(""),O("");try{await mx({name:ce});const Ee=await ds();h(Ee);const Ie=Ee.filter(lt=>lt.name===ce).sort((lt,it)=>it.id-lt.id)[0];if(Ie){const lt=v.group_id??[];lt.includes(Ie.id)||fa("group_id",[...lt,Ie.id])}T(""),zt(!1),(se=window.showToast)==null||se.call(window,i("node.groupCreateSuccess"),"success")}catch(Ee){B(Ee instanceof Error?Ee.message:i("node.groupCreateFailed")),(De=window.showToast)==null||De.call(window,Ee instanceof Error?Ee.message:i("node.groupCreateFailed"),"error")}finally{qe(!1)}}}const Ne=(L,ce)=>{if(!v)return;let se=v[ce];if(typeof se=="string"&&se.trim())try{se=JSON.parse(se)}catch{}Zt({title:L,key:ce,value:se&&typeof se=="object"?se:{}})},je=f.useCallback(async()=>{var L,ce,se;Y(!0),B("");try{const[De,Ee,Ie,lt]=await Promise.all([fh(),ds(),hx(),ux()]);d(De.data),h(Ee),_(Ie),te({apiHost:ij((L=lt.site)==null?void 0:L.app_url),apiKey:Md((ce=lt.server)==null?void 0:ce.server_token)}),re(lj((se=lt.subscribe)==null?void 0:se.device_hwid_enable))}catch(De){B(De instanceof Error?De.message:i("knowledge.loadFailed"))}finally{Y(!1)}},[]),Te=f.useCallback(async()=>{try{const L=await fh();d(L.data)}catch(L){console.error("Refresh nodes failed",L)}},[]);async function Pe(L){var se;const ce=await Kn(L);(se=window.showToast)==null||se.call(window,i(ce?"node.installCopied":"common.copyFailed"),ce?"success":"error")}f.useEffect(()=>{if(!Ot()){s.replace("/login");return}je()},[je,s]);function Ve(L){g(_h(L)),j(null),B(""),O("")}function Ye(L){g(_h(L.type,L)),B(""),O("")}function Re(L){!M||Number(L.online??0)<=0||s.push(`/device?node_type=${encodeURIComponent(L.type)}&node_id=${encodeURIComponent(String(L.id))}`)}function ut(L,ce){const se=Number(L.online??0),De=M&&se>0,Ee=`${ce==="mobile"?"mobile-badge-pill":"online-badge"}${De?" online-badge-link":""}`,Ie=ce==="mobile"?12:13,lt={...ce==="mobile"?{marginRight:4}:{},color:se>0?"#10b981":"var(--muted)",opacity:se>0?1:.6},it=t.jsxs(t.Fragment,{children:[t.jsx(rx,{size:Ie,style:lt}),se]});return De?t.jsx("button",{className:Ee,type:"button",title:i("node.viewOnlineDevices"),onClick:()=>Re(L),children:it}):t.jsx("span",{className:Ee,children:it})}async function vl(L){var Ie,lt,it;if(L.preventDefault(),!v)return;K(!0),B(""),O("");const ce=String(v._type),se={...v};if(oi(ce)&&!Md(se.protocol)){B(i("node.protocolRequired")),(Ie=window.showToast)==null||Ie.call(window,i("node.protocolRequired"),"error"),K(!1);return}for(const st of["_type","type","created_at","updated_at","online","last_check_at","cache_key","available_status"])delete se[st];if(se.padding_scheme!==void 0&&se.padding_scheme!==null&&typeof se.padding_scheme!="string"&&(se.padding_scheme=JSON.stringify(se.padding_scheme)),se.padding_scheme)try{const st=JSON.parse(String(se.padding_scheme));if(typeof st!="object"||st===null)throw new Error("Invalid JSON array or object")}catch(st){B("Invalid Padding Scheme configuration: "+(st instanceof Error?st.message:"JSON error")),K(!1);return}const De=["flow","encryption","server_name","obfs","obfs_password","parent_id","listen_ip","padding_scheme"];for(const st of De)(se[st]===""||se[st]===null||se[st]===void 0)&&delete se[st];const Ee=["networkSettings","tlsSettings","ruleSettings","dnsSettings","network_settings","tls_settings","obfs_settings","encryption_settings"];for(const st of Ee){const w=se[st];(w==null||typeof w=="object"&&Object.keys(w).length===0)&&delete se[st]}se.port!==void 0&&(se.port=Number(se.port)),se.server_port!==void 0&&(se.server_port=Number(se.server_port)),se.tls!==void 0&&(se.tls=Number(se.tls)),se.rate!==void 0&&(se.rate=Number(se.rate));try{await s0(ce,se),g(null),(lt=window.showToast)==null||lt.call(window,i("node.saveSuccess"),"success"),await Te()}catch(st){B(st instanceof Error?st.message:i("node.saveFailed")),(it=window.showToast)==null||it.call(window,st instanceof Error?st.message:i("node.saveFailed"),"error")}finally{K(!1)}}async function Fn(L){const ce=[...o];d(se=>se.map(De=>De.id===L.id&&De.type===L.type?{...De,show:L.show?0:1}:De));try{await r0(L.type,L.id,L.show?0:1),await Te()}catch(se){d(ce),B(se instanceof Error?se.message:i("node.updateFailed"))}}async function Wn(L){var ce,se;try{await c0(L.type,L.id),(ce=window.showToast)==null||ce.call(window,i("node.copySuccess"),"success"),await Te()}catch(De){B(De instanceof Error?De.message:i("node.copyFailed")),(se=window.showToast)==null||se.call(window,De instanceof Error?De.message:i("node.copyFailed"),"error")}}async function Ga(L){var ce;(ce=window.showConfirm)==null||ce.call(window,{message:i("node.deleteConfirm",{name:L.name}),onConfirm:async()=>{var De,Ee;const se=[...o];d(Ie=>Ie.filter(lt=>!(lt.id===L.id&&lt.type===L.type))),B("");try{await o0(L.type,L.id),(De=window.showToast)==null||De.call(window,i("node.deleteSuccess"),"success"),await Te()}catch(Ie){d(se),B(Ie instanceof Error?Ie.message:i("node.deleteFailed")),(Ee=window.showToast)==null||Ee.call(window,Ie instanceof Error?Ie.message:i("node.deleteFailed"),"error")}}})}const fa=(L,ce)=>g(se=>se?{...se,[L]:ce}:null),Ya=v?String(v._type):"",ta=nj(Ya);return t.jsxs(Yt,{title:i("node.title"),subtitle:i("node.subtitle"),children:[t.jsxs("div",{className:"node-toolbar-desktop",children:[t.jsxs("div",{className:"left-toolbar-group",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"desktop-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(Sa,{size:18})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",style:{left:0,right:"auto"},children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ed.map(L=>{const ce=Gn(L.value),se=kh[L.value]||Lo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ve(L.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"desktop-search-wrap",children:t.jsx("input",{type:"text",className:"desktop-search-input",value:A,onChange:L=>J(L.target.value),placeholder:`${i("common.search")}...`})})]}),t.jsxs("div",{className:"right-toolbar-group",children:[t.jsx("button",{className:`primary-button ${$?"success-btn":""}`,type:"button",onClick:$?na:()=>ae(!0),disabled:P,children:i($?P?"node.saving":"node.saveOrder":"node.editSortOrder")}),$&&t.jsx("button",{className:"ghost-button",type:"button",onClick:$t,children:i("common.cancel")})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(yt,{label:i("common.loading")}):null,t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("node.colShow")}),t.jsx("th",{children:t.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px"},children:[i("node.colName"),t.jsxs("span",{className:"status-help-trigger",children:["?",t.jsxs("span",{className:"status-help-tooltip",children:[t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot red"})," ",i("node.statusInactive")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot orange"})," ",i("node.statusError")]}),t.jsxs("span",{className:"tooltip-item",children:[t.jsx("span",{className:"tooltip-dot blue"})," ",i("node.statusNormal")]})]})]})]})}),t.jsx("th",{children:i("node.colOnline")}),t.jsx("th",{className:"mobile-hide",children:i("node.address")}),t.jsx("th",{className:"mobile-hide",children:i("node.colPort")}),t.jsx("th",{className:"mobile-hide",children:i("node.colRate")}),t.jsx("th",{children:i("node.colGroups")}),t.jsx("th",{children:i($?"node.colSort":"common.actions")})]})}),t.jsxs("tbody",{children:[Nt.map(L=>{const ce=o.findIndex(se=>se.id===L.id&&se.type===L.type);return t.jsxs("tr",{draggable:$,onDragStart:se=>ue(se,ce),onDragOver:se=>Se(se,ce),onDragEnd:ke,className:H===ce?"dragging":"",children:[t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(L.type).bg,color:Gn(L.type).text,border:`1px solid ${Gn(L.type).border}`},children:L.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${L.show?"active":""}`,type:"button",onClick:()=>void Fn(L),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:"8px"},children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("strong",{children:L.name})]})}),t.jsx("td",{children:ut(L,"desktop")}),t.jsx("td",{className:"mobile-hide",children:t.jsx("span",{className:"mono",children:L.host})}),t.jsx("td",{className:"mobile-hide",children:String(L.server_port)}),t.jsxs("td",{className:"mobile-hide",children:[L.rate,"x"]}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:(()=>{const se=L.group_id??[],De=me[`${L.type}-${L.id}`],Ee=se.map(it=>{const st=p.find(w=>Number(w.id)===Number(it));return t.jsx("span",{className:"tag",children:(st==null?void 0:st.name)??`#${it}`},it)});if(se.length<=3||De)return t.jsxs(t.Fragment,{children:[Ee,se.length>3&&t.jsx("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--surface-soft)",border:"1px dashed var(--line)",userSelect:"none"},onClick:()=>N(it=>({...it,[`${L.type}-${L.id}`]:!1})),children:i("node.collapse")})]});const Ie=Ee.slice(0,3),lt=se.length-3;return t.jsxs(t.Fragment,{children:[Ie,t.jsxs("div",{className:"group-tooltip-container",children:[t.jsxs("span",{className:"tag",style:{cursor:"pointer",backgroundColor:"var(--accent-soft)",color:"var(--accent)",fontWeight:"bold",userSelect:"none"},onClick:()=>N(it=>({...it,[`${L.type}-${L.id}`]:!0})),children:["+",lt,"..."]}),t.jsxs("div",{className:"group-tooltip",children:[t.jsx("div",{style:{fontWeight:800,fontSize:10,color:"var(--muted)",width:"100%",borderBottom:"1px solid var(--line)",paddingBottom:4,marginBottom:4},children:i("node.allPermissionGroups",{count:se.length})}),Ee]})]})]})})()})}),t.jsx("td",{children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ls,{size:18})}):t.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),W(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wn(L),W(null)},children:[t.jsx(os,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ga(L),W(null)},children:[t.jsx(Gt,{size:14})," ",i("common.delete")]})]})]})]})})]},`${L.type}-${L.id}`)}),!z&&Ke.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")})})}):null]})]})}),pa()]}),t.jsxs("div",{className:"mobile-node-toolbar",children:[t.jsxs("div",{style:{position:"relative"},children:[t.jsx("button",{className:"mobile-add-btn",type:"button",onClick:()=>j(y?null:"show"),title:i("node.createNode"),children:t.jsx(Sa,{size:20})}),y!==null&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"dropdown-overlay",onClick:()=>j(null)}),t.jsxs("div",{className:"dropdown-menu",children:[t.jsxs("div",{className:"mobile-sheet-header",style:{gridColumn:"span 2"},children:[t.jsx("div",{className:"mobile-sheet-handle"}),t.jsx("h3",{className:"mobile-sheet-title",children:i("node.selectProtocolTitle")}),t.jsx("p",{className:"mobile-sheet-subtitle",children:i("node.selectProtocolSubtitle")})]}),Ed.map(L=>{const ce=Gn(L.value),se=kh[L.value]||Lo;return t.jsxs("button",{className:"protocol-option-btn",type:"button",onClick:()=>{Ve(L.value),j(null)},children:[t.jsx("div",{className:"protocol-icon-wrapper",style:{color:ce==null?void 0:ce.bg,backgroundColor:ce==null?void 0:ce.rowBg},children:t.jsx(se,{size:20})}),t.jsx("span",{className:"protocol-badge",style:{backgroundColor:(ce==null?void 0:ce.bg)??"var(--surface-soft)",color:(ce==null?void 0:ce.text)??"#ffffff"},children:L.label})]},L.value)})]})]})]}),t.jsx("div",{className:"mobile-search-wrap",children:t.jsx("input",{type:"text",className:"mobile-search-input",value:A,onChange:L=>J(L.target.value),placeholder:`${i("common.search")}...`})}),t.jsx("button",{className:`mobile-sort-btn ${$?"active":""}`,type:"button",onClick:()=>ae(!$),title:i("node.editSortOrder"),children:t.jsx(ls,{size:20})})]}),$&&t.jsxs("div",{className:"mobile-sorting-bar",children:[t.jsx("span",{style:{fontSize:13,fontWeight:"bold",color:"var(--muted)"},children:i("node.dragDropHelp")}),t.jsxs("div",{style:{display:"flex",gap:8},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:$t,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i("common.cancel")}),t.jsx("button",{className:"primary-button success-btn",type:"button",onClick:()=>void na(),disabled:P,style:{minHeight:30,padding:"0 10px",fontSize:12},children:i(P?"node.saving":"common.save")})]})]}),t.jsxs("div",{className:"mobile-node-list",children:[Nt.map(L=>{const ce=o.findIndex(se=>se.id===L.id&&se.type===L.type);return t.jsxs("div",{className:`mobile-node-card ${H===ce||Q===ce?"dragging":""}`,draggable:$,onDragStart:se=>ue(se,ce),onDragOver:se=>Se(se,ce),onDragEnd:ke,onTouchStart:se=>Oe(se,ce),onTouchMove:nt,onTouchEnd:Ge,"data-index":ce,style:$?{touchAction:"none"}:void 0,children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",children:[t.jsx("span",{className:`status-indicator-dot status-${L.available_status??0}`,title:L.available_status===2?i("node.statusNormal"):L.available_status===1?i("node.statusError"):i("node.statusInactive")}),t.jsx("span",{className:"mobile-node-name",children:L.name})]}),t.jsx("div",{className:"card-header-right",children:$?t.jsx("div",{className:"drag-handle",title:i("node.dragDropHelp"),children:t.jsx(ls,{size:18})}):t.jsxs(t.Fragment,{children:[t.jsx("button",{type:"button",className:`admin-switch ${L.show===1?"active":""}`,onClick:()=>void Fn(L),children:t.jsx("span",{className:"admin-switch-thumb"})}),t.jsx("span",{style:{color:"var(--line)",opacity:.8},children:"|"}),t.jsxs("div",{className:`action-dropdown-wrap ${(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?"active":""}`,style:{position:"relative",display:"inline-block"},children:[t.jsxs("button",{type:"button",className:"action-dropdown-trigger",onClick:()=>W((x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type?null:{id:L.id,type:L.type}),children:[i("common.actions")," ",t.jsx("span",{style:{fontSize:"10px",marginLeft:"2px"},children:"▼"})]}),(x==null?void 0:x.id)===L.id&&(x==null?void 0:x.type)===L.type&&t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"action-dropdown-overlay",onClick:()=>W(null)}),t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Ye(L),W(null)},children:[t.jsx(qt,{size:14})," ",i("common.edit")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item",onClick:()=>{Wn(L),W(null)},children:[t.jsx(os,{size:14})," ",i("common.copy")]}),t.jsxs("button",{type:"button",className:"action-dropdown-item danger",onClick:()=>{Ga(L),W(null)},children:[t.jsx(Gt,{size:14})," ",i("common.delete")]})]})]})]})]})})]}),t.jsx("div",{className:"card-middle-row",children:t.jsxs("span",{className:"mobile-node-address",children:[L.host,":",L.port||L.server_port]})}),t.jsxs("div",{className:"card-bottom-row",children:[t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 8px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:Gn(L.type).bg,color:Gn(L.type).text,border:`1px solid ${Gn(L.type).border}`},children:L.id}),ut(L,"mobile"),t.jsxs("span",{className:"mobile-badge-pill",children:[L.rate," x"]})]})]},`${L.type}-${L.id}`)}),!z&&Ke.length===0&&t.jsx("div",{className:"empty-state",children:i("node.noNodesFound")}),pa()]}),v!==null&&t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:v.id?i("node.editNodeTitle",{type:ta}):i("node.createNodeTitle",{type:ta})}),t.jsx("p",{children:i("node.configureFieldsSubtitle",{type:ta})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>g(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:vl,children:[t.jsx(cj,{draft:v,set:fa,groups:p,routes:m,nodes:o,onOpenJson:Ne,onAddGroup:()=>zt(!0),onOpenTransportConfig:()=>dt(!0)}),oi(Ya)?t.jsx(vj,{draft:v,config:R,onCopy:L=>void Pe(L),t:i}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>g(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(ka,{size:16}),i(P?"node.saving":"common.save")]})]})]})]})}),xt!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:xt.title}),t.jsx("p",{children:["tlsSettings","tls_settings"].includes(xt.key)?i("node.connectionSecurityEditorSubtitle"):i("node.jsonEditorSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Zt(null),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:["tlsSettings","tls_settings"].includes(xt.key)?t.jsx(rj,{initialValue:xt.value,isSnakeCase:xt.key==="tls_settings",tlsMode:Number((v==null?void 0:v.tls)??0),nodeType:String((v==null?void 0:v._type)??""),onCancel:()=>Zt(null),onSave:L=>{fa(xt.key,L),Zt(null)}}):t.jsx(Tx,{initialValue:xt.value,onCancel:()=>Zt(null),onSave:L=>{fa(xt.key,L),Zt(null)}})})]})}),Pt&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:400,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.addNewGroupTitle")}),t.jsx("p",{children:i("node.addNewGroupSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>zt(!1),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{onSubmit:G,style:{padding:"18px",display:"flex",flexDirection:"column",gap:16},children:[t.jsxs("label",{style:{display:"grid",gap:6},children:[t.jsx("span",{style:{fontSize:13,fontWeight:800},children:i("node.groupName")}),t.jsx("input",{className:"config-input",required:!0,value:ma,onChange:L=>T(L.target.value),placeholder:i("node.groupName"),autoFocus:!0})]}),t.jsxs("div",{className:"modal-actions",style:{padding:0,marginTop:12},children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>zt(!1),disabled:be,children:i("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:be||!ma.trim(),children:i(be?"node.saving":"common.confirm")})]})]})]})}),ye&&v!==null&&t.jsx("div",{className:"modal-backdrop",style:{zIndex:150},role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",style:{maxWidth:720,width:"95%",zIndex:160},children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("node.transportConfigTitle",{network:String(v.network??"tcp").toUpperCase()})}),t.jsx("p",{children:i("node.transportConfigSubtitle")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>dt(!1),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"18px"},children:t.jsx(dj,{draft:v,set:fa,onCancel:()=>dt(!1),onSave:()=>dt(!1)})})]})})]})}function wj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[v,g]=f.useState(!1),[y,j]=f.useState(""),z=f.useCallback(async()=>{_(!0),j("");try{d(await ds())}catch(C){j(C instanceof Error?C.message:i("serverGroup.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}z()},[z,s]);function Y(C){h({id:C==null?void 0:C.id,name:(C==null?void 0:C.name)??""}),j("")}async function P(C){var B;if(C.preventDefault(),!!p){g(!0),j("");try{await mx(p),h(null),(B=window.showToast)==null||B.call(window,i("serverGroup.saveSuccess"),"success"),await z()}catch(U){j(U instanceof Error?U.message:i("serverGroup.saveFailed"))}finally{g(!1)}}}async function K(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverGroup.deleteConfirm"),onConfirm:async()=>{var U,O;j("");try{await p1(C),(U=window.showToast)==null||U.call(window,i("serverGroup.deleteSuccess"),"success"),await z()}catch(ee){j(ee instanceof Error?ee.message:i("serverGroup.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("serverGroup.deleteFailed"),"error")}}})}return t.jsxs(Yt,{title:i("serverGroup.title"),subtitle:i("serverGroup.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverGroup.heading")}),t.jsx("p",{children:i("serverGroup.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Sa,{size:16}),i("serverGroup.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(yt,{label:i("serverGroup.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverGroup.id")}),t.jsx("th",{children:i("serverGroup.name")}),t.jsx("th",{children:i("serverGroup.userCount")}),t.jsx("th",{children:i("serverGroup.serverCount")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(cs,{size:14}),C.user_count??0]})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(Lo,{size:14}),C.server_count??0]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(C),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(C.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},C.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:5,children:t.jsx("div",{className:"empty-state",children:i("serverGroup.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverGroup.edit"):i("serverGroup.add")}),t.jsx("p",{children:i("serverGroup.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverGroup.name")}),t.jsx("input",{className:"config-input",required:!0,value:p.name,onChange:C=>h({...p,name:C.target.value}),placeholder:i("serverGroup.namePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ka,{size:16}),i(v?"serverGroup.saving":"common.save")]})]})]})]})}):null]})}function Nj(s){return{id:s==null?void 0:s.id,remarks:(s==null?void 0:s.remarks)??"",match:Array.isArray(s==null?void 0:s.match)?s.match.join(`
`):"",action:(s==null?void 0:s.action)??"block",action_value:(s==null?void 0:s.action_value)??""}}function _j(s){var i;return((i=fx.find(o=>o.value===s))==null?void 0:i.label)??s}function Sj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[v,g]=f.useState(!1),[y,j]=f.useState(""),z=f.useCallback(async()=>{_(!0),j("");try{d(await hx())}catch(C){j(C instanceof Error?C.message:i("serverRoute.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}z()},[z,s]);function Y(C){h(Nj(C)),j("")}async function P(C){var U;if(C.preventDefault(),!p)return;g(!0),j("");const B=p.action==="default_out"?[]:p.match.split(`
`).map(O=>O.trim()).filter(Boolean);try{await m1({id:p.id,remarks:p.remarks,match:B,action:p.action,action_value:p.action_value||null}),h(null),(U=window.showToast)==null||U.call(window,i("serverRoute.saveSuccess"),"success"),await z()}catch(O){j(O instanceof Error?O.message:i("serverRoute.saveFailed"))}finally{g(!1)}}async function K(C){var B;(B=window.showConfirm)==null||B.call(window,{message:i("serverRoute.deleteConfirm"),onConfirm:async()=>{var U,O;j("");try{await f1(C),(U=window.showToast)==null||U.call(window,i("serverRoute.deleteSuccess"),"success"),await z()}catch(ee){j(ee instanceof Error?ee.message:i("serverRoute.deleteFailed")),(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("serverRoute.deleteFailed"),"error")}}})}return t.jsxs(Yt,{title:i("serverRoute.title"),subtitle:i("serverRoute.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("serverRoute.heading")}),t.jsx("p",{children:i("serverRoute.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:z,disabled:m,children:[t.jsx(kt,{size:16}),i(m?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>Y(),children:[t.jsx(Sa,{size:16}),i("serverRoute.add")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,m&&o.length===0?t.jsx(yt,{label:i("serverRoute.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("serverRoute.id")}),t.jsx("th",{children:i("serverRoute.remarks")}),t.jsx("th",{children:i("serverRoute.matchValues")}),t.jsx("th",{children:i("serverRoute.action")}),t.jsx("th",{children:i("serverRoute.actionValue")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(C=>t.jsxs("tr",{children:[t.jsx("td",{children:C.id}),t.jsx("td",{children:t.jsx("strong",{children:C.remarks})}),t.jsx("td",{children:t.jsxs("div",{className:"match-tags",children:[(Array.isArray(C.match)?C.match:[]).slice(0,3).map((B,U)=>t.jsx("span",{className:"tag",children:B},U)),Array.isArray(C.match)&&C.match.length>3?t.jsxs("span",{className:"tag muted-tag",children:["+",C.match.length-3]}):null,!Array.isArray(C.match)||C.match.length===0?t.jsx("span",{className:"tag muted-tag",children:"—"}):null]})}),t.jsx("td",{children:t.jsx("span",{className:"status-pill enabled",children:_j(C.action)})}),t.jsx("td",{children:C.action_value||"—"}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>Y(C),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void K(C.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},C.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("serverRoute.empty")})})}):null]})]})})}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p.id?i("serverRoute.edit"):i("serverRoute.add")}),t.jsx("p",{children:i("serverRoute.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:P,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.remarks")}),t.jsx("input",{className:"config-input",required:!0,value:p.remarks,onChange:C=>h({...p,remarks:C.target.value}),placeholder:i("serverRoute.remarksPlaceholder")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.action")}),t.jsx("select",{className:"config-input",value:p.action,onChange:C=>h({...p,action:C.target.value}),children:fx.map(C=>t.jsx("option",{value:C.value,children:C.label},C.value))})]}),p.action!=="default_out"?t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.matchValues")}),t.jsx("textarea",{className:"config-input",rows:6,value:p.match,onChange:C=>h({...p,match:C.target.value}),placeholder:i("serverRoute.matchPlaceholder")})]}):null,t.jsxs("label",{children:[t.jsx("span",{children:i("serverRoute.actionValue")}),t.jsx("input",{className:"config-input",value:p.action_value,onChange:C=>h({...p,action_value:C.target.value}),placeholder:i("serverRoute.actionValuePlaceholder")})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ka,{size:16}),i(v?"serverRoute.saving":"common.save")]})]})]})]})}):null]})}function kj(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",content:(s==null?void 0:s.content)??"",group_id:String((s==null?void 0:s.group_id)??""),transfer_enable:s?String(s.transfer_enable):"",device_limit:(s==null?void 0:s.device_limit)!=null?String(s.device_limit):"",speed_limit:(s==null?void 0:s.speed_limit)!=null?String(s.speed_limit):"",month_price:(s==null?void 0:s.month_price)!=null?String(s.month_price/100):"",quarter_price:(s==null?void 0:s.quarter_price)!=null?String(s.quarter_price/100):"",half_year_price:(s==null?void 0:s.half_year_price)!=null?String(s.half_year_price/100):"",year_price:(s==null?void 0:s.year_price)!=null?String(s.year_price/100):"",two_year_price:(s==null?void 0:s.two_year_price)!=null?String(s.two_year_price/100):"",three_year_price:(s==null?void 0:s.three_year_price)!=null?String(s.three_year_price/100):"",onetime_price:(s==null?void 0:s.onetime_price)!=null?String(s.onetime_price/100):"",reset_price:(s==null?void 0:s.reset_price)!=null?String(s.reset_price/100):"",reset_traffic_method:(s==null?void 0:s.reset_traffic_method)!=null?String(s.reset_traffic_method):"0",capacity_limit:(s==null?void 0:s.capacity_limit)!=null?String(s.capacity_limit):"",force_update:!1}}function Cj(s){const i=d=>d===""?null:Math.round(Number(d)*100),o=d=>d===""?null:Number(d);return{id:s.id,name:s.name,content:s.content||null,group_id:Number(s.group_id),transfer_enable:Number(s.transfer_enable),device_limit:o(s.device_limit),speed_limit:o(s.speed_limit),month_price:i(s.month_price),quarter_price:i(s.quarter_price),half_year_price:i(s.half_year_price),year_price:i(s.year_price),two_year_price:i(s.two_year_price),three_year_price:i(s.three_year_price),onetime_price:i(s.onetime_price),reset_price:i(s.reset_price),reset_traffic_method:o(s.reset_traffic_method),capacity_limit:o(s.capacity_limit),force_update:s.force_update}}function ea(s){return s==null?"—":_a(s)}function zj(s){return[{value:"0",label:s("config.resetTraffic.monthly")},{value:"1",label:s("config.resetTraffic.byPurchase")},{value:"2",label:s("config.resetTraffic.never")},{value:"3",label:s("config.resetTraffic.yearly")},{value:"4",label:s("config.resetTraffic.yearlyByPurchase")}]}function Tj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[v,g]=f.useState(!0),[y,j]=f.useState(!1),[z,Y]=f.useState(""),[P,K]=f.useState(""),[C,B]=f.useState(null),[U,O]=f.useState(null),ee=(x,W)=>{x.dataTransfer.effectAllowed="move",B(W)},ie=(x,W)=>{if(x.preventDefault(),C===null||C===W)return;const H=[...o],S=H[C];H.splice(C,1),H.splice(W,0,S),B(W),d(H)},oe=async()=>{B(null);try{await ph(o.map(x=>x.id)),await me()}catch(x){Y(x instanceof Error?x.message:i("plan.sortFailed")),await me()}},E=(x,W)=>{O(W)},$=x=>{if(U===null)return;const W=x.touches[0],H=document.elementFromPoint(W.clientX,W.clientY);if(!H)return;const S=H.closest("tr, [data-index]");if(!S)return;const Q=S.getAttribute("data-index");if(Q===null)return;const de=Number(Q);if(de!==U&&de>=0&&de<o.length){const ue=[...o],Se=ue[U];ue.splice(U,1),ue.splice(de,0,Se),O(de),d(ue)}},ae=async()=>{if(U!==null){O(null);try{await ph(o.map(x=>x.id)),await me()}catch(x){Y(x instanceof Error?x.message:i("plan.sortFailed")),await me()}}},me=f.useCallback(async()=>{g(!0),Y("");try{const[x,W]=await Promise.all([yl(),ds()]);d(x),h(W)}catch(x){Y(x instanceof Error?x.message:i("plan.loadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}me()},[me,s]);function N(x){_(kj(x)),Y(""),K("")}async function R(x){var W,H;if(x.preventDefault(),!!m){j(!0),Y(""),K("");try{await h1(Cj(m)),_(null),(W=window.showToast)==null||W.call(window,i("plan.saveSuccess"),"success"),await me()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.saveFailed"),"error")}finally{j(!1)}}}async function te(x,W){var H;try{await uh(x,{show:W?0:1}),await me()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function M(x,W){var H;try{await uh(x,{renew:W?0:1}),await me()}catch(S){(H=window.showToast)==null||H.call(window,S instanceof Error?S.message:i("plan.toggleFailed"),"error")}}async function re(x){var W;(W=window.showConfirm)==null||W.call(window,{message:i("plan.deleteConfirm"),onConfirm:async()=>{var H,S;Y(""),K("");try{await x1(x),(H=window.showToast)==null||H.call(window,i("plan.deleteSuccess"),"success"),await me()}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:i("plan.deleteFailed"),"error")}}})}function A(x){var W;return((W=p.find(H=>H.id===x))==null?void 0:W.name)??`#${x}`}function J(x,W){_(H=>H&&{...H,[x]:W})}return t.jsxs(Yt,{title:i("plan.title"),subtitle:i("plan.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("plan.heading")}),t.jsx("p",{children:i("plan.headingHelp")})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:me,disabled:v,children:[t.jsx(kt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>N(),children:[t.jsx(Sa,{size:16}),i("plan.add")]})]})]}),z?t.jsx("div",{className:"form-error",children:z}):null,P?t.jsx("div",{className:"form-success",children:P}):null,v&&o.length===0?t.jsx(yt,{label:i("plan.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("plan.sort")}),t.jsx("th",{children:"ID"}),t.jsx("th",{children:i("plan.show")}),t.jsx("th",{children:i("plan.renew")}),t.jsx("th",{children:i("plan.name")}),t.jsx("th",{children:i("plan.users")}),t.jsx("th",{children:i("plan.group")}),t.jsx("th",{children:i("plan.pricing")}),t.jsx("th",{children:i("plan.traffic")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map((x,W)=>t.jsxs("tr",{draggable:!0,onDragStart:H=>ee(H,W),onDragOver:H=>ie(H,W),onDragEnd:oe,onTouchStart:H=>E(H,W),onTouchMove:$,onTouchEnd:ae,"data-index":W,className:C===W||U===W?"dragging":"",style:{transition:"all 0.2s"},children:[t.jsx("td",{children:t.jsx("div",{className:"sort-cell",style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:"100%"},children:t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center"},title:i("plan.sort"),children:t.jsx(ls,{size:16})})})}),t.jsx("td",{children:t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:28,height:20,padding:"0 6px",borderRadius:4,fontSize:11,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),te(x.id,x.show)},title:x.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("strong",{children:x.name})}),t.jsx("td",{children:t.jsxs("span",{className:"inline-badge",children:[t.jsx(cs,{size:14}),x.count??0]})}),t.jsx("td",{children:A(x.group_id)}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",maxWidth:"320px"},children:[x.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:ea(x.month_price)})]}),x.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:ea(x.quarter_price)})]}),x.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:ea(x.half_year_price)})]}),x.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:ea(x.year_price)})]}),x.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:ea(x.two_year_price)})]}),x.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:ea(x.three_year_price)})]}),x.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:ea(x.onetime_price)})]}),x.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"11px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"8px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:ea(x.reset_price)})]})]})}),t.jsxs("td",{children:[x.transfer_enable," GB"]}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:H=>{H.stopPropagation(),N(x)},children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:H=>{H.stopPropagation(),re(x.id)},children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},x.id)),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("plan.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-node-list",children:[o.map((x,W)=>t.jsxs("div",{className:`mobile-node-card ${C===W||U===W?"dragging":""}`,draggable:!0,onDragStart:H=>ee(H,W),onDragOver:H=>ie(H,W),onDragEnd:oe,onTouchStart:H=>E(H,W),onTouchMove:$,onTouchEnd:ae,"data-index":W,style:{touchAction:"none",transition:"all 0.2s",borderLeft:"4px solid var(--accent)"},children:[t.jsxs("div",{className:"card-header-row",children:[t.jsxs("div",{className:"card-header-left",style:{gap:"6px"},children:[t.jsx("span",{className:"drag-handle",style:{cursor:"grab",color:"var(--text-muted)",display:"inline-flex",alignItems:"center",marginRight:"2px"},title:i("plan.sort"),children:t.jsx(ls,{size:16})}),t.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",minWidth:24,height:18,padding:"0 4px",borderRadius:4,fontSize:10,fontWeight:"bold",backgroundColor:"var(--surface-soft)",color:"var(--text-muted)"},children:x.id}),t.jsx("span",{className:"mobile-node-name",style:{fontSize:"14px",fontWeight:"bold"},children:x.name})]}),t.jsxs("div",{className:"card-header-right",style:{gap:"4px"},children:[t.jsxs("button",{className:"mini-button",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),N(x)},children:[t.jsx(qt,{size:12}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",style:{padding:"4px 8px",minHeight:"26px",fontSize:"11px",borderRadius:"6px"},onClick:H=>{H.stopPropagation(),re(x.id)},children:[t.jsx(Gt,{size:12}),i("common.delete")]})]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 10px",backgroundColor:"var(--surface-soft)",borderRadius:"8px",margin:"4px 0",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.show")}),t.jsx("button",{className:`admin-switch ${x.show?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),te(x.id,x.show)},title:x.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[t.jsx("span",{style:{fontSize:"12px",fontWeight:600,color:"var(--muted)"},children:i("plan.renew")}),t.jsx("button",{className:`admin-switch ${x.renew?"active":""}`,type:"button",onClick:H=>{H.stopPropagation(),M(x.id,x.renew)},title:x.renew?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"card-bottom-row",style:{marginTop:"4px",gap:"6px"},children:[t.jsxs("span",{className:"mobile-badge-pill",style:{display:"inline-flex",alignItems:"center"},children:[t.jsx(cs,{size:12,style:{marginRight:4}}),x.count??0]}),t.jsx("span",{className:"mobile-badge-pill",children:A(x.group_id)}),t.jsxs("span",{className:"mobile-badge-pill",style:{fontWeight:600},children:[x.transfer_enable," GB"]})]}),t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px",marginTop:"8px",paddingTop:"8px",borderTop:"1px solid var(--line)"},children:[x.month_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"var(--accent-soft)",border:"1px solid var(--accent-light)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1M"}),t.jsx("strong",{style:{color:"var(--accent)"},children:ea(x.month_price)})]}),x.quarter_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(16, 185, 129, 0.08)",border:"1px solid rgba(16, 185, 129, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3M"}),t.jsx("strong",{style:{color:"#10b981"},children:ea(x.quarter_price)})]}),x.half_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(245, 158, 11, 0.08)",border:"1px solid rgba(245, 158, 11, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"6M"}),t.jsx("strong",{style:{color:"#f59e0b"},children:ea(x.half_year_price)})]}),x.year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(99, 102, 241, 0.08)",border:"1px solid rgba(99, 102, 241, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1Y"}),t.jsx("strong",{style:{color:"#6366f1"},children:ea(x.year_price)})]}),x.two_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(139, 92, 246, 0.08)",border:"1px solid rgba(139, 92, 246, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"2Y"}),t.jsx("strong",{style:{color:"#8b5cf6"},children:ea(x.two_year_price)})]}),x.three_year_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(236, 72, 153, 0.08)",border:"1px solid rgba(236, 72, 153, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"3Y"}),t.jsx("strong",{style:{color:"#ec4899"},children:ea(x.three_year_price)})]}),x.onetime_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(107, 114, 128, 0.08)",border:"1px solid rgba(107, 114, 128, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:"1X"}),t.jsx("strong",{style:{color:"#6b7280"},children:ea(x.onetime_price)})]}),x.reset_price!=null&&t.jsxs("span",{className:"price-pill",style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"2px 6px",borderRadius:"4px",backgroundColor:"rgba(239, 68, 68, 0.08)",border:"1px solid rgba(239, 68, 68, 0.2)",fontSize:"10px"},children:[t.jsx("span",{style:{fontWeight:600,color:"var(--muted)",textTransform:"uppercase",fontSize:"7px"},children:i("plan.resetTrafficShort")}),t.jsx("strong",{style:{color:"#ef4444"},children:ea(x.reset_price)})]})]})]},x.id)),!v&&o.length===0?t.jsx("div",{className:"empty-state",children:i("plan.empty")}):null]}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("plan.edit"):i("plan.add")}),t.jsx("p",{children:i("plan.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>_(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:R,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.name")}),t.jsx("input",{className:"config-input",required:!0,value:m.name,onChange:x=>J("name",x.target.value)})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.content")}),t.jsx("textarea",{className:"config-input",rows:3,value:m.content,onChange:x=>J("content",x.target.value),placeholder:i("plan.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.group")}),t.jsxs("select",{className:"config-input",required:!0,value:m.group_id,onChange:x=>J("group_id",x.target.value),children:[t.jsx("option",{value:"",children:i("plan.selectGroup")}),p.map(x=>t.jsx("option",{value:x.id,children:x.name},x.id))]})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.transferEnable")," (GB)"]}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",value:m.transfer_enable,onChange:x=>J("transfer_enable",x.target.value)})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.deviceLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.device_limit,onChange:x=>J("device_limit",x.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[i("plan.speedLimit")," (Mbps)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.speed_limit,onChange:x=>J("speed_limit",x.target.value),placeholder:i("plan.unlimited")})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.capacityLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:m.capacity_limit,onChange:x=>J("capacity_limit",x.target.value),placeholder:i("plan.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetTrafficMethod")}),t.jsx("select",{className:"config-input",value:m.reset_traffic_method,onChange:x=>J("reset_traffic_method",x.target.value),children:zj(i).map(x=>t.jsx("option",{value:x.value,children:x.label},x.value))})]})]}),t.jsx("h3",{className:"form-section-title",children:i("plan.pricing")}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.monthPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.month_price,onChange:x=>J("month_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.quarterPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.quarter_price,onChange:x=>J("quarter_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.halfYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.half_year_price,onChange:x=>J("half_year_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.yearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.year_price,onChange:x=>J("year_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.twoYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.two_year_price,onChange:x=>J("two_year_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.threeYearPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.three_year_price,onChange:x=>J("three_year_price",x.target.value),placeholder:"—"})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("plan.onetimePrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.onetime_price,onChange:x=>J("onetime_price",x.target.value),placeholder:"—"})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("plan.resetPrice")}),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:m.reset_price,onChange:x=>J("reset_price",x.target.value),placeholder:"—"})]})]}),m.id?t.jsxs("label",{className:"checkbox-row",children:[t.jsx("input",{type:"checkbox",checked:m.force_update,onChange:x=>J("force_update",String(x.target.checked))}),t.jsx("span",{children:i("plan.forceUpdate")})]}):null,t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(ka,{size:16}),i(y?"plan.saving":"common.save")]})]})]})]})}):null]})}const dd="模糊",Ch={1:"New",2:"Renew",3:"Upgrade",4:"Reset traffic"},zh={month_price:"1 Month",quarter_price:"3 Months",half_year_price:"6 Months",year_price:"1 Year",two_year_price:"2 Years",three_year_price:"3 Years",onetime_price:"One-time",reset_price:"Reset traffic"};function Th(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0");return`${o}/${d}/${p} ${h}:${m}`}function Eh(s){const i=new Date(s*1e3),o=i.getFullYear(),d=String(i.getMonth()+1).padStart(2,"0"),p=String(i.getDate()).padStart(2,"0"),h=String(i.getHours()).padStart(2,"0"),m=String(i.getMinutes()).padStart(2,"0"),_=String(i.getSeconds()).padStart(2,"0");return`${o}-${d}-${p} ${h}:${m}:${_}`}function Mh(s){return s.length<=10?s:`${s.slice(0,3)}...${s.slice(-3)}`}function Ha(s){return`${_a(Number(s??0))} ₫`}const Ex="adminzic_user_cache";function Ej(){if(typeof window>"u")return{};try{const s=sessionStorage.getItem(Ex);return s?JSON.parse(s):{}}catch{return{}}}function Mj(s){if(!(typeof window>"u"))try{sessionStorage.setItem(Ex,JSON.stringify(s))}catch{}}const ii=(s,i)=>`${s}:${i}`;function Dj(){var T,be,qe,ye,dt;const s=Dt(),i=Ja(),{t:o}=Ze(),d=f.useCallback(G=>{switch(G){case 0:return{label:o("order.statusPending"),cls:"status-pending"};case 1:return{label:o("order.statusProcessing"),cls:"status-processing"};case 2:return{label:o("order.statusCancelled"),cls:"status-cancelled"};case 3:return{label:o("order.statusCompleted"),cls:"status-completed"};case 4:return{label:o("order.statusDiscounted"),cls:"status-discounted"};default:return{label:`#${G}`,cls:""}}},[o]),p=f.useCallback(G=>{const Ne=`order.period.${G}`,je=o(Ne);return je===Ne?zh[G]??G:je},[o]),[h,m]=f.useState([]),[_,v]=f.useState([]),[g,y]=f.useState({}),[j,z]=f.useState(0),[Y,P]=f.useState(1),[K]=f.useState(15),[C,B]=f.useState(""),[U,O]=f.useState("trade_no"),[ee,ie]=f.useState(!0),[oe,E]=f.useState(null),[$,ae]=f.useState(!1),[me,N]=f.useState(""),[R,te]=f.useState(""),[M,re]=f.useState(null),[A,J]=f.useState(null),[x,W]=f.useState(!1),[H,S]=f.useState(null),[Q,de]=f.useState(!1),[ue,Se]=f.useState(()=>Ej()),ke=f.useCallback((G,Ne)=>{const je=ii(Ne,G);J(null),re(Te=>Te===je?null:je)},[]),Oe=f.useCallback((G,Ne)=>{const je=ii(Ne,G);re(null),J(Te=>Te===je?null:je)},[]),nt=f.useCallback(G=>{const Ne=Number(G.coupon_id??0);return Ne?g[Ne]??`#${Ne}`:null},[g]);f.useEffect(()=>{if(!M&&!A)return;const G=()=>{re(null),J(null)},Ne=Te=>{const Pe=Te.target;Pe!=null&&Pe.closest(".order-dropdown-trigger, .order-dropdown-menu")||G()},je=Te=>{Te.key==="Escape"&&G()};return document.addEventListener("pointerdown",Ne),document.addEventListener("keydown",je),()=>{document.removeEventListener("pointerdown",Ne),document.removeEventListener("keydown",je)}},[M,A]),f.useEffect(()=>{const G=new Set;if(h.forEach(je=>{je.user_id&&!ue[je.user_id]&&G.add(je.user_id),je.invite_user_id&&!ue[je.invite_user_id]&&G.add(je.invite_user_id)}),H&&(H.user_id&&!ue[H.user_id]&&G.add(H.user_id),H.invite_user_id&&!ue[H.invite_user_id]&&G.add(H.invite_user_id)),G.size===0)return;const Ne=Array.from(G);Promise.allSettled(Ne.map(async je=>{try{const Te=await bx(je);if(Te&&Te.data)return{id:je,email:Te.data.email,invite_user:Te.data.invite_user}}catch(Te){console.error(`Failed to fetch user ${je}:`,Te)}return null})).then(je=>{const Te={};je.forEach(Pe=>{var Ve;if(Pe.status==="fulfilled"&&Pe.value){const Ye=Pe.value;Te[Ye.id]={email:Ye.email,invite_user_email:((Ve=Ye.invite_user)==null?void 0:Ve.email)||null},Ye.invite_user&&(Te[Ye.invite_user.id]={email:Ye.invite_user.email})}}),Object.keys(Te).length>0&&Se(Pe=>{const Ve={...Pe,...Te};return Mj(Ve),Ve})})},[h,H,ue]);const Ge={0:{label:o("order.commissionPending"),dotClass:"pending"},1:{label:o("order.commissionApproved"),dotClass:"processing"},2:{label:o("order.commissionPaid"),dotClass:"completed"},3:{label:o("order.commissionCancelled"),dotClass:"cancelled"}},Ke=f.useCallback(async(G=1,Ne,je)=>{var Te,Pe;ie(!0),N("");try{let Ve;if(Ne)if(je==="email"){const ut=(Te=(await zd(1,1,[{key:"email",condition:dd,value:Ne}])).data)==null?void 0:Te[0];if(!ut){m([]),z(0),ie(!1);return}Ve=[{key:"user_id",condition:"=",value:String(ut.id)}]}else if(je==="invite_user_email"){const ut=(Pe=(await zd(1,1,[{key:"email",condition:dd,value:Ne}])).data)==null?void 0:Pe[0];if(!ut){m([]),z(0),ie(!1);return}Ve=[{key:"invite_user_id",condition:"=",value:String(ut.id)}]}else Ve=[{key:je||"trade_no",condition:je==="trade_no"||je==="user_id"||je==="invite_user_id"||je==="plan_id"||je==="status"?"=":dd,value:Ne}];const Ye=await g1({current:G,pageSize:K,filter:Ve});m(Ye.data),z(Ye.total)}catch(Ve){N(Ve instanceof Error?Ve.message:o("order.loadFailed"))}finally{ie(!1)}},[K,o]),Ct=f.useCallback(G=>{const Ne=String(G);O("user_id"),B(Ne),W(!0),P(1),Ke(1,Ne,"user_id")},[Ke]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const G=new URLSearchParams(i.search),Ne=G.get("filter_email"),je=G.get("invite_user_email"),Te=G.get("user_id")||G.get("filter_user_id");let Pe="",Ve="trade_no";Te?(Pe=Te,Ve="user_id",O("user_id"),B(Te),W(!0)):Ne?(Pe=Ne,Ve="email",O("email"),B(Ne),W(!0)):je&&(Pe=je,Ve="invite_user_email",O("invite_user_email"),B(je),W(!0)),Ke(1,Pe,Ve),yl().then(v).catch(()=>{}),gx(1,1e3).then(Ye=>{const Re={};Ye.data.forEach(ut=>{Re[ut.id]=ut.code}),y(Re)}).catch(()=>{})},[Ke,s,i.search]);function Nt(){P(1),Ke(1,C,U)}function we(){B(""),P(1),Ke(1)}function Le(G){P(G),Ke(G,C,U)}async function na(G){var Ne,je;re(null),J(null),N(""),te("");try{await b1(G),(Ne=window.showToast)==null||Ne.call(window,o("order.paidSuccess"),"success"),await Ke(Y,C,U)}catch(Te){(je=window.showToast)==null||je.call(window,Te instanceof Error?Te.message:o("order.paidFailed"),"error")}}async function $t(G){var Ne,je;re(null),J(null),N(""),te("");try{await y1(G),(Ne=window.showToast)==null||Ne.call(window,o("order.cancelSuccess"),"success"),await Ke(Y,C,U)}catch(Te){(je=window.showToast)==null||je.call(window,Te instanceof Error?Te.message:o("order.cancelFailed"),"error")}}async function pa(G,Ne){var je,Te;re(null),J(null),N(""),te("");try{await v1(G,Ne),(je=window.showToast)==null||je.call(window,o("order.commissionSuccess"),"success"),await Ke(Y,C,U)}catch(Pe){(Te=window.showToast)==null||Te.call(window,Pe instanceof Error?Pe.message:o("order.commissionFailed"),"error")}}async function xt(G){S(G),de(!0);try{const Ne=await j1(G.id);Ne&&Ne.data&&S(Ne.data)}catch(Ne){console.error("Failed to fetch order detail:",Ne)}finally{de(!1)}}function Zt(){var G;E({email:"",plan_id:(G=_[0])!=null&&G.id?String(_[0].id):"",period:"month_price",total_amount:"0"}),N(""),te("")}async function Pt(G){var Ne,je;if(G.preventDefault(),!!oe){ae(!0),N(""),te("");try{await xx({email:oe.email,plan_id:Number(oe.plan_id),period:oe.period,total_amount:Number(oe.total_amount)*100}),E(null),(Ne=window.showToast)==null||Ne.call(window,o("order.assignSuccess"),"success"),await Ke(Y,C,U)}catch(Te){(je=window.showToast)==null||je.call(window,Te instanceof Error?Te.message:o("order.assignFailed"),"error")}finally{ae(!1)}}}const zt=Math.ceil(j/K),ma=H?nt(H):null;return t.jsxs(Yt,{title:o("order.title"),subtitle:o("order.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"16px"},children:[t.jsxs("div",{className:"button-row",style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:`ghost-button ${x?"active":""}`,type:"button",onClick:()=>W(!x),children:[t.jsx(rs,{size:16}),o("order.filter")]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Zt,children:[t.jsx(Sa,{size:16}),o("order.assign")]})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void Ke(Y,C,U),disabled:ee,children:[t.jsx(kt,{size:16}),o(ee?"common.refreshing":"common.refresh")]})]}),x&&t.jsxs("div",{className:"filter-bar",children:[t.jsxs("select",{className:"config-input filter-select",value:U,onChange:G=>O(G.target.value),children:[t.jsx("option",{value:"trade_no",children:o("order.tradeNo")}),t.jsx("option",{value:"email",children:o("order.email")}),t.jsx("option",{value:"status",children:o("order.status")}),t.jsx("option",{value:"plan_id",children:o("order.filterPlanId")}),t.jsx("option",{value:"user_id",children:o("order.filterUserId")}),t.jsx("option",{value:"invite_user_id",children:o("order.filterInviterUserId")}),t.jsx("option",{value:"invite_user_email",children:o("order.inviterEmail")})]}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input search-input",value:C,onChange:G=>B(G.target.value),placeholder:o("order.searchPlaceholder"),onKeyDown:G=>G.key==="Enter"&&Nt()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:Nt,children:[t.jsx(rs,{size:16}),o("order.filter")]}),C?t.jsxs("button",{className:"ghost-button",type:"button",onClick:we,children:[t.jsx(ct,{size:16}),o("order.clearFilter")]}):null]}),me?t.jsx("div",{className:"form-error",children:me}):null,R?t.jsx("div",{className:"form-success",children:R}):null,ee&&h.length===0?t.jsx(yt,{label:o("order.loading")}):null,t.jsxs("div",{className:`content-loading-container ${ee?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("section",{className:"panel table-panel hide-on-mobile",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table order-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("order.colOrder")}),t.jsx("th",{children:o("order.colCustomerPlan")}),t.jsx("th",{children:o("order.colPayment")}),t.jsx("th",{children:o("order.orderStatus")}),t.jsx("th",{children:o("order.colCommission")}),t.jsx("th",{children:o("order.created")})]})}),t.jsxs("tbody",{children:[h.map(G=>{var Ye;const Ne=d(G.status),je=G.invite_user_id!==null,Te=Ge[G.commission_status]??{label:`#${G.commission_status}`,dotClass:"pending"},Pe=nt(G),Ve=(Ye=ue[G.user_id])==null?void 0:Ye.email;return t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"order-cell-stack",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>xt(G),title:o("order.detailsTitle"),children:Mh(G.trade_no)}),t.jsxs("span",{className:"order-subline",children:["#",G.id]}),t.jsx("span",{className:"order-type-pill",children:Ch[G.type]??`#${G.type}`})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-user-plan",children:[Ve?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ct(G.user_id),title:o("order.filterByUser"),children:Ve}):t.jsxs("span",{className:"order-subline",children:["ID: ",G.user_id]}),t.jsx("strong",{className:"order-plan-name",children:G.plan_name??`Plan #${G.plan_id}`}),t.jsx("span",{className:"period-capsule",children:p(G.period)})]})}),t.jsx("td",{children:t.jsxs("div",{className:"order-money-stack",children:[t.jsx("strong",{className:"order-money-main",children:Ha(G.total_amount)}),Pe?t.jsxs("span",{className:"order-coupon-badge",children:[o("order.coupon"),": ",Pe]}):null,Number(G.discount_amount??0)>0?t.jsxs("span",{className:"order-subline",children:[o("order.discountLabel"),": ",Ha(G.discount_amount)]}):null]})}),t.jsxs("td",{style:{position:"relative"},children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{children:Ne.label}),G.status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),ke(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]}),M===ii("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),na(G.trade_no)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{re(null),$t(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]}),t.jsxs("td",{style:{position:"relative"},children:[je?t.jsxs("div",{className:"order-commission-cell",children:[t.jsx("strong",{children:Ha(G.commission_balance)}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Te.dotClass}`}),t.jsx("span",{children:Te.label}),G.commission_status===0&&t.jsxs("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Oe(G.trade_no,"desktop")},children:[o("order.markAs")," ",t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})]})]})]}):t.jsx("span",{className:"tag muted-tag",children:"—"}),A===ii("desktop",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),pa(G.trade_no,1)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("div",{className:"dropdown-item",onClick:()=>{J(null),pa(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]}),t.jsx("td",{children:t.jsx("span",{className:"order-time",children:Th(G.created_at)})})]},G.trade_no)}),!ee&&h.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:o("order.empty")})})}):null]})]})}),zt>1?t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>Le(Y-1),children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",zt]}),t.jsx("button",{className:"mini-button",disabled:Y>=zt,onClick:()=>Le(Y+1),children:t.jsx(gn,{size:16})})]}):null]}),t.jsxs("div",{className:"mobile-order-list",children:[h.map(G=>{var Ye;const Ne=d(G.status),je=G.invite_user_id!==null,Te=Ge[G.invite_user_id!==null?G.commission_status:0]??{label:`#${G.commission_status}`,dotClass:"pending"},Pe=(Ye=ue[G.user_id])==null?void 0:Ye.email,Ve=nt(G);return t.jsxs("div",{className:"mobile-order-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsxs("div",{className:"mobile-card-header-left",children:[t.jsx("span",{className:"trade-no-link",onClick:()=>xt(G),children:Mh(G.trade_no)}),t.jsxs("span",{className:"mono",style:{fontSize:"11px",color:"var(--muted)",marginLeft:"4px"},children:["#",G.id]})]}),t.jsxs("div",{className:"mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Ne.cls.replace("status-","")}`}),t.jsx("span",{style:{fontSize:"12px"},children:Ne.label}),G.status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),ke(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),M===ii("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),na(G.trade_no)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.statusCompleted")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{re(null),$t(G.trade_no)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.statusCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.email")}),t.jsx("span",{className:"value",children:Pe?t.jsx("span",{className:"trade-no-link order-email-link",onClick:()=>Ct(G.user_id),children:Pe}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",G.user_id]})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.type")}),t.jsx("span",{className:"value",children:Ch[G.type]??`#${G.type}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.subscriptionPlan")}),t.jsx("span",{className:"value",style:{fontWeight:600},children:G.plan_name??`Plan #${G.plan_id}`})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.period")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"period-capsule",style:{margin:0},children:p(G.period)})})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.amount")}),t.jsx("span",{className:"value",style:{fontWeight:700,color:"var(--accent)"},children:Ha(G.total_amount)})]}),Ve?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.coupon")}),t.jsx("span",{className:"value",children:t.jsx("span",{className:"order-coupon-badge",children:Ve})})]}):null,Number(G.discount_amount??0)>0?t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.discountLabel")}),t.jsx("span",{className:"value",children:Ha(G.discount_amount)})]}):null,t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionAmount")}),t.jsx("span",{className:"value",children:je?t.jsx("strong",{children:Ha(G.commission_balance)}):t.jsx("span",{className:"tag muted-tag",children:"—"})})]}),je&&t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.commissionStatus")}),t.jsxs("div",{className:"value mobile-order-action-wrap",children:[t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${Te.dotClass}`}),t.jsx("span",{style:{fontSize:"12px"},children:Te.label}),G.commission_status===0&&t.jsx("span",{className:"mark-as-trigger order-dropdown-trigger",onClick:Re=>{Re.stopPropagation(),Oe(G.trade_no,"mobile")},children:t.jsx(gl,{size:12,style:{display:"inline",strokeWidth:3}})})]}),A===ii("mobile",G.trade_no)&&t.jsxs("div",{className:"dropdown-menu order-dropdown-menu",onPointerDown:Re=>Re.stopPropagation(),onClick:Re=>Re.stopPropagation(),children:[t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),pa(G.trade_no,1)},children:[t.jsx(So,{size:14,style:{color:"#10b981"}}),o("order.commissionApproved")]}),t.jsxs("button",{type:"button",className:"dropdown-item",onClick:()=>{J(null),pa(G.trade_no,3)},children:[t.jsx(xl,{size:14,style:{color:"#ef4444"}}),o("order.commissionCancelled")]})]})]})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsx("span",{className:"label",children:o("order.created")}),t.jsx("span",{className:"value",style:{fontSize:"12px",color:"var(--muted)"},children:Th(G.created_at)})]})]})]},G.trade_no)}),!ee&&h.length===0?t.jsx("div",{className:"mobile-empty-state",style:{padding:"32px",textAlign:"center",color:"var(--muted)",background:"var(--surface)",border:"1px dashed var(--line)",borderRadius:"12px"},children:o("order.empty")}):null,zt>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:Y<=1,onClick:()=>Le(Y-1),children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[Y," / ",zt]}),t.jsx("button",{className:"mini-button",disabled:Y>=zt,onClick:()=>Le(Y+1),children:t.jsx(gn,{size:16})})]}):null]})]}),H?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",style:{maxWidth:"500px",width:"100%",borderRadius:"8px",overflow:"hidden"},children:[t.jsxs("div",{className:"modal-heading",style:{padding:"24px 24px 12px 24px",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t.jsx("h2",{style:{fontSize:"18px",fontWeight:"bold"},children:o("order.detailsTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>S(null),children:t.jsx(ct,{size:18})})]}),t.jsx("div",{style:{padding:"12px 24px 24px 24px",maxHeight:"80vh",overflowY:"auto"},children:Q?t.jsx("div",{style:{display:"flex",justifyContent:"center",padding:"24px 0"},children:t.jsx(yt,{label:o("order.loadingDetails")})}):t.jsxs("div",{style:{fontSize:"14px",color:"var(--text)"},children:[t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("common.email")}),(T=ue[H.user_id])!=null&&T.email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{S(null),Ct(H.user_id)},title:"Filter by this user",children:ue[H.user_id].email}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.tradeNoLabel")}),t.jsx("span",{style:{fontFamily:"var(--font-mono, SF Mono, monospace)"},children:H.trade_no})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.periodLabel")}),t.jsx("span",{children:p(H.period)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.orderStatus")}),t.jsx("span",{children:d(H.status).label})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.planLabel")}),t.jsx("span",{children:H.plan_name??`Plan #${H.plan_id}`})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.callbackLabel")}),t.jsx("span",{children:H.callback_no||"-"})]}),ma?t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:"16px"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.coupon")}),t.jsx("span",{children:ma})]}):null]}),H.invite_user_id&&t.jsxs(t.Fragment,{children:[t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsx("h4",{style:{fontWeight:"bold",color:"var(--text)",margin:"0"},children:o("order.referralDetails")}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.inviterEmail")}),(be=ue[H.invite_user_id])!=null&&be.email||(qe=ue[H.user_id])!=null&&qe.invite_user_email?t.jsx("span",{className:"trade-no-link",style:{fontWeight:500},onClick:()=>{const G=String(H.invite_user_id);O("invite_user_id"),B(G),W(!0),S(null),Ke(1,G,"invite_user_id")},title:"Filter by this inviter",children:((ye=ue[H.invite_user_id])==null?void 0:ye.email)||((dt=ue[H.user_id])==null?void 0:dt.invite_user_email)}):t.jsxs("span",{style:{color:"var(--muted)"},children:["ID: ",H.invite_user_id]})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionAmount")}),t.jsx("strong",{children:Ha(H.commission_balance)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.commissionStatus")}),t.jsxs("div",{className:"status-indicator",children:[t.jsx("span",{className:`status-dot ${(Ge[H.commission_status]??{dotClass:"pending"}).dotClass}`}),t.jsx("span",{children:(Ge[H.commission_status]??{label:`#${H.commission_status}`}).label})]})]})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.amount")}),t.jsx("span",{children:Ha(H.total_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.balanceLabel")}),t.jsx("span",{children:Ha(H.balance_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.discountLabel")}),t.jsx("span",{children:Ha(H.discount_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.refundLabel")}),t.jsx("span",{children:Ha(H.refund_amount)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.surplusLabel")}),t.jsx("span",{children:Ha(H.surplus_amount)})]})]}),t.jsx("hr",{style:{border:"none",borderTop:"1px solid var(--line)",margin:"16px 0"}}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:[t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.createdLabel")}),t.jsx("span",{children:Eh(H.created_at)})]}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[t.jsx("span",{style:{color:"var(--muted)"},children:o("order.updatedLabel")}),t.jsx("span",{children:Eh(H.updated_at)})]})]})]})})]})}):null,oe?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel compact-modal",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("order.assign")}),t.jsx("p",{children:o("order.assignHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>E(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Pt,children:[t.jsxs("label",{children:[t.jsx("span",{children:o("order.email")}),t.jsx("input",{className:"config-input",required:!0,type:"email",value:oe.email,onChange:G=>E({...oe,email:G.target.value}),placeholder:"user@example.com"})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.plan")}),t.jsx("select",{className:"config-input",required:!0,value:oe.plan_id,onChange:G=>E({...oe,plan_id:G.target.value}),children:_.map(G=>t.jsx("option",{value:G.id,children:G.name},G.id))})]}),t.jsxs("label",{children:[t.jsx("span",{children:o("order.period")}),t.jsx("select",{className:"config-input",value:oe.period,onChange:G=>E({...oe,period:G.target.value}),children:Object.entries(zh).map(([G,Ne])=>t.jsx("option",{value:G,children:Ne},G))})]}),t.jsxs("label",{children:[t.jsxs("span",{children:[o("order.totalAmount")," (cents)"]}),t.jsx("input",{className:"config-input",type:"number",min:"0",required:!0,value:oe.total_amount,onChange:G=>E({...oe,total_amount:G.target.value})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>E(null),children:o("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:$,children:[t.jsx(ka,{size:16}),o($?"order.assigning":"order.assign")]})]})]})]})}):null]})}function zo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function To(s){return{month_price:s("period.month"),quarter_price:s("period.quarter"),half_year_price:s("period.halfYear"),year_price:s("period.year"),two_year_price:s("period.twoYear"),three_year_price:s("period.threeYear"),onetime_price:s("period.onetime"),reset_price:s("period.resetTraffic")}}function ud(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",limit_use_with_user:(s==null?void 0:s.limit_use_with_user)!=null?String(s.limit_use_with_user):"",limit_plan_ids:(s==null?void 0:s.limit_plan_ids)??[],limit_period:(s==null?void 0:s.limit_period)??[],generate_count:""}}function Oj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,_]=f.useState(1),[v,g]=f.useState([]),[y,j]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState("");f.useEffect(()=>{y||ie("")},[y]);const oe=f.useCallback(async(N=1)=>{Y(!0),B("");try{const R=await gx(N,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("coupon.loadFailed"))}finally{Y(!1)}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}oe(1),yl().then(g).catch(()=>{})},[oe,s]);async function E(N){var R,te;if(N.preventDefault(),!!y){K(!0),B(""),O("");try{const M=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await w1({id:y.id,name:y.name,type:Number(y.type),value:M,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,limit_use_with_user:y.limit_use_with_user?Number(y.limit_use_with_user):null,limit_plan_ids:y.limit_plan_ids.length?y.limit_plan_ids:null,limit_period:y.limit_period.length?y.limit_period:null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(R=window.showToast)==null||R.call(window,i("coupon.saveSuccess"),"success"),await oe(m)}catch(M){(te=window.showToast)==null||te.call(window,M instanceof Error?M.message:i("coupon.saveFailed"),"error")}finally{K(!1)}}}async function $(N){var R;try{await _1(N),await oe(m)}catch(te){(R=window.showToast)==null||R.call(window,te instanceof Error?te.message:i("coupon.toggleFailed"),"error")}}async function ae(N){var R;(R=window.showConfirm)==null||R.call(window,{message:i("coupon.deleteConfirm"),onConfirm:async()=>{var te,M;try{await N1(N),(te=window.showToast)==null||te.call(window,i("coupon.deleteSuccess"),"success"),await oe(m)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:i("coupon.deleteFailed"),"error")}}})}const me=Math.ceil(p/15);return t.jsxs(Yt,{title:i("coupon.title"),subtitle:i("coupon.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("coupon.heading")}),t.jsxs("p",{children:[p," ",i("coupon.totalCoupons")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void oe(m),disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(ud()),children:[t.jsx(Sa,{size:16}),i("coupon.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(yt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("coupon.name")}),t.jsx("th",{children:i("coupon.code")}),t.jsx("th",{children:i("coupon.type")}),t.jsx("th",{children:i("coupon.value")}),t.jsx("th",{children:i("coupon.usageLimit")}),t.jsx("th",{children:i("coupon.limitPlans")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("coupon.limitPeriods")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(N=>{var re,A;const R=(re=N.limit_plan_ids)==null?void 0:re.map(J=>{var x;return((x=v.find(W=>W.id===J))==null?void 0:x.name)||`#${J}`}).join(", "),te=To(i),M=(A=N.limit_period)==null?void 0:A.map(J=>te[J]||J).join(", ");return t.jsxs("tr",{children:[t.jsx("td",{children:N.id}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:N.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:N.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})}),t.jsx("td",{children:t.jsx("strong",{children:N.type===1?_a(N.value):`${N.value}%`})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2px"},children:[t.jsxs("span",{children:[i("coupon.maxUses"),": ",N.limit_use??"∞"]}),N.limit_use_with_user!=null&&t.jsxs("span",{className:"tag muted-tag",style:{fontSize:"11px",alignSelf:"flex-start"},children:[i("coupon.maxUses")," ",N.limit_use_with_user,"/",i("coupon.perUser")]})]})}),t.jsx("td",{children:t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"4px"},children:[R?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:[i("coupon.plans"),": ",R]})}):null,M?t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px"},children:t.jsxs("span",{className:"tag",style:{backgroundColor:"rgba(16,185,129,0.1)",color:"#10b981"},children:[i("coupon.cycles"),": ",M]})}):null,!R&&!M?t.jsx("span",{className:"tag muted-tag",children:i("coupon.noneAllPlans")}):null]})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("small",{children:[zo(N.started_at)," — ",zo(N.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(ud(N)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ae(N.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},N.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:10,children:t.jsx("div",{className:"empty-state",children:i("coupon.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-coupon-list",children:[o.map(N=>{var R,te,M,re;return t.jsxs("div",{className:"mobile-coupon-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),t.jsx("span",{className:`tag type-tag ${N.type===1?"fixed-type":"percent-type"}`,children:N.type===1?i("coupon.type.fixed"):i("coupon.type.percent")})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("coupon.code")}),t.jsxs("div",{className:"copyable-code-pill",title:i("coupon.clickToCopy"),onClick:()=>{Kn(N.code).then(A=>{var J;(J=window.showToast)==null||J.call(window,A?`${i("coupon.copiedCode")}: ${N.code}`:i("common.copyFailed"),A?"success":"error")})},children:[t.jsx("code",{className:"mono",children:N.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsxs("div",{className:"ticket-restrictions",children:[(R=N.limit_plan_ids)!=null&&R.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:N.limit_plan_ids.map(A=>{const J=v.find(x=>x.id===A);return t.jsx("span",{className:"res-pill plan-pill",children:J?J.name:`#${A}`},A)})})]}):null,(te=N.limit_period)!=null&&te.length?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"⏱️"}),t.jsx("div",{className:"pill-list",children:N.limit_period.map(A=>t.jsx("span",{className:"res-pill cycle-pill",children:To(i)[A]||A},A))})]}):null,!((M=N.limit_plan_ids)!=null&&M.length)&&!((re=N.limit_period)!=null&&re.length)?t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("coupon.appliesToAll")]}):null]}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[zo(N.started_at)," — ",zo(N.ended_at)]})]}),t.jsxs("div",{className:"ticket-switch-row",children:[t.jsx("span",{className:"switch-label",children:i("coupon.showOnClient")}),t.jsx("button",{className:`admin-switch ${N.show?"active":""}`,type:"button",onClick:()=>void $(N.id),"aria-label":i("coupon.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:N.type===1?_a(N.value).replace(/\s?₫/,""):`${N.value}`}),t.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":i("coupon.percentOff")})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("coupon.maxUses")}),t.jsx("span",{className:"usage-val",children:N.limit_use??"∞"}),N.limit_use_with_user!=null?t.jsxs("span",{className:"usage-per-user",children:[i("coupon.maxUses")," ",N.limit_use_with_user,"/",i("coupon.perUser")]}):null]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(ud(N)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ae(N.id),"aria-label":i("common.delete"),children:t.jsx(Gt,{size:15})})]})]})]},N.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("coupon.empty")}):null]}),me>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{_(m-1),oe(m-1)},children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",me]}),t.jsx("button",{className:"mini-button",disabled:m>=me,onClick:()=>{_(m+1),oe(m+1)},children:t.jsx(gn,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("coupon.edit"):i("coupon.add")}),t.jsx("p",{children:i("coupon.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:E,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:N=>j({...y,name:N.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.type")}),t.jsxs("select",{className:"config-input",value:y.type,onChange:N=>j({...y,type:N.target.value}),children:[t.jsx("option",{value:"1",children:i("coupon.type.fixed")}),t.jsx("option",{value:"2",children:i("coupon.type.percent")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:N=>j({...y,value:N.target.value})})]})]}),y.id?null:t.jsxs("label",{children:[t.jsxs("span",{children:[i("coupon.code")," (",i("coupon.autoIfEmpty"),")"]}),t.jsx("input",{className:"config-input",value:y.code,onChange:N=>j({...y,code:N.target.value}),placeholder:i("coupon.autoGenerate")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.startTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:N=>j({...y,started_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.endTime")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:N=>j({...y,ended_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.usageLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:N=>j({...y,limit_use:N.target.value}),placeholder:i("coupon.unlimited")})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.userLimit")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use_with_user,onChange:N=>j({...y,limit_use_with_user:N.target.value}),placeholder:i("coupon.unlimited")})]})]}),y.id?null:t.jsxs("label",{children:[t.jsx("span",{children:i("coupon.generateCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:N=>j({...y,generate_count:N.target.value}),placeholder:i("coupon.single")})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPlans")}),y.limit_plan_ids.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_plan_ids.map(N=>{const R=v.find(te=>te.id===N);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{const te=y.limit_plan_ids.filter(M=>M!==N);j({...y,limit_plan_ids:te})},children:[R?R.name:`#${N}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},N)})}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("coupon.searchPlans"),value:ee,onChange:N=>ie(N.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[v.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=y.limit_plan_ids.includes(N.id);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:te=>{const M=te.target.checked?[...y.limit_plan_ids,N.id]:y.limit_plan_ids.filter(re=>re!==N.id);j({...y,limit_plan_ids:M})}}),t.jsx("span",{children:N.name})]},N.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("coupon.noPlans")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"12px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("coupon.restrictedPeriods")}),y.limit_period.length>0&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:y.limit_period.map(N=>t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(16, 185, 129, 0.15)",color:"#10b981",borderRadius:"6px",border:"1px solid rgba(16, 185, 129, 0.25)"},onClick:()=>{const R=y.limit_period.filter(te=>te!==N);j({...y,limit_period:R})},children:[To(i)[N]||N," ",t.jsx("span",{style:{opacity:.6},children:"×"})]},N))}),t.jsx("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:Object.entries(To(i)).map(([N,R])=>{const te=y.limit_period.includes(N);return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"checkbox",style:{cursor:"pointer",accentColor:"#10b981"},checked:te,onChange:M=>{const re=M.target.checked?[...y.limit_period,N]:y.limit_period.filter(A=>A!==N);j({...y,limit_period:re})}}),t.jsx("span",{children:R})]},N)})})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(ka,{size:16}),i(P?"coupon.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Eo(s){return new Date(s*1e3).toLocaleString("vi-VN")}function Aj(s){return{1:s("giftcard.typeAmount"),2:s("giftcard.typeDuration"),3:s("giftcard.typeTraffic"),4:s("giftcard.typeReset"),5:s("giftcard.typePlan")}}function pd(s){return{id:s==null?void 0:s.id,name:(s==null?void 0:s.name)??"",type:String((s==null?void 0:s.type)??1),value:s?String(s.type===1?s.value/100:s.value):"",code:(s==null?void 0:s.code)??"",started_at:s?new Date(s.started_at*1e3).toISOString().slice(0,16):"",ended_at:s?new Date(s.ended_at*1e3).toISOString().slice(0,16):"",limit_use:(s==null?void 0:s.limit_use)!=null?String(s.limit_use):"",plan_id:(s==null?void 0:s.plan_id)!=null?String(s.plan_id):"",generate_count:""}}function Uj(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(0),[m,_]=f.useState(1),[v,g]=f.useState([]),[y,j]=f.useState(null),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),[U,O]=f.useState(""),[ee,ie]=f.useState("");f.useEffect(()=>{y||ie("")},[y]);const oe=Aj(i),E=f.useCallback(async(N=1)=>{Y(!0),B("");try{const R=await S1(N,15);d(R.data),h(R.total)}catch(R){B(R instanceof Error?R.message:i("giftcard.loadFailed"))}finally{Y(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}E(1),yl().then(g).catch(()=>{})},[E,s]);async function $(N){var R,te;if(N.preventDefault(),!!y){K(!0),B(""),O("");try{const M=y.type==="1"?Math.round(Number(y.value)*100):Number(y.value);await k1({id:y.id,name:y.name,type:Number(y.type),value:M,code:y.code||void 0,started_at:Math.floor(new Date(y.started_at).getTime()/1e3),ended_at:Math.floor(new Date(y.ended_at).getTime()/1e3),limit_use:y.limit_use?Number(y.limit_use):null,plan_id:y.plan_id?Number(y.plan_id):null,generate_count:y.generate_count?Number(y.generate_count):void 0}),j(null),(R=window.showToast)==null||R.call(window,i("giftcard.saveSuccess"),"success"),await E(m)}catch(M){(te=window.showToast)==null||te.call(window,M instanceof Error?M.message:i("giftcard.saveFailed"),"error")}finally{K(!1)}}}async function ae(N){var R;(R=window.showConfirm)==null||R.call(window,{message:i("giftcard.deleteConfirm"),onConfirm:async()=>{var te,M;try{await C1(N),(te=window.showToast)==null||te.call(window,i("giftcard.deleteSuccess"),"success"),await E(m)}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:i("giftcard.deleteFailed"),"error")}}})}const me=Math.ceil(p/15);return t.jsxs(Yt,{title:i("giftcard.title"),subtitle:i("giftcard.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("giftcard.heading")}),t.jsxs("p",{children:[p," ",i("giftcard.totalCards")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void E(m),disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>j(pd()),children:[t.jsx(Sa,{size:16}),i("giftcard.add")]})]})]}),C?t.jsx("div",{className:"form-error",children:C}):null,U?t.jsx("div",{className:"form-success",children:U}):null,z&&o.length===0?t.jsx(yt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("giftcard.thId")}),t.jsx("th",{children:i("giftcard.thName")}),t.jsx("th",{children:i("giftcard.thCode")}),t.jsx("th",{children:i("giftcard.thType")}),t.jsx("th",{children:i("giftcard.thValue")}),t.jsx("th",{children:i("giftcard.thBoundPlan")}),t.jsx("th",{children:i("giftcard.thUses")}),t.jsx("th",{children:i("giftcard.thPeriod")}),t.jsx("th",{children:i("giftcard.thActions")})]})}),t.jsxs("tbody",{children:[o.map(N=>{var R;return t.jsxs("tr",{children:[t.jsx("td",{children:N.id}),t.jsx("td",{children:t.jsx("strong",{children:N.name})}),t.jsx("td",{children:t.jsx("span",{className:"mono",children:N.code})}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:oe[N.type]??N.type})}),t.jsx("td",{children:t.jsx("strong",{children:N.type===1?_a(N.value):N.value})}),t.jsx("td",{children:N.plan_id?t.jsx("span",{className:"tag",style:{backgroundColor:"rgba(59,130,246,0.1)",color:"#3b82f6"},children:((R=v.find(te=>te.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`}):t.jsx("span",{className:"tag muted-tag",children:i("giftcard.planNone")})}),t.jsx("td",{children:N.limit_use??"∞"}),t.jsx("td",{children:t.jsxs("small",{children:[Eo(N.started_at)," — ",Eo(N.ended_at)]})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>j(pd(N)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void ae(N.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},N.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:9,children:t.jsx("div",{className:"empty-state",children:i("giftcard.empty")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-giftcard-list",children:[o.map(N=>{var R;return t.jsxs("div",{className:"mobile-giftcard-card ticket-style",children:[t.jsxs("div",{className:"ticket-main",children:[t.jsxs("div",{className:"ticket-badge-row",children:[t.jsxs("span",{className:"ticket-id-tag",children:["ID: ",N.id]}),t.jsx("span",{className:"tag type-tag fixed-type",children:oe[N.type]??N.type})]}),t.jsx("div",{className:"ticket-title-row",children:t.jsx("h3",{className:"ticket-name",title:N.name,children:N.name})}),t.jsxs("div",{className:"ticket-code-row",children:[t.jsx("span",{className:"ticket-label",children:i("giftcard.mobileCode")}),t.jsxs("div",{className:"copyable-code-pill",title:i("giftcard.clickToCopy"),onClick:()=>{Kn(N.code).then(te=>{var M;(M=window.showToast)==null||M.call(window,te?i("giftcard.copiedCode").replace("{code}",N.code):i("common.copyFailed"),te?"success":"error")})},children:[t.jsx("code",{className:"mono",children:N.code}),t.jsx("span",{className:"copy-icon-label",children:"📋"})]})]}),t.jsx("div",{className:"ticket-restrictions",children:N.plan_id?t.jsxs("div",{className:"restriction-pills",children:[t.jsx("span",{className:"res-icon",children:"📦"}),t.jsx("div",{className:"pill-list",children:t.jsx("span",{className:"res-pill plan-pill",children:((R=v.find(te=>te.id===N.plan_id))==null?void 0:R.name)||`#${N.plan_id}`})})]}):t.jsxs("span",{className:"all-plans-badge",children:["🔓 ",i("giftcard.appliesToAll")]})}),t.jsxs("div",{className:"ticket-dates",children:[t.jsx("span",{className:"date-icon",children:"📅"}),t.jsxs("span",{children:[Eo(N.started_at)," — ",Eo(N.ended_at)]})]})]}),t.jsxs("div",{className:"ticket-divider",children:[t.jsx("div",{className:"ticket-notch notch-top"}),t.jsx("div",{className:"ticket-notch notch-bottom"})]}),t.jsxs("div",{className:"ticket-side",children:[t.jsxs("div",{className:"ticket-value-wrap",children:[t.jsx("span",{className:"ticket-value",children:N.type===1?_a(N.value).replace(/\s?₫/,""):`${N.value}`}),t.jsx("span",{className:"ticket-value-unit",children:N.type===1?"₫":oe[N.type]??""})]}),t.jsxs("div",{className:"ticket-usage-wrap",children:[t.jsx("span",{className:"usage-label",children:i("giftcard.maxUses")}),t.jsx("span",{className:"usage-val",children:N.limit_use??"∞"})]}),t.jsxs("div",{className:"ticket-actions",children:[t.jsx("button",{className:"icon-action-btn edit-btn",type:"button",onClick:()=>j(pd(N)),"aria-label":i("common.edit"),children:t.jsx(qt,{size:15})}),t.jsx("button",{className:"icon-action-btn delete-btn",type:"button",onClick:()=>void ae(N.id),"aria-label":i("common.delete"),children:t.jsx(Gt,{size:15})})]})]})]},N.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("giftcard.empty")}):null]}),me>1?t.jsxs("div",{className:"pagination",style:{marginTop:"16px",justifyContent:"center"},children:[t.jsx("button",{className:"mini-button",disabled:m<=1,onClick:()=>{_(m-1),E(m-1)},children:t.jsx(xn,{size:16})}),t.jsxs("span",{className:"page-info",children:[m," / ",me]}),t.jsx("button",{className:"mini-button",disabled:m>=me,onClick:()=>{_(m+1),E(m+1)},children:t.jsx(gn,{size:16})})]}):null,y?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:y.id?i("giftcard.edit"):i("giftcard.create")}),t.jsx("p",{children:i("giftcard.modalHelp")})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>j(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:$,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.name")}),t.jsx("input",{className:"config-input",required:!0,value:y.name,onChange:N=>j({...y,name:N.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelType")}),t.jsx("select",{className:"config-input",value:y.type,onChange:N=>j({...y,type:N.target.value}),children:Object.entries(oe).map(([N,R])=>t.jsx("option",{value:N,children:R},N))})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.value")}),t.jsx("input",{className:"config-input",type:"number",required:!0,min:"0",step:"0.01",value:y.value,onChange:N=>j({...y,value:N.target.value})})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelStart")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.started_at,onChange:N=>j({...y,started_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelEnd")}),t.jsx("input",{className:"config-input",type:"datetime-local",required:!0,value:y.ended_at,onChange:N=>j({...y,ended_at:N.target.value}),onClick:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)},onFocus:N=>{var R,te;return(te=(R=N.currentTarget).showPicker)==null?void 0:te.call(R)}})]})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelMaxUses")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.limit_use,onChange:N=>j({...y,limit_use:N.target.value}),placeholder:i("giftcard.placeholderUnlimited")})]}),y.id?t.jsx("div",{}):t.jsxs("label",{children:[t.jsx("span",{children:i("giftcard.labelBatchCount")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:y.generate_count,onChange:N=>j({...y,generate_count:N.target.value}),placeholder:i("giftcard.placeholderSingle")})]})]}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"6px",marginTop:"8px"},children:[t.jsx("span",{style:{fontSize:"13px",fontWeight:"600",color:"var(--text)"},children:i("giftcard.bindPlan")}),y.plan_id&&t.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"6px",marginBottom:"4px"},children:(()=>{const N=v.find(R=>String(R.id)===y.plan_id);return t.jsxs("span",{className:"tag",style:{cursor:"pointer",fontSize:"11px",padding:"4px 8px",display:"inline-flex",alignItems:"center",gap:"4px",backgroundColor:"rgba(59, 130, 246, 0.15)",color:"#3b82f6",borderRadius:"6px",border:"1px solid rgba(59, 130, 246, 0.25)"},onClick:()=>{j({...y,plan_id:""})},children:[N?N.name:`#${y.plan_id}`," ",t.jsx("span",{style:{opacity:.6},children:"×"})]})})()}),v.length>5&&t.jsx("input",{className:"config-input",style:{width:"100%",height:"34px",fontSize:"12px",padding:"6px 10px",marginBottom:"4px"},placeholder:i("giftcard.searchPlans"),value:ee,onChange:N=>ie(N.target.value)}),t.jsxs("div",{style:{maxHeight:"140px",overflowY:"auto",border:"1px solid var(--line)",borderRadius:"8px",backgroundColor:"var(--surface-soft)",padding:"8px 12px",display:"flex",flexDirection:"column",gap:"6px"},children:[t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:!y.plan_id,onChange:()=>{j({...y,plan_id:""})}}),t.jsx("span",{children:i("giftcard.noneAllPlans")})]}),v.filter(N=>N.name.toLowerCase().includes(ee.toLowerCase())).map(N=>{const R=String(N.id)===y.plan_id;return t.jsxs("label",{style:{fontSize:"13px",display:"flex",alignItems:"center",gap:"8px",cursor:"pointer",padding:"2px 0",color:"var(--text)",userSelect:"none"},children:[t.jsx("input",{type:"radio",style:{cursor:"pointer",accentColor:"#3b82f6"},checked:R,onChange:te=>{te.target.checked&&j({...y,plan_id:String(N.id)})}}),t.jsx("span",{children:N.name})]},N.id)}),v.length===0&&t.jsx("span",{style:{color:"var(--text-muted)",fontSize:"12px"},children:i("giftcard.noPlans")})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>j(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P,children:[t.jsx(ka,{size:16}),i(P?"giftcard.saving":"common.save")]})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}const es="Tương đối",hn="=";function Mo(s){return s?new Date(s*1e3).toLocaleString("en-US",{year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"}):"—"}function Rj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Dh(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function md(s){return+(s/1073741824).toFixed(2)}function fd(s){return Math.round(s*1073741824)}function Do(s){return(s/1073741824).toFixed(2)}function Hj(s){return s?new Date(s*1e3).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):"—"}function si(s){if(s===0)return"0.00 MB";const i=s/1073741824;return i<.1?`${(s/1048576).toFixed(2)} MB`:`${i.toFixed(2)} GB`}const Dd=[{key:"id",label:"ID",defaultVisible:!0},{key:"email",label:"Email",defaultVisible:!0},{key:"status",label:"Status",defaultVisible:!0},{key:"plan",label:"Plan",defaultVisible:!0},{key:"group",label:"Group",defaultVisible:!1},{key:"used",label:"Used (GB)",defaultVisible:!0},{key:"traffic",label:"Traffic (GB)",defaultVisible:!0},{key:"devices",label:"Devices",defaultVisible:!0},{key:"expires",label:"Expires",defaultVisible:!0},{key:"balance",label:"Balance",defaultVisible:!0},{key:"commission",label:"Commission",defaultVisible:!1},{key:"joined",label:"Joined",defaultVisible:!0},{key:"actions",label:"Actions",defaultVisible:!0}],Mx="user_visible_columns";function Lj(){if(typeof window<"u")try{const s=localStorage.getItem(Mx);if(s)return new Set(JSON.parse(s))}catch{}return new Set(Dd.filter(s=>s.defaultVisible).map(s=>s.key))}const qo=[{value:"email",label:"Email",condition:es,placeholder:"user@example.com"},{value:"id",label:"User ID",condition:hn,placeholder:"12345"},{value:"plan_id",label:"Plan ID",condition:hn,placeholder:"1 hoặc null"},{value:"banned",label:"Banned",condition:hn,placeholder:"0 hoặc 1"},{value:"is_admin",label:"Admin",condition:hn,placeholder:"0 hoặc 1"},{value:"invite_by_email",label:"Inviter Email",condition:es,placeholder:"inviter@example.com"},{value:"invite_user_id",label:"Inviter ID",condition:hn,placeholder:"12345"},{value:"uuid",label:"UUID",condition:es,placeholder:"UUID"},{value:"token",label:"Token",condition:es,placeholder:"Token"},{value:"remarks",label:"Remarks",condition:es,placeholder:"Ghi chú"},{value:"transfer_enable",label:"Total traffic (GB)",condition:hn,placeholder:"300"},{value:"d",label:"Download used (GB)",condition:hn,placeholder:"10"},{value:"device_limit",label:"Device limit",condition:hn,placeholder:"3"},{value:"expired_at",label:"Expired timestamp",condition:hn,placeholder:"1780366403"}],qj=[{value:"month_price",label:"1 Month"},{value:"quarter_price",label:"3 Months"},{value:"half_year_price",label:"6 Months"},{value:"year_price",label:"1 Year"},{value:"two_year_price",label:"2 Years"},{value:"three_year_price",label:"3 Years"},{value:"onetime_price",label:"One-time"},{value:"reset_price",label:"Reset traffic"}];function Wt(s,i){switch(s){case"id":return i("user.colId");case"email":return i("user.colEmail");case"status":return i("user.colStatus");case"plan":return i("user.colPlan");case"group":return i("user.colGroup");case"used":return i("user.colUsed");case"traffic":return i("user.colTraffic");case"devices":return i("user.colDevices");case"expires":return i("user.colExpires");case"balance":return i("user.colBalance");case"commission":return i("user.colCommission");case"joined":return i("user.colJoined");case"actions":return i("user.colActions");default:return""}}function Bj(s,i){var p;const o=((p=qo.find(h=>h.value===s))==null?void 0:p.label)??s,d=h=>{const m=i(h);return m===h?o:m};switch(s){case"email":return i("user.filterEmail");case"id":return i("user.filterId");case"plan_id":return i("user.filterPlanId");case"banned":return d("user.filterBanned");case"is_admin":return d("user.filterAdmin");case"invite_by_email":return i("user.filterInviterEmail");case"invite_user_id":return i("user.filterInviterUserId");case"uuid":return d("user.filterUuid");case"token":return d("user.filterToken");case"remarks":return i("user.filterRemarks");case"transfer_enable":return d("user.filterTransferEnable");case"d":return d("user.filterDownloadUsed");case"device_limit":return d("user.filterDeviceLimit");case"expired_at":return d("user.filterExpiredAt");default:return o}}function hd(s){return qo.find(i=>i.value===s)??qo[0]}function Gj(s,i){switch(s){case"month_price":return i("order.period.month_price");case"quarter_price":return i("order.period.quarter_price");case"half_year_price":return i("order.period.half_year_price");case"year_price":return i("order.period.year_price");case"two_year_price":return i("order.period.two_year_price");case"three_year_price":return i("order.period.three_year_price");case"onetime_price":return i("order.period.onetime_price");case"reset_price":return i("order.period.reset_price");default:return""}}function Yj(){const s=Dt(),i=Ja(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState([]),[_,v]=f.useState([]),[g,y]=f.useState(0),[j,z]=f.useState(1),[Y,P]=f.useState(""),[K,C]=f.useState("email"),[B,U]=f.useState(!0),[O,ee]=f.useState(""),[ie,oe]=f.useState(Lj),[E,$]=f.useState(!1),ae=f.useRef(null),[me,N]=f.useState(null),[R,te]=f.useState(null),[M,re]=f.useState({}),[A,J]=f.useState(!1),[x,W]=f.useState(!1),[H,S]=f.useState({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),[Q,de]=f.useState(!1),[ue,Se]=f.useState(null),[ke,Oe]=f.useState({plan_id:"",period:"month_price",total_amount:""}),[nt,Ge]=f.useState(!1),[Ke,Ct]=f.useState(null),[Nt,we]=f.useState(null),[Le,na]=f.useState([]),[$t,pa]=f.useState(0),[xt,Zt]=f.useState(1),[Pt]=f.useState(10),[zt,ma]=f.useState(!1),[T,be]=f.useState("");f.useEffect(()=>{function w(he){const xe=he.target instanceof Element?he.target:null;me!==null&&(!xe||!xe.closest(".action-dropdown-wrap, .mobile-action-sheet"))&&N(null),E&&ae.current&&!ae.current.contains(he.target)&&$(!1)}return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[me,E]);function qe(w){oe(he=>{const xe=new Set(he);xe.has(w)?xe.delete(w):xe.add(w);try{localStorage.setItem(Mx,JSON.stringify([...xe]))}catch{}return xe})}const ye=w=>ie.has(w),dt=Dd.filter(w=>ie.has(w.key)).length,G=f.useCallback(async(w=1,he,xe)=>{U(!0),ee("");try{const Ae=he==null?void 0:he.trim(),At=hd(xe||"email"),ha=Ae?[{key:At.value,condition:At.condition,value:Ae}]:void 0,jt=await zd(w,15,ha);p(jt.data),y(jt.total)}catch(Ae){ee(Ae instanceof Error?Ae.message:o("user.loadFailed"))}finally{U(!1)}},[]),Ne=f.useCallback(async()=>{try{const[w,he]=await Promise.all([yl(),ds()]);m(w),v(he)}catch{}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const w=new URLSearchParams(i.search),xe=[["email",w.get("email")||w.get("filter_email")],["id",w.get("id")||w.get("user_id")||w.get("filter_user_id")],["plan_id",w.get("plan_id")],["invite_user_id",w.get("invite_user_id")],["invite_by_email",w.get("invite_by_email")],["uuid",w.get("uuid")],["token",w.get("token")],["remarks",w.get("remarks")]].find(([,Ae])=>Ae==null?void 0:Ae.trim());if(xe){const[Ae,At]=xe,ha=hd(Ae),jt=(At==null?void 0:At.trim())??"";C(ha.value),P(jt),z(1),G(1,jt,ha.value)}else G(1);Ne()},[G,Ne,s,i.search]);function je(){z(1),G(1,Y,K)}function Te(){P(""),z(1),G(1)}function Pe(w){z(w),G(w,Y,K)}function Ve(w){if(w.plan_name)return w.plan_name;if(!w.plan_id)return"—";const he=h.find(xe=>xe.id===w.plan_id);return he?he.name:`#${w.plan_id}`}function Ye(w){if(!w.group_id)return"—";const he=_.find(xe=>xe.id===w.group_id);return he?he.name:`#${w.group_id}`}function Re(w){return`${w.alive_ip??0} / ${w.device_limit??"∞"}`}async function ut(w){var Ae,At;const he=w.subscribe_url;if(!he){(Ae=window.showToast)==null||Ae.call(window,o("user.toastNoSubscribeUrl"),"error");return}const xe=await Kn(he);(At=window.showToast)==null||At.call(window,o(xe?"user.toastUrlCopied":"common.copyFailed"),xe?"success":"error"),N(null)}function vl(w){var he;N(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmResetSecret"),onConfirm:async()=>{var xe,Ae;try{await M1(w.id),(xe=window.showToast)==null||xe.call(window,o("user.toastSecretResetSuccess"),"success"),await G(j,Y,K)}catch(At){(Ae=window.showToast)==null||Ae.call(window,At instanceof Error?At.message:o("user.toastSecretResetFailed"),"error")}}})}function Fn(w){var he;N(null),(he=window.showConfirm)==null||he.call(window,{message:o("user.confirmDelete"),onConfirm:async()=>{var xe,Ae;try{await T1(w.id),(xe=window.showToast)==null||xe.call(window,o("user.toastDeletedSuccess"),"success"),await G(j,Y,K)}catch(At){(Ae=window.showToast)==null||Ae.call(window,At instanceof Error?At.message:o("user.toastDeletedFailed"),"error")}}})}function Wn(w){var xe;N(null);const he=w.subscribe_url;if(!he){(xe=window.showToast)==null||xe.call(window,o("user.toastNoSubscribeUrl"),"error");return}Ct({url:he,userId:w.id})}function Ga(w){N(null),s.push(`/order?user_id=${w.id}`)}function fa(w){N(null),s.push(`/subscription?user_id=${w.id}`)}function Ya(w){N(null),C("invite_user_id"),P(String(w.id)),G(1,String(w.id),"invite_user_id")}async function ta(w,he){ma(!0),be("");try{const xe=await H1(w,he,Pt);na(xe.data||[]),pa(xe.total||0),Zt(he)}catch(xe){be(xe instanceof Error?xe.message:o("user.historyLoading"))}finally{ma(!1)}}function L(w){N(null),we(w),ta(w.id,1)}function ce(w){N(null),Se(w.email),Oe({plan_id:"",period:"month_price",total_amount:""})}async function se(w){var he,xe;if(w.preventDefault(),!!ue){Ge(!0);try{await xx({email:ue,plan_id:Number(ke.plan_id),period:ke.period,total_amount:(Number(ke.total_amount)||0)*100}),(he=window.showToast)==null||he.call(window,o("user.toastAssignSuccess"),"success"),Se(null)}catch(Ae){(xe=window.showToast)==null||xe.call(window,Ae instanceof Error?Ae.message:o("user.toastAssignFailed"),"error")}finally{Ge(!1)}}}function De(w){N(null),te(w),re({id:w.id,email:w.email,invite_user_email:"",password:"",balance:w.balance,commission_balance:w.commission_balance,u:md(w.u),d:md(w.d),transfer_enable:md(w.transfer_enable),device_limit:w.device_limit,network_settings:w.network_settings??"",expired_at:Rj(w.expired_at),plan_id:w.plan_id,banned:w.banned,commission_type:w.commission_type??0,commission_rate:w.commission_rate??"",discount:w.discount??"",speed_limit:w.speed_limit,is_admin:w.is_admin,is_staff:w.is_staff,remarks:w.remarks??""})}function Ee(w,he){re(xe=>({...xe,[w]:he}))}async function Ie(w){var he,xe;if(w.preventDefault(),!!R){J(!0);try{const Ae={id:R.id,email:M.email,plan_id:M.plan_id||null,expired_at:Dh(String(M.expired_at??"")),transfer_enable:fd(Number(M.transfer_enable??0)),speed_limit:M.speed_limit||null,device_limit:M.device_limit||null,u:fd(Number(M.u??0)),d:fd(Number(M.d??0)),balance:Number(M.balance??0),commission_balance:Number(M.commission_balance??0),commission_rate:M.commission_rate!==""&&M.commission_rate!==null?Number(M.commission_rate):null,commission_type:Number(M.commission_type??0),discount:M.discount!==""&&M.discount!==null?Number(M.discount):null,network_settings:M.network_settings||null,remarks:M.remarks||null,is_admin:Number(M.is_admin??0),is_staff:Number(M.is_staff??0),banned:Number(M.banned??0)};M.invite_user_email&&(Ae.invite_user_email=M.invite_user_email),M.password&&(Ae.password=M.password),await z1(Ae),(he=window.showToast)==null||he.call(window,o("user.toastSaveSuccess"),"success"),te(null),await G(j,Y,K)}catch(Ae){(xe=window.showToast)==null||xe.call(window,Ae instanceof Error?Ae.message:o("user.toastSaveFailed"),"error")}finally{J(!1)}}}async function lt(w){var he,xe;w.preventDefault(),de(!0);try{await E1({email_prefix:H.email_prefix,email_suffix:H.email_suffix,password:H.password||void 0,plan_id:H.plan_id?Number(H.plan_id):void 0,expired_at:Dh(H.expired_at)}),(he=window.showToast)==null||he.call(window,o("user.toastCreateSuccess"),"success"),W(!1),S({email_prefix:"",email_suffix:"gmail.com",password:"",plan_id:"",expired_at:""}),await G(j,Y,K)}catch(Ae){(xe=window.showToast)==null||xe.call(window,Ae instanceof Error?Ae.message:o("user.toastCreateFailed"),"error")}finally{de(!1)}}const it=Math.ceil(g/15),st=hd(K);return t.jsxs(Yt,{title:o("user.title"),subtitle:o("user.subtitle"),children:[t.jsx("style",{children:`
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
      `}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("user.heading")}),t.jsxs("p",{children:[g," ",o("user.totalUsers")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("div",{className:"col-picker-wrap",ref:ae,children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>$(!E),children:[t.jsx(hv,{size:16}),o("user.columns")]}),E?t.jsxs("div",{className:"col-picker-dropdown",children:[t.jsx("div",{className:"col-picker-header",children:t.jsx("span",{children:o("user.visibleColumns",{count:dt})})}),Dd.map(w=>t.jsxs("label",{className:"col-picker-item",children:[t.jsx("input",{type:"checkbox",checked:ie.has(w.key),onChange:()=>qe(w.key)}),t.jsx("span",{children:Wt(w.key,o)})]},w.key))]}):null]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:()=>void G(j,Y,K),disabled:B,children:[t.jsx(kt,{size:16}),o("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>W(!0),children:[t.jsx(Sa,{size:16}),o("user.createUser")]})]})]}),t.jsxs("div",{className:"filter-bar",children:[t.jsx("select",{className:"config-input filter-select",value:K,onChange:w=>C(w.target.value),children:qo.map(w=>t.jsx("option",{value:w.value,children:Bj(w.value,o)},w.value))}),t.jsxs("div",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input search-input",value:Y,onChange:w=>P(w.target.value),placeholder:st.placeholder,onKeyDown:w=>w.key==="Enter"&&je()})]}),t.jsxs("button",{className:"ghost-button",type:"button",onClick:je,children:[t.jsx(rs,{size:16}),o("user.filter")]}),Y?t.jsxs("button",{className:"ghost-button",type:"button",onClick:Te,children:[t.jsx(ct,{size:16}),o("user.clearFilter")]}):null]}),O?t.jsx("div",{className:"form-error",children:O}):null,B&&d.length===0?t.jsx(yt,{label:o("user.loading")}):null,t.jsxs("div",{className:`content-loading-container ${B?"is-loading":""}`,children:[t.jsx("div",{className:"page-loading-bar"}),t.jsxs("div",{className:"mobile-user-list",children:[d.map(w=>{const he=Do(w.u+w.d),xe=Do(w.transfer_enable),Ae=parseFloat(he);return t.jsxs("div",{className:"mobile-user-card",children:[t.jsxs("div",{className:"mobile-user-card-header",children:[t.jsxs("div",{className:"user-id-email",children:[t.jsxs("span",{className:"user-id",children:["#",w.id]}),t.jsx("span",{className:"user-email",title:w.email,children:w.email})]}),w.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})]}),t.jsxs("div",{className:"mobile-user-card-body",children:[t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.planGroupLabel")}),t.jsxs("span",{className:"info-val",children:[Ve(w)," / ",w.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(w)]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.trafficUsedLimitLabel")}),t.jsxs("span",{className:"info-val",children:[t.jsxs("span",{className:`traffic-used ${Ae>0?Ae>parseFloat(xe)*.9?"high":"ok":""}`,children:[he," GB"]})," / ",xe," GB"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("devices",o)}),t.jsx("span",{className:"info-val",children:Re(w)})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("expires",o)}),t.jsx("span",{className:"info-val",children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:Mo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:o("user.balanceCommLabel")}),t.jsxs("span",{className:"info-val",children:[(w.balance/100).toFixed(2)," ₫ / ",(w.commission_balance/100).toFixed(2)," ₫"]})]}),t.jsxs("div",{className:"info-row",children:[t.jsx("span",{className:"info-label",children:Wt("joined",o)}),t.jsx("span",{className:"info-val",children:t.jsx("small",{children:Mo(w.created_at)})})]})]}),t.jsx("div",{className:"mobile-user-card-actions",children:t.jsxs("div",{className:`action-dropdown-wrap ${me===w.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(me===w.id?null:w.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),me===w.id?t.jsx("div",{className:"mobile-action-sheet-backdrop",onClick:()=>N(null),children:t.jsxs("div",{className:"mobile-action-sheet",onClick:At=>At.stopPropagation(),children:[t.jsxs("div",{className:"mobile-action-sheet-head",children:[t.jsxs("div",{children:[t.jsx("strong",{children:w.email}),t.jsxs("small",{children:["#",w.id]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>N(null),children:t.jsx(ct,{size:16})})]}),t.jsxs("div",{className:"action-dropdown-menu mobile-action-menu",children:[t.jsxs("button",{type:"button",onClick:()=>De(w),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>ce(w),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void ut(w),children:[t.jsx(Na,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Wn(w),children:[t.jsx(ih,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>vl(w),children:[t.jsx(Ho,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(w),children:[t.jsx(nh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>fa(w),children:[t.jsx(_d,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ya(w),children:[t.jsx(cs,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>L(w),children:[t.jsx(id,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Fn(w),children:[t.jsx(Gt,{size:14}),o("user.actionDelete")]})]})]})}):null]})})]},w.id)}),!B&&d.length===0?t.jsx("div",{className:"empty-state",children:o("user.noUsers")}):null]}),t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table user-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[ye("id")&&t.jsx("th",{children:Wt("id",o)}),ye("email")&&t.jsx("th",{children:Wt("email",o)}),ye("status")&&t.jsx("th",{children:Wt("status",o)}),ye("plan")&&t.jsx("th",{children:Wt("plan",o)}),ye("group")&&t.jsx("th",{children:Wt("group",o)}),ye("used")&&t.jsx("th",{children:Wt("used",o)}),ye("traffic")&&t.jsx("th",{children:Wt("traffic",o)}),ye("devices")&&t.jsx("th",{children:Wt("devices",o)}),ye("expires")&&t.jsx("th",{children:Wt("expires",o)}),ye("balance")&&t.jsx("th",{children:Wt("balance",o)}),ye("commission")&&t.jsx("th",{children:Wt("commission",o)}),ye("joined")&&t.jsx("th",{children:Wt("joined",o)}),ye("actions")&&t.jsx("th",{children:Wt("actions",o)})]})}),t.jsxs("tbody",{children:[d.map(w=>{const he=Do(w.u+w.d),xe=Do(w.transfer_enable),Ae=parseFloat(he);return t.jsxs("tr",{children:[ye("id")&&t.jsx("td",{children:w.id}),ye("email")&&t.jsx("td",{children:t.jsx("span",{className:"email-link",children:w.email})}),ye("status")&&t.jsx("td",{children:w.banned?t.jsx("span",{className:"status-tag banned",children:o("user.cardBanned")}):t.jsx("span",{className:"status-tag normal",children:o("user.cardActive")})}),ye("plan")&&t.jsx("td",{children:Ve(w)}),ye("group")&&t.jsx("td",{children:w.is_admin?t.jsx("span",{style:{fontWeight:600},children:o("user.adminLabel")}):Ye(w)}),ye("used")&&t.jsx("td",{children:t.jsx("span",{className:`traffic-used ${Ae>0?Ae>parseFloat(xe)*.9?"high":"ok":""}`,children:he})}),ye("traffic")&&t.jsx("td",{children:xe}),ye("devices")&&t.jsx("td",{children:Re(w)}),ye("expires")&&t.jsx("td",{children:w.expired_at?t.jsx("span",{className:`expiry-date ${w.expired_at<Date.now()/1e3?"expired":""}`,children:Mo(w.expired_at)}):t.jsx("span",{className:"expiry-none",children:"—"})}),ye("balance")&&t.jsx("td",{children:(w.balance/100).toFixed(2)}),ye("commission")&&t.jsx("td",{children:(w.commission_balance/100).toFixed(2)}),ye("joined")&&t.jsx("td",{children:t.jsx("small",{children:Mo(w.created_at)})}),ye("actions")&&t.jsx("td",{children:t.jsxs("div",{className:`action-dropdown-wrap ${me===w.id?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-btn",type:"button",onClick:()=>N(me===w.id?null:w.id),children:[o("user.colActions")," ",t.jsx(gl,{size:14})]}),me===w.id?t.jsxs("div",{className:"action-dropdown-menu",children:[t.jsxs("button",{type:"button",onClick:()=>De(w),children:[t.jsx(qt,{size:14}),o("user.actionEdit")]}),t.jsxs("button",{type:"button",onClick:()=>ce(w),children:[t.jsx(oh,{size:14}),o("user.actionAssignOrder")]}),t.jsxs("button",{type:"button",onClick:()=>void ut(w),children:[t.jsx(Na,{size:14}),o("user.actionCopyUrl")]}),t.jsxs("button",{type:"button",onClick:()=>Wn(w),children:[t.jsx(ih,{size:14}),o("user.actionGetQr")]}),t.jsxs("button",{type:"button",onClick:()=>vl(w),children:[t.jsx(Ho,{size:14}),o("user.actionResetSecret")]}),t.jsxs("button",{type:"button",onClick:()=>Ga(w),children:[t.jsx(nh,{size:14}),o("user.actionOrders")]}),t.jsxs("button",{type:"button",onClick:()=>fa(w),children:[t.jsx(_d,{size:14}),o("user.actionSubscriptions")]}),t.jsxs("button",{type:"button",onClick:()=>Ya(w),children:[t.jsx(cs,{size:14}),o("user.actionInvitedUsers")]}),t.jsxs("button",{type:"button",onClick:()=>L(w),children:[t.jsx(id,{size:14}),o("user.actionDataHistory")]}),t.jsx("div",{className:"menu-divider"}),t.jsxs("button",{type:"button",className:"danger-item",onClick:()=>Fn(w),children:[t.jsx(Gt,{size:14}),o("user.actionDelete")]})]}):null]})})]},w.id)}),!B&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:dt,children:t.jsx("div",{className:"empty-state",children:o("user.noUsers")})})}):null]})]})})}),it>1?t.jsx("div",{className:"pagination-wrap",children:t.jsxs("div",{className:"pagination",children:[t.jsx("button",{className:"mini-button",disabled:j<=1,onClick:()=>Pe(j-1),children:t.jsx(xn,{size:16})}),Array.from({length:Math.min(5,it)},(w,he)=>{let xe;return it<=5||j<=3?xe=he+1:j>=it-2?xe=it-4+he:xe=j-2+he,t.jsx("button",{className:`mini-button ${xe===j?"active-page":""}`,onClick:()=>Pe(xe),children:xe},xe)}),it>5?t.jsxs("span",{className:"page-info",children:["… ",it]}):null,t.jsx("button",{className:"mini-button",disabled:j>=it,onClick:()=>Pe(j+1),children:t.jsx(gn,{size:16})})]})}):null]}),R?t.jsx("div",{className:"modal-backdrop",onClick:()=>te(null),children:t.jsxs("section",{className:"modal-panel edit-user-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.editUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>te(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-body-scroll",onSubmit:Ie,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",required:!0,value:String(M.email??""),onChange:w=>Ee("email",w.target.value)})]}),t.jsxs("label",{className:"field-label",children:[o("user.inviterEmailLabel"),t.jsx("input",{className:"config-input",type:"email",value:String(M.invite_user_email??""),onChange:w=>Ee("invite_user_email",w.target.value),placeholder:o("user.inviterEmailLabel")})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:String(M.password??""),onChange:w=>Ee("password",w.target.value),placeholder:o("user.passwordPlaceholder"),minLength:8})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.balance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.balance??0)/100).toFixed(2)),onChange:w=>Ee("balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionBalance"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",value:String((Number(M.commission_balance??0)/100).toFixed(2)),onChange:w=>Ee("commission_balance",Math.round(Number(w.target.value)*100))}),t.jsx("span",{className:"input-suffix",children:"₫"})]})]})]}),t.jsxs("div",{className:"form-row-2",children:[t.jsxs("label",{className:"field-label",children:[o("user.uploadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.u??0),onChange:w=>Ee("u",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.downloadLabel"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.d??0),onChange:w=>Ee("d",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.transferEnable"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",step:"0.01",min:"0",value:String(M.transfer_enable??0),onChange:w=>Ee("transfer_enable",w.target.value)}),t.jsx("span",{className:"input-suffix",children:"GB"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.device_limit??""),onChange:w=>Ee("device_limit",w.target.value?Number(w.target.value):null),placeholder:o("user.deviceLimitPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.sniUserLabel"),t.jsx("input",{className:"config-input",value:String(M.network_settings??""),onChange:w=>Ee("network_settings",w.target.value),placeholder:o("user.sniUserPlaceholder")})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:String(M.expired_at??""),onChange:w=>Ee("expired_at",w.target.value),onClick:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:String(M.plan_id??""),onChange:w=>Ee("plan_id",w.target.value?Number(w.target.value):null),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.accountStatusLabel"),t.jsxs("select",{className:"config-input",value:String(M.banned??0),onChange:w=>Ee("banned",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:o("user.cardActive")}),t.jsx("option",{value:"1",children:o("user.cardBanned")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionTypeLabel"),t.jsxs("select",{className:"config-input",value:String(M.commission_type??0),onChange:w=>Ee("commission_type",Number(w.target.value)),children:[t.jsx("option",{value:"0",children:o("user.commissionTypeSystem")}),t.jsx("option",{value:"1",children:o("user.commissionTypeFixed")}),t.jsx("option",{value:"2",children:o("user.commissionTypePercent")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.commissionRate"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.commission_rate??""),onChange:w=>Ee("commission_rate",w.target.value),placeholder:o("user.commissionRatePlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.discount"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",max:"100",value:String(M.discount??""),onChange:w=>Ee("discount",w.target.value),placeholder:o("user.exclusiveDiscountPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"%"})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.speedLimit"),t.jsxs("div",{className:"input-with-suffix",children:[t.jsx("input",{className:"config-input",type:"number",min:"0",value:String(M.speed_limit??""),onChange:w=>Ee("speed_limit",w.target.value?Number(w.target.value):null),placeholder:o("user.speedLimitPlaceholder")}),t.jsx("span",{className:"input-suffix",children:"Mbps"})]})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.adminLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${M.is_admin?"active":""}`,onClick:()=>Ee("is_admin",M.is_admin?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"toggle-field",children:[t.jsx("span",{className:"field-label-text",children:o("user.staffLabel")}),t.jsx("button",{type:"button",className:`admin-switch ${M.is_staff?"active":""}`,onClick:()=>Ee("is_staff",M.is_staff?0:1),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("label",{className:"field-label",children:[o("user.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:String(M.remarks??""),onChange:w=>Ee("remarks",w.target.value),placeholder:o("user.remarksPlaceholder")})]}),t.jsxs("div",{className:"modal-footer",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>te(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:A,children:o(A?"common.processing":"common.save")})]})]})]})}):null,x?t.jsx("div",{className:"modal-backdrop",onClick:()=>W(!1),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.createUser")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>W(!1),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:lt,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsxs("div",{className:"email-compose",children:[t.jsx("input",{className:"config-input",required:!0,value:H.email_prefix,onChange:w=>S({...H,email_prefix:w.target.value}),placeholder:o("user.emailPrefix")}),t.jsx("span",{className:"email-at",children:"@"}),t.jsx("input",{className:"config-input",required:!0,value:H.email_suffix,onChange:w=>S({...H,email_suffix:w.target.value}),placeholder:o("user.emailSuffix")})]})]}),t.jsxs("label",{className:"field-label",children:[o("user.password"),t.jsx("input",{className:"config-input",type:"password",value:H.password,onChange:w=>S({...H,password:w.target.value}),placeholder:o("user.createPasswordPlaceholder"),minLength:8})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",value:H.plan_id,onChange:w=>S({...H,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:o("user.planNone")}),h.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.expiredAt"),t.jsx("input",{className:"config-input",type:"date",value:H.expired_at,onChange:w=>S({...H,expired_at:w.target.value}),onClick:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)},onFocus:w=>{var he,xe;return(xe=(he=w.currentTarget).showPicker)==null?void 0:xe.call(he)}})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>W(!1),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:Q,children:o(Q?"user.creating":"user.createUser")})]})]})]})}):null,ue?t.jsx("div",{className:"modal-backdrop",onClick:()=>Se(null),children:t.jsxs("section",{className:"modal-panel compact-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.assignOrderTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Se(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:se,children:[t.jsxs("label",{className:"field-label",children:[o("user.email"),t.jsx("input",{className:"config-input",type:"email",readOnly:!0,value:ue})]}),t.jsxs("label",{className:"field-label",children:[o("user.plan"),t.jsxs("select",{className:"config-input",required:!0,value:ke.plan_id,onChange:w=>Oe({...ke,plan_id:w.target.value}),children:[t.jsx("option",{value:"",children:o("user.assignPlanSelect")}),h.map(w=>t.jsx("option",{value:w.id,children:w.name},w.id))]})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignPeriodLabel"),t.jsx("select",{className:"config-input",value:ke.period,onChange:w=>Oe({...ke,period:w.target.value}),children:qj.map(w=>t.jsx("option",{value:w.value,children:Gj(w.value,o)},w.value))})]}),t.jsxs("label",{className:"field-label",children:[o("user.assignTotalAmountLabel"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:ke.total_amount,onChange:w=>Oe({...ke,total_amount:w.target.value}),placeholder:"0"})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>Se(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:nt,children:o(nt?"common.processing":"common.save")})]})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),Ke?t.jsx("div",{className:"modal-backdrop",onClick:()=>Ct(null),children:t.jsxs("section",{className:"modal-panel qr-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("h2",{children:o("user.qrCodeTitle")}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>Ct(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"qr-body",children:[t.jsx("img",{src:`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(Ke.url)}`,alt:o("user.actionGetQr"),width:200,height:200}),t.jsx("div",{className:"qr-url",children:o("user.qrCodeUserId",{userId:Ke.userId})})]})]})}):null,Nt?t.jsx("div",{className:"modal-backdrop",onClick:()=>we(null),children:t.jsxs("section",{className:"modal-panel history-modal",onClick:w=>w.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{style:{fontSize:"1.25rem",fontWeight:"600"},children:o("user.dataHistoryTitle")}),t.jsx("p",{style:{fontSize:"0.85rem",color:"var(--muted)",marginTop:"2px"},children:o("user.dataHistorySub",{email:Nt.email,id:Nt.id})})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>we(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"modal-body",style:{padding:"20px"},children:[T?t.jsx("div",{className:"form-error",style:{marginBottom:"16px"},children:T}):null,t.jsxs("div",{className:"history-summary-grid",children:[t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyLogCount")}),t.jsx("div",{className:"summary-card-value",children:o("user.historyTotalDays",{count:$t})})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalUpload")}),t.jsx("div",{className:"summary-card-value highlight",children:si(Le.reduce((w,he)=>w+he.u,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyTotalDownload")}),t.jsx("div",{className:"summary-card-value highlight",children:si(Le.reduce((w,he)=>w+he.d,0))})]}),t.jsxs("div",{className:"summary-card",children:[t.jsx("div",{className:"summary-card-title",children:o("user.historyCombinedUsage")}),t.jsx("div",{className:"summary-card-value highlight",children:si(Le.reduce((w,he)=>w+he.u+he.d,0))})]})]}),zt?t.jsx("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",minHeight:"200px"},children:t.jsx(yt,{label:o("user.historyLoading")})}):Le.length===0?t.jsxs("div",{style:{textAlign:"center",padding:"48px 16px",background:"var(--surface-soft)",borderRadius:"8px",border:"1px dashed var(--line)",color:"var(--muted)"},children:[t.jsx(id,{size:36,style:{margin:"0 auto 12px",opacity:.5}}),t.jsx("p",{style:{fontWeight:500},children:o("user.historyNoHistory")}),t.jsx("p",{style:{fontSize:"0.8rem",marginTop:"4px"},children:o("user.historyNoHistoryHelp")})]}):t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"admin-table-wrap",style:{border:"1px solid var(--line)",borderRadius:"8px",overflow:"hidden",marginBottom:"16px"},children:t.jsxs("table",{className:"admin-table",style:{width:"100%"},children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("user.historyColDate")}),t.jsx("th",{children:o("user.historyColRate")}),t.jsx("th",{children:o("user.historyColUpload")}),t.jsx("th",{children:o("user.historyColDownload")}),t.jsx("th",{children:o("user.historyColTotal")})]})}),t.jsx("tbody",{children:Le.map(w=>{const he=si(w.u),xe=si(w.d),Ae=si(w.u+w.d);return t.jsxs("tr",{children:[t.jsx("td",{style:{fontWeight:500},children:Hj(w.record_at)}),t.jsx("td",{children:t.jsxs("span",{style:{background:"var(--surface-soft)",border:"1px solid var(--line)",padding:"2px 6px",borderRadius:"4px",fontSize:"0.75rem",fontFamily:"monospace",fontWeight:600},children:[Number(w.server_rate).toFixed(1),"x"]})}),t.jsx("td",{style:{color:"var(--muted)"},children:he}),t.jsx("td",{style:{color:"var(--muted)"},children:xe}),t.jsx("td",{style:{fontWeight:600,color:"var(--foreground)"},children:Ae})]},w.id)})})]})}),t.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"16px",paddingTop:"12px",borderTop:"1px solid var(--line)"},children:[t.jsx("span",{style:{fontSize:"0.8rem",color:"var(--muted)"},children:o("user.historyShowingLogs",{start:Math.min((xt-1)*Pt+1,$t),end:Math.min(xt*Pt,$t),total:$t})}),t.jsxs("div",{style:{display:"flex",gap:"8px"},children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:xt<=1,onClick:()=>ta(Nt.id,xt-1),children:[t.jsx(xn,{size:16}),o("user.historyPrev")]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:xt*Pt>=$t,onClick:()=>ta(Nt.id,xt+1),children:[o("user.historyNext"),t.jsx(gn,{size:16})]})]})]})]})]})]})}):null]})}const Oh=15,Ah=20,$j=["email","id","user_id","plan_id","status"];function Yn(s,i){return s?new Date(s*1e3).toLocaleString():i}function Qj(s){if(!s)return"";const i=new Date(s*1e3),o=d=>String(d).padStart(2,"0");return`${i.getFullYear()}-${o(i.getMonth()+1)}-${o(i.getDate())}`}function Xj(s){return s?Math.floor(new Date(s).getTime()/1e3):null}function hl(s){return+(s/1073741824).toFixed(2)}function xd(s){return Math.round((Number(s)||0)*1073741824)}function Zj(s){return s==="email"?"like":"="}function Kj(s,i){switch(s){case"email":return i("subscription.filterEmail");case"id":return i("subscription.filterId");case"user_id":return i("subscription.filterUserId");case"plan_id":return i("subscription.filterPlanId");case"status":return i("subscription.filterStatus");default:return s}}function Uh(s,i){return i(s==="active"?"subscription.statusActive":"subscription.statusDisabled")}function Rh(s,i){switch(s){case"bound":return i("subscription.slotStatusBound");case"banned":return i("subscription.slotStatusBanned");default:return i("subscription.slotStatusPending")}}function Hh(s){switch(s){case"bound":return"enabled";case"banned":return"status-cancelled";default:return"status-pending"}}function Vj(s){return s.transfer_enable?Math.min(100,Math.round(s.total_used/s.transfer_enable*100)):0}function Jj(){const s=Dt(),i=Ja(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[_,v]=f.useState(1),[g,y]=f.useState("email"),[j,z]=f.useState(""),[Y,P]=f.useState(!0),[K,C]=f.useState(""),[B,U]=f.useState(null),[O,ee]=f.useState({}),[ie,oe]=f.useState(null),[E,$]=f.useState(null),[ae,me]=f.useState([]),[N,R]=f.useState(0),[te,M]=f.useState(1),[re,A]=f.useState(!1),[J,x]=f.useState(""),[W,H]=f.useState(null);function S(T){const be=T==null?void 0:T.trim();be&&s.push(`/user?email=${encodeURIComponent(be)}`)}const Q=f.useCallback(async(T=1,be="",qe="email")=>{P(!0),C("");try{const ye=be.trim()?[{key:qe,condition:Zj(qe),value:be.trim()}]:void 0,dt=await D1(T,Oh,ye);p(dt.data),m(dt.total),v(T)}catch(ye){C(ye instanceof Error?ye.message:o("subscription.loadFailed"))}finally{P(!1)}},[o]),de=f.useCallback(async(T,be=1)=>{A(!0),x("");try{const qe=await yx(be,Ah,[{key:"subscription_id",condition:"=",value:String(T.id)}]);me(qe.data),R(qe.total),M(be)}catch(qe){x(qe instanceof Error?qe.message:o("subscription.slotsLoadFailed"))}finally{A(!1)}},[o]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const T=new URLSearchParams(i.search),qe=[["user_id",T.get("user_id")],["id",T.get("id")],["plan_id",T.get("plan_id")],["email",T.get("email")],["status",T.get("status")]].find(([,ye])=>ye&&ye.trim());if(qe){const[ye,dt]=qe,G=dt??"";y(ye),z(G),Q(1,G,ye);return}Q()},[Q,i.search,s]);function ue(T){T.preventDefault(),Q(1,j,g)}function Se(){if(z(""),i.search){s.replace("/subscription");return}Q(1,"",g)}function ke(T){U(T),ee({transfer_enable:String(hl(T.transfer_enable)),u:String(hl(T.u)),d:String(hl(T.d)),device_limit:T.device_limit===null?"":String(T.device_limit),speed_limit:T.speed_limit===null?"":String(T.speed_limit),expired_at:Qj(T.expired_at),status:T.status,auto_renewal:String(T.auto_renewal||0),remarks:T.remarks??""})}async function Oe(T){var be,qe;if(T.preventDefault(),!!B){oe(B.id);try{await A1({id:B.id,transfer_enable:xd(O.transfer_enable),u:xd(O.u),d:xd(O.d),device_limit:O.device_limit===""?null:Number(O.device_limit),speed_limit:O.speed_limit===""?null:Number(O.speed_limit),expired_at:Xj(O.expired_at),status:O.status,auto_renewal:Number(O.auto_renewal),remarks:O.remarks}),U(null),(be=window.showToast)==null||be.call(window,o("subscription.updateSuccess"),"success"),await Q(_,j,g)}catch(ye){(qe=window.showToast)==null||qe.call(window,ye instanceof Error?ye.message:o("subscription.saveFailed"),"error")}finally{oe(null)}}}function nt(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.resetConfirm",{id:T.id}),onConfirm:async()=>{var qe,ye;oe(T.id);try{await U1(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.resetSuccess"),"success"),await Q(_,j,g)}catch(dt){(ye=window.showToast)==null||ye.call(window,dt instanceof Error?dt.message:o("subscription.resetFailed"),"error")}finally{oe(null)}}})}async function Ge(T){var qe;if(!T)return;const be=await Kn(T);(qe=window.showToast)==null||qe.call(window,o(be?"subscription.copySuccess":"common.copyFailed"),be?"success":"error")}async function Ke(T){var be,qe;H(T.id);try{let ye=T.subscribe_url||null;if(ye||(ye=(await O1(T.id)).data,ye&&p(G=>G.map(Ne=>Ne.id===T.id?{...Ne,subscribe_url:ye}:Ne))),!ye){(be=window.showToast)==null||be.call(window,o("common.copyFailed"),"error");return}await Ge(ye)}catch(ye){(qe=window.showToast)==null||qe.call(window,ye instanceof Error?ye.message:o("common.copyFailed"),"error")}finally{H(null)}}function Ct(T){$(T),me([]),R(0),M(1),de(T,1)}function Nt(T=te){return E?de(E,T):Promise.resolve()}function we(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.unbindConfirm"),onConfirm:async()=>{var qe,ye;oe(T.id);try{await vx(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.unbindSuccess"),"success"),await Promise.all([Nt(),Q(_,j,g)])}catch(dt){(ye=window.showToast)==null||ye.call(window,dt instanceof Error?dt.message:o("subscription.unbindFailed"),"error")}finally{oe(null)}}})}function Le(T){var be;(be=window.showConfirm)==null||be.call(window,{message:o("subscription.banConfirm"),onConfirm:async()=>{var qe,ye;oe(T.id);try{await jx(T.id),(qe=window.showToast)==null||qe.call(window,o("subscription.banSuccess"),"success"),await Promise.all([Nt(),Q(_,j,g)])}catch(dt){(ye=window.showToast)==null||ye.call(window,dt instanceof Error?dt.message:o("subscription.banFailed"),"error")}finally{oe(null)}}})}function na(T){const be=T.device_limit&&T.device_limit>0?String(T.device_limit):o("subscription.unlimited"),qe=!!(T.device_count||T.device_limit&&T.device_limit>0);return t.jsxs("div",{className:"subscription-slot-cell",children:[t.jsxs("div",{className:"subscription-slot-count",children:[t.jsx("span",{children:T.device_count}),t.jsx("span",{children:"/"}),t.jsx("span",{children:be})]}),T.device_limit&&T.device_limit>0?t.jsx("div",{className:"subscription-slot-meter","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Math.min(100,Math.round(T.device_count/T.device_limit*100))}%`}})}):t.jsx("small",{children:o("subscription.noDeviceLimit")}),qe?t.jsxs("button",{className:"mini-button subscription-slot-button",type:"button",onClick:()=>Ct(T),children:[t.jsx(_d,{size:14}),t.jsx("span",{children:o("subscription.manageUuids")})]}):null]})}function $t(T){return t.jsxs("div",{className:"subscription-traffic",children:[t.jsxs("strong",{children:[hl(T.total_used)," / ",hl(T.transfer_enable)," GB"]}),t.jsx("div",{className:"subscription-traffic-bar","aria-hidden":"true",children:t.jsx("span",{style:{width:`${Vj(T)}%`}})}),t.jsx("small",{children:o("subscription.uploadDownload",{upload:hl(T.u),download:hl(T.d)})})]})}function pa(T){return t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]}),t.jsx("small",{children:o("subscription.primaryUuid")})]})}function xt(T){return t.jsxs("div",{className:"subscription-link-stack",children:[pa(T),T.subscribe_url?t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.subscribe_url,onClick:()=>void Ke(T),disabled:W===T.id,children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.subscribe_url})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]}):t.jsxs("div",{className:"subscription-copy-item",children:[t.jsxs("button",{className:"copy-value subscription-link",type:"button",onClick:()=>void Ke(T),disabled:W===T.id,children:[t.jsx(Na,{size:14}),t.jsx("span",{children:W===T.id?o("common.processing"):o("subscription.colSubscribeUrl")})]}),t.jsx("small",{children:o("subscription.colSubscribeUrl")})]})]})}function Zt(T){return t.jsxs("div",{className:"row-actions subscription-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>ke(T),children:[t.jsx(qt,{size:14}),o("subscription.edit")]}),t.jsxs("button",{className:"mini-button",type:"button",disabled:ie===T.id,onClick:()=>nt(T),children:[t.jsx(Ho,{size:14}),o("subscription.resetSecret")]})]})}const Pt=Math.ceil(h/Oh),zt=Math.ceil(N/Ah),ma=Pt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||Y,onClick:()=>void Q(_-1,j,g),children:[t.jsx(xn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:_,total:Pt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:_>=Pt||Y,onClick:()=>void Q(_+1,j,g),children:[o("common.next"),t.jsx(gn,{size:14})]})]}):null;return t.jsxs(Yt,{title:o("subscription.title"),subtitle:o("subscription.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.heading")}),t.jsx("p",{children:o("subscription.total",{count:h})})]}),t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void Q(_,j,g),children:[t.jsx(kt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})]}),t.jsxs("form",{className:"filter-bar subscription-filter",onSubmit:ue,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:T=>y(T.target.value),children:$j.map(T=>t.jsx("option",{value:T,children:Kj(T,o)},T))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:T=>z(T.target.value),placeholder:o("subscription.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(rs,{size:16}),o("common.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:Se,children:o("common.clearFilter")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Y&&d.length===0?t.jsx(yt,{label:o("subscription.loading")}):null,t.jsx("section",{className:"panel table-panel subscription-desktop-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsxs("th",{children:[o("subscription.colUser")," / ",o("subscription.colPlan")]}),t.jsx("th",{children:o("subscription.colStatus")}),t.jsx("th",{children:o("subscription.colTraffic")}),t.jsx("th",{children:o("subscription.colDevices")}),t.jsx("th",{children:o("subscription.colExpires")}),t.jsxs("th",{children:[o("subscription.colPrimaryUuid")," / ",o("subscription.colSubscribeUrl")]}),t.jsx("th",{children:o("subscription.colUpdated")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[d.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("div",{className:"subscription-package",children:[t.jsxs("span",{className:"subscription-package-id",children:["#",T.id]}),t.jsxs("div",{className:"subscription-package-main",children:[t.jsx("span",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("span",{className:"subscription-email-link",style:{cursor:"default",color:"var(--muted)"},children:"-"}),t.jsxs("small",{children:[o("subscription.userId",{id:T.user_id}),T.plan_id?` - ${o("subscription.planId",{id:T.plan_id})}`:""]})]})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Uh(T.status,o)})}),t.jsx("td",{children:$t(T)}),t.jsx("td",{children:na(T)}),t.jsx("td",{children:Yn(T.expired_at,o("subscription.never"))}),t.jsx("td",{children:xt(T)}),t.jsx("td",{children:Yn(T.updated_at,o("subscription.never"))}),t.jsx("td",{children:Zt(T)})]},T.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.empty")})})}):null]})]})})}),t.jsxs("div",{className:"subscription-mobile-list",children:[d.map(T=>t.jsxs("article",{className:"subscription-card",children:[t.jsxs("div",{className:"subscription-card-head",children:[t.jsxs("div",{className:"subscription-card-title",children:[t.jsxs("span",{className:"subscription-card-id",children:["#",T.id]}),t.jsx("strong",{className:"subscription-plan-name",children:T.plan_name??"-"}),T.user_email?t.jsx("button",{className:"subscription-email-link",type:"button",onClick:()=>S(T.user_email),title:o("subscription.viewUser"),children:T.user_email}):t.jsx("small",{children:o("subscription.unknownUser")})]}),t.jsx("span",{className:`status-pill subscription-status subscription-status-${T.status}`,children:Uh(T.status,o)})]}),t.jsxs("div",{className:"subscription-card-grid",children:[t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colTraffic")}),$t(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colDevices")}),na(T)]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colExpires")}),t.jsx("strong",{children:Yn(T.expired_at,o("subscription.never"))})]}),t.jsxs("div",{className:"subscription-card-metric",children:[t.jsx("span",{className:"subscription-card-label",children:o("subscription.colUpdated")}),t.jsx("strong",{children:Yn(T.updated_at,o("subscription.never"))})]})]}),t.jsx("div",{className:"subscription-card-link-block",children:xt(T)}),Zt(T)]},T.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.empty")}):null]}),ma,E?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>$(null),children:t.jsxs("section",{className:"modal-panel subscription-slots-modal",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.slotsTitle",{id:E.id})}),t.jsx("p",{children:E.user_email??o("subscription.userId",{id:E.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>$(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("div",{className:"subscription-slots-body",children:[J?t.jsx("div",{className:"form-error",children:J}):null,re&&ae.length===0?t.jsx(yt,{label:o("subscription.slotsLoading")}):null,t.jsx("div",{className:"admin-table-wrap subscription-slot-table-wrap",children:t.jsxs("table",{className:"admin-table subscription-slot-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("subscription.slotUuid")}),t.jsx("th",{children:o("subscription.slotStatus")}),t.jsx("th",{children:o("subscription.slotHwid")}),t.jsx("th",{children:o("subscription.slotClient")}),t.jsx("th",{children:o("subscription.slotIp")}),t.jsx("th",{children:o("subscription.slotFirstSeen")}),t.jsx("th",{children:o("subscription.slotLastSeen")}),t.jsx("th",{children:o("common.actions")})]})}),t.jsxs("tbody",{children:[ae.map(T=>t.jsxs("tr",{children:[t.jsx("td",{children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill subscription-status ${Hh(T.status)}`,children:Rh(T.status,o)})}),t.jsx("td",{children:T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):"-"}),t.jsx("td",{children:t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})}),t.jsxs("td",{children:[t.jsx("strong",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsx("td",{children:Yn(T.first_seen_at,"-")}),t.jsx("td",{children:Yn(T.last_seen_at,"-")}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>we(T),children:[t.jsx(Cd,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>Le(T),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})})]},T.id)),!re&&ae.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")})})}):null]})]})}),t.jsxs("div",{className:"subscription-slot-mobile-list",children:[ae.map(T=>t.jsxs("article",{className:"subscription-slot-card",children:[t.jsxs("div",{className:"subscription-slot-card-head",children:[t.jsx("strong",{children:o("subscription.slotUuid")}),t.jsx("span",{className:`status-pill subscription-status ${Hh(T.status)}`,children:Rh(T.status,o)})]}),t.jsx("div",{className:"subscription-copy-item",children:t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.uuid,onClick:()=>Ge(T.uuid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.uuid})]})}),t.jsxs("div",{className:"subscription-slot-card-grid",children:[t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotHwid")}),T.hwid?t.jsxs("button",{className:"copy-value subscription-link",type:"button",title:T.hwid,onClick:()=>Ge(T.hwid),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:T.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotIp")}),t.jsx("span",{className:"mono",children:T.last_ip??"-"}),t.jsx("small",{children:T.first_ip?o("subscription.firstIp",{ip:T.first_ip}):"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotClient")}),t.jsx("small",{title:T.user_agent??"",children:T.user_agent??"-"})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotFirstSeen")}),t.jsx("span",{children:Yn(T.first_seen_at,"-")})]}),t.jsxs("div",{className:"subscription-slot-card-row",children:[t.jsx("span",{children:o("subscription.slotLastSeen")}),t.jsx("span",{children:Yn(T.last_seen_at,"-")})]})]}),t.jsxs("div",{className:"row-actions subscription-slot-actions",children:[t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>we(T),children:[t.jsx(Cd,{size:14}),o("subscription.unbind")]}),T.status==="bound"?t.jsxs("button",{className:"mini-button danger",type:"button",disabled:ie===T.id,onClick:()=>Le(T),children:[t.jsx(xl,{size:14}),o("subscription.ban")]}):null]})]},T.id)),!re&&ae.length===0?t.jsx("div",{className:"empty-state",children:o("subscription.slotsEmpty")}):null]}),zt>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:te<=1||re,onClick:()=>void Nt(te-1),children:[t.jsx(xn,{size:14}),o("common.prev")]}),t.jsx("span",{className:"page-info",children:o("subscription.page",{page:te,total:zt})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:te>=zt||re,onClick:()=>void Nt(te+1),children:[o("common.next"),t.jsx(gn,{size:14})]})]}):null]})]})}):null,B?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>U(null),children:t.jsxs("section",{className:"modal-panel",role:"dialog","aria-modal":"true",onMouseDown:T=>T.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("subscription.editTitle",{id:B.id})}),t.jsx("p",{children:B.user_email??o("subscription.userId",{id:B.user_id})})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":o("common.closeMenu"),onClick:()=>U(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:Oe,children:[t.jsxs("div",{className:"subscription-modal-grid",children:[t.jsxs("label",{children:[o("subscription.trafficLimitGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.transfer_enable,onChange:T=>ee(be=>({...be,transfer_enable:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.uploadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.u,onChange:T=>ee(be=>({...be,u:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.downloadUsedGb"),t.jsx("input",{className:"config-input",type:"number",min:"0",step:"0.01",value:O.d,onChange:T=>ee(be=>({...be,d:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.deviceLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.device_limit,onChange:T=>ee(be=>({...be,device_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.speedLimit"),t.jsx("input",{className:"config-input",type:"number",min:"0",value:O.speed_limit,onChange:T=>ee(be=>({...be,speed_limit:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.expires"),t.jsx("input",{className:"config-input",type:"date",value:O.expired_at,onChange:T=>ee(be=>({...be,expired_at:T.target.value}))})]}),t.jsxs("label",{children:[o("subscription.status"),t.jsxs("select",{className:"config-input",value:O.status,onChange:T=>ee(be=>({...be,status:T.target.value})),children:[t.jsx("option",{value:"active",children:o("subscription.statusActive")}),t.jsx("option",{value:"disabled",children:o("subscription.statusDisabled")})]})]}),t.jsxs("label",{children:[o("subscription.autoRenewal"),t.jsxs("select",{className:"config-input",value:O.auto_renewal,onChange:T=>ee(be=>({...be,auto_renewal:T.target.value})),children:[t.jsx("option",{value:"0",children:o("subscription.autoRenewalOff")}),t.jsx("option",{value:"1",children:o("subscription.autoRenewalOn")})]})]})]}),t.jsxs("label",{children:[o("subscription.remarks"),t.jsx("textarea",{className:"config-input",rows:3,value:O.remarks,onChange:T=>ee(be=>({...be,remarks:T.target.value}))})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>U(null),children:o("common.cancel")}),t.jsx("button",{className:"primary-button",type:"submit",disabled:ie===B.id,children:ie===B.id?o("common.processing"):o("common.save")})]})]})]})}):null]})}const Lh=15,Fj=["email","user_id","node","hwid","user_agent","last_ip"];function ts(s){return s?new Date(s*1e3).toLocaleString():"-"}function $n(s){const i=Math.max(0,Number(s??0));if(i===0)return"0 B";const o=["B","KB","MB","GB","TB"];let d=i,p=0;for(;d>=1024&&p<o.length-1;)d/=1024,p+=1;return`${d>=10||p===0?d.toFixed(0):d.toFixed(2)} ${o[p]}`}function Wj(s){return["user_id","subscription_id","node","node_type","node_id"].includes(s)?"=":"like"}function Pj(s,i){switch(s){case"email":return i("device.filterEmail");case"user_id":return i("device.filterUserId");case"hwid":return i("device.filterHwid");case"node":return i("device.filterNode");case"node_id":return i("device.filterNodeId");case"node_type":return i("device.filterNodeType");case"user_agent":return i("device.filterUserAgent");case"last_ip":return i("device.filterIp");default:return""}}function qh(s,i){switch(s){case"bound":return i("device.statusBound");case"banned":return i("device.statusBanned");default:return i("device.statusPending")}}function Oo(s){return(s.online_ips??[]).join(", ")||"-"}function Ao(s){return(s.online_nodes??[]).map(i=>`${i.node_type}#${i.node_id}`).join(", ")||"-"}function Ij(s){var h,m,_;const i=new URLSearchParams(s),o=(h=i.get("node_type"))==null?void 0:h.trim(),d=(m=i.get("node_id"))==null?void 0:m.trim();if(o&&d)return{field:"node",value:`${o}:${d}`};if(d)return{field:"node",value:d};const p=["node","hwid","user_agent","last_ip","email","user_id"];for(const v of p){const g=(_=i.get(v))==null?void 0:_.trim();if(g)return{field:v,value:g}}return null}function ew(){const s=Dt(),i=Ja(),{t:o}=Ze(),[d,p]=f.useState([]),[h,m]=f.useState(0),[_,v]=f.useState(1),[g,y]=f.useState("email"),[j,z]=f.useState(""),[Y,P]=f.useState(!0),[K,C]=f.useState(""),[B,U]=f.useState(null),[O,ee]=f.useState(null),[ie,oe]=f.useState(null),E=f.useCallback(async(x=1,W="",H="email")=>{P(!0),C("");try{const S=W.trim()?[{key:H,condition:Wj(H),value:W.trim()}]:void 0,Q=await yx(x,Lh,S);p(Q.data),m(Q.total),v(x)}catch(S){C(S instanceof Error?S.message:o("device.loadFailed"))}finally{P(!1)}},[o]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}const x=Ij(i.search);if(x){y(x.field),z(x.value),E(1,x.value,x.field);return}E()},[E,s,i.search]),f.useEffect(()=>{if(ie===null)return;function x(H){const S=H.target;S!=null&&S.closest(".device-action-wrap")||oe(null)}function W(H){H.key==="Escape"&&oe(null)}return document.addEventListener("pointerdown",x),document.addEventListener("keydown",W),()=>{document.removeEventListener("pointerdown",x),document.removeEventListener("keydown",W)}},[ie]);function $(x){x.preventDefault(),E(1,j,g)}function ae(){if(z(""),i.search){s.replace("/device");return}E(1,"",g)}async function me(x){var H;if(!x.hwid)return;const W=await Kn(x.hwid);(H=window.showToast)==null||H.call(window,o(W?"device.copySuccess":"common.copyFailed"),W?"success":"error")}async function N(x){var H;const W=await Kn(x.uuid);(H=window.showToast)==null||H.call(window,o(W?"device.copyUuidSuccess":"common.copyFailed"),W?"success":"error")}function R(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.unbindConfirm"),onConfirm:async()=>{var H,S;U(x.id);try{await vx(x.id),(H=window.showToast)==null||H.call(window,o("device.unbindSuccess"),"success"),await E(_,j,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.unbindFailed"),"error")}finally{U(null)}}})}function te(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.banConfirm"),onConfirm:async()=>{var H,S;U(x.id);try{await jx(x.id),(H=window.showToast)==null||H.call(window,o("device.banSuccess"),"success"),await E(_,j,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.banFailed"),"error")}finally{U(null)}}})}function M(x){var W;(W=window.showConfirm)==null||W.call(window,{message:o("device.resetConfirm",{user:x.user_email??`#${x.user_id}`}),onConfirm:async()=>{var H,S;ee(x.user_id);try{await R1(x.user_id),(H=window.showToast)==null||H.call(window,o("device.resetSuccess"),"success"),await E(_,j,g)}catch(Q){(S=window.showToast)==null||S.call(window,Q instanceof Error?Q.message:o("device.resetFailed"),"error")}finally{ee(null)}}})}function re(x){oe(null),x()}function A(x,W){const H=W==="mobile"?-x.id:x.id,S=ie===H;return t.jsxs("div",{className:`action-dropdown-wrap device-action-wrap ${S?"active":""}`,children:[t.jsxs("button",{className:"action-dropdown-trigger device-action-trigger",type:"button",onClick:()=>oe(S?null:H),children:[o("device.action")," ",t.jsx(gl,{size:14})]}),S?t.jsxs("div",{className:"action-dropdown-menu device-action-menu",children:[t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===x.id,onClick:()=>re(()=>R(x)),children:[t.jsx(Cd,{size:14}),o("device.unbind")]}),x.status==="bound"?t.jsxs("button",{className:"action-dropdown-item danger",type:"button",disabled:B===x.id,onClick:()=>re(()=>te(x)),children:[t.jsx(xl,{size:14}),o("device.ban")]}):null,t.jsxs("button",{className:"action-dropdown-item",type:"button",disabled:O===x.user_id,onClick:()=>re(()=>M(x)),children:[t.jsx(Dv,{size:14}),o("device.resetUser")]})]}):null]})}const J=Math.ceil(h/Lh);return t.jsxs(Yt,{title:o("device.title"),subtitle:o("device.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:o("device.heading")}),t.jsx("p",{children:o("device.total",{count:h})})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",disabled:Y,onClick:()=>void E(_,j,g),children:[t.jsx(kt,{size:16}),o(Y?"common.refreshing":"common.refresh")]})})]}),t.jsxs("form",{className:"filter-bar device-filter-form",onSubmit:$,children:[t.jsx("select",{className:"config-input filter-select",value:g,onChange:x=>y(x.target.value),children:Fj.map(x=>t.jsx("option",{value:x,children:Pj(x,o)},x))}),t.jsxs("label",{className:"search-input-wrap",children:[t.jsx(Yo,{size:16}),t.jsx("input",{className:"config-input",value:j,onChange:x=>z(x.target.value),placeholder:o(g==="node"?"device.nodeSearchPlaceholder":"device.searchPlaceholder")})]}),t.jsxs("button",{className:"ghost-button",type:"submit",children:[t.jsx(rs,{size:16}),o("device.filter")]}),t.jsx("button",{className:"ghost-button",type:"button",onClick:ae,children:o("device.clear")})]}),K?t.jsx("div",{className:"form-error",children:K}):null,Y&&d.length===0?t.jsx(yt,{label:o("device.loading")}):null,t.jsxs("div",{className:"mobile-device-list",children:[d.map(x=>t.jsxs("article",{className:"mobile-device-card",children:[t.jsxs("div",{className:"mobile-device-card-head",children:[t.jsxs("div",{className:"mobile-device-user",children:[t.jsx("strong",{children:x.user_email??"-"}),t.jsxs("small",{children:["ID: ",x.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),t.jsxs("div",{className:"mobile-device-status",children:[t.jsx("span",{className:"inline-badge",children:qh(x.status,o)}),t.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),x.is_online?o("device.online"):o("device.offline")]})]})]}),t.jsxs("div",{className:"mobile-device-grid",children:[t.jsxs("div",{className:"mobile-device-info",children:[t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.uuid")}),t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:x.uuid})]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.hwid")}),x.hwid?t.jsxs("button",{className:"copy-value mobile-device-copy",type:"button",title:x.hwid,onClick:()=>me(x),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:x.hwid})]}):t.jsx("span",{children:"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.client")}),t.jsx("small",{title:x.user_agent??"",children:x.user_agent??"-"})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.ip")}),t.jsxs("span",{className:"mono",title:`${x.last_ip??"-"} / ${x.first_ip??"-"}`,children:[x.last_ip??"-",x.first_ip?` (${x.first_ip})`:""]})]})]}),t.jsxs("div",{className:"mobile-device-row mobile-device-traffic",children:[t.jsx("span",{children:o("device.traffic")}),t.jsxs("small",{title:`${o("device.upload")}: ${$n(x.device_upload)} / ${o("device.download")}: ${$n(x.device_download)}`,children:[$n(x.device_used_traffic)," / ",o("device.upload"),": ",$n(x.device_upload)," / ",o("device.download"),": ",$n(x.device_download)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.connection")}),t.jsxs("small",{title:`${Oo(x)} / ${Ao(x)}`,children:[o("device.onlineIps"),": ",Oo(x)," / ",o("device.onlineNodes"),": ",Ao(x)]})]}),t.jsxs("div",{className:"mobile-device-row",children:[t.jsx("span",{children:o("device.time")}),t.jsxs("small",{children:[o("device.firstSeen"),": ",ts(x.first_seen_at)," / ",o("device.lastSeen"),": ",ts(x.last_seen_at)]})]})]}),t.jsx("div",{className:"mobile-device-actions",children:A(x,"mobile")})]},x.id)),!Y&&d.length===0?t.jsx("div",{className:"empty-state",children:o("device.empty")}):null]}),t.jsxs("section",{className:"panel table-panel device-desktop-panel",children:[t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table device-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:o("device.user")}),t.jsx("th",{children:o("device.status")}),t.jsx("th",{children:o("device.traffic")}),t.jsx("th",{children:o("device.connection")}),t.jsx("th",{children:o("device.deviceInfo")}),t.jsx("th",{children:o("device.time")}),t.jsx("th",{children:o("device.action")})]})}),t.jsxs("tbody",{children:[d.map(x=>t.jsxs("tr",{children:[t.jsxs("td",{className:"device-user-cell",children:[t.jsx("strong",{children:x.user_email??"-"}),t.jsxs("small",{children:["ID: ",x.user_id]}),t.jsxs("small",{className:"device-plan-line",children:[x.plan_name??"-",x.user_plan_id?` #${x.user_plan_id}`:""]})]}),t.jsx("td",{children:t.jsx("span",{className:"inline-badge",children:qh(x.status,o)})}),t.jsx("td",{className:"device-traffic-cell",children:t.jsxs("div",{className:"device-traffic-stack",children:[t.jsx("strong",{children:$n(x.device_used_traffic)}),t.jsxs("small",{children:[o("device.upload"),": ",$n(x.device_upload)]}),t.jsxs("small",{children:[o("device.download"),": ",$n(x.device_download)]})]})}),t.jsxs("td",{className:"device-connection",children:[t.jsxs("span",{className:`online-badge ${x.is_online?"online":"offline"}`,children:[x.is_online?t.jsx(ch,{size:14}):t.jsx(rh,{size:14}),x.is_online?o("device.online"):o("device.offline")]}),t.jsxs("small",{title:Oo(x),children:[o("device.onlineIps"),": ",Oo(x)]}),t.jsxs("small",{title:Ao(x),children:[o("device.onlineNodes"),": ",Ao(x)]}),t.jsxs("small",{children:[o("device.lastOnline"),": ",ts(x.online_last_seen_at??null)]})]}),t.jsx("td",{className:"device-info-cell",children:t.jsxs("div",{className:"device-info-stack",children:[t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.uuid")}),t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.uuid,onClick:()=>N(x),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:x.uuid})]})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.hwid")}),x.hwid?t.jsxs("button",{className:"copy-value device-info-copy",type:"button",title:x.hwid,onClick:()=>me(x),children:[t.jsx(Na,{size:14}),t.jsx("span",{className:"mono",children:x.hwid})]}):t.jsx("span",{className:"device-info-value",children:"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.client")}),t.jsx("small",{className:"device-info-value",title:x.user_agent??"",children:x.user_agent??"-"})]}),t.jsxs("div",{className:"device-info-line",children:[t.jsx("span",{className:"device-info-label",children:o("device.ip")}),t.jsxs("div",{className:"device-info-value",children:[t.jsx("strong",{className:"mono",children:x.last_ip??"-"}),t.jsx("small",{children:x.first_ip?`${o("device.firstIp")}: ${x.first_ip}`:"-"})]})]})]})}),t.jsx("td",{className:"device-time-cell",children:t.jsxs("div",{className:"device-time-stack",children:[t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.firstSeen")}),t.jsx("span",{children:ts(x.first_seen_at)})]}),t.jsxs("div",{className:"device-time-line",children:[t.jsx("small",{children:o("device.lastSeen")}),t.jsx("span",{children:ts(x.last_seen_at)})]})]})}),t.jsx("td",{className:"device-action-cell",children:A(x,"desktop")})]},x.id)),!Y&&d.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:7,children:t.jsx("div",{className:"empty-state",children:o("device.empty")})})}):null]})]})}),J>1?t.jsxs("div",{className:"pagination",children:[t.jsxs("button",{className:"mini-button",type:"button",disabled:_<=1||Y,onClick:()=>void E(_-1,j,g),children:[t.jsx(xn,{size:14}),o("device.previous")]}),t.jsx("span",{className:"page-info",children:o("device.page",{page:_,total:J})}),t.jsxs("button",{className:"mini-button",type:"button",disabled:_>=J||Y,onClick:()=>void E(_+1,j,g),children:[o("device.next"),t.jsx(gn,{size:14})]})]}):null]})]})}const tw={email:"",domain:"",title:"",description:"",logo:"",background_url:"",custom_html:"",plan_ids:[]};function Yd(s){if(Array.isArray(s))return s.map(i=>Number(i)).filter(i=>Number.isFinite(i)&&i>0);if(typeof s=="string")try{return Yd(JSON.parse(s))}catch{return s.split(",").map(i=>Number(i.trim())).filter(i=>Number.isFinite(i)&&i>0)}return[]}function Bh(s){return s?{id:s.id,email:s.email??"",domain:s.domain??"",title:s.title??"",description:s.description??"",logo:s.logo??"",background_url:s.background_url??"",custom_html:s.custom_html??"",plan_ids:Yd(s.plan_id)}:{...tw}}function gd(s){const i=s.trim();if(!i)return"";try{return new URL(i.includes("://")?i:`https://${i}`).host.toLowerCase()}catch{return i.replace(/^https?:\/\//i,"").split("/")[0].toLowerCase()}}function aw(s){const i=Number(s);if(!i)return"-";const o=new Date(i*1e3);return Number.isNaN(o.getTime())?"-":o.toLocaleString()}function nw(s){return Number(s)===1}function Gh(s,i){if(!s.length)return"All plans";const o=new Map(i.map(d=>[Number(d.id),d.name]));return s.map(d=>o.get(d)??`#${d}`).join(", ")}function Qn(s,i=!1){return t.jsxs("span",{className:"webcon-field-label",children:[s,i?t.jsx("small",{children:"*"}):null]})}function lw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState([]),[m,_]=f.useState(null),[v,g]=f.useState(!0),[y,j]=f.useState(!1),[z,Y]=f.useState(null),[P,K]=f.useState(""),C=f.useCallback(async()=>{g(!0),K("");try{const[E,$]=await Promise.all([F1(),yl()]);d(E),h($)}catch(E){K(E instanceof Error?E.message:i("webcon.toastLoadFailed"))}finally{g(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}C()},[C,s]);const B=f.useMemo(()=>p.map(E=>({id:Number(E.id),name:E.name})),[p]);function U(E,$){_(ae=>ae&&{...ae,[E]:$})}function O(E,$){_(ae=>{if(!ae)return ae;const me=$?Array.from(new Set([...ae.plan_ids,E])):ae.plan_ids.filter(N=>N!==E);return{...ae,plan_ids:me}})}async function ee(E){var ae,me;if(E.preventDefault(),!m)return;const $=gd(m.domain);j(!0),K("");try{await W1({id:m.id,email:m.email.trim(),domain:$,title:m.title.trim(),description:m.description.trim()||null,logo:m.logo.trim()||null,background_url:m.background_url.trim()||null,custom_html:m.custom_html||null,plan_ids:m.plan_ids,plan_id:m.plan_ids}),_(null),(ae=window.showToast)==null||ae.call(window,i("webcon.toastSaveSuccess"),"success"),await C()}catch(N){const R=N instanceof Error?N.message:i("webcon.toastSaveFailed");K(R),(me=window.showToast)==null||me.call(window,R,"error")}finally{j(!1)}}async function ie(E){var $,ae;Y(E.id);try{await I1(E.id),($=window.showToast)==null||$.call(window,i("webcon.toastToggleSuccess"),"success"),await C()}catch(me){const N=me instanceof Error?me.message:i("webcon.toastToggleFailed");K(N),(ae=window.showToast)==null||ae.call(window,N,"error")}finally{Y(null)}}function oe(E){var $;($=window.showConfirm)==null||$.call(window,{message:i("webcon.deleteConfirm"),onConfirm:async()=>{var ae,me;Y(E.id),K("");try{await P1(E.id),(ae=window.showToast)==null||ae.call(window,i("webcon.toastDeleteSuccess"),"success"),await C()}catch(N){const R=N instanceof Error?N.message:i("webcon.toastDeleteFailed");K(R),(me=window.showToast)==null||me.call(window,R,"error")}finally{Y(null)}}})}return t.jsxs(Yt,{title:i("webcon.title"),subtitle:i("webcon.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row webcon-toolbar",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("webcon.heading")}),t.jsx("p",{children:i("webcon.sitesCount",{count:o.length})})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",disabled:v,onClick:()=>void C(),children:[t.jsx(kt,{size:16}),i(v?"common.refreshing":"common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>_(Bh()),children:[t.jsx(Sa,{size:16}),i("webcon.add")]})]})]}),P?t.jsx("div",{className:"form-error",children:P}):null,v&&o.length===0?t.jsx(yt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table webcon-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("webcon.colId")}),t.jsx("th",{children:"Status"}),t.jsx("th",{children:"Staff owner"}),t.jsx("th",{children:i("webcon.colDomain")}),t.jsx("th",{children:"Landing"}),t.jsx("th",{children:"Plans"}),t.jsx("th",{children:"Created"}),t.jsx("th",{children:i("webcon.colActions")})]})}),t.jsxs("tbody",{children:[o.map(E=>{var ae;const $=Yd(E.plan_id);return t.jsxs("tr",{children:[t.jsxs("td",{children:["#",E.id]}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${nw(E.status)?"active":""}`,type:"button",disabled:z===E.id,onClick:()=>void ie(E),"aria-label":"Toggle webcon status",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-owner",children:[t.jsx("strong",{children:E.email??"-"}),t.jsx("small",{children:Number(E.staff)===1?"is_staff enabled":"user is not marked staff"})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-domain",children:[t.jsx("strong",{className:"mono",children:E.domain}),t.jsxs("small",{children:["/",String(((ae=window.settings)==null?void 0:ae.secure_path)??"admin"),"/webcon"]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-title",children:[t.jsx("strong",{children:E.title||"-"}),t.jsx("small",{children:E.description||"No description"}),t.jsxs("span",{className:"webcon-branding",children:[t.jsxs("span",{children:[t.jsx(jv,{size:13}),E.logo?"Logo":"No logo"]}),t.jsxs("span",{children:[t.jsx(us,{size:13}),E.background_url?"Background":"No background"]})]})]})}),t.jsx("td",{children:t.jsxs("div",{className:"webcon-plan-list",children:[t.jsx("strong",{children:Gh($,B)}),t.jsx("small",{children:$.length?`${$.length} selected`:"not restricted"})]})}),t.jsx("td",{children:aw(E.created_at)}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions webcon-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>_(Bh(E)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",disabled:z===E.id,onClick:()=>oe(E),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},E.id)}),!v&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("webcon.noWebcon")})})}):null]})]})})}),m?t.jsx("div",{className:"modal-backdrop",role:"presentation",onMouseDown:()=>_(null),children:t.jsxs("section",{className:"modal-panel webcon-modal",role:"dialog","aria-modal":"true",onMouseDown:E=>E.stopPropagation(),children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:m.id?i("webcon.editTitle"):i("webcon.newTitle")}),t.jsx("p",{children:m.domain||"Create a staff landing domain"})]}),t.jsx("button",{className:"icon-button",type:"button","aria-label":i("common.closeMenu"),onClick:()=>_(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"webcon-form",onSubmit:ee,children:[t.jsxs("div",{className:"webcon-field-grid",children:[t.jsxs("label",{className:"webcon-field",children:[Qn("Staff owner email",!0),t.jsx("input",{className:"config-input",required:!0,type:"email",value:m.email,onChange:E=>U("email",E.target.value),placeholder:"staff@example.com"})]}),t.jsxs("label",{className:"webcon-field",children:[Qn("Domain",!0),t.jsx("input",{className:"config-input",required:!0,value:m.domain,onChange:E=>U("domain",E.target.value),onBlur:E=>U("domain",gd(E.target.value)),placeholder:"webcon.example.com"}),t.jsx("span",{className:"webcon-help",children:"Store only the host. Do not include path/query."})]}),t.jsxs("label",{className:"webcon-field",children:[Qn("Landing title",!0),t.jsx("input",{className:"config-input",required:!0,value:m.title,onChange:E=>U("title",E.target.value),placeholder:"ZicBoard Partner"})]}),t.jsxs("label",{className:"webcon-field",children:[Qn("Description"),t.jsx("input",{className:"config-input",value:m.description,onChange:E=>U("description",E.target.value),placeholder:"Short landing page description"})]}),t.jsxs("label",{className:"webcon-field",children:[Qn("Logo URL"),t.jsx("input",{className:"config-input",type:"url",value:m.logo,onChange:E=>U("logo",E.target.value),placeholder:"https://example.com/logo.png"})]}),t.jsxs("label",{className:"webcon-field",children:[Qn("Background URL"),t.jsx("input",{className:"config-input",type:"url",value:m.background_url,onChange:E=>U("background_url",E.target.value),placeholder:"https://example.com/background.jpg"})]}),t.jsxs("div",{className:"webcon-field full",children:[Qn("Allowed plans"),t.jsxs("div",{className:"webcon-plan-picker",children:[B.map(E=>t.jsxs("label",{className:"webcon-plan-option",children:[t.jsx("input",{type:"checkbox",checked:m.plan_ids.includes(E.id),onChange:$=>O(E.id,$.target.checked)}),t.jsx("span",{children:E.name})]},E.id)),B.length===0?t.jsx("span",{className:"webcon-help",children:"No plans loaded."}):null]}),t.jsx("span",{className:"webcon-help",children:"Leave empty to allow all visible plans for this webcon domain."})]}),t.jsxs("label",{className:"webcon-field full",children:[Qn("Custom HTML"),t.jsx("textarea",{className:"config-input",rows:5,value:m.custom_html,onChange:E=>U("custom_html",E.target.value),placeholder:"<footer>...</footer>"})]})]}),t.jsxs("div",{className:"webcon-preview",children:[t.jsx("span",{className:"webcon-preview-logo",children:m.logo?t.jsx("img",{src:m.logo,alt:""}):t.jsx(Ev,{size:18})}),t.jsxs("div",{children:[t.jsx("strong",{children:m.title||"Landing title"}),t.jsx("span",{children:gd(m.domain)||"webcon.example.com"}),t.jsxs("span",{children:[t.jsx(qd,{size:12})," ",Gh(m.plan_ids,B)]})]})]}),t.jsxs("div",{className:"button-row modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>_(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:y,children:[t.jsx(ka,{size:16}),i(y?"webcon.saving":"common.save")]})]})]})]})}):null]})}function Yh(s){return new Date(s*1e3).toLocaleString("vi-VN")}function bd(s){return{id:s==null?void 0:s.id,title:(s==null?void 0:s.title)??"",content:(s==null?void 0:s.content)??"",img_url:(s==null?void 0:s.img_url)??"",tags:s!=null&&s.tags?s.tags.join(", "):""}}function iw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[v,g]=f.useState(!1),[y,j]=f.useState(""),[z,Y]=f.useState(""),P=f.useCallback(async()=>{_(!0),j("");try{d(await L1())}catch(U){j(U instanceof Error?U.message:i("notice.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);async function K(U){var O,ee;if(U.preventDefault(),!!p){g(!0),j(""),Y("");try{const ie=p.tags?p.tags.split(",").map(oe=>oe.trim()).filter(Boolean):[];await q1({id:p.id,title:p.title,content:p.content,img_url:p.img_url||null,tags:ie.length?ie:null}),h(null),(O=window.showToast)==null||O.call(window,i("notice.saveSuccess"),"success"),await P()}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("notice.saveFailed"),"error")}finally{g(!1)}}}async function C(U){var O;try{await G1(U),await P()}catch(ee){(O=window.showToast)==null||O.call(window,ee instanceof Error?ee.message:i("notice.toggleFailed"),"error")}}async function B(U){var O;(O=window.showConfirm)==null||O.call(window,{message:i("notice.deleteConfirm"),onConfirm:async()=>{var ee,ie;try{await B1(U),(ee=window.showToast)==null||ee.call(window,i("notice.deleteSuccess"),"success"),await P()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("notice.deleteFailed"),"error")}}})}return t.jsxs(Yt,{title:i("notice.title"),subtitle:i("notice.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("notice.heading")}),t.jsxs("p",{children:[o.length," ",i("notice.notices")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(bd()),children:[t.jsx(Sa,{size:16}),i("notice.addNotice")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&o.length===0?t.jsx(yt,{label:i("notice.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("notice.titleField")}),t.jsx("th",{children:i("notice.show")}),t.jsx("th",{children:i("notice.tags")}),t.jsx("th",{children:i("notice.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(U=>{var O;return t.jsxs("tr",{children:[t.jsx("td",{children:U.id}),t.jsx("td",{children:t.jsx("strong",{children:U.title})}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void C(U.id),"aria-label":"Toggle Show",children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:t.jsx("div",{className:"match-tags",children:((O=U.tags)==null?void 0:O.map((ee,ie)=>t.jsx("span",{className:"tag",children:ee},ie)))??t.jsx("span",{className:"tag muted-tag",children:"—"})})}),t.jsx("td",{children:t.jsx("small",{children:Yh(U.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>h(bd(U)),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void B(U.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},U.id)}),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:6,children:t.jsx("div",{className:"empty-state",children:i("notice.noNotices")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-notice-list",children:[o.map(U=>t.jsxs("div",{className:`notice-mobile-card ${U.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsx("div",{className:"header-left",children:t.jsxs("span",{className:"id-tag",children:["#",U.id]})}),t.jsx("button",{className:`admin-switch ${U.show?"active":""}`,type:"button",onClick:()=>void C(U.id),"aria-label":U.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:U.title}),t.jsx("div",{className:"notice-tags",children:U.tags&&U.tags.length>0?U.tags.map((O,ee)=>t.jsx("span",{className:"tag-badge",children:O},ee)):t.jsx("span",{className:"tag-badge empty-tag",children:"—"})}),t.jsxs("p",{className:"created-time",children:[i("notice.created"),": ",Yh(U.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>h(bd(U)),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void B(U.id),children:[t.jsx(Gt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},U.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("notice.noNotices")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("notice.editNotice"):i("notice.newNotice")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:K,children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:U=>h({...p,title:U.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.content")}),t.jsx("textarea",{className:"config-input",rows:10,required:!0,value:p.content,onChange:U=>h({...p,content:U.target.value}),placeholder:i("notice.contentPlaceholder")})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("notice.imageUrl")}),t.jsx("input",{className:"config-input",value:p.img_url,onChange:U=>h({...p,img_url:U.target.value}),placeholder:"https://..."})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("notice.tags")}),t.jsx("input",{className:"config-input",value:p.tags,onChange:U=>h({...p,tags:U.target.value}),placeholder:"tag1, tag2"})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ka,{size:16}),i(v?"notice.saving":"common.save")]})]})]})]})}):null]})}function yd(s){return new Date(s*1e3).toLocaleString("vi-VN")}const $h=(s,i)=>({0:{label:i("ticket.statusOpen"),cls:"enabled"},1:{label:i("ticket.statusClosed"),cls:""}})[s]||{label:`#${s}`,cls:""},vd=(s,i)=>({0:i("ticket.levelLow"),1:i("ticket.levelMedium"),2:i("ticket.levelHigh")})[s]||String(s);function sw(){var N;const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!1),[v,g]=f.useState(null),[y,j]=f.useState(""),[z,Y]=f.useState(!0),[P,K]=f.useState(!1),[C,B]=f.useState(""),U=f.useRef(null),[O,ee]=f.useState([]),[ie,oe]=f.useState(null),E=f.useCallback(async()=>{Y(!0),B("");try{d(await Y1())}catch(R){B(R instanceof Error?R.message:"Load failed")}finally{Y(!1)}},[]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}E(),yl().then(R=>{R&&ee(R)}).catch(()=>{})},[E,s]),f.useEffect(()=>{var R;(R=U.current)==null||R.scrollIntoView({behavior:"smooth"})},[p]);async function $(R){var te;g(R),j(""),h(null),oe(null),_(!0);try{const M=await mh(R);if(h(M),M&&M.user_id)try{const re=await bx(M.user_id);re&&re.data&&oe(re.data)}catch(re){console.error("Failed to load user info:",re)}}catch{(te=window.showToast)==null||te.call(window,"Failed to load message thread","error")}finally{_(!1)}}async function ae(R){var te,M;if(R.preventDefault(),!(!v||!y.trim())){K(!0),B("");try{await $1(v,y),j(""),(te=window.showToast)==null||te.call(window,"Reply sent!","success");try{const re=await mh(v);h(re)}catch{}await E()}catch(re){(M=window.showToast)==null||M.call(window,re instanceof Error?re.message:"Reply failed","error")}finally{K(!1)}}}async function me(R){var te;(te=window.showConfirm)==null||te.call(window,{message:"Close this ticket?",onConfirm:async()=>{var M,re;B("");try{await Q1(R),(M=window.showToast)==null||M.call(window,"Ticket closed!","success"),v===R&&(g(null),h(null)),await E()}catch(A){B(A instanceof Error?A.message:"Close failed"),(re=window.showToast)==null||re.call(window,A instanceof Error?A.message:"Close failed","error")}}})}return t.jsxs(Yt,{title:i("ticket.title"),subtitle:i("ticket.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("ticket.heading")}),t.jsxs("p",{children:[o.length," tickets"]})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:E,disabled:z,children:[t.jsx(kt,{size:16}),i("common.refresh")]})})]}),C?t.jsx("div",{className:"form-error",children:C}):null,z&&o.length===0?t.jsx(yt,{label:i("common.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("ticket.id")}),t.jsx("th",{children:i("ticket.subject")}),t.jsx("th",{children:i("ticket.user")}),t.jsx("th",{children:i("ticket.level")}),t.jsx("th",{children:i("ticket.status")}),t.jsx("th",{children:i("ticket.replyStatus")}),t.jsx("th",{children:i("ticket.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(R=>{const te=$h(R.status,i);return t.jsxs("tr",{children:[t.jsx("td",{children:R.id}),t.jsx("td",{children:t.jsx("strong",{children:R.subject})}),t.jsxs("td",{children:["#",R.user_id]}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:vd(R.level,i)})}),t.jsx("td",{children:t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})}),t.jsx("td",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})}),t.jsx("td",{children:t.jsx("small",{children:yd(R.created_at)})}),t.jsx("td",{children:t.jsx("div",{className:"row-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(as,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void me(R.id),children:[t.jsx(Sd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(as,{size:14}),i("ticket.viewHistory")]})})})]},R.id)}),!z&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-ticket-list",children:[o.map(R=>{const te=$h(R.status,i);return t.jsxs("div",{className:"mobile-ticket-card",children:[t.jsxs("div",{className:"mobile-card-header",children:[t.jsx("span",{className:"mobile-card-title",children:R.subject}),t.jsx("span",{className:"tag",style:{fontSize:"11px"},children:vd(R.level,i)})]}),t.jsxs("div",{className:"mobile-card-body",children:[t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.id"),": ",t.jsxs("strong",{children:["#",R.id]})]}),t.jsx("span",{className:`status-pill ${te.cls}`,children:te.label})]}),t.jsxs("div",{className:"mobile-card-body-row",children:[t.jsxs("span",{children:[i("ticket.user"),": ",t.jsxs("strong",{children:["#",R.user_id]})]}),t.jsx("span",{children:R.reply_status?t.jsx("span",{className:"status-pill enabled",children:i("ticket.replied")}):t.jsx("span",{className:"status-pill status-pending",children:i("ticket.waiting")})})]}),t.jsx("div",{className:"mobile-card-body-row",children:t.jsxs("span",{children:[i("ticket.created"),": ",t.jsx("small",{children:yd(R.created_at)})]})})]}),t.jsx("div",{className:"mobile-card-actions",children:R.status===0?t.jsxs(t.Fragment,{children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(as,{size:14}),i("ticket.replyAction")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void me(R.id),children:[t.jsx(Sd,{size:14}),i("ticket.closeAction")]})]}):t.jsxs("button",{className:"mini-button ghost-button",type:"button",onClick:()=>void $(R.id),children:[t.jsx(as,{size:14}),i("ticket.viewHistory")]})})]},R.id)}),!z&&o.length===0?t.jsx("div",{className:"empty-state",children:i("ticket.noTickets")}):null]}),v!==null?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",style:{maxWidth:"600px"},role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsxs("div",{children:[t.jsx("h2",{children:p?`${i("ticket.ticketDetail")}: ${p.subject}`:`${i("ticket.ticketDetail")} #${v}`}),t.jsxs("p",{children:[i("ticket.user"),": #",p==null?void 0:p.user_id," | ",i("ticket.level"),": ",p!=null?vd(p.level,i):i("common.loading")]})]}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>{g(null),h(null)},children:t.jsx(ct,{size:18})})]}),ie&&t.jsxs("div",{className:"user-details-bar",children:[t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("common.email")}),t.jsx("span",{className:"details-value",title:ie.email,children:ie.email})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.servicePackage")}),t.jsx("span",{className:"details-value",children:((N=O.find(R=>R.id===ie.plan_id))==null?void 0:N.name)||i("ticket.freePlan")})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.accountBalance")}),t.jsxs("span",{className:"details-value",children:[_a(ie.balance)," ",i("ticket.currencyUnit")]})]}),t.jsxs("div",{className:"user-details-item",children:[t.jsx("span",{className:"details-label",children:i("ticket.expirationDate")}),t.jsx("span",{className:"details-value",children:ie.expired_at?new Date(ie.expired_at*1e3).toLocaleDateString("vi-VN"):i("ticket.never")})]})]}),m?t.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:t.jsx(yt,{label:i("ticket.loadingLogs")})}):t.jsxs("div",{style:{display:"flex",flexDirection:"column",flex:1,overflow:"hidden"},children:[t.jsxs("div",{className:"chat-container",children:[p!=null&&p.message&&p.message.length>0?p.message.map(R=>{const te=R.is_me;return t.jsxs("div",{className:`chat-message ${te?"me":"other"}`,children:[t.jsx("div",{className:"chat-bubble",children:R.message}),t.jsxs("div",{className:"chat-meta",children:[te?i("ticket.staff"):`${i("ticket.user")} #${R.user_id}`," • ",yd(R.created_at)]})]},R.id)}):t.jsx("div",{className:"empty-state",style:{minHeight:"150px"},children:i("ticket.noLogs")}),t.jsx("div",{ref:U})]}),(p==null?void 0:p.status)===0?t.jsx("form",{className:"modal-form",onSubmit:ae,style:{borderTop:"1px solid var(--line)",paddingTop:"16px"},children:t.jsxs("label",{style:{margin:0},children:[t.jsx("span",{children:i("ticket.sendReply")}),t.jsxs("div",{style:{position:"relative"},children:[t.jsx("textarea",{className:"config-input",rows:4,required:!0,value:y,onChange:R=>j(R.target.value),placeholder:i("ticket.replyPlaceholder"),style:{paddingRight:"48px",resize:"none"}}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:P||!y.trim(),style:{position:"absolute",bottom:"12px",right:"12px",padding:"6px 12px",height:"auto"},children:[t.jsx(ox,{size:14}),P?"":i("ticket.send")]})]})]})}):t.jsx("div",{className:"form-error",style:{margin:"16px 0 0 0",textAlign:"center",background:"var(--rose-soft)",border:"1px solid var(--rose)",color:"var(--rose)"},children:i("ticket.closedNotice")})]})]})}):null,t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function Qh(s){return s?new Date(s*1e3).toLocaleString("vi-VN"):"—"}const Xh={"en-US":"English","ja-JP":"日本語","ko-KR":"한국어","vi-VN":"Tiếng Việt","zh-CN":"简体中文","zh-TW":"繁體中文"};function Zh(s){return{id:s==null?void 0:s.id,category:(s==null?void 0:s.category)??"",title:(s==null?void 0:s.title)??"",body:(s==null?void 0:s.body)??"",language:(s==null?void 0:s.language)??"",sort:(s==null?void 0:s.sort)!=null?String(s.sort):""}}function ow(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState([]),[p,h]=f.useState(null),[m,_]=f.useState(!0),[v,g]=f.useState(!1),[y,j]=f.useState(""),[z,Y]=f.useState(""),P=f.useCallback(async()=>{_(!0),j("");try{d(await X1())}catch(O){j(O instanceof Error?O.message:i("knowledge.loadFailed"))}finally{_(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);async function K(O){var ee;try{const ie=await Z1(O.id);h(Zh(ie))}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("knowledge.detailFailed"),"error")}}async function C(O){var ee,ie;if(O.preventDefault(),!!p){g(!0),j(""),Y("");try{await K1({id:p.id,category:p.category,title:p.title,body:p.body,language:p.language||null,sort:p.sort?Number(p.sort):null}),h(null),(ee=window.showToast)==null||ee.call(window,i("knowledge.saveSuccess"),"success"),await P()}catch(oe){(ie=window.showToast)==null||ie.call(window,oe instanceof Error?oe.message:i("knowledge.saveFailed"),"error")}finally{g(!1)}}}async function B(O){var ee;try{await J1(O),await P()}catch(ie){(ee=window.showToast)==null||ee.call(window,ie instanceof Error?ie.message:i("knowledge.toggleFailed"),"error")}}async function U(O){var ee;(ee=window.showConfirm)==null||ee.call(window,{message:i("knowledge.deleteConfirm"),onConfirm:async()=>{var ie,oe;try{await V1(O),(ie=window.showToast)==null||ie.call(window,i("knowledge.deleteSuccess"),"success"),await P()}catch(E){(oe=window.showToast)==null||oe.call(window,E instanceof Error?E.message:i("knowledge.deleteFailed"),"error")}}})}return t.jsxs(Yt,{title:i("knowledge.title"),subtitle:i("knowledge.subtitle"),children:[t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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

      `}}),t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("knowledge.heading")}),t.jsxs("p",{children:[o.length," ",i("knowledge.articles")]})]}),t.jsxs("div",{className:"button-row",children:[t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:m,children:[t.jsx(kt,{size:16}),i("common.refresh")]}),t.jsxs("button",{className:"primary-button",type:"button",onClick:()=>h(Zh()),children:[t.jsx(Sa,{size:16}),i("knowledge.addArticle")]})]})]}),y?t.jsx("div",{className:"form-error",children:y}):null,z?t.jsx("div",{className:"form-success",children:z}):null,m&&o.length===0?t.jsx(yt,{label:i("knowledge.loading")}):null,t.jsx("section",{className:"panel table-panel hide-on-mobile",children:t.jsx("div",{className:"admin-table-wrap",children:t.jsxs("table",{className:"admin-table",children:[t.jsx("thead",{children:t.jsxs("tr",{children:[t.jsx("th",{children:i("common.id")}),t.jsx("th",{children:i("knowledge.category")}),t.jsx("th",{children:i("knowledge.titleField")}),t.jsx("th",{children:i("knowledge.language")}),t.jsx("th",{children:i("knowledge.show")}),t.jsx("th",{children:i("knowledge.sort")}),t.jsx("th",{children:i("knowledge.created")}),t.jsx("th",{children:i("common.actions")})]})}),t.jsxs("tbody",{children:[o.map(O=>t.jsxs("tr",{children:[t.jsx("td",{children:O.id}),t.jsx("td",{children:t.jsx("span",{className:"tag",children:O.category||"—"})}),t.jsx("td",{children:t.jsx("strong",{children:O.title})}),t.jsx("td",{children:O.language&&Xh[O.language]||O.language||"—"}),t.jsx("td",{children:t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":i("knowledge.toggleShow"),children:t.jsx("span",{className:"admin-switch-thumb"})})}),t.jsx("td",{children:O.sort??"—"}),t.jsx("td",{children:t.jsx("small",{children:Qh(O.created_at)})}),t.jsx("td",{children:t.jsxs("div",{className:"row-actions",children:[t.jsxs("button",{className:"mini-button",type:"button",onClick:()=>void K(O),children:[t.jsx(qt,{size:14}),i("common.edit")]}),t.jsxs("button",{className:"mini-button danger",type:"button",onClick:()=>void U(O.id),children:[t.jsx(Gt,{size:14}),i("common.delete")]})]})})]},O.id)),!m&&o.length===0?t.jsx("tr",{children:t.jsx("td",{colSpan:8,children:t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")})})}):null]})]})})}),t.jsxs("div",{className:"mobile-knowledge-list",children:[o.map(O=>t.jsxs("div",{className:`knowledge-mobile-card ${O.show?"show-active":""}`,children:[t.jsxs("div",{className:"card-header",children:[t.jsxs("div",{className:"header-left",children:[t.jsxs("span",{className:"id-tag",children:["#",O.id]}),O.sort!=null&&t.jsxs("span",{className:"sort-tag",children:["Order: ",O.sort]})]}),t.jsx("button",{className:`admin-switch ${O.show?"active":""}`,type:"button",onClick:()=>void B(O.id),"aria-label":O.show?i("common.enabled"):i("common.disabled"),children:t.jsx("span",{className:"admin-switch-thumb"})})]}),t.jsxs("div",{className:"card-body",children:[t.jsx("h3",{className:"card-title",children:O.title}),t.jsxs("div",{className:"card-meta",children:[O.category&&t.jsx("span",{className:"category-badge",children:O.category}),O.language&&t.jsx("span",{className:"lang-badge",children:Xh[O.language]||O.language})]}),t.jsxs("p",{className:"created-time",children:[i("knowledge.created"),": ",Qh(O.created_at)]})]}),t.jsxs("div",{className:"card-footer",children:[t.jsxs("button",{className:"action-btn edit-btn",type:"button",onClick:()=>void K(O),children:[t.jsx(qt,{size:13}),t.jsx("span",{children:i("common.edit")})]}),t.jsxs("button",{className:"action-btn delete-btn",type:"button",onClick:()=>void U(O.id),children:[t.jsx(Gt,{size:13}),t.jsx("span",{children:i("common.delete")})]})]})]},O.id)),!m&&o.length===0?t.jsx("div",{className:"empty-state",children:i("knowledge.noArticles")}):null]}),p?t.jsx("div",{className:"modal-backdrop",role:"presentation",children:t.jsxs("section",{className:"modal-panel drawer-panel",role:"dialog","aria-modal":"true",children:[t.jsxs("div",{className:"modal-heading",children:[t.jsx("div",{children:t.jsx("h2",{children:p.id?i("knowledge.editArticle"):i("knowledge.newArticle")})}),t.jsx("button",{className:"icon-button",type:"button",onClick:()=>h(null),children:t.jsx(ct,{size:18})})]}),t.jsxs("form",{className:"modal-form",onSubmit:C,children:[t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.category")}),t.jsx("input",{className:"config-input",required:!0,value:p.category,onChange:O=>h({...p,category:O.target.value})})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.titleField")}),t.jsx("input",{className:"config-input",required:!0,value:p.title,onChange:O=>h({...p,title:O.target.value})})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.body")}),t.jsx("textarea",{className:"config-input",rows:12,required:!0,value:p.body,onChange:O=>h({...p,body:O.target.value})})]}),t.jsxs("div",{className:"form-split",children:[t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.language")}),t.jsxs("select",{className:"config-input",required:!0,value:p.language,onChange:O=>h({...p,language:O.target.value}),children:[t.jsx("option",{value:"",disabled:!0,hidden:!0,children:i("knowledge.selectLanguage")}),t.jsx("option",{value:"en-US",children:i("knowledge.lang.en")}),t.jsx("option",{value:"ja-JP",children:i("knowledge.lang.ja")}),t.jsx("option",{value:"ko-KR",children:i("knowledge.lang.ko")}),t.jsx("option",{value:"vi-VN",children:i("knowledge.lang.vi")}),t.jsx("option",{value:"zh-CN",children:i("knowledge.lang.zhCN")}),t.jsx("option",{value:"zh-TW",children:i("knowledge.lang.zhTW")})]})]}),t.jsxs("label",{children:[t.jsx("span",{children:i("knowledge.sort")}),t.jsx("input",{className:"config-input",type:"number",min:"0",value:p.sort,onChange:O=>h({...p,sort:O.target.value})})]})]}),t.jsxs("div",{className:"modal-actions",children:[t.jsx("button",{className:"ghost-button",type:"button",onClick:()=>h(null),children:i("common.cancel")}),t.jsxs("button",{className:"primary-button",type:"submit",disabled:v,children:[t.jsx(ka,{size:16}),i(v?"knowledge.saving":"common.save")]})]})]})]})}):null]})}function rw(){const s=Dt(),{t:i}=Ze(),[o,d]=f.useState(null),[p,h]=f.useState(null),[m,_]=f.useState(null),[v,g]=f.useState(""),[y,j]=f.useState(!0),[z,Y]=f.useState(""),P=f.useCallback(async()=>{j(!0),Y("");try{const[C,B,U,O]=await Promise.all([e0().catch(()=>({data:{}})),n0().catch(()=>({data:{}})),l0().catch(()=>({data:[]})),i0().catch(()=>({data:""}))]);d(C.data),h(B.data),_(U.data),g(typeof O.data=="string"?O.data:"")}catch(C){Y(C instanceof Error?C.message:i("queue.toastLoadFailed"))}finally{j(!1)}},[i]);f.useEffect(()=>{if(!Ot()){s.replace("/login");return}P()},[P,s]);function K(C,B,U){return C?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[U," ",B]}),t.jsx("div",{className:"queue-grid",children:Object.entries(C).map(([O,ee])=>t.jsxs("div",{className:"queue-item",children:[t.jsx("small",{children:O}),t.jsx("strong",{children:typeof ee=="object"?JSON.stringify(ee):String(ee??"—")})]},O))})]}):null}return t.jsxs(Yt,{title:i("queue.title"),subtitle:i("queue.subtitle"),children:[t.jsxs("div",{className:"toolbar-row",children:[t.jsxs("div",{children:[t.jsx("h2",{children:i("queue.heading")}),t.jsx("p",{children:i("queue.statusDescription")})]}),t.jsx("div",{className:"button-row",children:t.jsxs("button",{className:"ghost-button",type:"button",onClick:P,disabled:y,children:[t.jsx(kt,{size:16}),i("common.refresh")]})})]}),z?t.jsx("div",{className:"form-error",children:z}):null,y?t.jsx(yt,{label:i("queue.loading")}):null,t.jsxs("div",{style:{display:"grid",gap:16},children:[K(o,i("queue.systemStatus"),t.jsx(Lo,{size:18})),K(p,i("queue.queueStats"),t.jsx(qd,{size:18})),m&&m.length>0?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(dv,{size:18})," ",i("queue.workload")]}),t.jsx("pre",{className:"log-viewer",children:JSON.stringify(m,null,2)})]}):null,v?t.jsxs("section",{className:"panel",style:{padding:18},children:[t.jsxs("h3",{style:{display:"flex",alignItems:"center",gap:8,margin:"0 0 14px"},children:[t.jsx(bv,{size:18})," ",i("queue.systemLog")]}),t.jsx("pre",{className:"log-viewer",children:v})]}):null]})]})}const cw=f.createContext(null);function dw({children:s}){const[i,o]=f.useState([]),[d,p]=f.useState(null),h=f.useCallback((g,y="success")=>{const j=Math.random().toString(36).substring(2,9);o(z=>[...z,{id:j,message:g,type:y}]),setTimeout(()=>{o(z=>z.filter(Y=>Y.id!==j))},5e3)},[]),m=f.useCallback(g=>{p(g)},[]);f.useEffect(()=>{typeof window<"u"&&(window.showToast=h,window.showConfirm=m)},[h,m]);const _=async()=>{if(d){try{await d.onConfirm()}catch(g){console.error("Error in onConfirm:",g)}p(null)}},v=()=>{d&&(d.onCancel&&d.onCancel(),p(null))};return t.jsxs(cw.Provider,{value:{showToast:h,showConfirm:m},children:[s,t.jsx("div",{className:"toast-container",children:i.map(g=>{let y=wv;return g.type==="success"&&(y=ix),g.type==="error"&&(y=fv),g.type==="warning"&&(y=kd),t.jsxs("div",{className:`toast-card toast-${g.type}`,children:[t.jsx("div",{className:"toast-icon",children:t.jsx(y,{size:18})}),t.jsx("div",{className:"toast-message",children:g.message}),t.jsx("button",{className:"toast-close",onClick:()=>o(j=>j.filter(z=>z.id!==g.id)),children:t.jsx(ct,{size:14})})]},g.id)})}),d&&t.jsx("div",{className:"confirm-backdrop",onClick:v,children:t.jsxs("div",{className:"confirm-card",onClick:g=>g.stopPropagation(),children:[t.jsxs("div",{className:"confirm-header",children:[t.jsx("div",{className:"confirm-icon",children:t.jsx(kd,{size:22})}),t.jsx("h3",{className:"confirm-title",children:d.title||"Confirmation"})]}),t.jsx("p",{className:"confirm-message",children:d.message}),t.jsxs("div",{className:"confirm-actions",children:[t.jsx("button",{className:"confirm-btn-cancel",onClick:v,children:d.cancelText||"Cancel"}),t.jsx("button",{className:"confirm-btn-ok",onClick:_,children:d.confirmText||"Confirm"})]})]})}),t.jsx("style",{dangerouslySetInnerHTML:{__html:`
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
      `}})]})}function uw({children:s}){return t.jsx(h0,{children:t.jsx(dw,{children:s})})}function pw(){return t.jsx(uw,{children:t.jsxs(Ky,{children:[t.jsx(wt,{path:"/login",element:t.jsx(x0,{})}),t.jsx(wt,{path:"/dashboard",element:t.jsx(k0,{})}),t.jsx(wt,{path:"/config/system",element:t.jsx(A0,{})}),t.jsx(wt,{path:"/config/payment",element:t.jsx(H0,{})}),t.jsx(wt,{path:"/config/theme",element:t.jsx(B0,{})}),t.jsx(wt,{path:"/server/manage",element:t.jsx(jj,{})}),t.jsx(wt,{path:"/server/group",element:t.jsx(wj,{})}),t.jsx(wt,{path:"/server/route",element:t.jsx(Sj,{})}),t.jsx(wt,{path:"/plan",element:t.jsx(Tj,{})}),t.jsx(wt,{path:"/order",element:t.jsx(Dj,{})}),t.jsx(wt,{path:"/coupon",element:t.jsx(Oj,{})}),t.jsx(wt,{path:"/giftcard",element:t.jsx(Uj,{})}),t.jsx(wt,{path:"/user",element:t.jsx(Yj,{})}),t.jsx(wt,{path:"/subscription",element:t.jsx(Jj,{})}),t.jsx(wt,{path:"/device",element:t.jsx(ew,{})}),t.jsx(wt,{path:"/webcon",element:t.jsx(lw,{})}),t.jsx(wt,{path:"/notice",element:t.jsx(iw,{})}),t.jsx(wt,{path:"/ticket",element:t.jsx(sw,{})}),t.jsx(wt,{path:"/knowledge",element:t.jsx(ow,{})}),t.jsx(wt,{path:"/queue",element:t.jsx(rw,{})}),t.jsx(wt,{path:"/",element:t.jsx(Ff,{to:"/dashboard",replace:!0})}),t.jsx(wt,{path:"*",element:t.jsx(Ff,{to:"/dashboard",replace:!0})})]})})}ty.createRoot(document.getElementById("root")).render(t.jsx(f.StrictMode,{children:t.jsx(ev,{children:t.jsx(pw,{})})}));
